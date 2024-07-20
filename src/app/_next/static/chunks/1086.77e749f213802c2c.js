"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1086, 435, 4960, 7456, 2808, 685],
  {
    70435: function (t, e, n) {
      n.d(e, {
        config: function () {
          return u;
        },
      });
      var r = n(49080),
        o = n(92808),
        c = n(21535);
      let a = () => ({
          rumId: "ru.music.frontend",
          project: "music.frontend.desktop",
          service: "frontend-desktop",
          platform: "desktop",
        }),
        i = () => ({ project: "music.frontend.desktop", platform: "desktop" }),
        u = () => {
          var t, e;
          return {
            client: "YandexMusicWeb/1.0",
            dev: { panel: !0 },
            logger: {
              uaDisabled: (t = !!c.env.SERVER_UNIFIED_AGENT_DISABLED),
              uaServerAddress:
                null !== (e = c.env.SERVER_UNIFIED_AGENT_ADDRESS) &&
                void 0 !== e
                  ? e
                  : "http://localhost:12344",
              errorBooster: {
                ...i(),
                page: "window.location.pathname",
                version: c.env.APP_VERSION || "",
                environment: "production",
                unhandledRejection: !0,
                uncaughtException: !0,
                resourceFails: !0,
              },
            },
            oauthCredentials: {
              host: "https://oauth.yandex.".concat(r.M),
              clientId: "97fe03033fa34407ac9bcf91d5afed5b",
            },
            tvm: {
              tvmtoolAuthToken: c.env.TVMTOOL_LOCAL_AUTHTOKEN,
              self: "music_test",
              destinations: ["blackbox"],
              host: "http://localhost:8001",
              enabled: !1,
            },
            rumSettings: {
              ...a(),
              page: "window.location.pathname",
              heroElement: "body",
              version: c.env.APP_VERSION || "",
              environment: "production",
            },
            passportCredentials: {
              host: "https://passport.yandex.".concat(r.M),
              origin: "music_desktop",
            },
            blackbox: {
              host: "http://blackbox.envoy.localhost:9080",
              enabled: !1,
            },
            metrikaSettings: (0, o.k)(),
          };
        };
    },
    34960: function (t, e, n) {
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
    64069: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
      });
      var r = n(35188),
        o = n(3872),
        c = n(21749);
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
    92808: function (t, e, n) {
      n.d(e, {
        k: function () {
          return u;
        },
      });
      var r = n(35188),
        o = n(3872),
        c = n(21749);
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
    80685: function (t, e, n) {
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
    61747: function (t, e, n) {
      var r = n(92089),
        o = n(77163),
        c = n(62503),
        a = n(51866);
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
    86930: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return G;
        },
      });
      var r,
        o,
        c,
        a,
        i,
        u,
        s = n(46334),
        f = n(10085),
        l = n(92089),
        d = function (t, e, n) {
          ((void 0 === n || (0, l.Z)(t[e], n)) && (void 0 !== n || e in t)) ||
            (0, f.Z)(t, e, n);
        },
        v = function (t, e, n) {
          for (var r = -1, o = Object(t), c = n(t), a = c.length; a--; ) {
            var i = c[++r];
            if (!1 === e(o[i], i, o)) break;
          }
          return t;
        },
        p = n(52992),
        b = n(45155),
        h = n(80190),
        Z = n(46726),
        y = n(16938),
        m = n(65856),
        k = n(77163),
        O = n(2495),
        _ = n(27661),
        S = n(79627),
        E = n(51866),
        g = n(30014),
        N = n(85770),
        A = Object.prototype,
        I = Function.prototype.toString,
        W = A.hasOwnProperty,
        P = I.call(Object),
        w = function (t) {
          if (!(0, O.Z)(t) || "[object Object]" != (0, g.Z)(t)) return !1;
          var e = (0, N.Z)(t);
          if (null === e) return !0;
          var n = W.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && I.call(n) == P;
        },
        B = n(67109),
        C = function (t, e) {
          if (
            ("constructor" !== e || "function" != typeof t[e]) &&
            "__proto__" != e
          )
            return t[e];
        },
        T = n(78141),
        D = n(42146),
        M = function (t, e, n, r, o, c, a) {
          var i = C(t, n),
            u = C(e, n),
            s = a.get(u);
          if (s) {
            d(t, n, s);
            return;
          }
          var f = c ? c(i, u, n + "", t, e, a) : void 0,
            l = void 0 === f;
          if (l) {
            var v = (0, m.Z)(u),
              g = !v && (0, _.Z)(u),
              N = !v && !g && (0, B.Z)(u);
            ((f = u), v || g || N)
              ? (0, m.Z)(i)
                ? (f = i)
                : (0, O.Z)(i) && (0, k.Z)(i)
                  ? (f = (0, h.Z)(i))
                  : g
                    ? ((l = !1), (f = (0, p.Z)(u, !0)))
                    : N
                      ? ((l = !1), (f = (0, b.Z)(u, !0)))
                      : (f = [])
              : w(u) || (0, y.Z)(u)
                ? ((f = i), (0, y.Z)(i))
                  ? (f = (0, T.Z)(i, (0, D.Z)(i)))
                  : (!(0, E.Z)(i) || (0, S.Z)(i)) && (f = (0, Z.Z)(u))
                : (l = !1);
          }
          l && (a.set(u, f), o(f, u, r, c, a), a.delete(u)), d(t, n, f);
        },
        R = function t(e, n, r, o, c) {
          e !== n &&
            v(
              n,
              function (a, i) {
                if ((c || (c = new s.Z()), (0, E.Z)(a))) M(e, n, i, r, t, o, c);
                else {
                  var u = o ? o(C(e, i), a, i + "", e, n, c) : void 0;
                  void 0 === u && (u = a), d(e, i, u);
                }
              },
              D.Z,
            );
        },
        j = function (t) {
          return t;
        },
        L = function (t, e, n) {
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
        x = Math.max,
        F = n(28207),
        U = F.Z
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
          : j,
        V = Date.now,
        X =
          ((a = 0),
          (i = 0),
          function () {
            var t = V(),
              e = 16 - (t - i);
            if (((i = t), e > 0)) {
              if (++a >= 800) return arguments[0];
            } else a = 0;
            return U.apply(void 0, arguments);
          }),
        H = n(61747),
        G =
          ((u = function (t, e, n) {
            R(t, e, n);
          }),
          (r = function (t, e) {
            var n = -1,
              r = e.length,
              o = r > 1 ? e[r - 1] : void 0,
              c = r > 2 ? e[2] : void 0;
            for (
              o = u.length > 3 && "function" == typeof o ? (r--, o) : void 0,
                c &&
                  (0, H.Z)(e[0], e[1], c) &&
                  ((o = r < 3 ? void 0 : o), (r = 1)),
                t = Object(t);
              ++n < r;

            ) {
              var a = e[n];
              a && u(t, a, n, o);
            }
            return t;
          }),
          X(
            ((c = x(void 0 === (c = o) ? r.length - 1 : c, 0)),
            function () {
              for (
                var t = arguments, e = -1, n = x(t.length - c, 0), o = Array(n);
                ++e < n;

              )
                o[e] = t[c + e];
              e = -1;
              for (var a = Array(c + 1); ++e < c; ) a[e] = t[e];
              return (a[c] = j(o)), L(r, this, a);
            }),
            r + "",
          ));
    },
    19190: function (t, e, n) {
      n.d(e, {
        s: function () {
          return i;
        },
      });
      var r = n(30014),
        o = n(65856),
        c = n(2495);
      let a = ["1", "true", "on", "yes"];
      function i(t) {
        return (
          !0 === t ||
          1 === t ||
          !!(
            ("string" == typeof t ||
              (!(0, o.Z)(t) &&
                (0, c.Z)(t) &&
                "[object String]" == (0, r.Z)(t))) &&
            a.includes(t.trim().toLowerCase())
          )
        );
      }
    },
  },
]);
