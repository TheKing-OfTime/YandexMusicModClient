"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2879, 2799, 5878, 4041],
  {
    92799: function (e, t, n) {
      n.d(t, {
        config: function () {
          return l;
        },
      });
      var o = n(99029),
        a = n(24473),
        r = n(56575),
        i = n(42596);
      n(9021);
      var s = n(21535);
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
              host: "https://oauth.yandex.".concat(r.M),
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
              host: "https://passport.yandex.".concat(r.M),
              origin: "music_desktop",
            },
            blackbox: {
              host: "http://blackbox.envoy.localhost:9080",
              enabled: !1,
            },
            resources: {
              musicExternalApi: {
                retryPolicyConfig: i.c,
                defaultTimeout: a.ys,
                timeouts: a.mZ,
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
                r.M,
                "/download/?autodownload=1",
              ),
            },
            iframe: { entityBaseUrl: "https://music.yandex.".concat(r.M) },
            redirects: {
              KZ: { fromTLD: [o.l.RU], toTLD: o.l.KZ },
              UZ: { fromTLD: [o.l.RU], toTLD: o.l.UZ },
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
    92879: function (e, t, n) {
      n.d(t, {
        config: function () {
          return l;
        },
      });
      var o = n(79904),
        a = n(63660),
        r = n(51858),
        i = n(56575),
        s = n(92799),
        c = n(84041),
        d = n(21535);
      let l = () => {
        let e = d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
          ? "https://api.music.yandex.".concat(i.M)
          : "https://api.music.qa.yandex.".concat(i.M);
        return (0, o.Z)((0, s.config)(), {
          resources: { musicExternalApi: { prefixUrl: e } },
          player: {
            prefixUrl: e,
            overembed: !1,
            secretKey: (0, r.S)(),
            externalDomain: "localhost.music.yandex.ru",
          },
          dev: {
            panel: !0,
            allowOverwriteExperiments: !0,
            exposeSonataStateInWindow: !0,
          },
          tvm: {
            enabled: !0,
            destinations: ["blackbox"],
            ...((0, a.toBoolean)(d.env.USE_QYP_TVM)
              ? { host: "http://local-music-dev.vla.yp-c.yandex.net/tvm" }
              : {}),
          },
          passportCredentials: {
            host: "https://passport.yandex.".concat(i.M),
            origin: "music_desktop",
          },
          blackbox: {
            host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
            enabled: !0,
          },
          oldWebHost: d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
            ? "music.yandex.".concat(i.M)
            : "music.qa.yandex.".concat(i.M),
          afisha: {
            clientId: (0, c.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !0 },
          iframe: { entityBaseUrl: "https://music.qa.yandex.".concat(i.M) },
          rsc: { useCache: !1 },
        });
      };
    },
    9021: function (e, t, n) {},
    84041: function (e, t, n) {
      n.d(t, {
        $: function () {
          return s;
        },
      });
      var o = n(51838),
        a = n(19910),
        r = n(98132);
      let i = {
          WINDOWS: "0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",
          MACOS: "05c45ae8-b869-4ec1-848c-4b314fbadc17",
          LINUX: "d2bcdb71-90ac-493b-b68f-024321954a5d",
          WEB: "b200fd55-5a52-4fa2-b5db-d163e986a61d",
        },
        s = () => {
          switch ((0, a.y)((0, o.X)())) {
            case r.B.WINDOWS:
              return i.WINDOWS;
            case r.B.MACOS:
              return i.MACOS;
            case r.B.LINUX:
              return i.LINUX;
          }
          return i.WEB;
        };
    },
  },
]);
