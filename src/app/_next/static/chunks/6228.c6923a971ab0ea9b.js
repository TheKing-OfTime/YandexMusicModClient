"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6228],
  {
    66228: function (e, t, a) {
      a.d(t, {
        config: function () {
          return l;
        },
      });
      var n = a(91525),
        s = a(14786),
        i = a(19327),
        c = a(68363),
        r = a(33551),
        u = a(52138),
        o = a(30518),
        f = a(88979);
      let l = () =>
        (0, n.Z)((0, r.config)(), {
          resources: {
            musicExternalApi: {
              gateway: {
                prefixUrl: (0, o.s)("https://api.music.yandex.".concat(c.M)),
              },
              retryPolicyConfig: f.c,
              defaultTimeout: s.ys,
              timeouts: s.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "next.music.yandex.ru",
            gateway: {
              prefixUrl: (0, o.s)("https://api.music.yandex.".concat(c.M)),
            },
          },
          dev: { panel: !0 },
          oldWebHost: "music.yandex.".concat(c.M),
          afisha: {
            clientId: (0, u.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !0 },
        });
    },
  },
]);
