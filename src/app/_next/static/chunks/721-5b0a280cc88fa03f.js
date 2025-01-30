(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [721],
  {
    32907: function (e, t, i) {
      "use strict";
      i.d(t, {
        V: function () {
          return n;
        },
      });
      var r = {};
      Object.defineProperty(r, "X", { value: !0 }),
        (r.V = void 0),
        (r.V = (e) => e()),
        r.X;
      var n = r.V;
    },
    60383: function (e, t, i) {
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
            l = r.getBoundingClientRect(),
            s = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
            u = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
          (n.style.width = "".concat(o, "px")),
            (n.style.height = "".concat(o, "px")),
            (n.style.left = 0 === e.clientX ? "0px" : "".concat(s - a, "px")),
            (n.style.top = "".concat(u - a, "px")),
            n.classList.add(t);
          let d = r.getElementsByClassName(t)[0];
          d && d.remove(), r.insertBefore(n, r.firstChild);
        }),
        r.__esModule;
      var n = r.createRipple;
    },
    28257: function (e, t, i) {
      "use strict";
      i.d(t, {
        kk: function () {
          return c;
        },
        m7: function () {
          return f;
        },
      });
      var r,
        n,
        o,
        a = i(91207),
        l = {
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
          6079: (e, t, i) => {
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
          1594: (e, t, i) => {
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
          2994: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = { root: "LizdJ2L0HW7JWOvPrfly" };
          },
          2068: (e, t, i) => {
            i.r(t), i.d(t, { default: () => r });
            let r = {
              root: "eaYyesBmJL_NbkgoYR1c",
              focusable: "uL1dD5rxgI4bPmfyMMe7",
            };
          },
          390: (e, t, i) => {
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
          8544: (e, t, i) => {
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
          2524: (e, t, i) => {
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
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, i) {
              var r,
                o = {},
                u = null,
                d = null;
              for (r in (void 0 !== i && (u = "" + i),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                a.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: n,
                type: e,
                key: u,
                ref: d,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
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
              l = r(i(6079));
            t.CardControls = (e) => {
              let {
                  className: t,
                  playControl: i,
                  likeControl: r,
                  menuControl: s,
                  pinControl: u,
                  trailerControl: d,
                  isVisible: c,
                  radius: f = "default",
                  bottomContainerClassName: m,
                  labelText: v,
                } = e,
                p = d || i,
                _ = s || r;
              return (0, n.jsxs)("div", {
                className: (0, o.clsx)(
                  l.default.root,
                  l.default.controls,
                  { [l.default.controls_visible]: c },
                  l.default["controls_radius_".concat(f)],
                  t,
                ),
                children: [
                  (0, n.jsx)("div", { className: l.default.top, children: u }),
                  (0, n.jsxs)("div", {
                    className: (0, o.clsx)(l.default.bottom, m),
                    children: [
                      p &&
                        (0, n.jsxs)("div", {
                          className: l.default.bottom_left,
                          children: [d, i],
                        }),
                      _ &&
                        (0, n.jsxs)("div", {
                          className: l.default.bottom_right,
                          children: [s, r],
                        }),
                    ],
                  }),
                  !!v &&
                    (0, n.jsx)(a.Label, {
                      className: l.default.label,
                      children: v,
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
              l = i(2582),
              s = i(3758),
              u = r(i(1594)),
              d = (e) => {
                let {
                  forwardRef: t,
                  view: i,
                  className: r,
                  textPosition: o = "left",
                  contentLinesCount: d = 2,
                  title: c,
                  description: f,
                  explicitMarkComponent: m,
                  chart: v,
                  children: p,
                  srTitle: _,
                  ...y
                } = e;
                return (0, n.jsxs)("div", {
                  className: (0, a.clsx)(u.default.root, r),
                  ref: t,
                  ...y,
                  children: [
                    (0, n.jsx)(s.SROnly, { tabIndex: -1, children: _ || c }),
                    (0, n.jsx)("div", {
                      className: u.default.viewContainer,
                      children: i,
                    }),
                    (0, n.jsxs)("div", {
                      className: u.default.wrapper,
                      children: [
                        v,
                        (0, n.jsxs)("div", {
                          className: (0, a.clsx)(
                            u.default.content,
                            u.default["content_".concat(o)],
                            u.default["content_linesCount_".concat(d)],
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: u.default.titleContainer,
                              children: [
                                (0, n.jsx)(l.Caption, {
                                  className: u.default.title,
                                  variant: "div",
                                  type: "entity",
                                  size: "s",
                                  weight: "medium",
                                  lineClamp: 2,
                                  "aria-hidden": !0,
                                  children: c,
                                }),
                                m,
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
              (0, n.jsx)(d, { forwardRef: t, ...e }),
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
              l = r(i(2994));
            t.Label = (e) => {
              let { children: t, className: i, size: r = "s" } = e;
              return (0, n.jsx)(a.Caption, {
                variant: "div",
                type: "text",
                size: r,
                lineClamp: 1,
                className: (0, o.clsx)(l.default.root, i),
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
              l = r(i(2068));
            t.SROnly = (e) => {
              let { className: t, focusable: i, children: r, ...s } = e,
                u = (0, o.clsx)(
                  l.default.root,
                  { [l.default.focusable]: i },
                  t,
                );
              return (0, a.isValidElement)(r)
                ? (0, a.cloneElement)(r, {
                    ...s,
                    className: (0, o.clsx)(u, r.props.className),
                  })
                : (0, n.jsx)("span", { className: u, ...s, children: r });
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
              l = i(4721),
              s = r(i(390));
            (t.CaptionComponent = (e) => {
              let {
                forwardRef: t,
                variant: i,
                type: r = "text",
                size: a = "s",
                className: u,
                children: d,
                weight: c = "medium",
                ...f
              } = e;
              return (0, n.jsx)(l.Typography, {
                variant: i,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_".concat(r, "_").concat(a)],
                  s.default["root_weight_".concat(c)],
                  u,
                ),
                ...f,
                children: d,
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
              l = i(4721),
              s = r(i(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: i,
                weight: r = "bold",
                size: a = "s",
                className: u,
                children: d,
                ...c
              } = e;
              return (0, n.jsx)(l.Typography, {
                variant: i,
                ref: t,
                className: (0, o.clsx)(
                  s.default.root,
                  s.default["root_size_".concat(a)],
                  s.default["root_weight_".concat(r)],
                  u,
                ),
                ...c,
                children: d,
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
              l = r(i(2524));
            function s(e) {
              let {
                  forwardRef: t,
                  style: i,
                  className: r,
                  children: a,
                  variant: s,
                  lineClamp: u,
                  ...d
                } = e,
                c = u && "string" == typeof a ? a : void 0;
              return (0, n.jsx)(s, {
                style: { ...i, WebkitLineClamp: u },
                ref: t,
                title: c,
                className: (0, o.clsx)(
                  l.default.root,
                  {
                    [l.default.root_clamp]: u && u > 0,
                    [l.default.root_clamp_oneline]: u && 1 === u,
                    [l.default.root_clamp_multiline]: u && u > 1,
                  },
                  r,
                ),
                ...d,
                children: a,
              });
            }
            (t.TypographyComponent = s),
              (t.Typography = (0, a.forwardRef)((e, t) =>
                (0, n.jsx)(s, { forwardRef: t, ...e }),
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
        s = {};
      function u(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var i = (s[e] = { exports: {} });
        return l[e].call(i.exports, i, i.exports, u), i.exports;
      }
      (u.d = (e, t) => {
        for (var i in t)
          u.o(t, i) &&
            !u.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (u.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var d = {};
      Object.defineProperty(d, "X$", { value: !0 }),
        (d.kk = d.m7 = void 0),
        (r = u(440)),
        Object.defineProperty(d, "m7", {
          enumerable: !0,
          get: function () {
            return r.EntityCard;
          },
        }),
        (n = u(5817)),
        Object.defineProperty(d, "kk", {
          enumerable: !0,
          get: function () {
            return n.CardControls;
          },
        });
      var c = d.kk,
        f = d.m7;
      d.X$;
    },
    32427: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var r,
        n,
        o = i(91207),
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
          8635: (e, t, i) => {
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
          5677: (e, t, i) => {
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
              l =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, i) {
              var r,
                o = {},
                u = null,
                d = null;
              for (r in (void 0 !== i && (u = "" + i),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                a.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === o[r] && (o[r] = t[r]);
              return {
                $$typeof: n,
                type: e,
                key: u,
                ref: d,
                props: o,
                _owner: l.current,
              };
            }
            (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
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
                  l = r.getBoundingClientRect(),
                  s =
                    0 === e.clientX
                      ? Math.round(l.width / 2)
                      : e.clientX - l.left,
                  u =
                    0 === e.clientY
                      ? Math.round(l.height / 2)
                      : e.clientY - l.top;
                (n.style.width = "".concat(o, "px")),
                  (n.style.height = "".concat(o, "px")),
                  (n.style.left =
                    0 === e.clientX ? "0px" : "".concat(s - a, "px")),
                  (n.style.top = "".concat(u - a, "px")),
                  n.classList.add(t);
                let d = r.getElementsByClassName(t)[0];
                d && d.remove(), r.insertBefore(n, r.firstChild);
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
              l = i(8216),
              s = r(i(8635)),
              u = (e) => {
                let {
                    forwardRef: t,
                    isBlock: i,
                    iconPosition: r = "left",
                    children: u,
                    className: d,
                    color: c = "secondary",
                    flexIcon: f,
                    icon: m,
                    spinner: v,
                    role: p,
                    onClick: _,
                    radius: y = "m",
                    size: h,
                    type: g = "button",
                    variant: x = "default",
                    withRipple: E = !0,
                    withHover: b = !0,
                    withBorder: k = !1,
                    disabled: R,
                    iconClassName: O,
                    contentContainerClassName: j,
                    ...C
                  } = e,
                  P = (0, o.useId)(),
                  I = !o.Children.toArray(u).filter(Boolean).length,
                  A = "left" === r,
                  N = null,
                  T = (0, o.isValidElement)(v);
                if (m) {
                  var L, S;
                  N = (0, o.cloneElement)(m, {
                    className: (0, a.clsx)(
                      s.default.icon,
                      {
                        [s.default["icon_position_".concat(r)]]: r && !I,
                        [s.default.icon_withButtonSize]: !(null ===
                          (L = m.props) || void 0 === L
                          ? void 0
                          : L.size),
                      },
                      null === (S = m.props) || void 0 === S
                        ? void 0
                        : S.className,
                      O,
                    ),
                    key: P,
                  });
                }
                let V = (0, o.useMemo)(
                    () =>
                      T
                        ? (0, n.jsx)("div", {
                            className: s.default.spinnerContainer,
                            children: v,
                          })
                        : null,
                    [T, v],
                  ),
                  D = (0, o.useCallback)(
                    (e) => {
                      T ||
                        (E && (0, l.createRipple)(e, s.default.ripple),
                        null == _ || _(e));
                    },
                    [T, _, E],
                  );
                return (0, n.jsx)("button", {
                  ref: t,
                  className: (0, a.clsx)(
                    s.default.root,
                    s.default["root_".concat(c, "_").concat(x)],
                    s.default["root_radius_".concat(y)],
                    s.default.root_size,
                    {
                      [s.default["root_".concat(c, "_withHover_").concat(x)]]:
                        b && !R && !T,
                      [s.default["root_size_".concat(h)]]: h,
                      [s.default.root_withoutBorder]: !k,
                      [s.default.root_withActiveSpinner]: T,
                      [s.default.block]: i,
                      [s.default.flexIcon]: f,
                      [s.default.iconOnly]: I,
                      [s.default.root_icon_left]: m && !I && A,
                      [s.default.root_icon_right]: m && !I && !A,
                    },
                    d,
                  ),
                  type: g,
                  role: p,
                  onClick: D,
                  ...C,
                  disabled: R,
                  "aria-live": T ? "polite" : "off",
                  "aria-busy": T,
                  children:
                    m || T
                      ? (0, n.jsxs)("span", {
                          className: (0, a.clsx)(
                            s.default.contentContainer,
                            { [s.default.contentContainer_block]: i },
                            j,
                          ),
                          children: [m && A && N, !I && u, m && !A && N, V],
                        })
                      : u,
                });
              };
            t.Button = (0, o.forwardRef)((e, t) =>
              (0, n.jsx)(u, { forwardRef: t, ...e }),
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
              l = i(5928),
              s = r(i(5677)),
              u = (e) => {
                let { isChecked: t } = e;
                return (0, n.jsx)("div", {
                  className: (0, o.clsx)(s.default.icon, {
                    [s.default.icon_checked]: t,
                  }),
                });
              };
            t.Toggle = (e) => {
              let {
                  className: t,
                  isChecked: i = !1,
                  onChange: r,
                  "aria-label": d,
                  "aria-describedby": c,
                  ...f
                } = e,
                [m, v] = (0, a.useState)(i),
                p = (0, a.useCallback)(() => {
                  let e = !m;
                  v(e), null == r || r(e);
                }, [m, r]);
              return (
                (0, a.useEffect)(() => {
                  v(i);
                }, [i]),
                (0, n.jsx)(l.Button, {
                  className: (0, o.clsx)(
                    s.default.root,
                    { [s.default.root_checked]: m },
                    t,
                  ),
                  radius: "xxxl",
                  variant: "default",
                  icon: (0, n.jsx)(u, { isChecked: m }),
                  withRipple: !1,
                  onClick: p,
                  role: "switch",
                  "aria-checked": m,
                  "aria-label": d,
                  "aria-describedby": c,
                  ...f,
                  color: m ? "primary" : "secondary",
                })
              );
            };
          },
          810: (e) => {
            e.exports = n || (n = i.t(o, 2));
          },
        },
        l = {};
      function s(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var i = (l[e] = { exports: {} });
        return a[e].call(i.exports, i, i.exports, s), i.exports;
      }
      (s.d = (e, t) => {
        for (var i in t)
          s.o(t, i) &&
            !s.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var u = {};
      Object.defineProperty(u, "X", { value: !0 }),
        (u.Z = void 0),
        (r = s(7459)),
        Object.defineProperty(u, "Z", {
          enumerable: !0,
          get: function () {
            return r.Toggle;
          },
        });
      var d = u.Z;
      u.X;
    },
    9096: function (e, t, i) {
      "use strict";
      i.d(t, {
        Go: function () {
          return b;
        },
        jO: function () {
          return k.SeparatedArtists;
        },
        d: function () {
          return s;
        },
        tR: function () {
          return u;
        },
        ik: function () {
          return d.i;
        },
        KX: function () {
          return c.useOnDislikeClick;
        },
        SB: function () {
          return f.useOnLikeClick;
        },
        BV: function () {
          return m.useOnPinClick;
        },
      });
      var r = i(2685),
        n = i(58997);
      let o = (e) => ({
          albums: e.directAlbums,
          compilations: e.alsoAlbums,
          tracks: e.tracks,
        }),
        a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [];
          return (
            e.forEach((i, n) => {
              let o = e[n + 1];
              if ("string" == typeof i && "object" == typeof o) {
                var a;
                t.push(
                  (0, r.pj)({
                    id: String(o.id),
                    name: o.name,
                    various: o.various,
                    composer: o.composer,
                    separator: i,
                    isAvailable:
                      null === (a = o.available) || void 0 === a || a,
                    disclaimers: o.disclaimers,
                  }),
                );
              }
            }),
            t.length > 0 ? t : void 0
          );
        },
        l = (e) => ({
          type: e.type,
          title: null == e ? void 0 : e.title,
          color: null == e ? void 0 : e.color,
          url: null == e ? void 0 : e.url,
        }),
        s = (e) => {
          var t, i, s;
          let u = a(e.decomposed),
            d = (null == e ? void 0 : e.counts) ? o(e.counts) : void 0,
            c =
              null === (t = e.extraActions) || void 0 === t ? void 0 : t.map(l),
            f = (0, n.GFX)(e.trailer);
          return (0, r.pj)({
            id: String(e.id),
            name: e.name,
            composer: e.composer,
            coverUri: null === (i = e.cover) || void 0 === i ? void 0 : i.uri,
            various: e.various,
            averageColor: (0, n.Usz)(null == e ? void 0 : e.derivedColors),
            decomposed: u,
            counts: d,
            extraActions: c,
            isAvailable:
              null === (s = null == e ? void 0 : e.available) ||
              void 0 === s ||
              s,
            disclaimers: e.disclaimers,
            trailer: f,
          });
        },
        u = (e) => {
          var t;
          let { artist: i, trailer: o } = e,
            l = a(i.decomposed),
            { available: s, disclaimers: u } = (0, n.NuW)(i);
          return (0, r.pj)({
            id: String(i.id),
            name: i.name,
            coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            decomposed: l,
            isAvailable: s,
            disclaimers: u,
            trailer: (0, n.GFX)(o),
          });
        };
      var d = i(81100),
        c = i(42934),
        f = i(86445),
        m = i(23394),
        v = i(27980),
        p = i(19522),
        _ = i(91694);
      let y = r.V5.model("BaseArtist", {
          id: r.V5.string,
          name: r.V5.string,
          various: r.V5.maybe(r.V5.boolean),
          composer: r.V5.maybe(r.V5.boolean),
          isAvailable: r.V5.boolean,
          disclaimers: r.V5.maybe(r.V5.array(r.V5.string)),
          trailer: r.V5.maybe(_.K8),
        })
          .views((e) => ({
            get key() {
              return "".concat(e.id, "_").concat(e.name);
            },
            get url() {
              return "/artist/".concat(e.id);
            },
            get isLiked() {
              if (!(0, r.fh)(e)) return !1;
              let { library: t } = (0, r.yj)(e);
              return t.isArtistLiked(e.id);
            },
            get isDisliked() {
              if (!(0, r.fh)(e)) return !1;
              let { library: t } = (0, r.yj)(e);
              return t.isArtistDisliked(e.id);
            },
            get pinId() {
              return "".concat(v.Q.ARTIST_ITEM).concat(e.id);
            },
            get seeds() {
              return ["artist:".concat(e.id)];
            },
            get isPinned() {
              if (!(0, r.fh)(e)) return !1;
              let { pinsCollection: t } = (0, r.yj)(e);
              return t.isPinned(this.pinId);
            },
            get newModalDisclaimerId() {
              if (e.disclaimers) {
                var t;
                let i =
                  null === (t = (0, n.V4d)(e.disclaimers, p.e.MODAL)) ||
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
              var i, o;
              if (!(0, r.fh)(e)) return !1;
              let { experiments: t } = (0, r.yj)(e),
                a = t.checkExperiment(n.peG.WebNextNewExplicitApiModalFA, "on"),
                l = !!(null === (i = e.disclaimers) || void 0 === i
                  ? void 0
                  : i.includes(p.e.FOREIGN_AGENT));
              if (a && e.disclaimers) {
                let t =
                  null === (o = (0, n.V4d)(e.disclaimers, p.e.FOREIGN_AGENT)) ||
                  void 0 === o
                    ? void 0
                    : o[0];
                l = (null == t ? void 0 : t.type) === p.e.FOREIGN_AGENT;
              }
              return l && t.checkExperiment(n.peG.WebNextAgentArtist, "on");
            },
            get isLegalRejected() {
              if (!(0, r.fh)(e)) return !1;
              let { experiments: t } = (0, r.yj)(e),
                i = t.checkExperiment(n.peG.WebNextLegalRejectArtist, "on"),
                o = t.checkExperiment(n.peG.WebNextNewExplicitApiModalFA, "on");
              if (e.disclaimers && o) {
                var a;
                let t =
                  null === (a = (0, n.V4d)(e.disclaimers, p.e.MODAL)) ||
                  void 0 === a
                    ? void 0
                    : a[0];
                return (
                  !e.isAvailable && (null == t ? void 0 : t.type) === p.e.MODAL
                );
              }
              if (e.disclaimers && i)
                return !e.isAvailable && e.disclaimers.includes(p.e.MODAL);
              return !1;
            },
            get isUnsafeLegal() {
              if (!(0, r.fh)(e)) return !1;
              let { experiments: t } = (0, r.yj)(e),
                i = t.checkExperiment(n.peG.WebNextLegalUnsafeArtist, "on"),
                o = t.checkExperiment(n.peG.WebNextNewExplicitApiModalFA, "on");
              if (e.disclaimers && o) {
                var l;
                let t =
                  null === (l = (0, n.V4d)(e.disclaimers, p.e.MODAL)) ||
                  void 0 === l
                    ? void 0
                    : l[0];
                return (
                  e.isAvailable && (null == t ? void 0 : t.type) === p.e.MODAL
                );
              }
              if (e.disclaimers && i)
                return e.isAvailable && e.disclaimers.includes(p.e.MODAL);
              return !1;
            },
          }))
          .actions((e) => ({
            toggleLike() {
              if (!(0, r.fh)(e)) return;
              let { library: t, user: i } = (0, r.yj)(e);
              if (i.isAuthorized)
                return t.toggleArtistLike({
                  entityId: e.id,
                  userId: i.account.uid,
                });
            },
            toggleDislike() {
              if (!(0, r.fh)(e)) return;
              let { library: t, user: i } = (0, r.yj)(e);
              return t.toggleArtistDislike({
                entityId: e.id,
                userId: i.account.uid,
              });
            },
            togglePin: (0, r.ls)(function* () {
              if (!(0, r.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, r.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleArtistPin({ id: e.id }, e.pinId);
            }),
            getKey: (t) => "".concat(t, "_").concat(e.id),
          })),
        h = r.V5.model("Counts", {
          albums: r.V5.number,
          compilations: r.V5.number,
          tracks: r.V5.number,
        }),
        g = y.props({ separator: r.V5.maybe(r.V5.string) });
      var x = i(85618);
      let E = r.V5.model("ExtraAction", {
          type: r.V5.enumeration(Object.values(x.r)),
          title: r.V5.maybe(r.V5.string),
          color: r.V5.maybe(r.V5.string),
          url: r.V5.maybe(r.V5.string),
        }),
        b = y
          .props({
            coverUri: r.V5.maybe(r.V5.string),
            decomposed: r.V5.maybe(r.V5.array(g)),
            averageColor: r.V5.maybe(r.V5.string),
            counts: r.V5.maybe(h),
            extraActions: r.V5.maybe(r.V5.array(E)),
            composer: r.V5.maybe(r.V5.boolean),
          })
          .views((e) => ({
            get isAvailableForPlaying() {
              if (void 0 === e.counts) return !0;
              return e.counts.tracks > 0;
            },
          }));
      var k = i(13736);
    },
    81100: function (e, t, i) {
      "use strict";
      i.d(t, {
        i: function () {
          return n;
        },
      });
      var r = i(91207);
      let n = (e, t) =>
        (0, r.useCallback)(
          (e) => {
            e.metaKey || e.ctrlKey || e.shiftKey || t(e);
          },
          [e, t],
        );
    },
    42934: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnDislikeClick: function () {
          return h;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(83768),
        s = i(33387),
        u = i(58997),
        d = i(29778),
        c = i(44729),
        f = i(32907),
        m = i(43998),
        v = i(81437),
        p = i(94528),
        _ = i.n(p);
      let y = (e) => {
          let { coverUri: t, title: i, isDisliked: n, closeToast: o } = e,
            a = (0, f.V)(() =>
              n
                ? (0, r.jsx)(c.Z, {
                    id: "notifications-info.artist-unavailable-in-recommendations",
                  })
                : (0, r.jsx)(c.Z, {
                    id: "notifications-info.artist-available-in-recommendations",
                  }),
            );
          return (0, r.jsx)(d.Yj, {
            closeToast: o,
            message: (0, r.jsxs)("div", {
              className: _().message,
              children: [
                (0, r.jsx)(m.Paper, {
                  className: _().cover,
                  radius: "round",
                  children: (0, r.jsx)(d.BE, {
                    className: _().image,
                    src: t,
                    alt: i,
                    size: 100,
                    fit: "cover",
                    withAvatarReplace: !0,
                  }),
                }),
                (0, r.jsx)(v.Caption, {
                  className: _().text,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  children: a,
                }),
              ],
            }),
          });
        },
        h = (e) => {
          let { user: t } = (0, u.oR4)(),
            { notify: i } = (0, u.d$W)(),
            [c, f] = (0, o.useState)(!1),
            { formatMessage: m } = (0, a.Z)();
          return (0, s.W)(async (newE) => {
              e = newE?.toggleDislike ? newE : e;
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(d.Q, {
                  error: m({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: u.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let o = { ...(0, n.ZN)(e), isDisliked: !e.isDisliked };
            f(!0);
            let a = await e.toggleDislike();
            f(!1),
              a === l.B.OK
                ? i(
                    (0, r.jsx)(y, {
                      coverUri: o.coverUri,
                      title: o.name,
                      isDisliked: o.isDisliked,
                    }),
                    { containerId: u.W$x.INFO },
                  )
                : i(
                    (0, r.jsx)(d.Q, {
                      error: m({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: u.W$x.ERROR },
                  );
          });
        };
    },
    86445: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return c;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(83768),
        s = i(58997),
        u = i(29778);
      let d = (e) => {
          let { artist: t, closeToast: i } = e;
          return (0, r.jsx)(u.AP, {
            closeToast: i,
            entityVariant: u.j9.ARTIST,
            entityUrl: "/artist/".concat(t.id),
            collectionUrl: "/collection/artists",
            coverUri: t.coverUri,
            entityTitle: t.name,
            isLiked: t.isLiked,
          });
        },
        c = (e) => {
          let { user: t } = (0, s.oR4)(),
            { notify: i } = (0, s.d$W)(),
            [c, f] = (0, o.useState)(!1),
            { formatMessage: m } = (0, a.Z)();
          return (0, o.useCallback)(async (newE) => {
              e = newE?.toggleLike ? newE : e;
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: m({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let o = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            f(!0);
            let a = await e.toggleLike();
            f(!1),
              a === l.B.OK
                ? i((0, r.jsx)(d, { artist: o }), { containerId: s.W$x.INFO })
                : i(
                    (0, r.jsx)(u.Q, {
                      error: m({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [e, t.isAuthorized, c, m, i]);
        };
    },
    23394: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return d;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(58997),
        s = i(29778);
      let u = (e) => {
          let { artist: t, closeToast: i } = e;
          return (0, r.jsx)(s.K1, {
            closeToast: i,
            entityVariant: s.j9.ARTIST,
            coverUri: t.coverUri,
            entityUrl: "/artist/".concat(t.id),
            entityTitle: t.name,
            isPinned: t.isPinned,
          });
        },
        d = (e) => {
          let { user: t } = (0, l.oR4)(),
            { notify: i } = (0, l.d$W)(),
            { formatMessage: d } = (0, a.Z)(),
            [c, f] = (0, o.useState)(!1);
          return (0, o.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(s.Q, {
                  error: d({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let o = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            f(!0);
            let a = await e.togglePin();
            f(!1),
              a
                ? i((0, r.jsx)(u, { artist: o }), { containerId: l.W$x.INFO })
                : i(
                    (0, r.jsx)(s.Q, {
                      error: d({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$x.ERROR },
                  );
          }, [e, t.isAuthorized, c, d, i]);
        };
    },
    13736: function (e, t, i) {
      "use strict";
      i.d(t, {
        SeparatedArtists: function () {
          return C;
        },
      });
      var r = i(65301),
        n = i(9695),
        o = i(91207),
        a = i(92249),
        l = i(58997);
      let s = (e) => e.reduce((e, t) => e.concat([t.name]), []),
        u = (e, t) =>
          e
            .reduce(function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (t.decomposed) {
                let i = s(t.decomposed);
                return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
              }
              return e.length ? (e.push(t.name), e) : [t.name];
            }, [])
            .join(t);
      var d = i(19232),
        c = i.n(d),
        f = i(96233),
        m = i(37184),
        v = i(3283),
        p = i(55975),
        _ = i(81437),
        y = i(29778),
        h = i(81100),
        g = i(10231),
        x = i(33387);
      let E = (e) => {
          let { artist: t, callback: i } = e,
            {
              disclaimer: r,
              currentTrackInfo: n,
              modals: { disclaimerModal: a },
              fullscreenPlayer: s,
            } = (0, l.oR4)(),
            { modal: u } = n,
            d = (0, o.useRef)(String((0, g.Z)())),
            c = (0, o.useRef)(!1),
            f = (0, l.uK4)().get(l.ceh);
          return (
            (0, o.useEffect)(() => {
              r.isUnsafeDisclaimerConfirmed &&
                r.id === d.current &&
                !c.current &&
                (null == i || i(), (c.current = !0));
            }, [i, r.id, r.isUnsafeDisclaimerConfirmed]),
            (0, x.W)(async (e) => {
              null == e || e.stopPropagation(),
                u.isOpened && (n.reset(), u.close()),
                s.modal.isOpened && s.modal.close();
              let o = f.get(l.BUb.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == o
                  ? void 0
                  : o.includes("".concat(l.coP.ARTIST, "_").concat(t.id)))
              ) {
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
                    newDisclaimerId:
                      null == t ? void 0 : t.newModalDisclaimerId,
                  }),
                  t.isUnsafeLegal && r.setType(l.Gq.UNSAFE),
                  r.setId(d.current),
                  r.setEntityId(t.id),
                  r.setEntityType(l.coP.ARTIST),
                  (c.current = !1),
                  a.open();
                return;
              }
              null == e || e.preventDefault(), null == i || i();
            })
          );
        },
        b = (0, f.Pi)((e) => {
          let {
              artist: t,
              withLink: i = !0,
              linkClassName: n,
              captionClassName: s,
              captionSize: u = "m",
              allArtistsTitle: d,
              withCustomTooltip: c,
              hoverSettings: f,
            } = e,
            { formatMessage: g } = (0, m.Z)(),
            x = (0, l.s0h)(t.url),
            b = (0, l.s0h)(t.url, !0),
            { sendNavigateSearchFeedback: k } = (0, l.sAF)(),
            R = (0, l.zxW)(),
            O = E({ artist: t, callback: x }),
            j = E({ artist: t, callback: b }),
            C = (0, h.i)(j, O),
            P = (0, o.useCallback)(
              (e) => {
                R({ to: v.qU.ArtistScreen }), null == k || k(), C(e);
              },
              [C, R, k],
            );
          return (i = i && !t.various)
            ? (0, r.jsx)(y.rU, {
                "aria-label": g(
                  { id: "entity-names.artist-name" },
                  { artistName: t.name },
                ),
                className: n,
                href: t.url,
                onClick: P,
                title: c ? void 0 : d || t.name,
                ...(0, p.BA)(p.FK.artists.SEPARATED_ARTIST_TITLE),
                children: (0, r.jsx)(a.u, {
                  enabled: !d && c,
                  offsetOptions: 4,
                  placement: "top",
                  text: d || t.name,
                  hoverSettings: f,
                  children: (0, r.jsx)(_.Caption, {
                    variant: "span",
                    type: "entity",
                    size: u,
                    weight: "medium",
                    className: s,
                    children: t.name,
                  }),
                }),
              })
            : (0, r.jsx)(a.u, {
                enabled: !d && c,
                offsetOptions: 4,
                placement: "top",
                text: d || t.name,
                hoverSettings: f,
                children: (0, r.jsx)(_.Caption, {
                  variant: "span",
                  type: "entity",
                  size: u,
                  weight: "medium",
                  className: s,
                  title: c ? void 0 : d || t.name,
                  children: t.name,
                }),
              });
        }),
        k = (e) => {
          let {
              artist: t,
              withLink: i = !0,
              linkClassName: n,
              captionClassName: a,
              captionSize: l,
              allArtistsTitle: s,
              withCustomTooltip: u,
              hoverSettings: d,
            } = e,
            c = (0, o.useMemo)(() => {
              var e;
              return null === (e = t.decomposed) || void 0 === e
                ? void 0
                : e.reduce(
                    (e, t) =>
                      e.concat([
                        t.separator,
                        (0, r.jsx)(
                          b,
                          {
                            artist: t,
                            withLink: i,
                            linkClassName: n,
                            captionClassName: a,
                            captionSize: l,
                            allArtistsTitle: s,
                            withCustomTooltip: u,
                            hoverSettings: d,
                          },
                          t.id,
                        ),
                      ]),
                    [],
                  );
            }, [t.decomposed, a, n, i, l, s, u, d]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(b, {
                artist: t,
                withLink: i,
                linkClassName: n,
                captionClassName: a,
                captionSize: l,
                allArtistsTitle: s,
                withCustomTooltip: u,
                hoverSettings: d,
              }),
              c,
            ],
          });
        };
      var R = i(44729),
        O = i(90927);
      let j = (e) => {
          let {
            spoilerArtistsCount: t,
            spoilerClassName: i,
            handleOnSpoilerClick: o,
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              " ",
              (0, r.jsx)(O.r, {
                role: "button",
                href: "",
                className: (0, n.W)(c().spoiler, i),
                onClick: o,
                rel: "nofollow",
                ...(0, p.BA)(p.FK.artists.SEPARATED_ARTISTS_SPOILER),
                children: (0, r.jsx)(R.Z, {
                  id: "entity-names.number-of-more-artists",
                  values: { counter: t },
                }),
              }),
            ],
          });
        },
        C = (e) => {
          let {
              className: t,
              artists: i = [],
              separator: s = ", ",
              lineClamp: d,
              visibleArtistsCount: f,
              withLink: m = !0,
              spoilerClassName: v,
              linkClassName: p,
              captionClassName: _,
              captionSize: y,
              variant: h = "breakAll",
              withAllArtistsTitle: g = !0,
              withComposer: x = !0,
              spoilerComponent: E,
              withCustomTooltip: b = !0,
              artistIdWithoutLink: R,
            } = e,
            [O, C] = (0, o.useState)(!1),
            P = g ? u(i, s) : "",
            I = (0, o.useCallback)((e) => {
              C(!0), e.preventDefault();
            }, []),
            A = (0, o.useMemo)(() => {
              let e = i;
              return (
                f && !O && (e = i.slice(0, f)),
                e.reduce((e, t) => {
                  if (!x && t.composer) return e.length ? e : [];
                  let i = (0, r.jsx)(
                    k,
                    {
                      artist: t,
                      linkClassName: p,
                      captionClassName: _,
                      withLink: m && t.id !== R,
                      captionSize: y,
                      allArtistsTitle: P,
                      withCustomTooltip: b,
                      hoverSettings: l.cHI,
                    },
                    t.key,
                  );
                  return e.length ? e.concat([s, i]) : [i];
                }, [])
              );
            }, [i, f, O, p, _, m, s, y, P, x, b, R]),
            N = (0, o.useMemo)(() => {
              if (!O && f && f < i.length) {
                let e = i.length - f;
                return (0, o.isValidElement)(E)
                  ? E
                  : (0, r.jsx)(j, {
                      spoilerClassName: v,
                      spoilerArtistsCount: e,
                      handleOnSpoilerClick: I,
                    });
              }
            }, [i.length, I, O, v, E, f]),
            T = (0, o.useMemo)(() => {
              if (d) return { WebkitLineClamp: d };
            }, [d]);
          return (0, r.jsx)(a.u, {
            enabled: !!(g && P) && b,
            offsetOptions: 4,
            placement: "top",
            text: P,
            hoverSettings: l.cHI,
            children: (0, r.jsxs)("div", {
              style: T,
              className: (0, n.W)(
                c().root,
                c()["root_variant_".concat(h)],
                { [c().root_clamp]: d && d > 0 },
                { [c().ellipsis]: !d },
                t,
              ),
              title: g && P && !b ? P : void 0,
              children: [A, N],
            }),
          });
        };
    },
    50684: function (e, t, i) {
      "use strict";
      i.d(t, {
        Cd: function () {
          return O;
        },
        pX: function () {
          return a;
        },
        ZY: function () {
          return P.ContextMenuEditorsFeaturesItem;
        },
        pT: function () {
          return I.ContextMenuPlaylistPrivacyItem;
        },
        lN: function () {
          return A.CreatePlaylistCard;
        },
        b_: function () {
          return j;
        },
        Zn: function () {
          return f;
        },
        cp: function () {
          return m;
        },
        XD: function () {
          return L.NotificationAddToPlaylist;
        },
        wi: function () {
          return N.NotificationFailedAddToPlaylist;
        },
        BQ: function () {
          return T.NotificationFailedRemoveFromPlaylist;
        },
        H2: function () {
          return S.NotificationRemoveFromPlaylist;
        },
        aL: function () {
          return l;
        },
        eX: function () {
          return s;
        },
        $h: function () {
          return C;
        },
        jK: function () {
          return y.TrackPlaylistContext;
        },
        PV: function () {
          return c;
        },
        PG: function () {
          return _;
        },
        SB: function () {
          return h.useOnLikeClick;
        },
        BV: function () {
          return g.useOnPinClick;
        },
      });
      var r,
        n,
        o,
        a,
        l,
        s,
        u = i(2685),
        d = i(58997);
      let c = (e) => {
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
      ((r = a || (a = {})).OK = "ok"),
        (r.ERROR = "error"),
        (r.RELOAD = "reload");
      let f = 1e3,
        m = 100;
      var v = i(4520);
      let p = (e) =>
          Object.keys(e)
            .filter((t) => void 0 !== e[t])
            .reduce((t, i) => ((t[i] = e[i]), t), {}),
        _ = (e) => {
          let {
              operation: t,
              position: i,
              startPosition: r,
              endPosition: n,
              tracks: o,
            } = e,
            a = p({ op: t, at: i, from: r, to: n, tracks: o });
          return (0, v.d8)([a]);
        };
      var y = i(95151);
      ((n = l || (l = {})).INSERT = "insert"),
        (n.DELETE = "delete"),
        (n.MOVE = "move"),
        ((o = s || (s = {}))[(o.LIKE = 3)] = "LIKE"),
        (o[(o.CHART = 1076)] = "CHART");
      var h = i(78603),
        g = i(866),
        x = i(49430),
        E = i(22820),
        b = i(27980),
        k = i(83768),
        R = i(91694);
      let O = u.V5.compose(
          u.V5.model({
            uuid: u.V5.string,
            isAvailable: u.V5.boolean,
            revision: u.V5.maybe(u.V5.number),
            uid: u.V5.number,
            kind: u.V5.number,
            title: u.V5.maybe(u.V5.string),
            coverUri: u.V5.maybe(u.V5.string),
            likesCount: u.V5.maybe(u.V5.number),
            tracksCount: u.V5.maybe(u.V5.number),
            averageColor: u.V5.maybe(u.V5.string),
            generatedPlaylistType: u.V5.maybe(u.V5.string),
            personalColor: u.V5.maybeNull(u.V5.number),
            visibility: u.V5.maybe(u.V5.string),
            trailer: u.V5.maybe(R.K8),
          }),
          R.fE,
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
                e.kind === s.LIKE ||
                e.kind === s.CHART ||
                e.generatedPlaylistType
              );
            },
            get isFavouritePlaylist() {
              return e.kind === s.LIKE;
            },
            get isPublic() {
              return e.visibility === E.w.PUBLIC;
            },
            get isLiked() {
              if (!(0, u.fh)(e)) return !1;
              let { library: t } = (0, u.yj)(e);
              return t.isPlaylistLiked("".concat(e.uid, ":").concat(e.kind));
            },
            get pinId() {
              return ""
                .concat(b.Q.PLAYLIST_ITEM)
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
              var t;
              let { user: i } = (0, u.yj)(e);
              return !!(
                i.isAuthorized &&
                e.uid &&
                (null === (t = i.account) || void 0 === t ? void 0 : t.uid) &&
                e.uid === i.account.uid
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
                  userId: i.account.uid,
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
              if (!(0, u.fh)(e)) return a.ERROR;
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
                  a.OK
                );
              } catch (e) {
                if (
                  (r.error(e),
                  e &&
                    "object" == typeof e &&
                    "statusCode" in e &&
                    e.statusCode === x.CN.PRECONDITION_FAILED)
                )
                  return a.RELOAD;
                return a.ERROR;
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
                o = e.isPublic ? E.w.PRIVATE : E.w.PUBLIC;
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
        j = u.V5.model("CreatePlaylist", { meta: u.V5.maybeNull(O) }).actions(
          (e) => ({
            create: (0, u.ls)(function* (t) {
              if (!(0, u.fh)(e)) return null;
              let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                { user: n } = (0, u.yj)(e);
              if (!n.isAuthorized) return null;
              let o = n.account.uid;
              try {
                let r = yield i.createPlaylist({ userId: String(o), ...t });
                return (e.meta = c(r)), e.meta.uuid;
              } catch (e) {
                return r.error(e), null;
              }
            }),
            reset() {
              e.meta = null;
            },
          }),
        ),
        C = O.props({ tracks: u.V5.maybe(u.V5.array(R.tC)) }).actions((e) => ({
          getKey: (t) => "".concat(t, "_").concat(e.id),
        }));
      var P = i(24678),
        I = i(53922),
        A = i(5342),
        N = i(99985),
        T = i(16457),
        L = i(2870),
        S = i(4898);
    },
    95151: function (e, t, i) {
      "use strict";
      i.d(t, {
        TrackPlaylistContext: function () {
          return r;
        },
      });
      let r = (0, i(91207).createContext)(null);
    },
    78603: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return c;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(83768),
        s = i(58997),
        u = i(29778);
      let d = (e) => {
          let { playlist: t, closeToast: i } = e;
          return (0, r.jsx)(u.AP, {
            entityVariant: u.j9.PLAYLIST,
            entityUrl: "/playlists/".concat(t.uuid),
            collectionUrl: "/collection/playlists?tab=".concat(s.cUw.LIKED),
            entityTitle: t.title,
            isLiked: t.isLiked,
            closeToast: i,
            coverUri: t.coverUri,
          });
        },
        c = (e) => {
          let { user: t } = (0, s.oR4)(),
            { notify: i } = (0, s.d$W)(),
            [c, f] = (0, o.useState)(!1),
            { formatMessage: m } = (0, a.Z)();
          return (0, o.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: m({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let o = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            f(!0);
            let a = await e.toggleLike();
            f(!1),
              a === l.B.OK
                ? i((0, r.jsx)(d, { playlist: o }), { containerId: s.W$x.INFO })
                : i(
                    (0, r.jsx)(u.Q, {
                      error: m({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [t.isAuthorized, c, e, m, i]);
        };
    },
    866: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return d;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(58997),
        s = i(29778);
      let u = (e) => {
          let { playlist: t, closeToast: i } = e;
          return (0, r.jsx)(s.K1, {
            closeToast: i,
            entityVariant: s.j9.PLAYLIST,
            entityUrl: "/playlists/".concat(t.uuid),
            coverUri: t.coverUri,
            entityTitle: t.title,
            isPinned: t.isPinned,
          });
        },
        d = (e) => {
          let { user: t } = (0, l.oR4)(),
            { notify: i } = (0, l.d$W)(),
            { formatMessage: d } = (0, a.Z)(),
            [c, f] = (0, o.useState)(!1);
          return (0, o.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(s.Q, {
                  error: d({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$x.ERROR },
              );
              return;
            }
            if (c) return;
            let o = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            f(!0);
            let a = await e.togglePin();
            f(!1),
              a
                ? i((0, r.jsx)(u, { playlist: o }), { containerId: l.W$x.INFO })
                : i(
                    (0, r.jsx)(s.Q, {
                      error: d({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$x.ERROR },
                  );
          }, [t.isAuthorized, c, e, i, d]);
        };
    },
    24678: function (e, t, i) {
      "use strict";
      i.d(t, {
        ContextMenuEditorsFeaturesItem: function () {
          return O;
        },
      });
      var r = i(65301),
        n = i(96233),
        o = i(37184),
        a = i(55975),
        l = i(92154),
        s = i(58997),
        u = i(91207),
        d = i(44729),
        c = i(81437),
        f = i(29778),
        m = i(40835),
        v = i.n(m);
      let p = (e) => {
          let { closeToast: t } = e;
          return (0, r.jsx)(f.Yj, {
            message: (0, r.jsx)(c.Caption, {
              className: v().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: (0, r.jsx)(d.Z, {
                id: "playlist-errors.failed-part-tracks-download-xlsx",
              }),
            }),
            closeToast: t,
          });
        },
        _ = (e) => {
          let { closeToast: t } = e;
          return (0, r.jsx)(f.Yj, {
            message: (0, r.jsx)(c.Caption, {
              className: v().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: (0, r.jsx)(d.Z, {
                id: "playlist-errors.failed-download-xlsx",
              }),
            }),
            closeToast: t,
          });
        };
      var y = i(60309),
        h = i.n(y);
      let g = (e) => {
          let { closeToast: t } = e;
          return (0, r.jsx)(f.Yj, {
            message: (0, r.jsx)(c.Caption, {
              variant: "div",
              size: "m",
              className: h().text,
              children: (0, r.jsx)(d.Z, {
                id: "notifications-info.xlsx-success",
              }),
            }),
            closeToast: t,
            coverRadius: "s",
          });
        },
        x = () =>
          (0, r.jsx)(f.Yj, {
            message: (0, r.jsx)(c.Caption, {
              variant: "div",
              size: "m",
              className: h().text,
              children: (0, r.jsx)(d.Z, {
                id: "notifications-info.xlsx-loading",
              }),
            }),
            coverRadius: "s",
          }),
        E = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 40,
            { fullscreenPlayer: t, playlist: i } = (0, s.oR4)(),
            { notify: n, dismiss: o } = (0, s.d$W)(),
            a = (0, u.useRef)(),
            l = t.modal.isOpened ? s.W$x.FULLSCREEN_INFO : s.W$x.INFO;
          return (0, u.useCallback)(async () => {
            (a.current = n((0, r.jsx)(x, {}), {
              containerId: l,
              autoClose: !1,
            })),
              await i.editorFeature.getAllPlaylistItems({ batchSize: e }),
              (await i.editorFeature.exportToExcel()) === s.SLo.OK
                ? i.areAllTracksUploaded
                  ? n((0, r.jsx)(g, {}), { containerId: l })
                  : n((0, r.jsx)(p, {}), {
                      containerId: t.modal.isOpened
                        ? s.W$x.FULLSCREEN_ERROR
                        : s.W$x.ERROR,
                      autoClose: !1,
                    })
                : n((0, r.jsx)(_, {}), {
                    containerId: t.modal.isOpened
                      ? s.W$x.FULLSCREEN_ERROR
                      : s.W$x.ERROR,
                    autoClose: !1,
                  }),
              o({ notificationId: a.current, forceClose: !0 });
          }, [
            e,
            o,
            t.modal.isOpened,
            l,
            n,
            i.areAllTracksUploaded,
            i.editorFeature,
          ]);
        },
        b = (0, n.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, s.oR4)(),
            { toggleShouldShowDuplicate: t, shouldShowDuplicate: i } = e,
            { formatMessage: n } = (0, o.Z)();
          return (0, r.jsx)(f.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-duplicates" }),
            onClick: t,
            isActive: i,
          });
        }),
        k = (0, n.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, s.oR4)(),
            { toggleShouldShowGenre: t, shouldShowGenre: i } = e,
            { formatMessage: n } = (0, o.Z)();
          return (0, r.jsx)(f.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-genres" }),
            onClick: t,
            isActive: i,
          });
        }),
        R = (0, n.Pi)(() => {
          let {
              playlist: { editorFeature: e },
            } = (0, s.oR4)(),
            { toggleShouldShowMajor: t, shouldShowMajor: i } = e,
            { formatMessage: n } = (0, o.Z)();
          return (0, r.jsx)(f.l6, {
            "aria-label": n({ id: "entity-names.editor-feature-is-show" }),
            text: n({ id: "interface-actions.show-majors" }),
            onClick: t,
            isActive: i,
          });
        }),
        O = (0, n.Pi)((e) => {
          let { className: t, isDisabled: i } = e,
            {
              settings: { isMobile: n },
            } = (0, s.oR4)(),
            { formatMessage: u } = (0, o.Z)();
          return (
            E(),
            (0, r.jsxs)(l.v2, {
              label: u({ id: "interface-actions.editorial-tools" }),
              menuClassName: t,
              offsetOptions: 3,
              isMobile: n,
              disabled: i,
              ...(0, a.BA)(a.FK.playlist.CONTEXT_MENU_EDITOR_FEATURES_BUTTON),
              children: [
                (0, r.jsx)(R, {}),
                (0, r.jsx)(k, {}),
                (0, r.jsx)(b, {}),
                !1,
              ],
            })
          );
        });
    },
    53922: function (e, t, i) {
      "use strict";
      i.d(t, {
        ContextMenuPlaylistPrivacyItem: function () {
          return y;
        },
      });
      var r = i(65301),
        n = i(9695),
        o = i(96233),
        a = i(91207),
        l = i(37184),
        s = i(44729),
        u = i(55975),
        d = i(82036),
        c = i(92154),
        f = i(32427),
        m = i(58997),
        v = i(29778),
        p = i(9924),
        _ = i.n(p);
      let y = (0, o.Pi)((e) => {
        let { className: t, playlist: i } = e,
          { notify: o } = (0, m.d$W)(),
          { formatMessage: p } = (0, l.Z)(),
          y = (0, a.useCallback)(async () => {
            (await i.toggleVisibility()) === m.SLo.ERROR &&
              o(
                (0, r.jsx)(v.Q, {
                  error: p({
                    id: "playlist-errors.failed-to-change-privacy-settings",
                  }),
                }),
                { containerId: m.W$x.ERROR },
              );
          }, [p, o, i]);
        return (0, r.jsxs)(c.sN, {
          className: (0, n.W)(_().root, t),
          onClick: y,
          icon: (0, r.jsx)(d.Icon, { variant: "eye_crossed", size: "xxs" }),
          ...(0, u.BA)(u.r9.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON),
          role: "switch",
          "aria-checked": !i.isPublic,
          isSubMenu: !0,
          isBlock: !0,
          children: [
            (0, r.jsx)("span", {
              className: _().caption,
              children: (0, r.jsx)(s.Z, { id: "playlist-actions.privacy" }),
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
    5342: function (e, t, i) {
      "use strict";
      i.d(t, {
        CreatePlaylistCard: function () {
          return h;
        },
      });
      var r = i(65301),
        n = i(96233),
        o = i(99678),
        a = i(91207),
        l = i(37184),
        s = i(44729),
        u = i(55975),
        d = i(22820),
        c = i(78372),
        f = i(82036),
        m = i(81437),
        v = i(58997),
        p = i(29778),
        _ = i(90828),
        y = i.n(_);
      let h = (0, n.Pi)((e) => {
        let { className: t } = e,
          { formatMessage: i } = (0, l.Z)(),
          { createPlaylist: n } = (0, v.oR4)(),
          { notify: _ } = (0, v.d$W)(),
          h = (0, o.useRouter)(),
          g = (0, a.useRef)(!1),
          x = (0, a.useCallback)(async () => {
            if (g.current) return;
            g.current = !0;
            let e = await n.create({
              title: i({ id: "entity-names.new-playlist" }),
              visibility: d.w.PUBLIC,
            });
            if (e) {
              let t = (0, v.SZ_)("/playlists/".concat(e));
              t && h.push(t);
            } else
              _(
                (0, r.jsx)(p.Q, {
                  error: i({ id: "playlist-errors.failed-to-create-playlist" }),
                }),
                { containerId: v.W$x.ERROR },
              ),
                (g.current = !1);
          }, [n, i, h, _]);
        return (
          (0, a.useEffect)(
            () => () => {
              n.reset();
            },
            [n],
          ),
          (0, r.jsxs)("div", {
            className: t,
            ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_CARD),
            children: [
              (0, r.jsx)(c.z, {
                className: y().button,
                icon: (0, r.jsx)(f.Icon, {
                  className: y().icon,
                  variant: "add",
                  size: "l",
                }),
                radius: "s",
                "aria-label": i({ id: "playlist-actions.create-playlist" }),
                onClick: x,
                flexIcon: !0,
                isBlock: !0,
                ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_BUTTON),
              }),
              (0, r.jsx)(m.Caption, {
                weight: "medium",
                size: "s",
                variant: "div",
                className: y().text,
                ...(0, u.BA)(u.FK.playlist.CREATE_PLAYLIST_TITLE),
                children: (0, r.jsx)(s.Z, { id: "collection.new-playlist" }),
              }),
            ],
          })
        );
      });
    },
    99985: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationFailedAddToPlaylist: function () {
          return u;
        },
      });
      var r = i(65301),
        n = i(44729),
        o = i(81437),
        a = i(29778),
        l = i(40835),
        s = i.n(l);
      let u = () =>
        (0, r.jsx)(a.Yj, {
          message: (0, r.jsx)(o.Caption, {
            className: s().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, r.jsx)(n.Z, {
              id: "playlist-errors.failed-add-track-to-playlist",
            }),
          }),
        });
    },
    16457: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationFailedRemoveFromPlaylist: function () {
          return u;
        },
      });
      var r = i(65301),
        n = i(44729),
        o = i(81437),
        a = i(29778),
        l = i(40835),
        s = i.n(l);
      let u = () =>
        (0, r.jsx)(a.Yj, {
          message: (0, r.jsx)(o.Caption, {
            className: s().message,
            variant: "div",
            type: "controls",
            size: "m",
            children: (0, r.jsx)(n.Z, {
              id: "playlist-errors.failed-to-remove-track",
            }),
          }),
        });
    },
    2870: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationAddToPlaylist: function () {
          return m;
        },
      });
      var r = i(65301),
        n = i(96233),
        o = i(91207),
        a = i(44729),
        l = i(33387),
        s = i(81437),
        u = i(58997),
        d = i(29778),
        c = i(60309),
        f = i.n(c);
      let m = (0, n.Pi)((e) => {
        let {
            entityTitle: t,
            entityVariant: i,
            entityCoverUri: n,
            playlist: c,
            closeToast: m,
          } = e,
          { fullscreenPlayer: v } = (0, u.oR4)(),
          p = (0, l.W)(() => {
            v.modal.isOpened && v.modal.close();
          }),
          _ = (0, o.useMemo)(() => {
            let e;
            let n = {
              trackName: (0, r.jsxs)(s.Caption, {
                className: f().title,
                variant: "div",
                type: "controls",
                size: "m",
                lineClamp: 1,
                children: ["\xa0", t, "\xa0"],
              }),
              playlistName: (0, r.jsx)(d.rU, {
                className: f().link,
                href: c.url,
                onClick: p,
                children: (0, r.jsxs)(s.Caption, {
                  className: f().playlistTitle,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", c.title, "\xa0"],
                }),
              }),
            };
            switch (i) {
              case d.j9.PODCAST_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.added-podcast-episode-to-playlist",
                  values: n,
                });
                break;
              case d.j9.AUDIOBOOK_EPISODE:
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
            return (0, r.jsx)(s.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              lineClamp: 1,
              children: e,
            });
          }, [t, i, p, c.title, c.url]);
        return (0, r.jsx)(d.Yj, {
          closeToast: m,
          message: _,
          cover: (0, r.jsx)(d.BE, {
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
    4898: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationRemoveFromPlaylist: function () {
          return m;
        },
      });
      var r = i(65301),
        n = i(96233),
        o = i(91207),
        a = i(44729),
        l = i(33387),
        s = i(81437),
        u = i(58997),
        d = i(29778),
        c = i(60309),
        f = i.n(c);
      let m = (0, n.Pi)((e) => {
        let {
            entityTitle: t,
            entityVariant: i,
            entityCoverUri: n,
            playlist: c,
            closeToast: m,
          } = e,
          { fullscreenPlayer: v } = (0, u.oR4)(),
          p = (0, l.W)(() => {
            v.modal.isOpened && v.modal.close();
          }),
          _ = (0, o.useMemo)(() => {
            let e;
            let n = {
              trackName: (0, r.jsxs)(s.Caption, {
                className: f().title,
                variant: "div",
                type: "controls",
                size: "m",
                lineClamp: 1,
                children: ["\xa0", t, "\xa0"],
              }),
              playlistName: (0, r.jsx)(d.rU, {
                className: f().link,
                href: c.url,
                onClick: p,
                children: (0, r.jsxs)(s.Caption, {
                  className: f().playlistTitle,
                  variant: "div",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", c.title, "\xa0"],
                }),
              }),
            };
            switch (i) {
              case d.j9.PODCAST_EPISODE:
                e = (0, r.jsx)(a.Z, {
                  id: "notifications-info.removed-podcast-episode-from-playlist",
                  values: n,
                });
                break;
              case d.j9.AUDIOBOOK_EPISODE:
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
            return (0, r.jsx)(s.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              lineClamp: 1,
              children: e,
            });
          }, [t, i, p, c.title, c.url]);
        return (0, r.jsx)(d.Yj, {
          closeToast: m,
          message: _,
          cover: (0, r.jsx)(d.BE, {
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
    26382: function (e, t, i) {
      "use strict";
      i.d(t, {
        yp: function () {
          return T;
        },
        DR: function () {
          return D.ListeningProgress;
        },
        bP: function () {
          return L;
        },
        Yc: function () {
          return U.NotificationLike;
        },
        h0: function () {
          return _.h;
        },
        xZ: function () {
          return M.RemoveButton;
        },
        XK: function () {
          return P;
        },
        v_: function () {
          return a;
        },
        cU: function () {
          return l;
        },
        jT: function () {
          return S;
        },
        v$: function () {
          return V;
        },
        Ni: function () {
          return m;
        },
        tx: function () {
          return h.t;
        },
        jp: function () {
          return v;
        },
        wM: function () {
          return p;
        },
        Ey: function () {
          return y.useMarkListenedClick;
        },
        KX: function () {
          return g.useOnDislikeClick;
        },
        SB: function () {
          return x.useOnLikeClick;
        },
        OC: function () {
          return E.useOnModifyPlayQueue;
        },
        tl: function () {
          return b.useTimeLeftText;
        },
      });
      var r,
        n,
        o,
        a,
        l,
        s,
        u = i(2685);
      (o || (o = {})).SMART_PREVIEW = "smart_preview";
      var d = i(58997);
      let c = (e, t) =>
          (0, u.pj)({
            endPositionSec: null == e ? void 0 : e.endPositionSec,
            hasEverFinished:
              (null == t ? void 0 : t.hasEverFinished) ||
              (null == e ? void 0 : e.everFinished),
          }),
        f = (e) =>
          (0, u.pj)({
            bpm: null == e ? void 0 : e.bpm,
            energy: null == e ? void 0 : e.energy,
            hue: null == e ? void 0 : e.hue,
            userCollectionHue: null == e ? void 0 : e.userCollectionHue,
          }),
        m = (e, t) => {
          var i, r, n, a, l, s, m, v, p, _;
          e = e || {};
          let { isSmartPreview: y, hasEverFinished: h } = t || {},
            g = (0, d.Usz)(null == e ? void 0 : e.derivedColors),
            x = y
              ? null === (i = e.smartPreviewParams) || void 0 === i
                ? void 0
                : i.durationMs
              : null == e
                ? void 0
                : e.durationMs,
            E = (0, u.pj)({
              isAvailable: !!(null === (r = e.specialAudioResources) ||
              void 0 === r
                ? void 0
                : r.includes(o.SMART_PREVIEW)),
            });
          return (0, u.pj)({
            id: (e.id || 0).toString(),
            isAvailable: !!(null == e ? void 0 : e.available),
            isRemoved: (null == e ? void 0 : e.error) === "not-found",
            title:
              null !== (p = null == e ? void 0 : e.title) && void 0 !== p
                ? p
                : "",
            contentWarning: null == e ? void 0 : e.contentWarning,
            version: null == e ? void 0 : e.version,
            durationMs: x,
            coverUri: null == e ? void 0 : e.coverUri,
            averageColor: g,
            trackParameters: f(null == e ? void 0 : e.trackParameters),
            trackSource: null == e ? void 0 : e.trackSource,
            albumId:
              null === (a = e.albums) || void 0 === a
                ? void 0
                : null === (n = a[0]) || void 0 === n
                  ? void 0
                  : n.id,
            disclaimers: e.disclaimers,
            type: e.type,
            pubDate: e.pubDate,
            hasLyrics:
              null === (l = e.lyricsInfo) || void 0 === l
                ? void 0
                : l.hasAvailableTextLyrics,
            hasSyncLyrics:
              null === (s = e.lyricsInfo) || void 0 === s
                ? void 0
                : s.hasAvailableSyncLyrics,
            shouldRememberPosition: e.rememberPosition,
            streamProgress: c(null == e ? void 0 : e.streamProgress, {
              hasEverFinished: h,
            }),
            shortDescription:
              null !== (_ = e.shortDescription) && void 0 !== _ ? _ : "",
            trailer: E,
            clipIds: e.clipIds,
            major: e.major,
            genre:
              null === (v = e.albums) || void 0 === v
                ? void 0
                : null === (m = v[0]) || void 0 === m
                  ? void 0
                  : m.genre,
          });
        },
        v = (e) =>
          (0, u.pj)({ id: e.id, name: e.name, prettyName: e.prettyName }),
        p = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp });
      ((r = a || (a = {})).TOO_MANY_FILES = "TOO_MANY_FILES"),
        (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        ((n = l || (l = {})).IDLE = "IDLE"),
        (n.PREPARE = "PREPARE"),
        (n.UPLOADING = "UPLOADING"),
        (n.PROCESSING = "PROCESSING"),
        (n.RESOLVE = "RESOLVE"),
        (n.REJECT = "REJECT"),
        (n.CANCELLED = "CANCELLED");
      var _ = i(78806),
        y = i(26390),
        h = i(47801),
        g = i(76961),
        x = i(93139),
        E = i(90283),
        b = i(30787),
        k = i(35068),
        R = i(81404),
        O = i(19522),
        j = i(91694),
        C = i(26157);
      let P = u.V5.model("StreamProgress", {
          endPositionSec: u.V5.maybe(u.V5.number),
          hasEverFinished: u.V5.maybe(u.V5.boolean),
        }).actions((e) => ({
          updateEndPositionSec: (t) => {
            e.endPositionSec = t;
          },
          updateEverFinished: (t) => {
            e.hasEverFinished = t;
          },
          markListened: (0, u.ls)(function* (t) {
            let { streamsResource: i, modelActionsLogger: r } = (0, u.dU)(e);
            try {
              return yield i.markFinished(t);
            } catch (e) {
              return r.error(e), C.P.ERROR;
            }
          }),
          markUnlistened: (0, u.ls)(function* (t) {
            let { streamsResource: i, modelActionsLogger: r } = (0, u.dU)(e);
            try {
              return yield i.markUnfinished(t);
            } catch (e) {
              return r.error(e), C.P.ERROR;
            }
          }),
        })),
        I = u.V5.model("TrackMajor", {
          id: u.V5.maybeNull(u.V5.number),
          name: u.V5.maybeNull(u.V5.string),
        }),
        A = u.V5.model("TrackParameters", {
          bpm: u.V5.maybe(u.V5.number),
          energy: u.V5.maybe(u.V5.number),
          hue: u.V5.maybe(u.V5.number),
          userCollectionHue: u.V5.maybe(u.V5.number),
        }),
        N = [k.V.MUSIC, k.V.TRACK, k.V.NOISE, k.V.ASMR],
        T = u.V5.compose(
          u.V5.model("BaseTrack", {
            id: u.V5.string,
            isAvailable: u.V5.boolean,
            isRemoved: u.V5.boolean,
            title: u.V5.string,
            trackSource: u.V5.maybe(u.V5.enumeration(Object.values(R.z))),
            version: u.V5.maybe(u.V5.string),
            durationMs: u.V5.maybe(u.V5.number),
            coverUri: u.V5.maybe(u.V5.string),
            averageColor: u.V5.maybe(u.V5.string),
            trackParameters: u.V5.maybe(A),
            albumId: u.V5.maybe(u.V5.number),
            disclaimers: u.V5.maybe(u.V5.array(u.V5.string)),
            type: u.V5.maybe(u.V5.enumeration(Object.values(k.V))),
            pubDate: u.V5.maybe(u.V5.string),
            hasLyrics: u.V5.maybe(u.V5.boolean),
            hasSyncLyrics: u.V5.maybe(u.V5.boolean),
            trailer: u.V5.maybe(j.K8),
            shouldRememberPosition: u.V5.maybe(u.V5.boolean),
            streamProgress: u.V5.maybe(P),
            shortDescription: u.V5.maybe(u.V5.string),
            major: u.V5.maybeNull(I),
            clipIds: u.V5.maybeNull(u.V5.array(u.V5.number)),
            genre: u.V5.maybeNull(u.V5.string),
          }),
          j.ie,
        )
          .views((e) => {
            let t = {
              get isLiked() {
                if ((0, u.fh)(e)) {
                  let { library: t } = (0, u.yj)(e);
                  return t.isTrackLiked(e.id);
                }
                return !1;
              },
              get isDownloaded() {
                if (!(0, u.fh)(e)) return !1;
                let { slam: t } = (0, u.yj)(e);
                return t.isTrackDownloaded(e.id);
              },
              get isDownloading() {
                if (!(0, u.fh)(e)) return !1;
                let { slam: t } = (0, u.yj)(e);
                return t.isTrackDownloading(e.id);
              },
              get downloadingProgress() {
                if (!(0, u.fh)(e)) return 0;
                let { slam: t } = (0, u.yj)(e);
                return t.getTrackDownloadingProgress(e.id);
              },
              get isAvailableForDownload() {
                if (!(0, u.fh)(e)) return !1;
                return (e.type && N.includes(e.type)) || !!t.isUGC;
              },
              get url() {
                if (e.albumId)
                  return "/album/".concat(e.albumId, "/track/").concat(e.id);
                return "/track/".concat(e.id);
              },
              get albumUrl() {
                return "/album/".concat(e.albumId);
              },
              get isDisliked() {
                if ((0, u.fh)(e)) {
                  let { library: t } = (0, u.yj)(e);
                  return t.isTrackDisliked(e.id);
                }
                return !1;
              },
              get isTrackPodcast() {
                if ((0, u.fh)(e)) return e.type === k.V.PODCAST;
                return !1;
              },
              get isSyncLyricsAvailable() {
                if (!(0, u.fh)(e)) return !1;
                let { slam: t } = (0, u.yj)(e);
                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
              },
              get isTrackAudiobook() {
                if ((0, u.fh)(e)) return e.type === k.V.AUDIOBOOK;
                return !1;
              },
              get isTrackNonMusic() {
                return this.isTrackPodcast || this.isTrackAudiobook;
              },
              get isTrackMusic() {
                if ((0, u.fh)(e))
                  return e.type === k.V.TRACK || e.type === k.V.MUSIC;
                return !1;
              },
              get isUGC() {
                if ((0, u.fh)(e)) return e.trackSource === R.z.UGC;
                return;
              },
              get isOwn() {
                if ((0, u.fh)(e)) return e.trackSource === R.z.OWN;
                return;
              },
              get isOwnReplacedToUGC() {
                if ((0, u.fh)(e))
                  return e.trackSource === R.z.OWN_REPLACED_TO_UGC;
                return;
              },
              get seeds() {
                return ["track:".concat(e.id)];
              },
              get newModalDisclaimerId() {
                if (e.disclaimers) {
                  var i;
                  let t =
                    null === (i = (0, d.V4d)(e.disclaimers, O.e.MODAL)) ||
                    void 0 === i
                      ? void 0
                      : i[0];
                  if (t) {
                    let { id: e } = t;
                    return e;
                  }
                }
                return null;
              },
              get isLegalRejected() {
                if (!(0, u.fh)(e)) return !1;
                let { experiments: t } = (0, u.yj)(e),
                  i = t.checkExperiment(d.peG.WebNextLegalRejectTrack, "on"),
                  n = t.checkExperiment(
                    d.peG.WebNextNewExplicitApiModalFA,
                    "on",
                  );
                if (e.disclaimers && n) {
                  var r;
                  let t =
                    null === (r = (0, d.V4d)(e.disclaimers, O.e.MODAL)) ||
                    void 0 === r
                      ? void 0
                      : r[0];
                  return (
                    !e.isAvailable &&
                    (null == t ? void 0 : t.type) === O.e.MODAL
                  );
                }
                if (e.disclaimers && i)
                  return !e.isAvailable && e.disclaimers.includes(O.e.MODAL);
                return !1;
              },
              get isUnsafeLegal() {
                if (!(0, u.fh)(e)) return !1;
                let { experiments: t } = (0, u.yj)(e),
                  i = t.checkExperiment(d.peG.WebNextLegalUnsafeTrack, "on"),
                  r = t.checkExperiment(
                    d.peG.WebNextNewExplicitApiModalFA,
                    "on",
                  );
                if (e.disclaimers && r) {
                  var n;
                  let t =
                    null === (n = (0, d.V4d)(e.disclaimers, O.e.MODAL)) ||
                    void 0 === n
                      ? void 0
                      : n[0];
                  return (
                    e.isAvailable && (null == t ? void 0 : t.type) === O.e.MODAL
                  );
                }
                if (e.disclaimers && i)
                  return e.isAvailable && e.disclaimers.includes(O.e.MODAL);
                return !1;
              },
              get entityId() {
                if (e.albumId) return "".concat(e.id, ":").concat(e.albumId);
                return e.id;
              },
              get hasAlbumLink() {
                if (!(0, u.fh)(e)) return !1;
                return !!(e.albumId && this.isOwn && e.isAvailable);
              },
              get hasTrackLink() {
                if (!(0, u.fh)(e)) return !1;
                let {
                  experiments: t,
                  settings: { isMobile: i },
                  sonataState: { isGenerativeContext: r },
                } = (0, u.yj)(e);
                return (
                  t.checkExperiment(d.peG.WebNextTrackModal, "on") &&
                  e.isAvailable &&
                  !this.isUGC &&
                  !this.isOwnReplacedToUGC &&
                  !i &&
                  !r
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            afterCreate() {
              e.trackType = e.type;
            },
            toggleLike: (0, u.ls)(function* () {
              if (!(0, u.fh)(e)) return;
              let { library: t, user: i } = (0, u.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleTrackLike({
                  entityId: e.id,
                  albumId: e.albumId,
                  userId: i.account.uid,
                });
            }),
            toggleDislike: (0, u.ls)(function* () {
              if (!(0, u.fh)(e)) return;
              let { library: t, user: i } = (0, u.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleTrackDislike({
                  entityId: e.id,
                  albumId: e.albumId,
                  userId: i.account.uid,
                });
            }),
            setListeningFinishedStatus: (0, u.ls)(function* () {
              let t = e.streamProgress;
              if (t)
                return (null == t ? void 0 : t.hasEverFinished)
                  ? yield null == t
                      ? void 0
                      : t.markUnlistened({ trackId: Number(e.id) })
                  : yield null == t
                      ? void 0
                      : t.markListened({ trackId: Number(e.id) });
            }),
            getKey: (t) => "".concat(t, "_").concat(e.id),
          })),
        L = u.V5.model("MajorModel", {
          id: u.V5.number,
          name: u.V5.string,
          prettyName: u.V5.maybeNull(u.V5.string),
        });
      (s || (s = {})).TOO_MANY_FILES = "TOO_MANY_FILES";
      let S = u.V5.model("TrackUgcUploadModel", {
          loadingState: u.V5.enumeration(Object.values(l)),
          errorReason: u.V5.maybeNull(u.V5.enumeration(Object.values(a))),
          playlistKind: u.V5.number,
          trackId: u.V5.maybeNull(u.V5.string),
          uploadUrl: u.V5.maybeNull(u.V5.string),
        })
          .volatile(() => ({ file: null, abortController: null }))
          .actions((e) => {
            let t = {
              setFile(t) {
                e.file = t;
              },
              getUploadUrl: (0, u.ls)(function* () {
                if (!(0, u.fh)(e)) return;
                let { loaderResource: t, modelActionsLogger: i } = (0, u.dU)(e),
                  { user: r } = (0, u.yj)(e);
                if (![l.IDLE, l.REJECT].includes(e.loadingState)) return;
                e.loadingState = l.PREPARE;
                let n = r.account.uid;
                if (n)
                  try {
                    var o;
                    let i =
                        null === (o = e.file) || void 0 === o ? void 0 : o.name,
                      r = yield t.getUploadUrl({
                        playlistId: "".concat(n, ":").concat(e.playlistKind),
                        uid: n,
                        path: i,
                      });
                    if (r && "result" in r && r.result === s.TOO_MANY_FILES) {
                      (e.loadingState = l.REJECT),
                        (e.errorReason = a.TOO_MANY_FILES);
                      return;
                    }
                    if (r && "post-target" in r && "ugc-track-id" in r) {
                      (e.uploadUrl = r["post-target"]),
                        (e.trackId = r["ugc-track-id"]);
                      return;
                    }
                    (e.errorReason = a.UNKNOWN_ERROR),
                      (e.loadingState = l.REJECT);
                    return;
                  } catch (t) {
                    (e.loadingState = l.REJECT), i.error(t);
                    return;
                  }
              }),
              uploadFile: (0, u.ls)(function* () {
                if (!(0, u.fh)(e)) return;
                let { prefixlessResource: t, modelActionsLogger: i } = (0,
                u.dU)(e);
                if (e.loadingState === l.PREPARE && e.uploadUrl && e.file) {
                  e.loadingState = l.UPLOADING;
                  try {
                    let i = new FormData();
                    i.append("file", e.file);
                    let r = new AbortController(),
                      n = r.signal;
                    (e.abortController = r),
                      yield t.uploadFile(
                        { url: e.uploadUrl, formData: i },
                        { signal: n },
                      ),
                      (e.loadingState = l.PROCESSING);
                    return;
                  } catch (t) {
                    (e.loadingState = l.REJECT), i.error(t);
                    return;
                  }
                }
              }),
              runUpload: (0, u.ls)(function* () {
                (0, u.fh)(e) &&
                  (yield t.getUploadUrl(),
                  e.loadingState !== l.REJECT && (yield t.uploadFile()));
              }),
              retryUpload() {
                if ((this.reset(), !(0, u.fh)(e))) return;
                let { ugcUploadCenter: t } = (0, u.yj)(e);
                t.runUploadTracksQueue();
              },
              abortUpload() {
                var t;
                if (
                  ((e.loadingState = l.CANCELLED),
                  null === (t = e.abortController) || void 0 === t || t.abort(),
                  !(0, u.fh)(e))
                )
                  return;
                let { ugcUploadCenter: i } = (0, u.yj)(e);
                i.clearCancelledUploads();
              },
              reset() {
                (e.loadingState = l.IDLE),
                  (e.trackId = null),
                  (e.uploadUrl = null),
                  (e.abortController = null);
              },
            };
            return t;
          }),
        V = u.V5.model("Ugc");
      var D = i(83811);
      i(87712);
      var U = i(15400),
        M = i(24890);
    },
    78806: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        h: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).NEXT = "NEXT"),
        (n.LAST = "LAST"),
        (n.REMOVE = "REMOVE");
    },
    26390: function (e, t, i) {
      "use strict";
      i.d(t, {
        useMarkListenedClick: function () {
          return u;
        },
      });
      var r = i(65301),
        n = i(37184),
        o = i(26157),
        a = i(33387),
        l = i(58997),
        s = i(29778);
      let u = (e) => {
        let {
            user: t,
            fullscreenPlayer: i,
            sonataState: { entityMeta: u },
            album: d,
          } = (0, l.oR4)(),
          { notify: c } = (0, l.d$W)(),
          { formatMessage: f } = (0, n.Z)(),
          m = (0, l.R$C)();
        return (0, a.W)(async () => {
          if (!e) return;
          let n = i.modal.isOpened ? l.W$x.FULLSCREEN_ERROR : l.W$x.ERROR;
          if (!t.isAuthorized) {
            c(
              (0, r.jsx)(s.Q, {
                error: f({ id: "authorization-messages.need-to-authorizate" }),
              }),
              { containerId: n },
            );
            return;
          }
          let a = e.streamProgress,
            v =
              (null == u ? void 0 : u.id) === e.id &&
              (null == u ? void 0 : u.albumId) === e.albumId;
          if ((await e.setListeningFinishedStatus()) !== o.P.OK)
            c(
              (0, r.jsx)(s.Q, {
                error: f({ id: "error-messages.error-during-action" }),
              }),
              { containerId: n },
            );
          else {
            var p, _;
            let t = !(null == a ? void 0 : a.hasEverFinished),
              i = null == m ? void 0 : m.state.queueState.entityList.value,
              r =
                null == i
                  ? void 0
                  : i.find((t) => {
                      var i, r;
                      let n = t.entity.data.meta;
                      return (
                        n.realId === e.id &&
                        (null === (r = n.albums) || void 0 === r
                          ? void 0
                          : null === (i = r[0]) || void 0 === i
                            ? void 0
                            : i.id) === e.albumId
                      );
                    });
            r && (r.entity.everFinished = !!t),
              v &&
                (null == u ? void 0 : u.streamProgress) &&
                (null === (p = u.streamProgress) || void 0 === p
                  ? void 0
                  : p.hasEverFinished) !== t &&
                (u.streamProgress.updateEverFinished(t),
                t && u.streamProgress.updateEndPositionSec(0)),
              (null === (_ = d.meta) || void 0 === _
                ? void 0
                : _.listeningFinished) &&
                !t &&
                (d.markTracksFinished({ withoutTracks: [e.id] }),
                d.setAlbumUnfinished(),
                d.setAllTracksUnfinished(!1)),
              null == a || a.updateEverFinished(t),
              d.meta && t && d.checkAllAlbumTrackFinished();
          }
        });
      };
    },
    47801: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return l;
        },
        t: function () {
          return a;
        },
      });
      var r = i(35068),
        n = i(58997),
        o = i(29778);
      let a = (e, t) => {
          if (!t || !e) return o.j9.TRACK;
          switch (e.type) {
            case r.V.PODCAST:
              return o.j9.PODCAST_EPISODE;
            case r.V.AUDIOBOOK:
              return o.j9.AUDIOBOOK_EPISODE;
            default:
              return o.j9.TRACK;
          }
        },
        l = (e) => a(e, (0, n.RVp)());
    },
    76961: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnDislikeClick: function () {
          return p;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(98),
        s = i(83768),
        u = i(90377),
        d = i(33387),
        c = i(58997),
        f = i(29778),
        m = i(87712),
        v = i(47801);
      let p = (e) => {
        let { user: t, fullscreenPlayer: i } = (0, c.oR4)(),
          p = (0, c.R$C)(),
          { notify: _ } = (0, c.d$W)(),
          [y, h] = (0, o.useState)(!1),
          { formatMessage: g } = (0, a.Z)(),
          x = (0, v.C)(e);
        return (0, d.W)(async (newE) => {
            e = newE?.toggleDislike ? newE : e;
          if (e) {
            let a = i.modal.isOpened ? c.W$x.FULLSCREEN_INFO : c.W$x.INFO,
              d = i.modal.isOpened ? c.W$x.FULLSCREEN_ERROR : c.W$x.ERROR;
            if (!t.isAuthorized) {
              _(
                (0, r.jsx)(f.Q, {
                  error: g({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: d },
              );
              return;
            }
            if (y) return;
            let v = { ...(0, n.ZN)(e), isDisliked: !e.isDisliked };
            h(!0);
            let E = await e.toggleDislike();
            if ((h(!1), E === s.B.OK)) {
              var o;
              _(
                (0, r.jsx)(m.NotificationDislike, {
                  coverUri: v.coverUri,
                  isDisliked: v.isDisliked,
                  title: v.title,
                  entityVariant: x,
                }),
                { containerId: a },
              );
              let e = v.isDisliked ? u.C.DISLIKE : u.C.UNDISLIKE;
              p &&
                (0, l.x)(p.state.currentContext.value) &&
                (await p.state.currentContext.value.sendFeedback(
                  p.state.playerState,
                  p.state.queueState,
                  e,
                )),
                v.isDisliked &&
                  v.id ===
                    (null == p
                      ? void 0
                      : null === (o = p.state.queueState.currentEntity.value) ||
                          void 0 === o
                        ? void 0
                        : o.entity.data.meta.id) &&
                  (null == p || p.moveForward());
            } else
              _(
                (0, r.jsx)(f.Q, {
                  error: g({ id: "error-messages.error-during-action" }),
                }),
                { containerId: d },
              );
          }
        });
      };
    },
    93139: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return v;
        },
      });
      var r = i(65301),
        n = i(79491),
        o = i(91207),
        a = i(37184),
        l = i(98),
        s = i(83768),
        u = i(90377),
        d = i(33387),
        c = i(58997),
        f = i(29778),
        m = i(15400);
      let v = (e) => {
        let { user: t, fullscreenPlayer: i } = (0, c.oR4)(),
          { notify: v } = (0, c.d$W)(),
          [p, _] = (0, o.useState)(!1),
          { formatMessage: y } = (0, a.Z)(),
          h = (0, c.R$C)();
        return (0, d.W)(async (newE) => {
            e = newE?.toggleLike ? newE : e;
          if (e) {
            let o = i.modal.isOpened ? c.W$x.FULLSCREEN_INFO : c.W$x.INFO,
              a = i.modal.isOpened ? c.W$x.FULLSCREEN_ERROR : c.W$x.ERROR;
            if (!t.isAuthorized) {
              v(
                (0, r.jsx)(f.Q, {
                  error: y({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: a },
              );
              return;
            }
            if (p) return;
            let d = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            _(!0);
            let g = await e.toggleLike();
            if ((_(!1), g === s.B.OK)) {
              v((0, r.jsx)(m.NotificationLike, { track: d }), {
                containerId: o,
              });
              let e = d.isLiked ? u.C.LIKE : u.C.UNLIKE;
              h &&
                (0, l.x)(h.state.currentContext.value) &&
                h.state.currentContext.value.sendFeedback(
                  h.state.playerState,
                  h.state.queueState,
                  e,
                );
            } else
              v(
                (0, r.jsx)(f.Q, {
                  error: y({ id: "error-messages.error-during-action" }),
                }),
                { containerId: a },
              );
          }
        });
      };
    },
    90283: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnModifyPlayQueue: function () {
          return g;
        },
      });
      var r = i(65301),
        n = i(33387),
        o = i(86348),
        a = i(58997),
        l = i(91207),
        s = i(44729),
        u = i(81437),
        d = i(29778),
        c = i(78806),
        f = i(88352),
        m = i.n(f);
      let v = (e, t) => {
          switch (e) {
            case d.j9.TRACK:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.track-will-be-played-next",
                values: { title: t },
              });
            case d.j9.PODCAST_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.podcast-episode-will-be-played-next",
                values: { title: t },
              });
            case d.j9.AUDIOBOOK_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.audiobook-episode-will-be-played-next",
                values: { title: t },
              });
          }
        },
        p = (e, t) => {
          switch (e) {
            case d.j9.TRACK:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.track-will-be-played-last",
                values: { title: t },
              });
            case d.j9.PODCAST_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.podcast-episode-will-be-played-last",
                values: { title: t },
              });
            case d.j9.AUDIOBOOK_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.audiobook-episode-will-be-played-last",
                values: { title: t },
              });
          }
        },
        _ = (e, t) => {
          switch (e) {
            case d.j9.TRACK:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.track-will-be-removed",
                values: { title: t },
              });
            case d.j9.PODCAST_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.podcast-episode-will-be-removed",
                values: { title: t },
              });
            case d.j9.AUDIOBOOK_EPISODE:
              return (0, r.jsx)(s.Z, {
                id: "play-queue.audiobook-episode-will-be-removed",
                values: { title: t },
              });
          }
        },
        y = (e) => {
          let {
              closeToast: t,
              entityVariant: i,
              entityTitle: n,
              coverUri: o,
              variant: a,
            } = e,
            s = (0, l.useMemo)(
              () =>
                (0, r.jsxs)(u.Caption, {
                  className: m().entityTitle,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: ["\xa0", n, "\xa0"],
                }),
              [n],
            ),
            f = (0, l.useMemo)(() => {
              switch (a) {
                case c.h.NEXT:
                  return v(i, s);
                case c.h.LAST:
                  return p(i, s);
                case c.h.REMOVE:
                  return _(i, s);
              }
            }, [a, i, s]);
          return (0, r.jsx)(d.Yj, {
            message: (0, r.jsx)(u.Caption, {
              className: m().text,
              variant: "div",
              type: "controls",
              size: "m",
              children: f,
            }),
            cover: (0, r.jsx)(d.BE, {
              className: m().image,
              src: o,
              size: 100,
              fit: "cover",
              alt: n,
              withAvatarReplace: !0,
            }),
            closeToast: t,
          });
        };
      var h = i(47801);
      function g(e, t, i) {
        let { notify: l } = (0, a.d$W)(),
          { fullscreenPlayer: s } = (0, a.oR4)(),
          u = (0, a.R$C)(),
          d = (0, h.C)(e);
        return (0, n.W)(() => {
          if (!e) return;
          switch (t) {
            case c.h.LAST:
              null == u ||
                u.injectLast({
                  entitiesData: [
                    { type: o.RX.Unloaded, meta: { id: e.entityId } },
                  ],
                });
              break;
            case c.h.NEXT:
              null == u ||
                u.injectNext({
                  entitiesData: [
                    { type: o.RX.Unloaded, meta: { id: e.entityId } },
                  ],
                });
              break;
            case c.h.REMOVE:
              i && (null == u || u.remove({ positions: i }));
          }
          let n = s.modal.isOpened ? a.W$x.FULLSCREEN_INFO : a.W$x.INFO;
          l(
            (0, r.jsx)(y, {
              entityVariant: d,
              variant: t,
              entityTitle: e.title,
              coverUri: e.coverUri,
            }),
            { containerId: n },
          );
        });
      }
    },
    30787: function (e, t, i) {
      "use strict";
      i.d(t, {
        useTimeLeftText: function () {
          return o;
        },
      });
      var r = i(91207),
        n = i(37184);
      let o = () => {
        let { formatMessage: e } = (0, n.Z)();
        return (0, r.useCallback)(
          function (t) {
            let i =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              r = Math.floor(t / 60),
              n = function (t) {
                let i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = e({ id: "time.minutes-left" }, { minutes: t });
                return i
                  ? ""
                      .concat(e({ id: "time.left" }, { time: t }), " ")
                      .concat(r)
                  : r;
              };
            if (t < 1) return e({ id: "time.finished" });
            if (t < 60)
              return (function (t) {
                let i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = e({ id: "time.seconds-left" }, { seconds: t });
                return i
                  ? ""
                      .concat(e({ id: "time.left" }, { time: t }), " ")
                      .concat(r)
                  : r;
              })(Math.floor(t), i);
            if (r < 60) return n(r, i);
            let o = r % 60,
              a = (function (t) {
                let i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return i
                  ? e({ id: "time.hours-left" }, { hours: t })
                  : e({ id: "time.hours" }, { hours: t });
              })(Math.floor(r / 60), i);
            return o > 0 ? "".concat(a, " ").concat(n(o)) : a;
          },
          [e],
        );
      };
    },
    83811: function (e, t, i) {
      "use strict";
      i.d(t, {
        ListeningProgress: function () {
          return _;
        },
      });
      var r = i(65301),
        n = i(9695),
        o = i(96233),
        a = i(91207),
        l = i(44729),
        s = i(55557),
        u = i(82036),
        d = i(81437),
        c = i(86348),
        f = i(58997),
        m = i(30787),
        v = i(82155),
        p = i.n(v);
      let _ = (0, o.Pi)((e) => {
        var t, i, o, v, _, y, h, g, x;
        let {
            className: E,
            id: b,
            albumId: k,
            streamProgress: R,
            durationMs: O,
            playContextParams: j,
            withTimeLeftText: C = !0,
            isFinishedLabelHidden: P,
          } = e,
          I = (0, f.R$C)(),
          { sonataState: A, album: N } = (0, f.oR4)(),
          T = Math.floor(O / 1e3),
          [L, S] = (0, a.useState)(!1),
          V = (0, m.useTimeLeftText)(),
          { isPlaying: D, isCurrent: U } = (0, f.qmq)({
            playContextParams: j,
            entityId: k ? "".concat(b, ":").concat(k) : b,
          });
        (0, a.useEffect)(() => {
          if (!U) {
            S(!1);
            return;
          }
          let e =
            null == I
              ? void 0
              : I.state.playerState.status.onChange(() => {
                  (null == I ? void 0 : I.state.playerState.status.value) ===
                    c.Xz.LOADING_MEDIA_DATA && S(!0);
                });
          return () => {
            null == e || e();
          };
        }, [I, R, U, D]),
          (0, a.useEffect)(() => {
            var e;
            (
              null == N
                ? void 0
                : null === (e = N.meta) || void 0 === e
                  ? void 0
                  : e.listeningFinished
            )
              ? (R.updateEndPositionSec(0), R.updateEverFinished(!0))
              : (null == N ? void 0 : N.allTracksUnfinished) &&
                R.updateEverFinished(!1);
          }, [
            R,
            null == N ? void 0 : N.allTracksUnfinished,
            null == N
              ? void 0
              : null === (t = N.meta) || void 0 === t
                ? void 0
                : t.listeningFinished,
          ]),
          (0, a.useEffect)(() => {
            var e, t;
            U &&
              (null == A
                ? void 0
                : null === (e = A.entityMeta) || void 0 === e
                  ? void 0
                  : e.streamProgress) &&
              R &&
              A.entityMeta.streamProgress.hasEverFinished !==
                R.hasEverFinished &&
              R.updateEverFinished(
                !!A.entityMeta.streamProgress.hasEverFinished,
              ),
              T - ((null == R ? void 0 : R.endPositionSec) || 0) < 1 &&
                ((null == A
                  ? void 0
                  : null === (t = A.entityMeta) || void 0 === t
                    ? void 0
                    : t.streamProgress) &&
                  U &&
                  (A.entityMeta.streamProgress.updateEverFinished(!0),
                  A.entityMeta.streamProgress.updateEndPositionSec(0)),
                null == R || R.updateEverFinished(!0));
          }, [
            U,
            null == A
              ? void 0
              : null === (i = A.entityMeta) || void 0 === i
                ? void 0
                : i.streamProgress,
            null == A
              ? void 0
              : null === (v = A.entityMeta) || void 0 === v
                ? void 0
                : null === (o = v.streamProgress) || void 0 === o
                  ? void 0
                  : o.hasEverFinished,
            R,
            R.hasEverFinished,
            R.endPositionSec,
            T,
          ]),
          (0, a.useEffect)(() => {
            if (!U) return;
            let e =
              null == I
                ? void 0
                : I.state.playerState.progress.onChange(() => {
                    var e;
                    let t = I.state.playerState.progress.value,
                      i =
                        null == A
                          ? void 0
                          : null === (e = A.entityMeta) || void 0 === e
                            ? void 0
                            : e.streamProgress;
                    0 !== t.position && L && R.updateEndPositionSec(t.position),
                      U &&
                        parseInt(
                          "".concat(null == i ? void 0 : i.endPositionSec),
                          10,
                        ) !== parseInt("".concat(t.position), 10) &&
                        (null == i || i.updateEndPositionSec(t.position));
                  });
            return () => {
              null == e || e();
            };
          }, [I, R, U, D, L, b, null == A ? void 0 : A.entityMeta]);
        let M = (0, a.useMemo)(() => {
          var e, t, i, o, a;
          if (
            ((U &&
              (null == A
                ? void 0
                : null === (t = A.entityMeta) || void 0 === t
                  ? void 0
                  : null === (e = t.streamProgress) || void 0 === e
                    ? void 0
                    : e.hasEverFinished)) ||
              (null == R ? void 0 : R.hasEverFinished) ||
              (null == N
                ? void 0
                : null === (i = N.meta) || void 0 === i
                  ? void 0
                  : i.listeningFinished)) &&
            !P
          )
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(d.Caption, {
                  lineClamp: 1,
                  variant: "div",
                  className: (0, n.W)(p().text, { [p().text_hidden]: !C }),
                  children: (0, r.jsx)(l.Z, { id: "time.finished" }),
                }),
                (0, r.jsx)(u.Icon, {
                  size: "xxs",
                  variant: "check",
                  className: p().checkIcon,
                }),
              ],
            });
          let c =
            (U &&
              (null == A
                ? void 0
                : null === (a = A.entityMeta) || void 0 === a
                  ? void 0
                  : null === (o = a.streamProgress) || void 0 === o
                    ? void 0
                    : o.endPositionSec)) ||
            R.endPositionSec;
          if (!c || 0 === c) return;
          let f = T - c,
            m = V(f);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d.Caption, {
                lineClamp: 1,
                variant: "div",
                className: (0, n.W)(p().text, { [p().text_withTimeLeft]: !C }),
                children: m,
              }),
              f > 1 || P
                ? (0, r.jsx)(s.m, { value: c, max: T })
                : (0, r.jsx)(u.Icon, {
                    size: "xxs",
                    variant: "check",
                    className: p().checkIcon,
                  }),
            ],
          });
        }, [
          T,
          null == R ? void 0 : R.hasEverFinished,
          null == R ? void 0 : R.endPositionSec,
          C,
          V,
          U,
          null == A
            ? void 0
            : null === (y = A.entityMeta) || void 0 === y
              ? void 0
              : null === (_ = y.streamProgress) || void 0 === _
                ? void 0
                : _.hasEverFinished,
          null == A
            ? void 0
            : null === (g = A.entityMeta) || void 0 === g
              ? void 0
              : null === (h = g.streamProgress) || void 0 === h
                ? void 0
                : h.endPositionSec,
          null == N
            ? void 0
            : null === (x = N.meta) || void 0 === x
              ? void 0
              : x.listeningFinished,
          P,
        ]);
        return (0, r.jsx)("div", {
          className: (0, n.W)(p().root, E),
          children: M,
        });
      });
    },
    87712: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationDislike: function () {
          return f;
        },
      });
      var r = i(65301),
        n = i(9695),
        o = i(91207),
        a = i(44729),
        l = i(43998),
        s = i(81437),
        u = i(29778),
        d = i(93015),
        c = i.n(d);
      let f = (e) => {
        let {
            coverUri: t,
            title: i,
            isDisliked: d,
            closeToast: f,
            className: m,
            entityVariant: v,
          } = e,
          p = (0, o.useMemo)(
            () =>
              (0, r.jsx)(l.Paper, {
                className: c().cover,
                radius: "s",
                children: (0, r.jsx)(u.BE, {
                  className: c().image,
                  src: t,
                  alt: i,
                  size: 100,
                  fit: "cover",
                  withAvatarReplace: !0,
                }),
              }),
            [t, i],
          ),
          _ = (0, o.useMemo)(() => {
            if (d)
              switch (v) {
                case u.j9.PODCAST_EPISODE:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.podcast-episode-unavailable-in-recommendations",
                  });
                case u.j9.AUDIOBOOK_EPISODE:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.audiobook-episode-unavailable-in-recommendations",
                  });
                default:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.track-unavailable-in-recommendations",
                  });
              }
            else
              switch (v) {
                case u.j9.PODCAST_EPISODE:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.podcast-episode-available-in-recommendations",
                  });
                case u.j9.AUDIOBOOK_EPISODE:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.audiobook-episode-available-in-recommendations",
                  });
                default:
                  return (0, r.jsx)(a.Z, {
                    id: "notifications-info.track-available-in-recommendations",
                  });
              }
          }, [v, d]);
        return (0, r.jsx)(u.Yj, {
          className: (0, n.W)(c().root, m),
          closeToast: f,
          message: (0, r.jsxs)("div", {
            className: c().message,
            children: [
              p,
              (0, r.jsx)(s.Caption, {
                className: c().text,
                variant: "div",
                type: "controls",
                size: "m",
                children: _,
              }),
            ],
          }),
        });
      };
    },
    15400: function (e, t, i) {
      "use strict";
      i.d(t, {
        NotificationLike: function () {
          return c;
        },
      });
      var r = i(65301),
        n = i(96233),
        o = i(29778),
        a = i(47801),
        l = i(35068),
        s = i(58997);
      let u = "/collection",
        d = (e) => {
          if (!(0, s.RVp)()) return u;
          switch (e.type) {
            case l.V.PODCAST:
            case l.V.AUDIOBOOK:
              return "/collection/shelf/liked";
            default:
              return u;
          }
        },
        c = (0, n.Pi)((e) => {
          let { track: t, closeToast: i } = e,
            n = d(t),
            l = (0, a.C)(t);
          return (0, r.jsx)(o.AP, {
            closeToast: i,
            entityVariant: l,
            entityTitle: t.title,
            collectionUrl: n,
            coverUri: t.coverUri,
            isLiked: t.isLiked,
          });
        });
    },
    24890: function (e, t, i) {
      "use strict";
      i.d(t, {
        RemoveButton: function () {
          return u;
        },
      });
      var r = i(65301),
        n = i(91207),
        o = i(37184),
        a = i(55975),
        l = i(78372),
        s = i(82036);
      let u = (e) => {
        let {
            className: t,
            variant: i = "text",
            onClick: u,
            iconClassName: d,
            iconSize: c,
            size: f = "s",
          } = e,
          { formatMessage: m } = (0, o.Z)(),
          v = (0, n.useCallback)(
            (e) => {
              null == u || u(), e.stopPropagation();
            },
            [u],
          );
        return (0, r.jsx)(l.z, {
          className: t,
          withRipple: !1,
          variant: i,
          size: f,
          radius: "round",
          "aria-label": m({ id: "play-queue.delete-from-queue" }),
          onClick: v,
          icon: (0, r.jsx)(s.Icon, {
            size: c,
            className: d,
            variant: "bucket",
          }),
          ...(0, a.BA)(a.FK.track.REMOVE_BUTTON),
        });
      };
    },
    94528: function (e) {
      e.exports = {
        message: "NotificationDislike_message__RoxZH",
        text: "NotificationDislike_text__fJHts",
        cover: "NotificationDislike_cover__N5Oqu",
        image: "NotificationDislike_image__jn4_4",
      };
    },
    19232: function (e) {
      e.exports = {
        root_clamp: "SeparatedArtists_root_clamp__SyvjM",
        root_variant_breakAll: "SeparatedArtists_root_variant_breakAll__34YbW",
        root_variant_breakWord:
          "SeparatedArtists_root_variant_breakWord__1sziE",
        ellipsis: "SeparatedArtists_ellipsis__0SUCv",
      };
    },
    9924: function (e) {
      e.exports = {
        root: "ContextMenuPlaylistPrivacyItem_root__kz3gc",
        caption: "ContextMenuPlaylistPrivacyItem_caption__0VuXh",
      };
    },
    90828: function (e) {
      e.exports = {
        button: "CreatePlaylistCard_button__ZaAtb",
        icon: "CreatePlaylistCard_icon__09K9N",
        text: "CreatePlaylistCard_text__dd9Q6",
      };
    },
    40835: function (e) {
      e.exports = { message: "FailedPlaylistNotification_message__wxrzi" };
    },
    60309: function (e) {
      e.exports = {
        message: "PlaylistNotification_message__nEykK",
        text: "PlaylistNotification_text__kTfi1",
        title: "PlaylistNotification_title__Q5IKF",
        link: "PlaylistNotification_link__HezVx",
        playlistTitle: "PlaylistNotification_playlistTitle__HweEg",
        image: "PlaylistNotification_image__QvYVD",
      };
    },
    82155: function (e) {
      e.exports = {
        root: "ListeningProgress_root__Rvlcn",
        text_withTimeLeft: "ListeningProgress_text_withTimeLeft__2G9_d",
        checkIcon: "ListeningProgress_checkIcon___yh49",
      };
    },
    93015: function (e) {
      e.exports = {
        message: "NotificationDislike_message__R2jfZ",
        text: "NotificationDislike_text__xmrnn",
        cover: "NotificationDislike_cover__bvqFM",
        image: "NotificationDislike_image__h0_EO",
      };
    },
    88352: function (e) {
      e.exports = {
        entityTitle: "NotificationPlayQueue_entityTitle__XCIsa",
        entityLink: "NotificationPlayQueue_entityLink__O7tHL",
        text: "NotificationPlayQueue_text___1DWX",
        image: "NotificationPlayQueue_image__SLXsp",
      };
    },
    28817: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return o;
        },
      });
      var r = i(58655),
        n = i(71603);
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
    71603: function (e, t, i) {
      "use strict";
      i.d(t, {
        e: function () {
          return o;
        },
      });
      var r = i(58655),
        n = i(46393);
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
    49430: function (e, t, i) {
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
      var r = i(25946),
        n = i(71603),
        o = i(28817);
    },
    25946: function (e, t, i) {
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
    90377: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        C: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).RADIO_STARTED = "radioStarted"),
        (n.TRACK_STARTED = "trackStarted"),
        (n.TRACK_FINISHED = "trackFinished"),
        (n.SKIP = "skip"),
        (n.SKIP_FAILED = "skipFailed"),
        (n.LIKE = "like"),
        (n.DISLIKE = "dislike"),
        (n.AD = "ad"),
        (n.JINGLE = "jingle"),
        (n.UNLIKE = "unlike"),
        (n.UNDISLIKE = "undislike"),
        (n.COMBINED_QUEUE_STARTED = "combinedQueueStarted"),
        (n.PLAYABLE_ITEM_STARTED = "playableItemStarted"),
        (n.PLAYABLE_ITEM_FINISHED = "playableItemFinished"),
        (n.PLAYABLE_ITEM_SKIP = "playableItemSkip"),
        (n.PLAYABLE_ITEM_LIKE = "playableItemLike"),
        (n.PLAYABLE_ITEM_DISLIKE = "playableItemDislike"),
        (n.PLAYABLE_ITEM_UNLIKE = "playableItemUnlike"),
        (n.PLAYABLE_ITEM_UNDISLIKE = "playableItemUndislike");
    },
    26157: function (e, t, i) {
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
    85618: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        r: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).DEFAULT = "default"),
        (n.DONATION = "donation"),
        (n.REWIND = "year-rewind");
    },
    27980: function (e, t, i) {
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
    22820: function (e, t, i) {
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
    81404: function (e, t, i) {
      "use strict";
      var r, n;
      i.d(t, {
        z: function () {
          return r;
        },
      }),
        ((n = r || (r = {})).OWN = "OWN"),
        (n.UGC = "UGC"),
        (n.OWN_REPLACED_TO_UGC = "OWN_REPLACED_TO_UGC"),
        (n.EXTERNAL = "EXTERNAL");
    },
  },
]);
