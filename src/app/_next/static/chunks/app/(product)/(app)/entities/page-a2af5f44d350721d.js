(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6682],
  {
    20004: function (t, e, o) {
      Promise.resolve().then(o.bind(o, 28399));
    },
    26406: function (t, e, o) {
      "use strict";
      o.d(e, {
        Ji: function () {
          return _;
        },
      });
      var r,
        a,
        n,
        i,
        s = o(43218),
        c = o(65067),
        u = o(9317);
      ((r = n || (n = {})).formatDate = "FormattedDate"),
        (r.formatTime = "FormattedTime"),
        (r.formatNumber = "FormattedNumber"),
        (r.formatList = "FormattedList"),
        (r.formatDisplayName = "FormattedDisplayName"),
        ((a = i || (i = {})).formatDate = "FormattedDateParts"),
        (a.formatTime = "FormattedTimeParts"),
        (a.formatNumber = "FormattedNumberParts"),
        (a.formatList = "FormattedListParts");
      var l = function (t) {
        var e = (0, u.Z)(),
          o = t.value,
          r = t.children,
          a = (0, s.__rest)(t, ["value", "children"]);
        return r(e.formatNumberToParts(o, a));
      };
      function m(t) {
        var e = function (e) {
          var o = (0, u.Z)(),
            r = e.value,
            a = e.children,
            n = (0, s.__rest)(e, ["value", "children"]),
            i = "string" == typeof r ? new Date(r || 0) : r;
          return a(
            "formatDate" === t
              ? o.formatDateToParts(i, n)
              : o.formatTimeToParts(i, n),
          );
        };
        return (e.displayName = i[t]), e;
      }
      function d(t) {
        var e = function (e) {
          var o = (0, u.Z)(),
            r = e.value,
            a = e.children,
            n = (0, s.__rest)(e, ["value", "children"]),
            i = o[t](r, n);
          if ("function" == typeof a) return a(i);
          var l = o.textComponent || c.Fragment;
          return c.createElement(l, null, i);
        };
        return (e.displayName = n[t]), e;
      }
      (l.displayName = "FormattedNumberParts"),
        (l.displayName = "FormattedNumberParts");
      var _ = d("formatDate");
      d("formatTime"),
        d("formatNumber"),
        d("formatList"),
        d("formatDisplayName"),
        m("formatDate"),
        m("formatTime");
    },
    28399: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, {
          default: function () {
            return i;
          },
        });
      var r = o(75441),
        a = o(98730);
      o(45868);
      var n = o(56453),
        i = () => {
          let t = (0, a.useSearchParams)(),
            e = t.get("blockType"),
            o = t.get("blockId");
          return (
            (e && o) || (0, a.notFound)(),
            (0, r.jsx)(n.EntitiesPage, { blockType: e, blockId: o })
          );
        };
    },
    45868: function (t, e, o) {
      "use strict";
      o.d(e, {
        EntitiesNotFoundPage: function () {
          return c;
        },
      });
      var r = o(75441),
        a = o(62569),
        n = o(65067),
        i = o(35551),
        s = o(13534);
      let c = (0, a.Pi)(() => {
        let { landingBlockEntities: t } = (0, s.oR4)();
        return (
          (0, n.useEffect)(
            () => () => {
              t.reset();
            },
            [t],
          ),
          (0, r.jsx)(i.T, {})
        );
      });
    },
    56453: function (t, e, o) {
      "use strict";
      o.d(e, {
        EntitiesPage: function () {
          return d;
        },
      });
      var r = o(75441),
        a = o(62569),
        n = o(98730),
        i = o(65067),
        s = o(30495),
        c = o(13534),
        u = o(71011);
      let l = {
          "new-releases": u.g.NEW_RELEASES,
          "editorial-new-releases": u.g.EDITORIAL_NEW_RELEASES,
          "personal-artists": u.g.PERSONAL_ARTISTS,
          "new-stars-artists": u.g.NEW_STARS_ARTISTS,
          "editorial-artists": u.g.EDITORIAL_ARTISTS,
          "new-playlists": u.g.NEW_PLAYLISTS,
          "editorial-compilation": u.g.EDITORIAL_COMPILATION,
          "non-music-editorial-compilation": u.g.EDITORIAL_COMPILATION,
          "chart-albums": u.g.CHART_ALBUMS,
          "mixes-grid": u.g.MIXES_GRID,
          "mixes-music": u.g.MIXES_MUSIC,
        },
        m = (t) => l[t],
        d = (0, a.Pi)((t) => {
          let { blockType: e, blockId: o } = t,
            { landingBlockEntities: a } = (0, c.oR4)();
          (0, i.useEffect)(
            () => () => {
              a.reset();
            },
            [a, e, o],
          ),
            (0, c.NOh)(a.loadingState === c.Gui.RESOLVE);
          let u = m(e);
          return (
            (a.isNotFound || !u) && (0, n.notFound)(),
            (0, r.jsx)(c.Lh6, {
              pageId: c.Rhz.ENTITIES,
              children: (0, r.jsx)(c.Ja5, {
                blockId: "".concat(c.BEo.DISCOVERY_BLOCK, "-").concat(o),
                blockIdForFrom: "".concat(c.BEo.DISCOVERY_BLOCK, "-").concat(o),
                blockPosX: 1,
                blockPosY: 1,
                blockType: u,
                objectsCount: a.items.length,
                children: (0, r.jsx)(s.v8, { blockType: u, blockId: o }),
              }),
            })
          );
        });
    },
    35551: function (t, e, o) {
      "use strict";
      o.d(e, {
        T: function () {
          return r.NotFound;
        },
      });
      var r = o(15898);
    },
    15898: function (t, e, o) {
      "use strict";
      o.d(e, {
        NotFound: function () {
          return f;
        },
      });
      var r = o(75441),
        a = o(32358),
        n = o(62569),
        i = o(15937),
        s = o(68208),
        c = o(69756),
        u = o(17392),
        l = o(13534),
        m = o(97141),
        d = o(35129),
        _ = o.n(d);
      let f = (0, n.Pi)((t) => {
        let { className: e } = t,
          { contentRef: o } = (0, l.$Y6)(),
          n = (0, l.s0h)("/");
        return (
          (0, l.ZP4)(!0),
          (0, r.jsxs)("div", {
            className: (0, a.W)(_().root, { [_().root_desktop]: !o }, e),
            children: [
              (0, r.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, r.jsxs)("div", {
                className: _().content,
                children: [
                  (0, r.jsx)(c.Icon, {
                    className: _().icon,
                    variant: "musicLogo",
                  }),
                  (0, r.jsx)(u.Heading, {
                    className: (0, a.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, r.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, r.jsx)(u.Caption, {
                    className: (0, a.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, r.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, r.jsx)(s.Button, {
                    onClick: n,
                    className: _().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, r.jsx)(u.Caption, {
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
        9876, 5970, 8580, 4665, 861, 3661, 5638, 7138, 5453, 7873, 8015, 9282,
        7255, 7141, 892, 1512, 2783, 2399, 7294, 7099, 1150, 2242, 8743, 8492,
        495, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 20004));
      },
    ),
      (_N_E = t.O());
  },
]);
