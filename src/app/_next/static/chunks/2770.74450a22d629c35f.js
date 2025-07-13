"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2770],
  {
    2770: function (e, t, r) {
      r.d(t, {
        createDesktopContainer: function () {
          return eT;
        },
      });
      var i = r(25353),
        o = r(65227),
        n = r(77282),
        g = r(63660),
        a = r(3749),
        s = r(30386),
        l = r(76877),
        u = r(83254),
        c = r(91894),
        m = r(83052),
        p = r(33289),
        d = r(98632),
        U = r(45150),
        x = r(66984),
        R = r(31842),
        L = r(61271),
        f = r(56950),
        h = r(19023),
        k = r(91798),
        v = r(3599),
        w = r(74779),
        T = r(35866),
        E = r(31250),
        S = r(99566),
        H = r(95303),
        A = r(97533),
        M = r(67600),
        q = r(77597),
        $ = r(61871),
        C = r(20918),
        y = r(90920),
        b = r(98090),
        B = r(75281),
        D = r(79818),
        V = r(26731),
        Y = r(31183),
        O = r(33614),
        z = r(37778),
        _ = r(31467),
        P = r(18594),
        G = r(41680),
        I = r(54629),
        J = r(83936),
        N = r(73728),
        F = r(98221),
        K = r(21322),
        j = r(58261),
        X = r(73403),
        Z = r(18759),
        Q = r(27688),
        W = r(22262),
        ee = r(18304),
        et = r(62713),
        er = r(34300),
        ei = r(34990),
        eo = r(60365),
        en = r(98030),
        eg = r(31115),
        ea = r(23265),
        es = r(46622);
      class el {
        onChangeLanguage() {
          window.location.reload();
        }
      }
      var eu = r(30686),
        ec = r(58205),
        em = r(50888),
        ep = r(90843),
        ed = r(1005),
        eU = r(79519),
        ex = r(52023),
        eR = r(56575),
        eL = r(44990),
        ef = r(58155),
        eh = r(57186),
        ek = r(47343),
        ev = r(60044),
        ew = r(75712);
      async function eT(e) {
        let { tld: t, env: r } = e,
          eT = (0, ew.n)(await (0, ea.i)(r)),
          eE = {};
        return new a.s1()
          .registerMany({
            [ef.Y]: (0, a.ri)(() => r),
            [ef.U5]: (0, a.ri)(() => eT),
            [ef.sT]: (0, a.ri)(() => new es.o(eE)),
          })
          .register(
            ef.Hz,
            (0, a.ri)((e) => {
              let t = e.get(ef.sT);
              return new eL.E(t);
            }),
          )
          .registerMany({
            [ef.P0]: (0, a.ri)((e) => {
              let t = e.get(ef.U5);
              return new u.j({
                maxLogLevel: l.B$.DEBUG,
                secureFields: em.B,
                disableLogToConsole: !t.dev.panel,
                additionalData: {
                  get puid() {
                    return e.get(ef.Hz).getPassportUid();
                  },
                },
              });
            }),
            [ef.DR]: (0, a.ri)(
              (e) =>
                new ((0, ec.c)(u.j))({
                  maxLogLevel: l.B$.DEBUG,
                  secureFields: em.B,
                  disableLogToConsole: "development" !== e.get(ef.Y),
                  additionalData: {
                    get puid() {
                      return e.get(ef.Hz).getPassportUid();
                    },
                  },
                }),
            ),
            [ef.V0]: (0, a.ri)(() => new eo.JC()),
            [ef.Xt]: (0, a.ri)(
              () => new eo.tg("client ".concat("desktop"), "cookie"),
            ),
            [ef.ce]: (0, a.ri)(() => new eo.JC()),
            [ef.Ar]: (0, a.ri)(() => new eo.$V()),
            [ef.SL]: (0, a.ri)((e) => {
              let t = e.get(ef.V0),
                r = e.get(ef.P0);
              return new eu.h({
                isBuildTypeDesktop: !0,
                logger: r,
                enableLanguageChanging:
                  "on" === t.get(ex.B.EnableChangingLanguage),
                changeLanguageHandler: new el(),
                storage: {
                  get: () => t.get(ex.B.SavedUserLanguage),
                  set(e) {
                    t.set(ex.B.SavedUserLanguage, e);
                  },
                },
              });
            }),
          })
          .registerMany({
            [ef.Tz]: (0, a.ri)((e) => {
              let t = e.get(ef.P0),
                r = e.get(ef.V0),
                i = new ei.Jt({
                  config: {
                    useEntitiesStorage: !0,
                    useFileStorage: !0,
                    useResponseCacheStorage: !0,
                  },
                  plugins: [new ei.kf({ logger: t })],
                });
              return (
                i.repositoryContainer.responseCacheRepository &&
                  i.createCacheController({
                    responseCacheRepository:
                      i.repositoryContainer.responseCacheRepository,
                    variables: {
                      get uid() {
                        return r.get(ex.B.YmUid);
                      },
                      get isOffline() {
                        return !!i.network.status.isOffline;
                      },
                    },
                  }),
                i
              );
            }),
          })
          .register(
            ef.pI,
            (0, a.d5)(
              () =>
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return new s.w(e);
                },
            ),
          )
          .registerMany({
            [ef.UR]: (0, a.d5)(
              (e) =>
                function () {
                  var t, r, i, o, n;
                  let g =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a = e.get(ef.pI),
                    s = e.get(ef.P0),
                    l = e.get(ef.ce),
                    u = new em.D(s),
                    {
                      resources: { musicExternalApi: c },
                    } = e.get(ef.U5);
                  (g.timeout = c.defaultTimeout),
                    (g.hooks = {
                      afterResponse: [
                        ...((null == g
                          ? void 0
                          : null === (t = g.hooks) || void 0 === t
                            ? void 0
                            : t.afterResponse) || []),
                      ],
                      beforeError: [
                        u.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (r = g.hooks) || void 0 === r
                            ? void 0
                            : r.beforeError) || []),
                      ],
                      beforeRequest: [
                        ek.U,
                        ...((null == g
                          ? void 0
                          : null === (i = g.hooks) || void 0 === i
                            ? void 0
                            : i.beforeRequest) || []),
                      ],
                      afterTimeout: [
                        u.beforeErrorHook,
                        ...((null == g
                          ? void 0
                          : null === (o = g.hooks) || void 0 === o
                            ? void 0
                            : o.afterTimeout) || []),
                      ],
                      beforeRetry: [
                        ev.j,
                        u.beforeRetryHook,
                        ...((null == g
                          ? void 0
                          : null === (n = g.hooks) || void 0 === n
                            ? void 0
                            : n.beforeRetry) || []),
                      ],
                    });
                  let m = a(g);
                  return (0, ei.Db)(m, {
                    get isOffline() {
                      return (0, ep.i)(l);
                    },
                  });
                },
            ),
            [ef.xi]: (0, a.ri)(
              (e) =>
                new eg.T(
                  e.get(ef.V0),
                  e.get(ef.U5),
                  e.get(ef.SL).getLanguage(),
                ),
            ),
          })
          .registerMany({
            [ef.A9]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR),
                l = e.get(ef.Tz),
                u = s(),
                m = e.get(ef.xi),
                p = {
                  prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                  retryPolicyConfig: n,
                  timeouts: o.accountResource,
                  params: {
                    common: {
                      oauth: m.token,
                      client: (0, en.$)(),
                      device: (0, eU.q)(),
                      language: a,
                    },
                  },
                };
              return l.cacheController
                ? new ei.a4(u, p, { cacheController: l.cacheController })
                : new c.R(u, p);
            }),
            [ef.Eu]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new m.V(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.usersResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.YR]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi),
                u = e.get(ef.Tz),
                c = {
                  prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                  retryPolicyConfig: n,
                  timeouts: o.landingResource,
                  params: {
                    common: {
                      oauth: l.token,
                      client: (0, en.$)(),
                      device: (0, eU.q)(),
                      language: a,
                    },
                  },
                };
              return new ei.ON(s, c, {
                hooks: u.hooks,
                variables: {
                  get tracksController() {
                    return u.tracksController;
                  },
                  get cacheController() {
                    var m;
                    return null !== (m = u.cacheController) && void 0 !== m
                      ? m
                      : null;
                  },
                },
              });
            }),
            [ef.cG]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new p.p(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.landing3Resource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.qV]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new d.S(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.albumsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.OT]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new U.T(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.libraryResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.g5]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new x.H(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.tracksResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.OY]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new R.C(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.availabilityResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.ES]: (0, a.ri)((e) => {
              let { resources: r, player: i } = e.get(ef.U5),
                {
                  prefixUrl: o,
                  timeouts: n,
                  retryPolicyConfig: a,
                } = r.musicExternalApi,
                s = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR)(),
                u = e.get(ef.xi),
                c = e.get(ef.Tz),
                m = e.get(ef.V0),
                p = {
                  prefixUrl: (0, g.getTldHost)(o, t, eR.M),
                  retryPolicyConfig: a,
                  timeouts: n.getFileInfoResource,
                  params: {
                    common: {
                      oauth: u.token,
                      client: (0, en.$)(),
                      device: (0, eU.q)(),
                      language: s,
                    },
                  },
                },
                d = c.repositoryContainer.fileStorage,
                U = c.repositoryContainer.tracksRepository,
                x = c.repositoryContainer.usersTracksRepository;
              return d && U && x
                ? new ei.sp(l, p, {
                    fileStorage: d,
                    tracksRepository: U,
                    usersTracksRepository: x,
                    hooks: c.hooks,
                    variables: {
                      get uid() {
                        return m.get(ex.B.YmUid);
                      },
                      secretKey: i.secretKey,
                    },
                  })
                : new L.d(l, p);
            }),
            [ef.q2]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new f.O(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.topResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.n]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new h.c(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.artistsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Ci]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new k.t(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.slidesResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.JG]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR),
                l = e.get(ef.xi),
                u = s();
              return new v.S(u, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.redAlertResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.w5]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new w.U(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.rotorResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Fe]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new T.x(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.searchResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Gp]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new E.P(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.searchResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.lk]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new S.B(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.playlistResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.SR]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new H.m(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.playlistsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.vl]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new A.m(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.pinResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.ZO]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new M.k(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.metatagsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.jb]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new q.c(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.tagResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.dk]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new $.l(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.feedResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.X8]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi),
                u = e.get(ef.Tz),
                c = new C.I(s, {
                  prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                  retryPolicyConfig: n,
                  timeouts: o.pinsResource,
                  params: {
                    common: {
                      oauth: l.token,
                      client: (0, en.$)(),
                      device: (0, eU.q)(),
                      language: a,
                    },
                  },
                });
              return u.cacheController
                ? (0, ei.St)({
                    resource: c,
                    cacheController: u.cacheController,
                    config: {
                      common: { resourceName: C.I.constructor.name },
                      enabled: !0,
                      priority: ei.Jc.HIGH,
                      ttl: 6048e5,
                    },
                  })
                : c;
            }),
            [ef.O_]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new y.E(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.musicHistoryResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.EN]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new b.Y(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.dynamicPagesResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.sD]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new B.U(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.chartResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.m_]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new D.V(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.clipsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Ve]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new V.A(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.lyricViewsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.o]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new Y.h(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.nonMusicResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.uR]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new O.B(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.donationResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.aH]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new z.h(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.streamsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.yO]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new _.k(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.loaderResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.qs]: (0, a.ri)((e) => {
              let { resources: t } = e.get(ef.U5),
                { timeouts: r, retryPolicyConfig: i } = t.musicExternalApi,
                o = e.get(ef.SL).getLanguage(),
                n = e.get(ef.UR)({ credentials: "omit" });
              return new P.G(n, {
                prefixUrl: "",
                retryPolicyConfig: i,
                timeouts: r.prefixlessResource,
                params: {
                  common: {
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: o,
                  },
                },
              });
            }),
            [ef.cl]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new G.T(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.filtersResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Mq]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)();
              return new I.m(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.offersResource,
                params: {
                  common: {
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.bT]: (0, a.ri)((e) => {
              let { acqOffers: t } = e.get(ef.U5),
                { brand: r, service: o, environment: n, appVersion: g } = t,
                a = e.get(ef.xi),
                s = e.get(ef.SL).getLanguage(),
                l = e.get(ef.UR),
                u = a.token || null,
                c = l({ credentials: "omit" });
              return new i.YO({
                brand: r,
                service: o,
                environment: n,
                appVersion: g,
                etld: "yandex.net",
                platform: "Desktop",
                lang: s,
                oAuthToken: u,
                requester: (0, eh.E)(c),
              });
            }),
            [ef.wc]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new J.T(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.ugcResource,
                params: {
                  common: { oauth: l.token, client: (0, en.$)(), language: a },
                },
              });
            }),
            [ef.Nt]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new N.Y(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.collectionResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Ep]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new F.j(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.adsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.UY]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new K.E(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.afterTrackResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.KM]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new j.h(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.personalResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.ag]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi),
                u = e.get(ef.Tz),
                c = new X.K(s, {
                  prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                  retryPolicyConfig: n,
                  timeouts: o.disclaimersResource,
                  params: {
                    common: {
                      oauth: l.token,
                      client: (0, en.$)(),
                      device: (0, eU.q)(),
                      language: a,
                    },
                  },
                });
              return u.cacheController
                ? (0, ei.St)({
                    resource: c,
                    cacheController: u.cacheController,
                    config: {
                      common: { resourceName: X.K.constructor.name },
                      enabled: !0,
                      priority: ei.Jc.HIGH,
                      ttl: 6048e5,
                    },
                  })
                : c;
            }),
            [ef.A7]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new Z.C(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.familyResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef._F]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new Q.A(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.childrenLandingResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.BK]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new W.m(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.landingBlocksResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.o4]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new ee.x(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.promoResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
            [ef.Vw]: (0, a.ri)((e) => {
              let { resources: t, player: r } = e.get(ef.U5),
                { timeouts: i, retryPolicyConfig: o } = t.musicExternalApi,
                n = e.get(ef.UR)({ credentials: "include" });
              return new et.X(n, {
                prefixUrl: r.telemetry.telemetryUrl,
                retryPolicyConfig: o,
                timeouts: i.telemetryResouce,
                params: { common: { client: (0, en.$)() } },
              });
            }),
            [ef.uL]: (0, a.ri)((e) => {
              let { resources: r } = e.get(ef.U5),
                {
                  prefixUrl: i,
                  timeouts: o,
                  retryPolicyConfig: n,
                } = r.musicExternalApi,
                a = e.get(ef.SL).getLanguage(),
                s = e.get(ef.UR)(),
                l = e.get(ef.xi);
              return new er.h(s, {
                prefixUrl: (0, g.getTldHost)(i, t, eR.M),
                retryPolicyConfig: n,
                timeouts: o.labelsResource,
                params: {
                  common: {
                    oauth: l.token,
                    client: (0, en.$)(),
                    device: (0, eU.q)(),
                    language: a,
                  },
                },
              });
            }),
          })
          .register(
            ef.Yw,
            (0, a.ri)((e) => {
              let t = {
                  app_name: "Browser",
                  app_version: (0, ed.b)() || "",
                  title: "Music Desktop App",
                  device_id: (window?.ENABLE_YNISON_REMOTE_CONTROL ? window?.DEVICE_INFO?.device_id : undefined) ?? (0, n.Z)(),
                  type: o.Yi.WEB,
                },
                r = e.get(ef.Hz).getPassportUid(),
                i = e.get(ef.xi);
              return new o.QJ({
                deviceConfig: t,
                multiAuthUserId: r,
                oauth: i.token,
                ynisonConnectionConfig: eT.ynisonConnectionConfig,
                variables: { shadow: !(window?.ENABLE_YNISON_REMOTE_CONTROL ?? false) },
              });
            }),
          );
      }
    },
  },
]);
