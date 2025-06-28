"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4208],
  {
    91480: function (e, t) {
      (t.parse = function (e, t) {
        if ("string" != typeof e)
          throw TypeError("argument str must be a string");
        for (
          var r = {}, i = e.split(o), a = (t || {}).decode || n, s = 0;
          s < i.length;
          s++
        ) {
          var u = i[s],
            c = u.indexOf("=");
          if (!(c < 0)) {
            var l = u.substr(0, c).trim(),
              f = u.substr(++c, u.length).trim();
            '"' == f[0] && (f = f.slice(1, -1)),
              void 0 == r[l] &&
                (r[l] = (function (e, t) {
                  try {
                    return t(e);
                  } catch (t) {
                    return e;
                  }
                })(f, a));
          }
        }
        return r;
      }),
        (t.serialize = function (e, t, n) {
          var o = n || {},
            a = o.encode || r;
          if ("function" != typeof a)
            throw TypeError("option encode is invalid");
          if (!i.test(e)) throw TypeError("argument name is invalid");
          var s = a(t);
          if (s && !i.test(s)) throw TypeError("argument val is invalid");
          var u = e + "=" + s;
          if (null != o.maxAge) {
            var c = o.maxAge - 0;
            if (isNaN(c)) throw Error("maxAge should be a Number");
            u += "; Max-Age=" + Math.floor(c);
          }
          if (o.domain) {
            if (!i.test(o.domain)) throw TypeError("option domain is invalid");
            u += "; Domain=" + o.domain;
          }
          if (o.path) {
            if (!i.test(o.path)) throw TypeError("option path is invalid");
            u += "; Path=" + o.path;
          }
          if (o.expires) {
            if ("function" != typeof o.expires.toUTCString)
              throw TypeError("option expires is invalid");
            u += "; Expires=" + o.expires.toUTCString();
          }
          if (
            (o.httpOnly && (u += "; HttpOnly"),
            o.secure && (u += "; Secure"),
            o.sameSite)
          )
            switch (
              "string" == typeof o.sameSite
                ? o.sameSite.toLowerCase()
                : o.sameSite
            ) {
              case !0:
              case "strict":
                u += "; SameSite=Strict";
                break;
              case "lax":
                u += "; SameSite=Lax";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return u;
        });
      var n = decodeURIComponent,
        r = encodeURIComponent,
        o = /; */,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
    96170: function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new o(r, i || e, a),
          u = n ? n + t : t;
        return (
          e._events[u]
            ? e._events[u].fn
              ? (e._events[u] = [e._events[u], s])
              : e._events[u].push(s)
            : ((e._events[u] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, o, i, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var u,
            c,
            l = this._events[s],
            f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, r), !0;
              case 4:
                return l.fn.call(l.context, t, r, o), !0;
              case 5:
                return l.fn.call(l.context, t, r, o, i), !0;
              case 6:
                return l.fn.call(l.context, t, r, o, i, a), !0;
            }
            for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var h,
              d = l.length;
            for (c = 0; c < d; c++)
              switch (
                (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, t);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, t, r);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, t, r, o);
                  break;
                default:
                  if (!u)
                    for (h = 1, u = Array(f - 1); h < f; h++)
                      u[h - 1] = arguments[h];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== t ||
              (o && !s.once) ||
              (r && s.context !== r) ||
              a(this, i);
          else {
            for (var u = 0, c = [], l = s.length; u < l; u++)
              (s[u].fn !== t ||
                (o && !s[u].once) ||
                (r && s[u].context !== r)) &&
                c.push(s[u]);
            c.length
              ? (this._events[i] = 1 === c.length ? c[0] : c)
              : a(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    53161: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      t.hasCookies = function () {
        var e = new s();
        try {
          var t = "__test";
          e.setItem(t, "1");
          var n = e.getItem(t);
          return e.removeItem(t), "1" === n;
        } catch (e) {
          return !1;
        }
      };
      var i = (r = n(91480)) && r.__esModule ? r : { default: r },
        a = "lS_",
        s = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (this.cookieOptions = Object.assign({ path: "/" }, t)),
              (a = void 0 === t.prefix ? a : t.prefix);
          }
          return (
            o(e, [
              {
                key: "getItem",
                value: function (e) {
                  var t = i.default.parse(document.cookie);
                  return t && t.hasOwnProperty(a + e) ? t[a + e] : null;
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  return (
                    (document.cookie = i.default.serialize(
                      a + e,
                      t,
                      this.cookieOptions,
                    )),
                    t
                  );
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  var t = Object.assign({}, this.cookieOptions, { maxAge: -1 });
                  return (
                    (document.cookie = i.default.serialize(a + e, "", t)), null
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  var e = i.default.parse(document.cookie);
                  for (var t in e)
                    0 === t.indexOf(a) && this.removeItem(t.substr(a.length));
                  return null;
                },
              },
            ]),
            e
          );
        })();
      t.default = s;
    },
    52460: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        r = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (this._data = {});
          }
          return (
            n(e, [
              {
                key: "getItem",
                value: function (e) {
                  return this._data.hasOwnProperty(e) ? this._data[e] : null;
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  return (this._data[e] = String(t));
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  return delete this._data[e];
                },
              },
              {
                key: "clear",
                value: function () {
                  return (this._data = {});
                },
              },
            ]),
            e
          );
        })();
      t.default = r;
    },
    22433: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MemoryStorage =
          t.CookieStorage =
          t.isSupported =
          t.storage =
            void 0);
      var r = a(n(80005)),
        o = a(n(53161)),
        i = a(n(52460));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = null;
      (0, r.default)("localStorage")
        ? (t.storage = s = window.localStorage)
        : (0, r.default)("sessionStorage")
          ? (t.storage = s = window.sessionStorage)
          : (0, r.default)("cookieStorage")
            ? (t.storage = s = new o.default())
            : (t.storage = s = new i.default()),
        (t.default = s),
        (t.storage = s),
        (t.isSupported = r.default),
        (t.CookieStorage = o.default),
        (t.MemoryStorage = i.default);
    },
    80005: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "localStorage",
            t = String(e)
              .replace(/storage$/i, "")
              .toLowerCase();
          if ("local" === t) return i("localStorage");
          if ("session" === t) return i("sessionStorage");
          if ("cookie" === t) return (0, r.hasCookies)();
          if ("memory" === t) return !0;
          throw Error(
            "Storage method `" +
              e +
              "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.",
          );
        });
      var r = n(53161),
        o = "__test";
      function i(e) {
        try {
          var t = window[e];
          return t.setItem(o, "1"), t.removeItem(o), !0;
        } catch (e) {
          return !1;
        }
      }
    },
    61850: function (e, t, n) {
      n.d(t, {
        e: function () {
          return h;
        },
      });
      let r = () => {},
        o = (e) => !0,
        i = "__VPUID_INLINE__",
        a = "vpuid";
      var s = n(22433);
      let u = {
        getItem(e) {
          try {
            return s.getItem(e);
          } catch {
            return null;
          }
        },
        setItem(e, t) {
          try {
            s.setItem(e, t);
          } catch {}
        },
        removeItem(e) {
          try {
            s.removeItem(e);
          } catch {}
        },
        clear() {
          try {
            s.clear();
          } catch {}
        },
      };
      var c = n(10375);
      let l = "qwertyuiopasdfghjklzxcvbnm0123456789",
        f =
          -1 === i.indexOf("__VPUID")
            ? i
            : (u.getItem(a) ??
              (function () {
                let e = [];
                for (let t = 0; t < 10; t++)
                  e.push(l[Math.floor((0, c.M)() * l.length)]);
                return e.join("");
              })());
      async function h(e) {
        let t = [
          ["vpuid", f],
          ["version", e?.version],
          ["testid", isFinite(e.testid) ? String(e.testid) : void 0],
          ["bundleurl", e?.bundleUrl],
        ]
          .filter(([e, t]) => !!t)
          .map((e) => e.join("="))
          .join("&");
        try {
          var n, i, a;
          let s = e.hostname || "frontend.vh.yandex.ru",
            u = t ? `?${t}` : "";
          await ((n = `https://${s}/get_player/${e.file}${u}`),
          (i = e.checkLoad),
          (a = {
            src: n,
            async: !1,
            retries: 3,
            dropCacheOnRetry: !0,
            onBeforeLoad: (e) => {
              e.crossOrigin = "use-credentials";
            },
            checkLoad: i,
          }),
          new Promise((e, t) => {
            !(function (e) {
              let {
                dropCacheOnRetry: t = !1,
                onBeforeLoad: n = r,
                retries: i = 0,
              } = e;
              if (e.checkLoad && e.checkLoad()) {
                e.onLoad && e.onLoad();
                return;
              }
              let a = n,
                s = 0;
              t &&
                i > 0 &&
                (a = (e) => {
                  if ((n(e), s > 0)) {
                    var t;
                    let n;
                    let r = -1 === e.src.indexOf("?") ? "?" : "&",
                      o =
                        ((t = s),
                        Number.isFinite(
                          (n = Math.floor(1e9 * Math.random()) % 1e9),
                        ) || (n = 0),
                        (n += Date.now() % 1e9),
                        String(t) + n.toString(36));
                    e.src += r + o;
                  }
                  s++;
                }),
                (function e(t) {
                  let {
                      src: n,
                      win: i = window,
                      charset: a = "utf-8",
                      async: s = !0,
                      retries: u = 0,
                      onRetry: c = r,
                      retryDelay: l = 0,
                      checkLoad: f = o,
                      onBeforeLoad: h = r,
                      onLoad: d = r,
                      onError: v = r,
                    } = t,
                    p = i.document.createElement("script"),
                    m = (r) => {
                      u > 0
                        ? (c(r), e({ ...t, src: n, retries: u - 1 }))
                        : v(r),
                        p.parentNode?.removeChild(p);
                    };
                  (p.type = "text/javascript"),
                    (p.async = s),
                    (p.onload = () =>
                      f(p) ? d() : m(Error(`checkLoad for ${n} failed`))),
                    (p.onerror = (e) => {
                      try {
                        i.setTimeout(() => {
                          m(e);
                        }, l);
                      } catch {}
                    }),
                    (p.src = n),
                    (p.charset = a),
                    h(p),
                    (function (e) {
                      let t = e.document,
                        n = t.getElementsByTagName("head")[0];
                      return (
                        n ||
                          ((n = t.createElement("head")),
                          t.documentElement.appendChild(n)),
                        n
                      );
                    })(i).appendChild(p);
                })({ ...e, onBeforeLoad: a });
            })({ ...a, onLoad: e, onError: t });
          }));
        } catch (e) {
          throw e;
        }
      }
      u.setItem(a, f);
    },
    32416: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
      });
      function r() {
        return "object" == typeof self
          ? self
          : "object" == typeof window
            ? window
            : globalThis;
      }
    },
    8215: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var r = n(96170);
    },
  },
]);
