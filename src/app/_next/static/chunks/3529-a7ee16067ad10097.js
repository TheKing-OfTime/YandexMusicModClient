(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3529],
  {
    63529: function (e, t, i) {
      "use strict";
      i.d(t, {
        MusicHistoryPage: function () {
          return j;
        },
      });
      var a = i(75441),
        r = i(32358),
        s = i(62569),
        n = i(65067),
        o = i(15937),
        l = i(35846),
        c = i(17294),
        d = i(24226),
        u = i(17392),
        m = i(55681),
        v = i(30948),
        h = i(13534),
        x = i(97141),
        y = i(20184);
      let p = (e) => {
          let { children: t } = e,
            i = (0, n.useRef)({}),
            r = (0, n.useMemo)(
              () =>
                (0, y.wE)((e) => {
                  var t, a;
                  let r = (0, y.SG)(e.target),
                    s = i.current[r];
                  e.isIntersecting
                    ? null == s ||
                      null === (t = s.onShow) ||
                      void 0 === t ||
                      t.call(s)
                    : null == s ||
                      null === (a = s.onHide) ||
                      void 0 === a ||
                      a.call(s);
                }),
              [],
            );
          (0, n.useEffect)(
            () => () => (null == r ? void 0 : r.disconnect()),
            [r],
          );
          let s = (0, n.useCallback)(
              (e) => {
                !i.current[e.elementId] &&
                  e.elementRef.current &&
                  (null == r || r.observe(e.elementRef.current),
                  (i.current[e.elementId] = e));
              },
              [r],
            ),
            o = (0, n.useCallback)(
              (e) => {
                let t = i.current[e];
                t &&
                  t.elementRef.current &&
                  (null == r || r.unobserve(t.elementRef.current));
              },
              [r],
            ),
            l = (0, n.useMemo)(
              () => ({ observeElement: s, unobserveElement: o }),
              [s, o],
            );
          return (0, a.jsx)(m.ee.Provider, { value: l, children: t });
        },
        b = async (e, t) =>
          new Promise((i) => {
            if ("onscrollend" in window) {
              var a;
              let r = () => {
                var e;
                i(),
                  null === (e = t.current) ||
                    void 0 === e ||
                    e.removeEventListener("scrollend", r);
              };
              null === (a = t.current) ||
                void 0 === a ||
                a.addEventListener("scrollend", r),
                e.scrollIntoView({ behavior: "smooth" });
            } else
              e.scrollIntoView({ behavior: "smooth" }),
                window.setTimeout(i, 1e3);
          });
      var S = i(18789),
        k = i.n(S),
        _ = i(28676),
        f = i(4787),
        g = i.n(f);
      let I = (e) => {
          let { isActive: t } = e,
            i = (0, a.jsxs)("div", {
              className: g().trackListShimmers,
              children: [
                (0, a.jsx)(x.DX, { isActive: t, variant: h.Lxt.PLAYLIST }),
                (0, a.jsx)(x.DX, { isActive: t, variant: h.Lxt.PLAYLIST }),
                (0, a.jsx)(x.DX, { isActive: t, variant: h.Lxt.PLAYLIST }),
              ],
            });
          return (0, a.jsxs)("div", {
            className: g().shimmersContainer,
            children: [
              (0, a.jsx)(_.Shimmer, {
                isActive: t,
                className: g().dateShimmer,
              }),
              (0, a.jsx)(_.Shimmer, {
                isActive: t,
                className: g().contextNameShimmer,
              }),
              (0, a.jsx)(x.XM, {
                withDescription: !0,
                className: g().contextHeaderShimmer,
              }),
              i,
              (0, a.jsx)(_.Shimmer, {
                isActive: t,
                className: g().contextNameShimmer,
              }),
              (0, a.jsx)(x.XM, {
                coverRadius: "round",
                className: g().contextHeaderShimmer,
              }),
              i,
            ],
          });
        },
        j = (0, s.Pi)(() => {
          let [e, t] = (0, n.useState)(!1),
            { musicHistory: i } = (0, h.oR4)(),
            { contentScrollRef: s, setContentScrollRef: y } = (0, h.$Y6)(),
            S = (0, d.useTabsState)(0),
            _ = (0, n.useRef)(!1),
            f = (0, n.useRef)(null),
            g = (0, n.useCallback)(
              async (e) => {
                var a;
                t(!0);
                let r = i.dates[e];
                if (!r) return;
                null === (a = S.onTabChange) || void 0 === a || a.call(S, e),
                  (_.current = !0);
                let n = document.querySelector(
                  '[data-date-anchor="'.concat(r, '"]'),
                );
                n && ((f.current = s), await b(n, f)), (_.current = !1);
              },
              [i.dates, S, s],
            ),
            j = (0, n.useCallback)(() => {
              if (_.current) return;
              let e = i.dates.findIndex((e) => i.datesMap.get(e));
              if (e >= 0) {
                var t;
                null === (t = S.onTabChange) || void 0 === t || t.call(S, e);
              }
            }, [i.dates, i.datesMap, S]);
          (0, n.useEffect)(() => () => i.reset(), [i]),
            (0, h.NOh)(i.isResolved);
          let M = (0, n.useMemo)(() => {
              var t;
              return i.isRejected
                ? (0, a.jsx)(v.D, {
                    className: (0, r.W)(k().error, k().important),
                    withBackwardControl: !1,
                  })
                : i.isShimmerVisible
                  ? (0, a.jsx)(I, { isActive: i.isShimmerActive })
                  : i.isEmpty
                    ? (0, a.jsx)("div", {
                        className: k().empty,
                        children: (0, a.jsx)(u.Caption, {
                          variant: "div",
                          size: "m",
                          weight: "normal",
                          children: (0, a.jsx)(o.Z, {
                            id: "music-history.empty-title",
                          }),
                        }),
                      })
                    : null === (t = i.tabs) || void 0 === t
                      ? void 0
                      : t.map((t, i) =>
                          (0, a.jsx)(
                            m.Wb,
                            {
                              onTabShowOrHide: j,
                              "data-intersection-property-id": t.date,
                              tab: t,
                              tabIndex: i,
                              shouldHideInactiveTab: e,
                            },
                            i,
                          ),
                        );
            }, [
              j,
              i.isEmpty,
              i.isRejected,
              i.isShimmerActive,
              i.isShimmerVisible,
              i.tabs,
              e,
            ]),
            A = (0, m.e8)(),
            E = (0, n.useMemo)(
              () =>
                (0, a.jsx)(x.no, {
                  isShimmerVisible: i.isShimmerVisible,
                  className: k().tabs,
                  ...S,
                  onTabChange: g,
                  shimmer: (0, a.jsx)(x.tS, {
                    className: k().tabs,
                    shimmerClassName: (0, r.W)(k().tab, {
                      [k().tab_isLoading]: i.isShimmerVisible,
                    }),
                    count: 5,
                  }),
                  children: i.dates.map((e, t) =>
                    (0, a.jsx)(
                      x.OK,
                      {
                        className: (0, r.W)(k().tab, {
                          [k().tab_selected]: t === S.value,
                        }),
                        titleClassName: k().date,
                        "aria-label": A(e, !1),
                        title: A(e, !1),
                        value: t,
                      },
                      t,
                    ),
                  ),
                }),
              [A, g, i.dates, i.isShimmerVisible, S],
            );
          return (
            i.isNeededToLoad && (0, n.use)(i.getMusicHistory()),
            (0, a.jsx)(h.Lh6, {
              pageId: h.Rhz.HISTORY,
              children: (0, a.jsxs)("div", {
                className: k().root,
                ...(0, l.BA)(l.Br.musicHistory.MUSIC_HISTORY_PAGE),
                children: [
                  (0, a.jsxs)("div", {
                    className: k().headerContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: k().header,
                        children: [
                          (0, a.jsx)(x.nP, { withForwardControl: !1 }),
                          (0, a.jsx)(u.Heading, {
                            variant: "h1",
                            weight: "bold",
                            size: "xl",
                            lineClamp: 1,
                            children: (0, a.jsx)(o.Z, {
                              id: "music-history.title",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(x.J3, {
                        className: k().carousel,
                        carouselElement: E,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(c.t, {
                    ref: y,
                    className: k().scroll,
                    containerClassName: k().scrollContainer,
                    children: [
                      (0, a.jsx)(p, {
                        children: (0, a.jsx)("div", {
                          className: k().content,
                          children: M,
                        }),
                      }),
                      (0, a.jsx)(x.$_, { className: k().footer }),
                    ],
                  }),
                ],
              }),
            })
          );
        });
    },
    55681: function (e, t, i) {
      "use strict";
      i.d(t, {
        ee: function () {
          return I.MusicHistoryIntersectionObserverContext;
        },
        Mf: function () {
          return W;
        },
        Wb: function () {
          return B.MusicHistoryTab;
        },
        t9: function () {
          return U;
        },
        un: function () {
          return a;
        },
        H5: function () {
          return r;
        },
        aQ: function () {
          return s;
        },
        LV: function () {
          return n;
        },
        R3: function () {
          return o;
        },
        Ql: function () {
          return j;
        },
        DF: function () {
          return M;
        },
        v3: function () {
          return A;
        },
        eE: function () {
          return E;
        },
        OE: function () {
          return g;
        },
        e8: function () {
          return C.useFormatDate;
        },
      });
      let a = (e) => e.data.itemId.id,
        r = (e) => e.data.itemId.id,
        s = (e) => {
          let { uid: t, kind: i } = e.data.itemId;
          return "".concat(t, ":").concat(i);
        },
        n = (e) => {
          let { albumId: t, trackId: i } = e.data.itemId;
          return t ? "".concat(i, ":").concat(t) : i;
        },
        o = (e) => e.data.itemId.seeds.sort().join(",");
      var l = i(22874),
        c = i(20188),
        d = i(72783),
        u = i(13534),
        m = i(1150);
      let v = (e) => {
          if ("fullModel" in e.data) {
            let { fullModel: t } = e.data;
            return (0, l.pj)({
              type: c.E.TRACK,
              id: n(e),
              loadingState: u.Gui.RESOLVE,
              data: (0, m.Vt)(t),
            });
          }
          return (0, l.pj)({
            type: c.E.TRACK,
            id: n(e),
            data: null,
            loadingState: u.Gui.IDLE,
          });
        },
        h = (e, t) => {
          let { data: i } = e;
          if ("fullModel" in i) {
            let { fullModel: r } = i;
            return (0, l.pj)({
              type: c.E.ALBUM,
              available: r.available,
              id: a(e),
              meta: (0, d.cO)({ album: r.album, artists: r.artists }),
              loadingState: u.Gui.RESOLVE,
              tracks: t.map(v),
            });
          }
          return (0, l.pj)({
            type: c.E.ALBUM,
            available: !0,
            id: a(e),
            meta: null,
            loadingState: u.Gui.IDLE,
            tracks: t.map(v),
          });
        };
      var x = i(64353);
      let y = (e, t) => {
        let { data: i, type: a } = e;
        if ("fullModel" in i) {
          let { fullModel: s } = i;
          return (0, l.pj)({
            type: a,
            available: s.available,
            id: r(e),
            meta: (0, x.tR)({ artist: s.artist }),
            loadingState: u.Gui.RESOLVE,
            tracks: t.map(v),
          });
        }
        return (0, l.pj)({
          type: a,
          available: !0,
          id: r(e),
          meta: null,
          loadingState: u.Gui.IDLE,
          tracks: t.map(v),
        });
      };
      var p = i(77282);
      let b = (e, t) => {
        let { type: i } = e;
        return (0, l.pj)({ type: i, id: (0, p.Z)(), tracks: t.map(v) });
      };
      var S = i(7797);
      let k = (e, t) => {
        let { data: i, type: a } = e;
        if ("fullModel" in i) {
          let { fullModel: r } = i;
          return (0, l.pj)({
            type: a,
            id: s(e),
            meta: {
              ...(0, S.RE)({ playlist: r.playlist }),
              tracksCount: r.tracksCount,
            },
            loadingState: u.Gui.RESOLVE,
            tracks: t.map(v),
          });
        }
        return (0, l.pj)({
          type: c.E.PLAYLIST,
          id: s(e),
          meta: null,
          loadingState: u.Gui.IDLE,
          tracks: t.map(v),
        });
      };
      var _ = i(9152);
      let f = (e, t) => {
          let { data: i, type: a } = e;
          if ("fullModel" in i) {
            let { fullModel: r } = i;
            return (0, l.pj)({
              type: a,
              id: o(e),
              meta: {
                ...(0, _.FF)(r.wave),
                imageUrl: r.simpleWaveForegroundImageUrl,
                backgroundColor: r.simpleWaveBackgroundColor,
              },
              loadingState: u.Gui.RESOLVE,
              tracks: t.map(v),
            });
          }
          return (0, l.pj)({
            type: a,
            id: o(e),
            meta: null,
            loadingState: u.Gui.IDLE,
            tracks: t.map(v),
          });
        },
        g = (e) => {
          var t, i;
          let a =
            null === (t = e.items) || void 0 === t
              ? void 0
              : t
                  .map((e) => {
                    switch (e.context.type) {
                      case c.E.ALBUM:
                        return h(e.context, e.tracks);
                      case c.E.PLAYLIST:
                        return k(e.context, e.tracks);
                      case c.E.ARTIST:
                        return y(e.context, e.tracks);
                      case c.E.WAVE:
                        return f(e.context, e.tracks);
                      case c.E.SEARCH:
                      case c.E.OTHER:
                        return b(e.context, e.tracks);
                      default:
                        return null;
                    }
                  })
                  .filter((e) => e);
          return {
            date: e.date,
            blocks: null !== (i = (0, l.pj)(a)) && void 0 !== i ? i : null,
          };
        };
      var I = i(57528);
      let j = (e) => (null == e ? void 0 : e.type) === c.E.ALBUM,
        M = (e) => (null == e ? void 0 : e.type) === c.E.ARTIST,
        A = (e) => (null == e ? void 0 : e.type) === c.E.PLAYLIST,
        E = (e) => (null == e ? void 0 : e.type) === c.E.WAVE;
      var C = i(33032),
        H = i(40892),
        V = i(98375);
      let N = (e) => ({ type: V.RX.Unloaded, meta: { id: e.entityId } }),
        L = l.V5.compose(
          l.V5.model("MusicHistoryTrack", {
            type: l.V5.literal(c.E.TRACK),
            id: l.V5.string,
            data: l.V5.maybeNull(m.le),
          }),
          H.fu,
        )
          .views((e) => ({
            get key() {
              return "".concat(e.type, "_").concat(e.id);
            },
            get isShimmerVisible() {
              return e.isNeededToLoad || e.isLoading || e.isRejected;
            },
            get isShimmerActive() {
              return e.isLoading;
            },
            get entityId() {
              var t;
              if (!e.data) return e.id;
              let { id: i, albums: a } = e.data,
                r = null === (t = a[0]) || void 0 === t ? void 0 : t.id;
              return r ? "".concat(i, ":").concat(r) : i;
            },
          }))
          .named("MusicHistoryPlaylist"),
        w = l.V5.compose(
          l.V5.model("MusicHistoryBaseBlock", {
            id: l.V5.string,
            tracks: l.V5.array(L),
          }),
          H.fu,
        ).views((e) => ({
          get isShimmerVisible() {
            return e.isNeededToLoad || e.isLoading || e.isRejected;
          },
          get isShimmerActive() {
            return e.isLoading;
          },
          get contextId() {
            return e.id;
          },
          get entitiesData() {
            return e.tracks.map(N);
          },
        })),
        R = w
          .props({
            type: l.V5.literal(c.E.ALBUM),
            available: l.V5.boolean,
            meta: l.V5.maybeNull(d.ug),
          })
          .views((e) => ({
            get key() {
              return "".concat(e.type, "_").concat(e.id);
            },
            get autoflowSeeds() {
              var t;
              return [
                "album:".concat(
                  null === (t = e.meta) || void 0 === t ? void 0 : t.id,
                ),
              ];
            },
          }))
          .named("MusicHistoryAlbum"),
        T = w
          .props({
            type: l.V5.literal(c.E.ARTIST),
            available: l.V5.boolean,
            meta: l.V5.maybeNull(x.Go),
          })
          .views((e) => ({
            get key() {
              return "".concat(e.type, "_").concat(e.id);
            },
            get autoflowSeeds() {
              var t;
              return [
                "artist:".concat(
                  null === (t = e.meta) || void 0 === t ? void 0 : t.id,
                ),
              ];
            },
          }))
          .named("MusicHistoryArtist"),
        P = l.V5.model("MusicHistoryCommon", {
          id: l.V5.string,
          type: l.V5.union(l.V5.literal(c.E.OTHER), l.V5.literal(c.E.SEARCH)),
          tracks: l.V5.array(L),
        }).views((e) => ({
          get key() {
            return "".concat(e.type, "_").concat(e.id);
          },
          get contextId() {
            return e.tracks.map((e) => e.id).join(",");
          },
          get entitiesData() {
            return e.tracks.map(N);
          },
        })),
        D = w
          .props({
            type: l.V5.literal(c.E.PLAYLIST),
            meta: l.V5.maybeNull(S.d2),
          })
          .views((e) => ({
            get key() {
              return "".concat(e.type, "_").concat(e.id);
            },
            get autoflowSeeds() {
              var t, i;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.meta) || void 0 === t ? void 0 : t.uid,
                    "_",
                  )
                  .concat(
                    null === (i = e.meta) || void 0 === i ? void 0 : i.kind,
                  ),
              ];
            },
          }))
          .named("MusicHistoryPlaylist"),
        O = w
          .props({
            id: l.V5.string,
            type: l.V5.literal(c.E.WAVE),
            meta: l.V5.maybeNull(_.KW),
          })
          .views((e) => ({
            get key() {
              return "".concat(e.type, "_").concat(e.id);
            },
            get contextId() {
              var t, i;
              return null !==
                (i =
                  null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.stationId) && void 0 !== i
                ? i
                : u.sHr;
            },
            get autoflowSeeds() {
              var a;
              return null === (a = e.meta) || void 0 === a ? void 0 : a.seeds;
            },
          })),
        G = l.V5.union(R, T, D, O, P),
        W = l.V5.compose(
          l.V5.model({
            id: l.V5.string,
            type: l.V5.enumeration(Object.values(c.E)),
            tabIndex: l.V5.number,
            blockIndex: l.V5.number,
            trackIndex: l.V5.maybeNull(l.V5.number),
          }),
          H.fu,
        ),
        U = l.V5.model("MusicHistoryTab", {
          date: l.V5.string,
          blocks: l.V5.maybeNull(l.V5.array(G)),
        });
      var B = i(62178);
    },
    57528: function (e, t, i) {
      "use strict";
      i.d(t, {
        MusicHistoryIntersectionObserverContext: function () {
          return a;
        },
      });
      let a = (0, i(65067).createContext)({
        observeElement: () => {},
        unobserveElement: () => {},
      });
    },
    33032: function (e, t, i) {
      "use strict";
      i.d(t, {
        useFormatDate: function () {
          return s;
        },
      });
      var a = i(65067),
        r = i(9317);
      let s = () => {
        let { formatDate: e, formatRelativeTime: t } = (0, r.Z)();
        return (0, a.useCallback)(
          function (i) {
            let a =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              r = new Date(i),
              s = new Date();
            r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0);
            let n = (r.getTime() - s.getTime()) / 864e5,
              o = t(n, "day", { numeric: "auto" }),
              l = e(i, { day: "numeric", month: "long" });
            switch (n) {
              case 0:
              case -1:
              case -2:
                if (a) return "".concat(o, ", ").concat(l);
                return o;
              default:
                return l;
            }
          },
          [e, t],
        );
      };
    },
    62178: function (e, t, i) {
      "use strict";
      i.d(t, {
        MusicHistoryTab: function () {
          return L;
        },
      });
      var a = i(75441),
        r = i(62569),
        s = i(65067),
        n = i(20188),
        o = i(17392),
        l = i(13534),
        c = i(57528),
        d = i(33032),
        u = i(32358),
        m = i(15937),
        v = i(43398),
        h = i(84638),
        x = i(64353),
        y = i(97141);
      let p = (e) => {
          let {
              contextId: t,
              entitiesData: i,
              entityId: a,
              from: r,
              isTrackAutoflow: s,
              overrideAutoflowSeeds: n,
              overrideContextType: o,
              trackIndex: l,
            } = e,
            c = { type: h.A.Various, meta: { id: s ? a : t }, from: r };
          s || ((c.overrideContextType = o), (c.overrideAutoflowSeeds = n));
          let d = {
            contextData: c,
            queueParams: { index: s ? 0 : l },
            loadContextMeta: s,
          };
          return s || (d.entitiesData = i), d;
        },
        b = (e) => {
          let { id: t, tabIndex: i, blockIndex: a, trackIndex: r } = e,
            { musicHistory: n } = (0, l.oR4)(),
            o = (0, s.useId)(),
            d = (0, s.useRef)(null),
            { observeElement: u, unobserveElement: m } = (0, s.useContext)(
              c.MusicHistoryIntersectionObserverContext,
            );
          return (
            (0, s.useEffect)(() => {
              let e =
                  void 0 !== r
                    ? "".concat(i, "_").concat(a, "_").concat(r, "_").concat(t)
                    : "".concat(i, "_").concat(a, "_").concat(t),
                s = n.indexesMap.get(e);
              n.isInObservationRange(s) &&
                u({
                  elementRef: d,
                  elementId: o,
                  index: s,
                  onShow() {
                    n.getItems(this.index), m(o);
                  },
                });
            }, [a, t, o, n, u, i, r, m]),
            { intersectionPropertyId: o, ref: d }
          );
        };
      var S = i(1150),
        k = i(80970),
        _ = i.n(k);
      let f = (0, r.Pi)((e) => {
        let {
            type: t,
            track: i,
            artists: r,
            tabIndex: s,
            blockIndex: n,
            trackIndex: o,
            playContextParams: c,
          } = e,
          { ref: d, intersectionPropertyId: u } = b({
            id: i.id,
            tabIndex: s,
            blockIndex: n,
            trackIndex: o,
          });
        return i.isShimmerVisible || !i.data
          ? (0, a.jsx)("div", {
              "data-intersection-property-id": u,
              ref: d,
              children: (0, a.jsx)(y.DX, {
                isActive: i.isShimmerActive,
                "data-intersection-property-id": u,
                className: _().trackShimmer,
                variant: t === h.A.Album ? l.Lxt.ALBUM : l.Lxt.PLAYLIST,
              }),
            })
          : t === h.A.Album
            ? (0, a.jsx)(S.RJ, {
                track: i.data,
                position: i.data.index,
                albumArtists: r,
                playContextParams: c,
              })
            : (0, a.jsx)(S.O2, { track: i.data, playContextParams: c });
      });
      var g = i(8080),
        I = i.n(g);
      let j = (0, r.Pi)((e) => {
          var t, i, r, n;
          let { album: c, tabIndex: d, blockIndex: S } = e,
            { experiments: k } = (0, l.oR4)(),
            _ = k.checkExperiment(l.peG.WebNextMusicHistoryAutoflow, "on"),
            { ref: g, intersectionPropertyId: j } = b({
              id: c.id,
              tabIndex: d,
              blockIndex: S,
            }),
            { from: M } = (0, l.MhG)({ blockId: "album-".concat(c.id) }),
            A = (0, s.useMemo)(() => {
              var e, t;
              return c.available
                ? (0, a.jsx)(x.jO, {
                    className: I().artists,
                    linkClassName: I().artistLink,
                    artists:
                      null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.artists,
                    lineClamp: 1,
                  })
                : null === (t = c.meta) || void 0 === t
                  ? void 0
                  : t.artistNames;
            }, [
              c.available,
              null === (t = c.meta) || void 0 === t ? void 0 : t.artistNames,
              null === (i = c.meta) || void 0 === i ? void 0 : i.artists,
            ]),
            E = (0, s.useMemo)(() => {
              var e, t;
              return c.isShimmerVisible
                ? (0, a.jsx)(y.XM, {
                    isActive: c.isShimmerActive,
                    className: I().header,
                    withDescription: !0,
                  })
                : (0, a.jsx)(y.ti, {
                    className: I().header,
                    coverUrl:
                      null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.coverUri,
                    title:
                      null === (t = c.meta) || void 0 === t ? void 0 : t.title,
                    titleSize: "xs",
                    titleLineClamp: 1,
                    description: A,
                    titleClassName: I().headerTitle,
                    viewAllActionLink: "/album/".concat(c.id),
                    available: c.available,
                    fallbackIconVariant: "album",
                    withCover: !0,
                    headingVariant: "h4",
                  });
            }, [
              c.available,
              c.id,
              c.isShimmerActive,
              c.isShimmerVisible,
              null === (r = c.meta) || void 0 === r ? void 0 : r.coverUri,
              null === (n = c.meta) || void 0 === n ? void 0 : n.title,
              A,
            ]),
            C = (0, s.useMemo)(
              () =>
                c.tracks.map((e, t) => {
                  var i;
                  let r = p({
                    contextId: c.contextId,
                    entitiesData: c.entitiesData,
                    entityId: e.entityId,
                    from: M,
                    isTrackAutoflow: _,
                    overrideAutoflowSeeds: c.autoflowSeeds,
                    overrideContextType: v.Z.Album,
                    trackIndex: t,
                  });
                  return (0, a.jsx)(
                    f,
                    {
                      type: h.A.Album,
                      track: e,
                      playContextParams: r,
                      tabIndex: d,
                      blockIndex: S,
                      trackIndex: t,
                    },
                    null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.getKey(t),
                  );
                }),
              [
                c.tracks,
                c.contextId,
                c.autoflowSeeds,
                c.entitiesData,
                _,
                M,
                d,
                S,
              ],
            );
          return (0, a.jsxs)("section", {
            className: I().root,
            ref: g,
            "data-intersection-property-id": j,
            children: [
              (0, a.jsx)(o.Heading, {
                className: (0, u.W)(I().header, I().heading),
                variant: "h3",
                children: (0, a.jsx)(m.Z, { id: "music-history.album" }),
              }),
              E,
              (0, a.jsx)("div", { className: I().content, children: C }),
            ],
          });
        }),
        M = (0, r.Pi)((e) => {
          var t, i;
          let { artist: r, tabIndex: n, blockIndex: c } = e,
            { experiments: d } = (0, l.oR4)(),
            x = d.checkExperiment(l.peG.WebNextMusicHistoryAutoflow, "on"),
            { ref: S, intersectionPropertyId: k } = b({
              id: r.id,
              tabIndex: n,
              blockIndex: c,
            }),
            { from: _ } = (0, l.MhG)({ blockId: "artist-".concat(r.id) }),
            g = (0, s.useMemo)(() => {
              var e, t;
              return r.isShimmerVisible
                ? (0, a.jsx)(y.XM, {
                    isActive: r.isShimmerActive,
                    className: I().header,
                    coverRadius: "round",
                  })
                : (0, a.jsx)(y.ti, {
                    titleSize: "xs",
                    titleLineClamp: 1,
                    className: I().header,
                    coverUrl:
                      null === (e = r.meta) || void 0 === e
                        ? void 0
                        : e.coverUri,
                    title:
                      null === (t = r.meta) || void 0 === t ? void 0 : t.name,
                    titleClassName: I().headerTitle,
                    viewAllActionLink: "/artist/".concat(r.id),
                    available: r.available,
                    withCover: !0,
                    coverRadius: "round",
                    headingVariant: "h4",
                  });
            }, [
              r.available,
              r.id,
              r.isShimmerActive,
              r.isShimmerVisible,
              null === (t = r.meta) || void 0 === t ? void 0 : t.coverUri,
              null === (i = r.meta) || void 0 === i ? void 0 : i.name,
            ]),
            j = (0, s.useMemo)(
              () =>
                r.tracks.map((e, t) => {
                  var i;
                  let s = p({
                    contextId: r.contextId,
                    entitiesData: r.entitiesData,
                    entityId: e.entityId,
                    from: _,
                    isTrackAutoflow: x,
                    overrideAutoflowSeeds: r.autoflowSeeds,
                    overrideContextType: v.Z.Artist,
                    trackIndex: t,
                  });
                  return (0, a.jsx)(
                    f,
                    {
                      type: h.A.Artist,
                      track: e,
                      playContextParams: s,
                      tabIndex: n,
                      blockIndex: c,
                      trackIndex: t,
                    },
                    null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.getKey(t),
                  );
                }),
              [
                r.tracks,
                r.autoflowSeeds,
                r.contextId,
                r.entitiesData,
                x,
                _,
                n,
                c,
              ],
            );
          return (0, a.jsxs)("section", {
            className: I().root,
            ref: S,
            "data-intersection-property-id": k,
            children: [
              (0, a.jsx)(o.Heading, {
                className: (0, u.W)(I().header, I().heading),
                variant: "h3",
                children: (0, a.jsx)(m.Z, { id: "music-history.artist" }),
              }),
              g,
              (0, a.jsx)("div", { className: I().content, children: j }),
            ],
          });
        }),
        A = (0, r.Pi)((e) => {
          let { common: t, tabIndex: i, blockIndex: r } = e,
            { experiments: c } = (0, l.oR4)(),
            d = c.checkExperiment(l.peG.WebNextMusicHistoryAutoflow, "on"),
            { ref: x, intersectionPropertyId: y } = b({
              id: t.id,
              tabIndex: i,
              blockIndex: r,
            }),
            { from: S } = (0, l.MhG)(),
            k = (0, s.useMemo)(
              () =>
                t.tracks.map((e, s) => {
                  var o;
                  let l = t.type === n.E.SEARCH ? v.Z.Search : v.Z.Other,
                    c = p({
                      contextId: t.contextId,
                      entitiesData: t.entitiesData,
                      entityId: e.entityId,
                      from: S,
                      isTrackAutoflow: d,
                      overrideContextType: l,
                      trackIndex: s,
                    });
                  return (0, a.jsx)(
                    f,
                    {
                      playContextParams: c,
                      type: h.A.Various,
                      track: e,
                      tabIndex: i,
                      blockIndex: r,
                      trackIndex: s,
                    },
                    null === (o = e.data) || void 0 === o
                      ? void 0
                      : o.getKey(s),
                  );
                }),
              [t.tracks, t.type, t.contextId, t.entitiesData, d, S, i, r],
            ),
            _ = (0, s.useMemo)(() => {
              switch (t.type) {
                case n.E.OTHER:
                  return (0, a.jsx)(m.Z, { id: "music-history.shuffle" });
                case n.E.SEARCH:
                  return (0, a.jsx)(m.Z, { id: "music-history.search" });
              }
            }, [t.type]);
          return (0, a.jsxs)("section", {
            className: I().root,
            ref: x,
            "data-intersection-property-id": y,
            children: [
              (0, a.jsx)(o.Heading, {
                className: (0, u.W)(I().header, I().heading),
                variant: "h3",
                children: _,
              }),
              (0, a.jsx)("div", { className: I().content, children: k }),
            ],
          });
        });
      var E = i(9317);
      let C = (0, r.Pi)((e) => {
          var t, i, r, n, c;
          let { playlist: d, tabIndex: x, blockIndex: S } = e,
            { experiments: k } = (0, l.oR4)(),
            _ = k.checkExperiment(l.peG.WebNextMusicHistoryAutoflow, "on"),
            { ref: g, intersectionPropertyId: j } = b({
              id: d.id,
              tabIndex: x,
              blockIndex: S,
            }),
            { from: M } = (0, l.MhG)({
              blockId: d.isResolved
                ? "playlist-".concat(
                    null === (t = d.meta) || void 0 === t ? void 0 : t.id,
                  )
                : "",
            }),
            { formatMessage: A } = (0, E.Z)(),
            C = (0, s.useMemo)(() => {
              var e, t, i, r;
              return d.isShimmerVisible
                ? (0, a.jsx)(y.XM, {
                    isActive: d.isShimmerActive,
                    className: I().header,
                    withDescription: !0,
                  })
                : (0, a.jsx)(y.ti, {
                    className: I().header,
                    titleSize: "xs",
                    titleLineClamp: 1,
                    coverUrl:
                      null === (e = d.meta) || void 0 === e
                        ? void 0
                        : e.coverUri,
                    title:
                      null === (t = d.meta) || void 0 === t ? void 0 : t.title,
                    titleClassName: I().headerTitle,
                    description: A(
                      { id: "entity-names.number-of-tracks" },
                      {
                        counter:
                          null === (i = d.meta) || void 0 === i
                            ? void 0
                            : i.tracksCount,
                      },
                    ),
                    fallbackIconVariant: "playlist",
                    withCover: !0,
                    viewAllActionLink: "/playlists/".concat(
                      null === (r = d.meta) || void 0 === r ? void 0 : r.uuid,
                    ),
                    headingVariant: "h4",
                    withDescription: !0,
                  });
            }, [
              A,
              d.isShimmerActive,
              d.isShimmerVisible,
              null === (i = d.meta) || void 0 === i ? void 0 : i.coverUri,
              null === (r = d.meta) || void 0 === r ? void 0 : r.title,
              null === (n = d.meta) || void 0 === n ? void 0 : n.tracksCount,
              null === (c = d.meta) || void 0 === c ? void 0 : c.uuid,
            ]),
            H = (0, s.useMemo)(
              () =>
                d.tracks.map((e, t) => {
                  var i;
                  let r = p({
                    contextId: d.contextId,
                    entitiesData: d.entitiesData,
                    entityId: e.entityId,
                    from: M,
                    isTrackAutoflow: _,
                    overrideAutoflowSeeds: d.autoflowSeeds,
                    overrideContextType: v.Z.Playlist,
                    trackIndex: t,
                  });
                  return (0, a.jsx)(
                    f,
                    {
                      playContextParams: r,
                      type: h.A.Playlist,
                      track: e,
                      tabIndex: x,
                      blockIndex: S,
                      trackIndex: t,
                    },
                    null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.getKey(t),
                  );
                }),
              [
                d.tracks,
                d.contextId,
                d.autoflowSeeds,
                d.entitiesData,
                _,
                M,
                x,
                S,
              ],
            );
          return (0, a.jsxs)("section", {
            className: I().root,
            ref: g,
            "data-intersection-property-id": j,
            children: [
              (0, a.jsx)(o.Heading, {
                className: (0, u.W)(I().header, I().heading),
                variant: "h3",
                children: (0, a.jsx)(m.Z, { id: "music-history.playlist" }),
              }),
              C,
              (0, a.jsx)("div", { className: I().content, children: H }),
            ],
          });
        }),
        H = (0, r.Pi)((e) => {
          var t, i, r, n;
          let { vibe: c, blockIndex: d, tabIndex: x } = e,
            { experiments: S } = (0, l.oR4)(),
            k = S.checkExperiment(l.peG.WebNextMusicHistoryAutoflow, "on"),
            { ref: _, intersectionPropertyId: g } = b({
              id: c.id,
              blockIndex: d,
              tabIndex: x,
            }),
            { from: j } = (0, l.MhG)({ blockId: "wave-".concat(c.id) }),
            M = (0, s.useMemo)(() => {
              var e, t, i, r, s;
              return c.isShimmerVisible
                ? (0, a.jsx)(y.XM, {
                    isActive: c.isShimmerActive,
                    className: I().header,
                    coverRadius: "round",
                  })
                : (0, a.jsx)(y.ti, {
                    titleSize: "xs",
                    titleLineClamp: 1,
                    className: I().header,
                    coverUrl:
                      null === (e = c.meta) || void 0 === e
                        ? void 0
                        : e.imageUrl,
                    title:
                      null !==
                        (s =
                          null === (t = c.meta) || void 0 === t
                            ? void 0
                            : t.title) && void 0 !== s
                        ? s
                        : null === (i = c.meta) || void 0 === i
                          ? void 0
                          : i.header,
                    titleClassName: I().headerTitle,
                    coverBackgroundColor:
                      null === (r = c.meta) || void 0 === r
                        ? void 0
                        : r.backgroundColor,
                    coverRadius: "round",
                    headingVariant: "h4",
                  });
            }, [
              c.isShimmerActive,
              c.isShimmerVisible,
              null === (t = c.meta) || void 0 === t
                ? void 0
                : t.backgroundColor,
              null === (i = c.meta) || void 0 === i ? void 0 : i.header,
              null === (r = c.meta) || void 0 === r ? void 0 : r.imageUrl,
              null === (n = c.meta) || void 0 === n ? void 0 : n.title,
            ]),
            A = (0, s.useMemo)(
              () =>
                c.tracks.map((e, t) => {
                  var i;
                  let r = p({
                    contextId: c.contextId,
                    entitiesData: c.entitiesData,
                    entityId: e.entityId,
                    from: j,
                    isTrackAutoflow: k,
                    overrideAutoflowSeeds: c.autoflowSeeds,
                    overrideContextType: v.Z.Radio,
                    trackIndex: t,
                  });
                  return (0, a.jsx)(
                    f,
                    {
                      playContextParams: r,
                      type: h.A.Vibe,
                      track: e,
                      blockIndex: d,
                      tabIndex: x,
                      trackIndex: t,
                    },
                    null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.getKey(t),
                  );
                }),
              [
                c.tracks,
                c.contextId,
                c.autoflowSeeds,
                c.entitiesData,
                k,
                j,
                x,
                d,
              ],
            );
          return (0, a.jsxs)("section", {
            className: I().root,
            ref: _,
            "data-intersection-property-id": g,
            children: [
              (0, a.jsx)(o.Heading, {
                className: (0, u.W)(I().header, I().heading),
                variant: "h3",
                children: (0, a.jsx)(m.Z, { id: "music-history.my-vibe" }),
              }),
              M,
              (0, a.jsx)("div", { className: I().content, children: A }),
            ],
          });
        });
      var V = i(57146),
        N = i.n(V);
      let L = (0, r.Pi)((e) => {
        let {
            tab: t,
            tabIndex: i,
            onTabShowOrHide: r,
            shouldHideInactiveTab: u,
            ...m
          } = e,
          { musicHistory: v } = (0, l.oR4)(),
          h = (0, s.useMemo)(() => {
            var e;
            return null === (e = t.blocks) || void 0 === e
              ? void 0
              : e
                  .map((e, t) => {
                    switch (e.type) {
                      case n.E.ALBUM:
                        return (0, a.jsx)(
                          j,
                          { album: e, blockIndex: t, tabIndex: i },
                          "".concat(e.key, "_").concat(t),
                        );
                      case n.E.PLAYLIST:
                        return (0, a.jsx)(
                          C,
                          { playlist: e, blockIndex: t, tabIndex: i },
                          "".concat(e.key, "_").concat(t),
                        );
                      case n.E.WAVE:
                        return (0, a.jsx)(
                          H,
                          { vibe: e, blockIndex: t, tabIndex: i },
                          "".concat(e.key, "_").concat(t),
                        );
                      case n.E.ARTIST:
                        return (0, a.jsx)(
                          M,
                          { artist: e, blockIndex: t, tabIndex: i },
                          "".concat(e.key, "_").concat(t),
                        );
                      case n.E.SEARCH:
                      case n.E.OTHER:
                        return (0, a.jsx)(
                          A,
                          { common: e, blockIndex: t, tabIndex: i },
                          "".concat(e.key, "_").concat(t),
                        );
                      default:
                        return null;
                    }
                  })
                  .filter((e) => e);
          }, [t.blocks, i]),
          x = (0, d.useFormatDate)(),
          y = (0, s.useRef)(null),
          { observeElement: p } = (0, s.useContext)(
            c.MusicHistoryIntersectionObserverContext,
          ),
          b = v.datesMap.get(t.date);
        return (
          (0, s.useEffect)(() => {
            p({
              elementId: t.date,
              elementRef: y,
              index: 0,
              onShow: () => {
                v.setDatesMap(t.date, !0), r();
              },
              onHide: () => {
                v.setDatesMap(t.date, !1), r();
              },
            });
          }, [v, v.datesMap, p, r, t.date]),
          (0, a.jsxs)("div", {
            "aria-hidden": !b && u,
            ref: y,
            "data-intersection-property-id": t.date,
            className: N().root,
            ...m,
            inert: !!(!b && u),
            children: [
              (0, a.jsx)(o.Heading, {
                "data-date-anchor": t.date,
                className: N().date,
                variant: "h2",
                size: "m",
                children: x(t.date),
              }),
              (0, a.jsx)("div", { className: N().content, children: h }),
            ],
          })
        );
      });
    },
    18789: function (e) {
      e.exports = {
        root: "MusicHistoryPage_root__FYB2m",
        scroll: "MusicHistoryPage_scroll__ykpDX",
        scrollContainer: "MusicHistoryPage_scrollContainer__eemvg",
        headerContainer: "MusicHistoryPage_headerContainer__QG0L3",
        header: "MusicHistoryPage_header__dzEvD",
        content: "MusicHistoryPage_content__j4evw",
        footer: "MusicHistoryPage_footer__Vu7aC",
        empty: "MusicHistoryPage_empty__fQRHA",
        carousel: "MusicHistoryPage_carousel__jcl8l",
        tabs: "MusicHistoryPage_tabs__v_5Zg",
        tab: "MusicHistoryPage_tab__WDE1e",
        tab_isLoading: "MusicHistoryPage_tab_isLoading__nNqd2",
        tab_selected: "MusicHistoryPage_tab_selected__nmn8P",
        date: "MusicHistoryPage_date__OV6rR",
        error: "MusicHistoryPage_error__9f_8i",
        important: "MusicHistoryPage_important__qNFO8",
      };
    },
    4787: function (e) {
      e.exports = {
        shimmersContainer:
          "MusicHistoryPageContentShimmer_shimmersContainer__82cj6",
        dateShimmer: "MusicHistoryPageContentShimmer_dateShimmer__d4_te",
        contextNameShimmer:
          "MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr",
        contextHeaderShimmer:
          "MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ",
        trackListShimmers:
          "MusicHistoryPageContentShimmer_trackListShimmers__4GSp8",
      };
    },
    57146: function (e) {
      e.exports = {
        date: "MusicHistoryTab_date__Fjy3P",
        content: "MusicHistoryTab_content__Jt15j",
      };
    },
    80970: function (e) {
      e.exports = { trackShimmer: "MusicHistoryTrack_trackShimmer__yxcx9" };
    },
    8080: function (e) {
      e.exports = {
        header: "MusicHistoryBlock_header__sIFVC",
        heading: "MusicHistoryBlock_heading__HEfmk",
        headerTitle: "MusicHistoryBlock_headerTitle__Yhyst",
        content: "MusicHistoryBlock_content__S9lfi",
        artists: "MusicHistoryBlock_artists__AjuWP",
        artistLink: "MusicHistoryBlock_artistLink__yFHPE",
        shimmerTitle: "MusicHistoryBlock_shimmerTitle__Mx1IC",
      };
    },
    20188: function (e, t, i) {
      "use strict";
      var a, r;
      i.d(t, {
        E: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).TRACK = "track"),
        (r.WAVE = "wave"),
        (r.ARTIST = "artist"),
        (r.PLAYLIST = "playlist"),
        (r.ALBUM = "album"),
        (r.OTHER = "other"),
        (r.SEARCH = "search");
    },
  },
]);
