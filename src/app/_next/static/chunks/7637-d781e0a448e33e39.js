(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7637, 6642, 3619, 1752, 7463],
  {
    46642: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return c;
        },
      });
      var i,
        r,
        n = a(80766),
        s = a(91207),
        o = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (r && (r += " "), (r += i));
                      else for (a in t) t[a] && (r && (r += " "), (r += a));
                    }
                    return r;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => r });
            let r = i;
          },
          561: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "By12CU9obvaH0jYtauNw",
              root_scrolling: "MFfv7uDaaJhS_oiAzQNT",
              root_notScrolling: "pnFSEGiRmI9JuhUxbfVe",
              container: "YsFmmSnMXb5VMh5VyqeV",
            };
          },
          6161: (e, t, a) => {
            var i = a(810),
              r = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              s = Object.prototype.hasOwnProperty,
              o =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function u(e, t, a) {
              var i,
                n = {},
                u = null,
                d = null;
              for (i in (void 0 !== a && (u = "" + a),
              void 0 !== t.key && (u = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                s.call(t, i) && !l.hasOwnProperty(i) && (n[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === n[i] && (n[i] = t[i]);
              return {
                $$typeof: r,
                type: e,
                key: u,
                ref: d,
                props: n,
                _owner: o.current,
              };
            }
            (t.Fragment = n), (t.jsx = u), (t.jsxs = u);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          9110: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef =
                t.useDebouncedToggle =
                t.useResize =
                t.useIsomorphicEffect =
                t.useForceUpdateRef =
                t.useElementOffsetY =
                t.getElementNameByDataAttribute =
                t.createIntersectionObserver =
                t.useIntersectionObserver =
                t.useKeyboardNavigation =
                t.useScroll =
                t.useForwardRef =
                  void 0);
            var i = a(245);
            Object.defineProperty(t, "useForwardRef", {
              enumerable: !0,
              get: function () {
                return i.useForwardRef;
              },
            });
            var r = a(2067);
            Object.defineProperty(t, "useScroll", {
              enumerable: !0,
              get: function () {
                return r.useScroll;
              },
            });
            var n = a(5188);
            Object.defineProperty(t, "useKeyboardNavigation", {
              enumerable: !0,
              get: function () {
                return n.useKeyboardNavigation;
              },
            });
            var s = a(5663);
            Object.defineProperty(t, "useIntersectionObserver", {
              enumerable: !0,
              get: function () {
                return s.useIntersectionObserver;
              },
            }),
              Object.defineProperty(t, "createIntersectionObserver", {
                enumerable: !0,
                get: function () {
                  return s.createIntersectionObserver;
                },
              }),
              Object.defineProperty(t, "getElementNameByDataAttribute", {
                enumerable: !0,
                get: function () {
                  return s.getElementNameByDataAttribute;
                },
              });
            var o = a(2101);
            Object.defineProperty(t, "useElementOffsetY", {
              enumerable: !0,
              get: function () {
                return o.useElementOffsetY;
              },
            });
            var l = a(2767);
            Object.defineProperty(t, "useForceUpdateRef", {
              enumerable: !0,
              get: function () {
                return l.useForceUpdateRef;
              },
            });
            var u = a(9019);
            Object.defineProperty(t, "useIsomorphicEffect", {
              enumerable: !0,
              get: function () {
                return u.useIsomorphicEffect;
              },
            });
            var d = a(2947);
            Object.defineProperty(t, "useResize", {
              enumerable: !0,
              get: function () {
                return d.useResize;
              },
            });
            var c = a(6699);
            Object.defineProperty(t, "useDebouncedToggle", {
              enumerable: !0,
              get: function () {
                return c.useDebouncedToggle;
              },
            });
            var h = a(8691);
            Object.defineProperty(t, "useCallbackRef", {
              enumerable: !0,
              get: function () {
                return h.useCallbackRef;
              },
            });
          },
          8691: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef = void 0);
            let i = a(810);
            t.useCallbackRef = function (e) {
              let t = (0, i.useRef)({
                stableFn: function () {
                  for (
                    var e = arguments.length, a = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    a[i] = arguments[i];
                  return t.current.callback(...a);
                },
                callback: e,
              });
              return (
                (0, i.useInsertionEffect)(() => {
                  t.current.callback = e;
                }),
                t.current.stableFn
              );
            };
          },
          6699: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let i = a(352),
              r = a(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: a, throttleTimeout: n } = e,
                s = (0, r.useRef)(null),
                [o, l] = (0, r.useState)(!!a),
                u = (0, r.useMemo)(
                  () =>
                    (0, i.throttle)(() => {
                      l(!a),
                        s.current && window.clearTimeout(s.current),
                        (s.current = window.setTimeout(() => {
                          l(!!a);
                        }, t));
                    }, n),
                  [t, a, n],
                ),
                d = (0, r.useCallback)(() => {
                  l(!!a), s.current && window.clearTimeout(s.current);
                }, [a]);
              return (
                (0, r.useEffect)(
                  () => () => {
                    s.current && window.clearTimeout(s.current);
                  },
                  [],
                ),
                { state: o, handleDebouncedToggle: u, reset: d }
              );
            };
          },
          2101: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useElementOffsetY = void 0);
            let i = a(810),
              r = a(2067),
              n = a(2767);
            t.useElementOffsetY = (e) => {
              let [t, a] = (0, n.useForceUpdateRef)(),
                [s, o] = (0, i.useState)(),
                l = (0, i.useCallback)(() => {
                  let e = null == t ? void 0 : t.getBoundingClientRect();
                  e && o(e.y);
                }, [t]);
              return (
                (0, i.useLayoutEffect)(l),
                (0, r.useScroll)({ onScroll: l, elementRef: e }),
                { forceUpdateRefCallback: a, offsetY: s }
              );
            };
          },
          2767: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForceUpdateRef = void 0);
            let i = a(810);
            t.useForceUpdateRef = () => {
              let [e, t] = (0, i.useState)(null);
              return [
                e,
                (0, i.useCallback)((e) => {
                  t((t) => (t !== e ? e : t));
                }, []),
              ];
            };
          },
          245: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForwardRef = void 0);
            let i = a(810);
            t.useForwardRef = function (e, t) {
              let a = (0, i.useRef)(t);
              return (
                (0, i.useEffect)(() => {
                  e &&
                    ("function" == typeof e
                      ? e(a.current)
                      : (e.current = a.current));
                }, [e]),
                a
              );
            };
          },
          5663: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let i = a(810),
              { innerWidth: r = 0, innerHeight: n = 0 } = window;
            function s(e) {
              let {
                top: t,
                right: a,
                bottom: i,
                left: s,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= n) || (i >= 0 && i <= n)) &&
                ((s >= 0 && s <= r) || (a >= 0 && a <= r))
              );
            }
            function o(e) {
              var t, a;
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (a =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, i)) && void 0 !== a
                ? a
                : e.attributes[0];
            }
            function l(e, t) {
              let a = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  e(t, a);
                });
              }, t);
              return a;
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = s),
              (t.getElementNameByDataAttribute = o),
              (t.createIntersectionObserver = l),
              (t.useIntersectionObserver = function (e, a, r) {
                let [
                    { freezeOnceVisible: n, preflightCheck: u, ...d },
                    c = !1,
                  ] =
                    "boolean" == typeof a || void 0 === a
                      ? [t.defaultOptions, a]
                      : [{ ...t.defaultOptions, ...a }, r],
                  [h, m] = (0, i.useState)({}),
                  g = (0, i.useMemo)(
                    () =>
                      c
                        ? null
                        : l((e) => {
                            let t = o(e.target);
                            t &&
                              g &&
                              (e.isIntersecting
                                ? m((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !0 },
                                  }))
                                : m((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !1 },
                                  })),
                              n &&
                                g &&
                                e.isIntersecting &&
                                g.unobserve(e.target));
                          }, d),
                    [c],
                  );
                return (
                  (0, i.useLayoutEffect)(
                    () => (
                      g &&
                        !c &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (u && (t = s(e.current))) {
                              let t = o(e.current);
                              m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || g.observe(e.current);
                          }
                        }),
                      () => {
                        g && g.disconnect();
                      }
                    ),
                    [c, g, e.length],
                  ),
                  h
                );
              });
          },
          9019: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIsomorphicEffect = void 0);
            let i = a(810);
            t.useIsomorphicEffect =
              "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
          },
          5188: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useKeyboardNavigation = void 0);
            let i = a(810);
            function r(e, t) {
              return e.current
                ? Array.from(
                    t ? e.current.querySelectorAll(t) : e.current.children,
                  )
                : [];
            }
            t.useKeyboardNavigation = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  navigationItemsSelector: a,
                  activeAttributeName: n = "aria-selected",
                } = t,
                s = (0, i.useCallback)(
                  (t) => {
                    let i = r(e, a);
                    if (!i.length) return;
                    let n = t.target,
                      s = i.indexOf(n);
                    if (-1 === s) return;
                    let [o] = i,
                      l = i.at(-1),
                      u = null;
                    switch (t.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        u = i[s - 1] || l;
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        u = i[s + 1] || o;
                        break;
                      case "Home":
                        u = o;
                        break;
                      case "End":
                        u = l;
                    }
                    null !== u && (u.focus(), t.preventDefault());
                  },
                  [a, e],
                );
              (0, i.useEffect)(() => {
                let t = e.current;
                return (
                  null == t || t.addEventListener("keydown", s),
                  () =>
                    null == t ? void 0 : t.removeEventListener("keydown", s)
                );
              }, [e, s]),
                (0, i.useEffect)(() => {
                  r(e, a).forEach((e) => {
                    e.hasAttribute(n) &&
                      ("true" === e.getAttribute(n)
                        ? (e.tabIndex = 0)
                        : (e.tabIndex = -1));
                  });
                });
            };
          },
          2947: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useResize = void 0);
            let i = a(810),
              r = a(361);
            t.useResize = (e, t) => {
              (0, i.useEffect)(() => {
                let a = (0, r.getElementFromRefOrElement)(t);
                if (null === a) return;
                let i = null != a ? a : document.documentElement,
                  n = new ResizeObserver(e);
                return n.observe(i), () => n.disconnect();
              }, [t, e]);
            };
          },
          2067: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let i = a(810),
              r = a(361),
              n = a(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: a, elementRef: s } = e,
                { state: o, handleDebouncedToggle: l } = (0,
                n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                u = (0, i.useCallback)(() => {
                  a && l(), null == t || t();
                }, [a, l, t]);
              return (
                (0, i.useEffect)(() => {
                  let e = (0, r.getElementFromRefOrElement)(s);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    a = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", u, a),
                    () => t.removeEventListener("scroll", u, a)
                  );
                }, [s, u]),
                o
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
          8429: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ScrollableContent = t.ScrollableContentComponent = void 0);
            let r = a(9541),
              n = a(810),
              s = a(5881),
              o = a(9110),
              l = i(a(561));
            (t.ScrollableContentComponent = (e) => {
              let {
                  forwardRef: t,
                  className: a,
                  containerClassName: i,
                  children: n,
                  ...u
                } = e,
                d = (0, o.useForwardRef)(t, null),
                c = (0, o.useScroll)({ listenIsScrolling: !0, elementRef: d });
              return (0, r.jsx)("div", {
                className: (0, s.clsx)(
                  l.default.root,
                  {
                    [l.default.root_scrolling]: c,
                    [l.default.root_notScrolling]: !c,
                  },
                  a,
                ),
                ref: d,
                ...u,
                children: (0, r.jsx)("div", {
                  className: (0, s.clsx)(l.default.container, i),
                  children: n,
                }),
              });
            }),
              (t.ScrollableContent = (0, n.forwardRef)((e, a) =>
                (0, r.jsx)(t.ScrollableContentComponent, {
                  forwardRef: a,
                  ...e,
                }),
              ));
          },
          352: (e) => {
            e.exports = n;
          },
          810: (e) => {
            e.exports = r || (r = a.t(s, 2));
          },
        },
        l = {};
      function u(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var a = (l[e] = { exports: {} });
        return o[e].call(a.exports, a, a.exports, u), a.exports;
      }
      (u.d = (e, t) => {
        for (var a in t)
          u.o(t, a) &&
            !u.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (u.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var d = {};
      Object.defineProperty(d, "X", { value: !0 }),
        (d.t = void 0),
        (i = u(8429)),
        Object.defineProperty(d, "t", {
          enumerable: !0,
          get: function () {
            return i.ScrollableContent;
          },
        });
      var c = d.t;
      d.X;
    },
    56209: function (e, t, a) {
      "use strict";
      a.d(t, {
        BlackboxInitializer: function () {
          return n;
        },
      });
      var i = a(96233),
        r = a(58997);
      let n = (0, i.Pi)((e) => {
        let { children: t, userIp: a } = e,
          { location: i } = (0, r.oR4)();
        return t;
      });
    },
    57908: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BuySubscriptionInitializer: function () {
            return o;
          },
        });
      var i = a(96233),
        r = a(91207),
        n = a(67228),
        s = a(58997);
      let o = (0, i.Pi)(() => {
        let { user: e } = (0, s.oR4)(),
          { hasFreeUserAccess: t } = (0, s.NMB)(),
          a = (0, n.F)("music", t),
          {
            payment: { environment: i },
          } = (0, s.uK4)().get(s.U5t),
          o = (0, r.useRef)(new Date()),
          l = (0, r.useCallback)(async () => {
            let t = "production" === i ? e.account.uid : void 0;
            await Promise.allSettled([a.getData({ uid: t })]),
              (o.current = new Date());
          }, [a, i, e]),
          u = (0, r.useCallback)(async () => {
            let e = o.current.getTime() < Date.now() - 6e5;
            "visible" === document.visibilityState && e && (await l());
          }, [l]);
        (0, r.useEffect)(() => {
          if (!t) return;
          let e = new AbortController();
          return (
            window.addEventListener("focus", u, { signal: e.signal }),
            () => {
              e.abort();
            }
          );
        }, [t, u]);
      });
    },
    41918: function (e, t, a) {
      "use strict";
      a.d(t, {
        CrackdownInitializer: function () {
          return o;
        },
      });
      var i = a(96233),
        r = a(91207),
        n = a(86348),
        s = a(58997);
      let o = (0, i.Pi)(() => {
        let {
            user: e,
            sonataState: t,
            modals: { crackdownModal: a },
            settings: i,
            experiments: o,
          } = (0, s.oR4)(),
          { isFreemium: l } = (0, s.NMB)(),
          u = i.layout === s.t8m.Desktop,
          d = (0, r.useMemo)(() => e.isAuthorized && l && u, [e, l, u]),
          c = (0, s.R$C)(),
          h = (0, r.useRef)(new Date()),
          m = (0, r.useCallback)(() => {
            h.current = new Date();
          }, []),
          g = (0, r.useCallback)(() => {
            var e, t;
            let i =
              null !==
                (t =
                  null ===
                    (e = o.experiments.get(s.peG.WebNextCrackdownInterval)) ||
                  void 0 === e
                    ? void 0
                    : e.value.interval) && void 0 !== t
                ? t
                : 18e5;
            h.current.getTime() < Date.now() - i && (a.open(), m());
          }, [o.experiments, a, m]);
        (0, r.useEffect)(() => {
          if (!d) return;
          let e =
            null == c
              ? void 0
              : c.state.playerState.status.onChange((e) => {
                  e === n.Xz.ENDED && g();
                });
          return () => {
            null == e || e();
          };
        }, [d, c, g]),
          (0, r.useEffect)(() => {
            d && a.isOpened && (null == c || c.pause());
          }, [d, a.isOpened, c, t.status]),
          (0, r.useEffect)(() => {
            if (!d) return;
            let e = new AbortController();
            return (
              window.addEventListener("mousemove", m, { signal: e.signal }),
              window.addEventListener("keydown", m, { signal: e.signal }),
              window.addEventListener("touchstart", m, { signal: e.signal }),
              () => {
                e.abort();
              }
            );
          }, [d, m]);
      });
    },
    89218: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DesktopInitializer: function () {
            return l;
          },
        });
      var i = a(65301),
        r = a(91207),
        n = a(38593),
        s = a(35308),
        o = a(58997);
      let l = () => {
        let { language: e } = (0, o.ZSk)();
        {
          let { theme: t } = (0, o.FgM)(),
            a = (0, n.s)();
          (0, s.Tk)(),
            (0, s.Er)(),
            (0, s.bO)(),
            (0, s.vs)(),
            (0, s.g3)(),
            (0, s.Zw)(),
            (0, s.ao)(),
            (0, s.lA)(),
            (0, r.useEffect)(() => {
              (0, s.Yl)(e), (0, s.l7)();
            }, [e]),
            (0, r.useEffect)(() => {
              let e = (0, o.bop)();
              e && a.count(e, "appVersion");
            }, [a]),
            (0, r.useEffect)(() => {
              (0, s.F5)(t), a.count(t, "appTheme");
            }, [t]);
        }
        return (0, i.jsx)(s.Pj, {});
      };
    },
    8794: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DesktopPaywallInitializer: function () {
            return o;
          },
        });
      var i = a(96233),
        r = a(91207),
        n = a(73192),
        s = a(58997);
      let o = (0, i.Pi)(() => {
        var e;
        let { user: t, paywall: a, settings: i, experiments: o } = (0, s.oR4)(),
          { isFreemium: l } = (0, s.NMB)(),
          { shouldShowFamilyInvite: u } = (0, n.v0)(),
          d =
            null === (e = i.browserInfo) || void 0 === e ? void 0 : e.isMobile,
          c = (0, s.uK4)().get(s.ceh),
          h = (0, r.useCallback)(() => {
            var e;
            let t = parseInt(
              null ===
                (e = o.experiments.get(s.peG.WebNextDesktopPaywallInterval)) ||
                void 0 === e
                ? void 0
                : e.value.interval,
              10,
            );
            return Number.isNaN(t) ? 2592e5 : t;
          }, [o.experiments]),
          m = (0, r.useCallback)(() => {
            a.openModal(),
              c.set(s.BUb.DesktopPaywall, { lastOnLoadShowDate: new Date() });
          }, [a, c]);
        (0, r.useEffect)(() => {
          if ((t.isAuthorized && !l) || d || u) return;
          let e = c.get(s.BUb.DesktopPaywall);
          (null !== e &&
            new Date(e.lastOnLoadShowDate).getTime() > Date.now() - h()) ||
            m();
        }, [t.isAuthorized, l, d, u, c, h, m]);
      });
    },
    73318: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FamilyInviteInitializer: function () {
            return o;
          },
        });
      var i = a(96233),
        r = a(91207),
        n = a(73192),
        s = a(58997);
      let o = (0, i.Pi)(() => {
        let e = (0, n.v0)(),
          {
            user: t,
            familyInvite: { start: a },
          } = (0, s.oR4)();
        (0, r.useEffect)(() => {
          e.shouldShowFamilyInvite &&
            e.inviteId &&
            (t.isAuthorized && e.clear(), a(e.inviteId));
        }, [t.isAuthorized, e, a]);
      });
    },
    64848: function (e, t, a) {
      "use strict";
      a.d(t, {
        SavedOfferInitializer: function () {
          return s;
        },
      });
      var i = a(96233),
        r = a(91207),
        n = a(58997);
      let s = (0, i.Pi)(() => {
        let {
            paymentWidgetModal: {
              modal: e,
              setTarget: t,
              setTariffOfferName: a,
              setServiceSessionId: i,
            },
          } = (0, n.oR4)(),
          { hasFreeUserAccess: s } = (0, n.NMB)(),
          o = (0, n.uK4)(),
          l = (0, r.useMemo)(() => o.get(n.ArX), [o]);
        (0, r.useLayoutEffect)(() => {
          if (!s || null === l) return;
          let r = l.get(n.BUb.Offer);
          if (null === r) return;
          let { target: o, serviceSessionId: u, tariffOfferName: d } = r;
          l.remove(n.BUb.Offer), t(o), i(u), d && a(d), e.open();
        }, [s, l, e, a, t, i]);
      });
    },
    70992: function (e, t, a) {
      "use strict";
      a.d(t, {
        SettingsInitializer: function () {
          return o;
        },
      });
      var i = a(96233),
        r = a(91207),
        n = a(38593),
        s = a(58997);
      let o = (0, i.Pi)((e) => {
        let { browserInfo: t } = e,
          a = (0, n.s)(),
          { settings: i } = (0, s.oR4)(),
          o = (0, s.XfM)();
        i.setBrowserInfo(t),
          o && i.setPlatform(o),
          i.initializeLiteVersionMode(),
          (0, r.useEffect)(() => {
            i.liteVersionMode && a.count(i.liteVersionMode, "liteVersionMode");
          }, [a, i.liteVersionMode]);
      });
    },
    80408: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          UrlInitializer: function () {
            return s;
          },
        });
      var i = a(96233),
        r = a(99678),
        n = a(58997);
      let s = (0, i.Pi)((e) => {
        let { host: t } = e,
          { location: a } = (0, n.oR4)(),
          i = (0, r.usePathname)(),
          s = (0, r.useSearchParams)().toString(),
          o = window.location.host,
          l = t || o,
          u = "https://".concat(l),
          d = "https://"
            .concat(l)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s);
        (u = l),
          (d = ""
            .concat(l)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s)),
          a.setPathname(i),
          a.setSearchParams(s),
          a.setHost(l),
          a.setTld((0, n.p$)(l) || n.B5v),
          a.setOrigin(u),
          a.setHref(d);
      });
    },
    43897: function (e, t, a) {
      "use strict";
      a.d(t, {
        WebAudioInitializer: function () {
          return l;
        },
      });
      var i = a(79491),
        r = a(96233),
        n = a(91207),
        s = a(60521),
        o = a(58997);
      let l = (0, r.Pi)(() => {
        let e = (0, s.ji)(),
          t = (0, o.jpI)();
        (0, n.useEffect)(() => {
          e.loadPresets();
        }, [e]),
          (0, n.useEffect)(() => {
            (null == t ? void 0 : t.equalizer) &&
              (e.isEnabled
                ? (e.currentPreset &&
                    t.equalizer.applyPreset((0, i.ZN)(e.currentPreset)),
                  t.equalizer.enable())
                : t.equalizer.disable());
          }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer]);
      });
    },
    90293: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          WebInitializer: function () {
            return s;
          },
        });
      var i = a(65301);
      a(91207);
      var r = a(58997),
        n = a(56209);
      let s = (e) => {
        let { userIp: t } = e,
          { experiments: a } = (0, r.oR4)();
        return (
          (0, r.uK4)().get(r.V0J).get(r.BUb.DisallowDeeplinksRedirect),
          (0, i.jsx)(n.BlackboxInitializer, { userIp: t })
        );
      };
    },
    3582: function (e, t, a) {
      "use strict";
      a.d(t, {
        AdvertProvider: function () {
          return d;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(86348),
        o = a(65829),
        l = a(58997);
      let u = null,
        d = (0, r.Pi)((e) => {
          let { children: t } = e,
            { advert: a, experiments: r, user: d, location: c } = (0, l.oR4)(),
            h = (0, l.wLl)();
          return (!u &&
            d.isAuthorized &&
            r.checkExperiment(l.peG.WebNextAudioVideoAdvert, "on") &&
            (u = new l.D_({
              logger: h,
              videoSlotId: o.Y1.SLOT,
              videoElementId: o.Y1.VIDEO,
            })),
          (0, n.useEffect)(() => {
            null == u || u.init(c.tld);
          }, [c.tld]),
          (0, n.useEffect)(() => {
            if (
              !r.checkExperiment(l.peG.WebNextAudioVideoAdvert, "on") ||
              !d.isAuthorized
            )
              return;
            let e =
              null == u
                ? void 0
                : u.state.isAdvertPlaying.onChange((e) => {
                    if ((a.setAdvertShown(e), e)) {
                      var t, i;
                      a.setType(
                        (null == u
                          ? void 0
                          : null === (t = u.state.advertData) || void 0 === t
                            ? void 0
                            : t.type) || null,
                      ),
                        a.setData(
                          (null == u
                            ? void 0
                            : null === (i = u.state.advertData) || void 0 === i
                              ? void 0
                              : i.data) || null,
                        );
                    } else a.reset();
                  });
            return () => {
              null == e || e();
            };
          }, [a, r, d.isAuthorized]),
          (0, n.useEffect)(() => {
            var e;
            let t =
              null == u
                ? void 0
                : null === (e = u.audioAdvertPlayback) || void 0 === e
                  ? void 0
                  : e.state.playerState.event.onChange((e) => {
                      if (a.isAdvertShown) {
                        if (
                          (e === s.KX.END &&
                            (a.setAdvertShown(!1),
                            null == u || u.state.setDefaultState()),
                          e === s.KX.PLAYING)
                        ) {
                          a.setAdvertPlaying(!0);
                          return;
                        }
                        if (e === s.KX.END || e === s.KX.PAUSED) {
                          a.setAdvertPlaying(!1);
                          return;
                        }
                      }
                    });
            return () => (null == t ? void 0 : t());
          }, [a]),
          (0, n.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          r.checkExperiment(l.peG.WebNextAudioVideoAdvert, "on") &&
            d.isAuthorized)
            ? (0, i.jsx)(l.SD4.Provider, { value: u, children: t })
            : t;
        });
    },
    70055: function (e, t, a) {
      "use strict";
      a.d(t, {
        AnalyticsProvider: function () {
          return u;
        },
      });
      var i = a(65301),
        r = a(91207),
        n = a(3283),
        s = a(38593),
        o = a(58997);
      let l = null,
        u = (e) => {
          let { children: t } = e,
            a = (0, s.s)(),
            u = (0, o.wLl)(),
            d = (0, o.uK4)().get(o.V0J),
            c = (0, r.useMemo)(() => {
              if (l) return l;
              let e = "on" === d.get(o.BUb.AllowAnalyticsLogs),
                t = (0, n.HQ)((e) => a.count(e, "evgen"), u, e),
                i = (0, n.hz)(),
                r = (0, n.y_)();
              return (l = new n.yx(t, i, r));
            }, [d, u, a]);
          return (0, i.jsx)(o.fCM.Provider, {
            value: c,
            children: (0, i.jsx)(o.tKr, { children: t }),
          });
        };
    },
    21828: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return d;
          },
        });
      var i = a(65301),
        r = a(91207),
        n = a(58997),
        s = a(29778);
      let o = null,
        l = async (e) => {
          let {
              userAgent: t,
              hostTld: a,
              forwardedForY: i,
              changeLanguageToken: r,
              tracestate: s,
              traceparent: o,
              icookie: l,
              serverDetectedLocale: u,
              env: d,
            } = e,
            c = await (0, n.ZO0)({
              userAgent: t,
              tld: a,
              forwardedForY: i,
              changeLanguageToken: r,
              tracestate: s,
              traceparent: o,
              icookie: l,
              serverDetectedLocale: u,
              env: d,
            });
          return await c.get(n.SLO).loadDictionary(), c;
        },
        u = (e) => {
          let { children: t, containerLoader: a } = e;
          return (
            o || (o = (0, r.use)(a)),
            (0, i.jsx)(n.Xld.Provider, { value: o, children: t })
          );
        },
        d = (e) => {
          let {
              children: t,
              hostTld: a,
              env: n,
              forwardedForY: o,
              tracestate: d,
              traceparent: c,
              icookie: h,
              changeLanguageToken: m,
              serverDetectedLocale: g,
              userAgent: p,
            } = e,
            y = l({
              userAgent: p,
              hostTld: a,
              forwardedForY: o,
              changeLanguageToken: m,
              tracestate: d,
              traceparent: c,
              icookie: h,
              serverDetectedLocale: g,
              env: n,
            });
          return (0, i.jsx)(r.Suspense, {
            fallback: (0, i.jsx)(s.b2, {}),
            children: (0, i.jsx)(u, { containerLoader: y, children: t }),
          });
        };
    },
    51374: function (e, t, a) {
      "use strict";
      a.d(t, {
        HistoryProvider: function () {
          return l;
        },
      });
      var i = a(65301),
        r = a(99678),
        n = a(91207),
        s = a(58997);
      let o = null,
        l = (e) => {
          let { children: t } = e,
            a = (0, s.uK4)(),
            l = (0, r.useRouter)(),
            u = (0, r.usePathname)(),
            d = (0, r.useSearchParams)(),
            [c, h] = (0, n.useState)(!1),
            [m, g] = (0, n.useState)(!1),
            [p, y] = (0, n.useState)(null),
            v = (0, n.useRef)(0),
            E = (0, n.useRef)(null),
            f = (0, n.useMemo)(() => {
              if (o) return o;
              let e = a.get(s.ArX);
              return (o = new s.QQ$(e));
            }, [a]),
            S = (0, n.useCallback)(() => {
              f && (h(f.canBack), g(f.canForward), y(f.state));
            }, [f]),
            b = (0, n.useCallback)(
              (e) => {
                f && (f.replaceState(e), l.replace(e.href));
              },
              [f, l],
            ),
            P = (0, n.useCallback)(
              (e) => {
                f && (f.pushState(e), S());
              },
              [f, S],
            ),
            A = (0, n.useCallback)(() => {
              f && (f.back(), S(), l.back());
            }, [f, l, S]),
            _ = (0, n.useCallback)(() => {
              f && (f.forward(), S(), l.forward());
            }, [f, l, S]);
          (0, n.useEffect)(() => {
            var e;
            let t = [u, d.toString()].join("?");
            (!(null == f ? void 0 : f.state) ||
              (null == f
                ? void 0
                : null === (e = f.state) || void 0 === e
                  ? void 0
                  : e.isLocationNotEqual(t))) &&
              P({ href: t });
          }, [f, u, d, P]);
          {
            let e = (0, s.rDv)(u, d);
            e !== E.current && ((E.current = e), (v.current = v.current + 1));
          }
          return (0, i.jsx)(s.TlZ.Provider, {
            value: {
              pushState: P,
              replaceState: b,
              canForward: m,
              canBack: c,
              back: A,
              forward: _,
              state: p,
              length: v.current,
            },
            children: t,
          });
        };
    },
    58772: function (e, t, a) {
      "use strict";
      a.d(t, {
        LayoutProvider: function () {
          return v;
        },
        U: function () {
          return y;
        },
      });
      var i = a(65301),
        r = a(66591),
        n = a(96233),
        s = a(91207),
        o = a(37184),
        l = a(91878);
      let u = {
        Chrome: 105,
        ChromeMobile: 105,
        Edge: 105,
        Firefox: 104,
        MobileFirefox: 104,
        Opera: 90,
        OperaMobile: 80,
        Safari: 16,
        MobileSafari: 16,
        UCBrowser: 15,
        MSIE: 12,
        YandexBrowser: 23,
      };
      var d = a(9695),
        c = a(29778),
        h = a(83309),
        m = a.n(h);
      let g = (e) => {
        let { message: t, closeToast: a } = e;
        return (0, i.jsx)(c.Yj, {
          className: (0, d.W)(m().root, m().important),
          message: t,
          closeToast: a,
        });
      };
      var p = a(58997);
      let y = (e) => {
          {
            document.body.classList.remove("desktop"),
              e.setLayout((0, p.jPy)(window.innerWidth)),
              e.setIsLandscape(
                window.matchMedia("(orientation: landscape)").matches,
              );
            let t = window.screen.availHeight || window.innerHeight;
            e.setIsMobileLandscapeHeight(t < 450);
          }
        },
        v = (0, n.Pi)((e) => {
          let { children: t } = e,
            { formatMessage: a } = (0, o.Z)(),
            { notify: n } = (0, p.d$W)(),
            { settings: d } = (0, p.oR4)(),
            [c, h] = (0, l.z)(),
            [m, v] = (0, l.z)(),
            [E, f] = (0, l.z)(),
            [S, b] = (0, l.z)(),
            [P, A] = (0, l.z)(),
            [_, N] = (0, l.z)();
          d.layout;
          let C = (0, s.useMemo)(
            () =>
              (0, r.Z)(() => {
                y(d);
              }, 100),
            [d],
          );
          (0, s.useEffect)(() => {
            (function (e) {
              if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version)
                return !1;
              let t = u[e.name];
              if (!t) return !1;
              let a = parseFloat(e.version);
              return !Number.isNaN(a) && a < t;
            })(d.browserInfo) &&
              n(
                (0, i.jsx)(g, {
                  message: a({ id: "warning-messages.update-your-browser" }),
                }),
                { containerId: p.W$x.IMPORTANT, single: !0 },
              );
          }, [a, n, d.browserInfo]),
            (0, s.useLayoutEffect)(() => {
              y(d);
            }, [d]),
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", C),
                () => {
                  window.removeEventListener("resize", C);
                }
              ),
              [C],
            );
          let T = (0, s.useMemo)(
            () => ({
              contentRef: c,
              contentRootRef: m,
              contentScrollRef: E,
              sideBannerRef: S,
              playlistStickyFiltersRef: P,
              playlistStaticFiltersRef: _,
              setContentRef: h,
              setContentRootRef: v,
              setContentScrollRef: f,
              setSideBannerRef: b,
              setPlaylistStickyFiltersRef: A,
              setPlaylistStaticFiltersRef: N,
            }),
            [c, m, E, h, v, f, b, S, P, _, A, N],
          );
          return (0, i.jsx)(p.VYl.Provider, { value: T, children: t });
        });
    },
    25334: function (e, t, a) {
      "use strict";
      a.d(t, {
        PrefetchDataProvider: function () {
          return l;
        },
      });
      var i = a(96233),
        r = a(91207),
        n = a(58997),
        s = a(58772);
      let o = async (e, t, a) => {
          let {
            user: i,
            experiments: r,
            pinsCollection: s,
            communication: o,
            disclaimers: l,
            redAlert: u,
          } = e;
          if (
            (t ? await i.getAbout() : i.setUnauthorized(),
            i.puid && a.setPassportUid(i.puid),
            await r.getData(),
            i.isAuthorized)
          ) {
            let t = [
              i.getSettings(),
              l.getDisclaimers(),
              e.library.getData(),
              s.getData(),
            ];
            r.checkExperiment(n.peG.WebNextCommunication, "on") &&
              t.push(o.getData()),
              t.push(u.getData()),
              await Promise.allSettled(t);
          }
        },
        l = (0, i.Pi)((e) => {
          let { children: t } = e,
            a = (0, n.oR4)(),
            i = (0, n.uK4)(),
            l = i.get(n.xit),
            u = i.get(n.Hzc),
            d = l.hasAuthorizationCredentials;
          return (
            (0, s.U)(a.settings),
            a.user.account.loadingState === n.Gui.IDLE &&
              (0, r.use)(o(a, d, u)),
            t
          );
        });
    },
    99060: function (e, t, a) {
      "use strict";
      a.d(t, {
        ShortcutsProvider: function () {
          return u;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(61177),
        o = a(58997);
      let l = null,
        u = (0, r.Pi)((e) => {
          let { children: t } = e,
            a = (0, o.R$C)(),
            r = (0, o.uK4)().get(o.V0J),
            u = (0, s.K)(),
            { sonataState: d } = (0, o.oR4)(),
            c = (0, n.useMemo)(
              () => (l || (l = new o.OI$(new o.yre())), l),
              [],
            );
          return (
            (0, n.useEffect)(
              () => (
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.DECREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.decreaseVolume(0.05));
                      r.set(o.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.INCREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.increaseVolume(0.05));
                      r.set(o.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.TOGGLE_MUTE,
                    async () => {
                      let e =
                        null == a ? void 0 : a.state.playerState.volume.value;
                      void 0 !== e && (await u(e));
                    },
                  ),
                () => {
                  null == c ||
                    c.removeShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.DECREASE_VOLUME,
                    ),
                    null == c ||
                      c.removeShortcutsListener(
                        o.Pwk.MAIN,
                        o.yxF.INCREASE_VOLUME,
                      ),
                    null == c ||
                      c.removeShortcutsListener(o.Pwk.MAIN, o.yxF.TOGGLE_MUTE);
                }
              ),
              [c, a, r, u],
            ),
            (0, n.useEffect)(() => {
              if (!d.isGenerativeContext)
                return (
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.MOVE_BACKWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveBackward.value) &&
                          (await a.moveBackward());
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.MOVE_FORWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveForward.value) &&
                          (await (null == a ? void 0 : a.moveForward()));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.SLIDE_BACKWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideBackward(2)));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.SLIDE_FORWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideForward(2)));
                      },
                    ),
                  () => {
                    null == c ||
                      c.removeShortcutsListener(o.Pwk.MAIN, o.yxF.MOVE_FORWARD),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.MOVE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.SLIDE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.SLIDE_FORWARD,
                        );
                  }
                );
            }, [c, a, r, d.isGenerativeContext]),
            (0, i.jsx)(o.cww.Provider, { value: c, children: t })
          );
        });
    },
    95649: function (e, t, a) {
      "use strict";
      a.d(t, {
        SlamProvider: function () {
          return p;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(44729),
        o = a(20470),
        l = a(23879),
        u = a(81979),
        d = a(14178),
        c = a(38593),
        h = a(46912),
        m = a(58997);
      let g = !0,
        p = (0, r.Pi)((e) => {
          var t;
          let { children: a } = e,
            { slam: r, user: p, experiments: y } = (0, m.oR4)(),
            v = (0, m.pL3)(),
            E = (0, m.uK4)(),
            f = E.get(m.ceh),
            S = (0, m.SqQ)(),
            { notify: b } = (0, m.d$W)(),
            P = (0, m.EMC)(),
            A = (0, c.s)(),
            _ = (0, n.useCallback)(
              (e) => {
                r.setNetworkStatus(e);
              },
              [r],
            ),
            N = (0, n.useCallback)(
              (e) => {
                let { trackId: t, state: a } = e;
                r.setTrack(t, a),
                  a.loadingState === d.aT.DOWNLOAD_FAILED &&
                    b(
                      (0, i.jsx)(h.l, {
                        message: (0, i.jsx)(s.Z, {
                          id: "offline.track-download-error",
                        }),
                      }),
                      { containerId: m.W$x.ERROR },
                    );
              },
              [b, r],
            ),
            C = (0, n.useCallback)(
              (e) => {
                r.setTracks(e);
              },
              [r],
            ),
            T = E.get(m.U5t);
          return (
            p.account.uid &&
              p.hasPlus &&
              (v.init({ userConfig: { uid: p.account.uid } }),
              v.createDownloader({ variables: { maxConcurrentDownloads: 5 } }),
              v.downloader &&
                v.userConfig &&
                v.createTracksController({
                  downloader: v.downloader,
                  repositoryContainer: v.repositoryContainer,
                  userConfig: v.userConfig,
                  trackDownloadTaskParams: {
                    tracksResource: E.get(m.g5F),
                    getFileInfoResource: E.get(m.ES6),
                    secretKey: T.player.secretKey,
                    transport: u.J.ENCRAW,
                    variables: {
                      chunkSize: 1048576,
                      coverSize: 1e3,
                      codecs: o.dx,
                      get quality() {
                        return (0, l.E)({
                          productQuality: null == S ? void 0 : S.quality.value,
                        });
                      },
                    },
                    events: v.downloader.events,
                    hooks: v.hooks,
                  },
                  availabilityResource: E.get(m.OYs),
                  tracksResource: E.get(m.g5F),
                  variables: { requestTrackChunkSize: 100 },
                  hooks: v.hooks,
                }),
              v.tracksController &&
                v.createPlaylistsController({
                  tracksController: v.tracksController,
                })),
            (0, n.useEffect)(() => {
              if (g) {
                var e;
                null === (e = v.tracksController) ||
                  void 0 === e ||
                  e.getTracksCount().then((e) => {
                    let t = (0, m.TrE)(e);
                    t && A.count({ [m.YHm.TRACKS_COUNT]: t }, m.OIz);
                  }),
                  (g = !1);
              }
            }, [A, v.tracksController]),
            (0, n.useEffect)(() => {
              if (
                void 0 !== p.puid &&
                !y.checkExperiment(m.peG.WebNextOfflineDegradation, "default")
              ) {
                var e, t;
                let a =
                    null ===
                      (e = y.getExperiment(m.peG.WebNextOfflineDegradation)) ||
                    void 0 === e
                      ? void 0
                      : e.group,
                  i = "".concat(m.BUb.OfflineDegradation, "_").concat(p.puid),
                  r = f.get(i);
                a &&
                  a !== r &&
                  (null === (t = v.tracksController) ||
                    void 0 === t ||
                    t.clearAll(),
                  f.set(i, a));
              }
            }, [y, f, v, p.puid]),
            (0, n.useEffect)(() => {
              var e, t, a;
              return (
                null === (e = v.tracksController) ||
                  void 0 === e ||
                  e.events.on(d.tY.TRACK_CHANGED, N),
                null === (t = v.tracksController) ||
                  void 0 === t ||
                  t.events.on(d.tY.STATE_CHANGED, C),
                null === (a = v.tracksController) ||
                  void 0 === a ||
                  a.initTracksState(),
                () => {
                  var e, t;
                  null === (e = v.tracksController) ||
                    void 0 === e ||
                    e.events.off(d.tY.TRACK_CHANGED, N),
                    null === (t = v.tracksController) ||
                      void 0 === t ||
                      t.events.off(d.tY.STATE_CHANGED, C);
                }
              );
            }, [
              N,
              C,
              v.tracksController,
              null === (t = v.tracksController) || void 0 === t
                ? void 0
                : t.events,
            ]),
            (0, n.useEffect)(
              () => (
                v.network.subscribe(_),
                () => {
                  v.network.unsubscribe(_);
                }
              ),
              [_, v.network],
            ),
            (0, n.useEffect)(() => {
              let e = (0, m.ibJ)(f);
              r.setOfflineMode(e);
            }, [f, r]),
            (0, n.useEffect)(() => {
              r.isOfflineModeEnabled
                ? null == P || P.ynisonDisconnect()
                : null == P || P.ynisonConnect();
            }, [r.isOfflineModeEnabled, P]),
            (0, i.jsx)(m.hRk.Provider, {
              value: v.tracksController,
              children: (0, i.jsx)(m.e_X.Provider, {
                value: v.playlistsController,
                children: a,
              }),
            })
          );
        });
    },
    89155: function (e, t, a) {
      "use strict";
      a.d(t, {
        SonataProvider: function () {
          return iH;
        },
      });
      var i,
        r,
        n,
        s,
        o,
        l,
        u,
        d,
        c,
        h,
        m,
        g,
        p,
        y,
        v,
        E,
        f,
        S,
        b,
        P,
        A,
        _,
        N,
        C,
        T,
        I,
        k,
        D,
        L,
        R,
        V,
        x,
        G,
        O,
        w,
        M,
        j,
        U,
        q,
        F,
        B,
        Y,
        W,
        z,
        H,
        K,
        J,
        X = a(65301),
        Q = a(96233),
        Z = a(91207),
        $ = a(58655),
        ee = a(38168);
      let et = {
          updateInterval: 30,
          EMPTY_SOUND:
            "data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAC2QBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAimTQABzAAAAtmIVtmVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAO4AAAf4AAAAgAAA/wAAABAoQDLmAAACBYgGYMAAAE+oH///////0WKFRVzjKnAmjp+XX9qP//////p0USaKtMwpjZNhNFyEM61QAAOAP////////nfSpMQU1FMy45OC4yqqr/+xBEDI/wAAB/gAAACAxgGaMAAAEAAAH+AAAAIAAAP8AAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQoD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          EVENT_NATIVE_PLAY: "play",
          EVENT_NATIVE_PAUSE: "pause",
          EVENT_NATIVE_TIMEUPDATE: "timeupdate",
          EVENT_NATIVE_ENDED: "ended",
          EVENT_NATIVE_DURATION: "durationchange",
          EVENT_NATIVE_LOADING: "progress",
          EVENT_NATIVE_META: "loadedmetadata",
          EVENT_NATIVE_CANPLAY: "canplay",
          EVENT_NATIVE_PLAYING: "playing",
          EVENT_NATIVE_ERROR: "error",
          EVENT_NATIVE_STALLED: "stalled",
          EVENT_VOLUMECHANGE: "volumechange",
          EVENT_RATECHANGE: "ratechange",
          EVENT_SEEKED: "seeked",
          promiseLoadedEvents: ["progress"],
          promisePlayingEvents: ["timeupdate"],
        },
        ea = {
          EVENT_PLAY: "play",
          EVENT_STOP: "stop",
          EVENT_PAUSE: "pause",
          EVENT_RESUME: "resume",
          EVENT_PROGRESS: "progress",
          EVENT_SEEKED: "seeked",
          EVENT_VOLUMECHANGE: "volumechange",
          EVENT_RATECHANGE: "ratechange",
          EVENT_LOADING: "loading",
          EVENT_LOADED: "loaded",
          EVENT_ENDED: "ended",
          EVENT_CRASHED: "crashed",
          EVENT_ERROR: "error",
          EVENT_STALLED: "stalled",
          EVENT_CANPLAY: "canplay",
          EVENT_PLAYING: "playing",
          HLS_EVENT_ERROR: "hlserror",
          EVENT_DESTROY: "destroy",
          EVENT_STATE: "state",
          EVENT_SWAP: "swap",
          STATE_INIT: "init",
          STATE_CRASHED: "crashed",
          STATE_IDLE: "idle",
          STATE_PLAYING: "playing",
          STATE_PAUSED: "paused",
        },
        ei = 1,
        er = () => {
          let e = document.createElement("audio");
          return (
            (e.autoplay = !1),
            (e.loop = !1),
            (e.preload = "auto"),
            (e.crossOrigin = "anonymous"),
            e
          );
        };
      class en {
        updateProgress() {
          let e = Number(new Date());
          if (e - this.lastUpdate < et.updateInterval) return;
          this.audio &&
            this.audio.currentTime &&
            (this.lastGoodTime = this.audio.currentTime),
            (this.lastUpdate = e);
          let t = this.duration ? this.duration : 0,
            a = this.loaded ? this.loaded : 0,
            i = this.currentTime ? this.currentTime : 0;
          this.emitter.emit(ea.EVENT_PROGRESS, {
            duration: t,
            loaded: a,
            position: i,
            played: i,
          });
        }
        onNativeLoading() {
          if (
            (this.updateProgress(), this.audio && this.audio.buffered.length)
          ) {
            let e = this.audio.buffered.end(0) - this.audio.buffered.start(0);
            this.notLoading &&
              e &&
              ((this.notLoading = !1), this.emitter.emit(ea.EVENT_LOADING)),
              e >= this.audio.duration - 0.1 &&
                this.emitter.emit(ea.EVENT_LOADED);
          }
        }
        onNativeEnded() {
          (this.ended = !0),
            (this.playing = !1),
            (this.shouldPause = !0),
            this.emitter.emit(ea.EVENT_ENDED);
        }
        onNativeError() {
          this.src &&
            this.src !== et.EMPTY_SOUND &&
            (this.audio &&
              this.audio.error &&
              this.emitter.emit(ea.EVENT_ERROR, this.audio.error),
            (this.playing = !1));
        }
        onNativePause() {
          this.emitter.emit(ea.EVENT_PAUSE), (this.shouldPause = !1);
        }
        onNativePlay() {
          this.emitter.emit(ea.EVENT_PLAY), (this.shouldPlay = !1);
        }
        onNativeSeeked() {
          this.emitter.emit(ea.EVENT_SEEKED);
        }
        onNativeStalled() {
          this.emitter.emit(ea.EVENT_STALLED);
        }
        onNativeCanplay() {
          this.emitter.emit(ea.EVENT_CANPLAY);
        }
        onNativePlaying() {
          this.playing && this.emitter.emit(ea.EVENT_PLAYING);
        }
        onNativeVolumeChange() {
          this.emitter.emit(ea.EVENT_VOLUMECHANGE, this.volumeLevel);
        }
        onNativeRatechange() {
          this.emitter.emit(ea.EVENT_RATECHANGE, this.playbackRate);
        }
        initUserEvents() {
          document.body.addEventListener("mousedown", this.startupAudio, !0),
            document.body.addEventListener("keydown", this.startupAudio, !0),
            document.body.addEventListener("touchstart", this.startupAudio, !0);
        }
        deinitUserEvents() {
          document.body.removeEventListener("mousedown", this.startupAudio, !0),
            document.body.removeEventListener("keydown", this.startupAudio, !0),
            document.body.removeEventListener(
              "touchstart",
              this.startupAudio,
              !0,
            );
        }
        initNativeEvents() {
          this.audio &&
            (this.audio.addEventListener(
              et.EVENT_NATIVE_PAUSE,
              this.onNativePause,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_PLAY,
              this.onNativePlay,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_ENDED,
              this.onNativeEnded,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_TIMEUPDATE,
              this.updateProgress,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_DURATION,
              this.updateProgress,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_LOADING,
              this.onNativeLoading,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_ERROR,
              this.onNativeError,
            ),
            this.audio.addEventListener(et.EVENT_SEEKED, this.onNativeSeeked),
            this.audio.addEventListener(
              et.EVENT_NATIVE_STALLED,
              this.onNativeStalled,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_CANPLAY,
              this.onNativeCanplay,
            ),
            this.audio.addEventListener(
              et.EVENT_NATIVE_PLAYING,
              this.onNativePlaying,
            ),
            this.audio.addEventListener(
              et.EVENT_VOLUMECHANGE,
              this.onNativeVolumeChange,
            ),
            this.audio.addEventListener(
              et.EVENT_RATECHANGE,
              this.onNativeRatechange,
            ));
        }
        deinitNativeEvents() {
          this.audio &&
            (this.audio.removeEventListener(
              et.EVENT_NATIVE_PAUSE,
              this.onNativePause,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_PLAY,
              this.onNativePlay,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_ENDED,
              this.onNativeEnded,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_TIMEUPDATE,
              this.updateProgress,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_DURATION,
              this.updateProgress,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_LOADING,
              this.onNativeLoading,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_ERROR,
              this.onNativeError,
            ),
            this.audio.removeEventListener(
              et.EVENT_SEEKED,
              this.onNativeSeeked,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_STALLED,
              this.onNativeStalled,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_CANPLAY,
              this.onNativeCanplay,
            ),
            this.audio.removeEventListener(
              et.EVENT_NATIVE_PLAYING,
              this.onNativePlaying,
            ),
            this.audio.removeEventListener(
              et.EVENT_VOLUMECHANGE,
              this.onNativeVolumeChange,
            ),
            this.audio.removeEventListener(
              et.EVENT_RATECHANGE,
              this.onNativeRatechange,
            ));
        }
        init() {
          return this.initEvents();
        }
        initEvents() {
          return new Promise((e) => {
            this.initUserEvents(), this.initNativeEvents(), e();
          });
        }
        startupAudio() {
          this.audioContext && this.audioContext.resume(),
            this.deinitUserEvents();
          let e = () => {
              (this.shouldPlay = !1), (this.isAutoplayable = !0);
            },
            t = (e) => {
              (this.shouldPlay = !1),
                console.info("_startupAudio:failReason:".concat(e || ""));
            },
            a = () => {
              if (
                (this.audio &&
                  (this.audio.removeEventListener(et.EVENT_NATIVE_PLAY, a),
                  this.audio.removeEventListener(et.EVENT_NATIVE_CANPLAY, a),
                  this.audio.removeEventListener(et.EVENT_NATIVE_META, a),
                  this.audio.removeEventListener(et.EVENT_NATIVE_ERROR, a)),
                this.promiseMode)
              )
                return;
              let t = () => {
                this.audio &&
                  this.audio.removeEventListener(et.EVENT_NATIVE_PAUSE, t),
                  e();
              };
              (this.clearNativePauseListener = () => {
                this.audio &&
                  this.audio.addEventListener(et.EVENT_NATIVE_PAUSE, t);
              }),
                this.audio &&
                  (this.audio.addEventListener(et.EVENT_NATIVE_PAUSE, t),
                  this.audio.pause(),
                  (this.shouldPause = !0));
            };
          (this.clearInitListener = () => {
            this.audio &&
              (this.audio.removeEventListener(et.EVENT_NATIVE_PLAY, a),
              this.audio.removeEventListener(et.EVENT_NATIVE_CANPLAY, a),
              this.audio.removeEventListener(et.EVENT_NATIVE_META, a),
              this.audio.removeEventListener(et.EVENT_NATIVE_ERROR, a));
          }),
            this.audio &&
              (this.audio.addEventListener(et.EVENT_NATIVE_PLAY, a),
              this.audio.addEventListener(et.EVENT_NATIVE_CANPLAY, a),
              this.audio.addEventListener(et.EVENT_NATIVE_META, a),
              this.audio.addEventListener(et.EVENT_NATIVE_ERROR, a),
              this.audio.load(),
              (this.shouldPlay = !0),
              (this.promiseMode = !0),
              this.audio
                .play()
                .then(() => {
                  e(),
                    (this.shouldPause = !0),
                    (this.shouldPlay = !1),
                    this.audio && this.audio.pause();
                })
                .catch(() => {
                  (this.shouldPause = !0),
                    (this.shouldPlay = !1),
                    t("audio.play");
                }));
        }
        initAndCheckAutoplay() {
          return new Promise((e) => {
            let t = () => {
                (this.shouldPlay = !1), (this.isAutoplayable = !0), e();
              },
              a = (t) => {
                (this.shouldPlay = !1),
                  (this.isAutoplayable = !1),
                  console.info(
                    this,
                    "initAndCheckAutoplay:failReason:".concat(t || ""),
                  ),
                  e();
              },
              i = (e) => {
                if (
                  (this.audio &&
                    (this.audio.removeEventListener(et.EVENT_NATIVE_PLAY, i),
                    this.audio.removeEventListener(et.EVENT_NATIVE_CANPLAY, i),
                    this.audio.removeEventListener(et.EVENT_NATIVE_META, i),
                    this.audio.removeEventListener(et.EVENT_NATIVE_ERROR, i)),
                  this.promiseMode)
                )
                  return;
                if (
                  e.type === et.EVENT_NATIVE_ERROR ||
                  e.type === et.EVENT_NATIVE_META
                ) {
                  a(e.type);
                  return;
                }
                let r = (e) => {
                  if (e.type === et.EVENT_NATIVE_ERROR) {
                    a(e.type);
                    return;
                  }
                  this.audio &&
                    this.audio.removeEventListener(et.EVENT_NATIVE_PAUSE, r),
                    t();
                };
                this.audio &&
                  (this.audio.addEventListener(et.EVENT_NATIVE_PAUSE, r),
                  this.audio.pause()),
                  (this.shouldPause = !0);
              };
            this.audio &&
              (this.audio.addEventListener(et.EVENT_NATIVE_PLAY, i),
              this.audio.addEventListener(et.EVENT_NATIVE_CANPLAY, i),
              this.audio.addEventListener(et.EVENT_NATIVE_META, i),
              this.audio.addEventListener(et.EVENT_NATIVE_ERROR, i),
              (this.audio.src = et.EMPTY_SOUND),
              this.audio.load(),
              (this.shouldPlay = !0),
              (this.promiseMode = !0),
              this.audio
                .play()
                .then(() => {
                  t(),
                    (this.shouldPause = !0),
                    (this.shouldPlay = !1),
                    this.audio && this.audio.pause();
                })
                .catch(() => {
                  (this.shouldPause = !0),
                    (this.shouldPlay = !1),
                    a("audio.play");
                }));
          });
        }
        breakStartup(e) {
          this.deinitUserEvents(),
            this.clearInitListener && this.clearInitListener(),
            this.clearNativePauseListener && this.clearNativePauseListener(),
            console.warn("_startupAudio:interrupted", e);
        }
        waitFor(e, t, a) {
          let i;
          let r = this.promises[e];
          if (r) i = r.promise();
          else {
            let r = () => {},
              n = [
                new Promise((e, t) => {
                  r = t;
                }),
              ],
              s = {},
              o = (e) =>
                new Promise((a) => {
                  let i = () => {
                    t() && a();
                  };
                  this.audio && (this.audio.addEventListener(e, i), (s[e] = i));
                }),
              l = () => {
                for (let e of Object.keys(s))
                  if (this.audio) {
                    let t = s[e];
                    t && this.audio.removeEventListener(e, t);
                  }
              };
            for (let e of a) n.push(o(e));
            let u = Promise.race(n);
            u.then(l).catch(l),
              (this.promises[e] = { promise: () => u, reject: r }),
              (i = u);
          }
          return i;
        }
        cancelWait(e, t) {
          let a;
          (a = this.promises[e]) && (delete this.promises[e], a.reject(t));
        }
        abortPromises(e) {
          for (let t in this.promises)
            Object.prototype.hasOwnProperty.call(this.promises, t) &&
              this.cancelWait(t, e);
        }
        promiseLoadedCheck() {
          if (
            (this.loaderTimer
              ? clearTimeout(this.loaderTimer)
              : (this.loaderTimer = setTimeout(() => {
                  this.cancelWait("loaded", "timeout");
                }, 5e3)),
            this.audio)
          ) {
            let e = Math.min(this.position + 45, this.audio.duration),
              t = this.audio.buffered.end(0) - this.audio.buffered.start(0);
            return 0 !== this.audio.buffered.length && t >= e;
          }
          return !1;
        }
        promiseLoaded() {
          let e = this.waitFor(
              "loaded",
              () => this.promiseLoadedCheck(),
              et.promiseLoadedEvents,
            ),
            t = () => {
              this.loaderTimer && clearTimeout(this.loaderTimer);
            };
          return e.then(t).catch(t), e;
        }
        promisePlayingCheck() {
          if (this.audio) {
            let e = Math.min(this.position + 0.2, this.audio.duration);
            return (
              this.promiseCheckTO && clearTimeout(this.promiseCheckTO),
              0 !== this.audio.currentTime ||
                this.audio.paused ||
                (this.promiseCheckTO = setTimeout(() => {
                  this.audio &&
                    0 === this.audio.currentTime &&
                    !this.audio.paused &&
                    (this.audio.currentTime = 1);
                }, 1e3)),
              this.audio.currentTime >= e
            );
          }
          return !1;
        }
        promisePlaying() {
          return this.waitFor(
            "playing",
            () => this.promisePlayingCheck(),
            et.promisePlayingEvents,
          );
        }
        promiseStartPlaying() {
          let e,
            t = !1;
          if (this.promises.startPlaying)
            e = this.promises.startPlaying.promise();
          else {
            let a,
              i = () => {},
              r = new Promise((e, r) => {
                this.promisePlaying()
                  .then(() => {
                    (t = !0), clearTimeout(a), e();
                  })
                  .catch((e) => {
                    (t = !0),
                      clearTimeout(a),
                      this.cancelWait("startPlaying", e);
                  }),
                  this.promiseLoaded()
                    .then(() => {
                      t ||
                        (a = setTimeout(() => {
                          r("timeout"),
                            this.cancelWait("playing", "timeout"),
                            console.warn("startPlaying:failed");
                        }, 5e3));
                    })
                    .catch((e) => {
                      (t = !0),
                        clearTimeout(a),
                        this.cancelWait("startPlaying", e);
                    }),
                  (i = r);
              });
            (this.promises.startPlaying = { promise: () => r, reject: i }),
              (e = this.promises.startPlaying.promise());
          }
          return e;
        }
        load(e) {
          this.abortPromises("load"),
            this.breakStartup("load"),
            (this.ended = !1),
            (this.playing = !1),
            (this.notLoading = !0),
            (this.position = 0),
            (this.lastGoodTime = 0),
            (this.src = e),
            this.audio && ((this.audio.src = e), this.audio.load());
        }
        stop() {
          this.abortPromises("stop"), this.breakStartup("stop"), this.load("");
        }
        startPlay(e) {
          return this.playing
            ? (this.breakStartup("startPlay"),
              (this.shouldPlay = !0),
              this.audio)
              ? this.audio.play().then(() => {
                  void 0 !== e &&
                    ((this.position = e), (this.audio.currentTime = e));
                })
              : (this.promiseStartPlaying().then(() => {
                  this.retry = 0;
                }),
                Promise.resolve())
            : Promise.resolve();
        }
        play(e) {
          return (this.retry = 0), this.loadMetadata(e);
        }
        loadMetadata(e) {
          return this.playing
            ? Promise.resolve()
            : (this.breakStartup("play"),
              (this.ended = !1),
              (this.playing = !0),
              this.startPlay(e));
        }
        pause() {
          (this.shouldPause = !0),
            (this.playing = !1),
            this.audio &&
              (this.audio.pause(), (this.position = this.audio.currentTime));
        }
        setPosition(e) {
          if (!isFinite(e)) {
            console.warn("setPositionFailed", e);
            return;
          }
          (this.position = e),
            this.audio && (this.audio.currentTime = this.position);
        }
        destroy() {
          this.audio &&
            ((this.shouldPause = !0),
            this.audio.pause(),
            this.deinitNativeEvents()),
            this.abortPromises("destroy"),
            this.deinitUserEvents(),
            (this.promises = {});
        }
        get currentTime() {
          return this.audio ? this.audio.currentTime : null;
        }
        get duration() {
          return this.audio ? this.audio.duration : null;
        }
        get loaded() {
          let e;
          if (this.audio && this.audio.buffered.length) {
            let t = this.audio.buffered.length - 1;
            e = this.audio.buffered.end(t);
          } else e = null;
          return e;
        }
        get volumeLevel() {
          return this.audio ? this.audio.volume : 0;
        }
        set volumeLevel(e) {
          this.audio && (this.audio.volume = e);
        }
        set defaultPlaybackRate(e) {
          this.audio && (this.audio.defaultPlaybackRate = e);
        }
        get playbackRate() {
          return this.audio ? this.audio.playbackRate : 1;
        }
        set playbackRate(e) {
          this.audio && (this.audio.playbackRate = e);
        }
        get audioSrc() {
          return this.src;
        }
        get audioNotLoading() {
          return this.notLoading;
        }
        get autoplayable() {
          return this.isAutoplayable;
        }
        constructor(e) {
          (0, $._)(this, "audio", er()),
            (0, $._)(this, "emitter", void 0),
            (0, $._)(this, "src", ""),
            (0, $._)(this, "position", 0),
            (0, $._)(this, "lastGoodTime", 0),
            (0, $._)(this, "lastUpdate", 0),
            (0, $._)(this, "notLoading", !0),
            (0, $._)(this, "shouldPause", !1),
            (0, $._)(this, "shouldPlay", !1),
            (0, $._)(this, "playing", !1),
            (0, $._)(this, "ended", !1),
            (0, $._)(this, "promiseMode", !1),
            (0, $._)(this, "promises", {}),
            (0, $._)(this, "audioContext", null),
            (0, $._)(this, "loaderTimer", null),
            (0, $._)(this, "promiseCheckTO", null),
            (0, $._)(this, "retry", 0),
            (0, $._)(this, "clearInitListener", null),
            (0, $._)(this, "clearNativePauseListener", null),
            (0, $._)(this, "isAutoplayable", !1),
            (0, $._)(this, "name", ei++),
            (0, $._)(this, "whenReady", void 0),
            (this.emitter = e),
            (this.startupAudio = this.startupAudio.bind(this)),
            (this.updateProgress = this.updateProgress.bind(this)),
            (this.onNativeLoading = this.onNativeLoading.bind(this)),
            (this.onNativeEnded = this.onNativeEnded.bind(this)),
            (this.onNativeError = this.onNativeError.bind(this)),
            (this.onNativePause = this.onNativePause.bind(this)),
            (this.onNativePlay = this.onNativePlay.bind(this)),
            (this.onNativeSeeked = this.onNativeSeeked.bind(this)),
            (this.onNativeStalled = this.onNativeStalled.bind(this)),
            (this.onNativeCanplay = this.onNativeCanplay.bind(this)),
            (this.onNativePlaying = this.onNativePlaying.bind(this)),
            (this.onNativeVolumeChange = this.onNativeVolumeChange.bind(this)),
            (this.onNativeRatechange = this.onNativeRatechange.bind(this)),
            (this.whenReady = this.init());
        }
      }
      class es {
        isOnlyDeviceVolume() {
          let e = !0;
          try {
            let t = document.createElement("audio");
            (t.volume = 0.63), (e = Math.abs(t.volume - 0.63) > 0.01);
          } catch (t) {
            e = !0;
          }
          return e;
        }
        parseParams(e) {
          let t = e.split("?")[1];
          return t && t.length
            ? t.split("&").reduce(function (e, t) {
                let a = t.split("="),
                  i = a[0],
                  r = a[1];
                return i && r && (e[i] = r), e;
              }, {})
            : {};
        }
        updateUrl(e, t) {
          let a = this.parseParams(e),
            i = "";
          for (let e in (Object.assign(a, t), a))
            Object.prototype.hasOwnProperty.call(a, e) &&
              (i += "".concat(e, "=").concat(a[e]));
          return e + (i ? "?".concat(i) : "");
        }
        getCookie(e) {
          return (
            document.cookie.split(";").reduce((e, t) => {
              let [a, i] = t.trim().split("=");
              return a && i ? { ...e, [a]: i } : e;
            }, {})[e] || ""
          );
        }
      }
      class eo extends en {
        init() {
          return this.initEvents().then(() => {
            this.initHls();
          });
        }
        load(e) {
          if (
            (this.abortPromises("load"),
            this.breakStartup("load"),
            (this.ended = !1),
            (this.playing = !1),
            (this.notLoading = !0),
            (this.position = 0),
            (this.lastGoodTime = 0),
            (this.src = e),
            this.audio)
          ) {
            if (/\.m3u8$/.test(e)) {
              var t;
              (this.isHlsTrack = !0),
                this.destroyHls(),
                this.initHls(),
                null === (t = this.hls) ||
                  void 0 === t ||
                  t.loadSource(this.getHlsPlayingEntityUrl(e));
            } else (this.isHlsTrack = !1), (this.audio.src = e);
            this.audio.load();
          }
        }
        stop() {
          this.abortPromises("stop"),
            this.breakStartup("stop"),
            this.isHlsTrack && this.destroyHls(),
            this.load("");
        }
        startPlay(e) {
          return this.playing
            ? (this.breakStartup("startPlay"),
              (this.shouldPlay = !0),
              this.audio)
              ? this.audio.play().then(() => {
                  void 0 !== e &&
                    ((this.position = e), (this.audio.currentTime = e));
                })
              : (this.hls && this.hls.startLoad(),
                this.promiseStartPlaying().then(() => {
                  this.retry = 0;
                }),
                Promise.resolve())
            : Promise.resolve();
        }
        initHls() {
          this.hls ||
            ((this.hls = new ee.ZP({
              liveDurationInfinity: !0,
              maxBufferSize: 3e6,
            })),
            this.audio && this.hls.attachMedia(this.audio),
            this.initHlsEvents());
        }
        initHlsEvents() {
          this.hls &&
            (this.hls.on(ee.ZP.Events.ERROR, (e, t) => {
              if (t.fatal && this.hls)
                switch (t.type) {
                  case ee.ZP.ErrorTypes.NETWORK_ERROR:
                    this.retry++,
                      this.retry > 2
                        ? (this.destroyHls(),
                          (this.playing = !1),
                          this.emitter.emit(ea.EVENT_ERROR, t))
                        : this.hls.startLoad();
                    break;
                  case ee.ZP.ErrorTypes.MEDIA_ERROR:
                    this.hls.recoverMediaError();
                    break;
                  default:
                    this.destroyHls(),
                      (this.playing = !1),
                      this.emitter.emit(ea.EVENT_ERROR, t);
                }
            }),
            this.hls.on(ee.ZP.Events.DESTROYING, () => {
              this.hls = null;
            }));
        }
        getHlsPlayingEntityUrl(e) {
          let t = "";
          for (; t.length < 44; )
            t += (Math.random() + 1).toString(36).substring(3);
          t = t.slice(0, 44);
          let a = this.playerInitializationTime.toString().slice(0, 10),
            i = "".concat(t, "xWEBx0001x").concat(a);
          return this.browser.updateUrl(e, { vsid: i });
        }
        destroyHls() {
          (this.retry = 0),
            this.hls &&
              (this.hls.stopLoad(), this.hls.destroy(), (this.hls = null));
        }
        pause() {
          (this.shouldPause = !0),
            (this.playing = !1),
            this.isHlsTrack && this.hls && this.hls.stopLoad(),
            this.audio &&
              (this.audio.pause(), (this.position = this.audio.currentTime));
        }
        constructor(e) {
          super(e),
            (0, $._)(this, "isHlsTrack", !1),
            (0, $._)(this, "playerInitializationTime", void 0),
            (0, $._)(this, "hls", null),
            (0, $._)(this, "browser", new es()),
            (this.playerInitializationTime = Date.now());
        }
      }
      class el extends Error {
        constructor(e) {
          super(e), (this.name = "AudioError");
        }
      }
      let eu = { BAD_STATE: "action is not permited from current state" },
        ed = 1;
      class ec {
        get source() {
          return this.loader.audio;
        }
        play(e, t) {
          return this.loader.load(e), this.loader.play(t);
        }
        setSrc(e, t) {
          this.loader.load(e), void 0 !== t && this.loader.setPosition(t);
        }
        pause() {
          this.loader.pause();
        }
        resume() {
          return this.loader.play();
        }
        stop() {
          this.loader.stop(), this.emitter.emit(ea.EVENT_STOP);
        }
        destroy() {
          this.loader.destroy(), this.emitter.emit(ea.EVENT_DESTROY);
        }
        getPosition() {
          return this.loader.currentTime;
        }
        setPosition(e) {
          this.loader.setPosition(e - 0.001);
        }
        getDuration() {
          return this.loader.duration;
        }
        getLoaded() {
          return this.loader.loaded ? this.loader.loaded : 0;
        }
        get volumeLevel() {
          return this.loader.volumeLevel;
        }
        set volumeLevel(e) {
          this.loader.volumeLevel = Math.min(1, e);
        }
        get speedLevel() {
          return this.loader.playbackRate;
        }
        set speedLevel(e) {
          (this.loader.defaultPlaybackRate = e), (this.loader.playbackRate = e);
        }
        getSrc() {
          return "" !== this.loader.audioSrc ? this.loader.audioSrc : null;
        }
        isAutoplayable() {
          return this.loader.autoplayable;
        }
        constructor(e, t) {
          (0, $._)(this, "emitter", void 0),
            (0, $._)(this, "loader", void 0),
            (0, $._)(this, "name", ed++),
            (0, $._)(this, "type", "html5"),
            (0, $._)(this, "whenReady", void 0),
            (this.emitter = e),
            (this.loader = t),
            (this.whenReady = this.loader.whenReady);
        }
      }
      let eh = 1;
      class em {
        get source() {
          var e;
          return null === (e = this.implementation) || void 0 === e
            ? void 0
            : e.source;
        }
        on(e, t) {
          this.emitter.on(e, t);
        }
        off(e, t) {
          this.emitter.off(e, t);
        }
        onAudioPlayerInit() {
          this.handleImplementationEvents(), this.setState(ea.STATE_IDLE);
        }
        handleImplementationEvents() {
          this.emitter.on(ea.EVENT_PLAY, () => {
            this.implementationEventHandler(ea.EVENT_PLAY);
          }),
            this.emitter.on(ea.EVENT_ENDED, () => {
              this.implementationEventHandler(ea.EVENT_ENDED);
            }),
            this.emitter.on(ea.EVENT_SWAP, () => {
              this.implementationEventHandler(ea.EVENT_SWAP);
            }),
            this.emitter.on(ea.EVENT_STOP, () => {
              this.implementationEventHandler(ea.EVENT_STOP);
            }),
            this.emitter.on(ea.EVENT_ERROR, () => {
              this.implementationEventHandler(ea.EVENT_ERROR);
            }),
            this.emitter.on(ea.HLS_EVENT_ERROR, () => {
              this.implementationEventHandler(ea.HLS_EVENT_ERROR);
            }),
            this.emitter.on(ea.EVENT_PAUSE, () => {
              this.implementationEventHandler(ea.EVENT_PAUSE);
            }),
            this.emitter.on(ea.EVENT_CRASHED, () => {
              this.implementationEventHandler(ea.EVENT_CRASHED);
            });
        }
        implementationEventHandler(e) {
          switch (e) {
            case ea.EVENT_PLAY:
              this.setState(ea.STATE_PLAYING);
              break;
            case ea.EVENT_ENDED:
            case ea.EVENT_SWAP:
            case ea.EVENT_STOP:
            case ea.EVENT_ERROR:
            case ea.HLS_EVENT_ERROR:
              this.setState(ea.STATE_IDLE);
              break;
            case ea.EVENT_PAUSE:
              this.setState(ea.STATE_PAUSED);
              break;
            case ea.EVENT_CRASHED:
              this.setState(ea.STATE_CRASHED);
          }
        }
        onBeforeUnload() {
          (navigator && 1 === navigator.maxTouchPoints) || this.destroy();
        }
        setState(e) {
          if (e === ea.STATE_PAUSED && this.state !== ea.STATE_PLAYING) return;
          let t = this.state !== e;
          (this.state = e), t && this.emitter.emit(ea.EVENT_STATE, e);
        }
        waitEvents(e, t, a) {
          let i = () => {},
            r = () => {},
            n = new Promise((e, t) => {
              (i = e), (r = t);
            });
          this.promises[e] = { promise: () => n, reject: r };
          let s = () => {
            for (let e of t) this.off(e, i);
            for (let e of a) this.off(e, r);
            delete this.promises[e];
          };
          for (let e of t) this.on(e, i);
          let o = (e) => (t) => {
            let a = t instanceof Error ? t : new el(e);
            r(a);
          };
          for (let e of a) this.on(e, o(e));
          return n.then(s).catch(s), n;
        }
        getState() {
          return this.state;
        }
        getSrc() {
          return this.implementation ? this.implementation.getSrc() : null;
        }
        play(e, t) {
          return (
            (this.played = 0),
            (this.lastSkip = 0),
            this.generatePlayId(),
            this.promises.whenPlay &&
              this.promises.whenPlay.reject(ea.EVENT_PLAY),
            this.promises.whenPause &&
              this.promises.whenPause.reject(ea.EVENT_PLAY),
            this.promises.whenStop &&
              this.promises.whenStop.reject(ea.EVENT_PLAY),
            this.implementation.play(e, t)
          );
        }
        setSrc(e, t) {
          this.implementation && this.implementation.setSrc(e, t);
        }
        restart() {
          return this.getDuration()
            ? (this.generatePlayId(),
              this.setPosition(0),
              (this.played = 0),
              (this.lastSkip = 0),
              this.resume())
            : Promise.reject(new el(eu.BAD_STATE));
        }
        stop() {
          let e;
          return (
            this.implementation &&
              (this.implementation.stop(), Promise.resolve()),
            (this.played = 0),
            (this.lastSkip = 0),
            this.promises.whenPlay &&
              this.promises.whenPlay.reject(ea.EVENT_STOP),
            this.promises.whenPause &&
              this.promises.whenPause.reject(ea.EVENT_STOP),
            (e = this.promises.whenStop
              ? this.promises.whenStop.promise()
              : this.waitEvents(
                  "_whenStop",
                  [ea.EVENT_STOP],
                  [
                    ea.EVENT_PLAY,
                    ea.EVENT_ERROR,
                    ea.HLS_EVENT_ERROR,
                    ea.EVENT_CRASHED,
                  ],
                )),
            this.implementation && this.implementation.stop(),
            e
          );
        }
        pause() {
          let e;
          return this.state !== ea.STATE_PLAYING
            ? Promise.reject(new el(eu.BAD_STATE))
            : (this.promises.whenPlay &&
                this.promises.whenPlay.reject(ea.EVENT_PAUSE),
              (e = this.promises.whenPause
                ? this.promises.whenPause.promise()
                : this.waitEvents(
                    "_whenPause",
                    [ea.EVENT_PAUSE],
                    [
                      ea.EVENT_STOP,
                      ea.EVENT_PLAY,
                      ea.EVENT_ERROR,
                      ea.HLS_EVENT_ERROR,
                      ea.EVENT_CRASHED,
                    ],
                  )),
              this.implementation && this.implementation.pause(),
              e);
        }
        resume() {
          let e;
          return this.state !== ea.STATE_PLAYING || this.promises.whenPause
            ? this.state === ea.STATE_IDLE ||
              this.state === ea.STATE_PAUSED ||
              this.state === ea.STATE_PLAYING
              ? (this.promises.whenPause &&
                  this.promises.whenPause.reject(ea.EVENT_RESUME),
                (e = this.promises.whenPlay
                  ? this.promises.whenPlay.promise()
                  : this.waitEvents(
                      "_whenPlay",
                      [ea.EVENT_PLAY],
                      [
                        ea.EVENT_STOP,
                        ea.EVENT_ERROR,
                        ea.HLS_EVENT_ERROR,
                        ea.EVENT_CRASHED,
                      ],
                    )),
                this.implementation && this.implementation.resume(),
                e.then(() => {
                  this.emitter.emit(ea.EVENT_RESUME);
                }))
              : Promise.reject(new el(eu.BAD_STATE))
            : Promise.resolve();
        }
        destroy() {
          (this.played = 0),
            (this.lastSkip = 0),
            this.promises.whenPlay &&
              this.promises.whenPlay.reject(ea.EVENT_DESTROY),
            this.promises.whenPause &&
              this.promises.whenPause.reject(ea.EVENT_DESTROY),
            this.implementation && this.implementation.destroy();
        }
        getPosition() {
          let e = null;
          return (
            this.implementation && (e = this.implementation.getPosition()),
            e || 0
          );
        }
        setPosition(e) {
          return (
            this.implementation && this.implementation.setPosition(e),
            (this.played += this.getPosition() - this.lastSkip),
            (this.lastSkip = e),
            e
          );
        }
        getDuration() {
          let e = null;
          return (
            this.implementation && (e = this.implementation.getDuration()),
            null === e ? 0 : e
          );
        }
        getLoaded() {
          return this.implementation ? this.implementation.getLoaded() : 0;
        }
        getPlayed() {
          let e = this.getPosition();
          return (
            (this.played += e - this.lastSkip), (this.lastSkip = e), this.played
          );
        }
        getVolume() {
          return this.implementation ? this.implementation.volumeLevel : 0;
        }
        setVolume(e) {
          let t = 0;
          return (
            this.implementation &&
              ((this.implementation.volumeLevel = e), (t = e)),
            t
          );
        }
        getSpeed() {
          return this.implementation ? this.implementation.speedLevel : 0;
        }
        setSpeed(e) {
          let t = 0;
          return (
            this.implementation &&
              ((this.implementation.speedLevel = e), (t = e)),
            t
          );
        }
        isAutoplayable() {
          let e = null;
          return (
            this.implementation && (e = this.implementation.isAutoplayable()),
            null !== e && e
          );
        }
        generatePlayId() {
          this.playId = Math.random().toString().slice(2);
        }
        getPlayId() {
          return this.playId;
        }
        constructor(e, t) {
          (0, $._)(this, "emitter", void 0),
            (0, $._)(this, "played", 0),
            (0, $._)(this, "lastSkip", 0),
            (0, $._)(this, "playId", null),
            (0, $._)(this, "implementation", void 0),
            (0, $._)(this, "promises", {}),
            (0, $._)(this, "name", eh++),
            (0, $._)(this, "state", ea.STATE_INIT),
            (this.emitter = e),
            window.addEventListener(
              "beforeunload",
              () => this.onBeforeUnload(),
              !0,
            ),
            (this.implementation = new ec(this.emitter, t)),
            this.onAudioPlayerInit();
        }
      }
      var eg = a(6981);
      class ep {
        get source() {
          return this.core.source;
        }
        play(e) {
          let { src: t, position: a } = e;
          return this.core.play(t, a);
        }
        setSrc(e) {
          let { src: t, position: a } = e;
          this.core.setSrc(t, a);
        }
        setProgress(e) {
          return Promise.resolve(this.core.setPosition(e));
        }
        pause() {
          return this.core.pause();
        }
        resume() {
          return this.core.resume();
        }
        setVolume(e) {
          return Promise.resolve(this.core.setVolume(e));
        }
        setSpeed(e) {
          return Promise.resolve(this.core.setSpeed(e));
        }
        stop() {
          return this.core.stop();
        }
        onAudioEnd(e) {
          this.core.on(ea.EVENT_ENDED, e);
        }
        onAudioPaused(e) {
          this.core.on(ea.EVENT_PAUSE, e);
        }
        onAudioResume(e) {
          this.core.on(ea.EVENT_RESUME, e);
        }
        onAudioUpdatingProgress(e) {
          this.core.on(ea.EVENT_PROGRESS, e);
        }
        onAudioSeeked(e) {
          this.core.on(ea.EVENT_SEEKED, e);
        }
        onAudioStalled(e) {
          this.core.on(ea.EVENT_STALLED, e);
        }
        onAudioCanplay(e) {
          this.core.on(ea.EVENT_CANPLAY, e);
        }
        onAudioPlaying(e) {
          this.core.on(ea.EVENT_PLAYING, e);
        }
        onAudioError(e) {
          this.core.on(ea.EVENT_ERROR, e);
        }
        onAudioVolumeChange(e) {
          this.core.on(ea.EVENT_VOLUMECHANGE, e);
        }
        onAudioSpeedChange(e) {
          this.core.on(ea.EVENT_RATECHANGE, e);
        }
        offAudioEnd(e) {
          this.core.off(ea.EVENT_ENDED, e);
        }
        offAudioPaused(e) {
          this.core.off(ea.EVENT_PAUSE, e);
        }
        offAudioResume(e) {
          this.core.off(ea.EVENT_RESUME, e);
        }
        offAudioUpdatingProgress(e) {
          this.core.off(ea.EVENT_PROGRESS, e);
        }
        offAudioSeeked(e) {
          this.core.off(ea.EVENT_SEEKED, e);
        }
        offAudioStalled(e) {
          this.core.off(ea.EVENT_STALLED, e);
        }
        offAudioCanplay(e) {
          this.core.off(ea.EVENT_CANPLAY, e);
        }
        offAudioPlaying(e) {
          this.core.off(ea.EVENT_PLAYING, e);
        }
        offAudioError(e) {
          this.core.off(ea.EVENT_ERROR, e);
        }
        offAudioVolumeChange(e) {
          this.core.off(ea.EVENT_VOLUMECHANGE, e);
        }
        offAudioSpeedChange(e) {
          this.core.off(ea.EVENT_RATECHANGE, e);
        }
        constructor() {
          (0, $._)(this, "emitter", new eg.v());
        }
      }
      class ey extends ep {
        constructor(...e) {
          super(...e),
            (0, $._)(this, "loader", new eo(this.emitter)),
            (0, $._)(this, "core", new em(this.emitter, this.loader));
        }
      }
      var ev = a(4520),
        eE = a(86348),
        ef = a(35068),
        eS = a(10420),
        eb = a(50850);
      ((i = C || (C = {})).PLAYING = "playing"),
        (i.NOT_PLAYING = "not-playing");
      let eP = (e) =>
        !!(
          "object" == typeof e &&
          e &&
          "streamProgress" in e &&
          "object" == typeof e.streamProgress &&
          e.streamProgress &&
          "endPositionSec" in e.streamProgress &&
          "number" == typeof e.streamProgress.endPositionSec
        );
      class eA {
        set playId(e) {
          this.entityPlayId = e;
        }
        get playId() {
          return this.entityPlayId;
        }
        set addTracksToPlayerTime(e) {
          this.entityAddTracksToPlayerTime = e;
        }
        get addTracksToPlayerTime() {
          return this.entityAddTracksToPlayerTime;
        }
        get totalPlayedSeconds() {
          return (function (e) {
            let t,
              a,
              i = 0,
              r = [];
            if (0 !== e.length) {
              for (let i of (function (e) {
                let t = [];
                for (; 0 !== e.length; ) {
                  let a = e.shift();
                  if (a && a.stage === C.PLAYING) {
                    let e = t[t.length - 1];
                    (e && e.stage !== C.NOT_PLAYING) || t.push(a);
                  } else if (a && a.stage === C.NOT_PLAYING) {
                    let e = t[t.length - 1];
                    e && e.stage === C.PLAYING && t.push(a);
                  }
                }
                let a = t[t.length - 1];
                return (
                  a &&
                    a.stage === C.PLAYING &&
                    t.push({
                      stage: C.NOT_PLAYING,
                      perfNow: performance.now(),
                      ts: Date.now(),
                    }),
                  t
                );
              })(e))
                i.stage === C.PLAYING ? (t = i.perfNow) : (a = i.perfNow),
                  t && a && (r.push(a - t), (t = void 0), (a = void 0));
              for (let e of r) i += e;
              return Math.round((i / 1e3 + Number.EPSILON) * 1e3) / 1e3;
            }
            return i;
          })([...this.entityTimeStagesOfPlayback]);
        }
        get timeStagesOfPlayback() {
          return this.entityTimeStagesOfPlayback;
        }
        saveTimeStageOfPlayback(e) {
          let t = {
            stage: e.stage,
            perfNow: performance.now(),
            ts: Date.now(),
          };
          e.reason && (t.reason = e.reason),
            this.entityTimeStagesOfPlayback.push(t);
        }
        clearTimeStagesOfPlayback() {
          this.entityTimeStagesOfPlayback = [];
        }
        get data() {
          return this.entityData;
        }
        get isAvailable() {
          return !!(
            "available" in this.entityData.meta &&
            this.entityData.meta.available
          );
        }
        get isDisliked() {
          return (
            void 0 !== this.likeStore &&
            this.likeStore.isTrackDisliked(this.entityData.meta.id)
          );
        }
        get everFinished() {
          return eP(this.entityData.meta)
            ? this.entityData.meta.streamProgress.everFinished
            : null;
        }
        set everFinished(e) {
          eP(this.entityData.meta) &&
            null !== e &&
            (this.entityData.meta.streamProgress.everFinished = e);
        }
        hasPlayId() {
          return "" !== this.playId;
        }
        constructor(e) {
          (0, $._)(this, "entityData", void 0),
            (0, $._)(this, "likeStore", void 0),
            (0, $._)(this, "entityPlayId", ""),
            (0, $._)(this, "entityAddTracksToPlayerTime", ""),
            (0, $._)(this, "entityTimeStagesOfPlayback", []),
            (0, $._)(this, "mediaElementErrorReloadCounter", 0),
            (0, $._)(this, "mediaSourceData", null),
            (0, $._)(this, "startPosition", null),
            (0, $._)(this, "lastSeekPosition", null),
            (0, $._)(this, "contentType", eb.z.AUDIO),
            (this.entityData = e.data),
            (this.likeStore = e.likeStore);
        }
      }
      class e_ extends eA {}
      class eN extends eA {}
      class eC extends eA {
        get isAvailable() {
          return !1;
        }
        get isDisliked() {
          return !1;
        }
      }
      var eT = a(46393);
      class eI extends eT.y {
        constructor(e, { code: t = "E_ENTITY_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "EntityFactoryException"),
            Object.setPrototypeOf(this, eI.prototype);
        }
      }
      class ek extends eA {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
        constructor(...e) {
          super(...e), (0, $._)(this, "contentType", eb.z.HLS);
        }
      }
      class eD extends eA {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
      }
      class eL {
        create(e) {
          let t = null,
            { data: a } = e;
          void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
          try {
            switch (a.type) {
              case eS.A.Music:
                t = new e_({ data: a, likeStore: this.likeStore });
                break;
              case eS.A.VibeTrack:
                t = new eN({ data: a, likeStore: this.likeStore });
                break;
              case eS.A.Generative:
                t = new ek({ data: a, likeStore: this.likeStore });
                break;
              case eS.A.SmartPreview:
                t = new eD({ data: a, likeStore: this.likeStore });
                break;
              case eS.A.Unknown:
                a.meta.type,
                  ef.V.MUSIC,
                  (t = new e_({
                    data: { ...a, type: eS.A.Music },
                    likeStore: this.likeStore,
                  }));
                break;
              case eE.RX.Unloaded:
                t = new eC({ data: a, likeStore: this.likeStore });
            }
          } catch (e) {
            throw new eI("Error while creating entity", {
              cause: e,
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new eI("Cannot create entities with nonexistent type", {
            code: "E_NONEXISTENT_ENTITY_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, $._)(this, "likeStore", void 0), (this.likeStore = e.likeStore);
        }
      }
      var eR = a(19489),
        eV = a(19725);
      function ex(e, t) {
        let a = [];
        for (let i of e)
          for (let e of i)
            a.push({ type: eE.RX.Unloaded, meta: e, additional: t });
        return a;
      }
      var eG = a(54941);
      class eO extends eE.$n {
        get isCurrentContext() {
          return this.isCurrent;
        }
        set isCurrentContext(e) {
          this.isCurrent = e;
        }
        get availableActions() {
          return this.actions;
        }
        constructor(...e) {
          super(...e),
            (0, $._)(this, "isCurrent", !1),
            (0, $._)(this, "actions", {
              moveBackward: new eG.wi(!1),
              moveForward: new eG.wi(!0),
              repeat: new eG.wi(null),
              shuffle: new eG.wi(null),
              speed: new eG.wi(null),
            }),
            (0, $._)(this, "from", ""),
            (0, $._)(this, "utmLink", void 0);
        }
      }
      class ew extends eT.y {
        constructor(e, { code: t = "E_CONTEXT", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "ContextException"),
            Object.setPrototypeOf(this, ew.prototype);
        }
      }
      function eM(e, t) {
        return e.map((e) => ({
          type: eS.A.SmartPreview,
          meta: e,
          additional: t,
        }));
      }
      class ej extends eO {
        loadTrailer() {
          return this.albumsResource
            .getTrailer({ albumId: Number(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ew("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.albumsResource
            .getAlbumWithRichTracks({
              albumId: Number(this.contextData.meta.id),
              resumeStream: !0,
            })
            .then((e) => ((this.contextData.meta = e), e))
            .catch((e) => {
              throw new ew("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          return this.contextData.trailer
            ? this.loadTrailer().then((t) => eM(t.trailer.tracks, e))
            : this.contextData.meta.volumes
              ? Promise.resolve(ex(this.contextData.meta.volumes, e))
              : this.loadContextMeta().then((t) =>
                  Promise.resolve(ex(t.volumes, e)),
                );
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        get resumeFromIndex() {
          var e;
          if (
            (null === (e = this.contextData.meta.resumeFrom) || void 0 === e
              ? void 0
              : e.trackId) &&
            Array.isArray(this.contextData.meta.volumes)
          ) {
            let e = []
              .concat(...this.contextData.meta.volumes)
              .findIndex((e) => {
                var t;
                return (
                  e.id ===
                  (null === (t = this.contextData.meta.resumeFrom) ||
                  void 0 === t
                    ? void 0
                    : t.trackId)
                );
              });
            if (e >= 0) return e;
          }
          return null;
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "albumsResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            albumResourceConfig: a,
            httpClient: i,
            variables: r,
          } = e;
          (this.albumsResource = new eV.S(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = r);
        }
      }
      var eU = a(21143),
        eq = a(57602),
        eF = a(89646);
      let eB = (e, t) => "".concat(e, ":").concat(t),
        eY = (e) => 3 === e;
      class eW extends eO {
        loadTrailer() {
          let { uid: e, kind: t } = (0, eF.b)(this.contextData.meta.id);
          return this.usersResource
            .getPlaylistTrailer({ userId: e, playlistKind: t })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ew("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.contextData.meta.uuid,
            { uid: t, kind: a } = (0, eF.b)(this.contextData.meta.id),
            i = eY(a);
          return (
            i && void 0 !== e
              ? this.playlistResource.getPlaylist({
                  playlistUuid: e,
                  resumeStream: !1,
                  richTracks: !1,
                })
              : this.usersResource.getPlaylistWithTracksIds({
                  userId: t,
                  playlistKind: a,
                  resumeStream: !1,
                  trackMetaType: i ? "music" : void 0,
                })
          )
            .then((e) => {
              let t = { ...e, id: eB(e.uid, e.kind) };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ew("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => eM(t.trailer.tracks, e));
          if (this.contextData.meta.tracks) {
            let t = [];
            for (let a of this.contextData.meta.tracks)
              t.push({ type: eE.RX.Unloaded, meta: a, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            for (let i of t.tracks)
              a.push({ type: eE.RX.Unloaded, meta: i, additional: e });
            return a;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "usersResource", void 0),
            (0, $._)(this, "playlistResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            usersResourceConfig: a,
            playlistResourceConfig: i,
            httpClient: r,
            variables: n,
          } = e;
          (this.usersResource = new eU.V(r, a)),
            (this.playlistResource = new eq.B(r, i)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = n);
        }
      }
      var ez = a(58826);
      class eH extends eO {
        loadTrailer() {
          return this.artistsResource
            .getTrailer({ artistId: String(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ew("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return (
            this.artistsResource
              .getBriefInfo({
                artistId: String(this.contextData.meta.id),
                discographyBlockEnabled: !1,
                fetchPlaylistLikesCounts: !1,
              })
              .then((e) => {
                this.contextData.meta.artist = e.artist;
              })
              .catch((e) => {
                throw new ew("Error in ArtistContext", {
                  code: "E_ARTIST_LOAD_CONTEXT_META",
                  cause: e,
                  data: { contextId: this.contextData.meta.id },
                });
              }),
            this.artistsResource
              .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
              .then(
                (e) => (
                  (this.contextData.meta.trackIds = e), this.contextData.meta
                ),
              )
              .catch((e) => {
                throw new ew("Error in ArtistContext", {
                  code: "E_ARTIST_LOAD_CONTEXT_META",
                  cause: e,
                  data: { contextId: this.contextData.meta.id },
                });
              })
          );
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => eM(t.trailer.tracks, e));
          if (this.contextData.meta.trackIds) {
            let t = [];
            for (let a of this.contextData.meta.trackIds)
              t.push({ type: eE.RX.Unloaded, meta: { id: a }, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            if (t.trackIds)
              for (let i of t.trackIds)
                a.push({
                  type: eE.RX.Unloaded,
                  meta: { id: i },
                  additional: e,
                });
            return a;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "artistsResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            artistsResourceConfig: a,
            httpClient: i,
            variables: r,
          } = e;
          (this.artistsResource = new ez.c(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = r);
        }
      }
      var eK = a(90377),
        eJ = a(35231);
      function eX(e, t) {
        let a = [];
        for (let i of e)
          a.push({
            type: eS.A.VibeTrack,
            additional: t,
            meta: {
              ...i.track,
              liked: i.liked,
              trackParameters: i.trackParameters,
            },
            fromCurrentContext: !0,
          });
        return a;
      }
      function eQ(e) {
        var t;
        let a;
        if (
          !(a =
            e.data.type === eE.RX.Unloaded
              ? e.data.meta.id
              : "realId" in e.data.meta
                ? e.data.meta.realId
                : e.data.meta.id)
        )
          throw new ew("Error in VibeContext", {
            code: "E_WRONG_VIBE_CONTEXT",
          });
        let i = "albums" in e.data.meta ? e.data.meta.albums : [];
        return i && (null === (t = i[0]) || void 0 === t ? void 0 : t.id)
          ? "".concat(a, ":").concat(i[0].id)
          : String(a);
      }
      function eZ(e, t) {
        return e.slice(0, t + 2).map((e) => {
          let { entity: t } = e;
          return eQ(t);
        });
      }
      function e$() {
        return new Date().toISOString();
      }
      let e0 = (e) =>
        "object" == typeof e &&
        e &&
        "durationMs" in e &&
        "number" == typeof e.durationMs;
      class e5 extends eT.y {
        constructor(e, { code: t = "E_VIBE_CONTEXT_FEEDBACK", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "VibeContextFeedbackException"),
            Object.setPrototypeOf(this, e5.prototype);
        }
      }
      var e1 = a(81376);
      class e9 extends eO {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeContextSet.tap("VibeContext", () => {
            this.isCurrentContext &&
              this.sendFeedback(
                a.state.playerState,
                a.state.queueState,
                eK.C.SKIP,
              );
          }),
            t.afterMediaStartPlaying.tapPromise("VibeContext", () =>
              this.isCurrentContext
                ? new Promise((e) => {
                    this.isVibeStarted
                      ? this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eK.C.TRACK_STARTED,
                        )
                      : (this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eK.C.RADIO_STARTED,
                        ).then(() => {
                          this.sendFeedback(
                            a.state.playerState,
                            a.state.queueState,
                            eK.C.TRACK_STARTED,
                          );
                        }),
                        (this.isVibeStarted = !0)),
                      e();
                  })
                : Promise.resolve(),
            ),
            t.beforeFindPlayableEntityIndex.tapPromise("VibeContext", (e) =>
              this.isCurrentContext
                ? new Promise((t, i) => {
                    switch (e) {
                      case eE.Zp.AUTO_MOVE_FORWARD:
                        this.onAutoMoveForward(a).then(t).catch(i);
                        break;
                      case eE.Zp.MOVE_FORWARD:
                        this.onMoveForward(a).then(t).catch(i);
                        break;
                      case eE.Zp.MOVE_BACKWARD:
                        this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eK.C.SKIP,
                        ),
                          t();
                        break;
                      case eE.Zp.SET_INDEX:
                      case eE.Zp.RESTART_CONTEXT:
                        t();
                    }
                  })
                : Promise.resolve(),
            ),
            t.beforeEntityChange.tapPromise("VibeContext", (e) =>
              this.isCurrentContext && e.method === eE.Zp.SET_INDEX
                ? this.onSetIndex(a, e.index)
                : Promise.resolve(),
            );
        }
        loadContextMeta() {
          let {
            meta: { id: e },
            seeds: t,
          } = this.contextData;
          return (
            this.contextData.cloneSessionId
              ? this.rotorResource.sessionClone({
                  ...this.contextData,
                  seeds: t,
                  includeWaveModel: !0,
                  radioSessionId: this.contextData.cloneSessionId,
                })
              : this.rotorResource.sessionNew({
                  ...this.contextData,
                  seeds: t,
                  includeWaveModel: !0,
                })
          )
            .then(
              (t) => (
                (this.contextData.meta.session = t),
                (this.contextData.trackToStartFrom = void 0),
                { id: e, session: t }
              ),
            )
            .catch((e) => {
              throw new ew("Error in VibeContext", {
                code: "E_VIBE_LOAD_CONTEXT_META",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        setSettings(e, t, a) {
          let {
              meta: { id: i },
            } = this.contextData,
            r = eZ(a.entityList.value, a.index.value);
          return this.sendFeedback(t, a, eK.C.SKIP).then(() =>
            this.rotorResource
              .sessionNew({
                ...this.contextData,
                seeds: e,
                queue: r,
                includeWaveModel: !0,
              })
              .then(
                (e) => (
                  (this.contextData.meta.session = e),
                  (this.contextData.meta.id = (0, e1.$)(e.wave.seeds)),
                  { id: i, session: this.contextData.meta.session }
                ),
              )
              .catch((e) => {
                throw new ew("Error in VibeContext", {
                  code: "E_VIBE_LOAD_CONTEXT_META",
                  cause: e,
                  data: {
                    contextId: this.contextData.meta.id,
                    sessionId: this.contextData.meta.session
                      ? this.contextData.meta.session.radioSessionId
                      : "",
                  },
                });
              }),
          );
        }
        getContextEntitiesData() {
          let {
              meta: { session: e },
            } = this.contextData,
            t = { from: this.from, utmLink: this.utmLink };
          if (e) {
            let { sequence: a } = e;
            return Promise.resolve(eX(a, t));
          }
          return this.loadContextMeta()
            .then((e) => {
              let {
                session: { sequence: a },
              } = e;
              return eX(a, t);
            })
            .catch((e) => {
              throw new ew("Error in VibeContext", {
                code: "E_VIBE_GET_CONTEXT_ENTITIES_DATA",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        formatContextError(e, t, a, i) {
          return i
            ? new ew(e, {
                code: t,
                cause: a,
                data: {
                  contextId: i.meta.id,
                  sessionId: i.meta.session
                    ? i.meta.session.radioSessionId
                    : "",
                },
              })
            : new ew(e, { code: t, cause: a });
        }
        storeFeedbacksForSending(e) {
          if (e) {
            let t = Array.isArray(e) ? e : [e];
            this.feedbackForSending.push(...t);
          }
        }
        getFeedbacksForSending() {
          var e;
          if (
            !(null === (e = this.variables) || void 0 === e
              ? void 0
              : e.sendFeedbackToSessionTracks)
          )
            return null;
          let t = this.feedbackForSending;
          return (this.feedbackForSending = []), t;
        }
        sendFeedbackOnMoveForward(e, t) {
          var a;
          let i;
          return (
            (
              null === (a = this.variables) || void 0 === a
                ? void 0
                : a.sendFeedbackToSessionTracks
            )
              ? ((i = Promise.resolve()),
                this.storeFeedbacksForSending(
                  this.generateFeedbackForTracks(e.state.queueState, t),
                ))
              : (i = this.sendFeedback(
                  e.state.playerState,
                  e.state.queueState,
                  t,
                )),
            i
          );
        }
        onAutoMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, eK.C.TRACK_FINISHED).then(
            () => {
              let { index: t, entityList: a } = e.state.queueState,
                i = t.value === a.value.length - 2,
                r = t.value === a.value.length - 1;
              if (!i && !r) return Promise.resolve();
              let n = this.getNextSessionTracks(e)
                .then((t) => {
                  e.injectLast(t),
                    (this.availableActions.moveForward.value = !0);
                })
                .catch((e) =>
                  this.logger.error(
                    this.formatContextError(
                      "Error in VibeContext",
                      "E_GET_SESSION_TRACKS",
                      e,
                      this.contextData,
                    ),
                  ),
                );
              return i ? Promise.resolve() : n;
            },
          );
        }
        onMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, eK.C.SKIP).then(() => {
            let { index: t, entityList: a } = e.state.queueState,
              i = [];
            for (let e = t.value + 2; e < a.value.length; e++) i.push(e);
            e.remove(i, !0);
            let r = this.getNextSessionTracks(e)
              .then((t) => e.injectLast(t))
              .catch((e) =>
                this.logger.error(
                  this.formatContextError(
                    "Error in VibeContext",
                    "E_GET_SESSION_TRACKS",
                    e,
                    this.contextData,
                  ),
                ),
              );
            return t.value === a.value.length - 1 ? r : Promise.resolve();
          });
        }
        onSetIndex(e, t) {
          let a = e.getEntityByIndex({ index: t });
          if (!a) return Promise.resolve();
          let { entity: i } = a;
          return i.hasPlayId()
            ? Promise.resolve()
            : this.sendFeedbackOnMoveForward(e, eK.C.SKIP).then(() => {
                let { index: t, entityList: a } = e.state.queueState,
                  i = [];
                for (let e = t.value + 2; e < a.value.length; e++) i.push(e);
                return (
                  e.remove(i, !0),
                  this.getNextSessionTracks(e)
                    .then((t) => e.injectLast(t))
                    .catch((e) =>
                      this.logger.error(
                        this.formatContextError(
                          "Error in VibeContext",
                          "E_GET_SESSION_TRACKS",
                          e,
                          this.contextData,
                        ),
                      ),
                    ),
                  Promise.resolve()
                );
              });
        }
        getNextSessionTracks(e) {
          if (!this.contextData.meta.session)
            return Promise.reject(
              this.formatContextError(
                "Error in VibeContext",
                "E_NO_SESSION",
                void 0,
              ),
            );
          let {
              meta: { session: t },
              aliceExperiments: a,
              djData: i,
              useIchwill: r,
            } = this.contextData,
            n = { from: this.from, utmLink: this.utmLink },
            s = eZ(
              e.state.queueState.entityList.value,
              e.state.queueState.index.value,
            ),
            o = this.getFeedbacksForSending();
          return this.rotorResource
            .sessionTracks({
              radioSessionId: t.radioSessionId,
              queue: s,
              aliceExperiments: a,
              djData: i,
              useIchwill: r,
              feedbacks: o || void 0,
            })
            .then((e) => {
              this.contextData.meta.sessionTracks = e;
              let { sequence: t } = e;
              return eX(t, n);
            })
            .catch(
              (e) => (this.storeFeedbacksForSending(o), Promise.reject(e)),
            );
        }
        generateFeedbackForTracks(e, t) {
          let a = this.generateFeedback(e, t),
            i = null;
          if (a) {
            var r;
            i = { batchId: a.batchId, from: a.event.from, event: a.event };
            let n =
              null === (r = e.currentEntity.value) || void 0 === r
                ? void 0
                : r.entity.data.meta;
            if (t === eK.C.TRACK_FINISHED && e0(n)) {
              let e = n.durationMs / 1e3,
                t = e % 1 == 0 ? e : Number(e.toFixed(3));
              i.event.trackLengthSeconds = t;
            }
          }
          return i;
        }
        generateFeedback(e, t) {
          let a = null;
          if (!this.contextData.meta.session) return a;
          let {
              meta: { session: i, sessionTracks: r },
            } = this.contextData,
            n = (function (e, t, a) {
              let i = e.currentEntity.value,
                r = { timestamp: e$(), type: t, from: a };
              if (i) {
                let { entity: e } = i;
                (r.trackId = eQ(e)),
                  (r.totalPlayedSeconds = e.totalPlayedSeconds);
              }
              return r;
            })(e, t, this.from),
            { radioSessionId: s } = i,
            o = r ? r.batchId : i.batchId;
          switch (t) {
            case eK.C.RADIO_STARTED:
              a = {
                batchId: o,
                radioSessionId: s,
                event: { type: t, timestamp: n.timestamp, from: n.from },
              };
              break;
            case eK.C.TRACK_STARTED:
            case eK.C.TRACK_FINISHED:
            case eK.C.SKIP:
            case eK.C.LIKE:
            case eK.C.UNLIKE:
            case eK.C.DISLIKE:
            case eK.C.UNDISLIKE:
              a = { batchId: o, radioSessionId: s, event: n };
          }
          return a;
        }
        sendFeedback(e, t, a) {
          let i = this.generateFeedback(t, a);
          return this.contextData.meta.session && i
            ? this.rotorResource
                .sessionFeedback(i)
                .then(() => Promise.resolve())
                .catch((e) => {
                  this.logger.error(new e5("Feedback error", { cause: e }));
                })
            : (this.logger.error(new e5("Feedback error")), Promise.resolve());
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "rotorResource", void 0),
            (0, $._)(this, "logger", void 0),
            (0, $._)(this, "feedbackForSending", []),
            (0, $._)(this, "isVibeStarted", !1),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: a,
            httpClient: i,
            logger: r,
            variables: n,
          } = e;
          (this.rotorResource = new eJ.U(i, a)),
            (this.logger = r),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.variables = n);
        }
      }
      var e3 = a(74354);
      class e2 extends eO {
        getContextId() {
          var e, t;
          let a =
            null === (t = this.contextData.meta.albums) || void 0 === t
              ? void 0
              : null === (e = t[0]) || void 0 === e
                ? void 0
                : e.id;
          return a
            ? "".concat(this.contextData.meta.id, ":").concat(a)
            : String(this.contextData.meta.id);
        }
        loadTrailer() {
          return this.tracksResource
            .getTrailer({ trackId: this.getContextId() })
            .then((e) => ((this.contextData.meta = e.track), e))
            .catch((e) => {
              throw new ew("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.getContextId();
          return this.tracksResource
            .getTracksMeta({ trackIds: [e], withProgress: !0 })
            .then((t) => {
              let a = t[0];
              if (a) return (this.contextData.meta = a), a;
              throw new ew("Error in VariousContext. Track not found", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                data: { contextId: e },
              });
            })
            .catch((t) => {
              throw new ew("Error in VariousContext", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                cause: t,
                data: { contextId: e },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          return this.contextData.trailer
            ? this.loadTrailer().then((t) => [
                { meta: t.track, type: eS.A.SmartPreview, additional: e },
              ])
            : this.contextData.meta
              ? Promise.resolve([
                  {
                    meta: this.contextData.meta,
                    type: eS.A.Unknown,
                    additional: e,
                  },
                ])
              : this.loadContextMeta().then((t) => [
                  { meta: t, type: eS.A.Unknown, additional: e },
                ]);
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "tracksResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            tracksResourceConfig: a,
            httpClient: i,
            variables: r,
          } = e;
          (this.tracksResource = new e3.H(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = r);
        }
      }
      class e6 extends eT.y {
        constructor(e, { code: t = "E_CONTEXT_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "ContextFactoryException"),
            Object.setPrototypeOf(this, e6.prototype);
        }
      }
      ((r = T || (T = {})).StreamPause = "streamPause"),
        (r.StreamPlay = "streamPlay");
      let e4 = (e) => [{ type: eS.A.Generative, meta: e }],
        e7 = "E_GENERATIVE_RESTART_LIMIT";
      class e8 extends eO {
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.playerState.status.onChange((e) => {
            this.isCurrentContext &&
              e &&
              (e === eE.Xz.PLAYING
                ? (this.isPaused && this.sendFeedback(T.StreamPlay, a),
                  (this.isPaused = !1))
                : e === eE.Xz.PAUSED &&
                  (this.sendFeedback(T.StreamPause, a), (this.isPaused = !0)));
          }),
            t.afterError.tap("GenerativeContext", (e) => {
              (e && e instanceof ew && e.code === e7) ||
                !this.isCurrentContext ||
                this.restart(a);
            });
        }
        loadContextMeta() {
          return this.rotorResource
            .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = {
                id: String(this.contextData.meta.id),
                stream: e.stream,
                ...e.data,
              };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ew("Error GenerativeContext", {
                code: "E_GENERATIVE_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          var e;
          return (
            null === (e = this.contextData.meta.stream) || void 0 === e
              ? void 0
              : e.id
          )
            ? Promise.resolve(e4(this.contextData.meta))
            : this.loadContextMeta().then((e) => Promise.resolve(e4(e)));
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        sendFeedback(e, t) {
          var a;
          this.rotorResource
            .stationFeedback({
              type: e,
              stationId: String(this.contextData.meta.id),
              streamId: String(
                null === (a = this.contextData.meta.stream) || void 0 === a
                  ? void 0
                  : a.id,
              ),
              timestamp: e$(),
            })
            .then((e) => {
              e.reload_stream && this.restart(t);
            });
        }
        restart(e) {
          return (
            this.restartsCount >= 5 &&
              e.hooks.afterError.promise(
                new ew("Error GenerativeContext", {
                  code: e7,
                  data: { contextId: this.contextData.meta.id },
                }),
              ),
            this.restartsCount++,
            this.loadContextMeta().then(() =>
              e.restartContext({
                playAfterRestart: !this.isPaused,
                entitiesData: e4(this.contextData.meta),
              }),
            )
          );
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "rotorResource", void 0),
            (0, $._)(this, "isPaused", !1),
            (0, $._)(this, "restartsCount", 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: a,
            httpClient: i,
            variables: r,
          } = e;
          (this.rotorResource = new eJ.U(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.availableActions.moveBackward.value = !1),
            (this.availableActions.moveForward.value = !1),
            (this.variables = r);
        }
      }
      class te {
        create(e) {
          let t = null,
            { data: a } = e;
          try {
            var i, r, n, s, o, l, u, d, c, h, m, g;
            switch (a.type) {
              case eR.A.Album:
                t = new ej({
                  data: a,
                  albumResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (i = this.config.resourceTimeoutsConfig) ||
                      void 0 === i
                        ? void 0
                        : i.albumsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (r = this.config.contextVariables) || void 0 === r
                      ? void 0
                      : r[eR.A.Album],
                });
                break;
              case eR.A.Playlist:
                t = new eW({
                  data: a,
                  usersResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (n = this.config.resourceTimeoutsConfig) ||
                      void 0 === n
                        ? void 0
                        : n.usersResource,
                  },
                  playlistResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (s = this.config.resourceTimeoutsConfig) ||
                      void 0 === s
                        ? void 0
                        : s.playlistResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (o = this.config.contextVariables) || void 0 === o
                      ? void 0
                      : o[eR.A.Playlist],
                });
                break;
              case eR.A.Artist:
                t = new eH({
                  data: a,
                  artistsResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (l = this.config.resourceTimeoutsConfig) ||
                      void 0 === l
                        ? void 0
                        : l.artistsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (u = this.config.contextVariables) || void 0 === u
                      ? void 0
                      : u[eR.A.Artist],
                });
                break;
              case eR.A.Vibe:
                t = new e9({
                  data: a,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (d = this.config.resourceTimeoutsConfig) ||
                      void 0 === d
                        ? void 0
                        : d.rotorResource,
                  },
                  httpClient: this.httpClient,
                  logger: this.logger,
                  variables:
                    null === (c = this.config.contextVariables) || void 0 === c
                      ? void 0
                      : c[eR.A.Vibe],
                });
                break;
              case eR.A.Various:
                t = new e2({
                  data: a,
                  tracksResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (h = this.config.resourceTimeoutsConfig) ||
                      void 0 === h
                        ? void 0
                        : h.tracksResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (m = this.config.contextVariables) || void 0 === m
                      ? void 0
                      : m[eR.A.Various],
                });
                break;
              case eR.A.Generative:
                t = new e8({
                  data: a,
                  httpClient: this.httpClient,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                  },
                  variables:
                    null === (g = this.config.contextVariables) || void 0 === g
                      ? void 0
                      : g[eR.A.Generative],
                });
            }
          } catch (e) {
            throw new e6("Error while creating context", {
              cause: e,
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new e6("Cannot create context with nonexistent type", {
            code: "E_NONEXISTENT_CONTEXT_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (0, $._)(this, "logger", void 0);
          let { config: t, httpClient: a, logger: i } = e;
          (this.config = t), (this.httpClient = a), (this.logger = i);
        }
      }
      var tt = a(98);
      class ta {
        canBePlayed(e) {
          let t =
              "playDisliked" in this.context.data &&
              void 0 !== this.context.data.playDisliked &&
              this.context.data.playDisliked,
            { entityChangeMethod: a, index: i } = e,
            r =
              !(
                t ||
                a === eE.Zp.SET_INDEX ||
                (a === eE.Zp.PLAY_CONTEXT && void 0 !== i)
              ) && this.entity.isDisliked,
            n = this.entity.isAvailable;
          return (!r || (0, tt.x)(this.context)) && n;
        }
        constructor(e, t) {
          (0, $._)(this, "context", void 0),
            (0, $._)(this, "entity", void 0),
            (this.context = e),
            (this.entity = t);
        }
      }
      class ti {
        createContext(e) {
          return this.contextFactory.create(e);
        }
        createEntity(e) {
          return this.entityFactory.create(e);
        }
        createContextEntityPair(e, t) {
          return new ta(e, t);
        }
        constructor(e) {
          (0, $._)(this, "entityFactory", void 0),
            (0, $._)(this, "contextFactory", void 0),
            (this.entityFactory = new eL(e.entityFactoryParams)),
            (this.contextFactory = new te(e.contextFactoryParams));
        }
      }
      var tr = a(27257);
      ((n = I || (I = {})).SUSPENDED = "suspended"),
        (n.RUNNING = "running"),
        (n.CLOSED = "closed");
      class tn {
        getAverageFrequencies(e) {
          var t, a;
          let { low: i, high: r } = e,
            n = Math.floor(
              i / (this.audioContext.sampleRate / this.bufferLength),
            ),
            s = Math.floor(
              r / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let o = 0,
            l = 0;
          for (let e = n; e <= s; e++)
            (o +=
              (null !== (a = this.spectrum[e]) && void 0 !== a ? a : 0) / 256),
              l++;
          return o / l;
        }
        constructor(e, t, a) {
          var i, r;
          (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "analyserNode", void 0),
            (0, $._)(this, "bufferLength", 0),
            (0, $._)(this, "spectrum", new Uint8Array()),
            (this.audioContext = e),
            (this.analyserNode = e.createAnalyser()),
            (this.analyserNode.fftSize =
              null !== (i = null == a ? void 0 : a.fftSize) && void 0 !== i
                ? i
                : 1024), // FFT или же Быстрое Преобразование Фурье работает таким образом что чем меньше размер выборки, то тем меньшую ценность несёт результат преобразований.
            (this.analyserNode.smoothingTimeConstant = // Выборки не усредняют диапазон частот. При ванильной выборке в 32 результат можно считать случайным. По этому поднимаю до 1024. Наглядно можно увидеть тут https://audiomotion.dev/demo/fluid.html
              null !== (r = null == a ? void 0 : a.smoothingTimeConstant) &&
              void 0 !== r
                ? r
                : 0.4), // Ванильное сглаживание в 0.9 слишком затормаживает данные в результате. Они потом всё равно усредняются до 3 параметров (низкие средние и высокие частоты).
            t.connect(this.analyserNode), // Так что это значение можно снизить. Это даст более своевременную реакцию на изменения в спектрограмме трека.
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength));
        }
      }
      ((s = k || (k = {})).IDLE = "IDLE"),
        (s.ENABLED = "ENABLED"),
        (s.DISABLED = "DISABLED"),
        ((o = D || (D = {})).HIGHSHELF = "highshelf"),
        (o.PEAKING = "peaking"),
        (o.LOWSHELF = "lowshelf");
      class ts {
        get lastBand() {
          return this.bands[this.bands.length - 1];
        }
        createBand(e, t, a) {
          let i = this.audioContext.createBiquadFilter();
          return (
            (i.type = e),
            (i.frequency.value = t),
            (i.Q.value = 1),
            a && i.gain.setValueAtTime(a, this.audioContext.currentTime + 0.3),
            i
          );
        }
        createBandsByFrequencies(e) {
          return e.map((t, a) => {
            let { key: i, value: r } = t;
            return this.createBand(this.getBiquadFilterType(a, e.length), i, r);
          });
        }
        connectBandsBetween(e) {
          let t = this.preamp;
          return (
            e.forEach((e) => {
              t.connect(e), (t = e);
            }),
            e
          );
        }
        getBiquadFilterType(e, t) {
          return 0 === e ? D.LOWSHELF : e === t - 1 ? D.HIGHSHELF : D.PEAKING;
        }
        updateBands(e, t) {
          e.forEach((e, a) => {
            let i = t[a];
            i &&
              e.gain.setValueAtTime(
                i.value,
                this.audioContext.currentTime + 0.3,
              );
          });
        }
        setPreamp(e) {
          this.preamp.gain.linearRampToValueAtTime(
            e,
            this.audioContext.currentTime + 0.3,
          );
        }
        enable() {
          this.state !== k.ENABLED &&
            (this.sourceNode.disconnect(),
            (this.state = k.ENABLED),
            this.sourceNode.connect(this.preamp),
            this.lastBand &&
              this.lastBand.connect(this.audioContext.destination));
        }
        disable() {
          this.state !== k.DISABLED &&
            (this.sourceNode.disconnect(),
            this.lastBand && this.lastBand.disconnect(),
            (this.state = k.DISABLED),
            this.sourceNode.connect(this.audioContext.destination));
        }
        applyPreset(e) {
          this.setPreamp(e.preamp),
            0 === this.bands.length
              ? (this.bands = this.connectBandsBetween(
                  this.createBandsByFrequencies(e.frequencies),
                ))
              : this.updateBands(this.bands, e.frequencies);
        }
        constructor(e, t, a) {
          (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "preamp", void 0),
            (0, $._)(this, "state", k.DISABLED),
            (0, $._)(this, "bands", []),
            (this.audioContext = e),
            (this.sourceNode = t),
            (this.preamp = this.audioContext.createGain()),
            (null == a ? void 0 : a.preset) && this.applyPreset(a.preset);
        }
      }
      ((l = L || (L = {})).IDLE = "IDLE"),
        (l.ENABLED = "ENABLED"),
        (l.DISABLED = "DISABLED");
      let to = 1e3 / 60;
      class tl {
        updateGain() {
          if (this.state !== L.ENABLED) return;
          let e = this.audioElement.currentTime,
            t = e >= this.inStart && e <= this.inStop,
            a = e >= this.outStart && e <= this.outStop;
          if (t) {
            let t = this.getFadeInVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          if (a) {
            let t = this.getFadeOutVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          e > this.inStop &&
            e < this.outStart &&
            this.gainNode.gain.setValueAtTime(1, this.audioContext.currentTime),
            e > this.outStop &&
              this.gainNode.gain.setValueAtTime(
                0,
                this.audioContext.currentTime,
              );
        }
        getFadeInVolume(e) {
          return Math.min(e / (this.inStop - this.inStart), 1);
        }
        getFadeOutVolume(e) {
          let t = this.outStop - this.outStart;
          return Math.max(1 - (e - this.outStart) / t, 0);
        }
        enable() {
          (this.state = L.ENABLED),
            this.intervalId ||
              (this.intervalId = setInterval(this.updateGain.bind(this), to));
        }
        disable() {
          (this.state = L.DISABLED),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
        apply(e) {
          if (!e) {
            this.disable(), (this.gainNode.gain.value = 1);
            return;
          }
          this.gainNode.gain.value = 0;
          let { inStart: t, inStop: a, outStart: i, outStop: r } = e;
          (this.inStart = t),
            (this.inStop = a),
            (this.outStart = i),
            (this.outStop = r),
            this.enable();
        }
        constructor({ audioElement: e, audioContext: t, sourceNode: a }) {
          (0, $._)(this, "audioElement", void 0),
            (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "gainNode", void 0),
            (0, $._)(this, "state", L.IDLE),
            (0, $._)(this, "inStart", 0),
            (0, $._)(this, "inStop", 0),
            (0, $._)(this, "outStart", 0),
            (0, $._)(this, "outStop", 0),
            (0, $._)(this, "intervalId", null),
            (this.audioElement = e),
            (this.audioContext = t),
            (this.sourceNode = a),
            (this.gainNode = t.createGain()),
            this.sourceNode.connect(this.gainNode),
            this.gainNode.connect(this.audioContext.destination);
        }
      }
      class tu {
        apply(e) {
          this.durationMs = e;
        }
        constructor({ playback: e }) {
          (0, $._)(this, "playback", null),
            (0, $._)(this, "durationMs", void 0),
            (this.playback = e),
            this.playback.state.playerState.progress.onChange((e) => {
              var t, a;
              let i =
                  (null !== (t = this.durationMs) && void 0 !== t ? t : 0) /
                  1e3,
                r = e && Math.abs(e.duration - i) > 1;
              e &&
                e.position > i &&
                r &&
                (null === (a = this.playback) ||
                  void 0 === a ||
                  a.moveForward());
            });
        }
      }
      class td {
        get isAudioContextRequired() {
          return (
            !!this.options.useEqualizer ||
            !!this.options.useAnalyser ||
            !!this.options.useFade
          );
        }
        checkAndResumeAudioContext() {
          var e;
          let t = () => {
            var e;
            null === (e = this.audioContext) ||
              void 0 === e ||
              e.resume().then(() => {
                document.body.removeEventListener("touchend", t, !0),
                  document.body.removeEventListener("click", t, !0),
                  document.body.removeEventListener("keydown", t, !0);
              });
          };
          (null === (e = this.audioContext) || void 0 === e
            ? void 0
            : e.state) === I.SUSPENDED &&
            (document.body.addEventListener("touchend", t, !0),
            document.body.addEventListener("click", t, !0),
            document.body.addEventListener("keydown", t, !0));
        }
        initializeContext(e, t) {
          if (((this.audioElement = e), this.isAudioContextRequired)) {
            if (
              ((this.audioContext = new AudioContext()),
              (this.sourceNode = this.audioContext.createMediaElementSource(
                this.audioElement,
              )),
              this.checkAndResumeAudioContext(),
              this.options.useAnalyser)
            ) {
              let e =
                "object" == typeof this.options.useAnalyser
                  ? this.options.useAnalyser
                  : void 0;
              this.analyser = new tn(this.audioContext, this.sourceNode, e);
            }
            if (this.options.useEqualizer) {
              let e =
                "object" == typeof this.options.useEqualizer
                  ? this.options.useEqualizer
                  : void 0;
              this.equalizer = new ts(this.audioContext, this.sourceNode, e);
            }
            this.options.useFade &&
              (this.fade = new tl({
                audioElement: this.audioElement,
                audioContext: this.audioContext,
                sourceNode: this.sourceNode,
              }));
          }
          this.options.useSmartPreview &&
            (this.smartPreview = new tu({ playback: t }));
        }
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.mediaPlayersStore.onChange((e) => {
            if (void 0 === e) return;
            let t = e[eb.z.AUDIO];
            void 0 !== t &&
              void 0 === this.audioContext &&
              this.initializeContext(t.source, a);
          }),
            a.state.playerState.event.onChange(() => {
              if (this.fade)
                switch (a.state.playerState.event.value) {
                  case eE.KX.PLAYING:
                    this.fade.enable();
                    break;
                  case eE.KX.PAUSED:
                  case eE.KX.STOP:
                    this.fade.disable();
                }
            }),
            t.beforeMediaStartPlaying.tapPromise("WebAudioPlugin", () => {
              var e, t, i;
              let r, n;
              let { currentEntity: s } = a.state.queueState,
                o = null === (e = s.value) || void 0 === e ? void 0 : e.entity;
              return (
                (0, tr.Y)(o) &&
                  ((r =
                    null === (t = o.data.meta.smartPreviewParams) ||
                    void 0 === t
                      ? void 0
                      : t.fade),
                  (n =
                    null === (i = o.data.meta.smartPreviewParams) ||
                    void 0 === i
                      ? void 0
                      : i.durationMs)),
                (null == o ? void 0 : o.data.type) === eS.A.Music &&
                  ((r = o.data.meta.fade), (n = o.data.meta.durationMs)),
                this.fade && this.fade.apply(r),
                this.smartPreview && this.smartPreview.apply(n),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, $._)(this, "options", void 0),
            (0, $._)(this, "audioElement", void 0),
            (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "analyser", void 0),
            (0, $._)(this, "equalizer", void 0),
            (0, $._)(this, "fade", void 0),
            (0, $._)(this, "smartPreview", void 0),
            (this.options = e);
        }
      }
      var tc = a(10231),
        th = { WEB: "WEB", ANDROID: "ANDROID", IOS: "IOS", WEB_TV: "WEB_TV" },
        tm = { NONE: "NONE", ONE: "ONE", ALL: "ALL" },
        tg = { DO_NOT_INTERCEPT_BY_DEFAULT: "DO_NOT_INTERCEPT_BY_DEFAULT" },
        tp = { TRACK: "TRACK", INFINITE: "INFINITE" },
        ty = "BASED_ON_ENTITY_BY_DEFAULT",
        tv = {
          ARTIST: "ARTIST",
          PLAYLIST: "PLAYLIST",
          ALBUM: "ALBUM",
          RADIO: "RADIO",
          VARIOUS: "VARIOUS",
          GENERATIVE: "GENERATIVE",
        },
        tE = function (e, t) {
          return {
            device_id: e,
            version: Math.floor(0x7fffffffffffffff * Math.random()) + 0,
            timestamp_ms: void 0 !== t ? t : Date.now(),
          };
        };
      function tf(e) {
        var t = tE(e, 0);
        return {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: tv.VARIOUS,
              playable_list: [],
              options: { repeat_mode: tm.NONE },
              shuffle_optional: null,
              entity_context: ty,
              version: t,
              from_optional: "",
              initial_entity_optional: null,
              adding_options_optional: null,
              queue: null,
            },
            status: {
              duration_ms: 0,
              paused: !0,
              playback_speed: 1,
              progress_ms: 0,
              version: t,
            },
            player_queue_inject_optional: null,
          },
          devices: [],
          active_device_id_optional: "",
        };
      }
      function tS(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function tb(e, t, a) {
        return (
          void 0 === e && (e = !1),
          !!e || !t || !a || Number(t.timestamp_ms) < Number(a.timestamp_ms)
        );
      }
      function tP(e) {
        var t = e.active_device_id_optional;
        return e.devices.find(function (e) {
          return e.info.device_id === t;
        });
      }
      var tA = (function () {
        function e(e) {
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "prevState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diff", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "options", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diffCalculators", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingStateTS", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            (this.options = e),
            (this.state = tf(e.device.device_id)),
            (this.prevState = tf(e.device.device_id)),
            (this.diffCalculators = {
              active_device_id_optional:
                this.calculateActiveDeviceDiff.bind(this),
              devices: this.calculateDevicesDiff.bind(this),
              player_state: {
                player_queue: {
                  entity_id: this.calculateEntityIdDiff.bind(this),
                  entity_type: this.calculateEntityTypeDiff.bind(this),
                  entity_context: function () {},
                  current_playable_index:
                    this.calculateCurrentPlayableIndexDiff.bind(this),
                  playable_list: this.calculatePlayableListDiff.bind(this),
                  options: { repeat_mode: this.calculateRepeatDiff.bind(this) },
                  version: function () {},
                  shuffle_optional: this.calculcateShuffleDiff.bind(this),
                  from_optional: function () {},
                  initial_entity_optional: function () {},
                  adding_options_optional: function () {},
                  queue: function () {},
                },
                status: {
                  progress_ms: this.calculateProgressMsDiff.bind(this),
                  duration_ms: function () {},
                  paused: this.calculatePausedDiff.bind(this),
                  playback_speed: this.calculateSpeedDiff.bind(this),
                  version: function () {},
                },
                player_queue_inject_optional: function () {},
              },
            });
        }
        return (
          Object.defineProperty(e.prototype, "setState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  (this.state[t] = e[t]);
            },
          }),
          Object.defineProperty(e.prototype, "getState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return tS(this.state);
            },
          }),
          Object.defineProperty(e.prototype, "clearPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.options.device.device_id;
              this.prevState = tf(e);
            },
          }),
          Object.defineProperty(e.prototype, "getPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return tS(this.prevState);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = [this.diffCalculators];
              this.diff = {};
              var a = this.options,
                i = a.diffWhileActiveOnly,
                r = a.device.device_id;
              try {
                var n = e.newState.active_device_id_optional,
                  s = e.skipDeviceActivityCheck,
                  o = e.isSetNewState,
                  l = this.state.active_device_id_optional;
                if (!(void 0 !== s && s) && i && r !== l && r !== n)
                  this.calculateActiveDeviceDiff(e);
                else {
                  for (; t.length > 0; )
                    for (
                      var u = t.pop(), d = 0, c = Object.keys(u);
                      d < c.length;
                      d++
                    ) {
                      var h = u[c[d]];
                      "function" == typeof h ? h(e) : t.push(h);
                    }
                  var m = Object.keys(this.diff);
                  if ((void 0 === o || o) && m.length) {
                    var g = tS(this.state);
                    m.forEach(function (t) {
                      g[t] = e.newState[t];
                    }),
                      (this.prevState = tS(this.state)),
                      (this.state = g);
                  }
                }
                return tS(this.diff);
              } catch (e) {
                return {};
              }
            },
          }),
          Object.defineProperty(e.prototype, "calculateActiveDeviceDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.active_device_id_optional;
              t !== this.state.active_device_id_optional &&
                (this.diff.active_device_id_optional = t);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDevicesDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState,
                a = e.skipVersionCompare,
                i = (function (e, t, a) {
                  if (!t || !a || t.info.device_id !== a.info.device_id)
                    return { isVolumeChanged: !1, isNewVersion: !1 };
                  var i = t.volume_info,
                    r = a.volume_info,
                    n = tb(e, i.version, r.version);
                  return {
                    isVolumeChanged:
                      i.volume !== r.volume &&
                      Math.abs(r.volume - i.volume) > 0.02,
                    isNewVersion: n,
                  };
                })(void 0 !== a && a, tP(this.state), tP(t)),
                r = i.isVolumeChanged,
                n = i.isNewVersion,
                s = (function (e, t) {
                  var a = { isAnyoneConnectionChanged: !1 };
                  if (e.length < t.length)
                    for (
                      var i = function (t) {
                          e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          }) ||
                            (a = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        r = 0;
                      r < t.length;
                      r++
                    ) {
                      var n = t[r];
                      i(n);
                    }
                  else if (e.length === t.length)
                    for (
                      var s = function (t) {
                          var i = e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          });
                          i &&
                            i.is_offline !== t.is_offline &&
                            (a = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        o = 0;
                      o < t.length;
                      o++
                    ) {
                      var n = t[o];
                      s(n);
                    }
                  return a;
                })(this.state.devices, t.devices).isAnyoneConnectionChanged;
              ((r && n) || s) && (this.diff.devices = t.devices);
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityIdDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = e.skipVersionCompare,
                i = t.entity_id,
                r = t.version,
                n = this.state.player_state.player_queue,
                s = n.entity_id;
              tb(void 0 !== a && a, n.version, r) &&
                s !== i &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_id = i));
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityTypeDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.entity_type,
                i = t.version,
                r = e.skipVersionCompare,
                n = this.state.player_state.player_queue,
                s = n.entity_type;
              tb(void 0 !== r && r, n.version, i) &&
                s !== a &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_type = a));
            },
          }),
          Object.defineProperty(
            e.prototype,
            "calculateCurrentPlayableIndexDiff",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  a = e.skipVersionCompare,
                  i = t.entity_id,
                  r = t.current_playable_index,
                  n = t.version,
                  s = this.state.player_state.player_queue,
                  o = s.entity_id,
                  l = s.current_playable_index;
                tb(void 0 !== a && a, s.version, n) &&
                  o === i &&
                  l !== r &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.current_playable_index =
                      r));
              },
            },
          ),
          Object.defineProperty(e.prototype, "calculatePlayableListDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = e.skipVersionCompare,
                i = t.playable_list,
                r = t.version,
                n = this.state.player_state.player_queue,
                s = n.playable_list,
                o = tb(void 0 !== a && a, n.version, r),
                l = (function (e, t) {
                  var a, i;
                  if (e.length > 0 && t.length > 0 && e.length === t.length) {
                    for (var r = e.length, n = 0; n < r; n++)
                      if (
                        t[n] &&
                        (null === (a = e[n]) || void 0 === a
                          ? void 0
                          : a.playable_id) !==
                          (null === (i = t[n]) || void 0 === i
                            ? void 0
                            : i.playable_id)
                      )
                        return !1;
                    return !0;
                  }
                  return !1;
                })(s, i);
              o &&
                !l &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.playable_list = i));
            },
          }),
          Object.defineProperty(e.prototype, "calculcateShuffleDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.shuffle_optional,
                i = t.version,
                r = e.skipVersionCompare,
                n = this.state.player_state.player_queue,
                s = n.shuffle_optional,
                o = tb(void 0 !== r && r, n.version, i),
                l = (function (e, t) {
                  if (!e && !t) return !0;
                  if (
                    e &&
                    t &&
                    e.playable_indices.length === t.playable_indices.length
                  ) {
                    for (var a = !0, i = 0; i <= e.playable_indices.length; i++)
                      if (e.playable_indices[i] !== t.playable_indices[i]) {
                        a = !1;
                        break;
                      }
                    return a;
                  }
                  return !1;
                })(s, a);
              o &&
                !l &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (a
                    ? (this.diff.player_state.player_queue.shuffle_optional = a)
                    : (this.diff.player_state.player_queue.shuffle_optional = {
                        playable_indices: [],
                      })));
            },
          }),
          Object.defineProperty(e.prototype, "calculateRepeatDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.options,
                i = t.version,
                r = e.skipVersionCompare,
                n = a.repeat_mode,
                s = this.state.player_state.player_queue,
                o = s.options,
                l = s.version,
                u = o.repeat_mode;
              tb(void 0 !== r && r, l, i) &&
                u !== n &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.options = a));
            },
          }),
          Object.defineProperty(e.prototype, "calculateProgressMsDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t,
                a,
                i = e.newState.player_state.status,
                r = e.skipVersionCompare,
                n = i.progress_ms,
                s = i.version,
                o = this.state.player_state.status,
                l = o.progress_ms,
                u = tb(void 0 !== r && r, o.version, s),
                d =
                  (t = Number(n)) !== (a = Number(l)) &&
                  (a < 1500 || Math.abs(t - a) > 1e3);
              u &&
                d &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.progress_ms = n));
            },
          }),
          Object.defineProperty(e.prototype, "calculateSpeedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                a = t.playback_speed,
                i = t.version,
                r = e.skipVersionCompare,
                n = this.state.player_state.status,
                s = n.playback_speed;
              tb(void 0 !== r && r, n.version, i) &&
                s !== a &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.playback_speed = a));
            },
          }),
          Object.defineProperty(e.prototype, "calculatePausedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                a = e.skipVersionCompare,
                i = t.paused,
                r = t.version,
                n = this.state.player_state.status,
                s = n.paused;
              tb(void 0 !== a && a, n.version, r) &&
                s !== i &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.paused = i));
            },
          }),
          Object.defineProperty(e.prototype, "initPlayerState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              this.diff.player_state || (this.diff.player_state = {}),
                e &&
                  !this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue = {}),
                t &&
                  !this.diff.player_state.status &&
                  (this.diff.player_state.status = {});
            },
          }),
          Object.defineProperty(
            e.prototype,
            "updateLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t,
                  a = e.player_state,
                  i = a.player_queue.version,
                  r = a.status.version,
                  n = e.devices,
                  s = e.active_device_id_optional,
                  o = this.options.device.device_id,
                  l = [i, r],
                  u = n.find(function (e) {
                    return e.info.device_id === s;
                  });
                void 0 !== u && l.push(u.volume_info.version);
                var d = l
                  .filter(function (e) {
                    return 0 !== Number(null == e ? void 0 : e.timestamp_ms);
                  })
                  .filter(function (e) {
                    return (
                      n.find(function (t) {
                        return (
                          t.info.device_id ===
                          (null == e ? void 0 : e.device_id)
                        );
                      }) && (null == e ? void 0 : e.device_id) !== o
                    );
                  });
                if (d.length > 0) {
                  var c = d.sort(function (e, t) {
                      return (
                        Number(null == t ? void 0 : t.timestamp_ms) -
                        Number(null == e ? void 0 : e.timestamp_ms)
                      );
                    })[0],
                    h = n.find(function (e) {
                      return (
                        e.info.device_id === (null == c ? void 0 : c.device_id)
                      );
                    });
                  this.lastRemoteDeviceChangingState &&
                    h &&
                    this.lastRemoteDeviceChangingState.info.device_id ===
                      h.info.device_id &&
                    !this.lastRemoteDeviceChangingState.is_offline &&
                    h.is_offline &&
                    (this.lastRemoteDeviceChangingState = tS(h)),
                    ((void 0 === this.lastRemoteDeviceChangingState && h) ||
                      (this.lastRemoteDeviceChangingState &&
                        h &&
                        this.lastRemoteDeviceChangingState.info.device_id !==
                          h.info.device_id) ||
                      (this.lastRemoteDeviceChangingState &&
                        h &&
                        this.lastRemoteDeviceChangingState.info.device_id ===
                          h.info.device_id &&
                        this.lastRemoteDeviceChangingState.is_offline &&
                        !h.is_offline &&
                        !this.diff.devices)) &&
                      c &&
                      ((this.lastRemoteDeviceChangingState = tS(h)),
                      (this.lastRemoteDeviceChangingStateTS = Number(
                        c.timestamp_ms,
                      )),
                      (t = {
                        device: tS(h),
                        timestampMs: Number(c.timestamp_ms),
                      }));
                }
                return t;
              },
            },
          ),
          Object.defineProperty(
            e.prototype,
            "getLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return {
                  device: this.lastRemoteDeviceChangingState,
                  timestampMs: this.lastRemoteDeviceChangingStateTS,
                };
              },
            },
          ),
          Object.defineProperty(e.prototype, "getOnlineRemoteDevices", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.state,
                t = e.devices,
                a = e.active_device_id_optional;
              return t.filter(function (e) {
                var t = [th.ANDROID, th.IOS, th.WEB].includes(e.info.type);
                return !e.is_offline && e.info.device_id !== a && t;
              });
            },
          }),
          e
        );
      })();
      ((u = R || (R = {})).PRODUCTION = "ynison.music.yandex.ru"),
        (u.QA = "qa.ynison.music.yandex.ru"),
        ((d = V || (V = {})).CONNECTING = "CONNECTING"),
        (d.CONNECTED = "CONNECTED"),
        (d.DISCONNECTED = "DISCONNECTED"),
        (d.WAITING_FOR_RECONNECT = "WAITING_FOR_RECONNECT"),
        (d.READY_TO_RECONNECT = "READY_TO_RECONNECT"),
        ((c = x || (x = {})).RECIEVE_MESSAGE = "RECIEVE_MESSAGE"),
        (c.REDIRECTOR_ERROR = "REDIRECTOR_ERROR"),
        (c.HUB_ERROR = "HUB_ERROR");
      var t_ = a(62474);
      ((h = G || (G = {})).ynisonBackoffMillis = "ynison-backoff-millis"),
        (h.ynisonErrorCode = "ynison-error-code"),
        (h.ynisonGoAwayForSeconds = "ynison-go-away-for-seconds");
      var tN = a(79701),
        tC =
          ((m = function (e, t) {
            return (m =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function a() {
              this.constructor = e;
            }
            m(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((a.prototype = t.prototype), new a()));
          }),
        tT = function () {
          return (tT =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        tI = function (e, t) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (a[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, i = Object.getOwnPropertySymbols(e);
              r < i.length;
              r++
            )
              0 > t.indexOf(i[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (a[i[r]] = e[i[r]]);
          return a;
        },
        tk = (function (e) {
          function t(a, i) {
            void 0 === i && (i = {});
            var r = this,
              n = i.code,
              s = tI(i, ["code"]);
            return (
              Object.defineProperty(
                (r =
                  e.call(
                    this,
                    a,
                    tT({ code: void 0 === n ? "E_HUB_EXCEPTION" : n }, s),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "HubException",
                },
              ),
              Object.setPrototypeOf(r, t.prototype),
              r
            );
          }
          return tC(t, e), t;
        })(tN.y),
        tD = a(5884),
        tL = function (e) {
          Object.defineProperty(this, "redirectorResponse", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "connectionState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.redirectorResponse = new tD.wi(e.redirectorResponse)),
            (this.connectionState = new tD.wi(e.connectionState));
        },
        tR =
          ((g = function (e, t) {
            return (g =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function a() {
              this.constructor = e;
            }
            g(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((a.prototype = t.prototype), new a()));
          }),
        tV = function () {
          return (tV =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        tx = function (e, t) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (a[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, i = Object.getOwnPropertySymbols(e);
              r < i.length;
              r++
            )
              0 > t.indexOf(i[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (a[i[r]] = e[i[r]]);
          return a;
        },
        tG = (function (e) {
          function t(a, i) {
            void 0 === i && (i = {});
            var r = this,
              n = i.code,
              s = tx(i, ["code"]);
            return (
              Object.defineProperty(
                (r =
                  e.call(
                    this,
                    a,
                    tV(
                      { code: void 0 === n ? "E_REDIRECTOR_EXCEPTION" : n },
                      s,
                    ),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "RedirectorException",
                },
              ),
              Object.setPrototypeOf(r, t.prototype),
              r
            );
          }
          return tR(t, e), t;
        })(tN.y);
      function tO(e) {
        var t;
        switch (e) {
          case th.WEB:
            t = 1;
            break;
          case th.WEB_TV:
            t = 5;
            break;
          default:
            t = 1;
        }
        return t;
      }
      function tw(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((p = O || (O = {})).ynisonDeviceId = "Ynison-Device-Id"),
        (p.ynisonRedirectTicket = "Ynison-Redirect-Ticket"),
        (p.ynisonSessionId = "Ynison-Session-Id"),
        (p.ynisonDeviceInfo = "Ynison-Device-Info");
      var tM = function (e, t) {
          var a,
            i,
            r,
            n,
            s = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (n = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (n[Symbol.iterator] = function () {
                return this;
              }),
            n
          );
          function o(o) {
            return function (l) {
              return (function (o) {
                if (a) throw TypeError("Generator is already executing.");
                for (; n && ((n = 0), o[0] && (s = 0)), s; )
                  try {
                    if (
                      ((a = 1),
                      i &&
                        (r =
                          2 & o[0]
                            ? i.return
                            : o[0]
                              ? i.throw || ((r = i.return) && r.call(i), 0)
                              : i.next) &&
                        !(r = r.call(i, o[1])).done)
                    )
                      return r;
                    switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < r[1]) {
                          (s.label = r[1]), (r = o);
                          break;
                        }
                        if (r && s.label < r[2]) {
                          (s.label = r[2]), s.ops.push(o);
                          break;
                        }
                        r[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (i = 0);
                  } finally {
                    a = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        tj = (function () {
          function e(e) {
            Object.defineProperty(this, "device", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "connectionConfig", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.device = e.device),
              (this.connectionConfig = e.connectionConfig);
          }
          return (
            Object.defineProperty(e.prototype, "getHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t, a, i, r;
                return (
                  (t = this),
                  (a = void 0),
                  (i = void 0),
                  (r = function () {
                    var t = this;
                    return tM(this, function (a) {
                      return [
                        2,
                        new Promise(function (a, i) {
                          var r,
                            n,
                            s,
                            o,
                            l,
                            u,
                            d = e.oauth,
                            c =
                              ((s = (r = t.device).device_id),
                              (o = r.app_name),
                              (l = r.app_version),
                              (u = tO(r.type)),
                              ((n = {})[O.ynisonDeviceId] = s),
                              (n[O.ynisonDeviceInfo] = JSON.stringify({
                                app_name: o,
                                app_version: l,
                                type: u,
                              })),
                              n);
                          void 0 !== d &&
                            (c.authorization = "OAuth ".concat(d));
                          var h = new WebSocket(
                              Object.values(t.connectionConfig).join(""),
                              [
                                "Bearer",
                                "v2",
                                encodeURIComponent(JSON.stringify(c)),
                              ],
                            ),
                            m = function (e) {
                              try {
                                var t = JSON.parse(e.data);
                                "error" in t
                                  ? (h.close(),
                                    i(
                                      new tG("Error message from redirector", {
                                        data: { redirectorResponse: t.error },
                                      }),
                                    ))
                                  : (h.close(), a(t));
                              } catch (e) {
                                new tG(
                                  "Error while processing message from redirector",
                                  {
                                    data: { redirectorResponse: {} },
                                    cause: tw(e),
                                  },
                                );
                              }
                            },
                            g = function () {
                              i(
                                new tG("Error in connection to redirector", {
                                  data: { redirectorResponse: {} },
                                }),
                              );
                            },
                            p = function () {
                              h.removeEventListener("message", m),
                                h.removeEventListener("error", g),
                                h.removeEventListener("close", p);
                            };
                          h.addEventListener("message", m),
                            h.addEventListener("error", g),
                            h.addEventListener("close", p);
                        }),
                      ];
                    });
                  }),
                  new (i || (i = Promise))(function (e, n) {
                    function s(e) {
                      try {
                        l(r.next(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function o(e) {
                      try {
                        l(r.throw(e));
                      } catch (e) {
                        n(e);
                      }
                    }
                    function l(t) {
                      var a;
                      t.done
                        ? e(t.value)
                        : ((a = t.value) instanceof i
                            ? a
                            : new i(function (e) {
                                e(a);
                              })
                          ).then(s, o);
                    }
                    l((r = r.apply(t, a || [])).next());
                  })
                );
              },
            }),
            e
          );
        })(),
        tU = function () {
          return (tU =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        tq = function (e, t) {
          var a = (0, tc.Z)(),
            i = tU(tU({}, e), { rid: a });
          if (t) {
            var r = t.player_action_timestamp_ms,
              n = void 0 === r ? Date.now() : r,
              s = t.activity_interception_type,
              o = void 0 === s ? tg.DO_NOT_INTERCEPT_BY_DEFAULT : s;
            (i.player_action_timestamp_ms = n),
              (i.activity_interception_type = o);
          } else
            (i.player_action_timestamp_ms = Date.now()),
              (i.activity_interception_type = tg.DO_NOT_INTERCEPT_BY_DEFAULT);
          return { request: i, rid: a };
        },
        tF = function () {
          return (tF =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        tB = (function () {
          function e(e) {
            var t = this;
            Object.defineProperty(this, "connectorConfig", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "socket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "emitter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new t_.TinyEmitter(),
              }),
              Object.defineProperty(this, "redirectorSocket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "reconnectTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "reconnectAttempts", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new tL({
                  redirectorResponse: null,
                  connectionState: V.DISCONNECTED,
                }),
              }),
              (this.connectorConfig = e.config),
              (this.redirectorSocket = new tj({
                device: this.connectorConfig.device,
                connectionConfig:
                  this.connectorConfig.redirectorConnectionConfig,
              })),
              this.state.connectionState.onChange(function (e) {
                e === V.DISCONNECTED &&
                  t.socket &&
                  (t.socket.close(), (t.socket = null));
              });
          }
          return (
            Object.defineProperty(e.prototype, "config", {
              get: function () {
                return tS(this.connectorConfig);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "updateFullState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tF({}, e);
                (a.player_state.player_queue.version = tE(
                  this.connectorConfig.device.device_id,
                  0,
                )),
                  (a.player_state.status.version = tE(
                    this.connectorConfig.device.device_id,
                    0,
                  ));
                var i = tq(
                    { update_full_state: a },
                    tF({ player_action_timestamp_ms: 0 }, t),
                  ),
                  r = i.request,
                  n = i.rid;
                return this.sendRequest(r), n;
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayingStatus", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tF({}, e);
                a.playing_status.version = tE(
                  this.connectorConfig.device.device_id,
                );
                var i = tq({ update_playing_status: a }, t),
                  r = i.request,
                  n = i.rid;
                return this.sendRequest(r), n;
              },
            }),
            Object.defineProperty(e.prototype, "updateActiveDevice", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tq({ update_active_device: e }, t),
                  i = a.request,
                  r = a.rid;
                return this.sendRequest(i), r;
              },
            }),
            Object.defineProperty(e.prototype, "updateSessionParams", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tq({ update_session_params: e }, t),
                  i = a.request,
                  r = a.rid;
                return this.sendRequest(i), r;
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayerState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tF({}, e);
                (a.player_state.player_queue.version = tE(
                  this.connectorConfig.device.device_id,
                )),
                  (a.player_state.status.version = tE(
                    this.connectorConfig.device.device_id,
                  ));
                var i = tq({ update_player_state: a }, t),
                  r = i.request,
                  n = i.rid;
                return this.sendRequest(r), n;
              },
            }),
            Object.defineProperty(e.prototype, "updateVolumeInfo", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = tF({}, e);
                a.volume_info.version = tE(
                  this.connectorConfig.device.device_id,
                );
                var i = tq({ update_volume_info: a }, t),
                  r = i.request,
                  n = i.rid;
                return this.sendRequest(r), n;
              },
            }),
            Object.defineProperty(e.prototype, "connect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  a = e.oauth;
                void 0 !== a && (this.connectorConfig.oauth = a),
                  [V.DISCONNECTED, V.READY_TO_RECONNECT].includes(
                    this.state.connectionState.value,
                  ) &&
                    ((this.state.connectionState.value = V.CONNECTING),
                    this.redirectorSocket
                      .getHub({ oauth: this.connectorConfig.oauth })
                      .then(function (e) {
                        (t.state.redirectorResponse.value = e),
                          t.connectToHub();
                      })
                      .catch(function (e) {
                        if (
                          ((t.state.connectionState.value = V.DISCONNECTED),
                          !(
                            16 === e.data.redirectorResponse.grpc_code &&
                            401 === e.data.redirectorResponse.http_code
                          ) &&
                            t.reconnectAttempts <
                              t.connectorConfig.reconnectAttemptsLimit)
                        ) {
                          var a =
                            e.data.redirectorResponse.extra_headers &&
                            e.data.redirectorResponse.extra_headers[
                              G.ynisonGoAwayForSeconds
                            ]
                              ? 1e3 *
                                Number(
                                  e.data.redirectorResponse.extra_headers[
                                    G.ynisonGoAwayForSeconds
                                  ],
                                )
                              : t.connectorConfig.defaultReconnectTimeoutMS;
                          t.reconnect({ timeout: a });
                        } else
                          (t.reconnectAttempts = 0),
                            t.emitter.emit(x.REDIRECTOR_ERROR, e);
                      }));
              },
            }),
            Object.defineProperty(e.prototype, "disconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.reconnectTimeout &&
                  (clearTimeout(this.reconnectTimeout),
                  (this.reconnectTimeout = null)),
                  (this.reconnectAttempts = 0),
                  (this.state.connectionState.value = V.DISCONNECTED);
              },
            }),
            Object.defineProperty(e.prototype, "on", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.on(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "off", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.off(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "connectToHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this,
                  t = this.connectorConfig,
                  a = t.oauth,
                  i = t.device,
                  r = this.connectorConfig.hubConnectionConfig,
                  n = r.protocol,
                  s = r.path;
                if (this.state.redirectorResponse.value) {
                  var o,
                    l,
                    u,
                    d,
                    c,
                    h,
                    m,
                    g,
                    p,
                    y = this.state.redirectorResponse.value.host,
                    v =
                      ((o = this.state.redirectorResponse.value),
                      (u = i.type),
                      (d = i.app_name),
                      (c = i.app_version),
                      (h = i.device_id),
                      (m = o.session_id),
                      (g = o.redirect_ticket),
                      (p = tO(u)),
                      ((l = {})[O.ynisonDeviceId] = h),
                      (l[O.ynisonRedirectTicket] = g),
                      (l[O.ynisonSessionId] = m),
                      (l[O.ynisonDeviceInfo] = JSON.stringify({
                        app_name: d,
                        app_version: c,
                        type: p,
                      })),
                      l);
                  void 0 !== a && (v.authorization = "OAuth ".concat(a));
                  var E = "".concat(n).concat(y).concat(s),
                    f = ["Bearer", "v2", encodeURIComponent(JSON.stringify(v))];
                  (this.socket = new WebSocket(E, f)),
                    this.socket.addEventListener("message", function (t) {
                      e.onRecieveMessage(t);
                    }),
                    this.socket.addEventListener("error", function () {
                      (e.state.connectionState.value = V.DISCONNECTED),
                        e.reconnectAttempts <
                        e.connectorConfig.reconnectAttemptsLimit
                          ? e.reconnect()
                          : ((e.reconnectAttempts = 0),
                            e.emitter.emit(
                              x.HUB_ERROR,
                              new tk("Error in connection to hub", {
                                data: {
                                  redirectorResponse: e.state.redirectorResponse
                                    .value
                                    ? e.state.redirectorResponse.value
                                    : {},
                                  hubResponse: {},
                                },
                              }),
                            ));
                    }),
                    this.socket.addEventListener("open", function () {
                      e.state.connectionState.value = V.CONNECTED;
                    }),
                    this.socket.addEventListener("close", function () {
                      e.state.connectionState.value = V.DISCONNECTED;
                    });
                }
              },
            }),
            Object.defineProperty(e.prototype, "reconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                void 0 === e && (e = {});
                var a = e.timeout,
                  i =
                    void 0 === a
                      ? this.connectorConfig.defaultReconnectTimeoutMS
                      : a;
                this.state.connectionState.value === V.DISCONNECTED &&
                  ((this.reconnectAttempts += 1),
                  (this.reconnectTimeout = setTimeout(function () {
                    (t.state.connectionState.value = V.READY_TO_RECONNECT),
                      t.connect({});
                  }, i)),
                  (this.state.connectionState.value = V.WAITING_FOR_RECONNECT));
              },
            }),
            Object.defineProperty(e.prototype, "onRecieveMessage", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                try {
                  var t = JSON.parse(e.data);
                  if ("error" in t) {
                    if (
                      ((this.state.connectionState.value = V.DISCONNECTED),
                      this.reconnectAttempts <
                        this.connectorConfig.reconnectAttemptsLimit)
                    ) {
                      var a = t.error.details[G.ynisonGoAwayForSeconds]
                        ? 1e3 *
                          Number(t.error.details[G.ynisonGoAwayForSeconds])
                        : this.connectorConfig.defaultReconnectTimeoutMS;
                      this.reconnect({ timeout: a });
                    } else
                      (this.reconnectAttempts = 0),
                        this.emitter.emit(
                          x.HUB_ERROR,
                          new tk("Error message from hub", {
                            data: {
                              redirectorResponse: this.state.redirectorResponse
                                .value
                                ? this.state.redirectorResponse.value
                                : {},
                              hubResponse: t.error,
                            },
                          }),
                        );
                  } else
                    (this.reconnectAttempts = 0),
                      this.emitter.emit(x.RECIEVE_MESSAGE, { rawData: t });
                } catch (e) {
                  this.emitter.emit(
                    x.HUB_ERROR,
                    new tk("Error while processing message from hub", {
                      data: {
                        redirectorResponse: this.state.redirectorResponse.value
                          ? this.state.redirectorResponse.value
                          : {},
                        hubResponse: {},
                      },
                      cause: tw(e),
                    }),
                  );
                }
              },
            }),
            Object.defineProperty(e.prototype, "sendRequest", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                null !== this.socket &&
                  this.socket.readyState === WebSocket.OPEN &&
                  this.state.connectionState.value === V.CONNECTED &&
                  this.socket.send(JSON.stringify(e));
              },
            }),
            e
          );
        })();
      class tY extends eT.y {
        constructor(e, { code: t = "E_YNISON", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "YnisonException"),
            Object.setPrototypeOf(this, tY.prototype);
        }
      }
      let tW = (e, t) => {
        let a = t && "object" == typeof t && "cause" in t && t.cause,
          i = (t && "object" == typeof t && "data" in t && t.data) || {};
        return new tY("[YnisonException] ".concat(e), {
          cause: a,
          data: { ...i, originalError: t || "" },
        });
      };
      var tz = a(55897),
        tH = a(97635);
      class tK {
        push(e) {
          this.callbacks.push(e);
        }
        exec() {
          let e = [];
          for (let t of this.callbacks)
            if (0 === e.length) e.push(t());
            else {
              let a = e[e.length - 1].then(t);
              e.push(a);
            }
          return Promise.allSettled(e).then(() => Promise.resolve());
        }
        constructor() {
          (0, $._)(this, "callbacks", []);
        }
      }
      let tJ = (e) => {
          switch (e) {
            case tm.ONE:
              return eE.zq.ONE;
            case tm.ALL:
              return eE.zq.CONTEXT;
            default:
              return eE.zq.NONE;
          }
        },
        tX = (e) => {
          var t, a, i, r;
          let n =
              (null === (a = e.player_state) || void 0 === a
                ? void 0
                : null === (t = a.player_queue) || void 0 === t
                  ? void 0
                  : t.current_playable_index) || 0,
            s = ((null === (r = e.player_state) || void 0 === r
              ? void 0
              : null === (i = r.player_queue) || void 0 === i
                ? void 0
                : i.playable_list) || [])[n];
          return s ? { entityId: s.playable_id } : { index: 0 };
        },
        tQ = (e) => ({
          type: eE.RX.Unloaded,
          meta: { id: e.playable_id, albumId: e.album_id_optional },
        }),
        tZ = (e) =>
          e
            .filter((e) => {
              let { playable_type: t, playable_id: a } = e;
              return t === tp.TRACK && a;
            })
            .map(tQ),
        t$ = (e) => !isNaN(Number(e)) && Number(e) > 0,
        t0 = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = (null == i ? void 0 : i.playable_list) || [];
          return (
            i.from_optional ||
            (null === (a = r[0]) || void 0 === a ? void 0 : a.from) ||
            "embedded-radio"
          );
        },
        t5 = (e) => {
          var t, a, i, r;
          let n =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            s = (null == n ? void 0 : n.playable_list) || [],
            o =
              null ===
                (r =
                  s[
                    null === (i = e.player_state) || void 0 === i
                      ? void 0
                      : null === (a = i.player_queue) || void 0 === a
                        ? void 0
                        : a.current_playable_index
                  ]) || void 0 === r
                ? void 0
                : r.playable_id;
          return o && s.length
            ? { type: eR.A.Various, from: t0(e), meta: { id: o } }
            : null;
        },
        t1 = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return t$(i)
            ? { type: eR.A.Album, from: t0(e), meta: { id: i } }
            : t5(e);
        },
        t9 = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return t$(i)
            ? { type: eR.A.Artist, from: t0(e), meta: { id: i } }
            : t5(e);
        },
        t3 = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            [r, n] =
              (null == i
                ? void 0
                : null === (a = i.entity_id) || void 0 === a
                  ? void 0
                  : a.split(" ")) || [];
          return r
            ? {
                type: eR.A.Generative,
                from: t0(e),
                meta: { id: r, stream: n ? { id: r, url: n } : void 0 },
              }
            : null;
        },
        t2 = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id,
            r = t0(e),
            [n, s] = String(i).split(":");
          if (t$(n) && t$(s)) {
            let e = { uid: Number(n) };
            return {
              type: eR.A.Playlist,
              from: r,
              meta: { id: i, kind: Number(s), owner: e },
            };
          }
          return t5(e);
        },
        t6 = (e) => {
          var t, a, i, r, n, s, o;
          let l =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            u =
              (null === (i = e.player_state) || void 0 === i
                ? void 0
                : null === (a = i.player_queue) || void 0 === a
                  ? void 0
                  : a.playable_list) || [],
            d = null == l ? void 0 : l.entity_id,
            c =
              null === (o = l.queue) || void 0 === o
                ? void 0
                : null === (s = o.wave_queue) || void 0 === s
                  ? void 0
                  : null === (n = s.entity_options) || void 0 === n
                    ? void 0
                    : null === (r = n.wave_entity_optional) || void 0 === r
                      ? void 0
                      : r.session_id,
            h = u.map((e) =>
              e.album_id_optional
                ? "".concat(e.playable_id, ":").concat(e.album_id_optional)
                : e.playable_id,
            );
          return "string" == typeof d || c
            ? {
                type: eR.A.Vibe,
                from: t0(e),
                seeds: String(d).split(","),
                includeTracksInResponse: !0,
                cloneSessionId: c,
                meta: { id: d },
                queue: h,
                trackToStartFrom: h[0],
              }
            : t5(e);
        },
        t4 = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_type;
          if (!i) return null;
          switch (i) {
            case tv.ALBUM:
              return t1(e);
            case tv.ARTIST:
              return t9(e);
            case tv.PLAYLIST:
              return t2(e);
            case tv.RADIO:
              return t6(e);
            case tv.GENERATIVE:
              return t3(e);
            case tv.VARIOUS:
              return t5(e);
            default:
              return null;
          }
        };
      class t7 {
        applyYnisonDiff(e) {
          var t, a, i, r, n;
          let s = new tK();
          if (
            e.player_state &&
            e.player_state.player_queue &&
            (e.player_state.player_queue.current_playable_index ||
              e.player_state.player_queue.playable_list ||
              e.player_state.player_queue.entity_id)
          ) {
            let e = this.ynisonStateController.getState();
            s.push(() => this.changeContext(e));
          }
          if (
            null === (a = e.player_state) || void 0 === a
              ? void 0
              : null === (t = a.player_queue) || void 0 === t
                ? void 0
                : t.shuffle_optional
          ) {
            let t = e.player_state.player_queue.shuffle_optional;
            s.push(() => this.changeShuffle(t));
          }
          if (
            null === (r = e.player_state) || void 0 === r
              ? void 0
              : null === (i = r.player_queue) || void 0 === i
                ? void 0
                : i.options
          ) {
            let t = e.player_state.player_queue.options;
            s.push(() => this.changeOptions(t));
          }
          if (
            null === (n = e.player_state) || void 0 === n ? void 0 : n.status
          ) {
            let t = e.player_state.status;
            s.push(() => this.changeStatus(t));
          }
          return s.exec();
        }
        changeOptions(e) {
          let t = tJ(e.repeat_mode);
          return this.playback.setRepeatMode(t), Promise.resolve();
        }
        changeShuffle(e) {
          let t = !!(
            Array.isArray(e.playable_indices) && e.playable_indices.length
          );
          return this.playback.setShuffle(t), Promise.resolve();
        }
        changeStatus(e) {
          let t = new tK(),
            a = Number(e.playback_speed),
            i = Number(e.progress_ms) / 1e3;
          return (
            Number.isNaN(a) ||
              t.push(() =>
                this.playback.setSpeed(a).then(() => Promise.resolve()),
              ),
            Number.isNaN(i) ||
              t.push(() => {
                if (
                  this.playback.state.playerState.status.value === eE.Xz.PLAYING
                )
                  return this.playback
                    .setProgress(i)
                    .then(() => Promise.resolve());
                let {
                  currentEntity: { value: e },
                } = this.playback.state.queueState;
                return e && (e.entity.startPosition = i), Promise.resolve();
              }),
            t.exec()
          );
        }
        changeContext(e) {
          let t = this.getContextParams(e);
          return t
            ? this.playback
                .setContext(t)
                .then(() => {
                  this.playback.stop();
                })
                .catch((e) => {
                  this.playback.hooks.afterError.promise(
                    tW("PlaybackSetContextError", e),
                  );
                })
            : Promise.resolve();
        }
        getContextParams(e) {
          try {
            var t, a;
            let i = t4(e);
            if (!i) return null;
            let r = this.factory.createContext({ data: i }),
              n =
                null === (a = e.player_state) || void 0 === a
                  ? void 0
                  : null === (t = a.player_queue) || void 0 === t
                    ? void 0
                    : t.playable_list,
              s = tZ(n),
              o = tX(e);
            if ((0, tz.d)(r))
              return {
                context: r,
                entitiesData: s,
                loadContextMeta: !1,
                queueParams: o,
              };
            if ((0, tH.Q)(r)) return { context: r, loadContextMeta: !0 };
            if (200 === n.length)
              return { context: r, loadContextMeta: !0, queueParams: o };
            return {
              context: r,
              entitiesData: s.length ? s : void 0,
              loadContextMeta: !0,
              queueParams: o,
            };
          } catch (e) {
            return (
              this.playback.hooks.afterError.promise(
                tW("GetContextParamsError", e),
              ),
              null
            );
          }
        }
        constructor(e, t, a) {
          (0, $._)(this, "factory", void 0),
            (0, $._)(this, "playback", void 0),
            (0, $._)(this, "ynisonStateController", void 0),
            (this.factory = e),
            (this.playback = t),
            (this.ynisonStateController = a);
        }
      }
      let t8 = (e) => {
          var t, a, i, r, n, s, o, l, u, d;
          switch (
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.type
          ) {
            case eS.A.Music:
            case eS.A.VibeTrack:
              return (
                null === (a = e.state.currentContext.value) || void 0 === a
                  ? void 0
                  : a.data.meta.id
              )
                ? String(
                    null === (i = e.state.currentContext.value) || void 0 === i
                      ? void 0
                      : i.data.meta.id,
                  )
                : "";
            case eS.A.Generative:
              return (
                null === (r = e.state.currentContext.value) || void 0 === r
                  ? void 0
                  : r.data.meta.id
              )
                ? ""
                    .concat(
                      String(
                        null === (n = e.state.currentContext.value) ||
                          void 0 === n
                          ? void 0
                          : n.data.meta.id,
                      ),
                      " ",
                    )
                    .concat(
                      null !==
                        (l =
                          null ===
                            (o = e.state.queueState.currentEntity.value) ||
                          void 0 === o
                            ? void 0
                            : null === (s = o.entity.data.meta.stream) ||
                                void 0 === s
                              ? void 0
                              : s.url) && void 0 !== l
                        ? l
                        : "",
                    )
                : "";
            default:
              return (
                null === (u = e.state.currentContext.value) || void 0 === u
                  ? void 0
                  : u.data.meta.id
              )
                ? String(
                    null === (d = e.state.currentContext.value) || void 0 === d
                      ? void 0
                      : d.data.meta.id,
                  )
                : "";
          }
        },
        ae = (e) => {
          switch (e) {
            case eR.A.Album:
              return tv.ALBUM;
            case eR.A.Playlist:
              return tv.PLAYLIST;
            case eR.A.Artist:
              return tv.ARTIST;
            case eR.A.Vibe:
              return tv.RADIO;
            case eR.A.Various:
              return tv.VARIOUS;
            case eR.A.Generative:
              return tv.GENERATIVE;
            default:
              return tv.VARIOUS;
          }
        },
        at = (e) => {
          switch (e) {
            case eE.zq.NONE:
              return tm.NONE;
            case eE.zq.ONE:
              return tm.ONE;
            case eE.zq.CONTEXT:
              return tm.ALL;
            default:
              return tm.NONE;
          }
        },
        aa = (e) => {
          var t, a;
          return (0, tH.Q)(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.context,
          )
            ? {
                entity_id: t8(e),
                entity_type: ae(
                  null === (a = e.state.currentContext.value) || void 0 === a
                    ? void 0
                    : a.data.type,
                ),
              }
            : null;
        },
        ai = (e) => {
          var t, a;
          return (0, tt.x)(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.context,
          ) &&
            (null === (a = e.state.queueState.currentEntity.value) ||
            void 0 === a
              ? void 0
              : a.context.data.meta.session)
            ? {
                radio_options: {
                  session_id:
                    e.state.queueState.currentEntity.value.context.data.meta
                      .session.radioSessionId,
                },
              }
            : null;
        },
        ar = (e) => {
          var t, a, i;
          return e0(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.entity.data.meta,
          ) &&
            null !==
              (i =
                null === (a = e.state.queueState.currentEntity.value) ||
                void 0 === a
                  ? void 0
                  : a.entity.data.meta.durationMs) &&
            void 0 !== i
            ? i
            : 0;
        },
        an = (e) => 1e3 * Math.floor(e),
        as = (e) => {
          var t;
          let a = an(e.state.playerState.progress.value.position),
            i = ar(e);
          return (null === (t = e.state.queueState.currentEntity.value) ||
          void 0 === t
            ? void 0
            : t.context.data.type) === eR.A.Generative
            ? 0
            : a < i
              ? a
              : 0;
        },
        ao = function (e) {
          var t, a, i, r, n, s, o, l, u, d, c, h, m;
          let { entity: g } = e,
            p =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          switch (g.data.type) {
            case eS.A.Music:
              return {
                album_id_optional:
                  "number" ==
                  typeof (null === (a = g.data.meta.albums) || void 0 === a
                    ? void 0
                    : null === (t = a[0]) || void 0 === t
                      ? void 0
                      : t.id)
                    ? String(
                        null === (i = g.data.meta.albums) || void 0 === i
                          ? void 0
                          : i[0].id,
                      )
                    : null,
                from: p,
                playable_id:
                  null !== (r = g.data.meta.realId) && void 0 !== r ? r : "",
                playable_type: tp.TRACK,
                title:
                  null !== (n = g.data.meta.title) && void 0 !== n ? n : "",
                cover_url_optional:
                  null !== (s = g.data.meta.coverUri) && void 0 !== s
                    ? s
                    : null,
              };
            case eS.A.Generative:
              return {
                album_id_optional: null,
                from: p,
                playable_id: "",
                playable_type: tp.INFINITE,
                title:
                  null !== (o = g.data.meta.title) && void 0 !== o ? o : "",
                cover_url_optional: null,
              };
            case eS.A.VibeTrack:
              return {
                album_id_optional:
                  "number" ==
                  typeof (null === (u = g.data.meta.albums) || void 0 === u
                    ? void 0
                    : null === (l = u[0]) || void 0 === l
                      ? void 0
                      : l.id)
                    ? String(
                        null === (d = g.data.meta.albums) || void 0 === d
                          ? void 0
                          : d[0].id,
                      )
                    : null,
                from: p,
                playable_id:
                  null !== (c = g.data.meta.realId) && void 0 !== c ? c : "",
                playable_type: tp.TRACK,
                title:
                  null !== (h = g.data.meta.title) && void 0 !== h ? h : "",
                cover_url_optional:
                  null !== (m = g.data.meta.coverUri) && void 0 !== m
                    ? m
                    : null,
              };
            default:
              return {
                album_id_optional: null,
                from: p,
                playable_id: String(g.data.meta.id),
                playable_type: tp.TRACK,
                title: "",
                cover_url_optional: null,
              };
          }
        };
      function al(e, t, a) {
        var i, r, n;
        let {
            devices: s,
            active_device_id_optional: o,
            player_state: { player_queue_inject_optional: l },
          } = t.getState(),
          u = (function (e) {
            let {
                order: { value: t },
                index: { value: a },
              } = e.state.queueState,
              i = t[a];
            return null != i ? i : -1;
          })(e),
          {
            playableIndices: d,
            currentPlayableIndex: c,
            playableList: h,
          } = (function (e, t, a) {
            let i = a.state.queueState.order.value;
            if (e.length <= 200)
              return {
                playableList: e,
                currentPlayableIndex: t,
                playableIndices: i,
              };
            if (a.state.queueState.shuffle.value) {
              let a = i.indexOf(t),
                r = i.slice(a, 200),
                n = [...r].sort((e, t) => e - t).map((t) => e[t]),
                s = new Map(),
                o = r.map((t) => {
                  var a;
                  let i = e[t].playable_id,
                    r = null !== (a = s.get(i)) && void 0 !== a ? a : -1,
                    o = n.findIndex((e, t) => t > r && e.playable_id === i);
                  return s.set(i, o), o;
                }),
                l = n.findIndex((a) => a.playable_id === e[t].playable_id);
              return {
                playableList: n,
                currentPlayableIndex: l,
                playableIndices: o,
              };
            }
            let r = e[t].playable_id,
              n = Math.max(0, t - 100);
            n + 200 > e.length && (n = e.length - 200);
            let s = e.slice(n, n + 200),
              o = s.findIndex((e) => e.playable_id === r);
            return {
              playableList: s,
              currentPlayableIndex: o,
              playableIndices: i,
            };
          })(
            e.state.queueState.entityList.value.map((t) => {
              var a;
              return ao(
                t,
                null === (a = e.state.currentContext.value) || void 0 === a
                  ? void 0
                  : a.from,
              );
            }),
            u,
            e,
          );
        return {
          active_device_id_optional: o,
          devices: s,
          player_state: {
            player_queue_inject_optional: l,
            status: {
              duration_ms: ar(e),
              progress_ms: as(e),
              paused: e.state.playerState.status.value !== eE.Xz.PLAYING,
              playback_speed: e.state.playerState.speed.value,
              version: tE(a.device_id, 0),
            },
            player_queue: {
              entity_id: t8(e),
              entity_type: ae(
                null === (i = e.state.currentContext.value) || void 0 === i
                  ? void 0
                  : i.data.type,
              ),
              current_playable_index: c,
              playable_list: h,
              shuffle_optional: e.state.queueState.shuffle.value
                ? { playable_indices: d }
                : null,
              options: { repeat_mode: at(e.state.queueState.repeat.value) },
              entity_context: ty,
              from_optional:
                null !==
                  (n =
                    null === (r = e.state.currentContext.value) || void 0 === r
                      ? void 0
                      : r.from) && void 0 !== n
                  ? n
                  : null,
              initial_entity_optional: aa(e),
              adding_options_optional: ai(e),
              queue: null,
              version: tE(a.device_id, 0),
            },
          },
        };
      }
      let au = (e, t) => ({
        player_state: t,
        device: {
          volume: 1,
          capabilities: {
            can_be_player: !0,
            can_be_remote_controller: !1,
            volume_granularity: 16,
          },
          info: e,
          volume_info: { volume: 0, version: null },
          is_shadow: !0,
        },
        is_currently_active: !1,
        sync_state_from_eov_optional: null,
      });
      class ad {
        subscribeOnPlayerEvents() {
          if (!this.ynisonConnector) return;
          let e = this.playback.state.playerState.status.onChange((e) => {
              switch (e) {
                case eE.Xz.PLAYING:
                case eE.Xz.PAUSED:
                  this.updatePlayingStatus();
              }
            }),
            t = this.playback.state.playerState.event.onChange((e) => {
              switch (e) {
                case eE.KX.SET_PROGRESS:
                case eE.KX.SET_SPEED:
                  this.updatePlayingStatus();
              }
            }),
            a = this.playback.state.queueState.currentEntity.onChange(() =>
              this.updatePlayerState(),
            ),
            i = this.playback.state.queueState.entityList.onChange(() =>
              this.updatePlayerState(),
            ),
            r = this.playback.state.queueState.index.onChange(() =>
              this.updatePlayerState(),
            ),
            n = this.playback.state.queueState.order.onChange(() =>
              this.updatePlayerState(),
            ),
            s = this.playback.state.queueState.repeat.onChange(() =>
              this.updatePlayerState(),
            ),
            o = this.playback.state.queueState.shuffle.onChange(() =>
              this.updatePlayerState(),
            );
          this.unsubscribeFromPlayerEvents = () => {
            e(), t(), a(), i(), r(), n(), s(), o();
          };
        }
        updatePlayerState() {
          var e, t;
          if (!this.isUpdateFullStateSended()) return;
          let { active_device_id_optional: a } =
              this.ynisonStateController.getState(),
            i = al(
              this.playback,
              this.ynisonStateController,
              this.deviceConfig,
            );
          (e = this.ynisonStateController.calculateDiff({
            newState: i,
            skipVersionCompare: !0,
            skipDeviceActivityCheck: !0,
          })).player_state &&
            e.player_state.player_queue &&
            ((t = this.deviceConfig.device_id), !a || a === t) &&
            this.ynisonConnector.updatePlayerState({
              player_state: i.player_state,
            });
        }
        updatePlayingStatus() {
          var e, t;
          if (!this.isUpdateFullStateSended()) return;
          let { active_device_id_optional: a } =
              this.ynisonStateController.getState(),
            i = al(
              this.playback,
              this.ynisonStateController,
              this.deviceConfig,
            );
          (e = this.ynisonStateController.calculateDiff({
            newState: i,
            skipVersionCompare: !0,
            skipDeviceActivityCheck: !0,
          })).player_state &&
            e.player_state.status &&
            ((t = this.deviceConfig.device_id), !a || a === t) &&
            this.ynisonConnector.updatePlayingStatus({
              playing_status: i.player_state.status,
            });
        }
        updateFullState() {
          let e = al(
            this.playback,
            this.ynisonStateController,
            this.deviceConfig,
          );
          this.ynisonStateController.setState(e),
            (this.updateFullStateMessageRid =
              this.ynisonConnector.updateFullState(
                au(this.deviceConfig, e.player_state),
              ));
        }
        onDisconnected() {
          var e;
          (this.updateFullStateMessageRid = null),
            (this.updateFullStateResponseRid = null),
            null === (e = this.unsubscribeFromPlayerEvents) ||
              void 0 === e ||
              e.call(this);
        }
        onConnected() {
          this.subscribeOnPlayerEvents();
        }
        isUpdateFullStateSended() {
          return (
            !!this.updateFullStateMessageRid &&
            !!this.updateFullStateResponseRid &&
            this.updateFullStateMessageRid === this.updateFullStateResponseRid
          );
        }
        constructor({
          playback: e,
          ynisonStateController: t,
          ynisonConnector: a,
          deviceConfig: i,
        }) {
          (0, $._)(this, "unsubscribeFromPlayerEvents", void 0),
            (0, $._)(this, "updateFullStateMessageRid", null),
            (0, $._)(this, "updateFullStateResponseRid", null),
            (0, $._)(this, "playback", void 0),
            (0, $._)(this, "ynisonStateController", void 0),
            (0, $._)(this, "deviceConfig", void 0),
            (0, $._)(this, "ynisonConnector", void 0),
            (this.playback = e),
            (this.ynisonStateController = t),
            (this.ynisonConnector = a),
            (this.deviceConfig = i),
            this.ynisonConnector.state.connectionState.onChange((e) => {
              switch (e) {
                case V.CONNECTED:
                  this.onConnected();
                  break;
                case V.DISCONNECTED:
                  this.onDisconnected();
              }
            });
        }
      }
      let electronBridge = a(35308);
      class ac {
        apply(e) {
          if (!this.variables.enableYnisonConnection) return;
          let { playback: t, hooks: a } = e;
          (this.hooks = a),
            (this.playbackController = new t7(
              this.factory,
              t,
              this.ynisonStateController,
            )),
            (this.playbackToYnisonController = new ad({
              playback: t,
              ynisonStateController: this.ynisonStateController,
              ynisonConnector: this.ynisonConnector,
              deviceConfig: this.deviceConfig,
            })),
            this.ynisonConnector.state.connectionState.onChange((e) => {
              switch (e) {
                case V.CONNECTED:
                  this.onConnected(t);
                  break;
                case V.DISCONNECTED:
                  this.onDisconnected();
              }
            }),
            a.beforeEntityChange.tapPromise("YnisonPlugin", () => {
              let {
                currentEntity: { value: e },
              } = t.state.queueState;
              return e && (e.entity.startPosition = null), Promise.resolve();
            }),
            document.addEventListener("visibilitychange", () => {
              document.hidden ||
                this.ynisonConnector.state.connectionState.value !==
                  V.DISCONNECTED ||
                this.ynisonConnect(),
                document.hidden &&
                  t.state.playerState.status.value !== eE.Xz.PLAYING //&& this.ynisonDisconnect();
            }),
            this.ynisonConnect();
        }
        ynisonConnect() {
          this.variables.enableYnisonConnection &&
            this.ynisonConnector.connect({ oauth: this.oauth });
        }
        ynisonDisconnect() {
          this.ynisonConnector.disconnect();
        }
        onMessageRecieved(e, t) {
          var a;
          if (this.deviceConfig.device_id !== e.rawData.player_state.status.version.device_id) electronBridge.sendYnisonState(e);
          e.rawData.rid ===
          (null === (a = this.playbackToYnisonController) || void 0 === a
            ? void 0
            : a.updateFullStateMessageRid)
            ? this.handleUpdateFullStateResponse(e, t)
            : this.ynisonStateController.calculateDiff({ newState: e.rawData });
        }
        onConnected(e) {
          var t;
          this.subscribeOnConnectorEvents(e),
            null === (t = this.playbackToYnisonController) ||
              void 0 === t ||
              t.updateFullState();
        }
        onDisconnected() {
          var e;
          null === (e = this.unsubscribeFromConnectorEvents) ||
            void 0 === e ||
            e.call(this);
        }
        subscribeOnConnectorEvents(e) {
          let t = (t) => {
              this.onMessageRecieved(t, e);
            },
            a = (e) => {
              var t;
              null === (t = this.hooks) ||
                void 0 === t ||
                t.afterError.promise(tW("RedirectorException", e));
            },
            i = (e) => {
              var t;
              null === (t = this.hooks) ||
                void 0 === t ||
                t.afterError.promise(tW("HubException", e));
            };
          this.ynisonConnector.on(x.RECIEVE_MESSAGE, t),
            this.ynisonConnector.on(x.REDIRECTOR_ERROR, a),
            this.ynisonConnector.on(x.HUB_ERROR, i),
            (this.unsubscribeFromConnectorEvents = () => {
              this.ynisonConnector.off(x.RECIEVE_MESSAGE, t),
                this.ynisonConnector.off(x.REDIRECTOR_ERROR, a),
                this.ynisonConnector.off(x.HUB_ERROR, i);
            });
        }
        handleUpdateFullStateResponse(e, t) {
          let a = this.ynisonStateController.calculateDiff({
            newState: e.rawData,
          });
          if (
            (this.playbackToYnisonController &&
              (this.playbackToYnisonController.updateFullStateResponseRid =
                e.rawData.rid),
            [
              eE.Xz.ENDED,
              eE.Xz.IDLE,
              eE.Xz.PAUSED,
              eE.Xz.STOPPED,
              eE.Xz.MEDIA_ELEMENT_ERROR,
            ].includes(t.state.playerState.status.value))
          ) {
            var i;
            null === (i = this.playbackController) ||
              void 0 === i ||
              i.applyYnisonDiff(a);
          }
        }
        constructor({
          factory: e,
          deviceConfig: t,
          connectionConfig: a,
          variables: i,
          oauth: r,
        }) {
          (0, $._)(this, "hooks", void 0),
            (0, $._)(this, "ynisonConnector", void 0),
            (0, $._)(this, "ynisonStateController", void 0),
            (0, $._)(this, "factory", void 0),
            (0, $._)(this, "deviceConfig", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "playbackController", void 0),
            (0, $._)(this, "playbackToYnisonController", void 0),
            (0, $._)(this, "unsubscribeFromConnectorEvents", void 0),
            (0, $._)(this, "oauth", void 0),
            (this.factory = e),
            (this.variables = i),
            (this.deviceConfig = {
              app_name: t.appName,
              app_version: t.appVersion,
              title: t.title,
              device_id: (0, tc.Z)(),
              type: th.WEB,
            }),
            (this.oauth = r),
            (this.ynisonStateController = new tA({
              device: this.deviceConfig,
              diffWhileActiveOnly: !1,
            })),
            (this.ynisonConnector = new tB({
              config: {
                device: this.deviceConfig,
                oauth: this.oauth,
                redirectorConnectionConfig: {
                  protocol: "wss://",
                  host: a.ynisonHost,
                  path: a.redirectorPath,
                },
                hubConnectionConfig: {
                  protocol: "wss://",
                  path: a.hubConnectioPath,
                },
                defaultReconnectTimeoutMS: a.reconnectTimeout,
                reconnectAttemptsLimit: a.reconnectAttempts,
              },
            }));
        }
      }
      class ah {
        send(e) {
          new Promise((t) => {
            let a = { [e.name]: { ...e.data } };
            this.yaMetrika.count(a, "player-metrics"), t();
          });
        }
        constructor(e) {
          (0, $._)(this, "yaMetrika", void 0), (this.yaMetrika = e);
        }
      }
      let am = null;
      function ag(e) {
        let t = e.state.queueState.index.value,
          a = e.state.queueState.order.value,
          i = e.state.currentContext.value,
          r = void 0 !== a[t - 1];
        i && (i.availableActions.moveBackward.value = r),
          null !== am && (am(), (am = null)),
          0 !== t ||
            (0, tH.Q)(i) ||
            (am = e.state.playerState.progress.onChange((e) => {
              i &&
                (i.availableActions.moveBackward.value =
                  !!e && e.position > eE.lz);
            }));
      }
      let ap = [ef.V.AUDIOBOOK, ef.V.FAIRY_TALE, ef.V.PODCAST, ef.V.COMMENT];
      var ay = a(52416);
      let av = (e) => {
        let t =
          "albums" in e &&
          e.albums &&
          e.albums.length > 0 &&
          e.albums[0] &&
          e.albums[0].type === ay.V.PODCAST;
        return !!(("type" in e && e.type && ap.includes(e.type)) || t);
      };
      class aE {
        apply(e) {
          let { hooks: t, playback: a } = e,
            i = () => {
              !(function (e) {
                let { value: t } = e.state.currentContext,
                  { value: a } = e.state.queueState.currentEntity;
                if (void 0 !== t && void 0 !== a) {
                  let { meta: i } = a.entity.data;
                  (window?.SHOW_REPEAT_BUTTON_ON_VIBE() ? false : (0, tt.x)(t))  || // is track type Vibe
                  (0, tH.Q)(t) || // is track type Generative
                  ("type" in i && i.type && ap.includes(i.type))
                    ? ((t.availableActions.repeat.value = !1), (e.state.queueState.repeat.value !== eE.zq.NONE && e.setRepeatMode(eE.zq.NONE)))
                    : ((t.availableActions.repeat.value = !0), ((0, tt.x)(t) && e.state.queueState.repeat.value === eE.zq.CONTEXT && e.setRepeatMode(eE.zq.NONE)));

                  (0, tt.x)(t) || // is track type Vibe
                  (0, tH.Q)(t) || // is track type Generative
                  ("type" in i && i.type && ap.includes(i.type))
                    ? ((t.availableActions.shuffle.value = !1), (e.state.queueState.shuffle.value && e.toggleShuffle()))
                    : (t.availableActions.shuffle.value = !0);
                }
              })(a),
                (function (e) {
                  let { value: t } = e.state.currentContext,
                    { value: a } = e.state.queueState.currentEntity;
                  if (void 0 !== t && void 0 !== a) {
                    let { meta: e } = a.entity.data,
                      i = av(e);
                    t.availableActions.speed.value = !!i;
                  }
                })(a);
            };
          t.afterContextSet.tap("AvailableActionsPlugin", i),
            t.beforeMediaStartPlaying.tap("AvailableActionsPlugin", i),
            a.state.queueState.entityList.onChange(() => {
              i(), ag(a);
            }),
            a.state.queueState.index.onChange(() => {
              ag(a);
            });
        }
      }
      class af {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterContextSet.tap("ApplyContextPlugin", () => {
            let e = a.state.currentContext.value;
            e && e instanceof eE.$n && e.apply({ hooks: t, playback: a });
          });
        }
      }
      class aS {
        apply(e) {
          let { playback: t, hooks: a } = e;
          t.state.playerState.event.onChange(() => {
            let { currentEntity: e } = t.state.queueState;
            if (e.value)
              switch (t.state.playerState.event.value) {
                case eE.KX.PAUSED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "event-".concat(eE.KX.PAUSED),
                  });
                  break;
                case eE.KX.STALLED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "event-".concat(eE.KX.STALLED),
                  });
                  break;
                case eE.KX.PLAYING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.PLAYING,
                    reason: "event-".concat(eE.KX.PLAYING),
                  });
                  break;
                case eE.KX.MEDIA_ELEMENT_ERROR:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "event-".concat(eE.KX.MEDIA_ELEMENT_ERROR),
                  });
              }
          }),
            a.beforeEntityPlayingProcessStart.tapPromise(
              "TotalPlayedTimePlugin",
              () => {
                let { currentEntity: e } = t.state.queueState;
                return (
                  e.value && e.value.entity.clearTimeStagesOfPlayback(),
                  Promise.resolve()
                );
              },
            ),
            a.afterMediaStartPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.PLAYING,
                    reason: "hook-afterMediaStartPlaying",
                  }),
                Promise.resolve()
              );
            }),
            a.afterMediaEndPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "hook-afterMediaEndPlaying",
                  }),
                Promise.resolve()
              );
            }),
            a.beforeEntityChange.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "hook-beforeEntityChange",
                  }),
                Promise.resolve()
              );
            }),
            a.beforeContextSet.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: C.NOT_PLAYING,
                    reason: "hook-beforeContextSet",
                  }),
                Promise.resolve()
              );
            });
        }
      }
      var ab = a(66591),
        aP = a(49430);
      ((y = w || (w = {})).PREPARE = "prepare"), (y.PLAY = "play");
      var aA = a(90632),
        a_ = a(21744);
      class aN extends aA.c {
        async sendPlays(e, t) {
          var a;
          let i = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers;
          return (
            await this.httpClient.post("plays", {
              prefixUrl: i,
              searchParams: (0, a_.f)({ clientNow: e.clientNow }),
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              json: { plays: e.plays },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (a = this.config.timeouts) || void 0 === a
                  ? void 0
                  : a.sendPlays,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        constructor(e, t) {
          super(e, t),
            (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class aC extends eT.y {
        constructor(e, { code: t = "E_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "MediaProviderException"),
            Object.setPrototypeOf(this, aC.prototype);
        }
      }
      class aT extends aC {
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "GetFileInfoMediaProviderException"),
            Object.setPrototypeOf(this, aT.prototype);
        }
      }
      ((v = M || (M = {})).START = "start"),
        (v.END = "end"),
        (v.PLAYING = "playing");
      let aI = (e) => {
        if (e.mediaSourceData && "urls" in e.mediaSourceData.data) {
          let t = e.mediaSourceData.data.urls[0];
          if (t && t.startsWith("blob:")) return !0;
        }
        return !1;
      };
      var ak = a(69847);
      function aD() {
        return new Date().toISOString();
      }
      function aL(e) {
        var t, a, i, r, n, s;
        let o;
        let {
            contextEntityPair: l,
            totalPlayedSeconds: u,
            endPositionSeconds: d,
            type: c,
            maxPlayerStage: h,
            seek: m,
            pause: g,
            startTimestamp: p,
            radioSessionId: y,
          } = e,
          { entity: v, context: E } = l,
          f = String(v.data.meta.id),
          S = (function (e) {
            let t;
            if ("albums" in e.data.meta) {
              let {
                data: {
                  meta: { albums: a },
                },
              } = e;
              if (a) {
                let e = a[0];
                e && (t = String(e.id));
              }
            }
            return t;
          })(v),
          b =
            (null === (t = v.data.additional) || void 0 === t
              ? void 0
              : t.from) || E.from,
          P =
            (null === (a = v.data.additional) || void 0 === a
              ? void 0
              : a.utmLink) ||
            E.utmLink ||
            {},
          A = 0;
        (0, tr.Y)(v)
          ? "smartPreviewParams" in v.data.meta &&
            (null === (i = v.data.meta.smartPreviewParams) || void 0 === i
              ? void 0
              : i.durationMs) &&
            (A =
              (null === (r = v.data.meta.smartPreviewParams) || void 0 === r
                ? void 0
                : r.durationMs) / 1e3)
          : "durationMs" in v.data.meta &&
            v.data.meta.durationMs &&
            (A = v.data.meta.durationMs / 1e3);
        let _ = u,
          N = d;
        0.5 > Math.abs(A - u) && (_ = A),
          0.5 > Math.abs(A - d) && (N = A),
          (o = (0, tH.Q)(E)
            ? {
                generativeStreamId: String(
                  null === (n = E.data.meta.stream) || void 0 === n
                    ? void 0
                    : n.id,
                ),
              }
            : { trackId: f });
        let C = {
          playId: v.playId,
          timestamp: aD(),
          totalPlayedSeconds: _,
          endPositionSeconds: N,
          trackLengthSeconds: A,
          albumId: S,
          from: b,
          context: E.data.type,
          contextItem: String(E.data.meta.id),
          addTracksToPlayerTime: v.addTracksToPlayerTime,
          audioAuto: "none",
          audioOutputName: "Динамик",
          audioOutputType: "Speaker",
          maxPlayerStage: h,
          seek: m,
          pause: g,
          startTimestamp: p,
          fromCache: aI(v),
          ...P,
          ...o,
        };
        if (
          ((0, tt.x)(E) &&
            E.data.meta.session &&
            ((C.radioSessionId =
              null != y ? y : E.data.meta.session.radioSessionId),
            (C.context = "radio"),
            (C.contextItem = E.data.meta.session.wave.stationId)),
          (null == E ? void 0 : E.data.type) === eR.A.Playlist &&
            ((C.playlistId = ""
              .concat(E.data.meta.uid, ":")
              .concat(E.data.meta.kind)),
            (C.contextItem = ""
              .concat(E.data.meta.uid, ":")
              .concat(E.data.meta.kind))),
          (0, tz.d)(E))
        ) {
          let e = [ak.Z.Search, ak.Z.Other],
            t =
              null !== (s = E.data.overrideContextType) && void 0 !== s
                ? s
                : ak.Z.Other;
          (C.context = t), e.includes(t) && (C.contextItem = null);
        }
        return (0, tr.Y)(v) && (C.smartPreview = !0), { type: c, data: C };
      }
      var aR = a(49175),
        aV = a(35631),
        ax = a(93748),
        aG = a(32927),
        aO = a(6840);
      let aw = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "playId" in e &&
            "totalPlayedSeconds" in e
          ),
        aM = (e) => {
          let t = [
            e.find((e) => 0 === e.totalPlayedSeconds),
            (0, ax.Z)(e, "totalPlayedSeconds"),
          ];
          return (0, aG.Z)(t.filter(aw), "totalPlayedSeconds");
        },
        aj = (e) => {
          let t = (0, aV.Z)((0, aR.Z)(e, "playId"), aM);
          return (0, aO.Z)(t);
        };
      class aU extends eT.y {
        constructor(e, { code: t = "E_PLAYS", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "PlaysException"),
            Object.setPrototypeOf(this, aU.prototype);
        }
      }
      var aq = a(262),
        aF = a(41172);
      let aB = "playsHeartBeats";
      class aY extends eT.y {
        constructor(e, { code: t = "E_PLAYS_IDB_STORE", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "PlaysStoreException"),
            Object.setPrototypeOf(this, aY.prototype);
        }
      }
      let aW = () => "".concat("music_plays", "_").concat("1.0.0"),
        az = () => {
          var e, t;
          return (
            null === (t = window.navigator) || void 0 === t
              ? void 0
              : null === (e = t.storage) || void 0 === e
                ? void 0
                : e.estimate
          )
            ? window.navigator.storage.estimate().catch(() => ({}))
            : Promise.resolve({});
        };
      class aH {
        openDatabase() {
          this.idb = this.openIdb({
            onBlocked: () => this.onBlockedHandler(),
            onTerminated: () => this.onTerminatedHandler(),
          });
        }
        setOpenDbErrorLogger(e) {
          this.openDbErrorLogger = e;
        }
        storePlaysData(e) {
          return this.executeTransaction((t) =>
            t.put(aB, e).then(() => t.count(aB)),
          )
            .then((e) =>
              "number" == typeof e && e > this.storedPlaysLimit
                ? this.deleteOverLimitPlays(this.storedPlaysLimit)
                : Promise.resolve(),
            )
            .catch((e) => {
              throw this.generateError("Saving Play Error", e);
            });
        }
        getStoredPlaysData(e) {
          return this.executeTransaction((t) => t.getAll(aB, null, e), {
            defaultValue: [],
          }).catch((e) => {
            throw this.generateError("Error getting Plays", e);
          });
        }
        deleteAllByPlayId(e, t) {
          return Promise.all(
            e.map((e) => {
              let { playId: a } = e;
              return this.iterateByCursor("playId", a, "readwrite", (e) =>
                !t || t(e.value) ? e.delete() : Promise.resolve(),
              );
            }),
          )
            .then(aq.Z)
            .catch((e) => {
              throw this.generateError("Error deleting Plays", e);
            });
        }
        deleteOverLimitPlays(e) {
          return this.iterateByCursor(null, null, "readwrite", (t, a) =>
            a <= e ? Promise.resolve() : t.delete(),
          ).catch((e) => {
            throw this.generateError("Error deleting overlimit Plays", e);
          });
        }
        iterateByCursor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = 0,
            n = (e) =>
              e
                ? i(e, ++r)
                    .then(() => e.continue())
                    .then(n)
                : Promise.resolve();
          return this.getCursor(e, t, a).then(n);
        }
        onBlockedHandler() {
          this.closeConnection(this.idb).then(() => {
            this.idb = this.openIdb({
              onBlocked: () => {
                this.closeConnection(this.idb);
              },
              onTerminated: () => this.onTerminatedHandler(),
            });
          });
        }
        onTerminatedHandler() {
          (this.idbIsAvailable = !1),
            (this.idb = this.openIdb({
              onBlocked: () => this.onBlockedHandler(),
              onTerminated: () => {
                this.idbIsAvailable = !1;
              },
            }));
        }
        openIdb(e) {
          return new aF.r(this.idbName)
            .openDB(1, {
              onBlocked: (t, a, i) => {
                var r;
                this.logError("Connection has been blocked"),
                  null == e ||
                    null === (r = e.onBlocked) ||
                    void 0 === r ||
                    r.call(e, t, a, i);
              },
              onTerminated: () => {
                var t;
                this.logError("Storage has been terminated"),
                  null == e ||
                    null === (t = e.onTerminated) ||
                    void 0 === t ||
                    t.call(e);
              },
              onUpgrade: (e) => {
                let t = e.createObjectStore(aB, {
                  keyPath: "id",
                  autoIncrement: !0,
                });
                t.createIndex("playId", "playId", { unique: !1 }),
                  t.createIndex("trackId", "trackId", { unique: !1 });
              },
            })
            .then((e) => ((this.idbIsAvailable = !0), e))
            .catch((e) => {
              (this.idbIsAvailable = !1),
                this.logError("Open storage error", e);
            });
        }
        closeConnection(e) {
          return ((this.idbIsAvailable = !1), e)
            ? e
                .then((e) => {
                  e && e.close();
                })
                .catch((e) => {
                  this.logError("Error while try to close connection", e);
                })
            : Promise.resolve();
        }
        getCursor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a = arguments.length > 2 ? arguments[2] : void 0;
          return this.executeTransaction(
            (i) => {
              let r = i.transaction([aB], a).objectStore(aB);
              return e
                ? r.index(e).openCursor(t, "prev")
                : r.openCursor(t, "prev");
            },
            { defaultValue: null },
          );
        }
        executeTransaction(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.idbIsAvailable && this.idb
            ? this.idb.then((a) =>
                a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue),
              )
            : Promise.resolve(null == t ? void 0 : t.defaultValue);
        }
        logError(e, t) {
          var a;
          let i = this.generateError(e, t);
          null === (a = this.openDbErrorLogger) ||
            void 0 === a ||
            a.call(this, i);
        }
        generateError(e, t) {
          var a;
          return new aY(
            "[IndexedDB]["
              .concat(this.idbName, ".")
              .concat(aB, "]: ")
              .concat(e),
            {
              data: {
                originalError: String(t),
                storageEstimate:
                  null !== (a = this.storageEstimate) && void 0 !== a ? a : {},
              },
            },
          );
        }
        constructor(e) {
          (0, $._)(this, "storedPlaysLimit", void 0),
            (0, $._)(this, "idb", void 0),
            (0, $._)(this, "openDbErrorLogger", void 0),
            (0, $._)(this, "idbIsAvailable", !1),
            (0, $._)(this, "idbName", void 0),
            (0, $._)(this, "storageEstimate", void 0),
            (this.storedPlaysLimit = e),
            az().then((e) => {
              this.storageEstimate = e;
            }),
            (this.idbName = aW());
        }
      }
      class aK {
        apply(e) {
          var t, a;
          let { hooks: i, playback: r } = e;
          (this.hooks = i),
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData) &&
              (null === (a = this.playsStore) ||
                void 0 === a ||
                a.openDatabase()),
            this.isStorageEnabled(this.playsStore) &&
              this.playsStore.setOpenDbErrorLogger((e) => {
                i.afterError.promise(e);
              }),
            r.state.playerState.event.onChange(() => {
              let { currentEntity: e } = r.state.queueState;
              if (e.value)
                switch (r.state.playerState.event.value) {
                  case eE.KX.PLAYING: {
                    var t, a;
                    let i;
                    return (
                      (0, tt.x)(
                        null === (t = e.value) || void 0 === t
                          ? void 0
                          : t.context,
                      ) &&
                        (null === (a = e.value) || void 0 === a
                          ? void 0
                          : a.context.data.meta.session) &&
                        (i = e.value.context.data.meta.session.radioSessionId),
                      this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: {
                          maxPlayerStage: w.PLAY,
                          radioSessionId: i,
                        },
                      })
                    );
                  }
                  case eE.KX.PAUSED:
                    if (
                      Math.abs(
                        r.state.playerState.progress.value.position -
                          r.state.playerState.progress.value.duration,
                      ) > 0.2
                    )
                      return this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: { pause: !0 },
                      });
                    return;
                  case eE.KX.SET_PROGRESS:
                    return this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { seek: !0 },
                    });
                }
            });
          let n = (0, ab.Z)(
            () => {
              let e = r.state.queueState.currentEntity.value;
              if (!e || (0, tH.Q)(e.context)) return;
              let t = this.getDynamicPlaysDataByPlayId(e.entity.playId),
                { data: a } = aL({
                  type: M.PLAYING,
                  contextEntityPair: e,
                  totalPlayedSeconds: e.entity.totalPlayedSeconds,
                  endPositionSeconds:
                    r.state.playerState.progress.value.position,
                  ...t,
                });
              a.playId && a.totalPlayedSeconds > 0 && this.storeAndReplace(a);
            },
            this.storePlaysProgressIntervalMs,
            { trailing: !1 },
          );
          this.isStorageEnabled(this.playsStore) &&
            r.state.playerState.progress.onChange(n),
            i.beforeEntityPlayingProcessStart.tapPromise(
              "PlaysPlugin",
              () => (this.sendStartEntityPlay(r, i), Promise.resolve()),
            ),
            i.beforeMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let { currentEntity: e } = r.state.queueState;
              if (e.value) {
                var t;
                let a = e.value.entity.playId;
                (null === (t = this.dynamicPlaysDataByEntitiesPlayId.get(a)) ||
                void 0 === t
                  ? void 0
                  : t.startTimestamp) ||
                  this.changeDynamicPlaysDataByPlayId({
                    playId: a,
                    dynamicData: { startTimestamp: Date.now() },
                  });
              }
              return Promise.resolve();
            }),
            i.afterMediaEndPlaying.tapPromise("PlaysPlugin", () => {
              let {
                index: { value: e },
                entityList: { value: t },
                repeat: { value: a },
              } = r.state.queueState;
              return (
                (e === t.length - 1 || a === eE.zq.ONE) &&
                  this.sendEndEntityPlay(r, i),
                Promise.resolve()
              );
            }),
            i.afterError.tapPromise(
              "PlaysPlugin",
              (e) => (
                (e instanceof aT || e instanceof eE.YR) &&
                  this.sendEndEntityPlay(r, i),
                Promise.resolve()
              ),
            ),
            i.beforeContextSet.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(r, i),
            ),
            i.afterSetupQueue.tap("PlaysPlugin", () => {
              var e, t, a;
              let { currentContext: i, queueState: n } = r.state;
              if (
                (null === (e = n.currentEntity.value) || void 0 === e
                  ? void 0
                  : e.entity.playId) &&
                (0, tt.x)(i.value) &&
                (null === (t = i.value) || void 0 === t
                  ? void 0
                  : t.data.meta.session)
              )
                return this.changeDynamicPlaysDataByPlayId({
                  playId:
                    null === (a = n.currentEntity.value) || void 0 === a
                      ? void 0
                      : a.entity.playId,
                  dynamicData: {
                    radioSessionId: i.value.data.meta.session.radioSessionId,
                  },
                });
            }),
            i.beforeEntityChange.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(r, i),
            );
        }
        isStorageEnabled(e) {
          var t;
          return !!(
            e &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData)
          );
        }
        setPlaysDataForSending(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.set(t);
          });
        }
        clearSendedPlaysData(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.has(t) &&
              this.sendingInProgressForPlayId.delete(t);
          });
        }
        filterPlaysForSending(e) {
          return aj(
            e.filter((e) => {
              let { playId: t } = e;
              return !this.sendingInProgressForPlayId.has(t);
            }),
          );
        }
        playsResourceSend(e) {
          return (
            this.setPlaysDataForSending(e),
            this.playsResource
              .sendPlays({ clientNow: aD(), plays: e })
              .finally(() => {
                this.clearSendedPlaysData(e);
              })
          );
        }
        storeAndReplace(e) {
          return this.isStorageEnabled(this.playsStore)
            ? this.playsStore
                .deleteAllByPlayId([e], (e) => e.totalPlayedSeconds > 0)
                .then(() => {
                  var t;
                  return null === (t = this.playsStore) || void 0 === t
                    ? void 0
                    : t.storePlaysData(e);
                })
                .catch((e) => {
                  var t;
                  null === (t = this.hooks) ||
                    void 0 === t ||
                    t.afterError.promise(e);
                })
            : Promise.resolve();
        }
        sendStoredPlaysData() {
          let e = this.variables.limitOfStoredPlaysData || 25;
          if (!this.isStorageEnabled(this.playsStore)) return Promise.resolve();
          let t = (e) => {
            var t;
            null === (t = this.playsStore) ||
              void 0 === t ||
              t.deleteAllByPlayId(e).catch((e) => {
                var t;
                null === (t = this.hooks) ||
                  void 0 === t ||
                  t.afterError.promise(e);
              });
          };
          return this.playsStore
            .getStoredPlaysData(e)
            .then((e) => {
              let a = this.filterPlaysForSending(e);
              a.length &&
                this.playsResourceSend(a)
                  .then(() => {
                    t(a);
                  })
                  .catch((e) => {
                    var i;
                    e instanceof aP.du &&
                      e.statusCode === aP.CN.BAD_REQUEST &&
                      t(a),
                      null === (i = this.hooks) ||
                        void 0 === i ||
                        i.afterError.promise(
                          new aU("Error while sending plays", { cause: e }),
                        );
                  });
            })
            .catch((e) => {
              var t;
              null === (t = this.hooks) ||
                void 0 === t ||
                t.afterError.promise(e);
            });
        }
        sendPlayData(e) {
          let t = [e];
          return this.playsResourceSend(t)
            .then(() => {
              var e;
              this.isStorageEnabled(this.playsStore) &&
                (null === (e = this.playsStore) ||
                  void 0 === e ||
                  e
                    .deleteAllByPlayId(t, (e) => e.totalPlayedSeconds > 0)
                    .then(() => {
                      this.sendStoredPlaysData();
                    })
                    .catch((e) => {
                      var t;
                      null === (t = this.hooks) ||
                        void 0 === t ||
                        t.afterError.promise(e);
                    }));
            })
            .catch((t) => {
              throw (
                ((t instanceof aP.du && t.statusCode === aP.CN.BAD_REQUEST) ||
                  this.storeAndReplace(e),
                t)
              );
            });
        }
        sendCurrentEntityEndPlay(e, t) {
          if (
            e.state.queueState.currentEntity.value &&
            e.state.currentContext.value
          ) {
            if ((0, tt.x)(e.state.currentContext.value))
              return this.sendEndEntityPlay(e, t);
            this.sendEndEntityPlay(e, t);
          }
          return Promise.resolve();
        }
        sendStartEntityPlay(e, t) {
          let a = e.state.queueState.currentEntity.value;
          try {
            if (a) {
              a.entity.addTracksToPlayerTime = ""
                .concat(Math.random().toString().slice(2), "-")
                .concat(Math.ceil(Number(new Date()) / 1e3));
              let {
                  seek: i,
                  pause: r,
                  radioSessionId: n,
                } = this.getDynamicPlaysDataByPlayId(a.entity.playId),
                s = aL({
                  type: M.START,
                  contextEntityPair: a,
                  totalPlayedSeconds: 0,
                  endPositionSeconds: 0,
                  seek: i,
                  pause: r,
                  radioSessionId: n,
                });
              if (
                (s.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new aU("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: s.data.totalPlayedSeconds,
                        trackLengthSeconds: s.data.trackLengthSeconds,
                        playId: s.data.playId,
                        isOnStart: !0,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                !this.variables.disableSendPlaysOnTrackStart)
              )
                return this.sendPlayData(s.data).catch((e) => {
                  let i = "",
                    r = "";
                  a &&
                    ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                    t.afterError.promise(
                      new aU("Error while sending plays", {
                        cause: e,
                        data: { contextId: i, entityId: r },
                      }),
                    );
                });
            }
          } catch (r) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new aU("Error while sending plays", {
                  cause: r,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        sendEndEntityPlay(e, t) {
          let a = e.state.queueState.currentEntity.value;
          try {
            if (a && !(0, tH.Q)(a.context)) {
              let i;
              let { entity: r } = a,
                n = a.entity.totalPlayedSeconds,
                s = this.getDynamicPlaysDataByPlayId(r.playId);
              return (
                (i =
                  0 === n
                    ? aL({
                        type: M.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: 0.1,
                        endPositionSeconds: 0.1,
                        ...s,
                      })
                    : aL({
                        type: M.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: n,
                        endPositionSeconds:
                          e.state.playerState.progress.value.position,
                        ...s,
                      })),
                this.dynamicPlaysDataByEntitiesPlayId.delete(i.data.playId),
                i.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new aU("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: i.data.totalPlayedSeconds,
                        trackLengthSeconds: i.data.trackLengthSeconds,
                        playId: i.data.playId,
                        isOnStart: !1,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                this.sendPlayData(i.data).catch((e) => {
                  let i = "",
                    r = "";
                  a &&
                    ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                    t.afterError.promise(
                      new aU("Error while sending plays", {
                        cause: e,
                        data: { contextId: i, entityId: r },
                      }),
                    );
                })
              );
            }
          } catch (r) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new aU("Error while sending plays", {
                  cause: r,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        changeDynamicPlaysDataByPlayId(e) {
          let { playId: t, dynamicData: a } = e,
            i = this.dynamicPlaysDataByEntitiesPlayId.get(t);
          this.dynamicPlaysDataByEntitiesPlayId.set(t, {
            ...(null != i ? i : {}),
            ...(null != a ? a : {}),
          });
        }
        getDynamicPlaysDataByPlayId(e) {
          var t, a, i;
          let r = this.dynamicPlaysDataByEntitiesPlayId.get(e);
          return {
            seek:
              null !== (t = null == r ? void 0 : r.seek) && void 0 !== t && t,
            pause:
              null !== (a = null == r ? void 0 : r.pause) && void 0 !== a && a,
            maxPlayerStage:
              null !== (i = null == r ? void 0 : r.maxPlayerStage) &&
              void 0 !== i
                ? i
                : w.PREPARE,
            startTimestamp: null == r ? void 0 : r.startTimestamp,
            radioSessionId: null == r ? void 0 : r.radioSessionId,
          };
        }
        constructor(e) {
          (0, $._)(this, "dynamicPlaysDataByEntitiesPlayId", new Map()),
            (0, $._)(this, "sendingInProgressForPlayId", new Map()),
            (0, $._)(this, "playsResource", void 0),
            (0, $._)(this, "playsStore", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "storePlaysProgressIntervalMs", void 0),
            (0, $._)(this, "hooks", void 0);
          let { httpClient: t, playsResourceConfig: a, variables: i } = e;
          (this.playsResource = new aN(t, a)),
            (this.variables = i || {}),
            (this.storePlaysProgressIntervalMs =
              e.storePlaysProgressIntervalMs || 1e4);
          let r = this.variables.limitOfStoredPlaysData || 100;
          this.playsStore = new aH(r);
        }
      }
      function aJ(e) {
        return (null == e ? void 0 : e.data.type) === eS.A.Generative;
      }
      ((E = j || (j = {})).PLAY = "play"),
        (E.PAUSE = "pause"),
        (E.NEXT = "nexttrack"),
        (E.PREV = "previoustrack"),
        (E.SEEK = "seekto"),
        (E.STOP = "stop");
      let aX = [40, 50, 80, 100, 200, 300, 400],
        aQ = [j.PLAY, j.PAUSE, j.STOP, j.SEEK],
        aZ = (e) => e.startsWith("blob:");
      class a$ {
        isSupported() {
          return (
            "mediaSession" in window.navigator && "MediaMetadata" in window
          );
        }
        handleMediaActionEvents(e, t) {
          let { action: a } = e;
          switch (a) {
            case j.PLAY:
              t.resume();
              break;
            case j.PAUSE:
            case j.STOP:
              t.pause();
              break;
            case j.NEXT:
              t.moveForward();
              break;
            case j.PREV:
              t.moveBackward();
              break;
            case j.SEEK: {
              var i;
              if (
                aJ(
                  null === (i = t.state.queueState.currentEntity.value) ||
                    void 0 === i
                    ? void 0
                    : i.entity,
                )
              )
                return;
              let { seekTime: a } = e;
              a && t.setProgress(a);
            }
          }
        }
        prepareMetadata(e) {
          let t, a;
          let i = { title: e.title };
          if ("artists" in e) {
            let t = (e.artists || []).map((e) => e.name).join(", ");
            i.artist = t;
          }
          if ("albums" in e) {
            var r, n;
            let t =
              null === (n = e.albums) || void 0 === n
                ? void 0
                : null === (r = n[0]) || void 0 === r
                  ? void 0
                  : r.title;
            i.album = t;
          }
          return (
            "coverUri" in e && (t = e.coverUri),
            "imageUrl" in e && (t = e.imageUrl),
            t &&
              (a = aX.map((e) => {
                let a = "".concat(e, "x").concat(e);
                "Safari" === this.browserName &&
                  (a = "".concat(2 * e, "x").concat(2 * e));
                let i = "";
                return (
                  "string" == typeof t &&
                    (i = aZ(t) ? t : "https://".concat(t.replace("%%", a))),
                  { sizes: a, src: i, type: "image/jpg" }
                );
              })),
            (i.artwork = a),
            i
          );
        }
        updateMetadata(e) {
          if (!e) return;
          let t = this.prepareMetadata(e);
          window.navigator.mediaSession.metadata = new MediaMetadata(t);
        }
        handlePlayerEvents(e) {
          let t, a;
          e.state.playerState.event.onChange(() => {
            if (e.state.playerState.event.value === eE.KX.UPDATING_PROGRESS) {
              var t, a;
              this.updateMetadata(
                null === (t = e.state.queueState.currentEntity.value) ||
                  void 0 === t
                  ? void 0
                  : t.entity.data.meta,
              ),
                aJ(
                  null === (a = e.state.queueState.currentEntity.value) ||
                    void 0 === a
                    ? void 0
                    : a.entity,
                )
                  ? navigator.mediaSession.setPositionState({
                      duration: 0,
                      position: 0,
                    })
                  : navigator.mediaSession.setPositionState(),
                aQ.forEach((t) => {
                  try {
                    window.navigator.mediaSession.setActionHandler(t, (t) =>
                      this.handleMediaActionEvents(t, e),
                    );
                  } catch (e) {
                    console.log(
                      'The media session action "'.concat(
                        t,
                        '" is not supported yet.',
                      ),
                    );
                  }
                });
            }
          }),
            e.state.currentContext.onChange(() => {
              var i, r;
              null == t || t(),
                null == a || a(),
                (t =
                  null === (i = e.state.currentContext.value) || void 0 === i
                    ? void 0
                    : i.availableActions.moveBackward.onChange(() => {
                        var t, a;
                        let i =
                          null !==
                            (a =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveBackward.value) &&
                          void 0 !== a &&
                          a;
                        window.navigator.mediaSession.setActionHandler(
                          j.PREV,
                          i ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      })),
                (a =
                  null === (r = e.state.currentContext.value) || void 0 === r
                    ? void 0
                    : r.availableActions.moveForward.onChange(() => {
                        var t, a;
                        let i =
                          null !==
                            (a =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveForward.value) &&
                          void 0 !== a &&
                          a;
                        window.navigator.mediaSession.setActionHandler(
                          j.NEXT,
                          i ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      }));
            });
        }
        apply(e) {
          let { playback: t } = e;
          this.isSupported() && this.handlePlayerEvents(t);
        }
        constructor({ browserName: e, browserVersion: t }) {
          (0, $._)(this, "browserName", void 0),
            (0, $._)(this, "browserVersion", void 0),
            (this.browserName = e),
            (this.browserVersion = t);
        }
      }
      class a0 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterError.tapPromise("LoggerPlugin", (e) => {
            let t;
            let i = a.state.queueState.currentEntity.value
              ? a.state.queueState.currentEntity.value.entity.mediaSourceData
              : null;
            return (
              ((t =
                e instanceof eT.y
                  ? e
                  : new eT.y("Error in Sonata player", {
                      code: "E_SONATA",
                      cause: e,
                    })).name = "[Sonata] ".concat(t.name)),
              this.logger.error(t, {
                ...t.data,
                ...(i || {}),
                code: t.code,
                cause: t.cause,
                stack: t.stack,
                message: t.message,
              }),
              Promise.resolve()
            );
          });
        }
        constructor(e) {
          (0, $._)(this, "logger", void 0);
          let { logger: t } = e;
          this.logger = t;
        }
      }
      (U || (U = {})).QUALITY_CHANGE = "QUALITY_CHANGE";
      class a5 {
        apply(e) {
          let { playback: t, hooks: a } = e;
          this.quality.onChange(() => {
            t.state.playerState.status.value !== eE.Xz.IDLE &&
              t.reloadEntity(U.QUALITY_CHANGE).catch((e) => {
                a.afterError.promise(e);
              });
          });
        }
        constructor(e) {
          (0, $._)(this, "quality", void 0), (this.quality = e);
        }
      }
      var a1 = a(90699);
      let a9 = (e) =>
        "object" == typeof e &&
        e &&
        "rememberPosition" in e &&
        "boolean" == typeof e.rememberPosition;
      class a3 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeEntityChange.tapPromise("ContinuePlayingPlugin", () => {
            let { position: e, duration: t } = this.getTimingsFromPlayback(a);
            return new Promise((i) => {
              e !== t && this.checkBeforeProgressSync(a), i();
            });
          }),
            a.state.playerState.status.onChange((e) => {
              (e === eE.Xz.PAUSED || e === eE.Xz.STOPPED) &&
                (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                e === eE.Xz.PLAYING &&
                  this.shouldSendProgressSync(a) &&
                  this.setTimeout(a);
            }),
            a.state.playerState.event.onChange(() => {
              if (a.state.playerState.event.value === eE.KX.SET_PROGRESS) {
                let e = a.state.queueState.currentEntity.value,
                  t = a.state.playerState.progress.value.position;
                if (!e) return;
                let { entity: i } = e;
                a9(i.data.meta) &&
                  i.data.meta.rememberPosition &&
                  (i.lastSeekPosition = t);
              }
            }),
            a.state.queueState.currentEntity.onChange(() => {
              let e = a.state.queueState.currentEntity.value;
              if (!e) return;
              let { entity: t } = e;
              if (
                a9(t.data.meta) &&
                t.data.meta.rememberPosition &&
                eP(t.data.meta)
              ) {
                let { endPositionSec: e } = t.data.meta.streamProgress;
                t.everFinished
                  ? (t.startPosition = e)
                  : (t.startPosition = Number.isFinite(t.lastSeekPosition)
                      ? t.lastSeekPosition
                      : e);
              }
            });
        }
        checkBeforeProgressSync(e) {
          var t;
          if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
          let { position: a, duration: i } = this.getTimingsFromPlayback(e),
            r =
              null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
                ? void 0
                : t.entity.data.meta.id;
          Number.isFinite(i) &&
            Number.isFinite(a) &&
            i &&
            a &&
            r &&
            (this.sendProgressSync({ duration: i, position: a, trackId: r }),
            e.state.playerState.status.value === eE.Xz.PLAYING &&
              this.setTimeout(e));
        }
        sendProgressSync(e) {
          let t = new Date().toISOString(),
            { duration: a, position: i, trackId: r } = e;
          this.streamsResource.progressSync({
            lastSyncTimestamp: t,
            trackStreams: [
              {
                trackId: r,
                positionSec: i,
                trackLengthSec: a,
                finished: i === a,
                timestamp: t,
              },
            ],
          });
        }
        shouldSendProgressSync(e) {
          var t;
          if (!this.variables.isEnabled) return !1;
          let a =
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.meta;
          return !!(a && "rememberPosition" in a && a.rememberPosition);
        }
        setTimeout(e) {
          this.clearTimeout(),
            (this.timeoutId = window.setTimeout(() => {
              this.checkBeforeProgressSync(e);
            }, 3e4));
        }
        clearTimeout() {
          window.clearTimeout(this.timeoutId);
        }
        getTimingsFromPlayback(e) {
          return {
            duration: Math.floor(e.state.playerState.progress.value.duration),
            position: Math.floor(e.state.playerState.progress.value.position),
          };
        }
        constructor(e) {
          (0, $._)(this, "streamsResource", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "timeoutId", 0);
          let { httpClient: t, streamsResourceConfig: a, variables: i } = e;
          (this.streamsResource = new a1.h(t, a)), (this.variables = i);
        }
      }
      ((f = q || (q = {})).WANT_PLAY_TRACK = "WANT_PLAY_TRACK"),
        (f.TRACK_IS_PLAYING = "TRACK_IS_PLAYING"),
        (f.TRACK_IS_PLAYING_MISSED = "TRACK_IS_PLAYING_MISSED"),
        (f.TRACK_ERROR_PREPARE = "TRACK_ERROR_PREPARE"),
        (f.TRACK_ERROR_INITIAL_BUFFERING = "TRACK_ERROR_INITIAL_BUFFERING"),
        (f.TRACK_ERROR_PLAYING = "TRACK_ERROR_PLAYING"),
        ((S = F || (F = {})).E_GET_MEDIA_SRC = "E_GET_MEDIA_SRC"),
        (S.E_CREATE_SIGN = "E_CREATE_SIGN"),
        (S.E_UNSUITABLE_ENTITY_TYPE = "E_UNSUITABLE_ENTITY_TYPE"),
        ((b = B || (B = {})).NETWORK = "NETWORK"),
        (b.OTHER = "OTHER"),
        ((P = Y || (Y = {})).BAD_RESPONSE_4XX = "BAD_RESPONSE_4XX"),
        (P.BAD_RESPONSE_5XX = "BAD_RESPONSE_5XX"),
        (P.OTHER = "OTHER");
      class a2 {
        logEvent(e) {
          let { event: t, eventName: a } = e;
          this.enableDebugMode &&
            (t
              ? (console.group(
                  "".concat(null != a ? a : "Untitled Log Metrics Event Info"),
                ),
                console.table(t.data),
                console.group("Raw event"),
                console.dir(t),
                console.groupEnd(),
                console.groupEnd())
              : console.error("Event in logEvent method not provided"));
        }
        wantPlayTrack(e) {
          let t = String(e.data.meta.id),
            a = Math.trunc(performance.now()),
            i = {
              name: q.WANT_PLAY_TRACK,
              data: {
                trackId: t,
                uuid: e.playId,
                expectedQuality: this.mediaConfigController.quality.value,
              },
            };
          return (
            this.wantPlayTracksEvents.size > 0 &&
              this.sendTrackIsPlayingMissed(),
            this.wantPlayTracksEvents.set(e.playId, {
              time: a,
              event: i,
              trackId: t,
            }),
            this.logEvent({ event: i, eventName: null == i ? void 0 : i.name }),
            this.transport.send(i),
            i
          );
        }
        trackError(e, t) {
          let a = null;
          return (
            e instanceof aC
              ? (a = {
                  name: q.TRACK_ERROR_PREPARE,
                  data: {
                    trackId: String(t.data.meta.id),
                    uuid: t.playId,
                    type: e.code === F.E_GET_MEDIA_SRC ? B.NETWORK : B.OTHER,
                    subType: (function (e) {
                      let t = Y.OTHER;
                      if (e.cause instanceof aP.du)
                        switch (String(e.cause.statusCode)[0]) {
                          case "4":
                            t = Y.BAD_RESPONSE_4XX;
                            break;
                          case "5":
                            t = Y.BAD_RESPONSE_5XX;
                        }
                      return t;
                    })(e),
                    name: e.name,
                    code: e.code,
                  },
                })
              : e instanceof eE.YR && e.code === eE.Bq.PLAY
                ? (a = {
                    name: q.TRACK_ERROR_INITIAL_BUFFERING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      ...(e.cause instanceof DOMException
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                            causeName: e.cause.name,
                          }
                        : {
                            causeCode: -1,
                            causeMessage: "Unknown error message",
                            causeName: "Unknown error name",
                          }),
                    },
                  })
                : e instanceof eE.YR &&
                  e.code === eE.Bq.MEDIA_ELEMENT_ERROR &&
                  (a = {
                    name: q.TRACK_ERROR_PLAYING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      ...(e.cause instanceof MediaError
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                          }
                        : { causeCode: -1, causeMessage: "Unknown cause" }),
                    },
                  }),
            e instanceof eE.YR &&
              this.wantPlayTracksEvents.has(t.playId) &&
              (!a ||
                !("causeCode" in a.data) ||
                ("causeCode" in a.data &&
                  (null == a ? void 0 : a.data.causeCode) !== 20)) &&
              this.wantPlayTracksEvents.delete(t.playId),
            a && this.transport.send(a),
            this.logEvent({ event: a, eventName: null == a ? void 0 : a.name }),
            a
          );
        }
        trackIsPlaying(e) {
          var t;
          let a, i;
          let r = String(e.data.meta.id),
            n =
              this.wantPlayTracksEvents.has(e.playId) &&
              (null === (t = this.wantPlayTracksEvents.get(e.playId)) ||
              void 0 === t
                ? void 0
                : t.time),
            s = null;
          return (
            !e.mediaSourceData ||
              "error" in e.mediaSourceData.data ||
              ((a = e.mediaSourceData.data.codec),
              (i = e.mediaSourceData.data.bitrate)),
            "number" == typeof n &&
              ((s = {
                name: q.TRACK_IS_PLAYING,
                data: {
                  trackId: r,
                  time: Math.trunc(performance.now() - n),
                  uuid: e.playId,
                  codec: a,
                  bitrate: i,
                },
              }),
              this.wantPlayTracksEvents.delete(e.playId)),
            s && this.transport.send(s),
            this.logEvent({ event: s, eventName: null == s ? void 0 : s.name }),
            s
          );
        }
        sendTrackIsPlayingMissed() {
          let [e, { trackId: t }] = Array.from(
              this.wantPlayTracksEvents.entries(),
            )[0],
            a = {
              name: q.TRACK_IS_PLAYING_MISSED,
              data: { trackId: t, uuid: e },
            };
          return (
            this.wantPlayTracksEvents.delete(e),
            this.transport.send(a),
            this.logEvent({ event: a, eventName: a.name }),
            a
          );
        }
        constructor(e) {
          var t;
          (0, $._)(this, "mediaConfigController", void 0),
            (0, $._)(this, "wantPlayTracksEvents", new Map()),
            (0, $._)(this, "enableDebugMode", void 0),
            (0, $._)(this, "transport", void 0),
            (this.enableDebugMode =
              null === (t = e.variables) || void 0 === t
                ? void 0
                : t.enableDebugMode),
            (this.mediaConfigController = e.mediaConfigController),
            (this.transport = e.transport);
        }
      }
      class a6 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeEntityPlayingProcessStart.tapPromise("MetricsPlugin", () => {
            let e = a.state.queueState.currentEntity.value;
            return (
              e && this.metricsEventsStore.wantPlayTrack(e.entity),
              Promise.resolve()
            );
          }),
            t.afterError.tapPromise("MetricsPlugin", (e) => {
              let t = a.state.queueState.currentEntity.value;
              return (
                t && this.metricsEventsStore.trackError(e, t.entity),
                Promise.resolve()
              );
            }),
            t.afterMediaStartPlaying.tapPromise("MetricsPlugin", () => {
              let e = a.state.queueState.currentEntity.value;
              return (
                e && this.metricsEventsStore.trackIsPlaying(e.entity),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, $._)(this, "metricsEventsStore", void 0),
            (this.metricsEventsStore = new a2(e));
        }
      }
      var a4 = a(31),
        a7 = a(42982);
      function a8(e, t, a) {
        return (
          !(e instanceof eC) &&
          !!e.isAvailable &&
          (null === e.mediaSourceData ||
            (!("error" in e.mediaSourceData.data || aI(e)) &&
              (performance.now() - e.mediaSourceData.loadingTime > t ||
                (function (e) {
                  switch (e) {
                    case a4.n.LOSSLESS:
                    case a4.n.HQ:
                      return a7.n.HIGH_QUALITY;
                    case a4.n.NQ:
                      return a7.n.BALANCED;
                    case a4.n.LQ:
                  }
                  return a7.n.EFFICIENT;
                })(e.mediaSourceData.data.quality) !== a.quality.value)))
        );
      }
      class ie {
        apply(e) {
          let { hooks: t, playback: a } = e;
          this.variables.isMediaSourcePreloadEnabled &&
            t.beforeEntityPlayingProcessStart.tapPromise(
              "MediaSourcePreloadPlugin",
              () => {
                if (
                  !this.variables.isMediaSourcePreloadEnabled ||
                  (0, tt.x)(a.state.currentContext.value)
                )
                  return Promise.resolve();
                let {
                  queueState: { index: e, order: i, entityList: r },
                  currentContext: n,
                } = a.state;
                if ((0, tH.Q)(n.value)) return Promise.resolve();
                let s = a.getEntityByIndex({ index: e.value });
                return void 0 === s
                  ? Promise.resolve()
                  : a8(
                        s.entity,
                        this.config.mediaSourceTtlMs,
                        this.mediaConfigController,
                      )
                    ? new Promise((e) => {
                        this.getMediaSourceBatch(a)
                          .catch((e) => {
                            t.afterError.promise(e);
                          })
                          .finally(e);
                      })
                    : ((function (e) {
                        let {
                          windowSize: t,
                          contextEntityPairs: a,
                          index: i,
                          order: r,
                          mediaSourceTtlMs: n,
                          mediaConfigController: s,
                        } = e;
                        return r
                          .slice(i - t > 0 ? i - t : 0, i + t + 1)
                          .map((e) => a[e])
                          .some((e) => a8(e.entity, n, s));
                      })({
                        contextEntityPairs: r.value,
                        index: e.value,
                        order: i.value,
                        mediaSourceTtlMs: this.config.mediaSourceTtlMs,
                        mediaConfigController: this.mediaConfigController,
                        windowSize: this.config.checkForLoadWindowSize,
                      }) &&
                        this.getMediaSourceBatch(a).catch((e) => {
                          t.afterError.promise(e);
                        }),
                      Promise.resolve());
              },
            );
        }
        getMediaSourceBatch(e) {
          let {
              queueState: { index: t, order: a, entityList: i },
            } = e.state,
            { contextEntityPairsToLoad: r } = (0, eE.U9)({
              index: t.value,
              contextEntityPairs: i.value,
              windowSize: this.config.loadWindowSize,
              needToLoadPredicate: (e) =>
                a8(
                  e.entity,
                  this.config.mediaSourceTtlMs,
                  this.mediaConfigController,
                ),
              order: a.value,
            }),
            n = r.map((e) => e.entity);
          return this.mediaProvider.getMediaSourceBatch({ entities: n });
        }
        constructor({
          mediaProvider: e,
          config: t,
          mediaConfigController: a,
          variables: i,
        }) {
          (0, $._)(this, "variables", void 0),
            (0, $._)(this, "mediaProvider", void 0),
            (0, $._)(this, "config", void 0),
            (0, $._)(this, "mediaConfigController", void 0),
            (this.variables =
              null != i ? i : { isMediaSourcePreloadEnabled: !1 }),
            (this.mediaProvider = e),
            (this.mediaConfigController = a),
            (this.config = t);
        }
      }
      class it {
        apply() {
          this.trailerPlayback.hooks.afterContextEnd.tapPromise(
            "TrailerPlugin",
            () => (
              this.trailerPlayback.restartContext({ playAfterRestart: !1 }),
              Promise.resolve()
            ),
          ),
            this.trailerPlayback.hooks.afterMediaPause.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPaused(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaResume.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            );
        }
        constructor({
          onTrailerPaused: e,
          onTrailerPlaying: t,
          playbackController: a,
          trailerPlaybackParams: i,
        }) {
          if (
            ((0, $._)(this, "onTrailerPaused", void 0),
            (0, $._)(this, "onTrailerPlaying", void 0),
            (0, $._)(this, "trailerPlayback", void 0),
            (this.onTrailerPaused = e),
            (this.onTrailerPlaying = t),
            a.createPlayback(i.id, {
              factory: i.factory,
              entityProvider: i.entityProvider,
              playbackConfig: i.playbackConfig,
              mediaPlayerParams: i.mediaPlayerParams,
              variables: i.variables,
            }),
            (this.trailerPlayback = a.getPlayback(i.id)),
            i.plugins)
          )
            for (let e of i.plugins)
              e.apply({
                playback: this.trailerPlayback,
                hooks: this.trailerPlayback.hooks,
              });
        }
      }
      (W || (W = {})).START = "start";
      class ia {
        apply(e) {
          let { playback: t } = e;
          this.channel &&
            ((this.channel.onmessage = (e) => {
              let { type: a, id: i } = e.data;
              t.state.playerState.status.value === eE.Xz.PLAYING &&
                a === W.START &&
                i !== this.activeStreamId &&
                t.pause();
            }),
            t.state.playerState.status.onChange((e) => {
              if (e === eE.Xz.PLAYING) {
                var t;
                null === (t = this.channel) ||
                  void 0 === t ||
                  t.postMessage({ type: W.START, id: this.activeStreamId });
              }
            }));
        }
        constructor({ variables: e }) {
          (0, $._)(this, "channel", void 0),
            (0, $._)(this, "activeStreamId", void 0),
            (this.activeStreamId = (0, tc.Z)()),
            e.enableSingleTabPlayback &&
              (this.channel = new BroadcastChannel("ya_music_playback"));
        }
      }
      ((A = z || (z = {})).AD = "ad"),
        (A.SHOT = "shot"),
        ((_ = H || (H = {})).NONE = "none"),
        (_.AD = "ad"),
        (_.JINGLE = "jingle"),
        ((N = K || (K = {})).NONE = "none"),
        (N.AD = "ad"),
        (N.JINGLE = "jingle");
      class ii extends aA.c {
        async getAfterTrack(e, t) {
          var a;
          let i = this.config.gateway.prefixUrl,
            r = this.config.gateway.headers;
          return (
            await this.httpClient.get("after-track", {
              prefixUrl: i,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...r,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, a_.f)({
                from: e.from,
                types: e.types,
                nextTrackId: e.nextTrackId,
                prevTrackId: e.prevTrackId,
              }),
              timeout:
                null === (a = this.config.timeouts) || void 0 === a
                  ? void 0
                  : a.getAfterTrack,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        constructor(e, t) {
          super(e, t),
            (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      var ir = a(21785);
      class is {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.beforeEntityChange.tapPromise(
            "AdvertPlugin",
            () =>
              new Promise((e) => {
                if (this.variables.disabled) {
                  e();
                  return;
                }
                let {
                  state: {
                    currentContext: a,
                    queueState: {
                      index: { value: i },
                      order: { value: r },
                      entityList: { value: n },
                      currentEntity: { value: s },
                    },
                  },
                } = t;
                if (void 0 !== a.value) {
                  let o = r[i + 1],
                    l = o ? n[o] : void 0,
                    u = l ? String(l.entity.data.meta.id) : void 0,
                    d = r[i - 1],
                    c = d ? n[d] : void 0,
                    h = c ? String(c.entity.data.meta.id) : void 0,
                    m =
                      ((null == s ? void 0 : s.entity.totalPlayedSeconds) ||
                        0) /
                      ((((null == s ? void 0 : s.entity.data.meta) &&
                        "durationMs" in s.entity.data.meta &&
                        s.entity.data.meta.durationMs) ||
                        1) /
                        1e3);
                  (this.currentTrackId = String(
                    null == s ? void 0 : s.entity.data.meta.id,
                  )),
                    (this.from = a.value.from),
                    this.afterTrackResource
                      .getAfterTrack({
                        contextItem: String(a.value.data.meta.id),
                        from: a.value.from,
                        types: z.AD,
                        nextTrackId: u,
                        prevTrackId: h,
                      })
                      .then((a) => {
                        var i, r;
                        let n =
                          (m >= 0.5 &&
                            (null === (i = a.ad) || void 0 === i
                              ? void 0
                              : i.afterPlay) === H.AD) ||
                          (m < 0.5 &&
                            (null === (r = a.ad) || void 0 === r
                              ? void 0
                              : r.afterSkip) === K.AD);
                        "ad" in a && this.advertModule && n
                          ? (t.pause(),
                            this.advertModule.playAdvert(a).finally(e))
                          : e();
                      });
                } else e();
              }),
          );
        }
        advertFeedbackCallback() {
          this.adsResource.saveAds({
            from: this.from,
            trackId: this.currentTrackId,
            type: "ad",
          });
        }
        constructor(e) {
          var t;
          (0, $._)(this, "advertModule", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "afterTrackResource", void 0),
            (0, $._)(this, "adsResource", void 0),
            (0, $._)(this, "currentTrackId", ""),
            (0, $._)(this, "from", "");
          let {
            httpClient: a,
            afterTrackResourceConfig: i,
            advertModule: r,
            adsResourceConfig: n,
            variables: s,
          } = e;
          (this.afterTrackResource = new ii(a, i)),
            (this.adsResource = new ir.j(a, n)),
            (this.variables = s),
            (this.advertModule = r),
            null === (t = this.advertModule) ||
              void 0 === t ||
              t.setAdvertFeedbackCallback(
                this.advertFeedbackCallback.bind(this),
              );
        }
      }
      let io = [eR.A.Album, eR.A.Artist, eR.A.Playlist, eR.A.Various],
        il = (e, t, a) => {
          var i;
          let r =
            null === (i = t.state.currentContext.value) || void 0 === i
              ? void 0
              : i.data;
          if (!r) return "";
          let n = e,
            s = t.state.queueState.entityList.value.length || 0;
          return (
            n === eR.A.Various && 1 === s && (n = "track"),
            e === eR.A.Various &&
              "overrideContextType" in r &&
              r.overrideContextType &&
              (n = r.overrideContextType),
            "".concat(a, "-radio-").concat(n, "-autoflow")
          );
        },
        iu = (e, t) => {
          var a, i, r, n;
          let s =
            null === (a = t.state.currentContext.value) || void 0 === a
              ? void 0
              : a.data;
          if (s) {
            if (e === eR.A.Album) return ["album:".concat(s.meta.id)];
            if (e === eR.A.Artist) return ["artist:".concat(s.meta.id)];
            if (
              e === eR.A.Playlist &&
              "owner" in s.meta &&
              (null === (i = s.meta.owner) || void 0 === i ? void 0 : i.uid) &&
              "kind" in s.meta &&
              s.meta.kind
            )
              return [
                "playlist:"
                  .concat(
                    null === (r = s.meta.owner) || void 0 === r
                      ? void 0
                      : r.uid,
                    "_",
                  )
                  .concat(s.meta.kind),
              ];
            if (e === eR.A.Various) {
              if ("overrideAutoflowSeeds" in s && s.overrideAutoflowSeeds)
                return s.overrideAutoflowSeeds;
              let e =
                null === (n = t.state.queueState.currentEntity.value) ||
                void 0 === n
                  ? void 0
                  : n.entity.data.meta.id;
              return ["track:".concat(e)];
            }
          }
        };
      class id {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.afterContextEnd.tapPromise("AutoflowPlugin", () => {
            var e, a, i;
            let r =
              null === (e = t.state.currentContext.value) || void 0 === e
                ? void 0
                : e.data.type;
            return (
              (null === (a = t.state.currentContext.value) || void 0 === a
                ? void 0
                : a.data) &&
                "enableVariousAutoFlow" in t.state.currentContext.value.data &&
                (null === (i = t.state.currentContext.value) || void 0 === i
                  ? void 0
                  : i.data.enableVariousAutoFlow) &&
                (r = eR.A.Various),
              r && io.includes(r) && this.playAutoflow(t),
              Promise.resolve()
            );
          });
        }
        playAutoflow(e) {
          var t, a, i;
          let r =
            null === (t = e.state.currentContext.value) || void 0 === t
              ? void 0
              : t.data.type;
          (null === (a = e.state.currentContext.value) || void 0 === a
            ? void 0
            : a.data) &&
            "enableVariousAutoFlow" in e.state.currentContext.value.data &&
            (null === (i = e.state.currentContext.value) || void 0 === i
              ? void 0
              : i.data.enableVariousAutoFlow) &&
            (r = eR.A.Various);
          let n = iu(r, e),
            s = e.state.currentContext.value,
            o = Object.create(null != s ? s : null);
          if (!(r && n)) return;
          let l = this.factory.createContext({
            data: {
              type: eR.A.Vibe,
              meta: { id: (0, e1.$)(n) },
              seeds: n,
              from: il(r, e, this.platform),
              includeTracksInResponse: !0,
              parentContext: o,
            },
          });
          e.playContext({ context: l, loadContextMeta: !0 });
        }
        constructor({ platform: e, factory: t }) {
          (0, $._)(this, "platform", void 0),
            (0, $._)(this, "factory", void 0),
            (this.platform = e),
            (this.factory = t);
        }
      }
      class ic {
        setQuality(e) {
          switch (e) {
            case a7.n.HIGH_QUALITY:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = a7.n.HIGH_QUALITY);
              break;
            case a7.n.BALANCED:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = a7.n.BALANCED);
              break;
            case a7.n.EFFICIENT:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = a7.n.EFFICIENT);
              break;
            case a7.n.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = a7.n.PREVIEW);
          }
        }
        constructor(e) {
          (0, $._)(this, "qualityConfig", {
            lossless: new eG.wi(!1),
            hq: new eG.wi(!0),
            nq: new eG.wi(!0),
            lq: new eG.wi(!0),
            preview: new eG.wi(!0),
            smart_preview: new eG.wi(!1),
          }),
            (0, $._)(this, "quality", new eG.wi(a7.n.BALANCED)),
            this.setQuality(e);
        }
      }
      class ih extends aC {
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "GenerativeMediaProviderException"),
            Object.setPrototypeOf(this, ih.prototype);
        }
      }
      class im {
        getMediaSource(e) {
          return aJ(e.entity)
            ? this.getGenerativeSrc(e.entity.data).then((e) => ({ src: e }))
            : Promise.reject(
                new ih("Provided entity is not generative entity", {
                  code: F.E_UNSUITABLE_ENTITY_TYPE,
                }),
              );
        }
        getGenerativeSrc(e) {
          var t;
          return (null === (t = e.meta.stream) || void 0 === t ? void 0 : t.url)
            ? Promise.resolve(e.meta.stream.url)
            : Promise.reject(
                new ih("Failed to create generative src link", {
                  code: F.E_GET_MEDIA_SRC,
                }),
              );
        }
      }
      var ig = a(5257),
        ip = a(81979),
        iy = a(23879),
        iv = a(20470);
      function iE(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      class iS {
        getPreloadedFileInfo(e) {
          let { entity: t, disableCache: a = !1 } = e;
          if (
            !(a || a8(t, this.mediaSourceTtlMs, this.mediaConfigController)) &&
            t.mediaSourceData
          )
            return t.mediaSourceData.data;
        }
        getFileInfoFromResource(e) {
          let { trackId: t, quality: a, codecs: i, transports: r } = e,
            n = (0, ig.I)(),
            s = i.join(""),
            o = r.join(""),
            l = "".concat(n).concat(t).concat(a).concat(s).concat(o);
          return new Promise((e, o) => {
            (0, ig.U)({ data: l, secretKey: this.secretKey })
              .then((l) => {
                this.resource
                  .getFileInfo({
                    tsInSeconds: n,
                    trackId: t,
                    quality: a,
                    codecs: i,
                    transports: r,
                    sign: l,
                  })
                  .then((t) => {
                    e(t.downloadInfo);
                  })
                  .catch((e) => {
                    o(
                      new aT("Error in get-file-info request", {
                        code: F.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: t,
                          quality: a,
                          codecs: s,
                          causeAsObject: iE(e),
                        },
                      }),
                    );
                  });
              })
              .catch((e) => {
                o(
                  new aT("Error in creating sign for get-file-info request", {
                    code: F.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: t,
                      quality: a,
                      codecs: s,
                      causeAsObject: iE(e),
                    },
                  }),
                );
              });
          });
        }
        getFileInfo(e) {
          let {
            entity: t,
            disableCache: a = !1,
            codecs: i,
            quality: r,
            transports: n,
          } = e;
          if (this.variables.isMediaSourcePreloadEnabled)
            try {
              let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
              if (e) return Promise.resolve(e);
            } catch (e) {
              return Promise.reject(e);
            }
          return this.getFileInfoFromResource({
            trackId: t.data.meta.id,
            quality: r,
            codecs: i,
            transports: n,
          });
        }
        getMediaSource(e) {
          let { entity: t, disableCache: a = !1 } = e,
            i = (0, iy.E)({
              productQuality: this.mediaConfigController.quality.value,
              entity: t,
            }),
            r = (0, tr.Y)(t) ? ip.J.RAW : this.transport;
          return this.getFileInfo({
            entity: t,
            disableCache: a,
            quality: i,
            transports: [r],
            codecs: this.codecs,
          }).then((e) =>
            !this.variables.doRetryOnEncraw ||
            "error" in e ||
            iv.oW.includes(e.codec) ||
            e.transport !== ip.J.ENCRAW
              ? ((t.mediaSourceData = {
                  data: e,
                  loadingTime: performance.now(),
                }),
                this.createMediaSource({
                  downloadInfo: e,
                  trackId: t.data.meta.id,
                  quality: i,
                  codecs: this.codecs,
                }))
              : ((t.mediaSourceData = null),
                this.getFileInfo({
                  entity: t,
                  disableCache: a,
                  quality: i,
                  transports: [ip.J.RAW],
                  codecs: this.codecs,
                }).then(
                  (e) => (
                    (t.mediaSourceData = {
                      data: e,
                      loadingTime: performance.now(),
                    }),
                    this.createMediaSource({
                      downloadInfo: e,
                      trackId: t.data.meta.id,
                      quality: i,
                      codecs: this.codecs,
                    })
                  ),
                )),
          );
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e,
            a = (0, ig.I)(),
            i = (0, iy.E)({
              productQuality: this.mediaConfigController.quality.value,
              entities: t,
            }),
            r = this.codecs.join(""),
            n = t
              .reduce((e, t) => "".concat(e).concat(t.data.meta.id, ","), "")
              .slice(0, -1),
            s = t.some((e) => (0, tr.Y)(e)) ? ip.J.RAW : this.transport,
            o = "".concat(a).concat(n).concat(i).concat(r).concat(s);
          return new Promise((e, l) => {
            (0, ig.U)({ data: o, secretKey: this.secretKey })
              .then((o) => {
                this.resource
                  .getFileInfoBatch({
                    tsInSeconds: a,
                    trackIds: n,
                    quality: i,
                    codecs: this.codecs,
                    transports: [s],
                    sign: o,
                  })
                  .then((a) => {
                    for (let e of a.downloadInfos) {
                      let a = t.find((t) => t.data.meta.id === e.trackId);
                      a &&
                        (a.mediaSourceData = {
                          loadingTime: performance.now(),
                          data: e,
                        });
                    }
                    e(a.downloadInfos);
                  })
                  .catch((e) => {
                    l(
                      new aT("Error in get-file-info/batch request", {
                        code: F.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: n,
                          quality: i,
                          codecs: r,
                          causeAsObject: iE(e),
                        },
                      }),
                    );
                  });
              })
              .catch((e) => {
                l(
                  new aT("Error in creating sign for get-file-info request", {
                    code: F.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: n,
                      quality: i,
                      codecs: r,
                      causeAsObject: iE(e),
                    },
                  }),
                );
              });
          });
        }
        createMediaSource(e) {
          let { downloadInfo: t, trackId: a, codecs: i, quality: r } = e,
            n = i.join("");
          if ("error" in t)
            throw new aT("Error message in get-file-info response", {
              code: F.E_GET_MEDIA_SRC,
              data: { trackId: a, quality: r, codecs: n, mediaSource: t },
            });
          if (!t.urls[0])
            throw new aT("No urls in get-file-info response", {
              code: F.E_GET_MEDIA_SRC,
              data: { trackId: a, quality: r, codecs: n, mediaSource: t },
            });
          let s = "",
            o = iv.Jq[t.codec];
          return {
            src: o ? "".concat(t.urls[0]).concat(o) : t.urls[0],
            key: t.transport === ip.J.ENCRAW ? t.key : void 0,
          };
        }
        constructor(e) {
          var t, a;
          (0, $._)(this, "secretKey", void 0),
            (0, $._)(this, "resource", void 0),
            (0, $._)(this, "mediaConfigController", void 0),
            (0, $._)(this, "transport", void 0),
            (0, $._)(this, "codecs", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "mediaSourceTtlMs", void 0);
          let {
            resource: i,
            secretKey: r,
            mediaConfigController: n,
            transport: s,
            variables: o,
            mediaSourceTtlMs: l,
            codecs: u,
          } = e;
          (this.resource = i),
            (this.secretKey = r),
            (this.mediaConfigController = n),
            (this.transport = s),
            (this.codecs = u),
            (this.variables = {
              isMediaSourcePreloadEnabled:
                null !==
                  (t = null == o ? void 0 : o.isMediaSourcePreloadEnabled) &&
                void 0 !== t &&
                t,
              doRetryOnEncraw:
                null !== (a = null == o ? void 0 : o.doRetryOnEncraw) &&
                void 0 !== a &&
                a,
            }),
            (this.mediaSourceTtlMs = null != l ? l : 0);
        }
      }
      class ib {
        async getMediaSource(e) {
          return aJ(e.entity)
            ? this.generativeProvider.getMediaSource(e)
            : this.getFileInfoProvider.getMediaSource(e);
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e;
          return t.some((e) => aJ(e))
            ? Promise.reject(
                new aC(
                  "Can not use getMediaSourceBatch for generative entities",
                  { code: F.E_UNSUITABLE_ENTITY_TYPE },
                ),
              )
            : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
        }
        constructor(e) {
          (0, $._)(this, "generativeProvider", new im()),
            (0, $._)(this, "getFileInfoProvider", void 0),
            (this.getFileInfoProvider = new iS(e.getFileInfoProviderParams));
        }
      }
      class iP extends eT.y {
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "YaMusicEntityProviderException"),
            Object.setPrototypeOf(this, iP.prototype);
        }
      }
      class iA {
        async loadEntities(e) {
          let { trackIds: t } = (function (e) {
            let t = [];
            return (
              e.forEach((e) => {
                let { context: a, entity: i } = e,
                  r = i.data.meta.id,
                  n = "string" == typeof r && r.includes(":");
                if (!i.data.fromCurrentContext || n) {
                  t.push(i.data.meta.id);
                  return;
                }
                (null == a ? void 0 : a.data.type) === eR.A.Album &&
                  (r = "".concat(i.data.meta.id, ":").concat(a.data.meta.id)),
                  "albumId" in i.data.meta &&
                    i.data.meta.albumId &&
                    (r = ""
                      .concat(i.data.meta.id, ":")
                      .concat(i.data.meta.albumId)),
                  t.push(r);
              }, {}),
              { trackIds: t }
            );
          })(e);
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((t) => {
              let a = [];
              for (let i of t) {
                let t = e.find((e) =>
                  String(e.entity.data.meta.id).includes(String(i.id)),
                );
                t && a.push({ ...t.entity.data, type: eS.A.Unknown, meta: i });
              }
              return a;
            })
            .catch((e) => {
              throw new iP("Failed to get entities meta", { cause: iE(e) });
            });
        }
        constructor(e) {
          (0, $._)(this, "resource", void 0);
          let { httpClient: t, config: a } = e;
          this.resource = new e3.H(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
      }
      var i_ = a(35941),
        iN = a(14094);
      (J || (J = {})).MAIN = "MAIN";
      class iC {
        afterPlayHandler(e) {
          return (this.activePlayback.value = e), Promise.resolve();
        }
        beforePlayHandler(e) {
          return this.activePlayback.value && this.activePlayback.value !== e
            ? this.activePlayback.value.pause()
            : Promise.resolve();
        }
        getPlayback(e) {
          if (e) {
            let t = this.playbacks.get(e);
            if (t) return t;
          }
          let t = this.playbacks.get(J.MAIN);
          if (void 0 !== t) return t;
          throw new eT.y("MAIN playback was not created", {
            code: "NO_MAIN_PLAYBACK",
          });
        }
        checkPlaybackBlockingStatus() {
          var e, t;
          let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : J.MAIN,
            i =
              null === (e = this.activePlayback.value) || void 0 === e
                ? void 0
                : e.getId(),
            r = i === a;
          return ((null === (t = this.activePlayback.value) || void 0 === t
            ? void 0
            : t.isBlocking) ||
            r) &&
            !r
            ? { status: iN.pr.BLOCKED, blockingPlaybackId: i }
            : { status: iN.pr.UNBLOCKED };
        }
        callIfUnblocked(e, t) {
          let { status: a, blockingPlaybackId: i } =
            this.checkPlaybackBlockingStatus(t);
          return a === iN.pr.UNBLOCKED
            ? e()
            : (this.getPlayback(
                t,
              ).hooks.afterPlaybackCheckBlockingStatus.promise({
                status: a,
                blockingPlaybackId: i,
              }),
              Promise.resolve());
        }
        createPlayback(e, t) {
          if (!this.playbacks.has(e)) {
            let a = new eE.Vb({
              id: e,
              isBlocking: t.isBlocking || !1,
              factory: t.factory,
              entityProvider: t.entityProvider,
              mediaPlayerParams: t.mediaPlayerParams,
              hooks: (0, iN.Hu)(),
              playbackConfig: t.playbackConfig,
              variables: t.variables,
            });
            this.playbacks.set(e, a),
              a.hooks.afterMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(a),
              ),
              a.hooks.beforeMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(a),
              ),
              a.hooks.afterMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(a),
              ),
              a.hooks.beforeMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(a),
              );
          }
        }
        constructor() {
          (0, $._)(this, "activePlayback", new eG.wi(null)),
            (0, $._)(this, "playbacks", new Map());
        }
      }
      class iT {
        get state() {
          return this.playbackController.getPlayback().state;
        }
        getState(e) {
          return this.playbackController.getPlayback(e).state;
        }
        playContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            let { contextData: i } = e,
              r = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .playContext({
                    context: r,
                    entitiesData: e.entitiesData,
                    loadContextMeta: e.loadContextMeta,
                    queueParams: e.queueParams,
                  })
                  .catch((e) => {
                    a.hooks.afterError.promise(e);
                  }),
              t,
            );
          } catch (e) {
            return a.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        setContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            let { contextData: i } = e,
              r = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .setContext({
                    context: r,
                    entitiesData: e.entitiesData,
                    loadContextMeta: e.loadContextMeta,
                    queueParams: e.queueParams,
                  })
                  .catch((e) => {
                    a.hooks.afterError.promise(e);
                  }),
              t,
            );
          } catch (e) {
            return a.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        restartContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .restartContext({
                  playAfterRestart: e.playAfterRestart,
                  entitiesData: e.entitiesData,
                  queueParams: e.queueParams,
                })
                .catch((e) => {
                  a.hooks.afterError.promise(e);
                }),
            t,
          );
        }
        play(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.play().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        stop(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.stop().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        pause(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.pause().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        resume(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.resume().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        setProgress(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        setVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        setSpeed(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)),
            t,
          );
        }
        slideForward(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .slideForward(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        slideBackward(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .slideBackward(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        increaseVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .increaseVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        decreaseVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .decreaseVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        moveForward(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.moveForward().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        moveBackward(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.moveBackward().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        setEntityByIndex(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setEntityByIndex(e).catch((e) => {
                a.hooks.afterError.promise(e);
              }),
            t,
          );
        }
        togglePause(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.togglePause().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        toggleShuffle(e) {
          let t = this.playbackController.getPlayback(e);
          try {
            this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
          } catch (e) {
            t.hooks.afterError.promise(e);
          }
        }
        setShuffle(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
          } catch (e) {
            a.hooks.afterError.promise(e);
          }
        }
        bindPlayer(e) {
          this.playbackController.getPlayback(e).bindPlayer();
        }
        unbindPlayer(e) {
          this.playbackController.getPlayback(e).unbindPlayer();
        }
        setRepeatMode(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            this.playbackController.callIfUnblocked(
              () => a.setRepeatMode(e),
              t,
            );
          } catch (e) {
            a.hooks.afterError.promise(e);
          }
        }
        remove(e) {
          let { positions: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.remove(t, i), a);
        }
        inject(e) {
          let { entitiesData: t, position: a, playbackId: i, silent: r } = e,
            n = this.playbackController.getPlayback(i);
          this.playbackController.callIfUnblocked(() => n.inject(t, a, r), i);
        }
        injectNext(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.injectNext(t, i), a);
        }
        injectLast(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.injectLast(t, i), a);
        }
        registerMediaPlayer(e) {
          let { mediaPlayerParams: t, playbackId: a } = e;
          this.playbackController.getPlayback(a).registerMediaPlayer(t);
        }
        constructor(e) {
          if (
            ((0, $._)(this, "factory", void 0),
            (0, $._)(this, "playbackController", void 0),
            (this.factory = e.factory),
            (this.playbackController = e.playbackController),
            this.playbackController.createPlayback(J.MAIN, {
              factory: e.factory,
              mediaPlayerParams: e.mediaPlayerParams,
              entityProvider: e.entityProvider,
              playbackConfig: e.playbackConfig,
              variables: e.variables,
            }),
            e.plugins)
          ) {
            let t = this.playbackController.getPlayback(J.MAIN);
            for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
          }
        }
      }
      var iI = a(59033),
        ik = a(38593),
        iD = a(55196),
        iL = a(35308),
        iR = a(32049),
        iV = a(58997),
        ix = a(29778);
      let iG = (e) => {
        let { audioLoader: t, children: a } = e;
        return (0, Z.use)(t), a;
      };
      var iO = a(43897),
        iw = a(60521);
      let iM = (e) => {
          let { children: t } = e,
            a = (0, iV.wdp)(),
            [i] = (0, Z.useState)(() =>
              iw.wi.create({ isEnabled: !1, modal: {} }, a),
            );
          return (0, X.jsx)(iw.gp.Provider, { value: i, children: t });
        },
        ij = null,
        iU = null,
        iq = null,
        iF = null,
        iB = null,
        iY = !1,
        iW = [
          iV.BUb.YmPlayerQuality,
          iV.BUb.YmPlayerShuffle,
          iV.BUb.YmPlayerPrevVolume,
          iV.BUb.YmPlayerVolume,
          iV.BUb.YmPlayerRepeatMode,
        ],
        iz = (e) => {
          let { children: t, hostTld: i, browserInfo: r, quality: n } = e,
            s = (0, iV.uK4)(),
            {
              sonataState: o,
              experiments: l,
              library: u,
              trailer: d,
              user: c,
            } = (0, iV.oR4)(),
            { isPassToProduct: h, isFreemium: m } = (0, iV.NMB)(),
            g = (0, iV.wLl)(),
            p = s.get(iV.V0J),
            y = s.get(iV.xit),
            { language: v } = (0, iV.ZSk)(),
            E = (0, iV.ozq)(),
            f = (0, ik.s)(),
            S = l.checkExperiment(iV.peG.WebNextYaspCore, "on"),
            b = !c.isAuthorized || h || m,
            P = (0, Z.useMemo)(() => {
              let e = r.name || "Browser",
                t = (0, iV.bop)() || r.version || "";
              return (
                r.name,
                { title: "Music Desktop App", appName: e, appVersion: t }
              );
            }, [r.name, r.version]),
            A = (0, Z.useMemo)(() => (ij || (ij = new ic(n)), ij), [n]),
            _ = "Safari" !== r.name && "iOS" !== r.OSFamily,
            N = (0, Z.useMemo)(
              () =>
                iq ||
                (iq = new td({ useAnalyser: _, useEqualizer: _, useFade: !1 })),
              [_],
            ),
            C = (0, Z.useMemo)(() => {
              if (iB) return iB;
              let e = s.get(iV.ES6),
                t = s.get(iV.U5t),
                a = l.checkExperiment(iV.peG.WebNextAllowContainerCodecs, "on"),
                { transport: i, codecs: n } = (0, iV.Rbj)(r, a, S);
              return (iB = new ib({
                getFileInfoProviderParams: {
                  resource: e,
                  secretKey: t.player.secretKey,
                  mediaConfigController: A,
                  transport: i,
                  codecs: n,
                  variables: {
                    get isMediaSourcePreloadEnabled() {
                      return l.checkExperiment(
                        iV.peG.WebNextGetFileInfoPreload,
                        "on",
                      );
                    },
                    get doRetryOnEncraw() {
                      return S;
                    },
                  },
                  mediaSourceTtlMs:
                    t.player.configVariablesMainPlayback.mediaSourceTtlMs,
                },
              }));
            }, [s, l, S, A, r]),
            T = (0, Z.useMemo)(() => {
              if (!C) return null;
              if (iU) return iU;
              let e = s.get(iV.U5t),
                t = s.get(iV.pIE)({ credentials: "include" }),
                a =
                  !!e.dev.panel && !!p.get(iV.BUb.EnableMetricsPluginDebugMode),
                {
                  resources: n,
                  player: {
                    gateway: { prefixUrl: o, headers: h },
                    configVariablesMainPlayback: T,
                    configVariablesTrailerPlayback: I,
                  },
                  ynisonConnectionConfig: k,
                } = e,
                { timeouts: D, retryPolicyConfig: L } = n.musicExternalApi,
                R = new ti({
                  contextFactoryParams: {
                    httpClient: t,
                    logger: g,
                    config: {
                      params: {
                        common: {
                          client: (0, iR.$)(),
                          device: (0, iV.qcA)(),
                          language: v,
                          oauth: y.token,
                        },
                      },
                      retryPolicyConfig: L,
                      resourceTimeoutsConfig: D,
                      gateway: {
                        prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                        headers: h,
                      },
                      contextVariables: {
                        vibe: {
                          get sendFeedbackToSessionTracks() {
                            return l.checkExperiment(
                              iV.peG.WebNextWaveNewFeedbacks,
                              "on",
                            );
                          },
                        },
                      },
                    },
                  },
                  entityFactoryParams: { likeStore: u },
                });
              iF = new ac({
                factory: R,
                deviceConfig: P,
                connectionConfig: k,
                variables: {
                  get enableYnisonConnection() {
                    return (
                      l.checkExperiment(iV.peG.WebNextEnableYnison, "on") && !b
                    );
                  },
                },
                oauth: y.token,
              });
              let V = new iA({
                  httpClient: t,
                  config: {
                    params: {
                      common: {
                        client: (0, iR.$)(),
                        device: (0, iV.qcA)(),
                        language: v,
                        oauth: y.token,
                      },
                    },
                    retryPolicyConfig: L,
                    timeouts: D.tracksResource,
                    gateway: {
                      prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                      headers: h,
                    },
                  },
                }),
                x = new iC(),
                G = new ah(f),
                O = [
                  new aE(),
                  new af(),
                  new aS(),
                  new aK({
                    httpClient: t,
                    playsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iR.$)(),
                          device: (0, iV.qcA)(),
                          language: v,
                          oauth: y.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                        headers: h,
                      },
                    },
                    variables: {
                      get disableSendPlaysOnTrackStart() {
                        return l.checkExperiment(
                          iV.peG.WebNextDisableSendPlaysOnTrackStart,
                          "on",
                        );
                      },
                      get enableLocalStoredPlaysData() {
                        return l.checkExperiment(
                          iV.peG.WebNextPlayAudioHeartBeat,
                          "on",
                        );
                      },
                    },
                  }),
                  new a$({ browserName: r.name, browserVersion: r.version }),
                  new a0({ logger: g }),
                  new a5(A.quality),
                  new a3({
                    httpClient: t,
                    streamsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iR.$)(),
                          device: (0, iV.qcA)(),
                          language: v,
                          oauth: y.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                        headers: h,
                      },
                    },
                    variables: {
                      get isEnabled() {
                        return c.isAuthorized;
                      },
                    },
                  }),
                  new a6({
                    mediaConfigController: A,
                    transport: G,
                    variables: {
                      get enableDebugMode() {
                        return a;
                      },
                    },
                  }),
                  new ie({
                    mediaProvider: C,
                    mediaConfigController: A,
                    config: {
                      checkForLoadWindowSize: T.checkForLoadWindowSize,
                      loadWindowSize: T.loadWindowSize,
                      mediaSourceTtlMs: T.mediaSourceTtlMs,
                    },
                    variables: {
                      get isMediaSourcePreloadEnabled() {
                        return l.checkExperiment(
                          iV.peG.WebNextGetFileInfoPreload,
                          "on",
                        );
                      },
                    },
                  }),
                  new it({
                    onTrailerPaused: () => {
                      d.setIsManuallyPaused(!0);
                    },
                    onTrailerPlaying: () => {
                      d.setIsManuallyPaused(!1);
                    },
                    playbackController: x,
                    trailerPlaybackParams: {
                      id: iV.jiA.TRAILER,
                      plugins: [
                        new td({ useFade: _, useSmartPreview: !0 }),
                        new aE(),
                        new a0({ logger: g }),
                        new aS(),
                        new a6({
                          mediaConfigController: A,
                          transport: G,
                          variables: {
                            get enableDebugMode() {
                              return a;
                            },
                          },
                        }),
                        new aK({
                          httpClient: t,
                          playsResourceConfig: {
                            params: {
                              common: {
                                client: (0, iR.$)(),
                                device: (0, iV.qcA)(),
                                language: v,
                                oauth: y.token,
                              },
                            },
                            gateway: {
                              prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                              headers: h,
                            },
                          },
                          variables: {
                            get disableSendPlaysOnTrackStart() {
                              return l.checkExperiment(
                                iV.peG.WebNextDisableSendPlaysOnTrackStart,
                                "on",
                              );
                            },
                            get enableLocalStoredPlaysData() {
                              return l.checkExperiment(
                                iV.peG.WebNextPlayAudioHeartBeat,
                                "on",
                              );
                            },
                          },
                          storePlaysProgressIntervalMs: 5e3,
                        }),
                        new ia({
                          variables: {
                            get enableSingleTabPlayback() {
                              return l.checkExperiment(
                                iV.peG.WebNextSingleTabPlayback,
                                "on",
                              );
                            },
                          },
                        }),
                      ],
                      factory: R,
                      mediaPlayerParams: S
                        ? void 0
                        : {
                            core: new ey(),
                            mediaProvider: C,
                            contentType: eb.z.AUDIO,
                          },
                      entityProvider: V,
                      playbackConfig: {
                        mediaElementErrorReloadCount:
                          I.mediaElementErrorReloadCount,
                        windowSize: I.windowSize,
                        setupQueueWindowSize: I.setupQueueWindowSize,
                      },
                      variables: {
                        get useMultipleCores() {
                          return S;
                        },
                      },
                    },
                  }),
                  iF,
                  new is({
                    advertModule: E,
                    httpClient: t,
                    afterTrackResourceConfig: {
                      params: {
                        common: {
                          client: (0, iR.$)(),
                          device: (0, iV.qcA)(),
                          language: v,
                          oauth: y.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                        headers: h,
                      },
                    },
                    adsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iR.$)(),
                          device: (0, iV.qcA)(),
                          language: v,
                          oauth: y.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, ev.zJ)(o, i, iV.MgS),
                        headers: h,
                      },
                    },
                    variables: {
                      get disabled() {
                        return c.hasPlus;
                      },
                    },
                  }),
                  new ia({
                    variables: {
                      get enableSingleTabPlayback() {
                        return l.checkExperiment(
                          iV.peG.WebNextSingleTabPlayback,
                          "on",
                        );
                      },
                    },
                  }),
                ];
              return (
                null == E ||
                  E.createAudioAdvertPlayback({
                    playbackController: x,
                    mediaPlayerParams: S
                      ? void 0
                      : {
                          core: new ey(),
                          mediaProvider: new iV.FOM(),
                          contentType: eb.z.AUDIO,
                        },
                    variables: {
                      get useMultipleCores() {
                        return S;
                      },
                    },
                  }),
                N && O.push(N),
                c.isAuthorized &&
                  !m &&
                  O.push(new id({ factory: R, platform: "desktop" })),
                (iU = new iT({
                  factory: R,
                  playbackController: x,
                  plugins: O,
                  entityProvider: V,
                  mediaPlayerParams: S
                    ? void 0
                    : {
                        contentType: eb.z.AUDIO,
                        core: new ey(),
                        mediaProvider: C,
                      },
                  playbackConfig: {
                    mediaElementErrorReloadCount:
                      T.mediaElementErrorReloadCount,
                    windowSize: T.windowSize,
                    setupQueueWindowSize: T.setupQueueWindowSize,
                  },
                  variables: {
                    get useMultipleCores() {
                      return S;
                    },
                  },
                }))
              );
            }, [
              s,
              p,
              g,
              v,
              i,
              u,
              c.isAuthorized,
              c.hasPlus,
              A,
              f,
              r.name,
              r.version,
              _,
              P,
              E,
              N,
              m,
              l,
              d,
              C,
              S,
              y.token,
              b,
            ]);
          (0, iL.A4)(T);
          let I = (0, iD._Z)(T),
            k = (0, Z.useCallback)(() => {
              let e = p.get(iV.BUb.YmPlayerVolume);
              "number" == typeof e
                ? (null == T || T.setVolume(e),
                  null == T || T.setVolume(e, iV.jiA.TRAILER),
                  o.setVolume(e))
                : (null == T || T.setVolume(1),
                  null == T || T.setVolume(1, iV.jiA.TRAILER),
                  o.setVolume(1));
            }, [p, T, o]);
          (0, Z.useEffect)(() => {
            if (!S || !T || !C || iY) return;
            let e = s.get(iV.U5t);
            a.e(9489)
              .then(a.bind(a, 49489))
              .then((t) => {
                let {
                    YaspCoreAdapter: a,
                    YaspLoader: i,
                    HlsCoreAdapter: r,
                  } = t,
                  n = new i({ logger: g }),
                  s = new a(),
                  o = new r({
                    hlsErrorRetryLimit: e.player.hlsErrorRetryLimit,
                  }),
                  l = new a(),
                  u = null;
                T.registerMediaPlayer({
                  mediaPlayerParams: {
                    core: s,
                    mediaProvider: C,
                    contentType: eb.z.AUDIO,
                  },
                }),
                  T.registerMediaPlayer({
                    mediaPlayerParams: {
                      core: o,
                      mediaProvider: C,
                      contentType: eb.z.HLS,
                    },
                  }),
                  T.registerMediaPlayer({
                    mediaPlayerParams: {
                      core: l,
                      mediaProvider: C,
                      contentType: eb.z.AUDIO,
                    },
                    playbackId: iV.jiA.TRAILER,
                  }),
                  E &&
                    ((u = new a()),
                    T.registerMediaPlayer({
                      mediaPlayerParams: {
                        core: u,
                        contentType: eb.z.AUDIO,
                        mediaProvider: new iV.FOM(),
                      },
                      playbackId: iV.jiA.ADVERT,
                    })),
                  k(),
                  n.loadYasp().then(() => {
                    n.attachYasp(s.source),
                      n.attachYasp(l.source),
                      u && n.attachYasp(u.source);
                  }),
                  (iY = !0);
              });
          }, [l, E, C, T, g, S, s, k]);
            const sendPlayerStateDefault = (ve) => {
                (0, iL.Pt)({
                    status: ve.state.playerState.status.value,
                    isPlaying: ve.state.playerState.status.value === eE.Xz.PLAYING,
                    canMoveForward:
                    ve.state.currentContext.value?.availableActions.moveForward
                        .value,
                    canMoveBackward:
                    ve.state.currentContext.value?.availableActions.moveBackward
                        .value,
                    track:
                    ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                    progress: ve.state.playerState.progress.value?.position,
                    availableActions: {
                        moveBackward:
                        ve.state.currentContext.value?.availableActions.moveBackward
                            .value,
                        moveForward:
                        ve.state.currentContext.value?.availableActions.moveForward
                            .value,
                        repeat:
                        ve.state.currentContext.value?.availableActions.repeat.value,
                        shuffle:
                        ve.state.currentContext.value?.availableActions.shuffle.value,
                        speed:
                        ve.state.currentContext.value?.availableActions.speed.value,
                    },
                    actionsStore: {
                        repeat: ve.state.queueState.repeat.value,
                        shuffle: ve.state.queueState.shuffle.value,
                        isLiked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                        isDisliked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                    },
                });
            };
            const sendPlayerStatePlaying = (ve) => {
                (0, iL.Pt)({
                    status: eE.Xz.PLAYING,
                    isPlaying: true,
                    canMoveForward:
                    ve.state.currentContext.value?.availableActions.moveForward
                        .value,
                    canMoveBackward:
                    ve.state.currentContext.value?.availableActions.moveBackward
                        .value,
                    track:
                    ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                    progress: ve.state.playerState.progress.value?.position,
                    availableActions: {
                        moveBackward:
                        ve.state.currentContext.value?.availableActions.moveBackward
                            .value,
                        moveForward:
                        ve.state.currentContext.value?.availableActions.moveForward
                            .value,
                        repeat:
                        ve.state.currentContext.value?.availableActions.repeat.value,
                        shuffle:
                        ve.state.currentContext.value?.availableActions.shuffle.value,
                        speed:
                        ve.state.currentContext.value?.availableActions.speed.value,
                    },
                    actionsStore: {
                        repeat: ve.state.queueState.repeat.value,
                        shuffle: ve.state.queueState.shuffle.value,
                        isLiked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                        isDisliked:
                            ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                                ve.state.queueState.currentEntity.value?.entity.entityData
                                    .meta.id,
                            ),
                    },
                });
            };

            (0, Z.useEffect)(() => {
              let e, t, a, i, r;
              let n =
                  null == T
                    ? void 0
                    : T.state.queueState.currentEntity.onChange((e) => {
                        var t;
                        let a = null == e ? void 0 : e.context.data.type,
                          i = null == e ? void 0 : e.context.data.meta.id;
                        if (
                          (o.setEntityMeta(
                            null !== (t = null == e ? void 0 : e.entity) &&
                              void 0 !== t
                              ? t
                              : null,
                          ),
                          null == e ? void 0 : e.context.data)
                        ) {
                          if ("filter" in e.context.data) {
                            let t = null == e ? void 0 : e.context.data.filter;
                            o.setPlaylistFilter(t);
                          }
                          (null == e ? void 0 : e.context.data.type) ===
                            eR.A.Vibe && o.setPlaylistFilter(void 0);
                        }
                        a && o.setContextType(a), i && o.setContextId(i);
                        sendPlayerStatePlaying(T);
                        let r = T.state.queueState.index.value;
                        T.state.queueState.order.value.length > 0 &&
                          "number" == typeof r &&
                          o.setCurrentlyPlayingTrackIndex(r),
                          I();
                      }),
                s =
                  null == T
                    ? void 0
                    : T.state.queueState.order.onChange((e) => {
                        let t = T.state.queueState.index.value;
                        if (e) {
                          let a = e[t];
                          T.state.queueState.order.value.length > 0 &&
                            "number" == typeof a &&
                            o.setCurrentlyPlayingTrackIndex(a);
                        }
                      }),
                l =
                  null == T
                    ? void 0
                    : T.state.playerState.status.onChange((e) => {
                        e &&
                          (o.setStatus(e), sendPlayerStateDefault(T));
                      }),
                  seekTracker =
                      null == T
                          ? void 0
                          : T.state.playerState.event.onChange(() => {
                              if (
                                  T.state.playerState.event.value === eE.KX.SET_PROGRESS
                              ) {
                                  sendPlayerStateDefault(T);
                              }
                          }),
                  u =
                  null == T
                    ? void 0
                    : T.state.currentContext.onChange(() => {
                        var n, s, l, u, d, c;
                        null == e || e(),
                          null == t || t(),
                          null == a || a(),
                          null == i || i(),
                          null == r || r();
                        let h =
                          null !== (c = p.get(iV.BUb.YmPlayerRepeatMode)) &&
                          void 0 !== c
                            ? c
                            : i_.zq.NONE;
                        T.setRepeatMode(h);
                        let m = !!p.get(iV.BUb.YmPlayerShuffle);
                        T.setShuffle(m),
                          (e =
                            null == T
                              ? void 0
                              : null === (n = T.state.currentContext.value) ||
                                  void 0 === n
                                ? void 0
                                : n.availableActions.moveBackward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == T
                                        ? void 0
                                        : null ===
                                              (e =
                                                T.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveBackward
                                              .value);
                                      o.setCanMoveBackward(t),
                                          sendPlayerStateDefault(T);
                                    },
                                  )),
                          (t =
                            null == T
                              ? void 0
                              : null === (s = T.state.currentContext.value) ||
                                  void 0 === s
                                ? void 0
                                : s.availableActions.moveForward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == T
                                        ? void 0
                                        : null ===
                                              (e =
                                                T.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveForward
                                              .value);
                                      o.setCanMoveForward(t),
                                          sendPlayerStateDefault(T);
                                    },
                                  )),
                          (a =
                            null == T
                              ? void 0
                              : null === (l = T.state.currentContext.value) ||
                                  void 0 === l
                                ? void 0
                                : l.availableActions.repeat.onChange(() => {
                                    var e;
                                    let t =
                                      null == T
                                        ? void 0
                                        : null ===
                                              (e =
                                                T.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.repeat.value;
                                    "boolean" == typeof t &&
                                      o.setCanChangeRepeatMode(t);
                                        sendPlayerStateDefault(T);
                                  })),
                          (i =
                            null == T
                              ? void 0
                              : null === (u = T.state.currentContext.value) ||
                                  void 0 === u
                                ? void 0
                                : u.availableActions.shuffle.onChange(() => {
                                    var e;
                                    let t =
                                      null == T
                                        ? void 0
                                        : null ===
                                              (e =
                                                T.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.shuffle.value;
                                    "boolean" == typeof t && o.setCanShuffle(t);
                                        sendPlayerStateDefault(T);
                                  })),
                          (r =
                            null == T
                              ? void 0
                              : null === (d = T.state.currentContext.value) ||
                                  void 0 === d
                                ? void 0
                                : d.availableActions.speed.onChange(() => {
                                    var e;
                                    let t =
                                      null == T
                                        ? void 0
                                        : null ===
                                              (e =
                                                T.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.speed.value;
                                    "boolean" == typeof t &&
                                      (o.setCanSpeed(t),
                                      !t && T && T.setSpeed(1));
                                  }));
                      }),
                d =
                  null == T
                    ? void 0
                    : T.state.playerState.volume.onChange(() => {
                        let e = T.state.playerState.volume.value;
                        "number" == typeof e && o.setVolume(e);
                      }),
                c =
                  null == T
                    ? void 0
                    : T.state.queueState.repeat.onChange(() => {
                        let e = T.state.queueState.repeat.value;
                        o.setRepeatMode(e),
                          p.set(iV.BUb.YmPlayerRepeatMode, e, { expires: 365 });
                          sendPlayerStateDefault(T);
                      }),
                h =
                  null == T
                    ? void 0
                    : T.state.queueState.shuffle.onChange(() => {
                        let e = T.state.queueState.shuffle.value;
                        o.setShuffle(e),
                          p.set(iV.BUb.YmPlayerShuffle, e, { expires: 365 });
                          sendPlayerStateDefault(T);
                      });
              return (
                k(),
                () => {
                  null == n || n(),
                    null == s || s(),
                    null == l || l(),
                  null == seekTracker || seekTracker(),
                    null == u || u(),
                    null == d || d(),
                    null == c || c(),
                    null == h || h();
                }
              );
            }, [T, o, p, I, l, k, S]);
          let D = (0, Z.useCallback)(() => {
            if (!c.isAuthorized || h) return a7.n.PREVIEW;
            if (m) return a7.n.EFFICIENT;
            let e = p.get(iV.BUb.YmPlayerQuality);
            if (e) {
              if (Object.values(iV.qql).includes(e)) {
                let t = (0, iV.RE8)(e);
                return p.set(iV.BUb.YmPlayerQuality, t, { expires: 365 }), t;
              }
              return e;
            }
            return (
              p.set(iV.BUb.YmPlayerQuality, a7.n.BALANCED, { expires: 365 }),
              a7.n.BALANCED
            );
          }, [p, h, m, c.isAuthorized]);
          return (
            (0, Z.useEffect)(() => {
              A.setQuality(D()), o.setQuality(D());
            }, [A, o, D]),
            (0, Z.useEffect)(() => {
              (0, iI.iJ)(p, iW);
            }, [p]),
            (0, X.jsx)(iV.Xe$.Provider, {
              value: A,
              children: (0, X.jsx)(iV.R8o.Provider, {
                value: T,
                children: (0, X.jsx)(iV.yZB.Provider, {
                  value: N,
                  children: (0, X.jsx)(iV.YB2.Provider, {
                    value: iF,
                    children: (0, X.jsxs)(iM, {
                      children: [(0, X.jsx)(iO.WebAudioInitializer, {}), t],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        iH = (0, Q.Pi)((e) => {
          let { children: t, hostTld: a, browserInfo: i, quality: r } = e,
            n = (0, iV.Klg)();
          return (0, X.jsx)(Z.Suspense, {
            fallback: (0, X.jsx)(ix.b2, {}),
            children: (0, X.jsx)(iG, {
              audioLoader: n,
              children: (0, X.jsx)(iz, {
                hostTld: a,
                browserInfo: i,
                quality: r,
                children: t,
              }),
            }),
          });
        });
    },
    75517: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return tv;
          },
        });
      var i,
        r,
        n,
        s,
        o = a(65301),
        l = a(96233),
        u = a(2685),
        d = a(99678),
        c = a(91207);
      a(4520);
      var h = a(58997),
        m = a(42982),
        g = a(35941),
        p = a(86348),
        y = a(73192),
        v = a(31316);
      let E = {
        experiments: {
          loadingState: h.Gui.IDLE,
          experiments: {},
          overwrittenExperiments: {},
        },
        disclaimers: {
          loadingState: h.Gui.IDLE,
          recentDisclaimersRequestTS: 0,
        },
        user: {
          account: { loadingState: h.Gui.IDLE },
          settings: { loadingState: h.Gui.IDLE },
        },
        wizard: {
          loadingState: h.Gui.IDLE,
          modal: {},
          savedLikedArtists: [],
          likedArtists: [],
          unlikedArtists: [],
        },
        collection: {
          albums: {
            loadingState: h.Gui.IDLE,
            upcomingAlbumsLoadingState: h.Gui.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: h.Gui.IDLE, items: [] },
          playlistsLiked: { loadingState: h.Gui.IDLE, items: [] },
          artists: {
            loadingState: h.Gui.IDLE,
            loadingStateTopArtists: h.Gui.IDLE,
            items: [],
            itemsTopArtists: [],
          },
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE },
          },
          shelf: {
            recentlyPlayed: { loadingState: h.Gui.IDLE },
            newEpisodes: { loadingState: h.Gui.IDLE },
            liked: { loadingState: h.Gui.IDLE },
          },
          nonMusicLiked: { loadingState: h.Gui.IDLE, items: [] },
          dislikes: {
            artists: { loadingState: h.Gui.IDLE },
            tracks: { loadingState: h.Gui.IDLE },
          },
        },
        main: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE },
          },
        },
        nonMusic: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE },
          },
          albums: { loadingState: h.Gui.IDLE },
          categorySubpage: { loadingState: h.Gui.IDLE },
          categoryPlaylistsSubpage: { loadingState: h.Gui.IDLE },
        },
        kids: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE },
          },
        },
        settings: {
          layout: null,
          isLandscape: !1,
          isMobileLandscapeHeight: !1,
        },
        currentClipInfo: {
          clipLoadingState: h.Gui.IDLE,
          creditsLoadingState: h.Gui.IDLE,
          id: null,
          clip: null,
          credits: null,
          modal: {},
        },
        currentTrackInfo: {
          trackLoadingState: h.Gui.IDLE,
          creditsLoadingState: h.Gui.IDLE,
          descriptionLoadingState: h.Gui.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
          modal: {},
        },
        trackLyrics: {
          loadingState: h.Gui.IDLE,
          lyrics: null,
          lyricId: null,
          externalLyricId: null,
          track: null,
          modal: {},
        },
        album: {
          loadingState: h.Gui.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          allTracksUnfinished: !1,
          donations: { loadingState: h.Gui.IDLE, items: [] },
          latestGenreAlbums: { loadingState: h.Gui.IDLE, items: [] },
          otherArtistAlbums: { loadingState: h.Gui.IDLE, items: [] },
          relatedContent: { loadingState: h.Gui.IDLE, items: [] },
        },
        artist: {
          loadingState: h.Gui.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          clips: [],
          fullTracksListSubpage: { loadingState: h.Gui.IDLE },
          albumsSubpage: { loadingState: h.Gui.IDLE },
          concertsSubpage: { loadingState: h.Gui.IDLE },
          similarArtistsSubPage: { loadingState: h.Gui.IDLE },
          familiarInfo: { loadingState: h.Gui.IDLE },
          familiarSubpage: { loadingState: h.Gui.IDLE },
        },
        libraryAllIds: {
          loadingState: h.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        librarySync: {
          loadingState: h.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: p.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: g.zq.NONE,
          quality: m.n.BALANCED,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: h.Gui.IDLE,
          meta: null,
          items: [],
          initialItems: [],
          similarPlaylists: [],
          filters: { loadingState: h.Gui.IDLE },
          shouldSendEventOnTabOpened: !0,
          editorFeature: {
            shouldShowDuplicate: !1,
            shouldShowGenre: !1,
            shouldShowMajor: !1,
            colorMajorMap: {},
            duplicate: {},
          },
          search: { loadingState: h.Gui.IDLE, text: "" },
        },
        slides: {
          userSlidesLoadingState: h.Gui.IDLE,
          artistSlidesLoadingState: h.Gui.IDLE,
          podcastSlidesLoadingState: h.Gui.IDLE,
          userItems: [],
          artistItems: [],
          podcastItems: [],
          isMuted: !1,
        },
        vibe: {
          getLastLoadingState: h.Gui.IDLE,
          vibeResetLoadingState: h.Gui.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: h.Gui.IDLE,
          results: [],
          historyPage: { loadingState: h.Gui.IDLE, items: [] },
          mixes: { loadingState: h.Gui.IDLE, items: [] },
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE },
          },
          history: { loadingState: h.Gui.IDLE },
        },
        vibeSettings: { loadingState: h.Gui.IDLE },
        pinsCollection: { loadingState: h.Gui.IDLE, index: {} },
        navbar: { isSentOpenedAnalytics: !1 },
        genre: {
          loadingState: h.Gui.IDLE,
          albumsSubpage: { loadingState: h.Gui.IDLE },
          artistsSubpage: { loadingState: h.Gui.IDLE },
          playlistsSubpage: { loadingState: h.Gui.IDLE },
        },
        genres: { title: null, loadingState: h.Gui.IDLE, items: [] },
        mixes: { loadingState: h.Gui.IDLE, items: [] },
        tag: {
          tagLoadingState: h.Gui.IDLE,
          playlistsLoadingState: h.Gui.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          tracksSubPage: { loadingState: h.Gui.IDLE, items: [] },
          podcastsSubPage: { loadingState: h.Gui.IDLE, items: [] },
        },
        post: { loadingState: h.Gui.IDLE },
        landingBlockEntities: { loadingState: h.Gui.IDLE },
        contextMenuPlaylists: { loadingState: h.Gui.IDLE, items: [] },
        musicHistory: { loadingState: h.Gui.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: h.Gui.IDLE },
        myMusic: { downloadedTracks: { loadingState: h.Gui.IDLE } },
        trailer: {
          loadingState: h.Gui.IDLE,
          withAnimation: !0,
          shouldAutoStartPlaying: !0,
          shouldSendEventOnTracksShowed: !0,
          modal: {},
          sonataStatusBeforeTrailerStart: p.Xz.IDLE,
          isManuallyPaused: !0,
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: p.Xz.IDLE,
          },
        },
        communication: { loadingState: h.Gui.IDLE },
        modals: {
          disclaimerModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
          ugcTrackEditModal: { modal: {} },
          popoverOverPlayer: {},
          crackdownModal: {},
          overwrittenExperimentsModal: {},
          buySubscriptionModal: { isOpened: !0 },
          clearMemoryModal: {},
            discordRpcSettingsModal: {},
            playerBarEnhancementsSettingsModal: {},
            vibeBehaviorEnhancementsSettingsModal: {},
            windowBehaviorSettingsModal: {},
        },
        landing: {
          loadingState: h.Gui.IDLE,
          tabs: { loadingState: h.Gui.IDLE },
        },
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: h.Gui.IDLE },
          playQueue: {},
        },
        fullscreenVideoPlayer: { modal: {}, ids: [] },
        advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1 },
        ugcUploadCenter: {
          checkProcessingTracksAttempts: 0,
          notifications: {},
        },
        paymentWidgetModal: {
          modal: {},
          target: "",
          serviceSessionId: "",
          tariffOfferName: "",
          status: v.c8.IDLE,
        },
        offers: { music: { loadingState: h.Gui.IDLE } },
        quality: { modal: {} },
        releaseNotes: { modal: {} },
        slam: { networkStatus: {} },
        favoriteTracks: { loadingState: h.Gui.IDLE },
        track: { loadingState: h.Gui.IDLE, withAnimation: !0 },
        familyInvite: {
          info: { loadingState: h.Gui.IDLE },
          acceptanceLoadingState: h.Gui.IDLE,
          modal: {},
          step: y.Le.INFO,
        },
        continueListen: {},
        playlistPersonal: { loadingState: h.Gui.IDLE },
        redAlert: { loadingState: h.Gui.IDLE },
        shareIframe: { modal: {} },
        paywall: { modal: {} },
      };
      var f = a(25515),
        S = a(60345),
        b = a(59564);
      a(42059);
      var P = a(74763),
        A = a(54709),
        _ = a(91694);
      let N = u.V5.compose(
        u.V5.model("CollectionAlbumsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(_.$4),
          items: u.V5.array(u.V5.maybeNull(A.ug)),
          pager: u.V5.maybeNull(_.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requestsCount: u.V5.maybeNull(u.V5.number),
          upcomingAlbumsLoadingState: u.V5.enumeration(Object.values(h.Gui)),
          upcomingAlbums: u.V5.maybeNull(u.V5.array(A.W9)),
        }),
        _.Al,
      )
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === h.Gui.IDLE ||
              (e.loadingState === h.Gui.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === h.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === h.Gui.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === h.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === h.Gui.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => ({
          getData: (0, u.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: r = 20,
                sortBy: n,
                sortOrder: s,
                metaType: o,
              } = t,
              { usersResource: l, modelActionsLogger: d } = (0, u.dU)(e);
            if (
              !(
                (e.loadingState === h.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                n && s && (e.sort = { sortBy: n, sortOrder: s });
              try {
                var c, m, g;
                (e.loadingState = h.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield l.getLikedAlbums({
                    userId: a,
                    page: i,
                    pageSize: r,
                    sortBy: n,
                    sortOrder: s,
                    metaType: o,
                  }),
                  d = { page: i, perPage: r, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, u.pj)(
                    Array.from({ length: d.total }, () => null),
                  ));
                let p =
                  null !==
                    (m =
                      null === (c = t.albums) || void 0 === c
                        ? void 0
                        : c.map((e) => {
                            let { album: t } = e;
                            return (0, A.ym)(t);
                          })) && void 0 !== m
                    ? m
                    : [];
                (0, h.AG_)({
                  items: e.items,
                  mappedRawItems: p,
                  page: i,
                  pageSize: r,
                }),
                  (e.pager = d),
                  (e.requestsCount =
                    (null !== (g = e.requestsCount) && void 0 !== g ? g : 0) +
                    1),
                  e.loadingState !== h.Gui.IDLE &&
                    (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                d.error(t), (e.loadingState = h.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          getPresaves: (0, u.ls)(function* (t) {
            let { userId: a } = t,
              { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e);
            if (e.upcomingAlbumsLoadingState !== h.Gui.PENDING)
              try {
                var n;
                e.upcomingAlbumsLoadingState = h.Gui.PENDING;
                let t = yield i.getPresaves({
                  userId: a,
                  includeReleased: !1,
                  includeUpcoming: !0,
                });
                (e.upcomingAlbums = (0, u.pj)(
                  null === (n = t.upcomingAlbums) || void 0 === n
                    ? void 0
                    : n.map(A.wq),
                )),
                  e.upcomingAlbumsLoadingState !== h.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = h.Gui.RESOLVE);
              } catch (t) {
                r.error(t),
                  e.upcomingAlbumsLoadingState !== h.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = h.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = h.Gui.IDLE),
              e.pendingPages.clear(),
              e.alreadyRequestedPages.clear(),
              (e.upcomingAlbumsLoadingState = h.Gui.IDLE),
              e.destroyItems([e.items, e.sort, e.pager, e.upcomingAlbums]);
          },
        }));
      var C = a(30302),
        T = a(9096);
      let I = u.V5.model("CollectionArtistsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          loadingStateTopArtists: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(_.$4),
          items: u.V5.array(u.V5.maybeNull(T.Go)),
          itemsTopArtists: u.V5.array(C.DT),
          pager: u.V5.maybeNull(_.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isLoadingTopArtists() {
              return (
                e.loadingStateTopArtists === h.Gui.IDLE ||
                e.loadingStateTopArtists === h.Gui.PENDING
              );
            },
          }))
          .actions((e) => ({
            getDataTopArtists: (0, u.ls)(function* () {
              let { personalResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              try {
                var i, r;
                e.loadingStateTopArtists = h.Gui.PENDING;
                let a = yield t.getTopArtists();
                (e.itemsTopArtists = (0, u.pj)(
                  null !==
                    (r =
                      null === (i = a.artists) || void 0 === i
                        ? void 0
                        : i.map((e) => (0, C.iU)(e))) && void 0 !== r
                    ? r
                    : [],
                )),
                  (e.loadingStateTopArtists = h.Gui.RESOLVE);
              } catch (t) {
                a.error(t), (e.loadingStateTopArtists = h.Gui.REJECT);
              }
            }),
            getData: (0, u.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sortBy: n,
                  sortOrder: s,
                } = t,
                { usersResource: o, modelActionsLogger: l } = (0, u.dU)(e);
              if (
                !(
                  (e.loadingState === h.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i),
                  (e.sort = null),
                  n && s && (e.sort = { sortBy: n, sortOrder: s });
                try {
                  var d, c, m;
                  (e.loadingState = h.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield o.getLikedArtists({
                      userId: a,
                      page: i,
                      pageSize: r,
                      sortBy: n,
                      sortOrder: s,
                    }),
                    l = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: l.total }, () => null),
                    )),
                    (e.loadingState = h.Gui.RESOLVE);
                  let g =
                    null !==
                      (c =
                        null === (d = t.artists) || void 0 === d
                          ? void 0
                          : d.map(T.d)) && void 0 !== c
                      ? c
                      : [];
                  (0, h.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  l.error(t), (e.loadingState = h.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE),
                (e.loadingStateTopArtists = h.Gui.IDLE),
                (e.sort = null),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.items = (0, u.pj)([])),
                (e.itemsTopArtists = (0, u.pj)([]));
            },
          })),
        k = u.V5.model("CollectionNonMusicPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.array(u.V5.maybeNull(A.ug)),
          pager: u.V5.maybeNull(_.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requestsCount: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isAlbumsLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                (e.loadingState === h.Gui.PENDING && 0 === e.items.length)
              );
            },
            get isLoading() {
              return this.isAlbumsLoading;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmptyItems() {
              var t;
              return !!(
                !(null === (t = e.items) || void 0 === t ? void 0 : t.length) &&
                e.requestsCount
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: r = 20, metaType: n } = t,
                { usersResource: s, modelActionsLogger: o } = (0, u.dU)(e);
              if (
                !(
                  (e.loadingState === h.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var l, d, c;
                  (e.loadingState = h.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: r,
                      metaType: n,
                    }),
                    o = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let m =
                    null !==
                      (d =
                        null === (l = t.albums) || void 0 === l
                          ? void 0
                          : l.map((e) => {
                              let { album: t } = e;
                              return (0, A.ym)(t);
                            })) && void 0 !== d
                      ? d
                      : [];
                  (0, h.AG_)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = o),
                    (e.requestsCount =
                      (null !== (c = e.requestsCount) && void 0 !== c ? c : 0) +
                      1),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  o.error(t), (e.loadingState = h.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE),
                (e.items = (0, u.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var D = a(81706),
        L = a(50684);
      let R = u.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(_.$4),
          items: u.V5.array(u.V5.maybeNull(L.$h)),
          pager: u.V5.maybeNull(_.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          kinds: u.V5.array(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, u.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, u.dU)(e);
                (a = yield i.getPlaylistsKinds({
                  userId: t,
                  addPlaylistWithLikes: !0,
                })),
                  (e.kinds = (0, u.pj)(a));
              }),
              getData: (0, u.ls)(function* (a) {
                let {
                    userId: i,
                    page: r = 0,
                    pageSize: n = 20,
                    withLikesCount: s,
                  } = a,
                  { usersResource: o, modelActionsLogger: l } = (0, u.dU)(e);
                if (
                  !(
                    (e.loadingState === h.Gui.PENDING &&
                      e.pendingPages.has("".concat(r))) ||
                    e.alreadyRequestedPages.has("".concat(r))
                  )
                ) {
                  "number" == typeof r &&
                    e.alreadyRequestedPages.set("".concat(r), r);
                  try {
                    var d;
                    e.isLoaded || (e.loadingState = h.Gui.PENDING),
                      e.pendingPages.set("".concat(r), r),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = r * n,
                      l = e.kinds.slice(a, a + n),
                      c = yield o.getPlaylistsByKinds({
                        userId: i,
                        kinds: l,
                        withLikesCount: s,
                        withTracks: !0,
                      });
                    e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                    let m = { page: r, perPage: n, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, u.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                    let g = c.map(D.PB);
                    (0, h.AG_)({
                      items: e.items,
                      mappedRawItems: g,
                      page: r,
                      pageSize: n,
                    }),
                      (e.pager = m),
                      (e.loadingState = h.Gui.RESOLVE);
                  } catch (t) {
                    l.error(t), (e.loadingState = h.Gui.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(r));
                  }
                }
              }),
              reset() {
                (e.loadingState = h.Gui.IDLE),
                  (e.sort = null),
                  (e.items = (0, u.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, u.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        V = u.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(_.$4),
          items: u.V5.array(u.V5.maybeNull(L.Cd)),
          pager: u.V5.maybeNull(_.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: r = 20,
                sortBy: n,
                sortOrder: s,
                metaType: o,
                withTracks: l,
              } = t;
              if (
                (e.loadingState === h.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: d, modelActionsLogger: c } = (0, u.dU)(e);
              (e.sort = null), n && s && (e.sort = { sortBy: n, sortOrder: s });
              try {
                var m;
                (e.loadingState = h.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: c } = yield d.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: r,
                    sortBy: n,
                    sortOrder: s,
                    metaType: o,
                    withTracks: l,
                  },
                );
                (e.requests =
                  (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                let g = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, L.PV)(t);
                });
                (0, h.AG_)({
                  items: e.items,
                  mappedRawItems: g,
                  page: i,
                  pageSize: r,
                }),
                  (e.pager = c),
                  (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                c.error(t),
                  "number" == typeof i &&
                    e.alreadyRequestedPages.delete("".concat(i)),
                  (e.requests =
                    "number" == typeof e.requests ? e.requests - 1 : 0),
                  (e.loadingState = h.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE),
                (e.sort = null),
                (e.items = (0, u.pj)([])),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.requests = null);
            },
          }));
      var x = a(3154);
      let G = (e) => (0, u.pj)({ type: e.type, track: (0, x.Vt)(e.track) }),
        O = (e) => e.filter((e) => e.track).map((e) => (0, x.Vt)(e.track)),
        w = (e) =>
          (0, u.pj)({
            type: e.type,
            album: e.album && (0, A.ym)(e.album),
            playlist: e.playlist && (0, D.Q9)(e.playlist),
            track: (0, x.Vt)(e.track),
          }),
        M = u.V5.model("ShelfLikedItem", { type: u.V5.string, track: x.le });
      u.V5.model("ShelfNewEpisodesItem", {
        type: u.V5.string,
        playlist: u.V5.maybe(D.Nn),
        track: x.le,
      });
      let j = u.V5.model("ShelfRecentlyPlayedItem", {
          type: u.V5.string,
          album: u.V5.maybe(A.ug),
          playlist: u.V5.maybe(D.d2),
          track: x.le,
        }),
        U = u.V5.model("CollectionShelfLiked", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          entities: u.V5.maybeNull(u.V5.array(M)),
          pager: u.V5.maybeNull(_.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              var t;
              return (
                this.isResolved &&
                (null === (t = e.entities) || void 0 === t
                  ? void 0
                  : t.length) === 0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i, r;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (r = a.pager) && void 0 !== r ? r : null),
                    (e.entities = (0, u.pj)(
                      a.entities ? a.entities.map(G) : [],
                    )),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        q = u.V5.model("CollectionShelfNewEpisodes", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          playlist: u.V5.maybeNull(D.Nn),
          tracks: u.V5.maybeNull(u.V5.array(x.le)),
        })
          .views((e) => ({
            get withPlaylist() {
              var t;
              return !!(
                e.playlist &&
                e.playlist.kind &&
                e.playlist.isAvailable &&
                (null === (t = e.playlist.owner) || void 0 === t
                  ? void 0
                  : t.login)
              );
            },
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isResolved && (!e.tracks || 0 === e.tracks.length);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getNewEpisodes();
                  e.title = a.title;
                  let r = a.blocks[0];
                  (null == r ? void 0 : r.typeForFrom) &&
                    (e.typeForFrom = r.typeForFrom),
                    (null == r
                      ? void 0
                      : null === (i = r.entities[0]) || void 0 === i
                        ? void 0
                        : i.playlist) &&
                      (e.playlist = (0, D.Q9)(r.entities[0].playlist)),
                    (null == r ? void 0 : r.entities) &&
                      (e.tracks = (0, u.pj)(O(r.entities))),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.title = null),
                (e.playlist = null),
                (e.typeForFrom = null),
                (e.tracks = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        F = u.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          entities: u.V5.maybeNull(u.V5.array(j)),
          pager: u.V5.maybeNull(_.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i, r;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (r = a.pager) && void 0 !== r ? r : null),
                    (e.entities = (0, u.pj)(a.entities.map(w))),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        B = u.V5.model("CollectionShelfPage", {
          recentlyPlayed: F,
          newEpisodes: q,
          liked: U,
        })
          .views((e) => ({
            get isLoading() {
              return e.recentlyPlayed.isLoading && e.liked.isLoading;
            },
            get isRejected() {
              return e.recentlyPlayed.isRejected && e.liked.isRejected;
            },
            get isResolved() {
              return e.recentlyPlayed.isResolved && e.liked.isResolved;
            },
            get isIdle() {
              return (
                e.recentlyPlayed.loadingState === h.Gui.IDLE &&
                e.liked.loadingState === h.Gui.IDLE
              );
            },
            get hasRecentlyPlayed() {
              var t;
              return (
                e.recentlyPlayed.isLoading ||
                ((null === (t = e.recentlyPlayed.entities) || void 0 === t
                  ? void 0
                  : t.length) || 0) > 0
              );
            },
            get hasLiked() {
              var a;
              return (
                e.liked.isLoading ||
                ((null === (a = e.liked.entities) || void 0 === a
                  ? void 0
                  : a.length) || 0) > 0
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.recentlyPlayed.reset(), e.liked.reset();
            },
          })),
        Y = u.V5.model("CollectionDislikesPageArtists", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.maybeNull(u.V5.array(T.Go)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (!(0, u.fh)(e)) return null;
              let { user: i } = (0, u.yj)(e);
              if (e.loadingState === h.Gui.PENDING) return null;
              if (((e.loadingState = h.Gui.PENDING), i.account.uid))
                try {
                  let a = yield t.getDislikedArtists({ userId: i.account.uid });
                  return (
                    (e.items = (0, u.pj)((a || []).map(T.d))),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE),
                    a
                  );
                } catch (t) {
                  a.error(t),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
              return (e.loadingState = h.Gui.REJECT), null;
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE), (e.items = null);
            },
          }));
      var W = a(3228),
        z = a(73054);
      let H = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return String(null == a ? void 0 : a.id);
          }),
        K = (e, t, a) => {
          let i = [];
          for (let s = t; s <= a; s++) {
            var r, n;
            ((null === (r = e[s]) || void 0 === r ? void 0 : r.loadingState) ===
              h.Gui.IDLE ||
              (null === (n = e[s]) || void 0 === n
                ? void 0
                : n.loadingState) === h.Gui.REJECT) &&
              i.push(s);
          }
          return i;
        },
        J = u.V5.model("CollectionDislikesPageTracksItem", {
          id: u.V5.string,
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          data: u.V5.maybeNull(x.le),
        }),
        X = u.V5.model("CollectionDislikesPageTracks", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.maybeNull(u.V5.array(J)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get sonataEntitiesData() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.map((e) => (0, z.RN)(e.id))) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, u.dU)(e),
                { user: i } = (0, u.yj)(e);
              if (i.account.uid && e.loadingState !== h.Gui.PENDING) {
                e.loadingState = h.Gui.PENDING;
                try {
                  let {
                      library: { tracks: a },
                    } = yield t.getDislikedTracks({ userId: i.account.uid }),
                    r = a.map((e) => {
                      let { id: t, albumId: a } = e;
                      return {
                        id: String((0, W.i)(t, a)),
                        loadingState: h.Gui.IDLE,
                      };
                    });
                  (e.items = (0, u.pj)(r)), (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
              }
            }),
            getTracksByRange: (0, u.ls)(function* (t, a) {
              var i;
              let { tracksResource: r, modelActionsLogger: n } = (0, u.dU)(e);
              if (!(null === (i = e.items) || void 0 === i ? void 0 : i.length))
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
              let s = K(e.items, t, a);
              try {
                let t = H(e.items, s);
                if (!t.length) return null;
                s.forEach((t) => {
                  var a;
                  let i =
                    null === (a = e.items) || void 0 === a ? void 0 : a[t];
                  i && (i.loadingState = h.Gui.PENDING);
                });
                let a = yield r.getTracksMeta({
                  trackIds: t,
                  withProgress: !0,
                });
                s.forEach((t, i) => {
                  var r;
                  let n = null == a ? void 0 : a[i];
                  (null === (r = e.items) || void 0 === r ? void 0 : r[t]) &&
                    n &&
                    (e.items[t] = {
                      id: String(n.id),
                      data: (0, x.Vt)(n),
                      loadingState: h.Gui.RESOLVE,
                    });
                });
              } catch (t) {
                n.error(t),
                  s.forEach((t) => {
                    var a;
                    let i =
                      null === (a = e.items) || void 0 === a ? void 0 : a[t];
                    i && (i.loadingState = h.Gui.REJECT);
                  });
              }
              return null;
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE), (e.items = null);
            },
          })),
        Q = u.V5.model("CollectionDislikesPage", { artists: Y, tracks: X })
          .views((e) => ({
            get isIdle() {
              return e.tracks.isIdle && e.artists.isIdle;
            },
            get isLoading() {
              return e.tracks.isLoading && e.artists.isLoading;
            },
            get isResolved() {
              return e.tracks.isResolved && e.artists.isResolved;
            },
          }))
          .actions((e) => ({
            reset() {
              e.artists.reset(), e.tracks.reset();
            },
          })),
        Z = u.V5.model("CollectionPage", {
          landing: P.d5,
          albums: N,
          playlistsLiked: V,
          playlistsCreated: R,
          artists: I,
          shelf: B,
          nonMusicLiked: k,
          dislikes: Q,
        });
      a(29652),
        a(33802),
        a(11153),
        a(14591),
        a(40853),
        a(94734),
        a(74493),
        a(54352),
        a(54888),
        a(44019),
        a(52039),
        a(6099),
        a(53109),
        a(6831);
      var $ = a(43322),
        ee = a(77463),
        et = a(19748);
      let ea = u.V5.model("KidsPageModel", { landing: P.d5 });
      a(52551), a(14646);
      let ei = u.V5.model("MainPage", { landing: P.d5 });
      a(41783);
      var er = a(9973),
        en = a(61492),
        es = a(90741);
      let eo = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        el = (e) => {
          switch (e.type) {
            case er.E.ALBUM:
              return "".concat(e.type, "_").concat((0, en.un)(e));
            case er.E.TRACK:
              return "".concat(e.type, "_").concat((0, en.LV)(e));
            case er.E.WAVE:
              return "".concat(e.type, "_").concat((0, en.R3)(e));
            case er.E.PLAYLIST:
              return "".concat(e.type, "_").concat((0, en.aQ)(e));
            case er.E.ARTIST:
              return "".concat(e.type, "_").concat((0, en.H5)(e));
          }
        },
        eu = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let n of e.historyTabs) {
            var i, r;
            if (a > 1e3) break;
            let e = { ...n, items: [] };
            for (let t of null !== (i = n.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (r = e.items) || void 0 === r || r.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        ed = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case er.E.ARTIST:
                case er.E.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case er.E.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case er.E.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case er.E.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        ec = u.V5.model("MusicHistoryPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          indexesMap: u.V5.map(u.V5.number),
          items: u.V5.maybeNull(u.V5.array(en.Mf)),
          datesMap: u.V5.map(u.V5.boolean),
          tabs: u.V5.maybeNull(u.V5.array(en.t9)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isLoading() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let r = t,
                n = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (r = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (n = t + 25),
                [r, n]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [r, n] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(r, n).filter((e) => !e.isLoaded)) && void 0 !== i
                ? i
                : [];
            },
            isInObservationRange(t) {
              var a;
              return (
                (0 !== t && t % 25 == 0) ||
                (e.items &&
                  t ===
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) -
                      1)
              );
            },
            get dates() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, u.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var r;
                      e.datesMap.set(t.date, !1),
                        null === (r = t.blocks) ||
                          void 0 === r ||
                          r.forEach((t, r) => {
                            var n;
                            let s = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(r, "_").concat(s),
                              a,
                            ),
                              null === (n = e.items) ||
                                void 0 === n ||
                                n.push({
                                  id: s,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: r,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? h.Gui.RESOLVE : h.Gui.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, n) => {
                                var s;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(r, "_")
                                    .concat(n, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (s = e.items) ||
                                    void 0 === s ||
                                    s.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: r,
                                      trackIndex: n,
                                      loadingState:
                                        a < 25 ? h.Gui.RESOLVE : h.Gui.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, r, n, s;
                let { tabIndex: o, blockIndex: l, trackIndex: u } = t,
                  { fullModel: d } = a.data;
                if (null === u) return;
                let c =
                  null === (s = e.tabs) || void 0 === s
                    ? void 0
                    : null === (n = s[o]) || void 0 === n
                      ? void 0
                      : null === (r = n.blocks) || void 0 === r
                        ? void 0
                        : null === (i = r[l]) || void 0 === i
                          ? void 0
                          : i.tracks[u];
                c &&
                  ((c.data = (0, x.Vt)(d)), (c.loadingState = h.Gui.RESOLVE));
              },
              setAlbum(t, a) {
                var i, r, n;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (r = n[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, en.Ql)(u) &&
                  ((u.meta = (0, A.cO)({ album: l.album, artists: l.artists })),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setArtist(t, a) {
                var i, r, n;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (r = n[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, en.DF)(u) &&
                  ((u.meta = (0, T.tR)({ artist: l.artist })),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, r, n;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (r = n[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, en.v3)(u) &&
                  ((u.meta = {
                    ...(0, D.RE)({ playlist: l.playlist }),
                    tracksCount: l.tracksCount,
                  }),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setVibe(t, a) {
                var i, r, n;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (n = e.tabs) || void 0 === n
                      ? void 0
                      : null === (r = n[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, en.eE)(u) &&
                  ((u.meta = {
                    ...(0, es.FF)(l.wave),
                    imageUrl: l.simpleWaveForegroundImageUrl,
                    backgroundColor: l.simpleWaveBackgroundColor,
                  }),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              getMusicHistory: (0, u.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                u.dU)(e);
                if (e.loadingState !== h.Gui.PENDING)
                  try {
                    e.loadingState = h.Gui.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      r = eu(i);
                    (e.tabs = (0, u.pj)(r.historyTabs.map(en.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = h.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = h.Gui.REJECT);
                  }
              }),
              getItems: (0, u.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: r } = (0,
                u.dU)(e);
                try {
                  let r = e.getItemsToLoad(a);
                  r.forEach((e) => {
                    e.loadingState = h.Gui.RESOLVE;
                  });
                  let n = yield i.getMusicHistoryItems({ items: ed(r) }),
                    s = eo(r);
                  n.items.forEach((e) => {
                    var a;
                    let i = el(e);
                    null === (a = s[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case er.E.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case er.E.TRACK:
                            t.setTrack(a, e);
                            break;
                          case er.E.WAVE:
                            t.setVibe(a, e);
                            break;
                          case er.E.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case er.E.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = h.Gui.RESOLVE;
                      });
                  });
                } catch (e) {
                  r.error(e);
                }
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = h.Gui.IDLE);
              },
            };
            return t;
          });
      a(32544), a(18956);
      var eh = a(26095),
        em = a(13820),
        eg = a(12040),
        ep = a(61527),
        ey = a(40854),
        ev = a(24527),
        eE = a(69473),
        ef = a(98444),
        eS = a(58702);
      let eb = [
          eS.S.ARTIST,
          eS.S.ALBUM,
          eS.S.TRACK,
          eS.S.PLAYLIST,
          eS.S.WAVE,
          eS.S.PODCAST,
          eS.S.PODCAST_EPISODE,
        ],
        eP = (e) => {
          let t = [...eb];
          return (
            (0, h.Z7G)(e) ||
              (t = t.filter(
                (e) => ![eS.S.PODCAST, eS.S.PODCAST_EPISODE].includes(e),
              )),
            t
          );
        },
        eA = [
          eS.S.ALBUM,
          eS.S.ARTIST,
          eS.S.PLAYLIST,
          eS.S.TRACK,
          eS.S.UGC_TRACK,
          eS.S.WAVE,
          eS.S.PODCAST,
          eS.S.PODCAST_EPISODE,
          eS.S.CLIP,
        ],
        e_ = (e, t, a) => {
          let i = [...eA];
          return (
            e === ev.a.TOP && (i = i.filter((e) => e !== eS.S.UGC_TRACK)),
            (0, h.Z7G)(t) ||
              a.checkExperiment(h.peG.WebNextBookSearch, "on") ||
              (i = i.filter((e) => ![eS.S.PODCAST].includes(e))),
            a.checkExperiment(h.peG.WebNextClips, "on") ||
              (i = i.filter((e) => e !== eS.S.CLIP)),
            i
          );
        },
        eN = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, u.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        eC = (e) => {
          let { type: t } = e;
          switch (t) {
            case eS.S.UGC_TRACK:
              return { type: t, data: (0, x.Z2)(e.track) };
            case eS.S.TRACK:
              return { type: t, data: (0, x.Vt)(e.track) };
            case eS.S.ARTIST:
              return { type: t, data: (0, T.d)(e.artist) };
            case eS.S.PLAYLIST:
              return {
                type: t,
                data: (0, D.VB)({ ...e.playlist, artists: [] }),
              };
            case eS.S.ALBUM:
              return { type: t, data: (0, A.ym)(e.album) };
            case eS.S.WAVE:
              return { type: t, data: eN(e) };
            case eS.S.PODCAST:
              return { type: t, data: (0, A.ym)(e.podcast) };
            case eS.S.PODCAST_EPISODE:
              return { type: t, data: (0, x.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        };
      var eT = a(77702);
      let eI = (e) =>
          e.map((e) => {
            switch (e.type) {
              case eS.S.ALBUM:
                return { type: eS.S.ALBUM, data: (0, A.ym)(e.album) };
              case eS.S.ARTIST:
                return { type: eS.S.ARTIST, data: (0, T.d)(e.artist) };
              case eS.S.PLAYLIST:
                return {
                  type: eS.S.PLAYLIST,
                  data: (0, D.VB)({ ...e.playlist, artists: [] }),
                };
              case eS.S.UGC_TRACK:
                return { type: eS.S.UGC_TRACK, data: (0, x.Z2)(e.track) };
              case eS.S.TRACK:
                return { type: eS.S.TRACK, data: (0, x.Vt)(e.track) };
              case eS.S.WAVE:
                return { type: eS.S.WAVE, data: eN(e) };
              case eS.S.PODCAST:
                return { type: eS.S.PODCAST, data: (0, A.ym)(e.podcast) };
              case eS.S.CLIP:
                return { type: eS.S.CLIP, data: (0, eT.et)(e.clip) };
              case eS.S.PODCAST_EPISODE:
                return {
                  type: eS.S.PODCAST_EPISODE,
                  data: (0, x.Vt)(e.podcast_episode),
                };
            }
          }),
        ek = u.V5.model("SearchHistoryPage", {
          items: u.V5.array(ef.Iv),
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
        }),
        eD = u.V5.model("SearchHistory", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          shouldUpdateHistory: u.V5.optional(u.V5.boolean, !1),
        })
          .actions((e) => ({
            setShouldUpdateHistory(t) {
              e.shouldUpdateHistory = t;
            },
          }))
          .views((e) => ({
            get hasCleared() {
              return e.loadingState === h.Gui.RESOLVE;
            },
          }))
          .actions((e) => ({
            clear: (0, u.ls)(function* () {
              if (!(0, u.fh)(e)) return;
              let { user: t } = (0, u.yj)(e),
                { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING && t.account.uid)
                try {
                  (e.loadingState = h.Gui.PENDING),
                    yield a.clearSearchHistory({ userId: t.account.uid }),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  i.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              e.loadingState = h.Gui.IDLE;
            },
          })),
        eL = u.V5.model("SearchPage", {
          searchCorrectedText: u.V5.maybeNull(u.V5.string),
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          searchRequestId: u.V5.optional(u.V5.string, ""),
          results: u.V5.array(ef.Iv),
          historyPage: ek,
          mixes: eE.ZP,
          landing: P.d5,
          history: eD,
        })
          .views((e) => ({
            get isLoading() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isNeededToLoad() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isHistoryLoading() {
              return e.historyPage.loadingState === h.Gui.PENDING;
            },
            get isHistoryReady() {
              return e.historyPage.loadingState === h.Gui.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.historyPage.items.length &&
                e.historyPage.loadingState === h.Gui.RESOLVE
              );
            },
          }))
          .actions((e) => ({
            getSearchResults: (0, u.ls)(function* (t) {
              let { text: a, filter: i, config: r, experiments: n } = t,
                { searchResource: s } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gui.PENDING;
                let t = yield s.getInstantMixedSearch({
                  text: a,
                  type: e_(i, r, n),
                  filter: i === ev.a.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, u.pj)(eI(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                e.loadingState = h.Gui.REJECT;
              }
            }),
            getHistory: (0, u.ls)(function* (t) {
              let { userId: a, config: i } = t;
              if (e.historyPage.loadingState === h.Gui.PENDING) return;
              let { usersResource: r, modelActionsLogger: n } = (0, u.dU)(e);
              try {
                e.historyPage.loadingState = h.Gui.PENDING;
                let t = yield r.getSearchHistory({
                  userId: a,
                  supportedTypes: eP(i),
                });
                (e.historyPage.items = (0, u.pj)(t.map(eC).filter((e) => e))),
                  (e.historyPage.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                n.error(t), (e.historyPage.loadingState = h.Gui.REJECT);
              }
            }),
            clearHistory: (0, u.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  (e.loadingState = h.Gui.PENDING),
                    yield i.clearSearchHistory({ userId: a }),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  r.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            resetHistoryItems() {
              e.historyPage.items = (0, u.pj)([]);
            },
            resetHistoryStateRequest() {
              (e.historyPage.loadingState = h.Gui.IDLE),
                (e.historyPage.items = (0, u.pj)([]));
            },
            resetResults() {
              e.results = (0, u.pj)([]);
            },
            resetSearchCorrectedText() {
              e.searchCorrectedText = null;
            },
            reset() {
              (e.searchCorrectedText = null),
                (e.loadingState = h.Gui.IDLE),
                (e.results = (0, u.pj)([]));
            },
            sendFeedback: (0, u.ls)(function* (t) {
              let { searchResource: a, modelActionsLogger: i } = (0, u.dU)(e);
              try {
                yield a.sendFeedback(t);
              } catch (e) {
                i.error(e);
              }
            }),
          }));
      a(84534), a(8139), a(81189), a(18018);
      var eR = a(99063),
        eV = a(82973),
        ex = a(49430),
        eG = a(57916);
      ((i = n || (n = {})).BAR_BELOW = "barBellow"),
        (i.FULLSCREEN = "fullscreen");
      var eO = a(62178),
        ew = a(42363);
      let eM = (e) => {
          let t = [],
            a = [];
          return (
            e.triggers.forEach((e) => {
              switch (e.meta.notificationId) {
                case n.BAR_BELOW:
                  t.push((0, eO.ho)(e));
                  return;
                case n.FULLSCREEN:
                  a.push((0, ew.QZ)(e));
                  return;
              }
            }),
            (0, u.pj)({ barBelow: { list: t }, modal: { list: a } })
          );
        },
        ej = u.V5.model("CommunicationList", { barBelow: eO.Xv, modal: ew.FM }),
        eU = u.V5.model("Communication", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          list: u.V5.maybe(ej),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, u.ls)(function* () {
              let { dynamicPagesResource: a, modelActionsLogger: i } = (0,
              u.dU)(e);
              if (
                e.loadingState !== h.Gui.PENDING &&
                e.loadingState !== h.Gui.RESOLVE
              )
                try {
                  e.loadingState = h.Gui.PENDING;
                  let i = yield a.getTriggers({
                    anchorIds: Object.values(eG.o),
                  });
                  if (
                    ((e.list = eM(i)),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE),
                    !e.list)
                  )
                    return;
                  let { barBelow: r, modal: n } = e.list;
                  r.setAnchorId(eG.o.ON_START_BAR_BELOW),
                    r.barBelowItem &&
                      (r.show(),
                      t.shown(
                        r.barBelowItem.anchorId,
                        r.barBelowItem.screenId,
                      )),
                    n.setAnchorId(eG.o.ON_START_FULLSCREEN),
                    n.modalItem &&
                      (n.open(),
                      t.shown(n.modalItem.anchorId, n.modalItem.screenId));
                } catch (t) {
                  i.error(t),
                    t instanceof ex.du &&
                      (t.statusCode === ex.CN.NOT_FOUND ||
                        t.statusCode === ex.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = ex.CN.NOT_FOUND),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
            }),
            shown: (0, u.ls)(function* (t, a) {
              let { dynamicPagesResource: i, modelActionsLogger: r } = (0,
              u.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                r.error(e);
              }
            }),
            action: (0, u.ls)(function* (t, a, i) {
              let { dynamicPagesResource: r, modelActionsLogger: n } = (0,
              u.dU)(e);
              try {
                yield r.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                n.error(e);
              }
            }),
          };
          return t;
        });
      var eq = a(55196);
      let eF = u.V5.model("ModalsModel", {
        disclaimerModal: _.KL,
        shortcutsModal: _.KL,
        aboutAppModal: _.KL,
        overviewModal: _.KL,
        ugcTrackEditModal: x.bp,
        popoverOverPlayer: _.KL,
        crackdownModal: _.KL,
        overwrittenExperimentsModal: _.KL,
        buySubscriptionModal: _.KL,
        clearMemoryModal: _.KL,
          discordRpcSettingsModal: _.KL,
          playerBarEnhancementsSettingsModal: _.KL,
          vibeBehaviorEnhancementsSettingsModal: _.KL,
          windowBehaviorSettingsModal: _.KL,
      });
      var eB = a(84597),
        eY = a(86919),
        eW = a(65829),
        ez = a(94347),
        eH = a(63961),
        eK = a(24653),
        eJ = a(39149),
        eX = a(35308),
        eQ = a(18256),
        eZ = a(14178);
      let e$ = u.V5.model("Network", {
          isOffline: u.V5.optional(u.V5.boolean, !1),
        }),
        e0 = u.V5.model("Entity", {
          progress: u.V5.maybe(u.V5.number),
          loadingState: u.V5.enumeration(Object.values(eZ.aT)),
        }),
        e5 = u.V5.model("Slam", {
          networkStatus: e$,
          offlineMode: u.V5.optional(u.V5.boolean, !1),
          tracks: u.V5.map(e0),
        })
          .views((e) => {
            let t = {
              isTrackDownloaded: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === eZ.aT.DOWNLOADED
                );
              },
              isTrackDownloading: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === eZ.aT.DOWNLOADING
                );
              },
              getTrackDownloadingProgress: (t) => {
                var a, i;
                return null !==
                  (i =
                    null === (a = e.tracks.get(t)) || void 0 === a
                      ? void 0
                      : a.progress) && void 0 !== i
                  ? i
                  : 0;
              },
              isPlaylistDownloaded: (e) =>
                e.every((e) => {
                  let [a] = (0, W.f)(e);
                  return !!a && t.isTrackDownloaded(a);
                }),
              isPlaylistDownloading: (e) =>
                e.some((e) => {
                  let [a] = (0, W.f)(e);
                  return !!a && t.isTrackDownloading(a);
                }),
              getPlaylistDownloadingProgress: (e) =>
                Math.floor(
                  (e.reduce((e, a) => {
                    let [i] = (0, W.f)(a);
                    return i && t.isTrackDownloaded(i) ? e + 1 : e;
                  }, 0) /
                    e.length) *
                    100,
                ),
              get isOfflineModeEnabled() {
                if (!(0, u.fh)(e)) return !1;
                let { experiments: t } = (0, u.yj)(e);
                return (
                  t.checkExperiment(
                    h.peG.WebNextEnableDownloadControls,
                    "on",
                  ) && e.offlineMode
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            setNetworkStatus: (t) => {
              e.networkStatus = t;
            },
            setTrack: (t, a) => {
              e.tracks.set(t, a);
            },
            setTracks: (t) => {
              e.tracks = (0, u.pj)(t);
            },
            setOfflineMode: (t) => {
              let { experiments: a } = (0, u.yj)(e),
                { localStorage: i } = (0, u.dU)(e);
              if (
                !a.checkExperiment(h.peG.WebNextEnableDownloadControls, "on")
              ) {
                (e.offlineMode = !1), i.set(h.BUb.OfflineMode, !1);
                return;
              }
              (e.offlineMode = t), i.set(h.BUb.OfflineMode, t);
            },
          }));
      var e1 = a(62418),
        e9 = a(56229),
        e3 = a(79491);
      ((r = s || (s = {})).PROCESSING = "processing"),
        (r.PLAYABLE = "playable");
      var e2 = a(26382),
        e6 = a(55568);
      let e4 = u.V5.model("UgcUploadCenterNotificationsPairModel", {
          playlist: L.Cd,
          type: u.V5.enumeration(Object.values(e6.u)),
        }),
        e7 = u.V5.model("UgcUploadCenterNotificationsModel", {
          pairs: u.V5.array(e4),
        })
          .views((e) => ({
            isNotificationExists: (t, a) =>
              e.pairs.some((e) => e.playlist.kind === t && e.type === a),
          }))
          .actions((e) => {
            let t = {
              addNotification(t, a) {
                e.pairs.push({ playlist: (0, e3.ZN)(t), type: a });
              },
              addNonexistentNotification(a, i) {
                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
              },
              showAllNotifications() {
                let t = (0, e3.ZN)(e.pairs);
                return (e.pairs = (0, u.pj)([])), t;
              },
            };
            return t;
          }),
        e8 = u.V5.model("UgcUploadCenterTrackPlaylistPair", {
          playlist: L.Cd,
          file: e2.jT,
        }),
        te = u.V5.model("UgcUploadCenterModel", {
          tracks: u.V5.array(e8),
          notifications: e7,
          checkProcessingTracksAttempts: u.V5.number,
        })
          .views((e) => ({
            getUploadingTracksByPlaylistKind: (t) =>
              t
                ? e.tracks
                    .filter((e) => e.playlist.kind === t)
                    .map((e) => e.file)
                : [],
            getTracksByLoadingState: (t) =>
              e.tracks
                .filter((e) => e.file.loadingState === t)
                .map((e) => e.file),
            get idleTracks() {
              return this.getTracksByLoadingState(e2.cU.IDLE);
            },
            get preparingTracks() {
              return this.getTracksByLoadingState(e2.cU.PREPARE);
            },
            get uploadingTracks() {
              return this.getTracksByLoadingState(e2.cU.UPLOADING);
            },
            get processingTracks() {
              return this.getTracksByLoadingState(e2.cU.PROCESSING);
            },
            get hasTracksInUploadingState() {
              return (
                this.preparingTracks.length + this.uploadingTracks.length > 0
              );
            },
            get shouldCheckProcessingTracks() {
              return (
                e.checkProcessingTracksAttempts < 25 &&
                this.processingTracks.length > 0
              );
            },
            getPlaylistByKind(t) {
              var a;
              return null ===
                (a = e.tracks.find((e) => e.playlist.kind === t)) ||
                void 0 === a
                ? void 0
                : a.playlist;
            },
          }))
          .actions((e) => {
            let t = {
              appendFiles(t, a) {
                if (
                  (t.forEach((t) => {
                    if (t.size > 419430400) {
                      e.notifications.addNonexistentNotification(
                        a,
                        e6.u.FILE_TOO_LARGE,
                      );
                      return;
                    }
                    let i = e2.jT.create({
                      loadingState: e2.cU.IDLE,
                      playlistKind: a.kind,
                    });
                    i.setFile(t);
                    let r = e8.create({ file: i, playlist: (0, e3.ZN)(a) });
                    e.tracks.unshift(r);
                  }),
                  !(0, u.fh)(e))
                )
                  return;
                let { playlist: i } = (0, u.yj)(e);
                i.search.setText(""),
                  i.search.reset(),
                  this.runUploadTracksQueue();
              },
              async runUploadTracksQueue() {
                let a = e.idleTracks;
                if (a.length && !e.hasTracksInUploadingState) {
                  let i = a[a.length - 1];
                  i &&
                    (await i.runUpload(),
                    i.loadingState === e2.cU.REJECT &&
                      i.errorReason === e2.v_.TOO_MANY_FILES &&
                      ((e.tracks = (0, u.pj)([])),
                      t.addNotificationForPlaylistKind(
                        i.playlistKind,
                        e6.u.TOO_MANY_FILES,
                      )),
                    t.checkNotifications()),
                    t.setCheckProcessingTracksAttempts(0),
                    t.runUploadTracksQueue();
                }
              },
              checkProcessingTracks: (0, u.ls)(function* () {
                let { tracksResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = [];
                if (e.checkProcessingTracksAttempts >= 25) return null;
                t.setCheckProcessingTracksAttempts(
                  e.checkProcessingTracksAttempts + 1,
                );
                try {
                  let t = e.processingTracks
                    .map((e) => e.trackId)
                    .filter((e) => !!e);
                  if (!t.length) return null;
                  let i = yield a.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  null == i ||
                    i.forEach((t) => {
                      let a = e.tracks.find(
                        (e) =>
                          e.file.trackId === t.id && t.state === s.PLAYABLE,
                      );
                      a &&
                        ((a.file.loadingState = e2.cU.RESOLVE),
                        a.file.trackId && r.push(a.file.trackId));
                    });
                } catch (e) {
                  i.error(e);
                }
                return (
                  t.checkNotifications(r),
                  t.moveTracksFromUploadCenterToPlaylist(),
                  null
                );
              }),
              moveTracksFromUploadCenterToPlaylist() {
                var t;
                if (!(0, u.fh)(e)) return;
                let { playlist: a } = (0, u.yj)(e);
                (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) &&
                  e.tracks.find((e) => {
                    var t;
                    return (
                      e.file.loadingState === e2.cU.RESOLVE &&
                      e.playlist.kind ===
                        (null === (t = a.meta) || void 0 === t
                          ? void 0
                          : t.kind)
                    );
                  }) &&
                  a.refreshTracks(),
                  (e.tracks = (0, u.pj)(
                    e.tracks.filter(
                      (e) => e.file.loadingState !== e2.cU.RESOLVE,
                    ),
                  ));
              },
              setCheckProcessingTracksAttempts(t) {
                e.checkProcessingTracksAttempts = t;
              },
              clearCancelledUploads() {
                e.tracks = (0, u.pj)(
                  e.tracks.filter(
                    (e) => e.file.loadingState !== e2.cU.CANCELLED,
                  ),
                );
              },
              checkNotifications(a) {
                let i = new Set();
                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                  i.forEach((i) => {
                    let r = e.getUploadingTracksByPlaylistKind(i);
                    if (
                      !(
                        !r.length ||
                        r.some(
                          (e) =>
                            e.loadingState !== e2.cU.RESOLVE &&
                            e.loadingState !== e2.cU.REJECT,
                        )
                      )
                    ) {
                      if (r.some((e) => e.loadingState === e2.cU.REJECT)) {
                        let n = !0;
                        if (a && a.length) {
                          let t = r.map((e) => e.trackId).filter((e) => e),
                            i = (0, e1.Z)(t, a, e9.Z);
                          i.length &&
                            (n = i
                              .map((t) =>
                                e.tracks.find((e) => e.file.trackId === t),
                              )
                              .some(
                                (e) =>
                                  (null == e ? void 0 : e.file.loadingState) ===
                                  e2.cU.REJECT,
                              ));
                        }
                        n &&
                          t.addNotificationForPlaylistKind(
                            i,
                            e6.u.UNKNOWN_ERROR,
                          );
                      } else t.addNotificationForPlaylistKind(i, e6.u.SUCCESS);
                    }
                  });
              },
              addNotificationForPlaylistKind(t, a) {
                let i = e.getPlaylistByKind(t);
                i && e.notifications.addNonexistentNotification(i, a);
              },
            };
            return t;
          });
      a(87544);
      var tt = a(222),
        ta = a(5410);
      let ti = (e) => {
          var t, a;
          return {
            id: e.id,
            type: e.type,
            title: e.title,
            description: e.description,
            details: {
              text: null === (t = e.details) || void 0 === t ? void 0 : t.text,
              url: null === (a = e.details) || void 0 === a ? void 0 : a.url,
            },
          };
        },
        tr = u.V5.model("Disclaimers", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          disclaimers: u.V5.maybe(u.V5.array(_.dU)),
          recentDisclaimersRequestTS: u.V5.number,
        })
          .actions((e) => ({
            getDisclaimers: (0, u.ls)(function* () {
              let { disclaimersResource: t, modelActionsLogger: a } = (0, u.dU)(
                e,
              );
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  (e.loadingState = h.Gui.PENDING),
                    (e.recentDisclaimersRequestTS = Date.now());
                  let a = yield t.getDisclaimers();
                  (e.disclaimers = a.map(ti)),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
            }),
          }))
          .actions((e) => ({
            getDisclaimerById: (0, u.ls)(function* (t) {
              var a, i;
              return (
                (null === (a = e.disclaimers) || void 0 === a
                  ? void 0
                  : a.find((e) => e.id === t)) ||
                (Date.now() - e.recentDisclaimersRequestTS > 18e5 &&
                  (yield e.getDisclaimers()),
                null === (i = e.disclaimers) || void 0 === i
                  ? void 0
                  : i.find((e) => e.id === t))
              );
            }),
          }));
      var tn = a(67228);
      let ts = (e) => {
          let t = e.alerts.find((e) => {
            let { id: t } = e;
            return "music-grace" === t;
          });
          return void 0 === t
            ? null
            : (0, u.pj)({
                text: t.texts["bar-text"],
                buttonText: t.texts["bar-button-text"],
                href: t.clickUrl,
              });
        },
        to = u.V5.model({
          text: u.V5.string,
          buttonText: u.V5.string,
          href: u.V5.string,
        }),
        tl = u.V5.model("RedAlert", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          data: u.V5.maybeNull(to),
        })
          .views((e) => ({
            get isVisible() {
              let { settings: t } = (0, u.yj)(e);
              return t.layout !== h.t8m.Mobile && !!e.data;
            },
            get text() {
              if (null === e.data) throw Error("Missing data");
              return e.data.text;
            },
            get buttonText() {
              if (null === e.data) throw Error("Missing data");
              return e.data.buttonText;
            },
            get href() {
              if (null === e.data) throw Error("Missing data");
              return e.data.href;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              if (e.loadingState === h.Gui.PENDING) return;
              let { user: t } = (0, u.yj)(e),
                { redAlertResource: a, modelActionsLogger: i } = (0, u.dU)(e);
              if (!t.isAuthorized) {
                e.loadingState = h.Gui.IDLE;
                return;
              }
              e.loadingState = h.Gui.PENDING;
              try {
                let t = yield a.getRedAlerts({
                  service: "music",
                  client: "music-web",
                  platform: "web",
                });
                (e.data = ts(t)), (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                i.error(t), (e.loadingState = h.Gui.REJECT);
              }
            }),
          }));
      var tu = a(21454),
        td = a(43507);
      let tc = u.V5.model("Root", {
          experiments: _.i_,
          user: td.T_,
          wizard: eJ.k,
          collection: Z,
          disclaimers: tr,
          main: ei,
          settings: _.ao,
          currentClipInfo: eT.uF,
          currentTrackInfo: x.Jx,
          album: f.Lf,
          artist: S.Od,
          libraryAllIds: _.n4,
          librarySync: _.T2,
          sonataState: z.ps,
          playlist: eg.nb,
          slides: tu.iV,
          vibe: eH.a,
          search: eL,
          vibeSettings: tt.Ux,
          pinsCollection: eB.Lc,
          navbar: eB.Ko,
          genre: ee.Kx,
          genres: et.EU,
          mixes: eE.ZP,
          myMusic: eh.S,
          tag: eR.tS,
          chart: b._1,
          post: ey.vU,
          landingBlockEntities: P.oT,
          contextMenuPlaylists: R,
          musicHistory: ec,
          createPlaylist: L.b_,
          location: _.CU,
          nonMusic: em.NG,
          disclaimer: ta.nU,
          communication: eU,
          trailer: ez.L,
          modals: eF,
          landing: P.d5,
          fullscreenPlayer: eW.Oe,
          fullscreenVideoPlayer: eK.y,
          releaseNotes: eX.ZP,
          trackLyrics: x.Nl,
          ugcUploadCenter: te,
          paymentWidgetModal: v._$,
          offers: tn.C,
          quality: eW.zC,
          kids: ea,
          slam: e5,
          favoriteTracks: $.W,
          advert: eW.Tk,
          track: eV.uD,
          continueListen: eq.Fu,
          playlistPersonal: ep.uD,
          familyInvite: y.Z6,
          redAlert: tl,
          shareIframe: eQ.x,
          paywall: eY.$h,
        }).views((e) => ({
          get library() {
            if (!(0, u.fh)(e)) return e.libraryAllIds;
            let { experiments: t } = (0, u.yj)(e);
            if (t.checkExperiment(h.peG.WebNextLibrarySync, "on"))
              return e.librarySync;
            return e.libraryAllIds;
          },
        })),
        th = (e, t) => tc.create(e, t);
      var tm = a(47816);
      let tg = [
          "settings",
          "sonataState",
          "offers",
          "modals",
          "shareIframe",
          "paywall",
        ],
        tp = (e, t) => tg.reduce((t, a) => ((t[a] = e[a]), t), (0, tm.Z)(t));
      (0, l.DT)(!1);
      let ty = (e) => {
          let { nonce: t, snapshotsRef: a } = e;
          (0, c.useContext)(d.ServerInsertedHTMLContext);
        },
        tv = (e) => {
          let { children: t, nonce: a } = e,
            i = (0, c.useRef)([]),
            r = (0, h.wdp)(),
            [n] = (0, c.useState)(() => {
              var e;
              return (
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? th(
                    window.__STATE_SNAPSHOT__[
                      window.__STATE_SNAPSHOT__.length - 1
                    ],
                    r,
                  )
                : th(E, r);
            });
          return (
            (0, c.useLayoutEffect)(() => {
              function e() {
                var e;
                let t =
                  null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                    ? void 0
                    : e[window.__STATE_SNAPSHOT__.length - 1];
                t && (0, u.Xx)(n, tp(n, t)), delete window.__STATE_SNAPSHOT__;
              }
              return (
                e(),
                window.addEventListener("yMusicStateSnapshotUpdated", e),
                () =>
                  window.removeEventListener("yMusicStateSnapshotUpdated", e)
              );
            }, [n]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(ty, { nonce: a, snapshotsRef: i }),
                (0, o.jsx)(h.xfX.Provider, { value: n, children: t }),
              ],
            })
          );
        };
    },
    1070: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThemeProvider: function () {
            return s;
          },
        });
      var i = a(65301),
        r = a(91207),
        n = a(58997);
      let s = (e) => {
        let { children: t } = e,
          a = (0, n.uK4)().get(n.V0J),
          s = (0, n.ozu)(),
          [o, l] = (0, r.useState)((0, n.NK4)(a.get(n.BUb.Theme), s));
        (0, r.useEffect)(() => {
          (0, n.kzC)(a.get(n.BUb.Theme));
        }, [a]),
          (0, r.useEffect)(() => {
            a.get(n.BUb.Theme) === n.rLu && l(s);
          }, [s, a]);
        let u = (0, r.useMemo)(() => ({ theme: o, setTheme: l }), [o]);
        return (0, i.jsx)(n.Nil.Provider, { value: u, children: t });
      };
    },
    16133: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TranslationsProvider: function () {
            return s;
          },
        });
      var i = a(65301),
        r = a(59512),
        n = a(58997);
      let s = (e) => {
        let { children: t } = e,
          { dictionary: a, language: s, defaultLanguage: o } = (0, n.ZSk)(),
          l = (0, n.J4i)();
        return (0, i.jsx)(r.Z, {
          onError: l,
          defaultLocale: o,
          locale: s,
          messages: a,
          children: t,
        });
      };
    },
    14562: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return o.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return r;
        },
      });
      var i = a(2685);
      let r = (e) => ({
          tag: e.tag,
          title: e.title,
          subGenres: (0, i.pj)(
            (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
          ),
        }),
        n = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(n),
        });
      var o = a(58502);
    },
    58502: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return u;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(81437),
        s = a(29778),
        o = a(79942),
        l = a.n(o);
      let u = (0, r.Pi)((e) => {
        let { tag: t, title: a, subGenres: r } = e;
        return (0, i.jsxs)("div", {
          className: l().root,
          children: [
            (0, i.jsx)(s.rU, {
              className: l().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(n.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: l().linkTitle,
                children: a,
              }),
            }),
            r.length > 0 &&
              (0, i.jsx)("div", {
                className: l().list,
                children: r.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: l().item,
                      children: (0, i.jsx)(s.rU, {
                        className: l().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(n.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: l().linkTitle,
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
    55568: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        u: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).FILE_TOO_LARGE = "FILE_TOO_LARGE"),
        (r.TOO_MANY_FILES = "TOO_MANY_FILES"),
        (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (r.SUCCESS = "SUCCESS");
    },
    87544: function (e, t, a) {
      "use strict";
      a.d(t, {
        UgcUploadInitializer: function () {
          return E;
        },
      });
      var i,
        r,
        n = a(96233),
        s = a(91207),
        o = a(58997),
        l = a(65301),
        u = a(37184),
        d = a(29778),
        c = a(44729),
        h = a(81437),
        m = a(68349),
        g = a.n(m);
      ((i = r || (r = {})).ERROR = "error"), (i.SUCCESS = "success");
      let p = (e) => {
        let { playlistName: t, playlistUuid: a, variant: i } = e,
          r = (0, s.useMemo)(
            () =>
              (0, l.jsx)(d.rU, {
                className: g().link,
                href: "/playlists/".concat(a),
                children: (0, l.jsx)(h.Caption, {
                  className: g().title,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: t,
                }),
              }),
            [t, a],
          ),
          n = (0, s.useMemo)(
            () =>
              "error" === i
                ? (0, l.jsx)(c.Z, {
                    id: "ugc.notification-unknown-error",
                    values: { playlistName: r },
                  })
                : (0, l.jsx)(c.Z, {
                    id: "ugc.notification-success",
                    values: { playlistName: r },
                  }),
            [r, i],
          );
        return (0, l.jsx)(d.Yj, {
          className: g().root,
          message: (0, l.jsx)(h.Caption, {
            variant: "div",
            type: "controls",
            size: "m",
            children: n,
          }),
        });
      };
      var y = a(55568);
      let v = () => {
          var e;
          let {
              ugcUploadCenter: { notifications: t },
              playlist: a,
            } = (0, o.oR4)(),
            { notify: i } = (0, o.d$W)(),
            { formatMessage: n } = (0, u.Z)();
          (0, s.useEffect)(() => {
            t.showAllNotifications().forEach((e) => {
              switch (e.type) {
                case y.u.FILE_TOO_LARGE:
                  i(
                    (0, l.jsx)(d.Q, {
                      error: n({ id: "ugc.notification-too-large-file-error" }),
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case y.u.TOO_MANY_FILES:
                  i(
                    (0, l.jsx)(d.Q, {
                      error: n({ id: "ugc.notification-too-many-files-error" }),
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case y.u.UNKNOWN_ERROR:
                  i(
                    (0, l.jsx)(p, {
                      playlistName: e.playlist.title,
                      playlistUuid: e.playlist.uuid,
                      variant: r.ERROR,
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case y.u.SUCCESS:
                  var t;
                  (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) !==
                    e.playlist.kind &&
                    i(
                      (0, l.jsx)(p, {
                        playlistName: e.playlist.title,
                        playlistUuid: e.playlist.uuid,
                        variant: r.SUCCESS,
                      }),
                      { containerId: o.W$x.INFO },
                    );
              }
            });
          }, [
            n,
            t,
            t.pairs.length,
            i,
            null === (e = a.meta) || void 0 === e ? void 0 : e.kind,
          ]);
        },
        E = (0, n.Pi)(() => {
          let { ugcUploadCenter: e } = (0, o.oR4)(),
            t = (0, s.useRef)();
          v();
          let a = (0, s.useCallback)(() => {
              e.checkProcessingTracks();
            }, [e]),
            i = (0, s.useCallback)(() => {
              t.current || (t.current = setInterval(a, 2e3));
            }, [a]),
            r = (0, s.useCallback)(() => {
              clearInterval(t.current), (t.current = void 0);
            }, []);
          (0, s.useEffect)(() => {
            e.shouldCheckProcessingTracks ? i() : r();
          }, [r, i, e.shouldCheckProcessingTracks]),
            (0, s.useEffect)(() => () => r(), [r]);
        });
    },
    25515: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return G.AlbumPage;
        },
        Lf: function () {
          return x;
        },
      });
      var i,
        r,
        n,
        s = a(2685),
        o = a(49430),
        l = a(52416),
        u = a(26157),
        d = a(19522),
        c = a(35068);
      ((r || (r = {})).RECENT_ALBUMS = "recent-albums"),
        ((i = n || (n = {}))[(i.DAY = 1)] = "DAY"),
        (i[(i.WEEK = 7)] = "WEEK"),
        (i[(i.MONTH = 30)] = "MONTH");
      var h = a(14178),
        m = a(4071),
        g = a(54709),
        p = a(29742),
        y = a(73054),
        v = a(48896),
        E = a(58997),
        f = a(91694);
      let S = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var b = a(3154);
      let P = (e) => ({ type: v.lf.TEXT, data: e || null }),
        A = (e) => {
          var t;
          return (0, s.pj)({
            type:
              (null === (t = e.data) || void 0 === t ? void 0 : t.type) ||
              c.V.TRACK,
            id: e.id,
            data: e.data || null,
            loadingState: e.loadingState,
            position: e.position,
            isBest: e.isBest,
            positionInContext: e.positionInContext,
            hasEverFinished: e.hasEverFinished,
          });
        },
        _ = (e) => "".concat(e, "-text"),
        N = (e) => String(e),
        C = (e, t, a, i) => {
          e.forEach((e) => {
            var r;
            if (null === (r = e.albums) || void 0 === r ? void 0 : r[0]) {
              let r = a.get(N(e.id));
              null == r ||
                r.forEach((a) => {
                  var r, n, s;
                  let o = t[a];
                  t[a] = A({
                    id: e.id,
                    loadingState: E.Gui.RESOLVE,
                    positionInContext: null == o ? void 0 : o.positionInContext,
                    data: (0, b.Vt)(e, {
                      hasEverFinished: null == o ? void 0 : o.hasEverFinished,
                    }),
                    position:
                      null === (s = e.albums) || void 0 === s
                        ? void 0
                        : null === (n = s[0]) || void 0 === n
                          ? void 0
                          : null === (r = n.trackPosition) || void 0 === r
                            ? void 0
                            : r.index,
                    isBest: null == i ? void 0 : i.includes(Number(e.id)),
                    hasEverFinished: null == o ? void 0 : o.hasEverFinished,
                  });
                });
              let n = a.get(_(e.id));
              null == n ||
                n.forEach((a) => {
                  var i, r, n;
                  t[a] = P(
                    null === (n = e.albums) || void 0 === n
                      ? void 0
                      : null === (r = n[0]) || void 0 === r
                        ? void 0
                        : null === (i = r.trackPosition) || void 0 === i
                          ? void 0
                          : i.volume,
                  );
                });
            }
          });
        },
        T = (e, t, a) => {
          let i = 0;
          e.volumes.forEach((r) => {
            e.volumes.length > 1 &&
              r[0] &&
              (t.push(P()), a.set(_(r[0].id), [t.length - 1])),
              r.forEach((e) => {
                t.push(
                  A({
                    id: e.id,
                    loadingState: E.Gui.IDLE,
                    positionInContext: i,
                  }),
                );
                let r = a.get(String(e.id));
                a.set(N(e.id), r ? [...r, t.length - 1] : [t.length - 1]), i++;
              });
          });
        },
        I = (e) =>
          (0, s.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(g.ym),
          }),
        k = (e, t, a, i) => {
          e.forEach((e) => {
            let r = a.get(String(e));
            null == r ||
              r.forEach((a) => {
                var r, n;
                t[a] = A({
                  id: e,
                  loadingState: i,
                  positionInContext:
                    null === (r = t[a]) || void 0 === r
                      ? void 0
                      : r.positionInContext,
                  hasEverFinished:
                    null === (n = t[a]) || void 0 === n
                      ? void 0
                      : n.hasEverFinished,
                });
              });
          });
        },
        D = s.V5.model("AlbumDonations", {
          loadingState: s.V5.enumeration(Object.values(E.Gui)),
          items: s.V5.maybeNull(s.V5.array(p.Ew)),
        }),
        L = s.V5.model("LabelItem", { id: s.V5.number, name: s.V5.string }),
        R = s.V5.model("RelatedAlbumsPage", {
          loadingState: s.V5.enumeration(Object.values(E.Gui)),
          items: s.V5.array(g.ug),
        }),
        V = s.V5.model("RelatedContent", {
          loadingState: s.V5.enumeration(Object.values(E.Gui)),
          items: s.V5.maybeNull(s.V5.array(m.fd)),
        }),
        x = s.V5.compose(
          s.V5.model("AlbumPage", {
            id: s.V5.maybeNull(s.V5.number),
            meta: s.V5.maybeNull(g.ug),
            items: s.V5.array(m.JP),
            indexItems: s.V5.map(s.V5.array(s.V5.number)),
            loadingState: s.V5.enumeration(Object.values(E.Gui)),
            errorStatusCode: s.V5.maybeNull(s.V5.number),
            deprecationTargetAlbumId: s.V5.maybeNull(s.V5.number),
            latestGenreAlbums: R,
            otherArtistAlbums: R,
            otherAlbumVersions: s.V5.array(g.ug),
            labels: s.V5.maybeNull(s.V5.array(L)),
            description: s.V5.maybe(s.V5.string),
            donations: D,
            relatedContent: V,
            allTracksUnfinished: s.V5.boolean,
          }),
          f.ie,
          f.Al,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [l.V.PODCAST, l.V.AUDIOBOOK, l.V.FAIRY_TALE].includes(
                  e.meta.type,
                );
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, r, n;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (n = e.meta) || void 0 === n
                  ? void 0
                  : null === (r = n.artists[0]) || void 0 === r
                    ? void 0
                    : r.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var s;
              return !!(
                !this.isNonMusicType &&
                (null === (s = e.meta) || void 0 === s ? void 0 : s.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === E.Gui.REJECT &&
                (e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST)
              );
            },
            get isCacheNotFound() {
              return (
                e.loadingState === E.Gui.REJECT && e.errorStatusCode === h.DW
              );
            },
            get isRejected() {
              return e.loadingState === E.Gui.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === E.Gui.IDLE ||
                e.loadingState === E.Gui.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === E.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === E.Gui.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === E.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === E.Gui.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === E.Gui.IDLE ||
                e.loadingState === E.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === E.Gui.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === E.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === E.Gui.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === E.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === E.Gui.PENDING
              );
            },
            get isRelatedContentLoading() {
              return (
                e.relatedContent.loadingState === E.Gui.IDLE ||
                e.relatedContent.loadingState === E.Gui.PENDING
              );
            },
            get contextMeta() {
              var u, d, c, m, g, p, y, f, S, b;
              return {
                id: e.meta.id,
                title: null === (u = e.meta) || void 0 === u ? void 0 : u.title,
                coverUri:
                  null === (d = e.meta) || void 0 === d ? void 0 : d.coverUri,
                type: null === (c = e.meta) || void 0 === c ? void 0 : c.type,
                year: null === (m = e.meta) || void 0 === m ? void 0 : m.year,
                version:
                  null === (g = e.meta) || void 0 === g ? void 0 : g.version,
                contentWarning:
                  null === (p = e.meta) || void 0 === p
                    ? void 0
                    : p.contentWarning,
                genre: null === (y = e.meta) || void 0 === y ? void 0 : y.genre,
                likesCount:
                  null === (f = e.meta) || void 0 === f ? void 0 : f.likesCount,
                averageColor:
                  null === (S = e.meta) || void 0 === S
                    ? void 0
                    : S.averageColor,
                available:
                  null === (b = e.meta) || void 0 === b
                    ? void 0
                    : b.isAvailable,
              };
            },
            get tracks() {
              return e.items.filter((e) => e.type !== v.lf.TEXT);
            },
            get lastEpisodes() {
              return this.tracks.slice(0, 5);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
              afterCreate() {
                e.getDescriptionTexts();
              },
              setAlbumUnfinished: () => {
                var a;
                t.markUnfinished({ albumId: e.id || 0 }),
                  null === (a = e.meta) || void 0 === a || a.updateFinished(!1);
              },
              setAllTracksUnfinished: (t) => {
                e.allTracksUnfinished = t;
              },
              checkAllAlbumTrackFinished: () => {
                var a, i;
                e.items
                  .filter((e) => {
                    let { type: t, data: a } = e;
                    return a && t !== v.lf.TEXT;
                  })
                  .every((e) => {
                    var t;
                    let { data: a } = e;
                    return null == a
                      ? void 0
                      : null === (t = a.streamProgress) || void 0 === t
                        ? void 0
                        : t.hasEverFinished;
                  }) &&
                  ((null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.listeningFinished) ||
                    (t.markFinished({ albumId: Number(e.id) }),
                    null === (i = e.meta) ||
                      void 0 === i ||
                      i.updateFinished(!0)));
              },
              markTracksFinished: (t) => {
                let { withoutTracks: a = [] } = t;
                e.items.forEach((e) => {
                  if (e.type === v.lf.TEXT) return;
                  let { data: t } = e;
                  if (!(t && a.includes(t.id))) {
                    if (t) {
                      var i;
                      null === (i = t.streamProgress) ||
                        void 0 === i ||
                        i.updateEverFinished(!0);
                    } else e.updateEverFinished(!0);
                  }
                });
              },
              markFinished: (0, s.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: i } = (0, s.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumFinished(t);
                } catch (e) {
                  return i.error(e), u.P.ERROR;
                }
              }),
              markUnfinished: (0, s.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: i } = (0, s.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumUnfinished(t);
                } catch (e) {
                  return i.error(e), u.P.ERROR;
                }
              }),
              setListeningFinishedStatus: (0, s.ls)(function* () {
                var a;
                return (
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.listeningFinished
                )
                  ? (t.setAllTracksUnfinished(!0),
                    yield t.markUnfinished({ albumId: Number(e.id) }))
                  : yield t.markFinished({ albumId: Number(e.id) });
              }),
              getLatestGenreAlbums: (0, s.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, s.dU)(e);
                if (e.latestGenreAlbums.loadingState !== E.Gui.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = E.Gui.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, s.pj)(i.albums.map(g.ym))),
                      (e.latestGenreAlbums.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = E.Gui.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, s.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: r } = (0, s.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== E.Gui.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = E.Gui.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = E.Gui.PENDING;
                    let r = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, s.pj)(
                      r.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(g.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      (e.otherArtistAlbums.loadingState = E.Gui.REJECT);
                  }
              }),
              getTracks: (0, s.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: r } = (0, s.dU)(e);
                try {
                  var n;
                  if (!(null === (n = e.meta) || void 0 === n ? void 0 : n.id))
                    return;
                  k(a, e.items, e.indexItems, E.Gui.PENDING);
                  let t = yield i.getTracksMeta({
                    trackIds: S(a, e.meta.id),
                    withProgress: !0,
                  });
                  C(t, e.items, e.indexItems, e.meta.bestAlbumTracks);
                } catch (t) {
                  r.error(t), k(a, e.items, e.indexItems, E.Gui.REJECT);
                }
              }),
              getDonations: (0, s.ls)(function* (t) {
                let { albumId: a } = t,
                  { experiments: i } = (0, s.yj)(e),
                  { donationResource: r, modelActionsLogger: n } = (0, s.dU)(e);
                if (
                  i.checkExperiment(
                    E.peG.WebNextAlbumDonateChooserButton,
                    "on",
                  ) &&
                  e.donations.loadingState !== E.Gui.PENDING
                )
                  try {
                    e.donations.loadingState = E.Gui.PENDING;
                    let { donations: t } = yield r.getAlbumDonations({
                      albumId: a,
                    });
                    t && (e.donations.items = (0, s.pj)(t.map(p.fv))),
                      (e.donations.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    n.error(t), (e.donations.loadingState = E.Gui.REJECT);
                  }
              }),
              getData: (0, s.ls)(function* (a) {
                let { albumId: i, resumeStream: u, preloadedAlbum: h } = a,
                  { albumResource: m, modelActionsLogger: p } = (0, s.dU)(e),
                  { experiments: v, disclaimer: f } = (0, s.yj)(e),
                  S = v.checkExperiment(
                    E.peG.WebNextAlbumDisableVersions,
                    "on",
                  ),
                  b = v.checkExperiment(E.peG.WebNextAlbumDisableTracks, "on"),
                  P = v.checkExperiment(
                    E.peG.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  A = v.checkExperiment(
                    E.peG.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  _ = v.checkExperiment(E.peG.WebNextAgentPodcast, "on"),
                  N = v.checkExperiment(
                    E.peG.WebNextNewExplicitApiModalFA,
                    "on",
                  );
                if (((e.id = i), e.loadingState !== E.Gui.PENDING))
                  try {
                    var C, I, k, D, L, R, V;
                    let a, p;
                    e.loadingState = E.Gui.PENDING;
                    let v = h;
                    if (
                      (v ||
                        (v = yield m.getAlbumWithTracksIds({
                          albumId: i,
                          resumeStream: u,
                        })),
                      (null == v ? void 0 : v.error) === "not-found")
                    ) {
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                        (e.loadingState = E.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = E.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = E.Gui.REJECT);
                      return;
                    }
                    if (
                      null === (C = v.deprecation) || void 0 === C
                        ? void 0
                        : C.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        v.deprecation.targetAlbumId),
                        (e.loadingState = E.Gui.RESOLVE);
                      return;
                    }
                    let x = (
                        null !== (k = v.disclaimers) && void 0 !== k ? k : []
                      ).includes(d.e.MODAL),
                      G =
                        v.type === l.V.PODCAST &&
                        (null !== (D = v.disclaimers) && void 0 !== D
                          ? D
                          : []
                        ).includes(d.e.FOREIGN_AGENT),
                      O =
                        null ===
                          (I = (0, E.V4d)(
                            null !== (L = v.disclaimers) && void 0 !== L
                              ? L
                              : [],
                            d.e.FOREIGN_AGENT,
                          )) || void 0 === I
                          ? void 0
                          : I[0];
                    (x || (_ && G) || (N && O)) &&
                      (yield f.getDisclaimerData({
                        entityId: i,
                        entityType:
                          v.type === l.V.PODCAST ? E.coP.PODCAST : E.coP.ALBUM,
                        newDisclaimerId: null == O ? void 0 : O.id,
                      }));
                    let { sonataState: w } = (0, s.yj)(e);
                    if (
                      (w.setUnloadedEntitiesData(
                        v.volumes.flat().map((e) => (0, y.RN)(e.id)),
                      ),
                      (e.meta = (0, g.ym)(v)),
                      (e.labels = (0, s.pj)(v.labels)),
                      (e.contentWarning = (0, s.pj)(v.contentWarning)),
                      (e.description = (0, s.pj)(v.description)),
                      !S &&
                        v.duplicates &&
                        v.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, s.pj)(
                          null === (R = v.duplicates) || void 0 === R
                            ? void 0
                            : R.map(g.ym),
                        )),
                      !b)
                    ) {
                      T(v, e.items, e.indexItems);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === c.V.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !P && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: r.RECENT_ALBUMS,
                          period: n.WEEK,
                          pageSize: 8,
                          genre: v.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = E.Gui.RESOLVE),
                      !A && e.isOtherArtistAlbumsAvailable
                        ? (p = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (V = v.artists[0]) || void 0 === V
                                  ? void 0
                                  : V.id,
                              ),
                              limit: 8,
                            },
                            i,
                          ))
                        : (e.otherArtistAlbums.loadingState = E.Gui.RESOLVE),
                      yield Promise.allSettled([a, p]),
                      e.loadingState !== E.Gui.IDLE &&
                        (e.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    p.error(t),
                      t instanceof o.du && (e.errorStatusCode = t.statusCode),
                      e.loadingState !== E.Gui.IDLE &&
                        ((e.loadingState = E.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = E.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = E.Gui.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, s.ls)(function* () {
                let { albumResource: t, modelActionsLogger: a } = (0, s.dU)(e);
                if (e.relatedContent.loadingState !== E.Gui.PENDING)
                  try {
                    var i, r;
                    if (
                      !(null === (i = e.meta) || void 0 === i ? void 0 : i.id)
                    )
                      return;
                    e.relatedContent.loadingState = E.Gui.PENDING;
                    let a = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, s.pj)(
                      null === (r = a.blocks) || void 0 === r
                        ? void 0
                        : r.map(I),
                    )),
                      (e.relatedContent.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.relatedContent.loadingState = E.Gui.REJECT);
                  }
              }),
              reset() {
                let { sonataState: t } = (0, s.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  e.indexItems.clear(),
                  (e.loadingState = E.Gui.IDLE),
                  (e.donations.loadingState = E.Gui.IDLE),
                  (e.latestGenreAlbums.loadingState = E.Gui.IDLE),
                  (e.otherArtistAlbums.loadingState = E.Gui.IDLE),
                  (e.description = ""),
                  (e.relatedContent.loadingState = E.Gui.IDLE),
                  (e.allTracksUnfinished = !1),
                  e.destroyItems([
                    e.meta,
                    e.items,
                    e.latestGenreAlbums.items,
                    e.otherArtistAlbums.items,
                    e.otherAlbumVersions,
                    e.donations.items,
                    e.labels,
                    e.relatedContent.items,
                  ]);
              },
            };
            return t;
          });
      a(26386);
      var G = a(82463);
    },
    60345: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return V.ArtistAlbumsPage;
        },
        MX: function () {
          return i.M;
        },
        aG: function () {
          return x.ArtistConcertsPage;
        },
        vQ: function () {
          return G.ArtistFamiliarPage;
        },
        xA: function () {
          return O.ArtistPage;
        },
        Od: function () {
          return R;
        },
        x3: function () {
          return w.ArtistSimilarPage;
        },
        hD: function () {
          return M.ArtistTracksPage;
        },
      });
      var i = a(54348),
        r = a(58997),
        n = a(2685),
        s = a(49430),
        o = a(19522),
        l = a(14178),
        u = a(54709),
        d = a(30302),
        c = a(77702),
        h = a(81706),
        m = a(3154),
        g = a(9096),
        p = a(81097),
        y = a(91694);
      let v = (e, t) =>
        (0, n.pj)({
          artist: (0, g.d)(e),
          lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
        });
      var E = a(5831);
      let f = (e) =>
          (0, n.pj)({
            clipId: e.clipId,
            title: e.title,
            thumbnail: e.thumbnail,
            previewUrl: e.previewUrl,
            duration: e.duration,
            artists: (e.artists || []).map((e) => (0, g.tR)({ artist: e })),
            contentWarning: e.explicit ? E.F.EXPLICIT : void 0,
            ...(0, r.NuW)(e),
          }),
        S = (e) => {
          let t = e.artists.map((e) => (0, g.tR)({ artist: e }));
          return (0, n.pj)({
            playlist: (0, h.RE)({ playlist: e.playlist }),
            artists: t,
          });
        },
        b = n.V5.compose(
          n.V5.model("ArtistAlbumsPage", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            pager: n.V5.maybeNull(y.Vn),
            variant: n.V5.maybeNull(n.V5.enumeration(Object.values(i.M))),
            alreadyRequestedPages: n.V5.map(n.V5.number),
            pendingPages: n.V5.map(n.V5.number),
            requests: n.V5.maybeNull(n.V5.number),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            items: n.V5.array(n.V5.maybeNull(u.ug)),
          }),
          y.Al,
        )
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === r.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === r.Gui.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            setVariant: (t) => {
              e.variant = t;
            },
            getData: (0, n.ls)(function* (t) {
              let { artistId: a, page: o = 0, pageSize: l = 20, sort: d } = t,
                { artistsResource: c, modelActionsLogger: h } = (0, n.dU)(e);
              if (
                !(
                  (e.loadingState === r.Gui.PENDING &&
                    e.pendingPages.has("".concat(o))) ||
                  e.alreadyRequestedPages.has("".concat(o))
                )
              ) {
                "number" == typeof o &&
                  e.alreadyRequestedPages.set("".concat(o), o);
                try {
                  var m;
                  let t;
                  (e.loadingState = r.Gui.PENDING),
                    e.pendingPages.set("".concat(o), o);
                  let s = {
                    artistId: a,
                    page: o,
                    pageSize: l,
                    sort: { sortBy: null == d ? void 0 : d.sortBy },
                  };
                  switch (e.variant) {
                    case i.M.COMPILATIONS:
                      t = yield c.getAlsoAlbums(s);
                      break;
                    case i.M.DISCOGRAPHY:
                      t = yield c.getDiscographyAlbums(s);
                      break;
                    default:
                      t = yield c.getDirectAlbums(s);
                  }
                  let h = { page: o, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, n.pj)(
                      Array.from({ length: h.total }, () => null),
                    ));
                  let g = t.albums.map(u.ym);
                  (0, r.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: o,
                    pageSize: l,
                  }),
                    (e.pager = h),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    (e.loadingState = r.Gui.RESOLVE);
                } catch (t) {
                  h.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(o));
                }
              }
            }),
            reset() {
              (e.loadingState = r.Gui.IDLE),
                e.pendingPages.clear(),
                (e.variant = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                e.destroyItems([e.pager, e.items]);
            },
          })),
        P = n.V5.compose(
          n.V5.model("ArtistConcertsPage", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            concerts: n.V5.maybeNull(n.V5.array(p.Z)),
          }),
          y.Al,
        )
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === r.Gui.RESOLVE &&
                  (null === (t = e.concerts) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === r.Gui.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              if (e.loadingState !== r.Gui.PENDING)
                try {
                  e.loadingState = r.Gui.PENDING;
                  let { concerts: t } = yield i.getConcerts({ artistId: a });
                  (e.concerts = (0, n.pj)(t.map(p.zj))),
                    (e.loadingState = r.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = r.Gui.IDLE),
                (e.errorStatusCode = null),
                e.destroyItems([e.concerts]);
            },
          })),
        A = (e) =>
          (0, n.pj)({
            ...(0, u.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        _ = n.V5.compose(
          n.V5.model("ArtistFamiliarPage", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            vibeTracks: n.V5.maybeNull(n.V5.array(m.le)),
            collectionTracks: n.V5.maybeNull(n.V5.array(m.le)),
            collectionAlbums: n.V5.maybeNull(n.V5.array(u.ug)),
          }),
          y.Al,
        )
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === r.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === r.Gui.REJECT;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === s.CN.NOT_FOUND ||
                e.errorStatusCode === s.CN.BAD_REQUEST;
              return e.loadingState === r.Gui.REJECT && t;
            },
            get hasCollectionEntities() {
              var t, a;
              return (
                (this.isLoaded &&
                  Number(
                    null === (t = e.collectionTracks) || void 0 === t
                      ? void 0
                      : t.length,
                  ) > 0) ||
                Number(
                  null === (a = e.collectionAlbums) || void 0 === a
                    ? void 0
                    : a.length,
                ) > 0
              );
            },
            get shouldShowTitleBlocks() {
              var i, n;
              if (this.isLoading) return !0;
              return (
                Number(
                  null === (i = e.collectionTracks) || void 0 === i
                    ? void 0
                    : i.length,
                ) > 0 &&
                Number(
                  null === (n = e.collectionAlbums) || void 0 === n
                    ? void 0
                    : n.length,
                ) > 0
              );
            },
            get hasVibeTracks() {
              var o;
              return (
                Number(
                  null === (o = e.vibeTracks) || void 0 === o
                    ? void 0
                    : o.length,
                ) > 0
              );
            },
            get collectionEntitiesData() {
              var l, u;
              return null !==
                (u =
                  null === (l = e.collectionTracks) || void 0 === l
                    ? void 0
                    : l.map(m.E5)) && void 0 !== u
                ? u
                : [];
            },
            get vibeEntitiesData() {
              var d, c;
              return null !==
                (c =
                  null === (d = e.vibeTracks) || void 0 === d
                    ? void 0
                    : d.map(m.E5)) && void 0 !== c
                ? c
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              if (e.loadingState !== r.Gui.PENDING)
                try {
                  var l, u, d, c, h, g;
                  e.loadingState = r.Gui.PENDING;
                  let t = yield i.getFamiliarYou({
                    artistId: a,
                    waveTracksLimit: 100,
                    collectionTracksLimit: 100,
                    collectionAlbumsLimit: 20,
                  });
                  (e.vibeTracks = (0, n.pj)(
                    null === (u = t.wave) || void 0 === u
                      ? void 0
                      : null === (l = u.tracks) || void 0 === l
                        ? void 0
                        : l.map((e) => (0, m.Vt)(e)),
                  )),
                    (e.collectionTracks = (0, n.pj)(
                      null === (c = t.collection) || void 0 === c
                        ? void 0
                        : null === (d = c.tracks) || void 0 === d
                          ? void 0
                          : d.map((e) => (0, m.Vt)(e)),
                    )),
                    (e.collectionAlbums = (0, n.pj)(
                      null === (g = t.collection) || void 0 === g
                        ? void 0
                        : null === (h = g.albums) || void 0 === h
                          ? void 0
                          : h.map(A),
                    )),
                    (e.loadingState = r.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = r.Gui.IDLE),
                (e.errorStatusCode = null),
                e.destroyItems([e.vibeTracks, e.collectionTracks]);
            },
          }));
      var N = a(50684);
      let C = n.V5.model("ArtistPick", {
          playlist: N.Cd,
          artists: n.V5.array(g.Go),
        }),
        T = n.V5.compose(
          n.V5.model("ArtistSimilarArtistsPage", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            similarArtists: n.V5.maybeNull(n.V5.array(g.Go)),
          }),
          y.Al,
        )
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === r.Gui.RESOLVE &&
                  (null === (t = e.similarArtists) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === r.Gui.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              try {
                e.loadingState = r.Gui.PENDING;
                let t = yield i.getSimilarArtists({ artistId: a });
                (e.similarArtists = (0, n.pj)(t.similarArtists.map(g.d))),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.REJECT);
              }
            }),
            reset() {
              (e.loadingState = r.Gui.IDLE),
                (e.errorStatusCode = null),
                e.destroyItems([e.similarArtists]);
            },
          }));
      var I = a(44818);
      let k = n.V5.model("FamiliarInfo", {
        loadingState: n.V5.enumeration(Object.values(r.Gui)),
        vibeTrackCount: n.V5.optional(n.V5.number, 0),
        collectionTrackCount: n.V5.optional(n.V5.number, 0),
        collectionAlbumCount: n.V5.optional(n.V5.number, 0),
      })
        .views((e) => ({
          get isLoaded() {
            return e.loadingState === r.Gui.RESOLVE;
          },
          get hasTracks() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.vibeTrackCount > 0)
            );
          },
          get hasFamiliarInfo() {
            return (
              this.isLoaded && (this.hasTracks || e.collectionAlbumCount > 0)
            );
          },
          get tracksCount() {
            return e.collectionTrackCount + e.vibeTrackCount;
          },
          get hasCollectionEntities() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.collectionAlbumCount > 0)
            );
          },
          get hasVibeEntities() {
            return this.isLoaded && e.vibeTrackCount > 0;
          },
          href(e) {
            return e
              ? this.hasCollectionEntities
                ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.COLLECTION)
                : this.hasVibeEntities
                  ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.VIBE)
                  : "/artist/".concat(e, "/familiar")
              : "";
          },
        }))
        .actions((e) => ({
          getData: (0, n.ls)(function* (t) {
            let { artistId: a } = t,
              { artistsResource: i, modelActionsLogger: s } = (0, n.dU)(e);
            if (e.loadingState !== r.Gui.PENDING)
              try {
                e.loadingState = r.Gui.PENDING;
                let t = yield i.getFamiliarYouInfo({
                  artistId: a,
                  withWaveInfo: !0,
                  withCollectionInfo: !0,
                });
                t.collection &&
                  ((e.collectionTrackCount = t.collection.trackCount),
                  (e.collectionAlbumCount = t.collection.albumCount)),
                  t.wave && (e.vibeTrackCount = t.wave.trackCount),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.RESOLVE);
              } catch (t) {
                s.error(t),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = r.Gui.IDLE),
              (e.vibeTrackCount = 0),
              (e.collectionTrackCount = 0),
              (e.collectionAlbumCount = 0);
          },
        }));
      var D = a(73054);
      let L = n.V5.compose(
          n.V5.model("FullTracksList", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            ids: n.V5.maybeNull(n.V5.array(n.V5.string)),
            tracks: n.V5.optional(n.V5.map(m.le), {}),
          }),
          y.Al,
        )
          .views((e) => ({
            getTrackByIndex(t) {
              if (!e.ids || !e.ids.length) return null;
              let a = e.ids[t];
              return (a && e.tracks.get(a)) || null;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === r.Gui.RESOLVE &&
                  (null === (t = e.ids) || void 0 === t ? void 0 : t.length) ===
                    0,
                i =
                  e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST;
              return (e.loadingState === r.Gui.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getTracksIds: (0, n.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: o } = (0, n.dU)(e);
              try {
                e.loadingState = r.Gui.PENDING;
                let t = yield i.getArtistTrackIds({ artistId: a }),
                  { sonataState: s } = (0, n.yj)(e);
                s.setUnloadedEntitiesData(t.map((e) => (0, D.RN)(e))),
                  (e.ids = (0, n.pj)(t)),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== r.Gui.IDLE &&
                    (e.loadingState = r.Gui.REJECT);
              }
            }),
            getTracks: (0, n.ls)(function* (t) {
              let { trackIds: a } = t,
                { tracksResource: i, modelActionsLogger: r } = (0, n.dU)(e);
              try {
                let t = yield i.getTracksMeta({
                  trackIds: a,
                  withProgress: !0,
                });
                e.tracks.merge(
                  t.reduce((e, t) => ((e[t.id] = (0, m.Vt)(t)), e), {}),
                );
              } catch (e) {
                r.error(e);
              }
            }),
            reset() {
              let { sonataState: t } = (0, n.yj)(e);
              t.resetUnloadedEntitiesData(),
                (e.loadingState = r.Gui.IDLE),
                e.destroyItems([e.tracks, e.ids]);
            },
          })),
        R = n.V5.compose(
          n.V5.model("ArtistPage", {
            loadingState: n.V5.enumeration(Object.values(r.Gui)),
            id: n.V5.maybeNull(n.V5.string),
            meta: n.V5.maybeNull(d.o9),
            popularTracks: n.V5.array(m.le),
            lastRelease: n.V5.maybeNull(u.ug),
            upcomingAlbum: n.V5.maybeNull(u.W9),
            concerts: n.V5.maybeNull(n.V5.array(p.Z)),
            similarArtists: n.V5.array(g.Go),
            playlists: n.V5.array(h.d2),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            deprecationTargetArtistId: n.V5.maybeNull(n.V5.number),
            albums: n.V5.array(u.ug),
            discography: n.V5.array(u.ug),
            compilations: n.V5.array(u.ug),
            clips: n.V5.array(c.x$),
            artistPick: n.V5.maybeNull(C),
            familiarInfo: k,
            albumsSubpage: b,
            fullTracksListSubpage: L,
            concertsSubpage: P,
            similarArtistsSubPage: T,
            familiarSubpage: _,
          }),
          y.Al,
        )
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING
              );
            },
            get hasPopularTracks() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.popularTracks.length > 0
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.albums.length > 0
              );
            },
            get hasDiscography() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.discography.length > 0
              );
            },
            get hasCompilations() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.compilations.length > 0
              );
            },
            get hasSimilarArtists() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.similarArtists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                (e.playlists && e.playlists.length > 0)
              );
            },
            get hasConcerts() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                (e.concerts && e.concerts.length > 0)
              );
            },
            get hasClips() {
              return (
                e.loadingState === r.Gui.IDLE ||
                e.loadingState === r.Gui.PENDING ||
                e.clips.length > 0
              );
            },
            get concertsLink() {
              var t, a;
              if (
                (null === (t = e.meta) || void 0 === t
                  ? void 0
                  : t.artist.id) &&
                e.concerts &&
                e.concerts.length > d.lj
              )
                return "/artist/".concat(
                  null === (a = e.meta) || void 0 === a ? void 0 : a.artist.id,
                  "/concerts",
                );
              return null;
            },
            get isNotFound() {
              return (
                e.loadingState === r.Gui.REJECT &&
                (e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST)
              );
            },
            get isCacheNotFound() {
              return (
                e.loadingState === r.Gui.REJECT && e.errorStatusCode === l.DW
              );
            },
            get isLoaded() {
              return e.loadingState === r.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === r.Gui.REJECT;
            },
            get hasReleaseBlock() {
              return !!(this.isLoading || e.upcomingAlbum || e.lastRelease);
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { artistId: a, preloadedArtist: i } = t,
                { slides: l, experiments: c, disclaimer: y } = (0, n.yj)(e),
                { artistsResource: E, modelActionsLogger: b } = (0, n.dU)(e),
                P = c.checkExperiment(
                  r.peG.WebNextArtistDisableLastReleases,
                  "on",
                ),
                A = c.checkExperiment(
                  r.peG.WebNextArtistDisablePopularTracks,
                  "on",
                ),
                _ = c.checkExperiment(
                  r.peG.WebNextArtistDisableSimilarArtists,
                  "on",
                ),
                N = c.checkExperiment(
                  r.peG.WebNextArtistDisablePopularAlbums,
                  "on",
                ),
                C = c.checkExperiment(
                  r.peG.WebNextArtistDisableDiscography,
                  "on",
                ),
                T = c.checkExperiment(
                  r.peG.WebNextArtistDisableCompilations,
                  "on",
                ),
                I = c.checkExperiment(
                  r.peG.WebNextArtistDisablePlaylists,
                  "on",
                ),
                k = c.checkExperiment(r.peG.WebNextLegalRejectArtist, "on"),
                D = c.checkExperiment(r.peG.WebNextAgentArtist, "on"),
                L = c.checkExperiment(r.peG.WebNextNewExplicitApiModalFA, "on");
              if (((e.id = a), e.loadingState !== r.Gui.PENDING))
                try {
                  var R, V, x, G;
                  e.loadingState = r.Gui.PENDING;
                  let t = i;
                  t ||
                    (t = yield E.getBriefInfo({
                      artistId: a,
                      popularTracksCount: d.ef,
                      fetchPlaylistLikesCounts: !0,
                      discographyBlockEnabled: !0,
                      useClipDataFormat: !0,
                    }));
                  let {
                    popularTracks: c,
                    error: b,
                    artist: O,
                    stats: w,
                    albums: M,
                    playlists: j,
                    alsoAlbums: U,
                    similarArtists: q,
                    lastReleases: F,
                    concerts: B,
                    upcomingAlbum: Y,
                    discography: W,
                    artistPick: z,
                    clips: H,
                  } = t;
                  if (
                    "not-found" === b ||
                    (null == O ? void 0 : O.error) === "not-found"
                  ) {
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                      (e.loadingState = r.Gui.REJECT);
                    return;
                  }
                  if (
                    null === (R = O.deprecation) || void 0 === R
                      ? void 0
                      : R.targetArtistId
                  ) {
                    (e.deprecationTargetArtistId =
                      O.deprecation.targetArtistId),
                      (e.loadingState = r.Gui.RESOLVE);
                    return;
                  }
                  e.meta = (0, n.pj)(v(O, w));
                  let K = (
                      null !== (V = O.disclaimers) && void 0 !== V ? V : []
                    ).includes(o.e.MODAL),
                    J = (
                      null !== (x = O.disclaimers) && void 0 !== x ? x : []
                    ).includes(o.e.FOREIGN_AGENT),
                    X = ((0, r.V4d)(
                      null !== (G = O.disclaimers) && void 0 !== G ? G : [],
                      o.e.FOREIGN_AGENT,
                    ) || [])[0];
                  if (
                    (((!O.available && K && k) || (D && J) || (L && X)) &&
                      (yield y.getDisclaimerData({
                        entityId: a,
                        entityType: r.coP.ARTIST,
                        newDisclaimerId: null == X ? void 0 : X.id,
                      })),
                    !P && F && F.length > 0)
                  ) {
                    let t = F[0];
                    t &&
                      M &&
                      M.length > 1 &&
                      (e.lastRelease = (0, n.pj)((0, u.ym)(t)));
                  }
                  Y && (e.upcomingAlbum = (0, n.pj)((0, u.wq)(Y))),
                    B && (e.concerts = (0, n.pj)(B.map(p.zj))),
                    !A &&
                      c &&
                      c.length > 0 &&
                      (e.popularTracks = (0, n.pj)(
                        c.slice(0, d.ef).map((e) => (0, m.Vt)(e)),
                      )),
                    !_ &&
                      q &&
                      q.length > 0 &&
                      (e.similarArtists = (0, n.pj)(q.slice(0, d.r2).map(g.d))),
                    !N &&
                      Number(null == M ? void 0 : M.length) > 0 &&
                      (e.albums = (0, n.pj)(null == M ? void 0 : M.map(u.ym))),
                    !C &&
                      Number(null == W ? void 0 : W.length) > 0 &&
                      (e.discography = (0, n.pj)(
                        null == W ? void 0 : W.map(u.ym).slice(0, d.kT),
                      )),
                    !T &&
                      Number(null == U ? void 0 : U.length) > 0 &&
                      (e.compilations = (0, n.pj)(
                        null == U ? void 0 : U.map(u.ym).slice(0, d.kT),
                      )),
                    !I &&
                      j &&
                      j.length > 0 &&
                      (e.playlists = (0, n.pj)(j.map(h.Q9).slice(0, d.kT))),
                    z && (e.artistPick = S(z)),
                    H && (e.clips = (0, n.pj)(H.map(f).slice(0, d.rL))),
                    l.resetArtist(),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.RESOLVE);
                } catch (t) {
                  b.error(t),
                    t instanceof s.du && (e.errorStatusCode = t.statusCode),
                    e.loadingState !== r.Gui.IDLE &&
                      (e.loadingState = r.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = r.Gui.IDLE),
                (e.id = null),
                (e.errorStatusCode = null),
                (e.deprecationTargetArtistId = null),
                e.destroyItems([
                  e.clips,
                  e.popularTracks,
                  e.similarArtists,
                  e.playlists,
                  e.albums,
                  e.discography,
                  e.compilations,
                  e.meta,
                  e.lastRelease,
                  e.upcomingAlbum,
                  e.concerts,
                  e.artistPick,
                ]);
            },
          }));
      var V = a(92496),
        x = a(36438),
        G = a(65882);
      a(87633);
      var O = a(86441),
        w = a(67777),
        M = a(32420);
    },
    59564: function (e, t, a) {
      "use strict";
      a.d(t, {
        _1: function () {
          return h;
        },
        oA: function () {
          return m.ChartPodcastsPage;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(54709),
        s = a(58997),
        o = a(91694);
      let l = i.V5.compose(
        i.V5.model("ChartPodcastsPage", {
          loadingState: i.V5.enumeration(Object.values(s.Gui)),
          title: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(n.ug),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
        }),
        o.Al,
      )
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === s.Gui.IDLE || e.loadingState === s.Gui.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === s.Gui.RESOLVE && !e.items.length,
              a =
                e.errorStatusCode === r.CN.NOT_FOUND ||
                e.errorStatusCode === r.CN.BAD_REQUEST;
            return (e.loadingState === s.Gui.REJECT && a) || t;
          },
          get isSomethingWrong() {
            return e.loadingState === s.Gui.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { chartResource: a, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                let r;
                (e.loadingState = s.Gui.PENDING),
                  (r = t
                    ? yield a.getChartPodcastsCategory({ categoryId: t })
                    : yield a.getChartPodcasts()),
                  (e.title = r.title),
                  r.chartPositions &&
                    (e.items = (0, i.pj)(
                      r.chartPositions.map((e) =>
                        (0, n.re)(e.album, e.chartPosition),
                      ),
                    )),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE),
              (e.title = null),
              (e.errorStatusCode = null),
              e.destroyItems([e.items]);
          },
        }));
      var u = a(3154);
      let d = i.V5.model("ChartPagePlaylistModel", {
          uuid: i.V5.string,
          uid: i.V5.number,
          kind: i.V5.number,
        }),
        c = i.V5.model("ChartTracksPageModel", {
          title: i.V5.maybeNull(i.V5.string),
          playlistMeta: i.V5.maybeNull(d),
          items: i.V5.array(u.le),
          loadingState: i.V5.enumeration(Object.values(s.Gui)),
        })
          .actions((e) => ({
            getTracks: (0, i.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, i.dU)(e);
              if (e.loadingState !== s.Gui.PENDING)
                try {
                  e.loadingState = s.Gui.PENDING;
                  let a = yield t.getChartTracks();
                  (e.title = a.title),
                    (e.playlistMeta = (0, i.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, i.pj)(
                      a.chartPositions.map((e) =>
                        (0, u.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gui.PENDING ||
                e.loadingState === s.Gui.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === s.Gui.REJECT;
            },
          })),
        h = i.V5.model("ChartPageModel", {
          tracksSubPage: c,
          podcastsSubPage: l,
        });
      a(74793);
      var m = a(34623);
      a(49020);
    },
    74793: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsNotFoundPage: function () {
          return l;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(32544),
        o = a(58997);
      let l = (0, r.Pi)(() => {
        let { podcastsSubPage: e } = (0, o.oR4)().chart;
        return (
          (0, n.useEffect)(() => {
            e.reset();
          }, []),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    34623: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsPage: function () {
          return f;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(55975),
        d = a(82607),
        c = a(81437),
        h = a(36643),
        m = a(54709),
        g = a(21016),
        p = a(58997),
        y = a(29778),
        v = a(56741),
        E = a.n(v);
      let f = (0, n.Pi)((e) => {
        let { categoryId: t } = e,
          {
            chart: { podcastsSubPage: a },
            settings: { isMobile: n },
          } = (0, p.oR4)(),
          { contentScrollRef: v, setContentScrollRef: f } = (0, p.$Y6)(),
          { formatMessage: S } = (0, l.Z)(),
          b = (0, p.k67)();
        a.loadingState === p.Gui.IDLE && (0, o.use)(a.getData(t));
        let P = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(y.$_, { className: E().footer }),
            }),
            [],
          ),
          A = (0, o.useMemo)(
            () =>
              a.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: E().shimmerTitle,
                    radius: "l",
                  }),
            [a.title],
          );
        if (
          ((0, p.NOh)(a.loadingState === p.Gui.RESOLVE),
          a.isNotFound && (0, s.notFound)(),
          a.isSomethingWrong)
        )
          return (0, i.jsx)(h.D, {});
        let _ = a.isLoading ? 20 : a.items.length;
        return (
          (0, o.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          (0, i.jsx)(p.Lh6, {
            pageId: t ? p.Rhz.CHART_PODCASTS_CATEGORY : p.Rhz.CHART_PODCASTS,
            children: (0, i.jsx)(g.I7, {
              scrollElement: v,
              outerTitle: a.title,
              children: (0, i.jsxs)("div", {
                className: E().root,
                ...(0, u.BA)(u.Br.chart.CHART_PODCASTS),
                children: [
                  (0, i.jsx)(y.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: b.canBack,
                    children: A,
                  }),
                  (0, i.jsx)(y.Wv, {
                    className: (0, r.W)(E().scrollContainer, E().important),
                    listClassName: E().content,
                    customComponents: P,
                    itemContentCallback: (e) => {
                      let t = a.items[e],
                        r = S(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: S({ id: "entity-names.album" }) },
                        );
                      return !t || a.isLoading
                        ? (0, i.jsx)(y.hi, { "aria-label": r })
                        : (0, i.jsx)(m.rf, {
                            album: t,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withChart: !0,
                            withAddition: !1,
                          });
                    },
                    handleRef: f,
                    initialItemCount: _,
                    totalCount: _,
                    isMobileLayout: n,
                    useWindowScroll: n,
                    context: {
                      listAriaLabel: S({
                        id: "entity-names.chart-podcasts-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    49020: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartTracksPage: function () {
          return f;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(91207),
        o = a(37184),
        l = a(55975),
        u = a(19489),
        d = a(82607),
        c = a(81437),
        h = a(36643),
        m = a(21016),
        g = a(3154),
        p = a(58997),
        y = a(29778),
        v = a(74291),
        E = a.n(v);
      let f = (0, n.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            chart: { tracksSubPage: t },
            settings: { isMobile: a },
          } = (0, p.oR4)(),
          n = (0, p.k67)(),
          { contentScrollRef: v, setContentScrollRef: f } = (0, p.$Y6)(),
          S = (0, p.iXn)(),
          { from: b } = (0, p.MhG)({ pageId: p.Rhz.CHART });
        t.loadingState === p.Gui.IDLE && (0, s.use)(t.getTracks()),
          (0, p.NOh)(t.loadingState === p.Gui.RESOLVE);
        let P = (0, s.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(g._3, {
                    track: a,
                    playContextParams: S(e, {
                      contextData: {
                        type: u.A.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: b,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    }),
                  })
                : (0, i.jsx)(y.DX, {
                    isActive: !0,
                    className: E().shimmerItem,
                    variant: p.Lxt.PLAYLIST,
                  });
            },
            [b, t.items, t.isLoading, t.playlistMeta, S],
          ),
          A = (0, s.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(y.$_, { className: E().footer }),
            }),
            [],
          ),
          _ = (0, s.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: E().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === p.Gui.REJECT
          ? (0, i.jsx)(h.D, {})
          : (0, i.jsx)(p.Lh6, {
              pageId: p.Rhz.CHART,
              children: (0, i.jsx)(m.I7, {
                scrollElement: v,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  ...(0, l.BA)(l.Br.chart.CHART_PAGE),
                  children: [
                    (0, i.jsx)(y.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: n.canBack,
                      children: _,
                    }),
                    (0, i.jsx)(y.Wv, {
                      className: (0, r.W)(E().scrollContainer, E().important),
                      listClassName: E().content,
                      customComponents: A,
                      totalCount: t.items.length,
                      itemContentCallback: P,
                      debounceDurationInMs: 300,
                      handleRef: f,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                      isMobileLayout: a,
                      useWindowScroll: a,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    43322: function (e, t, a) {
      "use strict";
      a.d(t, {
        o: function () {
          return m;
        },
        W: function () {
          return o;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(51921),
        s = a(58997);
      let o = i.V5.model("FavoriteTracksPage", {
        playlistUuid: i.V5.maybeNull(i.V5.string),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get playlistUrl() {
            if (e.playlistUuid) return "/playlists/".concat(e.playlistUuid);
            return;
          },
        }))
        .actions((e) => ({
          getPlaylistUrl: (0, i.ls)(function* () {
            let { landingResource: t, modelActionsLogger: a } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let a = yield t.getBlock({
                  source: {
                    uri: "/landing/block/collection/playlist-with-likes",
                    countWeb: 8,
                  },
                  type: n.g.COLLECTION_PLAYLIST_WITH_LIKES,
                });
                (e.playlistUuid = a.playlist.playlistUuid),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                a.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE), (e.playlistUuid = null);
          },
        }));
      var l = a(65301),
        u = a(96233),
        d = a(91207),
        c = a(32544);
      let h = (0, u.Pi)(() => (0, l.jsx)(c.T, {})),
        m = (0, u.Pi)(() => {
          let { favoriteTracks: e } = (0, s.oR4)(),
            t = (0, s.s0h)(e.playlistUrl);
          if (
            (e.loadingState === s.Gui.IDLE && (0, d.use)(e.getPlaylistUrl()),
            (0, d.useEffect)(
              () => () => {
                e.reset();
              },
              [e],
            ),
            (0, d.useEffect)(() => {
              e.playlistUrl && t();
            }, [e.playlistUrl, t]),
            e.loadingState === s.Gui.REJECT)
          )
            return (0, l.jsx)(h, {});
        });
    },
    77463: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return p.GenreAlbumsPage;
        },
        eq: function () {
          return y.GenreArtistsPage;
        },
        a0: function () {
          return v.GenrePage;
        },
        Kx: function () {
          return g;
        },
        Fe: function () {
          return E.GenrePlaylistsPage;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(54709),
        s = a(81706),
        o = a(9096),
        l = a(58997),
        u = a(91694);
      let d = i.V5.model("GenreAlbumsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(n.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: s = 0,
                  pageSize: o = 20,
                  preloadedMeta: u,
                } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(s))) ||
                  e.alreadyRequestedPages.has("".concat(s))
                )
              ) {
                "number" == typeof s &&
                  e.alreadyRequestedPages.set("".concat(s), s);
                try {
                  var h;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(s), s);
                  let t = u;
                  t ||
                    (t = yield d.getMetatagAlbums({
                      id: a,
                      offset: s,
                      limit: o,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let r = { page: s, perPage: o, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: r.total }, () => null),
                    ));
                  let c = t.albums.map(n.ym);
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: s,
                    pageSize: o,
                  }),
                    (e.pager = r),
                    (e.requests =
                      (null !== (h = e.requests) && void 0 !== h ? h : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(s));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        c = i.V5.model("GenreArtistsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(o.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: n = 0,
                  pageSize: s = 20,
                  preloadedMeta: u,
                } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(n))) ||
                  e.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  e.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var h;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(n), n);
                  let t = u;
                  t ||
                    (t = yield d.getMetatagArtists({
                      id: a,
                      offset: n,
                      limit: s,
                      period: "week",
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let r = { page: n, perPage: s, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: r.total }, () => null),
                    ));
                  let c = t.artists.map((e) => (0, o.d)(e.artist));
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: n,
                    pageSize: s,
                  }),
                    (e.pager = r),
                    (e.requests =
                      (null !== (h = e.requests) && void 0 !== h ? h : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          }));
      var h = a(50684);
      let m = i.V5.model("GenrePlaylistsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(h.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === l.Gui.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: r = 0,
                  pageSize: n = 20,
                  preloadedMeta: s,
                } = t,
                { metatagsResource: o, modelActionsLogger: u } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(r))) ||
                  e.alreadyRequestedPages.has("".concat(r))
                )
              ) {
                "number" == typeof r &&
                  e.alreadyRequestedPages.set("".concat(r), r);
                try {
                  var d;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(r), r);
                  let t = s;
                  t ||
                    (t = yield o.getMetatagPlaylists({
                      id: a,
                      offset: r,
                      limit: n,
                      withLikesCount: !0,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let u = { page: r, perPage: n, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let c = t.playlists.map(h.PV);
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: r,
                    pageSize: n,
                  }),
                    (e.pager = u),
                    (e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  u.error(t),
                    e.alreadyRequestedPages.delete("".concat(r)),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(r));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        g = i.V5.model("GenrePage", {
          id: i.V5.maybeNull(i.V5.string),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          fullTitle: i.V5.maybeNull(i.V5.string),
          artists: i.V5.array(o.Go),
          albums: i.V5.array(n.ug),
          playlists: i.V5.array(s.d2),
          albumsSubpage: d,
          artistsSubpage: c,
          playlistsSubpage: m,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === l.Gui.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && a) || t;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { id: a, preloadedMeta: u } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  e.loadingState = l.Gui.PENDING;
                  let t = u;
                  t || (t = yield d.getMetatagById({ id: a })),
                    (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, i.pj)(t.artists.map(o.d))),
                    (e.albums = (0, i.pj)(t.albums.map(n.ym))),
                    (e.playlists = (0, i.pj)(t.playlists.map(s.Q9))),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, i.pj)([])),
                (e.albums = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([]));
            },
          }));
      var p = a(76651),
        y = a(35156);
      a(32523);
      var v = a(23865),
        E = a(854);
      a(21535);
      var f = a(91207),
        S = a(85933);
      let b = async (e, t) => {
        if (!e)
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        try {
          let {
              container: a,
              backendHostTld: i,
              locale: r,
              host: n,
              fullUrl: s,
              requestUrl: o,
            } = await (0, l.rbP)(),
            u = a.get(l.ZOY);
          return {
            genreMeta: await t(u, e),
            tld: i,
            locale: r,
            host: n,
            fullUrl: s,
            url: o,
          };
        } catch (e) {
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        }
      };
      (0, f.cache)(async (e) =>
        b(e, async (e, t) =>
          e.getMetatagAlbums({ id: t, offset: 0, limit: S.O }),
        ),
      ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagArtists({
              id: t,
              offset: 0,
              limit: S.O,
              period: "week",
            }),
          ),
        ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) => e.getMetatagById({ id: t })),
        ),
        (0, f.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagPlaylists({
              id: t,
              offset: 0,
              limit: S.O,
              withLikesCount: !0,
            }),
          ),
        );
    },
    85933: function (e, t, a) {
      "use strict";
      a.d(t, {
        O: function () {
          return i;
        },
      });
      let i = 20;
    },
    76651: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return E;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(81437),
        d = a(36643),
        c = a(54709),
        h = a(21016),
        m = a(58997),
        g = a(29778),
        p = a(85933),
        y = a(48384),
        v = a.n(y);
      let E = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: y, preloadedMeta: E } = e,
          {
            genre: { albumsSubpage: f },
            settings: { isMobile: S },
          } = (0, m.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: P, setContentScrollRef: A } = (0, m.$Y6)(),
          _ = (0, m.k67)();
        y &&
          f.loadingState === m.Gui.IDLE &&
          (0, o.use)(
            f.getData({
              preloadedMeta: E,
              metatagId: y,
              page: 0,
              pageSize: p.O,
            }),
          );
        let N = (0, o.useCallback)(
          (e) => {
            y && f.getData({ metatagId: y, page: e, pageSize: p.O });
          },
          [f, y],
        );
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        ),
          f.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(f.loadingState === m.Gui.RESOLVE);
        let C = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return f.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_ALBUMS,
              children: (0, i.jsx)(h.I7, {
                scrollElement: P,
                outerTitle: f.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: _.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: f.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        let t = f.items[e],
                          a = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.album" }) },
                          );
                        return t
                          ? (0, i.jsx)(
                              c.rf,
                              { album: t, contentLinesCount: 4 },
                              t.id,
                            )
                          : (0, i.jsx)(g.hi, {
                              "aria-label": a,
                              linesCount: 4,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == f
                              ? void 0
                              : null === (t = f.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: N,
                      pageSize: p.O,
                      totalRequests:
                        null !== (n = f.requests) && void 0 !== n ? n : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: A,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.albums-list" },
                          { genreName: f.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: S,
                      useWindowScroll: S,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    35156: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return E;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(81437),
        d = a(36643),
        c = a(30302),
        h = a(21016),
        m = a(58997),
        g = a(29778),
        p = a(85933),
        y = a(58006),
        v = a.n(y);
      let E = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: y, preloadedMeta: E } = e,
          {
            genre: { artistsSubpage: f },
            settings: { isMobile: S },
          } = (0, m.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: P, setContentScrollRef: A } = (0, m.$Y6)(),
          _ = (0, m.k67)();
        y &&
          f.loadingState === m.Gui.IDLE &&
          (0, o.use)(
            f.getData({
              preloadedMeta: E,
              metatagId: y,
              page: 0,
              pageSize: p.O,
            }),
          );
        let N = (0, o.useCallback)(
          (e) => {
            y && f.getData({ metatagId: y, page: e, pageSize: p.O });
          },
          [f, y],
        );
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        ),
          f.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(f.loadingState === m.Gui.RESOLVE);
        let C = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return f.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_ARTISTS,
              children: (0, i.jsx)(h.I7, {
                scrollElement: P,
                outerTitle: f.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: _.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: f.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == f
                              ? void 0
                              : null === (t = f.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(g.hi, {
                              "aria-label": r,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == f
                              ? void 0
                              : null === (t = f.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: N,
                      pageSize: p.O,
                      totalRequests:
                        null !== (n = f.requests) && void 0 !== n ? n : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: A,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.artists-list" },
                          { genreName: f.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: S,
                      useWindowScroll: S,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    32523: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return s;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(32544);
      let s = (0, r.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    23865: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return S;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(46642),
        d = a(81437),
        c = a(36643),
        h = a(54709),
        m = a(30302),
        g = a(21016),
        p = a(81706),
        y = a(58997),
        v = a(29778),
        E = a(95585),
        f = a.n(E);
      let S = (0, n.Pi)((e) => {
        let { metatagId: t, preloadedMeta: a } = e,
          { genre: n } = (0, y.oR4)(),
          { formatMessage: E } = (0, l.Z)(),
          { contentScrollRef: S, setContentScrollRef: b } = (0, y.$Y6)(),
          P = (0, y.k67)();
        return (t &&
          n.loadingState === y.Gui.IDLE &&
          (0, o.use)(n.getData({ id: t, preloadedMeta: a })),
        n.isNotFound && (0, s.notFound)(),
        (0, o.useEffect)(
          () => () => {
            n.reset();
          },
          [n],
        ),
        (0, y.NOh)(n.loadingState === y.Gui.RESOLVE),
        n.loadingState !== y.Gui.REJECT || n.isNotFound)
          ? (0, i.jsx)(y.Lh6, {
              pageId: y.Rhz.GENRE,
              children: (0, i.jsxs)(g.I7, {
                scrollElement: S,
                outerTitle: n.fullTitle,
                children: [
                  (0, i.jsx)(v.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: P.canBack,
                    children: (0, i.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: n.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(u.t, {
                    className: f().root,
                    containerClassName: f().content,
                    ref: b,
                    children: (0, i.jsxs)("div", {
                      className: f().carouselBlocks,
                      children: [
                        n.hasPlaylists &&
                          (0, i.jsx)(y.Ja5, {
                            blockId: y.BEo.PLAYLISTS_CAROUSEL,
                            blockType: y.BEo.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: y.BEo.PLAYLISTS_CAROUSEL,
                            objectsCount: n.albums.length,
                            children: (0, i.jsx)(p.VD, {
                              isShimmerVisible: n.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                f().carouselBlockHeader,
                                f().carouselBlock,
                              ),
                              containerClassName: f().carouselBlock,
                              playlists: n.playlists,
                              title: E({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                n.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        n.hasAlbums &&
                          (0, i.jsx)(y.Ja5, {
                            blockId: y.BEo.ALBUMS_CAROUSEL,
                            blockType: y.BEo.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: y.BEo.ALBUMS_CAROUSEL,
                            objectsCount: n.albums.length,
                            children: (0, i.jsx)(h.wk, {
                              isShimmerVisible: n.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                f().carouselBlockHeader,
                                f().carouselBlock,
                              ),
                              containerClassName: f().carouselBlock,
                              albums: n.albums,
                              title: E({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                n.id,
                                "/albums",
                              ),
                            }),
                          }),
                        n.hasArtists &&
                          (0, i.jsx)(y.Ja5, {
                            blockId: y.BEo.ARTISTS_CAROUSEL,
                            blockType: y.BEo.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: y.BEo.ARTISTS_CAROUSEL,
                            objectsCount: n.albums.length,
                            children: (0, i.jsx)(v.HY, {
                              isShimmerVisible: n.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                f().carouselBlockHeader,
                                f().carouselBlock,
                              ),
                              containerClassName: f().carouselBlock,
                              title: E({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                n.id,
                                "/artists",
                              ),
                              children: n.artists.map((e) =>
                                (0, i.jsx)(
                                  m.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, i.jsx)(c.D, {});
      });
    },
    854: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return E;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(81437),
        d = a(36643),
        c = a(21016),
        h = a(81706),
        m = a(58997),
        g = a(29778),
        p = a(85933),
        y = a(42954),
        v = a.n(y);
      let E = (0, n.Pi)((e) => {
        var t, a, n;
        let { metatagId: y, preloadedMeta: E } = e,
          {
            genre: { playlistsSubpage: f },
            settings: { isMobile: S },
          } = (0, m.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: P, setContentScrollRef: A } = (0, m.$Y6)(),
          _ = (0, m.k67)();
        y &&
          f.loadingState === m.Gui.IDLE &&
          (0, o.use)(
            f.getData({
              preloadedMeta: E,
              metatagId: y,
              page: 0,
              pageSize: p.O,
            }),
          );
        let N = (0, o.useCallback)(
          (e) => {
            y && f.getData({ metatagId: y, page: e, pageSize: p.O });
          },
          [f, y],
        );
        (0, o.useEffect)(
          () => () => {
            f.reset();
          },
          [f],
        ),
          f.isNotFound && (0, s.notFound)(),
          (0, m.NOh)(f.loadingState === m.Gui.RESOLVE);
        let C = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return f.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: P,
                outerTitle: f.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: _.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: f.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == f
                              ? void 0
                              : null === (t = f.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              h.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(g.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == f
                              ? void 0
                              : null === (t = f.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: N,
                      pageSize: p.O,
                      totalRequests:
                        null !== (n = f.requests) && void 0 !== n ? n : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: A,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.playlists-list" },
                          { genreName: f.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: S,
                      useWindowScroll: S,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    19748: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return l.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(14562),
        s = a(58997);
      let o = i.V5.model("GenresPageModel", {
        title: i.V5.maybeNull(i.V5.string),
        items: i.V5.array(n.fm),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === s.Gui.IDLE || e.loadingState === s.Gui.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === s.Gui.RESOLVE && 0 === e.items.length;
            return e.errorStatusCode === r.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let o = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!o) {
                  e.errorStatusCode = r.CN.NOT_FOUND;
                  return;
                }
                (e.title = o.title),
                  (e.items = (0, i.pj)(o.leaves.map(n.uG))),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE),
              (e.title = null),
              (e.items = (0, i.pj)([])),
              (e.errorStatusCode = null);
          },
        }));
      a(52533);
      var l = a(46308);
    },
    52533: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return n;
        },
      });
      var i = a(65301),
        r = a(32544);
      let n = () => (0, i.jsx)(r.T, {});
    },
    46308: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return y;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(99678),
        s = a(91207),
        o = a(46642),
        l = a(81437),
        u = a(36643),
        d = a(21016),
        c = a(14562),
        h = a(58997),
        m = a(29778),
        g = a(55788),
        p = a.n(g);
      let y = (0, r.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, h.oR4)(),
          { contentScrollRef: r, setContentScrollRef: g } = (0, h.$Y6)(),
          y = (0, h.k67)();
        return ((0, s.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, n.notFound)(),
        t && a.loadingState === h.Gui.IDLE && (0, s.use)(a.getData(t)),
        (0, h.NOh)(a.loadingState === h.Gui.RESOLVE),
        a.loadingState === h.Gui.REJECT)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsxs)(d.I7, {
              scrollElement: r,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(m.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: y.canBack,
                  children: (0, i.jsx)(l.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(o.t, {
                  className: p().root,
                  containerClassName: p().content,
                  ref: g,
                  children: (0, i.jsx)("div", {
                    className: p().list,
                    children: a.items.map((e) =>
                      (0, i.jsx)(
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
    52551: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsNotFoundPage: function () {
          return l;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(32544),
        o = a(58997);
      let l = (0, r.Pi)(() => {
        let { kids: e } = (0, o.oR4)();
        return (
          (0, n.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    14646: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsPage: function () {
          return S;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(91207),
        o = a(37184),
        l = a(44729),
        u = a(55975),
        d = a(62043),
        c = a(46642),
        h = a(81437),
        m = a(74763),
        g = a(36643),
        p = a(21016),
        y = a(58997),
        v = a(29778),
        E = a(11058),
        f = a.n(E);
      let S = (0, n.Pi)(() => {
        let { kids: e, user: t, experiments: a } = (0, y.oR4)(),
          { formatMessage: n } = (0, o.Z)(),
          { contentScrollRef: E, setContentScrollRef: S } = (0, y.$Y6)();
        if (e.landing.isNeededToLoad) {
          let i = a.checkExperiment(y.peG.WebNextSwitchMainSkeletons, "on")
            ? d.j.KIDS
            : d.j.KIDS_WEB;
          (0, s.use)(
            e.landing.getSkeleton(
              { id: i, showWizard: t.settings.showWizard },
              { preloadBlocksCount: 2 },
            ),
          );
        }
        (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, y.NOh)(e.landing.loadingState === y.Gui.RESOLVE);
        let b = (0, m._B)(e.landing);
        return (0, i.jsx)(y.Lh6, {
          pageId: y.Rhz.KIDS,
          children: (0, i.jsxs)(p.I7, {
            scrollElement: E,
            outerTitle: n({ id: "kids.for-kids" }),
            children: [
              (0, i.jsx)(v.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: f().header,
                  children: (0, i.jsx)(h.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(l.Z, { id: "kids.for-kids" }),
                  }),
                }),
              }),
              (0, i.jsxs)(c.t, {
                className: f().root,
                containerClassName: f().content,
                ref: S,
                ...(0, u.BA)(u.Br.kids.KIDS_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, r.W)(f().landing, {
                      [f().landing_onlyWizard]: b,
                    }),
                    children: (0, i.jsx)(m.Od, {
                      landing: e.landing,
                      blockHeadingVariant: "h2",
                      errorComponent: (0, i.jsx)(g.D, {
                        className: f().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(v.$_, { className: f().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    26095: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return u.MyMusicDownloadedTracksPage;
        },
        S: function () {
          return l;
        },
      });
      var i = a(2685),
        r = a(10420),
        n = a(3154),
        s = a(58997);
      let o = i.V5.model("MyMusicDownloadedTracksPage", {
          items: i.V5.maybeNull(i.V5.array(n.le)),
          tracks: i.V5.maybeNull(i.V5.frozen()),
          loadingState: i.V5.enumeration(Object.values(s.Gui)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === s.Gui.IDLE;
            },
            get tracksDurationInMinutes() {
              var t, a;
              return (
                (null !==
                  (a =
                    null === (t = e.tracks) || void 0 === t
                      ? void 0
                      : t.reduce(
                          (e, t) => (t.durationMs ? e + t.durationMs : e),
                          0,
                        )) && void 0 !== a
                  ? a
                  : 0) /
                1e3 /
                60
              );
            },
            get entitiesData() {
              if (!e.tracks) return [];
              return e.tracks.map((e) => ({ type: r.A.Music, meta: e }));
            },
            get isEmpty() {
              var i;
              return !!(
                e.loadingState === s.Gui.RESOLVE &&
                (null === (i = e.items) || void 0 === i ? void 0 : i.length) ===
                  0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { modelActionsLogger: a } = (0, i.dU)(e);
              if (e.loadingState !== s.Gui.PENDING)
                try {
                  e.loadingState = s.Gui.PENDING;
                  let a = yield t.getTracks();
                  (e.tracks = a),
                    (e.items = (0, i.pj)(a.map((e) => (0, n.Vt)(e)))),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.REJECT);
                }
            }),
            reset() {
              (e.items = null),
                (e.tracks = null),
                (e.loadingState = s.Gui.IDLE);
            },
          })),
        l = i.V5.model("MyMusicPage", { downloadedTracks: o });
      var u = a(88648);
    },
    88648: function (e, t, a) {
      "use strict";
      a.d(t, {
        MyMusicDownloadedTracksPage: function () {
          return V;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(91207),
        o = a(37184),
        l = a(55975),
        u = a(19489),
        d = a(14178),
        c = a(33387),
        h = a(36643),
        m = a(21016),
        g = a(3154),
        p = a(58997),
        y = a(29778),
        v = a(56910),
        E = a.n(v),
        f = a(44729),
        S = a(82036),
        b = a(81437),
        P = a(70930),
        A = a.n(P);
      let _ = (0, n.Pi)(() => {
        var e;
        let {
            myMusic: { downloadedTracks: t },
          } = (0, p.oR4)(),
          a = (0, i.jsx)(b.Caption, {
            variant: "span",
            size: "s",
            weight: "medium",
            "aria-hidden": !0,
            children: "•",
          }),
          r = [];
        (null === (e = t.tracks) || void 0 === e ? void 0 : e.length) &&
          r.push(
            (0, i.jsx)(b.Caption, {
              variant: "span",
              size: "s",
              weight: "medium",
              lineClamp: 1,
              children: (0, i.jsx)(f.Z, {
                id: "entity-names.tracks-count",
                values: { value: t.tracks.length },
              }),
            }),
          );
        let n = Math.floor(t.tracksDurationInMinutes / 60),
          o = Math.floor(t.tracksDurationInMinutes % 60);
        return (
          (n || o) &&
            (r.push(a),
            r.push(
              (0, i.jsx)(b.Caption, {
                variant: "span",
                size: "s",
                weight: "medium",
                children: (0, i.jsx)(f.Z, {
                  id: "time.hours-minutes",
                  values: { hours: n, minutes: o },
                }),
              }),
            )),
          (0, i.jsx)("div", {
            className: A().root,
            children: r.map((e, t) => (0, s.cloneElement)(e, { key: t })),
          })
        );
      });
      var N = a(67152),
        C = a.n(N);
      let T = (0, n.Pi)(() => {
        let { isScrolling: e } = (0, s.useContext)(y.pI),
          t = (0, p.k67)(),
          {
            myMusic: { downloadedTracks: a },
            settings: { isMobile: r },
            slam: n,
          } = (0, p.oR4)(),
          { from: o } = (0, p.MhG)({
            pageId: p.Rhz.OWN_TRACKS,
            blockId: p.aUg.TRACK_LIST,
          }),
          { isPlaying: l, togglePlay: d } = (0, p.qmq)({
            playContextParams: {
              contextData: {
                type: u.A.Various,
                meta: { id: p.Rhz.DOWNLOADS_TRACKS },
                from: o,
              },
              entitiesData: a.entitiesData,
              loadContextMeta: !1,
            },
          });
        return (0, i.jsx)("header", {
          className: C().root,
          "aria-hidden": e,
          children: (0, i.jsxs)("div", {
            className: C().container,
            children: [
              !n.isOfflineModeEnabled &&
                t.canBack &&
                (0, i.jsx)(y.nP, {
                  withForwardControl: !1,
                  withBackwardControl: t.canBack,
                  buttonSize: "xxs",
                }),
              (0, i.jsxs)("div", {
                className: C().titleContainer,
                children: [
                  (0, i.jsx)(b.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xs",
                    lineClamp: 1,
                    className: C().title,
                    children: (0, i.jsx)(f.Z, {
                      id: "offline.downloaded-tracks",
                    }),
                  }),
                  (0, i.jsx)(_, {}),
                ],
              }),
              !a.isEmpty &&
                (0, i.jsx)(y.JM, {
                  withRipple: !0,
                  buttonVariant: "default",
                  radius: "xxxl",
                  size: "s",
                  color: "primary",
                  iconSize: "xxs",
                  isPlaying: l,
                  onClick: d,
                  className: C().playButton,
                  ariaHidden: e,
                  tabIndex: e ? -1 : 0,
                  children:
                    !r && (0, i.jsx)(f.Z, { id: "player-actions.listen" }),
                }),
            ],
          }),
        });
      });
      var I = a(59976),
        k = a.n(I);
      let D = (0, n.Pi)(() =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(T, {}),
              (0, i.jsxs)("div", {
                className: k().root,
                children: [
                  (0, i.jsx)(S.Icon, {
                    className: k().icon,
                    size: "l",
                    variant: "download",
                  }),
                  (0, i.jsx)(b.Heading, {
                    className: k().title,
                    variant: "div",
                    size: "xs",
                    children: (0, i.jsx)(f.Z, {
                      id: "offline.downloaded-empty",
                    }),
                  }),
                  (0, i.jsx)(b.Caption, {
                    className: k().text,
                    variant: "span",
                    type: "controls",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(f.Z, {
                      id: "offline.download-for-offline",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ),
        L = (0, n.Pi)(() => {
          let { isScrolling: e } = (0, s.useContext)(y.pI),
            t = (0, p.k67)(),
            {
              myMusic: { downloadedTracks: a },
              settings: { isMobile: n },
              slam: o,
            } = (0, p.oR4)(),
            { from: l } = (0, p.MhG)({
              pageId: p.Rhz.OWN_TRACKS,
              blockId: p.aUg.TRACK_LIST,
            }),
            { isPlaying: d, togglePlay: c } = (0, p.qmq)({
              playContextParams: {
                contextData: {
                  type: u.A.Various,
                  meta: { id: p.Rhz.DOWNLOADS_TRACKS },
                  from: l,
                },
                entitiesData: a.entitiesData,
                loadContextMeta: !1,
              },
            });
          return (0, i.jsx)(y.h4, {
            variant: "composite",
            "aria-hidden": !e,
            stickyChild: (0, i.jsxs)("div", {
              className: C().container,
              children: [
                !o.isOfflineModeEnabled &&
                  t.canBack &&
                  (0, i.jsx)(y.nP, {
                    withForwardControl: !1,
                    withBackwardControl: t.canBack,
                    buttonSize: "xxs",
                  }),
                (0, i.jsx)(b.Heading, {
                  variant: "h1",
                  weight: "bold",
                  size: "xs",
                  lineClamp: 1,
                  className: C().stickyTitle,
                  children: (0, i.jsx)(f.Z, {
                    id: "offline.downloaded-tracks",
                  }),
                }),
                !a.isEmpty &&
                  (0, i.jsx)(y.JM, {
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: d,
                    onClick: c,
                    className: (0, r.W)(C().playButton, {
                      [C().stickyPlayButton]: !n,
                    }),
                    ariaHidden: !e,
                    tabIndex: e ? 0 : -1,
                    children:
                      !n && (0, i.jsx)(f.Z, { id: "player-actions.listen" }),
                  }),
              ],
            }),
            stickyClassName: (0, r.W)(C().stickyHeader, C().important),
            staticClassName: (0, r.W)(C().staticHeader, C().important),
          });
        }),
        R = [d.aT.IDLE, d.aT.DOWNLOADED],
        V = (0, n.Pi)(() => {
          var e;
          let { contentScrollRef: t, setContentScrollRef: a } = (0, p.$Y6)(),
            { formatMessage: n } = (0, o.Z)(),
            v = (0, p.k67)(),
            {
              myMusic: { downloadedTracks: f },
            } = (0, p.oR4)(),
            { from: S } = (0, p.MhG)({
              pageId: p.Rhz.OWN_TRACKS,
              blockId: p.aUg.TRACK_LIST,
            }),
            b = (0, p.h1d)(),
            P = (0, p.iXn)();
          v.replaceState({ href: "/mymusic/downloads/tracks" });
          let A = (0, c.W)(() => {
              b && f.getData(b);
            }),
            _ = (0, c.W)((e) => {
              let { state: t } = e;
              R.includes(t.loadingState) && A();
            });
          (0, s.useEffect)(() => {
            f.isNeededToLoad && A();
          }, [f.isNeededToLoad, A]),
            (0, s.useEffect)(
              () => (
                null == b || b.events.on(d.tY.STATE_CHANGED, A),
                null == b || b.events.on(d.tY.TRACK_CHANGED, _),
                () => {
                  null == b || b.events.off(d.tY.STATE_CHANGED, A),
                    null == b || b.events.off(d.tY.TRACK_CHANGED, _),
                    f.reset();
                }
              ),
              [f, A, _, b],
            ),
            (0, p.NOh)(f.loadingState === p.Gui.RESOLVE);
          let N = (0, s.useMemo)(
            () => ({
              Header: () => (0, i.jsx)(T, {}),
              Footer: () => (0, i.jsx)(y.$_, { className: E().footer }),
            }),
            [],
          );
          if (f.loadingState === p.Gui.REJECT) return (0, i.jsx)(h.D, {});
          if (f.isEmpty) return (0, i.jsx)(D, {});
          let C =
            (null === (e = f.items) || void 0 === e ? void 0 : e.length) || 10;
          return (0, i.jsx)(p.Lh6, {
            pageId: p.Rhz.DOWNLOADS_TRACKS,
            children: (0, i.jsx)(m.I7, {
              scrollElement: t,
              children: (0, i.jsxs)("div", {
                className: E().pageContainer,
                children: [
                  (0, i.jsx)(L, {}),
                  (0, i.jsx)(y.Wv, {
                    context: {
                      listAriaLabel: n({ id: "offline.downloaded-track-list" }),
                    },
                    className: (0, r.W)(E().root, E().important),
                    listClassName: E().content,
                    customComponents: N,
                    totalCount: C,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                        null === (t = f.items) || void 0 === t ? void 0 : t[e];
                      return a
                        ? (0, i.jsx)(g.O2, {
                            track: a,
                            playContextParams: P(e, {
                              contextData: {
                                type: u.A.Various,
                                meta: { id: p.Rhz.DOWNLOADS_TRACKS },
                                from: S,
                              },
                              entitiesData: f.entitiesData,
                              queueParams: { index: e },
                              loadContextMeta: !1,
                            }),
                          })
                        : (0, i.jsx)(y.DX, {
                            isActive: !0,
                            className: E().trackShimmer,
                            variant: p.Lxt.PLAYLIST,
                          });
                    },
                    debounceDurationInMs: 300,
                    initialItemCount: C,
                    handleRef: a,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                    testId: l.Br.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                  }),
                ],
              }),
            }),
          });
        });
    },
    13820: function (e, t, a) {
      "use strict";
      a.d(t, {
        T4: function () {
          return L.NonMusicAlbumsPage;
        },
        z4: function () {
          return i.z;
        },
        ov: function () {
          return R.NonMusicCategoryPage;
        },
        C2: function () {
          return V.NonMusicCategoryPlaylistsPage;
        },
        NG: function () {
          return D;
        },
      });
      var i = a(5538),
        r = a(2685),
        n = a(49430),
        s = a(81706),
        o = a(50684),
        l = a(58997),
        u = a(91694);
      let d = r.V5.model("NonMusicCategoryPlaylistsDataItem", {
          uid: r.V5.number,
          kind: r.V5.number,
          data: r.V5.maybeNull(s.d2),
        }),
        c = r.V5.model("NonMusicCategoryPlaylistsPage", {
          errorStatusCode: r.V5.maybe(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(l.Gui)),
          title: r.V5.maybeNull(r.V5.string),
          pager: r.V5.maybeNull(u.Vn),
          playlists: r.V5.maybeNull(r.V5.array(d)),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === n.CN.NOT_FOUND ||
                e.errorStatusCode === n.CN.BAD_REQUEST;
              return e.loadingState === l.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getPlaylists: (0, r.ls)(function* (t) {
                var a, i, s;
                let { page: u = 0, pageSize: d = 20 } = t,
                  { playlistsResource: c, modelActionsLogger: h } = (0, r.dU)(
                    e,
                  );
                if (
                  !(
                    !(null === (a = e.playlists) || void 0 === a
                      ? void 0
                      : a.length) || e.alreadyRequestedPages.has("".concat(u))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(u), u);
                  try {
                    let t = u * d,
                      a = e.playlists.slice(t, t + d),
                      n = yield c.getPlaylists({
                        playlistIds: a.map((e) =>
                          "".concat(e.uid, ":").concat(e.kind),
                        ),
                        resumeStream: !1,
                      });
                    e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1;
                    let l = {
                        page: u,
                        perPage: d,
                        total:
                          null === (i = e.playlists) || void 0 === i
                            ? void 0
                            : i.length,
                      },
                      h = n.playlists.map(o.PV),
                      m = u * d,
                      g = 0;
                    for (let t = m; t < m + d; t++)
                      h[g] &&
                        e.playlists[t] &&
                        (e.playlists[t].data = (0, r.pj)(h[g])),
                        g++;
                    e.pager = l;
                  } catch (t) {
                    h.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== l.Gui.IDLE &&
                        (e.loadingState = l.Gui.REJECT);
                  }
                }
              }),
              getData: (0, r.ls)(function* (a) {
                let { categoryId: i, page: s = 0, pageSize: o = 20 } = a,
                  { nonMusicResource: u, modelActionsLogger: d } = (0, r.dU)(e);
                if (e.loadingState !== l.Gui.PENDING)
                  try {
                    e.loadingState = l.Gui.PENDING;
                    let a = yield u.getPlaylists({ categoryId: i });
                    (e.title = a.title),
                      a.entities &&
                        a.entities.length > 0 &&
                        (e.playlists = (0, r.pj)(
                          a.entities.map((e) => ({ uid: e.uid, kind: e.kind })),
                        )),
                      e.loadingState !== l.Gui.IDLE &&
                        (e.loadingState = l.Gui.RESOLVE),
                      yield t.getPlaylists({ page: s, pageSize: o });
                  } catch (t) {
                    d.error(t),
                      t instanceof n.du &&
                        (t.statusCode === n.CN.NOT_FOUND ||
                          t.statusCode === n.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = n.CN.NOT_FOUND),
                      e.loadingState !== l.Gui.IDLE &&
                        (e.loadingState = l.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = l.Gui.IDLE),
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.playlists = (0, r.pj)([])),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var h = a(74763),
        m = a(54709);
      let g = r.V5.model("NonMusicAlbumsPageItem", {
          id: r.V5.number,
          data: r.V5.maybeNull(m.ug),
        }),
        p = r.V5.model("NonMusicAlbumsPage", {
          errorStatusCode: r.V5.maybe(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(l.Gui)),
          title: r.V5.maybeNull(r.V5.string),
          albums: r.V5.maybeNull(r.V5.array(g)),
          requestsCount: r.V5.maybe(r.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === n.CN.NOT_FOUND ||
                e.errorStatusCode === n.CN.BAD_REQUEST;
              return e.loadingState === l.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getEditorialAlbums: (0, r.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, r.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  var o;
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getEditorialAlbums({ id: a });
                  (e.title = t.title),
                    (null === (o = t.entities) || void 0 === o
                      ? void 0
                      : o.length) &&
                      (e.albums = (0, r.pj)(
                        t.entities.map((e) => ({ id: e })),
                      )),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            getCategoryAlbums: (0, r.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, r.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  var o;
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getCategoryAlbums({ id: a });
                  (e.title = t.title),
                    (null === (o = t.albums) || void 0 === o
                      ? void 0
                      : o.length) &&
                      (e.albums = (0, r.pj)(t.albums.map((e) => ({ id: e })))),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            getAlbumsByRange: (0, r.ls)(function* (t, a) {
              var i, n, s;
              let { albumResource: o, modelActionsLogger: l } = (0, r.dU)(e);
              if (
                !(null === (i = e.albums) || void 0 === i ? void 0 : i.length)
              )
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.albums.length));
              let u = [];
              for (let i = t; i <= a; i++)
                (null === (n = e.albums[i]) || void 0 === n ? void 0 : n.id) &&
                  !(null === (s = e.albums[i]) || void 0 === s
                    ? void 0
                    : s.data) &&
                  u.push(e.albums[i].id);
              if (!u.length) return null;
              try {
                let t = yield o.getAlbums({ albumIds: u });
                null == t ||
                  t.forEach((t) => {
                    var a;
                    null === (a = e.albums) ||
                      void 0 === a ||
                      a.forEach((a, i) => {
                        var r;
                        a.id === t.id &&
                          (null === (r = e.albums) || void 0 === r
                            ? void 0
                            : r[i]) &&
                          (e.albums[i].data = (0, m.ym)(t));
                      });
                  }),
                  e.requestsCount
                    ? (e.requestsCount = e.requestsCount + 1)
                    : (e.requestsCount = 1);
              } catch (e) {
                l.error(e);
              }
              return null;
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                (e.title = null),
                (e.albums = null),
                (e.requestsCount = 0);
            },
          }));
      var y = a(37908),
        v = a(51921),
        E = a(49724);
      let f = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, m.ym)(e.data.album),
            chart: e.data.chartPosition && (0, E.W5)(e.data.chartPosition),
            likesCount: e.data.album.likesCount,
          }));
          return (0, r.pj)({
            id: e.id,
            type: y.c.ALBUM_CHART,
            landingBlockType: v.g.CHART_ALBUMS,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        S = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, m.ym)(e.data),
            likesCount: e.data.likesCount,
          }));
          return (0, r.pj)({
            id: e.id,
            type: y.c.CATEGORY,
            landingBlockType: v.g.NON_MUSIC_EDITORIAL_COMPILATION,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        };
      var b = a(27980);
      let P = (e) => {
          let t = e.entities.map((e) => {
            switch (e.type) {
              case y.f.PLAYLIST:
                return {
                  type: b.Q.PLAYLIST_ITEM,
                  data: (0, s.VB)({ ...e.data, artists: [] }),
                };
              case y.f.ALBUM:
                return { type: b.Q.ALBUM_ITEM, data: (0, m.ym)(e.data) };
            }
          });
          return (0, r.pj)({
            id: e.id,
            type: y.c.EDITORIAL_PLAYLISTS,
            landingBlockType: v.g.RECENTLY_PLAYED,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        A = r.V5.model("NonMusicBaseBlock").props({
          type: r.V5.enumeration(Object.values(y.c.CATEGORY)),
          landingBlockType: r.V5.enumeration(Object.values(v.g)),
          id: r.V5.maybe(r.V5.string),
          title: r.V5.maybe(r.V5.string),
          description: r.V5.maybe(r.V5.string),
          viewAllActionLink: r.V5.maybe(r.V5.string),
        }),
        _ = A.named("NonMusicCategoryBlock").props({
          type: r.V5.literal(y.c.CATEGORY),
          landingBlockType: r.V5.literal(v.g.NON_MUSIC_EDITORIAL_COMPILATION),
          items: r.V5.array(m.ug),
        }),
        N = A.named("NonMusicChartAlbumBlock").props({
          type: r.V5.literal(y.c.ALBUM_CHART),
          landingBlockType: r.V5.literal(v.g.CHART_ALBUMS),
          items: r.V5.array(m.ug),
        }),
        C = r.V5.union(h.SJ, h.jn),
        T = A.named("NonMusicEditorialPlaylistsBlock").props({
          type: r.V5.literal(y.c.EDITORIAL_PLAYLISTS),
          landingBlockType: r.V5.literal(v.g.RECENTLY_PLAYED),
          items: r.V5.array(C),
        }),
        I = r.V5.union(N, T, _),
        k = r.V5.model("NonMusicCategoryPage", {
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          title: r.V5.maybeNull(r.V5.string),
          loadingState: r.V5.enumeration(Object.values(l.Gui)),
          blocks: r.V5.array(I),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === l.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === l.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === l.Gui.RESOLVE && 0 === e.blocks.length,
                a =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && a) || t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { categoryId: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, r.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getCategory({ categoryId: a });
                  e.title = t.title;
                  let n = [];
                  t.blocks &&
                    (t.blocks.forEach((e) => {
                      switch (e.type) {
                        case y.c.ALBUM_CHART:
                          n.push(f(e));
                          return;
                        case y.c.EDITORIAL_PLAYLISTS:
                          n.push(P(e));
                          return;
                        case y.c.CATEGORY:
                          n.push(S(e));
                          return;
                      }
                    }),
                    (e.blocks = (0, r.pj)(n))),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            reset() {
              (e.errorStatusCode = null),
                (e.title = null),
                (e.loadingState = l.Gui.IDLE),
                (e.blocks = (0, r.pj)([]));
            },
          })),
        D = r.V5.model("NonMusicPage", {
          landing: h.d5,
          albums: p,
          categorySubpage: k,
          categoryPlaylistsSubpage: c,
        });
      var L = a(74720);
      a(21754);
      var R = a(84360),
        V = a(85392);
      a(24639), a(70056);
    },
    5538: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        z: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).CATEGORY = "category"),
        (r.EDITORIAL = "editorial");
    },
    74720: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicAlbumsPage: function () {
          return E;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(55975),
        d = a(81437),
        c = a(54709),
        h = a(21016),
        m = a(58997),
        g = a(29778),
        p = a(5538),
        y = a(74232),
        v = a.n(y);
      let E = (0, n.Pi)((e) => {
        var t, a;
        let { id: n, variant: y } = e,
          {
            nonMusic: { albums: E },
            settings: f,
          } = (0, m.oR4)(),
          { formatMessage: S } = (0, l.Z)(),
          { contentScrollRef: b, setContentScrollRef: P } = (0, m.$Y6)(),
          A = (0, m.k67)(),
          _ = f.layout === m.t8m.Mobile;
        n &&
          E.loadingState === m.Gui.IDLE &&
          (y === p.z.EDITORIAL
            ? (0, o.use)(E.getEditorialAlbums({ id: n }))
            : (0, o.use)(E.getCategoryAlbums({ id: n }))),
          (E.isNotFound || !n) && (0, s.notFound)(),
          (0, m.NOh)(E.loadingState === m.Gui.RESOLVE),
          (0, o.useEffect)(
            () => () => {
              E.reset();
            },
            [E],
          );
        let N = (0, o.useCallback)(
            (e) => {
              E.getAlbumsByRange(e.startIndex, e.endIndex);
            },
            [E],
          ),
          C = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(g.$_, { className: v().footer }),
            }),
            [],
          ),
          T =
            E.loadingState === m.Gui.PENDING
              ? 20
              : null !==
                    (a =
                      null === (t = E.albums) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
                ? a
                : 0;
        return (0, i.jsx)(m.Lh6, {
          pageId: m.Rhz.NON_MUSIC_ALBUMS,
          children: (0, i.jsx)(h.I7, {
            scrollElement: b,
            outerTitle: E.title,
            children: (0, i.jsxs)("div", {
              className: v().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_ALBUMS_PAGE),
              children: [
                (0, i.jsx)(g.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: A.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: E.title,
                  }),
                }),
                (0, i.jsx)(g.Wv, {
                  className: (0, r.W)(v().scrollContainer, v().important),
                  customComponents: C,
                  itemContentCallback: (e) => {
                    var t, a;
                    let r =
                        null === (a = E.albums) || void 0 === a
                          ? void 0
                          : null === (t = a[e]) || void 0 === t
                            ? void 0
                            : t.data,
                      n = S(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: S({ id: "entity-names.album" }) },
                      );
                    return r
                      ? (0, i.jsx)(
                          c.rf,
                          { album: r, contentLinesCount: 3 },
                          r.id,
                        )
                      : (0, i.jsx)(g.hi, { "aria-label": n }, e);
                  },
                  totalCount: T,
                  onGetDataByRange: N,
                  totalRequests: E.requestsCount,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: P,
                  context: {
                    listAriaLabel: S(
                      { id: "mixes.albums-list" },
                      { genreName: E.title || "" },
                    ),
                  },
                  isMobileLayout: _,
                  useWindowScroll: _,
                }),
              ],
            }),
          }),
        });
      });
    },
    21754: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryNotFoundPage: function () {
          return s;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(32544);
      let s = (0, r.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    84360: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPage: function () {
          return f;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37908),
        u = a(46642),
        d = a(81437),
        c = a(74763),
        h = a(36643),
        m = a(21016),
        g = a(58997),
        p = a(29778),
        y = a(45791),
        v = a.n(y);
      let E = {
          [l.c.ALBUM_CHART]: c.m8,
          [l.c.EDITORIAL_PLAYLISTS]: c.Rn,
          [l.c.CATEGORY]: c.j$,
        },
        f = (0, n.Pi)((e) => {
          let { categoryId: t } = e,
            { categorySubpage: a } = (0, g.oR4)().nonMusic,
            { contentScrollRef: n, setContentScrollRef: l } = (0, g.$Y6)(),
            c = (0, g.RVp)(),
            y = (0, g.k67)();
          if (
            ((!c || a.isNotFound) && (0, s.notFound)(),
            t &&
              a.loadingState === g.Gui.IDLE &&
              (0, o.use)(a.getData({ categoryId: t })),
            (0, o.useEffect)(() => () => a.reset(), [a]),
            (0, g.NOh)(a.loadingState === g.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(h.D, {});
          let f = (0, o.useMemo)(
            () =>
              a.blocks.map((e, t) => {
                let n = E[e.type];
                return (0, i.jsx)(
                  g.Ja5,
                  {
                    blockId: e.id,
                    blockType: e.type,
                    blockIdForFrom: ""
                      .concat(g.BEo.DISCOVERY_BLOCK, "-")
                      .concat(e.id),
                    blockPosX: 1,
                    blockPosY: t + 1,
                    objectsCount: e.items.length,
                    children: (0, i.jsx)(
                      n,
                      {
                        headerClassName: (0, r.W)(
                          v().carouselBlockHeader,
                          v().carouselBlock,
                        ),
                        containerClassName: v().carouselBlock,
                        type: e.landingBlockType,
                        loadingState: a.loadingState,
                        id: e.id,
                        isNotFound: a.isNotFound,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {
                          title: e.title,
                          description: e.description,
                          viewAllActionLink: e.viewAllActionLink,
                        },
                        data: { items: e.items },
                        isNeededToLoad: !1,
                        isLoading: a.isLoading,
                        isLoaded: a.isLoaded,
                        isRejected: a.isRejected,
                        isShimmerVisible: a.isLoading,
                        isShimmerActive: !0,
                        isVisible: !0,
                        objectsCount: e.items.length,
                      },
                      e.id,
                    ),
                  },
                  e.id,
                );
              }),
            [
              a.loadingState,
              a.isNotFound,
              a.blocks,
              a.isLoading,
              a.isLoaded,
              a.isRejected,
            ],
          );
          return (0, i.jsx)(g.Lh6, {
            pageId: g.Rhz.NON_MUSIC_CATEGORY,
            children: (0, i.jsxs)(m.I7, {
              scrollElement: n,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: y.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: a.title,
                  }),
                }),
                (0, i.jsxs)(u.t, {
                  className: v().root,
                  containerClassName: v().content,
                  ref: l,
                  children: [
                    (0, i.jsx)("div", {
                      className: v().carouselBlocks,
                      children: f,
                    }),
                    (0, i.jsx)(p.$_, { className: v().footer }),
                  ],
                }),
              ],
            }),
          });
        });
    },
    85392: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPlaylistsPage: function () {
          return E;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(55975),
        d = a(81437),
        c = a(36643),
        h = a(21016),
        m = a(81706),
        g = a(58997),
        p = a(29778),
        y = a(88865),
        v = a.n(y);
      let E = (0, n.Pi)((e) => {
        var t, a, n;
        let { categoryId: y } = e,
          {
            nonMusic: { categoryPlaylistsSubpage: E },
            settings: f,
          } = (0, g.oR4)(),
          S = (0, g.k67)(),
          { contentScrollRef: b, setContentScrollRef: P } = (0, g.$Y6)(),
          { formatMessage: A } = (0, l.Z)(),
          _ = f.layout === g.t8m.Mobile,
          N = (0, o.useCallback)(
            (e) => {
              E.getPlaylists({ page: e, pageSize: 20 });
            },
            [E],
          );
        E.loadingState === g.Gui.IDLE &&
          (0, o.use)(E.getData({ categoryId: y, page: 0, pageSize: 20 })),
          E.isNotFound && (0, s.notFound)(),
          (0, o.useEffect)(
            () => () => {
              E.reset();
            },
            [E],
          );
        let C = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(p.$_, { className: v().footer }) }),
          [],
        );
        if (((0, g.NOh)(E.loadingState === g.Gui.RESOLVE), E.isSomethingWrong))
          return (0, i.jsx)(c.D, {});
        let T = E.isLoading
          ? 20
          : null !==
                (a =
                  null == E
                    ? void 0
                    : null === (t = E.playlists) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
            ? a
            : 0;
        return (0, i.jsx)(g.Lh6, {
          pageId: g.Rhz.NON_MUSIC_CATEGORY_PLAYLISTS,
          children: (0, i.jsx)(h.I7, {
            scrollElement: b,
            outerTitle: E.title,
            children: (0, i.jsxs)("div", {
              className: v().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),
              children: [
                (0, i.jsx)(p.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: S.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: E.title,
                  }),
                }),
                (0, i.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: A(
                      { id: "mixes.playlists-list" },
                      { genreName: E.title || "" },
                    ),
                  },
                  className: (0, r.W)(v().scrollContainer, v().important),
                  customComponents: C,
                  itemContentCallback: (e) => {
                    var t, a;
                    let r =
                        null == E
                          ? void 0
                          : null === (a = E.playlists) || void 0 === a
                            ? void 0
                            : null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      n = A(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: A({ id: "entity-names.playlist" }) },
                      );
                    return r
                      ? (0, i.jsx)(
                          m.ZL,
                          { playlist: r, contentLinesCount: 3 },
                          r.key,
                        )
                      : (0, i.jsx)(p.hi, { isActive: !0, "aria-label": n });
                  },
                  initialItemCount: T,
                  totalCount: T,
                  onGetDataByPage: N,
                  pageSize: 20,
                  totalRequests:
                    null !== (n = E.requests) && void 0 !== n ? n : 0,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: P,
                  isMobileLayout: _,
                  useWindowScroll: _,
                }),
              ],
            }),
          }),
        });
      });
    },
    24639: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicNotFoundPage: function () {
          return l;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(91207),
        s = a(32544),
        o = a(58997);
      let l = (0, r.Pi)(() => {
        let { nonMusic: e } = (0, o.oR4)();
        return (
          (0, n.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    70056: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicPage: function () {
          return P;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(44729),
        d = a(55975),
        c = a(62043),
        h = a(91878),
        m = a(46642),
        g = a(81437),
        p = a(74763),
        y = a(36643),
        v = a(21016),
        E = a(58997),
        f = a(29778),
        S = a(54153),
        b = a.n(S);
      let P = (0, n.Pi)(() => {
        let { nonMusic: e, user: t, experiments: a } = (0, E.oR4)(),
          { formatMessage: n } = (0, l.Z)(),
          { contentScrollRef: S, setContentScrollRef: P } = (0, E.$Y6)(),
          [A, _] = (0, h.z)();
        (0, E.RVp)() || (0, s.notFound)();
        let N = a.checkExperiment(
            E.peG.WebNextLandingSkeletonPodcastsAndBooks,
            "on",
          ),
          C = a.checkExperiment(E.peG.WebNextSwitchMainSkeletons, "on");
        if (e.landing.isNeededToLoad) {
          let a;
          (a = N ? (C ? c.j.NON_MUSIC : c.j.NON_MUSIC_WEB) : c.j.WEB_NON_MUSIC),
            (0, o.use)(
              e.landing.getSkeleton(
                { id: a, showWizard: t.settings.showWizard },
                { preloadBlocksCount: 2 },
              ),
            );
        }
        (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, E.NOh)(e.landing.loadingState === E.Gui.RESOLVE);
        let T = (0, p._B)(e.landing),
          I = (0, o.useMemo)(
            () =>
              N
                ? (0, i.jsx)(u.Z, { id: "entity-names.podcasts-and-books" })
                : (0, i.jsx)(u.Z, { id: "entity-names.podcasts" }),
            [N],
          ),
          k = (0, o.useMemo)(
            () =>
              N
                ? n({ id: "entity-names.podcasts-and-books" })
                : n({ id: "entity-names.podcasts" }),
            [n, N],
          );
        return (0, i.jsx)(E.Lh6, {
          pageId: E.Rhz.NON_MUSIC,
          children: (0, i.jsxs)(v.I7, {
            scrollElement: S,
            outerTitle: k,
            headerElement: A,
            shouldHideHeader: e.landing.hasUpperBlocks,
            children: [
              (0, i.jsx)(f.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: b().header,
                  children: (0, i.jsx)(g.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    children: I,
                  }),
                }),
              }),
              (0, i.jsxs)(m.t, {
                className: b().root,
                containerClassName: b().content,
                ref: P,
                ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, r.W)(b().landing, {
                      [b().landing_onlyWizard]: T,
                    }),
                    children: (0, i.jsx)(p.Od, {
                      landing: e.landing,
                      headerConcealerComponent: (0, i.jsx)("div", { ref: _ }),
                      blockHeadingVariant: "h2",
                      errorComponent: (0, i.jsx)(y.D, {
                        className: b().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(f.$_, { className: b().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    61527: function (e, t, a) {
      "use strict";
      a.d(t, {
        ws: function () {
          return o.PlaylistPersonalPage;
        },
        uD: function () {
          return s;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(58997);
      let s = i.V5.model("PlaylistPersonalPage", {
        loadingState: i.V5.enumeration(Object.values(n.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        playlistUuid: i.V5.maybeNull(i.V5.string),
        isReady: i.V5.optional(i.V5.boolean, !1),
        dummyCoverUrl: i.V5.maybe(i.V5.string),
        dummyDescription: i.V5.maybe(i.V5.string),
        title: i.V5.maybe(i.V5.string),
      })
        .views((e) => ({
          get isNeededToLoad() {
            return e.loadingState === n.Gui.IDLE;
          },
          get isLoaded() {
            return e.loadingState === n.Gui.RESOLVE;
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === r.CN.NOT_FOUND ||
              e.errorStatusCode === r.CN.BAD_REQUEST;
            return e.loadingState === n.Gui.REJECT && t;
          },
          get isRejected() {
            return e.loadingState === n.Gui.REJECT;
          },
        }))
        .actions((e) => ({
          getPlaylistPersonalDetails: (0, i.ls)(function* (t) {
            if (!(0, i.fh)(e)) return;
            let { playlistsResource: a, modelActionsLogger: s } = (0, i.dU)(e);
            if (e.loadingState !== n.Gui.PENDING)
              try {
                var o, l;
                e.loadingState = n.Gui.PENDING;
                let i = yield a.getPlaylistPersonal({ playlistId: t });
                if (
                  (null === (o = i.error) || void 0 === o ? void 0 : o.name) ===
                  "no-such-playlist"
                ) {
                  (e.errorStatusCode = r.CN.NOT_FOUND),
                    (e.loadingState = n.Gui.REJECT);
                  return;
                }
                (e.isReady = i.ready),
                  (e.playlistUuid = i.data.playlistUuid),
                  (e.dummyCoverUrl =
                    null === (l = i.data.dummyCover) || void 0 === l
                      ? void 0
                      : l.uri),
                  (e.dummyDescription = i.data.dummyDescription),
                  (e.title = i.data.title),
                  e.loadingState !== n.Gui.IDLE &&
                    (e.loadingState = n.Gui.RESOLVE);
              } catch (t) {
                s.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== n.Gui.IDLE &&
                    (e.loadingState = n.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = n.Gui.IDLE),
              (e.errorStatusCode = null),
              (e.isReady = !1),
              (e.playlistUuid = null),
              (e.dummyCoverUrl = void 0),
              (e.dummyDescription = void 0),
              (e.title = void 0);
          },
        }));
      a(66285), a(65301), a(32544);
      var o = a(10169);
    },
    66285: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistPersonalDummyPage: function () {
          return c;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(81437),
        o = a(58997),
        l = a(29778),
        u = a(29217),
        d = a.n(u);
      let c = (0, n.Pi)(() => {
        let {
          playlistPersonal: { dummyCoverUrl: e, dummyDescription: t, title: a },
        } = (0, o.oR4)();
        return (0, i.jsxs)("div", {
          className: d().root,
          children: [
            (0, i.jsx)(l.h4, {}),
            (0, i.jsx)(l.BE, {
              src: e,
              size: 200,
              fit: "cover",
              withAvatarReplace: !0,
              "aria-hidden": !0,
              className: d().cover,
            }),
            a &&
              (0, i.jsx)(s.Heading, {
                className: (0, r.W)(d().title, d().important),
                variant: "h1",
                size: "xs",
                children: a,
              }),
            t &&
              (0, i.jsx)(s.Caption, {
                className: (0, r.W)(d().text, d().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: t,
              }),
          ],
        });
      });
    },
    10169: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistPersonalPage: function () {
          return u;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(99678),
        s = a(91207),
        o = a(58997),
        l = a(66285);
      let u = (0, r.Pi)((e) => {
        let { params: t, searchParams: a } = e,
          { playlistPersonal: r } = (0, o.oR4)(),
          { href: u } = (0, o.zBm)(
            (0, o.rDv)(
              "/playlists/".concat(r.playlistUuid),
              new URLSearchParams(a),
            ),
          );
        if (
          ((0, s.useEffect)(() => {
            r.isNeededToLoad && r.getPlaylistPersonalDetails(t.playlistId);
          }, [r.isNeededToLoad, t.playlistId, r]),
          (0, s.useEffect)(
            () => () => {
              r.reset();
            },
            [r],
          ),
          (0, o.NOh)(r.isLoaded),
          (r.isNotFound || r.isRejected) && (0, n.notFound)(),
          r.isLoaded && !r.isReady)
        )
          return (
            r.dummyDescription || (0, n.notFound)(),
            (0, i.jsx)(l.PlaylistPersonalDummyPage, {})
          );
        r.isLoaded && r.isReady && (0, n.redirect)(u);
      });
    },
    40854: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return h.PostPage;
        },
        vU: function () {
          return c;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(73458),
        s = a(54709),
        o = a(81706),
        l = a(9096),
        u = a(50684),
        d = a(58997);
      let c = i.V5.model("PostPage", {
        errorStatusCode: i.V5.maybe(i.V5.number),
        loadingState: i.V5.enumeration(Object.values(d.Gui)),
        title: i.V5.maybeNull(i.V5.string),
        promotionType: i.V5.maybeNull(i.V5.enumeration(Object.values(n.q))),
        artists: i.V5.maybe(i.V5.array(l.Go)),
        albums: i.V5.maybe(i.V5.array(s.ug)),
        playlists: i.V5.maybe(i.V5.array(o.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === d.Gui.IDLE || e.loadingState === d.Gui.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === r.CN.NOT_FOUND ||
              e.errorStatusCode === r.CN.BAD_REQUEST;
            return e.loadingState === d.Gui.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === d.Gui.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: n, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== d.Gui.PENDING)
              try {
                e.loadingState = d.Gui.PENDING;
                let t = yield n.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, i.pj)(t.artists.map(l.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, i.pj)(t.albums.map(s.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, i.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, u.PV)(t);
                      }),
                    )),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = d.Gui.IDLE),
              (e.title = null),
              (e.artists = (0, i.pj)([])),
              (e.albums = (0, i.pj)([]));
          },
        }));
      a(56994);
      var h = a(43403);
    },
    56994: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return s;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(32544);
      let s = (0, r.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    43403: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return V;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(73458),
        u = a(46642),
        d = a(82607),
        c = a(81437),
        h = a(36643),
        m = a(21016),
        g = a(58997),
        p = a(29778),
        y = a(87200),
        v = a.n(y);
      let E = () =>
        (0, i.jsxs)("div", {
          className: v().root,
          children: [
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().top }),
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().bottom }),
          ],
        });
      var f = a(17796),
        S = a.n(f),
        b = a(54709),
        P = a(53144),
        A = a.n(P);
      let _ = (0, n.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: A().root,
          children: (0, i.jsx)("div", {
            className: A().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                b.rf,
                { className: A().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var N = a(30302),
        C = a(58632),
        T = a.n(C);
      let I = (0, n.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: T().root,
          children: (0, i.jsx)("div", {
            className: T().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                N.IT,
                { className: T().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var k = a(81706),
        D = a(25296),
        L = a.n(D);
      let R = (0, n.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: L().root,
            children: (0, i.jsx)("div", {
              className: L().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  k.ZL,
                  { className: L().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        V = (0, n.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, g.oR4)(),
            n = (0, g.k67)(),
            { contentScrollRef: y, setContentScrollRef: v } = (0, g.$Y6)();
          if (
            (t &&
              a.loadingState === g.Gui.IDLE &&
              (0, o.use)(a.getData({ promoId: t })),
            (0, o.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, g.NOh)(a.loadingState === g.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(h.D, {});
          let f = (0, o.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(E, {});
            switch (a.promotionType) {
              case l.q.ARTISTS:
                return (0, i.jsx)(I, { artists: a.artists });
              case l.q.ALBUMS:
                return (0, i.jsx)(_, { albums: a.albums });
              case l.q.PLAYLISTS:
                return (0, i.jsx)(R, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(g.Lh6, {
            pageId: g.Rhz.POST,
            children: (0, i.jsx)(m.I7, {
              scrollElement: y,
              outerTitle: a.title || void 0,
              children: (0, i.jsxs)("div", {
                className: S().root,
                children: [
                  (0, i.jsx)(p.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: n.canBack,
                    children: a.title
                      ? (0, i.jsx)(c.Heading, {
                          id: "post-header",
                          variant: "h2",
                          weight: "bold",
                          size: "xl",
                          lineClamp: 1,
                          children: a.title,
                        })
                      : (0, i.jsx)(d.Shimmer, {
                          className: S().shimmerTitle,
                          radius: "l",
                        }),
                  }),
                  (0, i.jsx)(u.t, {
                    containerClassName: (0, r.W)(
                      S().scrollContainer,
                      S().important,
                    ),
                    className: S().scrollableContainer,
                    ref: v,
                    children: (0, i.jsx)("div", {
                      className: S().container,
                      children: f,
                    }),
                  }),
                ],
              }),
            }),
          });
        });
    },
    99063: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return u.TagPage;
        },
        tS: function () {
          return l;
        },
      });
      var i = a(2685),
        r = a(49430),
        n = a(50684),
        s = a(58997),
        o = a(91694);
      let l = i.V5.model("TagPage", {
        title: i.V5.maybe(i.V5.string),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        tagLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsData: i.V5.array(
          i.V5.model({ uid: i.V5.number, kind: i.V5.number }),
        ),
        playlists: i.V5.array(i.V5.maybeNull(n.Cd)),
        pager: i.V5.maybeNull(o.Vn),
        alreadyRequestedPages: i.V5.map(i.V5.number),
        pendingPages: i.V5.map(i.V5.number),
        requests: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
              e.playlistsLoadingState === s.Gui.RESOLVE &&
              0 === e.playlists.length;
            return (
              ((e.tagLoadingState === s.Gui.REJECT ||
                e.playlistsLoadingState === s.Gui.REJECT) &&
                (e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST)) ||
              t
            );
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, i.ls)(function* (t) {
              let { page: a = 0, pageSize: o = 20 } = t,
                { playlistsResource: l, modelActionsLogger: u } = (0, i.dU)(e);
              if (
                !(
                  e.tagLoadingState !== s.Gui.RESOLVE ||
                  (e.playlistsLoadingState === s.Gui.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var d;
                  (e.playlistsLoadingState = s.Gui.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * o,
                    r = e.playlistsData.slice(t, t + o),
                    u = yield l.getPlaylists({
                      playlistIds: r.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                  let c = {
                    page: a,
                    perPage: o,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, i.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let h = u.playlists.map(n.PV);
                  (0, s.AG_)({
                    items: e.playlists,
                    mappedRawItems: h,
                    page: a,
                    pageSize: o,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.RESOLVE);
                } catch (t) {
                  u.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = s.Gui.IDLE),
                (e.playlistsLoadingState = s.Gui.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, i.ls)(function* (a) {
              let { id: n, page: o = 0, pageSize: l = 20 } = a,
                { tagResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (e.tagLoadingState !== s.Gui.PENDING)
                try {
                  var c;
                  e.tagLoadingState = s.Gui.PENDING;
                  let a = yield u.getPlaylistIds({ id: n });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, i.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.RESOLVE),
                    yield t.getPlaylists({ page: o, pageSize: l });
                } catch (t) {
                  d.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.REJECT);
                }
            }),
          };
          return t;
        });
      a(79367);
      var u = a(90787);
    },
    79367: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return s;
        },
      });
      var i = a(65301),
        r = a(96233),
        n = a(32544);
      let s = (0, r.Pi)(() => (0, i.jsx)(n.T, {}));
    },
    90787: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return v;
        },
      });
      var i = a(65301),
        r = a(9695),
        n = a(96233),
        s = a(99678),
        o = a(91207),
        l = a(37184),
        u = a(81437),
        d = a(36643),
        c = a(21016),
        h = a(81706),
        m = a(58997),
        g = a(29778),
        p = a(1096),
        y = a.n(p);
      let v = (0, n.Pi)((e) => {
        var t, a, n;
        let { tagId: p } = e,
          {
            tag: v,
            settings: { isMobile: E },
          } = (0, m.oR4)(),
          { formatMessage: f } = (0, l.Z)(),
          { contentScrollRef: S, setContentScrollRef: b } = (0, m.$Y6)(),
          P = (0, m.k67)();
        p || (0, s.notFound)();
        let A = (0, o.useCallback)(
          (e) => {
            v.getPlaylists({ page: e, pageSize: 20 });
          },
          [v],
        );
        v.tagLoadingState === m.Gui.IDLE &&
          (0, o.use)(v.getTag({ id: p, page: 0, pageSize: 20 })),
          v.isNotFound && (0, s.notFound)(),
          (0, o.useEffect)(
            () => () => {
              v.reset();
            },
            [v],
          );
        let _ = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: y().footer }) }),
          [],
        );
        return ((0, m.NOh)(
          v.tagLoadingState === m.Gui.RESOLVE &&
            v.playlistsLoadingState === m.Gui.RESOLVE,
        ),
        (v.tagLoadingState !== m.Gui.REJECT &&
          v.playlistsLoadingState !== m.Gui.REJECT) ||
          v.isNotFound)
          ? (0, i.jsx)(m.Lh6, {
              pageId: m.Rhz.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: S,
                outerTitle: v.title,
                children: (0, i.jsxs)("div", {
                  className: y().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: P.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: v.title,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, r.W)(y().scrollContainer, y().important),
                      customComponents: _,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == v
                              ? void 0
                              : null === (t = v.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          r = f(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: f({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              h.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(g.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == v
                              ? void 0
                              : null === (t = v.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: A,
                      pageSize: 20,
                      totalRequests:
                        null !== (n = v.requests) && void 0 !== n ? n : 0,
                      listClassName: y().content,
                      itemClassName: y().item,
                      handleRef: b,
                      context: {
                        listAriaLabel: f(
                          { id: "mixes.albums-list" },
                          { genreName: v.title || "" },
                        ),
                      },
                      isMobileLayout: E,
                      useWindowScroll: E,
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(d.D, {});
      });
    },
    91694: function (e, t, a) {
      "use strict";
      a.d(t, {
        KL: function () {
          return d;
        },
        S2: function () {
          return c;
        },
        Ib: function () {
          return h;
        },
        K3: function () {
          return g;
        },
        dU: function () {
          return p;
        },
        K8: function () {
          return y;
        },
        i_: function () {
          return b;
        },
        ie: function () {
          return T;
        },
        n4: function () {
          return D;
        },
        T2: function () {
          return O;
        },
        fE: function () {
          return w;
        },
        CU: function () {
          return M;
        },
        Al: function () {
          return j;
        },
        Vn: function () {
          return U;
        },
        ao: function () {
          return W;
        },
        $4: function () {
          return H;
        },
        tC: function () {
          return K;
        },
      });
      var i,
        r,
        n,
        s,
        o,
        l,
        u = a(2685);
      let d = u.V5.model("BaseModalModel", {
          isOpened: u.V5.optional(u.V5.boolean, !1),
        }).actions((e) => ({
          onOpenChange(t) {
            e.isOpened = t;
          },
          open() {
            e.isOpened = !0;
          },
          close() {
            e.isOpened = !1;
          },
        })),
        c = u.V5.model("CaseForms", {
          nominative: u.V5.optional(u.V5.string, ""),
          genitive: u.V5.optional(u.V5.string, ""),
          dative: u.V5.optional(u.V5.string, ""),
          accusative: u.V5.optional(u.V5.string, ""),
          instrumental: u.V5.optional(u.V5.string, ""),
          prepositional: u.V5.optional(u.V5.string, ""),
        }),
        h = u.V5.model("Cover", {
          uri: u.V5.maybe(u.V5.string),
          color: u.V5.maybe(u.V5.string),
          videoUrl: u.V5.maybe(u.V5.string),
        }),
        m = u.V5.model("DisclaimerDetails", {
          text: u.V5.maybe(u.V5.string),
          url: u.V5.maybe(u.V5.string),
        }),
        g = u.V5.model("DisclaimerData", {
          title: u.V5.maybe(u.V5.string),
          description: u.V5.maybe(u.V5.string),
          details: u.V5.maybe(m),
        }),
        p = u.V5.compose(u.V5.model({ id: u.V5.string, type: u.V5.string }), g),
        y = u.V5.model("DomainTrailerEntity", { isAvailable: u.V5.boolean });
      var v = a(76382),
        E = a(98654),
        f = a(17820);
      let S = u.V5.model("Experiment", {
          group: u.V5.maybe(u.V5.string),
          value: u.V5.maybe(u.V5.frozen()),
        }),
        b = u.V5.model("Experiments", {
          loadingState: u.V5.enumeration(Object.values(E.G)),
          experiments: u.V5.optional(u.V5.map(S), {}),
          overwrittenExperiments: u.V5.optional(u.V5.map(S), {}),
        })
          .views((e) => ({
            getOverwrittenExperiments() {
              let { containerStorage: t, config: a } = (0, u.dU)(e),
                i = t.get(f.B.OverwrittenExperiments);
              return !a.dev.allowOverwriteExperiments &&
                (null == i ? void 0 : i[v.p.WebNextAllowUnauthorized])
                ? {
                    [v.p.WebNextAllowUnauthorized]:
                      i[v.p.WebNextAllowUnauthorized],
                  }
                : a.dev.allowOverwriteExperiments
                  ? i
                  : null;
            },
            getExperiment(t) {
              var a;
              let i = e.experiments.get(t),
                r = this.getOverwrittenExperiments();
              return r && null !== (a = r[t]) && void 0 !== a ? a : i;
            },
            checkExperiment(t, a) {
                return (
                    (this.getOverwrittenExperiments()?.[t]?.group ??
                        window?.DEFAULT_EXPERIMENT_OVERRIDES()?.[t] ??
                        e.experiments.get(t)?.group) === a
                );
            },
            isRejected: () => e.loadingState === E.G.REJECT,
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { accountResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== E.G.PENDING)
                try {
                  e.loadingState = E.G.PENDING;
                  let a = yield t.experimentsDetails();
                  e.experiments.clear(),
                    Object.entries(a).forEach((t) => {
                      let [a, i] = t;
                      e.experiments.set(a, i);
                    }),
                    (e.loadingState = E.G.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = E.G.REJECT);
                } finally {
                  var i;
                  Object.entries(
                    null !== (i = e.getOverwrittenExperiments()) && void 0 !== i
                      ? i
                      : {},
                  ).forEach((t) => {
                    let [a, i] = t;
                    e.overwrittenExperiments.set(a, i);
                  });
                }
            }),
            updateOverwrittenExperiments(t, a) {
              let { config: i } = (0, u.dU)(e);
              i.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.set(t, a);
            },
            deleteOverwrittenExperiments(t) {
              let { config: a } = (0, u.dU)(e);
              a.dev.allowOverwriteExperiments &&
                e.overwrittenExperiments.delete(t);
            },
          }));
      var P = a(5831),
        A = a(35068),
        _ = a(19522),
        N = a(13477),
        C = a(58997);
      let T = u.V5.model("ExplicitModel", {
        contentWarning: u.V5.maybe(u.V5.enumeration(Object.values(P.F))),
        trackType: u.V5.maybe(u.V5.enumeration(Object.values(A.V))),
        disclaimers: u.V5.maybe(u.V5.array(u.V5.string)),
      })
        .views((e) => ({
          get isExplicit() {
            return e.contentWarning === P.F.EXPLICIT;
          },
          get explicitDisclaimer() {
            var t, a, i, r, n;
            if (!(0, u.fh)(e) || !e.disclaimers) return null;
            let { experiments: s } = (0, u.yj)(e),
              o =
                null == s
                  ? void 0
                  : s.checkExperiment(C.peG.WebNextAllowExclamationIcon, "on"),
              l =
                null === (t = (0, C.V4d)(e.disclaimers, _.e.EXPLICIT_ICON)) ||
                void 0 === t
                  ? void 0
                  : t[0],
              d =
                null === (a = (0, C.V4d)(e.disclaimers, _.e.AGE_18_ICON)) ||
                void 0 === a
                  ? void 0
                  : a[0],
              c =
                null ===
                  (i = (0, C.V4d)(e.disclaimers, _.e.EXCLAMATION_ICON)) ||
                void 0 === i
                  ? void 0
                  : i[0];
            if (o && (null == c ? void 0 : c.type) === _.e.EXCLAMATION_ICON)
              return N.ExplicitMarkVariant.EXCLAMATION;
            if (
              (o && l) ||
              (!o &&
                (null === (r = e.disclaimers) || void 0 === r
                  ? void 0
                  : r.includes(_.e.EXPLICIT)))
            )
              return N.ExplicitMarkVariant.E;
            if (
              (o && d) ||
              (!o &&
                (null === (n = e.disclaimers) || void 0 === n
                  ? void 0
                  : n.includes(_.e.AGE_18)))
            )
              return N.ExplicitMarkVariant.NUMERIC;
            return null;
          },
          get apiExplicitMark() {
            if (!this.isExplicit) return null;
            let e = this.explicitDisclaimer;
            if (!e && this.isExplicit) return N.ExplicitMarkVariant.E;
            return e;
          },
          get albumExplicitMark() {
            let { experiments: t } = (0, u.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(C.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === P.F.EXPLICIT && e.disclaimers)
              return e.disclaimers[0] === P.F.EXPLICIT
                ? N.ExplicitMarkVariant.E
                : N.ExplicitMarkVariant.NUMERIC;
            return null;
          },
          get trackExplicitMark() {
            if (!(0, u.fh)(e)) return null;
            let { experiments: t } = (0, u.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(C.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === P.F.EXPLICIT)
              return A.V.PODCAST === e.trackType
                ? N.ExplicitMarkVariant.NUMERIC
                : N.ExplicitMarkVariant.E;
            return null;
          },
          get clipExplicitMark() {
            let { experiments: t } = (0, u.yj)(e);
            if (
              null == t
                ? void 0
                : t.checkExperiment(C.peG.WebNextNewExplicitApi, "on")
            )
              return this.apiExplicitMark;
            if (e.contentWarning === P.F.EXPLICIT && e.disclaimers)
              return e.disclaimers[0] === P.F.EXPLICIT
                ? N.ExplicitMarkVariant.E
                : N.ExplicitMarkVariant.NUMERIC;
            return null;
          },
        }))
        .actions((e) => ({
          getDescriptionTexts: (0, u.ls)(function* () {
            if (!e.disclaimers) return null;
            let { disclaimers: t, experiments: a } = (0, u.yj)(e);
            if (
              !(
                (null == a
                  ? void 0
                  : a.checkExperiment(
                      C.peG.WebNextNewExplicitApiDescriptionText,
                      "on",
                    )) ||
                (null == a
                  ? void 0
                  : a.checkExperiment(C.peG.WebNextAllowExclamationIcon, "on"))
              )
            )
              return null;
            let i = (0, C.V4d)(e.disclaimers, _.e.DESCRIPTION_TEXT) || [],
              r = [];
            for (let e of i) {
              let a = yield t.getDisclaimerById(e.id);
              a && a.title && r.push(a.title);
            }
            return r;
          }),
        }));
      ((i = s || (s = {}))[(i.LIKED = 1)] = "LIKED"),
        (i[(i.DISLIKED = -1)] = "DISLIKED");
      var I = a(83768);
      ((r = o || (o = {})).LIKED = "1"), (r.DISLIKED = "0");
      let k = u.V5.optional(u.V5.map(u.V5.enumeration(Object.values(o))), {}),
        D = u.V5.model("LibraryAllIds", {
          loadingState: u.V5.enumeration(Object.values(E.G)),
          tracks: k,
          albums: k,
          artists: k,
          playlists: k,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              setRecords(e, t) {
                if (t) {
                  for (let a in t)
                    if (Object.prototype.hasOwnProperty.call(t, a)) {
                      let i = t[a] === s.LIKED ? "1" : "0";
                      e.set(String(a), i);
                    }
                }
              },
              getData: (0, u.ls)(function* () {
                let { libraryResource: a, modelActionsLogger: i } = (0, u.dU)(
                  e,
                );
                if (e.loadingState !== E.G.PENDING)
                  try {
                    e.loadingState = E.G.PENDING;
                    let i = yield a.getAllIds({});
                    e.albums.clear(),
                      e.artists.clear(),
                      e.playlists.clear(),
                      e.tracks.clear(),
                      t.setRecords(e.tracks, i.defaultLibrary),
                      t.setRecords(e.albums, i.albums),
                      t.setRecords(e.artists, i.artists),
                      t.setRecords(e.playlists, i.playlists),
                      (e.loadingState = E.G.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = E.G.REJECT);
                  }
              }),
              toggleTrackLike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.tracks.get(r);
                try {
                  let i;
                  let n = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "1" === e.tracks.get(r)
                      ? (e.tracks.delete(r), (i = yield a.unlikeTrack(n)))
                      : (e.tracks.set(r, "1"), (i = yield a.likeTrack(n))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.set(r, n) : e.tracks.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.tracks.get(r);
                try {
                  let i;
                  let n = {
                    entityId: t.albumId
                      ? "".concat(t.entityId, ":").concat(t.albumId)
                      : t.entityId,
                    userId: t.userId,
                  };
                  return (
                    "0" === e.tracks.get(r)
                      ? (e.tracks.delete(r), (i = yield a.undislikeTrack(n)))
                      : (e.tracks.set(r, "0"), (i = yield a.dislikeTrack(n))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.tracks.set(r, n) : e.tracks.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.artists.get(r);
                try {
                  let i;
                  return (
                    "1" === e.artists.get(r)
                      ? (e.artists.delete(r), (i = yield a.unlikeArtist(t)))
                      : (e.artists.set(r, "1"), (i = yield a.likeArtist(t))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.artists.set(r, n) : e.artists.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.artists.get(r);
                try {
                  let i;
                  return (
                    "0" === e.artists.get(r)
                      ? (e.artists.delete(r), (i = yield a.undislikeArtist(t)))
                      : (e.artists.set(r, "0"), (i = yield a.dislikeArtist(t))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.artists.set(r, n) : e.artists.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.albums.get(r);
                try {
                  let i;
                  return (
                    "1" === e.albums.get(r)
                      ? (e.albums.delete(r), (i = yield a.unlikeAlbum(t)))
                      : (e.albums.set(r, "1"), (i = yield a.likeAlbum(t))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.albums.set(r, n) : e.albums.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, u.ls)(function* (t) {
                let { usersResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  r = String(t.entityId),
                  n = e.playlists.get(r);
                try {
                  let i;
                  return (
                    "1" === e.playlists.get(r)
                      ? (e.playlists.delete(r), (i = yield a.unlikePlaylist(t)))
                      : (e.playlists.set(r, "1"),
                        (i = yield a.likePlaylist(t))),
                    i
                  );
                } catch (t) {
                  return (
                    n ? e.playlists.set(r, n) : e.playlists.delete(r),
                    i.error(t),
                    I.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        L = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
      var R = a(9222);
      ((n = l || (l = {})).LIKED = "1"), (n.DISLIKED = "0");
      let V = [
          R.z.LIKED_ALBUMS,
          R.z.LIKED_ARTISTS,
          R.z.LIKED_PLAYLISTS,
          R.z.LIKED_TRACKS,
        ],
        x = u.V5.optional(u.V5.map(u.V5.enumeration(Object.values(l))), {}),
        G = u.V5.model("LibraryRecord", {
          revision: u.V5.maybeNull(u.V5.number),
          items: x,
        }),
        O = u.V5.model("LibrarySync", {
          loadingState: u.V5.enumeration(Object.values(E.G)),
          tracks: G,
          albums: G,
          artists: G,
          playlists: G,
        })
          .views((e) => ({
            isTrackLiked: (t) => "1" === e.tracks.items.get(String(t)),
            isTrackDisliked: (t) => "0" === e.tracks.items.get(String(t)),
            isArtistLiked: (t) => "1" === e.artists.items.get(String(t)),
            isArtistDisliked: (t) => "0" === e.artists.items.get(String(t)),
            isAlbumLiked: (t) => "1" === e.albums.items.get(String(t)),
            isPlaylistLiked: (t) => "1" === e.playlists.items.get(String(t)),
          }))
          .actions((e) => {
            let t = {
              getData: (0, u.ls)(function* () {
                let a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : V,
                  { modelActionsLogger: i, collectionResource: r } = (0, u.dU)(
                    e,
                  );
                if (e.loadingState !== E.G.PENDING)
                  try {
                    e.loadingState = E.G.PENDING;
                    let i = {};
                    a.includes(R.z.LIKED_ALBUMS) &&
                      (i.likedAlbums = L(e.albums.revision)),
                      a.includes(R.z.LIKED_ARTISTS) &&
                        (i.likedArtists = L(e.artists.revision)),
                      a.includes(R.z.LIKED_TRACKS) &&
                        (i.likedTracks = L(e.tracks.revision)),
                      a.includes(R.z.LIKED_PLAYLISTS) &&
                        (i.likedPlaylists = {});
                    let n = yield r.sync(i);
                    t.setAlbums(n.values.likedAlbums),
                      t.setArtists(n.values.likedArtists),
                      t.setPlaylists(n.values.likedPlaylists),
                      t.setTracks(n.values.likedTracks),
                      (e.loadingState = E.G.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = E.G.REJECT);
                  }
              }),
              setArtists: (a) => {
                (null == a ? void 0 : a.values) &&
                  e.artists.revision !== a.info.revision &&
                  (t.clearArtists(),
                  (e.artists.revision = a.info.revision),
                  a.values.liked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "1");
                  }),
                  a.values.disliked.map((t) => {
                    e.artists.items.set(t.artistId.toString(), "0");
                  }));
              },
              setAlbums: (a) => {
                (null == a ? void 0 : a.values) &&
                  e.albums.revision !== a.info.revision &&
                  (t.clearAlbums(),
                  (e.albums.revision = a.info.revision),
                  a.values.liked.map((t) => {
                    e.albums.items.set(t.albumId.toString(), "1");
                  }));
              },
              setPlaylists: (a) => {
                (null == a ? void 0 : a.values) &&
                  (t.clearPlaylists(),
                  a.values.liked.map((t) => {
                    e.playlists.items.set(
                      ""
                        .concat(t.compositeData.uid, ":")
                        .concat(t.compositeData.kind),
                      "1",
                    );
                  }));
              },
              setTracks: (a) => {
                (null == a ? void 0 : a.values) &&
                  e.tracks.revision !== a.info.revision &&
                  (t.clearTracks(),
                  (e.tracks.revision = a.info.revision),
                  a.values.liked.map((t) => {
                    e.tracks.items.set(t.trackId, "1");
                  }),
                  a.values.disliked.map((t) => {
                    e.tracks.items.set(t.trackId, "0");
                  }));
              },
              clearArtists: () => {
                (e.artists.revision = null), e.artists.items.clear();
              },
              clearAlbums: () => {
                (e.albums.revision = null), e.albums.items.clear();
              },
              clearPlaylists: () => {
                (e.playlists.revision = null), e.playlists.items.clear();
              },
              clearTracks: () => {
                (e.tracks.revision = null), e.tracks.items.clear();
              },
              toggleTrackLike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.tracks.items.get(n);
                try {
                  let r;
                  let s = {
                    entityId: a.albumId
                      ? "".concat(a.entityId, ":").concat(a.albumId)
                      : a.entityId,
                    userId: a.userId,
                  };
                  return (
                    "1" === e.tracks.items.get(n)
                      ? (e.tracks.items.delete(n), (r = yield i.unlikeTrack(s)))
                      : (e.tracks.items.set(n, "1"),
                        (r = yield i.likeTrack(s))),
                    t.getData([R.z.LIKED_TRACKS]),
                    r
                  );
                } catch (t) {
                  return (
                    s ? e.tracks.items.set(n, s) : e.tracks.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleTrackDislike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.tracks.items.get(n);
                try {
                  let r;
                  let s = {
                    entityId: a.albumId
                      ? "".concat(a.entityId, ":").concat(a.albumId)
                      : a.entityId,
                    userId: a.userId,
                  };
                  return (
                    "0" === e.tracks.items.get(n)
                      ? (e.tracks.items.delete(n),
                        (r = yield i.undislikeTrack(s)))
                      : (e.tracks.items.set(n, "0"),
                        (r = yield i.dislikeTrack(s))),
                    t.getData([R.z.LIKED_TRACKS]),
                    r
                  );
                } catch (t) {
                  return (
                    s ? e.tracks.items.set(n, s) : e.tracks.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleArtistLike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.artists.items.get(n);
                try {
                  let r;
                  return (
                    "1" === e.artists.items.get(n)
                      ? (e.artists.items.delete(n),
                        (r = yield i.unlikeArtist(a)))
                      : (e.artists.items.set(n, "1"),
                        (r = yield i.likeArtist(a))),
                    t.getData([R.z.LIKED_ARTISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    s ? e.artists.items.set(n, s) : e.artists.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleArtistDislike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.artists.items.get(n);
                try {
                  let r;
                  return (
                    "0" === e.artists.items.get(n)
                      ? (e.artists.items.delete(n),
                        (r = yield i.undislikeArtist(a)))
                      : (e.artists.items.set(n, "0"),
                        (r = yield i.dislikeArtist(a))),
                    t.getData([R.z.LIKED_ARTISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    s ? e.artists.items.set(n, s) : e.artists.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
              toggleAlbumLike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.albums.items.get(n);
                try {
                  let r;
                  return (
                    "1" === e.albums.items.get(n)
                      ? (e.albums.items.delete(n), (r = yield i.unlikeAlbum(a)))
                      : (e.albums.items.set(n, "1"),
                        (r = yield i.likeAlbum(a))),
                    t.getData([R.z.LIKED_ALBUMS]),
                    r
                  );
                } catch (t) {
                  return (
                    s ? e.albums.items.set(n, s) : e.albums.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
              togglePlaylistLike: (0, u.ls)(function* (a) {
                let { usersResource: i, modelActionsLogger: r } = (0, u.dU)(e),
                  n = String(a.entityId),
                  s = e.playlists.items.get(n);
                try {
                  let r;
                  return (
                    "1" === e.playlists.items.get(n)
                      ? (e.playlists.items.delete(n),
                        (r = yield i.unlikePlaylist(a)))
                      : (e.playlists.items.set(n, "1"),
                        (r = yield i.likePlaylist(a))),
                    t.getData([R.z.LIKED_PLAYLISTS]),
                    r
                  );
                } catch (t) {
                  return (
                    s
                      ? e.playlists.items.set(n, s)
                      : e.playlists.items.delete(n),
                    r.error(t),
                    I.B.ERROR
                  );
                }
              }),
            };
            return t;
          }),
        w = u.V5.model("LikesCount", {
          likesCount: u.V5.maybe(u.V5.number),
          pendingLikesCount: u.V5.optional(u.V5.number, 0),
        })
          .views((e) => ({
            get actualLikesCount() {
              if ("number" == typeof e.likesCount) {
                var t;
                return (
                  e.likesCount +
                  (null !== (t = e.pendingLikesCount) && void 0 !== t ? t : 0)
                );
              }
              return 0;
            },
          }))
          .actions((e) => ({
            likePending() {
              e.pendingLikesCount += 1;
            },
            unlikePending() {
              e.pendingLikesCount -= 1;
            },
          })),
        M = u.V5.model("Location", {
          pathname: u.V5.optional(u.V5.string, ""),
          searchParams: u.V5.optional(u.V5.string, ""),
          host: u.V5.optional(u.V5.string, ""),
          tld: u.V5.optional(u.V5.string, ""),
          origin: u.V5.optional(u.V5.string, ""),
          href: u.V5.optional(u.V5.string, ""),
        }).actions((e) => ({
          setPathname(t) {
            e.pathname = t;
          },
          setSearchParams(t) {
            e.searchParams = t;
          },
          setHost(t) {
            e.host = t;
          },
          setTld(t) {
            e.tld = t;
          },
          setOrigin(t) {
            e.origin = t;
          },
          setHref(t) {
            e.href = t;
          },
        })),
        j = u.V5.model("ModelDestroyManager").actions(() => ({
          destroyItems(e) {
            e.forEach((e) => {
              e && (0, u.og)(e);
            }),
              queueMicrotask(() => {
                e.forEach((e) => {
                  e && (0, u.ob)(e);
                });
              });
          },
        })),
        U = u.V5.model("Pager", {
          page: u.V5.number,
          perPage: u.V5.number,
          total: u.V5.number,
        });
      var q = a(50703),
        F = a(94538),
        B = a(24642);
      let Y = u.V5.model("BrowserInfo", {
          isBrowser: u.V5.boolean,
          isMobile: u.V5.boolean,
          isTablet: u.V5.boolean,
          isTouch: u.V5.boolean,
          name: u.V5.maybe(u.V5.string),
          version: u.V5.maybe(u.V5.string),
          OSFamily: u.V5.maybe(u.V5.string),
        }).views((e) => ({
          get isSafari() {
            var t;
            return null === (t = e.name) || void 0 === t
              ? void 0
              : t.toLowerCase().includes("safari");
          },
        })),
        W = u.V5.model("Settings", {
          layout: u.V5.maybeNull(u.V5.enumeration(Object.keys(q.t))),
          isLandscape: u.V5.boolean,
          isMobileLandscapeHeight: u.V5.boolean,
          platform: u.V5.maybe(u.V5.enumeration(Object.values(B.t))),
          browserInfo: u.V5.maybe(Y),
          liteVersionMode: u.V5.maybe(u.V5.enumeration(Object.values(F.m))),
        })
          .views((e) => {
            let t = {
              get isMobile() {
                return e.layout === q.t.Mobile;
              },
              get isDesktopApplication() {
                return !!e.platform;
              },
              get isWindowsApplication() {
                return e.platform === B.t.WINDOWS;
              },
              get isMacOSApplication() {
                return e.platform === B.t.MACOS;
              },
              get isLinuxApplication() {
                return e.platform === B.t.LINUX;
              },
              get isLiteVersionModeEnabled() {
                return e.liteVersionMode === F.m.ENABLED;
              },
              get isLiteVersionModeDisabled() {
                return e.liteVersionMode === F.m.DISABLED;
              },
              get isLiteVersionModeAvailableForToggle() {
                return (
                  t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled
                );
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              setLayout(t) {
                e.layout = t;
              },
              setPlatform(t) {
                e.platform = t;
              },
              setIsLandscape(t) {
                e.isLandscape = t;
              },
              setIsMobileLandscapeHeight(t) {
                e.isMobileLandscapeHeight = t;
              },
              setBrowserInfo(t) {
                e.browserInfo = (0, u.pj)(t);
              },
              initializeLiteVersionMode() {
                if (!(0, u.fh)(e)) return;
                let { experiments: a } = (0, u.yj)(e),
                  { containerStorage: i } = (0, u.dU)(e),
                  r = i.get(f.B.LiteVersionMode);
                if (r) {
                  if (
                    "2" !== r.version ||
                    !a.checkExperiment(v.p.WebNextLiteVersion, "on")
                  ) {
                    i.remove(f.B.LiteVersionMode);
                    return;
                  }
                  t.setLiteVersionMode(r.mode, !1);
                }
              },
              setLiteVersionMode(t, a) {
                let { containerStorage: i } = (0, u.dU)(e);
                (e.liteVersionMode = t),
                  a && i.set(f.B.LiteVersionMode, { version: "2", mode: t });
              },
            };
            return t;
          });
      var z = a(24471);
      let H = u.V5.model("Sort", {
          sortBy: u.V5.string,
          sortOrder: u.V5.enumeration(Object.values(z.A)),
        }),
        K = u.V5.model("TrackIdModel", {
          id: u.V5.union(u.V5.string, u.V5.number),
          albumId: u.V5.maybe(u.V5.number),
          timestamp: u.V5.maybe(u.V5.string),
        });
    },
    55196: function (e, t, a) {
      "use strict";
      a.d(t, {
        Fu: function () {
          return m;
        },
        _Z: function () {
          return o;
        },
      });
      var i = a(91207),
        r = a(58997),
        n = a(6840);
      let s = (e, t) => {
          let a = !0;
          return (0, n.Z)(e).reduce((e, i) => {
            if (!i.durationMs) return e;
            if (i.id === t) {
              var r;
              return (
                (a = !1),
                e +
                  ((null === (r = i.streamProgress) || void 0 === r
                    ? void 0
                    : r.endPositionSec) || 0)
              );
            }
            return a ? e + i.durationMs / 1e3 : e;
          }, 0);
        },
        o = (e) => {
          let { sonataState: t, continueListen: a } = (0, r.oR4)();
          return (0, i.useCallback)(() => {
            var i, r, n, o, l, u, d, c;
            if (
              !e ||
              (!(null === (i = t.entityMeta) || void 0 === i
                ? void 0
                : i.isPodcast) &&
                !(null === (r = t.entityMeta) || void 0 === r
                  ? void 0
                  : r.isAudiobook))
            )
              return;
            let h = e.state.queueState.index.value;
            e.state.queueState.order.value.length > 0 &&
              "number" == typeof h &&
              a.saveTrackIndex(h);
            let m =
              null === (n = e.state.currentContext.value) || void 0 === n
                ? void 0
                : n.data.meta;
            if (
              m &&
              t.contextType &&
              t.contextId &&
              (a.saveTrack({
                contextType: t.contextType,
                contextId: t.contextId,
                track: t.entityMeta,
              }),
              t.entityMeta.isAudiobook)
            ) {
              if ("volumes" in m && m.volumes) {
                let e;
                let i = s(m.volumes, t.entityMeta.id);
                "durationSec" in m && (e = m.durationSec),
                  a.saveAlbumDuration(e),
                  null === (u = a.trackTempStreamProgress) ||
                    void 0 === u ||
                    u.updateEndPositionSec(
                      (null === (l = a.track) || void 0 === l
                        ? void 0
                        : null === (o = l.streamProgress) || void 0 === o
                          ? void 0
                          : o.endPositionSec) || 0,
                    ),
                  null === (d = a.albumStreamProgress) ||
                    void 0 === d ||
                    d.updateEndPositionSec(i);
              }
              "listeningFinished" in m &&
                (null === (c = a.albumStreamProgress) ||
                  void 0 === c ||
                  c.updateEverFinished(m.listeningFinished || !1));
            }
          }, [e, a, t]);
        };
      var l = a(79491),
        u = a(2685),
        d = a(19489),
        c = a(3154),
        h = a(26382);
      let m = u.V5.model("ContinueListen", {
        track: u.V5.maybe(c.le),
        trackIndex: u.V5.maybe(u.V5.number),
        contextType: u.V5.maybeNull(u.V5.enumeration(Object.values(d.A))),
        contextId: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
        albumDuration: u.V5.maybe(u.V5.number),
        albumStreamProgress: u.V5.optional(h.XK, { endPositionSec: 0 }),
        trackTempStreamProgress: u.V5.optional(h.XK, { endPositionSec: 0 }),
      }).actions((e) => ({
        saveTrack: (t) => {
          let { contextType: a, contextId: i, track: r, isDefaultTrack: n } = t;
          (n && e.track) ||
            ((e.contextType = a),
            (e.contextId = i),
            (e.track = (0, u.pj)((0, l.ZN)(r))));
        },
        saveTrackIndex: (t) => {
          e.trackIndex = t;
        },
        saveAlbumDuration: (t) => {
          e.albumDuration = t;
        },
      }));
    },
    35653: function (e) {
      e.exports = {
        toastClassName: "NotificationsInitializer_toastClassName__ZVvrd",
        notificationContainer:
          "NotificationsInitializer_notificationContainer__oe1ot",
      };
    },
    79942: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    68349: function (e) {
      e.exports = {
        root: "UgcUploadCenterNotification_root__K_U0z",
        title: "UgcUploadCenterNotification_title__s3yTL",
        link: "UgcUploadCenterNotification_link__NPz6r",
      };
    },
    56741: function (e) {
      e.exports = {
        root: "ChartPodcastsPage_root__J5lnx",
        scrollContainer: "ChartPodcastsPage_scrollContainer__WQTf7",
        important: "ChartPodcastsPage_important__fW45m",
        footer: "ChartPodcastsPage_footer__7ytrT",
        item: "ChartPodcastsPage_item__vGRt8",
        content: "ChartPodcastsPage_content__NcV4M",
      };
    },
    74291: function (e) {
      e.exports = {
        root: "ChartTracksPage_root__QMbqY",
        scrollContainer: "ChartTracksPage_scrollContainer__Pxe8S",
        important: "ChartTracksPage_important__Lddyf",
        content: "ChartTracksPage_content__yyIAN",
        footer: "ChartTracksPage_footer__6sNBk",
        shimmerItem: "ChartTracksPage_shimmerItem__YwM0h",
      };
    },
    48384: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    58006: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    95585: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    42954: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    55788: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    11058: function (e) {
      e.exports = {
        root: "KidsPage_root__yycsJ",
        content: "KidsPage_content__08pPR",
        header: "KidsPage_header__2Gk2l",
        landing: "KidsPage_landing__3QZZj",
        landing_onlyWizard: "KidsPage_landing_onlyWizard__xKyDo",
        footer: "KidsPage_footer__p7SVD",
        error: "KidsPage_error__qa7Qo",
      };
    },
    70930: function (e) {
      e.exports = { root: "MyMusicDownloadedTracksInfo_root__yIYHx" };
    },
    56910: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPage_root__hZZwz",
        important: "MyMusicDownloadedTracksPage_important__QP_t0",
        pageContainer: "MyMusicDownloadedTracksPage_pageContainer__qu3hF",
        footer: "MyMusicDownloadedTracksPage_footer__KI5OP",
        content: "MyMusicDownloadedTracksPage_content__Iz1WY",
        trackShimmer: "MyMusicDownloadedTracksPage_trackShimmer__MZgW3",
      };
    },
    59976: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPageEmpty_root__LAXpY",
        icon: "MyMusicDownloadedTracksPageEmpty_icon__PDhk2",
        title: "MyMusicDownloadedTracksPageEmpty_title__g2w5R",
        text: "MyMusicDownloadedTracksPageEmpty_text__8RJFg",
      };
    },
    67152: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPageHeader_root__2vfuc",
        container: "MyMusicDownloadedTracksPageHeader_container__hQ_wt",
        title: "MyMusicDownloadedTracksPageHeader_title__Ncn5X",
        stickyTitle: "MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U",
        playButton: "MyMusicDownloadedTracksPageHeader_playButton__seWgC",
        stickyPlayButton:
          "MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd",
        titleContainer:
          "MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS",
        staticHeader: "MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8",
        important: "MyMusicDownloadedTracksPageHeader_important__JIubq",
        stickyHeader: "MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4",
      };
    },
    74232: function (e) {
      e.exports = {
        root: "NonMusicAlbumsPage_root__jlDXa",
        scrollContainer: "NonMusicAlbumsPage_scrollContainer__XNRsu",
        important: "NonMusicAlbumsPage_important__Rk8LT",
        footer: "NonMusicAlbumsPage_footer__LJCIL",
        item: "NonMusicAlbumsPage_item__YArCS",
        content: "NonMusicAlbumsPage_content__phVa7",
      };
    },
    45791: function (e) {
      e.exports = {
        root: "NonMusicCategoryPage_root__GYeXL",
        content: "NonMusicCategoryPage_content__LJFnm",
        carouselBlocks: "NonMusicCategoryPage_carouselBlocks___BPJ_",
        carouselBlock: "NonMusicCategoryPage_carouselBlock__t41do",
        carouselBlockHeader: "NonMusicCategoryPage_carouselBlockHeader__1uIfL",
        footer: "NonMusicCategoryPage_footer__56hvJ",
      };
    },
    88865: function (e) {
      e.exports = {
        root: "NonMusicCategoryPlaylistsPage_root__NvUH8",
        scrollContainer: "NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",
        important: "NonMusicCategoryPlaylistsPage_important__YBsHf",
        footer: "NonMusicCategoryPlaylistsPage_footer__TtkEO",
        item: "NonMusicCategoryPlaylistsPage_item__4YasT",
        content: "NonMusicCategoryPlaylistsPage_content__GZb1j",
      };
    },
    54153: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    29217: function (e) {
      e.exports = {
        root: "PlaylistPersonalDummyPage_root__tGxHG",
        cover: "PlaylistPersonalDummyPage_cover__XcCD1",
        title: "PlaylistPersonalDummyPage_title__ZSf9O",
        important: "PlaylistPersonalDummyPage_important__uEHGe",
        text: "PlaylistPersonalDummyPage_text__ci30d",
      };
    },
    17796: function (e) {
      e.exports = {
        root: "PostPage_root__Orhf7",
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        scrollContainer: "PostPage_scrollContainer__zrIrH",
        important: "PostPage_important__qUlED",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    53144: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    58632: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    25296: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    87200: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    1096: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    83309: function (e) {
      e.exports = {
        root: "BrowserUpdateNotification_root__IN495",
        important: "BrowserUpdateNotification_important__6k4Gb",
      };
    },
    37908: function (e, t, a) {
      "use strict";
      var i, r, n, s;
      a.d(t, {
        c: function () {
          return r;
        },
        f: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).ALBUM = "album"),
        (n.PLAYLIST = "playlist"),
        (n.ALBUM_CHART_ITEM = "album-chart-item"),
        (n.BOOKMATE_BANNER_ENTITY = "bookmate-banner-entity"),
        ((s = r || (r = {})).ALBUM_CHART = "album-chart"),
        (s.EDITORIAL_PLAYLISTS = "editorial-playlists"),
        (s.CATEGORY = "category"),
        (s.BOOKMATE_BANNER = "bookmate-banner");
    },
    5831: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        F: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).EXPLICIT = "explicit"),
        (r.CLEAN = "clean");
    },
    24471: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        A: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).ASC = "asc"),
        (r.DESC = "desc");
    },
    19522: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        e: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).MODAL = "modal"),
        (r.FOREIGN_AGENT = "foreignAgent"),
        (r.INFORMATIONAL = "informational"),
        (r.AGE_18 = "age18"),
        (r.EXPLICIT = "explicit"),
        (r.DESCRIPTION_TEXT = "descriptionText"),
        (r.AGE_18_ICON = "age18Icon"),
        (r.EXPLICIT_ICON = "explicitIcon"),
        (r.EXCLAMATION_ICON = "exclamationIcon");
    },
    73458: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).ALBUMS = "albums"),
        (r.ARTISTS = "artists"),
        (r.PLAYLISTS = "playlists");
    },
    27257: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return r;
        },
      });
      var i = a(10420);
      function r(e) {
        return (null == e ? void 0 : e.data.type) === i.A.SmartPreview;
      }
    },
    23879: function (e, t, a) {
      "use strict";
      a.d(t, {
        E: function () {
          return s;
        },
      });
      var i = a(31),
        r = a(27257),
        n = a(42982);
      function s(e) {
        let { productQuality: t, entities: a, entity: s } = e,
          o = !1;
        if ((a && (o = a.some((e) => (0, r.Y)(e))), s && (o = (0, r.Y)(s)), o))
          return i.n.SMART_PREVIEW;
        switch (t) {
          case n.n.HIGH_QUALITY:
            return i.n.LOSSLESS;
          case n.n.BALANCED:
            return i.n.NQ;
          case n.n.EFFICIENT:
            return i.n.LQ;
          case n.n.PREVIEW:
            return i.n.PREVIEW;
          default:
            return i.n.NQ;
        }
      }
    },
  },
]);
