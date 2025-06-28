(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5441],
  {
    88609: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 34137)),
        Promise.resolve().then(n.bind(n, 42542));
    },
    26406: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ji: function () {
          return u;
        },
      });
      var o,
        r,
        a,
        i,
        s = n(43218),
        l = n(65067),
        c = n(9317);
      ((o = a || (a = {})).formatDate = "FormattedDate"),
        (o.formatTime = "FormattedTime"),
        (o.formatNumber = "FormattedNumber"),
        (o.formatList = "FormattedList"),
        (o.formatDisplayName = "FormattedDisplayName"),
        ((r = i || (i = {})).formatDate = "FormattedDateParts"),
        (r.formatTime = "FormattedTimeParts"),
        (r.formatNumber = "FormattedNumberParts"),
        (r.formatList = "FormattedListParts");
      var d = function (t) {
        var e = (0, c.Z)(),
          n = t.value,
          o = t.children,
          r = (0, s.__rest)(t, ["value", "children"]);
        return o(e.formatNumberToParts(n, r));
      };
      function m(t) {
        var e = function (e) {
          var n = (0, c.Z)(),
            o = e.value,
            r = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            i = "string" == typeof o ? new Date(o || 0) : o;
          return r(
            "formatDate" === t
              ? n.formatDateToParts(i, a)
              : n.formatTimeToParts(i, a),
          );
        };
        return (e.displayName = i[t]), e;
      }
      function _(t) {
        var e = function (e) {
          var n = (0, c.Z)(),
            o = e.value,
            r = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            i = n[t](o, a);
          if ("function" == typeof r) return r(i);
          var d = n.textComponent || l.Fragment;
          return l.createElement(d, null, i);
        };
        return (e.displayName = a[t]), e;
      }
      (d.displayName = "FormattedNumberParts"),
        (d.displayName = "FormattedNumberParts");
      var u = _("formatDate");
      _("formatTime"),
        _("formatNumber"),
        _("formatList"),
        _("formatDisplayName"),
        m("formatDate"),
        m("formatTime");
    },
    34137: function (t, e, n) {
      "use strict";
      n.d(e, {
        LandingNotFoundPage: function () {
          return l;
        },
      });
      var o = n(75441),
        r = n(62569),
        a = n(65067),
        i = n(35551),
        s = n(13534);
      let l = (0, r.Pi)(() => {
        let { landing: t } = (0, s.oR4)();
        return (
          (0, a.useEffect)(
            () => () => {
              t.reset();
            },
            [t],
          ),
          (0, o.jsx)(i.T, {})
        );
      });
    },
    42542: function (t, e, n) {
      "use strict";
      n.d(e, {
        LandingPage: function () {
          return f;
        },
      });
      var o = n(75441),
        r = n(62569),
        a = n(65067),
        i = n(35846),
        s = n(17294),
        l = n(17392),
        c = n(30495),
        d = n(30948),
        m = n(69947),
        _ = n(13534),
        u = n(97141),
        g = n(72264),
        h = n.n(g);
      let f = (0, r.Pi)((t) => {
        let { skeleton: e } = t,
          { landing: n } = (0, _.oR4)(),
          r = (0, _.k67)(),
          { contentScrollRef: g, setContentScrollRef: f } = (0, _.$Y6)();
        return ((0, a.useEffect)(() => () => n.reset(), [n]),
        (0, _.NOh)(n.isResolved),
        n.isNeededToLoad &&
          (0, a.use)(
            n.getSkeleton({ id: e, showWizard: !1 }, { preloadBlocksCount: 2 }),
          ),
        n.isRejected)
          ? (0, o.jsx)(d.D, {})
          : (0, o.jsx)(_.Lh6, {
              pageId: _.Rhz.LANDING,
              children: (0, o.jsx)(_.YvS, {
                skeleton: e,
                children: (0, o.jsx)(m.I7, {
                  scrollElement: g,
                  headerThreshold: 134,
                  children: (0, o.jsxs)(s.t, {
                    className: h().root,
                    containerClassName: h().content,
                    ref: f,
                    ...(0, i.BA)(i.Br.landing.LANDING_PAGE),
                    children: [
                      (0, o.jsxs)("div", {
                        className: h().header,
                        children: [
                          r.canBack &&
                            (0, o.jsx)(u.nP, {
                              withForwardControl: !1,
                              withBackwardControl: r.canBack,
                            }),
                          (0, o.jsx)(l.Heading, {
                            variant: "h1",
                            weight: "bold",
                            size: "xl",
                            className: h().title,
                            ...(0, i.BA)(i.Br.landing.LANDING_PAGE_HEADER),
                            children: n.title,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: h().landing,
                        children: (0, o.jsx)(c.Od, {
                          landing: n,
                          errorComponent: (0, o.jsx)(d.D, {
                            className: h().error,
                            withBackwardControl: !1,
                          }),
                        }),
                      }),
                      (0, o.jsx)(u.$_, { className: h().footer }),
                    ],
                  }),
                }),
              }),
            });
      });
    },
    35551: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o.NotFound;
        },
      });
      var o = n(15898);
    },
    15898: function (t, e, n) {
      "use strict";
      n.d(e, {
        NotFound: function () {
          return g;
        },
      });
      var o = n(75441),
        r = n(32358),
        a = n(62569),
        i = n(15937),
        s = n(68208),
        l = n(69756),
        c = n(17392),
        d = n(13534),
        m = n(97141),
        _ = n(35129),
        u = n.n(_);
      let g = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: n } = (0, d.$Y6)(),
          a = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, o.jsxs)("div", {
            className: (0, r.W)(u().root, { [u().root_desktop]: !n }, e),
            children: [
              (0, o.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: u().navigation,
                withForwardControl: !1,
              }),
              (0, o.jsxs)("div", {
                className: u().content,
                children: [
                  (0, o.jsx)(l.Icon, {
                    className: u().icon,
                    variant: "musicLogo",
                  }),
                  (0, o.jsx)(c.Heading, {
                    className: (0, r.W)(u().title, u().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, o.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, o.jsx)(c.Caption, {
                    className: (0, r.W)(u().text, u().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, o.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, o.jsx)(s.Button, {
                    onClick: a,
                    className: u().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, o.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, o.jsx)(i.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    30948: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return o.SomethingWentWrong;
        },
      });
      var o = n(51987);
    },
    51987: function (t, e, n) {
      "use strict";
      n.d(e, {
        SomethingWentWrong: function () {
          return h;
        },
      });
      var o = n(75441),
        r = n(32358),
        a = n(62569),
        i = n(65067),
        s = n(15937),
        l = n(68208),
        c = n(69756),
        d = n(17392),
        m = n(13534),
        _ = n(97141),
        u = n(28652),
        g = n.n(u);
      let h = (0, a.Pi)((t) => {
        let { className: e, withBackwardControl: n = !0 } = t,
          a = (0, i.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: u } = (0, m.$Y6)();
        return (0, o.jsxs)("div", {
          className: (0, r.W)(g().root, e),
          children: [
            n &&
              (0, o.jsx)(_.nP, {
                withBackwardFallback: "/",
                className: (0, r.W)(g().navigation, {
                  [g().navigation_desktop]: !u,
                }),
                withForwardControl: !1,
              }),
            (0, o.jsxs)("div", {
              className: (0, r.W)(g().content, { [g().content_shrink]: !n }),
              children: [
                (0, o.jsx)(c.Icon, {
                  className: g().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, o.jsx)(d.Heading, {
                  className: (0, r.W)(g().title, g().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, o.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, o.jsxs)(d.Caption, {
                  className: (0, r.W)(g().text, g().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, o.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, o.jsx)(l.Button, {
                  onClick: a,
                  className: g().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, o.jsxs)(d.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, o.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    72264: function (t) {
      t.exports = {
        content: "LandingPage_content__ovHlJ",
        root: "LandingPage_root__B2lPp",
        header: "LandingPage_header__TiraG",
        title: "LandingPage_title__gsIx4",
        footer: "LandingPage_footer__K9y8K",
        error: "LandingPage_error__mEsH2",
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
    28652: function (t) {
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
        9876, 5970, 8580, 4665, 861, 3661, 5638, 9125, 9039, 7138, 5453, 7873,
        8015, 9282, 7255, 7141, 892, 1512, 2783, 2399, 7294, 7099, 1150, 2242,
        8743, 8492, 495, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 88609));
      },
    ),
      (_N_E = t.O());
  },
]);
