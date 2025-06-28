(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5569],
  {
    61490: function (t, a, r) {
      Promise.resolve().then(r.bind(r, 7047));
    },
    26406: function (t, a, r) {
      "use strict";
      r.d(a, {
        Ji: function () {
          return _;
        },
      });
      var e,
        o,
        n,
        i,
        s = r(43218),
        m = r(65067),
        u = r(9317);
      ((e = n || (n = {})).formatDate = "FormattedDate"),
        (e.formatTime = "FormattedTime"),
        (e.formatNumber = "FormattedNumber"),
        (e.formatList = "FormattedList"),
        (e.formatDisplayName = "FormattedDisplayName"),
        ((o = i || (i = {})).formatDate = "FormattedDateParts"),
        (o.formatTime = "FormattedTimeParts"),
        (o.formatNumber = "FormattedNumberParts"),
        (o.formatList = "FormattedListParts");
      var d = function (t) {
        var a = (0, u.Z)(),
          r = t.value,
          e = t.children,
          o = (0, s.__rest)(t, ["value", "children"]);
        return e(a.formatNumberToParts(r, o));
      };
      function c(t) {
        var a = function (a) {
          var r = (0, u.Z)(),
            e = a.value,
            o = a.children,
            n = (0, s.__rest)(a, ["value", "children"]),
            i = "string" == typeof e ? new Date(e || 0) : e;
          return o(
            "formatDate" === t
              ? r.formatDateToParts(i, n)
              : r.formatTimeToParts(i, n),
          );
        };
        return (a.displayName = i[t]), a;
      }
      function l(t) {
        var a = function (a) {
          var r = (0, u.Z)(),
            e = a.value,
            o = a.children,
            n = (0, s.__rest)(a, ["value", "children"]),
            i = r[t](e, n);
          if ("function" == typeof o) return o(i);
          var d = r.textComponent || m.Fragment;
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
    7047: function (t, a, r) {
      "use strict";
      r.r(a);
      var e = r(75441),
        o = r(98730),
        n = r(13181),
        i = r(13534);
      a.default = () => {
        let t = (0, o.useSearchParams)().get("artistId");
        return (
          (t && (0, i.aBB)(t)) || (0, o.notFound)(),
          (0, e.jsx)(n.pr, { artistId: t, variant: i.MX1.DISCOGRAPHY })
        );
      };
    },
    35551: function (t, a, r) {
      "use strict";
      r.d(a, {
        T: function () {
          return e.NotFound;
        },
      });
      var e = r(15898);
    },
    15898: function (t, a, r) {
      "use strict";
      r.d(a, {
        NotFound: function () {
          return f;
        },
      });
      var e = r(75441),
        o = r(32358),
        n = r(62569),
        i = r(15937),
        s = r(68208),
        m = r(69756),
        u = r(17392),
        d = r(13534),
        c = r(97141),
        l = r(35129),
        _ = r.n(l);
      let f = (0, n.Pi)((t) => {
        let { className: a } = t,
          { contentRef: r } = (0, d.$Y6)(),
          n = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, e.jsxs)("div", {
            className: (0, o.W)(_().root, { [_().root_desktop]: !r }, a),
            children: [
              (0, e.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: _().navigation,
                withForwardControl: !1,
              }),
              (0, e.jsxs)("div", {
                className: _().content,
                children: [
                  (0, e.jsx)(m.Icon, {
                    className: _().icon,
                    variant: "musicLogo",
                  }),
                  (0, e.jsx)(u.Heading, {
                    className: (0, o.W)(_().title, _().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, e.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, e.jsx)(u.Caption, {
                    className: (0, o.W)(_().text, _().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, e.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, e.jsx)(s.Button, {
                    onClick: n,
                    className: _().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, e.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, e.jsx)(i.Z, { id: "navigation.page-main" }),
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
        return t((t.s = 61490));
      },
    ),
      (_N_E = t.O());
  },
]);
