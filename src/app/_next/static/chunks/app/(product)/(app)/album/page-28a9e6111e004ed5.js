(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3750],
  {
    24684: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 86978));
    },
    32693: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ji: function () {
          return v;
        },
      });
      var r,
        i,
        a,
        o,
        l = n(9092),
        s = n(98639),
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
          i = (0, l.__rest)(t, ["value", "children"]);
        return r(e.formatNumberToParts(n, i));
      };
      function d(t) {
        var e = function (e) {
          var n = (0, u.Z)(),
            r = e.value,
            i = e.children,
            a = (0, l.__rest)(e, ["value", "children"]),
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
            a = (0, l.__rest)(e, ["value", "children"]),
            o = n[t](r, a);
          if ("function" == typeof i) return i(o);
          var c = n.textComponent || s.Fragment;
          return s.createElement(c, null, o);
        };
        return (e.displayName = a[t]), e;
      }
      (c.displayName = "FormattedNumberParts"),
        (c.displayName = "FormattedNumberParts");
      var v = m("formatDate");
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
          return s;
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
        l = {};
      (() => {
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.useToggle = void 0);
        let t = (function t(e) {
          var n = o[e];
          if (void 0 !== n) return n.exports;
          var r = (o[e] = { exports: {} });
          return a[e](r, r.exports, t), r.exports;
        })(810);
        l.useToggle = (e) => {
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
        l.__esModule;
      var s = l.useToggle;
    },
    86978: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(9753),
        i = n(74717),
        a = n(98639),
        o = n(58446);
      e.default = () => {
        let t = (0, i.useSearchParams)().get("albumId");
        return (
          t || (0, i.notFound)(),
          (0, r.jsx)(a.Suspense, { children: (0, r.jsx)(o.Xb, { albumId: t }) })
        );
      };
    },
    87908: function (t, e, n) {
      "use strict";
      n.d(e, {
        IT: function () {
          return o.ArtistCard;
        },
        xG: function () {
          return l.ArtistContextMenu;
        },
        o9: function () {
          return a;
        },
        Op: function () {
          return s;
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
        l = n(54864);
      let s = function () {
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
            disclaimer: l,
            modals: { disclaimerModal: s },
          } = (0, a.oR)(),
          u = (0, r.useRef)(String((0, i.Z)())),
          c = (0, r.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, r.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === u.current &&
              !c.current &&
              (null == n || n(), (c.current = !0));
          }, [n, l.id, l.isUnsafeDisclaimerConfirmed]),
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
                  await l.getArtistDisclaimer({ artistId: e.id }),
                  e.isUnsafeLegal && l.setType(a.Gq.UNSAFE),
                  l.setId(u.current),
                  l.setEntityId(e.id),
                  l.setEntityType(a.co.ARTIST),
                  l.setShouldHistoryBack(!!o),
                  (c.current = !1),
                  s.open();
                return;
              }
              null == n || n();
            },
            [
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              n,
              l,
              s,
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
          return A;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        l = n(80542),
        s = n(31014),
        u = n(52122),
        c = n(23881),
        d = n(84338),
        m = n(39513),
        v = n(27491),
        f = n(28852),
        p = n(12404),
        _ = n(2570),
        x = n(33589),
        g = n(63394),
        h = n(67868),
        b = n(66975),
        k = n(54864),
        C = n(62914),
        T = n.n(C);
      let A = (0, a.Pi)((t) => {
        let { artist: e, className: n, children: a, contentLinesCount: C } = t,
          { ref: A, intersectionPropertyId: y } = (0, g.Vf)(),
          S = (0, g.x5)(),
          { formatMessage: N } = (0, l.Z)(),
          [j, W] = (0, o.useState)(!1),
          [B, P] = (0, o.useState)(!1),
          [E, L] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: w,
            sendNavigateSearchFeedback: D,
            sendPlaySearchFeedback: I,
          } = (0, g.sA)(),
          M = (0, g.zx)(),
          F = (0, x.SB)(e),
          R = (0, x.BV)(e),
          { id: z, name: U, coverUri: G, isLiked: O } = e,
          Z = (0, g.s0)(e.url),
          [V, q] = (0, o.useState)(!1),
          J = (0, o.useMemo)(() => {
            let t = N({ id: "entity-names.artist-name" }, { artistName: U }),
              e = O ? N({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [U, O, N]),
          { isPlaying: K, togglePlay: X } = (0, g.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(z) },
                from: S,
              },
              loadContextMeta: !0,
            },
          }),
          H = (0, b.useArtistDisclaimer)({ artist: e, callback: Z }),
          Y = (0, b.useArtistDisclaimer)({ artist: e, callback: X }),
          Q = (0, o.useCallback)(
            (t) => {
              null == D || D(), M({ to: u.qU.ArtistScreen }), H(t);
            },
            [M, D, H],
          ),
          $ = (0, o.useCallback)(
            (t) => {
              Q(t);
            },
            [Q],
          ),
          tt = (0, o.useCallback)(() => {
            j || K || (W(!0), null == I || I()), Y();
          }, [K, j, I, Y]),
          te = (0, o.useCallback)(() => {
            B || O || (P(!0), null == w || w()), F();
          }, [O, F, B, w]),
          tn = (0, o.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          tr = (0, o.useCallback)(() => {
            L(!E), q(!E);
          }, [E]),
          ti = (0, o.useMemo)(
            () =>
              (0, r.jsx)(k.ArtistContextMenu, {
                artist: e,
                onOpenChange: tr,
                open: E,
                returnFocus: !1,
                reference: (0, r.jsx)(m.z, {
                  onClick: tn,
                  className: (0, i.W)(T().menuButton, T().control),
                  "aria-label": N({ id: "interface-actions.context-menu" }),
                  icon: (0, r.jsx)(f.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [e, N, tn, tr, E],
          ),
          ta = (0, o.useMemo)(() => {
            if (e.isAvailable)
              return (0, r.jsx)(v.kk, {
                isVisible: E || V,
                className: T().controls,
                radius: "round",
                playControl: (0, r.jsx)(h.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, i.W)(T().playButton, T().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: tt,
                  isPlaying: K,
                  disabled: !e.isAvailableForPlaying,
                }),
                likeControl: (0, r.jsx)(h.dJ, {
                  className: (0, i.W)(T().likeButton, T().control),
                  isLiked: O,
                  onClick: te,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ti,
                pinControl: (0, r.jsx)(h.RT, {
                  onClick: R,
                  isPinned: e.isPinned,
                  className: (0, i.W)(T().pinButton, T().control),
                  withRipple: !1,
                }),
              });
          }, [
            e.isAvailable,
            e.isAvailableForPlaying,
            ti,
            te,
            tt,
            E,
            V,
            O,
            K,
            e.isPinned,
            R,
          ]),
          to = (0, o.useMemo)(
            () =>
              (0, r.jsx)(p.Paper, {
                className: T().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, r.jsxs)("div", {
                  className: T().coverBlock,
                  onClick: $,
                  children: [
                    (0, r.jsx)(h.BE, {
                      className: T().image,
                      src: G,
                      size: 200,
                      fit: "cover",
                      alt: J,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    ta,
                  ],
                }),
              }),
            [$, G, J, e.isAvailable, ta],
          );
        return (0, r.jsx)(v.m7, {
          ref: A,
          className: (0, i.W)(T().root, n),
          textPosition: "center",
          "aria-label": J,
          title: (0, r.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, r.jsx)(h.rU, {
              className: T().titleLink,
              href: e.url,
              "aria-label": J,
              onClick: Q,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: U,
            }),
          }),
          srTitle: (0, r.jsx)(h.rU, { href: e.url, onClick: Q, children: J }),
          "data-intersection-property-id": y,
          description: (0, r.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, r.jsx)(s.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: C,
          view: to,
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
        l = n(33589),
        s = n(63394),
        u = n(67868);
      let c = (0, i.Pi)((t) => {
        var e, n;
        let {
            artist: i,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: m,
            open: v,
            returnFocus: f,
          } = t,
          { settings: p, experiments: _, trailer: x } = (0, s.oR)(),
          g = (0, l.BV)(i),
          h = (0, l.SB)(i),
          b = "".concat(s.aU.ARTIST, "-").concat(null == i ? void 0 : i.id),
          k = p.layout === s.t8.Mobile,
          C =
            _.checkExperiment(s.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == i ? void 0 : i.hasTrailer),
          { href: T } = (0, s.qK)(
            null !== (e = null == i ? void 0 : i.url) && void 0 !== e ? e : "",
          ),
          { isPlaying: A, togglePlay: y } = (0, s.Qh)({
            seeds:
              null !== (n = null == i ? void 0 : i.seeds) && void 0 !== n
                ? n
                : [],
            pageIdForFrom: s.Rh.RADIO,
            blockIdForFrom: b,
          }),
          S = (0, a.useCallback)(() => {
            A || y();
          }, [A, y]),
          N = (0, a.useCallback)(() => {
            (null == i ? void 0 : i.id) &&
              x.openArtistTrailer(null == i ? void 0 : i.id);
          }, [null == i ? void 0 : i.id, x]);
        return (
          (0, s.ZP)(v),
          (0, r.jsxs)(o.v2, {
            reference: d,
            isMobile: k,
            title: null == i ? void 0 : i.name,
            description: c,
            offsetOptions: 10,
            open: v,
            onOpenChange: m,
            returnFocus: f,
            children: [
              !k &&
                (0, r.jsx)(u.Zd, {
                  onClick: g,
                  isPinned: null == i ? void 0 : i.isPinned,
                }),
              (0, r.jsx)(u.xZ, {
                onClick: h,
                isLiked: null == i ? void 0 : i.isLiked,
                disabled: !(null == i ? void 0 : i.isAvailable),
              }),
              C && (0, r.jsx)(u.NB, { onClick: N }),
              (0, r.jsx)(u.GQ, {
                onClick: S,
                disabled: !(null == i ? void 0 : i.isAvailable),
                variant: "artist",
              }),
              (0, r.jsx)(u.zq, {
                disabled: !i,
                shareLink: T,
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
          return p;
        },
        b4: function () {
          return l;
        },
        at: function () {
          return x;
        },
        zU: function () {
          return _;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n.t(i, 2),
        o = n(67868);
      let l = (t) => {
        let { children: e, title: n, className: a } = t,
          { setTitleElement: l, setTitle: s } = (0, i.useContext)(o.pI),
          u = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (null == u ? void 0 : u.current) && l(u), n && s(n);
          }, [u, n, l, s]),
          (0, i.useEffect)(
            () => () => {
              s("");
            },
            [s],
          ),
          (0, r.jsx)("div", { ref: u, className: a, children: e })
        );
      };
      var s = n(9544),
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
        v = n(63394);
      let f = (t) => {
          let { element: e, scrollTop: n, isMobile: r } = t,
            i = 0.4 * e.clientHeight;
          return n + (r ? 56 : 72) >= e.offsetTop + i;
        },
        p = (0, s.Pi)((t) => {
          let {
              children: e,
              scrollElement: n,
              outerTitle: a = "",
              headerElement: l,
              headerThreshold: s,
            } = t,
            [u, c] = (0, i.useState)(a),
            [d, p] = (0, i.useState)(null),
            [_, x] = (0, i.useState)(!1),
            [g, h] = (0, i.useState)(!1),
            { settings: b } = (0, v.oR)(),
            k = b.layout === v.t8.Mobile;
          (0, i.useLayoutEffect)(() => {
            c(a);
          }, [a]);
          let C = (0, i.useCallback)(() => {
            if (!n) return;
            let t = null != s ? s : 10,
              e = l ? Number(l.offsetTop) - t : t;
            e < 0 && (e = 0),
              h(n.scrollTop > e),
              (null == d ? void 0 : d.current) &&
                x(
                  f({
                    element: null == d ? void 0 : d.current,
                    scrollTop: n.scrollTop,
                    isMobile: k,
                  }),
                );
          }, [n, s, l, d, k]);
          (0, i.useEffect)(() => {
            (null == n ? void 0 : n.scrollTop) === 0 && h(!1);
          }, [null == n ? void 0 : n.scrollTop]),
            m(C);
          let T = (0, i.useMemo)(
            () => ({
              title: u,
              setTitle: c,
              titleElement: d,
              scrollElement: n,
              setTitleElement: p,
              isScrolledTitle: _,
              isScrolling: g,
            }),
            [u, _, d, n, g],
          );
          return (0, r.jsx)(o.pI.Provider, { value: T, children: e });
        });
      n(66414);
      let _ = () => {
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
          (0, v.uK)().get(v.Xt),
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
          return p;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        l = n(31014),
        s = n(39513),
        u = n(28852),
        c = n(2570),
        d = n(55784),
        m = n(63394),
        v = n(88178),
        f = n.n(v);
      let p = (0, a.Pi)((t) => {
        let { className: e, withBackwardControl: n = !0 } = t,
          a = (0, o.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: v } = (0, m.$Y)();
        return (0, r.jsxs)("div", {
          className: (0, i.W)(f().root, e),
          children: [
            n &&
              (0, r.jsx)(d.n, {
                withBackwardFallback: "/",
                className: (0, i.W)(f().navigation, {
                  [f().navigation_desktop]: !v,
                }),
                withForwardControl: !1,
              }),
            (0, r.jsxs)("div", {
              className: (0, i.W)(f().content, { [f().content_shrink]: !n }),
              children: [
                (0, r.jsx)(u.J, {
                  className: f().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, r.jsx)(c.Heading, {
                  className: (0, i.W)(f().title, f().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, r.jsx)(l.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, r.jsxs)(c.Caption, {
                  className: (0, i.W)(f().text, f().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, r.jsx)(l.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, r.jsx)(s.z, {
                  onClick: a,
                  className: f().button,
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
                      (0, r.jsx)(l.Z, { id: "page-error.restart-app-button" }),
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
  function (t) {
    t.O(
      0,
      [
        8609, 481, 4153, 5340, 2877, 2889, 2498, 7873, 2138, 3621, 3394, 7868,
        4901, 3490, 9352, 3472, 7840, 5191, 8446, 2171, 361, 1744,
      ],
      function () {
        return t((t.s = 24684));
      },
    ),
      (_N_E = t.O());
  },
]);
