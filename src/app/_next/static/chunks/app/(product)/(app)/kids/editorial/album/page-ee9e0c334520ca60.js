(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5762],
  {
    98551: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 3506));
    },
    26406: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ji: function () {
          return m;
        },
      });
      var a,
        n,
        o,
        r,
        s = i(43218),
        l = i(65067),
        d = i(9317);
      ((a = o || (o = {})).formatDate = "FormattedDate"),
        (a.formatTime = "FormattedTime"),
        (a.formatNumber = "FormattedNumber"),
        (a.formatList = "FormattedList"),
        (a.formatDisplayName = "FormattedDisplayName"),
        ((n = r || (r = {})).formatDate = "FormattedDateParts"),
        (n.formatTime = "FormattedTimeParts"),
        (n.formatNumber = "FormattedNumberParts"),
        (n.formatList = "FormattedListParts");
      var u = function (t) {
        var e = (0, d.Z)(),
          i = t.value,
          a = t.children,
          n = (0, s.__rest)(t, ["value", "children"]);
        return a(e.formatNumberToParts(i, n));
      };
      function c(t) {
        var e = function (e) {
          var i = (0, d.Z)(),
            a = e.value,
            n = e.children,
            o = (0, s.__rest)(e, ["value", "children"]),
            r = "string" == typeof a ? new Date(a || 0) : a;
          return n(
            "formatDate" === t
              ? i.formatDateToParts(r, o)
              : i.formatTimeToParts(r, o),
          );
        };
        return (e.displayName = r[t]), e;
      }
      function g(t) {
        var e = function (e) {
          var i = (0, d.Z)(),
            a = e.value,
            n = e.children,
            o = (0, s.__rest)(e, ["value", "children"]),
            r = i[t](a, o);
          if ("function" == typeof n) return n(r);
          var u = i.textComponent || l.Fragment;
          return l.createElement(u, null, r);
        };
        return (e.displayName = o[t]), e;
      }
      (u.displayName = "FormattedNumberParts"),
        (u.displayName = "FormattedNumberParts");
      var m = g("formatDate");
      g("formatTime"),
        g("formatNumber"),
        g("formatList"),
        g("formatDisplayName"),
        c("formatDate"),
        c("formatTime");
    },
    3506: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i(75441),
        n = i(98730),
        o = i(54105);
      e.default = () => {
        let t = (0, n.useSearchParams)().get("id");
        return t || (0, n.notFound)(), (0, a.jsx)(o.$S, { id: t });
      };
    },
    54105: function (t, e, i) {
      "use strict";
      i.d(e, {
        Of: function () {
          return p.KidsCategoryPage;
        },
        $S: function () {
          return f.KidsEditorialAlbumsPage;
        },
        cf: function () {
          return v.KidsEditorialPlaylistsPage;
        },
        d6: function () {
          return h;
        },
      });
      var a = i(13534),
        n = i(22874),
        o = i(62726),
        r = i(72783),
        s = i(73447),
        l = i(40892);
      let d = n.V5.model("KidsEditorialAlbumItem", {
          id: n.V5.number,
          data: n.V5.maybeNull(r.ug),
        }),
        u = n.V5.compose(
          n.V5.model("KidsEditorialAlbumPage", {
            errorStatusCode: n.V5.maybe(n.V5.number),
            title: n.V5.maybeNull(n.V5.string),
            pager: n.V5.maybeNull(l.Vn),
            albums: n.V5.maybeNull(n.V5.array(d)),
            alreadyRequestedPages: n.V5.map(n.V5.number),
            requests: n.V5.maybeNull(n.V5.number),
          }),
          l.fu,
        )
          .views((t) => {
            let e = {
              get isLoading() {
                return t.isNeededToLoad || t.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let e =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
                return t.isRejected && e;
              },
              get isSomethingWrong() {
                return t.isRejected && !e.isNotFound;
              },
            };
            return e;
          })
          .actions((t) => {
            let e = {
              getAlbums: (0, n.ls)(function* (e) {
                var i, r, l;
                let { page: d = 0, pageSize: u = 20 } = e,
                  { albumResource: c, modelActionsLogger: g } = (0, n.dU)(t);
                if (
                  !(
                    !(null === (i = t.albums) || void 0 === i
                      ? void 0
                      : i.length) || t.alreadyRequestedPages.has("".concat(d))
                  )
                ) {
                  t.alreadyRequestedPages.set("".concat(d), d);
                  try {
                    let e = d * u,
                      i = t.albums.slice(e, e + u).map((t) => t.id),
                      a = yield c.getAlbums({ albumIds: i });
                    t.requests =
                      (null !== (l = t.requests) && void 0 !== l ? l : 0) + 1;
                    let o = {
                        page: d,
                        perPage: u,
                        total:
                          null === (r = t.albums) || void 0 === r
                            ? void 0
                            : r.length,
                      },
                      g = a.map(s.N),
                      m = d * u,
                      _ = 0;
                    for (let e = m; e < m + u; e++) {
                      let i = t.albums[e];
                      g[_] && i && (i.data = (0, n.pj)(g[_])), _++;
                    }
                    t.pager = o;
                  } catch (e) {
                    g.error(e),
                      e instanceof o.du &&
                        (e.statusCode === o.CN.NOT_FOUND ||
                          e.statusCode === o.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = o.CN.NOT_FOUND),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.REJECT);
                  }
                }
              }),
              getData: (0, n.ls)(function* (i) {
                let { id: r, page: s = 0, pageSize: l = 20 } = i,
                  { childrenLandingResource: d, modelActionsLogger: u } = (0,
                  n.dU)(t);
                if (t.loadingState !== a.Gui.PENDING)
                  try {
                    t.loadingState = a.Gui.PENDING;
                    let i = yield d.getEditorialAlbum({ id: r });
                    (t.title = i.title),
                      i.entities &&
                        i.entities.length > 0 &&
                        (t.albums = (0, n.pj)(
                          i.entities.map((t) => (0, n.pj)({ id: t })),
                        )),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.RESOLVE),
                      yield e.getAlbums({ page: s, pageSize: l });
                  } catch (e) {
                    u.error(e),
                      e instanceof o.du &&
                        (e.statusCode === o.CN.NOT_FOUND ||
                          e.statusCode === o.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = o.CN.NOT_FOUND),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.REJECT);
                  }
              }),
              reset() {
                (t.loadingState = a.Gui.IDLE),
                  t.alreadyRequestedPages.clear(),
                  (t.title = null),
                  (t.albums = null),
                  (t.requests = null),
                  (t.pager = null);
              },
            };
            return e;
          });
      var c = i(7797),
        g = i(10979);
      let m = n.V5.model("KidsEditorialPlaylistItem", {
          uid: n.V5.number,
          kind: n.V5.number,
          data: n.V5.maybeNull(c.d2),
        }),
        _ = n.V5.compose(
          n.V5.model("KidsEditorialPlaylistPage", {
            errorStatusCode: n.V5.maybe(n.V5.number),
            title: n.V5.maybeNull(n.V5.string),
            pager: n.V5.maybeNull(l.Vn),
            playlists: n.V5.maybeNull(n.V5.array(m)),
            alreadyRequestedPages: n.V5.map(n.V5.number),
            requests: n.V5.maybeNull(n.V5.number),
          }),
          l.fu,
        )
          .views((t) => {
            let e = {
              get isLoading() {
                return t.isNeededToLoad || t.loadingState === a.Gui.PENDING;
              },
              get isNotFound() {
                let e =
                  t.errorStatusCode === o.CN.NOT_FOUND ||
                  t.errorStatusCode === o.CN.BAD_REQUEST;
                return t.isRejected && e;
              },
              get isSomethingWrong() {
                return t.isRejected && !e.isNotFound;
              },
            };
            return e;
          })
          .actions((t) => {
            let e = {
              getPlaylists: (0, n.ls)(function* (e) {
                var i, r, s;
                let { page: l = 0, pageSize: d = 20 } = e,
                  { playlistsResource: u, modelActionsLogger: c } = (0, n.dU)(
                    t,
                  );
                if (
                  !(
                    !(null === (i = t.playlists) || void 0 === i
                      ? void 0
                      : i.length) || t.alreadyRequestedPages.has("".concat(l))
                  )
                ) {
                  t.alreadyRequestedPages.set("".concat(l), l);
                  try {
                    let e = l * d,
                      i = t.playlists.slice(e, e + d),
                      a = yield u.getPlaylists({
                        playlistIds: i.map((t) =>
                          "".concat(t.uid, ":").concat(t.kind),
                        ),
                        resumeStream: !1,
                      });
                    t.requests =
                      (null !== (s = t.requests) && void 0 !== s ? s : 0) + 1;
                    let o = {
                        page: l,
                        perPage: d,
                        total:
                          null === (r = t.playlists) || void 0 === r
                            ? void 0
                            : r.length,
                      },
                      c = a.playlists.map(g.PV),
                      m = l * d,
                      _ = 0;
                    for (let e = m; e < m + d; e++) {
                      let i = t.playlists[e];
                      c[_] && i && (i.data = (0, n.pj)(c[_])), _++;
                    }
                    t.pager = o;
                  } catch (e) {
                    c.error(e),
                      e instanceof o.du &&
                        (e.statusCode === o.CN.NOT_FOUND ||
                          e.statusCode === o.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = o.CN.NOT_FOUND),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.REJECT);
                  }
                }
              }),
              getData: (0, n.ls)(function* (i) {
                let { id: r, page: s = 0, pageSize: l = 20 } = i,
                  { childrenLandingResource: d, modelActionsLogger: u } = (0,
                  n.dU)(t);
                if (t.loadingState !== a.Gui.PENDING)
                  try {
                    t.loadingState = a.Gui.PENDING;
                    let i = yield d.getEditorialPlaylist({ id: r });
                    (t.title = i.title),
                      i.entities &&
                        i.entities.length > 0 &&
                        (t.playlists = (0, n.pj)(
                          i.entities.map((t) =>
                            (0, n.pj)({ uid: t.uid, kind: t.kind }),
                          ),
                        )),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.RESOLVE),
                      yield e.getPlaylists({ page: s, pageSize: l });
                  } catch (e) {
                    u.error(e),
                      e instanceof o.du &&
                        (e.statusCode === o.CN.NOT_FOUND ||
                          e.statusCode === o.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = o.CN.NOT_FOUND),
                      t.loadingState !== a.Gui.IDLE &&
                        (t.loadingState = a.Gui.REJECT);
                  }
              }),
              reset() {
                (t.loadingState = a.Gui.IDLE),
                  t.alreadyRequestedPages.clear(),
                  (t.title = null),
                  (t.playlists = null),
                  (t.requests = null),
                  (t.pager = null);
              },
            };
            return e;
          });
      var N = i(30495);
      let h = n.V5.model("KidsPage", {
        landing: N.d5,
        kidsEditorialPlaylistSubpage: _,
        kidsEditorialAlbumSubpage: u,
      });
      var p = i(93773),
        f = i(18251),
        v = i(50551);
      i(37631), i(33108);
    },
    93773: function (t, e, i) {
      "use strict";
      i.d(e, {
        KidsCategoryPage: function () {
          return x;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(98730),
        s = i(65067),
        l = i(35846),
        d = i(17294),
        u = i(17392),
        c = i(30495),
        g = i(30948),
        m = i(69947),
        _ = i(13534),
        N = i(97141),
        h = i(9717),
        p = i.n(h),
        f = i(26554),
        v = i.n(f);
      let y = () =>
          (0, a.jsxs)("div", {
            className: v().root,
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)(c.E, { isActive: !0, length: 4 }),
              }),
              (0, a.jsx)(N.HY, { isShimmerVisible: !0, isShimmerActive: !0 }),
              (0, a.jsx)(N.HY, { isShimmerVisible: !0, isShimmerActive: !0 }),
            ],
          }),
        x = (0, o.Pi)((t) => {
          let { categoryId: e } = t,
            { kids: i } = (0, _.oR4)(),
            { contentScrollRef: o, setContentScrollRef: h } = (0, _.$Y6)(),
            f = (0, _.k67)();
          (0, s.useEffect)(() => () => i.landing.reset(), [i.landing]),
            (0, _.NOh)(i.landing.isResolved),
            i.landing.isLoadedAndEmpty && (0, r.notFound)();
          let v = (0, c._B)(i.landing),
            x = (0, s.useMemo)(
              () =>
                i.landing.isLoading || i.landing.isNeededToLoad
                  ? (0, a.jsx)(y, {})
                  : (0, a.jsx)(c.Od, {
                      landing: i.landing,
                      errorComponent: (0, a.jsx)(g.D, {
                        className: p().error,
                        withBackwardControl: !1,
                      }),
                    }),
              [i.landing.loadingState, i.landing],
            );
          return (
            i.landing.isNeededToLoad &&
              (0, s.use)(i.landing.getChildrenSkeleton({ categoryId: e })),
            (0, a.jsx)(_.Lh6, {
              pageId: _.Rhz.KIDS_CATEGORY,
              children: (0, a.jsxs)(m.I7, {
                scrollElement: o,
                outerTitle: i.landing.title,
                children: [
                  (0, a.jsx)(N.h4, {
                    variant: N.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
                    children: (0, a.jsx)("div", {
                      className: p().header,
                      children: (0, a.jsx)(u.Heading, {
                        variant: "h1",
                        weight: "bold",
                        size: "xl",
                        children: i.landing.title,
                      }),
                    }),
                  }),
                  (0, a.jsxs)(d.t, {
                    className: p().root,
                    containerClassName: p().content,
                    ref: h,
                    ...(0, l.BA)(l.Br.kids.KIDS_CATEGORY_PAGE),
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, n.W)(p().landing, {
                          [p().landing_onlyWizard]: v,
                        }),
                        children: x,
                      }),
                      (0, a.jsx)(N.$_, { className: p().footer }),
                    ],
                  }),
                ],
              }),
            })
          );
        });
    },
    18251: function (t, e, i) {
      "use strict";
      i.d(e, {
        KidsEditorialAlbumsPage: function () {
          return y;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(98730),
        s = i(65067),
        l = i(9317),
        d = i(35846),
        u = i(93093),
        c = i(14218),
        g = i(17392),
        m = i(30948),
        _ = i(72783),
        N = i(69947),
        h = i(13534),
        p = i(97141),
        f = i(763),
        v = i.n(f);
      let y = (0, o.Pi)((t) => {
        var e, i, o;
        let { id: f } = t,
          {
            kids: { kidsEditorialAlbumSubpage: y },
            settings: { isMobile: x },
          } = (0, h.oR4)(),
          C = (0, h.k67)(),
          { contentScrollRef: P, setContentScrollRef: S } = (0, h.$Y6)(),
          { formatMessage: b } = (0, l.Z)(),
          E = (0, u.W)((t) => {
            y.getAlbums({ page: t, pageSize: 20 });
          });
        y.isNotFound && (0, r.notFound)(),
          (0, s.useEffect)(
            () => () => {
              y.reset();
            },
            [y],
          );
        let j = (0, c.V)(() => ({
          Footer: () => (0, a.jsx)(p.$_, { className: v().footer }),
        }));
        if (
          ((0, h.NOh)(y.isResolved),
          y.isNeededToLoad &&
            (0, s.use)(y.getData({ id: f, page: 0, pageSize: 20 })),
          y.isSomethingWrong)
        )
          return (0, a.jsx)(m.D, {});
        let D = y.isLoading
          ? 20
          : null !==
                (i =
                  null == y
                    ? void 0
                    : null === (e = y.albums) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== i
            ? i
            : 0;
        return (0, a.jsx)(h.Lh6, {
          pageId: h.Rhz.KIDS_EDITORIAL_ALBUMS,
          children: (0, a.jsx)(N.I7, {
            scrollElement: P,
            outerTitle: y.title,
            children: (0, a.jsxs)("div", {
              className: v().root,
              ...(0, d.BA)(d.Br.kids.KIDS_EDITORIAL_ALBUMS),
              children: [
                (0, a.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, a.jsx)(g.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: y.title,
                  }),
                }),
                (0, a.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: b(
                      { id: "mixes.albums-list" },
                      { genreName: y.title || "" },
                    ),
                  },
                  className: (0, n.W)(v().scrollContainer, v().important),
                  customComponents: j,
                  itemContentCallback: (t) => {
                    var e, i;
                    let n =
                        null == y
                          ? void 0
                          : null === (i = y.albums) || void 0 === i
                            ? void 0
                            : null === (e = i[t]) || void 0 === e
                              ? void 0
                              : e.data,
                      o = b(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: b({ id: "entity-names.album" }) },
                      );
                    return n
                      ? (0, a.jsx)(
                          _.rf,
                          {
                            withLikesCount: !0,
                            album: n,
                            contentLinesCount: 3,
                          },
                          n.id,
                        )
                      : (0, a.jsx)(p.hi, { isActive: !0, "aria-label": o });
                  },
                  initialItemCount: D,
                  totalCount: D,
                  onGetDataByPage: E,
                  pageSize: 20,
                  totalRequests:
                    null !== (o = y.requests) && void 0 !== o ? o : 0,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: S,
                  isMobileLayout: x,
                  useWindowScroll: x,
                }),
              ],
            }),
          }),
        });
      });
    },
    50551: function (t, e, i) {
      "use strict";
      i.d(e, {
        KidsEditorialPlaylistsPage: function () {
          return y;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(98730),
        s = i(65067),
        l = i(9317),
        d = i(35846),
        u = i(93093),
        c = i(14218),
        g = i(17392),
        m = i(30948),
        _ = i(69947),
        N = i(7797),
        h = i(13534),
        p = i(97141),
        f = i(47309),
        v = i.n(f);
      let y = (0, o.Pi)((t) => {
        var e, i, o;
        let { id: f } = t,
          {
            kids: { kidsEditorialPlaylistSubpage: y },
            settings: { isMobile: x },
          } = (0, h.oR4)(),
          C = (0, h.k67)(),
          { contentScrollRef: P, setContentScrollRef: S } = (0, h.$Y6)(),
          { formatMessage: b } = (0, l.Z)(),
          E = (0, u.W)((t) => {
            y.getPlaylists({ page: t, pageSize: 20 });
          });
        y.isNotFound && (0, r.notFound)(),
          (0, s.useEffect)(
            () => () => {
              y.reset();
            },
            [y],
          );
        let j = (0, c.V)(() => ({
          Footer: () => (0, a.jsx)(p.$_, { className: v().footer }),
        }));
        if (
          ((0, h.NOh)(y.isResolved),
          y.isNeededToLoad &&
            (0, s.use)(y.getData({ id: f, page: 0, pageSize: 20 })),
          y.isSomethingWrong)
        )
          return (0, a.jsx)(m.D, {});
        let D = y.isLoading
          ? 20
          : null !==
                (i =
                  null == y
                    ? void 0
                    : null === (e = y.playlists) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== i
            ? i
            : 0;
        return (0, a.jsx)(h.Lh6, {
          pageId: h.Rhz.KIDS_EDITORIAL_PLAYLISTS,
          children: (0, a.jsx)(_.I7, {
            scrollElement: P,
            outerTitle: y.title,
            children: (0, a.jsxs)("div", {
              className: v().root,
              ...(0, d.BA)(d.Br.kids.KIDS_EDITORIAL_PLAYLISTS),
              children: [
                (0, a.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: C.canBack,
                  children: (0, a.jsx)(g.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: y.title,
                  }),
                }),
                (0, a.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: b(
                      { id: "mixes.playlists-list" },
                      { genreName: y.title || "" },
                    ),
                  },
                  className: (0, n.W)(v().scrollContainer, v().important),
                  customComponents: j,
                  itemContentCallback: (t) => {
                    var e, i;
                    let n =
                        null == y
                          ? void 0
                          : null === (i = y.playlists) || void 0 === i
                            ? void 0
                            : null === (e = i[t]) || void 0 === e
                              ? void 0
                              : e.data,
                      o = b(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: b({ id: "entity-names.playlist" }) },
                      );
                    return n
                      ? (0, a.jsx)(
                          N.ZL,
                          { playlist: n, contentLinesCount: 3 },
                          n.key,
                        )
                      : (0, a.jsx)(p.hi, { isActive: !0, "aria-label": o });
                  },
                  initialItemCount: D,
                  totalCount: D,
                  onGetDataByPage: E,
                  pageSize: 20,
                  totalRequests:
                    null !== (o = y.requests) && void 0 !== o ? o : 0,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: S,
                  isMobileLayout: x,
                  useWindowScroll: x,
                }),
              ],
            }),
          }),
        });
      });
    },
    37631: function (t, e, i) {
      "use strict";
      i.d(e, {
        KidsNotFoundPage: function () {
          return l;
        },
      });
      var a = i(75441),
        n = i(62569),
        o = i(65067),
        r = i(35551),
        s = i(13534);
      let l = (0, n.Pi)(() => {
        let { kids: t } = (0, s.oR4)();
        return (
          (0, o.useEffect)(
            () => () => {
              t.landing.reset();
            },
            [t.landing],
          ),
          (0, a.jsx)(r.T, {})
        );
      });
    },
    33108: function (t, e, i) {
      "use strict";
      i.d(e, {
        KidsPage: function () {
          return y;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(65067),
        s = i(9317),
        l = i(15937),
        d = i(35846),
        u = i(36746),
        c = i(17294),
        g = i(17392),
        m = i(30495),
        _ = i(30948),
        N = i(69947),
        h = i(13534),
        p = i(97141),
        f = i(53638),
        v = i.n(f);
      let y = (0, o.Pi)(() => {
        let { kids: t, user: e } = (0, h.oR4)(),
          { formatMessage: i } = (0, s.Z)(),
          { contentScrollRef: o, setContentScrollRef: f } = (0, h.$Y6)();
        (0, r.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, h.NOh)(t.landing.isResolved);
        let y = (0, m._B)(t.landing);
        return (
          t.landing.isNeededToLoad &&
            (0, r.use)(
              t.landing.getSkeleton(
                { id: u.j.KIDS, showWizard: e.settings.showWizard },
                { preloadBlocksCount: 2 },
              ),
            ),
          (0, a.jsx)(h.Lh6, {
            pageId: h.Rhz.KIDS,
            children: (0, a.jsxs)(N.I7, {
              scrollElement: o,
              outerTitle: i({ id: "kids.for-kids" }),
              children: [
                (0, a.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  showControls: !1,
                  children: (0, a.jsx)("div", {
                    className: v().header,
                    children: (0, a.jsx)(g.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      children: (0, a.jsx)(l.Z, { id: "kids.for-kids" }),
                    }),
                  }),
                }),
                (0, a.jsxs)(c.t, {
                  className: v().root,
                  containerClassName: v().content,
                  ref: f,
                  ...(0, d.BA)(d.Br.kids.KIDS_PAGE),
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, n.W)(v().landing, {
                        [v().landing_onlyWizard]: y,
                      }),
                      children: (0, a.jsx)(m.Od, {
                        landing: t.landing,
                        errorComponent: (0, a.jsx)(_.D, {
                          className: v().error,
                          withBackwardControl: !1,
                        }),
                      }),
                    }),
                    (0, a.jsx)(p.$_, { className: v().footer }),
                  ],
                }),
              ],
            }),
          })
        );
      });
    },
    35551: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return a.NotFound;
        },
      });
      var a = i(15898);
    },
    15898: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotFound: function () {
          return _;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(15937),
        s = i(68208),
        l = i(69756),
        d = i(17392),
        u = i(13534),
        c = i(97141),
        g = i(35129),
        m = i.n(g);
      let _ = (0, o.Pi)((t) => {
        let { className: e } = t,
          { contentRef: i } = (0, u.$Y6)(),
          o = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, a.jsxs)("div", {
            className: (0, n.W)(m().root, { [m().root_desktop]: !i }, e),
            children: [
              (0, a.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: m().navigation,
                withForwardControl: !1,
              }),
              (0, a.jsxs)("div", {
                className: m().content,
                children: [
                  (0, a.jsx)(l.Icon, {
                    className: m().icon,
                    variant: "musicLogo",
                  }),
                  (0, a.jsx)(d.Heading, {
                    className: (0, n.W)(m().title, m().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, a.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, a.jsx)(d.Caption, {
                    className: (0, n.W)(m().text, m().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, a.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, a.jsx)(s.Button, {
                    onClick: o,
                    className: m().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, a.jsx)(d.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, a.jsx)(r.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    30948: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return a.SomethingWentWrong;
        },
      });
      var a = i(51987);
    },
    51987: function (t, e, i) {
      "use strict";
      i.d(e, {
        SomethingWentWrong: function () {
          return N;
        },
      });
      var a = i(75441),
        n = i(32358),
        o = i(62569),
        r = i(65067),
        s = i(15937),
        l = i(68208),
        d = i(69756),
        u = i(17392),
        c = i(13534),
        g = i(97141),
        m = i(28652),
        _ = i.n(m);
      let N = (0, o.Pi)((t) => {
        let { className: e, withBackwardControl: i = !0 } = t,
          o = (0, r.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: m } = (0, c.$Y6)();
        return (0, a.jsxs)("div", {
          className: (0, n.W)(_().root, e),
          children: [
            i &&
              (0, a.jsx)(g.nP, {
                withBackwardFallback: "/",
                className: (0, n.W)(_().navigation, {
                  [_().navigation_desktop]: !m,
                }),
                withForwardControl: !1,
              }),
            (0, a.jsxs)("div", {
              className: (0, n.W)(_().content, { [_().content_shrink]: !i }),
              children: [
                (0, a.jsx)(d.Icon, {
                  className: _().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, a.jsx)(u.Heading, {
                  className: (0, n.W)(_().title, _().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, a.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, a.jsxs)(u.Caption, {
                  className: (0, n.W)(_().text, _().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, a.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, a.jsx)(l.Button, {
                  onClick: o,
                  className: _().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, a.jsxs)(u.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, a.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    9717: function (t) {
      t.exports = {
        root: "KidsCategoryPage_root__bk7_R",
        content: "KidsCategoryPage_content__LN0NB",
        header: "KidsCategoryPage_header__Agys3",
        landing: "KidsCategoryPage_landing__aSDYw",
        landing_onlyWizard: "KidsCategoryPage_landing_onlyWizard__3EC9N",
        footer: "KidsCategoryPage_footer__BQhqi",
        error: "KidsCategoryPage_error__tSXF7",
      };
    },
    26554: function (t) {
      t.exports = { root: "KidsCategoryPageShimmer_root__0V_bC" };
    },
    763: function (t) {
      t.exports = {
        root: "KidsEditorialAlbumsPage_root__7rHF8",
        scrollContainer: "KidsEditorialAlbumsPage_scrollContainer__nQVlt",
        important: "KidsEditorialAlbumsPage_important__hmmxn",
        footer: "KidsEditorialAlbumsPage_footer__6rwU1",
        item: "KidsEditorialAlbumsPage_item__Wc243",
        content: "KidsEditorialAlbumsPage_content__u3zcW",
      };
    },
    47309: function (t) {
      t.exports = {
        root: "KidsEditorialPlaylistsPage_root__HeHqc",
        scrollContainer: "KidsEditorialPlaylistsPage_scrollContainer__Hy6HY",
        important: "KidsEditorialPlaylistsPage_important__283cd",
        footer: "KidsEditorialPlaylistsPage_footer___UaP5",
        item: "KidsEditorialPlaylistsPage_item__0wBk2",
        content: "KidsEditorialPlaylistsPage_content__6wWkP",
      };
    },
    53638: function (t) {
      t.exports = {
        root: "KidsPage_root__yycsJ",
        content: "KidsPage_content__08pPR",
        header: "KidsPage_header__2Gk2l",
        landing: "KidsPage_landing__3QZZj",
        landing_onlyWizard: "KidsPage_landing_onlyWizard__xKyDo",
        footer: "KidsPage_footer__p7SVD",
        error: "KidsPage_error__qa7Qo",
      };
    },
    35129: function (t) {
      t.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
    28652: function (t) {
      t.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 861, 3661, 5638, 9125, 8667, 7138, 5453, 7873,
        8015, 9282, 7255, 7141, 892, 1512, 2783, 2399, 7294, 7099, 1150, 2242,
        8743, 8492, 495, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 98551));
      },
    ),
      (_N_E = t.O());
  },
]);
