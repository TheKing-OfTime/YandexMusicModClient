(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4086],
  {
    17295: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var r,
        i = n(98639),
        a = {
          810: (e) => {
            e.exports = r || (r = n.t(i, 2));
          },
        },
        l = {},
        o = {};
      (() => {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.useToggle = void 0);
        let e = (function e(t) {
          var n = l[t];
          if (void 0 !== n) return n.exports;
          var r = (l[t] = { exports: {} });
          return a[t](r, r.exports, e), r.exports;
        })(810);
        o.useToggle = (t) => {
          let [n, r] = (0, e.useState)(t);
          return {
            state: n,
            toggle: (0, e.useCallback)(() => {
              r((e) => !e);
            }, []),
            toggleTrue: (0, e.useCallback)(() => {
              r(!0);
            }, []),
            toggleFalse: (0, e.useCallback)(() => {
              r(!1);
            }, []),
          };
        };
      })(),
        o.__esModule;
      var s = o.useToggle;
    },
    16636: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return u;
        },
      });
      var r,
        i,
        a = n(98639),
        l = {
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                      else for (n in t) t[n] && (i && (i += " "), (i += n));
                    }
                    return i;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => i });
            let i = r;
          },
          2068: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "eaYyesBmJL_NbkgoYR1c",
              focusable: "uL1dD5rxgI4bPmfyMMe7",
            };
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              i = Symbol.for("react.element"),
              a = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              o =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, n) {
              var r,
                a = {},
                c = null,
                u = null;
              for (r in (void 0 !== n && (c = "" + n),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                l.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === a[r] && (a[r] = t[r]);
              return {
                $$typeof: i,
                type: e,
                key: c,
                ref: u,
                props: a,
                _owner: o.current,
              };
            }
            (t.Fragment = a), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          2865: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SROnly = void 0);
            let i = n(9541),
              a = n(5881),
              l = n(810),
              o = r(n(2068));
            t.SROnly = (e) => {
              let { className: t, focusable: n, children: r, ...s } = e,
                c = (0, a.clsx)(
                  o.default.root,
                  { [o.default.focusable]: n },
                  t,
                );
              return (0, l.isValidElement)(r)
                ? (0, l.cloneElement)(r, {
                    ...s,
                    className: (0, a.clsx)(c, r.props.className),
                  })
                : (0, i.jsx)("span", { className: c, ...s, children: r });
            };
          },
          810: (e) => {
            e.exports = i || (i = n.t(a, 2));
          },
        },
        o = {};
      function s(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = (o[e] = { exports: {} });
        return l[e].call(n.exports, n, n.exports, s), n.exports;
      }
      (s.d = (e, t) => {
        for (var n in t)
          s.o(t, n) &&
            !s.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.SROnly = void 0),
        (r = s(2865)),
        Object.defineProperty(c, "SROnly", {
          enumerable: !0,
          get: function () {
            return r.SROnly;
          },
        });
      var u = c.SROnly;
      c.__esModule;
    },
    76351: function (e, t, n) {
      "use strict";
      n.d(t, {
        HS: function () {
          return d.AfishaWidget;
        },
        kb: function () {
          return s.ConcertCard;
        },
        CS: function () {
          return u.ConcertDate;
        },
        Z: function () {
          return o;
        },
        m: function () {
          return c.ConcertsBlock;
        },
        zj: function () {
          return i;
        },
      });
      let r = (e) => {
          if (e) return { value: e.value, currency: e.currency };
        },
        i = (e) => {
          var t;
          return {
            id: e.id,
            dataSessionId:
              null !== (t = e["data-session-id"]) && void 0 !== t ? t : "",
            datetime: e.datetime,
            city: e.city,
            place: e.place,
            contentRating: e.contentRating,
            price: r(e.minPrice),
          };
        };
      var a = n(42288);
      let l = a.V5.model("Price", {
          value: a.V5.number,
          currency: a.V5.string,
        }),
        o = a.V5.model("Concert", {
          id: a.V5.string,
          dataSessionId: a.V5.maybe(a.V5.string),
          datetime: a.V5.maybe(a.V5.string),
          city: a.V5.maybe(a.V5.string),
          place: a.V5.maybe(a.V5.string),
          contentRating: a.V5.maybe(a.V5.string),
          price: a.V5.maybe(l),
        });
      var s = n(74898),
        c = n(63763),
        u = n(33659),
        d = n(86306);
    },
    57217: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(98639),
        i = n(52122),
        a = n(63394);
      let l = (e) => {
        let { artistId: t, viewUuid: n } = e,
          o = (0, a.z$)(),
          { hash: s } = (0, a.RQ)(),
          { pageId: c } = (0, a.lV)(),
          {
            objectsCount: u,
            objectType: d,
            objectId: m,
            objectPosX: f,
            objectPosY: p,
            objectPos: v,
          } = (0, a.rK)(),
          _ = (0, a.wL)(),
          C = (0, r.useCallback)(
            (e) => {
              let n = (0, a.KO)({
                params: {
                  hash: s,
                  artistId: t,
                  objectsCount: u,
                  objectType: d,
                  objectId: m,
                  objectPosX: f,
                  objectPosY: p,
                  to: e,
                },
                logger: _,
                context: l.name,
              });
              o && n && (0, i.f7)(o.evgenInstance, n);
            },
            [o, t, s, _, m, f, p, d, u],
          ),
          x = (0, r.useCallback)(
            (e) => {
              let r = (0, a.KO)({
                params: {
                  hash: s,
                  artistId: t,
                  viewUuid: n,
                  objectId: m,
                  objectPos: v,
                  to: e,
                },
                logger: _,
                context: l.name,
              });
              o && r && n && (0, i.Mn)(o.evgenInstance, r);
            },
            [o, t, s, _, m, v, n],
          );
        return (0, r.useCallback)(
          (e) => {
            if (o && c && a.$P.includes(c))
              switch (c) {
                case a.Rh.ARTIST:
                  C(e);
                  break;
                case a.Rh.ARTIST_CONCERTS:
                  x(e);
              }
          },
          [o, c, x, C],
        );
      };
    },
    86306: function (e, t, n) {
      "use strict";
      n.d(t, {
        AfishaWidget: function () {
          return m;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n(80542),
        l = n(39513),
        o = n(89352),
        s = n(16636),
        c = n(63394),
        u = n(83533),
        d = n.n(u);
      let m = (e) => {
        let { dataSessionId: t, isOpened: n, onOpen: u, onClose: m } = e,
          f = (0, c.uK)().get(c.U5),
          { formatMessage: p } = (0, a.Z)(),
          v = (0, i.useCallback)(
            (e) => {
              e.origin === f.afisha.host && "close" === e.data.type && m();
            },
            [m, f.afisha.host],
          );
        (0, i.useEffect)(
          () => (
            window.addEventListener("message", v),
            () => {
              window.removeEventListener("message", v);
            }
          ),
          [v],
        );
        let _ = (0, i.useCallback)(
            (e) => {
              e ? u() : m();
            },
            [m, u],
          ),
          C = ""
            .concat(f.afisha.host, "/w/sessions/")
            .concat(t, "?clientKey=")
            .concat(f.afisha.clientId);
        return (0, r.jsxs)(o.u, {
          size: "fitContent",
          placement: "center",
          open: n,
          onOpenChange: _,
          onClose: m,
          showHeader: !1,
          className: d().widget,
          contentClassName: d().content,
          children: [
            (0, r.jsx)(s.y, {
              children: (0, r.jsx)(l.z, {
                "aria-label": p({ id: "interface-actions.close" }),
                onClick: m,
              }),
            }),
            (0, r.jsx)("iframe", {
              src: C,
              className: d().root,
              referrerPolicy: "no-referrer",
              sandbox:
                "allow-forms allow-modals allow-popups allow-scripts allow-same-origin",
              allow: "clipboard-read clipboard-write",
            }),
          ],
        });
      };
    },
    74898: function (e, t, n) {
      "use strict";
      n.d(t, {
        ConcertCard: function () {
          return b;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n(80542),
        l = n(52122),
        o = n(17295),
        s = n(98342),
        c = n(39513),
        u = n(12404),
        d = n(2570),
        m = n(63394),
        f = n(57217);
      let p = (e) => {
        let { artistId: t, viewUuid: n } = e,
          r = (0, m.z$)(),
          { hash: a } = (0, m.RQ)(),
          { pageId: o } = (0, m.lV)(),
          {
            objectsCount: s,
            objectType: c,
            objectId: u,
            objectPosX: d,
            objectPosY: f,
            objectPos: v,
          } = (0, m.rK)(),
          _ = (0, m.wL)(),
          C = (0, i.useCallback)(() => {
            let e = (0, m.KO)({
              params: {
                hash: a,
                artistId: t,
                objectsCount: s,
                objectType: c,
                objectId: u,
                objectPosX: d,
                objectPosY: f,
              },
              logger: _,
              context: p.name,
            });
            r && e && (0, l.F5)(r.evgenInstance, e);
          }, [r, t, a, _, u, d, f, c, s]),
          x = (0, i.useCallback)(() => {
            let e = (0, m.KO)({
              params: {
                hash: a,
                artistId: t,
                viewUuid: n,
                objectId: u,
                objectPos: v,
              },
              logger: _,
              context: p.name,
            });
            r && e && n && (0, l.b5)(r.evgenInstance, e);
          }, [r, t, a, _, u, v, n]);
        return (0, i.useCallback)(() => {
          if (r && o && m.$P.includes(o))
            switch (o) {
              case m.Rh.ARTIST:
                C();
                break;
              case m.Rh.ARTIST_CONCERTS:
                x();
            }
        }, [r, o, x, C]);
      };
      var v = n(86306),
        _ = n(33659),
        C = n(91172),
        x = n.n(C);
      let b = (e) => {
        var t, n;
        let { artistId: C, concert: b, viewUuid: y } = e,
          { formatDate: g, formatNumber: h, formatMessage: k } = (0, a.Z)(),
          { state: A, toggleTrue: j, toggleFalse: S } = (0, o.O)(!1),
          T = p({ artistId: C, viewUuid: y }),
          R = (0, f.x)({ artistId: C, viewUuid: y }),
          { ref: N, intersectionPropertyId: w } = (0, m.Vf)({
            callback: T,
            singleEvent: !0,
          }),
          P = (0, i.useId)(),
          B = (0, i.useId)(),
          O = (0, i.useMemo)(() => {
            let e = (0, r.jsx)(d.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                "aria-hidden": !0,
                children: "•",
              }),
              t = [];
            return (
              b.place &&
                t.push(
                  (0, r.jsx)(d.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    children: b.place,
                  }),
                ),
              b.datetime &&
                (t.push(e),
                t.push(
                  (0, r.jsx)(d.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    children: g(b.datetime, (0, m.Sv)()),
                  }),
                )),
              b.contentRating &&
                (t.push(e),
                t.push(
                  (0, r.jsx)(d.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    children: b.contentRating,
                  }),
                )),
              (0, r.jsx)("div", {
                className: x().info,
                children: t.map((e, t) => (0, i.cloneElement)(e, { key: t })),
              })
            );
          }, [b.contentRating, b.datetime, b.place, g]),
          E = (0, i.useMemo)(() => {
            var e, t;
            return (null === (e = b.price) || void 0 === e ? void 0 : e.value)
              ? k(
                  { id: "payment.min-price" },
                  {
                    value: h(b.price.value, {
                      style: "currency",
                      currency:
                        null === (t = b.price) || void 0 === t
                          ? void 0
                          : t.currency,
                      maximumFractionDigits: 0,
                    }),
                  },
                )
              : k({ id: "payment.buy" });
          }, [
            null === (t = b.price) || void 0 === t ? void 0 : t.currency,
            null === (n = b.price) || void 0 === n ? void 0 : n.value,
            k,
            h,
          ]),
          I = (0, i.useCallback)((e) => {
            (0, s.m)(e, x().ripple);
          }, []),
          M = (0, i.useCallback)(
            (e) => {
              j(), R(l.Ks.ConcertPurchaseScreen), e.stopPropagation();
            },
            [j, R],
          );
        return (0, r.jsxs)(u.Paper, {
          radius: "l",
          className: x().root,
          onClick: I,
          ref: N,
          "data-intersection-property-id": w,
          children: [
            b.datetime &&
              (0, r.jsx)(_.ConcertDate, {
                datetime: b.datetime,
                id: P,
                className: x().date,
                dayClassName: x().dateColor,
                monthClassName: x().dateColor,
              }),
            (0, r.jsxs)("div", {
              className: x().meta,
              id: B,
              children: [
                (0, r.jsx)(d.Caption, {
                  variant: "div",
                  size: "m",
                  weight: "medium",
                  className: x().city,
                  lineClamp: 1,
                  children: b.city,
                }),
                O,
              ],
            }),
            b.dataSessionId &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(c.z, {
                    color: "primary",
                    radius: "xxxl",
                    className: x().button,
                    "aria-describedby": "".concat(P, " ").concat(B),
                    "aria-label": E,
                    onClick: M,
                    children: E,
                  }),
                  (0, r.jsx)(v.AfishaWidget, {
                    dataSessionId: b.dataSessionId,
                    isOpened: A,
                    onOpen: j,
                    onClose: S,
                  }),
                ],
              }),
          ],
        });
      };
    },
    33659: function (e, t, n) {
      "use strict";
      n.d(t, {
        ConcertDate: function () {
          return d;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(80542),
        l = n(23881),
        o = n(2570),
        s = n(63394),
        c = n(22778),
        u = n.n(c);
      let d = (e) => {
        let {
            datetime: t,
            className: n,
            monthClassName: c,
            dayClassName: d,
            withWeekday: m = !0,
            ...f
          } = e,
          { formatDate: p } = (0, a.Z)(),
          v = (0, s.KR)(t);
        return (0, r.jsxs)("div", {
          className: (0, i.W)(u().root, n),
          "aria-label": p(t, (0, s.YT)()),
          ...f,
          ...(0, l.BA)(l.FK.concerts.CONCERT_DATE),
          children: [
            (0, r.jsx)(o.Caption, {
              variant: "div",
              size: "xs",
              weight: "bold",
              className: (0, i.W)(u().month, c),
              children: v,
            }),
            (0, r.jsx)(o.Caption, {
              variant: "div",
              className: (0, i.W)(u().day, d),
              children: p(t, (0, s.GL)()),
            }),
            m &&
              (0, r.jsx)(o.Caption, {
                variant: "div",
                size: "xs",
                weight: "bold",
                className: u().weekday,
                children: p(t, { weekday: "short" }),
              }),
          ],
        });
      };
    },
    63763: function (e, t, n) {
      "use strict";
      n.d(t, {
        ConcertsBlock: function () {
          return v;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(43539),
        l = n(98639),
        o = n(52122),
        s = n(5993),
        c = n(67868),
        u = n(57217),
        d = n(80609),
        m = n.n(d);
      let f = () =>
          Array.from({ length: 2 }, (e, t) =>
            (0, r.jsx)(
              "div",
              { className: m().concertsColumn, children: (0, c.M4)(2) },
              t,
            ),
          ),
        p = (e) => {
          let {
              artistId: t,
              forwardRef: n,
              isLoading: d,
              title: p,
              viewAllActionLink: v,
              children: _,
              className: C,
              containerClassName: x,
              headerClassName: b,
              itemClassName: y,
              ...g
            } = e,
            h = (0, l.useId)(),
            k = (0, l.useRef)(null),
            A = (0, u.x)({ artistId: t }),
            j = (0, l.useCallback)(() => {
              A(o.Ks.ArtistConcertsScreen);
            }, [A]),
            S = (0, l.useMemo)(
              () =>
                (0, a.Z)(_, 2)
                  .slice(0, 4)
                  .map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      { className: m().concertsColumn, children: e },
                      t,
                    ),
                  ),
              [_],
            );
          return (0, r.jsxs)("section", {
            ref: n,
            className: (0, i.W)(m().root, C),
            ...g,
            children: [
              (0, r.jsx)(c.ti, {
                className: b,
                labeledForId: h,
                title: p,
                viewAllActionLink: v,
                onViewAllAction: j,
                controls: (0, r.jsx)(c.J8, {
                  className: m().controls,
                  carouselRef: k,
                }),
              }),
              (0, r.jsx)(s.l, {
                itemClassName: (0, i.W)(
                  m().item,
                  { [m().item_singleColumn]: 2 >= l.Children.count(_) },
                  y,
                ),
                containerClassName: (0, i.W)(x, { [m().preventScroll]: d }),
                ref: k,
                "aria-labelledby": h,
                children: d ? f() : S,
              }),
            ],
          });
        },
        v = (0, l.forwardRef)((e, t) => (0, r.jsx)(p, { forwardRef: t, ...e }));
    },
    87908: function (e, t, n) {
      "use strict";
      n.d(t, {
        IT: function () {
          return l.ArtistCard;
        },
        xG: function () {
          return o.ArtistContextMenu;
        },
        o9: function () {
          return a;
        },
        Op: function () {
          return s;
        },
        v2: function () {
          return c.useArtistDisclaimer;
        },
      });
      var r = n(42288),
        i = n(33589);
      let a = r.V5.model("ArtistMeta", {
        artist: i.Go,
        lastMonthListeners: r.V5.maybe(r.V5.number),
      });
      var l = n(99654),
        o = n(54864);
      let s = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.reduce((e, t) => {
            var n, r;
            return (
              e +
              (null !==
                (r =
                  null === (n = t.decomposed) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== r
                ? r
                : 0)
            );
          }, 0);
        return e.length + t;
      };
      var c = n(66975);
    },
    66975: function (e, t, n) {
      "use strict";
      n.d(t, {
        useArtistDisclaimer: function () {
          return l;
        },
      });
      var r = n(98639),
        i = n(3429),
        a = n(63394);
      let l = (e) => {
        let { artist: t, callback: n, shouldHistoryBack: l } = e,
          {
            disclaimer: o,
            modals: { disclaimerModal: s },
          } = (0, a.oR)(),
          c = (0, r.useRef)(String((0, i.Z)())),
          u = (0, r.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, r.useEffect)(() => {
            o.isUnsafeDisclaimerConfirmed &&
              o.id === c.current &&
              !u.current &&
              (null == n || n(), (u.current = !0));
          }, [n, o.id, o.isUnsafeDisclaimerConfirmed]),
          (0, r.useCallback)(
            async (e) => {
              let r = d.get(a.BU.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == r
                  ? void 0
                  : r.includes("".concat(a.co.ARTIST, "_").concat(t.id)))
              ) {
                null == n || n();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await o.getArtistDisclaimer({ artistId: t.id }),
                  t.isUnsafeLegal && o.setType(a.Gq.UNSAFE),
                  o.setId(c.current),
                  o.setEntityId(t.id),
                  o.setEntityType(a.co.ARTIST),
                  o.setShouldHistoryBack(!!l),
                  (u.current = !1),
                  s.open();
                return;
              }
              null == n || n();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isUnsafeLegal,
              n,
              o,
              s,
              d,
              l,
            ],
          )
        );
      };
    },
    99654: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistCard: function () {
          return A;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        l = n(98639),
        o = n(80542),
        s = n(31014),
        c = n(52122),
        u = n(23881),
        d = n(84338),
        m = n(39513),
        f = n(27491),
        p = n(28852),
        v = n(12404),
        _ = n(2570),
        C = n(33589),
        x = n(63394),
        b = n(67868),
        y = n(66975),
        g = n(54864),
        h = n(62914),
        k = n.n(h);
      let A = (0, a.Pi)((e) => {
        let { artist: t, className: n, children: a, contentLinesCount: h } = e,
          { ref: A, intersectionPropertyId: j } = (0, x.Vf)(),
          S = (0, x.x5)(),
          { formatMessage: T } = (0, o.Z)(),
          [R, N] = (0, l.useState)(!1),
          [w, P] = (0, l.useState)(!1),
          [B, O] = (0, l.useState)(!1),
          {
            sendLikeSearchFeedback: E,
            sendNavigateSearchFeedback: I,
            sendPlaySearchFeedback: M,
          } = (0, x.sA)(),
          L = (0, x.zx)(),
          V = (0, C.SB)(t),
          z = (0, C.BV)(t),
          { id: D, name: U, coverUri: W, isLiked: F } = t,
          G = (0, x.s0)(t.url),
          [K, Z] = (0, l.useState)(!1),
          q = (0, l.useMemo)(() => {
            let e = T({ id: "entity-names.artist-name" }, { artistName: U }),
              t = F ? T({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [U, F, T]),
          { isPlaying: Y, togglePlay: H } = (0, x.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(D) },
                from: S,
              },
              loadContextMeta: !0,
            },
          }),
          J = (0, y.useArtistDisclaimer)({ artist: t, callback: G }),
          X = (0, y.useArtistDisclaimer)({ artist: t, callback: H }),
          $ = (0, l.useCallback)(
            (e) => {
              null == I || I(), L({ to: c.qU.ArtistScreen }), J(e);
            },
            [L, I, J],
          ),
          Q = (0, l.useCallback)(
            (e) => {
              $(e);
            },
            [$],
          ),
          ee = (0, l.useCallback)(() => {
            R || Y || (N(!0), null == M || M()), X();
          }, [Y, R, M, X]),
          et = (0, l.useCallback)(() => {
            w || F || (P(!0), null == E || E()), V();
          }, [F, V, w, E]),
          en = (0, l.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          er = (0, l.useCallback)(() => {
            O(!B), Z(!B);
          }, [B]),
          ei = (0, l.useMemo)(
            () =>
              (0, r.jsx)(g.ArtistContextMenu, {
                artist: t,
                onOpenChange: er,
                open: B,
                returnFocus: !1,
                reference: (0, r.jsx)(m.z, {
                  onClick: en,
                  className: (0, i.W)(k().menuButton, k().control),
                  "aria-label": T({ id: "interface-actions.context-menu" }),
                  icon: (0, r.jsx)(p.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, u.BA)(u.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [t, T, en, er, B],
          ),
          ea = (0, l.useMemo)(() => {
            if (t.isAvailable)
              return (0, r.jsx)(f.kk, {
                isVisible: B || K,
                className: k().controls,
                radius: "round",
                playControl: (0, r.jsx)(b.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, i.W)(k().playButton, k().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: ee,
                  isPlaying: Y,
                  disabled: !t.isAvailableForPlaying,
                }),
                likeControl: (0, r.jsx)(b.dJ, {
                  className: (0, i.W)(k().likeButton, k().control),
                  isLiked: F,
                  onClick: et,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ei,
                pinControl: (0, r.jsx)(b.RT, {
                  onClick: z,
                  isPinned: t.isPinned,
                  className: (0, i.W)(k().pinButton, k().control),
                  withRipple: !1,
                }),
              });
          }, [
            t.isAvailable,
            t.isAvailableForPlaying,
            ei,
            et,
            ee,
            B,
            K,
            F,
            Y,
            t.isPinned,
            z,
          ]),
          el = (0, l.useMemo)(
            () =>
              (0, r.jsx)(v.Paper, {
                className: k().cover,
                radius: "round",
                withShadow: !0,
                ...(0, u.BA)(u.bG.artist.ARTIST_CARD),
                children: (0, r.jsxs)("div", {
                  className: k().coverBlock,
                  onClick: Q,
                  children: [
                    (0, r.jsx)(b.BE, {
                      className: k().image,
                      src: W,
                      size: 200,
                      fit: "cover",
                      alt: q,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    ea,
                  ],
                }),
              }),
            [Q, W, q, t.isAvailable, ea],
          );
        return (0, r.jsx)(f.m7, {
          ref: A,
          className: (0, i.W)(k().root, n),
          textPosition: "center",
          "aria-label": q,
          title: (0, r.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, r.jsx)(b.rU, {
              className: k().titleLink,
              href: t.url,
              "aria-label": q,
              onClick: $,
              ...(0, u.BA)(u.bG.artist.ARTIST_TITLE),
              children: U,
            }),
          }),
          srTitle: (0, r.jsx)(b.rU, { href: t.url, onClick: $, children: q }),
          "data-intersection-property-id": j,
          description: (0, r.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, u.BA)(u.bG.artist.ARTIST_SUBTITLE),
            children: (0, r.jsx)(s.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: h,
          view: el,
          ...(0, u.BA)(u.bG.artist.ARTIST_ITEM),
          children: a,
        });
      });
    },
    54864: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistContextMenu: function () {
          return u;
        },
      });
      var r = n(9753),
        i = n(9544),
        a = n(98639),
        l = n(385),
        o = n(33589),
        s = n(63394),
        c = n(67868);
      let u = (0, i.Pi)((e) => {
        var t, n;
        let {
            artist: i,
            lastMonthListeners: u,
            reference: d,
            onOpenChange: m,
            open: f,
            returnFocus: p,
          } = e,
          { settings: v, experiments: _, trailer: C } = (0, s.oR)(),
          x = (0, o.BV)(i),
          b = (0, o.SB)(i),
          y = "".concat(s.aU.ARTIST, "-").concat(null == i ? void 0 : i.id),
          g = v.layout === s.t8.Mobile,
          h =
            _.checkExperiment(s.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == i ? void 0 : i.hasTrailer),
          { href: k } = (0, s.qK)(
            null !== (t = null == i ? void 0 : i.url) && void 0 !== t ? t : "",
          ),
          { isPlaying: A, togglePlay: j } = (0, s.Qh)({
            seeds:
              null !== (n = null == i ? void 0 : i.seeds) && void 0 !== n
                ? n
                : [],
            pageIdForFrom: s.Rh.RADIO,
            blockIdForFrom: y,
          }),
          S = (0, a.useCallback)(() => {
            A || j();
          }, [A, j]),
          T = (0, a.useCallback)(() => {
            (null == i ? void 0 : i.id) &&
              C.openArtistTrailer(null == i ? void 0 : i.id);
          }, [null == i ? void 0 : i.id, C]);
        return (
          (0, s.ZP)(f),
          (0, r.jsxs)(l.v2, {
            reference: d,
            isMobile: g,
            title: null == i ? void 0 : i.name,
            description: u,
            offsetOptions: 10,
            open: f,
            onOpenChange: m,
            returnFocus: p,
            children: [
              !g &&
                (0, r.jsx)(c.Zd, {
                  onClick: x,
                  isPinned: null == i ? void 0 : i.isPinned,
                }),
              (0, r.jsx)(c.xZ, {
                onClick: b,
                isLiked: null == i ? void 0 : i.isLiked,
                disabled: !(null == i ? void 0 : i.isAvailable),
              }),
              h && (0, r.jsx)(c.NB, { onClick: T }),
              (0, r.jsx)(c.GQ, {
                onClick: S,
                disabled: !(null == i ? void 0 : i.isAvailable),
                variant: "artist",
              }),
              (0, r.jsx)(c.zq, {
                disabled: !i,
                shareLink: k,
                entityVariant: "artist",
                entityTitle: null == i ? void 0 : i.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (e, t, n) {
      "use strict";
      n.d(t, {
        I7: function () {
          return v;
        },
        b4: function () {
          return o;
        },
        at: function () {
          return C;
        },
        zU: function () {
          return _;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n.t(i, 2),
        l = n(67868);
      let o = (e) => {
        let { children: t, title: n, className: a } = e,
          { setTitleElement: o, setTitle: s } = (0, i.useContext)(l.pI),
          c = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (null == c ? void 0 : c.current) && o(c), n && s(n);
          }, [c, n, o, s]),
          (0, i.useEffect)(
            () => () => {
              s("");
            },
            [s],
          ),
          (0, r.jsx)("div", { ref: c, className: a, children: t })
        );
      };
      var s = n(9544),
        c = {
          810: (e) => {
            e.exports = a;
          },
        },
        u = {},
        d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useScroll = void 0);
        let e = (function e(t) {
          var n = u[t];
          if (void 0 !== n) return n.exports;
          var r = (u[t] = { exports: {} });
          return c[t](r, r.exports, e), r.exports;
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
        f = n(63394);
      let p = (e) => {
          let { element: t, scrollTop: n, isMobile: r } = e,
            i = 0.4 * t.clientHeight;
          return n + (r ? 56 : 72) >= t.offsetTop + i;
        },
        v = (0, s.Pi)((e) => {
          let {
              children: t,
              scrollElement: n,
              outerTitle: a = "",
              headerElement: o,
              headerThreshold: s,
            } = e,
            [c, u] = (0, i.useState)(a),
            [d, v] = (0, i.useState)(null),
            [_, C] = (0, i.useState)(!1),
            [x, b] = (0, i.useState)(!1),
            { settings: y } = (0, f.oR)(),
            g = y.layout === f.t8.Mobile;
          (0, i.useLayoutEffect)(() => {
            u(a);
          }, [a]);
          let h = (0, i.useCallback)(() => {
            if (!n) return;
            let e = null != s ? s : 10,
              t = o ? Number(o.offsetTop) - e : e;
            t < 0 && (t = 0),
              b(n.scrollTop > t),
              (null == d ? void 0 : d.current) &&
                C(
                  p({
                    element: null == d ? void 0 : d.current,
                    scrollTop: n.scrollTop,
                    isMobile: g,
                  }),
                );
          }, [n, s, o, d, g]);
          (0, i.useEffect)(() => {
            (null == n ? void 0 : n.scrollTop) === 0 && b(!1);
          }, [null == n ? void 0 : n.scrollTop]),
            m(h);
          let k = (0, i.useMemo)(
            () => ({
              title: c,
              setTitle: u,
              titleElement: d,
              scrollElement: n,
              setTitleElement: v,
              isScrolledTitle: _,
              isScrolling: x,
            }),
            [c, _, d, n, x],
          );
          return (0, r.jsx)(l.pI.Provider, { value: k, children: t });
        });
      n(66414);
      let _ = () => {
          let [e, t] = (0, i.useState)(null),
            n = (0, i.useCallback)(
              (n) => {
                e !== n && t(n);
              },
              [e],
            );
          return [e, n];
        },
        C = (e, t) => (
          (0, f.uK)().get(f.Xt),
          [
            (0, i.useMemo)(() => {
              if (void 0 !== t) {
                let n = t - 17;
                return {
                  "--average-color-background": e,
                  transform: "translateY(".concat(t >= 17 ? 0 : n, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [t, !1, e]),
            (0, i.useMemo)(() => ({ "--average-color-background": e }), [e]),
          ]
        );
    },
    55784: function (e, t, n) {
      "use strict";
      n.d(t, {
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
    83533: function (e) {
      e.exports = {
        root: "AfishaWidget_root__Fu9a6",
        content: "AfishaWidget_content__YFmbs",
        widget: "AfishaWidget_widget__ZdvqS",
      };
    },
    91172: function (e) {
      e.exports = {
        root: "ConcertCard_root__fcR9B",
        ripple: "ConcertCard_ripple__PW4xI",
        date: "ConcertCard_date__ECoa3",
        dateColor: "ConcertCard_dateColor__muPRD",
        meta: "ConcertCard_meta__9uMgy",
        city: "ConcertCard_city__Pgt4S",
        info: "ConcertCard_info___mAu4",
        button: "ConcertCard_button__GQxNL",
      };
    },
    22778: function (e) {
      e.exports = {
        root: "ConcertDate_root__xnVG1",
        month: "ConcertDate_month__ti5Na",
        day: "ConcertDate_day__YibpP",
        weekday: "ConcertDate_weekday__fBZXo",
      };
    },
    80609: function (e) {
      e.exports = {
        root: "ConcertsBlock_root__d_1G3",
        controls: "ConcertsBlock_controls__oULxu",
        item: "ConcertsBlock_item__jMAX9",
        item_singleColumn: "ConcertsBlock_item_singleColumn__p8ilp",
        preventScroll: "ConcertsBlock_preventScroll__YeeZH",
        concertsColumn: "ConcertsBlock_concertsColumn__2M2t_",
      };
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
]);
