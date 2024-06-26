"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6622, 3551, 2138, 3899, 8987, 8979],
  {
    33551: function (t, e, n) {
      n.d(e, {
        config: function () {
          return s;
        },
      });
      var r,
        o,
        c = n(68363),
        a = n(20162),
        i = n(21535);
      let u = () => ({
          rumId: "ru.music.frontend",
          project: "music.frontend.desktop",
          service: "frontend-desktop",
          platform: "desktop",
        }),
        f = () => ({ project: "music.frontend.desktop", platform: "desktop" }),
        s = () => ({
          client: "YandexMusicWeb/1.0",
          dev: { panel: !0 },
          logger: {
            uaDisabled: (r = !!i.env.SERVER_UNIFIED_AGENT_DISABLED),
            uaServerAddress:
              null !== (o = i.env.SERVER_UNIFIED_AGENT_ADDRESS) && void 0 !== o
                ? o
                : "http://localhost:12344",
            errorBooster: {
              ...f(),
              page: "window.location.pathname",
              version: i.env.APP_VERSION || "",
              environment: "production",
              unhandledRejection: !0,
              uncaughtException: !0,
              resourceFails: !0,
            },
          },
          oauthCredentials: {
            host: "https://oauth.yandex.".concat(c.M),
            clientId: "97fe03033fa34407ac9bcf91d5afed5b",
          },
          tvm: {
            tvmtoolAuthToken: i.env.TVMTOOL_LOCAL_AUTHTOKEN,
            self: "music_test",
            destinations: ["blackbox"],
            host: "http://localhost:32272",
            enabled: !1,
          },
          rumSettings: {
            ...u(),
            page: "window.location.pathname",
            heroElement: "body",
            version: i.env.APP_VERSION || "",
            environment: "production",
          },
          passportCredentials: {
            host: "https://passport.yandex.".concat(c.M),
            origin: "music_desktop",
          },
          blackbox: {
            host: "http://blackbox.yandex.net/blackbox",
            enabled: !1,
          },
          metrikaSettings: (0, a.k)(),
        });
    },
    52138: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
      });
      var r = n(28307),
        o = n(93991),
        c = n(38060);
      let a = {
          MACOS: "05c45ae8-b869-4ec1-848c-4b314fbadc17",
          WINDOWS: "0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",
          WEB: "b200fd55-5a52-4fa2-b5db-d163e986a61d",
        },
        i = () => {
          switch ((0, o.y)((0, r.X)())) {
            case c.B.MACOS:
              return a.MACOS;
            case c.B.WINDOWS:
              return a.WINDOWS;
          }
          return a.WEB;
        };
    },
    20162: function (t, e, n) {
      n.d(e, {
        k: function () {
          return u;
        },
      });
      var r = n(28307),
        o = n(93991),
        c = n(38060);
      let a = { MACOS: "95673848", WINDOWS: "95673843", WEB: "95673834" },
        i = () => {
          switch ((0, o.y)((0, r.X)())) {
            case c.B.MACOS:
              return a.MACOS;
            case c.B.WINDOWS:
              return a.WINDOWS;
          }
          return a.WEB;
        },
        u = () => ({
          id: i(),
          webvisor: !0,
          clickmap: !0,
          trackLinks: !0,
          accurateTrackBounce: !0,
          deffer: !0,
        });
    },
    30518: function (t, e, n) {
      n.d(e, {
        s: function () {
          return o;
        },
      });
      var r = n(21535);
      let o = (t) => {
        if (r.env.NEXT_PUBLIC_USE_BFF) {
          var e;
          let t =
            null !== (e = r.env.NEXT_PUBLIC_BFF_HOST) && void 0 !== e ? e : "";
          return "".concat(t, "/api");
        }
        return t;
      };
    },
    88979: function (t, e, n) {
      n.d(e, {
        c: function () {
          return r;
        },
      });
      let r = {
        statusCodes: {
          408: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          429: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          500: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          502: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          503: { retryPolicy: "constant-backoff", attempts: [1e3, 3e3] },
          504: { retryPolicy: "constant-backoff", attempts: [2e3, 5e3] },
          NON_HTTP_ERROR: {
            retryPolicy: "constant-backoff",
            attempts: [1e3, 1e3],
          },
          TIMEOUT: { retryPolicy: "constant-backoff", attempts: [500] },
        },
        totalRequestsLimit: 3,
      };
    },
    43422: function (t, e, n) {
      var r = n(87979),
        o = n(71050),
        c = n(12082),
        a = n(8525);
      e.Z = function (t, e, n) {
        if (!(0, a.Z)(n)) return !1;
        var i = typeof e;
        return (
          ("number" == i
            ? !!((0, o.Z)(n) && (0, c.Z)(e, n.length))
            : "string" == i && e in n) && (0, r.Z)(n[e], t)
        );
      };
    },
    91525: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return H;
        },
      });
      var r,
        o,
        c,
        a,
        i,
        u = n(71067),
        f = n(95069),
        s = n(87979),
        l = function (t, e, n) {
          ((void 0 === n || (0, s.Z)(t[e], n)) && (void 0 !== n || e in t)) ||
            (0, f.Z)(t, e, n);
        },
        d = function (t, e, n) {
          for (var r = -1, o = Object(t), c = n(t), a = c.length; a--; ) {
            var i = c[++r];
            if (!1 === e(o[i], i, o)) break;
          }
          return t;
        },
        p = n(44725),
        v = n(90376),
        b = n(1434),
        h = n(74110),
        y = n(5348),
        Z = n(91045),
        k = n(71050),
        m = n(18786),
        O = n(46964),
        _ = n(96727),
        E = n(8525),
        S = n(47458),
        g = n(32988),
        N = Object.prototype,
        A = Function.prototype.toString,
        I = N.hasOwnProperty,
        W = A.call(Object),
        P = function (t) {
          if (!(0, m.Z)(t) || "[object Object]" != (0, S.Z)(t)) return !1;
          var e = (0, g.Z)(t);
          if (null === e) return !0;
          var n = I.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && A.call(n) == W;
        },
        B = n(59103),
        T = function (t, e) {
          if (
            ("constructor" !== e || "function" != typeof t[e]) &&
            "__proto__" != e
          )
            return t[e];
        },
        w = n(74038),
        C = n(1351),
        D = function (t, e, n, r, o, c, a) {
          var i = T(t, n),
            u = T(e, n),
            f = a.get(u);
          if (f) {
            l(t, n, f);
            return;
          }
          var s = c ? c(i, u, n + "", t, e, a) : void 0,
            d = void 0 === s;
          if (d) {
            var S = (0, Z.Z)(u),
              g = !S && (0, O.Z)(u),
              N = !S && !g && (0, B.Z)(u);
            ((s = u), S || g || N)
              ? (0, Z.Z)(i)
                ? (s = i)
                : (0, m.Z)(i) && (0, k.Z)(i)
                  ? (s = (0, b.Z)(i))
                  : g
                    ? ((d = !1), (s = (0, p.Z)(u, !0)))
                    : N
                      ? ((d = !1), (s = (0, v.Z)(u, !0)))
                      : (s = [])
              : P(u) || (0, y.Z)(u)
                ? ((s = i), (0, y.Z)(i))
                  ? (s = (0, w.Z)(i, (0, C.Z)(i)))
                  : (!(0, E.Z)(i) || (0, _.Z)(i)) && (s = (0, h.Z)(u))
                : (d = !1);
          }
          d && (a.set(u, s), o(s, u, r, c, a), a.delete(u)), l(t, n, s);
        },
        M = function t(e, n, r, o, c) {
          e !== n &&
            d(
              n,
              function (a, i) {
                if ((c || (c = new u.Z()), (0, E.Z)(a))) D(e, n, i, r, t, o, c);
                else {
                  var f = o ? o(T(e, i), a, i + "", e, n, c) : void 0;
                  void 0 === f && (f = a), l(e, i, f);
                }
              },
              C.Z,
            );
        },
        R = function (t) {
          return t;
        },
        x = function (t, e, n) {
          switch (n.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, n[0]);
            case 2:
              return t.call(e, n[0], n[1]);
            case 3:
              return t.call(e, n[0], n[1], n[2]);
          }
          return t.apply(e, n);
        },
        j = Math.max,
        F = n(17619),
        L = F.Z
          ? function (t, e) {
              return (0, F.Z)(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  return e;
                },
                writable: !0,
              });
            }
          : R,
        U = Date.now,
        V =
          ((c = 0),
          (a = 0),
          function () {
            var t = U(),
              e = 16 - (t - a);
            if (((a = t), e > 0)) {
              if (++c >= 800) return arguments[0];
            } else c = 0;
            return L.apply(void 0, arguments);
          }),
        X = n(43422),
        H =
          ((i = function (t, e, n) {
            M(t, e, n);
          }),
          V(
            ((o = j(
              ((o = void 0),
              (r = function (t, e) {
                var n = -1,
                  r = e.length,
                  o = r > 1 ? e[r - 1] : void 0,
                  c = r > 2 ? e[2] : void 0;
                for (
                  o =
                    i.length > 3 && "function" == typeof o ? (r--, o) : void 0,
                    c &&
                      (0, X.Z)(e[0], e[1], c) &&
                      ((o = r < 3 ? void 0 : o), (r = 1)),
                    t = Object(t);
                  ++n < r;

                ) {
                  var a = e[n];
                  a && i(t, a, n, o);
                }
                return t;
              }).length - 1),
              0,
            )),
            function () {
              for (
                var t = arguments, e = -1, n = j(t.length - o, 0), c = Array(n);
                ++e < n;

              )
                c[e] = t[o + e];
              e = -1;
              for (var a = Array(o + 1); ++e < o; ) a[e] = t[e];
              return (a[o] = R(c)), x(r, this, a);
            }),
            r + "",
          ));
    },
  },
]);
