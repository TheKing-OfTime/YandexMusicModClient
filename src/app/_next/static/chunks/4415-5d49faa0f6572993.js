(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4415],
  {
    13440: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return u;
        },
      });
      var r,
        i,
        a = n(98639);
      e = n.hmd(e);
      var o = {
          5881: (e, t, n) => {
            function r() {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                      else for (n in t) t[n] && (i && (i += " "), (i += n));
                    }
                    return i;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            }
            n.r(t), n.d(t, { clsx: () => r, default: () => i });
            let i = r;
          },
          6656: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              root: "PzExxZyv4RIyE5x05O2e",
              scrollbar: "HrajLiFCmkwr5XWx3lDs",
              container: "UN3lSqD3D1bUxZwaKgss",
              container_scrollbarDragging: "L9K1Rj7_f4y3Ldr9Yvjh",
            };
          },
          2944: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            let r = {
              thumb: "DTig8GoGQKeHYFPTWGE4",
              root_visible: "G2ZpyiPnh6Ex9X0hZkhc",
              root_dragging: "FhA44LYlclzsMiHS2RNV",
              root: "R82T6DkaZ0LqUcIf5cQQ",
            };
          },
          6161: (e, t, n) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(810),
              i = Symbol.for("react.element"),
              a = Symbol.for("react.fragment"),
              o = Object.prototype.hasOwnProperty,
              s =
                r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, n) {
              var r,
                a = {},
                c = null,
                u = null;
              for (r in (void 0 !== n && (c = "" + n),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (u = t.ref),
              t))
                o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
              if (e && e.defaultProps)
                for (r in (t = e.defaultProps))
                  void 0 === a[r] && (a[r] = t[r]);
              return {
                $$typeof: i,
                type: e,
                key: c,
                ref: u,
                props: a,
                _owner: s.current,
              };
            }
            (t.Fragment = a), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, n) => {
            e.exports = n(6161);
          },
          9110: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle =
                t.useResize =
                t.useIsomorphicEffect =
                t.useElementOffsetY =
                t.getElementNameByDataAttribute =
                t.createIntersectionObserver =
                t.useIntersectionObserver =
                t.useKeyboardNavigation =
                t.useScroll =
                t.useForwardRef =
                  void 0);
            var r = n(245);
            Object.defineProperty(t, "useForwardRef", {
              enumerable: !0,
              get: function () {
                return r.useForwardRef;
              },
            });
            var i = n(2067);
            Object.defineProperty(t, "useScroll", {
              enumerable: !0,
              get: function () {
                return i.useScroll;
              },
            });
            var a = n(5188);
            Object.defineProperty(t, "useKeyboardNavigation", {
              enumerable: !0,
              get: function () {
                return a.useKeyboardNavigation;
              },
            });
            var o = n(5663);
            Object.defineProperty(t, "useIntersectionObserver", {
              enumerable: !0,
              get: function () {
                return o.useIntersectionObserver;
              },
            }),
              Object.defineProperty(t, "createIntersectionObserver", {
                enumerable: !0,
                get: function () {
                  return o.createIntersectionObserver;
                },
              }),
              Object.defineProperty(t, "getElementNameByDataAttribute", {
                enumerable: !0,
                get: function () {
                  return o.getElementNameByDataAttribute;
                },
              });
            var s = n(2101);
            Object.defineProperty(t, "useElementOffsetY", {
              enumerable: !0,
              get: function () {
                return s.useElementOffsetY;
              },
            });
            var l = n(9019);
            Object.defineProperty(t, "useIsomorphicEffect", {
              enumerable: !0,
              get: function () {
                return l.useIsomorphicEffect;
              },
            });
            var c = n(2947);
            Object.defineProperty(t, "useResize", {
              enumerable: !0,
              get: function () {
                return c.useResize;
              },
            });
            var u = n(6699);
            Object.defineProperty(t, "useDebouncedToggle", {
              enumerable: !0,
              get: function () {
                return u.useDebouncedToggle;
              },
            });
          },
          6699: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let r = n(1075),
              i = n(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: n, throttleTimeout: a } = e,
                o = (0, i.useRef)(null),
                [s, l] = (0, i.useState)(!!n),
                c = (0, i.useMemo)(
                  () =>
                    (0, r.throttle)(() => {
                      l(!n),
                        o.current && window.clearTimeout(o.current),
                        (o.current = window.setTimeout(() => {
                          l(!!n);
                        }, t));
                    }, a),
                  [t, n, a],
                ),
                u = (0, i.useCallback)(() => {
                  l(!!n), o.current && window.clearTimeout(o.current);
                }, [n]);
              return (
                (0, i.useEffect)(
                  () => () => {
                    o.current && window.clearTimeout(o.current);
                  },
                  [],
                ),
                { state: s, handleDebouncedToggle: c, reset: u }
              );
            };
          },
          2101: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useElementOffsetY = void 0);
            let r = n(810),
              i = n(2067);
            t.useElementOffsetY = (e) => {
              let t = (0, r.useRef)(null),
                [n, a] = (0, r.useState)(),
                o = (0, r.useCallback)(() => {
                  var e;
                  let n =
                    null === (e = t.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect();
                  n && a(n.y);
                }, []);
              return (
                (0, r.useLayoutEffect)(o),
                (0, i.useScroll)({ onScroll: o, elementRef: e }),
                { ref: t, offsetY: n }
              );
            };
          },
          245: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForwardRef = void 0);
            let r = n(810);
            t.useForwardRef = function (e, t) {
              let n = (0, r.useRef)(t);
              return (
                (0, r.useEffect)(() => {
                  e &&
                    ("function" == typeof e
                      ? e(n.current)
                      : (e.current = n.current));
                }, [e]),
                n
              );
            };
          },
          5663: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let r = n(810),
              { innerWidth: i = 0, innerHeight: a = 0 } = window;
            function o(e) {
              let {
                top: t,
                right: n,
                bottom: r,
                left: o,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= a) || (r >= 0 && r <= a)) &&
                ((o >= 0 && o <= i) || (n >= 0 && n <= i))
              );
            }
            function s(e) {
              var t, n;
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (n =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, r)) && void 0 !== n
                ? n
                : e.attributes[0];
            }
            function l(e, t) {
              let n = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  e(t, n);
                });
              }, t);
              return n;
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = o),
              (t.getElementNameByDataAttribute = s),
              (t.createIntersectionObserver = l),
              (t.useIntersectionObserver = function (e, n, i) {
                let [
                    { freezeOnceVisible: a, preflightCheck: c, ...u },
                    d = !1,
                  ] =
                    "boolean" == typeof n || void 0 === n
                      ? [t.defaultOptions, n]
                      : [{ ...t.defaultOptions, ...n }, i],
                  [f, p] = (0, r.useState)({}),
                  v = (0, r.useMemo)(
                    () =>
                      d
                        ? null
                        : l((e) => {
                            let t = s(e.target);
                            t &&
                              v &&
                              (e.isIntersecting
                                ? p((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !0 },
                                  }))
                                : p((e) => ({
                                    ...e,
                                    [t]: { isIntersecting: !1 },
                                  })),
                              a &&
                                v &&
                                e.isIntersecting &&
                                v.unobserve(e.target));
                          }, u),
                    [d],
                  );
                return (
                  (0, r.useLayoutEffect)(
                    () => (
                      v &&
                        !d &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (c && (t = o(e.current))) {
                              let t = s(e.current);
                              p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || v.observe(e.current);
                          }
                        }),
                      () => {
                        v && v.disconnect();
                      }
                    ),
                    [d, v],
                  ),
                  f
                );
              });
          },
          9019: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIsomorphicEffect = void 0);
            let r = n(810);
            t.useIsomorphicEffect =
              "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
          },
          5188: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useKeyboardNavigation = void 0);
            let r = n(810);
            function i(e, t) {
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
                  navigationItemsSelector: n,
                  activeAttributeName: a = "aria-selected",
                } = t,
                o = (0, r.useCallback)(
                  (t) => {
                    let r = i(e, n);
                    if (!r.length) return;
                    let a = t.target,
                      o = r.indexOf(a);
                    if (-1 === o) return;
                    let [s] = r,
                      l = r.at(-1),
                      c = null;
                    switch (t.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        c = r[o - 1] || l;
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        c = r[o + 1] || s;
                        break;
                      case "Home":
                        c = s;
                        break;
                      case "End":
                        c = l;
                    }
                    null !== c && (c.focus(), t.preventDefault());
                  },
                  [n, e],
                );
              (0, r.useEffect)(() => {
                let t = e.current;
                return (
                  null == t || t.addEventListener("keydown", o),
                  () =>
                    null == t ? void 0 : t.removeEventListener("keydown", o)
                );
              }, [e, o]),
                (0, r.useEffect)(() => {
                  i(e, n).forEach((e) => {
                    e.hasAttribute(a) &&
                      ("true" === e.getAttribute(a)
                        ? (e.tabIndex = 0)
                        : (e.tabIndex = -1));
                  });
                });
            };
          },
          2947: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useResize = void 0);
            let r = n(810),
              i = n(361);
            t.useResize = (e, t) => {
              (0, r.useEffect)(() => {
                let n = (0, i.getElementFromRefOrElement)(t);
                if (null === n) return;
                let r = null != n ? n : document.documentElement,
                  a = new ResizeObserver(e);
                return a.observe(r), () => a.disconnect();
              }, [t, e]);
            };
          },
          2067: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let r = n(810),
              i = n(361),
              a = n(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: n, elementRef: o } = e,
                { state: s, handleDebouncedToggle: l } = (0,
                a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                c = (0, r.useCallback)(() => {
                  n && l(), null == t || t();
                }, [n, l, t]);
              return (
                (0, r.useEffect)(() => {
                  let e = (0, i.getElementFromRefOrElement)(o);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    n = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", c, n),
                    () => t.removeEventListener("scroll", c, n)
                  );
                }, [o, c]),
                s
              );
            };
          },
          4601: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useToggle = void 0);
            let r = n(810);
            t.useToggle = (e) => {
              let [t, n] = (0, r.useState)(e),
                i = (0, r.useCallback)(() => {
                  n((e) => !e);
                }, []),
                a = (0, r.useCallback)(() => {
                  n(!0);
                }, []),
                o = (0, r.useCallback)(() => {
                  n(!1);
                }, []);
              return {
                state: t,
                toggle: i,
                setState: n,
                toggleTrue: a,
                toggleFalse: o,
              };
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
          8583: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.OverlayScroll = void 0);
            let i = n(9541),
              a = n(5881),
              o = n(810),
              s = n(9110),
              l = n(4601),
              c = n(7534),
              u = n(7758),
              d = r(n(6656)),
              f = (e) => {
                let {
                    children: t,
                    className: n,
                    forwardRef: r,
                    scrollableContainerRef: f,
                    ...p
                  } = e,
                  {
                    state: v,
                    toggleTrue: h,
                    toggleFalse: _,
                  } = (0, l.useToggle)(!1),
                  m = (0, s.useForwardRef)(f, null),
                  g = (0, o.useRef)(null),
                  {
                    relativeScrollState: b,
                    scrollToRelative: y,
                    handleWheelEvent: x,
                    isScrolling: j,
                  } = (0, c.useScrollableContainer)({
                    containerRef: m,
                    contentRef: g,
                  });
                return (0, i.jsxs)("div", {
                  className: (0, a.clsx)(d.default.root, n),
                  ref: r,
                  ...p,
                  children: [
                    (0, i.jsx)("div", {
                      className: (0, a.clsx)(d.default.container, {
                        [d.default.container_scrollbarDragging]: v,
                      }),
                      ref: m,
                      children: (0, i.jsx)("div", { ref: g, children: t }),
                    }),
                    (0, i.jsx)(u.OverlayScrollbar, {
                      className: d.default.scrollbar,
                      relativeScrollState: b,
                      isVisible: j,
                      onMove: y,
                      onWheel: x,
                      onDragStart: h,
                      onDragEnd: _,
                    }),
                  ],
                });
              };
            t.OverlayScroll = (0, o.forwardRef)((e, t) =>
              (0, i.jsx)(f, { forwardRef: t, ...e }),
            );
          },
          7758: function (e, t, n) {
            var r =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.OverlayScrollbar = void 0);
            let i = n(9541),
              a = n(5881),
              o = n(810),
              s = n(4601),
              l = n(1956),
              c = n(7396),
              u = r(n(2944));
            t.OverlayScrollbar = (e) => {
              let {
                  className: t,
                  relativeScrollState: n,
                  isVisible: r = !0,
                  onMove: d,
                  onWheel: f,
                  onDragStart: p,
                  onDragEnd: v,
                } = e,
                h = (0, o.useRef)(null),
                _ = (0, o.useRef)(0),
                m = (0, o.useRef)(0),
                [g, b] = (0, o.useState)(0),
                [y, x] = (0, o.useState)(0),
                {
                  state: j,
                  toggleTrue: C,
                  toggleFalse: w,
                } = (0, s.useToggle)(!1),
                { scrollValue: k, clientAndScrollRatio: S } = n,
                E = (0, o.useCallback)(() => {
                  if (!h.current) return 0;
                  let e = h.current.clientHeight * S,
                    t = Number.parseInt(
                      getComputedStyle(h.current).getPropertyValue(
                        "--scrollbar-overlay-thumb-min-size",
                      ),
                      10,
                    );
                  return e < t ? t : e;
                }, [S]),
                N = (0, o.useCallback)(
                  () => (h.current ? (h.current.clientHeight - g) * k : 0),
                  [g, k],
                ),
                A = (0, o.useCallback)(
                  (e) => {
                    if (!h.current || "number" != typeof _.current) return 0;
                    let t =
                      (_.current + e.clientY - m.current) /
                      (h.current.clientHeight - E());
                    return t < 0 ? 0 : t > 1 ? 1 : t;
                  },
                  [E],
                );
              (0, o.useEffect)(() => {
                h.current && b(E());
              }, [E, b]),
                (0, o.useEffect)(() => {
                  h.current && x(N());
                }, [N, x]);
              let O = (0, o.useCallback)(
                  (e) => {
                    null == p || p(),
                      (_.current = N()),
                      (m.current = e.clientY),
                      C();
                  },
                  [p, N, C],
                ),
                M = (0, o.useCallback)(
                  (e) => {
                    e.preventDefault(), d(A(e));
                  },
                  [A, d],
                ),
                R = (0, o.useCallback)(() => {
                  null == v || v(), w();
                }, [v, w]);
              return (
                (0, l.useDragElement)(h, { onStart: O, onDrag: M, onEnd: R }),
                (0, c.useScrollbarWheel)(h, f),
                (0, i.jsx)("div", {
                  className: (0, a.clsx)(
                    u.default.root,
                    {
                      [u.default.root_visible]: r,
                      [u.default.root_dragging]: j,
                    },
                    t,
                  ),
                  style: {
                    "--scrollbar-overlay-thumb-size": "".concat(g, "px"),
                    "--scrollbar-overlay-thumb-offset": "".concat(y, "px"),
                  },
                  ref: h,
                  children: (0, i.jsx)("div", { className: u.default.thumb }),
                })
              );
            };
          },
          1956: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDragElement = void 0);
            let r = n(810);
            t.useDragElement = (e, t) => {
              let { onStart: n, onDrag: i, onEnd: a } = t,
                o = (0, r.useCallback)(
                  (e) => {
                    document.removeEventListener("mousemove", i),
                      document.removeEventListener("mouseup", o),
                      null == a || a(e);
                  },
                  [i, a],
                ),
                s = (0, r.useCallback)(
                  (e) => {
                    document.addEventListener("mousemove", i),
                      document.addEventListener("mouseup", o),
                      null == n || n(e);
                  },
                  [n, i, o],
                );
              (0, r.useEffect)(() => {
                let t = e.current;
                if (t)
                  return (
                    t.addEventListener("mousedown", s),
                    () => {
                      t.removeEventListener("mousedown", s);
                    }
                  );
              }, [e, s]);
            };
          },
          7534: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScrollableContainer = void 0);
            let r = n(1075),
              i = n(810),
              a = n(9110),
              o = (e, t) => (e.scrollHeight - e.clientHeight) * t,
              s = (e) => e.clientHeight / e.scrollHeight,
              l = (e) => e.scrollTop / (e.scrollHeight - e.clientHeight || 1);
            t.useScrollableContainer = (e) => {
              let { containerRef: t, contentRef: n } = e,
                [c, u] = (0, i.useState)({
                  scrollValue: 0,
                  clientAndScrollRatio: 1,
                }),
                d = (0, i.useCallback)(() => {
                  let e = t.current;
                  if (!e) return;
                  let n = l(e),
                    r = s(e);
                  u((e) =>
                    n === e.scrollValue && r === e.clientAndScrollRatio
                      ? e
                      : { scrollValue: n, clientAndScrollRatio: r },
                  );
                }, [t, u]),
                f = (0, i.useMemo)(() => (0, r.throttle)(d, 100), [d]),
                p = (0, i.useCallback)(
                  (e) => {
                    let n = t.current;
                    if (!n) return;
                    let r = o(n, e);
                    n.scrollTo({ top: r, behavior: "instant" });
                  },
                  [t],
                ),
                v = (0, i.useCallback)(
                  (e) => {
                    var n;
                    e.preventDefault(),
                      null === (n = t.current) ||
                        void 0 === n ||
                        n.scrollBy({ top: e.deltaY, behavior: "instant" });
                  },
                  [t],
                );
              return (
                (0, a.useResize)(f, t),
                (0, a.useResize)(f, n),
                {
                  relativeScrollState: c,
                  scrollToRelative: p,
                  handleWheelEvent: v,
                  isScrolling: (0, a.useScroll)({
                    onScroll: d,
                    elementRef: t,
                    listenIsScrolling: !0,
                  }),
                }
              );
            };
          },
          7396: (e, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScrollbarWheel = void 0);
            let r = n(810);
            t.useScrollbarWheel = (e, t) => {
              (0, r.useEffect)(() => {
                let n = e.current;
                return (
                  null == n || n.addEventListener("wheel", t),
                  () => (null == n ? void 0 : n.removeEventListener("wheel", t))
                );
              }, [e, t]);
            };
          },
          810: (e) => {
            e.exports = i || (i = n.t(a, 2));
          },
          1075: (t, r, i) => {
            i.r(r),
              i.d(r, {
                add: () => R,
                after: () => q,
                ary: () => ta,
                assign: () => tq,
                assignIn: () => tQ,
                assignInWith: () => tJ,
                assignWith: () => t0,
                at: () => nC,
                attempt: () => nM,
                before: () => nR,
                bind: () => nL,
                bindAll: () => nI,
                bindKey: () => nP,
                camelCase: () => rC,
                capitalize: () => n1,
                castArray: () => rw,
                ceil: () => rN,
                chain: () => rA,
                chunk: () => rR,
                clamp: () => rL,
                clone: () => ik,
                cloneDeep: () => iS,
                cloneDeepWith: () => iE,
                cloneWith: () => iN,
                commit: () => iA,
                compact: () => iO,
                concat: () => iM,
                cond: () => i5,
                conforms: () => ae,
                conformsTo: () => at,
                constant: () => eU,
                countBy: () => ad,
                create: () => af,
                curry: () => av,
                curryRight: () => a_,
                debounce: () => ay,
                deburr: () => n5,
                default: () => dX,
                defaultTo: () => ax,
                defaults: () => aw,
                defaultsDeep: () => aT,
                defer: () => aI,
                delay: () => aB,
                difference: () => az,
                differenceBy: () => aV,
                differenceWith: () => aU,
                divide: () => aW,
                drop: () => aZ,
                dropRight: () => aH,
                dropRightWhile: () => aq,
                dropWhile: () => aY,
                each: () => a$,
                eachRight: () => a1,
                endsWith: () => a3,
                entries: () => a6,
                entriesIn: () => a9,
                eq: () => ts,
                escape: () => oe,
                escapeRegExp: () => or,
                every: () => oo,
                extend: () => tQ,
                extendWith: () => tJ,
                fill: () => oc,
                filter: () => od,
                find: () => oh,
                findIndex: () => ov,
                findKey: () => om,
                findLast: () => ox,
                findLastIndex: () => oy,
                findLastKey: () => oj,
                first: () => oC,
                flatMap: () => oS,
                flatMapDeep: () => oN,
                flatMapDepth: () => oA,
                flatten: () => nx,
                flattenDeep: () => oM,
                flattenDepth: () => oR,
                flip: () => oT,
                floor: () => oL,
                flow: () => oB,
                flowRight: () => oP,
                forEach: () => a$,
                forEachRight: () => a1,
                forIn: () => oD,
                forInRight: () => oz,
                forOwn: () => oF,
                forOwnRight: () => oV,
                fromPairs: () => oU,
                functions: () => oZ,
                functionsIn: () => oH,
                get: () => nh,
                groupBy: () => oq,
                gt: () => o$,
                gte: () => oX,
                has: () => o0,
                hasIn: () => i3,
                head: () => oC,
                identity: () => Y,
                inRange: () => o4,
                includes: () => o8,
                indexOf: () => se,
                initial: () => st,
                intersection: () => sa,
                intersectionBy: () => so,
                intersectionWith: () => ss,
                invert: () => su,
                invertBy: () => sv,
                invoke: () => sm,
                invokeMap: () => sg,
                isArguments: () => tk,
                isArray: () => S,
                isArrayBuffer: () => sy,
                isArrayLike: () => th,
                isArrayLikeObject: () => aS,
                isBoolean: () => sx,
                isBuffer: () => tO,
                isDate: () => sC,
                isElement: () => sw,
                isEmpty: () => sS,
                isEqual: () => sE,
                isEqualWith: () => sN,
                isError: () => nO,
                isFinite: () => sO,
                isFunction: () => K,
                isInteger: () => sM,
                isLength: () => tv,
                isMap: () => im,
                isMatch: () => sR,
                isMatchWith: () => sT,
                isNaN: () => sI,
                isNative: () => sP,
                isNil: () => sD,
                isNull: () => sz,
                isNumber: () => sL,
                isObject: () => P,
                isObjectLike: () => x,
                isPlainObject: () => nA,
                isRegExp: () => sV,
                isSafeInteger: () => sU,
                isSet: () => ib,
                isString: () => o2,
                isSymbol: () => j,
                isTypedArray: () => tD,
                isUndefined: () => sW,
                isWeakMap: () => sZ,
                isWeakSet: () => sH,
                iteratee: () => sG,
                join: () => sY,
                kebabCase: () => sK,
                keyBy: () => s$,
                keys: () => tH,
                keysIn: () => tX,
                last: () => aF,
                lastIndexOf: () => s0,
                lodash: () => eR,
                lowerCase: () => s1,
                lowerFirst: () => s3,
                lt: () => s2,
                lte: () => s6,
                map: () => ok,
                mapKeys: () => s9,
                mapValues: () => s5,
                matches: () => s8,
                matchesProperty: () => s7,
                max: () => lt,
                maxBy: () => ln,
                mean: () => lo,
                meanBy: () => ls,
                memoize: () => no,
                merge: () => ll,
                mergeWith: () => aR,
                method: () => lc,
                methodOf: () => lu,
                min: () => ld,
                minBy: () => lf,
                mixin: () => lp,
                multiply: () => lv,
                negate: () => lh,
                next: () => lb,
                noop: () => ej,
                now: () => am,
                nth: () => lx,
                nthArg: () => lj,
                omit: () => lk,
                omitBy: () => lA,
                once: () => lO,
                orderBy: () => lI,
                over: () => lP,
                overArgs: () => lz,
                overEvery: () => lF,
                overSome: () => lV,
                pad: () => l5,
                padEnd: () => l8,
                padStart: () => l7,
                parseInt: () => cn,
                partial: () => ci,
                partialRight: () => co,
                partition: () => cs,
                pick: () => cl,
                pickBy: () => lN,
                plant: () => cc,
                property: () => i6,
                propertyOf: () => cu,
                pull: () => ch,
                pullAll: () => cv,
                pullAllBy: () => c_,
                pullAllWith: () => cm,
                pullAt: () => cy,
                random: () => cE,
                range: () => cR,
                rangeRight: () => cT,
                rearg: () => cL,
                reduce: () => cB,
                reduceRight: () => cD,
                reject: () => cz,
                remove: () => cF,
                repeat: () => cV,
                replace: () => cU,
                rest: () => cW,
                result: () => cZ,
                reverse: () => cG,
                round: () => cq,
                sample: () => cK,
                sampleSize: () => cQ,
                set: () => cJ,
                setWith: () => c0,
                shuffle: () => c1,
                size: () => c3,
                slice: () => c4,
                snakeCase: () => c2,
                some: () => c9,
                sortBy: () => c5,
                sortedIndex: () => un,
                sortedIndexBy: () => ur,
                sortedIndexOf: () => ui,
                sortedLastIndex: () => ua,
                sortedLastIndexBy: () => uo,
                sortedLastIndexOf: () => us,
                sortedUniq: () => uc,
                sortedUniqBy: () => uu,
                split: () => ud,
                spread: () => up,
                startCase: () => uv,
                startsWith: () => uh,
                stubArray: () => rW,
                stubFalse: () => tS,
                stubObject: () => u_,
                stubString: () => um,
                stubTrue: () => ug,
                subtract: () => ub,
                sum: () => uy,
                sumBy: () => ux,
                tail: () => uj,
                take: () => uC,
                takeRight: () => uw,
                takeRightWhile: () => uk,
                takeWhile: () => uS,
                tap: () => uE,
                template: () => uW,
                templateSettings: () => uL,
                throttle: () => uZ,
                thru: () => uH,
                times: () => uq,
                toArray: () => lg,
                toFinite: () => H,
                toInteger: () => G,
                toIterator: () => uY,
                toJSON: () => u$,
                toLength: () => os,
                toLower: () => uX,
                toNumber: () => W,
                toPairs: () => a6,
                toPairsIn: () => a9,
                toPath: () => uQ,
                toPlainObject: () => aN,
                toSafeInteger: () => uJ,
                toString: () => nu,
                toUpper: () => u0,
                transform: () => u1,
                trim: () => u2,
                trimEnd: () => u6,
                trimStart: () => u5,
                truncate: () => u7,
                unary: () => de,
                unescape: () => di,
                union: () => dl,
                unionBy: () => dc,
                unionWith: () => du,
                uniq: () => dd,
                uniqBy: () => df,
                uniqWith: () => dp,
                uniqueId: () => dh,
                unset: () => d_,
                unzip: () => dg,
                unzipWith: () => db,
                update: () => dx,
                updateWith: () => dj,
                upperCase: () => dC,
                upperFirst: () => n0,
                value: () => u$,
                valueOf: () => u$,
                values: () => o9,
                valuesIn: () => dw,
                without: () => dk,
                words: () => ry,
                wrap: () => dS,
                wrapperAt: () => dE,
                wrapperChain: () => dN,
                wrapperCommit: () => iA,
                wrapperLodash: () => eR,
                wrapperNext: () => lb,
                wrapperPlant: () => cc,
                wrapperReverse: () => dA,
                wrapperToIterator: () => uY,
                wrapperValue: () => u$,
                xor: () => dM,
                xorBy: () => dR,
                xorWith: () => dT,
                zip: () => dL,
                zipObject: () => dB,
                zipObjectDeep: () => dP,
                zipWith: () => dD,
              });
            var a,
              o,
              s,
              l,
              c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              u =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              d = c || u || Function("return this")(),
              f = d.Symbol,
              p = Object.prototype,
              v = p.hasOwnProperty,
              h = p.toString,
              _ = f ? f.toStringTag : void 0;
            let m = function (e) {
              var t = v.call(e, _),
                n = e[_];
              try {
                e[_] = void 0;
                var r = !0;
              } catch (e) {}
              var i = h.call(e);
              return r && (t ? (e[_] = n) : delete e[_]), i;
            };
            var g = Object.prototype.toString,
              b = f ? f.toStringTag : void 0;
            let y = function (e) {
                return null == e
                  ? void 0 === e
                    ? "[object Undefined]"
                    : "[object Null]"
                  : b && b in Object(e)
                    ? m(e)
                    : g.call(e);
              },
              x = function (e) {
                return null != e && "object" == typeof e;
              },
              j = function (e) {
                return (
                  "symbol" == typeof e || (x(e) && "[object Symbol]" == y(e))
                );
              };
            var C = 0 / 0;
            let w = function (e) {
                return "number" == typeof e ? e : j(e) ? C : +e;
              },
              k = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                  ++n < r;

                )
                  i[n] = t(e[n], n, e);
                return i;
              },
              S = Array.isArray;
            var E = 1 / 0,
              N = f ? f.prototype : void 0,
              A = N ? N.toString : void 0;
            let O = function e(t) {
                if ("string" == typeof t) return t;
                if (S(t)) return k(t, e) + "";
                if (j(t)) return A ? A.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -E ? "-0" : n;
              },
              M = function (e, t) {
                return function (n, r) {
                  var i;
                  if (void 0 === n && void 0 === r) return t;
                  if ((void 0 !== n && (i = n), void 0 !== r)) {
                    if (void 0 === i) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = O(n)), (r = O(r)))
                      : ((n = w(n)), (r = w(r))),
                      (i = e(n, r));
                  }
                  return i;
                };
              },
              R = M(function (e, t) {
                return e + t;
              }, 0);
            var T = /\s/;
            let L = function (e) {
              for (var t = e.length; t-- && T.test(e.charAt(t)); );
              return t;
            };
            var I = /^\s+/;
            let B = function (e) {
                return e ? e.slice(0, L(e) + 1).replace(I, "") : e;
              },
              P = function (e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              };
            var D = 0 / 0,
              z = /^[-+]0x[0-9a-f]+$/i,
              F = /^0b[01]+$/i,
              V = /^0o[0-7]+$/i,
              U = parseInt;
            let W = function (e) {
              if ("number" == typeof e) return e;
              if (j(e)) return D;
              if (P(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = P(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = B(e);
              var n = F.test(e);
              return n || V.test(e)
                ? U(e.slice(2), n ? 2 : 8)
                : z.test(e)
                  ? D
                  : +e;
            };
            var Z = 1 / 0;
            let H = function (e) {
                return e
                  ? (e = W(e)) === Z || e === -Z
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                      ? e
                      : 0
                  : 0 === e
                    ? e
                    : 0;
              },
              G = function (e) {
                var t = H(e),
                  n = t % 1;
                return t == t ? (n ? t - n : t) : 0;
              },
              q = function (e, t) {
                if ("function" != typeof t)
                  throw TypeError("Expected a function");
                return (
                  (e = G(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              },
              Y = function (e) {
                return e;
              },
              K = function (e) {
                if (!P(e)) return !1;
                var t = y(e);
                return (
                  "[object Function]" == t ||
                  "[object GeneratorFunction]" == t ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              };
            var $ = d["__core-js_shared__"],
              X = (a = /[^.]+$/.exec(($ && $.keys && $.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + a
                : "",
              Q = Function.prototype.toString;
            let J = function (e) {
              if (null != e) {
                try {
                  return Q.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            };
            var ee = /^\[object .+?Constructor\]$/,
              et = Object.prototype,
              en = Function.prototype.toString,
              er = et.hasOwnProperty,
              ei = RegExp(
                "^" +
                  en
                    .call(er)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?",
                    ) +
                  "$",
              );
            let ea = function (e) {
                return (
                  !!P(e) && (!X || !(X in e)) && (K(e) ? ei : ee).test(J(e))
                );
              },
              eo = function (e, t) {
                var n = null == e ? void 0 : e[t];
                return ea(n) ? n : void 0;
              };
            var es = eo(d, "WeakMap"),
              el = es && new es(),
              ec = el
                ? function (e, t) {
                    return el.set(e, t), e;
                  }
                : Y,
              eu = Object.create,
              ed = (function () {
                function e() {}
                return function (t) {
                  if (!P(t)) return {};
                  if (eu) return eu(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = void 0), n;
                };
              })();
            let ef = function (e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var n = ed(e.prototype),
                    r = e.apply(n, t);
                  return P(r) ? r : n;
                };
              },
              ep = function (e, t, n) {
                var r = 1 & t,
                  i = ef(e);
                return function t() {
                  return (
                    this && this !== d && this instanceof t ? i : e
                  ).apply(r ? n : this, arguments);
                };
              },
              ev = function (e, t, n) {
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, n[0]);
                  case 2:
                    return e.call(t, n[0], n[1]);
                  case 3:
                    return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
              };
            var eh = Math.max;
            let e_ = function (e, t, n, r) {
              for (
                var i = -1,
                  a = e.length,
                  o = n.length,
                  s = -1,
                  l = t.length,
                  c = eh(a - o, 0),
                  u = Array(l + c),
                  d = !r;
                ++s < l;

              )
                u[s] = t[s];
              for (; ++i < o; ) (d || i < a) && (u[n[i]] = e[i]);
              for (; c--; ) u[s++] = e[i++];
              return u;
            };
            var em = Math.max;
            let eg = function (e, t, n, r) {
                for (
                  var i = -1,
                    a = e.length,
                    o = -1,
                    s = n.length,
                    l = -1,
                    c = t.length,
                    u = em(a - s, 0),
                    d = Array(u + c),
                    f = !r;
                  ++i < u;

                )
                  d[i] = e[i];
                for (var p = i; ++l < c; ) d[p + l] = t[l];
                for (; ++o < s; ) (f || i < a) && (d[p + n[o]] = e[i++]);
                return d;
              },
              eb = function (e, t) {
                for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                return r;
              },
              ey = function () {};
            function ex(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = 4294967295),
                (this.__views__ = []);
            }
            (ex.prototype = ed(ey.prototype)), (ex.prototype.constructor = ex);
            let ej = function () {};
            var eC = el
              ? function (e) {
                  return el.get(e);
                }
              : ej;
            let ew = {};
            var ek = Object.prototype.hasOwnProperty;
            let eS = function (e) {
              for (
                var t = e.name + "",
                  n = ew[t],
                  r = ek.call(ew, t) ? n.length : 0;
                r--;

              ) {
                var i = n[r],
                  a = i.func;
                if (null == a || a == e) return i.name;
              }
              return t;
            };
            function eE(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = void 0);
            }
            (eE.prototype = ed(ey.prototype)), (eE.prototype.constructor = eE);
            let eN = function (e, t) {
                var n = -1,
                  r = e.length;
                for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
                return t;
              },
              eA = function (e) {
                if (e instanceof ex) return e.clone();
                var t = new eE(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = eN(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              };
            var eO = Object.prototype.hasOwnProperty;
            function eM(e) {
              if (x(e) && !S(e) && !(e instanceof ex)) {
                if (e instanceof eE) return e;
                if (eO.call(e, "__wrapped__")) return eA(e);
              }
              return new eE(e);
            }
            (eM.prototype = ey.prototype), (eM.prototype.constructor = eM);
            let eR = eM,
              eT = function (e) {
                var t = eS(e),
                  n = eR[t];
                if ("function" != typeof n || !(t in ex.prototype)) return !1;
                if (e === n) return !0;
                var r = eC(n);
                return !!r && e === r[0];
              };
            var eL = Date.now;
            let eI = function (e) {
              var t = 0,
                n = 0;
              return function () {
                var r = eL(),
                  i = 16 - (r - n);
                if (((n = r), i > 0)) {
                  if (++t >= 800) return arguments[0];
                } else t = 0;
                return e.apply(void 0, arguments);
              };
            };
            var eB = eI(ec),
              eP = /\{\n\/\* \[wrapped with (.+)\] \*/,
              eD = /,? & /;
            let ez = function (e) {
              var t = e.match(eP);
              return t ? t[1].split(eD) : [];
            };
            var eF = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            let eV = function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(eF, "{\n/* [wrapped with " + t + "] */\n")
                );
              },
              eU = function (e) {
                return function () {
                  return e;
                };
              };
            var eW = (function () {
                try {
                  var e = eo(Object, "defineProperty");
                  return e({}, "", {}), e;
                } catch (e) {}
              })(),
              eZ = eI(
                eW
                  ? function (e, t) {
                      return eW(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: eU(t),
                        writable: !0,
                      });
                    }
                  : Y,
              );
            let eH = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length;
                  ++n < r && !1 !== t(e[n], n, e);

                );
                return e;
              },
              eG = function (e, t, n, r) {
                for (
                  var i = e.length, a = n + (r ? 1 : -1);
                  r ? a-- : ++a < i;

                )
                  if (t(e[a], a, e)) return a;
                return -1;
              },
              eq = function (e) {
                return e != e;
              },
              eY = function (e, t, n) {
                for (var r = n - 1, i = e.length; ++r < i; )
                  if (e[r] === t) return r;
                return -1;
              },
              eK = function (e, t, n) {
                return t == t ? eY(e, t, n) : eG(e, eq, n);
              },
              e$ = function (e, t) {
                return !!(null == e ? 0 : e.length) && eK(e, t, 0) > -1;
              };
            var eX = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ];
            let eQ = function (e, t, n) {
                var r,
                  i = t + "";
                return eZ(
                  e,
                  eV(
                    i,
                    ((r = ez(i)),
                    eH(eX, function (e) {
                      var t = "_." + e[0];
                      n & e[1] && !e$(r, t) && r.push(t);
                    }),
                    r.sort()),
                  ),
                );
              },
              eJ = function (e, t, n, r, i, a, o, s, l, c) {
                var u = 8 & t;
                (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                var d = [
                    e,
                    t,
                    i,
                    u ? a : void 0,
                    u ? o : void 0,
                    u ? void 0 : a,
                    u ? void 0 : o,
                    s,
                    l,
                    c,
                  ],
                  f = n.apply(void 0, d);
                return eT(e) && eB(f, d), (f.placeholder = r), eQ(f, e, t);
              },
              e0 = function (e) {
                return e.placeholder;
              };
            var e1 = /^(?:0|[1-9]\d*)$/;
            let e3 = function (e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == n || ("symbol" != n && e1.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            };
            var e4 = Math.min;
            let e2 = function (e, t) {
              for (var n = e.length, r = e4(t.length, n), i = eN(e); r--; ) {
                var a = t[r];
                e[r] = e3(a, n) ? i[a] : void 0;
              }
              return e;
            };
            var e6 = "__lodash_placeholder__";
            let e9 = function (e, t) {
                for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
                  var o = e[n];
                  (o === t || o === e6) && ((e[n] = e6), (a[i++] = n));
                }
                return a;
              },
              e5 = function e(t, n, r, i, a, o, s, l, c, u) {
                var f = 128 & n,
                  p = 1 & n,
                  v = 2 & n,
                  h = 24 & n,
                  _ = 512 & n,
                  m = v ? void 0 : ef(t);
                return function g() {
                  for (var b = arguments.length, y = Array(b), x = b; x--; )
                    y[x] = arguments[x];
                  if (h)
                    var j = e0(g),
                      C = eb(y, j);
                  if (
                    (i && (y = e_(y, i, a, h)),
                    o && (y = eg(y, o, s, h)),
                    (b -= C),
                    h && b < u)
                  ) {
                    var w = e9(y, j);
                    return eJ(t, n, e, g.placeholder, r, y, w, l, c, u - b);
                  }
                  var k = p ? r : this,
                    S = v ? k[t] : t;
                  return (
                    (b = y.length),
                    l ? (y = e2(y, l)) : _ && b > 1 && y.reverse(),
                    f && c < b && (y.length = c),
                    this && this !== d && this instanceof g && (S = m || ef(S)),
                    S.apply(k, y)
                  );
                };
              },
              e8 = function (e, t, n) {
                var r = ef(e);
                return function i() {
                  for (
                    var a = arguments.length, o = Array(a), s = a, l = e0(i);
                    s--;

                  )
                    o[s] = arguments[s];
                  var c = a < 3 && o[0] !== l && o[a - 1] !== l ? [] : e9(o, l);
                  return (a -= c.length) < n
                    ? eJ(
                        e,
                        t,
                        e5,
                        i.placeholder,
                        void 0,
                        o,
                        c,
                        void 0,
                        void 0,
                        n - a,
                      )
                    : ev(
                        this && this !== d && this instanceof i ? r : e,
                        this,
                        o,
                      );
                };
              },
              e7 = function (e, t, n, r) {
                var i = 1 & t,
                  a = ef(e);
                return function t() {
                  for (
                    var o = -1,
                      s = arguments.length,
                      l = -1,
                      c = r.length,
                      u = Array(c + s),
                      f = this && this !== d && this instanceof t ? a : e;
                    ++l < c;

                  )
                    u[l] = r[l];
                  for (; s--; ) u[l++] = arguments[++o];
                  return ev(f, i ? n : this, u);
                };
              };
            var te = "__lodash_placeholder__",
              tt = Math.min;
            let tn = function (e, t) {
              var n = e[1],
                r = t[1],
                i = n | r,
                a = i < 131,
                o =
                  (128 == r && 8 == n) ||
                  (128 == r && 256 == n && e[7].length <= t[8]) ||
                  (384 == r && t[7].length <= t[8] && 8 == n);
              if (!(a || o)) return e;
              1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
              var s = t[3];
              if (s) {
                var l = e[3];
                (e[3] = l ? e_(l, s, t[4]) : s),
                  (e[4] = l ? e9(e[3], te) : t[4]);
              }
              return (
                (s = t[5]) &&
                  ((l = e[5]),
                  (e[5] = l ? eg(l, s, t[6]) : s),
                  (e[6] = l ? e9(e[5], te) : t[6])),
                (s = t[7]) && (e[7] = s),
                128 & r && (e[8] = null == e[8] ? t[8] : tt(e[8], t[8])),
                null == e[9] && (e[9] = t[9]),
                (e[0] = t[0]),
                (e[1] = i),
                e
              );
            };
            var tr = Math.max;
            let ti = function (e, t, n, r, i, a, o, s) {
                var l = 2 & t;
                if (!l && "function" != typeof e)
                  throw TypeError("Expected a function");
                var c = r ? r.length : 0;
                if (
                  (c || ((t &= -97), (r = i = void 0)),
                  (o = void 0 === o ? o : tr(G(o), 0)),
                  (s = void 0 === s ? s : G(s)),
                  (c -= i ? i.length : 0),
                  64 & t)
                ) {
                  var u = r,
                    d = i;
                  r = i = void 0;
                }
                var f = l ? void 0 : eC(e),
                  p = [e, t, n, r, i, u, d, a, o, s];
                if (
                  (f && tn(p, f),
                  (e = p[0]),
                  (t = p[1]),
                  (n = p[2]),
                  (r = p[3]),
                  (i = p[4]),
                  (s = p[9] =
                    void 0 === p[9] ? (l ? 0 : e.length) : tr(p[9] - c, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  v =
                    8 == t || 16 == t
                      ? e8(e, t, s)
                      : (32 != t && 33 != t) || i.length
                        ? e5.apply(void 0, p)
                        : e7(e, t, n, r);
                else var v = ep(e, t, n);
                return eQ((f ? ec : eB)(v, p), e, t);
              },
              ta = function (e, t, n) {
                return (
                  (t = n ? void 0 : t),
                  (t = e && null == t ? e.length : t),
                  ti(e, 128, void 0, void 0, void 0, void 0, t)
                );
              },
              to = function (e, t, n) {
                "__proto__" == t && eW
                  ? eW(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n);
              },
              ts = function (e, t) {
                return e === t || (e != e && t != t);
              };
            var tl = Object.prototype.hasOwnProperty;
            let tc = function (e, t, n) {
                var r = e[t];
                (tl.call(e, t) && ts(r, n) && (void 0 !== n || t in e)) ||
                  to(e, t, n);
              },
              tu = function (e, t, n, r) {
                var i = !n;
                n || (n = {});
                for (var a = -1, o = t.length; ++a < o; ) {
                  var s = t[a],
                    l = r ? r(n[s], e[s], s, n, e) : void 0;
                  void 0 === l && (l = e[s]), i ? to(n, s, l) : tc(n, s, l);
                }
                return n;
              };
            var td = Math.max;
            let tf = function (e, t, n) {
                return (
                  (t = td(void 0 === t ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        i = -1,
                        a = td(r.length - t, 0),
                        o = Array(a);
                      ++i < a;

                    )
                      o[i] = r[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
                    return (s[t] = n(o)), ev(e, this, s);
                  }
                );
              },
              tp = function (e, t) {
                return eZ(tf(e, t, Y), e + "");
              },
              tv = function (e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              },
              th = function (e) {
                return null != e && tv(e.length) && !K(e);
              },
              t_ = function (e, t, n) {
                if (!P(n)) return !1;
                var r = typeof t;
                return (
                  ("number" == r
                    ? !!(th(n) && e3(t, n.length))
                    : "string" == r && t in n) && ts(n[t], e)
                );
              },
              tm = function (e) {
                return tp(function (t, n) {
                  var r = -1,
                    i = n.length,
                    a = i > 1 ? n[i - 1] : void 0,
                    o = i > 2 ? n[2] : void 0;
                  for (
                    a =
                      e.length > 3 && "function" == typeof a
                        ? (i--, a)
                        : void 0,
                      o &&
                        t_(n[0], n[1], o) &&
                        ((a = i < 3 ? void 0 : a), (i = 1)),
                      t = Object(t);
                    ++r < i;

                  ) {
                    var s = n[r];
                    s && e(t, s, r, a);
                  }
                  return t;
                });
              };
            var tg = Object.prototype;
            let tb = function (e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || tg);
              },
              ty = function (e, t) {
                for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                return r;
              },
              tx = function (e) {
                return x(e) && "[object Arguments]" == y(e);
              };
            var tj = Object.prototype,
              tC = tj.hasOwnProperty,
              tw = tj.propertyIsEnumerable;
            let tk = tx(
                (function () {
                  return arguments;
                })(),
              )
                ? tx
                : function (e) {
                    return (
                      x(e) && tC.call(e, "callee") && !tw.call(e, "callee")
                    );
                  },
              tS = function () {
                return !1;
              };
            var tE =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              tN = tE && e && !e.nodeType && e,
              tA = tN && tN.exports === tE ? d.Buffer : void 0;
            let tO = (tA ? tA.isBuffer : void 0) || tS;
            var tM = {};
            (tM["[object Float32Array]"] =
              tM["[object Float64Array]"] =
              tM["[object Int8Array]"] =
              tM["[object Int16Array]"] =
              tM["[object Int32Array]"] =
              tM["[object Uint8Array]"] =
              tM["[object Uint8ClampedArray]"] =
              tM["[object Uint16Array]"] =
              tM["[object Uint32Array]"] =
                !0),
              (tM["[object Arguments]"] =
                tM["[object Array]"] =
                tM["[object ArrayBuffer]"] =
                tM["[object Boolean]"] =
                tM["[object DataView]"] =
                tM["[object Date]"] =
                tM["[object Error]"] =
                tM["[object Function]"] =
                tM["[object Map]"] =
                tM["[object Number]"] =
                tM["[object Object]"] =
                tM["[object RegExp]"] =
                tM["[object Set]"] =
                tM["[object String]"] =
                tM["[object WeakMap]"] =
                  !1);
            let tR = function (e) {
              return function (t) {
                return e(t);
              };
            };
            var tT =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              tL = tT && e && !e.nodeType && e,
              tI = tL && tL.exports === tT && c.process,
              tB = (function () {
                try {
                  var e = tL && tL.require && tL.require("util").types;
                  if (e) return e;
                  return tI && tI.binding && tI.binding("util");
                } catch (e) {}
              })(),
              tP = tB && tB.isTypedArray;
            let tD = tP
              ? tR(tP)
              : function (e) {
                  return x(e) && tv(e.length) && !!tM[y(e)];
                };
            var tz = Object.prototype.hasOwnProperty;
            let tF = function (e, t) {
                var n = S(e),
                  r = !n && tk(e),
                  i = !n && !r && tO(e),
                  a = !n && !r && !i && tD(e),
                  o = n || r || i || a,
                  s = o ? ty(e.length, String) : [],
                  l = s.length;
                for (var c in e)
                  (t || tz.call(e, c)) &&
                    !(
                      o &&
                      ("length" == c ||
                        (i && ("offset" == c || "parent" == c)) ||
                        (a &&
                          ("buffer" == c ||
                            "byteLength" == c ||
                            "byteOffset" == c)) ||
                        e3(c, l))
                    ) &&
                    s.push(c);
                return s;
              },
              tV = function (e, t) {
                return function (n) {
                  return e(t(n));
                };
              };
            var tU = tV(Object.keys, Object),
              tW = Object.prototype.hasOwnProperty;
            let tZ = function (e) {
                if (!tb(e)) return tU(e);
                var t = [];
                for (var n in Object(e))
                  tW.call(e, n) && "constructor" != n && t.push(n);
                return t;
              },
              tH = function (e) {
                return th(e) ? tF(e) : tZ(e);
              };
            var tG = Object.prototype.hasOwnProperty;
            let tq = tm(function (e, t) {
                if (tb(t) || th(t)) {
                  tu(t, tH(t), e);
                  return;
                }
                for (var n in t) tG.call(t, n) && tc(e, n, t[n]);
              }),
              tY = function (e) {
                var t = [];
                if (null != e) for (var n in Object(e)) t.push(n);
                return t;
              };
            var tK = Object.prototype.hasOwnProperty;
            let t$ = function (e) {
                if (!P(e)) return tY(e);
                var t = tb(e),
                  n = [];
                for (var r in e)
                  ("constructor" == r && (t || !tK.call(e, r))) || n.push(r);
                return n;
              },
              tX = function (e) {
                return th(e) ? tF(e, !0) : t$(e);
              },
              tQ = tm(function (e, t) {
                tu(t, tX(t), e);
              }),
              tJ = tm(function (e, t, n, r) {
                tu(t, tX(t), e, r);
              }),
              t0 = tm(function (e, t, n, r) {
                tu(t, tH(t), e, r);
              });
            var t1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              t3 = /^\w*$/;
            let t4 = function (e, t) {
              if (S(e)) return !1;
              var n = typeof e;
              return (
                !!(
                  "number" == n ||
                  "symbol" == n ||
                  "boolean" == n ||
                  null == e ||
                  j(e)
                ) ||
                t3.test(e) ||
                !t1.test(e) ||
                (null != t && e in Object(t))
              );
            };
            var t2 = eo(Object, "create"),
              t6 = Object.prototype.hasOwnProperty,
              t9 = Object.prototype.hasOwnProperty;
            function t5(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            (t5.prototype.clear = function () {
              (this.__data__ = t2 ? t2(null) : {}), (this.size = 0);
            }),
              (t5.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (t5.prototype.get = function (e) {
                var t = this.__data__;
                if (t2) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return t6.call(t, e) ? t[e] : void 0;
              }),
              (t5.prototype.has = function (e) {
                var t = this.__data__;
                return t2 ? void 0 !== t[e] : t9.call(t, e);
              }),
              (t5.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = t2 && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              });
            let t8 = function (e, t) {
              for (var n = e.length; n--; ) if (ts(e[n][0], t)) return n;
              return -1;
            };
            var t7 = Array.prototype.splice;
            function ne(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            (ne.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
              (ne.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t8(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : t7.call(t, n, 1),
                  --this.size,
                  !0)
                );
              }),
              (ne.prototype.get = function (e) {
                var t = this.__data__,
                  n = t8(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (ne.prototype.has = function (e) {
                return t8(this.__data__, e) > -1;
              }),
              (ne.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = t8(n, e);
                return (
                  r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                );
              });
            var nt = eo(d, "Map");
            let nn = function (e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              },
              nr = function (e, t) {
                var n = e.__data__;
                return nn(t)
                  ? n["string" == typeof t ? "string" : "hash"]
                  : n.map;
              };
            function ni(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function na(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  i = t ? t.apply(this, r) : r[0],
                  a = n.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, r);
                return (n.cache = a.set(i, o) || a), o;
              };
              return (n.cache = new (na.Cache || ni)()), n;
            }
            (ni.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new t5(),
                  map: new (nt || ne)(),
                  string: new t5(),
                });
            }),
              (ni.prototype.delete = function (e) {
                var t = nr(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (ni.prototype.get = function (e) {
                return nr(this, e).get(e);
              }),
              (ni.prototype.has = function (e) {
                return nr(this, e).has(e);
              }),
              (ni.prototype.set = function (e, t) {
                var n = nr(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              }),
              (na.Cache = ni);
            let no = na;
            var ns =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              nl = /\\(\\)?/g,
              nc =
                ((s = (o = no(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(ns, function (e, n, r, i) {
                        t.push(r ? i.replace(nl, "$1") : n || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === s.size && s.clear(), e;
                  },
                )).cache),
                o);
            let nu = function (e) {
                return null == e ? "" : O(e);
              },
              nd = function (e, t) {
                return S(e) ? e : t4(e, t) ? [e] : nc(nu(e));
              };
            var nf = 1 / 0;
            let np = function (e) {
                if ("string" == typeof e || j(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -nf ? "-0" : t;
              },
              nv = function (e, t) {
                t = nd(t, e);
                for (var n = 0, r = t.length; null != e && n < r; )
                  e = e[np(t[n++])];
                return n && n == r ? e : void 0;
              },
              nh = function (e, t, n) {
                var r = null == e ? void 0 : nv(e, t);
                return void 0 === r ? n : r;
              },
              n_ = function (e, t) {
                for (
                  var n = -1, r = t.length, i = Array(r), a = null == e;
                  ++n < r;

                )
                  i[n] = a ? void 0 : nh(e, t[n]);
                return i;
              },
              nm = function (e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r; )
                  e[i + n] = t[n];
                return e;
              };
            var ng = f ? f.isConcatSpreadable : void 0;
            let nb = function (e) {
                return S(e) || tk(e) || !!(ng && e && e[ng]);
              },
              ny = function e(t, n, r, i, a) {
                var o = -1,
                  s = t.length;
                for (r || (r = nb), a || (a = []); ++o < s; ) {
                  var l = t[o];
                  n > 0 && r(l)
                    ? n > 1
                      ? e(l, n - 1, r, i, a)
                      : nm(a, l)
                    : i || (a[a.length] = l);
                }
                return a;
              },
              nx = function (e) {
                return (null == e ? 0 : e.length) ? ny(e, 1) : [];
              },
              nj = function (e) {
                return eZ(tf(e, void 0, nx), e + "");
              },
              nC = nj(n_);
            var nw = tV(Object.getPrototypeOf, Object),
              nk = Object.prototype,
              nS = Function.prototype.toString,
              nE = nk.hasOwnProperty,
              nN = nS.call(Object);
            let nA = function (e) {
                if (!x(e) || "[object Object]" != y(e)) return !1;
                var t = nw(e);
                if (null === t) return !0;
                var n = nE.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof n && n instanceof n && nS.call(n) == nN
                );
              },
              nO = function (e) {
                if (!x(e)) return !1;
                var t = y(e);
                return (
                  "[object Error]" == t ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !nA(e))
                );
              },
              nM = tp(function (e, t) {
                try {
                  return ev(e, void 0, t);
                } catch (e) {
                  return nO(e) ? e : Error(e);
                }
              }),
              nR = function (e, t) {
                var n;
                if ("function" != typeof t)
                  throw TypeError("Expected a function");
                return (
                  (e = G(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = void 0),
                      n
                    );
                  }
                );
              };
            var nT = tp(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var i = e9(n, e0(nT));
                r |= 32;
              }
              return ti(e, r, t, n, i);
            });
            nT.placeholder = {};
            let nL = nT,
              nI = nj(function (e, t) {
                return (
                  eH(t, function (t) {
                    to(e, (t = np(t)), nL(e[t], e));
                  }),
                  e
                );
              });
            var nB = tp(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var i = e9(n, e0(nB));
                r |= 32;
              }
              return ti(t, r, e, n, i);
            });
            nB.placeholder = {};
            let nP = nB,
              nD = function (e, t, n) {
                var r = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var a = Array(i); ++r < i; ) a[r] = e[r + t];
                return a;
              },
              nz = function (e, t, n) {
                var r = e.length;
                return (
                  (n = void 0 === n ? r : n), !t && n >= r ? e : nD(e, t, n)
                );
              };
            var nF = RegExp(
              "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
            );
            let nV = function (e) {
              return nF.test(e);
            };
            var nU = "\ud800-\udfff",
              nW = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              nZ = "\ud83c[\udffb-\udfff]",
              nH = "[^" + nU + "]",
              nG = "(?:\ud83c[\udde6-\uddff]){2}",
              nq = "[\ud800-\udbff][\udc00-\udfff]",
              nY = "(?:" + nW + "|" + nZ + ")?",
              nK = "[\\ufe0e\\ufe0f]?",
              n$ =
                "(?:\\u200d(?:" + [nH, nG, nq].join("|") + ")" + nK + nY + ")*",
              nX = RegExp(
                nZ +
                  "(?=" +
                  nZ +
                  ")|(?:" +
                  [nH + nW + "?", nW, nG, nq, "[" + nU + "]"].join("|") +
                  ")" +
                  (nK + nY + n$),
                "g",
              );
            let nQ = function (e) {
                return nV(e) ? e.match(nX) || [] : e.split("");
              },
              nJ = function (e) {
                return function (t) {
                  var n = nV((t = nu(t))) ? nQ(t) : void 0,
                    r = n ? n[0] : t.charAt(0),
                    i = n ? nz(n, 1).join("") : t.slice(1);
                  return r[e]() + i;
                };
              },
              n0 = nJ("toUpperCase"),
              n1 = function (e) {
                return n0(nu(e).toLowerCase());
              },
              n3 = function (e, t, n, r) {
                var i = -1,
                  a = null == e ? 0 : e.length;
                for (r && a && (n = e[++i]); ++i < a; ) n = t(n, e[i], i, e);
                return n;
              },
              n4 = function (e) {
                return function (t) {
                  return null == e ? void 0 : e[t];
                };
              };
            var n2 = n4({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              n6 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              n9 = RegExp(
                "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                "g",
              );
            let n5 = function (e) {
              return (e = nu(e)) && e.replace(n6, n2).replace(n9, "");
            };
            var n8 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              n7 =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              re = "\ud800-\udfff",
              rt = "\\u2700-\\u27bf",
              rn = "a-z\\xdf-\\xf6\\xf8-\\xff",
              rr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              ri =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              ra = "['’]",
              ro = "[" + ri + "]",
              rs = "[" + rn + "]",
              rl = "[^" + re + ri + "\\d+" + rt + rn + rr + "]",
              rc = "(?:\ud83c[\udde6-\uddff]){2}",
              ru = "[\ud800-\udbff][\udc00-\udfff]",
              rd = "[" + rr + "]",
              rf = "(?:" + rs + "|" + rl + ")",
              rp = "(?:" + ra + "(?:d|ll|m|re|s|t|ve))?",
              rv = "(?:" + ra + "(?:D|LL|M|RE|S|T|VE))?",
              rh =
                "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
              r_ = "[\\ufe0e\\ufe0f]?",
              rm =
                "(?:\\u200d(?:" +
                ["[^" + re + "]", rc, ru].join("|") +
                ")" +
                r_ +
                rh +
                ")*",
              rg =
                "(?:" +
                ["[" + rt + "]", rc, ru].join("|") +
                ")" +
                (r_ + rh + rm),
              rb = RegExp(
                [
                  rd +
                    "?" +
                    rs +
                    "+" +
                    rp +
                    "(?=" +
                    [ro, rd, "$"].join("|") +
                    ")",
                  "(?:" +
                    rd +
                    "|" +
                    rl +
                    ")+" +
                    rv +
                    "(?=" +
                    [ro, rd + rf, "$"].join("|") +
                    ")",
                  rd + "?" + rf + "+" + rp,
                  rd + "+" + rv,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  "\\d+",
                  rg,
                ].join("|"),
                "g",
              );
            let ry = function (e, t, n) {
              if (((e = nu(e)), void 0 === (t = n ? void 0 : t))) {
                var r;
                return ((r = e), n7.test(r))
                  ? e.match(rb) || []
                  : e.match(n8) || [];
              }
              return e.match(t) || [];
            };
            var rx = RegExp("['’]", "g");
            let rj = function (e) {
                return function (t) {
                  return n3(ry(n5(t).replace(rx, "")), e, "");
                };
              },
              rC = rj(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? n1(t) : t);
              }),
              rw = function () {
                if (!arguments.length) return [];
                var e = arguments[0];
                return S(e) ? e : [e];
              };
            var rk = d.isFinite,
              rS = Math.min;
            let rE = function (e) {
                var t = Math[e];
                return function (e, n) {
                  if (
                    ((e = W(e)), (n = null == n ? 0 : rS(G(n), 292)) && rk(e))
                  ) {
                    var r = (nu(e) + "e").split("e");
                    return +(
                      (r = (nu(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                        "e",
                      ))[0] +
                      "e" +
                      (+r[1] - n)
                    );
                  }
                  return t(e);
                };
              },
              rN = rE("ceil"),
              rA = function (e) {
                var t = eR(e);
                return (t.__chain__ = !0), t;
              };
            var rO = Math.ceil,
              rM = Math.max;
            let rR = function (e, t, n) {
                t = (n ? t_(e, t, n) : void 0 === t) ? 1 : rM(G(t), 0);
                var r = null == e ? 0 : e.length;
                if (!r || t < 1) return [];
                for (var i = 0, a = 0, o = Array(rO(r / t)); i < r; )
                  o[a++] = nD(e, i, (i += t));
                return o;
              },
              rT = function (e, t, n) {
                return (
                  e == e &&
                    (void 0 !== n && (e = e <= n ? e : n),
                    void 0 !== t && (e = e >= t ? e : t)),
                  e
                );
              },
              rL = function (e, t, n) {
                return (
                  void 0 === n && ((n = t), (t = void 0)),
                  void 0 !== n && (n = (n = W(n)) == n ? n : 0),
                  void 0 !== t && (t = (t = W(t)) == t ? t : 0),
                  rT(W(e), t, n)
                );
              };
            function rI(e) {
              var t = (this.__data__ = new ne(e));
              this.size = t.size;
            }
            (rI.prototype.clear = function () {
              (this.__data__ = new ne()), (this.size = 0);
            }),
              (rI.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (rI.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (rI.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (rI.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof ne) {
                  var r = n.__data__;
                  if (!nt || r.length < 199)
                    return r.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new ni(r);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            let rB = function (e, t) {
              return e && tu(t, tH(t), e);
            };
            var rP =
                "object" == typeof exports &&
                exports &&
                !exports.nodeType &&
                exports,
              rD = rP && e && !e.nodeType && e,
              rz = rD && rD.exports === rP ? d.Buffer : void 0,
              rF = rz ? rz.allocUnsafe : void 0;
            let rV = function (e, t) {
                if (t) return e.slice();
                var n = e.length,
                  r = rF ? rF(n) : new e.constructor(n);
                return e.copy(r), r;
              },
              rU = function (e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, i = 0, a = [];
                  ++n < r;

                ) {
                  var o = e[n];
                  t(o, n, e) && (a[i++] = o);
                }
                return a;
              },
              rW = function () {
                return [];
              };
            var rZ = Object.prototype.propertyIsEnumerable,
              rH = Object.getOwnPropertySymbols,
              rG = rH
                ? function (e) {
                    return null == e
                      ? []
                      : rU(rH((e = Object(e))), function (t) {
                          return rZ.call(e, t);
                        });
                  }
                : rW,
              rq = Object.getOwnPropertySymbols
                ? function (e) {
                    for (var t = []; e; ) nm(t, rG(e)), (e = nw(e));
                    return t;
                  }
                : rW;
            let rY = function (e, t, n) {
                var r = t(e);
                return S(e) ? r : nm(r, n(e));
              },
              rK = function (e) {
                return rY(e, tH, rG);
              },
              r$ = function (e) {
                return rY(e, tX, rq);
              };
            var rX = eo(d, "DataView"),
              rQ = eo(d, "Promise"),
              rJ = eo(d, "Set"),
              r0 = "[object Map]",
              r1 = "[object Promise]",
              r3 = "[object Set]",
              r4 = "[object WeakMap]",
              r2 = "[object DataView]",
              r6 = J(rX),
              r9 = J(nt),
              r5 = J(rQ),
              r8 = J(rJ),
              r7 = J(es),
              ie = y;
            ((rX && ie(new rX(new ArrayBuffer(1))) != r2) ||
              (nt && ie(new nt()) != r0) ||
              (rQ && ie(rQ.resolve()) != r1) ||
              (rJ && ie(new rJ()) != r3) ||
              (es && ie(new es()) != r4)) &&
              (ie = function (e) {
                var t = y(e),
                  n = "[object Object]" == t ? e.constructor : void 0,
                  r = n ? J(n) : "";
                if (r)
                  switch (r) {
                    case r6:
                      return r2;
                    case r9:
                      return r0;
                    case r5:
                      return r1;
                    case r8:
                      return r3;
                    case r7:
                      return r4;
                  }
                return t;
              });
            let it = ie;
            var ir = Object.prototype.hasOwnProperty;
            let ii = function (e) {
              var t = e.length,
                n = new e.constructor(t);
              return (
                t &&
                  "string" == typeof e[0] &&
                  ir.call(e, "index") &&
                  ((n.index = e.index), (n.input = e.input)),
                n
              );
            };
            var ia = d.Uint8Array;
            let io = function (e) {
                var t = new e.constructor(e.byteLength);
                return new ia(t).set(new ia(e)), t;
              },
              is = function (e, t) {
                var n = t ? io(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength);
              };
            var il = /\w*$/;
            let ic = function (e) {
              var t = new e.constructor(e.source, il.exec(e));
              return (t.lastIndex = e.lastIndex), t;
            };
            var iu = f ? f.prototype : void 0,
              id = iu ? iu.valueOf : void 0;
            let ip = function (e, t) {
                var n = t ? io(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length);
              },
              iv = function (e, t, n) {
                var r = e.constructor;
                switch (t) {
                  case "[object ArrayBuffer]":
                    return io(e);
                  case "[object Boolean]":
                  case "[object Date]":
                    return new r(+e);
                  case "[object DataView]":
                    return is(e, n);
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return ip(e, n);
                  case "[object Map]":
                  case "[object Set]":
                    return new r();
                  case "[object Number]":
                  case "[object String]":
                    return new r(e);
                  case "[object RegExp]":
                    return ic(e);
                  case "[object Symbol]":
                    return id ? Object(id.call(e)) : {};
                }
              },
              ih = function (e) {
                return "function" != typeof e.constructor || tb(e)
                  ? {}
                  : ed(nw(e));
              };
            var i_ = tB && tB.isMap;
            let im = i_
              ? tR(i_)
              : function (e) {
                  return x(e) && "[object Map]" == it(e);
                };
            var ig = tB && tB.isSet;
            let ib = ig
              ? tR(ig)
              : function (e) {
                  return x(e) && "[object Set]" == it(e);
                };
            var iy = "[object Arguments]",
              ix = "[object Function]",
              ij = "[object Object]",
              iC = {};
            (iC[iy] =
              iC["[object Array]"] =
              iC["[object ArrayBuffer]"] =
              iC["[object DataView]"] =
              iC["[object Boolean]"] =
              iC["[object Date]"] =
              iC["[object Float32Array]"] =
              iC["[object Float64Array]"] =
              iC["[object Int8Array]"] =
              iC["[object Int16Array]"] =
              iC["[object Int32Array]"] =
              iC["[object Map]"] =
              iC["[object Number]"] =
              iC[ij] =
              iC["[object RegExp]"] =
              iC["[object Set]"] =
              iC["[object String]"] =
              iC["[object Symbol]"] =
              iC["[object Uint8Array]"] =
              iC["[object Uint8ClampedArray]"] =
              iC["[object Uint16Array]"] =
              iC["[object Uint32Array]"] =
                !0),
              (iC["[object Error]"] = iC[ix] = iC["[object WeakMap]"] = !1);
            let iw = function e(t, n, r, i, a, o) {
                var s,
                  l = 1 & n,
                  c = 2 & n,
                  u = 4 & n;
                if ((r && (s = a ? r(t, i, a, o) : r(t)), void 0 !== s))
                  return s;
                if (!P(t)) return t;
                var d = S(t);
                if (d) {
                  if (((s = ii(t)), !l)) return eN(t, s);
                } else {
                  var f,
                    p,
                    v,
                    h = it(t),
                    _ = h == ix || "[object GeneratorFunction]" == h;
                  if (tO(t)) return rV(t, l);
                  if (h == ij || h == iy || (_ && !a)) {
                    if (((s = c || _ ? {} : ih(t)), !l))
                      return c
                        ? ((p = (f = s) && tu(t, tX(t), f)), tu(t, rq(t), p))
                        : ((v = rB(s, t)), tu(t, rG(t), v));
                  } else {
                    if (!iC[h]) return a ? t : {};
                    s = iv(t, h, l);
                  }
                }
                o || (o = new rI());
                var m = o.get(t);
                if (m) return m;
                o.set(t, s),
                  ib(t)
                    ? t.forEach(function (i) {
                        s.add(e(i, n, r, i, t, o));
                      })
                    : im(t) &&
                      t.forEach(function (i, a) {
                        s.set(a, e(i, n, r, a, t, o));
                      });
                var g = u ? (c ? r$ : rK) : c ? tX : tH,
                  b = d ? void 0 : g(t);
                return (
                  eH(b || t, function (i, a) {
                    b && (i = t[(a = i)]), tc(s, a, e(i, n, r, a, t, o));
                  }),
                  s
                );
              },
              ik = function (e) {
                return iw(e, 4);
              },
              iS = function (e) {
                return iw(e, 5);
              },
              iE = function (e, t) {
                return iw(e, 5, (t = "function" == typeof t ? t : void 0));
              },
              iN = function (e, t) {
                return iw(e, 4, (t = "function" == typeof t ? t : void 0));
              },
              iA = function () {
                return new eE(this.value(), this.__chain__);
              },
              iO = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                  ++t < n;

                ) {
                  var a = e[t];
                  a && (i[r++] = a);
                }
                return i;
              },
              iM = function () {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], r = e; r--; )
                  t[r - 1] = arguments[r];
                return nm(S(n) ? eN(n) : [n], ny(t, 1));
              };
            function iR(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new ni(); ++t < n; ) this.add(e[t]);
            }
            (iR.prototype.add = iR.prototype.push =
              function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
              (iR.prototype.has = function (e) {
                return this.__data__.has(e);
              });
            let iT = function (e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                  if (t(e[n], n, e)) return !0;
                return !1;
              },
              iL = function (e, t) {
                return e.has(t);
              },
              iI = function (e, t, n, r, i, a) {
                var o = 1 & n,
                  s = e.length,
                  l = t.length;
                if (s != l && !(o && l > s)) return !1;
                var c = a.get(e),
                  u = a.get(t);
                if (c && u) return c == t && u == e;
                var d = -1,
                  f = !0,
                  p = 2 & n ? new iR() : void 0;
                for (a.set(e, t), a.set(t, e); ++d < s; ) {
                  var v = e[d],
                    h = t[d];
                  if (r) var _ = o ? r(h, v, d, t, e, a) : r(v, h, d, e, t, a);
                  if (void 0 !== _) {
                    if (_) continue;
                    f = !1;
                    break;
                  }
                  if (p) {
                    if (
                      !iT(t, function (e, t) {
                        if (!iL(p, t) && (v === e || i(v, e, n, r, a)))
                          return p.push(t);
                      })
                    ) {
                      f = !1;
                      break;
                    }
                  } else if (!(v === h || i(v, h, n, r, a))) {
                    f = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), f;
              },
              iB = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e, r) {
                    n[++t] = [r, e];
                  }),
                  n
                );
              },
              iP = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e) {
                    n[++t] = e;
                  }),
                  n
                );
              };
            var iD = f ? f.prototype : void 0,
              iz = iD ? iD.valueOf : void 0;
            let iF = function (e, t, n, r, i, a, o) {
              switch (n) {
                case "[object DataView]":
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    break;
                  (e = e.buffer), (t = t.buffer);
                case "[object ArrayBuffer]":
                  if (e.byteLength != t.byteLength || !a(new ia(e), new ia(t)))
                    break;
                  return !0;
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return ts(+e, +t);
                case "[object Error]":
                  return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                  return e == t + "";
                case "[object Map]":
                  var s = iB;
                case "[object Set]":
                  var l = 1 & r;
                  if ((s || (s = iP), e.size != t.size && !l)) break;
                  var c = o.get(e);
                  if (c) return c == t;
                  (r |= 2), o.set(e, t);
                  var u = iI(s(e), s(t), r, i, a, o);
                  return o.delete(e), u;
                case "[object Symbol]":
                  if (iz) return iz.call(e) == iz.call(t);
              }
              return !1;
            };
            var iV = Object.prototype.hasOwnProperty;
            let iU = function (e, t, n, r, i, a) {
              var o = 1 & n,
                s = rK(e),
                l = s.length;
              if (l != rK(t).length && !o) return !1;
              for (var c = l; c--; ) {
                var u = s[c];
                if (!(o ? u in t : iV.call(t, u))) return !1;
              }
              var d = a.get(e),
                f = a.get(t);
              if (d && f) return d == t && f == e;
              var p = !0;
              a.set(e, t), a.set(t, e);
              for (var v = o; ++c < l; ) {
                var h = e[(u = s[c])],
                  _ = t[u];
                if (r) var m = o ? r(_, h, u, t, e, a) : r(h, _, u, e, t, a);
                if (!(void 0 === m ? h === _ || i(h, _, n, r, a) : m)) {
                  p = !1;
                  break;
                }
                v || (v = "constructor" == u);
              }
              if (p && !v) {
                var g = e.constructor,
                  b = t.constructor;
                g != b &&
                  "constructor" in e &&
                  "constructor" in t &&
                  !(
                    "function" == typeof g &&
                    g instanceof g &&
                    "function" == typeof b &&
                    b instanceof b
                  ) &&
                  (p = !1);
              }
              return a.delete(e), a.delete(t), p;
            };
            var iW = "[object Arguments]",
              iZ = "[object Array]",
              iH = "[object Object]",
              iG = Object.prototype.hasOwnProperty;
            let iq = function (e, t, n, r, i, a) {
                var o = S(e),
                  s = S(t),
                  l = o ? iZ : it(e),
                  c = s ? iZ : it(t);
                (l = l == iW ? iH : l), (c = c == iW ? iH : c);
                var u = l == iH,
                  d = c == iH,
                  f = l == c;
                if (f && tO(e)) {
                  if (!tO(t)) return !1;
                  (o = !0), (u = !1);
                }
                if (f && !u)
                  return (
                    a || (a = new rI()),
                    o || tD(e) ? iI(e, t, n, r, i, a) : iF(e, t, l, n, r, i, a)
                  );
                if (!(1 & n)) {
                  var p = u && iG.call(e, "__wrapped__"),
                    v = d && iG.call(t, "__wrapped__");
                  if (p || v) {
                    var h = p ? e.value() : e,
                      _ = v ? t.value() : t;
                    return a || (a = new rI()), i(h, _, n, r, a);
                  }
                }
                return !!f && (a || (a = new rI()), iU(e, t, n, r, i, a));
              },
              iY = function e(t, n, r, i, a) {
                return (
                  t === n ||
                  (null != t && null != n && (x(t) || x(n))
                    ? iq(t, n, r, i, e, a)
                    : t != t && n != n)
                );
              },
              iK = function (e, t, n, r) {
                var i = n.length,
                  a = i,
                  o = !r;
                if (null == e) return !a;
                for (e = Object(e); i--; ) {
                  var s = n[i];
                  if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
                }
                for (; ++i < a; ) {
                  var l = (s = n[i])[0],
                    c = e[l],
                    u = s[1];
                  if (o && s[2]) {
                    if (void 0 === c && !(l in e)) return !1;
                  } else {
                    var d = new rI();
                    if (r) var f = r(c, u, l, e, t, d);
                    if (!(void 0 === f ? iY(u, c, 3, r, d) : f)) return !1;
                  }
                }
                return !0;
              },
              i$ = function (e) {
                return e == e && !P(e);
              },
              iX = function (e) {
                for (var t = tH(e), n = t.length; n--; ) {
                  var r = t[n],
                    i = e[r];
                  t[n] = [r, i, i$(i)];
                }
                return t;
              },
              iQ = function (e, t) {
                return function (n) {
                  return (
                    null != n && n[e] === t && (void 0 !== t || e in Object(n))
                  );
                };
              },
              iJ = function (e) {
                var t = iX(e);
                return 1 == t.length && t[0][2]
                  ? iQ(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || iK(n, e, t);
                    };
              },
              i0 = function (e, t) {
                return null != e && t in Object(e);
              },
              i1 = function (e, t, n) {
                t = nd(t, e);
                for (var r = -1, i = t.length, a = !1; ++r < i; ) {
                  var o = np(t[r]);
                  if (!(a = null != e && n(e, o))) break;
                  e = e[o];
                }
                return a || ++r != i
                  ? a
                  : !!(i = null == e ? 0 : e.length) &&
                      tv(i) &&
                      e3(o, i) &&
                      (S(e) || tk(e));
              },
              i3 = function (e, t) {
                return null != e && i1(e, t, i0);
              },
              i4 = function (e, t) {
                return t4(e) && i$(t)
                  ? iQ(np(e), t)
                  : function (n) {
                      var r = nh(n, e);
                      return void 0 === r && r === t ? i3(n, e) : iY(t, r, 3);
                    };
              },
              i2 = function (e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              },
              i6 = function (e) {
                return t4(e)
                  ? i2(np(e))
                  : function (t) {
                      return nv(t, e);
                    };
              },
              i9 = function (e) {
                return "function" == typeof e
                  ? e
                  : null == e
                    ? Y
                    : "object" == typeof e
                      ? S(e)
                        ? i4(e[0], e[1])
                        : iJ(e)
                      : i6(e);
              },
              i5 = function (e) {
                var t = null == e ? 0 : e.length;
                return (
                  (e = t
                    ? k(e, function (e) {
                        if ("function" != typeof e[1])
                          throw TypeError("Expected a function");
                        return [i9(e[0]), e[1]];
                      })
                    : []),
                  tp(function (n) {
                    for (var r = -1; ++r < t; ) {
                      var i = e[r];
                      if (ev(i[0], this, n)) return ev(i[1], this, n);
                    }
                  })
                );
              },
              i8 = function (e, t, n) {
                var r = n.length;
                if (null == e) return !r;
                for (e = Object(e); r--; ) {
                  var i = n[r],
                    a = t[i],
                    o = e[i];
                  if ((void 0 === o && !(i in e)) || !a(o)) return !1;
                }
                return !0;
              },
              i7 = function (e) {
                var t = tH(e);
                return function (n) {
                  return i8(n, e, t);
                };
              },
              ae = function (e) {
                return i7(iw(e, 1));
              },
              at = function (e, t) {
                return null == t || i8(e, t, tH(t));
              },
              an = function (e, t, n, r) {
                for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
                  var o = e[i];
                  t(r, o, n(o), e);
                }
                return r;
              },
              ar = function (e) {
                return function (t, n, r) {
                  for (
                    var i = -1, a = Object(t), o = r(t), s = o.length;
                    s--;

                  ) {
                    var l = o[e ? s : ++i];
                    if (!1 === n(a[l], l, a)) break;
                  }
                  return t;
                };
              };
            var ai = ar();
            let aa = function (e, t) {
                return e && ai(e, t, tH);
              },
              ao = function (e, t) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!th(n)) return e(n, r);
                  for (
                    var i = n.length, a = t ? i : -1, o = Object(n);
                    (t ? a-- : ++a < i) && !1 !== r(o[a], a, o);

                  );
                  return n;
                };
              };
            var as = ao(aa);
            let al = function (e, t, n, r) {
                return (
                  as(e, function (e, i, a) {
                    t(r, e, n(e), a);
                  }),
                  r
                );
              },
              ac = function (e, t) {
                return function (n, r) {
                  var i = S(n) ? an : al,
                    a = t ? t() : {};
                  return i(n, e, i9(r, 2), a);
                };
              };
            var au = Object.prototype.hasOwnProperty;
            let ad = ac(function (e, t, n) {
                au.call(e, n) ? ++e[n] : to(e, n, 1);
              }),
              af = function (e, t) {
                var n = ed(e);
                return null == t ? n : rB(n, t);
              };
            function ap(e, t, n) {
              var r = ti(
                e,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (t = n ? void 0 : t),
              );
              return (r.placeholder = ap.placeholder), r;
            }
            ap.placeholder = {};
            let av = ap;
            function ah(e, t, n) {
              var r = ti(
                e,
                16,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (t = n ? void 0 : t),
              );
              return (r.placeholder = ah.placeholder), r;
            }
            ah.placeholder = {};
            let a_ = ah,
              am = function () {
                return d.Date.now();
              };
            var ag = Math.max,
              ab = Math.min;
            let ay = function (e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  c = 0,
                  u = !1,
                  d = !1,
                  f = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                function p(t) {
                  var n = r,
                    a = i;
                  return (r = i = void 0), (c = t), (o = e.apply(a, n));
                }
                function v(e) {
                  var n = e - l,
                    r = e - c;
                  return void 0 === l || n >= t || n < 0 || (d && r >= a);
                }
                function h() {
                  var e,
                    n,
                    r,
                    i = am();
                  if (v(i)) return _(i);
                  s = setTimeout(
                    h,
                    ((e = i - l),
                    (n = i - c),
                    (r = t - e),
                    d ? ab(r, a - n) : r),
                  );
                }
                function _(e) {
                  return ((s = void 0), f && r) ? p(e) : ((r = i = void 0), o);
                }
                function m() {
                  var e,
                    n = am(),
                    a = v(n);
                  if (((r = arguments), (i = this), (l = n), a)) {
                    if (void 0 === s)
                      return (c = e = l), (s = setTimeout(h, t)), u ? p(e) : o;
                    if (d) return clearTimeout(s), (s = setTimeout(h, t)), p(l);
                  }
                  return void 0 === s && (s = setTimeout(h, t)), o;
                }
                return (
                  (t = W(t) || 0),
                  P(n) &&
                    ((u = !!n.leading),
                    (a = (d = "maxWait" in n) ? ag(W(n.maxWait) || 0, t) : a),
                    (f = "trailing" in n ? !!n.trailing : f)),
                  (m.cancel = function () {
                    void 0 !== s && clearTimeout(s),
                      (c = 0),
                      (r = l = i = s = void 0);
                  }),
                  (m.flush = function () {
                    return void 0 === s ? o : _(am());
                  }),
                  m
                );
              },
              ax = function (e, t) {
                return null == e || e != e ? t : e;
              };
            var aj = Object.prototype,
              aC = aj.hasOwnProperty;
            let aw = tp(function (e, t) {
                e = Object(e);
                var n = -1,
                  r = t.length,
                  i = r > 2 ? t[2] : void 0;
                for (i && t_(t[0], t[1], i) && (r = 1); ++n < r; )
                  for (
                    var a = t[n], o = tX(a), s = -1, l = o.length;
                    ++s < l;

                  ) {
                    var c = o[s],
                      u = e[c];
                    (void 0 === u || (ts(u, aj[c]) && !aC.call(e, c))) &&
                      (e[c] = a[c]);
                  }
                return e;
              }),
              ak = function (e, t, n) {
                ((void 0 === n || ts(e[t], n)) && (void 0 !== n || t in e)) ||
                  to(e, t, n);
              },
              aS = function (e) {
                return x(e) && th(e);
              },
              aE = function (e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              },
              aN = function (e) {
                return tu(e, tX(e));
              },
              aA = function (e, t, n, r, i, a, o) {
                var s = aE(e, n),
                  l = aE(t, n),
                  c = o.get(l);
                if (c) {
                  ak(e, n, c);
                  return;
                }
                var u = a ? a(s, l, n + "", e, t, o) : void 0,
                  d = void 0 === u;
                if (d) {
                  var f = S(l),
                    p = !f && tO(l),
                    v = !f && !p && tD(l);
                  (u = l),
                    f || p || v
                      ? S(s)
                        ? (u = s)
                        : aS(s)
                          ? (u = eN(s))
                          : p
                            ? ((d = !1), (u = rV(l, !0)))
                            : v
                              ? ((d = !1), (u = ip(l, !0)))
                              : (u = [])
                      : nA(l) || tk(l)
                        ? ((u = s),
                          tk(s) ? (u = aN(s)) : (!P(s) || K(s)) && (u = ih(l)))
                        : (d = !1);
                }
                d && (o.set(l, u), i(u, l, r, a, o), o.delete(l)), ak(e, n, u);
              },
              aO = function e(t, n, r, i, a) {
                t !== n &&
                  ai(
                    n,
                    function (o, s) {
                      if ((a || (a = new rI()), P(o))) aA(t, n, s, r, e, i, a);
                      else {
                        var l = i ? i(aE(t, s), o, s + "", t, n, a) : void 0;
                        void 0 === l && (l = o), ak(t, s, l);
                      }
                    },
                    tX,
                  );
              },
              aM = function e(t, n, r, i, a, o) {
                return (
                  P(t) &&
                    P(n) &&
                    (o.set(n, t), aO(t, n, void 0, e, o), o.delete(n)),
                  t
                );
              },
              aR = tm(function (e, t, n, r) {
                aO(e, t, n, r);
              }),
              aT = tp(function (e) {
                return e.push(void 0, aM), ev(aR, void 0, e);
              }),
              aL = function (e, t, n) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return setTimeout(function () {
                  e.apply(void 0, n);
                }, t);
              },
              aI = tp(function (e, t) {
                return aL(e, 1, t);
              }),
              aB = tp(function (e, t, n) {
                return aL(e, W(t) || 0, n);
              }),
              aP = function (e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                  if (n(t, e[r])) return !0;
                return !1;
              },
              aD = function (e, t, n, r) {
                var i = -1,
                  a = e$,
                  o = !0,
                  s = e.length,
                  l = [],
                  c = t.length;
                if (!s) return l;
                n && (t = k(t, tR(n))),
                  r
                    ? ((a = aP), (o = !1))
                    : t.length >= 200 && ((a = iL), (o = !1), (t = new iR(t)));
                e: for (; ++i < s; ) {
                  var u = e[i],
                    d = null == n ? u : n(u);
                  if (((u = r || 0 !== u ? u : 0), o && d == d)) {
                    for (var f = c; f--; ) if (t[f] === d) continue e;
                    l.push(u);
                  } else a(t, d, r) || l.push(u);
                }
                return l;
              },
              az = tp(function (e, t) {
                return aS(e) ? aD(e, ny(t, 1, aS, !0)) : [];
              }),
              aF = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0;
              },
              aV = tp(function (e, t) {
                var n = aF(t);
                return (
                  aS(n) && (n = void 0),
                  aS(e) ? aD(e, ny(t, 1, aS, !0), i9(n, 2)) : []
                );
              }),
              aU = tp(function (e, t) {
                var n = aF(t);
                return (
                  aS(n) && (n = void 0),
                  aS(e) ? aD(e, ny(t, 1, aS, !0), void 0, n) : []
                );
              }),
              aW = M(function (e, t) {
                return e / t;
              }, 1),
              aZ = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nD(e, (t = n || void 0 === t ? 1 : G(t)) < 0 ? 0 : t, r)
                  : [];
              },
              aH = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nD(
                      e,
                      0,
                      (t = r - (t = n || void 0 === t ? 1 : G(t))) < 0 ? 0 : t,
                    )
                  : [];
              },
              aG = function (e, t, n, r) {
                for (
                  var i = e.length, a = r ? i : -1;
                  (r ? a-- : ++a < i) && t(e[a], a, e);

                );
                return n
                  ? nD(e, r ? 0 : a, r ? a + 1 : i)
                  : nD(e, r ? a + 1 : 0, r ? i : a);
              },
              aq = function (e, t) {
                return e && e.length ? aG(e, i9(t, 3), !0, !0) : [];
              },
              aY = function (e, t) {
                return e && e.length ? aG(e, i9(t, 3), !0) : [];
              },
              aK = function (e) {
                return "function" == typeof e ? e : Y;
              },
              a$ = function (e, t) {
                return (S(e) ? eH : as)(e, aK(t));
              },
              aX = function (e, t) {
                for (
                  var n = null == e ? 0 : e.length;
                  n-- && !1 !== t(e[n], n, e);

                );
                return e;
              };
            var aQ = ar(!0);
            let aJ = function (e, t) {
              return e && aQ(e, t, tH);
            };
            var a0 = ao(aJ, !0);
            let a1 = function (e, t) {
                return (S(e) ? aX : a0)(e, aK(t));
              },
              a3 = function (e, t, n) {
                (e = nu(e)), (t = O(t));
                var r = e.length,
                  i = (n = void 0 === n ? r : rT(G(n), 0, r));
                return (n -= t.length) >= 0 && e.slice(n, i) == t;
              },
              a4 = function (e) {
                var t = -1,
                  n = Array(e.size);
                return (
                  e.forEach(function (e) {
                    n[++t] = [e, e];
                  }),
                  n
                );
              },
              a2 = function (e) {
                return function (t) {
                  var n = it(t);
                  return "[object Map]" == n
                    ? iB(t)
                    : "[object Set]" == n
                      ? a4(t)
                      : k(e(t), function (e) {
                          return [e, t[e]];
                        });
                };
              },
              a6 = a2(tH),
              a9 = a2(tX);
            var a5 = n4({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              }),
              a8 = /[&<>"']/g,
              a7 = RegExp(a8.source);
            let oe = function (e) {
              return (e = nu(e)) && a7.test(e) ? e.replace(a8, a5) : e;
            };
            var ot = /[\\^$.*+?()[\]{}|]/g,
              on = RegExp(ot.source);
            let or = function (e) {
                return (e = nu(e)) && on.test(e) ? e.replace(ot, "\\$&") : e;
              },
              oi = function (e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                  if (!t(e[n], n, e)) return !1;
                return !0;
              },
              oa = function (e, t) {
                var n = !0;
                return (
                  as(e, function (e, r, i) {
                    return (n = !!t(e, r, i));
                  }),
                  n
                );
              },
              oo = function (e, t, n) {
                var r = S(e) ? oi : oa;
                return n && t_(e, t, n) && (t = void 0), r(e, i9(t, 3));
              },
              os = function (e) {
                return e ? rT(G(e), 0, 4294967295) : 0;
              },
              ol = function (e, t, n, r) {
                var i = e.length;
                for (
                  (n = G(n)) < 0 && (n = -n > i ? 0 : i + n),
                    (r = void 0 === r || r > i ? i : G(r)) < 0 && (r += i),
                    r = n > r ? 0 : os(r);
                  n < r;

                )
                  e[n++] = t;
                return e;
              },
              oc = function (e, t, n, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? (n &&
                      "number" != typeof n &&
                      t_(e, t, n) &&
                      ((n = 0), (r = i)),
                    ol(e, t, n, r))
                  : [];
              },
              ou = function (e, t) {
                var n = [];
                return (
                  as(e, function (e, r, i) {
                    t(e, r, i) && n.push(e);
                  }),
                  n
                );
              },
              od = function (e, t) {
                return (S(e) ? rU : ou)(e, i9(t, 3));
              },
              of = function (e) {
                return function (t, n, r) {
                  var i = Object(t);
                  if (!th(t)) {
                    var a = i9(n, 3);
                    (t = tH(t)),
                      (n = function (e) {
                        return a(i[e], e, i);
                      });
                  }
                  var o = e(t, n, r);
                  return o > -1 ? i[a ? t[o] : o] : void 0;
                };
              };
            var op = Math.max;
            let ov = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : G(n);
                return i < 0 && (i = op(r + i, 0)), eG(e, i9(t, 3), i);
              },
              oh = of(ov),
              o_ = function (e, t, n) {
                var r;
                return (
                  n(e, function (e, n, i) {
                    if (t(e, n, i)) return (r = n), !1;
                  }),
                  r
                );
              },
              om = function (e, t) {
                return o_(e, i9(t, 3), aa);
              };
            var og = Math.max,
              ob = Math.min;
            let oy = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = r - 1;
                return (
                  void 0 !== n &&
                    ((i = G(n)), (i = n < 0 ? og(r + i, 0) : ob(i, r - 1))),
                  eG(e, i9(t, 3), i, !0)
                );
              },
              ox = of(oy),
              oj = function (e, t) {
                return o_(e, i9(t, 3), aJ);
              },
              oC = function (e) {
                return e && e.length ? e[0] : void 0;
              },
              ow = function (e, t) {
                var n = -1,
                  r = th(e) ? Array(e.length) : [];
                return (
                  as(e, function (e, i, a) {
                    r[++n] = t(e, i, a);
                  }),
                  r
                );
              },
              ok = function (e, t) {
                return (S(e) ? k : ow)(e, i9(t, 3));
              },
              oS = function (e, t) {
                return ny(ok(e, t), 1);
              };
            var oE = 1 / 0;
            let oN = function (e, t) {
                return ny(ok(e, t), oE);
              },
              oA = function (e, t, n) {
                return (n = void 0 === n ? 1 : G(n)), ny(ok(e, t), n);
              };
            var oO = 1 / 0;
            let oM = function (e) {
                return (null == e ? 0 : e.length) ? ny(e, oO) : [];
              },
              oR = function (e, t) {
                return (null == e ? 0 : e.length)
                  ? ny(e, (t = void 0 === t ? 1 : G(t)))
                  : [];
              },
              oT = function (e) {
                return ti(e, 512);
              },
              oL = rE("floor"),
              oI = function (e) {
                return nj(function (t) {
                  var n = t.length,
                    r = n,
                    i = eE.prototype.thru;
                  for (e && t.reverse(); r--; ) {
                    var a = t[r];
                    if ("function" != typeof a)
                      throw TypeError("Expected a function");
                    if (i && !o && "wrapper" == eS(a)) var o = new eE([], !0);
                  }
                  for (r = o ? r : n; ++r < n; ) {
                    var s = eS((a = t[r])),
                      l = "wrapper" == s ? eC(a) : void 0;
                    o =
                      l && eT(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? o[eS(l[0])].apply(o, l[3])
                        : 1 == a.length && eT(a)
                          ? o[s]()
                          : o.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (o && 1 == e.length && S(r)) return o.plant(r).value();
                    for (var i = 0, a = n ? t[i].apply(this, e) : r; ++i < n; )
                      a = t[i].call(this, a);
                    return a;
                  };
                });
              },
              oB = oI(),
              oP = oI(!0),
              oD = function (e, t) {
                return null == e ? e : ai(e, aK(t), tX);
              },
              oz = function (e, t) {
                return null == e ? e : aQ(e, aK(t), tX);
              },
              oF = function (e, t) {
                return e && aa(e, aK(t));
              },
              oV = function (e, t) {
                return e && aJ(e, aK(t));
              },
              oU = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = {};
                  ++t < n;

                ) {
                  var i = e[t];
                  r[i[0]] = i[1];
                }
                return r;
              },
              oW = function (e, t) {
                return rU(t, function (t) {
                  return K(e[t]);
                });
              },
              oZ = function (e) {
                return null == e ? [] : oW(e, tH(e));
              },
              oH = function (e) {
                return null == e ? [] : oW(e, tX(e));
              };
            var oG = Object.prototype.hasOwnProperty;
            let oq = ac(function (e, t, n) {
                oG.call(e, n) ? e[n].push(t) : to(e, n, [t]);
              }),
              oY = function (e, t) {
                return e > t;
              },
              oK = function (e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = W(t)), (n = W(n))),
                    e(t, n)
                  );
                };
              },
              o$ = oK(oY),
              oX = oK(function (e, t) {
                return e >= t;
              });
            var oQ = Object.prototype.hasOwnProperty;
            let oJ = function (e, t) {
                return null != e && oQ.call(e, t);
              },
              o0 = function (e, t) {
                return null != e && i1(e, t, oJ);
              };
            var o1 = Math.max,
              o3 = Math.min;
            let o4 = function (e, t, n) {
                var r, i, a;
                return (
                  (t = H(t)),
                  void 0 === n ? ((n = t), (t = 0)) : (n = H(n)),
                  (r = e = W(e)) >= o3((i = t), (a = n)) && r < o1(i, a)
                );
              },
              o2 = function (e) {
                return (
                  "string" == typeof e ||
                  (!S(e) && x(e) && "[object String]" == y(e))
                );
              },
              o6 = function (e, t) {
                return k(t, function (t) {
                  return e[t];
                });
              },
              o9 = function (e) {
                return null == e ? [] : o6(e, tH(e));
              };
            var o5 = Math.max;
            let o8 = function (e, t, n, r) {
              (e = th(e) ? e : o9(e)), (n = n && !r ? G(n) : 0);
              var i = e.length;
              return (
                n < 0 && (n = o5(i + n, 0)),
                o2(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && eK(e, t, n) > -1
              );
            };
            var o7 = Math.max;
            let se = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : G(n);
                return i < 0 && (i = o7(r + i, 0)), eK(e, t, i);
              },
              st = function (e) {
                return (null == e ? 0 : e.length) ? nD(e, 0, -1) : [];
              };
            var sn = Math.min;
            let sr = function (e, t, n) {
                for (
                  var r = n ? aP : e$,
                    i = e[0].length,
                    a = e.length,
                    o = a,
                    s = Array(a),
                    l = 1 / 0,
                    c = [];
                  o--;

                ) {
                  var u = e[o];
                  o && t && (u = k(u, tR(t))),
                    (l = sn(u.length, l)),
                    (s[o] =
                      !n && (t || (i >= 120 && u.length >= 120))
                        ? new iR(o && u)
                        : void 0);
                }
                u = e[0];
                var d = -1,
                  f = s[0];
                e: for (; ++d < i && c.length < l; ) {
                  var p = u[d],
                    v = t ? t(p) : p;
                  if (
                    ((p = n || 0 !== p ? p : 0), !(f ? iL(f, v) : r(c, v, n)))
                  ) {
                    for (o = a; --o; ) {
                      var h = s[o];
                      if (!(h ? iL(h, v) : r(e[o], v, n))) continue e;
                    }
                    f && f.push(v), c.push(p);
                  }
                }
                return c;
              },
              si = function (e) {
                return aS(e) ? e : [];
              },
              sa = tp(function (e) {
                var t = k(e, si);
                return t.length && t[0] === e[0] ? sr(t) : [];
              }),
              so = tp(function (e) {
                var t = aF(e),
                  n = k(e, si);
                return (
                  t === aF(n) ? (t = void 0) : n.pop(),
                  n.length && n[0] === e[0] ? sr(n, i9(t, 2)) : []
                );
              }),
              ss = tp(function (e) {
                var t = aF(e),
                  n = k(e, si);
                return (
                  (t = "function" == typeof t ? t : void 0) && n.pop(),
                  n.length && n[0] === e[0] ? sr(n, void 0, t) : []
                );
              }),
              sl = function (e, t) {
                return function (n, r) {
                  var i, a;
                  return (
                    (i = t(r)),
                    (a = {}),
                    aa(n, function (t, n, r) {
                      e(a, i(t), n, r);
                    }),
                    a
                  );
                };
              };
            var sc = Object.prototype.toString;
            let su = sl(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = sc.call(t)),
                (e[t] = n);
            }, eU(Y));
            var sd = Object.prototype,
              sf = sd.hasOwnProperty,
              sp = sd.toString;
            let sv = sl(function (e, t, n) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = sp.call(t)),
                  sf.call(e, t) ? e[t].push(n) : (e[t] = [n]);
              }, i9),
              sh = function (e, t) {
                return t.length < 2 ? e : nv(e, nD(t, 0, -1));
              },
              s_ = function (e, t, n) {
                t = nd(t, e);
                var r = null == (e = sh(e, t)) ? e : e[np(aF(t))];
                return null == r ? void 0 : ev(r, e, n);
              },
              sm = tp(s_),
              sg = tp(function (e, t, n) {
                var r = -1,
                  i = "function" == typeof t,
                  a = th(e) ? Array(e.length) : [];
                return (
                  as(e, function (e) {
                    a[++r] = i ? ev(t, e, n) : s_(e, t, n);
                  }),
                  a
                );
              });
            var sb = tB && tB.isArrayBuffer;
            let sy = sb
                ? tR(sb)
                : function (e) {
                    return x(e) && "[object ArrayBuffer]" == y(e);
                  },
              sx = function (e) {
                return (
                  !0 === e || !1 === e || (x(e) && "[object Boolean]" == y(e))
                );
              };
            var sj = tB && tB.isDate;
            let sC = sj
                ? tR(sj)
                : function (e) {
                    return x(e) && "[object Date]" == y(e);
                  },
              sw = function (e) {
                return x(e) && 1 === e.nodeType && !nA(e);
              };
            var sk = Object.prototype.hasOwnProperty;
            let sS = function (e) {
                if (null == e) return !0;
                if (
                  th(e) &&
                  (S(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    tO(e) ||
                    tD(e) ||
                    tk(e))
                )
                  return !e.length;
                var t = it(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (tb(e)) return !tZ(e).length;
                for (var n in e) if (sk.call(e, n)) return !1;
                return !0;
              },
              sE = function (e, t) {
                return iY(e, t);
              },
              sN = function (e, t, n) {
                var r = (n = "function" == typeof n ? n : void 0)
                  ? n(e, t)
                  : void 0;
                return void 0 === r ? iY(e, t, void 0, n) : !!r;
              };
            var sA = d.isFinite;
            let sO = function (e) {
                return "number" == typeof e && sA(e);
              },
              sM = function (e) {
                return "number" == typeof e && e == G(e);
              },
              sR = function (e, t) {
                return e === t || iK(e, t, iX(t));
              },
              sT = function (e, t, n) {
                return (
                  (n = "function" == typeof n ? n : void 0), iK(e, t, iX(t), n)
                );
              },
              sL = function (e) {
                return (
                  "number" == typeof e || (x(e) && "[object Number]" == y(e))
                );
              },
              sI = function (e) {
                return sL(e) && e != +e;
              };
            var sB = $ ? K : tS;
            let sP = function (e) {
                if (sB(e))
                  throw Error(
                    "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                  );
                return ea(e);
              },
              sD = function (e) {
                return null == e;
              },
              sz = function (e) {
                return null === e;
              };
            var sF = tB && tB.isRegExp;
            let sV = sF
                ? tR(sF)
                : function (e) {
                    return x(e) && "[object RegExp]" == y(e);
                  },
              sU = function (e) {
                return sM(e) && e >= -9007199254740991 && e <= 9007199254740991;
              },
              sW = function (e) {
                return void 0 === e;
              },
              sZ = function (e) {
                return x(e) && "[object WeakMap]" == it(e);
              },
              sH = function (e) {
                return x(e) && "[object WeakSet]" == y(e);
              },
              sG = function (e) {
                return i9("function" == typeof e ? e : iw(e, 1));
              };
            var sq = Array.prototype.join;
            let sY = function (e, t) {
                return null == e ? "" : sq.call(e, t);
              },
              sK = rj(function (e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase();
              }),
              s$ = ac(function (e, t, n) {
                to(e, n, t);
              }),
              sX = function (e, t, n) {
                for (var r = n + 1; r-- && e[r] !== t; );
                return r;
              };
            var sQ = Math.max,
              sJ = Math.min;
            let s0 = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = r;
                return (
                  void 0 !== n &&
                    (i = (i = G(n)) < 0 ? sQ(r + i, 0) : sJ(i, r - 1)),
                  t == t ? sX(e, t, i) : eG(e, eq, i, !0)
                );
              },
              s1 = rj(function (e, t, n) {
                return e + (n ? " " : "") + t.toLowerCase();
              }),
              s3 = nJ("toLowerCase"),
              s4 = function (e, t) {
                return e < t;
              },
              s2 = oK(s4),
              s6 = oK(function (e, t) {
                return e <= t;
              }),
              s9 = function (e, t) {
                var n = {};
                return (
                  (t = i9(t, 3)),
                  aa(e, function (e, r, i) {
                    to(n, t(e, r, i), e);
                  }),
                  n
                );
              },
              s5 = function (e, t) {
                var n = {};
                return (
                  (t = i9(t, 3)),
                  aa(e, function (e, r, i) {
                    to(n, r, t(e, r, i));
                  }),
                  n
                );
              },
              s8 = function (e) {
                return iJ(iw(e, 1));
              },
              s7 = function (e, t) {
                return i4(e, iw(t, 1));
              },
              le = function (e, t, n) {
                for (var r = -1, i = e.length; ++r < i; ) {
                  var a = e[r],
                    o = t(a);
                  if (null != o && (void 0 === s ? o == o && !j(o) : n(o, s)))
                    var s = o,
                      l = a;
                }
                return l;
              },
              lt = function (e) {
                return e && e.length ? le(e, Y, oY) : void 0;
              },
              ln = function (e, t) {
                return e && e.length ? le(e, i9(t, 2), oY) : void 0;
              },
              lr = function (e, t) {
                for (var n, r = -1, i = e.length; ++r < i; ) {
                  var a = t(e[r]);
                  void 0 !== a && (n = void 0 === n ? a : n + a);
                }
                return n;
              };
            var li = 0 / 0;
            let la = function (e, t) {
                var n = null == e ? 0 : e.length;
                return n ? lr(e, t) / n : li;
              },
              lo = function (e) {
                return la(e, Y);
              },
              ls = function (e, t) {
                return la(e, i9(t, 2));
              },
              ll = tm(function (e, t, n) {
                aO(e, t, n);
              }),
              lc = tp(function (e, t) {
                return function (n) {
                  return s_(n, e, t);
                };
              }),
              lu = tp(function (e, t) {
                return function (n) {
                  return s_(e, n, t);
                };
              }),
              ld = function (e) {
                return e && e.length ? le(e, Y, s4) : void 0;
              },
              lf = function (e, t) {
                return e && e.length ? le(e, i9(t, 2), s4) : void 0;
              },
              lp = function (e, t, n) {
                var r = tH(t),
                  i = oW(t, r),
                  a = !(P(n) && "chain" in n) || !!n.chain,
                  o = K(e);
                return (
                  eH(i, function (n) {
                    var r = t[n];
                    (e[n] = r),
                      o &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__;
                          if (a || t) {
                            var n = e(this.__wrapped__);
                            return (
                              (n.__actions__ = eN(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (n.__chain__ = t),
                              n
                            );
                          }
                          return r.apply(e, nm([this.value()], arguments));
                        });
                  }),
                  e
                );
              },
              lv = M(function (e, t) {
                return e * t;
              }, 1),
              lh = function (e) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              },
              l_ = function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              };
            var lm = f ? f.iterator : void 0;
            let lg = function (e) {
                if (!e) return [];
                if (th(e)) return o2(e) ? nQ(e) : eN(e);
                if (lm && e[lm]) return l_(e[lm]());
                var t = it(e);
                return (
                  "[object Map]" == t ? iB : "[object Set]" == t ? iP : o9
                )(e);
              },
              lb = function () {
                void 0 === this.__values__ &&
                  (this.__values__ = lg(this.value()));
                var e = this.__index__ >= this.__values__.length,
                  t = e ? void 0 : this.__values__[this.__index__++];
                return { done: e, value: t };
              },
              ly = function (e, t) {
                var n = e.length;
                if (n) return e3((t += t < 0 ? n : 0), n) ? e[t] : void 0;
              },
              lx = function (e, t) {
                return e && e.length ? ly(e, G(t)) : void 0;
              },
              lj = function (e) {
                return (
                  (e = G(e)),
                  tp(function (t) {
                    return ly(t, e);
                  })
                );
              },
              lC = function (e, t) {
                return (
                  (t = nd(t, e)), null == (e = sh(e, t)) || delete e[np(aF(t))]
                );
              },
              lw = function (e) {
                return nA(e) ? void 0 : e;
              },
              lk = nj(function (e, t) {
                var n = {};
                if (null == e) return n;
                var r = !1;
                (t = k(t, function (t) {
                  return (t = nd(t, e)), r || (r = t.length > 1), t;
                })),
                  tu(e, r$(e), n),
                  r && (n = iw(n, 7, lw));
                for (var i = t.length; i--; ) lC(n, t[i]);
                return n;
              }),
              lS = function (e, t, n, r) {
                if (!P(e)) return e;
                t = nd(t, e);
                for (
                  var i = -1, a = t.length, o = a - 1, s = e;
                  null != s && ++i < a;

                ) {
                  var l = np(t[i]),
                    c = n;
                  if (
                    "__proto__" === l ||
                    "constructor" === l ||
                    "prototype" === l
                  )
                    break;
                  if (i != o) {
                    var u = s[l];
                    void 0 === (c = r ? r(u, l, s) : void 0) &&
                      (c = P(u) ? u : e3(t[i + 1]) ? [] : {});
                  }
                  tc(s, l, c), (s = s[l]);
                }
                return e;
              },
              lE = function (e, t, n) {
                for (var r = -1, i = t.length, a = {}; ++r < i; ) {
                  var o = t[r],
                    s = nv(e, o);
                  n(s, o) && lS(a, nd(o, e), s);
                }
                return a;
              },
              lN = function (e, t) {
                if (null == e) return {};
                var n = k(r$(e), function (e) {
                  return [e];
                });
                return (
                  (t = i9(t)),
                  lE(e, n, function (e, n) {
                    return t(e, n[0]);
                  })
                );
              },
              lA = function (e, t) {
                return lN(e, lh(i9(t)));
              },
              lO = function (e) {
                return nR(2, e);
              },
              lM = function (e, t) {
                var n = e.length;
                for (e.sort(t); n--; ) e[n] = e[n].value;
                return e;
              },
              lR = function (e, t) {
                if (e !== t) {
                  var n = void 0 !== e,
                    r = null === e,
                    i = e == e,
                    a = j(e),
                    o = void 0 !== t,
                    s = null === t,
                    l = t == t,
                    c = j(t);
                  if (
                    (!s && !c && !a && e > t) ||
                    (a && o && l && !s && !c) ||
                    (r && o && l) ||
                    (!n && l) ||
                    !i
                  )
                    return 1;
                  if (
                    (!r && !a && !c && e < t) ||
                    (c && n && i && !r && !a) ||
                    (s && n && i) ||
                    (!o && i) ||
                    !l
                  )
                    return -1;
                }
                return 0;
              },
              lT = function (e, t, n) {
                for (
                  var r = -1,
                    i = e.criteria,
                    a = t.criteria,
                    o = i.length,
                    s = n.length;
                  ++r < o;

                ) {
                  var l = lR(i[r], a[r]);
                  if (l) {
                    if (r >= s) return l;
                    return l * ("desc" == n[r] ? -1 : 1);
                  }
                }
                return e.index - t.index;
              },
              lL = function (e, t, n) {
                t = t.length
                  ? k(t, function (e) {
                      return S(e)
                        ? function (t) {
                            return nv(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [Y];
                var r = -1;
                return (
                  (t = k(t, tR(i9))),
                  lM(
                    ow(e, function (e, n, i) {
                      return {
                        criteria: k(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return lT(e, t, n);
                    },
                  )
                );
              },
              lI = function (e, t, n, r) {
                return null == e
                  ? []
                  : (S(t) || (t = null == t ? [] : [t]),
                    S((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
                    lL(e, t, n));
              },
              lB = function (e) {
                return nj(function (t) {
                  return (
                    (t = k(t, tR(i9))),
                    tp(function (n) {
                      var r = this;
                      return e(t, function (e) {
                        return ev(e, r, n);
                      });
                    })
                  );
                });
              },
              lP = lB(k);
            var lD = Math.min;
            let lz = tp(function (e, t) {
                var n = (t =
                  1 == t.length && S(t[0])
                    ? k(t[0], tR(i9))
                    : k(ny(t, 1), tR(i9))).length;
                return tp(function (r) {
                  for (var i = -1, a = lD(r.length, n); ++i < a; )
                    r[i] = t[i].call(this, r[i]);
                  return ev(e, this, r);
                });
              }),
              lF = lB(oi),
              lV = lB(iT);
            var lU = Math.floor;
            let lW = function (e, t) {
              var n = "";
              if (!e || t < 1 || t > 9007199254740991) return n;
              do t % 2 && (n += e), (t = lU(t / 2)) && (e += e);
              while (t);
              return n;
            };
            var lZ = i2("length"),
              lH = "\ud800-\udfff",
              lG = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              lq = "\ud83c[\udffb-\udfff]",
              lY = "[^" + lH + "]",
              lK = "(?:\ud83c[\udde6-\uddff]){2}",
              l$ = "[\ud800-\udbff][\udc00-\udfff]",
              lX = "(?:" + lG + "|" + lq + ")?",
              lQ = "[\\ufe0e\\ufe0f]?",
              lJ =
                "(?:\\u200d(?:" + [lY, lK, l$].join("|") + ")" + lQ + lX + ")*",
              l0 = RegExp(
                lq +
                  "(?=" +
                  lq +
                  ")|(?:" +
                  [lY + lG + "?", lG, lK, l$, "[" + lH + "]"].join("|") +
                  ")" +
                  (lQ + lX + lJ),
                "g",
              );
            let l1 = function (e) {
                for (var t = (l0.lastIndex = 0); l0.test(e); ) ++t;
                return t;
              },
              l3 = function (e) {
                return nV(e) ? l1(e) : lZ(e);
              };
            var l4 = Math.ceil;
            let l2 = function (e, t) {
              var n = (t = void 0 === t ? " " : O(t)).length;
              if (n < 2) return n ? lW(t, e) : t;
              var r = lW(t, l4(e / l3(t)));
              return nV(t) ? nz(nQ(r), 0, e).join("") : r.slice(0, e);
            };
            var l6 = Math.ceil,
              l9 = Math.floor;
            let l5 = function (e, t, n) {
                e = nu(e);
                var r = (t = G(t)) ? l3(e) : 0;
                if (!t || r >= t) return e;
                var i = (t - r) / 2;
                return l2(l9(i), n) + e + l2(l6(i), n);
              },
              l8 = function (e, t, n) {
                e = nu(e);
                var r = (t = G(t)) ? l3(e) : 0;
                return t && r < t ? e + l2(t - r, n) : e;
              },
              l7 = function (e, t, n) {
                e = nu(e);
                var r = (t = G(t)) ? l3(e) : 0;
                return t && r < t ? l2(t - r, n) + e : e;
              };
            var ce = /^\s+/,
              ct = d.parseInt;
            let cn = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                ct(nu(e).replace(ce, ""), t || 0)
              );
            };
            var cr = tp(function (e, t) {
              var n = e9(t, e0(cr));
              return ti(e, 32, void 0, t, n);
            });
            cr.placeholder = {};
            let ci = cr;
            var ca = tp(function (e, t) {
              var n = e9(t, e0(ca));
              return ti(e, 64, void 0, t, n);
            });
            ca.placeholder = {};
            let co = ca,
              cs = ac(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                },
              ),
              cl = nj(function (e, t) {
                return null == e
                  ? {}
                  : lE(e, t, function (t, n) {
                      return i3(e, n);
                    });
              }),
              cc = function (e) {
                for (var t, n = this; n instanceof ey; ) {
                  var r = eA(n);
                  (r.__index__ = 0),
                    (r.__values__ = void 0),
                    t ? (i.__wrapped__ = r) : (t = r);
                  var i = r;
                  n = n.__wrapped__;
                }
                return (i.__wrapped__ = e), t;
              },
              cu = function (e) {
                return function (t) {
                  return null == e ? void 0 : nv(e, t);
                };
              },
              cd = function (e, t, n, r) {
                for (var i = n - 1, a = e.length; ++i < a; )
                  if (r(e[i], t)) return i;
                return -1;
              };
            var cf = Array.prototype.splice;
            let cp = function (e, t, n, r) {
                var i = r ? cd : eK,
                  a = -1,
                  o = t.length,
                  s = e;
                for (e === t && (t = eN(t)), n && (s = k(e, tR(n))); ++a < o; )
                  for (
                    var l = 0, c = t[a], u = n ? n(c) : c;
                    (l = i(s, u, l, r)) > -1;

                  )
                    s !== e && cf.call(s, l, 1), cf.call(e, l, 1);
                return e;
              },
              cv = function (e, t) {
                return e && e.length && t && t.length ? cp(e, t) : e;
              },
              ch = tp(cv),
              c_ = function (e, t, n) {
                return e && e.length && t && t.length ? cp(e, t, i9(n, 2)) : e;
              },
              cm = function (e, t, n) {
                return e && e.length && t && t.length ? cp(e, t, void 0, n) : e;
              };
            var cg = Array.prototype.splice;
            let cb = function (e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                  var i = t[n];
                  if (n == r || i !== a) {
                    var a = i;
                    e3(i) ? cg.call(e, i, 1) : lC(e, i);
                  }
                }
                return e;
              },
              cy = nj(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = n_(e, t);
                return (
                  cb(
                    e,
                    k(t, function (e) {
                      return e3(e, n) ? +e : e;
                    }).sort(lR),
                  ),
                  r
                );
              });
            var cx = Math.floor,
              cj = Math.random;
            let cC = function (e, t) {
              return e + cx(cj() * (t - e + 1));
            };
            var cw = parseFloat,
              ck = Math.min,
              cS = Math.random;
            let cE = function (e, t, n) {
              if (
                (n && "boolean" != typeof n && t_(e, t, n) && (t = n = void 0),
                void 0 === n &&
                  ("boolean" == typeof t
                    ? ((n = t), (t = void 0))
                    : "boolean" == typeof e && ((n = e), (e = void 0))),
                void 0 === e && void 0 === t
                  ? ((e = 0), (t = 1))
                  : ((e = H(e)),
                    void 0 === t ? ((t = e), (e = 0)) : (t = H(t))),
                e > t)
              ) {
                var r = e;
                (e = t), (t = r);
              }
              if (n || e % 1 || t % 1) {
                var i = cS();
                return ck(
                  e + i * (t - e + cw("1e-" + ((i + "").length - 1))),
                  t,
                );
              }
              return cC(e, t);
            };
            var cN = Math.ceil,
              cA = Math.max;
            let cO = function (e, t, n, r) {
                for (
                  var i = -1, a = cA(cN((t - e) / (n || 1)), 0), o = Array(a);
                  a--;

                )
                  (o[r ? a : ++i] = e), (e += n);
                return o;
              },
              cM = function (e) {
                return function (t, n, r) {
                  return (
                    r &&
                      "number" != typeof r &&
                      t_(t, n, r) &&
                      (n = r = void 0),
                    (t = H(t)),
                    void 0 === n ? ((n = t), (t = 0)) : (n = H(n)),
                    (r = void 0 === r ? (t < n ? 1 : -1) : H(r)),
                    cO(t, n, r, e)
                  );
                };
              },
              cR = cM(),
              cT = cM(!0),
              cL = nj(function (e, t) {
                return ti(e, 256, void 0, void 0, void 0, t);
              }),
              cI = function (e, t, n, r, i) {
                return (
                  i(e, function (e, i, a) {
                    n = r ? ((r = !1), e) : t(n, e, i, a);
                  }),
                  n
                );
              },
              cB = function (e, t, n) {
                var r = S(e) ? n3 : cI,
                  i = arguments.length < 3;
                return r(e, i9(t, 4), n, i, as);
              },
              cP = function (e, t, n, r) {
                var i = null == e ? 0 : e.length;
                for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
                return n;
              },
              cD = function (e, t, n) {
                var r = S(e) ? cP : cI,
                  i = arguments.length < 3;
                return r(e, i9(t, 4), n, i, a0);
              },
              cz = function (e, t) {
                return (S(e) ? rU : ou)(e, lh(i9(t, 3)));
              },
              cF = function (e, t) {
                var n = [];
                if (!(e && e.length)) return n;
                var r = -1,
                  i = [],
                  a = e.length;
                for (t = i9(t, 3); ++r < a; ) {
                  var o = e[r];
                  t(o, r, e) && (n.push(o), i.push(r));
                }
                return cb(e, i), n;
              },
              cV = function (e, t, n) {
                return (
                  (t = (n ? t_(e, t, n) : void 0 === t) ? 1 : G(t)),
                  lW(nu(e), t)
                );
              },
              cU = function () {
                var e = arguments,
                  t = nu(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              },
              cW = function (e, t) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return tp(e, (t = void 0 === t ? t : G(t)));
              },
              cZ = function (e, t, n) {
                t = nd(t, e);
                var r = -1,
                  i = t.length;
                for (i || ((i = 1), (e = void 0)); ++r < i; ) {
                  var a = null == e ? void 0 : e[np(t[r])];
                  void 0 === a && ((r = i), (a = n)),
                    (e = K(a) ? a.call(e) : a);
                }
                return e;
              };
            var cH = Array.prototype.reverse;
            let cG = function (e) {
                return null == e ? e : cH.call(e);
              },
              cq = rE("round"),
              cY = function (e) {
                var t = e.length;
                return t ? e[cC(0, t - 1)] : void 0;
              },
              cK = function (e) {
                return (
                  S(e)
                    ? cY
                    : function (e) {
                        return cY(o9(e));
                      }
                )(e);
              },
              c$ = function (e, t) {
                var n = -1,
                  r = e.length,
                  i = r - 1;
                for (t = void 0 === t ? r : t; ++n < t; ) {
                  var a = cC(n, i),
                    o = e[a];
                  (e[a] = e[n]), (e[n] = o);
                }
                return (e.length = t), e;
              },
              cX = function (e, t) {
                var n = o9(e);
                return c$(n, rT(t, 0, n.length));
              },
              cQ = function (e, t, n) {
                return (
                  (t = (n ? t_(e, t, n) : void 0 === t) ? 1 : G(t)),
                  (S(e)
                    ? function (e, t) {
                        return c$(eN(e), rT(t, 0, e.length));
                      }
                    : cX)(e, t)
                );
              },
              cJ = function (e, t, n) {
                return null == e ? e : lS(e, t, n);
              },
              c0 = function (e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : void 0),
                  null == e ? e : lS(e, t, n, r)
                );
              },
              c1 = function (e) {
                return (
                  S(e)
                    ? function (e) {
                        return c$(eN(e));
                      }
                    : function (e) {
                        return c$(o9(e));
                      }
                )(e);
              },
              c3 = function (e) {
                if (null == e) return 0;
                if (th(e)) return o2(e) ? l3(e) : e.length;
                var t = it(e);
                return "[object Map]" == t || "[object Set]" == t
                  ? e.size
                  : tZ(e).length;
              },
              c4 = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? (n && "number" != typeof n && t_(e, t, n)
                      ? ((t = 0), (n = r))
                      : ((t = null == t ? 0 : G(t)),
                        (n = void 0 === n ? r : G(n))),
                    nD(e, t, n))
                  : [];
              },
              c2 = rj(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase();
              }),
              c6 = function (e, t) {
                var n;
                return (
                  as(e, function (e, r, i) {
                    return !(n = t(e, r, i));
                  }),
                  !!n
                );
              },
              c9 = function (e, t, n) {
                var r = S(e) ? iT : c6;
                return n && t_(e, t, n) && (t = void 0), r(e, i9(t, 3));
              },
              c5 = tp(function (e, t) {
                if (null == e) return [];
                var n = t.length;
                return (
                  n > 1 && t_(e, t[0], t[1])
                    ? (t = [])
                    : n > 2 && t_(t[0], t[1], t[2]) && (t = [t[0]]),
                  lL(e, ny(t, 1), [])
                );
              });
            var c8 = Math.floor,
              c7 = Math.min;
            let ue = function (e, t, n, r) {
                var i = 0,
                  a = null == e ? 0 : e.length;
                if (0 === a) return 0;
                for (
                  var o = (t = n(t)) != t,
                    s = null === t,
                    l = j(t),
                    c = void 0 === t;
                  i < a;

                ) {
                  var u = c8((i + a) / 2),
                    d = n(e[u]),
                    f = void 0 !== d,
                    p = null === d,
                    v = d == d,
                    h = j(d);
                  if (o) var _ = r || v;
                  else
                    _ = c
                      ? v && (r || f)
                      : s
                        ? v && f && (r || !p)
                        : l
                          ? v && f && !p && (r || !h)
                          : !p && !h && (r ? d <= t : d < t);
                  _ ? (i = u + 1) : (a = u);
                }
                return c7(a, 4294967294);
              },
              ut = function (e, t, n) {
                var r = 0,
                  i = null == e ? r : e.length;
                if ("number" == typeof t && t == t && i <= 2147483647) {
                  for (; r < i; ) {
                    var a = (r + i) >>> 1,
                      o = e[a];
                    null !== o && !j(o) && (n ? o <= t : o < t)
                      ? (r = a + 1)
                      : (i = a);
                  }
                  return i;
                }
                return ue(e, t, Y, n);
              },
              un = function (e, t) {
                return ut(e, t);
              },
              ur = function (e, t, n) {
                return ue(e, t, i9(n, 2));
              },
              ui = function (e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = ut(e, t);
                  if (r < n && ts(e[r], t)) return r;
                }
                return -1;
              },
              ua = function (e, t) {
                return ut(e, t, !0);
              },
              uo = function (e, t, n) {
                return ue(e, t, i9(n, 2), !0);
              },
              us = function (e, t) {
                if (null == e ? 0 : e.length) {
                  var n = ut(e, t, !0) - 1;
                  if (ts(e[n], t)) return n;
                }
                return -1;
              },
              ul = function (e, t) {
                for (var n = -1, r = e.length, i = 0, a = []; ++n < r; ) {
                  var o = e[n],
                    s = t ? t(o) : o;
                  if (!n || !ts(s, l)) {
                    var l = s;
                    a[i++] = 0 === o ? 0 : o;
                  }
                }
                return a;
              },
              uc = function (e) {
                return e && e.length ? ul(e) : [];
              },
              uu = function (e, t) {
                return e && e.length ? ul(e, i9(t, 2)) : [];
              },
              ud = function (e, t, n) {
                return (n &&
                  "number" != typeof n &&
                  t_(e, t, n) &&
                  (t = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0))
                  ? (e = nu(e)) &&
                    ("string" == typeof t || (null != t && !sV(t))) &&
                    !(t = O(t)) &&
                    nV(e)
                    ? nz(nQ(e), 0, n)
                    : e.split(t, n)
                  : [];
              };
            var uf = Math.max;
            let up = function (e, t) {
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  (t = null == t ? 0 : uf(G(t), 0)),
                  tp(function (n) {
                    var r = n[t],
                      i = nz(n, 0, t);
                    return r && nm(i, r), ev(e, this, i);
                  })
                );
              },
              uv = rj(function (e, t, n) {
                return e + (n ? " " : "") + n0(t);
              }),
              uh = function (e, t, n) {
                return (
                  (e = nu(e)),
                  (n = null == n ? 0 : rT(G(n), 0, e.length)),
                  (t = O(t)),
                  e.slice(n, n + t.length) == t
                );
              },
              u_ = function () {
                return {};
              },
              um = function () {
                return "";
              },
              ug = function () {
                return !0;
              },
              ub = M(function (e, t) {
                return e - t;
              }, 0),
              uy = function (e) {
                return e && e.length ? lr(e, Y) : 0;
              },
              ux = function (e, t) {
                return e && e.length ? lr(e, i9(t, 2)) : 0;
              },
              uj = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? nD(e, 1, t) : [];
              },
              uC = function (e, t, n) {
                return e && e.length
                  ? nD(e, 0, (t = n || void 0 === t ? 1 : G(t)) < 0 ? 0 : t)
                  : [];
              },
              uw = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? nD(
                      e,
                      (t = r - (t = n || void 0 === t ? 1 : G(t))) < 0 ? 0 : t,
                      r,
                    )
                  : [];
              },
              uk = function (e, t) {
                return e && e.length ? aG(e, i9(t, 3), !1, !0) : [];
              },
              uS = function (e, t) {
                return e && e.length ? aG(e, i9(t, 3)) : [];
              },
              uE = function (e, t) {
                return t(e), e;
              };
            var uN = Object.prototype,
              uA = uN.hasOwnProperty;
            let uO = function (e, t, n, r) {
              return void 0 === e || (ts(e, uN[n]) && !uA.call(r, n)) ? t : e;
            };
            var uM = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            };
            let uR = function (e) {
                return "\\" + uM[e];
              },
              uT = /<%=([\s\S]+?)%>/g,
              uL = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: uT,
                variable: "",
                imports: { _: { escape: oe } },
              };
            var uI = /\b__p \+= '';/g,
              uB = /\b(__p \+=) '' \+/g,
              uP = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              uD = /[()=,{}\[\]\/\s]/,
              uz = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              uF = /($^)/,
              uV = /['\n\r\u2028\u2029\\]/g,
              uU = Object.prototype.hasOwnProperty;
            let uW = function (e, t, n) {
                var r = uL.imports._.templateSettings || uL;
                n && t_(e, t, n) && (t = void 0),
                  (e = nu(e)),
                  (t = tJ({}, t, r, uO));
                var i,
                  a,
                  o = tJ({}, t.imports, r.imports, uO),
                  s = tH(o),
                  l = o6(o, s),
                  c = 0,
                  u = t.interpolate || uF,
                  d = "__p += '",
                  f = RegExp(
                    (t.escape || uF).source +
                      "|" +
                      u.source +
                      "|" +
                      (u === uT ? uz : uF).source +
                      "|" +
                      (t.evaluate || uF).source +
                      "|$",
                    "g",
                  ),
                  p = uU.call(t, "sourceURL")
                    ? "//# sourceURL=" +
                      (t.sourceURL + "").replace(/\s/g, " ") +
                      "\n"
                    : "";
                e.replace(f, function (t, n, r, o, s, l) {
                  return (
                    r || (r = o),
                    (d += e.slice(c, l).replace(uV, uR)),
                    n && ((i = !0), (d += "' +\n__e(" + n + ") +\n'")),
                    s && ((a = !0), (d += "';\n" + s + ";\n__p += '")),
                    r &&
                      (d +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (c = l + t.length),
                    t
                  );
                }),
                  (d += "';\n");
                var v = uU.call(t, "variable") && t.variable;
                if (v) {
                  if (uD.test(v))
                    throw Error(
                      "Invalid `variable` option passed into `_.template`",
                    );
                } else d = "with (obj) {\n" + d + "\n}\n";
                (d = (a ? d.replace(uI, "") : d)
                  .replace(uB, "$1")
                  .replace(uP, "$1;")),
                  (d =
                    "function(" +
                    (v || "obj") +
                    ") {\n" +
                    (v ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (i ? ", __e = _.escape" : "") +
                    (a
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    d +
                    "return __p\n}");
                var h = nM(function () {
                  return Function(s, p + "return " + d).apply(void 0, l);
                });
                if (((h.source = d), nO(h))) throw h;
                return h;
              },
              uZ = function (e, t, n) {
                var r = !0,
                  i = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  P(n) &&
                    ((r = "leading" in n ? !!n.leading : r),
                    (i = "trailing" in n ? !!n.trailing : i)),
                  ay(e, t, { leading: r, maxWait: t, trailing: i })
                );
              },
              uH = function (e, t) {
                return t(e);
              };
            var uG = Math.min;
            let uq = function (e, t) {
                if ((e = G(e)) < 1 || e > 9007199254740991) return [];
                var n = 4294967295,
                  r = uG(e, 4294967295);
                (t = aK(t)), (e -= 4294967295);
                for (var i = ty(r, t); ++n < e; ) t(n);
                return i;
              },
              uY = function () {
                return this;
              },
              uK = function (e, t) {
                var n = e;
                return (
                  n instanceof ex && (n = n.value()),
                  n3(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, nm([e], t.args));
                    },
                    n,
                  )
                );
              },
              u$ = function () {
                return uK(this.__wrapped__, this.__actions__);
              },
              uX = function (e) {
                return nu(e).toLowerCase();
              },
              uQ = function (e) {
                return S(e) ? k(e, np) : j(e) ? [e] : eN(nc(nu(e)));
              },
              uJ = function (e) {
                return e
                  ? rT(G(e), -9007199254740991, 9007199254740991)
                  : 0 === e
                    ? e
                    : 0;
              },
              u0 = function (e) {
                return nu(e).toUpperCase();
              },
              u1 = function (e, t, n) {
                var r = S(e),
                  i = r || tO(e) || tD(e);
                if (((t = i9(t, 4)), null == n)) {
                  var a = e && e.constructor;
                  n = i ? (r ? new a() : []) : P(e) && K(a) ? ed(nw(e)) : {};
                }
                return (
                  (i ? eH : aa)(e, function (e, r, i) {
                    return t(n, e, r, i);
                  }),
                  n
                );
              },
              u3 = function (e, t) {
                for (var n = e.length; n-- && eK(t, e[n], 0) > -1; );
                return n;
              },
              u4 = function (e, t) {
                for (
                  var n = -1, r = e.length;
                  ++n < r && eK(t, e[n], 0) > -1;

                );
                return n;
              },
              u2 = function (e, t, n) {
                if ((e = nu(e)) && (n || void 0 === t)) return B(e);
                if (!e || !(t = O(t))) return e;
                var r = nQ(e),
                  i = nQ(t),
                  a = u4(r, i),
                  o = u3(r, i) + 1;
                return nz(r, a, o).join("");
              },
              u6 = function (e, t, n) {
                if ((e = nu(e)) && (n || void 0 === t))
                  return e.slice(0, L(e) + 1);
                if (!e || !(t = O(t))) return e;
                var r = nQ(e),
                  i = u3(r, nQ(t)) + 1;
                return nz(r, 0, i).join("");
              };
            var u9 = /^\s+/;
            let u5 = function (e, t, n) {
              if ((e = nu(e)) && (n || void 0 === t)) return e.replace(u9, "");
              if (!e || !(t = O(t))) return e;
              var r = nQ(e),
                i = u4(r, nQ(t));
              return nz(r, i).join("");
            };
            var u8 = /\w*$/;
            let u7 = function (e, t) {
                var n = 30,
                  r = "...";
                if (P(t)) {
                  var i = "separator" in t ? t.separator : i;
                  (n = "length" in t ? G(t.length) : n),
                    (r = "omission" in t ? O(t.omission) : r);
                }
                var a = (e = nu(e)).length;
                if (nV(e)) {
                  var o = nQ(e);
                  a = o.length;
                }
                if (n >= a) return e;
                var s = n - l3(r);
                if (s < 1) return r;
                var l = o ? nz(o, 0, s).join("") : e.slice(0, s);
                if (void 0 === i) return l + r;
                if ((o && (s += l.length - s), sV(i))) {
                  if (e.slice(s).search(i)) {
                    var c,
                      u = l;
                    for (
                      i.global || (i = RegExp(i.source, nu(u8.exec(i)) + "g")),
                        i.lastIndex = 0;
                      (c = i.exec(u));

                    )
                      var d = c.index;
                    l = l.slice(0, void 0 === d ? s : d);
                  }
                } else if (e.indexOf(O(i), s) != s) {
                  var f = l.lastIndexOf(i);
                  f > -1 && (l = l.slice(0, f));
                }
                return l + r;
              },
              de = function (e) {
                return ta(e, 1);
              };
            var dt = n4({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              dn = /&(?:amp|lt|gt|quot|#39);/g,
              dr = RegExp(dn.source);
            let di = function (e) {
              return (e = nu(e)) && dr.test(e) ? e.replace(dn, dt) : e;
            };
            var da =
              rJ && 1 / iP(new rJ([, -0]))[1] == 1 / 0
                ? function (e) {
                    return new rJ(e);
                  }
                : ej;
            let ds = function (e, t, n) {
                var r = -1,
                  i = e$,
                  a = e.length,
                  o = !0,
                  s = [],
                  l = s;
                if (n) (o = !1), (i = aP);
                else if (a >= 200) {
                  var c = t ? null : da(e);
                  if (c) return iP(c);
                  (o = !1), (i = iL), (l = new iR());
                } else l = t ? [] : s;
                e: for (; ++r < a; ) {
                  var u = e[r],
                    d = t ? t(u) : u;
                  if (((u = n || 0 !== u ? u : 0), o && d == d)) {
                    for (var f = l.length; f--; ) if (l[f] === d) continue e;
                    t && l.push(d), s.push(u);
                  } else i(l, d, n) || (l !== s && l.push(d), s.push(u));
                }
                return s;
              },
              dl = tp(function (e) {
                return ds(ny(e, 1, aS, !0));
              }),
              dc = tp(function (e) {
                var t = aF(e);
                return aS(t) && (t = void 0), ds(ny(e, 1, aS, !0), i9(t, 2));
              }),
              du = tp(function (e) {
                var t = aF(e);
                return (
                  (t = "function" == typeof t ? t : void 0),
                  ds(ny(e, 1, aS, !0), void 0, t)
                );
              }),
              dd = function (e) {
                return e && e.length ? ds(e) : [];
              },
              df = function (e, t) {
                return e && e.length ? ds(e, i9(t, 2)) : [];
              },
              dp = function (e, t) {
                return (
                  (t = "function" == typeof t ? t : void 0),
                  e && e.length ? ds(e, void 0, t) : []
                );
              };
            var dv = 0;
            let dh = function (e) {
                var t = ++dv;
                return nu(e) + t;
              },
              d_ = function (e, t) {
                return null == e || lC(e, t);
              };
            var dm = Math.max;
            let dg = function (e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = rU(e, function (e) {
                    if (aS(e)) return (t = dm(e.length, t)), !0;
                  })),
                  ty(t, function (t) {
                    return k(e, i2(t));
                  })
                );
              },
              db = function (e, t) {
                if (!(e && e.length)) return [];
                var n = dg(e);
                return null == t
                  ? n
                  : k(n, function (e) {
                      return ev(t, void 0, e);
                    });
              },
              dy = function (e, t, n, r) {
                return lS(e, t, n(nv(e, t)), r);
              },
              dx = function (e, t, n) {
                return null == e ? e : dy(e, t, aK(n));
              },
              dj = function (e, t, n, r) {
                return (
                  (r = "function" == typeof r ? r : void 0),
                  null == e ? e : dy(e, t, aK(n), r)
                );
              },
              dC = rj(function (e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase();
              }),
              dw = function (e) {
                return null == e ? [] : o6(e, tX(e));
              },
              dk = tp(function (e, t) {
                return aS(e) ? aD(e, t) : [];
              }),
              dS = function (e, t) {
                return ci(aK(t), e);
              },
              dE = nj(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  i = function (t) {
                    return n_(t, e);
                  };
                return !(t > 1) &&
                  !this.__actions__.length &&
                  r instanceof ex &&
                  e3(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                      func: uH,
                      args: [i],
                      thisArg: void 0,
                    }),
                    new eE(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(void 0), e;
                    }))
                  : this.thru(i);
              }),
              dN = function () {
                return rA(this);
              },
              dA = function () {
                var e = this.__wrapped__;
                if (e instanceof ex) {
                  var t = e;
                  return (
                    this.__actions__.length && (t = new ex(this)),
                    (t = t.reverse()).__actions__.push({
                      func: uH,
                      args: [cG],
                      thisArg: void 0,
                    }),
                    new eE(t, this.__chain__)
                  );
                }
                return this.thru(cG);
              },
              dO = function (e, t, n) {
                var r = e.length;
                if (r < 2) return r ? ds(e[0]) : [];
                for (var i = -1, a = Array(r); ++i < r; )
                  for (var o = e[i], s = -1; ++s < r; )
                    s != i && (a[i] = aD(a[i] || o, e[s], t, n));
                return ds(ny(a, 1), t, n);
              },
              dM = tp(function (e) {
                return dO(rU(e, aS));
              }),
              dR = tp(function (e) {
                var t = aF(e);
                return aS(t) && (t = void 0), dO(rU(e, aS), i9(t, 2));
              }),
              dT = tp(function (e) {
                var t = aF(e);
                return (
                  (t = "function" == typeof t ? t : void 0),
                  dO(rU(e, aS), void 0, t)
                );
              }),
              dL = tp(dg),
              dI = function (e, t, n) {
                for (
                  var r = -1, i = e.length, a = t.length, o = {};
                  ++r < i;

                ) {
                  var s = r < a ? t[r] : void 0;
                  n(o, e[r], s);
                }
                return o;
              },
              dB = function (e, t) {
                return dI(e || [], t || [], tc);
              },
              dP = function (e, t) {
                return dI(e || [], t || [], lS);
              },
              dD = tp(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : void 0;
                return (
                  (n = "function" == typeof n ? (e.pop(), n) : void 0), db(e, n)
                );
              }),
              dz = {
                castArray: rw,
                clone: ik,
                cloneDeep: iS,
                cloneDeepWith: iE,
                cloneWith: iN,
                conformsTo: at,
                eq: ts,
                gt: o$,
                gte: oX,
                isArguments: tk,
                isArrayBuffer: sy,
                isArrayLike: th,
                isArrayLikeObject: aS,
                isBoolean: sx,
                isBuffer: tO,
                isDate: sC,
                isElement: sw,
                isEmpty: sS,
                isEqual: sE,
                isEqualWith: sN,
                isError: nO,
                isFinite: sO,
                isFunction: K,
                isInteger: sM,
                isLength: tv,
                isMap: im,
                isMatch: sR,
                isMatchWith: sT,
                isNaN: sI,
                isNative: sP,
                isNil: sD,
                isNull: sz,
                isNumber: sL,
                isObjectLike: x,
                isPlainObject: nA,
                isRegExp: sV,
                isSafeInteger: sU,
                isSet: ib,
                isString: o2,
                isSymbol: j,
                isTypedArray: tD,
                isUndefined: sW,
                isWeakMap: sZ,
                isWeakSet: sH,
                lt: s2,
                lte: s6,
                toArray: lg,
                toFinite: H,
                toLength: os,
                toNumber: W,
                toPlainObject: aN,
                toSafeInteger: uJ,
              },
              dF = {
                at: dE,
                chain: rA,
                commit: iA,
                next: lb,
                plant: cc,
                reverse: dA,
                tap: uE,
                toIterator: uY,
                value: u$,
                wrapperChain: dN,
              };
            var dV = Math.max,
              dU = Math.min;
            let dW = function (e, t, n) {
              for (var r = -1, i = n.length; ++r < i; ) {
                var a = n[r],
                  o = a.size;
                switch (a.type) {
                  case "drop":
                    e += o;
                    break;
                  case "dropRight":
                    t -= o;
                    break;
                  case "take":
                    t = dU(t, e + o);
                    break;
                  case "takeRight":
                    e = dV(e, t - o);
                }
              }
              return { start: e, end: t };
            };
            var dZ = Math.min,
              dH = Array.prototype,
              dG = Object.prototype.hasOwnProperty,
              dq = f ? f.iterator : void 0,
              dY = Math.max,
              dK = Math.min,
              d$ = function (e, t, n) {
                if (null == n) {
                  var r = P(t),
                    i = r && tH(t),
                    a = i && i.length && oW(t, i);
                  (a ? a.length : r) || ((n = t), (t = e), (e = this));
                }
                return lp(e, t, n);
              };
            (eR.after = q),
              (eR.ary = ta),
              (eR.assign = tq),
              (eR.assignIn = tQ),
              (eR.assignInWith = tJ),
              (eR.assignWith = t0),
              (eR.at = nC),
              (eR.before = nR),
              (eR.bind = nL),
              (eR.bindAll = nI),
              (eR.bindKey = nP),
              (eR.castArray = dz.castArray),
              (eR.chain = dF.chain),
              (eR.chunk = rR),
              (eR.compact = iO),
              (eR.concat = iM),
              (eR.cond = i5),
              (eR.conforms = ae),
              (eR.constant = eU),
              (eR.countBy = ad),
              (eR.create = af),
              (eR.curry = av),
              (eR.curryRight = a_),
              (eR.debounce = ay),
              (eR.defaults = aw),
              (eR.defaultsDeep = aT),
              (eR.defer = aI),
              (eR.delay = aB),
              (eR.difference = az),
              (eR.differenceBy = aV),
              (eR.differenceWith = aU),
              (eR.drop = aZ),
              (eR.dropRight = aH),
              (eR.dropRightWhile = aq),
              (eR.dropWhile = aY),
              (eR.fill = oc),
              (eR.filter = od),
              (eR.flatMap = oS),
              (eR.flatMapDeep = oN),
              (eR.flatMapDepth = oA),
              (eR.flatten = nx),
              (eR.flattenDeep = oM),
              (eR.flattenDepth = oR),
              (eR.flip = oT),
              (eR.flow = oB),
              (eR.flowRight = oP),
              (eR.fromPairs = oU),
              (eR.functions = oZ),
              (eR.functionsIn = oH),
              (eR.groupBy = oq),
              (eR.initial = st),
              (eR.intersection = sa),
              (eR.intersectionBy = so),
              (eR.intersectionWith = ss),
              (eR.invert = su),
              (eR.invertBy = sv),
              (eR.invokeMap = sg),
              (eR.iteratee = sG),
              (eR.keyBy = s$),
              (eR.keys = tH),
              (eR.keysIn = tX),
              (eR.map = ok),
              (eR.mapKeys = s9),
              (eR.mapValues = s5),
              (eR.matches = s8),
              (eR.matchesProperty = s7),
              (eR.memoize = no),
              (eR.merge = ll),
              (eR.mergeWith = aR),
              (eR.method = lc),
              (eR.methodOf = lu),
              (eR.mixin = d$),
              (eR.negate = lh),
              (eR.nthArg = lj),
              (eR.omit = lk),
              (eR.omitBy = lA),
              (eR.once = lO),
              (eR.orderBy = lI),
              (eR.over = lP),
              (eR.overArgs = lz),
              (eR.overEvery = lF),
              (eR.overSome = lV),
              (eR.partial = ci),
              (eR.partialRight = co),
              (eR.partition = cs),
              (eR.pick = cl),
              (eR.pickBy = lN),
              (eR.property = i6),
              (eR.propertyOf = cu),
              (eR.pull = ch),
              (eR.pullAll = cv),
              (eR.pullAllBy = c_),
              (eR.pullAllWith = cm),
              (eR.pullAt = cy),
              (eR.range = cR),
              (eR.rangeRight = cT),
              (eR.rearg = cL),
              (eR.reject = cz),
              (eR.remove = cF),
              (eR.rest = cW),
              (eR.reverse = cG),
              (eR.sampleSize = cQ),
              (eR.set = cJ),
              (eR.setWith = c0),
              (eR.shuffle = c1),
              (eR.slice = c4),
              (eR.sortBy = c5),
              (eR.sortedUniq = uc),
              (eR.sortedUniqBy = uu),
              (eR.split = ud),
              (eR.spread = up),
              (eR.tail = uj),
              (eR.take = uC),
              (eR.takeRight = uw),
              (eR.takeRightWhile = uk),
              (eR.takeWhile = uS),
              (eR.tap = dF.tap),
              (eR.throttle = uZ),
              (eR.thru = uH),
              (eR.toArray = dz.toArray),
              (eR.toPairs = a6),
              (eR.toPairsIn = a9),
              (eR.toPath = uQ),
              (eR.toPlainObject = dz.toPlainObject),
              (eR.transform = u1),
              (eR.unary = de),
              (eR.union = dl),
              (eR.unionBy = dc),
              (eR.unionWith = du),
              (eR.uniq = dd),
              (eR.uniqBy = df),
              (eR.uniqWith = dp),
              (eR.unset = d_),
              (eR.unzip = dg),
              (eR.unzipWith = db),
              (eR.update = dx),
              (eR.updateWith = dj),
              (eR.values = o9),
              (eR.valuesIn = dw),
              (eR.without = dk),
              (eR.words = ry),
              (eR.wrap = dS),
              (eR.xor = dM),
              (eR.xorBy = dR),
              (eR.xorWith = dT),
              (eR.zip = dL),
              (eR.zipObject = dB),
              (eR.zipObjectDeep = dP),
              (eR.zipWith = dD),
              (eR.entries = a6),
              (eR.entriesIn = a9),
              (eR.extend = tQ),
              (eR.extendWith = tJ),
              d$(eR, eR),
              (eR.add = R),
              (eR.attempt = nM),
              (eR.camelCase = rC),
              (eR.capitalize = n1),
              (eR.ceil = rN),
              (eR.clamp = rL),
              (eR.clone = dz.clone),
              (eR.cloneDeep = dz.cloneDeep),
              (eR.cloneDeepWith = dz.cloneDeepWith),
              (eR.cloneWith = dz.cloneWith),
              (eR.conformsTo = dz.conformsTo),
              (eR.deburr = n5),
              (eR.defaultTo = ax),
              (eR.divide = aW),
              (eR.endsWith = a3),
              (eR.eq = dz.eq),
              (eR.escape = oe),
              (eR.escapeRegExp = or),
              (eR.every = oo),
              (eR.find = oh),
              (eR.findIndex = ov),
              (eR.findKey = om),
              (eR.findLast = ox),
              (eR.findLastIndex = oy),
              (eR.findLastKey = oj),
              (eR.floor = oL),
              (eR.forEach = a$),
              (eR.forEachRight = a1),
              (eR.forIn = oD),
              (eR.forInRight = oz),
              (eR.forOwn = oF),
              (eR.forOwnRight = oV),
              (eR.get = nh),
              (eR.gt = dz.gt),
              (eR.gte = dz.gte),
              (eR.has = o0),
              (eR.hasIn = i3),
              (eR.head = oC),
              (eR.identity = Y),
              (eR.includes = o8),
              (eR.indexOf = se),
              (eR.inRange = o4),
              (eR.invoke = sm),
              (eR.isArguments = dz.isArguments),
              (eR.isArray = S),
              (eR.isArrayBuffer = dz.isArrayBuffer),
              (eR.isArrayLike = dz.isArrayLike),
              (eR.isArrayLikeObject = dz.isArrayLikeObject),
              (eR.isBoolean = dz.isBoolean),
              (eR.isBuffer = dz.isBuffer),
              (eR.isDate = dz.isDate),
              (eR.isElement = dz.isElement),
              (eR.isEmpty = dz.isEmpty),
              (eR.isEqual = dz.isEqual),
              (eR.isEqualWith = dz.isEqualWith),
              (eR.isError = dz.isError),
              (eR.isFinite = dz.isFinite),
              (eR.isFunction = dz.isFunction),
              (eR.isInteger = dz.isInteger),
              (eR.isLength = dz.isLength),
              (eR.isMap = dz.isMap),
              (eR.isMatch = dz.isMatch),
              (eR.isMatchWith = dz.isMatchWith),
              (eR.isNaN = dz.isNaN),
              (eR.isNative = dz.isNative),
              (eR.isNil = dz.isNil),
              (eR.isNull = dz.isNull),
              (eR.isNumber = dz.isNumber),
              (eR.isObject = P),
              (eR.isObjectLike = dz.isObjectLike),
              (eR.isPlainObject = dz.isPlainObject),
              (eR.isRegExp = dz.isRegExp),
              (eR.isSafeInteger = dz.isSafeInteger),
              (eR.isSet = dz.isSet),
              (eR.isString = dz.isString),
              (eR.isSymbol = dz.isSymbol),
              (eR.isTypedArray = dz.isTypedArray),
              (eR.isUndefined = dz.isUndefined),
              (eR.isWeakMap = dz.isWeakMap),
              (eR.isWeakSet = dz.isWeakSet),
              (eR.join = sY),
              (eR.kebabCase = sK),
              (eR.last = aF),
              (eR.lastIndexOf = s0),
              (eR.lowerCase = s1),
              (eR.lowerFirst = s3),
              (eR.lt = dz.lt),
              (eR.lte = dz.lte),
              (eR.max = lt),
              (eR.maxBy = ln),
              (eR.mean = lo),
              (eR.meanBy = ls),
              (eR.min = ld),
              (eR.minBy = lf),
              (eR.stubArray = rW),
              (eR.stubFalse = tS),
              (eR.stubObject = u_),
              (eR.stubString = um),
              (eR.stubTrue = ug),
              (eR.multiply = lv),
              (eR.nth = lx),
              (eR.noop = ej),
              (eR.now = am),
              (eR.pad = l5),
              (eR.padEnd = l8),
              (eR.padStart = l7),
              (eR.parseInt = cn),
              (eR.random = cE),
              (eR.reduce = cB),
              (eR.reduceRight = cD),
              (eR.repeat = cV),
              (eR.replace = cU),
              (eR.result = cZ),
              (eR.round = cq),
              (eR.sample = cK),
              (eR.size = c3),
              (eR.snakeCase = c2),
              (eR.some = c9),
              (eR.sortedIndex = un),
              (eR.sortedIndexBy = ur),
              (eR.sortedIndexOf = ui),
              (eR.sortedLastIndex = ua),
              (eR.sortedLastIndexBy = uo),
              (eR.sortedLastIndexOf = us),
              (eR.startCase = uv),
              (eR.startsWith = uh),
              (eR.subtract = ub),
              (eR.sum = uy),
              (eR.sumBy = ux),
              (eR.template = uW),
              (eR.times = uq),
              (eR.toFinite = dz.toFinite),
              (eR.toInteger = G),
              (eR.toLength = dz.toLength),
              (eR.toLower = uX),
              (eR.toNumber = dz.toNumber),
              (eR.toSafeInteger = dz.toSafeInteger),
              (eR.toString = dz.toString),
              (eR.toUpper = u0),
              (eR.trim = u2),
              (eR.trimEnd = u6),
              (eR.trimStart = u5),
              (eR.truncate = u7),
              (eR.unescape = di),
              (eR.uniqueId = dh),
              (eR.upperCase = dC),
              (eR.upperFirst = n0),
              (eR.each = a$),
              (eR.eachRight = a1),
              (eR.first = oC),
              d$(
                eR,
                ((l = {}),
                aa(eR, function (e, t) {
                  dG.call(eR.prototype, t) || (l[t] = e);
                }),
                l),
                { chain: !1 },
              ),
              (eR.VERSION = "4.17.21"),
              ((eR.templateSettings = uL).imports._ = eR),
              eH(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  eR[e].placeholder = eR;
                },
              ),
              eH(["drop", "take"], function (e, t) {
                (ex.prototype[e] = function (n) {
                  n = void 0 === n ? 1 : dY(G(n), 0);
                  var r = this.__filtered__ && !t ? new ex(this) : this.clone();
                  return (
                    r.__filtered__
                      ? (r.__takeCount__ = dK(n, r.__takeCount__))
                      : r.__views__.push({
                          size: dK(n, 4294967295),
                          type: e + (r.__dir__ < 0 ? "Right" : ""),
                        }),
                    r
                  );
                }),
                  (ex.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse();
                  });
              }),
              eH(["filter", "map", "takeWhile"], function (e, t) {
                var n = t + 1,
                  r = 1 == n || 3 == n;
                ex.prototype[e] = function (e) {
                  var t = this.clone();
                  return (
                    t.__iteratees__.push({ iteratee: i9(e, 3), type: n }),
                    (t.__filtered__ = t.__filtered__ || r),
                    t
                  );
                };
              }),
              eH(["head", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                ex.prototype[e] = function () {
                  return this[n](1).value()[0];
                };
              }),
              eH(["initial", "tail"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                ex.prototype[e] = function () {
                  return this.__filtered__ ? new ex(this) : this[n](1);
                };
              }),
              (ex.prototype.compact = function () {
                return this.filter(Y);
              }),
              (ex.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (ex.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (ex.prototype.invokeMap = tp(function (e, t) {
                return "function" == typeof e
                  ? new ex(this)
                  : this.map(function (n) {
                      return s_(n, e, t);
                    });
              })),
              (ex.prototype.reject = function (e) {
                return this.filter(lh(i9(e)));
              }),
              (ex.prototype.slice = function (e, t) {
                e = G(e);
                var n = this;
                return n.__filtered__ && (e > 0 || t < 0)
                  ? new ex(n)
                  : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                    void 0 !== t &&
                      (n = (t = G(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                    n);
              }),
              (ex.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (ex.prototype.toArray = function () {
                return this.take(4294967295);
              }),
              aa(ex.prototype, function (e, t) {
                var n = /^(?:filter|find|map|reject)|While$/.test(t),
                  r = /^(?:head|last)$/.test(t),
                  i = eR[r ? "take" + ("last" == t ? "Right" : "") : t],
                  a = r || /^find/.test(t);
                i &&
                  (eR.prototype[t] = function () {
                    var t = this.__wrapped__,
                      o = r ? [1] : arguments,
                      s = t instanceof ex,
                      l = o[0],
                      c = s || S(t),
                      u = function (e) {
                        var t = i.apply(eR, nm([e], o));
                        return r && d ? t[0] : t;
                      };
                    c &&
                      n &&
                      "function" == typeof l &&
                      1 != l.length &&
                      (s = c = !1);
                    var d = this.__chain__,
                      f = !!this.__actions__.length,
                      p = a && !d,
                      v = s && !f;
                    if (!a && c) {
                      t = v ? t : new ex(this);
                      var h = e.apply(t, o);
                      return (
                        h.__actions__.push({
                          func: uH,
                          args: [u],
                          thisArg: void 0,
                        }),
                        new eE(h, d)
                      );
                    }
                    return p && v
                      ? e.apply(this, o)
                      : ((h = this.thru(u)),
                        p ? (r ? h.value()[0] : h.value()) : h);
                  });
              }),
              eH(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var t = dH[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    r = /^(?:pop|shift)$/.test(e);
                  eR.prototype[e] = function () {
                    var e = arguments;
                    if (r && !this.__chain__) {
                      var i = this.value();
                      return t.apply(S(i) ? i : [], e);
                    }
                    return this[n](function (n) {
                      return t.apply(S(n) ? n : [], e);
                    });
                  };
                },
              ),
              aa(ex.prototype, function (e, t) {
                var n = eR[t];
                if (n) {
                  var r = n.name + "";
                  dG.call(ew, r) || (ew[r] = []),
                    ew[r].push({ name: t, func: n });
                }
              }),
              (ew[e5(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
              (ex.prototype.clone = function () {
                var e = new ex(this.__wrapped__);
                return (
                  (e.__actions__ = eN(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = eN(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = eN(this.__views__)),
                  e
                );
              }),
              (ex.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new ex(this);
                  (e.__dir__ = -1), (e.__filtered__ = !0);
                } else (e = this.clone()), (e.__dir__ *= -1);
                return e;
              }),
              (ex.prototype.value = function () {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  n = S(e),
                  r = t < 0,
                  i = n ? e.length : 0,
                  a = dW(0, i, this.__views__),
                  o = a.start,
                  s = a.end,
                  l = s - o,
                  c = r ? s : o - 1,
                  u = this.__iteratees__,
                  d = u.length,
                  f = 0,
                  p = dZ(l, this.__takeCount__);
                if (!n || (!r && i == l && p == l))
                  return uK(e, this.__actions__);
                var v = [];
                e: for (; l-- && f < p; ) {
                  for (var h = -1, _ = e[(c += t)]; ++h < d; ) {
                    var m = u[h],
                      g = m.iteratee,
                      b = m.type,
                      y = g(_);
                    if (2 == b) _ = y;
                    else if (!y) {
                      if (1 == b) continue e;
                      break e;
                    }
                  }
                  v[f++] = _;
                }
                return v;
              }),
              (eR.prototype.at = dF.at),
              (eR.prototype.chain = dF.wrapperChain),
              (eR.prototype.commit = dF.commit),
              (eR.prototype.next = dF.next),
              (eR.prototype.plant = dF.plant),
              (eR.prototype.reverse = dF.reverse),
              (eR.prototype.toJSON =
                eR.prototype.valueOf =
                eR.prototype.value =
                  dF.value),
              (eR.prototype.first = eR.prototype.head),
              dq && (eR.prototype[dq] = dF.toIterator);
            let dX = eR; /**
             * @license
             * Lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="es" -o ./`
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
          },
        },
        s = {};
      function l(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = (s[e] = { exports: {} });
        return o[e].call(n.exports, n, n.exports, l), n.exports;
      }
      (l.d = (e, t) => {
        for (var n in t)
          l.o(t, n) &&
            !l.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (c.S = void 0),
        (r = l(8583)),
        Object.defineProperty(c, "S", {
          enumerable: !0,
          get: function () {
            return r.OverlayScroll;
          },
        });
      var u = c.S;
      c.X;
    },
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, n) => {
          let r = (r) => {
            let i = (r + e / 30) % 12;
            return (
              n -
              t * Math.min(n, 1 - n) * Math.max(-1, Math.min(i - 3, 9 - i, 1))
            );
          };
          return [r(0), r(8), r(4)];
        });
    },
    43055: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let r = n(83664),
        i = n(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, i.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : r.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: n, collectionHue: i, energy: a, backgroundColor: o } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(i) };
          return (
            n && (s.hue = n),
            a && (s.energy = (a + 1) * r.ENERGY_FACTOR),
            o && (s.backgroundColor = o),
            s
          );
        });
    },
    97456: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    83664: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_PLAYING_ENERGY =
          t.DEFAULT_NOT_PLAYING_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = window.VIBE_ANIMATION_MAX_FPS ?? 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_NOT_PLAYING_ENERGY = 0.2),
        (t.DEFAULT_PLAYING_ENERGY = 0.6),
        (t.ENERGY_FACTOR = 0.4);
    },
    47456: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let i = n(63955),
        a = n(97456),
        o = n(83664),
        s = n(80749);
      class l {
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let n = (0, i.adjustHue)(e),
            r = (0, i.safeHue)(n + (0, a.randomNumber)(40, 80), n),
            o = (0, i.adjustHue)(t);
          this.topStart.update(n),
            this.topEnd.update(
              (0, i.safeHue)(n + (0, a.randomNumber)(30, 40), n),
            ),
            this.middleStart.update(r),
            this.middleEnd.update(
              (0, i.safeHue)(r + (0, a.randomNumber)(30, 40), n),
            ),
            this.bottomStart.update(o),
            this.bottomEnd.update(
              (0, i.safeHue)(o + (0, a.randomNumber)(30, 40), n),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
        constructor(e) {
          r._(this, "hue", o.DEFAULT_HUE),
            r._(this, "collectionHue", o.DEFAULT_COLLECTION_HUE),
            r._(this, "topStart", void 0),
            r._(this, "topEnd", void 0),
            r._(this, "middleStart", void 0),
            r._(this, "middleEnd", void 0),
            r._(this, "bottomStart", void 0),
            r._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, i.adjustHue)(e),
            n = (0, i.safeHue)(t + (0, a.randomNumber)(30, 40), t);
          (this.topStart = new s.RGB(50)),
            (this.topEnd = new s.RGB(50)),
            (this.middleStart = new s.RGB(300)),
            (this.middleEnd = new s.RGB(320)),
            (this.bottomStart = new s.RGB(t)),
            (this.bottomEnd = new s.RGB(n));
        }
      }
      t.Color = l;
    },
    69407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class i {
        clamp(e, t, n) {
          return Math.min(Math.max(e, t), n);
        }
        get value() {
          return this.formatter
            ? this.formatter(this.currentValue)
            : this.currentValue;
        }
        update(e) {
          (this.targetValue = e), (this.elapsedTime = 0);
        }
        next(e) {
          let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
          return (
            (this.elapsedTime += e),
            (this.currentValue =
              this.currentValue + (this.targetValue - this.currentValue) * t),
            this.currentValue
          );
        }
        constructor(e, t, n, i) {
          r._(this, "currentValue", void 0),
            r._(this, "targetValue", void 0),
            r._(this, "elapsedTime", void 0),
            r._(this, "duration", void 0),
            r._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = n),
            (this.elapsedTime = 0),
            (this.formatter = i);
        }
      }
      t.DynamicValue = i;
    },
    19434: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let i = n(26716),
        a = n(43055),
        o = n(83664),
        s = n(52999),
        l = n(98355),
        c = n(61939),
        u = n(49198);
      class d {
        get rendererOptions() {
          let { width: e, height: t } = this.uniforms.size;
          return {
            alpha: !1,
            antialias: !1,
            preserveDrawingBuffer: !1,
            width: e,
            height: t,
          };
        }
        get vertexAndFragment() {
          return { vertex: s.VertexShaderV2, fragment: s.FragmentShaderV2 };
        }
        setupListeners() {
          document.addEventListener(
            "visibilitychange",
            this.handleOnVisibilityChange,
          );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new i.Plane(e, { width: 2, height: 2 }),
            n = new i.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new i.Mesh(e, { geometry: t, program: n }).setParent(this.scene), n
          );
        }
        render() {
          if (window.VIBE_ANIMATION_DISABLE_RENDERING ?? false) return;
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyser),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(l.RenderState.ACTIVE_TAB)
            : this.disableRender(l.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          Object.values(this.renderState).every((e) => e)
            ? this.ticker.start()
            : this.ticker.stop();
        }
        applySettings() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              hue: t,
              collectionHue: n,
              energy: r,
              backgroundColor: i,
            } = (0, a.normalizeSettings)(e);
          t && n && this.uniforms.updateColor(t, n),
            r && this.uniforms.updateEnergy(r),
            i && this.uniforms.updateBackgroundColor(i);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          var t;
          let n = {
            ...e,
            energy:
              null !== (t = e.energy) && void 0 !== t
                ? t
                : o.DEFAULT_PLAYING_ENERGY,
          };
          this.uniforms.updatePlayingState(!0), this.applySettings(n);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(o.DEFAULT_NOT_PLAYING_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnVisibilityChange &&
            document.removeEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        constructor(e, t, n) {
          r._(this, "analyser", void 0),
            r._(this, "ticker", void 0),
            r._(this, "scene", new i.Transform()),
            r._(this, "shader", void 0),
            r._(this, "renderer", void 0),
            r._(this, "uniforms", void 0),
            r._(this, "renderState", {
              [l.RenderState.ACTIVE_TAB]: !0,
              [l.RenderState.BLOCK_VISIBILITY]: !0,
              [l.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new u.Uniforms((0, a.normalizeCollectionHue)(n))),
            (this.renderer = new i.Renderer(this.rendererOptions)),
            (this.ticker = new c.Ticker(o.MAX_FPS, this.render.bind(this))),
            (this.analyser = t),
            this.createElement(e),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = d;
    },
    80749: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let i = n(63955),
        a = n(83664),
        o = n(69407);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, i.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          r._(this, "r", void 0),
            r._(this, "g", void 0),
            r._(this, "b", void 0);
          let t = (0, i.hsl2rgb)(e, a.DEFAULT_SATURATION, a.DEFAULT_LIGHTNESS);
          (this.r = new o.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new o.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new o.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = s;
    },
    61939: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class i {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            n = (r) => {
              this.requestId = requestAnimationFrame(n);
              let i = r - e;
              i >= t - 0.1 && ((e = r - (i % t)), this.render(i));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(n));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          r._(this, "fps", void 0),
            r._(this, "render", void 0),
            r._(this, "isActive", !1),
            r._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = i;
    },
    49198: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let i = n(26716),
        a = n(83664),
        o = n(47456),
        s = n(69407);
      class l {
        toValue(e) {
          return { value: e };
        }
        get size() {
          return { width: this.width, height: this.height };
        }
        updateSize() {
          (this.width = Math.min(window.innerWidth * this.quality, 800)),
            (this.height = Math.min(window.innerHeight * this.quality, 800));
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new i.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
          this.trackEnergy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.trackEnergy.next(e),
            this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let n = t.getAverageFrequencies({ low: 0, high: 450 }),
              r = t.getAverageFrequencies({ low: 400, high: 5e3 }),
              i = t.getAverageFrequencies({ low: 5e3, high: 20e3 });
            let intensity =
              ((n + r * 10.2 + i * 33.3) / 25) *
              (window.VIBE_ANIMATION_INTENSITY_COEFFICIENT ?? 1);
            //console.debug(this.trackEnergy.value, this.energy.value, intensity);
            this.energy.update(this.trackEnergy.value + intensity);
            this.energy.next(e),
              this.trackEnergy.next(e),
              this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                n * this.audioLowRatio.value,
                r * this.audioMiddleRatio.value,
                i * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new i.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
        constructor(e) {
          r._(this, "isPlaying", !1),
            r._(this, "quality", 0.6),
            r._(this, "background", new i.Vec3(0, 0, 0)),
            r._(
              this,
              "energy",
              new s.DynamicValue(
                a.DEFAULT_NOT_PLAYING_ENERGY,
                a.DEFAULT_NOT_PLAYING_ENERGY,
                250,
              ),
            ),
            r._(
              this,
              "trackEnergy",
              new s.DynamicValue(
                a.DEFAULT_NOT_PLAYING_ENERGY,
                a.DEFAULT_NOT_PLAYING_ENERGY,
                1e3,
              ),
            ),
            r._(this, "time", Math.floor(3600 * Math.random())),
            r._(this, "color", void 0),
            r._(this, "rotation", [
              new i.Vec3(-0.3, 0.3, 0.2),
              new i.Vec3(-0.3, -0.3, -0.2),
              new i.Vec3(-0.3, -0.3, 0.2),
            ]),
            r._(this, "audio", [0, 0, 0]),
            r._(this, "audioLowRatio", new s.DynamicValue(0, 0, 1e3)),
            r._(this, "audioMiddleRatio", new s.DynamicValue(0, 0, 1e3)),
            r._(this, "audioHighRatio", new s.DynamicValue(0, 0, 1e3)),
            r._(this, "reactTop", new s.DynamicValue(0, 0, 400)),
            r._(this, "reactMiddle", new s.DynamicValue(0, 0, 400)),
            r._(this, "reactBottom", new s.DynamicValue(0, 0, 400)),
            r._(this, "point", [0, 0]),
            r._(this, "interaction", 0),
            r._(this, "width", 0),
            r._(this, "height", 0),
            (this.color = new o.Color(e)),
            this.updateSize();
        }
      }
      t.Uniforms = l;
    },
    53367: function (e, t, n) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.kB = t.wX = void 0;
      var r = n(63955);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return r.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return r.adjustHue;
          },
        });
      var i = n(19434);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return i.VibeAnimationRenderer;
        },
      });
      var a = n(98355);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return a.RenderState;
        },
      });
      var o = n(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return o.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return o.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    52999: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.5;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.5;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    98355: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((r = n || (t.RenderState = n = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (r.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (r.MANUAL = "MANUAL");
    },
    29021: function (e, t, n) {
      "use strict";
      n.d(t, {
        DefaultLayout: function () {
          return nI;
        },
      });
      var r,
        i,
        a,
        o,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        v,
        h,
        _,
        m,
        g,
        b,
        y,
        x,
        j,
        C,
        w,
        k,
        S,
        E,
        N,
        A,
        O = n(9753),
        M = n(60836),
        R = n(9544),
        T = n(74717),
        L = n(69863),
        I = n(98639),
        B = (n(1263), n(37117)),
        P = n(80542),
        D = n(76873),
        z = n(79756),
        F = n.n(z);
      let V = (0, R.Pi)((e) => {
          let { className: t, forwardRef: n } = e,
            { experiments: r } = (0, D.oR4)(),
            { formatMessage: i } = (0, P.Z)(),
            { render: a } = (0, D.MuT)(),
            [o, s] = (0, I.useState)(!0),
            l = (0, I.useMemo)(
              () =>
                r.checkExperiment(D.peG.WebNextAdvertTest, "on")
                  ? "R-A-740891-2"
                  : "R-I-136563-11",
              [r],
            ),
            c = (0, D.x4R)(l);
          return (
            (0, I.useEffect)(() => {
              a(
                {
                  blockId: l,
                  renderTo: c,
                  async: !0,
                  onError: () => {
                    s(!1);
                  },
                },
                () => {
                  s(!1);
                },
              );
            }, [l, c, a]),
            (0, O.jsx)("section", {
              className: (0, M.W)(F().root, t, { [F().root_hidden]: !o }),
              "aria-label": i({ id: "advert.banner" }),
              ref: n,
              children: (0, O.jsx)("div", { id: c, className: F().content }),
            })
          );
        }),
        U = (0, I.forwardRef)((e, t) => (0, O.jsx)(V, { forwardRef: t, ...e })),
        W = ["album", "users", "artist", "chart"],
        Z = () => {
          let e = (0, T.usePathname)();
          return (0, I.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && W.includes(t);
          }, [e]);
        };
      var H = n(3924),
        G = n.n(H);
      G().secondaryEnter, G().secondaryEnterActive;
      let q = (0, R.Pi)((e) => {
        let { className: t, children: n } = e;
        (0, D.uK4)();
        let {
            setContentRef: r,
            setContentRootRef: i,
            setSideBannerRef: a,
          } = (0, D.$Y6)(),
          { isFreemium: o } = (0, D.NMB)(),
          { user: s, settings: l } = (0, D.oR4)(),
          c = !s.isAuthorized || o;
        return (
          l.layout,
          D.t8m.Mobile,
          Z(),
          (0, I.useRef)(null),
          (0, O.jsxs)("div", {
            className: (0, M.W)(G().rootOld, t),
            ref: i,
            children: [
              (0, O.jsx)("main", {
                className: G().main,
                ref: r,
                children: (0, O.jsx)(I.Suspense, { children: n }),
              }),
              c && (0, O.jsx)(U, { className: G().sideBanner, ref: a }),
            ],
          })
        );
      });
      var Y = n(31490),
        K = n(89352),
        $ = n(3084),
        X = n(2570),
        Q = n(45578),
        J = n.n(Q);
      let ee = (0, R.Pi)((e) => {
          let { children: t, link: n } = e,
            {
              currentTrackInfo: { modal: r },
            } = (0, D.oR4)();
          return n
            ? (0, O.jsx)($.rU, {
                className: J().link,
                href: n,
                onClick: r.close,
                children: (0, O.jsx)(X.Caption, {
                  variant: "div",
                  size: "l",
                  children: t,
                }),
              })
            : (0, O.jsx)(X.Caption, { variant: "div", size: "l", children: t });
        }),
        et = (e) => {
          let { title: t, description: n, children: r, link: i } = e;
          return n || r
            ? (0, O.jsxs)("div", {
                className: J().infoBlock,
                children: [
                  t &&
                    (0, O.jsx)(X.Heading, {
                      variant: "h4",
                      className: J().infoTitle,
                      children: t,
                    }),
                  (0, O.jsx)(ee, { link: i, children: n || r }),
                ],
              })
            : null;
        },
        en = (0, R.Pi)(() => {
          var e, t;
          let { formatMessage: n } = (0, P.Z)(),
            { currentTrackInfo: r } = (0, D.oR4)(),
            { fullTrack: i } = r;
          return (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(et, {
                children: null == i ? void 0 : i.shortDescription,
              }),
              (0, O.jsx)(et, {
                title: n({ id: "entity-names.audiobook" }),
                description:
                  null == i
                    ? void 0
                    : null === (e = i.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == i
                    ? void 0
                    : null === (t = i.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        });
      var er = n(45919);
      let ei = (0, R.Pi)(() => {
          var e, t;
          let { formatMessage: n } = (0, P.Z)(),
            { currentTrackInfo: r } = (0, D.oR4)(),
            i = r.fullTrack,
            a = (0, I.useMemo)(
              () =>
                r.fullDescription
                  ? (0, O.jsx)("span", {
                      className: J().text,
                      dangerouslySetInnerHTML: {
                        __html: (0, er.SK)(r.fullDescription),
                      },
                    })
                  : null == i
                    ? void 0
                    : i.shortDescription,
              [null == i ? void 0 : i.shortDescription, r.fullDescription],
            );
          return (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(et, { children: a }),
              (0, O.jsx)(et, {
                title: n({ id: "entity-names.podcast" }),
                description:
                  null == i
                    ? void 0
                    : null === (e = i.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == i
                    ? void 0
                    : null === (t = i.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        }),
        ea = (0, R.Pi)(() => {
          var e, t, n;
          let { formatMessage: r } = (0, P.Z)(),
            { notify: i } = (0, D.d$W)(),
            { contentRef: a } = (0, D.$Y6)(),
            {
              currentTrackInfo: o,
              settings: s,
              fullscreenPlayer: l,
            } = (0, D.oR4)(),
            { modal: c } = o,
            u = s.layout === D.t8m.Mobile,
            d = o.isUGC,
            f = s.platform === D.t4T.WINDOWS;
          d && o.isTrackIdle && o.getTrackMeta(),
            o.fullTrack || !o.isTrackIdle || d || o.getFullTrack(),
            !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
            ((null === (e = o.fullTrack) || void 0 === e
              ? void 0
              : e.isTrackPodcast) ||
              (null === (n = o.fullTrack) || void 0 === n
                ? void 0
                : null === (t = n.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast)) &&
              o.getFullDescription(),
            (0, I.useEffect)(
              () => () => {
                c.close(), o.reset();
              },
              [o, c],
            );
          let p = (0, I.useCallback)(() => {
              c.close(), o.reset();
            }, [o, c]),
            v = (0, I.useCallback)(
              (e) => {
                var t;
                e || o.reset(),
                  null === (t = c.onOpenChange) || void 0 === t || t.call(c, e);
              },
              [o, c],
            );
          o.isRejected &&
            (p(),
            i(
              (0, O.jsx)($.Q, {
                error: r({ id: "error-messages.error-during-action" }),
              }),
              { containerId: D.W$x.ERROR },
            ));
          let h = o.fullTrack,
            _ = null == h ? void 0 : h.isExplicit,
            m = null == h ? void 0 : h.trackExplicitMark,
            g = (0, I.useMemo)(() => {
              if (h)
                return (0, O.jsxs)("span", {
                  children: [
                    h.title,
                    h.version &&
                      (0, O.jsx)("span", {
                        className: J().version,
                        children: h.version,
                      }),
                    _ &&
                      m &&
                      (0, O.jsx)($.$i, {
                        className: (0, M.W)(J().explicitMark, J().important, {
                          [J().explicit]: !h.isTrackNonMusic,
                        }),
                        iconSize: "xxs",
                        variant: m,
                      }),
                  ],
                });
            }, [h, m, _]),
            b = (0, I.useMemo)(() => {
              var e;
              return (null == h ? void 0 : h.type) === Y.Vc.AUDIOBOOK
                ? (0, O.jsx)(en, {})
                : (null == h ? void 0 : h.isTrackPodcast) ||
                    (null == h
                      ? void 0
                      : null === (e = h.mainAlbum) || void 0 === e
                        ? void 0
                        : e.isPodcast)
                  ? (0, O.jsx)(ei, {})
                  : void 0;
            }, [h]),
            y = (0, I.useMemo)(() => {
              var e;
              return (
                null === (e = o.credits) || void 0 === e ? void 0 : e.length
              )
                ? o.credits.map((e) => {
                    let { title: t, value: n } = e;
                    return (0, O.jsx)(et, { title: t, description: n }, t);
                  })
                : null;
            }, [o.credits]);
          return (0, O.jsx)(K.u, {
            placement: u ? "default" : "right",
            open: c.isOpened,
            onClose: p,
            contentClassName: J().modalContent,
            title: g,
            headerClassName: J().header,
            className: (0, M.W)(J().root, {
              [J().root_withFullscreen]: l.modal.isOpened,
              [J().root_withWindows]: f,
            }),
            overlayClassName: J().overlay,
            onOpenChange: v,
            labelClose: r({ id: "interface-actions.close" }),
            portalNode: u || l.modal.isOpened ? null : a,
            children: (0, O.jsxs)("div", {
              className: J().content,
              children: [
                (o.isTrackLoading || o.isTrackRejected) &&
                  (0, O.jsx)($.AH, { textClassName: J().textShimmer }),
                b,
                (o.isCreditsLoading || o.isCreditsRejected) &&
                  (0, O.jsx)($.AH, { textClassName: J().textShimmer }),
                y,
              ],
            }),
          });
        }),
        eo = (0, R.Pi)(() => {
          let { settings: e } = (0, D.oR4)();
          return e.layout === D.t8m.Mobile ? null : (0, O.jsx)(ea, {});
        });
      var es = n(23881),
        el = n(48508),
        ec = n.n(el);
      let eu = (0, R.Pi)(() => {
        let { formatMessage: e } = (0, P.Z)(),
          { notify: t } = (0, D.d$W)(),
          { contentRef: n } = (0, D.$Y6)(),
          { trackLyrics: r, settings: i, fullscreenPlayer: a } = (0, D.oR4)(),
          { modal: o, track: s } = r,
          l = null == s ? void 0 : s.isExplicit,
          c = null == s ? void 0 : s.trackExplicitMark,
          u = i.layout === D.t8m.Mobile;
        r.isNeededToLoad && s && r.getLyrics(s.id),
          (0, I.useEffect)(
            () => () => {
              r.reset();
            },
            [r],
          ),
          (0, I.useEffect)(() => {
            o.isOpened &&
              s &&
              r.sendViews({
                trackId: String(s.id),
                albumId: String(s.albumId),
              });
          }, [r.isResolve, o.isOpened, r, s]);
        let d = (0, I.useCallback)(() => {
            o.close(), r.reset();
          }, [r, o]),
          f = (0, I.useCallback)(
            (e) => {
              var t;
              e || r.reset(),
                null === (t = o.onOpenChange) || void 0 === t || t.call(o, e);
            },
            [r, o],
          );
        r.isRejected &&
          (d(),
          t(
            (0, O.jsx)($.Q, {
              error: e({ id: "error-messages.error-during-action" }),
            }),
            { containerId: D.W$x.ERROR },
          ));
        let p = (0, I.useMemo)(() => {
            if (s)
              return (0, O.jsxs)("span", {
                ...(0, es.BA)(es.QM.content.TRACK_LYRICS_TITLE),
                children: [
                  s.title,
                  s.version &&
                    (0, O.jsx)("span", {
                      className: ec().version,
                      children: s.version,
                    }),
                  l &&
                    c &&
                    (0, O.jsx)($.$i, {
                      className: (0, M.W)(ec().explicitMark, ec().important),
                      iconSize: "xxs",
                      variant: c,
                    }),
                ],
              });
          }, [
            s,
            null == s ? void 0 : s.title,
            null == s ? void 0 : s.version,
            l,
            c,
          ]),
          v = (0, I.useMemo)(
            () =>
              (r.isLoading || r.isRejected) && !r.isPrevTrack
                ? (0, O.jsx)($.Yh, { count: 25, isActive: !0 })
                : (0, O.jsxs)(I.Fragment, {
                    children: [
                      r.lyrics,
                      (0, O.jsxs)("div", {
                        className: ec().writers,
                        children: [
                          r.hasWriters &&
                            (0, O.jsx)(X.Caption, {
                              variant: "div",
                              size: "l",
                              weight: "medium",
                              ...(0, es.BA)(es.QM.content.TRACK_LYRICS_AUTHORS),
                              children: e(
                                { id: "entity-names.authors" },
                                { authors: r.writersNames },
                              ),
                            }),
                          r.major &&
                            (0, O.jsx)(X.Caption, {
                              variant: "div",
                              size: "l",
                              weight: "medium",
                              ...(0, es.BA)(es.QM.content.TRACK_LYRICS_SOURCE),
                              children: e(
                                { id: "entity-names.source" },
                                { source: r.major.name },
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
            [
              e,
              r.hasWriters,
              r.isLoading,
              r.isPrevTrack,
              r.isRejected,
              r.lyrics,
              r.major,
              r.writersNames,
            ],
          );
        return (0, O.jsx)(K.u, {
          size: "fitContent",
          placement: u ? "default" : "right",
          open: o.isOpened,
          onOpenChange: f,
          onClose: d,
          className: ec().root,
          contentClassName: ec().modalContent,
          portalNode: u || a.modal.isOpened ? null : n,
          title: p,
          headerClassName: ec().header,
          overlayClassName: ec().overlay,
          labelClose: e({ id: "interface-actions.close" }),
          restoreFocus: !0,
          containerProps: (0, es.BA)(es.QM.content.TRACK_LYRICS_MODAL),
          closeButtonProps: (0, es.BA)(es.QM.content.TRACK_LYRICS_CLOSE_BUTTON),
          children: (0, O.jsx)("div", {
            className: ec().content,
            ...(0, es.BA)(es.QM.content.TRACK_LYRICS_TEXT),
            children: v,
          }),
        });
      });
      var ed = n(17742),
        ef = n.n(ed);
      let ep = (0, R.Pi)(() => {
        let { formatMessage: e } = (0, P.Z)(),
          {
            track: { modal: t },
            fullscreenPlayer: n,
            settings: r,
          } = (0, D.oR4)(),
          i = r.layout === D.t8m.Mobile,
          { contentRef: a } = (0, D.$Y6)(),
          o = (0, I.useCallback)(() => {
            t.close();
          }, [t]),
          s = (0, I.useCallback)(
            (e) => {
              var n;
              null === (n = t.onOpenChange) || void 0 === n || n.call(t, e);
            },
            [t],
          );
        return (0, O.jsx)(K.u, {
          size: "fitContent",
          placement: i ? "default" : "right",
          open: t.isOpened,
          onOpenChange: s,
          onClose: o,
          className: ef().root,
          contentClassName: ef().modalContent,
          portalNode: i || n.modal.isOpened ? null : a,
          withOverlay: !1,
          closeOnOutsidePress: !1,
          headerClassName: ef().header,
          overlayClassName: ef().overlay,
          labelClose: e({ id: "interface-actions.close" }),
          restoreFocus: !0,
          children: (0, O.jsx)("div", { className: ef().content }),
        });
      });
      var ev = n(31014),
        eh = n(39513),
        e_ = n(28852),
        em = n(90679),
        eg = n(16636),
        eb = n(30460),
        ey = n(9331),
        ex = n.n(ey);
      let ej = "crackdown-buy-subscription-button",
        eC = (0, R.Pi)(() => {
          let {
              modals: { crackdownModal: e },
            } = (0, D.oR4)(),
            { formatMessage: t } = (0, P.Z)(),
            { theme: n } = (0, D.FgM)(),
            r = n === D.Q2A.Light,
            [i, a] = (0, D.zU3)(),
            o = (0, D.Eu6)(),
            {
              mainText: s,
              additionText: l,
              isShimmerVisible: c,
              isShimmerActive: u,
              openPaymentWidgetModal: d,
            } = (0, eb.x)({
              storeName: "music",
              offerElement: { element: i, intersectionPropertyId: ej },
            }),
            f = (0, I.useMemo)(
              () =>
                c
                  ? (0, O.jsx)(em.Shimmer, {
                      className: ex().buySubscriptionButtonShimmer,
                      isActive: u,
                      radius: "xxxl",
                    })
                  : (0, O.jsxs)(eh.z, {
                      isBlock: !0,
                      radius: "xxxl",
                      size: "m",
                      color: "plus",
                      ref: a,
                      "data-intersection-property-id": ej,
                      onClick: d,
                      className: ex().buySubscriptionButton,
                      children: [
                        (0, O.jsx)(X.Caption, {
                          variant: "div",
                          size: "l",
                          children: s,
                        }),
                        l &&
                          (0, O.jsx)(X.Caption, {
                            variant: "div",
                            size: "m",
                            children: l,
                          }),
                      ],
                    }),
              [c, u, s, l, a, d],
            ),
            p = (0, I.useMemo)(
              () =>
                (0, O.jsxs)("div", {
                  className: ex().plusLogoWrapper,
                  children: [
                    (0, O.jsx)(e_.Icon, {
                      variant: "yandexPlus".concat(o),
                      className: (0, M.W)(
                        ex().plusLogo,
                        ex()["plusLogo_".concat(o.toLocaleLowerCase())],
                      ),
                    }),
                    (0, O.jsx)(eg.y, {
                      children: (0, O.jsx)(X.Heading, {
                        variant: "h2",
                        children: (0, O.jsx)(ev.Z, {
                          id: "crackdown.plus",
                          values: { nbsp: "\xa0" },
                        }),
                      }),
                    }),
                  ],
                }),
              [o],
            );
          return (0, O.jsxs)(K.u, {
            open: e.isOpened,
            size: "fitContent",
            placement: "center",
            header: p,
            onClose: e.close,
            labelClose: t({ id: "interface-actions.close" }),
            className: (0, M.W)(ex().root, { [ex().root_light]: r }),
            headerClassName: ex().header,
            contentClassName: ex().content,
            children: [
              (0, O.jsxs)("div", {
                className: ex().text,
                "aria-hidden": !0,
                children: [
                  (0, O.jsx)(X.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: ex().title,
                    children: (0, O.jsx)(ev.Z, {
                      id: "crackdown.title",
                      values: { br: (0, O.jsx)("br", {}), nbsp: "\xa0" },
                    }),
                  }),
                  (0, O.jsx)(X.Caption, {
                    variant: "span",
                    size: "m",
                    className: ex().description,
                    children: (0, O.jsx)(ev.Z, {
                      id: "crackdown.description",
                      values: { br: (0, O.jsx)("br", {}), nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, O.jsxs)(eg.y, {
                children: [
                  (0, O.jsx)(X.Heading, {
                    variant: "h1",
                    children: (0, O.jsx)(ev.Z, {
                      id: "crackdown.title",
                      values: { br: " ", nbsp: "\xa0" },
                    }),
                  }),
                  (0, O.jsx)(X.Caption, {
                    variant: "div",
                    children: (0, O.jsx)(ev.Z, {
                      id: "crackdown.description",
                      values: { br: " ", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, O.jsx)("div", { className: ex().buttons, children: f }),
            ],
          });
        });
      var ew = n(10686),
        ek = n(13440);
      ((r = i || (i = {})).RU = "ru"), (r.BY = "by"), (r.OTHER = "other");
      let eS = { [D.HTA.RU]: i.RU, [D.HTA.BY]: i.BY },
        eE = (e) => (e && eS[e]) || i.OTHER;
      var eN = n(49132),
        eA = n.n(eN),
        eO = n(80678),
        eM = n.n(eO);
      let eR = (e) => {
          let { className: t, faqProps: n } = e,
            { location: r } = (0, D.oR4)(),
            i = {
              nbsp: "\xa0",
              steps: (0, O.jsxs)("ul", {
                className: $.DF.list,
                children: [
                  (0, O.jsx)("li", {
                    className: $.DF.listITem,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-1",
                      values: {
                        link: (0, O.jsx)($.rU, {
                          className: $.DF.link,
                          href: "http://plus.yandex.".concat(r.tld, "/my"),
                          target: "_blank",
                          children: (0, O.jsx)(ev.Z, {
                            id: "paywall.faq-answer-cancel-until-end-step-1-link",
                          }),
                        }),
                      },
                    }),
                  }),
                  (0, O.jsx)("li", {
                    className: $.DF.listITem,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.faq-answer-cancel-until-end-step-2",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            };
          return (0, O.jsxs)($.dm, {
            className: t,
            ...n,
            children: [
              (0, O.jsx)($.bm, {
                question: (0, O.jsx)($.dg, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-question-without-card-binding",
                  }),
                }),
                answer: (0, O.jsx)($.sB, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-answer-without-card-binding",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
              (0, O.jsx)($.bm, {
                question: (0, O.jsx)($.dg, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-question-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, O.jsx)($.sB, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-answer-afraid-forget-cancel",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
              (0, O.jsx)($.bm, {
                question: (0, O.jsx)($.dg, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-question-cancel-until-end",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, O.jsx)($.sB, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-answer-cancel-until-end",
                    values: i,
                  }),
                }),
              }),
              (0, O.jsx)($.bm, {
                question: (0, O.jsx)($.dg, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-question-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                answer: (0, O.jsx)($.sB, {
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.faq-answer-where-else-subscribe",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          });
        },
        eT = (0, R.Pi)(() => {
          let { location: e } = (0, D.oR4)();
          return (0, O.jsx)($.KV, {
            ageRestriction: "0+",
            links: [
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_conditions/",
                ),
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall-footer.subscription-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/yandex_plus_privilege_list",
                ),
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall-footer.privileges-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(e.tld, "/legal/plus_loyalty/"),
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall-footer.cashback-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(
                  e.tld,
                  "/legal/plus_generalrules/",
                ),
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall-footer.promotion-terms-link",
                }),
              },
              {
                href: "https://yandex.".concat(e.tld, "/support/plus"),
                text: (0, O.jsx)(ev.Z, { id: "paywall-footer.support-link" }),
              },
            ],
          });
        }),
        eL = () => {
          let { language: e } = (0, D.ZSk)();
          return "ru" === e ? "Ru" : "En";
        };
      var eI = n(86939),
        eB = n(83037),
        eP = n.n(eB);
      let eD = (e) => {
        let {
          variant: t = "horizontal",
          className: n,
          text: r,
          imageAlign: i = "center",
          imageSrc: a,
          image2xSrc: o,
        } = e;
        return (0, O.jsxs)("div", {
          className: (0, M.W)(eP().root, eP()["root_".concat(t)], n),
          children: [
            (0, O.jsx)("div", {
              className: eP().textContainer,
              children: (0, O.jsx)(X.Heading, {
                variant: "h3",
                size: "xl",
                className: eP().text,
                children: r,
              }),
            }),
            (0, O.jsx)("div", {
              className: (0, M.W)(
                eP().imageContainer,
                eP()["imageContainer_align_".concat(i)],
              ),
              children: (0, O.jsx)(eI.Image, {
                className: eP().image,
                src: a,
                srcSet: o ? "".concat(o, " 2x") : void 0,
                fit: "horizontal" === t ? "cover" : "none",
                "aria-hidden": !0,
              }),
            }),
          ],
        });
      };
      var ez = n(79588),
        eF = n.n(ez);
      let eV = (e) => {
        let {
          id: t,
          className: n,
          contentClassName: r,
          heading: i,
          content: a,
        } = e;
        return (0, O.jsxs)("section", {
          className: (0, M.W)(eF().root, n),
          id: t,
          children: [
            (0, O.jsx)("div", {
              className: eF().headingContainer,
              children: i,
            }),
            (0, O.jsx)("div", {
              className: (0, M.W)(eF().contentContainer, r),
              children: a,
            }),
          ],
        });
      };
      var eU = n(307),
        eW = n.n(eU);
      let eZ = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig",
        },
        eH = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig",
        },
        eG = (e) => {
          let { className: t, variant: n = i.RU } = e,
            r = eL();
          return (0, O.jsx)(eV, {
            className: t,
            contentClassName: eW()["content_".concat(n)],
            heading: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(e_.Icon, {
                  variant: "kinopoisk".concat(r),
                  className: eW()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, O.jsx)(eg.y, {
                  children: (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(eD, {
                  className: eW().card1,
                  variant: "vertical",
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: eZ[n],
                  image2xSrc: eH[n],
                }),
                (0, O.jsx)(eD, {
                  className: eW().card2,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig",
                }),
                n === i.RU &&
                  (0, O.jsx)(eD, {
                    className: eW().card3,
                    text: (0, O.jsx)(ev.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig",
                  }),
                (0, O.jsx)(eD, {
                  className: eW().card4,
                  variant: "vertical",
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageAlign: "right",
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig",
                }),
              ],
            }),
          });
        };
      var eq = n(32727),
        eY = n(93026),
        eK = n.n(eY);
      let e$ = "content-anchor",
        eX = (e) => {
          let {
            className: t,
            shouldShowLabel: n = !0,
            anchorId: r = e$,
            children: i,
          } = e;
          return (0, O.jsxs)(eq.r, {
            className: (0, M.W)(eK().root, t),
            href: "#".concat(r),
            role: "button",
            children: [
              (0, O.jsx)("div", { className: eK().content, children: i }),
              n &&
                (0, O.jsx)(X.Caption, {
                  variant: "span",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.more-info",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              (0, O.jsx)(e_.Icon, { variant: "arrowDown", size: "xs" }),
            ],
          });
        };
      var eQ = n(50926),
        eJ = n.n(eQ);
      let e0 = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL(),
          a = (0, I.useMemo)(
            () =>
              n === i.RU
                ? (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [n],
          );
        return (0, O.jsx)(eV, {
          id: e$,
          className: t,
          contentClassName: eJ().content,
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "musicLogoCenter".concat(r),
                className: eJ()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(eD, {
                className: eJ().card,
                variant: "vertical",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig",
              }),
              (0, O.jsx)(eD, {
                className: eJ().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig",
              }),
              (0, O.jsx)(eD, {
                className: eJ().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-without-internet",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig",
              }),
              (0, O.jsx)(eD, {
                className: eJ().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig",
              }),
              (0, O.jsx)(eD, {
                className: eJ().card,
                variant: "vertical",
                text: a,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig",
              }),
            ],
          }),
        });
      };
      var e1 = n(51100),
        e3 = n.n(e1);
      let e4 = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL();
        return (0, O.jsx)(eV, {
          className: t,
          contentClassName: e3()["content_".concat(n)],
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "yandexPlus".concat(r),
                className: e3()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(eD, {
                className: e3().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig",
              }),
              (0, O.jsx)(eD, {
                className: e3().card,
                variant: "vertical",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.plus-part-benefit-devices",
                  values: { br: "\n" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig",
              }),
              n === i.RU &&
                (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)(eD, {
                      className: e3().card,
                      variant: "vertical",
                      text: (0, O.jsx)(ev.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageAlign: "right",
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564b99e1c4f13bd035c4c/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564d59e1c4f13bd035c4e/orig",
                    }),
                    (0, O.jsx)(eD, {
                      className: e3().card,
                      text: (0, O.jsx)(ev.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/34161/img.667564f79e1c4f13bd035c50/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/28592/img.667565109e1c4f13bd035c52/orig",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var e2 = n(773),
        e6 = n(78507),
        e9 = n(41610),
        e5 = n.n(e9);
      let e8 = {
          exit: e5().stickyContainer_exit,
          exitActive: e5().stickyContainer_exit_active,
          enter: e5().stickyContainer_enter,
          enterActive: e5().stickyContainer_enter_active,
        },
        e7 = "buy-subscription-button",
        te = (e) => {
          var t;
          let { className: n, terms: r, shouldShowFixed: i } = e,
            a = (0, I.useRef)(null),
            {
              mainText: o,
              additionText: s,
              openPaymentWidgetModal: l,
            } = (0, eb.x)({
              storeName: "music",
              offerElement: { element: a.current, intersectionPropertyId: e7 },
            }),
            c = (0, I.useRef)(null),
            [u, d] = (0, I.useState)(),
            [f, p] = (0, I.useState)(!1),
            { isIntersecting: v } =
              null !== (t = (0, e6.S1)([a], { preflightCheck: !1 }, !i)[e7]) &&
              void 0 !== t
                ? t
                : {};
          (0, I.useEffect)(() => {
            if (!v) {
              var e;
              d(
                null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.closest("[data-buy-subscription-block-portal]"),
              );
            }
          }, [v]),
            (0, I.useEffect)(() => {
              i &&
                setTimeout(() => {
                  p(!0);
                }, 300);
            }, [i, p]);
          let h = i && u,
            _ = !!(h && !v && f);
          return (0, O.jsxs)("div", {
            className: (0, M.W)(e5().root, n),
            children: [
              (0, O.jsxs)(eh.z, {
                isBlock: !0,
                radius: "xxxl",
                size: "l",
                color: "plus",
                className: e5().button,
                ref: a,
                "data-intersection-property-id": e7,
                onClick: l,
                children: [
                  (0, O.jsx)(X.Caption, {
                    className: e5().text_main,
                    variant: "div",
                    size: "l",
                    children: o,
                  }),
                  s &&
                    (0, O.jsx)(X.Caption, {
                      className: e5().text_addition,
                      variant: "div",
                      size: "m",
                      children: s,
                    }),
                ],
              }),
              r &&
                (0, O.jsx)(X.Caption, {
                  className: e5().text_secondary,
                  variant: "div",
                  size: "s",
                  weight: "normal",
                  children: r,
                }),
              h &&
                (0, e2.createPortal)(
                  (0, O.jsx)(B.Z, {
                    in: _,
                    nodeRef: c,
                    timeout: 300,
                    classNames: e8,
                    unmountOnExit: !0,
                    children: (0, O.jsx)("div", {
                      className: e5().stickyContainer,
                      "aria-hidden": !0,
                      ref: c,
                      children: (0, O.jsx)(te, {}),
                    }),
                  }),
                  u,
                ),
            ],
          });
        };
      var tt = n(15986),
        tn = n.n(tt);
      let tr = (e) => {
        let { className: t } = e;
        return (0, O.jsx)("section", {
          className: (0, M.W)(tn().root, t),
          children: (0, O.jsx)("div", {
            className: tn().wrapper,
            children: (0, O.jsxs)("div", {
              className: tn().content,
              children: [
                (0, O.jsx)(X.Heading, {
                  variant: "h1",
                  size: "xxl",
                  className: tn().title,
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, O.jsx)(X.Caption, {
                  variant: "div",
                  size: "l",
                  weight: "normal",
                  className: tn().label,
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, O.jsx)(te, {
                  className: tn().buySubscriptionBlock,
                  shouldShowFixed: !0,
                }),
              ],
            }),
          }),
        });
      };
      var ti = n(14172),
        ta = n.n(ti);
      let to = () =>
        (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(tr, { className: ta().topSection }),
            (0, O.jsx)(e0, { className: eA().section, variant: i.BY }),
            (0, O.jsx)(eG, { className: eA().section, variant: i.BY }),
            (0, O.jsx)(e4, { className: eA().section, variant: i.BY }),
            (0, O.jsx)(eR, { className: eA().section_faq }),
            (0, O.jsx)(eT, {}),
          ],
        });
      var ts = n(16338),
        tl = n.n(ts);
      let tc = (e) => {
        let { className: t, text: n, imageSrc: r, image2xSrc: i } = e;
        return (0, O.jsxs)("div", {
          className: (0, M.W)(tl().root, t),
          children: [
            (0, O.jsx)(eI.Image, {
              className: tl().image,
              src: r,
              srcSet: i ? "".concat(i, " 2x") : void 0,
              fit: "cover",
              "aria-hidden": !0,
            }),
            (0, O.jsx)(X.Caption, {
              className: tl().text,
              variant: "span",
              size: "l",
              weight: "medium",
              children: n,
            }),
          ],
        });
      };
      var tu = n(80824),
        td = n.n(tu);
      let tf = (e) => {
        let {
          id: t,
          className: n,
          contentClassName: r,
          heading: i,
          content: a,
        } = e;
        return (0, O.jsxs)("section", {
          className: (0, M.W)(td().root, n),
          id: t,
          children: [
            (0, O.jsx)("div", {
              className: td().headingContainer,
              children: i,
            }),
            (0, O.jsx)("div", {
              className: (0, M.W)(td().contentContainer, r),
              children: a,
            }),
          ],
        });
      };
      var tp = n(72739),
        tv = n.n(tp);
      let th = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig",
        },
        t_ = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig",
        },
        tm = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig",
        },
        tg = {
          [i.RU]:
            "https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig",
          [i.BY]:
            "https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig",
        },
        tb = (e) => {
          let { className: t, variant: n = i.RU } = e,
            r = eL();
          return (0, O.jsx)(tf, {
            className: t,
            contentClassName: tv()["content_".concat(n)],
            heading: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(e_.Icon, {
                  variant: "kinopoisk".concat(r),
                  className: tv()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, O.jsx)(eg.y, {
                  children: (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.kinopoisk-part-title",
                    }),
                  }),
                }),
              ],
            }),
            content: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(tc, {
                  className: tv().card1,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-movies",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: th[n],
                  image2xSrc: t_[n],
                }),
                (0, O.jsx)(tc, {
                  className: tv().card2,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-exclusive",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig",
                }),
                n === i.RU &&
                  (0, O.jsx)(tc, {
                    className: tv().card3,
                    text: (0, O.jsx)(ev.Z, {
                      id: "paywall.kinopoisk-part-benefit-sport",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                    imageSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig",
                    image2xSrc:
                      "https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig",
                  }),
                (0, O.jsx)(tc, {
                  className: (0, M.W)(tv().card4, tv()["card4_".concat(n)]),
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.kinopoisk-part-benefit-channels",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
                  imageSrc: tm[n],
                  image2xSrc: tg[n],
                }),
              ],
            }),
          });
        };
      var ty = n(21707),
        tx = n.n(ty);
      let tj = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL(),
          a = (0, I.useMemo)(
            () =>
              n === i.RU
                ? (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-benefit-books",
                    values: { br: "\n", nbsp: "\xa0" },
                  })
                : (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-benefit-books-alternative",
                    values: { br: "\n", nbsp: "\xa0" },
                  }),
            [n],
          );
        return (0, O.jsx)(tf, {
          id: e$,
          className: t,
          contentClassName: tx().content,
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "musicLogoCenter".concat(r),
                className: tx()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.music-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(tc, {
                className: tx().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-recommendations",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig",
              }),
              (0, O.jsx)(tc, {
                className: tx().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-many-devices",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig",
              }),
              (0, O.jsx)(tc, {
                className: tx().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-playlists",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig",
              }),
              (0, O.jsx)(tc, {
                className: tx().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.music-part-benefit-without-internet-mobile",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig",
              }),
              (0, O.jsx)(tc, {
                className: tx().card,
                text: a,
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig",
              }),
            ],
          }),
        });
      };
      var tC = n(48681),
        tw = n.n(tC);
      let tk = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL();
        return (0, O.jsx)(tf, {
          className: t,
          contentClassName: tw()["content_".concat(n)],
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "yandexPlus".concat(r),
                className: tw()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.plus-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(tc, {
                className: tw().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.plus-part-benefit-family",
                  values: { br: "\n", nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig",
              }),
              (0, O.jsx)(tc, {
                className: tw().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.plus-part-benefit-devices",
                  values: { br: "\n" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f2c22d8eec0b2a5676e3fa/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f2c224e24668103f2e68ec/orig",
              }),
              n === i.RU &&
                (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)(tc, {
                      className: tw().card,
                      text: (0, O.jsx)(ev.Z, {
                        id: "paywall.plus-part-benefit-daily",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/69699/img.66756747fda47e2147b8b480/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/49997/img.667567622f9df61336292f10/orig",
                    }),
                    (0, O.jsx)(tc, {
                      className: tw().card,
                      text: (0, O.jsx)(ev.Z, {
                        id: "paywall.plus-part-benefit-plus-city",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                      imageSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2406661/img.667567a4cc842022e134a7d2/orig",
                      image2xSrc:
                        "https://avatars.mds.yandex.net/get-music-misc/2413828/img.667567bdcc842022e134a7d8/orig",
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var tS = n(65371),
        tE = n.n(tS);
      let tN = (e) => {
        let { className: t, moreInfoLinkProps: n } = e;
        return (0, O.jsxs)("section", {
          className: (0, M.W)(tE().root, t),
          children: [
            (0, O.jsx)("div", { className: tE().image }),
            (0, O.jsxs)("div", {
              className: tE().content,
              children: [
                (0, O.jsx)(X.Heading, {
                  className: tE().title,
                  variant: "h1",
                  size: "xl",
                  weight: "bold",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.music-on-many-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, O.jsx)(X.Caption, {
                  variant: "div",
                  size: "l",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.recommendations-on-devices",
                    values: { nbsp: "\xa0" },
                  }),
                }),
                (0, O.jsx)(te, {
                  className: tE().buySubscriptionBlock,
                  shouldShowFixed: !0,
                }),
                (0, O.jsx)(eX, {
                  ...n,
                  className: (0, M.W)(
                    tE().moreInfoLink,
                    null == n ? void 0 : n.className,
                  ),
                }),
              ],
            }),
          ],
        });
      };
      var tA = n(80099),
        tO = n.n(tA);
      let tM = () =>
          (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(tN, { className: tO().topSection }),
              (0, O.jsx)(tj, { className: eA().section, variant: i.BY }),
              (0, O.jsx)(tb, { className: eA().section, variant: i.BY }),
              (0, O.jsx)(tk, { className: eA().section, variant: i.BY }),
              (0, O.jsx)(eR, { className: eA().section_faq }),
              (0, O.jsx)(eT, {}),
            ],
          }),
        tR = (0, R.Pi)(() => {
          let { settings: e } = (0, D.oR4)(),
            t = e.layout === D.t8m.Mobile;
          return (0, O.jsx)("div", {
            className: eM().root,
            children: t ? (0, O.jsx)(tM, {}) : (0, O.jsx)(to, {}),
          });
        });
      var tT = n(958),
        tL = n.n(tT);
      let tI = () =>
        (0, O.jsxs)("div", {
          className: tL().root,
          children: [
            (0, O.jsx)(tr, { className: tL().topSection }),
            (0, O.jsx)(eR, { className: eA().section_faq }),
            (0, O.jsx)(eT, {}),
          ],
        });
      var tB = n(86682),
        tP = n.n(tB);
      let tD = () =>
          (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(tN, {
                className: tP().topSection,
                moreInfoLinkProps: { shouldShowLabel: !1 },
              }),
              (0, O.jsx)(eR, { faqProps: { id: e$ } }),
              (0, O.jsx)(eT, {}),
            ],
          }),
        tz = (0, R.Pi)(() => {
          let { settings: e } = (0, D.oR4)();
          return e.layout === D.t8m.Mobile
            ? (0, O.jsx)(tD, {})
            : (0, O.jsx)(tI, {});
        });
      var tF = n(12215),
        tV = n.n(tF),
        tU = n(84600),
        tW = n.n(tU);
      let tZ = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL();
        return (0, O.jsx)(eV, {
          className: t,
          contentClassName: tW()["content_".concat(n)],
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "yandexBooks".concat(r),
                className: tW()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.books-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(eD, {
                className: tW().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-app-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a86148a2e22ffc42b885/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66f6a83a98264a4b59f3a744/orig",
              }),
              (0, O.jsx)(eD, {
                className: tW().card,
                variant: "vertical",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-follow-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig",
              }),
              (0, O.jsx)(eD, {
                className: tW().card,
                variant: "vertical",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-download-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig",
              }),
              (0, O.jsx)(eD, {
                className: tW().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-speed-desktop",
                  values: { br: "\n" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8f4ed792c3f4a135a7d/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f6a8edcaf72c4bc9eaea8e/orig",
              }),
            ],
          }),
        });
      };
      var tH = n(19493),
        tG = n.n(tH);
      let tq = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL();
        return (0, O.jsx)(eV, {
          className: t,
          contentClassName: tG()["content_".concat(n)],
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "yandexPay".concat(r),
                className: tG()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.pay-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(eD, {
                className: tG().card,
                variant: "vertical",
                imageAlign: "right",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.pay-part-benefit-cashback-desktop",
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2ace39790390af575a7d9/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2ace69790390af575a7da/orig",
              }),
              (0, O.jsx)(eD, {
                className: tG().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.pay-part-benefit-card-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2aed69790390af575a7e3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2aec6eea0c64638348ca2/orig",
              }),
              (0, O.jsx)(eD, {
                className: tG().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.pay-part-benefit-split-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageAlign: "right",
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70683/img.66f2af64eea0c64638348cb2/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f2af4eb8a7ae33ed006ff4/orig",
              }),
              (0, O.jsx)(eD, {
                className: tG().card,
                variant: "vertical",
                imageAlign: "right",
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.pay-part-benefit-save-desktop",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2afb7e24668103f2e689e/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/29541/img.66f2afaa9790390af575a7e7/orig",
              }),
            ],
          }),
        });
      };
      var tY = n(84691);
      function tK() {
        return (tK = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t$ = function (e) {
        return tY.createElement(
          "svg",
          tK(
            {
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
            },
            e,
          ),
          a ||
            (a = tY.createElement("rect", {
              y: 0.5,
              width: 64,
              height: 64,
              rx: 32,
              fill: "#000",
            })),
          o ||
            (o = tY.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M38.6 38.021c-1.707 2.845-4.355 4.098-7.14 4.098-5.566 0-9.713-3.894-9.713-9.738v-.289c0-.275.012-.528.03-.793l24.002.037v-18.4L31.44 23.23 17.177 12.904V50.77H45.78V42.12c-2.77-.01-5.29-1.264-7.18-4.098Z",
              fill: "#fff",
            })),
          s ||
            (s = tY.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.462 38.946c2.804 0 4.52-1.442 4.747-4.69h-10.19c.447 2.925 2.716 4.69 5.443 4.69ZM40.993 34.256h10.311c-.446 2.925-2.84 4.69-5.567 4.69-2.803 0-4.519-1.442-4.744-4.69Z",
              fill: "#fff",
            })),
        );
      };
      function tX() {
        return (tX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tQ = function (e) {
        return tY.createElement(
          "svg",
          tX(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          tY.createElement(
            "g",
            { clipPath: "url(#clip0_4165_10094)" },
            l ||
              (l = tY.createElement("rect", {
                y: 0.5,
                width: 64,
                height: 64,
                rx: 32,
                fill: "white",
              })),
            c ||
              (c = tY.createElement("path", {
                d: "M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z",
                fill: "#FCCA00",
              })),
            u ||
              (u = tY.createElement("path", {
                d: "M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z",
                fill: "#FC3F1D",
              })),
            tY.createElement(
              "mask",
              {
                id: "mask0_4165_10094",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: 0,
                y: 0,
                width: 64,
                height: 65,
              },
              d ||
                (d = tY.createElement("ellipse", {
                  cx: 32,
                  cy: 32.5,
                  rx: 32,
                  ry: 32,
                  fill: "white",
                })),
            ),
            f ||
              (f = tY.createElement("g", { mask: "url(#mask0_4165_10094)" })),
            p ||
              (p = tY.createElement(
                "g",
                { clipPath: "url(#clip1_4165_10094)" },
                tY.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  transform: "translate(0 0.5)",
                  fill: "black",
                }),
                tY.createElement("path", {
                  d: "M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z",
                  fill: "url(#paint0_radial_4165_10094)",
                }),
              )),
          ),
          v ||
            (v = tY.createElement(
              "defs",
              null,
              tY.createElement(
                "radialGradient",
                {
                  id: "paint0_radial_4165_10094",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)",
                },
                tY.createElement("stop", { offset: 0.5, stopColor: "#FF5500" }),
                tY.createElement("stop", { offset: 1, stopColor: "#BBFF00" }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip0_4165_10094" },
                tY.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip1_4165_10094" },
                tY.createElement("rect", {
                  width: 63.9999,
                  height: 63.9999,
                  fill: "white",
                  transform: "translate(0 0.5)",
                }),
              ),
            )),
        );
      };
      function tJ() {
        return (tJ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t0 = function (e) {
        return tY.createElement(
          "svg",
          tJ(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 188 54",
              fill: "none",
            },
            e,
          ),
          h ||
            (h = tY.createElement(
              "g",
              { clipPath: "url(#clip0_4001_171331)" },
              tY.createElement(
                "g",
                { clipPath: "url(#clip1_4001_171331)" },
                tY.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M137.195 3L185.195 3L185.195 22.0988L185.195 24L184.195 25.301C183.511 26.2398 182.837 27.1045 182.185 27.8726C181.003 29.2647 179.849 30.401 178.768 31.0768L178.766 31.0782C178.156 31.4577 177.464 31.7628 176.72 31.7665L176.715 31.7665C176.499 31.7665 176.274 31.7398 176.05 31.6768C175.587 31.5484 175.184 31.301 174.863 30.9674C174.548 30.6422 174.331 30.259 174.179 29.8695C173.881 29.1045 173.786 28.2047 173.785 27.2759L173.785 27.2739C173.786 25.3306 174.216 22.8849 174.772 20.4386C175.242 18.3727 175.815 16.2558 176.335 14.3805L168.656 11.7862L156.919 31.0893L155.075 30.4202L156.669 19.8772L149.817 17.5141L138.199 32.7801L137.199 33.9952L137.196 43.9992L138.196 42.5009L151.624 24.7655L149.55 39.8367L156.439 42.18L167.061 24.81L168.902 25.4857L168.706 26.7478C168.563 27.6667 168.4 28.8734 168.4 30.1737C168.4 31.3727 168.539 32.6166 168.931 33.7575C169.32 34.889 169.954 35.9136 170.962 36.732L170.963 36.7328C171.64 37.2803 172.508 37.7552 173.638 38.0965C174.361 38.3152 175.071 38.4161 175.771 38.4161C176.829 38.4161 177.887 38.1834 178.952 37.7386C180.018 37.2932 181.085 36.6345 182.147 35.7913C182.837 35.2436 183.52 34.621 184.195 33.9347L185.195 33L185.195 34.3397L185.195 51L137.195 51L137.195 45.4797L137.196 43.9992L137.195 34L137.195 3Z",
                  fill: "url(#paint0_linear_4001_171331)",
                }),
                tY.createElement("path", {
                  d: "M158.127 19.0598L149.426 16.0594L137.195 32.1306L137.195 46.0086L149.786 29.3808L148.226 40.7227L157.047 43.7231L167.529 26.5836C167.023 29.8262 166.188 37.1679 173.341 39.3291C177.575 40.6083 181.594 38.4842 185.195 34.8092L185.195 21.7653C181.673 27.1401 178.24 30.9934 176.454 30.4973C173.451 29.6631 176.157 19.9565 177.902 13.6965L177.929 13.5991L168.169 10.3028L156.567 29.3809L158.127 19.0598Z",
                  fill: "url(#paint1_linear_4001_171331)",
                }),
              ),
            )),
          _ ||
            (_ = tY.createElement("rect", {
              x: 137.2,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          m ||
            (m = tY.createElement(
              "g",
              { clipPath: "url(#clip2_4001_171331)" },
              tY.createElement("path", {
                d: "M151.595 3C135.595 3 119.595 3 103.595 3L103.595 51L151.595 51C151.595 35 151.595 19 151.595 3Z",
                fill: "#00ADFF",
              }),
              tY.createElement("path", {
                d: "M128.434 26.9405C130.643 15.2967 132.216 13.2774 137.038 13.6514C140.809 13.9438 145.194 19.3868 141.236 31.1478C137.424 42.4846 129.012 44.4997 122.9 40.8771C118.468 38.248 114.973 32.5712 113.651 29.4398C111.569 24.5165 110.474 19.1356 113.215 16.1995C115.459 13.7937 118.038 12.6342 122.9 18.1603C127.762 23.6863 128.434 26.9405 128.434 26.9405Z",
                fill: "white",
              }),
            )),
          g ||
            (g = tY.createElement("rect", {
              x: 103.6,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          b ||
            (b = tY.createElement(
              "g",
              { clipPath: "url(#clip3_4001_171331)" },
              tY.createElement("rect", {
                x: 69.9998,
                y: 3,
                width: 48,
                height: 48,
                rx: 24,
                fill: "#FFF500",
              }),
              tY.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M118 26.9193L100.791 33.6346L98.9655 50.4857C97.3633 50.8227 95.7022 51 93.9997 51C93.7473 51 93.4959 50.9961 93.2453 50.9884L94.8757 35.9432L88.679 38.3613L85.3056 49.3768C83.4998 48.6747 81.8001 47.7603 80.237 46.6644L81.9791 40.9759L76.2887 43.1965C74.9613 41.7457 73.8097 40.1313 72.8678 38.387L84.1162 33.9974L93.6081 3.00313C93.7384 3.00105 93.8689 3 93.9997 3C97.5223 3 100.868 3.75891 103.881 5.12215L101.487 27.2188L117.26 21.0635C117.737 22.9371 117.993 24.8988 118 26.9193ZM90.8162 31.3829L97.8635 8.37095L95.5709 29.5274L90.8162 31.3829Z",
                fill: "black",
              }),
            )),
          y ||
            (y = tY.createElement("rect", {
              x: 69.9998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          x ||
            (x = tY.createElement(
              "g",
              { clipPath: "url(#clip4_4001_171331)" },
              tY.createElement(
                "g",
                { clipPath: "url(#clip5_4001_171331)" },
                tY.createElement("path", {
                  d: "M76.7965 20.739C76.7965 11.0998 72.6753 5.7795 66.2165 3.00031H36.4005V10.8199C39.0378 9.92937 41.804 9.4799 44.5876 9.48962C63.8854 9.48962 63.8413 30.1125 50.5313 43.4226C47.0157 46.9382 43.5765 49.3513 40.3619 51.0003H57.7341C69.1616 44.0887 76.7965 32.5997 76.7965 20.739Z",
                  fill: "#0000F7",
                }),
                tY.createElement("path", {
                  d: "M44.587 9.48966C41.8034 9.4799 39.0372 9.92937 36.3999 10.82V50.9999H40.3617C43.5764 49.3513 47.0151 46.9377 50.5312 43.4221C63.8407 30.1121 63.8848 9.48966 44.587 9.48966Z",
                  fill: "#161616",
                }),
                tY.createElement("path", {
                  d: "M66.216 3.00006C72.6748 5.77925 76.796 11.0995 76.796 20.7388C76.796 32.5995 69.1611 44.0884 57.734 50.9996H84.3995V3.00006H66.216Z",
                  fill: "white",
                }),
                tY.createElement("path", {
                  d: "M76.7965 20.739C76.7965 11.0998 72.6753 5.7795 66.2165 3.00031H36.4005V10.8199C39.0378 9.92937 41.804 9.4799 44.5876 9.48962C63.8854 9.48962 63.8413 30.1125 50.5313 43.4226C47.0157 46.9382 43.5765 49.3513 40.3619 51.0003H57.7341C69.1616 44.0887 76.7965 32.5997 76.7965 20.739Z",
                  fill: "url(#paint2_linear_4001_171331)",
                }),
                tY.createElement("path", {
                  d: "M44.587 9.48966C41.8034 9.4799 39.0372 9.92937 36.3999 10.82V50.9999H40.3617C43.5764 49.3513 47.0151 46.9377 50.5312 43.4221C63.8407 30.1121 63.8848 9.48966 44.587 9.48966Z",
                  fill: "url(#paint3_linear_4001_171331)",
                }),
              ),
            )),
          j ||
            (j = tY.createElement("rect", {
              x: 36.3998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          C ||
            (C = tY.createElement(
              "g",
              { clipPath: "url(#clip6_4001_171331)" },
              tY.createElement(
                "g",
                { clipPath: "url(#clip7_4001_171331)" },
                tY.createElement("rect", {
                  x: 2.7998,
                  y: 26.9996,
                  width: 24,
                  height: 24,
                  fill: "white",
                }),
                tY.createElement("rect", {
                  x: 26.8007,
                  y: 26.9996,
                  width: 24,
                  height: 24,
                  fill: "black",
                }),
                tY.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 24,
                  fill: "#FFCC00",
                }),
              ),
            )),
          w ||
            (w = tY.createElement("rect", {
              x: 2.7998,
              y: 3,
              width: 48,
              height: 48,
              rx: 24,
              stroke: "black",
              strokeWidth: 4.8,
            })),
          k ||
            (k = tY.createElement(
              "defs",
              null,
              tY.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_4001_171331",
                  x1: 161.195,
                  y1: -8.42203,
                  x2: 161.195,
                  y2: 55.5564,
                  gradientUnits: "userSpaceOnUse",
                },
                tY.createElement("stop", { stopColor: "#FFE55B" }),
                tY.createElement("stop", { offset: 1, stopColor: "#FFCC00" }),
              ),
              tY.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_4001_171331",
                  x1: 160.613,
                  y1: 2.25148,
                  x2: 161.41,
                  y2: 45.5632,
                  gradientUnits: "userSpaceOnUse",
                },
                tY.createElement("stop", { stopColor: "#3E3F3A" }),
                tY.createElement("stop", { offset: 1 }),
              ),
              tY.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_4001_171331",
                  x1: 76.7965,
                  y1: 27.0003,
                  x2: 36.4005,
                  y2: 27.0003,
                  gradientUnits: "userSpaceOnUse",
                },
                tY.createElement("stop", {
                  stopColor: "white",
                  stopOpacity: 0.25,
                }),
                tY.createElement("stop", {
                  offset: 1,
                  stopColor: "white",
                  stopOpacity: 0,
                }),
              ),
              tY.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_4001_171331",
                  x1: 31.5031,
                  y1: 32.725,
                  x2: 60.8884,
                  y2: 24.8512,
                  gradientUnits: "userSpaceOnUse",
                },
                tY.createElement("stop", {
                  stopColor: "#CADEF2",
                  stopOpacity: 0.2,
                }),
                tY.createElement("stop", {
                  offset: 0.0206,
                  stopColor: "#C3D6EA",
                  stopOpacity: 0.1959,
                }),
                tY.createElement("stop", {
                  offset: 0.167,
                  stopColor: "#96A4B2",
                  stopOpacity: 0.1666,
                }),
                tY.createElement("stop", {
                  offset: 0.3143,
                  stopColor: "#6F7982",
                  stopOpacity: 0.1371,
                }),
                tY.createElement("stop", {
                  offset: 0.4595,
                  stopColor: "#4F555B",
                  stopOpacity: 0.1081,
                }),
                tY.createElement("stop", {
                  offset: 0.602,
                  stopColor: "#36393D",
                  stopOpacity: 0.0796,
                }),
                tY.createElement("stop", {
                  offset: 0.7413,
                  stopColor: "#242627",
                  stopOpacity: 0.0517,
                }),
                tY.createElement("stop", {
                  offset: 0.8757,
                  stopColor: "#1A1A1A",
                  stopOpacity: 0.0249,
                }),
                tY.createElement("stop", {
                  offset: 1,
                  stopColor: "#161616",
                  stopOpacity: 0,
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip0_4001_171331" },
                tY.createElement("rect", {
                  x: 137.2,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip1_4001_171331" },
                tY.createElement("rect", {
                  width: 48,
                  height: 48,
                  fill: "white",
                  transform: "translate(137.195 3)",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip2_4001_171331" },
                tY.createElement("rect", {
                  x: 103.6,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip3_4001_171331" },
                tY.createElement("rect", {
                  x: 69.9998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip4_4001_171331" },
                tY.createElement("rect", {
                  x: 36.3998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip5_4001_171331" },
                tY.createElement("rect", {
                  x: 36.3998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip6_4001_171331" },
                tY.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
              tY.createElement(
                "clipPath",
                { id: "clip7_4001_171331" },
                tY.createElement("rect", {
                  x: 2.7998,
                  y: 3,
                  width: 48,
                  height: 48,
                  rx: 24,
                  fill: "white",
                }),
              ),
            )),
        );
      };
      function t1() {
        return (t1 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t3 = function (e) {
        return tY.createElement(
          "svg",
          t1(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 65",
              fill: "none",
            },
            e,
          ),
          S ||
            (S = tY.createElement("path", {
              d: "M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z",
              fill: "black",
            })),
          E ||
            (E = tY.createElement("path", {
              d: "M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z",
              fill: "#FED42B",
            })),
        );
      };
      function t4() {
        return (t4 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var t2 = function (e) {
          return tY.createElement(
            "svg",
            t4(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 64 65",
                fill: "none",
              },
              e,
            ),
            N ||
              (N = tY.createElement(
                "g",
                { clipPath: "url(#clip0_4032_54517)" },
                tY.createElement("rect", {
                  y: 0.5,
                  width: 64,
                  height: 64,
                  rx: 32,
                  fill: "white",
                }),
                tY.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z",
                  fill: "url(#paint0_linear_4032_54517)",
                }),
              )),
            A ||
              (A = tY.createElement(
                "defs",
                null,
                tY.createElement(
                  "linearGradient",
                  {
                    id: "paint0_linear_4032_54517",
                    x1: -0.000000253254,
                    y1: 28.2333,
                    x2: 64,
                    y2: 28.2333,
                    gradientUnits: "userSpaceOnUse",
                  },
                  tY.createElement("stop", { stopColor: "#FF5C4D" }),
                  tY.createElement("stop", {
                    offset: 0.4,
                    stopColor: "#EB469F",
                  }),
                  tY.createElement("stop", { offset: 1, stopColor: "#8341EF" }),
                ),
                tY.createElement(
                  "clipPath",
                  { id: "clip0_4032_54517" },
                  tY.createElement("rect", {
                    y: 0.5,
                    width: 64,
                    height: 64,
                    rx: 32,
                    fill: "white",
                  }),
                ),
              )),
          );
        },
        t6 = n(19455),
        t9 = n.n(t6);
      let t5 = () =>
          (0, O.jsxs)("ul", {
            className: t9().services,
            children: [
              (0, O.jsxs)("li", {
                className: t9().service,
                children: [
                  (0, O.jsx)(t3, {
                    className: t9().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    size: "m",
                    className: t9().serviceLabel,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.plus-benefit-music",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, O.jsxs)("li", {
                className: t9().service,
                children: [
                  (0, O.jsx)(tQ, {
                    className: t9().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    size: "m",
                    className: t9().serviceLabel,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.plus-benefit-kinopoisk",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, O.jsxs)("li", {
                className: t9().service,
                children: [
                  (0, O.jsx)(t$, {
                    className: t9().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    size: "m",
                    className: t9().serviceLabel,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.plus-benefit-books",
                      values: { br: "\n" },
                    }),
                  }),
                ],
              }),
              (0, O.jsxs)("li", {
                className: t9().service,
                children: [
                  (0, O.jsx)(t2, {
                    className: t9().serviceLogo,
                    "aria-hidden": !0,
                  }),
                  (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    size: "m",
                    className: t9().serviceLabel,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.plus-benefit-cashback",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
            ],
          }),
        t8 = (e) => {
          let { className: t } = e,
            n = eL();
          return (0, O.jsxs)("section", {
            className: (0, M.W)(t9().root, t),
            children: [
              (0, O.jsxs)("div", {
                className: t9().main,
                children: [
                  (0, O.jsx)(e_.Icon, {
                    variant: "yandexPlus".concat(n),
                    className: (0, M.W)(
                      t9().logo,
                      t9()["logo_".concat(n.toLowerCase())],
                    ),
                  }),
                  (0, O.jsx)(X.Heading, {
                    variant: "h1",
                    size: "xxxl",
                    weight: "bold",
                    className: t9().title,
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.open-plus-benefits",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                  (0, O.jsx)(t5, {}),
                  (0, O.jsx)(te, {
                    className: t9().buySubscriptionBlock,
                    shouldShowFixed: !0,
                  }),
                ],
              }),
              (0, O.jsx)(eX, {
                children: (0, O.jsx)(t0, {
                  className: t9().moreInfoChildren,
                  "aria-hidden": !0,
                }),
              }),
            ],
          });
        },
        t7 = () =>
          (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(t8, {}),
              (0, O.jsx)(e0, { className: eA().section }),
              (0, O.jsx)(eG, { className: eA().section }),
              (0, O.jsx)(tZ, { className: eA().section }),
              (0, O.jsx)(tq, { className: eA().section }),
              (0, O.jsx)(e4, { className: eA().section }),
              (0, O.jsx)(eR, { className: eA().section_faq }),
              (0, O.jsx)(eT, {}),
            ],
          });
      var ne = n(83330),
        nt = n.n(ne);
      let nn = (e) => {
        let { className: t, variant: n = i.RU } = e,
          r = eL();
        return (0, O.jsx)(tf, {
          className: t,
          contentClassName: nt()["content_".concat(n)],
          heading: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(e_.Icon, {
                variant: "yandexBooks".concat(r),
                className: nt()["logo_".concat(r.toLocaleLowerCase())],
              }),
              (0, O.jsx)(eg.y, {
                children: (0, O.jsx)(X.Heading, {
                  variant: "h2",
                  children: (0, O.jsx)(ev.Z, {
                    id: "paywall.books-part-title",
                    values: { nbsp: "\xa0" },
                  }),
                }),
              }),
            ],
          }),
          content: (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(tc, {
                className: nt().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-switch-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac74caf72c4bc9eaeaa3/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66f6ac6dcaf72c4bc9eaeaa1/orig",
              }),
              (0, O.jsx)(tc, {
                className: nt().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-read-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig",
              }),
              (0, O.jsx)(tc, {
                className: nt().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-download-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig",
              }),
              (0, O.jsx)(tc, {
                className: nt().card,
                text: (0, O.jsx)(ev.Z, {
                  id: "paywall.books-part-benefit-speed-mobile",
                  values: { nbsp: "\xa0" },
                }),
                imageSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac8ccaf72c4bc9eaeaa9/orig",
                image2xSrc:
                  "https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac8348a2e22ffc42b923/orig",
              }),
            ],
          }),
        });
      };
      var nr = n(64691),
        ni = n.n(nr);
      let na = (e) => {
          let { className: t, variant: n = i.RU } = e,
            r = eL();
          return (0, O.jsx)(tf, {
            className: t,
            contentClassName: ni()["content_".concat(n)],
            heading: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(e_.Icon, {
                  variant: "yandexPay".concat(r),
                  className: ni()["logo_".concat(r.toLocaleLowerCase())],
                }),
                (0, O.jsx)(eg.y, {
                  children: (0, O.jsx)(X.Heading, {
                    variant: "h2",
                    children: (0, O.jsx)(ev.Z, {
                      id: "paywall.pay-part-title",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                }),
              ],
            }),
            content: (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsx)(tc, {
                  className: ni().card,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.pay-part-benefit-cashback-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28052/img.66f40cdd04aef147641ea0c6/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2413828/img.66f407fa8b154b444e5fa993/orig",
                }),
                (0, O.jsx)(tc, {
                  className: ni().card,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.pay-part-benefit-card-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.66f678ce1d3e3f703308e7f7/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/28592/img.66f678b68d7da81c86b85286/orig",
                }),
                (0, O.jsx)(tc, {
                  className: ni().card,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.pay-part-benefit-split-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f4106f04202b0283a10cbb/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/34161/img.66f410678b154b444e5fa9d7/orig",
                }),
                (0, O.jsx)(tc, {
                  className: ni().card,
                  text: (0, O.jsx)(ev.Z, {
                    id: "paywall.pay-part-benefit-save-mobile",
                    values: { nbsp: "\xa0" },
                  }),
                  imageSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f411b221428b6d37711b87/orig",
                  image2xSrc:
                    "https://avatars.mds.yandex.net/get-music-misc/40584/img.66f411aa21428b6d37711b85/orig",
                }),
              ],
            }),
          });
        },
        no = () =>
          (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(t8, {}),
              (0, O.jsx)(tj, { className: eA().section }),
              (0, O.jsx)(tb, { className: eA().section }),
              (0, O.jsx)(nn, { className: eA().section }),
              (0, O.jsx)(na, { className: eA().section }),
              (0, O.jsx)(tk, { className: eA().section }),
              (0, O.jsx)(eR, { className: eA().section_faq }),
              (0, O.jsx)(eT, {}),
            ],
          }),
        ns = (0, R.Pi)(() => {
          let { settings: e } = (0, D.oR4)(),
            t = e.layout === D.t8m.Mobile;
          return (0, O.jsx)("div", {
            className: tV().root,
            children: t ? (0, O.jsx)(no, {}) : (0, O.jsx)(t7, {}),
          });
        }),
        nl = {
          [i.RU]: (0, O.jsx)(ns, {}),
          [i.BY]: (0, O.jsx)(tR, {}),
          [i.OTHER]: (0, O.jsx)(tz, {}),
        },
        nc = (0, R.Pi)(() => {
          let { user: e } = (0, D.oR4)(),
            t = (0, I.useMemo)(
              () => nl[eE(e.account.geoRegionIso)],
              [e.account.geoRegionIso],
            );
          return (0, O.jsx)(ek.S, {
            className: (0, M.W)(eA().overlayScroll, {
              [eA().overlayScroll_desktop]: !0,
            }),
            children: (0, O.jsx)("div", {
              "data-buy-subscription-block-portal": !0,
              className: eA().root,
              children: t,
            }),
          });
        });
      var nu = n(76099),
        nd = n.n(nu);
      let nf = (0, R.Pi)(() => {
        let {
            modals: { paywallModal: e },
          } = (0, D.oR4)(),
          { formatMessage: t } = (0, P.Z)(),
          n = (0, D.R$C)();
        return (
          (0, I.useEffect)(() => {
            e.isOpened && (null == n || n.pause());
          }, [e.isOpened, n]),
          (0, O.jsxs)(K.u, {
            open: e.isOpened,
            size: "fullscreen",
            placement: "center",
            showHeader: !1,
            onClose: e.close,
            onOpenChange: e.onOpenChange,
            closeOnOutsidePress: !1,
            className: nd().root,
            contentClassName: nd().content,
            children: [
              (0, O.jsx)("header", {
                className: nd().header,
                children: (0, O.jsx)(eh.z, {
                  radius: "round",
                  color: "secondary",
                  size: "xxs",
                  icon: (0, O.jsx)(e_.Icon, { variant: "close", size: "xxs" }),
                  className: nd().closeButton,
                  onClick: e.close,
                  "aria-label": t({ id: "interface-actions.close" }),
                }),
              }),
              (0, O.jsx)(nc, {}),
            ],
          })
        );
      });
      var np = n(110),
        nv = n(68106),
        nh = n(87970),
        n_ = n(40958),
        nm = n(52852),
        ng = n(80757),
        nb = n(69088),
        ny = n(55143),
        nx = n(20121),
        nj = n(57900),
        nC = n(6494),
        nw = n.n(nC),
        nk = n(23897),
        nS = n(22890),
        nE = n(17295),
        nN = n(42033),
        nA = n.n(nN);
      let nO = (e) => {
          let { className: t, forwardRef: n, ...r } = e,
            { formatMessage: i } = (0, P.Z)();
          return (0, O.jsx)("section", {
            ref: n,
            className: (0, M.W)(nA().root, t),
            "aria-label": i({ id: "advert.banner" }),
            tabIndex: 0,
            ...r,
            children: (0, O.jsx)(eI.Image, {
              className: nA().advert,
              fit: "cover",
              src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.66a52d653dbd947884ba25ea/orig",
            }),
          });
        },
        nM = (0, I.forwardRef)((e, t) =>
          (0, O.jsx)(nO, { forwardRef: t, ...e }),
        );
      var nR = n(89599),
        nT = n.n(nR);
      let nL = (0, R.Pi)((e) => {
          let { children: t } = e,
            { state: n, setState: r } = (0, nE.O)(!1),
            { state: i, setState: a } = (0, nE.O)(!0),
            { contentRef: o, contentScrollRef: s } = (0, D.$Y6)(),
            l = (0, I.useRef)(null),
            { isFreemium: c } = (0, D.NMB)(),
            { settings: u } = (0, D.oR4)(),
            d = u.layout === D.t8m.Desktop,
            f = (0, I.useCallback)(() => {
              a(!1), r(!0);
            }, [a, r]),
            p = (0, I.useCallback)(() => {
              a(!0), r(!1);
            }, [a, r]),
            v = (0, I.useMemo)(
              () =>
                c &&
                d &&
                (0, O.jsx)(nM, {
                  className: (0, M.W)(nT().banner, {
                    [nT().banner_canShow]: n,
                  }),
                  onFocus: f,
                  onBlur: p,
                  ref: l,
                }),
              [c, d, n, f, p],
            ),
            h = (0, I.useCallback)(() => {
              var e;
              if (!v) return;
              if (!o || !s) {
                r(!0);
                return;
              }
              let t = s.scrollTop > 0,
                n =
                  o.clientHeight +
                    ((null === (e = l.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) || 0) <
                  s.scrollHeight;
              n ? a(!0) : !n && t && a(!1), i && r(!t);
            }, [o, s, v, i, r, a]);
          (0, I.useEffect)(() => {
            h();
          }, [h, s]);
          let _ = (0, I.useMemo)(() => (0, nk.Z)(h, 200), [h]);
          return (
            (0, nS.v)({ onScroll: _, elementRef: s }),
            (0, O.jsxs)("div", {
              className: nT().root,
              children: [
                v,
                (0, O.jsx)("div", { className: nT().content, children: t }),
              ],
            })
          );
        }),
        nI = (0, R.Pi)((e) => {
          var t, n, r;
          let { className: i, children: a } = e,
            o = (0, T.usePathname)(),
            {
              settings: s,
              experiments: l,
              communication: c,
              user: u,
            } = (0, D.oR4)();
          (0, D.HY3)();
          let d = s.layout === D.t8m.Mobile,
            f = s.layout !== D.t8m.Mobile,
            p =
              f &&
              (null === (t = c.list) || void 0 === t
                ? void 0
                : t.barBelow.isVisible) &&
              (null === (n = c.list) || void 0 === n
                ? void 0
                : n.barBelow.hasAnimationAlreadyBeenStarted),
            v = s.platform === D.t4T.MACOS,
            h = s.platform === D.t4T.WINDOWS,
            _ = l.checkExperiment(D.peG.WebNextTrackAboutModal, "on"),
            m = l.checkExperiment(D.peG.WebNextTrackLyrics, "on"),
            g = l.checkExperiment(D.peG.WebNextTrackModal, "on");
          return (0, O.jsx)(nL, {
            children: (0, O.jsxs)("div", {
              className: (0, M.W)(
                nw().root,
                {
                  [nw().root_applicationPreserveTitleBar]: h,
                  [nw().root_withBarBelow]: p,
                },
                i,
              ),
              children: [
                (0, O.jsx)(ew.wp, {
                  className: (0, M.W)(nw().navbar, {
                    [nw().navbar_application_macos]: v,
                    [nw().navbar_application_windows]: h,
                  }),
                }),
                (0, O.jsx)(q, {
                  className: (0, M.W)(nw().content, {
                    [nw().content_withPlayerBar]: d,
                  }),
                  children: (0, O.jsxs)(
                    $.SV,
                    {
                      fallback: nv.D,
                      children: [
                        a,
                        (0, O.jsx)(L.Notification, {
                          className: nw().notificationInfoContainer,
                          enableMultiContainer: !0,
                          containerId: D.W$x.INFO,
                          position: "bottom-center",
                        }),
                        (0, O.jsx)(L.Notification, {
                          className: nw().notificationErrorContainer,
                          enableMultiContainer: !0,
                          containerId: D.W$x.ERROR,
                          position: "bottom-center",
                          limit: 1,
                        }),
                      ],
                    },
                    o,
                  ),
                }),
                (0, O.jsx)(D.Lh6, {
                  pageId: D.Rhz.PLAYER,
                  children: (0, O.jsx)(np.ev, { className: nw().playerBar }),
                }),
                f &&
                  c.list &&
                  (0, O.jsx)(ng.On, {
                    className: nw().barBelow,
                    barBelow: c.list.barBelow,
                  }),
                (null === (r = c.list) || void 0 === r ? void 0 : r.modal) &&
                  (0, O.jsx)(nb.IP, { modal: c.list.modal }),
                (0, O.jsx)(D.Lh6, {
                  pageId: D.Rhz.PLAYER,
                  children: (0, O.jsx)(np.Rt, {}),
                }),
                (0, O.jsx)(n_.z, {}),
                (0, O.jsx)(nx.F8, {}),
                (0, O.jsx)(D.Lh6, {
                  pageId: D.Rhz.TRAILER,
                  children: (0, O.jsx)(nh._, {}),
                }),
                (0, O.jsx)(nm.D, {}),
                _ && (0, O.jsx)(eo, {}),
                !u.hasPlus &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [(0, O.jsx)(nf, {}), (0, O.jsx)(eC, {})],
                  }),
                m && (0, O.jsx)(eu, {}),
                g && (0, O.jsx)(ep, {}),
                (0, O.jsx)(nj.Qw, {}),
                (0, O.jsx)(ny.eZ, {}),
              ],
            }),
          });
        });
    },
    40029: function (e, t, n) {
      "use strict";
      n.d(t, {
        k_: function () {
          return u.VibeButton;
        },
        xJ: function () {
          return u.VibeButtonShimmer;
        },
        op: function () {
          return d.VibeCard;
        },
        KW: function () {
          return c;
        },
        FF: function () {
          return i;
        },
        BV: function () {
          return a.useOnPinClick;
        },
        xF: function () {
          return o;
        },
      });
      var r = n(42288);
      let i = (e) => {
        var t, n, i, a;
        return (0, r.pj)({
          title: e.title,
          header: e.header,
          stationId: e.stationId,
          seeds: e.seeds,
          animationUrl: e.animationUrl,
          backgroundImageUrl: e.backgroundImageUrl,
          imageUrl: e.imageUrl,
          colors: {
            average:
              null !==
                (i =
                  null === (t = e.colors) || void 0 === t
                    ? void 0
                    : t.average) && void 0 !== i
                ? i
                : "",
            waveText:
              null !==
                (a =
                  null === (n = e.colors) || void 0 === n
                    ? void 0
                    : n.waveText) && void 0 !== a
                ? a
                : "",
          },
        });
      };
      var a = n(77027);
      let o = (e) =>
        (0, r.pj)({
          title: e.name,
          seeds: e.seeds,
          stationId: e.stationId,
          idForFrom: e.idForFrom,
        });
      var s = n(84338),
        l = n(76873);
      let c = r.V5.model("Vibe", {
        title: r.V5.optional(r.V5.string, ""),
        header: r.V5.optional(r.V5.string, ""),
        subtitle: r.V5.maybe(r.V5.string),
        stationId: r.V5.string,
        seeds: r.V5.array(r.V5.string),
        idForFrom: r.V5.maybe(r.V5.string),
        imageUrl: r.V5.maybe(r.V5.string),
        animationUrl: r.V5.maybe(r.V5.string),
        backgroundImageUrl: r.V5.maybe(r.V5.string),
        backgroundColor: r.V5.maybe(r.V5.string),
        colors: r.V5.maybe(
          r.V5.model({
            average: r.V5.maybe(r.V5.string),
            waveText: r.V5.maybe(r.V5.string),
          }),
        ),
      })
        .views((e) => ({
          get context() {
            if (e.seeds && (e.stationId !== l.sHr || e.seeds.length > 1))
              return e.title;
            return null;
          },
          get pinId() {
            return (0, s.$k)(e.seeds);
          },
          get isPinned() {
            if (!(0, r.fh)(e)) return !1;
            let { pinsCollection: t } = (0, r.yj)(e);
            return t.isPinned(this.pinId);
          },
          get type() {
            var t;
            return null !== (t = e.stationId.split(":")[0]) && void 0 !== t
              ? t
              : "";
          },
        }))
        .actions((e) => ({
          togglePin: (0, r.ls)(function* () {
            if (!(0, r.fh)(e)) return;
            let { pinsCollection: t, user: n } = (0, r.yj)(e);
            if (n.isAuthorized)
              return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
          }),
        }));
      var u = n(85533),
        d = n(76356);
    },
    77027: function (e, t, n) {
      "use strict";
      n.d(t, {
        useOnPinClick: function () {
          return u;
        },
      });
      var r = n(9753),
        i = n(24244),
        a = n(98639),
        o = n(80542),
        s = n(76873),
        l = n(3084);
      let c = (e) => {
          var t;
          let { vibe: n, closeToast: i } = e;
          return (0, r.jsx)(l.K1, {
            closeToast: i,
            entityVariant: l.j9.VIBE,
            entityTitle: n.title,
            averageColor:
              null === (t = n.colors) || void 0 === t ? void 0 : t.average,
            isPinned: n.isPinned,
          });
        },
        u = (e) => {
          let { user: t } = (0, s.oR4)(),
            { notify: n } = (0, s.d$W)(),
            { formatMessage: u } = (0, o.Z)(),
            [d, f] = (0, a.useState)(!1);
          return (0, a.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              n(
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
            let a = { ...(0, i.ZN)(e), isPinned: !e.isPinned };
            f(!0);
            let o = await e.togglePin();
            f(!1),
              o
                ? n((0, r.jsx)(c, { vibe: a }), { containerId: s.W$x.INFO })
                : n(
                    (0, r.jsx)(l.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$x.ERROR },
                  );
          }, [u, n, d, t.isAuthorized, e]);
        };
    },
    85533: function (e, t, n) {
      "use strict";
      n.d(t, {
        VibeButton: function () {
          return x;
        },
        VibeButtonShimmer: function () {
          return y;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        s = n(31014),
        l = n(23881),
        c = n(17295),
        u = n(98342),
        d = n(39513),
        f = n(28852),
        p = n(86939),
        v = n(90679),
        h = n(2570),
        _ = n(76873),
        m = n(3084),
        g = n(70010),
        b = n.n(g);
      let y = (e) => {
          let { isActive: t, className: n } = e;
          return (0, r.jsx)(v.Shimmer, {
            isActive: t,
            className: (0, i.W)(b().root, n),
          });
        },
        x = (0, a.Pi)((e) => {
          let { className: t, vibe: n } = e,
            { pageId: a } = (0, _.lVB)(),
            { blockIdForFrom: v } = (0, _.qYG)(),
            { ref: g, intersectionPropertyId: y } = (0, _.VfV)(),
            { toggleTrue: x, toggleFalse: j, state: C } = (0, c.O)(!1),
            { isFreemium: w } = (0, _.NMB)(),
            { isPlaying: k, togglePlay: S } = (0, _.QhE)({
              seeds: n.seeds,
              pageIdForFrom: a,
              blockIdForFrom: v,
            }),
            E = (0, _.lAI)(),
            N = (0, o.useCallback)(
              (e) => {
                w ||
                  ((0, u.m)(e, b().ripple),
                  x(),
                  S().finally(() => {
                    j(), E(!k);
                  }));
              },
              [j, x, S, k, E, w],
            ),
            A = (0, o.useMemo)(() => {
              var e, t;
              return {
                "--vibe-button-background":
                  null === (e = n.colors) || void 0 === e ? void 0 : e.average,
                "--vibe-button-text-color":
                  null === (t = n.colors) || void 0 === t ? void 0 : t.waveText,
              };
            }, [n.colors]),
            O = k ? "pause" : "play",
            M = (0, o.useCallback)(
              () =>
                (0, r.jsxs)(d.z, {
                  style: A,
                  withRipple: !1,
                  withHover: !1,
                  variant: "text",
                  onClick: N,
                  className: (0, i.W)(
                    b().root,
                    b().button,
                    { [b().button_loading]: C },
                    t,
                  ),
                  "data-intersection-property-id": y,
                  ref: g,
                  ...(0, l.BA)(l.QM.landing.VIBE_DISCOVERY_ITEM),
                  children: [
                    (0, r.jsx)(p.Image, {
                      className: b().image,
                      withAvatarReplace: !0,
                      withFallback: !1,
                      src: n.backgroundImageUrl,
                      withAspectRatio: !0,
                      size: 400,
                      fit: "cover",
                    }),
                    (0, r.jsxs)("span", {
                      className: b().textContainer,
                      children: [
                        (0, r.jsx)(h.Caption, {
                          className: b().subtitle,
                          variant: "span",
                          type: "controls",
                          size: "s",
                          weight: "bold",
                          children: (0, r.jsx)(s.Z, {
                            id: "entity-names.my-vibe",
                          }),
                        }),
                        (0, r.jsxs)("span", {
                          className: b().titleContainer,
                          children: [
                            (0, r.jsx)(f.Icon, {
                              className: b().icon,
                              size: "xxs",
                              variant: O,
                            }),
                            (0, r.jsx)(h.Caption, {
                              className: b().title,
                              variant: "span",
                              lineClamp: 1,
                              children: n.title,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              [t, N, O, y, C, g, A, n.backgroundImageUrl, n.title],
            );
          return (0, r.jsx)(m.pl, {
            isEnabled: w,
            placement: "top",
            textVariant: "vibe",
            vibeTextVariant: n.type,
            renderChildren: M,
          });
        });
    },
    76356: function (e, t, n) {
      "use strict";
      n.d(t, {
        VibeCard: function () {
          return v;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        s = n(27491),
        l = n(12404),
        c = n(2570),
        u = n(76873),
        d = n(3084),
        f = n(55215),
        p = n.n(f);
      let v = (0, a.Pi)((e) => {
        let { vibe: t, children: n, className: a } = e,
          { pageId: f } = (0, u.lVB)(),
          [v, h] = (0, o.useState)(!1),
          { blockIdForFrom: _ } = (0, u.qYG)(),
          { settings: m } = (0, u.oR4)(),
          { sendPlaySearchFeedback: g } = (0, u.sAF)(),
          b = m.layout === u.t8m.Mobile,
          { isFreemium: y } = (0, u.NMB)(),
          {
            isPlaying: x,
            isPaused: j,
            togglePlay: C,
          } = (0, u.QhE)({
            seeds: t.seeds,
            pageIdForFrom: f,
            blockIdForFrom: _,
          }),
          w = x || j,
          k = (0, o.useCallback)(() => {
            b && (v || x || (h(!0), null == g || g()), C());
          }, [b, x, v, g, C]),
          S = (0, o.useCallback)(() => {
            y || (v || x || (h(!0), null == g || g()), C());
          }, [x, v, g, C, y]),
          E = (0, o.useCallback)(
            () =>
              (0, r.jsx)(d.JM, {
                isPlaying: x,
                onClick: S,
                className: (0, i.W)(p().playButton, p().control),
                buttonVariant: "default",
                withHover: !1,
                iconSize: "xl",
                variant: "filled",
              }),
            [x, S],
          ),
          N = (0, o.useMemo)(
            () =>
              (0, r.jsxs)(l.Paper, {
                className: p().cover,
                radius: "round",
                withShadow: !0,
                onClick: k,
                children: [
                  (0, r.jsx)(d.BE, {
                    size: 200,
                    fit: "cover",
                    className: p().image,
                    style: { backgroundColor: t.backgroundColor },
                    src: t.imageUrl,
                    alt: t.title,
                    withAvatarReplace: !0,
                  }),
                  w &&
                    (0, r.jsx)(d.Up, {
                      stopAnimation: j,
                      className: p().playingAnimation,
                    }),
                  (0, r.jsx)(s.kk, {
                    className: (0, i.W)(
                      p().controls,
                      { [p().controls_isPlaying]: w },
                      p().important,
                    ),
                    bottomContainerClassName: p().playControl,
                    radius: "round",
                    playControl: (0, r.jsx)(d.pl, {
                      isEnabled: y,
                      placement: "bottom",
                      textVariant: "vibe",
                      vibeTextVariant: t.type,
                      renderChildren: E,
                    }),
                  }),
                ],
              }),
            [k, j, w, t.backgroundColor, t.imageUrl, t.title, t.type, y, E],
          );
        return (0, r.jsx)(s.m7, {
          className: (0, i.W)(p().root, a),
          textPosition: "center",
          title: (0, r.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: t.title,
          }),
          description: (0, r.jsx)(c.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: t.subtitle,
          }),
          view: N,
          children: n,
        });
      });
    },
    60713: function (e, t, n) {
      "use strict";
      n.d(t, {
        x$: function () {
          return s;
        },
        Op: function () {
          return l.ClipsCarousel;
        },
        Yd: function () {
          return r;
        },
      });
      let r = (e) =>
        e
          ? e
              .split(",")
              .map(Number)
              .filter((e) => e >= 0)
          : [];
      n(34231);
      var i = n(42288),
        a = n(33589),
        o = n(68133);
      let s = i.V5.compose(
        i.V5.model("Clip", {
          clipId: i.V5.number,
          title: i.V5.maybe(i.V5.string),
          thumbnail: i.V5.maybe(i.V5.string),
          previewUrl: i.V5.maybe(i.V5.string),
          duration: i.V5.maybe(i.V5.number),
          artists: i.V5.array(a.Go),
        }),
        o.ie,
      );
      n(83431), n(74456);
      var l = n(59368);
    },
    34231: function (e, t, n) {
      "use strict";
      n.d(t, {
        useVideoModal: function () {
          return a;
        },
      });
      var r = n(98639),
        i = n(76873);
      let a = () => {
        let { fullscreenVideoPlayer: e } = (0, i.oR4)(),
          t = (0, i.PYm)();
        return (0, r.useCallback)(
          (n) => {
            e.setIds(n),
              t("/video?".concat(i.wxR.IDS, "=").concat(n.join(","))),
              e.modal.open();
          },
          [e, t],
        );
      };
    },
    83431: function (e, t, n) {
      "use strict";
      n.d(t, {
        ClipCard: function () {
          return y;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n(80542),
        o = n(23881),
        s = n(21351),
        l = n(39513),
        c = n(27491),
        u = n(28852),
        d = n(86939),
        f = n(12404),
        p = n(2570),
        v = n(33589),
        h = n(76873),
        _ = n(3084),
        m = n(34231),
        g = n(77954),
        b = n.n(g);
      let y = (e) => {
        let { clip: t, withVideo: n = !0, artistIdWithoutLink: g } = e,
          { settings: y } = (0, h.oR4)(),
          { formatMessage: x } = (0, a.Z)(),
          j = (0, m.useVideoModal)(),
          C = y.layout === h.t8m.Mobile,
          { ref: w, intersectionPropertyId: k } = (0, h.VfV)(),
          S = (0, i.useRef)(null),
          E = n && t.previewUrl,
          N = (0, i.useCallback)(() => {
            S.current && ((S.current.currentTime = 0), S.current.play());
          }, []),
          A = (0, i.useCallback)(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.pause();
          }, []),
          O = (0, i.useCallback)(() => {
            j([t.clipId]);
          }, [j, t.clipId]),
          M = (0, i.useMemo)(
            () => x({ id: "entity-names.clip-name" }, { clipName: t.title }),
            [x, t.title],
          ),
          R = (0, i.useMemo)(
            () =>
              (0, r.jsx)(l.z, {
                className: b().view,
                withRipple: !1,
                withHover: !1,
                onMouseEnter: N,
                onMouseLeave: A,
                onClick: O,
                radius: C ? "xs" : "l",
                "aria-label": M,
                children: (0, r.jsxs)(f.Paper, {
                  className: b().cover,
                  children: [
                    E &&
                      (0, r.jsx)("video", {
                        className: b().media,
                        ref: S,
                        poster: t.thumbnail && (0, s.zp)(t.thumbnail, 400, !0),
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        children: (0, r.jsx)("source", {
                          src: t.previewUrl,
                          type: "video/mp4",
                        }),
                      }),
                    t.thumbnail &&
                      (0, r.jsx)(d.Image, {
                        className: b().image,
                        "aria-hidden": !0,
                        src: t.thumbnail,
                        fit: "contain",
                        withAvatarReplace: !0,
                        size: 400,
                        withAspectRatio: !0,
                      }),
                    (0, r.jsx)("div", {
                      className: b().playButton,
                      children: (0, r.jsx)(u.Icon, {
                        variant: "play_filled",
                        size: "xl",
                      }),
                    }),
                  ],
                }),
              }),
            [M, C, E, N, A, S, t.previewUrl, t.thumbnail, O],
          ),
          T = (0, i.useMemo)(() => {
            if (t.artists.length > 0)
              return (0, r.jsx)(v.jO, {
                className: b().artists,
                linkClassName: b().artistLink,
                artists: t.artists,
                lineClamp: 1,
                withAllArtistsTitle: !0,
                artistIdWithoutLink: g,
              });
          }, [t.artists, g]);
        return (0, r.jsx)(c.m7, {
          ref: w,
          className: b().root,
          explicitMarkComponent:
            t.clipExplicitMark &&
            (0, r.jsx)(_.$i, { variant: t.clipExplicitMark, iconSize: "xxs" }),
          "aria-label": M,
          title: (0, r.jsx)(p.Caption, {
            className: b().title,
            "aria-hidden": !0,
            variant: "div",
            type: "entity",
            size: "m",
            weight: "medium",
            lineClamp: 1,
            children: t.title,
          }),
          "data-intersection-property-id": k,
          view: R,
          description: T,
          ...(0, o.BA)(o.bG.clip.CLIP_CARD),
        });
      };
    },
    74456: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var r = n(9753),
        i = n(90679),
        a = n(3084),
        o = n(87124),
        s = n.n(o);
      let l = (e) => {
        let { isActive: t } = e;
        return (0, r.jsxs)("div", {
          className: s().root,
          children: [
            (0, r.jsx)(i.Shimmer, {
              isActive: t,
              className: s().cover,
              radius: "l",
            }),
            (0, r.jsx)(a.AH, { isActive: t, className: s().title }),
            (0, r.jsx)(a.AH, { isActive: t, className: s().text }),
          ],
        });
      };
    },
    59368: function (e, t, n) {
      "use strict";
      n.d(t, {
        ClipsCarousel: function () {
          return _;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(98639),
        o = n(79452),
        s = n(5993),
        l = n(76873),
        c = n(3084),
        u = n(83431),
        d = n(74456),
        f = n(73895),
        p = n.n(f);
      let v = (e) =>
          Array.from({ length: 5 }, (t, n) =>
            (0, r.jsx)(d.U, { isActive: e }, n),
          ),
        h = (e) => {
          let {
              forwardRef: t,
              isShimmerVisible: n,
              isShimmerActive: d,
              title: f,
              description: h,
              containerClassName: _,
              headerClassName: m,
              artistIdWithoutLink: g,
              withVideo: b = !0,
              clips: y,
              headingVariant: x,
              ...j
            } = e,
            C = (0, a.useId)(),
            w = (0, a.useRef)(null),
            k = (0, a.useMemo)(
              () =>
                n
                  ? v(d)
                  : null == y
                    ? void 0
                    : y.map((e, t) =>
                        (0, r.jsx)(
                          l.nZ5,
                          {
                            objectType: o.OB.Clip,
                            objectPosX: t + 1,
                            objectPosY: 1,
                            objectsCount: null == y ? void 0 : y.length,
                            objectId: String(e.clipId),
                            children: (0, r.jsx)(u.ClipCard, {
                              clip: e,
                              withVideo: b,
                              artistIdWithoutLink: g,
                            }),
                          },
                          e.clipId,
                        ),
                      ),
              [y, d, n, b, g],
            );
          return (0, r.jsxs)("section", {
            className: p().root,
            ref: t,
            ...(0, l.tEg)(j),
            children: [
              (0, r.jsx)(c.ti, {
                className: m,
                labeledForId: C,
                title: f,
                description: h,
                controls: (0, r.jsx)(c.J8, {
                  className: p().controls,
                  carouselRef: w,
                }),
                headingVariant: x,
              }),
              (0, r.jsx)(s.l, {
                className: _,
                ref: w,
                itemClassName: (0, i.W)(p().item, p().important),
                "aria-labelledby": C,
                children: k,
              }),
            ],
          });
        },
        _ = (0, a.forwardRef)((e, t) => (0, r.jsx)(h, { forwardRef: t, ...e }));
    },
    75191: function (e, t, n) {
      "use strict";
      n.d(t, {
        s$: function () {
          return _;
        },
        $Z: function () {
          return j.RepeatButton;
        },
        P4: function () {
          return C.ShuffleButton;
        },
        WP: function () {
          return w.SonataControls;
        },
        ps: function () {
          return x;
        },
        jN: function () {
          return p;
        },
        RN: function () {
          return i;
        },
        B5: function () {
          return d;
        },
      });
      var r = n(92894);
      let i = (e, t) => ({ type: r.RX.Unloaded, meta: { id: e, albumId: t } });
      var a = n(42288),
        o = n(63665),
        s = n(98456),
        l = n(33589),
        c = n(16092),
        u = n(76873);
      let d = (e) => {
          var t, n, i;
          switch (e.data.type) {
            case o.A4.Generative: {
              let n = e.data.meta,
                r = (0, u.Usz)(null == n ? void 0 : n.derivedColors);
              return (0, a.pj)({
                id: String(n.id),
                coverUri: n.imageUrl,
                title: null !== (t = n.title) && void 0 !== t ? t : "",
                isAvailable: !0,
                isRemoved: !1,
                averageColor: r,
              });
            }
            case r.RX.Unloaded:
              return null;
            default: {
              let t = e.data.meta,
                r =
                  null === (n = t.artists) || void 0 === n
                    ? void 0
                    : n.map(l.d),
                o =
                  null === (i = t.albums) || void 0 === i ? void 0 : i.map(s.N);
              return (0, a.pj)({ ...(0, c.Ni)(t), artists: r, albums: o });
            }
          }
        },
        f = a.V5.model("UnloadedEntityMeta", {
          id: a.V5.union(a.V5.number, a.V5.string),
          albumId: a.V5.maybe(a.V5.union(a.V5.number, a.V5.string)),
        }),
        p = a.V5.model("UnloadedEntityData", {
          meta: f,
          type: a.V5.literal(r.RX.Unloaded),
        });
      var v = n(31490),
        h = n(94342);
      let _ = c.yp
        .props({
          artists: a.V5.array(l.Go),
          albums: a.V5.array(s.KX),
          chart: a.V5.maybe(h.BH),
        })
        .views((e) => ({
          get idWithContext() {
            return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
          },
          get artistsNames() {
            var t;
            return null === (t = e.artists) || void 0 === t
              ? void 0
              : t.map((e) => e.name).join(", ");
          },
          get mainArtist() {
            var n, r;
            return null !==
              (r = null === (n = e.artists) || void 0 === n ? void 0 : n[0]) &&
              void 0 !== r
              ? r
              : null;
          },
          get mainAlbum() {
            var i, a;
            return null !==
              (a = null === (i = e.albums) || void 0 === i ? void 0 : i[0]) &&
              void 0 !== a
              ? a
              : null;
          },
          get index() {
            var o, s, l;
            return null !==
              (l =
                null === (s = e.albums[0]) || void 0 === s
                  ? void 0
                  : null === (o = s.trackPosition) || void 0 === o
                    ? void 0
                    : o.index) && void 0 !== l
              ? l
              : null;
          },
          get isPodcast() {
            var c;
            return (
              e.isTrackPodcast ||
              (null === (c = this.mainAlbum) || void 0 === c
                ? void 0
                : c.isPodcast)
            );
          },
          get isAudiobook() {
            return e.type === v.Vc.AUDIOBOOK;
          },
          get isNonMusic() {
            return this.isPodcast || this.isAudiobook;
          },
        }))
        .actions((e) => ({
          changeTrackInfo: (0, a.ls)(function* (t, n) {
            let { ugcResource: r, modelActionsLogger: i } = (0, a.dU)(e);
            if (e.artists.map((e) => e.name).join(", ") === n && t === e.title)
              return u.SLo.OK;
            try {
              var o;
              yield r.changeTrack({ trackId: e.id, title: t, artist: n }),
                (e.title = t);
              let i =
                (null === (o = e.artists[0]) || void 0 === o ? void 0 : o.id) ||
                "0";
              if (((e.artists = (0, a.pj)([])), n)) {
                let t = l.Go.create({ id: i, name: n, isAvailable: !0 });
                e.artists = (0, a.pj)([t]);
              }
              return u.SLo.OK;
            } catch (e) {
              return i.error(e), u.SLo.ERROR;
            }
          }),
        }));
      var m = n(24244),
        g = n(84338),
        b = n(38977),
        y = n(87181);
      let x = a.V5.model("SonataState", {
        contextType: a.V5.maybeNull(a.V5.enumeration(Object.values(g.Ak))),
        contextId: a.V5.maybeNull(a.V5.string),
        entityMeta: a.V5.maybeNull(_),
        unloadedEntitiesData: a.V5.maybe(a.V5.array(p)),
        status: a.V5.enumeration(Object.values(r.Xz)),
        canMoveForward: a.V5.boolean,
        canMoveBackward: a.V5.boolean,
        canSpeed: a.V5.boolean,
        repeatMode: a.V5.enumeration(Object.values(y.zq)),
        canChangeRepeatMode: a.V5.boolean,
        volume: a.V5.maybe(a.V5.number),
        speed: a.V5.maybe(a.V5.number),
        canShuffle: a.V5.boolean,
        shuffle: a.V5.boolean,
        currentlyPlayingTrackIndex: a.V5.maybe(a.V5.number),
        quality: a.V5.enumeration(Object.values(b.nJ)),
        playlistFilter: a.V5.maybe(a.V5.string),
      })
        .views((e) => ({
          get unloadedEntitiesDataFromModels() {
            return (0, m.ZN)(e.unloadedEntitiesData);
          },
          get isVibeContext() {
            return e.contextType === g.Ak.Vibe;
          },
          get isGenerativeContext() {
            return e.contextType === g.Ak.Generative;
          },
          get isPaused() {
            return e.status === r.Xz.PAUSED;
          },
        }))
        .actions((e) => ({
          setContextId: (t) => {
            e.contextId = String(t);
          },
          setContextType: (t) => {
            e.contextType = t;
          },
          setEntityMeta: (t) => {
            t && t.data.meta && (e.entityMeta = d(t));
          },
          setUnloadedEntitiesData: (t) => {
            t && (e.unloadedEntitiesData = (0, a.pj)(t));
          },
          resetUnloadedEntitiesData: () => {
            e.unloadedEntitiesData = void 0;
          },
          setStatus: (t) => {
            e.status = t;
          },
          setCanMoveForward: (t) => {
            e.canMoveForward = t;
          },
          setCanMoveBackward: (t) => {
            e.canMoveBackward = t;
          },
          setVolume: (t) => {
            e.volume = t;
          },
          setCanSpeed: (t) => {
            e.canSpeed = t;
          },
          setSpeed: (t) => {
            e.speed = t;
          },
          setRepeatMode: (t) => {
            e.repeatMode = t;
          },
          setCanChangeRepeatMode: (t) => {
            e.canChangeRepeatMode = t;
          },
          setCanShuffle: (t) => {
            e.canShuffle = t;
          },
          setShuffle: (t) => {
            e.shuffle = t;
          },
          setCurrentlyPlayingTrackIndex: (t) => {
            e.currentlyPlayingTrackIndex = t;
          },
          setQuality: (t) => {
            e.quality = t;
          },
          setPlaylistFilter: (t) => {
            e.playlistFilter = t;
          },
        }));
      n(80128), n(18143);
      var j = n(99331),
        C = n(94975),
        w = n(84514);
    },
    91173: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n(87181),
        o = n(76873),
        s = n(80128);
      let l = () => {
        let { notify: e } = (0, o.d$W)(),
          { sonataState: t, fullscreenPlayer: n } = (0, o.oR4)(),
          l = (0, o.R$C)();
        return (0, i.useCallback)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let i = a.zq.NONE;
          switch (t.repeatMode) {
            case a.zq.NONE:
              i = a.zq.CONTEXT;
              break;
            case a.zq.CONTEXT:
              i = a.zq.ONE;
          }
          null == l || l.setRepeatMode(i),
            e((0, r.jsx)(s.NotificationRepeat, { repeatMode: i }), {
              containerId: n.modal.isOpened
                ? o.W$x.FULLSCREEN_INFO
                : o.W$x.INFO,
            });
        }, [
          n.modal.isOpened,
          e,
          l,
          t.canChangeRepeatMode,
          t.entityMeta,
          t.repeatMode,
        ]);
      };
    },
    16129: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var r = n(9753),
        i = n(98639),
        a = n(76873),
        o = n(18143);
      let s = () => {
        let { notify: e } = (0, a.d$W)(),
          { sonataState: t, fullscreenPlayer: n } = (0, a.oR4)(),
          s = (0, a.R$C)();
        return (0, i.useCallback)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == s || s.toggleShuffle(),
            e(
              (0, r.jsx)(o.NotificationShuffle, {
                shuffle: !!(null == s
                  ? void 0
                  : s.state.queueState.shuffle.value),
              }),
              {
                containerId: n.modal.isOpened
                  ? a.W$x.FULLSCREEN_INFO
                  : a.W$x.INFO,
              },
            ));
        }, [n.modal.isOpened, e, s, t.canShuffle, t.entityMeta]);
      };
    },
    80128: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationRepeat: function () {
          return p;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(98639),
        o = n(31014),
        s = n(87181),
        l = n(28852),
        c = n(2570),
        u = n(3084),
        d = n(15450),
        f = n.n(d);
      let p = (e) => {
        let { repeatMode: t, closeToast: n } = e,
          d = t === s.zq.ONE ? "repeat_one" : "repeat",
          p = (0, a.useMemo)(() => {
            let e;
            switch (t) {
              case s.zq.CONTEXT:
                e = (0, r.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case s.zq.ONE:
                e = (0, r.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case s.zq.NONE:
              default:
                e = (0, r.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, r.jsx)(c.Caption, {
              className: f().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, r.jsx)(u.Yj, {
          cover: (0, r.jsx)(l.Icon, {
            className: (0, i.W)(f().icon, {
              [f().icon_unset]: t === s.zq.NONE,
            }),
            size: "xs",
            variant: d,
          }),
          message: p,
          closeToast: n,
        });
      };
    },
    18143: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationShuffle: function () {
          return f;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(98639),
        o = n(31014),
        s = n(28852),
        l = n(2570),
        c = n(3084),
        u = n(54394),
        d = n.n(u);
      let f = (e) => {
        let { shuffle: t, closeToast: n } = e,
          u = (0, a.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, r.jsx)(o.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, r.jsx)(o.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, r.jsx)(l.Caption, {
                className: d().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, r.jsx)(c.Yj, {
          cover: (0, r.jsx)(s.Icon, {
            className: (0, i.W)(d().icon, { [d().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: u,
          closeToast: n,
        });
      };
    },
    99331: function (e, t, n) {
      "use strict";
      n.d(t, {
        RepeatButton: function () {
          return h;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(80542),
        o = n(23881),
        s = n(87181),
        l = n(39513),
        c = n(28852),
        u = n(91173),
        d = n(24749),
        f = n.n(d);
      let p = (e, t, n) =>
          t(
            e === s.zq.NONE || n
              ? { id: "player-actions.repeat" }
              : e === s.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        v = (e, t) =>
          e === s.zq.NONE || t
            ? o.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === s.zq.ONE
              ? o.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : o.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        h = (e) => {
          let {
              isDisabled: t,
              repeatMode: n,
              className: d,
              iconClassName: h,
              size: _ = "xxxs",
              iconSize: m = "xs",
              color: g,
              variant: b = "default",
            } = e,
            y = (0, u.t)(),
            { formatMessage: x } = (0, a.Z)(),
            j = t || n !== s.zq.ONE ? "repeat" : "repeat_one",
            C = p(n, x, t);
          return (0, r.jsx)(l.z, {
            className: d,
            radius: "round",
            size: _,
            variant: b,
            color: g,
            disabled: t,
            withRipple: !1,
            "aria-hidden": t,
            "aria-label": C,
            "aria-pressed": !t && n !== s.zq.NONE,
            onClick: y,
            icon: (0, r.jsx)(c.Icon, {
              size: m,
              variant: j,
              className: (0, i.W)(
                f().repeatIcon,
                f()["repeatIcon_".concat(n)],
                { [f().repeatIcon_disabled]: t },
                h,
              ),
            }),
            ...(0, o.BA)(v(n, t)),
          });
        };
    },
    94975: function (e, t, n) {
      "use strict";
      n.d(t, {
        ShuffleButton: function () {
          return f;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(80542),
        o = n(23881),
        s = n(39513),
        l = n(28852),
        c = n(16129),
        u = n(24584),
        d = n.n(u);
      let f = (e) => {
        let {
            isDisabled: t,
            shuffle: n,
            className: u,
            size: f = "xxxs",
            variant: p = "default",
            iconSize: v = "xs",
            color: h,
          } = e,
          _ = (0, c.m)(),
          { formatMessage: m } = (0, a.Z)();
        return (0, r.jsx)(s.z, {
          className: u,
          radius: "round",
          size: f,
          variant: p,
          color: h,
          withRipple: !1,
          disabled: t,
          "aria-label": m({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && n,
          "aria-hidden": t,
          icon: (0, r.jsx)(l.Icon, {
            variant: "shuffle",
            size: v,
            className: (0, i.W)(d().shuffleIcon, {
              [d().shuffleIcon_disabled]: t,
              [d().shuffleIcon_on]: !t && n,
              [d().shuffleIcon_off]: !t && !n,
            }),
          }),
          onClick: _,
          ...(0, o.BA)(o.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    84514: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataControls: function () {
          return T;
        },
      });
      var r = n(9753),
        i = n(9544),
        a = n(98639),
        o = n(92894),
        s = n(76873),
        l = n(91173);
      let c = () => {
        let { entityMeta: e } = (0, s.oR4)().sonataState,
          t = (0, s.R$C)();
        return {
          rewindBackwards: (0, a.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = t.state.playerState.progress.value.position - 15;
            t.setProgress(n < 0 ? 0 : n);
          }, [e, t]),
          rewindForward: (0, a.useCallback)(() => {
            if (!t || !e || !e.durationMs) return;
            let n = e.durationMs / 1e3,
              r = t.state.playerState.progress.value.position + 30;
            t.setProgress(r < n ? r : n);
          }, [e, t]),
        };
      };
      var u = n(16129),
        d = n(60836),
        f = n(80542),
        p = n(23881),
        v = n(39513),
        h = n(28852),
        _ = n(3084),
        m = n(84338);
      let g = () => {
        let {
            sonataState: e,
            modals: { buyPlusPopoverOverPlayer: t },
          } = (0, s.oR4)(),
          { isPassToProduct: n } = (0, s.NMB)(),
          r = (0, s.R$C)(),
          i = e.contextType === m.Ak.Generative;
        (0, a.useEffect)(() => {
          if (!n || i) return;
          let e =
            null == r
              ? void 0
              : r.state.playerState.event.onChange((e) => {
                  e === o.KX.PLAYING && t.open();
                });
          return () => {
            null == e || e();
          };
        }, [r, t, i, n]);
      };
      var b = n(99331),
        y = n(94975),
        x = n(13689),
        j = n.n(x);
      let C = { mainAxis: 44 },
        w = (0, i.Pi)((e) => {
          let {
              disabled: t,
              isPlaying: n,
              repeatMode: i,
              canMoveForward: o,
              canMoveBackward: l,
              canShuffle: c,
              shuffle: u,
              onClickNext: m,
              onClickPrev: x,
              onClickPlayPause: w,
              canChangeRepeatMode: k,
              className: S,
            } = e,
            { formatMessage: E } = (0, f.Z)(),
            {
              adState: N,
              modals: { buyPlusPopoverOverPlayer: A },
            } = (0, s.oR4)(),
            { isFreemium: O, hasFreeUserAccess: M } = (0, s.NMB)();
          g();
          let R = (0, a.useCallback)(
              () =>
                (0, r.jsx)(_.JM, {
                  className: j().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: n,
                  iconClassName: j().playButtonIcon,
                  forcedPlayAd: !0,
                  onClick: w,
                }),
              [n, w],
            ),
            T = (0, a.useCallback)(
              (e) => {
                e || A.close();
              },
              [A],
            );
          return (0, r.jsxs)("div", {
            className: (0, d.W)(j().root, S),
            children: [
              (0, r.jsx)("div", {
                className: j().buttonContainer,
                children:
                  (t || c) &&
                  !(null == N ? void 0 : N.isAdActive) &&
                  (0, r.jsx)(y.ShuffleButton, {
                    className: j().sonataButton,
                    size: "xxxs",
                    variant: "text",
                    iconSize: "xs",
                    isDisabled: t,
                    shuffle: u,
                    ...(0, p.BA)(p.bG.sonata.SHUFFLE_BUTTON),
                  }),
              }),
              (0, r.jsxs)("div", {
                className: j().sonataButtons,
                children: [
                  (0, r.jsx)(v.z, {
                    className: j().sonataButton,
                    variant: "text",
                    size: "m",
                    radius: "round",
                    "aria-hidden": !l,
                    disabled: !l,
                    withRipple: !1,
                    "aria-label": E({ id: "player-actions.previous-track" }),
                    icon: (0, r.jsx)(h.Icon, { variant: "previous" }),
                    onClick: x,
                    ...(0, p.BA)(p.bG.sonata.PREVIOUS_TRACK_BUTTON),
                  }),
                  (0, r.jsx)(_.pl, {
                    isEnabled: M,
                    isOpened: A.isOpened,
                    placement: "top",
                    onOpenChange: T,
                    offsetOptions: C,
                    textVariant: O ? "vibe" : "fullTracks",
                    renderChildren: R,
                  }),
                  (0, r.jsx)(v.z, {
                    className: j().sonataButton,
                    radius: "round",
                    size: "m",
                    variant: "text",
                    disabled: !o,
                    "aria-hidden": !o,
                    withRipple: !1,
                    "aria-label": E({ id: "player-actions.next-track" }),
                    icon: (0, r.jsx)(h.Icon, { variant: "next" }),
                    onClick: m,
                    ...(0, p.BA)(p.bG.sonata.NEXT_TRACK_BUTTON),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: j().buttonContainer,
                children:
                  (t || k) &&
                  !(null == N ? void 0 : N.isAdActive) &&
                  (0, r.jsx)(b.RepeatButton, {
                    className: j().sonataButton,
                    size: "xxxs",
                    variant: "text",
                    isDisabled: t,
                    iconSize: "xs",
                    repeatMode: i,
                  }),
              }),
            ],
          });
        }),
        k = (e) => {
          let {
            disabled: t,
            isPlaying: n,
            onClickPlayPause: i,
            className: a,
          } = e;
          return (0, r.jsx)(_.JM, {
            className: a,
            size: "s",
            disabled: t,
            isPlaying: n,
            onClick: i,
            forcedPlayAd: !0,
          });
        };
      var S = n(98014),
        E = n.n(S);
      let N = (0, i.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: i,
            canMoveForward: a,
            canMoveBackward: o,
            canRewind: s,
            canShuffle: l,
            onClickNext: c,
            onClickPrev: u,
            onRewindBackwardsClick: m,
            onRewindForwardClick: g,
            onClickPlayPause: x,
            canChangeRepeatMode: j,
            shuffle: C,
            className: w,
          } = e,
          { formatMessage: k } = (0, f.Z)();
        return (0, r.jsxs)("div", {
          className: (0, d.W)(E().root, w),
          children: [
            (0, r.jsxs)("div", {
              className: E().buttonContainer,
              children: [
                (t || l) &&
                  (0, r.jsx)(y.ShuffleButton, {
                    className: E().sonataButton,
                    size: "s",
                    iconSize: "xxs",
                    color: "secondary",
                    isDisabled: t,
                    shuffle: C,
                    ...(0, p.BA)(p.bG.sonata.SHUFFLE_BUTTON),
                  }),
                !t &&
                  s &&
                  (0, r.jsx)(v.z, {
                    className: (0, d.W)(E().sonataButton, E().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": k({ id: "player-actions.rewind-backwards" }),
                    icon: (0, r.jsx)(h.Icon, { variant: "rewindBackwards" }),
                    onClick: m,
                    ...(0, p.BA)(p.bG.sonata.REWIND_BACKWARDS_BUTTON),
                  }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: E().sonataButtons,
              children: [
                (0, r.jsx)(v.z, {
                  className: E().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.previous-track" }),
                  icon: (0, r.jsx)(h.Icon, { variant: "previous" }),
                  onClick: u,
                  ...(0, p.BA)(p.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, r.jsx)(_.JM, {
                  className: E().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: n,
                  iconClassName: E().playPauseButtonIcon,
                  onClick: x,
                }),
                (0, r.jsx)(v.z, {
                  className: E().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !a,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.next-track" }),
                  icon: (0, r.jsx)(h.Icon, { variant: "next" }),
                  onClick: c,
                  ...(0, p.BA)(p.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: E().buttonContainer,
              children: [
                !t &&
                  s &&
                  (0, r.jsx)(v.z, {
                    className: (0, d.W)(E().sonataButton, E().rewind),
                    color: "secondary",
                    size: "m",
                    radius: "round",
                    withRipple: !1,
                    "aria-label": k({ id: "player-actions.rewind-forward" }),
                    icon: (0, r.jsx)(h.Icon, { variant: "rewindForward" }),
                    onClick: g,
                    ...(0, p.BA)(p.bG.sonata.REWIND_FORWARD_BUTTON),
                  }),
                (t || j) &&
                  (0, r.jsx)(b.RepeatButton, {
                    className: E().sonataButton,
                    size: "s",
                    color: "secondary",
                    isDisabled: t,
                    iconSize: "xxs",
                    repeatMode: i,
                  }),
              ],
            }),
          ],
        });
      });
      var A = n(16092),
        O = n(75731),
        M = n.n(O);
      let R = (0, i.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: n,
              canMoveBackward: i,
              canRewind: o,
              onClickNext: l,
              onClickPrev: c,
              onRewindBackwardsClick: u,
              onRewindForwardClick: p,
              onClickPlayPause: g,
              className: b,
            } = e,
            { formatMessage: y } = (0, f.Z)(),
            { user: x, sonataState: j } = (0, s.oR4)(),
            C = (0, s.XUT)(),
            w = j.entityMeta,
            k = j.contextType === m.Ak.Generative,
            S = x.isAuthorized && !k,
            E = (0, A.SB)(j.entityMeta),
            N = (0, A.KX)(j.entityMeta);
          (0, a.useEffect)(() => {
            if (!j.isGenerativeContext)
              return (
                null == C || C.addShortcutsListener(s.Pwk.MAIN, s.yxF.LIKE, E),
                null == C ||
                  C.addShortcutsListener(s.Pwk.MAIN, s.yxF.DISLIKE, N),
                () => {
                  null == C ||
                    C.removeShortcutsListener(s.Pwk.MAIN, s.yxF.LIKE),
                    null == C ||
                      C.removeShortcutsListener(s.Pwk.MAIN, s.yxF.DISLIKE);
                }
              );
          }, [N, E, C, j.isGenerativeContext]);
          let O = (0, a.useMemo)(
              () =>
                o
                  ? (0, r.jsx)(v.z, {
                      className: M().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      withRipple: !1,
                      "aria-label": y({
                        id: "player-actions.rewind-backwards",
                      }),
                      icon: (0, r.jsx)(h.Icon, { variant: "rewindBackwards" }),
                      onClick: u,
                    })
                  : (0, r.jsx)(v.z, {
                      className: M().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !i,
                      withRipple: !1,
                      "aria-label": y({ id: "player-actions.previous-track" }),
                      icon: (0, r.jsx)(h.Icon, { variant: "previous" }),
                      onClick: c,
                    }),
              [o, i, y, c, u],
            ),
            R = (0, a.useMemo)(
              () =>
                o
                  ? (0, r.jsx)(v.z, {
                      className: M().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !n,
                      withRipple: !1,
                      "aria-label": y({ id: "player-actions.rewind-forward" }),
                      icon: (0, r.jsx)(h.Icon, { variant: "rewindForward" }),
                      onClick: p,
                    })
                  : (0, r.jsx)(v.z, {
                      className: M().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      withRipple: !1,
                      "aria-label": y({ id: "player-actions.next-track" }),
                      icon: (0, r.jsx)(h.Icon, { variant: "next" }),
                      onClick: l,
                    }),
              [o, n, y, l, p],
            );
          return (0, r.jsxs)("div", {
            className: (0, d.W)(M().root, b),
            children: [
              (0, r.jsx)("div", {
                className: M().buttonContainer,
                children:
                  w &&
                  S &&
                  (0, r.jsx)(_.Q1, { isDisliked: w.isDisliked, onClick: N }),
              }),
              (0, r.jsxs)("div", {
                className: M().sonataButtons,
                children: [
                  O,
                  (0, r.jsx)(_.JM, {
                    className: M().sonataButton,
                    iconSize: "xxl",
                    variant: "filled",
                    color: "secondary",
                    isPlaying: t,
                    iconClassName: M().playPauseButtonIcon,
                    onClick: g,
                  }),
                  R,
                ],
              }),
              (0, r.jsx)("div", {
                className: M().buttonContainer,
                children:
                  w &&
                  S &&
                  (0, r.jsx)(_.dJ, { isLiked: w.isLiked, onClick: E }),
              }),
            ],
          });
        }),
        T = (0, i.Pi)((e) => {
          var t, n;
          let { isMobile: i, entityMeta: d, isFullscreen: f, className: p } = e,
            {
              sonataState: v,
              vibe: h,
              adState: _,
              modals: { buyPlusPopoverOverPlayer: m },
            } = (0, s.oR4)(),
            g = (0, s.XUT)(),
            b = (0, s.R$C)(),
            { rewindBackwards: y, rewindForward: x } = c(),
            j = (0, s.RVp)(),
            C = (0, s.ozq)(),
            S = j && (null == d ? void 0 : d.isNonMusic),
            { togglePlay: E } = (0, s.QhE)({
              seeds:
                null !==
                  (n =
                    null === (t = h.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: s.Rhz.HOME,
              blockIdForFrom: s.BEo.RUP_MAIN_RADIO,
              onPlayInterrupted: m.open,
            }),
            A = (0, a.useMemo)(
              () =>
                _.isAdActive
                  ? _.isAdPlaying
                  : [
                      o.Xz.PLAYING,
                      o.Xz.LOADING_MEDIA_SOURCE,
                      o.Xz.LOADING_MEDIA_DATA,
                    ].includes(v.status),
              [v.status, _.isAdActive, _.isAdPlaying],
            ),
            O = (0, a.useCallback)(() => {
              if (_.isAdActive) {
                var e;
                null == C ||
                  null === (e = C.audioAdvertPlayback) ||
                  void 0 === e ||
                  e.togglePause();
                return;
              }
              d ? null == b || b.togglePause() : E();
            }, [
              d,
              b,
              E,
              _.isAdActive,
              null == C ? void 0 : C.audioAdvertPlayback,
            ]),
            M = (0, a.useCallback)(() => {
              null == b || b.moveForward();
            }, [b]),
            T = (0, a.useCallback)(() => {
              null == b || b.moveBackward();
            }, [b]),
            L = (0, u.m)(),
            I = (0, l.t)();
          (0, a.useEffect)(() => {
            if (
              !f &&
              (null == g ||
                g.addShortcutsListener(s.Pwk.MAIN, s.yxF.TOGGLE_PLAY, O),
              !_.isAdActive)
            )
              return (
                null == g ||
                  g.addShortcutsListener(s.Pwk.MAIN, s.yxF.TOGGLE_REPEAT, I),
                null == g ||
                  g.addShortcutsListener(s.Pwk.MAIN, s.yxF.TOGGLE_SHUFFLE, L),
                () => {
                  null == g ||
                    g.removeShortcutsListener(s.Pwk.MAIN, s.yxF.TOGGLE_PLAY),
                    _.isAdActive ||
                      (null == g ||
                        g.removeShortcutsListener(
                          s.Pwk.MAIN,
                          s.yxF.TOGGLE_SHUFFLE,
                        ),
                      null == g ||
                        g.removeShortcutsListener(
                          s.Pwk.MAIN,
                          s.yxF.TOGGLE_REPEAT,
                        ));
                }
              );
          }, [f, O, I, L, g, _.isAdActive]);
          let B = (0, a.useMemo)(() => (f ? (i ? R : N) : i ? k : w), [i, f]);
          return (0, r.jsx)(B, {
            className: p,
            disabled: null === v.entityMeta || (_.isAdActive && !i),
            isPlaying: A || !1,
            canMoveBackward: v.canMoveBackward && !_.isAdActive,
            canMoveForward: v.canMoveForward && !_.isAdActive,
            canShuffle: v.canShuffle,
            shuffle: v.shuffle,
            onClickPlayPause: O,
            onClickNext: M,
            onClickPrev: T,
            canRewind: S && !_.isAdActive,
            onRewindBackwardsClick: y,
            onRewindForwardClick: x,
            canChangeRepeatMode: v.canChangeRepeatMode,
            repeatMode: v.repeatMode,
          });
        });
    },
    16189: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return b;
        },
        C: function () {
          return i;
        },
      });
      var r = n(53367);
      let i = (e) => {
        let t = (0, r.wX)((0, r.kB)(e), r.UE, r.TP),
          n = Math.round(255 * t[0]),
          i = Math.round(255 * t[1]),
          a = Math.round(255 * t[2]);
        return "rgb(".concat(n, ", ").concat(i, ", ").concat(a, ")");
      };
      var a = n(9753),
        o = n(60836),
        s = n(9544),
        l = n(98639),
        c = n(23881),
        u = n(84338),
        d = n(78507),
        f = n(92894),
        p = n(76873);
      let v = (e) => {
          if (!e) return;
          let { width: t, height: n } = e.uniforms.size;
          return {
            "--vibe-animation-width": "".concat(2 * t, "px"),
            "--vibe-animation-height": "".concat(2 * n, "px"),
          };
        },
        h = (e) => {
          var t, n;
          let [r, i] = (0, l.useState)({}),
            { sonataState: a } = (0, p.oR4)();
          (0, l.useEffect)(() => {
            if (a.contextType === u.Ak.Vibe) {
              var t, n, o, s;
              r.id ===
                (null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id) &&
                !r.isLiked &&
                (null === (s = a.entityMeta) || void 0 === s
                  ? void 0
                  : s.isLiked) &&
                e(),
                i({
                  id:
                    null === (n = a.entityMeta) || void 0 === n ? void 0 : n.id,
                  isLiked:
                    null === (o = a.entityMeta) || void 0 === o
                      ? void 0
                      : o.isLiked,
                });
            }
          }, [
            a.contextType,
            null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id,
            null === (n = a.entityMeta) || void 0 === n ? void 0 : n.isLiked,
            r.id,
            r.isLiked,
            e,
          ]);
        };
      var _ = n(11799),
        m = n.n(_);
      let g = "vibe-animation",
        b = (0, s.Pi)((e) => {
          var t, n, i, s, _, b, y;
          let { className: x } = e,
            j = (0, l.useRef)(null),
            [C, w] = (0, p.zU3)(),
            { isIntersecting: k } =
              null !== (y = (0, d.S1)([j])[g]) && void 0 !== y ? y : {},
            { sonataState: S, user: E } = (0, p.oR4)(),
            { theme: N } = (0, p.FgM)(),
            A = (0, p.jpI)(),
            O =
              S.status === f.Xz.PLAYING &&
              (S.contextType === u.Ak.Vibe ||
                window.VIBE_ANIMATION_PLAY_ON_ANY_ENTITY);
          return (
            (0, l.useEffect)(() => {
              if (j.current) {
                var e, t;
                let n =
                    null === (t = S.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  i = E.collectionHue;
                w(new r.dr(j.current, null == A ? void 0 : A.analyser, i)),
                  null == C || C.applySettings({ hue: n, collectionHue: i }),
                  j.current.classList.add(m().root_visible);
              }
              return () => {
                null == C || C.destroy();
              };
            }, []),
            (0, l.useEffect)(() => {
              var e, t, n, r, i, a;
              let o =
                  null === (t = S.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                s =
                  null === (r = S.entityMeta) || void 0 === r
                    ? void 0
                    : null === (n = r.trackParameters) || void 0 === n
                      ? void 0
                      : n.energy,
                l =
                  null === (a = S.entityMeta) || void 0 === a
                    ? void 0
                    : null === (i = a.trackParameters) || void 0 === i
                      ? void 0
                      : i.userCollectionHue;
              l && E.setUserCollectionHue(l),
                O
                  ? null == C ||
                    C.playAnimation({ hue: o, collectionHue: l, energy: s })
                  : null == C || C.idleAnimation();
            }, [
              E,
              O,
              null === (n = S.entityMeta) || void 0 === n
                ? void 0
                : null === (t = n.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (s = S.entityMeta) || void 0 === s
                ? void 0
                : null === (i = s.trackParameters) || void 0 === i
                  ? void 0
                  : i.energy,
              null === (b = S.entityMeta) || void 0 === b
                ? void 0
                : null === (_ = b.trackParameters) || void 0 === _
                  ? void 0
                  : _.userCollectionHue,
              C,
            ]),
            (0, l.useEffect)(() => {
              let e = N === p.Q2A.Dark ? 0.0705 : 0.9607;
              null == C || C.applySettings({ backgroundColor: e });
            }, [C, N]),
            (0, l.useEffect)(() => {
              C &&
                (k
                  ? C.enableRender(r.nT.BLOCK_VISIBILITY)
                  : C.disableRender(r.nT.BLOCK_VISIBILITY));
            }, [k, C]),
            h(
              (0, l.useCallback)(() => {
                null == C || C.likeAnimation();
              }, [C]),
            ),
            (0, a.jsx)("div", {
              style: v(C),
              className: (0, o.W)(m().root, x),
              "data-intersection-property-id": g,
              ref: j,
              ...(0, c.BA)(c.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        });
    },
    68106: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return r.SomethingWentWrong;
        },
      });
      var r = n(18723);
    },
    18723: function (e, t, n) {
      "use strict";
      n.d(t, {
        SomethingWentWrong: function () {
          return h;
        },
      });
      var r = n(9753),
        i = n(60836),
        a = n(9544),
        o = n(98639),
        s = n(31014),
        l = n(39513),
        c = n(28852),
        u = n(2570),
        d = n(76873),
        f = n(3084),
        p = n(88178),
        v = n.n(p);
      let h = (0, a.Pi)((e) => {
        let { className: t, withBackwardControl: n = !0 } = e,
          a = (0, o.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: p } = (0, d.$Y6)();
        return (0, r.jsxs)("div", {
          className: (0, i.W)(v().root, t),
          children: [
            n &&
              (0, r.jsx)(f.nP, {
                withBackwardFallback: "/",
                className: (0, i.W)(v().navigation, {
                  [v().navigation_desktop]: !p,
                }),
                withForwardControl: !1,
              }),
            (0, r.jsxs)("div", {
              className: (0, i.W)(v().content, { [v().content_shrink]: !n }),
              children: [
                (0, r.jsx)(c.Icon, {
                  className: v().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, r.jsx)(u.Heading, {
                  className: (0, i.W)(v().title, v().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, r.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, r.jsxs)(u.Caption, {
                  className: (0, i.W)(v().text, v().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, r.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, r.jsx)(l.z, {
                  onClick: a,
                  className: v().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, r.jsxs)(u.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, r.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    6494: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
        content: "DefaultLayout_content__md70Z",
        content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
        notificationErrorContainer:
          "DefaultLayout_notificationErrorContainer__Qz_mD",
        notificationInfoContainer:
          "DefaultLayout_notificationInfoContainer__tKt7J",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
        playerBar: "DefaultLayout_playerBar___9IaS",
        barBelow: "DefaultLayout_barBelow__y6PFU",
      };
    },
    89599: function (e) {
      e.exports = {
        root: "WithTopBanner_root__P__x3",
        banner: "WithTopBanner_banner__x1Ia2",
        banner_canShow: "WithTopBanner_banner_canShow__5KA30",
        content: "WithTopBanner_content__6Vh7a",
      };
    },
    79756: function (e) {
      e.exports = {
        root: "SideAdvertBanner_root__hT1jJ",
        root_hidden: "SideAdvertBanner_root_hidden__Yg__R",
        content: "SideAdvertBanner_content__nDGWG",
      };
    },
    42033: function (e) {
      e.exports = {
        root: "TopAdvertBanner_root__aAZ0o",
        advert: "TopAdvertBanner_advert__LjAj_",
      };
    },
    70010: function (e) {
      e.exports = {
        root: "VibeButton_root___i3R5",
        ripple: "VibeButton_ripple__cmoBR",
        textContainer: "VibeButton_textContainer__j9nOW",
        titleContainer: "VibeButton_titleContainer__yrRRu",
        title: "VibeButton_title__sLC0I",
        subtitle: "VibeButton_subtitle__MQ_Ca",
        image: "VibeButton_image__GOwKJ",
        button: "VibeButton_button__tXFAm",
        button_loading: "VibeButton_button_loading__LYnUR",
        "applying-setting": "VibeButton_applying-setting__Jd_3C",
        icon: "VibeButton_icon__KIv7n",
      };
    },
    55215: function (e) {
      e.exports = {
        root: "VibeCard_root__9TDjP",
        playingAnimation: "VibeCard_playingAnimation__iRgvh",
        cover: "VibeCard_cover__LbX93",
        image: "VibeCard_image__luolD",
        controls: "VibeCard_controls__CcEVx",
        controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
        important: "VibeCard_important__WPWqc",
        control: "VibeCard_control__SM3H4",
        playControl: "VibeCard_playControl__pZxq5",
        playButton: "VibeCard_playButton__LWepP",
      };
    },
    77954: function (e) {
      e.exports = {
        root: "ClipCard_root__kzWjg",
        view: "ClipCard_view__MYSwA",
        playButton: "ClipCard_playButton__0Wyss",
        image: "ClipCard_image__hSUud",
        media: "ClipCard_media__dU4RM",
        cover: "ClipCard_cover__ztEok",
        cover_withVideo: "ClipCard_cover_withVideo__vPAxs",
        titleWrapper: "ClipCard_titleWrapper__L_c6t",
        title: "ClipCard_title__I1s7Q",
        artists: "ClipCard_artists__h0C9V",
        artistLink: "ClipCard_artistLink__t6oPP",
      };
    },
    87124: function (e) {
      e.exports = {
        root: "ClipCardShimmer_root__sIvNr",
        cover: "ClipCardShimmer_cover__yA4jz",
        title: "ClipCardShimmer_title__MCApK",
        text: "ClipCardShimmer_text__ajZGv",
      };
    },
    73895: function (e) {
      e.exports = {
        root: "ClipsCarousel_root__r1mGp",
        controls: "ClipsCarousel_controls__nZB6r",
        item: "ClipsCarousel_item__pqI3X",
        important: "ClipsCarousel_important__CgG_i",
      };
    },
    15450: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    54394: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    24749: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    24584: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    13689: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    98014: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    75731: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
    11799: function (e) {
      e.exports = {
        root: "VibeAnimation_root__UKMJy",
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    3924: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        main: "Content_main__8_wIa",
        root: "Content_root__IsH8s",
        sideBanner: "Content_sideBanner__Na07D",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    45578: function (e) {
      e.exports = {
        root: "TrackAboutModalDesktop_root__NHeeO",
        root_withFullscreen:
          "TrackAboutModalDesktop_root_withFullscreen__jOu4X",
        root_withWindows: "TrackAboutModalDesktop_root_withWindows__jIOiB",
        header: "TrackAboutModalDesktop_header__7Zl2n",
        modalContent: "TrackAboutModalDesktop_modalContent__yf4i5",
        infoBlock: "TrackAboutModalDesktop_infoBlock__egLLX",
        infoTitle: "TrackAboutModalDesktop_infoTitle__YHdNz",
        link: "TrackAboutModalDesktop_link__7832F",
        explicitMark: "TrackAboutModalDesktop_explicitMark__tgVyh",
        important: "TrackAboutModalDesktop_important__tCPvh",
        version: "TrackAboutModalDesktop_version__m0z2v",
        explicit: "TrackAboutModalDesktop_explicit__FGMHf",
        content: "TrackAboutModalDesktop_content__eEGZu",
        artistLink: "TrackAboutModalDesktop_artistLink__ao_zU",
        artists: "TrackAboutModalDesktop_artists__2SlTA",
        overlay: "TrackAboutModalDesktop_overlay__7cEGE",
        textShimmer: "TrackAboutModalDesktop_textShimmer__r5_AA",
        text: "TrackAboutModalDesktop_text__zcpo0",
      };
    },
    48508: function (e) {
      e.exports = {
        root: "TrackLyricsModal_root__KsVRf",
        header: "TrackLyricsModal_header__nWar3",
        modalContent: "TrackLyricsModal_modalContent__uYdL2",
        content: "TrackLyricsModal_content__Cstzi",
        explicitMark: "TrackLyricsModal_explicitMark__eL04d",
        important: "TrackLyricsModal_important__0Ie9h",
        version: "TrackLyricsModal_version__l9sxZ",
        overlay: "TrackLyricsModal_overlay__0Ehwu",
        writers: "TrackLyricsModal_writers__8t9Ic",
      };
    },
    17742: function (e) {
      e.exports = {
        root: "TrackModal_root__SMi88",
        header: "TrackModal_header__t3eBa",
        modalContent: "TrackModal_modalContent__ek3Ml",
        content: "TrackModal_content__KYuoY",
        overlay: "TrackModal_overlay__Ge3Wz",
      };
    },
    9331: function (e) {
      e.exports = {
        root: "CrackdownModal_root__aUmRM",
        root_light: "CrackdownModal_root_light__gXVOp",
        header: "CrackdownModal_header__z5tzQ",
        content: "CrackdownModal_content__4LAEn",
        plusLogoWrapper: "CrackdownModal_plusLogoWrapper__iC95H",
        plusLogo: "CrackdownModal_plusLogo__hxlmC",
        plusLogo_ru: "CrackdownModal_plusLogo_ru__MZlks",
        plusLogo_en: "CrackdownModal_plusLogo_en__chI5P",
        text: "CrackdownModal_text__OcdYY",
        title: "CrackdownModal_title__LjZ73",
        description: "CrackdownModal_description__dN1Cq",
        buttons: "CrackdownModal_buttons__rJWg3",
        buySubscriptionButton: "CrackdownModal_buySubscriptionButton__XFGw2",
        buySubscriptionButtonShimmer:
          "CrackdownModal_buySubscriptionButtonShimmer__FVXwn",
      };
    },
    84600: function (e) {
      e.exports = {
        content_ru: "BooksSectionDesktop_content_ru__Yauyu",
        content_by: "BooksSectionDesktop_content_by___eqCQ",
        card: "BooksSectionDesktop_card__blMRo",
        logo_ru: "BooksSectionDesktop_logo_ru__SRY4d",
        logo_en: "BooksSectionDesktop_logo_en__Szpr_",
      };
    },
    83330: function (e) {
      e.exports = {
        content_ru: "BooksSectionMobile_content_ru__xiiQh",
        content_by: "BooksSectionMobile_content_by__t_UNK",
        card: "BooksSectionMobile_card__t6bb7",
        logo_ru: "BooksSectionMobile_logo_ru__cnYJJ",
        logo_en: "BooksSectionMobile_logo_en__wcgiD",
      };
    },
    41610: function (e) {
      e.exports = {
        root: "BuySubscriptionBlock_root__vcGLK",
        text_main: "BuySubscriptionBlock_text_main__fU5RA",
        text_addition: "BuySubscriptionBlock_text_addition__bbHYT",
        text_secondary: "BuySubscriptionBlock_text_secondary__ZT9ke",
        button: "BuySubscriptionBlock_button__EqUAg",
        stickyContainer: "BuySubscriptionBlock_stickyContainer__yA50y",
        stickyContainer_enter:
          "BuySubscriptionBlock_stickyContainer_enter__50hEo",
        stickyContainer_enter_active:
          "BuySubscriptionBlock_stickyContainer_enter_active__4vFVC",
        "animation-show": "BuySubscriptionBlock_animation-show__xlvuU",
        stickyContainer_exit:
          "BuySubscriptionBlock_stickyContainer_exit__9Axef",
        stickyContainer_exit_active:
          "BuySubscriptionBlock_stickyContainer_exit_active__HjXVn",
        "animation-hide": "BuySubscriptionBlock_animation-hide__gnUki",
      };
    },
    307: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionDesktop_content_ru__gILD5",
        content_by: "KinopoiskSectionDesktop_content_by__31QvZ",
        card1: "KinopoiskSectionDesktop_card1__nlqOH",
        card2: "KinopoiskSectionDesktop_card2__ZMW4Z",
        card3: "KinopoiskSectionDesktop_card3__n9_1i",
        card4: "KinopoiskSectionDesktop_card4__TpOZ7",
        logo_ru: "KinopoiskSectionDesktop_logo_ru__f6OLB",
        logo_en: "KinopoiskSectionDesktop_logo_en__2oXnD",
      };
    },
    72739: function (e) {
      e.exports = {
        content_ru: "KinopoiskSectionMobile_content_ru__CCtkX",
        content_by: "KinopoiskSectionMobile_content_by__XjQaB",
        card1: "KinopoiskSectionMobile_card1__JCIyK",
        card2: "KinopoiskSectionMobile_card2__jTtnr",
        card3: "KinopoiskSectionMobile_card3__wTJCh",
        card4: "KinopoiskSectionMobile_card4__wi_RO",
        card4_by: "KinopoiskSectionMobile_card4_by__8ehWE",
        logo_ru: "KinopoiskSectionMobile_logo_ru__8alc5",
        logo_en: "KinopoiskSectionMobile_logo_en__A673z",
      };
    },
    83037: function (e) {
      e.exports = {
        root: "MainCardDesktop_root__qa00U",
        root_horizontal: "MainCardDesktop_root_horizontal__Fy_E0",
        textContainer: "MainCardDesktop_textContainer__mzWGu",
        imageContainer: "MainCardDesktop_imageContainer__81MQy",
        image: "MainCardDesktop_image__nUJz3",
        root_vertical: "MainCardDesktop_root_vertical__KGeJ2",
        imageContainer_align_center:
          "MainCardDesktop_imageContainer_align_center__kEU_O",
        imageContainer_align_right:
          "MainCardDesktop_imageContainer_align_right__T12Qo",
        text: "MainCardDesktop_text__omw7l",
      };
    },
    16338: function (e) {
      e.exports = {
        root: "MainCardMobile_root__AXTwk",
        image: "MainCardMobile_image__DZHrE",
        text: "MainCardMobile_text__rli4d",
      };
    },
    79588: function (e) {
      e.exports = {
        root: "MainSectionDesktop_root__MjgTL",
        headingContainer: "MainSectionDesktop_headingContainer__IaoRT",
        contentContainer: "MainSectionDesktop_contentContainer__L4OlR",
      };
    },
    80824: function (e) {
      e.exports = {
        root: "MainSectionMobile_root__l2R5l",
        headingContainer: "MainSectionMobile_headingContainer__6mJvx",
        contentContainer: "MainSectionMobile_contentContainer__vmaD5",
      };
    },
    93026: function (e) {
      e.exports = {
        root: "MoreInfoLink_root___TgXc",
        content: "MoreInfoLink_content__Rjqj_",
      };
    },
    50926: function (e) {
      e.exports = {
        content: "MusicSectionDesktop_content__uCWAp",
        card: "MusicSectionDesktop_card__YurZs",
        logo_ru: "MusicSectionDesktop_logo_ru__Tiwfx",
        logo_en: "MusicSectionDesktop_logo_en__dbYCi",
      };
    },
    21707: function (e) {
      e.exports = {
        content: "MusicSectionMobile_content__lAARM",
        card: "MusicSectionMobile_card__f5Xnr",
        logo_ru: "MusicSectionMobile_logo_ru__itG4j",
        logo_en: "MusicSectionMobile_logo_en__Tv2yd",
      };
    },
    19493: function (e) {
      e.exports = {
        content_ru: "PaySectionDesktop_content_ru__cR8My",
        content_by: "PaySectionDesktop_content_by__Fwlsi",
        card: "PaySectionDesktop_card__ivLUK",
        logo_ru: "PaySectionDesktop_logo_ru__A_QJS",
        logo_en: "PaySectionDesktop_logo_en__hRe0d",
      };
    },
    64691: function (e) {
      e.exports = {
        content_ru: "PaySectionMobile_content_ru__BMMo8",
        content_by: "PaySectionMobile_content_by__MY5lW",
        card: "PaySectionMobile_card__7M173",
        logo_ru: "PaySectionMobile_logo_ru__G7Bw4",
        logo_en: "PaySectionMobile_logo_en__pRLH8",
      };
    },
    49132: function (e) {
      e.exports = {
        root: "Paywall_root__XE_NC",
        section: "Paywall_section__Y30nd",
        section_faq: "Paywall_section_faq__43qaB",
        overlayScroll_desktop: "Paywall_overlayScroll_desktop__P46WF",
      };
    },
    80678: function (e) {
      e.exports = { root: "PaywallBY_root__XMtUB" };
    },
    14172: function (e) {
      e.exports = { topSection: "PaywallBYDesktop_topSection__AS3Pv" };
    },
    80099: function (e) {
      e.exports = { topSection: "PaywallBYMobile_topSection__sQ_sw" };
    },
    958: function (e) {
      e.exports = {
        root: "PaywallOtherDesktop_root__c19Ht",
        topSection: "PaywallOtherDesktop_topSection__d1CVV",
      };
    },
    86682: function (e) {
      e.exports = { topSection: "PaywallOtherMobile_topSection__Pscnw" };
    },
    12215: function (e) {
      e.exports = { root: "PaywallRU_root__X8j2f" };
    },
    19455: function (e) {
      e.exports = {
        root: "TopSectionRU_root__DP9u2",
        main: "TopSectionRU_main__PbltM",
        logo: "TopSectionRU_logo__LgT8M",
        moreInfoChildren: "TopSectionRU_moreInfoChildren__d82Ha",
        title: "TopSectionRU_title__csPE2",
        services: "TopSectionRU_services__cmjFp",
        service: "TopSectionRU_service__Q0dCS",
        serviceLogo: "TopSectionRU_serviceLogo___Xpo_",
        serviceLabel: "TopSectionRU_serviceLabel__Q3O8n",
        buySubscriptionBlock: "TopSectionRU_buySubscriptionBlock__VBGT5",
      };
    },
    51100: function (e) {
      e.exports = {
        content_ru: "PlusSectionDesktop_content_ru__85q1P",
        content_by: "PlusSectionDesktop_content_by__UBg10",
        card: "PlusSectionDesktop_card__h8LmR",
        logo_ru: "PlusSectionDesktop_logo_ru__G2AkZ",
        logo_en: "PlusSectionDesktop_logo_en__gn4qE",
      };
    },
    48681: function (e) {
      e.exports = {
        content_ru: "PlusSectionMobile_content_ru__OvJV0",
        content_by: "PlusSectionMobile_content_by__d5iGm",
        card: "PlusSectionMobile_card__QbwGe",
        logo_ru: "PlusSectionMobile_logo_ru___FFew",
        logo_en: "PlusSectionMobile_logo_en__u_HSO",
      };
    },
    15986: function (e) {
      e.exports = {
        root: "TopSectionDesktop_root__lDNkV",
        wrapper: "TopSectionDesktop_wrapper__sEPZr",
        content: "TopSectionDesktop_content__356Uk",
        title: "TopSectionDesktop_title__JFo6R",
        label: "TopSectionDesktop_label__JmilG",
        buySubscriptionBlock: "TopSectionDesktop_buySubscriptionBlock__dhv3Z",
      };
    },
    65371: function (e) {
      e.exports = {
        root: "TopSectionMobile_root__bl_XJ",
        image: "TopSectionMobile_image__t_hCH",
        content: "TopSectionMobile_content__sqstr",
        title: "TopSectionMobile_title__O_Zx0",
        buySubscriptionBlock: "TopSectionMobile_buySubscriptionBlock__NSVnY",
        moreInfoLink: "TopSectionMobile_moreInfoLink__zjcOO",
      };
    },
    76099: function (e) {
      e.exports = {
        root: "PaywallModal_root__HIYOy",
        header: "PaywallModal_header__3oCYF",
        closeButton: "PaywallModal_closeButton__rkLNM",
        content: "PaywallModal_content__mVxnz",
      };
    },
    88178: function (e) {
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
