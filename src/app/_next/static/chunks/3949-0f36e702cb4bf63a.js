"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3949],
    {
        23949: (e, t, s) => {
            s.d(t, { Te: () => M, XW: () => z });
            var i = s(66268),
                n = s(17229);
            function l(e, t, s) {
                let i,
                    n = s.initialDeps ?? [];
                function l() {
                    var l, o, r, h;
                    let a, d;
                    s.key &&
                        (null == (l = s.debug) ? void 0 : l.call(s)) &&
                        (a = Date.now());
                    let u = e();
                    if (
                        !(u.length !== n.length || u.some((e, t) => n[t] !== e))
                    )
                        return i;
                    if (
                        ((n = u),
                        s.key &&
                            (null == (o = s.debug) ? void 0 : o.call(s)) &&
                            (d = Date.now()),
                        (i = t(...u)),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
                    ) {
                        let e = Math.round((Date.now() - a) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            i = t / 16,
                            n = (e, t) => {
                                for (e = String(e); e.length < t; ) e = " " + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${n(t, 5)} /${n(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (
                        null == (h = null == s ? void 0 : s.onChange) ||
                            h.call(s, i),
                        i
                    );
                }
                return (
                    (l.updateDeps = (e) => {
                        n = e;
                    }),
                    l
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
            }
            let r = (e, t, s) => {
                    let i;
                    return function (...n) {
                        e.clearTimeout(i),
                            (i = e.setTimeout(() => t.apply(this, n), s));
                    };
                },
                h = (e) => {
                    let { offsetWidth: t, offsetHeight: s } = e;
                    return { width: t, height: s };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((n(h(s)), !i.ResizeObserver)) return () => {};
                    let l = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t)
                                    return void n({
                                        width: t.inlineSize,
                                        height: t.blockSize,
                                    });
                            }
                            n(h(s));
                        };
                        e.options.useAnimationFrameWithResizeObserver
                            ? requestAnimationFrame(i)
                            : i();
                    });
                    return (
                        l.observe(s, { box: "border-box" }),
                        () => {
                            l.unobserve(s);
                        }
                    );
                },
                c = { passive: !0 },
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener("resize", i, c),
                        () => {
                            s.removeEventListener("resize", i);
                        }
                    );
                },
                m = "undefined" == typeof window || "onscrollend" in window,
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: r } = e.options;
                            (n = o
                                ? s.scrollLeft * ((r && -1) || 1)
                                : s.scrollTop),
                                l(),
                                t(n, i);
                        },
                        h = o(!0),
                        a = o(!1);
                    a(), s.addEventListener("scroll", h, c);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener("scrollend", a, c),
                        () => {
                            s.removeEventListener("scroll", h),
                                d && s.removeEventListener("scrollend", a);
                        }
                    );
                },
                p = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = 0,
                        l =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            (n =
                                s[
                                    e.options.horizontal ? "scrollX" : "scrollY"
                                ]),
                                l(),
                                t(n, i);
                        },
                        h = o(!0),
                        a = o(!1);
                    a(), s.addEventListener("scroll", h, c);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener("scrollend", a, c),
                        () => {
                            s.removeEventListener("scroll", h),
                                d && s.removeEventListener("scrollend", a);
                        }
                    );
                },
                v = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e)
                            return Math.round(
                                e[
                                    s.options.horizontal
                                        ? "inlineSize"
                                        : "blockSize"
                                ],
                            );
                    }
                    return e[
                        s.options.horizontal ? "offsetWidth" : "offsetHeight"
                    ];
                },
                b = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null ==
                        (l =
                            null == (n = i.scrollElement)
                                ? void 0
                                : n.scrollTo) ||
                        l.call(n, {
                            [i.options.horizontal ? "left" : "top"]: e + t,
                            behavior: s,
                        });
                },
                S = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var n, l;
                    null ==
                        (l =
                            null == (n = i.scrollElement)
                                ? void 0
                                : n.scrollTo) ||
                        l.call(n, {
                            [i.options.horizontal ? "left" : "top"]: e + t,
                            behavior: s,
                        });
                };
            class x {
                constructor(e) {
                    (this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow &&
                                    this.targetWindow.ResizeObserver
                                        ? (e =
                                              new this.targetWindow.ResizeObserver(
                                                  (e) => {
                                                      e.forEach((e) => {
                                                          let t = () => {
                                                              this._measureElement(
                                                                  e.target,
                                                                  e,
                                                              );
                                                          };
                                                          this.options
                                                              .useAnimationFrameWithResizeObserver
                                                              ? requestAnimationFrame(
                                                                    t,
                                                                )
                                                              : t();
                                                      });
                                                  },
                                              ))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    null == (s = t()) || s.disconnect(),
                                        (e = null);
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t())
                                        ? void 0
                                        : s.observe(e, { box: "border-box" });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t())
                                        ? void 0
                                        : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: d,
                                    onChange: () => {},
                                    measureElement: v,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: "data-index",
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                });
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) ||
                                s.call(t, this, e);
                        }),
                        (this.maybeNotify = l(
                            () => (
                                this.calculateRange(),
                                [
                                    this.isScrolling,
                                    this.range ? this.range.startIndex : null,
                                    this.range ? this.range.endIndex : null,
                                ]
                            ),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [
                                    this.isScrolling,
                                    this.range ? this.range.startIndex : null,
                                    this.range ? this.range.endIndex : null,
                                ],
                            },
                        )),
                        (this.cleanup = () => {
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled
                                ? this.options.getScrollElement()
                                : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t))
                                    return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement &&
                                    "ownerDocument" in this.scrollElement
                                        ? (this.targetWindow =
                                              this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow =
                                              (null == (e = this.scrollElement)
                                                  ? void 0
                                                  : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(
                                        this.getScrollOffset(),
                                        {
                                            adjustments: void 0,
                                            behavior: void 0,
                                        },
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementRect(
                                            this,
                                            (e) => {
                                                (this.scrollRect = e),
                                                    this.maybeNotify();
                                            },
                                        ),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(
                                            this,
                                            (e, t) => {
                                                (this.scrollAdjustments = 0),
                                                    (this.scrollDirection = t
                                                        ? this.getScrollOffset() <
                                                          e
                                                            ? "forward"
                                                            : "backward"
                                                        : null),
                                                    (this.scrollOffset = e),
                                                    (this.isScrolling = t),
                                                    this.maybeNotify();
                                            },
                                        ),
                                    );
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect =
                                      this.scrollRect ??
                                      this.options.initialRect),
                                  this.scrollRect[
                                      this.options.horizontal
                                          ? "width"
                                          : "height"
                                  ])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ??
                                      ("function" ==
                                      typeof this.options.initialOffset
                                          ? this.options.initialOffset()
                                          : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let n = t - 1; n >= 0; n--) {
                                let t = e[n];
                                if (s.has(t.lane)) continue;
                                let l = i.get(t.lane);
                                if (
                                    (null == l || t.end > l.end
                                        ? i.set(t.lane, t)
                                        : t.end < l.end && s.set(t.lane, !0),
                                    s.size === this.options.lanes)
                                )
                                    break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) =>
                                      e.end === t.end
                                          ? e.index - t.index
                                          : e.end - t.end,
                                  )[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = l(
                            () => [
                                this.options.count,
                                this.options.paddingStart,
                                this.options.scrollMargin,
                                this.options.getItemKey,
                                this.options.enabled,
                            ],
                            (e, t, s, i, n) => (
                                (this.pendingMeasuredCacheIndexes = []),
                                {
                                    count: e,
                                    paddingStart: t,
                                    scrollMargin: s,
                                    getItemKey: i,
                                    enabled: n,
                                }
                            ),
                            { key: !1 },
                        )),
                        (this.getMeasurements = l(
                            () => [
                                this.getMeasurementOptions(),
                                this.itemSizeCache,
                            ],
                            (
                                {
                                    count: e,
                                    paddingStart: t,
                                    scrollMargin: s,
                                    getItemKey: i,
                                    enabled: n,
                                },
                                l,
                            ) => {
                                if (!n)
                                    return (
                                        (this.measurementsCache = []),
                                        this.itemSizeCache.clear(),
                                        []
                                    );
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache =
                                        this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o =
                                    this.pendingMeasuredCacheIndexes.length > 0
                                        ? Math.min(
                                              ...this
                                                  .pendingMeasuredCacheIndexes,
                                          )
                                        : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, o);
                                for (let n = o; n < e; n++) {
                                    let e = i(n),
                                        o =
                                            1 === this.options.lanes
                                                ? r[n - 1]
                                                : this.getFurthestMeasurement(
                                                      r,
                                                      n,
                                                  ),
                                        h = o
                                            ? o.end + this.options.gap
                                            : t + s,
                                        a = l.get(e),
                                        d =
                                            "number" == typeof a
                                                ? a
                                                : this.options.estimateSize(n),
                                        u = h + d,
                                        c = o ? o.lane : n % this.options.lanes;
                                    r[n] = {
                                        index: n,
                                        start: h,
                                        size: d,
                                        end: u,
                                        key: e,
                                        lane: c,
                                    };
                                }
                                return (this.measurementsCache = r), r;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = l(
                            () => [
                                this.getMeasurements(),
                                this.getSize(),
                                this.getScrollOffset(),
                                this.options.lanes,
                            ],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({
                                              measurements: e,
                                              outerSize: t,
                                              scrollOffset: s,
                                              lanes: i,
                                          }) {
                                              let n = e.length - 1;
                                              if (e.length <= i)
                                                  return {
                                                      startIndex: 0,
                                                      endIndex: n,
                                                  };
                                              let l = E(
                                                      0,
                                                      n,
                                                      (t) => e[t].start,
                                                      s,
                                                  ),
                                                  o = l;
                                              if (1 === i)
                                                  for (
                                                      ;
                                                      o < n && e[o].end < s + t;

                                                  )
                                                      o++;
                                              else if (i > 1) {
                                                  let r = Array(i).fill(0);
                                                  for (
                                                      ;
                                                      o < n &&
                                                      r.some((e) => e < s + t);

                                                  ) {
                                                      let t = e[o];
                                                      (r[t.lane] = t.end), o++;
                                                  }
                                                  let h = Array(i).fill(s + t);
                                                  for (
                                                      ;
                                                      l >= 0 &&
                                                      h.some((e) => e >= s);

                                                  ) {
                                                      let t = e[l];
                                                      (h[t.lane] = t.start),
                                                          l--;
                                                  }
                                                  (l = Math.max(
                                                      0,
                                                      l - (l % i),
                                                  )),
                                                      (o = Math.min(
                                                          n,
                                                          o + (i - 1 - (o % i)),
                                                      ));
                                              }
                                              return {
                                                  startIndex: l,
                                                  endIndex: o,
                                              };
                                          })({
                                              measurements: e,
                                              outerSize: t,
                                              scrollOffset: s,
                                              lanes: i,
                                          })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = l(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([
                                        this.isScrolling,
                                        e,
                                        t,
                                    ]),
                                    [
                                        this.options.rangeExtractor,
                                        this.options.overscan,
                                        this.options.count,
                                        e,
                                        t,
                                    ]
                                );
                            },
                            (e, t, s, i, n) =>
                                null === i || null === n
                                    ? []
                                    : e({
                                          startIndex: i,
                                          endIndex: n,
                                          overscan: t,
                                          count: s,
                                      }),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s
                                ? parseInt(s, 10)
                                : (console.warn(
                                      `Missing attribute name '${t}={index}' on measured element.`,
                                  ),
                                  -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let n = i.key,
                                l = this.elementsCache.get(n);
                            l !== e &&
                                (l && this.observer.unobserve(l),
                                this.observer.observe(e),
                                this.elementsCache.set(n, e)),
                                e.isConnected &&
                                    this.resizeItem(
                                        s,
                                        this.options.measureElement(e, t, this),
                                    );
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i =
                                t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !==
                                this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                                          s,
                                          i,
                                          this,
                                      )
                                    : s.start <
                                      this.getScrollOffset() +
                                          this.scrollAdjustments) &&
                                    this._scrollToOffset(
                                        this.getScrollOffset(),
                                        {
                                            adjustments:
                                                (this.scrollAdjustments += i),
                                            behavior: void 0,
                                        },
                                    ),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(
                                    this.itemSizeCache.set(s.key, t),
                                )),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach(
                                    (e, t) => {
                                        e.isConnected ||
                                            (this.observer.unobserve(e),
                                            this.elementsCache.delete(t));
                                    },
                                );
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = l(
                            () => [
                                this.getVirtualIndexes(),
                                this.getMeasurements(),
                            ],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, n = e.length; i < n; i++) {
                                    let n = t[e[i]];
                                    s.push(n);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length)
                                return o(
                                    t[
                                        E(
                                            0,
                                            t.length - 1,
                                            (e) => o(t[e]).start,
                                            e,
                                        )
                                    ],
                                );
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                n = this.getScrollOffset();
                            return (
                                "auto" === t &&
                                    (t = e >= n + i ? "end" : "start"),
                                "center" === t
                                    ? (e += (s - i) / 2)
                                    : "end" === t && (e -= i),
                                Math.max(
                                    Math.min(this.getTotalSize() - i, e),
                                    0,
                                )
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = "auto") => {
                            e = Math.max(
                                0,
                                Math.min(e, this.options.count - 1),
                            );
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                n = this.getScrollOffset();
                            if ("auto" === t)
                                if (
                                    s.end >=
                                    n + i - this.options.scrollPaddingEnd
                                )
                                    t = "end";
                                else {
                                    if (
                                        !(
                                            s.start <=
                                            n + this.options.scrollPaddingStart
                                        )
                                    )
                                        return [n, t];
                                    t = "start";
                                }
                            let l =
                                "end" === t
                                    ? s.end + this.options.scrollPaddingEnd
                                    : s.start - this.options.scrollPaddingStart;
                            return [
                                this.getOffsetForAlignment(l, t, s.size),
                                t,
                            ];
                        }),
                        (this.isDynamicMode = () =>
                            this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(
                                    this.scrollToIndexTimeoutId,
                                ),
                                (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (
                            e,
                            { align: t = "start", behavior: s } = {},
                        ) => {
                            this.cancelScrollToIndex(),
                                "smooth" === s &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    ),
                                this._scrollToOffset(
                                    this.getOffsetForAlignment(e, t),
                                    { adjustments: void 0, behavior: s },
                                );
                        }),
                        (this.scrollToIndex = (
                            e,
                            { align: t = "auto", behavior: s } = {},
                        ) => {
                            (e = Math.max(
                                0,
                                Math.min(e, this.options.count - 1),
                            )),
                                this.cancelScrollToIndex(),
                                "smooth" === s &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    );
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [n, l] = i;
                            this._scrollToOffset(n, {
                                adjustments: void 0,
                                behavior: s,
                            }),
                                "smooth" !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId =
                                        this.targetWindow.setTimeout(() => {
                                            if (
                                                ((this.scrollToIndexTimeoutId =
                                                    null),
                                                this.elementsCache.has(
                                                    this.options.getItemKey(e),
                                                ))
                                            ) {
                                                let t = this.getOffsetForIndex(
                                                    e,
                                                    l,
                                                );
                                                if (!t) return;
                                                let [i] = t;
                                                1 >=
                                                    Math.abs(
                                                        i -
                                                            this.getScrollOffset(),
                                                    ) ||
                                                    this.scrollToIndex(e, {
                                                        align: l,
                                                        behavior: s,
                                                    });
                                            } else
                                                this.scrollToIndex(e, {
                                                    align: l,
                                                    behavior: s,
                                                });
                                        }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                "smooth" === t &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    ),
                                this._scrollToOffset(
                                    this.getScrollOffset() + e,
                                    { adjustments: void 0, behavior: t },
                                );
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes)
                                t =
                                    (null == (e = s[s.length - 1])
                                        ? void 0
                                        : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i >= 0 && e.some((e) => null === e); ) {
                                    let t = s[i];
                                    null === e[t.lane] && (e[t.lane] = t.end),
                                        i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(
                                t -
                                    this.options.scrollMargin +
                                    this.options.paddingEnd,
                                0,
                            );
                        }),
                        (this._scrollToOffset = (
                            e,
                            { adjustments: t, behavior: s },
                        ) => {
                            this.options.scrollToFn(
                                e,
                                { behavior: s, adjustments: t },
                                this,
                            );
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let E = (e, t, s, i) => {
                    for (; e <= t; ) {
                        let n = ((e + t) / 2) | 0,
                            l = s(n);
                        if (l < i) e = n + 1;
                        else {
                            if (!(l > i)) return n;
                            t = n - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                w =
                    "undefined" != typeof document
                        ? i.useLayoutEffect
                        : i.useEffect;
            function y(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var l;
                            i ? (0, n.flushSync)(t) : t(),
                                null == (l = e.onChange) || l.call(e, s, i);
                        },
                    },
                    [l] = i.useState(() => new x(s));
                return (
                    l.setOptions(s),
                    w(() => l._didMount(), []),
                    w(() => l._willUpdate()),
                    l
                );
            }
            function M(e) {
                return y({
                    observeElementRect: u,
                    observeElementOffset: g,
                    scrollToFn: S,
                    ...e,
                });
            }
            function z(e) {
                return y({
                    getScrollElement: () =>
                        "undefined" != typeof document ? window : null,
                    observeElementRect: f,
                    observeElementOffset: p,
                    scrollToFn: b,
                    initialOffset: () =>
                        "undefined" != typeof document ? window.scrollY : 0,
                    ...e,
                });
            }
        },
    },
]);
