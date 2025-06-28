"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [418],
  {
    418: function (e, t, r) {
      r.d(t, {
        createClientContainer: function () {
          return ev;
        },
      });
      var i = r(25353),
        n = r(65227),
        s = r(77282),
        o = r(63660),
        g = r(3749),
        l = r(30386),
        u = r(76877),
        a = r(83254),
        c = r(91894),
        d = r(83052),
        m = r(25091),
        U = r(33289),
        p = r(98632),
        R = r(45150),
        h = r(66984),
        f = r(31842),
        L = r(61271),
        H = r(56950),
        x = r(19023),
        A = r(91798),
        w = r(3599),
        E = r(74779),
        S = r(35866),
        T = r(31250),
        v = r(99566),
        P = r(95303),
        M = r(97533),
        z = r(67600),
        I = r(77597),
        $ = r(61871),
        k = r(20918),
        y = r(90920),
        b = r(98090),
        q = r(75281),
        C = r(79818),
        D = r(26731),
        B = r(31183),
        _ = r(33614),
        Y = r(37778),
        j = r(31467),
        V = r(18594),
        F = r(41680),
        O = r(54629),
        X = r(83936),
        G = r(73728),
        N = r(98221),
        J = r(58261),
        K = r(73403),
        W = r(18759),
        Z = r(27688),
        Q = r(22262),
        ee = r(18304),
        et = r(62713),
        er = r(21322),
        ei = r(34300),
        en = r(34990),
        es = r(60365),
        eo = r(98030),
        eg = r(57687),
        el = r(23265),
        eu = r(46622),
        ea = r(27198);
      class ec {
        onChangeLanguage(e) {
          if ("string" == typeof this.token && this.token.length > 0) {
            let t = "https://yandex.".concat(this.tld, "/portal/set/lang/"),
              r = encodeURIComponent(window.location.href),
              i = ""
                .concat(t, "?intl=")
                .concat(e, "&retpath=")
                .concat(r, "&sk=")
                .concat(this.token);
            window.location.assign(i);
          } else window.location.reload();
        }
        constructor(e, t) {
          (0, ea._)(this, "tld", void 0),
            (0, ea._)(this, "token", void 0),
            (this.tld = e),
            (this.token = t);
        }
      }
      var ed = r(30686),
        em = r(58205),
        eU = r(50888),
        ep = r(52023),
        eR = r(56575),
        eh = r(44990),
        ef = r(58155);
      let eL = (e) => {
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
        },
        eH = (e) => {
          let t;
          try {
            let r = e.map((e) => {
              let t = new URL(e);
              return ""
                .concat(t.protocol)
                .concat(t.hostname.split(".").slice(-2).join("."));
            });
            t = r.every((e) => e === r[0]);
          } catch (e) {
            t = !1;
          }
          return t;
        },
        ex = /^application\/json(;\s?charset=\S+)?$/;
      class eA {
        async afterResponse(e) {
          try {
            if (
              !e.headers["content-range"] &&
              e.headers["content-type"] &&
              ex.test(e.headers["content-type"])
            ) {
              let t = await e.clone().json();
              if (eL(t)) {
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
          eH([t, e.url]) &&
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
          (0, ea._)(this, "logger", void 0), (this.logger = e);
        }
      }
      var ew = r(57186),
        eE = r(47343),
        eS = r(60044),
        eT = r(75712);
      async function ev(e) {
        let {
            tld: t,
            env: r,
            serverDetectedLocale: ea,
            changeLanguageToken: eL,
            browserName: eH,
            browserVersion: ex,
          } = e,
          ev = (0, eT.n)(await (0, el.i)(r)),
          eP = {};
        return new g.s1()
          .registerMany({
            [ef.Y]: (0, g.ri)(() => r),
            [ef.U5]: (0, g.ri)(() => ev),
            [ef.sT]: (0, g.ri)(() => new eu.o(eP)),
          })
          .register(
            ef.Hz,
            (0, g.ri)((e) => {
              let t = e.get(ef.sT);
              return new eh.E(t);
            }),
          )
          .registerMany({
            [ef.P0]: (0, g.ri)((e) => {
              let t = e.get(ef.U5);
              return new a.j({
                maxLogLevel: u.B$.DEBUG,
                secureFields: eU.B,
                disableLogToConsole: !t.dev.panel,
                additionalData: {
                  get puid() {
                    return e.get(ef.Hz).getPassportUid();
                  },
                },
              });
            }),
            [ef.DR]: (0, g.ri)(
              (e) =>
                new ((0, em.c)(a.j))({
                  maxLogLevel: u.B$.DEBUG,
                  secureFields: eU.B,
                  disableLogToConsole: "development" !== e.get(ef.Y),
                  additionalData: {
                    get puid() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                }),
            ),
            [ef.V0]: (0, g.ri)(() => new es.NS()),
            [ef.Xt]: (0, g.ri)(() => new es.NS()),
            [ef.ce]: (0, g.ri)(() => new es.JC()),
            [ef.Ar]: (0, g.ri)(() => new es.$V()),
            [ef.Tz]: (0, g.ri)(
              () =>
                new en.Jt({
                  config: {
                    useEntitiesStorage: !1,
                    useFileStorage: !1,
                    useResponseCacheStorage: !1,
                  },
                }),
            ),
            [ef.SL]: (0, g.ri)((e) => {
              let r = e.get(ef.V0),
                i = e.get(ef.P0),
                { i18n: n } = e.get(ef.U5),
                s = new Date(Date.now() + 864e5 * n.cookieExpirationDays);
              return new ed.h({
                serverDetectedLocale: ea,
                logger: i,
                enableLanguageChanging:
                  "on" === r.get(ep.B.EnableChangingLanguage),
                changeLanguageHandler: new ec(t, eL),
                storage: {
                  get: () => r.get(ep.B.SavedUserLanguage, !1),
                  set(e) {
                    r.set(
                      ep.B.SavedUserLanguage,
                      e,
                      {
                        path: "/",
                        domain: window.location.hostname,
                        expires: s,
                        secure: !0,
                      },
                      !1,
                    );
                  },
                },
              });
            }),
            [ef.pI]: (0, g.d5)(
              () =>
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return new l.w(e);
                },
            ),
          })
          .registerMany({
            [ef.UR]: (0, g.d5)(
              (e) =>
                function () {
                  var t, r, i, n, s, o;
                  let g =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    l = e.get(ef.pI),
                    u = e.get(ef.P0),
                    {
                      resources: { musicExternalApi: a },
                    } = e.get(ef.U5),
                    c = new eU.D(u),
                    d = new eA(u);
                  return (
                    (g.timeout = a.defaultTimeout),
                    (g.hooks = {
                      afterResponse: [
                        d.afterResponseHook,
                        ...((null == g
                          ? void 0
                          : null === (t = g.hooks) || void 0 === t
                            ? void 0
                            : t.afterResponse) || []),
                      ],
                      afterTimeout: [
                        c.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (r = g.hooks) || void 0 === r
                            ? void 0
                            : r.afterTimeout) || []),
                      ],
                      beforeError: [
                        c.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (i = g.hooks) || void 0 === i
                            ? void 0
                            : i.beforeError) || []),
                      ],
                      beforeRequest: [
                        eE.U,
                        d.beforeRequestHook,
                        ...((null == g
                          ? void 0
                          : null === (n = g.hooks) || void 0 === n
                            ? void 0
                            : n.beforeRequest) || []),
                      ],
                      beforeRetry: [
                        eS.j,
                        c.beforeRetryHook,
                        ...((null == g
                          ? void 0
                          : null === (s = g.hooks) || void 0 === s
                            ? void 0
                            : s.beforeRetry) || []),
                      ],
                      onRequestDone: [
                        ...((null == g
                          ? void 0
                          : null === (o = g.hooks) || void 0 === o
                            ? void 0
                            : o.onRequestDone) || []),
                      ],
                    }),
                    l(g)
                  );
                },
            ),
            [ef.Dw]: (0, g.d5)(
              (e) =>
                function () {
                  var t, r, i, n, s, o;
                  let g =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    l = e.get(ef.pI),
                    u = e.get(ef.P0),
                    {
                      resources: { musicExternalApi: a },
                    } = e.get(ef.U5),
                    c = new eU.D(u);
                  return (
                    (g.timeout = a.defaultTimeout),
                    (g.hooks = {
                      afterResponse: [
                        ...((null == g
                          ? void 0
                          : null === (t = g.hooks) || void 0 === t
                            ? void 0
                            : t.afterResponse) || []),
                      ],
                      afterTimeout: [
                        c.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (r = g.hooks) || void 0 === r
                            ? void 0
                            : r.afterTimeout) || []),
                      ],
                      beforeError: [
                        c.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (i = g.hooks) || void 0 === i
                            ? void 0
                            : i.beforeError) || []),
                      ],
                      beforeRequest: [
                        eE.U,
                        ...((null == g
                          ? void 0
                          : null === (n = g.hooks) || void 0 === n
                            ? void 0
                            : n.beforeRequest) || []),
                      ],
                      beforeRetry: [
                        eS.j,
                        c.beforeRetryHook,
                        ...((null == g
                          ? void 0
                          : null === (s = g.hooks) || void 0 === s
                            ? void 0
                            : s.beforeRetry) || []),
                      ],
                      onRequestDone: [
                        ...((null == g
                          ? void 0
                          : null === (o = g.hooks) || void 0 === o
                            ? void 0
                            : o.onRequestDone) || []),
                      ],
                    }),
                    l(g)
                  );
                },
            ),
            [ef.xi]: (0, g.ri)(
              (e) =>
                new eg.S(
                  e.get(ef.Xt),
                  e.get(ef.U5),
                  e.get(ef.SL).getLanguage(),
                  e.get(ef.Hz),
                ),
            ),
          })
          .registerMany({
            [ef.A9]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new c.R(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.accountResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Eu]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new d.V(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.usersResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.YR]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new m.F(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.landingResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.cG]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new U.p(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.landing3Resource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.qV]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new p.S(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.landingResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.OT]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new R.T(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.libraryResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.g5]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new h.H(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.tracksResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.OY]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new f.C(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.availabilityResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.ES]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new L.d(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.getFileInfoResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.q2]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new H.O(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.topResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.n]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new x.c(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.artistsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Ci]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new A.t(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.slidesResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.JG]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new w.S(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.redAlertResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.w5]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new E.U(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.rotorResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Fe]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new S.x(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.searchResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Gp]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new T.P(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.searchResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.lk]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new v.B(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.playlistResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.SR]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new P.m(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.playlistsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.vl]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new M.m(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.pinResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.ZO]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new z.k(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.metatagsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.jb]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new I.c(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.tagResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.dk]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new $.l(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.feedResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.X8]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new k.I(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.pinsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.O_]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new y.E(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.musicHistoryResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.EN]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new b.Y(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.dynamicPagesResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.sD]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new q.U(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.chartResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.m_]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new C.V(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.clipsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Ve]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new D.A(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.lyricViewsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.o]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new B.h(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.nonMusicResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.uR]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new _.B(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.donationResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.aH]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new Y.h(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.streamsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.yO]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new j.k(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.loaderResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.qs]: (0, g.ri)((e) => {
              let { resources: t } = e.get(ef.U5),
                { timeouts: r, retryPolicyConfig: i } = t.musicExternalApi,
                n = e.get(ef.SL).getLanguage(),
                s = e.get(ef.Dw)({ credentials: "omit" });
              return new V.G(s, {
                prefixUrl: "",
                retryPolicyConfig: i,
                timeouts: r.prefixlessResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: n,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.cl]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new F.T(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.filtersResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Mq]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "omit" });
              return new O.m(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.offersResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.bT]: (0, g.ri)((e) => {
              let { acqOffers: r } = e.get(ef.U5),
                { brand: n, service: s, environment: o, appVersion: g } = r,
                l = e.get(ef.xi),
                u = e.get(ef.SL).getLanguage(),
                a = e.get(ef.UR),
                c = l.token || null,
                d = a({ credentials: c ? "omit" : "include" });
              return new i.YO({
                brand: n,
                service: s,
                environment: o,
                appVersion: g,
                etld: "yandex.".concat(t),
                platform: "Web",
                lang: u,
                oAuthToken: c,
                requester: (0, ew.E)(d),
              });
            }),
            [ef.wc]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new X.T(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.offersResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Nt]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new G.Y(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.collectionResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Ep]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new N.j(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.adsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.KM]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new J.h(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.personalResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.ag]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new K.K(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.disclaimersResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.A7]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new W.C(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.familyResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef._F]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new Z.A(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.childrenLandingResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.BK]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new Q.m(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.landingBlocksResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.o4]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new ee.x(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.promoResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.Vw]: (0, g.ri)((e) => {
              let { resources: t, player: r } = e.get(ef.U5),
                { timeouts: i, retryPolicyConfig: n } = t.musicExternalApi,
                s = e.get(ef.UR)({ credentials: "include" });
              return new et.X(s, {
                prefixUrl: r.telemetry.telemetryUrl,
                retryPolicyConfig: n,
                timeouts: i.telemetryResouce,
                params: { common: { client: (0, eo.$)() } },
              });
            }),
            [ef.UY]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new er.E(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.afterTrackResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
            [ef.uL]: (0, g.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: n,
                  retryPolicyConfig: s,
                } = r.musicExternalApi,
                g = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)({ credentials: "include" });
              return new ei.h(l, {
                prefixUrl: (0, o.getTldHost)(i, t, eR.M),
                retryPolicyConfig: s,
                timeouts: n.labelsResource,
                params: {
                  common: {
                    client: (0, eo.$)(),
                    language: g,
                    get multiAuthUserId() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                },
              });
            }),
          })
          .register(
            ef.Yw,
            (0, g.ri)((e) => {
              let t = {
                  app_name: eH || "Browser",
                  app_version: ex || "",
                  title: "Browser ".concat(eH),
                  device_id: (0, s.Z)(),
                  type: n.Yi.WEB,
                },
                r = e.get(ef.Hz).getPassportUid(),
                i = e.get(ef.xi);
              return new n.QJ({
                deviceConfig: t,
                multiAuthUserId: r,
                oauth: i.token,
                ynisonConnectionConfig: ev.ynisonConnectionConfig,
                variables: { shadow: !0 },
              });
            }),
          );
      }
    },
  },
]);
