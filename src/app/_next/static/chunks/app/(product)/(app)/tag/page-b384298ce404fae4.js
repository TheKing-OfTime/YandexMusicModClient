(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [68],
  {
    34448: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 44412));
    },
    58720: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return c;
        },
      });
      var n,
        a = i(73484),
        l = i(65067),
        r = {
          6699: (t, e, i) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useDebouncedToggle = void 0);
            let n = i(352),
              a = i(810);
            e.useDebouncedToggle = (t) => {
              let { delay: e, initialState: i, throttleTimeout: l } = t,
                r = (0, a.useRef)(null),
                [s, o] = (0, a.useState)(!!i),
                u = (0, a.useMemo)(
                  () =>
                    (0, n.throttle)(() => {
                      o(!i),
                        r.current && window.clearTimeout(r.current),
                        (r.current = window.setTimeout(() => {
                          o(!!i);
                        }, e));
                    }, l),
                  [e, i, l],
                ),
                c = (0, a.useCallback)(() => {
                  o(!!i), r.current && window.clearTimeout(r.current);
                }, [i]);
              return (
                (0, a.useEffect)(
                  () => () => {
                    r.current && window.clearTimeout(r.current);
                  },
                  [],
                ),
                { state: s, handleDebouncedToggle: u, reset: c }
              );
            };
          },
          361: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.getElementFromRefOrElement = void 0),
              (e.getElementFromRefOrElement = (t) =>
                void 0 === t
                  ? void 0
                  : null === t || t instanceof HTMLElement
                    ? t
                    : null === t.current || t.current instanceof HTMLElement
                      ? t.current
                      : void 0);
          },
          352: (t) => {
            t.exports = a;
          },
          810: (t) => {
            t.exports = n || (n = i.t(l, 2));
          },
        },
        s = {};
      function o(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var i = (s[t] = { exports: {} });
        return r[t](i, i.exports, o), i.exports;
      }
      var u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let t = o(810),
          e = o(361),
          i = o(6699);
        u.useScroll = (n) => {
          let { onScroll: a, listenIsScrolling: l, elementRef: r } = n,
            { state: s, handleDebouncedToggle: o } = (0, i.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            u = (0, t.useCallback)(() => {
              l && o(), null == a || a();
            }, [l, o, a]);
          return (
            (0, t.useEffect)(() => {
              let t = (0, e.getElementFromRefOrElement)(r);
              if (null === t) return;
              let i = null != t ? t : window,
                n = { capture: !0, passive: !0 };
              return (
                i.addEventListener("scroll", u, n),
                () => i.removeEventListener("scroll", u, n)
              );
            }, [r, u]),
            s
          );
        };
      })(),
        u.__esModule;
      var c = u.useScroll;
    },
    44412: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(75441),
        a = i(98730),
        l = i(82869);
      e.default = () => {
        let t = (0, a.useSearchParams)().get("tagId");
        return t || (0, a.notFound)(), (0, n.jsx)(l.uj, { tagId: t });
      };
    },
    69947: function (t, e, i) {
      "use strict";
      i.d(e, {
        I7: function () {
          return m;
        },
        kl: function () {
          return p;
        },
        b4: function () {
          return g;
        },
        at: function () {
          return l;
        },
      }),
        i(81286);
      var n = i(65067),
        a = i(13534);
      let l = (t, e) => (
        (0, a.uK4)().get(a.Xt8),
        [
          (0, n.useMemo)(() => {
            if (void 0 === e) return {};
            let i = e - 17;
            return {
              "--average-color-background": t,
              transform: "translateY(".concat(e >= 17 ? 0 : i, "px)"),
              opacity: 1,
            };
          }, [e, !1, t]),
          (0, n.useMemo)(() => ({ "--average-color-background": t }), [t]),
        ]
      );
      var r = i(75441),
        s = i(71361),
        o = i(62569),
        u = i(58720),
        c = i(97141);
      let d = (t) => {
          let { element: e, scrollTop: i, isMobile: n } = t,
            a = 0.6 * e.clientHeight;
          return i + (n ? 60 : 76) >= e.offsetTop + a;
        },
        m = (0, o.Pi)((t) => {
          let {
              children: e,
              scrollElement: i,
              outerTitle: l = "",
              headerElement: o,
              headerThreshold: m,
              shouldHideHeader: p,
            } = t,
            [g, _] = (0, n.useState)(l),
            [v, y] = (0, n.useState)(null),
            [f, C] = (0, n.useState)(null),
            [x, h] = (0, n.useState)(null),
            [k, P] = (0, n.useState)(!1),
            [L, N] = (0, n.useState)(!1),
            [j, S] = (0, n.useState)(!1),
            [b, E] = (0, n.useState)(!1),
            {
              settings: { isMobile: T },
            } = (0, a.oR4)();
          (0, n.useLayoutEffect)(() => {
            _(l);
          }, [l]);
          let B = (0, n.useCallback)(() => {
            let t = null != m ? m : 10,
              e = o ? Number(o.offsetTop) - t : t;
            e < 0 && (e = 0);
            let n = (t) => {
              S(t > e),
                p && E(t > 30),
                (null == v ? void 0 : v.current) &&
                  P(
                    d({
                      element: null == v ? void 0 : v.current,
                      scrollTop: t,
                      isMobile: T,
                    }),
                  ),
                (null == f ? void 0 : f.current) &&
                  N(
                    d({
                      element: null == f ? void 0 : f.current,
                      scrollTop: t,
                      isMobile: T,
                    }),
                  );
            };
            T ? n(window.scrollY) : i && n(i.scrollTop);
          }, [m, o, T, p, v, f, i]);
          (0, n.useEffect)(() => {
            T
              ? 0 === window.scrollY && S(!1)
              : (i && 0 !== i.scrollTop) || S(!1);
          }, [i, null == i ? void 0 : i.scrollTop, T]);
          let W = (0, n.useMemo)(
            () =>
              T
                ? { onScroll: (0, s.Z)(B, 200) }
                : { onScroll: (0, s.Z)(B, 200), elementRef: i },
            [B, i, T],
          );
          (0, u.v)(W);
          let w = (0, n.useMemo)(
            () => ({
              title: g,
              setTitle: _,
              titleElement: v,
              scrollElement: T ? null : i,
              setTitleElement: y,
              childElement: f,
              setChildElement: C,
              child: x,
              setChild: h,
              isScrolledChild: L,
              isScrolledTitle: k,
              isScrolling: j,
              isHeaderHidden: b,
            }),
            [g, k, v, i, j, T, x, f, L, b],
          );
          return (0, r.jsx)(c.pI.Provider, { value: w, children: e });
        }),
        p = (t) => {
          let { children: e, child: i, className: a } = t,
            { setChildElement: l, setChild: s } = (0, n.useContext)(c.pI),
            o = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == o ? void 0 : o.current) && l(o), i && s(i);
            }, [o, i, l, s]),
            (0, n.useEffect)(
              () => () => {
                s(null);
              },
              [s],
            ),
            (0, r.jsx)("div", { ref: o, className: a, children: e })
          );
        },
        g = (t) => {
          let { children: e, title: i, className: a } = t,
            { setTitleElement: l, setTitle: s } = (0, n.useContext)(c.pI),
            o = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == o ? void 0 : o.current) && l(o), i && s(i);
            }, [o, i, l, s]),
            (0, n.useEffect)(
              () => () => {
                s("");
              },
              [s],
            ),
            (0, r.jsx)("div", { ref: o, className: a, children: e })
          );
        };
    },
    7797: function (t, e, i) {
      "use strict";
      i.d(e, {
        vY: function () {
          return P.EmptyPlaylistBlock;
        },
        Tq: function () {
          return L.HorizontalPlaylistCard;
        },
        ZL: function () {
          return N.PlaylistCard;
        },
        Nn: function () {
          return h;
        },
        d2: function () {
          return k;
        },
        VD: function () {
          return j.PlaylistsCarousel;
        },
        RE: function () {
          return l;
        },
        Q9: function () {
          return d;
        },
        VB: function () {
          return p;
        },
        PB: function () {
          return _;
        },
      });
      var n = i(22874),
        a = i(13534);
      let l = (t) => {
        var e, i;
        let {
          playlist: l,
          generatedPlaylistType: r,
          likesCount: s,
          trailer: o,
          tracksCount: u,
        } = t;
        return (0, n.pj)({
          isAvailable: null === (i = l.available) || void 0 === i || i,
          uuid: l.playlistUuid,
          title: l.title,
          uid: l.uid,
          kind: l.kind,
          coverUri: null === (e = l.cover) || void 0 === e ? void 0 : e.uri,
          generatedPlaylistType: r,
          likesCount: s,
          tracksCount: u,
          trailer: (0, a.GFX)(o),
        });
      };
      var r = i(98730),
        s = i(65067);
      (0, s.cache)(async (t, e) => {
        try {
          let {
            container: i,
            backendHostTld: n,
            locale: l,
            host: s,
            fullUrl: o,
            isRSC: u,
            requestUrl: c,
          } = await (0, a.rbP)();
          if (u)
            return {
              playlist: void 0,
              backendHostTld: n,
              locale: l,
              host: s,
              fullUrl: o,
              requestUrl: c,
            };
          let d = i.get(a.Eug),
            m = await d.getPlaylistWithTracksIds({
              userId: t,
              playlistKind: e,
              resumeStream: !1,
            });
          return (
            "not-found" === m.error && (0, r.notFound)(),
            {
              playlist: m,
              backendHostTld: n,
              locale: l,
              host: s,
              fullUrl: o,
              requestUrl: c,
            }
          );
        } catch (t) {
          return {
            playlist: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      }),
        (0, s.cache)(async (t) => {
          (0, a.aIc)(t) || (0, r.notFound)();
          try {
            let {
              container: e,
              backendHostTld: i,
              locale: n,
              host: l,
              fullUrl: s,
              isRSC: o,
              requestUrl: u,
            } = await (0, a.rbP)();
            if (o)
              return {
                playlist: void 0,
                backendHostTld: i,
                locale: n,
                host: l,
                fullUrl: s,
                requestUrl: u,
              };
            let c = e.get(a.lkR),
              d = await c.getPlaylist({
                playlistUuid: t,
                resumeStream: !1,
                richTracks: !1,
              });
            return (
              "not-found" === d.error && (0, r.notFound)(),
              {
                playlist: d,
                backendHostTld: i,
                locale: n,
                host: l,
                fullUrl: s,
                requestUrl: u,
              }
            );
          } catch (t) {
            return {
              playlist: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
            };
          }
        });
      var o = i(10979);
      let u = (t) => ({
          uid: t.uid,
          login: t.login,
          name: t.name,
          sex: t.sex,
          verified: t.verified,
        }),
        c = (t) =>
          (0, n.pj)({
            userInfo: t.userInfo ? u(t.userInfo) : null,
            caseForms: t.caseForms ? (0, a.GA0)(t.caseForms) : null,
          }),
        d = (t) =>
          (0, n.pj)({
            ...(0, o.PV)(t),
            owner: t.owner ? u(t.owner) : void 0,
            description: t.description,
            tags: t.tags,
            modified: t.modified,
            madeFor: t.madeFor ? c(t.madeFor) : null,
          });
      var m = i(64353);
      let p = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          artists:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.artists) || void 0 === e
                    ? void 0
                    : e.map(m.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var g = i(32399);
      let _ = (t) => {
        var e, i;
        return (0, n.pj)({
          ...(0, o.PV)(t),
          tracks:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.tracks) || void 0 === e
                    ? void 0
                    : e.map(g.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
      var v = i(40892),
        y = i(92719);
      let f = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(y.o)),
          verified: n.V5.boolean,
        }),
        C = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(f),
          caseForms: n.V5.maybeNull(v.S2),
        }),
        x = n.V5.model("PlaylistTag", { id: n.V5.string, value: n.V5.string }),
        h = o.Cd.props({
          owner: n.V5.maybe(f),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          tags: n.V5.maybeNull(n.V5.array(x)),
          madeFor: n.V5.maybeNull(C),
        })
          .views((t) => ({
            get seeds() {
              var e;
              return [
                "playlist:"
                  .concat(
                    null === (e = t.owner) || void 0 === e ? void 0 : e.login,
                    "_",
                  )
                  .concat(t.kind),
              ];
            },
            get tagsString() {
              let { experiments: e } = (0, n.yj)(t);
              if (
                !e.checkExperiment(a.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(t.tags) ||
                !t.tags.length
              )
                return null;
              return t.tags.map((t) => t.value).join(", ");
            },
          }))
          .actions((t) => ({
            changeDescription: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              if (t.description === e) return a.SLo.OK;
              if (e.length > o.Zn) return a.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: l } = (0, n.dU)(t);
              if (t.canUserChange) {
                let n = t.description;
                t.description = e;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: e,
                    userId: t.uid,
                    playlistKind: t.kind,
                  });
                  return (t.description = n.description), a.SLo.OK;
                } catch (e) {
                  (t.description = n), l.error(e);
                }
              }
              return a.SLo.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (e) {
              if (!(0, n.fh)(t)) return a.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: l } = (0, n.dU)(t);
              try {
                let n = yield i.uploadPlaylistCover({
                  userId: t.uid,
                  formData: e,
                  playlistKind: t.kind,
                });
                return (t.coverUri = n.cover.uri), a.SLo.OK;
              } catch (t) {
                l.error(t);
              }
              return a.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        k = o.$h.props({ artists: n.V5.maybe(n.V5.array(m.Go)) });
      var P = i(59539),
        L = i(86133),
        N = i(8152),
        j = i(87352);
    },
    6794: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return l;
        },
      });
      var n = i(65067),
        a = i(9317);
      let l = (t) => {
        let { formatMessage: e } = (0, a.Z)();
        return (0, n.useMemo)(() => {
          let i = "";
          t.isLiked && !t.actualLikesCount
            ? (i = e({ id: "entity-names.has-your-like" }))
            : "number" == typeof t.actualLikesCount &&
              (i =
                t.actualLikesCount > 0
                  ? e(
                      { id: "entity-names.likes-counter" },
                      { counter: t.actualLikesCount },
                    )
                  : e({ id: "entity-names.likes-counter-empty" }));
          let n = e(
            { id: "entity-names.playlist-name" },
            { playlistName: t.title },
          );
          return "".concat(n, " ").concat(i);
        }, [e, t]);
      };
    },
    59539: function (t, e, i) {
      "use strict";
      i.d(e, {
        EmptyPlaylistBlock: function () {
          return m;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(65067),
        r = i(15937),
        s = i(35846),
        o = i(69756),
        u = i(17392),
        c = i(63950),
        d = i.n(c);
      let m = (t) => {
        let { className: e, isEmptySearch: i } = t,
          c = (0, l.useMemo)(
            () =>
              i
                ? (0, n.jsx)(r.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, l.useMemo)(
            () =>
              i
                ? (0, n.jsx)(r.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(r.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, n.jsxs)("div", {
          className: (0, a.W)(d().root, e),
          ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, n.jsx)("div", {
              className: d().iconBackground,
              children: (0, n.jsx)(o.Icon, {
                variant: "search",
                size: "l",
                className: d().icon,
                ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, n.jsx)(u.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: c,
            }),
            (0, n.jsx)(u.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
              children: m,
            }),
          ],
        });
      };
    },
    86133: function (t, e, i) {
      "use strict";
      i.d(e, {
        HorizontalPlaylistCard: function () {
          return j;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(62569),
        r = i(65067),
        s = i(9317),
        o = i(15937),
        u = i(4875),
        c = i(35846),
        d = i(84638),
        m = i(93093),
        p = i(91307),
        g = i(69756),
        _ = i(17392),
        v = i(64353),
        y = i(13534),
        f = i(97141),
        C = i(6794),
        x = i(10979),
        h = i(75908),
        k = i.n(h);
      let P = (0, l.Pi)((t) => {
        var e;
        let { className: i, playlist: l, likeIconSize: s = "xxs" } = t,
          { user: o, trailer: c } = (0, y.oR4)(),
          d = (0, y.qsr)(),
          { sendLikeSearchFeedback: p } = (0, y.sAF)(),
          _ = (0, x.SB)(l),
          [v, C] = (0, r.useState)(!1),
          h = (0, m.W)(async () => {
            v || l.isLiked || (C(!0), null == p || p()), await _();
          }),
          P = (0, y.FTC)(),
          L = (0, m.W)((t) => {
            if ((t.stopPropagation(), d())) {
              t.preventDefault();
              return;
            }
            c.openPlaylistTrailer(l.id), P(u.OB.Playlist, l.id);
          });
        return (0, n.jsxs)("div", {
          className: (0, a.W)(k().root, k().controls, i, {
            [k().controls_disabled]: !l.isAvailable,
          }),
          children: [
            l.isAvailable &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(f.FM, {
                    fallback: (0, n.jsx)(f.dJ, {
                      size: "xs",
                      iconSize: s,
                      className: (0, a.W)(k().item, k().likeIcon),
                      isLiked: l.isLiked,
                      onClick: h,
                      disabled: !o.isAuthorized,
                    }),
                  }),
                  (null === (e = l.trailer) || void 0 === e
                    ? void 0
                    : e.isAvailable) &&
                    (0, n.jsx)(f.FM, {
                      fallback: (0, n.jsx)(f.eP, {
                        className: (0, a.W)(k().item, k().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: L,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, n.jsx)("div", {
              className: (0, a.W)(k().item, k().item_buttonArrow),
              children: (0, n.jsx)(g.Icon, {
                className: f.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var L = i(53948),
        N = i.n(L);
      let j = (0, l.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            pageId: l,
            coverClassName: x,
            playButtonIconSize: h,
            likeIconSize: k,
          } = t,
          { ref: L, intersectionPropertyId: j } = (0, y.VfV)(),
          { from: S } = (0, y.MhG)({ pageId: l }),
          [b, E] = (0, r.useState)(!1),
          T = (0, y.lAI)(),
          B = (0, C.z)(i),
          W = i.title || "",
          { formatMessage: w, formatNumber: A } = (0, s.Z)(),
          V = (0, y.qsr)(),
          { sendNavigateSearchFeedback: R, sendPlaySearchFeedback: I } = (0,
          y.sAF)(),
          F = (0, y.zxW)(),
          {
            isPlaying: z,
            isCurrent: O,
            togglePlay: G,
          } = (0, y.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: S,
              },
              loadContextMeta: !0,
            },
          }),
          D = (0, y.s0h)(i.url),
          M = (0, y.s0h)(i.url, !0),
          U = (0, v.ik)(M, D),
          Y = (0, m.W)((t) => {
            null == R || R(),
              F({ to: u.qU.PlaylistScreen }),
              t.preventDefault(),
              U(t);
          }),
          Z = (0, m.W)(() => {
            V() || (b || z || (E(!0), null == I || I()), G(), T(!z));
          }),
          q = (0, m.W)((t) => {
            (0, p.m)(t, f.$C.ripple), Y(t);
          }),
          H = (0, m.W)((t) => {
            t.stopPropagation(), Y(t);
          }),
          K = (0, r.useCallback)(
            (t) =>
              (0, n.jsx)(f.Df, {
                isAvailable: i.isAvailable,
                isDisliked: !1,
                coverUri: i.coverUri,
                title: W,
                className: (0, a.W)(f.$C.playButtonCell, x),
                alt: w(
                  { id: "entity-names.playlist-name" },
                  { playlistName: W },
                ),
                ...t,
              }),
            [i, W, x, w],
          ),
          J =
            null == K
              ? void 0
              : K({
                  onPlayButtonClick: Z,
                  isPlaying: z,
                  isCurrent: O,
                  playButtonIconSize: h,
                }),
          $ = (0, r.useMemo)(
            () =>
              i.url && i.isAvailable
                ? (0, n.jsx)(f.rU, {
                    className: (0, a.W)(f.$C.text, f.$C.titleLink),
                    href: i.url,
                    onClick: H,
                    children: W,
                  })
                : (0, n.jsx)(_.Caption, {
                    className: (0, a.W)(f.$C.text, f.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: W,
                  }),
            [H, i.isAvailable, i.url, W],
          ),
          X = (0, r.useMemo)(() => {
            if (void 0 === i.actualLikesCount || void 0 === i.tracksCount)
              return;
            let t = (0, n.jsx)(_.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              e = i.isLiked ? "likedVariant" : "likeVariant",
              a = ""
                .concat(B, " ")
                .concat(
                  w(
                    { id: "entity-names.tracks-count" },
                    { value: i.tracksCount },
                  ),
                );
            return (0, n.jsxs)("div", {
              className: N().description,
              "aria-label": a,
              children: [
                (0, n.jsxs)("div", {
                  className: N().likesCount,
                  children: [
                    (0, n.jsx)(g.Icon, {
                      className: N().icon,
                      variant: e,
                      size: "xxs",
                    }),
                    (0, n.jsx)(_.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: A(i.actualLikesCount),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: N().tracksCount,
                  children: [
                    t,
                    (0, n.jsx)(_.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, n.jsx)(o.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: A(i.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [w, A, B, i.actualLikesCount, i.isLiked, i.tracksCount]);
        return (0, n.jsxs)(f.Md, {
          ref: L,
          "data-intersection-property-id": j,
          className: (0, a.W)(
            f.$C.root,
            { [f.$C.root_disabled]: !i.isAvailable },
            e,
          ),
          "aria-label": i.title || w({ id: "entity-names.playlist" }),
          onClick: q,
          ...(0, c.BA)(c.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            J,
            (0, n.jsx)(f.u, {
              isDisabled: !i.isAvailable,
              title: $,
              description: X,
            }),
            (0, n.jsx)(P, { playlist: i, likeIconSize: k }),
          ],
        });
      });
    },
    8152: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistCard: function () {
          return S;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(62569),
        r = i(65067),
        s = i(9317),
        o = i(4875),
        u = i(35846),
        c = i(84638),
        d = i(93093),
        m = i(14218),
        p = i(18333),
        g = i(69756),
        _ = i(59091),
        v = i(17392),
        y = i(64353),
        f = i(10979),
        C = i(13534),
        x = i(97141),
        h = i(6794),
        k = i(27376),
        P = i(50705);
      let L = (0, l.Pi)((t) => {
        var e;
        let { playlist: i, onOpenChange: a, open: l, ...r } = t,
          { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: m } =
            (0, C.vLf)(),
          {
            experiments: p,
            settings: { isMobile: g },
            trailer: _,
          } = (0, C.oR4)(),
          v = (0, f.SB)(i),
          y = (0, f.BV)(i),
          h = (0, C.FTC)(),
          { formatMessage: L } = (0, s.Z)(),
          N = (0, C.qsr)(),
          j = p.checkExperiment(C.peG.WebEditorsFeatures, "on"),
          S = (0, P.q3)({
            entityVariant: C.gus.PLAYLIST,
            urlParams: { id: i.uid, kind: i.kind },
          });
        (0, C.ZP4)(l);
        let b = (0, d.W)(() => {
          if (c) {
            m();
            return;
          }
          N() || (_.openPlaylistTrailer(i.id), h(o.OB.Playlist, i.id));
        });
        return (0, n.jsxs)(k.v2, {
          title: i.title,
          onOpenChange: a,
          open: l,
          offsetOptions: 10,
          isMobile: g,
          ariaLabel: L({ id: "interface-actions.context-menu" }),
          containerProps: (0, u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...r,
          children: [
            j &&
              (0, n.jsx)(P.ZY, {
                entityVariant: C.gus.PLAYLIST,
                adminUrl: i.isFavouritePlaylist ? void 0 : S,
              }),
            !g && (0, n.jsx)(x.Zd, { onClick: y, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(x.xZ, { onClick: v, isLiked: i.isLiked }),
            (null === (e = i.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) &&
              (0, n.jsx)(x.NB, { onClick: b, disabled: !i.isAvailable }),
          ],
        });
      });
      var N = i(96297),
        j = i.n(N);
      let S = (0, l.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            children: l,
            contentLinesCount: k,
            customDescription: P,
          } = t,
          { ref: N, intersectionPropertyId: S } = (0, C.VfV)(),
          { trailer: b, user: E } = (0, C.oR4)(),
          { from: T, utmLink: B } = (0, C.MhG)({
            contextId: i.uuid,
            contextType: c.A.Playlist,
          }),
          { formatMessage: W } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: w,
            sendNavigateSearchFeedback: A,
            sendPlaySearchFeedback: V,
          } = (0, C.sAF)(),
          [R, I] = (0, r.useState)(!1),
          [F, z] = (0, r.useState)(!1),
          [O, G] = (0, r.useState)(!1),
          D = (0, h.z)(i),
          M = (0, f.SB)(i),
          U = (0, f.BV)(i),
          Y = (0, C.zxW)(),
          Z = (0, C.lAI)(),
          q = (0, C.s0h)(i.url),
          H = (0, C.s0h)(i.url, !0),
          K = (0, y.ik)(H, q),
          J = (0, C.FTC)(),
          $ = (0, C.qsr)(),
          X = (0, d.W)((t) => {
            if ((t.stopPropagation(), $())) {
              t.preventDefault();
              return;
            }
            b.setUtmLink(B),
              b.openPlaylistTrailer(i.id),
              J(o.OB.Playlist, i.id);
          }),
          [Q, tt] = (0, r.useState)(!1),
          { isPlaying: te, togglePlay: ti } = (0, C.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: T,
                utmLink: B,
              },
              loadContextMeta: !0,
            },
          }),
          tn = (0, d.W)(() => {
            Y({ to: o.qU.PlaylistScreen }), null == A || A();
          }),
          ta = (0, d.W)((t) => {
            tn(), K(t);
          }),
          tl = (0, d.W)(() => {
            $() || (R || te || (I(!0), null == V || V()), ti(), Z(!te));
          }),
          tr = (0, d.W)(() => {
            F || i.isLiked || (z(!0), null == w || w()), M();
          }),
          ts = (0, d.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          to = (0, d.W)((t) => {
            G(t), tt(t);
          }),
          tu = (0, r.useMemo)(() => {
            var t;
            return P
              ? (0, n.jsx)(
                  v.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: P,
                  },
                  i.getKey("description"),
                )
              : (null === (t = i.artists) || void 0 === t ? void 0 : t.length)
                ? (0, n.jsx)(
                    y.jO,
                    {
                      className: j().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: j().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [P, i]),
          tc = (0, m.V)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                x.dJ,
                {
                  className: (0, a.W)(j().likeButton, j().control),
                  isLiked: i.isLiked,
                  onClick: tr,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !E.isAuthorized,
                },
                i.getKey("LikeButton"),
              );
          }),
          td = (0, r.useMemo)(() => {
            var t;
            if (
              null == i
                ? void 0
                : null === (t = i.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable
            )
              return (0, n.jsx)(
                x.xf,
                {
                  children: (0, n.jsx)(
                    x.eP,
                    {
                      className: (0, a.W)(j().trailerButton, j().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: X,
                    },
                    i.getKey("TrailerButton"),
                  ),
                },
                i.getKey("PlaylilstCardTrailerTooltip"),
              );
          }, [X, i]),
          tm = (0, r.useMemo)(
            () =>
              (0, n.jsx)(
                x.RT,
                {
                  onClick: U,
                  isPinned: i.isPinned,
                  className: (0, a.W)(j().pinButton, j().control),
                  withRipple: !1,
                },
                i.getKey("PinButton"),
              ),
            [U, i],
          ),
          tp = (0, r.useMemo)(
            () =>
              (0, n.jsx)(_.Paper, {
                className: j().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: ta,
                  children: [
                    (0, n.jsx)(x.BE, {
                      className: j().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: D,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(p.kk, {
                      isVisible: O || Q,
                      className: j().controls,
                      playControl: (0, n.jsx)(
                        x.JM,
                        {
                          className: (0, a.W)(j().playButton, j().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: tl,
                          isPlaying: te,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: tc,
                      menuControl: (0, n.jsx)(
                        L,
                        {
                          playlist: i,
                          onOpenChange: to,
                          open: O,
                          onClick: ts,
                          className: (0, a.W)(j().menuButton, j().control),
                          icon: (0, n.jsx)(g.Icon, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, u.BA)(
                            u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        i.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: tm,
                      trailerControl: td,
                    }),
                  ],
                }),
              }),
            [ta, i, D, O, Q, tl, te, tc, to, ts, tm, td],
          ),
          tg = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(p.m7, {
          ref: N,
          "aria-label": D,
          className: (0, a.W)(j().root, e),
          title: (0, n.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(x.rU, {
              className: j().titleLink,
              href: i.url,
              onClick: tn,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(x.rU, {
            href: i.url,
            onClick: tn,
            children: i.title,
          }),
          "data-intersection-property-id": S,
          contentLinesCount: k,
          view: tp,
          description: tu,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            tg &&
              (0, n.jsx)(x.DB, {
                ariaLabel: W(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: M,
              }),
            l,
          ],
        });
      });
    },
    87352: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var n = i(75441),
        a = i(65067),
        l = i(97141),
        r = i(8152);
      let s = (t) => {
          let {
            forwardRef: e,
            isShimmerVisible: i,
            isShimmerActive: a,
            title: s,
            description: o,
            playlists: u,
            containerClassName: c,
            className: d,
            headerClassName: m,
            viewAllActionLink: p,
            headingVariant: g,
            ..._
          } = t;
          return (0, n.jsx)(l.HY, {
            isShimmerVisible: i,
            isShimmerActive: a,
            className: d,
            headerClassName: m,
            containerClassName: c,
            ref: e,
            title: s,
            description: o,
            viewAllActionLink: p,
            headingVariant: g,
            ..._,
            children:
              null == u
                ? void 0
                : u.map((t) =>
                    (0, n.jsx)(
                      r.PlaylistCard,
                      { playlist: t, contentLinesCount: 3 },
                      t.key,
                    ),
                  ),
          });
        },
        o = (0, a.forwardRef)((t, e) => (0, n.jsx)(s, { forwardRef: e, ...t }));
    },
    82869: function (t, e, i) {
      "use strict";
      i.d(e, {
        uj: function () {
          return u.TagPage;
        },
        tS: function () {
          return o;
        },
      });
      var n = i(22874),
        a = i(62726),
        l = i(10979),
        r = i(13534),
        s = i(40892);
      let o = n.V5.model("TagPage", {
        title: n.V5.maybe(n.V5.string),
        errorStatusCode: n.V5.maybeNull(n.V5.number),
        tagLoadingState: n.V5.enumeration(Object.values(r.Gui)),
        playlistsLoadingState: n.V5.enumeration(Object.values(r.Gui)),
        playlistsData: n.V5.array(
          n.V5.model({ uid: n.V5.number, kind: n.V5.number }),
        ),
        playlists: n.V5.array(n.V5.maybeNull(l.Cd)),
        pager: n.V5.maybeNull(s.Vn),
        alreadyRequestedPages: n.V5.map(n.V5.number),
        pendingPages: n.V5.map(n.V5.number),
        requests: n.V5.maybeNull(n.V5.number),
      })
        .views((t) => {
          let e = {
            get isNeededToLoad() {
              return t.tagLoadingState === r.Gui.IDLE;
            },
            get isResolved() {
              return (
                t.tagLoadingState === r.Gui.RESOLVE &&
                t.playlistsLoadingState === r.Gui.RESOLVE
              );
            },
            get isNotFound() {
              let e =
                t.playlistsLoadingState === r.Gui.RESOLVE &&
                0 === t.playlists.length;
              return (
                ((t.tagLoadingState === r.Gui.REJECT ||
                  t.playlistsLoadingState === r.Gui.REJECT) &&
                  (t.errorStatusCode === a.CN.NOT_FOUND ||
                    t.errorStatusCode === a.CN.BAD_REQUEST)) ||
                e
              );
            },
            get isSomethingWrong() {
              return (
                (t.tagLoadingState === r.Gui.REJECT ||
                  t.playlistsLoadingState === r.Gui.REJECT) &&
                !e.isNotFound
              );
            },
          };
          return e;
        })
        .actions((t) => {
          let e = {
            getPlaylists: (0, n.ls)(function* (e) {
              let { page: i = 0, pageSize: s = 20 } = e,
                { playlistsResource: o, modelActionsLogger: u } = (0, n.dU)(t);
              if (
                !(
                  t.tagLoadingState !== r.Gui.RESOLVE ||
                  (t.playlistsLoadingState === r.Gui.PENDING &&
                    t.pendingPages.has("".concat(i))) ||
                  t.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                t.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var c;
                  (t.playlistsLoadingState = r.Gui.PENDING),
                    t.pendingPages.set("".concat(i), i);
                  let e = i * s,
                    a = t.playlistsData.slice(e, e + s),
                    u = yield o.getPlaylists({
                      playlistIds: a.map((t) =>
                        "".concat(t.uid, ":").concat(t.kind),
                      ),
                      resumeStream: !1,
                    });
                  t.requests =
                    (null !== (c = t.requests) && void 0 !== c ? c : 0) + 1;
                  let d = {
                    page: i,
                    perPage: s,
                    total: t.playlistsData.length,
                  };
                  0 === t.playlists.length &&
                    (t.playlists = (0, n.pj)(
                      Array.from({ length: d.total }, () => null),
                    ));
                  let m = u.playlists.map(l.PV);
                  (0, r.AG_)({
                    items: t.playlists,
                    mappedRawItems: m,
                    page: i,
                    pageSize: s,
                  }),
                    (t.pager = d),
                    t.playlistsLoadingState !== r.Gui.IDLE &&
                      (t.playlistsLoadingState = r.Gui.RESOLVE);
                } catch (e) {
                  u.error(e),
                    e instanceof a.du &&
                      (e.statusCode === a.CN.NOT_FOUND ||
                        e.statusCode === a.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = a.CN.NOT_FOUND),
                    t.playlistsLoadingState !== r.Gui.IDLE &&
                      (t.playlistsLoadingState = r.Gui.REJECT);
                } finally {
                  t.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (t.tagLoadingState = r.Gui.IDLE),
                (t.playlistsLoadingState = r.Gui.IDLE),
                t.alreadyRequestedPages.clear(),
                t.pendingPages.clear(),
                (t.title = void 0),
                (t.playlistsData = (0, n.pj)([])),
                (t.playlists = (0, n.pj)([])),
                (t.errorStatusCode = null);
            },
            getTag: (0, n.ls)(function* (i) {
              let { id: l, page: s = 0, pageSize: o = 20 } = i,
                { tagResource: u, modelActionsLogger: c } = (0, n.dU)(t);
              if (t.tagLoadingState !== r.Gui.PENDING)
                try {
                  var d;
                  t.tagLoadingState = r.Gui.PENDING;
                  let i = yield u.getPlaylistIds({ id: l });
                  (t.title =
                    null === (d = i.tag) || void 0 === d ? void 0 : d.name),
                    (t.playlistsData = (0, n.pj)(
                      i.ids.map((t) => ({ uid: t.uid, kind: t.kind })),
                    )),
                    t.tagLoadingState !== r.Gui.IDLE &&
                      (t.tagLoadingState = r.Gui.RESOLVE),
                    yield e.getPlaylists({ page: s, pageSize: o });
                } catch (e) {
                  c.error(e),
                    e instanceof a.du &&
                      (e.statusCode === a.CN.NOT_FOUND ||
                        e.statusCode === a.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = a.CN.NOT_FOUND),
                    t.tagLoadingState !== r.Gui.IDLE &&
                      (t.tagLoadingState = r.Gui.REJECT);
                }
            }),
          };
          return e;
        });
      i(70794);
      var u = i(6397);
    },
    70794: function (t, e, i) {
      "use strict";
      i.d(e, {
        TagNotFoundPage: function () {
          return r;
        },
      });
      var n = i(75441),
        a = i(62569),
        l = i(35551);
      let r = (0, a.Pi)(() => (0, n.jsx)(l.T, {}));
    },
    6397: function (t, e, i) {
      "use strict";
      i.d(e, {
        TagPage: function () {
          return y;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(62569),
        r = i(98730),
        s = i(65067),
        o = i(9317),
        u = i(17392),
        c = i(30948),
        d = i(69947),
        m = i(7797),
        p = i(13534),
        g = i(97141),
        _ = i(450),
        v = i.n(_);
      let y = (0, l.Pi)((t) => {
        var e, i, l;
        let { tagId: _ } = t,
          {
            tag: y,
            settings: { isMobile: f },
          } = (0, p.oR4)(),
          { formatMessage: C } = (0, o.Z)(),
          { contentScrollRef: x, setContentScrollRef: h } = (0, p.$Y6)(),
          k = (0, p.k67)();
        _ || (0, r.notFound)();
        let P = (0, s.useCallback)(
          (t) => {
            y.getPlaylists({ page: t, pageSize: 20 });
          },
          [y],
        );
        y.isNotFound && (0, r.notFound)(),
          (0, s.useEffect)(
            () => () => {
              y.reset();
            },
            [y],
          );
        let L = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return ((0, p.NOh)(y.isResolved),
        y.isNeededToLoad &&
          (0, s.use)(y.getTag({ id: _, page: 0, pageSize: 20 })),
        y.isSomethingWrong)
          ? (0, n.jsx)(c.D, {})
          : (0, n.jsx)(p.Lh6, {
              pageId: p.Rhz.TAG,
              children: (0, n.jsx)(d.I7, {
                scrollElement: x,
                outerTitle: y.title,
                children: (0, n.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, n.jsx)(g.h4, {
                      variant: g.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: k.canBack,
                      children: (0, n.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.title,
                      }),
                    }),
                    (0, n.jsx)(g.Wv, {
                      className: (0, a.W)(v().scrollContainer, v().important),
                      customComponents: L,
                      itemContentCallback: (t) => {
                        var e;
                        let i =
                            null == y
                              ? void 0
                              : null === (e = y.playlists) || void 0 === e
                                ? void 0
                                : e[t],
                          a = C(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: C({ id: "entity-names.playlist" }) },
                          );
                        return i
                          ? (0, n.jsx)(
                              m.ZL,
                              { playlist: i, contentLinesCount: 3 },
                              i.key,
                            )
                          : (0, n.jsx)(g.hi, { "aria-label": a });
                      },
                      totalCount:
                        null !==
                          (i =
                            null == y
                              ? void 0
                              : null === (e = y.pager) || void 0 === e
                                ? void 0
                                : e.total) && void 0 !== i
                          ? i
                          : 0,
                      onGetDataByPage: P,
                      pageSize: 20,
                      totalRequests:
                        null !== (l = y.requests) && void 0 !== l ? l : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: h,
                      context: {
                        listAriaLabel: C(
                          { id: "mixes.albums-list" },
                          { genreName: y.title || "" },
                        ),
                      },
                      isMobileLayout: f,
                      useWindowScroll: f,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    35551: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = i(15898);
    },
    15898: function (t, e, i) {
      "use strict";
      i.d(e, {
        NotFound: function () {
          return g;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(62569),
        r = i(15937),
        s = i(68208),
        o = i(69756),
        u = i(17392),
        c = i(13534),
        d = i(97141),
        m = i(35129),
        p = i.n(m);
      let g = (0, l.Pi)((t) => {
        let { className: e } = t,
          { contentRef: i } = (0, c.$Y6)(),
          l = (0, c.s0h)("/");
        return (
          (0, c.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, a.W)(p().root, { [p().root_desktop]: !i }, e),
            children: [
              (0, n.jsx)(d.nP, {
                withBackwardFallback: "/",
                className: p().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: p().content,
                children: [
                  (0, n.jsx)(o.Icon, {
                    className: p().icon,
                    variant: "musicLogo",
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: (0, a.W)(p().title, p().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    className: (0, a.W)(p().text, p().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: l,
                    className: p().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(r.Z, { id: "navigation.page-main" }),
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
          return n.SomethingWentWrong;
        },
      });
      var n = i(51987);
    },
    51987: function (t, e, i) {
      "use strict";
      i.d(e, {
        SomethingWentWrong: function () {
          return _;
        },
      });
      var n = i(75441),
        a = i(32358),
        l = i(62569),
        r = i(65067),
        s = i(15937),
        o = i(68208),
        u = i(69756),
        c = i(17392),
        d = i(13534),
        m = i(97141),
        p = i(28652),
        g = i.n(p);
      let _ = (0, l.Pi)((t) => {
        let { className: e, withBackwardControl: i = !0 } = t,
          l = (0, r.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: p } = (0, d.$Y6)();
        return (0, n.jsxs)("div", {
          className: (0, a.W)(g().root, e),
          children: [
            i &&
              (0, n.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: (0, a.W)(g().navigation, {
                  [g().navigation_desktop]: !p,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, a.W)(g().content, { [g().content_shrink]: !i }),
              children: [
                (0, n.jsx)(u.Icon, {
                  className: g().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(c.Heading, {
                  className: (0, a.W)(g().title, g().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(c.Caption, {
                  className: (0, a.W)(g().text, g().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(o.Button, {
                  onClick: l,
                  className: g().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(c.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, n.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    63950: function (t) {
      t.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    75908: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__mf9o_",
        item: "ControlsBar_item__4YJMp",
        item_buttonArrow: "ControlsBar_item_buttonArrow__9hTqa",
        controls: "ControlsBar_controls__DcFpX",
        likeIcon: "ControlsBar_likeIcon__g8y02",
        trailerIcon: "ControlsBar_trailerIcon__iH6eY",
        controls_disabled: "ControlsBar_controls_disabled___hlf6",
      };
    },
    53948: function (t) {
      t.exports = {
        description: "HorizontalPlaylistCard_description__KYHZF",
        likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
        tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
        icon: "HorizontalPlaylistCard_icon__LHymu",
      };
    },
    96297: function (t) {
      t.exports = {
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
        trailerButton: "PlaylistCard_trailerButton__Qjg_U",
        control: "PlaylistCard_control__73YUq",
      };
    },
    450: function (t) {
      t.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
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
    92719: function (t, e, i) {
      "use strict";
      var n, a;
      i.d(e, {
        o: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).UNKNOWN = "unknown"),
        (a.MALE = "male"),
        (a.FEMALE = "female");
    },
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 9125, 9779, 7138, 5453, 7873, 9282, 7141, 892,
        1512, 2399, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 34448));
      },
    ),
      (_N_E = t.O());
  },
]);
