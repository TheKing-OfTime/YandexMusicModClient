(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9192],
  {
    96663: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 51987));
    },
    51987: function (n, t, e) {
      "use strict";
      e.d(t, {
        SomethingWentWrong: function () {
          return d;
        },
      });
      var o = e(75441),
        i = e(32358),
        r = e(62569),
        a = e(65067),
        s = e(15937),
        _ = e(68208),
        c = e(69756),
        l = e(17392),
        g = e(13534),
        h = e(97141),
        m = e(28652),
        W = e.n(m);
      let d = (0, r.Pi)((n) => {
        let { className: t, withBackwardControl: e = !0 } = n,
          r = (0, a.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: m } = (0, g.$Y6)();
        return (0, o.jsxs)("div", {
          className: (0, i.W)(W().root, t),
          children: [
            e &&
              (0, o.jsx)(h.nP, {
                withBackwardFallback: "/",
                className: (0, i.W)(W().navigation, {
                  [W().navigation_desktop]: !m,
                }),
                withForwardControl: !1,
              }),
            (0, o.jsxs)("div", {
              className: (0, i.W)(W().content, { [W().content_shrink]: !e }),
              children: [
                (0, o.jsx)(c.Icon, {
                  className: W().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, o.jsx)(l.Heading, {
                  className: (0, i.W)(W().title, W().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, o.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, o.jsxs)(l.Caption, {
                  className: (0, i.W)(W().text, W().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, o.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, o.jsx)(_.Button, {
                  onClick: r,
                  className: W().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, o.jsxs)(l.Caption, {
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
    28652: function (n) {
      n.exports = {
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
  function (n) {
    n.O(
      0,
      [9876, 5970, 8580, 9125, 7138, 5453, 7873, 9282, 7141, 7058, 6158, 1744],
      function () {
        return n((n.s = 96663));
      },
    ),
      (_N_E = n.O());
  },
]);
