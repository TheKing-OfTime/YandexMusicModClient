(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9579],
  {
    48843: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 89172));
    },
    32693: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ji: function () {
          return f;
        },
      });
      var i,
        n,
        a,
        l,
        s = r(9092),
        o = r(98639),
        u = r(80542);
      ((i = a || (a = {})).formatDate = "FormattedDate"),
        (i.formatTime = "FormattedTime"),
        (i.formatNumber = "FormattedNumber"),
        (i.formatList = "FormattedList"),
        (i.formatDisplayName = "FormattedDisplayName"),
        ((n = l || (l = {})).formatDate = "FormattedDateParts"),
        (n.formatTime = "FormattedTimeParts"),
        (n.formatNumber = "FormattedNumberParts"),
        (n.formatList = "FormattedListParts");
      var c = function (e) {
        var t = (0, u.Z)(),
          r = e.value,
          i = e.children,
          n = (0, s.__rest)(e, ["value", "children"]);
        return i(t.formatNumberToParts(r, n));
      };
      function d(e) {
        var t = function (t) {
          var r = (0, u.Z)(),
            i = t.value,
            n = t.children,
            a = (0, s.__rest)(t, ["value", "children"]),
            l = "string" == typeof i ? new Date(i || 0) : i;
          return n(
            "formatDate" === e
              ? r.formatDateToParts(l, a)
              : r.formatTimeToParts(l, a),
          );
        };
        return (t.displayName = l[e]), t;
      }
      function m(e) {
        var t = function (t) {
          var r = (0, u.Z)(),
            i = t.value,
            n = t.children,
            a = (0, s.__rest)(t, ["value", "children"]),
            l = r[e](i, a);
          if ("function" == typeof n) return n(l);
          var c = r.textComponent || o.Fragment;
          return o.createElement(c, null, l);
        };
        return (t.displayName = a[e]), t;
      }
      (c.displayName = "FormattedNumberParts"),
        (c.displayName = "FormattedNumberParts");
      var f = m("formatDate");
      m("formatTime"),
        m("formatNumber"),
        m("formatList"),
        m("formatDisplayName"),
        d("formatDate"),
        d("formatTime");
    },
    17295: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return o;
        },
      });
      var i,
        n = r(98639),
        a = {
          810: (e) => {
            e.exports = i || (i = r.t(n, 2));
          },
        },
        l = {},
        s = {};
      (() => {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.useToggle = void 0);
        let e = (function e(t) {
          var r = l[t];
          if (void 0 !== r) return r.exports;
          var i = (l[t] = { exports: {} });
          return a[t](i, i.exports, e), i.exports;
        })(810);
        s.useToggle = (t) => {
          let [r, i] = (0, e.useState)(t);
          return {
            state: r,
            toggle: (0, e.useCallback)(() => {
              i((e) => !e);
            }, []),
            toggleTrue: (0, e.useCallback)(() => {
              i(!0);
            }, []),
            toggleFalse: (0, e.useCallback)(() => {
              i(!1);
            }, []),
          };
        };
      })(),
        s.__esModule;
      var o = s.useToggle;
    },
    89172: function (e, t, r) {
      "use strict";
      r.r(t);
      var i = r(9753),
        n = r(74717),
        a = r(61533);
      t.default = () => {
        let e = (0, n.useSearchParams)().get("playlistUuid");
        return e || (0, n.notFound)(), (0, i.jsx)(a.i$, { playlistUuid: e });
      };
    },
    87908: function (e, t, r) {
      "use strict";
      r.d(t, {
        IT: function () {
          return l.ArtistCard;
        },
        xG: function () {
          return s.ArtistContextMenu;
        },
        o9: function () {
          return a;
        },
        Op: function () {
          return o;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var i = r(42288),
        n = r(33589);
      let a = i.V5.model("ArtistMeta", {
        artist: n.Go,
        lastMonthListeners: i.V5.maybe(i.V5.number),
      });
      var l = r(99654),
        s = r(54864);
      let o = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.reduce((e, t) => {
            var r, i;
            return (
              e +
              (null !==
                (i =
                  null === (r = t.decomposed) || void 0 === r
                    ? void 0
                    : r.length) && void 0 !== i
                ? i
                : 0)
            );
          }, 0);
        return e.length + t;
      };
      var u = r(66975);
    },
    66975: function (e, t, r) {
      "use strict";
      r.d(t, {
        useArtistDisclaimer: function () {
          return l;
        },
      });
      var i = r(98639),
        n = r(3429),
        a = r(63394);
      let l = (e) => {
        let { artist: t, callback: r, shouldHistoryBack: l } = e,
          {
            disclaimer: s,
            modals: { disclaimerModal: o },
          } = (0, a.oR)(),
          u = (0, i.useRef)(String((0, n.Z)())),
          c = (0, i.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, i.useEffect)(() => {
            s.isUnsafeDisclaimerConfirmed &&
              s.id === u.current &&
              !c.current &&
              (null == r || r(), (c.current = !0));
          }, [r, s.id, s.isUnsafeDisclaimerConfirmed]),
          (0, i.useCallback)(
            async (e) => {
              let i = d.get(a.BU.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == i
                  ? void 0
                  : i.includes("".concat(a.co.ARTIST, "_").concat(t.id)))
              ) {
                null == r || r();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await s.getArtistDisclaimer({ artistId: t.id }),
                  t.isUnsafeLegal && s.setType(a.Gq.UNSAFE),
                  s.setId(u.current),
                  s.setEntityId(t.id),
                  s.setEntityType(a.co.ARTIST),
                  s.setShouldHistoryBack(!!l),
                  (c.current = !1),
                  o.open();
                return;
              }
              null == r || r();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isUnsafeLegal,
              r,
              s,
              o,
              d,
              l,
            ],
          )
        );
      };
    },
    99654: function (e, t, r) {
      "use strict";
      r.d(t, {
        ArtistCard: function () {
          return g;
        },
      });
      var i = r(9753),
        n = r(60836),
        a = r(9544),
        l = r(98639),
        s = r(80542),
        o = r(31014),
        u = r(52122),
        c = r(23881),
        d = r(84338),
        m = r(39513),
        f = r(27491),
        v = r(28852),
        p = r(12404),
        x = r(2570),
        b = r(33589),
        _ = r(63394),
        C = r(67868),
        T = r(66975),
        k = r(54864),
        A = r(62914),
        h = r.n(A);
      let g = (0, a.Pi)((e) => {
        let { artist: t, className: r, children: a, contentLinesCount: A } = e,
          { ref: g, intersectionPropertyId: y } = (0, _.Vf)(),
          N = (0, _.x5)(),
          { formatMessage: S } = (0, s.Z)(),
          [P, B] = (0, l.useState)(!1),
          [j, E] = (0, l.useState)(!1),
          [L, D] = (0, l.useState)(!1),
          {
            sendLikeSearchFeedback: M,
            sendNavigateSearchFeedback: R,
            sendPlaySearchFeedback: F,
          } = (0, _.sA)(),
          I = (0, _.zx)(),
          U = (0, b.SB)(t),
          w = (0, b.BV)(t),
          { id: O, name: z, coverUri: G, isLiked: V } = t,
          Z = (0, _.s0)(t.url),
          [q, W] = (0, l.useState)(!1),
          J = (0, l.useMemo)(() => {
            let e = S({ id: "entity-names.artist-name" }, { artistName: z }),
              t = V ? S({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [z, V, S]),
          { isPlaying: K, togglePlay: X } = (0, _.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(O) },
                from: N,
              },
              loadContextMeta: !0,
            },
          }),
          H = (0, T.useArtistDisclaimer)({ artist: t, callback: Z }),
          Q = (0, T.useArtistDisclaimer)({ artist: t, callback: X }),
          Y = (0, l.useCallback)(
            (e) => {
              null == R || R(), I({ to: u.qU.ArtistScreen }), H(e);
            },
            [I, R, H],
          ),
          $ = (0, l.useCallback)(
            (e) => {
              Y(e);
            },
            [Y],
          ),
          ee = (0, l.useCallback)(() => {
            P || K || (B(!0), null == F || F()), Q();
          }, [K, P, F, Q]),
          et = (0, l.useCallback)(() => {
            j || V || (E(!0), null == M || M()), U();
          }, [V, U, j, M]),
          er = (0, l.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ei = (0, l.useCallback)(() => {
            D(!L), W(!L);
          }, [L]),
          en = (0, l.useMemo)(
            () =>
              (0, i.jsx)(k.ArtistContextMenu, {
                artist: t,
                onOpenChange: ei,
                open: L,
                returnFocus: !1,
                reference: (0, i.jsx)(m.z, {
                  onClick: er,
                  className: (0, n.W)(h().menuButton, h().control),
                  "aria-label": S({ id: "interface-actions.context-menu" }),
                  icon: (0, i.jsx)(v.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [t, S, er, ei, L],
          ),
          ea = (0, l.useMemo)(() => {
            if (t.isAvailable)
              return (0, i.jsx)(f.kk, {
                isVisible: L || q,
                className: h().controls,
                radius: "round",
                playControl: (0, i.jsx)(C.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, n.W)(h().playButton, h().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: ee,
                  isPlaying: K,
                  disabled: !t.isAvailableForPlaying,
                }),
                likeControl: (0, i.jsx)(C.dJ, {
                  className: (0, n.W)(h().likeButton, h().control),
                  isLiked: V,
                  onClick: et,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: en,
                pinControl: (0, i.jsx)(C.RT, {
                  onClick: w,
                  isPinned: t.isPinned,
                  className: (0, n.W)(h().pinButton, h().control),
                  withRipple: !1,
                }),
              });
          }, [
            t.isAvailable,
            t.isAvailableForPlaying,
            en,
            et,
            ee,
            L,
            q,
            V,
            K,
            t.isPinned,
            w,
          ]),
          el = (0, l.useMemo)(
            () =>
              (0, i.jsx)(p.Paper, {
                className: h().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: h().coverBlock,
                  onClick: $,
                  children: [
                    (0, i.jsx)(C.BE, {
                      className: h().image,
                      src: G,
                      size: 200,
                      fit: "cover",
                      alt: J,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    ea,
                  ],
                }),
              }),
            [$, G, J, t.isAvailable, ea],
          );
        return (0, i.jsx)(f.m7, {
          ref: g,
          className: (0, n.W)(h().root, r),
          textPosition: "center",
          "aria-label": J,
          title: (0, i.jsx)(x.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, i.jsx)(C.rU, {
              className: h().titleLink,
              href: t.url,
              "aria-label": J,
              onClick: Y,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: z,
            }),
          }),
          srTitle: (0, i.jsx)(C.rU, { href: t.url, onClick: Y, children: J }),
          "data-intersection-property-id": y,
          description: (0, i.jsx)(x.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, i.jsx)(o.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: A,
          view: el,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
          children: a,
        });
      });
    },
    54864: function (e, t, r) {
      "use strict";
      r.d(t, {
        ArtistContextMenu: function () {
          return c;
        },
      });
      var i = r(9753),
        n = r(9544),
        a = r(98639),
        l = r(385),
        s = r(33589),
        o = r(63394),
        u = r(67868);
      let c = (0, n.Pi)((e) => {
        var t, r;
        let {
            artist: n,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: m,
            open: f,
            returnFocus: v,
          } = e,
          { settings: p, experiments: x, trailer: b } = (0, o.oR)(),
          _ = (0, s.BV)(n),
          C = (0, s.SB)(n),
          T = "".concat(o.aU.ARTIST, "-").concat(null == n ? void 0 : n.id),
          k = p.layout === o.t8.Mobile,
          A =
            x.checkExperiment(o.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == n ? void 0 : n.hasTrailer),
          { href: h } = (0, o.qK)(
            null !== (t = null == n ? void 0 : n.url) && void 0 !== t ? t : "",
          ),
          { isPlaying: g, togglePlay: y } = (0, o.Qh)({
            seeds:
              null !== (r = null == n ? void 0 : n.seeds) && void 0 !== r
                ? r
                : [],
            pageIdForFrom: o.Rh.RADIO,
            blockIdForFrom: T,
          }),
          N = (0, a.useCallback)(() => {
            g || y();
          }, [g, y]),
          S = (0, a.useCallback)(() => {
            (null == n ? void 0 : n.id) &&
              b.openArtistTrailer(null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, b]);
        return (
          (0, o.ZP)(f),
          (0, i.jsxs)(l.v2, {
            reference: d,
            isMobile: k,
            title: null == n ? void 0 : n.name,
            description: c,
            offsetOptions: 10,
            open: f,
            onOpenChange: m,
            returnFocus: v,
            children: [
              !k &&
                (0, i.jsx)(u.Zd, {
                  onClick: _,
                  isPinned: null == n ? void 0 : n.isPinned,
                }),
              (0, i.jsx)(u.xZ, {
                onClick: C,
                isLiked: null == n ? void 0 : n.isLiked,
                disabled: !(null == n ? void 0 : n.isAvailable),
              }),
              A && (0, i.jsx)(u.NB, { onClick: S }),
              (0, i.jsx)(u.GQ, {
                onClick: N,
                disabled: !(null == n ? void 0 : n.isAvailable),
                variant: "artist",
              }),
              (0, i.jsx)(u.zq, {
                disabled: !n,
                shareLink: h,
                entityVariant: "artist",
                entityTitle: null == n ? void 0 : n.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (e, t, r) {
      "use strict";
      r.d(t, {
        I7: function () {
          return p;
        },
        b4: function () {
          return s;
        },
        at: function () {
          return b;
        },
        zU: function () {
          return x;
        },
      });
      var i = r(9753),
        n = r(98639),
        a = r.t(n, 2),
        l = r(67868);
      let s = (e) => {
        let { children: t, title: r, className: a } = e,
          { setTitleElement: s, setTitle: o } = (0, n.useContext)(l.pI),
          u = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            (null == u ? void 0 : u.current) && s(u), r && o(r);
          }, [u, r, s, o]),
          (0, n.useEffect)(
            () => () => {
              o("");
            },
            [o],
          ),
          (0, i.jsx)("div", { ref: u, className: a, children: t })
        );
      };
      var o = r(9544),
        u = {
          810: (e) => {
            e.exports = a;
          },
        },
        c = {},
        d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useScroll = void 0);
        let e = (function e(t) {
          var r = c[t];
          if (void 0 !== r) return r.exports;
          var i = (c[t] = { exports: {} });
          return u[t](i, i.exports, e), i.exports;
        })(810);
        d.useScroll = (t) => {
          (0, e.useEffect)(
            () => (
              window.addEventListener("scroll", t, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", t);
              }
            ),
            [t],
          );
        };
      })(),
        d.__esModule;
      var m = d.useScroll,
        f = r(63394);
      let v = (e) => {
          let { element: t, scrollTop: r, isMobile: i } = e,
            n = 0.4 * t.clientHeight;
          return r + (i ? 56 : 72) >= t.offsetTop + n;
        },
        p = (0, o.Pi)((e) => {
          let {
              children: t,
              scrollElement: r,
              outerTitle: a = "",
              headerElement: s,
              headerThreshold: o,
            } = e,
            [u, c] = (0, n.useState)(a),
            [d, p] = (0, n.useState)(null),
            [x, b] = (0, n.useState)(!1),
            [_, C] = (0, n.useState)(!1),
            { settings: T } = (0, f.oR)(),
            k = T.layout === f.t8.Mobile;
          (0, n.useLayoutEffect)(() => {
            c(a);
          }, [a]);
          let A = (0, n.useCallback)(() => {
            if (!r) return;
            let e = null != o ? o : 10,
              t = s ? Number(s.offsetTop) - e : e;
            t < 0 && (t = 0),
              C(r.scrollTop > t),
              (null == d ? void 0 : d.current) &&
                b(
                  v({
                    element: null == d ? void 0 : d.current,
                    scrollTop: r.scrollTop,
                    isMobile: k,
                  }),
                );
          }, [r, o, s, d, k]);
          (0, n.useEffect)(() => {
            (null == r ? void 0 : r.scrollTop) === 0 && C(!1);
          }, [null == r ? void 0 : r.scrollTop]),
            m(A);
          let h = (0, n.useMemo)(
            () => ({
              title: u,
              setTitle: c,
              titleElement: d,
              scrollElement: r,
              setTitleElement: p,
              isScrolledTitle: x,
              isScrolling: _,
            }),
            [u, x, d, r, _],
          );
          return (0, i.jsx)(l.pI.Provider, { value: h, children: t });
        });
      r(66414);
      let x = () => {
          let [e, t] = (0, n.useState)(null),
            r = (0, n.useCallback)(
              (r) => {
                e !== r && t(r);
              },
              [e],
            );
          return [e, r];
        },
        b = (e, t) => (
          (0, f.uK)().get(f.Xt),
          [
            (0, n.useMemo)(() => {
              if (void 0 !== t) {
                let r = t - 17;
                return {
                  "--average-color-background": e,
                  transform: "translateY(".concat(t >= 17 ? 0 : r, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [t, !1, e]),
            (0, n.useMemo)(() => ({ "--average-color-background": e }), [e]),
          ]
        );
    },
    55784: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return n.h;
        },
        n: function () {
          return i.n;
        },
      });
      var i = r(33861),
        n = r(34906);
    },
    62914: function (e) {
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
        control: "ArtistCard_control___qv5j",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        8609, 481, 5340, 2877, 2889, 4153, 2498, 7873, 2138, 3621, 214, 3394,
        7868, 4901, 3490, 1579, 9352, 3472, 7840, 5191, 4950, 1533, 2171, 361,
        1744,
      ],
      function () {
        return e((e.s = 48843));
      },
    ),
      (_N_E = e.O());
  },
]);
