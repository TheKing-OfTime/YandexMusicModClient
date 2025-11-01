"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4328, 9894],
    {
        64328: (e, t, o) => {},
        99894: (e, t, o) => {
            o.d(t, { config: () => d });
            var n = o(17324),
                r = o(46039),
                i = o(66103),
                a = o(25883);
            o(64328);
            var s = o(49124);
            let d = () => {
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
                        host: "https://oauth.yandex.".concat(i.B),
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
                        host: "https://passport.yandex.".concat(i.B),
                        origin: "music_desktop",
                    },
                    blackbox: {
                        host: "http://blackbox.envoy.localhost:9080",
                        enabled: !1,
                    },
                    resources: {
                        musicExternalApi: {
                            retryPolicyConfig: a.t,
                            defaultTimeout: r.Aj,
                            timeouts: r.LE,
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
                            i.B,
                            "/download/?autodownload=1",
                        ),
                    },
                    iframe: {
                        entityBaseUrl: "https://music.yandex.".concat(i.B),
                    },
                    redirects: {
                        KZ: { fromTLD: [n.r.RU], toTLD: n.r.KZ },
                        UZ: { fromTLD: [n.r.RU], toTLD: n.r.UZ },
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
