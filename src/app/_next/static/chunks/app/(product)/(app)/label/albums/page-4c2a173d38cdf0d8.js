(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2376],
  {
    22510: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 20821));
    },
    20821: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(75441),
        o = n(98730),
        a = n(76890),
        i = n(13534);
      e.default = () => {
        let t = (0, o.useSearchParams)().get("labelId");
        return (
          (t && (0, i.aBB)(t)) || (0, o.notFound)(),
          (0, r.jsx)(a.ET, { labelId: t })
        );
      };
    },
    5104: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return m.DonationButton;
        },
        AT: function () {
          return _.DonationCard;
        },
        Nv: function () {
          return x.DonationCarousel;
        },
        ei: function () {
          return C;
        },
        Ew: function () {
          return u;
        },
        fv: function () {
          return d;
        },
        s6: function () {
          return i;
        },
        nJ: function () {
          return s;
        },
      });
      var r = n(4875),
        o = n(93093),
        a = n(13534);
      let i = () => {
          let { hash: t } = (0, a.RQn)(),
            e = (0, a.wLl)(),
            n = (0, a.z$f)(),
            { pageId: s } = (0, a.lVB)(),
            {
              blockId: l,
              blockType: c,
              blockPosX: d,
              blockPosY: u,
            } = (0, a.qYG)(),
            {
              objectType: m,
              objectId: _,
              objectPosX: x,
              objectPosY: f,
              objectsCount: h,
              mainObjectId: v,
              mainObjectType: p,
            } = (0, a.rKX)();
          return (0, o.W)((o, j) => {
            if (!n || !s) return;
            let N = a.x3Y[s];
            if (!N) return;
            let C = {
              to: o,
              objectType: m,
              objectId: _,
              objectPosX: x,
              objectPosY: f,
              hash: t,
              pageId: N,
              mainObjectType: p,
              mainObjectId: v,
              entityType: c,
              entityId: l,
              entityPosX: d,
              entityPosY: u,
              objectsCount: h,
              from: N,
            };
            j && (C.deepLink = j);
            let b = (0, a.KOr)({ params: C, logger: e, context: i.name });
            b && (0, r.mz)(n.evgenInstance, b);
          });
        },
        s = () => {
          let { hash: t } = (0, a.RQn)(),
            e = (0, a.wLl)(),
            n = (0, a.z$f)(),
            { pageId: i } = (0, a.lVB)(),
            {
              blockId: l,
              blockType: c,
              blockPosX: d,
              blockPosY: u,
            } = (0, a.qYG)(),
            {
              objectType: m,
              objectId: _,
              objectPosX: x,
              objectPosY: f,
              objectsCount: h,
              mainObjectId: v,
              mainObjectType: p,
            } = (0, a.rKX)();
          return (0, o.W)((o, j) => {
            if (!n || !i) return;
            let N = a.x3Y[i];
            if (!N) return;
            let C = (0, a.KOr)({
              params: {
                objectType: m,
                objectId: _,
                objectPosX: x,
                objectPosY: f,
                hash: t,
                pageId: N,
                mainObjectType: p,
                mainObjectId: v,
                entityType: c,
                entityId: l,
                entityPosX: d,
                entityPosY: u,
                objectsCount: h,
                viewUuid: j,
              },
              logger: e,
              context: s.name,
            });
            C &&
              (o
                ? (0, r.PB)(n.evgenInstance, C)
                : (0, r.re)(n.evgenInstance, C));
          });
        };
      var l = n(22874),
        c = n(64353);
      let d = (t) => {
          let { url: e, artist: n, goal: r } = t;
          return (0, l.pj)({
            url: e,
            goal: r,
            artist: (0, c.tR)({ artist: n }),
          });
        },
        u = l.V5.model("Donation", {
          url: l.V5.string,
          artist: c.Go,
          goal: l.V5.maybe(l.V5.string),
        });
      var m = n(39156),
        _ = n(18220),
        x = n(44475),
        f = n(75441),
        h = n(32358),
        v = n(28676),
        p = n(59630),
        j = n.n(p);
      let N = (t) => {
          let { isActive: e } = t;
          return (0, f.jsxs)("div", {
            className: (0, h.W)(j().shimmer, j().donation),
            children: [
              (0, f.jsx)(v.Shimmer, {
                isActive: e,
                radius: "round",
                className: j().shimmerCover,
              }),
              (0, f.jsxs)("div", {
                className: j().shimmerContainer,
                children: [
                  (0, f.jsxs)("div", {
                    className: j().shimmerText,
                    children: [
                      (0, f.jsx)(v.Shimmer, {
                        isActive: e,
                        radius: "xxxl",
                        className: j().shimmerArtist,
                      }),
                      (0, f.jsx)(v.Shimmer, {
                        isActive: e,
                        radius: "xxxl",
                        className: j().shimmerGoal,
                      }),
                    ],
                  }),
                  (0, f.jsx)(v.Shimmer, {
                    isActive: e,
                    radius: "xxxl",
                    className: j().shimmerButton,
                  }),
                ],
              }),
            ],
          });
        },
        C = (t) =>
          Array.from({ length: 10 }, (e, n) =>
            (0, f.jsx)(N, { isActive: t }, n),
          );
    },
    39156: function (t, e, n) {
      "use strict";
      n.d(e, {
        DonationButton: function () {
          return u;
        },
      });
      var r = n(75441),
        o = n(62569),
        a = n(65067),
        i = n(9317),
        s = n(68208),
        l = n(69756),
        c = n(13534);
      let d = (0, o.Pi)((t) => {
          let { onClick: e, className: n, forwardRef: o, ...a } = t,
            { formatMessage: d } = (0, i.Z)();
          return (0, r.jsx)(s.Button, {
            ref: o,
            size: "s",
            variant: "default",
            radius: "round",
            color: "secondary",
            onClick: e,
            className: n,
            "aria-label": d({ id: "donation.button-text" }),
            icon: (0, r.jsx)(l.Icon, { size: "xxs", variant: "ruble" }),
            ...(0, c.tEg)(a),
          });
        }),
        u = (0, a.forwardRef)((t, e) => (0, r.jsx)(d, { forwardRef: e, ...t }));
    },
    18220: function (t, e, n) {
      "use strict";
      n.d(e, {
        DonationCard: function () {
          return v;
        },
      });
      var r = n(75441),
        o = n(32358),
        a = n(65067),
        i = n(9317),
        s = n(15937),
        l = n(68208),
        c = n(69756),
        d = n(59091),
        u = n(17392),
        m = n(13534),
        _ = n(97141),
        x = n(59630),
        f = n.n(x);
      let h = (t) => {
          let {
              artist: e,
              goal: n,
              onNavigateToArtist: a,
              onNavigateToDonation: x,
              forwardRef: h,
              ...v
            } = t,
            { formatMessage: p } = (0, i.Z)();
          return (0, r.jsxs)("div", {
            ref: h,
            className: (0, o.W)(f().root, f().donation),
            ...(0, m.tEg)(v),
            children: [
              (0, r.jsx)(d.Paper, {
                radius: "round",
                className: f().cover,
                children: (0, r.jsx)(_.rU, {
                  href: e.url,
                  onClick: a,
                  "aria-label": p(
                    { id: "entity-names.artist-name" },
                    { artistName: e.name },
                  ),
                  children: (0, r.jsx)(_.BE, {
                    className: f().image,
                    src: e.coverUri,
                    isAvailable: e.isAvailable,
                    size: 200,
                    fit: "cover",
                    withAvatarReplace: !0,
                    "aria-hidden": !0,
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: f().container,
                children: [
                  (0, r.jsxs)("div", {
                    className: f().text,
                    children: [
                      (0, r.jsx)(u.Heading, {
                        variant: "span",
                        size: "xs",
                        weight: "bold",
                        lineClamp: 2,
                        className: f().artist,
                        children: e.name,
                      }),
                      (0, r.jsx)(u.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        lineClamp: 2,
                        className: f().goal,
                        children: n,
                      }),
                    ],
                  }),
                  (0, r.jsxs)(l.Button, {
                    role: "link",
                    size: "s",
                    color: "secondary",
                    onClick: x,
                    className: f().label,
                    withRipple: !1,
                    children: [
                      (0, r.jsx)(c.Icon, { variant: "ruble", size: "xxxs" }),
                      (0, r.jsx)(u.Caption, {
                        type: "text",
                        size: "m",
                        weight: "medium",
                        variant: "span",
                        children: (0, r.jsx)(s.Z, {
                          id: "donation.support-button",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        v = (0, a.forwardRef)((t, e) => (0, r.jsx)(h, { forwardRef: e, ...t }));
    },
    44475: function (t, e, n) {
      "use strict";
      n.d(e, {
        DonationCarousel: function () {
          return m;
        },
      });
      var r = n(75441),
        o = n(32358),
        a = n(65067),
        i = n(59100),
        s = n(13534),
        l = n(97141),
        c = n(85786),
        d = n.n(c);
      let u = (t) => {
          let {
              className: e,
              forwardRef: n,
              headerClassName: c,
              containerClassName: u,
              headingVariant: m,
              title: _,
              viewAllActionLink: x,
              description: f,
              children: h,
              ...v
            } = t,
            p = (0, a.useId)(),
            j = (0, a.useRef)(null);
          return (0, r.jsxs)("section", {
            ref: n,
            className: (0, o.W)(d().root, e),
            ...(0, s.tEg)(v),
            children: [
              (0, r.jsx)(l.ti, {
                className: c,
                labeledForId: p,
                title: _,
                description: f,
                viewAllActionLink: x,
                controls: (0, r.jsx)(l.J8, {
                  className: d().controls,
                  carouselRef: j,
                }),
                headingVariant: m,
              }),
              (0, r.jsx)(i.Carousel, {
                ref: j,
                itemClassName: (0, o.W)(d().item, d().important),
                className: u,
                "aria-labelledby": p,
                children: h,
              }),
            ],
          });
        },
        m = (0, a.forwardRef)((t, e) => (0, r.jsx)(u, { forwardRef: e, ...t }));
    },
    28889: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return o;
        },
      });
      var r = n(2954);
      let o = (t) => !!t && (t === r.h.RATING || t === r.h.YEAR);
    },
    47446: function (t, e, n) {
      "use strict";
      n.d(e, {
        useSort: function () {
          return s;
        },
      });
      var r = n(65067),
        o = n(2954),
        a = n(13534),
        i = n(28889);
      let s = (t) => {
        let { sortModel: e } = t,
          n = (0, a.m5R)();
        (0, r.useLayoutEffect)(() => {
          let t = new URL(window.location.href).searchParams.get(a.wxR.SORT);
          t && (0, i.V)(t) ? e.setSortBy(t) : e.setSortBy(o.h.YEAR);
        }, [e]),
          (0, r.useEffect)(() => {
            if (e.sortBy) {
              let t = (0, a.rdz)(a.wxR.SORT, e.sortBy);
              t && n(t);
            }
          }, [n, e.sortBy]);
      };
    },
    95921: function (t, e, n) {
      "use strict";
      n.d(e, {
        SortDropdown: function () {
          return p;
        },
      });
      var r = n(75441),
        o = n(62569),
        a = n(65067),
        i = n(15937),
        s = n(2954),
        l = n(93093),
        c = n(68208),
        d = n(37629),
        u = n(69756),
        m = n(17392),
        _ = n(13534),
        x = n(28889),
        f = n(68197),
        h = n.n(f);
      let v = {
          [s.h.RATING]: (0, r.jsx)(i.Z, { id: "sort.sort-by-rating" }),
          [s.h.YEAR]: (0, r.jsx)(i.Z, { id: "sort.sort-by-year" }),
        },
        p = (0, o.Pi)((t) => {
          var e;
          let { sortModel: n, onSort: o } = t,
            {
              settings: { isMobile: f },
            } = (0, _.oR4)(),
            p = (0, l.W)((t) => {
              (0, x.V)(t.id) && n.sortBy !== t.id && (n.setSortBy(t.id), o());
            }),
            j = (0, a.useMemo)(
              () =>
                f
                  ? (0, r.jsx)(c.Button, {
                      radius: "xxxl",
                      className: h().button,
                      icon: (0, r.jsx)(u.Icon, {
                        variant: "filter",
                        size: "xs",
                      }),
                    })
                  : (0, r.jsxs)(c.Button, {
                      radius: "xxxl",
                      className: h().button,
                      children: [
                        (0, r.jsx)(m.Caption, {
                          variant: "span",
                          size: "m",
                          weight: "medium",
                          children: n.sortBy
                            ? v[n.sortBy]
                            : (0, r.jsx)(i.Z, { id: "sort.select-filter" }),
                        }),
                        (0, r.jsx)(u.Icon, {
                          size: "xxs",
                          variant: "arrowDown",
                        }),
                      ],
                    }),
              [f, n.sortBy],
            );
          return (0, r.jsx)(d.Lt, {
            placement: f ? "bottom" : "top",
            isMobile: f,
            strategy: "fixed",
            className: h().root,
            onSelect: p,
            reference: j,
            offsetOptions: { mainAxis: 10, crossAxis: -50 },
            defaultValue:
              null !== (e = n.sortBy) && void 0 !== e ? e : s.h.YEAR,
            containerClassName: h().container,
            header: f ? (0, r.jsx)("div", { className: h().header }) : void 0,
            children: Object.values(s.h).map((t) =>
              (0, r.jsx)(d.Wx, { id: t, label: v[t] }, t),
            ),
          });
        });
    },
    35551: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return r.NotFound;
        },
      });
      var r = n(15898);
    },
    15898: function (t, e, n) {
      "use strict";
      n.d(e, {
        NotFound: function () {
          return x;
        },
      });
      var r = n(75441),
        o = n(32358),
        a = n(62569),
        i = n(15937),
        s = n(68208),
        l = n(69756),
        c = n(17392),
        d = n(13534),
        u = n(97141),
        m = n(35129),
        _ = n.n(m);
      let x = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: n } = (0, d.$Y6)(),
          a = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, r.jsxs)("div", {
            className: (0, o.W)(_().root, { [_().root_desktop]: !n }, e),
            children: [
              (0, r.jsx)(u.nP, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, r.jsxs)("div", {
                className: _().content,
                children: [
                  (0, r.jsx)(l.Icon, {
                    className: _().icon,
                    variant: "musicLogo",
                  }),
                  (0, r.jsx)(c.Heading, {
                    className: (0, o.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, r.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, r.jsx)(c.Caption, {
                    className: (0, o.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, r.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, r.jsx)(s.Button, {
                    onClick: a,
                    className: _().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, r.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, r.jsx)(i.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    59630: function (t) {
      t.exports = {
        root: "DonationCard_root__81nc5",
        donation: "DonationCard_donation__SlArJ",
        cover: "DonationCard_cover__Mqb3g",
        image: "DonationCard_image__xABTn",
        container: "DonationCard_container__1xkqs",
        text: "DonationCard_text__mdeXx",
        artist: "DonationCard_artist__xq4Jw",
        goal: "DonationCard_goal__6BdcG",
        label: "DonationCard_label__T_hDw",
        shimmer: "DonationCard_shimmer__cMO7r",
        shimmerContainer: "DonationCard_shimmerContainer__9ZH20",
        shimmerText: "DonationCard_shimmerText__TrtjR",
        shimmerCover: "DonationCard_shimmerCover__U6Rwp",
        shimmerArtist: "DonationCard_shimmerArtist__jRQCV",
        shimmerGoal: "DonationCard_shimmerGoal__UGSTd",
        shimmerButton: "DonationCard_shimmerButton__LYfOm",
      };
    },
    85786: function (t) {
      t.exports = {
        root: "DonationCarousel_root__Uejjw",
        controls: "DonationCarousel_controls__anVvP",
        item: "DonationCarousel_item__89_B6",
        important: "DonationCarousel_important__Y52Es",
      };
    },
    68197: function (t) {
      t.exports = {
        root: "SortDropdown_root__d1JmQ",
        button: "SortDropdown_button__SjTI7",
        header: "SortDropdown_header__kj8yV",
        container: "SortDropdown_container__dyVF_",
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
    50507: function (t, e, n) {
      "use strict";
      var r, o;
      n.d(e, {
        A: function () {
          return r;
        },
      }),
        ((o = r || (r = {})).ASC = "asc"),
        (o.DESC = "desc");
    },
  },
  function (t) {
    t.O(
      0,
      [
        9876, 5970, 8580, 4665, 9125, 4679, 7138, 5453, 7873, 9282, 7141, 892,
        1512, 2783, 7294, 7099, 1562, 7629, 9630, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 22510));
      },
    ),
      (_N_E = t.O());
  },
]);
