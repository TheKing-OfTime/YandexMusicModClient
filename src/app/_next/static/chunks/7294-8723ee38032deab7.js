"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7294],
  {
    17294: function (e, t, r) {
      r.d(t, {
        t: function () {
          return f;
        },
      });
      var n,
        o,
        u = r(73484),
        l = r(65067),
        a = {
          5881: (e, t, r) => {
            function n() {
              for (var e, t, r = 0, n = ""; r < arguments.length; )
                (e = arguments[r++]) &&
                  (t = (function e(t) {
                    var r,
                      n,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                      else for (r in t) t[r] && (o && (o += " "), (o += r));
                    }
                    return o;
                  })(e)) &&
                  (n && (n += " "), (n += t));
              return n;
            }
            r.r(t), r.d(t, { clsx: () => n, default: () => o });
            let o = n;
          },
          8239: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            let n = {
              root: "By12CU9obvaH0jYtauNw",
              root_scrolling: "MFfv7uDaaJhS_oiAzQNT",
              root_notScrolling: "pnFSEGiRmI9JuhUxbfVe",
              container: "YsFmmSnMXb5VMh5VyqeV",
            };
          },
          839: (e, t, r) => {
            r.r(t),
              r.d(t, {
                DOWN: () => a,
                LEFT: () => o,
                RIGHT: () => u,
                UP: () => l,
                useSwipeable: () => p,
              });
            var n = r(810);
            let o = "Left",
              u = "Right",
              l = "Up",
              a = "Down",
              s = {
                delta: 10,
                preventScrollOnSwipe: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0,
                swipeDuration: 1 / 0,
                touchEventOptions: { passive: !0 },
              },
              i = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0],
              },
              c = "mousemove",
              f = "mouseup";
            function d(e, t) {
              if (0 === t) return e;
              let r = (Math.PI / 180) * t;
              return [
                e[0] * Math.cos(r) + e[1] * Math.sin(r),
                e[1] * Math.cos(r) - e[0] * Math.sin(r),
              ];
            }
            function p(e) {
              var t, r, p;
              let b;
              let { trackMouse: v } = e,
                O = n.useRef(Object.assign({}, i)),
                g = n.useRef(Object.assign({}, s)),
                m = n.useRef(Object.assign({}, g.current));
              for (b in ((m.current = Object.assign({}, g.current)),
              (g.current = Object.assign(Object.assign({}, s), e)),
              s))
                void 0 === g.current[b] && (g.current[b] = s[b]);
              let [h, y] = n.useMemo(
                () =>
                  (function (e, t) {
                    let r = (t) => {
                        let r = "touches" in t;
                        (r && t.touches.length > 1) ||
                          e((e, o) => {
                            o.trackMouse &&
                              !r &&
                              (document.addEventListener(c, n),
                              document.addEventListener(f, v));
                            let { clientX: u, clientY: l } = r
                                ? t.touches[0]
                                : t,
                              a = d([u, l], o.rotationAngle);
                            return (
                              o.onTouchStartOrOnMouseDown &&
                                o.onTouchStartOrOnMouseDown({ event: t }),
                              Object.assign(
                                Object.assign(Object.assign({}, e), i),
                                {
                                  initial: a.slice(),
                                  xy: a,
                                  start: t.timeStamp || 0,
                                },
                              )
                            );
                          });
                      },
                      n = (t) => {
                        e((e, r) => {
                          let n = "touches" in t;
                          if (n && t.touches.length > 1) return e;
                          if (t.timeStamp - e.start > r.swipeDuration)
                            return e.swiping
                              ? Object.assign(Object.assign({}, e), {
                                  swiping: !1,
                                })
                              : e;
                          let { clientX: i, clientY: c } = n ? t.touches[0] : t,
                            [f, p] = d([i, c], r.rotationAngle),
                            b = f - e.xy[0],
                            v = p - e.xy[1],
                            O = Math.abs(b),
                            g = Math.abs(v),
                            m = (t.timeStamp || 0) - e.start,
                            h = O > g ? (b > 0 ? u : o) : v > 0 ? a : l,
                            y =
                              "number" == typeof r.delta
                                ? r.delta
                                : r.delta[h.toLowerCase()] || s.delta;
                          if (O < y && g < y && !e.swiping) return e;
                          let w = {
                            absX: O,
                            absY: g,
                            deltaX: b,
                            deltaY: v,
                            dir: h,
                            event: t,
                            first: e.first,
                            initial: e.initial,
                            velocity: Math.sqrt(O * O + g * g) / (m || 1),
                            vxvy: [b / (m || 1), v / (m || 1)],
                          };
                          w.first && r.onSwipeStart && r.onSwipeStart(w),
                            r.onSwiping && r.onSwiping(w);
                          let S = !1;
                          return (
                            (r.onSwiping ||
                              r.onSwiped ||
                              r["onSwiped".concat(h)]) &&
                              (S = !0),
                            S &&
                              r.preventScrollOnSwipe &&
                              r.trackTouch &&
                              t.cancelable &&
                              t.preventDefault(),
                            Object.assign(Object.assign({}, e), {
                              first: !1,
                              eventData: w,
                              swiping: !0,
                            })
                          );
                        });
                      },
                      p = (t) => {
                        e((e, r) => {
                          let n;
                          if (e.swiping && e.eventData) {
                            if (t.timeStamp - e.start < r.swipeDuration) {
                              (n = Object.assign(
                                Object.assign({}, e.eventData),
                                { event: t },
                              )),
                                r.onSwiped && r.onSwiped(n);
                              let o = r["onSwiped".concat(n.dir)];
                              o && o(n);
                            }
                          } else r.onTap && r.onTap({ event: t });
                          return (
                            r.onTouchEndOrOnMouseUp &&
                              r.onTouchEndOrOnMouseUp({ event: t }),
                            Object.assign(
                              Object.assign(Object.assign({}, e), i),
                              { eventData: n },
                            )
                          );
                        });
                      },
                      b = () => {
                        document.removeEventListener(c, n),
                          document.removeEventListener(f, v);
                      },
                      v = (e) => {
                        b(), p(e);
                      },
                      O = (e, t) => {
                        let o = () => {};
                        if (e && e.addEventListener) {
                          let u = Object.assign(
                              Object.assign({}, s.touchEventOptions),
                              t.touchEventOptions,
                            ),
                            l = [
                              ["touchstart", r, u],
                              [
                                "touchmove",
                                n,
                                Object.assign(
                                  Object.assign({}, u),
                                  t.preventScrollOnSwipe ? { passive: !1 } : {},
                                ),
                              ],
                              ["touchend", p, u],
                            ];
                          l.forEach((t) => {
                            let [r, n, o] = t;
                            return e.addEventListener(r, n, o);
                          }),
                            (o = () =>
                              l.forEach((t) => {
                                let [r, n] = t;
                                return e.removeEventListener(r, n);
                              }));
                        }
                        return o;
                      },
                      g = {
                        ref: (t) => {
                          null !== t &&
                            e((e, r) => {
                              if (e.el === t) return e;
                              let n = {};
                              return (
                                e.el &&
                                  e.el !== t &&
                                  e.cleanUpTouch &&
                                  (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                r.trackTouch && t && (n.cleanUpTouch = O(t, r)),
                                Object.assign(
                                  Object.assign(Object.assign({}, e), {
                                    el: t,
                                  }),
                                  n,
                                )
                              );
                            });
                        },
                      };
                    return t.trackMouse && (g.onMouseDown = r), [g, O];
                  })((e) => (O.current = e(O.current, g.current)), {
                    trackMouse: v,
                  }),
                [v],
              );
              return (
                (O.current =
                  ((t = O.current),
                  (r = g.current),
                  (p = m.current),
                  r.trackTouch && t.el
                    ? t.cleanUpTouch
                      ? r.preventScrollOnSwipe !== p.preventScrollOnSwipe ||
                        r.touchEventOptions.passive !==
                          p.touchEventOptions.passive
                        ? (t.cleanUpTouch(),
                          Object.assign(Object.assign({}, t), {
                            cleanUpTouch: y(t.el, r),
                          }))
                        : t
                      : Object.assign(Object.assign({}, t), {
                          cleanUpTouch: y(t.el, r),
                        })
                    : (t.cleanUpTouch && t.cleanUpTouch(),
                      Object.assign(Object.assign({}, t), {
                        cleanUpTouch: void 0,
                      })))),
                h
              );
            }
          },
          6161: (e, t, r) => {
            var n = r(810),
              o = Symbol.for("react.element"),
              u = Symbol.for("react.fragment"),
              l = Object.prototype.hasOwnProperty,
              a =
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              s = { key: !0, ref: !0, __self: !0, __source: !0 };
            function i(e, t, r) {
              var n,
                u = {},
                i = null,
                c = null;
              for (n in (void 0 !== r && (i = "" + r),
              void 0 !== t.key && (i = "" + t.key),
              void 0 !== t.ref && (c = t.ref),
              t))
                l.call(t, n) && !s.hasOwnProperty(n) && (u[n] = t[n]);
              if (e && e.defaultProps)
                for (n in (t = e.defaultProps))
                  void 0 === u[n] && (u[n] = t[n]);
              return {
                $$typeof: o,
                type: e,
                key: i,
                ref: c,
                props: u,
                _owner: a.current,
              };
            }
            (t.Fragment = u), (t.jsx = i), (t.jsxs = i);
          },
          9541: (e, t, r) => {
            e.exports = r(6161);
          },
          9110: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable =
                t.useReturnValue =
                t.useCallbackRef =
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
            var n = r(245);
            Object.defineProperty(t, "useForwardRef", {
              enumerable: !0,
              get: function () {
                return n.useForwardRef;
              },
            });
            var o = r(2067);
            Object.defineProperty(t, "useScroll", {
              enumerable: !0,
              get: function () {
                return o.useScroll;
              },
            });
            var u = r(5188);
            Object.defineProperty(t, "useKeyboardNavigation", {
              enumerable: !0,
              get: function () {
                return u.useKeyboardNavigation;
              },
            });
            var l = r(5663);
            Object.defineProperty(t, "useIntersectionObserver", {
              enumerable: !0,
              get: function () {
                return l.useIntersectionObserver;
              },
            }),
              Object.defineProperty(t, "createIntersectionObserver", {
                enumerable: !0,
                get: function () {
                  return l.createIntersectionObserver;
                },
              }),
              Object.defineProperty(t, "getElementNameByDataAttribute", {
                enumerable: !0,
                get: function () {
                  return l.getElementNameByDataAttribute;
                },
              });
            var a = r(2101);
            Object.defineProperty(t, "useElementOffsetY", {
              enumerable: !0,
              get: function () {
                return a.useElementOffsetY;
              },
            });
            var s = r(2767);
            Object.defineProperty(t, "useForceUpdateRef", {
              enumerable: !0,
              get: function () {
                return s.useForceUpdateRef;
              },
            });
            var i = r(9019);
            Object.defineProperty(t, "useIsomorphicEffect", {
              enumerable: !0,
              get: function () {
                return i.useIsomorphicEffect;
              },
            });
            var c = r(2947);
            Object.defineProperty(t, "useResize", {
              enumerable: !0,
              get: function () {
                return c.useResize;
              },
            });
            var f = r(6699);
            Object.defineProperty(t, "useDebouncedToggle", {
              enumerable: !0,
              get: function () {
                return f.useDebouncedToggle;
              },
            });
            var d = r(8691);
            Object.defineProperty(t, "useCallbackRef", {
              enumerable: !0,
              get: function () {
                return d.useCallbackRef;
              },
            });
            var p = r(998);
            Object.defineProperty(t, "useReturnValue", {
              enumerable: !0,
              get: function () {
                return p.useReturnValue;
              },
            });
            var b = r(4395);
            Object.defineProperty(t, "usePopoverSwipeable", {
              enumerable: !0,
              get: function () {
                return b.usePopoverSwipeable;
              },
            });
          },
          8691: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useCallbackRef = void 0);
            let n = r(810);
            t.useCallbackRef = function (e) {
              let t = (0, n.useRef)({
                stableFn: function () {
                  for (
                    var e = arguments.length, r = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return t.current.callback(...r);
                },
                callback: e,
              });
              return (
                (0, n.useInsertionEffect)(() => {
                  t.current.callback = e;
                }),
                t.current.stableFn
              );
            };
          },
          1381: (e, t, r) => {
            var n, o;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
            let u = r(839),
              l = r(8691);
            ((o = n || (t.SwipeablePlacement = n = {})).TOP = "top"),
              (o.BOTTOM = "bottom"),
              (o.RIGHT = "right"),
              (o.LEFT = "left");
            let a = (e) => {
                let { ref: t, deltaY: r, deltaX: o, placement: u } = e;
                requestAnimationFrame(() => {
                  t.current &&
                    ((t.current.style.willChange = "transform"),
                    (t.current.style.transform =
                      u === n.TOP || u === n.BOTTOM
                        ? "translateY(".concat(r || 0, "px)")
                        : "translateX(".concat(o || 0, "px)")));
                });
              },
              s = (e) => {
                let { ref: t, deltaY: r, deltaX: o, placement: u } = e;
                switch (u) {
                  case n.TOP:
                    r <= 0 && a({ ref: t, deltaY: r, deltaX: o, placement: u });
                    break;
                  case n.RIGHT:
                    o >= 0 && a({ ref: t, deltaY: r, deltaX: o, placement: u });
                    break;
                  case n.LEFT:
                    o <= 0 && a({ ref: t, deltaY: r, deltaX: o, placement: u });
                    break;
                  default:
                    r >= 0 && a({ ref: t, deltaY: r, deltaX: o, placement: u });
                }
              },
              i = (e) => {
                requestAnimationFrame(() => {
                  e.current &&
                    ((e.current.style.transition = "none"),
                    (e.current.style.willChange = ""),
                    (e.current.style.transform = ""));
                });
              },
              c = (e) => {
                let {
                  ref: t,
                  deltaY: r,
                  deltaX: o,
                  placement: u,
                  threshold: l = 25,
                } = e;
                if (!t.current) return !1;
                let a =
                  (l / 100) *
                  (u === n.TOP || u === n.BOTTOM
                    ? t.current.offsetHeight
                    : t.current.offsetWidth);
                switch (u) {
                  case n.TOP:
                    return r < 0 && Math.abs(r) >= a;
                  case n.RIGHT:
                    return o > 0 && o >= a;
                  case n.LEFT:
                    return o < 0 && Math.abs(o) >= a;
                  default:
                    return r > 0 && r >= a;
                }
              };
            t.useComponentSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: r = {},
                  onClose: n,
                  disableSwipe: o,
                  placement: a,
                  threshold: f,
                } = e,
                d = (0, l.useCallbackRef)(() => {
                  n && (i(t), n());
                }),
                p = (0, l.useCallbackRef)((e) => {
                  o ||
                    s({
                      ref: t,
                      deltaY: e.deltaY,
                      deltaX: e.deltaX,
                      placement: a,
                    });
                }),
                b = (0, l.useCallbackRef)((e) => {
                  !o &&
                    (c({
                      ref: t,
                      deltaY: e.deltaY,
                      deltaX: e.deltaX,
                      placement: a,
                      threshold: f,
                    })
                      ? n && (i(t), n())
                      : i(t));
                });
              return {
                handlers: (0, u.useSwipeable)({
                  onSwiped: b,
                  onSwiping: p,
                  trackMouse: !0,
                  trackTouch: !0,
                  ...r,
                }),
                onCloseCallback: d,
              };
            };
          },
          6699: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useDebouncedToggle = void 0);
            let n = r(352),
              o = r(810);
            t.useDebouncedToggle = (e) => {
              let { delay: t, initialState: r, throttleTimeout: u } = e,
                l = (0, o.useRef)(null),
                [a, s] = (0, o.useState)(!!r),
                i = (0, o.useMemo)(
                  () =>
                    (0, n.throttle)(() => {
                      s(!r),
                        l.current && window.clearTimeout(l.current),
                        (l.current = window.setTimeout(() => {
                          s(!!r);
                        }, t));
                    }, u),
                  [t, r, u],
                ),
                c = (0, o.useCallback)(() => {
                  s(!!r), l.current && window.clearTimeout(l.current);
                }, [r]);
              return (
                (0, o.useEffect)(
                  () => () => {
                    l.current && window.clearTimeout(l.current);
                  },
                  [],
                ),
                { state: a, handleDebouncedToggle: i, reset: c }
              );
            };
          },
          2101: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useElementOffsetY = void 0);
            let n = r(810),
              o = r(2067),
              u = r(2767);
            t.useElementOffsetY = (e) => {
              let [t, r] = (0, u.useForceUpdateRef)(),
                [l, a] = (0, n.useState)(),
                s = (0, n.useCallback)(() => {
                  let e = null == t ? void 0 : t.getBoundingClientRect();
                  e && a(e.y);
                }, [t]);
              return (
                (0, n.useLayoutEffect)(s),
                (0, o.useScroll)({ onScroll: s, elementRef: e }),
                { forceUpdateRefCallback: r, offsetY: l }
              );
            };
          },
          2767: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForceUpdateRef = void 0);
            let n = r(810);
            t.useForceUpdateRef = () => {
              let [e, t] = (0, n.useState)(null);
              return [
                e,
                (0, n.useCallback)((e) => {
                  t((t) => (t !== e ? e : t));
                }, []),
              ];
            };
          },
          245: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useForwardRef = void 0);
            let n = r(810);
            t.useForwardRef = function (e, t) {
              let r = (0, n.useRef)(t);
              return (
                (0, n.useEffect)(() => {
                  e &&
                    ("function" == typeof e
                      ? e(r.current)
                      : (e.current = r.current));
                }, [e]),
                r
              );
            };
          },
          5663: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIntersectionObserver =
                t.createIntersectionObserver =
                t.getElementNameByDataAttribute =
                t.isInViewportNow =
                t.defaultOptions =
                  void 0);
            let n = r(810),
              { innerWidth: o = 0, innerHeight: u = 0 } = window;
            function l(e) {
              let {
                top: t,
                right: r,
                bottom: n,
                left: l,
              } = e.getBoundingClientRect();
              return (
                ((t >= 0 && t <= u) || (n >= 0 && n <= u)) &&
                ((l >= 0 && l <= o) || (r >= 0 && r <= o))
              );
            }
            function a(e) {
              var t, r;
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "data-intersection-property-id";
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, n)) && void 0 !== r
                ? r
                : e.attributes[0];
            }
            function s(e, t) {
              let r = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  e(t, r);
                });
              }, t);
              return r;
            }
            (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
              (t.isInViewportNow = l),
              (t.getElementNameByDataAttribute = a),
              (t.createIntersectionObserver = s),
              (t.useIntersectionObserver = function (e, r, o) {
                let [
                    { freezeOnceVisible: u, preflightCheck: i, ...c },
                    f = !1,
                  ] =
                    "boolean" == typeof r || void 0 === r
                      ? [t.defaultOptions, r]
                      : [{ ...t.defaultOptions, ...r }, o],
                  [d, p] = (0, n.useState)({}),
                  b = (0, n.useRef)(new Set()),
                  v = (0, n.useMemo)(
                    () =>
                      f
                        ? null
                        : s((e) => {
                            let t = a(e.target);
                            if (t && v) {
                              if (b.current.has(t)) return;
                              p((r) => ({
                                ...r,
                                [t]: { isIntersecting: e.isIntersecting },
                              })),
                                u &&
                                  e.isIntersecting &&
                                  (b.current.add(t), v.unobserve(e.target));
                            }
                          }, c),
                    [f],
                  );
                return (
                  (0, n.useLayoutEffect)(
                    () => (
                      v &&
                        !f &&
                        e.forEach((e) => {
                          if (e.current) {
                            let t = !1;
                            if (i && (t = l(e.current))) {
                              let t = a(e.current);
                              p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                            }
                            t || v.observe(e.current);
                          }
                        }),
                      () => {
                        v && v.disconnect();
                      }
                    ),
                    [f, v, e.length],
                  ),
                  d
                );
              });
          },
          9019: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useIsomorphicEffect = void 0);
            let n = r(810);
            t.useIsomorphicEffect =
              "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
          },
          5188: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useKeyboardNavigation = void 0);
            let n = r(810);
            function o(e, t) {
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
                  navigationItemsSelector: r,
                  activeAttributeName: u = "aria-selected",
                } = t,
                l = (0, n.useCallback)(
                  (t) => {
                    let n = o(e, r);
                    if (!n.length) return;
                    let u = t.target,
                      l = n.indexOf(u);
                    if (-1 === l) return;
                    let [a] = n,
                      s = n.at(-1),
                      i = null;
                    switch (t.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        i = n[l - 1] || s;
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        i = n[l + 1] || a;
                        break;
                      case "Home":
                        i = a;
                        break;
                      case "End":
                        i = s;
                    }
                    null !== i && (i.focus(), t.preventDefault());
                  },
                  [r, e],
                );
              (0, n.useEffect)(() => {
                let t = e.current;
                return (
                  null == t || t.addEventListener("keydown", l),
                  () =>
                    null == t ? void 0 : t.removeEventListener("keydown", l)
                );
              }, [e, l]),
                (0, n.useEffect)(() => {
                  o(e, r).forEach((e) => {
                    e.hasAttribute(u) &&
                      ("true" === e.getAttribute(u)
                        ? (e.tabIndex = 0)
                        : (e.tabIndex = -1));
                  });
                });
            };
          },
          4395: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.usePopoverSwipeable = void 0);
            let n = r(810),
              o = r(1381);
            t.usePopoverSwipeable = (e) => {
              let {
                  ref: t,
                  swipeableProps: r = {},
                  onClose: u,
                  disableSwipe: l,
                  placement: a,
                  threshold: s,
                } = e,
                i = (0, n.useMemo)(() => {
                  switch (a) {
                    case "top":
                    case "top-end":
                    case "top-start":
                      return o.SwipeablePlacement.TOP;
                    case "right":
                    case "right-end":
                    case "right-start":
                      return o.SwipeablePlacement.RIGHT;
                    case "left":
                    case "left-end":
                    case "left-start":
                      return o.SwipeablePlacement.LEFT;
                    default:
                      return o.SwipeablePlacement.BOTTOM;
                  }
                }, [a]);
              return (0, o.useComponentSwipeable)({
                ref: t,
                swipeableProps: r,
                onClose: u,
                disableSwipe: l,
                placement: i,
                threshold: s,
              });
            };
          },
          2947: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useResize = void 0);
            let n = r(810),
              o = r(361);
            t.useResize = (e, t) => {
              (0, n.useEffect)(() => {
                let r = (0, o.getElementFromRefOrElement)(t);
                if (null === r) return;
                let n = null != r ? r : document.documentElement,
                  u = new ResizeObserver(e);
                return u.observe(n), () => u.disconnect();
              }, [t, e]);
            };
          },
          998: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useReturnValue = void 0),
              (t.useReturnValue = (e) => e());
          },
          2067: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let n = r(810),
              o = r(361),
              u = r(6699);
            t.useScroll = (e) => {
              let { onScroll: t, listenIsScrolling: r, elementRef: l } = e,
                { state: a, handleDebouncedToggle: s } = (0,
                u.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                i = (0, n.useCallback)(() => {
                  r && s(), null == t || t();
                }, [r, s, t]);
              return (
                (0, n.useEffect)(() => {
                  let e = (0, o.getElementFromRefOrElement)(l);
                  if (null === e) return;
                  let t = null != e ? e : window,
                    r = { capture: !0, passive: !0 };
                  return (
                    t.addEventListener("scroll", i, r),
                    () => t.removeEventListener("scroll", i, r)
                  );
                }, [l, i]),
                a
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
          8429: function (e, t, r) {
            var n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ScrollableContent = t.ScrollableContentComponent = void 0);
            let o = r(9541),
              u = r(810),
              l = r(5881),
              a = r(9110),
              s = n(r(8239));
            (t.ScrollableContentComponent = (e) => {
              let {
                  forwardRef: t,
                  className: r,
                  containerClassName: n,
                  children: u,
                  ...i
                } = e,
                c = (0, a.useForwardRef)(t, null),
                f = (0, a.useScroll)({ listenIsScrolling: !0, elementRef: c });
              return (0, o.jsx)("div", {
                className: (0, l.clsx)(
                  s.default.root,
                  {
                    [s.default.root_scrolling]: f,
                    [s.default.root_notScrolling]: !f,
                  },
                  r,
                ),
                ref: c,
                ...i,
                children: (0, o.jsx)("div", {
                  className: (0, l.clsx)(s.default.container, n),
                  children: u,
                }),
              });
            }),
              (t.ScrollableContent = (0, u.forwardRef)((e, r) =>
                (0, o.jsx)(t.ScrollableContentComponent, {
                  forwardRef: r,
                  ...e,
                }),
              ));
          },
          352: (e) => {
            e.exports = u;
          },
          810: (e) => {
            e.exports = o || (o = r.t(l, 2));
          },
        },
        s = {};
      function i(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var r = (s[e] = { exports: {} });
        return a[e].call(r.exports, r, r.exports, i), r.exports;
      }
      (i.d = (e, t) => {
        for (var r in t)
          i.o(t, r) &&
            !i.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (i.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var c = {};
      Object.defineProperty(c, "X", { value: !0 }),
        (c.t = void 0),
        (n = i(8429)),
        Object.defineProperty(c, "t", {
          enumerable: !0,
          get: function () {
            return n.ScrollableContent;
          },
        });
      var f = c.t;
      c.X;
    },
  },
]);
