(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54, 3576, 3949, 7673, 9837],
    {
        2117: (t, e, i) => {
            "use strict";
            i.d(e, { XU: () => d });
            var r,
                n,
                s = i(7144),
                a = i(66268),
                o = i(73827);
            !(function (t) {
                (t.formatDate = "FormattedDate"),
                    (t.formatTime = "FormattedTime"),
                    (t.formatNumber = "FormattedNumber"),
                    (t.formatList = "FormattedList"),
                    (t.formatDisplayName = "FormattedDisplayName");
            })(r || (r = {})),
                (function (t) {
                    (t.formatDate = "FormattedDateParts"),
                        (t.formatTime = "FormattedTimeParts"),
                        (t.formatNumber = "FormattedNumberParts"),
                        (t.formatList = "FormattedListParts");
                })(n || (n = {}));
            var l = function (t) {
                var e = (0, o.A)(),
                    i = t.value,
                    r = t.children,
                    n = (0, s.__rest)(t, ["value", "children"]);
                return r(e.formatNumberToParts(i, n));
            };
            function u(t) {
                var e = function (e) {
                    var i = (0, o.A)(),
                        r = e.value,
                        n = e.children,
                        a = (0, s.__rest)(e, ["value", "children"]),
                        l = "string" == typeof r ? new Date(r || 0) : r;
                    return n(
                        "formatDate" === t
                            ? i.formatDateToParts(l, a)
                            : i.formatTimeToParts(l, a),
                    );
                };
                return (e.displayName = n[t]), e;
            }
            function h(t) {
                var e = function (e) {
                    var i = (0, o.A)(),
                        r = e.value,
                        n = e.children,
                        l = (0, s.__rest)(e, ["value", "children"]),
                        u = i[t](r, l);
                    if ("function" == typeof n) return n(u);
                    var h = i.textComponent || a.Fragment;
                    return a.createElement(h, null, u);
                };
                return (e.displayName = r[t]), e;
            }
            (l.displayName = "FormattedNumberParts"),
                (l.displayName = "FormattedNumberParts");
            var d = h("formatDate");
            h("formatTime"),
                h("formatNumber"),
                h("formatList"),
                h("formatDisplayName"),
                u("formatDate"),
                u("formatTime");
        },
        4585: (t, e, i) => {
            "use strict";
            i.d(e, { T: () => n });
            var r = function () {
                    return (r =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, r = arguments.length; i < r; i++)
                                for (var n in (e = arguments[i]))
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        n,
                                    ) && (t[n] = e[n]);
                            return t;
                        }).apply(this, arguments);
                },
                n = (function () {
                    function t(t, e, i) {
                        var n = this;
                        (this.endVal = e),
                            (this.options = i),
                            (this.version = "2.8.1"),
                            (this.defaults = {
                                startVal: 0,
                                decimalPlaces: 0,
                                duration: 2,
                                useEasing: !0,
                                useGrouping: !0,
                                useIndianSeparators: !1,
                                smartEasingThreshold: 999,
                                smartEasingAmount: 333,
                                separator: ",",
                                decimal: ".",
                                prefix: "",
                                suffix: "",
                                enableScrollSpy: !1,
                                scrollSpyDelay: 200,
                                scrollSpyOnce: !1,
                            }),
                            (this.finalEndVal = null),
                            (this.useEasing = !0),
                            (this.countDown = !1),
                            (this.error = ""),
                            (this.startVal = 0),
                            (this.paused = !0),
                            (this.once = !1),
                            (this.count = function (t) {
                                n.startTime || (n.startTime = t);
                                var e = t - n.startTime;
                                (n.remaining = n.duration - e),
                                    n.useEasing
                                        ? n.countDown
                                            ? (n.frameVal =
                                                  n.startVal -
                                                  n.easingFn(
                                                      e,
                                                      0,
                                                      n.startVal - n.endVal,
                                                      n.duration,
                                                  ))
                                            : (n.frameVal = n.easingFn(
                                                  e,
                                                  n.startVal,
                                                  n.endVal - n.startVal,
                                                  n.duration,
                                              ))
                                        : (n.frameVal =
                                              n.startVal +
                                              (n.endVal - n.startVal) *
                                                  (e / n.duration));
                                var i = n.countDown
                                    ? n.frameVal < n.endVal
                                    : n.frameVal > n.endVal;
                                (n.frameVal = i ? n.endVal : n.frameVal),
                                    (n.frameVal = Number(
                                        n.frameVal.toFixed(
                                            n.options.decimalPlaces,
                                        ),
                                    )),
                                    n.printValue(n.frameVal),
                                    e < n.duration
                                        ? (n.rAF = requestAnimationFrame(
                                              n.count,
                                          ))
                                        : null !== n.finalEndVal
                                          ? n.update(n.finalEndVal)
                                          : n.options.onCompleteCallback &&
                                            n.options.onCompleteCallback();
                            }),
                            (this.formatNumber = function (t) {
                                var e,
                                    i,
                                    r,
                                    s = (
                                        Math.abs(t).toFixed(
                                            n.options.decimalPlaces,
                                        ) + ""
                                    ).split(".");
                                if (
                                    ((e = s[0]),
                                    (i =
                                        s.length > 1
                                            ? n.options.decimal + s[1]
                                            : ""),
                                    n.options.useGrouping)
                                ) {
                                    r = "";
                                    for (
                                        var a = 3, o = 0, l = 0, u = e.length;
                                        l < u;
                                        ++l
                                    )
                                        n.options.useIndianSeparators &&
                                            4 === l &&
                                            ((a = 2), (o = 1)),
                                            0 !== l &&
                                                o % a == 0 &&
                                                (r = n.options.separator + r),
                                            o++,
                                            (r = e[u - l - 1] + r);
                                    e = r;
                                }
                                return (
                                    n.options.numerals &&
                                        n.options.numerals.length &&
                                        ((e = e.replace(/[0-9]/g, function (t) {
                                            return n.options.numerals[+t];
                                        })),
                                        (i = i.replace(/[0-9]/g, function (t) {
                                            return n.options.numerals[+t];
                                        }))),
                                    (t < 0 ? "-" : "") +
                                        n.options.prefix +
                                        e +
                                        i +
                                        n.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (t, e, i, r) {
                                return (
                                    (i *
                                        (1 - Math.pow(2, (-10 * t) / r)) *
                                        1024) /
                                        1023 +
                                    e
                                );
                            }),
                            (this.options = r(r({}, this.defaults), i)),
                            (this.formattingFn = this.options.formattingFn
                                ? this.options.formattingFn
                                : this.formatNumber),
                            (this.easingFn = this.options.easingFn
                                ? this.options.easingFn
                                : this.easeOutExpo),
                            (this.startVal = this.validateValue(
                                this.options.startVal,
                            )),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(e)),
                            (this.options.decimalPlaces = Math.max(
                                this.options.decimalPlaces,
                            )),
                            this.resetDuration(),
                            (this.options.separator = String(
                                this.options.separator,
                            )),
                            (this.useEasing = this.options.useEasing),
                            "" === this.options.separator &&
                                (this.options.useGrouping = !1),
                            (this.el =
                                "string" == typeof t
                                    ? document.getElementById(t)
                                    : t),
                            this.el
                                ? this.printValue(this.startVal)
                                : (this.error =
                                      "[CountUp] target is null or undefined"),
                            "undefined" != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, t)
                                    : ((window.onScrollFns =
                                          window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return n.handleScroll(n);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(
                                              function (t) {
                                                  return t();
                                              },
                                          );
                                      }),
                                      this.handleScroll(this)));
                    }
                    return (
                        (t.prototype.handleScroll = function (t) {
                            if (t && window && !t.once) {
                                var e = window.innerHeight + window.scrollY,
                                    i = t.el.getBoundingClientRect(),
                                    r = i.top + window.pageYOffset,
                                    n = i.top + i.height + window.pageYOffset;
                                n < e && n > window.scrollY && t.paused
                                    ? ((t.paused = !1),
                                      setTimeout(function () {
                                          return t.start();
                                      }, t.options.scrollSpyDelay),
                                      t.options.scrollSpyOnce && (t.once = !0))
                                    : (window.scrollY > n || r > e) &&
                                      !t.paused &&
                                      t.reset();
                            }
                        }),
                        (t.prototype.determineDirectionAndSmartEasing =
                            function () {
                                var t = this.finalEndVal
                                    ? this.finalEndVal
                                    : this.endVal;
                                if (
                                    ((this.countDown = this.startVal > t),
                                    Math.abs(t - this.startVal) >
                                        this.options.smartEasingThreshold &&
                                        this.options.useEasing)
                                ) {
                                    this.finalEndVal = t;
                                    var e = this.countDown ? 1 : -1;
                                    (this.endVal =
                                        t + e * this.options.smartEasingAmount),
                                        (this.duration = this.duration / 2);
                                } else
                                    (this.endVal = t),
                                        (this.finalEndVal = null);
                                null !== this.finalEndVal
                                    ? (this.useEasing = !1)
                                    : (this.useEasing = this.options.useEasing);
                            }),
                        (t.prototype.start = function (t) {
                            this.error ||
                                (this.options.onStartCallback &&
                                    this.options.onStartCallback(),
                                t && (this.options.onCompleteCallback = t),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(),
                                      (this.paused = !1),
                                      (this.rAF = requestAnimationFrame(
                                          this.count,
                                      )))
                                    : this.printValue(this.endVal));
                        }),
                        (t.prototype.pauseResume = function () {
                            this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(
                                      this.count,
                                  )))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused);
                        }),
                        (t.prototype.reset = function () {
                            cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(
                                    this.options.startVal,
                                )),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal);
                        }),
                        (t.prototype.update = function (t) {
                            cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(t)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal &&
                                        this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(
                                        this.count,
                                    )));
                        }),
                        (t.prototype.printValue = function (t) {
                            var e;
                            if (this.el) {
                                var i = this.formattingFn(t);
                                (
                                    null == (e = this.options.plugin)
                                        ? void 0
                                        : e.render
                                )
                                    ? this.options.plugin.render(this.el, i)
                                    : "INPUT" === this.el.tagName
                                      ? (this.el.value = i)
                                      : "text" === this.el.tagName ||
                                          "tspan" === this.el.tagName
                                        ? (this.el.textContent = i)
                                        : (this.el.innerHTML = i);
                            }
                        }),
                        (t.prototype.ensureNumber = function (t) {
                            return "number" == typeof t && !isNaN(t);
                        }),
                        (t.prototype.validateValue = function (t) {
                            var e = Number(t);
                            return this.ensureNumber(e)
                                ? e
                                : ((this.error =
                                      "[CountUp] invalid start or end value: ".concat(
                                          t,
                                      )),
                                  null);
                        }),
                        (t.prototype.resetDuration = function () {
                            (this.startTime = null),
                                (this.duration =
                                    1e3 * Number(this.options.duration)),
                                (this.remaining = this.duration);
                        }),
                        t
                    );
                })();
        },
        5471: (t, e, i) => {
            "use strict";
            function r(t) {
                return t;
            }
            function n(t) {
                return Math.max(t, 0);
            }
            function s(t) {
                return n(t);
            }
            function a(t) {
                return n(Math.floor(t));
            }
            i.d(e, {
                WQ: () => d,
                Qr: () => m,
                lw: () => f,
                gL: () => c,
                bY: () => u,
                Wj: () => h,
                Lp: () => l,
                fP: () => o,
                PY: () => s,
                Pn: () => a,
            });
            let o = r,
                l = r,
                u = r,
                h = r,
                d = (t, ...e) => {
                    let i = t;
                    for (let t = 0; t < e.length; t++) i += e[t];
                    return i;
                };
            d.operator = "+";
            let c = (t, ...e) => {
                let i = t;
                for (let t = 0; t < e.length; t++) i -= e[t];
                return i;
            };
            c.operator = "-";
            let f = (t, ...e) => {
                let i = t;
                for (let t = 0; t < e.length; t++) i *= e[t];
                return i;
            };
            f.operator = "*";
            let m = (t, ...e) => {
                let i = t;
                for (let t = 0; t < e.length; t++) i /= e[t];
                return i;
            };
            m.operator = "/";
        },
        5884: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let r = i(473)._(i(16092));
            function n(t, e) {
                var i;
                let n = {};
                "function" == typeof t && (n.loader = t);
                let s = { ...n, ...e };
                return (0, r.default)({
                    ...s,
                    modules:
                        null == (i = s.loadableGenerated) ? void 0 : i.modules,
                });
            }
            ("function" == typeof e.default ||
                ("object" == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, "__esModule", { value: !0 }),
                Object.assign(e.default, e),
                (t.exports = e.default));
        },
        7966: (t, e, i) => {
            "use strict";
            i.d(e, { cJ: () => n });
            var r = i(83997),
                n = (function () {
                    function t(t) {
                        Object.defineProperty(this, "observableValue", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                            (this.observableValue = (0, r.vP)(t));
                    }
                    return (
                        Object.defineProperty(t.prototype, "value", {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (t) {
                                this.observableValue.value = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "onChange", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return this.observableValue.subscribe(t);
                            },
                        }),
                        t
                    );
                })();
            !(function () {
                function t(t) {
                    Object.defineProperty(this, "observableValue", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0,
                    }),
                        Object.defineProperty(this, "prevValueByListener", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                        (this.observableValue = (0, r.EW)(t)),
                        (this.prevValueByListener = new Map());
                }
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    Object.defineProperty(t.prototype, "onChange", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            var e = this;
                            return (
                                this.prevValueByListener.has(t) ||
                                    this.prevValueByListener.set(t, void 0),
                                this.observableValue.subscribe(function (i) {
                                    i !== e.prevValueByListener.get(t) &&
                                        (e.prevValueByListener.set(t, i), t(i));
                                })
                            );
                        },
                    });
            })();
        },
        8690: (t, e, i) => {
            "use strict";
            i.d(e, { $: () => p });
            let r = "__VPUID_INLINE__",
                n = "vpuid";
            class s {
                prefix;
                path;
                constructor(t = {}) {
                    (this.prefix = t.prefix || "ss_"),
                        (this.path = t.path || "/");
                }
                getItem(t) {
                    let e = `${this.prefix}${t}=`,
                        i = document.cookie.indexOf(e);
                    if (-1 === i) return null;
                    let r = i + e.length,
                        n = document.cookie.indexOf(";", r);
                    return document.cookie.substring(
                        r,
                        -1 === n ? document.cookie.length : n,
                    );
                }
                setItem(t, e) {
                    let i = `${this.prefix}${t}=${e}; path=${this.path}; samesite=strict`;
                    document.cookie = i;
                }
                removeItem(t) {
                    document.cookie = `${this.prefix}${t}=; path=${this.path}; max-age=-1`;
                }
                clear() {
                    let t = document.cookie;
                    if (!t) return;
                    let e = t.split(";");
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t].indexOf("=");
                        if (-1 === i) continue;
                        let r = e[t].substring(0, i).trim();
                        r.startsWith(this.prefix) &&
                            this.removeItem(r.substring(this.prefix.length));
                    }
                }
                get length() {
                    let t = 0,
                        e = document.cookie;
                    if (!e) return t;
                    let i = e.split(";");
                    for (let e = 0; e < i.length; e++) {
                        let r = i[e].indexOf("=");
                        -1 !== r &&
                            i[e]
                                .substring(0, r)
                                .trim()
                                .startsWith(this.prefix) &&
                            t++;
                    }
                    return t;
                }
                key(t) {
                    if (t < 0) return null;
                    let e = -1,
                        i = document.cookie;
                    if (!i) return null;
                    let r = i.split(";");
                    for (let i = 0; i < r.length; i++) {
                        let n = r[i].indexOf("=");
                        if (-1 === n) continue;
                        let s = r[i].substring(0, n).trim();
                        if (s.startsWith(this.prefix) && ++e === t)
                            return s.substring(this.prefix.length);
                    }
                    return null;
                }
                static isSupported() {
                    try {
                        let t = "__test_cookie__",
                            e = new s();
                        e.setItem(t, "1");
                        let i = e.getItem(t);
                        return e.removeItem(t), "1" === i;
                    } catch {
                        return !1;
                    }
                }
            }
            class a {
                data = {};
                getItem(t) {
                    return this.data[t] || null;
                }
                setItem(t, e) {
                    this.data[t] = e;
                }
                removeItem(t) {
                    delete this.data[t];
                }
                clear() {
                    this.data = {};
                }
                get length() {
                    return Object.keys(this.data).length;
                }
                key(t) {
                    let e = Object.keys(this.data);
                    return t >= 0 && t < e.length ? e[t] : null;
                }
            }
            function o(t) {
                let e = "__test_storage__";
                try {
                    return t.setItem(e, "test"), t.removeItem(e), !0;
                } catch {
                    return !1;
                }
            }
            class l {
                fallbackOrder;
                constructor(t = ["local", "session", "cookie", "memory"]) {
                    this.fallbackOrder = t;
                }
                getStorage() {
                    for (let t of this.fallbackOrder)
                        if (
                            (function (t) {
                                try {
                                    switch (t) {
                                        case "local":
                                            return o(window.localStorage);
                                        case "session":
                                            return o(window.sessionStorage);
                                        case "cookie":
                                            return s.isSupported();
                                        case "memory":
                                            return !0;
                                        default:
                                            throw Error(
                                                `Unsupported storage type: ${t}`,
                                            );
                                    }
                                } catch {
                                    return !1;
                                }
                            })(t)
                        )
                            return this.createStorage(t);
                    return new a();
                }
                createStorage(t) {
                    switch (t) {
                        case "local":
                        default:
                            return window.localStorage;
                        case "session":
                            return window.sessionStorage;
                        case "cookie":
                            return new s();
                        case "memory":
                            return new a();
                    }
                }
            }
            let u = new l().getStorage(),
                h = new l(["local", "memory"]).getStorage(),
                d = new l(["session", "memory"]).getStorage();
            function c(t) {
                return {
                    getItem(e) {
                        try {
                            return t.getItem(e);
                        } catch {
                            return null;
                        }
                    },
                    setItem(e, i) {
                        try {
                            t.setItem(e, i);
                        } catch {}
                    },
                    removeItem(e) {
                        try {
                            t.removeItem(e);
                        } catch {}
                    },
                    clear() {
                        try {
                            t.clear();
                        } catch {}
                    },
                    hasItem(e) {
                        try {
                            return null !== t.getItem(e);
                        } catch {
                            return !1;
                        }
                    },
                    get length() {
                        try {
                            return t.length;
                        } catch {
                            return 0;
                        }
                    },
                    key(e) {
                        try {
                            return t.key(e);
                        } catch {
                            return null;
                        }
                    },
                };
            }
            let f = c(u);
            c(h), c(d);
            var m = i(34340);
            let g = "qwertyuiopasdfghjklzxcvbnm0123456789",
                p =
                    -1 === r.indexOf("__VPUID")
                        ? r
                        : (f.getItem(n) ??
                          (function () {
                              let t = [];
                              for (let e = 0; e < 10; e++)
                                  t.push(g[Math.floor((0, m.y)() * g.length)]);
                              return t.join("");
                          })());
            f.setItem(n, p);
        },
        16092: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = i(33008),
                n = i(66268),
                s = i(52283);
            function a(t) {
                return { default: t && "default" in t ? t.default : t };
            }
            i(81382);
            let o = {
                    loader: () => Promise.resolve(a(() => null)),
                    loading: null,
                    ssr: !0,
                },
                l = function (t) {
                    let e = { ...o, ...t },
                        i = (0, n.lazy)(() => e.loader().then(a)),
                        l = e.loading;
                    function u(t) {
                        let a = l
                                ? (0, r.jsx)(l, {
                                      isLoading: !0,
                                      pastDelay: !0,
                                      error: null,
                                  })
                                : null,
                            o = !e.ssr || !!e.loading,
                            u = o ? n.Suspense : n.Fragment,
                            h = e.ssr
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [null, (0, r.jsx)(i, { ...t })],
                                  })
                                : (0, r.jsx)(s.BailoutToCSR, {
                                      reason: "next/dynamic",
                                      children: (0, r.jsx)(i, { ...t }),
                                  });
                        return (0, r.jsx)(u, {
                            ...(o ? { fallback: a } : {}),
                            children: h,
                        });
                    }
                    return (u.displayName = "LoadableComponent"), u;
                };
        },
        16811: (t, e, i) => {
            "use strict";
            i.d(e, { x3: () => o, lh: () => f });
            var r = i(5471);
            let n = {}.toString,
                s = /\[object (\w+)\]/;
            function a(t) {
                return (
                    "function" == typeof t ||
                    "Function" ===
                        ((t) => {
                            let e = n.call(t);
                            if (!e) return null;
                            let i = e.match(s);
                            if (!i) return null;
                            let r = i[1];
                            return r || null;
                        })(t)
                );
            }
            let o =
                    Date && a(Date.now)
                        ? () => Date.now()
                        : () => new Date().getTime(),
                l = "undefined" == typeof window ? void 0 : window.performance,
                u = l && a(l.now),
                h = l && l.timing && l.timing.navigationStart,
                d =
                    l && l.timeOrigin
                        ? l.timeOrigin
                        : h
                          ? l.timing.navigationStart
                          : o(),
                c = 0,
                f = () => (0, r.Wj)(u ? l.now() : (c = Math.max(o() - d, c)));
        },
        19679: (t, e, i) => {
            "use strict";
            i.d(e, { YT: () => G, FM: () => l });
            var r,
                n,
                s,
                a,
                o,
                l = {};
            i.r(l),
                i.d(l, { g: () => r, r: () => n }),
                (function (t) {
                    (t.Start = "Start"),
                        (t.Watched4Sec = "4SecWatched"),
                        (t.Watched10Sec = "10SecWatched"),
                        (t.Watched20Sec = "20SecWatched"),
                        (t.Heartbeat30Sec = "30SecHeartbeat"),
                        (t.End = "End");
                })(r || (r = {})),
                (function (t) {
                    (t.PLAY = "play"),
                        (t.PAUSE = "pause"),
                        (t.BUFFERING = "buffering"),
                        (t.END = "end");
                })(n || (n = {}));
            var u = i(5471);
            function h(t) {
                return Math.floor(t / 30);
            }
            class d {
                params;
                previousWatchedTime = (0, u.fP)(0);
                constructor(t) {
                    this.params = t;
                }
                onWatchedTimeChange(t) {
                    let { previousWatchedTime: e } = this;
                    e !== t &&
                        (0 === e && t > 0
                            ? this.params.onEvent(r.Start)
                            : e < 4 && t >= 4
                              ? this.params.onEvent(r.Watched4Sec)
                              : e < 10 && t >= 10
                                ? this.params.onEvent(r.Watched10Sec)
                                : e < 20 && t >= 20
                                  ? this.params.onEvent(r.Watched20Sec)
                                  : h(e) < h(t) &&
                                    this.params.onEvent(r.Heartbeat30Sec),
                        (this.previousWatchedTime = t));
                }
                onPlayingStateChange(t) {
                    t === n.END && this.params.onEvent(r.End);
                }
            }
            class c {
                lastSourceIndexWithFatal = null;
                extractSourceIndex(t) {
                    let e = t.split("?")[1];
                    if (e)
                        for (let t of e.split("&")) {
                            let [e, i] = t.split("=");
                            if ("source_index" === e)
                                return i ? Number(i) : null;
                        }
                    return null;
                }
                checkIsFatal(t, e) {
                    if (!t || !e) return t;
                    let i = this.extractSourceIndex(e);
                    return null === i
                        ? t
                        : (null === this.lastSourceIndexWithFatal ||
                              i > this.lastSourceIndexWithFatal) &&
                              ((this.lastSourceIndexWithFatal = i), !0);
                }
            }
            var f = i(93973);
            let m = (0, u.Wj)(1e4),
                g = (0, u.Wj)(1e3),
                p = (0, u.Wj)(5e3),
                v = (0, u.Wj)(3e4);
            var y = i(16811);
            class b {
                onTick;
                onFlush;
                wasFirstFlush = !1;
                isDestroyed = !1;
                lastFlushTime;
                startTime;
                timer;
                constructor(t, e) {
                    (this.onTick = t),
                        (this.onFlush = e),
                        (this.startTime = this.lastFlushTime = (0, y.lh)()),
                        (this.timer = window.setTimeout(() => {
                            this.onTick(), this.nextTick();
                        }, 0));
                }
                next() {
                    this.isDestroyed ||
                        (window.clearTimeout(this.timer),
                        this.handleFlush(),
                        this.nextTick());
                }
                destroy() {
                    window.clearTimeout(this.timer), (this.isDestroyed = !0);
                }
                nextTick() {
                    this.isDestroyed ||
                        (window.clearTimeout(this.timer),
                        (this.timer = window.setTimeout(
                            this.handleTimeout,
                            this.getTimeout(),
                        )));
                }
                handleTimeout = () => {
                    this.onTick(), this.handleFlush(), this.nextTick();
                };
                handleFlush() {
                    this.needFlush() &&
                        (this.onFlush(),
                        (this.lastFlushTime = this.wasFirstFlush
                            ? (0, y.lh)()
                            : this.startTime),
                        (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let t = (0, y.lh)();
                    return this.wasFirstFlush
                        ? t - this.lastFlushTime >= v
                        : t - this.startTime >= m;
                }
                getTimeout() {
                    return (0, y.lh)() - this.startTime < m ? g : p;
                }
            }
            let S = (0, u.PY)((0, u.fP)(Math.abs(0))),
                w = {
                    remainingBufferedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    state: n.BUFFERING,
                    currentTime: S,
                    watchedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    duration: (0, u.PY)((0, u.fP)(0)),
                },
                T = NaN;
            function x(...t) {}
            !(function (t) {
                (t[(t.PLAYING = 1)] = "PLAYING"),
                    (t[(t.NOT_PLAYING = 2)] = "NOT_PLAYING");
            })(s || (s = {})),
                (function (t) {
                    (t.preroll = "preroll"),
                        (t.midroll = "midroll"),
                        (t.postPauseroll = "postPauseroll"),
                        (t.postroll = "postroll"),
                        (t.inroll = "inroll");
                })(a || (a = {}));
            class E {
                props;
                prevState = void 0;
                states = [];
                timer;
                destroyHandlers = [];
                constructor(t) {
                    (this.props = t),
                        (this.timer = new b(
                            () => this.writeState(),
                            () => this.flushStates(),
                        ));
                }
                addDestroyHandler(t) {
                    this.destroyHandlers.push(t);
                }
                destroy() {
                    this.timer.destroy(),
                        this.flushStates(),
                        this.destroyHandlers.forEach((t) => {
                            t();
                        }),
                        (this.destroyHandlers = []);
                }
                getStates() {
                    return [...this.states];
                }
                flushStates() {
                    this.writeStateManually.now();
                    let t = this.getStates();
                    t.length > 0 && this.props.onFlushStates(t),
                        (this.states.length = 0);
                }
                writeStateManually = (function (t, e, i, r) {
                    3 == arguments.length &&
                        "boolean" != typeof i &&
                        ((r = i), (i = !1));
                    let n = null,
                        s = x;
                    function a() {
                        null !== n && clearTimeout(n), (n = null);
                    }
                    let o = function () {
                        let o = arguments;
                        (r = r || this),
                            (s = () => {
                                a(), (s = x), t.apply(r, o);
                            }),
                            i && null === n && t.apply(r, o),
                            a(),
                            (n = window.setTimeout(function () {
                                i || t.apply(r, o), (n = null);
                            }, e));
                    };
                    return (
                        (o.cancel = a),
                        (o.now = () => {
                            s();
                        }),
                        o
                    );
                })(() => {
                    this.writeState(), this.timer.next();
                }, 0);
                writeState() {
                    let t = this.getPlayerAliveState();
                    f(this.prevState, t) ||
                        ((this.prevState = t),
                        this.states.push({
                            ...t,
                            timestamp: (0, u.Wj)(this.props.getTimestamp()),
                        }));
                }
                getPlayerAliveState() {
                    let t = {
                            ...w,
                            saveData: (function (t = window) {
                                let { navigator: e } = t,
                                    { connection: i = {} } = e;
                                return !!i.saveData;
                            })(),
                            rtt: (function (t = window) {
                                var e;
                                if (!t.navigator) return T;
                                let { connection: i = {} } = t.navigator;
                                return "number" == typeof (e = i.rtt) &&
                                    isFinite(e)
                                    ? i.rtt
                                    : T;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        e = this.props.getState();
                    if (!e) return { ...t };
                    let {
                            currentTime: i,
                            duration: r,
                            muted: n,
                            playingState: a,
                            remainingBufferedTime: o,
                            adState: l,
                            liveLatency: h,
                            videoTracks: d,
                            audioTrack: c,
                            videoSize: f,
                            isVisible: m,
                            capHeight: g,
                            capWidth: p,
                            containerHeight: v,
                            containerWidth: y,
                            bandwidthEstimate: b,
                            bandwidthSource: S,
                            droppedFrames: x,
                            shownFrames: E,
                            isFullscreen: I,
                            isPictureInPicture: F,
                            volume: O,
                            playbackRate: P,
                        } = e,
                        M = d.find((t) => t.selected),
                        k = [...d].sort((t, e) => e.bitrate - t.bitrate),
                        D = l?.state === s.PLAYING,
                        C = !D,
                        _ = this.props.getWatchedTime();
                    return {
                        ...t,
                        watchedTime: Math.max(0, _),
                        currentTime: isNaN(i) ? (0, u.fP)(0) : Math.max(0, i),
                        duration: isNaN(r) ? (0, u.fP)(0) : Math.max(0, r),
                        isMuted: n,
                        state: a,
                        remainingBufferedTime: o?.total || (0, u.fP)(0),
                        remainingAudioBufferedTime:
                            o?.audio === void 0 ? void 0 : Math.max(0, o.audio),
                        remainingVideoBufferedTime:
                            o?.video === void 0 ? void 0 : Math.max(0, o.video),
                        ad: D ? l?.type : void 0,
                        liveLatency: void 0 === h ? void 0 : Math.max(0, h),
                        stalledReason:
                            this.props.stalledController.getCurrentStalledReason(),
                        auto: M?.auto === void 0 ? void 0 : M.auto,
                        isVisible: m,
                        bitrate: M?.bitrate
                            ? Math.max(0, Math.floor((0, u.lw)(M.bitrate, 1e3)))
                            : void 0,
                        width:
                            f?.videoWidth === void 0 || isNaN(f?.videoWidth)
                                ? void 0
                                : Math.max(
                                      0,
                                      Math.floor((0, u.Lp)(f?.videoWidth)),
                                  ),
                        height:
                            f?.videoHeight === void 0 || isNaN(f?.videoHeight)
                                ? void 0
                                : Math.max(
                                      0,
                                      Math.floor((0, u.Lp)(f?.videoHeight)),
                                  ),
                        maxWidth:
                            C && k[0]?.width
                                ? Math.max(0, Math.floor((0, u.Lp)(k[0].width)))
                                : void 0,
                        maxHeight:
                            C && k[0]?.height
                                ? Math.max(
                                      0,
                                      Math.floor((0, u.Lp)(k[0].height)),
                                  )
                                : void 0,
                        audioTrack: c?.value || void 0,
                        audioLang: c?.lang || void 0,
                        audioBitrate: c?.bitrate
                            ? Math.max(0, Math.floor((0, u.lw)(c.bitrate, 1e3)))
                            : void 0,
                        capHeight:
                            C && g
                                ? Math.max(0, Math.floor((0, u.Lp)(g)))
                                : void 0,
                        capWidth:
                            C && p
                                ? Math.max(0, Math.floor((0, u.Lp)(p)))
                                : void 0,
                        containerHeight:
                            void 0 !== v ? Math.max(0, Math.floor(v)) : void 0,
                        containerWidth:
                            void 0 !== y ? Math.max(0, Math.floor(y)) : void 0,
                        bandwidthEstimate:
                            void 0 === b || isNaN(b)
                                ? void 0
                                : Math.max(0, (0, u.bY)(Math.round(b))),
                        bandwidthSource: S || void 0,
                        droppedFrames:
                            void 0 === x ? void 0 : Math.max(0, Math.floor(x)),
                        shownFrames:
                            void 0 === E ? void 0 : Math.max(0, Math.floor(E)),
                        viewport: I ? "fullscreen" : F ? "pip" : "default",
                        volume: O,
                        playbackRate: P,
                    };
                }
            }
            !(function (t) {
                (t.Init = "Init"),
                    (t.SetSource = "SetSource"),
                    (t.Seek = "Seek"),
                    (t.VideoTrackChange = "VideoTrackChange"),
                    (t.AudioTrackChange = "AudioTrackChange"),
                    (t.Recover = "Recover"),
                    (t.MediaError = "MediaError"),
                    (t.Offline = "Offline"),
                    (t.Other = "Other"),
                    (t.Render = "Render"),
                    (t.RepresentationsChange = "RepresentationsChange"),
                    (t.LiveEdge = "LiveEdge"),
                    (t.AdStart = "AdStart"),
                    (t.AdOther = "AdOther"),
                    (t.AdBetween = "AdBetween"),
                    (t.AdEnd = "AdEnd");
            })(o || (o = {}));
            let I = [0, 1, 4, 5],
                F = (0, u.fP)(0),
                O = I.map((t) => (F = (0, u.WQ)((0, u.fP)(t), F))),
                P = (0, u.lw)(O[O.length - 1], 1e3),
                M = [o.Init];
            function k(t) {
                setTimeout(() => {
                    throw t;
                }, 0);
            }
            function D(t, e) {
                try {
                    return t();
                } catch (t) {
                    "function" == typeof e && e(t);
                }
            }
            class C {
                setTimeout(t, e) {
                    if (e <= 0) return void D(t, k);
                    let i = window.setTimeout(t, e);
                    return () => window.clearTimeout(i);
                }
                now() {
                    return (0, y.x3)();
                }
            }
            class _ {
                distributionFunction;
                clock;
                stopped = !0;
                cancel;
                lastNow = 0;
                lastKnockTime;
                lastTimeout = 0;
                restTime = 0;
                destroyed = !1;
                isFirstKnock = !0;
                count = 0;
                constructor(t, e = new C()) {
                    (this.distributionFunction = t), (this.clock = e);
                }
                setEnabled(t) {
                    return t ? this.start() : this.stop(), this;
                }
                stop() {
                    return (
                        this.stopped ||
                            ((this.stopped = !0),
                            this.cancelTimeout(),
                            (this.restTime = Math.max(
                                this.restTime -
                                    (this.clock.now() - this.lastKnockTime),
                                0,
                            ))),
                        this
                    );
                }
                start() {
                    return (
                        this.stopped &&
                            !this.destroyed &&
                            ((this.stopped = !1),
                            (this.lastKnockTime = this.clock.now()),
                            this.setTimeout(
                                () =>
                                    this.knock(this.lastNow + this.lastTimeout),
                                this.restTime,
                            )),
                        this
                    );
                }
                destroy() {
                    this.cancelTimeout(),
                        (this.stopped = !0),
                        (this.destroyed = !0);
                }
                knock(t) {
                    (this.lastNow = t),
                        (this.lastKnockTime = this.clock.now()),
                        this.isFirstKnock
                            ? (this.isFirstKnock = !1)
                            : this.count++;
                    let e =
                        (this.restTime =
                        this.lastTimeout =
                            this.distributionFunction({
                                time: t,
                                count: this.count,
                            }));
                    this.stopped ||
                        this.destroyed ||
                        this.setTimeout(() => this.knock(t + e), e);
                }
                cancelTimeout() {
                    void 0 !== this.cancel && this.cancel(),
                        (this.cancel = void 0);
                }
                setTimeout(t, e) {
                    this.cancelTimeout();
                    let i = this.clock.setTimeout(t, e);
                    void 0 !== i && (this.cancelTimeout(), (this.cancel = i));
                }
            }
            function N(t = y.lh) {
                let e = t();
                return () => (0, u.Wj)(Math.max(0, t() - e));
            }
            function V(t, e) {
                return { reason: t, details: e, getElapsedTime: N() };
            }
            class A {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, u.fP)(0);
                getState;
                logEvent;
                expectedStalled = V(o.Init, {});
                currentStalled = void 0;
                stalledTime = (0, u.fP)(0);
                stalledCount = 0;
                constructor({ getState: t, logEvent: e }) {
                    (this.getState = t), (this.logEvent = e);
                }
                setBuffering(t, e = (0, u.Wj)(0)) {
                    if (t !== this.isBuffering)
                        if (((this.isBuffering = t), this.isBuffering)) {
                            let t = [],
                                i = I.filter((i, r) => {
                                    let n = this.currentStalled
                                            ? this.currentStalled
                                                  .expectedStalled
                                            : this.getExpectedStalled(),
                                        s = O[r];
                                    if ((0, u.Qr)(e, 1e3) > s) {
                                        let t = this.currentStalled
                                            ? this.currentStalled.id
                                            : this.stalledId++;
                                        return (
                                            !this.currentStalled &&
                                                this.stalledCount++,
                                            (this.currentStalled = {
                                                id: t,
                                                expectedStalled: n,
                                                duration: s,
                                                getElapsedTime: N(),
                                            }),
                                            this.send(!1, n, s, t),
                                            !1
                                        );
                                    }
                                    return t.push(s), !0;
                                });
                            this.currentStalled &&
                                (this.stalledDurationRemainder = (0, u.gL)(
                                    (0, u.Qr)(e, 1e3),
                                    this.currentStalled.duration,
                                )),
                                i.length &&
                                    (i[0] =
                                        i[0] - this.stalledDurationRemainder),
                                (this.timer = new _(({ count: e }) => {
                                    let r = this.currentStalled
                                        ? this.currentStalled.expectedStalled
                                        : this.getExpectedStalled();
                                    if (e > 0) {
                                        let i = (0, u.fP)(t[e - 1]),
                                            n = this.currentStalled
                                                ? this.currentStalled.id
                                                : this.stalledId++;
                                        !this.currentStalled &&
                                            this.stalledCount++,
                                            (this.currentStalled = {
                                                id: n,
                                                expectedStalled: r,
                                                duration: i,
                                                getElapsedTime: N(),
                                            }),
                                            this.send(!1, r, i, n);
                                    }
                                    return e >= i.length
                                        ? (this.destroyTimer(), 1 / 0)
                                        : 1e3 * i[e];
                                })),
                                this.timer.start();
                        } else {
                            if (this.currentStalled) {
                                var i;
                                let { expectedStalled: t, id: e } =
                                        this.currentStalled,
                                    r = (0, u.WQ)(
                                        void 0 === (i = this.currentStalled)
                                            ? (0, u.fP)(0)
                                            : (0, u.WQ)(
                                                  i.duration,
                                                  (0, u.Qr)(
                                                      i.getElapsedTime(),
                                                      1e3,
                                                  ),
                                              ),
                                        this.stalledDurationRemainder,
                                    );
                                this.send(!0, t, (0, u.WQ)(r), e),
                                    (this.currentStalled = void 0),
                                    (this.stalledDurationRemainder = (0, u.fP)(
                                        0,
                                    )),
                                    (this.stalledTime = (0, u.WQ)(
                                        r,
                                        this.stalledTime,
                                    ));
                                let n =
                                    this.getState()?.adState?.state ===
                                    s.PLAYING
                                        ? o.AdOther
                                        : o.Other;
                                this.setExpectedStalled(V(n, void 0));
                            }
                            this.destroyTimer();
                        }
                }
                getStalledHistory() {
                    let { stalledCount: t, stalledTime: e } = this;
                    return {
                        stalledCount: (0, u.Pn)(t),
                        stalledTime: (0, u.PY)(e),
                    };
                }
                clearStalledHistory() {
                    (this.stalledCount = 0), (this.stalledTime = (0, u.fP)(0));
                }
                destroy() {
                    this.destroyTimer();
                }
                getCurrentStalledReason() {
                    return this.currentStalled?.expectedStalled.reason;
                }
                setExpectedStalled(t) {
                    this.expectedStalled = t;
                }
                isExpiredStalled(t) {
                    let { getElapsedTime: e, reason: i } = t;
                    return (
                        !(M.indexOf(i) > -1) &&
                        (!this.currentStalled ||
                            this.currentStalled.expectedStalled !== t) &&
                        e() >= P
                    );
                }
                getExpectedStalled() {
                    let t = this.expectedStalled;
                    return this.isExpiredStalled(t) ? V(o.Other, void 0) : t;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(t, e, i, r) {
                    let { reason: n, details: s } = e,
                        a = { ...s, stalledDuration: i, stalledId: r },
                        o = this.getState();
                    if (o) {
                        let {
                                muted: t,
                                remainingBufferedTime: e,
                                videoTracks: i,
                            } = o,
                            r = i.find((t) => t.selected);
                        a = {
                            ...a,
                            remainingBufferedTime: e,
                            videoTrack: r,
                            isMuted: t,
                        };
                    }
                    this.logEvent({
                        name: t ? "StalledEnd" : "Stalled",
                        data: a,
                        labels: { reason: n },
                    });
                }
            }
            let L = (t) =>
                "hidden" in t
                    ? "hidden"
                    : "webkitHidden" in t
                      ? "webkitHidden"
                      : void 0;
            function j(t, e = !0) {
                let i = L(t);
                return i ? !t[i] : e;
            }
            let W = [
                "Start",
                "4SecWatched",
                "10SecWatched",
                "20SecWatched",
                "30SecHeartbeat",
                "End",
            ];
            RegExp(
                `^https?:\\/\\/([^\\/]+\\.)?(${"boolean" == typeof CLOUD_BUILD && CLOUD_BUILD ? ["video\\.cloud\\.yandex\\.net"] : "(an|strm)\\.yandex\\.(ru|net)|yastatic\\.net|strm-ott\\.akamaized\\.net|cdn\\.ngenix\\.net|strm\\.yandex\\.cdnga\\.net|strm-yandex\\.gcdn\\.co|(widevine|playready|fairplay)-proxy\\.ott\\.yandex\\.ru|drm\\.yandex-team\\.ru"})\\/(?!log|perf|jstracer)`,
            ),
                (0, u.Wj)(3e4);
            class R {
                lastUpdate = void 0;
                watchedTime = (0, u.fP)(0);
                calc(t, e, i) {
                    if (void 0 !== this.lastUpdate) {
                        var r, n;
                        let i =
                            ((r = (0, u.Qr)(
                                (0, u.gL)(t, this.lastUpdate.videoTime),
                                e,
                            )),
                            (n = (0, u.Qr)(
                                (0, u.Wj)(this.lastUpdate.getElapsedTime()),
                                1e3,
                            )),
                            (0, u.fP)(
                                Math.max(0, r >= 0 && r <= n + 0.5 ? r : n),
                            ));
                        this.watchedTime = (0, u.WQ)(this.watchedTime, i);
                    }
                    this.lastUpdate = i
                        ? { getElapsedTime: N(), videoTime: t }
                        : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
            }
            class B {
                getState;
                onChange;
                intervalId = void 0;
                watchedTimeCounter = new R();
                constructor(t, e) {
                    (this.getState = t),
                        (this.onChange = e),
                        (this.intervalId = setInterval(this.onTick, 100));
                }
                onTick = () => {
                    let t = this.getState();
                    if (!t) return;
                    let {
                            currentTime: e,
                            playbackRate: i = 1,
                            playingState: r,
                            adState: a,
                        } = t,
                        o = a?.state === s.PLAYING;
                    this.watchedTimeCounter.calc(e, i, r === n.PLAY && !o),
                        this.onChange?.(this.watchedTimeCounter.get());
                };
                reset() {
                    (this.watchedTimeCounter = new R()),
                        this.onChange?.(this.watchedTimeCounter.get());
                }
                getWatchedTime() {
                    return this.watchedTimeCounter.get();
                }
                destroy() {
                    clearInterval(this.intervalId), (this.intervalId = void 0);
                }
            }
            var z = i(8690);
            function H() {
                return (0, u.Wj)((0, y.x3)());
            }
            class U {
                lastDateNow;
                lastPerformanceNow;
                total = (0, u.Wj)(0);
                interval;
                getTime;
                constructor(t = y.lh) {
                    (this.getTime = t),
                        (this.lastDateNow = H()),
                        (this.lastPerformanceNow = t()),
                        (this.interval = setInterval(this.now, 1e3));
                }
                now = () => {
                    let t = H(),
                        e = this.getTime(),
                        i = (0, u.gL)(e, this.lastPerformanceNow),
                        r = (0, u.gL)(t, this.lastDateNow),
                        n = (i) => (
                            (this.lastDateNow = t),
                            (this.lastPerformanceNow = e),
                            (this.total = (0, u.WQ)(this.total, i)),
                            this.total
                        );
                    return n(r <= 0 ? i : r);
                };
                stop() {
                    clearInterval(this.interval);
                }
            }
            i(34340);
            let Y = {
                    enabled: !0,
                    events: [r.Watched10Sec, r.Watched20Sec, r.Heartbeat30Sec],
                },
                $ = { logVersion: "1.2.0" };
            class G {
                static getVpuid() {
                    return z.$;
                }
                watchedTimeTracker;
                fatalTracker;
                playbackTracker;
                playerAliveController;
                stalledController;
                remoteProgressSavingInfo = Y;
                staticParams = {};
                playerInfo;
                useOfDeprecatedMethodIsLogged = !1;
                timer;
                timerStartTime = Date.now();
                sendLog;
                getState;
                destroyed = !1;
                wasInitBufferingLogged = !1;
                externalStalledDuration = (0, u.Wj)(0);
                initialStalledDuration = (0, u.Wj)(0);
                wasInitBufferingHandled = !1;
                initialStalledTimestamp;
                initialStalledTimestampStop;
                eventIndex = 0;
                reportNumber = 0;
                sourceIndexes = { current: 0, last: 0 };
                constructor({ sendLog: t, playerInfo: e, getState: i }) {
                    (this.playerInfo = e),
                        (this.sendLog = t),
                        (this.getState = i),
                        (this.playbackTracker = new d({
                            onEvent: (t) => this.logEvent({ name: t }),
                        })),
                        (this.stalledController = new A({
                            getState: this.getState,
                            logEvent: (t) => this.logEvent(t),
                        })),
                        (this.watchedTimeTracker = new B(i, (t) =>
                            this.playbackTracker.onWatchedTimeChange(t),
                        )),
                        (this.playerAliveController = new E({
                            getState: i,
                            onFlushStates: (t) =>
                                this.logEvent({
                                    name: "PlayerAlive",
                                    data: { states: t },
                                }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () =>
                                this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new c()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new U());
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let t = (function (t, e) {
                        let i = (function (t) {
                            let e = L(t);
                            if (e)
                                return e.replace(/hidden/i, "visibilitychange");
                        })(t);
                        if (!i) return x;
                        let r = () => {
                            e(j(t));
                        };
                        return (
                            t.addEventListener(i, r),
                            () => t.removeEventListener(i, r)
                        );
                    })(document, (t) => {
                        t || this.playerAliveController.flushStates();
                    });
                    this.playerAliveController.addDestroyHandler(t);
                }
                setStaticParams(t, e) {
                    e
                        ? (this.staticParams = { ...t })
                        : (this.staticParams = { ...this.staticParams, ...t });
                }
                enableRemoteProgressSaving(t) {
                    this.remoteProgressSavingInfo.enabled = t;
                }
                updateWatchedTime() {
                    this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({
                            name: "DeprecatedTelemetryMethodUsed",
                            data: { method: "updateWatchedTime" },
                        }),
                        (this.useOfDeprecatedMethodIsLogged = !0)),
                        k(
                            Error(
                                "Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.",
                            ),
                        );
                }
                setPlayingState(t) {
                    this.playbackTracker.onPlayingStateChange(t),
                        this.handleInitialBuffering(),
                        t === n.BUFFERING
                            ? this.setBuffering(!0)
                            : this.setBuffering(!1);
                }
                logEvent(t, e) {
                    if (this.destroyed) return;
                    let i = this.getFullEventLog(t, e),
                        r = this.getUrlParams(
                            i.eventType,
                            i.eventName,
                            t.labels,
                        );
                    this.sendData(i, r);
                }
                logError({ error: t, labels: e, extraRootFields: i }, r) {
                    if (this.destroyed) return;
                    t.isFatal = this.fatalTracker.checkIsFatal(
                        t.isFatal,
                        this.staticParams.streamUrl,
                    );
                    let n = this.getFullErrorLog({
                            error: t,
                            labels: e,
                            extraRootFields: i,
                            sourceIndex: r,
                        }),
                        s = this.getUrlParams(n.eventType, n.eventName, e);
                    this.sendData(n, s);
                }
                getUrlParams(t, e, i) {
                    return {
                        ...i,
                        [this.playerInfo.service]: this.playerInfo.version,
                        [t]: String(e),
                    };
                }
                getFullEventLog(t, e) {
                    let i = this.getState(),
                        r = {
                            ...this.staticParams.labels,
                            ...t.labels,
                            videoType: i?.videoType,
                        },
                        n = W.includes(t.name)
                            ? { ...t.data, ...this.getDataToSend(i) }
                            : t.data,
                        s = {};
                    return (
                        this.remoteProgressSavingInfo.events.includes(t.name) &&
                            i &&
                            (s.playbackProgress = { time: i.currentTime }),
                        {
                            ...$,
                            ...this.staticParams,
                            ...t.extraRootFields,
                            ...s,
                            ...this.playerInfo,
                            vpuid: z.$,
                            eventType: "event",
                            eventName: t.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: j(document),
                            eventIndex: this.eventIndex,
                            data: n,
                            labels: r,
                            sourceIndex: e ?? this.sourceIndexes.current,
                        }
                    );
                }
                getFullErrorLog({
                    error: t,
                    labels: e,
                    extraRootFields: i,
                    sourceIndex: r,
                }) {
                    let n = { ...this.staticParams.labels, ...e };
                    return (
                        (t.details =
                            D(() =>
                                "string" == typeof t.details
                                    ? t.details
                                    : JSON.stringify(t.details),
                            ) || t.details),
                        {
                            ...$,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...i,
                            vpuid: z.$,
                            eventType: t.isFatal ? "fatal" : "error",
                            eventName: String(t.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: j(document),
                            eventIndex: this.eventIndex,
                            data: t,
                            labels: n,
                            sourceIndex: r ?? this.sourceIndexes.current,
                        }
                    );
                }
                getDataToSend(t) {
                    if (!t) return {};
                    let {
                        duration: e,
                        currentTime: i,
                        utcStartTime: r,
                        isFullscreen: n,
                        volume: s,
                        muted: a,
                    } = t;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(e) ? void 0 : e,
                        time: i,
                        utcTime: void 0 === r ? void 0 : r + i,
                        isFullscreen: n,
                        isMuted: a || 0 === s,
                    };
                }
                sendData(t, e) {
                    void 0 !== t &&
                        (D(() => this.sendLog(t, e), k), this.eventIndex++);
                }
                checkStalledReason(t) {
                    return (
                        this.stalledController.getCurrentStalledReason() === t
                    );
                }
                setBuffering(t, e) {
                    this.stalledController.setBuffering(t, e);
                }
                setExpectedBuffering({ reason: t, details: e }) {
                    switch ((this.checkInitBuffering(t), t)) {
                        case o.SetSource:
                            this.setBuffering(!1), this.clearBufferingHistory();
                            break;
                        case o.Init:
                            break;
                        default:
                            this.checkStalledReason(t) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(V(t, e));
                }
                checkInitBuffering(t) {
                    this.wasInitBufferingLogged ||
                        t === o.Init ||
                        this.onInitBuffering();
                }
                setExternalStalledDuration(t) {
                    let e = this.getExpectedStalled();
                    e.reason === o.Init &&
                        t &&
                        ((e.details = {
                            externalStalledDuration: (0, u.Qr)(t, 1e3),
                        }),
                        this.setExpectedBuffering(e));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, u.Wj)((0, y.lh)());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, u.Wj)((0, y.lh)());
                }
                onInitBuffering(t) {
                    if (this.wasInitBufferingLogged) return;
                    let e =
                            this.initialStalledTimestamp &&
                            !this.initialStalledTimestampStop,
                        i =
                            this.initialStalledTimestamp &&
                            this.initialStalledTimestampStop;
                    (this.initialStalledDuration = e
                        ? (0, u.gL)(
                              (0, u.Wj)((0, y.lh)()),
                              this.initialStalledTimestamp,
                          )
                        : i
                          ? (0, u.gL)(
                                this.initialStalledTimestampStop,
                                this.initialStalledTimestamp,
                            )
                          : (0, u.Wj)(0)),
                        (this.externalStalledDuration = t ?? (0, u.Wj)(0));
                    let { playingState: r } = this.getState() || {};
                    "pause" !== r && this.handleInitialBuffering(),
                        (this.wasInitBufferingLogged = !0),
                        (this.initialStalledTimestamp = void 0),
                        (this.initialStalledTimestampStop = void 0);
                }
                handleInitialBuffering() {
                    this.wasInitBufferingHandled ||
                        (this.externalStalledDuration &&
                            this.setExternalStalledDuration(
                                this.externalStalledDuration,
                            ),
                        this.setBuffering(!0, this.initialStalledDuration),
                        (this.wasInitBufferingHandled = !0));
                }
                destroy(t) {
                    this.stalledController.destroy(),
                        this.playerAliveController.destroy(),
                        this.watchedTimeTracker.destroy(),
                        this.logEvent({
                            name: "DestroyPlayer",
                            data: { reason: t?.reason },
                        }),
                        this.timer.stop(),
                        (this.destroyed = !0);
                }
                getExpectedStalled() {
                    return this.stalledController.getExpectedStalled();
                }
                clearBufferingHistory() {
                    return this.stalledController.clearStalledHistory();
                }
                setPreloadDetails() {
                    this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({
                            name: "DeprecatedTelemetryMethodUsed",
                            data: { method: "setPreloadDetails" },
                        }),
                        (this.useOfDeprecatedMethodIsLogged = !0)),
                        k(
                            Error(
                                "Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.",
                            ),
                        );
                }
                writePlayerAliveStateManually() {
                    return this.playerAliveController.writeStateManually();
                }
                flushStates() {
                    return this.playerAliveController.flushStates();
                }
                onCreatePlayer(t, e) {
                    this.logEvent({
                        name: "CreatePlayer",
                        data: t,
                        extraRootFields: e,
                    });
                }
                onBeforePreload() {
                    return ++this.sourceIndexes.last;
                }
                getSourceIndex() {
                    return this.sourceIndexes.current;
                }
                onBeforeSetSource() {
                    return ++this.sourceIndexes.last;
                }
                onSetSource(t, e, i) {
                    this.flushStates(),
                        (this.sourceIndexes.current =
                            this.sourceIndexes.last > this.sourceIndexes.current
                                ? this.sourceIndexes.last
                                : ++this.sourceIndexes.last),
                        this.watchedTimeTracker.reset(),
                        i && this.setStaticParams(i),
                        this.logEvent({ name: "SetSource", data: t }),
                        this.setExpectedBuffering({
                            reason: o.SetSource,
                            details: e,
                        });
                    let r = this.getState()?.playingState;
                    r !== n.PAUSE && r !== n.END && this.setBuffering(!0);
                }
                sendReportLog(t, e, i = !0) {
                    let r = e ?? this.generateReportId();
                    return (
                        this.logEvent({
                            name: "ReportLog",
                            data: { reportId: r, reported: i, reportData: t },
                        }),
                        r
                    );
                }
                generateReportId() {
                    return `${this.playerInfo.vsid}x${this.reportNumber++}`;
                }
                onExpectedBuffering({ reason: t, details: e }) {
                    return (
                        this.checkInitBuffering(t),
                        this.stalledController.setExpectedStalled(V(t, e))
                    );
                }
                onSeek(t) {
                    this.setExpectedBuffering({ reason: o.Seek, details: t });
                }
                onVideoTrackChange(t) {
                    this.setExpectedBuffering({
                        reason: o.VideoTrackChange,
                        details: t,
                    });
                }
                onAudioTrackChange(t) {
                    this.setExpectedBuffering({
                        reason: o.AudioTrackChange,
                        details: t,
                    });
                }
                onRecover(t) {
                    this.setExpectedBuffering({
                        reason: o.Recover,
                        details: t,
                    });
                }
                onMediaError(t) {
                    this.setExpectedBuffering({
                        reason: o.MediaError,
                        details: t,
                    });
                }
                onNetworkStatusChange(t) {
                    this.setExpectedBuffering({
                        reason: o.Offline,
                        details: t,
                    });
                }
                onRepresentationsChange(t) {
                    this.setExpectedBuffering({
                        reason: o.RepresentationsChange,
                        details: t,
                    });
                }
                onLiveEdge(t) {
                    this.setExpectedBuffering({
                        reason: o.LiveEdge,
                        details: t,
                    });
                }
                onAdStart(t) {
                    this.setExpectedBuffering({
                        reason: o.AdStart,
                        details: t,
                    });
                }
                onAdBetween(t) {
                    this.setExpectedBuffering({
                        reason: o.AdBetween,
                        details: t,
                    });
                }
                onAdEnd(t) {
                    this.setExpectedBuffering({ reason: o.AdEnd, details: t });
                }
            }
        },
        23949: (t, e, i) => {
            "use strict";
            i.d(e, { Te: () => E, XW: () => I });
            var r = i(66268),
                n = i(17229);
            function s(t, e, i) {
                let r,
                    n = i.initialDeps ?? [];
                function s() {
                    var s, a, o, l;
                    let u, h;
                    i.key &&
                        (null == (s = i.debug) ? void 0 : s.call(i)) &&
                        (u = Date.now());
                    let d = t();
                    if (
                        !(d.length !== n.length || d.some((t, e) => n[e] !== t))
                    )
                        return r;
                    if (
                        ((n = d),
                        i.key &&
                            (null == (a = i.debug) ? void 0 : a.call(i)) &&
                            (h = Date.now()),
                        (r = e(...d)),
                        i.key && (null == (o = i.debug) ? void 0 : o.call(i)))
                    ) {
                        let t = Math.round((Date.now() - u) * 100) / 100,
                            e = Math.round((Date.now() - h) * 100) / 100,
                            r = e / 16,
                            n = (t, e) => {
                                for (t = String(t); t.length < e; ) t = " " + t;
                                return t;
                            };
                        console.info(
                            `%c⏱ ${n(e, 5)} /${n(t, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
                            null == i ? void 0 : i.key,
                        );
                    }
                    return (
                        null == (l = null == i ? void 0 : i.onChange) ||
                            l.call(i, r),
                        r
                    );
                }
                return (
                    (s.updateDeps = (t) => {
                        n = t;
                    }),
                    s
                );
            }
            function a(t, e) {
                if (void 0 !== t) return t;
                throw Error(`Unexpected undefined${e ? `: ${e}` : ""}`);
            }
            let o = (t, e, i) => {
                    let r;
                    return function (...n) {
                        t.clearTimeout(r),
                            (r = t.setTimeout(() => e.apply(this, n), i));
                    };
                },
                l = (t) => {
                    let { offsetWidth: e, offsetHeight: i } = t;
                    return { width: e, height: i };
                },
                u = (t) => t,
                h = (t) => {
                    let e = Math.max(t.startIndex - t.overscan, 0),
                        i = Math.min(t.endIndex + t.overscan, t.count - 1),
                        r = [];
                    for (let t = e; t <= i; t++) r.push(t);
                    return r;
                },
                d = (t, e) => {
                    let i = t.scrollElement;
                    if (!i) return;
                    let r = t.targetWindow;
                    if (!r) return;
                    let n = (t) => {
                        let { width: i, height: r } = t;
                        e({ width: Math.round(i), height: Math.round(r) });
                    };
                    if ((n(l(i)), !r.ResizeObserver)) return () => {};
                    let s = new r.ResizeObserver((e) => {
                        let r = () => {
                            let t = e[0];
                            if (null == t ? void 0 : t.borderBoxSize) {
                                let e = t.borderBoxSize[0];
                                if (e)
                                    return void n({
                                        width: e.inlineSize,
                                        height: e.blockSize,
                                    });
                            }
                            n(l(i));
                        };
                        t.options.useAnimationFrameWithResizeObserver
                            ? requestAnimationFrame(r)
                            : r();
                    });
                    return (
                        s.observe(i, { box: "border-box" }),
                        () => {
                            s.unobserve(i);
                        }
                    );
                },
                c = { passive: !0 },
                f = (t, e) => {
                    let i = t.scrollElement;
                    if (!i) return;
                    let r = () => {
                        e({ width: i.innerWidth, height: i.innerHeight });
                    };
                    return (
                        r(),
                        i.addEventListener("resize", r, c),
                        () => {
                            i.removeEventListener("resize", r);
                        }
                    );
                },
                m = "undefined" == typeof window || "onscrollend" in window,
                g = (t, e) => {
                    let i = t.scrollElement;
                    if (!i) return;
                    let r = t.targetWindow;
                    if (!r) return;
                    let n = 0,
                        s =
                            t.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      r,
                                      () => {
                                          e(n, !1);
                                      },
                                      t.options.isScrollingResetDelay,
                                  ),
                        a = (r) => () => {
                            let { horizontal: a, isRtl: o } = t.options;
                            (n = a
                                ? i.scrollLeft * ((o && -1) || 1)
                                : i.scrollTop),
                                s(),
                                e(n, r);
                        },
                        l = a(!0),
                        u = a(!1);
                    u(), i.addEventListener("scroll", l, c);
                    let h = t.options.useScrollendEvent && m;
                    return (
                        h && i.addEventListener("scrollend", u, c),
                        () => {
                            i.removeEventListener("scroll", l),
                                h && i.removeEventListener("scrollend", u);
                        }
                    );
                },
                p = (t, e) => {
                    let i = t.scrollElement;
                    if (!i) return;
                    let r = t.targetWindow;
                    if (!r) return;
                    let n = 0,
                        s =
                            t.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      r,
                                      () => {
                                          e(n, !1);
                                      },
                                      t.options.isScrollingResetDelay,
                                  ),
                        a = (r) => () => {
                            (n =
                                i[
                                    t.options.horizontal ? "scrollX" : "scrollY"
                                ]),
                                s(),
                                e(n, r);
                        },
                        l = a(!0),
                        u = a(!1);
                    u(), i.addEventListener("scroll", l, c);
                    let h = t.options.useScrollendEvent && m;
                    return (
                        h && i.addEventListener("scrollend", u, c),
                        () => {
                            i.removeEventListener("scroll", l),
                                h && i.removeEventListener("scrollend", u);
                        }
                    );
                },
                v = (t, e, i) => {
                    if (null == e ? void 0 : e.borderBoxSize) {
                        let t = e.borderBoxSize[0];
                        if (t)
                            return Math.round(
                                t[
                                    i.options.horizontal
                                        ? "inlineSize"
                                        : "blockSize"
                                ],
                            );
                    }
                    return t[
                        i.options.horizontal ? "offsetWidth" : "offsetHeight"
                    ];
                },
                y = (t, { adjustments: e = 0, behavior: i }, r) => {
                    var n, s;
                    null ==
                        (s =
                            null == (n = r.scrollElement)
                                ? void 0
                                : n.scrollTo) ||
                        s.call(n, {
                            [r.options.horizontal ? "left" : "top"]: t + e,
                            behavior: i,
                        });
                },
                b = (t, { adjustments: e = 0, behavior: i }, r) => {
                    var n, s;
                    null ==
                        (s =
                            null == (n = r.scrollElement)
                                ? void 0
                                : n.scrollTo) ||
                        s.call(n, {
                            [r.options.horizontal ? "left" : "top"]: t + e,
                            behavior: i,
                        });
                };
            class S {
                constructor(t) {
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
                            let t = null,
                                e = () =>
                                    t ||
                                    (this.targetWindow &&
                                    this.targetWindow.ResizeObserver
                                        ? (t =
                                              new this.targetWindow.ResizeObserver(
                                                  (t) => {
                                                      t.forEach((t) => {
                                                          let e = () => {
                                                              this._measureElement(
                                                                  t.target,
                                                                  t,
                                                              );
                                                          };
                                                          this.options
                                                              .useAnimationFrameWithResizeObserver
                                                              ? requestAnimationFrame(
                                                                    e,
                                                                )
                                                              : e();
                                                      });
                                                  },
                                              ))
                                        : null);
                            return {
                                disconnect: () => {
                                    var i;
                                    null == (i = e()) || i.disconnect(),
                                        (t = null);
                                },
                                observe: (t) => {
                                    var i;
                                    return null == (i = e())
                                        ? void 0
                                        : i.observe(t, { box: "border-box" });
                                },
                                unobserve: (t) => {
                                    var i;
                                    return null == (i = e())
                                        ? void 0
                                        : i.unobserve(t);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (t) => {
                            Object.entries(t).forEach(([e, i]) => {
                                void 0 === i && delete t[e];
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
                                    getItemKey: u,
                                    rangeExtractor: h,
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
                                    ...t,
                                });
                        }),
                        (this.notify = (t) => {
                            var e, i;
                            null == (i = (e = this.options).onChange) ||
                                i.call(e, this, t);
                        }),
                        (this.maybeNotify = s(
                            () => (
                                this.calculateRange(),
                                [
                                    this.isScrolling,
                                    this.range ? this.range.startIndex : null,
                                    this.range ? this.range.endIndex : null,
                                ]
                            ),
                            (t) => {
                                this.notify(t);
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
                            this.unsubs.filter(Boolean).forEach((t) => t()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var t;
                            let e = this.options.enabled
                                ? this.options.getScrollElement()
                                : null;
                            if (this.scrollElement !== e) {
                                if ((this.cleanup(), !e))
                                    return void this.maybeNotify();
                                (this.scrollElement = e),
                                    this.scrollElement &&
                                    "ownerDocument" in this.scrollElement
                                        ? (this.targetWindow =
                                              this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow =
                                              (null == (t = this.scrollElement)
                                                  ? void 0
                                                  : t.window) ?? null),
                                    this.elementsCache.forEach((t) => {
                                        this.observer.observe(t);
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
                                            (t) => {
                                                (this.scrollRect = t),
                                                    this.maybeNotify();
                                            },
                                        ),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(
                                            this,
                                            (t, e) => {
                                                (this.scrollAdjustments = 0),
                                                    (this.scrollDirection = e
                                                        ? this.getScrollOffset() <
                                                          t
                                                            ? "forward"
                                                            : "backward"
                                                        : null),
                                                    (this.scrollOffset = t),
                                                    (this.isScrolling = e),
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
                        (this.getFurthestMeasurement = (t, e) => {
                            let i = new Map(),
                                r = new Map();
                            for (let n = e - 1; n >= 0; n--) {
                                let e = t[n];
                                if (i.has(e.lane)) continue;
                                let s = r.get(e.lane);
                                if (
                                    (null == s || e.end > s.end
                                        ? r.set(e.lane, e)
                                        : e.end < s.end && i.set(e.lane, !0),
                                    i.size === this.options.lanes)
                                )
                                    break;
                            }
                            return r.size === this.options.lanes
                                ? Array.from(r.values()).sort((t, e) =>
                                      t.end === e.end
                                          ? t.index - e.index
                                          : t.end - e.end,
                                  )[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = s(
                            () => [
                                this.options.count,
                                this.options.paddingStart,
                                this.options.scrollMargin,
                                this.options.getItemKey,
                                this.options.enabled,
                            ],
                            (t, e, i, r, n) => (
                                (this.pendingMeasuredCacheIndexes = []),
                                {
                                    count: t,
                                    paddingStart: e,
                                    scrollMargin: i,
                                    getItemKey: r,
                                    enabled: n,
                                }
                            ),
                            { key: !1 },
                        )),
                        (this.getMeasurements = s(
                            () => [
                                this.getMeasurementOptions(),
                                this.itemSizeCache,
                            ],
                            (
                                {
                                    count: t,
                                    paddingStart: e,
                                    scrollMargin: i,
                                    getItemKey: r,
                                    enabled: n,
                                },
                                s,
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
                                    this.measurementsCache.forEach((t) => {
                                        this.itemSizeCache.set(t.key, t.size);
                                    }));
                                let a =
                                    this.pendingMeasuredCacheIndexes.length > 0
                                        ? Math.min(
                                              ...this
                                                  .pendingMeasuredCacheIndexes,
                                          )
                                        : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, a);
                                for (let n = a; n < t; n++) {
                                    let t = r(n),
                                        a =
                                            1 === this.options.lanes
                                                ? o[n - 1]
                                                : this.getFurthestMeasurement(
                                                      o,
                                                      n,
                                                  ),
                                        l = a
                                            ? a.end + this.options.gap
                                            : e + i,
                                        u = s.get(t),
                                        h =
                                            "number" == typeof u
                                                ? u
                                                : this.options.estimateSize(n),
                                        d = l + h,
                                        c = a ? a.lane : n % this.options.lanes;
                                    o[n] = {
                                        index: n,
                                        start: l,
                                        size: h,
                                        end: d,
                                        key: t,
                                        lane: c,
                                    };
                                }
                                return (this.measurementsCache = o), o;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = s(
                            () => [
                                this.getMeasurements(),
                                this.getSize(),
                                this.getScrollOffset(),
                                this.options.lanes,
                            ],
                            (t, e, i, r) =>
                                (this.range =
                                    t.length > 0 && e > 0
                                        ? (function ({
                                              measurements: t,
                                              outerSize: e,
                                              scrollOffset: i,
                                              lanes: r,
                                          }) {
                                              let n = t.length - 1;
                                              if (t.length <= r)
                                                  return {
                                                      startIndex: 0,
                                                      endIndex: n,
                                                  };
                                              let s = w(
                                                      0,
                                                      n,
                                                      (e) => t[e].start,
                                                      i,
                                                  ),
                                                  a = s;
                                              if (1 === r)
                                                  for (
                                                      ;
                                                      a < n && t[a].end < i + e;

                                                  )
                                                      a++;
                                              else if (r > 1) {
                                                  let o = Array(r).fill(0);
                                                  for (
                                                      ;
                                                      a < n &&
                                                      o.some((t) => t < i + e);

                                                  ) {
                                                      let e = t[a];
                                                      (o[e.lane] = e.end), a++;
                                                  }
                                                  let l = Array(r).fill(i + e);
                                                  for (
                                                      ;
                                                      s >= 0 &&
                                                      l.some((t) => t >= i);

                                                  ) {
                                                      let e = t[s];
                                                      (l[e.lane] = e.start),
                                                          s--;
                                                  }
                                                  (s = Math.max(
                                                      0,
                                                      s - (s % r),
                                                  )),
                                                      (a = Math.min(
                                                          n,
                                                          a + (r - 1 - (a % r)),
                                                      ));
                                              }
                                              return {
                                                  startIndex: s,
                                                  endIndex: a,
                                              };
                                          })({
                                              measurements: t,
                                              outerSize: e,
                                              scrollOffset: i,
                                              lanes: r,
                                          })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = s(
                            () => {
                                let t = null,
                                    e = null,
                                    i = this.calculateRange();
                                return (
                                    i && ((t = i.startIndex), (e = i.endIndex)),
                                    this.maybeNotify.updateDeps([
                                        this.isScrolling,
                                        t,
                                        e,
                                    ]),
                                    [
                                        this.options.rangeExtractor,
                                        this.options.overscan,
                                        this.options.count,
                                        t,
                                        e,
                                    ]
                                );
                            },
                            (t, e, i, r, n) =>
                                null === r || null === n
                                    ? []
                                    : t({
                                          startIndex: r,
                                          endIndex: n,
                                          overscan: e,
                                          count: i,
                                      }),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (t) => {
                            let e = this.options.indexAttribute,
                                i = t.getAttribute(e);
                            return i
                                ? parseInt(i, 10)
                                : (console.warn(
                                      `Missing attribute name '${e}={index}' on measured element.`,
                                  ),
                                  -1);
                        }),
                        (this._measureElement = (t, e) => {
                            let i = this.indexFromElement(t),
                                r = this.measurementsCache[i];
                            if (!r) return;
                            let n = r.key,
                                s = this.elementsCache.get(n);
                            s !== t &&
                                (s && this.observer.unobserve(s),
                                this.observer.observe(t),
                                this.elementsCache.set(n, t)),
                                t.isConnected &&
                                    this.resizeItem(
                                        i,
                                        this.options.measureElement(t, e, this),
                                    );
                        }),
                        (this.resizeItem = (t, e) => {
                            let i = this.measurementsCache[t];
                            if (!i) return;
                            let r =
                                e - (this.itemSizeCache.get(i.key) ?? i.size);
                            0 !== r &&
                                ((void 0 !==
                                this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                                          i,
                                          r,
                                          this,
                                      )
                                    : i.start <
                                      this.getScrollOffset() +
                                          this.scrollAdjustments) &&
                                    this._scrollToOffset(
                                        this.getScrollOffset(),
                                        {
                                            adjustments:
                                                (this.scrollAdjustments += r),
                                            behavior: void 0,
                                        },
                                    ),
                                this.pendingMeasuredCacheIndexes.push(i.index),
                                (this.itemSizeCache = new Map(
                                    this.itemSizeCache.set(i.key, e),
                                )),
                                this.notify(!1));
                        }),
                        (this.measureElement = (t) => {
                            if (!t)
                                return void this.elementsCache.forEach(
                                    (t, e) => {
                                        t.isConnected ||
                                            (this.observer.unobserve(t),
                                            this.elementsCache.delete(e));
                                    },
                                );
                            this._measureElement(t, void 0);
                        }),
                        (this.getVirtualItems = s(
                            () => [
                                this.getVirtualIndexes(),
                                this.getMeasurements(),
                            ],
                            (t, e) => {
                                let i = [];
                                for (let r = 0, n = t.length; r < n; r++) {
                                    let n = e[t[r]];
                                    i.push(n);
                                }
                                return i;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (t) => {
                            let e = this.getMeasurements();
                            if (0 !== e.length)
                                return a(
                                    e[
                                        w(
                                            0,
                                            e.length - 1,
                                            (t) => a(e[t]).start,
                                            t,
                                        )
                                    ],
                                );
                        }),
                        (this.getOffsetForAlignment = (t, e, i = 0) => {
                            let r = this.getSize(),
                                n = this.getScrollOffset();
                            return (
                                "auto" === e &&
                                    (e = t >= n + r ? "end" : "start"),
                                "center" === e
                                    ? (t += (i - r) / 2)
                                    : "end" === e && (t -= r),
                                Math.max(
                                    Math.min(this.getTotalSize() - r, t),
                                    0,
                                )
                            );
                        }),
                        (this.getOffsetForIndex = (t, e = "auto") => {
                            t = Math.max(
                                0,
                                Math.min(t, this.options.count - 1),
                            );
                            let i = this.measurementsCache[t];
                            if (!i) return;
                            let r = this.getSize(),
                                n = this.getScrollOffset();
                            if ("auto" === e)
                                if (
                                    i.end >=
                                    n + r - this.options.scrollPaddingEnd
                                )
                                    e = "end";
                                else {
                                    if (
                                        !(
                                            i.start <=
                                            n + this.options.scrollPaddingStart
                                        )
                                    )
                                        return [n, e];
                                    e = "start";
                                }
                            let s =
                                "end" === e
                                    ? i.end + this.options.scrollPaddingEnd
                                    : i.start - this.options.scrollPaddingStart;
                            return [
                                this.getOffsetForAlignment(s, e, i.size),
                                e,
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
                            t,
                            { align: e = "start", behavior: i } = {},
                        ) => {
                            this.cancelScrollToIndex(),
                                "smooth" === i &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    ),
                                this._scrollToOffset(
                                    this.getOffsetForAlignment(t, e),
                                    { adjustments: void 0, behavior: i },
                                );
                        }),
                        (this.scrollToIndex = (
                            t,
                            { align: e = "auto", behavior: i } = {},
                        ) => {
                            (t = Math.max(
                                0,
                                Math.min(t, this.options.count - 1),
                            )),
                                this.cancelScrollToIndex(),
                                "smooth" === i &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    );
                            let r = this.getOffsetForIndex(t, e);
                            if (!r) return;
                            let [n, s] = r;
                            this._scrollToOffset(n, {
                                adjustments: void 0,
                                behavior: i,
                            }),
                                "smooth" !== i &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId =
                                        this.targetWindow.setTimeout(() => {
                                            if (
                                                ((this.scrollToIndexTimeoutId =
                                                    null),
                                                this.elementsCache.has(
                                                    this.options.getItemKey(t),
                                                ))
                                            ) {
                                                let e = this.getOffsetForIndex(
                                                    t,
                                                    s,
                                                );
                                                if (!e) return;
                                                let [r] = e;
                                                1 >=
                                                    Math.abs(
                                                        r -
                                                            this.getScrollOffset(),
                                                    ) ||
                                                    this.scrollToIndex(t, {
                                                        align: s,
                                                        behavior: i,
                                                    });
                                            } else
                                                this.scrollToIndex(t, {
                                                    align: s,
                                                    behavior: i,
                                                });
                                        }));
                        }),
                        (this.scrollBy = (t, { behavior: e } = {}) => {
                            this.cancelScrollToIndex(),
                                "smooth" === e &&
                                    this.isDynamicMode() &&
                                    console.warn(
                                        "The `smooth` scroll behavior is not fully supported with dynamic size.",
                                    ),
                                this._scrollToOffset(
                                    this.getScrollOffset() + t,
                                    { adjustments: void 0, behavior: e },
                                );
                        }),
                        (this.getTotalSize = () => {
                            var t;
                            let e,
                                i = this.getMeasurements();
                            if (0 === i.length) e = this.options.paddingStart;
                            else if (1 === this.options.lanes)
                                e =
                                    (null == (t = i[i.length - 1])
                                        ? void 0
                                        : t.end) ?? 0;
                            else {
                                let t = Array(this.options.lanes).fill(null),
                                    r = i.length - 1;
                                for (; r >= 0 && t.some((t) => null === t); ) {
                                    let e = i[r];
                                    null === t[e.lane] && (t[e.lane] = e.end),
                                        r--;
                                }
                                e = Math.max(...t.filter((t) => null !== t));
                            }
                            return Math.max(
                                e -
                                    this.options.scrollMargin +
                                    this.options.paddingEnd,
                                0,
                            );
                        }),
                        (this._scrollToOffset = (
                            t,
                            { adjustments: e, behavior: i },
                        ) => {
                            this.options.scrollToFn(
                                t,
                                { behavior: i, adjustments: e },
                                this,
                            );
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(t);
                }
            }
            let w = (t, e, i, r) => {
                    for (; t <= e; ) {
                        let n = ((t + e) / 2) | 0,
                            s = i(n);
                        if (s < r) t = n + 1;
                        else {
                            if (!(s > r)) return n;
                            e = n - 1;
                        }
                    }
                    return t > 0 ? t - 1 : 0;
                },
                T =
                    "undefined" != typeof document
                        ? r.useLayoutEffect
                        : r.useEffect;
            function x(t) {
                let e = r.useReducer(() => ({}), {})[1],
                    i = {
                        ...t,
                        onChange: (i, r) => {
                            var s;
                            r ? (0, n.flushSync)(e) : e(),
                                null == (s = t.onChange) || s.call(t, i, r);
                        },
                    },
                    [s] = r.useState(() => new S(i));
                return (
                    s.setOptions(i),
                    T(() => s._didMount(), []),
                    T(() => s._willUpdate()),
                    s
                );
            }
            function E(t) {
                return x({
                    observeElementRect: d,
                    observeElementOffset: g,
                    scrollToFn: b,
                    ...t,
                });
            }
            function I(t) {
                return x({
                    getScrollElement: () =>
                        "undefined" != typeof document ? window : null,
                    observeElementRect: f,
                    observeElementOffset: p,
                    scrollToFn: y,
                    initialOffset: () =>
                        "undefined" != typeof document ? window.scrollY : 0,
                    ...t,
                });
            }
        },
        29371: (t, e, i) => {
            "use strict";
            i.d(e, { FN: () => n, gj: () => r }), i(27224);
            let r = (t) => {
                    let {
                        containerNodeRect: e,
                        draggingNodeRect: i,
                        transform: r,
                    } = t;
                    return i && e
                        ? (function (t, e, i) {
                              let r = { ...t };
                              return (
                                  e.top + t.y <= i.top
                                      ? (r.y = i.top - e.top)
                                      : e.bottom + t.y >= i.top + i.height &&
                                        (r.y = i.top + i.height - e.bottom),
                                  e.left + t.x <= i.left
                                      ? (r.x = i.left - e.left)
                                      : e.right + t.x >= i.left + i.width &&
                                        (r.x = i.left + i.width - e.right),
                                  r
                              );
                          })(r, i, e)
                        : r;
                },
                n = (t) => {
                    let { transform: e } = t;
                    return { ...e, x: 0 };
                };
        },
        34340: (t, e, i) => {
            "use strict";
            i.d(e, { y: () => a });
            let r =
                !(function (t, e = !1) {
                    if (!t) return !1;
                    let i = e
                        ? Function.prototype.toString.call(t)
                        : t.toString
                          ? t.toString()
                          : "";
                    return (
                        /\[native code\]/.test(i) ||
                        /\/\* source code not available \*\//.test(i)
                    );
                })(Math.random) || Math.random() === Math.random();
            var n = i(16811);
            let s = ((0, n.x3)() * (0, n.lh)()) % 0x7fffffff,
                a = r
                    ? function () {
                          return (
                              ((s = (16807 * s) % 0x7fffffff) - 1) / 0x7ffffffe
                          );
                      }
                    : function () {
                          return Math.random();
                      };
        },
        41660: (t, e, i) => {
            "use strict";
            i.d(e, { t: () => s });
            var r = (function () {
                    var t = function (e, i) {
                        return (t =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i,
                                    ) && (t[i] = e[i]);
                            })(e, i);
                    };
                    return function (e, i) {
                        if ("function" != typeof i && null !== i)
                            throw TypeError(
                                "Class extends value " +
                                    String(i) +
                                    " is not a constructor or null",
                            );
                        function r() {
                            this.constructor = e;
                        }
                        t(e, i),
                            (e.prototype =
                                null === i
                                    ? Object.create(i)
                                    : ((r.prototype = i.prototype), new r()));
                    };
                })(),
                n = function (t, e) {
                    var i = {};
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                            0 > e.indexOf(r) &&
                            (i[r] = t[r]);
                    if (
                        null != t &&
                        "function" == typeof Object.getOwnPropertySymbols
                    )
                        for (
                            var n = 0, r = Object.getOwnPropertySymbols(t);
                            n < r.length;
                            n++
                        )
                            0 > e.indexOf(r[n]) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    t,
                                    r[n],
                                ) &&
                                (i[r[n]] = t[r[n]]);
                    return i;
                },
                s = (function (t) {
                    function e(i, r) {
                        void 0 === r && (r = {});
                        var s = this,
                            a = r.code,
                            o = r.data,
                            l = n(r, ["code", "data"]),
                            u = i || "Internal error";
                        return (
                            Object.defineProperty(
                                (s = t.call(this, u, l) || this),
                                "name",
                                {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: "BaseException",
                                },
                            ),
                            Object.defineProperty(s, "message", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(s, "code", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(s, "data", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            Object.defineProperty(s, "stack", {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                            (s.message = u),
                            (s.code = void 0 === a ? "E_INTERNAL" : a),
                            (s.data = void 0 === o ? {} : o),
                            (s.stack = Error(u).stack),
                            Object.setPrototypeOf(s, e.prototype),
                            s
                        );
                    }
                    return r(e, t), e;
                })(Error);
        },
        43576: (t, e, i) => {
            "use strict";
            i.d(e, { A: () => z });
            var r = i(7144),
                n = i(86856),
                s = i(66268),
                a = i(37993),
                o = i(79909),
                l = i(90103),
                u = i(72411);
            function h(t, e) {
                return Object.keys(t).reduce(function (i, n) {
                    return (i[n] = (0, r.__assign)({ timeZone: e }, t[n])), i;
                }, {});
            }
            function d(t, e) {
                return Object.keys(
                    (0, r.__assign)((0, r.__assign)({}, t), e),
                ).reduce(function (i, n) {
                    return (
                        (i[n] = (0, r.__assign)(
                            (0, r.__assign)({}, t[n] || {}),
                            e[n] || {},
                        )),
                        i
                    );
                }, {});
            }
            function c(t, e) {
                if (!e) return t;
                var i = l.S.formats;
                return (0, r.__assign)(
                    (0, r.__assign)((0, r.__assign)({}, i), t),
                    {
                        date: d(h(i.date, e), h(t.date || {}, e)),
                        time: d(h(i.time, e), h(t.time || {}, e)),
                    },
                );
            }
            var f = function (t, e, i, s, a) {
                    var l = t.locale,
                        h = t.formats,
                        d = t.messages,
                        f = t.defaultLocale,
                        m = t.defaultFormats,
                        g = t.fallbackOnEmptyString,
                        p = t.onError,
                        v = t.timeZone,
                        y = t.defaultRichTextElements;
                    void 0 === i && (i = { id: "" });
                    var b = i.id,
                        S = i.defaultMessage;
                    (0, n.V1)(
                        !!b,
                        "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
                    );
                    var w = String(b),
                        T =
                            d &&
                            Object.prototype.hasOwnProperty.call(d, w) &&
                            d[w];
                    if (
                        Array.isArray(T) &&
                        1 === T.length &&
                        T[0].type === o.TYPE.literal
                    )
                        return T[0].value;
                    if (!s && T && "string" == typeof T && !y)
                        return T.replace(/'\{(.*?)\}'/gi, "{$1}");
                    if (
                        ((s = (0, r.__assign)((0, r.__assign)({}, y), s || {})),
                        (h = c(h, v)),
                        (m = c(m, v)),
                        !T)
                    ) {
                        if (!1 === g && "" === T) return T;
                        if (
                            ((!S ||
                                (l && l.toLowerCase() !== f.toLowerCase())) &&
                                p(new u.sb(i, l)),
                            S)
                        )
                            try {
                                var x = e.getMessageFormat(S, f, m, a);
                                return x.format(s);
                            } catch (t) {
                                return (
                                    p(
                                        new u.Ho(
                                            'Error formatting default message for: "'.concat(
                                                w,
                                                '", rendering default message verbatim',
                                            ),
                                            l,
                                            i,
                                            t,
                                        ),
                                    ),
                                    "string" == typeof S ? S : w
                                );
                            }
                        return w;
                    }
                    try {
                        var x = e.getMessageFormat(
                            T,
                            l,
                            h,
                            (0, r.__assign)({ formatters: e }, a || {}),
                        );
                        return x.format(s);
                    } catch (t) {
                        p(
                            new u.Ho(
                                'Error formatting message: "'
                                    .concat(w, '", using ')
                                    .concat(
                                        S ? "default message" : "id",
                                        " as fallback.",
                                    ),
                                l,
                                i,
                                t,
                            ),
                        );
                    }
                    if (S)
                        try {
                            var x = e.getMessageFormat(S, f, m, a);
                            return x.format(s);
                        } catch (t) {
                            p(
                                new u.Ho(
                                    'Error formatting the default message for: "'.concat(
                                        w,
                                        '", rendering message verbatim',
                                    ),
                                    l,
                                    i,
                                    t,
                                ),
                            );
                        }
                    return "string" == typeof T
                        ? T
                        : "string" == typeof S
                          ? S
                          : w;
                },
                m = [
                    "formatMatcher",
                    "timeZone",
                    "hour12",
                    "weekday",
                    "era",
                    "year",
                    "month",
                    "day",
                    "hour",
                    "minute",
                    "second",
                    "timeZoneName",
                    "hourCycle",
                    "dateStyle",
                    "timeStyle",
                    "calendar",
                    "numberingSystem",
                    "fractionalSecondDigits",
                ];
            function g(t, e, i, s) {
                var a = t.locale,
                    o = t.formats,
                    l = t.onError,
                    u = t.timeZone;
                void 0 === s && (s = {});
                var h = s.format,
                    d = (0, r.__assign)(
                        (0, r.__assign)({}, u && { timeZone: u }),
                        h && (0, n.F3)(o, e, h, l),
                    ),
                    c = (0, n.J9)(s, m, d);
                return (
                    "time" !== e ||
                        c.hour ||
                        c.minute ||
                        c.second ||
                        c.timeStyle ||
                        c.dateStyle ||
                        (c = (0, r.__assign)((0, r.__assign)({}, c), {
                            hour: "numeric",
                            minute: "numeric",
                        })),
                    i(a, c)
                );
            }
            function p(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = i[0],
                    s = i[1],
                    a = "string" == typeof n ? new Date(n || 0) : n;
                try {
                    return g(t, "date", e, void 0 === s ? {} : s).format(a);
                } catch (e) {
                    t.onError(new u.pg("Error formatting date.", t.locale, e));
                }
                return String(a);
            }
            function v(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = i[0],
                    s = i[1],
                    a = "string" == typeof n ? new Date(n || 0) : n;
                try {
                    return g(t, "time", e, void 0 === s ? {} : s).format(a);
                } catch (e) {
                    t.onError(new u.pg("Error formatting time.", t.locale, e));
                }
                return String(a);
            }
            function y(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = i[0],
                    s = i[1],
                    a = i[2],
                    o = "string" == typeof n ? new Date(n || 0) : n,
                    l = "string" == typeof s ? new Date(s || 0) : s;
                try {
                    return g(
                        t,
                        "dateTimeRange",
                        e,
                        void 0 === a ? {} : a,
                    ).formatRange(o, l);
                } catch (e) {
                    t.onError(
                        new u.pg(
                            "Error formatting date time range.",
                            t.locale,
                            e,
                        ),
                    );
                }
                return String(o);
            }
            function b(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = i[0],
                    s = i[1],
                    a = "string" == typeof n ? new Date(n || 0) : n;
                try {
                    return g(t, "date", e, void 0 === s ? {} : s).formatToParts(
                        a,
                    );
                } catch (e) {
                    t.onError(new u.pg("Error formatting date.", t.locale, e));
                }
                return [];
            }
            function S(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = i[0],
                    s = i[1],
                    a = "string" == typeof n ? new Date(n || 0) : n;
                try {
                    return g(t, "time", e, void 0 === s ? {} : s).formatToParts(
                        a,
                    );
                } catch (e) {
                    t.onError(new u.pg("Error formatting time.", t.locale, e));
                }
                return [];
            }
            var w = i(3898),
                T = ["style", "type", "fallback", "languageDisplay"];
            function x(t, e, i, r) {
                var s = t.locale,
                    a = t.onError;
                Intl.DisplayNames ||
                    a(
                        new w.IF(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            w.O4.MISSING_INTL_API,
                        ),
                    );
                var o = (0, n.J9)(r, T);
                try {
                    return e(s, o).of(i);
                } catch (t) {
                    a(new u.pg("Error formatting display name.", s, t));
                }
            }
            var E = ["type", "style"],
                I = Date.now();
            function F(t, e, i, r) {
                void 0 === r && (r = {});
                var n = O(t, e, i, r).reduce(function (t, e) {
                    var i = e.value;
                    return (
                        "string" != typeof i
                            ? t.push(i)
                            : "string" == typeof t[t.length - 1]
                              ? (t[t.length - 1] += i)
                              : t.push(i),
                        t
                    );
                }, []);
                return 1 === n.length ? n[0] : 0 === n.length ? "" : n;
            }
            function O(t, e, i, s) {
                var a = t.locale,
                    o = t.onError;
                void 0 === s && (s = {}),
                    Intl.ListFormat ||
                        o(
                            new w.IF(
                                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                                w.O4.MISSING_INTL_API,
                            ),
                        );
                var l = (0, n.J9)(s, E);
                try {
                    var h = {},
                        d = i.map(function (t, e) {
                            if ("object" == typeof t) {
                                var i = ""
                                    .concat(I, "_")
                                    .concat(e, "_")
                                    .concat(I);
                                return (h[i] = t), i;
                            }
                            return String(t);
                        });
                    return e(a, l)
                        .formatToParts(d)
                        .map(function (t) {
                            return "literal" === t.type
                                ? t
                                : (0, r.__assign)((0, r.__assign)({}, t), {
                                      value: h[t.value] || t.value,
                                  });
                        });
                } catch (t) {
                    o(new u.pg("Error formatting list.", a, t));
                }
                return i;
            }
            var P = [
                "style",
                "currency",
                "unit",
                "unitDisplay",
                "useGrouping",
                "minimumIntegerDigits",
                "minimumFractionDigits",
                "maximumFractionDigits",
                "minimumSignificantDigits",
                "maximumSignificantDigits",
                "compactDisplay",
                "currencyDisplay",
                "currencySign",
                "notation",
                "signDisplay",
                "unit",
                "unitDisplay",
                "numberingSystem",
                "trailingZeroDisplay",
                "roundingPriority",
                "roundingIncrement",
                "roundingMode",
            ];
            function M(t, e, i) {
                var r = t.locale,
                    s = t.formats,
                    a = t.onError;
                void 0 === i && (i = {});
                var o = i.format,
                    l = (o && (0, n.F3)(s, "number", o, a)) || {};
                return e(r, (0, n.J9)(i, P, l));
            }
            function k(t, e, i, r) {
                void 0 === r && (r = {});
                try {
                    return M(t, e, r).format(i);
                } catch (e) {
                    t.onError(
                        new u.pg("Error formatting number.", t.locale, e),
                    );
                }
                return String(i);
            }
            function D(t, e, i, r) {
                void 0 === r && (r = {});
                try {
                    return M(t, e, r).formatToParts(i);
                } catch (e) {
                    t.onError(
                        new u.pg("Error formatting number.", t.locale, e),
                    );
                }
                return [];
            }
            var C = ["type"];
            function _(t, e, i, r) {
                var s = t.locale,
                    a = t.onError;
                void 0 === r && (r = {}),
                    Intl.PluralRules ||
                        a(
                            new w.IF(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                w.O4.MISSING_INTL_API,
                            ),
                        );
                var o = (0, n.J9)(r, C);
                try {
                    return e(s, o).select(i);
                } catch (t) {
                    a(new u.pg("Error formatting plural.", s, t));
                }
                return "other";
            }
            var N = ["numeric", "style"];
            function V(t, e, i, r, s) {
                void 0 === s && (s = {}),
                    r || (r = "second"),
                    Intl.RelativeTimeFormat ||
                        t.onError(
                            new w.IF(
                                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                                w.O4.MISSING_INTL_API,
                            ),
                        );
                try {
                    var a, o, l, h, d, c;
                    return ((a = s),
                    (o = t.locale),
                    (l = t.formats),
                    (h = t.onError),
                    void 0 === a && (a = {}),
                    (c =
                        (!!(d = a.format) && (0, n.F3)(l, "relative", d, h)) ||
                        {}),
                    e(o, (0, n.J9)(a, N, c))).format(i, r);
                } catch (e) {
                    t.onError(
                        new u.pg(
                            "Error formatting relative time.",
                            t.locale,
                            e,
                        ),
                    );
                }
                return String(i);
            }
            var A = i(12759);
            function L(t) {
                return t
                    ? Object.keys(t).reduce(function (e, i) {
                          var r = t[i];
                          return (e[i] = (0, A.RK)(r) ? (0, a.yU)(r) : r), e;
                      }, {})
                    : t;
            }
            var j = function (t, e, i, n) {
                    for (var s = [], o = 4; o < arguments.length; o++)
                        s[o - 4] = arguments[o];
                    var l = L(n),
                        u = f.apply(
                            void 0,
                            (0, r.__spreadArray)([t, e, i, l], s, !1),
                        );
                    return Array.isArray(u) ? (0, a.SP)(u) : u;
                },
                W = function (t, e) {
                    var i,
                        s,
                        o,
                        l,
                        h,
                        d,
                        c,
                        m = t.defaultRichTextElements,
                        g = (0, r.__rest)(t, ["defaultRichTextElements"]),
                        w = L(m),
                        T =
                            ((i = (0, r.__assign)(
                                (0, r.__assign)((0, r.__assign)({}, a.JF), g),
                                { defaultRichTextElements: w },
                            )),
                            (s = (0, n.GT)(e)),
                            (l = (o = (0, r.__assign)(
                                (0, r.__assign)({}, n.JF),
                                i,
                            )).locale),
                            (h = o.defaultLocale),
                            (d = o.onError),
                            l
                                ? !Intl.NumberFormat.supportedLocalesOf(l)
                                      .length && d
                                    ? d(
                                          new u.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(
                                                      l,
                                                      '" in Intl.NumberFormat. Using default locale: "',
                                                  )
                                                  .concat(
                                                      h,
                                                      '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details',
                                                  ),
                                          ),
                                      )
                                    : !Intl.DateTimeFormat.supportedLocalesOf(l)
                                          .length &&
                                      d &&
                                      d(
                                          new u.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(
                                                      l,
                                                      '" in Intl.DateTimeFormat. Using default locale: "',
                                                  )
                                                  .concat(
                                                      h,
                                                      '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details',
                                                  ),
                                          ),
                                      )
                                : (d &&
                                      d(
                                          new u.uo(
                                              '"locale" was not configured, using "'.concat(
                                                  h,
                                                  '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details',
                                              ),
                                          ),
                                      ),
                                  (o.locale = o.defaultLocale || "en")),
                            o.onWarn &&
                                o.defaultRichTextElements &&
                                "string" ==
                                    typeof (c = o.messages || {})[
                                        Object.keys(c)[0]
                                    ] &&
                                o.onWarn(
                                    '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution',
                                ),
                            (0, r.__assign)((0, r.__assign)({}, o), {
                                formatters: s,
                                formatNumber: k.bind(
                                    null,
                                    o,
                                    s.getNumberFormat,
                                ),
                                formatNumberToParts: D.bind(
                                    null,
                                    o,
                                    s.getNumberFormat,
                                ),
                                formatRelativeTime: V.bind(
                                    null,
                                    o,
                                    s.getRelativeTimeFormat,
                                ),
                                formatDate: p.bind(
                                    null,
                                    o,
                                    s.getDateTimeFormat,
                                ),
                                formatDateToParts: b.bind(
                                    null,
                                    o,
                                    s.getDateTimeFormat,
                                ),
                                formatTime: v.bind(
                                    null,
                                    o,
                                    s.getDateTimeFormat,
                                ),
                                formatDateTimeRange: y.bind(
                                    null,
                                    o,
                                    s.getDateTimeFormat,
                                ),
                                formatTimeToParts: S.bind(
                                    null,
                                    o,
                                    s.getDateTimeFormat,
                                ),
                                formatPlural: _.bind(null, o, s.getPluralRules),
                                formatMessage: f.bind(null, o, s),
                                $t: f.bind(null, o, s),
                                formatList: F.bind(null, o, s.getListFormat),
                                formatListToParts: O.bind(
                                    null,
                                    o,
                                    s.getListFormat,
                                ),
                                formatDisplayName: x.bind(
                                    null,
                                    o,
                                    s.getDisplayNames,
                                ),
                            })),
                        E = {
                            locale: T.locale,
                            timeZone: T.timeZone,
                            fallbackOnEmptyString: T.fallbackOnEmptyString,
                            formats: T.formats,
                            defaultLocale: T.defaultLocale,
                            defaultFormats: T.defaultFormats,
                            messages: T.messages,
                            onError: T.onError,
                            defaultRichTextElements: w,
                        };
                    return (0, r.__assign)((0, r.__assign)({}, T), {
                        formatMessage: j.bind(null, E, T.formatters),
                        $t: j.bind(null, E, T.formatters),
                    });
                },
                R = i(26519);
            function B(t) {
                return {
                    locale: t.locale,
                    timeZone: t.timeZone,
                    fallbackOnEmptyString: t.fallbackOnEmptyString,
                    formats: t.formats,
                    textComponent: t.textComponent,
                    messages: t.messages,
                    defaultLocale: t.defaultLocale,
                    defaultFormats: t.defaultFormats,
                    onError: t.onError,
                    onWarn: t.onWarn,
                    wrapRichTextChunksInFragment:
                        t.wrapRichTextChunksInFragment,
                    defaultRichTextElements: t.defaultRichTextElements,
                };
            }
            let z = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (e.cache = (0, n.MT)()),
                        (e.state = {
                            cache: e.cache,
                            intl: W(B(e.props), e.cache),
                            prevConfig: B(e.props),
                        }),
                        e
                    );
                }
                return (
                    (0, r.__extends)(e, t),
                    (e.getDerivedStateFromProps = function (t, e) {
                        var i = e.prevConfig,
                            r = e.cache,
                            n = B(t);
                        return (0, a.bN)(i, n)
                            ? null
                            : { intl: W(n, r), prevConfig: n };
                    }),
                    (e.prototype.render = function () {
                        return (
                            (0, a.HM)(this.state.intl),
                            s.createElement(
                                R.Kq,
                                { value: this.state.intl },
                                this.props.children,
                            )
                        );
                    }),
                    (e.displayName = "IntlProvider"),
                    (e.defaultProps = a.JF),
                    e
                );
            })(s.PureComponent);
        },
        74375: (t, e, i) => {
            "use strict";
            i.d(e, { default: () => n.a });
            var r = i(5884),
                n = i.n(r);
        },
        84511: (t) => {
            function e() {}
            (e.prototype = {
                on: function (t, e, i) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this;
                },
                once: function (t, e, i) {
                    var r = this;
                    function n() {
                        r.off(t, n), e.apply(i, arguments);
                    }
                    return (n._ = e), this.on(t, n, i);
                },
                emit: function (t) {
                    for (
                        var e = [].slice.call(arguments, 1),
                            i = ((this.e || (this.e = {}))[t] || []).slice(),
                            r = 0,
                            n = i.length;
                        r < n;
                        r++
                    )
                        i[r].fn.apply(i[r].ctx, e);
                    return this;
                },
                off: function (t, e) {
                    var i = this.e || (this.e = {}),
                        r = i[t],
                        n = [];
                    if (r && e)
                        for (var s = 0, a = r.length; s < a; s++)
                            r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
                    return n.length ? (i[t] = n) : delete i[t], this;
                },
            }),
                (t.exports = e),
                (t.exports.TinyEmitter = e);
        },
        90108: (t, e, i) => {
            "use strict";
            i.d(e, { A: () => c });
            var r = i(77776),
                n = i(92495),
                s = i(34994),
                a = i(66268),
                o = i(36861);
            function l(t, e) {
                var i = Object.create(null);
                return (
                    t &&
                        a.Children.map(t, function (t) {
                            return t;
                        }).forEach(function (t) {
                            i[t.key] = e && (0, a.isValidElement)(t) ? e(t) : t;
                        }),
                    i
                );
            }
            function u(t, e, i) {
                return null != i[e] ? i[e] : t.props[e];
            }
            var h =
                    Object.values ||
                    function (t) {
                        return Object.keys(t).map(function (e) {
                            return t[e];
                        });
                    },
                d = (function (t) {
                    function e(e, i) {
                        var r = t.call(this, e, i) || this,
                            n = r.handleExited.bind(
                                (function (t) {
                                    if (void 0 === t)
                                        throw ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t;
                                })(r),
                            );
                        return (
                            (r.state = {
                                contextValue: { isMounting: !0 },
                                handleExited: n,
                                firstRender: !0,
                            }),
                            r
                        );
                    }
                    (0, s.A)(e, t);
                    var i = e.prototype;
                    return (
                        (i.componentDidMount = function () {
                            (this.mounted = !0),
                                this.setState({
                                    contextValue: { isMounting: !1 },
                                });
                        }),
                        (i.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (e.getDerivedStateFromProps = function (t, e) {
                            var i,
                                r,
                                n = e.children,
                                s = e.handleExited;
                            return {
                                children: e.firstRender
                                    ? l(t.children, function (e) {
                                          return (0, a.cloneElement)(e, {
                                              onExited: s.bind(null, e),
                                              in: !0,
                                              appear: u(e, "appear", t),
                                              enter: u(e, "enter", t),
                                              exit: u(e, "exit", t),
                                          });
                                      })
                                    : (Object.keys(
                                          (r = (function (t, e) {
                                              function i(i) {
                                                  return i in e ? e[i] : t[i];
                                              }
                                              (t = t || {}), (e = e || {});
                                              var r,
                                                  n = Object.create(null),
                                                  s = [];
                                              for (var a in t)
                                                  a in e
                                                      ? s.length &&
                                                        ((n[a] = s), (s = []))
                                                      : s.push(a);
                                              var o = {};
                                              for (var l in e) {
                                                  if (n[l])
                                                      for (
                                                          r = 0;
                                                          r < n[l].length;
                                                          r++
                                                      ) {
                                                          var u = n[l][r];
                                                          o[n[l][r]] = i(u);
                                                      }
                                                  o[l] = i(l);
                                              }
                                              for (r = 0; r < s.length; r++)
                                                  o[s[r]] = i(s[r]);
                                              return o;
                                          })(n, (i = l(t.children)))),
                                      ).forEach(function (e) {
                                          var o = r[e];
                                          if ((0, a.isValidElement)(o)) {
                                              var l = e in n,
                                                  h = e in i,
                                                  d = n[e],
                                                  c =
                                                      (0, a.isValidElement)(
                                                          d,
                                                      ) && !d.props.in;
                                              h && (!l || c)
                                                  ? (r[e] = (0, a.cloneElement)(
                                                        o,
                                                        {
                                                            onExited: s.bind(
                                                                null,
                                                                o,
                                                            ),
                                                            in: !0,
                                                            exit: u(
                                                                o,
                                                                "exit",
                                                                t,
                                                            ),
                                                            enter: u(
                                                                o,
                                                                "enter",
                                                                t,
                                                            ),
                                                        },
                                                    ))
                                                  : h || !l || c
                                                    ? h &&
                                                      l &&
                                                      (0, a.isValidElement)(
                                                          d,
                                                      ) &&
                                                      (r[e] = (0,
                                                      a.cloneElement)(o, {
                                                          onExited: s.bind(
                                                              null,
                                                              o,
                                                          ),
                                                          in: d.props.in,
                                                          exit: u(o, "exit", t),
                                                          enter: u(
                                                              o,
                                                              "enter",
                                                              t,
                                                          ),
                                                      }))
                                                    : (r[e] = (0,
                                                      a.cloneElement)(o, {
                                                          in: !1,
                                                      }));
                                          }
                                      }),
                                      r),
                                firstRender: !1,
                            };
                        }),
                        (i.handleExited = function (t, e) {
                            var i = l(this.props.children);
                            t.key in i ||
                                (t.props.onExited && t.props.onExited(e),
                                this.mounted &&
                                    this.setState(function (e) {
                                        var i = (0, n.A)({}, e.children);
                                        return delete i[t.key], { children: i };
                                    }));
                        }),
                        (i.render = function () {
                            var t = this.props,
                                e = t.component,
                                i = t.childFactory,
                                n = (0, r.A)(t, ["component", "childFactory"]),
                                s = this.state.contextValue,
                                l = h(this.state.children).map(i);
                            return (delete n.appear,
                            delete n.enter,
                            delete n.exit,
                            null === e)
                                ? a.createElement(o.A.Provider, { value: s }, l)
                                : a.createElement(
                                      o.A.Provider,
                                      { value: s },
                                      a.createElement(e, n, l),
                                  );
                        }),
                        e
                    );
                })(a.Component);
            (d.propTypes = {}),
                (d.defaultProps = {
                    component: "div",
                    childFactory: function (t) {
                        return t;
                    },
                });
            let c = d;
        },
        93973: (t) => {
            "use strict";
            var e = Array.isArray,
                i = Object.keys,
                r = Object.prototype.hasOwnProperty;
            t.exports = function t(n, s) {
                if (n === s) return !0;
                if (n && s && "object" == typeof n && "object" == typeof s) {
                    var a,
                        o,
                        l,
                        u = e(n),
                        h = e(s);
                    if (u && h) {
                        if ((o = n.length) != s.length) return !1;
                        for (a = o; 0 != a--; ) if (!t(n[a], s[a])) return !1;
                        return !0;
                    }
                    if (u != h) return !1;
                    var d = n instanceof Date,
                        c = s instanceof Date;
                    if (d != c) return !1;
                    if (d && c) return n.getTime() == s.getTime();
                    var f = n instanceof RegExp,
                        m = s instanceof RegExp;
                    if (f != m) return !1;
                    if (f && m) return n.toString() == s.toString();
                    var g = i(n);
                    if ((o = g.length) !== i(s).length) return !1;
                    for (a = o; 0 != a--; ) if (!r.call(s, g[a])) return !1;
                    for (a = o; 0 != a--; )
                        if (!t(n[(l = g[a])], s[l])) return !1;
                    return !0;
                }
                return n != n && s != s;
            };
        },
    },
]);
