(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    60773: function (e, t, i) {
      "use strict";
      i.d(t, {
        HS: function () {
          return u.AfishaWidget;
        },
        bn: function () {
          return _.ArtistMeta;
        },
        aD: function () {
          return m.a;
        },
        kb: function () {
          return v.ConcertCard;
        },
        CS: function () {
          return b.ConcertDate;
        },
        Z: function () {
          return c;
        },
        m: function () {
          return g.ConcertsBlock;
        },
        pB: function () {
          return p.SearchMeta;
        },
        zj: function () {
          return r;
        },
        eU: function () {
          return s;
        },
        rb: function () {
          return o;
        },
      });
      var a = i(22874);
      let l = /[+-]\d{2}:?\d{2}/,
        s = (e) => (null == e ? void 0 : e.replace(l, "")),
        o = (e) => {
          if (e) return { value: e.value, currency: e.currency };
        },
        r = (e) => {
          var t, i;
          return (0, a.pj)({
            id: e.id,
            dataSessionId:
              null !== (i = e["data-session-id"]) && void 0 !== i ? i : "",
            datetime: e.datetime && s(e.datetime),
            city: e.city,
            place: e.place,
            contentRating: e.contentRating,
            price: o(e.minPrice),
            cashbackTitle:
              null === (t = e.cashback) || void 0 === t ? void 0 : t.title,
            title: e.concertTitle,
          });
        };
      var n = i(13534);
      let d = a.V5.model("Price", {
          value: a.V5.number,
          currency: a.V5.string,
        }),
        c = a.V5.model("Concert", {
          id: a.V5.string,
          dataSessionId: a.V5.maybe(a.V5.string),
          datetime: a.V5.maybe(a.V5.string),
          city: a.V5.maybe(a.V5.string),
          place: a.V5.maybe(a.V5.string),
          contentRating: a.V5.maybe(a.V5.string),
          price: a.V5.maybe(d),
          cashbackTitle: a.V5.maybe(a.V5.string),
          title: a.V5.maybe(a.V5.string),
        }).views((e) => ({
          get isCashbackExperimentEnabled() {
            let { experiments: t } = (0, a.yj)(e);
            return t.checkExperiment(n.peG.WebNextConcertsCashback, "on");
          },
        }));
      var u = i(5783),
        m = i(88864),
        v = i(52321),
        _ = i(99679),
        p = i(14949),
        b = i(26043),
        g = i(93605);
    },
    62622: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return o;
        },
      });
      var a = i(65067),
        l = i(4875),
        s = i(13534);
      let o = (e) => {
        let { artistId: t, viewUuid: i } = e,
          r = (0, s.z$f)(),
          { hash: n } = (0, s.RQn)(),
          { pageId: d } = (0, s.lVB)(),
          {
            objectsCount: c,
            objectType: u,
            objectId: m,
            objectPosX: v,
            objectPosY: _,
            objectPos: p,
          } = (0, s.rKX)(),
          b = (0, s.wLl)(),
          g = (0, a.useCallback)(
            (e) => {
              let i = (0, s.KOr)({
                params: {
                  hash: n,
                  artistId: t,
                  objectsCount: c,
                  objectType: u,
                  objectId: m,
                  objectPosX: v,
                  objectPosY: _,
                  to: e,
                },
                logger: b,
                context: o.name,
              });
              r && i && (0, l.f7)(r.evgenInstance, i);
            },
            [r, t, n, b, m, v, _, u, c],
          ),
          C = (0, a.useCallback)(
            (e) => {
              let a = (0, s.KOr)({
                params: {
                  hash: n,
                  artistId: t,
                  viewUuid: i,
                  objectId: m,
                  objectPos: p,
                  to: e,
                },
                logger: b,
                context: o.name,
              });
              r && a && i && (0, l.Mn)(r.evgenInstance, a);
            },
            [r, t, n, b, m, p, i],
          );
        return (0, a.useCallback)(
          (e) => {
            if (r && d && s.$PW.includes(d))
              switch (d) {
                case s.Rhz.ARTIST:
                  g(e);
                  break;
                case s.Rhz.ARTIST_CONCERTS:
                  C(e);
              }
          },
          [r, d, C, g],
        );
      };
    },
    5783: function (e, t, i) {
      "use strict";
      i.d(t, {
        AfishaWidget: function () {
          return m;
        },
      });
      var a = i(75441),
        l = i(65067),
        s = i(9317),
        o = i(68208),
        r = i(59506),
        n = i(67126),
        d = i(13534),
        c = i(50813),
        u = i.n(c);
      let m = (e) => {
        let { dataSessionId: t, isOpened: i, onOpen: c, onClose: m } = e,
          v = (0, d.uK4)().get(d.U5t),
          { formatMessage: _ } = (0, s.Z)(),
          p = (0, l.useCallback)(
            (e) => {
              e.origin === v.afisha.host && "close" === e.data.type && m();
            },
            [m, v.afisha.host],
          );
        (0, l.useEffect)(
          () => (
            window.addEventListener("message", p),
            () => {
              window.removeEventListener("message", p);
            }
          ),
          [p],
        );
        let b = (0, l.useCallback)(
            (e) => {
              e ? c() : m();
            },
            [m, c],
          ),
          g = ""
            .concat(v.afisha.host, "/w/sessions/")
            .concat(t, "?clientKey=")
            .concat(v.afisha.clientId);
        return (0, a.jsxs)(r.u, {
          size: "fitContent",
          placement: "center",
          open: i,
          onOpenChange: b,
          onClose: m,
          showHeader: !1,
          className: u().widget,
          contentClassName: u().content,
          overlayColor: "full",
          children: [
            (0, a.jsx)(n.y, {
              children: (0, a.jsx)(o.Button, {
                "aria-label": _({ id: "interface-actions.close" }),
                onClick: m,
              }),
            }),
            (0, a.jsx)("iframe", {
              src: g,
              className: u().root,
              referrerPolicy: "no-referrer",
              sandbox:
                "allow-forms allow-modals allow-popups allow-scripts allow-same-origin",
              allow: "clipboard-read clipboard-write",
            }),
          ],
        });
      };
    },
    88864: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return d;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(69756),
        o = i(17392),
        r = i(59153),
        n = i.n(r);
      let d = (e) => {
        let { title: t, className: i } = e;
        return (0, a.jsxs)("div", {
          className: (0, l.W)(n().root, i),
          children: [
            (0, a.jsx)(s.Icon, {
              "aria-hidden": !0,
              className: n().icon,
              variant: "plus",
            }),
            (0, a.jsx)(o.Caption, {
              variant: "span",
              type: "text",
              size: "m",
              weight: "medium",
              lineClamp: 1,
              className: n().title,
              children: t,
            }),
          ],
        });
      };
    },
    52321: function (e, t, i) {
      "use strict";
      i.d(t, {
        ConcertCard: function () {
          return y;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(62569),
        o = i(65067),
        r = i(9317),
        n = i(4875),
        d = i(93093),
        c = i(55188),
        u = i(91307),
        m = i(68208),
        v = i(59091),
        _ = i(13534),
        p = i(62622);
      let b = (e) => {
        let { artistId: t, viewUuid: i } = e,
          a = (0, _.z$f)(),
          { hash: l } = (0, _.RQn)(),
          { pageId: s } = (0, _.lVB)(),
          {
            objectsCount: r,
            objectType: d,
            objectId: c,
            objectPosX: u,
            objectPosY: m,
            objectPos: v,
          } = (0, _.rKX)(),
          p = (0, _.wLl)(),
          g = (0, o.useCallback)(() => {
            let e = (0, _.KOr)({
              params: {
                hash: l,
                artistId: t,
                objectsCount: r,
                objectType: d,
                objectId: c,
                objectPosX: u,
                objectPosY: m,
              },
              logger: p,
              context: b.name,
            });
            a && e && (0, n.F5)(a.evgenInstance, e);
          }, [a, t, l, p, c, u, m, d, r]),
          C = (0, o.useCallback)(() => {
            let e = (0, _.KOr)({
              params: {
                hash: l,
                artistId: t,
                viewUuid: i,
                objectId: c,
                objectPos: v,
              },
              logger: p,
              context: b.name,
            });
            a && e && i && (0, n.b5)(a.evgenInstance, e);
          }, [a, t, l, p, c, v, i]);
        return (0, o.useCallback)(() => {
          if (a && s && _.$PW.includes(s))
            switch (s) {
              case _.Rhz.ARTIST:
                g();
                break;
              case _.Rhz.ARTIST_CONCERTS:
                C();
            }
        }, [a, s, C, g]);
      };
      var g = i(5783),
        C = i(26043),
        h = i(95993),
        A = i.n(h);
      let y = (0, s.Pi)((e) => {
        var t, i;
        let {
            artistId: s,
            concert: h,
            meta: y,
            viewUuid: j,
            radius: T = "l",
            className: I,
          } = e,
          { formatNumber: L, formatMessage: x } = (0, r.Z)(),
          { state: f, toggleTrue: N, toggleFalse: S } = (0, c.O)(!1),
          k = b({ artistId: s, viewUuid: j }),
          E = (0, p.x)({ artistId: s, viewUuid: j }),
          { ref: R, intersectionPropertyId: V } = (0, _.VfV)({
            callback: null !== s ? k : void 0,
            singleEvent: !0,
          }),
          P = (0, o.useId)(),
          w = (0, o.useId)(),
          O = (0, o.useMemo)(() => {
            var e, t;
            return (null === (e = h.price) || void 0 === e ? void 0 : e.value)
              ? x(
                  { id: "payment.min-price" },
                  {
                    value: L(h.price.value, {
                      style: "currency",
                      currency:
                        null === (t = h.price) || void 0 === t
                          ? void 0
                          : t.currency,
                      maximumFractionDigits: 0,
                    }),
                  },
                )
              : x({ id: "payment.buy" });
          }, [
            null === (t = h.price) || void 0 === t ? void 0 : t.currency,
            null === (i = h.price) || void 0 === i ? void 0 : i.value,
            x,
            L,
          ]),
          M = (0, d.W)((e) => {
            (0, u.m)(e, A().ripple);
          }),
          B = (0, d.W)((e) => {
            N(), E(n.Ks.ConcertPurchaseScreen), e.stopPropagation();
          });
        return (0, a.jsxs)(v.Paper, {
          radius: T,
          className: (0, l.W)(A().root, I),
          onClick: M,
          ref: R,
          "data-intersection-property-id": V,
          children: [
            h.datetime &&
              (0, a.jsx)(C.ConcertDate, {
                datetime: h.datetime,
                id: P,
                className: A().date,
                dayClassName: A().dateColor,
                monthClassName: A().dateColor,
              }),
            (0, o.cloneElement)(y, { id: w, concert: h }),
            h.dataSessionId &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(m.Button, {
                    color: "primary",
                    radius: "xxxl",
                    className: A().button,
                    "aria-describedby": "".concat(P, " ").concat(w),
                    "aria-label": O,
                    onClick: B,
                    children: O,
                  }),
                  (0, a.jsx)(g.AfishaWidget, {
                    dataSessionId: h.dataSessionId,
                    isOpened: f,
                    onOpen: N,
                    onClose: S,
                  }),
                ],
              }),
          ],
        });
      });
    },
    99679: function (e, t, i) {
      "use strict";
      i.d(t, {
        ArtistMeta: function () {
          return m;
        },
      });
      var a = i(75441),
        l = i(62569),
        s = i(65067),
        o = i(9317),
        r = i(17392),
        n = i(13534),
        d = i(88864),
        c = i(83927),
        u = i.n(c);
      let m = (0, l.Pi)((e) => {
        let { id: t, concert: i } = e,
          { formatDate: l } = (0, o.Z)(),
          c = [],
          m = (0, a.jsx)(r.Caption, {
            variant: "span",
            size: "m",
            weight: "medium",
            "aria-hidden": !0,
            children: "•",
          });
        return (
          (null == i ? void 0 : i.place) &&
            c.push(
              (0, a.jsx)(r.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                lineClamp: 1,
                children: i.place,
              }),
            ),
          (null == i ? void 0 : i.datetime) &&
            c.push(
              m,
              (0, a.jsx)(r.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                children: l(i.datetime, (0, n.Svi)()),
              }),
            ),
          (null == i ? void 0 : i.contentRating) &&
            c.push(
              m,
              (0, a.jsx)(r.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                children: i.contentRating,
              }),
            ),
          (0, a.jsxs)("div", {
            className: u().root,
            id: t,
            children: [
              (0, a.jsx)(r.Caption, {
                variant: "div",
                size: "m",
                weight: "medium",
                className: u().city,
                lineClamp: 1,
                children: null == i ? void 0 : i.city,
              }),
              (0, a.jsx)("div", {
                className: u().info,
                children: c.map((e, t) => (0, s.cloneElement)(e, { key: t })),
              }),
              (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                (null == i ? void 0 : i.cashbackTitle) &&
                (0, a.jsx)(d.a, {
                  className: u().cashback,
                  title: i.cashbackTitle,
                }),
            ],
          })
        );
      });
    },
    14949: function (e, t, i) {
      "use strict";
      i.d(t, {
        SearchMeta: function () {
          return d;
        },
      });
      var a = i(75441),
        l = i(62569),
        s = i(65067),
        o = i(17392),
        r = i(83927),
        n = i.n(r);
      let d = (0, l.Pi)((e) => {
        let { id: t, concert: i } = e,
          l = [],
          r = (0, a.jsx)(o.Caption, {
            variant: "span",
            size: "m",
            weight: "medium",
            "aria-hidden": !0,
            children: "•",
          });
        return (
          (null == i ? void 0 : i.city) &&
            l.push(
              (0, a.jsx)(o.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                lineClamp: 1,
                children: i.city,
              }),
            ),
          (null == i ? void 0 : i.contentRating) &&
            l.push(
              r,
              (0, a.jsx)(o.Caption, {
                variant: "span",
                size: "m",
                weight: "medium",
                children: i.contentRating,
              }),
            ),
          (0, a.jsxs)("div", {
            className: n().root,
            id: t,
            children: [
              (0, a.jsx)(o.Caption, {
                variant: "div",
                size: "m",
                weight: "medium",
                className: n().city,
                lineClamp: 1,
                children: null == i ? void 0 : i.title,
              }),
              (0, a.jsx)("div", {
                className: n().info,
                children: l.map((e, t) => (0, s.cloneElement)(e, { key: t })),
              }),
            ],
          })
        );
      });
    },
    26043: function (e, t, i) {
      "use strict";
      i.d(t, {
        ConcertDate: function () {
          return u;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(9317),
        o = i(35846),
        r = i(17392),
        n = i(13534),
        d = i(2166),
        c = i.n(d);
      let u = (e) => {
        let {
            datetime: t,
            className: i,
            monthClassName: d,
            dayClassName: u,
            withWeekday: m = !0,
            ...v
          } = e,
          { formatDate: _ } = (0, s.Z)(),
          p = (0, n.KR6)(t);
        return (0, a.jsxs)("div", {
          className: (0, l.W)(c().root, i),
          "aria-label": _(t, (0, n.YTW)()),
          ...v,
          ...(0, o.BA)(o.FK.concerts.CONCERT_DATE),
          children: [
            (0, a.jsx)(r.Caption, {
              variant: "div",
              size: "xs",
              weight: "bold",
              className: (0, l.W)(c().month, d),
              children: p,
            }),
            (0, a.jsx)(r.Caption, {
              variant: "div",
              className: (0, l.W)(c().day, u),
              children: _(t, (0, n.GL9)()),
            }),
            m &&
              (0, a.jsx)(r.Caption, {
                variant: "div",
                size: "xs",
                weight: "bold",
                className: c().weekday,
                children: _(t, { weekday: "short" }),
              }),
          ],
        });
      };
    },
    93605: function (e, t, i) {
      "use strict";
      i.d(t, {
        ConcertsBlock: function () {
          return p;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(50710),
        o = i(65067),
        r = i(4875),
        n = i(59100),
        d = i(97141),
        c = i(62622),
        u = i(78355),
        m = i.n(u);
      let v = () =>
          Array.from({ length: 2 }, (e, t) =>
            (0, a.jsx)(
              "div",
              { className: m().concertsColumn, children: (0, d.M4)(2) },
              t,
            ),
          ),
        _ = (e) => {
          let {
              artistId: t,
              forwardRef: i,
              isLoading: u,
              title: _,
              viewAllActionLink: p,
              children: b,
              className: g,
              containerClassName: C,
              headerClassName: h,
              itemClassName: A,
              headingVariant: y,
              ...j
            } = e,
            T = (0, o.useId)(),
            I = (0, o.useRef)(null),
            L = (0, c.x)({ artistId: t }),
            x = (0, o.useCallback)(() => {
              L(r.Ks.ArtistConcertsScreen);
            }, [L]),
            f = (0, o.useMemo)(
              () =>
                (0, s.Z)(b, 2)
                  .slice(0, 4)
                  .map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      { className: m().concertsColumn, children: e },
                      t,
                    ),
                  ),
              [b],
            );
          return (0, a.jsxs)("section", {
            ref: i,
            className: (0, l.W)(m().root, g),
            ...j,
            children: [
              (0, a.jsx)(d.ti, {
                className: h,
                labeledForId: T,
                title: _,
                viewAllActionLink: p,
                onViewAllAction: x,
                controls: (0, a.jsx)(d.J8, {
                  className: m().controls,
                  carouselRef: I,
                }),
                headingVariant: y,
              }),
              (0, a.jsx)(n.Carousel, {
                itemClassName: (0, l.W)(
                  m().item,
                  { [m().item_singleColumn]: 2 >= o.Children.count(b) },
                  A,
                ),
                className: (0, l.W)(C, { [m().preventScroll]: u }),
                ref: I,
                "aria-labelledby": T,
                children: u ? v() : f,
              }),
            ],
          });
        },
        p = (0, o.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
    },
    45906: function (e, t, i) {
      "use strict";
      i.d(t, {
        GX: function () {
          return r.MixCard;
        },
        zn: function () {
          return o;
        },
        Fh: function () {
          return l;
        },
      });
      var a = i(22874);
      let l = (e) => {
        var t;
        return {
          id: e.id,
          title: e.title,
          weblink: null !== (t = e.action.weblink) && void 0 !== t ? t : "",
          covers: (0, a.pj)(e.covers || []),
          imagesLayoutType: e.style.imagesLayoutType,
        };
      };
      var s = i(90631);
      let o = a.V5.model("MixItem", {
        id: a.V5.string,
        title: a.V5.string,
        weblink: a.V5.string,
        covers: a.V5.maybe(a.V5.array(a.V5.string)),
        imagesLayoutType: a.V5.enumeration(Object.values(s.n)),
      });
      var r = i(26783);
    },
    26783: function (e, t, i) {
      "use strict";
      i.d(t, {
        MixCard: function () {
          return _;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(62569),
        o = i(35846),
        r = i(90631),
        n = i(39054),
        d = i(59091),
        c = i(17392),
        u = i(97141),
        m = i(36498),
        v = i.n(m);
      let _ = (0, s.Pi)((e) => {
        let {
          className: t,
          title: i,
          weblink: s,
          covers: m = [],
          coverSize: _ = 100,
          imagesLayoutType: p,
          headingVariant: b = "h3",
        } = e;
        return (0, a.jsx)(u.rU, {
          href: s,
          ...(0, o.BA)(o.FK.mix.MIX_CARD),
          children: (0, a.jsxs)(d.Paper, {
            className: (0, l.W)(v().root, t),
            radius: "l",
            children: [
              (0, a.jsx)("div", {
                className: v().header,
                children: (0, a.jsx)(c.Caption, {
                  variant: b,
                  size: "xs",
                  weight: "bold",
                  className: v().title,
                  lineClamp: 2,
                  ...(0, o.BA)(o.FK.mix.MIX_CARD_HEADER),
                  children: i,
                }),
              }),
              (0, a.jsxs)("div", {
                className: (0, l.W)(v().covers, {
                  [v().covers_radial]: p === r.n.RADIAL,
                  [v().covers_stack]: p === r.n.STACK,
                }),
                ...(0, o.BA)(o.FK.mix.MIX_CARD_COVERS),
                children: [
                  (0, a.jsx)(n.Image, {
                    src: m[2],
                    withAvatarReplace: !0,
                    fit: "contain",
                    className: v().cover,
                    size: _,
                    ...(0, o.BA)(o.FK.mix.MIX_CARD_COVER_IMAGE_3),
                  }),
                  (0, a.jsx)(n.Image, {
                    src: m[1],
                    withAvatarReplace: !0,
                    fit: "contain",
                    className: v().cover,
                    size: _,
                    ...(0, o.BA)(o.FK.mix.MIX_CARD_COVER_IMAGE_2),
                  }),
                  (0, a.jsx)(n.Image, {
                    src: m[0],
                    withAvatarReplace: !0,
                    fit: "contain",
                    className: v().cover,
                    size: _,
                    ...(0, o.BA)(o.FK.mix.MIX_CARD_COVER_IMAGE_1),
                  }),
                ],
              }),
            ],
          }),
        });
      });
    },
    30139: function (e, t, i) {
      "use strict";
      i.d(t, {
        gX: function () {
          return n.MixesGridMixCard;
        },
        U5: function () {
          return r;
        },
        Nu: function () {
          return s;
        },
      });
      var a = i(22874),
        l = i(13534);
      let s = (e) =>
        (0, a.pj)({
          id: e.id,
          title: e.title,
          weblink: e.action.weblink,
          covers: e.covers.map(l.Jyc),
        });
      var o = i(40892);
      let r = a.V5.model("MixesGridMixCardItem", {
        id: a.V5.string,
        title: a.V5.string,
        weblink: a.V5.maybeNull(a.V5.string),
        covers: a.V5.maybeNull(a.V5.array(o.Ib)),
      });
      var n = i(70878);
    },
    70878: function (e, t, i) {
      "use strict";
      i.d(t, {
        MixesGridMixCard: function () {
          return _;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(62569),
        o = i(65067),
        r = i(35846),
        n = i(39054),
        d = i(59091),
        c = i(17392),
        u = i(97141),
        m = i(49390),
        v = i.n(m);
      let _ = (0, s.Pi)((e) => {
        var t;
        let {
            className: i,
            title: s,
            weblink: m,
            linkClassName: _,
            covers: p,
            coverSize: b = 100,
            captionVariant: g = "div",
          } = e,
          C = (0, o.useMemo)(() => {
            var e;
            if (
              null == p
                ? void 0
                : null === (e = p[0]) || void 0 === e
                  ? void 0
                  : e.color
            )
              return { "--subcover-background-color": p[0].color };
          }, [p]);
        return (0, a.jsx)(u.rU, {
          href: m,
          className: (0, l.W)(v().link, _),
          ...(0, r.BA)(r.FK.mix.MIX_CARD),
          children: (0, a.jsxs)(d.Paper, {
            style: C,
            className: (0, l.W)(v().root, i),
            children: [
              (0, a.jsxs)("div", {
                className: v().plate,
                ...(0, r.BA)(r.FK.mix.MIX_CARD_PLATE),
                children: [
                  (0, a.jsx)("div", {
                    className: v().subcover,
                    ...(0, r.BA)(r.FK.mix.MIX_CARD_SUBCOVER),
                  }),
                  (0, a.jsx)(n.Image, {
                    src:
                      null == p
                        ? void 0
                        : null === (t = p[0]) || void 0 === t
                          ? void 0
                          : t.uri,
                    withAvatarReplace: !0,
                    fit: "contain",
                    className: v().cover,
                    size: b,
                    ...(0, r.BA)(r.FK.mix.MIX_CARD_COVER),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: v().header,
                children: (0, a.jsx)(c.Caption, {
                  variant: g,
                  size: "xs",
                  weight: "bold",
                  className: v().title,
                  lineClamp: 2,
                  ...(0, r.BA)(r.FK.mix.MIX_CARD_HEADER),
                  children: s,
                }),
              }),
            ],
          }),
        });
      });
    },
    18691: function (e, t, i) {
      "use strict";
      i.d(t, {
        xG: function () {
          return s;
        },
        HN: function () {
          return o.OverviewBlock;
        },
        l0: function () {
          return a.l;
        },
      });
      var a = i(33382),
        l = i(22874);
      let s = l.V5.model("BaseOverview", {
        title: l.V5.maybe(l.V5.string),
        message: l.V5.maybe(l.V5.string),
        isExpandable: l.V5.optional(l.V5.boolean, !0),
        visibleLinesCount: l.V5.optional(l.V5.number, 3),
      });
      var o = i(13033);
    },
    33382: function (e, t, i) {
      "use strict";
      i.d(t, {
        l: function () {
          return l;
        },
      });
      var a = i(22874);
      let l = (e) => (0, a.pj)(e);
    },
    13033: function (e, t, i) {
      "use strict";
      i.d(t, {
        OverviewBlock: function () {
          return T;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(62569),
        o = i(65067),
        r = i.t(o, 2),
        n = i(15937),
        d = i(73484),
        c = {
          4601: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useToggle = void 0);
            let a = i(810);
            t.useToggle = (e) => {
              let [t, i] = (0, a.useState)(e);
              (0, a.useEffect)(() => {
                i(e);
              }, [e]);
              let l = (0, a.useCallback)(() => {
                  i((e) => !e);
                }, []),
                s = (0, a.useCallback)(() => {
                  i(!0);
                }, []),
                o = (0, a.useCallback)(() => {
                  i(!1);
                }, []);
              return {
                state: t,
                toggle: l,
                setState: i,
                toggleTrue: s,
                toggleFalse: o,
              };
            };
          },
          352: (e) => {
            e.exports = d;
          },
          810: (e) => {
            e.exports = r;
          },
        },
        u = {};
      function m(e) {
        var t = u[e];
        if (void 0 !== t) return t.exports;
        var i = (u[e] = { exports: {} });
        return c[e](i, i.exports, m), i.exports;
      }
      var v = {};
      (() => {
        Object.defineProperty(v, "__esModule", { value: !0 }),
          (v.useTruncate = void 0);
        let e = m(352),
          t = m(810),
          i = m(4601);
        v.useTruncate = (a) => {
          let [l, s] = (0, t.useState)(0),
            { state: o, toggleTrue: r, toggleFalse: n } = (0, i.useToggle)(!1),
            d = (0, t.useMemo)(
              () =>
                (0, e.throttle)(() => {
                  let { offsetHeight: e, scrollHeight: t } =
                    (null == a ? void 0 : a.current) || {};
                  e && t && l < t ? r() : n();
                }, 100),
              [l, a, n, r],
            );
          return (
            (0, t.useEffect)(() => {
              var e, t;
              !l &&
                (null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight) &&
                s(
                  null === (t = a.current) || void 0 === t
                    ? void 0
                    : t.offsetHeight,
                );
            }, [l, a]),
            (0, t.useEffect)(
              () => (
                d(),
                window.addEventListener("resize", d),
                () => {
                  window.removeEventListener("resize", d);
                }
              ),
              [d],
            ),
            { isTruncated: o }
          );
        };
      })(),
        v.__esModule;
      var _ = v.useTruncate,
        p = i(68208),
        b = i(17392),
        g = i(13534),
        C = i(73312),
        h = i.n(C),
        A = i(9317),
        y = i(59506);
      let j = (0, s.Pi)((e) => {
          let { message: t, title: i } = e,
            {
              modals: { overviewModal: s },
              settings: { isMobile: o },
            } = (0, g.oR4)(),
            { formatMessage: r } = (0, A.Z)(),
            { contentRef: n } = (0, g.$Y6)();
          return (0, a.jsx)(y.u, {
            title: i,
            className: h().modal,
            contentClassName: h().modalContent,
            overlayClassName: h().modalOverlay,
            headerClassName: (0, l.W)(h().modalHeader, {
              [h().modalHeader_withTitle]: i,
            }),
            size: "fitContent",
            placement: o ? "default" : "right",
            open: s.isOpened,
            onOpenChange: s.onOpenChange,
            onClose: s.close,
            portalNode: o ? null : n,
            isMobile: o,
            labelClose: r({ id: "interface-actions.close" }),
            children: (0, a.jsx)(b.Caption, {
              className: h().message,
              size: "l",
              variant: "div",
              children: t,
            }),
          });
        }),
        T = (0, s.Pi)((e) => {
          let { meta: t, buttonClassName: i } = e,
            s = (0, o.useRef)(null),
            {
              modals: { overviewModal: r },
            } = (0, g.oR4)(),
            { isTruncated: d } = _(s),
            c = d && t.isExpandable;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(b.Caption, {
                ref: s,
                className: h().message,
                size: "m",
                variant: "div",
                lineClamp: t.visibleLinesCount,
                children: t.message,
              }),
              c &&
                t.message &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(p.Button, {
                      className: (0, l.W)(h().button, i),
                      onClick: r.open,
                      radius: "xs",
                      variant: "text",
                      color: "secondary",
                      withRipple: !1,
                      children: (0, a.jsx)(b.Caption, {
                        size: "m",
                        variant: "span",
                        children: (0, a.jsx)(n.Z, {
                          id: "interface-actions.further",
                        }),
                      }),
                    }),
                    (0, a.jsx)(j, { message: t.message, title: t.title }),
                  ],
                }),
            ],
          });
        });
    },
    30495: function (e, t, i) {
      "use strict";
      i.d(t, {
        v8: function () {
          return lu.BlockEntities;
        },
        SJ: function () {
          return I;
        },
        oT: function () {
          return K;
        },
        d5: function () {
          return lr;
        },
        ue: function () {
          return x;
        },
        jn: function () {
          return f;
        },
        m8: function () {
          return ln.m;
        },
        j$: function () {
          return ld.j;
        },
        Rn: function () {
          return lc.R;
        },
        Od: function () {
          return lm.Skeleton;
        },
        E: function () {
          return lv.E;
        },
        _B: function () {
          return n;
        },
        AX: function () {
          return v;
        },
        A5: function () {
          return p;
        },
        Oy: function () {
          return g;
        },
      });
      var a,
        l,
        s,
        o,
        r = i(71011);
      let n = (e) => {
        var t, i, a, l;
        return (
          !!Array.isArray(e.tabs.data) &&
          1 === e.tabs.data.length &&
          (null === (i = e.tabs.data[0]) || void 0 === i
            ? void 0
            : null === (t = i.blocks) || void 0 === t
              ? void 0
              : t.length) === 1 &&
          (null === (l = e.tabs.data[0]) || void 0 === l
            ? void 0
            : null === (a = l.blocks[0]) || void 0 === a
              ? void 0
              : a.type) === r.g.WIZARD
        );
      };
      var d = i(61039);
      let c = (e) => ({
        type: e.type,
        data: (0, d.m0)({ clip: e.data.clip, artists: e.data.artists }),
      });
      var u = i(14222),
        m = i(7797);
      let v = (e) => {
        let { playlist: t, likesCount: i, trailer: a, tracksCount: l } = e;
        return {
          type: u.Q.LIKED_PLAYLIST_ITEM,
          data: (0, m.RE)({
            playlist: t,
            likesCount: i,
            trailer: a,
            tracksCount: l,
          }),
        };
      };
      var _ = i(72783);
      let p = (e) => {
        let {
          album: t,
          artists: i,
          likesCount: a,
          bookmateOptionRequired: l,
        } = e;
        return {
          type: u.Q.NON_MUSIC_ALBUM_ITEM,
          data: (0, _.cO)({
            album: t,
            likesCount: a,
            bookmateOptionRequired: l,
            artists: i,
          }),
        };
      };
      var b = i(1150);
      let g = (e) => ({ type: u.Q.TRACK_ITEM, data: (0, b.Vt)(e.data.track) });
      var C = i(22874);
      ((a = s || (s = {})).IDLE = "IDLE"),
        (a.PENDING = "PENDING"),
        (a.RESOLVE = "RESOLVE"),
        (a.REJECT = "REJECT"),
        (a.OUTDATED = "OUTDATED");
      let h = C.V5.model("LandingBaseBlock", {
          loadingState: C.V5.enumeration(Object.values(s)),
          id: C.V5.string,
          isNotFound: C.V5.boolean,
          hasSentAnalyticsOnLoaded: C.V5.boolean,
          meta: C.V5.maybe(C.V5.frozen()),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === s.IDLE;
            },
            get isLoading() {
              return e.loadingState === s.PENDING;
            },
            get isLoaded() {
              return e.loadingState === s.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === s.REJECT;
            },
            get isOutdated() {
              return e.loadingState === s.OUTDATED;
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
          }))
          .actions((e) => ({
            setHasSentAnalyticsOnLoaded(t) {
              e.hasSentAnalyticsOnLoaded = t;
            },
            setOutdated() {
              e.loadingState = s.OUTDATED;
            },
            setIsNeededToLoad() {
              e.loadingState = s.IDLE;
            },
          })),
        A = C.V5.model("LandingBlockFetchableMetaSource", {
          uri: C.V5.string,
          countWeb: C.V5.maybe(C.V5.number),
          count: C.V5.maybe(C.V5.number),
        }),
        y = C.V5.model("LandingBlockFetchableMeta", {
          title: C.V5.maybe(C.V5.string),
          description: C.V5.maybe(C.V5.string),
          viewAllActionLink: C.V5.maybeNull(C.V5.string),
          source: C.V5.maybe(A),
          showPolicy: C.V5.maybe(C.V5.string),
          coverStyle: C.V5.maybe(C.V5.string),
        }),
        j = C.V5.model("NonMusicChartAlbumData", { items: C.V5.array(_.ug) }),
        T = h
          .props({
            type: C.V5.literal(r.g.CHART_ALBUMS),
            data: C.V5.maybe(j),
            meta: y,
          })
          .named("NonMusicChartAlbum")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        I = C.V5.model("LandingAlbumItem", {
          type: C.V5.literal(u.Q.ALBUM_ITEM),
          data: _.ug,
        }),
        L = C.V5.model("LandingLikedPlaylistItem", {
          type: C.V5.literal(u.Q.LIKED_PLAYLIST_ITEM),
          data: m.d2,
        }),
        x = C.V5.model("LandingNonMusicAlbumItem", {
          type: C.V5.literal(u.Q.NON_MUSIC_ALBUM_ITEM),
          data: _.ug,
        }),
        f = C.V5.model("LandingPlaylistItem", {
          type: C.V5.literal(u.Q.PLAYLIST_ITEM),
          data: m.d2,
        }),
        N = C.V5.model("LandingTrackItem", {
          type: C.V5.literal(u.Q.TRACK_ITEM),
          data: b.le,
        });
      var S = i(13534),
        k = i(40892);
      let E = (e, t, i) => ({
        type: u.Q.ALBUM_ITEM,
        data: (0, _.cO)({ album: e, artists: t, trailer: i }),
      });
      var R = i(64353);
      let V = (e, t) => ({
          type: u.Q.ARTIST_ITEM,
          data: (0, R.tR)({ artist: e, trailer: t }),
        }),
        P = (e, t, i, a) => ({
          type: u.Q.CHART_ALBUM_ITEM,
          data: (0, _.cO)({ album: e, chart: t, likesCount: i, trailer: a }),
        });
      var w = i(30139);
      let O = (e) =>
          (0, C.pj)({ type: u.Q.MIX_CARD_ITEM, data: (0, w.Nu)(e.data) }),
        M = (e) => ({
          type: u.Q.PERSONAL_PLAYLIST_ITEM,
          data: {
            playlist: (0, m.RE)({
              playlist: e.data.playlist,
              trailer: e.data.trailer,
            }),
            playlistType: e.data.playlistType,
            description: e.data.description,
          },
        }),
        B = (e, t) => ({
          type: u.Q.PLAYLIST_ITEM,
          data: (0, m.RE)({ playlist: e, trailer: t }),
        }),
        D = (e) => {
          switch (e.type) {
            case u.Q.MIX_CARD_ITEM:
              return O(e);
            case u.Q.NON_MUSIC_ALBUM_ITEM:
              return p({
                album: e.data.album,
                likesCount: e.data.likesCount,
                bookmateOptionRequired: e.data.bookmateOptionRequired,
              });
            case u.Q.ALBUM_ITEM:
              return E(e.data.album, e.data.artists, e.data.trailer);
            case u.Q.CHART_ALBUM_ITEM:
              return P(
                e.data.album,
                e.data.chart,
                e.data.likesCount,
                e.data.trailer,
              );
            case u.Q.ARTIST_ITEM:
              return V(e.data.artist, e.data.trailer);
            case u.Q.PLAYLIST_ITEM:
              return B(e.data.playlist, e.data.trailer);
            case u.Q.PERSONAL_PLAYLIST_ITEM:
              return M(e);
            case u.Q.LIKED_PLAYLIST_ITEM:
              return v({
                playlist: e.data.playlist,
                likesCount: e.data.likesCount,
                trailer: e.data.trailer,
              });
          }
        },
        W = C.V5.model("LandingArtistItem", {
          type: C.V5.literal(u.Q.ARTIST_ITEM),
          data: R.Go,
        }),
        U = C.V5.model("LandingChartAlbumItem", {
          type: C.V5.literal(u.Q.CHART_ALBUM_ITEM),
          data: _.ug,
        }),
        Y = C.V5.model("LandingMixCardItemModel", {
          type: C.V5.literal(u.Q.MIX_CARD_ITEM),
          data: w.U5,
        }),
        G = C.V5.model("LandingPersonalPlaylistItem", {
          playlist: m.d2,
          playlistType: C.V5.string,
          description: C.V5.maybe(C.V5.string),
        }),
        H = C.V5.model("LandingPersonalPlaylistItem", {
          type: C.V5.literal(u.Q.PERSONAL_PLAYLIST_ITEM),
          data: G,
        }),
        z = C.V5.union(I, W, f, H, L, U, x, Y),
        K = C.V5.compose(
          C.V5.model("LandingBlockEntities", {
            title: C.V5.maybeNull(C.V5.string),
            items: C.V5.array(z),
          }),
          k.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === S.Gui.PENDING;
            },
            get isNotFound() {
              return e.isRejected;
            },
          }))
          .actions((e) => ({
            getData: (0, C.ls)(function* (t) {
              let { blockId: i } = t,
                { landingResource: a, modelActionsLogger: l } = (0, C.dU)(e);
              if (e.loadingState !== S.Gui.PENDING)
                try {
                  e.loadingState = S.Gui.PENDING;
                  let t = yield a.getBlockEntities({
                    blockId: i,
                    page: 0,
                    pageSize: 100,
                  });
                  (e.title = t.title),
                    (e.items = (0, C.pj)(t.items.map(D))),
                    e.loadingState !== S.Gui.IDLE &&
                      (e.loadingState = S.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== S.Gui.IDLE &&
                      (e.loadingState = S.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = S.Gui.IDLE),
                (e.items = (0, C.pj)([])),
                (e.title = null);
            },
          }));
      var Q = i(62726),
        Z = i(36746),
        F = i(504);
      let X = [r.g.COLLECTION_DOWNLOADED_TRACKS],
        q = (e) => X.includes(e),
        J = (e) => {
          if (e)
            return {
              adImpressions: e.adImpressions,
              blockImpression: e.blockImpression,
              blockRender: e.blockRender,
            };
        },
        $ = (e) =>
          (0, C.pj)({
            reporting: J(e.reporting),
            items: e.albumBanners.map((e) => ({
              album: (0, _.cO)({ album: e.album, artists: e.artists }),
              artists: e.artists.map((e) => (0, R.tR)({ artist: e })),
              cover: e.cover,
              coverContentMode: e.coverContentMode,
              clickUrl: e.reporting.clickUrl,
              yclid: e.playbackParams.yclid,
              utm: e.playbackParams.utm,
            })),
          });
      var ee = i(60773);
      let et = (e) => {
          var t;
          let { uri: i, color: a } = e.cover || {};
          return (0, C.pj)({
            id: e.id,
            title: e.concertTitle,
            city: e.city,
            place: e.place,
            datetime: e.datetime && (0, ee.eU)(e.datetime),
            contentRating: e.contentRating,
            dataSessionId: e.dataSessionId,
            cover: { uri: i, color: a },
            rank: e.rank,
            cashbackTitle:
              null === (t = e.cashback) || void 0 === t ? void 0 : t.title,
          });
        },
        ei = (e) => {
          var t;
          let i =
            null === (t = e.concerts) || void 0 === t
              ? void 0
              : t.map((e) => {
                  let { concert: t, minPrice: i } = e;
                  return { ...et(t), price: (0, ee.rb)(i) };
                });
          return (0, C.pj)({ items: i });
        },
        ea = (e) => {
          let t = e.artists.map((e) => (0, R.tR)({ artist: e }));
          return (0, C.pj)({
            playlist: (0, m.RE)({ playlist: e.playlist }),
            artists: t,
          });
        },
        el = (e) => (0, C.pj)({ items: e.tracks.map((e) => (0, b.Vt)(e)) }),
        es = (e) => {
          let { album: t, artists: i, releaseDate: a, trailer: l } = e.release;
          return {
            album: (0, _.cO)({
              album: t,
              artists: i,
              trailer: l,
              releaseDate: a,
            }),
            releaseDate: a,
          };
        },
        eo = (e) => {
          let { album: t, artists: i, releaseDate: a } = e.release;
          return {
            album: (0, _.h0)({
              album: t,
              artists: i,
              releaseDate: a,
              isPresave: e.presaved,
            }),
          };
        },
        er = (e) => {
          var t, i;
          let a =
            null === (i = (e || {}).chart) || void 0 === i
              ? void 0
              : null === (t = i.tracks) || void 0 === t
                ? void 0
                : t.map((e) => {
                    let { track: t, chart: i } = e;
                    return { type: u.Q.TRACK_ITEM, data: (0, b.S7)(t, i) };
                  });
          return (0, C.pj)({
            items: a,
            playlist: (0, m.RE)({ playlist: null == e ? void 0 : e.chart }),
          });
        };
      ((l = o || (o = {})).RADIO = "radio"),
        (l.PROMOTIONS = "promotions"),
        (l.EDITORIAL_PLAYLISTS = "editorial-playlists");
      let en = (e) => Object.values(o).includes(e),
        ed = (e) => !!(e && e[0] && "artists" in e[0].data),
        ec = (e) =>
          !!(e && "object" == typeof e && e[0] && "owner" in e[0].data),
        eu = (e) => !!(e && e[0] && "promoId" in e[0].data),
        em = (e) =>
          !!(
            e[0] &&
            "data" in e[0] &&
            "object" == typeof e[0].data &&
            e[0].data &&
            "data" in e[0].data
          );
      var ev = i(44679),
        e_ = i(15357),
        ep = i(97472);
      let eb = (e) => e.every((e) => Object.values(ep.e).includes(e)),
        eg = (e) => {
          var t, i, a;
          let l = (0, R.dM)(e.decomposed),
            s = e.disclaimers && eb(e.disclaimers) ? e.disclaimers : void 0;
          return (0, C.pj)({
            id: String(e.id),
            name: null !== (i = e.name) && void 0 !== i ? i : "",
            various: e.various,
            isAvailable: null === (a = e.available) || void 0 === a || a,
            isComposer: e.composer,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            decomposed: l,
            disclaimers: s,
          });
        },
        eC = (e) =>
          (0, C.pj)({
            items: e.map((e) => {
              var t, i, a;
              let l =
                  e.data.type && Object.values(ev.V).includes(e.data.type)
                    ? e.data.type
                    : void 0,
                s =
                  !e.data.availableForPremiumUsers &&
                  e.data.availableForOptions.includes(e_.Y.BOOKMATE),
                o =
                  e.data.disclaimers && eb(e.data.disclaimers)
                    ? e.data.disclaimers
                    : void 0;
              return (0, C.pj)({
                type: u.Q.NON_MUSIC_ALBUM_ITEM,
                data: {
                  id: e.data.id,
                  title: null !== (i = e.data.title) && void 0 !== i ? i : "",
                  type: l,
                  likesCount: e.data.likesCount,
                  isAvailable:
                    null === (a = e.data.available) || void 0 === a || a,
                  coverUri: e.data.coverUri,
                  availableForPremiumUsers: e.data.availableForPremiumUsers,
                  availableForOptions: e.data.availableForOptions,
                  genre: e.data.genre,
                  bestAlbumTracks: e.data.bests,
                  bookmateOptionRequired: s,
                  trackCount: e.data.trackCount,
                  year: e.data.year,
                  listeningFinished: e.data.listeningFinished,
                  disclaimers: o,
                  artists:
                    null === (t = e.data.artists) || void 0 === t
                      ? void 0
                      : t.map(eg),
                },
              });
            }),
          });
      var eh = i(26704);
      let eA = (e) =>
          (0, C.pj)({
            title: e.title,
            viewAllActionLink: e.viewAllUrl,
            showPolicy: eh.V.SHOW_AND_LOAD,
          }),
        ey = (e) =>
          (0, C.pj)({
            items: e.map((e) => {
              var t, i, a;
              return (0, C.pj)({
                type: u.Q.LIKED_PLAYLIST_ITEM,
                data: {
                  uuid:
                    null !== (i = e.data.playlistUuid) && void 0 !== i ? i : "",
                  isAvailable:
                    null === (a = e.data.available) || void 0 === a || a,
                  uid: e.data.uid,
                  kind: e.data.kind,
                  revision: e.data.revision,
                  title: e.data.title,
                  coverUri:
                    null === (t = e.data.cover) || void 0 === t
                      ? void 0
                      : t.uri,
                  likesCount: e.data.likesCount,
                  tracksCount: e.data.trackCount,
                  visibility: e.data.visibility,
                },
              });
            }),
          }),
        ej = (e) =>
          (0, C.pj)({
            items: e.map((e) => {
              var t, i, a, l, s;
              return (0, C.pj)({
                featureId:
                  null !== (t = e.data.promoId) && void 0 !== t ? t : "",
                title: null !== (i = e.data.title) && void 0 !== i ? i : "",
                subtitle:
                  null !== (a = e.data.subtitle) && void 0 !== a ? a : "",
                imageUrl: null !== (l = e.data.image) && void 0 !== l ? l : "",
                weblink: null !== (s = e.data.url) && void 0 !== s ? s : "",
              });
            }),
          }),
        eT = (e) =>
          (0, C.pj)({
            items: e.map((e) => {
              var t, i, a, l, s, o, r, n, d;
              let c = (
                null === (a = e.data.data) || void 0 === a
                  ? void 0
                  : null === (i = a.station) || void 0 === i
                    ? void 0
                    : null === (t = i.icon) || void 0 === t
                      ? void 0
                      : t.backgroundColor
              )
                ? (0, b.Er)(
                    S.Q2A.Dark,
                    e.data.data.station.icon.backgroundColor,
                  )
                : void 0;
              return (0, C.pj)({
                title:
                  null === (s = e.data.data) || void 0 === s
                    ? void 0
                    : null === (l = s.station) || void 0 === l
                      ? void 0
                      : l.name,
                backgroundImageUrl:
                  "avatars.mds.yandex.net/get-music-misc/34161/custom-wave-default-waves-background.image/%%",
                stationId:
                  null !== (n = e.data.blockEntityDataId) && void 0 !== n
                    ? n
                    : "",
                seeds: [
                  null !== (d = e.data.blockEntityDataId) && void 0 !== d
                    ? d
                    : "",
                ],
                colors: { average: c },
                idForFrom:
                  null === (r = e.data.data) || void 0 === r
                    ? void 0
                    : null === (o = r.station) || void 0 === o
                      ? void 0
                      : o.idForFrom,
              });
            }),
          }),
        eI = (e) => {
          let t = {
            loadingState: s.RESOLVE,
            id: e.id,
            type: void 0,
            meta: eA(e),
            data: void 0,
            isNeededToLoad: !1,
            isLoading: !1,
            isLoaded: !0,
            isRejected: !1,
            isVisible: !0,
            isNotFound: !1,
            hasSentAnalyticsOnLoaded: !1,
            objectsCount: e.entities.length,
            setHasSentAnalyticsOnLoaded: () => {},
          };
          switch (e.type) {
            case o.RADIO:
              if (em(e.entities))
                return (0, C.pj)({
                  ...t,
                  type: r.g.EDITORIAL_WAVES,
                  data: eT(e.entities),
                });
              return (0, C.pj)({ ...t, type: r.g.EDITORIAL_WAVES });
            case o.PROMOTIONS:
              if (eu(e.entities))
                return (0, C.pj)({
                  ...t,
                  type: r.g.PROMOTIONS,
                  data: ej(e.entities),
                });
              return (0, C.pj)({ ...t, type: r.g.PROMOTIONS });
            case o.EDITORIAL_PLAYLISTS:
              if (ed(e.entities))
                return (0, C.pj)({
                  ...t,
                  type: r.g.NON_MUSIC_EDITORIAL_COMPILATION,
                  data: eC(e.entities),
                });
              if (ec(e.entities))
                return (0, C.pj)({
                  ...t,
                  type: r.g.NON_MUSIC_EDITORIAL_COMPILATION,
                  data: ey(e.entities),
                });
              return (0, C.pj)({
                ...t,
                type: r.g.NON_MUSIC_EDITORIAL_COMPILATION,
              });
          }
        },
        eL = (e) => {
          let t = { loadingState: S.Gui.RESOLVE, isLoading: !1 };
          return (
            (t.meta = { selectedTabIndex: 0 }),
            (t.tabs = {
              loadingState: S.Gui.RESOLVE,
              data: [
                {
                  meta: { id: e.title, title: e.title },
                  shouldReloadNotification: !1,
                  blocks: e.blocks.filter((e) => en(e.type)).map((e) => eI(e)),
                },
              ],
            }),
            (0, C.pj)(t)
          );
        },
        ex = (e, t) =>
          (0, C.pj)({
            items: e.items.map(c),
            canShowEmptyBlock: t === r.g.COLLECTION_CLIPS,
          }),
        ef = (e) => {
          var t;
          let {
            album: i,
            artists: a,
            releaseDate: l,
            millisecondsUntilRelease: s,
            presaveDate: o,
          } = e.data || {};
          return {
            type: u.Q.PRESAVED_ALBUM_ITEM,
            data: (0, _.wq)({
              ...i,
              artists: a,
              releaseDate: l,
              millisecondsUntilRelease: s,
              presaveDate: o,
              coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            }),
          };
        },
        eN = (e) => {
          switch (e.type) {
            case u.Q.ALBUM_ITEM:
              return E(e.data.album, e.data.artists, e.data.trailer);
            case u.Q.PRESAVED_ALBUM_ITEM:
              return ef(e);
          }
        },
        eS = (e) => {
          var t;
          let i =
            null === (t = (e || {}).tabs) || void 0 === t
              ? void 0
              : t.map((e) => {
                  let t = null == e ? void 0 : e.items.map(eN);
                  return (0, C.pj)({
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    items: t,
                    canShowEmptyBlock: !0,
                  });
                });
          return (0, C.pj)({ tabs: i });
        },
        ek = (e) => {
          var t;
          let i =
            null === (t = (e || {}).likedAlbums) || void 0 === t
              ? void 0
              : t.map((e) =>
                  (0, _.cO)({
                    album: e.data.album,
                    artists: e.data.artists,
                    trailer: e.data.trailer,
                  }),
                );
          return (0, C.pj)({ items: i, canShowEmptyBlock: !0 });
        },
        eE = (e) => {
          let t = e.items.map((e) =>
            (0, R.tR)({ artist: e.data.artist, trailer: e.data.trailer }),
          );
          return (0, C.pj)({ items: t, canShowEmptyBlock: !0 });
        },
        eR = (e) => {
          var t;
          let i =
            null === (t = (e || {}).likedArtists) || void 0 === t
              ? void 0
              : t.map((e) =>
                  (0, R.tR)({ artist: e.data.artist, trailer: e.data.trailer }),
                );
          return (0, C.pj)({ items: i, canShowEmptyBlock: !0 });
        },
        eV = (e) => {
          var t;
          let i =
            null === (t = (e || {}).createdPlaylists) || void 0 === t
              ? void 0
              : t.map((e) =>
                  (0, m.RE)({
                    playlist: e.data.playlist,
                    likesCount: e.data.likesCount,
                    trailer: e.data.trailer,
                  }),
                );
          return (0, C.pj)({ items: i });
        },
        eP = (e) => {
          let t = (null == e ? void 0 : e.tracks) || [],
            i = t.slice(0, 8).map((e) => (0, b.Vt)(e));
          return (0, C.pj)({ items: i, rawTracks: t });
        },
        ew = (e) => {
          let t = e.items.map((e) => {
            switch (e.type) {
              case u.Q.TRACK_ITEM:
                return g(e);
              case u.Q.LIKED_PLAYLIST_ITEM:
                return v({
                  playlist: e.data.playlist,
                  likesCount: e.data.likesCount,
                  trailer: e.data.trailer,
                  tracksCount: e.data.trackCount,
                });
              case u.Q.NON_MUSIC_ALBUM_ITEM:
                return p({
                  album: e.data.album,
                  likesCount: e.data.likesCount,
                  bookmateOptionRequired: e.data.bookmateOptionRequired,
                });
            }
          });
          return (0, C.pj)({ items: t });
        },
        eO = (e) => {
          var t;
          let i =
            null === (t = (e || {}).likedPlaylists) || void 0 === t
              ? void 0
              : t.map((e) =>
                  (0, m.RE)({
                    playlist: e.data.playlist,
                    generatedPlaylistType: e.data.generatedPlaylistType,
                    likesCount: e.data.likesCount,
                    trailer: e.data.trailer,
                  }),
                );
          return (0, C.pj)({ items: i });
        },
        eM = (e) => {
          var t;
          let i =
            null === (t = (e || {}).tabs) || void 0 === t
              ? void 0
              : t.map((e) => {
                  let t =
                    null == e
                      ? void 0
                      : e.items.map((e) =>
                          (0, m.RE)({
                            playlist: e.data.playlist,
                            generatedPlaylistType: e.data.generatedPlaylistType,
                            likesCount: e.data.likesCount,
                            trailer: e.data.trailer,
                          }),
                        );
                  return (0, C.pj)({
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    items: t,
                    canShowEmptyBlock: !0,
                  });
                });
          return (0, C.pj)({ tabs: i });
        };
      var eB = i(10979);
      let eD = (e) => {
          var t, i, a;
          let l = e || {};
          return (0, C.pj)({
            items:
              null !==
                (a =
                  null === (t = l.tracks) || void 0 === t
                    ? void 0
                    : t.map((e) => (0, b.Vt)(e))) && void 0 !== a
                ? a
                : [],
            playlist: (0, eB.PV)(l.playlist),
            totalItemsCount:
              null === (i = l.summary) || void 0 === i ? void 0 : i.count,
            canShowEmptyBlock: !0,
          });
        },
        eW = (e) =>
          "object" == typeof e &&
          null !== e &&
          "type" in e &&
          e.type === r.g.TABS,
        eU = (e) => Object.values(r.g).includes(e),
        eY = (e) => !!(e && "object" == typeof e && "blocks" in e),
        eG = (e) => {
          let {
            showPolicy: t,
            isNeededToLoad: i,
            isLoading: a,
            isLoaded: l,
            isRejected: s,
            isNotEmpty: o,
            isOutdated: r,
            isNeededToHide: n,
          } = e;
          if (n) return !1;
          switch (t) {
            case eh.V.SHOW_AND_LOAD:
              if (a || s || i) return !0;
              return o;
            case eh.V.LOAD_AND_SHOW:
              return (l && o) || !!r;
            default:
              return !0;
          }
        },
        eH = C.V5.model("ArtistPopularTracksData", { items: C.V5.array(b.le) }),
        ez = h
          .props({
            type: C.V5.literal(r.g.ARTIST_POPULAR_TRACKS),
            data: C.V5.maybe(eH),
            meta: y,
          })
          .named("ArtistPopularTracks")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        eK = C.V5.model("ArtistReleaseData", {
          album: _.ug,
          releaseDate: C.V5.maybe(C.V5.string),
        }),
        eQ = h
          .props({
            type: C.V5.literal(r.g.ARTIST_RELEASE),
            data: C.V5.maybe(eK),
            meta: y,
          })
          .named("ArtistRelease")
          .views((e) => ({
            get isVisible() {
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!e.data,
              });
            },
            get objectsCount() {
              return e.data ? 1 : 0;
            },
          })),
        eZ = C.V5.model("ArtistUpcomingReleaseData", { album: _.W9 }),
        eF = h
          .props({
            type: C.V5.literal(r.g.ARTIST_UPCOMING_RELEASE),
            data: C.V5.maybe(eZ),
            meta: y,
          })
          .named("ArtistUpcomingRelease")
          .views((e) => ({
            get isVisible() {
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!e.data,
              });
            },
            get objectsCount() {
              return e.data ? 1 : 0;
            },
          }));
      var eX = i(9177);
      let eq = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            ("message" in e ||
              "title" in e ||
              "expandable" in e ||
              "visibleLines" in e)
          ),
        eJ = (e) => {
          var t;
          return (0, C.pj)({
            title: e.title,
            description: e.description,
            source: e.source,
            viewAllActionLink:
              null === (t = e.viewAllAction) || void 0 === t
                ? void 0
                : t.weblink,
            showPolicy: e.showPolicy,
            coverStyle: e.coverStyle,
          });
        };
      var e$ = i(33382);
      let e0 = (e) => {
          var t;
          return (0, C.pj)({
            ...(0, e$.l)(e),
            showPolicy: e.showPolicy,
            viewAllActionLink:
              null === (t = e.viewAllAction) || void 0 === t
                ? void 0
                : t.weblink,
          });
        },
        e5 = (e) => ((0, eX.F)(e) ? eJ(e) : eq(e) ? e0(e) : void 0),
        e1 = (e) => ({
          loadingState: s.IDLE,
          id: e.id,
          type: e.type,
          meta: e5(e.data),
          data: void 0,
          isNeededToLoad: !0,
          isLoading: !0,
          isLoaded: !1,
          isRejected: !1,
          isVisible: !0,
          isNotFound: !1,
          hasSentAnalyticsOnLoaded: !1,
          objectsCount: 0,
          setHasSentAnalyticsOnLoaded: () => {},
        }),
        e3 = (e) => {
          var t;
          let i =
            null === (t = e.blocks) || void 0 === t
              ? void 0
              : t.reduce((e, t) => {
                  let i = e1(t);
                  return (ez.is(i) || eQ.is(i) || eF.is(i)) && e.push(i), e;
                }, []);
          return (0, C.pj)({ blocks: i });
        },
        e4 = C.V5.model("ArtistPickData", {
          playlist: eB.Cd,
          artists: C.V5.array(R.Go),
        }),
        e2 = h
          .props({
            type: C.V5.literal(r.g.ARTIST_PICK),
            data: C.V5.maybe(e4),
            meta: y,
          })
          .named("ArtistPick")
          .views((e) => ({
            get isVisible() {
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!e.data,
              });
            },
            get objectsCount() {
              return e.data && 1;
            },
          })),
        e7 = C.V5.model("FamiliarYouData", {
          vibeTrackCount: C.V5.optional(C.V5.number, 0),
          collectionTrackCount: C.V5.optional(C.V5.number, 0),
          collectionAlbumCount: C.V5.optional(C.V5.number, 0),
        }).views((e) => {
          let t = {
            get hasTracks() {
              return e.collectionTrackCount > 0 || e.vibeTrackCount > 0;
            },
            get hasFamiliarInfo() {
              return t.hasTracks || e.collectionAlbumCount > 0;
            },
            get tracksCount() {
              return e.collectionTrackCount + e.vibeTrackCount;
            },
            get hasCollectionEntities() {
              return e.collectionTrackCount > 0 || e.collectionAlbumCount > 0;
            },
            get hasVibeEntities() {
              return e.vibeTrackCount > 0;
            },
            href: (e) =>
              e
                ? t.hasCollectionEntities
                  ? "/artist/"
                      .concat(e, "/familiar?tab=")
                      .concat(S.g3g.COLLECTION)
                  : t.hasVibeEntities
                    ? "/artist/".concat(e, "/familiar?tab=").concat(S.g3g.VIBE)
                    : "/artist/".concat(e, "/familiar")
                : "",
          };
          return t;
        }),
        e6 = h
          .props({
            type: C.V5.literal(r.g.FAMILIAR_YOU),
            data: C.V5.maybe(e7),
            meta: y,
          })
          .named("FamiliarYou")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!(null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.hasFamiliarInfo),
              });
            },
            get objectsCount() {
              return e.data && 1;
            },
          })),
        e9 = (e) => {
          var t;
          let i =
            null === (t = e.blocks) || void 0 === t
              ? void 0
              : t.reduce((e, t) => {
                  let i = e1(t);
                  return (e6.is(i) || e2.is(i)) && e.push(i), e;
                }, []);
          return (0, C.pj)({ blocks: i });
        },
        e8 = (e) => {
          let t = e1(e);
          if ((0, F.Z)(t) && eY(e.data))
            switch (t.type) {
              case r.g.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                t.data = e3(e.data);
                break;
              case r.g.FAMILIAR_YOU_AND_ARTIST_PICK:
                t.data = e9(e.data);
            }
          return t;
        },
        te = (e) => {
          let { tab: t, disabledBlocks: i } = e;
          return (0, C.pj)({
            meta: { id: t.id, title: t.title },
            shouldReloadNotification: !1,
            blocks: t.blocks
              .filter(
                (e) => eU(e.type) && !(null == i ? void 0 : i.includes(e.id)),
              )
              .map(e8),
          });
        },
        tt = (e) => {
          let {
              tabData: t,
              upperBlocks: i,
              disabledTabs: a,
              disabledBlocks: l,
            } = e,
            s = { loadingState: S.Gui.IDLE, isLoading: !0 };
          return (
            t &&
              ((s.meta = {
                selectedTabIndex: t.selectedTabIndex,
                source: t.source,
              }),
              (s.tabs = {
                loadingState: S.Gui.IDLE,
                data: t.tabs
                  .filter((e) => !(null == a ? void 0 : a.includes(e.id)))
                  .map((e) => te({ tab: e, disabledBlocks: l })),
              })),
            i &&
              (s.upperBlocks = i
                .filter(
                  (e) => eU(e.type) && !(null == l ? void 0 : l.includes(e.id)),
                )
                .map(e8)),
            (0, C.pj)(s)
          );
        },
        ti = (e) => {
          let { blocks: t, disabledTabs: i, disabledBlocks: a } = e,
            l = [],
            s = null;
          for (let e of t) eW(e) ? (s = e) : l.push(e);
          return tt({
            tabData: null == s ? void 0 : s.data,
            upperBlocks: l,
            disabledTabs: i,
            disabledBlocks: a,
          });
        },
        ta = (e) => {
          var t;
          let i =
            null === (t = (e || {}).concerts) || void 0 === t
              ? void 0
              : t.map(et);
          return (0, C.pj)({ items: i });
        },
        tl = (e) => ({ uri: e.uri, color: e.color }),
        ts = (e) => {
          let {
            type: t,
            data: {
              track: i,
              album: a,
              playlist: l,
              durationTotal: s,
              durationLeft: o,
            },
          } = e;
          return (0, C.pj)({
            type: t,
            data: {
              album: t === ev.V.ALBUM && a ? (0, _.cO)({ album: a }) : void 0,
              playlist:
                t !== ev.V.ALBUM && l ? (0, m.RE)({ playlist: l }) : void 0,
              track: (0, b.Vt)(i),
              albumDuration: s,
              albumDurationLeft: o,
            },
          });
        },
        to = (e) => {
          let { bookshelf: t, newEpisodes: i, lastPlayed: a } = e;
          return (0, C.pj)({
            bookshelf: {
              title: t.title,
              covers: (t.covers || []).map(tl),
              bookCount: t.bookCount,
              podcastCount: t.podcastCount,
            },
            newEpisodes: {
              title: i.title,
              covers: (i.covers || []).map(tl),
              trackCount: i.trackCount,
            },
            lastPlayed: a && ts(a),
          });
        };
      var tr = i(5104);
      let tn = (e) => {
          var t;
          let { data: i } = e;
          return (0, C.pj)({
            type: u.Q.DONATION_ITEM,
            data: (0, tr.fv)({
              url: i.tipUrl,
              artist: i.artist,
              goal: null === (t = i.goal) || void 0 === t ? void 0 : t.title,
            }),
          });
        },
        td = (e) => {
          var t;
          let i =
            null === (t = (e || {}).donations) || void 0 === t
              ? void 0
              : t.map(tn);
          return (0, C.pj)({ items: i });
        },
        tc = (e) => {
          var t;
          let i =
            null === (t = (e || {}).items) || void 0 === t
              ? void 0
              : t.map((e) =>
                  (0, R.tR)({ artist: e.data.artist, trailer: e.data.trailer }),
                );
          return (0, C.pj)({ items: i });
        };
      var tu = i(9152);
      let tm = (e) => {
          var t;
          let i =
            null === (t = (e || {}).items) || void 0 === t
              ? void 0
              : t.map(tu.FF);
          return (0, C.pj)({ items: i });
        },
        tv = (e) => {
          var t, i, a;
          return (0, C.pj)({
            vibeTrackCount:
              null === (t = e.wave) || void 0 === t ? void 0 : t.trackCount,
            collectionTrackCount:
              null === (i = e.collection) || void 0 === i
                ? void 0
                : i.trackCount,
            collectionAlbumCount:
              null === (a = e.collection) || void 0 === a
                ? void 0
                : a.albumCount,
          });
        },
        t_ = (e) => {
          var t;
          let i =
            null === (t = (e || {}).inStyleTabs) || void 0 === t
              ? void 0
              : t.map((e, t) => {
                  var i;
                  let a =
                      null == e
                        ? void 0
                        : e.items.map((e) => {
                            let { album: t, artists: i, trailer: a } = e;
                            return (0, _.cO)({
                              album: t,
                              artists: i,
                              trailer: a,
                            });
                          }),
                    l =
                      ((null == e
                        ? void 0
                        : null === (i = e.cover) || void 0 === i
                          ? void 0
                          : i.uri) && [null == e ? void 0 : e.cover.uri]) ||
                      [];
                  return {
                    tab: { id: t, title: e.title, covers: (0, C.pj)(l) },
                    data: (0, C.pj)(a),
                  };
                });
          return (0, C.pj)({ items: i });
        },
        tp = (e) =>
          (0, C.pj)({
            type: u.Q.MENU_ITEM,
            data: {
              title: e.data.title,
              viewAllActionLink: e.data.viewAllAction.weblink,
            },
          }),
        tb = (e) => {
          var t;
          let i =
            null === (t = (e || {}).items) || void 0 === t ? void 0 : t.map(tp);
          return (0, C.pj)({ items: i });
        },
        tg = (e) => {
          let { favorites: t, history: i } = e,
            a = (0, S.Jyc)(t.cover),
            l = t.trackCovers.map(S.Jyc),
            s = (0, C.pj)({
              title: t.title,
              cover: a,
              playlistUuid: t.playlistUuid || void 0,
              count: t.count,
              trackCovers: l,
            }),
            o = i.trackCovers.map(S.Jyc),
            r = (0, C.pj)({
              title: i.title,
              trackCovers: o,
              artists: i.subtitleElements,
            });
          return (0, C.pj)({ favorites: s, history: r });
        },
        tC = (e) => ({
          items: (0, C.pj)(e.items.map((e) => (0, w.Nu)(e.data))),
        });
      var th = i(45906);
      let tA = (e) => ({
          items: (0, C.pj)(e.items.map((e) => (0, th.Fh)(e.data))),
        }),
        ty = (e) => {
          var t, i;
          return (0, C.pj)({
            title: e.title,
            stationId: e.stationId,
            imageUrl: e.imageUrl,
            style: {
              backgroundColor:
                null === (t = e.style) || void 0 === t
                  ? void 0
                  : t.backgroundColor,
              titleColor:
                null === (i = e.style) || void 0 === i ? void 0 : i.titleColor,
            },
          });
        },
        tj = C.V5.model("NeuromusicItem", {
          title: C.V5.string,
          stationId: C.V5.string,
          imageUrl: C.V5.maybe(C.V5.string),
          style: C.V5.maybe(
            C.V5.model({
              backgroundColor: C.V5.maybe(C.V5.string),
              titleColor: C.V5.maybe(C.V5.string),
            }),
          ),
        }),
        tT = (e) => (0, C.pj)({ items: e.items.map((e) => ty(e)) }),
        tI = (e) => {
          var t;
          let i =
            null === (t = (e || {}).items) || void 0 === t
              ? void 0
              : t.map((e) => {
                  switch (e.type) {
                    case u.Q.LIKED_PLAYLIST_ITEM:
                      return v({
                        playlist: e.data.playlist,
                        likesCount: e.data.likesCount,
                        trailer: e.data.trailer,
                      });
                    case u.Q.ALBUM_ITEM:
                      return E(e.data.album, e.data.artists, e.data.trailer);
                  }
                });
          return (0, C.pj)({ items: i });
        },
        tL = (e) => {
          var t;
          let i =
            null === (t = (e || {}).newReleases) || void 0 === t
              ? void 0
              : t.map((e) => {
                  let {
                    album: t,
                    artists: i,
                    releaseDate: a,
                    cover: l,
                    trailer: s,
                  } = e;
                  return {
                    album: (0, _.cO)({ album: t, artists: i, trailer: s }),
                    releaseDate: a,
                    coverUri: null == l ? void 0 : l.uri,
                    coverColor: null == l ? void 0 : l.color,
                  };
                });
          return (0, C.pj)({ items: i });
        },
        tx = (e) => {
          let t = e.items.map((e) =>
            (0, _.wJ)({
              album: e.data.album,
              likesCount: e.data.likesCount,
              chart: e.data.chart,
            }),
          );
          return (0, C.pj)({ items: t });
        },
        tf = (e) => {
          let t = e.items.map((e) =>
            e.type === u.Q.NON_MUSIC_ALBUM_ITEM
              ? p({
                  album: e.data.album,
                  artists: e.data.artists,
                  likesCount: e.data.likesCount,
                  bookmateOptionRequired: e.data.bookmateOptionRequired,
                })
              : v({
                  playlist: e.data.playlist,
                  likesCount: e.data.likesCount,
                  trailer: e.data.trailer,
                }),
          );
          return (0, C.pj)({ items: t });
        },
        tN = (e, t) => {
          var i;
          return (0, C.pj)({
            items: e.tracks.map((e) => (0, b.Vt)(e)),
            playlist: (0, eB.PV)(e.playlist),
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            withRewindTrailerButton: "rewind2024" === t,
          });
        },
        tS = (e) => {
          if (!e || !Array.isArray(e.items)) return (0, C.pj)({});
          let t = e.items.map(M);
          return (0, C.pj)({ items: t });
        },
        tk = (e) => {
          if (!Array.isArray(null == e ? void 0 : e.promotions))
            return (0, C.pj)({});
          let t =
            null == e
              ? void 0
              : e.promotions.map((e) => {
                  var t, i;
                  return {
                    featureId: (e = e || {}).featureId,
                    title: e.title,
                    subtitle: e.subtitle,
                    weblink:
                      null !==
                        (i =
                          null === (t = e.action) || void 0 === t
                            ? void 0
                            : t.weblink) && void 0 !== i
                        ? i
                        : "",
                    imageUrl: e.imageUrl,
                  };
                });
          return (0, C.pj)({ items: t });
        },
        tE = (e) => {
          var t;
          let i =
            null === (t = (e || {}).items) || void 0 === t
              ? void 0
              : t.map((e) => {
                  switch (e.type) {
                    case u.Q.PLAYLIST_ITEM:
                      return B(e.data.playlist, e.data.trailer);
                    case u.Q.ALBUM_ITEM:
                      return E(e.data.album, e.data.artists, e.data.trailer);
                    case u.Q.ARTIST_ITEM:
                      return V(e.data.artist, e.data.trailer);
                  }
                });
          return (0, C.pj)({ items: i });
        },
        tR = (e) =>
          (0, C.pj)({
            type: u.Q.WAVE_ITEM,
            data: {
              cover: e.data.cover ? (0, S.Jyc)(e.data.cover) : void 0,
              vibe: (0, tu.FF)(e.data.wave),
            },
          }),
        tV = (e) => {
          let t = e.items
            .map((e) => {
              switch (e.type) {
                case u.Q.ALBUM_ITEM:
                  return E(e.data.album, e.data.artists, e.data.trailer);
                case u.Q.ARTIST_ITEM:
                  return V(e.data.artist, e.data.trailer);
                case u.Q.TRACK_ITEM:
                  return g(e);
                case u.Q.LIKED_PLAYLIST_ITEM:
                  return v({
                    playlist: e.data.playlist,
                    likesCount: e.data.likesCount,
                    trailer: e.data.trailer,
                    tracksCount: e.data.trackCount,
                  });
                case u.Q.WAVE_ITEM:
                  return tR(e);
                case u.Q.NON_MUSIC_ALBUM_ITEM:
                  return p({
                    album: e.data.album,
                    likesCount: e.data.likesCount,
                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                  });
                case u.Q.CLIP_ITEM:
                case u.Q.CLIP:
                  return {
                    type: e.type,
                    data: (0, d.m0)({
                      clip: e.data.clip,
                      artists: e.data.artists,
                    }),
                  };
                default:
                  return;
              }
            })
            .filter((e) => e);
          return (0, C.pj)({ items: t });
        },
        tP = (e) =>
          (0, C.pj)({
            buttonColor: null == e ? void 0 : e.buttonColor,
            textColor: null == e ? void 0 : e.textColor,
            bgImageUrl: null == e ? void 0 : e.bgImageUrl,
            imageUrl: null == e ? void 0 : e.imageUrl,
            buttonTextColor: null == e ? void 0 : e.buttonTextColor,
          }),
        tw = (e) => {
          var t;
          return (0, C.pj)({
            title: null == e ? void 0 : e.title,
            subtitle: null == e ? void 0 : e.subtitle,
            buttonTitle: null == e ? void 0 : e.buttonTitle,
            imageUrl: null == e ? void 0 : e.imageUrl,
            align: null == e ? void 0 : e.align,
            weblink:
              null == e
                ? void 0
                : null === (t = e.action) || void 0 === t
                  ? void 0
                  : t.weblink,
            lightTheme: tP(null == e ? void 0 : e.lightTheme),
            darkTheme: tP(null == e ? void 0 : e.darkTheme),
          });
        },
        tO = (e) => {
          var t;
          return null === (t = (e || {}).tabs) || void 0 === t
            ? void 0
            : t.map((e) =>
                (0, C.pj)({
                  id: e.id,
                  title: e.title,
                  subtitle: e.subtitle,
                  covers: e.covers,
                }),
              );
        },
        tM = (e) => {
          var t;
          let i =
            null === (t = (e || {}).waves) || void 0 === t
              ? void 0
              : t.map((e, t) => ({
                  tab: { id: t, title: null == e ? void 0 : e.title },
                  data: null == e ? void 0 : e.items.map(tu.FF),
                }));
          return (0, C.pj)({ items: i });
        },
        tB = (e) => {
          var t;
          let i =
            null === (t = (null == e ? void 0 : e.artists) || []) ||
            void 0 === t
              ? void 0
              : t.map((e) => (0, R.tR)({ artist: e }));
          return (0, C.pj)({
            title: e.title,
            description: e.description,
            artists: i,
          });
        },
        tD = (e) => !!(e && "object" == typeof e && "albumBanners" in e),
        tW = (e) => !!(e && "object" == typeof e && "concerts" in e),
        tU = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "artists" in e &&
            e.artists &&
            "playlist" in e &&
            e.playlist
          ),
        tY = (e) => !!(e && "object" == typeof e && "tracks" in e && e.tracks),
        tG = (e) =>
          !!(e && "object" == typeof e && "release" in e && e.release),
        tH = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "release" in e &&
            e.release &&
            "presaved" in e
          ),
        tz = (e) => "chart" in e,
        tK = (e) =>
          "object" == typeof e &&
          null !== e &&
          "type" in e &&
          (e.type === u.Q.CLIP || e.type === u.Q.CLIP_ITEM),
        tQ = (e) =>
          "object" == typeof e &&
          null !== e &&
          "items" in e &&
          Array.isArray(e.items) &&
          (!e.items.length || tK(e.items[0])),
        tZ = (e) => void 0 !== e.tabs,
        tF = (e) => "likedAlbums" in e,
        tX = (e) => !!(e && "object" == typeof e && "items" in e),
        tq = (e) => "likedArtists" in e,
        tJ = (e) => "createdPlaylists" in e,
        t$ = (e) => !!(e && "object" == typeof e && "tracks" in e),
        t0 = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "items" in e &&
            Array.isArray(e.items)
          ),
        t5 = (e) => "likedPlaylists" in e,
        t1 = (e) => "tabs" in e,
        t3 = (e) => "playlist" in e,
        t4 = (e) => void 0 !== e.concerts,
        t2 = (e) => "object" == typeof e && null !== e && "bookshelf" in e,
        t7 = (e) => void 0 !== e.donations,
        t6 = (e) => "items" in e,
        t9 = (e) => "items" in e,
        t8 = (e) => !!(e && "object" == typeof e),
        ie = (e) => "inStyleTabs" in e,
        it = (e) => "items" in e,
        ii = (e) => "favorites" in e,
        ia = (e) => "object" == typeof e && null !== e && "items" in e,
        il = (e) => "items" in e,
        is = (e) => "items" in e,
        io = (e) => "items" in e,
        ir = (e) => "newReleases" in e,
        id = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "type" in e &&
            e.type === u.Q.CHART_ALBUM_ITEM
          ),
        ic = (e) => {
          let t = e.items;
          return !t.length || id(t[0]);
        },
        iu = (e) => "object" == typeof e && null !== e && "items" in e,
        im = (e) => "playlist" in e,
        iv = (e) => "items" in e,
        i_ = (e) => "promotions" in e,
        ip = (e) => "items" in e,
        ib = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "items" in e &&
            Array.isArray(e.items)
          ),
        ig = (e) => "title" in e,
        iC = (e) => "waves" in e,
        ih = (e) => "object" == typeof e && null !== e && "title" in e,
        iA = C.V5.model("AlbumPromoDataItem", {
          album: _.ug,
          artists: C.V5.array(R.Go),
          cover: k.Ib,
          coverContentMode: C.V5.maybe(C.V5.string),
          clickUrl: C.V5.string,
          yclid: C.V5.string,
          utm: C.V5.frozen(),
          hasClicked: C.V5.optional(C.V5.boolean, !1),
        })
          .views((e) => {
            let t = {
              get reportingProperties() {
                return { ...e.utm, yclid: e.yclid };
              },
              get albumUrl() {
                let i = new URLSearchParams(t.reportingProperties);
                return "".concat(e.album.url, "/?").concat(i.toString());
              },
            };
            return t;
          })
          .actions((e) => ({
            setClicked: (0, C.ls)(function* () {
              if (!(0, C.fh)(e)) return;
              let { prefixlessResource: t, modelActionsLogger: i } = (0, C.dU)(
                e,
              );
              if (!e.hasClicked)
                try {
                  (e.hasClicked = !0), yield t.reportForAlbumPromo(e.clickUrl);
                } catch (e) {
                  i.error(e);
                }
            }),
          })),
        iy = C.V5.model("AlbumPromoDataReportingOptions", {
          url: C.V5.string,
          timeMs: C.V5.number,
        }),
        ij = C.V5.model("AlbumPromoDataReporting", {
          blockRender: iy,
          blockImpression: iy,
          adImpressions: iy,
        }),
        iT = C.V5.model("AlbumPromoData", {
          items: C.V5.array(iA),
          reporting: C.V5.maybe(ij),
        }).actions((e) => ({
          report: (0, C.ls)(function* (t) {
            if (!(0, C.fh)(e)) return;
            let { prefixlessResource: i, modelActionsLogger: a } = (0, C.dU)(e);
            try {
              yield i.reportForAlbumPromo(t);
            } catch (e) {
              a.error(e);
            }
          }),
        })),
        iI = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.ALBUM_PROMO),
              C.V5.literal(r.g.SIMPLE_ALBUM_PROMO),
            ),
            data: C.V5.maybe(iT),
            meta: y,
          })
          .named("AlbumPromo")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!(
                  (null === (t = e.data) || void 0 === t ? void 0 : t.items) &&
                  e.data.items.length > 0
                ),
                isOutdated: e.isOutdated,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        iL = C.V5.model("ArtistConcertsData", { items: C.V5.array(ee.Z) }),
        ix = h
          .props({
            type: C.V5.union(C.V5.literal(r.g.ARTIST_CONCERTS)),
            data: C.V5.maybe(iL),
            meta: y,
          })
          .named("ArtistConcerts")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        iN = C.V5.model("ArtistPopularTracksAndReleasesData", {
          blocks: C.V5.array(C.V5.union(ez, eQ, eF)),
        }).views((e) => ({
          get popularTracks() {
            return e.blocks.find((e) => ez.is(e));
          },
          get upcomingRelese() {
            return e.blocks.find((e) => eF.is(e));
          },
          get release() {
            return e.blocks.find((e) => eQ.is(e));
          },
        })),
        iS = h
          .props({
            type: C.V5.literal(r.g.ARTIST_POPULAR_TRACKS_AND_RELEASES),
            data: C.V5.maybe(iN),
          })
          .named("ArtistPopularTracksAndReleases")
          .views((e) => ({
            get isVisible() {
              return !0;
            },
            get objectsCount() {
              var t, i;
              return null !==
                (i =
                  null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.blocks.length) && void 0 !== i
                ? i
                : 0;
            },
          })),
        ik = C.V5.model("ChartTracksItem", {
          type: C.V5.literal(u.Q.TRACK_ITEM),
          data: b.le,
        }),
        iE = C.V5.model("ChartTracksData", {
          items: C.V5.array(ik),
          playlist: eB.Cd,
        }),
        iR = h
          .props({
            type: C.V5.literal(r.g.CHART_TRACKS),
            data: C.V5.maybe(iE),
            meta: y,
          })
          .named("ChartTracks")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              let t =
                null !==
                  (l =
                    null === (a = e.data) || void 0 === a
                      ? void 0
                      : a.items.length) && void 0 !== l
                  ? l
                  : 0;
              return t < 8 ? t : 8;
            },
          })),
        iV = C.V5.model("LandingClipItem", {
          type: C.V5.union(C.V5.literal(u.Q.CLIP), C.V5.literal(u.Q.CLIP_ITEM)),
          data: d.x$,
        }),
        iP = C.V5.model("ClipsData", {
          items: C.V5.array(iV),
          canShowEmptyBlock: C.V5.optional(C.V5.boolean, !1),
        }).views((e) => ({
          get isEmptyBlock() {
            return e.canShowEmptyBlock && 0 === e.items.length;
          },
        })),
        iw = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.CLIPS),
              C.V5.literal(r.g.ARTIST_CLIPS),
              C.V5.literal(r.g.COLLECTION_CLIPS),
            ),
            data: C.V5.maybe(iP),
            meta: y,
          })
          .named("Clips")
          .views((e) => ({
            get isVisible() {
              var t, i;
              let { settings: a } = (0, C.yj)(e);
              if (
                null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.canShowEmptyBlock
              )
                return !0;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) !== 0,
                isNeededToHide: a.isMobile,
              });
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        iO = C.V5.model("CollectionAlbumsData", {
          items: C.V5.array(_.ug),
          canShowEmptyBlock: C.V5.optional(C.V5.boolean, !1),
        }).views((e) => ({
          get isEmptyBlock() {
            return e.canShowEmptyBlock && 0 === e.items.length;
          },
        })),
        iM = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_ALBUMS),
            data: C.V5.maybe(iO),
            meta: y,
          })
          .named("CollectionAlbums")
          .views((e) => ({
            get isVisible() {
              var t, i, a;
              if (
                (null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.canShowEmptyBlock) ||
                e.isLoading ||
                e.isRejected ||
                e.isNeededToLoad
              )
                return !0;
              return (
                (null === (a = e.data) || void 0 === a
                  ? void 0
                  : null === (i = a.items) || void 0 === i
                    ? void 0
                    : i.length) !== 0
              );
            },
            get objectsCount() {
              var l, s;
              return null !==
                (s =
                  null === (l = e.data) || void 0 === l
                    ? void 0
                    : l.items.length) && void 0 !== s
                ? s
                : 0;
            },
          }));
      var iB = i(52682);
      let iD = C.V5.model("LandingUpcomingAlbumItem", {
          type: C.V5.literal(u.Q.PRESAVED_ALBUM_ITEM),
          data: _.W9,
        }),
        iW = C.V5.union(I, iD),
        iU = C.V5.model("CollectionAlbumsPresavesTab", {
          id: C.V5.string,
          title: C.V5.string,
          type: C.V5.enumeration(Object.values(iB.n)),
          items: C.V5.array(iW),
          canShowEmptyBlock: C.V5.optional(C.V5.boolean, !1),
        }).views((e) => ({
          get isEmptyTab() {
            return !!(e.canShowEmptyBlock && 0 === e.items.length);
          },
        })),
        iY = C.V5.model("CollectionAlbumsPresavesTabs", {
          tabs: C.V5.array(iU),
        }).views((e) => ({
          get isFirstTabEmpty() {
            var t;
            return (
              (null === (t = e.tabs[0]) || void 0 === t
                ? void 0
                : t.items.length) === 0
            );
          },
          get isSecondTabEmpty() {
            var i;
            return (
              (null === (i = e.tabs[1]) || void 0 === i
                ? void 0
                : i.items.length) === 0
            );
          },
          get areBothTabsEmpty() {
            return this.isFirstTabEmpty && this.isSecondTabEmpty;
          },
          get activeIndexTab() {
            if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
            return 0;
          },
        })),
        iG = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_ALBUMS_PRESAVES),
            data: C.V5.maybe(iY),
            meta: y,
          })
          .named("CollectionAlbumsPresaves")
          .views((e) => ({
            get isVisible() {
              return !0;
            },
            get objectsCount() {
              if (e.data)
                return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
              return 0;
            },
          })),
        iH = C.V5.model("CollectionArtistData", {
          items: C.V5.array(R.Go),
          canShowEmptyBlock: C.V5.optional(C.V5.boolean, !1),
        }).views((e) => ({
          get isEmptyBlock() {
            return e.canShowEmptyBlock && 0 === e.items.length;
          },
        })),
        iz = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.COLLECTION_ARTISTS),
              C.V5.literal(r.g.COLLECTION_ARTISTS_AND_TOP),
              C.V5.literal(r.g.PERSONAL_ARTISTS),
              C.V5.literal(r.g.NEW_STARS_ARTISTS),
              C.V5.literal(r.g.EDITORIAL_ARTISTS),
              C.V5.literal(r.g.META_TAG_POPULAR_ARTISTS),
              C.V5.literal(r.g.MICRO_GENRE_TOP_ARTISTS),
              C.V5.literal(r.g.MICRO_GENRE_ARTISTS),
              C.V5.literal(r.g.META_TAG_ARTISTS),
              C.V5.literal(r.g.SIMILAR_ARTISTS),
            ),
            data: C.V5.maybe(iH),
            meta: y,
          })
          .named("CollectionArtist")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (
                null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.canShowEmptyBlock
              )
                return !0;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) !== 0,
              });
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        iK = C.V5.model("CollectionPlaylistsData", { items: C.V5.array(m.d2) }),
        iQ = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_PLAYLISTS_CREATED),
            data: C.V5.maybe(iK),
            meta: y,
          })
          .named("CollectionCreatedPlaylists")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          }));
      var iZ = i(81046);
      let iF = C.V5.model("CollectionDownloadedTracksData", {
          items: C.V5.array(b.le),
          rawTracks: C.V5.frozen(),
        }).views((e) => ({
          get entitiesData() {
            return e.rawTracks.map((e) => ({ type: iZ.A.Music, meta: e }));
          },
        })),
        iX = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_DOWNLOADED_TRACKS),
            data: C.V5.maybe(iF),
            meta: y,
          })
          .named("CollectionDownloadedTracks")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        iq = C.V5.union(L, x, N),
        iJ = C.V5.model("CollectionKidsData", { items: C.V5.array(iq) }),
        i$ = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_KIDS),
            data: C.V5.maybe(iJ),
            meta: y,
          })
          .named("CollectionKids")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        i0 = C.V5.model("CollectionLikedPlaylistsData", {
          items: C.V5.array(m.d2),
        }),
        i5 = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_PLAYLISTS_LIKED),
            data: C.V5.maybe(i0),
            meta: y,
          })
          .named("CollectionLikedPlaylists")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          }));
      var i1 = i(21018);
      let i3 = C.V5.model("CollectionPlaylistsTab", {
          id: C.V5.string,
          title: C.V5.string,
          type: C.V5.enumeration(Object.values(i1.a)),
          items: C.V5.array(m.d2),
          canShowEmptyBlock: C.V5.optional(C.V5.boolean, !1),
        }).views((e) => ({
          get isEmptyTab() {
            return !!(e.canShowEmptyBlock && 0 === e.items.length);
          },
        })),
        i4 = C.V5.model("CollectionPlaylistsTabs", {
          tabs: C.V5.array(i3),
        }).views((e) => ({
          get isFirstTabEmpty() {
            var t;
            return (
              (null === (t = e.tabs[0]) || void 0 === t
                ? void 0
                : t.items.length) === 0
            );
          },
          get isSecondTabEmpty() {
            var i;
            return (
              (null === (i = e.tabs[1]) || void 0 === i
                ? void 0
                : i.items.length) === 0
            );
          },
          get areBothTabsEmpty() {
            return this.isFirstTabEmpty && this.isSecondTabEmpty;
          },
          get activeIndexTab() {
            if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
            return 0;
          },
        })),
        i2 = h
          .props({
            type: C.V5.literal(r.g.COLLECTION_PLAYLISTS_LIKED_AND_CREATED),
            data: C.V5.maybe(i4),
            meta: y,
          })
          .named("CollectionPlaylists")
          .views((e) => ({
            get isVisible() {
              return !0;
            },
            get objectsCount() {
              if (e.data)
                return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
              return 0;
            },
          })),
        i7 = C.V5.model("LandingConcertItem", {
          id: C.V5.string,
          title: C.V5.string,
          city: C.V5.string,
          place: C.V5.string,
          datetime: C.V5.string,
          contentRating: C.V5.maybe(C.V5.string),
          dataSessionId: C.V5.string,
          cover: k.Ib,
          rank: C.V5.maybe(C.V5.number),
          cashbackTitle: C.V5.maybe(C.V5.string),
        }).views((e) => ({
          get isCashbackExperimentEnabled() {
            let { experiments: t } = (0, C.yj)(e);
            return t.checkExperiment(S.peG.WebNextConcertsCashback, "on");
          },
        })),
        i6 = C.V5.model("ConcertsData", { items: C.V5.array(i7) }),
        i9 = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.CONCERTS_TOP),
              C.V5.literal(r.g.CONCERTS_PERSONAL),
              C.V5.literal(r.g.EDITORIAL_CONCERTS),
            ),
            data: C.V5.maybe(i6),
            meta: y,
          })
          .named("Concerts")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          }));
      var i8 = i(15186),
        ae = i(73447);
      let at = C.V5.model("ContinueListenTrackData", {
          album: C.V5.maybe(ae.KX),
          playlist: C.V5.maybe(eB.Cd),
          track: b.le,
          trackLoadingState: C.V5.optional(
            C.V5.enumeration(Object.values(S.Gui)),
            S.Gui.IDLE,
          ),
          playlistLoadingState: C.V5.optional(
            C.V5.enumeration(Object.values(S.Gui)),
            S.Gui.IDLE,
          ),
          albumDuration: C.V5.maybe(C.V5.number),
          albumDurationLeft: C.V5.maybe(C.V5.number),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.trackLoadingState === S.Gui.IDLE;
            },
            get isLoading() {
              return (
                e.trackLoadingState === S.Gui.PENDING ||
                e.playlistLoadingState === S.Gui.PENDING
              );
            },
            get isRejected() {
              return (
                e.trackLoadingState === S.Gui.REJECT ||
                e.playlistLoadingState === S.Gui.REJECT
              );
            },
          }))
          .actions((e) => ({
            getTrackMeta: (0, C.ls)(function* () {
              let { tracksResource: t, modelActionsLogger: i } = (0, C.dU)(e),
                { continueListen: a } = (0, C.yj)(e);
              if (a.track && "number" == typeof a.track.durationMs) {
                e.trackLoadingState = S.Gui.RESOLVE;
                return;
              }
              e.trackLoadingState = S.Gui.PENDING;
              try {
                var l;
                let i = (0, i8.i)(
                    e.track.id,
                    null === (l = e.album) || void 0 === l ? void 0 : l.id,
                  ),
                  [a] = yield t.getTracksMeta({
                    trackIds: [i],
                    withProgress: !0,
                  });
                if (((e.trackLoadingState = S.Gui.RESOLVE), a))
                  return (0, b.Vt)(a);
              } catch (t) {
                i.error(t), (e.trackLoadingState = S.Gui.REJECT);
              }
            }),
            getPlaylistMeta: (0, C.ls)(function* () {
              let { usersResource: t, modelActionsLogger: i } = (0, C.dU)(e),
                { continueListen: a } = (0, C.yj)(e);
              if ((a.track && "number" == typeof a.trackIndex) || !e.playlist) {
                e.playlistLoadingState = S.Gui.RESOLVE;
                return;
              }
              e.playlistLoadingState = S.Gui.PENDING;
              try {
                let { tracks: i } = yield t.getPlaylistWithTracksIds({
                    userId: String(e.playlist.uid),
                    playlistKind: e.playlist.kind,
                    resumeStream: !1,
                  }),
                  a = i.find((t) => String(t.id) === e.track.id);
                if (
                  ((e.playlistLoadingState = S.Gui.RESOLVE),
                  !e.track.durationMs && a)
                )
                  return a.originalIndex;
              } catch (t) {
                i.error(t), (e.playlistLoadingState = S.Gui.REJECT);
              }
            }),
          })),
        ai = C.V5.model("ContinueListenTrack", { type: C.V5.string, data: at }),
        aa = C.V5.model("ContinueListenBaseItem", {
          uri: C.V5.string,
          color: C.V5.maybe(C.V5.string),
        }),
        al = C.V5.model("ContinueListenBaseItem", {
          title: C.V5.string,
          covers: C.V5.array(aa),
          bookCount: C.V5.maybe(C.V5.number),
          podcastCount: C.V5.maybe(C.V5.number),
          trackCount: C.V5.maybe(C.V5.number),
        }),
        as = C.V5.model("ContinueListenData", {
          lastPlayed: C.V5.maybe(ai),
          bookshelf: al,
          newEpisodes: al,
        }),
        ao = h
          .props({
            type: C.V5.literal(r.g.CONTINUE_LISTEN),
            data: C.V5.maybe(as),
            meta: y,
          })
          .named("ContinueListen")
          .views((e) => ({
            get isVisible() {
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !!e.data,
              });
            },
            get objectsCount() {
              return Object.keys(e.data || {}).length;
            },
          })),
        ar = i(18691)
          .xG.named("LandingBlockOverviewMeta")
          .props({
            showPolicy: C.V5.maybe(C.V5.string),
            viewAllActionLink: C.V5.maybeNull(C.V5.string),
          }),
        an = h
          .props({
            type: C.V5.literal(r.g.DISLIKES),
            data: C.V5.undefined,
            meta: ar,
          })
          .named("Dislikes")
          .views(() => ({
            get isVisible() {
              return !0;
            },
            get objectsCount() {
              return 0;
            },
          })),
        ad = C.V5.model("LandingDonationItem", {
          type: C.V5.literal(u.Q.DONATION_ITEM),
          data: tr.Ew,
        }),
        ac = C.V5.model("DonationsData", { items: C.V5.array(ad) }),
        au = h
          .props({
            type: C.V5.literal(r.g.DONATIONS),
            data: C.V5.maybe(ac),
            meta: y,
          })
          .named("Donations")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        am = C.V5.model("EditorialVibesDataModel", {
          items: C.V5.array(tu.KW),
        }),
        av = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.EDITORIAL_WAVES),
              C.V5.literal(r.g.META_TAG_WAVE),
              C.V5.literal(r.g.MICRO_GENRE_WAVE),
              C.V5.literal(r.g.MICRO_GENRE_SIMILAR_WAVE),
              C.V5.literal(r.g.META_TAG_SIMILAR_WAVE),
            ),
            data: C.V5.maybe(am),
            meta: y,
          })
          .named("EditorialVibes")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        a_ = C.V5.model("FamiliarYouAndArtistPickData", {
          blocks: C.V5.array(C.V5.union(e6, e2)),
        }).views((e) => ({
          get familiarYou() {
            return e.blocks.find((e) => e6.is(e));
          },
          get artistPick() {
            return e.blocks.find((e) => e2.is(e));
          },
        })),
        ap = h
          .props({
            type: C.V5.literal(r.g.FAMILIAR_YOU_AND_ARTIST_PICK),
            data: C.V5.maybe(a_),
          })
          .named("FamiliarYouAndArtistPick")
          .views((e) => ({
            get isVisible() {
              var t, i, a, l, s, o;
              if (
                (null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.familiarYou) ||
                (null === (i = e.data) || void 0 === i ? void 0 : i.artistPick)
              )
                return (
                  (null === (l = e.data) || void 0 === l
                    ? void 0
                    : null === (a = l.familiarYou) || void 0 === a
                      ? void 0
                      : a.isVisible) ||
                  (null === (o = e.data) || void 0 === o
                    ? void 0
                    : null === (s = o.artistPick) || void 0 === s
                      ? void 0
                      : s.isVisible)
                );
              return !0;
            },
            get objectsCount() {
              var r, n;
              return null !==
                (n =
                  null === (r = e.data) || void 0 === r
                    ? void 0
                    : r.blocks.length) && void 0 !== n
                ? n
                : 0;
            },
          })),
        ab = C.V5.model("InStyleDataItemTab", {
          id: C.V5.number,
          title: C.V5.string,
          covers: C.V5.array(C.V5.string),
        }),
        ag = C.V5.model("InStyleDataItem", { tab: ab, data: C.V5.array(_.ug) }),
        aC = C.V5.model("InStyleData", { items: C.V5.array(ag) }),
        ah = h
          .props({
            type: C.V5.literal(r.g.IN_STYLE),
            data: C.V5.maybe(aC),
            meta: y,
          })
          .named("InStyle")
          .views((e) => ({
            get isVisible() {
              var t, i, a;
              let l =
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) === 0,
                s =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : null === (i = a.items) || void 0 === i
                      ? void 0
                      : i.every((e) => !(null == e ? void 0 : e.data));
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !l || !s,
              });
            },
            get objectsCount() {
              var l, s;
              return null !==
                (s =
                  null === (l = e.data) || void 0 === l
                    ? void 0
                    : l.items.length) && void 0 !== s
                ? s
                : 0;
            },
          })),
        aA = C.V5.model("LandingMenuItem", {
          type: C.V5.literal(u.Q.MENU_ITEM),
          data: C.V5.model({
            title: C.V5.string,
            viewAllActionLink: C.V5.maybe(C.V5.maybeNull(C.V5.string)),
          }),
        }).views((e) => ({
          get key() {
            return ""
              .concat(e.data.title, "_")
              .concat(e.data.viewAllActionLink);
          },
        })),
        ay = C.V5.model("ItemListData", { items: C.V5.array(aA) }),
        aj = h
          .props({
            type: C.V5.literal(r.g.ITEM_LIST),
            data: C.V5.maybe(ay),
            meta: y,
          })
          .named("ItemList")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aT = C.V5.model("LikesData", {
          title: C.V5.string,
          cover: k.Ib,
          playlistUuid: C.V5.maybe(C.V5.string),
          trackCovers: C.V5.array(k.Ib),
          count: C.V5.number,
        }).views((e) => ({
          get id() {
            return e.playlistUuid;
          },
          get link() {
            return "/playlists/".concat(e.playlistUuid);
          },
        })),
        aI = C.V5.model("HistoryData", {
          title: C.V5.string,
          trackCovers: C.V5.array(k.Ib),
          artists: C.V5.array(C.V5.string),
        }).views(() => ({
          get id() {
            return "music-history";
          },
          get link() {
            return "/music-history";
          },
        })),
        aL = C.V5.model("LikesAndHistoryData", { favorites: aT, history: aI }),
        ax = h
          .props({
            type: C.V5.literal(r.g.LIKES_AND_HISTORY),
            data: C.V5.maybe(aL),
            meta: y,
          })
          .named("LikesAndCount")
          .views((e) => ({
            get isVisible() {
              return !(e.isLoading || e.isRejected || e.isNeededToLoad);
            },
            get objectsCount() {
              return 2;
            },
          })),
        af = C.V5.model("MixesGridData", { items: C.V5.array(w.U5) }),
        aN = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.MIXES_GRID),
              C.V5.literal(r.g.MIXES_MUSIC),
            ),
            data: C.V5.maybe(af),
            meta: y,
          })
          .named("MixesGrid")
          .views((e) => ({
            get isVisible() {
              var t, i;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNotEmpty:
                  (null === (i = e.data) || void 0 === i
                    ? void 0
                    : null === (t = i.items) || void 0 === t
                      ? void 0
                      : t.length) !== 0,
                isLoaded: e.isLoaded,
                isLoading: e.isLoading,
                isRejected: e.isRejected,
                isNeededToLoad: e.isNeededToLoad,
              });
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aS = C.V5.model("MixesData", { items: C.V5.array(th.zn) }),
        ak = h
          .props({
            type: C.V5.literal(r.g.MIXES),
            data: C.V5.maybe(aS),
            meta: y,
          })
          .named("Mixes")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aE = C.V5.model("NeuromusicData", { items: C.V5.array(tj) }),
        aR = h
          .props({
            type: C.V5.literal(r.g.NEUROMUSIC),
            data: C.V5.maybe(aE),
            meta: y,
          })
          .named("Neuromusic")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aV = C.V5.union(L, I),
        aP = C.V5.model("NewPlaylistsData", { items: C.V5.array(aV) }),
        aw = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.NEW_PLAYLISTS),
              C.V5.literal(r.g.EDITORIAL_COMPILATION),
              C.V5.literal(r.g.RECOMMENDED_PLAYLISTS),
              C.V5.literal(r.g.META_TAG_POPULAR_PLAYLISTS),
              C.V5.literal(r.g.META_TAG_NEW_ALBUMS),
              C.V5.literal(r.g.META_TAG_PLAYLISTS),
              C.V5.literal(r.g.MICRO_GENRE_ALBUMS),
              C.V5.literal(r.g.META_TAG_ALBUMS),
              C.V5.literal(r.g.ARTIST_PLAYLISTS),
              C.V5.literal(r.g.ARTIST_ALBUMS),
              C.V5.literal(r.g.ARTIST_COMPILATIONS),
              C.V5.literal(r.g.ARTIST_STUDIO_ALBUMS),
            ),
            data: C.V5.maybe(aP),
            meta: y,
          })
          .named("NewPlaylists")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        aO = C.V5.model("NewReleasesDataItem", {
          album: _.ug,
          releaseDate: C.V5.maybe(C.V5.string),
          coverUri: C.V5.maybe(C.V5.string),
          coverColor: C.V5.maybe(C.V5.string),
        }),
        aM = C.V5.model("NewReleasesData", { items: C.V5.array(aO) }),
        aB = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.NEW_RELEASES),
              C.V5.literal(r.g.EDITORIAL_NEW_RELEASES),
            ),
            data: C.V5.maybe(aM),
            meta: y,
          })
          .named("NewReleases")
          .views((e) => ({
            get isVisible() {
              var t;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) !== 0,
              });
            },
            get objectsCount() {
              var i, a;
              return null !==
                (a =
                  null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) && void 0 !== a
                ? a
                : 0;
            },
          })),
        aD = C.V5.model("NonMusicEditorialCompilationData", {
          items: C.V5.array(C.V5.union(x, L)),
        }),
        aW = h
          .props({
            type: C.V5.literal(r.g.NON_MUSIC_EDITORIAL_COMPILATION),
            data: C.V5.maybe(aD),
            meta: y,
          })
          .named("NonMusicEditorialCompilation")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aU = h
          .props({
            type: C.V5.literal(r.g.OVERVIEW),
            data: C.V5.undefined,
            meta: ar,
          })
          .named("Overview")
          .views((e) => ({
            get isVisible() {
              return !!e.meta.message;
            },
            get objectsCount() {
              return 1;
            },
          })),
        aY = C.V5.model("PersonalPlaylistsData", { items: C.V5.array(H) }),
        aG = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.PERSONAL_PLAYLISTS),
              C.V5.literal(r.g.REWIND_PLAYLISTS),
            ),
            data: C.V5.maybe(aY),
            meta: y,
          })
          .named("PersonalPlaylists")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          }));
      var aH = i(48546);
      let az = C.V5.model("PlaylistWithTracksData", {
          totalItemsCount: C.V5.maybe(C.V5.number),
          items: C.V5.array(b.le),
          playlist: eB.Cd,
          coverUri: C.V5.maybe(C.V5.string),
          canShowEmptyBlock: C.V5.maybe(C.V5.boolean),
          withRewindTrailerButton: C.V5.maybe(C.V5.boolean),
        }).views((e) => ({
          getCoverUri(t) {
            switch (t) {
              case aH.t.DEFAULT:
                return e.playlist.coverUri;
              case aH.t.CUSTOM:
                return e.coverUri;
              default:
                var i;
                return null !== (i = e.coverUri) && void 0 !== i
                  ? i
                  : e.playlist.coverUri;
            }
          },
        })),
        aK = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.OPEN_PLAYLIST),
              C.V5.literal(r.g.SMART_OPEN_PLAYLIST),
              C.V5.literal(r.g.NON_MUSIC_OPEN_PLAYLIST),
              C.V5.literal(r.g.COLLECTION_PLAYLIST_WITH_LIKES),
            ),
            data: C.V5.maybe(az),
            meta: y,
          })
          .named("PlaylistWithTracks")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (
                null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.canShowEmptyBlock
              )
                return !0;
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty:
                  (null === (i = e.data) || void 0 === i
                    ? void 0
                    : i.items.length) !== 0,
              });
            },
            get objectsCount() {
              var a, l;
              let t =
                null !==
                  (l =
                    null === (a = e.data) || void 0 === a
                      ? void 0
                      : a.items.length) && void 0 !== l
                  ? l
                  : 0;
              return t < 8 ? t : 8;
            },
          })),
        aQ = C.V5.model("PromotionsDataItem", {
          featureId: C.V5.string,
          title: C.V5.string,
          subtitle: C.V5.string,
          weblink: C.V5.string,
          imageUrl: C.V5.string,
        }),
        aZ = C.V5.model("PromotionsData", { items: C.V5.array(aQ) }),
        aF = h
          .props({
            type: C.V5.union(
              C.V5.literal(r.g.PROMOTIONS),
              C.V5.literal(r.g.EDITORIAL_PROMOTIONS),
              C.V5.literal(r.g.NON_MUSIC_PROMOTIONS),
            ),
            data: C.V5.maybe(aZ),
            meta: y,
          })
          .named("Promotions")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        aX = C.V5.union(I, f, W),
        aq = C.V5.model("RecentlyPlayedData", { items: C.V5.array(aX) }),
        aJ = h
          .props({
            type: C.V5.literal(r.g.RECENTLY_PLAYED),
            data: C.V5.maybe(aq),
            meta: y,
          })
          .named("RecentlyPlayed")
          .views((e) => ({
            get isVisible() {
              var t, i;
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return (
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : null === (t = i.items) || void 0 === t
                    ? void 0
                    : t.length) !== 0
              );
            },
            get objectsCount() {
              var a, l;
              return null !==
                (l =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.items.length) && void 0 !== l
                ? l
                : 0;
            },
          })),
        a$ = C.V5.model("LandingVibeItemData", {
          vibe: tu.KW,
          cover: C.V5.maybeNull(k.Ib),
        }),
        a0 = C.V5.model("LandingVibeItem", {
          type: C.V5.literal(u.Q.WAVE_ITEM),
          data: a$,
        }),
        a5 = C.V5.union(W, L, I, x, N, a0, iV),
        a1 = C.V5.model("SearchHistoryData", { items: C.V5.array(a5) }),
        a3 = h
          .props({
            type: C.V5.literal(r.g.HISTORY),
            data: C.V5.maybe(a1),
            meta: y,
          })
          .named("SearchHistory")
          .views((e) => ({
            get isVisible() {
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !0,
              });
            },
            get objectsCount() {
              var t, i;
              return null !==
                (i =
                  null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) && void 0 !== i
                ? i
                : 0;
            },
          })),
        a4 = C.V5.model("SpecialThemeSettings", {
          buttonColor: C.V5.maybeNull(C.V5.string),
          textColor: C.V5.maybeNull(C.V5.string),
          bgImageUrl: C.V5.maybeNull(C.V5.string),
          imageUrl: C.V5.maybeNull(C.V5.string),
          buttonTextColor: C.V5.maybeNull(C.V5.string),
        }),
        a2 = C.V5.model("SpecialData", {
          title: C.V5.maybe(C.V5.string),
          subtitle: C.V5.maybe(C.V5.string),
          buttonTitle: C.V5.maybe(C.V5.string),
          imageUrl: C.V5.maybe(C.V5.string),
          align: C.V5.maybeNull(C.V5.string),
          weblink: C.V5.maybeNull(C.V5.string),
          lightTheme: C.V5.maybeNull(a4),
          darkTheme: C.V5.maybeNull(a4),
        }),
        a7 = h
          .props({
            type: C.V5.literal(r.g.SPECIAL),
            data: C.V5.maybe(a2),
            meta: y,
          })
          .named("Special")
          .views((e) => ({
            get isVisible() {
              if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
              return !!e.data;
            },
            get objectsCount() {
              return 0;
            },
          })),
        a6 = C.V5.model("VibesDataItemTab", {
          id: C.V5.number,
          title: C.V5.string,
        }),
        a9 = C.V5.model("VibesDataItem", { tab: a6, data: C.V5.array(tu.KW) }),
        a8 = C.V5.model("VibesData", { items: C.V5.array(a9) }),
        le = h
          .props({
            type: C.V5.literal(r.g.WAVES),
            data: C.V5.maybe(a8),
            meta: y,
          })
          .named("Vibes")
          .views((e) => ({
            get isVisible() {
              var t, i, a;
              let l =
                  (null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.items.length) === 0,
                s =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : null === (i = a.items) || void 0 === i
                      ? void 0
                      : i.every((e) => !(null == e ? void 0 : e.data));
              return eG({
                showPolicy: e.meta.showPolicy,
                isNeededToLoad: e.isNeededToLoad,
                isLoading: e.isLoading,
                isLoaded: e.isLoaded,
                isRejected: e.isRejected,
                isNotEmpty: !l || !s,
              });
            },
            get objectsCount() {
              var l, s, o;
              return null !==
                (o =
                  null === (s = e.data) || void 0 === s
                    ? void 0
                    : null === (l = s.items[0]) || void 0 === l
                      ? void 0
                      : l.data.length) && void 0 !== o
                ? o
                : 0;
            },
          })),
        lt = C.V5.model("WizardData", {
          title: C.V5.string,
          description: C.V5.maybe(C.V5.string),
          artists: C.V5.array(R.Go),
        }),
        li = h
          .props({
            type: C.V5.literal(r.g.WIZARD),
            data: C.V5.maybe(lt),
            meta: y,
          })
          .named("Wizard")
          .views(() => ({
            get isVisible() {
              return !0;
            },
            get objectsCount() {
              return 0;
            },
          })),
        la = C.V5.union(
          iR,
          iM,
          iz,
          i5,
          iQ,
          aK,
          aB,
          aw,
          aF,
          aJ,
          ah,
          aG,
          a7,
          li,
          le,
          ak,
          aR,
          ax,
          aW,
          T,
          iG,
          i9,
          i2,
          av,
          aj,
          aU,
          iX,
          au,
          iw,
          iI,
          ao,
          an,
          a3,
          aN,
          i$,
          ix,
          ez,
          eQ,
          e6,
          e2,
          eF,
          iS,
          ap,
        ),
        ll = C.V5.model("TabData", {
          id: C.V5.string,
          title: C.V5.string,
          subtitle: C.V5.maybe(C.V5.string),
          covers: C.V5.maybe(C.V5.array(C.V5.string)),
        }),
        ls = C.V5.model("Tab", {
          meta: C.V5.model({ id: C.V5.string, title: C.V5.string }),
          data: C.V5.maybe(ll),
          blocks: C.V5.array(la),
          shouldReloadNotification: C.V5.boolean,
        })
          .views((e) => ({
            get hasErrorBlocks() {
              return e.blocks.some((e) => e.isRejected && e.isVisible);
            },
          }))
          .actions((e) => ({
            setShouldReloadNotification(t) {
              e.shouldReloadNotification = t;
            },
          })),
        lo = C.V5.compose(
          C.V5.model("TabsData", { data: C.V5.maybeNull(C.V5.array(ls)) }),
          k.Al,
          k.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = S.Gui.IDLE), e.destroyItems([e.data]);
          },
        })),
        lr = C.V5.compose(
          C.V5.model("Tabs", {
            meta: C.V5.maybeNull(
              C.V5.model({
                selectedTabIndex: C.V5.number,
                source: C.V5.maybe(A),
              }),
            ),
            upperBlocks: C.V5.maybeNull(C.V5.array(la)),
            tabs: lo,
          }),
          k.fu,
        )
          .views((e) => {
            let t = {
              get isEmpty() {
                var i, a;
                return (
                  !(null === (i = e.tabs.data) || void 0 === i
                    ? void 0
                    : i.length) &&
                  !(null === (a = e.upperBlocks) || void 0 === a
                    ? void 0
                    : a.length)
                );
              },
              get isLoadedAndEmpty() {
                return (
                  [S.Gui.RESOLVE, S.Gui.REJECT].includes(e.loadingState) &&
                  t.isEmpty
                );
              },
              get hasUpperBlocks() {
                var l;
                return !!(null === (l = e.upperBlocks) || void 0 === l
                  ? void 0
                  : l.length);
              },
            };
            return t;
          })
          .props({
            id: C.V5.optional(C.V5.string, ""),
            title: C.V5.optional(C.V5.string, ""),
          })
          .views((e) => ({
            get isLoaded() {
              return (
                e.loadingState === S.Gui.RESOLVE ||
                e.loadingState === S.Gui.REJECT
              );
            },
          }))
          .actions((e) => {
            let t = {
              getBlock: (0, C.ls)(function* (i) {
                if (!i || (!("source" in i.meta) && !q(i.type))) return;
                if ((0, F.Z)(i)) {
                  var a;
                  null === (a = i.data) ||
                    void 0 === a ||
                    a.blocks.forEach(t.getBlock);
                  return;
                }
                let { landingResource: l, modelActionsLogger: o } = (0, C.dU)(
                  e,
                );
                try {
                  i.loadingState = s.PENDING;
                  let e = yield l.getBlock({
                    source: "source" in i.meta ? i.meta.source : void 0,
                    type: i.type,
                  });
                  if (!(0, C.fh)(i)) return;
                  switch (i.type) {
                    case r.g.CLIPS:
                    case r.g.ARTIST_CLIPS:
                    case r.g.COLLECTION_CLIPS:
                      tQ(e) && (i.data = ex(e, i.type));
                      break;
                    case r.g.WIZARD:
                      ih(e) && (i.data = tB(e));
                      break;
                    case r.g.CHART_TRACKS:
                      tz(e) && (i.data = er(e));
                      break;
                    case r.g.NON_MUSIC_EDITORIAL_COMPILATION:
                      iu(e) && (i.data = tf(e));
                      break;
                    case r.g.CHART_ALBUMS:
                      ic(e) && (i.data = tx(e));
                      break;
                    case r.g.COLLECTION_ALBUMS:
                      tF(e) && (i.data = ek(e));
                      break;
                    case r.g.COLLECTION_ARTISTS:
                      tq(e) && (i.data = eR(e));
                      break;
                    case r.g.COLLECTION_ARTISTS_AND_TOP:
                      tX(e) && (i.data = eE(e));
                      break;
                    case r.g.PERSONAL_ARTISTS:
                    case r.g.NEW_STARS_ARTISTS:
                    case r.g.EDITORIAL_ARTISTS:
                    case r.g.META_TAG_POPULAR_ARTISTS:
                    case r.g.MICRO_GENRE_ARTISTS:
                    case r.g.MICRO_GENRE_TOP_ARTISTS:
                    case r.g.META_TAG_ARTISTS:
                    case r.g.SIMILAR_ARTISTS:
                      t6(e) && (i.data = tc(e));
                      break;
                    case r.g.COLLECTION_PLAYLISTS_CREATED:
                      tJ(e) && (i.data = eV(e));
                      break;
                    case r.g.COLLECTION_PLAYLISTS_LIKED:
                      t5(e) && (i.data = eO(e));
                      break;
                    case r.g.OPEN_PLAYLIST:
                    case r.g.SMART_OPEN_PLAYLIST:
                    case r.g.NON_MUSIC_OPEN_PLAYLIST:
                      im(e) && (i.data = tN(e, i.id));
                      break;
                    case r.g.COLLECTION_PLAYLIST_WITH_LIKES:
                      t3(e) && (i.data = eD(e));
                      break;
                    case r.g.NEW_RELEASES:
                    case r.g.EDITORIAL_NEW_RELEASES:
                      ir(e) && (i.data = tL(e));
                      break;
                    case r.g.NEW_PLAYLISTS:
                    case r.g.EDITORIAL_COMPILATION:
                    case r.g.RECOMMENDED_PLAYLISTS:
                    case r.g.META_TAG_POPULAR_PLAYLISTS:
                    case r.g.META_TAG_NEW_ALBUMS:
                    case r.g.META_TAG_PLAYLISTS:
                    case r.g.MICRO_GENRE_ALBUMS:
                    case r.g.META_TAG_ALBUMS:
                    case r.g.ARTIST_PLAYLISTS:
                    case r.g.ARTIST_COMPILATIONS:
                    case r.g.ARTIST_ALBUMS:
                    case r.g.ARTIST_STUDIO_ALBUMS:
                      io(e) && (i.data = tI(e));
                      break;
                    case r.g.RECENTLY_PLAYED:
                      ip(e) && (i.data = tE(e));
                      break;
                    case r.g.IN_STYLE:
                      ie(e) && (i.data = t_(e));
                      break;
                    case r.g.PROMOTIONS:
                    case r.g.EDITORIAL_PROMOTIONS:
                    case r.g.NON_MUSIC_PROMOTIONS:
                      i_(e) && (i.data = tk(e));
                      break;
                    case r.g.REWIND_PLAYLISTS:
                    case r.g.PERSONAL_PLAYLISTS:
                      iv(e) && (i.data = tS(e));
                      break;
                    case r.g.SPECIAL:
                      ig(e) && (i.data = tw(e));
                      break;
                    case r.g.COLLECTION_ALBUMS_PRESAVES:
                      tZ(e) && (i.data = eS(e));
                      break;
                    case r.g.WAVES:
                      iC(e) && (i.data = tM(e));
                      break;
                    case r.g.MIXES_GRID:
                    case r.g.MIXES_MUSIC:
                      ia(e) && (i.data = tC(e));
                      break;
                    case r.g.MIXES:
                      il(e) && (i.data = tA(e));
                      break;
                    case r.g.NEUROMUSIC:
                      is(e) && (i.data = tT(e));
                      break;
                    case r.g.LIKES_AND_HISTORY:
                      ii(e) && (i.data = tg(e));
                      break;
                    case r.g.CONCERTS_TOP:
                    case r.g.CONCERTS_PERSONAL:
                    case r.g.EDITORIAL_CONCERTS:
                      t4(e) && (i.data = ta(e));
                      break;
                    case r.g.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
                      t1(e) && (i.data = eM(e));
                      break;
                    case r.g.EDITORIAL_WAVES:
                    case r.g.META_TAG_WAVE:
                    case r.g.MICRO_GENRE_WAVE:
                    case r.g.MICRO_GENRE_SIMILAR_WAVE:
                    case r.g.META_TAG_SIMILAR_WAVE:
                      t9(e) && (i.data = tm(e));
                      break;
                    case r.g.ITEM_LIST:
                      it(e) && (i.data = tb(e));
                      break;
                    case r.g.DONATIONS:
                      t7(e) && (i.data = td(e));
                      break;
                    case r.g.CONTINUE_LISTEN:
                      t2(e) && (i.data = to(e));
                      break;
                    case r.g.SIMPLE_ALBUM_PROMO:
                    case r.g.ALBUM_PROMO:
                      tD(e) && (i.data = $(e));
                      break;
                    case r.g.COLLECTION_DOWNLOADED_TRACKS:
                      t$(e) && (i.data = eP(e));
                      break;
                    case r.g.HISTORY:
                      ib(e) && (i.data = tV(e));
                      break;
                    case r.g.COLLECTION_KIDS:
                      t0(e) && (i.data = ew(e));
                      break;
                    case r.g.ARTIST_CONCERTS:
                      tW(e) && (i.data = ei(e));
                      break;
                    case r.g.ARTIST_POPULAR_TRACKS:
                      tY(e) && (i.data = el(e));
                      break;
                    case r.g.ARTIST_RELEASE:
                      tG(e) && (i.data = es(e));
                      break;
                    case r.g.FAMILIAR_YOU:
                      t8(e) && (i.data = tv(e));
                      break;
                    case r.g.ARTIST_PICK:
                      tU(e) && (i.data = ea(e));
                      break;
                    case r.g.ARTIST_UPCOMING_RELEASE:
                      tH(e) && (i.data = eo(e));
                  }
                  i.loadingState = s.RESOLVE;
                } catch (e) {
                  o.error(e),
                    (0, C.fh)(i) &&
                      ((i.loadingState = s.REJECT),
                      e instanceof Q.du &&
                        (e.statusCode === Q.CN.NOT_FOUND ||
                          e.statusCode === Q.CN.BAD_REQUEST) &&
                        (i.isNotFound = !0));
                }
              }),
              getTabData: (0, C.ls)(function* (t) {
                let { landingResource: i, modelActionsLogger: a } = (0, C.dU)(
                  e,
                );
                try {
                  var l;
                  e.tabs.loadingState = S.Gui.PENDING;
                  let a = yield i.getBlock({ source: t }),
                    s = tO(a) || [];
                  null === (l = e.tabs.data) ||
                    void 0 === l ||
                    l.forEach((e, t) => {
                      let i = s.find((t) => t.title === e.meta.title);
                      e.data = i || s[t];
                    }),
                    (e.tabs.loadingState = S.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = S.Gui.REJECT);
                }
              }),
              async prefetchBlocks(i) {
                var a, l, s;
                let o = null != i ? i : 0,
                  r = [];
                (null === (a = e.meta) || void 0 === a ? void 0 : a.source) &&
                  r.push(t.getTabData(e.meta.source)),
                  null === (l = e.upperBlocks) ||
                    void 0 === l ||
                    l.forEach((e) => {
                      o > 0 &&
                        (0, eX.F)(e.meta) &&
                        (o--, r.push(t.getBlock(e)));
                    }),
                  null === (s = e.tabs.data) ||
                    void 0 === s ||
                    s.forEach((e) => {
                      e.blocks.slice(0, o).forEach((e) => {
                        (0, eX.F)(e.meta) && r.push(t.getBlock(e));
                      });
                    }),
                  r.length > 0 && (await Promise.allSettled(r));
              },
              getChildrenSkeleton: (0, C.ls)(function* (t) {
                let { childrenLandingResource: i, modelActionsLogger: a } = (0,
                C.dU)(e);
                try {
                  e.loadingState = S.Gui.PENDING;
                  let a = yield i.getSkeleton(t),
                    l = eL(a);
                  l &&
                    ((e.id = a.category),
                    (e.title = a.title),
                    (e.meta = (0, C.pj)(l.meta)),
                    (e.tabs.data = (0, C.pj)(l.tabs.data))),
                    e.loadingState !== S.Gui.IDLE &&
                      (e.loadingState = S.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== S.Gui.IDLE &&
                      (e.loadingState = S.Gui.REJECT);
                }
              }),
              getSkeleton: (0, C.ls)(function* (i, a) {
                let { landingResource: l, modelActionsLogger: s } = (0, C.dU)(
                    e,
                  ),
                  { experiments: o } = (0, C.yj)(e),
                  r = o.getExperiment(S.peG.WebNextDisableSkeletonTabs),
                  n = o.getExperiment(S.peG.WebNextDisableSkeletonBlocks);
                if (
                  (!o.checkExperiment(S.peG.WebNextDisableLanding, "on") ||
                    i.id !== Z.j.MAIN) &&
                  e.loadingState !== S.Gui.PENDING
                )
                  try {
                    var d, c;
                    e.loadingState = S.Gui.PENDING;
                    let s = yield l.getSkeleton(i),
                      o = ti({
                        blocks: null == s ? void 0 : s.blocks,
                        disabledTabs:
                          null == r
                            ? void 0
                            : null === (d = r.value) || void 0 === d
                              ? void 0
                              : d.tabIds,
                        disabledBlocks:
                          null == n
                            ? void 0
                            : null === (c = n.value) || void 0 === c
                              ? void 0
                              : c.blockIds,
                      });
                    o &&
                      ((e.id = s.id),
                      (e.title = s.title),
                      (e.meta = (0, C.pj)(o.meta)),
                      (e.upperBlocks = (0, C.pj)(o.upperBlocks)),
                      (e.tabs.data = (0, C.pj)(o.tabs.data)),
                      yield t.prefetchBlocks(
                        null == a ? void 0 : a.preloadBlocksCount,
                      )),
                      e.loadingState !== S.Gui.IDLE &&
                        (e.loadingState = S.Gui.RESOLVE);
                  } catch (t) {
                    s.error(t),
                      e.loadingState !== S.Gui.IDLE &&
                        (e.loadingState = S.Gui.REJECT);
                  }
              }),
              getArtistSkeleton: (0, C.ls)(function* (i, a) {
                let { artistsResource: l, modelActionsLogger: s } = (0, C.dU)(
                  e,
                );
                if (e.loadingState !== S.Gui.PENDING)
                  try {
                    e.loadingState = S.Gui.PENDING;
                    let s = yield l.getSkeleton(i),
                      o = ti({ blocks: null == s ? void 0 : s.blocks });
                    o &&
                      ((e.id = s.id),
                      (e.title = s.title),
                      (e.meta = (0, C.pj)(o.meta)),
                      (e.upperBlocks = (0, C.pj)(o.upperBlocks)),
                      void 0 !== o.tabs &&
                        (e.tabs.data = (0, C.pj)(o.tabs.data)),
                      yield t.prefetchBlocks(
                        null == a ? void 0 : a.preloadBlocksCount,
                      )),
                      e.loadingState !== S.Gui.IDLE &&
                        (e.loadingState = S.Gui.RESOLVE);
                  } catch (t) {
                    s.error(t),
                      e.loadingState !== S.Gui.IDLE &&
                        (e.loadingState = S.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = S.Gui.IDLE),
                  (e.meta = null),
                  e.tabs.reset(),
                  (e.upperBlocks = null);
              },
            };
            return t;
          });
      i(34103);
      var ln = i(1177),
        ld = i(8206),
        lc = i(88863),
        lu = i(35716),
        lm = i(38538),
        lv = i(1045);
    },
    504: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = i(71011);
      let l = [
          a.g.ARTIST_POPULAR_TRACKS_AND_RELEASES,
          a.g.FAMILIAR_YOU_AND_ARTIST_PICK,
        ],
        s = (e) => l.includes(e.type);
    },
    9177: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return a;
        },
      });
      let a = (e) => !!(e && "object" == typeof e && "source" in e);
    },
    38538: function (e, t, i) {
      "use strict";
      i.d(t, {
        Skeleton: function () {
          return a4;
        },
      });
      var a,
        l,
        s,
        o = i(75441),
        r = i(32358),
        n = i(62569),
        d = i(98730),
        c = i(65067),
        u = i(35846),
        m = i(93093),
        v = i(20184),
        _ = i(24226),
        p = i(13534),
        b = i(97141),
        g = i(9177);
      let C = (e) =>
        (0, c.useCallback)(
          (t) => {
            var i;
            let a = null === (i = e.tabs.data) || void 0 === i ? void 0 : i[t];
            null == a ||
              a.blocks.forEach((t) => {
                t.isOutdated &&
                  (0, g.F)(t.meta) &&
                  (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
              });
          },
          [e],
        );
      var h = i(504),
        A = i(14218),
        y = i(40106),
        j = i.n(y),
        T = i(71011),
        I = i(4875),
        L = i(9317),
        x = i(15937),
        f = i(84638);
      ((a = s || (s = {})).TOP = "top"), (a.CENTER = "center");
      var N = i(59091),
        S = i(17392),
        k = i(73447),
        E = i(64353),
        R = i(10164),
        V = i.n(R);
      let P = (0, n.Pi)((e) => {
        let { promo: t } = e,
          { formatMessage: i } = (0, L.Z)(),
          { ref: a, intersectionPropertyId: l } = (0, p.VfV)(),
          n = (0, p.zxW)(),
          d = (0, p.s0h)(t.albumUrl),
          c = (0, p.s0h)(t.albumUrl, !0),
          u = (0, k.jV)({ album: t.album, callback: d }),
          v = (0, k.jV)({ album: t.album, callback: c }),
          _ = (0, E.ik)(v, u),
          g = (0, p.lAI)(),
          C = (0, p.qsr)(),
          { from: h } = (0, p.MhG)({
            contextId: t.album.id,
            contextType: f.A.Album,
          }),
          { isPlaying: A, togglePlay: y } = (0, p.qmq)({
            playContextParams: {
              contextData: {
                type: f.A.Album,
                meta: { id: t.album.id },
                from: h,
                utmLink: (0, p.Y4W)(t.reportingProperties),
              },
              loadContextMeta: !0,
            },
          }),
          j = (0, m.W)((e) => {
            t.setClicked(), n({ to: I.qU.AlbumScreen }), _(e);
          }),
          T = (0, m.W)(() => {
            t.setClicked(), y();
          }),
          R = (0, k.jV)({ album: t.album, callback: T }),
          P = (0, m.W)(() => {
            C() || (R(), g(!A));
          }),
          w = i(
            { id: "entity-names.album-name" },
            { albumName: t.album.title },
          ),
          O = t.coverContentMode === s.TOP;
        return (0, o.jsxs)("div", {
          className: V().root,
          ref: a,
          "data-intersection-property-id": l,
          children: [
            (0, o.jsxs)(N.Paper, {
              className: V().artistCover,
              radius: "m",
              withShadow: !0,
              children: [
                (0, o.jsx)(b.rU, {
                  className: V().artistLink,
                  href: t.albumUrl,
                  onClick: j,
                  "aria-label": w,
                  children: (0, o.jsx)(b.BE, {
                    className: (0, r.W)(V().artistImage, {
                      [V().artistImage_withTopPosition]: O,
                    }),
                    src: t.cover.uri,
                    withAvatarReplace: !0,
                    withAspectRatio: !0,
                    size: 600,
                    fit: "cover",
                    "aria-hidden": !0,
                  }),
                }),
                (0, o.jsx)(N.Paper, {
                  className: V().albumCover,
                  radius: "xs",
                  children: (0, o.jsx)(b.rU, {
                    className: V().albumLink,
                    href: t.albumUrl,
                    onClick: j,
                    "aria-label": w,
                    children: (0, o.jsx)(b.BE, {
                      className: V().albumImage,
                      src: t.album.coverUri,
                      withAvatarReplace: !0,
                      size: 300,
                      fit: "cover",
                      "aria-hidden": !0,
                    }),
                  }),
                }),
                (0, o.jsx)(b.JM, {
                  className: V().button,
                  withRipple: !1,
                  withHover: !1,
                  buttonVariant: "default",
                  radius: "xxxl",
                  size: "default",
                  color: "secondary",
                  iconSize: "xxs",
                  isPlaying: A,
                  onClick: P,
                  iconClassName: V().buttonIcon,
                  disabled: !t.album.isAvailable,
                  children: (0, o.jsx)(S.Caption, {
                    className: V().buttonText,
                    variant: "span",
                    type: "controls",
                    size: "m",
                    weight: "medium",
                    children: (0, o.jsx)(x.Z, { id: "player-actions.listen" }),
                  }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: V().meta,
              children: [
                (0, o.jsxs)("div", {
                  className: V().titleContainer,
                  children: [
                    (0, o.jsx)(S.Caption, {
                      className: V().title,
                      variant: "div",
                      lineClamp: 1,
                      type: "entity",
                      size: "s",
                      weight: "medium",
                      children: (0, o.jsx)(b.rU, {
                        className: V().titleLink,
                        href: t.albumUrl,
                        onClick: j,
                        children: t.album.title,
                      }),
                    }),
                    t.album.explicitDisclaimer &&
                      (0, o.jsx)(b.$i, {
                        getDescriptionTexts: t.album.getDescriptionTexts,
                        variant: t.album.explicitDisclaimer,
                        size: "xxxs",
                      }),
                  ],
                }),
                (0, o.jsx)(E.jO, {
                  className: V().artists,
                  linkClassName: V().artistsLink,
                  artists: t.artists,
                  lineClamp: 1,
                  captionSize: "s",
                }),
              ],
            }),
          ],
        });
      });
      var w = i(59100),
        O = i(70802),
        M = {
          1964: (e) => {
            e.exports = O;
          },
        },
        B = {},
        D = {};
      Object.defineProperty(D, "X", { value: !0 }),
        (D.q = void 0),
        (l = (function e(t) {
          var i = B[t];
          if (void 0 !== i) return i.exports;
          var a = (B[t] = { exports: {} });
          return M[t](a, a.exports, e), a.exports;
        })(1964)),
        Object.defineProperty(D, "q", {
          enumerable: !0,
          get: function () {
            return l.useMergeRefs;
          },
        }),
        D.X;
      var W = D.q;
      let U = (e) => {
          let t,
            { callback: i, visibleTime: a, threshold: l } = e;
          return (0, v.wE)(
            (e, l) => {
              e.isIntersecting &&
                (t = setTimeout(() => {
                  i(), l.disconnect();
                }, a)),
                e.isIntersecting || clearTimeout(t);
            },
            { threshold: l },
          );
        },
        Y = (e) => {
          let { params: t, isLoaded: i } = e,
            a = (0, c.useRef)(null),
            l = (0, c.useId)(),
            s = (0, c.useMemo)(() => {
              if (i) return t.map(U);
            }, [i, t]);
          return (
            (0, c.useEffect)(
              () => (
                null == s ||
                  s.forEach((e) => {
                    a.current && e.observe(a.current);
                  }),
                () => {
                  null == s ||
                    s.forEach((e) => {
                      e.disconnect();
                    });
                }
              ),
              [s],
            ),
            { intersectionPropertyId: l, ref: a }
          );
        },
        G = (e) => {
          let { forwardedRef: t, isLoaded: i, data: a, setOutdated: l } = e,
            { report: s, reporting: o } = null != a ? a : {},
            { ref: r, intersectionPropertyId: n } = Y({
              isLoaded: i,
              params: (0, c.useMemo)(() => {
                var e, t, i;
                return [
                  {
                    threshold: 0,
                    visibleTime:
                      null !==
                        (e = null == o ? void 0 : o.blockRender.timeMs) &&
                      void 0 !== e
                        ? e
                        : 0,
                    callback: () => {
                      let e = null == o ? void 0 : o.blockRender.url;
                      e && (null == s || s(e));
                    },
                  },
                  {
                    threshold: 0.5,
                    visibleTime:
                      null !==
                        (t = null == o ? void 0 : o.blockImpression.timeMs) &&
                      void 0 !== t
                        ? t
                        : 2100,
                    callback: () => {
                      let e = null == o ? void 0 : o.blockImpression.url;
                      e && (null == s || s(e)), l();
                    },
                  },
                  {
                    threshold: 0,
                    visibleTime:
                      null !==
                        (i = null == o ? void 0 : o.adImpressions.timeMs) &&
                      void 0 !== i
                        ? i
                        : 2100,
                    callback: () => {
                      let e = null == o ? void 0 : o.adImpressions.url;
                      e && (null == s || s(e));
                    },
                  },
                ];
              }, [
                s,
                null == o ? void 0 : o.adImpressions.timeMs,
                null == o ? void 0 : o.adImpressions.url,
                null == o ? void 0 : o.blockImpression.timeMs,
                null == o ? void 0 : o.blockImpression.url,
                null == o ? void 0 : o.blockRender.timeMs,
                null == o ? void 0 : o.blockRender.url,
                l,
              ]),
            });
          return { intersectionPropertyId: n, ref: W([r, t]) };
        };
      var H = i(50073),
        z = i.n(H);
      let K = (e) => {
          let {
              forwardRef: t,
              isLoaded: i,
              setOutdated: a,
              headerClassName: l,
              containerClassName: s,
              data: n,
              meta: d,
              headingVariant: u,
              className: m,
              children: v,
              ..._
            } = e,
            { intersectionPropertyId: g, ref: C } = G({
              forwardedRef: t,
              data: n,
              isLoaded: i,
              setOutdated: a,
            }),
            h = (0, c.useRef)(null);
          return (0, o.jsxs)("section", {
            className: (0, r.W)(z().root, m),
            ref: C,
            "data-intersection-property-id": g,
            ...(0, p.tEg)(_),
            children: [
              (0, o.jsx)(b.ti, {
                className: l,
                title: d.title,
                controls: (0, o.jsx)(b.J8, {
                  className: z().controls,
                  carouselRef: h,
                }),
                headingVariant: u,
              }),
              (0, o.jsx)(w.Carousel, {
                className: s,
                ref: h,
                itemClassName: (0, r.W)(z().item, z().important),
                children: v,
              }),
            ],
          });
        },
        Q = (0, c.forwardRef)((e, t) => (0, o.jsx)(K, { forwardRef: t, ...e })),
        Z = (e) => {
          let { forwardRef: t, data: i, ...a } = e;
          return (0, o.jsx)(Q, {
            ref: t,
            data: i,
            ...a,
            children:
              null == i
                ? void 0
                : i.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Album,
                        objectId: String(e.album.id),
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: null == i ? void 0 : i.items.length,
                        children: (0, o.jsx)(P, { promo: e }),
                      },
                      e.album.getKey(t),
                    ),
                  ),
          });
        },
        F = (0, c.forwardRef)((e, t) => (0, o.jsx)(Z, { forwardRef: t, ...e }));
      var X = i(91307),
        q = i(75384),
        J = i.n(q);
      let $ = (0, n.Pi)((e) => {
          let {
              className: t,
              forwardRef: i,
              album: a,
              description: l,
              trailerButton: s,
              entityName: n,
              onClick: d,
              albumUrl: u,
              from: v,
              utmLink: _,
              coverColor: g,
              ...C
            } = e,
            h = (0, p.s0h)(u),
            A = (0, p.s0h)(u, !0),
            y = (0, p.qsr)(),
            j = (0, p.lAI)(),
            { formatMessage: T } = (0, L.Z)(),
            { isPlaying: x, togglePlay: R } = (0, p.qmq)({
              playContextParams: {
                contextData: {
                  type: f.A.Album,
                  meta: { id: a.id },
                  from: v,
                  utmLink: _,
                },
                loadContextMeta: !0,
              },
            }),
            V = (0, m.W)(() => {
              null == d || d(), R();
            }),
            P = (0, k.jV)({ album: a, callback: h }),
            w = (0, k.jV)({ album: a, callback: A }),
            O = (0, E.ik)(w, P),
            M = (0, k.jV)({ album: a, callback: V }),
            B = (0, p.zxW)(),
            D = (0, m.W)((e) => {
              (0, X.m)(e, J().ripple),
                e.stopPropagation(),
                null == d || d(),
                B({ to: I.qU.AlbumScreen }),
                O(e);
            }),
            W = (0, m.W)(() => {
              y() || (M(), j(!x));
            }),
            U = (0, c.useMemo)(() => {
              let e;
              if (g) {
                let { h: t, s: i } = (0, p.sEc)(g);
                e = "hsl(".concat(t, ", ").concat(i, "%, ", 20, "%)");
              }
              return {
                "--new-release-cover-color": e,
                "--new-release-color": null == a ? void 0 : a.averageColor,
              };
            }, [null == a ? void 0 : a.averageColor, g]),
            Y = n ? "".concat(n, " ").concat(a.title) : a.title;
          return (0, o.jsxs)(N.Paper, {
            radius: "l",
            className: (0, r.W)(J().root, t),
            ref: i,
            style: U,
            ...(0, p.tEg)(C),
            children: [
              (0, o.jsx)(b.rU, {
                href: u,
                className: J().paperLink,
                onClick: D,
                "aria-label": Y,
              }),
              (0, o.jsx)(b.BE, {
                className: J().image,
                src: a.coverUri,
                alt: T(
                  { id: "entity-names.album-name" },
                  { albumName: a.title },
                ),
                size: 100,
                fit: "cover",
                withAvatarReplace: !0,
              }),
              (0, o.jsxs)("div", {
                className: J().info,
                children: [
                  (0, o.jsx)(S.Caption, {
                    className: J().title,
                    variant: "div",
                    type: "entity",
                    size: "m",
                    weight: "medium",
                    lineClamp: 2,
                    "aria-label": Y,
                    children: a.title,
                  }),
                  l &&
                    (0, o.jsx)(S.Caption, {
                      className: J().description,
                      variant: "div",
                      type: "entity",
                      size: "s",
                      weight: "medium",
                      lineClamp: 1,
                      children: l,
                    }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: J().container,
                children: [
                  a.explicitDisclaimer &&
                    (0, o.jsx)(b.$i, {
                      className: J().explicitMark,
                      containerClassName: J().explicitMarkContainer,
                      getDescriptionTexts: a.getDescriptionTexts,
                      variant: a.explicitDisclaimer,
                    }),
                  s,
                  (0, o.jsx)(b.JM, {
                    buttonVariant: "default",
                    withHover: !1,
                    className: J().button,
                    iconClassName: J().buttonIcon,
                    variant: "filled",
                    iconSize: "m",
                    isPlaying: x,
                    onClick: W,
                  }),
                ],
              }),
            ],
          });
        }),
        ee = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)($, { forwardRef: t, ...e }),
        ),
        et = (0, n.Pi)((e) => {
          let { promo: t } = e,
            { ref: i, intersectionPropertyId: a } = (0, p.VfV)(),
            { from: l } = (0, p.MhG)({
              contextId: t.album.id,
              contextType: f.A.Album,
            });
          return (0, o.jsx)(ee, {
            onClick: t.setClicked,
            album: t.album,
            albumUrl: t.albumUrl,
            utmLink: (0, p.Y4W)(t.reportingProperties),
            from: l,
            ref: i,
            "data-intersection-property-id": a,
            description: t.album.artistNames,
          });
        }),
        ei = (e) => {
          let { forwardRef: t, data: i, ...a } = e;
          return (0, o.jsx)(Q, {
            ref: t,
            data: i,
            ...a,
            children:
              null == i
                ? void 0
                : i.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Album,
                        objectId: String(e.album.id),
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: null == i ? void 0 : i.items.length,
                        children: (0, o.jsx)(et, { promo: e }),
                      },
                      e.album.getKey(t),
                    ),
                  ),
          });
        },
        ea = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ei, { forwardRef: t, ...e }),
        );
      var el = i(60773);
      let es = (0, n.Pi)((e) => {
          var t, i, a;
          let {
              forwardRef: l,
              isShimmerVisible: s,
              isShimmerActive: r,
              containerClassName: n,
              headerClassName: d,
              meta: c,
              data: u,
              headingVariant: m,
              className: v,
              ..._
            } = e,
            { artist: b } = (0, p.oR4)(),
            g = null !== (i = b.id) && void 0 !== i ? i : "";
          return (0, o.jsx)(p.nZ5, {
            objectType: I.OB.Shortcut,
            objectId: "/artist/".concat(g, "/concerts"),
            objectPosX: 0,
            objectPosY: 0,
            objectsCount:
              null !==
                (a =
                  null == u
                    ? void 0
                    : null === (t = u.items) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
                ? a
                : 0,
            children: (0, o.jsx)(el.m, {
              ref: l,
              artistId: g,
              title: c.title,
              viewAllActionLink: c.viewAllActionLink,
              isLoading: s || r,
              headingVariant: m,
              className: v,
              headerClassName: d,
              containerClassName: n,
              ...(0, p.tEg)(_),
              children:
                null == u
                  ? void 0
                  : u.items.map((e, t) => {
                      var i, a;
                      let {
                        objectPosX: l,
                        objectPosY: s,
                        objectsCount: r,
                      } = (0, p.rc9)({
                        index: t,
                        count:
                          null !==
                            (a =
                              null === (i = u.items) || void 0 === i
                                ? void 0
                                : i.length) && void 0 !== a
                            ? a
                            : 0,
                        itemsCountPerColumn: 2,
                      });
                      return (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Concert,
                          objectId: String(e.id),
                          objectPosX: l,
                          objectPosY: s,
                          objectsCount: r,
                          children: (0, o.jsx)(el.kb, {
                            artistId: g,
                            concert: e,
                            meta: (0, o.jsx)(el.bn, {}),
                          }),
                        },
                        e.id,
                      );
                    }),
            }),
          });
        }),
        eo = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(es, { forwardRef: t, ...e }),
        );
      var er = i(67126),
        en = i(67585),
        ed = i.n(en);
      let ec = (0, n.Pi)((e) => {
          var t, i, a;
          let {
              isShimmerVisible: l,
              isShimmerActive: s,
              headerClassName: r,
              data: n,
              headingVariant: d,
            } = e,
            { ref: c, intersectionPropertyId: u } = (0, p.VfV)(),
            { playlist: m, artists: v } = n || {},
            { artist: _ } = (0, p.oR4)(),
            g = !!(null === (t = _.meta) || void 0 === t
              ? void 0
              : t.artist.isAvailable),
            C =
              null === (i = _.meta) || void 0 === i
                ? void 0
                : i.artist.coverUri,
            h = null === (a = _.meta) || void 0 === a ? void 0 : a.artist.name;
          return (0, o.jsx)(b.ti, {
            ref: c,
            "data-intersection-property-id": u,
            coverUrl: null == m ? void 0 : m.coverUri,
            withCover: !0,
            withDescription: !0,
            viewAllActionLink: null == m ? void 0 : m.url,
            title: null == m ? void 0 : m.title,
            controls: !1,
            coverContainerClassName: ed().cover,
            shimmerCoverClassName: ed().shimmerCover,
            titleLineClamp: 1,
            withDescriptionWidthLimit: !1,
            isShimmerVisible: l,
            isShimmerActive: s,
            headingVariant: d,
            className: r,
            subTitle: (0, o.jsxs)("div", {
              className: ed().subTitle,
              children: [
                (0, o.jsx)(er.y, {
                  children: (0, o.jsx)(S.Heading, {
                    variant: "h4",
                    children: (0, o.jsx)(x.Z, {
                      id: "page.artist-pick-aria-label",
                      values: { artistName: h },
                    }),
                  }),
                }),
                (0, o.jsx)(S.Caption, {
                  variant: "span",
                  size: "l",
                  weight: "medium",
                  className: ed().text,
                  "aria-hidden": !0,
                  children: (0, o.jsx)(x.Z, {
                    id: "page.artist-pick-subtitle",
                  }),
                }),
                (0, o.jsx)(N.Paper, {
                  radius: "round",
                  className: ed().smallCoverContainer,
                  children: (0, o.jsx)(b.BE, {
                    fit: "cover",
                    src: C,
                    size: 50,
                    className: ed().smallCover,
                    withAvatarReplace: !0,
                    isAvailable: g,
                    "aria-hidden": !0,
                  }),
                }),
                h &&
                  (0, o.jsx)(S.Caption, {
                    variant: "span",
                    size: "l",
                    weight: "medium",
                    className: ed().text,
                    lineClamp: 1,
                    "aria-hidden": !0,
                    children: h,
                  }),
              ],
            }),
            description: (0, o.jsx)(E.jO, {
              artists: v,
              linkClassName: ed().artistLink,
              spoilerClassName: ed().artistsSpoiler,
              lineClamp: 1,
              visibleArtistsCount: 3,
              spoilerComponent: (0, o.jsx)(x.Z, {
                id: "entity-names.and-more-artists",
                values: { artists: "" },
              }),
            }),
          });
        }),
        eu = (0, n.Pi)((e) => {
          var t, i;
          let { forwardRef: a, className: l, ...s } = e;
          return (0, o.jsx)("section", {
            ref: a,
            className: l,
            ...(0, p.tEg)(s),
            children: (0, o.jsx)(p.nZ5, {
              objectType: I.OB.Playlist,
              objectPosX: 1,
              objectPosY: 1,
              objectsCount: 1,
              objectId:
                null !==
                  (i =
                    null === (t = s.data) || void 0 === t
                      ? void 0
                      : t.playlist.id) && void 0 !== i
                  ? i
                  : "",
              children: (0, o.jsx)(ec, { ...s }),
            }),
          });
        }),
        em = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eu, { forwardRef: t, ...e }),
        );
      var ev = i(1150),
        e_ = i(35693),
        ep = i.n(e_);
      let eb = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              tracksContainerClassName: l,
              meta: s,
              data: r,
              headerClassName: n,
              headingVariant: d,
              className: c,
              ...u
            } = e,
            { artist: m } = (0, p.oR4)(),
            { from: v, utmLink: _ } = (0, p.MhG)({
              contextType: f.A.Artist,
              contextId: m.id,
            }),
            g = (e, t) =>
              r && m.id
                ? {
                    contextData: {
                      type: f.A.Artist,
                      meta: { id: m.id },
                      from: v,
                      utmLink: _,
                    },
                    queueParams: { index: t, entityId: e },
                    loadContextMeta: !0,
                  }
                : {
                    contextData: {
                      type: f.A.Artist,
                      meta: { id: "" },
                      from: v,
                      utmLink: _,
                    },
                  };
          return (0, o.jsx)(b.ad, {
            className: c,
            ref: t,
            shimmer: (0, o.jsx)(b.DX, { variant: p.Lxt.PLAYLIST, isActive: a }),
            maxColumnsCount: b.IA.ONE,
            itemsCountPerColumn: 5,
            isShimmerVisible: i,
            isShimmerActive: a,
            carouselClassName: l,
            carouselItemClassName: ep().item,
            blockHeaderClassName: n,
            blockHeaderTitle: s.title,
            blockHeaderDescription: s.description,
            blockHeaderHeadingVariant: d,
            viewAllActionLink: s.viewAllActionLink,
            ...u,
            children:
              null == r
                ? void 0
                : r.items.map((e, t) => {
                    let {
                      objectPosX: i,
                      objectPosY: a,
                      objectsCount: l,
                    } = (0, p.rc9)({ index: t, count: r.items.length });
                    return (0, o.jsx)(
                      p.nZ5,
                      {
                        objectId: e.id,
                        objectType: I.OB.Track,
                        objectPosX: i,
                        objectPosY: a,
                        objectsCount: l,
                        children: (0, o.jsx)(ev.O2, {
                          track: e,
                          playContextParams: g(e.id, t),
                        }),
                      },
                      e.id,
                    );
                  }),
          });
        }),
        eg = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eb, { forwardRef: t, ...e }),
        );
      var eC = i(72783);
      let eh = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: r,
              data: n,
              headingVariant: d,
              className: c,
              ...u
            } = e,
            m = (0, A.V)(() =>
              i || !n
                ? (0, o.jsx)(b.hi, { className: l, isActive: a })
                : (0, o.jsx)(p.nZ5, {
                    objectType: I.OB.Album,
                    objectId: String(n.album.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: 1,
                    children: (0, o.jsx)(eC.rf, {
                      className: l,
                      album: n.album,
                    }),
                  }),
            );
          return (0, o.jsxs)("section", {
            className: c,
            ref: t,
            ...(0, p.tEg)(u),
            children: [
              (0, o.jsx)(b.ti, {
                className: s,
                title: r.title,
                headingVariant: d,
                titleLineClamp: 1,
              }),
              m,
            ],
          });
        },
        eA = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eh, { forwardRef: t, ...e }),
        ),
        ey = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: r,
              data: n,
              headingVariant: d,
              className: c,
              ...u
            } = e,
            m = (0, A.V)(() =>
              i || !n
                ? (0, o.jsx)(b.hi, { className: l, isActive: a })
                : (0, o.jsx)(p.nZ5, {
                    objectType: I.OB.UpcomingAlbum,
                    objectId: String(n.album.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: 1,
                    children: (0, o.jsx)(eC.vK, {
                      className: l,
                      upcomingAlbum: n.album,
                    }),
                  }),
            );
          return (0, o.jsxs)("section", {
            className: c,
            ref: t,
            ...(0, p.tEg)(u),
            children: [
              (0, o.jsx)(b.ti, {
                className: s,
                title: r.title,
                headingVariant: d,
                titleLineClamp: 1,
              }),
              m,
            ],
          });
        },
        ej = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ey, { forwardRef: t, ...e }),
        ),
        eT = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              tracksContainerClassName: l,
              meta: s,
              data: r,
              headerClassName: n,
              headingVariant: d,
              className: c,
              ...u
            } = e,
            { from: m, utmLink: v } = (0, p.MhG)({
              contextType: f.A.Playlist,
              contextId: null == r ? void 0 : r.playlist.id,
            }),
            _ = (e) =>
              r
                ? {
                    contextData: {
                      type: f.A.Playlist,
                      meta: { id: r.playlist.id },
                      from: m,
                      utmLink: v,
                    },
                    queueParams: {
                      index: r.items.findIndex((t) => t.data.id === e),
                      entityId: e,
                    },
                    loadContextMeta: !0,
                  }
                : {
                    contextData: {
                      type: f.A.Playlist,
                      meta: { id: "" },
                      from: m,
                      utmLink: v,
                    },
                  };
          return (0, o.jsx)(b.ad, {
            className: c,
            ref: t,
            shimmer: (0, o.jsx)(b.DX, { variant: p.Lxt.PLAYLIST, isActive: a }),
            maxColumnsCount: b.IA.TWO,
            itemsCountPerColumn: 4,
            isShimmerVisible: i,
            isShimmerActive: a,
            carouselClassName: l,
            blockHeaderClassName: n,
            blockHeaderTitle: s.title,
            blockHeaderDescription: s.description,
            blockHeaderHeadingVariant: d,
            viewAllActionLink: s.viewAllActionLink,
            ...u,
            children:
              null == r
                ? void 0
                : r.items.map((e, t) => {
                    let {
                      objectPosX: i,
                      objectPosY: a,
                      objectsCount: l,
                    } = (0, p.rc9)({ index: t, count: r.items.length });
                    return (0, o.jsx)(
                      p.nZ5,
                      {
                        objectId: e.data.id,
                        objectType: I.OB.Track,
                        objectPosX: i,
                        objectPosY: a,
                        objectsCount: l,
                        children: (0, o.jsx)(ev._3, {
                          track: e.data,
                          playContextParams: _(e.data.id),
                        }),
                      },
                      e.data.id,
                    );
                  }),
          });
        }),
        eI = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eT, { forwardRef: t, ...e }),
        );
      var eL = i(61039);
      let ex = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return e.map((e) => e.data);
        },
        ef = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            data: l,
            meta: s,
            containerClassName: r,
            headerClassName: n,
            className: d,
            ...c
          } = e;
          return (0, o.jsx)(eL.Op, {
            className: d,
            ref: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            clips: ex(null == l ? void 0 : l.items),
            title: s.title,
            description: s.description,
            containerClassName: r,
            headerClassName: n,
            ...c,
          });
        },
        eN = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ef, { forwardRef: t, ...e }),
        );
      var eS = i(65426),
        ek = i.n(eS);
      let eE = (e) => {
          let {
              title: t,
              description: i,
              viewAllActionLink: a,
              headerClassName: l,
              containerClassName: s,
              headingVariant: n,
            } = e,
            { formatMessage: d } = (0, L.Z)();
          return (0, o.jsxs)("div", {
            className: ek().root,
            children: [
              (0, o.jsx)(b.ti, {
                className: l,
                title: t,
                description: i,
                viewAllActionLink: a,
                "aria-label": d({
                  id: "error-messages.empty-collection-podcasts",
                }),
                headingVariant: n,
              }),
              (0, o.jsx)("div", {
                className: (0, r.W)(ek().text, s),
                children: (0, o.jsx)(x.Z, {
                  id: "error-messages.empty-collection-podcasts",
                }),
              }),
            ],
          });
        },
        eR = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...u
          } = e;
          return (null == n ? void 0 : n.isEmptyBlock)
            ? (0, o.jsx)(eE, {
                title: r.title,
                description: r.description,
                viewAllActionLink: r.viewAllActionLink,
                containerClassName: l,
                headerClassName: s,
                headingVariant: d,
              })
            : (0, o.jsx)(b.HY, {
                className: c,
                ...u,
                isShimmerVisible: i,
                isShimmerActive: a,
                headerClassName: s,
                containerClassName: l,
                title: r.title,
                description: r.description,
                viewAllActionLink: r.viewAllActionLink,
                ref: t,
                headingVariant: d,
                children:
                  null == n
                    ? void 0
                    : n.items.map((e, t) =>
                        (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Album,
                            objectId: String(e.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(eC.rf, {
                              album: e,
                              contentLinesCount: 3,
                            }),
                          },
                          e.id,
                        ),
                      ),
              });
        },
        eV = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eR, { forwardRef: t, ...e }),
        );
      var eP = i(14222),
        ew = i(4082),
        eO = i.n(ew),
        eM = i(52682),
        eB = i(41210),
        eD = i.n(eB);
      let eW = (e) => {
          let { tab: t, areBothTabsEmpty: i } = e,
            a = (0, c.useMemo)(() => {
              switch (t) {
                case eM.n.ALBUM:
                  return (0, o.jsx)(x.Z, {
                    id: "error-messages.empty-collection-albums",
                  });
                case eM.n.PRESAVED_ALBUM:
                  return (0, o.jsx)(x.Z, {
                    id: "error-messages.empty-collection-upcoming-albums-title",
                  });
              }
            }, [t]);
          return (0, o.jsx)("div", {
            className: (0, r.W)(eD().root, {
              [eD().root_oneEmptyTab]: !i,
              [eD().root_twoEmptyTabs]: i,
            }),
            children: a,
          });
        },
        eU = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            { objectsCount: g } = (0, p.qYG)(),
            C = (0, c.useId)(),
            h = (0, c.useRef)(null),
            A = (0, c.useId)(),
            y = "".concat(C, " ").concat(C, "-description"),
            j = (0, _.useTabsState)(
              (null == d ? void 0 : d.activeIndexTab) || 0,
            ),
            T = (0, c.useMemo)(() => {
              var e;
              return (
                (null == d
                  ? void 0
                  : null === (e = d.tabs[j.value]) || void 0 === e
                    ? void 0
                    : e.items.length) === 0
              );
            }, [null == d ? void 0 : d.tabs, j.value]),
            L = (0, c.useCallback)(
              (e) =>
                e.isEmptyTab
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        !(null == d ? void 0 : d.areBothTabsEmpty) &&
                          (0, o.jsx)(w.Carousel, {
                            className: (0, r.W)(eO().carouselEmpty, l),
                            itemClassName: (0, r.W)(eO().item, eO().important),
                            tabIndex: -1,
                            children: (0, b.Cl)({
                              isActive: !1,
                              withInfo: !0,
                              linesCount: 4,
                            }),
                          }),
                        (0, o.jsx)(eW, {
                          tab: e.type,
                          areBothTabsEmpty:
                            null == d ? void 0 : d.areBothTabsEmpty,
                        }),
                      ],
                    })
                  : (0, o.jsx)(w.Carousel, {
                      ref: h,
                      itemClassName: (0, r.W)(eO().item, eO().important),
                      className: l,
                      "aria-labelledby": y,
                      children: e.items.map((t, i) => {
                        switch (t.type) {
                          case eP.Q.ALBUM_ITEM:
                            return (0, o.jsx)(
                              p.nZ5,
                              {
                                objectType: I.OB.Album,
                                objectId: String(t.data.id),
                                objectPosX: i + 1,
                                objectPosY: 1,
                                objectsCount: e.items.length,
                                children: (0, o.jsx)(eC.rf, {
                                  contentLinesCount: 4,
                                  album: t.data,
                                }),
                              },
                              t.data.id,
                            );
                          case eP.Q.PRESAVED_ALBUM_ITEM:
                            return (0, o.jsx)(
                              p.nZ5,
                              {
                                objectType: I.OB.UpcomingAlbum,
                                objectId: String(t.data.id),
                                objectPosX: i + 1,
                                objectPosY: 1,
                                objectsCount: e.items.length,
                                children: (0, o.jsx)(eC.vK, {
                                  contentLinesCount: 4,
                                  upcomingAlbum: t.data,
                                }),
                              },
                              t.data.id,
                            );
                        }
                      }),
                    }),
              [y, l, null == d ? void 0 : d.areBothTabsEmpty],
            ),
            x = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(w.Carousel, {
                      ref: h,
                      itemClassName: (0, r.W)(eO().item, eO().important),
                      className: l,
                      "aria-labelledby": y,
                      children: (0, b.Cl)({
                        isActive: a,
                        withInfo: !0,
                        linesCount: 4,
                      }),
                    })
                  : null == d
                    ? void 0
                    : d.tabs.map((e, t) =>
                        (0, o.jsx)(
                          _.TabPanel,
                          {
                            name: t,
                            value: j.value,
                            elementId: A,
                            className: eO().tabPanel,
                            children: L(e),
                          },
                          e.id,
                        ),
                      ),
              [i, null == d ? void 0 : d.tabs, l, y, a, j.value, A, L],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(eO().root, m, { [eO().root_withControls]: !T }),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(p.nZ5, {
                objectType: I.OB.Shortcut,
                objectId: String(n.viewAllActionLink),
                objectPosX: 0,
                objectPosY: 0,
                objectsCount: null != g ? g : 0,
                children: (0, o.jsx)(b.ti, {
                  className: (0, r.W)(s, eO().header, eO().important),
                  title: n.title,
                  description: n.description,
                  labeledForId: C,
                  viewAllActionLink: n.viewAllActionLink,
                  controls: (0, o.jsx)(b.J8, {
                    className: eO().controls,
                    carouselRef: h,
                  }),
                  headingVariant: u,
                }),
              }),
              (0, o.jsx)(b.no, {
                className: (0, r.W)(l, eO().tabCarousel, eO().important),
                isShimmerVisible: i,
                elementId: A,
                shimmer: (0, o.jsx)(b.tS, {
                  isActive: a,
                  className: (0, r.W)(l, eO().tabCarousel, eO().important),
                  shimmerClassName: eO().tabShimmer,
                }),
                "aria-labelledby": C,
                ...j,
                children:
                  null == d
                    ? void 0
                    : d.tabs.map((e, t) =>
                        (0, o.jsx)(
                          b.OK,
                          {
                            value: t,
                            "aria-label": e.title,
                            title: e.title,
                            className: (0, r.W)(eO().tab, eO().important),
                          },
                          e.id,
                        ),
                      ),
              }),
              x,
            ],
          });
        }),
        eY = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eU, { forwardRef: t, ...e }),
        );
      var eG = i(55051),
        eH = i(18886),
        ez = i.n(eH);
      let eK = (e) => {
          let {
              title: t,
              description: i,
              viewAllActionLink: a,
              headerClassName: l,
              containerClassName: s,
            } = e,
            { formatMessage: n } = (0, L.Z)();
          return (0, o.jsxs)("div", {
            className: ez().root,
            children: [
              (0, o.jsx)(b.ti, {
                className: l,
                title: t,
                description: i,
                viewAllActionLink: a,
                "aria-label": n({
                  id: "error-messages.empty-collection-artists-title",
                }),
              }),
              (0, o.jsx)("div", {
                className: (0, r.W)(ez().text, s),
                children: (0, o.jsx)(x.Z, {
                  id: "error-messages.empty-collection-artists-title",
                }),
              }),
            ],
          });
        },
        eQ = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            className: r,
            meta: n,
            data: d,
            headingVariant: c,
            ...u
          } = e;
          return (null == d ? void 0 : d.isEmptyBlock)
            ? (0, o.jsx)(eK, {
                title: n.title,
                description: n.description,
                viewAllActionLink: n.viewAllActionLink,
                containerClassName: l,
                headerClassName: s,
              })
            : (0, o.jsx)(b.HY, {
                ...u,
                className: r,
                isShimmerVisible: i,
                isShimmerActive: a,
                isShimmerCentered: !0,
                isShimmerRounded: !0,
                containerClassName: l,
                headerClassName: s,
                title: n.title,
                description: n.description,
                viewAllActionLink: n.viewAllActionLink,
                ref: t,
                headingVariant: c,
                children:
                  null == d
                    ? void 0
                    : d.items.map((e, t) =>
                        (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Artist,
                            objectId: e.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: d.items.length,
                            children: (0, o.jsx)(eG.IT, {
                              artist: e,
                              contentLinesCount: 3,
                            }),
                          },
                          e.id,
                        ),
                      ),
              });
        },
        eZ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eQ, { forwardRef: t, ...e }),
        );
      var eF = i(82029),
        eX = i.n(eF);
      let eq = (e) => {
          let {
              title: t,
              description: i,
              viewAllActionLink: a,
              headerClassName: l,
              containerClassName: s,
              headingVariant: n,
            } = e,
            { formatMessage: d } = (0, L.Z)();
          return (0, o.jsxs)("div", {
            className: eX().root,
            children: [
              (0, o.jsx)(b.ti, {
                className: l,
                title: t,
                description: i,
                viewAllActionLink: a,
                "aria-label": d({
                  id: "error-messages.empty-collection-clips-title",
                }),
                headingVariant: n,
              }),
              (0, o.jsx)(S.Caption, {
                className: (0, r.W)(eX().text, s),
                variant: "div",
                size: "l",
                weight: "normal",
                children: (0, o.jsx)(x.Z, {
                  id: "error-messages.empty-collection-clips-title",
                }),
              }),
            ],
          });
        },
        eJ = (e) => {
          let {
            forwardRef: t,
            containerClassName: i,
            headerClassName: a,
            meta: l,
            data: s,
            headingVariant: r,
            ...n
          } = e;
          return (null == s ? void 0 : s.isEmptyBlock)
            ? (0, o.jsx)(eq, {
                title: l.title,
                description: l.description,
                viewAllActionLink: l.viewAllActionLink,
                containerClassName: i,
                headerClassName: a,
                headingVariant: r,
              })
            : (0, o.jsx)(eN, {
                ref: t,
                meta: l,
                data: s,
                containerClassName: i,
                headerClassName: a,
                headingVariant: r,
                ...n,
              });
        },
        e$ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(eJ, { forwardRef: t, ...e }),
        );
      var e0 = i(7797),
        e5 = i(10979);
      let e1 = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: r,
              data: n,
              headingVariant: d,
              className: u,
              ...m
            } = e,
            v = (0, c.useMemo)(() => {
              let e =
                null == n
                  ? void 0
                  : n.items.map((e, t) =>
                      (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Playlist,
                          objectId: e.id,
                          objectPosX: t + 1,
                          objectPosY: 1,
                          objectsCount: n.items.length,
                          children: (0, o.jsx)(e0.ZL, {
                            playlist: e,
                            contentLinesCount: 3,
                          }),
                        },
                        e.key,
                      ),
                    );
              return (
                null == e ||
                  e.unshift((0, o.jsx)(e5.lN, {}, "create-playlist-card")),
                e
              );
            }, [null == n ? void 0 : n.items]);
          return (0, o.jsx)(b.HY, {
            className: u,
            ...m,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            ref: t,
            headingVariant: d,
            children: v,
          });
        }),
        e3 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(e1, { forwardRef: t, ...e }),
        ),
        e4 = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              tracksContainerClassName: l,
              headerClassName: s,
              className: r,
              meta: n,
              data: d,
              headingVariant: c,
              ...u
            } = e,
            { from: m } = (0, p.MhG)(),
            { formatMessage: v } = (0, L.Z)(),
            _ = Array.isArray(null == d ? void 0 : d.rawTracks)
              ? v(
                  { id: "entity-names.number-of-tracks" },
                  { counter: null == d ? void 0 : d.rawTracks.length },
                )
              : n.description,
            g = (e, t) => ({
              contextData: {
                type: f.A.Various,
                meta: { id: T.g.COLLECTION_DOWNLOADED_TRACKS },
                from: m,
              },
              entitiesData: null == d ? void 0 : d.entitiesData,
              queueParams: { index: t, entityId: e },
              loadContextMeta: !1,
            });
          return (0, o.jsx)(b.ad, {
            className: r,
            shimmer: (0, o.jsx)(b.DX, { variant: p.Lxt.PLAYLIST, isActive: a }),
            maxColumnsCount: b.IA.TWO,
            itemsCountPerColumn: 4,
            isShimmerVisible: i,
            isShimmerActive: a,
            blockHeaderClassName: s,
            carouselClassName: l,
            blockHeaderTitle: n.title,
            viewAllActionLink: n.viewAllActionLink,
            blockHeaderDescription: _,
            ref: t,
            blockHeaderHeadingVariant: c,
            withBlockHeaderDescription: !0,
            ...u,
            children:
              null == d
                ? void 0
                : d.items.map((e, t) => {
                    let {
                      objectPosX: i,
                      objectPosY: a,
                      objectsCount: l,
                    } = (0, p.rc9)({ index: t, count: d.items.length });
                    return (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Track,
                        objectId: e.id,
                        objectPosX: i,
                        objectPosY: a,
                        objectsCount: l,
                        children: (0, o.jsx)(ev.O2, {
                          track: e,
                          playContextParams: g(e.id, t),
                        }),
                      },
                      e.id,
                    );
                  }),
          });
        }),
        e2 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(e4, { forwardRef: t, ...e }),
        ),
        e7 = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...u
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...u,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            ref: t,
            headingVariant: d,
            children:
              null == n
                ? void 0
                : n.items.map((e, t) => {
                    switch (e.type) {
                      case eP.Q.TRACK_ITEM:
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Track,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(
                              ev.G7,
                              { track: e.data, contentLinesCount: 3 },
                              e.data.getKey("track"),
                            ),
                          },
                          e.data.id,
                        );
                      case eP.Q.LIKED_PLAYLIST_ITEM:
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Playlist,
                            objectId: e.data.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(
                              e0.ZL,
                              { playlist: e.data, contentLinesCount: 3 },
                              e.data.getKey("playlist"),
                            ),
                          },
                          e.data.key,
                        );
                      case eP.Q.NON_MUSIC_ALBUM_ITEM:
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Album,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(
                              eC.rf,
                              { album: e.data, contentLinesCount: 3 },
                              e.data.getKey("album"),
                            ),
                          },
                          e.data.id,
                        );
                    }
                  }),
          });
        },
        e6 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(e7, { forwardRef: t, ...e }),
        ),
        e9 = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...u
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...u,
            isShimmerVisible: i,
            isShimmerActive: a,
            headerClassName: s,
            containerClassName: l,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            ref: t,
            headingVariant: d,
            children:
              null == n
                ? void 0
                : n.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Playlist,
                        objectId: e.id,
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: n.items.length,
                        children: (0, o.jsx)(e0.ZL, {
                          playlist: e,
                          contentLinesCount: 3,
                        }),
                      },
                      e.key,
                    ),
                  ),
          });
        },
        e8 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(e9, { forwardRef: t, ...e }),
        );
      var te = i(21018),
        tt = i(49554),
        ti = i.n(tt),
        ta = i(67207),
        tl = i.n(ta);
      let ts = (e) => {
          let { className: t } = e;
          return (0, o.jsx)("div", {
            className: (0, r.W)(tl().root, t),
            ...(0, u.BA)(
              u.QM.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
            ),
            children: (0, o.jsx)(x.Z, {
              id: "error-messages.empty-collection-liked-playlists",
            }),
          });
        },
        to = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            { objectsCount: g } = (0, p.qYG)(),
            C = (0, c.useId)(),
            h = (0, c.useRef)(null),
            A = (0, c.useId)(),
            y = "".concat(C, " ").concat(C, "-description"),
            j = (0, _.useTabsState)(
              (null == d ? void 0 : d.activeIndexTab) || 0,
            ),
            T = (0, c.useMemo)(() => {
              var e, t;
              return (
                (null == d
                  ? void 0
                  : null === (e = d.tabs[j.value]) || void 0 === e
                    ? void 0
                    : e.type) !== te.a.PLAYLIST_CREATED_TAB &&
                (null == d
                  ? void 0
                  : null === (t = d.tabs[j.value]) || void 0 === t
                    ? void 0
                    : t.items.length) === 0
              );
            }, [null == d ? void 0 : d.tabs, j.value]),
            L = (0, c.useCallback)(
              (e) => {
                if (e.isEmptyTab && e.type !== te.a.PLAYLIST_CREATED_TAB)
                  return (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(w.Carousel, {
                        className: (0, r.W)(ti().carouselEmpty, l),
                        itemClassName: (0, r.W)(ti().item, ti().important),
                        tabIndex: -1,
                        children: (0, b.Cl)({
                          isActive: !1,
                          withInfo: !0,
                          linesCount: 4,
                        }),
                      }),
                      (0, o.jsx)(ts, {}),
                    ],
                  });
                let t = e.items.map((t, i) =>
                  (0, o.jsx)(
                    p.nZ5,
                    {
                      objectType: I.OB.Playlist,
                      objectId: String(t.id),
                      objectPosX: i + 1,
                      objectPosY: 1,
                      objectsCount: e.items.length,
                      children: (0, o.jsx)(e0.ZL, {
                        contentLinesCount: 4,
                        playlist: t,
                      }),
                    },
                    t.id,
                  ),
                );
                return (
                  e.type === te.a.PLAYLIST_CREATED_TAB &&
                    t.unshift(
                      (0, o.jsx)(
                        e5.lN,
                        { className: ti().createPlaylistCard },
                        "create-playlist-card",
                      ),
                    ),
                  (0, o.jsx)(w.Carousel, {
                    ref: h,
                    itemClassName: (0, r.W)(ti().item, ti().important),
                    className: l,
                    "aria-labelledby": y,
                    children: t,
                  })
                );
              },
              [y, l],
            ),
            x = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(w.Carousel, {
                      ref: h,
                      itemClassName: (0, r.W)(ti().item, ti().important),
                      className: l,
                      "aria-labelledby": y,
                      children: (0, b.Cl)({
                        isActive: a,
                        withInfo: !0,
                        linesCount: 4,
                      }),
                    })
                  : null == d
                    ? void 0
                    : d.tabs.map((e, t) =>
                        (0, o.jsx)(
                          _.TabPanel,
                          {
                            name: t,
                            value: j.value,
                            elementId: A,
                            className: ti().tabPanel,
                            children: L(e),
                          },
                          e.id,
                        ),
                      ),
              [i, null == d ? void 0 : d.tabs, l, y, a, j.value, A, L],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(ti().root, m, { [ti().root_withControls]: !T }),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(p.nZ5, {
                objectType: I.OB.Shortcut,
                objectId: String(n.viewAllActionLink),
                objectPosX: 0,
                objectPosY: 0,
                objectsCount: null != g ? g : 0,
                children: (0, o.jsx)(b.ti, {
                  className: (0, r.W)(s, ti().header, ti().important),
                  title: n.title,
                  description: n.description,
                  labeledForId: C,
                  viewAllActionLink: n.viewAllActionLink,
                  controls: (0, o.jsx)(b.J8, {
                    className: ti().controls,
                    carouselRef: h,
                  }),
                  headingVariant: u,
                }),
              }),
              (0, o.jsx)(b.no, {
                isShimmerVisible: i,
                className: (0, r.W)(l, ti().tabCarousel, ti().important),
                elementId: A,
                shimmer: (0, o.jsx)(b.tS, {
                  isActive: a,
                  className: (0, r.W)(l, ti().tabCarousel, ti().important),
                  shimmerClassName: ti().tabShimmer,
                }),
                "aria-labelledby": C,
                ...j,
                children:
                  null == d
                    ? void 0
                    : d.tabs.map((e, t) =>
                        (0, o.jsx)(
                          b.OK,
                          {
                            value: t,
                            "aria-label": e.title,
                            title: e.title,
                            className: (0, r.W)(ti().tab, ti().important),
                          },
                          e.id,
                        ),
                      ),
              }),
              x,
            ],
          });
        }),
        tr = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(to, { forwardRef: t, ...e }),
        );
      var tn = i(28676),
        td = i(34103),
        tc = i(72079),
        tu = i.n(tc);
      let tm = (e) =>
          Array.from({ length: 10 }, (t, i) =>
            (0, o.jsx)(tn.Shimmer, { isActive: e, className: tu().shimmer }, i),
          ),
        tv = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            _ = (0, c.useId)(),
            g = (0, c.useRef)(null),
            C = (0, c.useMemo)(
              () =>
                i
                  ? tm(a)
                  : null == d
                    ? void 0
                    : d.items.map((e, t) =>
                        (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Concert,
                            objectId: e.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: d.items.length,
                            children: (0, o.jsx)(td.Concert, { concert: e }),
                          },
                          e.id,
                        ),
                      ),
              [null == d ? void 0 : d.items, a, i],
            );
          return (0, o.jsxs)("section", {
            ref: t,
            className: (0, r.W)(tu().root, m),
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(b.ti, {
                className: s,
                labeledForId: _,
                title: n.title,
                viewAllActionLink: n.viewAllActionLink,
                controls: (0, o.jsx)(b.J8, {
                  className: tu().controls,
                  carouselRef: g,
                }),
                headingVariant: u,
              }),
              (0, o.jsx)(w.Carousel, {
                ref: g,
                itemClassName: (0, r.W)(tu().item, tu().important),
                className: l,
                "aria-labelledby": _,
                children: C,
              }),
            ],
          });
        },
        t_ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tv, { forwardRef: t, ...e }),
        );
      var tp = i(74383),
        tb = i.n(tp),
        tg = i(69756),
        tC = i(39054),
        th = i(98326),
        tA = i.n(th);
      let ty = (e) => {
        let {
            className: t,
            title: i,
            subtitle: a,
            covers: l,
            link: s,
            type: n,
            withLastPlayed: d,
          } = e,
          u = (0, p.zxW)(),
          m = (0, c.useMemo)(() => {
            if (0 !== l.length)
              return (0, o.jsx)("div", {
                className: tA().covers,
                children: l
                  .slice(0, 2)
                  .map((e, t) =>
                    (0, o.jsx)(
                      N.Paper,
                      {
                        className: tA().coverContainer,
                        radius: "xs",
                        children: (0, o.jsx)(tC.Image, {
                          className: tA().cover,
                          size: 80,
                          src: e.uri,
                          fit: "contain",
                          withAvatarReplace: !0,
                          fallbackIconSize: "s",
                        }),
                      },
                      t,
                    ),
                  ),
              });
          }, [l]),
          v = (0, c.useCallback)(() => {
            u({ to: I.qU.Link });
          }, [u]);
        return (0, o.jsx)(N.Paper, {
          className: (0, r.W)(
            tA().root,
            tA()["root_".concat(n)],
            {
              [tA().root_withCovers]: l.length > 0,
              [tA().root_withLastPlayed]: d,
            },
            t,
          ),
          radius: "l",
          children: (0, o.jsx)(b.rU, {
            className: tA().link,
            href: s,
            onClick: v,
            children: (0, o.jsxs)("div", {
              className: tA().content,
              children: [
                (0, o.jsxs)("div", {
                  className: tA().textContainer,
                  children: [
                    (0, o.jsxs)(S.Caption, {
                      className: tA().title,
                      size: "m",
                      variant: "div",
                      children: [
                        i,
                        (0, o.jsx)(tg.Icon, {
                          className: tA().titleIcon,
                          size: "xs",
                          variant: "arrowRight",
                        }),
                      ],
                    }),
                    a &&
                      (0, o.jsx)(S.Caption, {
                        className: tA().subtitle,
                        size: "m",
                        variant: "div",
                        lineClamp: 2,
                        children: a,
                      }),
                  ],
                }),
                m,
              ],
            }),
          }),
        });
      };
      var tj = i(71361),
        tT = i(60793),
        tI = i(32399);
      let tL = (e) => {
        let { track: t, trackIndex: i, contextType: a, contextId: l } = e,
          s = (0, c.useMemo)(() => {
            switch (a) {
              case f.A.Playlist:
                return { type: f.A.Playlist, meta: { id: String(l) } };
              case f.A.Album:
                return { type: f.A.Album, meta: { id: Number(l) } };
              case f.A.Various:
                return { type: f.A.Various, meta: { id: Number(l) } };
              case f.A.Artist:
                return { type: f.A.Artist, meta: { id: Number(l) } };
              case f.A.Generative:
                return { type: f.A.Generative, meta: { id: Number(l) } };
              default:
                return { type: f.A.Various, meta: { id: "" } };
            }
          }, [a, l]),
          { from: o, utmLink: r } = (0, p.MhG)({
            contextId: s.meta.id,
            contextType: s.type,
          }),
          n = (0, c.useMemo)(() => {
            switch (a) {
              case f.A.Playlist:
                return {
                  type: f.A.Playlist,
                  meta: { id: String(l) },
                  from: o,
                  utmLink: r,
                };
              case f.A.Album:
                return {
                  type: f.A.Album,
                  meta: { id: Number(l) },
                  from: o,
                  utmLink: r,
                };
              case f.A.Various:
                return {
                  type: f.A.Various,
                  meta: { id: Number(l) },
                  from: o,
                  utmLink: r,
                };
              case f.A.Artist:
                return {
                  type: f.A.Artist,
                  meta: { id: Number(l) },
                  from: o,
                  utmLink: r,
                };
              case f.A.Generative:
                return {
                  type: f.A.Generative,
                  meta: { id: Number(l) },
                  from: o,
                  utmLink: r,
                };
              default:
                return {
                  type: f.A.Playlist,
                  meta: { id: "" },
                  from: o,
                  utmLink: r,
                };
            }
          }, [o, r, l, a]);
        return (0, p.qmq)({
          playContextParams: {
            contextData: n,
            queueParams: { entityId: t.entityId, index: i },
            loadContextMeta: !0,
          },
          entityId: t.entityId,
        });
      };
      var tx = i(96661),
        tf = i.n(tx);
      let tN = (0, n.Pi)((e) => {
          var t, i, a, l;
          let { className: s, lastPlayed: n } = e,
            { objectsCount: d } = (0, p.qYG)(),
            { formatMessage: v } = (0, L.Z)(),
            { sonataState: _, continueListen: g } = (0, p.oR4)(),
            C = (0, p.R$C)(),
            h = (0, tI.tl)(),
            {
              album: A,
              playlist: y,
              track: j,
              getTrackMeta: T,
              getPlaylistMeta: x,
              isNeededToLoad: k,
              isRejected: E,
              albumDuration: R,
              albumDurationLeft: V,
            } = n.data,
            {
              track: P,
              trackIndex: w,
              contextType: O,
              contextId: M,
              albumDuration: B,
              albumStreamProgress: D,
              trackTempStreamProgress: W,
            } = g,
            U = (0, p.lAI)(),
            Y = (0, p.qsr)(),
            G = (0, c.useMemo)(() => P || j, [P, j]),
            H =
              (null === (t = _.entityMeta) || void 0 === t
                ? void 0
                : t.isPodcast) ||
              (null === (i = _.entityMeta) || void 0 === i
                ? void 0
                : i.isAudiobook),
            z = (0, c.useCallback)(async () => {
              let e = await T();
              !g.track &&
                e &&
                (g.saveTrack({
                  contextType: A ? f.A.Album : f.A.Playlist,
                  contextId: A ? A.id : String(null == y ? void 0 : y.id),
                  track: e,
                  isDefaultTrack: !0,
                }),
                R &&
                  V &&
                  (g.saveAlbumDuration(R),
                  g.albumStreamProgress.updateEndPositionSec(R - V)));
            }, [g, A, R, V, T, null == y ? void 0 : y.id]),
            K = (0, c.useCallback)(async () => {
              let e = await x();
              g.track || "number" != typeof e || g.saveTrackIndex(e);
            }, [x, g]);
          (0, c.useEffect)(() => {
            k && (z(), K());
          }, [k, z, K]);
          let Q =
              O === f.A.Album &&
              G.mainAlbum &&
              (null == G ? void 0 : G.mainAlbum.isAudiobook),
            Z = (0, c.useCallback)(
              (e) => {
                var t, i;
                if (
                  e &&
                  e.duration &&
                  (e.duration === 1 / 0
                    ? null === (t = G.streamProgress) ||
                      void 0 === t ||
                      t.updateEndPositionSec(0)
                    : null === (i = G.streamProgress) ||
                      void 0 === i ||
                      i.updateEndPositionSec(e.position),
                  Q)
                ) {
                  let t = (null == D ? void 0 : D.endPositionSec) || 0,
                    i = e.position,
                    a = i - ((null == W ? void 0 : W.endPositionSec) || 0);
                  null == D || D.updateEndPositionSec(t + a),
                    null == W || W.updateEndPositionSec(i);
                }
              },
              [G.streamProgress, D, W, Q],
            ),
            F = Q
              ? (null == D ? void 0 : D.endPositionSec) || 0
              : (null === (a = G.streamProgress) || void 0 === a
                  ? void 0
                  : a.endPositionSec) || 0,
            X = G.durationMs ? G.durationMs / 1e3 : 0,
            q = Q ? B || 0 : X,
            J = (0, tI.S6)(F, q),
            $ = (0, c.useMemo)(() => (0, tj.Z)(Z, 500), [Z]),
            { isPlaying: ee, togglePlay: et } = tL({
              track: G,
              trackIndex: w,
              contextType: O,
              contextId: M,
            }),
            ei = (0, m.W)(() => {
              Y() || (et(), U(!ee));
            }),
            ea = (0, c.useMemo)(
              () => ({ "--color-background": G.averageColor }),
              [G.averageColor],
            );
          (0, c.useEffect)(() => {
            let e;
            let t =
              null == C
                ? void 0
                : C.state.queueState.currentEntity.onChange(() => {
                    null == e || e(),
                      (e = C.state.playerState.progress.onChange(() => {
                        let e = C.state.playerState.progress.value;
                        H && $(e);
                      }));
                  });
            return () => {
              null == t || t(), null == e || e();
            };
          }, [C, $, H, G.streamProgress]);
          let el = Q ? G.mainAlbum.title : G.title,
            es = Q ? G.mainAlbum.coverUri : G.coverUri,
            eo = (0, c.useMemo)(() => {
              var e;
              return v(
                { id: "entity-names.album-name" },
                {
                  albumName:
                    null === (e = G.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                },
              );
            }, [
              v,
              null === (l = G.mainAlbum) || void 0 === l ? void 0 : l.title,
            ]),
            er = (0, c.useMemo)(
              () =>
                Q
                  ? eo
                  : v(
                      { id: "entity-names.track-name" },
                      { trackName: G.title },
                    ),
              [v, Q, eo, G.title],
            ),
            en = Q ? G.mainAlbum.explicitDisclaimer : G.explicitDisclaimer,
            ed = h(q - F, !1);
          return E
            ? null
            : (0, o.jsx)(
                p.nZ5,
                {
                  objectType: I.OB.Track,
                  objectId: String(G.id),
                  objectPosX: 0,
                  objectPosY: 1,
                  objectsCount: d,
                  children: (0, o.jsxs)(N.Paper, {
                    className: (0, r.W)(tf().root, s),
                    radius: "l",
                    style: ea,
                    "aria-label": el,
                    ...(0, u.BA)(u.QM.landing.CONTINUE_LISTEN_TRACK),
                    children: [
                      (0, o.jsxs)("div", {
                        className: tf().content,
                        children: [
                          (0, o.jsx)(b.BE, {
                            className: (0, r.W)(tf().cover, tf().important),
                            src: es,
                            size: 50,
                            alt: er,
                            fit: "cover",
                            withAvatarReplace: !0,
                            isAvailable: G.isAvailable,
                            fallbackIconSize: "xs",
                            "aria-hidden": !0,
                          }),
                          (0, o.jsxs)("div", {
                            className: tf().metaTrack,
                            children: [
                              (0, o.jsxs)(b.rU, {
                                className: tf().metaContainer,
                                href: G.albumUrl,
                                children: [
                                  (0, o.jsx)(S.Caption, {
                                    className: tf().title,
                                    type: "entity",
                                    size: "m",
                                    weight: "medium",
                                    variant: "span",
                                    lineClamp: 1,
                                    "aria-label": eo,
                                    children: el,
                                  }),
                                  en &&
                                    (0, o.jsx)(b.$i, {
                                      getDescriptionTexts:
                                        G.getDescriptionTexts,
                                      size: "xs",
                                      variant: en,
                                      className: tf().explicitMark,
                                    }),
                                  (0, o.jsx)(tg.Icon, {
                                    className: tf().titleIcon,
                                    size: "xs",
                                    variant: "arrowRight",
                                  }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                className: tf().progress,
                                children:
                                  !!q &&
                                  (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      (0, o.jsx)(tT.m, {
                                        "aria-valuetext": J,
                                        "aria-busy": ee && H,
                                        fullCircleClassName: tf().fullCircle,
                                        progressCircleClassName:
                                          tf().progressCircle,
                                        value: F,
                                        max: q,
                                      }),
                                      (0, o.jsx)(S.Caption, {
                                        lineClamp: 1,
                                        variant: "div",
                                        size: "m",
                                        children: ed,
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsx)(b.JM, {
                        variant: "filled",
                        className: tf().playButton,
                        isPlaying: ee && H,
                        onClick: ei,
                        iconSize: "m",
                      }),
                    ],
                  }),
                },
                G.id,
              );
        }),
        tS = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              headerClassName: l,
              containerClassName: s,
              headingVariant: n,
              data: d,
              ...u
            } = e,
            { formatMessage: m } = (0, L.Z)(),
            v = (0, c.useId)(),
            { objectsCount: _ } = (0, p.qYG)(),
            g = (0, c.useMemo)(() => {
              if (!d || i)
                return Array.from({ length: 3 }, (e, t) =>
                  (0, o.jsx)(
                    tn.Shimmer,
                    { className: tb().item, isActive: a },
                    t,
                  ),
                );
              let e = [
                  d.bookshelf.bookCount
                    ? m(
                        { id: "entity-names.number-of-books" },
                        { counter: d.bookshelf.bookCount },
                      )
                    : void 0,
                  d.bookshelf.podcastCount
                    ? m(
                        { id: "entity-names.number-of-podcasts" },
                        { counter: d.bookshelf.podcastCount },
                      )
                    : void 0,
                ]
                  .filter(Boolean)
                  .join(",\n"),
                t = d.newEpisodes.trackCount
                  ? m(
                      { id: "entity-names.number-of-episodes" },
                      { counter: d.newEpisodes.trackCount },
                    )
                  : void 0,
                l = [];
              return (
                d.lastPlayed &&
                  l.push(
                    (0, o.jsx)(
                      tN,
                      {
                        className: (0, r.W)(tb().item, tb().item_lastPlayed),
                        lastPlayed: d.lastPlayed,
                      },
                      d.lastPlayed.type,
                    ),
                  ),
                l.push(
                  (0, o.jsx)(
                    p.nZ5,
                    {
                      objectType: I.OB.Text,
                      objectId: "bookshelf",
                      objectPosX: 1,
                      objectPosY: 1,
                      objectsCount: _,
                      children: (0, o.jsx)(ty, {
                        className: tb().item,
                        type: "bookshelf",
                        link: "/collection/shelf",
                        title: d.bookshelf.title,
                        subtitle: e,
                        covers: d.bookshelf.covers,
                        withLastPlayed: !!d.lastPlayed,
                      }),
                    },
                    d.bookshelf.title,
                  ),
                  (0, o.jsx)(
                    p.nZ5,
                    {
                      objectType: I.OB.Text,
                      objectId: "newEpisodes",
                      objectPosX: 2,
                      objectPosY: 1,
                      objectsCount: _,
                      children: (0, o.jsx)(ty, {
                        className: tb().item,
                        type: "newEpisodes",
                        link: "/collection/shelf/new-episodes",
                        title: d.newEpisodes.title,
                        subtitle: t,
                        covers: d.newEpisodes.covers,
                        withLastPlayed: !!d.lastPlayed,
                      }),
                    },
                    d.newEpisodes.title,
                  ),
                ),
                l
              );
            }, [m, d, a, i, _]);
          return (0, o.jsxs)("section", {
            ref: t,
            ...(0, p.tEg)(u),
            children: [
              (0, o.jsx)(b.ti, {
                className: l,
                labeledForId: v,
                title: m({
                  id: "non-music.continue-listen-landing-block-title",
                }),
                headingVariant: n,
              }),
              (0, o.jsx)("div", {
                className: tb().blocksContainer,
                children: (0, o.jsx)("div", {
                  className: (0, r.W)(tb().container, s),
                  "aria-labelledby": v,
                  children: g,
                }),
              }),
            ],
          });
        },
        tk = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tS, { forwardRef: t, ...e }),
        ),
        tE = (e) => {
          let {
            forwardRef: t,
            headerClassName: i,
            headingVariant: a,
            meta: l,
            ...s
          } = e;
          return (0, o.jsx)(p.nZ5, {
            objectType: I.OB.Text,
            objectId: String(l.viewAllActionLink),
            objectPosX: 1,
            objectPosY: 1,
            objectsCount: 0,
            children: (0, o.jsx)("section", {
              ref: t,
              ...(0, p.tEg)(s),
              children: (0, o.jsx)(b.ti, {
                className: i,
                title: l.title,
                headingVariant: a,
                viewAllActionLink: l.viewAllActionLink,
              }),
            }),
          });
        },
        tR = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tE, { forwardRef: t, ...e }),
        );
      var tV = i(5104);
      let tP = (0, n.Pi)((e) => {
          let { donation: t } = e,
            { ref: i, intersectionPropertyId: a } = (0, p.VfV)(),
            l = (0, p.s0h)(t.url),
            s = (0, p.s0h)(t.artist.url),
            r = (0, p.zxW)(),
            n = (0, m.W)(() => {
              r({ to: I.qU.ArtistScreen }), s();
            }),
            d = (0, m.W)(() => {
              r({ to: I.qU.Link, deepLink: t.url }), l();
            }),
            c = (0, E.v2)({ artist: t.artist, callback: n });
          return (0, o.jsx)(tV.AT, {
            ref: i,
            "data-intersection-property-id": a,
            artist: t.artist,
            goal: t.goal,
            onNavigateToArtist: c,
            onNavigateToDonation: d,
          });
        }),
        tw = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: r,
              data: n,
              headingVariant: d,
              className: u,
              ...m
            } = e,
            v = (0, c.useMemo)(
              () =>
                !i && (null == n ? void 0 : n.items)
                  ? n.items.map((e, t) => {
                      let { data: i } = e;
                      return (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Donation,
                          objectId: i.artist.id,
                          objectPosX: t + 1,
                          objectPosY: 1,
                          objectsCount: n.items.length,
                          children: (0, o.jsx)(tP, { donation: i }),
                        },
                        i.artist.id,
                      );
                    })
                  : (0, tV.ei)(a),
              [null == n ? void 0 : n.items, a, i],
            );
          return (0, o.jsx)(tV.Nv, {
            containerClassName: l,
            headerClassName: s,
            headingVariant: d,
            className: u,
            forwardRef: t,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            title: r.title,
            ...m,
            children: v,
          });
        },
        tO = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tw, { forwardRef: t, ...e }),
        );
      var tM = i(1045),
        tB = i(67623),
        tD = i.n(tB);
      let tW = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              className: u,
              headingVariant: m,
              ...v
            } = e,
            _ = (0, c.useId)(),
            g = (0, c.useRef)(null),
            C = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(tM.E, {
                      isActive: a,
                      ref: g,
                      containerClassName: l,
                      ariaLabelledBy: _,
                      length: 9,
                    })
                  : (0, o.jsx)(tM.y, {
                      ref: g,
                      containerClassName: l,
                      ariaLabelledBy: _,
                      items: null == d ? void 0 : d.items,
                    }),
              [null == d ? void 0 : d.items, a, i, l, _],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(tD().root, u),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(b.ti, {
                className: s,
                title: n.title,
                description: n.description,
                labeledForId: _,
                viewAllActionLink: n.viewAllActionLink,
                controls: (0, o.jsx)(b.J8, {
                  className: tD().controls,
                  carouselRef: g,
                }),
                headingVariant: m,
                withDescription: !0,
              }),
              C,
            ],
          });
        },
        tU = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tW, { forwardRef: t, ...e }),
        );
      var tY = i(26573),
        tG = i.n(tY);
      let tH = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              headerClassName: l,
              meta: s,
              data: r,
              headingVariant: n,
              className: d,
              ...c
            } = e,
            { artist: u } = (0, p.oR4)(),
            { formatMessage: m } = (0, L.Z)(),
            v = (0, A.V)(() => {
              if (!r) return;
              let e = [];
              return (
                r.tracksCount &&
                  e.push(
                    m(
                      { id: "entity-names.tracks-count" },
                      { value: r.tracksCount },
                    ),
                  ),
                r.collectionAlbumCount &&
                  e.push(
                    m(
                      { id: "entity-names.albums-count" },
                      { value: r.collectionAlbumCount },
                    ),
                  ),
                e.join(" • ")
              );
            });
          return (0, o.jsx)("section", {
            ref: t,
            className: d,
            ...(0, p.tEg)(c),
            children: (0, o.jsx)(b.ti, {
              className: l,
              title: s.title,
              coverUrl:
                "avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%",
              controls: !1,
              viewAllActionLink: null == r ? void 0 : r.href(u.id),
              coverContainerClassName: tG().cover,
              shimmerCoverClassName: tG().shimmerCover,
              headingVariant: n,
              titleLineClamp: 1,
              withDescription: !0,
              description: v,
              isShimmerActive: a,
              isShimmerVisible: i,
            }),
          });
        }),
        tz = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tH, { forwardRef: t, ...e }),
        );
      var tK = i(14662),
        tQ = i.n(tK);
      let tZ = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            { objectsCount: g } = (0, p.qYG)(),
            C = (0, _.useTabsState)(0),
            h = (0, c.useId)(),
            A = (0, c.useRef)(null),
            y = (0, c.useId)(),
            j = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(w.Carousel, {
                      ref: A,
                      itemClassName: (0, r.W)(tQ().item, tQ().important),
                      className: l,
                      "aria-labelledby": ""
                        .concat(h, " ")
                        .concat(h, "-description"),
                      children: (0, b.Cl)({ isActive: a }),
                    })
                  : null == d
                    ? void 0
                    : d.items.map((e) =>
                        (0, o.jsx)(
                          _.TabPanel,
                          {
                            name: e.tab.id,
                            value: C.value,
                            elementId: y,
                            children: (0, o.jsx)(w.Carousel, {
                              ref: A,
                              itemClassName: (0, r.W)(
                                tQ().item,
                                tQ().important,
                              ),
                              className: l,
                              "aria-labelledby": ""
                                .concat(h, " ")
                                .concat(h, "-description"),
                              children: e.data.map((t, i) =>
                                (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Album,
                                    objectId: String(t.id),
                                    objectPosX: i + 1,
                                    objectPosY: 1,
                                    objectsCount: e.data.length,
                                    children: (0, o.jsx)(eC.rf, {
                                      contentLinesCount: 3,
                                      album: t,
                                    }),
                                  },
                                  t.id,
                                ),
                              ),
                            }),
                          },
                          e.tab.id,
                        ),
                      ),
              [i, null == d ? void 0 : d.items, l, h, a, C.value, y],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(tQ().root, m),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(p.nZ5, {
                objectType: I.OB.Shortcut,
                objectId: String(n.viewAllActionLink),
                objectPosX: 0,
                objectPosY: 0,
                objectsCount: null != g ? g : 0,
                children: (0, o.jsx)(b.ti, {
                  className: (0, r.W)(s, tQ().header, tQ().important),
                  title: n.title,
                  description: n.description,
                  labeledForId: h,
                  viewAllActionLink: n.viewAllActionLink,
                  controls: (0, o.jsx)(b.J8, {
                    className: tQ().controls,
                    carouselRef: A,
                  }),
                  headingVariant: u,
                }),
              }),
              (0, o.jsx)(b.no, {
                isShimmerVisible: i,
                className: (0, r.W)(l, tQ().tabCarousel, tQ().important),
                elementId: y,
                shimmer: (0, o.jsx)(b.A0, {
                  isActive: a,
                  className: (0, r.W)(l, tQ().tabCarousel, tQ().important),
                }),
                "aria-labelledby": h,
                ...C,
                children:
                  null == d
                    ? void 0
                    : d.items.map((e) => {
                        let { tab: t } = e;
                        return (0, o.jsx)(
                          b.OK,
                          {
                            value: t.id,
                            "aria-label": t.title,
                            title: t.title,
                            covers: t.covers,
                            className: (0, r.W)(tQ().tab, tQ().important),
                            withCovers: !0,
                          },
                          t.id,
                        );
                      }),
              }),
              j,
            ],
          });
        }),
        tF = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tZ, { forwardRef: t, ...e }),
        );
      var tX = i(73306),
        tq = i.n(tX);
      let tJ = (e) => {
          var t;
          let {
              containerClassName: i,
              meta: a,
              data: l,
              forwardRef: s,
              isShimmerVisible: r,
              isShimmerActive: n,
              headingVariant: d,
            } = e,
            m = (0, c.useMemo)(() => {
              if (r) {
                var e;
                return (0, b.Yh)({
                  className: tq().root,
                  shimmerClassName: tq().shimmer,
                  isActive: n,
                  count:
                    (null === (e = a.source) || void 0 === e
                      ? void 0
                      : e.countWeb) || 10,
                  minWidth: 30,
                  maxWidth: 70,
                });
              }
              return (0, o.jsx)("div", {
                className: tq().root,
                children:
                  null == l
                    ? void 0
                    : l.items.map((e) =>
                        (0, o.jsx)(
                          b.ti,
                          {
                            titleLineClamp: 1,
                            title: e.data.title,
                            viewAllActionLink: e.data.viewAllActionLink,
                            headingVariant: d,
                          },
                          e.key,
                        ),
                      ),
              });
            }, [
              null == l ? void 0 : l.items,
              d,
              n,
              r,
              null === (t = a.source) || void 0 === t ? void 0 : t.countWeb,
            ]);
          return (0, o.jsx)("section", {
            ref: s,
            title: a.title,
            className: i,
            ...(0, u.BA)(u.QM.landing.ITEM_LIST),
            children: m,
          });
        },
        t$ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(tJ, { forwardRef: t, ...e }),
        );
      var t0 = i(82746),
        t5 = i.n(t0),
        t1 = i(52700),
        t3 = i.n(t1);
      let t4 = (0, n.Pi)((e) => {
          let {
              title: t,
              subtitle: i,
              link: a,
              testId: l,
              icon: s,
              covers: r,
              navigateTo: n,
            } = e,
            {
              settings: { isMobile: d },
            } = (0, p.oR4)(),
            m = (0, p.zxW)(),
            { ref: v, intersectionPropertyId: _ } = (0, p.VfV)(),
            g = (0, c.useMemo)(() => {
              if (0 !== r.length)
                return (0, o.jsx)("div", {
                  className: t3().covers,
                  children: r.map((e, t) =>
                    (0, o.jsx)(
                      N.Paper,
                      {
                        className: t3().coverContainer,
                        radius: "xs",
                        ...(0, u.BA)(u.QM.landing.LIKES_HISTORY_COVERS),
                        children: (0, o.jsx)(tC.Image, {
                          size: 80,
                          className: t3().cover,
                          src: e.uri,
                          fit: "cover",
                          withAvatarReplace: !0,
                        }),
                      },
                      t,
                    ),
                  ),
                });
            }, [r]),
            C = (0, c.useCallback)(() => {
              m({ to: n });
            }, [n, m]);
          return (0, o.jsx)("div", {
            ref: v,
            "data-intersection-property-id": _,
            className: t3().root,
            ...(0, u.BA)(l),
            children: (0, o.jsxs)(b.rU, {
              className: t3().link,
              href: a,
              onClick: C,
              children: [
                (0, o.jsxs)("div", {
                  className: t3().start,
                  children: [
                    s,
                    (0, o.jsxs)("div", {
                      className: t3().textContainer,
                      children: [
                        (0, o.jsxs)(S.Heading, {
                          className: t3().title,
                          size: d ? "xs" : "m",
                          variant: "h2",
                          ...(0, u.BA)(u.QM.landing.LIKES_HISTORY_TITLE),
                          children: [
                            t,
                            (0, o.jsx)(tg.Icon, {
                              className: t3().titleIcon,
                              size: "xs",
                              variant: "arrowRight",
                            }),
                          ],
                        }),
                        (0, o.jsx)(S.Caption, {
                          className: t3().subtitle,
                          size: "m",
                          variant: "div",
                          lineClamp: 1,
                          ...(0, u.BA)(u.QM.landing.LIKES_HISTORY_SUBTITLE),
                          children: i,
                        }),
                      ],
                    }),
                  ],
                }),
                g,
              ],
            }),
          });
        }),
        t2 = (e) => {
          let { isActive: t } = e;
          return (0, o.jsx)(tn.Shimmer, {
            isActive: t,
            className: t3().root,
            height: 82,
          });
        },
        t7 = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              data: l,
              ...s
            } = e,
            { formatMessage: r } = (0, L.Z)(),
            { favorites: n, history: d } = l || {},
            m = (0, c.useMemo)(
              () =>
                n && d && !i
                  ? [
                      (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Playlist,
                          objectId: n.id,
                          objectPosX: 1,
                          objectPosY: 1,
                          objectsCount: 2,
                          children: (0, o.jsx)(t4, {
                            title: n.title,
                            subtitle: r(
                              { id: "entity-names.number-of-tracks" },
                              { counter: n.count },
                            ),
                            link: n.link,
                            navigateTo: I.qU.PlaylistScreen,
                            testId: u.QM.landing.LIKES_BLOCK,
                            icon: (0, o.jsx)(N.Paper, {
                              className: t5().favoritesCoverContainer,
                              radius: "m",
                              children: (0, o.jsx)(tC.Image, {
                                className: t5().favoritesCover,
                                size: 80,
                                src: n.cover.uri,
                                fit: "cover",
                                withAvatarReplace: !0,
                                alt: n.title,
                              }),
                            }),
                            covers: n.trackCovers,
                          }),
                        },
                        n.id,
                      ),
                      (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Shortcut,
                          objectId: d.id,
                          objectPosX: 2,
                          objectPosY: 1,
                          objectsCount: 2,
                          children: (0, o.jsx)(t4, {
                            title: d.title,
                            subtitle: d.artists.join(", "),
                            link: d.link,
                            navigateTo: I.qU.MusicHistoryScreen,
                            testId: u.QM.landing.HISTORY_BLOCK,
                            icon: (0, o.jsx)(N.Paper, {
                              className: t5().historyIconContainer,
                              radius: "m",
                              children: (0, o.jsx)(tg.Icon, {
                                className: t5().historyIcon,
                                variant: "history",
                                size: "m",
                              }),
                            }),
                            covers: d.trackCovers,
                          }),
                        },
                        d.id,
                      ),
                    ]
                  : [
                      (0, o.jsx)(t2, { isActive: a }, 0),
                      (0, o.jsx)(t2, { isActive: a }, 1),
                    ],
              [n, r, d, a, i],
            );
          return (0, o.jsx)("section", {
            ref: t,
            className: t5().root,
            ...(0, p.tEg)(s),
            children: (0, o.jsx)(w.Carousel, {
              className: t5().carousel,
              itemClassName: t5().carouselItem,
              children: m,
            }),
          });
        },
        t6 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(t7, { forwardRef: t, ...e }),
        );
      var t9 = i(9152),
        t8 = i(18990),
        ie = i.n(t8);
      let it = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              ...m
            } = e,
            v = (0, c.useId)(),
            _ = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(t9.xJ, {
                      isActive: a,
                      className: (0, r.W)(ie().item, ie().important),
                    })
                  : (null == d ? void 0 : d.items[0])
                    ? (0, o.jsx)(
                        p.nZ5,
                        {
                          objectType: I.OB.Wave,
                          objectId: d.items[0].stationId,
                          objectPosX: 1,
                          objectPosY: 1,
                          objectsCount: 1,
                          children: (0, o.jsx)(t9.k_, {
                            className: (0, r.W)(ie().item, ie().important),
                            vibe: null == d ? void 0 : d.items[0],
                          }),
                        },
                        d.items[0].stationId,
                      )
                    : void 0,
              [null == d ? void 0 : d.items, a, i],
            );
          return (0, o.jsxs)("section", {
            ref: t,
            ...(0, p.tEg)(m),
            className: ie().root,
            children: [
              (n.description || n.title) &&
                (0, o.jsx)(b.ti, {
                  className: s,
                  title: n.title,
                  description: n.description,
                  labeledForId: v,
                  viewAllActionLink: n.viewAllActionLink,
                  headingVariant: u,
                }),
              (0, o.jsx)("div", {
                className: (0, r.W)(ie().contentContainer, l),
                "aria-labelledby": v,
                children: _,
              }),
            ],
          });
        },
        ii = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(it, { forwardRef: t, ...e }),
        );
      var ia = i(45906),
        il = i(11889),
        is = i.n(il);
      let io = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...m
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...m,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            itemClassName: is().item,
            showShimmerInfo: !1,
            ref: t,
            headingVariant: d,
            ...(0, u.BA)(u.QM.landing.MIXES_BLOCK),
            children:
              null == n
                ? void 0
                : n.items.map((e) =>
                    (0, o.jsx)(
                      ia.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                        headingVariant: "h3",
                      },
                      e.id,
                    ),
                  ),
          });
        },
        ir = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(io, { forwardRef: t, ...e }),
        );
      var id = i(30139),
        ic = i(99428),
        iu = i.n(ic);
      let im = (e) => {
          var t;
          let {
              forwardRef: i,
              headerClassName: a,
              meta: l,
              data: s,
              headingVariant: n,
              isShimmerActive: d,
              containerClassName: u,
              isShimmerVisible: m,
              className: v,
              ..._
            } = e,
            g = (0, c.useId)(),
            C = (0, c.useMemo)(() => {
              if (m) {
                var e;
                return (0, o.jsx)(b.Wm, {
                  itemClassName: (0, r.W)(
                    iu().item,
                    iu().important,
                    iu().shimmerWithSubcover,
                  ),
                  isActive: d,
                  centered: !0,
                  withInfo: !0,
                  withSubcover: !0,
                  count:
                    null === (e = l.source) || void 0 === e ? void 0 : e.count,
                });
              }
              return null == s
                ? void 0
                : s.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Shortcut,
                        objectId: String(e.id),
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: s.items.length,
                        children: (0, o.jsx)(
                          id.gX,
                          {
                            linkClassName: (0, r.W)(iu().item, iu().important),
                            title: e.title,
                            weblink: e.weblink,
                            covers: e.covers,
                            captionVariant: "h3",
                          },
                          e.id,
                        ),
                      },
                      e.id,
                    ),
                  );
            }, [
              d,
              m,
              null == s ? void 0 : s.items,
              null === (t = l.source) || void 0 === t ? void 0 : t.count,
            ]);
          return (0, o.jsxs)("section", {
            ref: i,
            className: v,
            ...(0, p.tEg)(_),
            children: [
              (0, o.jsx)(b.ti, {
                className: (0, r.W)(iu().header, a),
                labeledForId: g,
                title: l.title,
                viewAllActionLink: l.viewAllActionLink,
                headingVariant: n,
              }),
              (0, o.jsx)("div", {
                className: (0, r.W)(iu().mixesGrid, u),
                children: C,
              }),
            ],
          });
        },
        iv = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(im, { forwardRef: t, ...e }),
        );
      var i_ = i(59252),
        ip = i.n(i_);
      let ib = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...m
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...m,
            isShimmerVisible: i,
            isShimmerActive: a,
            isShimmerWithSubcover: !0,
            isShimmerCentered: !0,
            shimmerClassName: ip().shimmer,
            containerClassName: l,
            headerClassName: s,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            itemClassName: ip().item,
            showShimmerInfo: !0,
            ref: t,
            headingVariant: d,
            ...(0, u.BA)(u.QM.landing.MIXES_MUSIC),
            children:
              null == n
                ? void 0
                : n.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Shortcut,
                        objectId: String(e.id),
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: n.items.length,
                        children: (0, o.jsx)(
                          id.gX,
                          {
                            linkClassName: ip().item,
                            title: e.title,
                            weblink: e.weblink,
                            covers: e.covers,
                            captionVariant: "h3",
                          },
                          e.id,
                        ),
                      },
                      e.id,
                    ),
                  ),
          });
        },
        ig = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ib, { forwardRef: t, ...e }),
        );
      var iC = i(55107),
        ih = i.n(iC),
        iA = i(68208),
        iy = i(29095),
        ij = i.n(iy);
      let iT = (e) => {
          let { isActive: t } = e;
          return (0, o.jsx)(tn.Shimmer, { isActive: t, className: ij().root });
        },
        iI = (0, n.Pi)((e) => {
          var t, i;
          let { neuromusic: a } = e,
            { from: l } = (0, p.MhG)(),
            { isPlaying: s, togglePlay: n } = (0, p.qmq)({
              playContextParams: {
                contextData: {
                  type: f.A.Generative,
                  meta: { id: a.stationId },
                  from: l,
                },
                loadContextMeta: !0,
              },
            }),
            d = (0, c.useCallback)(
              (e) => {
                (0, X.m)(e, ij().ripple), n();
              },
              [n],
            ),
            m = (0, c.useMemo)(() => {
              var e, t;
              return {
                "--neuromusic-button-background":
                  null == a
                    ? void 0
                    : null === (e = a.style) || void 0 === e
                      ? void 0
                      : e.backgroundColor,
                "--neuromusic-button-color":
                  null == a
                    ? void 0
                    : null === (t = a.style) || void 0 === t
                      ? void 0
                      : t.titleColor,
              };
            }, [
              null == a
                ? void 0
                : null === (t = a.style) || void 0 === t
                  ? void 0
                  : t.backgroundColor,
              null == a
                ? void 0
                : null === (i = a.style) || void 0 === i
                  ? void 0
                  : i.titleColor,
            ]),
            v = s
              ? u.QM.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON
              : u.QM.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
          return (0, o.jsx)(iA.Button, {
            style: m,
            withRipple: !1,
            withHover: !1,
            variant: "text",
            onClick: d,
            className: (0, r.W)(ij().root, ij().button),
            ...(0, u.BA)(u.QM.landing.NEUROMUSIC_BLOCK_ITEM),
            children: (0, o.jsxs)("div", {
              className: ij().textContainer,
              children: [
                (0, o.jsx)(tg.Icon, {
                  className: ij().icon,
                  size: "xxs",
                  variant: s ? "pause" : "play",
                  ...(0, u.BA)(v),
                }),
                (0, o.jsx)(S.Caption, {
                  className: ij().title,
                  variant: "span",
                  size: "s",
                  weight: "bold",
                  lineClamp: 1,
                  children: a.title,
                }),
              ],
            }),
          });
        }),
        iL = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              className: u,
              headingVariant: m,
              ...v
            } = e,
            _ = (0, c.useId)(),
            g = (0, c.useRef)(null),
            C = (0, c.useMemo)(
              () =>
                i
                  ? Array.from({ length: 3 }, (e, t) =>
                      (0, o.jsx)(iT, { isActive: a }, t),
                    )
                  : null == d
                    ? void 0
                    : d.items.map((e, t) =>
                        (0, o.jsx)(iI, { neuromusic: e }, t),
                      ),
              [null == d ? void 0 : d.items, a, i],
            );
          return (0, o.jsxs)("section", {
            ref: t,
            className: (0, r.W)(ih().root, u),
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(b.ti, {
                className: s,
                labeledForId: _,
                title: n.title,
                description: n.description,
                controls: (0, o.jsx)(b.J8, {
                  className: ih().controls,
                  carouselRef: g,
                }),
                headingVariant: m,
              }),
              (0, o.jsx)(w.Carousel, {
                ref: g,
                itemClassName: (0, r.W)(ih().item, ih().important),
                className: l,
                "aria-labelledby": _,
                children: C,
              }),
            ],
          });
        },
        ix = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(iL, { forwardRef: t, ...e }),
        ),
        iN = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...u
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...u,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            ref: t,
            headingVariant: d,
            children:
              null == n
                ? void 0
                : n.items.map((e, t) => {
                    switch (e.type) {
                      case eP.Q.LIKED_PLAYLIST_ITEM:
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Playlist,
                            objectId: e.data.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(e0.ZL, {
                              playlist: e.data,
                              contentLinesCount: 3,
                            }),
                          },
                          e.data.key,
                        );
                      case eP.Q.ALBUM_ITEM:
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Album,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: n.items.length,
                            children: (0, o.jsx)(
                              eC.rf,
                              { album: e.data, contentLinesCount: 3 },
                              e.data.id,
                            ),
                          },
                          e.data.id,
                        );
                    }
                  }),
          });
        },
        iS = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(iN, { forwardRef: t, ...e }),
        ),
        ik = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i,
        iE = (e) => {
          (e && ik.test(e)) || (e = "#000000");
          let { r: t, g: i, b: a } = (0, p.oo7)(e);
          return "linear-gradient(180.14deg, rgba("
            .concat(t, ", ")
            .concat(i, ", ")
            .concat(a, ", 0) 36.88%, rgba(")
            .concat(t, ", ")
            .concat(i, ", ")
            .concat(a, ", 0.5) 64.8%, rgba(")
            .concat(t, ", ")
            .concat(i, ", ")
            .concat(a, ", 0.9) 99.88%)");
        };
      var iR = i(83369),
        iV = i.n(iR);
      let iP = (0, n.Pi)((e) => {
        var t, i;
        let { album: a, releaseDate: l, coverColor: s, coverUri: r } = e,
          n =
            null == a
              ? void 0
              : null === (t = a.artists) || void 0 === t
                ? void 0
                : t[0],
          { formatDate: d } = (0, L.Z)(),
          { trailer: v } = (0, p.oR4)(),
          { ref: _, intersectionPropertyId: g } = (0, p.VfV)(),
          C = (0, p.s0h)("/artist/".concat(null == n ? void 0 : n.id)),
          h = (0, p.s0h)("/artist/".concat(null == n ? void 0 : n.id), !0),
          A = (0, E.v2)({ artist: n, callback: C }),
          y = (0, E.v2)({ artist: n, callback: h }),
          j = (0, E.ik)(y, A),
          T = (0, p.FTC)(),
          x = (0, k.H0)(a.type),
          R = (0, p.qsr)(),
          { from: V, utmLink: P } = (0, p.MhG)({
            contextId: a.id,
            contextType: f.A.Album,
          }),
          w = (0, p.zxW)(),
          O = (0, m.W)((e) => {
            w({
              to: I.qU.ArtistScreen,
              objectId: null == n ? void 0 : n.id,
              objectType: I.OB.Artist,
            }),
              j(e);
          }),
          M = (0, m.W)((e) => {
            if (R()) {
              e.stopPropagation(), e.preventDefault();
              return;
            }
            (null == a ? void 0 : a.id) &&
              (e.stopPropagation(),
              v.openAlbumTrailer(a.id),
              T(I.OB.Album, String(a.id)));
          }),
          B = (0, c.useMemo)(() => {
            var e;
            if (
              null == a
                ? void 0
                : null === (e = a.trailer) || void 0 === e
                  ? void 0
                  : e.isAvailable
            )
              return (0, o.jsx)(b.Wd, {
                children: (0, o.jsx)(b.eP, {
                  variant: "text",
                  iconSize: "xs",
                  className: iV().trailerButton,
                  withRipple: !1,
                  onClick: M,
                }),
              });
          }, [
            null == a
              ? void 0
              : null === (i = a.trailer) || void 0 === i
                ? void 0
                : i.isAvailable,
            M,
          ]),
          D = (0, c.useMemo)(() => {
            if (l)
              return (0, o.jsxs)(S.Caption, {
                variant: "span",
                type: "text",
                size: "s",
                weight: "medium",
                className: iV().descriptionContainer,
                children: [
                  (0, o.jsx)(S.Caption, {
                    variant: "span",
                    type: "text",
                    size: "s",
                    weight: "medium",
                    children: x.toLowerCase(),
                  }),
                  (0, o.jsx)(S.Caption, {
                    variant: "span",
                    type: "text",
                    size: "s",
                    weight: "medium",
                    children: " • ",
                  }),
                  (0, o.jsx)(S.Caption, {
                    variant: "span",
                    type: "text",
                    size: "s",
                    weight: "medium",
                    children: d(new Date(l), (0, p.EWQ)()),
                  }),
                ],
              });
          }, [x, d, l]);
        return (0, o.jsxs)("div", {
          className: iV().root,
          ref: _,
          "data-intersection-property-id": g,
          children: [
            (0, o.jsxs)("div", {
              className: iV().cover,
              children: [
                (0, o.jsxs)(N.Paper, {
                  radius: "round",
                  withShadow: !0,
                  children: [
                    (0, o.jsx)(b.BE, {
                      className: iV().image,
                      src: r,
                      alt: null == n ? void 0 : n.name,
                      size: 300,
                      fit: "cover",
                      withAvatarReplace: !0,
                    }),
                    (0, o.jsx)("div", {
                      className: iV().fade,
                      style: {
                        background: iE(null == a ? void 0 : a.averageColor),
                      },
                    }),
                  ],
                }),
                (0, o.jsx)(b.rU, {
                  className: iV().fade,
                  "aria-label": null == n ? void 0 : n.name,
                  href: "/artist/".concat(null == n ? void 0 : n.id),
                  onClick: O,
                }),
                (0, o.jsx)(E.jO, {
                  className: iV().artists,
                  lineClamp: 2,
                  artists: null == a ? void 0 : a.artists,
                  linkClassName: iV().artistLink,
                  captionClassName: iV().artistCaption,
                  variant: "breakWord",
                }),
              ],
            }),
            (0, o.jsx)(ee, {
              className: iV().card,
              album: a,
              albumUrl: a.url,
              from: V,
              utmLink: P,
              trailerButton: B,
              description: D,
              entityName: x,
              coverColor: s,
              ...(0, u.BA)(u.bG.newRelease.NEW_RELEASE_CARD),
            }),
          ],
        });
      });
      var iw = i(29864),
        iO = i.n(iw);
      let iM = (e) =>
          Array.from({ length: 6 }, (t, i) =>
            (0, o.jsxs)(
              "div",
              {
                children: [
                  (0, o.jsx)(tn.Shimmer, {
                    isActive: e,
                    radius: "round",
                    className: iO().shimmerImage,
                  }),
                  (0, o.jsx)(tn.Shimmer, {
                    isActive: e,
                    radius: "l",
                    className: iO().shimmerCard,
                  }),
                ],
              },
              i,
            ),
          ),
        iB = (e) => {
          let {
              forwardRef: t,
              isShimmerActive: i,
              isShimmerVisible: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            { objectsCount: _ } = (0, p.qYG)(),
            g = (0, c.useId)(),
            C = (0, c.useRef)(null),
            h = (0, c.useMemo)(
              () =>
                a
                  ? iM(i)
                  : null == d
                    ? void 0
                    : d.items.map((e, t) =>
                        (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Album,
                            objectId: String(e.album.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: d.items.length,
                            children: (0, o.jsx)(iP, { ...e }),
                          },
                          e.album.id,
                        ),
                      ),
              [null == d ? void 0 : d.items, i, a],
            );
          return (0, o.jsxs)("section", {
            ref: t,
            className: (0, r.W)(iO().root, m),
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(p.nZ5, {
                objectType: I.OB.Shortcut,
                objectId: String(n.viewAllActionLink),
                objectPosX: 0,
                objectPosY: 0,
                objectsCount: null != _ ? _ : 0,
                children: (0, o.jsx)(b.ti, {
                  className: s,
                  labeledForId: g,
                  title: n.title,
                  viewAllActionLink: n.viewAllActionLink,
                  controls: (0, o.jsx)(b.J8, {
                    className: iO().controls,
                    carouselRef: C,
                  }),
                  headingVariant: u,
                }),
              }),
              (0, o.jsx)(w.Carousel, {
                ref: C,
                itemClassName: (0, r.W)(iO().item, iO().important),
                className: l,
                "aria-labelledby": g,
                children: h,
              }),
            ],
          });
        },
        iD = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(iB, { forwardRef: t, ...e }),
        );
      var iW = i(1177),
        iU = i(8206),
        iY = i(18691),
        iG = i(75189),
        iH = i.n(iG);
      let iz = (e) => {
          let {
            forwardRef: t,
            containerClassName: i,
            id: a,
            meta: l,
            ...s
          } = e;
          return (0, o.jsx)("section", {
            ref: t,
            className: (0, r.W)(iH().root, i),
            ...(0, p.tEg)(s),
            children: (0, o.jsx)(
              p.nZ5,
              {
                objectType: I.OB.Text,
                objectId: a,
                objectPosX: 1,
                objectPosY: 1,
                objectsCount: 1,
                children: (0, o.jsx)(iY.HN, { meta: l }),
              },
              a,
            ),
          });
        },
        iK = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(iz, { forwardRef: t, ...e }),
        ),
        iQ = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: a,
            containerClassName: l,
            headerClassName: s,
            meta: r,
            data: n,
            headingVariant: d,
            className: c,
            ...u
          } = e;
          return (0, o.jsx)(b.HY, {
            className: c,
            ...u,
            isShimmerVisible: i,
            isShimmerActive: a,
            headerClassName: s,
            containerClassName: l,
            title: r.title,
            description: r.description,
            viewAllActionLink: r.viewAllActionLink,
            ref: t,
            headingVariant: d,
            children:
              null == n
                ? void 0
                : n.items.map((e, t) =>
                    (0, o.jsx)(
                      p.nZ5,
                      {
                        objectType: I.OB.Playlist,
                        objectId: e.data.playlist.id,
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: n.items.length,
                        children: (0, o.jsx)(e0.ZL, {
                          playlist: e.data.playlist,
                          customDescription: e.data.description,
                          contentLinesCount: 4,
                        }),
                      },
                      e.data.playlist.key,
                    ),
                  ),
          });
        },
        iZ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(iQ, { forwardRef: t, ...e }),
        );
      var iF = i(48546),
        iX = i(54306),
        iq = i(64997),
        iJ = i.n(iq),
        i$ = i(59388),
        i0 = i.n(i$);
      let i5 = (0, n.Pi)(() => {
          var e, t;
          let { vibe: i } = (0, p.oR4)(),
            { pageId: a } = (0, p.lVB)(),
            { blockIdForFrom: l } = (0, p.qYG)(),
            s = (0, p.s0h)("/"),
            { formatMessage: r } = (0, L.Z)(),
            { isFreemium: n } = (0, p.NMB)(),
            d = r({ id: "vibe-actions.play-vibe" }),
            { isPlaying: m, togglePlay: v } = (0, p.QhE)({
              seeds:
                null !==
                  (t =
                    null === (e = i.meta) || void 0 === e ? void 0 : e.seeds) &&
                void 0 !== t
                  ? t
                  : [],
              pageIdForFrom: a,
              blockIdForFrom: l,
            });
          (0, c.useEffect)(
            () => () => {
              i.reset();
            },
            [i],
          );
          let _ = (0, c.useCallback)(() => {
              n || (m || v(), s());
            }, [n, m, s, v]),
            g = (0, c.useCallback)(
              () =>
                (0, o.jsx)(iA.Button, {
                  withRipple: !0,
                  radius: "xxxl",
                  size: "l",
                  color: "primary",
                  className: i0().myWaveButton,
                  "aria-label": d,
                  onClick: _,
                  ...(0, u.BA)(
                    u.QM.landing
                      .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                  ),
                  children: (0, o.jsx)(S.Caption, {
                    variant: "span",
                    size: "m",
                    children: (0, o.jsx)(S.Caption, {
                      variant: "span",
                      size: "m",
                      weight: "medium",
                      className: i0().myWaveButtonText,
                      children: d,
                    }),
                  }),
                }),
              [d, _],
            );
          return (
            i.isNeededToLoad && (0, c.use)(i.getLastVibe()),
            (0, o.jsxs)("div", {
              className: i0().root,
              ...(0, u.BA)(
                u.QM.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
              ),
              children: [
                (0, o.jsx)(tC.Image, {
                  src: "/_next/static/media/heart.602389ae.png",
                  className: i0().image,
                  ...(0, u.BA)(
                    u.QM.landing
                      .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE,
                  ),
                }),
                (0, o.jsx)(S.Heading, {
                  variant: "h3",
                  size: "xs",
                  className: i0().header,
                  ...(0, u.BA)(
                    u.QM.landing
                      .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                  ),
                  children: (0, o.jsx)(x.Z, {
                    id: "collection.empty-liked-tracks-title",
                  }),
                }),
                (0, o.jsx)(S.Caption, {
                  variant: "div",
                  size: "l",
                  weight: "normal",
                  className: i0().text,
                  ...(0, u.BA)(
                    u.QM.landing
                      .COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                  ),
                  children: (0, o.jsx)(x.Z, {
                    id: "collection.empty-liked-tracks-text",
                  }),
                }),
                (0, o.jsx)(b.pl, {
                  isEnabled: n,
                  placement: "top",
                  textVariant: "vibe",
                  renderChildren: g,
                }),
              ],
            })
          );
        }),
        i1 = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              tracksContainerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              type: u,
              headingVariant: m,
              className: v,
              ..._
            } = e,
            { from: g, utmLink: C } = (0, p.MhG)({
              contextId: null == d ? void 0 : d.playlist.id,
              contextType: f.A.Playlist,
            }),
            {
              experiments: h,
              trailer: A,
              settings: { isMobile: y },
            } = (0, p.oR4)(),
            j = (0, p.FTC)(),
            { formatMessage: N } = (0, L.Z)(),
            S = (null == d ? void 0 : d.totalItemsCount)
              ? N(
                  { id: "entity-names.number-of-tracks" },
                  { counter: null == d ? void 0 : d.totalItemsCount },
                )
              : n.description,
            k = [
              T.g.COLLECTION_PLAYLIST_WITH_LIKES,
              T.g.SMART_OPEN_PLAYLIST,
            ].includes(u),
            E = n.coverStyle !== iF.t.NONE,
            R = (e, t) =>
              d
                ? {
                    contextData: {
                      type: f.A.Playlist,
                      meta: { id: d.playlist.id, uuid: d.playlist.uuid },
                      from: g,
                      utmLink: C,
                      completeEntitesDataByLoadedMeta: !0,
                    },
                    queueParams: { index: t, entityId: e },
                    loadContextMeta: !0,
                    entitiesData: d.items.map((e) =>
                      (0, iX.RN)(e.id, e.albumId),
                    ),
                  }
                : {
                    contextData: {
                      type: f.A.Playlist,
                      meta: { id: "" },
                      from: g,
                    },
                  },
            V = (0, c.useCallback)(() => {
              (null == d ? void 0 : d.playlist.id) &&
                (A.setUtmLink(C),
                A.openPlaylistTrailer(null == d ? void 0 : d.playlist.id),
                j(I.OB.Playlist, String(d.playlist.id)));
            }, [A, null == d ? void 0 : d.playlist.id, j, C]),
            P = (0, c.useMemo)(
              () =>
                (null == d ? void 0 : d.withRewindTrailerButton) &&
                h.checkExperiment(p.peG.WebNextSmartOpenPlaylistTrailer, "on")
                  ? y
                    ? (0, o.jsx)(b.eP, {
                        className: iJ().trailer,
                        radius: "round",
                        size: "s",
                        iconSize: "xs",
                        onClick: V,
                      })
                    : (0, o.jsx)(b.eP, {
                        size: "s",
                        radius: "xxxl",
                        iconSize: "xxs",
                        className: iJ().trailer,
                        onClick: V,
                        children: (0, o.jsx)(x.Z, {
                          id: "entity-names.trailer",
                        }),
                      })
                  : void 0,
              [null == d ? void 0 : d.withRewindTrailerButton, h, y, V],
            );
          return (null == d ? void 0 : d.playlist.isFavouritePlaylist) &&
            (null == d ? void 0 : d.totalItemsCount) === 0 &&
            (null == d ? void 0 : d.canShowEmptyBlock)
            ? (0, o.jsx)(i5, {})
            : (0, o.jsx)(b.ad, {
                shimmer: (0, o.jsx)(b.DX, {
                  variant: p.Lxt.PLAYLIST,
                  isActive: a,
                }),
                maxColumnsCount: b.IA.TWO,
                itemsCountPerColumn: 4,
                className: (0, r.W)(iJ().root, v),
                isShimmerVisible: i,
                isShimmerActive: a,
                blockHeaderClassName: s,
                carouselClassName: l,
                blockHeaderTitle: n.title,
                blockHeaderCoverUrl:
                  null == d ? void 0 : d.getCoverUri(n.coverStyle),
                blockHeaderDescription: S,
                viewAllActionLink: null == d ? void 0 : d.playlist.url,
                ref: t,
                blockHeaderHeadingVariant: m,
                additionalControl: P,
                withBlockHeaderDescription: k,
                withBlockHeaderCover: E,
                ..._,
                children:
                  null == d
                    ? void 0
                    : d.items.map((e, t) => {
                        let {
                          objectPosX: i,
                          objectPosY: a,
                          objectsCount: l,
                        } = (0, p.rc9)({ index: t, count: d.items.length });
                        return (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Track,
                            objectId: e.id,
                            objectPosX: i,
                            objectPosY: a,
                            objectsCount: l,
                            children: e.isTrackNonMusic
                              ? (0, o.jsx)(ev.FP, {
                                  track: e,
                                  playContextParams: R(e.id, t),
                                  withPodcastName: !0,
                                  withTimeLeftText: !1,
                                })
                              : (0, o.jsx)(ev.O2, {
                                  track: e,
                                  playContextParams: R(e.id, t),
                                }),
                          },
                          e.id,
                        );
                      }),
              });
        }),
        i3 = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(i1, { forwardRef: t, ...e }),
        );
      var i4 = i(34232),
        i2 = i.n(i4);
      let i7 = (e) => {
        let { promotion: t } = e,
          { ref: i, intersectionPropertyId: a } = (0, p.VfV)(),
          l = (0, p.zxW)(),
          s = (0, c.useCallback)(() => {
            l({ to: I.qU.Link });
          }, [l]);
        return (0, o.jsxs)("div", {
          className: (0, r.W)(i2().root, i2().card),
          ref: i,
          "data-intersection-property-id": a,
          children: [
            (0, o.jsx)(b.rU, {
              href: t.weblink,
              onClick: s,
              children: (0, o.jsx)(N.Paper, {
                className: i2().cover,
                withShadow: !0,
                children: (0, o.jsx)(tC.Image, {
                  className: i2().image,
                  src: t.imageUrl,
                  alt: t.title,
                  withAvatarReplace: !0,
                  withAspectRatio: !0,
                  size: 400,
                  fit: "cover",
                }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: i2().meta,
              children: [
                (0, o.jsx)(b.rU, {
                  className: i2().titleLink,
                  href: t.weblink,
                  onClick: s,
                  children: (0, o.jsx)(S.Caption, {
                    variant: "div",
                    lineClamp: 1,
                    type: "entity",
                    size: "s",
                    weight: "medium",
                    children: t.title,
                  }),
                }),
                (0, o.jsx)(S.Caption, {
                  className: i2().subtitle,
                  variant: "div",
                  lineClamp: 1,
                  type: "entity",
                  size: "s",
                  weight: "medium",
                  children: t.subtitle,
                }),
              ],
            }),
          ],
        });
      };
      var i6 = i(50446),
        i9 = i.n(i6),
        i8 = i(42103),
        ae = i.n(i8);
      let at = (e) => {
          let { isActive: t, withHeadingShimmer: i } = e;
          return (0, o.jsxs)("div", {
            className: ae().root,
            children: [
              (0, o.jsx)(tn.Shimmer, {
                isActive: t,
                className: ae().cover,
                radius: "l",
              }),
              (0, o.jsxs)("div", {
                className: ae().meta,
                children: [
                  i &&
                    (0, o.jsx)(tn.Shimmer, {
                      isActive: t,
                      className: ae().heading,
                      radius: "s",
                    }),
                  (0, o.jsx)(tn.Shimmer, {
                    isActive: t,
                    className: ae().title,
                    radius: "s",
                  }),
                  (0, o.jsx)(tn.Shimmer, {
                    isActive: t,
                    className: ae().subtitle,
                    radius: "s",
                  }),
                ],
              }),
            ],
          });
        },
        ai = (e, t, i) =>
          Array.from({ length: t }, (t, a) =>
            (0, o.jsx)(at, { isActive: e, withHeadingShimmer: i }, a),
          ),
        aa = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              data: l,
              meta: s,
              containerClassName: n,
              headerClassName: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            _ = (0, c.useId)(),
            g = (0, c.useRef)(null),
            C = (0, c.useMemo)(
              () =>
                i
                  ? ai(a, 6, !0)
                  : null == l
                    ? void 0
                    : l.items.map((e, t) =>
                        (0, o.jsx)(
                          p.nZ5,
                          {
                            objectType: I.OB.Feature,
                            objectId: e.featureId,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: l.items.length,
                            children: (0, o.jsx)(i7, { promotion: e }),
                          },
                          e.featureId,
                        ),
                      ),
              [null == l ? void 0 : l.items, a, i],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(i9().root, m),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(b.ti, {
                className: d,
                labeledForId: _,
                title: s.title,
                controls: (0, o.jsx)(b.J8, {
                  className: i9().controls,
                  carouselRef: g,
                }),
                headingVariant: u,
              }),
              (0, o.jsx)(w.Carousel, {
                className: n,
                ref: g,
                itemClassName: (0, r.W)(i9().item, i9().important),
                "aria-labelledby": _,
                children: C,
              }),
            ],
          });
        },
        al = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(aa, { forwardRef: t, ...e }),
        );
      var as = i(88863),
        ao = i(14924),
        ar = i(65960),
        an = i.n(ar);
      let ad = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerActive: i,
              isShimmerVisible: a,
              data: l,
              meta: s,
              isLoaded: n,
              headerClassName: d,
              setIsNeededToLoad: m,
              tracksContainerClassName: v,
              className: _,
              ...g
            } = e,
            { formatMessage: C } = (0, L.Z)(),
            {
              search: { history: h },
            } = (0, p.oR4)(),
            A = (0, ao.yO)(ao.$t.SEARCH_PAGE),
            y = !(null == l ? void 0 : l.items.length) && n;
          return ((0, c.useLayoutEffect)(
            () => (
              h.shouldUpdateHistory && (m(), h.setShouldUpdateHistory(!1)),
              () => {
                h.hasCleared && m(), h.reset();
              }
            ),
            [h, m],
          ),
          y || h.hasCleared)
            ? (0, o.jsx)("div", {
                ref: t,
                className: (0, r.W)(an().root, an().fallback),
                ...(0, p.tEg)(g),
                ...(0, u.BA)(u.QM.landing.SEARCH_HISTORY_EMPTY),
                children: (0, o.jsx)(S.Caption, {
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: (0, o.jsx)(x.Z, {
                    id: "search.recent-requests-fallback",
                  }),
                }),
              })
            : (0, o.jsxs)("div", {
                ref: t,
                className: an().root,
                ...(0, p.tEg)(g),
                ...(0, u.BA)(u.QM.landing.SEARCH_HISTORY),
                children: [
                  (0, o.jsx)(b.ad, {
                    className: _,
                    shimmer: (0, o.jsx)(b.or, { isActive: i }),
                    isShimmerActive: i,
                    isShimmerVisible: a,
                    itemsCountPerColumn: 5,
                    maxColumnsCount: b.IA.TWO,
                    blockHeaderClassName: d,
                    carouselClassName: v,
                    blockHeaderTitle: s.title,
                    blockHeaderDescription: s.description,
                    viewAllActionLink: s.viewAllActionLink,
                    children:
                      null == l
                        ? void 0
                        : l.items.map((e, t) => {
                            let {
                              objectPosX: i,
                              objectPosY: a,
                              objectsCount: s,
                            } = (0, p.rc9)({
                              index: t,
                              count: l.items.length,
                              itemsCountPerColumn: 5,
                              showedItemsCountInBlock: 10,
                            });
                            switch (e.type) {
                              case eP.Q.NON_MUSIC_ALBUM_ITEM:
                              case eP.Q.ALBUM_ITEM:
                                return (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Album,
                                    objectId: String(e.data.id),
                                    objectPosX: i,
                                    objectPosY: a,
                                    objectsCount: s,
                                    children: (0, o.jsx)(eC.QY, {
                                      album: e.data,
                                    }),
                                  },
                                  e.data.getKey(t),
                                );
                              case eP.Q.ARTIST_ITEM:
                                return (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Artist,
                                    objectId: e.data.id,
                                    objectPosX: i,
                                    objectPosY: a,
                                    objectsCount: s,
                                    children: (0, o.jsx)(eG.GK, {
                                      description: C({
                                        id: "entity-names.singer",
                                      }),
                                      artist: e.data,
                                    }),
                                  },
                                  e.data.getKey(t),
                                );
                              case eP.Q.TRACK_ITEM:
                                return (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Track,
                                    objectId: e.data.id,
                                    objectPosX: i,
                                    objectPosY: a,
                                    objectsCount: s,
                                    children: (0, o.jsx)(ev.F7, {
                                      track: e.data,
                                    }),
                                  },
                                  e.data.getKey(t),
                                );
                              case eP.Q.LIKED_PLAYLIST_ITEM:
                                return (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Playlist,
                                    objectId: e.data.id,
                                    objectPosX: i,
                                    objectPosY: a,
                                    objectsCount: s,
                                    children: (0, o.jsx)(e0.Tq, {
                                      playlist: e.data,
                                    }),
                                  },
                                  e.data.getKey(t),
                                );
                              case eP.Q.WAVE_ITEM:
                                var r;
                                return (0, o.jsx)(
                                  p.nZ5,
                                  {
                                    objectType: I.OB.Wave,
                                    objectId:
                                      null !== (r = e.data.vibe.seeds[0]) &&
                                      void 0 !== r
                                        ? r
                                        : "",
                                    objectPosX: i,
                                    objectPosY: a,
                                    objectsCount: s,
                                    children: (0, o.jsx)(t9.$I, {
                                      vibe: e.data.vibe,
                                      cover: e.data.cover,
                                      description:
                                        e.data.vibe.subtitle ||
                                        C({ id: "entity-names.my-vibe" }),
                                    }),
                                  },
                                  e.data.vibe.getKey(t),
                                );
                              case eP.Q.CLIP_ITEM:
                                if (!A) return null;
                                return (0, o.jsx)(
                                  eL.l8,
                                  { clip: e.data },
                                  e.data.clipId,
                                );
                              default:
                                return null;
                            }
                          }),
                  }),
                  n &&
                    (0, o.jsx)(iA.Button, {
                      onClick: h.clear,
                      className: an().button,
                      radius: "xxxl",
                      variant: "default",
                      size: "default",
                      ...(0, u.BA)(u.QM.landing.SEARCH_HISTORY_CLEAR_BUTTON),
                      children: (0, o.jsx)(x.Z, { id: "search.clear-history" }),
                    }),
                ],
              });
        }),
        ac = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ad, { forwardRef: t, ...e }),
        );
      var au = i(4994),
        am = i.n(au);
      let av = (e) => {
          var t, i, a, l, s, r, n, d;
          let {
              containerClassName: u,
              meta: m,
              data: v,
              forwardRef: _,
              headingVariant: b = "h2",
              ...g
            } = e,
            C = (0, p.s0h)(null == v ? void 0 : v.weblink),
            { theme: h } = (0, p.FgM)(),
            A =
              h === p.Q2A.Light
                ? null == v
                  ? void 0
                  : null === (t = v.lightTheme) || void 0 === t
                    ? void 0
                    : t.imageUrl
                : null == v
                  ? void 0
                  : null === (i = v.darkTheme) || void 0 === i
                    ? void 0
                    : i.imageUrl,
            y = (0, c.useMemo)(() => {
              var e, t;
              return {
                "--text-color":
                  h === p.Q2A.Light
                    ? null == v
                      ? void 0
                      : null === (e = v.lightTheme) || void 0 === e
                        ? void 0
                        : e.textColor
                    : null == v
                      ? void 0
                      : null === (t = v.darkTheme) || void 0 === t
                        ? void 0
                        : t.textColor,
              };
            }, [
              h,
              null == v
                ? void 0
                : null === (a = v.darkTheme) || void 0 === a
                  ? void 0
                  : a.textColor,
              null == v
                ? void 0
                : null === (l = v.lightTheme) || void 0 === l
                  ? void 0
                  : l.textColor,
            ]),
            j = (0, c.useMemo)(() => {
              var e, t, i, a;
              return {
                "--button-color":
                  h === p.Q2A.Light
                    ? null == v
                      ? void 0
                      : null === (e = v.lightTheme) || void 0 === e
                        ? void 0
                        : e.buttonColor
                    : null == v
                      ? void 0
                      : null === (t = v.darkTheme) || void 0 === t
                        ? void 0
                        : t.buttonColor,
                "--button-text-color":
                  h === p.Q2A.Light
                    ? null == v
                      ? void 0
                      : null === (i = v.lightTheme) || void 0 === i
                        ? void 0
                        : i.buttonTextColor
                    : null == v
                      ? void 0
                      : null === (a = v.darkTheme) || void 0 === a
                        ? void 0
                        : a.buttonTextColor,
              };
            }, [
              h,
              null == v
                ? void 0
                : null === (s = v.darkTheme) || void 0 === s
                  ? void 0
                  : s.buttonColor,
              null == v
                ? void 0
                : null === (r = v.lightTheme) || void 0 === r
                  ? void 0
                  : r.buttonColor,
              null == v
                ? void 0
                : null === (n = v.darkTheme) || void 0 === n
                  ? void 0
                  : n.buttonTextColor,
              null == v
                ? void 0
                : null === (d = v.lightTheme) || void 0 === d
                  ? void 0
                  : d.buttonTextColor,
            ]);
          return (0, o.jsx)("section", {
            ref: _,
            title: m.title,
            className: u,
            ...(0, p.tEg)(g),
            children: (0, o.jsxs)("div", {
              className: am().root,
              children: [
                (0, o.jsxs)("div", {
                  className: am().actions,
                  children: [
                    (0, o.jsxs)("div", {
                      className: am().textContainer,
                      children: [
                        !!(null == v ? void 0 : v.title) &&
                          (0, o.jsx)(S.Heading, {
                            weight: "black",
                            size: "xl",
                            className: am().textColor,
                            lineClamp: 2,
                            variant: b,
                            style: y,
                            children: null == v ? void 0 : v.title,
                          }),
                        !!(null == v ? void 0 : v.subtitle) &&
                          (0, o.jsx)(S.Caption, {
                            className: am().textColor,
                            variant: "span",
                            type: "text",
                            size: "l",
                            weight: "medium",
                            lineClamp: 2,
                            style: y,
                            children: null == v ? void 0 : v.subtitle,
                          }),
                      ],
                    }),
                    !!(null == v ? void 0 : v.weblink) &&
                      !!(null == v ? void 0 : v.buttonTitle) &&
                      (0, o.jsx)(iA.Button, {
                        color: "primary",
                        radius: "xxxl",
                        className: am().button,
                        role: "link",
                        onClick: C,
                        style: j,
                        children: (0, o.jsx)(S.Caption, {
                          variant: "span",
                          type: "controls",
                          size: "m",
                          weight: "medium",
                          children: null == v ? void 0 : v.buttonTitle,
                        }),
                      }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: am().imageContainer,
                  children: (0, o.jsx)(tC.Image, {
                    src: A || (null == v ? void 0 : v.imageUrl),
                    withAvatarReplace: !0,
                    fit: "cover",
                    size: 300,
                    withFallback: !1,
                    className: am().image,
                    withLoadingIndicator: !1,
                  }),
                }),
              ],
            }),
          });
        },
        a_ = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(av, { forwardRef: t, ...e }),
        );
      var ap = i(46238),
        ab = i.n(ap);
      let ag = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              isShimmerActive: a,
              containerClassName: l,
              headerClassName: s,
              meta: n,
              data: d,
              headingVariant: u,
              className: m,
              ...v
            } = e,
            g = (0, c.useId)(),
            C = (0, _.useTabsState)(0),
            h = (0, c.useRef)(null),
            A = (0, c.useId)(),
            y = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(tM.E, {
                      isActive: a,
                      ref: h,
                      containerClassName: l,
                      ariaLabelledBy: ""
                        .concat(g, " ")
                        .concat(g, "-description"),
                      length: 9,
                    })
                  : null == d
                    ? void 0
                    : d.items.map((e) =>
                        (0, o.jsx)(
                          _.TabPanel,
                          {
                            name: e.tab.id,
                            value: C.value,
                            elementId: A,
                            children: (0, o.jsx)(tM.y, {
                              ref: h,
                              containerClassName: l,
                              ariaLabelledBy: ""
                                .concat(g, " ")
                                .concat(g, "-description"),
                              items: e.data,
                            }),
                          },
                          e.tab.id,
                        ),
                      ),
              [null == d ? void 0 : d.items, i, a, l, g, C.value, A],
            );
          return (0, o.jsxs)("section", {
            className: (0, r.W)(ab().root, m),
            ref: t,
            ...(0, p.tEg)(v),
            children: [
              (0, o.jsx)(b.ti, {
                className: (0, r.W)(s, ab().header, ab().important),
                title: n.title,
                description: n.description,
                labeledForId: g,
                viewAllActionLink: n.viewAllActionLink,
                controls: (0, o.jsx)(b.J8, {
                  className: ab().controls,
                  carouselRef: h,
                }),
                headingVariant: u,
              }),
              (0, o.jsx)(b.no, {
                isShimmerVisible: i,
                className: (0, r.W)(l, ab().tabCarousel, ab().important),
                elementId: A,
                shimmer: (0, o.jsx)(b.tS, {
                  isActive: a,
                  className: (0, r.W)(l, ab().tabCarousel, ab().important),
                  shimmerClassName: ab().tabShimmer,
                }),
                "aria-labelledby": g,
                ...C,
                children:
                  null == d
                    ? void 0
                    : d.items.map((e) => {
                        let { tab: t } = e;
                        return (0, o.jsx)(
                          b.OK,
                          {
                            className: (0, r.W)(ab().tab, ab().important),
                            value: t.id,
                            "aria-label": t.title,
                            title: t.title,
                          },
                          t.id,
                        );
                      }),
              }),
              y,
            ],
          });
        },
        aC = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(ag, { forwardRef: t, ...e }),
        );
      var ah = i(4062),
        aA = i.n(ah),
        ay = i(92090),
        aj = i.n(ay);
      let aT = (0, n.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, p.oR4)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(b.AH, {
                isActive: !0,
                className: aj().titleShimmer,
                textClassName: aj().titleTextShimmer,
              }),
              (0, o.jsx)(b.AH, {
                isActive: !0,
                className: aj().descriptionShimmer,
                textClassName: aj().textShimmer,
              }),
              (0, o.jsx)(b.AH, {
                isActive: !0,
                className: aj().descriptionShimmer,
                textClassName: aj().textShimmer,
              }),
              (0, o.jsx)(b.AH, {
                isActive: !0,
                className: aj().descriptionShimmer,
                textClassName: aj().textShimmer,
              }),
              e &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(b.AH, {
                      isActive: !0,
                      className: aj().descriptionShimmer,
                      textClassName: aj().textShimmer,
                    }),
                    (0, o.jsx)(b.AH, {
                      isActive: !0,
                      className: aj().descriptionShimmer,
                      textClassName: aj().textShimmer,
                    }),
                  ],
                }),
            ],
          });
        }),
        aI = Array.from({ length: 3 }, () => b.k2.src),
        aL = (0, n.Pi)((e) => {
          let {
              forwardRef: t,
              isShimmerVisible: i,
              data: a,
              headingVariant: l = "h2",
            } = e,
            { formatMessage: s } = (0, L.Z)(),
            { wizard: r } = (0, p.oR4)(),
            n = (0, c.useMemo)(
              () =>
                (0, o.jsx)("div", {
                  className: aA().images,
                  ...(0, u.BA)(u.QM.landing.WIZARD_BLOCK_ARTISTS),
                  children: aI.map((e, t) => {
                    var i;
                    let l =
                      null == a
                        ? void 0
                        : null === (i = a.artists[t]) || void 0 === i
                          ? void 0
                          : i.coverUri;
                    return (0, o.jsx)(
                      N.Paper,
                      {
                        className: aA().paper,
                        radius: "round",
                        children: (0, o.jsx)(tC.Image, {
                          className: aA().image,
                          src: l || e,
                          fit: "contain",
                          withAvatarReplace: !!l,
                          "aria-hidden": !0,
                          fallbackIconSize: "s",
                          ...(0, u.BA)(
                            ""
                              .concat(
                                u.QM.landing.WIZARD_BLOCK_ARTIST_COVER,
                                "_",
                              )
                              .concat(t),
                          ),
                        }),
                      },
                      t,
                    );
                  }),
                }),
              [null == a ? void 0 : a.artists],
            ),
            d = (0, c.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(aT, {})
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(S.Heading, {
                          variant: l,
                          size: "xs",
                          className: aA().title,
                          ...(0, u.BA)(u.QM.landing.WIZARD_BLOCK_TITLE),
                          children: null == a ? void 0 : a.title,
                        }),
                        (null == a ? void 0 : a.description) &&
                          (0, o.jsx)(S.Heading, {
                            variant: "h3",
                            size: "l",
                            className: aA().description,
                            lineClamp: 5,
                            ...(0, u.BA)(u.QM.landing.WIZARD_BLOCK_TEXT),
                            children: a.description,
                          }),
                      ],
                    }),
              [
                i,
                l,
                null == a ? void 0 : a.title,
                null == a ? void 0 : a.description,
              ],
            );
          return (0, o.jsxs)("section", {
            className: aA().root,
            ref: t,
            ...(0, u.BA)(u.QM.landing.WIZARD_BLOCK),
            children: [
              n,
              d,
              (0, o.jsx)(iA.Button, {
                className: aA().button,
                icon: (0, o.jsx)(tg.Icon, {
                  variant: "link",
                  size: "xxs",
                  className: aA().buttonIcon,
                }),
                color: "secondary",
                size: "m",
                iconPosition: "right",
                radius: "xxxl",
                onClick: r.modal.open,
                ...(0, u.BA)(u.QM.landing.WIZARD_BLOCK_BUTTON),
                children: s({ id: "wizard.buttonText" }),
              }),
            ],
          });
        }),
        ax = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(aL, { forwardRef: t, ...e }),
        ),
        af = {
          [T.g.COLLECTION_PLAYLIST_WITH_LIKES]: i3,
          [T.g.OPEN_PLAYLIST]: i3,
          [T.g.SMART_OPEN_PLAYLIST]: i3,
          [T.g.NON_MUSIC_OPEN_PLAYLIST]: i3,
          [T.g.COLLECTION_ARTISTS]: eZ,
          [T.g.COLLECTION_ARTISTS_AND_TOP]: eZ,
          [T.g.PERSONAL_ARTISTS]: eZ,
          [T.g.NEW_STARS_ARTISTS]: eZ,
          [T.g.EDITORIAL_ARTISTS]: eZ,
          [T.g.META_TAG_POPULAR_ARTISTS]: eZ,
          [T.g.MICRO_GENRE_ARTISTS]: eZ,
          [T.g.MICRO_GENRE_TOP_ARTISTS]: eZ,
          [T.g.META_TAG_ARTISTS]: eZ,
          [T.g.SIMILAR_ARTISTS]: eZ,
          [T.g.NEW_RELEASES]: iD,
          [T.g.EDITORIAL_NEW_RELEASES]: iD,
          [T.g.NEW_PLAYLISTS]: iS,
          [T.g.EDITORIAL_COMPILATION]: iS,
          [T.g.RECOMMENDED_PLAYLISTS]: iS,
          [T.g.META_TAG_POPULAR_PLAYLISTS]: iS,
          [T.g.META_TAG_PLAYLISTS]: iS,
          [T.g.META_TAG_NEW_ALBUMS]: iS,
          [T.g.MICRO_GENRE_ALBUMS]: iS,
          [T.g.META_TAG_ALBUMS]: iS,
          [T.g.ARTIST_PLAYLISTS]: iS,
          [T.g.ARTIST_ALBUMS]: iS,
          [T.g.ARTIST_COMPILATIONS]: iS,
          [T.g.ARTIST_STUDIO_ALBUMS]: iS,
          [T.g.PROMOTIONS]: al,
          [T.g.EDITORIAL_PROMOTIONS]: al,
          [T.g.NON_MUSIC_PROMOTIONS]: al,
          [T.g.PERSONAL_PLAYLISTS]: iZ,
          [T.g.REWIND_PLAYLISTS]: iZ,
          [T.g.META_TAG_WAVE]: ii,
          [T.g.MICRO_GENRE_WAVE]: ii,
          [T.g.MICRO_GENRE_SIMILAR_WAVE]: tU,
          [T.g.META_TAG_SIMILAR_WAVE]: tU,
          [T.g.EDITORIAL_WAVES]: tU,
          [T.g.CONCERTS_PERSONAL]: t_,
          [T.g.CONCERTS_TOP]: t_,
          [T.g.EDITORIAL_CONCERTS]: t_,
          [T.g.CLIPS]: eN,
          [T.g.ARTIST_CLIPS]: eN,
          [T.g.CHART_TRACKS]: eI,
          [T.g.COLLECTION_KIDS]: e6,
          [T.g.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: tr,
          [T.g.COLLECTION_PLAYLISTS_CREATED]: e3,
          [T.g.COLLECTION_PLAYLISTS_LIKED]: e8,
          [T.g.ALBUM_PROMO]: F,
          [T.g.SIMPLE_ALBUM_PROMO]: ea,
          [T.g.ITEM_LIST]: t$,
          [T.g.OVERVIEW]: iK,
          [T.g.COLLECTION_ALBUMS]: eV,
          [T.g.COLLECTION_CLIPS]: e$,
          [T.g.RECENTLY_PLAYED]: as.R,
          [T.g.IN_STYLE]: tF,
          [T.g.SPECIAL]: a_,
          [T.g.WIZARD]: ax,
          [T.g.WAVES]: aC,
          [T.g.MIXES]: ir,
          [T.g.MIXES_GRID]: iv,
          [T.g.MIXES_MUSIC]: ig,
          [T.g.NEUROMUSIC]: ix,
          [T.g.LIKES_AND_HISTORY]: t6,
          [T.g.NON_MUSIC_EDITORIAL_COMPILATION]: iU.j,
          [T.g.COLLECTION_ALBUMS_PRESAVES]: eY,
          [T.g.CHART_ALBUMS]: iW.m,
          [T.g.DONATIONS]: tO,
          [T.g.CONTINUE_LISTEN]: tk,
          [T.g.DISLIKES]: tR,
          [T.g.COLLECTION_DOWNLOADED_TRACKS]: e2,
          [T.g.HISTORY]: ac,
          [T.g.ARTIST_CONCERTS]: eo,
          [T.g.ARTIST_POPULAR_TRACKS]: eg,
          [T.g.ARTIST_RELEASE]: eA,
          [T.g.FAMILIAR_YOU]: tz,
          [T.g.ARTIST_PICK]: em,
          [T.g.ARTIST_UPCOMING_RELEASE]: ej,
        },
        aN = (e) => !!(e && "object" == typeof e && "current" in e),
        aS = (0, n.Pi)((e) => {
          let {
              landing: t,
              block: i,
              isIntersecting: a,
              forwardRef: l,
              onLoad: s,
              className: n,
              containerClassName: d,
              ...m
            } = e,
            {
              isNeededToLoad: v,
              isLoading: _,
              isLoaded: b,
              isRejected: C,
              isShimmerVisible: y,
              isShimmerActive: T,
              isVisible: I,
              id: L,
              type: x,
              meta: f,
              data: N,
              hasSentAnalyticsOnLoaded: S,
              setHasSentAnalyticsOnLoaded: k,
              setOutdated: E,
              setIsNeededToLoad: R,
            } = i;
          if ((0, h.Z)(i)) return null;
          let V = af[i.type],
            P = (0, p.X0V)(),
            { settings: w, experiments: O } = (0, p.oR4)(),
            M =
              !O.checkExperiment(p.peG.WebNextVirtualSkeleton, "on") &&
              w.browserInfo &&
              !w.browserInfo.isSafari;
          (0, c.useEffect)(() => {
            (a || !I) && v && (0, g.F)(f) && t.getBlock(i);
          }, [i, a, v, I, t, f]),
            (0, c.useEffect)(() => {
              (b || C) && (null == s || s());
            }, [b, C, s]),
            (0, c.useEffect)(() => {
              !S && b && (P(), k(!0));
            }, [S, b, P, k]);
          let B = (0, A.V)(() => {
            if (aN(l)) {
              var e;
              return null === (e = l.current) || void 0 === e
                ? void 0
                : e.clientHeight;
            }
            return 0;
          });
          return I
            ? (0, o.jsx)(
                V,
                {
                  setIsNeededToLoad: R,
                  setOutdated: E,
                  isLoaded: b,
                  isLoading: _,
                  isShimmerVisible: y,
                  isShimmerActive: T,
                  isRejected: C,
                  tracksContainerClassName: j().tracksContainer,
                  containerClassName: (0, r.W)(j().container, j().important, d),
                  className: (0, r.W)(
                    { [j().container_withContentVisibility]: M && B },
                    n,
                  ),
                  headerClassName: j().headerContainer,
                  meta: f,
                  data: N,
                  type: x,
                  ref: l,
                  headingVariant: "h2",
                  "data-intersection-property-id": i.id,
                  ...(0, u.BA)(i.type),
                  ...m,
                },
                L,
              )
            : null;
        }),
        ak = (0, n.Pi)((e) => {
          let { ...t } = e;
          return (0, o.jsx)(p.Ja5, {
            blockId: t.block.id,
            blockType: t.block.type,
            blockIdForFrom: ""
              .concat(p.BEo.DISCOVERY_BLOCK, "-")
              .concat(t.block.id),
            blockPosX: 1,
            blockPosY: t.blockIndex + 1,
            objectsCount: t.block.objectsCount,
            children: (0, o.jsx)(aS, { ...t }),
          });
        });
      var aE = i(712),
        aR = i.n(aE);
      let aV = (0, n.Pi)((e) => {
          let { forwardRef: t, data: i, ...a } = e,
            l = (0, A.V)(() => {
              if (null == i ? void 0 : i.release)
                return (0, o.jsx)(ak, {
                  ...a,
                  className: aR().release,
                  containerClassName: aR().releaseCard,
                  block: i.release,
                });
            }),
            s = (0, A.V)(() => {
              if (null == i ? void 0 : i.upcomingRelese)
                return (0, o.jsx)(ak, {
                  ...a,
                  className: aR().release,
                  containerClassName: aR().releaseCard,
                  block: i.upcomingRelese,
                });
            }),
            n = (0, A.V)(() => {
              if (null == i ? void 0 : i.popularTracks)
                return (0, o.jsx)(ak, {
                  ...a,
                  className: (0, r.W)(aR().popularTracks, {
                    [aR().popularTracks_withReleaseBlock]: !!(null != s
                      ? s
                      : l),
                  }),
                  block: i.popularTracks,
                });
            });
          return (0, o.jsx)("section", {
            ref: t,
            className: aR().root,
            ...(0, p.tEg)(a),
            children: (0, o.jsxs)("div", {
              className: aR().container,
              children: [n, null != s ? s : l],
            }),
          });
        }),
        aP = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(aV, { forwardRef: t, ...e }),
        );
      var aw = i(92294),
        aO = i.n(aw);
      let aM = (0, n.Pi)((e) => {
          let { forwardRef: t, data: i, ...a } = e,
            l = (0, A.V)(() => {
              if (null == i ? void 0 : i.familiarYou)
                return (0, o.jsx)(ak, { ...a, block: i.familiarYou });
            }),
            s = (0, A.V)(() => {
              if (null == i ? void 0 : i.artistPick)
                return (0, o.jsx)(ak, { ...a, block: i.artistPick });
            });
          return (0, o.jsxs)("section", {
            ref: t,
            className: aO().root,
            ...(0, p.tEg)(a),
            children: [s, l],
          });
        }),
        aB = (0, c.forwardRef)((e, t) =>
          (0, o.jsx)(aM, { forwardRef: t, ...e }),
        ),
        aD = {
          [T.g.ARTIST_POPULAR_TRACKS_AND_RELEASES]: aP,
          [T.g.FAMILIAR_YOU_AND_ARTIST_PICK]: aB,
        },
        aW = (0, n.Pi)((e) => {
          let { block: t, forwardRef: i, ...a } = e;
          if (!(0, h.Z)(t) || !t.isVisible) return null;
          let l = aD[t.type];
          return (0, o.jsx)(l, {
            data: t.data,
            ref: i,
            "data-intersection-property-id": t.id,
            ...a,
          });
        }),
        aU = (0, n.Pi)((e) => {
          let { ...t } = e;
          return (0, o.jsx)(p.Ja5, {
            blockId: t.block.id,
            blockType: t.block.type,
            blockIdForFrom: ""
              .concat(p.BEo.DISCOVERY_BLOCK, "-")
              .concat(t.block.id),
            blockPosX: 1,
            blockPosY: t.blockIndex + 1,
            objectsCount: t.block.objectsCount,
            children: (0, o.jsx)(aW, { ...t }),
          });
        }),
        aY = (0, n.Pi)((e) =>
          (0, h.Z)(e.block)
            ? (0, o.jsx)(aU, { ...e })
            : (0, o.jsx)(ak, { ...e }),
        );
      var aG = i(23100),
        aH = i.n(aG),
        az = i(22874),
        aK = i(43494),
        aQ = i.n(aK);
      let aZ = (e) => {
          let { reloadBlocks: t, closeToast: i } = e,
            a = (0, c.useRef)(null),
            { formatMessage: l } = (0, L.Z)();
          (0, c.useEffect)(() => {
            var e;
            null === (e = a.current) || void 0 === e || e.focus();
          }, []);
          let s = (0, c.useMemo)(
            () =>
              (0, o.jsxs)("div", {
                className: aQ().message,
                children: [
                  (0, o.jsx)(S.Caption, {
                    className: aQ().text,
                    variant: "div",
                    type: "controls",
                    size: "m",
                    children: (0, o.jsx)(x.Z, {
                      id: "error-messages.error-load-part-page",
                    }),
                  }),
                  (0, o.jsx)(iA.Button, {
                    ref: a,
                    className: aQ().button,
                    onClick: t,
                    variant: "text",
                    "aria-label": l({
                      id: "interface-actions.reload-part-page",
                    }),
                    icon: (0, o.jsx)(tg.Icon, {
                      variant: "reset",
                      size: "xxs",
                      className: aQ().icon,
                    }),
                  }),
                ],
              }),
            [l, t],
          );
          return (0, o.jsx)(b.Yj, {
            className: (0, r.W)(aQ().root, aQ().important),
            message: s,
            closeToast: i,
          });
        },
        aF = (e) => {
          let { landing: t, tab: i } = e,
            { notify: a, dismiss: l } = (0, p.d$W)(),
            s = (0, c.useRef)(),
            r = (0, m.W)(() => {
              i.blocks.forEach((e) => {
                e.isRejected && (0, g.F)(e.meta) && t.getBlock(e);
              }),
                l({ notificationId: s.current }),
                i.setShouldReloadNotification(!1);
            });
          (0, c.useEffect)(() => {
            i.hasErrorBlocks &&
              !i.shouldReloadNotification &&
              setTimeout(() => {
                (s.current = a((0, o.jsx)(aZ, { reloadBlocks: r }), {
                  containerId: p.W$x.ERROR,
                  autoClose: !1,
                })),
                  i.setShouldReloadNotification(!0);
              });
          }, [a, r, i.hasErrorBlocks, i.shouldReloadNotification, i]),
            (0, c.useEffect)(
              () => () => {
                l(), (0, az.fh)(i) && i.setShouldReloadNotification(!1);
              },
              [l, i],
            );
        },
        aX = (0, n.Pi)((e) => {
          var t;
          let { landing: i, tab: a, tabIndex: l } = e,
            s = (0, c.useMemo)(
              () => a.blocks.map(() => (0, c.createRef)()),
              [a.blocks],
            ),
            r = (0, v.S1)(s, { freezeOnceVisible: !0 });
          return (
            aF({ landing: i, tab: a }),
            (0, o.jsx)(p.e4N, {
              children: (0, o.jsx)(p.hwk, {
                tabId: a.meta.id,
                tabPos: l + 1,
                isTabSelectedByDefault:
                  (null === (t = i.meta) || void 0 === t
                    ? void 0
                    : t.selectedTabIndex) === l,
                children: (0, o.jsx)("div", {
                  className: aH().root,
                  children: a.blocks.map((e, t) => {
                    let { isIntersecting: a } = r[e.id] || {};
                    return (0, o.jsx)(
                      aY,
                      {
                        landing: i,
                        block: e,
                        blockIndex: t,
                        isIntersecting: a,
                        forwardRef: s[t],
                      },
                      e.id,
                    );
                  }),
                }),
              }),
            })
          );
        });
      var aq = i(26704),
        aJ = i(26669),
        a$ = i(27449),
        a0 = i.n(a$);
      let a5 = (0, n.Pi)((e) => {
          var t;
          let {
              virtualItem: i,
              resizeObserver: a,
              isScrolling: l,
              style: s,
              ...r
            } = e,
            [n, d] = (0, aJ.z)(),
            [u, m] = (0, aJ.z)(),
            { isIntersecting: _ } =
              null !==
                (t = (0, v.S1)(
                  [{ current: n }],
                  !n ||
                    (null == n ? void 0 : n.dataset.intersectionPropertyId) !==
                      r.block.id,
                )[r.block.id]) && void 0 !== t
                ? t
                : {};
          return (
            (0, c.useEffect)(
              () => (
                u && a && a.observe(u),
                () => {
                  u && a && a.unobserve(u);
                }
              ),
              [u, a],
            ),
            (0, o.jsx)("div", {
              "data-index": i.index,
              className: a0().root,
              ref: m,
              style: s,
              children: (0, o.jsx)(aY, {
                ...r,
                forwardRef: d,
                isIntersecting: _ && !l,
              }),
            })
          );
        }),
        a1 = (0, n.Pi)((e) => {
          var t, i;
          let { landing: a, tab: l, tabIndex: s } = e,
            r = (0, d.useSearchParams)(),
            {
              settings: { isMobile: n },
            } = (0, p.oR4)(),
            u = (0, c.useRef)(!0),
            [v, _] = (0, c.useState)(() =>
              Array.from({ length: l.blocks.length }, (e, t) => t),
            ),
            b = (0, m.W)(() => {
              let e = [];
              l.blocks.forEach((t, i) => {
                var a;
                (t.isVisible ||
                  ((null === (a = t.meta) || void 0 === a
                    ? void 0
                    : a.showPolicy) === aq.V.LOAD_AND_SHOW &&
                    t.isNeededToLoad)) &&
                  e.push(i);
              }),
                _(e);
            }),
            g = (0, m.W)((e) => {
              let t = v[e];
              if (void 0 === t) return 300;
              let i = l.blocks[t];
              return (null == i ? void 0 : i.isVisible) ? 300 : 0;
            }),
            {
              virtualizer: C,
              resizeObserver: h,
              setContainerRef: A,
            } = (0, p.gi4)({
              count: null !== (i = v.length) && void 0 !== i ? i : 0,
              gap: n ? 16 : 24,
              getEstimateSize: g,
            });
          (0, c.useEffect)(() => {
            var e;
            if (!u.current) return;
            let t = r.get(p.wxR.BLOCK),
              i = l.blocks.findIndex((e) => e.id === t);
            if (!v.includes(i)) return;
            let a =
              null === (e = C.getOffsetForIndex(i, "center")) || void 0 === e
                ? void 0
                : e[0];
            C.scrollToIndex(i, { align: "center", behavior: "auto" }),
              C.scrollOffset &&
                a &&
                100 > Math.abs(C.scrollOffset - a) &&
                (u.current = !1);
          }, [v, r, l.blocks, C]);
          let y = C.getTotalSize(),
            j = C.getVirtualItems();
          return (
            aF({ landing: a, tab: l }),
            (0, o.jsx)(p.e4N, {
              children: (0, o.jsx)(p.hwk, {
                tabId: l.meta.id,
                tabPos: s + 1,
                isTabSelectedByDefault:
                  (null === (t = a.meta) || void 0 === t
                    ? void 0
                    : t.selectedTabIndex) === s,
                children: (0, o.jsx)("div", {
                  className: aH().root,
                  style: { height: "".concat(y, "px") },
                  ref: A,
                  children: j.map((e) => {
                    let t = v[e.index],
                      i = l.blocks[Number(t)];
                    return i
                      ? (0, o.jsx)(
                          a5,
                          {
                            virtualItem: e,
                            resizeObserver: h,
                            landing: a,
                            block: i,
                            blockIndex: Number(t),
                            isScrolling: C.isScrolling,
                            onLoad: b,
                            style: {
                              transform: "translate3d(0, ".concat(
                                e.start - C.options.scrollMargin,
                                "px, 0)",
                              ),
                            },
                          },
                          e.key,
                        )
                      : null;
                  }),
                }),
              }),
            })
          );
        }),
        a3 = (0, n.Pi)((e) => {
          var t, i, a;
          let {
              landing: l,
              upperBlocks: s,
              headerConcealerComponent: n,
              tabsState: d,
              containerClassName: v,
              containerStyle: g,
              headerClassName: C,
              tabWithHeadingTitle: h,
              tabWithCovers: A,
              tabWithSubtitle: y,
              stickyHeaderClassName: j,
              staticHeaderClassName: T,
              stickyHeaderTabIndex: I,
              headerVariant: L = b.bm.COMPOSITE,
            } = e,
            { tabs: x } = l,
            f = (0, c.useId)(),
            { isScrolling: N } = (0, c.useContext)(b.pI),
            { contentScrollRef: S } = (0, p.$Y6)(),
            {
              experiments: k,
              settings: { isMobile: E },
            } = (0, p.oR4)(),
            R = k.checkExperiment(p.peG.WebNextVirtualSkeleton, "on") ? a1 : aX,
            V = (0, m.W)((e) => {
              var t;
              E ? window.scrollTo(0, 0) : S && (S.scrollTop = 0),
                null === (t = d.onTabChange) || void 0 === t || t.call(d, e);
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              s,
              n,
              (0, o.jsx)(b.h4, {
                className: (0, r.W)(aH().header, C),
                variant: L,
                stickyClassName: j,
                staticClassName: T,
                stickyChild: (0, o.jsx)(b.no, {
                  isShimmerVisible: x.isLoading || l.isLoading,
                  className: aH().stickyTabs,
                  shimmer: (0, o.jsx)(b.tS, {}),
                  elementId: f,
                  ...(0, u.BA)(u.QM.landing.MAIN_TABS),
                  value: d.value,
                  onTabChange: V,
                  children:
                    null === (t = x.data) || void 0 === t
                      ? void 0
                      : t.map((e, t) => {
                          let { meta: i } = e;
                          return (0, o.jsx)(
                            b.OK,
                            {
                              className: aH().tab,
                              value: t,
                              "aria-label": i.title,
                              title: i.title,
                              "aria-hidden": !N && L !== b.bm.STICKY,
                              tabIndex: null != I ? I : N ? 0 : -1,
                            },
                            i.id,
                          );
                        }),
                }),
                children: (0, o.jsx)(b.no, {
                  className: (0, r.W)(aH().tabCarousel, aH().important),
                  elementId: f,
                  ...(0, u.BA)(u.QM.landing.MAIN_TABS),
                  ...d,
                  children:
                    null === (i = x.data) || void 0 === i
                      ? void 0
                      : i.map((e, t) => {
                          let { meta: i, data: a } = e;
                          return (0, o.jsx)(
                            b.OK,
                            {
                              className: aH().tab,
                              value: t,
                              "aria-label": i.title,
                              title: i.title,
                              subtitle: null == a ? void 0 : a.subtitle,
                              covers: null == a ? void 0 : a.covers,
                              "aria-hidden": N,
                              tabIndex: N ? -1 : 0,
                              withCovers: A,
                              withSubtitle: y,
                              withHeading: h,
                              isShimmerVisible:
                                x.loadingState === p.Gui.PENDING,
                            },
                            i.id,
                          );
                        }),
                }),
              }),
              (0, o.jsx)("div", {
                className: v,
                style: g,
                children:
                  null === (a = x.data) || void 0 === a
                    ? void 0
                    : a.map((e, t) =>
                        (0, o.jsx)(
                          _.TabPanel,
                          {
                            className: aH().tabPanel,
                            name: t,
                            value: d.value,
                            elementId: f,
                            children: (0, o.jsx)(R, {
                              landing: l,
                              tab: e,
                              tabIndex: t,
                            }),
                          },
                          e.meta.id,
                        ),
                      ),
              }),
            ],
          });
        }),
        a4 = (0, n.Pi)((e) => {
          var t, i, a, l;
          let {
              landing: s,
              headerConcealerComponent: r,
              errorComponent: n,
              containerClassName: u,
              headerClassName: m,
              containerStyle: b,
              tabWithHeadingTitle: g,
              tabWithCovers: h,
              tabWithSubtitle: A,
              staticHeaderClassName: y,
              stickyHeaderClassName: j,
              stickyHeaderTabIndex: T,
              headerVariant: I,
            } = e,
            L = (0, d.useSearchParams)(),
            x = (0, p.m5R)(),
            f = C(s),
            { experiments: N } = (0, p.oR4)(),
            S = N.checkExperiment(p.peG.WebNextVirtualSkeleton, "on") ? a1 : aX,
            k = (0, c.useMemo)(() => {
              var e;
              if (!s.isLoaded) return null;
              let t = L.get(p.wxR.TAB),
                i =
                  null === (e = s.tabs.data) || void 0 === e
                    ? void 0
                    : e.findIndex((e) => e.meta.id === t);
              return "number" == typeof i && i >= 0 ? i : null;
            }, [s.isLoaded, s.tabs.data, L]),
            E = (0, _.useTabsState)(
              null !==
                (l =
                  null != k
                    ? k
                    : null === (t = s.meta) || void 0 === t
                      ? void 0
                      : t.selectedTabIndex) && void 0 !== l
                ? l
                : 0,
            ),
            R = (0, c.useCallback)(
              (e) => {
                var t, i, a;
                let l =
                  null === (i = s.tabs.data) || void 0 === i
                    ? void 0
                    : null === (t = i[e]) || void 0 === t
                      ? void 0
                      : t.meta.id;
                if (
                  (e !== E.value && f(E.value),
                  null === (a = E.onTabChange) || void 0 === a || a.call(E, e),
                  l)
                ) {
                  let e = (0, p.rdz)(p.wxR.TAB, l);
                  e && x(e);
                }
              },
              [x, s.tabs.data, f, E],
            ),
            V = !!(s.tabs.data && s.tabs.data.length > 1),
            P = null === (i = s.tabs.data) || void 0 === i ? void 0 : i[0],
            w = (0, c.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null === (e = s.upperBlocks) || void 0 === e
                    ? void 0
                    : e.map(() => (0, c.createRef)())) && void 0 !== t
                ? t
                : [];
            }, [s.upperBlocks]),
            O = (0, v.S1)(w, { freezeOnceVisible: !0 }),
            M = (0, c.useMemo)(() => {
              var e;
              if (
                null === (e = s.upperBlocks) || void 0 === e ? void 0 : e.length
              )
                return (0, o.jsx)(p.hwk, {
                  tabId: "",
                  tabPos: -1,
                  isTabSelectedByDefault: !1,
                  children: (0, o.jsx)("div", {
                    className: aH().upperBlocks,
                    children: s.upperBlocks.map((e, t) => {
                      let { isIntersecting: i } = O[e.id] || {};
                      return (0, o.jsx)(
                        aY,
                        {
                          landing: s,
                          block: e,
                          blockIndex: t,
                          isIntersecting: i,
                          forwardRef: w[t],
                        },
                        e.id,
                      );
                    }),
                  }),
                });
            }, [
              null === (a = s.upperBlocks) || void 0 === a ? void 0 : a.length,
              s,
              O,
              w,
            ]);
          return V
            ? (0, o.jsx)(a3, {
                landing: s,
                upperBlocks: M,
                headerConcealerComponent: r,
                tabsState: { value: E.value, onTabChange: R },
                containerClassName: u,
                containerStyle: b,
                headerClassName: m,
                tabWithHeadingTitle: g,
                tabWithCovers: h,
                tabWithSubtitle: A,
                staticHeaderClassName: y,
                stickyHeaderClassName: j,
                stickyHeaderTabIndex: T,
                headerVariant: I,
              })
            : P
              ? (0, o.jsxs)("div", {
                  className: u,
                  style: b,
                  children: [
                    M,
                    r,
                    (0, o.jsx)(S, { landing: s, tab: P, tabIndex: 0 }),
                  ],
                })
              : M
                ? (0, o.jsx)(p.e4N, {
                    children: (0, o.jsxs)("div", {
                      className: u,
                      style: b,
                      children: [M, r],
                    }),
                  })
                : s.isLoadedAndEmpty
                  ? (0, o.jsx)("div", { className: u, style: b, children: n })
                  : null;
        });
    },
    1045: function (e, t, i) {
      "use strict";
      i.d(t, {
        E: function () {
          return p;
        },
        y: function () {
          return _;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(65067),
        o = i(4875),
        r = i(59100),
        n = i(9152),
        d = i(13534),
        c = i(27378),
        u = i.n(c);
      let m = (e) => {
          let {
            forwardRef: t,
            items: i,
            itemClassName: s,
            containerClassName: c,
            ariaLabelledBy: m,
          } = e;
          return (0, a.jsx)(r.Carousel, {
            ref: t,
            className: c,
            itemClassName: (0, l.W)(u().item, u().important, s),
            "aria-labelledby": m,
            children:
              null == i
                ? void 0
                : i.map((e, t) =>
                    (0, a.jsx)(
                      d.nZ5,
                      {
                        objectType: o.OB.Wave,
                        objectId: e.stationId,
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: null == i ? void 0 : i.length,
                        children: (0, a.jsx)(n.k_, { vibe: e }),
                      },
                      e.stationId,
                    ),
                  ),
          });
        },
        v = (e) => {
          let {
            forwardRef: t,
            isActive: i,
            itemClassName: s,
            containerClassName: o,
            ariaLabelledBy: d,
            length: c,
          } = e;
          return (0, a.jsx)(r.Carousel, {
            ref: t,
            className: o,
            itemClassName: (0, l.W)(u().item, u().important, s),
            "aria-labelledby": d,
            children: Array.from({ length: c }, (e, t) =>
              (0, a.jsx)(n.xJ, { isActive: i }, t),
            ),
          });
        },
        _ = (0, s.forwardRef)((e, t) => (0, a.jsx)(m, { forwardRef: t, ...e })),
        p = (0, s.forwardRef)((e, t) => (0, a.jsx)(v, { forwardRef: t, ...e }));
    },
    34103: function (e, t, i) {
      "use strict";
      i.d(t, {
        Concert: function () {
          return y;
        },
      });
      var a,
        l,
        s = i(75441),
        o = i(32358),
        r = i(65067),
        n = i(9317),
        d = i(4875),
        c = i(35846),
        u = i(55188),
        m = i(39054),
        v = i(59091),
        _ = i(67126),
        p = i(17392),
        b = i(60773),
        g = i(13534);
      let C = (e) => {
        let t;
        if (e) {
          let { h: i, s: a, l } = (0, g.sEc)(e);
          t =
            "linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla("
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0) 40%, \n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.1) 43%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.2) 46%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.3) 49%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.4) 52%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.5) 55%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.6) 58%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.7) 61%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.8) 64%,\n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 0.9) 67%, \n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 1) 70%, \n            hsla(")
              .concat(i, "deg, ")
              .concat(a, "%, ")
              .concat(l, "%, 1) 100%\n        )");
        }
        return { "--concert-card-linear-gradient": t };
      };
      var h = i(64802),
        A = i.n(h);
      ((a = l || (l = {})).SPACE = "Space"), (a.ENTER = "Enter");
      let y = (e) => {
        let { concert: t } = e,
          {
            title: i,
            datetime: a,
            city: l,
            place: h,
            contentRating: y,
            cover: j,
            dataSessionId: T,
            rank: I,
            isCashbackExperimentEnabled: L,
            cashbackTitle: x,
          } = t,
          { formatDate: f } = (0, n.Z)(),
          { ref: N, intersectionPropertyId: S } = (0, g.VfV)(),
          k = (0, g.zxW)(),
          { state: E, toggleTrue: R, toggleFalse: V } = (0, u.O)(!1),
          P = (0, r.useMemo)(() => {
            if (L && x)
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(_.y, { children: f(a, (0, g.Svi)()) }),
                  (0, s.jsxs)(p.Caption, {
                    variant: "span",
                    type: "text",
                    size: "m",
                    weight: "medium",
                    className: A().descriptionContainer,
                    children: [
                      (0, s.jsx)(p.Caption, {
                        variant: "span",
                        type: "text",
                        size: "m",
                        weight: "medium",
                        lineClamp: 1,
                        className: A().description,
                        ...(0, c.BA)(c.QM.landing.CONCERT_DESCRIPTION),
                        children: h,
                      }),
                      (0, s.jsx)(p.Caption, {
                        variant: "span",
                        type: "text",
                        size: "m",
                        weight: "medium",
                        className: A().description,
                        "aria-hidden": !0,
                        children: " • ",
                      }),
                      y &&
                        (0, s.jsx)(p.Caption, {
                          variant: "span",
                          type: "text",
                          size: "m",
                          weight: "medium",
                          className: A().description,
                          children: y,
                        }),
                    ],
                  }),
                  (0, s.jsx)(b.aD, { className: A().cashback, title: x }),
                ],
              });
            let e = [];
            return (
              a && e.push(f(a, (0, g.Svi)())),
              y && e.push(y),
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(p.Caption, {
                    variant: "span",
                    type: "text",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    className: A().description,
                    ...(0, c.BA)(c.QM.landing.CONCERT_DESCRIPTION),
                    children: h,
                  }),
                  (0, s.jsxs)(_.y, { children: [f(a, (0, g.Svi)()), " ", y] }),
                  (0, s.jsx)(p.Caption, {
                    variant: "span",
                    type: "text",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    className: A().description,
                    "aria-hidden": !0,
                    children: e.join(" • "),
                  }),
                ],
              })
            );
          }, [x, y, a, f, L, h]),
          w = (0, r.useCallback)(
            (e) => {
              k({ to: d.qU.ConcertPurchaseScreen }),
                R(),
                null == e || e.stopPropagation();
            },
            [R, k],
          ),
          O = (0, r.useCallback)(
            (e) => {
              ("Space" === e.code || "Enter" === e.code) &&
                (e.preventDefault(), w());
            },
            [w],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(v.Paper, {
              className: A().root,
              style: C(j.color),
              radius: "l",
              role: "button",
              tabIndex: 0,
              onClick: w,
              onKeyDown: O,
              ref: N,
              "data-intersection-property-id": S,
              ...(0, c.BA)(c.QM.landing.CONCERT_ITEM),
              children: [
                (0, s.jsx)(m.Image, {
                  className: A().cover,
                  src: j.uri,
                  size: 400,
                  fit: "cover",
                  withAvatarReplace: !0,
                  withLoadingIndicator: !1,
                }),
                void 0 !== I &&
                  (0, s.jsx)(p.Caption, {
                    variant: "span",
                    size: "l",
                    weight: "bold",
                    className: (0, o.W)(A().index, A().title),
                    "aria-hidden": !0,
                    ...(0, c.BA)(c.QM.landing.CONCERT_ITEM_SEQUENCE_NUMBER),
                    children: I,
                  }),
                (0, s.jsxs)("div", {
                  className: A().meta,
                  children: [
                    (0, s.jsx)(p.Heading, {
                      variant: "h3",
                      size: "xs",
                      weight: "bold",
                      lineClamp: 3,
                      className: (0, o.W)(A().title, A().concertTitle),
                      ...(0, c.BA)(c.QM.landing.CONCERT_TITLE),
                      children: i,
                    }),
                    (0, s.jsxs)("div", {
                      className: A().textContainer,
                      children: [
                        (0, s.jsx)(b.CS, {
                          datetime: a,
                          className: A().date,
                          monthClassName: A().description,
                          dayClassName: A().title,
                          withWeekday: !1,
                        }),
                        (0, s.jsxs)("div", {
                          className: A().info,
                          children: [
                            (0, s.jsx)(p.Caption, {
                              variant: "span",
                              type: "controls",
                              size: "m",
                              weight: "medium",
                              lineClamp: 1,
                              className: A().title,
                              ...(0, c.BA)(c.QM.landing.CONCERT_CITY),
                              children: l,
                            }),
                            P,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(b.HS, {
              dataSessionId: T,
              isOpened: E,
              onOpen: R,
              onClose: V,
            }),
          ],
        });
      };
    },
    1177: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return c;
        },
      });
      var a = i(75441),
        l = i(65067),
        s = i(4875),
        o = i(72783),
        r = i(13534),
        n = i(97141);
      let d = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: l,
            containerClassName: d,
            headerClassName: c,
            meta: u,
            data: m,
            headingVariant: v,
            className: _,
            ...p
          } = e;
          return (0, a.jsx)(n.HY, {
            className: _,
            ...p,
            isShimmerVisible: i,
            isShimmerActive: l,
            headerClassName: c,
            containerClassName: d,
            title: u.title,
            description: u.description,
            viewAllActionLink: u.viewAllActionLink,
            ref: t,
            headingVariant: v,
            children:
              null == m
                ? void 0
                : m.items.map((e, t) =>
                    (0, a.jsx)(
                      r.nZ5,
                      {
                        objectType: s.OB.Album,
                        objectId: String(e.id),
                        objectPosX: t + 1,
                        objectPosY: 1,
                        objectsCount: m.items.length,
                        children: (0, a.jsx)(o.rf, {
                          album: e,
                          contentLinesCount: 3,
                          withLikesCount: !0,
                          withChart: !0,
                          withAddition: !1,
                        }),
                      },
                      e.id,
                    ),
                  ),
          });
        },
        c = (0, l.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
    },
    8206: function (e, t, i) {
      "use strict";
      i.d(t, {
        j: function () {
          return m;
        },
      });
      var a = i(75441),
        l = i(65067),
        s = i(4875),
        o = i(14222),
        r = i(72783),
        n = i(7797),
        d = i(13534),
        c = i(97141);
      let u = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: l,
            containerClassName: u,
            headerClassName: m,
            meta: v,
            data: _,
            headingVariant: p,
            className: b,
            ...g
          } = e;
          return (0, a.jsx)(c.HY, {
            className: b,
            ...g,
            isShimmerVisible: i,
            isShimmerActive: l,
            headerClassName: m,
            containerClassName: u,
            title: v.title,
            description: v.description,
            viewAllActionLink: v.viewAllActionLink,
            ref: t,
            headingVariant: p,
            children:
              null == _
                ? void 0
                : _.items.map((e, t) =>
                    e.type === o.Q.NON_MUSIC_ALBUM_ITEM
                      ? (0, a.jsx)(
                          d.nZ5,
                          {
                            objectType: s.OB.Album,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: _.items.length,
                            children: (0, a.jsx)(r.rf, {
                              album: e.data,
                              contentLinesCount: 3,
                              withLikesCount: !0,
                            }),
                          },
                          e.data.id,
                        )
                      : (0, a.jsx)(
                          d.nZ5,
                          {
                            objectType: s.OB.Playlist,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: _.items.length,
                            children: (0, a.jsx)(n.ZL, {
                              playlist: e.data,
                              contentLinesCount: 3,
                            }),
                          },
                          e.data.id,
                        ),
                  ),
          });
        },
        m = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
    },
    88863: function (e, t, i) {
      "use strict";
      i.d(t, {
        R: function () {
          return v;
        },
      });
      var a = i(75441),
        l = i(65067),
        s = i(4875),
        o = i(14222),
        r = i(72783),
        n = i(55051),
        d = i(7797),
        c = i(13534),
        u = i(97141);
      let m = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: l,
            containerClassName: m,
            headerClassName: v,
            meta: _,
            data: p,
            headingVariant: b,
            className: g,
            ...C
          } = e;
          return (0, a.jsx)(u.HY, {
            className: g,
            ...C,
            isShimmerVisible: i,
            isShimmerActive: l,
            headerClassName: v,
            containerClassName: m,
            title: _.title,
            description: _.description,
            viewAllActionLink: _.viewAllActionLink,
            ref: t,
            headingVariant: b,
            children:
              null == p
                ? void 0
                : p.items.map((e, t) => {
                    switch (e.type) {
                      case o.Q.ALBUM_ITEM:
                        return (0, a.jsx)(
                          c.nZ5,
                          {
                            objectType: s.OB.Album,
                            objectId: String(e.data.id),
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: p.items.length,
                            children: (0, a.jsx)(r.rf, {
                              withLikesCount: !0,
                              album: e.data,
                              contentLinesCount: 3,
                            }),
                          },
                          e.data.id,
                        );
                      case o.Q.ARTIST_ITEM:
                        return (0, a.jsx)(
                          c.nZ5,
                          {
                            objectType: s.OB.Artist,
                            objectId: e.data.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: p.items.length,
                            children: (0, a.jsx)(
                              n.IT,
                              { artist: e.data, contentLinesCount: 3 },
                              e.data.id,
                            ),
                          },
                          e.data.id,
                        );
                      case o.Q.PLAYLIST_ITEM:
                        return (0, a.jsx)(
                          c.nZ5,
                          {
                            objectType: s.OB.Playlist,
                            objectId: e.data.id,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: p.items.length,
                            children: (0, a.jsx)(
                              d.ZL,
                              { playlist: e.data, contentLinesCount: 3 },
                              e.data.id,
                            ),
                          },
                          e.data.id,
                        );
                    }
                  }),
          });
        },
        v = (0, l.forwardRef)((e, t) => (0, a.jsx)(m, { forwardRef: t, ...e }));
    },
    35716: function (e, t, i) {
      "use strict";
      i.d(t, {
        BlockEntities: function () {
          return j;
        },
      });
      var a = i(75441),
        l = i(32358),
        s = i(62569),
        o = i(65067),
        r = i(9317),
        n = i(35846),
        d = i(71011),
        c = i(14222),
        u = i(17294),
        m = i(17392),
        v = i(72783),
        _ = i(55051),
        p = i(69947),
        b = i(7797),
        g = i(30139),
        C = i(13534),
        h = i(97141),
        A = i(61406),
        y = i.n(A);
      let j = (0, s.Pi)((e) => {
        let { blockId: t, blockType: i } = e,
          { landingBlockEntities: s } = (0, C.oR4)(),
          { formatMessage: A } = (0, r.Z)(),
          { contentScrollRef: j, setContentScrollRef: T } = (0, C.$Y6)(),
          I = (0, C.k67)(),
          L = (0, o.useMemo)(() => {
            if (s.isLoading) {
              let e = A({ id: "loading-messages.content-is-loading" }),
                t = [
                  d.g.COLLECTION_ARTISTS,
                  d.g.COLLECTION_ARTISTS_AND_TOP,
                  d.g.PERSONAL_ARTISTS,
                  d.g.NEW_STARS_ARTISTS,
                  d.g.EDITORIAL_ARTISTS,
                ].includes(i),
                s = i === d.g.MIXES_GRID;
              return (0, a.jsx)(h.Wm, {
                itemClassName: (0, l.W)({ [y().shimmerWithSubcover]: s }),
                withSubcover: s,
                isActive: !0,
                "aria-label": e,
                centered: t || s,
                round: t,
              });
            }
            return s.items.map((e) => {
              switch (e.type) {
                case c.Q.MIX_CARD_ITEM:
                  return (0, a.jsx)(
                    g.gX,
                    {
                      title: e.data.title,
                      weblink: e.data.weblink,
                      covers: e.data.covers,
                    },
                    e.data.id,
                  );
                case c.Q.ALBUM_ITEM:
                  return (0, a.jsx)(
                    v.rf,
                    { album: e.data, contentLinesCount: 3 },
                    e.data.id,
                  );
                case c.Q.CHART_ALBUM_ITEM:
                case c.Q.NON_MUSIC_ALBUM_ITEM:
                  return (0, a.jsx)(
                    v.rf,
                    {
                      withChart: !0,
                      withLikesCount: !0,
                      album: e.data,
                      contentLinesCount: 3,
                    },
                    e.data.id,
                  );
                case c.Q.ARTIST_ITEM:
                  return (0, a.jsx)(
                    _.IT,
                    { artist: e.data, contentLinesCount: 3 },
                    e.data.id,
                  );
                case c.Q.PLAYLIST_ITEM:
                  return (0, a.jsx)(
                    b.ZL,
                    { playlist: e.data, contentLinesCount: 3 },
                    e.data.key,
                  );
                case c.Q.PERSONAL_PLAYLIST_ITEM:
                  return (0, a.jsx)(
                    b.ZL,
                    {
                      playlist: e.data.playlist,
                      customDescription: e.data.description,
                      contentLinesCount: 4,
                    },
                    e.data.playlist.key,
                  );
                case c.Q.LIKED_PLAYLIST_ITEM:
                  return (0, a.jsx)(
                    b.ZL,
                    { playlist: e.data, contentLinesCount: 3 },
                    e.data.key,
                  );
              }
            });
          }, [i, s.isLoading, s.items, A]);
        return (
          t && s.isNeededToLoad && (0, o.use)(s.getData({ blockId: t })),
          (0, a.jsx)(p.I7, {
            scrollElement: j,
            outerTitle: s.title,
            children: (0, a.jsxs)("div", {
              className: y().root,
              children: [
                (0, a.jsx)(h.h4, {
                  variant: h.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: I.canBack,
                  children: (0, a.jsx)(m.Heading, {
                    id: "block-entities-header",
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: s.title,
                  }),
                }),
                (0, a.jsx)(u.t, {
                  ref: T,
                  className: y().scrollableContent,
                  containerClassName: y().scrollableContainer,
                  ...(0, n.BA)(n.QM.landing.BLOCK_ENTITY_PAGE),
                  children: (0, a.jsxs)("div", {
                    className: y().container,
                    children: [
                      (0, a.jsx)("div", {
                        className: y().content,
                        "aria-labelledby": "block-entities-header",
                        tabIndex: 0,
                        children: L,
                      }),
                      (0, a.jsx)(h.$_, { className: y().footer }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      });
    },
    50813: function (e) {
      e.exports = {
        root: "AfishaWidget_root__Fu9a6",
        content: "AfishaWidget_content__YFmbs",
        widget: "AfishaWidget_widget__ZdvqS",
      };
    },
    59153: function (e) {
      e.exports = {
        root: "CashbackBadge_root__hStMF",
        icon: "CashbackBadge_icon__RJ6qe",
        title: "CashbackBadge_title__neGD7",
      };
    },
    95993: function (e) {
      e.exports = {
        root: "ConcertCard_root__fcR9B",
        ripple: "ConcertCard_ripple__PW4xI",
        date: "ConcertCard_date__ECoa3",
        dateColor: "ConcertCard_dateColor__muPRD",
        button: "ConcertCard_button__GQxNL",
      };
    },
    83927: function (e) {
      e.exports = {
        root: "ConcertMeta_root__CkKU3",
        city: "ConcertMeta_city__ngDq2",
        info: "ConcertMeta_info__czKlU",
        cashback: "ConcertMeta_cashback__fkZfk",
      };
    },
    2166: function (e) {
      e.exports = {
        root: "ConcertDate_root__xnVG1",
        month: "ConcertDate_month__ti5Na",
        day: "ConcertDate_day__YibpP",
        weekday: "ConcertDate_weekday__fBZXo",
      };
    },
    78355: function (e) {
      e.exports = {
        root: "ConcertsBlock_root__d_1G3",
        controls: "ConcertsBlock_controls__oULxu",
        item: "ConcertsBlock_item__jMAX9",
        item_singleColumn: "ConcertsBlock_item_singleColumn__p8ilp",
        preventScroll: "ConcertsBlock_preventScroll__YeeZH",
        concertsColumn: "ConcertsBlock_concertsColumn__2M2t_",
      };
    },
    36498: function (e) {
      e.exports = {
        root: "MixCard_root__9tPLV",
        header: "MixCard_header__j7Zpo",
        title: "MixCard_title__nhghp",
        cover: "MixCard_cover__oSu73",
        covers: "MixCard_covers__S61hz",
        covers_stack: "MixCard_covers_stack__VeHDp",
        covers_radial: "MixCard_covers_radial__orE40",
      };
    },
    49390: function (e) {
      e.exports = {
        plate: "MixesGridMixCard_plate__ONH3P",
        root: "MixesGridMixCard_root__HHE7z",
        subcover: "MixesGridMixCard_subcover__z5sBj",
        link: "MixesGridMixCard_link__D3_S6",
        header: "MixesGridMixCard_header__t24VH",
        title: "MixesGridMixCard_title__fKTCy",
        cover: "MixesGridMixCard_cover__Ra3ic",
      };
    },
    75384: function (e) {
      e.exports = {
        root: "NewReleaseCard_root__IY5m_",
        ripple: "NewReleaseCard_ripple__VoybZ",
        image: "NewReleaseCard_image__oxm2S",
        info: "NewReleaseCard_info__rcfoY",
        type: "NewReleaseCard_type__cW58D",
        title: "NewReleaseCard_title__N5soS",
        description: "NewReleaseCard_description__Daz5q",
        container: "NewReleaseCard_container__XvwZC",
        explicitMark: "NewReleaseCard_explicitMark__isgxE",
        explicitMarkContainer: "NewReleaseCard_explicitMarkContainer__QHRoH",
        button: "NewReleaseCard_button__WPk82",
        paperLink: "NewReleaseCard_paperLink__NN_8o",
      };
    },
    73312: function (e) {
      e.exports = {
        message: "OverviewBlock_message__f41Rq",
        modal: "OverviewBlock_modal__Jxiv2",
        modalHeader: "OverviewBlock_modalHeader__nerV2",
        modalHeader_withTitle: "OverviewBlock_modalHeader_withTitle__gjKhp",
        modalContent: "OverviewBlock_modalContent__fw4fH",
        button: "OverviewBlock_button__k7t4c",
        modalOverlay: "OverviewBlock_modalOverlay__1dp_D",
      };
    },
    43494: function (e) {
      e.exports = {
        root: "NotificationReloadBlocks_root__QZlC9",
        important: "NotificationReloadBlocks_important__E7f44",
        text: "NotificationReloadBlocks_text__aIYzg",
        icon: "NotificationReloadBlocks_icon__amJhM",
        button: "NotificationReloadBlocks_button__fyg7T",
        message: "NotificationReloadBlocks_message__d66cG",
      };
    },
    23100: function (e) {
      e.exports = {
        root: "Skeleton_root__ANDaF",
        upperBlocks: "Skeleton_upperBlocks__zI__5",
        tab: "Skeleton_tab__Jn6By",
        tabPanel: "Skeleton_tabPanel__Ke42U",
        tabCarousel: "Skeleton_tabCarousel__E2kLf",
        important: "Skeleton_important__ob12_",
        header: "Skeleton_header__Ir5f4",
        stickyTabs: "Skeleton_stickyTabs__I_uuk",
      };
    },
    40106: function (e) {
      e.exports = {
        container: "SkeletonBlock_container__9IxUi",
        important: "SkeletonBlock_important__faY0E",
        container_withContentVisibility:
          "SkeletonBlock_container_withContentVisibility__QzL5d",
        headerContainer: "SkeletonBlock_headerContainer__fl8EX",
        tracksContainer: "SkeletonBlock_tracksContainer__uF8Tg",
      };
    },
    27449: function (e) {
      e.exports = { root: "VirtualizedSkeletonBlock_root__njUFa" };
    },
    27378: function (e) {
      e.exports = {
        item: "VibesCarousel_item__AupL0",
        important: "VibesCarousel_important__JkzUC",
      };
    },
    10164: function (e) {
      e.exports = {
        root: "AlbumPromoCard_root__dAUet",
        artistImage: "AlbumPromoCard_artistImage__fWVxn",
        artistImage_withTopPosition:
          "AlbumPromoCard_artistImage_withTopPosition__tRrcO",
        artistCover: "AlbumPromoCard_artistCover__Gfhab",
        albumCover: "AlbumPromoCard_albumCover__QYYKH",
        button: "AlbumPromoCard_button__mpQr6",
        buttonIcon: "AlbumPromoCard_buttonIcon__WredC",
        buttonText: "AlbumPromoCard_buttonText__pI3Ot",
        albumImage: "AlbumPromoCard_albumImage__v8021",
        albumLink: "AlbumPromoCard_albumLink__dnGvR",
        artistLink: "AlbumPromoCard_artistLink__AD9__",
        title: "AlbumPromoCard_title__uzmho",
        titleLink: "AlbumPromoCard_titleLink__4DLNk",
        titleContainer: "AlbumPromoCard_titleContainer__f1k8Y",
        artists: "AlbumPromoCard_artists__UYpyB",
        artistsLink: "AlbumPromoCard_artistsLink__8gTlH",
      };
    },
    50073: function (e) {
      e.exports = {
        root: "BaseAlbumPromo_root__wgbC3",
        controls: "BaseAlbumPromo_controls__NiVRJ",
        item: "BaseAlbumPromo_item__coi3X",
        important: "BaseAlbumPromo_important__OiNRT",
      };
    },
    67585: function (e) {
      e.exports = {
        artistLink: "ArtistPick_artistLink__WYRFP",
        artistsSpoiler: "ArtistPick_artistsSpoiler__HBKka",
        subTitle: "ArtistPick_subTitle__5SJFj",
        text: "ArtistPick_text__sIhNG",
        smallCoverContainer: "ArtistPick_smallCoverContainer__iBgJu",
        cover: "ArtistPick_cover__9utVr",
        smallCover: "ArtistPick_smallCover__6NSnL",
        shimmerCover: "ArtistPick_shimmerCover__HIauy",
      };
    },
    35693: function (e) {
      e.exports = { item: "ArtistPopularTracks_item__PsKwP" };
    },
    712: function (e) {
      e.exports = {
        root: "ArtistPopularTracksAndReleases_root__rN5Wk",
        container: "ArtistPopularTracksAndReleases_container__EQIVk",
        popularTracks: "ArtistPopularTracksAndReleases_popularTracks__HEZ73",
        popularTracks_withReleaseBlock:
          "ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr",
        release: "ArtistPopularTracksAndReleases_release__9NDdR",
        releaseCard: "ArtistPopularTracksAndReleases_releaseCard__uHtao",
      };
    },
    65426: function (e) {
      e.exports = {
        root: "CollectionAlbumsEmpty_root__xtfuI",
        text: "CollectionAlbumsEmpty_text__fRpx_",
      };
    },
    4082: function (e) {
      e.exports = {
        root_withControls: "CollectionAlbumsPresaves_root_withControls__qE_u_",
        controls: "CollectionAlbumsPresaves_controls__8twKX",
        header: "CollectionAlbumsPresaves_header__1flkp",
        important: "CollectionAlbumsPresaves_important__EkdBU",
        tab: "CollectionAlbumsPresaves_tab__V6yvN",
        tabShimmer: "CollectionAlbumsPresaves_tabShimmer__T6w2W",
        tabCarousel: "CollectionAlbumsPresaves_tabCarousel__hobTn",
        tabPanel: "CollectionAlbumsPresaves_tabPanel__ZHz6v",
        carouselEmpty: "CollectionAlbumsPresaves_carouselEmpty__8szhR",
        item: "CollectionAlbumsPresaves_item__to1P9",
      };
    },
    41210: function (e) {
      e.exports = {
        root: "CollectionAlbumsPresavesEmpty_root__3w6b7",
        root_oneEmptyTab:
          "CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3",
        root_twoEmptyTabs:
          "CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l",
      };
    },
    18886: function (e) {
      e.exports = {
        root: "CollectionArtistsEmpty_root__7K3il",
        text: "CollectionArtistsEmpty_text__T_krz",
      };
    },
    82029: function (e) {
      e.exports = {
        root: "CollectionClipsEmpty_root__LwgZS",
        text: "CollectionClipsEmpty_text__cZfLW",
      };
    },
    49554: function (e) {
      e.exports = {
        root_withControls: "CollectionPlaylists_root_withControls__YV7o_",
        controls: "CollectionPlaylists_controls___7XSv",
        header: "CollectionPlaylists_header__EDtBS",
        important: "CollectionPlaylists_important__oumcA",
        tab: "CollectionPlaylists_tab__PppbA",
        tabShimmer: "CollectionPlaylists_tabShimmer__U_ZFn",
        tabCarousel: "CollectionPlaylists_tabCarousel__hWuL_",
        tabPanel: "CollectionPlaylists_tabPanel__wSwRR",
        carouselEmpty: "CollectionPlaylists_carouselEmpty__SVn6E",
        createPlaylistCard: "CollectionPlaylists_createPlaylistCard__1cMca",
        item: "CollectionPlaylists_item__YeviY",
      };
    },
    67207: function (e) {
      e.exports = { root: "CollectionPlaylistsEmpty_root__KGNv_" };
    },
    64802: function (e) {
      e.exports = {
        root: "Concert_root__INQJc",
        cover: "Concert_cover__POyDO",
        index: "Concert_index__cPRuN",
        meta: "Concert_meta__s_lsH",
        textContainer: "Concert_textContainer__50dZP",
        date: "Concert_date__3xwWB",
        info: "Concert_info__viObm",
        concertTitle: "Concert_concertTitle__kngHo",
        description: "Concert_description__JTZtZ",
        descriptionContainer: "Concert_descriptionContainer__cPF3d",
        cashback: "Concert_cashback__b7feO",
        title: "Concert_title__tX2Mj",
      };
    },
    72079: function (e) {
      e.exports = {
        root: "Concerts_root__12jay",
        controls: "Concerts_controls__n4qr8",
        shimmer: "Concerts_shimmer__ujsLv",
        item: "Concerts_item__jetvg",
      };
    },
    74383: function (e) {
      e.exports = {
        blocksContainer: "ContinueListen_blocksContainer__tQ80F",
        container: "ContinueListen_container__1oxhK",
        item: "ContinueListen_item__jGg_0",
        item_lastPlayed: "ContinueListen_item_lastPlayed__AkN1T",
        important: "ContinueListen_important__xwCU5",
      };
    },
    98326: function (e) {
      e.exports = {
        content: "ContinueListenBaseItem_content__Rdrbh",
        root: "ContinueListenBaseItem_root__FH7Jk",
        root_bookshelf: "ContinueListenBaseItem_root_bookshelf__cKQqb",
        root_newEpisodes: "ContinueListenBaseItem_root_newEpisodes__OTZgU",
        root_withLastPlayed:
          "ContinueListenBaseItem_root_withLastPlayed__1Z2P5",
        title: "ContinueListenBaseItem_title__vvDta",
        root_withCovers: "ContinueListenBaseItem_root_withCovers__Y4w7V",
        link: "ContinueListenBaseItem_link__3xuh7",
        textContainer: "ContinueListenBaseItem_textContainer__1nvoM",
        titleIcon: "ContinueListenBaseItem_titleIcon__4lGcT",
        subtitle: "ContinueListenBaseItem_subtitle__jFLLT",
        covers: "ContinueListenBaseItem_covers__bCLfi",
        coverContainer: "ContinueListenBaseItem_coverContainer__qdnAa",
        cover: "ContinueListenBaseItem_cover__gSp5J",
      };
    },
    96661: function (e) {
      e.exports = {
        root: "ContinueListenTrack_root__JFzVe",
        cover: "ContinueListenTrack_cover__E5zob",
        important: "ContinueListenTrack_important__4_84V",
        metaTrack: "ContinueListenTrack_metaTrack__hSIYC",
        content: "ContinueListenTrack_content__xU2R9",
        textContainer: "ContinueListenTrack_textContainer__zisLi",
        titleIcon: "ContinueListenTrack_titleIcon__smcf_",
        title: "ContinueListenTrack_title__LBdpD",
        explicitMark: "ContinueListenTrack_explicitMark___eXOa",
        metaContainer: "ContinueListenTrack_metaContainer__Yoo2N",
        playButton: "ContinueListenTrack_playButton__5tT4s",
        progress: "ContinueListenTrack_progress__CfJQP",
        fullCircle: "ContinueListenTrack_fullCircle__xrROh",
        progressCircle: "ContinueListenTrack_progressCircle__msDye",
      };
    },
    67623: function (e) {
      e.exports = {
        root: "EditorialVibes_root__MPgdy",
        controls: "EditorialVibes_controls__sKvZK",
      };
    },
    26573: function (e) {
      e.exports = {
        cover: "FamiliarYou_cover__nY4e8",
        shimmerCover: "FamiliarYou_shimmerCover__HFgkx",
      };
    },
    92294: function (e) {
      e.exports = { root: "FamiliarYouAndArtistPick_root___Ihxe" };
    },
    14662: function (e) {
      e.exports = {
        root: "InStyle_root__ZsdXE",
        controls: "InStyle_controls__mGqhj",
        header: "InStyle_header__C2AWP",
        important: "InStyle_important__msPsl",
        tab: "InStyle_tab__DeURY",
        tabCarousel: "InStyle_tabCarousel__SXqBO",
        item: "InStyle_item__e5_Qz",
      };
    },
    73306: function (e) {
      e.exports = {
        root: "ItemList_root__0fUbd",
        shimmer: "ItemList_shimmer__hIZtA",
      };
    },
    82746: function (e) {
      e.exports = {
        root: "LikesAndHistory_root__KCuz_",
        carousel: "LikesAndHistory_carousel__579RD",
        carouselItem: "LikesAndHistory_carouselItem__Yq5Xw",
        favoritesCoverContainer:
          "LikesAndHistory_favoritesCoverContainer__UUIDf",
        favoritesCover: "LikesAndHistory_favoritesCover__Nt7Gm",
        historyIcon: "LikesAndHistory_historyIcon__2FAMu",
        historyIconContainer: "LikesAndHistory_historyIconContainer__KPPbS",
      };
    },
    52700: function (e) {
      e.exports = {
        root: "LikesAndHistoryItem_root__oI1gk",
        link: "LikesAndHistoryItem_link__snTl_",
        start: "LikesAndHistoryItem_start__wdtiV",
        textContainer: "LikesAndHistoryItem_textContainer__yGdOu",
        titleIcon: "LikesAndHistoryItem_titleIcon__2D_yS",
        title: "LikesAndHistoryItem_title__hdi2H",
        subtitle: "LikesAndHistoryItem_subtitle__ghuKi",
        covers: "LikesAndHistoryItem_covers__9k_yw",
        coverContainer: "LikesAndHistoryItem_coverContainer__fwXXJ",
        cover: "LikesAndHistoryItem_cover__QlRhz",
      };
    },
    18990: function (e) {
      e.exports = {
        root: "MetaTagVibe_root__AEd83",
        contentContainer: "MetaTagVibe_contentContainer__wsqz_",
        item: "MetaTagVibe_item__rR9Or",
        important: "MetaTagVibe_important___8ZiM",
      };
    },
    11889: function (e) {
      e.exports = { item: "Mixes_item__Om7aR" };
    },
    99428: function (e) {
      e.exports = {
        shimmerWithSubcover: "MixesGridBlock_shimmerWithSubcover__3EtzK",
        header: "MixesGridBlock_header__wz5KI",
        mixesGrid: "MixesGridBlock_mixesGrid__LSeyw",
        item: "MixesGridBlock_item__TVzNE",
        important: "MixesGridBlock_important__DQE7T",
      };
    },
    59252: function (e) {
      e.exports = {
        item: "MixesMusic_item__9QVmW",
        shimmer: "MixesMusic_shimmer__rJ3xa",
      };
    },
    55107: function (e) {
      e.exports = {
        root: "Neuromusic_root__wTkG_",
        controls: "Neuromusic_controls__8kH7t",
        item: "Neuromusic_item__Q_JI_",
        important: "Neuromusic_important__8Ib5E",
      };
    },
    29095: function (e) {
      e.exports = {
        root: "NeuromusicButton_root__OMwq0",
        ripple: "NeuromusicButton_ripple__B9e3A",
        textContainer: "NeuromusicButton_textContainer__2rb8y",
        title: "NeuromusicButton_title__mTAB8",
        button: "NeuromusicButton_button__kT4GN",
        icon: "NeuromusicButton_icon__HTDr2",
      };
    },
    83369: function (e) {
      e.exports = {
        root: "NewRelease_root__W0T4a",
        image: "NewRelease_image__Vw6_k",
        cover: "NewRelease_cover__EVFNR",
        card: "NewRelease_card__yn06x",
        fade: "NewRelease_fade__rVE0_",
        artists: "NewRelease_artists__wGTaP",
        artistLink: "NewRelease_artistLink__CO3Zn",
        artistCaption: "NewRelease_artistCaption__1F8A9",
        trailerButton: "NewRelease_trailerButton__OYAW6",
        descriptionContainer: "NewRelease_descriptionContainer__g56GG",
      };
    },
    29864: function (e) {
      e.exports = {
        root: "NewReleases_root__4ONiw",
        controls: "NewReleases_controls__zlJZF",
        shimmerImage: "NewReleases_shimmerImage__8IEd_",
        shimmerCard: "NewReleases_shimmerCard__S1gfL",
        item: "NewReleases_item__Gv0iR",
        important: "NewReleases_important__qkt9x",
      };
    },
    75189: function (e) {
      e.exports = { root: "Overview_root__2deXs" };
    },
    64997: function (e) {
      e.exports = {
        trailer: "PlaylistWithTracks_trailer__dOp1u",
        root: "PlaylistWithTracks_root__jchZL",
      };
    },
    59388: function (e) {
      e.exports = {
        root: "PlaylistWithTracksEmpty_root__J_i2h",
        image: "PlaylistWithTracksEmpty_image__U2P1t",
        header: "PlaylistWithTracksEmpty_header___u3dc",
        text: "PlaylistWithTracksEmpty_text__b8DQv",
        myWaveButton: "PlaylistWithTracksEmpty_myWaveButton__YJgY5",
        myWaveButtonText: "PlaylistWithTracksEmpty_myWaveButtonText__wBPxS",
      };
    },
    34232: function (e) {
      e.exports = {
        root: "PromotionsCard_root__1yY_m",
        image: "PromotionsCard_image__4lmYk",
        card: "PromotionsCard_card__fpUzx",
        titleLink: "PromotionsCard_titleLink__3q_M5",
        subtitle: "PromotionsCard_subtitle__fGfn9",
      };
    },
    42103: function (e) {
      e.exports = {
        root: "PromotionShimmer_root__Nb8vU",
        cover: "PromotionShimmer_cover__WYwD7",
        meta: "PromotionShimmer_meta__9eRwi",
        heading: "PromotionShimmer_heading__38lLU",
        title: "PromotionShimmer_title__TLj1g",
        subtitle: "PromotionShimmer_subtitle__LS5v_",
      };
    },
    50446: function (e) {
      e.exports = {
        root: "Promotions_root__Osgj2",
        controls: "Promotions_controls__IEqvq",
        item: "Promotions_item__ycc9P",
        important: "Promotions_important__x_kQK",
      };
    },
    65960: function (e) {
      e.exports = {
        root: "SearchHistory_root__0z_bV",
        fallback: "SearchHistory_fallback____oTN",
        button: "SearchHistory_button__LBJeT",
      };
    },
    4994: function (e) {
      e.exports = {
        root: "Special_root__FOrBZ",
        actions: "Special_actions__XYuvB",
        textContainer: "Special_textContainer__pN_TF",
        textColor: "Special_textColor__dySbq",
        imageContainer: "Special_imageContainer__V1_E3",
        image: "Special_image__1sSXR",
        button: "Special_button__j8gGH",
      };
    },
    46238: function (e) {
      e.exports = {
        root: "Vibes_root__Bk6PF",
        controls: "Vibes_controls__bUp2H",
        header: "Vibes_header__RcW5b",
        important: "Vibes_important__Vew_4",
        tab: "Vibes_tab__uOfqW",
        tabShimmer: "Vibes_tabShimmer__hjehH",
        tabCarousel: "Vibes_tabCarousel__bSvp0",
      };
    },
    4062: function (e) {
      e.exports = {
        root: "Wizard_root__aW2c2",
        title: "Wizard_title__L8ktt",
        description: "Wizard_description__RFf2U",
        button: "Wizard_button__lr8pa",
        buttonIcon: "Wizard_buttonIcon__eOX3P",
        imagesWrapper: "Wizard_imagesWrapper__tyqWr",
        images: "Wizard_images__5rxec",
        paper: "Wizard_paper__ijUgq",
        image: "Wizard_image__k9AXl",
      };
    },
    92090: function (e) {
      e.exports = {
        titleShimmer: "WizardTextShimmer_titleShimmer__g__ye",
        titleTextShimmer: "WizardTextShimmer_titleTextShimmer__ThHNk",
        textShimmer: "WizardTextShimmer_textShimmer__QokKt",
        descriptionShimmer: "WizardTextShimmer_descriptionShimmer__Z9daY",
      };
    },
    61406: function (e) {
      e.exports = {
        root: "BlockEntities_root__sHn14",
        scrollableContent: "BlockEntities_scrollableContent__4A0tK",
        scrollableContainer: "BlockEntities_scrollableContainer__KXyas",
        container: "BlockEntities_container__1XiOc",
        content: "BlockEntities_content__bfoTn",
        shimmerWithSubcover: "BlockEntities_shimmerWithSubcover__dYd6P",
        footer: "BlockEntities_footer__eEuix",
      };
    },
    52682: function (e, t, i) {
      "use strict";
      var a, l;
      i.d(t, {
        n: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).ALBUM = "album_tab"),
        (l.PRESAVED_ALBUM = "presaved_album_tab");
    },
    21018: function (e, t, i) {
      "use strict";
      var a, l;
      i.d(t, {
        a: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).PLAYLIST_LIKED_TAB = "liked_playlist_tab"),
        (l.PLAYLIST_CREATED_TAB = "created_playlist_tab");
    },
    90631: function (e, t, i) {
      "use strict";
      var a, l;
      i.d(t, {
        n: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).RADIAL = "RADIAL"),
        (l.STACK = "STACK");
    },
    48546: function (e, t, i) {
      "use strict";
      var a, l;
      i.d(t, {
        t: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).NONE = "none"),
        (l.DEFAULT = "default"),
        (l.CUSTOM = "custom");
    },
    26704: function (e, t, i) {
      "use strict";
      var a, l;
      i.d(t, {
        V: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).SHOW_AND_LOAD = "SHOW_AND_LOAD"),
        (l.LOAD_AND_SHOW = "LOAD_AND_SHOW");
    },
  },
]);
