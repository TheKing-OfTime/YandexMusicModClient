(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3555],
  {
    71920: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 57346));
    },
    58720: function (e, t, o) {
      "use strict";
      o.d(t, {
        v: function () {
          return d;
        },
      });
      var n,
        i = o(73484),
        r = o(65067),
        l = {
          6699: (e, t, o) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let n = o(352),
              i = o(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: o, throttleTimeout: r } = e,
                l = (0, i.useRef)(null),
                [s, a] = (0, i.useState)(!!o),
                c = (0, i.useMemo)(
                  () =>
                    (0, n.throttle)(() => {
                      a(!o),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          a(!!o);
                        }, t));
                    }, r),
                  [t, o, r],
                ),
                d = (0, i.useCallback)(() => {
                  a(!!o), l.current && window.clearTimeout(l.current);
                }, [o]);
              return (
                (0, i.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: s, handleDebouncedToggle: c, reset: d }
              );
            };
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
          352: (e) => {
            e.exports = i;
          },
          810: (e) => {
            e.exports = n || (n = o.t(r, 2));
          },
        },
        s = {};
      function a(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var o = (s[e] = { exports: {} });
        return l[e](o, o.exports, a), o.exports;
      }
      var c = {};
      (() => {
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.useScroll = void 0);
        let e = a(810),
          t = a(361),
          o = a(6699);
        c.useScroll = (n) => {
          let { onScroll: i, listenIsScrolling: r, elementRef: l } = n,
            { state: s, handleDebouncedToggle: a } = (0, o.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            c = (0, e.useCallback)(() => {
              r && a(), null == i || i();
            }, [r, a, i]);
          return (
            (0, e.useEffect)(() => {
              let e = (0, t.getElementFromRefOrElement)(l);
              if (null === e) return;
              let o = null != e ? e : window,
                n = { capture: !0, passive: !0 };
              return (
                o.addEventListener("scroll", c, n),
                () => o.removeEventListener("scroll", c, n)
              );
            }, [l, c]),
            s
          );
        };
      })(),
        c.__esModule;
      var d = c.useScroll;
    },
    85790: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return d;
        },
      });
      var n,
        i,
        r = o(65067),
        l = {
          5881: (e, t, o) => {
            function n() {
              for (var e, t, o = 0, n = ""; o < arguments.length; )
                (e = arguments[o++]) &&
                  (t = (function e(t) {
                    var o,
                      n,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (o = 0; o < t.length; o++)
                          t[o] && (n = e(t[o])) && (i && (i += " "), (i += n));
                      else for (o in t) t[o] && (i && (i += " "), (i += o));
                    }
                    return i;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            o.r(t), o.d(t, { clsx: () => n, default: () => i });
            let i = n;
          },
          1920: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            let n = {
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
          5682: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            let n = {
              root: "rqUESGQ8jp3tbDawOzuG",
              root_checked: "GJh5PwV9GyFuKhlG6pQz",
              icon: "aw9IoPC0GuAC7Hmf825u",
              icon_checked: "KC8t9NStVmQ1_VY54KH4",
            };
          },
          6161: (e, t, o) => {
            var n = o(810),
              i = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              s =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              a = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, o) {
              var n,
                r = {},
                c = null,
                d = null;
              for (n in (void 0 !== o && (c = "" + o),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                l.call(t, n) && !a.hasOwnProperty(n) && (r[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === r[n] && (r[n] = t[n]);
              return {
                $$typeof: i,
                type: e,
                key: c,
                ref: d,
                props: r,
                _owner: s.current,
              };
            }
            (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, o) => {
            e.exports = o(6161);
          },
          8796: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createRipple = void 0),
              (t.createRipple = function (e, t, o) {
                let n = null != o ? o : e.currentTarget,
                  i = document.createElement("span"),
                  r = Math.max(n.clientWidth, n.clientHeight),
                  l = r / 2,
                  s = n.getBoundingClientRect(),
                  a =
                    0 === e.clientX
                      ? Math.round(s.width / 2)
                      : e.clientX - s.left,
                  c =
                    0 === e.clientY
                      ? Math.round(s.height / 2)
                      : e.clientY - s.top;
                (i.style.width = "".concat(r, "px")),
                  (i.style.height = "".concat(r, "px")),
                  (i.style.left =
                    0 === e.clientX ? "0px" : "".concat(a - l, "px")),
                  (i.style.top = "".concat(c - l, "px")),
                  i.classList.add(t);
                let d = n.getElementsByClassName(t)[0];
                d && d.remove(), n.insertBefore(i, n.firstChild);
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
          8216: (e, t, o) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getElementFromRefOrElement = t.createRipple = void 0);
            var n = o(8796);
            Object.defineProperty(t, "createRipple", {
              enumerable: !0,
              get: function () {
                return n.createRipple;
              },
            });
            var i = o(361);
            Object.defineProperty(t, "getElementFromRefOrElement", {
              enumerable: !0,
              get: function () {
                return i.getElementFromRefOrElement;
              },
            });
          },
          8119: function (e, t, o) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            let i = o(9541),
              r = o(810),
              l = o(5881),
              s = o(8216),
              a = n(o(1920)),
              c = (e) => {
                let {
                    forwardRef: t,
                    isBlock: o,
                    iconPosition: n = "left",
                    children: c,
                    className: d,
                    color: u = "secondary",
                    flexIcon: _,
                    icon: p,
                    spinner: m,
                    role: f,
                    onClick: x,
                    radius: h = "m",
                    size: v,
                    type: g = "button",
                    variant: C = "default",
                    withRipple: j = !0,
                    withHover: b = !0,
                    withBorder: y = !1,
                    disabled: N,
                    iconClassName: k,
                    contentContainerClassName: M,
                    ...S
                  } = e,
                  w = (0, r.useId)(),
                  E = !r.Children.toArray(c).filter(Boolean).length,
                  T = "left" === n,
                  O = null,
                  L = (0, r.isValidElement)(m);
                if (p) {
                  var R, z;
                  O = (0, r.cloneElement)(p, {
                    className: (0, l.clsx)(
                      a.default.icon,
                      {
                        [a.default["icon_position_".concat(n)]]: n && !E,
                        [a.default.icon_withButtonSize]: !(null ===
                          (R = p.props) || void 0 === R
                          ? void 0
                          : R.size),
                      },
                      null === (z = p.props) || void 0 === z
                        ? void 0
                        : z.className,
                      k,
                    ),
                    key: w,
                  });
                }
                let P = (0, r.useMemo)(
                    () =>
                      L
                        ? (0, i.jsx)("div", {
                            className: a.default.spinnerContainer,
                            children: m,
                          })
                        : null,
                    [L, m],
                  ),
                  I = (0, r.useCallback)(
                    (e) => {
                      L ||
                        (j && (0, s.createRipple)(e, a.default.ripple),
                        null == x || x(e));
                    },
                    [L, x, j],
                  );
                return (0, i.jsx)("button", {
                  ref: t,
                  className: (0, l.clsx)(
                    a.default.root,
                    a.default["root_".concat(u, "_").concat(C)],
                    a.default["root_radius_".concat(h)],
                    a.default.root_size,
                    {
                      [a.default["root_".concat(u, "_withHover_").concat(C)]]:
                        b && !N && !L,
                      [a.default["root_size_".concat(v)]]: v,
                      [a.default.root_withoutBorder]: !y,
                      [a.default.root_withActiveSpinner]: L,
                      [a.default.block]: o,
                      [a.default.flexIcon]: _,
                      [a.default.iconOnly]: E,
                      [a.default.root_icon_left]: p && !E && T,
                      [a.default.root_icon_right]: p && !E && !T,
                    },
                    d,
                  ),
                  type: g,
                  role: f,
                  onClick: I,
                  ...S,
                  disabled: N,
                  "aria-live": L ? "polite" : "off",
                  "aria-busy": L,
                  children:
                    p || L
                      ? (0, i.jsxs)("span", {
                          className: (0, l.clsx)(
                            a.default.contentContainer,
                            { [a.default.contentContainer_block]: o },
                            M,
                          ),
                          children: [p && T && O, !E && c, p && !T && O, P],
                        })
                      : c,
                });
              };
            t.Button = (0, r.forwardRef)((e, t) =>
              (0, i.jsx)(c, { forwardRef: t, ...e }),
            );
          },
          5928: (e, t, o) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Button = void 0);
            var n = o(8119);
            Object.defineProperty(t, "Button", {
              enumerable: !0,
              get: function () {
                return n.Button;
              },
            });
          },
          7459: function (e, t, o) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Toggle = void 0);
            let i = o(9541),
              r = o(5881),
              l = o(810),
              s = o(5928),
              a = n(o(5682)),
              c = (e) => {
                let { isChecked: t } = e;
                return (0, i.jsx)("div", {
                  className: (0, r.clsx)(a.default.icon, {
                    [a.default.icon_checked]: t,
                  }),
                });
              };
            t.Toggle = (e) => {
              let {
                  className: t,
                  isChecked: o = !1,
                  onChange: n,
                  "aria-label": d,
                  "aria-describedby": u,
                  ..._
                } = e,
                [p, m] = (0, l.useState)(o),
                f = (0, l.useCallback)(() => {
                  let e = !p;
                  m(e), null == n || n(e);
                }, [p, n]);
              return (
                (0, l.useEffect)(() => {
                  m(o);
                }, [o]),
                (0, i.jsx)(s.Button, {
                  className: (0, r.clsx)(
                    a.default.root,
                    { [a.default.root_checked]: p },
                    t,
                  ),
                  radius: "xxxl",
                  variant: "default",
                  icon: (0, i.jsx)(c, { isChecked: p }),
                  withRipple: !1,
                  onClick: f,
                  role: "switch",
                  "aria-checked": p,
                  "aria-label": d,
                  "aria-describedby": u,
                  ..._,
                  color: p ? "primary" : "secondary",
                })
              );
            };
          },
          810: (e) => {
            e.exports = i || (i = o.t(r, 2));
          },
        },
        s = {};
      function a(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var o = (s[e] = { exports: {} });
        return l[e].call(o.exports, o, o.exports, a), o.exports;
      }
      (a.d = (e, t) => {
        for (var o in t)
          a.o(t, o) &&
            !a.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (a.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.Z = void 0),
        (n = a(7459)),
        Object.defineProperty(c, "Z", {
          enumerable: !0,
          get: function () {
            return n.Toggle;
          },
        });
      var d = c.Z;
      c.X;
    },
    69947: function (e, t, o) {
      "use strict";
      o.d(t, {
        I7: function () {
          return _;
        },
        kl: function () {
          return p;
        },
        b4: function () {
          return m;
        },
        at: function () {
          return r;
        },
      }),
        o(81286);
      var n = o(65067),
        i = o(13534);
      let r = (e, t) => (
        (0, i.uK4)().get(i.Xt8),
        [
          (0, n.useMemo)(() => {
            if (void 0 === t) return {};
            let o = t - 17;
            return {
              "--average-color-background": e,
              transform: "translateY(".concat(t >= 17 ? 0 : o, "px)"),
              opacity: 1,
            };
          }, [t, !1, e]),
          (0, n.useMemo)(() => ({ "--average-color-background": e }), [e]),
        ]
      );
      var l = o(75441),
        s = o(71361),
        a = o(62569),
        c = o(58720),
        d = o(97141);
      let u = (e) => {
          let { element: t, scrollTop: o, isMobile: n } = e,
            i = 0.6 * t.clientHeight;
          return o + (n ? 60 : 76) >= t.offsetTop + i;
        },
        _ = (0, a.Pi)((e) => {
          let {
              children: t,
              scrollElement: o,
              outerTitle: r = "",
              headerElement: a,
              headerThreshold: _,
              shouldHideHeader: p,
            } = e,
            [m, f] = (0, n.useState)(r),
            [x, h] = (0, n.useState)(null),
            [v, g] = (0, n.useState)(null),
            [C, j] = (0, n.useState)(null),
            [b, y] = (0, n.useState)(!1),
            [N, k] = (0, n.useState)(!1),
            [M, S] = (0, n.useState)(!1),
            [w, E] = (0, n.useState)(!1),
            {
              settings: { isMobile: T },
            } = (0, i.oR4)();
          (0, n.useLayoutEffect)(() => {
            f(r);
          }, [r]);
          let O = (0, n.useCallback)(() => {
            let e = null != _ ? _ : 10,
              t = a ? Number(a.offsetTop) - e : e;
            t < 0 && (t = 0);
            let n = (e) => {
              S(e > t),
                p && E(e > 30),
                (null == x ? void 0 : x.current) &&
                  y(
                    u({
                      element: null == x ? void 0 : x.current,
                      scrollTop: e,
                      isMobile: T,
                    }),
                  ),
                (null == v ? void 0 : v.current) &&
                  k(
                    u({
                      element: null == v ? void 0 : v.current,
                      scrollTop: e,
                      isMobile: T,
                    }),
                  );
            };
            T ? n(window.scrollY) : o && n(o.scrollTop);
          }, [_, a, T, p, x, v, o]);
          (0, n.useEffect)(() => {
            T
              ? 0 === window.scrollY && S(!1)
              : (o && 0 !== o.scrollTop) || S(!1);
          }, [o, null == o ? void 0 : o.scrollTop, T]);
          let L = (0, n.useMemo)(
            () =>
              T
                ? { onScroll: (0, s.Z)(O, 200) }
                : { onScroll: (0, s.Z)(O, 200), elementRef: o },
            [O, o, T],
          );
          (0, c.v)(L);
          let R = (0, n.useMemo)(
            () => ({
              title: m,
              setTitle: f,
              titleElement: x,
              scrollElement: T ? null : o,
              setTitleElement: h,
              childElement: v,
              setChildElement: g,
              child: C,
              setChild: j,
              isScrolledChild: N,
              isScrolledTitle: b,
              isScrolling: M,
              isHeaderHidden: w,
            }),
            [m, b, x, o, M, T, C, v, N, w],
          );
          return (0, l.jsx)(d.pI.Provider, { value: R, children: t });
        }),
        p = (e) => {
          let { children: t, child: o, className: i } = e,
            { setChildElement: r, setChild: s } = (0, n.useContext)(d.pI),
            a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == a ? void 0 : a.current) && r(a), o && s(o);
            }, [a, o, r, s]),
            (0, n.useEffect)(
              () => () => {
                s(null);
              },
              [s],
            ),
            (0, l.jsx)("div", { ref: a, className: i, children: t })
          );
        },
        m = (e) => {
          let { children: t, title: o, className: i } = e,
            { setTitleElement: r, setTitle: s } = (0, n.useContext)(d.pI),
            a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              (null == a ? void 0 : a.current) && r(a), o && s(o);
            }, [a, o, r, s]),
            (0, n.useEffect)(
              () => () => {
                s("");
              },
              [s],
            ),
            (0, l.jsx)("div", { ref: a, className: i, children: t })
          );
        };
    },
    57346: function (e, t, o) {
      "use strict";
      o.d(t, {
        SettingsPage: function () {
          return q;
        },
      });
      var n = o(75441),
        i = o(62569),
        r = o(9317),
        l = o(15937),
        s = o(35846),
        a = o(17294),
        c = o(17392),
        d = o(65067),
        u = o(88913),
        _ = o(13534),
        p = o(97141);
      let m = () => {
        let e = (0, _.uK4)().get(_.U5t),
          t = (0, _.yyu)(e.oldWebHost),
          { language: o } = (0, _.ZSk)();
        return "https://".concat(t, "/newimport?lang=").concat(o);
      };
      var f = o(59506),
        x = o(59694),
        h = o.n(x);
      let v = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            location: t,
            modals: { aboutAppModal: o },
          } = (0, _.oR4)(),
          i = (0, _.bop)(),
          s = (0, _.aMu)(),
          { language: a } = (0, _.ZSk)();
        return (0, n.jsxs)(f.u, {
          className: h().root,
          headerClassName: h().modalHeader,
          contentClassName: h().modalContent,
          title: e({ id: "settings.about-app" }),
          open: o.isOpened,
          onOpenChange: o.onOpenChange,
          onClose: o.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: e({ id: "interface-actions.close" }),
          children: [
            (0, n.jsxs)("ul", {
              className: h().list,
              children: [
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(
                        t.tld,
                        "/support/music/performers-and-copyright-holders.html?lang=",
                      )
                      .concat(a),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, {
                        id: "footer.links-copyright-holders",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/legal/music_mobile_agreement?lang=")
                      .concat(a),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, { id: "footer.links-terms" }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://music.yandex.".concat(
                      t.tld,
                      "/legal/recommendations/ru/#music",
                    ),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, {
                        id: "footer.links-recommendation-rules",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/support/music/index.html?lang=")
                      .concat(a),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(l.Z, { id: "footer.links-help" }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://github.com/TheKing-OfTime/YandexMusicModClient",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: "Репозиторий модификации на GitHub",
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: h().item,
                  children: (0, n.jsx)(p.rU, {
                    className: h().link,
                    target: "_blank",
                    href: "https://boosty.to/thekingoftime/donate",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: "Поддержать автора модификации",
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(c.Caption, {
              className: h().explicitText,
              type: "controls",
              variant: "div",
              size: "xs",
              weight: "medium",
              dangerouslySetInnerHTML: {
                __html: e({ id: "about-app.explicit-content" }),
              },
            }),
            (0, n.jsx)(c.Caption, {
              className: h().companyText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: (0, n.jsx)(l.Z, { id: "about-app.app-name" }),
            }),
            (0, n.jsx)(c.Caption, {
              className: h().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-version-short" }, { version: i }),
            }),
            (0, n.jsx)(c.Caption, {
              className: h().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-revision" }, { revision: s }),
            }),
            (0, n.jsx)(c.Caption, {
              className: h().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: "YandexMusicModClient " + window.MOD_VERSION,
            }),
            (0, n.jsx)(c.Caption, {
              className: h().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: "Host " + window.HOST_VERSION,
            }),
          ],
        });
      });
      let discordRpcSettings = (0, i.Pi)(() => {
          const [statusDisplayType, setStatusDisplayType] = (0, d.useState)(
              window.nativeSettings.get("modFeatures.discordRPC.statusDisplayType") ?? 0,
          );
          const [applicationIDForRPC, setApplicationIDForRPC] = (0, d.useState)(
              window.nativeSettings.get("modFeatures.discordRPC.applicationIDForRPC") ?? "1124055337234858005",
          );

          let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { discordRpcSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: i } = (0, _.d$W)(),
          [afkTimeout, setAfkTimeout] = (0, d.useState)(
            window.nativeSettings.get("modFeatures.discordRPC.afkTimeout"),
          ),
          [reconnectInterval, setReconnectInterval] = (0, d.useState)(
            window.nativeSettings.get(
              "modFeatures.discordRPC.reconnectInterval",
            ),
          ),
          onAfkTimeoutChange = (0, d.useCallback)(async (e) => {
            let value = Math.min(Math.max(e, 1), 30);
            setAfkTimeout(value);
            console.log(
              "modFeatures.discordRPC.afkTimeout changed. Value: ",
              value,
            );

            window.nativeSettings.set(
              "modFeatures.discordRPC.afkTimeout",
              value,
            );
          }, []),
          onReconnectIntervalChange = (0, d.useCallback)(async (e) => {
            let value = Math.min(Math.max(e, 0), 300);
            setReconnectInterval(value);
            console.log(
              "modFeatures.discordRPC.reconnectInterval changed. Value: ",
              value,
            );

            window.nativeSettings.set(
              "modFeatures.discordRPC.reconnectInterval",
              value,
            );
          }, []),
          onDiscordStatusToggle = (0, d.useCallback)(async (e) => {
            console.log("modFeatures.discordRPC.enable toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.discordRPC.enable", e);
          }, []),
          onDiscordFromYnisonToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.fromYnison toggled. Value: ",
              e,
            );
            window.nativeSettings.set("modFeatures.discordRPC.fromYnison", e);
          }, []),
          onDiscordShowButtonsToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showButtons toggled. Value: ",
              e,
            );
            window.nativeSettings.set("modFeatures.discordRPC.showButtons", e);
          }, []),
          onDiscordOverrideDeepLinksExperimentToggle = (0, d.useCallback)(
            async (e) => {
              console.log(
                "modFeatures.discordRPC.overrideDeepLinksExperiment toggled. Value: ",
                e,
              );
              window.nativeSettings.set(
                "modFeatures.discordRPC.overrideDeepLinksExperiment",
                e,
              );
            },
            [],
          ),
          onDiscordShowGitHubButtonToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showGitHubButton toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.discordRPC.showGitHubButton",
              e,
            );
          }, []),
          onDiscordShowSmallIconToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showSmallIcon toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.discordRPC.showSmallIcon",
              e,
            );
          }, []),
          onDiscordShowAlbumToggle = (0, d.useCallback)(async (e) => {
            console.log("modFeatures.discordRPC.showAlbum toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.discordRPC.showAlbum", e);
          }, []),
          onDiscordShowVersionToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showVersion toggled. Value: ",
              e,
            );
            window.nativeSettings.set("modFeatures.discordRPC.showVersion", e);
          }, []),
          onStatusDisplayTypeChange = (0, d.useCallback)(async (e) => {
              console.log("statusDisplayType changed. Value: ", e);
              window.nativeSettings.set(
                  "modFeatures.discordRPC.statusDisplayType",
                  e,
              );
              setStatusDisplayType(e);
          }, []),
              onApplicationIDForRPCChange = (0, d.useCallback)(async (e) => {
                  console.log("applicationIDForRPC changed. Value: ", e);
                  window.nativeSettings.set(
                      "modFeatures.discordRPC.applicationIDForRPC",
                      e,
                  );
                  setApplicationIDForRPC(e);
                  i(
                      (0, n.jsx)(p.Q, {
                          error:
                              "Для применения этой настройки требуется перезапуск приложения",
                      }),
                      { containerId: _.W$x.ERROR },
                  );
              }, []);
        return (0, n.jsxs)(f.u, {
          className: b().root,
          style: { "max-width": "500px" },
          title: "Discord RPC",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsxs)("ul", {
            className: `${Z().root} ${B().list}`,
            style: { width: "466px", "max-height": "600px", gap: 0 },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Включить интеграцию с Discord",
                  onChange: onDiscordStatusToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.enable",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: [
                    "Использовать Ynison",
                    (0, n.jsx)(labeledBubble, { label: "ALPHA" }),
                  ],
                  description:
                    "Использует данные о воспроизведении с других устройств",
                  onChange: onDiscordFromYnisonToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.fromYnison",
                  ),
                }),
              }),
                (0, n.jsx)("li", {
                    className: Z().item,
                    children: (0, n.jsx)(settingBarWithDropdown, {
                        title: "Тип отображения статуса",
                        description: "Что будет отображаться в коротком статусе",
                        onChange: onStatusDisplayTypeChange,
                        value: statusDisplayType,
                        direction: "bottom",
                        options: [
                            { value: 0, label: "Платформа" },
                            { value: 1, label: "Артист" },
                            { value: 2, label: "Трек" },
                        ],
                    }),
                }),
                (0, n.jsx)("li", {
                    className: Z().item,
                    children: (0, n.jsx)(settingBarWithDropdown, {
                        title: "Локализация платформы в статусе",
                        description: applicationIDForRPC === "1290778445370097674" ? "Слушает Яндекс Музыку" : "Listening to Yandex Music",
                        onChange: onApplicationIDForRPCChange,
                        value: applicationIDForRPC,
                        direction: "bottom",
                        options: [
                            { value: "1124055337234858005", label: "Английский" },
                            { value: "1290778445370097674", label: "Русский" },
                        ],
                    }),
                }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кнопки",
                  description: "Отображает кнопки-ссылки в статусе",
                  onChange: onDiscordShowButtonsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showButtons",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать Альбом",
                  description: "Отображать ли название альбома в статусе",
                  onChange: onDiscordShowAlbumToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showAlbum",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать Версию трека",
                  description: "Отображать ли версию трека в статусе",
                  onChange: onDiscordShowVersionToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showVersion",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать маленькую иконку",
                  description:
                    "Отображать ли иконку статуса воспроизведения (Playing, Paused)",
                  onChange: onDiscordShowSmallIconToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showSmallIcon",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Переопределить эксперимент Глубоких ссылок",
                  description:
                    "Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт",
                  onChange: onDiscordOverrideDeepLinksExperimentToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.overrideDeepLinksExperiment",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кнопку на Гитхаб",
                  description:
                    "Если предыдущий пункт включён, отображает кнопку установки мода",
                  onChange: onDiscordShowGitHubButtonToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showGitHubButton",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithSlider, {
                  title: "Таймер бездействия",
                  description:
                    "Через сколько в минутах активность автоматически отчистится",
                  onChange: onAfkTimeoutChange,
                  value: afkTimeout,
                  maxValue: 30,
                  minValue: 1,
                  step: 1,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithSlider, {
                  title: "Повторное подключение к Discord",
                  description:
                    "Интервал повторных попыток подключения к Discord при потере соединения (в секундах, 0 — отключает)",
                  onChange: onReconnectIntervalChange,
                  value: reconnectInterval,
                  maxValue: 300,
                  minValue: 0,
                  step: 5,
                }),
              }),
            ],
          }),
        });
      });
      let downloaderSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { downloaderSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: i } = (0, _.d$W)(),
          [useMP3, setUseMP3] = (0, d.useState)(
            window.nativeSettings?.get("modFeatures.downloader.useMP3") ??
              false,
          ),
          [useCustomPathForSessionStorage, setUseCustomPathForSessionStorage] =
            (0, d.useState)(
              window.nativeSettings?.get(
                "modFeatures.downloader.useCustomPathForSessionStorage",
              ) ?? false,
            ),
          [useDefaultPath, setUseDefaultPath] = (0, d.useState)(
            window.nativeSettings?.get(
              "modFeatures.downloader.useDefaultPath",
            ) ?? false,
          ),
          [customPathForSessionStorage, setCustomPathForSessionStorage] = (0,
          d.useState)(
            window.nativeSettings?.get(
              "modFeatures.downloader.customPathForSessionStorage",
            ) ?? "",
          ),
          [defaultPath, setDefaultPath] = (0, d.useState)(
            window.nativeSettings?.get("modFeatures.downloader.defaultPath") ??
              "",
          ),
          onUseDefaultPathToggle = (0, d.useCallback)(async (e) => {
            console.log("useDefaultPath toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.downloader.useDefaultPath",
              e,
            );
            setUseDefaultPath(e);
          }, []),
          onDefaultPathExploreClick = (0, d.useCallback)(async (e) => {
            window.nativeSettings?.setPathWithNativeDialog(
              "modFeatures.downloader.defaultPath",
              undefined,
              ["openDirectory", "showHiddenFiles"],
            );
          }, []),
          onUseMP3Toggle = (0, d.useCallback)(async (e) => {
            console.log("useMP3 toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.downloader.useMP3", e);
            setUseMP3(e);
          }, []),
          onUseCustomPathForSessionStorageToggle = (0, d.useCallback)(
            async (e) => {
              console.log("useCustomPathForSessionStorage toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.downloader.useCustomPathForSessionStorage",
                e,
              );
              setUseCustomPathForSessionStorage(e);
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onCustomPathForSessionStorageExploreClick = (0, d.useCallback)(
            async (e) => {
              window.nativeSettings?.setPathWithNativeDialog(
                "modFeatures.downloader.customPathForSessionStorage",
                undefined,
                ["openDirectory", "showHiddenFiles"],
              );
            },
            [],
          );
        return (
          (0, d.useEffect)(() => {
            window.desktopEvents?.on(
              "NATIVE_STORE_UPDATE",
              (event, key, value) => {
                if (key === "modFeatures.downloader.defaultPath") {
                  setDefaultPath(value);
                } else if (
                  key === "modFeatures.downloader.customPathForSessionStorage"
                ) {
                  setCustomPathForSessionStorage(value);
                  i(
                    (0, n.jsx)(p.Q, {
                      error:
                        "Для применения этой настройки требуется перезапуск приложения",
                    }),
                    { containerId: _.W$x.ERROR },
                  );
                }
              },
            );
          }, [i]),
          (0, n.jsx)(f.u, {
            className: b().root,
            style: { "max-width": "550px" },
            title: "Скачивание треков",
            headerClassName: B().modalHeader,
            contentClassName: B().modalContent,
            open: t.isOpened,
            onOpenChange: t.onOpenChange,
            onClose: t.close,
            size: "fitContent",
            placement: "center",
            labelClose: e({ id: "interface-actions.close" }),
            children: (0, n.jsx)("ul", {
              className: Z().root,
              style: { width: "514px" },
              children: [
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(toggleBarWithPathChooser, {
                    title: "Путь для кеша",
                    description: useCustomPathForSessionStorage
                      ? "Использовать путь ниже для кеша (в т.ч. ванильного скачивания треков)"
                      : "Использовать путь по умолчанию для кеша (в т.ч. ванильного скачивания треков)",
                    onChange: onUseCustomPathForSessionStorageToggle,
                    isChecked: useCustomPathForSessionStorage,
                    placeholder: "Укажите путь кнопкой справа",
                    inputValue: customPathForSessionStorage,
                    onClick: onCustomPathForSessionStorageExploreClick,
                  }),
                }),
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: "Скачивать в MP3",
                    description: useMP3
                      ? "Треки скачиваются в MP3"
                      : "Треки скачиваются в оригинальном формате",
                    onChange: onUseMP3Toggle,
                    isChecked: useMP3,
                  }),
                }),
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(toggleBarWithPathChooser, {
                    title: "Путь для файлов по умолчанию",
                    description: useDefaultPath
                      ? "Использовать путь по умолчанию для скачивания треков в файл"
                      : "Спрашивать путь при каждом скачивании трека",
                    onChange: onUseDefaultPathToggle,
                    isChecked: useDefaultPath,
                    placeholder: "Укажите путь кнопкой справа",
                    inputValue: defaultPath,
                    onClick: onDefaultPathExploreClick,
                  }),
                }),
              ],
            }),
          })
        );
      });
      let scrobblersSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { scrobblersSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: i } = (0, _.d$W)(),
          [userInfo, setUserInfo] = (0, d.useState)(null),
          [unauthorizedProbe, setUnauthorizedProbe] = (0, d.useState)(false),
          onLastFMLoginClick = (0, d.useCallback)(async (e) => {
            console.log("scrobble-lastfm-login triggered.");
            await window.scrobble.lastfmLogin();
          }, []),
          onLastFMLogoutClick = (0, d.useCallback)(async (e) => {
            console.log("scrobble-lastfm-logout triggered.");
            await window.scrobble.lastfmLogout();
          }, []),
          onLastFmScrobblingToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.scrobblers.lastfm.enable toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.scrobblers.lastfm.enable",
              e,
            );
          }, []),
          onLastFmAutoLikesToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.scrobblers.lastfm.autoLike toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.scrobblers.lastfm.autoLike",
              e,
            );
          }, []),
          onLastFmFromYnisonToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.scrobblers.lastfm.fromYnison toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.scrobblers.lastfm.fromYnison",
              e,
            );
          }, []);
        return (
          (0, d.useEffect)(() => {
            window.scrobble?.lastfmGetUser().then((e) => {
              setUserInfo(e);
            });
            fetch(
              "https://api.music.yandex.net/tracks/138005337:36143630",
            ).then((response) => {
              setUnauthorizedProbe(response.ok);
            });
          }, [t.isOpened]),
          (0, d.useEffect)(() => {
            window.desktopEvents?.on("LASTFM_USERINFO_UPDATE", (event, e) => {
              setUserInfo(e);
            });
          }, []),
          (0, n.jsx)(f.u, {
            className: b().root,
            title: "Скробблинг",
            headerClassName: B().modalHeader,
            contentClassName: B().modalContent,
            open: t.isOpened,
            onOpenChange: t.onOpenChange,
            onClose: t.close,
            size: "fitContent",
            placement: "center",
            labelClose: e({ id: "interface-actions.close" }),
            children: (0, n.jsx)("ul", {
              className: Z().root,
              style: { width: "-webkit-fill-available" },
              children: [
                (0, n.jsx)("li", {
                  className: Z().item,
                  ...(userInfo?.user?.image
                    ? {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        },
                      }
                    : {}),
                  children: [
                    (0, n.jsx)("div", {
                      children: userInfo?.user?.image?.[0]?.["#text"]
                        ? (0, n.jsx)("img", {
                            src: (
                              userInfo.user.image?.find(
                                (img) => img.size === "medium",
                              )?.["#text"] ||
                              userInfo.user.image?.[0]?.["#text"]
                            ).replace("64s", "avatar"), // Dirty workaround
                            alt: "Аватар",
                            style: {
                              width: 46,
                              height: 46,
                              borderRadius: "50%",
                            },
                          })
                        : null,
                    }),
                    (0, n.jsx)(w, {
                      title: userInfo
                        ? `${userInfo.user.name} (${Number(userInfo.user.playcount).toLocaleString()})`.replace(
                            " ",
                            ",",
                          )
                        : "LastFM",
                      description: userInfo
                        ? "Выйти из LastFM"
                        : "Авторизоваться в LastFM",
                      onClick: userInfo
                        ? onLastFMLogoutClick
                        : onLastFMLoginClick,
                    }),
                  ],
                }),
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: "Скробблинг в LastFM",
                    disabled: !userInfo,
                    onChange: onLastFmScrobblingToggle,
                    isChecked: window.nativeSettings.get(
                      "modFeatures.scrobblers.lastfm",
                    ),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: "Синхронизировать лайки",
                    description:
                      "Автоматически лайкает/анлайкает треки в LastFM",
                    disabled: !userInfo,
                    onChange: onLastFmAutoLikesToggle,
                    isChecked: window.nativeSettings.get(
                      "modFeatures.scrobblers.lastfm.autoLike",
                    ),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: [
                      "Использовать Ynison",
                      (0, n.jsx)(labeledBubble, { label: "ALPHA" }),
                    ],
                    description: unauthorizedProbe
                      ? "Скробблить проигрывания даже с других устройств"
                      : "Недоступно в вашем регионе или включён VPN",
                    disabled: !unauthorizedProbe,
                    onChange: onLastFmFromYnisonToggle,
                    isChecked: window.nativeSettings.get(
                      "modFeatures.scrobblers.lastfm.fromYnison",
                    ),
                  }),
                }),
              ],
            }),
          })
        );
      });
      let playerBarEnhancementsSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { playerBarEnhancementsSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: o } = (0, _.d$W)(),
          onSwapDislikeToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showDislikeButton toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showDislikeButton",
              e,
            );
            window.forcePlayerBarRerender?.();
          }, []),
          onShowRepeatButtonOnVibe = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showRepeatButtonOnVibe toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showRepeatButtonOnVibe",
              e,
            );
            window.forcePlayerBarRerender?.();
          }, []),
          onShowCodecToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark",
              e,
            );
            window.forcePlayerBarRerender?.();
          }, []),
          onAlwaysShowPlayerTimestampsToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps toggled. Value: ",
              e,
            );
            window.forcePlayerBarRerender?.();
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps",
              e,
            );
          }, []),
          onDisablePerTrackColorsToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.disablePerTrackColors toggled. Value: ",
              e,
            );
            window.forcePlayerBarRerender?.();
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.disablePerTrackColors",
              e,
            );
          }, []),
          onAlwaysWideBarToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.alwaysWideBar toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.alwaysWideBar",
              e,
            );
            o(
              (0, n.jsx)(p.Q, {
                error:
                  "Для применения этой настройки требуется перезапуск приложения",
              }),
              { containerId: _.W$x.ERROR },
            );
          }, []);
        return (0, n.jsxs)(f.u, {
          className: b().root,
          style: { "max-width": "500px" },
          title: "Панель плеера",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsxs)("ul", {
            className: Z().root,
            style: { width: "466px" },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Поменять местами Дизлайк и Лайк",
                  description:
                    "Чтобы их положение соответствовало остальным платформам",
                  onChange: onSwapDislikeToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.showDislikeButton",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Повтор трека в Моей Волне",
                  description:
                    "Кнопка повтора будет доступна даже если играет Волна",
                  onChange: onShowRepeatButtonOnVibe,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.showRepeatButtonOnVibe",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кодек",
                  description: "Отображает кодек вместо качества трека",
                  onChange: onShowCodecToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Всегда отображать временные метки",
                  description:
                    "Отображает временные метки независимо от положения курсора",
                  onChange: onAlwaysShowPlayerTimestampsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отключить цвета треков",
                  description:
                    "Панель перестанет перекрашиваться под каждый трек",
                  onChange: onDisablePerTrackColorsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.disablePerTrackColors",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Всегда расширенная",
                  description:
                    "Панель будет всегда широкой, независимо от размера окна приложения",
                  onChange: onAlwaysWideBarToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.alwaysWideBar",
                  ),
                }),
              }),
            ],
          }),
        });
      });
      let windowBehaviorSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { windowBehaviorSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: o } = (0, _.d$W)(),
          onSaveWindowDimensionsToggle = (0, d.useCallback)(async (e) => {
            console.log("saveWindowDimensionsOnRestart toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.windowBehavior.saveWindowDimensionsOnRestart",
              e,
            );
          }, []),
          onSaveWindowPositionToggle = (0, d.useCallback)(async (e) => {
            console.log("saveWindowPositionOnRestart toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.windowBehavior.saveWindowPositionOnRestart",
              e,
            );
          }, []),
          onMinimizeToTrayOnWindowCloseToggle = (0, d.useCallback)(
            async (e) => {
              console.log("minimizeToTrayOnWindowClose toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.windowBehavior.minimizeToTrayOnWindowClose",
                e,
              );
            },
            [],
          ),
          onTaskbarExtensionsEnableToggle = (0, d.useCallback)(async (e) => {
            console.log("taskBarExtensions.enable toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.taskBarExtensions.enable",
              e,
            );
            o(
              (0, n.jsx)(p.Q, {
                error:
                  "Для применения этой настройки требуется перезапуск приложения",
              }),
              { containerId: _.W$x.ERROR },
            );
          }, []),
          onTaskbarExtensionsCoverAsThumbnailToggle = (0, d.useCallback)(
            async (e) => {
              console.log(
                "taskBarExtensions.coverAsThumbnail toggled. Value: ",
                e,
              );
              window.nativeSettings.set(
                "modFeatures.taskBarExtensions.coverAsThumbnail",
                e,
              );
              o(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          );
        const [startupPage, setStartupPage] = (0, d.useState)(
          window.nativeSettings.get("modFeatures.windowBehavior.startupPage") ??
            "/",
        );
        const onStartupPageChange = (0, d.useCallback)(async (e) => {
          console.log("startupPage changed. Value: ", e);
          window.nativeSettings.set(
            "modFeatures.windowBehavior.startupPage",
            e,
          );
          setStartupPage(e);
        }, []);
        return (0, n.jsxs)(f.u, {
          className: b().root,
          style: { "max-width": "550px" },
          title: "Поведение окна",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsxs)("ul", {
            className: `${Z().root} ${B().list}`,
            style: { width: "514px", "max-height": "600px", gap: 0 },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithDropdown, {
                  title: "Стартовая страница",
                  description: "Страница по умолчанию при запуске",
                  onChange: onStartupPageChange,
                  value: startupPage,
                  direction: "bottom",
                  options: [
                    { value: "/", label: "Главная" },
                    { value: "/search", label: "Поиск" },
                    { value: "/non-music", label: "Подкасты и книги" },
                    { value: "/collection", label: "Коллекция" },
                  ],
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Сохранять размер окна",
                  description: "Сохраняет размер окна при перезапуске",
                  onChange: onSaveWindowDimensionsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.saveWindowDimensionsOnRestart",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Сохранять положение окна",
                  description: "Сохраняет положение окна при перезапуске",
                  onChange: onSaveWindowPositionToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.saveWindowPositionOnRestart",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: 'Сворачивать в трей по "крестику"',
                  description:
                    "Если включено, свернётся в трей. Иначе приложение закроется полностью",
                  onChange: onMinimizeToTrayOnWindowCloseToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.minimizeToTrayOnWindowClose",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Включить улучшенное превью окна на панели задач",
                  description:
                    "Добавляет кнопки управления воспроизведением на превью окна в панели задач",
                  onChange: onTaskbarExtensionsEnableToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.taskBarExtensions.enable",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Использовать обложку трека в превью окна",
                  description:
                    "Если трек играет, заменяет динамичное превью на картинку обложки трека",
                  onChange: onTaskbarExtensionsCoverAsThumbnailToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.taskBarExtensions.coverAsThumbnail",
                  ),
                }),
              }),
            ],
          }),
        });
      });
      let vibeBehaviorEnhancementsSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { vibeBehaviorEnhancementsSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: o } = (0, _.d$W)(),
          onAutoLaunchOnAppStartup = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup",
              e,
            );
          }, []),
          onEnableEndlessMusicToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.enableEndlessMusic toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.enableEndlessMusic",
              e,
            );
          }, []);
        return (0, n.jsxs)(f.u, {
          className: b().root,
          style: { "max-width": "550px" },
          title: "Поведение Моей Волны",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsxs)("ul", {
            className: `${Z().root} ${B().list}`,
            style: { width: "514px", "max-height": "600px", gap: 0 },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title:
                    "Запускать воспроизведение трека при старте приложения",
                  description:
                    "Запустит последний играющий трек сразу после старта приложения",
                  onChange: onAutoLaunchOnAppStartup,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.autoLaunchOnAppStartup",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Музыка без остановки",
                  description:
                    "После окончания воспроизведения очереди, запуститься волна",
                  onChange: onEnableEndlessMusicToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.enableEndlessMusic",
                  ),
                }),
              }),
            ],
          }),
        });
      });
      let vibeAnimationEnhancementsSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { vibeAnimationEnhancementsSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: o } = (0, _.d$W)(),
          [maxFps, setMaxFPS] = (0, d.useState)(
            window.nativeSettings.get(
              "modFeatures.vibeAnimationEnhancement.maxFPS",
            ),
          ),
          [intensityCoefficient, setIntensityCoefficient] = (0, d.useState)(
            window.nativeSettings.get(
              "modFeatures.vibeAnimationEnhancement.intensityCoefficient",
            ),
          ),
          [smoothDynamicEnergyCoefficient, setSmoothDynamicEnergyCoefficient] =
            (0, d.useState)(
              window.nativeSettings.get(
                "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient",
              ),
            ),
          onDisableVibeRenderingToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.disableRendering toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.disableRendering",
              e,
            );
          }, []),
          onMaxFPSchange = (0, d.useCallback)(async (e) => {
            let value = Math.max(e, 1);
            setMaxFPS(value);
            console.log(
              "modFeatures.vibeAnimationEnhancement.maxFPS changed. Value: ",
              value,
            );

            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.maxFPS",
              value,
            );
          }, []),
          onIntensityCoefficientChange = (0, d.useCallback)(async (e) => {
            let value = Math.min(Math.max(e, 0), 2.5);
            setIntensityCoefficient(value);
            console.log(
              "modFeatures.vibeAnimationEnhancement.intensityCoefficient changed. Value: ",
              value,
            );

            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.intensityCoefficient",
              value,
            );
          }, []),
          onSmoothDynamicEnergyCoefficientChange = (0, d.useCallback)(
            async (e) => {
              let value = Math.min(Math.max(e, 0.01), 1);
              setSmoothDynamicEnergyCoefficient(value);
              console.log(
                "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient changed. Value: ",
                value,
              );

              window.nativeSettings.set(
                "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient",
                value,
              );
            },
            [],
          ),
          onPlayOnAnyEntityToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.playOnAnyEntity. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.playOnAnyEntity",
              e,
            );
          }, []),
          onEnableUseDynamicEnergy = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.useDynamicEnergy toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.useDynamicEnergy",
              e,
            );
          }, []),
          onEnableSmoothDynamicEnergy = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy",
              e,
            );
          }, []);

        return (0, n.jsxs)(f.u, {
          className: b().root,
          style: { "max-width": "550px" },
          title: "Анимация Моей Волны",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsxs)("ul", {
            className: `${Z().root} ${B().list}`,
            style: { width: "514px", "max-height": "600px", gap: 0 },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Реакция анимации Волны на любые треки",
                  description:
                    "Анимация будет реагировать на треки запущенные не через Мою Волну",
                  onChange: onPlayOnAnyEntityToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.playOnAnyEntity",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Отключить отрисовку анимации Волны",
                  description:
                    "Значительно увеличивает производительность на слабом железе",
                  onChange: onDisableVibeRenderingToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.disableRendering",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithSlider, {
                  title: "Ограничение FPS",
                  description:
                    "Верхняя граница FPS. Чем больше, тем плавнее анимация",
                  onChange: onMaxFPSchange,
                  value: maxFps,
                  maxValue: Math.max(window?.DISPLAY_MAX_FPS ?? 60, maxFps),
                  minValue: 1,
                  step: 1,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithSlider, {
                  title: "Интенсивность реакции на трек",
                  description:
                    "Чем больше, тем сильнее анимация ускоряется под трек",
                  onChange: onIntensityCoefficientChange,
                  value: intensityCoefficient,
                  maxValue: 2.5,
                  minValue: 0,
                  step: 0.1,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Подстраивать скорость анимации под Энергию трека",
                  description:
                    "Анимация будет подстраивать скорость под Энергию трека в реальном времени",
                  onChange: onEnableUseDynamicEnergy,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.useDynamicEnergy",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Смягчать динамическую энергию",
                  description: "Изменения скорости трека будут более плавными",
                  onChange: onEnableSmoothDynamicEnergy,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.smoothDynamicEnergy",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(settingBarWithSlider, {
                  title: "Коэффициент смягчения энергии",
                  description:
                    "Чем меньше, тем сильнее сглаживаются изменения скорости анимации",
                  onChange: onSmoothDynamicEnergyCoefficientChange,
                  value: smoothDynamicEnergyCoefficient,
                  maxValue: 1,
                  minValue: 0.01,
                  step: 0.01,
                }),
              }),
            ],
          }),
        });
      });
      let appUpdatesSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { appUpdatesSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: i } = (0, _.d$W)(),
          onModAutoUpdateToggle = (0, d.useCallback)(
            async (e) => {
              console.log("enableModAutoUpdate toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.appAutoUpdates.enableModAutoUpdate",
                e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onAppAutoUpdateByProbabilityToggle = (0, d.useCallback)(
            async (e) => {
              console.log(
                "enableAppAutoUpdateByProbability toggled. Value: ",
                !e,
              );
              window.nativeSettings.set(
                "modFeatures.appAutoUpdates.enableAppAutoUpdateByProbability",
                !e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onAppAutoUpdateToggle = (0, d.useCallback)(
            async (e) => {
              console.log("enableAppAutoUpdate toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.appAutoUpdates.enableAppAutoUpdate",
                e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          );
        return (0, n.jsx)(f.u, {
          className: b().root,
          style: { "max-width": "550px" },
          title: "Обновления",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", {
            className: Z().root,
            style: { width: "514px" },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Проверять обновления приложения",
                  description:
                    "Проверять ли наличие обновлений приложения автоматически",
                  onChange: onAppAutoUpdateToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.appAutoUpdates.enableAppAutoUpdate",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Получать обновления приложения сразу же",
                  description:
                    "Выключает участие в получении обновлений волнами",
                  onChange: onAppAutoUpdateByProbabilityToggle,
                  isChecked: !window.nativeSettings.get(
                    "modFeatures.appAutoUpdates.enableAppAutoUpdateByProbability",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Проверять обновления модификации",
                  description:
                    "Проверять ли наличие обновлений мода автоматически",
                  onChange: onModAutoUpdateToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.appAutoUpdates.enableModAutoUpdate",
                  ),
                }),
              }),
            ],
          }),
        });
      });
      let systemSettings = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { systemSettingsModal: t },
          } = (0, _.oR4)(),
          { notify: i } = (0, _.d$W)(),
          onPreventDisplaySleepToggle = (0, d.useCallback)((e) => {
            console.log("preventDisplaySleep toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.windowBehavior.preventDisplaySleep",
              e,
            );
          }, []),
          onAutoLaunchOnSystemStartupToggle = (0, d.useCallback)(
            (e) => {
              console.log("autoLaunchOnSystemStartup toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.windowBehavior.autoLaunchOnSystemStartup",
                e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onStartMinimizedToggle = (0, d.useCallback)((e) => {
            console.log("startMinimized toggled. Value: ", e);
            window.nativeSettings.set(
              "modFeatures.windowBehavior.startMinimized",
              e,
            );
          }, []),
          onTryEnableSurroundAudioToggle = (0, d.useCallback)(
            (e) => {
              console.log("tryEnableSurroundAudio toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.tryEnableSurroundAudio",
                e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onEnableHardwareAccelerationToggle = (0, d.useCallback)(
            (e) => {
              console.log("enableHardwareAcceleration toggled. Value: ", e);
              window.nativeSettings.set(
                "modFeatures.enableHardwareAcceleration",
                e,
              );
              i(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [i],
          ),
          onToggleGlobalShortcuts = (0, d.useCallback)((e) => {
            console.log("globalShortcuts.enable toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.globalShortcuts.enable", e);
          }, []);
        return (0, n.jsx)(f.u, {
          className: b().root,
          style: { "max-width": "570px" },
          title: "Системные настройки",
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", {
            className: Z().root,
            style: { width: "536px" },
            children: [
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Включить аппаратное ускорение",
                  description:
                    "Настоятельно рекомендуется не выключать. Отключайте только в крайнем случае",
                  onChange: onEnableHardwareAccelerationToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.enableHardwareAcceleration",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Предотвращать отключение монитора",
                  description:
                    "Если включено и окно ЯМ видно на экране, монитор не уйдёт в сон от бездействия",
                  onChange: onPreventDisplaySleepToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.preventDisplaySleep",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: [
                    "Пространственный звук",
                    (0, n.jsx)(labeledBubble, { label: "ALPHA" }),
                  ],
                  description:
                    "Включает поддержку систем 5.1 / 7.1 (Учтите что звук останется в стерео)",
                  onChange: onTryEnableSurroundAudioToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.tryEnableSurroundAudio",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Запускать приложение при старте системы",
                  onChange: onAutoLaunchOnSystemStartupToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.autoLaunchOnSystemStartup",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Запускать свернутым",
                  description:
                    "Если включено, приложение запустится свернутым в трей",
                  onChange: onStartMinimizedToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.windowBehavior.startMinimized",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Глобальные горячие клавиши",
                  description:
                    "Настроить комбинации можно в Настройки -> Остальные настройки",
                  onChange: onToggleGlobalShortcuts,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.globalShortcuts.enable",
                  ),
                }),
              }),
            ],
          }),
        });
      });
      var g = o(68208),
        C = o(39054),
        j = o(84740),
        b = o.n(j);
      let y = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          {
            modals: { clearMemoryModal: t },
          } = (0, _.oR4)(),
          { notify: o } = (0, _.d$W)(),
          i = (0, _.pL3)(),
          s = (0, d.useCallback)(() => {
            i.clearAll().then(() => {
              window.onDownloadedTracksDeleted();
              t.close(),
                o(
                  (0, n.jsx)(p.Yj, {
                    message: (0, n.jsx)(c.Caption, {
                      className: b().message,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: (0, n.jsx)(l.Z, {
                        id: "offline.memory-cleared",
                      }),
                    }),
                  }),
                  { containerId: _.W$x.INFO },
                );
            });
          }, [t, o, i]);
        return (0, n.jsxs)(f.u, {
          className: b().root,
          headerClassName: b().modalHeader,
          contentClassName: b().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: [
            (0, n.jsx)(C.Image, {
              src: "/_next/static/media/clearMemory.33a5df30.png",
              className: b().image,
              fit: "contain",
              "aria-hidden": !0,
            }),
            (0, n.jsx)(c.Caption, {
              className: b().description,
              type: "text",
              variant: "div",
              size: "l",
              weight: "normal",
              children: (0, n.jsx)(l.Z, {
                id: "offline.clear-memory-description",
              }),
            }),
            (0, n.jsx)(g.Button, {
              color: "primary",
              radius: "xxxl",
              size: "default",
              onClick: s,
              children: (0, n.jsx)(l.Z, { id: "interface-actions.clear" }),
            }),
          ],
        });
      });
      var N = o(32358),
        k = o(69756),
        M = o(28821),
        S = o.n(M);
      let w = (e) => {
        let {
          title: t,
          description: o,
          onClick: i,
          descriptionProps: r,
          ...l
        } = e;
        return (0, n.jsx)(g.Button, {
          className: (0, N.W)(S().root, S().important),
          contentContainerClassName: S().contentContainer,
          icon: (0, n.jsx)(k.Icon, {
            className: S().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          onClick: i,
          isBlock: !0,
          withRipple: !1,
          withHover: !1,
          variant: "text",
          size: "xs",
          ...l,
          children: (0, n.jsxs)("div", {
            className: S().content,
            children: [
              (0, n.jsx)(c.Caption, {
                className: S().title,
                variant: "div",
                size: "l",
                weight: "bold",
                lineClamp: 1,
                children: t,
              }),
              o &&
                (0, n.jsx)(c.Caption, {
                  variant: "div",
                  type: "text",
                  size: "xs",
                  weight: "medium",
                  className: S().description,
                  ...r,
                  children: o,
                }),
            ],
          }),
        });
      };
      var E = o(14811),
        T = o.n(E);
      let O = (e) => {
        let { link: t, title: o, description: i, target: r } = e;
        return (0, n.jsxs)(p.rU, {
          className: T().root,
          containerClassName: T().container,
          textClassName: T().linkText,
          icon: (0, n.jsx)(k.Icon, {
            className: T().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          href: t,
          ...(r ? { target: r } : {}),
          children: [
            (0, n.jsx)(c.Caption, {
              className: T().title,
              variant: "div",
              size: "l",
              weight: "bold",
              lineClamp: 1,
              children: o,
            }),
            i &&
              (0, n.jsx)(c.Caption, {
                variant: "div",
                type: "text",
                size: "xs",
                weight: "medium",
                className: T().description,
                children: i,
              }),
          ],
        });
      };
      var L = o(85790),
        R = o(43181),
        sliderComponent = o(69783),
        inputComponent = o(7323),
        buttonComponent = o(68208),
        z = o.n(R);
      let P = (e) => {
        let { title: t, onChange: o, isChecked: i, description: r } = e,
          l = (0, d.useId)();
        return (0, n.jsxs)("div", {
          className: z().root,
          children: [
            (0, n.jsxs)("div", {
              className: z().textContainer,
              children: [
                (0, n.jsx)(c.Caption, {
                  className: z().title,
                  id: l,
                  variant: "div",
                  size: "l",
                  weight: "bold",
                  lineClamp: 1,
                  "aria-hidden": !0,
                  children: t,
                }),
                r &&
                  (0, n.jsx)(c.Caption, {
                    variant: "div",
                    type: "text",
                    size: "xs",
                    weight: "medium",
                    className: z().description,
                    children: r,
                  }),
              ],
            }),
            (0, n.jsx)(L.Z, {
              isChecked: i,
              "aria-describedby": l,
              onChange: o,
            }),
          ],
        });
      };

      const settingBarWithDropdown = ({
        title,
        description,
        onChange,
        value,
        options,
        direction = "bottom",
      }) => {
        const [isOpen, setIsOpen] = d.useState(false);
        const [menuWidth, setMenuWidth] = d.useState(160);
        const triggerRef = d.useRef(null);

        const handleSelect = d.useCallback(
          (val) => {
            onChange(val);
            setIsOpen(false);
          },
          [onChange, setIsOpen],
        );

        const handleClickOutside = d.useCallback(
          (event) => {
            if (isOpen && (event.target !== triggerRef.current)) {
              event.stopPropagation();
              event.preventDefault();
              setIsOpen(false);
            }
          },
          [isOpen],
        );

        d.useEffect(() => {
          document.addEventListener("click", handleClickOutside);
          return () => {
            document.removeEventListener("click", handleClickOutside);
          };
        }, [handleClickOutside]);

        d.useEffect(() => {
            if (triggerRef.current) {
                setMenuWidth(triggerRef.current.offsetWidth);
            }
        }, []);

        return n.jsxs("div", {
          className: z().root,
          children: [
            n.jsxs("div", {
              className: z().textContainer,
              children: [
                n.jsx(c.Caption, {
                  className: z().title,
                  variant: "div",
                  size: "l",
                  weight: "bold",
                  lineClamp: 1,
                  "aria-hidden": true,
                  children: title,
                }),
                description &&
                  n.jsx(c.Caption, {
                    variant: "div",
                    type: "text",
                    size: "xs",
                    weight: "medium",
                    className: z().description,
                    children: description,
                  }),
              ],
            }),
            n.jsx("div", {
              ref: triggerRef,
              onClick: () => setIsOpen((prevValue) => !prevValue),
              className:
                "settingBarWithDropdown_button Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx",
              children: [
                ,
                options.find((opt) => opt.value === value)?.label ||
                  "Select...",
                n.jsx("ul", {
                  role: "menu",
                  className: "settingBarWithDropdown_menu",
                  style: {
                    display: isOpen ? "flex" : "none",
                    flexDirection: "column",
                    width: `${menuWidth}px`,
                    top: direction === "bottom" ? "120%" : "unset",
                    bottom: direction === "top" ? "120%" : "unset",
                  },
                  children: options.map((opt) =>
                    n.jsx("li", {
                      role: "menuitem",
                      className: "settingBarWithDropdown_menuItem",
                      id: opt.value,
                      "aria-selected": value === opt.value,
                      onClick: (e) => {
                        e.stopPropagation();
                        handleSelect(opt.value);
                      },
                      children: [
                        n.jsx("span", { children: opt.label }),
                        value === opt.value &&
                          n.jsx("svg", {
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: n.jsx("path", {
                              d: "M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z",
                            }),
                          }),
                      ],
                    }),
                  ),
                }),
              ],
            }),
          ],
        });
      };

      let toggleBarWithPathChooser = (e) => {
        let {
            title: t,
            onChange: o,
            isChecked: i,
            description: r,
            placeholder: placeholder,
            disabled: disabled,
            inputValue: inputValue,
            onClick: onClick,
          } = e,
          l = (0, d.useId)();
        return (0, n.jsxs)("div", {
          style: {
            "flex-direction": "column",
            display: "flex",
            gap: "5px",
          },
          children: [
            (0, n.jsxs)("div", {
              className: z().root,
              children: [
                (0, n.jsxs)("div", {
                  className: z().textContainer,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: z().title,
                      id: l,
                      variant: "div",
                      size: "l",
                      weight: "bold",
                      lineClamp: 1,
                      "aria-hidden": !0,
                      children: t,
                    }),
                    r &&
                      (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "text",
                        size: "xs",
                        weight: "medium",
                        className: z().description,
                        children: r,
                      }),
                  ],
                }),
                (0, n.jsx)(L.Z, {
                  isChecked: i,
                  "aria-describedby": l,
                  onChange: o,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: z().root,
              style: { "justify-content": "unset", "align-items": "unset" },
              children: [
                (0, n.jsx)(inputComponent.I, {
                  containerClassName: "ToggleBarWithPathChooser_input",
                  value: inputValue,
                  placeholder: placeholder,
                  disabled: true,
                }),
                (0, n.jsx)(buttonComponent.Button, {
                  radius: "xxxl",
                  color: "secondary",
                  size: "m",
                  onClick: onClick,
                  children: "Обзор",
                }),
              ],
            }),
          ],
        });
      };

      let settingBarWithSlider = (e) => {
        let {
            title: t,
            onChange: o,
            value: i,
            minValue: minValue,
            maxValue: maxValue,
            step: step,
            description: r,
          } = e,
          l = (0, d.useId)();
        return (0, n.jsxs)("div", {
          className: z().root,
          style: {
            "flex-direction": "column",
            "align-items": "start",
          },
          children: [
            (0, n.jsxs)("div", {
              className: z().textContainer,
              children: [
                (0, n.jsx)(c.Caption, {
                  className: z().title,
                  id: l,
                  variant: "div",
                  size: "l",
                  weight: "bold",
                  lineClamp: 1,
                  "aria-hidden": !0,
                  children: t,
                }),
                r &&
                  (0, n.jsx)(c.Caption, {
                    variant: "div",
                    type: "text",
                    size: "xs",
                    weight: "medium",
                    className: z().description,
                    children: r,
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              style: {
                width: "-webkit-fill-available",
              },
              children: [
                (0, n.jsx)(c.Caption, {
                  style: {
                    "text-align": "end",
                  },
                  variant: "div",
                  type: "text",
                  size: "xs",
                  weight: "medium",
                  className: z().description,
                  children: i,
                }),
                (0, n.jsx)(sliderComponent.i, {
                  thumbSize: "s",
                  trackSize: "s",
                  value: i,
                  minValue: minValue ?? 0,
                  maxValue: maxValue ?? 2,
                  secondaryValue: maxValue ?? 1,
                  step: step ?? 0.01,
                  onChange: o,
                }),
              ],
            }),
          ],
        });
      };
      var Tooltip = o(97141);
      let labeledBubble = (e) => {
        let {
          label: label,
          color: color = "var(--ym-controls-color-primary-default-enabled)",
          tooltip: tooltip = {
            title: "Экспериментально",
            description: "Может работать некорректно",
          },
          ...i
        } = e;
        return (0, n.jsx)(Tooltip.wx, {
          title: tooltip.title,
          description: tooltip.description,
          children: (0, n.jsxs)("div", {
            style: {
              "margin-inline": "5px",
              "background-color": color,
              color: "black",
              "border-radius": "50px",
              "padding-inline": "6px",
            },
            children: label,
          }),
        });
      };

      var I = o(38955),
        B = o.n(I);
      let A = (0, i.Pi)(() => {
        let {
            modals: { shortcutsModal: e },
          } = (0, _.oR4)(),
          { formatMessage: t } = (0, r.Z)(),
          o = (0, d.useMemo)(() => {
            let e = (0, n.jsx)(
              c.Caption,
              {
                className: B().text,
                variant: "div",
                type: "text",
                size: "xs",
                weight: "normal",
                children: (0, n.jsx)(l.Z, { id: "shortcuts.or" }),
              },
              "or",
            );
            return _.ed$.map((t) => {
              let { shortcutsAction: o, formattedMessage: i } = t,
                r = _.ftz[o].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: B().button,
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "text",
                        size: "xs",
                        weight: "normal",
                        children: e,
                      }),
                    },
                    t,
                  ),
                );
              return (
                r.length > 1 && r.splice(1, 0, e),
                (0, n.jsx)(
                  "li",
                  {
                    children: (0, n.jsxs)("div", {
                      className: B().content,
                      children: [
                        (0, n.jsx)(c.Caption, {
                          className: B().text,
                          variant: "div",
                          type: "text",
                          size: "xs",
                          weight: "normal",
                          children: i,
                        }),
                        (0, n.jsx)("div", {
                          className: B().buttons,
                          children: r,
                        }),
                      ],
                    }),
                  },
                  o,
                )
              );
            });
          }, []);
        return (0, n.jsx)(f.u, {
          className: B().root,
          headerClassName: B().modalHeader,
          contentClassName: B().modalContent,
          title: t({ id: "settings.shortcuts" }),
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: t({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", { className: B().list, children: o }),
        });
      });
      var H = o(6741),
        Z = o.n(H);
      let F = (0, i.Pi)(() => {
        let e = (0, _.bop)(),
          {
            modals: {
              shortcutsModal: t,
              aboutAppModal: o,
              clearMemoryModal: i,
              discordRpcSettingsModal: discordRpcSettingsModal,
              vibeBehaviorEnhancementsSettingsModal:
                vibeBehaviorEnhancementsSettingsModal,
              vibeAnimationEnhancementsSettingsModal:
                vibeAnimationEnhancementsSettingsModal,
              playerBarEnhancementsSettingsModal:
                playerBarEnhancementsSettingsModal,
              windowBehaviorSettingsModal: windowBehaviorSettingsModal,
              appUpdatesSettingsModal: appUpdatesSettingsModal,
              scrobblersSettingsModal: scrobblersSettingsModal,
              downloaderSettingsModal: downloaderSettingsModal,
              systemSettingsModal: systemSettingsModal,
            },
            experiments: l,
            wizard: a,
            user: c,
            slam: f,
            settings: x,
          } = (0, _.oR4)(),
          h = (0, u.ji)(),
          { notify: g } = (0, _.d$W)(),
          { formatMessage: C } = (0, r.Z)(),
          j = m(),
          b = h.isAvailable && !x.isMobile,
          N =
            l.checkExperiment(_.peG.WebNextEnableDownloadControls, "on") &&
            c.hasPlus,
          k =
            l.checkExperiment(_.peG.WebNextLiteVersion, "on") &&
            x.isLiteVersionModeAvailableForToggle &&
            !0,
          M = h.isEnabled
            ? C({ id: "equalizer.enabled" })
            : C({ id: "equalizer.disabled" }),
          S = (0, d.useMemo)(
            () =>
              `${C({ id: "desktop.app-version-short" }, { version: e })} / Мод ${window.MOD_VERSION} / Хост ${window.HOST_VERSION}`,
            [!0, C, e],
          ),
          E = (0, d.useCallback)(
            async (e) => {
              (await c.setSettings({ isChildModeEnabled: e })) ===
                _.SLo.ERROR &&
                g(
                  (0, n.jsx)(p.Q, {
                    error: C({ id: "settings.failed-to-change-child-mode" }),
                  }),
                  { containerId: _.W$x.ERROR },
                );
            },
            [c, C, g],
          ),
          onShowNonMusicToggle = (0, d.useCallback)(
            async (e) => {
              console.log("taskBarExtensions.enable toggled. Value: ", e);
              window.nativeSettings.set("modFeatures.showNonMusicPage", e);
              g(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [g],
          ),
          T = (0, d.useCallback)(
            (e) => {
              f.setOfflineMode(e);
            },
            [f],
          ),
          L = (0, d.useCallback)(() => {
            i.open();
          }, [i]),
          R = (0, d.useCallback)(
            (e) => {
              if (e) {
                x.setLiteVersionMode(_.mNU.ENABLED, !0);
                return;
              }
              x.setLiteVersionMode(_.mNU.DISABLED, !0);
            },
            [x],
          ),
          onEnableYnisonRemoteControlToggle = (0, d.useCallback)(
            async (e) => {
              console.log("Ynison Remote Control toggled. Value: ", e);
              window.nativeSettings.set("enableYnisonRemoteControl", e);
              g(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [u],
          ),
          onDevtoolsToggle = (0, d.useCallback)(
            async (e) => {
              console.log("devtools toggled. Value: ", e);
              window.nativeSettings.set("enableDevTools", e);
              g(
                (0, n.jsx)(p.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: _.W$x.ERROR },
              );
            },
            [u],
          ),
          onOpenMoreSettings = (0, d.useCallback)(async (e) => {
            console.log("User navigated to config.json", e);
            window.openConfigFile();
          }, []),
          [downloadedTracksInfo, setDownloadedTracksInfo] = (0, d.useState)({
            tracksCount: undefined,
            tracksSize: undefined,
          }),
          formatBytes = (n) => {
            if (typeof n !== "number" || n < 0) {
              return "0 B";
            }

            const units = ["B", "KB", "MB", "GB"];
            let index = 0;

            while (n >= 1024 && index < units.length - 1) {
              n /= 1024;
              index++;
            }

            return `${n.toFixed(2)} ${units[index]}`;
          },
          getTrackWordForm = (number) => {
            if (
              typeof number !== "number" ||
              number < 0 ||
              !Number.isInteger(number)
            ) {
              return "треков";
            }

            const remainder10 = number % 10;
            const remainder100 = number % 100;

            if (remainder100 >= 11 && remainder100 <= 19) {
              return "треков";
            } else if (remainder10 === 1) {
              return "трек";
            } else if (remainder10 >= 2 && remainder10 <= 4) {
              return "трека";
            } else {
              return "треков";
            }
          };
        return (
          (0, d.useEffect)(() => {
            let callfunc = async () => {
              const getDownloadedTracksSize = async (t) => {
                let forkSize = 0;
                for await (let r of t.values()) {
                  if ("directory" === r.kind) {
                    forkSize += await getDownloadedTracksSize(r);
                  } else if ("file" === r.kind) {
                    try {
                      let t = await r.getFile();
                      forkSize += t.size;
                    } catch (e) {
                      console.warn("Track file is in use. Skipping...", e);
                    }
                  }
                }
                return forkSize;
              };

              const getDownloadedTracksCount = async (t) => {
                let trackCount = 0;
                for await (let r of t.values()) {
                  if ("directory" === r.kind && r.name === "tracks") {
                    trackCount = await getDownloadedTracksCount(r);
                  } else if ("file" === r.kind && !r.name.endsWith(".crswap")) {
                    trackCount += 1;
                  }
                }
                return trackCount;
              };

              const fileStorage = await window.navigator.storage.getDirectory();

              setDownloadedTracksInfo({
                tracksCount: await getDownloadedTracksCount(fileStorage),
                tracksSize: await getDownloadedTracksSize(fileStorage),
              });
            };

            window.onDownloadedTracksDeleted = () =>
              // That's a bad solution to update the info on clear memory modal close
              setDownloadedTracksInfo({
                tracksCount: 0,
                tracksSize: 0,
              });

            callfunc();
          }, []),
          (0, n.jsxs)("ul", {
            className: Z().root,
            ...(0, s.BA)(s.QM.settings.SETTINGS_LIST),
            children: [
              N &&
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: C({ id: "offline.offline-mode" }),
                    description: C({ id: "offline.offline-mode-description" }),
                    onChange: T,
                    isChecked: f.isOfflineModeEnabled,
                  }),
                }),
              N &&
                (0, n.jsxs)("li", {
                  className: Z().item,
                  children: [
                    (0, n.jsx)(w, {
                      title: C({ id: "offline.clear-memory" }),
                      description: `Скачан${downloadedTracksInfo.tracksCount % 10 === 1 && downloadedTracksInfo.tracksCount % 100 !== 11 ? "" : "о"} ${downloadedTracksInfo.tracksCount ?? "0"} ${getTrackWordForm(downloadedTracksInfo.tracksCount)} (${formatBytes(downloadedTracksInfo.tracksSize)})`,
                      onClick: L,
                    }),
                    (0, n.jsx)(y, {}),
                  ],
                }),
              k &&
                (0, n.jsx)("li", {
                  className: Z().item,
                  children: (0, n.jsx)(P, {
                    title: C({ id: "lite-version.title" }),
                    description: C({ id: "lite-version.description" }),
                    onChange: R,
                    isChecked: x.isLiteVersionModeEnabled,
                  }),
                }),
              b &&
                (0, n.jsxs)("li", {
                  className: Z().item,
                  children: [
                    (0, n.jsx)(w, {
                      title: C({ id: "equalizer.title" }),
                      description: M,
                      onClick: h.modal.open,
                      descriptionProps: (0, s.BA)(
                        s.QM.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                      ),
                      ...(0, s.BA)(s.QM.settings.SETTINGS_EQUALIZER_BUTTON),
                    }),
                    (0, n.jsx)(u.Qk, {}),
                  ],
                }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(w, {
                  title: C({ id: "settings.preferences" }),
                  description: C({ id: "settings.preferences-description" }),
                  onClick: a.modal.open,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(O, {
                  title: C({ id: "settings.import-media" }),
                  description: C({ id: "settings.import-media-description" }),
                  link: j,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: C({ id: "settings.show-child-section" }),
                  onChange: E,
                  isChecked: c.settings.isChildModeEnabled,
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Показывать раздел «Подкасты и книги»",
                  onChange: onShowNonMusicToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.showNonMusicPage",
                  ),
                }),
              }),
              (0, n.jsxs)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: C({ id: "settings.shortcuts" }),
                    onClick: t.open,
                  }),
                  (0, n.jsx)(A, {}),
                ],
              }),
              S &&
                (0, n.jsxs)("li", {
                  className: Z().item,
                  children: [
                    (0, n.jsx)(w, {
                      title: C({ id: "settings.about-app" }),
                      description: S,
                      onClick: o.open,
                    }),
                    (0, n.jsx)(v, {}),
                  ],
                }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Discord RPC",
                    description: "Настройки интеграции с Discord",
                    onClick: discordRpcSettingsModal.open,
                  }),
                  (0, n.jsx)(discordRpcSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Анимация Моей Волны",
                    description: "Настройка анимации Моей Волны",
                    onClick: vibeAnimationEnhancementsSettingsModal.open,
                  }),
                  (0, n.jsx)(vibeAnimationEnhancementsSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Поведение Моей Волны",
                    description: "Настройка поведения Моей Волны",
                    onClick: vibeBehaviorEnhancementsSettingsModal.open,
                  }),
                  (0, n.jsx)(vibeBehaviorEnhancementsSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Панель плеера",
                    description: "Настройки элементов на панели плеера",
                    onClick: playerBarEnhancementsSettingsModal.open,
                  }),
                  (0, n.jsx)(playerBarEnhancementsSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Поведение окна",
                    description: "Настройки поведения окна приложения",
                    onClick: windowBehaviorSettingsModal.open,
                  }),
                  (0, n.jsx)(windowBehaviorSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Скробблинг",
                    description: "Авторизация в Last.fm и другие настройки",
                    onClick: scrobblersSettingsModal.open,
                  }),
                  (0, n.jsx)(scrobblersSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Скачивание треков",
                    description:
                      "Настройки оффлайн прослушивания, а также скачивания в файл",
                    onClick: downloaderSettingsModal.open,
                  }),
                  (0, n.jsx)(downloaderSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Системные настройки",
                    description: "Автозапуск, аппаратное ускорение и т.п.",
                    onClick: systemSettingsModal.open,
                  }),
                  (0, n.jsx)(systemSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: [
                  (0, n.jsx)(w, {
                    title: "Обновления",
                    description:
                      "Настройки обновлений как программы, так и модификации",
                    onClick: appUpdatesSettingsModal.open,
                  }),
                  (0, n.jsx)(appUpdatesSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: [
                    "Ynison Remote",
                    (0, n.jsx)(labeledBubble, { label: "ALPHA" }),
                  ],
                  description:
                    "Даст возможность управлять этим плеером с других устройств",
                  onChange: onEnableYnisonRemoteControlToggle,
                  isChecked: window.nativeSettings.get(
                    "enableYnisonRemoteControl",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(P, {
                  title: "Режим разработчика",
                  description:
                    "Разблокирует Chromium Devtools и dev панель в правом нижнем углу",
                  onChange: onDevtoolsToggle,
                  isChecked: window.nativeSettings.get("enableDevTools"),
                }),
              }),
              (0, n.jsx)("li", {
                className: Z().item,
                children: (0, n.jsx)(w, {
                  title: "Остальные настройки",
                  description: "Откроется config.json",
                  onClick: onOpenMoreSettings,
                }),
              }),
            ],
          })
        );
      });
      var U = o(69947),
        W = o(59329),
        D = o.n(W);
      let q = (0, i.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          { contentScrollRef: t, setContentScrollRef: o } = (0, _.$Y6)(),
          i = (0, _.k67)();
        return (0, n.jsxs)(U.I7, {
          scrollElement: t,
          outerTitle: e({ id: "page.settings" }),
          children: [
            (0, n.jsx)(p.h4, {
              variant: p.bm.TEXT,
              withForwardControl: !1,
              withBackwardControl: i.canBack,
              children: (0, n.jsx)(c.Heading, {
                variant: "h2",
                weight: "bold",
                size: "xl",
                lineClamp: 1,
                children: (0, n.jsx)(l.Z, { id: "page.settings" }),
              }),
            }),
            (0, n.jsx)(a.t, {
              ref: o,
              className: D().root,
              containerClassName: D().scrollableContainer,
              ...(0, s.BA)(s.Br.settings.SETTINGS_PAGE),
              children: (0, n.jsxs)("div", {
                className: D().container,
                children: [
                  (0, n.jsx)("div", {
                    className: D().content,
                    children: (0, n.jsx)(F, {}),
                  }),
                  (0, n.jsx)(p.$_, { className: D().footer }),
                ],
              }),
            }),
          ],
        });
      });
    },
    59329: function (e) {
      e.exports = {
        root: "SettingsPage_root__BB4lC",
        scrollableContainer: "SettingsPage_scrollableContainer__qD32i",
        container: "SettingsPage_container__bIwea",
        content: "SettingsPage_content__cR6Ra",
        footer: "SettingsPage_footer__QIqyx",
      };
    },
    59694: function (e) {
      e.exports = {
        root: "AboutAppModal_root__yBvgU",
        modalHeader: "AboutAppModal_modalHeader__q1NPj",
        modalContent: "AboutAppModal_modalContent__SHO_X",
        list: "AboutAppModal_list__HfB82",
        link: "AboutAppModal_link__i3P3P",
        explicitText: "AboutAppModal_explicitText__29HUD",
        companyText: "AboutAppModal_companyText__yroW0",
        versionText: "AboutAppModal_versionText__iFb8L",
      };
    },
    84740: function (e) {
      e.exports = {
        root: "ClearMemoryModal_root__gKdij",
        modalHeader: "ClearMemoryModal_modalHeader__veasf",
        modalContent: "ClearMemoryModal_modalContent__b7yHr",
        image: "ClearMemoryModal_image__evvTq",
        description: "ClearMemoryModal_description__ue94L",
        message: "ClearMemoryModal_message__mYQpM",
      };
    },
    6741: function (e) {
      e.exports = {
        root: "Settings_root__FVVrn",
        item: "Settings_item__Ksa9h",
      };
    },
    28821: function (e) {
      e.exports = {
        icon: "SettingsListButtonItem_icon__WULZ1",
        root: "SettingsListButtonItem_root__3dtV2",
        important: "SettingsListButtonItem_important__AcEon",
        contentContainer: "SettingsListButtonItem_contentContainer__jqoKg",
        content: "SettingsListButtonItem_content___Opuo",
        title: "SettingsListButtonItem_title__npCza",
        description: "SettingsListButtonItem_description__g8_Ba",
      };
    },
    14811: function (e) {
      e.exports = {
        icon: "SettingsListLinkItem_icon__p4P_V",
        root: "SettingsListLinkItem_root__rTPC9",
        container: "SettingsListLinkItem_container__k7bhS",
        linkText: "SettingsListLinkItem_linkText__0PHlQ",
        title: "SettingsListLinkItem_title__duJnL",
        description: "SettingsListLinkItem_description__xWeAD",
      };
    },
    43181: function (e) {
      e.exports = {
        root: "SettingsListToggleItem_root__yEEYT",
        textContainer: "SettingsListToggleItem_textContainer__tRjyt",
        title: "SettingsListToggleItem_title__Xz8_Q",
        description: "SettingsListToggleItem_description__JBOzV",
      };
    },
    38955: function (e) {
      e.exports = {
        root: "ShortcutsModal_root__ro7m4",
        modalHeader: "ShortcutsModal_modalHeader__IYJ9m",
        modalContent: "ShortcutsModal_modalContent__SCpYX",
        list: "ShortcutsModal_list__eS4ox",
        text: "ShortcutsModal_text__5JJ0j",
        content: "ShortcutsModal_content__Li9Ip",
        buttons: "ShortcutsModal_buttons__o_xlC",
        button: "ShortcutsModal_button__cTIee",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        9876, 5970, 8580, 3454, 7138, 5453, 7873, 9282, 7141, 892, 7294, 7629,
        8913, 7058, 6158, 1744,
      ],
      function () {
        return e((e.s = 71920));
      },
    ),
      (_N_E = e.O());
  },
]);
