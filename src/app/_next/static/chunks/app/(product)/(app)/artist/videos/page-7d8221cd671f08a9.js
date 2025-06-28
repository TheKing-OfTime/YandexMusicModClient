(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4388],
  {
    27624: function (t, a, e) {
      Promise.resolve().then(e.bind(e, 98259));
    },
    26406: function (t, a, e) {
      "use strict";
      e.d(a, {
        Ji: function () {
          return _;
        },
      });
      var r,
        o,
        n,
        i,
        s = e(43218),
        m = e(65067),
        u = e(9317);
      ((r = n || (n = {})).formatDate = "FormattedDate"),
        (r.formatTime = "FormattedTime"),
        (r.formatNumber = "FormattedNumber"),
        (r.formatList = "FormattedList"),
        (r.formatDisplayName = "FormattedDisplayName"),
        ((o = i || (i = {})).formatDate = "FormattedDateParts"),
        (o.formatTime = "FormattedTimeParts"),
        (o.formatNumber = "FormattedNumberParts"),
        (o.formatList = "FormattedListParts");
      var d = function (t) {
        var a = (0, u.Z)(),
          e = t.value,
          r = t.children,
          o = (0, s.__rest)(t, ["value", "children"]);
        return r(a.formatNumberToParts(e, o));
      };
      function c(t) {
        var a = function (a) {
          var e = (0, u.Z)(),
            r = a.value,
            o = a.children,
            n = (0, s.__rest)(a, ["value", "children"]),
            i = "string" == typeof r ? new Date(r || 0) : r;
          return o(
            "formatDate" === t
              ? e.formatDateToParts(i, n)
              : e.formatTimeToParts(i, n),
          );
        };
        return (a.displayName = i[t]), a;
      }
      function l(t) {
        var a = function (a) {
          var e = (0, u.Z)(),
            r = a.value,
            o = a.children,
            n = (0, s.__rest)(a, ["value", "children"]),
            i = e[t](r, n);
          if ("function" == typeof o) return o(i);
          var d = e.textComponent || m.Fragment;
          return m.createElement(d, null, i);
        };
        return (a.displayName = n[t]), a;
      }
      (d.displayName = "FormattedNumberParts"),
        (d.displayName = "FormattedNumberParts");
      var _ = l("formatDate");
      l("formatTime"),
        l("formatNumber"),
        l("formatList"),
        l("formatDisplayName"),
        c("formatDate"),
        c("formatTime");
    },
    98259: function (t, a, e) {
      "use strict";
      e.r(a);
      var r = e(75441),
        o = e(98730),
        n = e(13181),
        i = e(13534);
      a.default = () => {
        let t = (0, o.useSearchParams)().get("artistId");
        return (
          (t && (0, i.aBB)(t)) || (0, o.notFound)(),
          (0, r.jsx)(n.uV, { artistId: t })
        );
      };
    },
    35551: function (t, a, e) {
      "use strict";
      e.d(a, {
        T: function () {
          return r.NotFound;
        },
      });
      var r = e(15898);
    },
    15898: function (t, a, e) {
      "use strict";
      e.d(a, {
        NotFound: function () {
          return f;
        },
      });
      var r = e(75441),
        o = e(32358),
        n = e(62569),
        i = e(15937),
        s = e(68208),
        m = e(69756),
        u = e(17392),
        d = e(13534),
        c = e(97141),
        l = e(35129),
        _ = e.n(l);
      let f = (0, n.Pi)((t) => {
        let { className: a } = t,
          { contentRef: e } = (0, d.$Y6)(),
          n = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, r.jsxs)("div", {
            className: (0, o.W)(_().root, { [_().root_desktop]: !e }, a),
            children: [
              (0, r.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, r.jsxs)("div", {
                className: _().content,
                children: [
                  (0, r.jsx)(m.Icon, {
                    className: _().icon,
                    variant: "musicLogo",
                  }),
                  (0, r.jsx)(u.Heading, {
                    className: (0, o.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, r.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, r.jsx)(u.Caption, {
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
        9876, 5970, 8580, 4665, 861, 3661, 5638, 9125, 4679, 7138, 5453, 7873,
        8015, 9282, 7255, 585, 7141, 892, 1512, 2783, 2399, 7294, 7099, 1150,
        2242, 8743, 8492, 495, 1562, 4990, 8210, 3181, 7058, 6158, 1744,
      ],
      function () {
        return t((t.s = 27624));
      },
    ),
      (_N_E = t.O());
  },
]);
