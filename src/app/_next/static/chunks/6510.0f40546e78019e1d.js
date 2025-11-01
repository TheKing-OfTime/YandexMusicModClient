"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6510],
    {
        16510: (e, t, r) => {
            r.d(t, { createClientContainer: () => eB });
            var n = r(51111),
                s = r(25601),
                i = r(54960),
                g = r(30293),
                o = r(17160),
                l = r(56053),
                u = r(57246),
                a = r(43411),
                c = r(72009),
                d = r(90557),
                m = r(25536),
                p = r(69900),
                A = r(13504),
                U = r(47414),
                w = r(93650),
                f = r(10064),
                h = r(42937),
                x = r(31404),
                R = r(91628),
                E = r(28144),
                G = r(2512),
                H = r(3850),
                L = r(17199),
                P = r(88e3),
                _ = r(89498),
                T = r(96029),
                W = r(63554),
                X = r(38920),
                B = r(79080),
                I = r(50594),
                v = r(49004),
                k = r(42558),
                y = r(90050),
                b = r(71827),
                q = r(92643),
                D = r(59364),
                C = r(85272),
                S = r(33747),
                M = r(49501),
                N = r(75846),
                Z = r(71068),
                V = r(2436),
                Q = r(7048),
                $ = r(55024),
                K = r(77488),
                O = r(75416),
                j = r(84378),
                z = r(43564),
                F = r(96502),
                J = r(41536),
                Y = r(83278),
                ee = r(20757),
                et = r(29515),
                er = r(97056),
                en = r(58256),
                es = r(75480),
                ei = r(59060),
                eg = r(94212),
                eo = r(85897),
                el = r(48467),
                eu = r(12580),
                ea = r(94240),
                ec = r(94207),
                ed = r(94233),
                em = r(50145),
                ep = r(70095),
                eA = r(92154),
                eU = r(86211);
            class ew {
                onChangeLanguage(e) {
                    if (
                        "string" == typeof this.token &&
                        this.token.length > 0
                    ) {
                        let t = "https://yandex.".concat(
                                this.tld,
                                "/portal/set/lang/",
                            ),
                            r = encodeURIComponent(window.location.href),
                            n = ""
                                .concat(t, "?intl=")
                                .concat(e, "&retpath=")
                                .concat(r, "&sk=")
                                .concat(this.token);
                        window.location.assign(n);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    (0, eU._)(this, "tld", void 0),
                        (0, eU._)(this, "token", void 0),
                        (this.tld = e),
                        (this.token = t);
                }
            }
            var ef = r(32100),
                eh = r(911),
                ex = r(28779),
                eR = r(55361),
                eE = r(66103),
                eG = r(4760),
                eH = r(54010);
            let eL = /^application\/json(;\s?charset=\S+)?$/;
            class eP {
                async afterResponse(e) {
                    try {
                        if (
                            !e.headers["content-range"] &&
                            e.headers["content-type"] &&
                            eL.test(e.headers["content-type"])
                        ) {
                            let t = await e.clone().json();
                            if (
                                ((e) => {
                                    if (
                                        e &&
                                        "object" == typeof e &&
                                        "type" in e &&
                                        "captcha" === e.type
                                    ) {
                                        let { captcha: t } = e;
                                        if (t && t["captcha-page"]) return !0;
                                    }
                                    return !1;
                                })(t)
                            ) {
                                let { captcha: e } = t;
                                window.location.replace(e["captcha-page"]);
                            }
                        }
                    } catch (e) {
                        e instanceof Error && this.logger.error(e);
                    }
                    return e;
                }
                beforeRequest(e) {
                    let t = window.location.href;
                    ((e) => {
                        let t;
                        try {
                            let r = e.map((e) => {
                                let t = new URL(e);
                                return ""
                                    .concat(t.protocol)
                                    .concat(
                                        t.hostname
                                            .split(".")
                                            .slice(-2)
                                            .join("."),
                                    );
                            });
                            t = r.every((e) => e === r[0]);
                        } catch (e) {
                            t = !1;
                        }
                        return t;
                    })([t, e.url]) &&
                        (e.headers.set("X-Requested-With", "XMLHttpRequest"),
                        e.headers.set("X-Retpath-Y", t));
                }
                get afterResponseHook() {
                    return this.afterResponse.bind(this);
                }
                get beforeRequestHook() {
                    return this.beforeRequest.bind(this);
                }
                constructor(e) {
                    (0, eU._)(this, "logger", void 0), (this.logger = e);
                }
            }
            var e_ = r(49502),
                eT = r(5626),
                eW = r(29994),
                eX = r(10808);
            async function eB(e) {
                let {
                        tld: t,
                        env: r,
                        serverDetectedLocale: eU,
                        changeLanguageToken: eL,
                        browserName: eB,
                        browserVersion: eI,
                        executionContextStore: ev,
                    } = e,
                    ek = (0, eX.J)(await (0, ep.z)(r)),
                    ey = await (0, em.B)(r);
                return new l.Dt()
                    .registerMany({
                        [eH.SX]: (0, l.Gr)(() => r),
                        [eH.tw]: (0, l.Gr)(() => ek),
                        [eH.P0]: (0, l.Gr)(() => new o.q(ey)),
                        [eH.Zi]: (0, l.Gr)(() => new eA.Y(ev)),
                    })
                    .register(
                        eH.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(eH.Zi);
                            return new eG.V(t);
                        }),
                    )
                    .registerMany({
                        [eH.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(eH.P0).get(ed.qV);
                            return new d.r({
                                maxLogLevel: c.cm.DEBUG,
                                secureFields: ex.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eH.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eH.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eh.b)(d.r))({
                                    maxLogLevel: c.cm.DEBUG,
                                    secureFields: ex.x,
                                    disableLogToConsole:
                                        "development" !== e.get(eH.SX),
                                    additionalData: {
                                        get puid() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eH.oo]: (0, l.Gr)(() => new el.V8()),
                        [eH.DP]: (0, l.Gr)(() => new el.V8()),
                        [eH.U2]: (0, l.Gr)(() => new el.si()),
                        [eH.vH]: (0, l.Gr)(() => new el.fW()),
                        [eH.y$]: (0, l.Gr)(
                            () =>
                                new eo.Mz({
                                    config: {
                                        useEntitiesStorage: !1,
                                        useFileStorage: !1,
                                        useResponseCacheStorage: !1,
                                    },
                                }),
                        ),
                        [eH.Xc]: (0, l.Gr)((e) => {
                            let r = e.get(eH.oo),
                                n = e.get(eH.Zf),
                                { i18n: s } = e.get(eH.tw),
                                i = new Date(
                                    Date.now() +
                                        24 * s.cookieExpirationDays * 36e5,
                                );
                            return new ef.E({
                                serverDetectedLocale: eU,
                                logger: n,
                                changeLanguageHandler: new ew(t, eL),
                                storage: {
                                    get: () =>
                                        r.get(eR.c.SavedUserLanguage, !1),
                                    set(e) {
                                        r.set(
                                            eR.c.SavedUserLanguage,
                                            e,
                                            {
                                                path: "/",
                                                domain: window.location
                                                    .hostname,
                                                expires: i,
                                                secure: !0,
                                            },
                                            !1,
                                        );
                                    },
                                },
                            });
                        }),
                        [eH.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return new a.Q(e);
                                },
                        ),
                        [eH.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return new u.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eH.QG]: (0, l.Gr)(
                            (e) =>
                                new ea.b(
                                    e.get(eH.DP),
                                    e.get(eH.tw),
                                    e.get(eH.Xc).getLanguage(),
                                    e.get(eH.WA),
                                ),
                        ),
                        [eH.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, s, i, g;
                                    let o =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                        l =
                                            arguments.length > 1
                                                ? arguments[1]
                                                : void 0,
                                        u = e.get(eH.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eH.tw),
                                        c = new ex.N(u),
                                        d = new eP(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [
                                                d.afterResponseHook,
                                                ...((null == o ||
                                                null == (t = o.hooks)
                                                    ? void 0
                                                    : t.afterResponse) || []),
                                            ],
                                            afterTimeout: [
                                                c.beforeErrorHook,
                                                ...((null == o ||
                                                null == (r = o.hooks)
                                                    ? void 0
                                                    : r.afterTimeout) || []),
                                            ],
                                            beforeError: [
                                                c.beforeErrorHook,
                                                ...((null == o ||
                                                null == (n = o.hooks)
                                                    ? void 0
                                                    : n.beforeError) || []),
                                            ],
                                            beforeRequest: [
                                                eT.x,
                                                d.beforeRequestHook,
                                                ...((null == o ||
                                                null == (s = o.hooks)
                                                    ? void 0
                                                    : s.beforeRequest) || []),
                                            ],
                                            beforeRetry: [
                                                eW.i,
                                                c.beforeRetryHook,
                                                ...((null == o ||
                                                null == (i = o.hooks)
                                                    ? void 0
                                                    : i.beforeRetry) || []),
                                            ],
                                            onRequestDone: [
                                                ...((null == o ||
                                                null == (g = o.hooks)
                                                    ? void 0
                                                    : g.onRequestDone) || []),
                                            ],
                                        }),
                                        l(o)
                                    );
                                },
                        ),
                    })
                    .registerMany({
                        [eH.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let n =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                        s =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : e.get(eH.OP),
                                        i = e.get(eH.QG),
                                        { resources: o } = e.get(eH.tw),
                                        l = s(
                                            { credentials: "include" },
                                            e.get(eH.Hm),
                                        ),
                                        {
                                            prefixUrl: u,
                                            timeouts: a,
                                            retryPolicyConfig: c,
                                        } = o.musicExternalApi,
                                        d = e.get(eH.Xc).getLanguage(),
                                        p = new m.Q(l, {
                                            prefixUrl: (0, g.getTldHost)(
                                                u,
                                                t,
                                                eE.B,
                                            ),
                                            retryPolicyConfig: c,
                                            timeouts: a.accountResource,
                                            params: {
                                                common: {
                                                    client: (0, eu._)(),
                                                    language: d,
                                                    get multiAuthUserId() {
                                                        return e
                                                            .get(eH.WA)
                                                            .getPassportUid();
                                                    },
                                                },
                                            },
                                        });
                                    return (
                                        (n.hooks = {
                                            beforeError: [
                                                (0, ec.o)(i, p),
                                                ...((null == n ||
                                                null == (r = n.hooks)
                                                    ? void 0
                                                    : r.beforeError) || []),
                                            ],
                                        }),
                                        s(n, e.get(eH.Hm))
                                    );
                                },
                        ),
                        [eH.KH]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, s, i, g;
                                    let o =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                        l = e.get(eH.Hm),
                                        u = e.get(eH.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eH.tw),
                                        c = new ex.N(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [
                                                ...((null == o ||
                                                null == (t = o.hooks)
                                                    ? void 0
                                                    : t.afterResponse) || []),
                                            ],
                                            afterTimeout: [
                                                c.beforeErrorHook,
                                                ...((null == o ||
                                                null == (r = o.hooks)
                                                    ? void 0
                                                    : r.afterTimeout) || []),
                                            ],
                                            beforeError: [
                                                c.beforeErrorHook,
                                                ...((null == o ||
                                                null == (n = o.hooks)
                                                    ? void 0
                                                    : n.beforeError) || []),
                                            ],
                                            beforeRequest: [
                                                eT.x,
                                                ...((null == o ||
                                                null == (s = o.hooks)
                                                    ? void 0
                                                    : s.beforeRequest) || []),
                                            ],
                                            beforeRetry: [
                                                eW.i,
                                                c.beforeRetryHook,
                                                ...((null == o ||
                                                null == (i = o.hooks)
                                                    ? void 0
                                                    : i.beforeRetry) || []),
                                            ],
                                            onRequestDone: [
                                                ...((null == o ||
                                                null == (g = o.hooks)
                                                    ? void 0
                                                    : g.onRequestDone) || []),
                                            ],
                                        }),
                                        l(o)
                                    );
                                },
                        ),
                    })
                    .register(
                        eH.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return e.get(eH.A4)(t, e.get(eH.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eH.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new m.Q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.accountResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new p.d(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.usersResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new A.G(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.landingResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new U.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.landing3Resource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new w.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.landingResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new f.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.libraryResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new h.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.tracksResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new x._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.availabilityResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.qT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new R.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.getFileInfoResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new E.a(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.topResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new G.b(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.artistsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new H.V(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.slidesResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new L.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.redAlertResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new P.Z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.rotorResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new _.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.searchResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new T.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.searchResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new W.T(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.playlistResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new X.e(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.playlistsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new B.o(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.pinResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new I.$(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.metatagsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new v.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.tagResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new k.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.feedResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new y.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.pinsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new b.I(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.musicHistoryResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new q.s(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.dynamicPagesResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new D.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.chartResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new C._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.clipsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new S.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.lyricViewsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new M.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.nonMusicResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new N.N(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.donationResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new Z.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.streamsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new V.S(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.loaderResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(eH.tw),
                                { timeouts: r, retryPolicyConfig: n } =
                                    t.musicExternalApi,
                                s = e.get(eH.Xc).getLanguage(),
                                i = e.get(eH.KH)({ credentials: "omit" });
                            return new Q.s(i, {
                                prefixUrl: "",
                                retryPolicyConfig: n,
                                timeouts: r.prefixlessResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: s,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new $.g(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.filtersResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.he]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "omit" });
                            return new K.K(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.offersResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.uM]: (0, l.Gr)((e) => {
                            var r;
                            let { acqOffers: s, rumSettings: i } = e.get(eH.tw),
                                {
                                    brand: g,
                                    service: o,
                                    environment: l,
                                    appVersion: u,
                                } = s,
                                { platform: a, page: c } = i,
                                d = e.get(eH.QG),
                                m = e.get(eH.Xc).getLanguage(),
                                p = e.get(eH.A4),
                                A = d.token || null,
                                U = p({ credentials: A ? "omit" : "include" }),
                                { request_id: w, puid: f } =
                                    null != (r = e.get(eH.Zi).getStore())
                                        ? r
                                        : {};
                            return new n.mZ({
                                brand: g,
                                service: o,
                                environment: l,
                                appVersion: u,
                                etld: "yandex.".concat(t),
                                platform: "Web",
                                lang: m,
                                oAuthToken: A,
                                authMethod: A ? "oauth" : "default",
                                requester: (0, e_.n)(U),
                                puid:
                                    (null == f ? void 0 : f.toString()) || null,
                                rumOptions: {
                                    platform: a,
                                    page: c,
                                    requestId: w,
                                },
                            });
                        }),
                        [eH.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new O.E(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.offersResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new j.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.collectionResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new z.z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.adsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new F.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.personalResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new J.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.disclaimersResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new Y.J(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.familyResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new ee.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.childrenLandingResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new et.u(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.landingBlocksResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new er.q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.promoResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eH.tw),
                                { timeouts: n, retryPolicyConfig: s } =
                                    t.musicExternalApi,
                                i = e.get(eH.CR)({ credentials: "include" });
                            return new en.g(i, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: s,
                                timeouts: n.telemetryResouce,
                                params: { common: { client: (0, eu._)() } },
                            });
                        }),
                        [eH.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new es._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.afterTrackResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new ei.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.labelsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eH.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eH.tw),
                                {
                                    prefixUrl: n,
                                    timeouts: s,
                                    retryPolicyConfig: i,
                                } = r.musicExternalApi,
                                o = e.get(eH.Xc).getLanguage(),
                                l = e.get(eH.A4)({ credentials: "include" });
                            return new eg.O(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eE.B),
                                retryPolicyConfig: i,
                                timeouts: s.concertsResource,
                                params: {
                                    common: {
                                        client: (0, eu._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e
                                                .get(eH.WA)
                                                .getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                    })
                    .register(
                        eH.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(eH.oo),
                                r = (0, i.A)(),
                                n = {
                                    info: {
                                        app_name: eB || "Browser",
                                        app_version: eI || "",
                                        title: "Browser ".concat(eB),
                                        device_id: r,
                                        type: s.bq.WEB,
                                    },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var g;
                                        return null !=
                                            (g = t.get(eR.c.YmPlayerVolume))
                                            ? g
                                            : void 0;
                                    },
                                },
                                o = e.get(eH.WA).getPassportUid(),
                                l = e.get(eH.QG);
                            return new s.Jd({
                                deviceConfig: n,
                                multiAuthUserId: o,
                                oauth: l.token,
                                ynisonConnectionConfig:
                                    ek.ynisonConnectionConfig,
                                variables: { isShadow: !0 },
                            });
                        }),
                    );
            }
        },
    },
]);
