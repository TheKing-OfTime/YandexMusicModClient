(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1562],
  {
    40664: function (e, t, a) {
      "use strict";
      a.d(t, {
        N4: function () {
          return g;
        },
        Kc: function () {
          return d;
        },
        eW: function () {
          return y;
        },
        rn: function () {
          return l;
        },
      });
      var i,
        o = a(65067);
      let r = (0, o.createContext)({ data: null, isEnabled: !1 }),
        l = () => (0, o.useContext)(r);
      var n = a(22874),
        s = a(13534);
      let d = a(40892)
        .Ie.extend((e) => ({
          views: {
            get isVisible() {
              if (e.noAds || e.hasError) return !1;
              let { experiments: t, settings: a, user: i } = (0, n.yj)(e);
              if (t.checkExperiment(s.peG.WebNextDisableAds, "on")) return !1;
              return !i.hasPlus && !a.isMobile;
            },
          },
        }))
        .named("BrandedPlaylistBanner");
      var c = a(75441),
        u = a(62569),
        _ = a(9317),
        m = a(93093),
        p = a(97141);
      let v = {
          pp: "g",
          ps: "clni",
          p2: "jjwl",
          puid1: "",
          puid2: "",
          puid3: "",
        },
        x = {
          pp: "g",
          ps: "clni",
          p2: "jjzh",
          puid1: "",
          puid2: "",
          puid3: "",
        },
        g = (0, u.Pi)((e) => {
          let { className: t, creativeClassName: a, gradientClassName: i } = e,
            {
              advertBanners: {
                banners: { brandedPlaylistBanner: r },
              },
            } = (0, s.oR4)(),
            { formatMessage: l } = (0, _.Z)(),
            n = (0, m.W)(() => {
              r.setType(s.Y_4.BRANDING);
            });
          return (
            (0, o.useEffect)(
              () => () => {
                r.reset();
              },
              [r],
            ),
            (0, c.jsxs)("div", {
              className: t,
              "aria-label": l({ id: "advert.banner" }),
              children: [
                (0, c.jsx)(p.tu, {
                  className: i,
                  ownerId: s.kK$,
                  containerId: "adfox_173998931315812570",
                  params: v,
                  onLoad: n,
                  onError: r.toggleHasErrorTrue,
                  onNoAds: r.toggleNoAdsTrue,
                }),
                (0, c.jsx)(p.tu, {
                  className: a,
                  ownerId: s.kK$,
                  containerId: "adfox_174043316511852570",
                  params: x,
                  onLoad: n,
                  onError: r.toggleHasErrorTrue,
                  onNoAds: r.toggleNoAdsTrue,
                }),
              ],
            })
          );
        }),
        h = (e) =>
          "object" == typeof e &&
          null !== e &&
          !Array.isArray(e) &&
          "source" in e &&
          "adfox" === e.source &&
          "type" in e &&
          "payload" in e;
      (i || (i = {})).GRADIENT = "branded_playlist_gradient";
      let f = (e) =>
          h(e) &&
          e.type === i.GRADIENT &&
          "object" == typeof e.payload &&
          null !== e.payload &&
          !Array.isArray(e.payload) &&
          "color" in e.payload,
        y = (0, u.Pi)((e) => {
          let { children: t } = e,
            {
              advertBanners: {
                banners: { brandedPlaylistBanner: a },
              },
            } = (0, s.oR4)(),
            [i, l] = (0, o.useState)(null),
            n = (e) => {
              f(e.data) && l(e.data);
            };
          (0, o.useEffect)(
            () => (
              window.addEventListener("message", n),
              () => {
                window.removeEventListener("message", n);
              }
            ),
            [],
          );
          let d = (0, o.useMemo)(() => {
              if ((null == i ? void 0 : i.payload.color) === void 0) return {};
              let e = {
                "--playlist-branding-gradient-color-from": i.payload.color,
                "--playlist-branding-gradient-color-to": "transparent",
              };
              return null === i.payload.button
                ? e
                : {
                    ...e,
                    "--playlist-branding-button-background-color":
                      i.payload.button.backgroundColor,
                    "--playlist-branding-button-text-color":
                      i.payload.button.textColor,
                  };
            }, [
              null == i ? void 0 : i.payload.color,
              null == i ? void 0 : i.payload.button,
            ]),
            u = (0, o.useMemo)(() => {
              let e = a.isVisible && null !== i;
              return e
                ? {
                    data: { type: i.type, style: d, button: i.payload.button },
                    isEnabled: a.isVisible,
                  }
                : { data: null, isEnabled: e };
            }, [i, d, a.isVisible]);
          return (0, c.jsx)(r.Provider, { value: u, children: t });
        });
    },
    5362: function (e, t, a) {
      "use strict";
      a.d(t, {
        hx: function () {
          return en;
        },
        f3: function () {
          return eA;
        },
        LH: function () {
          return L;
        },
        HZ: function () {
          return eT;
        },
        Vm: function () {
          return te;
        },
        KC: function () {
          return S;
        },
        BV: function () {
          return T;
        },
        E9: function () {
          return tr;
        },
        ty: function () {
          return i;
        },
      });
      let i = (e) => ({
        controlSize: e ? "l" : "s",
        iconSize: e ? "m" : "xxs",
      });
      var o,
        r = a(75441),
        l = a(32358),
        n = a(62569),
        s = a(65067),
        d = a.t(s, 2),
        c = a(35846),
        u = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (o && (o += " "), (o += i));
                      else for (a in t) t[a] && (o && (o += " "), (o += a));
                    }
                    return o;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => o });
            let o = i;
          },
          9474: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = { root: "LizdJ2L0HW7JWOvPrfly" };
          },
          3641: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
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
          5153: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
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
          5818: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, a) => {
            var i = a(810),
              o = Symbol.for("react.element"),
              r = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              n =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function d(e, t, a) {
              var i,
                r = {},
                d = null,
                c = null;
              for (i in (void 0 !== a && (d = "" + a),
              void 0 !== t.key && (d = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, i) && !s.hasOwnProperty(i) && (r[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === r[i] && (r[i] = t[i]);
              return {
                $$typeof: o,
                type: e,
                key: d,
                ref: c,
                props: r,
                _owner: n.current,
              };
            }
            (t.Fragment = r), (t.jsx = d), (t.jsxs = d);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          2: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Label = void 0);
            let o = a(9541),
              r = a(5881),
              l = a(2582),
              n = i(a(9474));
            t.Label = (e) => {
              let { children: t, className: a, size: i = "s" } = e;
              return (0, o.jsx)(l.Caption, {
                variant: "div",
                type: "text",
                size: i,
                lineClamp: 1,
                className: (0, r.clsx)(n.default.root, a),
                children: t,
              });
            };
          },
          7743: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let o = a(9541),
              r = a(5881),
              l = a(810),
              n = a(4721),
              s = i(a(3641));
            (t.CaptionComponent = (e) => {
              let {
                forwardRef: t,
                variant: a,
                type: i = "text",
                size: l = "s",
                className: d,
                children: c,
                weight: u = "medium",
                ..._
              } = e;
              return (0, o.jsx)(n.Typography, {
                variant: a,
                ref: t,
                className: (0, r.clsx)(
                  s.default.root,
                  s.default["root_".concat(i, "_").concat(l)],
                  s.default["root_weight_".concat(u)],
                  d,
                ),
                ..._,
                children: c,
              });
            }),
              (t.Caption = (0, l.forwardRef)((e, a) =>
                (0, o.jsx)(t.CaptionComponent, { forwardRef: a, ...e }),
              ));
          },
          404: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let o = a(9541),
              r = a(5881),
              l = a(810),
              n = a(4721),
              s = i(a(5153));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: a,
                weight: i = "bold",
                size: l = "s",
                className: d,
                children: c,
                ...u
              } = e;
              return (0, o.jsx)(n.Typography, {
                variant: a,
                ref: t,
                className: (0, r.clsx)(
                  s.default.root,
                  s.default["root_size_".concat(l)],
                  s.default["root_weight_".concat(i)],
                  d,
                ),
                ...u,
                children: c,
              });
            }),
              (t.Heading = (0, l.forwardRef)((e, a) =>
                (0, o.jsx)(t.HeadingComponent, { forwardRef: a, ...e }),
              ));
          },
          4721: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let o = a(9541),
              r = a(5881),
              l = a(810),
              n = i(a(5818));
            function s(e) {
              let {
                  forwardRef: t,
                  style: a,
                  className: i,
                  children: l,
                  variant: s,
                  lineClamp: d,
                  ...c
                } = e,
                u = d && "string" == typeof l ? l : void 0;
              return (0, o.jsx)(s, {
                style: { ...a, WebkitLineClamp: d },
                ref: t,
                title: u,
                className: (0, r.clsx)(
                  n.default.root,
                  {
                    [n.default.root_clamp]: d && d > 0,
                    [n.default.root_clamp_oneline]: d && 1 === d,
                    [n.default.root_clamp_multiline]: d && d > 1,
                  },
                  i,
                ),
                ...c,
                children: l,
              });
            }
            (t.TypographyComponent = s),
              (t.Typography = (0, l.forwardRef)((e, t) =>
                (0, o.jsx)(s, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var i = a(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return i.Caption;
              },
            });
            var o = a(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return o.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = d;
          },
        },
        _ = {};
      function m(e) {
        var t = _[e];
        if (void 0 !== t) return t.exports;
        var a = (_[e] = { exports: {} });
        return u[e].call(a.exports, a, a.exports, m), a.exports;
      }
      (m.d = (e, t) => {
        for (var a in t)
          m.o(t, a) &&
            !m.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (m.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var p = {};
      Object.defineProperty(p, "__esModule", { value: !0 }),
        (p.Label = void 0),
        (o = m(2)),
        Object.defineProperty(p, "Label", {
          enumerable: !0,
          get: function () {
            return o.Label;
          },
        });
      var v = p.Label;
      p.__esModule;
      var x = a(17392),
        g = a(86224),
        h = a.n(g),
        f = a(9317),
        y = a(68208),
        b = a(69756),
        C = a(69947),
        P = a(13534),
        j = a(18751),
        A = a.n(j);
      let N = (0, n.Pi)((e) => {
        let {
            className: t,
            text: a = "",
            maxTextLength: i,
            minTextLength: o,
            variant: n = "input",
            shouldFinishOnKeyPress: d = !1,
            placeholder: c,
            onChangeFinish: u,
          } = e,
          [_, m] = (0, s.useState)(a),
          p = (0, s.useRef)(!1),
          v = (0, s.useRef)(null),
          x = (0, s.useCallback)((e) => {
            m(e.target.value);
          }, []),
          g = (0, s.useCallback)(
            (e) => {
              if (d && ["Enter", "Escape"].includes(e.key)) {
                var t;
                "Escape" === e.key && (p.current = !0),
                  null === (t = e.currentTarget) || void 0 === t || t.blur();
              }
            },
            [d],
          ),
          h = (0, s.useCallback)(() => {
            let e = _.trim();
            p.current || (o && e.length < o)
              ? ((p.current = !1), null == u || u(a))
              : null == u || u(e);
          }, [_, p, o, u, a]);
        (0, s.useEffect)(() => {
          v.current &&
            ((v.current.selectionStart = v.current.value.length),
            (v.current.selectionEnd = v.current.value.length));
        }, []),
          (0, s.useLayoutEffect)(() => {
            let e = v.current;
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              e.style.height = "".concat(t, "px");
            }
          }, [v, _]);
        let f = (0, s.useMemo)(
          () =>
            "textarea" === n
              ? (e) => (0, r.jsx)("textarea", { ref: v, rows: 6, ...e })
              : (e) => (0, r.jsx)("input", { ...e }),
          [n],
        );
        return (0, r.jsx)(f, {
          className: (0, l.W)(A().root, t, {
            [A().root_textarea]: "textarea" === n,
          }),
          type: "text",
          value: _,
          maxLength: i,
          onBlur: h,
          onChange: x,
          onKeyDown: g,
          placeholder: c,
          autoFocus: !0,
        });
      });
      var k = a(53229),
        w = a.n(k);
      let T = (0, n.Pi)((e) => {
          let {
              title: t = "",
              "aria-labelledby": a,
              canChange: i = !1,
              onChange: o,
              maxTitleLength: n,
              version: d = "",
              onVersionClick: u,
              className: _,
              headingVariant: m = "h2",
              withHeadingClamp: p = !0,
            } = e,
            {
              settings: { isMobile: v },
            } = (0, P.oR4)(),
            { formatMessage: g } = (0, f.Z)(),
            [h, j] = (0, s.useState)(!1),
            A = (0, s.useRef)(null),
            k = t.length + d.length > 25,
            T = (0, s.useMemo)(
              () => (v ? w().font_mobile : k ? w().font_long : w().font_short),
              [v, k],
            ),
            B = !v && i && h,
            L = (0, s.useCallback)(() => {
              var e;
              j(!0), null === (e = A.current) || void 0 === e || e.focus();
            }, []),
            H = (0, s.useCallback)(
              (e) => {
                j(!1), null == o || o(e);
              },
              [o],
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !B &&
                (0, r.jsxs)("div", {
                  className: (0, l.W)(w().root, _),
                  children: [
                    (0, r.jsx)(C.b4, {
                      title: t,
                      className: w().stickyTitle,
                      children: (0, r.jsxs)(x.Heading, {
                        variant: m,
                        id: a,
                        lineClamp: v && p ? 2 : void 0,
                        className: (0, l.W)(w().heading, {
                          [w().heading_withVersion]: d,
                        }),
                        ...(0, c.BA)(c.QM.pageHeader.ENTITY_TITLE),
                        children: [
                          (0, r.jsx)(x.Caption, {
                            className: (0, l.W)(w().font, T, w().title),
                            variant: "span",
                            children: t,
                          }),
                          d &&
                            (0, r.jsx)(x.Caption, {
                              onClick: u,
                              className: (0, l.W)(w().font, T, w().version, {
                                [w().version_withOtherVersions]: u,
                              }),
                              variant: "span",
                              ...(0, c.BA)(c.QM.pageHeader.ENTITY_VERSION),
                              children: " ".concat(d),
                            }),
                        ],
                      }),
                    }),
                    i &&
                      (0, r.jsx)("div", {
                        className: (0, l.W)(w().editButton, {
                          [w().editButton_centered]: !k && !v,
                        }),
                        children: (0, r.jsx)(y.Button, {
                          onClick: L,
                          "aria-label": g({
                            id: "playlist-actions.change-title",
                          }),
                          icon: (0, r.jsx)(b.Icon, {
                            size: "xxs",
                            variant: "pencil",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, c.BA)(c.QM.pageHeader.EDIT_TITLE_BUTTON),
                        }),
                      }),
                  ],
                }),
              B &&
                (0, r.jsx)("div", {
                  className: w().textFieldContainer,
                  children: (0, r.jsx)(N, {
                    text: t,
                    className: (0, l.W)(w().font, T, w().textField, w().title, {
                      [w().textField_long]: k && !v,
                    }),
                    onChangeFinish: H,
                    maxTextLength: n,
                    minTextLength: 1,
                    placeholder: g({ id: "playlist-actions.enter-title" }),
                    shouldFinishOnKeyPress: !0,
                  }),
                }),
            ],
          });
        }),
        B = (0, n.Pi)((e) => {
          let {
              "aria-labelledby": t,
              entityName: a,
              title: i,
              meta: o,
              controls: n,
              className: d,
              forwardRef: u,
              canChangeTitle: _ = !1,
              maxTitleLength: m,
              onTitleChange: p,
              cover: g,
              version: f,
              onVersionClick: y,
              disclaimerLabel: b,
              entityNameIcon: C,
              headingVariant: P,
              titleClassName: j,
              metaClassName: A,
              contentClassName: N,
              withHeadingClamp: k,
              entityNameClassName: w,
              logo: B,
            } = e,
            L = (0, s.useMemo)(
              () =>
                b
                  ? (0, r.jsx)("div", {
                      className: h().entityContainer,
                      children: (0, r.jsx)(v, {
                        className: h().disclaimerLabel,
                        size: "m",
                        children: b,
                      }),
                    })
                  : (0, r.jsxs)(x.Caption, {
                      variant: "div",
                      type: "text",
                      size: "m",
                      weight: "medium",
                      className: (0, l.W)(h().entityName, w),
                      ...(0, c.BA)(c.QM.pageHeader.ENTITY_NAME),
                      children: [a, C],
                    }),
              [b, a, w, C],
            );
          return (0, r.jsxs)("div", {
            className: (0, l.W)(
              h().root,
              {
                [h().root_withCover]: (0, s.isValidElement)(g),
                [h().root_withCoverAndLogo]:
                  (0, s.isValidElement)(B) && (0, s.isValidElement)(g),
              },
              d,
            ),
            ref: u,
            ...(0, c.BA)(c.QM.pageHeader.ENTITY_HEADER),
            children: [
              g && (0, r.jsx)("div", { className: h().coverCell, children: g }),
              (0, r.jsxs)("div", {
                className: (0, l.W)(h().content, N),
                children: [
                  (0, r.jsxs)("div", {
                    className: h().info,
                    children: [
                      L,
                      (0, r.jsx)(T, {
                        className: (0, l.W)(h().title, j, {
                          [h().title_withDisclaimerLabel]: !!b,
                        }),
                        title: i,
                        "aria-labelledby": t,
                        canChange: _,
                        maxTitleLength: m,
                        onChange: p,
                        version: f,
                        onVersionClick: y,
                        headingVariant: P,
                        withHeadingClamp: k,
                      }),
                      !!o &&
                        (0, r.jsx)("div", {
                          className: (0, l.W)(
                            h().meta,
                            { [h().meta_withDisclaimerLabel]: !!b },
                            A,
                          ),
                          children: o,
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: h().controls,
                    ...(0, c.BA)(c.QM.pageHeader.BASE_PAGE_HEADER_CONTROLS),
                    children: n,
                  }),
                ],
              }),
              (0, s.isValidElement)(B) &&
                (0, r.jsx)("div", { className: h().logo, children: B }),
            ],
          });
        }),
        L = (0, s.forwardRef)((e, t) => (0, r.jsx)(B, { forwardRef: t, ...e }));
      var H = a(28676),
        R = a(48224),
        M = a.n(R);
      let S = (0, n.Pi)((e) => {
        let { className: t, coverRadius: a = "m", isActive: i } = e,
          {
            settings: { isMobile: o },
          } = (0, P.oR4)(),
          n = (0, s.useMemo)(
            () =>
              o
                ? (0, r.jsxs)("div", {
                    className: M().controls,
                    children: [
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className: M().controls,
                    children: [
                      (0, r.jsx)(H.Shimmer, {
                        className: M().desktopPlayButton,
                        isActive: i,
                      }),
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, r.jsx)(H.Shimmer, {
                        className: M().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  }),
            [i, o],
          );
        return (0, r.jsxs)("div", {
          className: (0, l.W)(M().root, t),
          children: [
            (0, r.jsx)(H.Shimmer, {
              className: M().cover,
              radius: a,
              isActive: i,
            }),
            (0, r.jsxs)("div", {
              className: M().content,
              children: [
                (0, r.jsxs)("div", {
                  className: M().info,
                  children: [
                    (0, r.jsx)(H.Shimmer, {
                      className: M().entityName,
                      radius: "s",
                      isActive: i,
                    }),
                    (0, r.jsx)(H.Shimmer, {
                      className: M().title,
                      radius: "xl",
                      isActive: i,
                    }),
                    (0, r.jsx)(H.Shimmer, {
                      className: M().meta,
                      radius: "s",
                      isActive: i,
                    }),
                  ],
                }),
                n,
              ],
            }),
          ],
        });
      });
      var E = a(15937),
        I = a(84638),
        W = a(93093),
        O = a(73447),
        z = a(97141),
        D = a(4875),
        U = a(14218),
        F = a(72783),
        V = a(33749),
        Z = a.n(V);
      let Y = (0, n.Pi)((e) => {
        var t;
        let {
            album: a,
            likeButtonAriaLabel: o,
            withLikeButton: l = !0,
            donationButton: n,
          } = e,
          {
            user: d,
            settings: { isMobile: u },
            trailer: _,
          } = (0, P.oR4)(),
          [m, p] = (0, s.useState)(!1),
          v = (0, O.SB)(a),
          x = (0, O.BV)(a),
          g = (0, P.FTC)(),
          { utmLink: h } = (0, P.MhG)({
            contextId: a.id,
            contextType: I.A.Album,
          }),
          f = (0, P.qsr)(),
          { controlSize: y, iconSize: C } = i(u),
          j = (0, W.W)(() => {
            f() ||
              (_.setUtmLink(h),
              _.openAlbumTrailer(a.id),
              g(D.OB.Album, String(a.id)));
          }),
          A = (0, s.useMemo)(() => {
            var e;
            return (null === (e = a.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) && !u
              ? (0, r.jsx)(z.Wd, {
                  children: (0, r.jsx)(z.eP, {
                    size: "s",
                    radius: "xxxl",
                    iconSize: "xxs",
                    className: Z().trailerControl,
                    disabled: !a.isAvailable,
                    onClick: j,
                    children: (0, r.jsx)(E.Z, { id: "entity-names.trailer" }),
                  }),
                })
              : null;
          }, [
            null === (t = a.trailer) || void 0 === t ? void 0 : t.isAvailable,
            a.isAvailable,
            j,
            u,
          ]),
          N = (0, U.V)(() =>
            u
              ? void 0
              : (0, s.isValidElement)(n)
                ? n
                : (0, r.jsx)(z.RT, {
                    size: y,
                    iconSize: C,
                    onClick: x,
                    isPinned: a.isPinned,
                    isDisabled: !a.isAvailable,
                  }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            A,
            l &&
              (0, r.jsx)(z.dJ, {
                className: Z().likeControl,
                isLiked: a.isLiked,
                onClick: v,
                variant: "default",
                size: y,
                iconSize: C,
                withRipple: !u,
                disabled: !d.isAuthorized,
                "aria-label": o,
              }),
            (0, s.isValidElement)(N) &&
              (0, r.jsx)("div", {
                className: Z().pinOrDonationControl,
                children: N,
              }),
            (0, r.jsx)(F.oK, {
              album: a,
              open: m,
              onOpenChange: p,
              wrapperClassName: Z().menuControl,
              size: y,
              icon: (0, r.jsx)(b.Icon, { size: C, variant: "more" }),
              variant: F.y2.PAGE,
              ...(0, c.BA)(c.QM.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON),
            }),
          ],
        });
      });
      var G = a(59091),
        q = a(64353);
      let Q = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.filter((e) => !e.isComposer),
          a = t.filter((e) => !e.various),
          i = e.filter((e) => e.isComposer && !e.various),
          o = [];
        return a.length > 0 ? (o = a) : t.length > 0 && (o = t), o.concat(i);
      };
      var J = a(35324),
        K = a.n(J);
      let X = (0, n.Pi)((e) => {
        var t, a, i;
        let { album: o, withArtistLink: n = !0 } = e,
          {
            settings: { isMobile: d },
          } = (0, P.oR4)(),
          u = (0, s.useMemo)(() => Q(o.artists), [o.artists]),
          _ =
            (null == u ? void 0 : u.length) === 1 &&
            !(null === (t = u[0]) || void 0 === t ? void 0 : t.decomposed) &&
            !(null === (a = u[0]) || void 0 === a ? void 0 : a.various);
        return (0, r.jsxs)("div", {
          className: K().meta,
          children: [
            _ &&
              (0, r.jsx)(G.Paper, {
                radius: "round",
                className: K().artistCover,
                children: (0, r.jsx)(z.BE, {
                  src:
                    null === (i = u[0]) || void 0 === i ? void 0 : i.coverUri,
                  size: 30,
                  withAvatarReplace: !0,
                }),
              }),
            (0, r.jsx)(q.jO, {
              artists: u,
              lineClamp: d ? 1 : void 0,
              className: K().artists,
              spoilerClassName: K().artistsSpoiler,
              visibleArtistsCount: d ? void 0 : 2,
              linkClassName: K().artistLink,
              captionClassName: K().artistLabel,
              variant: d ? "breakAll" : "breakWord",
              withLink: n,
            }),
            o.year &&
              (0, r.jsx)(x.Caption, {
                variant: "div",
                type: "text",
                size: "m",
                weight: "medium",
                className: (0, l.W)(K().year, { [K().year_dot]: u.length > 0 }),
                ...(0, c.BA)(c.QM.pageHeader.ALBUM_RELEASE_DATE),
                children: o.year,
              }),
          ],
        });
      });
      var $ = a(84582),
        ee = a.n($);
      let et = (e) => {
        let {
          coverVariant: t,
          coverUri: a,
          isAvailable: i,
          className: o,
          withPlusBadge: n,
          onClick: s,
          "aria-label": d,
        } = e;
        return (0, r.jsxs)(G.Paper, {
          radius: "round" === t ? "round" : "m",
          className: o,
          children: [
            (0, r.jsx)(y.Button, {
              className: (0, l.W)(ee().coverButton, {
                [ee().coverButton_hoverable]: !!s,
              }),
              onClick: s,
              "aria-label": d,
              tabIndex: s ? 0 : -1,
              disabled: !s,
              children: (0, r.jsx)(z.BE, {
                fit: "cover",
                src: a,
                size: 300,
                className: ee().coverImage,
                withAvatarReplace: !0,
                isAvailable: i,
              }),
            }),
            n &&
              (0, r.jsx)(b.Icon, {
                variant: "plusBadge",
                className: ee().plusBadge,
              }),
          ],
        });
      };
      var ea = a(84944),
        ei = a.n(ea),
        eo = a(81342),
        er = a.n(eo);
      let el = (0, n.Pi)((e) => {
          let {
              album: t,
              donationButton: a,
              className: i,
              "aria-labelledby": o,
              forwardRef: l,
              onVersionClick: n,
            } = e,
            { formatMessage: d } = (0, f.Z)(),
            { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: u } =
              (0, P.vLf)(),
            _ = (0, P.lAI)(),
            { from: m, utmLink: p } = (0, P.MhG)({
              pageId: P.Rhz.ALBUM,
              blockId: P.aUg.ALBUM,
              contextType: I.A.Album,
              contextId: t.id,
            }),
            v = (0, P.qsr)(),
            {
              user: x,
              settings: { isMobile: g },
              experiments: h,
              sonataState: y,
              track: { isTrackPage: C },
              modals: { imageSliderModal: j },
            } = (0, P.oR4)(),
            A =
              !x.hasPlus &&
              t.isAvailableOnlyForPlus &&
              h.checkExperiment(P.peG.WebNextPlusPaywall, "on"),
            N = t.coverUri && h.checkExperiment(P.peG.WebNextImageSlider, "on"),
            k = (0, O.H0)(t.type),
            w = (0, s.useMemo)(() => {
              if (t.shouldShowBooksBadge)
                return (0, r.jsx)(b.Icon, {
                  variant: "booksLogo",
                  className: er().booksLogo,
                });
            }, [t.shouldShowBooksBadge]),
            { isPlaying: T, togglePlay: B } = (0, P.qmq)({
              playContextParams: {
                contextData: {
                  type: I.A.Album,
                  meta: { id: t.id },
                  from: m,
                  utmLink: p,
                },
                loadContextMeta: !0,
                entitiesData: y.unloadedEntitiesDataFromModels,
              },
            }),
            H = (0, W.W)(() => {
              t.coverUri && j.openImages([t.coverUri]);
            }),
            R = (0, W.W)(() => {
              if (!v()) {
                if (c) {
                  u();
                  return;
                }
                B(), _(!T);
              }
            }),
            M = (0, s.useMemo)(
              () =>
                A
                  ? (0, r.jsx)(z._m, {
                      className: er().plusPaywallButton,
                      albumType: t.type,
                    })
                  : g
                    ? (0, r.jsx)(z.JM, {
                        className: ei().playControl,
                        color: "primary",
                        buttonVariant: "default",
                        iconSize: "xxl",
                        isPlaying: T,
                        onClick: R,
                        variant: "filled",
                        disabled: !t.isAvailable,
                      })
                    : (0, r.jsx)(z.JM, {
                        className: ei().playControl,
                        withRipple: !0,
                        buttonVariant: "default",
                        radius: "xxxl",
                        size: "s",
                        color: "primary",
                        iconSize: "xxs",
                        isPlaying: T,
                        onClick: R,
                        disabled: !t.isAvailable,
                        children: (0, r.jsx)(E.Z, {
                          id: "player-actions.listen",
                        }),
                      }),
              [A, g, T, R, t.isAvailable, t.type],
            ),
            S = (0, s.useMemo)(
              () =>
                (0, r.jsx)("div", {
                  className: ei().controlsContainer,
                  children: (0, r.jsxs)("div", {
                    className: ei().controls,
                    children: [
                      M,
                      (0, r.jsx)(Y, {
                        donationButton: a,
                        album: t,
                        withLikeButton: !A,
                      }),
                    ],
                  }),
                }),
              [M, t, a, A],
            );
          return (0, r.jsx)(L, {
            ref: l,
            headingVariant: C ? "div" : "h1",
            className: i,
            controls: S,
            meta: (0, r.jsx)(X, { album: t }),
            entityName: k,
            entityNameIcon: w,
            title: t.title,
            cover: (0, r.jsx)(et, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
              withPlusBadge: t.isAvailableOnlyForPlus,
              onClick: N ? H : void 0,
              "aria-label": N ? d({ id: "slider.view-cover" }) : void 0,
            }),
            "aria-labelledby": o,
            version: t.version,
            onVersionClick: n,
          });
        }),
        en = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(el, { forwardRef: t, ...e }),
        );
      var es = a(55051);
      let ed = (e) => {
          let {
            isMobile: t,
            brandedButton: a,
            pinButton: i,
            trailerButton: o,
          } = e;
          return t
            ? a
              ? "'menu play like' 'branded branded branded'"
              : "'menu play like'"
            : "'play "
                .concat(a ? "branded" : "", " ")
                .concat(o ? "trailer" : "", " like ")
                .concat(i ? "pin" : "", " menu'");
        },
        ec = (e) => {
          if (!e) return null;
          let { h: t, s: a, l: i } = (0, P.sEc)(e);
          return "hsl("
            .concat(t, "deg, ")
            .concat(a, "%, ")
            .concat(Math.min(70, Math.max(10, i + 10)), "%)");
        };
      var eu = a(71361);
      let e_ = () => window.innerWidth < 1120,
        em = () => {
          let [e, t] = (0, s.useState)(e_()),
            a = (0, s.useMemo)(
              () =>
                (0, eu.Z)(
                  () => {
                    t(e_());
                  },
                  100,
                  { trailing: !1 },
                ),
              [t],
            );
          return (
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", a),
                a(),
                () => {
                  window.removeEventListener("resize", a);
                }
              ),
              [a],
            ),
            e
          );
        };
      var ep = a(5104),
        ev = a(62601),
        ex = a.n(ev);
      let eg = (0, n.Pi)((e) => {
          let { url: t, forwardRef: a } = e,
            i = (0, P.s0h)(t),
            o = (0, ep.s6)(),
            l = (0, ep.nJ)(),
            { ref: n, intersectionPropertyId: s } = (0, P.VfV)({
              callback: l,
              withViewUuid: !0,
            }),
            d = (0, W.W)(() => {
              o(D.qU.Link, t), i();
            });
          return (0, r.jsx)("div", {
            ref: a,
            "data-intersection-property-id": P.F9V,
            children: (0, r.jsxs)(y.Button, {
              onClick: d,
              role: "link",
              color: "secondary",
              className: ex().label,
              withRipple: !1,
              ref: n,
              "data-intersection-property-id": s,
              ...(0, c.BA)(c.QM.pageHeader.ARTIST_DONATE_BUTTON),
              children: [
                (0, r.jsx)(b.Icon, { variant: "donation", size: "xxxs" }),
                (0, r.jsx)(x.Caption, {
                  type: "text",
                  size: "m",
                  weight: "medium",
                  variant: "span",
                  children: (0, r.jsx)(E.Z, { id: "page.artist-donation" }),
                }),
              ],
            }),
          });
        }),
        eh = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(eg, { forwardRef: t, ...e }),
        );
      var ef = a(26669),
        ey = a(55188),
        eb = a(92853);
      let eC = {
          width: 20,
          height: 8,
          tipRadius: 2,
          fill: "var(--ym-background-color-primary-enabled-tooltip)",
        },
        eP = (e) => {
          let { children: t } = e,
            {
              settings: { isMobile: a },
            } = (0, P.oR4)(),
            { contentRef: i } = (0, P.$Y6)(),
            { setIsOnboardingOpened: o } = (0, P.tzi)(),
            [l, n] = (0, ef.z)(),
            d = (0, P.kcM)({ id: P.xvA.ARTIST_DONATION_BUTTON, ref: l }),
            { state: c, toggleFalse: u } = (0, ey.O)(d),
            _ = (0, s.useCallback)(() => {
              u();
            }, [u]),
            m = (0, s.useCallback)(
              (e) => {
                e || (_(), o(!1));
              },
              [_, o],
            );
          return (0, r.jsxs)(eb.u, {
            placement: a ? "top" : "right",
            arrowProps: eC,
            offsetOptions: 14,
            isHoverEnabled: !1,
            open: c,
            onOpenChange: m,
            enableAriaDescribedby: !0,
            referenceRef: n,
            children: [
              t,
              (0, r.jsxs)(eb._v, {
                className: ex().donationButtonTooltip,
                rootNode: i,
                children: [
                  (0, r.jsx)(y.Button, {
                    icon: (0, r.jsx)(b.Icon, { variant: "close", size: "xxs" }),
                    onClick: _,
                    variant: "text",
                    className: ex().closeTooltip,
                    withRipple: !1,
                  }),
                  (0, r.jsx)(x.Caption, {
                    variant: "span",
                    className: ex().tooltipText,
                    children: (0, r.jsx)(E.Z, {
                      id: "onboarding.artist-donation-button-1",
                      values: { br: (0, r.jsx)("br", {}) },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ej = (0, n.Pi)((e) => {
          var t, a, o, l, n, d;
          let {
              className: u,
              artistMeta: _,
              entitiesData: m,
              forwardRef: p,
              onCoverClick: v,
            } = e,
            { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: h } =
              (0, P.vLf)(),
            { from: C, utmLink: j } = (0, P.MhG)({
              pageId: P.Rhz.ARTIST,
              blockId: P.aUg.ARTIST,
              contextType: I.A.Artist,
              contextId: null == _ ? void 0 : _.artist.id,
            }),
            A = (0, q.SB)(null == _ ? void 0 : _.artist),
            N = (0, q.BV)(null == _ ? void 0 : _.artist),
            k = (0, P.FTC)(),
            { formatMessage: w } = (0, f.Z)(),
            [T, B] = (0, s.useState)(!1),
            {
              disclaimer: H,
              settings: { isMobile: R },
              trailer: M,
              user: S,
              slam: { isOfflineModeEnabled: O },
            } = (0, P.oR4)(),
            U = (0, P.lAI)(),
            F = (0, P.qsr)(),
            V =
              !!(null == _
                ? void 0
                : null === (t = _.artist.trailer) || void 0 === t
                  ? void 0
                  : t.isAvailable) && !R,
            Z = !R,
            Y =
              ((null == _ ? void 0 : _.artist.isForeignAgent) &&
                (null === (a = H.data) || void 0 === a ? void 0 : a.title)) ||
              void 0,
            G = em(),
            { controlSize: Q, iconSize: J } = i(R),
            K = (0, s.useMemo)(
              () =>
                (null == _ ? void 0 : _.artist.isComposer)
                  ? w({ id: "entity-names.composer" })
                  : w({ id: "entity-names.singer" }),
              [w, null == _ ? void 0 : _.artist.isComposer],
            ),
            X = !!(null == _ ? void 0 : _.brandedButton) && !O,
            $ = (0, P.s0h)(
              null == _
                ? void 0
                : null === (o = _.brandedButton) || void 0 === o
                  ? void 0
                  : o.url,
            ),
            ee = !G || (G && !X),
            { isPlaying: ea, togglePlay: ei } = (0, P.qmq)({
              playContextParams: {
                contextData: {
                  type: O ? I.A.Various : I.A.Artist,
                  meta: { id: Number(null == _ ? void 0 : _.artist.id) },
                  from: C,
                  utmLink: j,
                },
                loadContextMeta: !O,
                entitiesData: m,
              },
            }),
            eo = (0, W.W)(() => {
              if (!F()) {
                if (g) {
                  h();
                  return;
                }
                ei(), U(!ea);
              }
            }),
            er = (0, s.useMemo)(() => {
              var e, t;
              return R
                ? (0, r.jsx)(z.JM, {
                    className: ex().playControl,
                    color: "primary",
                    buttonVariant: "default",
                    iconSize: "xxl",
                    isPlaying: ea,
                    variant: "filled",
                    onClick: eo,
                    disabled:
                      !(null == _
                        ? void 0
                        : null === (t = _.artist) || void 0 === t
                          ? void 0
                          : t.isAvailableForPlaying) || !_.artist.isAvailable,
                  })
                : (0, r.jsx)(z.JM, {
                    className: ex().playControl,
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: ea,
                    disabled:
                      !(null == _
                        ? void 0
                        : null === (e = _.artist) || void 0 === e
                          ? void 0
                          : e.isAvailableForPlaying) || !_.artist.isAvailable,
                    onClick: eo,
                    variant: "default",
                    children:
                      ee && (0, r.jsx)(E.Z, { id: "player-actions.listen" }),
                  });
            }, [
              ee,
              null == _ ? void 0 : _.artist.isAvailable,
              null == _ ? void 0 : _.artist.isAvailableForPlaying,
              eo,
              R,
              ea,
            ]),
            el = (0, W.W)(() => {
              !F() &&
                (null == _ ? void 0 : _.artist.id) &&
                (M.setUtmLink(j),
                M.openArtistTrailer(_.artist.id),
                k(D.OB.Artist, _.artist.id));
            }),
            en = (0, s.useMemo)(
              () =>
                V
                  ? (0, r.jsx)(z.FM, {
                      fallback: (0, r.jsx)(z.Wd, {
                        children: (0, r.jsx)(z.eP, {
                          size: "s",
                          radius: "xxxl",
                          iconSize: "xxs",
                          className: ex().trailerControl,
                          onClick: el,
                          children:
                            ee &&
                            (0, r.jsx)(E.Z, { id: "entity-names.trailer" }),
                        }),
                      }),
                    })
                  : null,
              [ee, el, V],
            ),
            eu = (0, s.useMemo)(() => {
              var e;
              let t = {
                  gridTemplateAreas: "".concat(
                    ed({
                      isMobile: R,
                      brandedButton: X,
                      pinButton: Z,
                      trailerButton: V,
                    }),
                  ),
                },
                a = {
                  "--baranded-button-color-background": ec(
                    null == _ ? void 0 : _.artist.averageColor,
                  ),
                };
              return (0, r.jsxs)("div", {
                style: t,
                className: ex().controls,
                children: [
                  er,
                  X &&
                    (0, r.jsx)(z.FM, {
                      fallback: (0, r.jsx)(y.Button, {
                        className: ex().brandedControl,
                        style: a,
                        withRipple: !R,
                        withHover: !1,
                        radius: "xxxl",
                        size: "s",
                        color: "primary",
                        onClick: $,
                        variant: "default",
                        role: "link",
                        children:
                          null == _
                            ? void 0
                            : null === (e = _.brandedButton) || void 0 === e
                              ? void 0
                              : e.title,
                      }),
                    }),
                  en,
                  (0, r.jsx)(z.FM, {
                    fallback: (0, r.jsx)(z.dJ, {
                      className: ex().likeControl,
                      isLiked: null == _ ? void 0 : _.artist.isLiked,
                      onClick: A,
                      withRipple: !R,
                      iconSize: J,
                      size: Q,
                      variant: "default",
                      iconClassName: ex().likeIcon,
                      disabled:
                        !(null == _ ? void 0 : _.artist.isAvailable) ||
                        !S.isAuthorized,
                    }),
                  }),
                  Z &&
                    (0, r.jsx)(z.FM, {
                      fallback: (0, r.jsx)(z.RT, {
                        onClick: N,
                        isPinned: null == _ ? void 0 : _.artist.isPinned,
                        className: ex().pinControl,
                        isDisabled: !(null == _
                          ? void 0
                          : _.artist.isAvailable),
                      }),
                    }),
                  (0, r.jsx)(es.xG, {
                    artist: null == _ ? void 0 : _.artist,
                    open: T,
                    onOpenChange: B,
                    className: ex().menuControl,
                    size: Q,
                    icon: (0, r.jsx)(b.Icon, { size: J, variant: "more" }),
                    ...(0, c.BA)(
                      c.QM.pageHeader.ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                    ),
                  }),
                ],
              });
            }, [
              null == _ ? void 0 : _.artist,
              null == _
                ? void 0
                : null === (l = _.brandedButton) || void 0 === l
                  ? void 0
                  : l.title,
              Q,
              A,
              N,
              J,
              T,
              R,
              $,
              er,
              en,
              S.isAuthorized,
              X,
              Z,
              V,
            ]),
            e_ = (0, s.useMemo)(() => {
              var e;
              return (0, r.jsxs)("div", {
                className: ex().meta,
                children: [
                  (null == _ ? void 0 : _.lastMonthListeners) &&
                    (0, r.jsxs)("div", {
                      className: ex().label,
                      ...(0, c.BA)(c.QM.pageHeader.ARTIST_LISTENERS_COUNT),
                      children: [
                        (0, r.jsx)(b.Icon, { variant: "users", size: "xxxs" }),
                        (0, r.jsx)(x.Caption, {
                          type: "text",
                          size: "m",
                          weight: "medium",
                          variant: "span",
                          children: (0, r.jsx)(E.Z, {
                            id: "entity-names.listeners-per-month",
                            values: { counter: _.lastMonthListeners },
                          }),
                        }),
                      ],
                    }),
                  (null == _ ? void 0 : _.donationUrl) &&
                    (null === (e = _.artist) || void 0 === e ? void 0 : e.id) &&
                    (0, r.jsx)(P.Ja5, {
                      blockType: D.DC.Donations,
                      blockId: P.aUg.DONATY,
                      blockPosX: 1,
                      blockPosY: 1,
                      children: (0, r.jsx)(P.nZ5, {
                        objectType: D.OB.Donation,
                        objectId: _.artist.id,
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: 1,
                        mainObjectId: _.artist.id,
                        mainObjectType: D.OB.Artist,
                        children: (0, r.jsx)(eP, {
                          children: (0, r.jsx)(eh, { url: _.donationUrl }),
                        }),
                      }),
                    }),
                ],
              });
            }, [
              null == _ ? void 0 : _.artist.id,
              null == _ ? void 0 : _.donationUrl,
              null == _ ? void 0 : _.lastMonthListeners,
            ]);
          return (0, r.jsx)("div", {
            className: ex().root,
            children: (0, r.jsx)(L, {
              ref: p,
              className: u,
              entityName: K,
              title:
                (null == _
                  ? void 0
                  : null === (n = _.artist) || void 0 === n
                    ? void 0
                    : n.name) || "",
              meta: e_,
              cover: (0, r.jsx)(et, {
                coverVariant: "round",
                coverUri:
                  null == _
                    ? void 0
                    : null === (d = _.artist) || void 0 === d
                      ? void 0
                      : d.coverUri,
                isAvailable: null == _ ? void 0 : _.artist.isAvailable,
                onClick: v,
                "aria-label": v
                  ? w({ id: "slider.view-artist-covers" })
                  : void 0,
              }),
              controls: eu,
              disclaimerLabel: Y,
              headingVariant: "h1",
            }),
          });
        }),
        eA = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(ej, { forwardRef: t, ...e }),
        );
      var eN = a(44534),
        ek = a.n(eN);
      let ew = (0, n.Pi)((e) => {
          var t;
          let {
              album: a,
              actionButton: i,
              className: o,
              "aria-labelledby": l,
              forwardRef: n,
              onVersionClick: d,
            } = e,
            { formatMessage: u } = (0, f.Z)(),
            { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: m } =
              (0, P.vLf)(),
            { from: p, utmLink: v } = (0, P.MhG)({
              pageId: P.Rhz.ALBUM,
              blockId: P.aUg.ALBUM,
              contextType: I.A.Album,
              contextId: a.id,
            }),
            {
              user: x,
              disclaimer: g,
              settings: { isMobile: h },
              experiments: y,
              sonataState: C,
              modals: { imageSliderModal: j },
            } = (0, P.oR4)(),
            A = (0, P.lAI)(),
            N = (0, P.qsr)(),
            k = (0, P.SfR)(a.isLiked, a.type),
            w = (0, O.H0)(a.type),
            T = y.checkExperiment(
              P.peG.WebNextShowAudiobookCoverForFreemium,
              "on",
            ),
            B = a.isAvailable || (a.isAudiobook && T),
            H = a.coverUri && y.checkExperiment(P.peG.WebNextImageSlider, "on"),
            R = (0, s.useMemo)(() => {
              if (a.shouldShowBooksBadge)
                return (0, r.jsx)(b.Icon, {
                  variant: "booksLogo",
                  className: ek().booksLogo,
                });
            }, [a.shouldShowBooksBadge]),
            M =
              !x.hasPlus &&
              a.isAvailableOnlyForPlus &&
              y.checkExperiment(P.peG.WebNextPlusPaywall, "on"),
            S =
              (a.isPodcast &&
                a.isForeignAgent &&
                (null === (t = g.data) || void 0 === t ? void 0 : t.title)) ||
              void 0,
            { isPlaying: D, togglePlay: U } = (0, P.qmq)({
              playContextParams: {
                contextData: {
                  type: I.A.Album,
                  meta: { id: a.id },
                  from: p,
                  utmLink: v,
                },
                loadContextMeta: !0,
                entitiesData: C.unloadedEntitiesDataFromModels,
              },
            }),
            F = (0, W.W)(() => {
              a.coverUri && j.openImages([a.coverUri]);
            }),
            V = (0, W.W)(() => {
              if (!N()) {
                if (_) {
                  m();
                  return;
                }
                U(), A(!D);
              }
            }),
            Z = (0, s.useMemo)(
              () =>
                M
                  ? (0, r.jsx)(z._m, {
                      className: ek().plusPaywallButton,
                      albumType: a.type,
                    })
                  : h
                    ? (0, r.jsx)(z.JM, {
                        className: ei().playControl,
                        color: "primary",
                        buttonVariant: "default",
                        iconSize: "xxl",
                        isPlaying: D,
                        onClick: V,
                        variant: "filled",
                        disabled: !a.isAvailable,
                      })
                    : (0, r.jsx)(z.JM, {
                        className: ei().playControl,
                        withRipple: !0,
                        buttonVariant: "default",
                        radius: "xxxl",
                        size: "s",
                        color: "primary",
                        iconSize: "xxs",
                        isPlaying: D,
                        onClick: V,
                        disabled: !a.isAvailable,
                        children: (0, r.jsx)(E.Z, {
                          id: "player-actions.listen",
                        }),
                      }),
              [M, h, D, V, a.isAvailable, a.type],
            ),
            G = (0, s.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: ei().controlsContainer,
                  children: [
                    (0, r.jsxs)("div", {
                      className: ei().controls,
                      ...(0, c.BA)(
                        c.QM.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                      ),
                      children: [
                        Z,
                        (0, r.jsx)(Y, {
                          album: a,
                          likeButtonAriaLabel: k,
                          withLikeButton: !M,
                        }),
                      ],
                    }),
                    i &&
                      (0, r.jsx)("div", {
                        className: ei().controls,
                        children: i,
                      }),
                  ],
                }),
              [Z, a, k, M, i],
            ),
            q = (0, s.useMemo)(
              () =>
                (0, r.jsx)("div", {
                  className: ek().meta,
                  children: (0, r.jsx)(X, { album: a }),
                }),
              [a],
            );
          return (0, r.jsx)(L, {
            ref: n,
            headingVariant: "h1",
            className: o,
            controls: G,
            meta: q,
            entityName: w,
            entityNameIcon: R,
            title: a.title,
            cover: (0, r.jsx)(et, {
              coverVariant: "square",
              coverUri: a.coverUri,
              isAvailable: B,
              withPlusBadge: a.isAvailableOnlyForPlus,
              onClick: H ? F : void 0,
              "aria-label": H ? u({ id: "slider.view-cover" }) : void 0,
            }),
            "aria-labelledby": l,
            version: a.version,
            onVersionClick: d,
            disclaimerLabel: S,
          });
        }),
        eT = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(ew, { forwardRef: t, ...e }),
        );
      var eB = a(52235),
        eL = a(98730),
        eH = a(10979),
        eR = a(27376),
        eM = a(19684),
        eS = a(16131),
        eE = a.n(eS);
      let eI = (0, n.Pi)((e) => {
        let { trackIds: t, className: a } = e,
          { slam: i } = (0, P.oR4)(),
          o = (0, P.h3b)(),
          { formatMessage: n } = (0, f.Z)(),
          d = (0, eM.s)(),
          [c, u] = (0, s.useState)(!1),
          _ = i.isPlaylistDownloaded(t),
          m = i.isPlaylistDownloading(t),
          p = i.getPlaylistDownloadingProgress(t),
          v = (0, W.W)(() => {
            if (m) {
              null == o || o.stopDownload(t);
              return;
            }
            if (_) {
              u(!0);
              return;
            }
            null == o || o.download(t),
              d.count(P.YHm.MY_FAVORITES_PLAYLIST_DOWNLOAD, P.OIz);
          }),
          g = (0, W.W)(() => {
            null == o || o.delete(t),
              d.count(P.YHm.MY_FAVORITES_PLAYLIST_DELETE, P.OIz);
          }),
          h = (0, s.useMemo)(
            () =>
              _
                ? (0, r.jsx)(b.Icon, {
                    variant: "check",
                    size: "xxs",
                    className: eE().downloadedIcon,
                  })
                : m
                  ? (0, r.jsx)(z.kQ, {
                      value: null != p ? p : 0,
                      size: 26,
                      withCancelIcon: !0,
                      className: eE().downloadingProgress,
                      progressBarClassName: eE().progress,
                      cancelIconClassName: eE().cancelIcon,
                    })
                  : (0, r.jsx)(b.Icon, { variant: "download", size: "xxs" }),
            [_, m, p],
          ),
          C = (0, s.useMemo)(
            () =>
              m
                ? n({ id: "offline.stop-downloading" })
                : n({ id: "offline.download" }),
            [n, m],
          );
        return _
          ? (0, r.jsx)(eR.v2, {
              variant: "default",
              size: "s",
              radius: "xxxl",
              icon: h,
              offsetOptions: 10,
              open: c,
              onOpenChange: u,
              wrapperClassName: a,
              ariaLabel: n({ id: "offline.delete-from-device" }),
              children: (0, r.jsx)(eR.sN, {
                icon: (0, r.jsx)(b.Icon, { variant: "upload", size: "xxs" }),
                onClick: g,
                children: (0, r.jsx)(E.Z, { id: "offline.delete-from-device" }),
              }),
            })
          : (0, r.jsx)(y.Button, {
              className: (0, l.W)(eE().root, { [eE().root_downloading]: m }, a),
              variant: "default",
              size: "s",
              radius: "xxxl",
              icon: h,
              "aria-label": C,
              onClick: v,
              children:
                m &&
                (0, r.jsx)(x.Caption, {
                  variant: "div",
                  className: eE().progressText,
                  children: (0, r.jsx)(E.Z, {
                    id: "offline.downloading-progress",
                    values: { value: p },
                  }),
                }),
            });
      });
      var eW = a(64377),
        eO = a.n(eW),
        ez = a(18489),
        eD = a(40664),
        eU = a(59651),
        eF = a.n(eU);
      let eV = (0, n.Pi)(() => {
        var e;
        let t = (0, eD.rn)();
        return t.isEnabled &&
          (null === (e = t.data) || void 0 === e ? void 0 : e.button)
          ? (0, r.jsx)(ez.r, {
              className: eF().root,
              href: t.data.button.href,
              target: "_blank",
              children: (0, r.jsx)(x.Caption, {
                variant: "span",
                type: "text",
                size: "s",
                weight: "medium",
                lineClamp: 1,
                children: t.data.button.text,
              }),
            })
          : null;
      });
      var eZ = a(63660);
      let eY = ["image/png", "image/jpeg", "image/jpg"],
        eG = (e) => eY.includes(e),
        eq = (e) => e > 0 && e <= 2e7,
        eQ = (e) => {
          if (!e) return;
          let t = 2 * e.naturalHeight || e.height,
            a = 2 * e.naturalWidth || e.width;
          return t < 5e3 && a < 5e3;
        };
      var eJ = a(35445),
        eK = a.n(eJ);
      let eX = (0, n.Pi)((e) => {
        let { className: t, playlist: a } = e,
          {
            settings: { isMobile: i },
            playlist: { isRewind2024Playlist: o },
            modals: { imageSliderModal: n },
            experiments: d,
          } = (0, P.oR4)(),
          u = a.coverUri,
          _ = a.canUserChange && !i,
          { notify: m } = (0, P.d$W)(),
          { formatMessage: p } = (0, f.Z)(),
          v = (0, s.useRef)(null),
          [x, g] = (0, s.useState)(u || ""),
          [h, b] = (0, s.useState)(_),
          [C, j] = (0, s.useState)(new FormData()),
          A = (0, eZ.createAvatarUrl)(u || "", 600, !1),
          N = (0, eZ.createAvatarUrl)(u || "", 300, !1),
          [k, w] = (0, s.useState)(A),
          [T, B] = (0, s.useState)(!1),
          L = u && d.checkExperiment(P.peG.WebNextImageSlider, "on"),
          H = (0, s.useMemo)(
            () => (o && a.personalColor ? (0, P.M)(a.personalColor) : null),
            [o, a.personalColor],
          );
        (0, s.useEffect)(() => {
          h !== _ && b(_);
        }, [_, h]);
        let R = (0, s.useCallback)(
            () =>
              m(
                (0, r.jsx)(z.Q, {
                  error: p({ id: "playlist-errors.failed-to-change-poster" }),
                }),
                { containerId: P.W$x.ERROR },
              ),
            [m, p],
          ),
          M = (0, W.W)(() => {
            u && !T && n.openImages([u]);
          }),
          S = (0, W.W)((e) => {
            var t;
            null == e || e.stopPropagation(),
              null == v ||
                null === (t = v.current) ||
                void 0 === t ||
                t.click();
          }),
          E = (0, W.W)((e) => {
            e.stopPropagation(), "Enter" === e.key && S();
          }),
          I = (0, W.W)((e) => {
            e.stopPropagation();
          }),
          O = (0, W.W)((e) => {
            let t = e.target,
              a = (t.files || [])[0] || null;
            if (((t.value = ""), !a || !eG(a.type) || !eq(a.size))) {
              R();
              return;
            }
            x && w(x), b(!1), g(URL.createObjectURL(a));
            let i = new FormData();
            i.append("image", a), j(i);
          }),
          D = (0, s.useCallback)(
            async (e) => {
              let t = e.target,
                i = () => {
                  g(k), R(), b(!0);
                };
              if (
                (u && (t.currentSrc === A || t.currentSrc === N)) ||
                !_ ||
                k === t.currentSrc
              )
                return;
              if (!eQ(t)) {
                i();
                return;
              }
              B(!0);
              let o = await a.changePlaylistCover(C);
              B(!1), o === P.SLo.ERROR ? i() : b(!0);
            },
            [R, k, a, C, u, _, A, N],
          ),
          U = (0, s.useMemo)(
            () =>
              x
                ? p({ id: "playlist-actions.change-poster" })
                : p({ id: "playlist-actions.add-poster" }),
            [x, p],
          );
        return (0, r.jsxs)(G.Paper, {
          radius: "m",
          className: (0, l.W)(eK().root, t),
          children: [
            (0, r.jsx)("div", {
              className: eK().backCoverColor,
              style: H,
              children: (0, r.jsx)(y.Button, {
                onClick: M,
                "aria-label": L ? p({ id: "slider.view-cover" }) : void 0,
                tabIndex: L ? 0 : -1,
                disabled: !L,
                className: (0, l.W)(eK().coverButton, {
                  [eK().coverButton_hoverable]: !!L,
                }),
                children: (0, r.jsx)(z.BE, {
                  fit: "cover",
                  src: x,
                  size: 300,
                  className: eK().coverImage,
                  withAvatarReplace: !0,
                  onLoad: D,
                }),
              }),
            }),
            h &&
              (0, r.jsx)("div", {
                className: (0, l.W)(eK().buttonContainer, {
                  [eK().buttonContainer_withCursorPointer]: x,
                }),
                onClick: L ? M : void 0,
                children: (0, r.jsxs)("div", {
                  className: (0, l.W)(eK().fileUploadContainer, {
                    [eK().fileUploadContainer_hovered]: x,
                  }),
                  children: [
                    (0, r.jsx)(y.Button, {
                      className: eK().button,
                      radius: "xxxl",
                      size: "xxs",
                      color: "secondary",
                      withRipple: !1,
                      onClick: S,
                      onKeyUp: E,
                      "aria-label": p({ id: "playlist-actions.add-poster" }),
                      ...(0, c.BA)(
                        c.QM.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                      ),
                      children: U,
                    }),
                    (0, r.jsx)("form", {
                      className: eK().formFile,
                      encType: "multipart/form-data",
                      children: (0, r.jsx)("input", {
                        ref: v,
                        type: "file",
                        name: "file",
                        accept: "image/jpeg, image/png, image/jpg",
                        onChange: O,
                        onClick: I,
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      });
      var e$ = a(92546),
        e0 = a.n(e$),
        e1 = a(92719);
      let e4 = (0, n.Pi)((e) => {
          let { playlist: t, className: a } = e,
            { formatMessage: i } = (0, f.Z)(),
            o = (0, s.useCallback)(
              (e, t) => {
                switch (e) {
                  case P.UvK.TODAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-today" },
                      t,
                    );
                  case P.UvK.YESTERDAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-yesterday" },
                      t,
                    );
                  case P.UvK.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.playlist-made-for-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.playlist-made-for-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            l = (0, s.useCallback)(
              (e, t) => {
                switch (e) {
                  case P.UvK.TODAY:
                    return i(
                      { id: "interface-actions.updated-playlist-today" },
                      t,
                    );
                  case P.UvK.YESTERDAY:
                    return i(
                      { id: "interface-actions.updated-playlist-yesterday" },
                      t,
                    );
                  case P.UvK.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.updated-playlist-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.updated-playlist-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            n = (0, s.useMemo)(() => {
              var e, a, i, r, n, s, d;
              let c = new Date(t.modified),
                u = (0, P.u9c)(c);
              return t.madeFor
                ? o(u, {
                    playlistReceiver:
                      (null == t
                        ? void 0
                        : null === (r = t.madeFor) || void 0 === r
                          ? void 0
                          : null === (i = r.caseForms) || void 0 === i
                            ? void 0
                            : i.genitive) ||
                      (null == t
                        ? void 0
                        : null === (s = t.madeFor) || void 0 === s
                          ? void 0
                          : null === (n = s.userInfo) || void 0 === n
                            ? void 0
                            : n.login) ||
                      "",
                    updateDate: c,
                  })
                : t.isFavouritePlaylist
                  ? (null === (d = t.owner) || void 0 === d
                      ? void 0
                      : d.name) || ""
                  : l(u, {
                      updateDate: new Date(t.modified),
                      ownerName:
                        (null === (e = t.owner) || void 0 === e
                          ? void 0
                          : e.name) || "",
                      gender:
                        (null === (a = t.owner) || void 0 === a
                          ? void 0
                          : a.sex) === e1.o.FEMALE
                          ? "female"
                          : "male",
                    });
            }, [t, o, l]);
          return (0, r.jsx)(x.Caption, {
            variant: "span",
            className: a,
            type: "text",
            size: "m",
            weight: "medium",
            lineClamp: 1,
            ...(0, c.BA)(c.QM.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT),
            children: n,
          });
        }),
        e5 = (0, n.Pi)((e) => {
          let { playlist: t } = e,
            { formatMessage: a } = (0, f.Z)(),
            {
              settings: { isMobile: i },
            } = (0, P.oR4)(),
            { notify: o } = (0, P.d$W)(),
            n = t.canUserChange && !i,
            d = !!t.description,
            { state: u, toggleTrue: _, toggleFalse: m } = (0, ey.O)(!1),
            [p, v] = (0, s.useState)(t.description || ""),
            g = (0, s.useCallback)(async () => {
              m(),
                (await t.changeDescription(p)) === P.SLo.ERROR &&
                  o(
                    (0, r.jsx)(z.Q, {
                      error: a({
                        id: "playlist-errors.failed-to-change-description",
                      }),
                    }),
                    { containerId: P.W$x.ERROR },
                  );
            }, [a, p, o, t, m]),
            h = (0, s.useCallback)((e) => {
              v(e);
            }, []),
            b = (0, s.useMemo)(
              () =>
                (0, P.g78)(t.description, z.rU, {
                  className: e0().descriptionLink,
                }),
              [t.description],
            ),
            C = (0, s.useMemo)(
              () =>
                t.tagsString
                  ? (0, r.jsx)(x.Caption, {
                      variant: "span",
                      type: "text",
                      size: "m",
                      weight: "medium",
                      children: (0, r.jsx)(E.Z, {
                        id: "entity-names.tags",
                        values: { tags: t.tagsString },
                      }),
                    })
                  : null,
              [t.tagsString],
            );
          return (0, r.jsxs)("div", {
            className: e0().root,
            children: [
              d &&
                !u &&
                (0, r.jsxs)(x.Caption, {
                  variant: "span",
                  className: e0().description,
                  type: "text",
                  size: "m",
                  weight: "medium",
                  children: [
                    b,
                    n &&
                      (0, r.jsx)(y.Button, {
                        variant: "text",
                        withRipple: !1,
                        onClick: _,
                        className: (0, l.W)(
                          e0().descriptionActionLink,
                          e0().addDescription,
                        ),
                        "aria-label": a({
                          id: "playlist-actions.change-description",
                        }),
                        color: "primary",
                        ...(0, c.BA)(
                          c.QM.pageHeader
                            .PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                        ),
                        children: (0, r.jsx)(x.Caption, {
                          variant: "span",
                          size: "m",
                          type: "text",
                          className: e0().button,
                          children: (0, r.jsx)(E.Z, {
                            id: "playlist-actions.change-description-abbr",
                          }),
                        }),
                      }),
                  ],
                }),
              !d &&
                n &&
                !u &&
                (0, r.jsx)(y.Button, {
                  variant: "text",
                  withRipple: !1,
                  onClick: _,
                  className: e0().descriptionActionLink,
                  "aria-label": a({ id: "playlist-actions.add-description" }),
                  color: "primary",
                  ...(0, c.BA)(
                    c.QM.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                  ),
                  children: (0, r.jsxs)(x.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    className: e0().button,
                    children: [
                      (0, r.jsx)(E.Z, {
                        id: "playlist-actions.add-description",
                      }),
                      "...",
                    ],
                  }),
                }),
              n &&
                u &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(N, {
                      text: t.description,
                      className: e0().textField,
                      placeholder: "".concat(
                        a({ id: "playlist-actions.add-description" }),
                        "...",
                      ),
                      maxTextLength: eH.Zn,
                      onChangeFinish: h,
                      variant: "textarea",
                    }),
                    (0, r.jsxs)("div", {
                      className: e0().actionButtons,
                      children: [
                        (0, r.jsx)(y.Button, {
                          className: e0().saveButton,
                          color: "secondary",
                          radius: "xxxl",
                          size: "s",
                          "aria-label": a({ id: "interface-actions.save" }),
                          onClick: g,
                          withHover: !0,
                          children: (0, r.jsx)(E.Z, {
                            id: "interface-actions.save",
                          }),
                        }),
                        (0, r.jsx)(y.Button, {
                          variant: "text",
                          withRipple: !1,
                          onClick: m,
                          className: e0().cancelButton,
                          "aria-label": a({ id: "interface-actions.cancel" }),
                          color: "primary",
                          children: (0, r.jsx)(x.Caption, {
                            variant: "span",
                            size: "m",
                            type: "text",
                            className: e0().button,
                            children: (0, r.jsx)(E.Z, {
                              id: "interface-actions.cancel",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, r.jsx)(e4, { className: e0().updatedText, playlist: t }),
              C,
            ],
          });
        });
      var e2 = a(37557),
        e3 = a.n(e2);
      let e7 = (0, n.Pi)((e) => {
        let { playlist: t } = e,
          a = (0, s.useRef)(null),
          { ugcUploadCenter: i } = (0, P.oR4)(),
          { formatMessage: o } = (0, f.Z)(),
          l = (0, s.useCallback)(() => {
            var e;
            null == a || null === (e = a.current) || void 0 === e || e.click();
          }, [a]),
          n = (0, s.useCallback)(
            (e) => {
              let a = e.target.files;
              a && a.length > 0 && i.appendFiles([...a], t),
                (e.target.value = "");
            },
            [t, i],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(y.Button, {
              size: "s",
              radius: "xxxl",
              "aria-label": o({ id: "ugc.upload-track" }),
              className: e3().button,
              onClick: l,
              ...(0, c.BA)(c.QM.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON),
              children: o({ id: "ugc.upload-track" }),
            }),
            (0, r.jsx)("form", {
              className: e3().form,
              encType: "multipart/form-data",
              children: (0, r.jsx)("input", {
                ref: a,
                type: "file",
                accept: "audio/*",
                onChange: n,
                multiple: !0,
              }),
            }),
          ],
        });
      });
      var e8 = a(50705);
      let e9 = (0, n.Pi)((e) => {
          var t, a, i, o, l;
          let {
              playlist: n,
              onOpenChange: d,
              open: u,
              wrapperClassName: _,
              ...m
            } = e,
            { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: v } =
              (0, P.vLf)(),
            {
              settings: { isMobile: x },
              trailer: g,
              playlist: {
                filters: {
                  activeFilter: h,
                  analyticsParamsActiveFilterIndex: y,
                },
              },
              user: C,
              experiments: j,
            } = (0, P.oR4)(),
            A = (0, eH.SB)(n),
            N = j.checkExperiment(P.peG.WebEditorsFeatures, "on"),
            k = (0, eH.BV)(n),
            w = (0, P.FTC)(),
            T = ""
              .concat(P.aUg.PLAYLIST, "-")
              .concat(n.uid, "_")
              .concat(n.kind),
            B = n.canUserChange,
            { utmLink: L } = (0, P.MhG)({
              pageId: P.Rhz.PLAYLIST,
              blockId: P.aUg.PLAYLIST,
              contextType: I.A.Playlist,
              contextId: n.uuid,
              pageEntityId: n.uuid,
            }),
            H = (0, P.qsr)(),
            { notify: R } = (0, P.d$W)(),
            { formatMessage: M } = (0, f.Z)(),
            S = (0, eL.useRouter)(),
            O = (0, s.useMemo)(
              () => ({ objectId: n.seeds[0], tabId: h, tabPos: y }),
              [n.seeds, h, y],
            ),
            U = (0, P.U2q)(O),
            { href: F } = (0, P.qKB)(
              "/users/"
                .concat(
                  null === (t = n.owner) || void 0 === t ? void 0 : t.login,
                  "/playlists/",
                )
                .concat(n.kind),
            ),
            V = (0, e8.q3)({
              entityVariant: P.gus.PLAYLIST,
              urlParams: { id: n.uid, kind: n.kind },
            }),
            { isPlaying: Z, togglePlay: Y } = (0, P.QhE)({
              seeds: null !== (l = n.seeds) && void 0 !== l ? l : [],
              pageIdForFrom: P.Rhz.RADIO,
              blockIdForFrom: T,
            }),
            G = (0, W.W)(() => {
              if (p && C.isAuthorized) {
                v();
                return;
              }
              !H() && (Z || (Y(), U()));
            }),
            q = (0, W.W)(() => {
              if (p) {
                v();
                return;
              }
              H() ||
                (g.setUtmLink(L),
                g.openPlaylistTrailer(n.id),
                w(D.OB.Playlist, n.id));
            }),
            Q = (0, W.W)(async () => {
              if ((await n.deletePlaylist()) === P.SLo.ERROR) {
                R(
                  (0, r.jsx)(z.Q, {
                    error: M({
                      id: "playlist-errors.failed-to-remove-playlist",
                    }),
                  }),
                  { containerId: P.W$x.ERROR },
                );
                return;
              }
              S.push("/collection");
            });
          (0, P.ZP4)(u);
          let J = (n.isPublic || n.isFavouritePlaylist) && n.isAvailable,
            K = {
              variant: P.GGO.PLAYLIST,
              id: n.kind,
              title: n.title,
              path: n.url,
              playlistOwnerName:
                null === (a = n.owner) || void 0 === a ? void 0 : a.name,
              playlistOwnerLogin:
                null === (i = n.owner) || void 0 === i ? void 0 : i.login,
            };
          return (0, r.jsxs)(eR.v2, {
            isMobile: x,
            offsetOptions: 10,
            open: u,
            onOpenChange: d,
            ariaLabel: M({ id: "interface-actions.context-menu" }),
            wrapperClassName: _,
            ...m,
            containerProps: (0, c.BA)(c.bG.playlist.PLAYLIST_CONTEXT_MENU),
            children: [
              N &&
                (0, r.jsx)(e8.ZY, {
                  entityVariant: P.gus.PLAYLIST,
                  adminUrl: n.isFavouritePlaylist ? void 0 : V,
                  withPlaylistPageFeatures: !0,
                }),
              !x && (0, r.jsx)(z.Zd, { onClick: k, isPinned: n.isPinned }),
              !n.isFavouritePlaylist &&
                (0, r.jsx)(z.xZ, { onClick: A, isLiked: n.isLiked }),
              (null === (o = n.trailer) || void 0 === o
                ? void 0
                : o.isAvailable) && (0, r.jsx)(z.NB, { onClick: q }),
              (0, r.jsx)(z.GQ, {
                disabled: !n.isAvailable,
                onClick: G,
                variant: P.xIL.PLAYLIST,
              }),
              (0, r.jsx)(z.zq, { disabled: !J, shareLink: F, entityMeta: K }),
              B &&
                (0, r.jsx)(eR.sN, {
                  icon: (0, r.jsx)(b.Icon, { variant: "bucket", size: "xxs" }),
                  onClick: Q,
                  children: (0, r.jsx)(E.Z, {
                    id: "playlist-actions.remove-playlist",
                  }),
                }),
              B && (0, r.jsx)(eH.pT, { playlist: n }),
            ],
          });
        }),
        e6 = (0, n.Pi)((e) => {
          var t, a;
          let { playlist: o, isDisabled: l, className: n, forwardRef: d } = e,
            { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: _ } =
              (0, P.vLf)(),
            { from: m, utmLink: p } = (0, P.MhG)({
              pageId: P.Rhz.PLAYLIST,
              blockId: P.aUg.PLAYLIST,
              contextType: I.A.Playlist,
              contextId: o.uuid,
              pageEntityId: o.uuid,
            }),
            {
              settings: { isMobile: v },
              sonataState: g,
              experiments: h,
              trailer: y,
              playlist: {
                filters: {
                  activeFilter: C,
                  activeFilterName: j,
                  analyticsParamsActiveFilterIndex: A,
                },
                enableVariousAutoFlow: N,
                trackIds: k,
                isRewind2024Playlist: w,
                setShouldShowTrailerOnboarding: T,
              },
              user: B,
            } = (0, P.oR4)(),
            { formatMessage: H, formatNumber: R } = (0, f.Z)(),
            [M, S] = (0, s.useState)(!1),
            O = (0, eH.SB)(o),
            F = (0, eH.BV)(o),
            V = (0, P.FTC)(),
            Z = !v,
            Y = (0, s.useMemo)(
              () => ({ objectId: o.uuid, tabId: C, tabPos: A }),
              [o.uuid, C, A],
            ),
            G = (0, P.CIM)(Y),
            q = (0, P.kI9)(Y),
            Q = (0, P.q3s)(Y),
            J = (0, P.XVb)(Y),
            K = (0, P.ig3)(Y),
            X = (0, P.lAI)(),
            $ = (0, P.qsr)(),
            { controlSize: ee, iconSize: et } = i(v),
            { notify: ea } = (0, P.d$W)(),
            eo = o.canUserChange && !v,
            er = (0, eL.useSearchParams)(),
            el = (0, s.useMemo)(
              () => (w && o.personalColor ? (0, P.JcA)(o.personalColor) : null),
              [w, o.personalColor],
            );
          (0, s.useEffect)(() => {
            M && G();
          }, [M, G]);
          let en = (0, W.W)(async (e) => {
              (await o.changeTitle(e)) === P.SLo.ERROR &&
                ea(
                  (0, r.jsx)(z.Q, {
                    error: H({ id: "playlist-errors.failed-to-change-title" }),
                  }),
                  { containerId: P.W$x.ERROR },
                );
            }),
            { isPlaying: es, togglePlay: ed } = (0, P.qmq)({
              playContextParams: {
                contextData: {
                  type: I.A.Playlist,
                  meta: { id: o.id, uuid: o.uuid },
                  filter: C,
                  filterName: j,
                  enableVariousAutoFlow: N,
                  from: m,
                  utmLink: p,
                },
                loadContextMeta: !0,
                entitiesData: g.unloadedEntitiesDataFromModels,
              },
            }),
            [ec, eu] = (0, s.useState)(es),
            e_ = (0, W.W)(() => {
              if (!$()) {
                if (u) {
                  _();
                  return;
                }
                ed(), X(!es), g.setPlaylistFilter(C), ec ? K() : J();
              }
            });
          (0, s.useEffect)(() => {
            es &&
            (g.playlistFilter === C ||
              ((0, eB.Z)(g.playlistFilter) && (0, eB.Z)(C)))
              ? eu(!0)
              : eu(!1);
          }, [es, g.playlistFilter, C]);
          let em = (0, s.useMemo)(() => {
              if (o.actualLikesCount && o.actualLikesCount > 0)
                return (0, r.jsx)(x.Caption, {
                  variant: "span",
                  type: "controls",
                  size: "s",
                  weight: "medium",
                  children: o.actualLikesCount && R(o.actualLikesCount),
                });
            }, [o.actualLikesCount, R]),
            ep = (0, s.useMemo)(
              () =>
                v
                  ? (0, r.jsx)(z.JM, {
                      className: ei().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: ec,
                      variant: "filled",
                      onClick: e_,
                      disabled: l,
                    })
                  : (0, r.jsx)(z.JM, {
                      className: ei().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: ec,
                      onClick: e_,
                      disabled: l,
                      children: (0, r.jsx)(E.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [l, v, e_, ec],
            ),
            ev = (0, W.W)(() => {
              $() ||
                (y.setUtmLink(p),
                y.openPlaylistTrailer(o.id),
                V(D.OB.Playlist, o.id));
            });
          (0, s.useEffect)(() => {
            var e;
            (null === (e = o.trailer) || void 0 === e
              ? void 0
              : e.isAvailable) &&
              "true" === er.get(P.wxR.OPEN_TRAILER) &&
              ev();
          }, [
            w,
            o.personalColor,
            ev,
            er,
            T,
            null === (t = o.trailer) || void 0 === t ? void 0 : t.isAvailable,
          ]);
          let ex = (0, s.useMemo)(() => {
              var e;
              return (null === (e = o.trailer) || void 0 === e
                ? void 0
                : e.isAvailable) && !v
                ? (0, r.jsx)(z.Wd, {
                    children: (0, r.jsx)(z.eP, {
                      size: "s",
                      radius: "xxxl",
                      iconSize: "xxs",
                      className: eO().trailerControl,
                      onClick: ev,
                      disabled: !o.isAvailable,
                      style: el,
                      children: (0, r.jsx)(E.Z, { id: "entity-names.trailer" }),
                    }),
                  })
                : null;
            }, [
              ev,
              v,
              null === (a = o.trailer) || void 0 === a ? void 0 : a.isAvailable,
              o.isAvailable,
              el,
            ]),
            eg = (0, s.useMemo)(() => {
              if (o.canUserChange && h.checkExperiment(P.peG.WebNextUGC, "on"))
                return (0, r.jsx)("div", {
                  className: eO().ugcControls,
                  children: (0, r.jsx)(e7, { playlist: o }),
                });
            }, [h, o]),
            eh = (0, s.useMemo)(
              () =>
                H(
                  { id: "entity-names.likes-count-description" },
                  { count: o.actualLikesCount },
                ),
              [H, o.actualLikesCount],
            ),
            ef = (0, W.W)(() => {
              O(), o.isLiked ? q() : Q();
            }),
            ey = (0, U.V)(() =>
              o.isFavouritePlaylist
                ? void 0
                : v
                  ? (0, r.jsx)(z.dJ, {
                      className: eO().likeControl,
                      isLiked: o.isLiked,
                      onClick: ef,
                      variant: "default",
                      size: ee,
                      iconSize: et,
                      iconClassName: eO().likeIcon,
                      disabled: !B.isAuthorized,
                    })
                  : (0, r.jsx)(z.dJ, {
                      className: eO().likeControl,
                      isLiked: o.isLiked,
                      onClick: ef,
                      withRipple: !0,
                      iconSize: et,
                      size: ee,
                      variant: "default",
                      "aria-label": eh,
                      iconClassName: eO().likeIcon,
                      disabled: !B.isAuthorized,
                      children: em,
                    }),
            ),
            eb =
              h.checkExperiment(P.peG.WebNextEnableDownloadControls, "on") &&
              B.hasPlus &&
              !v &&
              o.isFavouritePlaylist &&
              o.isOwnPlaylist,
            eC = (0, s.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: eO().controls,
                  children: [
                    (0, r.jsxs)("div", {
                      className: eO().mainControls,
                      children: [
                        ep,
                        (0, r.jsx)(eV, {}),
                        ex,
                        ey,
                        Z &&
                          (0, r.jsx)(z.RT, {
                            onClick: F,
                            isPinned: o.isPinned,
                            className: eO().pinControl,
                          }),
                        (0, r.jsx)(e9, {
                          playlist: o,
                          open: M,
                          onOpenChange: S,
                          wrapperClassName: eO().menuControl,
                          size: ee,
                          icon: (0, r.jsx)(b.Icon, {
                            size: et,
                            variant: "more",
                          }),
                          ...(0, c.BA)(
                            c.QM.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                        eb &&
                          (0, r.jsx)(eI, {
                            trackIds: k,
                            className: eO().downloadControl,
                          }),
                      ],
                    }),
                    eg,
                  ],
                }),
              [ep, ex, ey, F, o, eb, k, M, ee, et, eg, Z],
            );
          return (0, r.jsx)("div", {
            className: eO().root,
            children: (0, r.jsx)(L, {
              headingVariant: "h1",
              ref: d,
              className: n,
              controls: eC,
              meta: (0, r.jsx)(e5, { playlist: o }),
              entityName: H({ id: "entity-names.playlist" }),
              title: o.title,
              canChangeTitle: eo,
              maxTitleLength: eH.cp,
              onTitleChange: en,
              cover: (0, r.jsx)(eX, { playlist: o }),
            }),
          });
        }),
        te = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(e6, { forwardRef: t, ...e }),
        );
      var tt = a(37667),
        ta = a(77519),
        ti = a.n(ta);
      let to = (0, n.Pi)((e) => {
          let {
              album: t,
              className: a,
              forwardRef: o,
              "aria-labelledby": l,
            } = e,
            { language: n } = (0, P.ZSk)(),
            { formatMessage: s } = (0, f.Z)(),
            { from: d, utmLink: c } = (0, P.MhG)({
              pageId: P.Rhz.ALBUM,
              blockId: P.aUg.ALBUM,
              contextType: I.A.Album,
              contextId: t.id,
            }),
            {
              settings: { isMobile: u },
              promolanding: { state: _ },
            } = (0, P.oR4)(),
            { isPlaying: m, togglePlay: p } = (0, P.qmq)({
              playContextParams: {
                contextData: {
                  type: I.A.Album,
                  meta: { id: t.id },
                  from: d,
                  utmLink: c,
                  playDisliked: !0,
                },
                loadContextMeta: !0,
                entitiesData: _.unloadedEntitiesDataFromModels,
              },
              playbackId: P.jiA.PROMO_LANDING,
              sonataState: _,
            }),
            v = (0, O.yv)(t),
            x = (0, O.H0)(t.type),
            { iconSize: g, controlSize: h } = i(u),
            y = (0, U.V)(() =>
              u
                ? (0, r.jsx)(z.JM, {
                    className: ei().playControl,
                    color: "primary",
                    buttonVariant: "default",
                    iconSize: "xxl",
                    isPlaying: m,
                    onClick: p,
                    variant: "filled",
                    disabled: !t.isAvailable,
                  })
                : (0, r.jsx)(z.JM, {
                    className: ei().playControl,
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: m,
                    onClick: p,
                    disabled: !t.isAvailable,
                    children: (0, r.jsx)(E.Z, { id: "player-actions.listen" }),
                  }),
            );
          return (0, r.jsx)(L, {
            ref: o,
            headingVariant: "h1",
            className: a,
            controls: (0, r.jsx)("div", {
              className: ei().controlsContainer,
              children: (0, r.jsxs)("div", {
                className: ei().controls,
                children: [
                  y,
                  (0, r.jsx)(z.dJ, {
                    className: ti().likeControl,
                    isLiked: t.isLiked,
                    onClick: v,
                    variant: "default",
                    size: h,
                    iconSize: g,
                    withRipple: !u,
                    disabled: !t.isAvailable,
                  }),
                ],
              }),
            }),
            meta: (0, r.jsx)(X, { album: t, withArtistLink: !1 }),
            entityName: x,
            title: t.title,
            cover: (0, r.jsx)(et, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
            }),
            "aria-labelledby": l,
            version: t.version,
            logo: (0, r.jsx)(z.rU, {
              component: (0, r.jsx)("a", {}),
              target: "_blank",
              href: "/",
              "aria-label": s({ id: "footer.yandex-music" }),
              children: (0, r.jsx)(tt.Logo, {
                size: "xs",
                alignIcon: tt.AlignLogoIcon.CENTER,
                lang: "ru" !== n ? tt.LogoLang.EN : tt.LogoLang.RU,
              }),
            }),
          });
        }),
        tr = (0, s.forwardRef)((e, t) =>
          (0, r.jsx)(to, { forwardRef: t, ...e }),
        );
    },
    30948: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return i.SomethingWentWrong;
        },
      });
      var i = a(51987);
    },
    51987: function (e, t, a) {
      "use strict";
      a.d(t, {
        SomethingWentWrong: function () {
          return v;
        },
      });
      var i = a(75441),
        o = a(32358),
        r = a(62569),
        l = a(65067),
        n = a(15937),
        s = a(68208),
        d = a(69756),
        c = a(17392),
        u = a(13534),
        _ = a(97141),
        m = a(28652),
        p = a.n(m);
      let v = (0, r.Pi)((e) => {
        let { className: t, withBackwardControl: a = !0 } = e,
          r = (0, l.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: m } = (0, u.$Y6)();
        return (0, i.jsxs)("div", {
          className: (0, o.W)(p().root, t),
          children: [
            a &&
              (0, i.jsx)(_.nP, {
                withBackwardFallback: "/",
                className: (0, o.W)(p().navigation, {
                  [p().navigation_desktop]: !m,
                }),
                withForwardControl: !1,
              }),
            (0, i.jsxs)("div", {
              className: (0, o.W)(p().content, { [p().content_shrink]: !a }),
              children: [
                (0, i.jsx)(d.Icon, {
                  className: p().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, i.jsx)(c.Heading, {
                  className: (0, o.W)(p().title, p().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, i.jsx)(n.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, i.jsxs)(c.Caption, {
                  className: (0, o.W)(p().text, p().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, i.jsx)(n.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, i.jsx)(s.Button, {
                  onClick: r,
                  className: p().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, i.jsxs)(c.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, i.jsx)(n.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    33749: function (e) {
      e.exports = {
        menuControl: "PageHeaderAlbumControls_menuControl__wlqyr",
        likeControl: "PageHeaderAlbumControls_likeControl__eohAO",
        pinOrDonationControl:
          "PageHeaderAlbumControls_pinOrDonationControl__3aFUW",
        trailerControl: "PageHeaderAlbumControls_trailerControl___HcW0",
      };
    },
    35324: function (e) {
      e.exports = {
        meta: "PageHeaderAlbumMeta_meta__zsMI8",
        artistCover: "PageHeaderAlbumMeta_artistCover__L3jJ0",
        artistLabel: "PageHeaderAlbumMeta_artistLabel__2WZSM",
        year: "PageHeaderAlbumMeta_year__2X3NO",
        artists: "PageHeaderAlbumMeta_artists__Nfdob",
        artistsSpoiler: "PageHeaderAlbumMeta_artistsSpoiler__VOkfE",
        artistLink: "PageHeaderAlbumMeta_artistLink__eTSrZ",
        year_dot: "PageHeaderAlbumMeta_year_dot__TrSFr",
      };
    },
    86224: function (e) {
      e.exports = {
        root: "PageHeaderBase_root__xMIBu",
        root_withCover: "PageHeaderBase_root_withCover__JIKxy",
        root_withCoverAndLogo: "PageHeaderBase_root_withCoverAndLogo__nsTU2",
        logo: "PageHeaderBase_logo__pD3fg",
        coverCell: "PageHeaderBase_coverCell__nBx4c",
        content: "PageHeaderBase_content___DNyv",
        info: "PageHeaderBase_info__GRcah",
        entityContainer: "PageHeaderBase_entityContainer__BDwxT",
        title_withDisclaimerLabel:
          "PageHeaderBase_title_withDisclaimerLabel__Apuhc",
        entityName: "PageHeaderBase_entityName__9Sj_Q",
        disclaimerLabel: "PageHeaderBase_disclaimerLabel___2wo6",
        meta: "PageHeaderBase_meta__bMvfR",
        meta_withDisclaimerLabel:
          "PageHeaderBase_meta_withDisclaimerLabel__nxckS",
        controls: "PageHeaderBase_controls__HzGgE",
      };
    },
    18751: function (e) {
      e.exports = {
        root: "PageHeaderTextField_root__Aq9UL",
        root_textarea: "PageHeaderTextField_root_textarea__OgDzd",
      };
    },
    53229: function (e) {
      e.exports = {
        root: "PageHeaderTitle_root__ESu2q",
        editButton: "PageHeaderTitle_editButton__KF4eh",
        editButton_centered: "PageHeaderTitle_editButton_centered__W9EwU",
        textField: "PageHeaderTitle_textField__LXJ3X",
        textField_long: "PageHeaderTitle_textField_long__ReeJz",
        title: "PageHeaderTitle_title__caKyB",
        version: "PageHeaderTitle_version__g5BeO",
        version_withOtherVersions:
          "PageHeaderTitle_version_withOtherVersions__Amfwk",
        heading: "PageHeaderTitle_heading__UADXi",
        heading_withVersion: "PageHeaderTitle_heading_withVersion__jw12r",
        textFieldContainer: "PageHeaderTitle_textFieldContainer__FSD_B",
        font_long: "PageHeaderTitle_font_long__q9Leq",
        font_short: "PageHeaderTitle_font_short__76VRG",
        font_mobile: "PageHeaderTitle_font_mobile__M1__v",
        stickyTitle: "PageHeaderTitle_stickyTitle__CL1m4",
      };
    },
    84582: function (e) {
      e.exports = {
        coverImage: "PageHeaderCover_coverImage__i0wBv",
        coverImage_hoverable: "PageHeaderCover_coverImage_hoverable__9XZK7",
        coverButton: "PageHeaderCover_coverButton__3zeub",
        coverButton_hoverable: "PageHeaderCover_coverButton_hoverable__hS1Gq",
        plusBadge: "PageHeaderCover_plusBadge__O09t4",
      };
    },
    48224: function (e) {
      e.exports = {
        root: "PageHeaderShimmer_root__kqSwa",
        cover: "PageHeaderShimmer_cover__ay2cr",
        content: "PageHeaderShimmer_content__SdBKK",
        info: "PageHeaderShimmer_info__cZkS2",
        entityName: "PageHeaderShimmer_entityName__tlWnA",
        title: "PageHeaderShimmer_title__xKG4e",
        meta: "PageHeaderShimmer_meta__YWx0m",
        controls: "PageHeaderShimmer_controls__gPErM",
        desktopPlayButton: "PageHeaderShimmer_desktopPlayButton__R7EmH",
        button: "PageHeaderShimmer_button__13qrG",
      };
    },
    84944: function (e) {
      e.exports = {
        controlsContainer: "CommonPageHeader_controlsContainer__4_h22",
        controls: "CommonPageHeader_controls__c27E_",
        playControl: "CommonPageHeader_playControl__gYOuR",
      };
    },
    81342: function (e) {
      e.exports = {
        plusPaywallButton: "PageHeaderAlbum_plusPaywallButton__yJWCh",
        booksLogo: "PageHeaderAlbum_booksLogo__f4gjV",
      };
    },
    62601: function (e) {
      e.exports = {
        root: "PageHeaderArtist_root__QhL_a",
        playControl: "PageHeaderArtist_playControl__N_3l_",
        trailerControl: "PageHeaderArtist_trailerControl__BWQXJ",
        likeControl: "PageHeaderArtist_likeControl__oEdXe",
        menuControl: "PageHeaderArtist_menuControl__8qi0J",
        pinControl: "PageHeaderArtist_pinControl__dQToz",
        controls: "PageHeaderArtist_controls__U_6g7",
        main: "PageHeaderArtist_main__VNnip",
        brandedControl: "PageHeaderArtist_brandedControl__b6qhV",
        meta: "PageHeaderArtist_meta__ZAlx_",
        label: "PageHeaderArtist_label__rXyrB",
        donationButtonTooltip: "PageHeaderArtist_donationButtonTooltip__G7XtX",
        tooltipText: "PageHeaderArtist_tooltipText__aYfaU",
        closeTooltip: "PageHeaderArtist_closeTooltip__z2w_O",
      };
    },
    44534: function (e) {
      e.exports = {
        meta: "PageHeaderNonMusic_meta__9DQPy",
        infoNote: "PageHeaderNonMusic_infoNote__7xbV5",
        infoNoteIcon: "PageHeaderNonMusic_infoNoteIcon__VDK7_",
        infoNoteText: "PageHeaderNonMusic_infoNoteText__DCQq8",
        plusPaywallButton: "PageHeaderNonMusic_plusPaywallButton__O7Tx_",
        booksLogo: "PageHeaderNonMusic_booksLogo__4_TgU",
      };
    },
    16131: function (e) {
      e.exports = {
        cancelIcon: "DownloadButton_cancelIcon__MR36M",
        root_downloading: "DownloadButton_root_downloading__H8Eh7",
        root: "DownloadButton_root__AU5eq",
        downloadingProgress: "DownloadButton_downloadingProgress__eenjt",
        progress: "DownloadButton_progress__MM72T",
        progressText: "DownloadButton_progressText__aQ12B",
        downloadedIcon: "DownloadButton_downloadedIcon__tETl2",
      };
    },
    64377: function (e) {
      e.exports = {
        root: "PageHeaderPlaylist_root__yJBii",
        trailerControl: "PageHeaderPlaylist_trailerControl__grrD9",
        pinControl: "PageHeaderPlaylist_pinControl__hJOde",
        downloadControl: "PageHeaderPlaylist_downloadControl__ijcAx",
        menuControl: "PageHeaderPlaylist_menuControl__RGH0G",
        likeControl: "PageHeaderPlaylist_likeControl__bCypn",
        controls: "PageHeaderPlaylist_controls__uSwwK",
        mainControls: "PageHeaderPlaylist_mainControls__k_S_i",
        ugcControls: "PageHeaderPlaylist_ugcControls__9q8Ne",
      };
    },
    59651: function (e) {
      e.exports = { root: "PageHeaderPlaylistBrandingLink_root__7dQVL" };
    },
    35445: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistCover_root__Vdn75",
        coverButton: "PageHeaderPlaylistCover_coverButton__dw0rj",
        coverButton_hoverable:
          "PageHeaderPlaylistCover_coverButton_hoverable__4Si4Y",
        coverImage: "PageHeaderPlaylistCover_coverImage__OC58K",
        backCoverColor: "PageHeaderPlaylistCover_backCoverColor__7z3dk",
        button: "PageHeaderPlaylistCover_button__vCYgD",
        fileUploadContainer:
          "PageHeaderPlaylistCover_fileUploadContainer___JnqP",
        fileUploadContainer_hovered:
          "PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X",
        buttonContainer: "PageHeaderPlaylistCover_buttonContainer__OkEaT",
        buttonContainer_withCursorPointer:
          "PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha",
        formFile: "PageHeaderPlaylistCover_formFile__1xnry",
      };
    },
    92546: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistMeta_root__9SHZ0",
        description: "PageHeaderPlaylistMeta_description__edoVx",
        descriptionButton: "PageHeaderPlaylistMeta_descriptionButton__Jkbg9",
        descriptionLink: "PageHeaderPlaylistMeta_descriptionLink__OcY5m",
        updatedText: "PageHeaderPlaylistMeta_updatedText__FSo_0",
        descriptionActionLink:
          "PageHeaderPlaylistMeta_descriptionActionLink__aGgtK",
        addDescription: "PageHeaderPlaylistMeta_addDescription__bFw2Y",
        textField: "PageHeaderPlaylistMeta_textField__J5QMd",
        actionButtons: "PageHeaderPlaylistMeta_actionButtons__EYX8Z",
        saveButton: "PageHeaderPlaylistMeta_saveButton__rZbPS",
        cancelButton: "PageHeaderPlaylistMeta_cancelButton__Qc5lG",
      };
    },
    37557: function (e) {
      e.exports = {
        button: "PageHeaderPlaylistUgcUploadButton_button__mWtCr",
        form: "PageHeaderPlaylistUgcUploadButton_form__V64Yu",
      };
    },
    77519: function (e) {
      e.exports = {
        likeControl: "PromoLandingPageHeaderAlbum_likeControl__iWuEF",
      };
    },
    28652: function (e) {
      e.exports = {
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
]);
