(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7384],
  {
    59103: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 37667)),
        Promise.resolve().then(n.bind(n, 38861)),
        Promise.resolve().then(n.bind(n, 95009)),
        Promise.resolve().then(n.bind(n, 82770)),
        Promise.resolve().then(n.bind(n, 73462)),
        Promise.resolve().then(n.bind(n, 85739)),
        Promise.resolve().then(n.bind(n, 88318)),
        Promise.resolve().then(n.bind(n, 54547)),
        Promise.resolve().then(n.bind(n, 9648)),
        Promise.resolve().then(n.bind(n, 94226)),
        Promise.resolve().then(n.bind(n, 17304)),
        Promise.resolve().then(n.bind(n, 70447)),
        Promise.resolve().then(n.bind(n, 80625)),
        Promise.resolve().then(n.bind(n, 22094)),
        Promise.resolve().then(n.bind(n, 60517)),
        Promise.resolve().then(n.bind(n, 81052)),
        Promise.resolve().then(n.bind(n, 96720)),
        Promise.resolve().then(n.bind(n, 98549)),
        Promise.resolve().then(n.bind(n, 35277)),
        Promise.resolve().then(n.bind(n, 48973)),
        Promise.resolve().then(n.bind(n, 34708)),
        Promise.resolve().then(n.bind(n, 32654)),
        Promise.resolve().then(n.bind(n, 58364)),
        Promise.resolve().then(n.bind(n, 60441)),
        Promise.resolve().then(n.bind(n, 70770)),
        Promise.resolve().then(n.bind(n, 56577)),
        Promise.resolve().then(n.bind(n, 77909)),
        Promise.resolve().then(n.bind(n, 69959)),
        Promise.resolve().then(n.bind(n, 22093)),
        Promise.resolve().then(n.bind(n, 77828)),
        Promise.resolve().then(n.bind(n, 27817)),
        Promise.resolve().then(n.bind(n, 91377)),
        Promise.resolve().then(n.bind(n, 44878)),
        Promise.resolve().then(n.bind(n, 55496)),
        Promise.resolve().then(n.bind(n, 82937)),
        Promise.resolve().then(n.bind(n, 90239)),
        Promise.resolve().then(n.bind(n, 29073)),
        Promise.resolve().then(n.bind(n, 66511)),
        Promise.resolve().then(n.bind(n, 57750)),
        Promise.resolve().then(n.bind(n, 52727)),
        Promise.resolve().then(n.bind(n, 74833)),
        Promise.resolve().then(n.bind(n, 74212)),
        Promise.resolve().then(n.bind(n, 19867)),
        Promise.resolve().then(n.bind(n, 57905)),
        Promise.resolve().then(n.bind(n, 79066)),
        Promise.resolve().then(n.bind(n, 627)),
        Promise.resolve().then(n.bind(n, 35999)),
        Promise.resolve().then(n.bind(n, 65164)),
        Promise.resolve().then(n.bind(n, 54701)),
        Promise.resolve().then(n.bind(n, 57307)),
        Promise.resolve().then(n.bind(n, 42469)),
        Promise.resolve().then(n.bind(n, 58410)),
        Promise.resolve().then(n.bind(n, 6575)),
        Promise.resolve().then(n.bind(n, 15826)),
        Promise.resolve().then(n.bind(n, 83425)),
        Promise.resolve().then(n.bind(n, 79815)),
        Promise.resolve().then(n.bind(n, 82944)),
        Promise.resolve().then(n.bind(n, 53516)),
        Promise.resolve().then(n.bind(n, 40230)),
        Promise.resolve().then(n.bind(n, 20915)),
        Promise.resolve().then(n.bind(n, 24840)),
        Promise.resolve().then(n.bind(n, 37109)),
        Promise.resolve().then(n.bind(n, 72716)),
        Promise.resolve().then(n.bind(n, 72276)),
        Promise.resolve().then(n.bind(n, 46746)),
        Promise.resolve().then(n.bind(n, 89773)),
        Promise.resolve().then(n.bind(n, 21111)),
        Promise.resolve().then(n.bind(n, 47129)),
        Promise.resolve().then(n.bind(n, 31168));
    },
    58720: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return d;
        },
      });
      var r,
        o = n(73484),
        i = n(65067),
        s = {
          6699: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let r = n(352),
              o = n(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: n, throttleTimeout: i } = e,
                s = (0, o.useRef)(null),
                [l, a] = (0, o.useState)(!!n),
                u = (0, o.useMemo)(
                  () =>
                    (0, r.throttle)(() => {
                      a(!n),
                        s.current && window.clearTimeout(s.current),
                        (s.current = window.setTimeout(() => {
                          a(!!n);
                        }, t));
                    }, i),
                  [t, n, i],
                ),
                d = (0, o.useCallback)(() => {
                  a(!!n), s.current && window.clearTimeout(s.current);
                }, [n]);
              return (
                (0, o.useEffect)(
                  () => () => {
                    s.current && window.clearTimeout(s.current);
                  },
                  [],
                ),
                { state: l, handleDebouncedToggle: u, reset: d }
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
            e.exports = o;
          },
          810: (e) => {
            e.exports = r || (r = n.t(i, 2));
          },
        },
        l = {};
      function a(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var n = (l[e] = { exports: {} });
        return s[e](n, n.exports, a), n.exports;
      }
      var u = {};
      (() => {
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.useScroll = void 0);
        let e = a(810),
          t = a(361),
          n = a(6699);
        u.useScroll = (r) => {
          let { onScroll: o, listenIsScrolling: i, elementRef: s } = r,
            { state: l, handleDebouncedToggle: a } = (0, n.useDebouncedToggle)({
              delay: 1e3,
              throttleTimeout: 100,
            }),
            u = (0, e.useCallback)(() => {
              i && a(), null == o || o();
            }, [i, a, o]);
          return (
            (0, e.useEffect)(() => {
              let e = (0, t.getElementFromRefOrElement)(s);
              if (null === e) return;
              let n = null != e ? e : window,
                r = { capture: !0, passive: !0 };
              return (
                n.addEventListener("scroll", u, r),
                () => n.removeEventListener("scroll", u, r)
              );
            }, [s, u]),
            l
          );
        };
      })(),
        u.__esModule;
      var d = u.useScroll;
    },
    53577: function (e, t, n) {
      "use strict";
      n.d(t, {
        mH: function () {
          return l.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return o;
        },
      });
      var r = n(22874);
      let o = (e) => ({
          tag: e.tag,
          title: e.title,
          subGenres: (0, r.pj)(
            (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
          ),
        }),
        i = r.V5.model("GenreListItemSubGenreModel", {
          tag: r.V5.string,
          title: r.V5.string,
        }),
        s = r.V5.model("GenreListItemModel", {
          tag: r.V5.string,
          title: r.V5.string,
          subGenres: r.V5.array(i),
        });
      var l = n(95009);
    },
    95009: function (e, t, n) {
      "use strict";
      n.d(t, {
        Genre: function () {
          return u;
        },
      });
      var r = n(75441),
        o = n(62569),
        i = n(17392),
        s = n(97141),
        l = n(19956),
        a = n.n(l);
      let u = (0, o.Pi)((e) => {
        let { tag: t, title: n, subGenres: o } = e;
        return (0, r.jsxs)("div", {
          className: a().root,
          children: [
            (0, r.jsx)(s.rU, {
              className: a().link,
              href: "/genre/".concat(t),
              children: (0, r.jsx)(i.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: a().linkTitle,
                children: n,
              }),
            }),
            o.length > 0 &&
              (0, r.jsx)("div", {
                className: a().list,
                children: o.map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: a().item,
                      children: (0, r.jsx)(s.rU, {
                        className: a().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, r.jsx)(i.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: a().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    69947: function (e, t, n) {
      "use strict";
      n.d(t, {
        I7: function () {
          return m;
        },
        kl: function () {
          return v;
        },
        b4: function () {
          return h;
        },
        at: function () {
          return i;
        },
      }),
        n(81286);
      var r = n(65067),
        o = n(13534);
      let i = (e, t) => (
        (0, o.uK4)().get(o.Xt8),
        [
          (0, r.useMemo)(() => {
            if (void 0 === t) return {};
            let n = t - 17;
            return {
              "--average-color-background": e,
              transform: "translateY(".concat(t >= 17 ? 0 : n, "px)"),
              opacity: 1,
            };
          }, [t, !1, e]),
          (0, r.useMemo)(() => ({ "--average-color-background": e }), [e]),
        ]
      );
      var s = n(75441),
        l = n(71361),
        a = n(62569),
        u = n(58720),
        d = n(97141);
      let c = (e) => {
          let { element: t, scrollTop: n, isMobile: r } = e,
            o = 0.6 * t.clientHeight;
          return n + (r ? 60 : 76) >= t.offsetTop + o;
        },
        m = (0, a.Pi)((e) => {
          let {
              children: t,
              scrollElement: n,
              outerTitle: i = "",
              headerElement: a,
              headerThreshold: m,
              shouldHideHeader: v,
            } = e,
            [h, _] = (0, r.useState)(i),
            [b, g] = (0, r.useState)(null),
            [P, f] = (0, r.useState)(null),
            [x, p] = (0, r.useState)(null),
            [j, N] = (0, r.useState)(!1),
            [k, w] = (0, r.useState)(!1),
            [W, S] = (0, r.useState)(!1),
            [T, E] = (0, r.useState)(!1),
            {
              settings: { isMobile: G },
            } = (0, o.oR4)();
          (0, r.useLayoutEffect)(() => {
            _(i);
          }, [i]);
          let C = (0, r.useCallback)(() => {
            let e = null != m ? m : 10,
              t = a ? Number(a.offsetTop) - e : e;
            t < 0 && (t = 0);
            let r = (e) => {
              S(e > t),
                v && E(e > 30),
                (null == b ? void 0 : b.current) &&
                  N(
                    c({
                      element: null == b ? void 0 : b.current,
                      scrollTop: e,
                      isMobile: G,
                    }),
                  ),
                (null == P ? void 0 : P.current) &&
                  w(
                    c({
                      element: null == P ? void 0 : P.current,
                      scrollTop: e,
                      isMobile: G,
                    }),
                  );
            };
            G ? r(window.scrollY) : n && r(n.scrollTop);
          }, [m, a, G, v, b, P, n]);
          (0, r.useEffect)(() => {
            G
              ? 0 === window.scrollY && S(!1)
              : (n && 0 !== n.scrollTop) || S(!1);
          }, [n, null == n ? void 0 : n.scrollTop, G]);
          let F = (0, r.useMemo)(
            () =>
              G
                ? { onScroll: (0, l.Z)(C, 200) }
                : { onScroll: (0, l.Z)(C, 200), elementRef: n },
            [C, n, G],
          );
          (0, u.v)(F);
          let y = (0, r.useMemo)(
            () => ({
              title: h,
              setTitle: _,
              titleElement: b,
              scrollElement: G ? null : n,
              setTitleElement: g,
              childElement: P,
              setChildElement: f,
              child: x,
              setChild: p,
              isScrolledChild: k,
              isScrolledTitle: j,
              isScrolling: W,
              isHeaderHidden: T,
            }),
            [h, j, b, n, W, G, x, P, k, T],
          );
          return (0, s.jsx)(d.pI.Provider, { value: y, children: t });
        }),
        v = (e) => {
          let { children: t, child: n, className: o } = e,
            { setChildElement: i, setChild: l } = (0, r.useContext)(d.pI),
            a = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              (null == a ? void 0 : a.current) && i(a), n && l(n);
            }, [a, n, i, l]),
            (0, r.useEffect)(
              () => () => {
                l(null);
              },
              [l],
            ),
            (0, s.jsx)("div", { ref: a, className: o, children: t })
          );
        },
        h = (e) => {
          let { children: t, title: n, className: o } = e,
            { setTitleElement: i, setTitle: l } = (0, r.useContext)(d.pI),
            a = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              (null == a ? void 0 : a.current) && i(a), n && l(n);
            }, [a, n, i, l]),
            (0, r.useEffect)(
              () => () => {
                l("");
              },
              [l],
            ),
            (0, s.jsx)("div", { ref: a, className: o, children: t })
          );
        };
    },
    82770: function (e, t, n) {
      "use strict";
      n.d(t, {
        GenresNotFoundPage: function () {
          return i;
        },
      });
      var r = n(75441),
        o = n(35551);
      let i = () => (0, r.jsx)(o.T, {});
    },
    73462: function (e, t, n) {
      "use strict";
      n.d(t, {
        GenresPage: function () {
          return b;
        },
      });
      var r = n(75441),
        o = n(62569),
        i = n(98730),
        s = n(65067),
        l = n(17294),
        a = n(17392),
        u = n(30948),
        d = n(69947),
        c = n(53577),
        m = n(13534),
        v = n(97141),
        h = n(25018),
        _ = n.n(h);
      let b = (0, o.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: n } = (0, m.oR4)(),
          { contentScrollRef: o, setContentScrollRef: h } = (0, m.$Y6)(),
          b = (0, m.k67)();
        return ((0, s.useEffect)(
          () => () => {
            n.reset();
          },
          [n, t],
        ),
        n.isNotFound && (0, i.notFound)(),
        (0, m.NOh)(n.isResolved),
        t && n.isNeededToLoad && (0, s.use)(n.getData(t)),
        n.isRejected)
          ? (0, r.jsx)(u.D, {})
          : (0, r.jsxs)(d.I7, {
              scrollElement: o,
              outerTitle: n.title,
              children: [
                (0, r.jsx)(v.h4, {
                  variant: v.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: b.canBack,
                  children: (0, r.jsx)(a.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: n.title,
                  }),
                }),
                (0, r.jsx)(l.t, {
                  className: _().root,
                  containerClassName: _().content,
                  ref: h,
                  children: (0, r.jsx)("div", {
                    className: _().list,
                    children: n.items.map((e) =>
                      (0, r.jsx)(
                        c.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    35551: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return r.NotFound;
        },
      });
      var r = n(15898);
    },
    15898: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotFound: function () {
          return h;
        },
      });
      var r = n(75441),
        o = n(32358),
        i = n(62569),
        s = n(15937),
        l = n(68208),
        a = n(69756),
        u = n(17392),
        d = n(13534),
        c = n(97141),
        m = n(35129),
        v = n.n(m);
      let h = (0, i.Pi)((e) => {
        let { className: t } = e,
          { contentRef: n } = (0, d.$Y6)(),
          i = (0, d.s0h)("/");
        return (
          (0, d.ZP4)(!0),
          (0, r.jsxs)("div", {
            className: (0, o.W)(v().root, { [v().root_desktop]: !n }, t),
            children: [
              (0, r.jsx)(c.nP, {
                withBackwardFallback: "/",
                className: v().navigation,
                withForwardControl: !1,
              }),
              (0, r.jsxs)("div", {
                className: v().content,
                children: [
                  (0, r.jsx)(a.Icon, {
                    className: v().icon,
                    variant: "musicLogo",
                  }),
                  (0, r.jsx)(u.Heading, {
                    className: (0, o.W)(v().title, v().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, r.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, r.jsx)(u.Caption, {
                    className: (0, o.W)(v().text, v().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, r.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, r.jsx)(l.Button, {
                    onClick: i,
                    className: v().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, r.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, r.jsx)(s.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    30948: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return r.SomethingWentWrong;
        },
      });
      var r = n(51987);
    },
    51987: function (e, t, n) {
      "use strict";
      n.d(t, {
        SomethingWentWrong: function () {
          return _;
        },
      });
      var r = n(75441),
        o = n(32358),
        i = n(62569),
        s = n(65067),
        l = n(15937),
        a = n(68208),
        u = n(69756),
        d = n(17392),
        c = n(13534),
        m = n(97141),
        v = n(28652),
        h = n.n(v);
      let _ = (0, i.Pi)((e) => {
        let { className: t, withBackwardControl: n = !0 } = e,
          i = (0, s.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: v } = (0, c.$Y6)();
        return (0, r.jsxs)("div", {
          className: (0, o.W)(h().root, t),
          children: [
            n &&
              (0, r.jsx)(m.nP, {
                withBackwardFallback: "/",
                className: (0, o.W)(h().navigation, {
                  [h().navigation_desktop]: !v,
                }),
                withForwardControl: !1,
              }),
            (0, r.jsxs)("div", {
              className: (0, o.W)(h().content, { [h().content_shrink]: !n }),
              children: [
                (0, r.jsx)(u.Icon, {
                  className: h().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, r.jsx)(d.Heading, {
                  className: (0, o.W)(h().title, h().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, r.jsx)(l.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, r.jsxs)(d.Caption, {
                  className: (0, o.W)(h().text, h().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, r.jsx)(l.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, r.jsx)(a.Button, {
                  onClick: i,
                  className: h().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, r.jsxs)(d.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, r.jsx)(l.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    19956: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    25018: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    35129: function (e) {
      e.exports = {
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
  function (e) {
    e.O(
      0,
      [
        5970, 9876, 8580, 9125, 7138, 5453, 7873, 9282, 7141, 7294, 7058, 6158,
        1744,
      ],
      function () {
        return e((e.s = 59103));
      },
    ),
      (_N_E = e.O());
  },
]);
