(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9080],
  {
    32693: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ji: function () {
          return _;
        },
      });
      var r,
        i,
        a,
        o,
        s = n(9092),
        l = n(98639),
        u = n(80542);
      ((r = a || (a = {})).formatDate = "FormattedDate"),
        (r.formatTime = "FormattedTime"),
        (r.formatNumber = "FormattedNumber"),
        (r.formatList = "FormattedList"),
        (r.formatDisplayName = "FormattedDisplayName"),
        ((i = o || (o = {})).formatDate = "FormattedDateParts"),
        (i.formatTime = "FormattedTimeParts"),
        (i.formatNumber = "FormattedNumberParts"),
        (i.formatList = "FormattedListParts");
      var c = function (t) {
        var e = (0, u.Z)(),
          n = t.value,
          r = t.children,
          i = (0, s.__rest)(t, ["value", "children"]);
        return r(e.formatNumberToParts(n, i));
      };
      function d(t) {
        var e = function (e) {
          var n = (0, u.Z)(),
            r = e.value,
            i = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            o = "string" == typeof r ? new Date(r || 0) : r;
          return i(
            "formatDate" === t
              ? n.formatDateToParts(o, a)
              : n.formatTimeToParts(o, a),
          );
        };
        return (e.displayName = o[t]), e;
      }
      function m(t) {
        var e = function (e) {
          var n = (0, u.Z)(),
            r = e.value,
            i = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            o = n[t](r, a);
          if ("function" == typeof i) return i(o);
          var c = n.textComponent || l.Fragment;
          return l.createElement(c, null, o);
        };
        return (e.displayName = a[t]), e;
      }
      (c.displayName = "FormattedNumberParts"),
        (c.displayName = "FormattedNumberParts");
      var _ = m("formatDate");
      m("formatTime"),
        m("formatNumber"),
        m("formatList"),
        m("formatDisplayName"),
        d("formatDate"),
        d("formatTime");
    },
    17295: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return l;
        },
      });
      var r,
        i = n(98639),
        a = {
          810: (t) => {
            t.exports = r || (r = n.t(i, 2));
          },
        },
        o = {},
        s = {};
      (() => {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.useToggle = void 0);
        let t = (function t(e) {
          var n = o[e];
          if (void 0 !== n) return n.exports;
          var r = (o[e] = { exports: {} });
          return a[e](r, r.exports, t), r.exports;
        })(810);
        s.useToggle = (e) => {
          let [n, r] = (0, t.useState)(e);
          return {
            state: n,
            toggle: (0, t.useCallback)(() => {
              r((t) => !t);
            }, []),
            toggleTrue: (0, t.useCallback)(() => {
              r(!0);
            }, []),
            toggleFalse: (0, t.useCallback)(() => {
              r(!1);
            }, []),
          };
        };
      })(),
        s.__esModule;
      var l = s.useToggle;
    },
    87908: function (t, e, n) {
      "use strict";
      n.d(e, {
        IT: function () {
          return o.ArtistCard;
        },
        xG: function () {
          return s.ArtistContextMenu;
        },
        o9: function () {
          return a;
        },
        Op: function () {
          return l;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var r = n(42288),
        i = n(33589);
      let a = r.V5.model("ArtistMeta", {
        artist: i.Go,
        lastMonthListeners: r.V5.maybe(r.V5.number),
      });
      var o = n(99654),
        s = n(54864);
      let l = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = t.reduce((t, e) => {
            var n, r;
            return (
              t +
              (null !==
                (r =
                  null === (n = e.decomposed) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== r
                ? r
                : 0)
            );
          }, 0);
        return t.length + e;
      };
      var u = n(66975);
    },
    66975: function (t, e, n) {
      "use strict";
      n.d(e, {
        useArtistDisclaimer: function () {
          return o;
        },
      });
      var r = n(98639),
        i = n(3429),
        a = n(63394);
      let o = (t) => {
        let { artist: e, callback: n, shouldHistoryBack: o } = t,
          {
            disclaimer: s,
            modals: { disclaimerModal: l },
          } = (0, a.oR)(),
          u = (0, r.useRef)(String((0, i.Z)())),
          c = (0, r.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, r.useEffect)(() => {
            s.isUnsafeDisclaimerConfirmed &&
              s.id === u.current &&
              !c.current &&
              (null == n || n(), (c.current = !0));
          }, [n, s.id, s.isUnsafeDisclaimerConfirmed]),
          (0, r.useCallback)(
            async (t) => {
              let r = d.get(a.BU.ExEx);
              if (
                (null == e ? void 0 : e.isUnsafeLegal) &&
                (null == r
                  ? void 0
                  : r.includes("".concat(a.co.ARTIST, "_").concat(e.id)))
              ) {
                null == n || n();
                return;
              }
              if (
                (null == e ? void 0 : e.isLegalRejected) ||
                (null == e ? void 0 : e.isUnsafeLegal)
              ) {
                null == t || t.preventDefault(),
                  await s.getArtistDisclaimer({ artistId: e.id }),
                  e.isUnsafeLegal && s.setType(a.Gq.UNSAFE),
                  s.setId(u.current),
                  s.setEntityId(e.id),
                  s.setEntityType(a.co.ARTIST),
                  s.setShouldHistoryBack(!!o),
                  (c.current = !1),
                  l.open();
                return;
              }
              null == t || t.preventDefault(), null == n || n();
            },
            [
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              n,
              s,
              l,
              d,
              o,
            ],
          )
        );
      };
    },
    99654: function (t, e, n) {
      "use strict";
      n.d(e, {
        ArtistCard: function () {
          return j;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        s = n(80542),
        l = n(31014),
        u = n(52122),
        c = n(23881),
        d = n(84338),
        m = n(39513),
        _ = n(27491),
        v = n(28852),
        f = n(12404),
        p = n(2570),
        x = n(33589),
        g = n(63394),
        h = n(67868),
        k = n(66975),
        b = n(54864),
        N = n(62914),
        C = n.n(N);
      let j = (0, a.Pi)((t) => {
        let { artist: e, className: n, children: a, contentLinesCount: N } = t,
          { ref: j, intersectionPropertyId: T } = (0, g.Vf)(),
          y = (0, g.x5)(),
          { formatMessage: A } = (0, s.Z)(),
          [S, P] = (0, o.useState)(!1),
          [W, B] = (0, o.useState)(!1),
          [L, w] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: E,
            sendNavigateSearchFeedback: F,
            sendPlaySearchFeedback: D,
          } = (0, g.sA)(),
          z = (0, g.zx)(),
          I = (0, x.SB)(e),
          R = (0, x.BV)(e),
          { id: G, name: M, coverUri: U, isLiked: Z } = e,
          O = (0, g.s0)(e.url),
          V = (0, g.s0)(e.url, !0),
          [J, q] = (0, o.useState)(!1),
          H = (0, o.useMemo)(() => {
            let t = A({ id: "entity-names.artist-name" }, { artistName: M }),
              e = Z ? A({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [M, Z, A]),
          { isPlaying: K, togglePlay: X } = (0, g.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(G) },
                from: y,
              },
              loadContextMeta: !0,
            },
          }),
          Y = (0, k.useArtistDisclaimer)({ artist: e, callback: O }),
          Q = (0, k.useArtistDisclaimer)({ artist: e, callback: V }),
          $ = (0, k.useArtistDisclaimer)({ artist: e, callback: X }),
          tt = (0, x.ik)(Q, Y),
          te = (0, o.useCallback)(
            (t) => {
              null == F || F(), z({ to: u.qU.ArtistScreen }), tt(t);
            },
            [F, z, tt],
          ),
          tn = (0, o.useCallback)(
            (t) => {
              te(t);
            },
            [te],
          ),
          tr = (0, o.useCallback)(() => {
            S || K || (P(!0), null == D || D()), $();
          }, [K, S, D, $]),
          ti = (0, o.useCallback)(() => {
            W || Z || (B(!0), null == E || E()), I();
          }, [Z, I, W, E]),
          ta = (0, o.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          to = (0, o.useCallback)(() => {
            w(!L), q(!L);
          }, [L]),
          ts = (0, o.useMemo)(
            () =>
              (0, r.jsx)(b.ArtistContextMenu, {
                artist: e,
                onOpenChange: to,
                open: L,
                returnFocus: !1,
                reference: (0, r.jsx)(m.z, {
                  onClick: ta,
                  className: (0, i.W)(C().menuButton, C().control),
                  "aria-label": A({ id: "interface-actions.context-menu" }),
                  icon: (0, r.jsx)(v.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [e, A, ta, to, L],
          ),
          tl = (0, o.useMemo)(() => {
            if (e.isAvailable)
              return (0, r.jsx)(_.kk, {
                isVisible: L || J,
                className: C().controls,
                radius: "round",
                playControl: (0, r.jsx)(h.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, i.W)(C().playButton, C().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: tr,
                  isPlaying: K,
                  disabled: !e.isAvailableForPlaying,
                }),
                likeControl: (0, r.jsx)(h.dJ, {
                  className: (0, i.W)(C().likeButton, C().control),
                  isLiked: Z,
                  onClick: ti,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ts,
                pinControl: (0, r.jsx)(h.RT, {
                  onClick: R,
                  isPinned: e.isPinned,
                  className: (0, i.W)(C().pinButton, C().control),
                  withRipple: !1,
                }),
              });
          }, [
            e.isAvailable,
            e.isAvailableForPlaying,
            ts,
            ti,
            tr,
            L,
            J,
            Z,
            K,
            e.isPinned,
            R,
          ]),
          tu = (0, o.useMemo)(
            () =>
              (0, r.jsx)(f.Paper, {
                className: C().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, r.jsxs)("div", {
                  className: C().coverBlock,
                  onClick: tn,
                  children: [
                    (0, r.jsx)(h.BE, {
                      className: C().image,
                      src: U,
                      size: 200,
                      fit: "cover",
                      alt: H,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    tl,
                  ],
                }),
              }),
            [tn, U, H, e.isAvailable, tl],
          );
        return (0, r.jsx)(_.m7, {
          ref: j,
          className: (0, i.W)(C().root, n),
          textPosition: "center",
          "aria-label": H,
          title: (0, r.jsx)(p.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, r.jsx)(h.rU, {
              className: C().titleLink,
              href: e.url,
              "aria-label": H,
              onClick: te,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: M,
            }),
          }),
          srTitle: (0, r.jsx)(h.rU, { href: e.url, onClick: te, children: H }),
          "data-intersection-property-id": T,
          description: (0, r.jsx)(p.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, r.jsx)(l.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: N,
          view: tu,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
          children: a,
        });
      });
    },
    54864: function (t, e, n) {
      "use strict";
      n.d(e, {
        ArtistContextMenu: function () {
          return c;
        },
      });
      var r = n(9753),
        i = n(9544),
        a = n(98639),
        o = n(385),
        s = n(33589),
        l = n(63394),
        u = n(67868);
      let c = (0, i.Pi)((t) => {
        var e, n;
        let {
            artist: i,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: m,
            open: _,
            returnFocus: v,
          } = t,
          { settings: f, experiments: p, trailer: x } = (0, l.oR)(),
          g = (0, s.BV)(i),
          h = (0, s.SB)(i),
          k = "".concat(l.aU.ARTIST, "-").concat(null == i ? void 0 : i.id),
          b = f.layout === l.t8.Mobile,
          N =
            p.checkExperiment(l.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == i ? void 0 : i.hasTrailer),
          { href: C } = (0, l.qK)(
            null !== (e = null == i ? void 0 : i.url) && void 0 !== e ? e : "",
          ),
          { isPlaying: j, togglePlay: T } = (0, l.Qh)({
            seeds:
              null !== (n = null == i ? void 0 : i.seeds) && void 0 !== n
                ? n
                : [],
            pageIdForFrom: l.Rh.RADIO,
            blockIdForFrom: k,
          }),
          y = (0, a.useCallback)(() => {
            j || T();
          }, [j, T]),
          A = (0, a.useCallback)(() => {
            (null == i ? void 0 : i.id) &&
              x.openArtistTrailer(null == i ? void 0 : i.id);
          }, [null == i ? void 0 : i.id, x]);
        return (
          (0, l.ZP)(_),
          (0, r.jsxs)(o.v2, {
            reference: d,
            isMobile: b,
            title: null == i ? void 0 : i.name,
            description: c,
            offsetOptions: 10,
            open: _,
            onOpenChange: m,
            returnFocus: v,
            children: [
              !b &&
                (0, r.jsx)(u.Zd, {
                  onClick: g,
                  isPinned: null == i ? void 0 : i.isPinned,
                }),
              (0, r.jsx)(u.xZ, {
                onClick: h,
                isLiked: null == i ? void 0 : i.isLiked,
                disabled: !(null == i ? void 0 : i.isAvailable),
              }),
              N && (0, r.jsx)(u.NB, { onClick: A }),
              (0, r.jsx)(u.GQ, {
                onClick: y,
                disabled: !(null == i ? void 0 : i.isAvailable),
                variant: "artist",
              }),
              (0, r.jsx)(u.zq, {
                disabled: !i,
                shareLink: C,
                entityVariant: "artist",
                entityTitle: null == i ? void 0 : i.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (t, e, n) {
      "use strict";
      n.d(e, {
        I7: function () {
          return f;
        },
        b4: function () {
          return s;
        },
        at: function () {
          return x;
        },
        zU: function () {
          return p;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n.t(i, 2),
        o = n(67868);
      let s = (t) => {
        let { children: e, title: n, className: a } = t,
          { setTitleElement: s, setTitle: l } = (0, i.useContext)(o.pI),
          u = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (null == u ? void 0 : u.current) && s(u), n && l(n);
          }, [u, n, s, l]),
          (0, i.useEffect)(
            () => () => {
              l("");
            },
            [l],
          ),
          (0, r.jsx)("div", { ref: u, className: a, children: e })
        );
      };
      var l = n(9544),
        u = {
          810: (t) => {
            t.exports = a;
          },
        },
        c = {},
        d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useScroll = void 0);
        let t = (function t(e) {
          var n = c[e];
          if (void 0 !== n) return n.exports;
          var r = (c[e] = { exports: {} });
          return u[e](r, r.exports, t), r.exports;
        })(810);
        d.useScroll = (e) => {
          (0, t.useEffect)(
            () => (
              window.addEventListener("scroll", e, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", e);
              }
            ),
            [e],
          );
        };
      })(),
        d.__esModule;
      var m = d.useScroll,
        _ = n(63394);
      let v = (t) => {
          let { element: e, scrollTop: n, isMobile: r } = t,
            i = 0.4 * e.clientHeight;
          return n + (r ? 56 : 72) >= e.offsetTop + i;
        },
        f = (0, l.Pi)((t) => {
          let {
              children: e,
              scrollElement: n,
              outerTitle: a = "",
              headerElement: s,
              headerThreshold: l,
            } = t,
            [u, c] = (0, i.useState)(a),
            [d, f] = (0, i.useState)(null),
            [p, x] = (0, i.useState)(!1),
            [g, h] = (0, i.useState)(!1),
            { settings: k } = (0, _.oR)(),
            b = k.layout === _.t8.Mobile;
          (0, i.useLayoutEffect)(() => {
            c(a);
          }, [a]);
          let N = (0, i.useCallback)(() => {
            if (!n) return;
            let t = null != l ? l : 10,
              e = s ? Number(s.offsetTop) - t : t;
            e < 0 && (e = 0),
              h(n.scrollTop > e),
              (null == d ? void 0 : d.current) &&
                x(
                  v({
                    element: null == d ? void 0 : d.current,
                    scrollTop: n.scrollTop,
                    isMobile: b,
                  }),
                );
          }, [n, l, s, d, b]);
          (0, i.useEffect)(() => {
            (n && (null == n ? void 0 : n.scrollTop) !== 0) || h(!1);
          }, [n, null == n ? void 0 : n.scrollTop]),
            m(N);
          let C = (0, i.useMemo)(
            () => ({
              title: u,
              setTitle: c,
              titleElement: d,
              scrollElement: n,
              setTitleElement: f,
              isScrolledTitle: p,
              isScrolling: g,
            }),
            [u, p, d, n, g],
          );
          return (0, r.jsx)(o.pI.Provider, { value: C, children: e });
        });
      n(66414);
      let p = () => {
          let [t, e] = (0, i.useState)(null),
            n = (0, i.useCallback)(
              (n) => {
                t !== n && e(n);
              },
              [t],
            );
          return [t, n];
        },
        x = (t, e) => (
          (0, _.uK)().get(_.Xt),
          [
            (0, i.useMemo)(() => {
              if (void 0 !== e) {
                let n = e - 17;
                return {
                  "--average-color-background": t,
                  transform: "translateY(".concat(e >= 17 ? 0 : n, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [e, !1, t]),
            (0, i.useMemo)(() => ({ "--average-color-background": t }), [t]),
          ]
        );
    },
    55784: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i.h;
        },
        n: function () {
          return r.n;
        },
      });
      var r = n(33861),
        i = n(34906);
    },
    98567: function (t, e, n) {
      "use strict";
      n.d(e, {
        LandingNotFoundPage: function () {
          return l;
        },
      });
      var r = n(9753),
        i = n(9544),
        a = n(98639),
        o = n(23948),
        s = n(63394);
      let l = (0, i.Pi)(() => {
        let { landing: t } = (0, s.oR)();
        return (
          (0, a.useEffect)(
            () => () => {
              t.reset();
            },
            [t],
          ),
          (0, r.jsx)(o.T, {})
        );
      });
    },
    65369: function (t, e, n) {
      "use strict";
      n.d(e, {
        LandingPage: function () {
          return g;
        },
      });
      var r = n(9753),
        i = n(9544),
        a = n(74717),
        o = n(98639),
        s = n(23881),
        l = n(41055),
        u = n(2570),
        c = n(28326),
        d = n(68106),
        m = n(5293),
        _ = n(55784),
        v = n(63394),
        f = n(67868),
        p = n(27510),
        x = n.n(p);
      let g = (0, i.Pi)((t) => {
        let { skeleton: e } = t,
          { landing: n, experiments: i } = (0, v.oR)(),
          p = (0, v.k6)(),
          [g, h] = (0, m.zU)();
        return (i.checkExperiment(v.pe.WebNextUniversalLandingPage, "on") ||
          (0, a.notFound)(),
        n.loadingState === v.Gu.IDLE &&
          (0, o.use)(
            n.getSkeleton({ id: e, showWizard: !1 }, { preloadBlocks: 3 }),
          ),
        (0, o.useEffect)(() => () => n.reset(), [n]),
        (0, v.NO)(n.loadingState === v.Gu.RESOLVE),
        n.loadingState === v.Gu.REJECT)
          ? (0, r.jsx)(d.D, {})
          : (0, r.jsx)(v.Lh, {
              pageId: v.Rh.LANDING,
              children: (0, r.jsx)(v.Yv, {
                skeleton: e,
                children: (0, r.jsx)(m.I7, {
                  scrollElement: g,
                  headerThreshold: 134,
                  children: (0, r.jsxs)(l.t, {
                    className: x().root,
                    containerClassName: x().content,
                    ref: h,
                    ...(0, s.BA)(s.Br.landing.LANDING_PAGE),
                    children: [
                      (0, r.jsxs)("div", {
                        className: x().header,
                        children: [
                          p.canBack &&
                            (0, r.jsx)(_.n, {
                              withForwardControl: !1,
                              withBackwardControl: p.canBack,
                            }),
                          (0, r.jsx)(u.Heading, {
                            variant: "h2",
                            weight: "bold",
                            size: "xl",
                            className: x().title,
                            children: n.title,
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: x().landing,
                        children: (0, r.jsx)(c.Od, {
                          landing: n,
                          errorComponent: (0, r.jsx)(d.D, {
                            className: x().error,
                            withBackwardControl: !1,
                          }),
                        }),
                      }),
                      (0, r.jsx)(f.$_, { className: x().footer }),
                    ],
                  }),
                }),
              }),
            });
      });
    },
    23948: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return r.NotFound;
        },
      });
      var r = n(8964);
    },
    8964: function (t, e, n) {
      "use strict";
      n.d(e, {
        NotFound: function () {
          return v;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(31014),
        s = n(39513),
        l = n(28852),
        u = n(2570),
        c = n(55784),
        d = n(63394),
        m = n(23067),
        _ = n.n(m);
      let v = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: n } = (0, d.$Y)(),
          a = (0, d.s0)("/");
        return (
          (0, d.ZP)(!0),
          (0, r.jsxs)("div", {
            className: (0, i.W)(_().root, { [_().root_desktop]: !n }, e),
            children: [
              (0, r.jsx)(c.n, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, r.jsxs)("div", {
                className: _().content,
                children: [
                  (0, r.jsx)(l.J, {
                    className: _().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, r.jsx)(u.Heading, {
                    className: (0, i.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, r.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, r.jsx)(u.Caption, {
                    className: (0, i.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, r.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, r.jsx)(s.z, {
                    onClick: a,
                    className: _().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, r.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, r.jsx)(o.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    68106: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return r.SomethingWentWrong;
        },
      });
      var r = n(18723);
    },
    18723: function (t, e, n) {
      "use strict";
      n.d(e, {
        SomethingWentWrong: function () {
          return f;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        s = n(31014),
        l = n(39513),
        u = n(28852),
        c = n(2570),
        d = n(55784),
        m = n(63394),
        _ = n(88178),
        v = n.n(_);
      let f = (0, a.Pi)((t) => {
        let { className: e, withBackwardControl: n = !0 } = t,
          a = (0, o.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: _ } = (0, m.$Y)();
        return (0, r.jsxs)("div", {
          className: (0, i.W)(v().root, e),
          children: [
            n &&
              (0, r.jsx)(d.n, {
                withBackwardFallback: "/",
                className: (0, i.W)(v().navigation, {
                  [v().navigation_desktop]: !_,
                }),
                withForwardControl: !1,
              }),
            (0, r.jsxs)("div", {
              className: (0, i.W)(v().content, { [v().content_shrink]: !n }),
              children: [
                (0, r.jsx)(u.J, {
                  className: v().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, r.jsx)(c.Heading, {
                  className: (0, i.W)(v().title, v().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, r.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, r.jsxs)(c.Caption, {
                  className: (0, i.W)(v().text, v().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, r.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, r.jsx)(l.z, {
                  onClick: a,
                  className: v().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, r.jsxs)(c.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, r.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    62914: function (t) {
      t.exports = {
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
        control: "ArtistCard_control___qv5j",
      };
    },
    27510: function (t) {
      t.exports = {
        content: "LandingPage_content__ovHlJ",
        root: "LandingPage_root__B2lPp",
        header: "LandingPage_header__TiraG",
        title: "LandingPage_title__gsIx4",
        footer: "LandingPage_footer__K9y8K",
        error: "LandingPage_error__mEsH2",
      };
    },
    23067: function (t) {
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
    88178: function (t) {
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
]);
