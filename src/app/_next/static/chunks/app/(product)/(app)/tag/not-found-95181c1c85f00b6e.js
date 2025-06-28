(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8618],
  {
    94924: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 37667)),
        Promise.resolve().then(i.bind(i, 38861)),
        Promise.resolve().then(i.bind(i, 16106)),
        Promise.resolve().then(i.bind(i, 17680)),
        Promise.resolve().then(i.bind(i, 88989)),
        Promise.resolve().then(i.bind(i, 718)),
        Promise.resolve().then(i.bind(i, 94758)),
        Promise.resolve().then(i.bind(i, 8975)),
        Promise.resolve().then(i.bind(i, 16439)),
        Promise.resolve().then(i.bind(i, 39342)),
        Promise.resolve().then(i.bind(i, 92614)),
        Promise.resolve().then(i.bind(i, 70794)),
        Promise.resolve().then(i.bind(i, 6397)),
        Promise.resolve().then(i.bind(i, 85739)),
        Promise.resolve().then(i.bind(i, 88318)),
        Promise.resolve().then(i.bind(i, 54547)),
        Promise.resolve().then(i.bind(i, 9648)),
        Promise.resolve().then(i.bind(i, 94226)),
        Promise.resolve().then(i.bind(i, 17304)),
        Promise.resolve().then(i.bind(i, 70447)),
        Promise.resolve().then(i.bind(i, 80625)),
        Promise.resolve().then(i.bind(i, 22094)),
        Promise.resolve().then(i.bind(i, 60517)),
        Promise.resolve().then(i.bind(i, 81052)),
        Promise.resolve().then(i.bind(i, 96720)),
        Promise.resolve().then(i.bind(i, 98549)),
        Promise.resolve().then(i.bind(i, 35277)),
        Promise.resolve().then(i.bind(i, 48973)),
        Promise.resolve().then(i.bind(i, 34708)),
        Promise.resolve().then(i.bind(i, 32654)),
        Promise.resolve().then(i.bind(i, 58364)),
        Promise.resolve().then(i.bind(i, 60441)),
        Promise.resolve().then(i.bind(i, 70770)),
        Promise.resolve().then(i.bind(i, 56577)),
        Promise.resolve().then(i.bind(i, 77909)),
        Promise.resolve().then(i.bind(i, 69959)),
        Promise.resolve().then(i.bind(i, 22093)),
        Promise.resolve().then(i.bind(i, 77828)),
        Promise.resolve().then(i.bind(i, 27817)),
        Promise.resolve().then(i.bind(i, 91377)),
        Promise.resolve().then(i.bind(i, 44878)),
        Promise.resolve().then(i.bind(i, 55496)),
        Promise.resolve().then(i.bind(i, 82937)),
        Promise.resolve().then(i.bind(i, 90239)),
        Promise.resolve().then(i.bind(i, 29073)),
        Promise.resolve().then(i.bind(i, 66511)),
        Promise.resolve().then(i.bind(i, 57750)),
        Promise.resolve().then(i.bind(i, 52727)),
        Promise.resolve().then(i.bind(i, 74833)),
        Promise.resolve().then(i.bind(i, 74212)),
        Promise.resolve().then(i.bind(i, 19867)),
        Promise.resolve().then(i.bind(i, 57905)),
        Promise.resolve().then(i.bind(i, 79066)),
        Promise.resolve().then(i.bind(i, 627)),
        Promise.resolve().then(i.bind(i, 35999)),
        Promise.resolve().then(i.bind(i, 65164)),
        Promise.resolve().then(i.bind(i, 54701)),
        Promise.resolve().then(i.bind(i, 57307)),
        Promise.resolve().then(i.bind(i, 42469)),
        Promise.resolve().then(i.bind(i, 58410)),
        Promise.resolve().then(i.bind(i, 6575)),
        Promise.resolve().then(i.bind(i, 15826)),
        Promise.resolve().then(i.bind(i, 83425)),
        Promise.resolve().then(i.bind(i, 79815)),
        Promise.resolve().then(i.bind(i, 82944)),
        Promise.resolve().then(i.bind(i, 53516)),
        Promise.resolve().then(i.bind(i, 40230)),
        Promise.resolve().then(i.bind(i, 20915)),
        Promise.resolve().then(i.bind(i, 24840)),
        Promise.resolve().then(i.bind(i, 37109)),
        Promise.resolve().then(i.bind(i, 72716)),
        Promise.resolve().then(i.bind(i, 72276)),
        Promise.resolve().then(i.bind(i, 46746)),
        Promise.resolve().then(i.bind(i, 89773)),
        Promise.resolve().then(i.bind(i, 21111)),
        Promise.resolve().then(i.bind(i, 47129)),
        Promise.resolve().then(i.bind(i, 31168));
    },
    58720: function (e, t, i) {
      "use strict";
      i.d(t, {
        v: function () {
          return d;
        },
      });
      var n,
        r = i(73484),
        o = i(65067),
        l = {
          6699: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let n = i(352),
              r = i(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: i, throttleTimeout: o } = e,
                l = (0, r.useRef)(null),
                [s, a] = (0, r.useState)(!!i),
                u = (0, r.useMemo)(
                  () =>
                    (0, n.throttle)(() => {
                      a(!i),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          a(!!i);
                        }, t));
                    }, o),
                  [t, i, o],
                ),
                d = (0, r.useCallback)(() => {
                  a(!!i), l.current && window.clearTimeout(l.current);
                }, [i]);
              return (
                (0, r.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: s, handleDebouncedToggle: u, reset: d }
              );
            };
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          352: (e) => {
            e.exports = r;
          },
          810: (e) => {
            e.exports = n || (n = i.t(o, 2));
          },
        },
        s = {};
      function a(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var i = (s[e] = { exports: {} });
        return l[e](i, i.exports, a), i.exports;
      }
      var u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let e = a(810),
          t = a(361),
          i = a(6699);
        u.useScroll = (n) => {
          let { onScroll: r, listenIsScrolling: o, elementRef: l } = n,
            { state: s, handleDebouncedToggle: a } = (0, i.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            u = (0, e.useCallback)(() => {
              o && a(), null == r || r();
            }, [o, a, r]);
          return (
            (0, e.useEffect)(() => {
              let e = (0, t.getElementFromRefOrElement)(l);
              if (null === e) return;
              let i = null != e ? e : window,
                n = { capture: !0, passive: !0 };
              return (
                i.addEventListener("scroll", u, n),
                () => i.removeEventListener("scroll", u, n)
              );
            }, [l, u]),
            s
          );
        };
      })(),
        u.__esModule;
      var d = u.useScroll;
    },
    69947: function (e, t, i) {
      "use strict";
      i.d(t, {
        I7: function () {
          return m;
        },
        kl: function () {
          return v;
        },
        b4: function () {
          return p;
        },
        at: function () {
          return o;
        },
      }),
        i(81286);
      var n = i(65067),
        r = i(13534);
      let o = (e, t) => (
        (0, r.uK4)().get(r.Xt8),
        [
          (0, n.useMemo)(() => {
            if (void 0 === t) return {};
            let i = t - 17;
            return {
              "--average-color-background": e,
              transform: "translateY(".concat(t >= 17 ? 0 : i, "px)"),
              opacity: 1,
            };
          }, [t, !1, e]),
          (0, n.useMemo)(() => ({ "--average-color-background": e }), [e]),
        ]
      );
      var l = i(75441),
        s = i(71361),
        a = i(62569),
        u = i(58720),
        d = i(97141);
      let c = (e) => {
          let { element: t, scrollTop: i, isMobile: n } = e,
            r = 0.6 * t.clientHeight;
          return i + (n ? 60 : 76) >= t.offsetTop + r;
        },
        m = (0, a.Pi)((e) => {
          let {
              children: t,
              scrollElement: i,
              outerTitle: o = "",
              headerElement: a,
              headerThreshold: m,
              shouldHideHeader: v,
            } = e,
            [p, _] = (0, n.useState)(o),
            [h, P] = (0, n.useState)(null),
            [y, b] = (0, n.useState)(null),
            [x, f] = (0, n.useState)(null),
            [g, C] = (0, n.useState)(!1),
            [k, j] = (0, n.useState)(!1),
            [L, N] = (0, n.useState)(!1),
            [T, W] = (0, n.useState)(!1),
            {
              settings: { isMobile: B },
            } = (0, r.oR4)();
          (0, n.useLayoutEffect)(() => {
            _(o);
          }, [o]);
          let S = (0, n.useCallback)(() => {
            let e = null != m ? m : 10,
              t = a ? Number(a.offsetTop) - e : e;
            t < 0 && (t = 0);
            let n = (e) => {
              N(e > t),
                v && W(e > 30),
                (null == h ? void 0 : h.current) &&
                  C(
                    c({
                      element: null == h ? void 0 : h.current,
                      scrollTop: e,
                      isMobile: B,
                    }),
                  ),
                (null == y ? void 0 : y.current) &&
                  j(
                    c({
                      element: null == y ? void 0 : y.current,
                      scrollTop: e,
                      isMobile: B,
                    }),
                  );
            };
            B ? n(window.scrollY) : i && n(i.scrollTop);
          }, [m, a, B, v, h, y, i]);
          (0, n.useEffect)(() => {
            B
              ? 0 === window.scrollY && N(!1)
              : (i && 0 !== i.scrollTop) || N(!1);
          }, [i, null == i ? void 0 : i.scrollTop, B]);
          let w = (0, n.useMemo)(
            () =>
              B
                ? { onScroll: (0, s.Z)(S, 200) }
                : { onScroll: (0, s.Z)(S, 200), elementRef: i },
            [S, i, B],
          );
          (0, u.v)(w);
          let A = (0, n.useMemo)(
            () => ({
              title: p,
              setTitle: _,
              titleElement: h,
              scrollElement: B ? null : i,
              setTitleElement: P,
              childElement: y,
              setChildElement: b,
              child: x,
              setChild: f,
              isScrolledChild: k,
              isScrolledTitle: g,
              isScrolling: L,
              isHeaderHidden: T,
            }),
            [p, g, h, i, L, B, x, y, k, T],
          );
          return (0, l.jsx)(d.pI.Provider, { value: A, children: t });
        }),
        v = (e) => {
          let { children: t, child: i, className: r } = e,
            { setChildElement: o, setChild: s } = (0, n.useContext)(d.pI),
            a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == a ? void 0 : a.current) && o(a), i && s(i);
            }, [a, i, o, s]),
            (0, n.useEffect)(
              () => () => {
                s(null);
              },
              [s],
            ),
            (0, l.jsx)("div", { ref: a, className: r, children: t })
          );
        },
        p = (e) => {
          let { children: t, title: i, className: r } = e,
            { setTitleElement: o, setTitle: s } = (0, n.useContext)(d.pI),
            a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == a ? void 0 : a.current) && o(a), i && s(i);
            }, [a, i, o, s]),
            (0, n.useEffect)(
              () => () => {
                s("");
              },
              [s],
            ),
            (0, l.jsx)("div", { ref: a, className: r, children: t })
          );
        };
    },
    7797: function (e, t, i) {
      "use strict";
      i.d(t, {
        vY: function () {
          return C.EmptyPlaylistBlock;
        },
        Tq: function () {
          return k.HorizontalPlaylistCard;
        },
        ZL: function () {
          return j.PlaylistCard;
        },
        Nn: function () {
          return f;
        },
        d2: function () {
          return g;
        },
        VD: function () {
          return L.PlaylistsCarousel;
        },
        RE: function () {
          return o;
        },
        Q9: function () {
          return c;
        },
        VB: function () {
          return v;
        },
        PB: function () {
          return _;
        },
      });
      var n = i(22874),
        r = i(13534);
      let o = (e) => {
        var t, i;
        let {
          playlist: o,
          generatedPlaylistType: l,
          likesCount: s,
          trailer: a,
          tracksCount: u,
        } = e;
        return (0, n.pj)({
          isAvailable: null === (i = o.available) || void 0 === i || i,
          uuid: o.playlistUuid,
          title: o.title,
          uid: o.uid,
          kind: o.kind,
          coverUri: null === (t = o.cover) || void 0 === t ? void 0 : t.uri,
          generatedPlaylistType: l,
          likesCount: s,
          tracksCount: u,
          trailer: (0, r.GFX)(a),
        });
      };
      var l = i(98730),
        s = i(65067);
      (0, s.cache)(async (e, t) => {
        try {
          let {
            container: i,
            backendHostTld: n,
            locale: o,
            host: s,
            fullUrl: a,
            isRSC: u,
            requestUrl: d,
          } = await (0, r.rbP)();
          if (u)
            return {
              playlist: void 0,
              backendHostTld: n,
              locale: o,
              host: s,
              fullUrl: a,
              requestUrl: d,
            };
          let c = i.get(r.Eug),
            m = await c.getPlaylistWithTracksIds({
              userId: e,
              playlistKind: t,
              resumeStream: !1,
            });
          return (
            "not-found" === m.error && (0, l.notFound)(),
            {
              playlist: m,
              backendHostTld: n,
              locale: o,
              host: s,
              fullUrl: a,
              requestUrl: d,
            }
          );
        } catch (e) {
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
        (0, s.cache)(async (e) => {
          (0, r.aIc)(e) || (0, l.notFound)();
          try {
            let {
              container: t,
              backendHostTld: i,
              locale: n,
              host: o,
              fullUrl: s,
              isRSC: a,
              requestUrl: u,
            } = await (0, r.rbP)();
            if (a)
              return {
                playlist: void 0,
                backendHostTld: i,
                locale: n,
                host: o,
                fullUrl: s,
                requestUrl: u,
              };
            let d = t.get(r.lkR),
              c = await d.getPlaylist({
                playlistUuid: e,
                resumeStream: !1,
                richTracks: !1,
              });
            return (
              "not-found" === c.error && (0, l.notFound)(),
              {
                playlist: c,
                backendHostTld: i,
                locale: n,
                host: o,
                fullUrl: s,
                requestUrl: u,
              }
            );
          } catch (e) {
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
      var a = i(10979);
      let u = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        d = (e) =>
          (0, n.pj)({
            userInfo: e.userInfo ? u(e.userInfo) : null,
            caseForms: e.caseForms ? (0, r.GA0)(e.caseForms) : null,
          }),
        c = (e) =>
          (0, n.pj)({
            ...(0, a.PV)(e),
            owner: e.owner ? u(e.owner) : void 0,
            description: e.description,
            tags: e.tags,
            modified: e.modified,
            madeFor: e.madeFor ? d(e.madeFor) : null,
          });
      var m = i(64353);
      let v = (e) => {
        var t, i;
        return (0, n.pj)({
          ...(0, a.PV)(e),
          artists:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.artists) || void 0 === t
                    ? void 0
                    : t.map(m.d)) && void 0 !== i
              ? i
              : [],
        });
      };
      var p = i(32399);
      let _ = (e) => {
        var t, i;
        return (0, n.pj)({
          ...(0, a.PV)(e),
          tracks:
            null !==
              (i =
                null == e
                  ? void 0
                  : null === (t = e.tracks) || void 0 === t
                    ? void 0
                    : t.map(p.wM)) && void 0 !== i
              ? i
              : [],
        });
      };
      var h = i(40892),
        P = i(92719);
      let y = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(P.o)),
          verified: n.V5.boolean,
        }),
        b = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(y),
          caseForms: n.V5.maybeNull(h.S2),
        }),
        x = n.V5.model("PlaylistTag", { id: n.V5.string, value: n.V5.string }),
        f = a.Cd.props({
          owner: n.V5.maybe(y),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          tags: n.V5.maybeNull(n.V5.array(x)),
          madeFor: n.V5.maybeNull(b),
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
            get tagsString() {
              let { experiments: t } = (0, n.yj)(e);
              if (
                !t.checkExperiment(r.peG.WebEditorsFeatures, "on") ||
                !Array.isArray(e.tags) ||
                !e.tags.length
              )
                return null;
              return e.tags.map((e) => e.value).join(", ");
            },
          }))
          .actions((e) => ({
            changeDescription: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return r.SLo.ERROR;
              if (e.description === t) return r.SLo.OK;
              if (t.length > a.Zn) return r.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              if (e.canUserChange) {
                let n = e.description;
                e.description = t;
                try {
                  let n = yield i.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = n.description), r.SLo.OK;
                } catch (t) {
                  (e.description = n), o.error(t);
                }
              }
              return r.SLo.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return r.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              try {
                let n = yield i.uploadPlaylistCover({
                  userId: e.uid,
                  formData: t,
                  playlistKind: e.kind,
                });
                return (e.coverUri = n.cover.uri), r.SLo.OK;
              } catch (e) {
                o.error(e);
              }
              return r.SLo.ERROR;
            }),
          }))
          .named("PlaylistMeta"),
        g = a.$h.props({ artists: n.V5.maybe(n.V5.array(m.Go)) });
      var C = i(59539),
        k = i(86133),
        j = i(8152),
        L = i(87352);
    },
    6794: function (e, t, i) {
      "use strict";
      i.d(t, {
        z: function () {
          return o;
        },
      });
      var n = i(65067),
        r = i(9317);
      let o = (e) => {
        let { formatMessage: t } = (0, r.Z)();
        return (0, n.useMemo)(() => {
          let i = "";
          e.isLiked && !e.actualLikesCount
            ? (i = t({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (i =
                e.actualLikesCount > 0
                  ? t(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : t({ id: "entity-names.likes-counter-empty" }));
          let n = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(n, " ").concat(i);
        }, [t, e]);
      };
    },
    59539: function (e, t, i) {
      "use strict";
      i.d(t, {
        EmptyPlaylistBlock: function () {
          return m;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(65067),
        l = i(15937),
        s = i(35846),
        a = i(69756),
        u = i(17392),
        d = i(63950),
        c = i.n(d);
      let m = (e) => {
        let { className: t, isEmptySearch: i } = e,
          d = (0, o.useMemo)(
            () =>
              i
                ? (0, n.jsx)(l.Z, { id: "search-results.not-found-title" })
                : (0, n.jsx)(l.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [i],
          ),
          m = (0, o.useMemo)(
            () =>
              i
                ? (0, n.jsx)(l.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, n.jsx)(l.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [i],
          );
        return (0, n.jsxs)("div", {
          className: (0, r.W)(c().root, t),
          ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK),
          children: [
            (0, n.jsx)("div", {
              className: c().iconBackground,
              children: (0, n.jsx)(a.Icon, {
                variant: "search",
                size: "l",
                className: c().icon,
                ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_ICON),
              }),
            }),
            (0, n.jsx)(u.Heading, {
              variant: "h3",
              size: "xs",
              className: c().title,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TITLE),
              children: d,
            }),
            (0, n.jsx)(u.Caption, {
              variant: "span",
              size: "l",
              className: c().subtitle,
              ...(0, s.BA)(s.bG.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
              children: m,
            }),
          ],
        });
      };
    },
    86133: function (e, t, i) {
      "use strict";
      i.d(t, {
        HorizontalPlaylistCard: function () {
          return L;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(62569),
        l = i(65067),
        s = i(9317),
        a = i(15937),
        u = i(4875),
        d = i(35846),
        c = i(84638),
        m = i(93093),
        v = i(91307),
        p = i(69756),
        _ = i(17392),
        h = i(64353),
        P = i(13534),
        y = i(97141),
        b = i(6794),
        x = i(10979),
        f = i(75908),
        g = i.n(f);
      let C = (0, o.Pi)((e) => {
        var t;
        let { className: i, playlist: o, likeIconSize: s = "xxs" } = e,
          { user: a, trailer: d } = (0, P.oR4)(),
          c = (0, P.qsr)(),
          { sendLikeSearchFeedback: v } = (0, P.sAF)(),
          _ = (0, x.SB)(o),
          [h, b] = (0, l.useState)(!1),
          f = (0, m.W)(async () => {
            h || o.isLiked || (b(!0), null == v || v()), await _();
          }),
          C = (0, P.FTC)(),
          k = (0, m.W)((e) => {
            if ((e.stopPropagation(), c())) {
              e.preventDefault();
              return;
            }
            d.openPlaylistTrailer(o.id), C(u.OB.Playlist, o.id);
          });
        return (0, n.jsxs)("div", {
          className: (0, r.W)(g().root, g().controls, i, {
            [g().controls_disabled]: !o.isAvailable,
          }),
          children: [
            o.isAvailable &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(y.FM, {
                    fallback: (0, n.jsx)(y.dJ, {
                      size: "xs",
                      iconSize: s,
                      className: (0, r.W)(g().item, g().likeIcon),
                      isLiked: o.isLiked,
                      onClick: f,
                      disabled: !a.isAuthorized,
                    }),
                  }),
                  (null === (t = o.trailer) || void 0 === t
                    ? void 0
                    : t.isAvailable) &&
                    (0, n.jsx)(y.FM, {
                      fallback: (0, n.jsx)(y.eP, {
                        className: (0, r.W)(g().item, g().trailerIcon),
                        iconSize: "xs",
                        variant: "text",
                        onClick: k,
                        withRipple: !1,
                      }),
                    }),
                ],
              }),
            (0, n.jsx)("div", {
              className: (0, r.W)(g().item, g().item_buttonArrow),
              children: (0, n.jsx)(p.Icon, {
                className: y.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
      var k = i(53948),
        j = i.n(k);
      let L = (0, o.Pi)((e) => {
        let {
            className: t,
            playlist: i,
            pageId: o,
            coverClassName: x,
            playButtonIconSize: f,
            likeIconSize: g,
          } = e,
          { ref: k, intersectionPropertyId: L } = (0, P.VfV)(),
          { from: N } = (0, P.MhG)({ pageId: o }),
          [T, W] = (0, l.useState)(!1),
          B = (0, P.lAI)(),
          S = (0, b.z)(i),
          w = i.title || "",
          { formatMessage: A, formatNumber: E } = (0, s.Z)(),
          z = (0, P.qsr)(),
          { sendNavigateSearchFeedback: F, sendPlaySearchFeedback: I } = (0,
          P.sAF)(),
          R = (0, P.zxW)(),
          {
            isPlaying: M,
            isCurrent: V,
            togglePlay: O,
          } = (0, P.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: N,
              },
              loadContextMeta: !0,
            },
          }),
          Y = (0, P.s0h)(i.url),
          Z = (0, P.s0h)(i.url, !0),
          U = (0, h.ik)(Z, Y),
          G = (0, m.W)((e) => {
            null == F || F(),
              R({ to: u.qU.PlaylistScreen }),
              e.preventDefault(),
              U(e);
          }),
          H = (0, m.W)(() => {
            z() || (T || M || (W(!0), null == I || I()), O(), B(!M));
          }),
          K = (0, m.W)((e) => {
            (0, v.m)(e, y.$C.ripple), G(e);
          }),
          D = (0, m.W)((e) => {
            e.stopPropagation(), G(e);
          }),
          q = (0, l.useCallback)(
            (e) =>
              (0, n.jsx)(y.Df, {
                isAvailable: i.isAvailable,
                isDisliked: !1,
                coverUri: i.coverUri,
                title: w,
                className: (0, r.W)(y.$C.playButtonCell, x),
                alt: A(
                  { id: "entity-names.playlist-name" },
                  { playlistName: w },
                ),
                ...e,
              }),
            [i, w, x, A],
          ),
          $ =
            null == q
              ? void 0
              : q({
                  onPlayButtonClick: H,
                  isPlaying: M,
                  isCurrent: V,
                  playButtonIconSize: f,
                }),
          X = (0, l.useMemo)(
            () =>
              i.url && i.isAvailable
                ? (0, n.jsx)(y.rU, {
                    className: (0, r.W)(y.$C.text, y.$C.titleLink),
                    href: i.url,
                    onClick: D,
                    children: w,
                  })
                : (0, n.jsx)(_.Caption, {
                    className: (0, r.W)(y.$C.text, y.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: w,
                  }),
            [D, i.isAvailable, i.url, w],
          ),
          J = (0, l.useMemo)(() => {
            if (void 0 === i.actualLikesCount || void 0 === i.tracksCount)
              return;
            let e = (0, n.jsx)(_.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              t = i.isLiked ? "likedVariant" : "likeVariant",
              r = ""
                .concat(S, " ")
                .concat(
                  A(
                    { id: "entity-names.tracks-count" },
                    { value: i.tracksCount },
                  ),
                );
            return (0, n.jsxs)("div", {
              className: j().description,
              "aria-label": r,
              children: [
                (0, n.jsxs)("div", {
                  className: j().likesCount,
                  children: [
                    (0, n.jsx)(p.Icon, {
                      className: j().icon,
                      variant: t,
                      size: "xxs",
                    }),
                    (0, n.jsx)(_.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: E(i.actualLikesCount),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: j().tracksCount,
                  children: [
                    e,
                    (0, n.jsx)(_.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      children: (0, n.jsx)(a.Z, {
                        id: "entity-names.tracks-count",
                        values: { value: E(i.tracksCount) },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }, [A, E, S, i.actualLikesCount, i.isLiked, i.tracksCount]);
        return (0, n.jsxs)(y.Md, {
          ref: k,
          "data-intersection-property-id": L,
          className: (0, r.W)(
            y.$C.root,
            { [y.$C.root_disabled]: !i.isAvailable },
            t,
          ),
          "aria-label": i.title || A({ id: "entity-names.playlist" }),
          onClick: K,
          ...(0, d.BA)(d.bG.playlist.HORIZONTAL_PLAYLIST_CARD),
          children: [
            $,
            (0, n.jsx)(y.u, {
              isDisabled: !i.isAvailable,
              title: X,
              description: J,
            }),
            (0, n.jsx)(C, { playlist: i, likeIconSize: g }),
          ],
        });
      });
    },
    8152: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistCard: function () {
          return N;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(62569),
        l = i(65067),
        s = i(9317),
        a = i(4875),
        u = i(35846),
        d = i(84638),
        c = i(93093),
        m = i(14218),
        v = i(18333),
        p = i(69756),
        _ = i(59091),
        h = i(17392),
        P = i(64353),
        y = i(10979),
        b = i(13534),
        x = i(97141),
        f = i(6794),
        g = i(27376),
        C = i(50705);
      let k = (0, o.Pi)((e) => {
        var t;
        let { playlist: i, onOpenChange: r, open: o, ...l } = e,
          { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } =
            (0, b.vLf)(),
          {
            experiments: v,
            settings: { isMobile: p },
            trailer: _,
          } = (0, b.oR4)(),
          h = (0, y.SB)(i),
          P = (0, y.BV)(i),
          f = (0, b.FTC)(),
          { formatMessage: k } = (0, s.Z)(),
          j = (0, b.qsr)(),
          L = v.checkExperiment(b.peG.WebEditorsFeatures, "on"),
          N = (0, C.q3)({
            entityVariant: b.gus.PLAYLIST,
            urlParams: { id: i.uid, kind: i.kind },
          });
        (0, b.ZP4)(o);
        let T = (0, c.W)(() => {
          if (d) {
            m();
            return;
          }
          j() || (_.openPlaylistTrailer(i.id), f(a.OB.Playlist, i.id));
        });
        return (0, n.jsxs)(g.v2, {
          title: i.title,
          onOpenChange: r,
          open: o,
          offsetOptions: 10,
          isMobile: p,
          ariaLabel: k({ id: "interface-actions.context-menu" }),
          containerProps: (0, u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU),
          ...l,
          children: [
            L &&
              (0, n.jsx)(C.ZY, {
                entityVariant: b.gus.PLAYLIST,
                adminUrl: i.isFavouritePlaylist ? void 0 : N,
              }),
            !p && (0, n.jsx)(x.Zd, { onClick: P, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, n.jsx)(x.xZ, { onClick: h, isLiked: i.isLiked }),
            (null === (t = i.trailer) || void 0 === t
              ? void 0
              : t.isAvailable) &&
              (0, n.jsx)(x.NB, { onClick: T, disabled: !i.isAvailable }),
          ],
        });
      });
      var j = i(96297),
        L = i.n(j);
      let N = (0, o.Pi)((e) => {
        let {
            className: t,
            playlist: i,
            children: o,
            contentLinesCount: g,
            customDescription: C,
          } = e,
          { ref: j, intersectionPropertyId: N } = (0, b.VfV)(),
          { trailer: T, user: W } = (0, b.oR4)(),
          { from: B, utmLink: S } = (0, b.MhG)({
            contextId: i.uuid,
            contextType: d.A.Playlist,
          }),
          { formatMessage: w } = (0, s.Z)(),
          {
            sendLikeSearchFeedback: A,
            sendNavigateSearchFeedback: E,
            sendPlaySearchFeedback: z,
          } = (0, b.sAF)(),
          [F, I] = (0, l.useState)(!1),
          [R, M] = (0, l.useState)(!1),
          [V, O] = (0, l.useState)(!1),
          Y = (0, f.z)(i),
          Z = (0, y.SB)(i),
          U = (0, y.BV)(i),
          G = (0, b.zxW)(),
          H = (0, b.lAI)(),
          K = (0, b.s0h)(i.url),
          D = (0, b.s0h)(i.url, !0),
          q = (0, P.ik)(D, K),
          $ = (0, b.FTC)(),
          X = (0, b.qsr)(),
          J = (0, c.W)((e) => {
            if ((e.stopPropagation(), X())) {
              e.preventDefault();
              return;
            }
            T.setUtmLink(S),
              T.openPlaylistTrailer(i.id),
              $(a.OB.Playlist, i.id);
          }),
          [Q, ee] = (0, l.useState)(!1),
          { isPlaying: et, togglePlay: ei } = (0, b.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Playlist,
                meta: { id: i.id, uuid: i.uuid },
                from: B,
                utmLink: S,
              },
              loadContextMeta: !0,
            },
          }),
          en = (0, c.W)(() => {
            G({ to: a.qU.PlaylistScreen }), null == E || E();
          }),
          er = (0, c.W)((e) => {
            en(), q(e);
          }),
          eo = (0, c.W)(() => {
            X() || (F || et || (I(!0), null == z || z()), ei(), H(!et));
          }),
          el = (0, c.W)(() => {
            R || i.isLiked || (M(!0), null == A || A()), Z();
          }),
          es = (0, c.W)((e) => {
            e.preventDefault(), e.stopPropagation();
          }),
          ea = (0, c.W)((e) => {
            O(e), ee(e);
          }),
          eu = (0, l.useMemo)(() => {
            var e;
            return C
              ? (0, n.jsx)(
                  h.Caption,
                  {
                    variant: "span",
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    lineClamp: 2,
                    children: C,
                  },
                  i.getKey("description"),
                )
              : (null === (e = i.artists) || void 0 === e ? void 0 : e.length)
                ? (0, n.jsx)(
                    P.jO,
                    {
                      className: L().artists,
                      artists: i.artists,
                      lineClamp: 1,
                      linkClassName: L().artistLink,
                      captionSize: "s",
                    },
                    i.getKey("description"),
                  )
                : void 0;
          }, [C, i]),
          ed = (0, m.V)(() => {
            if (!i.isFavouritePlaylist)
              return (0, n.jsx)(
                x.dJ,
                {
                  className: (0, r.W)(L().likeButton, L().control),
                  isLiked: i.isLiked,
                  onClick: el,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                  disabled: !W.isAuthorized,
                },
                i.getKey("LikeButton"),
              );
          }),
          ec = (0, l.useMemo)(() => {
            var e;
            if (
              null == i
                ? void 0
                : null === (e = i.trailer) || void 0 === e
                  ? void 0
                  : e.isAvailable
            )
              return (0, n.jsx)(
                x.xf,
                {
                  children: (0, n.jsx)(
                    x.eP,
                    {
                      className: (0, r.W)(L().trailerButton, L().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: J,
                    },
                    i.getKey("TrailerButton"),
                  ),
                },
                i.getKey("PlaylilstCardTrailerTooltip"),
              );
          }, [J, i]),
          em = (0, l.useMemo)(
            () =>
              (0, n.jsx)(
                x.RT,
                {
                  onClick: U,
                  isPinned: i.isPinned,
                  className: (0, r.W)(L().pinButton, L().control),
                  withRipple: !1,
                },
                i.getKey("PinButton"),
              ),
            [U, i],
          ),
          ev = (0, l.useMemo)(
            () =>
              (0, n.jsx)(_.Paper, {
                className: L().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: L().coverBlock,
                  onClick: er,
                  children: [
                    (0, n.jsx)(x.BE, {
                      className: L().image,
                      src: i.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: Y,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsx)(v.kk, {
                      isVisible: V || Q,
                      className: L().controls,
                      playControl: (0, n.jsx)(
                        x.JM,
                        {
                          className: (0, r.W)(L().playButton, L().control),
                          buttonVariant: "default",
                          withHover: !1,
                          iconSize: "xl",
                          variant: "filled",
                          onClick: eo,
                          isPlaying: et,
                          disabled: !i.isAvailable,
                        },
                        i.getKey("PlayButton"),
                      ),
                      likeControl: ed,
                      menuControl: (0, n.jsx)(
                        k,
                        {
                          playlist: i,
                          onOpenChange: ea,
                          open: V,
                          onClick: es,
                          className: (0, r.W)(L().menuButton, L().control),
                          icon: (0, n.jsx)(p.Icon, {
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
                      pinControl: em,
                      trailerControl: ec,
                    }),
                  ],
                }),
              }),
            [er, i, Y, V, Q, eo, et, ed, ea, es, em, ec],
          ),
          ep = !!i.actualLikesCount && !i.isLikesCountHidden;
        return (0, n.jsxs)(v.m7, {
          ref: j,
          "aria-label": Y,
          className: (0, r.W)(L().root, t),
          title: (0, n.jsx)(h.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, n.jsx)(x.rU, {
              className: L().titleLink,
              href: i.url,
              onClick: en,
              children: i.title,
            }),
          }),
          srTitle: (0, n.jsx)(x.rU, {
            href: i.url,
            onClick: en,
            children: i.title,
          }),
          "data-intersection-property-id": N,
          contentLinesCount: g,
          view: ev,
          description: eu,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            ep &&
              (0, n.jsx)(x.DB, {
                ariaLabel: w(
                  { id: "entity-names.likes-counter" },
                  { counter: i.actualLikesCount },
                ),
                likesCount: i.actualLikesCount,
                isLiked: i.isLiked,
                handleLikeClick: Z,
              }),
            o,
          ],
        });
      });
    },
    87352: function (e, t, i) {
      "use strict";
      i.d(t, {
        PlaylistsCarousel: function () {
          return a;
        },
      });
      var n = i(75441),
        r = i(65067),
        o = i(97141),
        l = i(8152);
      let s = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: r,
            title: s,
            description: a,
            playlists: u,
            containerClassName: d,
            className: c,
            headerClassName: m,
            viewAllActionLink: v,
            headingVariant: p,
            ..._
          } = e;
          return (0, n.jsx)(o.HY, {
            isShimmerVisible: i,
            isShimmerActive: r,
            className: c,
            headerClassName: m,
            containerClassName: d,
            ref: t,
            title: s,
            description: a,
            viewAllActionLink: v,
            headingVariant: p,
            ..._,
            children:
              null == u
                ? void 0
                : u.map((e) =>
                    (0, n.jsx)(
                      l.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        a = (0, r.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }));
    },
    70794: function (e, t, i) {
      "use strict";
      i.d(t, {
        TagNotFoundPage: function () {
          return l;
        },
      });
      var n = i(75441),
        r = i(62569),
        o = i(35551);
      let l = (0, r.Pi)(() => (0, n.jsx)(o.T, {}));
    },
    6397: function (e, t, i) {
      "use strict";
      i.d(t, {
        TagPage: function () {
          return P;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(62569),
        l = i(98730),
        s = i(65067),
        a = i(9317),
        u = i(17392),
        d = i(30948),
        c = i(69947),
        m = i(7797),
        v = i(13534),
        p = i(97141),
        _ = i(450),
        h = i.n(_);
      let P = (0, o.Pi)((e) => {
        var t, i, o;
        let { tagId: _ } = e,
          {
            tag: P,
            settings: { isMobile: y },
          } = (0, v.oR4)(),
          { formatMessage: b } = (0, a.Z)(),
          { contentScrollRef: x, setContentScrollRef: f } = (0, v.$Y6)(),
          g = (0, v.k67)();
        _ || (0, l.notFound)();
        let C = (0, s.useCallback)(
          (e) => {
            P.getPlaylists({ page: e, pageSize: 20 });
          },
          [P],
        );
        P.isNotFound && (0, l.notFound)(),
          (0, s.useEffect)(
            () => () => {
              P.reset();
            },
            [P],
          );
        let k = (0, s.useMemo)(
          () => ({ Footer: () => (0, n.jsx)(p.$_, { className: h().footer }) }),
          [],
        );
        return ((0, v.NOh)(P.isResolved),
        P.isNeededToLoad &&
          (0, s.use)(P.getTag({ id: _, page: 0, pageSize: 20 })),
        P.isSomethingWrong)
          ? (0, n.jsx)(d.D, {})
          : (0, n.jsx)(v.Lh6, {
              pageId: v.Rhz.TAG,
              children: (0, n.jsx)(c.I7, {
                scrollElement: x,
                outerTitle: P.title,
                children: (0, n.jsxs)("div", {
                  className: h().root,
                  children: [
                    (0, n.jsx)(p.h4, {
                      variant: p.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: g.canBack,
                      children: (0, n.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: P.title,
                      }),
                    }),
                    (0, n.jsx)(p.Wv, {
                      className: (0, r.W)(h().scrollContainer, h().important),
                      customComponents: k,
                      itemContentCallback: (e) => {
                        var t;
                        let i =
                            null == P
                              ? void 0
                              : null === (t = P.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          r = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.playlist" }) },
                          );
                        return i
                          ? (0, n.jsx)(
                              m.ZL,
                              { playlist: i, contentLinesCount: 3 },
                              i.key,
                            )
                          : (0, n.jsx)(p.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (i =
                            null == P
                              ? void 0
                              : null === (t = P.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== i
                          ? i
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (o = P.requests) && void 0 !== o ? o : 0,
                      listClassName: h().content,
                      itemClassName: h().item,
                      handleRef: f,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.albums-list" },
                          { genreName: P.title || "" },
                        ),
                      },
                      isMobileLayout: y,
                      useWindowScroll: y,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    35551: function (e, t, i) {
      "use strict";
      i.d(t, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = i(15898);
    },
    15898: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotFound: function () {
          return p;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(62569),
        l = i(15937),
        s = i(68208),
        a = i(69756),
        u = i(17392),
        d = i(13534),
        c = i(97141),
        m = i(35129),
        v = i.n(m);
      let p = (0, o.Pi)((e) => {
        let { className: t } = e,
          { contentRef: i } = (0, d.$Y6)(),
          o = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, r.W)(v().root, { [v().root_desktop]: !i }, t),
            children: [
              (0, n.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: v().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: v().content,
                children: [
                  (0, n.jsx)(a.Icon, {
                    className: v().icon,
                    variant: "musicLogo",
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: (0, r.W)(v().title, v().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(l.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    className: (0, r.W)(v().text, v().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(l.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: o,
                    className: v().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(l.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    30948: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = i(51987);
    },
    51987: function (e, t, i) {
      "use strict";
      i.d(t, {
        SomethingWentWrong: function () {
          return _;
        },
      });
      var n = i(75441),
        r = i(32358),
        o = i(62569),
        l = i(65067),
        s = i(15937),
        a = i(68208),
        u = i(69756),
        d = i(17392),
        c = i(13534),
        m = i(97141),
        v = i(28652),
        p = i.n(v);
      let _ = (0, o.Pi)((e) => {
        let { className: t, withBackwardControl: i = !0 } = e,
          o = (0, l.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: v } = (0, c.$Y6)();
        return (0, n.jsxs)("div", {
          className: (0, r.W)(p().root, t),
          children: [
            i &&
              (0, n.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: (0, r.W)(p().navigation, {
                  [p().navigation_desktop]: !v,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, r.W)(p().content, { [p().content_shrink]: !i }),
              children: [
                (0, n.jsx)(u.Icon, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(d.Heading, {
                  className: (0, r.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(d.Caption, {
                  className: (0, r.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(a.Button, {
                  onClick: o,
                  className: p().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(d.Caption, {
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
    63950: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    75908: function (e) {
      e.exports = {
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
    53948: function (e) {
      e.exports = {
        description: "HorizontalPlaylistCard_description__KYHZF",
        likesCount: "HorizontalPlaylistCard_likesCount__rgUhr",
        tracksCount: "HorizontalPlaylistCard_tracksCount__ZdjzM",
        icon: "HorizontalPlaylistCard_icon__LHymu",
      };
    },
    96297: function (e) {
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
        trailerButton: "PlaylistCard_trailerButton__Qjg_U",
        control: "PlaylistCard_control__73YUq",
      };
    },
    450: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    35129: function (e) {
      e.exports = {
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
    28652: function (e) {
      e.exports = {
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
    92719: function (e, t, i) {
      "use strict";
      var n, r;
      i.d(t, {
        o: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).UNKNOWN = "unknown"),
        (r.MALE = "male"),
        (r.FEMALE = "female");
    },
  },
  function (e) {
    e.O(
      0,
      [
        9876, 5970, 8580, 4665, 9125, 9779, 7138, 5453, 7873, 9282, 7141, 892,
        1512, 2399, 7058, 6158, 1744,
      ],
      function () {
        return e((e.s = 94924));
      },
    ),
      (_N_E = e.O());
  },
]);
