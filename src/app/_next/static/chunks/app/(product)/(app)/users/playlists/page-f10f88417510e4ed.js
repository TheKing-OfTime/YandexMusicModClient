(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3624],
  {
    87134: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 6462));
    },
    62383: function (t, e, i) {
      "use strict";
      i.d(e, {
        DL: function () {
          return l;
        },
        F4: function () {
          return a;
        },
      }),
        i(4600);
      let a = (t) => {
          let { containerNodeRect: e, draggingNodeRect: i, transform: a } = t;
          return i && e
            ? (function (t, e, i) {
                let a = { ...t };
                return (
                  e.top + t.y <= i.top
                    ? (a.y = i.top - e.top)
                    : e.bottom + t.y >= i.top + i.height &&
                      (a.y = i.top + i.height - e.bottom),
                  e.left + t.x <= i.left
                    ? (a.x = i.left - e.left)
                    : e.right + t.x >= i.left + i.width &&
                      (a.x = i.left + i.width - e.right),
                  a
                );
              })(a, i, e)
            : a;
        },
        l = (t) => {
          let { transform: e } = t;
          return { ...e, x: 0 };
        };
    },
    26406: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ji: function () {
          return v;
        },
      });
      var a,
        l,
        r,
        n,
        o = i(43218),
        s = i(65067),
        d = i(9317);
      ((a = r || (r = {})).formatDate = "FormattedDate"),
        (a.formatTime = "FormattedTime"),
        (a.formatNumber = "FormattedNumber"),
        (a.formatList = "FormattedList"),
        (a.formatDisplayName = "FormattedDisplayName"),
        ((l = n || (n = {})).formatDate = "FormattedDateParts"),
        (l.formatTime = "FormattedTimeParts"),
        (l.formatNumber = "FormattedNumberParts"),
        (l.formatList = "FormattedListParts");
      var u = function (t) {
        var e = (0, d.Z)(),
          i = t.value,
          a = t.children,
          l = (0, o.__rest)(t, ["value", "children"]);
        return a(e.formatNumberToParts(i, l));
      };
      function c(t) {
        var e = function (e) {
          var i = (0, d.Z)(),
            a = e.value,
            l = e.children,
            r = (0, o.__rest)(e, ["value", "children"]),
            n = "string" == typeof a ? new Date(a || 0) : a;
          return l(
            "formatDate" === t
              ? i.formatDateToParts(n, r)
              : i.formatTimeToParts(n, r),
          );
        };
        return (e.displayName = n[t]), e;
      }
      function m(t) {
        var e = function (e) {
          var i = (0, d.Z)(),
            a = e.value,
            l = e.children,
            r = (0, o.__rest)(e, ["value", "children"]),
            n = i[t](a, r);
          if ("function" == typeof l) return l(n);
          var u = i.textComponent || s.Fragment;
          return s.createElement(u, null, n);
        };
        return (e.displayName = r[t]), e;
      }
      (u.displayName = "FormattedNumberParts"),
        (u.displayName = "FormattedNumberParts");
      var v = m("formatDate");
      m("formatTime"),
        m("formatNumber"),
        m("formatList"),
        m("formatDisplayName"),
        c("formatDate"),
        c("formatTime");
    },
    63524: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return u;
        },
      });
      var a,
        l = i(73484),
        r = i(65067),
        n = {
          6699: (t, e, i) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useDebouncedToggle = void 0);
            let a = i(352),
              l = i(810);
            e.useDebouncedToggle = (t) => {
              let { delay: e, initialState: i, throttleTimeout: r } = t,
                n = (0, l.useRef)(null),
                [o, s] = (0, l.useState)(!!i),
                d = (0, l.useMemo)(
                  () =>
                    (0, a.throttle)(() => {
                      s(!i),
                        n.current && window.clearTimeout(n.current),
                        (n.current = window.setTimeout(() => {
                          s(!!i);
                        }, e));
                    }, r),
                  [e, i, r],
                ),
                u = (0, l.useCallback)(() => {
                  s(!!i), n.current && window.clearTimeout(n.current);
                }, [i]);
              return (
                (0, l.useEffect)(
                  () => () => {
                    n.current && window.clearTimeout(n.current);
                  },
                  [],
                ),
                { state: o, handleDebouncedToggle: d, reset: u }
              );
            };
          },
          2767: (t, e, i) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useForceUpdateRef = void 0);
            let a = i(810);
            e.useForceUpdateRef = () => {
              let [t, e] = (0, a.useState)(null);
              return [
                t,
                (0, a.useCallback)((t) => {
                  e((e) => (e !== t ? t : e));
                }, []),
              ];
            };
          },
          2067: (t, e, i) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useScroll = void 0);
            let a = i(810),
              l = i(361),
              r = i(6699);
            e.useScroll = (t) => {
              let { onScroll: e, listenIsScrolling: i, elementRef: n } = t,
                { state: o, handleDebouncedToggle: s } = (0,
                r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                d = (0, a.useCallback)(() => {
                  i && s(), null == e || e();
                }, [i, s, e]);
              return (
                (0, a.useEffect)(() => {
                  let t = (0, l.getElementFromRefOrElement)(n);
                  if (null === t) return;
                  let e = null != t ? t : window,
                    i = { capture: !0, passive: !0 };
                  return (
                    e.addEventListener("scroll", d, i),
                    () => e.removeEventListener("scroll", d, i)
                  );
                }, [n, d]),
                o
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
            t.exports = l;
          },
          810: (t) => {
            t.exports = a || (a = i.t(r, 2));
          },
        },
        o = {};
      function s(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var i = (o[t] = { exports: {} });
        return n[t](i, i.exports, s), i.exports;
      }
      var d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useElementOffsetY = void 0);
        let t = s(810),
          e = s(2067),
          i = s(2767);
        d.useElementOffsetY = (a) => {
          let [l, r] = (0, i.useForceUpdateRef)(),
            [n, o] = (0, t.useState)(),
            s = (0, t.useCallback)(() => {
              let t = null == l ? void 0 : l.getBoundingClientRect();
              t && o(t.y);
            }, [l]);
          return (
            (0, t.useLayoutEffect)(s),
            (0, e.useScroll)({ onScroll: s, elementRef: a }),
            { forceUpdateRefCallback: r, offsetY: n }
          );
        };
      })(),
        d.__esModule;
      var u = d.useElementOffsetY;
    },
    6462: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i(75441),
        l = i(98730),
        r = i(66634);
      e.default = () => {
        let t = (0, l.useSearchParams)(),
          e = t.get("userId"),
          i = t.get("kind");
        return (
          (e && i) || (0, l.notFound)(),
          (0, a.jsx)(r.i$, { userId: e, kind: i })
        );
      };
    },
    7797: function (t, e, i) {
      "use strict";
      i.d(e, {
        vY: function () {
          return _.EmptyPlaylistBlock;
        },
        Tq: function () {
          return P.HorizontalPlaylistCard;
        },
        ZL: function () {
          return N.PlaylistCard;
        },
        Nn: function () {
          return C;
        },
        d2: function () {
          return S;
        },
        VD: function () {
          return T.PlaylistsCarousel;
        },
        RE: function () {
          return r;
        },
        Q9: function () {
          return c;
        },
        VB: function () {
          return v;
        },
        PB: function () {
          return y;
        },
      });
      var a = i(22874),
        l = i(13534);
      let r = (t) => {
        var e, i;
        let {
          playlist: r,
          generatedPlaylistType: n,
          likesCount: o,
          trailer: s,
          tracksCount: d,
        } = t;
        return (0, a.pj)({
          isAvailable: null === (i = r.available) || void 0 === i || i,
          uuid: r.playlistUuid,
          title: r.title,
          uid: r.uid,
          kind: r.kind,
          coverUri: null === (e = r.cover) || void 0 === e ? void 0 : e.uri,
          generatedPlaylistType: n,
          likesCount: o,
          tracksCount: d,
          trailer: (0, l.GFX)(s),
        });
      };
      var n = i(98730),
        o = i(65067);
      (0, o.cache)(async (t, e) => {
        try {
          let {
            container: i,
            backendHostTld: a,
            locale: r,
            host: o,
            fullUrl: s,
            isRSC: d,
            requestUrl: u,
          } = await (0, l.rbP)();
          if (d)
            return {
              playlist: void 0,
              backendHostTld: a,
              locale: r,
              host: o,
              fullUrl: s,
              requestUrl: u,
            };
          let c = i.get(l.Eug),
            m = await c.getPlaylistWithTracksIds({
              userId: t,
              playlistKind: e,
              resumeStream: !1,
            });
          return (
            "not-found" === m.error && (0, n.notFound)(),
            {
              playlist: m,
              backendHostTld: a,
              locale: r,
              host: o,
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
      }),
        (0, o.cache)(async (t) => {
          (0, l.aIc)(t) || (0, n.notFound)();
          try {
            let {
              container: e,
              backendHostTld: i,
              locale: a,
              host: r,
              fullUrl: o,
              isRSC: s,
              requestUrl: d,
            } = await (0, l.rbP)();
            if (s)
              return {
                playlist: void 0,
                backendHostTld: i,
                locale: a,
                host: r,
                fullUrl: o,
                requestUrl: d,
              };
            let u = e.get(l.lkR),
              c = await u.getPlaylist({
                playlistUuid: t,
                resumeStream: !1,
                richTracks: !1,
              });
            return (
              "not-found" === c.error && (0, n.notFound)(),
              {
                playlist: c,
                backendHostTld: i,
                locale: a,
                host: r,
                fullUrl: o,
                requestUrl: d,
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
      var s = i(10979);
      let d = (t) => ({
          uid: t.uid,
          login: t.login,
          name: t.name,
          sex: t.sex,
          verified: t.verified,
        }),
        u = (t) =>
          (0, a.pj)({
            userInfo: t.userInfo ? d(t.userInfo) : null,
            caseForms: t.caseForms ? (0, l.GA0)(t.caseForms) : null,
          }),
        c = (t) =>
          (0, a.pj)({
            ...(0, s.PV)(t),
            owner: t.owner ? d(t.owner) : void 0,
            description: t.description,
            tags: t.tags,
            modified: t.modified,
            madeFor: t.madeFor ? u(t.madeFor) : null,
          });
      var m = i(64353);
      let v = (t) => {
        var e, i;
        return (0, a.pj)({
          ...(0, s.PV)(t),
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
      var p = i(32399);
      let y = (t) => {
        var e, i;
        return (0, a.pj)({
          ...(0, s.PV)(t),
          tracks:
            null !==
              (i =
                null == t
                  ? void 0
                  : null === (e = t.tracks) || void 0 === e
                    ? void 0
                    : e.map(p.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
      var g = i(40892),
        f = i(92719);
      let h = a.V5.model("PlaylistOwner", {
          uid: a.V5.number,
          login: a.V5.string,
          name: a.V5.string,
          sex: a.V5.enumeration(Object.values(f.o)),
          verified: a.V5.boolean,
        }),
        k = a.V5.model("PlaylistOwner", {
          userInfo: a.V5.maybeNull(h),
          caseForms: a.V5.maybeNull(g.S2),
        }),
        b = a.V5.model("PlaylistTag", { id: a.V5.string, value: a.V5.string }),
        C = s.Cd.props({
          owner: a.V5.maybe(h),
          modified: a.V5.string,
          description: a.V5.maybe(a.V5.string),
          tags: a.V5.maybeNull(a.V5.array(b)),
          madeFor: a.V5.maybeNull(k),
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
              let { experiments: e } = (0, a.yj)(t);
              if (
                !e.checkExperiment(l.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(t.tags) ||
                !t.tags.length
              )
                return null;
              return t.tags.map((t) => t.value).join(", ");
            },
          }))
          .actions((t) => ({
            changeDescription: (0, a.ls)(function* (e) {
              if (!(0, a.fh)(t)) return l.SLo.ERROR;
              if (t.description === e) return l.SLo.OK;
              if (e.length > s.Zn) return l.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: r } = (0, a.dU)(t);
              if (t.canUserChange) {
                let a = t.description;
                t.description = e;
                try {
                  let a = yield i.changePlaylistDescription({
                    description: e,
                    userId: t.uid,
                    playlistKind: t.kind,
                  });
                  return (t.description = a.description), l.SLo.OK;
                } catch (e) {
                  (t.description = a), r.error(e);
                }
              }
              return l.SLo.ERROR;
            }),
            changePlaylistCover: (0, a.ls)(function* (e) {
              if (!(0, a.fh)(t)) return l.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: r } = (0, a.dU)(t);
              try {
                let a = yield i.uploadPlaylistCover({
                  userId: t.uid,
                  formData: e,
                  playlistKind: t.kind,
                });
                return (t.coverUri = a.cover.uri), l.SLo.OK;
              } catch (t) {
                r.error(t);
              }
              return l.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        S = s.$h.props({ artists: a.V5.maybe(a.V5.array(m.Go)) });
      var _ = i(59539),
        P = i(86133),
        N = i(8152),
        T = i(87352);
    },
    6794: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      var a = i(65067),
        l = i(9317);
      let r = (t) => {
        let { formatMessage: e } = (0, l.Z)();
        return (0, a.useMemo)(() => {
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
          let a = e(
            { id: "entity-names.playlist-name" },
            { playlistName: t.title },
          );
          return "".concat(a, " ").concat(i);
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
      var a = i(75441),
        l = i(32358),
        r = i(65067),
        n = i(15937),
        o = i(35846),
        s = i(69756),
        d = i(17392),
        u = i(63950),
        c = i.n(u);
      let m = (t) => {
        let { className: e, isEmptySearch: i } = t,
          u = (0, r.useMemo)(
            () =>
              i
                ? (0, a.jsx)(n.Z, { id: "search-results.not-found-title" })
                : (0, a.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, r.useMemo)(
            () =>
              i
                ? (0, a.jsx)(n.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, a.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, a.jsxs)("div", {
          className: (0, l.W)(c().root, e),
          ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, a.jsx)("div", {
              className: c().iconBackground,
              children: (0, a.jsx)(s.Icon, {
                variant: "search",
                size: "l",
                className: c().icon,
                ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, a.jsx)(d.Heading, {
              variant: "h3",
              size: "xs",
              className: c().title,
              ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: u,
            }),
            (0, a.jsx)(d.Caption, {
              variant: "span",
              size: "l",
              className: c().subtitle,
              ...(0, o.BA)(o.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
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
          return T;
        },
      });
      var a = i(75441),
        l = i(32358),
        r = i(62569),
        n = i(65067),
        o = i(9317),
        s = i(15937),
        d = i(4875),
        u = i(35846),
        c = i(84638),
        m = i(93093),
        v = i(91307),
        p = i(69756),
        y = i(17392),
        g = i(64353),
        f = i(13534),
        h = i(97141),
        k = i(6794),
        b = i(10979),
        C = i(75908),
        S = i.n(C);
      let _ = (0, r.Pi)((t) => {
        var e;
        let { className: i, playlist: r, likeIconSize: o = "xxs" } = t,
          { user: s, trailer: u } = (0, f.oR4)(),
          c = (0, f.qsr)(),
          { sendLikeSearchFeedback: v } = (0, f.sAF)(),
          y = (0, b.SB)(r),
          [g, k] = (0, n.useState)(!1),
          C = (0, m.W)(async () => {
            g || r.isLiked || (k(!0), null == v || v()), await y();
          }),
          _ = (0, f.FTC)(),
          P = (0, m.W)((t) => {
            if ((t.stopPropagation(), c())) {
              t.preventDefault();
              return;
            }
            u.openPlaylistTrailer(r.id), _(d.OB.Playlist, r.id);
          });
        return (0, a.jsxs)("div", {
          className: (0, l.W)(S().root, S().controls, i, {
            [S().controls_disabled]: !r.isAvailable,
          }),
          children: [
            r.isAvailable &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(h.FM, {
                    fallback: (0, a.jsx)(h.dJ, {
                      size: "xs",
                      iconSize: o,
                      className: (0, l.W)(S().item, S().likeIcon),
                      isLiked: r.isLiked,
                      onClick: C,
                      disabled: !s.isAuthorized,
                    }),
                  }),
                  (null === (e = r.trailer) || void 0 === e
                    ? void 0
                    : e.isAvailable) &&
                    (0, a.jsx)(h.FM, {
                      fallback: (0, a.jsx)(h.eP, {
                        className: (0, l.W)(S().item, S().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: P,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, a.jsx)("div", {
              className: (0, l.W)(S().item, S().item_buttonArrow),
              children: (0, a.jsx)(p.Icon, {
                className: h.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var P = i(53948),
        N = i.n(P);
      let T = (0, r.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            pageId: r,
            coverClassName: b,
            playButtonIconSize: C,
            likeIconSize: S,
          } = t,
          { ref: P, intersectionPropertyId: T } = (0, f.VfV)(),
          { from: x } = (0, f.MhG)({ pageId: r }),
          [I, E] = (0, n.useState)(!1),
          V = (0, f.lAI)(),
          L = (0, k.z)(i),
          j = i.title || "",
          { formatMessage: F, formatNumber: A } = (0, o.Z)(),
          D = (0, f.qsr)(),
          { sendNavigateSearchFeedback: O, sendPlaySearchFeedback: R } = (0,
          f.sAF)(),
          w = (0, f.zxW)(),
          {
            isPlaying: B,
            isCurrent: M,
            togglePlay: U,
          } = (0, f.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: x,
              },
              loadContextMeta: !0,
            },
          }),
          G = (0, f.s0h)(i.url),
          W = (0, f.s0h)(i.url, !0),
          z = (0, g.ik)(W, G),
          K = (0, m.W)((t) => {
            null == O || O(),
              w({ to: d.qU.PlaylistScreen }),
              t.preventDefault(),
              z(t);
          }),
          Y = (0, m.W)(() => {
            D() || (I || B || (E(!0), null == R || R()), U(), V(!B));
          }),
          Z = (0, m.W)((t) => {
            (0, v.m)(t, h.$C.ripple), K(t);
          }),
          H = (0, m.W)((t) => {
            t.stopPropagation(), K(t);
          }),
          q = (0, n.useCallback)(
            (t) =>
              (0, a.jsx)(h.Df, {
                isAvailable: i.isAvailable,
                isDisliked: !1,
                coverUri: i.coverUri,
                title: j,
                className: (0, l.W)(h.$C.playButtonCell, b),
                alt: F(
                  { id: "entity-names.playlist-name" },
                  { playlistName: j },
                ),
                ...t,
              }),
            [i, j, b, F],
          ),
          J =
            null == q
              ? void 0
              : q({
                  onPlayButtonClick: Y,
                  isPlaying: B,
                  isCurrent: M,
                  playButtonIconSize: C,
                }),
          Q = (0, n.useMemo)(
            () =>
              i.url && i.isAvailable
                ? (0, a.jsx)(h.rU, {
                    className: (0, l.W)(h.$C.text, h.$C.titleLink),
                    href: i.url,
                    onClick: H,
                    children: j,
                  })
                : (0, a.jsx)(y.Caption, {
                    className: (0, l.W)(h.$C.text, h.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: j,
                  }),
            [H, i.isAvailable, i.url, j],
          ),
          $ = (0, n.useMemo)(() => {
            if (void 0 === i.actualLikesCount || void 0 === i.tracksCount)
              return;
            let t = (0, a.jsx)(y.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              e = i.isLiked ? "likedVariant" : "likeVariant",
              l = ""
                .concat(L, " ")
                .concat(
                  F(
                    { id: "entity-names.tracks-count" },
                    { value: i.tracksCount },
                  ),
                );
            return (0, a.jsxs)("div", {
              className: N().description,
              "aria-label": l,
              children: [
                (0, a.jsxs)("div", {
                  className: N().likesCount,
                  children: [
                    (0, a.jsx)(p.Icon, {
                      className: N().icon,
                      variant: e,
                      size: "xxs",
                    }),
                    (0, a.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: A(i.actualLikesCount),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: N().tracksCount,
                  children: [
                    t,
                    (0, a.jsx)(y.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, a.jsx)(s.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: A(i.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [F, A, L, i.actualLikesCount, i.isLiked, i.tracksCount]);
        return (0, a.jsxs)(h.Md, {
          ref: P,
          "data-intersection-property-id": T,
          className: (0, l.W)(
            h.$C.root,
            { [h.$C.root_disabled]: !i.isAvailable },
            e,
          ),
          "aria-label": i.title || F({ id: "entity-names.playlist" }),
          onClick: Z,
          ...(0, u.BA)(u.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            J,
            (0, a.jsx)(h.u, {
              isDisabled: !i.isAvailable,
              title: Q,
              description: $,
            }),
            (0, a.jsx)(_, { playlist: i, likeIconSize: S }),
          ],
        });
      });
    },
    8152: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistCard: function () {
          return x;
        },
      });
      var a = i(75441),
        l = i(32358),
        r = i(62569),
        n = i(65067),
        o = i(9317),
        s = i(4875),
        d = i(35846),
        u = i(84638),
        c = i(93093),
        m = i(14218),
        v = i(18333),
        p = i(69756),
        y = i(59091),
        g = i(17392),
        f = i(64353),
        h = i(10979),
        k = i(13534),
        b = i(97141),
        C = i(6794),
        S = i(27376),
        _ = i(50705);
      let P = (0, r.Pi)((t) => {
        var e;
        let { playlist: i, onOpenChange: l, open: r, ...n } = t,
          { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: m } =
            (0, k.vLf)(),
          {
            experiments: v,
            settings: { isMobile: p },
            trailer: y,
          } = (0, k.oR4)(),
          g = (0, h.SB)(i),
          f = (0, h.BV)(i),
          C = (0, k.FTC)(),
          { formatMessage: P } = (0, o.Z)(),
          N = (0, k.qsr)(),
          T = v.checkExperiment(k.peG.WebEditorsFeatures, "on"),
          x = (0, _.q3)({
            entityVariant: k.gus.PLAYLIST,
            urlParams: { id: i.uid, kind: i.kind },
          });
        (0, k.ZP4)(r);
        let I = (0, c.W)(() => {
          if (u) {
            m();
            return;
          }
          N() || (y.openPlaylistTrailer(i.id), C(s.OB.Playlist, i.id));
        });
        return (0, a.jsxs)(S.v2, {
          title: i.title,
          onOpenChange: l,
          open: r,
          offsetOptions: 10,
          isMobile: p,
          ariaLabel: P({ id: "interface-actions.context-menu" }),
          containerProps: (0, d.BA)(d.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...n,
          children: [
            T &&
              (0, a.jsx)(_.ZY, {
                entityVariant: k.gus.PLAYLIST,
                adminUrl: i.isFavouritePlaylist ? void 0 : x,
              }),
            !p && (0, a.jsx)(b.Zd, { onClick: f, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, a.jsx)(b.xZ, { onClick: g, isLiked: i.isLiked }),
            (null === (e = i.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) &&
              (0, a.jsx)(b.NB, { onClick: I, disabled: !i.isAvailable }),
          ],
        });
      });
      var N = i(96297),
        T = i.n(N);
      let x = (0, r.Pi)((t) => {
        let {
            className: e,
            playlist: i,
            children: r,
            contentLinesCount: S,
            customDescription: _,
          } = t,
          { ref: N, intersectionPropertyId: x } = (0, k.VfV)(),
          { trailer: I, user: E } = (0, k.oR4)(),
          { from: V, utmLink: L } = (0, k.MhG)({
            contextId: i.uuid,
            contextType: u.A.Playlist,
          }),
          { formatMessage: j } = (0, o.Z)(),
          {
            sendLikeSearchFeedback: F,
            sendNavigateSearchFeedback: A,
            sendPlaySearchFeedback: D,
          } = (0, k.sAF)(),
          [O, R] = (0, n.useState)(!1),
          [w, B] = (0, n.useState)(!1),
          [M, U] = (0, n.useState)(!1),
          G = (0, C.z)(i),
          W = (0, h.SB)(i),
          z = (0, h.BV)(i),
          K = (0, k.zxW)(),
          Y = (0, k.lAI)(),
          Z = (0, k.s0h)(i.url),
          H = (0, k.s0h)(i.url, !0),
          q = (0, f.ik)(H, Z),
          J = (0, k.FTC)(),
          Q = (0, k.qsr)(),
          $ = (0, c.W)((t) => {
            if ((t.stopPropagation(), Q())) {
              t.preventDefault();
              return;
            }
            I.setUtmLink(L),
              I.openPlaylistTrailer(i.id),
              J(s.OB.Playlist, i.id);
          }),
          [X, tt] = (0, n.useState)(!1),
          { isPlaying: te, togglePlay: ti } = (0, k.qmq)({
            playContextParams: {
              contextData: {
                type: u.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: V,
                utmLink: L,
              },
              loadContextMeta: !0,
            },
          }),
          ta = (0, c.W)(() => {
            K({ to: s.qU.PlaylistScreen }), null == A || A();
          }),
          tl = (0, c.W)((t) => {
            ta(), q(t);
          }),
          tr = (0, c.W)(() => {
            Q() || (O || te || (R(!0), null == D || D()), ti(), Y(!te));
          }),
          tn = (0, c.W)(() => {
            w || i.isLiked || (B(!0), null == F || F()), W();
          }),
          to = (0, c.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          ts = (0, c.W)((t) => {
            U(t), tt(t);
          }),
          td = (0, n.useMemo)(() => {
            var t;
            return _
              ? (0, a.jsx)(
                  g.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: _,
                  },
                  i.getKey("description"),
                )
              : (null === (t = i.artists) || void 0 === t ? void 0 : t.length)
                ? (0, a.jsx)(
                    f.jO,
                    {
                      className: T().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: T().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [_, i]),
          tu = (0, m.V)(() => {
            if (!i.isFavouritePlaylist)
              return (0, a.jsx)(
                b.dJ,
                {
                  className: (0, l.W)(T().likeButton, T().control),
                  isLiked: i.isLiked,
                  onClick: tn,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !E.isAuthorized,
                },
                i.getKey("LikeButton"),
              );
          }),
          tc = (0, n.useMemo)(() => {
            var t;
            if (
              null == i
                ? void 0
                : null === (t = i.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable
            )
              return (0, a.jsx)(
                b.xf,
                {
                  children: (0, a.jsx)(
                    b.eP,
                    {
                      className: (0, l.W)(T().trailerButton, T().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: $,
                    },
                    i.getKey("TrailerButton"),
                  ),
                },
                i.getKey("PlaylilstCardTrailerTooltip"),
              );
          }, [$, i]),
          tm = (0, n.useMemo)(
            () =>
              (0, a.jsx)(
                b.RT,
                {
                  onClick: z,
                  isPinned: i.isPinned,
                  className: (0, l.W)(T().pinButton, T().control),
                  withRipple: !1,
                },
                i.getKey("PinButton"),
              ),
            [z, i],
          ),
          tv = (0, n.useMemo)(
            () =>
              (0, a.jsx)(y.Paper, {
                className: T().cover,
                radius: "s",
                withShadow: !0,
                ...(0, d.BA)(d.bG.playlist.PLAYLIST_CARD),
                children: (0, a.jsxs)("div", {
                  className: T().coverBlock,
                  onClick: tl,
                  children: [
                    (0, a.jsx)(b.BE, {
                      className: T().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: G,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, a.jsx)(v.kk, {
                      isVisible: M || X,
                      className: T().controls,
                      playControl: (0, a.jsx)(
                        b.JM,
                        {
                          className: (0, l.W)(T().playButton, T().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: tr,
                          isPlaying: te,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: tu,
                      menuControl: (0, a.jsx)(
                        P,
                        {
                          playlist: i,
                          onOpenChange: ts,
                          open: M,
                          onClick: to,
                          className: (0, l.W)(T().menuButton, T().control),
                          icon: (0, a.jsx)(p.Icon, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          ...(0, d.BA)(
                            d.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        },
                        i.getKey("PlaylistContextMenu"),
                      ),
                      pinControl: tm,
                      trailerControl: tc,
                    }),
                  ],
                }),
              }),
            [tl, i, G, M, X, tr, te, tu, ts, to, tm, tc],
          ),
          tp = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, a.jsxs)(v.m7, {
          ref: N,
          "aria-label": G,
          className: (0, l.W)(T().root, e),
          title: (0, a.jsx)(g.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, d.BA)(d.bG.playlist.PLAYLIST_TITLE),
            children: (0, a.jsx)(b.rU, {
              className: T().titleLink,
              href: i.url,
              onClick: ta,
              children: i.title,
            }),
          }),
          srTitle: (0, a.jsx)(b.rU, {
            href: i.url,
            onClick: ta,
            children: i.title,
          }),
          "data-intersection-property-id": x,
          contentLinesCount: S,
          view: tv,
          description: td,
          ...(0, d.BA)(d.bG.playlist.PLAYLIST_ITEM),
          children: [
            tp &&
              (0, a.jsx)(b.DB, {
                ariaLabel: j(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: W,
              }),
            r,
          ],
        });
      });
    },
    87352: function (t, e, i) {
      "use strict";
      i.d(e, {
        PlaylistsCarousel: function () {
          return s;
        },
      });
      var a = i(75441),
        l = i(65067),
        r = i(97141),
        n = i(8152);
      let o = (t) => {
          let {
            forwardRef: e,
            isShimmerVisible: i,
            isShimmerActive: l,
            title: o,
            description: s,
            playlists: d,
            containerClassName: u,
            className: c,
            headerClassName: m,
            viewAllActionLink: v,
            headingVariant: p,
            ...y
          } = t;
          return (0, a.jsx)(r.HY, {
            isShimmerVisible: i,
            isShimmerActive: l,
            className: c,
            headerClassName: m,
            containerClassName: u,
            ref: e,
            title: o,
            description: s,
            viewAllActionLink: v,
            headingVariant: p,
            ...y,
            children:
              null == d
                ? void 0
                : d.map((t) =>
                    (0, a.jsx)(
                      n.PlaylistCard,
                      { playlist: t, contentLinesCount: 3 },
                      t.key,
                    ),
                  ),
          });
        },
        s = (0, l.forwardRef)((t, e) => (0, a.jsx)(o, { forwardRef: e, ...t }));
    },
    54306: function (t, e, i) {
      "use strict";
      i.d(e, {
        wQ: function () {
          return T;
        },
        Bd: function () {
          return x;
        },
        s$: function () {
          return N;
        },
        lj: function () {
          return E.PromoLandingSonataControls;
        },
        $Z: function () {
          return V.RepeatButton;
        },
        P4: function () {
          return L.ShuffleButton;
        },
        WP: function () {
          return j.SonataControls;
        },
        ps: function () {
          return I;
        },
        NI: function () {
          return F.SonataVideoControls;
        },
        jN: function () {
          return S;
        },
        uA: function () {
          return o;
        },
        RN: function () {
          return d;
        },
        B5: function () {
          return m;
        },
        tz: function () {
          return v.useOnRepeatClick;
        },
        md: function () {
          return p.useOnShuffleClick;
        },
        K4: function () {
          return y.useToggleMute;
        },
      });
      var a = i(22874),
        l = i(81046),
        r = i(64353),
        n = i(13534);
      let o = (t) => {
        if (t.data.type === l.A.Clip) {
          var e;
          let i = t.data.meta;
          if (!i.clipId) return null;
          let l =
              null === (e = i.artists) || void 0 === e
                ? void 0
                : e.map((t) => (0, r.tR)({ artist: t })),
            { available: o, disclaimers: s } = (0, n.NuW)(i);
          return (0, a.pj)({
            clipId: i.clipId,
            title: i.title,
            thumbnail: i.thumbnail,
            duration: i.duration,
            previewUrl: i.previewUrl,
            isAvailable: o,
            disclaimers: s,
            artists: l,
            isHiddenFromSonataQueue: t.hidden,
          });
        }
        return null;
      };
      var s = i(98375);
      let d = (t, e) => ({ type: s.RX.Unloaded, meta: { id: t, albumId: e } });
      var u = i(73447),
        c = i(32399);
      let m = (t) => {
        var e, i, o;
        switch (t.data.type) {
          case l.A.Generative: {
            let i = t.data.meta,
              l = (0, n.Usz)(null == i ? void 0 : i.derivedColors);
            return (0, a.pj)({
              id: String(i.id),
              coverUri: i.imageUrl,
              title: null !== (e = i.title) && void 0 !== e ? e : "",
              isAvailable: !0,
              isRemoved: !1,
              averageColor: l,
            });
          }
          case l.A.Clip:
          case s.RX.Unloaded:
            return null;
          default: {
            let e = t.data.meta,
              l =
                null === (i = e.artists) || void 0 === i ? void 0 : i.map(r.d),
              n = null === (o = e.albums) || void 0 === o ? void 0 : o.map(u.N);
            return (0, a.pj)({
              ...(0, c.Ni)(e),
              artists: l,
              albums: n,
              isHiddenFromSonataQueue: t.hidden,
            });
          }
        }
      };
      var v = i(61925),
        p = i(33856),
        y = i(70419),
        g = i(23172),
        f = i(37285),
        h = i(84638),
        k = i(95817),
        b = i(6232);
      let C = a.V5.model("UnloadedEntityMeta", {
          id: a.V5.union(a.V5.number, a.V5.string),
          albumId: a.V5.maybe(a.V5.union(a.V5.number, a.V5.string)),
        }),
        S = a.V5.model("UnloadedEntityData", {
          meta: C,
          type: a.V5.literal(s.RX.Unloaded),
        });
      var _ = i(94123),
        P = i(89428);
      let N = c.yp
          .props({
            artists: a.V5.array(r.Go),
            albums: a.V5.array(u.KX),
            chart: a.V5.maybe(P.BH),
            isHiddenFromSonataQueue: a.V5.maybe(a.V5.boolean),
          })
          .views((t) => ({
            get idWithContext() {
              return t.albumId ? "".concat(t.id, ":").concat(t.albumId) : t.id;
            },
            get artistsNames() {
              var e;
              return null === (e = t.artists) || void 0 === e
                ? void 0
                : e.map((t) => t.name).join(", ");
            },
            get mainArtist() {
              var i, a;
              return null !==
                (a =
                  null === (i = t.artists) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== a
                ? a
                : null;
            },
            get mainAlbum() {
              var l, r;
              return null !==
                (r = null === (l = t.albums) || void 0 === l ? void 0 : l[0]) &&
                void 0 !== r
                ? r
                : null;
            },
            get index() {
              var n, o, s;
              return null !==
                (s =
                  null === (o = t.albums[0]) || void 0 === o
                    ? void 0
                    : null === (n = o.trackPosition) || void 0 === n
                      ? void 0
                      : n.index) && void 0 !== s
                ? s
                : null;
            },
            get isPodcast() {
              var d;
              return (
                t.isTrackPodcast ||
                (null === (d = this.mainAlbum) || void 0 === d
                  ? void 0
                  : d.isPodcast)
              );
            },
            get isAudiobook() {
              return t.type === _.V.AUDIOBOOK;
            },
            get isFairyTale() {
              return t.type === _.V.FAIRY_TALE;
            },
            get isNonMusic() {
              return this.isPodcast || this.isAudiobook || this.isFairyTale;
            },
            get isAvailableOnlyForPlus() {
              var u;
              return !!(null === (u = this.mainAlbum) || void 0 === u
                ? void 0
                : u.isAvailableOnlyForPlus);
            },
          }))
          .actions((t) => ({
            changeTrackInfo: (0, a.ls)(function* (e, i) {
              let { ugcResource: l, modelActionsLogger: o } = (0, a.dU)(t);
              if (
                t.artists.map((t) => t.name).join(", ") === i &&
                e === t.title
              )
                return n.SLo.OK;
              try {
                var s;
                yield l.changeTrack({ trackId: t.id, title: e, artist: i }),
                  (t.title = e);
                let o =
                  (null === (s = t.artists[0]) || void 0 === s
                    ? void 0
                    : s.id) || "0";
                if (((t.artists = (0, a.pj)([])), i)) {
                  let e = r.Go.create({ id: o, name: i, isAvailable: !0 });
                  t.artists = (0, a.pj)([e]);
                }
                return n.SLo.OK;
              } catch (t) {
                return o.error(t), n.SLo.ERROR;
              }
            }),
          })),
        T = a.V5.model("BaseSonataState", {
          contextType: a.V5.maybeNull(a.V5.enumeration(Object.values(h.A))),
          contextId: a.V5.maybeNull(a.V5.string),
          entityMeta: a.V5.maybeNull(N),
          status: a.V5.enumeration(Object.values(s.FY)),
          canMoveForward: a.V5.boolean,
          canMoveBackward: a.V5.boolean,
          canSpeed: a.V5.boolean,
          repeatMode: a.V5.enumeration(Object.values(b.zq)),
          canChangeRepeatMode: a.V5.boolean,
          volume: a.V5.maybe(a.V5.number),
          speed: a.V5.maybe(a.V5.number),
          position: a.V5.maybeNull(a.V5.number),
          duration: a.V5.maybeNull(a.V5.number),
          canShuffle: a.V5.boolean,
          shuffle: a.V5.boolean,
          quality: a.V5.enumeration(Object.values(k.n)),
          unloadedEntitiesData: a.V5.maybe(a.V5.array(S)),
        })
          .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
          .views((t) => ({
            get unloadedEntitiesDataFromModels() {
              var e;
              return null !== (e = t.volatileUnloadedEntitiesData) &&
                void 0 !== e
                ? e
                : (0, f.ZN)(t.unloadedEntitiesData);
            },
            get isVibeContext() {
              return t.contextType === h.A.Vibe;
            },
            get isGenerativeContext() {
              return t.contextType === h.A.Generative;
            },
            get isPaused() {
              return t.status === s.FY.PAUSED;
            },
            get isPlaying() {
              return t.status === s.FY.PLAYING;
            },
            get isContextRepeatMode() {
              return t.repeatMode === b.zq.CONTEXT;
            },
            get isOneRepeatMode() {
              return t.repeatMode === b.zq.ONE;
            },
          }))
          .actions((t) => ({
            setContextId: (e) => {
              t.contextId = String(e);
            },
            setContextType: (e) => {
              t.contextType = e;
            },
            setEntityMeta: (e) => {
              e && e.data.meta && (t.entityMeta = m(e));
            },
            setUnloadedEntitiesData: (e) => {
              e &&
                ((t.volatileUnloadedEntitiesData = (0, g.Z)(e)),
                (t.unloadedEntitiesData = (0, a.pj)(e)));
            },
            resetUnloadedEntitiesData: () => {
              (t.volatileUnloadedEntitiesData = void 0),
                (t.unloadedEntitiesData = void 0);
            },
            setStatus: (e) => {
              t.status = e;
            },
            setCanMoveForward: (e) => {
              t.canMoveForward = e;
            },
            setCanMoveBackward: (e) => {
              t.canMoveBackward = e;
            },
            setVolume: (e) => {
              t.volume = e;
            },
            setCanSpeed: (e) => {
              t.canSpeed = e;
            },
            setSpeed: (e) => {
              t.speed = e;
            },
            setRepeatMode: (e) => {
              t.repeatMode = e;
            },
            setCanChangeRepeatMode: (e) => {
              t.canChangeRepeatMode = e;
            },
            setCanShuffle: (e) => {
              t.canShuffle = e;
            },
            setShuffle: (e) => {
              t.shuffle = e;
            },
            setQuality: (e) => {
              t.quality = e;
            },
            setPosition: (e) => {
              t.position = e;
            },
            setDuration: (e) => {
              t.duration = e;
            },
          })),
        x = i(14924)
          .Vc.props({
            artists: a.V5.array(r.Go),
            isHiddenFromSonataQueue: a.V5.maybe(a.V5.boolean),
          })
          .views((t) => ({
            get idWithContext() {
              return String(t.clipId);
            },
          })),
        I = T.props({
          playlistFilter: a.V5.maybe(a.V5.string),
          areCoresRegistered: a.V5.boolean,
          isVHCoreRegistered: a.V5.boolean,
          shouldApplyYnisonState: a.V5.optional(a.V5.boolean, !0),
        })
          .actions((t) => ({
            setIsVHCoreRegistered(e) {
              t.isVHCoreRegistered = e;
            },
            setPlaylistFilter: (e) => {
              t.playlistFilter = e;
            },
            setCoresAsRegistered: (e) => {
              t.areCoresRegistered = e;
            },
            setShouldApplyYnisonState: (e) => {
              t.shouldApplyYnisonState = e;
            },
          }))
          .named("SonataState");
      i(92569), i(85051);
      var E = i(80045),
        V = i(94544),
        L = i(54723),
        j = i(91978),
        F = i(32715);
    },
    66634: function (t, e, i) {
      "use strict";
      i.d(e, {
        i$: function () {
          return E.PlaylistPage;
        },
        nb: function () {
          return I;
        },
        X$: function () {
          return V.PlaylistShimmersPage;
        },
      }),
        i(79294);
      var a,
        l,
        r,
        n,
        o = i(22874),
        s = i(13534);
      ((a = r || (r = {})).MAJOR = "Major"),
        (a.NAME = "Название"),
        (a.ARTISCS = "Исполнители"),
        (a.LINK = "Ссылка"),
        (a.ALBUM_ID = "albumId"),
        (a.TRACK_ID = "trackId"),
        ((l = n || (n = {})).MAJOR = "major"),
        (l.NAME = "name"),
        (l.ARTISCS = "artists"),
        (l.LINK = "link"),
        (l.ALBUM_ID = "albumId"),
        (l.TRACK_ID = "trackId");
      let d = o.V5.model("EditorFeature", {
        shouldShowMajor: o.V5.boolean,
        shouldShowGenre: o.V5.boolean,
        shouldShowDuplicate: o.V5.boolean,
        colorMajorMap: o.V5.map(o.V5.string),
        duplicate: o.V5.map(o.V5.number),
      })
        .views((t) => {
          let e = {
            getNumberGroupTrackDuplicated(e) {
              let { experiments: i } = (0, o.yj)(t);
              if (e && i.checkExperiment(s.peG.WebEditorsFeatures, "on"))
                return t.duplicate.get(String(e.id));
            },
            shouldHighlightDublicatedTrack: (i) =>
              !!(t.shouldShowDuplicate && e.getNumberGroupTrackDuplicated(i)),
            get sheetDataPlaylist() {
              var i, a;
              let { playlist: e } = (0, o.yj)(t);
              return {
                data: {
                  sheet: "Playlist",
                  columns: [
                    { label: r.MAJOR, value: n.MAJOR },
                    { label: r.NAME, value: n.NAME },
                    { label: r.ARTISCS, value: n.ARTISCS },
                    { label: r.LINK, value: n.LINK },
                    { label: r.ALBUM_ID, value: n.ALBUM_ID },
                    { label: r.TRACK_ID, value: n.TRACK_ID },
                  ],
                  content: e.items
                    .filter((t) => t.data)
                    .map((t) => {
                      var e, i, a, l, r, n, o, s, d, u, c, m;
                      let v = (
                        null === (e = t.data) || void 0 === e ? void 0 : e.url
                      )
                        ? ""
                            .concat(location.origin)
                            .concat(
                              null === (i = t.data) || void 0 === i
                                ? void 0
                                : i.url,
                            )
                        : "";
                      return {
                        major:
                          null !==
                            (s =
                              null === (l = t.data) || void 0 === l
                                ? void 0
                                : null === (a = l.major) || void 0 === a
                                  ? void 0
                                  : a.name) && void 0 !== s
                            ? s
                            : "",
                        name:
                          null !==
                            (d =
                              null === (r = t.data) || void 0 === r
                                ? void 0
                                : r.title) && void 0 !== d
                            ? d
                            : "",
                        artists:
                          null !==
                            (u =
                              null === (n = t.data) || void 0 === n
                                ? void 0
                                : n.artists.map((t) => t.name).join(", ")) &&
                          void 0 !== u
                            ? u
                            : "",
                        link: v,
                        albumId:
                          null !== (c = t.albumId) && void 0 !== c ? c : "",
                        trackId:
                          null !==
                            (m =
                              null === (o = t.data) || void 0 === o
                                ? void 0
                                : o.id) && void 0 !== m
                            ? m
                            : "",
                      };
                    }),
                },
                settings: {
                  fileName:
                    (null === (i = e.meta) || void 0 === i ? void 0 : i.uid) &&
                    (null === (a = e.meta) || void 0 === a ? void 0 : a.kind)
                      ? "%"
                          .concat(e.meta.uid, "%_%")
                          .concat(e.meta.kind, "%_to_text")
                      : "to_text",
                },
              };
            },
          };
          return e;
        })
        .actions((t) => ({
          exportToExcel: (0, o.ls)(function* () {
            let { modelActionsLogger: e } = (0, o.dU)(t);
            try {
              let e = yield Promise.all([i.e(6875), i.e(5617), i.e(8017)]).then(
                  i.t.bind(i, 55747, 23),
                ),
                { data: a, settings: l } = t.sheetDataPlaylist;
              if (0 === a.content.length) return s.SLo.ERROR;
              return (
                yield new Promise((t) => {
                  e.default([a], l, () => t());
                }),
                s.SLo.OK
              );
            } catch (t) {
              return e.error(t), s.SLo.ERROR;
            }
          }),
          getAllPlaylistItems: (0, o.ls)(function* (e) {
            let { batchSize: i } = e,
              { playlist: a } = (0, o.yj)(t),
              l = a.items.length - 1;
            for (let t = 0; t < l; t += i)
              yield a.getTracksByRange({
                startIndex: t,
                endIndex: Math.min(t + i, l),
              });
          }),
          getColorForMajor(e) {
            let i = t.colorMajorMap.get(e);
            if (i) return i;
            let a = (0, s.kDs)(e),
              l = "hsl(".concat(a, ", 50%, 50%)");
            return t.colorMajorMap.set(e, l), l;
          },
          getDuplicates(e) {
            let i = new Map();
            e.forEach((t) => {
              let e = i.get(t.id) || 0;
              i.set(t.id, e + 1);
            });
            let a = 1;
            i.forEach((e, i) => {
              e > 1 && (t.duplicate.set(String(i), a), a++);
            });
          },
          toggleShouldShowMajor() {
            t.shouldShowMajor = !t.shouldShowMajor;
          },
          toggleShouldShowGenre() {
            t.shouldShowGenre = !t.shouldShowGenre;
          },
          toggleShouldShowDuplicate() {
            t.shouldShowDuplicate = !t.shouldShowDuplicate;
          },
          reset() {
            (t.shouldShowDuplicate = !1),
              (t.shouldShowGenre = !1),
              (t.shouldShowMajor = !1),
              (t.colorMajorMap = (0, o.pj)({})),
              (t.duplicate = (0, o.pj)({}));
          },
        }));
      var u = i(37285),
        c = i(62726),
        m = i(15186),
        v = i(86108),
        p = i(7797),
        y = i(1150),
        g = i(10979),
        f = i(40892);
      let h = (t, e) =>
          e.map((e) => {
            let i = t[e];
            return (null == i ? void 0 : i.albumId)
              ? "".concat(i.id, ":").concat(i.albumId)
              : String(null == i ? void 0 : i.id);
          }),
        k = (t, e) => {
          let { startIndex: i, endIndex: a } = e,
            l = [];
          for (let e = i; e <= a; e++) {
            var r, n;
            ((null === (r = t[e]) || void 0 === r ? void 0 : r.loadingState) ===
              s.Gui.IDLE ||
              (null === (n = t[e]) || void 0 === n
                ? void 0
                : n.loadingState) === s.Gui.REJECT) &&
              l.push(e);
          }
          return l;
        };
      var b = i(54306);
      let C = (t) => t.map((t) => (0, b.RN)(t.id, t.albumId || void 0)),
        S = (t, e) => {
          let [i, a] = t.split(":");
          return (0, o.pj)({
            id: i || "",
            albumId: a || "",
            key: "".concat(i, "-").concat(e),
            data: null,
            loadingState: s.Gui.IDLE,
          });
        },
        _ = (t) => {
          var e, i, a;
          let l = null === (e = t.tracks) || void 0 === e ? void 0 : e.map(v.M),
            r = (null === (i = t.tracks) || void 0 === i ? void 0 : i.length)
              ? null === (a = t.tracks) || void 0 === a
                ? void 0
                : a.map((t, e) => S(t, e))
              : [];
          return {
            id: t.id,
            name: t.name,
            tracks: (0, o.pj)(r),
            unloadedTracks: (0, o.pj)(l),
          };
        },
        P = (t) => {
          let e = t.filters.map(_);
          if (e.length < 3) return [];
          let i = e.find((t) => t.id === v.W.ALL);
          if (!i) return [];
          let a = e.filter((t) => t.tracks.length >= 8);
          return a.length < 2 ? [] : [i].concat(a.slice(0, 7));
        },
        N = o.V5.compose(
          o.V5.model("PlaylistPageFilters", {
            items: o.V5.maybeNull(o.V5.array(v.Tb)),
            activeFilter: o.V5.maybe(o.V5.string),
            activeFilterName: o.V5.maybeNull(o.V5.string),
            shouldSendEventOnTabOpened: o.V5.boolean,
            shouldSendEventOnTabLoaded: o.V5.boolean,
          }),
          f.fu,
          f.Al,
        )
          .views((t) => {
            let e = {
              get isShimmerVisible() {
                return t.isRejected || t.isLoading;
              },
              get activeFilterIndex() {
                var i;
                let e =
                  null === (i = t.items) || void 0 === i
                    ? void 0
                    : i.findIndex((e) => e.id === t.activeFilter);
                return e && e > -1 ? e : 0;
              },
              get analyticsParamsActiveFilterIndex() {
                return e.activeFilterIndex + 1;
              },
            };
            return e;
          })
          .actions((t) => {
            let e = {
              getFilters: (0, o.ls)(function* () {
                var i, a;
                let { filtersResource: l, modelActionsLogger: r } = (0, o.dU)(
                    t,
                  ),
                  { sonataState: n, playlist: d } = (0, o.yj)(t);
                if (
                  t.isLoading ||
                  !(null === (i = d.items) || void 0 === i ? void 0 : i.length)
                )
                  return;
                let u =
                  d.items.map((t) => String((0, m.i)(t.id, t.albumId))) || [];
                try {
                  t.loadingState = s.Gui.PENDING;
                  let i = yield l.getTracksFilters({ trackIds: u });
                  (t.items = (0, o.pj)(P(i))),
                    e.setActiveFilter(n.playlistFilter),
                    e.getFilterName(n.playlistFilter || v.W.ALL);
                  let r =
                    null === (a = t.items) || void 0 === a
                      ? void 0
                      : a.find((e) => e.id === t.activeFilter);
                  r &&
                    (d.setItems(r.tracks),
                    n.setUnloadedEntitiesData(C(d.items))),
                    (t.loadingState = s.Gui.RESOLVE);
                } catch (e) {
                  r.error(e), (t.loadingState = s.Gui.REJECT);
                }
              }),
              getFilterName: (0, o.ls)(function* (e) {
                let { filtersResource: i, modelActionsLogger: a } = (0, o.dU)(
                  t,
                );
                try {
                  let a = yield i.getFilterName({ filterId: e });
                  t.activeFilterName = a.name;
                } catch (t) {
                  a.error(t);
                }
              }),
              handleFilterClick(i) {
                if (!(0, o.fh)(t)) return;
                let { sonataState: a, playlist: l } = (0, o.yj)(t);
                e.setActiveFilter(i.id),
                  e.getFilterName(i.id),
                  l.setItems(t.activeFilter ? i.tracks : l.initialItems),
                  a.setUnloadedEntitiesData(C(l.items)),
                  e.setShouldSendEventOnTabOpened(!0);
              },
              setActiveFilter(e) {
                e !== v.W.ALL
                  ? (t.activeFilter = e)
                  : (t.activeFilter = void 0);
              },
              setShouldSendEventOnTabOpened(e) {
                t.shouldSendEventOnTabOpened = e;
              },
              setShouldSendEventOnTabLoaded(e) {
                t.shouldSendEventOnTabLoaded = e;
              },
              reset() {
                t.destroyItems([t.items]),
                  (t.loadingState = s.Gui.IDLE),
                  (t.activeFilter = void 0),
                  (t.activeFilterName = null),
                  (t.shouldSendEventOnTabOpened = !0),
                  (t.shouldSendEventOnTabLoaded = !0);
              },
            };
            return e;
          }),
        T = (t, e) =>
          e.map((e) => {
            let i = t.find((t) => String(t.id) === e);
            return (null == i ? void 0 : i.albumId)
              ? "".concat(e, ":").concat(i.albumId)
              : e;
          }),
        x = o.V5.compose(
          o.V5.model("PlaylistPageSearch", {
            errorStatusCode: o.V5.maybeNull(o.V5.number),
            text: o.V5.string,
            playlistTrackIds: o.V5.maybeNull(o.V5.array(o.V5.string)),
            suggestedTrackIds: o.V5.maybeNull(o.V5.array(o.V5.string)),
            additionTrackInProggress: o.V5.maybeNull(o.V5.string),
            tracks: o.V5.maybeNull(o.V5.array(y.le)),
            isFocused: o.V5.optional(o.V5.boolean, !1),
          }),
          f.fu,
        )
          .views((t) => ({
            get isLoading() {
              return t.isNeededToLoad || t.loadingState === s.Gui.PENDING;
            },
            get hasText() {
              return !!t.text.length;
            },
            get suggestedTracks() {
              var e;
              return null === (e = t.suggestedTrackIds) || void 0 === e
                ? void 0
                : e.map((e) => {
                    var i;
                    return (
                      (null === (i = t.tracks) || void 0 === i
                        ? void 0
                        : i.find((t) => t.id === e)) || null
                    );
                  });
            },
            get playlistTracks() {
              let e = [...(t.playlistTrackIds || [])];
              return (
                t.additionTrackInProggress &&
                  e.unshift(t.additionTrackInProggress),
                null == e
                  ? void 0
                  : e.map((e) => {
                      var i;
                      return (
                        (null === (i = t.tracks) || void 0 === i
                          ? void 0
                          : i.find((t) => {
                              var i;
                              return (
                                ((null === (i = t.mainAlbum) || void 0 === i
                                  ? void 0
                                  : i.id) && e.includes(":")
                                  ? "".concat(t.id, ":").concat(t.mainAlbum.id)
                                  : t.id) === e
                              );
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((t) => {
            let e = {
              getTracksMeta: (0, o.ls)(function* () {
                let { tracksResource: e, modelActionsLogger: i } = (0, o.dU)(t),
                  a = [...(t.playlistTrackIds || [])].concat(
                    t.suggestedTrackIds || [],
                  );
                try {
                  let i = yield e.getTracksMeta({
                    trackIds: a,
                    removeDuplicates: !0,
                    withProgress: !0,
                  });
                  (t.tracks = (0, o.pj)(
                    null == i ? void 0 : i.map((t) => (0, y.Vt)(t)),
                  )),
                    t.loadingState !== s.Gui.IDLE &&
                      (t.loadingState = s.Gui.RESOLVE);
                } catch (t) {
                  i.error(t);
                }
                return null;
              }),
              getTracks: (0, o.ls)(function* (i) {
                let { uid: a, kind: l } = i,
                  { searchPlaylistResource: r, modelActionsLogger: n } = (0,
                  o.dU)(t);
                if (
                  t.loadingState === s.Gui.PENDING ||
                  !t.hasText ||
                  !(0, o.fh)(t)
                )
                  return;
                let { playlist: d } = (0, o.yj)(t);
                try {
                  var u, m;
                  t.loadingState = s.Gui.PENDING;
                  let { playlistTrackIds: i = [], suggestedTrackIds: n = [] } =
                      yield r.getTrackIds({ uid: a, kind: l, part: t.text }),
                    c = T(d.items, i);
                  (t.playlistTrackIds = (0, o.pj)(c)),
                    (t.suggestedTrackIds = (0, o.pj)(n)),
                    ((null === (u = t.playlistTrackIds) || void 0 === u
                      ? void 0
                      : u.length) || 0) +
                      ((null === (m = t.suggestedTrackIds) || void 0 === m
                        ? void 0
                        : m.length) || 0) >
                    0
                      ? e.getTracksMeta()
                      : (t.loadingState = s.Gui.RESOLVE);
                } catch (e) {
                  n.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                    t.loadingState !== s.Gui.IDLE &&
                      (t.loadingState = s.Gui.REJECT);
                }
              }),
              setText(e) {
                t.text = e;
              },
              setIdleState() {
                t.loadingState = s.Gui.IDLE;
              },
              setAdditionTrackAnimation(e) {
                t.additionTrackInProggress = e;
              },
              setFocus() {
                t.isFocused = !0;
              },
              removeFocus() {
                t.isFocused = !1;
              },
              replaceAdditionTrackInProggress() {
                if (t.additionTrackInProggress) {
                  var e, i;
                  null === (e = t.playlistTrackIds) ||
                    void 0 === e ||
                    e.unshift(t.additionTrackInProggress),
                    (t.suggestedTrackIds = (0, o.pj)(
                      null === (i = t.suggestedTrackIds) || void 0 === i
                        ? void 0
                        : i.filter((e) => e !== t.additionTrackInProggress),
                    )),
                    (t.additionTrackInProggress = null);
                }
              },
              resetAdditionTrackAnimation() {
                t.additionTrackInProggress = null;
              },
              reset() {
                (t.playlistTrackIds = null),
                  (t.suggestedTrackIds = null),
                  (t.additionTrackInProggress = null),
                  (t.tracks = null),
                  (t.loadingState = s.Gui.IDLE),
                  (t.isFocused = !1);
              },
            };
            return e;
          }),
        I = o.V5.compose(
          o.V5.model("PlaylistPage", {
            uuid: o.V5.maybeNull(o.V5.string),
            meta: o.V5.maybeNull(p.Nn),
            items: o.V5.array(v.Wj),
            errorStatusCode: o.V5.maybeNull(o.V5.number),
            similarPlaylists: o.V5.array(p.d2),
            initialItems: o.V5.array(v.Wj),
            shouldShowTrailerOnboarding: o.V5.maybeNull(o.V5.boolean),
            editorFeature: d,
            search: x,
            filters: N,
          }),
          f.Al,
          f.fu,
        )
          .views((t) => {
            let e = {
              get isLoading() {
                return t.isNeededToLoad || t.loadingState === s.Gui.PENDING;
              },
              get isDisabled() {
                var i;
                return (
                  t.isResolved &&
                  (0 === t.items.length ||
                    !(null === (i = t.meta) || void 0 === i
                      ? void 0
                      : i.isAvailable))
                );
              },
              get isNotFound() {
                return t.isRejected && t.errorStatusCode === c.CN.NOT_FOUND;
              },
              get hasSimilarPlaylists() {
                return e.isLoading || t.similarPlaylists.length > 0;
              },
              get isEmptyPlaylist() {
                return t.isResolved && 0 === t.items.length;
              },
              get contextMeta() {
                var a, l, r, n, d, u, v, p, y, f;
                return {
                  isAvailable:
                    null === (a = t.meta) || void 0 === a
                      ? void 0
                      : a.isAvailable,
                  id: t.meta.id,
                  uid: null === (l = t.meta) || void 0 === l ? void 0 : l.uid,
                  uuid: t.meta.uuid,
                  kind: null === (r = t.meta) || void 0 === r ? void 0 : r.kind,
                  title:
                    null === (n = t.meta) || void 0 === n ? void 0 : n.title,
                  coverUri:
                    null === (d = t.meta) || void 0 === d ? void 0 : d.coverUri,
                  likesCount:
                    null === (u = t.meta) || void 0 === u
                      ? void 0
                      : u.likesCount,
                  averageColor:
                    null === (v = t.meta) || void 0 === v
                      ? void 0
                      : v.averageColor,
                  owner:
                    null === (p = t.meta) || void 0 === p ? void 0 : p.owner,
                  description:
                    null === (y = t.meta) || void 0 === y
                      ? void 0
                      : y.description,
                  modified:
                    null === (f = t.meta) || void 0 === f ? void 0 : f.modified,
                };
              },
              get isDragAndDropEnabled() {
                var h;
                if (!(0, o.fh)(t)) return !1;
                let { ugcUploadCenter: e } = (0, o.yj)(t);
                return !!(
                  (null === (h = t.meta) || void 0 === h
                    ? void 0
                    : h.canUserChange) &&
                  (t.items.length > 1 ||
                    e.getUploadingTracksByPlaylistKind(t.meta.kind).length > 0)
                );
              },
              get itemsKeys() {
                return t.items.map((t) => t.key);
              },
              get isFavouritePlaylist() {
                var k;
                return (
                  (null === (k = t.meta) || void 0 === k ? void 0 : k.kind) ===
                  g.eX.LIKE
                );
              },
              get enableVariousAutoFlow() {
                return !!t.filters.activeFilter;
              },
              get trackIds() {
                return t.initialItems.map((t) =>
                  String((0, m.i)(t.id, t.albumId)),
                );
              },
              get isRewind2024Playlist() {
                var b;
                return (
                  (null === (b = t.meta) || void 0 === b
                    ? void 0
                    : b.generatedPlaylistType) === "rewind2024"
                );
              },
              get areAllTracksUploaded() {
                return t.items.every((t) => t.loadingState === s.Gui.RESOLVE);
              },
              get shouldShowEmptyBlock() {
                var C, S;
                if (!(0, o.fh)(t)) return !1;
                let { ugcUploadCenter: i } = (0, o.yj)(t),
                  a = !!(null === (C = t.meta) || void 0 === C
                    ? void 0
                    : C.isOwnPlaylist),
                  l = !!(
                    (null === (S = t.meta) || void 0 === S ? void 0 : S.kind) &&
                    i.getUploadingTracksByPlaylistKind(t.meta.kind).length
                  ),
                  r = !!t.search.hasText;
                return e.isEmptyPlaylist && a && !l && !r;
              },
              get virtualListItemsCount() {
                var _, P;
                if (t.search.hasText) return 0;
                return null !==
                  (P =
                    null === (_ = t.items) || void 0 === _
                      ? void 0
                      : _.length) && void 0 !== P
                  ? P
                  : 0;
              },
              get isFiltersAvailable() {
                var N;
                return !!(
                  e.isFavouritePlaylist &&
                  (null === (N = t.meta) || void 0 === N
                    ? void 0
                    : N.isOwnPlaylist)
                );
              },
              get analyticsParams() {
                return {
                  objectId: t.uuid || void 0,
                  tabId: t.filters.activeFilter,
                  tabPos: t.filters.analyticsParamsActiveFilterIndex,
                };
              },
            };
            return e;
          })
          .actions((t) => {
            let e = {
              getTracksByRange: (0, o.ls)(function* (e) {
                var i, a;
                let { startIndex: l, endIndex: r } = e,
                  { tracksResource: n, modelActionsLogger: d } = (0, o.dU)(t);
                if (
                  !(null === (i = t.meta) || void 0 === i ? void 0 : i.uid) ||
                  !(null === (a = t.meta) || void 0 === a ? void 0 : a.kind)
                )
                  return null;
                (l = Math.max(0, l)), (r = Math.min(r, t.items.length));
                let u = k(t.items, { startIndex: l, endIndex: r });
                try {
                  let e = h(t.items, u);
                  if (!e.length) return null;
                  u.forEach((e) => {
                    let i = t.items[e];
                    i && (i.loadingState = s.Gui.PENDING);
                  });
                  let i = yield n.getTracksMeta({
                    trackIds: e,
                    withProgress: !0,
                  });
                  u.forEach((e, a) => {
                    let l = null == i ? void 0 : i[a];
                    if (t.items[e] && l) {
                      var r, n;
                      t.items[e] = {
                        id: l.id,
                        albumId:
                          (null === (n = l.albums) || void 0 === n
                            ? void 0
                            : null === (r = n[0]) || void 0 === r
                              ? void 0
                              : r.id) || null,
                        key: "".concat(l.id, "-").concat(e),
                        data: (0, y.Vt)(l),
                        loadingState: s.Gui.RESOLVE,
                      };
                    }
                  });
                } catch (e) {
                  d.error(e),
                    u.forEach((e) => {
                      let i = t.items[e];
                      i && (i.loadingState = s.Gui.REJECT);
                    });
                }
                return null;
              }),
              updateData: (0, o.ls)(function* (i) {
                var a;
                if ((null == i ? void 0 : i.error) === "not-found")
                  return (
                    (t.errorStatusCode = c.CN.NOT_FOUND),
                    (t.loadingState = s.Gui.REJECT),
                    null
                  );
                (t.similarPlaylists = (0, o.pj)(
                  null === (a = i.similarPlaylists) || void 0 === a
                    ? void 0
                    : a.map(p.VB),
                )),
                  (t.meta = (0, p.Q9)(i)),
                  (t.items = (0, o.pj)(
                    i.tracks.map((t, e) => ({
                      id: String(t.id),
                      albumId: t.albumId || null,
                      key: "".concat(t.id, "-").concat(e),
                      loadingState: s.Gui.IDLE,
                    })),
                  )),
                  (t.initialItems = (0, u.ZN)(t.items));
                let {
                  sonataState: l,
                  playlist: r,
                  experiments: n,
                } = (0, o.yj)(t);
                return (
                  l.setUnloadedEntitiesData(C(t.items)),
                  (null == n
                    ? void 0
                    : n.checkExperiment(s.peG.WebEditorsFeatures, "on")) &&
                    r.editorFeature.getDuplicates(t.items),
                  yield e.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, o.ls)(function* (i) {
                let {
                    userId: a,
                    playlistKind: l,
                    resumeStream: r = !1,
                    trackMetaType: n,
                    preloadedPlaylist: d,
                  } = i,
                  { usersResource: u, modelActionsLogger: m } = (0, o.dU)(t);
                if (t.loadingState !== s.Gui.PENDING)
                  try {
                    t.loadingState = s.Gui.PENDING;
                    let i = d;
                    if (
                      (i ||
                        (i = yield u.getPlaylistWithTracksIds({
                          userId: a,
                          playlistKind: l,
                          resumeStream: r,
                          trackMetaType: n,
                        })),
                      (t.uuid = null == i ? void 0 : i.playlistUuid),
                      "string" != typeof i.playlistUuid)
                    ) {
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                        (t.loadingState = s.Gui.REJECT);
                      return;
                    }
                    yield e.updateData(i), (t.loadingState = s.Gui.RESOLVE);
                  } catch (e) {
                    m.error(e),
                      e instanceof c.du &&
                        (e.statusCode === c.CN.NOT_FOUND ||
                          e.statusCode === c.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = c.CN.NOT_FOUND),
                      (t.loadingState = s.Gui.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, o.ls)(function* (i) {
                let {
                    playlistUuid: a,
                    richTracks: l = !1,
                    resumeStream: r = !1,
                    preloadedPlaylist: n,
                  } = i,
                  { playlistResource: d, modelActionsLogger: u } = (0, o.dU)(t);
                if (((t.uuid = a), t.loadingState !== s.Gui.PENDING))
                  try {
                    t.loadingState = s.Gui.PENDING;
                    let i = n;
                    i ||
                      (i = yield d.getPlaylist({
                        playlistUuid: a,
                        resumeStream: r,
                        richTracks: l,
                      })),
                      yield e.updateData(i),
                      t.loadingState !== s.Gui.IDLE &&
                        (t.loadingState = s.Gui.RESOLVE);
                  } catch (e) {
                    u.error(e),
                      e instanceof c.du &&
                        (e.statusCode === c.CN.NOT_FOUND ||
                          e.statusCode === c.CN.BAD_REQUEST) &&
                        (t.errorStatusCode = c.CN.NOT_FOUND),
                      t.loadingState !== s.Gui.IDLE &&
                        (t.loadingState = s.Gui.REJECT);
                  }
              }),
              updatePlaylistTrackByUuid: (0, o.ls)(function* (i) {
                let {
                    playlistUuid: a,
                    richTracks: l = !1,
                    resumeStream: r = !1,
                  } = i,
                  { playlistResource: n, modelActionsLogger: d } = (0, o.dU)(t);
                t.uuid = a;
                try {
                  let i = yield n.getPlaylist({
                      playlistUuid: a,
                      resumeStream: r,
                      richTracks: l,
                    }),
                    d = [];
                  if (
                    ((t.items = (0, o.pj)(
                      i.tracks.map((e, i) => {
                        var a, l;
                        let r = String(e.id),
                          n = e.albumId || null;
                        return r ===
                          (null === (a = t.items[i]) || void 0 === a
                            ? void 0
                            : a.id) &&
                          n ===
                            (null === (l = t.items[i]) || void 0 === l
                              ? void 0
                              : l.albumId)
                          ? t.items[i]
                          : (d.push(i),
                            {
                              id: String(e.id),
                              albumId: e.albumId || null,
                              key: "".concat(e.id, "-").concat(i),
                              loadingState: s.Gui.IDLE,
                            });
                      }),
                    )),
                    t.meta &&
                      ((t.meta.modified = i.modified),
                      (t.meta.revision = i.revision),
                      d.length))
                  ) {
                    let t = Math.min(...d),
                      i = Math.max(...d);
                    e.getTracksByRange({ startIndex: t, endIndex: i });
                  }
                  if (
                    (t.loadingState !== s.Gui.IDLE &&
                      (t.loadingState = s.Gui.RESOLVE),
                    (0, o.fh)(t))
                  ) {
                    let { sonataState: e } = (0, o.yj)(t);
                    e.setUnloadedEntitiesData(C(t.items));
                  }
                } catch (e) {
                  d.error(e),
                    e instanceof c.du &&
                      (e.statusCode === c.CN.NOT_FOUND ||
                        e.statusCode === c.CN.BAD_REQUEST) &&
                      (t.errorStatusCode = c.CN.NOT_FOUND),
                    t.loadingState !== s.Gui.IDLE &&
                      (t.loadingState = s.Gui.REJECT);
                }
              }),
              moveTrack(e, i) {
                let a = (0, u.ZN)(t.items[e]);
                if (
                  !(e < 0) &&
                  !(i < 0) &&
                  !(e >= t.items.length) &&
                  !(i >= t.items.length) &&
                  a &&
                  (t.items.splice(e, 1), t.items.splice(i, 0, a), (0, o.fh)(t))
                ) {
                  let { sonataState: e } = (0, o.yj)(t);
                  e.setUnloadedEntitiesData(C(t.items));
                }
              },
              removeTracksFromItems(e, i) {
                if ((t.items.splice(e, i), (0, o.fh)(t))) {
                  let { sonataState: e } = (0, o.yj)(t);
                  e.setUnloadedEntitiesData(C(t.items));
                }
              },
              setItems(e) {
                t.items = (0, o.pj)((0, u.ZN)(e));
              },
              setShouldShowTrailerOnboarding(e) {
                t.shouldShowTrailerOnboarding = e;
              },
              reset() {
                let { sonataState: e } = (0, o.yj)(t);
                e.resetUnloadedEntitiesData(),
                  (t.uuid = null),
                  (t.loadingState = s.Gui.IDLE),
                  (t.errorStatusCode = null),
                  (t.shouldShowTrailerOnboarding = null),
                  t.search.setText(""),
                  t.search.reset(),
                  t.filters.reset(),
                  t.destroyItems([
                    t.meta,
                    t.items,
                    t.initialItems,
                    t.similarPlaylists,
                  ]);
              },
              refresh() {
                var i, a;
                (null === (i = t.meta) || void 0 === i ? void 0 : i.uuid) &&
                  e.getPlaylistByUuid({
                    playlistUuid:
                      null === (a = t.meta) || void 0 === a ? void 0 : a.uuid,
                    resumeStream: !1,
                  });
              },
              refreshTracks() {
                var i, a;
                (null === (i = t.meta) || void 0 === i ? void 0 : i.uuid) &&
                  e.updatePlaylistTrackByUuid({
                    playlistUuid:
                      null === (a = t.meta) || void 0 === a ? void 0 : a.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return e;
          });
      i(40384);
      var E = i(60571),
        V = i(55284);
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
          return p;
        },
      });
      var a = i(75441),
        l = i(32358),
        r = i(62569),
        n = i(15937),
        o = i(68208),
        s = i(69756),
        d = i(17392),
        u = i(13534),
        c = i(97141),
        m = i(35129),
        v = i.n(m);
      let p = (0, r.Pi)((t) => {
        let { className: e } = t,
          { contentRef: i } = (0, u.$Y6)(),
          r = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, a.jsxs)("div", {
            className: (0, l.W)(v().root, { [v().root_desktop]: !i }, e),
            children: [
              (0, a.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: v().navigation,
                withForwardControl: !1,
              }),
              (0, a.jsxs)("div", {
                className: v().content,
                children: [
                  (0, a.jsx)(s.Icon, {
                    className: v().icon,
                    variant: "musicLogo",
                  }),
                  (0, a.jsx)(d.Heading, {
                    className: (0, l.W)(v().title, v().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, a.jsx)(n.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, a.jsx)(d.Caption, {
                    className: (0, l.W)(v().text, v().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, a.jsx)(n.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, a.jsx)(o.Button, {
                    onClick: r,
                    className: v().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, a.jsx)(d.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, a.jsx)(n.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
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
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 7645, 9125, 4679, 7138, 5453, 7873, 8015, 9282,
        7255, 7141, 892, 1512, 2783, 2399, 7099, 1150, 2242, 1562, 12, 2159,
        7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 87134));
      },
    ),
      (_N_E = t.O());
  },
]);
