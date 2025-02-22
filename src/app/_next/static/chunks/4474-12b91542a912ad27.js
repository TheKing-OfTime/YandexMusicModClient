(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4474],
  {
    62185: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return c;
        },
      });
      var a,
        i = n(80766),
        s = n(91207),
        o = {
          6699: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let a = n(352),
              i = n(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: n, throttleTimeout: s } = e,
                o = (0, i.useRef)(null),
                [r, l] = (0, i.useState)(!!n),
                u = (0, i.useMemo)(
                  () =>
                    (0, a.throttle)(() => {
                      l(!n),
                        o.current && window.clearTimeout(o.current),
                        (o.current = window.setTimeout(() => {
                          l(!!n);
                        }, t));
                    }, s),
                  [t, n, s],
                ),
                c = (0, i.useCallback)(() => {
                  l(!!n), o.current && window.clearTimeout(o.current);
                }, [n]);
              return (
                (0, i.useEffect)(
                  () => () => {
                    o.current && window.clearTimeout(o.current);
                  },
                  [],
                ),
                { state: r, handleDebouncedToggle: u, reset: c }
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
            e.exports = i;
          },
          810: (e) => {
            e.exports = a || (a = n.t(s, 2));
          },
        },
        r = {};
      function l(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var n = (r[e] = { exports: {} });
        return o[e](n, n.exports, l), n.exports;
      }
      var u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let e = l(810),
          t = l(361),
          n = l(6699);
        u.useScroll = (a) => {
          let { onScroll: i, listenIsScrolling: s, elementRef: o } = a,
            { state: r, handleDebouncedToggle: l } = (0, n.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            u = (0, e.useCallback)(() => {
              s && l(), null == i || i();
            }, [s, l, i]);
          return (
            (0, e.useEffect)(() => {
              let e = (0, t.getElementFromRefOrElement)(o);
              if (null === e) return;
              let n = null != e ? e : window,
                a = { capture: !0, passive: !0 };
              return (
                n.addEventListener("scroll", u, a),
                () => n.removeEventListener("scroll", u, a)
              );
            }, [o, u]),
            r
          );
        };
      })(),
        u.__esModule;
      var c = u.useScroll;
    },
    30302: function (e, t, n) {
      "use strict";
      n.d(t, {
        kT: function () {
          return u;
        },
        IT: function () {
          return C.ArtistCard;
        },
        xG: function () {
          return h.ArtistContextMenu;
        },
        o9: function () {
          return m;
        },
        DT: function () {
          return _;
        },
        rL: function () {
          return d;
        },
        lj: function () {
          return c;
        },
        ef: function () {
          return r;
        },
        r2: function () {
          return l;
        },
        Kj: function () {
          return A.SearchArtistCard;
        },
        iU: function () {
          return o;
        },
        v2: function () {
          return x.useArtistDisclaimer;
        },
      });
      var a = n(2685),
        i = n(9096),
        s = n(49724);
      let o = (e) => {
          let t = (0, i.tR)({ artist: e.artist }),
            n = (0, s.W5)(e.top);
          return (0, a.pj)({
            artist: t,
            listenTimeSeconds: e.listenTimeSeconds,
            top: n,
          });
        },
        r = 5,
        l = 9,
        u = 9,
        c = 3,
        d = 5;
      var f = n(99678),
        v = n(91207),
        p = n(58997);
      (0, v.cache)(async (e) => {
        try {
          let {
              container: t,
              backendHostTld: n,
              locale: a,
              host: i,
              fullUrl: s,
              requestUrl: o,
            } = await (0, p.rbP)(),
            l = t.get(p.na2),
            u = await l.getBriefInfo({
              artistId: e,
              popularTracksCount: r,
              fetchPlaylistLikesCounts: !0,
              discographyBlockEnabled: !0,
              useClipDataFormat: !0,
            });
          return (
            "not-found" === u.error && (0, f.notFound)(),
            {
              artist: u,
              backendHostTld: n,
              locale: a,
              host: i,
              fullUrl: s,
              requestUrl: o,
            }
          );
        } catch (e) {
          return {
            artist: void 0,
            backendHostTld: "",
            locale: null,
            host: "",
            fullUrl: null,
            requestUrl: null,
          };
        }
      });
      var x = n(95172);
      let m = a.V5.model("ArtistMeta", {
          artist: i.Go,
          lastMonthListeners: a.V5.maybe(a.V5.number),
        }),
        _ = a.V5.model("ArtistTop", {
          artist: i.Go,
          listenTimeSeconds: a.V5.number,
          top: a.V5.maybe(s.BH),
        }).views((e) => ({
          get isAvailableForPlaying() {
            if (void 0 === e.artist.counts) return !0;
            return e.artist.counts.tracks > 0;
          },
        }));
      var C = n(77112),
        h = n(22852),
        A = n(53644);
    },
    95172: function (e, t, n) {
      "use strict";
      n.d(t, {
        useArtistDisclaimer: function () {
          return r;
        },
      });
      var a = n(91207),
        i = n(10231),
        s = n(33387),
        o = n(58997);
      let r = (e) => {
        let { artist: t, callback: n, shouldHistoryBack: r } = e,
          {
            disclaimer: l,
            modals: { disclaimerModal: u },
          } = (0, o.oR4)(),
          c = (0, a.useRef)(String((0, i.Z)())),
          d = (0, a.useRef)(!1),
          f = (0, o.uK4)().get(o.ceh);
        return (
          (0, a.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === c.current &&
              !d.current &&
              (null == n || n(), (d.current = !0));
          }, [n, l.id, l.isUnsafeDisclaimerConfirmed]),
          (0, s.W)(async (e) => {
            let a = f.get(o.BUb.ExEx);
            if (
              (null == t ? void 0 : t.isUnsafeLegal) &&
              (null == a
                ? void 0
                : a.includes("".concat(o.coP.ARTIST, "_").concat(t.id)))
            ) {
              null == n || n();
              return;
            }
            if (
              (null == t ? void 0 : t.isLegalRejected) ||
              (null == t ? void 0 : t.isUnsafeLegal)
            ) {
              null == e || e.preventDefault(),
                await l.getDisclaimerData({
                  entityId: t.id,
                  entityType: o.coP.ARTIST,
                  newDisclaimerId: null == t ? void 0 : t.newModalDisclaimerId,
                }),
                t.isUnsafeLegal && l.setType(o.Gq.UNSAFE),
                l.setId(c.current),
                l.setEntityId(t.id),
                l.setEntityType(o.coP.ARTIST),
                l.setShouldHistoryBack(!!r),
                (d.current = !1),
                u.open();
              return;
            }
            null == e || e.preventDefault(), null == n || n();
          })
        );
      };
    },
    77112: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistCard: function () {
          return N;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(96233),
        o = n(91207),
        r = n(37184),
        l = n(3283),
        u = n(55975),
        c = n(19489),
        d = n(28257),
        f = n(82036),
        v = n(43998),
        p = n(81437),
        x = n(9096),
        m = n(49724),
        _ = n(58997),
        C = n(29778),
        h = n(95172),
        A = n(22852),
        b = n(73147),
        k = n.n(b);
      let N = (0, s.Pi)((e) => {
        let {
            artist: t,
            className: n,
            children: s,
            contentLinesCount: b,
            top: N,
            listenTimeSeconds: T,
          } = e,
          { ref: B, intersectionPropertyId: S } = (0, _.VfV)(),
          { trailer: y, advert: I } = (0, _.oR4)(),
          { notify: j } = (0, _.d$W)(),
          { from: E, utmLink: R } = (0, _.MhG)({
            contextId: t.id,
            contextType: c.A.Artist,
          }),
          { formatMessage: w } = (0, r.Z)(),
          [M, g] = (0, o.useState)(!1),
          [P, z] = (0, o.useState)(!1),
          [O, L] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: F,
            sendNavigateSearchFeedback: D,
            sendPlaySearchFeedback: G,
          } = (0, _.sAF)(),
          U = (0, _.zxW)(),
          W = (0, x.SB)(t),
          q = (0, x.BV)(t),
          { id: K, name: $, coverUri: V, isLiked: H } = t,
          Z = (0, _.s0h)(t.url),
          X = (0, _.s0h)(t.url, !0),
          [Y, J] = (0, o.useState)(!1),
          Q = (0, _.FTC)(),
          ee = (0, o.useCallback)(
            (e) => {
              if ((e.stopPropagation(), I.isAdvertShown)) {
                e.preventDefault(),
                  j((0, a.jsx)(C.vd, {}), { containerId: _.W$x.INFO });
                return;
              }
              y.openArtistTrailer(t.id), Q(l.OB.Artist, t.id);
            },
            [t.id, Q, y, I.isAdvertShown, j],
          ),
          et = (0, o.useMemo)(() => {
            let e = w({ id: "entity-names.artist-name" }, { artistName: $ }),
              t = H ? w({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [$, H, w]),
          { isPlaying: en, togglePlay: ea } = (0, _.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Artist,
                meta: { id: Number(K) },
                from: E,
                utmLink: R,
              },
              loadContextMeta: !0,
            },
          }),
          ei = (0, h.useArtistDisclaimer)({ artist: t, callback: Z }),
          es = (0, h.useArtistDisclaimer)({ artist: t, callback: X }),
          eo = (0, h.useArtistDisclaimer)({ artist: t, callback: ea }),
          er = (0, x.ik)(es, ei),
          el = (0, o.useCallback)(
            (e) => {
              null == D || D(), U({ to: l.qU.ArtistScreen }), er(e);
            },
            [D, U, er],
          ),
          eu = (0, o.useCallback)(
            (e) => {
              el(e);
            },
            [el],
          ),
          ec = (0, o.useCallback)(() => {
            M || en || (g(!0), null == G || G()), eo();
          }, [en, M, G, eo]),
          ed = (0, o.useCallback)(() => {
            P || H || (z(!0), null == F || F()), W();
          }, [H, W, P, F]),
          ef = (0, o.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ev = (0, o.useCallback)(() => {
            L(!O), J(!O);
          }, [O]),
          ep = (0, o.useMemo)(
            () =>
              (0, a.jsx)(
                A.ArtistContextMenu,
                {
                  artist: t,
                  onOpenChange: ev,
                  open: O,
                  onClick: ef,
                  className: (0, i.W)(k().menuButton, k().control),
                  size: "s",
                  icon: (0, a.jsx)(f.Icon, { size: "xxs", variant: "more" }),
                },
                t.getKey("ArtistContextMenu"),
              ),
            [t, ef, ev, O],
          ),
          ex = (0, o.useMemo)(() => {
            var e;
            if (
              null == t
                ? void 0
                : null === (e = t.trailer) || void 0 === e
                  ? void 0
                  : e.isAvailable
            )
              return (0, a.jsx)(
                C.xf,
                {
                  children: (0, a.jsx)(
                    C.eP,
                    {
                      className: (0, i.W)(k().trailerButton, k().control),
                      radius: "round",
                      size: "s",
                      iconSize: "xxs",
                      onClick: ee,
                    },
                    t.getKey("TrailerButton"),
                  ),
                },
                t.getKey("ArtistCardTrailerTooltip"),
              );
          }, [t, ee]),
          em = (0, o.useMemo)(() => {
            if (t.isAvailable)
              return (0, a.jsx)(
                d.kk,
                {
                  isVisible: O || Y,
                  className: k().controls,
                  radius: "round",
                  playControl: (0, a.jsx)(
                    C.JM,
                    {
                      buttonVariant: "default",
                      withHover: !1,
                      className: (0, i.W)(k().playButton, k().control),
                      iconSize: "xl",
                      variant: "filled",
                      onClick: ec,
                      isPlaying: en,
                      disabled: !t.isAvailableForPlaying,
                    },
                    t.getKey("PlayButton"),
                  ),
                  likeControl: (0, a.jsx)(
                    C.dJ,
                    {
                      className: (0, i.W)(k().likeButton, k().control),
                      isLiked: H,
                      onClick: ed,
                      variant: "default",
                      size: "s",
                      iconSize: "xxs",
                    },
                    t.getKey("LikeButton"),
                  ),
                  menuControl: ep,
                  pinControl: (0, a.jsx)(
                    C.RT,
                    {
                      onClick: q,
                      isPinned: t.isPinned,
                      className: (0, i.W)(k().pinButton, k().control),
                      withRipple: !1,
                    },
                    t.getKey("PinButton"),
                  ),
                  trailerControl: ex,
                },
                t.getKey("ArtistCardControls"),
              );
          }, [t, O, Y, ec, en, H, ed, ep, q, ex]),
          e_ = (0, o.useMemo)(
            () =>
              (0, a.jsx)(v.Paper, {
                className: k().cover,
                radius: "round",
                withShadow: !0,
                ...(0, u.BA)(u.bG.artist.ARTIST_CARD),
                children: (0, a.jsxs)("div", {
                  className: k().coverBlock,
                  onClick: eu,
                  children: [
                    (0, a.jsx)(C.BE, {
                      className: k().image,
                      src: V,
                      size: 200,
                      fit: "cover",
                      alt: et,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    em,
                  ],
                }),
              }),
            [eu, V, et, t.isAvailable, em],
          ),
          eC = (0, o.useMemo)(() => {
            if (!T) return null;
            let e = T / 60;
            return e <= 45
              ? w({ id: "time.minutes-left" }, { minutes: Math.round(e) })
              : w(
                  { id: "time.hours" },
                  { hours: Math.round((e / 60) * 2) / 2 },
                );
          }, [w, T]);
        return (0, a.jsx)(d.m7, {
          ref: B,
          className: (0, i.W)(k().root, n),
          textPosition: "center",
          "aria-label": et,
          title: (0, a.jsxs)(a.Fragment, {
            children: [
              N &&
                (0, a.jsx)(
                  m.kL,
                  {
                    className: k().chart,
                    position: N.position,
                    progress: N.progress,
                    weight: "bold",
                    positionClassName: k().position,
                  },
                  t.getKey("chart"),
                ),
              (0, a.jsx)(p.Caption, {
                variant: "div",
                type: "entity",
                size: "s",
                weight: "medium",
                lineClamp: 2,
                children: (0, a.jsx)(C.rU, {
                  className: k().titleLink,
                  href: t.url,
                  "aria-label": et,
                  onClick: el,
                  ...(0, u.BA)(u.bG.artist.ARTIST_TITLE),
                  children: $,
                }),
              }),
              eC &&
                (0, a.jsxs)("div", {
                  className: k().listenTime,
                  children: [
                    (0, a.jsx)(f.Icon, {
                      "aria-hidden": !0,
                      size: "xxxs",
                      variant: "listen",
                    }),
                    (0, a.jsx)(p.Caption, {
                      variant: "div",
                      type: "entity",
                      size: "l",
                      weight: "medium",
                      lineClamp: 1,
                      children: eC,
                    }),
                  ],
                }),
            ],
          }),
          srTitle: (0, a.jsx)(C.rU, { href: t.url, onClick: el, children: et }),
          "data-intersection-property-id": S,
          contentLinesCount: b,
          view: e_,
          ...(0, u.BA)(u.bG.artist.ARTIST_ITEM),
          children: s,
        });
      });
    },
    22852: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistContextMenu: function () {
          return p;
        },
      });
      var a = n(65301),
        i = n(96233),
        s = n(91207),
        o = n(37184),
        r = n(3283),
        l = n(55975),
        u = n(19489),
        c = n(92154),
        d = n(9096),
        f = n(58997),
        v = n(29778);
      let p = (0, i.Pi)((e) => {
        var t, n, i;
        let { artist: p, onOpenChange: x, open: m, ..._ } = e,
          { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: h } =
            (0, f.vLf)(),
          {
            settings: { isMobile: A },
            trailer: b,
            advert: k,
            user: N,
          } = (0, f.oR4)(),
          { notify: T } = (0, f.d$W)(),
          B = (0, d.BV)(p),
          S = (0, d.SB)(p),
          y = (0, d.KX)(p),
          I = (0, f.FTC)(),
          j = "".concat(f.aUg.ARTIST, "-").concat(null == p ? void 0 : p.id),
          { formatMessage: E } = (0, o.Z)(),
          { utmLink: R } = (0, f.MhG)({
            blockId: f.aUg.ARTIST,
            contextType: u.A.Artist,
            contextId: null == p ? void 0 : p.id,
          }),
          { href: w } = (0, f.qKB)(
            null !== (n = null == p ? void 0 : p.url) && void 0 !== n ? n : "",
          ),
          { isPlaying: M, togglePlay: g } = (0, f.QhE)({
            seeds:
              null !== (i = null == p ? void 0 : p.seeds) && void 0 !== i
                ? i
                : [],
            pageIdForFrom: f.Rhz.RADIO,
            blockIdForFrom: j,
          }),
          P = (0, s.useCallback)(() => {
            if (C && N.isAuthorized) {
              h();
              return;
            }
            M || g();
          }, [M, C, h, g, N.isAuthorized]),
          z = (0, s.useCallback)(() => {
            if (C) {
              h();
              return;
            }
            if (k.isAdvertShown) {
              T((0, a.jsx)(v.vd, {}), { containerId: f.W$x.INFO });
              return;
            }
            (null == p ? void 0 : p.id) &&
              (b.setUtmLink(R),
              b.openArtistTrailer(p.id),
              I(r.OB.Artist, p.id));
          }, [C, k.isAdvertShown, null == p ? void 0 : p.id, h, T, b, R, I]);
        (0, f.ZP4)(m);
        let O = {
          variant: f.GGO.ARTIST,
          id: null == p ? void 0 : p.id,
          title: null == p ? void 0 : p.name,
          path: null == p ? void 0 : p.url,
        };
        return (0, a.jsxs)(c.v2, {
          isMobile: A,
          offsetOptions: 10,
          open: m,
          onOpenChange: x,
          ariaLabel: E({ id: "interface-actions.context-menu" }),
          containerProps: (0, l.BA)(l.bG.artist.ARTIST_CONTEXT_MENU),
          ..._,
          children: [
            !A &&
              (0, a.jsx)(v.Zd, {
                onClick: B,
                isPinned: null == p ? void 0 : p.isPinned,
              }),
            (0, a.jsx)(v.xZ, {
              onClick: S,
              isLiked: null == p ? void 0 : p.isLiked,
              disabled: !(null == p ? void 0 : p.isAvailable),
            }),
            (null == p
              ? void 0
              : null === (t = p.trailer) || void 0 === t
                ? void 0
                : t.isAvailable) && (0, a.jsx)(v.NB, { onClick: z }),
            (0, a.jsx)(v.GQ, {
              onClick: P,
              disabled: !(null == p ? void 0 : p.isAvailable),
              variant: f.xIL.ARTIST,
              onOpenMenuChange: x,
            }),
            (0, a.jsx)(v.zq, { disabled: !p, shareLink: w, entityMeta: O }),
            (0, a.jsx)(v.ZL, {
              onClick: y,
              isDisliked: null == p ? void 0 : p.isDisliked,
              disabled: !(null == p ? void 0 : p.isAvailable),
            }),
          ],
        });
      });
    },
    53644: function (e, t, n) {
      "use strict";
      n.d(t, {
        SearchArtistCard: function () {
          return x;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(96233),
        o = n(91207),
        r = n(55975),
        l = n(19489),
        u = n(60383),
        c = n(82036),
        d = n(81437),
        f = n(58997),
        v = n(29778),
        p = n(95172);
      let x = (0, s.Pi)((e) => {
        let { className: t, artist: n, pageId: s, description: x } = e,
          { ref: m, intersectionPropertyId: _ } = (0, f.VfV)(),
          { from: C } = (0, f.MhG)({ pageId: s }),
          h = (0, f.s0h)(n.url),
          {
            isPlaying: A,
            isCurrent: b,
            togglePlay: k,
          } = (0, f.qmq)({
            playContextParams: {
              contextData: {
                type: l.A.Artist,
                meta: { id: Number(n.id) },
                from: C,
              },
              loadContextMeta: !0,
            },
          }),
          N = (0, p.useArtistDisclaimer)({ artist: n, callback: h }),
          T = (0, p.useArtistDisclaimer)({ artist: n, callback: k }),
          B = (0, o.useCallback)(
            (e) => {
              (0, u.m)(e, v.$C.ripple), N(e);
            },
            [N],
          ),
          S = (0, o.useCallback)(
            (e) => {
              N(e);
            },
            [N],
          ),
          y = (0, o.useCallback)(
            (e) =>
              (0, a.jsx)(v.Df, {
                isAvailable: n.isAvailable,
                isDisliked: !1,
                coverUri: n.coverUri,
                title: n.name,
                className: v.$C.playButtonCell,
                radius: "round",
                ...e,
              }),
            [n, !1],
          ),
          I =
            null == y
              ? void 0
              : y({ onPlayButtonClick: T, isPlaying: A, isCurrent: b }),
          j = (0, o.useMemo)(
            () =>
              n.url && n.isAvailable
                ? (0, a.jsx)(v.rU, {
                    className: (0, i.W)(v.$C.text, v.$C.titleLink),
                    href: n.url,
                    onClick: S,
                    ...(0, r.BA)(r.bG.artist.SEARCH_ARTIST_CARD_TITLE_LINK),
                    children: n.name,
                  })
                : (0, a.jsx)(d.Caption, {
                    className: (0, i.W)(v.$C.text, v.$C.titleText),
                    size: "m",
                    variant: "div",
                    type: "text",
                    children: n.name,
                  }),
            [n.isAvailable, n.name, n.url, S],
          );
        return (0, a.jsxs)(v.Md, {
          ref: m,
          "data-intersection-property-id": _,
          className: (0, i.W)(
            v.$C.root,
            { [v.$C.root_disabled]: !n.isAvailable },
            t,
          ),
          "aria-label": n.name,
          onClick: B,
          ...(0, r.BA)(r.bG.artist.SEARCH_ARTIST_CARD),
          children: [
            I,
            (0, a.jsx)(v.u, {
              isDisabled: !n.isAvailable,
              isDisliked: !1,
              title: j,
              description: x,
            }),
            (0, a.jsx)("div", {
              className: v.$C.controlsBarCell,
              children: (0, a.jsx)(c.Icon, {
                className: v.$C.buttonArrow,
                variant: "arrowRight",
                size: "xs",
              }),
            }),
          ],
        });
      });
    },
    21016: function (e, t, n) {
      "use strict";
      n.d(t, {
        I7: function () {
          return f;
        },
        kl: function () {
          return v;
        },
        b4: function () {
          return p;
        },
        at: function () {
          return s;
        },
      }),
        n(40174);
      var a = n(91207),
        i = n(58997);
      let s = (e, t) => (
        (0, i.uK4)().get(i.Xt8),
        [
          (0, a.useMemo)(() => {
            if (void 0 === t) return {};
            let n = t - 17;
            return {
              "--average-color-background": e,
              transform: "translateY(".concat(t >= 17 ? 0 : n, "px)"),
              opacity: 1,
            };
          }, [t, !1, e]),
          (0, a.useMemo)(() => ({ "--average-color-background": e }), [e]),
        ]
      );
      var o = n(65301),
        r = n(66591),
        l = n(96233),
        u = n(62185),
        c = n(29778);
      let d = (e) => {
          let { element: t, scrollTop: n, isMobile: a } = e,
            i = 0.4 * t.clientHeight;
          return n + (a ? 60 : 76) >= t.offsetTop + i;
        },
        f = (0, l.Pi)((e) => {
          let {
              children: t,
              scrollElement: n,
              outerTitle: s = "",
              headerElement: l,
              headerThreshold: f,
              shouldHideHeader: v,
            } = e,
            [p, x] = (0, a.useState)(s),
            [m, _] = (0, a.useState)(null),
            [C, h] = (0, a.useState)(null),
            [A, b] = (0, a.useState)(null),
            [k, N] = (0, a.useState)(!1),
            [T, B] = (0, a.useState)(!1),
            [S, y] = (0, a.useState)(!1),
            [I, j] = (0, a.useState)(!1),
            {
              settings: { isMobile: E },
            } = (0, i.oR4)();
          (0, a.useLayoutEffect)(() => {
            x(s);
          }, [s]);
          let R = (0, a.useCallback)(() => {
            let e = null != f ? f : 10,
              t = l ? Number(l.offsetTop) - e : e;
            t < 0 && (t = 0);
            let a = (e) => {
              y(e > t),
                v && j(e > 30),
                (null == m ? void 0 : m.current) &&
                  N(
                    d({
                      element: null == m ? void 0 : m.current,
                      scrollTop: e,
                      isMobile: E,
                    }),
                  ),
                (null == C ? void 0 : C.current) &&
                  B(
                    d({
                      element: null == C ? void 0 : C.current,
                      scrollTop: e,
                      isMobile: E,
                    }),
                  );
            };
            E ? a(window.scrollY) : n && a(n.scrollTop);
          }, [f, l, E, v, m, C, n]);
          (0, a.useEffect)(() => {
            E
              ? 0 === window.scrollY && y(!1)
              : (n && 0 !== n.scrollTop) || y(!1);
          }, [n, null == n ? void 0 : n.scrollTop, E]);
          let w = (0, a.useMemo)(
            () =>
              E
                ? { onScroll: (0, r.Z)(R, 200) }
                : { onScroll: (0, r.Z)(R, 200), elementRef: n },
            [R, n, E],
          );
          (0, u.v)(w);
          let M = (0, a.useMemo)(
            () => ({
              title: p,
              setTitle: x,
              titleElement: m,
              scrollElement: E ? null : n,
              setTitleElement: _,
              childElement: C,
              setChildElement: h,
              child: A,
              setChild: b,
              isScrolledChild: T,
              isScrolledTitle: k,
              isScrolling: S,
              isHeaderHidden: I,
            }),
            [p, k, m, n, S, E, A, C, T, I],
          );
          return (0, o.jsx)(c.pI.Provider, { value: M, children: t });
        }),
        v = (e) => {
          let { children: t, child: n, className: i } = e,
            { setChildElement: s, setChild: r } = (0, a.useContext)(c.pI),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              (null == l ? void 0 : l.current) && s(l), n && r(n);
            }, [l, n, s, r]),
            (0, a.useEffect)(
              () => () => {
                r(null);
              },
              [r],
            ),
            (0, o.jsx)("div", { ref: l, className: i, children: t })
          );
        },
        p = (e) => {
          let { children: t, title: n, className: i } = e,
            { setTitleElement: s, setTitle: r } = (0, a.useContext)(c.pI),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              (null == l ? void 0 : l.current) && s(l), n && r(n);
            }, [l, n, s, r]),
            (0, a.useEffect)(
              () => () => {
                r("");
              },
              [r],
            ),
            (0, o.jsx)("div", { ref: l, className: i, children: t })
          );
        };
    },
    48264: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var a = n(65301),
        i = n(35941),
        s = n(33387),
        o = n(58997),
        isVibeContainer = n(98),
        r = n(1578);
      let l = () => {
        let { notify: e } = (0, o.d$W)(),
          { sonataState: t, fullscreenPlayer: n } = (0, o.oR4)(),
          l = (0, o.R$C)();
        return (0, s.W)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let s = i.zq.NONE;
          if(isVibeContainer.x({data: {type: t?.contextType}}) && t.repeatMode === i.zq.NONE) {
              s = i.zq.ONE;
          } else {
            switch (t.repeatMode) {
              case i.zq.NONE:
                s = i.zq.CONTEXT;
                break;
              case i.zq.CONTEXT:
                s = i.zq.ONE;
            }
          }
          null == l || l.setRepeatMode(s),
            e((0, a.jsx)(r.NotificationRepeat, { repeatMode: s }), {
              containerId: n.modal.isOpened
                ? o.W$x.FULLSCREEN_INFO
                : o.W$x.INFO,
            });
        });
      };
    },
    19408: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      var a = n(65301),
        i = n(33387),
        s = n(58997),
        o = n(92624);
      let r = () => {
        let { notify: e } = (0, s.d$W)(),
          { sonataState: t, fullscreenPlayer: n } = (0, s.oR4)(),
          r = (0, s.R$C)();
        return (0, i.W)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == r || r.toggleShuffle(),
            e(
              (0, a.jsx)(o.NotificationShuffle, {
                shuffle: !!(null == r
                  ? void 0
                  : r.state.queueState.shuffle.value),
              }),
              {
                containerId: n.modal.isOpened
                  ? s.W$x.FULLSCREEN_INFO
                  : s.W$x.INFO,
              },
            ));
        });
      };
    },
    1578: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationRepeat: function () {
          return v;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(91207),
        o = n(44729),
        r = n(35941),
        l = n(82036),
        u = n(81437),
        c = n(29778),
        d = n(83253),
        f = n.n(d);
      let v = (e) => {
        let { repeatMode: t, closeToast: n } = e,
          d = t === r.zq.ONE ? "repeat_one" : "repeat",
          v = (0, s.useMemo)(() => {
            let e;
            switch (t) {
              case r.zq.CONTEXT:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case r.zq.ONE:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case r.zq.NONE:
              default:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, a.jsx)(u.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, a.jsx)(c.Yj, {
          cover: (0, a.jsx)(l.Icon, {
            className: (0, i.W)(f().icon, {
              [f().icon_unset]: t === r.zq.NONE,
            }),
            size: "xs",
            variant: d,
          }),
          message: v,
          closeToast: n,
        });
      };
    },
    92624: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationShuffle: function () {
          return f;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(91207),
        o = n(44729),
        r = n(82036),
        l = n(81437),
        u = n(29778),
        c = n(2557),
        d = n.n(c);
      let f = (e) => {
        let { shuffle: t, closeToast: n } = e,
          c = (0, s.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, a.jsx)(o.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, a.jsx)(o.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, a.jsx)(l.Caption, {
                className: d().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, a.jsx)(u.Yj, {
          cover: (0, a.jsx)(r.Icon, {
            className: (0, i.W)(d().icon, { [d().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: c,
          closeToast: n,
        });
      };
    },
    23116: function (e, t, n) {
      "use strict";
      n.d(t, {
        RepeatButton: function () {
          return x;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(37184),
        o = n(55975),
        r = n(35941),
        l = n(78372),
        u = n(82036),
        c = n(48264),
        d = n(61998),
        f = n.n(d);
      let v = (e, t, n) =>
          t(
            e === r.zq.NONE || n
              ? { id: "player-actions.repeat" }
              : e === r.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        p = (e, t) =>
          e === r.zq.NONE || t
            ? o.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === r.zq.ONE
              ? o.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : o.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        x = (e) => {
          let {
              isDisabled: t,
              repeatMode: n,
              className: d,
              iconClassName: x,
              size: m = "xxxs",
              iconSize: _ = "xs",
              color: C,
              variant: h = "default",
            } = e,
            A = (0, c.t)(),
            { formatMessage: b } = (0, s.Z)(),
            k = t || n !== r.zq.ONE ? "repeat" : "repeat_one",
            N = v(n, b, t);
          return (0, a.jsx)(l.z, {
            className: d,
            radius: "round",
            size: m,
            variant: h,
            color: C,
            disabled: t,
            withRipple: !1,
            "aria-hidden": t,
            "aria-label": N,
            "aria-pressed": !t && n !== r.zq.NONE,
            onClick: A,
            icon: (0, a.jsx)(u.Icon, {
              size: _,
              variant: k,
              className: (0, i.W)(
                f().repeatIcon,
                f()["repeatIcon_".concat(n)],
                { [f().repeatIcon_disabled]: t },
                x,
              ),
            }),
            ...(0, o.BA)(p(n, t)),
          });
        };
    },
    93477: function (e, t, n) {
      "use strict";
      n.d(t, {
        ShuffleButton: function () {
          return f;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(37184),
        o = n(55975),
        r = n(78372),
        l = n(82036),
        u = n(19408),
        c = n(34300),
        d = n.n(c);
      let f = (e) => {
        let {
            isDisabled: t,
            shuffle: n,
            className: c,
            size: f = "xxxs",
            variant: v = "default",
            iconSize: p = "xs",
            color: x,
          } = e,
          m = (0, u.m)(),
          { formatMessage: _ } = (0, s.Z)();
        return (0, a.jsx)(r.z, {
          className: c,
          radius: "round",
          size: f,
          variant: v,
          color: x,
          withRipple: !1,
          disabled: t,
          "aria-label": _({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && n,
          "aria-hidden": t,
          icon: (0, a.jsx)(l.Icon, {
            variant: "shuffle",
            size: p,
            className: (0, i.W)(d().shuffleIcon, {
              [d().shuffleIcon_disabled]: t,
              [d().shuffleIcon_on]: !t && n,
              [d().shuffleIcon_off]: !t && !n,
            }),
          }),
          onClick: m,
          ...(0, o.BA)(o.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    70676: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataControls: function () {
          return E;
        },
      });
      var a = n(65301),
        i = n(96233),
        s = n(91207),
        o = n(33387),
        r = n(86348),
        l = n(58997),
        u = n(48264);
      let c = () => {
        let { entityMeta: e } = (0, l.oR4)().sonataState,
          t = (0, l.R$C)();
        return {
          rewindBackwards: (0, s.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = t.state.playerState.progress.value.position - 15;
            t.setProgress(n < 0 ? 0 : n);
          }, [e, t]),
          rewindForward: (0, s.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = e.durationMs / 1e3,
              a = t.state.playerState.progress.value.position + 30;
            t.setProgress(a < n ? a : n);
          }, [e, t]),
        };
      };
      var d = n(19408),
        f = n(36957),
        v = n(29778);
      let p = (e) => {
        let {
          disabled: t,
          isPlaying: n,
          onClickPlayPause: i,
          className: s,
        } = e;
        return (0, a.jsx)(v.JM, {
          className: s,
          size: "s",
          disabled: t,
          isPlaying: n,
          onClick: i,
          forcedPlayAd: !0,
        });
      };
      var x = n(9695),
        m = n(37184),
        _ = n(55975),
        C = n(78372),
        h = n(82036),
        A = n(23116),
        b = n(93477),
        k = n(41192),
        N = n.n(k);
      let T = (0, i.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: i,
            canMoveForward: s,
            canMoveBackward: o,
            canRewind: r,
            canShuffle: l,
            onClickNext: u,
            onClickPrev: c,
            onRewindBackwardsClick: d,
            onRewindForwardClick: f,
            onClickPlayPause: p,
            canChangeRepeatMode: k,
            shuffle: T,
            className: B,
          } = e,
          { formatMessage: S } = (0, m.Z)();
        return (0, a.jsxs)("div", {
          className: (0, x.W)(N().root, B),
          children: [
            (0, a.jsxs)("div", {
              className: N().buttonContainer,
              children: [
                (t || l) &&
                  (0, a.jsx)(b.ShuffleButton, {
                    className: N().sonataButton,
                    size: "s",
                    iconSize: "xxs",
                    color: "secondary",
                    isDisabled: t,
                    shuffle: T,
                    ...(0, _.BA)(_.bG.sonata.SHUFFLE_BUTTON),
                  }),
                !t &&
                  r &&
                  (0, a.jsx)(C.z, {
                    className: (0, x.W)(N().sonataButton, N().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": S({ id: "player-actions.rewind-backwards" }),
                    icon: (0, a.jsx)(h.Icon, { variant: "rewindBackwards" }),
                    onClick: d,
                    ...(0, _.BA)(_.bG.sonata.REWIND_BACKWARDS_BUTTON),
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: N().sonataButtons,
              children: [
                (0, a.jsx)(C.z, {
                  className: N().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": S({ id: "player-actions.previous-track" }),
                  icon: (0, a.jsx)(h.Icon, { variant: "previous" }),
                  onClick: c,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, a.jsx)(v.JM, {
                  className: N().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: n,
                  iconClassName: N().playPauseButtonIcon,
                  onClick: p,
                }),
                (0, a.jsx)(C.z, {
                  className: N().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !s,
                  withRipple: !1,
                  "aria-label": S({ id: "player-actions.next-track" }),
                  icon: (0, a.jsx)(h.Icon, { variant: "next" }),
                  onClick: u,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: N().buttonContainer,
              children: [
                !t &&
                  r &&
                  (0, a.jsx)(C.z, {
                    className: (0, x.W)(N().sonataButton, N().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": S({ id: "player-actions.rewind-forward" }),
                    icon: (0, a.jsx)(h.Icon, { variant: "rewindForward" }),
                    onClick: f,
                    ...(0, _.BA)(_.bG.sonata.REWIND_FORWARD_BUTTON),
                  }),
                (t || k) &&
                  (0, a.jsx)(A.RepeatButton, {
                    className: N().sonataButton,
                    size: "s",
                    color: "secondary",
                    isDisabled: t,
                    iconSize: "xxs",
                    repeatMode: i,
                  }),
              ],
            }),
          ],
        });
      });
      var B = n(19489),
        S = n(26382),
        y = n(70243),
        I = n.n(y);
      let j = (0, i.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: n,
              canMoveBackward: i,
              canRewind: o,
              onClickNext: r,
              onClickPrev: u,
              onRewindBackwardsClick: c,
              onRewindForwardClick: d,
              onClickPlayPause: f,
              className: p,
            } = e,
            { formatMessage: _ } = (0, m.Z)(),
            { user: A, sonataState: b } = (0, l.oR4)(),
            k = (0, l.XUT)(),
            N = b.entityMeta,
            T = b.contextType === B.A.Generative,
            y = A.isAuthorized && !T,
            j = (0, S.SB)(b.entityMeta),
            E = (0, S.KX)(b.entityMeta);
          (0, s.useEffect)(() => {
            if (!b.isGenerativeContext)
              return (
                null == k || k.addShortcutsListener(l.Pwk.MAIN, l.yxF.LIKE, j),
                null == k ||
                  k.addShortcutsListener(l.Pwk.MAIN, l.yxF.DISLIKE, E),
                () => {
                  null == k ||
                    k.removeShortcutsListener(l.Pwk.MAIN, l.yxF.LIKE),
                    null == k ||
                      k.removeShortcutsListener(l.Pwk.MAIN, l.yxF.DISLIKE);
                }
              );
          }, [E, j, k, b.isGenerativeContext]);
          let R = (0, s.useMemo)(
              () =>
                o
                  ? (0, a.jsx)(C.z, {
                      className: I().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      withRipple: !1,
                      "aria-label": _({
                        id: "player-actions.rewind-backwards",
                      }),
                      icon: (0, a.jsx)(h.Icon, { variant: "rewindBackwards" }),
                      onClick: c,
                    })
                  : (0, a.jsx)(C.z, {
                      className: I().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !i,
                      withRipple: !1,
                      "aria-label": _({ id: "player-actions.previous-track" }),
                      icon: (0, a.jsx)(h.Icon, { variant: "previous" }),
                      onClick: u,
                    }),
              [o, i, _, u, c],
            ),
            w = (0, s.useMemo)(
              () =>
                o
                  ? (0, a.jsx)(C.z, {
                      className: I().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !n,
                      withRipple: !1,
                      "aria-label": _({ id: "player-actions.rewind-forward" }),
                      icon: (0, a.jsx)(h.Icon, { variant: "rewindForward" }),
                      onClick: d,
                    })
                  : (0, a.jsx)(C.z, {
                      className: I().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      withRipple: !1,
                      "aria-label": _({ id: "player-actions.next-track" }),
                      icon: (0, a.jsx)(h.Icon, { variant: "next" }),
                      onClick: r,
                    }),
              [o, n, _, r, d],
            );
          return (0, a.jsxs)("div", {
            className: (0, x.W)(I().root, p),
            children: [
              (0, a.jsx)("div", {
                className: I().buttonContainer,
                children:
                  N &&
                  y &&
                  (0, a.jsx)(v.FM, {
                    fallback: (0, a.jsx)(v.Q1, {
                      isDisliked: N.isDisliked,
                      onClick: E,
                    }),
                  }),
              }),
              (0, a.jsxs)("div", {
                className: I().sonataButtons,
                children: [
                  R,
                  (0, a.jsx)(v.JM, {
                    className: I().sonataButton,
                    iconSize: "xxl",
                    variant: "filled",
                    color: "secondary",
                    isPlaying: t,
                    iconClassName: I().playPauseButtonIcon,
                    onClick: f,
                  }),
                  w,
                ],
              }),
              (0, a.jsx)("div", {
                className: I().buttonContainer,
                children:
                  N &&
                  y &&
                  (0, a.jsx)(v.FM, {
                    fallback: (0, a.jsx)(v.dJ, {
                      isLiked: N.isLiked,
                      onClick: j,
                    }),
                  }),
              }),
            ],
          });
        }),
        E = (0, i.Pi)((e) => {
          var t, n;
          let { isMobile: i, entityMeta: v, isFullscreen: x, className: m } = e,
            {
              sonataState: _,
              vibe: C,
              advert: h,
              modals: { popoverOverPlayer: A },
            } = (0, l.oR4)(),
            b = (0, l.XUT)(),
            k = (0, l.R$C)(),
            { rewindBackwards: N, rewindForward: B } = c(),
            S = (0, l.RVp)(),
            y = (0, l.ozq)(),
            I = S && (null == v ? void 0 : v.isNonMusic),
            { togglePlay: E } = (0, l.QhE)({
              seeds:
                null !==
                  (n =
                    null === (t = C.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: l.Rhz.HOME,
              blockIdForFrom: l.BEo.RUP_MAIN_RADIO,
              onPlayInterrupted: A.open,
            }),
            R = (0, s.useMemo)(
              () =>
                h.isAdvertShown
                  ? h.isAdvertPlaying
                  : [
                      r.Xz.PLAYING,
                      r.Xz.LOADING_MEDIA_SOURCE,
                      r.Xz.LOADING_MEDIA_DATA,
                    ].includes(_.status),
              [_.status, h.isAdvertShown, h.isAdvertPlaying],
            ),
            w = (0, o.W)(() => {
              if (h.isAdvertShown) {
                var e;
                null == y ||
                  null === (e = y.audioAdvertPlayback) ||
                  void 0 === e ||
                  e.togglePause();
                return;
              }
              v ? null == k || k.togglePause() : E();
            }),
            M = (0, o.W)(() => {
              null == k || k.moveForward();
            }),
            g = (0, o.W)(() => {
              null == k || k.moveBackward();
            }),
            P = (0, d.m)(),
            z = (0, u.t)();
          (0, s.useEffect)(() => {
            if (
              !x &&
              (null == b ||
                b.addShortcutsListener(l.Pwk.MAIN, l.yxF.TOGGLE_PLAY, w),
              !h.isAdvertShown)
            )
              return (
                null == b ||
                  b.addShortcutsListener(l.Pwk.MAIN, l.yxF.TOGGLE_REPEAT, z),
                null == b ||
                  b.addShortcutsListener(l.Pwk.MAIN, l.yxF.TOGGLE_SHUFFLE, P),
                () => {
                  null == b ||
                    b.removeShortcutsListener(l.Pwk.MAIN, l.yxF.TOGGLE_PLAY),
                    h.isAdvertShown ||
                      (null == b ||
                        b.removeShortcutsListener(
                          l.Pwk.MAIN,
                          l.yxF.TOGGLE_SHUFFLE,
                        ),
                      null == b ||
                        b.removeShortcutsListener(
                          l.Pwk.MAIN,
                          l.yxF.TOGGLE_REPEAT,
                        ));
                }
              );
          }, [x, w, z, P, b, h.isAdvertShown]);
          let O = (0, s.useMemo)(() => (x ? (i ? j : T) : i ? p : f.S), [i, x]);
          return (0, a.jsx)(O, {
            className: m,
            disabled: null === _.entityMeta || (h.isAdvertShown && !i),
            isPlaying: R || !1,
            canMoveBackward: _.canMoveBackward && !h.isAdvertShown,
            canMoveForward: _.canMoveForward && !h.isAdvertShown,
            canShuffle: _.canShuffle,
            shuffle: _.shuffle,
            onClickPlayPause: w,
            onClickNext: M,
            onClickPrev: g,
            canRewind: I && !h.isAdvertShown,
            onRewindBackwardsClick: N,
            onRewindForwardClick: B,
            canChangeRepeatMode: _.canChangeRepeatMode,
            repeatMode: _.repeatMode,
          });
        });
    },
    36957: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return b;
        },
      });
      var a = n(65301),
        i = n(9695),
        s = n(96233),
        o = n(91207),
        r = n(37184),
        l = n(55975),
        u = n(78372),
        c = n(82036),
        d = n(58997),
        f = n(29778),
        v = n(19489),
        p = n(86348);
      let x = () => {
        let {
            sonataState: e,
            modals: { popoverOverPlayer: t },
            user: n,
          } = (0, d.oR4)(),
          { isPassToProduct: a } = (0, d.NMB)(),
          i = (0, d.R$C)(),
          s = e.contextType === v.A.Generative;
        (0, o.useEffect)(() => {
          if ((n.isAuthorized && !a) || s) return;
          let e =
            null == i
              ? void 0
              : i.state.playerState.event.onChange((e) => {
                  e === p.KX.PLAYING && t.open();
                });
          return () => {
            null == e || e();
          };
        }, [i, t, s, a, n.isAuthorized]);
      };
      var m = n(23116),
        _ = n(93477),
        C = n(43065),
        h = n.n(C);
      let A = { mainAxis: 44 },
        b = (0, s.Pi)((e) => {
          let {
              disabled: t,
              isPlaying: n,
              repeatMode: s,
              canMoveForward: v,
              canMoveBackward: p,
              canShuffle: C,
              shuffle: b,
              onClickNext: k,
              onClickPrev: N,
              onClickPlayPause: T,
              canChangeRepeatMode: B,
              className: S,
            } = e,
            { formatMessage: y } = (0, r.Z)(),
            {
              advert: I,
              modals: { popoverOverPlayer: j },
              user: E,
            } = (0, d.oR4)(),
            { isFreemium: R, hasFreeUserAccess: w } = (0, d.NMB)();
          x();
          let M = (0, o.useCallback)(
              () =>
                (0, a.jsx)(f.JM, {
                  className: h().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: n,
                  iconClassName: h().playButtonIcon,
                  forcedPlayAd: !0,
                  onClick: T,
                }),
              [n, T],
            ),
            g = (0, o.useCallback)(
              (e) => {
                e || j.close();
              },
              [j],
            ),
            P = (0, o.useMemo)(() => {
              let e = R ? "vibe" : "fullTracks";
              return E.isAuthorized
                ? (0, a.jsx)(f.pl, {
                    isEnabled: w,
                    isOpened: j.isOpened,
                    placement: "top",
                    onOpenChange: g,
                    offsetOptions: A,
                    textVariant: e,
                    renderChildren: M,
                  })
                : (0, a.jsx)(f.Ld, {
                    isEnabled: !0,
                    isOpened: j.isOpened,
                    placement: "top",
                    onOpenChange: g,
                    offsetOptions: A,
                    textVariant: e,
                    renderChildren: M,
                  });
            }, [w, R, g, j.isOpened, M, E.isAuthorized]);
          return (0, a.jsxs)("div", {
            className: (0, i.W)(h().root, S),
            children: [
              (0, a.jsx)("div", {
                className: h().buttonContainer,
                children:
                  (t || C) &&
                  !(null == I ? void 0 : I.isAdvertShown) &&
                  (0, a.jsx)(_.ShuffleButton, {
                    className: h().sonataButton,
                    size: "xxxs",
                    variant: "text",
                    iconSize: "xs",
                    isDisabled: t,
                    shuffle: b,
                    ...(0, l.BA)(l.bG.sonata.SHUFFLE_BUTTON),
                  }),
              }),
              (0, a.jsxs)("div", {
                className: h().sonataButtons,
                children: [
                  (0, a.jsx)(u.z, {
                    className: h().sonataButton,
                    variant: "text",
                    size: "m",
                    radius: "round",
                    "aria-hidden": !p,
                    disabled: !p,
                    withRipple: !1,
                    "aria-label": y({ id: "player-actions.previous-track" }),
                    icon: (0, a.jsx)(c.Icon, { variant: "previous" }),
                    onClick: N,
                    ...(0, l.BA)(l.bG.sonata.PREVIOUS_TRACK_BUTTON),
                  }),
                  P,
                  (0, a.jsx)(u.z, {
                    className: h().sonataButton,
                    radius: "round",
                    size: "m",
                    variant: "text",
                    disabled: !v,
                    "aria-hidden": !v,
                    withRipple: !1,
                    "aria-label": y({ id: "player-actions.next-track" }),
                    icon: (0, a.jsx)(c.Icon, { variant: "next" }),
                    onClick: k,
                    ...(0, l.BA)(l.bG.sonata.NEXT_TRACK_BUTTON),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: h().buttonContainer,
                children:
                  (t || B) &&
                  !(null == I ? void 0 : I.isAdvertShown) &&
                  (0, a.jsx)(m.RepeatButton, {
                    className: h().sonataButton,
                    size: "xxxs",
                    variant: "text",
                    isDisabled: t,
                    iconSize: "xs",
                    repeatMode: s,
                  }),
              }),
            ],
          });
        });
    },
    88722: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataVideoControls: function () {
          return l;
        },
      });
      var a = n(65301),
        i = n(96233),
        s = n(91207),
        o = n(35941),
        r = n(36957);
      let l = (0, i.Pi)((e) => {
        let { className: t } = e,
          n = (0, s.useCallback)(() => {}, []),
          i = (0, s.useCallback)(() => {}, []),
          l = (0, s.useCallback)(() => {}, []);
        return (0, a.jsx)(r.S, {
          className: t,
          isPlaying: !1,
          canMoveBackward: !0,
          canMoveForward: !0,
          canShuffle: !1,
          onClickPlayPause: l,
          onClickNext: n,
          onClickPrev: i,
          canChangeRepeatMode: !1,
          shuffle: !1,
          repeatMode: o.zq.NONE,
        });
      });
    },
    73147: function (e) {
      e.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        trailerButton: "ArtistCard_trailerButton__a2NHm",
        control: "ArtistCard_control___qv5j",
        listenTime: "ArtistCard_listenTime__zSUMC",
        chart: "ArtistCard_chart__iAyyk",
        position: "ArtistCard_position__22Ale",
      };
    },
    83253: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    2557: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    61998: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    34300: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    43065: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    41192: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    70243: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
    60816: function (e, t, n) {
      "use strict";
      var a, i;
      n.d(t, {
        o: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).UNKNOWN = "unknown"),
        (i.MALE = "male"),
        (i.FEMALE = "female");
    },
  },
]);
