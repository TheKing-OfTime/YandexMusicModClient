(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4359],
  {
    28889: function (e, t, i) {
      "use strict";
      i.d(t, {
        V: function () {
          return a;
        },
      });
      var l = i(2954);
      let a = (e) => !!e && (e === l.h.RATING || e === l.h.YEAR);
    },
    47446: function (e, t, i) {
      "use strict";
      i.d(t, {
        useSort: function () {
          return n;
        },
      });
      var l = i(65067),
        a = i(2954),
        o = i(13534),
        s = i(28889);
      let n = (e) => {
        let { sortModel: t } = e,
          i = (0, o.m5R)();
        (0, l.useLayoutEffect)(() => {
          let e = new URL(window.location.href).searchParams.get(o.wxR.SORT);
          e && (0, s.V)(e) ? t.setSortBy(e) : t.setSortBy(a.h.YEAR);
        }, [t]),
          (0, l.useEffect)(() => {
            if (t.sortBy) {
              let e = (0, o.rdz)(o.wxR.SORT, t.sortBy);
              e && i(e);
            }
          }, [i, t.sortBy]);
      };
    },
    95921: function (e, t, i) {
      "use strict";
      i.d(t, {
        SortDropdown: function () {
          return x;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(65067),
        s = i(15937),
        n = i(2954),
        r = i(93093),
        c = i(68208),
        d = i(37629),
        m = i(69756),
        u = i(17392),
        _ = i(13534),
        C = i(28889),
        h = i(68197),
        p = i.n(h);
      let g = {
          [n.h.RATING]: (0, l.jsx)(s.Z, { id: "sort.sort-by-rating" }),
          [n.h.YEAR]: (0, l.jsx)(s.Z, { id: "sort.sort-by-year" }),
        },
        x = (0, a.Pi)((e) => {
          var t;
          let { sortModel: i, onSort: a } = e,
            {
              settings: { isMobile: h },
            } = (0, _.oR4)(),
            x = (0, r.W)((e) => {
              (0, C.V)(e.id) && i.sortBy !== e.id && (i.setSortBy(e.id), a());
            }),
            v = (0, o.useMemo)(
              () =>
                h
                  ? (0, l.jsx)(c.Button, {
                      radius: "xxxl",
                      className: p().button,
                      icon: (0, l.jsx)(m.Icon, {
                        variant: "filter",
                        size: "xs",
                      }),
                    })
                  : (0, l.jsxs)(c.Button, {
                      radius: "xxxl",
                      className: p().button,
                      children: [
                        (0, l.jsx)(u.Caption, {
                          variant: "span",
                          size: "m",
                          weight: "medium",
                          children: i.sortBy
                            ? g[i.sortBy]
                            : (0, l.jsx)(s.Z, { id: "sort.select-filter" }),
                        }),
                        (0, l.jsx)(m.Icon, {
                          size: "xxs",
                          variant: "arrowDown",
                        }),
                      ],
                    }),
              [h, i.sortBy],
            );
          return (0, l.jsx)(d.Lt, {
            placement: h ? "bottom" : "top",
            isMobile: h,
            strategy: "fixed",
            className: p().root,
            onSelect: x,
            reference: v,
            offsetOptions: { mainAxis: 10, crossAxis: -50 },
            defaultValue:
              null !== (t = i.sortBy) && void 0 !== t ? t : n.h.YEAR,
            containerClassName: p().container,
            header: h ? (0, l.jsx)("div", { className: p().header }) : void 0,
            children: Object.values(n.h).map((e) =>
              (0, l.jsx)(d.Wx, { id: e, label: g[e] }, e),
            ),
          });
        });
    },
    91854: function (e, t, i) {
      "use strict";
      i.d(t, {
        O: function () {
          return l;
        },
      });
      let l = 20;
    },
    42062: function (e, t, i) {
      "use strict";
      i.d(t, {
        O: function () {
          return a;
        },
      });
      var l = i(84638);
      let a = (e, t, i) => {
        let a = { type: l.A.Various, meta: { id: e.id }, from: i || "" };
        return (
          void 0 !== e.albumId &&
            (a = { type: l.A.Album, meta: { id: e.albumId }, from: i || "" }),
          {
            contextData: a,
            queueParams: { entityId: e.id, index: t },
            loadContextMeta: !0,
          }
        );
      };
    },
    24082: function (e, t, i) {
      "use strict";
      i.d(t, {
        f: function () {
          return s;
        },
      });
      var l,
        a,
        o = i(84638);
      ((l = a || (a = {})).ALBUM = "album"), (l.PLAYLIST = "playlist");
      let s = (e, t) => {
        var i, l;
        return e.type === a.ALBUM
          ? {
              type: o.A.Album,
              meta: {
                id:
                  (null === (l = e.album) || void 0 === l ? void 0 : l.id) || 0,
              },
              from: t || "",
            }
          : {
              type: o.A.Playlist,
              meta: {
                id:
                  (null === (i = e.playlist) || void 0 === i ? void 0 : i.id) ||
                  "",
              },
              from: t || "",
            };
      };
    },
    28252: function (e, t, i) {
      "use strict";
      var l, a;
      i.d(t, {
        Q: function () {
          return l;
        },
      }),
        ((a = l || (l = {}))[(a.TRACKS = 0)] = "TRACKS"),
        (a[(a.ARTISTS = 1)] = "ARTISTS");
    },
    79217: function (e, t, i) {
      "use strict";
      var l, a;
      i.d(t, {
        f: function () {
          return l;
        },
      }),
        ((a = l || (l = {})).TRACKS = "tracks"),
        (a.ARTISTS = "artists");
    },
    37659: function (e, t, i) {
      "use strict";
      i.d(t, {
        v: function () {
          return n;
        },
      });
      var l = i(65067),
        a = i(13534),
        o = i(79217),
        s = i(28252);
      let n = (e) => {
        let t = (0, a.m5R)();
        return (0, l.useCallback)(
          (i) => {
            var l;
            switch (
              (null === (l = e.onTabChange) || void 0 === l || l.call(e, i), i)
            ) {
              case s.Q.TRACKS:
                t("/collection/dislikes?tab=".concat(o.f.TRACKS));
                break;
              case s.Q.ARTISTS:
                t("/collection/dislikes?tab=".concat(o.f.ARTISTS));
            }
          },
          [t, e],
        );
      };
    },
    31699: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionAlbumsPage: function () {
          return M;
        },
      });
      var l,
        a,
        o = i(75441),
        s = i(62569),
        n = i(98730),
        r = i(65067),
        c = i(35846),
        d = i(24226),
        m = i(69947),
        u = i(13534);
      ((l = a || (a = {}))[(l.LIKED_ALBUMS = 0)] = "LIKED_ALBUMS"),
        (l[(l.UPCOMING_ALBUMS = 1)] = "UPCOMING_ALBUMS");
      var _ = i(86190),
        C = i.n(_),
        h = i(32358),
        p = i(9317),
        g = i(72783),
        x = i(97141),
        v = i(15937),
        b = i(17392);
      let y = (e) => {
        let t = (0, u.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var l;
            switch (
              (null === (l = e.onTabChange) || void 0 === l || l.call(e, i), i)
            ) {
              case a.LIKED_ALBUMS:
                t("/collection/albums?tab=".concat(u.GrA.LIKED_ALBUMS));
                break;
              case a.UPCOMING_ALBUMS:
                t("/collection/albums?tab=".concat(u.GrA.UPCOMING_ALBUMS));
            }
          },
          [t, e],
        );
      };
      var P = i(76451),
        j = i.n(P),
        k = i(28676);
      let f = () =>
          (0, o.jsxs)("div", {
            className: j().tabsShimmer,
            children: [
              (0, o.jsx)(k.Shimmer, { className: j().tabShimmer }),
              (0, o.jsx)(k.Shimmer, { className: j().tabShimmer }),
            ],
          }),
        N = (0, s.Pi)((e) => {
          var t, i, l;
          let { tabsState: s, tabElementId: n } = e,
            { collection: c } = (0, u.oR4)(),
            { formatMessage: d } = (0, p.Z)(),
            m = (0, u.k67)(),
            { isScrolling: _ } = (0, r.useContext)(x.pI),
            C = y(s),
            h = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            g = (0, r.useMemo)(() => {
              var e;
              return (
                null === (e = c.albums.upcomingAlbums.items) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(c.albums.upcomingAlbums.items.length)
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums.items) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, o.jsxs)("header", {
            className: j().root,
            "aria-hidden": _,
            children: [
              (0, o.jsxs)("div", {
                className: j().container,
                children: [
                  m.canBack &&
                    (0, o.jsx)(x.nP, {
                      withForwardControl: !1,
                      withBackwardControl: m.canBack,
                      shouldFocusOnMount: !_,
                    }),
                  (0, o.jsx)(b.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: j().title,
                    children: (0, o.jsx)(v.Z, {
                      id: "entity-names.favourite-albums",
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(x.no, {
                isShimmerVisible: c.albums.isLoading,
                shimmer: (0, o.jsx)(f, {}),
                className: j().tabs,
                elementId: n,
                ...s,
                onTabChange: C,
                children: [
                  (0, o.jsx)(x.OK, {
                    className: j().tab,
                    value: a.LIKED_ALBUMS,
                    title: h,
                    "aria-label": d(
                      { id: "entity-names.albums-count" },
                      { value: c.albums.items.length },
                    ),
                    "aria-hidden": _,
                    tabIndex: _ ? -1 : 0,
                  }),
                  (0, o.jsx)(x.OK, {
                    className: j().tab,
                    value: a.UPCOMING_ALBUMS,
                    title: g,
                    "aria-label": d(
                      { id: "entity-names.upcoming-albums-count" },
                      {
                        value:
                          null !==
                            (l =
                              null === (i = c.albums.upcomingAlbums.items) ||
                              void 0 === i
                                ? void 0
                                : i.length) && void 0 !== l
                            ? l
                            : 0,
                      },
                    ),
                    "aria-hidden": _,
                    tabIndex: _ ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var S = i(64062),
        L = i.n(S);
      let I = (0, s.Pi)((e) => {
        var t, i, l;
        let { forwardRef: s, tabsState: n, tabElementId: c } = e,
          {
            user: m,
            collection: _,
            settings: { isMobile: C },
          } = (0, u.oR4)(),
          { formatMessage: v } = (0, p.Z)(),
          b = (0, r.useCallback)(
            (e) => {
              m.account.data.uid &&
                _.albums.getData({
                  userId: m.account.data.uid,
                  metaType: "music",
                  page: e,
                  pageSize: 20,
                });
            },
            [_.albums, m.account.data.uid],
          ),
          y = (0, r.useMemo)(
            () => ({
              Header: () => (0, o.jsx)(N, { tabsState: n, tabElementId: c }),
              Footer: () => (0, o.jsx)(x.$_, { className: L().footer }),
            }),
            [c, n],
          );
        return (0, o.jsx)("div", {
          className: L().root,
          children: (0, o.jsx)(d.TabPanel, {
            value: n.value,
            name: a.LIKED_ALBUMS,
            elementId: c,
            className: L().tabPanel,
            children: (0, o.jsx)(x.Wv, {
              className: (0, h.W)(L().scrollContainer, L().important),
              customComponents: y,
              itemContentCallback: (e) => {
                var t;
                let i =
                    null === (t = _.albums.items) || void 0 === t
                      ? void 0
                      : t[e],
                  l = v(
                    { id: "loading-messages.entity-is-loading" },
                    { entityName: v({ id: "entity-names.album" }) },
                  );
                return i
                  ? (0, o.jsx)(g.rf, { album: i, contentLinesCount: 4 }, i.id)
                  : (0, o.jsx)(x.hi, { "aria-label": l, linesCount: 4 });
              },
              totalCount:
                null !==
                  (i =
                    null === (t = _.albums.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== i
                  ? i
                  : 0,
              onGetDataByPage: b,
              pageSize: 20,
              totalRequests:
                null !== (l = _.albums.requestsCount) && void 0 !== l ? l : 0,
              listClassName: L().content,
              itemClassName: L().item,
              handleRef: s,
              context: {
                listAriaLabel: v({ id: "collection.liked-albums-list" }),
              },
              isMobileLayout: C,
              useWindowScroll: C,
            }),
          }),
        });
      });
      var A = i(17294);
      let E = (0, s.Pi)((e) => {
        let { forwardRef: t, tabsState: i, tabElementId: l } = e,
          { collection: s } = (0, u.oR4)(),
          { formatMessage: n } = (0, p.Z)(),
          c = (0, r.useMemo)(() => {
            var e;
            let t = n(
              { id: "loading-messages.entity-is-loading" },
              { entityName: n({ id: "entity-names.album" }) },
            );
            return s.albums.isUpcomingAlbumsLoading
              ? (0, o.jsx)(x.Wm, { isActive: !0, "aria-label": t })
              : null === (e = s.albums.upcomingAlbums.items) || void 0 === e
                ? void 0
                : e.map((e) => (0, o.jsx)(g.vK, { upcomingAlbum: e }, e.id));
          }, [s.albums.isUpcomingAlbumsLoading, s.albums.upcomingAlbums, n]);
        return (0, o.jsxs)(A.t, {
          className: L().root,
          containerClassName: (0, h.W)(L().scrollContainer, L().important),
          ref: t,
          children: [
            (0, o.jsx)(N, { tabsState: i, tabElementId: l }),
            (0, o.jsx)(d.TabPanel, {
              value: i.value,
              name: a.UPCOMING_ALBUMS,
              elementId: l,
              className: L().content,
              children: c,
            }),
            (0, o.jsx)(x.$_, { className: L().footer }),
          ],
        });
      });
      var T = i(69756),
        w = i(92532),
        R = i.n(w);
      let B = (0, s.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            l = (0, r.useMemo)(() => {
              switch (t.value) {
                case a.LIKED_ALBUMS:
                  return (0, o.jsx)(v.Z, {
                    id: "error-messages.empty-collection-albums-title",
                  });
                case a.UPCOMING_ALBUMS:
                  return (0, o.jsx)(v.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t.value]),
            s = t.value === a.LIKED_ALBUMS;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(N, { tabsState: t, tabElementId: i }),
              (0, o.jsxs)(d.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: R().root,
                children: [
                  (0, o.jsx)(T.Icon, {
                    className: R().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, o.jsx)(b.Heading, {
                    className: R().title,
                    variant: "h3",
                    size: "xs",
                    children: l,
                  }),
                  s &&
                    (0, o.jsx)(b.Caption, {
                      className: R().text,
                      variant: "span",
                      type: "controls",
                      size: "l",
                      weight: "normal",
                      children: (0, o.jsx)(v.Z, {
                        id: "error-messages.empty-collection-albums-description",
                      }),
                    }),
                ],
              }),
            ],
          });
        }),
        D = (0, s.Pi)((e) => {
          var t, i, l;
          let { tabsState: s, tabElementId: n } = e,
            { collection: c } = (0, u.oR4)(),
            { formatMessage: d } = (0, p.Z)(),
            { isScrolling: m } = (0, r.useContext)(x.pI),
            _ = (0, u.k67)(),
            C = y(s),
            g = (0, r.useMemo)(
              () =>
                c.albums.items.length
                  ? ""
                      .concat(d({ id: "entity-names.albums" }), " • ")
                      .concat(c.albums.items.length)
                  : d({ id: "entity-names.albums" }),
              [c.albums.items.length, d],
            ),
            v = (0, r.useMemo)(() => {
              var e, t;
              return (
                null === (e = c.albums.upcomingAlbums.items) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? ""
                    .concat(d({ id: "entity-names.upcoming-albums" }), " • ")
                    .concat(
                      null === (t = c.albums.upcomingAlbums.items) ||
                        void 0 === t
                        ? void 0
                        : t.length,
                    )
                : d({ id: "entity-names.upcoming-albums" });
            }, [
              null === (t = c.albums.upcomingAlbums.items) || void 0 === t
                ? void 0
                : t.length,
              d,
            ]);
          return (0, o.jsx)(x.h4, {
            variant: x.bm.COMPOSITE,
            staticClassName: (0, h.W)(j().staticHeader, j().important),
            "aria-hidden": !m,
            stickyClassName: (0, h.W)(j().stickyHeader, j().important),
            stickyChild: (0, o.jsxs)("div", {
              className: j().container,
              children: [
                _.canBack &&
                  (0, o.jsx)(x.nP, {
                    withForwardControl: !1,
                    withBackwardControl: _.canBack,
                    shouldFocusOnMount: !1,
                    buttonSize: "xs",
                  }),
                (0, o.jsxs)(x.no, {
                  isShimmerVisible: c.albums.isLoading,
                  shimmer: (0, o.jsx)(f, {}),
                  className: j().tabs,
                  elementId: n,
                  ...s,
                  onTabChange: C,
                  children: [
                    (0, o.jsx)(x.OK, {
                      className: j().tab,
                      value: a.LIKED_ALBUMS,
                      title: g,
                      "aria-label": d(
                        { id: "entity-names.albums-count" },
                        { value: c.albums.items.length },
                      ),
                      "aria-hidden": !m,
                      tabIndex: m ? 0 : -1,
                    }),
                    (0, o.jsx)(x.OK, {
                      className: j().tab,
                      value: a.UPCOMING_ALBUMS,
                      title: v,
                      "aria-label": d(
                        { id: "entity-names.upcoming-albums-count" },
                        {
                          value:
                            null !==
                              (l =
                                null === (i = c.albums.upcomingAlbums.items) ||
                                void 0 === i
                                  ? void 0
                                  : i.length) && void 0 !== l
                              ? l
                              : 0,
                        },
                      ),
                      "aria-hidden": !m,
                      tabIndex: m ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        M = (0, s.Pi)(() => {
          let e = (0, n.useSearchParams)(),
            {
              user: t,
              collection: i,
              experiments: l,
              library: s,
            } = (0, u.oR4)(),
            { contentScrollRef: _, setContentScrollRef: h } = (0, u.$Y6)(),
            p = l.checkExperiment(u.peG.WebNextDisableCollectionAlbums, "on"),
            g = l.checkExperiment(u.peG.WebNextDisableCollection, "on"),
            x = (0, r.useId)(),
            v = (0, r.useMemo)(() => {
              switch (e.get(u.wxR.TAB)) {
                case u.GrA.LIKED_ALBUMS:
                  break;
                case u.GrA.UPCOMING_ALBUMS:
                  return a.UPCOMING_ALBUMS;
              }
              return a.LIKED_ALBUMS;
            }, [e]),
            b = (0, d.useTabsState)(v);
          p && g && (0, n.redirect)("/"),
            p && (0, n.redirect)("/collection"),
            (0, u.NOh)(i.albums.isResolved),
            (0, r.useEffect)(
              () => () => {
                i.albums.reset();
              },
              [i.albums],
            );
          let y = (0, r.useMemo)(() => {
            switch (b.value) {
              case a.LIKED_ALBUMS:
                if (i.albums.isAlbumsEmpty)
                  return (0, o.jsx)(B, { tabsState: b, tabElementId: x });
                return (0, o.jsx)(I, {
                  forwardRef: h,
                  tabsState: b,
                  tabElementId: x,
                });
              case a.UPCOMING_ALBUMS:
                if (i.albums.isUpcomingAlbumsEmpty)
                  return (0, o.jsx)(B, { tabsState: b, tabElementId: x });
                return (0, o.jsx)(E, {
                  forwardRef: h,
                  tabsState: b,
                  tabElementId: x,
                });
            }
          }, [i.albums.isAlbumsEmpty, i.albums.isUpcomingAlbumsEmpty, h, x, b]);
          if (t.account.data.uid && i.albums.isNeededToLoad) {
            let e = [
              i.albums.getData({
                userId: t.account.data.uid,
                metaType: "music",
                page: 0,
                pageSize: 20,
              }),
              i.albums.getPresaves({ userId: t.account.data.uid }),
            ];
            l.checkExperiment(u.peG.WebNextLibrarySync, "on") &&
              e.push(s.getData()),
              (0, r.use)(Promise.allSettled(e));
          }
          return (0, o.jsx)(u.Lh6, {
            pageId: u.Rhz.OWN_ALBUMS,
            children: (0, o.jsx)(m.I7, {
              scrollElement: _,
              headerThreshold: 148,
              children: (0, o.jsxs)("div", {
                className: C().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_ALBUMS_PAGE),
                children: [(0, o.jsx)(D, { tabsState: b, tabElementId: x }), y],
              }),
            }),
          });
        });
    },
    32044: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionArtistsPage: function () {
          return j;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(98730),
        n = i(65067),
        r = i(9317),
        c = i(15937),
        d = i(4875),
        m = i(35846),
        u = i(17392),
        _ = i(55051),
        C = i(69947),
        h = i(13534),
        p = i(97141),
        g = i(71088),
        x = i.n(g),
        v = i(89428),
        b = i(25041),
        y = i.n(b);
      let P = (0, o.Pi)(() => {
          let { collection: e } = (0, h.oR4)(),
            { formatMessage: t } = (0, r.Z)(),
            i = t(
              { id: "loading-messages.entity-is-loading" },
              { entityName: t({ id: "entity-names.artist" }) },
            ),
            a = (0, n.useMemo)(
              () =>
                e.artists.topArtists.isResolved
                  ? e.artists.topArtists.items.map((i, a) => {
                      var o;
                      let s = null;
                      if (i.listenTimeSeconds) {
                        let e = i.listenTimeSeconds / 60;
                        s =
                          e <= 45
                            ? t(
                                { id: "time.minutes-left" },
                                { minutes: Math.round(e) },
                              )
                            : t(
                                { id: "time.hours" },
                                { hours: Math.round((e / 60) * 2) / 2 },
                              );
                      }
                      return (0, l.jsx)(
                        h.nZ5,
                        {
                          objectType: d.OB.Artist,
                          objectId: i.artist.id,
                          objectPosX: a + 1,
                          objectPosY: 1,
                          objectsCount: e.artists.topArtists.items.length,
                          children: (0, l.jsx)(
                            _.IT,
                            {
                              topTitleElement:
                                i.top &&
                                (0, l.jsx)(
                                  v.kL,
                                  {
                                    className: y().chart,
                                    position: i.top.position,
                                    progress: i.top.progress,
                                    weight: "bold",
                                    positionClassName: y().position,
                                    withIcon: 0 === a,
                                    withCrownIcon: 0 === a,
                                  },
                                  i.getKey("ArtistTop"),
                                ),
                              bottomTitleElement: s
                                ? (0, l.jsx)(u.Caption, {
                                    className: y().listenTime,
                                    variant: "div",
                                    type: "entity",
                                    size: "s",
                                    weight: "medium",
                                    lineClamp: 1,
                                    children: s,
                                  })
                                : void 0,
                              artist: i.artist,
                              contentLinesCount: 4,
                            },
                            null === (o = i.artist) || void 0 === o
                              ? void 0
                              : o.id,
                          ),
                        },
                        i.artist.id,
                      );
                    })
                  : (0, l.jsx)(p.Wm, {
                      linesCount: 4,
                      count: 3,
                      isActive: !0,
                      "aria-label": i,
                      round: !0,
                      centered: !0,
                    }),
              [
                t,
                i,
                e.artists.topArtists.isResolved,
                e.artists.topArtists.items,
              ],
            );
          return (0, l.jsxs)(h.Ja5, {
            blockId: "collection_artists_top",
            blockType: "ARTISTS_TOP",
            blockPosX: 1,
            blockPosY: 1,
            blockIdForFrom: "collection_artists_top",
            objectsCount: e.artists.topArtists.items.length,
            children: [
              (0, l.jsx)(u.Heading, {
                size: "s",
                weight: "bold",
                variant: "h2",
                className: y().subTitle,
                children: (0, l.jsx)(c.Z, { id: "entity-names.top-artists" }),
              }),
              (0, l.jsx)("div", { className: y().gridLayout, children: a }),
            ],
          });
        }),
        j = (0, o.Pi)(() => {
          var e, t, i, o;
          let {
              user: g,
              collection: v,
              experiments: b,
              settings: { isMobile: y },
              library: j,
            } = (0, h.oR4)(),
            { formatMessage: k } = (0, r.Z)(),
            { contentScrollRef: f, setContentScrollRef: N } = (0, h.$Y6)(),
            S = (0, h.k67)(),
            L = b.checkExperiment(h.peG.WebNextDisableCollectionArtists, "on"),
            I = b.checkExperiment(h.peG.WebNextDisableCollection, "on"),
            A = b.checkExperiment(h.peG.WebNextArtistsTop, "on");
          L && I && (0, s.redirect)("/"),
            L && (0, s.redirect)("/collection"),
            (0, h.NOh)(v.artists.isResolved),
            (0, n.useEffect)(
              () => () => {
                v.artists.reset();
              },
              [v.artists],
            );
          let E = (0, n.useCallback)(
              (e) => {
                g.account.data.uid &&
                  v.artists.getData({
                    userId: g.account.data.uid,
                    page: e,
                    pageSize: 20,
                  });
              },
              [v.artists, g.account.data.uid],
            ),
            T = k(
              { id: "loading-messages.entity-is-loading" },
              { entityName: k({ id: "entity-names.artist" }) },
            ),
            w =
              A &&
              (v.artists.topArtists.items.length ||
                !v.artists.topArtists.isResolved),
            R = (0, n.useMemo)(
              () =>
                w
                  ? () =>
                      (0, l.jsxs)("div", {
                        className: (0, a.W)(
                          x().contentBlock,
                          x().contentBlock_withMarginTop,
                        ),
                        children: [
                          (0, l.jsx)(P, {}),
                          (v.artists.items.length > 0 ||
                            !v.artists.isResolved) &&
                            (0, l.jsx)(u.Heading, {
                              size: "s",
                              weight: "bold",
                              variant: "h2",
                              className: x().subTitle,
                              children: (0, l.jsx)(c.Z, {
                                id: "entity-names.liked-artist",
                              }),
                            }),
                        ],
                      })
                  : null,
              [w, v.artists.items.length, v.artists.isResolved],
            ),
            B = (0, n.useMemo)(
              () => ({
                Header: R,
                Footer: () => (0, l.jsx)(p.$_, { className: x().footer }),
              }),
              [R],
            );
          if (g.account.data.uid && v.artists.isNeededToLoad) {
            let e = [v.artists.getData({ userId: g.account.data.uid })];
            b.checkExperiment(h.peG.WebNextLibrarySync, "on") &&
              e.push(j.getData()),
              A && e.push(v.artists.getDataTopArtists()),
              (0, n.use)(Promise.allSettled(e));
          }
          let D =
            !v.artists.isLoading ||
            (null === (e = v.artists.pager) || void 0 === e ? void 0 : e.total)
              ? null !==
                  (i =
                    null === (t = v.artists.pager) || void 0 === t
                      ? void 0
                      : t.total) && void 0 !== i
                ? i
                : 0
              : 10;
          return (0, l.jsx)(h.Lh6, {
            pageId: h.Rhz.OWN_ARTISTS,
            children: (0, l.jsx)(h.e4N, {
              children: (0, l.jsx)(C.I7, {
                scrollElement: f,
                outerTitle: k({ id: "entity-names.artists" }),
                children: (0, l.jsxs)("div", {
                  className: x().root,
                  ...(0, m.BA)(m.Br.collection.COLLECTION_ARTISTS_PAGE),
                  children: [
                    (0, l.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: S.canBack,
                      children: (0, l.jsx)(u.Heading, {
                        id: "collection-artists-header",
                        variant: "h1",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, l.jsx)(c.Z, {
                          id: "entity-names.artists",
                        }),
                      }),
                    }),
                    (0, l.jsx)(p.Wv, {
                      className: (0, a.W)(x().scrollContainer, x().important),
                      customComponents: B,
                      itemContentCallback: (e) => {
                        var t;
                        let i =
                          null === (t = v.artists.items) || void 0 === t
                            ? void 0
                            : t[e];
                        return i
                          ? (0, l.jsx)(h.Ja5, {
                              blockId: "collection_artist",
                              blockType: "ARTIST",
                              blockPosX: e + 1,
                              blockPosY: 1,
                              blockIdForFrom: i.id,
                              objectsCount: v.artists.items.length,
                              children: (0, l.jsx)(h.nZ5, {
                                objectType: d.OB.Artist,
                                objectId: i.id,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: v.artists.items.length,
                                children: (0, l.jsx)(
                                  _.IT,
                                  { artist: i, contentLinesCount: 3 },
                                  i.id,
                                ),
                              }),
                            })
                          : (0, l.jsx)(p.hi, {
                              isActive: !0,
                              "aria-label": T,
                              round: !0,
                              centered: !0,
                            });
                      },
                      initialItemCount: D,
                      totalCount: D,
                      onGetDataByPage: E,
                      pageSize: 20,
                      totalRequests:
                        null !== (o = v.artists.requests) && void 0 !== o
                          ? o
                          : 0,
                      listClassName: (0, a.W)(
                        x().contentBlock,
                        x().gridLayout,
                        { [x().contentBlock_withMarginTop]: !w },
                      ),
                      itemClassName: x().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: k({
                          id: "collection.liked-artists-list",
                        }),
                      },
                      isMobileLayout: y,
                      useWindowScroll: y,
                    }),
                  ],
                }),
              }),
            }),
          });
        });
    },
    70465: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionClipsPage: function () {
          return D;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(98730),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(29088),
        m = i(17392),
        u = i(30948),
        _ = i(69947),
        C = i(14924),
        h = i(13534),
        p = i(97141),
        g = i(68829),
        x = i.n(g),
        v = i(32358),
        b = i(71361),
        y = i(93093),
        P = i(26669),
        j = i(61039);
      let k = () =>
        window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2;
      var f = i(32663),
        N = i.n(f);
      let S = (0, a.Pi)((e) => {
        var t;
        let { className: i } = e,
          { formatMessage: a } = (0, n.Z)(),
          { clipsWillLike: o } = (0, h.oR4)().collection.clips;
        return (
          o.isNeededToLoad && (0, s.use)(o.getData()),
          (0, l.jsx)(h.Ja5, {
            blockId: h.BEo.CLIPS_CAROUSEL,
            blockType: h.BEo.CLIPS_CAROUSEL,
            blockPosX: 1,
            blockPosY: 7,
            objectsCount:
              null === (t = o.clips) || void 0 === t ? void 0 : t.length,
            children: (0, l.jsx)(j.Op, {
              className: (0, v.W)(N().root, i),
              containerClassName: N().carouselBlock,
              carouselItemClassName: (0, v.W)(N().carouselItem, N().important),
              headerClassName: (0, v.W)(
                N().carouselBlockHeader,
                N().carouselBlock,
              ),
              isShimmerVisible: o.isLoading,
              isShimmerActive: !0,
              title: a({ id: "entity-names.clips-will-like" }),
              clips: o.clips || [],
              headingVariant: "h2",
            }),
          })
        );
      });
      var L = i(69756),
        I = i(65100),
        A = i.n(I);
      let E = () =>
        (0, l.jsxs)("div", {
          className: A().root,
          children: [
            (0, l.jsxs)("div", {
              className: A().content,
              children: [
                (0, l.jsx)(L.Icon, {
                  className: A().icon,
                  size: "xl",
                  variant: "clip",
                }),
                (0, l.jsx)(m.Heading, {
                  className: A().title,
                  variant: "h3",
                  size: "xs",
                  children: (0, l.jsx)(r.Z, {
                    id: "error-messages.empty-collection-clips-title",
                  }),
                }),
                (0, l.jsx)(m.Caption, {
                  className: A().text,
                  variant: "span",
                  type: "controls",
                  size: "l",
                  weight: "normal",
                  children: (0, l.jsx)(r.Z, {
                    id: "error-messages.empty-collection-clips-text",
                  }),
                }),
              ],
            }),
            (0, l.jsx)(S, {}),
          ],
        });
      var T = i(62391),
        w = i.n(T);
      let R = (0, a.Pi)((e) => {
          let { virtualItem: t, resizeObserver: i, columns: a } = e,
            [o, r] = (0, P.z)(),
            { formatMessage: c } = (0, n.Z)(),
            {
              collection: { clips: d },
            } = (0, h.oR4)();
          (0, s.useEffect)(
            () => (
              o && i && i.observe(o),
              () => {
                o && i && i.unobserve(o);
              }
            ),
            [o, i],
          );
          let m = (0, s.useMemo)(
              () => d.items.slice(t.index * a, t.index * a + a),
              [d.items, t, a],
            ),
            u = d.pager && d.pager.total <= a ? 0 : 1;
          return (0, l.jsxs)(
            "div",
            {
              ref: r,
              "data-index": t.index,
              className: w().virtualItem,
              style: { transform: "translateY(".concat(t.start, "px)") },
              children: [
                (0, l.jsx)("div", {
                  style: {
                    gridTemplateColumns: "repeat(".concat(
                      a,
                      ", minmax(0, 1fr))",
                    ),
                  },
                  className: (0, v.W)(w().virtualItemRow, {
                    [w().virtualItemRow_withTopBorder]: t.index === u + 1,
                    [w().virtualItemRow_withBottomBorder]: t.index === u,
                  }),
                  children:
                    null == m
                      ? void 0
                      : m.map((e, t) => {
                          if (!e) {
                            let e = c(
                              { id: "loading-messages.entity-is-loading" },
                              { entityName: c({ id: "entity-names.clip" }) },
                            );
                            return (0, l.jsx)(j.Uh, { "aria-label": e }, t);
                          }
                          return (0, l.jsx)(j.xq, { clip: e }, e.clipId);
                        }),
                }),
                t.index === u &&
                  (0, l.jsx)(S, { className: w().clipsWillLike }),
              ],
            },
            t.key,
          );
        }),
        B = (0, a.Pi)((e) => {
          var t;
          let { contentScrollRef: i } = e,
            {
              collection: { clips: a },
              user: o,
            } = (0, h.oR4)(),
            [n, r] = (0, s.useState)(k),
            c = a.pager && a.pager.total <= n ? 0 : 1,
            {
              virtualizer: d,
              resizeObserver: m,
              setContainerRef: u,
            } = (0, h.gi4)({
              gap: 24,
              count: a.pager
                ? Math.ceil(
                    (null === (t = a.pager) || void 0 === t
                      ? void 0
                      : t.total) / n,
                  )
                : 5,
              getEstimateSize: (e) => (e === c ? 800 : 400),
            }),
            _ = (0, y.W)((e) => {
              o.account.data.uid &&
                a.getData({
                  userId: o.account.data.uid,
                  page: e,
                  pageSize: 20,
                });
            }),
            C = d.getTotalSize(),
            p = d.getVirtualItems(),
            g = (0, y.W)((e) => {
              let t = Math.floor((e.startIndex * n) / 20),
                i = Math.ceil((e.endIndex * n) / 20);
              for (let e = t; e <= i; e++) _(e);
            });
          (0, s.useEffect)(() => {
            a.isNeededToLoad &&
              (null == i || i.scrollTo({ top: 0, behavior: "instant" }),
              a.setInitialShimmer(),
              _());
          }, [a, a.isNeededToLoad, _, i]),
            (0, s.useEffect)(() => {
              !d.isScrolling && d.range && g(d.range);
            }, [g, d.range, d.isScrolling]);
          let x = (0, b.Z)(() => {
            r(k);
          }, 100);
          return ((0, s.useEffect)(
            () => (
              x(),
              window.addEventListener("resize", x),
              () => {
                window.removeEventListener("resize", x);
              }
            ),
            [x],
          ),
          a.isEmpty)
            ? (0, l.jsx)(E, {})
            : (0, l.jsx)("div", {
                className: w().virtualScroll,
                style: { height: "".concat(C, "px") },
                ref: u,
                children: p.map((e) =>
                  (0, l.jsx)(
                    R,
                    { virtualItem: e, resizeObserver: m, columns: n },
                    e.index,
                  ),
                ),
              });
        }),
        D = (0, a.Pi)(() => {
          let {
              collection: { clips: e },
              experiments: t,
            } = (0, h.oR4)(),
            { formatMessage: i } = (0, n.Z)(),
            a = (0, h.k67)(),
            g = (0, C.yO)(C.$t.COLLECTION_PAGE),
            v = t.checkExperiment(h.peG.WebNextDisableCollection, "on"),
            { contentScrollRef: b, setContentScrollRef: y } = (0, h.$Y6)();
          return (v && !g && (0, o.redirect)("/"),
          g || (0, o.redirect)("/collection"),
          (0, h.NOh)(e.isResolved),
          (0, s.useEffect)(
            () => () => {
              e.reset();
            },
            [e],
          ),
          e.isRejected)
            ? (0, l.jsx)(u.D, {})
            : (0, l.jsx)(h.Lh6, {
                pageId: h.Rhz.OWN_CLIPS,
                children: (0, l.jsx)(h.e4N, {
                  children: (0, l.jsxs)(_.I7, {
                    scrollElement: b,
                    outerTitle: i({ id: "entity-names.clips" }),
                    children: [
                      (0, l.jsx)(p.h4, {
                        variant: p.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: a.canBack,
                        children: (0, l.jsx)(m.Heading, {
                          id: "collection-artists-header",
                          variant: "h1",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: (0, l.jsx)(r.Z, {
                            id: "entity-names.clips",
                          }),
                        }),
                      }),
                      (0, l.jsxs)(d.S, {
                        scrollableContainerRef: y,
                        className: x().root,
                        containerClassName: x().content,
                        scrollContentClassName: x().scrollContent,
                        ...(0, c.BA)(c.Br.collection.COLLECTION_CLIPS_PAGE),
                        children: [
                          (0, l.jsx)(B, { contentScrollRef: b }),
                          (0, l.jsx)(p.$_, { className: x().footer }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        });
    },
    29296: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionDislikesPage: function () {
          return W;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(98730),
        s = i(65067),
        n = i(24226),
        r = i(69947),
        c = i(13534),
        d = i(79217),
        m = i(28252),
        u = i(17167),
        _ = i.n(u),
        C = i(32358),
        h = i(9317),
        p = i(30948),
        g = i(55051),
        x = i(97141),
        v = i(15937),
        b = i(17392),
        y = i(24483),
        P = i.n(y),
        j = i(37659),
        k = i(28676);
      let f = () =>
          (0, l.jsxs)("div", {
            className: P().tabsShimmer,
            children: [
              (0, l.jsx)(k.Shimmer, { className: P().tabShimmer }),
              (0, l.jsx)(k.Shimmer, { className: P().tabShimmer }),
            ],
          }),
        N = (0, a.Pi)((e) => {
          var t, i, a, o, n, r, d, u, _, C;
          let { tabsState: p, tabElementId: g, isStickyHeader: v = !1 } = e,
            {
              collection: { dislikes: b },
            } = (0, c.oR4)(),
            { formatMessage: y } = (0, h.Z)(),
            { isScrolling: k } = (0, s.useContext)(x.pI),
            N = (0, j.v)(p),
            S = k ? -1 : 0;
          v && (S = k ? 0 : -1);
          let L = (0, s.useMemo)(() => {
              var e, t;
              return (
                null === (t = b.tracks) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.tracks" }), " • ")
                    .concat(b.tracks.items.length)
                : y({ id: "entity-names.tracks" });
            }, [
              null === (i = b.tracks) || void 0 === i
                ? void 0
                : null === (t = i.items) || void 0 === t
                  ? void 0
                  : t.length,
              y,
            ]),
            I = (0, s.useMemo)(() => {
              var e, t;
              return (
                null === (t = b.artists) || void 0 === t
                  ? void 0
                  : null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length
              )
                ? ""
                    .concat(y({ id: "entity-names.artists" }), " • ")
                    .concat(b.artists.items.length)
                : y({ id: "entity-names.artists" });
            }, [
              null === (o = b.artists) || void 0 === o
                ? void 0
                : null === (a = o.items) || void 0 === a
                  ? void 0
                  : a.length,
              y,
            ]);
          return (0, l.jsxs)(x.no, {
            isShimmerVisible: b.isLoading,
            shimmer: (0, l.jsx)(f, {}),
            className: P().tabs,
            elementId: g,
            ...p,
            onTabChange: N,
            children: [
              (0, l.jsx)(x.OK, {
                className: P().tab,
                value: m.Q.TRACKS,
                title: L,
                "aria-label": y(
                  { id: "entity-names.tracks-count" },
                  {
                    value:
                      null !==
                        (_ =
                          null === (r = b.tracks) || void 0 === r
                            ? void 0
                            : null === (n = r.items) || void 0 === n
                              ? void 0
                              : n.length) && void 0 !== _
                        ? _
                        : 0,
                  },
                ),
                "aria-hidden": k,
                tabIndex: S,
              }),
              (0, l.jsx)(x.OK, {
                className: P().tab,
                value: m.Q.ARTISTS,
                title: I,
                "aria-label": y(
                  { id: "entity-names.artists-count" },
                  {
                    value:
                      null !==
                        (C =
                          null === (u = b.artists) || void 0 === u
                            ? void 0
                            : null === (d = u.items) || void 0 === d
                              ? void 0
                              : d.length) && void 0 !== C
                        ? C
                        : 0,
                  },
                ),
                "aria-hidden": k,
                tabIndex: S,
              }),
            ],
          });
        }),
        S = (0, a.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            a = (0, c.k67)(),
            { isScrolling: o } = (0, s.useContext)(x.pI);
          return (0, l.jsxs)("header", {
            className: P().root,
            "aria-hidden": o,
            children: [
              (0, l.jsxs)("div", {
                className: P().container,
                children: [
                  a.canBack &&
                    (0, l.jsx)(x.nP, {
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      shouldFocusOnMount: !o,
                    }),
                  (0, l.jsx)(b.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    className: P().title,
                    children: (0, l.jsx)(v.Z, { id: "collection.my-dislikes" }),
                  }),
                ],
              }),
              (0, l.jsx)(N, { tabsState: t, tabElementId: i }),
            ],
          });
        });
      var L = i(25404),
        I = i.n(L);
      let A = (0, a.Pi)((e) => {
        var t, i, a;
        let { forwardRef: o, tabsState: r, tabElementId: d } = e,
          {
            collection: { dislikes: u },
            settings: { isMobile: _ },
          } = (0, c.oR4)(),
          { formatMessage: v } = (0, h.Z)(),
          b = u.artists.isLoading
            ? 10
            : null !==
                  (a =
                    null === (i = u.artists) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
              ? a
              : 0,
          y = (0, s.useMemo)(
            () => ({
              Header: () => (0, l.jsx)(S, { tabsState: r, tabElementId: d }),
              Footer: () => (0, l.jsx)(x.$_, { className: I().footer }),
            }),
            [d, r],
          );
        return u.artists.isRejected
          ? (0, l.jsx)(p.D, {})
          : (0, l.jsx)("div", {
              className: I().root,
              children: (0, l.jsx)(n.TabPanel, {
                value: r.value,
                name: m.Q.ARTISTS,
                elementId: d,
                className: I().tabPanel,
                children: (0, l.jsx)(x.Wv, {
                  className: (0, C.W)(I().scrollContainer, I().important),
                  listClassName: (0, C.W)(I().content, I().content_withGrid),
                  customComponents: y,
                  initialItemCount: b,
                  totalCount: b,
                  itemContentCallback: (e) => {
                    var t, i;
                    let a =
                      null === (i = u.artists) || void 0 === i
                        ? void 0
                        : null === (t = i.items) || void 0 === t
                          ? void 0
                          : t[e];
                    if (!a) {
                      let e = v(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: v({ id: "entity-names.artist" }) },
                      );
                      return (0, l.jsx)(x.hi, {
                        "aria-label": e,
                        round: !0,
                        centered: !0,
                      });
                    }
                    return (0, l.jsx)(
                      g.IT,
                      { artist: a, contentLinesCount: 3, className: I().item },
                      a.id,
                    );
                  },
                  handleRef: o,
                  context: { listAriaLabel: v({ id: "entity-names.artists" }) },
                  isMobileLayout: _,
                  useWindowScroll: _,
                }),
              }),
            });
      });
      var E = i(84638),
        T = i(1150);
      let w = (0, a.Pi)((e) => {
        var t, i, a;
        let { forwardRef: o, tabsState: r, tabElementId: d } = e,
          { from: u } = (0, c.MhG)(),
          {
            collection: { dislikes: _ },
            settings: { isMobile: g },
          } = (0, c.oR4)(),
          { formatMessage: v } = (0, h.Z)(),
          b = (0, c.iXn)(),
          y = _.tracks.isLoading
            ? 10
            : null !==
                  (a =
                    null === (i = _.tracks) || void 0 === i
                      ? void 0
                      : null === (t = i.items) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
              ? a
              : 0,
          P = (0, s.useCallback)(
            (e) => {
              var t;
              null === (t = _.tracks) ||
                void 0 === t ||
                t.getTracksByRange(e.startIndex, e.endIndex);
            },
            [_.tracks],
          ),
          j = (0, s.useMemo)(
            () => ({
              Header: () => (0, l.jsx)(S, { tabsState: r, tabElementId: d }),
              Footer: () => (0, l.jsx)(x.$_, { className: I().footer }),
            }),
            [d, r],
          );
        return _.tracks.isRejected
          ? (0, l.jsx)(p.D, {})
          : (0, l.jsx)("div", {
              className: I().root,
              children: (0, l.jsx)(n.TabPanel, {
                value: r.value,
                name: m.Q.TRACKS,
                elementId: d,
                className: I().tabPanel,
                children: (0, l.jsx)(x.Wv, {
                  className: (0, C.W)(I().scrollContainer, I().important),
                  listClassName: (0, C.W)(I().content, I().content_tracks),
                  customComponents: j,
                  totalCount: y,
                  itemContentCallback: (e) => {
                    var t, i, a;
                    let o =
                      null === (a = _.tracks) || void 0 === a
                        ? void 0
                        : null === (i = a.items) || void 0 === i
                          ? void 0
                          : null === (t = i[e]) || void 0 === t
                            ? void 0
                            : t.data;
                    if (!o)
                      return (0, l.jsx)(x.DX, {
                        isActive: !0,
                        className: I().shimmerItem,
                        variant: c.Lxt.PLAYLIST,
                      });
                    let s = b(e, {
                      contextData: {
                        type: E.A.Various,
                        meta: { id: "disliked-tracks" },
                        from: u,
                        playDisliked: !0,
                      },
                      entitiesData: _.tracks.sonataEntitiesData,
                      queueParams: { index: e },
                      loadContextMeta: !1,
                    });
                    return o.isTrackNonMusic
                      ? (0, l.jsx)(T.FP, {
                          track: o,
                          playContextParams: s,
                          ignoreDislikedStyles: !0,
                          withPodcastName: !0,
                        })
                      : (0, l.jsx)(T.O2, {
                          track: o,
                          playContextParams: s,
                          ignoreDislikedStyles: !0,
                        });
                  },
                  onGetDataByRange: P,
                  debounceDurationInMs: 300,
                  handleRef: o,
                  context: { listAriaLabel: v({ id: "entity-names.tracks" }) },
                  isMobileLayout: g,
                  useWindowScroll: g,
                }),
              }),
            });
      });
      var R = i(69756),
        B = i(12873),
        D = i.n(B);
      let M = (0, a.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(S, { tabsState: t, tabElementId: i }),
              (0, l.jsxs)(n.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: D().root,
                children: [
                  (0, l.jsx)(R.Icon, {
                    className: D().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, l.jsx)(b.Heading, {
                    className: D().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, l.jsx)(v.Z, {
                      id: "entity-names.list-is-empty",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        O = (0, a.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e,
            { isScrolling: a } = (0, s.useContext)(x.pI),
            o = (0, c.k67)();
          return (0, l.jsx)(x.h4, {
            variant: x.bm.COMPOSITE,
            staticClassName: (0, C.W)(P().staticHeader, P().important),
            "aria-hidden": !a,
            stickyClassName: (0, C.W)(P().stickyHeader, P().important),
            stickyChild: (0, l.jsxs)("div", {
              className: P().container,
              children: [
                o.canBack &&
                  (0, l.jsx)(x.nP, {
                    withForwardControl: !1,
                    withBackwardControl: o.canBack,
                    shouldFocusOnMount: !1,
                    buttonSize: "xs",
                  }),
                (0, l.jsx)(N, {
                  tabsState: t,
                  tabElementId: i,
                  isStickyHeader: !0,
                }),
              ],
            }),
          });
        }),
        W = (0, a.Pi)(() => {
          let e = (0, o.useSearchParams)(),
            {
              user: t,
              collection: { dislikes: i },
              library: a,
              experiments: u,
            } = (0, c.oR4)(),
            { contentScrollRef: C, setContentScrollRef: h } = (0, c.$Y6)(),
            p = (0, s.useId)(),
            g = (0, s.useMemo)(() => {
              switch (e.get(c.wxR.TAB)) {
                case d.f.TRACKS:
                  break;
                case d.f.ARTISTS:
                  return m.Q.ARTISTS;
              }
              return m.Q.TRACKS;
            }, [e]),
            x = (0, n.useTabsState)(g);
          t.account.data.uid || (0, o.notFound)(),
            (0, c.NOh)(i.isResolved),
            (0, s.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            );
          let v = (0, s.useMemo)(() => {
            switch (x.value) {
              case m.Q.TRACKS:
                if (i.tracks.isEmpty)
                  return (0, l.jsx)(M, { tabsState: x, tabElementId: p });
                return (0, l.jsx)(w, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
              case m.Q.ARTISTS:
                if (i.artists.isEmpty)
                  return (0, l.jsx)(M, { tabsState: x, tabElementId: p });
                return (0, l.jsx)(A, {
                  forwardRef: h,
                  tabsState: x,
                  tabElementId: p,
                });
            }
          }, [i.artists.isEmpty, i.tracks.isEmpty, h, p, x]);
          if (i.isNeededToLoad) {
            let e = [i.tracks.getData(), i.artists.getData()];
            u.checkExperiment(c.peG.WebNextLibrarySync, "on") &&
              e.push(a.getData()),
              (0, s.use)(Promise.allSettled(e));
          }
          return (0, l.jsx)(c.Lh6, {
            pageId: c.Rhz.OWN_DISLIKES,
            children: (0, l.jsx)(r.I7, {
              scrollElement: C,
              headerThreshold: 148,
              children: (0, l.jsxs)("div", {
                className: _().root,
                children: [(0, l.jsx)(O, { tabsState: x, tabElementId: p }), v],
              }),
            }),
          });
        });
    },
    72616: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionKidsAlbumsPage: function () {
          return b;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(17392),
        m = i(30948),
        u = i(72783),
        _ = i(69947),
        C = i(13534),
        h = i(97141),
        p = i(91854),
        g = i(75249),
        x = i(65082),
        v = i.n(x);
      let b = (0, o.Pi)(() => {
        var e, t, i;
        let {
            settings: { isMobile: o },
            collection: {
              kids: { albums: x },
            },
          } = (0, C.oR4)(),
          { contentScrollRef: b, setContentScrollRef: y } = (0, C.$Y6)(),
          P = (0, C.k67)(),
          { formatMessage: j } = (0, n.Z)(),
          k = (0, s.useCallback)(
            (e) => {
              x.getData({ page: e, pageSize: p.O });
            },
            [x],
          ),
          f = (0, s.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(h.$_, { className: v().footer }),
            }),
            [],
          ),
          N = x.isLoading
            ? 20
            : null !==
                  (t =
                    null == x
                      ? void 0
                      : null === (e = x.items) || void 0 === e
                        ? void 0
                        : e.length) && void 0 !== t
              ? t
              : 0;
        return ((0, s.useEffect)(
          () => () => {
            x.reset();
          },
          [x],
        ),
        (0, C.NOh)(x.isResolved),
        x.isNeededToLoad && (0, s.use)(x.getData({ pageSize: p.O })),
        x.isRejected)
          ? (0, l.jsx)(m.D, {})
          : x.isEmpty
            ? (0, l.jsx)(g.c, { title: j({ id: "kids.albums-and-podcasts" }) })
            : (0, l.jsx)(C.Lh6, {
                pageId: C.Rhz.COLLECTION_KIDS_ALBUMS,
                children: (0, l.jsx)(_.I7, {
                  scrollElement: b,
                  outerTitle: j({ id: "kids.albums-and-podcasts" }),
                  children: (0, l.jsxs)("div", {
                    className: v().root,
                    ...(0, c.BA)(c.Br.collection.COLLECTION_KIDS_ALBUMS_PAGE),
                    children: [
                      (0, l.jsx)(h.h4, {
                        variant: h.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: P.canBack,
                        children: (0, l.jsx)(d.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: o ? "m" : "xl",
                          lineClamp: 2,
                          children: (0, l.jsx)(r.Z, {
                            id: "kids.albums-and-podcasts",
                          }),
                        }),
                      }),
                      (0, l.jsx)(h.Wv, {
                        className: (0, a.W)(v().scrollContainer, v().important),
                        listClassName: v().content,
                        itemClassName: v().item,
                        customComponents: f,
                        itemContentCallback: (e) => {
                          var t;
                          let i =
                              null === (t = x.items) || void 0 === t
                                ? void 0
                                : t[e],
                            a = j(
                              { id: "loading-messages.entity-is-loading" },
                              { entityName: j({ id: "entity-names.album" }) },
                            );
                          return i
                            ? (0, l.jsx)(
                                u.rf,
                                {
                                  album: i,
                                  contentLinesCount: 4,
                                  withLikesCount: !0,
                                },
                                i.id,
                              )
                            : (0, l.jsx)(h.hi, {
                                "aria-label": a,
                                linesCount: 4,
                              });
                        },
                        initialItemCount: N,
                        totalCount: N,
                        onGetDataByPage: k,
                        pageSize: p.O,
                        totalRequests:
                          null !== (i = x.requests) && void 0 !== i ? i : 0,
                        handleRef: y,
                        context: {
                          listAriaLabel: j({ id: "entity-names.albums" }),
                        },
                        isMobileLayout: o,
                        useWindowScroll: o,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    49377: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionKidsPage: function () {
          return k;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(84638),
        d = i(94123),
        m = i(14218),
        u = i(69756),
        _ = i(17294),
        C = i(17392),
        h = i(30948),
        p = i(72783),
        g = i(69947),
        x = i(7797),
        v = i(1150),
        b = i(13534),
        y = i(97141),
        P = i(14847),
        j = i.n(P);
      let k = (0, o.Pi)(() => {
        let {
            collection: { kids: e },
          } = (0, b.oR4)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, b.$Y6)(),
          o = (0, b.k67)(),
          { from: P } = (0, b.MhG)({ pageId: b.Rhz.COLLECTION_KIDS }),
          { formatMessage: k } = (0, n.Z)();
        (0, s.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
          (0, b.NOh)(e.isResolved);
        let f = (0, m.V)(() =>
          e.tracks.loadedItems.slice(0, 5).map((t, i) => {
            let a = {
              contextData: {
                type: c.A.Various,
                meta: { id: t.entityId },
                from: P,
              },
              queueParams: { index: i },
              loadContextMeta: !1,
              entitiesData: e.tracks.sonataEntitiesData,
            };
            return t.type === d.V.MUSIC
              ? (0, l.jsx)(v.O2, { track: t, playContextParams: a }, i)
              : (0, l.jsx)(
                  v.FP,
                  {
                    track: t,
                    playContextParams: a,
                    withPodcastName: t.isTrackPodcast,
                  },
                  i,
                );
          }),
        );
        if (e.isNeededToLoad) {
          let t = [
            e.albums.getData({ pageSize: 8 }),
            e.playlists.getData({ pageSize: 8 }),
            e.tracks.getData({ pageSize: 5 }),
          ];
          (0, s.use)(Promise.allSettled(t));
        }
        return e.isRejected
          ? (0, l.jsx)(h.D, {})
          : (0, l.jsx)(b.Lh6, {
              pageId: b.Rhz.COLLECTION_KIDS,
              children: (0, l.jsxs)(g.I7, {
                scrollElement: t,
                outerTitle: k({ id: "kids.for-kids" }),
                children: [
                  (0, l.jsx)(y.h4, {
                    variant: y.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: o.canBack,
                    children: (0, l.jsx)(C.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      children: (0, l.jsx)(r.Z, { id: "kids.for-kids" }),
                    }),
                  }),
                  (0, l.jsxs)(_.t, {
                    className: j().root,
                    containerClassName: j().content,
                    ref: i,
                    children: [
                      !e.shouldShowContent &&
                        (0, l.jsxs)("div", {
                          className: j().emptyBlock,
                          children: [
                            (0, l.jsx)(u.Icon, {
                              className: j().emptyBlockIcon,
                              variant: "album",
                            }),
                            (0, l.jsx)(C.Heading, {
                              className: j().emptyBlockTitle,
                              variant: "h3",
                              size: "xs",
                              children: (0, l.jsx)(r.Z, {
                                id: "kids.empty-collection-text",
                              }),
                            }),
                          ],
                        }),
                      e.tracks.shouldShowContent &&
                        (0, l.jsx)(y.ad, {
                          blockHeaderClassName: (0, a.W)(
                            j().carouselBlockHeader,
                            j().carouselBlock,
                          ),
                          carouselItemClassName: (0, a.W)(
                            j().tracksCarouselItem,
                            j().important,
                          ),
                          blockHeaderTitle: k({
                            id: "kids.favourite-tracks-and-episodes",
                          }),
                          shimmer: (0, l.jsx)(y.DX, {
                            variant: b.Lxt.PLAYLIST,
                            isActive: !0,
                          }),
                          maxColumnsCount: y.IA.ONE,
                          isShimmerVisible: e.tracks.isShimmerVisible,
                          isShimmerActive: !0,
                          itemsCountPerColumn: 5,
                          viewAllActionLink: "/collection/kids/tracks",
                          children: f,
                        }),
                      e.albums.shouldShowContent &&
                        (0, l.jsx)(p.wk, {
                          headerClassName: (0, a.W)(
                            j().carouselBlock,
                            j().carouselBlockHeader,
                          ),
                          containerClassName: j().carouselBlock,
                          title: k({ id: "kids.albums-and-podcasts" }),
                          albums: e.albums.loadedItems,
                          headingVariant: "h2",
                          isShimmerVisible: e.albums.isShimmerVisible,
                          isShimmerActive: !0,
                          viewAllActionLink: "/collection/kids/albums",
                        }),
                      e.playlists.shouldShowContent &&
                        (0, l.jsx)(x.VD, {
                          headerClassName: (0, a.W)(
                            j().carouselBlock,
                            j().carouselBlockHeader,
                          ),
                          containerClassName: j().carouselBlock,
                          title: k({ id: "entity-names.artist-playlist" }),
                          playlists: e.playlists.loadedItems,
                          headingVariant: "h2",
                          isShimmerVisible: e.playlists.isShimmerVisible,
                          isShimmerActive: !0,
                          viewAllActionLink: "/collection/kids/playlists",
                        }),
                      (0, l.jsx)(y.$_, { className: j().footer }),
                    ],
                  }),
                ],
              }),
            });
      });
    },
    71736: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionKidsPlaylistsPage: function () {
          return b;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(17392),
        m = i(30948),
        u = i(69947),
        _ = i(7797),
        C = i(13534),
        h = i(97141),
        p = i(91854),
        g = i(75249),
        x = i(71336),
        v = i.n(x);
      let b = (0, o.Pi)(() => {
        var e, t, i;
        let {
            settings: { isMobile: o },
            collection: {
              kids: { playlists: x },
            },
          } = (0, C.oR4)(),
          { contentScrollRef: b, setContentScrollRef: y } = (0, C.$Y6)(),
          P = (0, C.k67)(),
          { formatMessage: j } = (0, n.Z)(),
          k = (0, s.useCallback)(
            (e) => {
              x.getData({ page: e, pageSize: p.O });
            },
            [x],
          ),
          f = (0, s.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(h.$_, { className: v().footer }),
            }),
            [],
          ),
          N = x.isLoading
            ? 20
            : null !==
                  (t =
                    null == x
                      ? void 0
                      : null === (e = x.items) || void 0 === e
                        ? void 0
                        : e.length) && void 0 !== t
              ? t
              : 0;
        return ((0, s.useEffect)(
          () => () => {
            x.reset();
          },
          [x],
        ),
        (0, C.NOh)(x.isResolved),
        x.isNeededToLoad && (0, s.use)(x.getData({ pageSize: p.O })),
        x.isRejected)
          ? (0, l.jsx)(m.D, {})
          : x.isEmpty
            ? (0, l.jsx)(g.c, {
                title: j({ id: "entity-names.artist-playlist" }),
              })
            : (0, l.jsx)(C.Lh6, {
                pageId: C.Rhz.COLLECTION_KIDS_PLAYLISTS,
                children: (0, l.jsx)(u.I7, {
                  scrollElement: b,
                  outerTitle: j({ id: "entity-names.artist-playlist" }),
                  children: (0, l.jsxs)("div", {
                    className: v().root,
                    ...(0, c.BA)(
                      c.Br.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                    ),
                    children: [
                      (0, l.jsx)(h.h4, {
                        variant: h.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: P.canBack,
                        children: (0, l.jsx)(d.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: (0, l.jsx)(r.Z, {
                            id: "entity-names.artist-playlist",
                          }),
                        }),
                      }),
                      (0, l.jsx)(h.Wv, {
                        className: (0, a.W)(v().scrollContainer, v().important),
                        customComponents: f,
                        itemContentCallback: (e) => {
                          var t;
                          let i =
                              null === (t = x.items) || void 0 === t
                                ? void 0
                                : t[e],
                            a = j(
                              { id: "loading-messages.entity-is-loading" },
                              { entityName: j({ id: "entity-names.album" }) },
                            );
                          return i
                            ? (0, l.jsx)(
                                _.ZL,
                                { playlist: i, contentLinesCount: 3 },
                                i.id,
                              )
                            : (0, l.jsx)(h.hi, {
                                "aria-label": a,
                                linesCount: 3,
                              });
                        },
                        initialItemCount: N,
                        totalCount: N,
                        onGetDataByPage: k,
                        totalRequests:
                          null !== (i = x.requests) && void 0 !== i ? i : 0,
                        listClassName: v().content,
                        itemClassName: v().item,
                        handleRef: y,
                        context: {
                          listAriaLabel: j({ id: "entity-names.albums" }),
                        },
                        isMobileLayout: o,
                        useWindowScroll: o,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    75249: function (e, t, i) {
      "use strict";
      i.d(t, {
        c: function () {
          return h;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(15937),
        s = i(68208),
        n = i(69756),
        r = i(17294),
        c = i(17392),
        d = i(69947),
        m = i(13534),
        u = i(97141),
        _ = i(70445),
        C = i.n(_);
      let h = (0, a.Pi)((e) => {
        let { title: t } = e,
          {
            settings: { isMobile: i },
          } = (0, m.oR4)(),
          { contentScrollRef: a, setContentScrollRef: _ } = (0, m.$Y6)(),
          h = (0, m.k67)(),
          p = (0, m.s0h)("/collection/kids");
        return (0, l.jsxs)(d.I7, {
          scrollElement: a,
          outerTitle: t,
          children: [
            (0, l.jsx)(u.h4, {
              variant: u.bm.TEXT,
              withForwardControl: !1,
              withBackwardControl: h.canBack,
              children: (0, l.jsx)(c.Heading, {
                variant: "h2",
                weight: "bold",
                size: i ? "m" : "xl",
                lineClamp: 2,
                children: t,
              }),
            }),
            (0, l.jsxs)(r.t, {
              ref: _,
              containerClassName: C().scrollableContainer,
              className: C().root,
              children: [
                (0, l.jsxs)("div", {
                  className: C().content,
                  children: [
                    (0, l.jsx)("div", {
                      className: C().icon,
                      children: (0, l.jsx)(n.Icon, {
                        variant: "like",
                        size: "l",
                      }),
                    }),
                    (0, l.jsx)(c.Heading, {
                      className: C().title,
                      variant: "h3",
                      size: "xs",
                      children: (0, l.jsx)(o.Z, {
                        id: "error-messages.empty-collection-kids-sub-page-title",
                      }),
                    }),
                    (0, l.jsx)(s.Button, {
                      onClick: p,
                      className: C().button,
                      role: "link",
                      color: "secondary",
                      size: "s",
                      radius: "xxxl",
                      children: (0, l.jsx)(c.Caption, {
                        type: "controls",
                        variant: "span",
                        size: "m",
                        children: (0, l.jsx)(o.Z, {
                          id: "error-messages.empty-collection-kids-sub-page-link",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(u.$_, { className: C().footer }),
              ],
            }),
          ],
        });
      });
    },
    13013: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionKidsTracksPage: function () {
          return P;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(84638),
        m = i(94123),
        u = i(17392),
        _ = i(30948),
        C = i(69947),
        h = i(1150),
        p = i(13534),
        g = i(97141),
        x = i(91854),
        v = i(75249),
        b = i(52897),
        y = i.n(b);
      let P = (0, o.Pi)(() => {
        var e, t, i;
        let {
            collection: {
              kids: { tracks: o },
            },
            settings: { isMobile: b },
          } = (0, p.oR4)(),
          { contentScrollRef: P, setContentScrollRef: j } = (0, p.$Y6)(),
          k = (0, p.k67)(),
          { from: f } = (0, p.MhG)({ pageId: p.Rhz.COLLECTION_KIDS_TRACKS }),
          { formatMessage: N } = (0, n.Z)(),
          S = (0, p.iXn)();
        (0, s.useEffect)(
          () => () => {
            o.reset();
          },
          [o],
        ),
          (0, p.NOh)(o.isResolved);
        let L = (0, s.useCallback)(
            (e) => {
              o.getData({ page: e, pageSize: x.O });
            },
            [o],
          ),
          I = (0, s.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(g.$_, { className: y().footer }),
            }),
            [],
          ),
          A = o.isLoading
            ? 20
            : null !==
                  (t =
                    null === (e = o.items) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== t
              ? t
              : 0;
        return (o.isNeededToLoad && (0, s.use)(o.getData({ pageSize: x.O })),
        o.isRejected)
          ? (0, l.jsx)(_.D, {})
          : o.isEmpty
            ? (0, l.jsx)(v.c, {
                title: N({ id: "kids.favourite-tracks-and-episodes" }),
              })
            : (0, l.jsx)(p.Lh6, {
                pageId: p.Rhz.COLLECTION_KIDS_TRACKS,
                children: (0, l.jsx)(C.I7, {
                  scrollElement: P,
                  outerTitle: N({ id: "kids.favourite-tracks-and-episodes" }),
                  children: (0, l.jsxs)("div", {
                    className: y().root,
                    ...(0, c.BA)(c.Br.collection.COLLECTION_KIDS_TRACKS_PAGE),
                    children: [
                      (0, l.jsx)(g.h4, {
                        variant: g.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: k.canBack,
                        children: (0, l.jsx)(u.Heading, {
                          variant: "h2",
                          weight: "bold",
                          size: b ? "m" : "xl",
                          lineClamp: 2,
                          children: (0, l.jsx)(r.Z, {
                            id: "kids.favourite-tracks-and-episodes",
                          }),
                        }),
                      }),
                      (0, l.jsx)(g.Wv, {
                        className: (0, a.W)(y().scrollContainer, y().important),
                        listClassName: y().content,
                        customComponents: I,
                        itemContentCallback: (e) => {
                          var t;
                          let i =
                            null === (t = o.items) || void 0 === t
                              ? void 0
                              : t[e];
                          if (!i)
                            return (0, l.jsx)(g.DX, {
                              isActive: !0,
                              className: y().shimmerItem,
                              variant: p.Lxt.PLAYLIST,
                            });
                          let a = S(i.entityId, {
                            contextData: {
                              type: d.A.Various,
                              meta: { id: i.entityId },
                              from: f,
                            },
                            queueParams: { index: e },
                            loadContextMeta: !1,
                            entitiesData: o.sonataEntitiesData,
                          });
                          return i.type === m.V.MUSIC
                            ? (0, l.jsx)(
                                h.O2,
                                { track: i, playContextParams: a },
                                e,
                              )
                            : (0, l.jsx)(
                                h.FP,
                                {
                                  track: i,
                                  playContextParams: a,
                                  withPodcastName: i.isTrackPodcast,
                                },
                                e,
                              );
                        },
                        initialItemCount: A,
                        totalCount: A,
                        onGetDataByPage: L,
                        pageSize: x.O,
                        totalRequests:
                          null !== (i = o.requests) && void 0 !== i ? i : 0,
                        handleRef: j,
                        context: {
                          listAriaLabel: N({ id: "entity-names.tracks" }),
                        },
                        isMobileLayout: b,
                        useWindowScroll: b,
                      }),
                    ],
                  }),
                }),
              });
      });
    },
    82596: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicLikedPage: function () {
          return v;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(17392),
        m = i(30948),
        u = i(72783),
        _ = i(69947),
        C = i(13534),
        h = i(97141),
        p = i(38996),
        g = i(13102),
        x = i.n(g);
      let v = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { nonMusicLiked: g },
            settings: { isMobile: v },
            experiments: b,
            library: y,
          } = (0, C.oR4)(),
          { formatMessage: P } = (0, n.Z)(),
          { contentScrollRef: j, setContentScrollRef: k } = (0, C.$Y6)(),
          f = (0, C.k67)();
        (0, C.NOh)(g.isResolved);
        let N = (0, s.useCallback)(
          (e) => {
            o.account.data.uid &&
              g.getData({
                userId: o.account.data.uid,
                metaType: "podcast",
                page: e,
                pageSize: 20,
              });
          },
          [g, o.account.data.uid],
        );
        if (g.isRejected) return (0, l.jsx)(m.D, {});
        (0, s.useEffect)(
          () => () => {
            g.reset();
          },
          [g],
        );
        let S = (0, s.useMemo)(
          () => ({ Footer: () => (0, l.jsx)(h.$_, { className: x().footer }) }),
          [],
        );
        if (o.account.data.uid && g.isNeededToLoad) {
          let e = [
            g.getData({
              userId: o.account.data.uid,
              metaType: "podcast",
              pageSize: 20,
            }),
          ];
          b.checkExperiment(C.peG.WebNextLibrarySync, "on") &&
            e.push(y.getData()),
            (0, s.use)(Promise.allSettled(e));
        }
        return (0, l.jsx)(C.Lh6, {
          pageId: C.Rhz.OWN_PODCASTS,
          children: (0, l.jsx)(_.I7, {
            scrollElement: j,
            outerTitle: P({ id: "page.delayed-non-music" }),
            children: (0, l.jsxs)("div", {
              className: x().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_LIKED_PAGE),
              children: [
                (0, l.jsx)(h.h4, {
                  variant: h.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: f.canBack,
                  children: (0, l.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, l.jsx)(r.Z, { id: "page.delayed-non-music" }),
                  }),
                }),
                g.isEmptyItems &&
                  !g.isRejected &&
                  (0, l.jsx)(p.u, { className: x().emptyBlock }),
                (0, l.jsx)(h.Wv, {
                  className: (0, a.W)(x().scrollContainer, x().important),
                  listClassName: x().content,
                  itemClassName: x().item,
                  customComponents: S,
                  itemContentCallback: (e) => {
                    var t;
                    let i =
                        null === (t = g.items) || void 0 === t ? void 0 : t[e],
                      a = P(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: P({ id: "entity-names.podcast" }) },
                      );
                    return i
                      ? (0, l.jsx)(
                          u.rf,
                          {
                            album: i,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withAddition: !1,
                          },
                          i.id,
                        )
                      : (0, l.jsx)(h.hi, { "aria-label": a });
                  },
                  totalCount:
                    null !==
                      (t =
                        null === (e = g.pager) || void 0 === e
                          ? void 0
                          : e.total) && void 0 !== t
                      ? t
                      : 0,
                  onGetDataByPage: N,
                  pageSize: 20,
                  totalRequests:
                    null !== (i = g.requestsCount) && void 0 !== i ? i : 0,
                  handleRef: k,
                  context: {
                    listAriaLabel: P({ id: "collection.liked-non-music-list" }),
                  },
                  isMobileLayout: v,
                  useWindowScroll: v,
                }),
              ],
            }),
          }),
        });
      });
    },
    38996: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return d;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(15937),
        s = i(69756),
        n = i(17392),
        r = i(11759),
        c = i.n(r);
      let d = (e) => {
        let { className: t } = e;
        return (0, l.jsxs)("div", {
          className: (0, a.W)(c().emptyContent, t),
          children: [
            (0, l.jsx)(s.Icon, {
              className: c().emptyContentIcon,
              size: "l",
              variant: "album",
            }),
            (0, l.jsx)(n.Heading, {
              className: c().emptyContentTitle,
              variant: "h3",
              size: "xs",
              children: (0, l.jsx)(o.Z, {
                id: "error-messages.empty-collection-podcasts-and-books",
              }),
            }),
          ],
        });
      };
    },
    11679: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNonMusicPage: function () {
          return P;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(14218),
        m = i(17294),
        u = i(17392),
        _ = i(30948),
        C = i(72783),
        h = i(69947),
        p = i(13534),
        g = i(97141),
        x = i(11420),
        v = i(38996),
        b = i(83865),
        y = i.n(b);
      let P = (0, o.Pi)(() => {
        var e;
        let {
            user: t,
            collection: { nonMusicLiked: i, shelf: o },
            experiments: b,
            library: P,
          } = (0, p.oR4)(),
          { formatMessage: j } = (0, n.Z)(),
          { contentScrollRef: k, setContentScrollRef: f } = (0, p.$Y6)(),
          N = (0, p.k67)();
        if (((0, p.NOh)(i.isResolved), i.isRejected && !o.hasLiked))
          return (0, l.jsx)(_.D, {});
        (0, s.useEffect)(
          () => () => {
            i.reset(), o.reset();
          },
          [i, o],
        );
        let S = (0, d.V)(() => {
            var e;
            return null === (e = i.items) || void 0 === e
              ? void 0
              : e
                  .slice(0, 10)
                  .map((e, t) =>
                    e
                      ? (0, l.jsx)(
                          C.rf,
                          {
                            album: e,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withAddition: !1,
                          },
                          null == e ? void 0 : e.id,
                        )
                      : (0, l.jsx)(g.hi, {}, "shimmer-".concat(t)),
                  );
          }),
          L = (0, s.useMemo)(() => {
            var e;
            return !i.isEmptyItems || i.isRejected || o.hasLiked
              ? i.isRejected ||
                (!(null === (e = i.items) || void 0 === e
                  ? void 0
                  : e.length) &&
                  i.requestsCount)
                ? null
                : (0, l.jsx)(g.HY, {
                    headerClassName: y().blockHeader,
                    containerClassName: y().carousel,
                    isShimmerVisible: i.isLoading,
                    isShimmerActive: !0,
                    title: j({ id: "page.delayed-non-music" }),
                    viewAllActionLink: "/collection/non-music/liked",
                    children: S,
                  })
              : (0, l.jsx)(v.u, {});
          }, [
            i.isLoading,
            j,
            S,
            i.isRejected,
            o.hasLiked,
            i.isEmptyItems,
            null === (e = i.items) || void 0 === e ? void 0 : e.length,
            i.requestsCount,
          ]);
        if (t.account.data.uid && i.isNeededToLoad) {
          let e = [
            i.getData({
              userId: t.account.data.uid,
              metaType: "podcast",
              pageSize: 10,
            }),
          ];
          b.checkExperiment(p.peG.WebNextLibrarySync, "on") &&
            e.push(P.getData()),
            (0, s.use)(Promise.allSettled(e));
        }
        return (0, l.jsx)(p.Lh6, {
          pageId: p.Rhz.OWN_PODCASTS,
          children: (0, l.jsx)(h.I7, {
            scrollElement: k,
            outerTitle: j({ id: "page.podcasts-and-books" }),
            children: (0, l.jsxs)("div", {
              className: y().root,
              ...(0, c.BA)(c.Br.collection.COLLECTION_NON_MUSIC_PAGE),
              children: [
                (0, l.jsx)(g.h4, {
                  variant: g.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: N.canBack,
                  children: (0, l.jsx)(u.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, l.jsx)(r.Z, {
                      id: "page.podcasts-and-books",
                    }),
                  }),
                }),
                (0, l.jsx)(m.t, {
                  ref: f,
                  containerClassName: (0, a.W)(
                    y().scrollableContainer,
                    y().important,
                  ),
                  className: y().root,
                  children: (0, l.jsxs)("div", {
                    className: y().content,
                    children: [
                      (0, l.jsxs)("div", {
                        className: y().likedBlocks,
                        children: [
                          L,
                          o.hasLiked &&
                            (0, l.jsx)(x.X, {
                              carouselClassName: y().shelfBlockCarousel,
                              headerClassName: y().shelfBlockHeader,
                              itemsCount: 5,
                            }),
                        ],
                      }),
                      (0, l.jsx)(g.$_, { className: y().footer }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      });
    },
    55519: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionNotFoundPage: function () {
          return s;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(35551);
      let s = (0, a.Pi)(() => (0, l.jsx)(o.T, {}));
    },
    68446: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPage: function () {
          return y;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(98730),
        n = i(65067),
        r = i(9317),
        c = i(15937),
        d = i(35846),
        m = i(36746),
        u = i(17294),
        _ = i(17392),
        C = i(30495),
        h = i(30948),
        p = i(69947),
        g = i(13534),
        x = i(97141),
        v = i(85731),
        b = i.n(v);
      let y = (0, o.Pi)(() => {
        let {
            collection: e,
            user: t,
            experiments: i,
            library: o,
          } = (0, g.oR4)(),
          { contentScrollRef: v, setContentScrollRef: y } = (0, g.$Y6)(),
          { formatMessage: P } = (0, r.Z)(),
          j = !e.landing.isRejected && !!t.collectionHue;
        i.checkExperiment(g.peG.WebNextDisableCollection, "on") &&
          (0, s.redirect)("/"),
          (0, n.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, g.NOh)(e.landing.isResolved);
        let k = (0, C._B)(e.landing),
          f = (0, n.useMemo)(
            () =>
              j && t.collectionHue
                ? { "--collection-color": (0, g.paG)(t.collectionHue) }
                : null,
            [j, t.collectionHue],
          ),
          N = (0, n.useMemo)(
            () => ({
              color: (e) =>
                (0, l.jsx)(x.wx, {
                  title: P({ id: "collection.collection-color-title" }),
                  description: P({
                    id: "collection.collection-color-description",
                  }),
                  placement: "right",
                  children: (0, l.jsx)("span", {
                    className: b().collectionColor,
                    style: f,
                    children: e,
                  }),
                }),
            }),
            [f, P],
          );
        if (e.landing.isNeededToLoad) {
          let l = [
            e.landing.getSkeleton(
              { id: m.j.WEB_COLLECTION, showWizard: t.settings.showWizard },
              { preloadBlocksCount: 2 },
            ),
          ];
          i.checkExperiment(g.peG.WebNextLibrarySync, "on") &&
            l.push(o.getData()),
            (0, n.use)(Promise.allSettled(l));
        }
        return (0, l.jsx)(g.Lh6, {
          pageId: g.Rhz.OWN_COLLECTION,
          children: (0, l.jsxs)(p.I7, {
            scrollElement: v,
            outerTitle: P({ id: "entity-names.collection" }),
            children: [
              (0, l.jsx)(x.h4, {
                variant: x.bm.TEXT,
                showControls: !1,
                children: (0, l.jsxs)("div", {
                  className: b().header,
                  children: [
                    (0, l.jsx)(_.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      children: (0, l.jsx)(c.Z, {
                        id: "entity-names.collection",
                      }),
                    }),
                    j &&
                      (0, l.jsx)(_.Caption, {
                        className: b().description,
                        variant: "div",
                        size: "m",
                        children: (0, l.jsx)(c.Z, {
                          id: "collection.collection-color",
                          values: N,
                        }),
                      }),
                  ],
                }),
              }),
              (0, l.jsxs)(u.t, {
                className: (0, a.W)(b().root, {
                  [b().root_withCollectionColor]: j,
                }),
                containerClassName: b().content,
                ref: y,
                children: [
                  (0, l.jsx)("div", {
                    className: (0, a.W)(b().landing, {
                      [b().landing_onlyWizard]: k,
                    }),
                    ...(0, d.BA)(d.Br.collection.COLLECTION_PAGE),
                    children: (0, l.jsx)(C.Od, {
                      landing: e.landing,
                      errorComponent: (0, l.jsx)(h.D, {
                        className: b().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, l.jsx)(x.$_, { className: b().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    43972: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsCreatedPage: function () {
          return x;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(98730),
        n = i(65067),
        r = i(9317),
        c = i(15937),
        d = i(35846),
        m = i(17392),
        u = i(69947),
        _ = i(7797),
        C = i(13534),
        h = i(97141),
        p = i(42946),
        g = i.n(p);
      let x = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { playlistsCreated: p },
            experiments: x,
            settings: { isMobile: v },
          } = (0, C.oR4)(),
          { formatMessage: b } = (0, r.Z)(),
          { contentScrollRef: y, setContentScrollRef: P } = (0, C.$Y6)(),
          j = (0, C.k67)(),
          k = x.checkExperiment(
            C.peG.WebNextDisableCollectionCreatedPlaylists,
            "on",
          ),
          f = x.checkExperiment(C.peG.WebNextDisableCollection, "on");
        k && f && (0, s.redirect)("/"), k && (0, s.redirect)("/collection");
        let N = (0, n.useMemo)(
          () => ({ Footer: () => (0, l.jsx)(h.$_, { className: g().footer }) }),
          [],
        );
        (0, C.NOh)(p.isResolved);
        let S = (0, n.useCallback)(
          (e) => {
            o.account.data.uid &&
              p.getData({ userId: o.account.data.uid, page: e, pageSize: 20 });
          },
          [p, o.account.data.uid],
        );
        return (
          (0, n.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          ),
          o.account.data.uid &&
            p.isNeededToLoad &&
            (0, n.use)(
              p.getData({ userId: o.account.data.uid, page: 0, pageSize: 20 }),
            ),
          (0, l.jsx)(C.Lh6, {
            pageId: C.Rhz.OWN_PLAYLISTS,
            children: (0, l.jsx)(u.I7, {
              scrollElement: y,
              outerTitle: b({ id: "entity-names.my-playlists" }),
              children: (0, l.jsxs)("div", {
                className: g().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_CREATED_PAGE),
                children: [
                  (0, l.jsx)(h.h4, {
                    variant: h.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: j.canBack,
                    children: (0, l.jsx)(m.Heading, {
                      id: "collection-playlistsCreated-header",
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, l.jsx)(c.Z, {
                        id: "entity-names.my-playlists",
                      }),
                    }),
                  }),
                  (0, l.jsx)(h.Wv, {
                    className: (0, a.W)(g().scrollContainer, g().important),
                    customComponents: N,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == p
                            ? void 0
                            : null === (t = p.items) || void 0 === t
                              ? void 0
                              : t[e],
                        a = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, l.jsx)(
                            _.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, l.jsx)(h.hi, { "aria-label": a });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == p
                            ? void 0
                            : null === (e = p.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: S,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = p.requests) && void 0 !== i ? i : 0,
                    listClassName: g().content,
                    itemClassName: g().item,
                    handleRef: P,
                    context: {
                      listAriaLabel: b({
                        id: "collection.created-playlists-list",
                      }),
                    },
                    isMobileLayout: v,
                    useWindowScroll: v,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    15122: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsLikedPage: function () {
          return b;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(98730),
        n = i(65067),
        r = i(9317),
        c = i(15937),
        d = i(35846),
        m = i(50507),
        u = i(83516),
        _ = i(17392),
        C = i(69947),
        h = i(7797),
        p = i(13534),
        g = i(97141),
        x = i(23729),
        v = i.n(x);
      let b = (0, o.Pi)(() => {
        var e, t, i;
        let {
            user: o,
            collection: { playlistsLiked: x },
            experiments: b,
            settings: { isMobile: y },
          } = (0, p.oR4)(),
          { formatMessage: P } = (0, r.Z)(),
          { contentScrollRef: j, setContentScrollRef: k } = (0, p.$Y6)(),
          f = (0, p.k67)(),
          N = b.checkExperiment(
            p.peG.WebNextDisableCollectionLikedPlaylists,
            "on",
          ),
          S = b.checkExperiment(p.peG.WebNextDisableCollection, "on");
        N && S && (0, s.redirect)("/"), N && (0, s.redirect)("/collection");
        let L = (0, n.useMemo)(
          () => ({ Footer: () => (0, l.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        (0, p.NOh)(x.isResolved);
        let I = (0, n.useCallback)(
          (e) => {
            o.account.data.uid &&
              x.getData({
                userId: o.account.data.uid,
                sortOrder: m.A.DESC,
                playlistMetaType: u.Q.MUSIC,
                page: e,
                pageSize: 20,
              });
          },
          [x, o.account.data.uid],
        );
        return (
          (0, n.useEffect)(
            () => () => {
              x.reset();
            },
            [x],
          ),
          o.account.data.uid &&
            x.isNeededToLoad &&
            (0, n.use)(
              x.getData({
                userId: o.account.data.uid,
                sortOrder: m.A.DESC,
                playlistMetaType: u.Q.MUSIC,
                page: 0,
                pageSize: 20,
              }),
            ),
          (0, l.jsx)(p.Lh6, {
            pageId: p.Rhz.OWN_PLAYLISTS,
            children: (0, l.jsx)(C.I7, {
              scrollElement: j,
              outerTitle: P({ id: "entity-names.favourite-playlists" }),
              children: (0, l.jsxs)("div", {
                className: v().root,
                ...(0, d.BA)(d.Br.collection.COLLECTION_PLAYLISTS_LIKED_PAGE),
                children: [
                  (0, l.jsx)(g.h4, {
                    variant: g.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
                    children: (0, l.jsx)(_.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: (0, l.jsx)(c.Z, {
                        id: "entity-names.favourite-playlists",
                      }),
                    }),
                  }),
                  (0, l.jsx)(g.Wv, {
                    className: (0, a.W)(v().scrollContainer, v().important),
                    customComponents: L,
                    itemContentCallback: (e) => {
                      var t;
                      let i =
                          null == x
                            ? void 0
                            : null === (t = x.items) || void 0 === t
                              ? void 0
                              : t[e],
                        a = P(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: P({ id: "entity-names.playlist" }) },
                        );
                      return i
                        ? (0, l.jsx)(
                            h.ZL,
                            { playlist: i, contentLinesCount: 3 },
                            i.key,
                          )
                        : (0, l.jsx)(g.hi, { "aria-label": a });
                    },
                    totalCount:
                      null !==
                        (t =
                          null == x
                            ? void 0
                            : null === (e = x.pager) || void 0 === e
                              ? void 0
                              : e.total) && void 0 !== t
                        ? t
                        : 0,
                    onGetDataByPage: I,
                    pageSize: 20,
                    totalRequests:
                      null !== (i = x.requests) && void 0 !== i ? i : 0,
                    listClassName: v().content,
                    itemClassName: v().item,
                    handleRef: k,
                    context: {
                      listAriaLabel: P({
                        id: "collection.liked-playlists-list",
                      }),
                    },
                    isMobileLayout: y,
                    useWindowScroll: y,
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    75503: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionPlaylistsPage: function () {
          return W;
        },
      });
      var l,
        a,
        o = i(75441),
        s = i(62569),
        n = i(98730),
        r = i(65067),
        c = i(35846),
        d = i(50507),
        m = i(83516),
        u = i(24226),
        _ = i(69947),
        C = i(13534);
      ((l = a || (a = {}))[(l.CREATED = 0)] = "CREATED"),
        (l[(l.LIKED = 1)] = "LIKED");
      var h = i(75372),
        p = i.n(h),
        g = i(32358),
        x = i(9317),
        v = i(7797),
        b = i(10979),
        y = i(97141),
        P = i(15937),
        j = i(17392);
      let k = (e) => {
        let t = (0, C.m5R)();
        return (0, r.useCallback)(
          (i) => {
            var l;
            switch (
              (null === (l = e.onTabChange) || void 0 === l || l.call(e, i), i)
            ) {
              case a.CREATED:
                t("/collection/playlists?tab=".concat(C.cUw.CREATED));
                break;
              case a.LIKED:
                t("/collection/playlists?tab=".concat(C.cUw.LIKED));
            }
          },
          [t, e],
        );
      };
      var f = i(25304),
        N = i.n(f),
        S = i(28676);
      let L = () =>
          (0, o.jsxs)("div", {
            className: N().tabsShimmer,
            children: [
              (0, o.jsx)(S.Shimmer, { className: N().tabShimmer }),
              (0, o.jsx)(S.Shimmer, { className: N().tabShimmer }),
            ],
          }),
        I = (0, s.Pi)((e) => {
          var t, i, l, s, n, d;
          let { tabsState: m, tabElementId: u } = e,
            {
              collection: { playlistsCreated: _, playlistsLiked: h },
            } = (0, C.oR4)(),
            { formatMessage: p } = (0, x.Z)(),
            g = (0, C.k67)(),
            { isScrolling: v } = (0, r.useContext)(y.pI),
            b = k(m),
            f = (0, r.useMemo)(() => {
              var e;
              return (null === (e = _.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      p({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(_.pager.total)
                : p({ id: "collection.your-created-playlists" });
            }, [p, null === (t = _.pager) || void 0 === t ? void 0 : t.total]),
            S = (0, r.useMemo)(() => {
              var e;
              return (null === (e = h.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(p({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(h.pager.total)
                : p({ id: "collection.your-liked-playlists" });
            }, [p, null === (i = h.pager) || void 0 === i ? void 0 : i.total]);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("header", {
                className: N().root,
                "aria-hidden": v,
                ...(0, c.BA)(
                  c.Br.collection.COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER,
                ),
                children: (0, o.jsxs)("div", {
                  className: N().container,
                  children: [
                    g.canBack &&
                      (0, o.jsx)(y.nP, {
                        withForwardControl: !1,
                        withBackwardControl: g.canBack,
                        shouldFocusOnMount: !v,
                      }),
                    (0, o.jsx)(j.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      className: N().title,
                      ...(0, c.BA)(
                        c.Br.collection
                          .COLLECTION_PLAYLISTS_PAGE_STATIC_HEADER_TITLE,
                      ),
                      children: (0, o.jsx)(P.Z, {
                        id: "entity-names.artist-playlist",
                      }),
                    }),
                  ],
                }),
              }),
              (0, o.jsxs)(y.no, {
                isShimmerVisible: _.isLoading,
                shimmer: (0, o.jsx)(L, {}),
                className: N().staticTabs,
                elementId: u,
                ...m,
                onTabChange: b,
                children: [
                  (0, o.jsx)(y.OK, {
                    className: N().tab,
                    value: a.CREATED,
                    title: f,
                    "aria-label": p(
                      { id: "entity-names.created-playlists-count" },
                      {
                        value:
                          null !==
                            (n =
                              null === (l = _.pager) || void 0 === l
                                ? void 0
                                : l.total) && void 0 !== n
                            ? n
                            : 0,
                      },
                    ),
                    "aria-hidden": v,
                    tabIndex: v ? -1 : 0,
                  }),
                  (0, o.jsx)(y.OK, {
                    className: N().tab,
                    value: a.LIKED,
                    title: S,
                    "aria-label": p(
                      { id: "entity-names.liked-playlists-count" },
                      {
                        value:
                          null !==
                            (d =
                              null === (s = h.pager) || void 0 === s
                                ? void 0
                                : s.total) && void 0 !== d
                            ? d
                            : 0,
                      },
                    ),
                    "aria-hidden": v,
                    tabIndex: v ? -1 : 0,
                  }),
                ],
              }),
            ],
          });
        });
      var A = i(12945),
        E = i.n(A);
      let T = (0, s.Pi)((e) => {
          var t, i, l;
          let { forwardRef: s, tabsState: n, tabElementId: c } = e,
            {
              user: d,
              collection: { playlistsCreated: m },
              settings: { isMobile: _ },
            } = (0, C.oR4)(),
            { formatMessage: h } = (0, x.Z)(),
            p = (0, r.useMemo)(
              () => ({
                Header: () => (0, o.jsx)(I, { tabsState: n, tabElementId: c }),
                Footer: () => (0, o.jsx)(y.$_, { className: E().footer }),
              }),
              [c, n],
            ),
            P = (0, r.useCallback)(
              (e) => {
                d.account.data.uid &&
                  m.getData({
                    userId: d.account.data.uid,
                    page: e,
                    pageSize: 20,
                  });
              },
              [m, d.account.data.uid],
            ),
            j =
              (null !==
                (i =
                  null === (t = m.pager) || void 0 === t ? void 0 : t.total) &&
              void 0 !== i
                ? i
                : 0) + 1;
          return (0, o.jsx)("div", {
            className: E().root,
            children: (0, o.jsx)(u.TabPanel, {
              value: n.value,
              name: a.CREATED,
              elementId: c,
              className: E().tabPanel,
              children: (0, o.jsx)(y.Wv, {
                className: (0, g.W)(E().scrollContainer, E().important),
                customComponents: p,
                itemContentCallback: (e) => {
                  var t;
                  if (0 === e) return (0, o.jsx)(b.lN, {});
                  let i =
                      null == m
                        ? void 0
                        : null === (t = m.items) || void 0 === t
                          ? void 0
                          : t[e - 1],
                    l = h(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: h({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, o.jsx)(
                        v.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, o.jsx)(y.hi, { "aria-label": l });
                },
                totalCount: j,
                onGetDataByPage: P,
                pageSize: 20,
                totalRequests:
                  null !== (l = m.requests) && void 0 !== l ? l : 0,
                listClassName: E().content,
                itemClassName: E().item,
                handleRef: s,
                context: {
                  listAriaLabel: h({ id: "collection.created-playlists-list" }),
                },
                isMobileLayout: _,
                useWindowScroll: _,
              }),
            }),
          });
        }),
        w = (0, s.Pi)((e) => {
          var t, i, l;
          let { forwardRef: s, tabsState: n, tabElementId: c } = e,
            {
              user: _,
              collection: { playlistsLiked: h },
              settings: { isMobile: p },
            } = (0, C.oR4)(),
            { formatMessage: b } = (0, x.Z)(),
            P = (0, r.useCallback)(
              (e) => {
                _.account.data.uid &&
                  h.getData({
                    userId: _.account.data.uid,
                    sortOrder: d.A.DESC,
                    playlistMetaType: m.Q.MUSIC,
                    page: e,
                    pageSize: 20,
                  });
              },
              [h, _.account.data.uid],
            ),
            j = (0, r.useMemo)(
              () => ({
                Header: () => (0, o.jsx)(I, { tabsState: n, tabElementId: c }),
                Footer: () => (0, o.jsx)(y.$_, { className: E().footer }),
              }),
              [c, n],
            );
          return (0, o.jsx)("div", {
            className: E().root,
            children: (0, o.jsx)(u.TabPanel, {
              value: n.value,
              name: a.LIKED,
              elementId: c,
              className: E().tabPanel,
              children: (0, o.jsx)(y.Wv, {
                className: (0, g.W)(E().scrollContainer, E().important),
                customComponents: j,
                itemContentCallback: (e) => {
                  var t;
                  let i =
                      null == h
                        ? void 0
                        : null === (t = h.items) || void 0 === t
                          ? void 0
                          : t[e],
                    l = b(
                      { id: "loading-messages.entity-is-loading" },
                      { entityName: b({ id: "entity-names.playlist" }) },
                    );
                  return i
                    ? (0, o.jsx)(
                        v.ZL,
                        { playlist: i, contentLinesCount: 3 },
                        i.key,
                      )
                    : (0, o.jsx)(y.hi, { "aria-label": l });
                },
                totalCount:
                  null !==
                    (i =
                      null == h
                        ? void 0
                        : null === (t = h.pager) || void 0 === t
                          ? void 0
                          : t.total) && void 0 !== i
                    ? i
                    : 0,
                onGetDataByPage: P,
                pageSize: 20,
                totalRequests:
                  null !== (l = h.requests) && void 0 !== l ? l : 0,
                listClassName: E().content,
                itemClassName: E().item,
                handleRef: s,
                context: {
                  listAriaLabel: b({ id: "collection.liked-playlists-list" }),
                },
                isMobileLayout: p,
                useWindowScroll: p,
              }),
            }),
          });
        });
      var R = i(69756),
        B = i(74009),
        D = i.n(B);
      let M = (0, s.Pi)((e) => {
          let { tabsState: t, tabElementId: i } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(I, { tabsState: t, tabElementId: i }),
              (0, o.jsxs)(u.TabPanel, {
                value: t.value,
                name: t.value,
                elementId: i,
                className: D().root,
                children: [
                  (0, o.jsx)(R.Icon, {
                    className: D().icon,
                    size: "l",
                    variant: "album",
                  }),
                  (0, o.jsx)(j.Heading, {
                    className: D().title,
                    variant: "h3",
                    size: "xs",
                    children: (0, o.jsx)(P.Z, {
                      id: "error-messages.empty-collection-liked-playlists",
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        O = (0, s.Pi)((e) => {
          var t, i, l, s, n, d;
          let { tabsState: m, tabElementId: u } = e,
            {
              collection: { playlistsCreated: _, playlistsLiked: h },
            } = (0, C.oR4)(),
            { formatMessage: p } = (0, x.Z)(),
            { isScrolling: v } = (0, r.useContext)(y.pI),
            b = (0, C.k67)(),
            P = k(m),
            j = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = _.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(
                      p({ id: "collection.your-created-playlists" }),
                      " • ",
                    )
                    .concat(
                      null === (t = _.pager) || void 0 === t ? void 0 : t.total,
                    )
                : p({ id: "collection.your-created-playlists" });
            }, [p, null === (t = _.pager) || void 0 === t ? void 0 : t.total]),
            f = (0, r.useMemo)(() => {
              var e, t;
              return (null === (e = h.pager) || void 0 === e ? void 0 : e.total)
                ? ""
                    .concat(p({ id: "collection.your-liked-playlists" }), " • ")
                    .concat(
                      null === (t = h.pager) || void 0 === t ? void 0 : t.total,
                    )
                : p({ id: "collection.your-liked-playlists" });
            }, [p, null === (i = h.pager) || void 0 === i ? void 0 : i.total]);
          return (0, o.jsx)(y.h4, {
            variant: y.bm.COMPOSITE,
            staticClassName: (0, g.W)(N().staticHeader, N().important),
            "aria-hidden": !v,
            stickyClassName: (0, g.W)(N().stickyHeader, N().important),
            containerProps: (0, c.BA)(
              c.Br.collection.COLLECTION_PLAYLISTS_PAGE_STICKY_HEADER,
            ),
            stickyChild: (0, o.jsxs)("div", {
              className: N().container,
              children: [
                b.canBack &&
                  (0, o.jsx)(y.nP, {
                    withForwardControl: !1,
                    withBackwardControl: b.canBack,
                    shouldFocusOnMount: !1,
                    buttonSize: "xs",
                  }),
                (0, o.jsxs)(y.no, {
                  isShimmerVisible: _.isLoading,
                  shimmer: (0, o.jsx)(L, {}),
                  className: N().stickyTabs,
                  elementId: u,
                  ...m,
                  onTabChange: P,
                  children: [
                    (0, o.jsx)(y.OK, {
                      className: N().tab,
                      value: a.CREATED,
                      title: j,
                      "aria-label": p(
                        { id: "entity-names.created-playlists-count" },
                        {
                          value:
                            null !==
                              (n =
                                null === (l = _.pager) || void 0 === l
                                  ? void 0
                                  : l.total) && void 0 !== n
                              ? n
                              : 0,
                        },
                      ),
                      "aria-hidden": !v,
                      tabIndex: v ? 0 : -1,
                    }),
                    (0, o.jsx)(y.OK, {
                      className: N().tab,
                      value: a.LIKED,
                      title: f,
                      "aria-label": p(
                        { id: "entity-names.liked-playlists-count" },
                        {
                          value:
                            null !==
                              (d =
                                null === (s = h.pager) || void 0 === s
                                  ? void 0
                                  : s.total) && void 0 !== d
                              ? d
                              : 0,
                        },
                      ),
                      "aria-hidden": !v,
                      tabIndex: v ? 0 : -1,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        W = (0, s.Pi)(() => {
          let e = (0, n.useSearchParams)(),
            {
              user: t,
              collection: { playlistsCreated: i, playlistsLiked: l },
              experiments: s,
              library: h,
            } = (0, C.oR4)(),
            { contentScrollRef: g, setContentScrollRef: x } = (0, C.$Y6)(),
            v = s.checkExperiment(C.peG.WebNextDisableCollection, "on"),
            b = (0, r.useId)(),
            y = (0, r.useMemo)(() => {
              switch (e.get(C.wxR.TAB)) {
                case C.cUw.CREATED:
                  break;
                case C.cUw.LIKED:
                  return a.LIKED;
              }
              return a.CREATED;
            }, [e]),
            P = (0, u.useTabsState)(y);
          v && (0, n.redirect)("/"),
            (0, C.NOh)(i.isResolved),
            (0, r.useEffect)(
              () => () => {
                i.reset(), l.reset();
              },
              [i, l],
            );
          let j = (0, r.useMemo)(() => {
            switch (P.value) {
              case a.CREATED:
                return (0, o.jsx)(T, {
                  forwardRef: x,
                  tabsState: P,
                  tabElementId: b,
                });
              case a.LIKED:
                if (l.isEmpty)
                  return (0, o.jsx)(M, { tabsState: P, tabElementId: b });
                return (0, o.jsx)(w, {
                  forwardRef: x,
                  tabsState: P,
                  tabElementId: b,
                });
            }
          }, [x, l.isEmpty, b, P]);
          if (t.account.data.uid && i.isNeededToLoad) {
            let e = [
              i.getData({ userId: t.account.data.uid, page: 0, pageSize: 20 }),
              l.getData({
                userId: t.account.data.uid,
                sortOrder: d.A.DESC,
                playlistMetaType: m.Q.MUSIC,
                page: 0,
                pageSize: 20,
              }),
            ];
            s.checkExperiment(C.peG.WebNextLibrarySync, "on") &&
              e.push(h.getData()),
              (0, r.use)(Promise.allSettled(e));
          }
          return (0, o.jsx)(C.Lh6, {
            pageId: C.Rhz.OWN_PLAYLISTS,
            children: (0, o.jsx)(_.I7, {
              scrollElement: g,
              headerThreshold: 148,
              children: (0, o.jsxs)("div", {
                className: p().root,
                ...(0, c.BA)(c.Br.collection.COLLECTION_PLAYLISTS_PAGE),
                children: [(0, o.jsx)(O, { tabsState: P, tabElementId: b }), j],
              }),
            }),
          });
        });
    },
    11420: function (e, t, i) {
      "use strict";
      i.d(t, {
        X: function () {
          return p;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(14218),
        r = i(72783),
        c = i(1150),
        d = i(13534),
        m = i(97141),
        u = i(42062),
        _ = i(1759),
        C = i(95596),
        h = i.n(C);
      let p = (0, o.Pi)((e) => {
        var t;
        let {
            className: i,
            itemsCount: o,
            headerClassName: C,
            carouselClassName: p,
          } = e,
          {
            collection: {
              shelf: { liked: g },
            },
          } = (0, d.oR4)(),
          x = (0, n.V)(() => {
            var e;
            return null === (e = g.entities) || void 0 === e
              ? void 0
              : e.map((e, t) => {
                  if (e.album)
                    return (0, l.jsx)(
                      r.QY,
                      { album: e.album },
                      e.album.getKey(t),
                    );
                  let i = (0, u.O)(e.track, t, g.typeForFrom);
                  return (0, l.jsx)(
                    c.FP,
                    {
                      track: e.track,
                      playContextParams: i,
                      withPodcastName: !0,
                    },
                    e.track.getKey(t),
                  );
                });
          });
        return (g.isNeededToLoad && (0, s.use)(g.getData()),
        !g.isLoading &&
          (null === (t = g.entities) || void 0 === t ? void 0 : t.length))
          ? (0, l.jsx)(m.ad, {
              shimmer: (0, l.jsx)(m.DX, {
                variant: d.Lxt.PLAYLIST,
                isActive: !0,
              }),
              isShimmerActive: !0,
              isShimmerVisible: g.isLoading,
              className: i,
              carouselItemClassName: (0, a.W)(h().shelfColumn, h().important),
              blockHeaderClassName: (0, a.W)(h().header, C),
              carouselClassName: p,
              blockHeaderTitle: g.title,
              itemsCountPerColumn: null != o ? o : 0,
              maxColumnsCount: m.IA.ONE,
              viewAllActionLink: "/collection/shelf/liked",
              children: x,
            })
          : (0, l.jsx)(_.D, { className: i, withHeader: !0 });
      });
    },
    1759: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return m;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(28676),
        s = i(13534),
        n = i(97141),
        r = i(26870),
        c = i.n(r);
      let d = () =>
          Array.from({ length: 5 }, (e) =>
            (0, l.jsx)(
              n.DX,
              { variant: s.Lxt.PLAYLIST, className: c().track, isActive: !0 },
              e,
            ),
          ),
        m = (0, a.Pi)((e) => {
          let { className: t, withHeader: i } = e;
          return (0, l.jsxs)("div", {
            className: t,
            children: [
              i &&
                (0, l.jsx)(o.Shimmer, {
                  radius: "l",
                  width: 100,
                  height: 24,
                  className: c().title,
                  isActive: !0,
                }),
              (0, l.jsx)(d, {}),
            ],
          });
        });
    },
    96162: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfLikedPage: function () {
          return j;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(14218),
        m = i(17392),
        u = i(30948),
        _ = i(72783),
        C = i(69947),
        h = i(1150),
        p = i(13534),
        g = i(97141),
        x = i(91854),
        v = i(42062),
        b = i(59342),
        y = i(44188),
        P = i.n(y);
      let j = (0, o.Pi)(() => {
        var e, t, i, o, y;
        let {
            settings: { isMobile: j },
            collection: { shelfLiked: k },
          } = (0, p.oR4)(),
          { contentScrollRef: f, setContentScrollRef: N } = (0, p.$Y6)(),
          S = (0, p.k67)(),
          { formatMessage: L } = (0, n.Z)(),
          I = (0, p.iXn)(),
          A = (0, s.useCallback)(
            (e) => {
              k.getData({ page: e, pageSize: x.O });
            },
            [k],
          ),
          E = (0, d.V)(() => ({
            Footer: () => (0, l.jsx)(g.$_, { className: P().footer }),
          })),
          T =
            k.isLoading &&
            (null !==
              (i =
                null == k
                  ? void 0
                  : null === (e = k.items) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== i
              ? i
              : 0) === 0
              ? 20
              : null !==
                    (o =
                      null == k
                        ? void 0
                        : null === (t = k.items) || void 0 === t
                          ? void 0
                          : t.length) && void 0 !== o
                ? o
                : 0;
        return ((0, s.useEffect)(
          () => () => {
            k.reset();
          },
          [k],
        ),
        (0, p.NOh)(k.isResolved),
        k.isNeededToLoad && (0, s.use)(k.getData({ pageSize: x.O })),
        k.isRejected)
          ? (0, l.jsx)(u.D, {})
          : k.isEmpty
            ? (0, l.jsx)(b.A, {
                title: L({ id: "error-messages.empty-shelf-liked-page-title" }),
              })
            : (0, l.jsx)(C.I7, {
                scrollElement: f,
                outerTitle: L({ id: "podcast.shelf-liked-title" }),
                children: (0, l.jsxs)("div", {
                  className: P().root,
                  ...(0, c.BA)(c.Br.collection.COLLECTION_SHELF_LIKED_PAGE),
                  children: [
                    (0, l.jsx)(g.h4, {
                      variant: g.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: S.canBack,
                      children: (0, l.jsx)(m.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, l.jsx)(r.Z, {
                          id: "podcast.shelf-liked-title",
                        }),
                      }),
                    }),
                    (0, l.jsx)(g.Wv, {
                      className: (0, a.W)(P().scrollContainer, P().important),
                      customComponents: E,
                      itemContentCallback: (e) => {
                        var t;
                        let i =
                          null === (t = k.items) || void 0 === t
                            ? void 0
                            : t[e];
                        if (!i)
                          return (0, l.jsx)(
                            g.DX,
                            { variant: p.Lxt.PLAYLIST, isActive: !0 },
                            e,
                          );
                        if (i.album)
                          return (0, l.jsx)(
                            _.QY,
                            { album: i.album },
                            i.album.getKey(e),
                          );
                        let a = I(e, (0, v.O)(i.track, e, k.typeForFrom));
                        return (0, l.jsx)(
                          h.FP,
                          {
                            track: i.track,
                            playContextParams: a,
                            withPodcastName: !0,
                          },
                          i.track.getKey(e),
                        );
                      },
                      initialItemCount: T,
                      totalCount: T,
                      onGetDataByPage: A,
                      totalRequests:
                        null !== (y = k.requests) && void 0 !== y ? y : 0,
                      listClassName: P().content,
                      itemClassName: P().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: L({ id: "podcast.shelf-liked-title" }),
                      },
                      isMobileLayout: j,
                      useWindowScroll: j,
                    }),
                  ],
                }),
              });
      });
    },
    98652: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfNewEpisodesPage: function () {
          return f;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(98730),
        s = i(65067),
        n = i(35846),
        r = i(17294),
        c = i(17392),
        d = i(30948),
        m = i(69947),
        u = i(13534),
        _ = i(97141),
        C = i(32358),
        h = i(15937),
        p = i(84638),
        g = i(68208),
        x = i(69756),
        v = i(1150),
        b = i(12457),
        y = i.n(b);
      let P = (0, a.Pi)(() => {
        let {
            sonataState: e,
            collection: {
              shelf: { newEpisodes: t },
            },
          } = (0, u.oR4)(),
          i = (0, u.s0h)("/non-music"),
          a = (0, s.useMemo)(() => {
            var i;
            return null === (i = t.tracks) || void 0 === i
              ? void 0
              : i.map((i, a) =>
                  (0, l.jsx)(
                    v.FP,
                    {
                      track: i,
                      playContextParams: {
                        contextData: {
                          type: p.A.Album,
                          meta: { id: i.entityId },
                          from: t.typeForFrom || "",
                        },
                        queueParams: { index: a, entityId: i.id },
                        loadContextMeta: !0,
                        entitiesData: e.unloadedEntitiesDataFromModels,
                      },
                      withPodcastName: !0,
                    },
                    i.entityId,
                  ),
                );
          }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
          o = (0, s.useMemo)(
            () =>
              t.isEmpty
                ? (0, l.jsx)(h.Z, {
                    id: "error-messages.empty-shelf-new-episodes-title-no-tracks",
                  })
                : (0, l.jsx)(h.Z, {
                    id: "error-messages.empty-shelf-new-episodes-title",
                  }),
            [t.isEmpty],
          );
        return (t.isNeededToLoad && (0, s.use)(t.getData()), t.isLoading)
          ? (0, l.jsx)(_.DX, { variant: u.Lxt.PLAYLIST, isActive: !0 })
          : (0, l.jsxs)("div", {
              className: (0, C.W)(y().root, {
                [y().root_emptyList]: t.isEmpty,
              }),
              children: [
                a,
                (0, l.jsxs)("div", {
                  className: y().wrapper,
                  children: [
                    (0, l.jsx)("div", {
                      className: y().iconBackground,
                      children: (0, l.jsx)(x.Icon, {
                        variant: "like",
                        size: "l",
                      }),
                    }),
                    (0, l.jsx)(c.Heading, {
                      className: y().title,
                      variant: "h3",
                      size: "xs",
                      children: o,
                    }),
                    !t.isEmpty &&
                      (0, l.jsx)(c.Caption, {
                        type: "controls",
                        variant: "span",
                        size: "l",
                        weight: "normal",
                        children: (0, l.jsx)(h.Z, {
                          id: "error-messages.empty-shelf-new-episodes-text",
                        }),
                      }),
                    (0, l.jsx)(g.Button, {
                      onClick: i,
                      className: y().button,
                      role: "link",
                      color: "secondary",
                      size: "s",
                      radius: "xxxl",
                      children: (0, l.jsx)(c.Caption, {
                        type: "controls",
                        variant: "span",
                        size: "m",
                        children: (0, l.jsx)(h.Z, {
                          id: "error-messages.empty-shelf-liked-page-link",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
      });
      var j = i(4202),
        k = i.n(j);
      let f = (0, a.Pi)(() => {
        var e;
        let {
            collection: {
              shelf: { newEpisodes: t },
            },
          } = (0, u.oR4)(),
          { contentScrollRef: i, setContentScrollRef: a } = (0, u.$Y6)(),
          C = (0, u.k67)(),
          h = (0, o.useRouter)(),
          p = (0, u.SZ_)(
            "/playlists/".concat(
              null === (e = t.playlist) || void 0 === e ? void 0 : e.uuid,
            ),
          ),
          g = (0, s.useCallback)(() => {
            p && h.replace(p);
          }, [h, p]);
        return ((0, s.useEffect)(() => {
          t.isResolved && t.withPlaylist && g();
        }, [t.isResolved, t.withPlaylist, g]),
        (0, s.useEffect)(
          () => () => {
            t.reset();
          },
          [t],
        ),
        (0, u.NOh)(t.isResolved),
        t.isRejected)
          ? (0, l.jsx)(d.D, {})
          : (0, l.jsxs)(m.I7, {
              scrollElement: i,
              outerTitle: t.title,
              children: [
                (0, l.jsx)(_.h4, {
                  variant: _.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, l.jsx)(c.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  }),
                }),
                (0, l.jsxs)(r.t, {
                  ref: a,
                  containerClassName: k().scrollableContainer,
                  className: k().root,
                  ...(0, n.BA)(
                    n.Br.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                  ),
                  children: [
                    (0, l.jsx)(P, {}),
                    (0, l.jsx)(_.$_, { className: k().footer }),
                  ],
                }),
              ],
            });
      });
    },
    23755: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfPage: function () {
          return N;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(65067),
        s = i(9317),
        n = i(15937),
        r = i(35846),
        c = i(17294),
        d = i(17392),
        m = i(30948),
        u = i(69947),
        _ = i(13534),
        C = i(97141),
        h = i(11420),
        p = i(32358),
        g = i(14218),
        x = i(1150),
        v = i(24082),
        b = i(1759),
        y = i(28039),
        P = i.n(y);
      let j = (0, a.Pi)((e) => {
        var t;
        let { className: i, itemsCount: a, headerClassName: s } = e,
          {
            sonataState: n,
            collection: {
              shelf: { recentlyPlayed: r },
            },
          } = (0, _.oR4)(),
          c = (0, g.V)(() => {
            var e;
            return null === (e = r.entities) || void 0 === e
              ? void 0
              : e.map((e, t) => {
                  let i = (0, v.f)(e, r.typeForFrom);
                  return (0, l.jsx)(
                    x.FP,
                    {
                      track: e.track,
                      playContextParams: {
                        contextData: i,
                        queueParams: { index: t, entityId: e.track.id },
                        loadContextMeta: !1,
                        entitiesData: n.unloadedEntitiesDataFromModels,
                      },
                      withPodcastName: !0,
                    },
                    e.track.id,
                  );
                });
          });
        return (r.isNeededToLoad && (0, o.use)(r.getData()),
        !r.isLoading &&
          (null === (t = r.entities) || void 0 === t ? void 0 : t.length))
          ? (0, l.jsx)(C.ad, {
              blockHeaderClassName: (0, p.W)(P().header, s),
              className: i,
              carouselItemClassName: (0, p.W)(P().shelfColumn, P().important),
              shimmer: (0, l.jsx)(C.DX, {
                variant: _.Lxt.PLAYLIST,
                isActive: !0,
              }),
              isShimmerVisible: r.isLoading,
              isShimmerActive: !0,
              maxColumnsCount: C.IA.ONE,
              blockHeaderTitle: r.title,
              itemsCountPerColumn: null != a ? a : 0,
              viewAllActionLink: "/collection/shelf/recently-played",
              children: c,
            })
          : (0, l.jsx)(b.D, { className: i });
      });
      var k = i(10074),
        f = i.n(k);
      let N = (0, a.Pi)(() => {
        let {
            collection: { shelf: e },
          } = (0, _.oR4)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, _.$Y6)(),
          { formatMessage: a } = (0, s.Z)(),
          p = (0, _.k67)();
        return ((0, o.useEffect)(
          () => () => {
            e.reset();
          },
          [e],
        ),
        (0, _.NOh)(e.isResolved),
        e.isRejected)
          ? (0, l.jsx)(m.D, {})
          : (0, l.jsxs)(u.I7, {
              scrollElement: t,
              outerTitle: a({ id: "page.shelf" }),
              children: [
                (0, l.jsx)(C.h4, {
                  variant: C.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: p.canBack,
                  children: (0, l.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: (0, l.jsx)(n.Z, { id: "page.shelf" }),
                  }),
                }),
                (0, l.jsx)(c.t, {
                  ref: i,
                  containerClassName: f().scrollableContainer,
                  className: f().root,
                  ...(0, r.BA)(r.Br.collection.COLLECTION_SHELF_PAGE),
                  children: (0, l.jsxs)("div", {
                    className: f().content,
                    children: [
                      e.hasRecentlyPlayed &&
                        (0, l.jsx)(j, {
                          className: f().block,
                          headerClassName: f().blockHeader,
                          itemsCount: 5,
                        }),
                      e.hasLiked &&
                        (0, l.jsx)(h.X, {
                          className: f().block,
                          headerClassName: f().blockHeader,
                          itemsCount: 5,
                        }),
                      (0, l.jsx)(C.$_, { className: f().footer }),
                    ],
                  }),
                }),
              ],
            });
      });
    },
    59342: function (e, t, i) {
      "use strict";
      i.d(t, {
        A: function () {
          return u;
        },
      });
      var l = i(75441),
        a = i(62569),
        o = i(15937),
        s = i(68208),
        n = i(69756),
        r = i(17392),
        c = i(13534),
        d = i(90625),
        m = i.n(d);
      let u = (0, a.Pi)((e) => {
        let { title: t } = e,
          i = (0, c.s0h)("/non-music");
        return (0, l.jsxs)("div", {
          className: m().root,
          children: [
            (0, l.jsx)("div", {
              className: m().iconBackground,
              children: (0, l.jsx)(n.Icon, { variant: "like", size: "l" }),
            }),
            (0, l.jsx)(r.Heading, {
              className: m().title,
              variant: "h3",
              size: "xs",
              children: t,
            }),
            (0, l.jsx)(s.Button, {
              onClick: i,
              className: m().button,
              role: "link",
              color: "secondary",
              size: "s",
              radius: "xxxl",
              children: (0, l.jsx)(r.Caption, {
                type: "controls",
                variant: "span",
                size: "m",
                children: (0, l.jsx)(o.Z, {
                  id: "error-messages.empty-shelf-liked-page-link",
                }),
              }),
            }),
          ],
        });
      });
    },
    7562: function (e, t, i) {
      "use strict";
      i.d(t, {
        CollectionShelfRecentlyPlayedPage: function () {
          return P;
        },
      });
      var l = i(75441),
        a = i(32358),
        o = i(62569),
        s = i(65067),
        n = i(9317),
        r = i(15937),
        c = i(35846),
        d = i(93093),
        m = i(17392),
        u = i(30948),
        _ = i(69947),
        C = i(1150),
        h = i(13534),
        p = i(97141),
        g = i(91854),
        x = i(24082),
        v = i(59342),
        b = i(59177),
        y = i.n(b);
      let P = (0, o.Pi)(() => {
        var e, t, i, o, b;
        let {
            settings: { isMobile: P },
            collection: { shelfRecentlyPlayed: j },
          } = (0, h.oR4)(),
          { contentScrollRef: k, setContentScrollRef: f } = (0, h.$Y6)(),
          N = (0, h.k67)(),
          { formatMessage: S } = (0, n.Z)(),
          L = (0, h.iXn)(),
          I = (0, d.W)((e) => {
            j.getData({ page: e, pageSize: g.O });
          }),
          A = (0, s.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(p.$_, { className: y().footer }),
            }),
            [],
          ),
          E =
            j.isLoading &&
            (null !==
              (i =
                null == j
                  ? void 0
                  : null === (e = j.items) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== i
              ? i
              : 0) === 0
              ? 20
              : null !==
                    (o =
                      null == j
                        ? void 0
                        : null === (t = j.items) || void 0 === t
                          ? void 0
                          : t.length) && void 0 !== o
                ? o
                : 0;
        return ((0, s.useEffect)(
          () => () => {
            j.reset();
          },
          [j],
        ),
        (0, h.NOh)(j.isResolved),
        j.isNeededToLoad && (0, s.use)(j.getData({ pageSize: g.O })),
        j.isRejected)
          ? (0, l.jsx)(u.D, {})
          : j.isEmpty
            ? (0, l.jsx)(v.A, {
                title: S({ id: "error-messages.empty-shelf-page-title" }),
              })
            : (0, l.jsx)(_.I7, {
                scrollElement: k,
                outerTitle: S({ id: "podcast.shelf-recently-played-title" }),
                children: (0, l.jsxs)("div", {
                  className: y().root,
                  ...(0, c.BA)(
                    c.Br.collection.COLLECTION_SHELF_RECENTLY_PLAYED_PAGE,
                  ),
                  children: [
                    (0, l.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: N.canBack,
                      children: (0, l.jsx)(m.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: (0, l.jsx)(r.Z, {
                          id: "podcast.shelf-recently-played-title",
                        }),
                      }),
                    }),
                    (0, l.jsx)(p.Wv, {
                      className: (0, a.W)(y().scrollContainer, y().important),
                      customComponents: A,
                      itemContentCallback: (e) => {
                        var t;
                        let i =
                          null === (t = j.items) || void 0 === t
                            ? void 0
                            : t[e];
                        if (!i)
                          return (0, l.jsx)(
                            p.DX,
                            { variant: h.Lxt.PLAYLIST, isActive: !0 },
                            e,
                          );
                        let a = (0, x.f)(i, j.typeForFrom);
                        return (0, l.jsx)(
                          C.FP,
                          {
                            track: i.track,
                            playContextParams: L(e, {
                              contextData: a,
                              queueParams: { entityId: i.track.id, index: e },
                            }),
                            withPodcastName: !0,
                          },
                          e,
                        );
                      },
                      initialItemCount: E,
                      totalCount: E,
                      onGetDataByPage: I,
                      totalRequests:
                        null !== (b = j.requests) && void 0 !== b ? b : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: f,
                      context: {
                        listAriaLabel: S({
                          id: "podcast.shelf-recently-played-title",
                        }),
                      },
                      isMobileLayout: P,
                      useWindowScroll: P,
                    }),
                  ],
                }),
              });
      });
    },
    35551: function (e, t, i) {
      "use strict";
      i.d(t, {
        T: function () {
          return l.NotFound;
        },
      });
      var l = i(15898);
    },
    68197: function (e) {
      e.exports = {
        root: "SortDropdown_root__d1JmQ",
        button: "SortDropdown_button__SjTI7",
        header: "SortDropdown_header__kj8yV",
        container: "SortDropdown_container__dyVF_",
      };
    },
    86190: function (e) {
      e.exports = { root: "CollectionAlbumsPage_root__qMtcC" };
    },
    64062: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageContent_root__2Ya18",
        scrollContainer: "CollectionAlbumsPageContent_scrollContainer__0TjJm",
        important: "CollectionAlbumsPageContent_important__fixM8",
        content: "CollectionAlbumsPageContent_content__jcwRU",
        footer: "CollectionAlbumsPageContent_footer__ZkUKY",
        item: "CollectionAlbumsPageContent_item__I_Wuz",
        tabPanel: "CollectionAlbumsPageContent_tabPanel__0qXKZ",
      };
    },
    92532: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageEmpty_root__7yn1F",
        icon: "CollectionAlbumsPageEmpty_icon__XFf9x",
        title: "CollectionAlbumsPageEmpty_title__hMQde",
        text: "CollectionAlbumsPageEmpty_text__jp_lj",
      };
    },
    76451: function (e) {
      e.exports = {
        root: "CollectionAlbumsPageHeader_root__87L_c",
        container: "CollectionAlbumsPageHeader_container__96cIo",
        title: "CollectionAlbumsPageHeader_title__1Ps8d",
        tabs: "CollectionAlbumsPageHeader_tabs__P4GTY",
        tab: "CollectionAlbumsPageHeader_tab__JSFBc",
        tabsShimmer: "CollectionAlbumsPageHeader_tabsShimmer__fGlR0",
        tabShimmer: "CollectionAlbumsPageHeader_tabShimmer__9hCc6",
        staticHeader: "CollectionAlbumsPageHeader_staticHeader__YNfX4",
        important: "CollectionAlbumsPageHeader_important__0dgC2",
        stickyHeader: "CollectionAlbumsPageHeader_stickyHeader__L_1IS",
      };
    },
    71088: function (e) {
      e.exports = {
        root: "CollectionArtistsPage_root__EH25F",
        scrollContainer: "CollectionArtistsPage_scrollContainer__tT6NQ",
        important: "CollectionArtistsPage_important__MG_XV",
        footer: "CollectionArtistsPage_footer__aZrx3",
        item: "CollectionArtistsPage_item___cy_9",
        contentBlock: "CollectionArtistsPage_contentBlock__5QDcr",
        contentBlock_withMarginTop:
          "CollectionArtistsPage_contentBlock_withMarginTop__e4_VX",
        gridLayout: "CollectionArtistsPage_gridLayout__00brJ",
        subTitle: "CollectionArtistsPage_subTitle__My70z",
      };
    },
    25041: function (e) {
      e.exports = {
        subTitle: "CollectionArtistsPageTopArtists_subTitle__xJdoJ",
        gridLayout: "CollectionArtistsPageTopArtists_gridLayout__H2AR_",
        chart: "CollectionArtistsPageTopArtists_chart__inbPE",
        position: "CollectionArtistsPageTopArtists_position__YDoRC",
        listenTime: "CollectionArtistsPageTopArtists_listenTime__NqxRf",
      };
    },
    68829: function (e) {
      e.exports = {
        root: "CollectionClipsPage_root__Z1yh9",
        content: "CollectionClipsPage_content__68gZ1",
        scrollContent: "CollectionClipsPage_scrollContent__6F_37",
        header: "CollectionClipsPage_header__L_hq2",
        footer: "CollectionClipsPage_footer__0IfmB",
      };
    },
    62391: function (e) {
      e.exports = {
        root: "CollectionClipsPageClips_root__uB8s_",
        virtualScroll: "CollectionClipsPageClips_virtualScroll__o3uWm",
        virtualItem: "CollectionClipsPageClips_virtualItem__UDzx8",
        virtualItemRow: "CollectionClipsPageClips_virtualItemRow__RPIOY",
        virtualItemRow_withTopBorder:
          "CollectionClipsPageClips_virtualItemRow_withTopBorder__Q6k2l",
        virtualItemRow_withBottomBorder:
          "CollectionClipsPageClips_virtualItemRow_withBottomBorder__D5Dep",
        clipsWillLike: "CollectionClipsPageClips_clipsWillLike__IhK8Q",
      };
    },
    32663: function (e) {
      e.exports = {
        root: "CollectionClipsPageClipsWillLike_root__uS0_8",
        carouselItem: "CollectionClipsPageClipsWillLike_carouselItem__0C0_W",
        important: "CollectionClipsPageClipsWillLike_important__U_2ET",
        carouselBlockHeader:
          "CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp",
        carouselBlock: "CollectionClipsPageClipsWillLike_carouselBlock__La_8Q",
      };
    },
    65100: function (e) {
      e.exports = {
        root: "CollectionClipsPageEmpty_root__P29ns",
        content: "CollectionClipsPageEmpty_content__gIM_C",
        icon: "CollectionClipsPageEmpty_icon__jDAZP",
        title: "CollectionClipsPageEmpty_title__DKJ_3",
        text: "CollectionClipsPageEmpty_text__F_Too",
      };
    },
    17167: function (e) {
      e.exports = { root: "CollectionDislikesPage_root__Qnohu" };
    },
    25404: function (e) {
      e.exports = {
        root: "CollectionDislikesPageContent_root__3AoS5",
        scrollContainer: "CollectionDislikesPageContent_scrollContainer__px7Vr",
        important: "CollectionDislikesPageContent_important__Oz6io",
        content: "CollectionDislikesPageContent_content__fScA9",
        content_withGrid:
          "CollectionDislikesPageContent_content_withGrid__wcx80",
        content_tracks: "CollectionDislikesPageContent_content_tracks__Hyiz_",
        footer: "CollectionDislikesPageContent_footer__E6nZG",
        item: "CollectionDislikesPageContent_item__aty4k",
        tabPanel: "CollectionDislikesPageContent_tabPanel__5L5T_",
        shimmerItem: "CollectionDislikesPageContent_shimmerItem__FMFR5",
      };
    },
    12873: function (e) {
      e.exports = {
        root: "CollectionDislikesPageEmpty_root__F9g35",
        icon: "CollectionDislikesPageEmpty_icon__hbz5L",
        title: "CollectionDislikesPageEmpty_title__AqUTM",
      };
    },
    24483: function (e) {
      e.exports = {
        root: "CollectionDislikesPageHeader_root__lZ6LT",
        container: "CollectionDislikesPageHeader_container__ACUbW",
        title: "CollectionDislikesPageHeader_title__6h9Km",
        tabs: "CollectionDislikesPageHeader_tabs__gt5AJ",
        tab: "CollectionDislikesPageHeader_tab__bxN5I",
        tabsShimmer: "CollectionDislikesPageHeader_tabsShimmer__akKoq",
        tabShimmer: "CollectionDislikesPageHeader_tabShimmer__0QLuH",
        staticHeader: "CollectionDislikesPageHeader_staticHeader__75rsF",
        important: "CollectionDislikesPageHeader_important__5ZM6D",
        stickyHeader: "CollectionDislikesPageHeader_stickyHeader__cAkxR",
      };
    },
    65082: function (e) {
      e.exports = {
        root: "CollectionKidsAlbumsPage_root__Fjk4C",
        scrollContainer: "CollectionKidsAlbumsPage_scrollContainer__OWiCy",
        important: "CollectionKidsAlbumsPage_important__1ghiQ",
        footer: "CollectionKidsAlbumsPage_footer__9niUH",
        item: "CollectionKidsAlbumsPage_item__A5TuB",
        content: "CollectionKidsAlbumsPage_content__6w_jh",
      };
    },
    14847: function (e) {
      e.exports = {
        root: "CollectionKidsPage_root__nfE01",
        content: "CollectionKidsPage_content__hVB40",
        carouselBlocks: "CollectionKidsPage_carouselBlocks__q7f0T",
        tracksCarouselItem: "CollectionKidsPage_tracksCarouselItem__8WvD0",
        important: "CollectionKidsPage_important__GkZJX",
        carouselBlock: "CollectionKidsPage_carouselBlock___6XRJ",
        carouselBlockHeader: "CollectionKidsPage_carouselBlockHeader__fqs_v",
        emptyBlock: "CollectionKidsPage_emptyBlock__dc50I",
        emptyBlockIcon: "CollectionKidsPage_emptyBlockIcon__eVAMs",
        emptyBlockTitle: "CollectionKidsPage_emptyBlockTitle__TYUpU",
        footer: "CollectionKidsPage_footer__wEREs",
      };
    },
    71336: function (e) {
      e.exports = {
        root: "CollectionKidsPlaylistsPage_root__RXH06",
        scrollContainer: "CollectionKidsPlaylistsPage_scrollContainer__F_oj2",
        important: "CollectionKidsPlaylistsPage_important__5V_zc",
        footer: "CollectionKidsPlaylistsPage_footer__R41Ol",
        item: "CollectionKidsPlaylistsPage_item__ht83l",
        content: "CollectionKidsPlaylistsPage_content__6Oo1m",
      };
    },
    70445: function (e) {
      e.exports = {
        root: "CollectionKidsSubPageEmpty_root__53xVY",
        scrollableContainer:
          "CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp",
        content: "CollectionKidsSubPageEmpty_content__VZZg5",
        icon: "CollectionKidsSubPageEmpty_icon__IQAON",
        title: "CollectionKidsSubPageEmpty_title__t9H4h",
        button: "CollectionKidsSubPageEmpty_button__26EKY",
        footer: "CollectionKidsSubPageEmpty_footer__XQnAw",
      };
    },
    52897: function (e) {
      e.exports = {
        root: "CollectionKidsTracksPage_root__8nP0n",
        scrollContainer: "CollectionKidsTracksPage_scrollContainer__1d9Pm",
        important: "CollectionKidsTracksPage_important__oX_Ny",
        footer: "CollectionKidsTracksPage_footer__dujIV",
        content: "CollectionKidsTracksPage_content__Vf43s",
      };
    },
    13102: function (e) {
      e.exports = {
        root: "CollectionNonMusicLikedPage_root__0e_hz",
        scrollContainer: "CollectionNonMusicLikedPage_scrollContainer__OthtN",
        important: "CollectionNonMusicLikedPage_important__MNJX3",
        footer: "CollectionNonMusicLikedPage_footer__F_mtD",
        item: "CollectionNonMusicLikedPage_item__Rb0yS",
        emptyBlock: "CollectionNonMusicLikedPage_emptyBlock__WAdri",
        content: "CollectionNonMusicLikedPage_content__9WDX5",
      };
    },
    11759: function (e) {
      e.exports = {
        emptyContent: "CollectionNonMusicEmpty_emptyContent__Km4Xo",
        emptyContentIcon: "CollectionNonMusicEmpty_emptyContentIcon__ZHVte",
        emptyContentTitle: "CollectionNonMusicEmpty_emptyContentTitle__PJIFd",
      };
    },
    83865: function (e) {
      e.exports = {
        root: "CollectionNonMusicPage_root__U6DRX",
        scrollableContainer:
          "CollectionNonMusicPage_scrollableContainer__iIZvl",
        important: "CollectionNonMusicPage_important__Y9D5x",
        content: "CollectionNonMusicPage_content__d8E7R",
        likedBlocks: "CollectionNonMusicPage_likedBlocks__cNqyq",
        carousel: "CollectionNonMusicPage_carousel__zDCY0",
        blockHeader: "CollectionNonMusicPage_blockHeader__PoAFY",
        footer: "CollectionNonMusicPage_footer__9feIA",
        shelfBlockCarousel: "CollectionNonMusicPage_shelfBlockCarousel__Kd6DB",
        shelfBlockHeader: "CollectionNonMusicPage_shelfBlockHeader__yfFcf",
      };
    },
    85731: function (e) {
      e.exports = {
        root: "CollectionPage_root__CZAxL",
        root_withCollectionColor:
          "CollectionPage_root_withCollectionColor__4kV02",
        content: "CollectionPage_content__c3f8z",
        header: "CollectionPage_header__z193s",
        description: "CollectionPage_description__A3dny",
        collectionColor: "CollectionPage_collectionColor__M5l1f",
        landing: "CollectionPage_landing__B4jW_",
        landing_onlyWizard: "CollectionPage_landing_onlyWizard__umeEK",
        footer: "CollectionPage_footer__9kzD0",
        footer_onlyWizard: "CollectionPage_footer_onlyWizard__FxCwa",
        error: "CollectionPage_error__xs4ZH",
      };
    },
    42946: function (e) {
      e.exports = {
        root: "CollectionPlaylistsCreatedPage_root__o77CF",
        scrollContainer:
          "CollectionPlaylistsCreatedPage_scrollContainer__Spb2M",
        important: "CollectionPlaylistsCreatedPage_important__DLkOq",
        content: "CollectionPlaylistsCreatedPage_content___qalr",
        footer: "CollectionPlaylistsCreatedPage_footer__I2jJa",
        item: "CollectionPlaylistsCreatedPage_item__2RmBg",
      };
    },
    23729: function (e) {
      e.exports = {
        root: "CollectionPlaylistsLikedPage_root__ZyIwA",
        scrollContainer: "CollectionPlaylistsLikedPage_scrollContainer__H_vPA",
        important: "CollectionPlaylistsLikedPage_important__GjYTU",
        content: "CollectionPlaylistsLikedPage_content__WIxhp",
        footer: "CollectionPlaylistsLikedPage_footer__A60Ui",
        item: "CollectionPlaylistsLikedPage_item__PpCht",
      };
    },
    75372: function (e) {
      e.exports = { root: "CollectionPlaylistsPage_root__1QnBw" };
    },
    12945: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageContent_root__hGnWW",
        scrollContainer:
          "CollectionPlaylistsPageContent_scrollContainer__fiLLm",
        important: "CollectionPlaylistsPageContent_important__ebi2p",
        content: "CollectionPlaylistsPageContent_content__aZ2bA",
        footer: "CollectionPlaylistsPageContent_footer__4Ir_w",
        item: "CollectionPlaylistsPageContent_item__OPBiS",
        tabPanel: "CollectionPlaylistsPageContent_tabPanel__2uB2_",
      };
    },
    74009: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageEmpty_root__mKZt2",
        icon: "CollectionPlaylistsPageEmpty_icon__x9v_P",
        title: "CollectionPlaylistsPageEmpty_title__8RfSi",
      };
    },
    25304: function (e) {
      e.exports = {
        root: "CollectionPlaylistsPageHeader_root__GfGIl",
        container: "CollectionPlaylistsPageHeader_container__oh7C2",
        title: "CollectionPlaylistsPageHeader_title__2D23I",
        staticTabs: "CollectionPlaylistsPageHeader_staticTabs__9c9yq",
        stickyTabs: "CollectionPlaylistsPageHeader_stickyTabs__Iot6U",
        tab: "CollectionPlaylistsPageHeader_tab__aNTOB",
        tabsShimmer: "CollectionPlaylistsPageHeader_tabsShimmer__u9JIN",
        tabShimmer: "CollectionPlaylistsPageHeader_tabShimmer__ekXeT",
        staticHeader: "CollectionPlaylistsPageHeader_staticHeader__lzc4l",
        important: "CollectionPlaylistsPageHeader_important__uR36G",
        stickyHeader: "CollectionPlaylistsPageHeader_stickyHeader__ojvbQ",
      };
    },
    95596: function (e) {
      e.exports = {
        header: "CollectionShelfLiked_header__u9MqV",
        shelfColumn: "CollectionShelfLiked_shelfColumn__4KX_5",
        important: "CollectionShelfLiked_important__0K3qk",
      };
    },
    12457: function (e) {
      e.exports = {
        title: "CollectionShelfNewEpisodes_title__y_SoT",
        root: "CollectionShelfNewEpisodes_root__VojSS",
        root_emptyList: "CollectionShelfNewEpisodes_root_emptyList__jsjSW",
        wrapper: "CollectionShelfNewEpisodes_wrapper__Z2EOe",
        iconBackground: "CollectionShelfNewEpisodes_iconBackground__K4Xui",
        button: "CollectionShelfNewEpisodes_button__3DALk",
      };
    },
    28039: function (e) {
      e.exports = {
        header: "CollectionShelfRecentlyPlayed_header__Nx7Cc",
        shelfColumn: "CollectionShelfRecentlyPlayed_shelfColumn__9xHhf",
        important: "CollectionShelfRecentlyPlayed_important__HS0GM",
      };
    },
    26870: function (e) {
      e.exports = { title: "CollectionShelfShimmer_title__X3d9J" };
    },
    44188: function (e) {
      e.exports = {
        root: "CollectionShelfLikedPage_root__KRXgN",
        footer: "CollectionShelfLikedPage_footer__NgcOJ",
        scrollContainer: "CollectionShelfLikedPage_scrollContainer__IBlT7",
        important: "CollectionShelfLikedPage_important__R4MBr",
        content: "CollectionShelfLikedPage_content__KHWpo",
        item: "CollectionShelfLikedPage_item__x5cqv",
      };
    },
    4202: function (e) {
      e.exports = {
        root: "CollectionShelfNewEpisodesPage_root__HTWkS",
        scrollableContainer:
          "CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ",
        footer: "CollectionShelfNewEpisodesPage_footer__0i466",
      };
    },
    10074: function (e) {
      e.exports = {
        root: "CollectionShelfPage_root__S0__c",
        scrollableContainer: "CollectionShelfPage_scrollableContainer__9f317",
        content: "CollectionShelfPage_content__AG3r8",
        block: "CollectionShelfPage_block__34jyy",
        blockHeader: "CollectionShelfPage_blockHeader__Qjoln",
        footer: "CollectionShelfPage_footer__pgWKV",
      };
    },
    90625: function (e) {
      e.exports = {
        root: "CollectionShelfPageEmpty_root__KrMco",
        iconBackground: "CollectionShelfPageEmpty_iconBackground__limUg",
        title: "CollectionShelfPageEmpty_title__cwF4m",
        button: "CollectionShelfPageEmpty_button___uzMX",
      };
    },
    59177: function (e) {
      e.exports = {
        root: "CollectionShelfRecentlyPlayedPage_root__1eSLj",
        footer: "CollectionShelfRecentlyPlayedPage_footer__5pPcU",
        scrollContainer:
          "CollectionShelfRecentlyPlayedPage_scrollContainer__2ErJI",
        important: "CollectionShelfRecentlyPlayedPage_important___ajYP",
        content: "CollectionShelfRecentlyPlayedPage_content__p4qEp",
        item: "CollectionShelfRecentlyPlayedPage_item__gQR_c",
      };
    },
    83516: function (e, t, i) {
      "use strict";
      var l, a;
      i.d(t, {
        Q: function () {
          return l;
        },
      }),
        ((a = l || (l = {})).MUSIC = "music"),
        (a.CHILDREN = "children");
    },
    50507: function (e, t, i) {
      "use strict";
      var l, a;
      i.d(t, {
        A: function () {
          return l;
        },
      }),
        ((a = l || (l = {})).ASC = "asc"),
        (a.DESC = "desc");
    },
  },
]);
