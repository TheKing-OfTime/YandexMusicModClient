(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6008, 7264, 6172],
  {
    87640: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BuySubscriptionInitializer: function () {
            return n;
          },
        });
      var i = a(62569),
        r = a(65067),
        l = a(41450),
        s = a(13534);
      let n = (0, i.Pi)(() => {
        let { user: e } = (0, s.oR4)(),
          { hasFreeUserAccess: t } = (0, s.NMB)(),
          a = (0, l.F)("music", t),
          {
            payment: { environment: i },
          } = (0, s.uK4)().get(s.U5t),
          n = (0, r.useRef)(new Date()),
          o = (0, r.useCallback)(async () => {
            let t = "production" === i ? e.account.data.uid : void 0;
            try {
              await a.getData({ uid: t });
            } catch (e) {}
            n.current = new Date();
          }, [a, i, e]),
          d = (0, r.useCallback)(async () => {
            let e = n.current.getTime() < Date.now() - 6e5;
            "visible" === document.visibilityState && e && (await o());
          }, [o]);
        (0, r.useEffect)(() => {
          if (!t) return;
          let e = new AbortController();
          return (
            window.addEventListener("focus", d, { signal: e.signal }),
            () => {
              e.abort();
            }
          );
        }, [t, d]);
      });
    },
    31336: function (e, t, a) {
      "use strict";
      a.d(t, {
        CommunicationsInitializer: function () {
          return s;
        },
      });
      var i = a(62569),
        r = a(65067),
        l = a(13534);
      let s = (0, i.Pi)(() => {
        let { user: e, redAlert: t, communication: a } = (0, l.oR4)();
        (0, r.useEffect)(() => {
          e.isAuthorized && Promise.allSettled([a.getData(), t.getData()]);
        }, [t, a, e.isAuthorized]);
      });
    },
    96522: function (e, t, a) {
      "use strict";
      a.d(t, {
        CrackdownInitializer: function () {
          return n;
        },
      });
      var i = a(62569),
        r = a(13534),
        l = a(96786),
        s = a(57907);
      let n = (0, i.Pi)(() => {
        var e;
        let {
            user: t,
            modals: { crackdownModal: a },
            settings: { isMobile: i },
            experiments: n,
            sonataState: o,
          } = (0, r.oR4)(),
          { isFreemium: d } = (0, r.NMB)(),
          u = t.isAuthorized && d && !i,
          c =
            null === (e = n.getExperiment(r.peG.WebNextCrackdownInterval)) ||
            void 0 === e
              ? void 0
              : e.value.interval;
        (0, s.b)({
          isEnabled: u,
          intervalMs: (0, l.p)(c),
          modal: a,
          sonataState: o,
        });
      });
    },
    60740: function (e, t, a) {
      "use strict";
      a.d(t, {
        PromoLandingCrackdownInitializer: function () {
          return n;
        },
      });
      var i = a(62569),
        r = a(13534),
        l = a(96786),
        s = a(57907);
      let n = (0, i.Pi)(() => {
        var e;
        let {
            modals: { crackdownModal: t, promoLandingBuySubscriptionModal: a },
            settings: { isMobile: i },
            experiments: n,
            promolanding: { state: o },
          } = (0, r.oR4)(),
          { isFreemium: d } = (0, r.NMB)(),
          u = d && n.checkExperiment(r.peG.WebNextPromoLanding, "on"),
          c =
            null ===
              (e = n.getExperiment(
                r.peG.WebNextPromoLandingCrackdownInterval,
              )) || void 0 === e
              ? void 0
              : e.value.interval;
        (0, s.b)({
          isEnabled: u,
          intervalMs: (0, l.p)(c),
          modal: i ? a : t,
          playbackId: r.jiA.PROMO_LANDING,
          sonataState: o,
        });
      });
    },
    96786: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return i;
        },
      });
      let i = (e) => {
        if ("number" == typeof e && !Number.isNaN(e)) return e;
        if ("string" == typeof e) {
          let t = Number.parseInt(e, 10);
          if (!Number.isNaN(t)) return t;
        }
      };
    },
    57907: function (e, t, a) {
      "use strict";
      a.d(t, {
        b: function () {
          return n;
        },
      });
      var i = a(65067),
        r = a(93093),
        l = a(98375),
        s = a(13534);
      let n = (e) => {
        let {
            isEnabled: t,
            intervalMs: a,
            modal: n,
            playbackId: o,
            sonataState: d,
          } = e,
          u = (0, i.useRef)(new Date()),
          c = (0, s.R$C)(),
          m = (0, r.W)(() => {
            u.current = new Date();
          }),
          g = (0, r.W)(() => {
            let e = null != a ? a : 18e5;
            u.current.getTime() < Date.now() - e && (n.open(), m());
          });
        (0, i.useEffect)(() => {
          if (!t) return;
          let e =
            null == c
              ? void 0
              : c.getState(o).playerState.status.onChange((e) => {
                  e === l.FY.ENDED && g();
                });
          return () => {
            null == e || e();
          };
        }, [t, c, g, o]),
          (0, i.useEffect)(() => {
            t && n.isOpened && (null == c || c.pause(o));
          }, [t, n.isOpened, c, d.status, o]),
          (0, i.useEffect)(() => {
            if (!t) return;
            let e = new AbortController();
            return (
              window.addEventListener("mousemove", m, { signal: e.signal }),
              window.addEventListener("keydown", m, { signal: e.signal }),
              window.addEventListener("touchstart", m, { signal: e.signal }),
              () => {
                e.abort();
              }
            );
          }, [t, m]);
      };
    },
    56320: function (e, t, a) {
      "use strict";
      a.d(t, {
        DeeplinkInitializer: function () {
          return u;
        },
      });
      var i = a(62569),
        r = a(98730),
        l = a(65067),
        s = a(55188),
        n = a(13534);
      let o = [
          n.wxR.DEEPLINK,
          n.wxR.SEEDS,
          n.wxR.STATION_ID,
          n.wxR.OPEN_PLAYER,
          n.wxR.SCREEN,
        ],
        d = () => {
          let {
              fullscreenPlayer: e,
              sonataState: t,
              user: a,
              location: i,
            } = (0, n.oR4)(),
            d = (0, r.useSearchParams)(),
            u = (0, n.m5R)(),
            c = d.get(n.wxR.SEEDS),
            m = d.get(n.wxR.STATION_ID),
            { isFreemium: g } = (0, n.NMB)(),
            { state: h, toggleTrue: y } = (0, s.O)(!1),
            v = (0, l.useMemo)(() => {
              let e = c ? c.split(",") : [];
              return m && e.unshift(m), e;
            }, [c, m]),
            { togglePlay: p } = (0, n.QhE)({
              seeds: v,
              pageIdForFrom: n.Rhz.RADIO,
              blockIdForFrom: v.join("_"),
            });
          (0, l.useEffect)(() => {
            if (h) {
              let e = new URL(window.location.href);
              o.forEach((t) => e.searchParams.delete(t)),
                u(e.toString()),
                i.setHref(window.location.href);
            }
          }, [i, u, h, i.href]),
            (0, l.useEffect)(() => {
              if (d.get(n.wxR.DEEPLINK) === n.Kj$.PLAY_VIBE) {
                if (!a.isAuthorized || g) {
                  y();
                  return;
                }
                t.setShouldApplyYnisonState(!1),
                  p(),
                  "true" === d.get(n.wxR.OPEN_PLAYER) && e.modal.open(),
                  y();
              }
              return () => {
                t.setShouldApplyYnisonState(!0);
              };
            }, [e.modal, g, d, y, t, p, a.isAuthorized]);
        },
        u = (0, i.Pi)(() => (d(), null));
    },
    55103: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DesktopInitializer: function () {
            return o;
          },
        });
      var i = a(75441),
        r = a(65067),
        l = a(19684),
        s = a(13028),
        n = a(13534);
      let o = () => {
        let { language: e } = (0, n.ZSk)();
        {
          let { theme: t } = (0, n.FgM)(),
            a = (0, l.s)();
          (0, s.Tk)(),
            (0, s.Er)(),
            (0, s.bO)(),
            (0, s.vs)(),
            (0, s.g3)(),
            (0, s.Zw)(),
            (0, s.ao)(),
            (0, s.lA)(),
            (0, r.useEffect)(() => {
              (0, s.Yl)(e), (0, s.l7)();
            }, [e]),
            (0, r.useEffect)(() => {
              let e = (0, n.bop)();
              e && a.count(e, "appVersion");
            }, [a]),
            (0, r.useEffect)(() => {
              t && ((0, s.F5)(t), a.count(t, "appTheme"));
            }, [t]);
        }
        return (0, i.jsx)(s.Pj, {});
      };
    },
    31784: function (e, t, a) {
      "use strict";
      a.d(t, {
        DesktopPaywallInitializer: function () {
          return n;
        },
      });
      var i = a(62569),
        r = a(65067),
        l = a(89150),
        s = a(13534);
      let n = (0, i.Pi)(() => {
        var e;
        let { user: t, paywall: a, settings: i, experiments: n } = (0, s.oR4)(),
          { isFreemium: o } = (0, s.NMB)(),
          { shouldShowFamilyInvite: d } = (0, l.v0)(),
          u =
            null === (e = i.browserInfo) || void 0 === e ? void 0 : e.isMobile,
          c = (0, s.uK4)().get(s.ceh),
          m = (0, r.useCallback)(() => {
            var e;
            let t = parseInt(
              null ===
                (e = n.experiments.get(s.peG.WebNextDesktopPaywallInterval)) ||
                void 0 === e
                ? void 0
                : e.value.interval,
              10,
            );
            return Number.isNaN(t) ? 2592e5 : t;
          }, [n.experiments]),
          g = (0, r.useCallback)(() => {
            a.openModal(),
              c.set(s.BUb.DesktopPaywall, { lastOnLoadShowDate: new Date() });
          }, [a, c]);
        (0, r.useEffect)(() => {
          if ((t.isAuthorized && !o) || u || d) return;
          let e = c.get(s.BUb.DesktopPaywall);
          (null !== e &&
            new Date(e.lastOnLoadShowDate).getTime() > Date.now() - m()) ||
            g();
        }, [t.isAuthorized, o, u, d, c, m, g]);
      });
    },
    78742: function (e, t, a) {
      "use strict";
      a.d(t, {
        FamilyInviteInitializer: function () {
          return n;
        },
      });
      var i = a(62569),
        r = a(65067),
        l = a(89150),
        s = a(13534);
      let n = (0, i.Pi)(() => {
        let e = (0, l.v0)(),
          {
            user: t,
            familyInvite: { start: a },
          } = (0, s.oR4)();
        (0, r.useEffect)(() => {
          e.shouldShowFamilyInvite &&
            e.inviteId &&
            (t.isAuthorized && e.clear(), a(e.inviteId));
        }, [t.isAuthorized, e, a]);
      });
    },
    44719: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SavedOfferInitializer: function () {
            return s;
          },
        });
      var i = a(62569),
        r = a(65067),
        l = a(13534);
      let s = (0, i.Pi)(() => {
        let {
            paymentWidgetModal: {
              modal: e,
              setTarget: t,
              setTariffOfferName: a,
              setServiceSessionId: i,
            },
            user: s,
          } = (0, l.oR4)(),
          { hasFreeUserAccess: n } = (0, l.NMB)(),
          o = (0, l.uK4)(),
          d = (0, r.useMemo)(() => o.get(l.ArX), [o]);
        (0, r.useLayoutEffect)(() => {
          if (!s.isAuthorized || !n || null === d) return;
          let r = d.get(l.BUb.Offer);
          if (null === r) return;
          let { target: o, serviceSessionId: u, tariffOfferName: c } = r;
          d.remove(l.BUb.Offer), t(o), i(u), c && a(c), e.open();
        }, [n, d, e, a, t, i, s.isAuthorized]);
      });
    },
    9280: function (e, t, a) {
      "use strict";
      a.d(t, {
        ServiceWorkerInitialiazer: function () {
          return l;
        },
      });
      var i = a(65067),
        r = a(13534);
      let l = () => {
        let e = (0, r.uK4)().get(r.P0V);
        (0, i.useEffect)(() => {
          "serviceWorker" in navigator &&
            navigator.serviceWorker.addEventListener("message", (t) => {
              var a, i, r, l, s;
              if (
                (null === (a = t.data) || void 0 === a ? void 0 : a.type) ===
                "PUT_RSC_WORKER_ERROR_MESSAGE_TYPE"
              ) {
                let a = new URL(
                  null === (r = t.data) || void 0 === r
                    ? void 0
                    : null === (i = r.payload) || void 0 === i
                      ? void 0
                      : i.url,
                );
                e.error(
                  "[RSC worker] Error getting url "
                    .concat(a.origin, " ")
                    .concat(a.pathname)
                    .concat(a.search, ", reason: ")
                    .concat(
                      null === (s = t.data) || void 0 === s
                        ? void 0
                        : null === (l = s.payload) || void 0 === l
                          ? void 0
                          : l.error,
                    ),
                );
              }
            });
        }, [e]);
      };
    },
    10521: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SettingsInitializer: function () {
            return n;
          },
        });
      var i = a(62569),
        r = a(65067),
        l = a(19684),
        s = a(13534);
      let n = (0, i.Pi)((e) => {
        let { browserInfo: t } = e,
          a = (0, l.s)(),
          { settings: i } = (0, s.oR4)(),
          n = (0, s.XfM)();
        i.setBrowserInfo(t),
          n && i.setPlatform(n),
          (0, r.useLayoutEffect)(() => {
            i.initializeLiteVersionMode();
          }, []),
          (0, r.useEffect)(() => {
            i.liteVersionMode && a.count(i.liteVersionMode, "liteVersionMode");
          }, [a, i.liteVersionMode]);
      });
    },
    5779: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          UrlInitializer: function () {
            return s;
          },
        });
      var i = a(62569),
        r = a(98730),
        l = a(13534);
      let s = (0, i.Pi)((e) => {
        let { host: t } = e,
          { location: a } = (0, l.oR4)(),
          i = (0, r.usePathname)(),
          s = (0, r.useSearchParams)().toString(),
          n = window.location.host,
          o = t || n,
          d = "https://".concat(o),
          u = "https://"
            .concat(o)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s);
        (d = o),
          (u = ""
            .concat(o)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s)),
          a.setPathname(i),
          a.setSearchParams(s),
          a.setHost(o),
          a.setTld((0, l.p$)(o) || l.B5v),
          a.setOrigin(d),
          a.setHref(u);
      });
    },
    41060: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          WebInitializer: function () {
            return s;
          },
        });
      var i = a(75441);
      a(65067);
      var r = a(13534);
      let l = (0, a(62569).Pi)((e) => {
          let { children: t, userIp: a } = e,
            { location: i } = (0, r.oR4)();
          return t;
        }),
        s = (e) => {
          let { userIp: t } = e,
            { experiments: a } = (0, r.oR4)();
          return (
            (0, r.uK4)().get(r.V0J).get(r.BUb.DisallowDeeplinksRedirect),
            (0, i.jsx)(l, { userIp: t })
          );
        };
    },
    71304: function (e, t, a) {
      "use strict";
      a.d(t, {
        AdvertProvider: function () {
          return u;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(98375),
        n = a(90508),
        o = a(13534);
      let d = null,
        u = (0, r.Pi)((e) => {
          let { children: t } = e,
            { advert: a, experiments: r, user: u, location: c } = (0, o.oR4)(),
            m = (0, o.wLl)();
          return (!d &&
            u.isAuthorized &&
            r.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") &&
            (d = new o.D_({
              logger: m,
              videoSlotId: n.Y1.SLOT,
              videoElementId: n.Y1.VIDEO,
            })),
          (0, l.useEffect)(() => {
            null == d || d.init(c.tld);
          }, [c.tld]),
          (0, l.useEffect)(() => {
            if (
              !r.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") ||
              !u.isAuthorized
            )
              return;
            let e =
              null == d
                ? void 0
                : d.state.isAdvertPlaying.onChange((e) => {
                    if ((a.setAdvertShown(e), e)) {
                      var t, i;
                      a.setType(
                        (null == d
                          ? void 0
                          : null === (t = d.state.advertData) || void 0 === t
                            ? void 0
                            : t.type) || null,
                      ),
                        a.setData(
                          (null == d
                            ? void 0
                            : null === (i = d.state.advertData) || void 0 === i
                              ? void 0
                              : i.data) || null,
                        );
                    } else a.reset();
                  });
            return () => {
              null == e || e();
            };
          }, [a, r, u.isAuthorized]),
          (0, l.useEffect)(() => {
            let e;
            if (a.isAdvertPlaybackCreated) {
              var t;
              e =
                null == d
                  ? void 0
                  : null === (t = d.audioAdvertPlayback) || void 0 === t
                    ? void 0
                    : t.state.playerState.event.onChange((e) => {
                        if (a.isAdvertShown) {
                          if (
                            (e === s.xg.END &&
                              (a.setAdvertShown(!1),
                              null == d || d.state.setDefaultState()),
                            e === s.xg.PLAYING)
                          ) {
                            a.setAdvertPlaying(!0);
                            return;
                          }
                          if (e === s.xg.END || e === s.xg.PAUSED) {
                            a.setAdvertPlaying(!1);
                            return;
                          }
                        }
                      });
            }
            return () => {
              null == e || e();
            };
          }, [a, a.isAdvertPlaybackCreated]),
          (0, l.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          r.checkExperiment(o.peG.WebNextAudioVideoAdvert, "on") &&
            u.isAuthorized)
            ? (0, i.jsx)(o.SD4.Provider, { value: d, children: t })
            : t;
        });
    },
    52087: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AnalyticsProvider: function () {
            return d;
          },
        });
      var i = a(75441),
        r = a(65067),
        l = a(4875),
        s = a(19684),
        n = a(13534);
      let o = null,
        d = (e) => {
          let { children: t } = e,
            a = (0, s.s)(),
            d = (0, n.wLl)(),
            u = (0, n.uK4)().get(n.V0J),
            c = (0, r.useMemo)(() => {
              if (o) return o;
              let e = "on" === u.get(n.BUb.AllowAnalyticsLogs),
                t = (0, l.HQ)((e) => a.count(e, "evgen"), d, e),
                i = (0, l.hz)(),
                r = (0, l.y_)();
              return (o = new l.yx(t, i, r));
            }, [u, d, a]);
          return (0, i.jsx)(n.fCM.Provider, {
            value: c,
            children: (0, i.jsx)(n.tKr, { children: t }),
          });
        };
    },
    26114: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return u;
          },
        });
      var i = a(75441),
        r = a(65067),
        l = a(13534),
        s = a(97141);
      let n = null,
        o = async (e) => {
          let {
              userAgent: t,
              hostTld: a,
              forwardedForY: i,
              changeLanguageToken: r,
              tracestate: s,
              traceparent: n,
              icookie: o,
              serverDetectedLocale: d,
              env: u,
              browserName: c,
              browserVersion: m,
              executionContextStore: g,
            } = e,
            h = await (0, l.ZO0)({
              userAgent: t,
              tld: a,
              forwardedForY: i,
              changeLanguageToken: r,
              tracestate: s,
              traceparent: n,
              icookie: o,
              serverDetectedLocale: d,
              env: u,
              browserName: c,
              browserVersion: m,
              executionContextStore: g,
            });
          return await h.get(l.SLO).loadDictionary(), h;
        },
        d = (e) => {
          let { children: t, containerLoader: a } = e;
          return (
            n || (n = (0, r.use)(a)),
            (0, i.jsx)(l.Xld.Provider, { value: n, children: t })
          );
        },
        u = (e) => {
          let {
              children: t,
              hostTld: a,
              env: l,
              forwardedForY: n,
              tracestate: u,
              traceparent: c,
              icookie: m,
              changeLanguageToken: g,
              serverDetectedLocale: h,
              userAgent: y,
              browserName: v,
              browserVersion: p,
              executionContextStore: S,
            } = e,
            E = o({
              userAgent: y,
              hostTld: a,
              forwardedForY: n,
              changeLanguageToken: g,
              tracestate: u,
              traceparent: c,
              icookie: m,
              serverDetectedLocale: h,
              env: l,
              browserName: v,
              browserVersion: p,
              executionContextStore: S,
            });
          return (0, i.jsx)(r.Suspense, {
            fallback: (0, i.jsx)(s.b2, {}),
            children: (0, i.jsx)(d, { containerLoader: E, children: t }),
          });
        };
    },
    55759: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          HistoryProvider: function () {
            return d;
          },
        });
      var i = a(75441),
        r = a(98730),
        l = a(65067),
        s = a(93093),
        n = a(13534);
      let o = null,
        d = (e) => {
          let { children: t } = e,
            a = (0, n.uK4)(),
            d = (0, r.useRouter)(),
            u = (0, r.usePathname)(),
            c = (0, r.useSearchParams)(),
            [m, g] = (0, l.useState)(!1),
            [h, y] = (0, l.useState)(!1),
            [v, p] = (0, l.useState)(null),
            S = (0, l.useRef)(0),
            E = (0, l.useRef)(null),
            b = (0, l.useMemo)(() => {
              if (o) return o;
              let e = a.get(n.ArX);
              return (o = new n.QQ$(e));
            }, [a]),
            f = (0, s.W)(() => {
              b && (g(b.canBack), y(b.canForward), p(b.state));
            }),
            P = (0, s.W)((e) => {
              b && (b.replaceState(e), d.replace(e.href));
            }),
            I = (0, s.W)((e) => {
              b && (b.pushState(e), f());
            }),
            k = (0, s.W)(() => {
              b && (b.back(), f(), d.back());
            }),
            C = (0, s.W)(() => {
              b && (b.forward(), f(), d.forward());
            });
          (0, l.useEffect)(() => {
            var e;
            let t = [u, c.toString()].join("?");
            (!(null == b ? void 0 : b.state) ||
              (null == b
                ? void 0
                : null === (e = b.state) || void 0 === e
                  ? void 0
                  : e.isLocationNotEqual(t))) &&
              I({ href: t });
          }, [b, u, c, I]);
          {
            let e = (0, n.rDv)(u, c);
            e !== E.current && ((E.current = e), (S.current = S.current + 1));
          }
          return (0, i.jsx)(n.TlZ.Provider, {
            value: {
              pushState: I,
              replaceState: P,
              canForward: h,
              canBack: m,
              back: k,
              forward: C,
              state: v,
              length: S.current,
            },
            children: t,
          });
        };
    },
    54660: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LayoutProvider: function () {
            return p;
          },
          setClientSideLayout: function () {
            return v;
          },
        });
      var i = a(75441),
        r = a(71361),
        l = a(62569),
        s = a(65067),
        n = a(9317),
        o = a(26669);
      let d = {
        Chrome: 105,
        ChromeMobile: 105,
        Edge: 105,
        Firefox: 104,
        MobileFirefox: 104,
        Opera: 90,
        OperaMobile: 80,
        Safari: 16,
        MobileSafari: 16,
        UCBrowser: 15,
        MSIE: 12,
        YandexBrowser: 23,
      };
      var u = a(32358),
        c = a(97141),
        m = a(80655),
        g = a.n(m);
      let h = (e) => {
        let { message: t, closeToast: a } = e;
        return (0, i.jsx)(c.Yj, {
          className: (0, u.W)(g().root, g().important),
          message: t,
          closeToast: a,
        });
      };
      var y = a(13534);
      let v = (e) => {
          {
            document.body.classList.remove("desktop"),
              e.setLayout((0, y.jPy)(window.innerWidth)),
              e.setIsLandscape(
                window.matchMedia("(orientation: landscape)").matches,
              );
            let t = window.screen.availHeight || window.innerHeight;
            e.setIsMobileLandscapeHeight(t < 450);
          }
        },
        p = (0, l.Pi)((e) => {
          let { children: t } = e,
            { formatMessage: a } = (0, n.Z)(),
            { notify: l } = (0, y.d$W)(),
            { settings: u } = (0, y.oR4)(),
            [c, m] = (0, o.z)(),
            [g, p] = (0, o.z)(),
            [S, E] = (0, o.z)(),
            [b, f] = (0, o.z)(),
            [P, I] = (0, o.z)(),
            [k, C] = (0, o.z)(),
            [T, _] = (0, o.z)();
          u.layout;
          let N = (0, s.useMemo)(
            () =>
              (0, r.Z)(() => {
                v(u);
              }, 100),
            [u],
          );
          (0, s.useEffect)(() => {
            (function (e) {
              if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version)
                return !1;
              let t = d[e.name];
              if (!t) return !1;
              let a = parseFloat(e.version);
              return !Number.isNaN(a) && a < t;
            })(u.browserInfo) &&
              l(
                (0, i.jsx)(h, {
                  message: a({ id: "warning-messages.update-your-browser" }),
                }),
                { containerId: y.W$x.IMPORTANT, single: !0 },
              );
          }, [a, l, u.browserInfo]),
            (0, s.useLayoutEffect)(() => {
              v(u);
            }, [u]),
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", N),
                () => {
                  window.removeEventListener("resize", N);
                }
              ),
              [N],
            );
          let A = (0, s.useMemo)(
            () => ({
              defaultLayoutRef: c,
              contentRef: g,
              contentRootRef: S,
              contentScrollRef: b,
              sideBannerRef: P,
              playlistStickyFiltersRef: k,
              playlistStaticFiltersRef: T,
              setContentRef: p,
              setDefaultLayoutRef: m,
              setContentRootRef: E,
              setContentScrollRef: f,
              setSideBannerRef: I,
              setPlaylistStickyFiltersRef: C,
              setPlaylistStaticFiltersRef: _,
            }),
            [c, m, g, S, b, p, E, f, I, P, k, T, C, _],
          );
          return (0, i.jsx)(y.VYl.Provider, { value: A, children: t });
        });
    },
    14288: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PrefetchDataProvider: function () {
            return o;
          },
        });
      var i = a(62569),
        r = a(65067),
        l = a(13534),
        s = a(54660);
      let n = async (e) => {
          let {
              experimentsData: t,
              userAccountData: a,
              userId: i,
              store: r,
              withPins: l = !0,
            } = e,
            { user: s, experiments: n, pinsCollection: o, disclaimers: d } = r;
          if (
            (await s.getAbout(a),
            s.puid && i.setPassportUid(s.puid),
            await Promise.allSettled([n.getData(t), d.getDisclaimers()]),
            s.isAuthorized)
          ) {
            let e = [s.getSettings(), r.library.getData()];
            l && e.push(o.getData()), await Promise.allSettled(e);
          }
        },
        o = (0, i.Pi)((e) => {
          let { children: t, ...a } = e,
            i = (0, l.oR4)(),
            o = (0, l.uK4)().get(l.Hzc);
          return (
            (0, s.setClientSideLayout)(i.settings),
            i.user.puid && o.setPassportUid(i.user.puid),
            i.user.account.loadingState === l.Gui.IDLE &&
              (0, r.use)(n({ store: i, userId: o, ...a })),
            t
          );
        });
    },
    58736: function (e, t, a) {
      "use strict";
      a.d(t, {
        PromoLandingShortcutsProvider: function () {
          return d;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(13534),
        n = a(65888);
      let o = null,
        d = (0, r.Pi)((e) => {
          let { children: t } = e,
            {
              promolanding: { state: a },
            } = (0, s.oR4)(),
            r = (0, l.useMemo)(
              () => (o || (o = new s.OI$(new s.yre())), o),
              [],
            );
          return (
            (0, n.N)({
              controller: r,
              sonataState: a,
              playbackId: s.jiA.PROMO_LANDING,
              groupId: s.Pwk.PROMO_LANDING,
            }),
            (0, l.useEffect)(
              () => (
                null == r || r.listen(),
                () => {
                  null == r || r.stopListening();
                }
              ),
              [r],
            ),
            (0, i.jsx)(s.cww.Provider, { value: r, children: t })
          );
        });
    },
    44959: function (e, t, a) {
      "use strict";
      a.d(t, {
        ShortcutsProvider: function () {
          return d;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(13534),
        n = a(65888);
      let o = null,
        d = (0, r.Pi)((e) => {
          let { children: t } = e,
            { sonataState: a } = (0, s.oR4)(),
            r = (0, l.useMemo)(
              () => (o || (o = new s.OI$(new s.yre())), o),
              [],
            );
          return (
            (0, n.N)({ controller: r, sonataState: a, groupId: s.Pwk.MAIN }),
            (0, l.useEffect)(
              () => (
                null == r || r.listen(),
                () => {
                  null == r || r.stopListening();
                }
              ),
              [r],
            ),
            (0, i.jsx)(s.cww.Provider, { value: r, children: t })
          );
        });
    },
    65888: function (e, t, a) {
      "use strict";
      a.d(t, {
        N: function () {
          return s;
        },
      });
      var i = a(65067),
        r = a(54306),
        l = a(13534);
      let s = (e) => {
        let { controller: t, sonataState: a, playbackId: s, groupId: n } = e,
          o = (0, l.R$C)(),
          d = (0, l.uK4)(),
          u = (0, r.K4)(),
          { experiments: c } = (0, l.oR4)(),
          m = c.checkExperiment(l.peG.WebNextPlayerBarBackgroundProgress, "on"),
          g = d.get(l.V0J);
        (0, i.useEffect)(
          () => (
            null == t ||
              t.addShortcutsListener(n, l.yxF.DECREASE_VOLUME, async () => {
                let e = m
                  ? await (null == o
                      ? void 0
                      : o.decreaseExponentVolume(0.05, s))
                  : await (null == o ? void 0 : o.decreaseVolume(0.05, s));
                g.set(l.BUb.YmPlayerVolume, e, { expires: 365 });
              }),
            null == t ||
              t.addShortcutsListener(n, l.yxF.INCREASE_VOLUME, async () => {
                let e = m
                  ? await (null == o
                      ? void 0
                      : o.increaseExponentVolume(0.05, s))
                  : await (null == o ? void 0 : o.increaseVolume(0.05, s));
                g.set(l.BUb.YmPlayerVolume, e, { expires: 365 });
              }),
            null == t ||
              t.addShortcutsListener(n, l.yxF.TOGGLE_MUTE, async () => {
                let e =
                  null == o
                    ? void 0
                    : o.getState(s).playerState.exponentVolume.value;
                void 0 !== e && (await u(a, e, s));
              }),
            () => {
              null == t || t.removeShortcutsListener(n, l.yxF.DECREASE_VOLUME),
                null == t ||
                  t.removeShortcutsListener(n, l.yxF.INCREASE_VOLUME),
                null == t || t.removeShortcutsListener(n, l.yxF.TOGGLE_MUTE);
            }
          ),
          [t, s, o, g, u, a, n, m],
        ),
          (0, i.useEffect)(() => {
            if (!a.isGenerativeContext)
              return (
                null == t ||
                  t.addShortcutsListener(n, l.yxF.MOVE_BACKWARD, async () => {
                    var e;
                    (null == o
                      ? void 0
                      : null === (e = o.getState(s).currentContext.value) ||
                          void 0 === e
                        ? void 0
                        : e.availableActions.moveBackward.value) &&
                      (await o.moveBackward(s));
                  }),
                null == t ||
                  t.addShortcutsListener(n, l.yxF.MOVE_FORWARD, async () => {
                    var e;
                    (null == o
                      ? void 0
                      : null === (e = o.getState(s).currentContext.value) ||
                          void 0 === e
                        ? void 0
                        : e.availableActions.moveForward.value) &&
                      (await (null == o ? void 0 : o.moveForward(s)));
                  }),
                null == t ||
                  t.addShortcutsListener(n, l.yxF.SLIDE_BACKWARD, async () => {
                    (null == o
                      ? void 0
                      : o.getState(s).playerState.progress.value.duration) &&
                      (await (null == o ? void 0 : o.slideBackward(2, s)));
                  }),
                null == t ||
                  t.addShortcutsListener(n, l.yxF.SLIDE_FORWARD, async () => {
                    (null == o
                      ? void 0
                      : o.getState(s).playerState.progress.value.duration) &&
                      (await (null == o ? void 0 : o.slideForward(2, s)));
                  }),
                () => {
                  null == t || t.removeShortcutsListener(n, l.yxF.MOVE_FORWARD),
                    null == t ||
                      t.removeShortcutsListener(n, l.yxF.MOVE_BACKWARD),
                    null == t ||
                      t.removeShortcutsListener(n, l.yxF.SLIDE_BACKWARD),
                    null == t ||
                      t.removeShortcutsListener(n, l.yxF.SLIDE_FORWARD);
                }
              );
          }, [t, o, g, a.isGenerativeContext, s, n]);
      };
    },
    43042: function (e, t, a) {
      "use strict";
      a.d(t, {
        SlamProvider: function () {
          return y;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(15937),
        n = a(3204),
        o = a(17073),
        d = a(23439),
        u = a(34990),
        c = a(19684),
        m = a(86505),
        g = a(13534);
      let h = !0,
        y = (0, r.Pi)((e) => {
          var t;
          let { children: a } = e,
            { slam: r, user: y, experiments: v } = (0, g.oR4)(),
            p = (0, g.pL3)(),
            S = (0, g.uK4)(),
            E = S.get(g.ceh),
            b = (0, g.SqQ)(),
            { notify: f } = (0, g.d$W)(),
            P = (0, c.s)(),
            I = (0, l.useCallback)(
              (e) => {
                r.setNetworkStatus(e);
              },
              [r],
            ),
            k = (0, l.useCallback)(
              (e) => {
                let { trackId: t, state: a } = e;
                r.setTrack(t, a),
                  a.loadingState === u.aT.DOWNLOAD_FAILED &&
                    f(
                      (0, i.jsx)(m.l, {
                        message: (0, i.jsx)(s.Z, {
                          id: "offline.track-download-error",
                        }),
                      }),
                      { containerId: g.W$x.ERROR },
                    );
              },
              [f, r],
            ),
            C = (0, l.useCallback)(
              (e) => {
                r.setTracks(e);
              },
              [r],
            ),
            T = S.get(g.U5t);
          return (
            y.account.data.uid &&
              y.hasPlus &&
              (p.init({ userConfig: { uid: y.account.data.uid } }),
              p.createDownloader({ variables: { maxConcurrentDownloads: 5 } }),
              p.downloader &&
                p.userConfig &&
                (p.createTracksController({
                  downloader: p.downloader,
                  repositoryContainer: p.repositoryContainer,
                  userConfig: p.userConfig,
                  trackDownloadTaskParams: {
                    tracksResource: S.get(g.g5F),
                    getFileInfoResource: S.get(g.ES6),
                    secretKey: T.player.secretKey,
                    transport: d.J.ENCRAW,
                    variables: {
                      chunkSize: 1048576,
                      coverSize: 1e3,
                      codecs: n.d,
                      get quality() {
                        return (0, o.E)({
                          productQuality: null == b ? void 0 : b.quality.value,
                        });
                      },
                    },
                    events: p.downloader.events,
                    hooks: p.hooks,
                  },
                  availabilityResource: S.get(g.OYs),
                  tracksResource: S.get(g.g5F),
                  variables: { requestTrackChunkSize: 100 },
                  hooks: p.hooks,
                }),
                p.createArtistsController({
                  repositoryContainer: p.repositoryContainer,
                  userConfig: p.userConfig,
                  downloader: p.downloader,
                  hooks: p.hooks,
                })),
              p.tracksController &&
                p.createPlaylistsController({
                  tracksController: p.tracksController,
                })),
            (0, l.useEffect)(() => {
              if (h) {
                var e;
                null === (e = p.tracksController) ||
                  void 0 === e ||
                  e.getTracksCount().then((e) => {
                    let t = (0, g.TrE)(e);
                    t && P.count({ [g.YHm.TRACKS_COUNT]: t }, g.OIz);
                  }),
                  (h = !1);
              }
            }, [P, p.tracksController]),
            (0, l.useEffect)(() => {
              if (
                void 0 !== y.puid &&
                !v.checkExperiment(g.peG.WebNextOfflineDegradation, "default")
              ) {
                var e, t;
                let a =
                    null ===
                      (e = v.getExperiment(g.peG.WebNextOfflineDegradation)) ||
                    void 0 === e
                      ? void 0
                      : e.group,
                  i = "".concat(g.BUb.OfflineDegradation, "_").concat(y.puid),
                  r = E.get(i);
                a &&
                  a !== r &&
                  (null === (t = p.tracksController) ||
                    void 0 === t ||
                    t.clearAll(),
                  E.set(i, a));
              }
            }, [v, E, p, y.puid]),
            (0, l.useEffect)(() => {
              var e, t, a;
              return (
                null === (e = p.tracksController) ||
                  void 0 === e ||
                  e.events.on(u.tY.TRACK_CHANGED, k),
                null === (t = p.tracksController) ||
                  void 0 === t ||
                  t.events.on(u.tY.STATE_CHANGED, C),
                null === (a = p.tracksController) ||
                  void 0 === a ||
                  a.initTracksState(),
                () => {
                  var e, t;
                  null === (e = p.tracksController) ||
                    void 0 === e ||
                    e.events.off(u.tY.TRACK_CHANGED, k),
                    null === (t = p.tracksController) ||
                      void 0 === t ||
                      t.events.off(u.tY.STATE_CHANGED, C);
                }
              );
            }, [
              k,
              C,
              p.tracksController,
              null === (t = p.tracksController) || void 0 === t
                ? void 0
                : t.events,
            ]),
            (0, l.useEffect)(
              () => (
                p.network.subscribe(I),
                () => {
                  p.network.unsubscribe(I);
                }
              ),
              [I, p.network],
            ),
            (0, l.useEffect)(() => {
              let e = (0, g.ibJ)(E);
              r.setOfflineMode(e);
            }, [E, r]),
            (0, i.jsx)(g.hRk.Provider, {
              value: p.tracksController,
              children: (0, i.jsx)(g.pH7.Provider, {
                value: p.artistsController,
                children: (0, i.jsx)(g.e_X.Provider, {
                  value: p.playlistsController,
                  children: a,
                }),
              }),
            })
          );
        });
    },
    18624: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          SonataProvider: function () {
            return ik;
          },
        });
      var i,
        r,
        l,
        s,
        n,
        o,
        d,
        u,
        c,
        m,
        g,
        h,
        y,
        v,
        p,
        S,
        E,
        b,
        f,
        P,
        I,
        k,
        C,
        T,
        _,
        N,
        A,
        D,
        L,
        R,
        x,
        w,
        G,
        V,
        O,
        M,
        F,
        U,
        j,
        B,
        q,
        W,
        Y,
        K,
        z = a(75441),
        H = a(62569),
        Q = a(65067),
        J = a(63660),
        X = a(27198),
        Z = a(98375),
        $ = a(94123),
        ee = a(81046),
        et = a(78524);
      ((i = I || (I = {})).PLAYING = "playing"),
        (i.NOT_PLAYING = "not-playing");
      let ea = (e) =>
        !!(
          "object" == typeof e &&
          e &&
          "streamProgress" in e &&
          "object" == typeof e.streamProgress &&
          e.streamProgress &&
          "endPositionSec" in e.streamProgress &&
          "number" == typeof e.streamProgress.endPositionSec
        );
      class ei {
        set playId(e) {
          this.entityPlayId = e;
        }
        get playId() {
          return this.entityPlayId;
        }
        set addTracksToPlayerTime(e) {
          this.entityAddTracksToPlayerTime = e;
        }
        get addTracksToPlayerTime() {
          return this.entityAddTracksToPlayerTime;
        }
        get totalPlayedSeconds() {
          return (function (e) {
            let t,
              a,
              i = 0,
              r = [];
            if (0 !== e.length) {
              for (let i of (function (e) {
                let t = [];
                for (; 0 !== e.length; ) {
                  let a = e.shift();
                  if (a && a.stage === I.PLAYING) {
                    let e = t[t.length - 1];
                    (e && e.stage !== I.NOT_PLAYING) || t.push(a);
                  } else if (a && a.stage === I.NOT_PLAYING) {
                    let e = t[t.length - 1];
                    e && e.stage === I.PLAYING && t.push(a);
                  }
                }
                let a = t[t.length - 1];
                return (
                  a &&
                    a.stage === I.PLAYING &&
                    t.push({
                      stage: I.NOT_PLAYING,
                      perfNow: performance.now(),
                      ts: Date.now(),
                    }),
                  t
                );
              })(e))
                i.stage === I.PLAYING ? (t = i.perfNow) : (a = i.perfNow),
                  t && a && (r.push(a - t), (t = void 0), (a = void 0));
              for (let e of r) i += e;
              return Math.round((i / 1e3 + Number.EPSILON) * 1e3) / 1e3;
            }
            return i;
          })([...this.entityTimeStagesOfPlayback]);
        }
        get timeStagesOfPlayback() {
          return this.entityTimeStagesOfPlayback;
        }
        saveTimeStageOfPlayback(e) {
          let t = {
            stage: e.stage,
            perfNow: performance.now(),
            ts: Date.now(),
          };
          e.reason && (t.reason = e.reason),
            this.entityTimeStagesOfPlayback.push(t);
        }
        clearTimeStagesOfPlayback() {
          this.entityTimeStagesOfPlayback = [];
        }
        get data() {
          return this.entityData;
        }
        get isAvailable() {
          return !!(
            "available" in this.entityData.meta &&
            this.entityData.meta.available
          );
        }
        get isDisliked() {
          return (
            void 0 !== this.likeStore &&
            this.likeStore.isTrackDisliked(this.entityData.meta.id)
          );
        }
        get everFinished() {
          return ea(this.entityData.meta)
            ? this.entityData.meta.streamProgress.everFinished
            : null;
        }
        set everFinished(e) {
          ea(this.entityData.meta) &&
            null !== e &&
            (this.entityData.meta.streamProgress.everFinished = e);
        }
        hasPlayId() {
          return "" !== this.playId;
        }
        constructor(e) {
          (0, X._)(this, "entityData", void 0),
            (0, X._)(this, "likeStore", void 0),
            (0, X._)(this, "entityPlayId", ""),
            (0, X._)(this, "entityAddTracksToPlayerTime", ""),
            (0, X._)(this, "entityTimeStagesOfPlayback", []),
            (0, X._)(this, "mediaElementErrorReloadCounter", 0),
            (0, X._)(this, "mediaSourceData", null),
            (0, X._)(this, "expectedQuality", null),
            (0, X._)(this, "startPosition", null),
            (0, X._)(this, "lastSeekPosition", null),
            (0, X._)(this, "contentType", et.z.AUDIO),
            (0, X._)(this, "hidden", !1),
            (this.entityData = e.data),
            (this.likeStore = e.likeStore);
        }
      }
      class er extends ei {}
      class el extends ei {}
      class es extends ei {
        get isAvailable() {
          return !1;
        }
        get isDisliked() {
          return !1;
        }
      }
      var en = a(25534);
      class eo extends en.y {
        constructor(e, { code: t = "E_ENTITY_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "EntityFactoryException"),
            Object.setPrototypeOf(this, eo.prototype);
        }
      }
      class ed extends ei {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
        constructor(...e) {
          super(...e), (0, X._)(this, "contentType", et.z.HLS);
        }
      }
      class eu extends ei {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
      }
      class ec extends ei {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
        constructor(...e) {
          super(...e), (0, X._)(this, "contentType", et.z.CLIP);
        }
      }
      class em {
        create(e) {
          let t = null,
            { data: a } = e;
          void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
          try {
            switch (a.type) {
              case ee.A.Music:
                t = new er({ data: a, likeStore: this.likeStore });
                break;
              case ee.A.VibeTrack:
                t = new el({ data: a, likeStore: this.likeStore });
                break;
              case ee.A.Generative:
                t = new ed({ data: a, likeStore: this.likeStore });
                break;
              case ee.A.SmartPreview:
                t = new eu({ data: a, likeStore: this.likeStore });
                break;
              case ee.A.Clip:
                t = new ec({ data: a, likeStore: this.likeStore });
                break;
              case ee.A.Unknown:
                a.meta.type,
                  $.V.MUSIC,
                  (t = new er({
                    data: { ...a, type: ee.A.Music },
                    likeStore: this.likeStore,
                  }));
                break;
              case Z.RX.Unloaded:
                t = new es({ data: a, likeStore: this.likeStore });
            }
          } catch (e) {
            throw new eo("Error while creating entity", {
              cause: e,
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new eo("Cannot create entities with nonexistent type", {
            code: "E_NONEXISTENT_ENTITY_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, X._)(this, "likeStore", void 0), (this.likeStore = e.likeStore);
        }
      }
      var eg = a(84638);
      function eh(e, t) {
        let a = [];
        for (let i of e)
          for (let e of i)
            a.push({ type: Z.RX.Unloaded, meta: e, additional: t });
        return a;
      }
      var ey = a(28131);
      class ev extends en.y {
        constructor(e, { code: t = "E_CONTEXT", name: a, ...i } = {}) {
          super(e, { code: t, ...i }),
            (0, X._)(this, "name", void 0),
            (this.name = null != a ? a : "ContextException"),
            Object.setPrototypeOf(this, ev.prototype);
        }
      }
      class ep extends Z.$n {
        get isCurrentContext() {
          return this.isCurrent;
        }
        set isCurrentContext(e) {
          this.isCurrent = e;
        }
        get availableActions() {
          return this.actions;
        }
        logError(e) {
          let t,
            {
              name: a,
              message: i = "Error in YaMusicContext",
              data: r,
              cause: l,
              originalError: s,
            } = e;
          (t =
            s instanceof en.y
              ? s
              : new ev(i, {
                  name: a,
                  cause: (0, J.createObjectFromError)(l),
                  data: r,
                })),
            this.logger.error(t, {
              ...t.data,
              code: t.code,
              cause: t.cause,
              stack: t.stack,
              message: t.message,
            });
        }
        constructor({ logger: e }) {
          super(),
            (0, X._)(this, "isCurrent", !1),
            (0, X._)(this, "actions", {
              moveBackward: new ey.wi(!1),
              moveForward: new ey.wi(!0),
              repeat: new ey.wi(null),
              shuffle: new ey.wi(null),
              speed: new ey.wi(null),
            }),
            (0, X._)(this, "from", ""),
            (0, X._)(this, "utmLink", void 0),
            (0, X._)(this, "logger", void 0),
            (this.logger = e);
        }
      }
      function eS(e, t) {
        return e.map((e) => ({
          type: ee.A.SmartPreview,
          meta: e,
          additional: t,
        }));
      }
      class eE extends ep {
        loadTrailer() {
          return this.albumsResource
            .getTrailer({ albumId: Number(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ev("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_TRAILER",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.albumsResource
            .getAlbumWithRichTracks({
              albumId: Number(this.contextData.meta.id),
              resumeStream: !0,
            })
            .then((e) => ((this.contextData.meta = e), e))
            .catch((e) => {
              throw new ev("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_CONTEXT_META",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          return this.contextData.trailer
            ? this.loadTrailer().then((t) => eS(t.trailer.tracks, e))
            : this.contextData.meta.volumes
              ? Promise.resolve(eh(this.contextData.meta.volumes, e))
              : this.loadContextMeta().then((t) =>
                  Promise.resolve(eh(t.volumes, e)),
                );
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        get resumeFromIndex() {
          var e;
          if (
            (null === (e = this.contextData.meta.resumeFrom) || void 0 === e
              ? void 0
              : e.trackId) &&
            Array.isArray(this.contextData.meta.volumes)
          ) {
            let e = []
              .concat(...this.contextData.meta.volumes)
              .findIndex((e) => {
                var t;
                return (
                  e.id ===
                  (null === (t = this.contextData.meta.resumeFrom) ||
                  void 0 === t
                    ? void 0
                    : t.trackId)
                );
              });
            if (e >= 0) return e;
          }
          return null;
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "albumsResource", void 0),
            (0, X._)(this, "variables", void 0);
          let { data: t, albumsResource: a, variables: i } = e;
          (this.albumsResource = a),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = i);
        }
      }
      var eb = a(26614);
      let ef = (e, t) => "".concat(e, ":").concat(t),
        eP = (e) => 3 === e;
      class eI extends ep {
        loadTrailer() {
          let { uid: e, kind: t } = (0, eb.b)(this.contextData.meta.id);
          return this.usersResource
            .getPlaylistTrailer({ userId: e, playlistKind: t })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ev("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.contextData.meta.uuid,
            { uid: t, kind: a } = (0, eb.b)(this.contextData.meta.id),
            i = eP(a);
          return (
            i && void 0 !== e
              ? this.playlistResource.getPlaylist({
                  playlistUuid: e,
                  resumeStream: !1,
                  richTracks: !1,
                })
              : this.usersResource.getPlaylistWithTracksIds({
                  userId: t,
                  playlistKind: a,
                  resumeStream: !1,
                  trackMetaType: i ? "music" : void 0,
                })
          )
            .then((e) => {
              let t = { ...e, id: ef(e.uid, e.kind) };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ev("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_CONTEXT_META",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => eS(t.trailer.tracks, e));
          if (this.contextData.meta.tracks) {
            let t = [];
            for (let a of this.contextData.meta.tracks)
              t.push({ type: Z.RX.Unloaded, meta: a, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            for (let i of t.tracks)
              a.push({ type: Z.RX.Unloaded, meta: i, additional: e });
            return a;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "usersResource", void 0),
            (0, X._)(this, "playlistResource", void 0),
            (0, X._)(this, "variables", void 0);
          let {
            data: t,
            playlistResource: a,
            usersResource: i,
            variables: r,
          } = e;
          (this.usersResource = i),
            (this.playlistResource = a),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = r);
        }
      }
      class ek extends ep {
        loadTrailer() {
          return this.artistsResource
            .getTrailer({ artistId: String(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ev("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_TRAILER",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return (
            this.artistsResource
              .getBriefInfo({
                artistId: String(this.contextData.meta.id),
                discographyBlockEnabled: !1,
                fetchPlaylistLikesCounts: !1,
              })
              .then((e) => {
                this.contextData.meta.artist = e.artist;
              })
              .catch((e) => {
                throw new ev("Error in ArtistContext", {
                  code: "E_ARTIST_LOAD_CONTEXT_META",
                  cause: (0, J.createObjectFromError)(e),
                  data: { contextId: this.contextData.meta.id },
                });
              }),
            this.artistsResource
              .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
              .then(
                (e) => (
                  (this.contextData.meta.trackIds = e), this.contextData.meta
                ),
              )
              .catch((e) => {
                throw new ev("Error in ArtistContext", {
                  code: "E_ARTIST_LOAD_CONTEXT_META",
                  cause: (0, J.createObjectFromError)(e),
                  data: { contextId: this.contextData.meta.id },
                });
              })
          );
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => eS(t.trailer.tracks, e));
          if (this.contextData.meta.trackIds) {
            let t = [];
            for (let a of this.contextData.meta.trackIds)
              t.push({ type: Z.RX.Unloaded, meta: { id: a }, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            if (t.trackIds)
              for (let i of t.trackIds)
                a.push({ type: Z.RX.Unloaded, meta: { id: i }, additional: e });
            return a;
          });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "artistsResource", void 0),
            (0, X._)(this, "variables", void 0);
          let { data: t, artistsResource: a, variables: i } = e;
          (this.artistsResource = a),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = i);
        }
      }
      var eC = a(70365);
      function eT(e, t) {
        let a = [],
          { batchId: i, sequence: r } = e;
        for (let e of r)
          a.push({
            type: ee.A.VibeTrack,
            additional: t,
            batchId: i,
            meta: {
              ...e.track,
              liked: e.liked,
              trackParameters: e.trackParameters,
            },
            fromCurrentContext: !0,
            wasPlayed: !1,
          });
        return a;
      }
      function e_(e) {
        var t;
        let a;
        if (
          !(a =
            e.data.type === Z.RX.Unloaded
              ? e.data.meta.id
              : "realId" in e.data.meta
                ? e.data.meta.realId
                : e.data.meta.id)
        )
          throw new ev("Error in VibeContext", {
            code: "E_WRONG_VIBE_CONTEXT",
          });
        let i = "albums" in e.data.meta ? e.data.meta.albums : [];
        return i && (null === (t = i[0]) || void 0 === t ? void 0 : t.id)
          ? "".concat(a, ":").concat(i[0].id)
          : String(a);
      }
      function eN(e) {
        return (null == e ? void 0 : e.data.type) === ee.A.VibeTrack;
      }
      function eA(e, t) {
        let a = [],
          i = !1;
        for (let r = 0; r < e.length; r++) {
          let l = e[r];
          if (l && eN(l.entity)) {
            let { entity: e } = l;
            if (e.data.wasPlayed || t === r) a.push(l);
            else if (!i) {
              a.push(l), (i = !0);
              break;
            }
          }
        }
        return a;
      }
      function eD(e, t) {
        return eA(e, t).map((e) => {
          let { entity: t } = e;
          return e_(t);
        });
      }
      var eL = a(54687);
      function eR() {
        return new Date().toISOString();
      }
      function ex(e) {
        let t,
          { entity: a, type: i, from: r } = e,
          l = "user-queue-".concat(a.data.meta.id, "-").concat(Date.now());
        switch ((eN(a) && a.data.batchId && (l = a.data.batchId), i)) {
          case eC.C.RADIO_STARTED:
            return { event: { type: i, timestamp: eR(), from: r }, from: r };
          case eC.C.TRACK_STARTED:
          case eC.C.LIKE:
          case eC.C.UNLIKE:
          case eC.C.UNDISLIKE:
            return {
              batchId: l,
              event: { type: i, timestamp: eR(), trackId: e_(a) },
              from: r,
            };
          case eC.C.TRACK_FINISHED:
            if (eN(a) && a.data.meta.durationMs) {
              let e = a.data.meta.durationMs / 1e3;
              t = e % 1 == 0 ? e : Number(e.toFixed(3));
            }
            return {
              batchId: l,
              event: {
                type: i,
                timestamp: eR(),
                trackId: e_(a),
                totalPlayedSeconds: a.totalPlayedSeconds,
                trackLengthSeconds: t,
              },
              from: r,
            };
          case eC.C.SKIP:
          case eC.C.DISLIKE:
            return {
              batchId: l,
              event: {
                type: i,
                timestamp: eR(),
                trackId: e_(a),
                totalPlayedSeconds: a.totalPlayedSeconds,
              },
              from: r,
            };
        }
        return null;
      }
      function ew(e, t) {
        return e.some(
          (e) =>
            (function (e, t) {
              if (e === t) return !0;
              let a = [eC.C.SKIP, eC.C.TRACK_FINISHED];
              return a.includes(e) && a.includes(t);
            })(t.event.type, e.event.type) &&
            "trackId" in t.event &&
            "trackId" in e.event &&
            t.event.trackId === e.event.trackId,
        );
      }
      class eG {
        storeFeedbacksForWasPlayedTracks(e, t) {
          var a;
          if (
            null === (a = this.variables) || void 0 === a
              ? void 0
              : a.dontSendDuplicatedFeedbacks
          ) {
            for (let a of e)
              if (eN(a.entity) && a.entity.data.wasPlayed) {
                let e = ex({
                    entity: a.entity,
                    type: eC.C.TRACK_STARTED,
                    from: t,
                  }),
                  i = ex({
                    entity: a.entity,
                    type: eC.C.TRACK_FINISHED,
                    from: t,
                  });
                e && i && this.storeFeedbacksInHistory([e, i]);
              }
          }
        }
        storeFeedbacksInHistory(e) {
          var t;
          if (
            e &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.dontSendDuplicatedFeedbacks)
          )
            for (let t of e) this.feedbacksHistory.push(t);
        }
        clearStoredFeedbacks() {
          (this.feedbacksHistory = []), (this.feedbacksForSending = []);
        }
        storeFeedbacksForSending(e) {
          var t;
          if (
            e &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.sendFeedbackToSessionTracks)
          ) {
            let t = Array.isArray(e) ? e : [e];
            this.feedbacksForSending.push(...t);
          }
        }
        getFeedbacksForSending() {
          var e;
          if (
            !(null === (e = this.variables) || void 0 === e
              ? void 0
              : e.sendFeedbackToSessionTracks)
          )
            return null;
          let t = this.feedbacksForSending;
          return (this.feedbacksForSending = []), t;
        }
        sendFeedbackRequest(e) {
          let { feedback: t, session: a } = e,
            { radioSessionId: i } = a;
          return this.rotorResource
            .sessionFeedback({ radioSessionId: i, feedback: t })
            .then(() => Promise.resolve());
        }
        sendFeedback(e) {
          var t, a;
          let {
              entity: i,
              type: r,
              from: l,
              session: s,
              sendWithSessionTracks: n = !1,
              saveFeedbackToHistory: o = !1,
            } = e,
            d = ex({ entity: i, type: r, from: l });
          return d
            ? (ew(this.feedbacksHistory, d) ||
                ew(this.feedbacksForSending, d)) &&
              (null === (t = this.variables) || void 0 === t
                ? void 0
                : t.dontSendDuplicatedFeedbacks)
              ? Promise.resolve()
              : n &&
                  (null === (a = this.variables) || void 0 === a
                    ? void 0
                    : a.sendFeedbackToSessionTracks)
                ? (this.storeFeedbacksForSending(d), Promise.resolve())
                : this.sendFeedbackRequest({ feedback: d, session: s }).then(
                    () => {
                      var e;
                      return (
                        o &&
                          (null === (e = this.variables) || void 0 === e
                            ? void 0
                            : e.dontSendDuplicatedFeedbacks) &&
                          this.storeFeedbacksInHistory([d]),
                        Promise.resolve()
                      );
                    },
                  )
            : Promise.reject(
                new en.y("Cannot create feedback", { data: { type: r } }),
              );
        }
        constructor({ rotorResource: e, variables: t }) {
          (0, X._)(this, "rotorResource", void 0),
            (0, X._)(this, "feedbacksForSending", []),
            (0, X._)(this, "feedbacksHistory", []),
            (0, X._)(this, "variables", void 0),
            (this.rotorResource = e),
            (this.variables = t);
        }
      }
      class eV extends ep {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeContextSet.tap("VibeContext", () => {
            if (!this.isCurrentContext) return;
            let e = a.state.queueState.currentEntity.value;
            e &&
              (this.sendFeedback({ entity: e.entity, type: eC.C.SKIP }),
              this.feedbacksController.clearStoredFeedbacks());
          }),
            t.afterSetupQueue.tap("VibeContext", () => {
              var e;
              if (!this.isCurrentContext) return;
              let { value: t } = a.state.queueState.entityList;
              if (
                (this.feedbacksController.storeFeedbacksForWasPlayedTracks(
                  t.slice(0, -1),
                  this.from,
                ),
                this.contextData.cloneSessionId &&
                  this.contextData.meta.session &&
                  (null === (e = this.variables) || void 0 === e
                    ? void 0
                    : e.enableGetNextTracksAfterCloneVibeContext))
              ) {
                let e = eT(this.contextData.meta.session, {
                  from: this.from,
                  utmLink: this.utmLink,
                });
                a.injectLast(e);
              }
            }),
            t.afterMediaStartPlaying.tapPromise("VibeContext", () =>
              this.isCurrentContext
                ? new Promise((e) => {
                    let t = a.state.queueState.currentEntity.value;
                    if (!t) {
                      e();
                      return;
                    }
                    let { entity: i } = t;
                    this.isVibeStarted
                      ? this.sendFeedback({
                          type: eC.C.TRACK_STARTED,
                          entity: i,
                          saveFeedbackToHistory: !0,
                        })
                      : (this.sendFeedback({
                          type: eC.C.RADIO_STARTED,
                          entity: i,
                        }).then(() => {
                          this.sendFeedback({
                            type: eC.C.TRACK_STARTED,
                            entity: i,
                            saveFeedbackToHistory: !0,
                          });
                        }),
                        (this.isVibeStarted = !0)),
                      e();
                  })
                : Promise.resolve(),
            ),
            t.beforeFindPlayableEntityIndex.tapPromise("VibeContext", (e) =>
              this.isCurrentContext
                ? new Promise((t, i) => {
                    switch (e) {
                      case Z.Zp.AUTO_MOVE_FORWARD:
                        this.onAutoMoveForward(a).then(t).catch(i);
                        break;
                      case Z.Zp.MOVE_FORWARD:
                        this.onMoveForward(a).then(t).catch(i);
                        break;
                      case Z.Zp.MOVE_BACKWARD:
                        this.onMoveBackward(a).then(t).catch(i);
                        break;
                      default:
                        t();
                    }
                  })
                : Promise.resolve(),
            ),
            t.beforeEntityChange.tapPromise("VibeContext", (e) =>
              this.isCurrentContext && e.method === Z.Zp.SET_INDEX
                ? this.onSetIndex(a, e.index)
                : Promise.resolve(),
            ),
            t.beforeEntityPlayingProcessStart.tapPromise("VibeContext", () => {
              if (!this.isCurrentContext) return Promise.resolve();
              let { currentEntity: e } = a.state.queueState;
              return (
                e.value &&
                  eN(e.value.entity) &&
                  (e.value.entity.data.wasPlayed = !0),
                Promise.resolve()
              );
            });
        }
        get interactive() {
          var e;
          return (null === (e = this.variables) || void 0 === e
            ? void 0
            : e.sendInteractiveToSession) &&
            void 0 !== this.contextData.interactive
            ? { interactive: this.contextData.interactive }
            : {};
        }
        loadContextMeta() {
          this.timeOfLastInteractionWithVibe = performance.now();
          let {
            meta: { id: e },
            seeds: t,
            cloneSessionId: a,
            queue: i,
            trackToStartFrom: r,
            includeTracksInResponse: l,
          } = this.contextData;
          return (
            a
              ? this.rotorResource
                  .sessionClone({
                    seeds: t,
                    includeWaveModel: !0,
                    radioSessionId: a,
                    trackToStartFrom: r,
                    queue: i,
                    includeTracksInResponse: l,
                    ...this.interactive,
                  })
                  .catch((e) => {
                    throw this.createException(
                      "Error in clone vibe session",
                      e,
                    );
                  })
              : this.rotorResource
                  .sessionNew({
                    seeds: t,
                    includeWaveModel: !0,
                    trackToStartFrom: r,
                    queue: i,
                    includeTracksInResponse: l,
                    ...this.interactive,
                  })
                  .catch((e) => {
                    throw this.createException(
                      "Error in create new vibe session",
                      e,
                    );
                  })
          ).then(
            (t) => (
              (this.contextData.meta.session = t),
              (this.contextData.trackToStartFrom = void 0),
              { id: e, session: t }
            ),
          );
        }
        setSettings(e) {
          let { seeds: t, queueState: a, interactive: i } = e;
          this.contextData.interactive = i;
          let r = eD(a.entityList.value, a.index.value),
            l = a.currentEntity.value,
            s = Promise.resolve();
          l &&
            eN(l.entity) &&
            (s = this.sendFeedback({ entity: l.entity, type: eC.C.SKIP }));
          let { trackToStartFrom: n, includeTracksInResponse: o } =
            this.contextData;
          return s.then(() =>
            this.rotorResource
              .sessionNew({
                includeTracksInResponse: o,
                trackToStartFrom: n,
                seeds: t,
                queue: r,
                includeWaveModel: !0,
                ...this.interactive,
              })
              .then((e) => {
                (this.contextData.meta.session = e),
                  (this.contextData.meta.id = (0, eL.$)(e.wave.seeds)),
                  this.feedbacksController.clearStoredFeedbacks();
              })
              .catch((e) => {
                this.logVibeError({
                  message: "Error while setting new vibe settings",
                  cause: e,
                });
              }),
          );
        }
        getContextEntitiesData() {
          let {
              meta: { session: e },
            } = this.contextData,
            t = { from: this.from, utmLink: this.utmLink };
          return e
            ? Promise.resolve(eT(e, t))
            : this.loadContextMeta().then((e) => {
                let { session: a } = e;
                return eT(a, t);
              });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        logVibeError(e) {
          var t, a;
          let { message: i, cause: r, originalError: l } = e;
          this.logError({
            name: "VibeContextException",
            message: i,
            cause: r,
            data: {
              contextId: this.contextData.meta.id,
              sessionId:
                null !==
                  (a =
                    null === (t = this.contextData.meta.session) || void 0 === t
                      ? void 0
                      : t.radioSessionId) && void 0 !== a
                  ? a
                  : "",
            },
            originalError: l,
          });
        }
        createException(e, t) {
          var a, i;
          return new ev(e, {
            name: "VibeContextException",
            cause: (0, J.createObjectFromError)(t),
            data: {
              contextId: this.contextData.meta.id,
              sessionId:
                null !==
                  (i =
                    null === (a = this.contextData.meta.session) || void 0 === a
                      ? void 0
                      : a.radioSessionId) && void 0 !== i
                  ? i
                  : "",
            },
          });
        }
        onAutoMoveForward(e) {
          var t, a;
          if (
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.disableFastVibeSkip) &&
            this.sessionTracksPromise
          )
            return Promise.resolve();
          let i = this.onQueueNavigationCommon(e);
          return this.sendFeedback({
            type: eC.C.TRACK_FINISHED,
            entity:
              null === (a = e.state.queueState.currentEntity.value) ||
              void 0 === a
                ? void 0
                : a.entity,
            sendWithSessionTracks: !0,
            saveFeedbackToHistory: !0,
          }).then(() => {
            let { index: t, entityList: a } = e.state.queueState,
              r = t.value === a.value.length - 2,
              l = t.value === a.value.length - 1;
            if (!r && !l) return Promise.resolve();
            let s = this.getNextSessionTracks(i).then((t) => {
              e.injectLast(t), (this.availableActions.moveForward.value = !0);
            });
            return l
              ? s
              : (r && s.catch((e) => this.logVibeError({ originalError: e })),
                Promise.resolve());
          });
        }
        onMoveForward(e) {
          var t, a;
          if (
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.disableFastVibeSkip) &&
            this.sessionTracksPromise
          )
            return Promise.resolve();
          let i = this.onQueueNavigationCommon(e);
          return this.sendFeedback({
            type: eC.C.SKIP,
            entity:
              null === (a = e.state.queueState.currentEntity.value) ||
              void 0 === a
                ? void 0
                : a.entity,
            sendWithSessionTracks: !0,
            saveFeedbackToHistory: !0,
          }).then(() => {
            var t;
            let { index: a, entityList: r } = e.state.queueState,
              l = a.value === r.value.length - 1;
            if (
              null === (t = this.variables) || void 0 === t
                ? void 0
                : t.enableUpdatedForwardSkipInVibeContext
            ) {
              let t = e.getEntityByIndex({ index: a.value + 1 }),
                i = a.value + 1 === r.value.length - 1;
              if (t && eN(t.entity) && t.entity.data.wasPlayed && !i)
                return Promise.resolve();
            }
            this.removeVibeTracksBeforeMoveForward(e);
            let s = this.getNextSessionTracks(i).then((t) => e.injectLast(t));
            return l
              ? s
              : (s.catch((e) => this.logVibeError({ originalError: e })),
                Promise.resolve());
          });
        }
        onMoveBackward(e) {
          this.removeNotPlayedVibeTracksByTtl(e),
            (this.timeOfLastInteractionWithVibe = performance.now());
          let t = e.state.queueState.currentEntity.value;
          if (!t) return Promise.resolve();
          let { entity: a } = t;
          return (
            this.sendFeedback({
              entity: a,
              type: eC.C.SKIP,
              saveFeedbackToHistory: !0,
            }),
            Promise.resolve()
          );
        }
        onSetIndex(e, t) {
          var a, i;
          if (
            (null === (a = this.variables) || void 0 === a
              ? void 0
              : a.disableFastVibeSkip) &&
            this.sessionTracksPromise
          )
            return Promise.resolve();
          let r = this.onQueueNavigationCommon(e),
            l = e.getEntityByIndex({ index: t });
          return l && eN(l.entity) && l.entity.data.wasPlayed
            ? Promise.resolve()
            : this.sendFeedback({
                type: eC.C.SKIP,
                entity:
                  null === (i = e.state.queueState.currentEntity.value) ||
                  void 0 === i
                    ? void 0
                    : i.entity,
                sendWithSessionTracks: !0,
                saveFeedbackToHistory: !0,
              }).then(() => {
                let { index: t, entityList: a } = e.state.queueState,
                  i = t.value === a.value.length - 1;
                this.removeVibeTracksBeforeMoveForward(e);
                let l = this.getNextSessionTracks(r)
                  .then((t) => e.injectLast(t))
                  .catch((e) => this.logVibeError({ originalError: e }));
                return i ? l : Promise.resolve();
              });
        }
        getNextSessionTracks(e) {
          var t;
          if (!this.contextData.meta.session)
            return Promise.reject(
              this.createException("Cannot get next vibe tracks. No session"),
            );
          let {
              meta: { session: a },
              aliceExperiments: i,
              djData: r,
              useIchwill: l,
            } = this.contextData,
            s = { from: this.from, utmLink: this.utmLink },
            n = this.feedbacksController.getFeedbacksForSending();
          return (
            (this.sessionTracksPromise = this.rotorResource
              .sessionTracks({
                radioSessionId: a.radioSessionId,
                queue: e,
                aliceExperiments: i,
                djData: r,
                useIchwill: l,
                feedbacks: n || void 0,
              })
              .then(
                (e) => (
                  this.feedbacksController.storeFeedbacksInHistory(n),
                  (this.contextData.meta.sessionTracks = e),
                  eT(e, s)
                ),
              )
              .catch(
                (e) => (
                  this.feedbacksController.storeFeedbacksForSending(n),
                  Promise.reject(
                    this.createException(
                      "Error in next vibe tracks request",
                      e,
                    ),
                  )
                ),
              )
              .finally(() => {
                var e;
                (null === (e = this.variables) || void 0 === e
                  ? void 0
                  : e.disableFastVibeSkip) &&
                  ((this.sessionTracksPromise = null),
                  (this.availableActions.moveForward.value = !0));
              })),
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.disableFastVibeSkip) &&
              (this.availableActions.moveForward.value = !1),
            this.sessionTracksPromise
          );
        }
        sendFeedback(e) {
          let {
            entity: t,
            type: a,
            sendWithSessionTracks: i = !1,
            saveFeedbackToHistory: r = !1,
          } = e;
          if (!t)
            return (
              this.logVibeError({ message: "Cannot send feedback. No entity" }),
              Promise.resolve()
            );
          let { session: l } = this.contextData.meta;
          return l
            ? this.feedbacksController
                .sendFeedback({
                  entity: t,
                  type: a,
                  session: l,
                  from: this.contextData.from,
                  sendWithSessionTracks: i,
                  saveFeedbackToHistory: r,
                })
                .catch(
                  (e) => (
                    this.logVibeError({
                      message: "Error while sending feedback",
                      cause: e,
                    }),
                    Promise.resolve()
                  ),
                )
            : (this.logVibeError({
                message: "Cannot send feedback. No session",
              }),
              Promise.resolve());
        }
        removeNotPlayedVibeTracksByTtl(e) {
          var t;
          let { index: a, entityList: i } = e.state.queueState;
          if (
            performance.now() - this.timeOfLastInteractionWithVibe >= 18e5 &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableRemovingNotPlayedVibeTracksByTtl)
          ) {
            let t = [];
            for (let e = a.value + 1; e < i.value.length; e++) {
              let a = i.value[e];
              a && eN(a.entity) && !a.entity.data.wasPlayed && t.push(e);
            }
            e.remove(t, !0);
          }
        }
        removeVibeTracksBeforeMoveForward(e) {
          let t = [],
            { index: a, entityList: i } = e.state.queueState;
          for (let e = a.value + 2; e < i.value.length; e++) t.push(e);
          e.remove(t, !0);
        }
        onQueueNavigationCommon(e) {
          let t = eD(
            e.state.queueState.entityList.value,
            e.state.queueState.index.value,
          );
          return (
            this.removeNotPlayedVibeTracksByTtl(e),
            (this.timeOfLastInteractionWithVibe = performance.now()),
            t
          );
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "rotorResource", void 0),
            (0, X._)(this, "isVibeStarted", !1),
            (0, X._)(this, "timeOfLastInteractionWithVibe", performance.now()),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "sessionTracksPromise", null),
            (0, X._)(this, "feedbacksController", void 0);
          let { data: t, rotorResource: a, variables: i } = e;
          (this.rotorResource = a),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.variables = i),
            (this.feedbacksController = new eG({
              rotorResource: a,
              variables: i,
            }));
        }
      }
      class eO extends ep {
        getContextId() {
          var e, t;
          let a =
            null === (t = this.contextData.meta.albums) || void 0 === t
              ? void 0
              : null === (e = t[0]) || void 0 === e
                ? void 0
                : e.id;
          return a
            ? "".concat(this.contextData.meta.id, ":").concat(a)
            : String(this.contextData.meta.id);
        }
        loadTrailer() {
          return this.tracksResource
            .getTrailer({ trackId: this.getContextId() })
            .then((e) => ((this.contextData.meta = e.track), e))
            .catch((e) => {
              throw new ev("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.getContextId();
          return this.tracksResource
            .getTracksMeta({ trackIds: [e], withProgress: !0 })
            .then((t) => {
              let a = t[0];
              if (a) return (this.contextData.meta = a), a;
              throw new ev("Error in VariousContext. Track not found", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                data: { contextId: e },
              });
            })
            .catch((t) => {
              throw new ev("Error in VariousContext", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                cause: t,
                data: { contextId: e },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          return this.contextData.trailer
            ? this.loadTrailer().then((t) => [
                { meta: t.track, type: ee.A.SmartPreview, additional: e },
              ])
            : this.contextData.meta
              ? Promise.resolve([
                  {
                    meta: this.contextData.meta,
                    type: ee.A.Unknown,
                    additional: e,
                  },
                ])
              : this.loadContextMeta().then((t) => [
                  { meta: t, type: ee.A.Unknown, additional: e },
                ]);
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "tracksResource", void 0),
            (0, X._)(this, "variables", void 0);
          let { data: t, tracksResource: a, variables: i } = e;
          (this.tracksResource = a),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = i);
        }
      }
      class eM extends en.y {
        constructor(e, { code: t = "E_CONTEXT_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "ContextFactoryException"),
            Object.setPrototypeOf(this, eM.prototype);
        }
      }
      ((r = k || (k = {})).StreamPause = "streamPause"),
        (r.StreamPlay = "streamPlay");
      let eF = (e) => [{ type: ee.A.Generative, meta: e }],
        eU = "E_GENERATIVE_RESTART_LIMIT";
      class ej extends ep {
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.playerState.status.onChange((e) => {
            this.isCurrentContext &&
              e &&
              (e === Z.FY.PLAYING
                ? (this.isPaused && this.sendFeedback(k.StreamPlay, a),
                  (this.isPaused = !1))
                : e === Z.FY.PAUSED &&
                  (this.sendFeedback(k.StreamPause, a), (this.isPaused = !0)));
          }),
            t.afterError.tap("GenerativeContext", (e) => {
              (e && e instanceof ev && e.code === eU) ||
                !this.isCurrentContext ||
                this.restart(a);
            });
        }
        loadContextMeta() {
          return this.rotorResource
            .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = {
                id: String(this.contextData.meta.id),
                stream: e.stream,
                ...e.data,
              };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ev("Error GenerativeContext", {
                code: "E_GENERATIVE_LOAD_CONTEXT_META",
                cause: (0, J.createObjectFromError)(e),
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          var e;
          return (
            null === (e = this.contextData.meta.stream) || void 0 === e
              ? void 0
              : e.id
          )
            ? Promise.resolve(eF(this.contextData.meta))
            : this.loadContextMeta().then((e) => Promise.resolve(eF(e)));
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        sendFeedback(e, t) {
          var a;
          this.rotorResource
            .stationFeedback({
              type: e,
              stationId: String(this.contextData.meta.id),
              streamId: String(
                null === (a = this.contextData.meta.stream) || void 0 === a
                  ? void 0
                  : a.id,
              ),
              timestamp: eR(),
            })
            .then((e) => {
              e.reload_stream && this.restart(t);
            });
        }
        restart(e) {
          return (
            this.restartsCount >= 5 &&
              e.hooks.afterError.promise(
                new ev("Error GenerativeContext", {
                  code: eU,
                  data: { contextId: this.contextData.meta.id },
                }),
              ),
            this.restartsCount++,
            this.loadContextMeta().then(() =>
              e.restartContext({
                playAfterRestart: !this.isPaused,
                entitiesData: eF(this.contextData.meta),
              }),
            )
          );
        }
        constructor(e) {
          super(e),
            (0, X._)(this, "contextData", void 0),
            (0, X._)(this, "rotorResource", void 0),
            (0, X._)(this, "isPaused", !1),
            (0, X._)(this, "restartsCount", 0),
            (0, X._)(this, "variables", void 0);
          let { data: t, variables: a, rotorResource: i } = e;
          (this.rotorResource = i),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.availableActions.moveBackward.value = !1),
            (this.availableActions.moveForward.value = !1),
            (this.variables = a);
        }
      }
      class eB {
        create(e) {
          let t = null,
            { data: a } = e;
          try {
            var i, r, l, s, n, o;
            switch (a.type) {
              case eg.A.Album:
                t = new eE({
                  data: a,
                  albumsResource: this.albumsResource,
                  logger: this.logger,
                  variables:
                    null === (i = this.variables) || void 0 === i
                      ? void 0
                      : i[eg.A.Album],
                });
                break;
              case eg.A.Playlist:
                t = new eI({
                  data: a,
                  usersResource: this.usersResource,
                  playlistResource: this.playlistResource,
                  logger: this.logger,
                  variables:
                    null === (r = this.variables) || void 0 === r
                      ? void 0
                      : r[eg.A.Playlist],
                });
                break;
              case eg.A.Artist:
                t = new ek({
                  data: a,
                  artistsResource: this.artistsResource,
                  logger: this.logger,
                  variables:
                    null === (l = this.variables) || void 0 === l
                      ? void 0
                      : l[eg.A.Artist],
                });
                break;
              case eg.A.Vibe:
                t = new eV({
                  data: a,
                  rotorResource: this.rotorResource,
                  logger: this.logger,
                  variables:
                    null === (s = this.variables) || void 0 === s
                      ? void 0
                      : s[eg.A.Vibe],
                });
                break;
              case eg.A.Various:
                t = new eO({
                  data: a,
                  tracksResource: this.tracksResource,
                  logger: this.logger,
                  variables:
                    null === (n = this.variables) || void 0 === n
                      ? void 0
                      : n[eg.A.Various],
                });
                break;
              case eg.A.Generative:
                t = new ej({
                  data: a,
                  rotorResource: this.rotorResource,
                  logger: this.logger,
                  variables:
                    null === (o = this.variables) || void 0 === o
                      ? void 0
                      : o[eg.A.Generative],
                });
            }
          } catch (e) {
            throw new eM("Error while creating context", {
              cause: (0, J.createObjectFromError)(e),
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new eM("Cannot create context with nonexistent type", {
            code: "E_NONEXISTENT_CONTEXT_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, X._)(this, "logger", void 0),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "albumsResource", void 0),
            (0, X._)(this, "usersResource", void 0),
            (0, X._)(this, "artistsResource", void 0),
            (0, X._)(this, "rotorResource", void 0),
            (0, X._)(this, "tracksResource", void 0),
            (0, X._)(this, "playlistResource", void 0);
          let {
            variables: t,
            logger: a,
            rotorResource: i,
            usersResource: r,
            playlistResource: l,
            tracksResource: s,
            albumsResource: n,
            artistsResource: o,
          } = e;
          (this.albumsResource = n),
            (this.artistsResource = o),
            (this.rotorResource = i),
            (this.usersResource = r),
            (this.tracksResource = s),
            (this.playlistResource = l),
            (this.variables = t),
            (this.logger = a);
        }
      }
      var eq = a(44122);
      class eW {
        canBePlayed(e) {
          let t =
              "playDisliked" in this.context.data &&
              void 0 !== this.context.data.playDisliked &&
              this.context.data.playDisliked,
            { entityChangeMethod: a, index: i } = e,
            r =
              t ||
              a === Z.Zp.SET_INDEX ||
              (a === Z.Zp.PLAY_CONTEXT && void 0 !== i),
            l = a === Z.Zp.SET_INDEX,
            s = !r && this.entity.isDisliked,
            n = !l && this.entity.hidden;
          return (
            !!this.entity.isAvailable && (s ? !!(0, eq.x)(this.context) : !n)
          );
        }
        constructor(e, t) {
          (0, X._)(this, "context", void 0),
            (0, X._)(this, "entity", void 0),
            (this.context = e),
            (this.entity = t);
        }
      }
      class eY {
        createContext(e) {
          return this.contextFactory.create(e);
        }
        createEntity(e) {
          return this.entityFactory.create(e);
        }
        createContextEntityPair(e, t) {
          return new eW(e, t);
        }
        constructor(e) {
          (0, X._)(this, "entityFactory", void 0),
            (0, X._)(this, "contextFactory", void 0),
            (this.entityFactory = new em(e.entityFactoryParams)),
            (this.contextFactory = new eB(e.contextFactoryParams));
        }
      }
      var eK = a(73084),
        ez = a(77959);
      ((l = C || (C = {})).SUSPENDED = "suspended"),
        (l.RUNNING = "running"),
        (l.CLOSED = "closed");
      class eH {
        getAverageFrequencies(e) {
          var t, a, i;
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let r = this.audioContext.sampleRate / this.bufferLength,
            l = 0,
            s = e.map((e) => {
              let { low: t, high: a } = e,
                i = Math.floor(a / r);
              return (
                (l = Math.max(l, i)),
                { startIndex: Math.floor(t / r), endIndex: i }
              );
            }),
            n = Array(l + 2).fill(0);
          for (let e = 0; e < l + 1; e++) {
            let t =
              (null !== (a = this.spectrum[e]) && void 0 !== a ? a : 0) / 256;
            n[e + 1] = (null !== (i = n[e]) && void 0 !== i ? i : 0) + t;
          }
          return s.map((e) => {
            let { startIndex: t, endIndex: a } = e,
              i = n[t],
              r = n[a + 1];
            return void 0 === i || void 0 === r ? 0 : (r - i) / (a - t + 1);
          });
        }
        constructor(e, t, a) {
          (0, X._)(this, "audioContext", void 0),
            (0, X._)(this, "bufferLength", 0),
            (0, X._)(this, "spectrum", new Uint8Array()),
            (0, X._)(this, "analyserNode", void 0),
            (this.audioContext = e),
            (this.analyserNode = a),
            t.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength));
        }
      }
      ((s = T || (T = {})).IDLE = "IDLE"),
        (s.ENABLED = "ENABLED"),
        (s.DISABLED = "DISABLED"),
        ((n = _ || (_ = {})).HIGHSHELF = "highshelf"),
        (n.PEAKING = "peaking"),
        (n.LOWSHELF = "lowshelf");
      class eQ {
        get lastBand() {
          return this.bands[this.bands.length - 1];
        }
        createBand(e, t, a) {
          let i = this.audioContext.createBiquadFilter();
          return (
            (i.type = e),
            (i.frequency.value = t),
            (i.Q.value = 1),
            a && i.gain.setValueAtTime(a, this.audioContext.currentTime + 0.3),
            i
          );
        }
        createBandsByFrequencies(e) {
          return e.map((t, a) => {
            let { key: i, value: r } = t;
            return this.createBand(this.getBiquadFilterType(a, e.length), i, r);
          });
        }
        connectBandsBetween(e) {
          let t = this.preamp;
          return (
            e.forEach((e) => {
              t.connect(e), (t = e);
            }),
            e
          );
        }
        getBiquadFilterType(e, t) {
          return 0 === e ? _.LOWSHELF : e === t - 1 ? _.HIGHSHELF : _.PEAKING;
        }
        updateBands(e, t) {
          e.forEach((e, a) => {
            let i = t[a];
            i &&
              e.gain.setValueAtTime(
                i.value,
                this.audioContext.currentTime + 0.3,
              );
          });
        }
        setPreamp(e) {
          this.preamp.gain.linearRampToValueAtTime(
            e,
            this.audioContext.currentTime + 0.3,
          );
        }
        connectNodeToDestination(e) {
          this.analyserNode
            ? (e.connect(this.analyserNode),
              this.analyserNode.connect(this.audioContext.destination))
            : e.connect(this.audioContext.destination);
        }
        enable() {
          this.state !== T.ENABLED &&
            (this.sourceNode.disconnect(),
            (this.state = T.ENABLED),
            this.sourceNode.connect(this.preamp),
            this.lastBand && this.connectNodeToDestination(this.lastBand));
        }
        disable() {
          this.state !== T.DISABLED &&
            (this.sourceNode.disconnect(),
            this.lastBand && this.lastBand.disconnect(),
            (this.state = T.DISABLED),
            this.connectNodeToDestination(this.sourceNode));
        }
        applyPreset(e) {
          this.setPreamp(e.preamp),
            0 === this.bands.length
              ? (this.bands = this.connectBandsBetween(
                  this.createBandsByFrequencies(e.frequencies),
                ))
              : this.updateBands(this.bands, e.frequencies);
        }
        constructor(e, t, a, i) {
          (0, X._)(this, "audioContext", void 0),
            (0, X._)(this, "sourceNode", void 0),
            (0, X._)(this, "preamp", void 0),
            (0, X._)(this, "analyserNode", void 0),
            (0, X._)(this, "state", T.DISABLED),
            (0, X._)(this, "bands", []),
            (this.audioContext = e),
            (this.sourceNode = t),
            (this.preamp = this.audioContext.createGain()),
            (this.analyserNode = i),
            (null == a ? void 0 : a.preset) && this.applyPreset(a.preset);
        }
      }
      ((o = N || (N = {})).IDLE = "IDLE"),
        (o.ENABLED = "ENABLED"),
        (o.DISABLED = "DISABLED");
      let eJ = 1e3 / 60;
      class eX {
        updateGain() {
          if (this.state !== N.ENABLED) return;
          let e = this.audioElement.currentTime,
            t = e >= this.inStart && e <= this.inStop,
            a = e >= this.outStart && e <= this.outStop;
          if (t) {
            let t = this.getFadeInVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          if (a) {
            let t = this.getFadeOutVolume(e);
            this.gainNode.gain.setValueAtTime(t, this.audioContext.currentTime);
          }
          e > this.inStop &&
            e < this.outStart &&
            this.gainNode.gain.setValueAtTime(1, this.audioContext.currentTime),
            e > this.outStop &&
              this.gainNode.gain.setValueAtTime(
                0,
                this.audioContext.currentTime,
              );
        }
        getFadeInVolume(e) {
          return Math.min(e / (this.inStop - this.inStart), 1);
        }
        getFadeOutVolume(e) {
          let t = this.outStop - this.outStart;
          return Math.max(1 - (e - this.outStart) / t, 0);
        }
        enable() {
          (this.state = N.ENABLED),
            this.intervalId ||
              (this.intervalId = setInterval(this.updateGain.bind(this), eJ));
        }
        disable() {
          (this.state = N.DISABLED),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
        apply(e) {
          if (!e) {
            this.disable(), (this.gainNode.gain.value = 1);
            return;
          }
          this.gainNode.gain.value = 0;
          let { inStart: t, inStop: a, outStart: i, outStop: r } = e;
          (this.inStart = t),
            (this.inStop = a),
            (this.outStart = i),
            (this.outStop = r),
            this.enable();
        }
        constructor({ audioElement: e, audioContext: t, sourceNode: a }) {
          (0, X._)(this, "audioElement", void 0),
            (0, X._)(this, "audioContext", void 0),
            (0, X._)(this, "sourceNode", void 0),
            (0, X._)(this, "gainNode", void 0),
            (0, X._)(this, "state", N.IDLE),
            (0, X._)(this, "inStart", 0),
            (0, X._)(this, "inStop", 0),
            (0, X._)(this, "outStart", 0),
            (0, X._)(this, "outStop", 0),
            (0, X._)(this, "intervalId", null),
            (this.audioElement = e),
            (this.audioContext = t),
            (this.sourceNode = a),
            (this.gainNode = t.createGain()),
            this.sourceNode.connect(this.gainNode),
            this.gainNode.connect(this.audioContext.destination);
        }
      }
      class eZ {
        apply(e) {
          this.durationMs = e;
        }
        constructor({ playback: e }) {
          (0, X._)(this, "playback", null),
            (0, X._)(this, "durationMs", void 0),
            (this.playback = e),
            this.playback.state.playerState.progress.onChange((e) => {
              var t, a;
              let i =
                  (null !== (t = this.durationMs) && void 0 !== t ? t : 0) /
                  1e3,
                r = e && Math.abs(e.duration - i) > 1;
              e &&
                e.position > i &&
                r &&
                (null === (a = this.playback) ||
                  void 0 === a ||
                  a.moveForward());
            });
        }
      }
      class e$ {
        get isAudioContextRequired() {
          return (
            !!this.options.useEqualizer ||
            !!this.options.useAnalyser ||
            !!this.options.useFade
          );
        }
        checkAndResumeAudioContext() {
          var e;
          let t = () => {
            var e;
            null === (e = this.audioContext) ||
              void 0 === e ||
              e.resume().then(() => {
                document.body.removeEventListener("touchend", t, !0),
                  document.body.removeEventListener("click", t, !0),
                  document.body.removeEventListener("keydown", t, !0);
              });
          };
          (null === (e = this.audioContext) || void 0 === e
            ? void 0
            : e.state) === C.SUSPENDED &&
            (document.body.addEventListener("touchend", t, !0),
            document.body.addEventListener("click", t, !0),
            document.body.addEventListener("keydown", t, !0));
        }
        createAnalyzerNode(e) {
          let t = e.createAnalyser();
          return (t.fftSize = 1024), (t.smoothingTimeConstant = 0.4), t;
        }
        initializeContext(e, t) {
          if (((this.audioElement = e), this.isAudioContextRequired)) {
            if (
              ((this.audioContext = new AudioContext()),
              (this.sourceNode = this.audioContext.createMediaElementSource(
                this.audioElement,
              )),
              this.checkAndResumeAudioContext(),
              this.options.useAnalyser &&
                ((this.analyserNode = this.createAnalyzerNode(
                  this.audioContext,
                )),
                (this.analyser = new eH(
                  this.audioContext,
                  this.sourceNode,
                  this.analyserNode,
                ))),
              this.options.useEqualizer)
            ) {
              let e =
                "object" == typeof this.options.useEqualizer
                  ? this.options.useEqualizer
                  : void 0;
              this.equalizer.value = new eQ(
                this.audioContext,
                this.sourceNode,
                e,
                this.analyserNode,
              );
            }
            this.options.useFade &&
              (this.fade = new eX({
                audioElement: this.audioElement,
                audioContext: this.audioContext,
                sourceNode: this.sourceNode,
              }));
          }
          this.options.useSmartPreview &&
            (this.smartPreview = new eZ({ playback: t }));
        }
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.mediaPlayersStore.onChange((e) => {
            if (void 0 === e) return;
            let t = e[et.z.AUDIO];
            void 0 !== t &&
              (0, Z.SE)(t) &&
              void 0 === this.audioContext &&
              this.initializeContext(t.source, a);
          }),
            a.state.playerState.event.onChange(() => {
              if (this.fade)
                switch (a.state.playerState.event.value) {
                  case Z.xg.PLAYING:
                    this.fade.enable();
                    break;
                  case Z.xg.PAUSED:
                  case Z.xg.STOP:
                    this.fade.disable();
                }
            }),
            t.beforeMediaStartPlaying.tapPromise("WebAudioPlugin", () => {
              var e, t, i;
              let r, l;
              let { currentEntity: s } = a.state.queueState,
                n = null === (e = s.value) || void 0 === e ? void 0 : e.entity;
              return (
                (0, eK.Y)(n) &&
                  ((r =
                    null === (t = n.data.meta.smartPreviewParams) ||
                    void 0 === t
                      ? void 0
                      : t.fade),
                  (l =
                    null === (i = n.data.meta.smartPreviewParams) ||
                    void 0 === i
                      ? void 0
                      : i.durationMs)),
                (0, ez.O)(n) &&
                  ((r = n.data.meta.fade), (l = n.data.meta.durationMs)),
                this.fade && this.fade.apply(r),
                this.smartPreview && this.smartPreview.apply(l),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, X._)(this, "options", void 0),
            (0, X._)(this, "audioElement", void 0),
            (0, X._)(this, "audioContext", void 0),
            (0, X._)(this, "sourceNode", void 0),
            (0, X._)(this, "analyserNode", void 0),
            (0, X._)(this, "analyser", void 0),
            (0, X._)(this, "equalizer", new ey.wi(null)),
            (0, X._)(this, "fade", void 0),
            (0, X._)(this, "smartPreview", void 0),
            (this.options = e);
        }
      }
      function e0(e) {
        return (null == e ? void 0 : e.data.type) === ee.A.Clip;
      }
      ((d = A || (A = {})).AD = "ad"),
        (d.SHOT = "shot"),
        ((u = D || (D = {})).NONE = "none"),
        (u.AD = "ad"),
        (u.JINGLE = "jingle"),
        ((c = L || (L = {})).NONE = "none"),
        (c.AD = "ad"),
        (c.JINGLE = "jingle"),
        ((m = R || (R = {})).VIDEO = "video"),
        (m.AUDIO = "audio");
      class e5 {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.beforeEntityChange.tapPromise(
            "AdvertPlugin",
            () =>
              new Promise((e) => {
                if (!this.variables.enabled) {
                  e();
                  return;
                }
                let {
                  state: {
                    currentContext: a,
                    queueState: {
                      index: { value: i },
                      order: { value: r },
                      entityList: { value: l },
                      currentEntity: { value: s },
                    },
                  },
                } = t;
                if (void 0 !== a.value) {
                  let n = r[i + 1],
                    o = n ? l[n] : void 0,
                    d = o ? String(o.entity.data.meta.id) : void 0,
                    u = r[i - 1],
                    c = u ? l[u] : void 0,
                    m = c ? String(c.entity.data.meta.id) : void 0,
                    g =
                      ((null == s ? void 0 : s.entity.totalPlayedSeconds) ||
                        0) /
                      ((((null == s ? void 0 : s.entity.data.meta) &&
                        "durationMs" in s.entity.data.meta &&
                        s.entity.data.meta.durationMs) ||
                        1) /
                        1e3);
                  (this.currentTrackId = String(
                    null == s ? void 0 : s.entity.data.meta.id,
                  )),
                    (this.from = a.value.from),
                    this.afterTrackResource
                      .getAfterTrack({
                        contextItem: String(a.value.data.meta.id),
                        from: a.value.from,
                        types: A.AD,
                        nextTrackId: d,
                        prevTrackId: m,
                      })
                      .then((a) => {
                        var i, r, l;
                        let s =
                          (g >= 0.5 &&
                            (null === (i = a.ad) || void 0 === i
                              ? void 0
                              : i.afterPlay) === D.AD) ||
                          (g < 0.5 &&
                            (null === (r = a.ad) || void 0 === r
                              ? void 0
                              : r.afterSkip) === L.AD);
                        if ("ad" in a && this.advertModule && s) {
                          let i = e0(
                            null ===
                              (l = t.state.queueState.currentEntity.value) ||
                              void 0 === l
                              ? void 0
                              : l.entity,
                          )
                            ? R.VIDEO
                            : void 0;
                          t.pause(),
                            this.advertModule
                              .playAdvert({
                                afterTrackResponse: a,
                                advertType: i,
                              })
                              .finally(e);
                        } else e();
                      });
                } else e();
              }),
          );
        }
        advertFeedbackCallback() {
          this.adsResource.saveAds({
            from: this.from,
            trackId: this.currentTrackId,
            type: "ad",
          });
        }
        constructor(e) {
          var t;
          (0, X._)(this, "advertModule", void 0),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "afterTrackResource", void 0),
            (0, X._)(this, "adsResource", void 0),
            (0, X._)(this, "currentTrackId", ""),
            (0, X._)(this, "from", "");
          let {
            afterTrackResource: a,
            advertModule: i,
            adsResource: r,
            variables: l,
          } = e;
          (this.afterTrackResource = a),
            (this.adsResource = r),
            (this.variables = l),
            (this.advertModule = i),
            null === (t = this.advertModule) ||
              void 0 === t ||
              t.setAdvertFeedbackCallback(
                this.advertFeedbackCallback.bind(this),
              );
        }
      }
      var e1 = a(29196),
        e4 = a(27851);
      function e3(e) {
        let t = e1.k2.X.PAUSE;
        switch (e.status.value) {
          case Z.FY.BUFFERING:
            t = e1.k2.X.BUFFERING;
            break;
          case Z.FY.ENDED:
          case Z.FY.STOPPED:
            t = e1.k2.X.END;
            break;
          case Z.FY.PLAYING:
            t = e1.k2.X.PLAY;
            break;
          case Z.FY.PAUSED:
          case Z.FY.IDLE:
          case Z.FY.LOADING_MEDIA_SOURCE:
            t = e1.k2.X.PAUSE;
        }
        return t;
      }
      class e7 {
        createTelemetry(e) {
          (this.vsid = (0, J.createVsid)(
            e.playbackInitializationTime,
            this.playerTypeForVsid,
          )),
            (this.telemetry = new e1.M0({
              getState: () => {
                let {
                  progress: {
                    value: {
                      duration: t,
                      position: a,
                      remainingBufferedTime: i,
                    },
                  },
                  volume: r,
                } = e.state.playerState;
                return {
                  duration: (0, e4.my)(t),
                  currentTime: (0, e4.my)(a),
                  utcStartTime: void 0,
                  videoType: "VOD",
                  isFullscreen: !1,
                  volume: r.value,
                  muted: 0 === r.value,
                  remainingBufferedTime: {
                    total: (0, e4.my)(null != i ? i : 0),
                  },
                  playingState: e3(e.state.playerState),
                  videoSize: void 0,
                  liveLatency: void 0,
                  videoTracks: [],
                  audioTrack: void 0,
                  isVisible: !1,
                };
              },
              sendLog: (e, t) => {
                this.telemetryResource.log({ payload: e, urlParams: t });
              },
              playerInfo: {
                service: this.service,
                version: "1.0.0",
                vsid: this.vsid,
                isVideoADB: !1,
              },
            })),
            this.telemetry.setStaticParams({ labels: { from: this.from } });
        }
        logEvent(e, t) {
          var a;
          null === (a = this.telemetry) || void 0 === a || a.logEvent(e, t);
        }
        logError(e, t) {
          var a;
          null === (a = this.telemetry) || void 0 === a || a.logError(e, t);
        }
        setPlayingState(e) {
          var t;
          let a = e3(e);
          null === (t = this.telemetry) || void 0 === t || t.setPlayingState(a);
        }
        setStaticParams(e, t) {
          var a;
          null === (a = this.telemetry) ||
            void 0 === a ||
            a.setStaticParams(e, t);
        }
        onBeforeSetSource() {
          var e;
          return null === (e = this.telemetry) || void 0 === e
            ? void 0
            : e.onBeforeSetSource();
        }
        onSetSource(e) {
          var t;
          null === (t = this.telemetry) ||
            void 0 === t ||
            t.onSetSource(e, { streams: [], params: {} });
        }
        onSeek(e, t) {
          var a;
          null === (a = this.telemetry) ||
            void 0 === a ||
            a.onSeek({ oldPosition: e, newPosition: t });
        }
        logYaspEvent(e, t) {
          var a;
          null === (a = this.telemetry) ||
            void 0 === a ||
            a.logEvent({ name: e, data: t });
        }
        logYaspError(e) {
          var t;
          null === (t = this.telemetry) ||
            void 0 === t ||
            t.logError({
              error: {
                ...e.detail,
                isFatal: !!e.detail.isFatal,
                code: String(e.detail.code),
              },
            });
        }
        constructor({
          telemetryResource: e,
          service: t,
          from: a,
          playerTypeForVsid: i,
        }) {
          (0, X._)(this, "telemetry", void 0),
            (0, X._)(this, "telemetryResource", void 0),
            (0, X._)(this, "from", void 0),
            (0, X._)(this, "service", void 0),
            (0, X._)(this, "playerTypeForVsid", void 0),
            (0, X._)(this, "vsid", void 0),
            (this.telemetryResource = e),
            (this.service = t),
            (this.from = a),
            (this.playerTypeForVsid = i);
        }
      }
      class e6 {
        send(e) {
          new Promise((t) => {
            let a = { [e.name]: { ...e.data } };
            this.yaMetrika.count(a, "player-metrics"), t();
          });
        }
        constructor(e) {
          (0, X._)(this, "yaMetrika", void 0), (this.yaMetrika = e);
        }
      }
      var e2 = a(67802);
      let e9 = null;
      function e8(e, t) {
        let a, i;
        let r = e.state.queueState.order.value,
          l = e.state.queueState.index.value,
          s = e.state.currentContext.value,
          n = e.state.queueState.entityList.value,
          o = e.state.queueState.repeat.value === Z.zq.CONTEXT;
        for (let e = l - 1; e >= 0; e--) {
          let t = r[e];
          if ("number" != typeof t) break;
          let i = n[t];
          if (void 0 !== i && !i.entity.hidden) {
            a = i.entity;
            break;
          }
        }
        let d = !!a || o;
        for (let e = l + 1; e < r.length; e++) {
          let t = r[e];
          if ("number" != typeof t) break;
          let a = n[t];
          if (void 0 !== a && !a.entity.hidden) {
            i = a.entity;
            break;
          }
        }
        let u = !!i || (o && !!a) || (!o && t);
        s &&
          ((s.availableActions.moveBackward.value = d),
          (s.availableActions.moveForward.value = u && !(0, e2.Q)(s)),
          a ||
            i ||
            !o ||
            ((s.availableActions.moveBackward.value = !1),
            (s.availableActions.moveForward.value = !1))),
          null !== e9 && (e9(), (e9 = null)),
          0 !== l ||
            (0, e2.Q)(s) ||
            (e9 = e.state.playerState.progress.onChange((t) => {
              s &&
                t &&
                (((o = e.state.queueState.repeat.value === Z.zq.CONTEXT) &&
                  !a &&
                  !i) ||
                  !o) &&
                (s.availableActions.moveBackward.value = t.position > Z.lz);
            })),
          (0, e2.Q)(s) ||
            e.state.queueState.repeat.onChange((e) => {
              if (s) {
                if (e === Z.zq.CONTEXT) {
                  (s.availableActions.moveBackward.value =
                    !!a || (0 === l && !!i)),
                    (s.availableActions.moveForward.value = !!i || !!a);
                  return;
                }
                (s.availableActions.moveBackward.value = !!a),
                  (s.availableActions.moveForward.value = !!i || t);
              }
            });
      }
      let te = [$.V.AUDIOBOOK, $.V.FAIRY_TALE, $.V.PODCAST, $.V.COMMENT];
      var tt = a(44679);
      let ta = (e) => {
        let { meta: t } = e.data,
          a =
            "albums" in t &&
            t.albums &&
            t.albums.length > 0 &&
            t.albums[0] &&
            t.albums[0].type === tt.V.PODCAST;
        return !!(("type" in t && t.type && te.includes(t.type)) || a);
      };
      class ti {
        apply(e) {
          let { hooks: t, playback: a } = e,
            i = () => {
              !(function (e) {
                let { value: t } = e.state.currentContext,
                  { value: a } = e.state.queueState.currentEntity;
                if (void 0 !== t && void 0 !== a) {
                  let { meta: i } = a.entity.data;
                  (window?.SHOW_REPEAT_BUTTON_ON_VIBE()
                    ? false
                    : (0, eq.x)(t)) || // is track type Vibe
                  (0, e2.Q)(t) || // is track type Generative
                  ("type" in i && i.type && te.includes(i.type))
                    ? ((t.availableActions.repeat.value = !1),
                      e.state.queueState.repeat.value !== Z.zq.NONE &&
                        e.setRepeatMode(Z.zq.NONE))
                    : ((t.availableActions.repeat.value = !0),
                      (0, eq.x)(t) &&
                        e.state.queueState.repeat.value === Z.zq.CONTEXT &&
                        e.setRepeatMode(Z.zq.NONE));

                  (0, eq.x)(t) || // is track type Vibe
                  (0, e2.Q)(t) || // is track type Generative
                  ("type" in i && i.type && te.includes(i.type))
                    ? ((t.availableActions.shuffle.value = !1),
                      e.state.queueState.shuffle.value && e.toggleShuffle())
                    : (t.availableActions.shuffle.value = !0);
                }
              })(a),
                (function (e) {
                  let { value: t } = e.state.currentContext,
                    { value: a } = e.state.queueState.currentEntity;
                  if (void 0 !== t && void 0 !== a) {
                    let e = ta(a.entity);
                    t.availableActions.speed.value = !!e;
                  }
                })(a);
            };
          t.afterContextSet.tap("AvailableActionsPlugin", i),
            t.beforeMediaStartPlaying.tap("AvailableActionsPlugin", i),
            a.state.queueState.entityList.onChange(() => {
              i(), e8(a, this.variables.isAutoflowEnabled);
            }),
            a.state.queueState.index.onChange(() => {
              e8(a, this.variables.isAutoflowEnabled);
            });
        }
        constructor({ variables: e }) {
          (0, X._)(this, "variables", void 0), (this.variables = e);
        }
      }
      class tr {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterContextSet.tap("ApplyContextPlugin", () => {
            let e = a.state.currentContext.value;
            e && e instanceof Z.$n && e.apply({ hooks: t, playback: a });
          });
        }
      }
      class tl {
        apply(e) {
          let { playback: t, hooks: a } = e;
          t.state.playerState.event.onChange(() => {
            let { currentEntity: e } = t.state.queueState;
            if (e.value)
              switch (t.state.playerState.event.value) {
                case Z.xg.PAUSED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(Z.xg.PAUSED),
                  });
                  break;
                case Z.xg.WAITING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(Z.xg.WAITING),
                  });
                  break;
                case Z.xg.PLAYING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.PLAYING,
                    reason: "event-".concat(Z.xg.PLAYING),
                  });
                  break;
                case Z.xg.MEDIA_ELEMENT_ERROR:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(Z.xg.MEDIA_ELEMENT_ERROR),
                  });
              }
          }),
            a.beforeEntityPlayingProcessStart.tapPromise(
              "TotalPlayedTimePlugin",
              () => {
                let { currentEntity: e } = t.state.queueState;
                return (
                  e.value && e.value.entity.clearTimeStagesOfPlayback(),
                  Promise.resolve()
                );
              },
            ),
            a.afterMediaStartPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.PLAYING,
                    reason: "hook-afterMediaStartPlaying",
                  }),
                Promise.resolve()
              );
            }),
            a.afterMediaEndPlaying.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "hook-afterMediaEndPlaying",
                  }),
                Promise.resolve()
              );
            }),
            a.beforeEntityChange.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "hook-beforeEntityChange",
                  }),
                Promise.resolve()
              );
            }),
            a.beforeContextSet.tapPromise("TotalPlayedTimePlugin", () => {
              let { currentEntity: e } = t.state.queueState;
              return (
                e.value &&
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "hook-beforeContextSet",
                  }),
                Promise.resolve()
              );
            });
        }
      }
      var ts = a(71361),
        tn = a(62726);
      ((g = x || (x = {})).PREPARE = "prepare"),
        (g.PLAY = "play"),
        ((h = w || (w = {})).FINISH = "finish"),
        (h.SKIP = "skip"),
        (h.DISLIKE = "dislike"),
        (h.BACK_SKIP = "back_skip"),
        (h.OTHER_TRACK = "other_track"),
        (h.IN_PROGRESS = "in_progress");
      var to = a(8356),
        td = a(49498);
      class tu extends to.c {
        async sendPlays(e, t) {
          var a;
          return (
            await this.httpClient.post("plays", {
              prefixUrl: this.config.prefixUrl,
              headers: this.createRequestHeadersFromParams(e),
              searchParams: (0, td.f)({ clientNow: e.clientNow }),
              json: { plays: e.plays },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (a = this.config.timeouts) || void 0 === a
                  ? void 0
                  : a.sendPlays,
              signal: null == t ? void 0 : t.signal,
            })
          ).json();
        }
        constructor(e, t) {
          super(e, t),
            (0, X._)(this, "httpClient", void 0),
            (0, X._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class tc extends en.y {
        constructor(e, { code: t = "E_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "MediaProviderException"),
            Object.setPrototypeOf(this, tc.prototype);
        }
      }
      class tm extends tc {
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "GetFileInfoMediaProviderException"),
            Object.setPrototypeOf(this, tm.prototype);
        }
      }
      var tg = a(87909);
      ((y = G || (G = {})).START = "start"),
        (y.END = "end"),
        (y.PLAYING = "playing");
      let th = (e) => {
        if (e.mediaSourceData && "urls" in e.mediaSourceData.data) {
          let t = e.mediaSourceData.data.urls[0];
          if (t && t.startsWith("blob:")) return !0;
        }
        return !1;
      };
      var ty = a(15622),
        tv = a(43398);
      function tp() {
        return new Date().toISOString();
      }
      function tS(e) {
        var t, a, i, r, l, s;
        let n;
        let {
            contextEntityPair: o,
            totalPlayedSeconds: d,
            endPositionSeconds: u,
            type: c,
            maxPlayerStage: m,
            seek: g,
            pause: h,
            startTimestamp: y,
            radioSessionId: v,
            radioBatchId: p,
            isFromAutoflow: S,
            isFromPumpkin: E,
            changeReason: b,
          } = e,
          { entity: f, context: P } = o,
          I = String(f.data.meta.id),
          k = (function (e) {
            let t;
            if ("albums" in e.data.meta) {
              let {
                data: {
                  meta: { albums: a },
                },
              } = e;
              if (a) {
                let e = a[0];
                e && (t = String(e.id));
              }
            }
            return t;
          })(f),
          C =
            (null === (t = f.data.additional) || void 0 === t
              ? void 0
              : t.from) || P.from,
          T =
            (null === (a = f.data.additional) || void 0 === a
              ? void 0
              : a.utmLink) ||
            P.utmLink ||
            {},
          _ = 0;
        (0, eK.Y)(f)
          ? "smartPreviewParams" in f.data.meta &&
            (null === (i = f.data.meta.smartPreviewParams) || void 0 === i
              ? void 0
              : i.durationMs) &&
            (_ =
              (null === (r = f.data.meta.smartPreviewParams) || void 0 === r
                ? void 0
                : r.durationMs) / 1e3)
          : "durationMs" in f.data.meta &&
            f.data.meta.durationMs &&
            (_ = f.data.meta.durationMs / 1e3);
        let N = d,
          A = u;
        0.5 > Math.abs(_ - d) && (N = _),
          0.5 > Math.abs(_ - u) && (A = _),
          (n = (0, e2.Q)(P)
            ? {
                generativeStreamId: String(
                  null === (l = P.data.meta.stream) || void 0 === l
                    ? void 0
                    : l.id,
                ),
              }
            : { trackId: I });
        let D = !!f.data.isRestored,
          L = {
            playId: f.playId,
            timestamp: tp(),
            totalPlayedSeconds: N,
            endPositionSeconds: A,
            trackLengthSeconds: _,
            albumId: k,
            from: C,
            context: P.data.type,
            contextItem: String(P.data.meta.id),
            addTracksToPlayerTime: f.addTracksToPlayerTime,
            audioAuto: "none",
            audioOutputName: "Динамик",
            audioOutputType: "Speaker",
            maxPlayerStage: m,
            seek: g,
            pause: h,
            startTimestamp: y,
            fromCache: th(f),
            isRestored: D,
            changeReason: b,
            ...T,
            ...n,
          };
        if (
          ((0, eq.x)(P) &&
            P.data.meta.session &&
            ((L.radioSessionId =
              null != v ? v : P.data.meta.session.radioSessionId),
            (L.batchId = null != p ? p : P.data.meta.session.batchId),
            (L.isFromAutoflow = S),
            (L.isFromPumpkin = E),
            (L.context = "radio"),
            (L.contextItem = P.data.meta.session.wave.stationId)),
          (null == P ? void 0 : P.data.type) === eg.A.Playlist &&
            ((L.playlistId = ""
              .concat(P.data.meta.uid, ":")
              .concat(P.data.meta.kind)),
            (L.contextItem = ""
              .concat(P.data.meta.uid, ":")
              .concat(P.data.meta.kind))),
          (0, ty.d)(P))
        ) {
          let e = [tv.Z.Search, tv.Z.Other],
            t =
              null !== (s = P.data.overrideContextType) && void 0 !== s
                ? s
                : tv.Z.Other;
          (L.context = t), e.includes(t) && (L.contextItem = null);
        }
        return (0, eK.Y)(f) && (L.smartPreview = !0), { type: c, data: L };
      }
      var tE = a(48443),
        tb = a(15136),
        tf = a(54907),
        tP = a(13221),
        tI = a(90034);
      let tk = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "playId" in e &&
            "totalPlayedSeconds" in e
          ),
        tC = (e) => {
          let t = [
            e.find((e) => 0 === e.totalPlayedSeconds),
            (0, tf.Z)(e, "totalPlayedSeconds"),
          ];
          return (0, tP.Z)(t.filter(tk), "totalPlayedSeconds");
        },
        tT = (e) => {
          let t = (0, tb.Z)((0, tE.Z)(e, "playId"), tC);
          return (0, tI.Z)(t);
        };
      class t_ extends en.y {
        constructor(e, { code: t = "E_PLAYS", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "PlaysException"),
            Object.setPrototypeOf(this, t_.prototype);
        }
      }
      var tN = a(4982),
        tA = a(24100);
      let tD = "playsHeartBeats";
      class tL extends en.y {
        constructor(e, { code: t = "E_PLAYS_IDB_STORE", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "PlaysStoreException"),
            Object.setPrototypeOf(this, tL.prototype);
        }
      }
      let tR = () => "".concat("music_plays", "_").concat("1.0.0"),
        tx = () => {
          var e, t;
          return (
            null === (t = window.navigator) || void 0 === t
              ? void 0
              : null === (e = t.storage) || void 0 === e
                ? void 0
                : e.estimate
          )
            ? window.navigator.storage.estimate().catch(() => ({}))
            : Promise.resolve({});
        },
        tw = (e) => /connection.*lost/i.test("".concat(e)),
        tG = (e) => "".concat(e).includes("QuotaExceededError");
      class tV {
        deleteDatabase() {
          return window.indexedDB
            .databases()
            .then((e) =>
              e.find((e) => this.idbName === e.name)
                ? new tA.r(this.idbName).deleteDB({ onBlocked: tN.Z })
                : Promise.resolve(),
            )
            .catch((e) => {
              this.logError("Error while deleting database", e);
            });
        }
        isAvailable() {
          return this.idbIsAvailable;
        }
        openDatabase() {
          return this.openIdb({
            onBlocked: () => this.onBlockedHandler(),
            onTerminated: () => this.onTerminatedHandler(),
          }).then((e) => {
            this.idb = Promise.resolve(e);
          });
        }
        setErrorLogger(e) {
          this.errorLogger = e;
        }
        storePlaysData(e) {
          return this.executeTransaction((t) =>
            t.put(tD, e).then(() => t.count(tD)),
          )
            .then((e) =>
              "number" == typeof e && e > this.storedPlaysLimit
                ? this.deleteOverLimitPlays(this.storedPlaysLimit)
                : Promise.resolve(),
            )
            .catch((e) => {
              throw this.generateError("Saving Play Error", e);
            });
        }
        getStoredPlaysData(e) {
          return this.executeTransaction((t) => t.getAll(tD, null, e), {
            defaultValue: [],
          }).catch((e) => {
            throw this.generateError("Error getting Plays", e);
          });
        }
        deleteAllByPlayId(e, t) {
          return Promise.all(
            e.map((e) => {
              let { playId: a } = e;
              return this.iterateByCursor("playId", a, "readwrite", (e) =>
                !t || t(e.value) ? e.delete() : Promise.resolve(),
              );
            }),
          )
            .then(tN.Z)
            .catch((e) => {
              throw this.generateError("Error deleting Plays", e);
            });
        }
        deleteOverLimitPlays(e) {
          return this.iterateByCursor(null, null, "readwrite", (t, a) =>
            a <= e ? Promise.resolve() : t.delete(),
          ).catch((e) => {
            throw this.generateError("Error deleting overlimit Plays", e);
          });
        }
        iterateByCursor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = 0,
            l = (e) =>
              e
                ? i(e, ++r)
                    .then(() => e.continue())
                    .then(l)
                : Promise.resolve();
          return this.getCursor(e, t, a).then(l);
        }
        onBlockedHandler() {
          this.closeConnection(this.idb).then(() => {
            this.idb = this.openIdb({
              onBlocked: () => {
                this.closeConnection(this.idb);
              },
              onTerminated: () => this.onTerminatedHandler(),
            });
          });
        }
        onTerminatedHandler() {
          (this.idbIsAvailable = !1),
            (this.idb = this.openIdb({
              onBlocked: () => this.onBlockedHandler(),
              onTerminated: () => {
                this.idbIsAvailable = !1;
              },
            }));
        }
        openIdb(e) {
          return new tA.r(this.idbName)
            .openDB(1, {
              onBlocked: (t, a, i) => {
                var r;
                this.logError("Connection has been blocked"),
                  null == e ||
                    null === (r = e.onBlocked) ||
                    void 0 === r ||
                    r.call(e, t, a, i);
              },
              onTerminated: () => {
                var t;
                this.logError("Storage has been terminated"),
                  null == e ||
                    null === (t = e.onTerminated) ||
                    void 0 === t ||
                    t.call(e);
              },
              onUpgrade: (e) => {
                let t = e.createObjectStore(tD, {
                  keyPath: "id",
                  autoIncrement: !0,
                });
                t.createIndex("playId", "playId", { unique: !1 }),
                  t.createIndex("trackId", "trackId", { unique: !1 });
              },
            })
            .then((e) => ((this.idbIsAvailable = !0), e))
            .catch((e) => {
              (this.idbIsAvailable = !1),
                this.logError("Open storage error", e);
            });
        }
        closeConnection(e) {
          return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
            ? e
                .then((e) => {
                  e && e.close();
                })
                .catch((e) => {
                  this.logError("Error while try to close connection", e);
                })
            : Promise.resolve();
        }
        getCursor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a = arguments.length > 2 ? arguments[2] : void 0;
          return this.executeTransaction(
            (i) => {
              let r = i.transaction([tD], a).objectStore(tD);
              return e
                ? r.index(e).openCursor(t, "prev")
                : r.openCursor(t, "prev");
            },
            { defaultValue: null },
          );
        }
        executeTransaction(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.idbIsAvailable && this.idb
            ? this.idb.then((a) =>
                a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue),
              )
            : Promise.resolve(null == t ? void 0 : t.defaultValue);
        }
        logError(e, t) {
          var a;
          let i = this.generateError(e, t);
          null === (a = this.errorLogger) || void 0 === a || a.call(this, i);
        }
        generateError(e, t) {
          var a;
          let i = "[IndexedDB]["
              .concat(this.idbName, ".")
              .concat(tD, "]: ")
              .concat(e),
            r = String(t);
          return (
            (tG(t) || tw(t)) && this.closeConnection(),
            new tL(i, {
              data: {
                originalError: r,
                storageEstimate:
                  null !== (a = this.storageEstimate) && void 0 !== a ? a : {},
              },
            })
          );
        }
        constructor(e) {
          (0, X._)(this, "storedPlaysLimit", void 0),
            (0, X._)(this, "idb", void 0),
            (0, X._)(this, "errorLogger", void 0),
            (0, X._)(this, "idbIsAvailable", !1),
            (0, X._)(this, "idbName", void 0),
            (0, X._)(this, "storageEstimate", void 0),
            (this.storedPlaysLimit = e),
            tx().then((e) => {
              this.storageEstimate = e;
            }),
            (this.idbName = tR());
        }
      }
      class tO {
        apply(e) {
          var t, a;
          let { hooks: i, playback: r } = e;
          (this.hooks = i),
            this.variables.enableLocalStoredPlaysData &&
              this.playsStore.setErrorLogger((e) => {
                i.afterError.promise(e);
              }),
            this.variables.shouldDeletePlaysObjectStore &&
              (null === (t = this.playsStore) ||
                void 0 === t ||
                t.deleteDatabase()),
            this.variables.enableLocalStoredPlaysData &&
              !this.variables.shouldDeletePlaysObjectStore &&
              (null === (a = this.playsStore) ||
                void 0 === a ||
                a.openDatabase().then(() => {
                  this.sendStoredPlaysData();
                })),
            r.state.playerState.event.onChange(() => {
              let { currentEntity: e } = r.state.queueState;
              if (e.value)
                switch (r.state.playerState.event.value) {
                  case Z.xg.PLAYING:
                    return (
                      this.setVibeContextDynamicData(r),
                      this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: { maxPlayerStage: x.PLAY },
                      })
                    );
                  case Z.xg.PAUSED:
                    if (
                      Math.abs(
                        r.state.playerState.progress.value.position -
                          r.state.playerState.progress.value.duration,
                      ) > 0.2
                    )
                      return this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: { pause: !0 },
                      });
                    return;
                  case Z.xg.SET_PROGRESS:
                    return this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { seek: !0 },
                    });
                }
            });
          let l = (0, ts.Z)(
              () => {
                let e = r.state.queueState.currentEntity.value;
                if (!e || (0, e2.Q)(e.context)) return;
                let t = this.getDynamicPlaysDataByPlayId(e.entity.playId),
                  a = this.variables.enableSendChangeReason
                    ? w.IN_PROGRESS
                    : void 0,
                  { data: i } = tS({
                    type: G.PLAYING,
                    contextEntityPair: e,
                    totalPlayedSeconds: e.entity.totalPlayedSeconds,
                    endPositionSeconds:
                      r.state.playerState.progress.value.position,
                    ...t,
                    changeReason: a,
                  });
                i.playId && i.totalPlayedSeconds > 0 && this.storeAndReplace(i);
              },
              this.storePlaysProgressIntervalMs,
              { trailing: !1 },
            ),
            s = (0, ts.Z)(
              () => {
                this.sendPartialPlayReport(r, i);
              },
              2e3,
              { trailing: !1 },
            );
          this.variables.enableLocalStoredPlaysData &&
            r.state.playerState.progress.onChange(l),
            this.variables.enablePartialPlayReporting &&
              r.state.playerState.progress.onChange(s),
            i.beforeEntityPlayingProcessStart.tapPromise(
              "PlaysPlugin",
              () => (
                this.variables.enableRemoveDuplicatePlays &&
                  this.sentPlayIds.clear(),
                this.setVibeContextDynamicData(r),
                this.sendStartEntityPlay(r, i),
                Promise.resolve()
              ),
            ),
            i.beforeMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let { currentEntity: e } = r.state.queueState;
              if (e.value) {
                var t;
                let a = e.value.entity.playId,
                  i =
                    null ===
                      (t = this.dynamicPlaysDataByEntitiesPlayId.get(a)) ||
                    void 0 === t
                      ? void 0
                      : t.startTimestamp;
                e.value.entity.isDisliked && this.alreadyDislikedPlayIds.add(a),
                  i ||
                    this.changeDynamicPlaysDataByPlayId({
                      playId: a,
                      dynamicData: { startTimestamp: tp() },
                    });
              }
              return Promise.resolve();
            }),
            i.afterMediaEndPlaying.tapPromise("PlaysPlugin", () => {
              let {
                  index: { value: e },
                  entityList: { value: t },
                  repeat: { value: a },
                } = r.state.queueState,
                l = r.state.queueState.currentEntity.value;
              return (
                (e === t.length - 1 || a === Z.zq.ONE) &&
                  (l &&
                    ((0, e2.Q)(l.context)
                      ? this.setChangeReasonToDynamicPlaysData(r, w.OTHER_TRACK)
                      : this.setChangeReasonToDynamicPlaysData(r, w.FINISH)),
                  this.sendEndEntityPlay(r, i)),
                Promise.resolve()
              );
            }),
            i.afterError.tapPromise(
              "PlaysPlugin",
              (e) => (
                (e instanceof tm || e instanceof Z.YR) &&
                  this.sendEndEntityPlay(r, i),
                Promise.resolve()
              ),
            ),
            i.beforeContextSet.tapPromise(
              "PlaysPlugin",
              () => (
                this.setChangeReasonToDynamicPlaysData(r, w.OTHER_TRACK),
                this.sendCurrentEntityEndPlay(r, i)
              ),
            ),
            i.afterSetupQueue.tap("PlaysPlugin", () =>
              this.setVibeContextDynamicData(r),
            ),
            i.beforeEntityChange.tapPromise("PlaysPlugin", (e) => {
              var t, a;
              let { currentEntity: l } = r.state.queueState,
                { method: s } = e,
                n =
                  null === (t = l.value) || void 0 === t
                    ? void 0
                    : t.entity.playId;
              switch (s) {
                case tg.Zp.AUTO_MOVE_FORWARD:
                  this.setChangeReasonToDynamicPlaysData(r, w.FINISH);
                  break;
                case tg.Zp.MOVE_FORWARD: {
                  let e = w.SKIP;
                  (null === (a = l.value) || void 0 === a
                    ? void 0
                    : a.entity.isDisliked) &&
                    n &&
                    !this.alreadyDislikedPlayIds.has(n) &&
                    (e = w.DISLIKE),
                    this.setChangeReasonToDynamicPlaysData(r, e);
                  break;
                }
                case tg.Zp.MOVE_BACKWARD:
                  this.setChangeReasonToDynamicPlaysData(r, w.BACK_SKIP);
                  break;
                case tg.Zp.SET_INDEX:
                case tg.Zp.PLAY_CONTEXT:
                case tg.Zp.RESTART_CONTEXT:
                  this.setChangeReasonToDynamicPlaysData(r, w.OTHER_TRACK);
              }
              return this.sendCurrentEntityEndPlay(r, i, n);
            });
        }
        setVibeContextDynamicData(e) {
          var t;
          let { queueState: a } = e.state;
          if (
            (0, eq.x)(
              null === (t = a.currentEntity.value) || void 0 === t
                ? void 0
                : t.context,
            ) &&
            a.currentEntity.value
          ) {
            let {
                meta: { session: e, sessionTracks: t },
                parentContext: i,
              } = a.currentEntity.value.context.data,
              r = null == e ? void 0 : e.radioSessionId,
              l = t ? t.batchId : null == e ? void 0 : e.batchId,
              s = t ? t.pumpkin : null == e ? void 0 : e.pumpkin;
            this.changeDynamicPlaysDataByPlayId({
              playId: a.currentEntity.value.entity.playId,
              dynamicData: {
                radioSessionId: r,
                radioBatchId: l,
                isFromPumpkin: s,
                isFromAutoflow: !!i,
              },
            });
          }
        }
        setChangeReasonToDynamicPlaysData(e, t) {
          let { currentEntity: a } = e.state.queueState;
          a.value &&
            this.variables.enableSendChangeReason &&
            this.changeDynamicPlaysDataByPlayId({
              playId: a.value.entity.playId,
              dynamicData: { changeReason: t },
            });
        }
        isStorageEnabled() {
          return (
            !!this.variables.enableLocalStoredPlaysData &&
            this.playsStore.isAvailable()
          );
        }
        setPlaysDataForSending(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.set(t);
          });
        }
        clearSendedPlaysData(e) {
          e.forEach((e) => {
            let { playId: t } = e;
            this.sendingInProgressForPlayId.has(t) &&
              this.sendingInProgressForPlayId.delete(t);
          });
        }
        filterPlaysForSending(e) {
          return tT(
            e.filter((e) => {
              let { playId: t } = e;
              return !this.sendingInProgressForPlayId.has(t);
            }),
          );
        }
        playsResourceSend(e) {
          return (
            this.setPlaysDataForSending(e),
            this.playsResource
              .sendPlays({ clientNow: tp(), plays: e })
              .finally(() => {
                this.clearSendedPlaysData(e);
              })
          );
        }
        validatePlaysData(e) {
          if (!e.playId)
            throw new t_(
              "playId field is required, but was not found in plays data",
            );
          if (!e.from)
            throw new t_(
              "from field is required, but was not found in plays data",
            );
        }
        deletePlaysData(e, t, a) {
          return this.isStorageEnabled()
            ? this.playsStore
                .deleteAllByPlayId(e, t)
                .then(() => {
                  if (a) return a();
                })
                .catch((e) => {
                  var t;
                  null === (t = this.hooks) ||
                    void 0 === t ||
                    t.afterError.promise(e);
                })
            : Promise.resolve();
        }
        storeAndReplace(e) {
          return this.isStorageEnabled()
            ? this.deletePlaysData(
                [e],
                (e) => e.totalPlayedSeconds > 0,
                () => {
                  var t;
                  return null === (t = this.playsStore) || void 0 === t
                    ? void 0
                    : t.storePlaysData(e);
                },
              )
            : Promise.resolve();
        }
        sendStoredPlaysData() {
          let e = this.variables.limitOfStoredPlaysData || 25;
          return this.isStorageEnabled()
            ? this.playsStore
                .getStoredPlaysData(e)
                .then((e) => {
                  let t = this.filterPlaysForSending(e);
                  t.length &&
                    this.playsResourceSend(t)
                      .then(() => {
                        this.deletePlaysData(t).then(() => {
                          this.sendStoredPlaysData();
                        });
                      })
                      .catch((e) => {
                        var a;
                        e instanceof tn.du &&
                          e.statusCode === tn.CN.BAD_REQUEST &&
                          this.deletePlaysData(t),
                          null === (a = this.hooks) ||
                            void 0 === a ||
                            a.afterError.promise(
                              new t_("Error while sending plays", { cause: e }),
                            );
                      });
                })
                .catch((e) => {
                  var t;
                  null === (t = this.hooks) ||
                    void 0 === t ||
                    t.afterError.promise(e);
                })
            : Promise.resolve();
        }
        sendPlayData(e) {
          this.validatePlaysData(e);
          let t = [e];
          return this.playsResourceSend(t)
            .then(() => {
              this.isStorageEnabled() &&
                this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
            })
            .catch((a) => {
              throw (
                (a instanceof tn.du && a.statusCode === tn.CN.BAD_REQUEST
                  ? this.deletePlaysData(t)
                  : this.storeAndReplace(e),
                a)
              );
            })
            .finally(() => {
              this.isStorageEnabled() && this.sendStoredPlaysData();
            });
        }
        sendCurrentEntityEndPlay(e, t, a) {
          if (
            e.state.queueState.currentEntity.value &&
            e.state.currentContext.value
          ) {
            if ((0, eq.x)(e.state.currentContext.value))
              return this.sendEndEntityPlay(e, t);
            this.sendEndEntityPlay(e, t).finally(() => {
              a && this.alreadyDislikedPlayIds.delete(a);
            });
          }
          return Promise.resolve();
        }
        sendStartEntityPlay(e, t) {
          let a = e.state.queueState.currentEntity.value;
          try {
            if (a) {
              a.entity.addTracksToPlayerTime = ""
                .concat(Math.random().toString().slice(2), "-")
                .concat(Math.ceil(Number(new Date()) / 1e3));
              let {
                  seek: i,
                  pause: r,
                  radioSessionId: l,
                  radioBatchId: s,
                  isFromAutoflow: n,
                  isFromPumpkin: o,
                } = this.getDynamicPlaysDataByPlayId(a.entity.playId),
                d = tS({
                  type: G.START,
                  contextEntityPair: a,
                  totalPlayedSeconds: 0,
                  endPositionSeconds: 0,
                  seek: i,
                  pause: r,
                  radioSessionId: l,
                  radioBatchId: s,
                  isFromAutoflow: n,
                  isFromPumpkin: o,
                });
              if (
                (d.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new t_("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: d.data.totalPlayedSeconds,
                        trackLengthSeconds: d.data.trackLengthSeconds,
                        playId: d.data.playId,
                        isOnStart: !0,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                !this.variables.disableSendPlaysOnTrackStart)
              )
                return this.sendPlayData(d.data).catch((e) => {
                  let i = "",
                    r = "";
                  a &&
                    ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                    t.afterError.promise(
                      new t_("Error while sending plays", {
                        cause: e,
                        data: { contextId: i, entityId: r },
                      }),
                    );
                });
            }
          } catch (r) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new t_("Error while sending plays", {
                  cause: r,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        sendPartialPlayReport(e, t) {
          let a = e.state.queueState.currentEntity.value;
          if (!a) return Promise.resolve();
          try {
            let i = this.sentPartialPlayReportIds.has(a.entity.playId),
              r = a.entity.totalPlayedSeconds;
            if (!(0, e2.Q)(a.context) && !i && r >= 30.1) {
              let { entity: i } = a,
                l = this.getDynamicPlaysDataByPlayId(i.playId),
                s = this.variables.enableSendChangeReason
                  ? w.IN_PROGRESS
                  : void 0,
                n = tS({
                  type: G.PLAYING,
                  contextEntityPair: a,
                  totalPlayedSeconds: r,
                  endPositionSeconds:
                    e.state.playerState.progress.value.position,
                  ...l,
                  changeReason: s,
                });
              return (
                n.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new t_(
                      "Plays error. Too big play time while trying to send partial play report",
                      {
                        code: "E_PLAYS_BIG_PLAY_TIME",
                        data: {
                          timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                          contextId: a.context.data.meta.id,
                          entityId: a.entity.data.meta.id,
                          totalPlayedSeconds: n.data.totalPlayedSeconds,
                          trackLengthSeconds: n.data.trackLengthSeconds,
                          playId: n.data.playId,
                          isOnStart: !1,
                          entityListLength:
                            e.state.queueState.entityList.value.length,
                          index: e.state.queueState.index.value,
                          repeat: e.state.queueState.repeat.value,
                        },
                      },
                    ),
                  ),
                this.sendPlayData(n.data)
                  .then(() => {
                    this.variables.enablePartialPlayReporting &&
                      this.sentPartialPlayReportIds.add(n.data.playId);
                  })
                  .catch((e) => {
                    let i = "",
                      r = "";
                    a &&
                      ((i = a.context.data.meta.id),
                      (r = a.entity.data.meta.id)),
                      t.afterError.promise(
                        new t_("Error while sending plays", {
                          cause: e,
                          data: { contextId: i, entityId: r },
                        }),
                      );
                  })
              );
            }
          } catch (r) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new t_("Error while sending plays partial play report", {
                  cause: r,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        sendEndEntityPlay(e, t) {
          let a = e.state.queueState.currentEntity.value;
          if (!a) return Promise.resolve();
          try {
            let i = this.variables.enableRemoveDuplicatePlays,
              r = !!i && this.sentPlayIds.has(a.entity.playId),
              l = this.variables.enableSendChangeReason,
              s = l && (0, e2.Q)(a.context);
            if (
              (!(0, e2.Q)(a.context) || s) &&
              !this.sentPlayIds.has(a.entity.playId) &&
              !r
            ) {
              let r;
              let { entity: s } = a,
                n = a.entity.totalPlayedSeconds,
                { changeReason: o, ...d } = this.getDynamicPlaysDataByPlayId(
                  s.playId,
                );
              return (
                i && this.sentPlayIds.add(s.playId),
                (r =
                  0 !== n || l
                    ? tS({
                        type: G.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: n,
                        endPositionSeconds:
                          e.state.playerState.progress.value.position,
                        changeReason: l ? o : void 0,
                        ...d,
                      })
                    : tS({
                        type: G.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: 0.1,
                        endPositionSeconds: 0.1,
                        ...d,
                      })),
                this.dynamicPlaysDataByEntitiesPlayId.delete(r.data.playId),
                this.variables.enablePartialPlayReporting &&
                  this.sentPartialPlayReportIds.delete(r.data.playId),
                r.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new t_("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: r.data.totalPlayedSeconds,
                        trackLengthSeconds: r.data.trackLengthSeconds,
                        playId: r.data.playId,
                        isOnStart: !1,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                this.sendPlayData(r.data)
                  .catch((e) => {
                    let i = "",
                      r = "";
                    a &&
                      ((i = a.context.data.meta.id),
                      (r = a.entity.data.meta.id)),
                      t.afterError.promise(
                        new t_("Error while sending plays", {
                          cause: e,
                          data: { contextId: i, entityId: r },
                        }),
                      );
                  })
                  .finally(() => {
                    s.data.isRestored && (s.data.isRestored = !1);
                  })
              );
            }
          } catch (r) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new t_("Error while sending plays", {
                  cause: r,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        changeDynamicPlaysDataByPlayId(e) {
          let { playId: t, dynamicData: a } = e,
            i = this.dynamicPlaysDataByEntitiesPlayId.get(t);
          this.dynamicPlaysDataByEntitiesPlayId.set(t, {
            ...(null != i ? i : {}),
            ...(null != a ? a : {}),
          });
        }
        getDynamicPlaysDataByPlayId(e) {
          var t, a, i;
          let r = this.dynamicPlaysDataByEntitiesPlayId.get(e);
          return {
            seek:
              null !== (t = null == r ? void 0 : r.seek) && void 0 !== t && t,
            pause:
              null !== (a = null == r ? void 0 : r.pause) && void 0 !== a && a,
            maxPlayerStage:
              null !== (i = null == r ? void 0 : r.maxPlayerStage) &&
              void 0 !== i
                ? i
                : x.PREPARE,
            startTimestamp: null == r ? void 0 : r.startTimestamp,
            radioSessionId: null == r ? void 0 : r.radioSessionId,
            radioBatchId: null == r ? void 0 : r.radioBatchId,
            isFromAutoflow: null == r ? void 0 : r.isFromAutoflow,
            isFromPumpkin: null == r ? void 0 : r.isFromPumpkin,
            changeReason: null == r ? void 0 : r.changeReason,
          };
        }
        constructor(e) {
          (0, X._)(this, "dynamicPlaysDataByEntitiesPlayId", new Map()),
            (0, X._)(this, "sendingInProgressForPlayId", new Map()),
            (0, X._)(this, "sentPlayIds", new Set()),
            (0, X._)(this, "sentPartialPlayReportIds", new Set()),
            (0, X._)(this, "alreadyDislikedPlayIds", new Set()),
            (0, X._)(this, "playsResource", void 0),
            (0, X._)(this, "playsStore", void 0),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "storePlaysProgressIntervalMs", void 0),
            (0, X._)(this, "hooks", void 0);
          let { httpClient: t, playsResourceConfig: a, variables: i } = e;
          (this.playsResource = new tu(t, a)),
            (this.variables = i || {}),
            (this.storePlaysProgressIntervalMs =
              e.storePlaysProgressIntervalMs || 1e4);
          let r = this.variables.limitOfStoredPlaysData || 100;
          this.playsStore = new tV(r);
        }
      }
      function tM(e) {
        return (null == e ? void 0 : e.data.type) === ee.A.Generative;
      }
      ((v = V || (V = {})).PLAY = "play"),
        (v.PAUSE = "pause"),
        (v.NEXT = "nexttrack"),
        (v.PREV = "previoustrack"),
        (v.SEEK = "seekto"),
        (v.STOP = "stop");
      let tF = [40, 50, 80, 100, 200, 300, 400],
        tU = [V.PLAY, V.PAUSE, V.STOP, V.SEEK],
        tj = (e) => e.startsWith("blob:");
      class tB {
        isSupported() {
          return (
            "mediaSession" in window.navigator && "MediaMetadata" in window
          );
        }
        handleMediaActionEvents(e, t) {
          let { action: a } = e;
          switch (a) {
            case V.PLAY:
              t.resume();
              break;
            case V.PAUSE:
            case V.STOP:
              t.pause();
              break;
            case V.NEXT:
              t.moveForward();
              break;
            case V.PREV:
              t.moveBackward();
              break;
            case V.SEEK: {
              var i;
              if (
                tM(
                  null === (i = t.state.queueState.currentEntity.value) ||
                    void 0 === i
                    ? void 0
                    : i.entity,
                )
              )
                return;
              let { seekTime: a } = e;
              a && t.setProgress(a);
            }
          }
        }
        prepareMetadata(e) {
          let t, a;
          let i = { title: e.title };
          if ("artists" in e) {
            let t = (e.artists || []).map((e) => e.name).join(", ");
            i.artist = t;
          }
          if ("albums" in e) {
            var r, l;
            let t =
              null === (l = e.albums) || void 0 === l
                ? void 0
                : null === (r = l[0]) || void 0 === r
                  ? void 0
                  : r.title;
            i.album = t;
          }
          return (
            "coverUri" in e && (t = e.coverUri),
            "imageUrl" in e && (t = e.imageUrl),
            t &&
              (a = tF.map((e) => {
                let a = "".concat(e, "x").concat(e);
                "Safari" === this.browserName &&
                  (a = "".concat(2 * e, "x").concat(2 * e));
                let i = "";
                return (
                  "string" == typeof t &&
                    (i = tj(t) ? t : "https://".concat(t.replace("%%", a))),
                  { sizes: a, src: i, type: "image/jpg" }
                );
              })),
            (i.artwork = a),
            i
          );
        }
        updateMetadata(e) {
          if (!e) return;
          let t = this.prepareMetadata(e);
          window.navigator.mediaSession.metadata = new MediaMetadata(t);
        }
        handlePlayerEvents(e) {
          let t, a;
          e.state.playerState.event.onChange(() => {
            if (e.state.playerState.event.value === Z.xg.UPDATING_PROGRESS) {
              var t, a;
              this.updateMetadata(
                null === (t = e.state.queueState.currentEntity.value) ||
                  void 0 === t
                  ? void 0
                  : t.entity.data.meta,
              ),
                tM(
                  null === (a = e.state.queueState.currentEntity.value) ||
                    void 0 === a
                    ? void 0
                    : a.entity,
                )
                  ? navigator.mediaSession.setPositionState({
                      duration: 0,
                      position: 0,
                    })
                  : navigator.mediaSession.setPositionState(),
                tU.forEach((t) => {
                  try {
                    window.navigator.mediaSession.setActionHandler(t, (t) =>
                      this.handleMediaActionEvents(t, e),
                    );
                  } catch (e) {
                    console.log(
                      'The media session action "'.concat(
                        t,
                        '" is not supported yet.',
                      ),
                    );
                  }
                });
            }
          }),
            e.state.currentContext.onChange(() => {
              var i, r;
              null == t || t(),
                null == a || a(),
                (t =
                  null === (i = e.state.currentContext.value) || void 0 === i
                    ? void 0
                    : i.availableActions.moveBackward.onChange(() => {
                        var t, a;
                        let i =
                          null !==
                            (a =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveBackward.value) &&
                          void 0 !== a &&
                          a;
                        window.navigator.mediaSession.setActionHandler(
                          V.PREV,
                          i ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      })),
                (a =
                  null === (r = e.state.currentContext.value) || void 0 === r
                    ? void 0
                    : r.availableActions.moveForward.onChange(() => {
                        var t, a;
                        let i =
                          null !==
                            (a =
                              null === (t = e.state.currentContext.value) ||
                              void 0 === t
                                ? void 0
                                : t.availableActions.moveForward.value) &&
                          void 0 !== a &&
                          a;
                        window.navigator.mediaSession.setActionHandler(
                          V.NEXT,
                          i ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      }));
            });
        }
        apply(e) {
          let { playback: t } = e;
          this.isSupported() && this.handlePlayerEvents(t);
        }
        constructor({ browserName: e, browserVersion: t }) {
          (0, X._)(this, "browserName", void 0),
            (0, X._)(this, "browserVersion", void 0),
            (this.browserName = e),
            (this.browserVersion = t);
        }
      }
      var tq = a(65227);
      class tW {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterError.tapPromise("LoggerPlugin", (e) => {
            let t;
            let i = a.state.queueState.currentEntity.value
              ? a.state.queueState.currentEntity.value.entity.mediaSourceData
              : null;
            (t =
              e instanceof en.y
                ? e
                : new en.y("Error in Sonata player", {
                    code: "E_SONATA",
                    cause: e,
                  })).name = "[Sonata] ".concat(t.name);
            let r = t.cause instanceof Error ? (0, tq.$L)(t.cause) : t.cause;
            return (
              this.logger.error(t, {
                ...t.data,
                ...(i || {}),
                code: t.code,
                cause: r,
                stack: t.stack,
                message: t.message,
              }),
              Promise.resolve()
            );
          });
        }
        constructor(e) {
          (0, X._)(this, "logger", void 0);
          let { logger: t } = e;
          this.logger = t;
        }
      }
      (O || (O = {})).QUALITY_CHANGE = "QUALITY_CHANGE";
      class tY {
        apply(e) {
          let { playback: t, hooks: a } = e;
          this.quality.onChange(() => {
            t.state.playerState.status.value !== Z.FY.IDLE &&
              t.reloadEntity(O.QUALITY_CHANGE).catch((e) => {
                a.afterError.promise(e);
              });
          });
        }
        constructor(e) {
          (0, X._)(this, "quality", void 0), (this.quality = e);
        }
      }
      var tK = a(37778);
      let tz = (e) =>
        "object" == typeof e &&
        e &&
        "rememberPosition" in e &&
        "boolean" == typeof e.rememberPosition;
      class tH {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeEntityChange.tapPromise("ContinuePlayingPlugin", () => {
            let { position: e, duration: t } = this.getTimingsFromPlayback(a);
            return new Promise((i) => {
              e !== t && this.checkBeforeProgressSync(a), i();
            });
          }),
            a.state.playerState.status.onChange((e) => {
              (e === Z.FY.PAUSED || e === Z.FY.STOPPED) &&
                (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                e === Z.FY.PLAYING &&
                  this.shouldSendProgressSync(a) &&
                  this.setTimeout(a);
            }),
            a.state.playerState.event.onChange(() => {
              if (a.state.playerState.event.value === Z.xg.SET_PROGRESS) {
                let e = a.state.queueState.currentEntity.value,
                  t = a.state.playerState.progress.value.position;
                if (!e) return;
                let { entity: i } = e;
                tz(i.data.meta) &&
                  i.data.meta.rememberPosition &&
                  (i.lastSeekPosition = t);
              }
            }),
            a.state.queueState.currentEntity.onChange(() => {
              let e = a.state.queueState.currentEntity.value;
              if (!e) return;
              let { entity: t } = e;
              if (
                tz(t.data.meta) &&
                t.data.meta.rememberPosition &&
                ea(t.data.meta)
              ) {
                let { endPositionSec: e } = t.data.meta.streamProgress;
                t.everFinished
                  ? (t.startPosition = e)
                  : (t.startPosition = Number.isFinite(t.lastSeekPosition)
                      ? t.lastSeekPosition
                      : e);
              }
            });
        }
        checkBeforeProgressSync(e) {
          var t;
          if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
          let { position: a, duration: i } = this.getTimingsFromPlayback(e),
            r =
              null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
                ? void 0
                : t.entity.data.meta.id;
          Number.isFinite(i) &&
            Number.isFinite(a) &&
            i &&
            a &&
            r &&
            (this.sendProgressSync({ duration: i, position: a, trackId: r }),
            e.state.playerState.status.value === Z.FY.PLAYING &&
              this.setTimeout(e));
        }
        sendProgressSync(e) {
          let t = new Date().toISOString(),
            { duration: a, position: i, trackId: r } = e;
          this.streamsResource.progressSync({
            lastSyncTimestamp: t,
            trackStreams: [
              {
                trackId: r,
                positionSec: i,
                trackLengthSec: a,
                finished: i === a,
                timestamp: t,
              },
            ],
          });
        }
        shouldSendProgressSync(e) {
          var t;
          if (!this.variables.isEnabled) return !1;
          let a =
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.meta;
          return !!(a && "rememberPosition" in a && a.rememberPosition);
        }
        setTimeout(e) {
          this.clearTimeout(),
            (this.timeoutId = window.setTimeout(() => {
              this.checkBeforeProgressSync(e);
            }, 3e4));
        }
        clearTimeout() {
          window.clearTimeout(this.timeoutId);
        }
        getTimingsFromPlayback(e) {
          return {
            duration: Math.floor(e.state.playerState.progress.value.duration),
            position: Math.floor(e.state.playerState.progress.value.position),
          };
        }
        constructor(e) {
          (0, X._)(this, "streamsResource", void 0),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "timeoutId", 0);
          let { httpClient: t, streamsResourceConfig: a, variables: i } = e;
          (this.streamsResource = new tK.h(t, a)), (this.variables = i);
        }
      }
      var tQ = a(23439),
        tJ = a(91624);
      let tX = {
        [tJ.V.AACMP4]: "mp4a.40.2",
        [tJ.V.HEAACMP4]: "mp4a.40.5",
        [tJ.V.FLACMP4]: "flac",
      };
      function tZ(e) {
        let t;
        for (let a of e.keys()) {
          let i = e.get(a);
          i && !t
            ? (t = "?".concat(a, "=").concat(i))
            : i && (t = "".concat(t, "&").concat(a, "=").concat(i));
        }
        return t;
      }
      class t$ {
        get src() {
          if ("error" in this.data)
            throw new en.y("Error in DownloadInfoSource data", {
              data: { error: this.data.error },
            });
          if (!this.data.urls[0])
            throw new en.y("No urls in DownloadInfoSource");
          let e = this.getQueryParamsString();
          return e ? "".concat(this.data.urls[0]).concat(e) : this.data.urls[0];
        }
        get mirrorUrls() {
          if ("error" in this.data)
            throw new en.y("Error in DownloadInfoSource data", {
              data: { error: this.data.error },
            });
          let e = this.getQueryParamsString(),
            t = this.data.urls.slice(1);
          return e ? t.map((t) => "".concat(t).concat(e)) : t;
        }
        get key() {
          if ("error" in this.data)
            throw new en.y("Error in DownloadInfoSource data", {
              data: { error: this.data.error },
            });
          if (this.data.transport === tQ.J.ENCRAW) return this.data.key;
        }
        getQueryParamsString() {
          if ("error" in this.data)
            throw new en.y("Error in DownloadInfoSource data", {
              data: { error: this.data.error },
            });
          let e = tX[this.data.codec],
            t = void 0 === this.sourceIndex ? void 0 : String(this.sourceIndex);
          return tZ(
            new Map([
              ["container", e ? "mp4" : void 0],
              ["codec", e],
              ["vsid", this.vsid],
              ["source_index", t],
            ]),
          );
        }
        constructor(e) {
          (0, X._)(this, "type", "downloadInfoSource"),
            (0, X._)(this, "data", void 0),
            (0, X._)(this, "vsid", void 0),
            (0, X._)(this, "sourceIndex", void 0),
            (0, X._)(this, "loadingTime", void 0),
            (0, X._)(this, "getFileInfoResponseTime", void 0),
            (0, X._)(this, "url", void 0),
            (this.data = e.data),
            (this.vsid = e.vsid),
            (this.loadingTime = e.loadingTime),
            (this.getFileInfoResponseTime = e.getFileInfoResponseTime),
            (this.url = e.url),
            (this.sourceIndex = e.sourceIndex);
        }
      }
      ((p = M || (M = {})).WANT_PLAY_TRACK = "WANT_PLAY_TRACK"),
        (p.TRACK_IS_BUFFERING = "TRACK_IS_BUFFERING"),
        (p.TRACK_IS_PLAYING = "TRACK_IS_PLAYING"),
        (p.TRACK_IS_PLAYING_MISSED = "TRACK_IS_PLAYING_MISSED"),
        (p.TRACK_ERROR_PREPARE = "TRACK_ERROR_PREPARE"),
        (p.TRACK_ERROR_INITIAL_BUFFERING = "TRACK_ERROR_INITIAL_BUFFERING"),
        (p.TRACK_ERROR_PLAYING = "TRACK_ERROR_PLAYING"),
        (p.REQUEST_TIME = "REQUEST_TIME"),
        ((F || (F = {})).GET_FILE_INFO = "get_file_info"),
        ((S = U || (U = {})).E_GET_MEDIA_SRC = "E_GET_MEDIA_SRC"),
        (S.E_CREATE_SIGN = "E_CREATE_SIGN"),
        (S.E_UNSUITABLE_ENTITY_TYPE = "E_UNSUITABLE_ENTITY_TYPE"),
        ((E = j || (j = {})).NETWORK = "NETWORK"),
        (E.OTHER = "OTHER"),
        ((b = B || (B = {})).BAD_RESPONSE_4XX = "BAD_RESPONSE_4XX"),
        (b.BAD_RESPONSE_5XX = "BAD_RESPONSE_5XX"),
        (b.OTHER = "OTHER");
      var t0 = a(66924),
        t5 = a(95817);
      function t1(e) {
        switch (e) {
          case t0.n.LOSSLESS:
          case t5.n.HIGH_QUALITY:
            return q.LOSSLESS;
          case t0.n.NQ:
          case t5.n.BALANCED:
            return q.NQ;
          case t0.n.LQ:
          case t5.n.EFFICIENT:
            return q.LQ;
          case t0.n.PREVIEW:
          case t5.n.PREVIEW:
            return q.PREVIEW;
          case t0.n.SMART_PREVIEW:
            return q.SMART_PREVIEW;
          default:
            return;
        }
      }
      ((f = q || (q = {})).LOSSLESS = "Lossless"),
        (f.NQ = "NQ"),
        (f.LQ = "LQ"),
        (f.PREVIEW = "Preview"),
        (f.SMART_PREVIEW = "SmartPreview"),
        ((P = W || (W = {})).SKIPPED = "SKIPPED"),
        (P.NEXT = "NEXT"),
        (P.FROM_QUEUE = "FROM_QUEUE"),
        (P.OTHER = "OTHER");
      class t4 {
        getEntityQualityInfo(e) {
          let t, a, i;
          return (
            !e.mediaSourceData ||
              "error" in e.mediaSourceData.data ||
              "downloadInfoSource" !== e.mediaSourceData.type ||
              ((t = e.mediaSourceData.data.codec),
              (a = e.mediaSourceData.data.bitrate)),
            e.expectedQuality && (i = t1(e.expectedQuality)),
            { codec: t, bitrate: a, expectedQuality: i }
          );
        }
        logEvent(e) {
          let { event: t, eventName: a } = e;
          this.enableDebugMode &&
            (t
              ? (console.group(
                  "".concat(null != a ? a : "Untitled Log Metrics Event Info"),
                ),
                console.table(t.data),
                console.group("Raw event"),
                console.dir(t),
                console.groupEnd(),
                console.groupEnd())
              : console.error("Event in logEvent method not provided"));
        }
        requestTime(e) {
          var t, a;
          if (!(e.mediaSourceData instanceof t$)) return null;
          let i = String(e.data.meta.id),
            r =
              null === (t = e.mediaSourceData) || void 0 === t
                ? void 0
                : t.getFileInfoResponseTime,
            l =
              null === (a = e.mediaSourceData) || void 0 === a ? void 0 : a.url,
            s = null;
          return (
            "number" == typeof r &&
              l &&
              (s = {
                name: M.REQUEST_TIME,
                data: { trackId: i, urlType: F.GET_FILE_INFO, url: l, time: r },
              }),
            this.logEvent({ event: s, eventName: null == s ? void 0 : s.name }),
            s && this.transport.send(s),
            s
          );
        }
        wantPlayTrack(e) {
          let t = String(e.data.meta.id),
            a = Math.trunc(performance.now()),
            i = {
              name: M.WANT_PLAY_TRACK,
              data: {
                trackId: t,
                uuid: e.playId,
                expectedQuality: t1(this.mediaConfigController.quality.value),
              },
            };
          return (
            this.wantPlayTracksEvents.size > 0 &&
              this.sendTrackIsPlayingMissed(),
            this.wantPlayTracksEvents.set(e.playId, {
              time: a,
              event: i,
              trackId: t,
            }),
            this.logEvent({ event: i, eventName: null == i ? void 0 : i.name }),
            this.transport.send(i),
            i
          );
        }
        trackError(e, t) {
          let {
              codec: a,
              bitrate: i,
              expectedQuality: r,
            } = this.getEntityQualityInfo(t),
            l = null;
          return (
            e instanceof tc
              ? (l = {
                  name: M.TRACK_ERROR_PREPARE,
                  data: {
                    trackId: String(t.data.meta.id),
                    uuid: t.playId,
                    type: e.code === U.E_GET_MEDIA_SRC ? j.NETWORK : j.OTHER,
                    subType: (function (e) {
                      let t = B.OTHER;
                      if (e.cause instanceof tn.du)
                        switch (String(e.cause.statusCode)[0]) {
                          case "4":
                            t = B.BAD_RESPONSE_4XX;
                            break;
                          case "5":
                            t = B.BAD_RESPONSE_5XX;
                        }
                      return t;
                    })(e),
                    name: e.name,
                    code: e.code,
                    bitrate: i,
                    codec: a,
                    expectedQuality: r,
                  },
                })
              : e instanceof Z.YR && e.code === Z.Bq.PLAY
                ? (l = {
                    name: M.TRACK_ERROR_INITIAL_BUFFERING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      bitrate: i,
                      codec: a,
                      expectedQuality: r,
                      ...(e.cause instanceof DOMException
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                            causeName: e.cause.name,
                          }
                        : {
                            causeCode: -1,
                            causeMessage: "Unknown error message",
                            causeName: "Unknown error name",
                          }),
                    },
                  })
                : e instanceof Z.YR &&
                  e.code === Z.Bq.MEDIA_ELEMENT_ERROR &&
                  (l = {
                    name: M.TRACK_ERROR_PLAYING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      bitrate: i,
                      codec: a,
                      expectedQuality: r,
                      ...(e.cause instanceof MediaError
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                          }
                        : { causeCode: -1, causeMessage: "Unknown cause" }),
                    },
                  }),
            e instanceof Z.YR &&
              this.wantPlayTracksEvents.has(t.playId) &&
              (!l ||
                !("causeCode" in l.data) ||
                ("causeCode" in l.data &&
                  (null == l ? void 0 : l.data.causeCode) !== 20)) &&
              this.wantPlayTracksEvents.delete(t.playId),
            l && this.transport.send(l),
            this.logEvent({ event: l, eventName: null == l ? void 0 : l.name }),
            l
          );
        }
        trackIsBuffering(e) {
          let t = String(e.data.meta.id),
            { codec: a, bitrate: i } = this.getEntityQualityInfo(e),
            r = {
              name: M.TRACK_IS_BUFFERING,
              data: { trackId: t, uuid: e.playId, codec: a, bitrate: i },
            };
          return (
            this.transport.send(r),
            this.logEvent({ event: r, eventName: r.name }),
            r
          );
        }
        trackIsPlaying(e) {
          var t, a;
          let i = String(e.data.meta.id),
            r =
              this.wantPlayTracksEvents.has(e.playId) &&
              (null === (t = this.wantPlayTracksEvents.get(e.playId)) ||
              void 0 === t
                ? void 0
                : t.time),
            l = (function (e) {
              switch (e) {
                case tg.Zp.SET_INDEX:
                case tg.Zp.MOVE_BACKWARD:
                  return W.FROM_QUEUE;
                case tg.Zp.AUTO_MOVE_FORWARD:
                  return W.NEXT;
                case tg.Zp.MOVE_FORWARD:
                  return W.SKIPPED;
                default:
                  return W.OTHER;
              }
            })(
              null ===
                (a = this.addtionalInfoByPlayId.get(
                  this.lastAdditionalInfoKey,
                )) || void 0 === a
                ? void 0
                : a.entityChangeMethod,
            ),
            {
              codec: s,
              bitrate: n,
              expectedQuality: o,
            } = this.getEntityQualityInfo(e),
            d = null;
          return (
            "number" == typeof r &&
              ((d = {
                name: M.TRACK_IS_PLAYING,
                data: {
                  trackId: i,
                  time: Math.trunc(performance.now() - r),
                  uuid: e.playId,
                  codec: s,
                  bitrate: n,
                  expectedQuality: o,
                  extraTrackType: l,
                },
              }),
              this.addtionalInfoByPlayId.delete(this.lastAdditionalInfoKey),
              this.wantPlayTracksEvents.delete(e.playId),
              (this.lastAdditionalInfoKey = null)),
            d && this.transport.send(d),
            this.logEvent({ event: d, eventName: null == d ? void 0 : d.name }),
            d
          );
        }
        sendTrackIsPlayingMissed() {
          let [e, { trackId: t }] = Array.from(
              this.wantPlayTracksEvents.entries(),
            )[0],
            a = {
              name: M.TRACK_IS_PLAYING_MISSED,
              data: { trackId: t, uuid: e },
            };
          return (
            this.wantPlayTracksEvents.delete(e),
            this.transport.send(a),
            this.logEvent({ event: a, eventName: a.name }),
            a
          );
        }
        trackHasBeenChanged(e, t) {
          let { method: a } = t;
          this.addtionalInfoByPlayId.size && this.addtionalInfoByPlayId.clear(),
            (this.lastAdditionalInfoKey = e.playId),
            this.addtionalInfoByPlayId.set(e.playId, { entityChangeMethod: a });
        }
        constructor(e) {
          var t;
          (0, X._)(this, "mediaConfigController", void 0),
            (0, X._)(this, "wantPlayTracksEvents", new Map()),
            (0, X._)(this, "addtionalInfoByPlayId", new Map()),
            (0, X._)(this, "lastAdditionalInfoKey", null),
            (0, X._)(this, "enableDebugMode", void 0),
            (0, X._)(this, "transport", void 0),
            (this.enableDebugMode =
              null === (t = e.variables) || void 0 === t
                ? void 0
                : t.enableDebugMode),
            (this.mediaConfigController = e.mediaConfigController),
            (this.transport = e.transport);
        }
      }
      class t3 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.playerState.event.onChange(() => {
            if (a.state.playerState.event.value === Z.xg.WAITING) {
              let e = a.state.queueState.currentEntity.value;
              e && this.metricsEventsStore.trackIsBuffering(e.entity);
            }
          }),
            t.beforeEntityChange.tapPromise("MetricsPlugin", (e) => {
              let t = a.state.queueState.currentEntity.value;
              return (
                t && this.metricsEventsStore.trackHasBeenChanged(t.entity, e),
                Promise.resolve()
              );
            }),
            t.beforeEntityPlayingProcessStart.tapPromise(
              "MetricsPlugin",
              () => {
                let e = a.state.queueState.currentEntity.value;
                return (
                  e && this.metricsEventsStore.wantPlayTrack(e.entity),
                  Promise.resolve()
                );
              },
            ),
            t.afterError.tapPromise("MetricsPlugin", (e) => {
              let t = a.state.queueState.currentEntity.value;
              return (
                t && this.metricsEventsStore.trackError(e, t.entity),
                Promise.resolve()
              );
            }),
            t.afterMediaStartPlaying.tapPromise("MetricsPlugin", () => {
              let e = a.state.queueState.currentEntity.value;
              return (
                e && this.metricsEventsStore.trackIsPlaying(e.entity),
                Promise.resolve()
              );
            }),
            t.beforeMediaStartPlaying.tapPromise("MetricsPlugin", () => {
              let e = a.state.queueState.currentEntity.value;
              return (
                e && this.metricsEventsStore.requestTime(e.entity),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, X._)(this, "metricsEventsStore", void 0),
            (this.metricsEventsStore = new t4(e));
        }
      }
      function t7(e, t, a) {
        return (
          !(e instanceof es) &&
          !!e.isAvailable &&
          (null === e.mediaSourceData ||
            (!(
              "downloadInfoSource" !== e.mediaSourceData.type ||
              "error" in e.mediaSourceData.data ||
              th(e)
            ) &&
              (performance.now() - e.mediaSourceData.loadingTime > t ||
                (function (e) {
                  switch (e) {
                    case t0.n.LOSSLESS:
                    case t0.n.HQ:
                      return t5.n.HIGH_QUALITY;
                    case t0.n.NQ:
                      return t5.n.BALANCED;
                    case t0.n.LQ:
                  }
                  return t5.n.EFFICIENT;
                })(e.mediaSourceData.data.quality) !== a.quality.value)))
        );
      }
      class t6 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          this.variables.isMediaSourcePreloadEnabled &&
            t.beforeEntityPlayingProcessStart.tapPromise(
              "MediaSourcePreloadPlugin",
              () => {
                if (
                  !this.variables.isMediaSourcePreloadEnabled ||
                  (0, eq.x)(a.state.currentContext.value)
                )
                  return Promise.resolve();
                let {
                  queueState: { index: e, order: i, entityList: r },
                  currentContext: l,
                } = a.state;
                if ((0, e2.Q)(l.value)) return Promise.resolve();
                let s = a.getEntityByIndex({ index: e.value });
                return void 0 === s
                  ? Promise.resolve()
                  : t7(
                        s.entity,
                        this.config.mediaSourceTtlMs,
                        this.mediaConfigController,
                      )
                    ? new Promise((e) => {
                        this.getMediaSourceBatch(a)
                          .catch((e) => {
                            t.afterError.promise(e);
                          })
                          .finally(e);
                      })
                    : ((function (e) {
                        let {
                          windowSize: t,
                          contextEntityPairs: a,
                          index: i,
                          order: r,
                          mediaSourceTtlMs: l,
                          mediaConfigController: s,
                        } = e;
                        return r
                          .slice(i - t > 0 ? i - t : 0, i + t + 1)
                          .map((e) => a[e])
                          .some((e) => t7(e.entity, l, s));
                      })({
                        contextEntityPairs: r.value,
                        index: e.value,
                        order: i.value,
                        mediaSourceTtlMs: this.config.mediaSourceTtlMs,
                        mediaConfigController: this.mediaConfigController,
                        windowSize: this.config.checkForLoadWindowSize,
                      }) &&
                        this.getMediaSourceBatch(a).catch((e) => {
                          t.afterError.promise(e);
                        }),
                      Promise.resolve());
              },
            );
        }
        getMediaSourceBatch(e) {
          let {
              queueState: { index: t, order: a, entityList: i, repeat: r },
            } = e.state,
            l = (0, Z.U9)({
              index: t.value,
              contextEntityPairs: i.value,
              windowSize: this.config.loadWindowSize,
              needToLoadPredicate: (e) =>
                t7(
                  e.entity,
                  this.config.mediaSourceTtlMs,
                  this.mediaConfigController,
                ),
              order: a.value,
              repeat: r.value,
            }).map((e) => e.contextEntityPair.entity);
          return this.mediaProvider.getMediaSourceBatch({ entities: l });
        }
        constructor({
          mediaProvider: e,
          config: t,
          mediaConfigController: a,
          variables: i,
        }) {
          (0, X._)(this, "variables", void 0),
            (0, X._)(this, "mediaProvider", void 0),
            (0, X._)(this, "config", void 0),
            (0, X._)(this, "mediaConfigController", void 0),
            (this.variables =
              null != i ? i : { isMediaSourcePreloadEnabled: !1 }),
            (this.mediaProvider = e),
            (this.mediaConfigController = a),
            (this.config = t);
        }
      }
      class t2 {
        apply() {
          this.trailerPlayback.hooks.afterContextEnd.tapPromise(
            "TrailerPlugin",
            () => (
              this.trailerPlayback.restartContext({ playAfterRestart: !1 }),
              Promise.resolve()
            ),
          ),
            this.trailerPlayback.hooks.afterMediaPause.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPaused(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            ),
            this.trailerPlayback.hooks.afterMediaResume.tapPromise(
              "TrailerPlugin",
              () => (this.onTrailerPlaying(), Promise.resolve()),
            );
        }
        constructor({
          onTrailerPaused: e,
          onTrailerPlaying: t,
          playbackController: a,
          trailerPlaybackParams: i,
        }) {
          if (
            ((0, X._)(this, "onTrailerPaused", void 0),
            (0, X._)(this, "onTrailerPlaying", void 0),
            (0, X._)(this, "trailerPlayback", void 0),
            (this.onTrailerPaused = e),
            (this.onTrailerPlaying = t),
            a.createPlayback(i.id, {
              factory: i.factory,
              entityProvider: i.entityProvider,
              playbackConfig: i.playbackConfig,
              mediaPlayerParams: i.mediaPlayerParams,
            }),
            (this.trailerPlayback = a.getPlayback(i.id)),
            i.plugins)
          )
            for (let e of i.plugins)
              e.apply({
                playback: this.trailerPlayback,
                hooks: this.trailerPlayback.hooks,
              });
        }
      }
      var t9 = a(77282);
      (Y || (Y = {})).START = "start";
      class t8 {
        apply(e) {
          let { playback: t } = e;
          this.channel &&
            ((this.channel.onmessage = (e) => {
              let { type: a, id: i } = e.data;
              t.state.playerState.status.value === Z.FY.PLAYING &&
                a === Y.START &&
                i !== this.activeStreamId &&
                t.pause();
            }),
            t.state.playerState.status.onChange((e) => {
              if (e === Z.FY.PLAYING) {
                var t;
                null === (t = this.channel) ||
                  void 0 === t ||
                  t.postMessage({ type: Y.START, id: this.activeStreamId });
              }
            }));
        }
        constructor({ variables: e }) {
          (0, X._)(this, "channel", void 0),
            (0, X._)(this, "activeStreamId", void 0),
            (this.activeStreamId = (0, t9.Z)()),
            e.enableSingleTabPlayback &&
              (this.channel = new BroadcastChannel("ya_music_playback"));
        }
      }
      class ae {
        push(e) {
          this.callbacks.push(e);
        }
        exec() {
          let e = [];
          for (let t of this.callbacks)
            if (0 === e.length) e.push(t());
            else {
              let a = e[e.length - 1].then(t);
              e.push(a);
            }
          return Promise.allSettled(e).then(() => Promise.resolve());
        }
        constructor() {
          (0, X._)(this, "callbacks", []);
        }
      }
      let at = (e) => {
        switch (e) {
          case tq.zE.ONE:
            return Z.zq.ONE;
          case tq.zE.ALL:
            return Z.zq.CONTEXT;
          default:
            return Z.zq.NONE;
        }
      };
      class aa extends en.y {
        constructor(e, { code: t = "E_YNISON", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "YnisonException"),
            Object.setPrototypeOf(this, aa.prototype);
        }
      }
      let ai = (e, t) =>
          new aa("[YnisonException] ".concat(e), { cause: (0, tq.$L)(t) }),
        ar = (e) => {
          var t, a, i, r;
          let l =
              (null === (a = e.player_state) || void 0 === a
                ? void 0
                : null === (t = a.player_queue) || void 0 === t
                  ? void 0
                  : t.current_playable_index) || 0,
            s = ((null === (r = e.player_state) || void 0 === r
              ? void 0
              : null === (i = r.player_queue) || void 0 === i
                ? void 0
                : i.playable_list) || [])[l];
          return s ? { entityId: s.playable_id } : { index: 0 };
        },
        al = (e) => {
          let {
              playableList: t,
              getEntityData: a,
              restoredParams: { currentPlayableIndex: i } = {},
            } = e,
            r = t
              .filter((e) => {
                let { playable_type: t, playable_id: a } = e;
                return t === tq.jB.TRACK && a;
              })
              .map(a),
            l = "number" == typeof i && r[i];
          return l && (l.isRestored = !0), r;
        };
      function as(e) {
        return {
          type: Z.RX.Unloaded,
          meta: { id: e.playable_id, albumId: e.album_id_optional },
        };
      }
      function an(e) {
        var t, a;
        return {
          type: ee.A.VibeTrack,
          meta: { id: e.playable_id, albumId: e.album_id_optional },
          loadEntityMeta: !0,
          wasPlayed: !0,
          batchId:
            null !==
              (a =
                null === (t = e.track_info) || void 0 === t
                  ? void 0
                  : t.batch_id_optional) && void 0 !== a
              ? a
              : void 0,
        };
      }
      let ao = (e) => !isNaN(Number(e)) && Number(e) > 0,
        ad = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            r = (null == i ? void 0 : i.playable_list) || [];
          return (
            i.from_optional ||
            (null === (a = r[0]) || void 0 === a ? void 0 : a.from) ||
            "embedded-radio"
          );
        },
        au = (e) => {
          var t, a, i, r;
          let l =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            s = (null == l ? void 0 : l.playable_list) || [],
            n =
              null ===
                (r =
                  s[
                    null === (i = e.player_state) || void 0 === i
                      ? void 0
                      : null === (a = i.player_queue) || void 0 === a
                        ? void 0
                        : a.current_playable_index
                  ]) || void 0 === r
                ? void 0
                : r.playable_id;
          return n && s.length
            ? { type: eg.A.Various, from: ad(e), meta: { id: n } }
            : null;
        },
        ac = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return ao(i)
            ? { type: eg.A.Album, from: ad(e), meta: { id: i } }
            : au(e);
        },
        am = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return ao(i)
            ? { type: eg.A.Artist, from: ad(e), meta: { id: i } }
            : au(e);
        },
        ag = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            [r, l] =
              (null == i
                ? void 0
                : null === (a = i.entity_id) || void 0 === a
                  ? void 0
                  : a.split(" ")) || [];
          return r
            ? {
                type: eg.A.Generative,
                from: ad(e),
                meta: { id: r, stream: l ? { id: r, url: l } : void 0 },
              }
            : null;
        },
        ah = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id,
            r = ad(e),
            [l, s] = String(i).split(":");
          if (ao(l) && ao(s)) {
            let e = { uid: Number(l) };
            return {
              type: eg.A.Playlist,
              from: r,
              meta: { id: i, kind: Number(s), owner: e },
            };
          }
          return au(e);
        },
        ay = (e) => {
          var t, a, i, r, l;
          let s =
            null !==
              (l =
                null === (a = e.player_state) || void 0 === a
                  ? void 0
                  : null === (t = a.player_queue) || void 0 === t
                    ? void 0
                    : t.current_playable_index) && void 0 !== l
              ? l
              : 0;
          return (
            (null === (r = e.player_state) || void 0 === r
              ? void 0
              : null === (i = r.player_queue) || void 0 === i
                ? void 0
                : i.playable_list) || []
          ).slice(0, s + 1);
        },
        av = (e) => {
          var t, a, i, r, l;
          let s =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            n = ay(e),
            o = null == s ? void 0 : s.entity_id,
            d =
              null === (l = s.queue) || void 0 === l
                ? void 0
                : null === (r = l.wave_queue) || void 0 === r
                  ? void 0
                  : null === (i = r.entity_options) || void 0 === i
                    ? void 0
                    : null === (a = i.wave_entity_optional) || void 0 === a
                      ? void 0
                      : a.session_id,
            u = n.map((e) =>
              e.album_id_optional
                ? "".concat(e.playable_id, ":").concat(e.album_id_optional)
                : e.playable_id,
            );
          return "string" == typeof o || d
            ? {
                type: eg.A.Vibe,
                from: ad(e),
                seeds: String(o).split(","),
                includeTracksInResponse: !0,
                cloneSessionId: d,
                meta: { id: o },
                queue: u,
                interactive: !1,
              }
            : au(e);
        },
        ap = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_type;
          if (!i) return null;
          switch (i) {
            case tq.zh.ALBUM:
              return ac(e);
            case tq.zh.ARTIST:
              return am(e);
            case tq.zh.PLAYLIST:
              return ah(e);
            case tq.zh.RADIO:
              return av(e);
            case tq.zh.GENERATIVE:
              return ag(e);
            case tq.zh.VARIOUS:
              return au(e);
            default:
              return null;
          }
        };
      class aS {
        onYnisonStateUpdated(e) {
          [
            Z.FY.ENDED,
            Z.FY.IDLE,
            Z.FY.PAUSED,
            Z.FY.STOPPED,
            Z.FY.MEDIA_ELEMENT_ERROR,
          ].includes(this.playback.state.playerState.status.value) &&
            this.variables.shouldApplyState &&
            this.applyYnisonDiff(e);
        }
        applyYnisonDiff(e) {
          var t, a, i, r, l, s;
          let n = new ae();
          if (
            ((s = e.diff).player_state &&
              s.player_state.player_queue &&
              (s.player_state.player_queue.current_playable_index ||
                s.player_state.player_queue.playable_list ||
                s.player_state.player_queue.entity_id) &&
              n.push(() => this.changeContext(e.state)),
            null === (a = e.diff.player_state) || void 0 === a
              ? void 0
              : null === (t = a.player_queue) || void 0 === t
                ? void 0
                : t.shuffle_optional)
          ) {
            let t = e.diff.player_state.player_queue.shuffle_optional;
            n.push(() => this.changeShuffle(t));
          }
          if (
            null === (r = e.diff.player_state) || void 0 === r
              ? void 0
              : null === (i = r.player_queue) || void 0 === i
                ? void 0
                : i.options
          ) {
            let t = e.diff.player_state.player_queue.options;
            n.push(() => this.changeOptions(t));
          }
          if (
            null === (l = e.diff.player_state) || void 0 === l
              ? void 0
              : l.status
          ) {
            let t = e.diff.player_state.status;
            n.push(() => this.changeStatus(t));
          }
          if (e?.devices?.[0]?.volume)
            n.push(() => this.changeVolume(e?.devices?.[0]?.volume));
          return n.exec();
        }
        changeVolume(e) {
          let t = Math.max(Math.min(e, 1), 0);
          return (
            Number.isNaN(a) ||
            this.playback.setVolume(t).then(() => Promise.resolve())
          );
        }
        changeOptions(e) {
          let t = at(e.repeat_mode);
          return this.playback.setRepeatMode(t), Promise.resolve();
        }
        changeShuffle(e) {
          let t = !!(
            Array.isArray(e.playable_indices) && e.playable_indices.length
          );
          return this.playback.setShuffle(t), Promise.resolve();
        }
        changeStatus(e) {
          let t = new ae(),
            a = Number(e.playback_speed),
            i = Number(e.progress_ms) / 1e3,
            isPaused = window?.ENABLE_YNISON_REMOTE_CONTROL
              ? (e.paused ?? NaN)
              : NaN;
          return (
            Number.isNaN(a) ||
              t.push(() =>
                this.playback.setSpeed(a).then(() => Promise.resolve()),
              ),
            Number.isNaN(i) ||
              t.push(() => {
                if (
                  this.playback.state.playerState.status.value ===
                    Z.FY.PLAYING ||
                  this.playback.state.playerState.status.value === Z.FY.PAUSED
                )
                  return this.playback
                    .setProgress(i)
                    .then(() => Promise.resolve());
                let {
                  currentEntity: { value: e },
                } = this.playback.state.queueState;
                return e && (e.entity.startPosition = i), Promise.resolve();
              }),
            Number.isNaN(isPaused) ||
              t.push(() => {
                isPaused
                  ? this.playback.state.playerState.status.value ===
                      Z.FY.PLAYING &&
                    this.playback.pause().then(() => Promise.resolve())
                  : this.playback.state.playerState.status.value ===
                      Z.FY.PAUSED &&
                    this.playback.resume().then(() => Promise.resolve());
              }),
            t.exec()
          );
        }
        changeContext(e) {
          let t = this.getContextParams(e);
          return t
            ? this.playback
                .setContext(t)
                .then(() => {
                  this.playback.stop();
                })
                .catch((e) => {
                  this.playback.hooks.afterError.promise(
                    ai("PlaybackSetContextError", e),
                  );
                })
            : Promise.resolve();
        }
        getContextParams(e) {
          try {
            var t, a;
            let i = ap(e);
            if (!i) return null;
            let r = this.factory.createContext({ data: i }),
              l =
                null === (a = e.player_state) || void 0 === a
                  ? void 0
                  : null === (t = a.player_queue) || void 0 === t
                    ? void 0
                    : t.playable_list,
              s = ar(e);
            if ((0, eq.x)(r)) {
              let t = this.variables.enableLimitTracksFromYnison ? ay(e) : l,
                a = al({
                  playableList: t,
                  getEntityData: an,
                  restoredParams: {
                    currentPlayableIndex:
                      e.player_state.player_queue.current_playable_index,
                  },
                });
              return {
                context: r,
                entitiesData: a.length ? a : void 0,
                loadContextMeta: !0,
                queueParams: s,
              };
            }
            let n = al({
              playableList: l,
              getEntityData: as,
              restoredParams: {
                currentPlayableIndex:
                  e.player_state.player_queue.current_playable_index,
              },
            });
            if ((0, ty.d)(r))
              return {
                context: r,
                entitiesData: n,
                loadContextMeta: !1,
                queueParams: s,
              };
            if ((0, e2.Q)(r)) return { context: r, loadContextMeta: !0 };
            if (200 === l.length)
              return { context: r, loadContextMeta: !0, queueParams: s };
            return {
              context: r,
              entitiesData: n,
              loadContextMeta: !0,
              queueParams: s,
            };
          } catch (e) {
            return (
              this.playback.hooks.afterError.promise(
                ai("GetContextParamsError", e),
              ),
              null
            );
          }
        }
        constructor({
          factory: e,
          playback: t,
          ynisonStateController: a,
          variables: i,
        }) {
          (0, X._)(this, "factory", void 0),
            (0, X._)(this, "playback", void 0),
            (0, X._)(this, "variables", void 0),
            (this.factory = e),
            (this.playback = t),
            (this.variables = i),
            a.on(
              tq.x4.UPDATED,
              this.onYnisonStateUpdated.bind(this),
              "YnisonPlugin",
            ),
            this.onYnisonStateUpdated(a.fullState);
        }
      }
      let aE = (e) => {
          var t, a, i, r, l, s, n, o, d, u;
          switch (
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.type
          ) {
            case ee.A.Music:
            case ee.A.VibeTrack:
              return (
                null === (a = e.state.currentContext.value) || void 0 === a
                  ? void 0
                  : a.data.meta.id
              )
                ? String(
                    null === (i = e.state.currentContext.value) || void 0 === i
                      ? void 0
                      : i.data.meta.id,
                  )
                : "";
            case ee.A.Generative:
              return (
                null === (r = e.state.currentContext.value) || void 0 === r
                  ? void 0
                  : r.data.meta.id
              )
                ? ""
                    .concat(
                      String(
                        null === (l = e.state.currentContext.value) ||
                          void 0 === l
                          ? void 0
                          : l.data.meta.id,
                      ),
                      " ",
                    )
                    .concat(
                      null !==
                        (o =
                          null ===
                            (n = e.state.queueState.currentEntity.value) ||
                          void 0 === n
                            ? void 0
                            : null === (s = n.entity.data.meta.stream) ||
                                void 0 === s
                              ? void 0
                              : s.url) && void 0 !== o
                        ? o
                        : "",
                    )
                : "";
            default:
              return (
                null === (d = e.state.currentContext.value) || void 0 === d
                  ? void 0
                  : d.data.meta.id
              )
                ? String(
                    null === (u = e.state.currentContext.value) || void 0 === u
                      ? void 0
                      : u.data.meta.id,
                  )
                : "";
          }
        },
        ab = (e) => {
          switch (e) {
            case eg.A.Album:
              return tq.zh.ALBUM;
            case eg.A.Playlist:
              return tq.zh.PLAYLIST;
            case eg.A.Artist:
              return tq.zh.ARTIST;
            case eg.A.Vibe:
              return tq.zh.RADIO;
            case eg.A.Various:
              return tq.zh.VARIOUS;
            case eg.A.Generative:
              return tq.zh.GENERATIVE;
            default:
              return tq.zh.VARIOUS;
          }
        },
        af = (e) => {
          switch (e) {
            case Z.zq.NONE:
              return tq.zE.NONE;
            case Z.zq.ONE:
              return tq.zE.ONE;
            case Z.zq.CONTEXT:
              return tq.zE.ALL;
            default:
              return tq.zE.NONE;
          }
        },
        aP = (e) => {
          var t, a;
          return (0, e2.Q)(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.context,
          )
            ? {
                entity_id: aE(e),
                entity_type: ab(
                  null === (a = e.state.currentContext.value) || void 0 === a
                    ? void 0
                    : a.data.type,
                ),
              }
            : null;
        },
        aI = (e) => {
          var t, a;
          return (0, eq.x)(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.context,
          ) &&
            (null === (a = e.state.queueState.currentEntity.value) ||
            void 0 === a
              ? void 0
              : a.context.data.meta.session)
            ? {
                radio_options: {
                  session_id:
                    e.state.queueState.currentEntity.value.context.data.meta
                      .session.radioSessionId,
                },
              }
            : null;
        },
        ak = (e) =>
          "object" == typeof e &&
          e &&
          "durationMs" in e &&
          "number" == typeof e.durationMs,
        aC = (e) => {
          var t, a, i;
          return ak(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.entity.data.meta,
          ) &&
            null !==
              (i =
                null === (a = e.state.queueState.currentEntity.value) ||
                void 0 === a
                  ? void 0
                  : a.entity.data.meta.durationMs) &&
            void 0 !== i
            ? i
            : 0;
        },
        aT = (e) => 1e3 * Math.floor(e),
        a_ = (e) => {
          var t;
          let a = aT(e.state.playerState.progress.value.position),
            i = aC(e);
          return (null === (t = e.state.queueState.currentEntity.value) ||
          void 0 === t
            ? void 0
            : t.context.data.type) === eg.A.Generative
            ? 0
            : a < i
              ? a
              : 0;
        },
        aN = function (e) {
          var t, a, i, r, l, s, n, o, d, u, c, m;
          let { entity: g } = e,
            h =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          switch (g.data.type) {
            case ee.A.Music:
              return {
                album_id_optional:
                  "number" ==
                  typeof (null === (a = g.data.meta.albums) || void 0 === a
                    ? void 0
                    : null === (t = a[0]) || void 0 === t
                      ? void 0
                      : t.id)
                    ? String(
                        null === (i = g.data.meta.albums) || void 0 === i
                          ? void 0
                          : i[0].id,
                      )
                    : null,
                from: h,
                playable_id: String(g.data.meta.id),
                playable_type: tq.jB.TRACK,
                title:
                  null !== (r = g.data.meta.title) && void 0 !== r ? r : "",
                cover_url_optional:
                  null !== (l = g.data.meta.coverUri) && void 0 !== l
                    ? l
                    : null,
              };
            case ee.A.Generative:
              return {
                album_id_optional: null,
                from: h,
                playable_id: "",
                playable_type: tq.jB.INFINITE,
                title:
                  null !== (s = g.data.meta.title) && void 0 !== s ? s : "",
                cover_url_optional: null,
              };
            case ee.A.VibeTrack:
              return {
                album_id_optional:
                  "number" ==
                  typeof (null === (o = g.data.meta.albums) || void 0 === o
                    ? void 0
                    : null === (n = o[0]) || void 0 === n
                      ? void 0
                      : n.id)
                    ? String(
                        null === (d = g.data.meta.albums) || void 0 === d
                          ? void 0
                          : d[0].id,
                      )
                    : null,
                from: h,
                playable_id: String(g.data.meta.id),
                playable_type: tq.jB.TRACK,
                title:
                  null !== (u = g.data.meta.title) && void 0 !== u ? u : "",
                cover_url_optional:
                  null !== (c = g.data.meta.coverUri) && void 0 !== c
                    ? c
                    : null,
                track_info: {
                  batch_id_optional:
                    null !== (m = g.data.batchId) && void 0 !== m ? m : null,
                  track_source_key: 0,
                },
              };
            default:
              return {
                album_id_optional: null,
                from: h,
                playable_id: String(g.data.meta.id),
                playable_type: tq.jB.TRACK,
                title: "",
                cover_url_optional: null,
              };
          }
        };
      function aA(e) {
        return e.entity.hidden;
      }
      class aD {
        subscribeOnPlayerEvents() {
          let e = this.playback.state.playerState.status.onChange((e) => {
              switch (e) {
                case Z.FY.PLAYING:
                case Z.FY.PAUSED:
                  this.updateYnisonState();
              }
            }),
            t = this.playback.state.playerState.event.onChange((e) => {
              e === Z.xg.SET_PROGRESS && this.updateYnisonState();
            }),
            a = this.playback.state.playerState.speed.onChange(() => {
              this.updateYnisonState();
            }),
            i = this.playback.state.queueState.currentEntity.onChange(() => {
              this.updateYnisonState();
            }),
            r = this.playback.state.queueState.entityList.onChange(() => {
              this.updateYnisonState();
            }),
            l = this.playback.state.queueState.index.onChange(() => {
              this.updateYnisonState();
            }),
            s = this.playback.state.queueState.order.onChange(() => {
              this.updateYnisonState();
            }),
            n = this.playback.state.queueState.repeat.onChange(() => {
              this.updateYnisonState();
            }),
            o = this.playback.state.queueState.shuffle.onChange(() => {
              this.updateYnisonState();
            });
          this.unsubscribeFromPlayerEvents = () => {
            e(), t(), i(), r(), l(), s(), n(), o(), a();
          };
        }
        updateYnisonState() {
          let e = (function (e) {
            var t, a, i;
            let {
                playback: r,
                ynisonStateController: l,
                deviceConfig: s,
                variables: n,
              } = e,
              {
                devices: o,
                active_device_id_optional: d,
                player_state: { player_queue_inject_optional: u },
              } = l.currentState,
              c = (function (e, t) {
                let {
                    order: { value: a },
                    index: { value: i },
                    entityList: r,
                  } = e.state.queueState,
                  l = a[i];
                if ("number" != typeof l) return -1;
                let s = 0;
                if (t.enableSendLimitedEntityListToYnison)
                  for (let e = 0; e < a.length; e++) {
                    var n;
                    let t = a[e];
                    "number" == typeof t &&
                      t >= 0 &&
                      t < l &&
                      (null === (n = r.value[t]) || void 0 === n
                        ? void 0
                        : n.entity.hidden) &&
                      s++;
                  }
                return l - s;
              })(r, n),
              { playableList: m, newIndexOrderMap: g } = (function (e, t) {
                let a = e.state.queueState.index.value,
                  i = (function (e, t) {
                    let a = new Map(),
                      i = 0;
                    for (let r = 0; r < e.length; r++) {
                      let l = e[r];
                      l && !t(l) && (a.set(r, i), i++);
                    }
                    return a;
                  })(e.state.queueState.entityList.value, aA),
                  r = e.state.queueState.entityList.value;
                return (
                  t.enableSendLimitedEntityListToYnison &&
                    (r = r.filter((e) => !aA(e))),
                  (0, eq.x)(e.state.currentContext.value) &&
                    t.enableSendLimitedEntityListToYnison &&
                    (r = eA(e.state.queueState.entityList.value, a)),
                  {
                    playableList: r.map((t) => {
                      var a;
                      return aN(
                        t,
                        null === (a = e.state.currentContext.value) ||
                          void 0 === a
                          ? void 0
                          : a.from,
                      );
                    }),
                    newIndexOrderMap: i,
                  }
                );
              })(r, n),
              {
                playableIndices: h,
                currentPlayableIndex: y,
                playableList: v,
              } = (function (e) {
                let {
                    playableList: t,
                    currentPlayableIndex: a,
                    playback: i,
                    newIndexOrderMap: r,
                    variables: l,
                  } = e,
                  s = i.state.queueState.order.value;
                if (
                  (l.enableSendLimitedEntityListToYnison &&
                    (s = s.filter((e) => r.has(e)).map((e) => r.get(e))),
                  t.length <= 200)
                )
                  return {
                    playableList: t,
                    currentPlayableIndex: a,
                    playableIndices: s,
                  };
                if (i.state.queueState.shuffle.value) {
                  let e = s.indexOf(a),
                    i = s.slice(e, 200),
                    r = [...i].sort((e, t) => e - t).map((e) => t[e]),
                    l = new Map(),
                    n = i.map((e) => {
                      var a;
                      let i = t[e].playable_id,
                        s = null !== (a = l.get(i)) && void 0 !== a ? a : -1,
                        n = r.findIndex((e, t) => t > s && e.playable_id === i);
                      return l.set(i, n), n;
                    }),
                    o = r.findIndex((e) => e.playable_id === t[a].playable_id);
                  return {
                    playableList: r,
                    currentPlayableIndex: o,
                    playableIndices: n,
                  };
                }
                let n = t[a].playable_id,
                  o = Math.max(0, a - 100);
                o + 200 > t.length && (o = t.length - 200);
                let d = t.slice(o, o + 200),
                  u = d.findIndex((e) => e.playable_id === n);
                return {
                  playableList: d,
                  currentPlayableIndex: u,
                  playableIndices: s,
                };
              })({
                playableList: m,
                currentPlayableIndex: c,
                playback: r,
                newIndexOrderMap: g,
                variables: n,
              });
            return {
              active_device_id_optional: d,
              devices: o,
              player_state: {
                player_queue_inject_optional: u,
                status: {
                  duration_ms: aC(r),
                  progress_ms: a_(r),
                  paused: !0,
                  playback_speed: r.state.playerState.speed.value,
                  version: (0, tq.Cs)(s.device_id, 0),
                },
                player_queue: {
                  entity_id: aE(r),
                  entity_type: ab(
                    null === (t = r.state.currentContext.value) || void 0 === t
                      ? void 0
                      : t.data.type,
                  ),
                  current_playable_index: y,
                  playable_list: v,
                  shuffle_optional: r.state.queueState.shuffle.value
                    ? { playable_indices: h }
                    : null,
                  options: { repeat_mode: af(r.state.queueState.repeat.value) },
                  entity_context: tq.P2.BASED_ON_ENTITY_BY_DEFAULT,
                  from_optional:
                    null !==
                      (i =
                        null === (a = r.state.currentContext.value) ||
                        void 0 === a
                          ? void 0
                          : a.from) && void 0 !== i
                      ? i
                      : null,
                  initial_entity_optional: aP(r),
                  adding_options_optional: aI(r),
                  queue: null,
                  version: (0, tq.Cs)(s.device_id, 0),
                },
              },
            };
          })({
            playback: this.playback,
            ynisonStateController: this.ynisonStateController,
            deviceConfig: this.deviceConfig,
            variables: this.variables,
          });
          this.ynisonStateController.updateState({
            newState: e,
            skipVersionCompare: !0,
            skipDeviceActivityCheck: !0,
            trigger: "YnisonPlugin",
          });
        }
        constructor({
          playback: e,
          ynisonStateController: t,
          deviceConfig: a,
          variables: i,
        }) {
          (0, X._)(this, "unsubscribeFromPlayerEvents", void 0),
            (0, X._)(this, "playback", void 0),
            (0, X._)(this, "ynisonStateController", void 0),
            (0, X._)(this, "deviceConfig", void 0),
            (0, X._)(this, "variables", void 0),
            (this.playback = e),
            (this.ynisonStateController = t),
            (this.deviceConfig = a),
            (this.variables = i),
            this.subscribeOnPlayerEvents(),
            this.updateYnisonState();
        }
      }
      class aL {
        apply(e) {
          let { playback: t, hooks: a } = e;
          new aS({
            playback: t,
            factory: this.factory,
            ynisonStateController: this.ynisonStateController,
            variables: this.variables,
          }),
            new aD({
              playback: t,
              ynisonStateController: this.ynisonStateController,
              deviceConfig: this.deviceConfig,
              variables: this.variables,
            }),
            a.beforeEntityChange.tapPromise("YnisonPlugin", () => {
              let {
                currentEntity: { value: e },
              } = t.state.queueState;
              return e && (e.entity.startPosition = null), Promise.resolve();
            });
        }
        constructor({
          factory: e,
          deviceConfig: t,
          ynisonStateController: a,
          variables: i,
        }) {
          (0, X._)(this, "factory", void 0),
            (0, X._)(this, "deviceConfig", void 0),
            (0, X._)(this, "ynisonStateController", void 0),
            (0, X._)(this, "variables", void 0),
            (this.factory = e),
            (this.deviceConfig = t),
            (this.ynisonStateController = a),
            (this.variables = i);
        }
      }
      let aR = [eg.A.Album, eg.A.Artist, eg.A.Playlist, eg.A.Various],
        ax = (e, t, a) => {
          var i;
          let r =
            null === (i = t.state.currentContext.value) || void 0 === i
              ? void 0
              : i.data;
          if (!r) return "";
          let l = e,
            s = t.state.queueState.entityList.value.length || 0;
          return (
            l === eg.A.Various && 1 === s && (l = "track"),
            e === eg.A.Various &&
              "overrideContextType" in r &&
              r.overrideContextType &&
              (l = r.overrideContextType),
            "".concat(a, "-radio-").concat(l, "-autoflow")
          );
        },
        aw = (e, t) => {
          var a, i, r, l;
          let s =
            null === (a = t.state.currentContext.value) || void 0 === a
              ? void 0
              : a.data;
          if (s) {
            if (e === eg.A.Album) return ["album:".concat(s.meta.id)];
            if (e === eg.A.Artist) return ["artist:".concat(s.meta.id)];
            if (
              e === eg.A.Playlist &&
              "owner" in s.meta &&
              (null === (i = s.meta.owner) || void 0 === i ? void 0 : i.uid) &&
              "kind" in s.meta &&
              s.meta.kind
            )
              return [
                "playlist:"
                  .concat(
                    null === (r = s.meta.owner) || void 0 === r
                      ? void 0
                      : r.uid,
                    "_",
                  )
                  .concat(s.meta.kind),
              ];
            if (e === eg.A.Various) {
              if ("overrideAutoflowSeeds" in s && s.overrideAutoflowSeeds)
                return s.overrideAutoflowSeeds;
              let e =
                null === (l = t.state.queueState.currentEntity.value) ||
                void 0 === l
                  ? void 0
                  : l.entity.data.meta.id;
              return ["track:".concat(e)];
            }
          }
        };
      class aG {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.afterContextEnd.tapPromise("AutoflowPlugin", () => {
            var e, a, i;
            if (!this.variables.enabled) return Promise.resolve();
            let r =
              null === (e = t.state.currentContext.value) || void 0 === e
                ? void 0
                : e.data.type;
            return (
              (null === (a = t.state.currentContext.value) || void 0 === a
                ? void 0
                : a.data) &&
                "enableVariousAutoFlow" in t.state.currentContext.value.data &&
                (null === (i = t.state.currentContext.value) || void 0 === i
                  ? void 0
                  : i.data.enableVariousAutoFlow) &&
                (r = eg.A.Various),
              r && aR.includes(r) && this.playAutoflow(t),
              Promise.resolve()
            );
          });
        }
        playAutoflow(e) {
          if (!(window.ENABLE_ENDLESS_MUSIC?.() ?? true)) return;
          var t, a, i;
          let r =
            null === (t = e.state.currentContext.value) || void 0 === t
              ? void 0
              : t.data.type;
          (null === (a = e.state.currentContext.value) || void 0 === a
            ? void 0
            : a.data) &&
            "enableVariousAutoFlow" in e.state.currentContext.value.data &&
            (null === (i = e.state.currentContext.value) || void 0 === i
              ? void 0
              : i.data.enableVariousAutoFlow) &&
            (r = eg.A.Various);
          let l = aw(r, e),
            s = e.state.currentContext.value,
            n = Object.create(null != s ? s : null);
          if (!(r && l)) return;
          let o = this.factory.createContext({
            data: {
              type: eg.A.Vibe,
              meta: { id: (0, eL.$)(l) },
              seeds: l,
              from: ax(r, e, this.platform),
              includeTracksInResponse: !0,
              parentContext: n,
              interactive: !1,
            },
          });
          e.playContext({ context: o, loadContextMeta: !0 });
        }
        constructor({ platform: e, factory: t, variables: a }) {
          (0, X._)(this, "platform", void 0),
            (0, X._)(this, "factory", void 0),
            (0, X._)(this, "variables", void 0),
            (this.platform = e),
            (this.factory = t),
            (this.variables = a);
        }
      }
      class aV {
        apply(e) {
          let { playback: t, hooks: a } = e;
          this.telemetry.createTelemetry(t),
            this.telemetry.setStaticParams(
              {
                labels: { from: this.telemetry.from },
                puid: this.puid ? String(this.puid) : void 0,
                yaspVersion: this.yaspVersion,
              },
              !0,
            ),
            t.state.playerState.status.onChange(() => {
              this.telemetry.setPlayingState(t.state.playerState);
            }),
            t.state.playerState.event.onChange((e) => {
              e &&
                e !== Z.xg.UPDATING_PROGRESS &&
                this.telemetry.logEvent({ name: e });
            }),
            a.afterError.tapPromise(
              "TelemetryPlugin",
              (e) => (
                e instanceof Z.YR &&
                  this.telemetry.logError({ error: { ...e, isFatal: !1 } }),
                Promise.resolve()
              ),
            ),
            a.beforeMediaStartPlaying.tapPromise(
              "TelemetryPlugin",
              () => (this.beforeMediaHandler(t), Promise.resolve()),
            ),
            a.beforeMediaReload.tapPromise(
              "TelemetryPlugin",
              () => (this.beforeMediaHandler(t), Promise.resolve()),
            );
        }
        beforeMediaHandler(e) {
          let { value: t } = e.state.queueState.currentEntity;
          if (!t || th(t.entity)) return;
          let { mediaSourceData: a } = t.entity;
          a && "vsid" in a && (a.vsid = this.telemetry.vsid),
            a &&
              "sourceIndex" in a &&
              (a.sourceIndex = this.telemetry.onBeforeSetSource());
          let i = (function (e) {
            let { mediaSourceData: t } = e.entity;
            if (!t) return;
            let { data: a } = t;
            return { streamUrl: t.src, ...a };
          })(t);
          i &&
            (this.telemetry.setStaticParams(
              {
                labels: { from: this.telemetry.from },
                puid: this.puid ? String(this.puid) : void 0,
                yaspVersion: this.yaspVersion,
                ...i,
              },
              !0,
            ),
            this.telemetry.onSetSource(i));
        }
        constructor({ telemetry: e, puid: t, yaspVersion: a }) {
          (0, X._)(this, "telemetry", void 0),
            (0, X._)(this, "puid", void 0),
            (0, X._)(this, "yaspVersion", void 0),
            (this.telemetry = e),
            (this.puid = t),
            (this.yaspVersion = a);
        }
      }
      class aO {
        setQuality(e) {
          switch (e) {
            case t5.n.HIGH_QUALITY:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = t5.n.HIGH_QUALITY);
              break;
            case t5.n.BALANCED:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = t5.n.BALANCED);
              break;
            case t5.n.EFFICIENT:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = t5.n.EFFICIENT);
              break;
            case t5.n.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = t5.n.PREVIEW);
          }
        }
        constructor(e) {
          (0, X._)(this, "qualityConfig", {
            lossless: new ey.wi(!1),
            hq: new ey.wi(!0),
            nq: new ey.wi(!0),
            lq: new ey.wi(!0),
            preview: new ey.wi(!0),
            smart_preview: new ey.wi(!1),
          }),
            (0, X._)(this, "quality", new ey.wi(t5.n.BALANCED)),
            this.setQuality(e);
        }
      }
      class aM {
        get src() {
          let e = this.getQueryParamsString();
          return e ? "".concat(this.data.url).concat(e) : this.data.url;
        }
        getQueryParamsString() {
          return tZ(
            new Map([
              ["vsid", this.vsid],
              ["source_index", String(this.sourceIndex)],
            ]),
          );
        }
        constructor(e) {
          (0, X._)(this, "type", "generativeSource"),
            (0, X._)(this, "data", void 0),
            (0, X._)(this, "vsid", void 0),
            (0, X._)(this, "sourceIndex", void 0),
            (0, X._)(this, "getFileInfoResponseTime", void 0),
            (0, X._)(this, "url", void 0),
            (this.data = e.data),
            (this.vsid = e.vsid),
            (this.sourceIndex = e.sourceIndex);
        }
      }
      class aF extends tc {
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, X._)(this, "name", "GenerativeMediaProviderException"),
            Object.setPrototypeOf(this, aF.prototype);
        }
      }
      class aU {
        getMediaSource(e) {
          if (tM(e.entity)) {
            var t;
            if (
              null === (t = e.entity.data.meta.stream) || void 0 === t
                ? void 0
                : t.url
            ) {
              let t = new aM({ data: e.entity.data.meta.stream });
              return (e.entity.mediaSourceData = t), Promise.resolve(t);
            }
            return Promise.reject(
              new aF("Failed to create generative src link", {
                code: U.E_GET_MEDIA_SRC,
              }),
            );
          }
          return Promise.reject(
            new aF("Provided entity is not generative entity", {
              code: U.E_UNSUITABLE_ENTITY_TYPE,
            }),
          );
        }
      }
      var aj = a(85392),
        aB = a(17073),
        aq = a(3204);
      function aW(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      class aY {
        getPreloadedFileInfo(e) {
          let { entity: t, disableCache: a = !1 } = e;
          if (
            !(a || t7(t, this.mediaSourceTtlMs, this.mediaConfigController)) &&
            t.mediaSourceData &&
            "downloadInfoSource" === t.mediaSourceData.type
          )
            return t.mediaSourceData.data;
        }
        getFileInfoFromResource(e) {
          let { trackId: t, quality: a, codecs: i, transports: r } = e,
            l = (0, aj.I)(),
            s = i.join(""),
            n = r.join(""),
            o = "".concat(l).concat(t).concat(a).concat(s).concat(n);
          return new Promise((e, n) => {
            (0, aj.U)({ data: o, secretKey: this.secretKey })
              .then((o) => {
                this.resource
                  .getFileInfo({
                    tsInSeconds: l,
                    trackId: t,
                    quality: a,
                    codecs: i,
                    transports: r,
                    sign: o,
                    fromPromoLanding: this.variables.fromPromoLanding,
                  })
                  .then((t) => {
                    e({
                      downloadInfo: t.downloadInfo,
                      responseTime: t.responseTime,
                      url: t.url,
                    });
                  })
                  .catch((e) => {
                    n(
                      new tm("Error in get-file-info request", {
                        code: U.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: t,
                          quality: a,
                          codecs: s,
                          causeAsObject: aW(e),
                        },
                      }),
                    );
                  });
              })
              .catch((e) => {
                n(
                  new tm("Error in creating sign for get-file-info request", {
                    code: U.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: t,
                      quality: a,
                      codecs: s,
                      causeAsObject: aW(e),
                    },
                  }),
                );
              });
          });
        }
        getFileInfo(e) {
          let {
            entity: t,
            disableCache: a = !1,
            codecs: i,
            quality: r,
            transports: l,
          } = e;
          if (this.variables.isMediaSourcePreloadEnabled)
            try {
              let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
              if (e) return Promise.resolve({ downloadInfo: e });
            } catch (e) {
              return Promise.reject(e);
            }
          return this.getFileInfoFromResource({
            trackId: t.data.meta.id,
            quality: r,
            codecs: i,
            transports: l,
          });
        }
        getMediaSource(e) {
          let { entity: t, disableCache: a = !1 } = e,
            i = (0, aB.E)({
              productQuality: this.mediaConfigController.quality.value,
              entity: t,
            }),
            r = (0, eK.Y)(t) ? tQ.J.RAW : this.transport;
          return (
            (t.expectedQuality = i),
            this.getFileInfo({
              entity: t,
              disableCache: a,
              quality: i,
              transports: [r],
              codecs: this.codecs,
            }).then((e) => {
              let { downloadInfo: r, responseTime: l, url: s } = e;
              if (
                !("error" in r) &&
                !aq.o.includes(r.codec) &&
                r.transport === tQ.J.ENCRAW
              )
                return (
                  (t.mediaSourceData = null),
                  this.getFileInfo({
                    entity: t,
                    disableCache: a,
                    quality: i,
                    transports: [tQ.J.RAW],
                    codecs: this.codecs,
                  })
                    .then((e) => {
                      let { downloadInfo: a, responseTime: r, url: l } = e,
                        s = this.createMediaSource({
                          downloadInfo: a,
                          trackId: t.data.meta.id,
                          quality: i,
                          codecs: this.codecs,
                          getFileInfoResponseTime: r,
                          getFileInfoUrl: l,
                        });
                      return (
                        (t.mediaSourceData = s), (t.expectedQuality = i), s
                      );
                    })
                    .catch((e) => {
                      let a = this.createMediaSource({
                        downloadInfo: r,
                        trackId: t.data.meta.id,
                        quality: i,
                        codecs: this.codecs,
                        getFileInfoResponseTime: l,
                      });
                      throw (
                        ((t.mediaSourceData = a),
                        new tm("Error in get-file-info retry enclaw request", {
                          code: U.E_GET_MEDIA_SRC,
                          cause: e,
                          data: {
                            trackId: t.data.meta.id,
                            quality: i,
                            codecs: this.codecs.join(""),
                            causeAsObject: aW(e),
                          },
                        }))
                      );
                    })
                );
              let n = this.createMediaSource({
                downloadInfo: r,
                trackId: t.data.meta.id,
                quality: i,
                codecs: this.codecs,
                getFileInfoResponseTime: l,
                getFileInfoUrl: s,
              });
              return (t.mediaSourceData = n), n;
            })
          );
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e,
            a = (0, aj.I)(),
            i = (0, aB.E)({
              productQuality: this.mediaConfigController.quality.value,
              entities: t,
            }),
            r = this.codecs.join(""),
            l = t
              .reduce((e, t) => "".concat(e).concat(t.data.meta.id, ","), "")
              .slice(0, -1),
            s = t.some((e) => (0, eK.Y)(e)) ? tQ.J.RAW : this.transport,
            n = "".concat(a).concat(l).concat(i).concat(r).concat(s);
          return new Promise((e, o) => {
            (0, aj.U)({ data: n, secretKey: this.secretKey })
              .then((n) => {
                this.resource
                  .getFileInfoBatch({
                    tsInSeconds: a,
                    trackIds: l,
                    quality: i,
                    codecs: this.codecs,
                    transports: [s],
                    sign: n,
                    fromPromoLanding: this.variables.fromPromoLanding,
                  })
                  .then((a) => {
                    for (let e of a.downloadInfos) {
                      let a = t.find((t) => t.data.meta.id === e.trackId);
                      if (a) {
                        let t = this.createMediaSource({
                          downloadInfo: e,
                          trackId: e.trackId,
                          quality: i,
                          codecs: this.codecs,
                        });
                        (a.mediaSourceData = t), (a.expectedQuality = i);
                      }
                    }
                    e(a.downloadInfos);
                  })
                  .catch((e) => {
                    o(
                      new tm("Error in get-file-info/batch request", {
                        code: U.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: l,
                          quality: i,
                          codecs: r,
                          causeAsObject: aW(e),
                        },
                      }),
                    );
                  });
              })
              .catch((e) => {
                o(
                  new tm("Error in creating sign for get-file-info request", {
                    code: U.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: l,
                      quality: i,
                      codecs: r,
                      causeAsObject: aW(e),
                    },
                  }),
                );
              });
          });
        }
        createMediaSource(e) {
          let {
              downloadInfo: t,
              trackId: a,
              codecs: i,
              quality: r,
              getFileInfoResponseTime: l,
              getFileInfoUrl: s,
            } = e,
            n = i.join("");
          if ("error" in t)
            throw new tm("Error message in get-file-info response", {
              code: U.E_GET_MEDIA_SRC,
              data: { trackId: a, quality: r, codecs: n, mediaSource: t },
            });
          if (!t.urls[0])
            throw new tm("No urls in get-file-info response", {
              code: U.E_GET_MEDIA_SRC,
              data: { trackId: a, quality: r, codecs: n, mediaSource: t },
            });
          return new t$({
            data: t,
            loadingTime: performance.now(),
            getFileInfoResponseTime: l,
            url: s,
          });
        }
        constructor(e) {
          var t;
          (0, X._)(this, "secretKey", void 0),
            (0, X._)(this, "resource", void 0),
            (0, X._)(this, "mediaConfigController", void 0),
            (0, X._)(this, "transport", void 0),
            (0, X._)(this, "codecs", void 0),
            (0, X._)(this, "variables", void 0),
            (0, X._)(this, "mediaSourceTtlMs", void 0);
          let {
            resource: a,
            secretKey: i,
            mediaConfigController: r,
            transport: l,
            variables: s,
            mediaSourceTtlMs: n,
            codecs: o,
          } = e;
          (this.resource = a),
            (this.secretKey = i),
            (this.mediaConfigController = r),
            (this.transport = l),
            (this.codecs = o),
            (this.variables = {
              isMediaSourcePreloadEnabled:
                null !==
                  (t = null == s ? void 0 : s.isMediaSourcePreloadEnabled) &&
                void 0 !== t &&
                t,
              fromPromoLanding: null == s ? void 0 : s.fromPromoLanding,
            }),
            (this.mediaSourceTtlMs = null != n ? n : 0);
        }
      }
      class aK {
        get src() {
          return this.data.src;
        }
        constructor(e) {
          (0, X._)(this, "type", "clipSource"),
            (0, X._)(this, "data", void 0),
            (0, X._)(this, "vsid", void 0),
            (0, X._)(this, "getFileInfoResponseTime", void 0),
            (0, X._)(this, "url", void 0),
            (this.data = e.data);
        }
      }
      class az {
        getMediaSource(e) {
          let { entity: t } = e;
          if (e0(t)) {
            let e = new aK({
              data: {
                src: ""
                  .concat(this.vhUrl)
                  .concat(t.data.meta.playerId, "?service=")
                  .concat(this.service, "&from=")
                  .concat(this.from),
              },
            });
            return (t.mediaSourceData = e), Promise.resolve(e);
          }
          return Promise.reject(
            new en.y("Provided entity is not clip entity", {
              code: U.E_UNSUITABLE_ENTITY_TYPE,
            }),
          );
        }
        constructor({ service: e, from: t, vhUrl: a }) {
          (0, X._)(this, "service", void 0),
            (0, X._)(this, "from", void 0),
            (0, X._)(this, "vhUrl", void 0),
            (this.service = e),
            (this.from = t),
            (this.vhUrl = a);
        }
      }
      class aH {
        async getMediaSource(e) {
          return tM(e.entity)
            ? this.generativeProvider.getMediaSource(e)
            : e0(e.entity)
              ? this.vhMediaProvider.getMediaSource(e)
              : this.getFileInfoProvider.getMediaSource(e);
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e;
          return t.some((e) => tM(e))
            ? Promise.reject(
                new tc(
                  "Can not use getMediaSourceBatch for generative entities",
                  { code: U.E_UNSUITABLE_ENTITY_TYPE },
                ),
              )
            : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
        }
        constructor(e) {
          (0, X._)(this, "generativeProvider", new aU()),
            (0, X._)(this, "getFileInfoProvider", void 0),
            (0, X._)(this, "vhMediaProvider", void 0),
            (this.getFileInfoProvider = new aY(e.getFileInfoProviderParams)),
            (this.vhMediaProvider = new az(e.vhMediaProviderParams));
        }
      }
      class aQ {
        async loadEntities(e) {
          let { trackIds: t } = (function (e) {
            let t = [];
            return (
              e.forEach((e) => {
                let { context: a, entity: i } = e,
                  r = i.data.meta.id,
                  l = "string" == typeof r && r.includes(":");
                if (!i.data.fromCurrentContext || l) {
                  t.push(i.data.meta.id);
                  return;
                }
                (null == a ? void 0 : a.data.type) === eg.A.Album &&
                  (r = "".concat(i.data.meta.id, ":").concat(a.data.meta.id)),
                  "albumId" in i.data.meta &&
                    i.data.meta.albumId &&
                    (r = ""
                      .concat(i.data.meta.id, ":")
                      .concat(i.data.meta.albumId)),
                  t.push(r);
              }, {}),
              { trackIds: t }
            );
          })(e);
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((t) => {
              let a = [];
              for (let i of t) {
                let t = e.find((e) =>
                  String(e.entity.data.meta.id).includes(String(i.id)),
                );
                if (t) {
                  let e =
                    t.entity.data.type === Z.RX.Unloaded
                      ? ee.A.Unknown
                      : t.entity.data.type;
                  e !== ee.A.Clip &&
                    a.push({
                      ...t.entity.data,
                      type: e,
                      meta: i,
                      loadEntityMeta: !1,
                    });
                }
              }
              return a;
            })
            .catch((e) => {
              throw new en.y("Failed to get track meta", {
                code: "E_TRACK_META_PROVIDER",
                cause: aW(e),
              });
            });
        }
        constructor(e) {
          (0, X._)(this, "resource", void 0);
          let { tracksResource: t } = e;
          this.resource = t;
        }
      }
      class aJ {
        loadEntities(e) {
          let t = e.map((e) => e.entity.data.meta.id);
          return this.resource
            .getClip({ clipIds: t })
            .then((t) => {
              let a = [];
              for (let i of t) {
                let t = e.find(
                  (e) => String(e.entity.data.meta.id) === String(i.clipId),
                );
                t &&
                  a.push({
                    ...t.entity.data,
                    type: ee.A.Clip,
                    meta: { id: i.clipId, ...i },
                    loadEntityMeta: !1,
                  });
              }
              return a;
            })
            .catch((e) => {
              throw new en.y("Failed to get clip meta", {
                code: "E_CLIP_META_PROVIDER",
                cause: aW(e),
              });
            });
        }
        constructor(e) {
          (0, X._)(this, "resource", void 0), (this.resource = e.clipsResource);
        }
      }
      class aX {
        loadEntities(e) {
          return e.some((e) => e0(e.entity))
            ? this.clipMetaProvider.loadEntities(e)
            : this.trackMetaProvider.loadEntities(e);
        }
        constructor(e) {
          (0, X._)(this, "trackMetaProvider", void 0),
            (0, X._)(this, "clipMetaProvider", void 0),
            (this.trackMetaProvider = new aQ({
              tracksResource: e.tracksResource,
            })),
            (this.clipMetaProvider = new aJ({
              clipsResource: e.clipsResource,
            }));
        }
      }
      var aZ = a(93093);
      (K || (K = {})).MAIN = "MAIN";
      class a$ {
        afterPlayHandler(e) {
          return (this.activePlayback.value = e), Promise.resolve();
        }
        beforePlayHandler(e) {
          return this.activePlayback.value && this.activePlayback.value !== e
            ? this.activePlayback.value.pause()
            : Promise.resolve();
        }
        getPlayback(e) {
          if (e) {
            let t = this.playbacks.get(e);
            if (t) return t;
          }
          let t = this.playbacks.get(K.MAIN);
          if (void 0 !== t) return t;
          throw new en.y("MAIN playback was not created", {
            code: "NO_MAIN_PLAYBACK",
          });
        }
        checkPlaybackBlockingStatus() {
          var e, t;
          let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : K.MAIN,
            i =
              null === (e = this.activePlayback.value) || void 0 === e
                ? void 0
                : e.getId(),
            r = i === a;
          return ((null === (t = this.activePlayback.value) || void 0 === t
            ? void 0
            : t.isBlocking) ||
            r) &&
            !r
            ? { status: tg.pr.BLOCKED, blockingPlaybackId: i }
            : { status: tg.pr.UNBLOCKED };
        }
        callIfUnblocked(e, t) {
          let { status: a, blockingPlaybackId: i } =
            this.checkPlaybackBlockingStatus(t);
          return a === tg.pr.UNBLOCKED
            ? e()
            : (this.getPlayback(
                t,
              ).hooks.afterPlaybackCheckBlockingStatus.promise({
                status: a,
                blockingPlaybackId: i,
              }),
              Promise.resolve());
        }
        createPlayback(e, t) {
          if (!this.playbacks.has(e)) {
            let a = new Z.Vb({
              id: e,
              isBlocking: t.isBlocking || !1,
              factory: t.factory,
              entityProvider: t.entityProvider,
              mediaPlayerParams: t.mediaPlayerParams,
              hooks: (0, tg.Hu)(),
              playbackConfig: t.playbackConfig,
            });
            this.playbacks.set(e, a),
              a.hooks.afterMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(a),
              ),
              a.hooks.beforeMediaStartPlaying.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(a),
              ),
              a.hooks.afterMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.afterPlayHandler(a),
              ),
              a.hooks.beforeMediaResume.tapPromise(
                "MusicPlaybackController",
                () => this.beforePlayHandler(a),
              );
          }
        }
        constructor() {
          (0, X._)(this, "activePlayback", new ey.wi(null)),
            (0, X._)(this, "playbacks", new Map());
        }
      }
      class a0 {
        get state() {
          return this.playbackController.getPlayback().state;
        }
        getState(e) {
          return this.playbackController.getPlayback(e).state;
        }
        playContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            let { contextData: i } = e,
              r = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .playContext({
                    context: r,
                    entitiesData: e.entitiesData,
                    loadContextMeta: e.loadContextMeta,
                    queueParams: e.queueParams,
                  })
                  .catch((e) => {
                    a.hooks.afterError.promise(e);
                  }),
              t,
            );
          } catch (e) {
            return a.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        setContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            let { contextData: i } = e,
              r = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .setContext({
                    context: r,
                    entitiesData: e.entitiesData,
                    loadContextMeta: e.loadContextMeta,
                    queueParams: e.queueParams,
                  })
                  .catch((e) => {
                    a.hooks.afterError.promise(e);
                  }),
              t,
            );
          } catch (e) {
            return a.hooks.afterError.promise(e), Promise.resolve();
          }
        }
        restartContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .restartContext({
                  playAfterRestart: e.playAfterRestart,
                  entitiesData: e.entitiesData,
                  queueParams: e.queueParams,
                })
                .catch((e) => {
                  a.hooks.afterError.promise(e);
                }),
            t,
          );
        }
        play(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.play().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        stop(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.stop().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        pause(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.pause().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        resume(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.resume().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        setProgress(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        setExponentVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .setExponentVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        setVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        setSpeed(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)),
            t,
          );
        }
        slideForward(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .slideForward(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        slideBackward(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .slideBackward(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        increaseExponentVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .increaseExponentVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        increaseVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .increaseVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        decreaseVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .decreaseVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        decreaseExponentVolume(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a
                .decreaseExponentVolume(e)
                .catch((e) => (a.hooks.afterError.promise(e), 0)),
            t,
          );
        }
        moveForward(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.moveForward().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        moveBackward(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.moveBackward().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        setEntityByIndex(e, t) {
          let a = this.playbackController.getPlayback(t);
          return this.playbackController.callIfUnblocked(
            () =>
              a.setEntityByIndex(e).catch((e) => {
                a.hooks.afterError.promise(e);
              }),
            t,
          );
        }
        togglePause(e) {
          let t = this.playbackController.getPlayback(e);
          return this.playbackController.callIfUnblocked(
            () =>
              t.togglePause().catch((e) => {
                t.hooks.afterError.promise(e);
              }),
            e,
          );
        }
        toggleShuffle(e) {
          let t = this.playbackController.getPlayback(e);
          try {
            this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
          } catch (e) {
            t.hooks.afterError.promise(e);
          }
        }
        setShuffle(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
          } catch (e) {
            a.hooks.afterError.promise(e);
          }
        }
        bindPlayer(e) {
          this.playbackController.getPlayback(e).bindPlayer();
        }
        unbindPlayer(e) {
          this.playbackController.getPlayback(e).unbindPlayer();
        }
        setRepeatMode(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            this.playbackController.callIfUnblocked(
              () => a.setRepeatMode(e),
              t,
            );
          } catch (e) {
            a.hooks.afterError.promise(e);
          }
        }
        removeAndLoadEntities(e) {
          let { positions: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          return this.playbackController.callIfUnblocked(
            () =>
              r.removeAndLoadEntities(t, i).catch((e) => {
                r.hooks.afterError.promise(e);
              }),
            a,
          );
        }
        remove(e) {
          let { positions: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.remove(t, i), a);
        }
        hide(e) {
          let { positions: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.hide(t, i), a);
        }
        inject(e) {
          let { entitiesData: t, position: a, playbackId: i, silent: r } = e,
            l = this.playbackController.getPlayback(i);
          this.playbackController.callIfUnblocked(() => l.inject(t, a, r), i);
        }
        injectNext(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.injectNext(t, i), a);
        }
        injectLast(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            r = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => r.injectLast(t, i), a);
        }
        registerMediaPlayer(e) {
          let { mediaPlayerParams: t, playbackId: a } = e;
          this.playbackController.getPlayback(a).registerMediaPlayer(t);
        }
        setVideoCoreContainer(e) {
          let { container: t, playbackId: a } = e;
          this.playbackController.getPlayback(a).setVideoCoreContainer(t);
        }
        destroyVideoCore(e) {
          this.playbackController.getPlayback(e).destroyVideoCore();
        }
        constructor(e) {
          if (
            ((0, X._)(this, "factory", void 0),
            (0, X._)(this, "playbackController", void 0),
            (this.factory = e.factory),
            (this.playbackController = e.playbackController),
            this.playbackController.createPlayback(K.MAIN, {
              factory: e.factory,
              mediaPlayerParams: e.mediaPlayerParams,
              entityProvider: e.entityProvider,
              playbackConfig: e.playbackConfig,
            }),
            e.plugins)
          ) {
            let t = this.playbackController.getPlayback(K.MAIN);
            for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
          }
        }
      }
      var a5 = a(60365),
        a1 = a(19684),
        a4 = a(14004),
        a3 = a(86108),
        a7 = a(13028),
        a6 = a(98030),
        a2 = a(13534),
        a9 = a(97141);
      let a8 = (e) => {
        let { audioLoader: t, children: a } = e;
        return (0, Q.use)(t), a;
      };
      var ie = a(37285),
        it = a(88913);
      let ia = (0, H.Pi)(() => {
          let e = (0, it.ji)(),
            t = (0, a2.jpI)(),
            { sonataState: a } = (0, a2.oR4)();
          (0, Q.useEffect)(() => {
            e.loadPresets();
          }, [e]),
            (0, Q.useEffect)(() => {
              e.isAvailable &&
                (null == t ? void 0 : t.equalizer.value) &&
                (e.isEnabled
                  ? (e.currentPreset &&
                      t.equalizer.value.applyPreset(
                        (0, ie.ZN)(e.currentPreset),
                      ),
                    t.equalizer.value.enable())
                  : t.equalizer.value.disable());
            }, [
              e.currentPreset,
              e.isEnabled,
              null == t ? void 0 : t.equalizer,
              a.areCoresRegistered,
              e.isAvailable,
            ]);
        }),
        ii = (0, H.Pi)((e) => {
          let { isConnectionDisabled: t } = e,
            a = (0, a2.uK4)(),
            i = (0, a2.R$C)();
          (0, Q.useEffect)(() => {
            let e = a.get(a2.YwV);
            return (
              t ||
                e.connector.connect({
                  oauth: a.get(a2.xit).token,
                  multiAuthUserId: a.get(a2.Hzc).getPassportUid(),
                }),
              () => {
                e.connector.disconnect();
              }
            );
          }, [a, t]),
            (0, Q.useEffect)(() => {
              if (t) return;
              let e = () => {
                let e = a.get(a2.YwV);
                document.hidden ||
                  e.connector.connect({
                    oauth: a.get(a2.xit).token,
                    multiAuthUserId: a.get(a2.Hzc).getPassportUid(),
                  }),
                  document.hidden &&
                    (null == i ? void 0 : i.state.playerState.status.value) !==
                      Z.FY.PLAYING && e.connector.disconnect();
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => {
                  document.removeEventListener("visibilitychange", e);
                }
              );
            }, [a, i, t]);
        }),
        ir = (e) => {
          let { children: t } = e,
            a = (0, a2.jpI)(),
            i = (0, a2.wdp)(),
            [r] = (0, Q.useState)(() =>
              it.wi.create({ isEnabled: !1, modal: {} }, i),
            );
          return (
            (0, Q.useEffect)(() => {
              let e =
                null == a
                  ? void 0
                  : a.equalizer.onChange((e) => {
                      r.setIsAvailable(!!e);
                    });
              return () => {
                null == e || e();
              };
            }, [r, null == a ? void 0 : a.equalizer]),
            (0, z.jsx)(it.gp.Provider, { value: r, children: t })
          );
        },
        il = !1,
        is = (e) => {
          let {
              mediaProvider: t,
              playbackController: a,
              factory: i,
              entityProvider: r,
              mediaConfigController: l,
              isEnabled: s,
              isMetricsDebugEnabled: n,
              hostTld: o,
              browserInfo: d,
            } = e,
            u = (0, a2.uK4)(),
            c = (0, a2.wLl)(),
            m = (0, a1.s)(),
            { experiments: g } = (0, a2.oR4)(),
            { language: h } = (0, a2.ZSk)();
          if (!s || !a || !i || !t || !r || !l || il) return;
          let y = u.get(a2.xit),
            v = u.get(a2.U5t),
            p = u.get(a2.URT)({ credentials: "include" }),
            S = new e6(m),
            {
              player: { configVariablesPromoLandingPlayback: E, prefixUrl: b },
            } = v;
          null == a ||
            a.createPlayback(a2.jiA.PROMO_LANDING, {
              factory: i,
              entityProvider: r,
              playbackConfig: {
                mediaElementErrorReloadCount: E.mediaElementErrorReloadCount,
                windowSize: E.windowSize,
                setupQueueWindowSize: E.setupQueueWindowSize,
              },
            });
          let f = a.getPlayback(a2.jiA.PROMO_LANDING);
          for (let e of [
            new ti({
              variables: {
                get isAutoflowEnabled() {
                  return !1;
                },
              },
            }),
            new tr(),
            new tl(),
            new tO({
              httpClient: p,
              playsResourceConfig: {
                params: {
                  common: {
                    client: (0, a6.$)(),
                    device: (0, a2.qcA)(),
                    language: h,
                    oauth: y.token,
                    get multiAuthUserId() {
                      return u.get(a2.Hzc).getPassportUid();
                    },
                  },
                },
                prefixUrl: (0, J.getTldHost)(b, o, a2.MgS),
              },
              variables: {
                get disableSendPlaysOnTrackStart() {
                  return g.checkExperiment(
                    a2.peG.WebNextDisableSendPlaysOnTrackStart,
                    "on",
                  );
                },
                get enableLocalStoredPlaysData() {
                  return g.checkExperiment(
                    a2.peG.WebNextPlayAudioHeartBeat,
                    "on",
                  );
                },
                get shouldDeletePlaysObjectStore() {
                  return g.checkExperiment(
                    a2.peG.WebNextDeleteIndexedDbPlaysStore,
                    "on",
                  );
                },
                get enablePartialPlayReporting() {
                  return !0;
                },
                get enableSendChangeReason() {
                  return g.checkExperiment(
                    a2.peG.WebNextSendChangeReasonInPlaysPlugin,
                    "on",
                  );
                },
              },
            }),
            new tB({ browserName: d.name, browserVersion: d.version }),
            new tW({ logger: c }),
            new t3({
              mediaConfigController: l,
              transport: S,
              variables: {
                get enableDebugMode() {
                  return n;
                },
              },
            }),
            new t6({
              mediaProvider: t,
              mediaConfigController: l,
              config: {
                checkForLoadWindowSize: E.checkForLoadWindowSize,
                loadWindowSize: E.loadWindowSize,
                mediaSourceTtlMs: E.mediaSourceTtlMs,
              },
              variables: {
                get isMediaSourcePreloadEnabled() {
                  return g.checkExperiment(
                    a2.peG.WebNextGetFileInfoPreload,
                    "on",
                  );
                },
              },
            }),
            new t8({
              variables: {
                get enableSingleTabPlayback() {
                  return g.checkExperiment(
                    a2.peG.WebNextSingleTabPlayback,
                    "on",
                  );
                },
              },
            }),
          ])
            e.apply({ playback: f, hooks: f.hooks });
          il = !0;
        };
      var io = a(6232);
      let id = (e) => {
          let { sonata: t, playbackId: a, withStorage: i, sonataState: r } = e,
            l = (0, a2.uK4)().get(a2.V0J),
            { experiments: s } = (0, a2.oR4)(),
            n = s.checkExperiment(
              a2.peG.WebNextPlayerBarBackgroundProgress,
              "on",
            );
          (0, Q.useEffect)(() => {
            var e;
            let s, o, d, u, c;
            let m =
                null == t
                  ? void 0
                  : t.getState(a).queueState.currentEntity.onChange((e) => {
                      let t = null == e ? void 0 : e.context.data.type,
                        a = null == e ? void 0 : e.context.data.meta.id,
                        i = null == e ? void 0 : e.entity;
                      i && r.setEntityMeta(i),
                        t && r.setContextType(t),
                        a && r.setContextId(a);
                    }),
              g =
                null == t
                  ? void 0
                  : t.getState(a).playerState.status.onChange((e) => {
                      e && r.setStatus(e);
                    }),
              h =
                null == t
                  ? void 0
                  : t.getState(a).currentContext.onChange(() => {
                      var e, n, m, g, h, y;
                      if (
                        (null == s || s(),
                        null == o || o(),
                        null == d || d(),
                        null == u || u(),
                        null == c || c(),
                        i)
                      ) {
                        let e =
                          null !== (y = l.get(a2.BUb.YmPlayerRepeatMode)) &&
                          void 0 !== y
                            ? y
                            : io.zq.NONE;
                        null == t || t.setRepeatMode(e, a);
                        let i = !!l.get(a2.BUb.YmPlayerShuffle);
                        null == t || t.setShuffle(i, a);
                      }
                      (s =
                        null == t
                          ? void 0
                          : null === (e = t.getState(a).currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveBackward.onChange((e) => {
                                r.setCanMoveBackward(!!e);
                              })),
                        (o =
                          null == t
                            ? void 0
                            : null ===
                                  (n = t.getState(a).currentContext.value) ||
                                void 0 === n
                              ? void 0
                              : n.availableActions.moveForward.onChange((e) => {
                                  r.setCanMoveForward(!!e);
                                })),
                        (d =
                          null == t
                            ? void 0
                            : null ===
                                  (m = t.getState(a).currentContext.value) ||
                                void 0 === m
                              ? void 0
                              : m.availableActions.repeat.onChange((e) => {
                                  "boolean" == typeof e &&
                                    r.setCanChangeRepeatMode(e);
                                })),
                        (u =
                          null == t
                            ? void 0
                            : null ===
                                  (g = t.getState(a).currentContext.value) ||
                                void 0 === g
                              ? void 0
                              : g.availableActions.shuffle.onChange((e) => {
                                  "boolean" == typeof e && r.setCanShuffle(e);
                                })),
                        (c =
                          null == t
                            ? void 0
                            : null ===
                                  (h = t.getState(a).currentContext.value) ||
                                void 0 === h
                              ? void 0
                              : h.availableActions.speed.onChange((e) => {
                                  "boolean" != typeof e ||
                                    (r.setCanSpeed(e),
                                    e || null == t || t.setSpeed(1, a));
                                }));
                    }),
              y =
                null == t
                  ? void 0
                  : null === (e = t.getState(a).playerState) || void 0 === e
                    ? void 0
                    : e.progress.onChange((e) => {
                        e &&
                          (r.setPosition(e.position),
                          r.setDuration(e.duration));
                      }),
              v =
                null == t
                  ? void 0
                  : t.getState(a).playerState.volume.onChange((e) => {
                      let i = n
                        ? null == t
                          ? void 0
                          : t.getState(a).playerState.exponentVolume.value
                        : e;
                      "number" == typeof i && r.setVolume(i);
                    }),
              p =
                null == t
                  ? void 0
                  : t.getState(a).queueState.repeat.onChange((e) => {
                      e &&
                        (r.setRepeatMode(e),
                        i &&
                          l.set(a2.BUb.YmPlayerRepeatMode, e, {
                            expires: 365,
                          }));
                    }),
              S =
                null == t
                  ? void 0
                  : t.getState(a).queueState.shuffle.onChange((e) => {
                      "boolean" == typeof e &&
                        (r.setShuffle(e),
                        i &&
                          l.set(a2.BUb.YmPlayerShuffle, e, { expires: 365 }));
                    });
            return () => {
              null == m || m(),
                null == g || g(),
                null == h || h(),
                null == v || v(),
                null == p || p(),
                null == d || d(),
                null == u || u(),
                null == S || S(),
                null == y || y(),
                null == s || s(),
                null == o || o(),
                null == c || c();
            };
          }, [n, a, t, r, l, i]);
        },
        iu = () => {
          let e = (0, a2.uK4)(),
            { experiments: t } = (0, a2.oR4)(),
            a = e.get(a2.U5t),
            i = t.checkExperiment(a2.peG.WebNextYaspVersion, "default"),
            r = t.getExperiment(a2.peG.WebNextYaspVersion);
          return i
            ? a.player.yaspVersionStable
            : r && r.group
              ? r.group
              : a.player.yaspVersionStable;
        },
        ic = null,
        im = null,
        ig = null,
        ih = null,
        iy = null,
        iv = null,
        ip = null,
        iS = null,
        iE = null,
        ib = null,
        iP = [
          a2.BUb.YmPlayerQuality,
          a2.BUb.YmPlayerShuffle,
          a2.BUb.YmPlayerPrevVolume,
          a2.BUb.YmPlayerVolume,
          a2.BUb.YmPlayerRepeatMode,
        ],
        iI = (e) => {
          let {
              children: t,
              hostTld: i,
              quality: r,
              withPromoLandingPlayback: l,
            } = e,
            s = (0, a2.uK4)(),
            {
              sonataState: n,
              experiments: o,
              library: d,
              trailer: u,
              user: c,
              advert: m,
              slam: g,
              settings: h,
              promolanding: { state: y },
            } = (0, a2.oR4)(),
            { isPassToProduct: v, isFreemium: p } = (0, a2.NMB)(),
            S = (0, a2.wLl)(),
            E = s.get(a2.V0J),
            b = s.get(a2.xit),
            f = s.get(a2.U5t),
            { language: P } = (0, a2.ZSk)(),
            I = (0, a2.ozq)(),
            k = (0, a1.s)(),
            C = o.checkExperiment(
              a2.peG.WebNextPlayerBarBackgroundProgress,
              "on",
            ),
            T = !c.isAuthorized || v || p,
            _ = T || g.isOfflineModeEnabled,
            N = c.isAuthorized && !p,
            A = !!f.dev.panel && !!E.get(a2.BUb.EnableMetricsPluginDebugMode),
            D = (0, Q.useMemo)(() => (ic || (ic = new aO(r)), ic), [r]),
            L = h.browserInfo,
            R = "Safari" !== L.name && "iOS" !== L.OSFamily,
            x = (0, Q.useMemo)(
              () =>
                ig ||
                (ig = new e$({ useAnalyser: R, useEqualizer: R, useFade: !1 })),
              [R],
            ),
            w = (0, Q.useMemo)(() => {
              if (null !== ih) return ih;
              let e = s.get(a2.Ep_);
              return (ih = new e5({
                advertModule: I,
                afterTrackResource: s.get(a2.UYe),
                adsResource: e,
                variables: {
                  get enabled() {
                    return !c.hasPlus;
                  },
                },
              }));
            }, [I, s, c.hasPlus]),
            G = (0, Q.useMemo)(() => {
              if (iv) return iv;
              let e = s.get(a2.ES6),
                { transport: t, codecs: a } = (0, a2.Rbj)(L);
              return (iv = new aH({
                getFileInfoProviderParams: {
                  resource: e,
                  secretKey: f.player.secretKey,
                  mediaConfigController: D,
                  transport: t,
                  codecs: a,
                  variables: {
                    get isMediaSourcePreloadEnabled() {
                      return o.checkExperiment(
                        a2.peG.WebNextGetFileInfoPreload,
                        "on",
                      );
                    },
                    get fromPromoLanding() {
                      return !0;
                    },
                  },
                  mediaSourceTtlMs:
                    f.player.configVariablesPromoLandingPlayback
                      .mediaSourceTtlMs,
                },
                vhMediaProviderParams: f.player.vhMediaProvider,
              }));
            }, [
              L,
              f.player.configVariablesPromoLandingPlayback.mediaSourceTtlMs,
              f.player.secretKey,
              f.player.vhMediaProvider,
              s,
              o,
              D,
            ]),
            V = (0, Q.useMemo)(() => {
              if (iy) return iy;
              let e = s.get(a2.ES6),
                { transport: t, codecs: a } = (0, a2.Rbj)(L);
              return (iy = new aH({
                getFileInfoProviderParams: {
                  resource: e,
                  secretKey: f.player.secretKey,
                  mediaConfigController: D,
                  transport: t,
                  codecs: a,
                  variables: {
                    get isMediaSourcePreloadEnabled() {
                      return o.checkExperiment(
                        a2.peG.WebNextGetFileInfoPreload,
                        "on",
                      );
                    },
                  },
                  mediaSourceTtlMs:
                    f.player.configVariablesMainPlayback.mediaSourceTtlMs,
                },
                vhMediaProviderParams: f.player.vhMediaProvider,
              }));
            }, [
              L,
              f.player.configVariablesMainPlayback.mediaSourceTtlMs,
              f.player.secretKey,
              f.player.vhMediaProvider,
              s,
              o,
              D,
            ]),
            O = (0, Q.useMemo)(() => ip || (ip = new a$()), []);
          (0, Q.useEffect)(() => {
            I &&
              O &&
              (I.createAudioAdvertPlayback({ playbackController: O }),
              m.setIsAdvertPlaybackCreated(!0));
          }, [m, I, O]);
          let M = (0, Q.useMemo)(
              () =>
                iS ||
                (iS = new aX({
                  tracksResource: s.get(a2.g5F),
                  clipsResource: s.get(a2.m_q),
                })),
              [s],
            ),
            F = (0, Q.useMemo)(() => {
              if (iE) return iE;
              let e = s.get(a2.g5F),
                t = s.get(a2.Eug),
                a = s.get(a2.w5_),
                i = s.get(a2.lkR),
                r = s.get(a2.qV$),
                l = s.get(a2.na2);
              return (iE = new eY({
                contextFactoryParams: {
                  logger: S,
                  variables: {
                    vibe: {
                      get sendFeedbackToSessionTracks() {
                        return o.checkExperiment(
                          a2.peG.WebNextWaveNewFeedbacks,
                          "on",
                        );
                      },
                      get enableGetNextTracksAfterCloneVibeContext() {
                        return o.checkExperiment(
                          a2.peG.WebNextLimitTracksFromYnison,
                          "on",
                        );
                      },
                      get disableFastVibeSkip() {
                        return o.checkExperiment(
                          a2.peG.WebNextDisableVibeFastSkip,
                          "on",
                        );
                      },
                      get enableUpdatedForwardSkipInVibeContext() {
                        return o.checkExperiment(
                          a2.peG.WebNextEnableUpdatedForwardSkipInWave,
                          "on",
                        );
                      },
                      get enableRemovingNotPlayedVibeTracksByTtl() {
                        return o.checkExperiment(
                          a2.peG.WebNextRemoveVibeTracksByTtl,
                          "on",
                        );
                      },
                      get dontSendDuplicatedFeedbacks() {
                        return o.checkExperiment(
                          a2.peG.WebNextNotSendDuplicatedFeedbacks,
                          "on",
                        );
                      },
                      get sendInteractiveToSession() {
                        return o.checkExperiment(
                          a2.peG.WebNextInteractiveSessionNew,
                          "on",
                        );
                      },
                    },
                  },
                  tracksResource: e,
                  usersResource: t,
                  rotorResource: a,
                  playlistResource: i,
                  albumsResource: r,
                  artistsResource: l,
                },
                entityFactoryParams: { likeStore: d },
              }));
            }, [s, o, d, S]),
            U = (0, Q.useMemo)(
              () =>
                ib ||
                (ib = new e7({
                  telemetryResource: s.get(a2.Vw1),
                  ...f.player.telemetry,
                })),
              [s, f.player.telemetry],
            ),
            j = iu(),
            B = (0, Q.useMemo)(() => {
              if (!V || !O || !M || !F) return null;
              if (im) return im;
              let e = s.get(a2.URT)({ credentials: "include" }),
                {
                  player: {
                    prefixUrl: t,
                    configVariablesMainPlayback: a,
                    configVariablesTrailerPlayback: r,
                  },
                } = f,
                l = new e6(k),
                d = [
                  new ti({
                    variables: {
                      get isAutoflowEnabled() {
                        return N;
                      },
                    },
                  }),
                  new tr(),
                  new tl(),
                  new tO({
                    httpClient: e,
                    playsResourceConfig: {
                      params: {
                        common: {
                          client: (0, a6.$)(),
                          device: (0, a2.qcA)(),
                          language: P,
                          oauth: b.token,
                          get multiAuthUserId() {
                            return s.get(a2.Hzc).getPassportUid();
                          },
                        },
                      },
                      prefixUrl: (0, J.getTldHost)(t, i, a2.MgS),
                    },
                    variables: {
                      get disableSendPlaysOnTrackStart() {
                        return o.checkExperiment(
                          a2.peG.WebNextDisableSendPlaysOnTrackStart,
                          "on",
                        );
                      },
                      get enableLocalStoredPlaysData() {
                        return o.checkExperiment(
                          a2.peG.WebNextPlayAudioHeartBeat,
                          "on",
                        );
                      },
                      get shouldDeletePlaysObjectStore() {
                        return o.checkExperiment(
                          a2.peG.WebNextDeleteIndexedDbPlaysStore,
                          "on",
                        );
                      },
                      get enableRemoveDuplicatePlays() {
                        return o.checkExperiment(
                          a2.peG.WebNextRemoveDuplicatePlays,
                          "on",
                        );
                      },
                      get enableSendChangeReason() {
                        return o.checkExperiment(
                          a2.peG.WebNextSendChangeReasonInPlaysPlugin,
                          "on",
                        );
                      },
                    },
                  }),
                  new tB({ browserName: L.name, browserVersion: L.version }),
                  new tW({ logger: S }),
                  new tY(D.quality),
                  new tH({
                    httpClient: e,
                    streamsResourceConfig: {
                      params: {
                        common: {
                          client: (0, a6.$)(),
                          device: (0, a2.qcA)(),
                          language: P,
                          oauth: b.token,
                          get multiAuthUserId() {
                            return s.get(a2.Hzc).getPassportUid();
                          },
                        },
                      },
                      prefixUrl: (0, J.getTldHost)(t, i, a2.MgS),
                    },
                    variables: {
                      get isEnabled() {
                        return c.isAuthorized;
                      },
                    },
                  }),
                  new t3({
                    mediaConfigController: D,
                    transport: l,
                    variables: {
                      get enableDebugMode() {
                        return A;
                      },
                    },
                  }),
                  new t6({
                    mediaProvider: V,
                    mediaConfigController: D,
                    config: {
                      checkForLoadWindowSize: a.checkForLoadWindowSize,
                      loadWindowSize: a.loadWindowSize,
                      mediaSourceTtlMs: a.mediaSourceTtlMs,
                    },
                    variables: {
                      get isMediaSourcePreloadEnabled() {
                        return o.checkExperiment(
                          a2.peG.WebNextGetFileInfoPreload,
                          "on",
                        );
                      },
                    },
                  }),
                  new t2({
                    onTrailerPaused: () => {
                      u.setIsManuallyPaused(!0);
                    },
                    onTrailerPlaying: () => {
                      u.setIsManuallyPaused(!1);
                    },
                    playbackController: O,
                    trailerPlaybackParams: {
                      id: a2.jiA.TRAILER,
                      plugins: [
                        new e$({ useFade: R, useSmartPreview: !0 }),
                        new ti({
                          variables: {
                            get isAutoflowEnabled() {
                              return !1;
                            },
                          },
                        }),
                        new tW({ logger: S }),
                        new tl(),
                        new t3({
                          mediaConfigController: D,
                          transport: l,
                          variables: {
                            get enableDebugMode() {
                              return A;
                            },
                          },
                        }),
                        new tO({
                          httpClient: e,
                          playsResourceConfig: {
                            params: {
                              common: {
                                client: (0, a6.$)(),
                                device: (0, a2.qcA)(),
                                language: P,
                                oauth: b.token,
                                get multiAuthUserId() {
                                  return s.get(a2.Hzc).getPassportUid();
                                },
                              },
                            },
                            prefixUrl: (0, J.getTldHost)(t, i, a2.MgS),
                          },
                          variables: {
                            get disableSendPlaysOnTrackStart() {
                              return o.checkExperiment(
                                a2.peG.WebNextDisableSendPlaysOnTrackStart,
                                "on",
                              );
                            },
                            get enableLocalStoredPlaysData() {
                              return o.checkExperiment(
                                a2.peG.WebNextPlayAudioHeartBeat,
                                "on",
                              );
                            },
                            get shouldDeletePlaysObjectStore() {
                              return o.checkExperiment(
                                a2.peG.WebNextDeleteIndexedDbPlaysStore,
                                "on",
                              );
                            },
                            get enableSendChangeReason() {
                              return o.checkExperiment(
                                a2.peG.WebNextSendChangeReasonInPlaysPlugin,
                                "on",
                              );
                            },
                          },
                          storePlaysProgressIntervalMs: 5e3,
                        }),
                        new t8({
                          variables: {
                            get enableSingleTabPlayback() {
                              return o.checkExperiment(
                                a2.peG.WebNextSingleTabPlayback,
                                "on",
                              );
                            },
                          },
                        }),
                      ],
                      factory: F,
                      entityProvider: M,
                      playbackConfig: {
                        mediaElementErrorReloadCount:
                          r.mediaElementErrorReloadCount,
                        windowSize: r.windowSize,
                        setupQueueWindowSize: r.setupQueueWindowSize,
                      },
                    },
                  }),
                  w,
                  new t8({
                    variables: {
                      get enableSingleTabPlayback() {
                        return o.checkExperiment(
                          a2.peG.WebNextSingleTabPlayback,
                          "on",
                        );
                      },
                    },
                  }),
                ];
              if ((x && d.push(x), !T)) {
                let e = s.get(a2.YwV),
                  t = new aL({
                    factory: F,
                    deviceConfig: e.deviceConfig,
                    ynisonStateController: e.stateController,
                    variables: {
                      get enableLimitTracksFromYnison() {
                        return o.checkExperiment(
                          a2.peG.WebNextLimitTracksFromYnison,
                          "on",
                        );
                      },
                      get shouldApplyState() {
                        return n.shouldApplyYnisonState;
                      },
                      get enableSendLimitedEntityListToYnison() {
                        return o.checkExperiment(
                          a2.peG.WebNextEnableSendLimitedEntityListToYnison,
                          "on",
                        );
                      },
                    },
                  });
                d.push(t);
              }
              return (
                d.push(
                  new aG({
                    factory: F,
                    platform: "desktop",
                    variables: {
                      get enabled() {
                        return N;
                      },
                    },
                  }),
                ),
                U &&
                  d.push(
                    new aV({
                      telemetry: U,
                      get puid() {
                        return c.puid;
                      },
                      yaspVersion: j,
                    }),
                  ),
                (im = new a0({
                  factory: F,
                  playbackController: O,
                  plugins: d,
                  entityProvider: M,
                  playbackConfig: {
                    mediaElementErrorReloadCount:
                      a.mediaElementErrorReloadCount,
                    windowSize: a.windowSize,
                    setupQueueWindowSize: a.setupQueueWindowSize,
                  },
                }))
              );
            }, [
              V,
              O,
              M,
              F,
              s,
              f,
              k,
              P,
              b.token,
              i,
              L.name,
              L.version,
              S,
              D,
              R,
              x,
              w,
              T,
              U,
              N,
              o,
              c.isAuthorized,
              c.puid,
              A,
              u,
              n.shouldApplyYnisonState,
              j,
            ]);
          (0, a7.A4)(B);
          let q = (0, aZ.W)((e) => {
              C
                ? (null == B || B.setExponentVolume(e),
                  null == B || B.setExponentVolume(e, a2.jiA.TRAILER))
                : (null == B || B.setVolume(e),
                  null == B || B.setVolume(e, a2.jiA.TRAILER)),
                n.setVolume(e),
                l &&
                  (C
                    ? null == B || B.setExponentVolume(e, a2.jiA.PROMO_LANDING)
                    : null == B || B.setVolume(e, a2.jiA.PROMO_LANDING),
                  y.setVolume(e));
            }),
            W = (0, aZ.W)(() => {
              let e = E.get(a2.BUb.YmPlayerVolume);
              "number" == typeof e ? q(e) : q(1);
            });
          is({
            isEnabled: !!l,
            playbackController: O,
            entityProvider: M,
            factory: F,
            mediaConfigController: D,
            isNonSafariBrowser: R,
            isMetricsDebugEnabled: A,
            browserInfo: L,
            hostTld: i,
            mediaProvider: G,
          }),
            (0, Q.useEffect)(() => {
              B &&
                f.dev.exposeSonataStateInWindow &&
                (window.sonataState = B.state);
            }, [f.dev.exposeSonataStateInWindow, B]),
            (0, Q.useEffect)(() => {
              B &&
                V &&
                G &&
                U &&
                !n.areCoresRegistered &&
                (Promise.all([a.e(1032), a.e(4208), a.e(2514)])
                  .then(a.bind(a, 52514))
                  .then((e) => {
                    let {
                        YaspCoreAdapter: t,
                        YaspLoader: a,
                        HlsCoreAdapter: i,
                        HtmlAudioCoreAdapter: r,
                      } = e,
                      s = new a({ logger: S, yaspTelemetry: U }),
                      n = R
                        ? new i({
                            hlsErrorRetryLimit: f.player.hlsErrorRetryLimit,
                          })
                        : new r();
                    B.registerMediaPlayer({
                      mediaPlayerParams: {
                        core: n,
                        mediaProvider: V,
                        entityContentType: et.z.HLS,
                      },
                    }),
                      I &&
                        B.registerMediaPlayer({
                          mediaPlayerParams: {
                            core: new r(),
                            entityContentType: et.z.AUDIO,
                            mediaProvider: new a2.FOM(),
                          },
                          playbackId: a2.jiA.ADVERT,
                        }),
                      s.loadYasp(j).then(() => {
                        let e = s.getYaspAudioElement();
                        B.registerMediaPlayer({
                          mediaPlayerParams: {
                            core: new t({
                              yaspAudioElement: e,
                              yaspTelemetry: U,
                            }),
                            mediaProvider: V,
                            entityContentType: et.z.AUDIO,
                          },
                        }),
                          B.registerMediaPlayer({
                            mediaPlayerParams: {
                              core: new t({ yaspAudioElement: e }),
                              mediaProvider: V,
                              entityContentType: et.z.AUDIO,
                            },
                            playbackId: a2.jiA.TRAILER,
                          }),
                          l &&
                            G &&
                            B.registerMediaPlayer({
                              mediaPlayerParams: {
                                core: new t({ yaspAudioElement: e }),
                                mediaProvider: G,
                                entityContentType: et.z.AUDIO,
                              },
                              playbackId: a2.jiA.PROMO_LANDING,
                            }),
                          W();
                      });
                  }),
                n.setCoresAsRegistered(!0));
            }, [
              I,
              f.player.hlsErrorRetryLimit,
              j,
              R,
              S,
              V,
              G,
              W,
              B,
              n,
              l,
              s,
              n.areCoresRegistered,
              U,
            ]),
            (0, Q.useEffect)(() => {
              Promise.all([a.e(4208), a.e(7553)])
                .then(a.bind(a, 67553))
                .then((e) => {
                  let { loadVHPlayerSdk: t, VHPlayerCoreAdapter: a } = e;
                  if (!B || !V || !O || !M || !F) return;
                  let i = new a({ hideAds: !0 }),
                    { configVariablesMainPlayback: r } = f.player;
                  t(f.player.vhPlayerSdkVersion).then(() => {
                    O.createPlayback(a2.jiA.CLIP, {
                      mediaPlayerParams: {
                        core: i,
                        mediaProvider: V,
                        entityContentType: et.z.CLIP,
                      },
                      entityProvider: M,
                      factory: F,
                      playbackConfig: {
                        mediaElementErrorReloadCount:
                          r.mediaElementErrorReloadCount,
                        windowSize: r.windowSize,
                        setupQueueWindowSize: r.setupQueueWindowSize,
                      },
                    });
                    let e = O.getPlayback(a2.jiA.CLIP);
                    for (let t of [
                      new ti({
                        variables: {
                          get isAutoflowEnabled() {
                            return !1;
                          },
                        },
                      }),
                      new tl(),
                      w,
                    ])
                      t.apply({ playback: e, hooks: e.hooks });
                    n.setIsVHCoreRegistered(!0);
                  });
                });
            }, [w, f.player, s, M, F, V, O, B, n, c.hasPlus]),
            (0, a7.kr)({ sonata: B }),
            (0, a3.S)({ sonata: B }),
            (0, a4.di)({ sonata: B }),
            id({
              sonata: B,
              playbackId: l ? a2.jiA.PROMO_LANDING : void 0,
              withStorage: !l,
              sonataState: l ? y : n,
            });
          let Y = (0, Q.useCallback)(() => {
            if (!c.isAuthorized || v) return t5.n.PREVIEW;
            if (p) return t5.n.EFFICIENT;
            let e = E.get(a2.BUb.YmPlayerQuality);
            if (e) {
              if (Object.values(a2.qql).includes(e)) {
                let t = (0, a2.RE8)(e);
                return E.set(a2.BUb.YmPlayerQuality, t, { expires: 365 }), t;
              }
              return e;
            }
            return (
              E.set(a2.BUb.YmPlayerQuality, t5.n.BALANCED, { expires: 365 }),
              t5.n.BALANCED
            );
          }, [E, v, p, c.isAuthorized]);
          return (
            (0, Q.useEffect)(
              () => (
                l &&
                  (null == B || B.stop(),
                  Object.values(a2.jiA).forEach((e) => {
                    e !== a2.jiA.PROMO_LANDING && (null == B || B.stop(e));
                  })),
                () => {
                  l && (null == B || B.stop(a2.jiA.PROMO_LANDING));
                }
              ),
              [B, l],
            ),
            (0, Q.useEffect)(() => {
              l || (D.setQuality(Y()), n.setQuality(Y()));
            }, [D, Y, n, l]),
            (0, Q.useEffect)(() => {
              (0, a5.iJ)(E, iP);
            }, [E]),
            (0, z.jsx)(a2.Xe$.Provider, {
              value: D,
              children: (0, z.jsxs)(a2.R8o.Provider, {
                value: B,
                children: [
                  (0, z.jsx)(ii, { isConnectionDisabled: _ }),
                  (0, z.jsx)(a2.yZB.Provider, {
                    value: x,
                    children: (0, z.jsxs)(ir, {
                      children: [(0, z.jsx)(ia, {}), t],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        ik = (0, H.Pi)((e) => {
          let { children: t, hostTld: a, quality: i, ...r } = e,
            l = (0, a2.Klg)();
          return (0, z.jsx)(Q.Suspense, {
            fallback: (0, z.jsx)(a9.b2, {}),
            children: (0, z.jsx)(a8, {
              audioLoader: l,
              children: (0, z.jsx)(iI, {
                hostTld: a,
                quality: i,
                ...r,
                children: t,
              }),
            }),
          });
        });
    },
    52308: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return tU;
          },
        });
      var i,
        r,
        l,
        s,
        n = a(75441),
        o = a(62569),
        d = a(22874),
        u = a(98730),
        c = a(65067);
      a(63660);
      var m = a(13534),
        g = a(95817),
        h = a(6232),
        y = a(98375),
        v = a(89150),
        p = a(99951);
      let S = {
        experiments: {
          loadingState: m.Gui.IDLE,
          experiments: {},
          overwrittenExperiments: {},
        },
        disclaimers: {
          loadingState: m.Gui.IDLE,
          recentDisclaimersRequestTS: 0,
        },
        user: {
          account: { loadingState: m.Gui.IDLE, data: {} },
          settings: { loadingState: m.Gui.IDLE },
        },
        wizard: {
          loadingState: m.Gui.IDLE,
          modal: {},
          savedLikedArtists: [],
          likedArtists: [],
          unlikedArtists: [],
        },
        collection: {
          albums: {
            loadingState: m.Gui.IDLE,
            items: [],
            upcomingAlbums: { loadingState: m.Gui.IDLE },
          },
          playlistsCreated: { loadingState: m.Gui.IDLE, items: [] },
          playlistsLiked: { loadingState: m.Gui.IDLE, items: [] },
          artists: {
            loadingState: m.Gui.IDLE,
            items: [],
            topArtists: { loadingState: m.Gui.IDLE, items: [] },
          },
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
          shelf: {
            recentlyPlayed: { loadingState: m.Gui.IDLE },
            newEpisodes: { loadingState: m.Gui.IDLE },
            liked: { loadingState: m.Gui.IDLE },
          },
          nonMusicLiked: { loadingState: m.Gui.IDLE, items: [] },
          dislikes: {
            artists: { loadingState: m.Gui.IDLE },
            tracks: { loadingState: m.Gui.IDLE },
          },
          kids: {
            albums: { loadingState: m.Gui.IDLE },
            playlists: { loadingState: m.Gui.IDLE },
            tracks: { loadingState: m.Gui.IDLE },
          },
          shelfRecentlyPlayed: { loadingState: m.Gui.IDLE },
          shelfLiked: { loadingState: m.Gui.IDLE },
          clips: {
            loadingState: m.Gui.IDLE,
            clipsWillLike: { loadingState: m.Gui.IDLE },
          },
        },
        main: {
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
        },
        nonMusic: {
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
          albums: { loadingState: m.Gui.IDLE },
          categorySubpage: { loadingState: m.Gui.IDLE },
          categoryPlaylistsSubpage: { loadingState: m.Gui.IDLE },
        },
        kids: {
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
          kidsEditorialPlaylistSubpage: { loadingState: m.Gui.IDLE },
          kidsEditorialAlbumSubpage: { loadingState: m.Gui.IDLE },
        },
        settings: {
          layout: null,
          isLandscape: !1,
          isMobileLandscapeHeight: !1,
          browserInfo: {
            name: void 0,
            version: void 0,
            OSFamily: void 0,
            isMobile: !1,
            isTablet: !1,
            isTouch: !1,
            isBrowser: !1,
            inAppBrowser: !1,
            hasHuaweiAppGallery: !1,
          },
        },
        currentClipInfo: {
          clipLoadingState: m.Gui.IDLE,
          creditsLoadingState: m.Gui.IDLE,
          id: null,
          clip: null,
          credits: null,
          modal: {},
        },
        currentTrackInfo: {
          trackLoadingState: m.Gui.IDLE,
          creditsLoadingState: m.Gui.IDLE,
          descriptionLoadingState: m.Gui.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
          modal: {},
        },
        trackLyrics: {
          loadingState: m.Gui.IDLE,
          lyrics: null,
          lyricId: null,
          externalLyricId: null,
          track: null,
          modal: {},
        },
        album: {
          loadingState: m.Gui.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          allTracksUnfinished: !1,
          donations: { loadingState: m.Gui.IDLE, items: [] },
          latestGenreAlbums: { loadingState: m.Gui.IDLE, items: [] },
          otherArtistAlbums: { loadingState: m.Gui.IDLE, items: [] },
          relatedContent: { loadingState: m.Gui.IDLE, items: [] },
        },
        promolanding: {
          loadingState: m.Gui.IDLE,
          items: [],
          meta: null,
          allTracksUnfinished: !1,
          promoCampaign: { loadingState: m.Gui.IDLE, isActive: !1 },
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: y.FY.IDLE,
            canMoveBackward: !1,
            canMoveForward: !1,
            canSpeed: !1,
            canChangeRepeatMode: !0,
            repeatMode: h.zq.NONE,
            quality: g.n.BALANCED,
            canShuffle: !0,
            shuffle: !1,
          },
        },
        artist: {
          loadingState: m.Gui.IDLE,
          meta: null,
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          clips: [],
          fullTracksListSubpage: { loadingState: m.Gui.IDLE },
          albumsSubpage: { loadingState: m.Gui.IDLE },
          concertsSubpage: { loadingState: m.Gui.IDLE },
          similarArtistsSubPage: { loadingState: m.Gui.IDLE },
          familiarInfo: { loadingState: m.Gui.IDLE },
          familiarSubpage: { loadingState: m.Gui.IDLE },
          clipsSubpage: { loadingState: m.Gui.IDLE },
          commonSubPage: {},
          offlineArtist: {
            loadingState: m.Gui.IDLE,
            trackIds: { loadingState: m.Gui.IDLE },
            downloadedTracks: { loadingState: m.Gui.IDLE },
          },
          infoLoadingState: { loadingState: m.Gui.IDLE },
        },
        libraryAllIds: {
          loadingState: m.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        librarySync: {
          loadingState: m.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
          clips: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: y.FY.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: h.zq.NONE,
          quality: g.n.BALANCED,
          canShuffle: !0,
          shuffle: !1,
          areCoresRegistered: !1,
          isVHCoreRegistered: !1,
        },
        playlist: {
          loadingState: m.Gui.IDLE,
          meta: null,
          items: [],
          initialItems: [],
          similarPlaylists: [],
          filters: {
            loadingState: m.Gui.IDLE,
            shouldSendEventOnTabOpened: !0,
            shouldSendEventOnTabLoaded: !0,
          },
          editorFeature: {
            shouldShowDuplicate: !1,
            shouldShowGenre: !1,
            shouldShowMajor: !1,
            colorMajorMap: {},
            duplicate: {},
          },
          search: { loadingState: m.Gui.IDLE, text: "" },
        },
        slides: {
          userSlidesLoadingState: m.Gui.IDLE,
          artistSlidesLoadingState: m.Gui.IDLE,
          podcastSlidesLoadingState: m.Gui.IDLE,
          userItems: [],
          artistItems: [],
          podcastItems: [],
          isMuted: !1,
        },
        vibe: {
          loadingState: m.Gui.IDLE,
          vibeResetLoadingState: m.Gui.IDLE,
          isApplying: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: m.Gui.IDLE,
          results: [],
          historyPage: { loadingState: m.Gui.IDLE, items: [] },
          mixes: { loadingState: m.Gui.IDLE, items: [] },
          landing: {
            loadingState: m.Gui.IDLE,
            tabs: { loadingState: m.Gui.IDLE },
          },
          history: { loadingState: m.Gui.IDLE },
        },
        vibeSettings: { loadingState: m.Gui.IDLE },
        pinsCollection: { loadingState: m.Gui.IDLE, index: {} },
        genre: {
          loadingState: m.Gui.IDLE,
          albumsSubpage: { loadingState: m.Gui.IDLE },
          artistsSubpage: { loadingState: m.Gui.IDLE },
          playlistsSubpage: { loadingState: m.Gui.IDLE },
        },
        genres: { title: null, loadingState: m.Gui.IDLE, items: [] },
        mixes: { loadingState: m.Gui.IDLE, items: [] },
        tag: {
          tagLoadingState: m.Gui.IDLE,
          playlistsLoadingState: m.Gui.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          tracksSubPage: { loadingState: m.Gui.IDLE, items: [] },
          podcastsSubPage: { loadingState: m.Gui.IDLE, items: [] },
        },
        post: { loadingState: m.Gui.IDLE },
        landingBlockEntities: { loadingState: m.Gui.IDLE },
        contextMenuPlaylists: { loadingState: m.Gui.IDLE, items: [] },
        musicHistory: { loadingState: m.Gui.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: m.Gui.IDLE },
        disclaimerModalData: { loadingState: m.Gui.IDLE },
        myMusic: { downloadedTracks: { loadingState: m.Gui.IDLE } },
        trailer: {
          loadingState: m.Gui.IDLE,
          withAnimation: !0,
          shouldAutoStartPlaying: !0,
          shouldSendEventOnTracksShowed: !0,
          modal: {},
          sonataStatusBeforeTrailerStart: y.FY.IDLE,
          isManuallyPaused: !0,
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: y.FY.IDLE,
          },
        },
        communication: { loadingState: m.Gui.IDLE },
        modals: {
          disclaimerModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
          ugcTrackEditModal: { modal: {} },
          popoverOverPlayer: {},
          crackdownModal: {},
          overwrittenExperimentsModal: {},
          buySubscriptionModal: { isOpened: !0 },
          promoLandingBuySubscriptionModal: {},
          clearMemoryModal: {},
          imageSliderModal: { modal: {} },
          artistAboutModal: { loadingState: m.Gui.IDLE, modal: {} },
          discordRpcSettingsModal: {},
          vibeBehaviorEnhancementsSettingsModal: {},
          playerBarEnhancementsSettingsModal: {},
          windowBehaviorSettingsModal: {},
          appUpdatesSettingsModal: {},
          scrobblersSettingsModal: {},
          downloaderSettingsModal: {},
        },
        landing: {
          loadingState: m.Gui.IDLE,
          tabs: { loadingState: m.Gui.IDLE },
        },
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: m.Gui.IDLE },
          playQueue: {},
        },
        fullscreenVideoPlayer: {
          modal: {},
          ids: [],
          loadingState: m.Gui.IDLE,
          sonataStatusBeforeClipStart: y.FY.IDLE,
          withAnimation: !0,
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: y.FY.IDLE,
            canMoveBackward: !1,
            canMoveForward: !1,
          },
        },
        advert: {
          data: null,
          isAdvertPlaying: !0,
          isAdvertShown: !1,
          isAdvertPlaybackCreated: !1,
        },
        ugcUploadCenter: {
          checkProcessingTracksAttempts: 0,
          notifications: {},
        },
        paymentWidgetModal: {
          modal: {},
          target: "",
          serviceSessionId: "",
          tariffOfferName: "",
          status: p.c8.IDLE,
        },
        offers: {
          music: { loadingState: m.Gui.IDLE },
          paywall: { loadingState: m.Gui.IDLE },
        },
        quality: { modal: {} },
        releaseNotes: { modal: {} },
        slam: { networkStatus: {} },
        favoriteTracks: { loadingState: m.Gui.IDLE },
        track: { loadingState: m.Gui.IDLE, withAnimation: !0 },
        familyInvite: {
          info: { loadingState: m.Gui.IDLE },
          acceptanceLoadingState: m.Gui.IDLE,
          modal: {},
          step: v.Le.INFO,
        },
        continueListen: {},
        playlistPersonal: { loadingState: m.Gui.IDLE },
        redAlert: { loadingState: m.Gui.IDLE },
        shareIframe: { modal: {} },
        paywall: { modal: {} },
        downloadMobileApp: { modal: {} },
        advertBanners: {
          banners: {
            topAdvertBanner: {
              type: m.Y_4.EMPTY,
              noAds: !1,
              hasError: !1,
              isShowBanner: !0,
            },
            sideAdvertBanner: {
              type: m.Y_4.EMPTY,
              noAds: !1,
              hasError: !1,
              isShowBanner: !0,
            },
            brandedPlaylistBanner: {
              type: m.Y_4.EMPTY,
              noAds: !1,
              hasError: !1,
              isShowBanner: !0,
            },
          },
        },
        label: {
          loadingState: m.Gui.IDLE,
          albumsSubpage: { loadingState: m.Gui.IDLE, sort: {} },
          artistsSubpage: { loadingState: m.Gui.IDLE },
        },
      };
      var E = a(10280),
        b = a(13181),
        f = a(42579);
      a(37659);
      var P = a(30495),
        I = a(72783),
        k = a(79223),
        C = a(40892);
      let T = d.V5.compose(
          d.V5.model("UpcomingAlbums", {
            items: d.V5.maybeNull(d.V5.array(I.W9)),
          }),
          C.Al,
          C.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = m.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        _ = d.V5.compose(
          d.V5.model("CollectionAlbumsPage", {
            sort: d.V5.maybeNull(k.$4),
            items: d.V5.array(d.V5.maybeNull(I.ug)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requestsCount: d.V5.maybeNull(d.V5.number),
            upcomingAlbums: T,
          }),
          C.Al,
          C.fu,
        )
          .views((e) => {
            let t = {
              get isAlbumsLoading() {
                return (
                  e.isNeededToLoad ||
                  (e.loadingState === m.Gui.PENDING && 0 === e.items.length)
                );
              },
              get isLoading() {
                return (
                  t.isAlbumsLoading ||
                  e.upcomingAlbums.isNeededToLoad ||
                  e.upcomingAlbums.isLoading
                );
              },
              get isUpcomingAlbumsLoading() {
                return (
                  e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading
                );
              },
              get isUpcomingAlbumsEmpty() {
                return (
                  !t.isUpcomingAlbumsLoading &&
                  (!e.upcomingAlbums.items ||
                    0 === e.upcomingAlbums.items.length)
                );
              },
              get isAlbumsEmpty() {
                var a;
                return (
                  !t.isAlbumsLoading &&
                  (!e.items ||
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) === 0)
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sortBy: l,
                  sortOrder: s,
                  metaType: n,
                } = t,
                { usersResource: o, modelActionsLogger: u } = (0, d.dU)(e);
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i),
                  (e.sort = null),
                  (0, k.VT)(l) &&
                    (0, k.io)(s) &&
                    (e.sort = (0, d.pj)({ sortBy: l, sortOrder: s }));
                try {
                  var c, g, h;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield o.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: r,
                      sortBy: l,
                      sortOrder: s,
                      metaType: n,
                    }),
                    u = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, d.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let y =
                    null !==
                      (g =
                        null === (c = t.albums) || void 0 === c
                          ? void 0
                          : c.map((e) => {
                              let { album: t } = e;
                              return (0, I.ym)(t);
                            })) && void 0 !== g
                      ? g
                      : [];
                  (0, m.AG_)({
                    items: e.items,
                    mappedRawItems: y,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = u),
                    (e.requestsCount =
                      (null !== (h = e.requestsCount) && void 0 !== h ? h : 0) +
                      1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  u.error(t), (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            getPresaves: (0, d.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e);
              if (!e.upcomingAlbums.isLoading)
                try {
                  var l;
                  e.upcomingAlbums.loadingState = m.Gui.PENDING;
                  let t = yield i.getPresaves({
                    userId: a,
                    includeReleased: !1,
                    includeUpcoming: !0,
                  });
                  (e.upcomingAlbums.items = (0, d.pj)(
                    null === (l = t.upcomingAlbums) || void 0 === l
                      ? void 0
                      : l.map(I.wq),
                  )),
                    e.upcomingAlbumsLoadingState !== m.Gui.IDLE &&
                      (e.upcomingAlbums.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  r.error(t),
                    e.upcomingAlbums.isNeededToLoad ||
                      (e.upcomingAlbums.loadingState = m.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                e.upcomingAlbums.reset(),
                e.destroyItems([e.items, e.sort, e.pager]);
            },
          }));
      var N = a(55051),
        A = a(64353);
      let D = d.V5.compose(
          d.V5.model("TopArtists", { items: d.V5.array(N.DT) }),
          C.Al,
          C.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = m.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        L = d.V5.compose(
          d.V5.model("CollectionArtistsPage", {
            sort: d.V5.maybeNull(k.$4),
            items: d.V5.array(d.V5.maybeNull(A.Go)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
            topArtists: D,
          }),
          C.Al,
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isLoadingTopArtists() {
              return e.topArtists.isNeededToLoad || e.topArtists.isLoading;
            },
          }))
          .actions((e) => ({
            getDataTopArtists: (0, d.ls)(function* () {
              let { personalResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              try {
                var i, r;
                e.topArtists.loadingState = m.Gui.PENDING;
                let a = yield t.getTopArtists();
                (e.topArtists.items = (0, d.pj)(
                  null !==
                    (r =
                      null === (i = a.artists) || void 0 === i
                        ? void 0
                        : i.map((e) => (0, N.iU)(e))) && void 0 !== r
                    ? r
                    : [],
                )),
                  (e.topArtists.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                a.error(t), (e.topArtists.loadingState = m.Gui.REJECT);
              }
            }),
            getData: (0, d.ls)(function* (t) {
              let {
                  userId: a,
                  page: i = 0,
                  pageSize: r = 20,
                  sortBy: l,
                  sortOrder: s,
                } = t,
                { usersResource: n, modelActionsLogger: o } = (0, d.dU)(e);
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i),
                  (e.sort = null),
                  (0, k.VT)(l) &&
                    (0, k.io)(s) &&
                    (e.sort = (0, d.pj)({ sortBy: l, sortOrder: s }));
                try {
                  var u, c, g;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield n.getLikedArtists({
                      userId: a,
                      page: i,
                      pageSize: r,
                      sortBy: l,
                      sortOrder: s,
                    }),
                    o = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, d.pj)(
                      Array.from({ length: o.total }, () => null),
                    )),
                    (e.loadingState = m.Gui.RESOLVE);
                  let h =
                    null !==
                      (c =
                        null === (u = t.artists) || void 0 === u
                          ? void 0
                          : u.map(A.d)) && void 0 !== c
                      ? c
                      : [];
                  (0, m.AG_)({
                    items: e.items,
                    mappedRawItems: h,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = o),
                    (e.requests =
                      (null !== (g = e.requests) && void 0 !== g ? g : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  o.error(t), (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                e.topArtists.reset(),
                e.destroyItems([e.items, e.sort, e.pager]);
            },
          }));
      var R = a(61039);
      let x = d.V5.compose(
          d.V5.model("CollectionClipsPageWillLike", {
            clips: d.V5.maybeNull(d.V5.array(R.x$)),
          }),
          C.fu,
          C.Al,
        )
          .views((e) => ({
            get isShimmerVisible() {
              return e.isLoading || e.isRejected;
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { clipsResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              try {
                e.loadingState = m.Gui.PENDING;
                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                (e.clips = (0, d.pj)(a.clips.map(R.et))),
                  e.loadingState !== m.Gui.IDLE &&
                    (e.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                a.error(t),
                  e.loadingState !== m.Gui.IDLE &&
                    (e.loadingState = m.Gui.REJECT);
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE), e.destroyItems([e.clips]);
            },
          })),
        w = d.V5.compose(
          d.V5.model("CollectionClipsPage", {
            items: d.V5.array(d.V5.maybeNull(R.x$)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            clipsWillLike: x,
          }),
          C.fu,
          C.Al,
        )
          .views((e) => ({
            get isEmpty() {
              return e.isResolved && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            setInitialShimmer() {
              e.items = (0, d.pj)(Array.from({ length: 20 }, () => null));
            },
            getData: (0, d.ls)(function* (t) {
              var a;
              let { userId: i, page: r = 0, pageSize: l = 20 } = t,
                { usersResource: s, modelActionsLogger: n } = (0, d.dU)(e);
              if (
                !(
                  (e.pager &&
                    e.items.length >=
                      (null === (a = e.pager) || void 0 === a
                        ? void 0
                        : a.total)) ||
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has(r.toString())) ||
                  e.alreadyRequestedPages.has(r.toString())
                )
              ) {
                "number" == typeof r &&
                  e.alreadyRequestedPages.set(r.toString(), r);
                try {
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set(r.toString(), r);
                  let t = yield s.getLikedClips({
                      userId: i,
                      page: r,
                      pageSize: l,
                    }),
                    a = { page: r, perPage: l, total: t.pager.total };
                  if (t.clips) {
                    let i = t.clips.map(R.et);
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: i,
                      page: r,
                      pageSize: l,
                    }),
                      (e.items = (0, d.pj)(e.items.slice(0, a.total)));
                  }
                  (e.pager = a), (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  n.error(t), (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete(r.toString());
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                e.destroyItems([e.items]),
                e.clipsWillLike.reset();
            },
          })),
        G = d.V5.compose(
          d.V5.model("CollectionNonMusicPage", {
            items: d.V5.array(d.V5.maybeNull(I.ug)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requestsCount: d.V5.maybeNull(d.V5.number),
          }),
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return (
                e.isNeededToLoad ||
                (e.loadingState === m.Gui.PENDING && 0 === e.items.length)
              );
            },
            get isEmptyItems() {
              var t;
              return !!(
                !(null === (t = e.items) || void 0 === t ? void 0 : t.length) &&
                e.requestsCount
              );
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: r = 20, metaType: l } = t,
                { usersResource: s, modelActionsLogger: n } = (0, d.dU)(e);
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var o, u, c;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: r,
                      metaType: l,
                    }),
                    n = { page: i, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, d.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let g =
                    null !==
                      (u =
                        null === (o = t.albums) || void 0 === o
                          ? void 0
                          : o.map((e) => {
                              let { album: t } = e;
                              return (0, I.ym)(t);
                            })) && void 0 !== u
                      ? u
                      : [];
                  (0, m.AG_)({
                    items: e.items,
                    mappedRawItems: g,
                    page: i,
                    pageSize: r,
                  }),
                    (e.pager = n),
                    (e.requestsCount =
                      (null !== (c = e.requestsCount) && void 0 !== c ? c : 0) +
                      1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  n.error(t), (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                (e.items = (0, d.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var V = a(7797),
        O = a(10979);
      let M = d.V5.compose(
          d.V5.model("CollectionPlaylistsCreatedPage", {
            sort: d.V5.maybeNull(k.$4),
            items: d.V5.array(d.V5.maybeNull(O.$h)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            kinds: d.V5.array(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
          }),
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isEmpty() {
              return e.isResolved && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, d.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, d.dU)(e);
                (a = yield i.getPlaylistsKinds({
                  userId: t,
                  addPlaylistWithLikes: !0,
                })),
                  (e.kinds = (0, d.pj)(a));
              }),
              getData: (0, d.ls)(function* (a) {
                let {
                    userId: i,
                    page: r = 0,
                    pageSize: l = 20,
                    withLikesCount: s,
                  } = a,
                  { usersResource: n, modelActionsLogger: o } = (0, d.dU)(e);
                if (
                  !(
                    (e.loadingState === m.Gui.PENDING &&
                      e.pendingPages.has("".concat(r))) ||
                    e.alreadyRequestedPages.has("".concat(r))
                  )
                ) {
                  "number" == typeof r &&
                    e.alreadyRequestedPages.set("".concat(r), r);
                  try {
                    var u;
                    e.isResolved || (e.loadingState = m.Gui.PENDING),
                      e.pendingPages.set("".concat(r), r),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = r * l,
                      o = e.kinds.slice(a, a + l),
                      c = yield n.getPlaylistsByKinds({
                        userId: i,
                        kinds: o,
                        withLikesCount: s,
                        withTracks: !0,
                      });
                    e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1;
                    let g = { page: r, perPage: l, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, d.pj)(
                        Array.from({ length: g.total }, () => null),
                      ));
                    let h = c.map(V.PB);
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: h,
                      page: r,
                      pageSize: l,
                    }),
                      (e.pager = g),
                      (e.loadingState = m.Gui.RESOLVE);
                  } catch (t) {
                    o.error(t), (e.loadingState = m.Gui.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(r));
                  }
                }
              }),
              reset() {
                (e.loadingState = m.Gui.IDLE),
                  (e.sort = null),
                  (e.items = (0, d.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, d.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        F = d.V5.compose(
          d.V5.model("CollectionPlaylistsLikedPage", {
            sort: d.V5.maybeNull(k.$4),
            items: d.V5.array(d.V5.maybeNull(O.Cd)),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
          }),
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isEmpty() {
              return e.isResolved && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: r = 20,
                sortBy: l,
                sortOrder: s,
                playlistMetaType: n,
                withTracks: o,
              } = t;
              if (
                (e.loadingState === m.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: u, modelActionsLogger: c } = (0, d.dU)(e);
              (e.sort = null),
                (0, k.VT)(l) &&
                  (0, k.io)(s) &&
                  (e.sort = (0, d.pj)({ sortBy: l, sortOrder: s }));
              try {
                var g;
                (e.loadingState = m.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: c } = yield u.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: r,
                    sortBy: l,
                    sortOrder: s,
                    playlistMetaType: n,
                    withTracks: o,
                  },
                );
                (e.requests =
                  (null !== (g = e.requests) && void 0 !== g ? g : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, d.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                let h = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, O.PV)(t);
                });
                (0, m.AG_)({
                  items: e.items,
                  mappedRawItems: h,
                  page: i,
                  pageSize: r,
                }),
                  (e.pager = c),
                  (e.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                c.error(t),
                  "number" == typeof i &&
                    e.alreadyRequestedPages.delete("".concat(i)),
                  (e.requests =
                    "number" == typeof e.requests ? e.requests - 1 : 0),
                  (e.loadingState = m.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                (e.sort = null),
                (e.items = (0, d.pj)([])),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.requests = null);
            },
          }));
      var U = a(1150);
      let j = (e) =>
          (0, d.pj)({
            type: e.type,
            track: (0, U.Vt)(e.track),
            album: e.album && (0, I.ym)(e.album),
          }),
        B = (e) => e.filter((e) => e.track).map((e) => (0, U.Vt)(e.track)),
        q = (e) =>
          (0, d.pj)({
            type: e.type,
            album: e.album && (0, I.ym)(e.album),
            playlist: e.playlist && (0, V.Q9)(e.playlist),
            track: (0, U.Vt)(e.track),
          }),
        W = d.V5.model("ShelfLikedItem", {
          type: d.V5.string,
          track: U.le,
          album: d.V5.maybe(I.ug),
        });
      d.V5.model("ShelfNewEpisodesItem", {
        type: d.V5.string,
        playlist: d.V5.maybe(V.Nn),
        track: U.le,
      });
      let Y = d.V5.model("ShelfRecentlyPlayedItem", {
          type: d.V5.string,
          album: d.V5.maybe(I.ug),
          playlist: d.V5.maybe(V.d2),
          track: U.le,
        }),
        K = d.V5.compose(
          d.V5.model("CollectionShelfLiked", {
            title: d.V5.maybeNull(d.V5.string),
            typeForFrom: d.V5.maybeNull(d.V5.string),
            entities: d.V5.maybeNull(d.V5.array(W)),
            pager: d.V5.maybeNull(C.Vn),
          }),
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isEmpty() {
              var t;
              return (
                e.isResolved &&
                (null === (t = e.entities) || void 0 === t
                  ? void 0
                  : t.length) === 0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              if (e.loadingState !== m.Gui.PENDING)
                try {
                  var i, r;
                  e.loadingState = m.Gui.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (r = a.pager) && void 0 !== r ? r : null),
                    (e.entities = (0, d.pj)(
                      a.entities ? a.entities.map(j) : [],
                    )),
                    (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = m.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = m.Gui.IDLE);
            },
          })),
        z = d.V5.compose(
          d.V5.model("CollectionShelfNewEpisodes", {
            title: d.V5.maybeNull(d.V5.string),
            typeForFrom: d.V5.maybeNull(d.V5.string),
            playlist: d.V5.maybeNull(V.Nn),
            tracks: d.V5.maybeNull(d.V5.array(U.le)),
          }),
          C.fu,
        )
          .views((e) => ({
            get withPlaylist() {
              return !!(
                e.playlist &&
                e.playlist.kind &&
                e.playlist.isAvailable &&
                e.playlist.uuid
              );
            },
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isEmpty() {
              return e.isResolved && (!e.tracks || 0 === e.tracks.length);
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              if (e.loadingState !== m.Gui.PENDING)
                try {
                  var i;
                  e.loadingState = m.Gui.PENDING;
                  let a = yield t.getNewEpisodes();
                  e.title = a.title;
                  let r = a.blocks[0];
                  (null == r ? void 0 : r.typeForFrom) &&
                    (e.typeForFrom = r.typeForFrom),
                    (null == r
                      ? void 0
                      : null === (i = r.entities[0]) || void 0 === i
                        ? void 0
                        : i.playlist) &&
                      (e.playlist = (0, V.Q9)(r.entities[0].playlist)),
                    (null == r ? void 0 : r.entities) &&
                      (e.tracks = (0, d.pj)(B(r.entities))),
                    (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = m.Gui.REJECT);
                }
            }),
            reset() {
              (e.title = null),
                (e.playlist = null),
                (e.typeForFrom = null),
                (e.tracks = null),
                (e.loadingState = m.Gui.IDLE);
            },
          })),
        H = d.V5.compose(
          d.V5.model("CollectionShelfRecentlyPlayed", {
            title: d.V5.maybeNull(d.V5.string),
            typeForFrom: d.V5.maybeNull(d.V5.string),
            entities: d.V5.maybeNull(d.V5.array(Y)),
            pager: d.V5.maybeNull(C.Vn),
          }),
          C.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
            },
            get isEmpty() {
              return !!(e.isResolved && e.entities && 0 === e.entities.length);
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              if (e.loadingState !== m.Gui.PENDING)
                try {
                  var i, r;
                  e.loadingState = m.Gui.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (r = a.pager) && void 0 !== r ? r : null),
                    (e.entities = (0, d.pj)(a.entities.map(q))),
                    (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = m.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = m.Gui.IDLE);
            },
          })),
        Q = d.V5.model("CollectionShelfPage", {
          recentlyPlayed: H,
          newEpisodes: z,
          liked: K,
        })
          .views((e) => ({
            get isLoading() {
              return e.recentlyPlayed.isLoading && e.liked.isLoading;
            },
            get isRejected() {
              return e.recentlyPlayed.isRejected && e.liked.isRejected;
            },
            get isResolved() {
              return e.recentlyPlayed.isResolved && e.liked.isResolved;
            },
            get isIdle() {
              return (
                e.recentlyPlayed.loadingState === m.Gui.IDLE &&
                e.liked.loadingState === m.Gui.IDLE
              );
            },
            get hasRecentlyPlayed() {
              var t;
              return (
                e.recentlyPlayed.isLoading ||
                ((null === (t = e.recentlyPlayed.entities) || void 0 === t
                  ? void 0
                  : t.length) || 0) > 0
              );
            },
            get hasLiked() {
              var a;
              return (
                e.liked.isLoading ||
                ((null === (a = e.liked.entities) || void 0 === a
                  ? void 0
                  : a.length) || 0) > 0
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.recentlyPlayed.reset(), e.liked.reset();
            },
          })),
        J = d.V5.compose(
          d.V5.model("CollectionDislikesPageArtists", {
            items: d.V5.maybeNull(d.V5.array(A.Go)),
          }),
          C.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
              },
              get isEmpty() {
                var a;
                return (
                  !t.isLoading &&
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 0
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, d.dU)(e);
              if (!(0, d.fh)(e)) return null;
              let { user: i } = (0, d.yj)(e);
              if (e.loadingState === m.Gui.PENDING) return null;
              if (((e.loadingState = m.Gui.PENDING), i.account.data.uid))
                try {
                  let a = yield t.getDislikedArtists({
                    userId: i.account.data.uid,
                  });
                  return (
                    (e.items = (0, d.pj)((a || []).map(A.d))),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE),
                    a
                  );
                } catch (t) {
                  a.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                }
              return (e.loadingState = m.Gui.REJECT), null;
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE), (e.items = null);
            },
          }));
      var X = a(15186),
        Z = a(54306);
      let $ = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return String(null == a ? void 0 : a.id);
          }),
        ee = (e, t, a) => {
          let i = [];
          for (let s = t; s <= a; s++) {
            var r, l;
            ((null === (r = e[s]) || void 0 === r ? void 0 : r.loadingState) ===
              m.Gui.IDLE ||
              (null === (l = e[s]) || void 0 === l
                ? void 0
                : l.loadingState) === m.Gui.REJECT) &&
              i.push(s);
          }
          return i;
        },
        et = d.V5.model("CollectionDislikesPageTracksItem", {
          id: d.V5.string,
          loadingState: d.V5.enumeration(Object.values(m.Gui)),
          data: d.V5.maybeNull(U.le),
        }),
        ea = d.V5.compose(
          d.V5.model("CollectionDislikesPageTracks", {
            items: d.V5.maybeNull(d.V5.array(et)),
          }),
          C.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === m.Gui.PENDING;
              },
              get isEmpty() {
                var a;
                return (
                  !t.isLoading &&
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.length) === 0
                );
              },
              get sonataEntitiesData() {
                var i, r;
                return null !==
                  (r =
                    null === (i = e.items) || void 0 === i
                      ? void 0
                      : i.map((e) => (0, Z.RN)(e.id))) && void 0 !== r
                  ? r
                  : [];
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, d.dU)(e),
                { user: i } = (0, d.yj)(e);
              if (i.account.data.uid && e.loadingState !== m.Gui.PENDING) {
                e.loadingState = m.Gui.PENDING;
                try {
                  let {
                      library: { tracks: a },
                    } = yield t.getDislikedTracks({
                      userId: i.account.data.uid,
                    }),
                    r = a.map((e) => {
                      let { id: t, albumId: a } = e;
                      return {
                        id: String((0, X.i)(t, a)),
                        loadingState: m.Gui.IDLE,
                      };
                    });
                  (e.items = (0, d.pj)(r)), (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                }
              }
            }),
            getTracksByRange: (0, d.ls)(function* (t, a) {
              var i;
              let { tracksResource: r, modelActionsLogger: l } = (0, d.dU)(e);
              if (!(null === (i = e.items) || void 0 === i ? void 0 : i.length))
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
              let s = ee(e.items, t, a);
              try {
                let t = $(e.items, s);
                if (!t.length) return null;
                s.forEach((t) => {
                  var a;
                  let i =
                    null === (a = e.items) || void 0 === a ? void 0 : a[t];
                  i && (i.loadingState = m.Gui.PENDING);
                });
                let a = yield r.getTracksMeta({
                  trackIds: t,
                  withProgress: !0,
                });
                s.forEach((t, i) => {
                  var r;
                  let l = null == a ? void 0 : a[i];
                  (null === (r = e.items) || void 0 === r ? void 0 : r[t]) &&
                    l &&
                    (e.items[t] = {
                      id: String(l.id),
                      data: (0, U.Vt)(l),
                      loadingState: m.Gui.RESOLVE,
                    });
                });
              } catch (t) {
                l.error(t),
                  s.forEach((t) => {
                    var a;
                    let i =
                      null === (a = e.items) || void 0 === a ? void 0 : a[t];
                    i && (i.loadingState = m.Gui.REJECT);
                  });
              }
              return null;
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE), (e.items = null);
            },
          })),
        ei = d.V5.model("CollectionDislikesPage", { artists: J, tracks: ea })
          .views((e) => ({
            get isNeededToLoad() {
              return e.tracks.isNeededToLoad && e.artists.isNeededToLoad;
            },
            get isLoading() {
              return e.tracks.isLoading && e.artists.isLoading;
            },
            get isResolved() {
              return e.tracks.isResolved && e.artists.isResolved;
            },
          }))
          .actions((e) => ({
            reset() {
              e.artists.reset(), e.tracks.reset();
            },
          }));
      var er = a(91854);
      let el = d.V5.compose(
          d.V5.model("CollectionKidsAlbumsPage", {
            items: d.V5.maybeNull(d.V5.array(d.V5.maybeNull(I.ug))),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => {
            let t = {
              get isShimmerVisible() {
                return e.isLoading || e.isRejected;
              },
              get shouldShowContent() {
                return t.isShimmerVisible || t.loadedItems.length > 0;
              },
              get loadedItems() {
                var a, i;
                return null !==
                  (i =
                    null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.filter((e) => null !== e)) && void 0 !== i
                  ? i
                  : [];
              },
              get isEmpty() {
                return e.isResolved && (!e.pager || 0 === e.pager.total);
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { pageSize: a = er.O, page: i = 0 } = t,
                { landingBlocksResource: r, modelActionsLogger: l } = (0, d.dU)(
                  e,
                );
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var s;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getCollectionKidsAlbumsLiked({
                      page: i,
                      pageSize: a,
                    }),
                    l = { page: i, perPage: a, total: t.pager.total };
                  (e.items && 0 !== e.items.length) ||
                    (e.items = (0, d.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let n = t.items.map((e) => (0, P.A5)(e.data).data);
                  e.items &&
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: n,
                      page: i,
                      pageSize: a,
                    }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.destroyItems([e.pager, e.items]),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.requests = null);
            },
          })),
        es = d.V5.compose(
          d.V5.model("CollectionKidsPlaylistsPage", {
            items: d.V5.maybeNull(d.V5.array(d.V5.maybeNull(V.d2))),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => {
            let t = {
              get isShimmerVisible() {
                return e.isLoading || e.isRejected;
              },
              get shouldShowContent() {
                return t.isShimmerVisible || t.loadedItems.length > 0;
              },
              get loadedItems() {
                var a, i;
                return null !==
                  (i =
                    null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.filter((e) => null !== e)) && void 0 !== i
                  ? i
                  : [];
              },
              get isEmpty() {
                return e.isResolved && (!e.pager || 0 === e.pager.total);
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { pageSize: a = er.O, page: i = 0 } = t,
                { landingBlocksResource: r, modelActionsLogger: l } = (0, d.dU)(
                  e,
                );
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var s;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getCollectionKidsPlaylistsLiked({
                      page: i,
                      pageSize: a,
                    }),
                    l = { page: i, perPage: a, total: t.pager.total };
                  (e.items && 0 !== e.items.length) ||
                    (e.items = (0, d.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let n = t.items.map((e) => (0, P.AX)(e.data).data);
                  e.items &&
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: n,
                      page: i,
                      pageSize: a,
                    }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.destroyItems([e.pager, e.items]),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.requests = null);
            },
          })),
        en = d.V5.compose(
          d.V5.model("CollectionKidsTracksPage", {
            items: d.V5.maybeNull(d.V5.array(d.V5.maybeNull(U.le))),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => {
            let t = {
              get isShimmerVisible() {
                return e.isLoading || e.isRejected;
              },
              get shouldShowContent() {
                return t.isShimmerVisible || t.loadedItems.length > 0;
              },
              get loadedItems() {
                var a, i;
                return null !==
                  (i =
                    null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.filter((e) => null !== e)) && void 0 !== i
                  ? i
                  : [];
              },
              get sonataEntitiesData() {
                return t.loadedItems.map(U.E5);
              },
              get isEmpty() {
                return e.isResolved && (!e.pager || 0 === e.pager.total);
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { pageSize: a = er.O, page: i = 0 } = t,
                { landingBlocksResource: r, modelActionsLogger: l } = (0, d.dU)(
                  e,
                );
              if (
                !(
                  (e.loadingState === m.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var s;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getCollectionKidsTracksLiked({
                      page: i,
                      pageSize: a,
                    }),
                    l = { page: i, perPage: a, total: t.pager.total };
                  (e.items && 0 !== e.items.length) ||
                    (e.items = (0, d.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let n = t.items.map(P.Oy).map((e) => e.data);
                  e.items &&
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: n,
                      page: i,
                      pageSize: a,
                    }),
                    (e.pager = l),
                    (e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.destroyItems([e.pager, e.items]),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.requests = null);
            },
          })),
        eo = d.V5.model("CollectionKidsPage", {
          albums: el,
          playlists: es,
          tracks: en,
        })
          .views((e) => ({
            get isNeededToLoad() {
              return (
                e.albums.isNeededToLoad &&
                e.playlists.isNeededToLoad &&
                e.tracks.isNeededToLoad
              );
            },
            get isRejected() {
              return (
                e.albums.isRejected &&
                e.playlists.isRejected &&
                e.tracks.isRejected
              );
            },
            get isResolved() {
              return (
                e.albums.isResolved &&
                e.playlists.isResolved &&
                e.tracks.isResolved
              );
            },
            get shouldShowContent() {
              return (
                e.albums.shouldShowContent ||
                e.playlists.shouldShowContent ||
                e.tracks.shouldShowContent
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.albums.reset(), e.playlists.reset(), e.tracks.reset();
            },
          })),
        ed = d.V5.compose(
          d.V5.model("CollectionShelfLikedPage", {
            items: d.V5.maybeNull(d.V5.array(d.V5.maybeNull(W))),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
            typeForFrom: d.V5.maybeNull(d.V5.string),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => ({
            get isShimmerVisible() {
              return e.isLoading || e.isRejected;
            },
            get isEmpty() {
              return e.isResolved && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { pageSize: a = er.O, page: i = 0 } = t,
                { nonMusicResource: r, modelActionsLogger: l } = (0, d.dU)(e);
              if (
                !(
                  (e.isLoading && e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var s, n, o, u, c;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getShelfLiked({ page: i, pageSize: a }),
                    l = {
                      page: i,
                      perPage: a,
                      total:
                        null !==
                          (o =
                            null === (s = t.pager) || void 0 === s
                              ? void 0
                              : s.total) && void 0 !== o
                          ? o
                          : 0,
                    };
                  (e.items && 0 !== e.items.length) ||
                    (e.items = (0, d.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let g =
                    (null === (n = t.entities) || void 0 === n
                      ? void 0
                      : n.map(j)) || [];
                  e.items &&
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: g,
                      page: i,
                      pageSize: a,
                    }),
                    (e.pager = l),
                    (e.typeForFrom =
                      null !== (u = t.typeForFrom) && void 0 !== u ? u : null),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.destroyItems([e.pager, e.items]),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.requests = null);
            },
          })),
        eu = d.V5.compose(
          d.V5.model("CollectionShelfRecentlyPlayedPage", {
            items: d.V5.maybeNull(d.V5.array(d.V5.maybeNull(Y))),
            pager: d.V5.maybeNull(C.Vn),
            alreadyRequestedPages: d.V5.map(d.V5.number),
            pendingPages: d.V5.map(d.V5.number),
            requests: d.V5.maybeNull(d.V5.number),
            typeForFrom: d.V5.maybeNull(d.V5.string),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => ({
            get isShimmerVisible() {
              return e.isLoading || e.isRejected;
            },
            get isEmpty() {
              return e.isResolved && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* (t) {
              let { pageSize: a = er.O, page: i = 0 } = t,
                { nonMusicResource: r, modelActionsLogger: l } = (0, d.dU)(e);
              if (
                !(
                  (e.isLoading && e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var s, n, o, u, c;
                  (e.loadingState = m.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getShelfRecentlyPlayed({
                      page: i,
                      pageSize: a,
                    }),
                    l = {
                      page: i,
                      perPage: a,
                      total:
                        null !==
                          (o =
                            null === (s = t.pager) || void 0 === s
                              ? void 0
                              : s.total) && void 0 !== o
                          ? o
                          : 0,
                    };
                  (e.items && 0 !== e.items.length) ||
                    (e.items = (0, d.pj)(
                      Array.from({ length: l.total }, () => null),
                    ));
                  let g =
                    (null === (n = t.entities) || void 0 === n
                      ? void 0
                      : n.map(q)) || [];
                  e.items &&
                    (0, m.AG_)({
                      items: e.items,
                      mappedRawItems: g,
                      page: i,
                      pageSize: a,
                    }),
                    (e.pager = l),
                    (e.typeForFrom =
                      null !== (u = t.typeForFrom) && void 0 !== u ? u : null),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  l.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = m.Gui.IDLE),
                e.destroyItems([e.pager, e.items]),
                e.pendingPages.clear(),
                e.alreadyRequestedPages.clear(),
                (e.requests = null);
            },
          })),
        ec = d.V5.model("CollectionPage", {
          landing: P.d5,
          albums: _,
          playlistsLiked: F,
          playlistsCreated: M,
          artists: L,
          shelf: Q,
          shelfRecentlyPlayed: eu,
          shelfLiked: ed,
          nonMusicLiked: G,
          dislikes: ei,
          kids: eo,
          clips: w,
        });
      a(31699),
        a(32044),
        a(70465),
        a(29296),
        a(72616),
        a(49377),
        a(71736),
        a(13013),
        a(82596),
        a(11679),
        a(55519),
        a(68446),
        a(43972),
        a(15122),
        a(75503),
        a(96162),
        a(98652),
        a(23755),
        a(7562);
      var em = a(62726),
        eg = a(71011);
      let eh = d.V5.compose(
        d.V5.model("FavoriteTracksPage", {
          playlistUuid: d.V5.maybeNull(d.V5.string),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
        }),
        C.fu,
      )
        .views((e) => ({
          get playlistUrl() {
            if (!e.playlistUuid) return;
            return "/playlists/".concat(e.playlistUuid);
          },
        }))
        .actions((e) => ({
          getPlaylistUrl: (0, d.ls)(function* () {
            let { landingResource: t, modelActionsLogger: a } = (0, d.dU)(e);
            if (e.loadingState !== m.Gui.PENDING)
              try {
                e.loadingState = m.Gui.PENDING;
                let a = yield t.getBlock({
                  source: {
                    uri: "/landing/block/collection/playlist-with-likes",
                    countWeb: 8,
                  },
                  type: eg.g.COLLECTION_PLAYLIST_WITH_LIKES,
                });
                (e.playlistUuid = a.playlist.playlistUuid),
                  e.loadingState !== m.Gui.IDLE &&
                    (e.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                a.error(t),
                  t instanceof em.du &&
                    (t.statusCode === em.CN.NOT_FOUND ||
                      t.statusCode === em.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = em.CN.NOT_FOUND),
                  e.loadingState !== m.Gui.IDLE &&
                    (e.loadingState = m.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = m.Gui.IDLE), (e.playlistUuid = null);
          },
        }));
      a(76459);
      var ey = a(26172),
        ev = a(89520),
        ep = a(54105),
        eS = a(76890);
      let eE = d.V5.model("MainPage", { landing: P.d5 });
      a(96454);
      var eb = a(20188),
        ef = a(55681),
        eP = a(9152);
      let eI = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        ek = (e) => {
          switch (e.type) {
            case eb.E.ALBUM:
              return "".concat(e.type, "_").concat((0, ef.un)(e));
            case eb.E.TRACK:
              return "".concat(e.type, "_").concat((0, ef.LV)(e));
            case eb.E.WAVE:
              return "".concat(e.type, "_").concat((0, ef.R3)(e));
            case eb.E.PLAYLIST:
              return "".concat(e.type, "_").concat((0, ef.aQ)(e));
            case eb.E.ARTIST:
              return "".concat(e.type, "_").concat((0, ef.H5)(e));
          }
        },
        eC = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let l of e.historyTabs) {
            var i, r;
            if (a > 1e3) break;
            let e = { ...l, items: [] };
            for (let t of null !== (i = l.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (r = e.items) || void 0 === r || r.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        eT = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case eb.E.ARTIST:
                case eb.E.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case eb.E.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case eb.E.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case eb.E.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        e_ = d.V5.compose(
          d.V5.model("MusicHistoryPage", {
            indexesMap: d.V5.map(d.V5.number),
            items: d.V5.maybeNull(d.V5.array(ef.Mf)),
            datesMap: d.V5.map(d.V5.boolean),
            tabs: d.V5.maybeNull(d.V5.array(ef.t9)),
          }),
          C.fu,
        )
          .views((e) => {
            let t = {
              get isEmpty() {
                var a;
                return (
                  (e.isResolved || e.isRejected) &&
                  (null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.length) === 0
                );
              },
              get isShimmerVisible() {
                return e.isNeededToLoad || e.isLoading || e.isRejected;
              },
              get isShimmerActive() {
                return e.isLoading;
              },
              getStartAndEndIndexes(t) {
                var a, i;
                let r = t,
                  l = t + 1;
                return (
                  (null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(t - 25 + 1, t).some((e) => !e.isResolved)) &&
                    (r = t - 25 + 1),
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.slice(t, t + 25).some((e) => !e.isResolved)) &&
                    (l = t + 25),
                  [r, l]
                );
              },
              getItemsToLoad(a) {
                var i, r;
                let [l, s] = t.getStartAndEndIndexes(a);
                return null !==
                  (r =
                    null === (i = e.items) || void 0 === i
                      ? void 0
                      : i.slice(l, s).filter((e) => !e.isResolved)) &&
                  void 0 !== r
                  ? r
                  : [];
              },
              isInObservationRange(t) {
                var a;
                return (
                  (0 !== t && t % 25 == 0) ||
                  (e.items &&
                    t ===
                      (null === (a = e.items) || void 0 === a
                        ? void 0
                        : a.length) -
                        1)
                );
              },
              get dates() {
                var i, r;
                return null !==
                  (r =
                    null === (i = e.tabs) || void 0 === i
                      ? void 0
                      : i.map((e) => e.date)) && void 0 !== r
                  ? r
                  : [];
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, d.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var r;
                      e.datesMap.set(t.date, !1),
                        null === (r = t.blocks) ||
                          void 0 === r ||
                          r.forEach((t, r) => {
                            var l;
                            let s = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(r, "_").concat(s),
                              a,
                            ),
                              null === (l = e.items) ||
                                void 0 === l ||
                                l.push({
                                  id: s,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: r,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? m.Gui.RESOLVE : m.Gui.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, l) => {
                                var s;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(r, "_")
                                    .concat(l, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (s = e.items) ||
                                    void 0 === s ||
                                    s.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: r,
                                      trackIndex: l,
                                      loadingState:
                                        a < 25 ? m.Gui.RESOLVE : m.Gui.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, r, l, s;
                let { tabIndex: n, blockIndex: o, trackIndex: d } = t,
                  { fullModel: u } = a.data;
                if (null === d) return;
                let c =
                  null === (s = e.tabs) || void 0 === s
                    ? void 0
                    : null === (l = s[n]) || void 0 === l
                      ? void 0
                      : null === (r = l.blocks) || void 0 === r
                        ? void 0
                        : null === (i = r[o]) || void 0 === i
                          ? void 0
                          : i.tracks[d];
                c &&
                  ((c.data = (0, U.Vt)(u)), (c.loadingState = m.Gui.RESOLVE));
              },
              setAlbum(t, a) {
                var i, r, l;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (l = e.tabs) || void 0 === l
                      ? void 0
                      : null === (r = l[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, ef.Ql)(d) &&
                  ((d.meta = (0, I.cO)({ album: o.album, artists: o.artists })),
                  (d.loadingState = m.Gui.RESOLVE));
              },
              setArtist(t, a) {
                var i, r, l;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (l = e.tabs) || void 0 === l
                      ? void 0
                      : null === (r = l[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, ef.DF)(d) &&
                  ((d.meta = (0, A.tR)({ artist: o.artist })),
                  (d.loadingState = m.Gui.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, r, l;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (l = e.tabs) || void 0 === l
                      ? void 0
                      : null === (r = l[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, ef.v3)(d) &&
                  ((d.meta = {
                    ...(0, V.RE)({ playlist: o.playlist }),
                    tracksCount: o.tracksCount,
                  }),
                  (d.loadingState = m.Gui.RESOLVE));
              },
              setVibe(t, a) {
                var i, r, l;
                let { tabIndex: s, blockIndex: n } = t,
                  { fullModel: o } = a.data,
                  d =
                    null === (l = e.tabs) || void 0 === l
                      ? void 0
                      : null === (r = l[s]) || void 0 === r
                        ? void 0
                        : null === (i = r.blocks) || void 0 === i
                          ? void 0
                          : i[n];
                (0, ef.eE)(d) &&
                  ((d.meta = {
                    ...(0, eP.FF)(o.wave),
                    imageUrl: o.simpleWaveForegroundImageUrl,
                    backgroundColor: o.simpleWaveBackgroundColor,
                  }),
                  (d.loadingState = m.Gui.RESOLVE));
              },
              getMusicHistory: (0, d.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                d.dU)(e);
                if (e.loadingState !== m.Gui.PENDING)
                  try {
                    e.loadingState = m.Gui.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      r = eC(i);
                    (e.tabs = (0, d.pj)(r.historyTabs.map(ef.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = m.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = m.Gui.REJECT);
                  }
              }),
              getItems: (0, d.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: r } = (0,
                d.dU)(e);
                try {
                  let r = e.getItemsToLoad(a);
                  r.forEach((e) => {
                    e.loadingState = m.Gui.RESOLVE;
                  });
                  let l = yield i.getMusicHistoryItems({ items: eT(r) }),
                    s = eI(r);
                  l.items.forEach((e) => {
                    var a;
                    let i = ek(e);
                    null === (a = s[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case eb.E.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case eb.E.TRACK:
                            t.setTrack(a, e);
                            break;
                          case eb.E.WAVE:
                            t.setVibe(a, e);
                            break;
                          case eb.E.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case eb.E.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = m.Gui.RESOLVE;
                      });
                  });
                } catch (e) {
                  r.error(e);
                }
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = m.Gui.IDLE);
              },
            };
            return t;
          });
      a(35551), a(63529);
      var eN = a(17979);
      let eA = d.V5.model("MyMusicPage", { downloadedTracks: eN.d });
      a(30246);
      var eD = a(63718),
        eL = a(66634),
        eR = a(80316),
        ex = a(81746),
        ew = a(85445),
        eG = a(44182),
        eV = a(36608),
        eO = a(17240);
      let eM = [
          eO.S.ARTIST,
          eO.S.ALBUM,
          eO.S.TRACK,
          eO.S.PLAYLIST,
          eO.S.WAVE,
          eO.S.PODCAST,
          eO.S.PODCAST_EPISODE,
        ],
        eF = (e) => {
          let t = [...eM];
          return (
            (0, m.Z7G)(e) ||
              (t = t.filter(
                (e) => ![eO.S.PODCAST, eO.S.PODCAST_EPISODE].includes(e),
              )),
            t
          );
        },
        eU = [
          eO.S.ALBUM,
          eO.S.ARTIST,
          eO.S.PLAYLIST,
          eO.S.TRACK,
          eO.S.UGC_TRACK,
          eO.S.WAVE,
          eO.S.PODCAST,
          eO.S.PODCAST_EPISODE,
          eO.S.CLIP,
        ],
        ej = (e, t) => {
          let a = [...eU];
          return (
            e === ew.a.TOP && (a = a.filter((e) => e !== eO.S.UGC_TRACK)),
            t || (a = a.filter((e) => e !== eO.S.CLIP)),
            a
          );
        },
        eB = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, d.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        eq = (e) => {
          let { type: t } = e;
          switch (t) {
            case eO.S.UGC_TRACK:
              return { type: t, data: (0, U.Z2)(e.track) };
            case eO.S.TRACK:
              return { type: t, data: (0, U.Vt)(e.track) };
            case eO.S.ARTIST:
              return { type: t, data: (0, A.d)(e.artist) };
            case eO.S.PLAYLIST:
              return {
                type: t,
                data: (0, V.VB)({ ...e.playlist, artists: [] }),
              };
            case eO.S.ALBUM:
              return { type: t, data: (0, I.ym)(e.album) };
            case eO.S.WAVE:
              return { type: t, data: eB(e) };
            case eO.S.PODCAST:
              return { type: t, data: (0, I.ym)(e.podcast) };
            case eO.S.PODCAST_EPISODE:
              return { type: t, data: (0, U.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        };
      var eW = a(97671),
        eY = a(18691),
        eK = a(60773);
      let ez = (e) =>
          e.map((e) => {
            switch (e.type) {
              case eW.o.ALBUM:
                return {
                  type: eW.o.ALBUM,
                  data: (0, I.cO)({
                    album: e.best_result_album.album,
                    artists: e.best_result_album.artists,
                    trailer: e.best_result_album.trailer,
                  }),
                };
              case eW.o.PLAYLIST:
                return {
                  type: eW.o.PLAYLIST,
                  data: (0, V.RE)({
                    playlist: e.best_result_playlist.playlist,
                    likesCount: e.best_result_playlist.likesCount,
                    tracksCount: e.best_result_playlist.trackCount,
                    trailer: e.best_result_playlist.trailer,
                  }),
                };
              case eW.o.RECENT_RELEASE:
                return {
                  type: eW.o.RECENT_RELEASE,
                  data: (0, I.cO)({
                    album: e.best_result_recent_release.album,
                    artists: e.best_result_recent_release.artists,
                    trailer: e.best_result_recent_release.trailer,
                  }),
                };
              case eW.o.WAVE:
                return {
                  type: eW.o.WAVE,
                  data: (0, eP.FF)(e.best_result_wave),
                };
              case eW.o.ARTIST:
                return {
                  type: eW.o.ARTIST,
                  data: (0, A.tR)({
                    artist: e.best_result_artist.artist,
                    trailer: e.best_result_artist.trailer,
                    likesCount: e.best_result_artist.likesCount,
                  }),
                };
              case eW.o.UPCOMING:
                return {
                  type: eW.o.UPCOMING,
                  data: (0, I.wq)(e.best_result_upcoming),
                };
              case eW.o.CONCERT:
                return {
                  type: eW.o.CONCERT,
                  data: (0, eK.zj)(e.best_result_concert),
                };
              case eW.o.PODCAST:
                return {
                  type: eW.o.PODCAST,
                  data: (0, I.cO)({
                    album: e.best_result_podcast.album,
                    likesCount: e.best_result_podcast.likesCount,
                  }),
                };
              case eW.o.PODCAST_EPISODE:
                return {
                  type: eW.o.PODCAST_EPISODE,
                  data: (0, U.Vt)(e.best_result_podcast_episode),
                };
              case eW.o.OVERVIEW:
                return {
                  type: eW.o.OVERVIEW,
                  data: (0, eY.l0)(e.best_result_overview),
                };
              case eW.o.NON_MUSIC:
                return {
                  type: eW.o.NON_MUSIC,
                  data: (0, I.cO)({
                    album: e.best_result_non_music.album,
                    artists: e.best_result_non_music.artists,
                    releaseYear: e.best_result_non_music.releaseYear,
                  }),
                };
              case eW.o.TRACK:
                return {
                  type: eW.o.TRACK,
                  data: (0, U.Vt)(e.best_result_track),
                };
              case eW.o.CLIP:
                return { type: eW.o.CLIP, data: (0, R.et)(e.best_result_clip) };
            }
          }),
        eH = (e) =>
          e.map((e) => {
            switch (e.type) {
              case eO.S.ALBUM:
                return { type: eO.S.ALBUM, data: (0, I.ym)(e.album) };
              case eO.S.ARTIST:
                return { type: eO.S.ARTIST, data: (0, A.d)(e.artist) };
              case eO.S.PLAYLIST:
                return {
                  type: eO.S.PLAYLIST,
                  data: (0, V.VB)({ ...e.playlist, artists: [] }),
                };
              case eO.S.UGC_TRACK:
                return { type: eO.S.UGC_TRACK, data: (0, U.Z2)(e.track) };
              case eO.S.TRACK:
                return { type: eO.S.TRACK, data: (0, U.Vt)(e.track) };
              case eO.S.WAVE:
                return { type: eO.S.WAVE, data: eB(e) };
              case eO.S.PODCAST:
                return { type: eO.S.PODCAST, data: (0, I.ym)(e.podcast) };
              case eO.S.CLIP:
                return { type: eO.S.CLIP, data: (0, R.et)(e.clip) };
              case eO.S.PODCAST_EPISODE:
                return {
                  type: eO.S.PODCAST_EPISODE,
                  data: (0, U.Vt)(e.podcast_episode),
                };
            }
          }),
        eQ = d.V5.compose(
          d.V5.model("SearchHistoryPage", { items: d.V5.array(eV.Iv) }),
          C.Al,
          C.fu,
        ).actions((e) => ({
          reset() {
            e.destroyItems([e.items]);
          },
        })),
        eJ = d.V5.model("SearchHistory", {
          loadingState: d.V5.enumeration(Object.values(m.Gui)),
          shouldUpdateHistory: d.V5.optional(d.V5.boolean, !1),
        })
          .views((e) => ({
            get hasCleared() {
              return e.loadingState === m.Gui.RESOLVE;
            },
          }))
          .actions((e) => ({
            setShouldUpdateHistory(t) {
              e.shouldUpdateHistory = t;
            },
            clear: (0, d.ls)(function* () {
              if (!(0, d.fh)(e)) return;
              let { user: t } = (0, d.yj)(e),
                { usersResource: a, modelActionsLogger: i } = (0, d.dU)(e);
              if (e.loadingState !== m.Gui.PENDING && t.account.data.uid)
                try {
                  (e.loadingState = m.Gui.PENDING),
                    yield a.clearSearchHistory({ userId: t.account.data.uid }),
                    (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  i.error(t), (e.loadingState = m.Gui.REJECT);
                }
            }),
            reset() {
              e.loadingState = m.Gui.IDLE;
            },
          })),
        eX = d.V5.compose(
          d.V5.model("SearchPage", {
            searchCorrectedText: d.V5.maybeNull(d.V5.string),
            searchRequestId: d.V5.optional(d.V5.string, ""),
            results: d.V5.array(eV.Iv),
            bestResults: d.V5.array(eV.Mg),
            historyPage: eQ,
            mixes: eG.ZP,
            landing: P.d5,
            history: eJ,
            filters: d.V5.maybeNull(d.V5.array(eV.yd)),
          }),
          C.Al,
          C.fu,
        )
          .views((e) => ({
            get isHistoryShimmerVisible() {
              return e.historyPage.isLoading || e.historyPage.isRejected;
            },
            get isHistoryLoading() {
              return e.historyPage.isLoading;
            },
            get isHistoryReady() {
              return e.historyPage.isNeededToLoad;
            },
            get isEmptyHistory() {
              return !e.historyPage.items.length && e.historyPage.isResolved;
            },
            get isShimmerVisible() {
              return e.isLoading || e.isRejected;
            },
            get isEmpty() {
              return (
                !e.isLoading &&
                0 === e.results.length &&
                0 === e.bestResults.length
              );
            },
          }))
          .actions((e) => ({
            getSearchResults: (0, d.ls)(function* (t) {
              let { text: a, filter: i, withClips: r = !1 } = t,
                { searchResource: l } = (0, d.dU)(e),
                { experiments: s } = (0, d.yj)(e);
              try {
                e.loadingState = m.Gui.PENDING;
                let t = yield l.getInstantMixedSearch({
                  text: a,
                  type: ej(i, r),
                  filter: i === ew.a.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                  withBestResults:
                    s.checkExperiment(m.peG.WebNextSearchBestResults, "on") &&
                    i === ew.a.TOP,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, d.pj)(eH(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  t.bestResults &&
                    t.bestResults.length > 0 &&
                    s.checkExperiment(m.peG.WebNextSearchBestResults, "on") &&
                    (e.bestResults = (0, d.pj)(
                      ez(t.bestResults).filter((e) => e),
                    )),
                  t.filters &&
                    t.filters.length > 0 &&
                    (e.filters = (0, d.pj)(t.filters)),
                  (e.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                e.loadingState = m.Gui.REJECT;
              }
            }),
            getHistory: (0, d.ls)(function* (t) {
              let { userId: a, config: i } = t;
              if (e.historyPage.loadingState === m.Gui.PENDING) return;
              let { usersResource: r, modelActionsLogger: l } = (0, d.dU)(e);
              try {
                e.historyPage.loadingState = m.Gui.PENDING;
                let t = yield r.getSearchHistory({
                  userId: a,
                  supportedTypes: eF(i),
                });
                (e.historyPage.items = (0, d.pj)(t.map(eq).filter((e) => e))),
                  (e.historyPage.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                l.error(t), (e.historyPage.loadingState = m.Gui.REJECT);
              }
            }),
            clearHistory: (0, d.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i, modelActionsLogger: r } = (0, d.dU)(e);
              if (e.loadingState !== m.Gui.PENDING)
                try {
                  (e.loadingState = m.Gui.PENDING),
                    yield i.clearSearchHistory({ userId: a }),
                    (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  r.error(t), (e.loadingState = m.Gui.REJECT);
                }
            }),
            resetHistoryItems() {
              e.historyPage.reset();
            },
            resetHistoryStateRequest() {
              (e.historyPage.loadingState = m.Gui.IDLE), e.historyPage.reset();
            },
            resetResults() {
              e.destroyItems([e.results, e.bestResults]);
            },
            resetSearchCorrectedText() {
              e.searchCorrectedText = null;
            },
            reset() {
              (e.searchCorrectedText = null),
                (e.loadingState = m.Gui.IDLE),
                (e.filters = null),
                e.destroyItems([e.results, e.bestResults]);
            },
            sendFeedback: (0, d.ls)(function* (t) {
              let { searchResource: a, modelActionsLogger: i } = (0, d.dU)(e);
              try {
                yield a.sendFeedback(t);
              } catch (e) {
                i.error(e);
              }
            }),
          }));
      a(76141), a(12846), a(30597), a(22365);
      var eZ = a(82869),
        e$ = a(53809),
        e0 = a(40664);
      let e5 = d.V5.model("AdvertBanners", {
        banners: d.V5.model({
          topAdvertBanner: C.Ie,
          sideAdvertBanner: C.Ie,
          brandedPlaylistBanner: e0.Kc,
        }),
      }).views((e) => {
        let t = {
          get values() {
            return [
              e.banners.topAdvertBanner,
              e.banners.sideAdvertBanner,
              e.banners.brandedPlaylistBanner,
            ];
          },
          get hasBranding() {
            return t.values.some((e) => e.type === m.Y_4.BRANDING);
          },
          isVisible(a) {
            let { experiments: i } = (0, d.yj)(e);
            if (i.checkExperiment(m.peG.WebNextDisableAds, "on")) return !1;
            if (a === m.Y_4.EMPTY) return !0;
            let r = t.values.filter((e) => e.type !== m.Y_4.EMPTY);
            return a === m.Y_4.DIRECT
              ? r.every((e) => e.type === m.Y_4.DIRECT)
              : a !== m.Y_4.CREATIVE ||
                  r.every((e) => e.type !== m.Y_4.BRANDING);
          },
        };
        return t;
      });
      var e1 = a(18128);
      ((i = l || (l = {})).BAR_BELOW = "barBellow"),
        (i.FULLSCREEN = "fullscreen");
      var e4 = a(23765),
        e3 = a(39392);
      let e7 = (e) => {
          let t = [],
            a = [];
          return (
            e.triggers.forEach((e) => {
              switch (e.meta.notificationId) {
                case l.BAR_BELOW:
                  t.push((0, e4.ho)(e));
                  return;
                case l.FULLSCREEN:
                  a.push((0, e3.QZ)(e));
                  return;
              }
            }),
            (0, d.pj)({ barBelow: { list: t }, modal: { list: a } })
          );
        },
        e6 = d.V5.model("CommunicationList", { barBelow: e4.Xv, modal: e3.FM }),
        e2 = d.V5.model("Communication", {
          loadingState: d.V5.enumeration(Object.values(m.Gui)),
          list: d.V5.maybe(e6),
          errorStatusCode: d.V5.maybeNull(d.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, d.ls)(function* () {
              let { dynamicPagesResource: a, modelActionsLogger: i } = (0, d.dU)(e);
              return e.loadingState = m.Gui.RESOLVE
            }),
            // getData: (0, d.ls)(function* () {
            //   let { dynamicPagesResource: a, modelActionsLogger: i } = (0,
            //   d.dU)(e);
            //   if (
            //     e.loadingState !== m.Gui.PENDING &&
            //     e.loadingState !== m.Gui.RESOLVE
            //   )
            //     try {
            //       e.loadingState = m.Gui.PENDING;
            //       let i = yield a.getTriggers({
            //         anchorIds: Object.values(e1.o),
            //       });
            //       if (
            //         ((e.list = e7(i)),
            //         e.loadingState !== m.Gui.IDLE &&
            //           (e.loadingState = m.Gui.RESOLVE),
            //         !e.list)
            //       )
            //         return;
            //       let { barBelow: r, modal: l } = e.list;
            //       r.setAnchorId(e1.o.ON_START_BAR_BELOW),
            //         r.barBelowItem &&
            //           (r.show(),
            //           t.shown(
            //             r.barBelowItem.anchorId,
            //             r.barBelowItem.screenId,
            //           )),
            //         l.setAnchorId(e1.o.ON_START_FULLSCREEN),
            //         l.modalItem &&
            //           (l.open(),
            //           t.shown(l.modalItem.anchorId, l.modalItem.screenId));
            //     } catch (t) {
            //       i.error(t),
            //         t instanceof em.du &&
            //           (t.statusCode === em.CN.NOT_FOUND ||
            //             t.statusCode === em.CN.BAD_REQUEST) &&
            //           (e.errorStatusCode = em.CN.NOT_FOUND),
            //         e.loadingState !== m.Gui.IDLE &&
            //           (e.loadingState = m.Gui.REJECT);
            //     }
            // }),
            shown: (0, d.ls)(function* (t, a) {
              let { dynamicPagesResource: i, modelActionsLogger: r } = (0,
              d.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                r.error(e);
              }
            }),
            action: (0, d.ls)(function* (t, a, i) {
              let { dynamicPagesResource: r, modelActionsLogger: l } = (0,
              d.dU)(e);
              try {
                yield r.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                l.error(e);
              }
            }),
          };
          return t;
        });
      var e9 = a(14004),
        e8 = a(54439),
        te = a(4459);
      let tt = d.V5.model("ModalsModel", {
        disclaimerModal: C.KL,
        shortcutsModal: C.KL,
        aboutAppModal: C.KL,
        overviewModal: C.KL,
        ugcTrackEditModal: U.bp,
        popoverOverPlayer: C.KL,
        crackdownModal: C.KL,
        overwrittenExperimentsModal: C.KL,
        buySubscriptionModal: C.KL,
        clearMemoryModal: C.KL,
        imageSliderModal: te.R,
        promoLandingBuySubscriptionModal: C.KL,
        artistAboutModal: N.Dd,
        discordRpcSettingsModal: C.KL,
        vibeBehaviorEnhancementsSettingsModal: C.KL,
        playerBarEnhancementsSettingsModal: C.KL,
        windowBehaviorSettingsModal: C.KL,
        appUpdatesSettingsModal: C.KL,
        scrobblersSettingsModal: C.KL,
        downloaderSettingsModal: C.KL,
      });
      var ta = a(68877),
        ti = a(91851),
        tr = a(90508),
        tl = a(75721),
        ts = a(48250),
        tn = a(57697),
        to = a(21619),
        td = a(13028),
        tu = a(50687),
        tc = a(34990);
      let tm = d.V5.model("Network", {
          isOffline: d.V5.optional(d.V5.boolean, !1),
        }),
        tg = d.V5.model("Entity", {
          progress: d.V5.maybe(d.V5.number),
          loadingState: d.V5.enumeration(Object.values(tc.aT)),
        }),
        th = d.V5.model("Slam", {
          networkStatus: tm,
          offlineMode: d.V5.optional(d.V5.boolean, !1),
          tracks: d.V5.map(tg),
        })
          .views((e) => {
            let t = {
              isTrackDownloaded: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === tc.aT.DOWNLOADED
                );
              },
              isTrackDownloading: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === tc.aT.DOWNLOADING
                );
              },
              getTrackDownloadingProgress: (t) => {
                var a, i;
                return null !==
                  (i =
                    null === (a = e.tracks.get(t)) || void 0 === a
                      ? void 0
                      : a.progress) && void 0 !== i
                  ? i
                  : 0;
              },
              isPlaylistDownloaded: (e) =>
                e.every((e) => {
                  let [a] = (0, X.f)(e);
                  return !!a && t.isTrackDownloaded(a);
                }),
              isPlaylistDownloading: (e) =>
                e.some((e) => {
                  let [a] = (0, X.f)(e);
                  return !!a && t.isTrackDownloading(a);
                }),
              getPlaylistDownloadingProgress: (e) =>
                Math.floor(
                  (e.reduce((e, a) => {
                    let [i] = (0, X.f)(a);
                    return i && t.isTrackDownloaded(i) ? e + 1 : e;
                  }, 0) /
                    e.length) *
                    100,
                ),
              get isOfflineModeEnabled() {
                if (!(0, d.fh)(e)) return !1;
                let { experiments: t } = (0, d.yj)(e);
                return (
                  t.checkExperiment(
                    m.peG.WebNextEnableDownloadControls,
                    "on",
                  ) && e.offlineMode
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            setNetworkStatus: (t) => {
              e.networkStatus = t;
            },
            setTrack: (t, a) => {
              e.tracks.set(t, a);
            },
            setTracks: (t) => {
              e.tracks = (0, d.pj)(t);
            },
            setOfflineMode: (t) => {
              let { experiments: a } = (0, d.yj)(e),
                { localStorage: i } = (0, d.dU)(e);
              if (
                !a.checkExperiment(m.peG.WebNextEnableDownloadControls, "on")
              ) {
                (e.offlineMode = !1), i.set(m.BUb.OfflineMode, !1);
                return;
              }
              (e.offlineMode = t), i.set(m.BUb.OfflineMode, t);
            },
          }));
      var ty = a(13503),
        tv = a(88350),
        tp = a(37285);
      ((r = s || (s = {})).PROCESSING = "processing"),
        (r.PLAYABLE = "playable");
      var tS = a(32399),
        tE = a(94342);
      let tb = d.V5.model("UgcUploadCenterNotificationsPairModel", {
          playlist: O.Cd,
          type: d.V5.enumeration(Object.values(tE.u)),
        }),
        tf = d.V5.model("UgcUploadCenterNotificationsModel", {
          pairs: d.V5.array(tb),
        })
          .views((e) => ({
            isNotificationExists: (t, a) =>
              e.pairs.some((e) => e.playlist.kind === t && e.type === a),
          }))
          .actions((e) => {
            let t = {
              addNotification(t, a) {
                e.pairs.push({ playlist: (0, tp.ZN)(t), type: a });
              },
              addNonexistentNotification(a, i) {
                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
              },
              showAllNotifications() {
                let t = (0, tp.ZN)(e.pairs);
                return (e.pairs = (0, d.pj)([])), t;
              },
            };
            return t;
          }),
        tP = d.V5.model("UgcUploadCenterTrackPlaylistPair", {
          playlist: O.Cd,
          file: tS.jT,
        }),
        tI = d.V5.model("UgcUploadCenterModel", {
          tracks: d.V5.array(tP),
          notifications: tf,
          checkProcessingTracksAttempts: d.V5.number,
        })
          .views((e) => ({
            getUploadingTracksByPlaylistKind: (t) =>
              t
                ? e.tracks
                    .filter((e) => e.playlist.kind === t)
                    .map((e) => e.file)
                : [],
            getTracksByLoadingState: (t) =>
              e.tracks
                .filter((e) => e.file.loadingState === t)
                .map((e) => e.file),
            get idleTracks() {
              return this.getTracksByLoadingState(tS.cU.IDLE);
            },
            get preparingTracks() {
              return this.getTracksByLoadingState(tS.cU.PREPARE);
            },
            get uploadingTracks() {
              return this.getTracksByLoadingState(tS.cU.UPLOADING);
            },
            get processingTracks() {
              return this.getTracksByLoadingState(tS.cU.PROCESSING);
            },
            get hasTracksInUploadingState() {
              return (
                this.preparingTracks.length + this.uploadingTracks.length > 0
              );
            },
            get shouldCheckProcessingTracks() {
              return (
                e.checkProcessingTracksAttempts < 25 &&
                this.processingTracks.length > 0
              );
            },
            getPlaylistByKind(t) {
              var a;
              return null ===
                (a = e.tracks.find((e) => e.playlist.kind === t)) ||
                void 0 === a
                ? void 0
                : a.playlist;
            },
          }))
          .actions((e) => {
            let t = {
              appendFiles(t, a) {
                if (
                  (t.forEach((t) => {
                    if (t.size > 419430400) {
                      e.notifications.addNonexistentNotification(
                        a,
                        tE.u.FILE_TOO_LARGE,
                      );
                      return;
                    }
                    let i = tS.jT.create({
                      loadingState: tS.cU.IDLE,
                      playlistKind: a.kind,
                    });
                    i.setFile(t);
                    let r = tP.create({ file: i, playlist: (0, tp.ZN)(a) });
                    e.tracks.unshift(r);
                  }),
                  !(0, d.fh)(e))
                )
                  return;
                let { playlist: i } = (0, d.yj)(e);
                i.search.setText(""),
                  i.search.reset(),
                  this.runUploadTracksQueue();
              },
              async runUploadTracksQueue() {
                let a = e.idleTracks;
                if (a.length && !e.hasTracksInUploadingState) {
                  let i = a[a.length - 1];
                  i &&
                    (await i.runUpload(),
                    i.loadingState === tS.cU.REJECT &&
                      i.errorReason === tS.v_.TOO_MANY_FILES &&
                      ((e.tracks = (0, d.pj)([])),
                      t.addNotificationForPlaylistKind(
                        i.playlistKind,
                        tE.u.TOO_MANY_FILES,
                      )),
                    t.checkNotifications()),
                    t.setCheckProcessingTracksAttempts(0),
                    t.runUploadTracksQueue();
                }
              },
              checkProcessingTracks: (0, d.ls)(function* () {
                let { tracksResource: a, modelActionsLogger: i } = (0, d.dU)(e),
                  r = [];
                if (e.checkProcessingTracksAttempts >= 25) return null;
                t.setCheckProcessingTracksAttempts(
                  e.checkProcessingTracksAttempts + 1,
                );
                try {
                  let t = e.processingTracks
                    .map((e) => e.trackId)
                    .filter((e) => !!e);
                  if (!t.length) return null;
                  let i = yield a.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  null == i ||
                    i.forEach((t) => {
                      let a = e.tracks.find(
                        (e) =>
                          e.file.trackId === t.id && t.state === s.PLAYABLE,
                      );
                      a &&
                        ((a.file.loadingState = tS.cU.RESOLVE),
                        a.file.trackId && r.push(a.file.trackId));
                    });
                } catch (e) {
                  i.error(e);
                }
                return (
                  t.checkNotifications(r),
                  t.moveTracksFromUploadCenterToPlaylist(),
                  null
                );
              }),
              moveTracksFromUploadCenterToPlaylist() {
                var t;
                if (!(0, d.fh)(e)) return;
                let { playlist: a } = (0, d.yj)(e);
                (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) &&
                  e.tracks.find((e) => {
                    var t;
                    return (
                      e.file.loadingState === tS.cU.RESOLVE &&
                      e.playlist.kind ===
                        (null === (t = a.meta) || void 0 === t
                          ? void 0
                          : t.kind)
                    );
                  }) &&
                  a.refreshTracks(),
                  (e.tracks = (0, d.pj)(
                    e.tracks.filter(
                      (e) => e.file.loadingState !== tS.cU.RESOLVE,
                    ),
                  ));
              },
              setCheckProcessingTracksAttempts(t) {
                e.checkProcessingTracksAttempts = t;
              },
              clearCancelledUploads() {
                e.tracks = (0, d.pj)(
                  e.tracks.filter(
                    (e) => e.file.loadingState !== tS.cU.CANCELLED,
                  ),
                );
              },
              checkNotifications(a) {
                let i = new Set();
                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                  i.forEach((i) => {
                    let r = e.getUploadingTracksByPlaylistKind(i);
                    if (
                      !(
                        !r.length ||
                        r.some(
                          (e) =>
                            e.loadingState !== tS.cU.RESOLVE &&
                            e.loadingState !== tS.cU.REJECT,
                        )
                      )
                    ) {
                      if (r.some((e) => e.loadingState === tS.cU.REJECT)) {
                        let l = !0;
                        if (a && a.length) {
                          let t = r.map((e) => e.trackId).filter((e) => e),
                            i = (0, ty.Z)(t, a, tv.Z);
                          i.length &&
                            (l = i
                              .map((t) =>
                                e.tracks.find((e) => e.file.trackId === t),
                              )
                              .some(
                                (e) =>
                                  (null == e ? void 0 : e.file.loadingState) ===
                                  tS.cU.REJECT,
                              ));
                        }
                        l &&
                          t.addNotificationForPlaylistKind(
                            i,
                            tE.u.UNKNOWN_ERROR,
                          );
                      } else t.addNotificationForPlaylistKind(i, tE.u.SUCCESS);
                    }
                  });
              },
              addNotificationForPlaylistKind(t, a) {
                let i = e.getPlaylistByKind(t);
                i && e.notifications.addNonexistentNotification(i, a);
              },
            };
            return t;
          });
      a(5208);
      var tk = a(93805),
        tC = a(90378);
      let tT = (e) => {
          var t, a;
          return {
            id: e.id,
            type: e.type,
            title: e.title,
            description: e.description,
            details: {
              text: null === (t = e.details) || void 0 === t ? void 0 : t.text,
              url: null === (a = e.details) || void 0 === a ? void 0 : a.url,
            },
          };
        },
        t_ = d.V5.compose(
          d.V5.model("Disclaimers", {
            disclaimers: d.V5.maybe(d.V5.array(C.dU)),
            recentDisclaimersRequestTS: d.V5.number,
          }),
          C.fu,
        ).actions((e) => {
          let t = {
            getDisclaimers: (0, d.ls)(function* () {
              let { disclaimersResource: t, modelActionsLogger: a } = (0, d.dU)(
                e,
              );
              if (e.loadingState !== m.Gui.PENDING)
                try {
                  (e.loadingState = m.Gui.PENDING),
                    (e.recentDisclaimersRequestTS = Date.now());
                  let a = yield t.getDisclaimers();
                  (e.disclaimers = a.map(tT)),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== m.Gui.IDLE &&
                      (e.loadingState = m.Gui.REJECT);
                }
            }),
            getDisclaimerById: (0, d.ls)(function* (a) {
              var i, r;
              return (
                (null === (i = e.disclaimers) || void 0 === i
                  ? void 0
                  : i.find((e) => e.id === a)) ||
                (Date.now() - e.recentDisclaimersRequestTS > 18e5 &&
                  (yield t.getDisclaimers()),
                null === (r = e.disclaimers) || void 0 === r
                  ? void 0
                  : r.find((e) => e.id === a))
              );
            }),
          };
          return t;
        });
      var tN = a(41450);
      let tA = (e) => {
          let t = e.alerts.find((e) => {
            let { id: t } = e;
            return "music-grace" === t;
          });
          return void 0 === t
            ? null
            : (0, d.pj)({
                text: t.texts["bar-text"],
                buttonText: t.texts["bar-button-text"],
                href: t.clickUrl,
              });
        },
        tD = d.V5.model({
          text: d.V5.string,
          buttonText: d.V5.string,
          href: d.V5.string,
        }),
        tL = d.V5.compose(
          d.V5.model("RedAlert", { data: d.V5.maybeNull(tD) }),
          C.fu,
        )
          .views((e) => ({
            get isVisible() {
              let { settings: t } = (0, d.yj)(e);
              return t.layout !== m.t8m.Mobile && !!e.data;
            },
            get text() {
              if (null === e.data) throw Error("Missing data");
              return e.data.text;
            },
            get buttonText() {
              if (null === e.data) throw Error("Missing data");
              return e.data.buttonText;
            },
            get href() {
              if (null === e.data) throw Error("Missing data");
              return e.data.href;
            },
          }))
          .actions((e) => ({
            getData: (0, d.ls)(function* () {
              if (e.loadingState === m.Gui.PENDING) return;
              let { user: t } = (0, d.yj)(e),
                { redAlertResource: a, modelActionsLogger: i } = (0, d.dU)(e);
              if (!t.isAuthorized) {
                e.loadingState = m.Gui.IDLE;
                return;
              }
              e.loadingState = m.Gui.PENDING;
              try {
                let t = yield a.getRedAlerts({
                  service: "music",
                  client: "music-web",
                  platform: "web",
                });
                (e.data = tA(t)), (e.loadingState = m.Gui.RESOLVE);
              } catch (t) {
                i.error(t), (e.loadingState = m.Gui.REJECT);
              }
            }),
          }));
      var tR = a(9350),
        tx = a(78129);
      let tw = d.V5.model("Root", {
          experiments: C.i_,
          user: tx.T_,
          wizard: to.k,
          collection: ec,
          disclaimers: t_,
          main: eE,
          settings: C.ao,
          currentClipInfo: R.uF,
          currentTrackInfo: U.Jx,
          album: E.Lf,
          promolanding: E.iL,
          artist: b.Od,
          libraryAllIds: C.n4,
          librarySync: C.T2,
          sonataState: Z.ps,
          playlist: eL.nb,
          slides: tR.iV,
          vibe: ts.a,
          search: eX,
          vibeSettings: tk.Ux,
          pinsCollection: ta.Lc,
          genre: ey.Kx,
          genres: ev.EU,
          mixes: eG.ZP,
          myMusic: eA,
          tag: eZ.tS,
          chart: f._1,
          post: ex.vU,
          landingBlockEntities: P.oT,
          contextMenuPlaylists: M,
          musicHistory: e_,
          createPlaylist: O.b_,
          location: C.CU,
          nonMusic: eD.NG,
          disclaimer: tC.ST,
          disclaimerModalData: tC.ST,
          communication: e2,
          trailer: tl.L,
          modals: tt,
          landing: P.d5,
          fullscreenPlayer: tr.Oe,
          fullscreenVideoPlayer: tn.y2,
          releaseNotes: td.ZP,
          trackLyrics: U.Nl,
          ugcUploadCenter: tI,
          paymentWidgetModal: p._$,
          offers: tN.C,
          quality: tr.zC,
          kids: ep.d6,
          slam: th,
          favoriteTracks: eh,
          advert: tr.Tk,
          track: e$.uD,
          continueListen: e9.Fu,
          playlistPersonal: eR.uD,
          familyInvite: v.Z6,
          redAlert: tL,
          shareIframe: tu.x,
          paywall: ti.$h,
          downloadMobileApp: e8.R,
          advertBanners: e5,
          label: eS.WO,
        }).views((e) => ({
          get library() {
            if (!(0, d.fh)(e)) return e.libraryAllIds;
            let { experiments: t } = (0, d.yj)(e);
            if (t.checkExperiment(m.peG.WebNextLibrarySync, "on"))
              return e.librarySync;
            return e.libraryAllIds;
          },
        })),
        tG = (e, t) => tw.create(e, t);
      var tV = a(23172);
      let tO = [
          "settings",
          "sonataState",
          "offers",
          "modals",
          "shareIframe",
          "paywall",
          "downloadMobileApp",
          "disclaimerModalData",
          "fullscreenPlayer",
          "fullscreenVideoPlayer",
          "advertBanners",
          "redAlert",
          "communication",
        ],
        tM = (e, t) => tO.reduce((t, a) => ((t[a] = e[a]), t), (0, tV.Z)(t));
      (0, o.DT)(!1);
      let tF = (e) => {
          let { nonce: t, snapshotsRef: a } = e;
          (0, c.useContext)(u.ServerInsertedHTMLContext);
        },
        tU = (e) => {
          let { children: t, nonce: a } = e,
            i = (0, c.useRef)([]),
            r = (0, m.wdp)(),
            [l] = (0, c.useState)(() => {
              var e;
              return (
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e.length
              )
                ? tG(
                    window.__STATE_SNAPSHOT__[
                      window.__STATE_SNAPSHOT__.length - 1
                    ],
                    r,
                  )
                : tG(S, r);
            });
          return (
            (0, c.useLayoutEffect)(() => {
              function e() {
                var e;
                let t =
                  null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                    ? void 0
                    : e[window.__STATE_SNAPSHOT__.length - 1];
                t && (0, d.Xx)(l, tM(l, t)), delete window.__STATE_SNAPSHOT__;
              }
              return (
                e(),
                window.addEventListener("yMusicStateSnapshotUpdated", e),
                () =>
                  window.removeEventListener("yMusicStateSnapshotUpdated", e)
              );
            }, [l]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(tF, { nonce: a, snapshotsRef: i }),
                (0, n.jsx)(m.xfX.Provider, { value: l, children: t }),
              ],
            })
          );
        };
    },
    92782: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThemeProvider: function () {
            return n;
          },
        });
      var i = a(75441),
        r = a(65067),
        l = a(93093),
        s = a(13534);
      let n = (e) => {
        let { children: t, predefinedTheme: a } = e,
          n = (0, s.uK4)().get(s.V0J),
          { getThemeFromStorage: o, setThemeToStorage: d } = (0, s.YeQ)(n),
          [u, c] = (0, r.useState)(() => (null != a ? a : o())),
          m = (0, l.W)((e) => {
            o() || a || (d(s.rLu), c(e));
          });
        (0, r.useLayoutEffect)(() => {
          a || (0, s.xgK)(u);
        }, [u, a]),
          (0, s.K4P)({ onSystemThemeChange: m }),
          (0, r.useLayoutEffect)(() => {
            m((0, s.vn0)());
          }, [m]);
        let g = (0, r.useMemo)(() => ({ theme: u, setTheme: c }), [u]);
        return (0, i.jsx)(s.Nil.Provider, { value: g, children: t });
      };
    },
    46781: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TranslationsProvider: function () {
            return s;
          },
        });
      var i = a(75441),
        r = a(38959),
        l = a(13534);
      let s = (e) => {
        let { children: t } = e,
          { dictionary: a, language: s, defaultLanguage: n } = (0, l.ZSk)(),
          o = (0, l.J4i)();
        return (0, i.jsx)(r.Z, {
          onError: o,
          defaultLocale: n,
          locale: s,
          messages: a,
          children: t,
        });
      };
    },
    53577: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return n.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return r;
        },
      });
      var i = a(22874);
      let r = (e) => ({
          tag: e.tag,
          title: e.title,
          subGenres: (0, i.pj)(
            (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
          ),
        }),
        l = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(l),
        });
      var n = a(95009);
    },
    95009: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return d;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(17392),
        s = a(97141),
        n = a(19956),
        o = a.n(n);
      let d = (0, r.Pi)((e) => {
        let { tag: t, title: a, subGenres: r } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(s.rU, {
              className: o().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(l.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: o().linkTitle,
                children: a,
              }),
            }),
            r.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: r.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(s.rU, {
                        className: o().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(l.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: o().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    94342: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        u: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).FILE_TOO_LARGE = "FILE_TOO_LARGE"),
        (r.TOO_MANY_FILES = "TOO_MANY_FILES"),
        (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (r.SUCCESS = "SUCCESS");
    },
    5208: function (e, t, a) {
      "use strict";
      a.d(t, {
        UgcUploadInitializer: function () {
          return E;
        },
      });
      var i,
        r,
        l = a(62569),
        s = a(65067),
        n = a(13534),
        o = a(75441),
        d = a(9317),
        u = a(97141),
        c = a(15937),
        m = a(35846),
        g = a(17392),
        h = a(26893),
        y = a.n(h);
      ((i = r || (r = {})).ERROR = "error"), (i.SUCCESS = "success");
      let v = (e) => {
        let { playlistName: t, playlistUuid: a, variant: i } = e,
          r = (0, s.useMemo)(
            () =>
              (0, o.jsx)(u.rU, {
                className: y().link,
                href: "/playlists/".concat(a),
                children: (0, o.jsx)(g.Caption, {
                  className: y().title,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: t,
                }),
              }),
            [t, a],
          ),
          l = (0, s.useMemo)(
            () =>
              "error" === i
                ? (0, o.jsx)(g.Caption, {
                    variant: "div",
                    type: "controls",
                    size: "m",
                    ...(0, m.BA)(m.r9.BASE_NOTIFICATION_UGC_TRACK_ERROR_TEXT),
                    children: (0, o.jsx)(c.Z, {
                      id: "ugc.notification-unknown-error",
                      values: { playlistName: r },
                    }),
                  })
                : (0, o.jsxs)(g.Caption, {
                    varian: "div",
                    type: "controls",
                    size: "m",
                    children: [
                      (0, o.jsx)(c.Z, {
                        id: "ugc.notification-success",
                        values: { playlistName: r },
                      }),
                      ";",
                    ],
                  }),
            [r, i],
          );
        return (0, o.jsx)(u.Yj, { className: y().root, message: l });
      };
      var p = a(94342);
      let S = () => {
          var e;
          let {
              ugcUploadCenter: { notifications: t },
              playlist: a,
            } = (0, n.oR4)(),
            { notify: i } = (0, n.d$W)(),
            { formatMessage: l } = (0, d.Z)();
          (0, s.useEffect)(() => {
            t.showAllNotifications().forEach((e) => {
              switch (e.type) {
                case p.u.FILE_TOO_LARGE:
                  i(
                    (0, o.jsx)(u.Q, {
                      error: l({ id: "ugc.notification-too-large-file-error" }),
                    }),
                    { containerId: n.W$x.ERROR },
                  );
                  break;
                case p.u.TOO_MANY_FILES:
                  i(
                    (0, o.jsx)(u.Q, {
                      error: l({ id: "ugc.notification-too-many-files-error" }),
                    }),
                    { containerId: n.W$x.ERROR },
                  );
                  break;
                case p.u.UNKNOWN_ERROR:
                  i(
                    (0, o.jsx)(v, {
                      playlistName: e.playlist.title,
                      playlistUuid: e.playlist.uuid,
                      variant: r.ERROR,
                    }),
                    { containerId: n.W$x.ERROR },
                  );
                  break;
                case p.u.SUCCESS:
                  var t;
                  (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) !==
                    e.playlist.kind &&
                    i(
                      (0, o.jsx)(v, {
                        playlistName: e.playlist.title,
                        playlistUuid: e.playlist.uuid,
                        variant: r.SUCCESS,
                      }),
                      { containerId: n.W$x.INFO },
                    );
              }
            });
          }, [
            l,
            t,
            t.pairs.length,
            i,
            null === (e = a.meta) || void 0 === e ? void 0 : e.kind,
          ]);
        },
        E = (0, l.Pi)(() => {
          let { ugcUploadCenter: e } = (0, n.oR4)(),
            t = (0, s.useRef)();
          S();
          let a = (0, s.useCallback)(() => {
              e.checkProcessingTracks();
            }, [e]),
            i = (0, s.useCallback)(() => {
              t.current || (t.current = setInterval(a, 2e3));
            }, [a]),
            r = (0, s.useCallback)(() => {
              clearInterval(t.current), (t.current = void 0);
            }, []);
          (0, s.useEffect)(() => {
            e.shouldCheckProcessingTracks ? i() : r();
          }, [r, i, e.shouldCheckProcessingTracks]),
            (0, s.useEffect)(() => () => r(), [r]);
        });
    },
    10280: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return x.AlbumPage;
        },
        Lf: function () {
          return R;
        },
        iL: function () {
          return G;
        },
      }),
        a(74030);
      var i,
        r,
        l,
        s = a(22874),
        n = a(62726),
        o = a(14617),
        d = a(97472),
        u = a(44679),
        c = a(94123);
      ((r || (r = {})).RECENT_ALBUMS = "recent-albums"),
        ((i = l || (l = {}))[(i.DAY = 1)] = "DAY"),
        (i[(i.WEEK = 7)] = "WEEK"),
        (i[(i.MONTH = 30)] = "MONTH");
      var m = a(34990),
        g = a(39307),
        h = a(72783),
        y = a(5104),
        v = a(54306),
        p = a(1150),
        S = a(73447),
        E = a(13534),
        b = a(40892);
      let f = (e) =>
          (0, s.pj)({
            type: S.lf.TEXT,
            data: null != e ? e : null,
            loadingState: E.Gui.RESOLVE,
          }),
        P = (e) => {
          var t;
          let { data: a, ...i } = e;
          return (0, s.pj)({
            type:
              null !== (t = null == a ? void 0 : a.type) && void 0 !== t
                ? t
                : c.V.TRACK,
            data: null != a ? a : null,
            ...i,
          });
        },
        I = (e, t) => e.map((e) => "".concat(e, ":").concat(t)),
        k = (e) => "".concat(e, "-text"),
        C = (e) => String(e),
        T = (e) =>
          (0, s.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(h.ym),
          }),
        _ = (e) => !!(e && "position" in e),
        N = s.V5.compose(
          s.V5.model("AlbumDonations", {
            items: s.V5.maybeNull(s.V5.array(y.Ew)),
          }),
          b.Al,
          b.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = E.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        A = s.V5.model("LabelItem", { id: s.V5.number, name: s.V5.string }),
        D = s.V5.compose(
          s.V5.model("RelatedAlbumsPage", { items: s.V5.array(h.ug) }),
          b.Al,
          b.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = E.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        L = s.V5.compose(
          s.V5.model("RelatedContent", {
            items: s.V5.maybeNull(s.V5.array(g.fd)),
          }),
          b.Al,
          b.fu,
        ).actions((e) => ({
          reset() {
            (e.loadingState = E.Gui.IDLE), e.destroyItems([e.items]);
          },
        })),
        R = s.V5.compose(
          s.V5.model("AlbumPage", {
            id: s.V5.maybeNull(s.V5.number),
            meta: s.V5.maybeNull(h.ug),
            items: s.V5.array(g.JP),
            indexItems: s.V5.map(s.V5.array(s.V5.number)),
            errorStatusCode: s.V5.maybeNull(s.V5.number),
            deprecationTargetAlbumId: s.V5.maybeNull(s.V5.number),
            latestGenreAlbums: s.V5.maybe(D),
            otherArtistAlbums: s.V5.maybe(D),
            otherAlbumVersions: s.V5.maybe(s.V5.array(h.ug)),
            labels: s.V5.maybeNull(s.V5.array(A)),
            description: s.V5.maybe(s.V5.string),
            donations: s.V5.maybe(N),
            relatedContent: s.V5.maybe(L),
            allTracksUnfinished: s.V5.boolean,
          }),
          b.ie,
          b.Al,
          b.fu,
        )
          .views((e) => {
            let t = {
              get isOtherArtistAlbumsAvailable() {
                var a, i, r, l, o;
                return !!(
                  !(null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isNonMusic) &&
                  (null === (r = e.meta) || void 0 === r
                    ? void 0
                    : null === (i = r.artists) || void 0 === i
                      ? void 0
                      : i.length) === 1 &&
                  !(null === (o = e.meta) || void 0 === o
                    ? void 0
                    : null === (l = o.artists[0]) || void 0 === l
                      ? void 0
                      : l.various)
                );
              },
              get isLatestGenreAlbumsAvailable() {
                var d, u;
                return !!(
                  !(null === (d = e.meta) || void 0 === d
                    ? void 0
                    : d.isNonMusic) &&
                  (null === (u = e.meta) || void 0 === u ? void 0 : u.genre)
                );
              },
              get isNotFound() {
                return (
                  e.isRejected &&
                  (e.errorStatusCode === n.CN.NOT_FOUND ||
                    e.errorStatusCode === n.CN.BAD_REQUEST)
                );
              },
              get isCacheNotFound() {
                return e.isRejected && e.errorStatusCode === m.DW;
              },
              get hasDonations() {
                var c;
                return !!(
                  (null === (c = e.donations) || void 0 === c
                    ? void 0
                    : c.isResolved) &&
                  e.donations &&
                  e.donations.items &&
                  e.donations.items.length > 0
                );
              },
              get hasOtherAlbumVersions() {
                return !!(
                  e.isNeededToLoad ||
                  e.loadingState === E.Gui.PENDING ||
                  (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
                );
              },
              get hasLatestGenreAlbums() {
                var g, h;
                let a =
                  e.latestGenreAlbums &&
                  e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0;
                return !!(
                  t.isLatestGenreAlbumsAvailable &&
                  ((null === (g = e.latestGenreAlbums) || void 0 === g
                    ? void 0
                    : g.isNeededToLoad) ||
                    (null === (h = e.latestGenreAlbums) || void 0 === h
                      ? void 0
                      : h.isLoading) ||
                    a)
                );
              },
              get hasOtherArtistAlbums() {
                var y, v;
                let a =
                  e.otherArtistAlbums &&
                  e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0;
                return !!(
                  t.isOtherArtistAlbumsAvailable &&
                  ((null === (y = e.otherArtistAlbums) || void 0 === y
                    ? void 0
                    : y.isNeededToLoad) ||
                    (null === (v = e.otherArtistAlbums) || void 0 === v
                      ? void 0
                      : v.isLoading) ||
                    a)
                );
              },
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === E.Gui.PENDING;
              },
              get isLatestGenreAlbumsLoading() {
                var p, b;
                return !!(
                  (null === (p = e.latestGenreAlbums) || void 0 === p
                    ? void 0
                    : p.isNeededToLoad) ||
                  (null === (b = e.latestGenreAlbums) || void 0 === b
                    ? void 0
                    : b.isLoading)
                );
              },
              get isOtherArtistAlbumsLoading() {
                var f, P;
                return !!(
                  (null === (f = e.otherArtistAlbums) || void 0 === f
                    ? void 0
                    : f.isNeededToLoad) ||
                  (null === (P = e.otherArtistAlbums) || void 0 === P
                    ? void 0
                    : P.isLoading)
                );
              },
              get isRelatedContentLoading() {
                var I, k;
                return !!(
                  (null === (I = e.relatedContent) || void 0 === I
                    ? void 0
                    : I.isNeededToLoad) ||
                  (null === (k = e.relatedContent) || void 0 === k
                    ? void 0
                    : k.isLoading)
                );
              },
              get contextMeta() {
                var C, T, _, N, A, D, L, R, x;
                return {
                  id: e.meta.id,
                  title:
                    null === (C = e.meta) || void 0 === C ? void 0 : C.title,
                  coverUri:
                    null === (T = e.meta) || void 0 === T ? void 0 : T.coverUri,
                  type: null === (_ = e.meta) || void 0 === _ ? void 0 : _.type,
                  year: null === (N = e.meta) || void 0 === N ? void 0 : N.year,
                  version:
                    null === (A = e.meta) || void 0 === A ? void 0 : A.version,
                  genre:
                    null === (D = e.meta) || void 0 === D ? void 0 : D.genre,
                  likesCount:
                    null === (L = e.meta) || void 0 === L
                      ? void 0
                      : L.likesCount,
                  averageColor:
                    null === (R = e.meta) || void 0 === R
                      ? void 0
                      : R.averageColor,
                  available:
                    null === (x = e.meta) || void 0 === x
                      ? void 0
                      : x.isAvailable,
                };
              },
              get tracks() {
                return e.items.filter((e) => e.type !== S.lf.TEXT);
              },
              get lastEpisodes() {
                return t.tracks.slice(0, 5);
              },
              get lastEpisodesTrackIds() {
                return t.lastEpisodes.map((e) => e.id);
              },
              get hasLabel() {
                return !!(e.labels && e.labels.length);
              },
              get shouldShowLabel() {
                let { experiments: a } = (0, s.yj)(e);
                return (
                  t.hasLabel && a.checkExperiment(E.peG.WebNextLabelPage, "on")
                );
              },
              labelUrl: (e) => "/label/".concat(e),
            };
            return t;
          })
          .actions((e) => {
            let t = {
              makeFlatVolumeItems: (t) => {
                let a = 0;
                t.volumes.forEach((i) => {
                  t.volumes.length > 1 &&
                    i[0] &&
                    (e.items.push(f()),
                    e.indexItems.set(k(i[0].id), [e.items.length - 1])),
                    i.forEach((t) => {
                      e.items.push(
                        P({
                          id: t.id,
                          loadingState: E.Gui.IDLE,
                          positionInContext: a,
                        }),
                      );
                      let i = e.indexItems.get(String(t.id));
                      e.indexItems.set(
                        C(t.id),
                        i ? [...i, e.items.length - 1] : [e.items.length - 1],
                      ),
                        a++;
                    });
                });
              },
              updateVolumeItemsState: (t, a) => {
                t.forEach((t) => {
                  let i = e.indexItems.get(String(t));
                  null == i ||
                    i.forEach((i) => {
                      let r = e.items[i];
                      _(r) &&
                        (e.items[i] = P({
                          id: t,
                          loadingState: a,
                          positionInContext: r.positionInContext,
                          hasEverFinished: r.hasEverFinished,
                        }));
                    });
                });
              },
              insertDataToVolumeItems: (t) => {
                t.forEach((t, a) => {
                  let i = e.indexItems.get(C(t.id));
                  null == i ||
                    i.forEach((i) => {
                      var r, l, s, n, o;
                      let d = e.items[0],
                        u = e.items[i],
                        c = e.items[i - 1];
                      if (!_(u)) return;
                      let m =
                          _(d) && d.id === u.id
                            ? 1
                            : null === (s = t.albums) || void 0 === s
                              ? void 0
                              : null === (l = s[0]) || void 0 === l
                                ? void 0
                                : null === (r = l.trackPosition) || void 0 === r
                                  ? void 0
                                  : r.index,
                        g = null == u ? void 0 : u.positionInContext,
                        h =
                          _(c) && (null == c ? void 0 : c.position)
                            ? c.position + 1
                            : m,
                        y = (0, p.Vt)(t, {
                          hasEverFinished:
                            null == u ? void 0 : u.hasEverFinished,
                        });
                      if (y.isRemoved) {
                        e.items[i] = P({
                          id: t.id,
                          loadingState: E.Gui.REJECT,
                          positionInContext: g,
                          position: _(c) ? c.position : a,
                        });
                        return;
                      }
                      e.items[i] = P({
                        id: t.id,
                        loadingState: E.Gui.RESOLVE,
                        positionInContext: g,
                        data: y,
                        position:
                          (null == c ? void 0 : c.type) === S.lf.TEXT ? 1 : h,
                        isBest:
                          null === (o = e.meta) || void 0 === o
                            ? void 0
                            : null === (n = o.bestAlbumTracks) || void 0 === n
                              ? void 0
                              : n.includes(Number(t.id)),
                        hasEverFinished: null == u ? void 0 : u.hasEverFinished,
                      });
                    });
                  let r = e.indexItems.get(k(t.id));
                  null == r ||
                    r.forEach((a) => {
                      var i, r, l;
                      e.items[a] = f(
                        null === (l = t.albums) || void 0 === l
                          ? void 0
                          : null === (r = l[0]) || void 0 === r
                            ? void 0
                            : null === (i = r.trackPosition) || void 0 === i
                              ? void 0
                              : i.volume,
                      );
                    });
                });
              },
              afterCreate() {
                e.getDescriptionTexts();
              },
              setAlbumUnfinished: () => {
                var a;
                t.markUnfinished({ albumId: e.id || 0 }),
                  null === (a = e.meta) || void 0 === a || a.updateFinished(!1);
              },
              setAllTracksUnfinished: (t) => {
                e.allTracksUnfinished = t;
              },
              checkAllAlbumTrackFinished: () => {
                var a, i;
                e.items
                  .filter((e) => {
                    let { type: t, data: a } = e;
                    return a && t !== S.lf.TEXT;
                  })
                  .every((e) => {
                    var t;
                    let { data: a } = e;
                    return null == a
                      ? void 0
                      : null === (t = a.streamProgress) || void 0 === t
                        ? void 0
                        : t.hasEverFinished;
                  }) &&
                  ((null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.listeningFinished) ||
                    (t.markFinished({ albumId: Number(e.id) }),
                    null === (i = e.meta) ||
                      void 0 === i ||
                      i.updateFinished(!0)));
              },
              markTracksFinished: (t) => {
                let { withoutTracks: a = [] } = t;
                e.items.forEach((e) => {
                  if (e.type === S.lf.TEXT) return;
                  let { data: t } = e;
                  if (!(t && a.includes(t.id))) {
                    if (t) {
                      var i;
                      null === (i = t.streamProgress) ||
                        void 0 === i ||
                        i.updateEverFinished(!0);
                    } else e.updateEverFinished(!0);
                  }
                });
              },
              markFinished: (0, s.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: i } = (0, s.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumFinished(t);
                } catch (e) {
                  return i.error(e), o.P.ERROR;
                }
              }),
              markUnfinished: (0, s.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: i } = (0, s.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumUnfinished(t);
                } catch (e) {
                  return i.error(e), o.P.ERROR;
                }
              }),
              setListeningFinishedStatus: (0, s.ls)(function* () {
                var a;
                return (
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.listeningFinished
                )
                  ? (t.setAllTracksUnfinished(!0),
                    yield t.markUnfinished({ albumId: Number(e.id) }))
                  : yield t.markFinished({ albumId: Number(e.id) });
              }),
              getLatestGenreAlbums: (0, s.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, s.dU)(e);
                if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                  try {
                    e.latestGenreAlbums.loadingState = E.Gui.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, s.pj)(i.albums.map(h.ym))),
                      (e.latestGenreAlbums.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = E.Gui.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, s.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: r } = (0, s.dU)(
                  e,
                );
                if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = E.Gui.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = E.Gui.PENDING;
                    let r = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, s.pj)(
                      r.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(h.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    r.error(t),
                      (e.otherArtistAlbums.loadingState = E.Gui.REJECT);
                  }
              }),
              getTracks: (0, s.ls)(function* (a) {
                let { trackIds: i } = a,
                  { tracksResource: r, modelActionsLogger: l } = (0, s.dU)(e);
                try {
                  var n;
                  if (!(null === (n = e.meta) || void 0 === n ? void 0 : n.id))
                    return;
                  t.updateVolumeItemsState(i, E.Gui.PENDING);
                  let a = yield r.getTracksMeta({
                    trackIds: I(i, e.meta.id),
                    withProgress: !0,
                  });
                  t.insertDataToVolumeItems(a);
                } catch (e) {
                  l.error(e), t.updateVolumeItemsState(i, E.Gui.REJECT);
                }
              }),
              getDonations: (0, s.ls)(function* (t) {
                let { albumId: a } = t,
                  { experiments: i } = (0, s.yj)(e),
                  { donationResource: r, modelActionsLogger: l } = (0, s.dU)(e);
                if (
                  i.checkExperiment(E.peG.WebNextAlbumDonationButton, "on") &&
                  e.donations &&
                  !e.donations.isLoading
                )
                  try {
                    e.donations.loadingState = E.Gui.PENDING;
                    let { donations: t } = yield r.getAlbumDonations({
                      albumId: a,
                    });
                    t &&
                      (e.donations.items = (0, s.pj)(
                        t.map((e) => {
                          var t;
                          return (0, y.fv)({
                            url: e.url,
                            goal:
                              null === (t = e.goal) || void 0 === t
                                ? void 0
                                : t.title,
                            artist: e.artist,
                          });
                        }),
                      )),
                      (e.donations.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    l.error(t), (e.donations.loadingState = E.Gui.REJECT);
                  }
              }),
              getData: (0, s.ls)(function* (a) {
                let {
                    albumId: i,
                    resumeStream: o,
                    preloadedAlbum: m,
                    withLatestGenreAlbumsRequest: g = !0,
                    withOtherArtistAlbumsRequest: y = !0,
                    sonataState: p,
                  } = a,
                  { albumResource: S, modelActionsLogger: b } = (0, s.dU)(e),
                  { experiments: f, disclaimer: P } = (0, s.yj)(e),
                  I = f.checkExperiment(
                    E.peG.WebNextAlbumDisableVersions,
                    "on",
                  ),
                  k = f.checkExperiment(E.peG.WebNextAlbumDisableTracks, "on"),
                  C = f.checkExperiment(
                    E.peG.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  T = f.checkExperiment(
                    E.peG.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  _ = f.checkExperiment(E.peG.WebNextAgentPodcast, "on");
                if (((e.id = i), e.loadingState !== E.Gui.PENDING))
                  try {
                    var N, A, D, L, R, x, w;
                    let a, b;
                    e.loadingState = E.Gui.PENDING;
                    let f = m;
                    if (
                      (f ||
                        (f = yield S.getAlbumWithTracksIds({
                          albumId: i,
                          resumeStream: o,
                        })),
                      (null == f ? void 0 : f.error) === "not-found")
                    ) {
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                        (e.loadingState = E.Gui.REJECT),
                        e.otherArtistAlbums &&
                          (e.otherArtistAlbums.loadingState = E.Gui.REJECT),
                        e.latestGenreAlbums &&
                          (e.latestGenreAlbums.loadingState = E.Gui.REJECT);
                      return;
                    }
                    if (
                      null === (N = f.deprecation) || void 0 === N
                        ? void 0
                        : N.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        f.deprecation.targetAlbumId),
                        (e.loadingState = E.Gui.RESOLVE);
                      return;
                    }
                    let G = (
                        null !== (D = f.disclaimers) && void 0 !== D ? D : []
                      ).includes(d.e.MODAL),
                      V =
                        f.type === u.V.PODCAST &&
                        (null !== (L = f.disclaimers) && void 0 !== L
                          ? L
                          : []
                        ).includes(d.e.FOREIGN_AGENT),
                      O =
                        null ===
                          (A = (0, E.UY5)(
                            null !== (R = f.disclaimers) && void 0 !== R
                              ? R
                              : [],
                            d.e.FOREIGN_AGENT,
                          )) || void 0 === A
                          ? void 0
                          : A[0];
                    if (
                      ((G || (_ && V) || O) &&
                        (yield P.getDisclaimerData({
                          entityId: i,
                          entityType:
                            f.type === u.V.PODCAST
                              ? E.coP.PODCAST
                              : E.coP.ALBUM,
                          disclaimerId: null == O ? void 0 : O.id,
                        })),
                      p.setUnloadedEntitiesData(
                        f.volumes.flat().map((e) => (0, v.RN)(e.id)),
                      ),
                      (e.meta = (0, h.ym)(f)),
                      (e.labels = (0, s.pj)(f.labels)),
                      (e.contentWarning = (0, s.pj)(f.contentWarning)),
                      (e.description = (0, s.pj)(f.description)),
                      !I &&
                        f.duplicates &&
                        f.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, s.pj)(
                          null === (x = f.duplicates) || void 0 === x
                            ? void 0
                            : x.map(h.ym),
                        )),
                      !k)
                    ) {
                      t.makeFlatVolumeItems(f);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === c.V.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !C &&
                      e.isLatestGenreAlbumsAvailable &&
                      g &&
                      (a = t.getLatestGenreAlbums({
                        category: r.RECENT_ALBUMS,
                        period: l.WEEK,
                        pageSize: 8,
                        genre: f.genre,
                      })),
                      !T &&
                        e.isOtherArtistAlbumsAvailable &&
                        y &&
                        (b = t.getOtherArtistAlbums(
                          {
                            artistId: String(
                              null === (w = f.artists[0]) || void 0 === w
                                ? void 0
                                : w.id,
                            ),
                            limit: 8,
                          },
                          i,
                        )),
                      yield Promise.allSettled([a, b]),
                      e.loadingState !== E.Gui.IDLE &&
                        (e.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    b.error(t),
                      t instanceof n.du && (e.errorStatusCode = t.statusCode),
                      e.loadingState !== E.Gui.IDLE &&
                        ((e.loadingState = E.Gui.REJECT),
                        e.otherArtistAlbums &&
                          (e.otherArtistAlbums.loadingState = E.Gui.REJECT),
                        e.latestGenreAlbums &&
                          (e.latestGenreAlbums.loadingState = E.Gui.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, s.ls)(function* () {
                let { albumResource: t, modelActionsLogger: a } = (0, s.dU)(e);
                if (e.relatedContent && !e.relatedContent.isLoading)
                  try {
                    var i, r;
                    if (
                      !(null === (i = e.meta) || void 0 === i ? void 0 : i.id)
                    )
                      return;
                    e.relatedContent.loadingState = E.Gui.PENDING;
                    let a = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, s.pj)(
                      null === (r = a.blocks) || void 0 === r
                        ? void 0
                        : r.map(T),
                    )),
                      (e.relatedContent.loadingState = E.Gui.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.relatedContent.loadingState = E.Gui.REJECT);
                  }
              }),
              reset(t) {
                var a, i, r, l;
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  e.indexItems.clear(),
                  (e.loadingState = E.Gui.IDLE),
                  (e.description = ""),
                  (e.allTracksUnfinished = !1),
                  null === (a = e.latestGenreAlbums) ||
                    void 0 === a ||
                    a.reset(),
                  null === (i = e.otherArtistAlbums) ||
                    void 0 === i ||
                    i.reset(),
                  null === (r = e.relatedContent) || void 0 === r || r.reset(),
                  null === (l = e.donations) || void 0 === l || l.reset(),
                  e.destroyItems([
                    e.meta,
                    e.items,
                    e.otherAlbumVersions,
                    e.labels,
                  ]);
              },
            };
            return t;
          });
      a(96865);
      var x = a(40012);
      a(9730), a(10356);
      let w = s.V5.compose(
          s.V5.model("PromoCampaign", { isActive: s.V5.boolean }),
          b.fu,
        )
          .views((e) => ({
            get isPromoCampaignActive() {
              return e.isResolved && e.isActive;
            },
            get isPromoCampaignInactive() {
              return e.isRejected || (e.isResolved && !e.isActive);
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let { isActive: a, albumId: i } = t,
                { promoResource: r, modelActionsLogger: l } = (0, s.dU)(e);
              if (!e.isLoading)
                try {
                  if (((e.loadingState = E.Gui.PENDING), "boolean" == typeof a))
                    e.isActive = a;
                  else {
                    let t = yield r.getPromoAlbumInfo({ albumId: i });
                    e.isActive = t.active;
                  }
                  e.loadingState = E.Gui.RESOLVE;
                } catch (t) {
                  l.error(t), (e.loadingState = E.Gui.REJECT);
                }
            }),
          })),
        G = R.props({ promoCampaign: w, state: v.wQ })
          .actions((e) => ({
            async getDataByCampaign(t) {
              let { albumId: a, preloadedAlbum: i, isActive: r } = t;
              await e.promoCampaign.getData({ albumId: a, isActive: r }),
                e.promoCampaign.isPromoCampaignActive &&
                  (await e.getData({
                    albumId: a,
                    resumeStream: !1,
                    preloadedAlbum: i,
                    withLatestGenreAlbumsRequest: !1,
                    withOtherArtistAlbumsRequest: !1,
                    sonataState: e.state,
                  }));
            },
          }))
          .named("PromoLandingAlbumPage");
    },
    42579: function (e, t, a) {
      "use strict";
      a.d(t, {
        _1: function () {
          return m;
        },
        oA: function () {
          return g.ChartPodcastsPage;
        },
      });
      var i = a(13534),
        r = a(22874),
        l = a(62726),
        s = a(72783),
        n = a(40892);
      let o = r.V5.compose(
        r.V5.model("ChartPodcastsPage", {
          title: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(s.ug),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
        }),
        n.Al,
        n.fu,
      )
        .views((e) => {
          let t = {
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === i.Gui.PENDING;
            },
            get isNotFound() {
              var a;
              let t =
                  e.isResolved &&
                  !(null === (a = e.items) || void 0 === a ? void 0 : a.length),
                r =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
              return (e.loadingState === i.Gui.REJECT && r) || t;
            },
            get isSomethingWrong() {
              return e.isRejected && !t.isNotFound;
            },
          };
          return t;
        })
        .actions((e) => ({
          getData: (0, r.ls)(function* (t) {
            let { chartResource: a, modelActionsLogger: n } = (0, r.dU)(e);
            if (e.loadingState !== i.Gui.PENDING)
              try {
                let l;
                (e.loadingState = i.Gui.PENDING),
                  (l = t
                    ? yield a.getChartPodcastsCategory({ categoryId: t })
                    : yield a.getChartPodcasts()),
                  (e.title = l.title),
                  l.chartPositions &&
                    (e.items = (0, r.pj)(
                      l.chartPositions.map((e) =>
                        (0, s.re)(e.album, e.chartPosition),
                      ),
                    )),
                  e.loadingState !== i.Gui.IDLE &&
                    (e.loadingState = i.Gui.RESOLVE);
              } catch (t) {
                n.error(t),
                  t instanceof l.du &&
                    (t.statusCode === l.CN.NOT_FOUND ||
                      t.statusCode === l.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = l.CN.NOT_FOUND),
                  e.loadingState !== i.Gui.IDLE &&
                    (e.loadingState = i.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = i.Gui.IDLE),
              (e.title = null),
              (e.errorStatusCode = null),
              e.destroyItems([e.items]);
          },
        }));
      var d = a(1150);
      let u = r.V5.model("ChartPagePlaylistModel", {
          uuid: r.V5.string,
          uid: r.V5.number,
          kind: r.V5.number,
        }),
        c = r.V5.compose(
          r.V5.model("ChartTracksPage", {
            title: r.V5.maybeNull(r.V5.string),
            playlistMeta: r.V5.maybeNull(u),
            items: r.V5.array(d.le),
          }),
          n.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === i.Gui.PENDING;
            },
          }))
          .actions((e) => ({
            getTracks: (0, r.ls)(function* () {
              let { landing3Resource: t, modelActionsLogger: a } = (0, r.dU)(e);
              if (e.loadingState !== i.Gui.PENDING)
                try {
                  e.loadingState = i.Gui.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.chart.title),
                    (e.playlistMeta = (0, r.pj)({
                      uuid: a.chart.playlistUuid,
                      uid: a.chart.uid,
                      kind: a.chart.kind,
                    })),
                    (e.items = (0, r.pj)(
                      a.chart.tracks.map((e) => (0, d.S7)(e.track, e.chart)),
                    )),
                    e.loadingState !== i.Gui.IDLE &&
                      (e.loadingState = i.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== i.Gui.IDLE &&
                      (e.loadingState = i.Gui.REJECT);
                }
            }),
          })),
        m = r.V5.model("ChartPageModel", {
          tracksSubPage: c,
          podcastsSubPage: o,
        });
      a(18018);
      var g = a(81538);
      a(89057);
    },
    18018: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsNotFoundPage: function () {
          return o;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(35551),
        n = a(13534);
      let o = (0, r.Pi)(() => {
        let {
          chart: { podcastsSubPage: e },
        } = (0, n.oR4)();
        return (
          (0, l.useEffect)(() => {
            e.reset();
          }, []),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    81538: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsPage: function () {
          return E;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(35846),
        u = a(28676),
        c = a(17392),
        m = a(30948),
        g = a(72783),
        h = a(69947),
        y = a(13534),
        v = a(97141),
        p = a(74487),
        S = a.n(p);
      let E = (0, l.Pi)((e) => {
        let { categoryId: t } = e,
          {
            chart: { podcastsSubPage: a },
            settings: { isMobile: l },
          } = (0, y.oR4)(),
          { contentScrollRef: p, setContentScrollRef: E } = (0, y.$Y6)(),
          { formatMessage: b } = (0, o.Z)(),
          f = (0, y.k67)(),
          P = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(v.$_, { className: S().footer }),
            }),
            [],
          ),
          I = (0, n.useMemo)(
            () =>
              a.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  })
                : (0, i.jsx)(u.Shimmer, {
                    className: S().shimmerTitle,
                    radius: "l",
                  }),
            [a.title],
          );
        if (
          ((0, y.NOh)(a.isResolved),
          a.isNotFound && (0, s.notFound)(),
          (0, n.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          a.isNeededToLoad && (0, n.use)(a.getData(t)),
          a.isSomethingWrong)
        )
          return (0, i.jsx)(m.D, {});
        let k = a.isLoading ? 20 : a.items.length;
        return (0, i.jsx)(y.Lh6, {
          pageId: t ? y.Rhz.CHART_PODCASTS_CATEGORY : y.Rhz.CHART_PODCASTS,
          children: (0, i.jsx)(h.I7, {
            scrollElement: p,
            outerTitle: a.title,
            children: (0, i.jsxs)("div", {
              className: S().root,
              ...(0, d.BA)(d.Br.chart.CHART_PODCASTS),
              children: [
                (0, i.jsx)(v.h4, {
                  variant: v.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: f.canBack,
                  children: I,
                }),
                (0, i.jsx)(v.Wv, {
                  className: (0, r.W)(S().scrollContainer, S().important),
                  listClassName: S().content,
                  customComponents: P,
                  itemContentCallback: (e) => {
                    let t = a.items[e],
                      r = b(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: b({ id: "entity-names.album" }) },
                      );
                    return !t || a.isLoading
                      ? (0, i.jsx)(v.hi, { "aria-label": r })
                      : (0, i.jsx)(g.rf, {
                          album: t,
                          contentLinesCount: 3,
                          withLikesCount: !0,
                          withChart: !0,
                          withAddition: !1,
                        });
                  },
                  handleRef: E,
                  initialItemCount: k,
                  totalCount: k,
                  isMobileLayout: l,
                  useWindowScroll: l,
                  context: {
                    listAriaLabel: b({
                      id: "entity-names.chart-podcasts-list",
                    }),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    89057: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartTracksPage: function () {
          return E;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(65067),
        n = a(9317),
        o = a(35846),
        d = a(84638),
        u = a(28676),
        c = a(17392),
        m = a(30948),
        g = a(69947),
        h = a(1150),
        y = a(13534),
        v = a(97141),
        p = a(99396),
        S = a.n(p);
      let E = (0, l.Pi)(() => {
        let { formatMessage: e } = (0, n.Z)(),
          {
            chart: { tracksSubPage: t },
            settings: { isMobile: a },
          } = (0, y.oR4)(),
          l = (0, y.k67)(),
          { contentScrollRef: p, setContentScrollRef: E } = (0, y.$Y6)(),
          b = (0, y.iXn)(),
          { from: f } = (0, y.MhG)({ pageId: y.Rhz.CHART });
        (0, y.NOh)(t.isResolved);
        let P = (0, s.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(h._3, {
                    track: a,
                    playContextParams: b(e, {
                      contextData: {
                        type: d.A.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: f,
                      },
                      queueParams: { index: e, entityId: a.id },
                      loadContextMeta: !0,
                    }),
                  })
                : (0, i.jsx)(v.DX, {
                    isActive: !0,
                    className: S().shimmerItem,
                    variant: y.Lxt.PLAYLIST,
                  });
            },
            [f, b, t.isLoading, t.items, t.playlistMeta],
          ),
          I = (0, s.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(v.$_, { className: S().footer }),
            }),
            [],
          ),
          k = (0, s.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(u.Shimmer, {
                    className: S().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return (t.isNeededToLoad && (0, s.use)(t.getTracks()), t.isRejected)
          ? (0, i.jsx)(m.D, {})
          : (0, i.jsx)(y.Lh6, {
              pageId: y.Rhz.CHART,
              children: (0, i.jsx)(g.I7, {
                scrollElement: p,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: S().root,
                  ...(0, o.BA)(o.Br.chart.CHART_PAGE),
                  children: [
                    (0, i.jsx)(v.h4, {
                      variant: v.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: l.canBack,
                      children: k,
                    }),
                    (0, i.jsx)(v.Wv, {
                      className: (0, r.W)(S().scrollContainer, S().important),
                      listClassName: S().content,
                      customComponents: I,
                      totalCount: t.items.length,
                      itemContentCallback: P,
                      debounceDurationInMs: 300,
                      handleRef: E,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                      isMobileLayout: a,
                      useWindowScroll: a,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    76459: function (e, t, a) {
      "use strict";
      a.d(t, {
        FavoriteTracksPage: function () {
          return d;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(13534),
        n = a(35551);
      let o = (0, r.Pi)(() => (0, i.jsx)(n.T, {})),
        d = (0, r.Pi)(() => {
          let { favoriteTracks: e } = (0, s.oR4)(),
            t = (0, s.s0h)(e.playlistUrl);
          if (
            ((0, l.useEffect)(
              () => () => {
                e.reset();
              },
              [e],
            ),
            (0, l.useEffect)(() => {
              e.playlistUrl && t();
            }, [e.playlistUrl, t]),
            e.isNeededToLoad && (0, l.use)(e.getPlaylistUrl()),
            e.isRejected)
          )
            return (0, i.jsx)(o, {});
        });
    },
    26172: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return y.GenreAlbumsPage;
        },
        eq: function () {
          return v.GenreArtistsPage;
        },
        a0: function () {
          return p.GenrePage;
        },
        Kx: function () {
          return h;
        },
        Fe: function () {
          return S.GenrePlaylistsPage;
        },
      });
      var i = a(22874),
        r = a(62726),
        l = a(72783),
        s = a(7797),
        n = a(64353),
        o = a(13534),
        d = a(40892);
      let u = i.V5.compose(
          i.V5.model("GenreAlbumsPage", {
            pager: i.V5.maybeNull(d.Vn),
            alreadyRequestedPages: i.V5.map(i.V5.number),
            pendingPages: i.V5.map(i.V5.number),
            requests: i.V5.maybeNull(i.V5.number),
            errorStatusCode: i.V5.maybeNull(i.V5.number),
            fullTitle: i.V5.maybeNull(i.V5.string),
            items: i.V5.array(i.V5.maybeNull(l.ug)),
          }),
          d.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  i =
                    e.errorStatusCode === r.CN.NOT_FOUND ||
                    e.errorStatusCode === r.CN.BAD_REQUEST;
                return (e.isRejected && i) || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: s = 0,
                  pageSize: n = 20,
                  preloadedMeta: d,
                } = t,
                { metatagsResource: u, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(s))) ||
                  e.alreadyRequestedPages.has("".concat(s))
                )
              ) {
                "number" == typeof s &&
                  e.alreadyRequestedPages.set("".concat(s), s);
                try {
                  var m;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(s), s);
                  let t = d;
                  t ||
                    (t = yield u.getMetatagAlbums({
                      id: a,
                      offset: s,
                      limit: n,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let r = { page: s, perPage: n, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: r.total }, () => null),
                    ));
                  let c = t.albums.map(l.ym);
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: s,
                    pageSize: n,
                  }),
                    (e.pager = r),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(s));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        c = i.V5.compose(
          i.V5.model("GenreArtistsPage", {
            pager: i.V5.maybeNull(d.Vn),
            alreadyRequestedPages: i.V5.map(i.V5.number),
            pendingPages: i.V5.map(i.V5.number),
            requests: i.V5.maybeNull(i.V5.number),
            errorStatusCode: i.V5.maybeNull(i.V5.number),
            fullTitle: i.V5.maybeNull(i.V5.string),
            items: i.V5.array(i.V5.maybeNull(n.Go)),
          }),
          d.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  i =
                    e.errorStatusCode === r.CN.NOT_FOUND ||
                    e.errorStatusCode === r.CN.BAD_REQUEST;
                return (e.isRejected && i) || t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: l = 0,
                  pageSize: s = 20,
                  preloadedMeta: d,
                } = t,
                { metatagsResource: u, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(l))) ||
                  e.alreadyRequestedPages.has("".concat(l))
                )
              ) {
                "number" == typeof l &&
                  e.alreadyRequestedPages.set("".concat(l), l);
                try {
                  var m;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(l), l);
                  let t = d;
                  t ||
                    (t = yield u.getMetatagArtists({
                      id: a,
                      offset: l,
                      limit: s,
                      period: "week",
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let r = { page: l, perPage: s, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: r.total }, () => null),
                    ));
                  let c = t.artists.map((e) => (0, n.d)(e.artist));
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: l,
                    pageSize: s,
                  }),
                    (e.pager = r),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(l));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          }));
      var m = a(10979);
      let g = i.V5.compose(
          i.V5.model("GenrePlaylistsPage", {
            pager: i.V5.maybeNull(d.Vn),
            alreadyRequestedPages: i.V5.map(i.V5.number),
            pendingPages: i.V5.map(i.V5.number),
            requests: i.V5.maybeNull(i.V5.number),
            errorStatusCode: i.V5.maybeNull(i.V5.number),
            fullTitle: i.V5.maybeNull(i.V5.string),
            items: i.V5.array(i.V5.maybeNull(m.Cd)),
          }),
          d.fu,
        )
          .views((e) => {
            let t = {
              get isNotFound() {
                var a;
                let t =
                    e.isResolved &&
                    (null === (a = e.pager) || void 0 === a
                      ? void 0
                      : a.total) === 0,
                  i =
                    e.errorStatusCode === r.CN.NOT_FOUND ||
                    e.errorStatusCode === r.CN.BAD_REQUEST;
                return (e.isRejected && i) || t;
              },
              get isSomethingWrong() {
                return (
                  !t.isNotFound &&
                  e.isRejected &&
                  0 === e.alreadyRequestedPages.size
                );
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: r = 0,
                  pageSize: l = 20,
                  preloadedMeta: s,
                } = t,
                { metatagsResource: n, modelActionsLogger: d } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gui.PENDING &&
                    e.pendingPages.has("".concat(r))) ||
                  e.alreadyRequestedPages.has("".concat(r))
                )
              ) {
                "number" == typeof r &&
                  e.alreadyRequestedPages.set("".concat(r), r);
                try {
                  var u;
                  (e.loadingState = o.Gui.PENDING),
                    e.pendingPages.set("".concat(r), r);
                  let t = s;
                  t ||
                    (t = yield n.getMetatagPlaylists({
                      id: a,
                      offset: r,
                      limit: l,
                      withLikesCount: !0,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let d = { page: r, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: d.total }, () => null),
                    ));
                  let c = t.playlists.map(m.PV);
                  (0, o.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: r,
                    pageSize: l,
                  }),
                    (e.pager = d),
                    (e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    e.alreadyRequestedPages.delete("".concat(r)),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(r));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        h = i.V5.compose(
          i.V5.model("GenrePage", {
            id: i.V5.maybeNull(i.V5.string),
            errorStatusCode: i.V5.maybeNull(i.V5.number),
            fullTitle: i.V5.maybeNull(i.V5.string),
            artists: i.V5.array(n.Go),
            albums: i.V5.array(l.ug),
            playlists: i.V5.array(s.d2),
            albumsSubpage: u,
            artistsSubpage: c,
            playlistsSubpage: g,
          }),
          d.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === o.Gui.PENDING;
              },
              get hasAlbums() {
                return t.isLoading || e.albums.length > 0;
              },
              get hasArtists() {
                return t.isLoading || e.artists.length > 0;
              },
              get hasPlaylists() {
                return t.isLoading || e.playlists.length > 0;
              },
              get isNotFound() {
                let a =
                    e.isResolved &&
                    !t.hasAlbums &&
                    !t.hasArtists &&
                    !t.hasPlaylists,
                  i =
                    e.errorStatusCode === r.CN.NOT_FOUND ||
                    e.errorStatusCode === r.CN.BAD_REQUEST;
                return (e.isRejected && i) || a;
              },
            };
            return t;
          })
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { id: a, preloadedMeta: d } = t,
                { metatagsResource: u, modelActionsLogger: c } = (0, i.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  e.loadingState = o.Gui.PENDING;
                  let t = d;
                  t || (t = yield u.getMetatagById({ id: a })),
                    (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, i.pj)(t.artists.map(n.d))),
                    (e.albums = (0, i.pj)(t.albums.map(l.ym))),
                    (e.playlists = (0, i.pj)(t.playlists.map(s.Q9))),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = o.Gui.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, i.pj)([])),
                (e.albums = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([]));
            },
          }));
      var y = a(84009),
        v = a(68730);
      a(88810);
      var p = a(7038),
        S = a(82522);
      a(75309);
      var E = a(65067),
        b = a(95821);
      let f = async (e, t) => {
        try {
          let {
            container: a,
            backendHostTld: i,
            locale: r,
            host: l,
            fullUrl: s,
            isRSC: n,
            requestUrl: d,
          } = await (0, o.rbP)();
          if (!e || n)
            return {
              tld: "",
              locale: null,
              host: "",
              fullUrl: null,
              url: null,
            };
          let u = a.get(o.ZOY);
          return {
            genreMeta: await t(u, e),
            tld: i,
            locale: r,
            host: l,
            fullUrl: s,
            url: d,
          };
        } catch (e) {
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        }
      };
      (0, E.cache)(async (e) =>
        f(e, async (e, t) =>
          e.getMetatagAlbums({ id: t, offset: 0, limit: b.O }),
        ),
      ),
        (0, E.cache)(async (e) =>
          f(e, async (e, t) =>
            e.getMetatagArtists({
              id: t,
              offset: 0,
              limit: b.O,
              period: "week",
            }),
          ),
        ),
        (0, E.cache)(async (e) =>
          f(e, async (e, t) => e.getMetatagById({ id: t })),
        ),
        (0, E.cache)(async (e) =>
          f(e, async (e, t) =>
            e.getMetatagPlaylists({
              id: t,
              offset: 0,
              limit: b.O,
              withLikesCount: !0,
            }),
          ),
        );
    },
    95821: function (e, t, a) {
      "use strict";
      a.d(t, {
        O: function () {
          return i;
        },
      });
      let i = 20;
    },
    75309: function (e, t, a) {
      "use strict";
      a.d(t, {
        P: function () {
          return l;
        },
      });
      var i = a(13534),
        r = a(21535);
      async function l(e) {
        let {
          genreMeta: t,
          locale: a,
          fullUrl: l,
          url: s,
          tld: n,
          host: o,
        } = e;
        if (!t)
          return (0, i.Wm6)({ fullUrl: l, locale: a, url: s, tld: n, host: o });
        let d = await (0, i.EQQ)(a),
          u = t.title.fullTitle,
          c = d({ id: "metadata.genre-title" }, { genreTitle: u }),
          m = (function (e) {
            let { genreTitle: t, artists: a, messageFormatter: i } = e,
              r = null;
            return (
              Array.isArray(a) &&
                (r = a
                  .slice(0, 3)
                  .map((e) => ("artist" in e ? e.artist.name : e.name))
                  .join(", ")),
              r
                ? i(
                    { id: "metadata.genre-description" },
                    { genreTitle: t, artistsList: r },
                  )
                : i(
                    { id: "metadata.genre-description-short" },
                    { genreTitle: t },
                  )
            );
          })({
            genreTitle: u,
            artists: "artists" in t ? t.artists : void 0,
            messageFormatter: d,
          }),
          g = r.env.ASSET_PREFIX || "",
          h = "".concat(o).concat(g, "/meta/og-image.png");
        return {
          title: c,
          description: m,
          openGraph: (0, i.A36)({
            ogTitle: (0, i.bYF)(u),
            ogDescription: m,
            fullUrl: null != l ? l : "",
            locale: a,
            siteName: d({ id: "metadata.yandex-music" }),
            ogImage: h,
          }),
          twitter: (0, i.rz9)({
            cardType: i.qUR.APP,
            title: c,
            url: null != s ? s : "",
            appName: d({ id: "metadata.yandex-music" }),
          }),
          appLinks: (0, i.VMi)({
            additional: {
              tld: n,
              url: null != s ? s : "",
              fullUrl: null != l ? l : "",
              host: o,
            },
            appName: d({ id: "metadata.yandex-music" }),
          }),
        };
      }
    },
    84009: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return f;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(17392),
        u = a(30948),
        c = a(72783),
        m = a(69947),
        g = a(13534),
        h = a(97141),
        y = a(95821),
        v = a(75309);
      let p = (e) => {
          var t, a, i;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            albums: e.items.map(c.DR),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.perPage) ||
                0,
              total:
                (null === (i = e.pager) || void 0 === i ? void 0 : i.total) ||
                0,
            },
          };
        },
        S = (e) => {
          (0, n.useEffect)(() => {
            if (!e) return;
            let t = p(e);
            (0, v.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var E = a(68540),
        b = a.n(E);
      let f = (0, l.Pi)((e) => {
        var t, a, l;
        let { metatagId: v, preloadedMeta: p } = e,
          {
            genre: { albumsSubpage: E },
            settings: { isMobile: f },
          } = (0, g.oR4)(),
          { formatMessage: P } = (0, o.Z)(),
          { contentScrollRef: I, setContentScrollRef: k } = (0, g.$Y6)(),
          C = (0, g.k67)(),
          T = (0, n.useCallback)(
            (e) => {
              v && E.getData({ metatagId: v, page: e, pageSize: y.O });
            },
            [E, v],
          );
        (0, n.useEffect)(
          () => () => {
            E.reset();
          },
          [E],
        ),
          E.isNotFound && (0, s.notFound)(),
          (0, g.NOh)(E.isNeededToLoad),
          S(E);
        let _ = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(h.$_, { className: b().footer }) }),
          [],
        );
        return (v &&
          E.isNeededToLoad &&
          (0, n.use)(
            E.getData({
              preloadedMeta: p,
              metatagId: v,
              page: 0,
              pageSize: y.O,
            }),
          ),
        E.isSomethingWrong)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_ALBUMS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: I,
                outerTitle: E.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: b().root,
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: h.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: E.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(h.Wv, {
                      className: (0, r.W)(b().scrollContainer, b().important),
                      customComponents: _,
                      itemContentCallback: (e) => {
                        let t = E.items[e],
                          a = P(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: P({ id: "entity-names.album" }) },
                          );
                        return t
                          ? (0, i.jsx)(
                              c.rf,
                              { album: t, contentLinesCount: 4 },
                              t.id,
                            )
                          : (0, i.jsx)(h.hi, {
                              "aria-label": a,
                              linesCount: 4,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == E
                              ? void 0
                              : null === (t = E.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: T,
                      pageSize: y.O,
                      totalRequests:
                        null !== (l = E.requests) && void 0 !== l ? l : 0,
                      listClassName: b().content,
                      itemClassName: b().item,
                      handleRef: k,
                      context: {
                        listAriaLabel: P(
                          { id: "mixes.albums-list" },
                          { genreName: E.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: f,
                      useWindowScroll: f,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    68730: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return P;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(17392),
        u = a(30948),
        c = a(55051),
        m = a(69947),
        g = a(13534),
        h = a(97141),
        y = a(95821),
        v = a(75309),
        p = a(64353);
      let S = (e) => {
          var t, a, i;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            artists: e.items.map((e) => ({
              artist: (0, p.zg)(e),
              popularTracks: [],
            })),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.perPage) ||
                0,
              total:
                (null === (i = e.pager) || void 0 === i ? void 0 : i.total) ||
                0,
            },
          };
        },
        E = (e) => {
          (0, n.useEffect)(() => {
            if (!e) return;
            let t = S(e);
            (0, v.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var b = a(14546),
        f = a.n(b);
      let P = (0, l.Pi)((e) => {
        var t, a, l;
        let { metatagId: v, preloadedMeta: p } = e,
          {
            genre: { artistsSubpage: S },
            settings: { isMobile: b },
          } = (0, g.oR4)(),
          { formatMessage: P } = (0, o.Z)(),
          { contentScrollRef: I, setContentScrollRef: k } = (0, g.$Y6)(),
          C = (0, g.k67)(),
          T = (0, n.useCallback)(
            (e) => {
              v && S.getData({ metatagId: v, page: e, pageSize: y.O });
            },
            [S, v],
          );
        (0, n.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        ),
          S.isNotFound && (0, s.notFound)(),
          (0, g.NOh)(S.isResolved),
          E(S);
        let _ = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(h.$_, { className: f().footer }) }),
          [],
        );
        return (v &&
          S.isNeededToLoad &&
          (0, n.use)(
            S.getData({
              preloadedMeta: p,
              metatagId: v,
              page: 0,
              pageSize: y.O,
            }),
          ),
        S.isSomethingWrong)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_ARTISTS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: I,
                outerTitle: S.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: f().root,
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: h.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: S.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(h.Wv, {
                      className: (0, r.W)(f().scrollContainer, f().important),
                      customComponents: _,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == S
                              ? void 0
                              : null === (t = S.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = P(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: P({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(h.hi, {
                              "aria-label": r,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == S
                              ? void 0
                              : null === (t = S.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: T,
                      pageSize: y.O,
                      totalRequests:
                        null !== (l = S.requests) && void 0 !== l ? l : 0,
                      listClassName: f().content,
                      itemClassName: f().item,
                      handleRef: k,
                      context: {
                        listAriaLabel: P(
                          { id: "mixes.artists-list" },
                          { genreName: S.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: b,
                      useWindowScroll: b,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    88810: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return s;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(35551);
      let s = (0, r.Pi)(() => (0, i.jsx)(l.T, {}));
    },
    7038: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return C;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(17294),
        u = a(17392),
        c = a(30948),
        m = a(72783),
        g = a(55051),
        h = a(69947),
        y = a(7797),
        v = a(13534),
        p = a(97141),
        S = a(75309),
        E = a(64353),
        b = a(10979);
      let f = (e) => ({
          id: "",
          title: { title: "", fullTitle: e.fullTitle || "" },
          liked: !1,
          tracks: [],
          artists: e.artists.map(E.zg),
          composers: [],
          albums: e.albums.map(m.DR),
          playlists: e.playlists.map(b.Iq),
        }),
        P = (e) => {
          (0, n.useEffect)(() => {
            if (!e) return;
            let t = f(e);
            (0, S.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, v.gOT)(e);
            });
          }, [e]);
        };
      var I = a(35172),
        k = a.n(I);
      let C = (0, l.Pi)((e) => {
        let { metatagId: t, preloadedMeta: a } = e,
          { genre: l } = (0, v.oR4)(),
          { formatMessage: S } = (0, o.Z)(),
          { contentScrollRef: E, setContentScrollRef: b } = (0, v.$Y6)(),
          f = (0, v.k67)();
        return (l.isNotFound && (0, s.notFound)(),
        (0, n.useEffect)(
          () => () => {
            l.reset();
          },
          [l],
        ),
        (0, v.NOh)(l.isResolved),
        P(l),
        t &&
          l.isNeededToLoad &&
          (0, n.use)(l.getData({ id: t, preloadedMeta: a })),
        l.isRejected && !l.isNotFound)
          ? (0, i.jsx)(c.D, {})
          : (0, i.jsx)(v.Lh6, {
              pageId: v.Rhz.GENRE,
              children: (0, i.jsxs)(h.I7, {
                scrollElement: E,
                outerTitle: l.fullTitle,
                children: [
                  (0, i.jsx)(p.h4, {
                    variant: p.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: f.canBack,
                    children: (0, i.jsx)(u.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: l.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(d.t, {
                    className: k().root,
                    containerClassName: k().content,
                    ref: b,
                    children: (0, i.jsxs)("div", {
                      className: k().carouselBlocks,
                      children: [
                        l.hasPlaylists &&
                          (0, i.jsx)(v.Ja5, {
                            blockId: v.BEo.PLAYLISTS_CAROUSEL,
                            blockType: v.BEo.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: v.BEo.PLAYLISTS_CAROUSEL,
                            objectsCount: l.albums.length,
                            children: (0, i.jsx)(y.VD, {
                              isShimmerVisible: l.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                k().carouselBlockHeader,
                                k().carouselBlock,
                              ),
                              containerClassName: k().carouselBlock,
                              playlists: l.playlists,
                              title: S({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                l.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        l.hasAlbums &&
                          (0, i.jsx)(v.Ja5, {
                            blockId: v.BEo.ALBUMS_CAROUSEL,
                            blockType: v.BEo.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: v.BEo.ALBUMS_CAROUSEL,
                            objectsCount: l.albums.length,
                            children: (0, i.jsx)(m.wk, {
                              isShimmerVisible: l.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                k().carouselBlockHeader,
                                k().carouselBlock,
                              ),
                              containerClassName: k().carouselBlock,
                              albums: l.albums,
                              title: S({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                l.id,
                                "/albums",
                              ),
                            }),
                          }),
                        l.hasArtists &&
                          (0, i.jsx)(v.Ja5, {
                            blockId: v.BEo.ARTISTS_CAROUSEL,
                            blockType: v.BEo.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: v.BEo.ARTISTS_CAROUSEL,
                            objectsCount: l.albums.length,
                            children: (0, i.jsx)(p.HY, {
                              isShimmerVisible: l.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, r.W)(
                                k().carouselBlockHeader,
                                k().carouselBlock,
                              ),
                              containerClassName: k().carouselBlock,
                              title: S({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                l.id,
                                "/artists",
                              ),
                              children: l.artists.map((e) =>
                                (0, i.jsx)(
                                  g.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      });
    },
    82522: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return P;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(17392),
        u = a(30948),
        c = a(69947),
        m = a(7797),
        g = a(13534),
        h = a(97141),
        y = a(95821),
        v = a(75309),
        p = a(10979);
      let S = (e) => {
          var t, a, i;
          return {
            id: "",
            title: { title: "", fullTitle: e.fullTitle || "" },
            playlists: e.items.map(p.Iq),
            pager: {
              page:
                (null === (t = e.pager) || void 0 === t ? void 0 : t.page) || 0,
              perPage:
                (null === (a = e.pager) || void 0 === a ? void 0 : a.perPage) ||
                0,
              total:
                (null === (i = e.pager) || void 0 === i ? void 0 : i.total) ||
                0,
            },
          };
        },
        E = (e) => {
          (0, n.useEffect)(() => {
            if (!e) return;
            let t = S(e);
            (0, v.P)({
              genreMeta: t,
              fullUrl: null,
              locale: null,
              url: null,
              tld: "",
              host: "",
            }).then((e) => {
              (0, g.gOT)(e);
            });
          }, [e]);
        };
      var b = a(7256),
        f = a.n(b);
      let P = (0, l.Pi)((e) => {
        var t, a, l;
        let { metatagId: v, preloadedMeta: p } = e,
          {
            genre: { playlistsSubpage: S },
            settings: { isMobile: b },
          } = (0, g.oR4)(),
          { formatMessage: P } = (0, o.Z)(),
          { contentScrollRef: I, setContentScrollRef: k } = (0, g.$Y6)(),
          C = (0, g.k67)(),
          T = (0, n.useCallback)(
            (e) => {
              v && S.getData({ metatagId: v, page: e, pageSize: y.O });
            },
            [S, v],
          );
        (0, n.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        ),
          S.isNotFound && (0, s.notFound)(),
          (0, g.NOh)(S.isResolved),
          E(S);
        let _ = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(h.$_, { className: f().footer }) }),
          [],
        );
        return (v &&
          S.isNeededToLoad &&
          (0, n.use)(
            S.getData({
              preloadedMeta: p,
              metatagId: v,
              page: 0,
              pageSize: y.O,
            }),
          ),
        S.isSomethingWrong)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh6, {
              pageId: g.Rhz.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: I,
                outerTitle: S.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: f().root,
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: h.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: S.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(h.Wv, {
                      className: (0, r.W)(f().scrollContainer, f().important),
                      customComponents: _,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == S
                              ? void 0
                              : null === (t = S.items) || void 0 === t
                                ? void 0
                                : t[e],
                          r = P(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: P({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(h.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == S
                              ? void 0
                              : null === (t = S.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: T,
                      pageSize: y.O,
                      totalRequests:
                        null !== (l = S.requests) && void 0 !== l ? l : 0,
                      listClassName: f().content,
                      itemClassName: f().item,
                      handleRef: k,
                      context: {
                        listAriaLabel: P(
                          { id: "mixes.playlists-list" },
                          { genreName: S.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: b,
                      useWindowScroll: b,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    89520: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return d.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(22874),
        r = a(62726),
        l = a(53577),
        s = a(13534),
        n = a(40892);
      let o = i.V5.compose(
        i.V5.model("GenresPageModel", {
          title: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(l.fm),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
        }),
        n.fu,
      )
        .views((e) => ({
          get isLoading() {
            return e.isNeededToLoad || e.loadingState === s.Gui.PENDING;
          },
          get isNotFound() {
            let t = e.isResolved && 0 === e.items.length;
            return e.errorStatusCode === r.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: n } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let n = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!n) {
                  e.errorStatusCode = r.CN.NOT_FOUND;
                  return;
                }
                (e.title = n.title),
                  (e.items = (0, i.pj)(n.leaves.map(l.uG))),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                n.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE),
              (e.title = null),
              (e.items = (0, i.pj)([])),
              (e.errorStatusCode = null);
          },
        }));
      a(82770);
      var d = a(73462);
    },
    82770: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return l;
        },
      });
      var i = a(75441),
        r = a(35551);
      let l = () => (0, i.jsx)(r.T, {});
    },
    73462: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return v;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(98730),
        s = a(65067),
        n = a(17294),
        o = a(17392),
        d = a(30948),
        u = a(69947),
        c = a(53577),
        m = a(13534),
        g = a(97141),
        h = a(25018),
        y = a.n(h);
      let v = (0, r.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, m.oR4)(),
          { contentScrollRef: r, setContentScrollRef: h } = (0, m.$Y6)(),
          v = (0, m.k67)();
        return ((0, s.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, l.notFound)(),
        (0, m.NOh)(a.isResolved),
        t && a.isNeededToLoad && (0, s.use)(a.getData(t)),
        a.isRejected)
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsxs)(u.I7, {
              scrollElement: r,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(g.h4, {
                  variant: g.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: v.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(n.t, {
                  className: y().root,
                  containerClassName: y().content,
                  ref: h,
                  children: (0, i.jsx)("div", {
                    className: y().list,
                    children: a.items.map((e) =>
                      (0, i.jsx)(
                        c.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    54105: function (e, t, a) {
      "use strict";
      a.d(t, {
        Of: function () {
          return p.KidsCategoryPage;
        },
        $S: function () {
          return S.KidsEditorialAlbumsPage;
        },
        cf: function () {
          return E.KidsEditorialPlaylistsPage;
        },
        d6: function () {
          return v;
        },
      });
      var i = a(13534),
        r = a(22874),
        l = a(62726),
        s = a(72783),
        n = a(73447),
        o = a(40892);
      let d = r.V5.model("KidsEditorialAlbumItem", {
          id: r.V5.number,
          data: r.V5.maybeNull(s.ug),
        }),
        u = r.V5.compose(
          r.V5.model("KidsEditorialAlbumPage", {
            errorStatusCode: r.V5.maybe(r.V5.number),
            title: r.V5.maybeNull(r.V5.string),
            pager: r.V5.maybeNull(o.Vn),
            albums: r.V5.maybeNull(r.V5.array(d)),
            alreadyRequestedPages: r.V5.map(r.V5.number),
            requests: r.V5.maybeNull(r.V5.number),
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === i.Gui.PENDING;
              },
              get isNotFound() {
                let t =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
                return e.isRejected && t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getAlbums: (0, r.ls)(function* (t) {
                var a, s, o;
                let { page: d = 0, pageSize: u = 20 } = t,
                  { albumResource: c, modelActionsLogger: m } = (0, r.dU)(e);
                if (
                  !(
                    !(null === (a = e.albums) || void 0 === a
                      ? void 0
                      : a.length) || e.alreadyRequestedPages.has("".concat(d))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(d), d);
                  try {
                    let t = d * u,
                      a = e.albums.slice(t, t + u).map((e) => e.id),
                      i = yield c.getAlbums({ albumIds: a });
                    e.requests =
                      (null !== (o = e.requests) && void 0 !== o ? o : 0) + 1;
                    let l = {
                        page: d,
                        perPage: u,
                        total:
                          null === (s = e.albums) || void 0 === s
                            ? void 0
                            : s.length,
                      },
                      m = i.map(n.N),
                      g = d * u,
                      h = 0;
                    for (let t = g; t < g + u; t++) {
                      let a = e.albums[t];
                      m[h] && a && (a.data = (0, r.pj)(m[h])), h++;
                    }
                    e.pager = l;
                  } catch (t) {
                    m.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.REJECT);
                  }
                }
              }),
              getData: (0, r.ls)(function* (a) {
                let { id: s, page: n = 0, pageSize: o = 20 } = a,
                  { childrenLandingResource: d, modelActionsLogger: u } = (0,
                  r.dU)(e);
                if (e.loadingState !== i.Gui.PENDING)
                  try {
                    e.loadingState = i.Gui.PENDING;
                    let a = yield d.getEditorialAlbum({ id: s });
                    (e.title = a.title),
                      a.entities &&
                        a.entities.length > 0 &&
                        (e.albums = (0, r.pj)(
                          a.entities.map((e) => (0, r.pj)({ id: e })),
                        )),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.RESOLVE),
                      yield t.getAlbums({ page: n, pageSize: o });
                  } catch (t) {
                    u.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = i.Gui.IDLE),
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.albums = null),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var c = a(7797),
        m = a(10979);
      let g = r.V5.model("KidsEditorialPlaylistItem", {
          uid: r.V5.number,
          kind: r.V5.number,
          data: r.V5.maybeNull(c.d2),
        }),
        h = r.V5.compose(
          r.V5.model("KidsEditorialPlaylistPage", {
            errorStatusCode: r.V5.maybe(r.V5.number),
            title: r.V5.maybeNull(r.V5.string),
            pager: r.V5.maybeNull(o.Vn),
            playlists: r.V5.maybeNull(r.V5.array(g)),
            alreadyRequestedPages: r.V5.map(r.V5.number),
            requests: r.V5.maybeNull(r.V5.number),
          }),
          o.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === i.Gui.PENDING;
              },
              get isNotFound() {
                let t =
                  e.errorStatusCode === l.CN.NOT_FOUND ||
                  e.errorStatusCode === l.CN.BAD_REQUEST;
                return e.isRejected && t;
              },
              get isSomethingWrong() {
                return e.isRejected && !t.isNotFound;
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getPlaylists: (0, r.ls)(function* (t) {
                var a, s, n;
                let { page: o = 0, pageSize: d = 20 } = t,
                  { playlistsResource: u, modelActionsLogger: c } = (0, r.dU)(
                    e,
                  );
                if (
                  !(
                    !(null === (a = e.playlists) || void 0 === a
                      ? void 0
                      : a.length) || e.alreadyRequestedPages.has("".concat(o))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(o), o);
                  try {
                    let t = o * d,
                      a = e.playlists.slice(t, t + d),
                      i = yield u.getPlaylists({
                        playlistIds: a.map((e) =>
                          "".concat(e.uid, ":").concat(e.kind),
                        ),
                        resumeStream: !1,
                      });
                    e.requests =
                      (null !== (n = e.requests) && void 0 !== n ? n : 0) + 1;
                    let l = {
                        page: o,
                        perPage: d,
                        total:
                          null === (s = e.playlists) || void 0 === s
                            ? void 0
                            : s.length,
                      },
                      c = i.playlists.map(m.PV),
                      g = o * d,
                      h = 0;
                    for (let t = g; t < g + d; t++) {
                      let a = e.playlists[t];
                      c[h] && a && (a.data = (0, r.pj)(c[h])), h++;
                    }
                    e.pager = l;
                  } catch (t) {
                    c.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.REJECT);
                  }
                }
              }),
              getData: (0, r.ls)(function* (a) {
                let { id: s, page: n = 0, pageSize: o = 20 } = a,
                  { childrenLandingResource: d, modelActionsLogger: u } = (0,
                  r.dU)(e);
                if (e.loadingState !== i.Gui.PENDING)
                  try {
                    e.loadingState = i.Gui.PENDING;
                    let a = yield d.getEditorialPlaylist({ id: s });
                    (e.title = a.title),
                      a.entities &&
                        a.entities.length > 0 &&
                        (e.playlists = (0, r.pj)(
                          a.entities.map((e) =>
                            (0, r.pj)({ uid: e.uid, kind: e.kind }),
                          ),
                        )),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.RESOLVE),
                      yield t.getPlaylists({ page: n, pageSize: o });
                  } catch (t) {
                    u.error(t),
                      t instanceof l.du &&
                        (t.statusCode === l.CN.NOT_FOUND ||
                          t.statusCode === l.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = l.CN.NOT_FOUND),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.REJECT);
                  }
              }),
              reset() {
                (e.loadingState = i.Gui.IDLE),
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.playlists = null),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var y = a(30495);
      let v = r.V5.model("KidsPage", {
        landing: y.d5,
        kidsEditorialPlaylistSubpage: h,
        kidsEditorialAlbumSubpage: u,
      });
      var p = a(93773),
        S = a(18251),
        E = a(50551);
      a(37631), a(33108);
    },
    93773: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsCategoryPage: function () {
          return f;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(35846),
        d = a(17294),
        u = a(17392),
        c = a(30495),
        m = a(30948),
        g = a(69947),
        h = a(13534),
        y = a(97141),
        v = a(9717),
        p = a.n(v),
        S = a(26554),
        E = a.n(S);
      let b = () =>
          (0, i.jsxs)("div", {
            className: E().root,
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)(c.E, { isActive: !0, length: 4 }),
              }),
              (0, i.jsx)(y.HY, { isShimmerVisible: !0, isShimmerActive: !0 }),
              (0, i.jsx)(y.HY, { isShimmerVisible: !0, isShimmerActive: !0 }),
            ],
          }),
        f = (0, l.Pi)((e) => {
          let { categoryId: t } = e,
            { kids: a } = (0, h.oR4)(),
            { contentScrollRef: l, setContentScrollRef: v } = (0, h.$Y6)(),
            S = (0, h.k67)();
          (0, n.useEffect)(() => () => a.landing.reset(), [a.landing]),
            (0, h.NOh)(a.landing.isResolved),
            a.landing.isLoadedAndEmpty && (0, s.notFound)();
          let E = (0, c._B)(a.landing),
            f = (0, n.useMemo)(
              () =>
                a.landing.isLoading || a.landing.isNeededToLoad
                  ? (0, i.jsx)(b, {})
                  : (0, i.jsx)(c.Od, {
                      landing: a.landing,
                      errorComponent: (0, i.jsx)(m.D, {
                        className: p().error,
                        withBackwardControl: !1,
                      }),
                    }),
              [a.landing.loadingState, a.landing],
            );
          return (
            a.landing.isNeededToLoad &&
              (0, n.use)(a.landing.getChildrenSkeleton({ categoryId: t })),
            (0, i.jsx)(h.Lh6, {
              pageId: h.Rhz.KIDS_CATEGORY,
              children: (0, i.jsxs)(g.I7, {
                scrollElement: l,
                outerTitle: a.landing.title,
                children: [
                  (0, i.jsx)(y.h4, {
                    variant: y.bm.TEXT,
                    withForwardControl: !1,
                    withBackwardControl: S.canBack,
                    children: (0, i.jsx)("div", {
                      className: p().header,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h1",
                        weight: "bold",
                        size: "xl",
                        children: a.landing.title,
                      }),
                    }),
                  }),
                  (0, i.jsxs)(d.t, {
                    className: p().root,
                    containerClassName: p().content,
                    ref: v,
                    ...(0, o.BA)(o.Br.kids.KIDS_CATEGORY_PAGE),
                    children: [
                      (0, i.jsx)("div", {
                        className: (0, r.W)(p().landing, {
                          [p().landing_onlyWizard]: E,
                        }),
                        children: f,
                      }),
                      (0, i.jsx)(y.$_, { className: p().footer }),
                    ],
                  }),
                ],
              }),
            })
          );
        });
    },
    18251: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsEditorialAlbumsPage: function () {
          return b;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(35846),
        u = a(93093),
        c = a(14218),
        m = a(17392),
        g = a(30948),
        h = a(72783),
        y = a(69947),
        v = a(13534),
        p = a(97141),
        S = a(763),
        E = a.n(S);
      let b = (0, l.Pi)((e) => {
        var t, a, l;
        let { id: S } = e,
          {
            kids: { kidsEditorialAlbumSubpage: b },
            settings: { isMobile: f },
          } = (0, v.oR4)(),
          P = (0, v.k67)(),
          { contentScrollRef: I, setContentScrollRef: k } = (0, v.$Y6)(),
          { formatMessage: C } = (0, o.Z)(),
          T = (0, u.W)((e) => {
            b.getAlbums({ page: e, pageSize: 20 });
          });
        b.isNotFound && (0, s.notFound)(),
          (0, n.useEffect)(
            () => () => {
              b.reset();
            },
            [b],
          );
        let _ = (0, c.V)(() => ({
          Footer: () => (0, i.jsx)(p.$_, { className: E().footer }),
        }));
        if (
          ((0, v.NOh)(b.isResolved),
          b.isNeededToLoad &&
            (0, n.use)(b.getData({ id: S, page: 0, pageSize: 20 })),
          b.isSomethingWrong)
        )
          return (0, i.jsx)(g.D, {});
        let N = b.isLoading
          ? 20
          : null !==
                (a =
                  null == b
                    ? void 0
                    : null === (t = b.albums) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
            ? a
            : 0;
        return (0, i.jsx)(v.Lh6, {
          pageId: v.Rhz.KIDS_EDITORIAL_ALBUMS,
          children: (0, i.jsx)(y.I7, {
            scrollElement: I,
            outerTitle: b.title,
            children: (0, i.jsxs)("div", {
              className: E().root,
              ...(0, d.BA)(d.Br.kids.KIDS_EDITORIAL_ALBUMS),
              children: [
                (0, i.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: P.canBack,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: b.title,
                  }),
                }),
                (0, i.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: C(
                      { id: "mixes.albums-list" },
                      { genreName: b.title || "" },
                    ),
                  },
                  className: (0, r.W)(E().scrollContainer, E().important),
                  customComponents: _,
                  itemContentCallback: (e) => {
                    var t, a;
                    let r =
                        null == b
                          ? void 0
                          : null === (a = b.albums) || void 0 === a
                            ? void 0
                            : null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      l = C(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: C({ id: "entity-names.album" }) },
                      );
                    return r
                      ? (0, i.jsx)(
                          h.rf,
                          {
                            withLikesCount: !0,
                            album: r,
                            contentLinesCount: 3,
                          },
                          r.id,
                        )
                      : (0, i.jsx)(p.hi, { isActive: !0, "aria-label": l });
                  },
                  initialItemCount: N,
                  totalCount: N,
                  onGetDataByPage: T,
                  pageSize: 20,
                  totalRequests:
                    null !== (l = b.requests) && void 0 !== l ? l : 0,
                  listClassName: E().content,
                  itemClassName: E().item,
                  handleRef: k,
                  isMobileLayout: f,
                  useWindowScroll: f,
                }),
              ],
            }),
          }),
        });
      });
    },
    50551: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsEditorialPlaylistsPage: function () {
          return b;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(35846),
        u = a(93093),
        c = a(14218),
        m = a(17392),
        g = a(30948),
        h = a(69947),
        y = a(7797),
        v = a(13534),
        p = a(97141),
        S = a(47309),
        E = a.n(S);
      let b = (0, l.Pi)((e) => {
        var t, a, l;
        let { id: S } = e,
          {
            kids: { kidsEditorialPlaylistSubpage: b },
            settings: { isMobile: f },
          } = (0, v.oR4)(),
          P = (0, v.k67)(),
          { contentScrollRef: I, setContentScrollRef: k } = (0, v.$Y6)(),
          { formatMessage: C } = (0, o.Z)(),
          T = (0, u.W)((e) => {
            b.getPlaylists({ page: e, pageSize: 20 });
          });
        b.isNotFound && (0, s.notFound)(),
          (0, n.useEffect)(
            () => () => {
              b.reset();
            },
            [b],
          );
        let _ = (0, c.V)(() => ({
          Footer: () => (0, i.jsx)(p.$_, { className: E().footer }),
        }));
        if (
          ((0, v.NOh)(b.isResolved),
          b.isNeededToLoad &&
            (0, n.use)(b.getData({ id: S, page: 0, pageSize: 20 })),
          b.isSomethingWrong)
        )
          return (0, i.jsx)(g.D, {});
        let N = b.isLoading
          ? 20
          : null !==
                (a =
                  null == b
                    ? void 0
                    : null === (t = b.playlists) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
            ? a
            : 0;
        return (0, i.jsx)(v.Lh6, {
          pageId: v.Rhz.KIDS_EDITORIAL_PLAYLISTS,
          children: (0, i.jsx)(h.I7, {
            scrollElement: I,
            outerTitle: b.title,
            children: (0, i.jsxs)("div", {
              className: E().root,
              ...(0, d.BA)(d.Br.kids.KIDS_EDITORIAL_PLAYLISTS),
              children: [
                (0, i.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  withForwardControl: !1,
                  withBackwardControl: P.canBack,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: b.title,
                  }),
                }),
                (0, i.jsx)(p.Wv, {
                  context: {
                    listAriaLabel: C(
                      { id: "mixes.playlists-list" },
                      { genreName: b.title || "" },
                    ),
                  },
                  className: (0, r.W)(E().scrollContainer, E().important),
                  customComponents: _,
                  itemContentCallback: (e) => {
                    var t, a;
                    let r =
                        null == b
                          ? void 0
                          : null === (a = b.playlists) || void 0 === a
                            ? void 0
                            : null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      l = C(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: C({ id: "entity-names.playlist" }) },
                      );
                    return r
                      ? (0, i.jsx)(
                          y.ZL,
                          { playlist: r, contentLinesCount: 3 },
                          r.key,
                        )
                      : (0, i.jsx)(p.hi, { isActive: !0, "aria-label": l });
                  },
                  initialItemCount: N,
                  totalCount: N,
                  onGetDataByPage: T,
                  pageSize: 20,
                  totalRequests:
                    null !== (l = b.requests) && void 0 !== l ? l : 0,
                  listClassName: E().content,
                  itemClassName: E().item,
                  handleRef: k,
                  isMobileLayout: f,
                  useWindowScroll: f,
                }),
              ],
            }),
          }),
        });
      });
    },
    37631: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsNotFoundPage: function () {
          return o;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(65067),
        s = a(35551),
        n = a(13534);
      let o = (0, r.Pi)(() => {
        let { kids: e } = (0, n.oR4)();
        return (
          (0, l.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    33108: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsPage: function () {
          return b;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(65067),
        n = a(9317),
        o = a(15937),
        d = a(35846),
        u = a(36746),
        c = a(17294),
        m = a(17392),
        g = a(30495),
        h = a(30948),
        y = a(69947),
        v = a(13534),
        p = a(97141),
        S = a(53638),
        E = a.n(S);
      let b = (0, l.Pi)(() => {
        let { kids: e, user: t } = (0, v.oR4)(),
          { formatMessage: a } = (0, n.Z)(),
          { contentScrollRef: l, setContentScrollRef: S } = (0, v.$Y6)();
        (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, v.NOh)(e.landing.isResolved);
        let b = (0, g._B)(e.landing);
        return (
          e.landing.isNeededToLoad &&
            (0, s.use)(
              e.landing.getSkeleton(
                { id: u.j.KIDS, showWizard: t.settings.showWizard },
                { preloadBlocksCount: 2 },
              ),
            ),
          (0, i.jsx)(v.Lh6, {
            pageId: v.Rhz.KIDS,
            children: (0, i.jsxs)(y.I7, {
              scrollElement: l,
              outerTitle: a({ id: "kids.for-kids" }),
              children: [
                (0, i.jsx)(p.h4, {
                  variant: p.bm.TEXT,
                  showControls: !1,
                  children: (0, i.jsx)("div", {
                    className: E().header,
                    children: (0, i.jsx)(m.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xl",
                      children: (0, i.jsx)(o.Z, { id: "kids.for-kids" }),
                    }),
                  }),
                }),
                (0, i.jsxs)(c.t, {
                  className: E().root,
                  containerClassName: E().content,
                  ref: S,
                  ...(0, d.BA)(d.Br.kids.KIDS_PAGE),
                  children: [
                    (0, i.jsx)("div", {
                      className: (0, r.W)(E().landing, {
                        [E().landing_onlyWizard]: b,
                      }),
                      children: (0, i.jsx)(g.Od, {
                        landing: e.landing,
                        errorComponent: (0, i.jsx)(h.D, {
                          className: E().error,
                          withBackwardControl: !1,
                        }),
                      }),
                    }),
                    (0, i.jsx)(p.$_, { className: E().footer }),
                  ],
                }),
              ],
            }),
          })
        );
      });
    },
    30246: function (e, t, a) {
      "use strict";
      a.d(t, {
        MyMusicDownloadedTracksPage: function () {
          return R;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(65067),
        n = a(9317),
        o = a(35846),
        d = a(84638),
        u = a(93093),
        c = a(17979),
        m = a(30948),
        g = a(69947),
        h = a(1150),
        y = a(13534),
        v = a(97141),
        p = a(25340),
        S = a.n(p),
        E = a(15937),
        b = a(69756),
        f = a(17392),
        P = a(5169),
        I = a.n(P);
      let k = (0, l.Pi)(() => {
        var e;
        let {
            myMusic: { downloadedTracks: t },
          } = (0, y.oR4)(),
          a = (0, i.jsx)(f.Caption, {
            variant: "span",
            size: "s",
            weight: "medium",
            "aria-hidden": !0,
            children: "•",
          }),
          r = [];
        (null === (e = t.tracks) || void 0 === e ? void 0 : e.length) &&
          r.push(
            (0, i.jsx)(f.Caption, {
              variant: "span",
              size: "s",
              weight: "medium",
              lineClamp: 1,
              children: (0, i.jsx)(E.Z, {
                id: "entity-names.tracks-count",
                values: { value: t.tracks.length },
              }),
            }),
          );
        let l = Math.floor(t.tracksDurationInMinutes / 60),
          n = Math.floor(t.tracksDurationInMinutes % 60);
        return (
          (l || n) &&
            (r.push(a),
            r.push(
              (0, i.jsx)(f.Caption, {
                variant: "span",
                size: "s",
                weight: "medium",
                children: (0, i.jsx)(E.Z, {
                  id: "time.hours-minutes",
                  values: { hours: l, minutes: n },
                }),
              }),
            )),
          (0, i.jsx)("div", {
            className: I().root,
            children: r.map((e, t) => (0, s.cloneElement)(e, { key: t })),
          })
        );
      });
      var C = a(7089),
        T = a.n(C);
      let _ = (0, l.Pi)(() => {
        let { isScrolling: e } = (0, s.useContext)(v.pI),
          t = (0, y.k67)(),
          {
            myMusic: { downloadedTracks: a },
            settings: { isMobile: r },
            slam: l,
          } = (0, y.oR4)(),
          { from: n } = (0, y.MhG)({
            pageId: y.Rhz.OWN_TRACKS,
            blockId: y.aUg.TRACK_LIST,
          }),
          o = (0, y.qsr)(),
          c = (0, y.lAI)(),
          { isPlaying: m, togglePlay: g } = (0, y.qmq)({
            playContextParams: {
              contextData: {
                type: d.A.Various,
                meta: { id: y.Rhz.DOWNLOADS_TRACKS },
                from: n,
              },
              entitiesData: a.entitiesData,
              loadContextMeta: !1,
            },
          }),
          h = (0, u.W)(() => {
            o() || (g(), c(!m));
          });
        return (0, i.jsx)("header", {
          className: T().root,
          "aria-hidden": e,
          children: (0, i.jsxs)("div", {
            className: T().container,
            children: [
              !l.isOfflineModeEnabled &&
                t.canBack &&
                (0, i.jsx)(v.nP, {
                  withForwardControl: !1,
                  withBackwardControl: t.canBack,
                  shouldFocusOnMount: !e,
                  buttonSize: "xxs",
                }),
              (0, i.jsxs)("div", {
                className: T().titleContainer,
                children: [
                  (0, i.jsx)(f.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xs",
                    lineClamp: 1,
                    className: T().title,
                    children: (0, i.jsx)(E.Z, {
                      id: "offline.downloaded-tracks",
                    }),
                  }),
                  (0, i.jsx)(k, {}),
                ],
              }),
              !a.isEmpty &&
                (0, i.jsx)(v.JM, {
                  withRipple: !0,
                  buttonVariant: "default",
                  radius: "xxxl",
                  size: "s",
                  color: "primary",
                  iconSize: "xxs",
                  isPlaying: m,
                  onClick: h,
                  className: T().playButton,
                  ariaHidden: e,
                  tabIndex: e ? -1 : 0,
                  children:
                    !r && (0, i.jsx)(E.Z, { id: "player-actions.listen" }),
                }),
            ],
          }),
        });
      });
      var N = a(34175),
        A = a.n(N);
      let D = (0, l.Pi)(() =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(_, {}),
              (0, i.jsxs)("div", {
                className: A().root,
                children: [
                  (0, i.jsx)(b.Icon, {
                    className: A().icon,
                    size: "l",
                    variant: "download",
                  }),
                  (0, i.jsx)(f.Heading, {
                    className: A().title,
                    variant: "div",
                    size: "xs",
                    children: (0, i.jsx)(E.Z, {
                      id: "offline.downloaded-empty",
                    }),
                  }),
                  (0, i.jsx)(f.Caption, {
                    className: A().text,
                    variant: "span",
                    type: "controls",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(E.Z, {
                      id: "offline.download-for-offline",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ),
        L = (0, l.Pi)(() => {
          let { isScrolling: e } = (0, s.useContext)(v.pI),
            t = (0, y.k67)(),
            {
              myMusic: { downloadedTracks: a },
              settings: { isMobile: l },
              slam: n,
            } = (0, y.oR4)(),
            { from: o } = (0, y.MhG)({
              pageId: y.Rhz.OWN_TRACKS,
              blockId: y.aUg.TRACK_LIST,
            }),
            c = (0, y.lAI)(),
            m = (0, y.qsr)(),
            { isPlaying: g, togglePlay: h } = (0, y.qmq)({
              playContextParams: {
                contextData: {
                  type: d.A.Various,
                  meta: { id: y.Rhz.DOWNLOADS_TRACKS },
                  from: o,
                },
                entitiesData: a.entitiesData,
                loadContextMeta: !1,
              },
            }),
            p = (0, u.W)(() => {
              m() || (h(), c(!g));
            });
          return (0, i.jsx)(v.h4, {
            variant: v.bm.COMPOSITE,
            "aria-hidden": !e,
            stickyChild: (0, i.jsxs)("div", {
              className: T().container,
              children: [
                !n.isOfflineModeEnabled &&
                  t.canBack &&
                  (0, i.jsx)(v.nP, {
                    withForwardControl: !1,
                    withBackwardControl: t.canBack,
                    shouldFocusOnMount: !1,
                    buttonSize: "xxs",
                  }),
                (0, i.jsx)(f.Heading, {
                  variant: "h1",
                  weight: "bold",
                  size: "xs",
                  lineClamp: 1,
                  className: T().stickyTitle,
                  children: (0, i.jsx)(E.Z, {
                    id: "offline.downloaded-tracks",
                  }),
                }),
                !a.isEmpty &&
                  (0, i.jsx)(v.JM, {
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: g,
                    onClick: p,
                    className: (0, r.W)(T().playButton, {
                      [T().stickyPlayButton]: !l,
                    }),
                    ariaHidden: !e,
                    tabIndex: e ? 0 : -1,
                    children:
                      !l && (0, i.jsx)(E.Z, { id: "player-actions.listen" }),
                  }),
              ],
            }),
            stickyClassName: (0, r.W)(T().stickyHeader, T().important),
            staticClassName: (0, r.W)(T().staticHeader, T().important),
          });
        }),
        R = (0, l.Pi)(() => {
          var e;
          let { contentScrollRef: t, setContentScrollRef: a } = (0, y.$Y6)(),
            { formatMessage: l } = (0, n.Z)(),
            p = (0, y.k67)(),
            {
              myMusic: { downloadedTracks: E },
            } = (0, y.oR4)(),
            { from: b } = (0, y.MhG)({
              pageId: y.Rhz.OWN_TRACKS,
              blockId: y.aUg.TRACK_LIST,
            }),
            f = (0, y.h1d)(),
            P = (0, y.iXn)();
          p.replaceState({ href: "/mymusic/downloads/tracks" });
          let I = (0, u.W)(() => {
            f && E.getData(f);
          });
          (0, c.D)(I),
            (0, s.useEffect)(() => {
              E.isNeededToLoad && I();
            }, [E.isNeededToLoad, I]),
            (0, s.useEffect)(
              () => () => {
                E.reset();
              },
              [E],
            ),
            (0, y.NOh)(E.isResolved);
          let k = (0, s.useMemo)(
            () => ({
              Header: () => (0, i.jsx)(_, {}),
              Footer: () => (0, i.jsx)(v.$_, { className: S().footer }),
            }),
            [],
          );
          if (E.loadingState === y.Gui.REJECT) return (0, i.jsx)(m.D, {});
          if (E.isEmpty) return (0, i.jsx)(D, {});
          let C =
            (null === (e = E.items) || void 0 === e ? void 0 : e.length) || 10;
          return (0, i.jsx)(y.Lh6, {
            pageId: y.Rhz.DOWNLOADS_TRACKS,
            children: (0, i.jsx)(g.I7, {
              scrollElement: t,
              children: (0, i.jsxs)("div", {
                className: S().pageContainer,
                children: [
                  (0, i.jsx)(L, {}),
                  (0, i.jsx)(v.Wv, {
                    context: {
                      listAriaLabel: l({ id: "offline.downloaded-track-list" }),
                    },
                    className: (0, r.W)(S().root, S().important),
                    listClassName: S().content,
                    customComponents: k,
                    totalCount: C,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                        null === (t = E.items) || void 0 === t ? void 0 : t[e];
                      return a
                        ? (0, i.jsx)(
                            h.O2,
                            {
                              track: a,
                              playContextParams: P(a.id, {
                                contextData: {
                                  type: d.A.Various,
                                  meta: { id: y.Rhz.DOWNLOADS_TRACKS },
                                  from: b,
                                },
                                entitiesData: E.entitiesData,
                                queueParams: { index: e, entityId: a.id },
                                loadContextMeta: !1,
                              }),
                            },
                            a.id,
                          )
                        : (0, i.jsx)(v.DX, {
                            isActive: !0,
                            className: S().trackShimmer,
                            variant: y.Lxt.PLAYLIST,
                          });
                    },
                    debounceDurationInMs: 300,
                    initialItemCount: C,
                    handleRef: a,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                    testId: o.Br.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                  }),
                ],
              }),
            }),
          });
        });
    },
    80316: function (e, t, a) {
      "use strict";
      a.d(t, {
        ws: function () {
          return o.PlaylistPersonalPage;
        },
        uD: function () {
          return n;
        },
      });
      var i = a(22874),
        r = a(62726),
        l = a(13534),
        s = a(40892);
      let n = i.V5.compose(
        i.V5.model("PlaylistPersonalPage", {
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          playlistUuid: i.V5.maybeNull(i.V5.string),
          isReady: i.V5.optional(i.V5.boolean, !1),
          dummyCoverUrl: i.V5.maybe(i.V5.string),
          dummyDescription: i.V5.maybe(i.V5.string),
          title: i.V5.maybe(i.V5.string),
        }),
        s.fu,
      )
        .views((e) => ({
          get isNotFound() {
            let t =
              e.errorStatusCode === r.CN.NOT_FOUND ||
              e.errorStatusCode === r.CN.BAD_REQUEST;
            return e.loadingState === l.Gui.REJECT && t;
          },
        }))
        .actions((e) => ({
          getPlaylistPersonalDetails: (0, i.ls)(function* (t) {
            if (!(0, i.fh)(e)) return;
            let { playlistsResource: a, modelActionsLogger: s } = (0, i.dU)(e);
            if (e.loadingState !== l.Gui.PENDING)
              try {
                var n, o;
                e.loadingState = l.Gui.PENDING;
                let i = yield a.getPlaylistPersonal({ playlistId: t });
                if (
                  (null === (n = i.error) || void 0 === n ? void 0 : n.name) ===
                  "no-such-playlist"
                ) {
                  (e.errorStatusCode = r.CN.NOT_FOUND),
                    (e.loadingState = l.Gui.REJECT);
                  return;
                }
                (e.isReady = i.ready),
                  (e.playlistUuid = i.data.playlistUuid),
                  (e.dummyCoverUrl =
                    null === (o = i.data.dummyCover) || void 0 === o
                      ? void 0
                      : o.uri),
                  (e.dummyDescription = i.data.dummyDescription),
                  (e.title = i.data.title),
                  e.loadingState !== l.Gui.IDLE &&
                    (e.loadingState = l.Gui.RESOLVE);
              } catch (t) {
                s.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== l.Gui.IDLE &&
                    (e.loadingState = l.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = l.Gui.IDLE),
              (e.errorStatusCode = null),
              (e.isReady = !1),
              (e.playlistUuid = null),
              (e.dummyCoverUrl = void 0),
              (e.dummyDescription = void 0),
              (e.title = void 0);
          },
        }));
      a(72935), a(75441), a(35551);
      var o = a(40304);
    },
    72935: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistPersonalDummyPage: function () {
          return c;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(17392),
        n = a(13534),
        o = a(97141),
        d = a(13446),
        u = a.n(d);
      let c = (0, l.Pi)(() => {
        let {
          playlistPersonal: { dummyCoverUrl: e, dummyDescription: t, title: a },
        } = (0, n.oR4)();
        return (0, i.jsxs)("div", {
          className: u().root,
          children: [
            (0, i.jsx)(o.h4, {}),
            (0, i.jsx)(o.BE, {
              src: e,
              size: 200,
              fit: "cover",
              withAvatarReplace: !0,
              "aria-hidden": !0,
              className: u().cover,
            }),
            a &&
              (0, i.jsx)(s.Heading, {
                className: (0, r.W)(u().title, u().important),
                variant: "h1",
                size: "xs",
                children: a,
              }),
            t &&
              (0, i.jsx)(s.Caption, {
                className: (0, r.W)(u().text, u().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: t,
              }),
          ],
        });
      });
    },
    40304: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistPersonalPage: function () {
          return d;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(98730),
        s = a(65067),
        n = a(13534),
        o = a(72935);
      let d = (0, r.Pi)((e) => {
        let { params: t, searchParams: a } = e,
          { playlistPersonal: r } = (0, n.oR4)(),
          { href: d } = (0, n.zBm)(
            (0, n.rDv)(
              "/playlists/".concat(r.playlistUuid),
              new URLSearchParams(a),
            ),
          );
        if (
          ((0, s.useEffect)(() => {
            r.isNeededToLoad && r.getPlaylistPersonalDetails(t.playlistId);
          }, [r.isNeededToLoad, t.playlistId, r]),
          (0, s.useEffect)(
            () => () => {
              r.reset();
            },
            [r],
          ),
          (0, n.NOh)(r.isResolved),
          (r.isNotFound || r.isRejected) && (0, l.notFound)(),
          r.isResolved && !r.isReady)
        )
          return (
            r.dummyDescription || (0, l.notFound)(),
            (0, i.jsx)(o.PlaylistPersonalDummyPage, {})
          );
        r.isResolved && r.isReady && (0, l.redirect)(d);
      });
    },
    66634: function (e, t, a) {
      "use strict";
      a.d(t, {
        i$: function () {
          return A.PlaylistPage;
        },
        nb: function () {
          return N;
        },
        X$: function () {
          return D.PlaylistShimmersPage;
        },
      }),
        a(79294);
      var i,
        r,
        l,
        s,
        n = a(22874),
        o = a(13534);
      ((i = l || (l = {})).MAJOR = "Major"),
        (i.NAME = "Название"),
        (i.ARTISCS = "Исполнители"),
        (i.LINK = "Ссылка"),
        (i.ALBUM_ID = "albumId"),
        (i.TRACK_ID = "trackId"),
        ((r = s || (s = {})).MAJOR = "major"),
        (r.NAME = "name"),
        (r.ARTISCS = "artists"),
        (r.LINK = "link"),
        (r.ALBUM_ID = "albumId"),
        (r.TRACK_ID = "trackId");
      let d = n.V5.model("EditorFeature", {
        shouldShowMajor: n.V5.boolean,
        shouldShowGenre: n.V5.boolean,
        shouldShowDuplicate: n.V5.boolean,
        colorMajorMap: n.V5.map(n.V5.string),
        duplicate: n.V5.map(n.V5.number),
      })
        .views((e) => {
          let t = {
            getNumberGroupTrackDuplicated(t) {
              let { experiments: a } = (0, n.yj)(e);
              if (t && a.checkExperiment(o.peG.WebEditorsFeatures, "on"))
                return e.duplicate.get(String(t.id));
            },
            shouldHighlightDublicatedTrack: (a) =>
              !!(e.shouldShowDuplicate && t.getNumberGroupTrackDuplicated(a)),
            get sheetDataPlaylist() {
              var a, i;
              let { playlist: t } = (0, n.yj)(e);
              return {
                data: {
                  sheet: "Playlist",
                  columns: [
                    { label: l.MAJOR, value: s.MAJOR },
                    { label: l.NAME, value: s.NAME },
                    { label: l.ARTISCS, value: s.ARTISCS },
                    { label: l.LINK, value: s.LINK },
                    { label: l.ALBUM_ID, value: s.ALBUM_ID },
                    { label: l.TRACK_ID, value: s.TRACK_ID },
                  ],
                  content: t.items
                    .filter((e) => e.data)
                    .map((e) => {
                      var t, a, i, r, l, s, n, o, d, u, c, m;
                      let g = (
                        null === (t = e.data) || void 0 === t ? void 0 : t.url
                      )
                        ? ""
                            .concat(location.origin)
                            .concat(
                              null === (a = e.data) || void 0 === a
                                ? void 0
                                : a.url,
                            )
                        : "";
                      return {
                        major:
                          null !==
                            (o =
                              null === (r = e.data) || void 0 === r
                                ? void 0
                                : null === (i = r.major) || void 0 === i
                                  ? void 0
                                  : i.name) && void 0 !== o
                            ? o
                            : "",
                        name:
                          null !==
                            (d =
                              null === (l = e.data) || void 0 === l
                                ? void 0
                                : l.title) && void 0 !== d
                            ? d
                            : "",
                        artists:
                          null !==
                            (u =
                              null === (s = e.data) || void 0 === s
                                ? void 0
                                : s.artists.map((e) => e.name).join(", ")) &&
                          void 0 !== u
                            ? u
                            : "",
                        link: g,
                        albumId:
                          null !== (c = e.albumId) && void 0 !== c ? c : "",
                        trackId:
                          null !==
                            (m =
                              null === (n = e.data) || void 0 === n
                                ? void 0
                                : n.id) && void 0 !== m
                            ? m
                            : "",
                      };
                    }),
                },
                settings: {
                  fileName:
                    (null === (a = t.meta) || void 0 === a ? void 0 : a.uid) &&
                    (null === (i = t.meta) || void 0 === i ? void 0 : i.kind)
                      ? "%"
                          .concat(t.meta.uid, "%_%")
                          .concat(t.meta.kind, "%_to_text")
                      : "to_text",
                },
              };
            },
          };
          return t;
        })
        .actions((e) => ({
          exportToExcel: (0, n.ls)(function* () {
            let { modelActionsLogger: t } = (0, n.dU)(e);
            try {
              let t = yield Promise.all([a.e(6875), a.e(5617), a.e(8017)]).then(
                  a.t.bind(a, 55747, 23),
                ),
                { data: i, settings: r } = e.sheetDataPlaylist;
              if (0 === i.content.length) return o.SLo.ERROR;
              return (
                yield new Promise((e) => {
                  t.default([i], r, () => e());
                }),
                o.SLo.OK
              );
            } catch (e) {
              return t.error(e), o.SLo.ERROR;
            }
          }),
          getAllPlaylistItems: (0, n.ls)(function* (t) {
            let { batchSize: a } = t,
              { playlist: i } = (0, n.yj)(e),
              r = i.items.length - 1;
            for (let e = 0; e < r; e += a)
              yield i.getTracksByRange({
                startIndex: e,
                endIndex: Math.min(e + a, r),
              });
          }),
          getColorForMajor(t) {
            let a = e.colorMajorMap.get(t);
            if (a) return a;
            let i = (0, o.kDs)(t),
              r = "hsl(".concat(i, ", 50%, 50%)");
            return e.colorMajorMap.set(t, r), r;
          },
          getDuplicates(t) {
            let a = new Map();
            t.forEach((e) => {
              let t = a.get(e.id) || 0;
              a.set(e.id, t + 1);
            });
            let i = 1;
            a.forEach((t, a) => {
              t > 1 && (e.duplicate.set(String(a), i), i++);
            });
          },
          toggleShouldShowMajor() {
            e.shouldShowMajor = !e.shouldShowMajor;
          },
          toggleShouldShowGenre() {
            e.shouldShowGenre = !e.shouldShowGenre;
          },
          toggleShouldShowDuplicate() {
            e.shouldShowDuplicate = !e.shouldShowDuplicate;
          },
          reset() {
            (e.shouldShowDuplicate = !1),
              (e.shouldShowGenre = !1),
              (e.shouldShowMajor = !1),
              (e.colorMajorMap = (0, n.pj)({})),
              (e.duplicate = (0, n.pj)({}));
          },
        }));
      var u = a(37285),
        c = a(62726),
        m = a(15186),
        g = a(86108),
        h = a(7797),
        y = a(1150),
        v = a(10979),
        p = a(40892);
      let S = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return (null == a ? void 0 : a.albumId)
              ? "".concat(a.id, ":").concat(a.albumId)
              : String(null == a ? void 0 : a.id);
          }),
        E = (e, t) => {
          let { startIndex: a, endIndex: i } = t,
            r = [];
          for (let t = a; t <= i; t++) {
            var l, s;
            ((null === (l = e[t]) || void 0 === l ? void 0 : l.loadingState) ===
              o.Gui.IDLE ||
              (null === (s = e[t]) || void 0 === s
                ? void 0
                : s.loadingState) === o.Gui.REJECT) &&
              r.push(t);
          }
          return r;
        };
      var b = a(54306);
      let f = (e) => e.map((e) => (0, b.RN)(e.id, e.albumId || void 0)),
        P = (e, t) => {
          let [a, i] = e.split(":");
          return (0, n.pj)({
            id: a || "",
            albumId: i || "",
            key: "".concat(a, "-").concat(t),
            data: null,
            loadingState: o.Gui.IDLE,
          });
        },
        I = (e) => {
          var t, a, i;
          let r = null === (t = e.tracks) || void 0 === t ? void 0 : t.map(g.M),
            l = (null === (a = e.tracks) || void 0 === a ? void 0 : a.length)
              ? null === (i = e.tracks) || void 0 === i
                ? void 0
                : i.map((e, t) => P(e, t))
              : [];
          return {
            id: e.id,
            name: e.name,
            tracks: (0, n.pj)(l),
            unloadedTracks: (0, n.pj)(r),
          };
        },
        k = (e) => {
          let t = e.filters.map(I);
          if (t.length < 3) return [];
          let a = t.find((e) => e.id === g.W.ALL);
          if (!a) return [];
          let i = t.filter((e) => e.tracks.length >= 8);
          return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
        },
        C = n.V5.compose(
          n.V5.model("PlaylistPageFilters", {
            items: n.V5.maybeNull(n.V5.array(g.Tb)),
            activeFilter: n.V5.maybe(n.V5.string),
            activeFilterName: n.V5.maybeNull(n.V5.string),
            shouldSendEventOnTabOpened: n.V5.boolean,
            shouldSendEventOnTabLoaded: n.V5.boolean,
          }),
          p.fu,
          p.Al,
        )
          .views((e) => {
            let t = {
              get isShimmerVisible() {
                return e.isRejected || e.isLoading;
              },
              get activeFilterIndex() {
                var a;
                let t =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.findIndex((t) => t.id === e.activeFilter);
                return t && t > -1 ? t : 0;
              },
              get analyticsParamsActiveFilterIndex() {
                return t.activeFilterIndex + 1;
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getFilters: (0, n.ls)(function* () {
                var a, i;
                let { filtersResource: r, modelActionsLogger: l } = (0, n.dU)(
                    e,
                  ),
                  { sonataState: s, playlist: d } = (0, n.yj)(e);
                if (
                  e.isLoading ||
                  !(null === (a = d.items) || void 0 === a ? void 0 : a.length)
                )
                  return;
                let u =
                  d.items.map((e) => String((0, m.i)(e.id, e.albumId))) || [];
                try {
                  e.loadingState = o.Gui.PENDING;
                  let a = yield r.getTracksFilters({ trackIds: u });
                  (e.items = (0, n.pj)(k(a))),
                    t.setActiveFilter(s.playlistFilter),
                    t.getFilterName(s.playlistFilter || g.W.ALL);
                  let l =
                    null === (i = e.items) || void 0 === i
                      ? void 0
                      : i.find((t) => t.id === e.activeFilter);
                  l &&
                    (d.setItems(l.tracks),
                    s.setUnloadedEntitiesData(f(d.items))),
                    (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  l.error(t), (e.loadingState = o.Gui.REJECT);
                }
              }),
              getFilterName: (0, n.ls)(function* (t) {
                let { filtersResource: a, modelActionsLogger: i } = (0, n.dU)(
                  e,
                );
                try {
                  let i = yield a.getFilterName({ filterId: t });
                  e.activeFilterName = i.name;
                } catch (e) {
                  i.error(e);
                }
              }),
              handleFilterClick(a) {
                if (!(0, n.fh)(e)) return;
                let { sonataState: i, playlist: r } = (0, n.yj)(e);
                t.setActiveFilter(a.id),
                  t.getFilterName(a.id),
                  r.setItems(e.activeFilter ? a.tracks : r.initialItems),
                  i.setUnloadedEntitiesData(f(r.items)),
                  t.setShouldSendEventOnTabOpened(!0);
              },
              setActiveFilter(t) {
                t !== g.W.ALL
                  ? (e.activeFilter = t)
                  : (e.activeFilter = void 0);
              },
              setShouldSendEventOnTabOpened(t) {
                e.shouldSendEventOnTabOpened = t;
              },
              setShouldSendEventOnTabLoaded(t) {
                e.shouldSendEventOnTabLoaded = t;
              },
              reset() {
                e.destroyItems([e.items]),
                  (e.loadingState = o.Gui.IDLE),
                  (e.activeFilter = void 0),
                  (e.activeFilterName = null),
                  (e.shouldSendEventOnTabOpened = !0),
                  (e.shouldSendEventOnTabLoaded = !0);
              },
            };
            return t;
          }),
        T = (e, t) =>
          t.map((t) => {
            let a = e.find((e) => String(e.id) === t);
            return (null == a ? void 0 : a.albumId)
              ? "".concat(t, ":").concat(a.albumId)
              : t;
          }),
        _ = n.V5.compose(
          n.V5.model("PlaylistPageSearch", {
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            text: n.V5.string,
            playlistTrackIds: n.V5.maybeNull(n.V5.array(n.V5.string)),
            suggestedTrackIds: n.V5.maybeNull(n.V5.array(n.V5.string)),
            additionTrackInProggress: n.V5.maybeNull(n.V5.string),
            tracks: n.V5.maybeNull(n.V5.array(y.le)),
            isFocused: n.V5.optional(n.V5.boolean, !1),
          }),
          p.fu,
        )
          .views((e) => ({
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === o.Gui.PENDING;
            },
            get hasText() {
              return !!e.text.length;
            },
            get suggestedTracks() {
              var t;
              return null === (t = e.suggestedTrackIds) || void 0 === t
                ? void 0
                : t.map((t) => {
                    var a;
                    return (
                      (null === (a = e.tracks) || void 0 === a
                        ? void 0
                        : a.find((e) => e.id === t)) || null
                    );
                  });
            },
            get playlistTracks() {
              let t = [...(e.playlistTrackIds || [])];
              return (
                e.additionTrackInProggress &&
                  t.unshift(e.additionTrackInProggress),
                null == t
                  ? void 0
                  : t.map((t) => {
                      var a;
                      return (
                        (null === (a = e.tracks) || void 0 === a
                          ? void 0
                          : a.find((e) => {
                              var a;
                              return (
                                ((null === (a = e.mainAlbum) || void 0 === a
                                  ? void 0
                                  : a.id) && t.includes(":")
                                  ? "".concat(e.id, ":").concat(e.mainAlbum.id)
                                  : e.id) === t
                              );
                            })) || null
                      );
                    })
              );
            },
          }))
          .actions((e) => {
            let t = {
              getTracksMeta: (0, n.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: a } = (0, n.dU)(e),
                  i = [...(e.playlistTrackIds || [])].concat(
                    e.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: i,
                    removeDuplicates: !0,
                    withProgress: !0,
                  });
                  (e.tracks = (0, n.pj)(
                    null == a ? void 0 : a.map((e) => (0, y.Vt)(e)),
                  )),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE);
                } catch (e) {
                  a.error(e);
                }
                return null;
              }),
              getTracks: (0, n.ls)(function* (a) {
                let { uid: i, kind: r } = a,
                  { searchPlaylistResource: l, modelActionsLogger: s } = (0,
                  n.dU)(e);
                if (
                  e.loadingState === o.Gui.PENDING ||
                  !e.hasText ||
                  !(0, n.fh)(e)
                )
                  return;
                let { playlist: d } = (0, n.yj)(e);
                try {
                  var u, m;
                  e.loadingState = o.Gui.PENDING;
                  let { playlistTrackIds: a = [], suggestedTrackIds: s = [] } =
                      yield l.getTrackIds({ uid: i, kind: r, part: e.text }),
                    c = T(d.items, a);
                  (e.playlistTrackIds = (0, n.pj)(c)),
                    (e.suggestedTrackIds = (0, n.pj)(s)),
                    ((null === (u = e.playlistTrackIds) || void 0 === u
                      ? void 0
                      : u.length) || 0) +
                      ((null === (m = e.suggestedTrackIds) || void 0 === m
                        ? void 0
                        : m.length) || 0) >
                    0
                      ? t.getTracksMeta()
                      : (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof c.du &&
                      (t.statusCode === c.CN.NOT_FOUND ||
                        t.statusCode === c.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = c.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
              }),
              setText(t) {
                e.text = t;
              },
              setIdleState() {
                e.loadingState = o.Gui.IDLE;
              },
              setAdditionTrackAnimation(t) {
                e.additionTrackInProggress = t;
              },
              setFocus() {
                e.isFocused = !0;
              },
              removeFocus() {
                e.isFocused = !1;
              },
              replaceAdditionTrackInProggress() {
                if (e.additionTrackInProggress) {
                  var t, a;
                  null === (t = e.playlistTrackIds) ||
                    void 0 === t ||
                    t.unshift(e.additionTrackInProggress),
                    (e.suggestedTrackIds = (0, n.pj)(
                      null === (a = e.suggestedTrackIds) || void 0 === a
                        ? void 0
                        : a.filter((t) => t !== e.additionTrackInProggress),
                    )),
                    (e.additionTrackInProggress = null);
                }
              },
              resetAdditionTrackAnimation() {
                e.additionTrackInProggress = null;
              },
              reset() {
                (e.playlistTrackIds = null),
                  (e.suggestedTrackIds = null),
                  (e.additionTrackInProggress = null),
                  (e.tracks = null),
                  (e.loadingState = o.Gui.IDLE),
                  (e.isFocused = !1);
              },
            };
            return t;
          }),
        N = n.V5.compose(
          n.V5.model("PlaylistPage", {
            uuid: n.V5.maybeNull(n.V5.string),
            meta: n.V5.maybeNull(h.Nn),
            items: n.V5.array(g.Wj),
            errorStatusCode: n.V5.maybeNull(n.V5.number),
            similarPlaylists: n.V5.array(h.d2),
            initialItems: n.V5.array(g.Wj),
            shouldShowTrailerOnboarding: n.V5.maybeNull(n.V5.boolean),
            editorFeature: d,
            search: _,
            filters: C,
          }),
          p.Al,
          p.fu,
        )
          .views((e) => {
            let t = {
              get isLoading() {
                return e.isNeededToLoad || e.loadingState === o.Gui.PENDING;
              },
              get isDisabled() {
                var a;
                return (
                  e.isResolved &&
                  (0 === e.items.length ||
                    !(null === (a = e.meta) || void 0 === a
                      ? void 0
                      : a.isAvailable))
                );
              },
              get isNotFound() {
                return e.isRejected && e.errorStatusCode === c.CN.NOT_FOUND;
              },
              get hasSimilarPlaylists() {
                return t.isLoading || e.similarPlaylists.length > 0;
              },
              get isEmptyPlaylist() {
                return e.isResolved && 0 === e.items.length;
              },
              get contextMeta() {
                var i, r, l, s, d, u, g, h, y, p;
                return {
                  isAvailable:
                    null === (i = e.meta) || void 0 === i
                      ? void 0
                      : i.isAvailable,
                  id: e.meta.id,
                  uid: null === (r = e.meta) || void 0 === r ? void 0 : r.uid,
                  uuid: e.meta.uuid,
                  kind: null === (l = e.meta) || void 0 === l ? void 0 : l.kind,
                  title:
                    null === (s = e.meta) || void 0 === s ? void 0 : s.title,
                  coverUri:
                    null === (d = e.meta) || void 0 === d ? void 0 : d.coverUri,
                  likesCount:
                    null === (u = e.meta) || void 0 === u
                      ? void 0
                      : u.likesCount,
                  averageColor:
                    null === (g = e.meta) || void 0 === g
                      ? void 0
                      : g.averageColor,
                  owner:
                    null === (h = e.meta) || void 0 === h ? void 0 : h.owner,
                  description:
                    null === (y = e.meta) || void 0 === y
                      ? void 0
                      : y.description,
                  modified:
                    null === (p = e.meta) || void 0 === p ? void 0 : p.modified,
                };
              },
              get isDragAndDropEnabled() {
                var S;
                if (!(0, n.fh)(e)) return !1;
                let { ugcUploadCenter: t } = (0, n.yj)(e);
                return !!(
                  (null === (S = e.meta) || void 0 === S
                    ? void 0
                    : S.canUserChange) &&
                  (e.items.length > 1 ||
                    t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
                );
              },
              get itemsKeys() {
                return e.items.map((e) => e.key);
              },
              get isFavouritePlaylist() {
                var E;
                return (
                  (null === (E = e.meta) || void 0 === E ? void 0 : E.kind) ===
                  v.eX.LIKE
                );
              },
              get enableVariousAutoFlow() {
                return !!e.filters.activeFilter;
              },
              get trackIds() {
                return e.initialItems.map((e) =>
                  String((0, m.i)(e.id, e.albumId)),
                );
              },
              get isRewind2024Playlist() {
                var b;
                return (
                  (null === (b = e.meta) || void 0 === b
                    ? void 0
                    : b.generatedPlaylistType) === "rewind2024"
                );
              },
              get areAllTracksUploaded() {
                return e.items.every((e) => e.loadingState === o.Gui.RESOLVE);
              },
              get shouldShowEmptyBlock() {
                var f, P;
                if (!(0, n.fh)(e)) return !1;
                let { ugcUploadCenter: a } = (0, n.yj)(e),
                  i = !!(null === (f = e.meta) || void 0 === f
                    ? void 0
                    : f.isOwnPlaylist),
                  r = !!(
                    (null === (P = e.meta) || void 0 === P ? void 0 : P.kind) &&
                    a.getUploadingTracksByPlaylistKind(e.meta.kind).length
                  ),
                  l = !!e.search.hasText;
                return t.isEmptyPlaylist && i && !r && !l;
              },
              get virtualListItemsCount() {
                var I, k;
                if (e.search.hasText) return 0;
                return null !==
                  (k =
                    null === (I = e.items) || void 0 === I
                      ? void 0
                      : I.length) && void 0 !== k
                  ? k
                  : 0;
              },
              get isFiltersAvailable() {
                var C;
                return !!(
                  t.isFavouritePlaylist &&
                  (null === (C = e.meta) || void 0 === C
                    ? void 0
                    : C.isOwnPlaylist)
                );
              },
              get analyticsParams() {
                return {
                  objectId: e.uuid || void 0,
                  tabId: e.filters.activeFilter,
                  tabPos: e.filters.analyticsParamsActiveFilterIndex,
                };
              },
            };
            return t;
          })
          .actions((e) => {
            let t = {
              getTracksByRange: (0, n.ls)(function* (t) {
                var a, i;
                let { startIndex: r, endIndex: l } = t,
                  { tracksResource: s, modelActionsLogger: d } = (0, n.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (i = e.meta) || void 0 === i ? void 0 : i.kind)
                )
                  return null;
                (r = Math.max(0, r)), (l = Math.min(l, e.items.length));
                let u = E(e.items, { startIndex: r, endIndex: l });
                try {
                  let t = S(e.items, u);
                  if (!t.length) return null;
                  u.forEach((t) => {
                    let a = e.items[t];
                    a && (a.loadingState = o.Gui.PENDING);
                  });
                  let a = yield s.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  u.forEach((t, i) => {
                    let r = null == a ? void 0 : a[i];
                    if (e.items[t] && r) {
                      var l, s;
                      e.items[t] = {
                        id: r.id,
                        albumId:
                          (null === (s = r.albums) || void 0 === s
                            ? void 0
                            : null === (l = s[0]) || void 0 === l
                              ? void 0
                              : l.id) || null,
                        key: "".concat(r.id, "-").concat(t),
                        data: (0, y.Vt)(r),
                        loadingState: o.Gui.RESOLVE,
                      };
                    }
                  });
                } catch (t) {
                  d.error(t),
                    u.forEach((t) => {
                      let a = e.items[t];
                      a && (a.loadingState = o.Gui.REJECT);
                    });
                }
                return null;
              }),
              updateData: (0, n.ls)(function* (a) {
                var i;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = c.CN.NOT_FOUND),
                    (e.loadingState = o.Gui.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, n.pj)(
                  null === (i = a.similarPlaylists) || void 0 === i
                    ? void 0
                    : i.map(h.VB),
                )),
                  (e.meta = (0, h.Q9)(a)),
                  (e.items = (0, n.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: o.Gui.IDLE,
                    })),
                  )),
                  (e.initialItems = (0, u.ZN)(e.items));
                let {
                  sonataState: r,
                  playlist: l,
                  experiments: s,
                } = (0, n.yj)(e);
                return (
                  r.setUnloadedEntitiesData(f(e.items)),
                  (null == s
                    ? void 0
                    : s.checkExperiment(o.peG.WebEditorsFeatures, "on")) &&
                    l.editorFeature.getDuplicates(e.items),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, n.ls)(function* (a) {
                let {
                    userId: i,
                    playlistKind: r,
                    resumeStream: l = !1,
                    trackMetaType: s,
                    preloadedPlaylist: d,
                  } = a,
                  { usersResource: u, modelActionsLogger: m } = (0, n.dU)(e);
                if (e.loadingState !== o.Gui.PENDING)
                  try {
                    e.loadingState = o.Gui.PENDING;
                    let a = d;
                    if (
                      (a ||
                        (a = yield u.getPlaylistWithTracksIds({
                          userId: i,
                          playlistKind: r,
                          resumeStream: l,
                          trackMetaType: s,
                        })),
                      (e.uuid = null == a ? void 0 : a.playlistUuid),
                      "string" != typeof a.playlistUuid)
                    ) {
                      (e.errorStatusCode = c.CN.NOT_FOUND),
                        (e.loadingState = o.Gui.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = o.Gui.RESOLVE);
                  } catch (t) {
                    m.error(t),
                      t instanceof c.du &&
                        (t.statusCode === c.CN.NOT_FOUND ||
                          t.statusCode === c.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = c.CN.NOT_FOUND),
                      (e.loadingState = o.Gui.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, n.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: r = !1,
                    resumeStream: l = !1,
                    preloadedPlaylist: s,
                  } = a,
                  { playlistResource: d, modelActionsLogger: u } = (0, n.dU)(e);
                if (((e.uuid = i), e.loadingState !== o.Gui.PENDING))
                  try {
                    e.loadingState = o.Gui.PENDING;
                    let a = s;
                    a ||
                      (a = yield d.getPlaylist({
                        playlistUuid: i,
                        resumeStream: l,
                        richTracks: r,
                      })),
                      yield t.updateData(a),
                      e.loadingState !== o.Gui.IDLE &&
                        (e.loadingState = o.Gui.RESOLVE);
                  } catch (t) {
                    u.error(t),
                      t instanceof c.du &&
                        (t.statusCode === c.CN.NOT_FOUND ||
                          t.statusCode === c.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = c.CN.NOT_FOUND),
                      e.loadingState !== o.Gui.IDLE &&
                        (e.loadingState = o.Gui.REJECT);
                  }
              }),
              updatePlaylistTrackByUuid: (0, n.ls)(function* (a) {
                let {
                    playlistUuid: i,
                    richTracks: r = !1,
                    resumeStream: l = !1,
                  } = a,
                  { playlistResource: s, modelActionsLogger: d } = (0, n.dU)(e);
                e.uuid = i;
                try {
                  let a = yield s.getPlaylist({
                      playlistUuid: i,
                      resumeStream: l,
                      richTracks: r,
                    }),
                    d = [];
                  if (
                    ((e.items = (0, n.pj)(
                      a.tracks.map((t, a) => {
                        var i, r;
                        let l = String(t.id),
                          s = t.albumId || null;
                        return l ===
                          (null === (i = e.items[a]) || void 0 === i
                            ? void 0
                            : i.id) &&
                          s ===
                            (null === (r = e.items[a]) || void 0 === r
                              ? void 0
                              : r.albumId)
                          ? e.items[a]
                          : (d.push(a),
                            {
                              id: String(t.id),
                              albumId: t.albumId || null,
                              key: "".concat(t.id, "-").concat(a),
                              loadingState: o.Gui.IDLE,
                            });
                      }),
                    )),
                    e.meta &&
                      ((e.meta.modified = a.modified),
                      (e.meta.revision = a.revision),
                      d.length))
                  ) {
                    let e = Math.min(...d),
                      a = Math.max(...d);
                    t.getTracksByRange({ startIndex: e, endIndex: a });
                  }
                  if (
                    (e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.RESOLVE),
                    (0, n.fh)(e))
                  ) {
                    let { sonataState: t } = (0, n.yj)(e);
                    t.setUnloadedEntitiesData(f(e.items));
                  }
                } catch (t) {
                  d.error(t),
                    t instanceof c.du &&
                      (t.statusCode === c.CN.NOT_FOUND ||
                        t.statusCode === c.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = c.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
              }),
              moveTrack(t, a) {
                let i = (0, u.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  i &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, n.fh)(e))
                ) {
                  let { sonataState: t } = (0, n.yj)(e);
                  t.setUnloadedEntitiesData(f(e.items));
                }
              },
              removeTracksFromItems(t, a) {
                if ((e.items.splice(t, a), (0, n.fh)(e))) {
                  let { sonataState: t } = (0, n.yj)(e);
                  t.setUnloadedEntitiesData(f(e.items));
                }
              },
              setItems(t) {
                e.items = (0, n.pj)((0, u.ZN)(t));
              },
              setShouldShowTrailerOnboarding(t) {
                e.shouldShowTrailerOnboarding = t;
              },
              reset() {
                let { sonataState: t } = (0, n.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.uuid = null),
                  (e.loadingState = o.Gui.IDLE),
                  (e.errorStatusCode = null),
                  (e.shouldShowTrailerOnboarding = null),
                  e.search.setText(""),
                  e.search.reset(),
                  e.filters.reset(),
                  e.destroyItems([
                    e.meta,
                    e.items,
                    e.initialItems,
                    e.similarPlaylists,
                  ]);
              },
              refresh() {
                var a, i;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.getPlaylistByUuid({
                    playlistUuid:
                      null === (i = e.meta) || void 0 === i ? void 0 : i.uuid,
                    resumeStream: !1,
                  });
              },
              refreshTracks() {
                var a, i;
                (null === (a = e.meta) || void 0 === a ? void 0 : a.uuid) &&
                  t.updatePlaylistTrackByUuid({
                    playlistUuid:
                      null === (i = e.meta) || void 0 === i ? void 0 : i.uuid,
                    resumeStream: !1,
                  });
              },
            };
            return t;
          });
      a(40384);
      var A = a(60571),
        D = a(55284);
    },
    81746: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return g.PostPage;
        },
        vU: function () {
          return m;
        },
      });
      var i = a(22874),
        r = a(62726),
        l = a(81445),
        s = a(72783),
        n = a(7797),
        o = a(64353),
        d = a(10979),
        u = a(13534),
        c = a(40892);
      let m = i.V5.compose(
        i.V5.model("PostPage", {
          errorStatusCode: i.V5.maybe(i.V5.number),
          title: i.V5.maybeNull(i.V5.string),
          promotionType: i.V5.maybeNull(i.V5.enumeration(Object.values(l.q))),
          artists: i.V5.maybe(i.V5.array(o.Go)),
          albums: i.V5.maybe(i.V5.array(s.ug)),
          playlists: i.V5.maybe(i.V5.array(n.d2)),
        }),
        c.fu,
      )
        .views((e) => {
          let t = {
            get isLoading() {
              return e.isNeededToLoad || e.loadingState === u.Gui.PENDING;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === r.CN.NOT_FOUND ||
                e.errorStatusCode === r.CN.BAD_REQUEST;
              return e.isRejected && t;
            },
            get isSomethingWrong() {
              return e.isRejected && !t.isNotFound;
            },
          };
          return t;
        })
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: l, modelActionsLogger: n } = (0, i.dU)(e);
            if (e.loadingState !== u.Gui.PENDING)
              try {
                e.loadingState = u.Gui.PENDING;
                let t = yield l.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, i.pj)(t.artists.map(o.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, i.pj)(t.albums.map(s.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, i.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, d.PV)(t);
                      }),
                    )),
                  e.loadingState !== u.Gui.IDLE &&
                    (e.loadingState = u.Gui.RESOLVE);
              } catch (t) {
                n.error(t),
                  t instanceof r.du &&
                    (t.statusCode === r.CN.NOT_FOUND ||
                      t.statusCode === r.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = r.CN.NOT_FOUND),
                  e.loadingState !== u.Gui.IDLE &&
                    (e.loadingState = u.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = u.Gui.IDLE),
              (e.title = null),
              (e.artists = (0, i.pj)([])),
              (e.albums = (0, i.pj)([]));
          },
        }));
      a(58342);
      var g = a(44157);
    },
    58342: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return s;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(35551);
      let s = (0, r.Pi)(() => (0, i.jsx)(l.T, {}));
    },
    44157: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return x;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(81445),
        d = a(17294),
        u = a(28676),
        c = a(17392),
        m = a(30948),
        g = a(69947),
        h = a(13534),
        y = a(97141),
        v = a(36173),
        p = a.n(v);
      let S = () =>
        (0, i.jsxs)("div", {
          className: p().root,
          children: [
            (0, i.jsx)(u.Shimmer, { radius: "l", className: p().top }),
            (0, i.jsx)(u.Shimmer, { radius: "l", className: p().bottom }),
          ],
        });
      var E = a(98644),
        b = a.n(E),
        f = a(72783),
        P = a(34919),
        I = a.n(P);
      let k = (0, l.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: I().root,
          children: (0, i.jsx)("div", {
            className: I().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                f.rf,
                { className: I().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var C = a(55051),
        T = a(55931),
        _ = a.n(T);
      let N = (0, l.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: _().root,
          children: (0, i.jsx)("div", {
            className: _().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                C.IT,
                { className: _().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var A = a(7797),
        D = a(56039),
        L = a.n(D);
      let R = (0, l.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: L().root,
            children: (0, i.jsx)("div", {
              className: L().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  A.ZL,
                  { className: L().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        x = (0, l.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, h.oR4)(),
            l = (0, h.k67)(),
            { contentScrollRef: v, setContentScrollRef: p } = (0, h.$Y6)();
          (0, n.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
            a.isNotFound && (0, s.notFound)(),
            (0, h.NOh)(a.isResolved);
          let E = (0, n.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(S, {});
            switch (a.promotionType) {
              case o.q.ARTISTS:
                return (0, i.jsx)(N, { artists: a.artists });
              case o.q.ALBUMS:
                return (0, i.jsx)(k, { albums: a.albums });
              case o.q.PLAYLISTS:
                return (0, i.jsx)(R, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (t &&
            a.isNeededToLoad &&
            (0, n.use)(a.getData({ promoId: t })),
          a.isSomethingWrong)
            ? (0, i.jsx)(m.D, {})
            : (0, i.jsx)(h.Lh6, {
                pageId: h.Rhz.POST,
                children: (0, i.jsx)(g.I7, {
                  scrollElement: v,
                  outerTitle: a.title || void 0,
                  children: (0, i.jsxs)("div", {
                    className: b().root,
                    children: [
                      (0, i.jsx)(y.h4, {
                        variant: y.bm.TEXT,
                        withForwardControl: !1,
                        withBackwardControl: l.canBack,
                        children: a.title
                          ? (0, i.jsx)(c.Heading, {
                              id: "post-header",
                              variant: "h2",
                              weight: "bold",
                              size: "xl",
                              lineClamp: 1,
                              children: a.title,
                            })
                          : (0, i.jsx)(u.Shimmer, {
                              className: b().shimmerTitle,
                              radius: "l",
                            }),
                      }),
                      (0, i.jsx)(d.t, {
                        containerClassName: (0, r.W)(
                          b().scrollContainer,
                          b().important,
                        ),
                        className: b().scrollableContainer,
                        ref: p,
                        children: (0, i.jsx)("div", {
                          className: b().container,
                          children: E,
                        }),
                      }),
                    ],
                  }),
                }),
              });
        });
    },
    82869: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return d.TagPage;
        },
        tS: function () {
          return o;
        },
      });
      var i = a(22874),
        r = a(62726),
        l = a(10979),
        s = a(13534),
        n = a(40892);
      let o = i.V5.model("TagPage", {
        title: i.V5.maybe(i.V5.string),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        tagLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsData: i.V5.array(
          i.V5.model({ uid: i.V5.number, kind: i.V5.number }),
        ),
        playlists: i.V5.array(i.V5.maybeNull(l.Cd)),
        pager: i.V5.maybeNull(n.Vn),
        alreadyRequestedPages: i.V5.map(i.V5.number),
        pendingPages: i.V5.map(i.V5.number),
        requests: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => {
          let t = {
            get isNeededToLoad() {
              return e.tagLoadingState === s.Gui.IDLE;
            },
            get isResolved() {
              return (
                e.tagLoadingState === s.Gui.RESOLVE &&
                e.playlistsLoadingState === s.Gui.RESOLVE
              );
            },
            get isNotFound() {
              let t =
                e.playlistsLoadingState === s.Gui.RESOLVE &&
                0 === e.playlists.length;
              return (
                ((e.tagLoadingState === s.Gui.REJECT ||
                  e.playlistsLoadingState === s.Gui.REJECT) &&
                  (e.errorStatusCode === r.CN.NOT_FOUND ||
                    e.errorStatusCode === r.CN.BAD_REQUEST)) ||
                t
              );
            },
            get isSomethingWrong() {
              return (
                (e.tagLoadingState === s.Gui.REJECT ||
                  e.playlistsLoadingState === s.Gui.REJECT) &&
                !t.isNotFound
              );
            },
          };
          return t;
        })
        .actions((e) => {
          let t = {
            getPlaylists: (0, i.ls)(function* (t) {
              let { page: a = 0, pageSize: n = 20 } = t,
                { playlistsResource: o, modelActionsLogger: d } = (0, i.dU)(e);
              if (
                !(
                  e.tagLoadingState !== s.Gui.RESOLVE ||
                  (e.playlistsLoadingState === s.Gui.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var u;
                  (e.playlistsLoadingState = s.Gui.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * n,
                    r = e.playlistsData.slice(t, t + n),
                    d = yield o.getPlaylists({
                      playlistIds: r.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1;
                  let c = {
                    page: a,
                    perPage: n,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, i.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let m = d.playlists.map(l.PV);
                  (0, s.AG_)({
                    items: e.playlists,
                    mappedRawItems: m,
                    page: a,
                    pageSize: n,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.RESOLVE);
                } catch (t) {
                  d.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = s.Gui.IDLE),
                (e.playlistsLoadingState = s.Gui.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, i.ls)(function* (a) {
              let { id: l, page: n = 0, pageSize: o = 20 } = a,
                { tagResource: d, modelActionsLogger: u } = (0, i.dU)(e);
              if (e.tagLoadingState !== s.Gui.PENDING)
                try {
                  var c;
                  e.tagLoadingState = s.Gui.PENDING;
                  let a = yield d.getPlaylistIds({ id: l });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, i.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.RESOLVE),
                    yield t.getPlaylists({ page: n, pageSize: o });
                } catch (t) {
                  u.error(t),
                    t instanceof r.du &&
                      (t.statusCode === r.CN.NOT_FOUND ||
                        t.statusCode === r.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = r.CN.NOT_FOUND),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.REJECT);
                }
            }),
          };
          return t;
        });
      a(70794);
      var d = a(6397);
    },
    70794: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return s;
        },
      });
      var i = a(75441),
        r = a(62569),
        l = a(35551);
      let s = (0, r.Pi)(() => (0, i.jsx)(l.T, {}));
    },
    6397: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return p;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        s = a(98730),
        n = a(65067),
        o = a(9317),
        d = a(17392),
        u = a(30948),
        c = a(69947),
        m = a(7797),
        g = a(13534),
        h = a(97141),
        y = a(450),
        v = a.n(y);
      let p = (0, l.Pi)((e) => {
        var t, a, l;
        let { tagId: y } = e,
          {
            tag: p,
            settings: { isMobile: S },
          } = (0, g.oR4)(),
          { formatMessage: E } = (0, o.Z)(),
          { contentScrollRef: b, setContentScrollRef: f } = (0, g.$Y6)(),
          P = (0, g.k67)();
        y || (0, s.notFound)();
        let I = (0, n.useCallback)(
          (e) => {
            p.getPlaylists({ page: e, pageSize: 20 });
          },
          [p],
        );
        p.isNotFound && (0, s.notFound)(),
          (0, n.useEffect)(
            () => () => {
              p.reset();
            },
            [p],
          );
        let k = (0, n.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(h.$_, { className: v().footer }) }),
          [],
        );
        return ((0, g.NOh)(p.isResolved),
        p.isNeededToLoad &&
          (0, n.use)(p.getTag({ id: y, page: 0, pageSize: 20 })),
        p.isSomethingWrong)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsx)(g.Lh6, {
              pageId: g.Rhz.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: b,
                outerTitle: p.title,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(h.h4, {
                      variant: h.bm.TEXT,
                      withForwardControl: !1,
                      withBackwardControl: P.canBack,
                      children: (0, i.jsx)(d.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: p.title,
                      }),
                    }),
                    (0, i.jsx)(h.Wv, {
                      className: (0, r.W)(v().scrollContainer, v().important),
                      customComponents: k,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == p
                              ? void 0
                              : null === (t = p.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          r = E(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: E({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(h.hi, { "aria-label": r });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == p
                              ? void 0
                              : null === (t = p.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: I,
                      pageSize: 20,
                      totalRequests:
                        null !== (l = p.requests) && void 0 !== l ? l : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: f,
                      context: {
                        listAriaLabel: E(
                          { id: "mixes.albums-list" },
                          { genreName: p.title || "" },
                        ),
                      },
                      isMobileLayout: S,
                      useWindowScroll: S,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    14004: function (e, t, a) {
      "use strict";
      a.d(t, {
        Fu: function () {
          return h;
        },
        di: function () {
          return o;
        },
      });
      var i = a(65067),
        r = a(13534),
        l = a(90034);
      let s = (e, t) => {
          let a = !0;
          return (0, l.Z)(e).reduce((e, i) => {
            if (!i.durationMs) return e;
            if (i.id === t) {
              var r;
              return (
                (a = !1),
                e +
                  ((null === (r = i.streamProgress) || void 0 === r
                    ? void 0
                    : r.endPositionSec) || 0)
              );
            }
            return a ? e + i.durationMs / 1e3 : e;
          }, 0);
        },
        n = (e) => {
          let { sonataState: t, continueListen: a } = (0, r.oR4)();
          return (0, i.useCallback)(() => {
            var i, r, l, n, o, d, u, c;
            if (
              !e ||
              (!(null === (i = t.entityMeta) || void 0 === i
                ? void 0
                : i.isPodcast) &&
                !(null === (r = t.entityMeta) || void 0 === r
                  ? void 0
                  : r.isAudiobook))
            )
              return;
            let m = e.state.queueState.index.value;
            e.state.queueState.order.value.length > 0 &&
              "number" == typeof m &&
              a.saveTrackIndex(m);
            let g =
              null === (l = e.state.currentContext.value) || void 0 === l
                ? void 0
                : l.data.meta;
            if (
              g &&
              t.contextType &&
              t.contextId &&
              (a.saveTrack({
                contextType: t.contextType,
                contextId: t.contextId,
                track: t.entityMeta,
              }),
              t.entityMeta.isAudiobook)
            ) {
              if ("volumes" in g && g.volumes) {
                let e;
                let i = s(g.volumes, t.entityMeta.id);
                "durationSec" in g && (e = g.durationSec),
                  a.saveAlbumDuration(e),
                  null === (d = a.trackTempStreamProgress) ||
                    void 0 === d ||
                    d.updateEndPositionSec(
                      (null === (o = a.track) || void 0 === o
                        ? void 0
                        : null === (n = o.streamProgress) || void 0 === n
                          ? void 0
                          : n.endPositionSec) || 0,
                    ),
                  null === (u = a.albumStreamProgress) ||
                    void 0 === u ||
                    u.updateEndPositionSec(i);
              }
              "listeningFinished" in g &&
                (null === (c = a.albumStreamProgress) ||
                  void 0 === c ||
                  c.updateEverFinished(g.listeningFinished || !1));
            }
          }, [e, a, t]);
        },
        o = (e) => {
          var t;
          let { sonata: a } = e,
            r = n(a);
          (0, i.useEffect)(() => {
            var e;
            let t =
              null == a
                ? void 0
                : null === (e = a.state) || void 0 === e
                  ? void 0
                  : e.queueState.currentEntity.onChange(() => {
                      r();
                    });
            return () => {
              null == t || t();
            };
          }, [
            null == a
              ? void 0
              : null === (t = a.state) || void 0 === t
                ? void 0
                : t.queueState.currentEntity,
            r,
          ]);
        };
      var d = a(37285),
        u = a(22874),
        c = a(84638),
        m = a(1150),
        g = a(32399);
      let h = u.V5.model("ContinueListen", {
        track: u.V5.maybe(m.le),
        trackIndex: u.V5.maybe(u.V5.number),
        contextType: u.V5.maybeNull(u.V5.enumeration(Object.values(c.A))),
        contextId: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
        albumDuration: u.V5.maybe(u.V5.number),
        albumStreamProgress: u.V5.optional(g.XK, { endPositionSec: 0 }),
        trackTempStreamProgress: u.V5.optional(g.XK, { endPositionSec: 0 }),
      }).actions((e) => ({
        saveTrack: (t) => {
          let { contextType: a, contextId: i, track: r, isDefaultTrack: l } = t;
          (l && e.track) ||
            ((e.contextType = a),
            (e.contextId = i),
            (e.track = (0, u.pj)((0, d.ZN)(r))));
        },
        saveTrackIndex: (t) => {
          e.trackIndex = t;
        },
        saveAlbumDuration: (t) => {
          e.albumDuration = t;
        },
      }));
    },
    60953: function (e) {
      e.exports = {
        toastClassName: "NotificationsInitializer_toastClassName__ZVvrd",
        notificationContainer:
          "NotificationsInitializer_notificationContainer__oe1ot",
      };
    },
    19956: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    26893: function (e) {
      e.exports = {
        root: "UgcUploadCenterNotification_root__K_U0z",
        title: "UgcUploadCenterNotification_title__s3yTL",
        link: "UgcUploadCenterNotification_link__NPz6r",
      };
    },
    74487: function (e) {
      e.exports = {
        root: "ChartPodcastsPage_root__J5lnx",
        scrollContainer: "ChartPodcastsPage_scrollContainer__WQTf7",
        important: "ChartPodcastsPage_important__fW45m",
        footer: "ChartPodcastsPage_footer__7ytrT",
        item: "ChartPodcastsPage_item__vGRt8",
        content: "ChartPodcastsPage_content__NcV4M",
      };
    },
    99396: function (e) {
      e.exports = {
        root: "ChartTracksPage_root__QMbqY",
        scrollContainer: "ChartTracksPage_scrollContainer__Pxe8S",
        important: "ChartTracksPage_important__Lddyf",
        content: "ChartTracksPage_content__yyIAN",
        footer: "ChartTracksPage_footer__6sNBk",
        shimmerItem: "ChartTracksPage_shimmerItem__YwM0h",
      };
    },
    68540: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    14546: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    35172: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    7256: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    25018: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    9717: function (e) {
      e.exports = {
        root: "KidsCategoryPage_root__bk7_R",
        content: "KidsCategoryPage_content__LN0NB",
        header: "KidsCategoryPage_header__Agys3",
        landing: "KidsCategoryPage_landing__aSDYw",
        landing_onlyWizard: "KidsCategoryPage_landing_onlyWizard__3EC9N",
        footer: "KidsCategoryPage_footer__BQhqi",
        error: "KidsCategoryPage_error__tSXF7",
      };
    },
    26554: function (e) {
      e.exports = { root: "KidsCategoryPageShimmer_root__0V_bC" };
    },
    763: function (e) {
      e.exports = {
        root: "KidsEditorialAlbumsPage_root__7rHF8",
        scrollContainer: "KidsEditorialAlbumsPage_scrollContainer__nQVlt",
        important: "KidsEditorialAlbumsPage_important__hmmxn",
        footer: "KidsEditorialAlbumsPage_footer__6rwU1",
        item: "KidsEditorialAlbumsPage_item__Wc243",
        content: "KidsEditorialAlbumsPage_content__u3zcW",
      };
    },
    47309: function (e) {
      e.exports = {
        root: "KidsEditorialPlaylistsPage_root__HeHqc",
        scrollContainer: "KidsEditorialPlaylistsPage_scrollContainer__Hy6HY",
        important: "KidsEditorialPlaylistsPage_important__283cd",
        footer: "KidsEditorialPlaylistsPage_footer___UaP5",
        item: "KidsEditorialPlaylistsPage_item__0wBk2",
        content: "KidsEditorialPlaylistsPage_content__6wWkP",
      };
    },
    53638: function (e) {
      e.exports = {
        root: "KidsPage_root__yycsJ",
        content: "KidsPage_content__08pPR",
        header: "KidsPage_header__2Gk2l",
        landing: "KidsPage_landing__3QZZj",
        landing_onlyWizard: "KidsPage_landing_onlyWizard__xKyDo",
        footer: "KidsPage_footer__p7SVD",
        error: "KidsPage_error__qa7Qo",
      };
    },
    5169: function (e) {
      e.exports = { root: "MyMusicDownloadedTracksInfo_root__yIYHx" };
    },
    25340: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPage_root__hZZwz",
        important: "MyMusicDownloadedTracksPage_important__QP_t0",
        pageContainer: "MyMusicDownloadedTracksPage_pageContainer__qu3hF",
        footer: "MyMusicDownloadedTracksPage_footer__KI5OP",
        content: "MyMusicDownloadedTracksPage_content__Iz1WY",
        trackShimmer: "MyMusicDownloadedTracksPage_trackShimmer__MZgW3",
      };
    },
    34175: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPageEmpty_root__LAXpY",
        icon: "MyMusicDownloadedTracksPageEmpty_icon__PDhk2",
        title: "MyMusicDownloadedTracksPageEmpty_title__g2w5R",
        text: "MyMusicDownloadedTracksPageEmpty_text__8RJFg",
      };
    },
    7089: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPageHeader_root__2vfuc",
        container: "MyMusicDownloadedTracksPageHeader_container__hQ_wt",
        title: "MyMusicDownloadedTracksPageHeader_title__Ncn5X",
        stickyTitle: "MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U",
        playButton: "MyMusicDownloadedTracksPageHeader_playButton__seWgC",
        stickyPlayButton:
          "MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd",
        titleContainer:
          "MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS",
        staticHeader: "MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8",
        important: "MyMusicDownloadedTracksPageHeader_important__JIubq",
        stickyHeader: "MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4",
      };
    },
    13446: function (e) {
      e.exports = {
        root: "PlaylistPersonalDummyPage_root__tGxHG",
        cover: "PlaylistPersonalDummyPage_cover__XcCD1",
        title: "PlaylistPersonalDummyPage_title__ZSf9O",
        important: "PlaylistPersonalDummyPage_important__uEHGe",
        text: "PlaylistPersonalDummyPage_text__ci30d",
      };
    },
    98644: function (e) {
      e.exports = {
        root: "PostPage_root__Orhf7",
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        scrollContainer: "PostPage_scrollContainer__zrIrH",
        important: "PostPage_important__qUlED",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    34919: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    55931: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    56039: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    36173: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    450: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    80655: function (e) {
      e.exports = {
        root: "BrowserUpdateNotification_root__IN495",
        important: "BrowserUpdateNotification_important__6k4Gb",
      };
    },
    81445: function (e, t, a) {
      "use strict";
      var i, r;
      a.d(t, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).ALBUMS = "albums"),
        (r.ARTISTS = "artists"),
        (r.PLAYLISTS = "playlists");
    },
    73084: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return r;
        },
      });
      var i = a(81046);
      function r(e) {
        return (null == e ? void 0 : e.data.type) === i.A.SmartPreview;
      }
    },
    17073: function (e, t, a) {
      "use strict";
      a.d(t, {
        E: function () {
          return s;
        },
      });
      var i = a(66924),
        r = a(73084),
        l = a(95817);
      function s(e) {
        let { productQuality: t, entities: a, entity: s } = e,
          n = !1;
        if ((a && (n = a.some((e) => (0, r.Y)(e))), s && (n = (0, r.Y)(s)), n))
          return i.n.SMART_PREVIEW;
        switch (t) {
          case l.n.HIGH_QUALITY:
            return i.n.LOSSLESS;
          case l.n.BALANCED:
            return i.n.NQ;
          case l.n.EFFICIENT:
            return i.n.LQ;
          case l.n.PREVIEW:
            return i.n.PREVIEW;
          default:
            return i.n.NQ;
        }
      }
    },
  },
]);
