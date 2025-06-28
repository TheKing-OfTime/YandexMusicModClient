(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9630],
  {
    79223: function (e, t, a) {
      "use strict";
      a.d(t, {
        ak: function () {
          return d.SortDropdown;
        },
        $4: function () {
          return u;
        },
        VT: function () {
          return l.V;
        },
        io: function () {
          return s;
        },
        ZO: function () {
          return i.useSort;
        },
      });
      var l = a(28889),
        r = a(50507);
      let s = (e) => !!e && (e === r.A.ASC || e === r.A.DESC);
      var i = a(47446),
        n = a(22874),
        o = a(2954);
      let u = n.V5.model("Sort", {
        sortBy: n.V5.maybe(n.V5.enumeration(Object.values(o.h))),
        sortOrder: n.V5.maybe(n.V5.enumeration(Object.values(r.A))),
      }).actions((e) => ({
        setSortBy(t) {
          e.sortBy = t;
        },
        setSortOrder(t) {
          e.sortOrder = t;
        },
      }));
      var d = a(95921);
    },
    76890: function (e, t, a) {
      "use strict";
      a.d(t, {
        ET: function () {
          return h.LabelAlbumsPage;
        },
        qP: function () {
          return y.LabelArtistsPage;
        },
        NT: function () {
          return f.LabelPage;
        },
        WO: function () {
          return N;
        },
      });
      var l,
        r,
        s = a(98730),
        i = a(65067),
        n = a(13534);
      (0, i.cache)(async function (e, t) {
        let a =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { labelId: Number(e), page: 0, pageSize: 20, sortBy: t };
        (0, n.aBB)(e) || (0, s.notFound)();
        try {
          let {
            container: t,
            backendHostTld: l,
            locale: r,
            host: i,
            fullUrl: o,
            isRSC: u,
            requestUrl: d,
          } = await (0, n.rbP)();
          if (u)
            return {
              label: void 0,
              albums: void 0,
              backendHostTld: l,
              locale: r,
              host: i,
              fullUrl: o,
              requestUrl: d,
            };
          let c = Number(e),
            m = t.get(n.uLP),
            b = await m.getData({ labelId: c });
          "not-found" === b.error && (0, s.notFound)();
          let g = await m.getAlbums(a || { labelId: c, page: 0, pageSize: 20 });
          return {
            label: b,
            albums: g,
            backendHostTld: l,
            locale: r,
            host: i,
            fullUrl: o,
            requestUrl: d,
          };
        } catch (e) {
          return {
            label: void 0,
            albums: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      }),
        (0, i.cache)(async (e, t) => {
          (0, n.aBB)(e) || (0, s.notFound)();
          try {
            let {
              container: a,
              backendHostTld: l,
              locale: r,
              host: i,
              fullUrl: o,
              isRSC: u,
              requestUrl: d,
            } = await (0, n.rbP)();
            if (u)
              return {
                label: void 0,
                artists: void 0,
                backendHostTld: l,
                locale: r,
                host: i,
                fullUrl: o,
                requestUrl: d,
              };
            let c = Number(e),
              m = a.get(n.uLP),
              b = await m.getData({ labelId: c });
            "not-found" === b.error && (0, s.notFound)();
            let g = await m.getArtists(
              t || { labelId: c, page: 0, pageSize: 20 },
            );
            return {
              label: b,
              artists: g,
              backendHostTld: l,
              locale: r,
              host: i,
              fullUrl: o,
              requestUrl: d,
            };
          } catch (e) {
            return {
              label: void 0,
              artists: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
            };
          }
        });
      var o = a(62726);
      (0, i.cache)(async (e) => {
        (0, n.aBB)(e) || (0, s.notFound)();
        try {
          let {
            container: t,
            backendHostTld: a,
            locale: l,
            host: r,
            fullUrl: i,
            isRSC: o,
            requestUrl: u,
          } = await (0, n.rbP)();
          if (o)
            return {
              label: void 0,
              backendHostTld: a,
              locale: l,
              host: r,
              fullUrl: i,
              requestUrl: u,
            };
          let d = t.get(n.uLP),
            c = await d.getData({ labelId: Number(e) });
          return (
            "not-found" === c.error && (0, s.notFound)(),
            {
              label: c,
              backendHostTld: a,
              locale: l,
              host: r,
              fullUrl: i,
              requestUrl: u,
            }
          );
        } catch (e) {
          return (
            e instanceof o.du &&
              [o.CN.BAD_REQUEST, o.CN.NOT_FOUND].includes(e.statusCode) &&
              (0, s.notFound)(),
            {
              label: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
            }
          );
        }
      }),
        a(25180),
        a(13749),
        a(75330);
      var u = a(22874);
      ((l = r || (r = {})).MUSICAL = "musical"), (l.PUBLISHER = "publisher");
      var d = a(72783),
        c = a(64353),
        m = a(40892),
        b = a(79223);
      let g = u.V5.compose(
          u.V5.model("LabelAlbumsPage", {
            pager: u.V5.maybeNull(m.Vn),
            alreadyRequestedPages: u.V5.map(u.V5.number),
            pendingPages: u.V5.map(u.V5.number),
            requests: u.V5.maybeNull(u.V5.number),
            errorStatusCode: u.V5.maybeNull(u.V5.number),
            items: u.V5.array(u.V5.maybeNull(d.ug)),
            sort: b.$4,
          }),
          m.Al,
          m.fu,
        )
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.isResolved &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                l =
                  e.errorStatusCode &&
                  [o.CN.NOT_FOUND, o.CN.BAD_REQUEST].includes(
                    e.errorStatusCode,
                  );
              return (e.isRejected && l) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let {
                  labelId: a,
                  page: l = 0,
                  pageSize: r = 20,
                  preloadedAlbums: s,
                  sortBy: i,
                } = t,
                { labelsResource: c, modelActionsLogger: m } = (0, u.dU)(e);
              if (
                !(
                  (e.isLoading && e.pendingPages.has("".concat(l))) ||
                  e.alreadyRequestedPages.has("".concat(l))
                )
              ) {
                "number" == typeof l &&
                  e.alreadyRequestedPages.set("".concat(l), l);
                try {
                  var b;
                  (e.loadingState = n.Gui.PENDING),
                    e.pendingPages.set("".concat(l), l);
                  let t = s;
                  t ||
                    (t = yield c.getAlbums({
                      labelId: a,
                      page: l,
                      pageSize: r,
                      sortBy: i,
                    }));
                  let o = { page: l, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let m = t.albums.map(d.ym);
                  (0, n.AG_)({
                    items: e.items,
                    mappedRawItems: m,
                    page: l,
                    pageSize: r,
                  }),
                    (e.pager = o),
                    (e.requests =
                      (null !== (b = e.requests) && void 0 !== b ? b : 0) + 1),
                    (e.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  m.error(t),
                    t instanceof o.du &&
                      [o.CN.NOT_FOUND, o.CN.BAD_REQUEST].includes(
                        t.statusCode,
                      ) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== n.Gui.IDLE &&
                      (e.loadingState = n.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(l));
                }
              }
            }),
            reset() {
              (e.loadingState = n.Gui.IDLE),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                e.destroyItems([e.pager, e.items]);
            },
          })),
        p = u.V5.compose(
          u.V5.model("LabelArtistsPage", {
            pager: u.V5.maybeNull(m.Vn),
            alreadyRequestedPages: u.V5.map(u.V5.number),
            pendingPages: u.V5.map(u.V5.number),
            requests: u.V5.maybeNull(u.V5.number),
            errorStatusCode: u.V5.maybeNull(u.V5.number),
            items: u.V5.array(u.V5.maybeNull(c.Go)),
          }),
          m.Al,
          m.fu,
        )
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.isResolved &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                l =
                  e.errorStatusCode &&
                  [o.CN.NOT_FOUND, o.CN.BAD_REQUEST].includes(
                    e.errorStatusCode,
                  );
              return (e.isRejected && l) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let {
                  labelId: a,
                  page: l = 0,
                  pageSize: r = 20,
                  preloadedArtists: s,
                } = t,
                { labelsResource: i, modelActionsLogger: d } = (0, u.dU)(e);
              if (
                !(
                  (e.isLoading && e.pendingPages.has("".concat(l))) ||
                  e.alreadyRequestedPages.has("".concat(l))
                )
              ) {
                "number" == typeof l &&
                  e.alreadyRequestedPages.set("".concat(l), l);
                try {
                  var m;
                  (e.loadingState = n.Gui.PENDING),
                    e.pendingPages.set("".concat(l), l);
                  let t = s;
                  t ||
                    (t = yield i.getArtists({
                      labelId: a,
                      page: l,
                      pageSize: r,
                    }));
                  let o = { page: l, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let d = t.artists.map(c.d);
                  (0, n.AG_)({
                    items: e.items,
                    mappedRawItems: d,
                    page: l,
                    pageSize: r,
                  }),
                    (e.pager = o),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    (e.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof o.du &&
                      [o.CN.NOT_FOUND, o.CN.BAD_REQUEST].includes(
                        t.statusCode,
                      ) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== n.Gui.IDLE &&
                      (e.loadingState = n.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(l));
                }
              }
            }),
            reset() {
              (e.loadingState = n.Gui.IDLE),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                e.destroyItems([e.pager, e.items]);
            },
          })),
        N = u.V5.compose(
          u.V5.model("LabelPage", {
            id: u.V5.maybeNull(u.V5.string),
            name: u.V5.maybeNull(u.V5.string),
            type: u.V5.maybeNull(u.V5.string),
            albums: u.V5.maybeNull(u.V5.array(d.ug)),
            albumsSubpage: g,
            artistsSubpage: p,
            artists: u.V5.maybeNull(u.V5.array(c.Go)),
            errorStatusCode: u.V5.maybeNull(u.V5.number),
          }),
          m.Al,
          m.fu,
        )
          .views((e) => {
            let t = {
              get url() {
                return "/label/".concat(e.id);
              },
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === n.Gui.PENDING;
              },
              get hasAlbums() {
                return !!(t.isLoading || (e.albums && e.albums.length > 0));
              },
              get hasArtists() {
                if (t.isPublisher) return !1;
                return !!(t.isLoading || (e.artists && e.artists.length > 0));
              },
              get isNotFound() {
                let a =
                    e.isResolved && !e.name && !t.hasAlbums && !t.hasArtists,
                  l =
                    e.errorStatusCode &&
                    [o.CN.NOT_FOUND, o.CN.BAD_REQUEST].includes(
                      e.errorStatusCode,
                    );
                return (e.isRejected && l) || a;
              },
              get albumsUrl() {
                return "/label/".concat(e.id, "/albums");
              },
              get artistsUrl() {
                return "/label/".concat(e.id, "/artists");
              },
              get isPublisher() {
                return e.type === r.PUBLISHER;
              },
              get isMusical() {
                return e.type === r.MUSICAL;
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getAlbums: (0, u.ls)(function* (t) {
                let { labelsResource: a, modelActionsLogger: l } = (0, u.dU)(e);
                try {
                  let l = yield a.getAlbums(t);
                  e.albums = (0, u.pj)(l.albums.map(d.ym));
                } catch (t) {
                  l.error(t),
                    t instanceof o.du &&
                      [o.CN.BAD_REQUEST, o.CN.NOT_FOUND].includes(
                        t.statusCode,
                      ) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND);
                }
              }),
              getArtists: (0, u.ls)(function* (t) {
                let { labelsResource: a, modelActionsLogger: l } = (0, u.dU)(e);
                try {
                  let l = yield a.getArtists(t);
                  e.artists = (0, u.pj)(l.artists.map(c.d));
                } catch (t) {
                  l.error(t),
                    t instanceof o.du &&
                      [o.CN.BAD_REQUEST, o.CN.NOT_FOUND].includes(
                        t.statusCode,
                      ) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND);
                }
              }),
              getData: (0, u.ls)(function* (a) {
                let {
                    labelId: l,
                    preloadedLabel: r,
                    withLabelEntities: s = !0,
                  } = a,
                  { labelsResource: i, modelActionsLogger: d } = (0, u.dU)(e);
                if (e.loadingState !== n.Gui.PENDING)
                  try {
                    e.loadingState = n.Gui.PENDING;
                    let a = r;
                    a || (a = yield i.getData({ labelId: l })),
                      (e.id = String(a.id)),
                      (e.name = a.name),
                      (e.type = a.type),
                      s &&
                        (yield t.getAlbums({ labelId: l, pageSize: 8 }),
                        yield t.getArtists({ labelId: l, pageSize: 8 })),
                      (e.loadingState = n.Gui.RESOLVE);
                  } catch (t) {
                    d.error(t),
                      t instanceof o.du &&
                        [o.CN.BAD_REQUEST, o.CN.NOT_FOUND].includes(
                          t.statusCode,
                        ) &&
                        (e.errorStatusCode = t.statusCode),
                      e.loadingState !== n.Gui.IDLE &&
                        (e.loadingState = n.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = n.Gui.IDLE),
                  (e.id = null),
                  (e.name = null),
                  (e.type = null),
                  (e.errorStatusCode = null),
                  e.destroyItems([e.albums, e.artists]);
              },
            };
            return t;
          });
      var h = a(56505),
        y = a(24877);
      a(99131);
      var f = a(98350);
    },
    25180: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return r;
        },
      });
      var l = a(13534);
      async function r(e, t) {
        var a, r, s;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let i = await (0, l.EQQ)(t.locale),
          n = i(
            { id: "metadata.label-albums-title" },
            { labelName: e.name, labelType: e.type },
          ),
          o = i(
            { id: "metadata.label-albums-description" },
            { labelName: e.name, labelType: e.type },
          );
        return {
          title: n,
          description: o,
          openGraph: (0, l.A36)({
            ogTitle: n,
            ogDescription: o,
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            siteName: i({ id: "metadata.yandex-music" }),
            ogType: "music.playlist",
          }),
          twitter: (0, l.rz9)({
            cardType: l.qUR.APP,
            title: n,
            url: t.url,
            appName: i({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, l.VMi)({
            additional: {
              ...t,
              url: null !== (r = t.url) && void 0 !== r ? r : "",
              fullUrl: null !== (s = t.fullUrl) && void 0 !== s ? s : "",
              host: t.host,
            },
            appName: i({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    13749: function (e, t, a) {
      "use strict";
      a.d(t, {
        C: function () {
          return r;
        },
      });
      var l = a(13534);
      async function r(e, t) {
        var a, r, s;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let i = await (0, l.EQQ)(t.locale),
          n = i(
            { id: "metadata.label-artists-title" },
            { labelName: e.name, labelType: e.type },
          ),
          o = i(
            { id: "metadata.label-artists-description" },
            { labelName: e.name, labelType: e.type },
          );
        return {
          title: n,
          description: o,
          openGraph: (0, l.A36)({
            ogTitle: n,
            ogDescription: o,
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            siteName: i({ id: "metadata.yandex-music" }),
            ogType: "music.playlist",
          }),
          twitter: (0, l.rz9)({
            cardType: l.qUR.APP,
            title: n,
            url: t.url,
            appName: i({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, l.VMi)({
            additional: {
              ...t,
              url: null !== (r = t.url) && void 0 !== r ? r : "",
              fullUrl: null !== (s = t.fullUrl) && void 0 !== s ? s : "",
              host: t.host,
            },
            appName: i({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    75330: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return r;
        },
      });
      var l = a(13534);
      async function r(e, t) {
        var a, r, s;
        if (!e)
          return {
            title: "",
            description: "",
            openGraph: {},
            twitter: {},
            appLinks: {},
            other: {},
          };
        let i = await (0, l.EQQ)(t.locale),
          n = i(
            { id: "metadata.label-title" },
            { labelTitle: e.name, labelType: e.type },
          ),
          o = i(
            { id: "metadata.label-description" },
            { labelTitle: e.name, labelType: e.type },
          );
        return {
          title: n,
          description: o,
          openGraph: (0, l.A36)({
            ogTitle: n,
            ogDescription: o,
            fullUrl: null !== (a = t.fullUrl) && void 0 !== a ? a : "",
            locale: t.locale,
            siteName: i({ id: "metadata.yandex-music" }),
            ogType: "music.playlist",
          }),
          twitter: (0, l.rz9)({
            cardType: l.qUR.APP,
            title: n,
            url: t.url,
            appName: i({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, l.VMi)({
            additional: {
              ...t,
              url: null !== (r = t.url) && void 0 !== r ? r : "",
              fullUrl: null !== (s = t.fullUrl) && void 0 !== s ? s : "",
              host: t.host,
            },
            appName: i({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    29292: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return d;
        },
        b: function () {
          return r;
        },
      });
      var l,
        r,
        s = a(65067),
        i = a(13534),
        n = a(25180),
        o = a(13749),
        u = a(75330);
      ((l = r || (r = {})).ROOT = "root"),
        (l.ALBUMS = "albums"),
        (l.ARTISTS = "artists");
      let d = (e, t) => {
        (0, s.useEffect)(() => {
          switch (t) {
            case "root":
              (0, u.F)(e, {
                fullUrl: null,
                locale: null,
                url: null,
                tld: "",
                host: "",
              }).then((e) => {
                (0, i.gOT)(e);
              });
              break;
            case "albums":
              (0, n.Y)(e, {
                fullUrl: null,
                locale: null,
                url: null,
                tld: "",
                host: "",
              }).then((e) => {
                (0, i.gOT)(e);
              });
              break;
            case "artists":
              (0, o.C)(e, {
                fullUrl: null,
                locale: null,
                url: null,
                tld: "",
                host: "",
              }).then((e) => {
                (0, i.gOT)(e);
              });
          }
        }, [
          null == e ? void 0 : e.id,
          null == e ? void 0 : e.type,
          null == e ? void 0 : e.name,
          t,
          e,
        ]);
      };
    },
    56505: function (e, t, a) {
      "use strict";
      a.d(t, {
        LabelAlbumsPage: function () {
          return v;
        },
      });
      var l = a(75441),
        r = a(32358),
        s = a(62569),
        i = a(98730),
        n = a(65067),
        o = a(9317),
        u = a(35846),
        d = a(93093),
        c = a(17392),
        m = a(30948),
        b = a(72783),
        g = a(69947),
        p = a(79223),
        N = a(13534),
        h = a(97141),
        y = a(29292),
        f = a(68521),
        _ = a.n(f);
      let v = (0, s.Pi)((e) => {
        var t, a, s, f, v;
        let {
            labelId: L,
            preloadedLabel: C,
            preloadedAlbums: A,
            sortBy: S,
          } = e,
          {
            label: {
              id: P,
              type: E,
              name: T,
              albumsSubpage: x,
              reset: B,
              isNeededToLoad: R,
              getData: U,
              isPublisher: V,
            },
            settings: { isMobile: j },
            experiments: O,
          } = (0, N.oR4)(),
          { formatMessage: D } = (0, o.Z)(),
          { contentScrollRef: I, setContentScrollRef: w } = (0, N.$Y6)(),
          k = (0, N.k67)(),
          F = V
            ? D({ id: "page.label-podcast-header" }, { labelName: T })
            : D({ id: "page.label-albums-header" }, { labelName: T }),
          G = (0, d.W)((e) => {
            var t;
            x.getData({
              labelId: Number(L),
              page: e,
              pageSize: 20,
              sortBy: null !== (t = x.sort.sortBy) && void 0 !== t ? t : S,
            });
          }),
          q = (0, d.W)(() => {
            x.reset(), G(0);
          });
        (0, p.ZO)({ sortModel: x.sort }),
          (0, n.useEffect)(
            () => () => {
              B(), x.reset();
            },
            [B, x],
          ),
          (x.isNotFound || !O.checkExperiment(N.peG.WebNextLabelPage, "on")) &&
            (0, i.notFound)(),
          (0, y.I)(
            {
              id: Number(P),
              name: null != T ? T : "",
              type: null != E ? E : "",
            },
            y.b.ALBUMS,
          ),
          (0, N.NOh)(x.isResolved);
        let z = (0, n.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(h.$_, { className: _().footer }),
            }),
            [],
          ),
          W = D({ id: "entity-names.label-albums-list" }),
          M = [];
        if (x.isNeededToLoad) {
          let e = x.sort.sortBy === S || void 0 === x.sort.sortBy;
          M.push(
            x.getData({
              labelId: Number(L),
              page: 0,
              pageSize: 20,
              preloadedAlbums: e ? A : void 0,
              sortBy: null !== (s = x.sort.sortBy) && void 0 !== s ? s : S,
            }),
          );
        }
        if (
          (R &&
            M.push(
              U({
                labelId: Number(L),
                preloadedLabel: C,
                withLabelEntities: !1,
              }),
            ),
          M.length && (0, n.use)(Promise.allSettled(M)),
          x.isRejected && !x.isNotFound)
        )
          return (0, l.jsx)(m.D, {});
        let Q =
          !x.isLoading ||
          (null === (t = x.pager) || void 0 === t ? void 0 : t.total)
            ? null !==
                (f =
                  null == x
                    ? void 0
                    : null === (a = x.pager) || void 0 === a
                      ? void 0
                      : a.total) && void 0 !== f
              ? f
              : 0
            : 20;
        return (0, l.jsx)(N.Lh6, {
          pageId: N.Rhz.LABEL_ALBUMS,
          children: (0, l.jsx)(g.I7, {
            scrollElement: I,
            outerTitle: F,
            children: (0, l.jsxs)("div", {
              className: _().root,
              ...(0, u.BA)(u.Br.label.LABEL_ALBUMS_PAGE),
              children: [
                (0, l.jsxs)(h.h4, {
                  variant: h.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: k.canBack,
                  children: [
                    (0, l.jsx)(c.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: F,
                    }),
                    (0, l.jsx)(p.ak, { sortModel: x.sort, onSort: q }),
                  ],
                }),
                (0, l.jsx)(h.Wv, {
                  className: (0, r.W)(_().scrollContainer, _().important),
                  listClassName: _().content,
                  itemClassName: _().item,
                  customComponents: z,
                  itemContentCallback: (e) => {
                    let t = x.items[e],
                      a = D(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: D({ id: "entity-names.album" }) },
                      );
                    return t
                      ? (0, l.jsx)(
                          b.rf,
                          {
                            album: t,
                            contentLinesCount: 4,
                            withAddition: !t.isNonMusic,
                            withLikesCount: t.isNonMusic,
                          },
                          t.id,
                        )
                      : (0, l.jsx)(h.hi, { "aria-label": a, linesCount: 4 });
                  },
                  totalCount: Q,
                  onGetDataByPage: G,
                  pageSize: 20,
                  totalRequests:
                    null !== (v = x.requests) && void 0 !== v ? v : 0,
                  handleRef: w,
                  context: { listAriaLabel: W },
                  isMobileLayout: j,
                  useWindowScroll: j,
                }),
              ],
            }),
          }),
        });
      });
    },
    24877: function (e, t, a) {
      "use strict";
      a.d(t, {
        LabelArtistsPage: function () {
          return _;
        },
      });
      var l = a(75441),
        r = a(32358),
        s = a(62569),
        i = a(98730),
        n = a(65067),
        o = a(9317),
        u = a(35846),
        d = a(93093),
        c = a(17392),
        m = a(30948),
        b = a(55051),
        g = a(69947),
        p = a(13534),
        N = a(97141),
        h = a(29292),
        y = a(75232),
        f = a.n(y);
      let _ = (0, s.Pi)((e) => {
        var t, a, s, y;
        let { labelId: _, preloadedLabel: v, preloadedArtists: L } = e,
          {
            label: {
              id: C,
              name: A,
              type: S,
              artistsSubpage: P,
              reset: E,
              isNeededToLoad: T,
              getData: x,
            },
            settings: { isMobile: B },
            experiments: R,
          } = (0, p.oR4)(),
          { formatMessage: U } = (0, o.Z)(),
          { contentScrollRef: V, setContentScrollRef: j } = (0, p.$Y6)(),
          O = (0, p.k67)(),
          D = U({ id: "page.label-artists-header" }, { labelName: A }),
          I = (0, d.W)((e) => {
            P.getData({ labelId: Number(_), page: e, pageSize: 20 });
          });
        (0, n.useEffect)(
          () => () => {
            E(), P.reset();
          },
          [E, P],
        ),
          (P.isNotFound || !R.checkExperiment(p.peG.WebNextLabelPage, "on")) &&
            (0, i.notFound)(),
          (0, h.I)(
            {
              id: Number(C),
              name: null != A ? A : "",
              type: null != S ? S : "",
            },
            h.b.ARTISTS,
          ),
          (0, p.NOh)(P.isResolved);
        let w = (0, n.useMemo)(
            () => ({
              Footer: () => (0, l.jsx)(N.$_, { className: f().footer }),
            }),
            [],
          ),
          k = U({ id: "entity-names.label-artists-list" }),
          F = [];
        if (
          (P.isNeededToLoad &&
            F.push(
              P.getData({
                labelId: Number(_),
                page: 0,
                pageSize: 20,
                preloadedArtists: L,
              }),
            ),
          T &&
            F.push(
              x({
                labelId: Number(_),
                preloadedLabel: v,
                withLabelEntities: !1,
              }),
            ),
          F.length && (0, n.use)(Promise.allSettled(F)),
          P.isRejected && !P.isNotFound)
        )
          return (0, l.jsx)(m.D, {});
        let G =
          !P.isLoading ||
          (null === (t = P.pager) || void 0 === t ? void 0 : t.total)
            ? null !==
                (s =
                  null == P
                    ? void 0
                    : null === (a = P.pager) || void 0 === a
                      ? void 0
                      : a.total) && void 0 !== s
              ? s
              : 0
            : 20;
        return (0, l.jsx)(p.Lh6, {
          pageId: p.Rhz.LABEL_ARTISTS,
          children: (0, l.jsx)(g.I7, {
            scrollElement: V,
            outerTitle: D,
            children: (0, l.jsxs)("div", {
              className: f().root,
              ...(0, u.BA)(u.Br.label.LABEL_ARTISTS_PAGE),
              children: [
                (0, l.jsx)(N.h4, {
                  variant: N.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: O.canBack,
                  className: f().header,
                  children: (0, l.jsx)(c.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: D,
                  }),
                }),
                (0, l.jsx)(N.Wv, {
                  className: (0, r.W)(f().scrollContainer, f().important),
                  listClassName: f().content,
                  itemClassName: f().item,
                  customComponents: w,
                  itemContentCallback: (e) => {
                    let t = P.items[e],
                      a = U(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: U({ id: "entity-names.artist" }) },
                      );
                    return t
                      ? (0, l.jsx)(
                          b.IT,
                          { artist: t, contentLinesCount: 4 },
                          t.id,
                        )
                      : (0, l.jsx)(N.hi, {
                          "aria-label": a,
                          round: !0,
                          centered: !0,
                          linesCount: 4,
                        });
                  },
                  totalCount: G,
                  onGetDataByPage: I,
                  pageSize: 20,
                  totalRequests:
                    null !== (y = P.requests) && void 0 !== y ? y : 0,
                  handleRef: j,
                  context: { listAriaLabel: k },
                  isMobileLayout: B,
                  useWindowScroll: B,
                }),
              ],
            }),
          }),
        });
      });
    },
    99131: function (e, t, a) {
      "use strict";
      a.d(t, {
        LabelNotFoundPage: function () {
          return s;
        },
      });
      var l = a(75441),
        r = a(35551);
      let s = () => (0, l.jsx)(r.T, {});
    },
    98350: function (e, t, a) {
      "use strict";
      a.d(t, {
        LabelPage: function () {
          return P;
        },
      });
      var l = a(75441),
        r = a(32358),
        s = a(62569),
        i = a(98730),
        n = a(65067),
        o = a(9317),
        u = a(15937),
        d = a(35846),
        c = a(93093),
        m = a(68208),
        b = a(69756),
        g = a(17294),
        p = a(17392),
        N = a(5362),
        h = a(30948),
        y = a(72783),
        f = a(55051),
        _ = a(69947),
        v = a(13534),
        L = a(97141),
        C = a(29292),
        A = a(98562),
        S = a.n(A);
      let P = (0, s.Pi)((e) => {
        var t, a, s;
        let { labelId: A, preloadedLabel: P } = e,
          {
            label: E,
            settings: { isMobile: T },
            experiments: x,
          } = (0, v.oR4)(),
          { formatMessage: B } = (0, o.Z)(),
          { contentScrollRef: R, setContentScrollRef: U } = (0, v.$Y6)(),
          { notify: V } = (0, v.d$W)(),
          { href: j } = (0, v.qKB)(E.url),
          O = (0, n.useRef)(null),
          D = (0, n.useRef)(0);
        (0, C.I)(
          {
            id: Number(E.id),
            name: null !== (a = E.name) && void 0 !== a ? a : "",
            type: null !== (s = E.type) && void 0 !== s ? s : "",
          },
          C.b.ROOT,
        );
        let I = (0, c.W)(async () => {
            await window.navigator.clipboard.writeText(j),
              V(
                (0, l.jsx)(L.Ct, {
                  entityVariant: v.GGO.LABEL,
                  entityTitle: E.name || "",
                }),
                { containerId: v.W$x.INFO },
              );
          }),
          w = (0, n.useMemo)(
            () =>
              T
                ? (0, l.jsx)(m.Button, {
                    className: S().button,
                    onClick: I,
                    icon: (0, l.jsx)(b.Icon, { variant: "share", size: "xxs" }),
                    size: "l",
                    radius: "xxxl",
                    ...(0, d.BA)(d.Br.label.SHARE_COPY_LINK_BUTTON),
                  })
                : (0, l.jsx)(m.Button, {
                    className: S().button,
                    onClick: I,
                    icon: (0, l.jsx)(b.Icon, { variant: "share", size: "xxs" }),
                    size: "l",
                    radius: "xxxl",
                    ...(0, d.BA)(d.Br.label.SHARE_COPY_LINK_BUTTON),
                    children: (0, l.jsx)(u.Z, {
                      id: "interface-actions.share",
                    }),
                  }),
            [T, I],
          ),
          k = E.isPublisher
            ? B({ id: "entity-names.publisher" })
            : B({ id: "entity-names.label" }),
          F = E.isPublisher
            ? B({ id: "entity-names.non-music-releases" })
            : B({ id: "entity-names.releases" });
        return ((0, n.useEffect)(
          () => () => {
            E.reset();
          },
          [E],
        ),
        (E.isNotFound || !x.checkExperiment(v.peG.WebNextLabelPage, "on")) &&
          (0, i.notFound)(),
        (0, n.useEffect)(
          () => () => {
            D.current = 0;
          },
          [E],
        ),
        (0, n.useEffect)(() => {
          E.isRejected &&
            D &&
            !(D.current > 0) &&
            (V(
              (0, l.jsx)(L.Q, {
                error: B({ id: "error-messages.error-load-part-page" }),
              }),
              { containerId: v.W$x.ERROR },
            ),
            D.current++);
        }, [E.isRejected, V, B]),
        (0, v.NOh)(E.isResolved),
        E.isNeededToLoad &&
          (0, n.use)(E.getData({ labelId: Number(A), preloadedLabel: P })),
        E.isRejected && !E.isNotFound)
          ? (0, l.jsx)(h.D, {})
          : (0, l.jsx)(v.Lh6, {
              pageId: v.Rhz.LABEL,
              children: (0, l.jsxs)(_.I7, {
                scrollElement: R,
                children: [
                  (0, l.jsx)(L.h4, { innerHeaderRef: O }),
                  (0, l.jsxs)(g.t, {
                    className: S().root,
                    containerClassName: S().content,
                    ref: U,
                    ...(0, d.BA)(d.Br.label.LABEL_PAGE),
                    children: [
                      (0, l.jsxs)("div", {
                        className: S().header,
                        children: [
                          (0, l.jsx)(p.Caption, {
                            variant: "div",
                            type: "text",
                            size: "m",
                            weight: "medium",
                            children: k,
                          }),
                          (0, l.jsx)(N.BV, {
                            className: S().title,
                            title: E.name || "",
                            headingVariant: "h1",
                          }),
                          w,
                        ],
                      }),
                      E.hasAlbums &&
                        E.albums &&
                        (0, l.jsx)(y.wk, {
                          isShimmerVisible: E.isLoading,
                          isShimmerActive: !0,
                          className: S().carouselContainer,
                          headerClassName: (0, r.W)(
                            S().carouselBlock,
                            S().carouselBlockHeader,
                          ),
                          containerClassName: S().carouselBlock,
                          title: F,
                          viewAllActionLink: E.albumsUrl,
                          albums: E.albums,
                          headingVariant: "h2",
                          ...(0, d.BA)(d.Br.label.RELEASES_CAROUSEL),
                        }),
                      E.hasArtists &&
                        (0, l.jsx)(L.HY, {
                          isShimmerVisible: E.isLoading,
                          isShimmerActive: !0,
                          headerClassName: (0, r.W)(
                            S().carouselBlockHeader,
                            S().carouselBlock,
                          ),
                          containerClassName: S().carouselBlock,
                          viewAllActionLink: E.artistsUrl,
                          title: B({ id: "entity-names.artists" }),
                          headingVariant: "h2",
                          ...(0, d.BA)(d.Br.label.ARTISTS_CAROUSEL),
                          children:
                            null === (t = E.artists) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                  (0, l.jsx)(
                                    f.IT,
                                    { artist: e, contentLinesCount: 3 },
                                    e.id,
                                  ),
                                ),
                        }),
                      (0, l.jsx)(L.$_, { className: S().footer }),
                    ],
                  }),
                ],
              }),
            });
      });
    },
    68521: function (e) {
      e.exports = {
        root: "LabelAlbumsPage_root__xyWi4",
        scrollContainer: "LabelAlbumsPage_scrollContainer__zRUlM",
        important: "LabelAlbumsPage_important__s18oL",
        footer: "LabelAlbumsPage_footer__dcXFk",
        item: "LabelAlbumsPage_item__Qjz9F",
        content: "LabelAlbumsPage_content__jOWKZ",
      };
    },
    75232: function (e) {
      e.exports = {
        root: "LabelArtistsPage_root__smTJJ",
        scrollContainer: "LabelArtistsPage_scrollContainer__alDjs",
        important: "LabelArtistsPage_important__pOZpi",
        footer: "LabelArtistsPage_footer__JU2P3",
        item: "LabelArtistsPage_item__kol2m",
        content: "LabelArtistsPage_content__4hjcX",
      };
    },
    98562: function (e) {
      e.exports = {
        root: "LabelPage_root__jquyP",
        content: "LabelPage_content__9st_X",
        header: "LabelPage_header__G2xY_",
        title: "LabelPage_title__BNxeX",
        button: "LabelPage_button__JXw3C",
        carouselBlock: "LabelPage_carouselBlock__zPJmW",
        carouselBlockHeader: "LabelPage_carouselBlockHeader__dvYqJ",
        carouselContainer: "LabelPage_carouselContainer__bRVMp",
        footer: "LabelPage_footer__lvKmF",
      };
    },
  },
]);
