(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1512],
  {
    91307: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return n;
        },
      });
      var r = {};
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createRipple = void 0),
        (r.createRipple = function (e, t, i) {
          let r = null != i ? i : e.currentTarget,
            n = document.createElement("span"),
            o = Math.max(r.clientWidth, r.clientHeight),
            a = o / 2,
            s = r.getBoundingClientRect(),
            l = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
            c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
          (n.style.width = "".concat(o, "px")),
            (n.style.height = "".concat(o, "px")),
            (n.style.left = 0 === e.clientX ? "0px" : "".concat(l - a, "px")),
            (n.style.top = "".concat(c - a, "px")),
            n.classList.add(t);
          let u = r.getElementsByClassName(t)[0];
          u && u.remove(), r.insertBefore(n, r.firstChild);
        }),
        r.__esModule;
      var n = r.createRipple;
    },
    18333: function (e, t, i) {
      "use strict";
      i.d(t, {
        kk: function () {
          return d;
        },
        m7: function () {
          return f;
        },
      });
      var r,
        n,
        o,
        a = i(65067),
        s = {
          5881: (e, t, i) => {
            function r() {
              for (var e, t, i = 0, r = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      r,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (r = e(t[i])) && (n && (n += " "), (n += r));
                      else for (i in t) t[i] && (n && (n += " "), (n += i));
                    }
                    return n;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            i.r(t), i.d(t, { clsx: () => r, default: () => n });
            let n = r;
          },
          4881: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "KL50tMDvfAdw_9MzcVht",
              bottom: "bL0wE1Bui8zpIZbvMVL3",
              top: "P6gOmyFtXyetUz0dqhF3",
              bottom_left: "RvWjZle1erRBXzJEF9Zj",
              bottom_right: "bBh7lvgdfF7bqNqlK78Q",
              label: "FgncHYHPDU14dLddn0wF",
              controls: "PBhQ1krUFiAybu_BS2YE",
              controls_radius_default: "cSCPJSa6Lx6OnpM4ljX9",
              controls_radius_round: "kHUOlGxOaBwL4P3jEBXU",
              controls_visible: "QZC5vQL9p11QsEkdkTtZ",
            };
          },
          4247: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "laBJlJAaqEVS0i_4Ot3l",
              titleContainer: "LmhA6nlLyzxwYIX31gYa",
              wrapper: "IO4kvpDGNI2J0CHwcKSf",
              content: "l8SktNpJd30JWp1owp_b",
              content_left: "Mb33JzAWx9EjbQAeScFt",
              description: "kbcBH9meMfY6Du_xQNnI",
              content_center: "Dp41JRuLGzwV3MHBYHMC",
              content_right: "eOsuNCgUirwAw16iUKLu",
              title: "FAmeEGy52GX1k0xZuPDn",
              content_linesCount_2: "lV4OXsCTURC5K1s9Q5mx",
              content_linesCount_3: "PVBDIXF2RTUThmbNT9sV",
              content_linesCount_4: "ND4XIwkIYtNoU89EOISr",
            };
          },
          9474: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = { root: "LizdJ2L0HW7JWOvPrfly" };
          },
          7238: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "eaYyesBmJL_NbkgoYR1c",
              focusable: "uL1dD5rxgI4bPmfyMMe7",
            };
          },
          3641: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          5153: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_size_xxxxxl: "WdvQQNwdDNCdRSwRkAtT",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          5818: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, i) => {
            var r = i(810),
              n = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              a = Object.prototype.hasOwnProperty,
              s =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var r,
                o = {},
                c = null,
                u = null;
              for (r in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: u,
                props: o,
                _owner: s.current,
              };
            }
            (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          5817: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CardControls = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(9e3),
              s = r(i(4881));
            t.CardControls = (e) => {
              let {
                  className: t,
                  playControl: i,
                  likeControl: r,
                  menuControl: l,
                  pinControl: c,
                  trailerControl: u,
                  isVisible: d,
                  radius: f = "default",
                  bottomContainerClassName: _,
                  labelText: m,
                } = e,
                p = u || i,
                v = l || r;
              return (0, n.jsxs)("div", {
                className: (0, o.clsx)(
                  s.default.root,
                  s.default.controls,
                  { [s.default.controls_visible]: d },
                  s.default["controls_radius_".concat(f)],
                  t,
                ),
                children: [
                  (0, n.jsx)("div", { className: s.default.top, children: c }),
                  (0, n.jsxs)("div", {
                    className: (0, o.clsx)(s.default.bottom, _),
                    children: [
                      p &&
                        (0, n.jsxs)("div", {
                          className: s.default.bottom_left,
                          children: [u, i],
                        }),
                      v &&
                        (0, n.jsxs)("div", {
                          className: s.default.bottom_right,
                          children: [l, r],
                        }),
                    ],
                  }),
                  !!m &&
                    (0, n.jsx)(a.Label, {
                      className: s.default.label,
                      children: m,
                    }),
                ],
              });
            };
          },
          440: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.EntityCard = void 0);
            let n = i(9541),
              o = i(810),
              a = i(5881),
              s = i(2582),
              l = i(3758),
              c = r(i(4247)),
              u = (e) => {
                let {
                  forwardRef: t,
                  view: i,
                  className: r,
                  textPosition: o = "left",
                  contentLinesCount: u = 2,
                  title: d,
                  description: f,
                  explicitMarkComponent: _,
                  chart: m,
                  children: p,
                  srTitle: v,
                  ...y
                } = e;
                return (0, n.jsxs)("div", {
                  className: (0, a.clsx)(c.default.root, r),
                  ref: t,
                  ...y,
                  children: [
                    (0, n.jsx)(l.SROnly, {
                      tabIndex: -1,
                      children: null != v ? v : d,
                    }),
                    (0, n.jsx)("div", {
                      className: c.default.viewContainer,
                      children: i,
                    }),
                    (0, n.jsxs)("div", {
                      className: c.default.wrapper,
                      children: [
                        m,
                        (0, n.jsxs)("div", {
                          className: (0, a.clsx)(
                            c.default.content,
                            c.default["content_".concat(o)],
                            c.default["content_linesCount_".concat(u)],
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: c.default.titleContainer,
                              children: [
                                (0, n.jsx)(s.Caption, {
                                  className: c.default.title,
                                  variant: "div",
                                  type: "entity",
                                  size: "s",
                                  weight: "medium",
                                  lineClamp: 2,
                                  children: d,
                                }),
                                _,
                              ],
                            }),
                            f,
                            p,
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              };
            t.EntityCard = (0, o.forwardRef)((e, t) =>
              (0, n.jsx)(u, { forwardRef: t, ...e }),
            );
          },
          2: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Label = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(2582),
              s = r(i(9474));
            t.Label = (e) => {
              let { children: t, className: i, size: r = "s" } = e;
              return (0, n.jsx)(a.Caption, {
                variant: "div",
                type: "text",
                size: r,
                lineClamp: 1,
                className: (0, o.clsx)(s.default.root, i),
                children: t,
              });
            };
          },
          9e3: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Label = void 0);
            var r = i(2);
            Object.defineProperty(t, "Label", {
              enumerable: !0,
              get: function () {
                return r.Label;
              },
            });
          },
          2865: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SROnly = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(810),
              s = r(i(7238));
            t.SROnly = (e) => {
              let { className: t, focusable: i, children: r, ...l } = e,
                c = (0, o.clsx)(
                  s.default.root,
                  { [s.default.focusable]: i },
                  t,
                );
              return (0, a.isValidElement)(r)
                ? (0, a.cloneElement)(r, {
                    ...l,
                    className: (0, o.clsx)(c, r.props.className),
                  })
                : (0, n.jsx)("span", { className: c, ...l, children: r });
            };
          },
          3758: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SROnly = void 0);
            var r = i(2865);
            Object.defineProperty(t, "SROnly", {
              enumerable: !0,
              get: function () {
                return r.SROnly;
              },
            });
          },
          7743: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(810),
              s = i(4721),
              l = r(i(3641));
            (t.CaptionComponent = (e) => {
              let {
                forwardRef: t,
                variant: i,
                type: r = "text",
                size: a = "s",
                className: c,
                children: u,
                weight: d = "medium",
                ...f
              } = e;
              return (0, n.jsx)(s.Typography, {
                variant: i,
                ref: t,
                className: (0, o.clsx)(
                  l.default.root,
                  l.default["root_".concat(r, "_").concat(a)],
                  l.default["root_weight_".concat(d)],
                  c,
                ),
                ...f,
                children: u,
              });
            }),
              (t.Caption = (0, a.forwardRef)((e, i) =>
                (0, n.jsx)(t.CaptionComponent, { forwardRef: i, ...e }),
              ));
          },
          404: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(810),
              s = i(4721),
              l = r(i(5153));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: i,
                weight: r = "bold",
                size: a = "s",
                className: c,
                children: u,
                ...d
              } = e;
              return (0, n.jsx)(s.Typography, {
                variant: i,
                ref: t,
                className: (0, o.clsx)(
                  l.default.root,
                  l.default["root_size_".concat(a)],
                  l.default["root_weight_".concat(r)],
                  c,
                ),
                ...d,
                children: u,
              });
            }),
              (t.Heading = (0, a.forwardRef)((e, i) =>
                (0, n.jsx)(t.HeadingComponent, { forwardRef: i, ...e }),
              ));
          },
          4721: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(810),
              s = r(i(5818));
            function l(e) {
              let {
                  forwardRef: t,
                  style: i,
                  className: r,
                  children: a,
                  variant: l,
                  lineClamp: c,
                  ...u
                } = e,
                d = c && "string" == typeof a ? a : void 0;
              return (0, n.jsx)(l, {
                style: { ...i, WebkitLineClamp: c },
                ref: t,
                title: d,
                className: (0, o.clsx)(
                  s.default.root,
                  {
                    [s.default.root_clamp]: c && c > 0,
                    [s.default.root_clamp_oneline]: c && 1 === c,
                    [s.default.root_clamp_multiline]: c && c > 1,
                  },
                  r,
                ),
                ...u,
                children: a,
              });
            }
            (t.TypographyComponent = l),
              (t.Typography = (0, a.forwardRef)((e, t) =>
                (0, n.jsx)(l, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var r = i(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return r.Caption;
              },
            });
            var n = i(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return n.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = o || (o = i.t(a, 2));
          },
        },
        l = {};
      function c(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var i = (l[e] = { exports: {} });
        return s[e].call(i.exports, i, i.exports, c), i.exports;
      }
      (c.d = (e, t) => {
        for (var i in t)
          c.o(t, i) &&
            !c.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (c.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "X$", { value: !0 }),
        (u.kk = u.m7 = void 0),
        (r = c(440)),
        Object.defineProperty(u, "m7", {
          enumerable: !0,
          get: function () {
            return r.EntityCard;
          },
        }),
        (n = c(5817)),
        Object.defineProperty(u, "kk", {
          enumerable: !0,
          get: function () {
            return n.CardControls;
          },
        });
      var d = u.kk,
        f = u.m7;
      u.X$;
    },
    85790: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var r,
        n,
        o = i(65067),
        a = {
          5881: (e, t, i) => {
            function r() {
              for (var e, t, i = 0, r = ""; i < arguments.length; )
                (e = arguments[i++]) &&
                  (t = (function e(t) {
                    var i,
                      r,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (i = 0; i < t.length; i++)
                          t[i] && (r = e(t[i])) && (n && (n += " "), (n += r));
                      else for (i in t) t[i] && (n && (n += " "), (n += i));
                    }
                    return n;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            i.r(t), i.d(t, { clsx: () => r, default: () => n });
            let n = r;
          },
          1920: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              contentContainer: "JjlbHZ4FaP9EAcR_1DxF",
              contentContainer_block: "iOlzvyUREgDkthkrx7Sf",
              flexIcon: "WsKeF73pWotx9W1tWdYY",
              root: "cpeagBA1_PblpJn8Xgtv",
              root_withoutBorder: "qU2apWBO1yyEK0lZ3lPO",
              root_radius_xs: "MmZbSs387gu2qrJ1lDWd",
              root_radius_s: "mlcrraysn7mW6xrBXSBF",
              root_radius_m: "dgV08FKVLZKFsucuiryn",
              root_radius_l: "S97_5dtzhpxo_amtfYRg",
              root_radius_xl: "nNBJnDHRlyLTniWosJhk",
              root_radius_xxxl: "zIMibMuH7wcqUoW7KH1B",
              root_radius_round: "uwk3hfWzB2VT7kE13SQk",
              root_size: "IlG7b1K0AD7E7AMx6F5p",
              root_size_default: "C_QGmfTz6UFX93vfPt6Z",
              root_size_xxxs: "eQt33MLDiQ6DRSuLaYEp",
              root_size_xxs: "oR11LfCBVqMbUJiAgknd",
              root_size_xs: "j1jXIVckFgZECecFzZMe",
              root_size_s: "WtFdWDF44egSVM_YiMUX",
              root_size_m: "Y2uqxoU7xa_AZ8FUCVOW",
              root_size_l: "SGYcNjvjmMsXeEVGUV2Z",
              root_icon_left: "kc5CjvU5hT9KEj0iTt3C",
              root_icon_right: "et24Jf7pT_X9Fvc7TznR",
              root_primary: "fXlFz1qMkliFUWOkHo8T",
              root_primary_default: "_eTRQi5ADZCUvUKMZqJU",
              ripple: "spMT3NcRD9Yb0ntNaNct",
              root_primary_outline: "fCUSh2B0Ye9kEvceE8zc",
              root_primary_text: "qlPp6CSQQEMVZPqtqLiQ",
              root_primary_withHover: "KZF6_4K1p_Y_GMIAxaAn",
              root_primary_withHover_default: "rWukOKAJh5Ga7JuIp62L",
              root_primary_withHover_outline: "fdwWCJKgUqml5wNqrRcN",
              root_primary_withHover_text: "IgYbZLnYjW0nMahgpkus",
              root_secondary: "_T4p_w41oaq6L4sztSdw",
              root_secondary_default: "iJVAJMgccD4vj4E4o068",
              root_secondary_outline: "pnM3iSP9keZOELI2oohr",
              root_secondary_text: "UDMYhpDjiAFT3xUx268O",
              root_secondary_withHover: "qUbrkhZIOVrvM0roV1QF",
              root_secondary_withHover_default: "nHWc2sto1C6Gm0Dpw_l0",
              root_secondary_withHover_outline: "i5WuBm5mfG0mflk_1jH_",
              root_secondary_withHover_text: "HbaqudSqu7Q3mv3zMPGr",
              root_plus: "ixLRsIJ2FvXO2k04n_QY",
              root_plus_default: "yRHwHzEGfDgRXGzYJqw2",
              root_plus_outline: "e777irPFmyQFFrURLF_U",
              root_plus_text: "vRqDhvmt3gt8TFp45_Zw",
              root_plus_withHover: "TZif6q3I2RwBEYXwK_iA",
              root_plus_withHover_default: "k3DhvmzpnM_Fb9oFdE4q",
              root_plus_withHover_outline: "RiDWYwGIxqbrUPR699DM",
              root_plus_withHover_text: "hC_mMCzWjkTn2j9xZzGc",
              root_accent: "jqD2jMT6n7F0WKyqwMsn",
              root_accent_default: "bDp0r9MtoYECZ8ObMoCh",
              root_accent_outline: "rXNyGp8NBAw2MUjACZNj",
              root_accent_text: "hmV4ERaXWAJc4uPLZL30",
              root_accent_withHover: "uKuxXu1N4TP5cWaEK5Ke",
              root_accent_withHover_default: "t_hequUaUgAMhFuxizLb",
              root_accent_withHover_outline: "Oy9sPFTxNTo1_E29U4aF",
              root_accent_withHover_text: "LcKRSd3DLoh7k60Oqox8",
              root_withActiveSpinner: "nAGvO87rLs15SJgft6Hh",
              block: "BbCxxIjBGupN28bq2lSP",
              icon: "J9wTKytjOWG73QMoN5WP",
              icon_position_left: "elJfazUBui03YWZgHCbW",
              icon_position_right: "RBoEbyJKP5rEtLsXM1ji",
              icon_withButtonSize: "cE17_kCWJgx8kzQEkeVr",
              spinnerContainer: "STbBDGqYjUEcLuNvhu9w",
            };
          },
          5682: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "rqUESGQ8jp3tbDawOzuG",
              root_checked: "GJh5PwV9GyFuKhlG6pQz",
              icon: "aw9IoPC0GuAC7Hmf825u",
              icon_checked: "KC8t9NStVmQ1_VY54KH4",
            };
          },
          6161: (e, t, i) => {
            var r = i(810),
              n = Symbol.for("react.element"),
              o = Symbol.for("react.fragment"),
              a = Object.prototype.hasOwnProperty,
              s =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, i) {
              var r,
                o = {},
                c = null,
                u = null;
              for (r in (void 0 !== i && (c = "" + i),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: n,
                type: e,
                key: c,
                ref: u,
                props: o,
                _owner: s.current,
              };
            }
            (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, i) => {
            e.exports = i(6161);
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, i) {
                let r = null != i ? i : e.currentTarget,
                  n = document.createElement("span"),
                  o = Math.max(r.clientWidth, r.clientHeight),
                  a = o / 2,
                  s = r.getBoundingClientRect(),
                  l =
                    0 === e.clientX
                      ? Math.round(s.width / 2)
                      : e.clientX - s.left,
                  c =
                    0 === e.clientY
                      ? Math.round(s.height / 2)
                      : e.clientY - s.top;
                (n.style.width = "".concat(o, "px")),
                  (n.style.height = "".concat(o, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(l - a, "px")),
                  (n.style.top = "".concat(c - a, "px")),
                  n.classList.add(t);
                let u = r.getElementsByClassName(t)[0];
                u && u.remove(), r.insertBefore(n, r.firstChild);
              });
          },
          361: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = void 0),
              (t.getElementFromRefOrElement = (e) =>
                void 0 === e
                  ? void 0
                  : null === e || e instanceof HTMLElement
                    ? e
                    : null === e.current || e.current instanceof HTMLElement
                      ? e.current
                      : void 0);
          },
          8216: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = t.createRipple = void 0);
            var r = i(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return r.createRipple;
              },
            });
            var n = i(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return n.getElementFromRefOrElement;
              },
            });
          },
          8119: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let n = i(9541),
              o = i(810),
              a = i(5881),
              s = i(8216),
              l = r(i(1920)),
              c = (e) => {
                let {
                    forwardRef: t,
                    isBlock: i,
                    iconPosition: r = "left",
                    children: c,
                    className: u,
                    color: d = "secondary",
                    flexIcon: f,
                    icon: _,
                    spinner: m,
                    role: p,
                    onClick: v,
                    radius: y = "m",
                    size: x,
                    type: g = "button",
                    variant: h = "default",
                    withRipple: b = !0,
                    withHover: C = !0,
                    withBorder: j = !1,
                    disabled: k,
                    iconClassName: A,
                    contentContainerClassName: R,
                    ...E
                  } = e,
                  P = (0, o.useId)(),
                  T = !o.Children.toArray(c).filter(Boolean).length,
                  O = "left" === r,
                  N = null,
                  S = (0, o.isValidElement)(m);
                if (_) {
                  var I, L;
                  N = (0, o.cloneElement)(_, {
                    className: (0, a.clsx)(
                      l.default.icon,
                      {
                        [l.default["icon_position_".concat(r)]]: r && !T,
                        [l.default.icon_withButtonSize]: !(null ===
                          (I = _.props) || void 0 === I
                          ? void 0
                          : I.size),
                      },
                      null === (L = _.props) || void 0 === L
                        ? void 0
                        : L.className,
                      A,
                    ),
                    key: P,
                  });
                }
                let M = (0, o.useMemo)(
                    () =>
                      S
                        ? (0, n.jsx)("div", {
                            className: l.default.spinnerContainer,
                            children: m,
                          })
                        : null,
                    [S, m],
                  ),
                  w = (0, o.useCallback)(
                    (e) => {
                      S ||
                        (b && (0, s.createRipple)(e, l.default.ripple),
                        null == v || v(e));
                    },
                    [S, v, b],
                  );
                return (0, n.jsx)("button", {
                  ref: t,
                  className: (0, a.clsx)(
                    l.default.root,
                    l.default["root_".concat(d, "_").concat(h)],
                    l.default["root_radius_".concat(y)],
                    l.default.root_size,
                    {
                      [l.default["root_".concat(d, "_withHover_").concat(h)]]:
                        C && !k && !S,
                      [l.default["root_size_".concat(x)]]: x,
                      [l.default.root_withoutBorder]: !j,
                      [l.default.root_withActiveSpinner]: S,
                      [l.default.block]: i,
                      [l.default.flexIcon]: f,
                      [l.default.iconOnly]: T,
                      [l.default.root_icon_left]: _ && !T && O,
                      [l.default.root_icon_right]: _ && !T && !O,
                    },
                    u,
                  ),
                  type: g,
                  role: p,
                  onClick: w,
                  ...E,
                  disabled: k,
                  "aria-live": S ? "polite" : "off",
                  "aria-busy": S,
                  children:
                    _ || S
                      ? (0, n.jsxs)("span", {
                          className: (0, a.clsx)(
                            l.default.contentContainer,
                            { [l.default.contentContainer_block]: i },
                            R,
                          ),
                          children: [_ && O && N, !T && c, _ && !O && N, M],
                        })
                      : c,
                });
              };
            t.Button = (0, o.forwardRef)((e, t) =>
              (0, n.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          5928: (e, t, i) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            var r = i(8119);
            Object.defineProperty(t, "Button", {
              enumerable: !0,
              get: function () {
                return r.Button;
              },
            });
          },
          7459: function (e, t, i) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Toggle = void 0);
            let n = i(9541),
              o = i(5881),
              a = i(810),
              s = i(5928),
              l = r(i(5682)),
              c = (e) => {
                let { isChecked: t } = e;
                return (0, n.jsx)("div", {
                  className: (0, o.clsx)(l.default.icon, {
                    [l.default.icon_checked]: t,
                  }),
                });
              };
            t.Toggle = (e) => {
              let {
                  className: t,
                  isChecked: i = !1,
                  onChange: r,
                  "aria-label": u,
                  "aria-describedby": d,
                  ...f
                } = e,
                [_, m] = (0, a.useState)(i),
                p = (0, a.useCallback)(() => {
                  let e = !_;
                  m(e), null == r || r(e);
                }, [_, r]);
              return (
                (0, a.useEffect)(() => {
                  m(i);
                }, [i]),
                (0, n.jsx)(s.Button, {
                  className: (0, o.clsx)(
                    l.default.root,
                    { [l.default.root_checked]: _ },
                    t,
                  ),
                  radius: "xxxl",
                  variant: "default",
                  icon: (0, n.jsx)(c, { isChecked: _ }),
                  withRipple: !1,
                  onClick: p,
                  role: "switch",
                  "aria-checked": _,
                  "aria-label": u,
                  "aria-describedby": d,
                  ...f,
                  color: _ ? "primary" : "secondary",
                })
              );
            };
          },
          810: (e) => {
            e.exports = n || (n = i.t(o, 2));
          },
        },
        s = {};
      function l(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var i = (s[e] = { exports: {} });
        return a[e].call(i.exports, i, i.exports, l), i.exports;
      }
      (l.d = (e, t) => {
        for (var i in t)
          l.o(t, i) &&
            !l.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.Z = void 0),
        (r = l(7459)),
        Object.defineProperty(c, "Z", {
          enumerable: !0,
          get: function () {
            return r.Toggle;
          },
        });
      var u = c.Z;
      c.X;
    },
    64353: function (e, t, i) {
      "use strict";
      i.d(t, {
        eo: function () {
          return R.ArtistBandlinkScanner;
        },
        q3: function () {
          return E.ArtistItem;
        },
        Ki: function () {
          return y;
        },
        Go: function () {
          return A;
        },
        XZ: function () {
          return P.ArtistSocialLinks;
        },
        nO: function () {
          return T.ArtistStats;
        },
        jO: function () {
          return O.SeparatedArtists;
        },
        BT: function () {
          return r;
        },
        zg: function () {
          return n;
        },
        d: function () {
          return c;
        },
        dM: function () {
          return l;
        },
        tR: function () {
          return u;
        },
        v2: function () {
          return d.useArtistDisclaimer;
        },
        ik: function () {
          return f.i;
        },
        Hb: function () {
          return _.useGetArtistTypeName;
        },
        KX: function () {
          return m.useOnDislikeClick;
        },
        SB: function () {
          return p.useOnLikeClick;
        },
        BV: function () {
          return v.useOnPinClick;
        },
      });
      let r = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url }),
        n = (e) => {
          var t, i, r, n, o;
          return e
            ? {
                id: Number(e.id),
                decomposed:
                  (null === (t = e.decomposed) || void 0 === t
                    ? void 0
                    : t.map((e) => {
                        var t;
                        return {
                          id: Number(e.id),
                          name: e.name,
                          various: e.various || !1,
                          composer: e.isComposer || !1,
                          item: e.separator,
                          available:
                            null === (t = e.isAvailable) || void 0 === t || t,
                          disclaimers: e.disclaimers,
                        };
                      })) || [],
                name: e.name,
                cover: {
                  uri: e.coverUri || "",
                  type: "pic",
                  prefix: "",
                  custom: !1,
                },
                ogImage: "",
                derivedColors: {
                  accent: "",
                  average: e.averageColor || "",
                  miniPlayer: "",
                  waveText: "",
                },
                available: e.isAvailable,
                disclaimers: e.disclaimers,
                counts: {
                  directAlbums:
                    (null === (i = e.counts) || void 0 === i
                      ? void 0
                      : i.albums) || 0,
                  alsoAlbums:
                    (null === (r = e.counts) || void 0 === r
                      ? void 0
                      : r.compilations) || 0,
                  tracks:
                    (null === (n = e.counts) || void 0 === n
                      ? void 0
                      : n.tracks) || 0,
                  alsoTracks: 0,
                },
                trailer: {
                  available: !!(null === (o = e.trailer) || void 0 === o
                    ? void 0
                    : o.isAvailable),
                },
                hasPromotions: !1,
                genres: [],
                links: [],
                ticketsAvailable: !1,
                ratings: { week: 0, month: 0, day: 0 },
                composer: e.isComposer || !1,
                various: e.various || !1,
              }
            : {
                id: "",
                name: "",
                various: !1,
                composer: !1,
                decomposed: [],
                ogImage: "",
                hasPromotions: !1,
                genres: [],
                ticketsAvailable: !1,
                links: [],
                ratings: { week: 0, month: 0, day: 0 },
                counts: {
                  directAlbums: 0,
                  alsoAlbums: 0,
                  tracks: 0,
                  alsoTracks: 0,
                },
                available: !1,
                disclaimers: [],
              };
        };
      var o = i(22874),
        a = i(13534);
      let s = (e) => ({
          albums: e.directAlbums,
          compilations: e.alsoAlbums,
          tracks: e.tracks,
        }),
        l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [];
          return (
            e.forEach((i, r) => {
              let n = e[r + 1];
              if ("string" == typeof i && "object" == typeof n) {
                var a, s;
                t.push(
                  (0, o.pj)({
                    id: String(n.id),
                    name: n.name,
                    various: n.various,
                    isComposer: n.composer,
                    separator: i,
                    isAvailable:
                      null === (s = n.available) || void 0 === s || s,
                    disclaimers: n.disclaimers,
                    coverUri:
                      null === (a = n.cover) || void 0 === a ? void 0 : a.uri,
                  }),
                );
              }
            }),
            t.length > 0 ? t : void 0
          );
        },
        c = (e) => {
          var t, i;
          let r = l(e.decomposed),
            n = (null == e ? void 0 : e.counts) ? s(e.counts) : void 0,
            c = (0, a.GFX)(e.trailer);
          return (0, o.pj)({
            id: String(e.id),
            name: e.name,
            isComposer: e.composer,
            coverUri: null === (t = e.cover) || void 0 === t ? void 0 : t.uri,
            various: e.various,
            averageColor: (0, a.Usz)(null == e ? void 0 : e.derivedColors),
            decomposed: r,
            counts: n,
            isAvailable:
              null === (i = null == e ? void 0 : e.available) ||
              void 0 === i ||
              i,
            disclaimers: e.disclaimers,
            trailer: c,
          });
        },
        u = (e) => {
          var t, i;
          let { artist: r, trailer: n, isComposer: s, likesCount: c } = e,
            u = l(r.decomposed),
            { available: d, disclaimers: f } = (0, a.NuW)(r);
          return (0, o.pj)({
            id: String(r.id),
            name: r.name,
            coverUri: null === (t = r.cover) || void 0 === t ? void 0 : t.uri,
            various: r.various,
            decomposed: u,
            isAvailable: d,
            disclaimers: f,
            isComposer: s,
            averageColor:
              null === (i = r.cover) || void 0 === i ? void 0 : i.color,
            trailer: (0, a.GFX)(n),
            likesCount: c,
          });
        };
      var d = i(16685),
        f = i(30078),
        _ = i(1068),
        m = i(5529),
        p = i(54974),
        v = i(44540);
      let y = o.V5.model("ArtistLink", {
        imgUrl: o.V5.maybeNull(o.V5.string),
        title: o.V5.maybeNull(o.V5.string),
        url: o.V5.maybeNull(o.V5.string),
      });
      var x = i(14222),
        g = i(97472),
        h = i(89143),
        b = i(40892);
      let C = o.V5.compose(
          o.V5.model("BaseArtist", {
            id: o.V5.string,
            name: o.V5.string,
            various: o.V5.maybe(o.V5.boolean),
            isComposer: o.V5.maybe(o.V5.boolean),
            isAvailable: o.V5.boolean,
            disclaimers: o.V5.maybe(o.V5.array(o.V5.string)),
            trailer: o.V5.maybe(b.K8),
            coverUri: o.V5.maybe(o.V5.string),
          }),
          b.fE,
        )
          .views((e) => ({
            get key() {
              return "".concat(e.id, "_").concat(e.name);
            },
            get url() {
              return "/artist/".concat(e.id);
            },
            get isLiked() {
              if (!(0, o.fh)(e)) return !1;
              let { library: t } = (0, o.yj)(e);
              return t.isArtistLiked(e.id);
            },
            get isDisliked() {
              if (!(0, o.fh)(e)) return !1;
              let { library: t } = (0, o.yj)(e);
              return t.isArtistDisliked(e.id);
            },
            get pinId() {
              return "".concat(x.Q.ARTIST_ITEM).concat(e.id);
            },
            get seeds() {
              return ["artist:".concat(e.id)];
            },
            get isPinned() {
              if (!(0, o.fh)(e)) return !1;
              let { pinsCollection: t } = (0, o.yj)(e);
              return t.isPinned(this.pinId);
            },
            get modalDisclaimerId() {
              if (e.disclaimers) {
                var t;
                let i =
                  null === (t = (0, a.UY5)(e.disclaimers, g.e.MODAL)) ||
                  void 0 === t
                    ? void 0
                    : t[0];
                if (i) {
                  let { id: e } = i;
                  return e;
                }
              }
              return null;
            },
            get isForeignAgent() {
              var i, r;
              if (!(0, o.fh)(e)) return !1;
              let { experiments: t } = (0, o.yj)(e),
                n = !!(null === (i = e.disclaimers) || void 0 === i
                  ? void 0
                  : i.includes(g.e.FOREIGN_AGENT));
              if (e.disclaimers) {
                let t =
                  null === (r = (0, a.UY5)(e.disclaimers, g.e.FOREIGN_AGENT)) ||
                  void 0 === r
                    ? void 0
                    : r[0];
                n = (null == t ? void 0 : t.type) === g.e.FOREIGN_AGENT;
              }
              return n && t.checkExperiment(a.peG.WebNextAgentArtist, "on");
            },
            get isLegalRejected() {
              var n;
              if (!(0, o.fh)(e) || !e.disclaimers || e.isAvailable) return !1;
              let t =
                null === (n = (0, a.UY5)(e.disclaimers, g.e.MODAL)) ||
                void 0 === n
                  ? void 0
                  : n[0];
              return (null == t ? void 0 : t.type) === g.e.MODAL;
            },
            get isUnsafeLegal() {
              if (!(0, o.fh)(e)) return !1;
              if (e.disclaimers) {
                var s;
                let t =
                  null === (s = (0, a.UY5)(e.disclaimers, g.e.MODAL)) ||
                  void 0 === s
                    ? void 0
                    : s[0];
                return (
                  e.isAvailable && (null == t ? void 0 : t.type) === g.e.MODAL
                );
              }
              return !1;
            },
          }))
          .actions((e) => ({
            toggleLike: (0, o.ls)(function* () {
              if (!(0, o.fh)(e)) return;
              let { library: t, user: i } = (0, o.yj)(e);
              if (i.isAuthorized) {
                let r = yield t.toggleArtistLike({
                  entityId: e.id,
                  userId: i.account.data.uid,
                });
                return (
                  (0, o.fh)(e) &&
                    r === h.B.OK &&
                    (e.isLiked ? e.likePending() : e.unlikePending()),
                  r
                );
              }
            }),
            toggleDislike() {
              if (!(0, o.fh)(e)) return;
              let { library: t, user: i } = (0, o.yj)(e);
              return t.toggleArtistDislike({
                entityId: e.id,
                userId: i.account.data.uid,
              });
            },
            togglePin: (0, o.ls)(function* () {
              if (!(0, o.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, o.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleArtistPin({ id: e.id }, e.pinId);
            }),
            getKey: (t) => "".concat(t, "_").concat(e.id),
          })),
        j = o.V5.model("Counts", {
          albums: o.V5.number,
          compilations: o.V5.number,
          tracks: o.V5.number,
        }),
        k = C.props({ separator: o.V5.maybe(o.V5.string) }),
        A = C.props({
          decomposed: o.V5.maybe(o.V5.array(k)),
          averageColor: o.V5.maybe(o.V5.string),
          counts: o.V5.maybe(j),
        }).views((e) => ({
          get isAvailableForPlaying() {
            if (void 0 === e.counts) return !0;
            return e.counts.tracks > 0;
          },
        }));
      var R = i(7857),
        E = i(7538),
        P = i(65523),
        T = i(89203),
        O = i(6924);
    },
    16685: function (e, t, i) {
      "use strict";
      i.d(t, {
        useArtistDisclaimer: function () {
          return s;
        },
      });
      var r = i(65067),
        n = i(77282),
        o = i(93093),
        a = i(13534);
      let s = (e) => {
        let { artist: t, callback: i, shouldHistoryBack: s } = e,
          {
            disclaimerModalData: l,
            modals: { disclaimerModal: c },
          } = (0, a.oR4)(),
          u = (0, r.useRef)(String((0, n.Z)())),
          d = (0, r.useRef)(!1),
          f = (0, a.uK4)().get(a.ceh);
        return (
          (0, r.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === u.current &&
              !d.current &&
              (null == i || i(), (d.current = !0));
          }, [i, l.id, l.isUnsafeDisclaimerConfirmed]),
          (0, o.W)(async (e) => {
            let r = f.get(a.BUb.ExEx);
            if (
              (null == t ? void 0 : t.isUnsafeLegal) &&
              (null == r
                ? void 0
                : r.includes("".concat(a.coP.ARTIST, "_").concat(t.id)))
            ) {
              null == i || i();
              return;
            }
            if (
              (null == t ? void 0 : t.isLegalRejected) ||
              (null == t ? void 0 : t.isUnsafeLegal)
            ) {
              null == e || e.preventDefault(),
                await l.getDisclaimerData({
                  entityId: t.id,
                  entityType: a.coP.ARTIST,
                  disclaimerId: null == t ? void 0 : t.modalDisclaimerId,
                }),
                t.isUnsafeLegal && l.setType(a.Gq.UNSAFE),
                l.setId(u.current),
                l.setEntityId(t.id),
                l.setEntityType(a.coP.ARTIST),
                l.setShouldHistoryBack(!!s),
                (d.current = !1),
                c.open();
              return;
            }
            null == e || e.preventDefault(), null == i || i();
          })
        );
      };
    },
    30078: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return n;
        },
      });
      var r = i(65067);
      let n = (e, t) =>
        (0, r.useCallback)(
          (e) => {
            e.metaKey || e.ctrlKey || e.shiftKey || t(e);
          },
          [e, t],
        );
    },
    1068: function (e, t, i) {
      "use strict";
      i.d(t, {
        useGetArtistTypeName: function () {
          return o;
        },
      });
      var r = i(9317),
        n = i(5403);
      let o = (e) => {
        let { formatMessage: t } = (0, r.Z)();
        return t(
          e === n.Y.COMPOSER
            ? { id: "entity-names.composer" }
            : { id: "entity-names.singer" },
        );
      };
    },
    5529: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnDislikeClick: function () {
          return x;
        },
      });
      var r = i(75441),
        n = i(37285),
        o = i(65067),
        a = i(9317),
        s = i(89143),
        l = i(93093),
        c = i(13534),
        u = i(97141),
        d = i(15937),
        f = i(14218),
        _ = i(59091),
        m = i(17392),
        p = i(6996),
        v = i.n(p);
      let y = (e) => {
          let { coverUri: t, title: i, isDisliked: n, closeToast: o } = e,
            a = (0, f.V)(() =>
              n
                ? (0, r.jsx)(d.Z, {
                    id: "notifications-info.artist-unavailable-in-recommendations",
                  })
                : (0, r.jsx)(d.Z, {
                    id: "notifications-info.artist-available-in-recommendations",
                  }),
            );
          return (0, r.jsx)(u.Yj, {
            closeToast: o,
            message: (0, r.jsxs)("div", {
              className: v().message,
              children: [
                (0, r.jsx)(_.Paper, {
                  className: v().cover,
                  radius: "round",
                  children: (0, r.jsx)(u.BE, {
                    className: v().image,
                    src: t,
                    alt: i,
                    size: 100,
                    fit: "cover",
                    withAvatarReplace: !0,
                  }),
                }),
                (0, r.jsx)(m.Caption, {
                  className: v().text,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  children: a,
                }),
              ],
            }),
          });
        },
        x = (e) => {
          let { user: t } = (0, c.oR4)(),
            { notify: i } = (0, c.d$W)(),
            [d, f] = (0, o.useState)(!1),
            { formatMessage: _ } = (0, a.Z)();
          return (0, l.W)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: _({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: c.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let o = { ...(0, n.ZN)(e), isDisliked: !e.isDisliked };
            f(!0);
            let a = await e.toggleDislike();
            f(!1),
              a === s.B.OK
                ? i(
                    (0, r.jsx)(y, {
                      coverUri: o.coverUri,
                      title: o.name,
                      isDisliked: o.isDisliked,
                    }),
                    { containerId: c.W$x.INFO },
                  )
                : i(
                    (0, r.jsx)(u.Q, {
                      error: _({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: c.W$x.ERROR },
                  );
          });
        };
    },
    54974: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return d;
        },
      });
      var r = i(75441),
        n = i(37285),
        o = i(65067),
        a = i(9317),
        s = i(89143),
        l = i(13534),
        c = i(97141);
      let u = (e) => {
          let { artist: t, closeToast: i } = e;
          return (0, r.jsx)(c.AP, {
            closeToast: i,
            entityVariant: c.j9.ARTIST,
            entityUrl: "/artist/".concat(t.id),
            collectionUrl: "/collection/artists",
            coverUri: t.coverUri,
            entityTitle: t.name,
            isLiked: t.isLiked,
          });
        },
        d = (e) => {
          let { user: t } = (0, l.oR4)(),
            { notify: i } = (0, l.d$W)(),
            [d, f] = (0, o.useState)(!1),
            { formatMessage: _ } = (0, a.Z)();
          return (0, o.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(c.Q, {
                  error: _({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let o = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            f(!0);
            let a = await e.toggleLike();
            f(!1),
              a === s.B.OK
                ? i((0, r.jsx)(u, { artist: o }), { containerId: l.W$x.INFO })
                : i(
                    (0, r.jsx)(c.Q, {
                      error: _({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$x.ERROR },
                  );
          }, [e, t.isAuthorized, d, _, i]);
        };
    },
    44540: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return u;
        },
      });
      var r = i(75441),
        n = i(37285),
        o = i(65067),
        a = i(9317),
        s = i(13534),
        l = i(97141);
      let c = (e) => {
          let { artist: t, closeToast: i } = e;
          return (0, r.jsx)(l.K1, {
            closeToast: i,
            entityVariant: l.j9.ARTIST,
            coverUri: t.coverUri,
            entityUrl: "/artist/".concat(t.id),
            entityTitle: t.name,
            isPinned: t.isPinned,
          });
        },
        u = (e) => {
          let { user: t } = (0, s.oR4)(),
            { notify: i } = (0, s.d$W)(),
            { formatMessage: u } = (0, a.Z)(),
            [d, f] = (0, o.useState)(!1);
          return (0, o.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(l.Q, {
                  error: u({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let o = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            f(!0);
            let a = await e.togglePin();
            f(!1),
              a
                ? i((0, r.jsx)(c, { artist: o }), { containerId: s.W$x.INFO })
                : i(
                    (0, r.jsx)(l.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [e, t.isAuthorized, d, u, i]);
        };
    },
    7857: function (e, t, i) {
      "use strict";
      i.d(t, {
        ArtistBandlinkScanner: function () {
          return d;
        },
      });
      var r = i(75441),
        n = i(32358),
        o = i(15937),
        a = i(69756),
        s = i(17392),
        l = i(97141),
        c = i(49279),
        u = i.n(c);
      let d = (e) => {
        let { className: t, artistId: i, artistName: c } = e;
        return (0, r.jsxs)(l.rU, {
          href: "https://band.link/scanner?search=".concat(
            i,
            "&type=artist_id&service=yandex_music",
          ),
          className: (0, n.W)(u().root, t),
          children: [
            (0, r.jsx)(a.Icon, { className: u().icon, variant: "bandlink" }),
            (0, r.jsxs)("div", {
              className: u().description,
              children: [
                (0, r.jsxs)("div", {
                  className: u().descriptionTitle,
                  children: [
                    (0, r.jsx)(s.Caption, {
                      variant: "div",
                      size: "l",
                      weight: "medium",
                      className: u().descriptionTitleText,
                      children: (0, r.jsx)(o.Z, {
                        id: "artist.artist-in-playlists",
                      }),
                    }),
                    (0, r.jsx)(a.Icon, {
                      variant: "link",
                      size: "xxs",
                      className: u().descriptionTitleButton,
                    }),
                  ],
                }),
                (0, r.jsx)(s.Caption, {
                  variant: "div",
                  size: "l",
                  weight: "medium",
                  className: u().descriptionArtist,
                  children: null != c ? c : "",
                }),
              ],
            }),
          ],
        });
      };
    },
    7538: function (e, t, i) {
      "use strict";
      i.d(t, {
        ArtistItem: function () {
          return m;
        },
      });
      var r = i(75441),
        n = i(62569),
        o = i(65067),
        a = i(93093),
        s = i(39054),
        l = i(27376),
        c = i(59091),
        u = i(17392),
        d = i(13534),
        f = i(49853),
        _ = i.n(f);
      let m = (0, n.Pi)((e) => {
        let { artist: t } = e,
          { fullscreenPlayer: i } = (0, d.oR4)(),
          n = (0, d.s0h)(t.url),
          f = (0, o.useMemo)(() => {
            var e;
            return (
              "decomposed" in t &&
              (null === (e = t.decomposed) || void 0 === e
                ? void 0
                : e.reduce(
                    (e, t) => (e.push((0, r.jsx)(m, { artist: t }, t.id)), e),
                    [],
                  ))
            );
          }, [t]),
          p = (0, a.W)(() => {
            i.modal.isOpened && i.modal.close(), n();
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(
              l.sN,
              {
                className: _().root,
                onClick: p,
                children: [
                  (0, r.jsx)(c.Paper, {
                    radius: "round",
                    className: _().cover,
                    children: (0, r.jsx)(s.Image, {
                      withAvatarReplace: !0,
                      src: t.coverUri,
                      size: 100,
                      fit: "contain",
                      className: _().image,
                    }),
                  }),
                  (0, r.jsx)(u.Caption, {
                    variant: "span",
                    size: "m",
                    weight: "medium",
                    lineClamp: 1,
                    children: t.name,
                  }),
                ],
              },
              t.url,
            ),
            f,
          ],
        });
      });
    },
    65523: function (e, t, i) {
      "use strict";
      i.d(t, {
        ArtistSocialLinks: function () {
          return c;
        },
      });
      var r = i(75441),
        n = i(9317),
        o = i(39054),
        a = i(97141),
        s = i(9813),
        l = i.n(s);
      let c = (e) => {
        let { links: t, artistName: i } = e,
          { formatMessage: s } = (0, n.Z)();
        return (0, r.jsx)("div", {
          className: l().root,
          children: t.map((e, t) => {
            var n;
            return (0, r.jsx)(
              a.rU,
              {
                href: e.url,
                className: l().link,
                "aria-label": s(
                  { id: "artist.artist-links-label" },
                  { artistName: i, linkName: e.title },
                ),
                children: (0, r.jsx)(o.Image, {
                  fit: "contain",
                  className: l().icon,
                  size: 100,
                  src: null !== (n = e.imgUrl) && void 0 !== n ? n : void 0,
                  fallbackIconVariant: "site",
                  fallbackIconSize: "xs",
                  withAvatarReplace: !0,
                }),
              },
              t,
            );
          }),
        });
      };
    },
    89203: function (e, t, i) {
      "use strict";
      i.d(t, {
        ArtistStats: function () {
          return u;
        },
      });
      var r = i(75441),
        n = i(32358),
        o = i(65067),
        a = i(15937),
        s = i(17392),
        l = i(20122),
        c = i.n(l);
      let u = (e) => {
        let { lastMonthListeners: t, lastMonthListenersDelta: i } = e,
          l = (0, o.useMemo)(() => {
            let e = (0, r.jsx)("br", {});
            if (0 === i)
              return (0, r.jsx)(a.Z, {
                id: "artist.stats-same-listeners-per-month",
                values: { br: e },
              });
            let t = (0, r.jsx)(s.Caption, {
              variant: "span",
              className: (0, n.W)({
                [c().statsNumber_positive]: i > 0,
                [c().statsNumber_negative]: i < 0,
              }),
              size: "l",
              weight: "medium",
              children: Math.abs(i).toLocaleString("ru"),
            });
            return i > 0
              ? (0, r.jsx)(a.Z, {
                  id: "artist.stats-more-listeners-per-month",
                  values: { number: t, br: e, nbsp: "\xa0" },
                })
              : (0, r.jsx)(a.Z, {
                  id: "artist.stats-less-listeners-per-month",
                  values: { number: t, br: e, nbsp: "\xa0" },
                });
          }, [i]);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(s.Caption, {
              variant: "div",
              className: c().title,
              size: "l",
              weight: "medium",
              children: (0, r.jsx)(a.Z, {
                id: "artist.stats-listeners-per-month",
              }),
            }),
            (0, r.jsx)(s.Heading, {
              size: "xxl",
              variant: "div",
              className: c().count,
              children: t.toLocaleString("ru"),
            }),
            (0, r.jsx)(s.Caption, {
              variant: "div",
              className: c().stats,
              size: "l",
              weight: "medium",
              children: l,
            }),
          ],
        });
      };
    },
    6924: function (e, t, i) {
      "use strict";
      i.d(t, {
        SeparatedArtists: function () {
          return D;
        },
      });
      var r = i(75441),
        n = i(32358),
        o = i(62569),
        a = i(65067),
        s = i(92853),
        l = i(13534);
      let c = (e) => e.reduce((e, t) => e.concat([t.name]), []),
        u = (e, t) =>
          e
            .reduce(function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (t.decomposed) {
                let i = c(t.decomposed);
                return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
              }
              return e.length ? (e.push(t.name), e) : [t.name];
            }, [])
            .join(t);
      var d = i(59097),
        f = i.n(d),
        _ = i(9317),
        m = i(4875),
        p = i(35846),
        v = i(93093),
        y = i(17392),
        x = i(97141),
        g = i(30078),
        h = i(77282);
      let b = (e) => {
          let { artist: t, callback: i } = e,
            {
              disclaimerModalData: r,
              currentTrackInfo: n,
              modals: { disclaimerModal: o },
              fullscreenPlayer: s,
              fullscreenVideoPlayer: c,
            } = (0, l.oR4)(),
            { modal: u } = n,
            d = (0, a.useRef)(String((0, h.Z)())),
            f = (0, a.useRef)(!1),
            _ = (0, l.uK4)().get(l.ceh);
          return (
            (0, a.useEffect)(() => {
              r.isUnsafeDisclaimerConfirmed &&
                r.id === d.current &&
                !f.current &&
                (c.modal.isOpened && (c.modal.close(), c.reset()),
                null == i || i(),
                (f.current = !0));
            }, [i, r.id, r.isUnsafeDisclaimerConfirmed, c]),
            (0, v.W)(async (e) => {
              null == e || e.stopPropagation(),
                u.isOpened && (n.reset(), u.close()),
                s.modal.isOpened && s.modal.close();
              let a = _.get(l.BUb.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == a
                  ? void 0
                  : a.includes("".concat(l.coP.ARTIST, "_").concat(t.id)))
              ) {
                c.modal.isOpened && (c.modal.close(), c.reset()),
                  null == i || i();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await r.getDisclaimerData({
                    entityId: t.id,
                    entityType: l.coP.ARTIST,
                    disclaimerId: null == t ? void 0 : t.modalDisclaimerId,
                  }),
                  t.isUnsafeLegal && r.setType(l.Gq.UNSAFE),
                  r.setId(d.current),
                  r.setEntityId(t.id),
                  r.setEntityType(l.coP.ARTIST),
                  (f.current = !1),
                  o.open();
                return;
              }
              c.modal.isOpened && (c.modal.close(), c.reset()),
                null == e || e.preventDefault(),
                null == i || i();
            })
          );
        },
        C = (0, o.Pi)((e) => {
          let {
              artist: t,
              withLink: i = !0,
              linkClassName: n,
              captionClassName: o,
              captionSize: c = "m",
              allArtistsTitle: u,
              withCustomTooltip: d,
              hoverSettings: f,
            } = e,
            { formatMessage: h } = (0, _.Z)(),
            {
              track: C,
              settings: { isMobile: j },
            } = (0, l.oR4)(),
            k = (0, l.s0h)(t.url),
            A = (0, l.s0h)(t.url, !0),
            { sendNavigateSearchFeedback: R } = (0, l.sAF)(),
            E = (0, l.zxW)(),
            P = b({
              artist: t,
              callback: (0, v.W)(() => {
                j && C.isOpened && C.close(), k();
              }),
            }),
            T = b({ artist: t, callback: A }),
            O = (0, g.i)(T, P),
            N = (0, a.useCallback)(
              (e) => {
                E({ to: m.qU.ArtistScreen }), null == R || R(), O(e);
              },
              [O, E, R],
            );
          return (i = i && !t.various)
            ? (0, r.jsx)(x.rU, {
                "aria-label": h(
                  { id: "entity-names.artist-name" },
                  { artistName: t.name },
                ),
                className: n,
                href: t.url,
                onClick: N,
                title: d ? void 0 : u || t.name,
                ...(0, p.BA)(p.FK.artists.SEPARATED_ARTIST_TITLE),
                children: (0, r.jsx)(s.u, {
                  enabled: !u && d,
                  offsetOptions: 4,
                  placement: "top",
                  text: u || t.name,
                  hoverSettings: f,
                  children: (0, r.jsx)(y.Caption, {
                    variant: "span",
                    type: "entity",
                    size: c,
                    weight: "medium",
                    className: o,
                    children: t.name,
                  }),
                }),
              })
            : (0, r.jsx)(s.u, {
                enabled: !u && d,
                offsetOptions: 4,
                placement: "top",
                text: u || t.name,
                hoverSettings: f,
                children: (0, r.jsx)(y.Caption, {
                  variant: "span",
                  type: "entity",
                  size: c,
                  weight: "medium",
                  className: o,
                  title: d ? void 0 : u || t.name,
                  children: t.name,
                }),
              });
        }),
        j = (e) => {
          let {
              artist: t,
              withLink: i = !0,
              linkClassName: n,
              captionClassName: o,
              captionSize: s,
              allArtistsTitle: l,
              withCustomTooltip: c,
              hoverSettings: u,
              shouldUseSeparator: d = !0,
            } = e,
            f = (0, a.useMemo)(() => {
              var e;
              return null === (e = t.decomposed) || void 0 === e
                ? void 0
                : e.reduce(
                    (e, t) =>
                      e.concat([
                        d ? t.separator : "",
                        (0, r.jsx)(
                          C,
                          {
                            artist: t,
                            withLink: i,
                            linkClassName: n,
                            captionClassName: o,
                            captionSize: s,
                            allArtistsTitle: l,
                            withCustomTooltip: c,
                            hoverSettings: u,
                          },
                          t.id,
                        ),
                      ]),
                    [],
                  );
            }, [t.decomposed, d, i, n, o, s, l, c, u]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(C, {
                artist: t,
                withLink: i,
                linkClassName: n,
                captionClassName: o,
                captionSize: s,
                allArtistsTitle: l,
                withCustomTooltip: c,
                hoverSettings: u,
              }),
              f,
            ],
          });
        };
      var k = i(15937),
        A = i(18489);
      let R = (e) => {
        let {
          spoilerArtistsCount: t,
          spoilerClassName: i,
          handleOnSpoilerClick: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            " ",
            (0, r.jsx)(A.r, {
              role: "button",
              href: "",
              className: (0, n.W)(f().spoiler, i),
              onClick: o,
              rel: "nofollow",
              ...(0, p.BA)(p.FK.artists.SEPARATED_ARTISTS_SPOILER),
              children: (0, r.jsx)(k.Z, {
                id: "entity-names.number-of-more-artists",
                values: { counter: t },
              }),
            }),
          ],
        });
      };
      var E = i(71361),
        P = i(14218),
        T = i(70802),
        O = i(7538),
        N = i(73343),
        S = i.n(N);
      let I = (0, o.Pi)((e) => {
          let { label: t, artists: i, forwardRef: n } = e;
          return (0, r.jsxs)(s.u, {
            enableAriaDescribedby: !1,
            isFocusEnabled: !1,
            placement: "top",
            hoverSettings: {
              delay: 200,
              handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }),
            },
            children: [
              (0, r.jsx)("div", { ref: n, children: t }),
              (0, r.jsx)(s._v, {
                className: S().tooltipContent,
                children: i.map((e) =>
                  (0, r.jsx)(O.ArtistItem, { artist: e }, e.id),
                ),
              }),
            ],
          });
        }),
        L = (0, a.forwardRef)((e, t) => (0, r.jsx)(I, { forwardRef: t, ...e }));
      var M = i(27376),
        w = i(6959),
        U = i.n(w);
      let z = (0, o.Pi)((e) => {
          let { label: t, artists: i } = e,
            { formatMessage: o } = (0, _.Z)();
          return (0, r.jsx)(M.v2, {
            isMobile: !0,
            className: (0, n.W)(U().root, U().important),
            label: t,
            ariaLabel: o({ id: "interface-actions.context-menu-artists" }),
            children: i.map((e) =>
              (0, r.jsx)(O.ArtistItem, { artist: e }, e.id),
            ),
          });
        }),
        Y = (0, o.Pi)((e) => {
          let { artists: t = [], label: i, labelRef: n } = e,
            [o, s] = (0, a.useState)(!1),
            {
              settings: { isMobile: c },
            } = (0, l.oR4)(),
            u = (0, v.W)(() => {
              let e = n.current;
              e &&
                s(
                  e.scrollHeight > e.clientHeight ||
                    e.scrollWidth > e.clientWidth,
                );
            }),
            d = (0, P.V)(() =>
              (0, E.Z)(() => {
                u();
              }, 100),
            );
          return ((0, a.useEffect)(
            () => (
              window.addEventListener("resize", d),
              u(),
              () => {
                window.removeEventListener("resize", d);
              }
            ),
            [d, u],
          ),
          (0, a.useEffect)(() => {
            u();
          }, [t, u]),
          0 === t.length)
            ? void 0
            : (o || c) && (!c || 1 !== t.length)
              ? c
                ? (0, r.jsx)(z, { artists: t, label: i })
                : (0, r.jsx)(L, { artists: t, label: i })
              : i;
        }),
        D = (0, o.Pi)((e) => {
          let {
              className: t,
              artists: i = [],
              separator: o = ", ",
              lineClamp: c,
              visibleArtistsCount: d,
              withLink: _ = !0,
              spoilerClassName: m,
              linkClassName: p,
              captionClassName: v,
              captionSize: y,
              variant: x = "breakAll",
              withAllArtistsTitle: g = !0,
              withComposer: h = !0,
              spoilerComponent: b,
              withCustomTooltip: C = !0,
              artistIdWithoutLink: k,
              withContextMenu: A,
            } = e,
            E = (0, a.useRef)(null),
            [P, T] = (0, a.useState)(!1),
            O = g ? u(i, o) : "",
            {
              settings: { isMobile: N },
              experiments: S,
            } = (0, l.oR4)(),
            I =
              S.checkExperiment(
                l.peG.WebNextPlayerBarBackgroundProgress,
                "on",
              ) && A,
            L = 1 === i.length,
            M = (0, a.useCallback)((e) => {
              T(!0), e.preventDefault();
            }, []),
            w = (0, a.useMemo)(() => {
              let e = i;
              return (
                d && !P && (e = i.slice(0, d)),
                e.reduce((e, t) => {
                  if (!h && t.isComposer) return e.length ? e : [];
                  let i = (0, r.jsx)(
                    j,
                    {
                      artist: t,
                      linkClassName: p,
                      captionClassName: v,
                      withLink: _ && t.id !== k && (((!N || L) && I) || !I),
                      captionSize: y,
                      allArtistsTitle: O,
                      withCustomTooltip: C,
                      hoverSettings: l.cHI,
                      shouldUseSeparator: !!o,
                    },
                    t.key,
                  );
                  return e.length ? e.concat([o, i]) : [i];
                }, [])
              );
            }, [i, d, P, h, p, v, _, k, N, L, I, y, O, C, o]),
            U = (0, a.useMemo)(() => {
              if (!P && d && d < i.length) {
                let e = i.length - d;
                return (0, a.isValidElement)(b)
                  ? b
                  : (0, r.jsx)(R, {
                      spoilerClassName: m,
                      spoilerArtistsCount: e,
                      handleOnSpoilerClick: M,
                    });
              }
            }, [i.length, M, P, m, b, d]),
            z = (0, a.useMemo)(() => {
              if (c) return { WebkitLineClamp: c };
            }, [c]),
            D = (0, r.jsx)(s.u, {
              referenceRef: E,
              enabled: !!(g && O) && C && !I,
              offsetOptions: 4,
              placement: "top",
              text: O,
              hoverSettings: l.cHI,
              children: (0, r.jsxs)("div", {
                style: z,
                className: (0, n.W)(
                  f().root,
                  f()["root_variant_".concat(x)],
                  { [f().root_clamp]: c && c > 0 },
                  { [f().ellipsis]: !c },
                  t,
                ),
                title: g && O && !C && !I ? O : void 0,
                children: [w, U],
              }),
            });
          return I ? (0, r.jsx)(Y, { labelRef: E, artists: i, label: D }) : D;
        });
    },
    50705: function (e, t, i) {
      "use strict";
      i.d(t, {
        ZY: function () {
          return O;
        },
        q3: function () {
          return s;
        },
      });
      var r = i(13534);
      let n = (e) => {
          switch (e) {
            case r.gus.ALBUM:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=";
            case r.gus.PLAYLIST:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=";
            case r.gus.ARTIST:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==";
            case r.gus.TRACK:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=";
            case r.gus.UGC_TRACK:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx";
          }
        },
        o = (e) => {
          switch (e) {
            case r.gus.ALBUM:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLJkvqJ0/LJkvqJ1WMQ06nJD=";
            case r.gus.PLAYLIST:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3OfLKyfnKA0pl92nJI3YKOfLKyfnKA0YzSwqTyiow91nJD9BzyxWzgcozD9BzgcozD=";
            case r.gus.ARTIST:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgLKW0nKA0C2SlqTymqRyxCGccMN==";
            case r.gus.TRACK:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3McMKpgqUWuL2f/qUWuL2gWMQ06nJD=";
            case r.gus.UGC_TRACK:
              return "nUE0pUZ6Yl9vLKAyYz11p2ywYaSuYayuozEyrP10MJSgYaW1Y2SxoJyhY3IaLl92nJI3YKElLJAeC3ElLJAeFJD9Bzyx";
          }
        },
        a = (e) =>
          e.replace(/[A-Za-z]/g, function (e) {
            return String.fromCharCode(
              e.charCodeAt(0) + ("M" >= e.toUpperCase() ? 13 : -13),
            );
          }),
        s = (e) => {
          let t,
            { entityVariant: i, urlParams: s } = e,
            l = (0, r.kFZ)();
          if (!s.id || !(t = "production" === l ? n(i) : o(i))) return;
          let c = atob(a(t));
          return (0, r.Rkf)(c, s);
        };
      var l = i(75441),
        c = i(62569),
        u = i(9317),
        d = i(35846),
        f = i(27376),
        _ = i(65067),
        m = i(15937),
        p = i(17392),
        v = i(97141),
        y = i(38274),
        x = i.n(y);
      let g = (e) => {
          let { closeToast: t } = e;
          return (0, l.jsx)(v.Yj, {
            message: (0, l.jsx)(p.Caption, {
              className: x().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: (0, l.jsx)(m.Z, {
                id: "playlist-errors.failed-part-tracks-download-xlsx",
              }),
            }),
            closeToast: t,
          });
        },
        h = (e) => {
          let { closeToast: t } = e;
          return (0, l.jsx)(v.Yj, {
            message: (0, l.jsx)(p.Caption, {
              className: x().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: (0, l.jsx)(m.Z, {
                id: "playlist-errors.failed-download-xlsx",
              }),
            }),
            closeToast: t,
          });
        };
      var b = i(18871),
        C = i.n(b);
      let j = (e) => {
          let { closeToast: t } = e;
          return (0, l.jsx)(v.Yj, {
            message: (0, l.jsx)(p.Caption, {
              variant: "div",
              size: "m",
              className: C().text,
              children: (0, l.jsx)(m.Z, {
                id: "notifications-info.xlsx-success",
              }),
            }),
            closeToast: t,
            coverRadius: "s",
          });
        },
        k = () =>
          (0, l.jsx)(v.Yj, {
            message: (0, l.jsx)(p.Caption, {
              variant: "div",
              size: "m",
              className: C().text,
              children: (0, l.jsx)(m.Z, {
                id: "notifications-info.xlsx-loading",
              }),
            }),
            coverRadius: "s",
          }),
        A = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 40,
            { fullscreenPlayer: t, playlist: i } = (0, r.oR4)(),
            { notify: n, dismiss: o } = (0, r.d$W)(),
            a = (0, _.useRef)(),
            s = t.modal.isOpened ? r.W$x.FULLSCREEN_INFO : r.W$x.INFO;
          return (0, _.useCallback)(async () => {
            (a.current = n((0, l.jsx)(k, {}), {
              containerId: s,
              autoClose: !1,
            })),
              await i.editorFeature.getAllPlaylistItems({ batchSize: e }),
              (await i.editorFeature.exportToExcel()) === r.SLo.OK
                ? i.areAllTracksUploaded
                  ? n((0, l.jsx)(j, {}), { containerId: s })
                  : n((0, l.jsx)(g, {}), {
                      containerId: t.modal.isOpened
                        ? r.W$x.FULLSCREEN_ERROR
                        : r.W$x.ERROR,
                      autoClose: !1,
                    })
                : n((0, l.jsx)(h, {}), {
                    containerId: t.modal.isOpened
                      ? r.W$x.FULLSCREEN_ERROR
                      : r.W$x.ERROR,
                    autoClose: !1,
                  }),
              o({ notificationId: a.current, forceClose: !0 });
          }, [
            e,
            o,
            t.modal.isOpened,
            s,
            n,
            i.areAllTracksUploaded,
            i.editorFeature,
          ]);
        },
        R = (0, c.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, r.oR4)(),
            { toggleShouldShowDuplicate: t, shouldShowDuplicate: i } = e,
            { formatMessage: n } = (0, u.Z)();
          return (0, l.jsx)(v.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-duplicates" }),
            onClick: t,
            isActive: i,
          });
        }),
        E = (0, c.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, r.oR4)(),
            { toggleShouldShowGenre: t, shouldShowGenre: i } = e,
            { formatMessage: n } = (0, u.Z)();
          return (0, l.jsx)(v.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-genres" }),
            onClick: t,
            isActive: i,
          });
        }),
        P = (0, c.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, r.oR4)(),
            { toggleShouldShowMajor: t, shouldShowMajor: i } = e,
            { formatMessage: n } = (0, u.Z)();
          return (0, l.jsx)(v.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-majors" }),
            onClick: t,
            isActive: i,
          });
        }),
        T = (0, c.Pi)((e) => {
          let { adminUrl: t } = e,
            i = (0, r.s0h)(t, !0);
          return (0, l.jsx)(f.sN, {
            onClick: i,
            isSubMenu: !0,
            children: (0, l.jsx)(p.Caption, {
              variant: "div",
              lineClamp: 1,
              children: (0, l.jsx)(m.Z, {
                id: "interface-actions.navigate-to-admin",
              }),
            }),
          });
        }),
        O = (0, c.Pi)((e) => {
          let {
              entityVariant: t,
              adminUrl: i,
              withPlaylistPageFeatures: n,
              className: o,
              isDisabled: a,
            } = e,
            {
              settings: { isMobile: s },
            } = (0, r.oR4)(),
            { formatMessage: c } = (0, u.Z)();
          A();
          let _ = t === r.gus.PLAYLIST && n,
            m = t === r.gus.PLAYLIST && n,
            p = t === r.gus.PLAYLIST && n,
            v = t === r.gus.PLAYLIST && n;
          return (0, l.jsxs)(f.v2, {
            label: c({ id: "interface-actions.editorial-tools" }),
            menuClassName: o,
            offsetOptions: 3,
            isMobile: s,
            disabled: a,
            ...(0, d.BA)(d.FK.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON),
            children: [
              i && (0, l.jsx)(T, { adminUrl: i }),
              _ && (0, l.jsx)(P, {}),
              m && (0, l.jsx)(E, {}),
              p && (0, l.jsx)(R, {}),
              v && !1,
            ],
          });
        });
    },
    10979: function (e, t, i) {
      "use strict";
      i.d(t, {
        Cd: function () {
          return R;
        },
        pX: function () {
          return s;
        },
        pT: function () {
          return T.ContextMenuPlaylistPrivacyItem;
        },
        lN: function () {
          return O.CreatePlaylistCard;
        },
        b_: function () {
          return E;
        },
        Zn: function () {
          return _;
        },
        cp: function () {
          return m;
        },
        XD: function () {
          return I.NotificationAddToPlaylist;
        },
        wi: function () {
          return N.NotificationFailedAddToPlaylist;
        },
        BQ: function () {
          return S.NotificationFailedRemoveFromPlaylist;
        },
        H2: function () {
          return L.NotificationRemoveFromPlaylist;
        },
        aL: function () {
          return l;
        },
        eX: function () {
          return c;
        },
        $h: function () {
          return P;
        },
        jK: function () {
          return x.TrackPlaylistContext;
        },
        Iq: function () {
          return r;
        },
        PV: function () {
          return f;
        },
        PG: function () {
          return y;
        },
        SB: function () {
          return g.useOnLikeClick;
        },
        BV: function () {
          return h.useOnPinClick;
        },
      });
      let r = (e) => {
        var t;
        return e
          ? {
              playlistUuid: e.uuid,
              available: e.isAvailable,
              uid: e.uid,
              kind: e.kind,
              title: e.title || "",
              revision: e.revision || 0,
              snapshot: 0,
              trackCount: e.tracksCount || 0,
              visibility: e.visibility || "public",
              collective: !1,
              created: "",
              modified: "",
              isBanner: !1,
              isPremiere: !1,
              durationMs: 0,
              cover: {
                uri: e.coverUri || "",
                type: "pic",
                prefix: "",
                custom: !1,
              },
              ogImage: e.coverUri || "",
              tags: [],
              likesCount: e.likesCount || 0,
              generatedPlaylistType: e.generatedPlaylistType || "",
              trailer: {
                available: !!(null === (t = e.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable),
              },
            }
          : {
              playlistUuid: "",
              available: !0,
              uid: 0,
              kind: 0,
              title: "",
              revision: 0,
              snapshot: 0,
              trackCount: 0,
              visibility: "public",
              collective: !1,
              created: "",
              modified: "",
              isBanner: !1,
              isPremiere: !1,
              durationMs: 0,
              cover: { uri: "", type: "pic", prefix: "", custom: !1 },
              ogImage: "",
              tags: [],
              likesCount: 0,
              generatedPlaylistType: "",
              trailer: { available: !0 },
            };
      };
      var n,
        o,
        a,
        s,
        l,
        c,
        u = i(22874),
        d = i(13534);
      let f = (e) => {
        var t, i, r, n, o;
        e = e || {};
        let a = (0, d.GFX)(e.trailer);
        return (0, u.pj)({
          isAvailable: null === (n = e.available) || void 0 === n || n,
          uid: e.uid,
          uuid: null !== (o = e.playlistUuid) && void 0 !== o ? o : "",
          kind: e.kind,
          title: e.title,
          coverUri:
            (null == e
              ? void 0
              : null === (t = e.cover) || void 0 === t
                ? void 0
                : t.uri) ||
            (null == e
              ? void 0
              : null === (r = e.cover) || void 0 === r
                ? void 0
                : null === (i = r.itemsUri) || void 0 === i
                  ? void 0
                  : i[0]),
          likesCount: e.likesCount,
          averageColor: (0, d.Usz)(null == e ? void 0 : e.derivedColors),
          revision: e.revision,
          generatedPlaylistType: e.generatedPlaylistType,
          personalColor: e.personalColor,
          visibility: e.visibility,
          trailer: a,
        });
      };
      ((n = s || (s = {})).OK = "ok"),
        (n.ERROR = "error"),
        (n.RELOAD = "reload");
      let _ = 1e3,
        m = 100;
      var p = i(63660);
      let v = (e) =>
          Object.keys(e)
            .filter((t) => void 0 !== e[t])
            .reduce((t, i) => ((t[i] = e[i]), t), {}),
        y = (e) => {
          let {
              operation: t,
              position: i,
              startPosition: r,
              endPosition: n,
              tracks: o,
            } = e,
            a = v({ op: t, at: i, from: r, to: n, tracks: o });
          return (0, p.stringifyJSONSafely)([a]);
        };
      var x = i(16106);
      ((o = l || (l = {})).INSERT = "insert"),
        (o.DELETE = "delete"),
        (o.MOVE = "move"),
        ((a = c || (c = {}))[(a.LIKE = 3)] = "LIKE"),
        (a[(a.CHART = 1076)] = "CHART");
      var g = i(17680),
        h = i(88989),
        b = i(62726),
        C = i(60989),
        j = i(14222),
        k = i(89143),
        A = i(40892);
      let R = u.V5.compose(
          u.V5.model({
            uuid: u.V5.string,
            isAvailable: u.V5.boolean,
            revision: u.V5.maybe(u.V5.number),
            uid: u.V5.number,
            kind: u.V5.number,
            title: u.V5.maybe(u.V5.string),
            coverUri: u.V5.maybe(u.V5.string),
            tracksCount: u.V5.maybe(u.V5.number),
            averageColor: u.V5.maybe(u.V5.string),
            generatedPlaylistType: u.V5.maybe(u.V5.string),
            personalColor: u.V5.maybeNull(u.V5.number),
            visibility: u.V5.maybe(u.V5.string),
            trailer: u.V5.maybe(A.K8),
          }),
          A.fE,
        )
          .views((e) => ({
            get key() {
              return "".concat(e.uuid, "_").concat(e.uid, "_").concat(e.kind);
            },
            get url() {
              return "/playlists/".concat(e.uuid);
            },
            get isLikesCountHidden() {
              return (
                e.kind === c.LIKE ||
                e.kind === c.CHART ||
                e.generatedPlaylistType
              );
            },
            get isFavouritePlaylist() {
              return e.kind === c.LIKE;
            },
            get isPublic() {
              return e.visibility === C.w.PUBLIC;
            },
            get isLiked() {
              if (!(0, u.fh)(e)) return !1;
              let { library: t } = (0, u.yj)(e);
              return t.isPlaylistLiked("".concat(e.uid, ":").concat(e.kind));
            },
            get pinId() {
              return ""
                .concat(j.Q.PLAYLIST_ITEM)
                .concat(e.uid, "_")
                .concat(e.kind);
            },
            get id() {
              return "".concat(e.uid, ":").concat(e.kind);
            },
            get isPinned() {
              if (!(0, u.fh)(e)) return !1;
              let { pinsCollection: t } = (0, u.yj)(e);
              return t.isPinned(this.pinId);
            },
            get isOwnPlaylist() {
              let { user: t } = (0, u.yj)(e);
              return !!(
                t.isAuthorized &&
                e.uid &&
                t.account.data.uid &&
                e.uid === t.account.data.uid
              );
            },
            get canUserChange() {
              if (!(0, u.fh)(e)) return !1;
              return this.isOwnPlaylist && !this.isFavouritePlaylist;
            },
          }))
          .actions((e) => ({
            toggleLike: (0, u.ls)(function* () {
              if (!(0, u.fh)(e)) return;
              let { library: t, user: i } = (0, u.yj)(e);
              if (i.isAuthorized) {
                let r = yield t.togglePlaylistLike({
                  userId: i.account.data.uid,
                  entityId: e.id,
                  ownerId: e.uid,
                  kindId: e.kind,
                });
                return (
                  (0, u.fh)(e) &&
                    r === k.B.OK &&
                    (e.isLiked ? e.likePending() : e.unlikePending()),
                  r
                );
              }
            }),
            togglePin: (0, u.ls)(function* () {
              if (!(0, u.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, u.yj)(e);
              if (i.isAuthorized)
                return yield t.togglePlaylistPin(
                  { uid: e.uid, kind: e.kind },
                  e.pinId,
                );
            }),
            changePlaylist: (0, u.ls)(function* (t) {
              if (!(0, u.fh)(e)) return s.ERROR;
              let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e);
              try {
                var n, o;
                let r = yield i.changePlaylistRelative({
                  userId: e.uid,
                  diff: t,
                  revision: null !== (n = e.revision) && void 0 !== n ? n : 0,
                  playlistKind: e.kind,
                });
                return (
                  (e.revision = r.revision),
                  (e.isAvailable =
                    null === (o = r.available) || void 0 === o || o),
                  s.OK
                );
              } catch (e) {
                if (
                  (r.error(e),
                  e &&
                    "object" == typeof e &&
                    "statusCode" in e &&
                    e.statusCode === b.CN.PRECONDITION_FAILED)
                )
                  return s.RELOAD;
                return s.ERROR;
              }
            }),
            changeTitle: (0, u.ls)(function* (t) {
              if (!(0, u.fh)(e)) return d.SLo.ERROR;
              if (e.title === t) return d.SLo.OK;
              let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e);
              if (e.canUserChange) {
                if (t.length < 1 || t.length > m) return d.SLo.ERROR;
                let n = e.title;
                e.title = t;
                try {
                  let r = yield i.changePlaylistTitle({
                    title: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  if (!(null == r ? void 0 : r.title))
                    return (e.title = n), d.SLo.ERROR;
                  return (e.title = r.title), d.SLo.OK;
                } catch (t) {
                  (e.title = n), r.error(t);
                }
              }
              return d.SLo.ERROR;
            }),
            deletePlaylist: (0, u.ls)(function* () {
              if (!(0, u.fh)(e) || !e.canUserChange) return d.SLo.ERROR;
              let { pinsCollection: t } = (0, u.yj)(e),
                { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e);
              try {
                return (
                  yield i.deletePlaylist({
                    userId: e.uid,
                    playlistKind: e.kind,
                  }),
                  t.isPinned(e.pinId) && t.deletePin(e.pinId),
                  d.SLo.OK
                );
              } catch (e) {
                r.error(e);
              }
              return d.SLo.ERROR;
            }),
            toggleVisibility: (0, u.ls)(function* (t) {
              if (!(0, u.fh)(e) || !e.canUserChange) return d.SLo.ERROR;
              let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                n = e.visibility,
                o = e.isPublic ? C.w.PRIVATE : C.w.PUBLIC;
              t && (o = t);
              try {
                return (
                  (e.visibility = o),
                  yield i.togglePlaylistVisibility({
                    visibility: o,
                    userId: e.uid,
                    playlistKind: e.kind,
                  }),
                  d.SLo.OK
                );
              } catch (e) {
                r.error(e);
              }
              return (e.visibility = n), d.SLo.ERROR;
            }),
            getKey: (t) => "".concat(t, "_").concat(e.id),
          })),
        E = u.V5.model("CreatePlaylist", { meta: u.V5.maybeNull(R) }).actions(
          (e) => ({
            create: (0, u.ls)(function* (t) {
              if (!(0, u.fh)(e)) return null;
              let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                { user: n } = (0, u.yj)(e);
              if (!n.isAuthorized) return null;
              let o = n.account.data.uid;
              try {
                let r = yield i.createPlaylist({ userId: String(o), ...t });
                return (e.meta = f(r)), e.meta.uuid;
              } catch (e) {
                return r.error(e), null;
              }
            }),
            reset() {
              e.meta = null;
            },
          }),
        ),
        P = R.props({ tracks: u.V5.maybe(u.V5.array(A.tC)) }).actions((e) => ({
          getKey: (t) => "".concat(t, "_").concat(e.id),
        }));
      var T = i(718),
        O = i(94758),
        N = i(8975),
        S = i(16439),
        I = i(39342),
        L = i(92614);
    },
    16106: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackPlaylistContext: function () {
          return r;
        },
      });
      let r = (0, i(65067).createContext)(null);
    },
    17680: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return d;
        },
      });
      var r = i(75441),
        n = i(37285),
        o = i(65067),
        a = i(9317),
        s = i(89143),
        l = i(13534),
        c = i(97141);
      let u = (e) => {
          let { playlist: t, closeToast: i } = e;
          return (0, r.jsx)(c.AP, {
            entityVariant: c.j9.PLAYLIST,
            entityUrl: "/playlists/".concat(t.uuid),
            collectionUrl: "/collection",
            entityTitle: t.title,
            isLiked: t.isLiked,
            closeToast: i,
            coverUri: t.coverUri,
          });
        },
        d = (e) => {
          let { user: t } = (0, l.oR4)(),
            { notify: i } = (0, l.d$W)(),
            [d, f] = (0, o.useState)(!1),
            { formatMessage: _ } = (0, a.Z)();
          return (0, o.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(c.Q, {
                  error: _({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let o = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            f(!0);
            let a = await e.toggleLike();
            f(!1),
              a === s.B.OK
                ? i((0, r.jsx)(u, { playlist: o }), { containerId: l.W$x.INFO })
                : i(
                    (0, r.jsx)(c.Q, {
                      error: _({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$x.ERROR },
                  );
          }, [t.isAuthorized, d, e, _, i]);
        };
    },
    88989: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return u;
        },
      });
      var r = i(75441),
        n = i(37285),
        o = i(65067),
        a = i(9317),
        s = i(13534),
        l = i(97141);
      let c = (e) => {
          let { playlist: t, closeToast: i } = e;
          return (0, r.jsx)(l.K1, {
            closeToast: i,
            entityVariant: l.j9.PLAYLIST,
            entityUrl: "/playlists/".concat(t.uuid),
            coverUri: t.coverUri,
            entityTitle: t.title,
            isPinned: t.isPinned,
          });
        },
        u = (e) => {
          let { user: t } = (0, s.oR4)(),
            { notify: i } = (0, s.d$W)(),
            { formatMessage: u } = (0, a.Z)(),
            [d, f] = (0, o.useState)(!1);
          return (0, o.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(l.Q, {
                  error: u({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            if (d) return;
            let o = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            f(!0);
            let a = await e.togglePin();
            f(!1),
              a
                ? i((0, r.jsx)(c, { playlist: o }), { containerId: s.W$x.INFO })
                : i(
                    (0, r.jsx)(l.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [t.isAuthorized, d, e, i, u]);
        };
    },
    718: function (e, t, i) {
      "use strict";
      i.d(t, {
        ContextMenuPlaylistPrivacyItem: function () {
          return y;
        },
      });
      var r = i(75441),
        n = i(32358),
        o = i(62569),
        a = i(65067),
        s = i(9317),
        l = i(15937),
        c = i(35846),
        u = i(69756),
        d = i(27376),
        f = i(85790),
        _ = i(13534),
        m = i(97141),
        p = i(79711),
        v = i.n(p);
      let y = (0, o.Pi)((e) => {
        let { className: t, playlist: i } = e,
          { notify: o } = (0, _.d$W)(),
          { formatMessage: p } = (0, s.Z)(),
          y = (0, a.useCallback)(async () => {
            (await i.toggleVisibility()) === _.SLo.ERROR &&
              o(
                (0, r.jsx)(m.Q, {
                  error: p({
                    id: "playlist-errors.failed-to-change-privacy-settings",
                  }),
                }),
                { containerId: _.W$x.ERROR },
              );
          }, [p, o, i]);
        return (0, r.jsxs)(d.sN, {
          className: (0, n.W)(v().root, t),
          onClick: y,
          icon: (0, r.jsx)(u.Icon, { variant: "eye_crossed", size: "xxs" }),
          ...(0, c.BA)(c.r9.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON),
          role: "menuitemcheckbox",
          "aria-checked": !i.isPublic,
          isSubMenu: !0,
          isBlock: !0,
          children: [
            (0, r.jsx)("span", {
              className: v().caption,
              children: (0, r.jsx)(l.Z, { id: "playlist-actions.privacy" }),
            }),
            (0, r.jsx)(f.Z, {
              isChecked: !i.isPublic,
              ariaLabel: p({ id: "playlist-actions.privacy-label" }),
              tabIndex: -1,
            }),
          ],
        });
      });
    },
    94758: function (e, t, i) {
      "use strict";
      i.d(t, {
        CreatePlaylistCard: function () {
          return g;
        },
      });
      var r = i(75441),
        n = i(32358),
        o = i(62569),
        a = i(98730),
        s = i(65067),
        l = i(9317),
        c = i(15937),
        u = i(35846),
        d = i(60989),
        f = i(68208),
        _ = i(69756),
        m = i(17392),
        p = i(13534),
        v = i(97141),
        y = i(70543),
        x = i.n(y);
      let g = (0, o.Pi)((e) => {
        let { className: t } = e,
          { formatMessage: i } = (0, l.Z)(),
          { createPlaylist: o } = (0, p.oR4)(),
          { notify: y } = (0, p.d$W)(),
          g = (0, a.useRouter)(),
          h = (0, s.useRef)(!1),
          b = (0, s.useCallback)(async () => {
            if (h.current) return;
            h.current = !0;
            let e = await o.create({
              title: i({ id: "entity-names.new-playlist" }),
              visibility: d.w.PUBLIC,
            });
            if (e) {
              let t = (0, p.SZ_)("/playlists/".concat(e));
              t && g.push(t);
            } else
              y(
                (0, r.jsx)(v.Q, {
                  error: i({ id: "playlist-errors.failed-to-create-playlist" }),
                }),
                { containerId: p.W$x.ERROR },
              ),
                (h.current = !1);
          }, [o, i, g, y]);
        return (
          (0, s.useEffect)(
            () => () => {
              o.reset();
            },
            [o],
          ),
          (0, r.jsxs)("div", {
            className: (0, n.W)(x().root, t),
            ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_CARD),
            children: [
              (0, r.jsx)(f.Button, {
                className: x().button,
                icon: (0, r.jsx)(_.Icon, {
                  className: x().icon,
                  variant: "add",
                  size: "l",
                }),
                radius: "s",
                "aria-label": i({ id: "playlist-actions.create-playlist" }),
                onClick: b,
                flexIcon: !0,
                isBlock: !0,
                ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_BUTTON),
              }),
              (0, r.jsx)(m.Caption, {
                weight: "medium",
                size: "s",
                variant: "div",
                className: x().text,
                ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_TITLE),
                children: (0, r.jsx)(c.Z, { id: "collection.new-playlist" }),
              }),
            ],
          })
        );
      });
    },
    8975: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationFailedAddToPlaylist: function () {
          return c;
        },
      });
      var r = i(75441),
        n = i(15937),
        o = i(17392),
        a = i(97141),
        s = i(7425),
        l = i.n(s);
      let c = () =>
        (0, r.jsx)(a.Yj, {
          message: (0, r.jsx)(o.Caption, {
            className: l().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, r.jsx)(n.Z, {
              id: "playlist-errors.failed-add-track-to-playlist",
            }),
          }),
        });
    },
    16439: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationFailedRemoveFromPlaylist: function () {
          return c;
        },
      });
      var r = i(75441),
        n = i(15937),
        o = i(17392),
        a = i(97141),
        s = i(7425),
        l = i.n(s);
      let c = () =>
        (0, r.jsx)(a.Yj, {
          message: (0, r.jsx)(o.Caption, {
            className: l().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, r.jsx)(n.Z, {
              id: "playlist-errors.failed-to-remove-track",
            }),
          }),
        });
    },
    39342: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationAddToPlaylist: function () {
          return _;
        },
      });
      var r = i(75441),
        n = i(62569),
        o = i(65067),
        a = i(15937),
        s = i(93093),
        l = i(17392),
        c = i(13534),
        u = i(97141),
        d = i(35920),
        f = i.n(d);
      let _ = (0, n.Pi)((e) => {
        let {
            entityTitle: t,
            entityVariant: i,
            entityCoverUri: n,
            playlist: d,
            closeToast: _,
          } = e,
          { fullscreenPlayer: m } = (0, c.oR4)(),
          p = (0, s.W)(() => {
            m.modal.isOpened && m.modal.close();
          }),
          v = (0, o.useMemo)(() => {
            let e;
            let n = {
              trackName: (0, r.jsxs)(l.Caption, {
                className: f().title,
                variant: "div",
                type: "controls",
                size: "m",
                lineClamp: 1,
                children: ["\xa0", t, "\xa0"],
              }),
              playlistName: (0, r.jsx)(u.rU, {
                className: f().link,
                href: d.url,
                onClick: p,
                children: (0, r.jsxs)(l.Caption, {
                  className: f().playlistTitle,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", d.title, "\xa0"],
                }),
              }),
            };
            switch (i) {
              case u.j9.PODCAST_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.added-podcast-episode-to-playlist",
                  values: n,
                });
                break;
              case u.j9.AUDIOBOOK_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.added-audiobook-episode-to-playlist",
                  values: n,
                });
                break;
              default:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.added-track-to-playlist",
                  values: n,
                });
            }
            return (0, r.jsx)(l.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              lineClamp: 1,
              children: e,
            });
          }, [t, i, p, d.title, d.url]);
        return (0, r.jsx)(u.Yj, {
          closeToast: _,
          message: v,
          cover: (0, r.jsx)(u.BE, {
            className: f().image,
            src: n,
            withAvatarReplace: !0,
            size: 100,
            fit: "cover",
            alt: t,
          }),
        });
      });
    },
    92614: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationRemoveFromPlaylist: function () {
          return _;
        },
      });
      var r = i(75441),
        n = i(62569),
        o = i(65067),
        a = i(15937),
        s = i(93093),
        l = i(17392),
        c = i(13534),
        u = i(97141),
        d = i(35920),
        f = i.n(d);
      let _ = (0, n.Pi)((e) => {
        let {
            entityTitle: t,
            entityVariant: i,
            entityCoverUri: n,
            playlist: d,
            closeToast: _,
          } = e,
          { fullscreenPlayer: m } = (0, c.oR4)(),
          p = (0, s.W)(() => {
            m.modal.isOpened && m.modal.close();
          }),
          v = (0, o.useMemo)(() => {
            let e;
            let n = {
              trackName: (0, r.jsxs)(l.Caption, {
                className: f().title,
                variant: "div",
                type: "controls",
                size: "m",
                lineClamp: 1,
                children: ["\xa0", t, "\xa0"],
              }),
              playlistName: (0, r.jsx)(u.rU, {
                className: f().link,
                href: d.url,
                onClick: p,
                children: (0, r.jsxs)(l.Caption, {
                  className: f().playlistTitle,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", d.title, "\xa0"],
                }),
              }),
            };
            switch (i) {
              case u.j9.PODCAST_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.removed-podcast-episode-from-playlist",
                  values: n,
                });
                break;
              case u.j9.AUDIOBOOK_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.removed-audiobook-episode-from-playlist",
                  values: n,
                });
                break;
              default:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.removed-track-from-playlist",
                  values: n,
                });
            }
            return (0, r.jsx)(l.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              lineClamp: 1,
              children: e,
            });
          }, [t, i, p, d.title, d.url]);
        return (0, r.jsx)(u.Yj, {
          closeToast: _,
          message: v,
          cover: (0, r.jsx)(u.BE, {
            className: f().image,
            src: n,
            withAvatarReplace: !0,
            size: 100,
            fit: "cover",
            alt: t,
          }),
        });
      });
    },
    49279: function (e) {
      e.exports = {
        root: "ArtistBandlinkScanner_root__D3cAC",
        descriptionTitleButton:
          "ArtistBandlinkScanner_descriptionTitleButton__0M8Ag",
        icon: "ArtistBandlinkScanner_icon__n5ntO",
        description: "ArtistBandlinkScanner_description__n8ypX",
        descriptionTitle: "ArtistBandlinkScanner_descriptionTitle__9Z1MT",
        descriptionTitleText:
          "ArtistBandlinkScanner_descriptionTitleText__xWvIS",
        descriptionArtist: "ArtistBandlinkScanner_descriptionArtist__7ZvJo",
      };
    },
    49853: function (e) {
      e.exports = {
        root: "ArtistItem_root__Q_mgJ",
        cover: "ArtistItem_cover__FTvHo",
        image: "ArtistItem_image__5rKWF",
      };
    },
    9813: function (e) {
      e.exports = {
        root: "ArtistSocialLinks_root__9wQxA",
        link: "ArtistSocialLinks_link__UFvCL",
        icon: "ArtistSocialLinks_icon__Y9VLu",
      };
    },
    20122: function (e) {
      e.exports = {
        title: "ArtistStats_title__Yxyh1",
        count: "ArtistStats_count__8h5zM",
        stats: "ArtistStats_stats__Hammf",
        statsNumber_positive: "ArtistStats_statsNumber_positive__GlukF",
        statsNumber_negative: "ArtistStats_statsNumber_negative__C0bH5",
      };
    },
    6996: function (e) {
      e.exports = {
        message: "NotificationDislike_message__RoxZH",
        text: "NotificationDislike_text__fJHts",
        cover: "NotificationDislike_cover__N5Oqu",
        image: "NotificationDislike_image__jn4_4",
      };
    },
    59097: function (e) {
      e.exports = {
        root_clamp: "SeparatedArtists_root_clamp__SyvjM",
        root_variant_breakAll: "SeparatedArtists_root_variant_breakAll__34YbW",
        root_variant_breakWord:
          "SeparatedArtists_root_variant_breakWord__1sziE",
        ellipsis: "SeparatedArtists_ellipsis__0SUCv",
      };
    },
    73343: function (e) {
      e.exports = {
        tooltipContent:
          "SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD",
      };
    },
    6959: function (e) {
      e.exports = {
        root: "SeparatedArtistsWithContextMenuMobile_root__4BiJL",
        important: "SeparatedArtistsWithContextMenuMobile_important__fSF1h",
      };
    },
    38274: function (e) {
      e.exports = {
        message: "EditorsFeaturesFailedNotification_message__EIgMe",
      };
    },
    18871: function (e) {
      e.exports = {
        message: "EditorsFeaturesNotification_message__Q__9v",
        text: "EditorsFeaturesNotification_text__b79yA",
        title: "EditorsFeaturesNotification_title__BuJZ_",
        link: "EditorsFeaturesNotification_link__deYjx",
        playlistTitle: "EditorsFeaturesNotification_playlistTitle__Hv7bZ",
        image: "EditorsFeaturesNotification_image__AidPK",
      };
    },
    79711: function (e) {
      e.exports = {
        root: "ContextMenuPlaylistPrivacyItem_root__kz3gc",
        caption: "ContextMenuPlaylistPrivacyItem_caption__0VuXh",
      };
    },
    70543: function (e) {
      e.exports = {
        root: "CreatePlaylistCard_root__pMDua",
        button: "CreatePlaylistCard_button__ZaAtb",
        icon: "CreatePlaylistCard_icon__09K9N",
        text: "CreatePlaylistCard_text__dd9Q6",
      };
    },
    7425: function (e) {
      e.exports = { message: "FailedPlaylistNotification_message__wxrzi" };
    },
    35920: function (e) {
      e.exports = {
        message: "PlaylistNotification_message__nEykK",
        text: "PlaylistNotification_text__kTfi1",
        title: "PlaylistNotification_title__Q5IKF",
        link: "PlaylistNotification_link__HezVx",
        playlistTitle: "PlaylistNotification_playlistTitle__HweEg",
        image: "PlaylistNotification_image__QvYVD",
      };
    },
    40918: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return o;
        },
      });
      var r = i(27198),
        n = i(98151);
      class o extends n.e {
        constructor(e, t) {
          super(e, {
            code: "E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",
            cause: t.cause,
          }),
            (0, r._)(this, "name", "HttpErrorException"),
            (0, r._)(this, "statusCode", void 0),
            (this.statusCode = t.statusCode),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
    },
    98151: function (e, t, i) {
      "use strict";
      i.d(t, {
        e: function () {
          return o;
        },
      });
      var r = i(27198),
        n = i(25534);
      class o extends n.y {
        constructor(
          e = "Http Client error",
          { code: t = "E_HTTP_CLIENT", ...i } = {},
        ) {
          super(e, { code: t, ...i }),
            (0, r._)(this, "name", "HttpException"),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
    },
    62726: function (e, t, i) {
      "use strict";
      i.d(t, {
        CN: function () {
          return r.C;
        },
        du: function () {
          return o.d;
        },
        eY: function () {
          return n.e;
        },
      });
      var r = i(470),
        n = i(98151),
        o = i(40918);
    },
    470: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        C: function () {
          return r;
        },
      }),
        ((n = r || (r = {}))[(n.NOT_FOUND = 404)] = "NOT_FOUND"),
        (n[(n.BAD_REQUEST = 400)] = "BAD_REQUEST"),
        (n[(n.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
        (n[(n.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
        (n[(n.TEAPOT = 418)] = "TEAPOT");
    },
    14617: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        P: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).OK = "ok"),
        (n.ERROR = "error");
    },
    5403: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        Y: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).ARTIST = "artist"),
        (n.COMPOSER = "composer");
    },
    14222: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        Q: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).ALBUM_ITEM = "album_item"),
        (n.ARTIST_ITEM = "artist_item"),
        (n.PLAYLIST_ITEM = "playlist_item"),
        (n.TRACK_ITEM = "track_item"),
        (n.LIKED_PLAYLIST_ITEM = "liked_playlist_item"),
        (n.PERSONAL_PLAYLIST_ITEM = "personal_playlist_item"),
        (n.WAVE_ITEM = "wave_item"),
        (n.MIX = "mix"),
        (n.MIX_CARD_ITEM = "mix_card_item"),
        (n.LIKED_ALBUM_ITEM = "liked_album_item"),
        (n.PRESAVED_ALBUM_ITEM = "presaved_album_item"),
        (n.CHART_ALBUM_ITEM = "chart_album_item"),
        (n.NON_MUSIC_ALBUM_ITEM = "non_music_album_item"),
        (n.MENU_ITEM = "menu_item"),
        (n.DONATION_ITEM = "donation_item"),
        (n.CLIP = "clip"),
        (n.CLIP_ITEM = "clip_item");
    },
    60989: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        w: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).PUBLIC = "public"),
        (n.PRIVATE = "private");
    },
  },
]);
