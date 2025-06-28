(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7408, 2555],
  {
    62383: function (t, e, r) {
      "use strict";
      r.d(e, {
        DL: function () {
          return n;
        },
        F4: function () {
          return i;
        },
      }),
        r(4600);
      let i = (t) => {
          let { containerNodeRect: e, draggingNodeRect: r, transform: i } = t;
          return r && e
            ? (function (t, e, r) {
                let i = { ...t };
                return (
                  e.top + t.y <= r.top
                    ? (i.y = r.top - e.top)
                    : e.bottom + t.y >= r.top + r.height &&
                      (i.y = r.top + r.height - e.bottom),
                  e.left + t.x <= r.left
                    ? (i.x = r.left - e.left)
                    : e.right + t.x >= r.left + r.width &&
                      (i.x = r.left + r.width - e.right),
                  i
                );
              })(i, r, e)
            : i;
        },
        n = (t) => {
          let { transform: e } = t;
          return { ...e, x: 0 };
        };
    },
    27851: function (t, e, r) {
      "use strict";
      function i(t) {
        return t;
      }
      function n(t) {
        return Math.max(t, 0);
      }
      function a(t) {
        return n(t);
      }
      function o(t) {
        return n(Math.floor(t));
      }
      r.d(e, {
        IH: function () {
          return d;
        },
        cs: function () {
          return f;
        },
        Jp: function () {
          return m;
        },
        cb: function () {
          return h;
        },
        LQ: function () {
          return u;
        },
        Vo: function () {
          return c;
        },
        C1: function () {
          return l;
        },
        my: function () {
          return s;
        },
        $2: function () {
          return a;
        },
        zq: function () {
          return o;
        },
      });
      let s = i,
        l = i,
        u = i,
        c = i,
        d = (t, ...e) => {
          let r = t;
          for (let t = 0; t < e.length; t++) r += e[t];
          return r;
        };
      d.operator = "+";
      let h = (t, ...e) => {
        let r = t;
        for (let t = 0; t < e.length; t++) r -= e[t];
        return r;
      };
      h.operator = "-";
      let m = (t, ...e) => {
        let r = t;
        for (let t = 0; t < e.length; t++) r *= e[t];
        return r;
      };
      m.operator = "*";
      let f = (t, ...e) => {
        let r = t;
        for (let t = 0; t < e.length; t++) r /= e[t];
        return r;
      };
      f.operator = "/";
    },
    31663: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return n;
        },
      });
      var i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++)
                for (var n in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        },
        n = (function () {
          function t(t, e, r) {
            var n = this;
            (this.endVal = e),
              (this.options = r),
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
                          n.easingFn(e, 0, n.startVal - n.endVal, n.duration))
                      : (n.frameVal = n.easingFn(
                          e,
                          n.startVal,
                          n.endVal - n.startVal,
                          n.duration,
                        ))
                    : (n.frameVal =
                        n.startVal +
                        (n.endVal - n.startVal) * (e / n.duration));
                var r = n.countDown
                  ? n.frameVal < n.endVal
                  : n.frameVal > n.endVal;
                (n.frameVal = r ? n.endVal : n.frameVal),
                  (n.frameVal = Number(
                    n.frameVal.toFixed(n.options.decimalPlaces),
                  )),
                  n.printValue(n.frameVal),
                  e < n.duration
                    ? (n.rAF = requestAnimationFrame(n.count))
                    : null !== n.finalEndVal
                      ? n.update(n.finalEndVal)
                      : n.options.onCompleteCallback &&
                        n.options.onCompleteCallback();
              }),
              (this.formatNumber = function (t) {
                var e,
                  r,
                  i,
                  a = (Math.abs(t).toFixed(n.options.decimalPlaces) + "").split(
                    ".",
                  );
                if (
                  ((e = a[0]),
                  (r = a.length > 1 ? n.options.decimal + a[1] : ""),
                  n.options.useGrouping)
                ) {
                  i = "";
                  for (var o = 3, s = 0, l = 0, u = e.length; l < u; ++l)
                    n.options.useIndianSeparators &&
                      4 === l &&
                      ((o = 2), (s = 1)),
                      0 !== l && s % o == 0 && (i = n.options.separator + i),
                      s++,
                      (i = e[u - l - 1] + i);
                  e = i;
                }
                return (
                  n.options.numerals &&
                    n.options.numerals.length &&
                    ((e = e.replace(/[0-9]/g, function (t) {
                      return n.options.numerals[+t];
                    })),
                    (r = r.replace(/[0-9]/g, function (t) {
                      return n.options.numerals[+t];
                    }))),
                  (t < 0 ? "-" : "") +
                    n.options.prefix +
                    e +
                    r +
                    n.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, e, r, i) {
                return (r * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + e;
              }),
              (this.options = i(i({}, this.defaults), r)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(e)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces,
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              "undefined" != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, t)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return n.handleScroll(n);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (t) {
                        return t();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (t.prototype.handleScroll = function (t) {
              if (t && window && !t.once) {
                var e = window.innerHeight + window.scrollY,
                  r = t.el.getBoundingClientRect(),
                  i = r.top + window.pageYOffset,
                  n = r.top + r.height + window.pageYOffset;
                n < e && n > window.scrollY && t.paused
                  ? ((t.paused = !1),
                    setTimeout(function () {
                      return t.start();
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0))
                  : (window.scrollY > n || i > e) && !t.paused && t.reset();
              }
            }),
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = t;
                var e = this.countDown ? 1 : -1;
                (this.endVal = t + e * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var e;
              if (this.el) {
                var r = this.formattingFn(t);
                (
                  null === (e = this.options.plugin) || void 0 === e
                    ? void 0
                    : e.render
                )
                  ? this.options.plugin.render(this.el, r)
                  : "INPUT" === this.el.tagName
                    ? (this.el.value = r)
                    : "text" === this.el.tagName || "tspan" === this.el.tagName
                      ? (this.el.textContent = r)
                      : (this.el.innerHTML = r);
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
                    "[CountUp] invalid start or end value: ".concat(t)),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
    73664: function (t) {
      "use strict";
      var e = Array.isArray,
        r = Object.keys,
        i = Object.prototype.hasOwnProperty;
      t.exports = function t(n, a) {
        if (n === a) return !0;
        if (n && a && "object" == typeof n && "object" == typeof a) {
          var o,
            s,
            l,
            u = e(n),
            c = e(a);
          if (u && c) {
            if ((s = n.length) != a.length) return !1;
            for (o = s; 0 != o--; ) if (!t(n[o], a[o])) return !1;
            return !0;
          }
          if (u != c) return !1;
          var d = n instanceof Date,
            h = a instanceof Date;
          if (d != h) return !1;
          if (d && h) return n.getTime() == a.getTime();
          var m = n instanceof RegExp,
            f = a instanceof RegExp;
          if (m != f) return !1;
          if (m && f) return n.toString() == a.toString();
          var p = r(n);
          if ((s = p.length) !== r(a).length) return !1;
          for (o = s; 0 != o--; ) if (!i.call(a, p[o])) return !1;
          for (o = s; 0 != o--; ) if (!t(n[(l = p[o])], a[l])) return !1;
          return !0;
        }
        return n != n && a != a;
      };
    },
    45409: function (t, e, r) {
      let i = "undefined" == typeof window ? r(98192).EOL : "\n";
      function n(t) {
        let e = parseInt((t = t.split(":"))[0], 10),
          r = parseFloat(t[1]);
        return e > 0 ? parseFloat((60 * e + r).toFixed(2)) : r;
      }
      t.exports = function (t) {
        if ("string" != typeof t)
          throw TypeError("expect first argument to be a string");
        let e = t.split(i),
          r = /\[(\d*\:\d*\.?\d*)\]/,
          a = new RegExp(r.source + /(.+)/.source),
          o = [],
          s = [],
          l = {};
        for (let t = 0; !1 === a.test(e[t]); t++) o.push(e[t]);
        o.reduce((t, e) => {
          let [r, i] = e.trim().slice(1, -1).split(": ");
          return (t[r] = i), t;
        }, l),
          e.splice(0, o.length);
        let u = RegExp(a.source + "|" + r.source);
        e = e.filter((t) => u.test(t));
        for (let t = 0, i = e.length; t < i; t++) {
          let i = a.exec(e[t]),
            o = r.exec(e[t + 1]);
          if (i && o) {
            let [, t, e] = i,
              [, r] = o;
            s.push({ start: n(t), text: e, end: n(r) });
          }
        }
        return (l.scripts = s), l;
      };
    },
    98192: function (t) {
      var e;
      "undefined" != typeof __nccwpck_require__ &&
        (__nccwpck_require__.ab = "//"),
        ((e = {}).endianness = function () {
          return "LE";
        }),
        (e.hostname = function () {
          return "undefined" != typeof location ? location.hostname : "";
        }),
        (e.loadavg = function () {
          return [];
        }),
        (e.uptime = function () {
          return 0;
        }),
        (e.freemem = function () {
          return Number.MAX_VALUE;
        }),
        (e.totalmem = function () {
          return Number.MAX_VALUE;
        }),
        (e.cpus = function () {
          return [];
        }),
        (e.type = function () {
          return "Browser";
        }),
        (e.release = function () {
          return "undefined" != typeof navigator ? navigator.appVersion : "";
        }),
        (e.networkInterfaces = e.getNetworkInterfaces =
          function () {
            return {};
          }),
        (e.arch = function () {
          return "javascript";
        }),
        (e.platform = function () {
          return "browser";
        }),
        (e.tmpdir = e.tmpDir =
          function () {
            return "/tmp";
          }),
        (e.EOL = "\n"),
        (e.homedir = function () {
          return "/";
        }),
        (t.exports = e);
    },
    26406: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ji: function () {
          return m;
        },
      });
      var i,
        n,
        a,
        o,
        s = r(43218),
        l = r(65067),
        u = r(9317);
      ((i = a || (a = {})).formatDate = "FormattedDate"),
        (i.formatTime = "FormattedTime"),
        (i.formatNumber = "FormattedNumber"),
        (i.formatList = "FormattedList"),
        (i.formatDisplayName = "FormattedDisplayName"),
        ((n = o || (o = {})).formatDate = "FormattedDateParts"),
        (n.formatTime = "FormattedTimeParts"),
        (n.formatNumber = "FormattedNumberParts"),
        (n.formatList = "FormattedListParts");
      var c = function (t) {
        var e = (0, u.Z)(),
          r = t.value,
          i = t.children,
          n = (0, s.__rest)(t, ["value", "children"]);
        return i(e.formatNumberToParts(r, n));
      };
      function d(t) {
        var e = function (e) {
          var r = (0, u.Z)(),
            i = e.value,
            n = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            o = "string" == typeof i ? new Date(i || 0) : i;
          return n(
            "formatDate" === t
              ? r.formatDateToParts(o, a)
              : r.formatTimeToParts(o, a),
          );
        };
        return (e.displayName = o[t]), e;
      }
      function h(t) {
        var e = function (e) {
          var r = (0, u.Z)(),
            i = e.value,
            n = e.children,
            a = (0, s.__rest)(e, ["value", "children"]),
            o = r[t](i, a);
          if ("function" == typeof n) return n(o);
          var c = r.textComponent || l.Fragment;
          return l.createElement(c, null, o);
        };
        return (e.displayName = a[t]), e;
      }
      (c.displayName = "FormattedNumberParts"),
        (c.displayName = "FormattedNumberParts");
      var m = h("formatDate");
      h("formatTime"),
        h("formatNumber"),
        h("formatList"),
        h("formatDisplayName"),
        d("formatDate"),
        d("formatTime");
    },
    38959: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return U;
        },
      });
      var i = r(43218),
        n = r(65067),
        a = r(26753),
        o = r(72198),
        s = r(13085),
        l = r(89967),
        u = r(52908),
        c = r(85853);
      function d(t, e) {
        return Object.keys(t).reduce(function (r, n) {
          return (r[n] = (0, i.__assign)({ timeZone: e }, t[n])), r;
        }, {});
      }
      function h(t, e) {
        return Object.keys((0, i.__assign)((0, i.__assign)({}, t), e)).reduce(
          function (r, n) {
            return (
              (r[n] = (0, i.__assign)(
                (0, i.__assign)({}, t[n] || {}),
                e[n] || {},
              )),
              r
            );
          },
          {},
        );
      }
      function m(t, e) {
        if (!e) return t;
        var r = l.C.formats;
        return (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, r), t), {
          date: h(d(r.date, e), d(t.date || {}, e)),
          time: h(d(r.time, e), d(t.time || {}, e)),
        });
      }
      var f = function (t, e, r, n, a) {
          var o = t.locale,
            l = t.formats,
            d = t.messages,
            h = t.defaultLocale,
            f = t.defaultFormats,
            p = t.fallbackOnEmptyString,
            g = t.onError,
            v = t.timeZone,
            y = t.defaultRichTextElements;
          void 0 === r && (r = { id: "" });
          var S = r.id,
            b = r.defaultMessage;
          (0, s.kG)(
            !!S,
            "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
          );
          var T = String(S),
            w = d && Object.prototype.hasOwnProperty.call(d, T) && d[T];
          if (
            Array.isArray(w) &&
            1 === w.length &&
            w[0].type === c.TYPE.literal
          )
            return w[0].value;
          if (!n && w && "string" == typeof w && !y)
            return w.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (
            ((n = (0, i.__assign)((0, i.__assign)({}, y), n || {})),
            (l = m(l, v)),
            (f = m(f, v)),
            !w)
          ) {
            if (!1 === p && "" === w) return w;
            if (
              ((!b || (o && o.toLowerCase() !== h.toLowerCase())) &&
                g(new u.$6(r, o)),
              b)
            )
              try {
                var E = e.getMessageFormat(b, h, f, a);
                return E.format(n);
              } catch (t) {
                return (
                  g(
                    new u.X9(
                      'Error formatting default message for: "'.concat(
                        T,
                        '", rendering default message verbatim',
                      ),
                      o,
                      r,
                      t,
                    ),
                  ),
                  "string" == typeof b ? b : T
                );
              }
            return T;
          }
          try {
            var E = e.getMessageFormat(
              w,
              o,
              l,
              (0, i.__assign)({ formatters: e }, a || {}),
            );
            return E.format(n);
          } catch (t) {
            g(
              new u.X9(
                'Error formatting message: "'
                  .concat(T, '", using ')
                  .concat(b ? "default message" : "id", " as fallback."),
                o,
                r,
                t,
              ),
            );
          }
          if (b)
            try {
              var E = e.getMessageFormat(b, h, f, a);
              return E.format(n);
            } catch (t) {
              g(
                new u.X9(
                  'Error formatting the default message for: "'.concat(
                    T,
                    '", rendering message verbatim',
                  ),
                  o,
                  r,
                  t,
                ),
              );
            }
          return "string" == typeof w ? w : "string" == typeof b ? b : T;
        },
        p = r(5944),
        g = [
          "style",
          "currency",
          "currencyDisplay",
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
        ];
      function v(t, e, r) {
        var i = t.locale,
          n = t.formats,
          a = t.onError;
        void 0 === r && (r = {});
        var o = r.format,
          s = (o && (0, p.TB)(n, "number", o, a)) || {};
        return e(i, (0, p.L6)(r, g, s));
      }
      function y(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return v(t, e, i).format(r);
        } catch (e) {
          t.onError(new u.Qe("Error formatting number.", t.locale, e));
        }
        return String(r);
      }
      function S(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return v(t, e, i).formatToParts(r);
        } catch (e) {
          t.onError(new u.Qe("Error formatting number.", t.locale, e));
        }
        return [];
      }
      var b = r(15061),
        T = ["numeric", "style"];
      function w(t, e, r, i, n) {
        void 0 === n && (n = {}),
          i || (i = "second"),
          Intl.RelativeTimeFormat ||
            t.onError(
              new b.u_(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                b.jK.MISSING_INTL_API,
              ),
            );
        try {
          var a, o, s, l, c, d;
          return ((a = n),
          (o = t.locale),
          (s = t.formats),
          (l = t.onError),
          void 0 === a && (a = {}),
          (d = (!!(c = a.format) && (0, p.TB)(s, "relative", c, l)) || {}),
          e(o, (0, p.L6)(a, T, d))).format(r, i);
        } catch (e) {
          t.onError(new u.Qe("Error formatting relative time.", t.locale, e));
        }
        return String(r);
      }
      var E = [
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
      function x(t, e, r, n) {
        var a = t.locale,
          o = t.formats,
          s = t.onError,
          l = t.timeZone;
        void 0 === n && (n = {});
        var u = n.format,
          c = (0, i.__assign)(
            (0, i.__assign)({}, l && { timeZone: l }),
            u && (0, p.TB)(o, e, u, s),
          ),
          d = (0, p.L6)(n, E, c);
        return (
          "time" !== e ||
            d.hour ||
            d.minute ||
            d.second ||
            d.timeStyle ||
            d.dateStyle ||
            (d = (0, i.__assign)((0, i.__assign)({}, d), {
              hour: "numeric",
              minute: "numeric",
            })),
          r(a, d)
        );
      }
      function I(t, e) {
        for (var r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        var n = r[0],
          a = r[1],
          o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return x(t, "date", e, void 0 === a ? {} : a).format(o);
        } catch (e) {
          t.onError(new u.Qe("Error formatting date.", t.locale, e));
        }
        return String(o);
      }
      function k(t, e) {
        for (var r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        var n = r[0],
          a = r[1],
          o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return x(t, "time", e, void 0 === a ? {} : a).format(o);
        } catch (e) {
          t.onError(new u.Qe("Error formatting time.", t.locale, e));
        }
        return String(o);
      }
      function F(t, e) {
        for (var r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        var n = r[0],
          a = r[1],
          o = r[2],
          s = t.timeZone,
          l = t.locale,
          c = t.onError,
          d = (0, p.L6)(void 0 === o ? {} : o, E, s ? { timeZone: s } : {});
        try {
          return e(l, d).formatRange(n, a);
        } catch (e) {
          c(new u.Qe("Error formatting date time range.", t.locale, e));
        }
        return String(n);
      }
      function V(t, e) {
        for (var r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        var n = r[0],
          a = r[1],
          o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return x(t, "date", e, void 0 === a ? {} : a).formatToParts(o);
        } catch (e) {
          t.onError(new u.Qe("Error formatting date.", t.locale, e));
        }
        return [];
      }
      function _(t, e) {
        for (var r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        var n = r[0],
          a = r[1],
          o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return x(t, "time", e, void 0 === a ? {} : a).formatToParts(o);
        } catch (e) {
          t.onError(new u.Qe("Error formatting time.", t.locale, e));
        }
        return [];
      }
      var D = ["type"];
      function P(t, e, r, i) {
        var n = t.locale,
          a = t.onError;
        void 0 === i && (i = {}),
          Intl.PluralRules ||
            a(
              new b.u_(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                b.jK.MISSING_INTL_API,
              ),
            );
        var o = (0, p.L6)(i, D);
        try {
          return e(n, o).select(r);
        } catch (t) {
          a(new u.Qe("Error formatting plural.", n, t));
        }
        return "other";
      }
      var N = ["type", "style"],
        C = Date.now();
      function O(t, e, r, i) {
        void 0 === i && (i = {});
        var n = M(t, e, r, i).reduce(function (t, e) {
          var r = e.value;
          return (
            "string" != typeof r
              ? t.push(r)
              : "string" == typeof t[t.length - 1]
                ? (t[t.length - 1] += r)
                : t.push(r),
            t
          );
        }, []);
        return 1 === n.length ? n[0] : 0 === n.length ? "" : n;
      }
      function M(t, e, r, n) {
        var a = t.locale,
          o = t.onError;
        void 0 === n && (n = {}),
          Intl.ListFormat ||
            o(
              new b.u_(
                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                b.jK.MISSING_INTL_API,
              ),
            );
        var s = (0, p.L6)(n, N);
        try {
          var l = {},
            c = r.map(function (t, e) {
              if ("object" == typeof t) {
                var r = "".concat(C, "_").concat(e, "_").concat(C);
                return (l[r] = t), r;
              }
              return String(t);
            });
          return e(a, s)
            .formatToParts(c)
            .map(function (t) {
              return "literal" === t.type
                ? t
                : (0, i.__assign)((0, i.__assign)({}, t), {
                    value: l[t.value] || t.value,
                  });
            });
        } catch (t) {
          o(new u.Qe("Error formatting list.", a, t));
        }
        return r;
      }
      var L = ["style", "type", "fallback", "languageDisplay"];
      function A(t, e, r, i) {
        var n = t.locale,
          a = t.onError;
        Intl.DisplayNames ||
          a(
            new b.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              b.jK.MISSING_INTL_API,
            ),
          );
        var o = (0, p.L6)(i, L);
        try {
          return e(n, o).of(r);
        } catch (t) {
          a(new u.Qe("Error formatting display name.", n, t));
        }
      }
      var B = r(29889);
      function j(t) {
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
          wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
          defaultRichTextElements: t.defaultRichTextElements,
        };
      }
      function R(t) {
        return t
          ? Object.keys(t).reduce(function (e, r) {
              var i = t[r];
              return (e[r] = (0, B.Gt)(i) ? (0, o.dt)(i) : i), e;
            }, {})
          : t;
      }
      var W = function (t, e, r, a) {
          for (var o = [], s = 4; s < arguments.length; s++)
            o[s - 4] = arguments[s];
          var l = R(a),
            u = f.apply(void 0, (0, i.__spreadArray)([t, e, r, l], o, !1));
          return Array.isArray(u) ? n.Children.toArray(u) : u;
        },
        H = function (t, e) {
          var r,
            n,
            a,
            s,
            l,
            c,
            d,
            h = t.defaultRichTextElements,
            m = (0, i.__rest)(t, ["defaultRichTextElements"]),
            g = R(h),
            v =
              ((n = (0, i.__assign)(
                (0, i.__assign)((0, i.__assign)({}, o.Z0), m),
                { defaultRichTextElements: g },
              )),
              (a = (0, p.ax)(e)),
              (l = (s = (0, i.__assign)((0, i.__assign)({}, p.Z0), n)).locale),
              (c = s.defaultLocale),
              (d = s.onError),
              l
                ? !Intl.NumberFormat.supportedLocalesOf(l).length && d
                  ? d(
                      new u.gb(
                        'Missing locale data for locale: "'
                          .concat(
                            l,
                            '" in Intl.NumberFormat. Using default locale: "',
                          )
                          .concat(
                            c,
                            '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                          ),
                      ),
                    )
                  : !Intl.DateTimeFormat.supportedLocalesOf(l).length &&
                    d &&
                    d(
                      new u.gb(
                        'Missing locale data for locale: "'
                          .concat(
                            l,
                            '" in Intl.DateTimeFormat. Using default locale: "',
                          )
                          .concat(
                            c,
                            '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                          ),
                      ),
                    )
                : (d &&
                    d(
                      new u.OV(
                        '"locale" was not configured, using "'.concat(
                          c,
                          '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                        ),
                      ),
                    ),
                  (s.locale = s.defaultLocale || "en")),
              s.onWarn &&
                s.defaultRichTextElements &&
                "string" == typeof (r = s.messages || {})[Object.keys(r)[0]] &&
                s.onWarn(
                  '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
                ),
              (0, i.__assign)((0, i.__assign)({}, s), {
                formatters: a,
                formatNumber: y.bind(null, s, a.getNumberFormat),
                formatNumberToParts: S.bind(null, s, a.getNumberFormat),
                formatRelativeTime: w.bind(null, s, a.getRelativeTimeFormat),
                formatDate: I.bind(null, s, a.getDateTimeFormat),
                formatDateToParts: V.bind(null, s, a.getDateTimeFormat),
                formatTime: k.bind(null, s, a.getDateTimeFormat),
                formatDateTimeRange: F.bind(null, s, a.getDateTimeFormat),
                formatTimeToParts: _.bind(null, s, a.getDateTimeFormat),
                formatPlural: P.bind(null, s, a.getPluralRules),
                formatMessage: f.bind(null, s, a),
                $t: f.bind(null, s, a),
                formatList: O.bind(null, s, a.getListFormat),
                formatListToParts: M.bind(null, s, a.getListFormat),
                formatDisplayName: A.bind(null, s, a.getDisplayNames),
              })),
            b = {
              locale: v.locale,
              timeZone: v.timeZone,
              fallbackOnEmptyString: v.fallbackOnEmptyString,
              formats: v.formats,
              defaultLocale: v.defaultLocale,
              defaultFormats: v.defaultFormats,
              messages: v.messages,
              onError: v.onError,
              defaultRichTextElements: g,
            };
          return (0, i.__assign)((0, i.__assign)({}, v), {
            formatMessage: W.bind(null, b, v.formatters),
            $t: W.bind(null, b, v.formatters),
          });
        },
        U = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.cache = (0, p.Sn)()),
              (e.state = {
                cache: e.cache,
                intl: H(j(e.props), e.cache),
                prevConfig: j(e.props),
              }),
              e
            );
          }
          return (
            (0, i.__extends)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var r = e.prevConfig,
                i = e.cache,
                n = j(t);
              return (0, o.wU)(r, n) ? null : { intl: H(n, i), prevConfig: n };
            }),
            (e.prototype.render = function () {
              return (
                (0, o.lq)(this.state.intl),
                n.createElement(
                  a.zt,
                  { value: this.state.intl },
                  this.props.children,
                )
              );
            }),
            (e.displayName = "IntlProvider"),
            (e.defaultProps = o.Z0),
            e
          );
        })(n.PureComponent);
    },
    1194: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return h;
        },
      });
      var i = r(99667),
        n = r(40534),
        a = r(80658),
        o = r(65067),
        s = r(48179);
      function l(t, e) {
        var r = Object.create(null);
        return (
          t &&
            o.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              r[t.key] = e && (0, o.isValidElement)(t) ? e(t) : t;
            }),
          r
        );
      }
      function u(t, e, r) {
        return null != r[e] ? r[e] : t.props[e];
      }
      var c =
          Object.values ||
          function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
        d = (function (t) {
          function e(e, r) {
            var i,
              n = (i = t.call(this, e, r) || this).handleExited.bind(
                (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(i),
              );
            return (
              (i.state = {
                contextValue: { isMounting: !0 },
                handleExited: n,
                firstRender: !0,
              }),
              i
            );
          }
          (0, a.Z)(e, t);
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (r.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (e.getDerivedStateFromProps = function (t, e) {
              var r,
                i,
                n = e.children,
                a = e.handleExited;
              return {
                children: e.firstRender
                  ? l(t.children, function (e) {
                      return (0, o.cloneElement)(e, {
                        onExited: a.bind(null, e),
                        in: !0,
                        appear: u(e, "appear", t),
                        enter: u(e, "enter", t),
                        exit: u(e, "exit", t),
                      });
                    })
                  : (Object.keys(
                      (i = (function (t, e) {
                        function r(r) {
                          return r in e ? e[r] : t[r];
                        }
                        (t = t || {}), (e = e || {});
                        var i,
                          n = Object.create(null),
                          a = [];
                        for (var o in t)
                          o in e
                            ? a.length && ((n[o] = a), (a = []))
                            : a.push(o);
                        var s = {};
                        for (var l in e) {
                          if (n[l])
                            for (i = 0; i < n[l].length; i++) {
                              var u = n[l][i];
                              s[n[l][i]] = r(u);
                            }
                          s[l] = r(l);
                        }
                        for (i = 0; i < a.length; i++) s[a[i]] = r(a[i]);
                        return s;
                      })(n, (r = l(t.children)))),
                    ).forEach(function (e) {
                      var s = i[e];
                      if ((0, o.isValidElement)(s)) {
                        var l = e in n,
                          c = e in r,
                          d = n[e],
                          h = (0, o.isValidElement)(d) && !d.props.in;
                        c && (!l || h)
                          ? (i[e] = (0, o.cloneElement)(s, {
                              onExited: a.bind(null, s),
                              in: !0,
                              exit: u(s, "exit", t),
                              enter: u(s, "enter", t),
                            }))
                          : c || !l || h
                            ? c &&
                              l &&
                              (0, o.isValidElement)(d) &&
                              (i[e] = (0, o.cloneElement)(s, {
                                onExited: a.bind(null, s),
                                in: d.props.in,
                                exit: u(s, "exit", t),
                                enter: u(s, "enter", t),
                              }))
                            : (i[e] = (0, o.cloneElement)(s, { in: !1 }));
                      }
                    }),
                    i),
                firstRender: !1,
              };
            }),
            (r.handleExited = function (t, e) {
              var r = l(this.props.children);
              t.key in r ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var r = (0, n.Z)({}, e.children);
                    return delete r[t.key], { children: r };
                  }));
            }),
            (r.render = function () {
              var t = this.props,
                e = t.component,
                r = t.childFactory,
                n = (0, i.Z)(t, ["component", "childFactory"]),
                a = this.state.contextValue,
                l = c(this.state.children).map(r);
              return (delete n.appear,
              delete n.enter,
              delete n.exit,
              null === e)
                ? o.createElement(s.Z.Provider, { value: a }, l)
                : o.createElement(
                    s.Z.Provider,
                    { value: a },
                    o.createElement(e, n, l),
                  );
            }),
            e
          );
        })(o.Component);
      (d.propTypes = {}),
        (d.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var h = d;
    },
    58597: function (t) {
      function e() {}
      (e.prototype = {
        on: function (t, e, r) {
          var i = this.e || (this.e = {});
          return (i[t] || (i[t] = [])).push({ fn: e, ctx: r }), this;
        },
        once: function (t, e, r) {
          var i = this;
          function n() {
            i.off(t, n), e.apply(r, arguments);
          }
          return (n._ = e), this.on(t, n, r);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              r = ((this.e || (this.e = {}))[t] || []).slice(),
              i = 0,
              n = r.length;
            i < n;
            i++
          )
            r[i].fn.apply(r[i].ctx, e);
          return this;
        },
        off: function (t, e) {
          var r = this.e || (this.e = {}),
            i = r[t],
            n = [];
          if (i && e)
            for (var a = 0, o = i.length; a < o; a++)
              i[a].fn !== e && i[a].fn._ !== e && n.push(i[a]);
          return n.length ? (r[t] = n) : delete r[t], this;
        },
      }),
        (t.exports = e),
        (t.exports.TinyEmitter = e);
    },
    10375: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return o;
        },
      });
      let i =
        !(function (t, e = !1) {
          if (!t) return !1;
          let r = e
            ? Function.prototype.toString.call(t)
            : t.toString
              ? t.toString()
              : "";
          return (
            /\[native code\]/.test(r) ||
            /\/\* source code not available \*\//.test(r)
          );
        })(Math.random) || Math.random() === Math.random();
      var n = r(62661);
      let a = ((0, n.m6)() * (0, n.no)()) % 2147483647,
        o = i
          ? function () {
              return ((a = (16807 * a) % 2147483647) - 1) / 2147483646;
            }
          : function () {
              return Math.random();
            };
    },
    29196: function (t, e, r) {
      "use strict";
      r.d(e, {
        M0: function () {
          return td;
        },
        k2: function () {
          return m;
        },
      });
      var i,
        n,
        a,
        o,
        s,
        l,
        u,
        c,
        d,
        h,
        m = {};
      r.r(m),
        r.d(m, {
          r: function () {
            return l;
          },
          X: function () {
            return u;
          },
        }),
        ((i = l || (l = {})).Start = "Start"),
        (i.Watched4Sec = "4SecWatched"),
        (i.Watched10Sec = "10SecWatched"),
        (i.Watched20Sec = "20SecWatched"),
        (i.Heartbeat30Sec = "30SecHeartbeat"),
        (i.End = "End"),
        ((n = u || (u = {})).PLAY = "play"),
        (n.PAUSE = "pause"),
        (n.BUFFERING = "buffering"),
        (n.END = "end");
      var f = r(27851);
      function p(t) {
        return Math.floor(t / 30);
      }
      class g {
        params;
        previousWatchedTime = (0, f.my)(0);
        constructor(t) {
          this.params = t;
        }
        onWatchedTimeChange(t) {
          let { previousWatchedTime: e } = this;
          e !== t &&
            (0 === e && t > 0
              ? this.params.onEvent(l.Start)
              : e < 4 && t >= 4
                ? this.params.onEvent(l.Watched4Sec)
                : e < 10 && t >= 10
                  ? this.params.onEvent(l.Watched10Sec)
                  : e < 20 && t >= 20
                    ? this.params.onEvent(l.Watched20Sec)
                    : p(e) < p(t) && this.params.onEvent(l.Heartbeat30Sec),
            (this.previousWatchedTime = t));
        }
        onPlayingStateChange(t) {
          t === u.END && this.params.onEvent(l.End);
        }
      }
      class v {
        lastSourceIndexWithFatal = null;
        extractSourceIndex(t) {
          let e = t.split("?")[1];
          if (e)
            for (let t of e.split("&")) {
              let [e, r] = t.split("=");
              if ("source_index" === e) return r ? Number(r) : null;
            }
          return null;
        }
        checkIsFatal(t, e) {
          if (!t || !e) return t;
          let r = this.extractSourceIndex(e);
          return null === r
            ? t
            : (null === this.lastSourceIndexWithFatal ||
                r > this.lastSourceIndexWithFatal) &&
                ((this.lastSourceIndexWithFatal = r), !0);
        }
      }
      var y = r(73664);
      let S = (0, f.Vo)(1e4),
        b = (0, f.Vo)(1e3),
        T = (0, f.Vo)(5e3),
        w = (0, f.Vo)(3e4);
      var E = r(62661);
      class x {
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
            (this.startTime = this.lastFlushTime = (0, E.no)()),
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
              ? (0, E.no)()
              : this.startTime),
            (this.wasFirstFlush = !0));
        }
        needFlush() {
          let t = (0, E.no)();
          return this.wasFirstFlush
            ? t - this.lastFlushTime >= w
            : t - this.startTime >= S;
        }
        getTimeout() {
          return (0, E.no)() - this.startTime < S ? b : T;
        }
      }
      let I = (0, f.$2)((0, f.my)(Math.abs(0))),
        k = {
          remainingBufferedTime: (0, f.$2)((0, f.my)(Math.abs(0))),
          state: u.BUFFERING,
          currentTime: I,
          watchedTime: (0, f.$2)((0, f.my)(Math.abs(0))),
          duration: (0, f.$2)((0, f.my)(0)),
        },
        F = NaN;
      function V(...t) {}
      ((a = c || (c = {}))[(a.PLAYING = 1)] = "PLAYING"),
        (a[(a.NOT_PLAYING = 2)] = "NOT_PLAYING"),
        ((o = d || (d = {})).preroll = "preroll"),
        (o.midroll = "midroll"),
        (o.postPauseroll = "postPauseroll"),
        (o.postroll = "postroll"),
        (o.inroll = "inroll");
      class _ {
        props;
        prevState = void 0;
        states = [];
        timer;
        destroyHandlers = [];
        constructor(t) {
          (this.props = t),
            (this.timer = new x(
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
          t.length > 0 && this.props.onFlushStates(t), (this.states.length = 0);
        }
        writeStateManually = (function (t, e, r, i) {
          3 == arguments.length && "boolean" != typeof r && ((i = r), (r = !1));
          let n = null,
            a = V;
          function o() {
            null !== n && clearTimeout(n), (n = null);
          }
          let s = function () {
            let s = arguments;
            (i = i || this),
              (a = () => {
                o(), (a = V), t.apply(i, s);
              }),
              r && null === n && t.apply(i, s),
              o(),
              (n = window.setTimeout(function () {
                r || t.apply(i, s), (n = null);
              }, e));
          };
          return (
            (s.cancel = o),
            (s.now = () => {
              a();
            }),
            s
          );
        })(() => {
          this.writeState(), this.timer.next();
        }, 0);
        writeState() {
          let t = this.getPlayerAliveState();
          y(this.prevState, t) ||
            ((this.prevState = t),
            this.states.push({
              ...t,
              timestamp: (0, f.Vo)(this.props.getTimestamp()),
            }));
        }
        getPlayerAliveState() {
          let t = {
              ...k,
              saveData: (function (t = window) {
                let { navigator: e } = t,
                  { connection: r = {} } = e;
                return !!r.saveData;
              })(),
              rtt: (function (t = window) {
                var e;
                if (!t.navigator) return F;
                let { connection: r = {} } = t.navigator;
                return "number" == typeof (e = r.rtt) && isFinite(e)
                  ? r.rtt
                  : F;
              })(),
              ...this.props.stalledController.getStalledHistory(),
            },
            e = this.props.getState();
          if (!e) return { ...t };
          let {
              currentTime: r,
              duration: i,
              muted: n,
              playingState: a,
              remainingBufferedTime: o,
              adState: s,
              liveLatency: l,
              videoTracks: u,
              audioTrack: d,
              videoSize: h,
              isVisible: m,
              capHeight: p,
              capWidth: g,
              containerHeight: v,
              containerWidth: y,
              bandwidthEstimate: S,
              bandwidthSource: b,
              droppedFrames: T,
              shownFrames: w,
              isFullscreen: E,
              isPictureInPicture: x,
              volume: I,
              playbackRate: V,
            } = e,
            _ = u.find((t) => t.selected),
            D = [...u].sort((t, e) => e.bitrate - t.bitrate),
            P = s?.state === c.PLAYING,
            N = !P,
            C = this.props.getWatchedTime();
          return {
            ...t,
            watchedTime: Math.max(0, C),
            currentTime: isNaN(r) ? (0, f.my)(0) : Math.max(0, r),
            duration: isNaN(i) ? (0, f.my)(0) : Math.max(0, i),
            isMuted: n,
            state: a,
            remainingBufferedTime: o?.total || (0, f.my)(0),
            remainingAudioBufferedTime:
              o?.audio === void 0 ? void 0 : Math.max(0, o.audio),
            remainingVideoBufferedTime:
              o?.video === void 0 ? void 0 : Math.max(0, o.video),
            ad: P ? s?.type : void 0,
            liveLatency: void 0 === l ? void 0 : Math.max(0, l),
            stalledReason:
              this.props.stalledController.getCurrentStalledReason(),
            auto: _?.auto === void 0 ? void 0 : _.auto,
            isVisible: m,
            bitrate: _?.bitrate
              ? Math.max(0, Math.floor((0, f.Jp)(_.bitrate, 1e3)))
              : void 0,
            width:
              h?.videoWidth === void 0 || isNaN(h?.videoWidth)
                ? void 0
                : Math.max(0, Math.floor((0, f.C1)(h?.videoWidth))),
            height:
              h?.videoHeight === void 0 || isNaN(h?.videoHeight)
                ? void 0
                : Math.max(0, Math.floor((0, f.C1)(h?.videoHeight))),
            maxWidth:
              N && D[0]?.width
                ? Math.max(0, Math.floor((0, f.C1)(D[0].width)))
                : void 0,
            maxHeight:
              N && D[0]?.height
                ? Math.max(0, Math.floor((0, f.C1)(D[0].height)))
                : void 0,
            audioTrack: d?.value || void 0,
            audioLang: d?.lang || void 0,
            audioBitrate: d?.bitrate
              ? Math.max(0, Math.floor((0, f.Jp)(d.bitrate, 1e3)))
              : void 0,
            capHeight: N && p ? Math.max(0, Math.floor((0, f.C1)(p))) : void 0,
            capWidth: N && g ? Math.max(0, Math.floor((0, f.C1)(g))) : void 0,
            containerHeight: void 0 !== v ? Math.max(0, Math.floor(v)) : void 0,
            containerWidth: void 0 !== y ? Math.max(0, Math.floor(y)) : void 0,
            bandwidthEstimate:
              void 0 === S || isNaN(S)
                ? void 0
                : Math.max(0, (0, f.LQ)(Math.round(S))),
            bandwidthSource: b || void 0,
            droppedFrames: void 0 === T ? void 0 : Math.max(0, Math.floor(T)),
            shownFrames: void 0 === w ? void 0 : Math.max(0, Math.floor(w)),
            viewport: E ? "fullscreen" : x ? "pip" : "default",
            volume: I,
            playbackRate: V,
          };
        }
      }
      ((s = h || (h = {})).Init = "Init"),
        (s.SetSource = "SetSource"),
        (s.Seek = "Seek"),
        (s.VideoTrackChange = "VideoTrackChange"),
        (s.AudioTrackChange = "AudioTrackChange"),
        (s.Recover = "Recover"),
        (s.MediaError = "MediaError"),
        (s.Offline = "Offline"),
        (s.Other = "Other"),
        (s.Render = "Render"),
        (s.RepresentationsChange = "RepresentationsChange"),
        (s.LiveEdge = "LiveEdge"),
        (s.AdStart = "AdStart"),
        (s.AdOther = "AdOther"),
        (s.AdBetween = "AdBetween"),
        (s.AdEnd = "AdEnd");
      let D = [0, 1, 4, 5],
        P = (0, f.my)(0),
        N = D.map((t) => (P = (0, f.IH)((0, f.my)(t), P))),
        C = (0, f.Jp)(N[N.length - 1], 1e3),
        O = [h.Init];
      function M(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      function L(t, e) {
        try {
          return t();
        } catch (t) {
          "function" == typeof e && e(t);
        }
      }
      class A {
        setTimeout(t, e) {
          if (e <= 0) {
            L(t, M);
            return;
          }
          let r = window.setTimeout(t, e);
          return () => window.clearTimeout(r);
        }
        now() {
          return (0, E.m6)();
        }
      }
      class B {
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
        constructor(t, e = new A()) {
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
                this.restTime - (this.clock.now() - this.lastKnockTime),
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
                () => this.knock(this.lastNow + this.lastTimeout),
                this.restTime,
              )),
            this
          );
        }
        destroy() {
          this.cancelTimeout(), (this.stopped = !0), (this.destroyed = !0);
        }
        knock(t) {
          (this.lastNow = t),
            (this.lastKnockTime = this.clock.now()),
            this.isFirstKnock ? (this.isFirstKnock = !1) : this.count++;
          let e =
            (this.restTime =
            this.lastTimeout =
              this.distributionFunction({ time: t, count: this.count }));
          this.stopped ||
            this.destroyed ||
            this.setTimeout(() => this.knock(t + e), e);
        }
        cancelTimeout() {
          void 0 !== this.cancel && this.cancel(), (this.cancel = void 0);
        }
        setTimeout(t, e) {
          this.cancelTimeout();
          let r = this.clock.setTimeout(t, e);
          void 0 !== r && (this.cancelTimeout(), (this.cancel = r));
        }
      }
      function j(t = E.no) {
        let e = t();
        return () => (0, f.Vo)(Math.max(0, t() - e));
      }
      function R(t, e) {
        return { reason: t, details: e, getElapsedTime: j() };
      }
      class W {
        isBuffering = !1;
        timer = void 0;
        stalledId = 1;
        stalledDurationRemainder = (0, f.my)(0);
        getState;
        logEvent;
        expectedStalled = R(h.Init, {});
        currentStalled = void 0;
        stalledTime = (0, f.my)(0);
        stalledCount = 0;
        constructor({ getState: t, logEvent: e }) {
          (this.getState = t), (this.logEvent = e);
        }
        setBuffering(t, e = (0, f.Vo)(0)) {
          if (t !== this.isBuffering) {
            if (((this.isBuffering = t), this.isBuffering)) {
              let t = [],
                r = D.filter((r, i) => {
                  let n = this.currentStalled
                      ? this.currentStalled.expectedStalled
                      : this.getExpectedStalled(),
                    a = N[i];
                  if ((0, f.cs)(e, 1e3) > a) {
                    let t = this.currentStalled
                      ? this.currentStalled.id
                      : this.stalledId++;
                    return (
                      !this.currentStalled && this.stalledCount++,
                      (this.currentStalled = {
                        id: t,
                        expectedStalled: n,
                        duration: a,
                        getElapsedTime: j(),
                      }),
                      this.send(!1, n, a, t),
                      !1
                    );
                  }
                  return t.push(a), !0;
                });
              this.currentStalled &&
                (this.stalledDurationRemainder = (0, f.cb)(
                  (0, f.cs)(e, 1e3),
                  this.currentStalled.duration,
                )),
                r.length && (r[0] = r[0] - this.stalledDurationRemainder),
                (this.timer = new B(({ count: e }) => {
                  let i = this.currentStalled
                    ? this.currentStalled.expectedStalled
                    : this.getExpectedStalled();
                  if (e > 0) {
                    let r = (0, f.my)(t[e - 1]),
                      n = this.currentStalled
                        ? this.currentStalled.id
                        : this.stalledId++;
                    !this.currentStalled && this.stalledCount++,
                      (this.currentStalled = {
                        id: n,
                        expectedStalled: i,
                        duration: r,
                        getElapsedTime: j(),
                      }),
                      this.send(!1, i, r, n);
                  }
                  return e >= r.length
                    ? (this.destroyTimer(), 1 / 0)
                    : 1e3 * r[e];
                })),
                this.timer.start();
            } else {
              if (this.currentStalled) {
                var r;
                let { expectedStalled: t, id: e } = this.currentStalled,
                  i = (0, f.IH)(
                    void 0 === (r = this.currentStalled)
                      ? (0, f.my)(0)
                      : (0, f.IH)(
                          r.duration,
                          (0, f.cs)(r.getElapsedTime(), 1e3),
                        ),
                    this.stalledDurationRemainder,
                  );
                this.send(!0, t, (0, f.IH)(i), e),
                  (this.currentStalled = void 0),
                  (this.stalledDurationRemainder = (0, f.my)(0)),
                  (this.stalledTime = (0, f.IH)(i, this.stalledTime));
                let n =
                  this.getState()?.adState?.state === c.PLAYING
                    ? h.AdOther
                    : h.Other;
                this.setExpectedStalled(R(n, void 0));
              }
              this.destroyTimer();
            }
          }
        }
        getStalledHistory() {
          let { stalledCount: t, stalledTime: e } = this;
          return { stalledCount: (0, f.zq)(t), stalledTime: (0, f.$2)(e) };
        }
        clearStalledHistory() {
          (this.stalledCount = 0), (this.stalledTime = (0, f.my)(0));
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
          let { getElapsedTime: e, reason: r } = t;
          return (
            !(O.indexOf(r) > -1) &&
            (!this.currentStalled ||
              this.currentStalled.expectedStalled !== t) &&
            e() >= C
          );
        }
        getExpectedStalled() {
          let t = this.expectedStalled;
          return this.isExpiredStalled(t) ? R(h.Other, void 0) : t;
        }
        destroyTimer() {
          this.timer && (this.timer.destroy(), (this.timer = void 0));
        }
        send(t, e, r, i) {
          let { reason: n, details: a } = e,
            o = { ...a, stalledDuration: r, stalledId: i },
            s = this.getState();
          if (s) {
            let { muted: t, remainingBufferedTime: e, videoTracks: r } = s,
              i = r.find((t) => t.selected);
            o = { ...o, remainingBufferedTime: e, videoTrack: i, isMuted: t };
          }
          this.logEvent({
            name: t ? "StalledEnd" : "Stalled",
            data: o,
            labels: { reason: n },
          });
        }
      }
      let H = (t) =>
        "hidden" in t
          ? "hidden"
          : "webkitHidden" in t
            ? "webkitHidden"
            : void 0;
      function U(t, e = !0) {
        let r = H(t);
        return r ? !t[r] : e;
      }
      let Z = [
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
        (0, f.Vo)(3e4);
      class $ {
        lastUpdate = void 0;
        watchedTime = (0, f.my)(0);
        calc(t, e, r) {
          if (void 0 !== this.lastUpdate) {
            var i, n;
            let r =
              ((i = (0, f.cs)((0, f.cb)(t, this.lastUpdate.videoTime), e)),
              (n = (0, f.cs)((0, f.Vo)(this.lastUpdate.getElapsedTime()), 1e3)),
              (0, f.my)(Math.max(0, i >= 0 && i <= n + 0.5 ? i : n)));
            this.watchedTime = (0, f.IH)(this.watchedTime, r);
          }
          this.lastUpdate = r ? { getElapsedTime: j(), videoTime: t } : void 0;
        }
        get() {
          return this.watchedTime;
        }
        restoreLastUpdate() {
          this.lastUpdate = void 0;
        }
      }
      class G {
        getState;
        onChange;
        intervalId = void 0;
        watchedTimeCounter = new $();
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
              playbackRate: r = 1,
              playingState: i,
              adState: n,
            } = t,
            a = n?.state === c.PLAYING;
          this.watchedTimeCounter.calc(e, r, i === u.PLAY && !a),
            this.onChange?.(this.watchedTimeCounter.get());
        };
        reset() {
          (this.watchedTimeCounter = new $()),
            this.onChange?.(this.watchedTimeCounter.get());
        }
        getWatchedTime() {
          return this.watchedTimeCounter.get();
        }
        destroy() {
          clearInterval(this.intervalId), (this.intervalId = void 0);
        }
      }
      let Y = "__VPUID_INLINE__",
        Q = "vpuid";
      class q {
        prefix;
        path;
        constructor(t = {}) {
          (this.prefix = t.prefix || "ss_"), (this.path = t.path || "/");
        }
        getItem(t) {
          let e = `${this.prefix}${t}=`,
            r = document.cookie.indexOf(e);
          if (-1 === r) return null;
          let i = r + e.length,
            n = document.cookie.indexOf(";", i);
          return document.cookie.substring(
            i,
            -1 === n ? document.cookie.length : n,
          );
        }
        setItem(t, e) {
          let r = `${this.prefix}${t}=${e}; path=${this.path}; samesite=strict`;
          document.cookie = r;
        }
        removeItem(t) {
          document.cookie = `${this.prefix}${t}=; path=${this.path}; max-age=-1`;
        }
        clear() {
          let t = document.cookie;
          if (!t) return;
          let e = t.split(";");
          for (let t = 0; t < e.length; t++) {
            let r = e[t].indexOf("=");
            if (-1 === r) continue;
            let i = e[t].substring(0, r).trim();
            i.startsWith(this.prefix) &&
              this.removeItem(i.substring(this.prefix.length));
          }
        }
        get length() {
          let t = 0,
            e = document.cookie;
          if (!e) return t;
          let r = e.split(";");
          for (let e = 0; e < r.length; e++) {
            let i = r[e].indexOf("=");
            -1 !== i &&
              r[e].substring(0, i).trim().startsWith(this.prefix) &&
              t++;
          }
          return t;
        }
        key(t) {
          if (t < 0) return null;
          let e = -1,
            r = document.cookie;
          if (!r) return null;
          let i = r.split(";");
          for (let r = 0; r < i.length; r++) {
            let n = i[r].indexOf("=");
            if (-1 === n) continue;
            let a = i[r].substring(0, n).trim();
            if (a.startsWith(this.prefix) && ++e === t)
              return a.substring(this.prefix.length);
          }
          return null;
        }
        static isSupported() {
          try {
            let t = "__test_cookie__",
              e = new q();
            e.setItem(t, "1");
            let r = e.getItem(t);
            return e.removeItem(t), "1" === r;
          } catch {
            return !1;
          }
        }
      }
      class K {
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
      function J(t) {
        let e = "__test_storage__";
        try {
          return t.setItem(e, "test"), t.removeItem(e), !0;
        } catch {
          return !1;
        }
      }
      class X {
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
                      return J(window.localStorage);
                    case "session":
                      return J(window.sessionStorage);
                    case "cookie":
                      return q.isSupported();
                    case "memory":
                      return !0;
                    default:
                      throw Error(`Unsupported storage type: ${t}`);
                  }
                } catch {
                  return !1;
                }
              })(t)
            )
              return this.createStorage(t);
          return new K();
        }
        createStorage(t) {
          switch (t) {
            case "local":
            default:
              return window.localStorage;
            case "session":
              return window.sessionStorage;
            case "cookie":
              return new q();
            case "memory":
              return new K();
          }
        }
      }
      let z = new X().getStorage(),
        tt = new X(["local", "memory"]).getStorage(),
        te = new X(["session", "memory"]).getStorage();
      function tr(t) {
        return {
          getItem(e) {
            try {
              return t.getItem(e);
            } catch {
              return null;
            }
          },
          setItem(e, r) {
            try {
              t.setItem(e, r);
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
      let ti = tr(z);
      tr(tt), tr(te);
      var tn = r(10375);
      let ta = "qwertyuiopasdfghjklzxcvbnm0123456789",
        to =
          -1 === Y.indexOf("__VPUID")
            ? Y
            : (ti.getItem(Q) ??
              (function () {
                let t = [];
                for (let e = 0; e < 10; e++)
                  t.push(ta[Math.floor((0, tn.M)() * ta.length)]);
                return t.join("");
              })());
      function ts() {
        return (0, f.Vo)((0, E.m6)());
      }
      ti.setItem(Q, to);
      class tl {
        lastDateNow;
        lastPerformanceNow;
        total = (0, f.Vo)(0);
        interval;
        getTime;
        constructor(t = E.no) {
          (this.getTime = t),
            (this.lastDateNow = ts()),
            (this.lastPerformanceNow = t()),
            (this.interval = setInterval(this.now, 1e3));
        }
        now = () => {
          let t,
            e = ts(),
            r = this.getTime(),
            i = (0, f.cb)(r, this.lastPerformanceNow),
            n = (0, f.cb)(e, this.lastDateNow);
          return (
            (t = n <= 0 ? i : n),
            (this.lastDateNow = e),
            (this.lastPerformanceNow = r),
            (this.total = (0, f.IH)(this.total, t)),
            this.total
          );
        };
        stop() {
          clearInterval(this.interval);
        }
      }
      let tu = {
          enabled: !0,
          events: [l.Watched10Sec, l.Watched20Sec, l.Heartbeat30Sec],
        },
        tc = { logVersion: "1.2.0" };
      class td {
        static getVpuid() {
          return to;
        }
        watchedTimeTracker;
        fatalTracker;
        playbackTracker;
        playerAliveController;
        stalledController;
        remoteProgressSavingInfo = tu;
        staticParams = {};
        playerInfo;
        useOfDeprecatedMethodIsLogged = !1;
        timer;
        timerStartTime = Date.now();
        sendLog;
        getState;
        destroyed = !1;
        wasInitBufferingLogged = !1;
        externalStalledDuration = (0, f.Vo)(0);
        initialStalledDuration = (0, f.Vo)(0);
        wasInitBufferingHandled = !1;
        initialStalledTimestamp;
        initialStalledTimestampStop;
        eventIndex = 0;
        reportNumber = 0;
        sourceIndexes = { current: 0, last: 0 };
        constructor({ sendLog: t, playerInfo: e, getState: r }) {
          (this.playerInfo = e),
            (this.sendLog = t),
            (this.getState = r),
            (this.playbackTracker = new g({
              onEvent: (t) => this.logEvent({ name: t }),
            })),
            (this.stalledController = new W({
              getState: this.getState,
              logEvent: (t) => this.logEvent(t),
            })),
            (this.watchedTimeTracker = new G(r, (t) =>
              this.playbackTracker.onWatchedTimeChange(t),
            )),
            (this.playerAliveController = new _({
              getState: r,
              onFlushStates: (t) =>
                this.logEvent({ name: "PlayerAlive", data: { states: t } }),
              getTimestamp: () => this.getLogTimestamp(),
              stalledController: this.stalledController,
              getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
            })),
            (this.fatalTracker = new v()),
            this.initOnVisibilityChangeHandling(),
            (this.timer = new tl());
        }
        getLogTimestamp() {
          return Math.round(this.timerStartTime + this.timer.now());
        }
        initOnVisibilityChangeHandling() {
          let t = (function (t, e) {
            let r = (function (t) {
              let e = H(t);
              if (e) return e.replace(/hidden/i, "visibilitychange");
            })(t);
            if (!r) return V;
            let i = () => {
              e(U(t));
            };
            return t.addEventListener(r, i), () => t.removeEventListener(r, i);
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
            M(
              Error(
                "Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.",
              ),
            );
        }
        setPlayingState(t) {
          this.playbackTracker.onPlayingStateChange(t),
            this.handleInitialBuffering(),
            t === u.BUFFERING ? this.setBuffering(!0) : this.setBuffering(!1);
        }
        logEvent(t, e) {
          if (this.destroyed) return;
          let r = this.getFullEventLog(t, e),
            i = this.getUrlParams(r.eventType, r.eventName, t.labels);
          this.sendData(r, i);
        }
        logError({ error: t, labels: e, extraRootFields: r }, i) {
          if (this.destroyed) return;
          t.isFatal = this.fatalTracker.checkIsFatal(
            t.isFatal,
            this.staticParams.streamUrl,
          );
          let n = this.getFullErrorLog({
              error: t,
              labels: e,
              extraRootFields: r,
              sourceIndex: i,
            }),
            a = this.getUrlParams(n.eventType, n.eventName, e);
          this.sendData(n, a);
        }
        getUrlParams(t, e, r) {
          return {
            ...r,
            [this.playerInfo.service]: this.playerInfo.version,
            [t]: String(e),
          };
        }
        getFullEventLog(t, e) {
          let r = this.getState(),
            i = {
              ...this.staticParams.labels,
              ...t.labels,
              videoType: r?.videoType,
            },
            n = Z.includes(t.name)
              ? { ...t.data, ...this.getDataToSend(r) }
              : t.data,
            a = {};
          return (
            this.remoteProgressSavingInfo.events.includes(t.name) &&
              r &&
              (a.playbackProgress = { time: r.currentTime }),
            {
              ...tc,
              ...this.staticParams,
              ...t.extraRootFields,
              ...a,
              ...this.playerInfo,
              vpuid: to,
              eventType: "event",
              eventName: t.name,
              timestamp: this.getLogTimestamp(),
              documentIsVisible: U(document),
              eventIndex: this.eventIndex,
              data: n,
              labels: i,
              sourceIndex: e ?? this.sourceIndexes.current,
            }
          );
        }
        getFullErrorLog({
          error: t,
          labels: e,
          extraRootFields: r,
          sourceIndex: i,
        }) {
          let n = { ...this.staticParams.labels, ...e };
          return (
            (t.details =
              L(() =>
                "string" == typeof t.details
                  ? t.details
                  : JSON.stringify(t.details),
              ) || t.details),
            {
              ...tc,
              ...this.playerInfo,
              ...this.staticParams,
              ...r,
              vpuid: to,
              eventType: t.isFatal ? "fatal" : "error",
              eventName: String(t.code),
              timestamp: this.getLogTimestamp(),
              documentIsVisible: U(document),
              eventIndex: this.eventIndex,
              data: t,
              labels: n,
              sourceIndex: i ?? this.sourceIndexes.current,
            }
          );
        }
        getDataToSend(t) {
          if (!t) return {};
          let {
            duration: e,
            currentTime: r,
            utcStartTime: i,
            isFullscreen: n,
            volume: a,
            muted: o,
          } = t;
          return {
            watchedSec: this.watchedTimeTracker.getWatchedTime(),
            duration: isNaN(e) ? void 0 : e,
            time: r,
            utcTime: void 0 === i ? void 0 : i + r,
            isFullscreen: n,
            isMuted: o || 0 === a,
          };
        }
        sendData(t, e) {
          void 0 !== t && (L(() => this.sendLog(t, e), M), this.eventIndex++);
        }
        checkStalledReason(t) {
          return this.stalledController.getCurrentStalledReason() === t;
        }
        setBuffering(t, e) {
          this.stalledController.setBuffering(t, e);
        }
        setExpectedBuffering({ reason: t, details: e }) {
          switch ((this.checkInitBuffering(t), t)) {
            case h.SetSource:
              this.setBuffering(!1), this.clearBufferingHistory();
              break;
            case h.Init:
              break;
            default:
              this.checkStalledReason(t) || this.setBuffering(!1);
          }
          return this.stalledController.setExpectedStalled(R(t, e));
        }
        checkInitBuffering(t) {
          this.wasInitBufferingLogged || t === h.Init || this.onInitBuffering();
        }
        setExternalStalledDuration(t) {
          let e = this.getExpectedStalled();
          e.reason === h.Init &&
            t &&
            ((e.details = { externalStalledDuration: (0, f.cs)(t, 1e3) }),
            this.setExpectedBuffering(e));
        }
        startInitBufferingTimer() {
          this.initialStalledTimestamp = (0, f.Vo)((0, E.no)());
        }
        stopInitBufferingTimer() {
          this.initialStalledTimestampStop = (0, f.Vo)((0, E.no)());
        }
        onInitBuffering(t) {
          if (this.wasInitBufferingLogged) return;
          let e =
              this.initialStalledTimestamp && !this.initialStalledTimestampStop,
            r =
              this.initialStalledTimestamp && this.initialStalledTimestampStop;
          (this.initialStalledDuration = e
            ? (0, f.cb)((0, f.Vo)((0, E.no)()), this.initialStalledTimestamp)
            : r
              ? (0, f.cb)(
                  this.initialStalledTimestampStop,
                  this.initialStalledTimestamp,
                )
              : (0, f.Vo)(0)),
            (this.externalStalledDuration = t ?? (0, f.Vo)(0));
          let { playingState: i } = this.getState() || {};
          "pause" !== i && this.handleInitialBuffering(),
            (this.wasInitBufferingLogged = !0),
            (this.initialStalledTimestamp = void 0),
            (this.initialStalledTimestampStop = void 0);
        }
        handleInitialBuffering() {
          this.wasInitBufferingHandled ||
            (this.externalStalledDuration &&
              this.setExternalStalledDuration(this.externalStalledDuration),
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
            M(
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
          this.logEvent({ name: "CreatePlayer", data: t, extraRootFields: e });
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
        onSetSource(t, e, r) {
          this.flushStates(),
            (this.sourceIndexes.current =
              this.sourceIndexes.last > this.sourceIndexes.current
                ? this.sourceIndexes.last
                : ++this.sourceIndexes.last),
            this.watchedTimeTracker.reset(),
            r && this.setStaticParams(r),
            this.logEvent({ name: "SetSource", data: t }),
            this.setExpectedBuffering({ reason: h.SetSource, details: e });
          let i = this.getState()?.playingState;
          i !== u.PAUSE && i !== u.END && this.setBuffering(!0);
        }
        sendReportLog(t, e, r = !0) {
          let i = e ?? this.generateReportId();
          return (
            this.logEvent({
              name: "ReportLog",
              data: { reportId: i, reported: r, reportData: t },
            }),
            i
          );
        }
        generateReportId() {
          return `${this.playerInfo.vsid}x${this.reportNumber++}`;
        }
        onExpectedBuffering({ reason: t, details: e }) {
          return (
            this.checkInitBuffering(t),
            this.stalledController.setExpectedStalled(R(t, e))
          );
        }
        onSeek(t) {
          this.setExpectedBuffering({ reason: h.Seek, details: t });
        }
        onVideoTrackChange(t) {
          this.setExpectedBuffering({ reason: h.VideoTrackChange, details: t });
        }
        onAudioTrackChange(t) {
          this.setExpectedBuffering({ reason: h.AudioTrackChange, details: t });
        }
        onRecover(t) {
          this.setExpectedBuffering({ reason: h.Recover, details: t });
        }
        onMediaError(t) {
          this.setExpectedBuffering({ reason: h.MediaError, details: t });
        }
        onNetworkStatusChange(t) {
          this.setExpectedBuffering({ reason: h.Offline, details: t });
        }
        onRepresentationsChange(t) {
          this.setExpectedBuffering({
            reason: h.RepresentationsChange,
            details: t,
          });
        }
        onLiveEdge(t) {
          this.setExpectedBuffering({ reason: h.LiveEdge, details: t });
        }
        onAdStart(t) {
          this.setExpectedBuffering({ reason: h.AdStart, details: t });
        }
        onAdBetween(t) {
          this.setExpectedBuffering({ reason: h.AdBetween, details: t });
        }
        onAdEnd(t) {
          this.setExpectedBuffering({ reason: h.AdEnd, details: t });
        }
      }
    },
    62661: function (t, e, r) {
      "use strict";
      r.d(e, {
        m6: function () {
          return l;
        },
        no: function () {
          return p;
        },
      });
      var i = r(27851);
      let n = {}.toString,
        a = /\[object (\w+)\]/,
        o = (t) => {
          let e = n.call(t);
          if (!e) return null;
          let r = e.match(a);
          return (r && r[1]) || null;
        };
      function s(t) {
        return "function" == typeof t || "Function" === o(t);
      }
      let l =
          Date && s(Date.now) ? () => Date.now() : () => new Date().getTime(),
        u = "undefined" == typeof window ? void 0 : window.performance,
        c = u && s(u.now),
        d = u && u.timing && u.timing.navigationStart,
        h =
          u && u.timeOrigin ? u.timeOrigin : d ? u.timing.navigationStart : l(),
        m = 0,
        f = () => (m = Math.max(l() - h, m)),
        p = () => (0, i.Vo)(c ? u.now() : f());
    },
    83190: function (t, e, r) {
      "use strict";
      r.d(e, {
        y: function () {
          return o;
        },
      });
      var i,
        n =
          ((i = function (t, e) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        a = function (t, e) {
          var r = {};
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) &&
              0 > e.indexOf(i) &&
              (r[i] = t[i]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, i = Object.getOwnPropertySymbols(t);
              n < i.length;
              n++
            )
              0 > e.indexOf(i[n]) &&
                Object.prototype.propertyIsEnumerable.call(t, i[n]) &&
                (r[i[n]] = t[i[n]]);
          return r;
        },
        o = (function (t) {
          function e(r, i) {
            void 0 === i && (i = {});
            var n = this,
              o = i.code,
              s = i.data,
              l = a(i, ["code", "data"]),
              u = r || "Internal error";
            return (
              Object.defineProperty((n = t.call(this, u, l) || this), "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseException",
              }),
              Object.defineProperty(n, "message", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(n, "stack", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (n.message = u),
              (n.code = void 0 === o ? "E_INTERNAL" : o),
              (n.data = void 0 === s ? {} : s),
              (n.stack = Error(u).stack),
              Object.setPrototypeOf(n, e.prototype),
              n
            );
          }
          return n(e, t), e;
        })(Error);
    },
    54765: function (t, e, r) {
      "use strict";
      r.d(e, {
        wi: function () {
          return n;
        },
      });
      var i = r(59018),
        n = (function () {
          function t(t) {
            Object.defineProperty(this, "observableValue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              (this.observableValue = (0, i.td)(t));
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
            (this.observableValue = (0, i.Fl)(t)),
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
                this.observableValue.subscribe(function (r) {
                  r !== e.prevValueByListener.get(t) &&
                    (e.prevValueByListener.set(t, r), t(r));
                })
              );
            },
          });
      })();
    },
  },
]);
