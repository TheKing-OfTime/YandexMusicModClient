"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1026, 4328, 5219, 9894],
    {
        3006: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return function (t, n, r) {
                    for (
                        var o = -1, a = Object(t), i = r(t), s = i.length;
                        s--;

                    ) {
                        var c = i[e ? s : ++o];
                        if (!1 === n(a[c], c, a)) break;
                    }
                    return t;
                };
            };
        },
        4286: (e, t, n) => {
            n.d(t, { A: () => s });
            var r = n(69797),
                o = n(68512),
                a = n(51439),
                i = o.A
                    ? function (e, t) {
                          return (0, o.A)(e, "toString", {
                              configurable: !0,
                              enumerable: !1,
                              value: (0, r.A)(t),
                              writable: !0,
                          });
                      }
                    : a.A;
            let s = (0, n(64756).A)(i);
        },
        8140: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(16681),
                o = n(64135);
            let a = function (e) {
                return (0, r.A)(function (t, n) {
                    var r = -1,
                        a = n.length,
                        i = a > 1 ? n[a - 1] : void 0,
                        s = a > 2 ? n[2] : void 0;
                    for (
                        i =
                            e.length > 3 && "function" == typeof i
                                ? (a--, i)
                                : void 0,
                            s &&
                                (0, o.A)(n[0], n[1], s) &&
                                ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = Object(t);
                        ++r < a;

                    ) {
                        var c = n[r];
                        c && e(t, c, r, i);
                    }
                    return t;
                });
            };
        },
        16681: (e, t, n) => {
            n.d(t, { A: () => i });
            var r = n(51439),
                o = n(39514),
                a = n(4286);
            let i = function (e, t) {
                return (0, a.A)((0, o.A)(e, t, r.A), e + "");
            };
        },
        17640: (e, t, n) => {
            n.d(t, { A: () => l });
            var r = n(7993),
                o = n(63920),
                a = n(75893),
                i = Object.prototype,
                s = Function.prototype.toString,
                c = i.hasOwnProperty,
                u = s.call(Object);
            let l = function (e) {
                if (!(0, a.A)(e) || "[object Object]" != (0, r.A)(e)) return !1;
                var t = (0, o.A)(e);
                if (null === t) return !0;
                var n = c.call(t, "constructor") && t.constructor;
                return (
                    "function" == typeof n && n instanceof n && s.call(n) == u
                );
            };
        },
        25219: (e, t, n) => {
            n.d(t, { t: () => s });
            var r = n(49913),
                o = n(70314),
                a = n(61472);
            let i = {
                    WINDOWS: "0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",
                    MACOS: "05c45ae8-b869-4ec1-848c-4b314fbadc17",
                    LINUX: "d2bcdb71-90ac-493b-b68f-024321954a5d",
                    WEB: "b200fd55-5a52-4fa2-b5db-d163e986a61d",
                },
                s = () => {
                    switch ((0, o.t)((0, r.u)())) {
                        case a.V.WINDOWS:
                            return i.WINDOWS;
                        case a.V.MACOS:
                            return i.MACOS;
                        case a.V.LINUX:
                            return i.LINUX;
                    }
                    return i.WEB;
                };
        },
        30923: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(95552),
                o = n(25677);
            let a = function (e) {
                return (0, r.A)(e, (0, o.A)(e));
            };
        },
        31026: (e, t, n) => {
            n.d(t, { config: () => l });
            var r = n(64075),
                o = n(30293),
                a = n(61013),
                i = n(66103),
                s = n(99894),
                c = n(25219),
                u = n(49124);
            let l = () => {
                let e = u.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
                    ? "https://api.music.yandex.".concat(i.B)
                    : "https://api.music.qa.yandex.".concat(i.B);
                return (0, r.A)((0, s.config)(), {
                    resources: { musicExternalApi: { prefixUrl: e } },
                    player: {
                        prefixUrl: e,
                        overembed: !1,
                        secretKey: (0, a.E)(),
                        externalDomain: "localhost.music.yandex.ru",
                    },
                    tvm: {
                        enabled: !0,
                        destinations: ["blackbox"],
                        ...((0, o.toBoolean)(u.env.USE_QYP_TVM)
                            ? {
                                  host: "http://local-music-dev-sas.sas.yp-c.yandex.net/tvm",
                              }
                            : {}),
                    },
                    passportCredentials: {
                        host: "https://passport.yandex.".concat(i.B),
                        origin: "music_desktop",
                    },
                    blackbox: {
                        host: "http://local-music-dev-sas.sas.yp-c.yandex.net/bbm/blackbox",
                        enabled: !0,
                    },
                    oldWebHost: u.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
                        ? "music.yandex.".concat(i.B)
                        : "music.qa.yandex.".concat(i.B),
                    afisha: {
                        clientId: (0, c.t)(),
                        host: "https://widget.afisha.yandex.ru",
                    },
                    iframe: {
                        entityBaseUrl: "https://music.qa.yandex.".concat(i.B),
                    },
                    rsc: { useCache: !1 },
                });
            };
        },
        39514: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(57478),
                o = Math.max;
            let a = function (e, t, n) {
                return (
                    (t = o(void 0 === t ? e.length - 1 : t, 0)),
                    function () {
                        for (
                            var a = arguments,
                                i = -1,
                                s = o(a.length - t, 0),
                                c = Array(s);
                            ++i < s;

                        )
                            c[i] = a[t + i];
                        i = -1;
                        for (var u = Array(t + 1); ++i < t; ) u[i] = a[i];
                        return (u[t] = n(c)), (0, r.A)(e, this, u);
                    }
                );
            };
        },
        43224: (e, t, n) => {
            n.d(t, { A: () => x });
            var r = n(12310),
                o = n(64835),
                a = n(48435);
            let i = function (e, t, n) {
                ((void 0 === n || (0, a.A)(e[t], n)) &&
                    (void 0 !== n || t in e)) ||
                    (0, o.A)(e, t, n);
            };
            var s = n(83642),
                c = n(71773),
                u = n(49138),
                l = n(26276),
                d = n(57174),
                f = n(28165),
                p = n(58666),
                A = n(52490),
                v = n(47247),
                m = n(83669),
                h = n(33546),
                y = n(17640),
                b = n(53178);
            let E = function (e, t) {
                if (
                    ("constructor" !== t || "function" != typeof e[t]) &&
                    "__proto__" != t
                )
                    return e[t];
            };
            var S = n(30923);
            let g = function (e, t, n, r, o, a, s) {
                var g = E(e, n),
                    _ = E(t, n),
                    x = s.get(_);
                if (x) return void i(e, n, x);
                var P = a ? a(g, _, n + "", e, t, s) : void 0,
                    C = void 0 === P;
                if (C) {
                    var T = (0, p.A)(_),
                        U = !T && (0, v.A)(_),
                        k = !T && !U && (0, b.A)(_);
                    (P = _),
                        T || U || k
                            ? (0, p.A)(g)
                                ? (P = g)
                                : (0, A.A)(g)
                                  ? (P = (0, l.A)(g))
                                  : U
                                    ? ((C = !1), (P = (0, c.A)(_, !0)))
                                    : k
                                      ? ((C = !1), (P = (0, u.A)(_, !0)))
                                      : (P = [])
                            : (0, y.A)(_) || (0, f.A)(_)
                              ? ((P = g),
                                (0, f.A)(g)
                                    ? (P = (0, S.A)(g))
                                    : (!(0, h.A)(g) || (0, m.A)(g)) &&
                                      (P = (0, d.A)(_)))
                              : (C = !1);
                }
                C && (s.set(_, P), o(P, _, r, a, s), s.delete(_)), i(e, n, P);
            };
            var _ = n(25677);
            let x = function e(t, n, o, a, c) {
                t !== n &&
                    (0, s.A)(
                        n,
                        function (s, u) {
                            if ((c || (c = new r.A()), (0, h.A)(s)))
                                g(t, n, u, o, e, a, c);
                            else {
                                var l = a
                                    ? a(E(t, u), s, u + "", t, n, c)
                                    : void 0;
                                void 0 === l && (l = s), i(t, u, l);
                            }
                        },
                        _.A,
                    );
            };
        },
        51439: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return e;
            };
        },
        52490: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(47093),
                o = n(75893);
            let a = function (e) {
                return (0, o.A)(e) && (0, r.A)(e);
            };
        },
        57478: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e, t, n) {
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
        },
        64075: (e, t, n) => {
            n.d(t, { A: () => o });
            var r = n(43224);
            let o = (0, n(8140).A)(function (e, t, n) {
                (0, r.A)(e, t, n);
            });
        },
        64135: (e, t, n) => {
            n.d(t, { A: () => s });
            var r = n(48435),
                o = n(47093),
                a = n(34662),
                i = n(33546);
            let s = function (e, t, n) {
                if (!(0, i.A)(n)) return !1;
                var s = typeof t;
                return (
                    ("number" == s
                        ? !!((0, o.A)(n) && (0, a.A)(t, n.length))
                        : "string" == s && t in n) && (0, r.A)(n[t], e)
                );
            };
        },
        64328: (e, t, n) => {},
        64756: (e, t, n) => {
            n.d(t, { A: () => o });
            var r = Date.now;
            let o = function (e) {
                var t = 0,
                    n = 0;
                return function () {
                    var o = r(),
                        a = 16 - (o - n);
                    if (((n = o), a > 0)) {
                        if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(void 0, arguments);
                };
            };
        },
        69797: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return function () {
                    return e;
                };
            };
        },
        83642: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = (0, n(3006).A)();
        },
        99894: (e, t, n) => {
            n.d(t, { config: () => c });
            var r = n(17324),
                o = n(46039),
                a = n(66103),
                i = n(25883);
            n(64328);
            var s = n(49124);
            let c = () => {
                var e;
                return {
                    logger: {
                        uaDisabled: !!s.env.SERVER_UNIFIED_AGENT_DISABLED,
                        uaServerAddress:
                            null != (e = s.env.SERVER_UNIFIED_AGENT_ADDRESS)
                                ? e
                                : "http://localhost:12344",
                        uaProtoPath:
                            s.env.UA_PROTO_PATH ||
                            "../../packages/unified-agent/build/proto/unified_agent.proto",
                        errorBooster: {
                            ...{
                                project: "music.frontend.desktop",
                                platform: "desktop",
                            },
                            page: "window.location.pathname",
                            version: s.env.APP_VERSION || "",
                            environment: "production",
                            unhandledRejection: !0,
                            uncaughtException: !0,
                            resourceFails: !0,
                        },
                    },
                    oauthCredentials: {
                        host: "https://oauth.yandex.".concat(a.B),
                        clientId: "97fe03033fa34407ac9bcf91d5afed5b",
                    },
                    tvm: {
                        tvmtoolAuthToken: s.env.TVMTOOL_LOCAL_AUTHTOKEN,
                        self: "music_test",
                        destinations: ["blackbox"],
                        host: "http://localhost:8001",
                        enabled: !1,
                    },
                    rumSettings: {
                        ...{
                            rumId: "ru.music.frontend.desktop",
                            project: "music.frontend.desktop",
                            service: "frontend-desktop",
                            platform: "desktop",
                        },
                        page: "window.location.pathname",
                        heroElement: "body",
                        version: s.env.APP_VERSION || "",
                        environment: "production",
                    },
                    passportCredentials: {
                        host: "https://passport.yandex.".concat(a.B),
                        origin: "music_desktop",
                    },
                    blackbox: {
                        host: "http://blackbox.envoy.localhost:9080",
                        enabled: !1,
                    },
                    resources: {
                        musicExternalApi: {
                            retryPolicyConfig: i.t,
                            defaultTimeout: o.Aj,
                            timeouts: o.LE,
                        },
                    },
                    payment: { environment: "testing" },
                    i18n: { cookieExpirationDays: 365 },
                    ynisonConnectionConfig: {
                        ynisonHost: "ynison.music.yandex.ru",
                        redirectorPath:
                            "/redirector.YnisonRedirectService/GetRedirectToYnison",
                        hubConnectioPath:
                            "/ynison_state.YnisonStateService/PutYnisonState",
                        reconnectTimeout: 2e3,
                        reconnectAttempts: 2,
                    },
                    player: {
                        configVariablesMainPlayback: {
                            entitiesToPreloadStrmUrlsCount: 1,
                            entitiesToPreloadSourceCount: 1,
                            preloadedSourcesMaxCount: 1,
                            strmUrlsTtlMs: 36e5,
                            mediaElementErrorReloadCount: 2,
                            windowSize: 30,
                            setupQueueWindowSize: 80,
                            bufferGoal: 5,
                        },
                        configVariablesPromoLandingPlayback: {
                            entitiesToPreloadStrmUrlsCount: 1,
                            entitiesToPreloadSourceCount: 1,
                            preloadedSourcesMaxCount: 1,
                            strmUrlsTtlMs: 36e5,
                            mediaElementErrorReloadCount: 2,
                            windowSize: 30,
                            setupQueueWindowSize: 80,
                            bufferGoal: 5,
                        },
                        configVariablesTrailerPlayback: {
                            mediaElementErrorReloadCount: 2,
                            windowSize: 30,
                            setupQueueWindowSize: 80,
                            storePlaysProgressIntervalMs: 5e3,
                        },
                        hlsErrorRetryLimit: 2,
                        yaspVersionStable: "12946",
                        yaspSourceLimit: 3,
                        yaspExpName: void 0,
                        yaspCandidateVersion: void 0,
                        vhMediaProvider: {
                            service: "ya-music",
                            from: "ya-music",
                            vhUrl: "https://frontend.vh.yandex.ru/player/",
                        },
                        vhPlayerSdkVersion: "12569",
                        telemetry: {
                            telemetryUrl: "https://log.strm.yandex.ru",
                            testTelemetryUrl:
                                "https://log-test.strm.yandex.net",
                            service: "WebMusic",
                            from: "ya-music",
                            playerTypeForVsid: "MWE",
                        },
                    },
                    downloadDesktop: {
                        url: "https://music.yandex.".concat(
                            a.B,
                            "/download/?autodownload=1",
                        ),
                    },
                    iframe: {
                        entityBaseUrl: "https://music.yandex.".concat(a.B),
                    },
                    redirects: {
                        KZ: { fromTLD: [r.r.RU], toTLD: r.r.KZ },
                        UZ: { fromTLD: [r.r.RU], toTLD: r.r.UZ },
                    },
                    acqOffers: {
                        environment: "production",
                        brand: "YANDEX",
                        service: "music",
                        appVersion: s.env.APP_VERSION,
                    },
                    rsc: { useCache: !0 },
                };
            };
        },
    },
]);
