"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2799, 5878],
  {
    92799: function (e, o, t) {
      t.d(o, {
        config: function () {
          return l;
        },
      });
      var n = t(99029),
        r = t(24473),
        i = t(56575),
        a = t(42596);
      t(9021);
      var s = t(21535);
      let c = () => ({
          rumId: "ru.music.frontend.desktop",
          project: "music.frontend.desktop",
          service: "frontend-desktop",
          platform: "desktop",
        }),
        d = () => ({ project: "music.frontend.desktop", platform: "desktop" }),
        l = () => {
          var e;
          return {
            client: "YandexMusicWeb/1.0",
            dev: {
              panel: !0,
              allowOverwriteExperiments: !0,
              exposeSonataStateInWindow: !0,
            },
            logger: {
              uaDisabled: !!s.env.SERVER_UNIFIED_AGENT_DISABLED,
              uaServerAddress:
                null !== (e = s.env.SERVER_UNIFIED_AGENT_ADDRESS) &&
                void 0 !== e
                  ? e
                  : "http://localhost:12344",
              uaProtoPath:
                s.env.UA_PROTO_PATH ||
                "../../packages/unified-agent/build/proto/unified_agent.proto",
              errorBooster: {
                ...d(),
                page: "window.location.pathname",
                version: s.env.APP_VERSION || "",
                environment: "production",
                unhandledRejection: !0,
                uncaughtException: !0,
                resourceFails: !0,
              },
            },
            oauthCredentials: {
              host: "https://oauth.yandex.".concat(i.M),
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
              ...c(),
              page: "window.location.pathname",
              heroElement: "body",
              version: s.env.APP_VERSION || "",
              environment: "production",
            },
            passportCredentials: {
              host: "https://passport.yandex.".concat(i.M),
              origin: "music_desktop",
            },
            blackbox: {
              host: "http://blackbox.envoy.localhost:9080",
              enabled: !1,
            },
            resources: {
              musicExternalApi: {
                retryPolicyConfig: a.c,
                defaultTimeout: r.ys,
                timeouts: r.mZ,
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
                checkForLoadWindowSize: 1,
                loadWindowSize: 5,
                mediaSourceTtlMs: 216e5,
                mediaElementErrorReloadCount: 2,
                windowSize: 30,
                setupQueueWindowSize: 80,
              },
              configVariablesPromoLandingPlayback: {
                checkForLoadWindowSize: 1,
                loadWindowSize: 5,
                mediaSourceTtlMs: 216e5,
                mediaElementErrorReloadCount: 2,
                windowSize: 30,
                setupQueueWindowSize: 80,
              },
              configVariablesTrailerPlayback: {
                mediaElementErrorReloadCount: 2,
                windowSize: 30,
                setupQueueWindowSize: 80,
                storePlaysProgressIntervalMs: 5e3,
              },
              hlsErrorRetryLimit: 2,
              yaspVersionStable: "12707",
              vhMediaProvider: {
                service: "ya-music",
                from: "ya-music",
                vhUrl: "https://frontend.vh.yandex.ru/player/",
              },
              vhPlayerSdkVersion: "12569",
              telemetry: {
                telemetryUrl: "https://log.strm.yandex.ru",
                testTelemetryUrl: "https://log-test.strm.yandex.net",
                service: "WebMusic",
                from: "ya-music",
                playerTypeForVsid: "MWE",
              },
            },
            downloadDesktop: {
              url: "https://music.yandex.".concat(
                i.M,
                "/download/?autodownload=1",
              ),
            },
            iframe: { entityBaseUrl: "https://music.yandex.".concat(i.M) },
            redirects: {
              KZ: { fromTLD: [n.l.RU], toTLD: n.l.KZ },
              UZ: { fromTLD: [n.l.RU], toTLD: n.l.UZ },
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
    9021: function (e, o, t) {},
  },
]);
