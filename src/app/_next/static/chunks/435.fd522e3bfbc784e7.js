"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [435, 2808],
  {
    70435: function (e, t, n) {
      n.d(t, {
        config: function () {
          return i;
        },
      });
      var o = n(49080),
        r = n(92808),
        a = n(21535);
      let s = () => ({
          rumId: "ru.music.frontend",
          project: "music.frontend.desktop",
          service: "frontend-desktop",
          platform: "desktop",
        }),
        c = () => ({ project: "music.frontend.desktop", platform: "desktop" }),
        i = () => {
          var e, t;
          return {
            client: "YandexMusicWeb/1.0",
            dev: { panel: !0 },
            logger: {
              uaDisabled: (e = !!a.env.SERVER_UNIFIED_AGENT_DISABLED),
              uaServerAddress:
                null !== (t = a.env.SERVER_UNIFIED_AGENT_ADDRESS) &&
                void 0 !== t
                  ? t
                  : "http://localhost:12344",
              errorBooster: {
                ...c(),
                page: "window.location.pathname",
                version: a.env.APP_VERSION || "",
                environment: "production",
                unhandledRejection: !0,
                uncaughtException: !0,
                resourceFails: !0,
              },
            },
            oauthCredentials: {
              host: "https://oauth.yandex.".concat(o.M),
              clientId: "97fe03033fa34407ac9bcf91d5afed5b",
            },
            tvm: {
              tvmtoolAuthToken: a.env.TVMTOOL_LOCAL_AUTHTOKEN,
              self: "music_test",
              destinations: ["blackbox"],
              host: "http://localhost:8001",
              enabled: !1,
            },
            rumSettings: {
              ...s(),
              page: "window.location.pathname",
              heroElement: "body",
              version: a.env.APP_VERSION || "",
              environment: "production",
            },
            passportCredentials: {
              host: "https://passport.yandex.".concat(o.M),
              origin: "music_desktop",
            },
            blackbox: {
              host: "http://blackbox.envoy.localhost:9080",
              enabled: !1,
            },
            metrikaSettings: (0, r.k)(),
          };
        };
    },
    92808: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var o = n(35188),
        r = n(3872),
        a = n(21749);
      let s = { MACOS: "95673848", WINDOWS: "95673843", WEB: "95673834" },
        c = () => {
          switch ((0, r.y)((0, o.X)())) {
            case a.B.MACOS:
              return s.MACOS;
            case a.B.WINDOWS:
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
