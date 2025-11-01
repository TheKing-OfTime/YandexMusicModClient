"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7747],
    {
        57747: (e, t, r) => {
            r.d(t, { N: () => c });
            var n,
                o = r(93225),
                u = r(66268),
                a = {
                    5881: (e, t, r) => {
                        function n() {
                            for (
                                var e, t, r = 0, n = "";
                                r < arguments.length;

                            )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = "";
                                        if (
                                            "string" == typeof t ||
                                            "number" == typeof t
                                        )
                                            o += t;
                                        else if ("object" == typeof t)
                                            if (Array.isArray(t))
                                                for (r = 0; r < t.length; r++)
                                                    t[r] &&
                                                        (n = e(t[r])) &&
                                                        (o && (o += " "),
                                                        (o += n));
                                            else
                                                for (r in t)
                                                    t[r] &&
                                                        (o && (o += " "),
                                                        (o += r));
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
                    7672: (e, t, r) => {
                        r.r(t),
                            r.d(t, {
                                DOWN: () => l,
                                LEFT: () => o,
                                RIGHT: () => u,
                                UP: () => a,
                                useSwipeable: () => b,
                            });
                        var n = r(810);
                        let o = "Left",
                            u = "Right",
                            a = "Up",
                            l = "Down",
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
                        function b(e) {
                            var t, r, b;
                            let p,
                                { trackMouse: v } = e,
                                g = n.useRef(Object.assign({}, i)),
                                O = n.useRef(Object.assign({}, s)),
                                m = n.useRef(Object.assign({}, O.current));
                            for (p in ((m.current = Object.assign(
                                {},
                                O.current,
                            )),
                            (O.current = Object.assign(
                                Object.assign({}, s),
                                e,
                            )),
                            s))
                                void 0 === O.current[p] &&
                                    (O.current[p] = s[p]);
                            let [h, y] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = "touches" in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse &&
                                                            !r &&
                                                            (document.addEventListener(
                                                                c,
                                                                n,
                                                            ),
                                                            document.addEventListener(
                                                                f,
                                                                p,
                                                            ));
                                                        let {
                                                                clientX: u,
                                                                clientY: a,
                                                            } = r
                                                                ? t.touches[0]
                                                                : t,
                                                            l = d(
                                                                [u, a],
                                                                o.rotationAngle,
                                                            );
                                                        return (
                                                            o.onTouchStartOrOnMouseDown &&
                                                                o.onTouchStartOrOnMouseDown(
                                                                    {
                                                                        event: t,
                                                                    },
                                                                ),
                                                            Object.assign(
                                                                Object.assign(
                                                                    Object.assign(
                                                                        {},
                                                                        e,
                                                                    ),
                                                                    i,
                                                                ),
                                                                {
                                                                    initial:
                                                                        l.slice(),
                                                                    xy: l,
                                                                    start:
                                                                        t.timeStamp ||
                                                                        0,
                                                                },
                                                            )
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, r) => {
                                                    var n, i, c, f;
                                                    let b = "touches" in t;
                                                    if (
                                                        b &&
                                                        t.touches.length > 1
                                                    )
                                                        return e;
                                                    if (
                                                        t.timeStamp - e.start >
                                                        r.swipeDuration
                                                    )
                                                        return e.swiping
                                                            ? Object.assign(
                                                                  Object.assign(
                                                                      {},
                                                                      e,
                                                                  ),
                                                                  {
                                                                      swiping:
                                                                          !1,
                                                                  },
                                                              )
                                                            : e;
                                                    let {
                                                            clientX: p,
                                                            clientY: v,
                                                        } = b
                                                            ? t.touches[0]
                                                            : t,
                                                        [g, O] = d(
                                                            [p, v],
                                                            r.rotationAngle,
                                                        ),
                                                        m = g - e.xy[0],
                                                        h = O - e.xy[1],
                                                        y = Math.abs(m),
                                                        w = Math.abs(h),
                                                        S =
                                                            (t.timeStamp || 0) -
                                                            e.start,
                                                        j =
                                                            Math.sqrt(
                                                                y * y + w * w,
                                                            ) / (S || 1),
                                                        E = [
                                                            m / (S || 1),
                                                            h / (S || 1),
                                                        ],
                                                        T =
                                                            ((n = y),
                                                            (i = w),
                                                            (c = m),
                                                            (f = h),
                                                            n > i
                                                                ? c > 0
                                                                    ? u
                                                                    : o
                                                                : f > 0
                                                                  ? l
                                                                  : a),
                                                        R =
                                                            "number" ==
                                                            typeof r.delta
                                                                ? r.delta
                                                                : r.delta[
                                                                      T.toLowerCase()
                                                                  ] || s.delta;
                                                    if (
                                                        y < R &&
                                                        w < R &&
                                                        !e.swiping
                                                    )
                                                        return e;
                                                    let P = {
                                                        absX: y,
                                                        absY: w,
                                                        deltaX: m,
                                                        deltaY: h,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: j,
                                                        vxvy: E,
                                                    };
                                                    P.first &&
                                                        r.onSwipeStart &&
                                                        r.onSwipeStart(P),
                                                        r.onSwiping &&
                                                            r.onSwiping(P);
                                                    let M = !1;
                                                    return (
                                                        (r.onSwiping ||
                                                            r.onSwiped ||
                                                            r[
                                                                "onSwiped".concat(
                                                                    T,
                                                                )
                                                            ]) &&
                                                            (M = !0),
                                                        M &&
                                                            r.preventScrollOnSwipe &&
                                                            r.trackTouch &&
                                                            t.cancelable &&
                                                            t.preventDefault(),
                                                        Object.assign(
                                                            Object.assign(
                                                                {},
                                                                e,
                                                            ),
                                                            {
                                                                first: !1,
                                                                eventData: P,
                                                                swiping: !0,
                                                            },
                                                        )
                                                    );
                                                });
                                            },
                                            b = (t) => {
                                                e((e, r) => {
                                                    let n;
                                                    if (
                                                        e.swiping &&
                                                        e.eventData
                                                    ) {
                                                        if (
                                                            t.timeStamp -
                                                                e.start <
                                                            r.swipeDuration
                                                        ) {
                                                            (n = Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    e.eventData,
                                                                ),
                                                                { event: t },
                                                            )),
                                                                r.onSwiped &&
                                                                    r.onSwiped(
                                                                        n,
                                                                    );
                                                            let o =
                                                                r[
                                                                    "onSwiped".concat(
                                                                        n.dir,
                                                                    )
                                                                ];
                                                            o && o(n);
                                                        }
                                                    } else
                                                        r.onTap &&
                                                            r.onTap({
                                                                event: t,
                                                            });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp &&
                                                            r.onTouchEndOrOnMouseUp(
                                                                { event: t },
                                                            ),
                                                        Object.assign(
                                                            Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    e,
                                                                ),
                                                                i,
                                                            ),
                                                            { eventData: n },
                                                        )
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                document.removeEventListener(
                                                    c,
                                                    n,
                                                ),
                                                    document.removeEventListener(
                                                        f,
                                                        p,
                                                    ),
                                                    b(e);
                                            },
                                            v = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let u = Object.assign(
                                                            Object.assign(
                                                                {},
                                                                s.touchEventOptions,
                                                            ),
                                                            t.touchEventOptions,
                                                        ),
                                                        a = [
                                                            [
                                                                "touchstart",
                                                                r,
                                                                u,
                                                            ],
                                                            [
                                                                "touchmove",
                                                                n,
                                                                Object.assign(
                                                                    Object.assign(
                                                                        {},
                                                                        u,
                                                                    ),
                                                                    t.preventScrollOnSwipe
                                                                        ? {
                                                                              passive:
                                                                                  !1,
                                                                          }
                                                                        : {},
                                                                ),
                                                            ],
                                                            ["touchend", b, u],
                                                        ];
                                                    a.forEach((t) => {
                                                        let [r, n, o] = t;
                                                        return e.addEventListener(
                                                            r,
                                                            n,
                                                            o,
                                                        );
                                                    }),
                                                        (o = () =>
                                                            a.forEach((t) => {
                                                                let [r, n] = t;
                                                                return e.removeEventListener(
                                                                    r,
                                                                    n,
                                                                );
                                                            }));
                                                }
                                                return o;
                                            },
                                            g = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t)
                                                                return e;
                                                            let n = {};
                                                            return (
                                                                e.el &&
                                                                    e.el !==
                                                                        t &&
                                                                    e.cleanUpTouch &&
                                                                    (e.cleanUpTouch(),
                                                                    (n.cleanUpTouch =
                                                                        void 0)),
                                                                r.trackTouch &&
                                                                    t &&
                                                                    (n.cleanUpTouch =
                                                                        v(
                                                                            t,
                                                                            r,
                                                                        )),
                                                                Object.assign(
                                                                    Object.assign(
                                                                        Object.assign(
                                                                            {},
                                                                            e,
                                                                        ),
                                                                        {
                                                                            el: t,
                                                                        },
                                                                    ),
                                                                    n,
                                                                )
                                                            );
                                                        });
                                                },
                                            };
                                        return (
                                            t.trackMouse && (g.onMouseDown = r),
                                            [g, v]
                                        );
                                    })(
                                        (e) =>
                                            (g.current = e(
                                                g.current,
                                                O.current,
                                            )),
                                        { trackMouse: v },
                                    ),
                                [v],
                            );
                            return (
                                (t = g.current),
                                (r = O.current),
                                (b = m.current),
                                (g.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !==
                                                  b.preventScrollOnSwipe ||
                                              r.touchEventOptions.passive !==
                                                  b.touchEventOptions.passive
                                                ? (t.cleanUpTouch(),
                                                  Object.assign(
                                                      Object.assign({}, t),
                                                      {
                                                          cleanUpTouch: y(
                                                              t.el,
                                                              r,
                                                          ),
                                                      },
                                                  ))
                                                : t
                                            : Object.assign(
                                                  Object.assign({}, t),
                                                  { cleanUpTouch: y(t.el, r) },
                                              )
                                        : (t.cleanUpTouch && t.cleanUpTouch(),
                                          Object.assign(Object.assign({}, t), {
                                              cleanUpTouch: void 0,
                                          }))),
                                h
                            );
                        }
                    },
                    7327: (e, t) => {
                        var r = Symbol.for("react.transitional.element");
                        function n(e, t, n) {
                            var o = null;
                            if (
                                (void 0 !== n && (o = "" + n),
                                void 0 !== t.key && (o = "" + t.key),
                                "key" in t)
                            )
                                for (var u in ((n = {}), t))
                                    "key" !== u && (n[u] = t[u]);
                            else n = t;
                            return {
                                $$typeof: r,
                                type: e,
                                key: o,
                                ref: void 0 !== (t = n.ref) ? t : null,
                                props: n,
                            };
                        }
                        (t.Fragment = Symbol.for("react.fragment")),
                            (t.jsx = n),
                            (t.jsxs = n);
                    },
                    1082: (e, t, r) => {
                        e.exports = r(7327);
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
                        var a = r(5663);
                        Object.defineProperty(t, "useIntersectionObserver", {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(
                                t,
                                "createIntersectionObserver",
                                {
                                    enumerable: !0,
                                    get: function () {
                                        return a.createIntersectionObserver;
                                    },
                                },
                            ),
                            Object.defineProperty(
                                t,
                                "getElementNameByDataAttribute",
                                {
                                    enumerable: !0,
                                    get: function () {
                                        return a.getElementNameByDataAttribute;
                                    },
                                },
                            );
                        var l = r(2101);
                        Object.defineProperty(t, "useElementOffsetY", {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
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
                        var b = r(998);
                        Object.defineProperty(t, "useReturnValue", {
                            enumerable: !0,
                            get: function () {
                                return b.useReturnValue;
                            },
                        });
                        var p = r(4395);
                        Object.defineProperty(t, "usePopoverSwipeable", {
                            enumerable: !0,
                            get: function () {
                                return p.usePopoverSwipeable;
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
                                        var e = arguments.length,
                                            r = Array(e),
                                            n = 0;
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
                        var n;
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useComponentSwipeable = t.SwipeablePlacement =
                                void 0);
                        let o = r(7672),
                            u = r(8691);
                        !(function (e) {
                            (e.TOP = "top"),
                                (e.BOTTOM = "bottom"),
                                (e.RIGHT = "right"),
                                (e.LEFT = "left");
                        })(n || (t.SwipeablePlacement = n = {}));
                        let a = (e) => {
                                let {
                                    ref: t,
                                    deltaY: r,
                                    deltaX: o,
                                    placement: u,
                                } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange =
                                            "transform"),
                                        (t.current.style.transform =
                                            u === n.TOP || u === n.BOTTOM
                                                ? "translateY(".concat(
                                                      r || 0,
                                                      "px)",
                                                  )
                                                : "translateX(".concat(
                                                      o || 0,
                                                      "px)",
                                                  )));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current &&
                                        ((e.current.style.transition = "none"),
                                        (e.current.style.willChange = ""),
                                        (e.current.style.transform = ""));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let {
                                    ref: t,
                                    swipeableProps: r = {},
                                    onClose: s,
                                    disableSwipe: i,
                                    placement: c,
                                    threshold: f,
                                } = e,
                                d = (0, u.useCallbackRef)(() => {
                                    s && (l(t), s());
                                }),
                                b = (0, u.useCallbackRef)((e) => {
                                    i ||
                                        ((e) => {
                                            let {
                                                ref: t,
                                                deltaY: r,
                                                deltaX: o,
                                                placement: u,
                                            } = e;
                                            switch (u) {
                                                case n.TOP:
                                                    r <= 0 &&
                                                        a({
                                                            ref: t,
                                                            deltaY: r,
                                                            deltaX: o,
                                                            placement: u,
                                                        });
                                                    break;
                                                case n.RIGHT:
                                                    o >= 0 &&
                                                        a({
                                                            ref: t,
                                                            deltaY: r,
                                                            deltaX: o,
                                                            placement: u,
                                                        });
                                                    break;
                                                case n.LEFT:
                                                    o <= 0 &&
                                                        a({
                                                            ref: t,
                                                            deltaY: r,
                                                            deltaX: o,
                                                            placement: u,
                                                        });
                                                    break;
                                                default:
                                                    r >= 0 &&
                                                        a({
                                                            ref: t,
                                                            deltaY: r,
                                                            deltaX: o,
                                                            placement: u,
                                                        });
                                            }
                                        })({
                                            ref: t,
                                            deltaY: e.deltaY,
                                            deltaX: e.deltaX,
                                            placement: c,
                                        });
                                }),
                                p = (0, u.useCallbackRef)((e) => {
                                    !i &&
                                        (((e) => {
                                            let {
                                                ref: t,
                                                deltaY: r,
                                                deltaX: o,
                                                placement: u,
                                                threshold: a = 25,
                                            } = e;
                                            if (!t.current) return !1;
                                            let l =
                                                (a / 100) *
                                                (u === n.TOP || u === n.BOTTOM
                                                    ? t.current.offsetHeight
                                                    : t.current.offsetWidth);
                                            switch (u) {
                                                case n.TOP:
                                                    return (
                                                        r < 0 &&
                                                        Math.abs(r) >= l
                                                    );
                                                case n.RIGHT:
                                                    return o > 0 && o >= l;
                                                case n.LEFT:
                                                    return (
                                                        o < 0 &&
                                                        Math.abs(o) >= l
                                                    );
                                                default:
                                                    return r > 0 && r >= l;
                                            }
                                        })({
                                            ref: t,
                                            deltaY: e.deltaY,
                                            deltaX: e.deltaX,
                                            placement: c,
                                            threshold: f,
                                        })
                                            ? s && (l(t), s())
                                            : l(t));
                                });
                            return {
                                handlers: (0, o.useSwipeable)({
                                    onSwiped: p,
                                    onSwiping: b,
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
                            let {
                                    delay: t,
                                    initialState: r,
                                    throttleTimeout: u,
                                } = e,
                                a = (0, o.useRef)(null),
                                [l, s] = (0, o.useState)(!!r),
                                i = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            s(!r),
                                                a.current &&
                                                    window.clearTimeout(
                                                        a.current,
                                                    ),
                                                (a.current = window.setTimeout(
                                                    () => {
                                                        s(!!r);
                                                    },
                                                    t,
                                                ));
                                        }, u),
                                    [t, r, u],
                                ),
                                c = (0, o.useCallback)(() => {
                                    s(!!r),
                                        a.current &&
                                            window.clearTimeout(a.current);
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        a.current &&
                                            window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: i, reset: c }
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
                                [a, l] = (0, n.useState)(),
                                s = (0, n.useCallback)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return (
                                (0, n.useLayoutEffect)(s),
                                (0, o.useScroll)({
                                    onScroll: s,
                                    elementRef: e,
                                }),
                                { forceUpdateRefCallback: r, offsetY: a }
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
                        function a(e) {
                            let {
                                top: t,
                                right: r,
                                bottom: n,
                                left: a,
                            } = e.getBoundingClientRect();
                            return (
                                ((t >= 0 && t <= u) || (n >= 0 && n <= u)) &&
                                ((a >= 0 && a <= o) || (r >= 0 && r <= o))
                            );
                        }
                        function l(e) {
                            var t, r;
                            let n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : "data-intersection-property-id";
                            return null !=
                                (r =
                                    null == e || null == (t = e.getAttribute)
                                        ? void 0
                                        : t.call(e, n))
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
                        (t.defaultOptions = {
                            threshold: 0,
                            preflightCheck: !0,
                        }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = s),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [
                                        {
                                            freezeOnceVisible: u,
                                            preflightCheck: i,
                                            ...c
                                        },
                                        f = !1,
                                    ] =
                                        "boolean" == typeof r || void 0 === r
                                            ? [t.defaultOptions, r]
                                            : [
                                                  { ...t.defaultOptions, ...r },
                                                  o,
                                              ],
                                    [d, b] = (0, n.useState)({}),
                                    p = (0, n.useRef)(new Set()),
                                    v = (0, n.useMemo)(
                                        () =>
                                            f
                                                ? null
                                                : s((e) => {
                                                      let t = l(e.target);
                                                      if (t && v) {
                                                          if (p.current.has(t))
                                                              return;
                                                          b((r) => ({
                                                              ...r,
                                                              [t]: {
                                                                  isIntersecting:
                                                                      e.isIntersecting,
                                                              },
                                                          })),
                                                              u &&
                                                                  e.isIntersecting &&
                                                                  (p.current.add(
                                                                      t,
                                                                  ),
                                                                  v.unobserve(
                                                                      e.target,
                                                                  ));
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
                                                        if (
                                                            i &&
                                                            (t = a(e.current))
                                                        ) {
                                                            let t = l(
                                                                e.current,
                                                            );
                                                            b((e) => ({
                                                                ...e,
                                                                [t]: {
                                                                    isIntersecting:
                                                                        !0,
                                                                },
                                                            }));
                                                        }
                                                        t ||
                                                            v.observe(
                                                                e.current,
                                                            );
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
                            "undefined" != typeof document
                                ? n.useLayoutEffect
                                : n.useEffect;
                    },
                    5188: (e, t, r) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.useKeyboardNavigation = void 0);
                        let n = r(810);
                        function o(e, t) {
                            return e.current
                                ? Array.from(
                                      t
                                          ? e.current.querySelectorAll(t)
                                          : e.current.children,
                                  )
                                : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                {
                                    navigationItemsSelector: r,
                                    activeAttributeName: u = "aria-selected",
                                } = t,
                                a = (0, n.useCallback)(
                                    (t) => {
                                        let n = o(e, r);
                                        if (!n.length) return;
                                        let u = t.target,
                                            a = n.indexOf(u);
                                        if (-1 === a) return;
                                        let [l] = n,
                                            s = n.at(-1),
                                            i = null;
                                        switch (t.key) {
                                            case "ArrowLeft":
                                            case "ArrowUp":
                                                i = n[a - 1] || s;
                                                break;
                                            case "ArrowRight":
                                            case "ArrowDown":
                                                i = n[a + 1] || l;
                                                break;
                                            case "Home":
                                                i = l;
                                                break;
                                            case "End":
                                                i = s;
                                        }
                                        null !== i &&
                                            (i.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            (0, n.useEffect)(() => {
                                let t = e.current;
                                return (
                                    null == t ||
                                        t.addEventListener("keydown", a),
                                    () =>
                                        null == t
                                            ? void 0
                                            : t.removeEventListener(
                                                  "keydown",
                                                  a,
                                              )
                                );
                            }, [e, a]),
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
                                    disableSwipe: a,
                                    placement: l,
                                    threshold: s,
                                } = e,
                                i = (0, n.useMemo)(() => {
                                    switch (l) {
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
                                }, [l]);
                            return (0, o.useComponentSwipeable)({
                                ref: t,
                                swipeableProps: r,
                                onClose: u,
                                disableSwipe: a,
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
                                let n =
                                        null != r
                                            ? r
                                            : document.documentElement,
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
                            let {
                                    onScroll: t,
                                    listenIsScrolling: r,
                                    elementRef: a,
                                } = e,
                                { state: l, handleDebouncedToggle: s } = (0,
                                u.useDebouncedToggle)({
                                    delay: 1e3,
                                    throttleTimeout: 100,
                                }),
                                i = (0, n.useCallback)(() => {
                                    r && s(), null == t || t();
                                }, [r, s, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(
                                        a,
                                    );
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (
                                        t.addEventListener("scroll", i, r),
                                        () =>
                                            t.removeEventListener(
                                                "scroll",
                                                i,
                                                r,
                                            )
                                    );
                                }, [a, i]),
                                l
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement)
                                        return e;
                                    if (
                                        null === e.current ||
                                        e.current instanceof HTMLElement
                                    )
                                        return e.current;
                                }
                            });
                    },
                    8429: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.ScrollableContent =
                                t.ScrollableContentComponent =
                                    void 0);
                        let o = r(1082),
                            u = r(810),
                            a = r(5881),
                            l = r(9110),
                            s = n(r(8239));
                        (t.ScrollableContentComponent = (e) => {
                            let {
                                    forwardRef: t,
                                    className: r,
                                    containerClassName: n,
                                    children: u,
                                    ...i
                                } = e,
                                c = (0, l.useForwardRef)(t, null),
                                f = (0, l.useScroll)({
                                    listenIsScrolling: !0,
                                    elementRef: c,
                                });
                            return (0, o.jsx)("div", {
                                className: (0, a.clsx)(
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
                                    className: (0, a.clsx)(
                                        s.default.container,
                                        n,
                                    ),
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
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(u, 2));
                    },
                },
                l = {};
            function s(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return a[e].call(r.exports, r, r.exports, s), r.exports;
            }
            (s.d = (e, t) => {
                for (var r in t)
                    s.o(t, r) &&
                        !s.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                });
            var i = {};
            (() => {
                Object.defineProperty(i, "X", { value: !0 }), (i.t = void 0);
                var e = s(8429);
                Object.defineProperty(i, "t", {
                    enumerable: !0,
                    get: function () {
                        return e.ScrollableContent;
                    },
                });
            })();
            var c = i.t;
            i.X;
        },
    },
]);
