(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7099],
  {
    58720: function (t, e, o) {
      "use strict";
      o.d(e, {
        v: function () {
          return c;
        },
      });
      var r,
        i = o(73484),
        n = o(65067),
        l = {
          6699: (t, e, o) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useDebouncedToggle = void 0);
            let r = o(352),
              i = o(810);
            e.useDebouncedToggle = (t) => {
              let { delay: e, initialState: o, throttleTimeout: n } = t,
                l = (0, i.useRef)(null),
                [a, s] = (0, i.useState)(!!o),
                u = (0, i.useMemo)(
                  () =>
                    (0, r.throttle)(() => {
                      s(!o),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          s(!!o);
                        }, e));
                    }, n),
                  [e, o, n],
                ),
                c = (0, i.useCallback)(() => {
                  s(!!o), l.current && window.clearTimeout(l.current);
                }, [o]);
              return (
                (0, i.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: a, handleDebouncedToggle: u, reset: c }
              );
            };
          },
          361: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.getElementFromRefOrElement = void 0),
              (e.getElementFromRefOrElement = (t) =>
                void 0 === t
                  ? void 0
                  : null === t || t instanceof HTMLElement
                    ? t
                    : null === t.current || t.current instanceof HTMLElement
                      ? t.current
                      : void 0);
          },
          352: (t) => {
            t.exports = i;
          },
          810: (t) => {
            t.exports = r || (r = o.t(n, 2));
          },
        },
        a = {};
      function s(t) {
        var e = a[t];
        if (void 0 !== e) return e.exports;
        var o = (a[t] = { exports: {} });
        return l[t](o, o.exports, s), o.exports;
      }
      var u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let t = s(810),
          e = s(361),
          o = s(6699);
        u.useScroll = (r) => {
          let { onScroll: i, listenIsScrolling: n, elementRef: l } = r,
            { state: a, handleDebouncedToggle: s } = (0, o.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            u = (0, t.useCallback)(() => {
              n && s(), null == i || i();
            }, [n, s, i]);
          return (
            (0, t.useEffect)(() => {
              let t = (0, e.getElementFromRefOrElement)(l);
              if (null === t) return;
              let o = null != t ? t : window,
                r = { capture: !0, passive: !0 };
              return (
                o.addEventListener("scroll", u, r),
                () => o.removeEventListener("scroll", u, r)
              );
            }, [l, u]),
            a
          );
        };
      })(),
        u.__esModule;
      var c = u.useScroll;
    },
    39201: function (t, e, o) {
      "use strict";
      o.d(e, {
        f: function () {
          return d;
        },
      });
      var r,
        i,
        n = o(73484),
        l = o(65067),
        a = {
          5881: (t, e, o) => {
            function r() {
              for (var t, e, o = 0, r = ""; o < arguments.length; )
                (t = arguments[o++]) &&
                  (e = (function t(e) {
                    var o,
                      r,
                      i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                      if (Array.isArray(e))
                        for (o = 0; o < e.length; o++)
                          e[o] && (r = t(e[o])) && (i && (i += " "), (i += r));
                      else for (o in e) e[o] && (i && (i += " "), (i += o));
                    }
                    return i;
                  })(t)) &&
                  (r && (r += " "), (r += e));
              return r;
            }
            o.r(e), o.d(e, { clsx: () => r, default: () => i });
            let i = r;
          },
          1920: (t, e, o) => {
            o.r(e), o.d(e, { default: () => r });
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
          8903: (t, e, o) => {
            o.r(e), o.d(e, { default: () => r });
            let r = {
              root: "BnN6sQIg6NahNBun6fkP",
              fade: "MM8MKXCw0gMkVvq7C1YS",
              fade_active: "MsLY_qiKofQrwKAr98EC",
              button: "Dp6n_Y0cfUyPQT1Z6uIm",
              text: "bfmUuyonXAK7HKYtDzUK",
            };
          },
          6161: (t, e, o) => {
            var r = o(810),
              i = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              a =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(t, e, o) {
              var r,
                n = {},
                u = null,
                c = null;
              for (r in (void 0 !== o && (u = "" + o),
              void 0 !== e.key && (u = "" + e.key),
              void 0 !== e.ref && (c = e.ref),
              e))
                l.call(e, r) && !s.hasOwnProperty(r) && (n[r] = e[r]);
              if (t && t.defaultProps)
                for (r in (e = t.defaultProps))
                  void 0 === n[r] && (n[r] = e[r]);
              return {
                $$typeof: i,
                type: t,
                key: u,
                ref: c,
                props: n,
                _owner: a.current,
              };
            }
            (e.Fragment = n), (e.jsx = u), (e.jsxs = u);
          },
          9541: (t, e, o) => {
            t.exports = o(6161);
          },
          4601: (t, e, o) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useToggle = void 0);
            let r = o(810);
            e.useToggle = (t) => {
              let [e, o] = (0, r.useState)(t);
              (0, r.useEffect)(() => {
                o(t);
              }, [t]);
              let i = (0, r.useCallback)(() => {
                  o((t) => !t);
                }, []),
                n = (0, r.useCallback)(() => {
                  o(!0);
                }, []),
                l = (0, r.useCallback)(() => {
                  o(!1);
                }, []);
              return {
                state: e,
                toggle: i,
                setState: o,
                toggleTrue: n,
                toggleFalse: l,
              };
            };
          },
          666: (t, e, o) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.useTruncate = void 0);
            let r = o(352),
              i = o(810),
              n = o(4601);
            e.useTruncate = (t) => {
              let [e, o] = (0, i.useState)(0),
                {
                  state: l,
                  toggleTrue: a,
                  toggleFalse: s,
                } = (0, n.useToggle)(!1),
                u = (0, i.useMemo)(
                  () =>
                    (0, r.throttle)(() => {
                      let { offsetHeight: o, scrollHeight: r } =
                        (null == t ? void 0 : t.current) || {};
                      o && r && e < r ? a() : s();
                    }, 100),
                  [e, t, s, a],
                );
              return (
                (0, i.useEffect)(() => {
                  var r, i;
                  !e &&
                    (null === (r = t.current) || void 0 === r
                      ? void 0
                      : r.offsetHeight) &&
                    o(
                      null === (i = t.current) || void 0 === i
                        ? void 0
                        : i.offsetHeight,
                    );
                }, [e, t]),
                (0, i.useEffect)(
                  () => (
                    u(),
                    window.addEventListener("resize", u),
                    () => {
                      window.removeEventListener("resize", u);
                    }
                  ),
                  [u],
                ),
                { isTruncated: l }
              );
            };
          },
          8796: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.createRipple = void 0),
              (e.createRipple = function (t, e, o) {
                let r = null != o ? o : t.currentTarget,
                  i = document.createElement("span"),
                  n = Math.max(r.clientWidth, r.clientHeight),
                  l = n / 2,
                  a = r.getBoundingClientRect(),
                  s =
                    0 === t.clientX
                      ? Math.round(a.width / 2)
                      : t.clientX - a.left,
                  u =
                    0 === t.clientY
                      ? Math.round(a.height / 2)
                      : t.clientY - a.top;
                (i.style.width = "".concat(n, "px")),
                  (i.style.height = "".concat(n, "px")),
                  (i.style.left =
                    0 === t.clientX ? "0px" : "".concat(s - l, "px")),
                  (i.style.top = "".concat(u - l, "px")),
                  i.classList.add(e);
                let c = r.getElementsByClassName(e)[0];
                c && c.remove(), r.insertBefore(i, r.firstChild);
              });
          },
          361: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.getElementFromRefOrElement = void 0),
              (e.getElementFromRefOrElement = (t) =>
                void 0 === t
                  ? void 0
                  : null === t || t instanceof HTMLElement
                    ? t
                    : null === t.current || t.current instanceof HTMLElement
                      ? t.current
                      : void 0);
          },
          8216: (t, e, o) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.getElementFromRefOrElement = e.createRipple = void 0);
            var r = o(8796);
            Object.defineProperty(e, "createRipple", {
              enumerable: !0,
              get: function () {
                return r.createRipple;
              },
            });
            var i = o(361);
            Object.defineProperty(e, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return i.getElementFromRefOrElement;
              },
            });
          },
          8119: function (t, e, o) {
            var r =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.Button = void 0);
            let i = o(9541),
              n = o(810),
              l = o(5881),
              a = o(8216),
              s = r(o(1920)),
              u = (t) => {
                let {
                    forwardRef: e,
                    isBlock: o,
                    iconPosition: r = "left",
                    children: u,
                    className: c,
                    color: d = "secondary",
                    flexIcon: _,
                    icon: m,
                    spinner: f,
                    role: v,
                    onClick: p,
                    radius: b = "m",
                    size: h,
                    type: x = "button",
                    variant: C = "default",
                    withRipple: A = !0,
                    withHover: g = !0,
                    withBorder: y = !1,
                    disabled: k,
                    iconClassName: M,
                    contentContainerClassName: T,
                    ...j
                  } = t,
                  N = (0, n.useId)(),
                  B = !n.Children.toArray(u).filter(Boolean).length,
                  w = "left" === r,
                  S = null,
                  E = (0, n.isValidElement)(f);
                if (m) {
                  var R, L;
                  S = (0, n.cloneElement)(m, {
                    className: (0, l.clsx)(
                      s.default.icon,
                      {
                        [s.default["icon_position_".concat(r)]]: r && !B,
                        [s.default.icon_withButtonSize]: !(null ===
                          (R = m.props) || void 0 === R
                          ? void 0
                          : R.size),
                      },
                      null === (L = m.props) || void 0 === L
                        ? void 0
                        : L.className,
                      M,
                    ),
                    key: N,
                  });
                }
                let P = (0, n.useMemo)(
                    () =>
                      E
                        ? (0, i.jsx)("div", {
                            className: s.default.spinnerContainer,
                            children: f,
                          })
                        : null,
                    [E, f],
                  ),
                  F = (0, n.useCallback)(
                    (t) => {
                      E ||
                        (A && (0, a.createRipple)(t, s.default.ripple),
                        null == p || p(t));
                    },
                    [E, p, A],
                  );
                return (0, i.jsx)("button", {
                  ref: e,
                  className: (0, l.clsx)(
                    s.default.root,
                    s.default["root_".concat(d, "_").concat(C)],
                    s.default["root_radius_".concat(b)],
                    s.default.root_size,
                    {
                      [s.default["root_".concat(d, "_withHover_").concat(C)]]:
                        g && !k && !E,
                      [s.default["root_size_".concat(h)]]: h,
                      [s.default.root_withoutBorder]: !y,
                      [s.default.root_withActiveSpinner]: E,
                      [s.default.block]: o,
                      [s.default.flexIcon]: _,
                      [s.default.iconOnly]: B,
                      [s.default.root_icon_left]: m && !B && w,
                      [s.default.root_icon_right]: m && !B && !w,
                    },
                    c,
                  ),
                  type: x,
                  role: v,
                  onClick: F,
                  ...j,
                  disabled: k,
                  "aria-live": E ? "polite" : "off",
                  "aria-busy": E,
                  children:
                    m || E
                      ? (0, i.jsxs)("span", {
                          className: (0, l.clsx)(
                            s.default.contentContainer,
                            { [s.default.contentContainer_block]: o },
                            T,
                          ),
                          children: [m && w && S, !B && u, m && !w && S, P],
                        })
                      : u,
                });
              };
            e.Button = (0, n.forwardRef)((t, e) =>
              (0, i.jsx)(u, { forwardRef: e, ...t }),
            );
          },
          217: function (t, e, o) {
            var r =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.CollapsableText = void 0);
            let i = o(9541),
              n = o(5881),
              l = o(810),
              a = o(666),
              s = o(8119),
              u = r(o(8903));
            e.CollapsableText = (t) => {
              var e;
              let {
                  className: o,
                  children: r,
                  lineClamp: c,
                  moreText: d,
                  lessText: _,
                  buttonClassName: m,
                  withFade: f,
                  initialOpen: v = !1,
                  open: p,
                  onOpenChange: b,
                  ...h
                } = t,
                [x, C] = (0, l.useState)(v),
                A = (0, l.useRef)(null),
                { isTruncated: g } = (0, a.useTruncate)(A),
                y = null != p ? p : x,
                k = null != b ? b : C,
                M = (0, l.cloneElement)(r, {
                  ref: A,
                  lineClamp: (!y && c) || void 0,
                  className: (0, n.clsx)(
                    null === (e = r.props) || void 0 === e
                      ? void 0
                      : e.className,
                    u.default.text,
                  ),
                }),
                T = (0, l.useMemo)(
                  () =>
                    f && g
                      ? (0, i.jsx)("div", {
                          className: (0, n.clsx)(u.default.fade, {
                            [u.default.fade_active]: !y,
                          }),
                          children: M,
                        })
                      : M,
                  [g, y, M, f],
                ),
                j = (0, l.useCallback)(() => {
                  k(!y);
                }, [y, k]),
                N = y ? _ : d;
              return (0, i.jsxs)("div", {
                className: (0, n.clsx)(u.default.root, o),
                ...h,
                children: [
                  T,
                  g &&
                    N &&
                    (0, i.jsx)(s.Button, {
                      variant: "text",
                      withRipple: !1,
                      onClick: j,
                      className: (0, n.clsx)(u.default.button, m),
                      color: "primary",
                      children: N,
                    }),
                ],
              });
            };
          },
          352: (t) => {
            t.exports = n;
          },
          810: (t) => {
            t.exports = i || (i = o.t(l, 2));
          },
        },
        s = {};
      function u(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var o = (s[t] = { exports: {} });
        return a[t].call(o.exports, o, o.exports, u), o.exports;
      }
      (u.d = (t, e) => {
        for (var o in e)
          u.o(e, o) &&
            !u.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      }),
        (u.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (u.r = (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.f = void 0),
        (r = u(217)),
        Object.defineProperty(c, "f", {
          enumerable: !0,
          get: function () {
            return r.CollapsableText;
          },
        });
      var d = c.f;
      c.X;
    },
    55051: function (t, e, o) {
      "use strict";
      o.d(e, {
        kT: function () {
          return c;
        },
        IQ: function () {
          return m;
        },
        lR: function () {
          return f;
        },
        WI: function () {
          return T.ArtistAboutModal;
        },
        Dd: function () {
          return g;
        },
        IT: function () {
          return j.ArtistCard;
        },
        xG: function () {
          return N.ArtistContextMenu;
        },
        o9: function () {
          return k;
        },
        DT: function () {
          return M;
        },
        rL: function () {
          return _;
        },
        GK: function () {
          return B.HorizontalArtistCard;
        },
        lj: function () {
          return d;
        },
        ef: function () {
          return s;
        },
        r2: function () {
          return u;
        },
        VF: function () {
          return i;
        },
        iU: function () {
          return a;
        },
      });
      var r = o(22874);
      let i = (t) => (0, r.pj)({ title: t.title, url: t.action.weblink });
      var n = o(64353),
        l = o(89428);
      let a = (t) => {
          let e = (0, n.tR)({ artist: t.artist }),
            o = (0, l.W5)(t.top);
          return (0, r.pj)({
            artist: e,
            listenTimeSeconds: t.listenTimeSeconds,
            top: o,
          });
        },
        s = 5,
        u = 9,
        c = 9,
        d = 3,
        _ = 5,
        m = 20,
        f = 20;
      var v = o(98730),
        p = o(65067),
        b = o(2954),
        h = o(13534);
      (0, p.cache)(async function (t, e) {
        let o =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { artistId: t, page: 0, pageSize: m, sort: { sortBy: b.h.YEAR } };
        (0, h.aBB)(t) || (0, v.notFound)();
        try {
          let r;
          let {
            container: i,
            backendHostTld: n,
            locale: l,
            host: a,
            fullUrl: u,
            isRSC: c,
            requestUrl: d,
          } = await (0, h.rbP)();
          if (c)
            return {
              artist: void 0,
              albums: void 0,
              backendHostTld: n,
              locale: l,
              host: a,
              fullUrl: u,
              requestUrl: d,
            };
          let _ = i.get(h.na2),
            m = await _.getBriefInfo({
              artistId: t,
              popularTracksCount: s,
              fetchPlaylistLikesCounts: !0,
              discographyBlockEnabled: !0,
              useClipDataFormat: !0,
            });
          switch (("not-found" === m.error && (0, v.notFound)(), e)) {
            case h.MX1.COMPILATIONS:
              r = await _.getAlsoAlbums(o);
              break;
            case h.MX1.DISCOGRAPHY:
              r = await _.getDiscographyAlbums(o);
              break;
            default:
              r = await _.getDirectAlbums(o);
          }
          return {
            artist: m,
            albums: r,
            backendHostTld: n,
            locale: l,
            host: a,
            fullUrl: u,
            requestUrl: d,
          };
        } catch (t) {
          (0, v.notFound)();
        }
      }),
        (0, p.cache)(async function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { artistId: t, page: 0, pageSize: f };
          try {
            let {
              container: o,
              backendHostTld: r,
              locale: i,
              host: n,
              fullUrl: l,
              isRSC: a,
              requestUrl: u,
            } = await (0, h.rbP)();
            if (a)
              return {
                artist: void 0,
                albums: void 0,
                backendHostTld: r,
                locale: i,
                host: n,
                fullUrl: l,
                requestUrl: u,
              };
            let c = o.get(h.na2),
              d = await c.getBriefInfo({
                artistId: t,
                popularTracksCount: s,
                fetchPlaylistLikesCounts: !0,
                discographyBlockEnabled: !0,
                useClipDataFormat: !0,
              });
            "not-found" === d.error && (0, v.notFound)();
            let _ = await c.getClips(e);
            return {
              artist: d,
              clips: _,
              backendHostTld: r,
              locale: i,
              host: n,
              fullUrl: l,
              requestUrl: u,
            };
          } catch (t) {
            (0, v.notFound)();
          }
        }),
        (0, p.cache)(async (t) => {
          (0, h.aBB)(t) || (0, v.notFound)();
          try {
            let {
              container: e,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              isRSC: l,
              requestUrl: a,
            } = await (0, h.rbP)();
            if (l)
              return {
                artist: void 0,
                backendHostTld: o,
                locale: r,
                host: i,
                fullUrl: n,
                requestUrl: a,
              };
            let u = e.get(h.na2),
              c = await u.getBriefInfo({
                artistId: t,
                popularTracksCount: s,
                fetchPlaylistLikesCounts: !0,
                discographyBlockEnabled: !0,
                useClipDataFormat: !0,
              }),
              d = await u.getConcerts({ artistId: t });
            return {
              artist: c,
              concerts: d,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              requestUrl: a,
            };
          } catch (t) {
            (0, v.notFound)();
          }
        }),
        (0, p.cache)(async (t) => {
          (0, h.aBB)(t) || (0, v.notFound)();
          try {
            let {
              container: e,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              isRSC: l,
              requestUrl: a,
            } = await (0, h.rbP)();
            if (l)
              return {
                artist: void 0,
                familiar: void 0,
                backendHostTld: o,
                locale: r,
                host: i,
                fullUrl: n,
                requestUrl: a,
              };
            let u = e.get(h.na2),
              c = await u.getBriefInfo({
                artistId: t,
                popularTracksCount: s,
                fetchPlaylistLikesCounts: !0,
                discographyBlockEnabled: !0,
                useClipDataFormat: !0,
              }),
              d = await u.getFamiliarYou({
                artistId: t,
                waveTracksLimit: 100,
                collectionTracksLimit: 100,
                collectionAlbumsLimit: 20,
              });
            return {
              artist: c,
              familiar: d,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              requestUrl: a,
            };
          } catch (t) {
            (0, v.notFound)();
          }
        });
      var x = o(62726);
      (0, p.cache)(async (t) => {
        (0, h.aBB)(t) || (0, v.notFound)();
        try {
          let {
            container: e,
            backendHostTld: o,
            locale: r,
            host: i,
            fullUrl: n,
            isRSC: l,
            requestUrl: a,
          } = await (0, h.rbP)();
          if (l)
            return {
              artist: void 0,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              requestUrl: a,
            };
          let u = e.get(h.na2),
            c = await u.getBriefInfo({
              artistId: t,
              popularTracksCount: s,
              fetchPlaylistLikesCounts: !0,
              discographyBlockEnabled: !0,
              useClipDataFormat: !0,
            });
          return (
            "not-found" === c.error && (0, v.notFound)(),
            {
              artist: c,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              requestUrl: a,
            }
          );
        } catch (t) {
          return (
            t instanceof x.du &&
              [x.CN.BAD_REQUEST, x.CN.NOT_FOUND].includes(t.statusCode) &&
              (0, v.notFound)(),
            {
              artist: void 0,
              backendHostTld: "",
              locale: null,
              host: "",
              fullUrl: null,
              requestUrl: null,
            }
          );
        }
      }),
        (0, p.cache)(async (t) => {
          (0, h.aBB)(t) || (0, v.notFound)();
          try {
            let {
              container: e,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              isRSC: l,
              requestUrl: a,
            } = await (0, h.rbP)();
            if (l)
              return {
                artist: void 0,
                similarArtists: void 0,
                backendHostTld: o,
                locale: r,
                host: i,
                fullUrl: n,
                requestUrl: a,
              };
            let u = e.get(h.na2),
              c = await u.getBriefInfo({
                artistId: t,
                popularTracksCount: s,
                fetchPlaylistLikesCounts: !0,
                discographyBlockEnabled: !0,
                useClipDataFormat: !0,
              }),
              d = await u.getSimilarArtists({ artistId: t });
            return {
              artist: c,
              similarArtists: d,
              backendHostTld: o,
              locale: r,
              host: i,
              fullUrl: n,
              requestUrl: a,
            };
          } catch (t) {
            (0, v.notFound)();
          }
        });
      var C = o(5403),
        A = o(40892);
      let g = r.V5.compose(
          r.V5.model("ArtistAboutModal", {
            modal: A.KL,
            artist: r.V5.maybeNull(n.Go),
            artistType: r.V5.maybeNull(r.V5.enumeration(Object.values(C.Y))),
            description: r.V5.maybeNull(r.V5.string),
            lastMonthListeners: r.V5.maybeNull(r.V5.number),
            lastMonthListenersDelta: r.V5.optional(r.V5.number, 0),
            covers: r.V5.maybeNull(r.V5.array(r.V5.string)),
            links: r.V5.maybeNull(r.V5.array(n.Ki)),
          }),
          A.fu,
          A.Al,
        )
          .views((t) => ({
            get isArtistStatsAvailable() {
              return Number.isFinite(t.lastMonthListeners);
            },
          }))
          .actions((t) => {
            let e = {
              open(o) {
                o && (e.getData(o), t.modal.open());
              },
              getData: (0, r.ls)(function* (e) {
                let { artistsResource: o, modelActionsLogger: i } = (0, r.dU)(
                  t,
                );
                if (!t.isLoading)
                  try {
                    var l, a, s, u, c;
                    t.loadingState = h.Gui.PENDING;
                    let i = yield o.getAboutArtist({ artistId: e });
                    (t.artist = (0, n.tR)({ artist: i.artist })),
                      (t.description =
                        null !== (c = i.description) && void 0 !== c
                          ? c
                          : null),
                      (t.artistType =
                        i.artistType === C.Y.COMPOSER
                          ? C.Y.COMPOSER
                          : C.Y.ARTIST),
                      i.stats &&
                        Number.isFinite(
                          null === (l = i.stats) || void 0 === l
                            ? void 0
                            : l.lastMonthListeners,
                        ) &&
                        (t.lastMonthListeners = i.stats.lastMonthListeners),
                      i.stats &&
                        Number.isFinite(
                          null === (a = i.stats) || void 0 === a
                            ? void 0
                            : a.lastMonthListenersDelta,
                        ) &&
                        (t.lastMonthListenersDelta =
                          i.stats.lastMonthListenersDelta);
                    let d =
                      null === (s = i.covers) || void 0 === s
                        ? void 0
                        : s.map((t) => t.uri).filter((t) => !!t);
                    d && (t.covers = (0, r.pj)(d)),
                      (t.links = (0, r.pj)(
                        null === (u = i.links) || void 0 === u
                          ? void 0
                          : u.map(n.BT),
                      )),
                      t.loadingState !== h.Gui.IDLE &&
                        (t.loadingState = h.Gui.RESOLVE);
                  } catch (e) {
                    i.error(e),
                      t.loadingState !== h.Gui.IDLE &&
                        (t.loadingState = h.Gui.REJECT);
                  }
              }),
              close() {
                t.modal.close(), e.reset();
              },
              onOpenChange(o) {
                t.modal.onOpenChange(o), o || e.reset();
              },
              reset() {
                (t.loadingState = h.Gui.IDLE),
                  (t.description = null),
                  (t.lastMonthListeners = null),
                  (t.lastMonthListenersDelta = 0),
                  (t.artistType = null),
                  t.destroyItems([t.artist, t.covers, t.links]);
              },
            };
            return e;
          }),
        y = r.V5.model("ArtistBrandedButton", {
          title: r.V5.maybeNull(r.V5.string),
          url: r.V5.maybeNull(r.V5.string),
        }),
        k = r.V5.model("ArtistMeta", {
          artist: n.Go,
          donationUrl: r.V5.maybe(r.V5.string),
          lastMonthListeners: r.V5.maybe(r.V5.number),
          brandedButton: r.V5.maybe(y),
          covers: r.V5.maybeNull(r.V5.array(r.V5.string)),
        }).views((t) => ({
          get hasCovers() {
            var e;
            return !!(null === (e = t.covers) || void 0 === e
              ? void 0
              : e.length);
          },
        })),
        M = r.V5.model("ArtistTop", {
          artist: n.Go,
          listenTimeSeconds: r.V5.number,
          top: r.V5.maybe(l.BH),
        })
          .views((t) => ({
            get isAvailableForPlaying() {
              if (void 0 === t.artist.counts) return !0;
              return t.artist.counts.tracks > 0;
            },
          }))
          .actions((t) => ({
            getKey: (e) => "".concat(e, "_").concat(t.artist.id),
          }));
      var T = o(55360),
        j = o(22703),
        N = o(66037),
        B = o(24807);
    },
    55360: function (t, e, o) {
      "use strict";
      o.d(e, {
        ArtistAboutModal: function () {
          return E;
        },
      });
      var r = o(75441),
        i = o(62569),
        n = o(65067),
        l = o(9317),
        a = o(14218),
        s = o(68208),
        u = o(69756),
        c = o(59506),
        d = o(13534),
        _ = o(97141),
        m = o(58512),
        f = o.n(m),
        v = o(55188),
        p = o(39201),
        b = o(17392),
        h = o(64353),
        x = o(15937),
        C = o(93093),
        A = o(39054),
        g = o(58020),
        y = o.n(g);
      let k = (0, i.Pi)((t) => {
        let { covers: e } = t,
          { formatMessage: o } = (0, l.Z)(),
          {
            modals: { imageSliderModal: i, artistAboutModal: n },
          } = (0, d.oR4)(),
          a = e.slice(0, 1),
          u = e.length - 2 + 1,
          c = (0, C.W)((t) => () => {
            n.close(), i.openImages(e, t);
          });
        return (0, r.jsxs)("div", {
          className: y().root,
          children: [
            a.map((t, e) =>
              (0, r.jsx)(
                s.Button,
                {
                  className: y().button,
                  onClick: c(e),
                  "aria-label": o({ id: "slider.view-artist-covers" }),
                  children: (0, r.jsx)(A.Image, {
                    fit: "contain",
                    className: y().image,
                    src: t,
                    size: 400,
                    withAvatarReplace: !0,
                  }),
                },
                e,
              ),
            ),
            e[1] &&
              (0, r.jsxs)(s.Button, {
                className: y().button,
                onClick: c(1),
                "aria-label": o({ id: "slider.view-artist-covers" }),
                children: [
                  (0, r.jsx)(A.Image, {
                    fit: "contain",
                    className: y().image,
                    src: e[1],
                    size: 400,
                    withAvatarReplace: !0,
                  }),
                  (0, r.jsx)("div", {
                    className: y().moreCovers,
                    children: (0, r.jsx)(b.Caption, {
                      variant: "span",
                      className: y().moreCoversText,
                      size: "m",
                      weight: "medium",
                      children: (0, r.jsx)(x.Z, {
                        id: "slider.images-left-count",
                        values: { imagesLeft: u },
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      });
      var M = o(75583),
        T = o.n(M);
      let j = (0, i.Pi)(() => {
        var t, e, o, i, n, a, s;
        let { formatMessage: u } = (0, l.Z)(),
          {
            modals: { artistAboutModal: c },
          } = (0, d.oR4)(),
          { state: _, setState: m } = (0, v.O)(!1),
          f = (0, h.Hb)(c.artistType);
        return (0, r.jsxs)("div", {
          className: T().root,
          children: [
            c.isResolved &&
              (0, r.jsxs)("header", {
                className: T().header,
                children: [
                  (0, r.jsx)(b.Caption, {
                    variant: "div",
                    type: "text",
                    size: "m",
                    weight: "medium",
                    className: T().subtitle,
                    children: f,
                  }),
                  (0, r.jsx)(b.Heading, {
                    size: "xxl",
                    variant: "div",
                    className: T().title,
                    children:
                      null === (t = c.artist) || void 0 === t ? void 0 : t.name,
                  }),
                ],
              }),
            c.description &&
              (0, r.jsx)(p.f, {
                moreText: u({ id: "track-modal.read-more" }),
                className: T().descriptionWrapper,
                buttonClassName: T().readMoreButton,
                open: _,
                onOpenChange: m,
                lineClamp: 7,
                withFade: !0,
                children: (0, r.jsx)(b.Caption, {
                  variant: "div",
                  className: T().description,
                  size: "l",
                  weight: "medium",
                  children: c.description,
                }),
              }),
            c.isArtistStatsAvailable &&
              (0, r.jsx)(h.nO, {
                lastMonthListeners:
                  null !== (a = c.lastMonthListeners) && void 0 !== a ? a : 0,
                lastMonthListenersDelta: c.lastMonthListenersDelta,
              }),
            c.isResolved &&
              (0, r.jsx)(h.eo, {
                className: T().bandlinkScanner,
                artistId:
                  null === (e = c.artist) || void 0 === e ? void 0 : e.id,
                artistName:
                  null === (o = c.artist) || void 0 === o ? void 0 : o.name,
              }),
            c.links &&
              (null === (i = c.links) || void 0 === i ? void 0 : i.length) >
                0 &&
              (0, r.jsx)(h.XZ, {
                links: c.links,
                artistName:
                  null !==
                    (s =
                      null === (n = c.artist) || void 0 === n
                        ? void 0
                        : n.name) && void 0 !== s
                    ? s
                    : "",
              }),
            c.covers &&
              c.covers.length > 0 &&
              (0, r.jsx)(k, { covers: c.covers }),
          ],
        });
      });
      var N = o(28676),
        B = o(51184),
        w = o.n(B);
      let S = () =>
          (0, r.jsxs)("div", {
            className: w().root,
            children: [
              (0, r.jsx)(N.Shimmer, { className: w().entityName }),
              (0, r.jsx)(N.Shimmer, { className: w().title }),
              (0, r.jsx)(_.Yh, { count: 4 }),
            ],
          }),
        E = (0, i.Pi)(() => {
          let { formatMessage: t } = (0, l.Z)(),
            { notify: e } = (0, d.d$W)(),
            { contentRef: o } = (0, d.$Y6)(),
            {
              modals: { artistAboutModal: i },
              settings: { isMobile: m },
            } = (0, d.oR4)();
          (0, n.useEffect)(() => {
            i.isRejected &&
              (e(
                (0, r.jsx)(_.Q, {
                  error: t({
                    id: "artist-errors.error-during-loading-artist-info",
                  }),
                }),
                { containerId: d.W$x.ERROR },
              ),
              i.close());
          }, [i, i.isRejected, t, e]);
          let v = (0, a.V)(() =>
            i.isLoading ? (0, r.jsx)(S, {}) : (0, r.jsx)(j, {}),
          );
          return (0, r.jsxs)(c.u, {
            placement: m ? "default" : "right",
            size: m ? "fullscreen" : "fitContent",
            open: i.modal.isOpened,
            onClose: i.close,
            contentClassName: f().modalContent,
            headerClassName: f().header,
            className: f().root,
            overlayClassName: f().overlay,
            onOpenChange: i.onOpenChange,
            labelClose: t({ id: "interface-actions.close" }),
            portalNode: m ? null : o,
            showHeader: !1,
            children: [
              (0, r.jsx)(s.Button, {
                radius: "round",
                color: "secondary",
                size: "xxs",
                icon: (0, r.jsx)(u.Icon, { variant: "close", size: "xxs" }),
                className: f().closeButton,
                onClick: i.close,
                "aria-label": t({ id: "interface-actions.close" }),
              }),
              v,
            ],
          });
        });
    },
    22703: function (t, e, o) {
      "use strict";
      o.d(e, {
        ArtistCard: function () {
          return y;
        },
      });
      var r = o(75441),
        i = o(32358),
        n = o(62569),
        l = o(65067),
        a = o(9317),
        s = o(4875),
        u = o(35846),
        c = o(84638),
        d = o(93093),
        _ = o(14218),
        m = o(18333),
        f = o(69756),
        v = o(59091),
        p = o(17392),
        b = o(64353),
        h = o(13534),
        x = o(97141),
        C = o(66037),
        A = o(24630),
        g = o.n(A);
      let y = (0, n.Pi)((t) => {
        let {
            artist: e,
            className: o,
            children: n,
            contentLinesCount: A,
            topTitleElement: y,
            bottomTitleElement: k,
          } = t,
          { ref: M, intersectionPropertyId: T } = (0, h.VfV)(),
          { trailer: j, user: N } = (0, h.oR4)(),
          { from: B, utmLink: w } = (0, h.MhG)({
            contextId: e.id,
            contextType: c.A.Artist,
          }),
          { formatMessage: S } = (0, a.Z)(),
          [E, R] = (0, l.useState)(!1),
          [L, P] = (0, l.useState)(!1),
          [F, I] = (0, l.useState)(!1),
          {
            sendLikeSearchFeedback: O,
            sendNavigateSearchFeedback: W,
            sendPlaySearchFeedback: D,
          } = (0, h.sAF)(),
          z = (0, h.zxW)(),
          V = (0, h.lAI)(),
          U = (0, b.SB)(e),
          G = (0, b.BV)(e),
          { id: H, name: q, coverUri: K, isLiked: Y } = e,
          Z = (0, h.s0h)(e.url),
          X = (0, h.s0h)(e.url, !0),
          [J, Q] = (0, l.useState)(!1),
          $ = (0, h.FTC)(),
          tt = (0, h.qsr)(),
          te = (0, d.W)((t) => {
            if ((t.stopPropagation(), tt())) {
              t.preventDefault();
              return;
            }
            j.openArtistTrailer(e.id), $(s.OB.Artist, e.id);
          }),
          to = (0, l.useMemo)(() => {
            let t = S({ id: "entity-names.artist-name" }, { artistName: q }),
              e = Y ? S({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [q, Y, S]),
          { isPlaying: tr, togglePlay: ti } = (0, h.qmq)({
            playContextParams: {
              contextData: {
                type: c.A.Artist,
                meta: { id: Number(H) },
                from: B,
                utmLink: w,
              },
              loadContextMeta: !0,
            },
          }),
          tn = (0, b.v2)({ artist: e, callback: Z }),
          tl = (0, b.v2)({ artist: e, callback: X }),
          ta = (0, b.v2)({ artist: e, callback: ti }),
          ts = (0, b.ik)(tl, tn),
          tu = (0, d.W)((t) => {
            null == W || W(), z({ to: s.qU.ArtistScreen }), ts(t);
          }),
          tc = (0, d.W)((t) => {
            tu(t);
          }),
          td = (0, d.W)(() => {
            tt() || (E || tr || (R(!0), null == D || D()), ta(), V(!tr));
          }),
          t_ = (0, d.W)(() => {
            L || Y || (P(!0), null == O || O()), U();
          }),
          tm = (0, d.W)((t) => {
            t.preventDefault(), t.stopPropagation();
          }),
          tf = (0, d.W)((t) => {
            I(t), Q(t);
          }),
          tv = (0, l.useMemo)(
            () =>
              (0, r.jsx)(
                C.ArtistContextMenu,
                {
                  artist: e,
                  onOpenChange: tf,
                  open: F,
                  onClick: tm,
                  className: (0, i.W)(g().menuButton, g().control),
                  size: "s",
                  icon: (0, r.jsx)(f.Icon, { size: "xxs", variant: "more" }),
                },
                e.getKey("ArtistContextMenu"),
              ),
            [e, tm, tf, F],
          ),
          tp = (0, l.useMemo)(() => {
            var t;
            if (
              null == e
                ? void 0
                : null === (t = e.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable
            )
              return (0, r.jsx)(
                x.xf,
                {
                  children: (0, r.jsx)(x.eP, {
                    className: (0, i.W)(g().trailerButton, g().control),
                    radius: "round",
                    size: "s",
                    iconSize: "xxs",
                    onClick: te,
                  }),
                },
                e.getKey("ArtistCardTrailerTooltip"),
              );
          }, [e, te]),
          tb = (0, l.useMemo)(
            () =>
              (0, r.jsx)(
                x.RT,
                {
                  onClick: G,
                  isPinned: e.isPinned,
                  className: (0, i.W)(g().pinButton, g().control),
                  withRipple: !1,
                },
                e.getKey("PinButton"),
              ),
            [e, G],
          ),
          th = (0, _.V)(() => {
            if (e.isAvailable)
              return (0, r.jsx)(
                m.kk,
                {
                  isVisible: F || J,
                  className: g().controls,
                  radius: "round",
                  playControl: (0, r.jsx)(
                    x.JM,
                    {
                      buttonVariant: "default",
                      withHover: !1,
                      className: (0, i.W)(g().playButton, g().control),
                      iconSize: "xl",
                      variant: "filled",
                      onClick: td,
                      isPlaying: tr,
                      disabled: !e.isAvailableForPlaying,
                    },
                    e.getKey("PlayButton"),
                  ),
                  likeControl: (0, r.jsx)(
                    x.dJ,
                    {
                      className: (0, i.W)(g().likeButton, g().control),
                      isLiked: Y,
                      onClick: t_,
                      variant: "default",
                      size: "s",
                      iconSize: "xxs",
                      disabled: !N.isAuthorized,
                    },
                    e.getKey("LikeButton"),
                  ),
                  menuControl: tv,
                  pinControl: tb,
                  trailerControl: tp,
                },
                e.getKey("ArtistCardControls"),
              );
          }),
          tx = (0, l.useMemo)(
            () =>
              (0, r.jsx)(v.Paper, {
                className: g().cover,
                radius: "round",
                withShadow: !0,
                ...(0, u.BA)(u.bG.artist.ARTIST_CARD),
                children: (0, r.jsxs)("div", {
                  className: g().coverBlock,
                  onClick: tc,
                  children: [
                    (0, r.jsx)(x.BE, {
                      className: g().image,
                      src: K,
                      size: 200,
                      fit: "cover",
                      alt: to,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    th,
                  ],
                }),
              }),
            [tc, K, to, e.isAvailable, th],
          );
        return (0, r.jsx)(m.m7, {
          ref: M,
          className: (0, i.W)(g().root, o),
          textPosition: "center",
          "aria-label": to,
          title: (0, r.jsxs)(r.Fragment, {
            children: [
              y,
              (0, r.jsx)(p.Caption, {
                variant: "div",
                type: "entity",
                size: "s",
                weight: "medium",
                lineClamp: 2,
                children: (0, r.jsx)(x.rU, {
                  className: g().titleLink,
                  href: e.url,
                  "aria-label": to,
                  onClick: tu,
                  ...(0, u.BA)(u.bG.artist.ARTIST_TITLE),
                  children: q,
                }),
              }),
              k,
            ],
          }),
          srTitle: (0, r.jsx)(x.rU, { href: e.url, onClick: tu, children: to }),
          "data-intersection-property-id": T,
          contentLinesCount: A,
          view: tx,
          ...(0, u.BA)(u.bG.artist.ARTIST_ITEM),
          children: n,
        });
      });
    },
    66037: function (t, e, o) {
      "use strict";
      o.d(e, {
        ArtistContextMenu: function () {
          return p;
        },
      });
      var r = o(75441),
        i = o(62569),
        n = o(9317),
        l = o(4875),
        a = o(35846),
        s = o(84638),
        u = o(93093),
        c = o(69756),
        d = o(27376),
        _ = o(64353),
        m = o(50705),
        f = o(13534),
        v = o(97141);
      let p = (0, i.Pi)((t) => {
        var e, o, i;
        let { artist: p, onOpenChange: b, open: h, ...x } = t,
          { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: A } =
            (0, f.vLf)(),
          {
            settings: { isMobile: g },
            modals: { artistAboutModal: y },
            trailer: k,
            user: M,
            experiments: T,
          } = (0, f.oR4)(),
          j = (0, _.BV)(p),
          N = (0, _.SB)(p),
          B = (0, _.KX)(p),
          w = (0, f.FTC)(),
          S = "".concat(f.aUg.ARTIST, "-").concat(null == p ? void 0 : p.id),
          { formatMessage: E } = (0, n.Z)(),
          { utmLink: R } = (0, f.MhG)({
            blockId: f.aUg.ARTIST,
            contextType: s.A.Artist,
            contextId: null == p ? void 0 : p.id,
          }),
          { href: L } = (0, f.qKB)(
            null !== (o = null == p ? void 0 : p.url) && void 0 !== o ? o : "",
          ),
          P = (0, m.q3)({
            entityVariant: f.gus.ARTIST,
            urlParams: { id: null == p ? void 0 : p.id },
          }),
          { isPlaying: F, togglePlay: I } = (0, f.QhE)({
            seeds:
              null !== (i = null == p ? void 0 : p.seeds) && void 0 !== i
                ? i
                : [],
            pageIdForFrom: f.Rhz.RADIO,
            blockIdForFrom: S,
          }),
          O = (0, f.qsr)(),
          W = E(
            (null == p ? void 0 : p.isComposer)
              ? { id: "artist.about-composer" }
              : { id: "artist.about-artist" },
          ),
          D = (0, u.W)(() => {
            if (C && M.isAuthorized) {
              A();
              return;
            }
            F || I();
          }),
          z = (0, u.W)(() => {
            if (!O()) {
              if (C) {
                A();
                return;
              }
              (null == p ? void 0 : p.id) &&
                (k.setUtmLink(R),
                k.openArtistTrailer(p.id),
                w(l.OB.Artist, p.id));
            }
          }),
          V = (0, u.W)(() => {
            y.open(null == p ? void 0 : p.id);
          });
        (0, f.ZP4)(h);
        let U = {
            variant: f.GGO.ARTIST,
            id: null == p ? void 0 : p.id,
            title: null == p ? void 0 : p.name,
            path: null == p ? void 0 : p.url,
          },
          G = T.checkExperiment(f.peG.WebEditorsFeatures, "on"),
          H =
            null == p
              ? void 0
              : null === (e = p.trailer) || void 0 === e
                ? void 0
                : e.isAvailable,
          q = T.checkExperiment(f.peG.WebNextArtistInfo, "on");
        return (0, r.jsxs)(d.v2, {
          isMobile: g,
          offsetOptions: 10,
          open: h,
          onOpenChange: b,
          ariaLabel: E({ id: "interface-actions.context-menu" }),
          containerProps: (0, a.BA)(a.bG.artist.ARTIST_CONTEXT_MENU),
          ...x,
          children: [
            G &&
              (0, r.jsx)(v.FM, {
                fallback: (0, r.jsx)(m.ZY, {
                  entityVariant: f.gus.ARTIST,
                  adminUrl: P,
                }),
              }),
            !g &&
              (0, r.jsx)(v.FM, {
                fallback: (0, r.jsx)(v.Zd, {
                  onClick: j,
                  isPinned: null == p ? void 0 : p.isPinned,
                }),
              }),
            (0, r.jsx)(v.FM, {
              fallback: (0, r.jsx)(v.xZ, {
                onClick: N,
                isLiked: null == p ? void 0 : p.isLiked,
                disabled: !(null == p ? void 0 : p.isAvailable),
              }),
            }),
            H &&
              (0, r.jsx)(v.FM, { fallback: (0, r.jsx)(v.NB, { onClick: z }) }),
            (0, r.jsx)(v.FM, {
              fallback: (0, r.jsx)(v.GQ, {
                onClick: D,
                disabled: !(null == p ? void 0 : p.isAvailable),
                variant: f.xIL.ARTIST,
                onOpenMenuChange: b,
              }),
            }),
            (0, r.jsx)(v.zq, { disabled: !p, shareLink: L, entityMeta: U }),
            q &&
              (0, r.jsx)(v.FM, {
                fallback: (0, r.jsx)(d.sN, {
                  onClick: V,
                  icon: (0, r.jsx)(c.Icon, { variant: "info", size: "xxs" }),
                  ...(0, a.BA)(
                    a.bG.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                  ),
                  children: W,
                }),
              }),
            (0, r.jsx)(v.FM, {
              fallback: (0, r.jsx)(v.ZL, {
                onClick: B,
                isDisliked: null == p ? void 0 : p.isDisliked,
                disabled: !(null == p ? void 0 : p.isAvailable),
              }),
            }),
          ],
        });
      });
    },
    24807: function (t, e, o) {
      "use strict";
      o.d(e, {
        HorizontalArtistCard: function () {
          return A;
        },
      });
      var r = o(75441),
        i = o(32358),
        n = o(62569),
        l = o(65067),
        a = o(9317),
        s = o(4875),
        u = o(35846),
        c = o(84638),
        d = o(93093),
        _ = o(91307),
        m = o(17392),
        f = o(64353),
        v = o(13534),
        p = o(97141),
        b = o(69756),
        h = o(69217),
        x = o.n(h);
      let C = (0, n.Pi)((t) => {
          var e;
          let { className: o, artist: n, likeIconSize: a = "xxs" } = t,
            { user: u, trailer: c } = (0, v.oR4)(),
            _ = (0, v.qsr)(),
            { sendLikeSearchFeedback: m } = (0, v.sAF)(),
            h = (0, f.SB)(n),
            [C, A] = (0, l.useState)(!1),
            g = (0, d.W)(async () => {
              C || n.isLiked || (A(!0), null == m || m()), await h();
            }),
            y = (0, v.FTC)(),
            k = (0, d.W)((t) => {
              if ((t.stopPropagation(), _())) {
                t.preventDefault();
                return;
              }
              c.openArtistTrailer(n.id), y(s.OB.Artist, n.id);
            });
          return (0, r.jsxs)("div", {
            className: (0, i.W)(x().root, x().controls, o, {
              [x().controls_disabled]: !n.isAvailable,
            }),
            children: [
              n.isAvailable &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(p.FM, {
                      fallback: (0, r.jsx)(p.dJ, {
                        size: "xs",
                        iconSize: a,
                        className: (0, i.W)(x().item, x().likeIcon),
                        isLiked: n.isLiked,
                        onClick: g,
                        disabled: !u.isAuthorized,
                      }),
                    }),
                    (null === (e = n.trailer) || void 0 === e
                      ? void 0
                      : e.isAvailable) &&
                      (0, r.jsx)(p.FM, {
                        fallback: (0, r.jsx)(p.eP, {
                          className: (0, i.W)(x().item, x().trailerIcon),
                          iconSize: "xs",
                          variant: "text",
                          onClick: k,
                          withRipple: !1,
                        }),
                      }),
                  ],
                }),
              (0, r.jsx)("div", {
                className: (0, i.W)(x().item, x().item_buttonArrow),
                children: (0, r.jsx)(b.Icon, {
                  className: p.$C.buttonArrow,
                  variant: "arrowRight",
                  size: "xs",
                }),
              }),
            ],
          });
        }),
        A = (0, n.Pi)((t) => {
          let {
              className: e,
              artist: o,
              pageId: n,
              description: b,
              coverClassName: h,
              playButtonIconSize: x,
              likeIconSize: A,
            } = t,
            { formatMessage: g } = (0, a.Z)(),
            { ref: y, intersectionPropertyId: k } = (0, v.VfV)(),
            { from: M } = (0, v.MhG)({ pageId: n }),
            [T, j] = (0, l.useState)(!1),
            N = (0, v.s0h)(o.url),
            B = (0, v.s0h)(o.url, !0),
            w = (0, v.lAI)(),
            S = (0, v.qsr)(),
            { sendNavigateSearchFeedback: E, sendPlaySearchFeedback: R } = (0,
            v.sAF)(),
            L = (0, v.zxW)(),
            {
              isPlaying: P,
              isCurrent: F,
              togglePlay: I,
            } = (0, v.qmq)({
              playContextParams: {
                contextData: {
                  type: c.A.Artist,
                  meta: { id: Number(o.id) },
                  from: M,
                },
                loadContextMeta: !0,
              },
            }),
            O = (0, f.v2)({ artist: o, callback: N }),
            W = (0, f.v2)({ artist: o, callback: B }),
            D = (0, f.v2)({ artist: o, callback: I }),
            z = (0, f.ik)(W, O),
            V = (0, d.W)((t) => {
              null == E || E(), L({ to: s.qU.ArtistScreen }), z(t);
            }),
            U = (0, d.W)(() => {
              S() || (T || P || (j(!0), null == R || R()), D(), w(!P));
            }),
            G = (0, d.W)((t) => {
              (0, _.m)(t, p.$C.ripple), V(t);
            }),
            H = (0, d.W)((t) => {
              t.stopPropagation(), V(t);
            }),
            q = (0, l.useCallback)(
              (t) =>
                (0, r.jsx)(p.Df, {
                  isAvailable: o.isAvailable,
                  isDisliked: !1,
                  coverUri: o.coverUri,
                  title: o.name,
                  className: (0, i.W)(p.$C.playButtonCell, h),
                  radius: "round",
                  alt: g(
                    { id: "entity-names.artist-name" },
                    { artistName: o.name },
                  ),
                  ...t,
                }),
              [o, h, g],
            ),
            K =
              null == q
                ? void 0
                : q({
                    onPlayButtonClick: U,
                    isPlaying: P,
                    isCurrent: F,
                    playButtonIconSize: x,
                  }),
            Y = (0, l.useMemo)(
              () =>
                o.url && o.isAvailable
                  ? (0, r.jsx)(p.rU, {
                      className: (0, i.W)(p.$C.text, p.$C.titleLink),
                      href: o.url,
                      onClick: H,
                      ...(0, u.BA)(u.bG.artist.SEARCH_ARTIST_CARD_TITLE_LINK),
                      children: o.name,
                    })
                  : (0, r.jsx)(m.Caption, {
                      className: (0, i.W)(p.$C.text, p.$C.titleText),
                      size: "m",
                      variant: "div",
                      type: "text",
                      children: o.name,
                    }),
              [o.isAvailable, o.name, o.url, H],
            );
          return (0, r.jsxs)(p.Md, {
            ref: y,
            "data-intersection-property-id": k,
            className: (0, i.W)(
              p.$C.root,
              { [p.$C.root_disabled]: !o.isAvailable },
              e,
            ),
            "aria-label": o.name,
            onClick: G,
            ...(0, u.BA)(u.bG.artist.HORIZONTAL_ARTIST_CARD),
            children: [
              K,
              (0, r.jsx)(p.u, {
                isDisabled: !o.isAvailable,
                isDisliked: !1,
                likesCount: o.actualLikesCount,
                isLiked: o.isLiked,
                title: Y,
                description: b,
              }),
              (0, r.jsx)(C, {
                className: p.$C.controlsBar,
                artist: o,
                likeIconSize: A,
              }),
            ],
          });
        });
    },
    69947: function (t, e, o) {
      "use strict";
      o.d(e, {
        I7: function () {
          return _;
        },
        kl: function () {
          return m;
        },
        b4: function () {
          return f;
        },
        at: function () {
          return n;
        },
      }),
        o(81286);
      var r = o(65067),
        i = o(13534);
      let n = (t, e) => (
        (0, i.uK4)().get(i.Xt8),
        [
          (0, r.useMemo)(() => {
            if (void 0 === e) return {};
            let o = e - 17;
            return {
              "--average-color-background": t,
              transform: "translateY(".concat(e >= 17 ? 0 : o, "px)"),
              opacity: 1,
            };
          }, [e, !1, t]),
          (0, r.useMemo)(() => ({ "--average-color-background": t }), [t]),
        ]
      );
      var l = o(75441),
        a = o(71361),
        s = o(62569),
        u = o(58720),
        c = o(97141);
      let d = (t) => {
          let { element: e, scrollTop: o, isMobile: r } = t,
            i = 0.6 * e.clientHeight;
          return o + (r ? 60 : 76) >= e.offsetTop + i;
        },
        _ = (0, s.Pi)((t) => {
          let {
              children: e,
              scrollElement: o,
              outerTitle: n = "",
              headerElement: s,
              headerThreshold: _,
              shouldHideHeader: m,
            } = t,
            [f, v] = (0, r.useState)(n),
            [p, b] = (0, r.useState)(null),
            [h, x] = (0, r.useState)(null),
            [C, A] = (0, r.useState)(null),
            [g, y] = (0, r.useState)(!1),
            [k, M] = (0, r.useState)(!1),
            [T, j] = (0, r.useState)(!1),
            [N, B] = (0, r.useState)(!1),
            {
              settings: { isMobile: w },
            } = (0, i.oR4)();
          (0, r.useLayoutEffect)(() => {
            v(n);
          }, [n]);
          let S = (0, r.useCallback)(() => {
            let t = null != _ ? _ : 10,
              e = s ? Number(s.offsetTop) - t : t;
            e < 0 && (e = 0);
            let r = (t) => {
              j(t > e),
                m && B(t > 30),
                (null == p ? void 0 : p.current) &&
                  y(
                    d({
                      element: null == p ? void 0 : p.current,
                      scrollTop: t,
                      isMobile: w,
                    }),
                  ),
                (null == h ? void 0 : h.current) &&
                  M(
                    d({
                      element: null == h ? void 0 : h.current,
                      scrollTop: t,
                      isMobile: w,
                    }),
                  );
            };
            w ? r(window.scrollY) : o && r(o.scrollTop);
          }, [_, s, w, m, p, h, o]);
          (0, r.useEffect)(() => {
            w
              ? 0 === window.scrollY && j(!1)
              : (o && 0 !== o.scrollTop) || j(!1);
          }, [o, null == o ? void 0 : o.scrollTop, w]);
          let E = (0, r.useMemo)(
            () =>
              w
                ? { onScroll: (0, a.Z)(S, 200) }
                : { onScroll: (0, a.Z)(S, 200), elementRef: o },
            [S, o, w],
          );
          (0, u.v)(E);
          let R = (0, r.useMemo)(
            () => ({
              title: f,
              setTitle: v,
              titleElement: p,
              scrollElement: w ? null : o,
              setTitleElement: b,
              childElement: h,
              setChildElement: x,
              child: C,
              setChild: A,
              isScrolledChild: k,
              isScrolledTitle: g,
              isScrolling: T,
              isHeaderHidden: N,
            }),
            [f, g, p, o, T, w, C, h, k, N],
          );
          return (0, l.jsx)(c.pI.Provider, { value: R, children: e });
        }),
        m = (t) => {
          let { children: e, child: o, className: i } = t,
            { setChildElement: n, setChild: a } = (0, r.useContext)(c.pI),
            s = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              (null == s ? void 0 : s.current) && n(s), o && a(o);
            }, [s, o, n, a]),
            (0, r.useEffect)(
              () => () => {
                a(null);
              },
              [a],
            ),
            (0, l.jsx)("div", { ref: s, className: i, children: e })
          );
        },
        f = (t) => {
          let { children: e, title: o, className: i } = t,
            { setTitleElement: n, setTitle: a } = (0, r.useContext)(c.pI),
            s = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              (null == s ? void 0 : s.current) && n(s), o && a(o);
            }, [s, o, n, a]),
            (0, r.useEffect)(
              () => () => {
                a("");
              },
              [a],
            ),
            (0, l.jsx)("div", { ref: s, className: i, children: e })
          );
        };
    },
    58512: function (t) {
      t.exports = {
        root: "ArtistAboutModal_root__bmUo9",
        modalContent: "ArtistAboutModal_modalContent__RGkJk",
        header: "ArtistAboutModal_header__yLnAj",
        overlay: "ArtistAboutModal_overlay__6hToT",
        closeButton: "ArtistAboutModal_closeButton__Gnz25",
      };
    },
    75583: function (t) {
      t.exports = {
        root: "ArtistAboutModalContent_root__XGW1F",
        header: "ArtistAboutModalContent_header__ws7Ap",
        title: "ArtistAboutModalContent_title__hMO2k",
        subtitle: "ArtistAboutModalContent_subtitle__OpssN",
        descriptionWrapper: "ArtistAboutModalContent_descriptionWrapper__jNL4G",
        description: "ArtistAboutModalContent_description__KlWvL",
        readMoreButton: "ArtistAboutModalContent_readMoreButton__1ageU",
        bandlinkScanner: "ArtistAboutModalContent_bandlinkScanner__Fwv2x",
      };
    },
    58020: function (t) {
      t.exports = {
        root: "ArtistAboutModalImageSlider_root__L18Xb",
        button: "ArtistAboutModalImageSlider_button__GPXyc",
        image: "ArtistAboutModalImageSlider_image__3CTLr",
        moreCovers: "ArtistAboutModalImageSlider_moreCovers__7oDPM",
        moreCoversText: "ArtistAboutModalImageSlider_moreCoversText__W_P8L",
      };
    },
    51184: function (t) {
      t.exports = {
        root: "ArtistAboutModalShimmer_root__RWCDi",
        entityName: "ArtistAboutModalShimmer_entityName__eBJym",
        title: "ArtistAboutModalShimmer_title__0uj5d",
      };
    },
    24630: function (t) {
      t.exports = {
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
        trailerButton: "ArtistCard_trailerButton__a2NHm",
        control: "ArtistCard_control___qv5j",
      };
    },
    69217: function (t) {
      t.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "ControlsBar_root__Cb_I5",
        item: "ControlsBar_item__Bgdoc",
        item_buttonArrow: "ControlsBar_item_buttonArrow__Hpg2f",
        controls: "ControlsBar_controls__JCmC_",
        likeIcon: "ControlsBar_likeIcon__LBoka",
        trailerIcon: "ControlsBar_trailerIcon__W0fPg",
        controls_disabled: "ControlsBar_controls_disabled__gLZiS",
      };
    },
    2954: function (t, e, o) {
      "use strict";
      var r, i;
      o.d(e, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).RATING = "rating"),
        (i.YEAR = "year");
    },
    92719: function (t, e, o) {
      "use strict";
      var r, i;
      o.d(e, {
        o: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).UNKNOWN = "unknown"),
        (i.MALE = "male"),
        (i.FEMALE = "female");
    },
  },
]);
