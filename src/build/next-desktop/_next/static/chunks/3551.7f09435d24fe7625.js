"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3551, 3899],
  {
    33551: function (e, t, n) {
      n.d(t, {
        config: function () {
          return u;
        },
      });
      var o,
        a,
        r = n(68363),
        s = n(20162),
        c = n(21535);
      let i = () => ({
          rumId: "ru.music.frontend",
          project: "music.frontend.desktop",
          service: "frontend-desktop",
          platform: "desktop",
        }),
        d = () => ({ project: "music.frontend.desktop", platform: "desktop" }),
        u = () => ({
          client: "YandexMusicWeb/1.0",
          dev: { panel: !0 },
          logger: {
            uaDisabled: (o = !!c.env.SERVER_UNIFIED_AGENT_DISABLED),
            uaServerAddress:
              null !== (a = c.env.SERVER_UNIFIED_AGENT_ADDRESS) && void 0 !== a
                ? a
                : "http://localhost:12344",
            errorBooster: {
              ...d(),
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
            host: "http://localhost:32272",
            enabled: !1,
          },
          rumSettings: {
            ...i(),
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
            host: "http://blackbox.yandex.net/blackbox",
            enabled: !1,
          },
          metrikaSettings: (0, s.k)(),
        });
    },
    20162: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var o = n(28307),
        a = n(93991),
        r = n(38060);
      let s = { MACOS: "95673848", WINDOWS: "95673843", WEB: "95673834" },
        c = () => {
          switch ((0, a.y)((0, o.X)())) {
            case r.B.MACOS:
              return s.MACOS;
            case r.B.WINDOWS:
              return s.WINDOWS;
          }
          return s.WEB;
        },
        i = () => ({
          id: c(),
          webvisor: !0,
          clickmap: !0,
          trackLinks: !0,
          accurateTrackBounce: !0,
          deffer: !0,
        });
    },
  },
]);
