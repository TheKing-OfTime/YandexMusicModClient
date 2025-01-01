(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [777, 8866, 9905, 1325, 7129, 4093, 4705],
  {
    77206: function (e, t, a) {
      "use strict";
      a.d(t, {
        BlackboxInitializer: function () {
          return r;
        },
      });
      var i = a(44744),
        n = a(20794);
      let r = (0, i.Pi)((e) => {
        let { children: t, userIp: a } = e,
          { location: i } = (0, n.oR4)();
        return t;
      });
    },
    59672: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BuySubscriptionInitializer: function () {
            return o;
          },
        });
      var i = a(44744),
        n = a(71859),
        r = a(79001),
        s = a(20794);
      let o = (0, i.Pi)(() => {
        let { user: e } = (0, s.oR4)(),
          { hasFreeUserAccess: t } = (0, s.NMB)(),
          a = (0, r.F)("music", t),
          {
            payment: { environment: i },
          } = (0, s.uK4)().get(s.U5t),
          o = (0, n.useRef)(new Date()),
          l = (0, n.useCallback)(async () => {
            let t = "production" === i ? e.account.uid : void 0;
            await Promise.allSettled([a.getData({ uid: t })]),
              (o.current = new Date());
          }, [a, i, e]),
          u = (0, n.useCallback)(async () => {
            let e = o.current.getTime() < Date.now() - 6e5;
            "visible" === document.visibilityState && e && (await l());
          }, [l]);
        (0, n.useEffect)(() => {
          if (!t) return;
          let e = new AbortController();
          return (
            window.addEventListener("focus", u, { signal: e.signal }),
            () => {
              e.abort();
            }
          );
        }, [t, u]);
      });
    },
    22923: function (e, t, a) {
      "use strict";
      a.d(t, {
        CrackdownInitializer: function () {
          return o;
        },
      });
      var i = a(44744),
        n = a(71859),
        r = a(37460),
        s = a(20794);
      let o = (0, i.Pi)(() => {
        let {
            user: e,
            sonataState: t,
            modals: { crackdownModal: a },
            settings: i,
            experiments: o,
          } = (0, s.oR4)(),
          { isFreemium: l } = (0, s.NMB)(),
          u = i.layout === s.t8m.Desktop,
          d = (0, n.useMemo)(() => e.isAuthorized && l && u, [e, l, u]),
          c = (0, s.R$C)(),
          m = (0, n.useRef)(new Date()),
          h = (0, n.useCallback)(() => {
            m.current = new Date();
          }, []),
          g = (0, n.useCallback)(() => {
            var e, t;
            let i =
              null !==
                (t =
                  null ===
                    (e = o.experiments.get(s.peG.WebNextCrackdownInterval)) ||
                  void 0 === e
                    ? void 0
                    : e.value.interval) && void 0 !== t
                ? t
                : 18e5;
            m.current.getTime() < Date.now() - i && (a.open(), h());
          }, [o.experiments, a, h]);
        (0, n.useEffect)(() => {
          if (!d) return;
          let e =
            null == c
              ? void 0
              : c.state.playerState.status.onChange((e) => {
                  e === r.Xz.ENDED && g();
                });
          return () => {
            null == e || e();
          };
        }, [d, c, g]),
          (0, n.useEffect)(() => {
            d && a.isOpened && (null == c || c.pause());
          }, [d, a.isOpened, c, t.status]),
          (0, n.useEffect)(() => {
            if (!d) return;
            let e = new AbortController();
            return (
              window.addEventListener("mousemove", h, { signal: e.signal }),
              window.addEventListener("keydown", h, { signal: e.signal }),
              window.addEventListener("touchstart", h, { signal: e.signal }),
              () => {
                e.abort();
              }
            );
          }, [d, h]);
      });
    },
    85065: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DesktopInitializer: function () {
            return l;
          },
        });
      var i = a(95660),
        n = a(71859),
        r = a(65735),
        s = a(65591),
        o = a(20794);
      let l = () => {
        let { language: e } = (0, o.ZSk)();
        {
          let { theme: t } = (0, o.FgM)(),
            a = (0, r.s)();
          (0, s.Tk)(),
            (0, s.Er)(),
            (0, s.bO)(),
            (0, s.vs)(),
            (0, s.g3)(),
            (0, s.Zw)(),
            (0, s.ao)(),
            (0, s.lA)(),
            (0, n.useEffect)(() => {
              (0, s.Yl)(e), (0, s.l7)();
            }, [e]),
            (0, n.useEffect)(() => {
              let e = (0, o.bop)();
              e && a.count(e, "appVersion");
            }, [a]),
            (0, n.useEffect)(() => {
              (0, s.F5)(t), a.count(t, "appTheme");
            }, [t]);
        }
        return (0, i.jsx)(s.Pj, {});
      };
    },
    29214: function (e, t, a) {
      "use strict";
      a.d(t, {
        SavedOfferInitializer: function () {
          return s;
        },
      });
      var i = a(44744),
        n = a(71859),
        r = a(20794);
      let s = (0, i.Pi)(() => {
        let {
            paymentWidgetModal: {
              modal: e,
              setTarget: t,
              setTariffOfferName: a,
              setServiceSessionId: i,
            },
          } = (0, r.oR4)(),
          { hasFreeUserAccess: s } = (0, r.NMB)(),
          o = (0, r.uK4)(),
          l = (0, n.useMemo)(() => o.get(r.ArX), [o]);
        (0, n.useLayoutEffect)(() => {
          if (!s || null === l) return;
          let n = l.get(r.BUb.Offer);
          if (null === n) return;
          let { target: o, serviceSessionId: u, tariffOfferName: d } = n;
          l.remove(r.BUb.Offer), t(o), i(u), d && a(d), e.open();
        }, [s, l, e, a, t, i]);
      });
    },
    13008: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          UrlInitializer: function () {
            return s;
          },
        });
      var i = a(44744),
        n = a(97667),
        r = a(20794);
      let s = (0, i.Pi)((e) => {
        let { host: t } = e,
          { location: a } = (0, r.oR4)(),
          i = (0, n.usePathname)(),
          s = (0, n.useSearchParams)().toString(),
          o = window.location.host,
          l = t || o,
          u = "https://".concat(l),
          d = "https://"
            .concat(l)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s);
        (u = l),
          (d = ""
            .concat(l)
            .concat(i)
            .concat(s ? "?" : "")
            .concat(s)),
          a.setPathname(i),
          a.setSearchParams(s),
          a.setHost(l),
          a.setTld((0, r.p$)(l) || "ru"),
          a.setOrigin(u),
          a.setHref(d);
      });
    },
    62364: function (e, t, a) {
      "use strict";
      a.d(t, {
        WebAudioInitializer: function () {
          return o;
        },
      });
      var i = a(10576),
        n = a(44744),
        r = a(71859),
        s = a(20794);
      let o = (0, n.Pi)(() => {
        let { equalizer: e } = (0, s.oR4)(),
          t = (0, s.jpI)();
        (0, r.useEffect)(() => {
          0 === e.presets.size && e.loadPresets();
        }, [e]),
          (0, r.useEffect)(() => {
            (null == t ? void 0 : t.equalizer) &&
              e.isEnabled &&
              e.currentPreset &&
              t.equalizer.applyPreset((0, i.ZN)(e.currentPreset));
          }, [
            e.currentPreset,
            e.presetVersion,
            e.isEnabled,
            null == t ? void 0 : t.equalizer,
          ]),
          (0, r.useEffect)(() => {
            (null == t ? void 0 : t.equalizer) &&
              (e.isEnabled
                ? (e.currentPreset &&
                    t.equalizer.applyPreset((0, i.ZN)(e.currentPreset)),
                  t.equalizer.enable())
                : t.equalizer.disable());
          }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer]);
      });
    },
    60992: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          WebInitializer: function () {
            return s;
          },
        });
      var i = a(95660);
      a(71859);
      var n = a(20794),
        r = a(77206);
      let s = (e) => {
        let { userIp: t } = e,
          { experiments: a } = (0, n.oR4)();
        return (
          (0, n.uK4)().get(n.V0J).get(n.BUb.DisallowDeeplinksRedirect),
          (0, i.jsx)(r.BlackboxInitializer, { userIp: t })
        );
      };
    },
    34412: function (e, t, a) {
      "use strict";
      a.d(t, {
        AdvertProvider: function () {
          return c;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(77861),
        o = a(37460),
        l = a(52203),
        u = a(20794);
      let d = null,
        c = (0, n.Pi)((e) => {
          let { children: t } = e,
            { advert: a, experiments: n, user: c } = (0, u.oR4)(),
            m = (0, u.wLl)();
          return (!d &&
            c.isAuthorized &&
            n.checkExperiment(u.peG.WebNextAudioVideoAdvert, "on") &&
            (d = new u.D_({
              logger: m,
              advertPlaybackParams: { audioCore: new s.K(), id: u.jiA.ADVERT },
              videoSlotId: l.Y1.SLOT,
              videoElementId: l.Y1.VIDEO,
            })),
          (0, r.useEffect)(() => {
            null == d || d.init();
          }, []),
          (0, r.useEffect)(() => {
            if (
              !n.checkExperiment(u.peG.WebNextAudioVideoAdvert, "on") ||
              !c.isAuthorized
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
          }, [a, n, c.isAuthorized]),
          (0, r.useEffect)(() => {
            var e;
            let t =
              null == d
                ? void 0
                : null === (e = d.audioAdvertPlayback) || void 0 === e
                  ? void 0
                  : e.state.playerState.event.onChange((e) => {
                      if (a.isAdvertShown) {
                        if (
                          (e === o.KX.END &&
                            (a.setAdvertShown(!1),
                            null == d || d.state.setDefaultState()),
                          e === o.KX.PLAYING)
                        ) {
                          a.setAdvertPlaying(!0);
                          return;
                        }
                        if (e === o.KX.END || e === o.KX.PAUSED) {
                          a.setAdvertPlaying(!1);
                          return;
                        }
                      }
                    });
            return () => (null == t ? void 0 : t());
          }, [a]),
          (0, r.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          n.checkExperiment(u.peG.WebNextAudioVideoAdvert, "on") &&
            c.isAuthorized)
            ? (0, i.jsx)(u.SD4.Provider, { value: d, children: t })
            : t;
        });
    },
    53602: function (e, t, a) {
      "use strict";
      a.d(t, {
        AnalyticsProvider: function () {
          return u;
        },
      });
      var i = a(95660),
        n = a(71859),
        r = a(51739),
        s = a(65735),
        o = a(20794);
      let l = null,
        u = (e) => {
          let { children: t } = e,
            a = (0, s.s)(),
            u = (0, o.wLl)(),
            d = (0, o.uK4)().get(o.V0J),
            c = (0, n.useMemo)(() => {
              if (l) return l;
              let e = "on" === d.get(o.BUb.AllowAnalyticsLogs),
                t = (0, r.HQ)((e) => a.count(e, "evgen"), u, e),
                i = (0, r.hz)(),
                n = (0, r.y_)();
              return (l = new r.yx(t, i, n));
            }, [d, u, a]);
          return (0, i.jsx)(o.fCM.Provider, {
            value: c,
            children: (0, i.jsx)(o.tKr, { children: t }),
          });
        };
    },
    88117: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ContainerProvider: function () {
            return l;
          },
        });
      var i = a(95660),
        n = a(71859),
        r = a(20794);
      let s = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: n,
              traceparent: s,
              icookie: o,
              serverDetectedLocale: l,
              env: u,
            } = e,
            d = await (0, r.ZO0)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: n,
              traceparent: s,
              icookie: o,
              serverDetectedLocale: l,
              env: u,
            });
          return await d.get(r.SLO).loadDictionary(), d;
        },
        o = (e) => {
          let { children: t, containerLoader: a } = e,
            s = (0, n.use)(a);
          return (0, i.jsx)(r.Xld.Provider, { value: s, children: t });
        },
        l = (e) => {
          let {
              children: t,
              hostTld: a,
              env: n,
              forwardedForY: r,
              tracestate: l,
              traceparent: u,
              icookie: d,
              changeLanguageToken: c,
              serverDetectedLocale: m,
            } = e,
            h = s({
              hostTld: a,
              forwardedForY: r,
              changeLanguageToken: c,
              tracestate: l,
              traceparent: u,
              icookie: d,
              serverDetectedLocale: m,
              env: n,
            });
          return (0, i.jsx)(o, { containerLoader: h, children: t });
        };
    },
    58507: function (e, t, a) {
      "use strict";
      a.d(t, {
        HistoryProvider: function () {
          return l;
        },
      });
      var i = a(95660),
        n = a(97667),
        r = a(71859),
        s = a(20794);
      let o = null,
        l = (e) => {
          let { children: t } = e,
            a = (0, s.uK4)(),
            l = (0, n.useRouter)(),
            u = (0, n.usePathname)(),
            d = (0, n.useSearchParams)(),
            [c, m] = (0, r.useState)(!1),
            [h, g] = (0, r.useState)(!1),
            [y, p] = (0, r.useState)(null),
            v = (0, r.useMemo)(() => {
              if (o) return o;
              let e = a.get(s.ArX);
              return (o = new s.QQ$(e));
            }, [a]),
            f = (0, r.useCallback)(() => {
              v && (m(v.canBack), g(v.canForward), p(v.state));
            }, [v]),
            S = (0, r.useCallback)(
              (e) => {
                v && (v.replaceState(e), l.replace(e.href));
              },
              [v, l],
            ),
            E = (0, r.useCallback)(
              (e) => {
                v && (v.pushState(e), f());
              },
              [v, f],
            ),
            b = (0, r.useCallback)(() => {
              v && (v.back(), f(), l.back());
            }, [v, l, f]),
            _ = (0, r.useCallback)(() => {
              v && (v.forward(), f(), l.forward());
            }, [v, l, f]);
          return (
            (0, r.useEffect)(() => {
              var e;
              let t = [u, d.toString()].join("?");
              (!(null == v ? void 0 : v.state) ||
                (null == v
                  ? void 0
                  : null === (e = v.state) || void 0 === e
                    ? void 0
                    : e.isLocationNotEqual(t))) &&
                E({ href: t });
            }, [v, u, d, E]),
            (0, i.jsx)(s.TlZ.Provider, {
              value: {
                pushState: E,
                replaceState: S,
                canForward: h,
                canBack: c,
                back: b,
                forward: _,
                state: y,
              },
              children: t,
            })
          );
        };
    },
    14729: function (e, t, a) {
      "use strict";
      a.d(t, {
        LayoutProvider: function () {
          return p;
        },
        U: function () {
          return y;
        },
      });
      var i = a(95660),
        n = a(20894),
        r = a(44744),
        s = a(71859),
        o = a(36621);
      let l = {
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
      var u = a(23974),
        d = a(96235),
        c = a(73367),
        m = a.n(c);
      let h = (e) => {
        let { message: t, closeToast: a } = e;
        return (0, i.jsx)(d.Yj, {
          className: (0, u.W)(m().root, m().important),
          message: t,
          closeToast: a,
        });
      };
      var g = a(20794);
      let y = (e) => {
          {
            document.body.classList.remove("desktop"),
              e.setLayout((0, g.jPy)(window.innerWidth)),
              e.setIsLandscape(
                window.matchMedia("(orientation: landscape)").matches,
              );
            let t = window.screen.availHeight || window.innerHeight;
            e.setIsMobileLandscapeHeight(t < 450);
          }
        },
        p = (0, r.Pi)((e) => {
          let { children: t, userAgent: a } = e,
            { formatMessage: r } = (0, o.Z)(),
            { notify: u } = (0, g.d$W)(),
            { settings: d } = (0, g.oR4)(),
            c = (0, g.XfM)(),
            [m, p] = (0, g.zU3)(),
            [v, f] = (0, g.zU3)(),
            [S, E] = (0, g.zU3)(),
            [b, _] = (0, g.zU3)();
          d.setUserAgent(a), c && d.setPlatform(c), d.layout;
          let P = (0, s.useMemo)(
            () =>
              (0, n.Z)(() => {
                y(d);
              }, 100),
            [d],
          );
          (0, s.useEffect)(() => {
            (function (e) {
              if (!e.isBrowser || !e.browserName || !e.browserVersion)
                return !1;
              let t = l[e.browserName];
              if (!t) return !1;
              let a = parseFloat(e.browserVersion);
              return !Number.isNaN(a) && a < t;
            })(a) &&
              u(
                (0, i.jsx)(h, {
                  message: r({ id: "warning-messages.update-your-browser" }),
                }),
                { containerId: g.W$x.IMPORTANT, single: !0 },
              );
          }, [r, u, a]),
            (0, s.useLayoutEffect)(() => {
              y(d);
            }, [d]),
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", P),
                () => {
                  window.removeEventListener("resize", P);
                }
              ),
              [P],
            );
          let C = (0, s.useMemo)(
            () => ({
              contentRef: m,
              contentRootRef: v,
              contentScrollRef: S,
              sideBannerRef: b,
              setContentRef: p,
              setContentRootRef: f,
              setContentScrollRef: E,
              setSideBannerRef: _,
              userAgent: a,
            }),
            [m, v, S, b, p, f, E, _, a],
          );
          return (0, i.jsx)(g.VYl.Provider, { value: C, children: t });
        });
    },
    59922: function (e, t, a) {
      "use strict";
      a.d(t, {
        PrefetchDataProvider: function () {
          return l;
        },
      });
      var i = a(44744),
        n = a(71859),
        r = a(20794),
        s = a(14729);
      let o = async (e, t, a) => {
          let {
            user: i,
            experiments: n,
            pinsCollection: s,
            communication: o,
          } = e;
          if (
            (t ? await i.getAbout() : i.setUnauthorized(),
            i.puid && a.setPassportUid(i.puid),
            await n.getData(),
            i.isAuthorized)
          ) {
            let t = [i.getSettings(), e.library.getData(), s.getData()];
            n.checkExperiment(r.peG.WebNextCommunication, "on") &&
              t.push(o.getData()),
              await Promise.all(t);
          }
        },
        l = (0, i.Pi)((e) => {
          let { children: t } = e,
            a = (0, r.oR4)(),
            i = (0, r.uK4)(),
            l = i.get(r.xit),
            u = i.get(r.Hzc),
            d = l.hasAuthorizationCredentials;
          return (
            (0, s.U)(a.settings),
            a.user.account.loadingState === r.Gui.IDLE &&
              (0, n.use)(o(a, d, u)),
            t
          );
        });
    },
    18227: function (e, t, a) {
      "use strict";
      a.d(t, {
        ShortcutsProvider: function () {
          return u;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(69835),
        o = a(20794);
      let l = null,
        u = (0, n.Pi)((e) => {
          let { children: t } = e,
            a = (0, o.R$C)(),
            n = (0, o.uK4)().get(o.V0J),
            u = (0, s.K)(),
            { sonataState: d } = (0, o.oR4)(),
            c = (0, r.useMemo)(
              () => (l || (l = new o.OI$(new o.yre())), l),
              [],
            );
          return (
            (0, r.useEffect)(
              () => (
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.DECREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.decreaseVolume(0.05));
                      n.set(o.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.INCREASE_VOLUME,
                    async () => {
                      let e = await (null == a
                        ? void 0
                        : a.increaseVolume(0.05));
                      n.set(o.BUb.YmPlayerVolume, e, { expires: 365 });
                    },
                  ),
                null == c ||
                  c.addShortcutsListener(
                    o.Pwk.MAIN,
                    o.yxF.TOGGLE_MUTE,
                    async () => {
                      let e =
                        null == a ? void 0 : a.state.playerState.volume.value;
                      void 0 !== e && (await u(e));
                    },
                  ),
                () => {
                  null == c ||
                    c.removeShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.DECREASE_VOLUME,
                    ),
                    null == c ||
                      c.removeShortcutsListener(
                        o.Pwk.MAIN,
                        o.yxF.INCREASE_VOLUME,
                      ),
                    null == c ||
                      c.removeShortcutsListener(o.Pwk.MAIN, o.yxF.TOGGLE_MUTE);
                }
              ),
              [c, a, n, u],
            ),
            (0, r.useEffect)(() => {
              if (!d.isGenerativeContext)
                return (
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.MOVE_BACKWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveBackward.value) &&
                          (await a.moveBackward());
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.MOVE_FORWARD,
                      async () => {
                        var e;
                        (null == a
                          ? void 0
                          : null === (e = a.state.currentContext.value) ||
                              void 0 === e
                            ? void 0
                            : e.availableActions.moveForward.value) &&
                          (await (null == a ? void 0 : a.moveForward()));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.SLIDE_BACKWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideBackward(2)));
                      },
                    ),
                  null == c ||
                    c.addShortcutsListener(
                      o.Pwk.MAIN,
                      o.yxF.SLIDE_FORWARD,
                      async () => {
                        (null == a
                          ? void 0
                          : a.state.playerState.progress.value.duration) &&
                          (await (null == a ? void 0 : a.slideForward(2)));
                      },
                    ),
                  () => {
                    null == c ||
                      c.removeShortcutsListener(o.Pwk.MAIN, o.yxF.MOVE_FORWARD),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.MOVE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.SLIDE_BACKWARD,
                        ),
                      null == c ||
                        c.removeShortcutsListener(
                          o.Pwk.MAIN,
                          o.yxF.SLIDE_FORWARD,
                        );
                  }
                );
            }, [c, a, n, d.isGenerativeContext]),
            (0, i.jsx)(o.cww.Provider, { value: c, children: t })
          );
        });
    },
    32067: function (e, t, a) {
      "use strict";
      a.d(t, {
        SlamProvider: function () {
          return p;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(32945),
        o = a(29506),
        l = a(77900),
        u = a(61605),
        d = a(91809),
        c = a(20794);
      let m = (e) => {
          switch (e) {
            case s.n.HIGH_QUALITY:
              return l.n.LOSSLESS;
            case s.n.BALANCED:
              break;
            case s.n.EFFICIENT:
              return l.n.LQ;
          }
          return l.n.NQ;
        },
        h = null,
        g = null,
        y = null,
        p = (0, n.Pi)((e) => {
          var t;
          let { children: a } = e,
            { slam: n, user: s } = (0, c.oR4)(),
            l = (0, c.pL3)(),
            p = (0, c.uK4)(),
            v = p.get(c.ceh),
            f = p.get(c.P0V),
            S = (0, c.SqQ)(),
            E = (0, r.useCallback)(
              (e) => {
                n.setNetworkStatus(e);
              },
              [n],
            ),
            b = (0, r.useCallback)(
              (e) => {
                let { trackId: t, state: a } = e;
                n.setTrack(t, a);
              },
              [n],
            ),
            _ = (0, r.useCallback)(
              (e) => {
                n.setTracks(e);
              },
              [n],
            ),
            P = p.get(c.U5t);
          s.account.uid && l.init({ userConfig: { uid: s.account.uid } });
          let C = (0, r.useMemo)(
              () =>
                h ||
                (h = new d.aV({ variables: { maxConcurrentDownloads: 5 } })),
              [],
            ),
            N = (0, r.useMemo)(() => {
              var e;
              return l.userConfig && s.hasPlus
                ? g &&
                  s.account.uid ===
                    (null === (e = l.userConfig) || void 0 === e
                      ? void 0
                      : e.uid)
                  ? g
                  : (g = new d.OF({
                      downloader: C,
                      storeContainer: l.storeContainer,
                      userConfig: l.userConfig,
                      trackDownloadTaskParams: {
                        tracksResource: p.get(c.g5F),
                        getFileInfoResource: p.get(c.ES6),
                        secretKey: P.player.secretKey,
                        transport: u.J.ENCRAW,
                        variables: {
                          chunkSize: 1048576,
                          coverSize: 1e3,
                          codecs: o.Q,
                          get quality() {
                            return m(null == S ? void 0 : S.quality.value);
                          },
                        },
                        events: C.events,
                        logger: f,
                      },
                      availabilityResource: p.get(c.OYs),
                      tracksResource: p.get(c.g5F),
                      variables: { requestTrackChunkSize: 100 },
                      logger: f,
                    }))
                : null;
            }, [
              P.player.secretKey,
              p,
              C,
              f,
              null == S ? void 0 : S.quality.value,
              l.storeContainer,
              l.userConfig,
              s.account.uid,
              s.hasPlus,
            ]),
            k = (0, r.useMemo)(() => {
              var e;
              return l.userConfig && N && s.hasPlus
                ? y &&
                  s.account.uid ===
                    (null === (e = l.userConfig) || void 0 === e
                      ? void 0
                      : e.uid)
                  ? y
                  : (y = new d.sb({ tracks: N }))
                : null;
            }, [l.userConfig, N, s.account.uid, s.hasPlus]);
          return (
            (0, r.useEffect)(() => {
              var e, t, a;
              if (N)
                return (
                  l.setTracks(N),
                  null === (e = l.tracks) ||
                    void 0 === e ||
                    e.events.on(d._s.TRACK_CHANGED, b),
                  null === (t = l.tracks) ||
                    void 0 === t ||
                    t.events.on(d._s.STATE_CHANGED, _),
                  null === (a = l.tracks) ||
                    void 0 === a ||
                    a.initTracksState(),
                  () => {
                    var e, t;
                    null === (e = l.tracks) ||
                      void 0 === e ||
                      e.events.off(d._s.TRACK_CHANGED, b),
                      null === (t = l.tracks) ||
                        void 0 === t ||
                        t.events.off(d._s.STATE_CHANGED, _);
                  }
                );
            }, [b, _, l, l.tracks, N]),
            (0, r.useEffect)(() => {
              k && l.setPlaylists(k);
            }, [k, l]),
            (0, r.useEffect)(
              () => (
                l.network.subscribe(E),
                () => {
                  l.network.unsubscribe(E);
                }
              ),
              [
                E,
                b,
                l.network,
                null === (t = l.tracks) || void 0 === t ? void 0 : t.events,
                n,
              ],
            ),
            (0, r.useEffect)(() => {
              let e = v.get(c.BUb.OfflineMode);
              "boolean" == typeof e && n.setOfflineModeEnabled(e);
            }, [v, n]),
            (0, i.jsx)(c.POw.Provider, {
              value: N,
              children: (0, i.jsx)(c.aFd.Provider, { value: k, children: a }),
            })
          );
        });
    },
    75535: function (e, t, a) {
      "use strict";
      a.d(t, {
        SonataProvider: function () {
          return ij;
        },
      });
      var i,
        n,
        r,
        s,
        o,
        l,
        u,
        d,
        c,
        m,
        h,
        g,
        y,
        p,
        v,
        f,
        S,
        E,
        b,
        _,
        P,
        C,
        N,
        k,
        I,
        T,
        A,
        D,
        x,
        L,
        R,
        G,
        w,
        O,
        V,
        M,
        j,
        U,
        F,
        B,
        q,
        H,
        W,
        Y,
        z,
        K,
        J,
        Q = a(95660),
        X = a(44744),
        Z = a(71859),
        $ = a(29397),
        ee = a(60136),
        et = a(5275);
      class ea {
        isOnlyDeviceVolume() {
          let e = !0;
          try {
            let t = document.createElement("audio");
            (t.volume = 0.63), (e = Math.abs(t.volume - 0.63) > 0.01);
          } catch (t) {
            e = !0;
          }
          return e;
        }
        parseParams(e) {
          let t = e.split("?")[1];
          return t && t.length
            ? t.split("&").reduce(function (e, t) {
                let a = t.split("="),
                  i = a[0],
                  n = a[1];
                return i && n && (e[i] = n), e;
              }, {})
            : {};
        }
        updateUrl(e, t) {
          let a = this.parseParams(e),
            i = "";
          for (let e in (Object.assign(a, t), a))
            Object.prototype.hasOwnProperty.call(a, e) &&
              (i += "".concat(e, "=").concat(a[e]));
          return e + (i ? "?".concat(i) : "");
        }
        getCookie(e) {
          return (
            document.cookie.split(";").reduce((e, t) => {
              let [a, i] = t.trim().split("=");
              return a && i ? { ...e, [a]: i } : e;
            }, {})[e] || ""
          );
        }
      }
      var ei = a(34093);
      class en extends et.i {
        init() {
          return this.initEvents().then(() => {
            this.initHls();
          });
        }
        load(e) {
          if (
            (this.abortPromises("load"),
            this.breakStartup("load"),
            (this.ended = !1),
            (this.playing = !1),
            (this.notLoading = !0),
            (this.position = 0),
            (this.lastGoodTime = 0),
            (this.src = e),
            this.audio)
          ) {
            if (/\.m3u8$/.test(e)) {
              var t;
              (this.isHlsTrack = !0),
                this.destroyHls(),
                this.initHls(),
                null === (t = this.hls) ||
                  void 0 === t ||
                  t.loadSource(this.getHlsPlayingEntityUrl(e));
            } else (this.isHlsTrack = !1), (this.audio.src = e);
            this.audio.load();
          }
        }
        stop() {
          this.abortPromises("stop"),
            this.breakStartup("stop"),
            this.isHlsTrack && this.destroyHls(),
            this.load("");
        }
        startPlay(e) {
          return this.playing
            ? (this.breakStartup("startPlay"),
              (this.shouldPlay = !0),
              this.audio)
              ? this.audio.play().then(() => {
                  void 0 !== e &&
                    ((this.position = e), (this.audio.currentTime = e));
                })
              : (this.hls && this.hls.startLoad(),
                this.promiseStartPlaying().then(() => {
                  this.retry = 0;
                }),
                Promise.resolve())
            : Promise.resolve();
        }
        initHls() {
          this.hls ||
            ((this.hls = new ee.ZP({
              liveDurationInfinity: !0,
              maxBufferSize: 3e6,
            })),
            this.audio && this.hls.attachMedia(this.audio),
            this.initHlsEvents());
        }
        initHlsEvents() {
          this.hls &&
            (this.hls.on(ee.ZP.Events.ERROR, (e, t) => {
              if (t.fatal && this.hls)
                switch (t.type) {
                  case ee.ZP.ErrorTypes.NETWORK_ERROR:
                    this.retry++,
                      this.retry > 2
                        ? (this.destroyHls(),
                          (this.playing = !1),
                          this.emitter.emit(ei.r.EVENT_ERROR, t))
                        : this.hls.startLoad();
                    break;
                  case ee.ZP.ErrorTypes.MEDIA_ERROR:
                    this.hls.recoverMediaError();
                    break;
                  default:
                    this.destroyHls(),
                      (this.playing = !1),
                      this.emitter.emit(ei.r.EVENT_ERROR, t);
                }
            }),
            this.hls.on(ee.ZP.Events.DESTROYING, () => {
              this.hls = null;
            }));
        }
        getHlsPlayingEntityUrl(e) {
          let t = "";
          for (; t.length < 44; )
            t += (Math.random() + 1).toString(36).substring(3);
          t = t.slice(0, 44);
          let a = this.playerInitializationTime.toString().slice(0, 10),
            i = "".concat(t, "xWEBx0001x").concat(a);
          return this.browser.updateUrl(e, { vsid: i });
        }
        destroyHls() {
          (this.retry = 0),
            this.hls &&
              (this.hls.stopLoad(), this.hls.destroy(), (this.hls = null));
        }
        pause() {
          (this.shouldPause = !0),
            (this.playing = !1),
            this.isHlsTrack && this.hls && this.hls.stopLoad(),
            this.audio &&
              (this.audio.pause(), (this.position = this.audio.currentTime));
        }
        constructor(e) {
          super(e),
            (0, $._)(this, "isHlsTrack", !1),
            (0, $._)(this, "playerInitializationTime", void 0),
            (0, $._)(this, "hls", null),
            (0, $._)(this, "browser", new ea()),
            (this.playerInitializationTime = Date.now());
        }
      }
      var er = a(97285),
        es = a(90760);
      class eo extends es.S {
        constructor(...e) {
          super(...e),
            (0, $._)(this, "loader", new en(this.emitter)),
            (0, $._)(this, "core", new er.z(this.emitter, this.loader));
        }
      }
      var el = a(44539),
        eu = a(20062),
        ed = a(55028),
        ec = a(37460);
      function em(e, t) {
        let a = [];
        for (let i of e)
          for (let e of i)
            a.push({ type: ec.RX.Unloaded, meta: e, additional: t });
        return a;
      }
      var eh = a(5686);
      class eg extends ec.$n {
        get isCurrentContext() {
          return this.isCurrent;
        }
        set isCurrentContext(e) {
          this.isCurrent = e;
        }
        get availableActions() {
          return this.actions;
        }
        constructor(...e) {
          super(...e),
            (0, $._)(this, "isCurrent", !1),
            (0, $._)(this, "actions", {
              moveBackward: new eh.wi(!1),
              moveForward: new eh.wi(!0),
              repeat: new eh.wi(null),
              shuffle: new eh.wi(null),
              speed: new eh.wi(null),
            }),
            (0, $._)(this, "from", ""),
            (0, $._)(this, "utmLink", void 0);
        }
      }
      var ey = a(4106);
      class ep extends ey.y {
        constructor(e, { code: t = "E_CONTEXT", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "ContextException"),
            Object.setPrototypeOf(this, ep.prototype);
        }
      }
      var ev = a(48223);
      function ef(e, t) {
        return e.map((e) => ({
          type: ev.A.SmartPreview,
          meta: e,
          additional: t,
        }));
      }
      class eS extends eg {
        loadTrailer() {
          return this.albumsResource
            .getTrailer({ albumId: Number(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ep("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.albumsResource
            .getAlbumWithTracksIds({
              albumId: Number(this.contextData.meta.id),
              resumeStream: !0,
            })
            .then((e) => ((this.contextData.meta = e), e))
            .catch((e) => {
              throw new ep("Error in AlbumContext", {
                code: "E_ALBUM_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          return this.contextData.trailer
            ? this.loadTrailer().then((t) => ef(t.trailer.tracks, e))
            : this.contextData.meta.volumes
              ? Promise.resolve(em(this.contextData.meta.volumes, e))
              : this.loadContextMeta().then((t) =>
                  Promise.resolve(em(t.volumes, e)),
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
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "albumsResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            albumResourceConfig: a,
            httpClient: i,
            variables: n,
          } = e;
          (this.albumsResource = new ed.S(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = n);
        }
      }
      var eE = a(82839),
        eb = a(11876),
        e_ = a(14552);
      let eP = (e, t) => "".concat(e, ":").concat(t),
        eC = (e) => 3 === e;
      class eN extends eg {
        loadTrailer() {
          let { uid: e, kind: t } = (0, e_.b)(this.contextData.meta.id);
          return this.usersResource
            .getPlaylistTrailer({ userId: e, playlistKind: t })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ep("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          let e = this.contextData.meta.uuid,
            { uid: t, kind: a } = (0, e_.b)(this.contextData.meta.id);
          return (
            eC(a) && void 0 !== e
              ? this.playlistResource.getPlaylist({
                  playlistUuid: e,
                  resumeStream: !1,
                  richTracks: !1,
                })
              : this.usersResource.getPlaylistWithTracksIds({
                  userId: t,
                  playlistKind: a,
                  resumeStream: !1,
                })
          )
            .then((e) => {
              let t = { ...e, id: eP(e.uid, e.kind) };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ep("Error in PlaylistContext", {
                code: "E_PLAYLIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => ef(t.trailer.tracks, e));
          if (this.contextData.meta.tracks) {
            let t = [];
            for (let a of this.contextData.meta.tracks)
              t.push({ type: ec.RX.Unloaded, meta: a, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            for (let i of t.tracks)
              a.push({ type: ec.RX.Unloaded, meta: i, additional: e });
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
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "usersResource", void 0),
            (0, $._)(this, "playlistResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            usersResourceConfig: a,
            playlistResourceConfig: i,
            httpClient: n,
            variables: r,
          } = e;
          (this.usersResource = new eE.V(n, a)),
            (this.playlistResource = new eb.B(n, i)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = r);
        }
      }
      var ek = a(34924);
      class eI extends eg {
        loadTrailer() {
          return this.artistsResource
            .getTrailer({ artistId: String(this.contextData.meta.id) })
            .then(
              (e) => (
                (this.contextData.meta.trailerTracks = e.trailer.tracks), e
              ),
            )
            .catch((e) => {
              throw new ep("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_TRAILER",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        apply(e) {}
        loadContextMeta() {
          return this.artistsResource
            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
            .then((e) => {
              let t = { id: this.contextData.meta.id, trackIds: e };
              return (this.contextData.meta = t), t;
            })
            .catch((e) => {
              throw new ep("Error in ArtistContext", {
                code: "E_ARTIST_LOAD_CONTEXT_META",
                cause: e,
                data: { contextId: this.contextData.meta.id },
              });
            });
        }
        getContextEntitiesData() {
          let e = { from: this.from, utmLink: this.utmLink };
          if (this.contextData.trailer)
            return this.loadTrailer().then((t) => ef(t.trailer.tracks, e));
          if (this.contextData.meta.trackIds) {
            let t = [];
            for (let a of this.contextData.meta.trackIds)
              t.push({ type: ec.RX.Unloaded, meta: { id: a }, additional: e });
            return Promise.resolve(t);
          }
          return this.loadContextMeta().then((t) => {
            let a = [];
            for (let i of t.trackIds)
              a.push({ type: ec.RX.Unloaded, meta: { id: i }, additional: e });
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
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "artistsResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            artistsResourceConfig: a,
            httpClient: i,
            variables: n,
          } = e;
          (this.artistsResource = new ek.c(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = n);
        }
      }
      var eT = a(44042),
        eA = a(87836);
      function eD(e, t) {
        let a = [];
        for (let i of e)
          a.push({
            type: ev.A.VibeTrack,
            additional: t,
            meta: {
              ...i.track,
              liked: i.liked,
              trackParameters: i.trackParameters,
            },
            fromCurrentContext: !0,
          });
        return a;
      }
      function ex(e) {
        var t;
        if (!("realId" in e.data.meta))
          throw new ep("Error in VibeContext", {
            code: "E_WRONG_VIBE_CONTEXT",
          });
        if (e.data.type === ec.RX.Unloaded) return String(e.data.meta.id);
        let {
          data: {
            meta: { albums: a, realId: i },
          },
        } = e;
        return a && (null === (t = a[0]) || void 0 === t ? void 0 : t.id)
          ? "".concat(i, ":").concat(a[0].id)
          : "".concat(i);
      }
      function eL(e, t) {
        return e.slice(0, t + 2).map((e) => {
          let { entity: t } = e;
          return ex(t);
        });
      }
      function eR() {
        return new Date().toISOString();
      }
      let eG = (e) =>
        "object" == typeof e &&
        e &&
        "durationMs" in e &&
        "number" == typeof e.durationMs;
      class ew extends ey.y {
        constructor(e, { code: t = "E_VIBE_CONTEXT_FEEDBACK", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "VibeContextFeedbackException"),
            Object.setPrototypeOf(this, ew.prototype);
        }
      }
      var eO = a(60823);
      class eV extends eg {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeContextSet.tap("VibeContext", () => {
            this.isCurrentContext &&
              this.sendFeedback(
                a.state.playerState,
                a.state.queueState,
                eT.C.SKIP,
              );
          }),
            t.afterMediaStartPlaying.tapPromise("VibeContext", () =>
              this.isCurrentContext
                ? new Promise((e) => {
                    this.isVibeStarted
                      ? this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eT.C.TRACK_STARTED,
                        )
                      : (this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eT.C.RADIO_STARTED,
                        ).then(() => {
                          this.sendFeedback(
                            a.state.playerState,
                            a.state.queueState,
                            eT.C.TRACK_STARTED,
                          );
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
                      case ec.Zp.AUTO_MOVE_FORWARD:
                        this.onAutoMoveForward(a).then(t).catch(i);
                        break;
                      case ec.Zp.MOVE_FORWARD:
                        this.onMoveForward(a).then(t).catch(i);
                        break;
                      case ec.Zp.MOVE_BACKWARD:
                        this.sendFeedback(
                          a.state.playerState,
                          a.state.queueState,
                          eT.C.SKIP,
                        ),
                          t();
                        break;
                      case ec.Zp.SET_INDEX:
                      case ec.Zp.RESTART_CONTEXT:
                        t();
                    }
                  })
                : Promise.resolve(),
            );
        }
        loadContextMeta() {
          let {
            meta: { id: e },
            seeds: t,
          } = this.contextData;
          return this.rotorResource
            .sessionNew({ ...this.contextData, seeds: t, includeWaveModel: !0 })
            .then(
              (t) => (
                (this.contextData.meta.session = t), { id: e, session: t }
              ),
            )
            .catch((e) => {
              throw new ep("Error in VibeContext", {
                code: "E_VIBE_LOAD_CONTEXT_META",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        setSettings(e, t, a) {
          let {
              meta: { id: i },
            } = this.contextData,
            n = eL(a.entityList.value, a.index.value);
          return this.sendFeedback(t, a, eT.C.SKIP).then(() =>
            this.rotorResource
              .sessionNew({
                ...this.contextData,
                seeds: e,
                queue: n,
                includeWaveModel: !0,
              })
              .then(
                (e) => (
                  (this.contextData.meta.session = e),
                  (this.contextData.meta.id = (0, eO.$)(e.wave.seeds)),
                  { id: i, session: this.contextData.meta.session }
                ),
              )
              .catch((e) => {
                throw new ep("Error in VibeContext", {
                  code: "E_VIBE_LOAD_CONTEXT_META",
                  cause: e,
                  data: {
                    contextId: this.contextData.meta.id,
                    sessionId: this.contextData.meta.session
                      ? this.contextData.meta.session.radioSessionId
                      : "",
                  },
                });
              }),
          );
        }
        getContextEntitiesData() {
          let {
              meta: { session: e },
            } = this.contextData,
            t = { from: this.from, utmLink: this.utmLink };
          if (e) {
            let { sequence: a } = e;
            return Promise.resolve(eD(a, t));
          }
          return this.loadContextMeta()
            .then((e) => {
              let {
                session: { sequence: a },
              } = e;
              return eD(a, t);
            })
            .catch((e) => {
              throw new ep("Error in VibeContext", {
                code: "E_VIBE_GET_CONTEXT_ENTITIES_DATA",
                cause: e,
                data: {
                  contextId: this.contextData.meta.id,
                  sessionId: this.contextData.meta.session
                    ? this.contextData.meta.session.radioSessionId
                    : "",
                },
              });
            });
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        formatContextError(e, t, a, i) {
          return i
            ? new ep(e, {
                code: t,
                cause: a,
                data: {
                  contextId: i.meta.id,
                  sessionId: i.meta.session
                    ? i.meta.session.radioSessionId
                    : "",
                },
              })
            : new ep(e, { code: t, cause: a });
        }
        storeFeedbacksForSending(e) {
          if (e) {
            let t = Array.isArray(e) ? e : [e];
            this.feedbackForSending.push(...t);
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
          let t = this.feedbackForSending;
          return (this.feedbackForSending = []), t;
        }
        sendFeedbackOnMoveForward(e, t) {
          var a;
          let i;
          return (
            (
              null === (a = this.variables) || void 0 === a
                ? void 0
                : a.sendFeedbackToSessionTracks
            )
              ? ((i = Promise.resolve()),
                this.storeFeedbacksForSending(
                  this.generateFeedbackForTracks(e.state.queueState, t),
                ))
              : (i = this.sendFeedback(
                  e.state.playerState,
                  e.state.queueState,
                  t,
                )),
            i
          );
        }
        onAutoMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, eT.C.TRACK_FINISHED).then(
            () => {
              let { index: t, entityList: a } = e.state.queueState,
                i = t.value === a.value.length - 2,
                n = t.value === a.value.length - 1;
              if (!i && !n) return Promise.resolve();
              let r = this.getNextSessionTracks(e)
                .then((t) => {
                  e.injectLast(t),
                    (this.availableActions.moveForward.value = !0);
                })
                .catch((e) =>
                  this.logger.error(
                    this.formatContextError(
                      "Error in VibeContext",
                      "E_GET_SESSION_TRACKS",
                      e,
                      this.contextData,
                    ),
                  ),
                );
              return i ? Promise.resolve() : r;
            },
          );
        }
        onMoveForward(e) {
          return this.sendFeedbackOnMoveForward(e, eT.C.SKIP).then(() => {
            let { index: t, entityList: a } = e.state.queueState,
              i = [];
            for (let e = t.value + 2; e < a.value.length; e++) i.push(e);
            e.remove(i, !0);
            let n = this.getNextSessionTracks(e)
              .then((t) => e.injectLast(t))
              .catch((e) =>
                this.logger.error(
                  this.formatContextError(
                    "Error in VibeContext",
                    "E_GET_SESSION_TRACKS",
                    e,
                    this.contextData,
                  ),
                ),
              );
            return t.value === a.value.length - 1 ? n : Promise.resolve();
          });
        }
        getNextSessionTracks(e) {
          if (!this.contextData.meta.session)
            return Promise.reject(
              this.formatContextError(
                "Error in VibeContext",
                "E_NO_SESSION",
                void 0,
              ),
            );
          let {
              meta: { session: t },
              aliceExperiments: a,
              djData: i,
              useIchwill: n,
            } = this.contextData,
            r = { from: this.from, utmLink: this.utmLink },
            s = eL(
              e.state.queueState.entityList.value,
              e.state.queueState.index.value,
            ),
            o = this.getFeedbacksForSending();
          return this.rotorResource
            .sessionTracks({
              radioSessionId: t.radioSessionId,
              queue: s,
              aliceExperiments: a,
              djData: i,
              useIchwill: n,
              feedbacks: o || void 0,
            })
            .then((e) => {
              this.contextData.meta.sessionTracks = e;
              let { sequence: t } = e;
              return eD(t, r);
            })
            .catch(
              (e) => (this.storeFeedbacksForSending(o), Promise.reject(e)),
            );
        }
        generateFeedbackForTracks(e, t) {
          let a = this.generateFeedback(e, t),
            i = null;
          if (a) {
            var n;
            i = { batchId: a.batchId, from: a.event.from, event: a.event };
            let r =
              null === (n = e.currentEntity.value) || void 0 === n
                ? void 0
                : n.entity.data.meta;
            if (t === eT.C.TRACK_FINISHED && eG(r)) {
              let e = r.durationMs / 1e3,
                t = e % 1 == 0 ? e : Number(e.toFixed(3));
              i.event.trackLengthSeconds = t;
            }
          }
          return i;
        }
        generateFeedback(e, t) {
          let a = null;
          if (!this.contextData.meta.session) return a;
          let {
              meta: { session: i, sessionTracks: n },
            } = this.contextData,
            r = (function (e, t, a) {
              let i = e.currentEntity.value,
                n = { timestamp: eR(), type: t, from: a };
              if (i) {
                let { entity: e } = i;
                (n.trackId = ex(e)),
                  (n.totalPlayedSeconds = e.totalPlayedSeconds);
              }
              return n;
            })(e, t, this.from),
            { radioSessionId: s } = i,
            o = n ? n.batchId : i.batchId;
          switch (t) {
            case eT.C.RADIO_STARTED:
              a = {
                batchId: o,
                radioSessionId: s,
                event: { type: t, timestamp: r.timestamp, from: r.from },
              };
              break;
            case eT.C.TRACK_STARTED:
            case eT.C.TRACK_FINISHED:
            case eT.C.SKIP:
            case eT.C.LIKE:
            case eT.C.UNLIKE:
            case eT.C.DISLIKE:
            case eT.C.UNDISLIKE:
              a = { batchId: o, radioSessionId: s, event: r };
          }
          return a;
        }
        sendFeedback(e, t, a) {
          let i = this.generateFeedback(t, a);
          return this.contextData.meta.session && i
            ? this.rotorResource
                .sessionFeedback(i)
                .then(() => Promise.resolve())
                .catch((e) => {
                  this.logger.error(new ew("Feedback error", { cause: e }));
                })
            : (this.logger.error(new ew("Feedback error")), Promise.resolve());
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "rotorResource", void 0),
            (0, $._)(this, "logger", void 0),
            (0, $._)(this, "feedbackForSending", []),
            (0, $._)(this, "isVibeStarted", !1),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: a,
            httpClient: i,
            logger: n,
            variables: r,
          } = e;
          (this.rotorResource = new eA.U(i, a)),
            (this.logger = n),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.variables = r);
        }
      }
      var eM = a(27899);
      class ej extends eg {
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
              throw new ep("Error in PlaylistContext", {
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
              throw new ep("Error in VariousContext. Track not found", {
                code: "E_VARIOUS_LOAD_CONTEXT_META",
                data: { contextId: e },
              });
            })
            .catch((t) => {
              throw new ep("Error in VariousContext", {
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
                { meta: t.track, type: ev.A.SmartPreview, additional: e },
              ])
            : this.contextData.meta
              ? Promise.resolve([
                  {
                    meta: this.contextData.meta,
                    type: ev.A.Unknown,
                    additional: e,
                  },
                ])
              : this.loadContextMeta().then((t) => [
                  { meta: t, type: ev.A.Unknown, additional: e },
                ]);
        }
        get type() {
          return this.contextData.type;
        }
        get data() {
          return this.contextData;
        }
        constructor(e) {
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "tracksResource", void 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            tracksResourceConfig: a,
            httpClient: i,
            variables: n,
          } = e;
          (this.tracksResource = new eM.H(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.variables = n);
        }
      }
      class eU extends ey.y {
        constructor(e, { code: t = "E_CONTEXT_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "ContextFactoryException"),
            Object.setPrototypeOf(this, eU.prototype);
        }
      }
      ((i = k || (k = {})).StreamPause = "streamPause"),
        (i.StreamPlay = "streamPlay");
      let eF = (e) => [{ type: ev.A.Generative, meta: e }],
        eB = "E_GENERATIVE_RESTART_LIMIT";
      class eq extends eg {
        apply(e) {
          let { hooks: t, playback: a } = e;
          a.state.playerState.status.onChange((e) => {
            this.isCurrentContext &&
              e &&
              (e === ec.Xz.PLAYING
                ? (this.isPaused && this.sendFeedback(k.StreamPlay, a),
                  (this.isPaused = !1))
                : e === ec.Xz.PAUSED &&
                  (this.sendFeedback(k.StreamPause, a), (this.isPaused = !0)));
          }),
            t.afterError.tap("GenerativeContext", (e) => {
              (e && e instanceof ep && e.code === eB) ||
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
              throw new ep("Error GenerativeContext", {
                code: "E_GENERATIVE_LOAD_CONTEXT_META",
                cause: e,
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
                new ep("Error GenerativeContext", {
                  code: eB,
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
          super(),
            (0, $._)(this, "contextData", void 0),
            (0, $._)(this, "rotorResource", void 0),
            (0, $._)(this, "isPaused", !1),
            (0, $._)(this, "restartsCount", 0),
            (0, $._)(this, "variables", void 0);
          let {
            data: t,
            rotorResourceConfig: a,
            httpClient: i,
            variables: n,
          } = e;
          (this.rotorResource = new eA.U(i, a)),
            (this.contextData = t),
            (this.from = t.from),
            (this.utmLink = t.utmLink),
            (this.availableActions.repeat.value = !1),
            (this.availableActions.shuffle.value = !1),
            (this.availableActions.moveBackward.value = !1),
            (this.availableActions.moveForward.value = !1),
            (this.variables = n);
        }
      }
      class eH {
        create(e) {
          let t = null,
            { data: a } = e;
          try {
            var i, n, r, s, o, l, u, d, c, m, h, g;
            switch (a.type) {
              case eu.A.Album:
                t = new eS({
                  data: a,
                  albumResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (i = this.config.resourceTimeoutsConfig) ||
                      void 0 === i
                        ? void 0
                        : i.albumsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (n = this.config.contextVariables) || void 0 === n
                      ? void 0
                      : n[eu.A.Album],
                });
                break;
              case eu.A.Playlist:
                t = new eN({
                  data: a,
                  usersResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (r = this.config.resourceTimeoutsConfig) ||
                      void 0 === r
                        ? void 0
                        : r.usersResource,
                  },
                  playlistResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (s = this.config.resourceTimeoutsConfig) ||
                      void 0 === s
                        ? void 0
                        : s.playlistResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (o = this.config.contextVariables) || void 0 === o
                      ? void 0
                      : o[eu.A.Playlist],
                });
                break;
              case eu.A.Artist:
                t = new eI({
                  data: a,
                  artistsResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (l = this.config.resourceTimeoutsConfig) ||
                      void 0 === l
                        ? void 0
                        : l.artistsResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (u = this.config.contextVariables) || void 0 === u
                      ? void 0
                      : u[eu.A.Artist],
                });
                break;
              case eu.A.Vibe:
                t = new eV({
                  data: a,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (d = this.config.resourceTimeoutsConfig) ||
                      void 0 === d
                        ? void 0
                        : d.rotorResource,
                  },
                  httpClient: this.httpClient,
                  logger: this.logger,
                  variables:
                    null === (c = this.config.contextVariables) || void 0 === c
                      ? void 0
                      : c[eu.A.Vibe],
                });
                break;
              case eu.A.Various:
                t = new ej({
                  data: a,
                  tracksResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                    retryPolicyConfig: this.config.retryPolicyConfig,
                    timeouts:
                      null === (m = this.config.resourceTimeoutsConfig) ||
                      void 0 === m
                        ? void 0
                        : m.tracksResource,
                  },
                  httpClient: this.httpClient,
                  variables:
                    null === (h = this.config.contextVariables) || void 0 === h
                      ? void 0
                      : h[eu.A.Various],
                });
                break;
              case eu.A.Generative:
                t = new eq({
                  data: a,
                  httpClient: this.httpClient,
                  rotorResourceConfig: {
                    params: this.config.params,
                    gateway: this.config.gateway,
                  },
                  variables:
                    null === (g = this.config.contextVariables) || void 0 === g
                      ? void 0
                      : g[eu.A.Generative],
                });
            }
          } catch (e) {
            throw new eU("Error while creating context", {
              cause: e,
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new eU("Cannot create context with nonexistent type", {
            code: "E_NONEXISTENT_CONTEXT_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (0, $._)(this, "logger", void 0);
          let { config: t, httpClient: a, logger: i } = e;
          (this.config = t), (this.httpClient = a), (this.logger = i);
        }
      }
      var eW = a(62812);
      ((n = I || (I = {})).PLAYING = "playing"),
        (n.NOT_PLAYING = "not-playing");
      let eY = (e) =>
        !!(
          "object" == typeof e &&
          e &&
          "streamProgress" in e &&
          "object" == typeof e.streamProgress &&
          e.streamProgress &&
          "endPositionSec" in e.streamProgress &&
          "number" == typeof e.streamProgress.endPositionSec
        );
      class ez {
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
              n = [];
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
                  t && a && (n.push(a - t), (t = void 0), (a = void 0));
              for (let e of n) i += e;
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
          return eY(this.entityData.meta)
            ? this.entityData.meta.streamProgress.everFinished
            : null;
        }
        set everFinished(e) {
          eY(this.entityData.meta) &&
            null !== e &&
            (this.entityData.meta.streamProgress.everFinished = e);
        }
        constructor(e) {
          (0, $._)(this, "entityData", void 0),
            (0, $._)(this, "likeStore", void 0),
            (0, $._)(this, "entityPlayId", ""),
            (0, $._)(this, "entityAddTracksToPlayerTime", ""),
            (0, $._)(this, "entityTimeStagesOfPlayback", []),
            (0, $._)(this, "mediaElementErrorReloadCounter", 0),
            (0, $._)(this, "mediaSourceData", null),
            (0, $._)(this, "startPosition", null),
            (0, $._)(this, "lastSeekPosition", null),
            (this.entityData = e.data),
            (this.likeStore = e.likeStore);
        }
      }
      class eK extends ez {}
      class eJ extends ez {}
      class eQ extends ez {
        get isAvailable() {
          return !1;
        }
        get isDisliked() {
          return !1;
        }
      }
      class eX extends ey.y {
        constructor(e, { code: t = "E_ENTITY_FACTORY", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "EntityFactoryException"),
            Object.setPrototypeOf(this, eX.prototype);
        }
      }
      class eZ extends ez {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
      }
      class e$ extends ez {
        get isAvailable() {
          return !0;
        }
        get isDisliked() {
          return !1;
        }
      }
      class e0 {
        create(e) {
          let t = null,
            { data: a } = e;
          void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
          try {
            switch (a.type) {
              case ev.A.Music:
                t = new eK({ data: a, likeStore: this.likeStore });
                break;
              case ev.A.VibeTrack:
                t = new eJ({ data: a, likeStore: this.likeStore });
                break;
              case ev.A.Generative:
                t = new eZ({ data: a, likeStore: this.likeStore });
                break;
              case ev.A.SmartPreview:
                t = new e$({ data: a, likeStore: this.likeStore });
                break;
              case ev.A.Unknown:
                a.meta.type,
                  eW.V.MUSIC,
                  (t = new eK({
                    data: { ...a, type: ev.A.Music },
                    likeStore: this.likeStore,
                  }));
                break;
              case ec.RX.Unloaded:
                t = new eQ({ data: a, likeStore: this.likeStore });
            }
          } catch (e) {
            throw new eX("Error while creating entity", {
              cause: e,
              data: { type: a.type, meta: a.meta },
            });
          }
          if (null !== t) return t;
          throw new eX("Cannot create entities with nonexistent type", {
            code: "E_NONEXISTENT_ENTITY_TYPE",
            data: { type: a.type, meta: a.meta },
          });
        }
        constructor(e) {
          (0, $._)(this, "likeStore", void 0), (this.likeStore = e.likeStore);
        }
      }
      class e5 {
        canBePlayed(e) {
          let t =
              "playDisliked" in this.context.data &&
              void 0 !== this.context.data.playDisliked &&
              this.context.data.playDisliked,
            { entityChangeMethod: a, index: i } = e,
            n =
              !(
                t ||
                a === ec.Zp.SET_INDEX ||
                (a === ec.Zp.PLAY_CONTEXT && void 0 !== i)
              ) && this.entity.isDisliked,
            r = this.entity.isAvailable;
          return !n && r;
        }
        constructor(e, t) {
          (0, $._)(this, "context", void 0),
            (0, $._)(this, "entity", void 0),
            (this.context = e),
            (this.entity = t);
        }
      }
      class e1 {
        createContext(e) {
          return this.contextFactory.create(e);
        }
        createEntity(e) {
          return this.entityFactory.create(e);
        }
        createContextEntityPair(e, t) {
          return new e5(e, t);
        }
        constructor(e) {
          (0, $._)(this, "entityFactory", void 0),
            (0, $._)(this, "contextFactory", void 0),
            (this.entityFactory = new e0(e.entityFactoryParams)),
            (this.contextFactory = new eH(e.contextFactoryParams));
        }
      }
      function e4(e) {
        return (null == e ? void 0 : e.data.type) === ev.A.SmartPreview;
      }
      ((r = T || (T = {})).SUSPENDED = "suspended"),
        (r.RUNNING = "running"),
        (r.CLOSED = "closed");
      class e2 {
        getAverageFrequencies(e) {
          var t, a;
          let { low: i, high: n } = e,
            r = Math.floor(
              i / (this.audioContext.sampleRate / this.bufferLength),
            ),
            s = Math.floor(
              n / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let o = 0,
            l = 0;
          for (let e = r; e <= s; e++)
            (o +=
              (null !== (a = this.spectrum[e]) && void 0 !== a ? a : 0) / 256),
              l++;
          return o / l;
        }
        constructor(e, t, a) {
          var i, n;
          (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "analyserNode", void 0),
            (0, $._)(this, "bufferLength", 0),
            (0, $._)(this, "spectrum", new Uint8Array()),
            (this.audioContext = e),
            (this.analyserNode = e.createAnalyser()),
            (this.analyserNode.fftSize =
              null !== (i = null == a ? void 0 : a.fftSize) && void 0 !== i
                ? i
                : 1024), // FFT или же Быстрое Преобразование Фурье работает таким образом что чем меньше размер выборки, то тем меньшую ценность несёт результат преобразований.
            (this.analyserNode.smoothingTimeConstant = // Выборки не усредняют диапазон частот. При ванильной выборке в 32 результат можно считать случайным. По этому поднимаю до 1024. Наглядно можно увидеть тут https://audiomotion.dev/demo/fluid.html
              null !== (n = null == a ? void 0 : a.smoothingTimeConstant) &&
              void 0 !== n
                ? n
                : 0.4), // Ванильное сглаживание в 0.9 слишком затормаживает данные в результате. Они потом всё равно усредняются до 3 параметров (низкие средние и высокие частоты).
            t.connect(this.analyserNode), // Так что это значение можно снизить. Это даст более своевременную реакцию на изменения в спектрограмме трека.
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength));
        }
      }
      ((s = A || (A = {})).IDLE = "IDLE"),
        (s.ENABLED = "ENABLED"),
        (s.DISABLED = "DISABLED"),
        ((o = D || (D = {})).HIGHSHELF = "highshelf"),
        (o.PEAKING = "peaking"),
        (o.LOWSHELF = "lowshelf");
      class e6 {
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
            let { key: i, value: n } = t;
            return this.createBand(this.getBiquadFilterType(a, e.length), i, n);
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
          return 0 === e ? D.LOWSHELF : e === t - 1 ? D.HIGHSHELF : D.PEAKING;
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
        enable() {
          this.state !== A.ENABLED &&
            (this.sourceNode.disconnect(),
            (this.state = A.ENABLED),
            this.sourceNode.connect(this.preamp),
            this.lastBand &&
              this.lastBand.connect(this.audioContext.destination));
        }
        disable() {
          this.state !== A.DISABLED &&
            (this.sourceNode.disconnect(),
            this.lastBand && this.lastBand.disconnect(),
            (this.state = A.DISABLED),
            this.sourceNode.connect(this.audioContext.destination));
        }
        applyPreset(e) {
          this.setPreamp(e.preamp),
            0 === this.bands.length
              ? (this.bands = this.connectBandsBetween(
                  this.createBandsByFrequencies(e.frequencies),
                ))
              : this.updateBands(this.bands, e.frequencies);
        }
        constructor(e, t, a) {
          (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "preamp", void 0),
            (0, $._)(this, "state", A.DISABLED),
            (0, $._)(this, "bands", []),
            (this.audioContext = e),
            (this.sourceNode = t),
            (this.preamp = this.audioContext.createGain()),
            (null == a ? void 0 : a.preset) && this.applyPreset(a.preset);
        }
      }
      ((l = x || (x = {})).IDLE = "IDLE"),
        (l.ENABLED = "ENABLED"),
        (l.DISABLED = "DISABLED");
      let e3 = 1e3 / 60;
      class e7 {
        updateGain() {
          if (this.state !== x.ENABLED) return;
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
          (this.state = x.ENABLED),
            this.intervalId ||
              (this.intervalId = setInterval(this.updateGain.bind(this), e3));
        }
        disable() {
          (this.state = x.DISABLED),
            this.intervalId &&
              (clearInterval(this.intervalId), (this.intervalId = null));
        }
        apply(e) {
          if (!e) {
            this.disable(), (this.gainNode.gain.value = 1);
            return;
          }
          this.gainNode.gain.value = 0;
          let { inStart: t, inStop: a, outStart: i, outStop: n } = e;
          (this.inStart = t),
            (this.inStop = a),
            (this.outStart = i),
            (this.outStop = n),
            this.enable();
        }
        constructor(e, t, a) {
          (0, $._)(this, "audioElement", void 0),
            (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "gainNode", void 0),
            (0, $._)(this, "state", x.IDLE),
            (0, $._)(this, "inStart", 0),
            (0, $._)(this, "inStop", 0),
            (0, $._)(this, "outStart", 0),
            (0, $._)(this, "outStop", 0),
            (0, $._)(this, "intervalId", null),
            (this.audioElement = e),
            (this.audioContext = t),
            (this.sourceNode = a),
            (this.gainNode = t.createGain()),
            this.sourceNode.connect(this.gainNode),
            this.gainNode.connect(this.audioContext.destination);
        }
      }
      class e9 {
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
            : e.state) === T.SUSPENDED &&
            (document.body.addEventListener("touchend", t, !0),
            document.body.addEventListener("click", t, !0),
            document.body.addEventListener("keydown", t, !0));
        }
        initializeContext(e) {
          if (((this.audioElement = e), this.isAudioContextRequired)) {
            if (
              ((this.audioContext = new AudioContext()),
              (this.sourceNode = this.audioContext.createMediaElementSource(
                this.audioElement,
              )),
              this.checkAndResumeAudioContext(),
              this.options.useAnalyser)
            ) {
              let e =
                "object" == typeof this.options.useAnalyser
                  ? this.options.useAnalyser
                  : void 0;
              this.analyser = new e2(this.audioContext, this.sourceNode, e);
            }
            if (this.options.useEqualizer) {
              let e =
                "object" == typeof this.options.useEqualizer
                  ? this.options.useEqualizer
                  : void 0;
              this.equalizer = new e6(this.audioContext, this.sourceNode, e);
            }
            this.options.useFade &&
              (this.fade = new e7(e, this.audioContext, this.sourceNode));
          }
        }
        apply(e) {
          let { hooks: t, playback: a } = e;
          this.audioElement || this.initializeContext(e.playback.source),
            a.state.playerState.event.onChange(() => {
              if (this.fade)
                switch (a.state.playerState.event.value) {
                  case ec.KX.PLAYING:
                    this.fade.enable();
                    break;
                  case ec.KX.PAUSED:
                  case ec.KX.STOP:
                    this.fade.disable();
                }
            }),
            t.beforeMediaStartPlaying.tapPromise("WebAudioPlugin", () => {
              var e, t;
              let i;
              let { currentEntity: n } = a.state.queueState,
                r = null === (e = n.value) || void 0 === e ? void 0 : e.entity;
              return (
                e4(r) &&
                  (i =
                    null === (t = r.data.meta.smartPreviewParams) ||
                    void 0 === t
                      ? void 0
                      : t.fade),
                (null == r ? void 0 : r.data.type) === ev.A.Music &&
                  (i = r.data.meta.fade),
                this.fade && this.fade.apply(i),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, $._)(this, "options", void 0),
            (0, $._)(this, "audioElement", void 0),
            (0, $._)(this, "audioContext", void 0),
            (0, $._)(this, "sourceNode", void 0),
            (0, $._)(this, "analyser", void 0),
            (0, $._)(this, "equalizer", void 0),
            (0, $._)(this, "fade", void 0),
            (this.options = e);
        }
      }
      class e8 {
        send(e) {
          new Promise((t) => {
            let a = { [e.name]: { ...e.data } };
            this.yaMetrika.count(a, "player-metrics"), t();
          });
        }
        constructor(e) {
          (0, $._)(this, "yaMetrika", void 0), (this.yaMetrika = e);
        }
      }
      var te = a(82370);
      let tt = null;
      function ta(e) {
        let t = e.state.queueState.index.value,
          a = e.state.queueState.order.value,
          i = e.state.currentContext.value,
          n = void 0 !== a[t - 1];
        i && (i.availableActions.moveBackward.value = n),
          null !== tt && (tt(), (tt = null)),
          0 !== t ||
            (0, te.Q)(i) ||
            (tt = e.state.playerState.progress.onChange((e) => {
              i &&
                (i.availableActions.moveBackward.value =
                  !!e && e.position > ec.lz);
            }));
      }
      var ti = a(1430);
      let tn = [eW.V.AUDIOBOOK, eW.V.FAIRY_TALE, eW.V.PODCAST, eW.V.COMMENT];
      function tr(e) {
        let { value: t } = e.state.currentContext,
          { value: a } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== a) {
          let { meta: i } = a.entity.data;
          (0, ti.x)(t) ||
          (0, te.Q)(t) ||
          ("type" in i && i.type && tn.includes(i.type))
            ? ((t.availableActions.repeat.value = !1),
              (t.availableActions.shuffle.value = !1),
              e.state.queueState.repeat.value !== ec.zq.NONE &&
                e.setRepeatMode(ec.zq.NONE),
              e.state.queueState.shuffle.value && e.toggleShuffle())
            : ((t.availableActions.repeat.value = !0),
              (t.availableActions.shuffle.value = !0));
        }
      }
      var ts = a(43236);
      let to = (e) => {
        let t =
          "albums" in e &&
          e.albums &&
          e.albums.length > 0 &&
          e.albums[0] &&
          e.albums[0].type === ts.V.PODCAST;
        return !!(("type" in e && e.type && tn.includes(e.type)) || t);
      };
      function tl(e) {
        let { value: t } = e.state.currentContext,
          { value: a } = e.state.queueState.currentEntity;
        if (void 0 !== t && void 0 !== a) {
          let { meta: e } = a.entity.data,
            i = to(e);
          t.availableActions.speed.value = !!i;
        }
      }
      class tu {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterContextSet.tap("AvailableActionsPlugin", () => {
            tr(a), tl(a);
          }),
            t.beforeMediaStartPlaying.tap("AvailableActionsPlugin", () => {
              tr(a), tl(a);
            }),
            a.state.queueState.entityList.onChange(() => {
              ta(a);
            }),
            a.state.queueState.index.onChange(() => {
              ta(a);
            });
        }
      }
      class td {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterContextSet.tap("ApplyContextPlugin", () => {
            let e = a.state.currentContext.value;
            e && e instanceof ec.$n && e.apply({ hooks: t, playback: a });
          });
        }
      }
      class tc {
        apply(e) {
          let { playback: t, hooks: a } = e;
          t.state.playerState.event.onChange(() => {
            let { currentEntity: e } = t.state.queueState;
            if (e.value)
              switch (t.state.playerState.event.value) {
                case ec.KX.PAUSED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(ec.KX.PAUSED),
                  });
                  break;
                case ec.KX.STALLED:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(ec.KX.STALLED),
                  });
                  break;
                case ec.KX.PLAYING:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.PLAYING,
                    reason: "event-".concat(ec.KX.PLAYING),
                  });
                  break;
                case ec.KX.MEDIA_ELEMENT_ERROR:
                  e.value.entity.saveTimeStageOfPlayback({
                    stage: I.NOT_PLAYING,
                    reason: "event-".concat(ec.KX.MEDIA_ELEMENT_ERROR),
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
      var tm = a(20894);
      ((u = L || (L = {})).PREPARE = "prepare"), (u.PLAY = "play");
      var th = a(86e3),
        tg = a(3754);
      class ty extends th.c {
        async sendPlays(e) {
          var t;
          let a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers;
          return (
            await this.httpClient.post("plays", {
              prefixUrl: a,
              searchParams: (0, tg.f)({ clientNow: e.clientNow }),
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              json: { plays: e.plays },
              retry: this.getRetryPolicyConfig(),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.sendPlays,
            })
          ).json();
        }
        constructor(e, t) {
          super(e, t),
            (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      class tp extends ey.y {
        constructor(e, { code: t = "E_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "MediaProviderException"),
            Object.setPrototypeOf(this, tp.prototype);
        }
      }
      class tv extends tp {
        constructor(
          e,
          { code: t = "E_DOWNLOADINFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "DownloadInfoMediaProviderException"),
            Object.setPrototypeOf(this, tv.prototype);
        }
      }
      function tf(e) {
        return (null == e ? void 0 : e.data.type) === eu.A.Playlist;
      }
      ((d = R || (R = {})).START = "start"),
        (d.END = "end"),
        (d.PLAYING = "playing");
      var tS = a(17202);
      function tE() {
        return new Date().toISOString();
      }
      let tb = (e) => {
        if (e.mediaSourceData && "urls" in e.mediaSourceData.data) {
          let t = e.mediaSourceData.data.urls[0];
          if (t && t.startsWith("blob:")) return !0;
        }
        return !1;
      };
      function t_(e) {
        var t, a, i, n, r, s;
        let o;
        let {
            contextEntityPair: l,
            totalPlayedSeconds: u,
            endPositionSeconds: d,
            type: c,
            maxPlayerStage: m,
            seek: h,
            pause: g,
            startTimestamp: y,
          } = e,
          { entity: p, context: v } = l,
          f = String(p.data.meta.id),
          S = (function (e) {
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
          })(p),
          E =
            (null === (t = p.data.additional) || void 0 === t
              ? void 0
              : t.from) || v.from,
          b =
            (null === (a = p.data.additional) || void 0 === a
              ? void 0
              : a.utmLink) ||
            v.utmLink ||
            {},
          _ = 0;
        e4(p)
          ? "smartPreviewParams" in p.data.meta &&
            (null === (i = p.data.meta.smartPreviewParams) || void 0 === i
              ? void 0
              : i.durationMs) &&
            (_ =
              (null === (n = p.data.meta.smartPreviewParams) || void 0 === n
                ? void 0
                : n.durationMs) / 1e3)
          : "durationMs" in p.data.meta &&
            p.data.meta.durationMs &&
            (_ = p.data.meta.durationMs / 1e3);
        let P = u,
          C = d;
        0.5 > Math.abs(_ - u) && (P = _),
          0.5 > Math.abs(_ - d) && (C = _),
          (o = (0, te.Q)(v)
            ? {
                generativeStreamId: String(
                  null === (r = v.data.meta.stream) || void 0 === r
                    ? void 0
                    : r.id,
                ),
              }
            : { trackId: f });
        let N = {
          playId: p.playId,
          timestamp: tE(),
          totalPlayedSeconds: P,
          endPositionSeconds: C,
          trackLengthSeconds: _,
          albumId: S,
          from: E,
          context: v.data.type,
          contextItem: String(v.data.meta.id),
          addTracksToPlayerTime: p.addTracksToPlayerTime,
          audioAuto: "none",
          audioOutputName: "Динамик",
          audioOutputType: "Speaker",
          maxPlayerStage: m,
          seek: h,
          pause: g,
          startTimestamp: y,
          fromCache: tb(p),
          ...b,
          ...o,
        };
        if (
          ((0, ti.x)(v) &&
            v.data.meta.session &&
            ((N.radioSessionId = v.data.meta.session.radioSessionId),
            (N.context = "radio"),
            (N.contextItem = v.data.meta.session.wave.stationId)),
          tf(v) &&
            ((N.playlistId = ""
              .concat(v.data.meta.uid, ":")
              .concat(v.data.meta.kind)),
            (N.contextItem = ""
              .concat(v.data.meta.uid, ":")
              .concat(v.data.meta.kind))),
          (null == v ? void 0 : v.data.type) === eu.A.Various)
        ) {
          let e = [tS.Z.Search, tS.Z.Other],
            t =
              null !== (s = v.data.overrideContextType) && void 0 !== s
                ? s
                : tS.Z.Other;
          (N.context = t), e.includes(t) && (N.contextItem = null);
        }
        return e4(p) && (N.smartPreview = !0), { type: c, data: N };
      }
      var tP = a(7721),
        tC = a(35147),
        tN = a(41354),
        tk = a(60173),
        tI = a(92604);
      let tT = (e) =>
          !!(
            e &&
            "object" == typeof e &&
            "playId" in e &&
            "totalPlayedSeconds" in e
          ),
        tA = (e) => {
          let t = [
            e.find((e) => 0 === e.totalPlayedSeconds),
            (0, tN.Z)(e, "totalPlayedSeconds"),
          ];
          return (0, tk.Z)(t.filter(tT), "totalPlayedSeconds");
        },
        tD = (e) => {
          let t = (0, tC.Z)((0, tP.Z)(e, "playId"), tA);
          return (0, tI.Z)(t);
        };
      class tx extends ey.y {
        constructor(e, { code: t = "E_PLAYS", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "PlaysException"),
            Object.setPrototypeOf(this, tx.prototype);
        }
      }
      var tL = a(71407);
      let tR = "playsHeartBeats";
      class tG extends ey.y {
        constructor(e, { code: t = "E_PLAYS_IDB_STORE", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "PlaysStoreException"),
            Object.setPrototypeOf(this, tG.prototype);
        }
      }
      let tw = () => "".concat("music_plays", "_").concat("1.0.0");
      class tO {
        setErrorHandler(e) {
          this.errorHandler = e;
        }
        storePlaysData(e) {
          return this.executeTransaction((t) => t.put(tR, e)).catch((e) => {
            this.logError("Saving Play Error", e);
          });
        }
        getStoredPlaysData() {
          return this.executeTransaction((e) => e.getAll(tR), {
            defaultValue: [],
          }).catch((e) => (this.logError("Error getting Plays", e), []));
        }
        deleteAllByPlayId(e) {
          let t = (e) =>
            e ? e.delete().then(() => e.continue().then(t)) : Promise.resolve();
          return this.getCursorByPlayId(e)
            .then(t)
            .catch((e) => {
              this.logError("Error deleting Plays", e);
            });
        }
        onBlockedHandler() {
          this.closeConnection(this.idb).then(() => {
            this.idb = this.openIdb({
              onBlocked: () => {
                this.closeConnection(this.idb).then(() => {
                  this.setIsNotAvailable();
                });
              },
              onTerminated: () => this.onTerminatedHandler(),
            });
          });
        }
        onTerminatedHandler() {
          this.idb = this.openIdb({
            onBlocked: () => this.onBlockedHandler(),
            onTerminated: () => this.setIsNotAvailable(),
          });
        }
        openIdb(e) {
          return new tL.r(this.idbName).openDB(1, {
            onBlocked: (t, a, i) => {
              var n;
              this.logError("Connection has been blocked"),
                null == e ||
                  null === (n = e.onBlocked) ||
                  void 0 === n ||
                  n.call(e, t, a, i);
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
              let t = e.createObjectStore(tR, {
                keyPath: "id",
                autoIncrement: !0,
              });
              t.createIndex("playId", "playId", { unique: !1 }),
                t.createIndex("trackId", "trackId", { unique: !1 });
            },
          });
        }
        setIsNotAvailable() {
          this.idbIsNotAvailable = !0;
        }
        closeConnection(e) {
          return e
            .then((e) => {
              e && e.close();
            })
            .catch((e) => {
              this.logError("Error while try to close connection", e);
            });
        }
        getCursorByPlayId(e) {
          return this.executeTransaction(
            (t) =>
              t
                .transaction([tR], "readwrite")
                .objectStore(tR)
                .index("playId")
                .openCursor(e),
            { defaultValue: null },
          );
        }
        executeTransaction(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.idbIsNotAvailable
            ? Promise.resolve(null == t ? void 0 : t.defaultValue)
            : this.idb.then((a) =>
                a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue),
              );
        }
        logError(e, t) {
          var a;
          let i = "[IndexedDB]["
            .concat(this.idbName, ".")
            .concat(tR, "]: ")
            .concat(e);
          null === (a = this.errorHandler) ||
            void 0 === a ||
            a.call(this, new tG(i, { data: { originalError: String(t) } }));
        }
        constructor() {
          (0, $._)(this, "idb", void 0),
            (0, $._)(this, "errorHandler", void 0),
            (0, $._)(this, "idbIsNotAvailable", !1),
            (0, $._)(this, "idbName", tw()),
            (this.idb = this.openIdb({
              onBlocked: () => this.onBlockedHandler(),
              onTerminated: () => this.onTerminatedHandler(),
            }).catch((e) => {
              this.logError("Open storage error", e);
            }));
        }
      }
      class tV {
        apply(e) {
          let { hooks: t, playback: a } = e;
          this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
            this.playsStore.setErrorHandler((e) => {
              t.afterError.promise(e);
            }),
            a.state.playerState.event.onChange(() => {
              let { currentEntity: e } = a.state.queueState;
              if (e.value)
                switch (a.state.playerState.event.value) {
                  case ec.KX.PLAYING:
                    this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { maxPlayerStage: L.PLAY },
                    });
                    break;
                  case ec.KX.PAUSED:
                    Math.abs(
                      a.state.playerState.progress.value.position -
                        a.state.playerState.progress.value.duration,
                    ) > 0.2 &&
                      this.changeDynamicPlaysDataByPlayId({
                        playId: e.value.entity.playId,
                        dynamicData: { pause: !0 },
                      });
                    break;
                  case ec.KX.SET_PROGRESS:
                    this.changeDynamicPlaysDataByPlayId({
                      playId: e.value.entity.playId,
                      dynamicData: { seek: !0 },
                    });
                }
            });
          let i = (0, tm.Z)(
            () => {
              let e = a.state.queueState.currentEntity.value;
              if (!e || (0, te.Q)(e.context)) return;
              let t = this.getDynamicPlaysDataByPlayId(e.entity.playId),
                i = t_({
                  type: R.PLAYING,
                  contextEntityPair: e,
                  totalPlayedSeconds: e.entity.totalPlayedSeconds,
                  endPositionSeconds:
                    a.state.playerState.progress.value.position,
                  ...t,
                });
              this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
                i.data.totalPlayedSeconds > 0 &&
                this.playsStore.storePlaysData(i.data);
            },
            this.storePlaysProgressIntervalMs,
            { trailing: !1 },
          );
          this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
            a.state.playerState.progress.onChange(i),
            t.beforeEntityPlayingProcessStart.tapPromise(
              "PlaysPlugin",
              () => (this.sendStartEntityPlay(a, t), Promise.resolve()),
            ),
            t.beforeMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let { currentEntity: e } = a.state.queueState;
              if (e.value) {
                var t;
                let a = e.value.entity.playId;
                (null === (t = this.dynamicPlaysDataByEntitiesPlayId.get(a)) ||
                void 0 === t
                  ? void 0
                  : t.startTimestamp) ||
                  this.changeDynamicPlaysDataByPlayId({
                    playId: a,
                    dynamicData: { startTimestamp: Date.now() },
                  });
              }
              return Promise.resolve();
            }),
            t.afterMediaEndPlaying.tapPromise("PlaysPlugin", () => {
              let {
                index: { value: e },
                entityList: { value: i },
                repeat: { value: n },
              } = a.state.queueState;
              return (
                (e === i.length - 1 || n === ec.zq.ONE) &&
                  this.sendEndEntityPlay(a, t),
                Promise.resolve()
              );
            }),
            t.afterError.tapPromise(
              "PlaysPlugin",
              (e) => (
                (e instanceof tv || e instanceof ec.YR) &&
                  this.sendEndEntityPlay(a, t),
                Promise.resolve()
              ),
            ),
            t.beforeContextSet.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(a, t),
            ),
            t.beforeEntityChange.tapPromise("PlaysPlugin", () =>
              this.sendCurrentEntityEndPlay(a, t),
            );
        }
        isLocalStoredPlaysDataEnabled(e) {
          var t;
          return !!(
            e &&
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData)
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
          return tD(
            e.filter((e) => {
              let { playId: t } = e;
              return !this.sendingInProgressForPlayId.has(t);
            }),
          );
        }
        sendPlaysData(e) {
          let t = Promise.resolve([]);
          return (
            this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
              (t = this.playsStore.getStoredPlaysData()),
            t
              .then((t) => {
                let a = this.filterPlaysForSending([...t, e]);
                return (this.setPlaysDataForSending(a), a.length)
                  ? this.playsResource
                      .sendPlays({ clientNow: tE(), plays: a })
                      .then((t) => {
                        this.isLocalStoredPlaysDataEnabled(this.playsStore) &&
                          ("ok" === t
                            ? Promise.all(
                                a.map((e) => {
                                  let { playId: t } = e;
                                  this.isLocalStoredPlaysDataEnabled(
                                    this.playsStore,
                                  ) && this.playsStore.deleteAllByPlayId(t);
                                }),
                              )
                            : this.playsStore.storePlaysData(e));
                      })
                      .finally(() => {
                        this.clearSendedPlaysData(a);
                      })
                  : Promise.resolve();
              })
              .catch((t) => {
                if (this.isLocalStoredPlaysDataEnabled(this.playsStore))
                  this.playsStore.storePlaysData(e).then(() => {
                    throw t;
                  });
                else throw t;
              })
          );
        }
        sendCurrentEntityEndPlay(e, t) {
          if (
            e.state.queueState.currentEntity.value &&
            e.state.currentContext.value
          ) {
            if ((0, ti.x)(e.state.currentContext.value))
              return this.sendEndEntityPlay(e, t);
            this.sendEndEntityPlay(e, t);
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
              let { seek: i, pause: n } = this.getDynamicPlaysDataByPlayId(
                  a.entity.playId,
                ),
                r = t_({
                  type: R.START,
                  contextEntityPair: a,
                  totalPlayedSeconds: 0,
                  endPositionSeconds: 0,
                  seek: i,
                  pause: n,
                });
              if (
                (r.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new tx("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: r.data.totalPlayedSeconds,
                        trackLengthSeconds: r.data.trackLengthSeconds,
                        playId: r.data.playId,
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
                return this.sendPlaysData(r.data).catch((e) => {
                  let i = "",
                    n = "";
                  a &&
                    ((i = a.context.data.meta.id), (n = a.entity.data.meta.id)),
                    t.afterError.promise(
                      new tx("Error while sending plays", {
                        cause: e,
                        data: { contextId: i, entityId: n },
                      }),
                    );
                });
            }
          } catch (n) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new tx("Error while sending plays", {
                  cause: n,
                  data: { contextId: e, entityId: i },
                }),
              );
          }
          return Promise.resolve();
        }
        sendEndEntityPlay(e, t) {
          let a = e.state.queueState.currentEntity.value;
          try {
            if (a && !(0, te.Q)(a.context)) {
              let i;
              let { entity: n } = a,
                r = a.entity.totalPlayedSeconds,
                s = this.getDynamicPlaysDataByPlayId(n.playId);
              return (
                (i =
                  0 === r
                    ? t_({
                        type: R.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: 0.1,
                        endPositionSeconds: 0.1,
                        ...s,
                      })
                    : t_({
                        type: R.END,
                        contextEntityPair: a,
                        totalPlayedSeconds: r,
                        endPositionSeconds:
                          e.state.playerState.progress.value.position,
                        ...s,
                      })),
                this.dynamicPlaysDataByEntitiesPlayId.delete(i.data.playId),
                i.data.totalPlayedSeconds > 2e3 &&
                  t.afterError.promise(
                    new tx("Plays error. Too big play time", {
                      code: "E_PLAYS_BIG_PLAY_TIME",
                      data: {
                        timeStagesOfPlayback: a.entity.timeStagesOfPlayback,
                        contextId: a.context.data.meta.id,
                        entityId: a.entity.data.meta.id,
                        totalPlayedSeconds: i.data.totalPlayedSeconds,
                        trackLengthSeconds: i.data.trackLengthSeconds,
                        playId: i.data.playId,
                        isOnStart: !1,
                        entityListLength:
                          e.state.queueState.entityList.value.length,
                        index: e.state.queueState.index.value,
                        repeat: e.state.queueState.repeat.value,
                      },
                    }),
                  ),
                this.sendPlaysData(i.data).catch((e) => {
                  let i = "",
                    n = "";
                  a &&
                    ((i = a.context.data.meta.id), (n = a.entity.data.meta.id)),
                    t.afterError.promise(
                      new tx("Error while sending plays", {
                        cause: e,
                        data: { contextId: i, entityId: n },
                      }),
                    );
                })
              );
            }
          } catch (n) {
            let e = "",
              i = "";
            a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
              t.afterError.promise(
                new tx("Error while sending plays", {
                  cause: n,
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
          let n = this.dynamicPlaysDataByEntitiesPlayId.get(e);
          return {
            seek:
              null !== (t = null == n ? void 0 : n.seek) && void 0 !== t && t,
            pause:
              null !== (a = null == n ? void 0 : n.pause) && void 0 !== a && a,
            maxPlayerStage:
              null !== (i = null == n ? void 0 : n.maxPlayerStage) &&
              void 0 !== i
                ? i
                : L.PREPARE,
            startTimestamp: null == n ? void 0 : n.startTimestamp,
          };
        }
        constructor(e) {
          var t;
          (0, $._)(this, "dynamicPlaysDataByEntitiesPlayId", new Map()),
            (0, $._)(this, "sendingInProgressForPlayId", new Map()),
            (0, $._)(this, "playsResource", void 0),
            (0, $._)(this, "playsStore", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "storePlaysProgressIntervalMs", void 0);
          let { httpClient: a, playsResourceConfig: i, variables: n } = e;
          (this.playsResource = new ty(a, i)),
            (this.variables = n || {}),
            (this.storePlaysProgressIntervalMs =
              e.storePlaysProgressIntervalMs || 1e4),
            (null === (t = this.variables) || void 0 === t
              ? void 0
              : t.enableLocalStoredPlaysData) && (this.playsStore = new tO());
        }
      }
      function tM(e) {
        return (null == e ? void 0 : e.data.type) === ev.A.Generative;
      }
      ((c = G || (G = {})).PLAY = "play"),
        (c.PAUSE = "pause"),
        (c.NEXT = "nexttrack"),
        (c.PREV = "previoustrack"),
        (c.SEEK = "seekto"),
        (c.STOP = "stop");
      let tj = [40, 50, 80, 100, 200, 300, 400],
        tU = [G.PLAY, G.PAUSE, G.STOP, G.SEEK],
        tF = (e) => e.startsWith("blob:");
      class tB {
        isSupported() {
          return (
            "mediaSession" in window.navigator && "MediaMetadata" in window
          );
        }
        handleMediaActionEvents(e, t) {
          let { action: a } = e;
          switch (a) {
            case G.PLAY:
              t.resume();
              break;
            case G.PAUSE:
            case G.STOP:
              t.pause();
              break;
            case G.NEXT:
              t.moveForward();
              break;
            case G.PREV:
              t.moveBackward();
              break;
            case G.SEEK: {
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
            var n, r;
            let t =
              null === (r = e.albums) || void 0 === r
                ? void 0
                : null === (n = r[0]) || void 0 === n
                  ? void 0
                  : n.title;
            i.album = t;
          }
          return (
            "coverUri" in e && (t = e.coverUri),
            "imageUrl" in e && (t = e.imageUrl),
            t &&
              (a = tj.map((e) => {
                let a = "".concat(e, "x").concat(e);
                "Safari" === this.browserName &&
                  (a = "".concat(2 * e, "x").concat(2 * e));
                let i = "";
                return (
                  "string" == typeof t &&
                    (i = tF(t) ? t : "https://".concat(t.replace("%%", a))),
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
            if (e.state.playerState.event.value === ec.KX.UPDATING_PROGRESS) {
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
              var i, n;
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
                          G.PREV,
                          i ? (t) => this.handleMediaActionEvents(t, e) : null,
                        );
                      })),
                (a =
                  null === (n = e.state.currentContext.value) || void 0 === n
                    ? void 0
                    : n.availableActions.moveForward.onChange(() => {
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
                          G.NEXT,
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
          (0, $._)(this, "browserName", void 0),
            (0, $._)(this, "browserVersion", void 0),
            (this.browserName = e),
            (this.browserVersion = t);
        }
      }
      class tq {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.afterError.tapPromise("LoggerPlugin", (e) => {
            let t;
            let i = a.state.queueState.currentEntity.value
              ? a.state.queueState.currentEntity.value.entity.mediaSourceData
              : null;
            return (
              ((t =
                e instanceof ey.y
                  ? e
                  : new ey.y("Error in Sonata player", {
                      code: "E_SONATA",
                      cause: e,
                    })).name = "[Sonata] ".concat(t.name)),
              this.logger.error(t, {
                ...t.data,
                ...(i || {}),
                code: t.code,
                cause: t.cause,
                stack: t.stack,
              }),
              Promise.resolve()
            );
          });
        }
        constructor(e) {
          (0, $._)(this, "logger", void 0);
          let { logger: t } = e;
          this.logger = t;
        }
      }
      (w || (w = {})).QUALITY_CHANGE = "QUALITY_CHANGE";
      class tH {
        apply(e) {
          let { playback: t, hooks: a } = e;
          this.quality.onChange(() => {
            t.state.playerState.status.value !== ec.Xz.IDLE &&
              t.reloadEntity(w.QUALITY_CHANGE).catch((e) => {
                a.afterError.promise(e);
              });
          });
        }
        constructor(e) {
          (0, $._)(this, "quality", void 0), (this.quality = e);
        }
      }
      var tW = a(47932);
      let tY = (e) =>
        "object" == typeof e &&
        e &&
        "rememberPosition" in e &&
        "boolean" == typeof e.rememberPosition;
      class tz {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeEntityChange.tapPromise("ContinuePlayingPlugin", () => {
            let { position: e, duration: t } = this.getTimingsFromPlayback(a);
            return new Promise((i) => {
              e !== t && this.checkBeforeProgressSync(a), i();
            });
          }),
            a.state.playerState.status.onChange((e) => {
              (e === ec.Xz.PAUSED || e === ec.Xz.STOPPED) &&
                (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                e === ec.Xz.PLAYING &&
                  this.shouldSendProgressSync(a) &&
                  this.setTimeout(a);
            }),
            a.state.playerState.event.onChange(() => {
              if (a.state.playerState.event.value === ec.KX.SET_PROGRESS) {
                let e = a.state.queueState.currentEntity.value,
                  t = a.state.playerState.progress.value.position;
                if (!e) return;
                let { entity: i } = e;
                tY(i.data.meta) &&
                  i.data.meta.rememberPosition &&
                  (i.lastSeekPosition = t);
              }
            }),
            a.state.queueState.currentEntity.onChange(() => {
              let e = a.state.queueState.currentEntity.value;
              if (!e) return;
              let { entity: t } = e;
              if (
                tY(t.data.meta) &&
                t.data.meta.rememberPosition &&
                eY(t.data.meta)
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
            n =
              null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
                ? void 0
                : t.entity.data.meta.id;
          Number.isFinite(i) &&
            Number.isFinite(a) &&
            i &&
            a &&
            n &&
            (this.sendProgressSync({ duration: i, position: a, trackId: n }),
            e.state.playerState.status.value === ec.Xz.PLAYING &&
              this.setTimeout(e));
        }
        sendProgressSync(e) {
          let t = new Date().toISOString(),
            { duration: a, position: i, trackId: n } = e;
          this.streamsResource.progressSync({
            lastSyncTimestamp: t,
            trackStreams: [
              {
                trackId: n,
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
          (0, $._)(this, "streamsResource", void 0),
            (0, $._)(this, "timeoutId", 0);
          let { httpClient: t, streamsResourceConfig: a } = e;
          this.streamsResource = new tW.h(t, a);
        }
      }
      ((m = O || (O = {})).WANT_PLAY_TRACK = "WANT_PLAY_TRACK"),
        (m.TRACK_IS_PLAYING = "TRACK_IS_PLAYING"),
        (m.TRACK_ERROR_PREPARE = "TRACK_ERROR_PREPARE"),
        (m.TRACK_ERROR_INITIAL_BUFFERING = "TRACK_ERROR_INITIAL_BUFFERING"),
        (m.TRACK_ERROR_PLAYING = "TRACK_ERROR_PLAYING"),
        ((h = V || (V = {})).E_GET_MEDIA_SRC = "E_GET_MEDIA_SRC"),
        (h.E_CREATE_SIGN = "E_CREATE_SIGN"),
        (h.E_UNSUITABLE_ENTITY_TYPE = "E_UNSUITABLE_ENTITY_TYPE"),
        ((g = M || (M = {})).NETWORK = "NETWORK"),
        (g.OTHER = "OTHER");
      var tK = a(23874);
      ((y = j || (j = {})).BAD_RESPONSE_4XX = "BAD_RESPONSE_4XX"),
        (y.BAD_RESPONSE_5XX = "BAD_RESPONSE_5XX"),
        (y.OTHER = "OTHER");
      class tJ {
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
        wantPlayTrack(e) {
          let t = String(e.data.meta.id),
            a = Math.trunc(performance.now()),
            i = {
              name: O.WANT_PLAY_TRACK,
              data: {
                trackId: t,
                uuid: e.playId,
                expectedQuality: this.mediaConfigController.quality.value,
              },
            };
          return (
            this.wantPlayTracksEvents.set(e.playId, { time: a, event: i }),
            this.logEvent({ event: i, eventName: null == i ? void 0 : i.name }),
            this.transport.send(i),
            i
          );
        }
        trackError(e, t) {
          let a = null;
          return (
            e instanceof tp
              ? (a = {
                  name: O.TRACK_ERROR_PREPARE,
                  data: {
                    trackId: String(t.data.meta.id),
                    uuid: t.playId,
                    type: e.code === V.E_GET_MEDIA_SRC ? M.NETWORK : M.OTHER,
                    subType: (function (e) {
                      let t = j.OTHER;
                      if (e.cause instanceof tK.du)
                        switch (String(e.cause.statusCode)[0]) {
                          case "4":
                            t = j.BAD_RESPONSE_4XX;
                            break;
                          case "5":
                            t = j.BAD_RESPONSE_5XX;
                        }
                      return t;
                    })(e),
                    name: e.name,
                    code: e.code,
                  },
                })
              : e instanceof ec.YR && e.code === ec.Bq.PLAY
                ? (a = {
                    name: O.TRACK_ERROR_INITIAL_BUFFERING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
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
                : e instanceof ec.YR &&
                  e.code === ec.Bq.MEDIA_ELEMENT_ERROR &&
                  (a = {
                    name: O.TRACK_ERROR_PLAYING,
                    data: {
                      trackId: String(t.data.meta.id),
                      uuid: t.playId,
                      name: e.name,
                      code: e.code,
                      ...(e.cause instanceof MediaError
                        ? {
                            causeCode: e.cause.code,
                            causeMessage: e.cause.message,
                          }
                        : { causeCode: -1, causeMessage: "Unknown cause" }),
                    },
                  }),
            this.wantPlayTracksEvents.has(t.playId) &&
              this.wantPlayTracksEvents.delete(t.playId),
            a && this.transport.send(a),
            this.logEvent({ event: a, eventName: null == a ? void 0 : a.name }),
            a
          );
        }
        trackIsPlaying(e) {
          var t;
          let a, i;
          let n = String(e.data.meta.id),
            r =
              this.wantPlayTracksEvents.has(e.playId) &&
              (null === (t = this.wantPlayTracksEvents.get(e.playId)) ||
              void 0 === t
                ? void 0
                : t.time),
            s = null;
          return (
            !e.mediaSourceData ||
              "error" in e.mediaSourceData.data ||
              ((a = e.mediaSourceData.data.codec),
              (i = e.mediaSourceData.data.bitrate)),
            "number" == typeof r &&
              ((s = {
                name: O.TRACK_IS_PLAYING,
                data: {
                  trackId: n,
                  time: Math.trunc(performance.now() - r),
                  uuid: e.playId,
                  codec: a,
                  bitrate: i,
                },
              }),
              this.wantPlayTracksEvents.delete(e.playId)),
            s && this.transport.send(s),
            this.logEvent({ event: s, eventName: null == s ? void 0 : s.name }),
            s
          );
        }
        constructor(e) {
          var t;
          (0, $._)(this, "mediaConfigController", void 0),
            (0, $._)(this, "wantPlayTracksEvents", new Map()),
            (0, $._)(this, "enableDebugMode", void 0),
            (0, $._)(this, "transport", void 0),
            (this.enableDebugMode =
              null === (t = e.variables) || void 0 === t
                ? void 0
                : t.enableDebugMode),
            (this.mediaConfigController = e.mediaConfigController),
            (this.transport = e.transport);
        }
      }
      class tQ {
        apply(e) {
          let { hooks: t, playback: a } = e;
          t.beforeEntityPlayingProcessStart.tapPromise("MetricsPlugin", () => {
            let e = a.state.queueState.currentEntity.value;
            return (
              e && this.metricsEventsStore.wantPlayTrack(e.entity),
              Promise.resolve()
            );
          }),
            t.afterError.tapPromise("PlaysPlugin", (e) => {
              let t = a.state.queueState.currentEntity.value;
              return (
                t && this.metricsEventsStore.trackError(e, t.entity),
                Promise.resolve()
              );
            }),
            t.afterMediaStartPlaying.tapPromise("PlaysPlugin", () => {
              let e = a.state.queueState.currentEntity.value;
              return (
                e && this.metricsEventsStore.trackIsPlaying(e.entity),
                Promise.resolve()
              );
            });
        }
        constructor(e) {
          (0, $._)(this, "metricsEventsStore", void 0),
            (this.metricsEventsStore = new tJ(e));
        }
      }
      var tX = a(77900),
        tZ = a(32945);
      function t$(e, t, a) {
        return (
          !(e instanceof eQ) &&
          !!e.isAvailable &&
          (null === e.mediaSourceData ||
            (!("error" in e.mediaSourceData.data) &&
              (performance.now() - e.mediaSourceData.loadingTime > t ||
                (function (e) {
                  switch (e) {
                    case tX.n.LOSSLESS:
                    case tX.n.HQ:
                      return tZ.n.HIGH_QUALITY;
                    case tX.n.NQ:
                      return tZ.n.BALANCED;
                    case tX.n.LQ:
                  }
                  return tZ.n.EFFICIENT;
                })(e.mediaSourceData.data.quality) !== a.quality.value)))
        );
      }
      class t0 {
        apply(e) {
          let { hooks: t, playback: a } = e;
          this.variables.isMediaSourcePreloadEnabled &&
            t.beforeEntityPlayingProcessStart.tapPromise(
              "MediaSourcePreloadPlugin",
              () => {
                if (
                  !this.variables.isMediaSourcePreloadEnabled ||
                  (0, ti.x)(a.state.currentContext.value)
                )
                  return Promise.resolve();
                let {
                  queueState: { index: e, order: i, entityList: n },
                  currentContext: r,
                } = a.state;
                return (0, te.Q)(r.value)
                  ? Promise.resolve()
                  : t$(
                        a.getEntityByIndex({ index: e.value }).entity,
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
                          order: n,
                          mediaSourceTtlMs: r,
                          mediaConfigController: s,
                        } = e;
                        return n
                          .slice(i - t > 0 ? i - t : 0, i + t + 1)
                          .map((e) => a[e])
                          .some((e) => t$(e.entity, r, s));
                      })({
                        contextEntityPairs: n.value,
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
              queueState: { index: t, order: a, entityList: i },
            } = e.state,
            { contextEntityPairsToLoad: n } = (0, ec.U9)({
              index: t.value,
              contextEntityPairs: i.value,
              windowSize: this.config.loadWindowSize,
              needToLoadPredicate: (e) =>
                t$(
                  e.entity,
                  this.config.mediaSourceTtlMs,
                  this.mediaConfigController,
                ),
              order: a.value,
            }),
            r = n.map((e) => e.entity);
          return this.mediaProvider.getMediaSourceBatch({ entities: r });
        }
        constructor({
          mediaProvider: e,
          config: t,
          mediaConfigController: a,
          variables: i,
        }) {
          (0, $._)(this, "variables", void 0),
            (0, $._)(this, "mediaProvider", void 0),
            (0, $._)(this, "config", void 0),
            (0, $._)(this, "mediaConfigController", void 0),
            (this.variables =
              null != i ? i : { isMediaSourcePreloadEnabled: !1 }),
            (this.mediaProvider = e),
            (this.mediaConfigController = a),
            (this.config = t);
        }
      }
      class t5 {
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
            ((0, $._)(this, "onTrailerPaused", void 0),
            (0, $._)(this, "onTrailerPlaying", void 0),
            (0, $._)(this, "trailerPlayback", void 0),
            (this.onTrailerPaused = e),
            (this.onTrailerPlaying = t),
            a.createPlayback(i.id, {
              factory: i.factory,
              entityProvider: i.entityProvider,
              mediaProvider: i.mediaProvider,
              playbackConfig: i.playbackConfig,
              audioCore: i.audioCore,
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
      var t1 = a(71833);
      (U || (U = {})).START = "start";
      class t4 {
        apply(e) {
          let { playback: t } = e;
          this.channel &&
            ((this.channel.onmessage = (e) => {
              let { type: a, id: i } = e.data;
              t.state.playerState.status.value === ec.Xz.PLAYING &&
                a === U.START &&
                i !== this.activeStreamId &&
                t.pause();
            }),
            t.state.playerState.status.onChange((e) => {
              if (e === ec.Xz.PLAYING) {
                var t;
                null === (t = this.channel) ||
                  void 0 === t ||
                  t.postMessage({ type: U.START, id: this.activeStreamId });
              }
            }));
        }
        constructor({ variables: e }) {
          (0, $._)(this, "channel", void 0),
            (0, $._)(this, "activeStreamId", void 0),
            (this.activeStreamId = (0, t1.Z)()),
            e.enableSingleTabPlayback &&
              (this.channel = new BroadcastChannel("ya_music_playback"));
        }
      }
      var t2 = { WEB: "WEB", ANDROID: "ANDROID", IOS: "IOS", WEB_TV: "WEB_TV" },
        t6 = { NONE: "NONE", ONE: "ONE", ALL: "ALL" },
        t3 = { DO_NOT_INTERCEPT_BY_DEFAULT: "DO_NOT_INTERCEPT_BY_DEFAULT" },
        t7 = { TRACK: "TRACK", INFINITE: "INFINITE" },
        t9 = "BASED_ON_ENTITY_BY_DEFAULT",
        t8 = {
          ARTIST: "ARTIST",
          PLAYLIST: "PLAYLIST",
          ALBUM: "ALBUM",
          RADIO: "RADIO",
          VARIOUS: "VARIOUS",
          GENERATIVE: "GENERATIVE",
        },
        ae = function (e, t) {
          return {
            device_id: e,
            version: Math.floor(0x7fffffffffffffff * Math.random()) + 0,
            timestamp_ms: void 0 !== t ? t : Date.now(),
          };
        };
      function at(e) {
        var t = ae(e, 0);
        return {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: t8.VARIOUS,
              playable_list: [],
              options: { repeat_mode: t6.NONE },
              shuffle_optional: null,
              entity_context: t9,
              version: t,
              from_optional: "",
              initial_entity_optional: null,
              adding_options_optional: null,
              queue: null,
            },
            status: {
              duration_ms: 0,
              paused: !0,
              playback_speed: 1,
              progress_ms: 0,
              version: t,
            },
            player_queue_inject_optional: null,
          },
          devices: [],
          active_device_id_optional: "",
        };
      }
      function aa(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function ai(e, t, a) {
        return (
          void 0 === e && (e = !1),
          !!e || !t || !a || Number(t.timestamp_ms) < Number(a.timestamp_ms)
        );
      }
      function an(e) {
        var t = e.active_device_id_optional;
        return e.devices.find(function (e) {
          return e.info.device_id === t;
        });
      }
      var ar = (function () {
        function e(e) {
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "prevState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diff", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "options", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "diffCalculators", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "lastRemoteDeviceChangingStateTS", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            }),
            (this.options = e),
            (this.state = at(e.device.device_id)),
            (this.prevState = at(e.device.device_id)),
            (this.diffCalculators = {
              active_device_id_optional:
                this.calculateActiveDeviceDiff.bind(this),
              devices: this.calculateDevicesDiff.bind(this),
              player_state: {
                player_queue: {
                  entity_id: this.calculateEntityIdDiff.bind(this),
                  entity_type: this.calculateEntityTypeDiff.bind(this),
                  entity_context: function () {},
                  current_playable_index:
                    this.calculateCurrentPlayableIndexDiff.bind(this),
                  playable_list: this.calculatePlayableListDiff.bind(this),
                  options: { repeat_mode: this.calculateRepeatDiff.bind(this) },
                  version: function () {},
                  shuffle_optional: this.calculcateShuffleDiff.bind(this),
                  from_optional: function () {},
                  initial_entity_optional: function () {},
                  adding_options_optional: function () {},
                  queue: function () {},
                },
                status: {
                  progress_ms: this.calculateProgressMsDiff.bind(this),
                  duration_ms: function () {},
                  paused: this.calculatePausedDiff.bind(this),
                  playback_speed: this.calculateSpeedDiff.bind(this),
                  version: function () {},
                },
                player_queue_inject_optional: function () {},
              },
            });
        }
        return (
          Object.defineProperty(e.prototype, "setState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  (this.state[t] = e[t]);
            },
          }),
          Object.defineProperty(e.prototype, "getState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return aa(this.state);
            },
          }),
          Object.defineProperty(e.prototype, "clearPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.options.device.device_id;
              this.prevState = at(e);
            },
          }),
          Object.defineProperty(e.prototype, "getPrevState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              return aa(this.prevState);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = [this.diffCalculators];
              this.diff = {};
              var a = this.options,
                i = a.diffWhileActiveOnly,
                n = a.device.device_id;
              try {
                var r = e.newState.active_device_id_optional,
                  s = e.skipDeviceActivityCheck,
                  o = e.isSetNewState,
                  l = this.state.active_device_id_optional;
                if (!(void 0 !== s && s) && i && n !== l && n !== r)
                  this.calculateActiveDeviceDiff(e);
                else {
                  for (; t.length > 0; )
                    for (
                      var u = t.pop(), d = 0, c = Object.keys(u);
                      d < c.length;
                      d++
                    ) {
                      var m = u[c[d]];
                      "function" == typeof m ? m(e) : t.push(m);
                    }
                  var h = Object.keys(this.diff);
                  if ((void 0 === o || o) && h.length) {
                    var g = aa(this.state);
                    h.forEach(function (t) {
                      g[t] = e.newState[t];
                    }),
                      (this.prevState = aa(this.state)),
                      (this.state = g);
                  }
                }
                return aa(this.diff);
              } catch (e) {
                return {};
              }
            },
          }),
          Object.defineProperty(e.prototype, "calculateActiveDeviceDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.active_device_id_optional;
              t !== this.state.active_device_id_optional &&
                (this.diff.active_device_id_optional = t);
            },
          }),
          Object.defineProperty(e.prototype, "calculateDevicesDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState,
                a = e.skipVersionCompare,
                i = (function (e, t, a) {
                  if (!t || !a || t.info.device_id !== a.info.device_id)
                    return { isVolumeChanged: !1, isNewVersion: !1 };
                  var i = t.volume_info,
                    n = a.volume_info,
                    r = ai(e, i.version, n.version);
                  return {
                    isVolumeChanged:
                      i.volume !== n.volume &&
                      Math.abs(n.volume - i.volume) > 0.02,
                    isNewVersion: r,
                  };
                })(void 0 !== a && a, an(this.state), an(t)),
                n = i.isVolumeChanged,
                r = i.isNewVersion,
                s = (function (e, t) {
                  var a = { isAnyoneConnectionChanged: !1 };
                  if (e.length < t.length)
                    for (
                      var i = function (t) {
                          e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          }) ||
                            (a = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        n = 0;
                      n < t.length;
                      n++
                    ) {
                      var r = t[n];
                      i(r);
                    }
                  else if (e.length === t.length)
                    for (
                      var s = function (t) {
                          var i = e.find(function (e) {
                            return e.info.device_id === t.info.device_id;
                          });
                          i &&
                            i.is_offline !== t.is_offline &&
                            (a = {
                              isAnyoneConnectionChanged: !0,
                              changedConnectionStatusDevice: t,
                            });
                        },
                        o = 0;
                      o < t.length;
                      o++
                    ) {
                      var r = t[o];
                      s(r);
                    }
                  return a;
                })(this.state.devices, t.devices).isAnyoneConnectionChanged;
              ((n && r) || s) && (this.diff.devices = t.devices);
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityIdDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = e.skipVersionCompare,
                i = t.entity_id,
                n = t.version,
                r = this.state.player_state.player_queue,
                s = r.entity_id;
              ai(void 0 !== a && a, r.version, n) &&
                s !== i &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_id = i));
            },
          }),
          Object.defineProperty(e.prototype, "calculateEntityTypeDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.entity_type,
                i = t.version,
                n = e.skipVersionCompare,
                r = this.state.player_state.player_queue,
                s = r.entity_type;
              ai(void 0 !== n && n, r.version, i) &&
                s !== a &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.entity_type = a));
            },
          }),
          Object.defineProperty(
            e.prototype,
            "calculateCurrentPlayableIndexDiff",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = e.newState.player_state.player_queue,
                  a = e.skipVersionCompare,
                  i = t.entity_id,
                  n = t.current_playable_index,
                  r = t.version,
                  s = this.state.player_state.player_queue,
                  o = s.entity_id,
                  l = s.current_playable_index;
                ai(void 0 !== a && a, s.version, r) &&
                  o === i &&
                  l !== n &&
                  (this.initPlayerState(!0, !1),
                  this.diff.player_state &&
                    this.diff.player_state.player_queue &&
                    (this.diff.player_state.player_queue.current_playable_index =
                      n));
              },
            },
          ),
          Object.defineProperty(e.prototype, "calculatePlayableListDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = e.skipVersionCompare,
                i = t.playable_list,
                n = t.version,
                r = this.state.player_state.player_queue,
                s = r.playable_list,
                o = ai(void 0 !== a && a, r.version, n),
                l = (function (e, t) {
                  var a, i;
                  if (e.length > 0 && t.length > 0 && e.length === t.length) {
                    for (var n = e.length, r = 0; r < n; r++)
                      if (
                        t[r] &&
                        (null === (a = e[r]) || void 0 === a
                          ? void 0
                          : a.playable_id) !==
                          (null === (i = t[r]) || void 0 === i
                            ? void 0
                            : i.playable_id)
                      )
                        return !1;
                    return !0;
                  }
                  return !1;
                })(s, i);
              o &&
                !l &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.playable_list = i));
            },
          }),
          Object.defineProperty(e.prototype, "calculcateShuffleDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.shuffle_optional,
                i = t.version,
                n = e.skipVersionCompare,
                r = this.state.player_state.player_queue,
                s = r.shuffle_optional,
                o = ai(void 0 !== n && n, r.version, i),
                l = (function (e, t) {
                  if (!e && !t) return !0;
                  if (
                    e &&
                    t &&
                    e.playable_indices.length === t.playable_indices.length
                  ) {
                    for (var a = !0, i = 0; i <= e.playable_indices.length; i++)
                      if (e.playable_indices[i] !== t.playable_indices[i]) {
                        a = !1;
                        break;
                      }
                    return a;
                  }
                  return !1;
                })(s, a);
              o &&
                !l &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (a
                    ? (this.diff.player_state.player_queue.shuffle_optional = a)
                    : (this.diff.player_state.player_queue.shuffle_optional = {
                        playable_indices: [],
                      })));
            },
          }),
          Object.defineProperty(e.prototype, "calculateRepeatDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.player_queue,
                a = t.options,
                i = t.version,
                n = e.skipVersionCompare,
                r = a.repeat_mode,
                s = this.state.player_state.player_queue,
                o = s.options,
                l = s.version,
                u = o.repeat_mode;
              ai(void 0 !== n && n, l, i) &&
                u !== r &&
                (this.initPlayerState(!0, !1),
                this.diff.player_state &&
                  this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue.options = a));
            },
          }),
          Object.defineProperty(e.prototype, "calculateProgressMsDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t,
                a,
                i = e.newState.player_state.status,
                n = e.skipVersionCompare,
                r = i.progress_ms,
                s = i.version,
                o = this.state.player_state.status,
                l = o.progress_ms,
                u = ai(void 0 !== n && n, o.version, s),
                d =
                  (t = Number(r)) !== (a = Number(l)) &&
                  (a < 1500 || Math.abs(t - a) > 1e3);
              u &&
                d &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.progress_ms = r));
            },
          }),
          Object.defineProperty(e.prototype, "calculateSpeedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                a = t.playback_speed,
                i = t.version,
                n = e.skipVersionCompare,
                r = this.state.player_state.status,
                s = r.playback_speed;
              ai(void 0 !== n && n, r.version, i) &&
                s !== a &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.playback_speed = a));
            },
          }),
          Object.defineProperty(e.prototype, "calculatePausedDiff", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              var t = e.newState.player_state.status,
                a = e.skipVersionCompare,
                i = t.paused,
                n = t.version,
                r = this.state.player_state.status,
                s = r.paused;
              ai(void 0 !== a && a, r.version, n) &&
                s !== i &&
                (this.initPlayerState(!1, !0),
                this.diff.player_state &&
                  this.diff.player_state.status &&
                  (this.diff.player_state.status.paused = i));
            },
          }),
          Object.defineProperty(e.prototype, "initPlayerState", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e, t) {
              this.diff.player_state || (this.diff.player_state = {}),
                e &&
                  !this.diff.player_state.player_queue &&
                  (this.diff.player_state.player_queue = {}),
                t &&
                  !this.diff.player_state.status &&
                  (this.diff.player_state.status = {});
            },
          }),
          Object.defineProperty(
            e.prototype,
            "updateLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t,
                  a = e.player_state,
                  i = a.player_queue.version,
                  n = a.status.version,
                  r = e.devices,
                  s = e.active_device_id_optional,
                  o = this.options.device.device_id,
                  l = [i, n],
                  u = r.find(function (e) {
                    return e.info.device_id === s;
                  });
                void 0 !== u && l.push(u.volume_info.version);
                var d = l
                  .filter(function (e) {
                    return 0 !== Number(null == e ? void 0 : e.timestamp_ms);
                  })
                  .filter(function (e) {
                    return (
                      r.find(function (t) {
                        return (
                          t.info.device_id ===
                          (null == e ? void 0 : e.device_id)
                        );
                      }) && (null == e ? void 0 : e.device_id) !== o
                    );
                  });
                if (d.length > 0) {
                  var c = d.sort(function (e, t) {
                      return (
                        Number(null == t ? void 0 : t.timestamp_ms) -
                        Number(null == e ? void 0 : e.timestamp_ms)
                      );
                    })[0],
                    m = r.find(function (e) {
                      return (
                        e.info.device_id === (null == c ? void 0 : c.device_id)
                      );
                    });
                  this.lastRemoteDeviceChangingState &&
                    m &&
                    this.lastRemoteDeviceChangingState.info.device_id ===
                      m.info.device_id &&
                    !this.lastRemoteDeviceChangingState.is_offline &&
                    m.is_offline &&
                    (this.lastRemoteDeviceChangingState = aa(m)),
                    ((void 0 === this.lastRemoteDeviceChangingState && m) ||
                      (this.lastRemoteDeviceChangingState &&
                        m &&
                        this.lastRemoteDeviceChangingState.info.device_id !==
                          m.info.device_id) ||
                      (this.lastRemoteDeviceChangingState &&
                        m &&
                        this.lastRemoteDeviceChangingState.info.device_id ===
                          m.info.device_id &&
                        this.lastRemoteDeviceChangingState.is_offline &&
                        !m.is_offline &&
                        !this.diff.devices)) &&
                      c &&
                      ((this.lastRemoteDeviceChangingState = aa(m)),
                      (this.lastRemoteDeviceChangingStateTS = Number(
                        c.timestamp_ms,
                      )),
                      (t = {
                        device: aa(m),
                        timestampMs: Number(c.timestamp_ms),
                      }));
                }
                return t;
              },
            },
          ),
          Object.defineProperty(
            e.prototype,
            "getLastRemoteDeviceChangingState",
            {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                return {
                  device: this.lastRemoteDeviceChangingState,
                  timestampMs: this.lastRemoteDeviceChangingStateTS,
                };
              },
            },
          ),
          Object.defineProperty(e.prototype, "getOnlineRemoteDevices", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function () {
              var e = this.state,
                t = e.devices,
                a = e.active_device_id_optional;
              return t.filter(function (e) {
                var t = [t2.ANDROID, t2.IOS, t2.WEB].includes(e.info.type);
                return !e.is_offline && e.info.device_id !== a && t;
              });
            },
          }),
          e
        );
      })();
      ((p = F || (F = {})).PRODUCTION = "ynison.music.yandex.ru"),
        (p.QA = "qa.ynison.music.yandex.ru"),
        ((v = B || (B = {})).CONNECTING = "CONNECTING"),
        (v.CONNECTED = "CONNECTED"),
        (v.DISCONNECTED = "DISCONNECTED"),
        (v.WAITING_FOR_RECONNECT = "WAITING_FOR_RECONNECT"),
        (v.READY_TO_RECONNECT = "READY_TO_RECONNECT"),
        ((f = q || (q = {})).RECIEVE_MESSAGE = "RECIEVE_MESSAGE"),
        (f.REDIRECTOR_ERROR = "REDIRECTOR_ERROR"),
        (f.HUB_ERROR = "HUB_ERROR");
      var as = a(32827);
      ((S = H || (H = {})).ynisonBackoffMillis = "ynison-backoff-millis"),
        (S.ynisonErrorCode = "ynison-error-code"),
        (S.ynisonGoAwayForSeconds = "ynison-go-away-for-seconds");
      var ao = a(10073),
        al =
          ((E = function (e, t) {
            return (E =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function a() {
              this.constructor = e;
            }
            E(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((a.prototype = t.prototype), new a()));
          }),
        au = function () {
          return (au =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        ad = function (e, t) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (a[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, i = Object.getOwnPropertySymbols(e);
              n < i.length;
              n++
            )
              0 > t.indexOf(i[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                (a[i[n]] = e[i[n]]);
          return a;
        },
        ac = (function (e) {
          function t(a, i) {
            void 0 === i && (i = {});
            var n = this,
              r = i.code,
              s = ad(i, ["code"]);
            return (
              Object.defineProperty(
                (n =
                  e.call(
                    this,
                    a,
                    au({ code: void 0 === r ? "E_HUB_EXCEPTION" : r }, s),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "HubException",
                },
              ),
              Object.setPrototypeOf(n, t.prototype),
              n
            );
          }
          return al(t, e), t;
        })(ao.y),
        am = a(73770),
        ah = function (e) {
          Object.defineProperty(this, "redirectorResponse", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "connectionState", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.redirectorResponse = new am.wi(e.redirectorResponse)),
            (this.connectionState = new am.wi(e.connectionState));
        },
        ag =
          ((b = function (e, t) {
            return (b =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function a() {
              this.constructor = e;
            }
            b(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((a.prototype = t.prototype), new a()));
          }),
        ay = function () {
          return (ay =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        ap = function (e, t) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (a[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, i = Object.getOwnPropertySymbols(e);
              n < i.length;
              n++
            )
              0 > t.indexOf(i[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                (a[i[n]] = e[i[n]]);
          return a;
        },
        av = (function (e) {
          function t(a, i) {
            void 0 === i && (i = {});
            var n = this,
              r = i.code,
              s = ap(i, ["code"]);
            return (
              Object.defineProperty(
                (n =
                  e.call(
                    this,
                    a,
                    ay(
                      { code: void 0 === r ? "E_REDIRECTOR_EXCEPTION" : r },
                      s,
                    ),
                  ) || this),
                "name",
                {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: "RedirectorException",
                },
              ),
              Object.setPrototypeOf(n, t.prototype),
              n
            );
          }
          return ag(t, e), t;
        })(ao.y);
      function af(e) {
        var t;
        switch (e) {
          case t2.WEB:
            t = 1;
            break;
          case t2.WEB_TV:
            t = 5;
            break;
          default:
            t = 1;
        }
        return t;
      }
      function aS(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((_ = W || (W = {})).ynisonDeviceId = "Ynison-Device-Id"),
        (_.ynisonRedirectTicket = "Ynison-Redirect-Ticket"),
        (_.ynisonSessionId = "Ynison-Session-Id"),
        (_.ynisonDeviceInfo = "Ynison-Device-Info");
      var aE = function (e, t) {
          var a,
            i,
            n,
            r,
            s = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function o(o) {
            return function (l) {
              return (function (o) {
                if (a) throw TypeError("Generator is already executing.");
                for (; r && ((r = 0), o[0] && (s = 0)), s; )
                  try {
                    if (
                      ((a = 1),
                      i &&
                        (n =
                          2 & o[0]
                            ? i.return
                            : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                        !(n = n.call(i, o[1])).done)
                    )
                      return n;
                    switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(n = (n = s.trys).length > 0 && n[n.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!n || (o[1] > n[0] && o[1] < n[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < n[1]) {
                          (s.label = n[1]), (n = o);
                          break;
                        }
                        if (n && s.label < n[2]) {
                          (s.label = n[2]), s.ops.push(o);
                          break;
                        }
                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (i = 0);
                  } finally {
                    a = n = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, l]);
            };
          }
        },
        ab = (function () {
          function e(e) {
            Object.defineProperty(this, "device", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "connectionConfig", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.device = e.device),
              (this.connectionConfig = e.connectionConfig);
          }
          return (
            Object.defineProperty(e.prototype, "getHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t, a, i, n;
                return (
                  (t = this),
                  (a = void 0),
                  (i = void 0),
                  (n = function () {
                    var t = this;
                    return aE(this, function (a) {
                      return [
                        2,
                        new Promise(function (a, i) {
                          var n,
                            r,
                            s,
                            o,
                            l,
                            u,
                            d = e.oauth,
                            c =
                              ((s = (n = t.device).device_id),
                              (o = n.app_name),
                              (l = n.app_version),
                              (u = af(n.type)),
                              ((r = {})[W.ynisonDeviceId] = s),
                              (r[W.ynisonDeviceInfo] = JSON.stringify({
                                app_name: o,
                                app_version: l,
                                type: u,
                              })),
                              r);
                          d && (c.authorization = "OAuth ".concat(d));
                          var m = new WebSocket(
                              Object.values(t.connectionConfig).join(""),
                              [
                                "Bearer",
                                "v2",
                                encodeURIComponent(JSON.stringify(c)),
                              ],
                            ),
                            h = function (e) {
                              try {
                                var t = JSON.parse(e.data);
                                "error" in t
                                  ? (m.close(),
                                    i(
                                      new av("Error message from redirector", {
                                        data: { redirectorResponse: t.error },
                                      }),
                                    ))
                                  : (m.close(), a(t));
                              } catch (e) {
                                new av(
                                  "Error while processing message from redirector",
                                  {
                                    data: { redirectorResponse: {} },
                                    cause: aS(e),
                                  },
                                );
                              }
                            },
                            g = function () {
                              i(
                                new av("Error in connection to redirector", {
                                  data: { redirectorResponse: {} },
                                }),
                              );
                            },
                            y = function () {
                              m.removeEventListener("message", h),
                                m.removeEventListener("error", g),
                                m.removeEventListener("close", y);
                            };
                          m.addEventListener("message", h),
                            m.addEventListener("error", g),
                            m.addEventListener("close", y);
                        }),
                      ];
                    });
                  }),
                  new (i || (i = Promise))(function (e, r) {
                    function s(e) {
                      try {
                        l(n.next(e));
                      } catch (e) {
                        r(e);
                      }
                    }
                    function o(e) {
                      try {
                        l(n.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    }
                    function l(t) {
                      var a;
                      t.done
                        ? e(t.value)
                        : ((a = t.value) instanceof i
                            ? a
                            : new i(function (e) {
                                e(a);
                              })
                          ).then(s, o);
                    }
                    l((n = n.apply(t, a || [])).next());
                  })
                );
              },
            }),
            e
          );
        })(),
        a_ = function () {
          return (a_ =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        aP = function (e, t) {
          var a = (0, t1.Z)(),
            i = a_(a_({}, e), { rid: a });
          if (t) {
            var n = t.player_action_timestamp_ms,
              r = void 0 === n ? Date.now() : n,
              s = t.activity_interception_type,
              o = void 0 === s ? t3.DO_NOT_INTERCEPT_BY_DEFAULT : s;
            (i.player_action_timestamp_ms = r),
              (i.activity_interception_type = o);
          } else
            (i.player_action_timestamp_ms = Date.now()),
              (i.activity_interception_type = t3.DO_NOT_INTERCEPT_BY_DEFAULT);
          return i;
        },
        aC = function () {
          return (aC =
            Object.assign ||
            function (e) {
              for (var t, a = 1, i = arguments.length; a < i; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        aN = (function () {
          function e(e) {
            var t = this;
            Object.defineProperty(this, "connectorConfig", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
              Object.defineProperty(this, "socket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "emitter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new as.TinyEmitter(),
              }),
              Object.defineProperty(this, "redirectorSocket", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "reconnectTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(this, "reconnectAttempts", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new ah({
                  redirectorResponse: null,
                  connectionState: B.DISCONNECTED,
                }),
              }),
              (this.connectorConfig = e.config),
              (this.redirectorSocket = new ab({
                device: this.connectorConfig.device,
                connectionConfig:
                  this.connectorConfig.redirectorConnectionConfig,
              })),
              this.state.connectionState.onChange(function () {
                t.state.connectionState.value === B.DISCONNECTED &&
                  t.socket &&
                  (t.socket.close(), (t.socket = null));
              });
          }
          return (
            Object.defineProperty(e.prototype, "config", {
              get: function () {
                return aa(this.connectorConfig);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "updateFullState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aC({}, e);
                (a.player_state.player_queue.version = ae(
                  this.connectorConfig.device.device_id,
                  0,
                )),
                  (a.player_state.status.version = ae(
                    this.connectorConfig.device.device_id,
                    0,
                  ));
                var i = aP(
                  { update_full_state: a },
                  aC({ player_action_timestamp_ms: 0 }, t),
                );
                this.sendRequest(i);
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayingStatus", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aC({}, e);
                a.playing_status.version = ae(
                  this.connectorConfig.device.device_id,
                );
                var i = aP({ update_playing_status: a }, t);
                this.sendRequest(i);
              },
            }),
            Object.defineProperty(e.prototype, "updateActiveDevice", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aP({ update_active_device: e }, t);
                this.sendRequest(a);
              },
            }),
            Object.defineProperty(e.prototype, "updateSessionParams", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aP({ update_session_params: e }, t);
                this.sendRequest(a);
              },
            }),
            Object.defineProperty(e.prototype, "updatePlayerState", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aC({}, e);
                (a.player_state.player_queue.version = ae(
                  this.connectorConfig.device.device_id,
                )),
                  (a.player_state.status.version = ae(
                    this.connectorConfig.device.device_id,
                  ));
                var i = aP({ update_player_state: a }, t);
                this.sendRequest(i);
              },
            }),
            Object.defineProperty(e.prototype, "updateVolumeInfo", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                var a = aC({}, e);
                a.volume_info.version = ae(
                  this.connectorConfig.device.device_id,
                );
                var i = aP({ update_volume_info: a }, t);
                this.sendRequest(i);
              },
            }),
            Object.defineProperty(e.prototype, "connect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this,
                  a = e.oauth,
                  i = void 0 === a ? null : a;
                "string" == typeof i && (this.connectorConfig.oauth = i),
                  [B.DISCONNECTED, B.READY_TO_RECONNECT].includes(
                    this.state.connectionState.value,
                  ) &&
                    ((this.state.connectionState.value = B.CONNECTING),
                    this.redirectorSocket
                      .getHub({ oauth: this.connectorConfig.oauth })
                      .then(function (e) {
                        (t.state.redirectorResponse.value = e),
                          t.connectToHub();
                      })
                      .catch(function (e) {
                        if (
                          ((t.state.connectionState.value = B.DISCONNECTED),
                          !(
                            16 === e.data.redirectorResponse.grpc_code &&
                            401 === e.data.redirectorResponse.http_code
                          ) &&
                            t.reconnectAttempts <
                              t.connectorConfig.reconnectAttemptsLimit)
                        ) {
                          var a =
                            e.data.redirectorResponse.extra_headers &&
                            e.data.redirectorResponse.extra_headers[
                              H.ynisonGoAwayForSeconds
                            ]
                              ? 1e3 *
                                Number(
                                  e.data.redirectorResponse.extra_headers[
                                    H.ynisonGoAwayForSeconds
                                  ],
                                )
                              : t.connectorConfig.defaultReconnectTimeoutMS;
                          t.reconnect({ timeout: a });
                        } else
                          (t.reconnectAttempts = 0),
                            t.emitter.emit(q.REDIRECTOR_ERROR, e);
                      }));
              },
            }),
            Object.defineProperty(e.prototype, "disconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                this.reconnectTimeout &&
                  (clearTimeout(this.reconnectTimeout),
                  (this.reconnectTimeout = null)),
                  (this.reconnectAttempts = 0),
                  (this.state.connectionState.value = B.DISCONNECTED);
              },
            }),
            Object.defineProperty(e.prototype, "on", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.on(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "off", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t) {
                this.emitter.off(e, t);
              },
            }),
            Object.defineProperty(e.prototype, "connectToHub", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                var e = this,
                  t = this.connectorConfig,
                  a = t.oauth,
                  i = t.device,
                  n = this.connectorConfig.hubConnectionConfig,
                  r = n.protocol,
                  s = n.path;
                if (this.state.redirectorResponse.value) {
                  var o,
                    l,
                    u,
                    d,
                    c,
                    m,
                    h,
                    g,
                    y,
                    p = this.state.redirectorResponse.value.host,
                    v =
                      ((o = this.state.redirectorResponse.value),
                      (u = i.type),
                      (d = i.app_name),
                      (c = i.app_version),
                      (m = i.device_id),
                      (h = o.session_id),
                      (g = o.redirect_ticket),
                      (y = af(u)),
                      ((l = {})[W.ynisonDeviceId] = m),
                      (l[W.ynisonRedirectTicket] = g),
                      (l[W.ynisonSessionId] = h),
                      (l[W.ynisonDeviceInfo] = JSON.stringify({
                        app_name: d,
                        app_version: c,
                        type: y,
                      })),
                      l);
                  a && (v.authorization = "OAuth ".concat(a));
                  var f = "".concat(r).concat(p).concat(s),
                    S = ["Bearer", "v2", encodeURIComponent(JSON.stringify(v))];
                  (this.socket = new WebSocket(f, S)),
                    this.socket.addEventListener("message", function (t) {
                      e.onRecieveMessage(t);
                    }),
                    this.socket.addEventListener("error", function () {
                      (e.state.connectionState.value = B.DISCONNECTED),
                        e.reconnectAttempts <
                        e.connectorConfig.reconnectAttemptsLimit
                          ? e.reconnect()
                          : ((e.reconnectAttempts = 0),
                            e.emitter.emit(
                              q.HUB_ERROR,
                              new ac("Error in connection to hub", {
                                data: {
                                  redirectorResponse: e.state.redirectorResponse
                                    .value
                                    ? e.state.redirectorResponse.value
                                    : {},
                                  hubResponse: {},
                                },
                              }),
                            ));
                    }),
                    this.socket.addEventListener("open", function () {
                      e.state.connectionState.value = B.CONNECTED;
                    });
                }
              },
            }),
            Object.defineProperty(e.prototype, "reconnect", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                var t = this;
                void 0 === e && (e = {});
                var a = e.timeout,
                  i =
                    void 0 === a
                      ? this.connectorConfig.defaultReconnectTimeoutMS
                      : a;
                this.state.connectionState.value === B.DISCONNECTED &&
                  ((this.reconnectAttempts += 1),
                  (this.reconnectTimeout = setTimeout(function () {
                    (t.state.connectionState.value = B.READY_TO_RECONNECT),
                      t.connect({});
                  }, i)),
                  (this.state.connectionState.value = B.WAITING_FOR_RECONNECT));
              },
            }),
            Object.defineProperty(e.prototype, "onRecieveMessage", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                try {
                  var t = JSON.parse(e.data);
                  if ("error" in t) {
                    if (
                      ((this.state.connectionState.value = B.DISCONNECTED),
                      this.reconnectAttempts <
                        this.connectorConfig.reconnectAttemptsLimit)
                    ) {
                      var a = t.error.details[H.ynisonGoAwayForSeconds]
                        ? 1e3 *
                          Number(t.error.details[H.ynisonGoAwayForSeconds])
                        : this.connectorConfig.defaultReconnectTimeoutMS;
                      this.reconnect({ timeout: a });
                    } else
                      (this.reconnectAttempts = 0),
                        this.emitter.emit(
                          q.HUB_ERROR,
                          new ac("Error message from hub", {
                            data: {
                              redirectorResponse: this.state.redirectorResponse
                                .value
                                ? this.state.redirectorResponse.value
                                : {},
                              hubResponse: t.error,
                            },
                          }),
                        );
                  } else
                    (this.reconnectAttempts = 0),
                      this.emitter.emit(q.RECIEVE_MESSAGE, { rawData: t });
                } catch (e) {
                  this.emitter.emit(
                    q.HUB_ERROR,
                    new ac("Error while processing message from hub", {
                      data: {
                        redirectorResponse: this.state.redirectorResponse.value
                          ? this.state.redirectorResponse.value
                          : {},
                        hubResponse: {},
                      },
                      cause: aS(e),
                    }),
                  );
                }
              },
            }),
            Object.defineProperty(e.prototype, "sendRequest", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                null !== this.socket &&
                  this.state.connectionState.value === B.CONNECTED &&
                  this.socket.send(JSON.stringify(e));
              },
            }),
            e
          );
        })(),
        ak = a(82110);
      let aI = {
          player_state: {
            player_queue: {
              current_playable_index: -1,
              entity_id: "",
              entity_type: t8.VARIOUS,
              playable_list: [],
              options: { repeat_mode: t6.NONE },
              shuffle_optional: null,
              entity_context: t9,
              version: ae("", 0),
              from_optional: null,
              initial_entity_optional: null,
              adding_options_optional: null,
              queue: null,
            },
            status: {
              duration_ms: 0,
              paused: !0,
              playback_speed: 1,
              progress_ms: 0,
              version: ae("", 0),
            },
            player_queue_inject_optional: null,
          },
          devices: [],
          active_device_id_optional: "",
        },
        aT = (e) => (0, ak.Z)(aI, e);
      class aA extends ey.y {
        constructor(e, { code: t = "E_YNISON", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "YnisonException"),
            Object.setPrototypeOf(this, aA.prototype);
        }
      }
      let aD = (e, t) => {
          let a = t && "object" == typeof t && "cause" in t && t.cause,
            i = (t && "object" == typeof t && "data" in t && t.data) || {};
          return new aA("[YnisonException] ".concat(e), {
            cause: a,
            data: { ...i, originalError: t || "" },
          });
        },
        ax = (e, t) => ({
          player_state: t,
          device: {
            volume: 1,
            capabilities: {
              can_be_player: !0,
              can_be_remote_controller: !1,
              volume_granularity: 16,
            },
            info: e,
            volume_info: { volume: 0, version: null },
            is_shadow: !0,
          },
          is_currently_active: !1,
          sync_state_from_eov_optional: null,
        });
      class aL {
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
          (0, $._)(this, "callbacks", []);
        }
      }
      let aR = (e) => {
          switch (e) {
            case t6.ONE:
              return ec.zq.ONE;
            case t6.ALL:
              return ec.zq.CONTEXT;
            default:
              return ec.zq.NONE;
          }
        },
        aG = (e) => {
          switch (e) {
            case ec.zq.ONE:
              return t6.ONE;
            case ec.zq.CONTEXT:
              return t6.ALL;
            default:
              return t6.NONE;
          }
        },
        aw = (e) => {
          var t, a, i, n;
          let r =
              (null === (a = e.player_state) || void 0 === a
                ? void 0
                : null === (t = a.player_queue) || void 0 === t
                  ? void 0
                  : t.current_playable_index) || 0,
            s = ((null === (n = e.player_state) || void 0 === n
              ? void 0
              : null === (i = n.player_queue) || void 0 === i
                ? void 0
                : i.playable_list) || [])[r];
          return s ? { entityId: s.playable_id } : { index: 0 };
        },
        aO = (e) => ({ type: ec.RX.Unloaded, meta: { id: e.playable_id } }),
        aV = (e) =>
          e
            .filter((e) => {
              let { playable_type: t, playable_id: a } = e;
              return t === t7.TRACK && a;
            })
            .map(aO),
        aM = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            n = (null == i ? void 0 : i.playable_list) || [];
          return (
            i.from_optional ||
            (null === (a = n[0]) || void 0 === a ? void 0 : a.from) ||
            "embedded-radio"
          );
        },
        aj = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return "string" != typeof i
            ? null
            : { type: eu.A.Album, from: aM(e), meta: { id: i } };
        },
        aU = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return "string" != typeof i
            ? null
            : { type: eu.A.Artist, from: aM(e), meta: { id: i } };
        },
        aF = (e) => {
          var t, a;
          let i =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            [n, r] =
              (null == i
                ? void 0
                : null === (a = i.entity_id) || void 0 === a
                  ? void 0
                  : a.split(" ")) || [];
          return n
            ? {
                type: eu.A.Generative,
                from: aM(e),
                meta: { id: n, stream: r ? { id: n, url: r } : void 0 },
              }
            : null;
        },
        aB = (e) => "number" == typeof e && !Number.isNaN(e),
        aq = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id,
            n = (null == a ? void 0 : a.playable_list) || [],
            r = aM(e);
          if ("string" != typeof i || !n.length) return null;
          let [s, o] = i.split(":").map((e) => Number(e));
          return aB(s) && aB(o)
            ? {
                type: eu.A.Playlist,
                from: r,
                meta: { id: i, kind: o, owner: { uid: s } },
              }
            : { type: eu.A.Various, from: r, meta: { id: i } };
        },
        aH = (e) => {
          var t, a, i, n;
          let r =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            s = (null == r ? void 0 : r.playable_list) || [],
            o =
              null ===
                (n =
                  s[
                    null === (i = e.player_state) || void 0 === i
                      ? void 0
                      : null === (a = i.player_queue) || void 0 === a
                        ? void 0
                        : a.current_playable_index
                  ]) || void 0 === n
                ? void 0
                : n.playable_id;
          return o && s.length
            ? { type: eu.A.Various, from: aM(e), meta: { id: o } }
            : null;
        },
        aW = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_id;
          return "string" != typeof i
            ? null
            : {
                type: eu.A.Vibe,
                from: aM(e),
                seeds: i.split(","),
                includeTracksInResponse: !0,
                meta: { id: i },
              };
        },
        aY = (e) => {
          var t;
          let a =
              null === (t = e.player_state) || void 0 === t
                ? void 0
                : t.player_queue,
            i = null == a ? void 0 : a.entity_type;
          if (!i) return null;
          switch (i) {
            case t8.ALBUM:
              return aj(e);
            case t8.ARTIST:
              return aU(e);
            case t8.PLAYLIST:
              return aq(e);
            case t8.RADIO:
              return aW(e);
            case t8.GENERATIVE:
              return aF(e);
            case t8.VARIOUS:
              return aH(e);
            default:
              return null;
          }
        };
      class az {
        applyYnisonDiff(e, t) {
          var a, i, n, r, s, o, l;
          let u = new aL();
          return (
            (null === (i = t.player_state) || void 0 === i
              ? void 0
              : null === (a = i.player_queue) || void 0 === a
                ? void 0
                : a.entity_id) && u.push(() => this.changeContext(e)),
            (null === (r = t.player_state) || void 0 === r
              ? void 0
              : null === (n = r.player_queue) || void 0 === n
                ? void 0
                : n.shuffle_optional) && u.push(() => this.changeShuffle(t)),
            (null === (o = t.player_state) || void 0 === o
              ? void 0
              : null === (s = o.player_queue) || void 0 === s
                ? void 0
                : s.options) && u.push(() => this.changeOptions(t)),
            (null === (l = t.player_state) || void 0 === l
              ? void 0
              : l.status) && u.push(() => this.changeStatus(t)),
            u.exec()
          );
        }
        changeOptions(e) {
          var t, a, i;
          let n = aR(
            null === (i = e.player_state) || void 0 === i
              ? void 0
              : null === (a = i.player_queue) || void 0 === a
                ? void 0
                : null === (t = a.options) || void 0 === t
                  ? void 0
                  : t.repeat_mode,
          );
          return this.playback.setRepeatMode(n), Promise.resolve();
        }
        changeShuffle(e) {
          var t, a;
          let i =
              null === (a = e.player_state) || void 0 === a
                ? void 0
                : null === (t = a.player_queue) || void 0 === t
                  ? void 0
                  : t.shuffle_optional,
            n = !!(
              i &&
              Array.isArray(i.playable_indices) &&
              i.playable_indices.length
            );
          return this.playback.setShuffle(n), Promise.resolve();
        }
        changeStatus(e) {
          var t, a, i, n;
          let r = new aL(),
            s = Number(
              null === (a = e.player_state) || void 0 === a
                ? void 0
                : null === (t = a.status) || void 0 === t
                  ? void 0
                  : t.playback_speed,
            ),
            o =
              Number(
                null === (n = e.player_state) || void 0 === n
                  ? void 0
                  : null === (i = n.status) || void 0 === i
                    ? void 0
                    : i.progress_ms,
              ) / 1e3;
          return (
            Number.isNaN(s) ||
              r.push(() =>
                this.playback.setSpeed(s).then(() => Promise.resolve()),
              ),
            Number.isNaN(o) ||
              r.push(() => {
                if (
                  this.playback.state.playerState.status.value === ec.Xz.PLAYING
                )
                  return this.playback
                    .setProgress(o)
                    .then(() => Promise.resolve());
                let {
                  currentEntity: { value: e },
                } = this.playback.state.queueState;
                return e && (e.entity.startPosition = o), Promise.resolve();
              }),
            r.exec()
          );
        }
        changeContext(e) {
          let t = this.getContextParams(e);
          return t
            ? this.playback.setContext(t).catch((e) => {
                this.playback.hooks.afterError.promise(
                  aD("PlaybackSetContextError", e),
                );
              })
            : Promise.resolve();
        }
        getContextParams(e) {
          try {
            var t, a;
            let i;
            let n = aY(e);
            if (!n) return null;
            let r = this.factory.createContext({ data: n }),
              s = r.data.type !== eu.A.Various,
              o = r.data.type === eu.A.Generative,
              l = o ? {} : aw(e),
              u =
                null === (a = e.player_state) || void 0 === a
                  ? void 0
                  : null === (t = a.player_queue) || void 0 === t
                    ? void 0
                    : t.playable_list;
            return (
              !o && Array.isArray(u) && u.length && (i = aV(u)),
              {
                context: r,
                entitiesData: i,
                loadContextMeta: s,
                queueParams: l,
              }
            );
          } catch (e) {
            return (
              this.playback.hooks.afterError.promise(
                aD("GetContextParamsError", e),
              ),
              null
            );
          }
        }
        constructor(e, t) {
          (0, $._)(this, "factory", void 0),
            (0, $._)(this, "playback", void 0),
            (this.factory = e),
            (this.playback = t);
        }
      }
      var aK = a(58211);
      let aJ = (e) => {
          switch (e) {
            case eu.A.Album:
              return t8.ALBUM;
            case eu.A.Playlist:
              return t8.PLAYLIST;
            case eu.A.Artist:
              return t8.ARTIST;
            case eu.A.Vibe:
              return t8.RADIO;
            case eu.A.Various:
              return t8.VARIOUS;
            case eu.A.Generative:
              return t8.GENERATIVE;
            default:
              return t8.VARIOUS;
          }
        },
        aQ = (e) => {
          switch (e) {
            case ec.zq.NONE:
              return t6.NONE;
            case ec.zq.ONE:
              return t6.ONE;
            case ec.zq.CONTEXT:
              return t6.ALL;
            default:
              return t6.NONE;
          }
        },
        aX = function (e) {
          var t, a, i, n, r, s, o, l, u, d, c, m, h;
          let { entity: g } = e,
            y =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          switch (g.data.type) {
            case ev.A.Music:
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
                from: y,
                playable_id:
                  null !== (n = g.data.meta.realId) && void 0 !== n ? n : "",
                playable_type: t7.TRACK,
                title:
                  null !== (r = g.data.meta.title) && void 0 !== r ? r : "",
                cover_url_optional:
                  null !== (s = g.data.meta.coverUri) && void 0 !== s
                    ? s
                    : null,
              };
            case ev.A.Generative:
              return {
                album_id_optional: null,
                from: y,
                playable_id: "",
                playable_type: t7.INFINITE,
                title:
                  null !== (o = g.data.meta.title) && void 0 !== o ? o : "",
                cover_url_optional: null,
              };
            case ev.A.VibeTrack:
              return {
                album_id_optional:
                  "number" ==
                  typeof (null === (u = g.data.meta.albums) || void 0 === u
                    ? void 0
                    : null === (l = u[0]) || void 0 === l
                      ? void 0
                      : l.id)
                    ? String(
                        null === (d = g.data.meta.albums) || void 0 === d
                          ? void 0
                          : d[0].id,
                      )
                    : null,
                from: y,
                playable_id:
                  null !== (c = g.data.meta.realId) && void 0 !== c ? c : "",
                playable_type: t7.TRACK,
                title:
                  null !== (m = g.data.meta.title) && void 0 !== m ? m : "",
                cover_url_optional:
                  null !== (h = g.data.meta.coverUri) && void 0 !== h
                    ? h
                    : null,
              };
            default:
              return {
                album_id_optional: null,
                from: y,
                playable_id: String(g.data.meta.id),
                playable_type: t7.TRACK,
                title: "",
                cover_url_optional: null,
              };
          }
        },
        aZ = (e) => {
          var t, a, i, n, r, s, o, l, u, d;
          switch (
            null === (t = e.state.queueState.currentEntity.value) ||
            void 0 === t
              ? void 0
              : t.entity.data.type
          ) {
            case ev.A.Music:
            case ev.A.VibeTrack:
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
            case ev.A.Generative:
              return (
                null === (n = e.state.currentContext.value) || void 0 === n
                  ? void 0
                  : n.data.meta.id
              )
                ? ""
                    .concat(
                      String(
                        null === (r = e.state.currentContext.value) ||
                          void 0 === r
                          ? void 0
                          : r.data.meta.id,
                      ),
                      " ",
                    )
                    .concat(
                      null !==
                        (l =
                          null ===
                            (o = e.state.queueState.currentEntity.value) ||
                          void 0 === o
                            ? void 0
                            : null === (s = o.entity.data.meta.stream) ||
                                void 0 === s
                              ? void 0
                              : s.url) && void 0 !== l
                        ? l
                        : "",
                    )
                : "";
            default:
              return (
                null === (u = e.state.currentContext.value) || void 0 === u
                  ? void 0
                  : u.data.meta.id
              )
                ? String(
                    null === (d = e.state.currentContext.value) || void 0 === d
                      ? void 0
                      : d.data.meta.id,
                  )
                : "";
          }
        },
        a$ = (e) => {
          var t, a;
          return (0, te.Q)(
            null === (t = e.state.queueState.currentEntity.value) ||
              void 0 === t
              ? void 0
              : t.context,
          )
            ? {
                entity_id: aZ(e),
                entity_type: aJ(
                  null === (a = e.state.currentContext.value) || void 0 === a
                    ? void 0
                    : a.data.type,
                ),
              }
            : null;
        },
        a0 = (e) => {
          var t, a;
          return (0, ti.x)(
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
        a5 = (e) => {
          var t, a, i;
          return eG(
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
        a1 = (e) => 1e3 * Math.floor(e),
        a4 = (e) => {
          var t;
          let a = a1(e.state.playerState.progress.value.position),
            i = a5(e);
          return (null === (t = e.state.queueState.currentEntity.value) ||
          void 0 === t
            ? void 0
            : t.context.data.type) === eu.A.Generative
            ? 0
            : a < i
              ? a
              : 0;
        };
      class a2 {
        subscribeOnPlayerEvents() {
          if (!this.ynisonConnector) return () => {};
          let e = this.playback.state.currentContext.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            t = this.playback.state.playerState.status.onChange((e) => {
              switch (e) {
                case ec.Xz.PLAYING:
                case ec.Xz.PAUSED:
                  this.prepareAndApplyPlayerStateToYnison();
              }
            }),
            a = this.playback.state.playerState.event.onChange((e) => {
              switch (e) {
                case ec.KX.SET_PROGRESS:
                case ec.KX.SET_SPEED:
                  this.prepareAndApplyPlayerStateToYnison();
              }
            }),
            i = this.playback.state.queueState.currentEntity.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            n = this.playback.state.queueState.entityList.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            r = this.playback.state.queueState.index.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            s = this.playback.state.queueState.order.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            o = this.playback.state.queueState.repeat.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            ),
            l = this.playback.state.queueState.shuffle.onChange(() =>
              this.prepareAndApplyPlayerStateToYnison(),
            );
          return () => {
            e(), t(), a(), i(), n(), r(), s(), o(), l();
          };
        }
        prepareAndApplyPlayerStateToYnison() {
          var e, t, a, i;
          if (!this.firstMessageReceived.value) return;
          let {
              devices: n,
              active_device_id_optional: r,
              player_state: { player_queue_inject_optional: s },
            } = this.ynisonStateController.getState(),
            o = {
              active_device_id_optional: r,
              devices: n,
              player_state: {
                player_queue_inject_optional: s,
                status: {
                  duration_ms: a5(this.playback),
                  progress_ms: a4(this.playback),
                  paused:
                    this.playback.state.playerState.status.value ===
                    ec.Xz.PAUSED,
                  playback_speed: this.playback.state.playerState.speed.value,
                  version: ae(this.deviceConfig.device_id, 0),
                },
                player_queue: {
                  entity_id: aZ(this.playback),
                  entity_type: aJ(
                    null ===
                      (e =
                        this.playback.state.queueState.currentEntity.value) ||
                      void 0 === e
                      ? void 0
                      : e.context.data.type,
                  ),
                  current_playable_index:
                    this.playback.state.queueState.order.value[
                      this.playback.state.queueState.index.value
                    ],
                  playable_list:
                    this.playback.state.queueState.entityList.value.map((e) => {
                      var t;
                      return aX(
                        e,
                        null ===
                          (t = this.playback.state.currentContext.value) ||
                          void 0 === t
                          ? void 0
                          : t.from,
                      );
                    }),
                  shuffle_optional: this.playback.state.queueState.shuffle.value
                    ? {
                        playable_indices:
                          this.playback.state.queueState.order.value,
                      }
                    : null,
                  options: {
                    repeat_mode: aQ(
                      this.playback.state.queueState.repeat.value,
                    ),
                  },
                  entity_context: t9,
                  from_optional:
                    null !==
                      (i =
                        null ===
                          (t = this.playback.state.currentContext.value) ||
                        void 0 === t
                          ? void 0
                          : t.from) && void 0 !== i
                      ? i
                      : null,
                  initial_entity_optional: a$(this.playback),
                  adding_options_optional: a0(this.playback),
                  queue: null,
                  version: ae(this.deviceConfig.device_id, 0),
                },
              },
            },
            l = this.limitQueue(o.player_state),
            u = { ...o, player_state: l },
            d = this.ynisonStateController.calculateDiff({
              newState: u,
              skipVersionCompare: !0,
              skipDeviceActivityCheck: !0,
            });
          this.isSendCondition({ activeDeviceIdOptional: r, diff: d }) &&
            (null === (a = this.ynisonConnector) ||
              void 0 === a ||
              a.updatePlayerState({ player_state: u.player_state }));
        }
        limitQueue(e) {
          let t = (0, aK.Z)(e),
            a = t.player_queue,
            i = a.playable_list,
            n = a.current_playable_index;
          if (i.length <= 200) return t;
          let r = a.shuffle_optional && a.shuffle_optional.playable_indices;
          if (r && r.length) {
            let e = r.indexOf(n),
              a = r.slice(e, 200),
              s = [...a].sort((e, t) => e - t).map((e) => i[e]),
              o = new Map(),
              l = a.map((e) => {
                var t;
                let a = i[e].playable_id,
                  n = null !== (t = o.get(a)) && void 0 !== t ? t : -1,
                  r = s.findIndex((e, t) => t > n && e.playable_id === a);
                return o.set(a, r), r;
              }),
              u = s.findIndex((e) => e.playable_id === i[n].playable_id);
            return (
              (t.player_queue.playable_list = s),
              (t.player_queue.current_playable_index = u),
              (t.player_queue.shuffle_optional.playable_indices = l),
              t
            );
          }
          let s = i[n].playable_id,
            o = Math.max(0, n - 100);
          o + 200 > i.length && (o = i.length - 200);
          let l = i.slice(o, o + 200),
            u = l.findIndex((e) => e.playable_id === s);
          return (
            (t.player_queue.playable_list = l),
            (t.player_queue.current_playable_index = u),
            t
          );
        }
        isSendCondition(e) {
          let { activeDeviceIdOptional: t, diff: a } = e;
          return (
            0 !== Object.keys(a).length &&
            (!t || t === this.deviceConfig.device_id)
          );
        }
        constructor({
          playback: e,
          ynisonStateController: t,
          ynisonConnector: a,
          firstMessageReceived: i,
          deviceConfig: n,
        }) {
          (0, $._)(this, "playback", void 0),
            (0, $._)(this, "ynisonStateController", void 0),
            (0, $._)(this, "deviceConfig", void 0),
            (0, $._)(this, "ynisonConnector", void 0),
            (0, $._)(this, "firstMessageReceived", void 0),
            (this.playback = e),
            (this.ynisonStateController = t),
            (this.ynisonConnector = a),
            (this.firstMessageReceived = i),
            (this.deviceConfig = n);
        }
      }
      class a6 {
        apply(e) {
          var t, a, i, n, r;
          if (!this.variables.enableYnisonConnection) return;
          let { playback: s, hooks: o } = e,
            l = this.onMessageRecieved.bind(this),
            u = (e) => {
              o.afterError.promise(aD("RedirectorException", e));
            },
            d = (e) => {
              o.afterError.promise(aD("HubException", e));
            };
          (this.playbackController = new az(this.factory, s)),
            (this.playbackToYnisonController = new a2({
              playback: s,
              ynisonStateController: this.ynisonStateController,
              ynisonConnector: this.ynisonConnector,
              firstMessageReceived: this.firstMessageReceived,
              deviceConfig: this.deviceConfig,
            })),
            null === (t = this.ynisonConnector) ||
              void 0 === t ||
              t.state.connectionState.onChange((e) => {
                e === B.CONNECTED && this.onConnected(this.getEmptyState(s));
              }),
            null === (a = this.ynisonConnector) ||
              void 0 === a ||
              a.on(q.RECIEVE_MESSAGE, l),
            null === (i = this.ynisonConnector) ||
              void 0 === i ||
              i.on(q.REDIRECTOR_ERROR, u),
            null === (n = this.ynisonConnector) ||
              void 0 === n ||
              n.on(q.HUB_ERROR, d),
            (this.ynisonUnsubscribe = () => {
              var e, t, a;
              null === (e = this.ynisonConnector) ||
                void 0 === e ||
                e.off(q.RECIEVE_MESSAGE, l),
                null === (t = this.ynisonConnector) ||
                  void 0 === t ||
                  t.off(q.REDIRECTOR_ERROR, u),
                null === (a = this.ynisonConnector) ||
                  void 0 === a ||
                  a.off(q.HUB_ERROR, d);
            }),
            o.beforeEntityChange.tapPromise("YnisonPlugin", () => {
              let {
                currentEntity: { value: e },
              } = s.state.queueState;
              return e && (e.entity.startPosition = null), Promise.resolve();
            }),
            null === (r = this.ynisonConnector) ||
              void 0 === r ||
              r.connect({});
        }
        ynisonDisconnect() {
          var e, t, a;
          null === (e = this.ynisonUnsubscribe) || void 0 === e || e.call(this),
            null === (t = this.unsubscribeFromPlayerEvents) ||
              void 0 === t ||
              t.call(this),
            null === (a = this.ynisonConnector) ||
              void 0 === a ||
              a.disconnect();
        }
        onMessageRecieved(e) {
          this.firstMessageReceived.value || this.applyYnisonDiff(e.rawData),
            ((e.rawData.active_device_id_optional &&
              !this.isAnotherDeviceActive.value) ||
              !e.rawData.active_device_id_optional ===
                this.isAnotherDeviceActive.value) &&
              ((this.isAnotherDeviceActive.value =
                !!e.rawData.active_device_id_optional),
              this.ynisonStateController.calculateDiff({
                newState: e.rawData,
              }));
        }
        onConnected(e) {
          var t, a;
          (this.unsubscribeFromPlayerEvents =
            null === (t = this.playbackToYnisonController) || void 0 === t
              ? void 0
              : t.subscribeOnPlayerEvents()),
            this.ynisonStateController.setState(e);
          let i = this.ynisonStateController.getState().player_state;
          null === (a = this.ynisonConnector) ||
            void 0 === a ||
            a.updateFullState(ax(this.deviceConfig, i));
        }
        getEmptyState(e) {
          let t = e.state.queueState.shuffle.value;
          return aT({
            player_state: {
              player_queue: {
                options: { repeat_mode: aG(e.state.queueState.repeat.value) },
                ...(t ? { shuffle_optional: { playable_indices: [] } } : {}),
              },
            },
          });
        }
        applyYnisonDiff(e) {
          var t;
          let a = this.ynisonStateController.calculateDiff({ newState: e }),
            i = this.ynisonStateController.getState();
          null === (t = this.playbackController) ||
            void 0 === t ||
            t.applyYnisonDiff(i, a).then(() => {
              this.firstMessageReceived.value = !0;
            });
        }
        constructor({
          factory: e,
          deviceConfig: t,
          connectionConfig: a,
          variables: i,
        }) {
          (0, $._)(this, "ynisonConnector", void 0),
            (0, $._)(this, "ynisonStateController", void 0),
            (0, $._)(this, "factory", void 0),
            (0, $._)(this, "deviceConfig", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "playbackController", void 0),
            (0, $._)(this, "playbackToYnisonController", void 0),
            (0, $._)(this, "unsubscribeFromPlayerEvents", void 0),
            (0, $._)(this, "ynisonUnsubscribe", void 0),
            (0, $._)(this, "firstMessageReceived", void 0),
            (0, $._)(this, "isAnotherDeviceActive", void 0),
            (this.factory = e),
            (this.variables = i),
            (this.deviceConfig = {
              app_name: t.appName,
              app_version: t.appVersion,
              title: t.title,
              device_id: (0, t1.Z)(),
              type: t2.WEB,
            }),
            (this.ynisonStateController = new ar({
              device: this.deviceConfig,
              diffWhileActiveOnly: !1,
            })),
            this.variables.enableYnisonConnection &&
              (this.ynisonConnector = new aN({
                config: {
                  device: this.deviceConfig,
                  oauth: null,
                  redirectorConnectionConfig: {
                    protocol: "wss://",
                    host: a.ynisonHost,
                    path: a.redirectorPath,
                  },
                  hubConnectionConfig: {
                    protocol: "wss://",
                    path: a.hubConnectioPath,
                  },
                  defaultReconnectTimeoutMS: a.reconnectTimeout,
                  reconnectAttemptsLimit: a.reconnectAttempts,
                },
              })),
            (this.firstMessageReceived = new eh.wi(!1)),
            (this.isAnotherDeviceActive = new eh.wi(!1));
        }
      }
      ((P = Y || (Y = {})).AD = "ad"),
        (P.SHOT = "shot"),
        ((C = z || (z = {})).NONE = "none"),
        (C.AD = "ad"),
        (C.JINGLE = "jingle"),
        ((N = K || (K = {})).NONE = "none"),
        (N.AD = "ad"),
        (N.JINGLE = "jingle");
      class a3 extends th.c {
        async getAfterTrack(e) {
          var t;
          let a = this.config.gateway.prefixUrl,
            i = this.config.gateway.headers;
          return (
            await this.httpClient.get("after-track", {
              prefixUrl: a,
              headers: {
                ...this.createRequestHeadersFromParams(e),
                ...this.createTvmHeadersFromParams({
                  params: e,
                  target: this.config.params.tvmTarget,
                }),
                ...this.createUserTicketHeaderFromParams(),
                ...i,
              },
              retry: this.getRetryPolicyConfig(),
              searchParams: (0, tg.f)({
                from: e.from,
                types: e.types,
                nextTrackId: e.nextTrackId,
                prevTrackId: e.prevTrackId,
              }),
              timeout:
                null === (t = this.config.timeouts) || void 0 === t
                  ? void 0
                  : t.getAfterTrack,
            })
          ).json();
        }
        constructor(e, t) {
          (t.aggregatedIdUrlScheme = "".concat(
            t.gateway.prefixUrl,
            "/after-track",
          )),
            super(e, t),
            (0, $._)(this, "httpClient", void 0),
            (0, $._)(this, "config", void 0),
            (this.httpClient = e),
            (this.config = t);
        }
      }
      var a7 = a(5789);
      class a9 {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.beforeEntityChange.tapPromise(
            "AdvertPlugin",
            () =>
              new Promise((e) => {
                if (this.variables.disabled) {
                  e();
                  return;
                }
                let {
                  state: {
                    currentContext: a,
                    queueState: {
                      index: { value: i },
                      order: { value: n },
                      entityList: { value: r },
                      currentEntity: { value: s },
                    },
                  },
                } = t;
                if (void 0 !== a.value) {
                  let o = n[i + 1],
                    l = o ? r[o] : void 0,
                    u = l ? String(l.entity.data.meta.id) : void 0,
                    d = n[i - 1],
                    c = d ? r[d] : void 0,
                    m = c ? String(c.entity.data.meta.id) : void 0,
                    h =
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
                        types: Y.AD,
                        nextTrackId: u,
                        prevTrackId: m,
                      })
                      .then((a) => {
                        var i, n;
                        let r =
                          (h >= 0.5 &&
                            (null === (i = a.ad) || void 0 === i
                              ? void 0
                              : i.afterPlay) === z.AD) ||
                          (h < 0.5 &&
                            (null === (n = a.ad) || void 0 === n
                              ? void 0
                              : n.afterSkip) === K.AD);
                        "ad" in a && this.advertModule && r
                          ? (t.pause(),
                            this.advertModule.playAdvert(a).finally(e))
                          : e();
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
          (0, $._)(this, "advertModule", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "afterTrackResource", void 0),
            (0, $._)(this, "adsResource", void 0),
            (0, $._)(this, "currentTrackId", ""),
            (0, $._)(this, "from", "");
          let {
            httpClient: a,
            afterTrackResourceConfig: i,
            advertModule: n,
            adsResourceConfig: r,
            variables: s,
          } = e;
          (this.afterTrackResource = new a3(a, i)),
            (this.adsResource = new a7.j(a, r)),
            (this.variables = s),
            (this.advertModule = n),
            null === (t = this.advertModule) ||
              void 0 === t ||
              t.setAdvertFeedbackCallback(
                this.advertFeedbackCallback.bind(this),
              );
        }
      }
      let a8 = [eu.A.Album, eu.A.Artist, eu.A.Playlist, eu.A.Various],
        ie = (e, t, a) => {
          var i;
          let n =
            null === (i = t.state.currentContext.value) || void 0 === i
              ? void 0
              : i.data;
          if (!n) return "";
          let r = e,
            s = t.state.queueState.entityList.value.length || 0;
          return (
            r === eu.A.Various && 1 === s && (r = "track"),
            e === eu.A.Various &&
              "overrideContextType" in n &&
              n.overrideContextType &&
              (r = n.overrideContextType),
            "".concat(a, "-radio-").concat(r, "-autoflow")
          );
        },
        it = (e, t) => {
          var a, i, n, r;
          let s =
            null === (a = t.state.currentContext.value) || void 0 === a
              ? void 0
              : a.data;
          if (s) {
            if (e === eu.A.Album) return ["album:".concat(s.meta.id)];
            if (e === eu.A.Artist) return ["artist:".concat(s.meta.id)];
            if (
              e === eu.A.Playlist &&
              "owner" in s.meta &&
              (null === (i = s.meta.owner) || void 0 === i ? void 0 : i.uid) &&
              "kind" in s.meta &&
              s.meta.kind
            )
              return [
                "playlist:"
                  .concat(
                    null === (n = s.meta.owner) || void 0 === n
                      ? void 0
                      : n.uid,
                    "_",
                  )
                  .concat(s.meta.kind),
              ];
            if (e === eu.A.Various) {
              if ("overrideAutoflowSeeds" in s && s.overrideAutoflowSeeds)
                return s.overrideAutoflowSeeds;
              let e =
                null === (r = t.state.queueState.currentEntity.value) ||
                void 0 === r
                  ? void 0
                  : r.entity.data.meta.id;
              return ["track:".concat(e)];
            }
          }
        };
      class ia {
        apply(e) {
          let { playback: t, hooks: a } = e;
          a.afterContextEnd.tapPromise("AutoflowPlugin", () => {
            var e, a, i;
            let n =
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
                (n = eu.A.Various),
              n && a8.includes(n) && this.playAutoflow(t),
              Promise.resolve()
            );
          });
        }
        playAutoflow(e) {
          var t, a, i;
          let n =
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
            (n = eu.A.Various);
          let r = it(n, e),
            s = e.state.currentContext.value,
            o = Object.create(null != s ? s : null);
          if (!(n && r)) return;
          let l = this.factory.createContext({
            data: {
              type: eu.A.Vibe,
              meta: { id: (0, eO.$)(r) },
              seeds: r,
              from: ie(n, e, this.platform),
              includeTracksInResponse: !0,
              parentContext: o,
            },
          });
          e.playContext({ context: l, loadContextMeta: !0 });
        }
        constructor({ platform: e, factory: t }) {
          (0, $._)(this, "platform", void 0),
            (0, $._)(this, "factory", void 0),
            (this.platform = e),
            (this.factory = t);
        }
      }
      class ii {
        setQuality(e) {
          switch (e) {
            case tZ.n.HIGH_QUALITY:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = tZ.n.HIGH_QUALITY);
              break;
            case tZ.n.BALANCED:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = tZ.n.BALANCED);
              break;
            case tZ.n.EFFICIENT:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = tZ.n.EFFICIENT);
              break;
            case tZ.n.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = tZ.n.PREVIEW);
          }
        }
        constructor(e) {
          (0, $._)(this, "qualityConfig", {
            lossless: new eh.wi(!1),
            hq: new eh.wi(!0),
            nq: new eh.wi(!0),
            lq: new eh.wi(!0),
            preview: new eh.wi(!0),
            smart_preview: new eh.wi(!1),
          }),
            (0, $._)(this, "quality", new eh.wi(tZ.n.BALANCED)),
            this.setQuality(e);
        }
      }
      var ir = a(36301),
        is = a(16129);
      let io = {
        lossless: [{ codec: is.V.FLAC, bitrateInKbps: 0 }],
        hq: [{ codec: is.V.MP3, bitrateInKbps: 320 }],
        nq: [
          { codec: is.V.AAC, bitrateInKbps: 128 },
          { codec: is.V.MP3, bitrateInKbps: 192 },
        ],
        lq: [
          { codec: is.V.AAC, bitrateInKbps: 128 },
          { codec: is.V.MP3, bitrateInKbps: 192 },
        ],
        preview: [{ codec: is.V.MP3, bitrateInKbps: 128 }],
        smart_preview: [{ codec: is.V.MP3, bitrateInKbps: 128 }],
      };
      function il(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      class iu {
        getMediaSource(e) {
          return new Promise((t, a) => {
            let {
                entity: {
                  data: {
                    meta: { id: i },
                  },
                },
              } = e,
              n = (0, ir.I)();
            (0, ir.U)({
              secretKey: this.secretKey,
              data: "".concat(n).concat(i),
            })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(i),
                    sign: e,
                    tsInSeconds: n,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let n = (function (e, t) {
                      if (t.preview.value && e[0]) return e[0];
                      let a = e.find((e) =>
                          io.lossless.find((t) => e.codec === t.codec),
                        ),
                        i = e.find((e) =>
                          io.hq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        ),
                        n = e.find((e) =>
                          io.nq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        );
                      return t.lossless.value && a
                        ? a
                        : t.hq.value && i
                          ? i
                          : (t.lq.value || t.nq.value) && n
                            ? n
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== n
                      ? this.resource
                          .getSrcData({ storageUrl: n.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: i,
                                  } = e,
                                  n = (function (e, t) {
                                    let a, i, n, r, s, o, l, u, d;
                                    let c = String.fromCharCode;
                                    function m(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function h(e, t) {
                                      let a, i, n, r, s;
                                      return ((n = 2147483648 & e),
                                      (r = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (i = 1073741824 & t),
                                      (s = (1073741823 & e) + (1073741823 & t)),
                                      a & i)
                                        ? 2147483648 ^ s ^ n ^ r
                                        : a | i
                                          ? 1073741824 & s
                                            ? 3221225472 ^ s ^ n ^ r
                                            : 1073741824 ^ s ^ n ^ r
                                          : s ^ n ^ r;
                                    }
                                    function g(e, t, a, i, n, r, s) {
                                      return (
                                        (e = h(
                                          e,
                                          h(h((t & a) | (~t & i), n), s),
                                        )),
                                        h(m(e, r), t)
                                      );
                                    }
                                    function y(e, t, a, i, n, r, s) {
                                      return (
                                        (e = h(
                                          e,
                                          h(h((t & i) | (a & ~i), n), s),
                                        )),
                                        h(m(e, r), t)
                                      );
                                    }
                                    function p(e, t, a, i, n, r, s) {
                                      return (
                                        (e = h(e, h(h(t ^ a ^ i, n), s))),
                                        h(m(e, r), t)
                                      );
                                    }
                                    function v(e, t, a, i, n, r, s) {
                                      return (
                                        (e = h(e, h(h(a ^ (t | ~i), n), s))),
                                        h(m(e, r), t)
                                      );
                                    }
                                    function f(e) {
                                      let t = "",
                                        a = "",
                                        i,
                                        n;
                                      for (n = 0; n <= 3; n++)
                                        (i = (e >>> (8 * n)) & 255),
                                          (t += (a = "0".concat(
                                            i.toString(16),
                                          )).substr(a.length - 2, 2));
                                      return t;
                                    }
                                    let S = [];
                                    for (
                                      a = 0,
                                        S = (function (e) {
                                          let t;
                                          let a = e.length,
                                            i = a + 8,
                                            n = ((i - (i % 64)) / 64 + 1) * 16,
                                            r = Array(n - 1),
                                            s = 0,
                                            o = 0;
                                          for (; o < a; )
                                            (t = (o - (o % 4)) / 4),
                                              (s = (o % 4) * 8),
                                              (r[t] =
                                                r[t] | (e.charCodeAt(o) << s)),
                                              o++;
                                          return (
                                            (t = (o - (o % 4)) / 4),
                                            (s = (o % 4) * 8),
                                            (r[t] = r[t] | (128 << s)),
                                            (r[n - 2] = a << 3),
                                            (r[n - 1] = a >>> 29),
                                            r
                                          );
                                        })(
                                          (e = (function (e) {
                                            e = t + e.replace(/\r\n/g, "\n");
                                            let a = "";
                                            for (let t = 0; t < e.length; t++) {
                                              let i = e.charCodeAt(t);
                                              i < 128
                                                ? (a += c(i))
                                                : i > 127 && i < 2048
                                                  ? (a +=
                                                      c((i >> 6) | 192) +
                                                      c((63 & i) | 128))
                                                  : (a +=
                                                      c((i >> 12) | 224) +
                                                      c(((i >> 6) & 63) | 128) +
                                                      c((63 & i) | 128));
                                            }
                                            return a;
                                          })(e)),
                                        ),
                                        o = 1732584193,
                                        l = 4023233417,
                                        u = 2562383102,
                                        d = 271733878;
                                      a < S.length;
                                      a += 16
                                    )
                                      (i = o),
                                        (n = l),
                                        (r = u),
                                        (s = d),
                                        (o = g(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 0],
                                          7,
                                          3614090360,
                                        )),
                                        (d = g(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 1],
                                          12,
                                          3905402710,
                                        )),
                                        (u = g(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 2],
                                          17,
                                          606105819,
                                        )),
                                        (l = g(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 3],
                                          22,
                                          3250441966,
                                        )),
                                        (o = g(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 4],
                                          7,
                                          4118548399,
                                        )),
                                        (d = g(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 5],
                                          12,
                                          1200080426,
                                        )),
                                        (u = g(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 6],
                                          17,
                                          2821735955,
                                        )),
                                        (l = g(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 7],
                                          22,
                                          4249261313,
                                        )),
                                        (o = g(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 8],
                                          7,
                                          1770035416,
                                        )),
                                        (d = g(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 9],
                                          12,
                                          2336552879,
                                        )),
                                        (u = g(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 10],
                                          17,
                                          4294925233,
                                        )),
                                        (l = g(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 11],
                                          22,
                                          2304563134,
                                        )),
                                        (o = g(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 12],
                                          7,
                                          1804603682,
                                        )),
                                        (d = g(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 13],
                                          12,
                                          4254626195,
                                        )),
                                        (u = g(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 14],
                                          17,
                                          2792965006,
                                        )),
                                        (l = g(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 15],
                                          22,
                                          1236535329,
                                        )),
                                        (o = y(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (d = y(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (u = y(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (o = y(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (d = y(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (u = y(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (o = y(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (d = y(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (u = y(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (o = y(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (d = y(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (u = y(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (o = p(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (d = p(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (u = p(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (l = p(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (o = p(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (d = p(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (u = p(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (l = p(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (o = p(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (d = p(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (u = p(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (l = p(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (o = p(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (d = p(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (u = p(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (l = p(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 2],
                                          23,
                                          3299628645,
                                        )),
                                        (o = v(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 0],
                                          6,
                                          4096336452,
                                        )),
                                        (d = v(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 7],
                                          10,
                                          1126891415,
                                        )),
                                        (u = v(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 14],
                                          15,
                                          2878612391,
                                        )),
                                        (l = v(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 5],
                                          21,
                                          4237533241,
                                        )),
                                        (o = v(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 12],
                                          6,
                                          1700485571,
                                        )),
                                        (d = v(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 3],
                                          10,
                                          2399980690,
                                        )),
                                        (u = v(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 10],
                                          15,
                                          4293915773,
                                        )),
                                        (l = v(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 1],
                                          21,
                                          2240044497,
                                        )),
                                        (o = v(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 8],
                                          6,
                                          1873313359,
                                        )),
                                        (d = v(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 15],
                                          10,
                                          4264355552,
                                        )),
                                        (u = v(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 6],
                                          15,
                                          2734768916,
                                        )),
                                        (l = v(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 13],
                                          21,
                                          1309151649,
                                        )),
                                        (o = v(
                                          o,
                                          l,
                                          u,
                                          d,
                                          S[a + 4],
                                          6,
                                          4149444226,
                                        )),
                                        (d = v(
                                          d,
                                          o,
                                          l,
                                          u,
                                          S[a + 11],
                                          10,
                                          3174756917,
                                        )),
                                        (u = v(
                                          u,
                                          d,
                                          o,
                                          l,
                                          S[a + 2],
                                          15,
                                          718787259,
                                        )),
                                        (l = v(
                                          l,
                                          u,
                                          d,
                                          o,
                                          S[a + 9],
                                          21,
                                          3951481745,
                                        )),
                                        (o = h(o, i)),
                                        (l = h(l, n)),
                                        (u = h(u, r)),
                                        (d = h(d, s));
                                    return (
                                      f(o) +
                                      f(l) +
                                      f(u) +
                                      f(d)
                                    ).toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  r = "/get-mp3/"
                                    .concat(n, "/")
                                    .concat(t.ts)
                                    .concat(t.path, "?track-id=")
                                    .concat(i, "&play=false");
                                return "https://".concat(t.host).concat(r);
                              })({
                                trackId: i,
                                srcData: e,
                                secretKey: this.secretKey,
                              });
                              t(a);
                            } catch (e) {
                              a(
                                new tv("Failed to create src link", {
                                  code: V.E_GET_MEDIA_SRC,
                                  cause: e,
                                  data: { trackId: i, causeAsObject: il(e) },
                                }),
                              );
                            }
                          })
                          .catch((e) => {
                            a(
                              new tv("Failed to get src data", {
                                code: V.E_GET_MEDIA_SRC,
                                cause: e,
                                data: { trackId: i, causeAsObject: il(e) },
                              }),
                            );
                          })
                      : a(
                          new tv("No storage url for entity", {
                            code: V.E_GET_MEDIA_SRC,
                          }),
                        );
                  })
                  .catch((e) => {
                    a(
                      new tv("Failed to get storage data", {
                        code: V.E_GET_MEDIA_SRC,
                        cause: e,
                        data: { trackId: i, causeAsObject: il(e) },
                      }),
                    );
                  });
              })
              .catch((e) => {
                a(
                  new tv("Failed to create sign", {
                    code: V.E_CREATE_SIGN,
                    cause: e,
                    data: { trackId: i, causeAsObject: il(e) },
                  }),
                );
              });
          });
        }
        constructor(e) {
          (0, $._)(this, "secretKey", void 0),
            (0, $._)(this, "resource", void 0),
            (0, $._)(this, "mediaConfigController", void 0);
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: i,
            mediaConfigController: n,
          } = e;
          (this.resource = new eM.H(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = n),
            (this.secretKey = i);
        }
      }
      class id extends tp {
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "GenerativeMediaProviderException"),
            Object.setPrototypeOf(this, id.prototype);
        }
      }
      class ic {
        async getMediaSource(e) {
          return tM(e.entity)
            ? this.getGenerativeSrc(e.entity.data)
            : new Promise((e, t) => {
                t(
                  new id("Provided entity is not generative entity", {
                    code: V.E_UNSUITABLE_ENTITY_TYPE,
                  }),
                );
              });
        }
        async getGenerativeSrc(e) {
          return new Promise((t, a) => {
            var i;
            (null === (i = e.meta.stream) || void 0 === i ? void 0 : i.url)
              ? t(e.meta.stream.url)
              : a(
                  new id("Failed to create generative src link", {
                    code: V.E_GET_MEDIA_SRC,
                  }),
                );
          });
        }
      }
      function im(e, t, a) {
        if (t.some((e) => e4(e))) return tX.n.SMART_PREVIEW;
        let i = a ? tX.n.LQ : tX.n.NQ;
        switch (e) {
          case tZ.n.HIGH_QUALITY:
            i = tX.n.LOSSLESS;
            break;
          case tZ.n.BALANCED:
            i = a ? tX.n.NQ : tX.n.HQ;
            break;
          case tZ.n.EFFICIENT:
            i = a ? tX.n.LQ : tX.n.NQ;
            break;
          case tZ.n.PREVIEW:
            i = tX.n.PREVIEW;
        }
        return i;
      }
      class ih extends tp {
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "GetFileInfoMediaProviderException"),
            Object.setPrototypeOf(this, ih.prototype);
        }
      }
      var ig = a(29506);
      class iy {
        getMediaSource(e) {
          let { entity: t, disableCache: a = !1 } = e,
            i = (0, ir.I)(),
            n = im(
              this.mediaConfigController.quality.value,
              [t],
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            r = ig.Q.join(""),
            s = !!a || t$(t, this.mediaSourceTtlMs, this.mediaConfigController);
          if (
            this.variables.isMediaSourcePreloadEnabled &&
            !s &&
            t.mediaSourceData
          )
            return "error" in t.mediaSourceData.data
              ? Promise.reject(
                  new ih("Error message in get-file-info response", {
                    code: V.E_GET_MEDIA_SRC,
                    data: {
                      trackId: t.data.meta.id,
                      quality: n,
                      codecs: r,
                      mediaSource: t.mediaSourceData.data,
                    },
                  }),
                )
              : t.mediaSourceData.data.urls[0]
                ? Promise.resolve(t.mediaSourceData.data.urls[0])
                : Promise.reject(
                    new ih("No urls in get-file-info response", {
                      code: V.E_GET_MEDIA_SRC,
                      data: {
                        trackId: t.data.meta.id,
                        quality: n,
                        codecs: r,
                        mediaSource: t.mediaSourceData.data,
                      },
                    }),
                  );
          let o = ""
            .concat(i)
            .concat(t.data.meta.id)
            .concat(n)
            .concat(r)
            .concat(this.transport);
          return new Promise((e, a) => {
            (0, ir.U)({ data: o, secretKey: this.secretKey })
              .then((s) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: i,
                    trackId: t.data.meta.id,
                    quality: n,
                    codecs: ig.Q,
                    transports: [this.transport],
                    sign: s,
                  })
                  .then((i) => {
                    if (
                      ((t.mediaSourceData = {
                        data: i.downloadInfo,
                        loadingTime: performance.now(),
                      }),
                      "error" in i.downloadInfo)
                    ) {
                      a(
                        new ih("Error message in get-file-info response", {
                          code: V.E_GET_MEDIA_SRC,
                          data: {
                            trackId: t.data.meta.id,
                            quality: n,
                            codecs: r,
                            mediaSource: i.downloadInfo,
                          },
                        }),
                      );
                      return;
                    }
                    if (!i.downloadInfo.urls[0]) {
                      a(
                        new ih("No urls in get-file-info response", {
                          code: V.E_GET_MEDIA_SRC,
                          data: {
                            trackId: t.data.meta.id,
                            quality: n,
                            codecs: r,
                            mediaSource: i.downloadInfo,
                          },
                        }),
                      );
                      return;
                    }
                    e(i.downloadInfo.urls[0]);
                  })
                  .catch((e) => {
                    a(
                      new ih("Error in get-file-info request", {
                        code: V.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: t.data.meta.id,
                          quality: n,
                          codecs: r,
                          causeAsObject: il(e),
                        },
                      }),
                    );
                  }),
              )
              .catch((e) => {
                a(
                  new ih("Error in creating sign for get-file-info request", {
                    code: V.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: t.data.meta.id,
                      quality: n,
                      codecs: r,
                      causeAsObject: il(e),
                    },
                  }),
                );
              });
          });
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e,
            a = (0, ir.I)(),
            i = im(
              this.mediaConfigController.quality.value,
              t,
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            n = ig.Q.join(""),
            r = t
              .reduce((e, t) => "".concat(e).concat(t.data.meta.id, ","), "")
              .slice(0, -1),
            s = ""
              .concat(a)
              .concat(r)
              .concat(i)
              .concat(n)
              .concat(this.transport);
          return new Promise((e, o) => {
            (0, ir.U)({ data: s, secretKey: this.secretKey })
              .then((s) => {
                this.resource
                  .getFileInfoBatch({
                    tsInSeconds: a,
                    trackIds: r,
                    quality: i,
                    codecs: ig.Q,
                    transports: [this.transport],
                    sign: s,
                  })
                  .then((a) => {
                    for (let e of a.downloadInfos) {
                      let a = t.find((t) => t.data.meta.id === e.trackId);
                      a &&
                        (a.mediaSourceData = {
                          loadingTime: performance.now(),
                          data: e,
                        });
                    }
                    e(a.downloadInfos);
                  })
                  .catch((e) => {
                    o(
                      new ih("Error in get-file-info/batch request", {
                        code: V.E_GET_MEDIA_SRC,
                        cause: e,
                        data: {
                          trackId: r,
                          quality: i,
                          codecs: n,
                          causeAsObject: il(e),
                        },
                      }),
                    );
                  });
              })
              .catch((e) => {
                o(
                  new ih("Error in creating sign for get-file-info request", {
                    code: V.E_CREATE_SIGN,
                    cause: e,
                    data: {
                      trackId: r,
                      quality: i,
                      codecs: n,
                      causeAsObject: il(e),
                    },
                  }),
                );
              });
          });
        }
        constructor(e) {
          (0, $._)(this, "secretKey", void 0),
            (0, $._)(this, "resource", void 0),
            (0, $._)(this, "mediaConfigController", void 0),
            (0, $._)(this, "transport", void 0),
            (0, $._)(this, "variables", void 0),
            (0, $._)(this, "mediaSourceTtlMs", void 0);
          let {
            resource: t,
            secretKey: a,
            mediaConfigController: i,
            transport: n,
            variables: r,
            mediaSourceTtlMs: s,
          } = e;
          (this.resource = t),
            (this.secretKey = a),
            (this.mediaConfigController = i),
            (this.transport = n),
            (this.variables =
              null != r
                ? r
                : {
                    isMediaSourcePreloadEnabled: !1,
                    useNewCorrespondenceBetweenQualityParams: !0,
                  }),
            (this.mediaSourceTtlMs = s);
        }
      }
      class ip {
        async getMediaSource(e) {
          return tM(e.entity)
            ? this.generativeProvider.getMediaSource(e)
            : (this.variables.switchToStrmWithoutEncrypt
                ? this.getFileInfoProvider
                : this.downloadInfoProvider
              ).getMediaSource(e);
        }
        getMediaSourceBatch(e) {
          let { entities: t } = e;
          return t.some((e) => tM(e))
            ? Promise.reject(
                new tp(
                  "Can not use getMediaSourceBatch for generative entities",
                  { code: V.E_UNSUITABLE_ENTITY_TYPE },
                ),
              )
            : this.variables.switchToStrmWithoutEncrypt
              ? this.getFileInfoProvider.getMediaSourceBatch({ entities: t })
              : Promise.resolve([]);
        }
        constructor(e) {
          (0, $._)(this, "generativeProvider", new ic()),
            (0, $._)(this, "downloadInfoProvider", void 0),
            (0, $._)(this, "getFileInfoProvider", void 0),
            (0, $._)(this, "variables", void 0),
            (this.variables = e.variables || {}),
            (this.downloadInfoProvider = new iu(e.downloadInfoProviderParams)),
            (this.getFileInfoProvider = new iy(e.getFileInfoProviderParams));
        }
      }
      class iv extends ey.y {
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, $._)(this, "name", "YaMusicEntityProviderException"),
            Object.setPrototypeOf(this, iv.prototype);
        }
      }
      class iS {
        async loadEntities(e) {
          let { trackIds: t } = (function (e) {
            let t = [];
            return (
              e.forEach((e) => {
                let { context: a, entity: i } = e,
                  n = i.data.meta.id;
                if (!i.data.fromCurrentContext) {
                  t.push(i.data.meta.id);
                  return;
                }
                (null == a ? void 0 : a.data.type) === eu.A.Album &&
                  (n = "".concat(i.data.meta.id, ":").concat(a.data.meta.id)),
                  tf(a) &&
                    "albumId" in i.data.meta &&
                    i.data.meta.albumId &&
                    (n = ""
                      .concat(i.data.meta.id, ":")
                      .concat(i.data.meta.albumId)),
                  t.push(n);
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
                t && a.push({ ...t.entity.data, type: ev.A.Unknown, meta: i });
              }
              return a;
            })
            .catch((e) => {
              throw new iv("Failed to get entities meta", { cause: il(e) });
            });
        }
        constructor(e) {
          (0, $._)(this, "resource", void 0);
          let { httpClient: t, config: a } = e;
          this.resource = new eM.H(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
      }
      var iE = a(53912),
        ib = a(21045),
        i_ = a(61605),
        iP = a(91809),
        iC = a(19785);
      (J || (J = {})).MAIN = "MAIN";
      class iN {
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
          let t = this.playbacks.get(J.MAIN);
          if (void 0 !== t) return t;
          throw new ey.y("MAIN playback was not created", {
            code: "NO_MAIN_PLAYBACK",
          });
        }
        checkPlaybackBlockingStatus() {
          var e, t;
          let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : J.MAIN,
            i =
              null === (e = this.activePlayback.value) || void 0 === e
                ? void 0
                : e.getId(),
            n = i === a;
          return ((null === (t = this.activePlayback.value) || void 0 === t
            ? void 0
            : t.isBlocking) ||
            n) &&
            !n
            ? { status: iC.pr.BLOCKED, blockingPlaybackId: i }
            : { status: iC.pr.UNBLOCKED };
        }
        callIfUnblocked(e, t) {
          let { status: a, blockingPlaybackId: i } =
            this.checkPlaybackBlockingStatus(t);
          return a === iC.pr.UNBLOCKED
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
            let a = new ec.Vb({
              id: e,
              isBlocking: t.isBlocking || !1,
              factory: t.factory,
              mediaProvider: t.mediaProvider,
              entityProvider: t.entityProvider,
              audioCore: t.audioCore,
              hooks: (0, iC.Hu)(),
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
          (0, $._)(this, "activePlayback", new eh.wi(null)),
            (0, $._)(this, "playbacks", new Map());
        }
      }
      class ik {
        get state() {
          return this.playbackController.getPlayback().state;
        }
        getState(e) {
          return this.playbackController.getPlayback(e).state;
        }
        getSource(e) {
          return this.playbackController.getPlayback(e).source;
        }
        playContext(e, t) {
          let a = this.playbackController.getPlayback(t);
          try {
            let { contextData: i } = e,
              n = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .playContext({
                    context: n,
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
              n = this.factory.createContext({ data: i });
            return this.playbackController.callIfUnblocked(
              () =>
                a
                  .setContext({
                    context: n,
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
        remove(e) {
          let { positions: t, playbackId: a, silent: i } = e,
            n = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => n.remove(t, i), a);
        }
        inject(e) {
          let { entitiesData: t, position: a, playbackId: i, silent: n } = e,
            r = this.playbackController.getPlayback(i);
          this.playbackController.callIfUnblocked(() => r.inject(t, a, n), i);
        }
        injectNext(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            n = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => n.injectNext(t, i), a);
        }
        injectLast(e) {
          let { entitiesData: t, playbackId: a, silent: i } = e,
            n = this.playbackController.getPlayback(a);
          this.playbackController.callIfUnblocked(() => n.injectLast(t, i), a);
        }
        constructor(e) {
          if (
            ((0, $._)(this, "factory", void 0),
            (0, $._)(this, "playbackController", void 0),
            (this.factory = e.factory),
            (this.playbackController = e.playbackController),
            this.playbackController.createPlayback(J.MAIN, {
              factory: e.factory,
              audioCore: e.audioCore,
              mediaProvider: e.mediaProvider,
              entityProvider: e.entityProvider,
              playbackConfig: e.playbackConfig,
            }),
            e.plugins)
          ) {
            let t = this.playbackController.getPlayback(J.MAIN);
            for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
          }
        }
      }
      var iI = a(26609),
        iT = a(65735),
        iA = a(65591),
        iD = a(34785),
        ix = a(20794);
      let iL = (e) => {
        let { audioLoader: t, children: a } = e;
        return (0, Z.use)(t), a;
      };
      var iR = a(62364);
      let iG = null,
        iw = null,
        iO = null,
        iV = [
          ix.BUb.YmPlayerQuality,
          ix.BUb.YmPlayerShuffle,
          ix.BUb.YmPlayerPrevVolume,
          ix.BUb.YmPlayerVolume,
          ix.BUb.YmPlayerRepeatMode,
        ],
        iM = (e) => {
          let { children: t, hostTld: a, userAgent: i, quality: n } = e,
            r = (0, ix.uK4)(),
            {
              sonataState: s,
              experiments: o,
              library: l,
              trailer: u,
              user: d,
              continueListen: c,
            } = (0, ix.oR4)(),
            { isPassToProduct: m, isFreemium: h } = (0, ix.NMB)(),
            g = (0, ix.wLl)(),
            y = r.get(ix.V0J),
            { language: p } = (0, ix.ZSk)(),
            v = (0, ix.ozq)(),
            f = (0, iT.s)(),
            S = (0, ix.pL3)(),
            E = (0, Z.useMemo)(() => {
              let e = i.browserName || "Browser",
                t = (0, ix.bop)() || i.browserVersion || "";
              return (
                i.browserName,
                { title: "Music Desktop App", appName: e, appVersion: t }
              );
            }, [i.browserName, i.browserVersion]),
            b = (0, Z.useMemo)(() => (iG || (iG = new ii(n)), iG), [n]),
            _ = "Safari" !== i.browserName && "iOS" !== i.OSFamily,
            P = (0, Z.useMemo)(
              () =>
                iO ||
                (iO = new e9({ useAnalyser: _, useEqualizer: _, useFade: !1 })),
              [_],
            ),
            C = (0, Z.useMemo)(() => {
              let e;
              if (iw) return iw;
              let t = r.get(ix.U5t),
                n = r.get(ix.pIE)({ credentials: "include" }),
                s = r.get(ix.xit),
                {
                  resources: c,
                  player: {
                    gateway: { prefixUrl: m, headers: y },
                    configVariablesMainPlayback: C,
                    configVariablesTrailerPlayback: N,
                  },
                  ynisonConnectionConfig: k,
                } = t,
                { timeouts: I, retryPolicyConfig: T } = c.musicExternalApi,
                A = new e1({
                  contextFactoryParams: {
                    httpClient: n,
                    logger: g,
                    config: {
                      params: {
                        common: {
                          client: (0, iD.$)(),
                          device: (0, ix.qcA)(),
                          language: p,
                          oauth: s.token,
                        },
                      },
                      retryPolicyConfig: T,
                      resourceTimeoutsConfig: I,
                      gateway: {
                        prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                        headers: y,
                      },
                      contextVariables: {
                        vibe: {
                          get sendFeedbackToSessionTracks() {
                            return o.checkExperiment(
                              ix.peG.WebNextWaveNewFeedbacks,
                              "on",
                            );
                          },
                        },
                      },
                    },
                  },
                  entityFactoryParams: { likeStore: l },
                }),
                {
                  overembed: D,
                  externalDomain: x,
                  ...L
                } = {
                  params: {
                    common: {
                      client: (0, iD.$)(),
                      device: (0, ix.qcA)(),
                      language: p,
                      oauth: s.token,
                    },
                  },
                  retryPolicyConfig: T,
                  timeouts: I.tracksResource,
                  gateway: { prefixUrl: (0, el.zJ)(m, a, ix.MgS), headers: y },
                  overembed: t.player.overembed,
                  externalDomain: t.player.externalDomain,
                },
                R = new ib.d(n, {
                  params: L.params,
                  gateway: L.gateway,
                  timeouts: I.getFileInfoResource,
                  retryPolicyConfig: T,
                });
              S.storeContainer.fileStorage &&
                S.storeContainer.tracksStore &&
                S.storeContainer.usersTracksStore &&
                d.puid &&
                (e = (0, iP.kU)(R, {
                  fileStorage: S.storeContainer.fileStorage,
                  tracksStore: S.storeContainer.tracksStore,
                  userTracksStore: S.storeContainer.usersTracksStore,
                  uid: d.puid,
                  logger: g,
                }));
              let G = new ip({
                  downloadInfoProviderParams: {
                    httpClient: n,
                    resourceConfig: { ...L, overembed: D, externalDomain: x },
                    secretKey: t.player.secretKey,
                    mediaConfigController: b,
                  },
                  getFileInfoProviderParams: {
                    resource: null != e ? e : R,
                    secretKey: t.player.secretKey,
                    mediaConfigController: b,
                    transport: i_.J.RAW,
                    variables: {
                      get useNewCorrespondenceBetweenQualityParams() {
                        return (
                          o.checkExperiment(
                            ix.peG.WebNextEnableNewQuality,
                            "on",
                          ) ||
                          o.checkExperiment(
                            ix.peG.WebNextEnableNewQuality,
                            "prod",
                          )
                        );
                      },
                      get isMediaSourcePreloadEnabled() {
                        let e = o.checkExperiment(
                          ix.peG.WebNextSwitchToStrmWithoutEncrypt,
                          "on",
                        );
                        return (
                          o.checkExperiment(
                            ix.peG.WebNextGetFileInfoPreload,
                            "on",
                          ) && e
                        );
                      },
                    },
                    mediaSourceTtlMs: C.mediaSourceTtlMs,
                  },
                  variables: {
                    get switchToStrmWithoutEncrypt() {
                      let e =
                          o.checkExperiment(
                            ix.peG.WebNextEnableNewQuality,
                            "on",
                          ) ||
                          o.checkExperiment(
                            ix.peG.WebNextEnableNewQuality,
                            "prod",
                          ),
                        t = o.checkExperiment(
                          ix.peG.WebNextSwitchToStrmWithoutEncrypt,
                          "on",
                        );
                      return e || t;
                    },
                  },
                }),
                w = new iS({
                  httpClient: n,
                  config: {
                    params: {
                      common: {
                        client: (0, iD.$)(),
                        device: (0, ix.qcA)(),
                        language: p,
                        oauth: s.token,
                      },
                    },
                    retryPolicyConfig: T,
                    timeouts: I.tracksResource,
                    gateway: {
                      prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                      headers: y,
                    },
                  },
                }),
                O = new iN(),
                V = new e8(f),
                M = [
                  new tu(),
                  new td(),
                  new tc(),
                  new tV({
                    httpClient: n,
                    playsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iD.$)(),
                          device: (0, ix.qcA)(),
                          language: p,
                          oauth: s.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                        headers: y,
                      },
                    },
                    variables: {
                      get disableSendPlaysOnTrackStart() {
                        return o.checkExperiment(
                          ix.peG.WebNextDisableSendPlaysOnTrackStart,
                          "on",
                        );
                      },
                      get enableLocalStoredPlaysData() {
                        return o.checkExperiment(
                          ix.peG.WebNextPlayAudioHeartBeat,
                          "on",
                        );
                      },
                    },
                  }),
                  new tB({
                    browserName: i.browserName,
                    browserVersion: i.browserVersion,
                  }),
                  new tq({ logger: g }),
                  new tH(b.quality),
                  new tz({
                    httpClient: n,
                    streamsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iD.$)(),
                          device: (0, ix.qcA)(),
                          language: p,
                          oauth: s.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                        headers: y,
                      },
                    },
                  }),
                  new tQ({
                    mediaConfigController: b,
                    transport: V,
                    variables: {
                      get enableDebugMode() {
                        return !1;
                      },
                    },
                  }),
                  new t0({
                    mediaProvider: G,
                    mediaConfigController: b,
                    config: {
                      checkForLoadWindowSize: C.checkForLoadWindowSize,
                      loadWindowSize: C.loadWindowSize,
                      mediaSourceTtlMs: C.mediaSourceTtlMs,
                    },
                    variables: {
                      get isMediaSourcePreloadEnabled() {
                        let e = o.checkExperiment(
                          ix.peG.WebNextSwitchToStrmWithoutEncrypt,
                          "on",
                        );
                        return (
                          o.checkExperiment(
                            ix.peG.WebNextGetFileInfoPreload,
                            "on",
                          ) && e
                        );
                      },
                    },
                  }),
                  new t5({
                    onTrailerPaused: () => {
                      u.setIsManuallyPaused(!0);
                    },
                    onTrailerPlaying: () => {
                      u.setIsManuallyPaused(!1);
                    },
                    playbackController: O,
                    trailerPlaybackParams: {
                      id: ix.jiA.TRAILER,
                      plugins: [
                        new e9({ useFade: _ }),
                        new tu(),
                        new tq({ logger: g }),
                        new tc(),
                        new tQ({
                          mediaConfigController: b,
                          transport: V,
                          variables: {
                            get enableDebugMode() {
                              return !1;
                            },
                          },
                        }),
                        new tV({
                          httpClient: n,
                          playsResourceConfig: {
                            params: {
                              common: {
                                client: (0, iD.$)(),
                                device: (0, ix.qcA)(),
                                language: p,
                                oauth: s.token,
                              },
                            },
                            gateway: {
                              prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                              headers: y,
                            },
                          },
                          variables: {
                            get disableSendPlaysOnTrackStart() {
                              return o.checkExperiment(
                                ix.peG.WebNextDisableSendPlaysOnTrackStart,
                                "on",
                              );
                            },
                            get enableLocalStoredPlaysData() {
                              return o.checkExperiment(
                                ix.peG.WebNextPlayAudioHeartBeat,
                                "on",
                              );
                            },
                          },
                          storePlaysProgressIntervalMs: 5e3,
                        }),
                        new t4({
                          variables: {
                            get enableSingleTabPlayback() {
                              return o.checkExperiment(
                                ix.peG.WebNextSingleTabPlayback,
                                "on",
                              );
                            },
                          },
                        }),
                      ],
                      factory: A,
                      audioCore: new eo(),
                      mediaProvider: G,
                      entityProvider: w,
                      playbackConfig: {
                        mediaElementErrorReloadCount:
                          N.mediaElementErrorReloadCount,
                        windowSize: N.windowSize,
                        setupQueueWindowSize: N.setupQueueWindowSize,
                      },
                    },
                  }),
                  new a6({
                    factory: A,
                    deviceConfig: E,
                    connectionConfig: k,
                    variables: {
                      get enableYnisonConnection() {
                        return o.checkExperiment(
                          ix.peG.WebNextEnableYnison,
                          "on",
                        );
                      },
                    },
                  }),
                  new a9({
                    advertModule: v,
                    httpClient: n,
                    afterTrackResourceConfig: {
                      params: {
                        common: {
                          client: (0, iD.$)(),
                          device: (0, ix.qcA)(),
                          language: p,
                          oauth: s.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                        headers: y,
                      },
                    },
                    adsResourceConfig: {
                      params: {
                        common: {
                          client: (0, iD.$)(),
                          device: (0, ix.qcA)(),
                          language: p,
                          oauth: s.token,
                        },
                      },
                      gateway: {
                        prefixUrl: (0, el.zJ)(m, a, ix.MgS),
                        headers: y,
                      },
                    },
                    variables: {
                      get disabled() {
                        return d.hasPlus;
                      },
                    },
                  }),
                  new t4({
                    variables: {
                      get enableSingleTabPlayback() {
                        return o.checkExperiment(
                          ix.peG.WebNextSingleTabPlayback,
                          "on",
                        );
                      },
                    },
                  }),
                ];
              return (
                null == v || v.createAudioAdvertPlayback(O),
                P && M.push(P),
                d.isAuthorized &&
                  !h &&
                  M.push(new ia({ factory: A, platform: "desktop" })),
                (iw = new ik({
                  factory: A,
                  playbackController: O,
                  audioCore: new eo(),
                  plugins: M,
                  mediaProvider: G,
                  entityProvider: w,
                  playbackConfig: {
                    mediaElementErrorReloadCount:
                      C.mediaElementErrorReloadCount,
                    windowSize: C.windowSize,
                    setupQueueWindowSize: C.setupQueueWindowSize,
                  },
                }))
              );
            }, [
              r,
              y,
              g,
              p,
              a,
              l,
              S.storeContainer.fileStorage,
              S.storeContainer.tracksStore,
              S.storeContainer.usersTracksStore,
              d.puid,
              d.isAuthorized,
              d.hasPlus,
              b,
              f,
              i.browserName,
              i.browserVersion,
              _,
              E,
              v,
              P,
              h,
              o,
              u,
            ]);

          const sendPlayerStateDefault = (ve) => {
            (0, iA.Pt)({
              status: ve.state.playerState.status.value,
              isPlaying: ve.state.playerState.status.value === ec.Xz.PLAYING,
              canMoveForward:
                ve.state.currentContext.value?.availableActions.moveForward
                  .value,
              canMoveBackward:
                ve.state.currentContext.value?.availableActions.moveBackward
                  .value,
              track:
                ve.state.queueState.currentEntity.value?.entity.entityData.meta,
              progress: ve.state.playerState.progress.value?.position,
              availableActions: {
                moveBackward:
                  ve.state.currentContext.value?.availableActions.moveBackward
                    .value,
                moveForward:
                  ve.state.currentContext.value?.availableActions.moveForward
                    .value,
                repeat:
                  ve.state.currentContext.value?.availableActions.repeat.value,
                shuffle:
                  ve.state.currentContext.value?.availableActions.shuffle.value,
                speed:
                  ve.state.currentContext.value?.availableActions.speed.value,
              },
              actionsStore: {
                repeat: ve.state.queueState.repeat.value,
                shuffle: ve.state.queueState.shuffle.value,
                isLiked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
                isDisliked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
              },
            });
          };
          const sendPlayerStatePlaying = (ve) => {
            (0, iA.Pt)({
              status: ec.Xz.PLAYING,
              isPlaying: true,
              canMoveForward:
                ve.state.currentContext.value?.availableActions.moveForward
                  .value,
              canMoveBackward:
                ve.state.currentContext.value?.availableActions.moveBackward
                  .value,
              track:
                ve.state.queueState.currentEntity.value?.entity.entityData.meta,
              progress: ve.state.playerState.progress.value?.position,
              availableActions: {
                moveBackward:
                  ve.state.currentContext.value?.availableActions.moveBackward
                    .value,
                moveForward:
                  ve.state.currentContext.value?.availableActions.moveForward
                    .value,
                repeat:
                  ve.state.currentContext.value?.availableActions.repeat.value,
                shuffle:
                  ve.state.currentContext.value?.availableActions.shuffle.value,
                speed:
                  ve.state.currentContext.value?.availableActions.speed.value,
              },
              actionsStore: {
                repeat: ve.state.queueState.repeat.value,
                shuffle: ve.state.queueState.shuffle.value,
                isLiked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
                isDisliked:
                  ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                    ve.state.queueState.currentEntity.value?.entity.entityData
                      .meta.id,
                  ),
              },
            });
          };

          (0, iA.A4)(C),
            (0, Z.useEffect)(() => {
              let e, t, a, i, n;
              let r =
                  null == C
                    ? void 0
                    : C.state.queueState.currentEntity.onChange((e) => {
                        var t, a, i;
                        let n = null == e ? void 0 : e.context.data.type,
                          r = null == e ? void 0 : e.context.data.meta.id;
                        if (
                          (s.setEntityMeta(
                            null !== (a = null == e ? void 0 : e.entity) &&
                              void 0 !== a
                              ? a
                              : null,
                          ),
                          null == e ? void 0 : e.context.data)
                        ) {
                          if ("filter" in e.context.data) {
                            let t = null == e ? void 0 : e.context.data.filter;
                            s.setPlaylistFilter(t);
                          }
                          (null == e ? void 0 : e.context.data.type) ===
                            eu.A.Vibe && s.setPlaylistFilter(void 0);
                        }
                        n && s.setContextType(n), r && s.setContextId(r);
                        sendPlayerStatePlaying(C);
                        let o = C.state.queueState.index.value;
                        C.state.queueState.order.value.length > 0 &&
                          "number" == typeof o &&
                          (s.setCurrentlyPlayingTrackIndex(o),
                          (null === (i = s.entityMeta) || void 0 === i
                            ? void 0
                            : i.isNonMusic) && c.saveTrackIndex(o)),
                          (null === (t = s.entityMeta) || void 0 === t
                            ? void 0
                            : t.isNonMusic) &&
                            n &&
                            r &&
                            c.saveTrack({
                              contextType: n,
                              contextId: r,
                              track: s.entityMeta,
                            });
                      }),
                o =
                  null == C
                    ? void 0
                    : C.state.queueState.order.onChange((e) => {
                        let t = C.state.queueState.index.value;
                        if (e) {
                          let a = e[t];
                          C.state.queueState.order.value.length > 0 &&
                            "number" == typeof a &&
                            s.setCurrentlyPlayingTrackIndex(a);
                        }
                      }),
                l =
                  null == C
                    ? void 0
                    : C.state.playerState.status.onChange((e) => {
                        e && (s.setStatus(e), sendPlayerStateDefault(C));
                      }),
                seekTracker =
                  null == C
                    ? void 0
                    : C.state.playerState.event.onChange(() => {
                        if (
                          C.state.playerState.event.value === ec.KX.SET_PROGRESS
                        ) {
                          sendPlayerStateDefault(C);
                        }
                      }),
                u =
                  null == C
                    ? void 0
                    : C.state.currentContext.onChange(() => {
                        var r, o, l, u, d, c;
                        null == e || e(),
                          null == t || t(),
                          null == a || a(),
                          null == i || i(),
                          null == n || n();
                        let m =
                          null !== (c = y.get(ix.BUb.YmPlayerRepeatMode)) &&
                          void 0 !== c
                            ? c
                            : iE.zq.NONE;
                        C.setRepeatMode(m);
                        let h = !!y.get(ix.BUb.YmPlayerShuffle);
                        C.setShuffle(h),
                          (e =
                            null == C
                              ? void 0
                              : null === (r = C.state.currentContext.value) ||
                                  void 0 === r
                                ? void 0
                                : r.availableActions.moveBackward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == C
                                        ? void 0
                                        : null ===
                                              (e =
                                                C.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveBackward
                                              .value);
                                      s.setCanMoveBackward(t),
                                        sendPlayerStateDefault(C);
                                    },
                                  )),
                          (t =
                            null == C
                              ? void 0
                              : null === (o = C.state.currentContext.value) ||
                                  void 0 === o
                                ? void 0
                                : o.availableActions.moveForward.onChange(
                                    () => {
                                      var e;
                                      let t = !!(null == C
                                        ? void 0
                                        : null ===
                                              (e =
                                                C.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.moveForward
                                              .value);
                                      s.setCanMoveForward(t),
                                        sendPlayerStateDefault(C);
                                    },
                                  )),
                          (a =
                            null == C
                              ? void 0
                              : null === (l = C.state.currentContext.value) ||
                                  void 0 === l
                                ? void 0
                                : l.availableActions.repeat.onChange(() => {
                                    var e;
                                    let t =
                                      null == C
                                        ? void 0
                                        : null ===
                                              (e =
                                                C.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.repeat.value;
                                    "boolean" == typeof t &&
                                      s.setCanChangeRepeatMode(t);
                                    sendPlayerStateDefault(C);
                                  })),
                          (i =
                            null == C
                              ? void 0
                              : null === (u = C.state.currentContext.value) ||
                                  void 0 === u
                                ? void 0
                                : u.availableActions.shuffle.onChange(() => {
                                    var e;
                                    let t =
                                      null == C
                                        ? void 0
                                        : null ===
                                              (e =
                                                C.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.shuffle.value;
                                    "boolean" == typeof t && s.setCanShuffle(t);
                                    sendPlayerStateDefault(C);
                                  })),
                          (n =
                            null == C
                              ? void 0
                              : null === (d = C.state.currentContext.value) ||
                                  void 0 === d
                                ? void 0
                                : d.availableActions.speed.onChange(() => {
                                    var e;
                                    let t =
                                      null == C
                                        ? void 0
                                        : null ===
                                              (e =
                                                C.state.currentContext.value) ||
                                            void 0 === e
                                          ? void 0
                                          : e.availableActions.speed.value;
                                    "boolean" == typeof t &&
                                      (s.setCanSpeed(t),
                                      !t && C && C.setSpeed(1));
                                  }));
                      }),
                d =
                  null == C
                    ? void 0
                    : C.state.playerState.volume.onChange(() => {
                        let e = C.state.playerState.volume.value;
                        "number" == typeof e && s.setVolume(e);
                      }),
                m =
                  null == C
                    ? void 0
                    : C.state.queueState.repeat.onChange(() => {
                        let e = C.state.queueState.repeat.value;
                        s.setRepeatMode(e),
                          y.set(ix.BUb.YmPlayerRepeatMode, e, { expires: 365 });
                        sendPlayerStateDefault(C);
                      }),
                h =
                  null == C
                    ? void 0
                    : C.state.queueState.shuffle.onChange(() => {
                        let e = C.state.queueState.shuffle.value;
                        s.setShuffle(e),
                          y.set(ix.BUb.YmPlayerShuffle, e, { expires: 365 });
                        sendPlayerStateDefault(C);
                      });
              return () => {
                null == r || r(),
                  null == o || o(),
                  null == l || l(),
                  null == u || u(),
                  null == seekTracker || seekTracker(),
                  null == d || d(),
                  null == m || m(),
                  null == h || h();
              };
            }, [C, s, y, c]),
            (0, Z.useEffect)(() => {
              let e = y.get(ix.BUb.YmPlayerVolume);
              "number" == typeof e
                ? (null == C || C.setVolume(e), s.setVolume(e))
                : (null == C || C.setVolume(1), s.setVolume(1));
            }, [y, C, s]);
          let N = (0, Z.useCallback)(() => {
            if (!d.isAuthorized || m) return tZ.n.PREVIEW;
            if (h) return tZ.n.EFFICIENT;
            let e = !o.isRejected(),
              t =
                o.checkExperiment(ix.peG.WebNextEnableNewQuality, "on") ||
                o.checkExperiment(ix.peG.WebNextEnableNewQuality, "prod"),
              a = y.get(ix.BUb.YmPlayerQuality);
            if (
              d.isAuthorized &&
              e &&
              !t &&
              (a === tZ.n.HIGH_QUALITY || a === ix.qql.HQ_PLUS)
            )
              return (
                y.set(ix.BUb.YmPlayerQuality, tZ.n.BALANCED, { expires: 365 }),
                tZ.n.BALANCED
              );
            if (a) {
              if (Object.values(ix.qql).includes(a)) {
                let e = (0, ix.RE8)(a);
                return y.set(ix.BUb.YmPlayerQuality, e, { expires: 365 }), e;
              }
              return a;
            }
            return (
              y.set(ix.BUb.YmPlayerQuality, tZ.n.BALANCED, { expires: 365 }),
              tZ.n.BALANCED
            );
          }, [o, y, m, h, d.isAuthorized]);
          return (
            (0, Z.useEffect)(() => {
              b.setQuality(N()), s.setQuality(N());
            }, [b, s, N]),
            (0, Z.useEffect)(() => {
              (0, iI.iJ)(y, iV);
            }, [y]),
            (0, Q.jsx)(ix.Xe$.Provider, {
              value: b,
              children: (0, Q.jsx)(ix.R8o.Provider, {
                value: C,
                children: (0, Q.jsxs)(ix.yZB.Provider, {
                  value: P,
                  children: [(0, Q.jsx)(iR.WebAudioInitializer, {}), t],
                }),
              }),
            })
          );
        },
        ij = (0, X.Pi)((e) => {
          let { children: t, hostTld: a, userAgent: i, quality: n } = e,
            r = (0, ix.Klg)();
          return (0, Q.jsx)(iL, {
            audioLoader: r,
            children: (0, Q.jsx)(iM, {
              hostTld: a,
              userAgent: i,
              quality: n,
              children: t,
            }),
          });
        });
    },
    62777: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          StoreProvider: function () {
            return tl;
          },
        });
      var i,
        n,
        r,
        s,
        o = a(95660),
        l = a(44744),
        u = a(97898),
        d = a(97667),
        c = a(71859);
      a(44539);
      var m = a(26609),
        h = a(20794),
        g = a(32945),
        y = a(53912),
        p = a(37460),
        v = a(94370);
      let f = {
        experiments: {
          loadingState: h.Gui.IDLE,
          experiments: {},
          overwrittenExperiments: {},
        },
        user: {
          account: { loadingState: h.Gui.IDLE },
          settings: { loadingState: h.Gui.IDLE },
        },
        wizard: {
          loadingState: h.Gui.IDLE,
          modal: {},
          savedLikedArtists: [],
          likedArtists: [],
          unlikedArtists: [],
        },
        collection: {
          albums: {
            loadingState: h.Gui.IDLE,
            upcomingAlbumsLoadingState: h.Gui.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: h.Gui.IDLE, items: [] },
          playlistsLiked: { loadingState: h.Gui.IDLE, items: [] },
          artists: { loadingState: h.Gui.IDLE, items: [] },
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE, data: [] },
          },
          shelf: {
            recentlyPlayed: { loadingState: h.Gui.IDLE },
            newEpisodes: { loadingState: h.Gui.IDLE },
            liked: { loadingState: h.Gui.IDLE },
          },
          nonMusicLiked: { loadingState: h.Gui.IDLE, items: [] },
          dislikes: {
            artists: { loadingState: h.Gui.IDLE },
            tracks: { loadingState: h.Gui.IDLE },
          },
        },
        main: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE, data: [] },
          },
        },
        nonMusic: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE, data: [] },
          },
          albums: { loadingState: h.Gui.IDLE },
          categorySubpage: { loadingState: h.Gui.IDLE },
          categoryPlaylistsSubpage: { loadingState: h.Gui.IDLE },
        },
        kids: {
          landing: {
            loadingState: h.Gui.IDLE,
            tabs: { loadingState: h.Gui.IDLE, data: [] },
          },
        },
        settings: {
          layout: null,
          isLandscape: !1,
          isMobileLandscapeHeight: !1,
        },
        currentTrackInfo: {
          trackLoadingState: h.Gui.IDLE,
          creditsLoadingState: h.Gui.IDLE,
          descriptionLoadingState: h.Gui.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
          modal: {},
        },
        trackLyrics: {
          loadingState: h.Gui.IDLE,
          lyrics: null,
          lyricId: null,
          externalLyricId: null,
          track: null,
          modal: {},
        },
        album: {
          loadingState: h.Gui.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          allTracksUnfinished: !1,
          donations: { loadingState: h.Gui.IDLE, items: [] },
          latestGenreAlbums: { loadingState: h.Gui.IDLE, items: [] },
          otherArtistAlbums: { loadingState: h.Gui.IDLE, items: [] },
          relatedContent: { loadingState: h.Gui.IDLE, items: [] },
        },
        artist: {
          loadingState: h.Gui.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          clips: [],
          fullTracksListSubpage: { loadingState: h.Gui.IDLE },
          albumsSubpage: { loadingState: h.Gui.IDLE },
          concertsSubpage: { loadingState: h.Gui.IDLE },
          similarArtistsSubPage: { loadingState: h.Gui.IDLE },
          familiarInfo: { loadingState: h.Gui.IDLE },
          familiarSubpage: { loadingState: h.Gui.IDLE },
        },
        libraryAllIds: {
          loadingState: h.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        librarySync: {
          loadingState: h.Gui.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: p.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: y.zq.NONE,
          quality: g.n.BALANCED,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: h.Gui.IDLE,
          searchLoadingState: h.Gui.IDLE,
          meta: null,
          items: [],
          initialItems: [],
          searchItems: {},
          similarPlaylists: [],
          searchText: "",
          filters: { loadingState: h.Gui.IDLE },
          shouldSendEventOnTabOpened: !0,
        },
        slides: {
          userSlidesLoadingState: h.Gui.IDLE,
          artistSlidesLoadingState: h.Gui.IDLE,
          userItems: [],
          artistItems: [],
        },
        vibe: {
          getLastLoadingState: h.Gui.IDLE,
          vibeResetLoadingState: h.Gui.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: h.Gui.IDLE,
          results: [],
          history: { loadingState: h.Gui.IDLE, items: [] },
          mixes: { loadingState: h.Gui.IDLE, items: [] },
        },
        vibeSettings: { loadingState: h.Gui.IDLE },
        pinsCollection: { loadingState: h.Gui.IDLE, index: {} },
        genre: {
          loadingState: h.Gui.IDLE,
          albumsSubpage: { loadingState: h.Gui.IDLE },
          artistsSubpage: { loadingState: h.Gui.IDLE },
          playlistsSubpage: { loadingState: h.Gui.IDLE },
        },
        genres: { title: null, loadingState: h.Gui.IDLE, items: [] },
        mixes: { loadingState: h.Gui.IDLE, items: [] },
        tag: {
          tagLoadingState: h.Gui.IDLE,
          playlistsLoadingState: h.Gui.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          tracksSubPage: { loadingState: h.Gui.IDLE, items: [] },
          podcastsSubPage: { loadingState: h.Gui.IDLE, items: [] },
        },
        post: { loadingState: h.Gui.IDLE },
        landingBlockEntities: { loadingState: h.Gui.IDLE },
        contextMenuPlaylists: { loadingState: h.Gui.IDLE, items: [] },
        musicHistory: { loadingState: h.Gui.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: h.Gui.IDLE },
        myMusic: { downloadedTracks: { loadingState: h.Gui.IDLE } },
        trailer: {
          loadingState: h.Gui.IDLE,
          withAnimation: !0,
          shouldAutoStartPlaying: !0,
          shouldSendEventOnTracksShowed: !0,
          modal: {},
          sonataStatusBeforeTrailerStart: p.Xz.IDLE,
          isManuallyPaused: !0,
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: p.Xz.IDLE,
          },
        },
        communication: { loadingState: h.Gui.IDLE },
        modals: {
          disclaimerModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
          paywallModal: {},
          ugcTrackEditModal: { modal: {} },
          popoverOverPlayer: {},
          crackdownModal: {},
          overwrittenExperimentsModal: {},
          buySubscriptionModal: { isOpened: !0 },
          clearMemoryModal: {},
          discordRpcSettingsModal: {},
        },
        landing: {
          loadingState: h.Gui.IDLE,
          tabs: { loadingState: h.Gui.IDLE, data: [] },
        },
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: h.Gui.IDLE },
          playQueue: {},
        },
        fullscreenVideoPlayer: { modal: {}, ids: [] },
        advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1 },
        equalizer: { modal: {}, presets: {} },
        ugcUploadCenter: {
          checkProcessingTracksAttempts: 0,
          notifications: {},
        },
        paymentWidgetModal: {
          modal: {},
          target: "",
          serviceSessionId: "",
          tariffOfferName: "",
          status: v.c8.IDLE,
        },
        offers: { music: { loadingState: h.Gui.IDLE } },
        quality: { modal: {} },
        releaseNotes: { modal: {} },
        slam: { networkStatus: {} },
        favoriteTracks: { loadingState: h.Gui.IDLE },
        track: { loadingState: h.Gui.IDLE, withAnimation: !0 },
        continueListen: {},
      };
      var S = a(94093),
        E = a(95414),
        b = a(6799);
      a(16593);
      var _ = a(44443),
        P = a(13555),
        C = a(15526);
      let N = u.V5.model("CollectionAlbumsPage", {
        loadingState: u.V5.enumeration(Object.values(h.Gui)),
        sort: u.V5.maybeNull(C.$4),
        items: u.V5.array(u.V5.maybeNull(P.ug)),
        pager: u.V5.maybeNull(C.Vn),
        alreadyRequestedPages: u.V5.map(u.V5.number),
        pendingPages: u.V5.map(u.V5.number),
        requestsCount: u.V5.maybeNull(u.V5.number),
        upcomingAlbumsLoadingState: u.V5.enumeration(Object.values(h.Gui)),
        upcomingAlbums: u.V5.maybeNull(u.V5.array(P.W9)),
      })
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === h.Gui.IDLE ||
              (e.loadingState === h.Gui.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === h.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === h.Gui.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === h.Gui.IDLE ||
              e.upcomingAlbumsLoadingState === h.Gui.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => ({
          getData: (0, u.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: n = 20,
                sortBy: r,
                sortOrder: s,
                metaType: o,
              } = t,
              { usersResource: l, modelActionsLogger: d } = (0, u.dU)(e);
            if (
              !(
                (e.loadingState === h.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                r && s && (e.sort = { sortBy: r, sortOrder: s });
              try {
                var c, m, g;
                (e.loadingState = h.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield l.getLikedAlbums({
                    userId: a,
                    page: i,
                    pageSize: n,
                    sortBy: r,
                    sortOrder: s,
                    metaType: o,
                  }),
                  d = { page: i, perPage: n, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, u.pj)(
                    Array.from({ length: d.total }, () => null),
                  ));
                let y =
                  null !==
                    (m =
                      null === (c = t.albums) || void 0 === c
                        ? void 0
                        : c.map((e) => {
                            let { album: t } = e;
                            return (0, P.ym)(t);
                          })) && void 0 !== m
                    ? m
                    : [];
                (0, h.AG_)({
                  items: e.items,
                  mappedRawItems: y,
                  page: i,
                  pageSize: n,
                }),
                  (e.pager = d),
                  (e.requestsCount =
                    (null !== (g = e.requestsCount) && void 0 !== g ? g : 0) +
                    1),
                  e.loadingState !== h.Gui.IDLE &&
                    (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                d.error(t), (e.loadingState = h.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          getPresaves: (0, u.ls)(function* (t) {
            let { userId: a } = t,
              { usersResource: i, modelActionsLogger: n } = (0, u.dU)(e);
            if (e.upcomingAlbumsLoadingState !== h.Gui.PENDING)
              try {
                var r;
                e.upcomingAlbumsLoadingState = h.Gui.PENDING;
                let t = yield i.getPresaves({
                  userId: a,
                  includeReleased: !1,
                  includeUpcoming: !0,
                });
                (e.upcomingAlbums = (0, u.pj)(
                  null === (r = t.upcomingAlbums) || void 0 === r
                    ? void 0
                    : r.map(P.wq),
                )),
                  e.upcomingAlbumsLoadingState !== h.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = h.Gui.RESOLVE);
              } catch (t) {
                n.error(t),
                  e.upcomingAlbumsLoadingState !== h.Gui.IDLE &&
                    (e.upcomingAlbumsLoadingState = h.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = h.Gui.IDLE),
              (e.sort = null),
              (e.items = (0, u.pj)([])),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.upcomingAlbumsLoadingState = h.Gui.IDLE),
              (e.upcomingAlbums = null);
          },
        }));
      var k = a(11232);
      let I = u.V5.model("CollectionArtistsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(C.$4),
          items: u.V5.array(u.V5.maybeNull(k.Go)),
          pager: u.V5.maybeNull(C.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        }).actions((e) => ({
          getData: (0, u.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: n = 20,
                sortBy: r,
                sortOrder: s,
              } = t,
              { usersResource: o, modelActionsLogger: l } = (0, u.dU)(e);
            if (
              !(
                (e.loadingState === h.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                r && s && (e.sort = { sortBy: r, sortOrder: s });
              try {
                var d, c, m;
                (e.loadingState = h.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield o.getLikedArtists({
                    userId: a,
                    page: i,
                    pageSize: n,
                    sortBy: r,
                    sortOrder: s,
                  }),
                  l = { page: i, perPage: n, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, u.pj)(
                    Array.from({ length: l.total }, () => null),
                  )),
                  (e.loadingState = h.Gui.RESOLVE);
                let g =
                  null !==
                    (c =
                      null === (d = t.artists) || void 0 === d
                        ? void 0
                        : d.map(k.d)) && void 0 !== c
                    ? c
                    : [];
                (0, h.AG_)({
                  items: e.items,
                  mappedRawItems: g,
                  page: i,
                  pageSize: n,
                }),
                  (e.pager = l),
                  (e.requests =
                    (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  e.loadingState !== h.Gui.IDLE &&
                    (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                l.error(t), (e.loadingState = h.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          reset() {
            (e.loadingState = h.Gui.IDLE),
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, u.pj)([]));
          },
        })),
        T = u.V5.model("CollectionNonMusicPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.array(u.V5.maybeNull(P.ug)),
          pager: u.V5.maybeNull(C.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requestsCount: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isAlbumsLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                (e.loadingState === h.Gui.PENDING && 0 === e.items.length)
              );
            },
            get isLoading() {
              return this.isAlbumsLoading;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
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
            getData: (0, u.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: n = 20, metaType: r } = t,
                { usersResource: s, modelActionsLogger: o } = (0, u.dU)(e);
              if (
                !(
                  (e.loadingState === h.Gui.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var l, d, c;
                  (e.loadingState = h.Gui.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: n,
                      metaType: r,
                    }),
                    o = { page: i, perPage: n, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: o.total }, () => null),
                    ));
                  let m =
                    null !==
                      (d =
                        null === (l = t.albums) || void 0 === l
                          ? void 0
                          : l.map((e) => {
                              let { album: t } = e;
                              return (0, P.ym)(t);
                            })) && void 0 !== d
                      ? d
                      : [];
                  (0, h.AG_)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: n,
                  }),
                    (e.pager = o),
                    (e.requestsCount =
                      (null !== (c = e.requestsCount) && void 0 !== c ? c : 0) +
                      1),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  o.error(t), (e.loadingState = h.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE),
                (e.items = (0, u.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var A = a(82621),
        D = a(39583);
      let x = u.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(C.$4),
          items: u.V5.array(u.V5.maybeNull(D.$h)),
          pager: u.V5.maybeNull(C.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          kinds: u.V5.array(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, u.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, u.dU)(e);
                (a = yield i.getPlaylistsKinds({
                  userId: t,
                  addPlaylistWithLikes: !0,
                })),
                  (e.kinds = (0, u.pj)(a));
              }),
              getData: (0, u.ls)(function* (a) {
                let {
                    userId: i,
                    page: n = 0,
                    pageSize: r = 20,
                    withLikesCount: s,
                  } = a,
                  { usersResource: o, modelActionsLogger: l } = (0, u.dU)(e);
                if (
                  !(
                    (e.loadingState === h.Gui.PENDING &&
                      e.pendingPages.has("".concat(n))) ||
                    e.alreadyRequestedPages.has("".concat(n))
                  )
                ) {
                  "number" == typeof n &&
                    e.alreadyRequestedPages.set("".concat(n), n);
                  try {
                    var d;
                    e.isLoaded || (e.loadingState = h.Gui.PENDING),
                      e.pendingPages.set("".concat(n), n),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = n * r,
                      l = e.kinds.slice(a, a + r),
                      c = yield o.getPlaylistsByKinds({
                        userId: i,
                        kinds: l,
                        withLikesCount: s,
                        withTracks: !0,
                      });
                    e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                    let m = { page: n, perPage: r, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, u.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                    let g = c.map(A.PB);
                    (0, h.AG_)({
                      items: e.items,
                      mappedRawItems: g,
                      page: n,
                      pageSize: r,
                    }),
                      (e.pager = m),
                      (e.loadingState = h.Gui.RESOLVE);
                  } catch (t) {
                    l.error(t), (e.loadingState = h.Gui.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(n));
                  }
                }
              }),
              reset() {
                (e.loadingState = h.Gui.IDLE),
                  (e.sort = null),
                  (e.items = (0, u.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, u.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        L = u.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          sort: u.V5.maybeNull(C.$4),
          items: u.V5.array(u.V5.maybeNull(D.Cd)),
          pager: u.V5.maybeNull(C.Vn),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: n = 20,
                sortBy: r,
                sortOrder: s,
                metaType: o,
                withTracks: l,
              } = t;
              if (
                (e.loadingState === h.Gui.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: d, modelActionsLogger: c } = (0, u.dU)(e);
              (e.sort = null), r && s && (e.sort = { sortBy: r, sortOrder: s });
              try {
                var m;
                (e.loadingState = h.Gui.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: c } = yield d.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: n,
                    sortBy: r,
                    sortOrder: s,
                    metaType: o,
                    withTracks: l,
                  },
                );
                (e.requests =
                  (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                let g = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, D.PV)(t);
                });
                (0, h.AG_)({
                  items: e.items,
                  mappedRawItems: g,
                  page: i,
                  pageSize: n,
                }),
                  (e.pager = c),
                  (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                c.error(t),
                  "number" == typeof i &&
                    e.alreadyRequestedPages.delete("".concat(i)),
                  (e.requests =
                    "number" == typeof e.requests ? e.requests - 1 : 0),
                  (e.loadingState = h.Gui.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE),
                (e.sort = null),
                (e.items = (0, u.pj)([])),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.requests = null);
            },
          }));
      var R = a(54146);
      let G = (e) => (0, u.pj)({ type: e.type, track: (0, R.Vt)(e.track) }),
        w = (e) => e.filter((e) => e.track).map((e) => (0, R.Vt)(e.track)),
        O = (e) =>
          (0, u.pj)({
            type: e.type,
            album: e.album && (0, P.ym)(e.album),
            playlist: e.playlist && (0, A.Q9)(e.playlist),
            track: (0, R.Vt)(e.track),
          }),
        V = u.V5.model("ShelfLikedItem", { type: u.V5.string, track: R.le });
      u.V5.model("ShelfNewEpisodesItem", {
        type: u.V5.string,
        playlist: u.V5.maybe(A.Nn),
        track: R.le,
      });
      let M = u.V5.model("ShelfRecentlyPlayedItem", {
          type: u.V5.string,
          album: u.V5.maybe(P.ug),
          playlist: u.V5.maybe(A.d2),
          track: R.le,
        }),
        j = u.V5.model("CollectionShelfLiked", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          entities: u.V5.maybeNull(u.V5.array(V)),
          pager: u.V5.maybeNull(C.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              var t;
              return (
                this.isResolved &&
                (null === (t = e.entities) || void 0 === t
                  ? void 0
                  : t.length) === 0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i, n;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (n = a.pager) && void 0 !== n ? n : null),
                    (e.entities = (0, u.pj)(
                      a.entities ? a.entities.map(G) : [],
                    )),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        U = u.V5.model("CollectionShelfNewEpisodes", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          playlist: u.V5.maybeNull(A.Nn),
          tracks: u.V5.maybeNull(u.V5.array(R.le)),
        })
          .views((e) => ({
            get withPlaylist() {
              var t;
              return !!(
                e.playlist &&
                e.playlist.kind &&
                e.playlist.isAvailable &&
                (null === (t = e.playlist.owner) || void 0 === t
                  ? void 0
                  : t.login)
              );
            },
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return this.isResolved && (!e.tracks || 0 === e.tracks.length);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getNewEpisodes();
                  e.title = a.title;
                  let n = a.blocks[0];
                  (null == n ? void 0 : n.typeForFrom) &&
                    (e.typeForFrom = n.typeForFrom),
                    (null == n
                      ? void 0
                      : null === (i = n.entities[0]) || void 0 === i
                        ? void 0
                        : i.playlist) &&
                      (e.playlist = (0, A.Q9)(n.entities[0].playlist)),
                    (null == n ? void 0 : n.entities) &&
                      (e.tracks = (0, u.pj)(w(n.entities))),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.title = null),
                (e.playlist = null),
                (e.typeForFrom = null),
                (e.tracks = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        F = u.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          title: u.V5.maybeNull(u.V5.string),
          typeForFrom: u.V5.maybeNull(u.V5.string),
          entities: u.V5.maybeNull(u.V5.array(M)),
          pager: u.V5.maybeNull(C.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gui.IDLE ||
                e.loadingState === h.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { nonMusicResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  var i, n;
                  e.loadingState = h.Gui.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (n = a.pager) && void 0 !== n ? n : null),
                    (e.entities = (0, u.pj)(a.entities.map(O))),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  a.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = h.Gui.IDLE);
            },
          })),
        B = u.V5.model("CollectionShelfPage", {
          recentlyPlayed: F,
          newEpisodes: U,
          liked: j,
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
                e.recentlyPlayed.loadingState === h.Gui.IDLE &&
                e.liked.loadingState === h.Gui.IDLE
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
        q = u.V5.model("CollectionDislikesPageArtists", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.maybeNull(u.V5.array(k.Go)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, u.dU)(e);
              if (!(0, u.fh)(e)) return null;
              let { user: i } = (0, u.yj)(e);
              if (e.loadingState === h.Gui.PENDING) return null;
              if (((e.loadingState = h.Gui.PENDING), i.account.uid))
                try {
                  let a = yield t.getDislikedArtists({ userId: i.account.uid });
                  return (
                    (e.items = (0, u.pj)((a || []).map(k.d))),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE),
                    a
                  );
                } catch (t) {
                  a.error(t),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
              return (e.loadingState = h.Gui.REJECT), null;
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE), (e.items = null);
            },
          }));
      var H = a(24980);
      let W = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return String(null == a ? void 0 : a.id);
          }),
        Y = (e, t, a) => {
          let i = [];
          for (let s = t; s <= a; s++) {
            var n, r;
            ((null === (n = e[s]) || void 0 === n ? void 0 : n.loadingState) ===
              h.Gui.IDLE ||
              (null === (r = e[s]) || void 0 === r
                ? void 0
                : r.loadingState) === h.Gui.REJECT) &&
              i.push(s);
          }
          return i;
        },
        z = u.V5.model("CollectionDislikesPageTracksItem", {
          id: u.V5.string,
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          data: u.V5.maybeNull(R.le),
        }),
        K = u.V5.model("CollectionDislikesPageTracks", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          items: u.V5.maybeNull(u.V5.array(z)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isPending() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isResolved() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get sonataEntitiesData() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.map((e) => (0, H.RN)(e.id))) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* () {
              let { modelActionsLogger: t } = (0, u.dU)(e);
              if (e.loadingState === h.Gui.PENDING) return;
              if (((e.loadingState = h.Gui.PENDING), !(0, u.fh)(e))) {
                e.loadingState = h.Gui.REJECT;
                return;
              }
              let { library: a, user: i } = (0, u.yj)(e);
              try {
                if (
                  i.isAuthorized &&
                  (yield a.getData(), a.loadingState === h.Gui.RESOLVE)
                ) {
                  e.loadingState = h.Gui.RESOLVE;
                  let t = a.dislikedTracksIds.map((e) => ({
                    id: e,
                    loadingState: h.Gui.IDLE,
                  }));
                  e.items = (0, u.pj)(t);
                  return;
                }
              } catch (a) {
                t.error(a),
                  e.loadingState !== h.Gui.IDLE &&
                    (e.loadingState = h.Gui.REJECT);
              }
              e.loadingState = h.Gui.REJECT;
            }),
            getTracksByRange: (0, u.ls)(function* (t, a) {
              var i;
              let { tracksResource: n, modelActionsLogger: r } = (0, u.dU)(e);
              if (!(null === (i = e.items) || void 0 === i ? void 0 : i.length))
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
              let s = Y(e.items, t, a);
              try {
                let t = W(e.items, s);
                if (!t.length) return null;
                s.forEach((t) => {
                  var a;
                  let i =
                    null === (a = e.items) || void 0 === a ? void 0 : a[t];
                  i && (i.loadingState = h.Gui.PENDING);
                });
                let a = yield n.getTracksMeta({
                  trackIds: t,
                  withProgress: !0,
                });
                s.forEach((t, i) => {
                  var n;
                  let r = null == a ? void 0 : a[i];
                  (null === (n = e.items) || void 0 === n ? void 0 : n[t]) &&
                    r &&
                    (e.items[t] = {
                      id: String(r.id),
                      data: (0, R.Vt)(r),
                      loadingState: h.Gui.RESOLVE,
                    });
                });
              } catch (t) {
                r.error(t),
                  s.forEach((t) => {
                    var a;
                    let i =
                      null === (a = e.items) || void 0 === a ? void 0 : a[t];
                    i && (i.loadingState = h.Gui.REJECT);
                  });
              }
              return null;
            }),
            reset() {
              (e.loadingState = h.Gui.IDLE), (e.items = null);
            },
          })),
        J = u.V5.model("CollectionDislikesPage", { artists: q, tracks: K })
          .views((e) => ({
            get isIdle() {
              return e.tracks.isIdle && e.artists.isIdle;
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
          })),
        Q = u.V5.model("CollectionPage", {
          landing: _.d5,
          albums: N,
          playlistsLiked: L,
          playlistsCreated: x,
          artists: I,
          shelf: B,
          nonMusicLiked: T,
          dislikes: J,
        });
      a(42859),
        a(34715),
        a(23631),
        a(21016),
        a(87024),
        a(18096),
        a(26448),
        a(6052),
        a(9692),
        a(24064),
        a(64868),
        a(14389),
        a(59659),
        a(89942);
      var X = a(2086),
        Z = a(37129),
        $ = a(39535);
      let ee = u.V5.model("KidsPageModel", { landing: _.d5 });
      a(88747), a(98587);
      let et = u.V5.model("MainPage", { landing: _.d5 });
      a(90135);
      var ea = a(2508),
        ei = a(20081),
        en = a(88693);
      let er = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        es = (e) => {
          switch (e.type) {
            case ea.E.ALBUM:
              return "".concat(e.type, "_").concat((0, ei.un)(e));
            case ea.E.TRACK:
              return "".concat(e.type, "_").concat((0, ei.LV)(e));
            case ea.E.WAVE:
              return "".concat(e.type, "_").concat((0, ei.R3)(e));
            case ea.E.PLAYLIST:
              return "".concat(e.type, "_").concat((0, ei.aQ)(e));
            case ea.E.ARTIST:
              return "".concat(e.type, "_").concat((0, ei.H5)(e));
          }
        },
        eo = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let r of e.historyTabs) {
            var i, n;
            if (a > 1e3) break;
            let e = { ...r, items: [] };
            for (let t of null !== (i = r.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (n = e.items) || void 0 === n || n.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        el = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case ea.E.ARTIST:
                case ea.E.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case ea.E.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case ea.E.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case ea.E.TRACK: {
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
        eu = u.V5.model("MusicHistoryPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          indexesMap: u.V5.map(u.V5.number),
          items: u.V5.maybeNull(u.V5.array(ei.Mf)),
          datesMap: u.V5.map(u.V5.boolean),
          tabs: u.V5.maybeNull(u.V5.array(ei.t9)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isLoading() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isLoaded() {
              return e.loadingState === h.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gui.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let n = t,
                r = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (n = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (r = t + 25),
                [n, r]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [n, r] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(n, r).filter((e) => !e.isLoaded)) && void 0 !== i
                ? i
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
              var a, i;
              return null !==
                (i =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, u.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var n;
                      e.datesMap.set(t.date, !1),
                        null === (n = t.blocks) ||
                          void 0 === n ||
                          n.forEach((t, n) => {
                            var r;
                            let s = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(n, "_").concat(s),
                              a,
                            ),
                              null === (r = e.items) ||
                                void 0 === r ||
                                r.push({
                                  id: s,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: n,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? h.Gui.RESOLVE : h.Gui.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, r) => {
                                var s;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(n, "_")
                                    .concat(r, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (s = e.items) ||
                                    void 0 === s ||
                                    s.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: n,
                                      trackIndex: r,
                                      loadingState:
                                        a < 25 ? h.Gui.RESOLVE : h.Gui.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, n, r, s;
                let { tabIndex: o, blockIndex: l, trackIndex: u } = t,
                  { fullModel: d } = a.data;
                if (null === u) return;
                let c =
                  null === (s = e.tabs) || void 0 === s
                    ? void 0
                    : null === (r = s[o]) || void 0 === r
                      ? void 0
                      : null === (n = r.blocks) || void 0 === n
                        ? void 0
                        : null === (i = n[l]) || void 0 === i
                          ? void 0
                          : i.tracks[u];
                c &&
                  ((c.data = (0, R.Vt)(d)), (c.loadingState = h.Gui.RESOLVE));
              },
              setAlbum(t, a) {
                var i, n, r;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (n = r[s]) || void 0 === n
                        ? void 0
                        : null === (i = n.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, ei.Ql)(u) &&
                  ((u.meta = (0, P.cO)({ album: l.album, artists: l.artists })),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setArtist(t, a) {
                var i, n, r;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (n = r[s]) || void 0 === n
                        ? void 0
                        : null === (i = n.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, ei.DF)(u) &&
                  ((u.meta = (0, k.tR)({ artist: l.artist })),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, n, r;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (n = r[s]) || void 0 === n
                        ? void 0
                        : null === (i = n.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, ei.v3)(u) &&
                  ((u.meta = {
                    ...(0, A.RE)({ playlist: l.playlist }),
                    tracksCount: l.tracksCount,
                  }),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              setVibe(t, a) {
                var i, n, r;
                let { tabIndex: s, blockIndex: o } = t,
                  { fullModel: l } = a.data,
                  u =
                    null === (r = e.tabs) || void 0 === r
                      ? void 0
                      : null === (n = r[s]) || void 0 === n
                        ? void 0
                        : null === (i = n.blocks) || void 0 === i
                          ? void 0
                          : i[o];
                (0, ei.eE)(u) &&
                  ((u.meta = {
                    ...(0, en.FF)(l.wave),
                    imageUrl: l.simpleWaveForegroundImageUrl,
                    backgroundColor: l.simpleWaveBackgroundColor,
                  }),
                  (u.loadingState = h.Gui.RESOLVE));
              },
              getMusicHistory: (0, u.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                u.dU)(e);
                if (e.loadingState !== h.Gui.PENDING)
                  try {
                    e.loadingState = h.Gui.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      n = eo(i);
                    (e.tabs = (0, u.pj)(n.historyTabs.map(ei.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = h.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = h.Gui.REJECT);
                  }
              }),
              getItems: (0, u.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: n } = (0,
                u.dU)(e);
                try {
                  let n = e.getItemsToLoad(a);
                  n.forEach((e) => {
                    e.loadingState = h.Gui.RESOLVE;
                  });
                  let r = yield i.getMusicHistoryItems({ items: el(n) }),
                    s = er(n);
                  r.items.forEach((e) => {
                    var a;
                    let i = es(e);
                    null === (a = s[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case ea.E.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case ea.E.TRACK:
                            t.setTrack(a, e);
                            break;
                          case ea.E.WAVE:
                            t.setVibe(a, e);
                            break;
                          case ea.E.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case ea.E.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = h.Gui.RESOLVE;
                      });
                  });
                } catch (e) {
                  n.error(e);
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
                  (e.loadingState = h.Gui.IDLE);
              },
            };
            return t;
          });
      a(33558), a(81785);
      var ed = a(73894),
        ec = a(21325),
        em = a(54705),
        eh = a(28408),
        eg = a(69259),
        ey = a(93596),
        ep = a(45173),
        ev = a(98645);
      let ef = [
          ev.S.ARTIST,
          ev.S.ALBUM,
          ev.S.TRACK,
          ev.S.PLAYLIST,
          ev.S.WAVE,
          ev.S.PODCAST,
          ev.S.PODCAST_EPISODE,
        ],
        eS = (e) => {
          let t = [...ef];
          return (
            (0, h.Z7G)(e) ||
              (t = t.filter(
                (e) => ![ev.S.PODCAST, ev.S.PODCAST_EPISODE].includes(e),
              )),
            t
          );
        },
        eE = [
          ev.S.ALBUM,
          ev.S.ARTIST,
          ev.S.PLAYLIST,
          ev.S.TRACK,
          ev.S.UGC_TRACK,
          ev.S.WAVE,
          ev.S.PODCAST,
          ev.S.PODCAST_EPISODE,
          ev.S.CLIP,
        ],
        eb = (e, t, a) => {
          let i = [...eE];
          return (
            e === eg.a.TOP && (i = i.filter((e) => e !== ev.S.UGC_TRACK)),
            (0, h.Z7G)(t) ||
              a.checkExperiment(h.peG.WebNextBookSearch, "on") ||
              (i = i.filter((e) => ![ev.S.PODCAST].includes(e))),
            a.checkExperiment(h.peG.WebNextClips, "on") ||
              (i = i.filter((e) => e !== ev.S.CLIP)),
            i
          );
        },
        e_ = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, u.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        eP = (e) => {
          let { type: t } = e;
          switch (t) {
            case ev.S.UGC_TRACK:
              return { type: t, data: (0, R.Z2)(e.track) };
            case ev.S.TRACK:
              return { type: t, data: (0, R.Vt)(e.track) };
            case ev.S.ARTIST:
              return { type: t, data: (0, k.d)(e.artist) };
            case ev.S.PLAYLIST:
              return {
                type: t,
                data: (0, A.VB)({ ...e.playlist, artists: [] }),
              };
            case ev.S.ALBUM:
              return { type: t, data: (0, P.ym)(e.album) };
            case ev.S.WAVE:
              return { type: t, data: e_(e) };
            case ev.S.PODCAST:
              return { type: t, data: (0, P.ym)(e.podcast) };
            case ev.S.PODCAST_EPISODE:
              return { type: t, data: (0, R.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        };
      var eC = a(70124);
      let eN = (e) =>
          e.map((e) => {
            switch (e.type) {
              case ev.S.ALBUM:
                return { type: ev.S.ALBUM, data: (0, P.ym)(e.album) };
              case ev.S.ARTIST:
                return { type: ev.S.ARTIST, data: (0, k.d)(e.artist) };
              case ev.S.PLAYLIST:
                return {
                  type: ev.S.PLAYLIST,
                  data: (0, A.VB)({ ...e.playlist, artists: [] }),
                };
              case ev.S.UGC_TRACK:
                return { type: ev.S.UGC_TRACK, data: (0, R.Z2)(e.track) };
              case ev.S.TRACK:
                return { type: ev.S.TRACK, data: (0, R.Vt)(e.track) };
              case ev.S.WAVE:
                return { type: ev.S.WAVE, data: e_(e) };
              case ev.S.PODCAST:
                return { type: ev.S.PODCAST, data: (0, P.ym)(e.podcast) };
              case ev.S.CLIP:
                return { type: ev.S.CLIP, data: (0, eC.et)(e.clip) };
              case ev.S.PODCAST_EPISODE:
                return {
                  type: ev.S.PODCAST_EPISODE,
                  data: (0, R.Vt)(e.podcast_episode),
                };
            }
          }),
        ek = u.V5.model("SearchHistoryPage", {
          items: u.V5.array(ep.Iv),
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
        }),
        eI = u.V5.model("SearchPage", {
          searchCorrectedText: u.V5.maybeNull(u.V5.string),
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          searchRequestId: u.V5.optional(u.V5.string, ""),
          results: u.V5.array(ep.Iv),
          history: ek,
          mixes: ey.ZP,
        })
          .views((e) => ({
            get isLoading() {
              return e.loadingState === h.Gui.PENDING;
            },
            get isNeededToLoad() {
              return e.loadingState === h.Gui.IDLE;
            },
            get isEmpty() {
              return (
                (e.loadingState === h.Gui.RESOLVE ||
                  e.loadingState === h.Gui.REJECT) &&
                0 === e.results.length
              );
            },
            get isHistoryLoading() {
              return e.history.loadingState === h.Gui.PENDING;
            },
            get isHistoryReady() {
              return e.history.loadingState === h.Gui.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.history.items.length &&
                e.history.loadingState === h.Gui.RESOLVE
              );
            },
          }))
          .actions((e) => ({
            getSearchResults: (0, u.ls)(function* (t) {
              let { text: a, filter: i, config: n, experiments: r } = t,
                { searchResource: s } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gui.PENDING;
                let t = yield s.getInstantMixedSearch({
                  text: a,
                  type: eb(i, n, r),
                  filter: i === eg.a.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, u.pj)(eN(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  (e.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                e.loadingState = h.Gui.REJECT;
              }
            }),
            getHistory: (0, u.ls)(function* (t) {
              let { userId: a, config: i } = t;
              if (e.history.loadingState === h.Gui.PENDING) return;
              let { usersResource: n } = (0, u.dU)(e);
              try {
                e.history.loadingState = h.Gui.PENDING;
                let t = yield n.getSearchHistory({
                  userId: a,
                  supportedTypes: eS(i),
                });
                (e.history.items = (0, u.pj)(t.map(eP).filter((e) => e))),
                  (e.history.loadingState = h.Gui.RESOLVE);
              } catch (t) {
                console.error(t), (e.history.loadingState = h.Gui.REJECT);
              }
            }),
            clearHistory: (0, u.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i } = (0, u.dU)(e);
              if (e.loadingState !== h.Gui.PENDING)
                try {
                  (e.loadingState = h.Gui.PENDING),
                    yield i.clearSearchHistory({ userId: a }),
                    (e.loadingState = h.Gui.RESOLVE);
                } catch (t) {
                  console.error(t), (e.loadingState = h.Gui.REJECT);
                }
            }),
            resetHistoryItems() {
              e.history.items = (0, u.pj)([]);
            },
            resetHistoryStateRequest() {
              (e.history.loadingState = h.Gui.IDLE),
                (e.history.items = (0, u.pj)([]));
            },
            resetResults() {
              e.results = (0, u.pj)([]);
            },
            resetSearchCorrectedText() {
              e.searchCorrectedText = null;
            },
            reset() {
              (e.searchCorrectedText = null),
                (e.loadingState = h.Gui.IDLE),
                (e.results = (0, u.pj)([]));
            },
            sendFeedback: (0, u.ls)(function* (t) {
              let { searchResource: a, modelActionsLogger: i } = (0, u.dU)(e);
              try {
                yield a.sendFeedback(t);
              } catch (e) {
                i.error(e);
              }
            }),
          }));
      a(59717), a(22082);
      var eT = a(91132),
        eA = a(76819),
        eD = a(23874),
        ex = a(88843);
      ((i = r || (r = {})).BAR_BELOW = "barBellow"),
        (i.FULLSCREEN = "fullscreen");
      var eL = a(81224),
        eR = a(65446);
      let eG = (e) => {
          let t = [],
            a = [];
          return (
            e.triggers.forEach((e) => {
              switch (e.meta.notificationId) {
                case r.BAR_BELOW:
                  t.push((0, eL.ho)(e));
                  return;
                case r.FULLSCREEN:
                  a.push((0, eR.QZ)(e));
                  return;
              }
            }),
            (0, u.pj)({ barBelow: { list: t }, modal: { list: a } })
          );
        },
        ew = u.V5.model("CommunicationList", { barBelow: eL.Xv, modal: eR.FM }),
        eO = u.V5.model("Communication", {
          loadingState: u.V5.enumeration(Object.values(h.Gui)),
          list: u.V5.maybe(ew),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, u.ls)(function* () {
              let { dynamicPagesResource: a, modelActionsLogger: i } = (0,
              u.dU)(e);
              if (
                e.loadingState !== h.Gui.PENDING &&
                e.loadingState !== h.Gui.RESOLVE
              )
                try {
                  e.loadingState = h.Gui.PENDING;
                  let i = yield a.getTriggers({
                    anchorIds: Object.values(ex.o),
                  });
                  if (
                    ((e.list = eG(i)),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.RESOLVE),
                    !e.list)
                  )
                    return;
                  let { barBelow: n, modal: r } = e.list;
                  n.setAnchorId(ex.o.ON_START_BAR_BELOW),
                    n.barBelowItem &&
                      (n.show(),
                      t.shown(
                        n.barBelowItem.anchorId,
                        n.barBelowItem.screenId,
                      )),
                    r.setAnchorId(ex.o.ON_START_FULLSCREEN),
                    r.modalItem &&
                      (r.open(),
                      t.shown(r.modalItem.anchorId, r.modalItem.screenId));
                } catch (t) {
                  i.error(t),
                    t instanceof eD.du &&
                      (t.statusCode === eD.CN.NOT_FOUND ||
                        t.statusCode === eD.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = eD.CN.NOT_FOUND),
                    e.loadingState !== h.Gui.IDLE &&
                      (e.loadingState = h.Gui.REJECT);
                }
            }),
            shown: (0, u.ls)(function* (t, a) {
              let { dynamicPagesResource: i, modelActionsLogger: n } = (0,
              u.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                n.error(e);
              }
            }),
            action: (0, u.ls)(function* (t, a, i) {
              let { dynamicPagesResource: n, modelActionsLogger: r } = (0,
              u.dU)(e);
              try {
                yield n.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                r.error(e);
              }
            }),
          };
          return t;
        });
      var eV = a(10576),
        eM = a(20062);
      let ej = u.V5.model("ContinueListen", {
          track: u.V5.maybe(R.le),
          trackIndex: u.V5.maybe(u.V5.number),
          contextType: u.V5.maybeNull(u.V5.enumeration(Object.values(eM.A))),
          contextId: u.V5.maybeNull(u.V5.union(u.V5.string, u.V5.number)),
        }).actions((e) => ({
          saveTrack: (t) => {
            let { contextType: a, contextId: i, track: n } = t;
            (e.contextType = a),
              (e.contextId = i),
              (e.track = (0, u.pj)((0, eV.ZN)(n)));
          },
          saveTrackIndex: (t) => {
            e.trackIndex = t;
          },
        })),
        eU = u.V5.model("ModalsModel", {
          disclaimerModal: C.KL,
          shortcutsModal: C.KL,
          aboutAppModal: C.KL,
          overviewModal: C.KL,
          paywallModal: C.KL,
          ugcTrackEditModal: R.bp,
          popoverOverPlayer: C.KL,
          crackdownModal: C.KL,
          overwrittenExperimentsModal: C.KL,
          buySubscriptionModal: C.KL,
          clearMemoryModal: C.KL,
          discordRpcSettingsModal: C.KL,
        });
      var eF = a(60661),
        eB = a(52203),
        eq = a(88073),
        eH = a(34518),
        eW = a(35340),
        eY = a(10303),
        ez = a(65591),
        eK = a(19645),
        eJ = a(18796),
        eQ = a(91809);
      let eX = u.V5.model("Network", {
          isOffline: u.V5.optional(u.V5.boolean, !1),
        }),
        eZ = u.V5.model("Entity", {
          progress: u.V5.maybe(u.V5.number),
          loadingState: u.V5.enumeration(Object.values(eQ.aT)),
        }),
        e$ = u.V5.model("Slam", {
          networkStatus: eX,
          offlineMode: u.V5.optional(u.V5.boolean, !1),
          tracks: u.V5.map(eZ),
        })
          .views((e) => {
            let t = {
              isTrackDownloaded: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === eQ.aT.DOWNLOADED
                );
              },
              isTrackDownloading: (t) => {
                var a;
                return (
                  (null === (a = e.tracks.get(t)) || void 0 === a
                    ? void 0
                    : a.loadingState) === eQ.aT.DOWNLOADING
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
                  let [a] = (0, eJ.f)(e);
                  return !!a && t.isTrackDownloaded(a);
                }),
              isPlaylistDownloading: (e) =>
                e.some((e) => {
                  let [a] = (0, eJ.f)(e);
                  return !!a && t.isTrackDownloading(a);
                }),
              getPlaylistDownloadingProgress: (e) =>
                Math.floor(
                  (e.reduce((e, a) => {
                    let [i] = (0, eJ.f)(a);
                    return i && t.isTrackDownloaded(i) ? e + 1 : e;
                  }, 0) /
                    e.length) *
                    100,
                ),
              get isOfflineModeEnabled() {
                if (!(0, u.fh)(e)) return !1;
                let { experiments: t } = (0, u.yj)(e);
                return (
                  t.checkExperiment(
                    h.peG.WebNextEnableDownloadControls,
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
              e.tracks = (0, u.pj)(t);
            },
            setOfflineModeEnabled: (t) => {
              let { experiments: a } = (0, u.yj)(e),
                { localStorage: i } = (0, u.dU)(e);
              a.checkExperiment(h.peG.WebNextEnableDownloadControls, "on") &&
                ((e.offlineMode = t), i.set(h.BUb.OfflineMode, t));
            },
          }));
      var e0 = a(18518),
        e5 = a(80513);
      ((n = s || (s = {})).PROCESSING = "processing"),
        (n.PLAYABLE = "playable");
      var e1 = a(44022),
        e4 = a(46615);
      let e2 = u.V5.model("UgcUploadCenterNotificationsPairModel", {
          playlist: D.Cd,
          type: u.V5.enumeration(Object.values(e4.u)),
        }),
        e6 = u.V5.model("UgcUploadCenterNotificationsModel", {
          pairs: u.V5.array(e2),
        })
          .views((e) => ({
            isNotificationExists: (t, a) =>
              e.pairs.some((e) => e.playlist.kind === t && e.type === a),
          }))
          .actions((e) => {
            let t = {
              addNotification(t, a) {
                e.pairs.push({ playlist: (0, eV.ZN)(t), type: a });
              },
              addNonexistentNotification(a, i) {
                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
              },
              showAllNotifications() {
                let t = (0, eV.ZN)(e.pairs);
                return (e.pairs = (0, u.pj)([])), t;
              },
            };
            return t;
          }),
        e3 = u.V5.model("UgcUploadCenterTrackPlaylistPair", {
          playlist: D.Cd,
          file: e1.jT,
        }),
        e7 = u.V5.model("UgcUploadCenterModel", {
          tracks: u.V5.array(e3),
          notifications: e6,
          checkProcessingTracksAttempts: u.V5.number,
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
              return this.getTracksByLoadingState(e1.cU.IDLE);
            },
            get preparingTracks() {
              return this.getTracksByLoadingState(e1.cU.PREPARE);
            },
            get uploadingTracks() {
              return this.getTracksByLoadingState(e1.cU.UPLOADING);
            },
            get processingTracks() {
              return this.getTracksByLoadingState(e1.cU.PROCESSING);
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
                        e4.u.FILE_TOO_LARGE,
                      );
                      return;
                    }
                    let i = e1.jT.create({
                      loadingState: e1.cU.IDLE,
                      playlistKind: a.kind,
                    });
                    i.setFile(t);
                    let n = e3.create({ file: i, playlist: (0, eV.ZN)(a) });
                    e.tracks.unshift(n);
                  }),
                  !(0, u.fh)(e))
                )
                  return;
                let { playlist: i } = (0, u.yj)(e);
                i.resetSearch(),
                  i.setSearchText(""),
                  this.runUploadTracksQueue();
              },
              async runUploadTracksQueue() {
                let a = e.idleTracks;
                if (a.length && !e.hasTracksInUploadingState) {
                  let i = a[a.length - 1];
                  i &&
                    (await i.runUpload(),
                    i.loadingState === e1.cU.REJECT &&
                      i.errorReason === e1.v_.TOO_MANY_FILES &&
                      ((e.tracks = (0, u.pj)([])),
                      t.addNotificationForPlaylistKind(
                        i.playlistKind,
                        e4.u.TOO_MANY_FILES,
                      )),
                    t.checkNotifications()),
                    t.setCheckProcessingTracksAttempts(0),
                    t.runUploadTracksQueue();
                }
              },
              checkProcessingTracks: (0, u.ls)(function* () {
                let { tracksResource: a, modelActionsLogger: i } = (0, u.dU)(e),
                  n = [];
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
                        ((a.file.loadingState = e1.cU.RESOLVE),
                        a.file.trackId && n.push(a.file.trackId));
                    });
                } catch (e) {
                  i.error(e);
                }
                return (
                  t.checkNotifications(n),
                  t.moveTracksFromUploadCenterToPlaylist(),
                  null
                );
              }),
              moveTracksFromUploadCenterToPlaylist() {
                var t;
                if (!(0, u.fh)(e)) return;
                let { playlist: a } = (0, u.yj)(e);
                (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) &&
                  e.tracks.find((e) => {
                    var t;
                    return (
                      e.file.loadingState === e1.cU.RESOLVE &&
                      e.playlist.kind ===
                        (null === (t = a.meta) || void 0 === t
                          ? void 0
                          : t.kind)
                    );
                  }) &&
                  a.refreshTracks(),
                  (e.tracks = (0, u.pj)(
                    e.tracks.filter(
                      (e) => e.file.loadingState !== e1.cU.RESOLVE,
                    ),
                  ));
              },
              setCheckProcessingTracksAttempts(t) {
                e.checkProcessingTracksAttempts = t;
              },
              clearCancelledUploads() {
                e.tracks = (0, u.pj)(
                  e.tracks.filter(
                    (e) => e.file.loadingState !== e1.cU.CANCELLED,
                  ),
                );
              },
              checkNotifications(a) {
                let i = new Set();
                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                  i.forEach((i) => {
                    let n = e.getUploadingTracksByPlaylistKind(i);
                    if (
                      !(
                        !n.length ||
                        n.some(
                          (e) =>
                            e.loadingState !== e1.cU.RESOLVE &&
                            e.loadingState !== e1.cU.REJECT,
                        )
                      )
                    ) {
                      if (n.some((e) => e.loadingState === e1.cU.REJECT)) {
                        let r = !0;
                        if (a && a.length) {
                          let t = n.map((e) => e.trackId).filter((e) => e),
                            i = (0, e0.Z)(t, a, e5.Z);
                          i.length &&
                            (r = i
                              .map((t) =>
                                e.tracks.find((e) => e.file.trackId === t),
                              )
                              .some(
                                (e) =>
                                  (null == e ? void 0 : e.file.loadingState) ===
                                  e1.cU.REJECT,
                              ));
                        }
                        r &&
                          t.addNotificationForPlaylistKind(
                            i,
                            e4.u.UNKNOWN_ERROR,
                          );
                      } else t.addNotificationForPlaylistKind(i, e4.u.SUCCESS);
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
      a(15736);
      var e9 = a(68394),
        e8 = a(84251),
        te = a(79001),
        tt = a(65272),
        ta = a(88700);
      let ti = u.V5.model("Root", {
          experiments: C.i_,
          user: ta.T_,
          wizard: eY.k,
          collection: Q,
          main: et,
          settings: C.ao,
          currentTrackInfo: R.Jx,
          album: S.Lf,
          artist: E.Od,
          libraryAllIds: C.n4,
          librarySync: C.T2,
          sonataState: H.ps,
          playlist: em.nb,
          slides: tt.iV,
          vibe: eH.a,
          search: eI,
          vibeSettings: e9.Ux,
          pinsCollection: eF.Lc,
          genre: Z.Kx,
          genres: $.EU,
          mixes: ey.ZP,
          myMusic: ed.S,
          tag: eT.tS,
          chart: b._1,
          post: eh.vU,
          landingBlockEntities: _.oT,
          contextMenuPlaylists: x,
          musicHistory: eu,
          createPlaylist: D.b_,
          location: C.CU,
          nonMusic: ec.NG,
          disclaimer: e8.nU,
          communication: eO,
          trailer: eq.L,
          modals: eU,
          landing: _.d5,
          fullscreenPlayer: eB.Oe,
          fullscreenVideoPlayer: eW.y,
          equalizer: eK.wi,
          releaseNotes: ez.ZP,
          trackLyrics: R.Nl,
          ugcUploadCenter: e7,
          paymentWidgetModal: v._$,
          offers: te.C,
          quality: eB.zC,
          kids: ee,
          slam: e$,
          favoriteTracks: X.W,
          advert: eB.Tk,
          track: eA.uD,
          continueListen: ej,
        }).views((e) => ({
          get library() {
            if (!(0, u.fh)(e)) return e.libraryAllIds;
            let { experiments: t } = (0, u.yj)(e);
            if (t.checkExperiment(h.peG.WebNextLibrarySync, "on"))
              return e.librarySync;
            return e.libraryAllIds;
          },
        })),
        tn = (e, t) => ti.create(e, t);
      var tr = a(58211);
      let ts = ["settings", "sonataState", "offers"],
        to = (e, t) => ts.reduce((t, a) => ((t[a] = e[a]), t), (0, tr.Z)(t));
      (0, l.DT)(!1);
      let tl = (e) => {
        let { children: t, nonce: a } = e;
        (0, c.useRef)([]), (0, c.useContext)(d.ServerInsertedHTMLContext);
        let i = (0, h.uK4)(),
          n = i.get(h.V0J),
          r = i.get(h.U5t),
          s = (0, h.YSg)(),
          l = (0, h.wLl)(),
          g = (0, h.dE6)(),
          y = new m.JC(),
          [p] = (0, c.useState)(() => {
            var e;
            let t = {
              ...s,
              logger: l,
              modelActionsLogger: g,
              localStorage: y,
              containerStorage: n,
              config: r,
            };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? tn(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : tn(f, t);
          });
        return (
          (0, c.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, u.Xx)(p, to(p, t)), delete window.__STATE_SNAPSHOT__;
            }
            return (
              e(),
              window.addEventListener("yMusicStateSnapshotUpdated", e),
              () => window.removeEventListener("yMusicStateSnapshotUpdated", e)
            );
          }, [p]),
          (0, o.jsx)(h.xfX.Provider, { value: p, children: t })
        );
      };
    },
    61537: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ThemeProvider: function () {
            return s;
          },
        });
      var i = a(95660),
        n = a(71859),
        r = a(20794);
      let s = (e) => {
        let { children: t } = e,
          a = (0, r.uK4)().get(r.V0J),
          s = (0, r.ozu)(),
          [o, l] = (0, n.useState)((0, r.NK4)(a.get(r.BUb.Theme), s));
        (0, n.useEffect)(() => {
          (0, r.kzC)(a.get(r.BUb.Theme));
        }, [a]),
          (0, n.useEffect)(() => {
            a.get(r.BUb.Theme) === r.rLu && l(s);
          }, [s, a]);
        let u = (0, n.useMemo)(() => ({ theme: o, setTheme: l }), [o]);
        return (0, i.jsx)(r.Nil.Provider, { value: u, children: t });
      };
    },
    4466: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          TranslationsProvider: function () {
            return s;
          },
        });
      var i = a(95660),
        n = a(30214),
        r = a(20794);
      let s = (e) => {
        let { children: t } = e,
          { dictionary: a, language: s, defaultLanguage: o } = (0, r.ZSk)(),
          l = (0, r.J4i)();
        return (0, i.jsx)(n.Z, {
          onError: l,
          defaultLocale: o,
          locale: s,
          messages: a,
          children: t,
        });
      };
    },
    99565: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return o.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return n;
        },
      });
      var i = a(97898);
      let n = (e) => ({
          tag: e.tag,
          title: e.title,
          subGenres: (0, i.pj)(
            (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
          ),
        }),
        r = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(r),
        });
      var o = a(96194);
    },
    96194: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return u;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(42255),
        s = a(96235),
        o = a(60396),
        l = a.n(o);
      let u = (0, n.Pi)((e) => {
        let { tag: t, title: a, subGenres: n } = e;
        return (0, i.jsxs)("div", {
          className: l().root,
          children: [
            (0, i.jsx)(s.rU, {
              className: l().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(r.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: l().linkTitle,
                children: a,
              }),
            }),
            n.length > 0 &&
              (0, i.jsx)("div", {
                className: l().list,
                children: n.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: l().item,
                      children: (0, i.jsx)(s.rU, {
                        className: l().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(r.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: l().linkTitle,
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
    46615: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        u: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).FILE_TOO_LARGE = "FILE_TOO_LARGE"),
        (n.TOO_MANY_FILES = "TOO_MANY_FILES"),
        (n.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (n.SUCCESS = "SUCCESS");
    },
    15736: function (e, t, a) {
      "use strict";
      a.d(t, {
        UgcUploadProvider: function () {
          return f;
        },
      });
      var i,
        n,
        r = a(44744),
        s = a(71859),
        o = a(20794),
        l = a(95660),
        u = a(36621),
        d = a(96235),
        c = a(71037),
        m = a(42255),
        h = a(89916),
        g = a.n(h);
      ((i = n || (n = {})).ERROR = "error"), (i.SUCCESS = "success");
      let y = (e) => {
        let { playlistName: t, playlistUuid: a, variant: i } = e,
          n = (0, s.useMemo)(
            () =>
              (0, l.jsx)(d.rU, {
                className: g().link,
                href: "/playlists/".concat(a),
                children: (0, l.jsx)(m.Caption, {
                  className: g().title,
                  variant: "span",
                  type: "controls",
                  size: "m",
                  lineClamp: 1,
                  children: t,
                }),
              }),
            [t, a],
          ),
          r = (0, s.useMemo)(
            () =>
              "error" === i
                ? (0, l.jsx)(c.Z, {
                    id: "ugc.notification-unknown-error",
                    values: { playlistName: n },
                  })
                : (0, l.jsx)(c.Z, {
                    id: "ugc.notification-success",
                    values: { playlistName: n },
                  }),
            [n, i],
          );
        return (0, l.jsx)(d.Yj, {
          className: g().root,
          message: (0, l.jsx)(m.Caption, {
            variant: "div",
            type: "controls",
            size: "m",
            children: r,
          }),
        });
      };
      var p = a(46615);
      let v = () => {
          var e;
          let {
              ugcUploadCenter: { notifications: t },
              playlist: a,
            } = (0, o.oR4)(),
            { notify: i } = (0, o.d$W)(),
            { formatMessage: r } = (0, u.Z)();
          (0, s.useEffect)(() => {
            t.showAllNotifications().forEach((e) => {
              switch (e.type) {
                case p.u.FILE_TOO_LARGE:
                  i(
                    (0, l.jsx)(d.Q, {
                      error: r({ id: "ugc.notification-too-large-file-error" }),
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case p.u.TOO_MANY_FILES:
                  i(
                    (0, l.jsx)(d.Q, {
                      error: r({ id: "ugc.notification-too-many-files-error" }),
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case p.u.UNKNOWN_ERROR:
                  i(
                    (0, l.jsx)(y, {
                      playlistName: e.playlist.title,
                      playlistUuid: e.playlist.uuid,
                      variant: n.ERROR,
                    }),
                    { containerId: o.W$x.ERROR },
                  );
                  break;
                case p.u.SUCCESS:
                  var t;
                  (null === (t = a.meta) || void 0 === t ? void 0 : t.kind) !==
                    e.playlist.kind &&
                    i(
                      (0, l.jsx)(y, {
                        playlistName: e.playlist.title,
                        playlistUuid: e.playlist.uuid,
                        variant: n.SUCCESS,
                      }),
                      { containerId: o.W$x.INFO },
                    );
              }
            });
          }, [
            r,
            t,
            t.pairs.length,
            i,
            null === (e = a.meta) || void 0 === e ? void 0 : e.kind,
          ]);
        },
        f = (0, r.Pi)(() => {
          let { ugcUploadCenter: e } = (0, o.oR4)(),
            t = (0, s.useRef)();
          v();
          let a = (0, s.useCallback)(() => {
              e.checkProcessingTracks();
            }, [e]),
            i = (0, s.useCallback)(() => {
              t.current || (t.current = setInterval(a, 2e3));
            }, [a]),
            n = (0, s.useCallback)(() => {
              clearInterval(t.current), (t.current = void 0);
            }, []);
          (0, s.useEffect)(() => {
            e.shouldCheckProcessingTracks ? i() : n();
          }, [n, i, e.shouldCheckProcessingTracks]),
            (0, s.useEffect)(() => () => n(), [n]);
        });
    },
    94093: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return G.AlbumPage;
        },
        Lf: function () {
          return R;
        },
      });
      var i,
        n,
        r,
        s = a(97898),
        o = a(23874),
        l = a(43236),
        u = a(1925),
        d = a(81337),
        c = a(62812);
      ((n || (n = {})).RECENT_ALBUMS = "recent-albums"),
        ((i = r || (r = {}))[(i.DAY = 1)] = "DAY"),
        (i[(i.WEEK = 7)] = "WEEK"),
        (i[(i.MONTH = 30)] = "MONTH");
      var m = a(46537),
        h = a(13555),
        g = a(88217),
        y = a(24980),
        p = a(43683),
        v = a(20794),
        f = a(15526);
      let S = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var E = a(54146);
      let b = (e) => ({ type: p.lf.TEXT, data: e || null }),
        _ = (e) => {
          var t;
          return (0, s.pj)({
            type:
              (null === (t = e.data) || void 0 === t ? void 0 : t.type) ||
              c.V.TRACK,
            id: e.id,
            data: e.data || null,
            loadingState: e.loadingState,
            position: e.position,
            isBest: e.isBest,
            positionInContext: e.positionInContext,
            hasEverFinished: e.hasEverFinished,
          });
        },
        P = (e) => "".concat(e, "-text"),
        C = (e) => String(e),
        N = (e, t, a, i) => {
          e.forEach((e) => {
            var n;
            if (null === (n = e.albums) || void 0 === n ? void 0 : n[0]) {
              let n = a.get(C(e.id));
              null == n ||
                n.forEach((a) => {
                  var n, r, s;
                  let o = t[a];
                  t[a] = _({
                    id: e.id,
                    loadingState: v.Gui.RESOLVE,
                    positionInContext: null == o ? void 0 : o.positionInContext,
                    data: (0, E.Vt)(e, {
                      hasEverFinished: null == o ? void 0 : o.hasEverFinished,
                    }),
                    position:
                      null === (s = e.albums) || void 0 === s
                        ? void 0
                        : null === (r = s[0]) || void 0 === r
                          ? void 0
                          : null === (n = r.trackPosition) || void 0 === n
                            ? void 0
                            : n.index,
                    isBest: null == i ? void 0 : i.includes(Number(e.id)),
                    hasEverFinished: null == o ? void 0 : o.hasEverFinished,
                  });
                });
              let r = a.get(P(e.id));
              null == r ||
                r.forEach((a) => {
                  var i, n, r;
                  t[a] = b(
                    null === (r = e.albums) || void 0 === r
                      ? void 0
                      : null === (n = r[0]) || void 0 === n
                        ? void 0
                        : null === (i = n.trackPosition) || void 0 === i
                          ? void 0
                          : i.volume,
                  );
                });
            }
          });
        },
        k = (e, t, a) => {
          let i = 0;
          e.volumes.forEach((n) => {
            e.volumes.length > 1 &&
              n[0] &&
              (t.push(b()), a.set(P(n[0].id), [t.length - 1])),
              n.forEach((e) => {
                t.push(
                  _({
                    id: e.id,
                    loadingState: v.Gui.IDLE,
                    positionInContext: i,
                  }),
                );
                let n = a.get(String(e.id));
                a.set(C(e.id), n ? [...n, t.length - 1] : [t.length - 1]), i++;
              });
          });
        },
        I = (e) =>
          (0, s.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(h.ym),
          }),
        T = (e, t, a, i) => {
          e.forEach((e) => {
            let n = a.get(String(e));
            null == n ||
              n.forEach((a) => {
                var n, r;
                t[a] = _({
                  id: e,
                  loadingState: i,
                  positionInContext:
                    null === (n = t[a]) || void 0 === n
                      ? void 0
                      : n.positionInContext,
                  hasEverFinished:
                    null === (r = t[a]) || void 0 === r
                      ? void 0
                      : r.hasEverFinished,
                });
              });
          });
        },
        A = s.V5.model("AlbumDonations", {
          loadingState: s.V5.enumeration(Object.values(v.Gui)),
          items: s.V5.maybeNull(s.V5.array(g.Ew)),
        }),
        D = s.V5.model("LabelItem", { id: s.V5.number, name: s.V5.string }),
        x = s.V5.model("RelatedAlbumsPage", {
          loadingState: s.V5.enumeration(Object.values(v.Gui)),
          items: s.V5.array(h.ug),
        }),
        L = s.V5.model("RelatedContent", {
          loadingState: s.V5.enumeration(Object.values(v.Gui)),
          items: s.V5.maybeNull(s.V5.array(m.fd)),
        }),
        R = s.V5.compose(
          s.V5.model("AlbumPage", {
            id: s.V5.maybeNull(s.V5.number),
            meta: s.V5.maybeNull(h.ug),
            items: s.V5.array(m.JP),
            indexItems: s.V5.map(s.V5.array(s.V5.number)),
            loadingState: s.V5.enumeration(Object.values(v.Gui)),
            errorStatusCode: s.V5.maybeNull(s.V5.number),
            deprecationTargetAlbumId: s.V5.maybeNull(s.V5.number),
            latestGenreAlbums: x,
            otherArtistAlbums: x,
            otherAlbumVersions: s.V5.array(h.ug),
            labels: s.V5.maybeNull(s.V5.array(D)),
            description: s.V5.maybe(s.V5.string),
            donations: A,
            relatedContent: L,
            allTracksUnfinished: s.V5.boolean,
          }),
          f.ie,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [l.V.PODCAST, l.V.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, n, r;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (r = e.meta) || void 0 === r
                  ? void 0
                  : null === (n = r.artists[0]) || void 0 === n
                    ? void 0
                    : n.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var s;
              return !!(
                !this.isNonMusicType &&
                (null === (s = e.meta) || void 0 === s ? void 0 : s.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === v.Gui.REJECT &&
                e.errorStatusCode === o.CN.NOT_FOUND
              );
            },
            get isRejected() {
              return e.loadingState === v.Gui.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === v.Gui.IDLE ||
                e.loadingState === v.Gui.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === v.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === v.Gui.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === v.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === v.Gui.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === v.Gui.IDLE ||
                e.loadingState === v.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === v.Gui.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === v.Gui.IDLE ||
                e.latestGenreAlbums.loadingState === v.Gui.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === v.Gui.IDLE ||
                e.otherArtistAlbums.loadingState === v.Gui.PENDING
              );
            },
            get isRelatedContentLoading() {
              return (
                e.relatedContent.loadingState === v.Gui.IDLE ||
                e.relatedContent.loadingState === v.Gui.PENDING
              );
            },
            get contextMeta() {
              var u, d, c, m, h, g, y, f, S, E;
              return {
                id: e.meta.id,
                title: null === (u = e.meta) || void 0 === u ? void 0 : u.title,
                coverUri:
                  null === (d = e.meta) || void 0 === d ? void 0 : d.coverUri,
                type: null === (c = e.meta) || void 0 === c ? void 0 : c.type,
                year: null === (m = e.meta) || void 0 === m ? void 0 : m.year,
                version:
                  null === (h = e.meta) || void 0 === h ? void 0 : h.version,
                contentWarning:
                  null === (g = e.meta) || void 0 === g
                    ? void 0
                    : g.contentWarning,
                genre: null === (y = e.meta) || void 0 === y ? void 0 : y.genre,
                likesCount:
                  null === (f = e.meta) || void 0 === f ? void 0 : f.likesCount,
                averageColor:
                  null === (S = e.meta) || void 0 === S
                    ? void 0
                    : S.averageColor,
                available:
                  null === (E = e.meta) || void 0 === E
                    ? void 0
                    : E.isAvailable,
              };
            },
            get lastEpisodes() {
              return e.items
                .filter((e) => e.type !== p.lf.TEXT)
                .slice(0, 5)
                .map((e) => e);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
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
                    return a && t !== p.lf.TEXT;
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
                  if (e.type === p.lf.TEXT) return;
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
                  return i.error(e), u.P.ERROR;
                }
              }),
              markUnfinished: (0, s.ls)(function* (t) {
                let { streamsResource: a, modelActionsLogger: i } = (0, s.dU)(
                  e,
                );
                try {
                  return yield a.markAlbumUnfinished(t);
                } catch (e) {
                  return i.error(e), u.P.ERROR;
                }
              }),
              getLatestGenreAlbums: (0, s.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, s.dU)(e);
                if (e.latestGenreAlbums.loadingState !== v.Gui.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = v.Gui.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, s.pj)(i.albums.map(h.ym))),
                      (e.latestGenreAlbums.loadingState = v.Gui.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = v.Gui.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, s.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: n } = (0, s.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== v.Gui.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = v.Gui.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = v.Gui.PENDING;
                    let n = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, s.pj)(
                      n.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(h.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = v.Gui.RESOLVE);
                  } catch (t) {
                    n.error(t),
                      (e.otherArtistAlbums.loadingState = v.Gui.REJECT);
                  }
              }),
              getTracks: (0, s.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: n } = (0, s.dU)(e);
                try {
                  var r;
                  if (!(null === (r = e.meta) || void 0 === r ? void 0 : r.id))
                    return;
                  T(a, e.items, e.indexItems, v.Gui.PENDING);
                  let t = yield i.getTracksMeta({
                    trackIds: S(a, e.meta.id),
                    withProgress: !0,
                  });
                  N(t, e.items, e.indexItems, e.meta.bestAlbumTracks);
                } catch (t) {
                  n.error(t), T(a, e.items, e.indexItems, v.Gui.REJECT);
                }
              }),
              getDonations: (0, s.ls)(function* (t) {
                let { albumId: a } = t,
                  { experiments: i } = (0, s.yj)(e),
                  { donationResource: n, modelActionsLogger: r } = (0, s.dU)(e);
                if (
                  i.checkExperiment(
                    v.peG.WebNextAlbumDonateChooserButton,
                    "on",
                  ) &&
                  e.donations.loadingState !== v.Gui.PENDING
                )
                  try {
                    e.donations.loadingState = v.Gui.PENDING;
                    let { donations: t } = yield n.getAlbumDonations({
                      albumId: a,
                    });
                    t && (e.donations.items = (0, s.pj)(t.map(g.fv))),
                      (e.donations.loadingState = v.Gui.RESOLVE);
                  } catch (t) {
                    r.error(t), (e.donations.loadingState = v.Gui.REJECT);
                  }
              }),
              getData: (0, s.ls)(function* (a) {
                let { albumId: i, resumeStream: u, preloadedAlbum: m } = a,
                  { albumResource: g, modelActionsLogger: p } = (0, s.dU)(e),
                  { experiments: f, disclaimer: S } = (0, s.yj)(e),
                  E = f.checkExperiment(
                    v.peG.WebNextAlbumDisableVersions,
                    "on",
                  ),
                  b = f.checkExperiment(v.peG.WebNextAlbumDisableTracks, "on"),
                  _ = f.checkExperiment(
                    v.peG.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  P = f.checkExperiment(
                    v.peG.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  C = f.checkExperiment(v.peG.WebNextLegalRejectAlbum, "on"),
                  N = f.checkExperiment(v.peG.WebNextAgentPodcast, "on");
                if (((e.id = i), e.loadingState !== v.Gui.PENDING))
                  try {
                    var I, T, A, D, x;
                    let a, p;
                    e.loadingState = v.Gui.PENDING;
                    let f = m;
                    if (
                      (f ||
                        (f = yield g.getAlbumWithTracksIds({
                          albumId: i,
                          resumeStream: u,
                        })),
                      (null == f ? void 0 : f.error) === "not-found")
                    ) {
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                        (e.loadingState = v.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = v.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = v.Gui.REJECT);
                      return;
                    }
                    if (
                      null === (I = f.deprecation) || void 0 === I
                        ? void 0
                        : I.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        f.deprecation.targetAlbumId),
                        (e.loadingState = v.Gui.RESOLVE);
                      return;
                    }
                    let L = (
                        null !== (T = f.disclaimers) && void 0 !== T ? T : []
                      ).includes(d.e.MODAL),
                      R =
                        f.type === l.V.PODCAST &&
                        (null !== (A = f.disclaimers) && void 0 !== A
                          ? A
                          : []
                        ).includes(d.e.FOREIGN_AGENT);
                    ((L && C) || (N && R)) &&
                      (yield S.getAlbumDisclaimer({ albumId: i }));
                    let { sonataState: G } = (0, s.yj)(e);
                    if (
                      (G.setUnloadedEntitiesData(
                        f.volumes.flat().map((e) => (0, y.RN)(e.id)),
                      ),
                      (e.meta = (0, h.ym)(f)),
                      (e.labels = (0, s.pj)(f.labels)),
                      (e.contentWarning = (0, s.pj)(f.contentWarning)),
                      (e.description = (0, s.pj)(f.description)),
                      !E &&
                        f.duplicates &&
                        f.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, s.pj)(
                          null === (D = f.duplicates) || void 0 === D
                            ? void 0
                            : D.map(h.ym),
                        )),
                      !b)
                    ) {
                      k(f, e.items, e.indexItems);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === c.V.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !_ && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: n.RECENT_ALBUMS,
                          period: r.WEEK,
                          pageSize: 8,
                          genre: f.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = v.Gui.RESOLVE),
                      !P && e.isOtherArtistAlbumsAvailable
                        ? (p = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (x = f.artists[0]) || void 0 === x
                                  ? void 0
                                  : x.id,
                              ),
                              limit: 8,
                            },
                            i,
                          ))
                        : (e.otherArtistAlbums.loadingState = v.Gui.RESOLVE),
                      yield Promise.allSettled([a, p]),
                      e.loadingState !== v.Gui.IDLE &&
                        (e.loadingState = v.Gui.RESOLVE);
                  } catch (t) {
                    p.error(t),
                      t instanceof o.du &&
                        (t.statusCode === o.CN.NOT_FOUND ||
                          t.statusCode === o.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = o.CN.NOT_FOUND),
                      e.loadingState !== v.Gui.IDLE &&
                        ((e.loadingState = v.Gui.REJECT),
                        (e.otherArtistAlbums.loadingState = v.Gui.REJECT),
                        (e.latestGenreAlbums.loadingState = v.Gui.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, s.ls)(function* () {
                let { albumResource: t, modelActionsLogger: a } = (0, s.dU)(e);
                if (e.relatedContent.loadingState !== v.Gui.PENDING)
                  try {
                    var i, n;
                    if (
                      !(null === (i = e.meta) || void 0 === i ? void 0 : i.id)
                    )
                      return;
                    e.relatedContent.loadingState = v.Gui.PENDING;
                    let a = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, s.pj)(
                      null === (n = a.blocks) || void 0 === n
                        ? void 0
                        : n.map(I),
                    )),
                      (e.relatedContent.loadingState = v.Gui.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.relatedContent.loadingState = v.Gui.REJECT);
                  }
              }),
              reset() {
                let { sonataState: t } = (0, s.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, s.pj)([])),
                  e.indexItems.clear(),
                  (e.loadingState = v.Gui.IDLE),
                  (e.donations.loadingState = v.Gui.IDLE),
                  (e.donations.items = null),
                  (e.latestGenreAlbums.loadingState = v.Gui.IDLE),
                  (e.latestGenreAlbums.items = (0, s.pj)([])),
                  (e.otherArtistAlbums.loadingState = v.Gui.IDLE),
                  (e.otherArtistAlbums.items = (0, s.pj)([])),
                  (e.otherAlbumVersions = (0, s.pj)([])),
                  (e.description = ""),
                  (e.labels = null),
                  (e.relatedContent.loadingState = v.Gui.IDLE),
                  (e.relatedContent.items = null),
                  (e.allTracksUnfinished = !1);
              },
            };
            return t;
          });
      a(50193);
      var G = a(29086);
    },
    6799: function (e, t, a) {
      "use strict";
      a.d(t, {
        _1: function () {
          return c;
        },
        oA: function () {
          return m.ChartPodcastsPage;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(13555),
        s = a(20794);
      let o = i.V5.model("ChartPodcastsPage", {
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        title: i.V5.maybeNull(i.V5.string),
        items: i.V5.array(r.ug),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === s.Gui.IDLE || e.loadingState === s.Gui.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === s.Gui.RESOLVE && !e.items.length,
              a =
                e.errorStatusCode === n.CN.NOT_FOUND ||
                e.errorStatusCode === n.CN.BAD_REQUEST;
            return (e.loadingState === s.Gui.REJECT && a) || t;
          },
          get isSomethingWrong() {
            return e.loadingState === s.Gui.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { chartResource: a, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                let n;
                (e.loadingState = s.Gui.PENDING),
                  (n = t
                    ? yield a.getChartPodcastsCategory({ categoryId: t })
                    : yield a.getChartPodcasts()),
                  (e.title = n.title),
                  n.chartPositions &&
                    (e.items = (0, i.pj)(
                      n.chartPositions.map((e) =>
                        (0, r.re)(e.album, e.chartPosition),
                      ),
                    )),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof n.du &&
                    (t.statusCode === n.CN.NOT_FOUND ||
                      t.statusCode === n.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = n.CN.NOT_FOUND),
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
      var l = a(54146);
      let u = i.V5.model("ChartPagePlaylistModel", {
          uuid: i.V5.string,
          uid: i.V5.number,
          kind: i.V5.number,
        }),
        d = i.V5.model("ChartTracksPageModel", {
          title: i.V5.maybeNull(i.V5.string),
          playlistMeta: i.V5.maybeNull(u),
          items: i.V5.array(l.le),
          loadingState: i.V5.enumeration(Object.values(s.Gui)),
        })
          .actions((e) => ({
            getTracks: (0, i.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, i.dU)(e);
              if (e.loadingState !== s.Gui.PENDING)
                try {
                  e.loadingState = s.Gui.PENDING;
                  let a = yield t.getChartTracks();
                  (e.title = a.title),
                    (e.playlistMeta = (0, i.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, i.pj)(
                      a.chartPositions.map((e) =>
                        (0, l.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === s.Gui.PENDING ||
                e.loadingState === s.Gui.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === s.Gui.REJECT;
            },
          })),
        c = i.V5.model("ChartPageModel", {
          tracksSubPage: d,
          podcastsSubPage: o,
        });
      a(25348);
      var m = a(96236);
      a(59654);
    },
    25348: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsNotFoundPage: function () {
          return l;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(33558),
        o = a(20794);
      let l = (0, n.Pi)(() => {
        let { podcastsSubPage: e } = (0, o.oR4)().chart;
        return (
          (0, r.useEffect)(() => {
            e.reset();
          }, []),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    96236: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartPodcastsPage: function () {
          return S;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(9883),
        d = a(18344),
        c = a(42255),
        m = a(98836),
        h = a(13555),
        g = a(30476),
        y = a(20794),
        p = a(96235),
        v = a(5040),
        f = a.n(v);
      let S = (0, r.Pi)((e) => {
        let { categoryId: t } = e,
          {
            chart: { podcastsSubPage: a },
            settings: r,
          } = (0, y.oR4)(),
          v = r.layout === y.t8m.Mobile,
          { contentScrollRef: S, setContentScrollRef: E } = (0, y.$Y6)(),
          { formatMessage: b } = (0, l.Z)(),
          _ = (0, y.k67)();
        a.loadingState === y.Gui.IDLE && (0, o.use)(a.getData(t));
        let P = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(p.$_, { className: f().footer }),
            }),
            [],
          ),
          C = (0, o.useMemo)(
            () =>
              a.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: f().shimmerTitle,
                    radius: "l",
                  }),
            [a.title],
          );
        if (
          ((0, y.NOh)(a.loadingState === y.Gui.RESOLVE),
          a.isNotFound && (0, s.notFound)(),
          a.isSomethingWrong)
        )
          return (0, i.jsx)(m.D, {});
        let N = a.isLoading ? 20 : a.items.length;
        return (
          (0, o.useEffect)(
            () => () => {
              a.reset();
            },
            [a],
          ),
          (0, i.jsx)(y.Lh6, {
            pageId: t ? y.Rhz.CHART_PODCASTS_CATEGORY : y.Rhz.CHART_PODCASTS,
            children: (0, i.jsx)(g.I7, {
              scrollElement: S,
              outerTitle: a.title,
              children: (0, i.jsxs)("div", {
                className: f().root,
                ...(0, u.BA)(u.Br.chart.CHART_PODCASTS),
                children: [
                  (0, i.jsx)(p.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: _.canBack,
                    children: C,
                  }),
                  (0, i.jsx)(p.Wv, {
                    className: (0, n.W)(f().scrollContainer, f().important),
                    listClassName: f().content,
                    customComponents: P,
                    itemContentCallback: (e) => {
                      let t = a.items[e],
                        n = b(
                          { id: "loading-messages.entity-is-loading" },
                          { entityName: b({ id: "entity-names.album" }) },
                        );
                      return !t || a.isLoading
                        ? (0, i.jsx)(p.hi, { "aria-label": n })
                        : (0, i.jsx)(h.rf, {
                            album: t,
                            contentLinesCount: 3,
                            withLikesCount: !0,
                            withChart: !0,
                            withAddition: !1,
                          });
                    },
                    handleRef: E,
                    initialItemCount: N,
                    totalCount: N,
                    isMobileLayout: v,
                    useWindowScroll: v,
                    context: {
                      listAriaLabel: b({
                        id: "entity-names.chart-podcasts-list",
                      }),
                    },
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    59654: function (e, t, a) {
      "use strict";
      a.d(t, {
        ChartTracksPage: function () {
          return S;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(71859),
        o = a(36621),
        l = a(9883),
        u = a(20062),
        d = a(18344),
        c = a(42255),
        m = a(98836),
        h = a(30476),
        g = a(54146),
        y = a(20794),
        p = a(96235),
        v = a(47303),
        f = a.n(v);
      let S = (0, r.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            chart: { tracksSubPage: t },
            settings: a,
          } = (0, y.oR4)(),
          r = (0, y.k67)(),
          { contentScrollRef: v, setContentScrollRef: S } = (0, y.$Y6)(),
          E = a.layout === y.t8m.Mobile,
          { from: b } = (0, y.MhG)({ pageId: y.Rhz.CHART });
        t.loadingState === y.Gui.IDLE && (0, s.use)(t.getTracks()),
          (0, y.NOh)(t.loadingState === y.Gui.RESOLVE);
        let _ = (0, s.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(g._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: u.A.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: b,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, i.jsx)(p.DX, {
                    isActive: !0,
                    className: f().shimmerItem,
                    variant: y.Lxt.PLAYLIST,
                  });
            },
            [b, t.items, t.isLoading, t.playlistMeta],
          ),
          P = (0, s.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(p.$_, { className: f().footer }),
            }),
            [],
          ),
          C = (0, s.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: f().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === y.Gui.REJECT
          ? (0, i.jsx)(m.D, {})
          : (0, i.jsx)(y.Lh6, {
              pageId: y.Rhz.CHART,
              children: (0, i.jsx)(h.I7, {
                scrollElement: v,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: f().root,
                  ...(0, l.BA)(l.Br.chart.CHART_PAGE),
                  children: [
                    (0, i.jsx)(p.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: r.canBack,
                      children: C,
                    }),
                    (0, i.jsx)(p.Wv, {
                      className: (0, n.W)(f().scrollContainer, f().important),
                      listClassName: f().content,
                      customComponents: P,
                      totalCount: t.items.length,
                      itemContentCallback: _,
                      debounceDurationInMs: 300,
                      handleRef: S,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                      isMobileLayout: E,
                      useWindowScroll: E,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    2086: function (e, t, a) {
      "use strict";
      a.d(t, {
        o: function () {
          return h;
        },
        W: function () {
          return o;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(79153),
        s = a(20794);
      let o = i.V5.model("FavoriteTracksPage", {
        playlistUuid: i.V5.maybeNull(i.V5.string),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get playlistUrl() {
            if (e.playlistUuid) return "/playlists/".concat(e.playlistUuid);
            return;
          },
        }))
        .actions((e) => ({
          getPlaylistUrl: (0, i.ls)(function* () {
            let { landingResource: t, modelActionsLogger: a } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let a = yield t.getBlock(
                  {
                    uri: "/landing/block/collection/playlist-with-likes",
                    countWeb: 8,
                  },
                  r.g.COLLECTION_PLAYLIST_WITH_LIKES,
                );
                (e.playlistUuid = a.playlist.playlistUuid),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                a.error(t),
                  t instanceof n.du &&
                    (t.statusCode === n.CN.NOT_FOUND ||
                      t.statusCode === n.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = n.CN.NOT_FOUND),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = s.Gui.IDLE), (e.playlistUuid = null);
          },
        }));
      var l = a(95660),
        u = a(44744),
        d = a(71859),
        c = a(33558);
      let m = (0, u.Pi)(() => (0, l.jsx)(c.T, {})),
        h = (0, u.Pi)(() => {
          let { favoriteTracks: e } = (0, s.oR4)(),
            t = (0, s.s0h)(e.playlistUrl);
          if (
            (e.loadingState === s.Gui.IDLE && (0, d.use)(e.getPlaylistUrl()),
            (0, d.useEffect)(
              () => () => {
                e.reset();
              },
              [e],
            ),
            (0, d.useEffect)(() => {
              e.playlistUrl && t();
            }, [e.playlistUrl, t]),
            e.loadingState === s.Gui.REJECT)
          )
            return (0, l.jsx)(m, {});
        });
    },
    37129: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return y.GenreAlbumsPage;
        },
        eq: function () {
          return p.GenreArtistsPage;
        },
        a0: function () {
          return v.GenrePage;
        },
        Kx: function () {
          return g;
        },
        Fe: function () {
          return f.GenrePlaylistsPage;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(13555),
        s = a(82621),
        o = a(11232),
        l = a(20794),
        u = a(15526);
      let d = i.V5.model("GenreAlbumsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(r.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: s = 0,
                  pageSize: o = 20,
                  preloadedMeta: u,
                } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(s))) ||
                  e.alreadyRequestedPages.has("".concat(s))
                )
              ) {
                "number" == typeof s &&
                  e.alreadyRequestedPages.set("".concat(s), s);
                try {
                  var m;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(s), s);
                  let t = u;
                  t ||
                    (t = yield d.getMetatagAlbums({
                      id: a,
                      offset: s,
                      limit: o,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let n = { page: s, perPage: o, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let c = t.albums.map(r.ym);
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: s,
                    pageSize: o,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(s));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        c = i.V5.model("GenreArtistsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(o.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: r = 0,
                  pageSize: s = 20,
                  preloadedMeta: u,
                } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(r))) ||
                  e.alreadyRequestedPages.has("".concat(r))
                )
              ) {
                "number" == typeof r &&
                  e.alreadyRequestedPages.set("".concat(r), r);
                try {
                  var m;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(r), r);
                  let t = u;
                  t ||
                    (t = yield d.getMetatagArtists({
                      id: a,
                      offset: r,
                      limit: s,
                      period: "week",
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let n = { page: r, perPage: s, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let c = t.artists.map((e) => (0, o.d)(e.artist));
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: r,
                    pageSize: s,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(r));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          }));
      var m = a(39583);
      let h = i.V5.model("GenrePlaylistsPage", {
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          pager: i.V5.maybeNull(u.Vn),
          alreadyRequestedPages: i.V5.map(i.V5.number),
          pendingPages: i.V5.map(i.V5.number),
          requests: i.V5.maybeNull(i.V5.number),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          fullTitle: i.V5.maybeNull(i.V5.string),
          items: i.V5.array(i.V5.maybeNull(m.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === l.Gui.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === l.Gui.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let {
                  metatagId: a,
                  page: n = 0,
                  pageSize: r = 20,
                  preloadedMeta: s,
                } = t,
                { metatagsResource: o, modelActionsLogger: u } = (0, i.dU)(e);
              if (
                !(
                  (e.loadingState === l.Gui.PENDING &&
                    e.pendingPages.has("".concat(n))) ||
                  e.alreadyRequestedPages.has("".concat(n))
                )
              ) {
                "number" == typeof n &&
                  e.alreadyRequestedPages.set("".concat(n), n);
                try {
                  var d;
                  (e.loadingState = l.Gui.PENDING),
                    e.pendingPages.set("".concat(n), n);
                  let t = s;
                  t ||
                    (t = yield o.getMetatagPlaylists({
                      id: a,
                      offset: n,
                      limit: r,
                      withLikesCount: !0,
                    })),
                    (e.fullTitle = t.title.fullTitle);
                  let u = { page: n, perPage: r, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, i.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let c = t.playlists.map(m.PV);
                  (0, l.AG_)({
                    items: e.items,
                    mappedRawItems: c,
                    page: n,
                    pageSize: r,
                  }),
                    (e.pager = u),
                    (e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  u.error(t),
                    e.alreadyRequestedPages.delete("".concat(n)),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(n));
                }
              }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, i.pj)([]));
            },
          })),
        g = i.V5.model("GenrePage", {
          id: i.V5.maybeNull(i.V5.string),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
          loadingState: i.V5.enumeration(Object.values(l.Gui)),
          fullTitle: i.V5.maybeNull(i.V5.string),
          artists: i.V5.array(o.Go),
          albums: i.V5.array(r.ug),
          playlists: i.V5.array(s.d2),
          albumsSubpage: d,
          artistsSubpage: c,
          playlistsSubpage: h,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === l.Gui.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && a) || t;
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { id: a, preloadedMeta: u } = t,
                { metatagsResource: d, modelActionsLogger: c } = (0, i.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  e.loadingState = l.Gui.PENDING;
                  let t = u;
                  t || (t = yield d.getMetatagById({ id: a })),
                    (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, i.pj)(t.artists.map(o.d))),
                    (e.albums = (0, i.pj)(t.albums.map(r.ym))),
                    (e.playlists = (0, i.pj)(t.playlists.map(s.Q9))),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.RESOLVE);
                } catch (t) {
                  c.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== l.Gui.IDLE &&
                      (e.loadingState = l.Gui.REJECT);
                }
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, i.pj)([])),
                (e.albums = (0, i.pj)([])),
                (e.playlists = (0, i.pj)([]));
            },
          }));
      var y = a(45656),
        p = a(90337);
      a(18256);
      var v = a(85986),
        f = a(7247);
      a(21535);
      var S = a(71859),
        E = a(93761);
      let b = async (e, t) => {
        if (!e)
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        try {
          let {
              container: a,
              backendHostTld: i,
              locale: n,
              host: r,
              fullUrl: s,
              requestUrl: o,
            } = await (0, l.rbP)(),
            u = a.get(l.ZOY);
          return {
            genreMeta: await t(u, e),
            tld: i,
            locale: n,
            host: r,
            fullUrl: s,
            url: o,
          };
        } catch (e) {
          return { tld: "", locale: null, host: "", fullUrl: null, url: null };
        }
      };
      (0, S.cache)(async (e) =>
        b(e, async (e, t) =>
          e.getMetatagAlbums({ id: t, offset: 0, limit: E.O }),
        ),
      ),
        (0, S.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagArtists({
              id: t,
              offset: 0,
              limit: E.O,
              period: "week",
            }),
          ),
        ),
        (0, S.cache)(async (e) =>
          b(e, async (e, t) => e.getMetatagById({ id: t })),
        ),
        (0, S.cache)(async (e) =>
          b(e, async (e, t) =>
            e.getMetatagPlaylists({
              id: t,
              offset: 0,
              limit: E.O,
              withLikesCount: !0,
            }),
          ),
        );
    },
    93761: function (e, t, a) {
      "use strict";
      a.d(t, {
        O: function () {
          return i;
        },
      });
      let i = 20;
    },
    45656: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(42255),
        d = a(98836),
        c = a(13555),
        m = a(30476),
        h = a(20794),
        g = a(96235),
        y = a(93761),
        p = a(1249),
        v = a.n(p);
      let f = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: p, preloadedMeta: f } = e,
          {
            genre: { albumsSubpage: S },
            settings: E,
          } = (0, h.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: _, setContentScrollRef: P } = (0, h.$Y6)(),
          C = (0, h.k67)(),
          N = E.layout === h.t8m.Mobile;
        p &&
          S.loadingState === h.Gui.IDLE &&
          (0, o.use)(
            S.getData({
              preloadedMeta: f,
              metatagId: p,
              page: 0,
              pageSize: y.O,
            }),
          );
        let k = (0, o.useCallback)(
          (e) => {
            p && S.getData({ metatagId: p, page: e, pageSize: y.O });
          },
          [S, p],
        );
        (0, o.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        ),
          S.isNotFound && (0, s.notFound)(),
          (0, h.NOh)(S.loadingState === h.Gui.RESOLVE);
        let I = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return S.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(h.Lh6, {
              pageId: h.Rhz.GENRE_ALBUMS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: _,
                outerTitle: S.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: S.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, n.W)(v().scrollContainer, v().important),
                      customComponents: I,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == S
                              ? void 0
                              : null === (t = S.items) || void 0 === t
                                ? void 0
                                : t[e],
                          n = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(g.hi, { "aria-label": n });
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
                      onGetDataByPage: k,
                      pageSize: y.O,
                      totalRequests:
                        null !== (r = S.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: P,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.albums-list" },
                          { genreName: S.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: N,
                      useWindowScroll: N,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    90337: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(42255),
        d = a(98836),
        c = a(24136),
        m = a(30476),
        h = a(20794),
        g = a(96235),
        y = a(93761),
        p = a(56307),
        v = a.n(p);
      let f = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: p, preloadedMeta: f } = e,
          {
            genre: { artistsSubpage: S },
            settings: E,
          } = (0, h.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: _, setContentScrollRef: P } = (0, h.$Y6)(),
          C = (0, h.k67)(),
          N = E.layout === h.t8m.Mobile;
        p &&
          S.loadingState === h.Gui.IDLE &&
          (0, o.use)(
            S.getData({
              preloadedMeta: f,
              metatagId: p,
              page: 0,
              pageSize: y.O,
            }),
          );
        let k = (0, o.useCallback)(
          (e) => {
            p && S.getData({ metatagId: p, page: e, pageSize: y.O });
          },
          [S, p],
        );
        (0, o.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        ),
          S.isNotFound && (0, s.notFound)(),
          (0, h.NOh)(S.loadingState === h.Gui.RESOLVE);
        let I = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return S.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(h.Lh6, {
              pageId: h.Rhz.GENRE_ARTISTS,
              children: (0, i.jsx)(m.I7, {
                scrollElement: _,
                outerTitle: S.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: S.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, n.W)(v().scrollContainer, v().important),
                      customComponents: I,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == S
                              ? void 0
                              : null === (t = S.items) || void 0 === t
                                ? void 0
                                : t[e],
                          n = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(g.hi, {
                              "aria-label": n,
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
                      onGetDataByPage: k,
                      pageSize: y.O,
                      totalRequests:
                        null !== (r = S.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: P,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.artists-list" },
                          { genreName: S.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: N,
                      useWindowScroll: N,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    18256: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return s;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(33558);
      let s = (0, n.Pi)(() => (0, i.jsx)(r.T, {}));
    },
    85986: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return E;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(64275),
        d = a(42255),
        c = a(98836),
        m = a(13555),
        h = a(24136),
        g = a(30476),
        y = a(82621),
        p = a(20794),
        v = a(96235),
        f = a(9840),
        S = a.n(f);
      let E = (0, r.Pi)((e) => {
        let { metatagId: t, preloadedMeta: a } = e,
          { genre: r } = (0, p.oR4)(),
          { formatMessage: f } = (0, l.Z)(),
          { contentScrollRef: E, setContentScrollRef: b } = (0, p.$Y6)(),
          _ = (0, p.k67)();
        return (t &&
          r.loadingState === p.Gui.IDLE &&
          (0, o.use)(r.getData({ id: t, preloadedMeta: a })),
        r.isNotFound && (0, s.notFound)(),
        (0, o.useEffect)(
          () => () => {
            r.reset();
          },
          [r],
        ),
        (0, p.NOh)(r.loadingState === p.Gui.RESOLVE),
        r.loadingState !== p.Gui.REJECT || r.isNotFound)
          ? (0, i.jsx)(p.Lh6, {
              pageId: p.Rhz.GENRE,
              children: (0, i.jsxs)(g.I7, {
                scrollElement: E,
                outerTitle: r.fullTitle,
                children: [
                  (0, i.jsx)(v.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: _.canBack,
                    children: (0, i.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: r.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(u.t, {
                    className: S().root,
                    containerClassName: S().content,
                    ref: b,
                    children: (0, i.jsxs)("div", {
                      className: S().carouselBlocks,
                      children: [
                        r.hasPlaylists &&
                          (0, i.jsx)(p.Ja5, {
                            blockId: p.BEo.PLAYLISTS_CAROUSEL,
                            blockType: p.BEo.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: p.BEo.PLAYLISTS_CAROUSEL,
                            objectsCount: r.albums.length,
                            children: (0, i.jsx)(y.VD, {
                              isShimmerVisible: r.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, n.W)(
                                S().carouselBlockHeader,
                                S().carouselBlock,
                              ),
                              containerClassName: S().carouselBlock,
                              playlists: r.playlists,
                              title: f({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                r.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        r.hasAlbums &&
                          (0, i.jsx)(p.Ja5, {
                            blockId: p.BEo.ALBUMS_CAROUSEL,
                            blockType: p.BEo.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: p.BEo.ALBUMS_CAROUSEL,
                            objectsCount: r.albums.length,
                            children: (0, i.jsx)(m.wk, {
                              isShimmerVisible: r.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, n.W)(
                                S().carouselBlockHeader,
                                S().carouselBlock,
                              ),
                              containerClassName: S().carouselBlock,
                              albums: r.albums,
                              title: f({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                r.id,
                                "/albums",
                              ),
                            }),
                          }),
                        r.hasArtists &&
                          (0, i.jsx)(p.Ja5, {
                            blockId: p.BEo.ARTISTS_CAROUSEL,
                            blockType: p.BEo.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: p.BEo.ARTISTS_CAROUSEL,
                            objectsCount: r.albums.length,
                            children: (0, i.jsx)(v.HY, {
                              isShimmerVisible: r.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, n.W)(
                                S().carouselBlockHeader,
                                S().carouselBlock,
                              ),
                              containerClassName: S().carouselBlock,
                              title: f({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                r.id,
                                "/artists",
                              ),
                              children: r.artists.map((e) =>
                                (0, i.jsx)(
                                  h.IT,
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
            })
          : (0, i.jsx)(c.D, {});
      });
    },
    7247: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(42255),
        d = a(98836),
        c = a(30476),
        m = a(82621),
        h = a(20794),
        g = a(96235),
        y = a(93761),
        p = a(13968),
        v = a.n(p);
      let f = (0, r.Pi)((e) => {
        var t, a, r;
        let { metatagId: p, preloadedMeta: f } = e,
          {
            genre: { playlistsSubpage: S },
            settings: E,
          } = (0, h.oR4)(),
          { formatMessage: b } = (0, l.Z)(),
          { contentScrollRef: _, setContentScrollRef: P } = (0, h.$Y6)(),
          C = (0, h.k67)(),
          N = E.layout === h.t8m.Mobile;
        p &&
          S.loadingState === h.Gui.IDLE &&
          (0, o.use)(
            S.getData({
              preloadedMeta: f,
              metatagId: p,
              page: 0,
              pageSize: y.O,
            }),
          );
        let k = (0, o.useCallback)(
          (e) => {
            p && S.getData({ metatagId: p, page: e, pageSize: y.O });
          },
          [S, p],
        );
        (0, o.useEffect)(
          () => () => {
            S.reset();
          },
          [S],
        ),
          S.isNotFound && (0, s.notFound)(),
          (0, h.NOh)(S.loadingState === h.Gui.RESOLVE);
        let I = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: v().footer }) }),
          [],
        );
        return S.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(h.Lh6, {
              pageId: h.Rhz.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: _,
                outerTitle: S.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: v().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: C.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: S.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, n.W)(v().scrollContainer, v().important),
                      customComponents: I,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == S
                              ? void 0
                              : null === (t = S.items) || void 0 === t
                                ? void 0
                                : t[e],
                          n = b(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: b({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(g.hi, { "aria-label": n });
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
                      onGetDataByPage: k,
                      pageSize: y.O,
                      totalRequests:
                        null !== (r = S.requests) && void 0 !== r ? r : 0,
                      listClassName: v().content,
                      itemClassName: v().item,
                      handleRef: P,
                      context: {
                        listAriaLabel: b(
                          { id: "mixes.playlists-list" },
                          { genreName: S.fullTitle || "" },
                        ),
                      },
                      isMobileLayout: N,
                      useWindowScroll: N,
                    }),
                  ],
                }),
              }),
            });
      });
    },
    39535: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return l.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(99565),
        s = a(20794);
      let o = i.V5.model("GenresPageModel", {
        title: i.V5.maybeNull(i.V5.string),
        items: i.V5.array(r.fm),
        loadingState: i.V5.enumeration(Object.values(s.Gui)),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === s.Gui.IDLE || e.loadingState === s.Gui.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === s.Gui.RESOLVE && 0 === e.items.length;
            return e.errorStatusCode === n.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== s.Gui.PENDING)
              try {
                e.loadingState = s.Gui.PENDING;
                let o = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!o) {
                  e.errorStatusCode = n.CN.NOT_FOUND;
                  return;
                }
                (e.title = o.title),
                  (e.items = (0, i.pj)(o.leaves.map(r.uG))),
                  e.loadingState !== s.Gui.IDLE &&
                    (e.loadingState = s.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof n.du &&
                    (t.statusCode === n.CN.NOT_FOUND ||
                      t.statusCode === n.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = n.CN.NOT_FOUND),
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
      a(83511);
      var l = a(65190);
    },
    83511: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return r;
        },
      });
      var i = a(95660),
        n = a(33558);
      let r = () => (0, i.jsx)(n.T, {});
    },
    65190: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return p;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(97667),
        s = a(71859),
        o = a(64275),
        l = a(42255),
        u = a(98836),
        d = a(30476),
        c = a(99565),
        m = a(20794),
        h = a(96235),
        g = a(12997),
        y = a.n(g);
      let p = (0, n.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, m.oR4)(),
          { contentScrollRef: n, setContentScrollRef: g } = (0, m.$Y6)(),
          p = (0, m.k67)();
        return ((0, s.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, r.notFound)(),
        t && a.loadingState === m.Gui.IDLE && (0, s.use)(a.getData(t)),
        (0, m.NOh)(a.loadingState === m.Gui.RESOLVE),
        a.loadingState === m.Gui.REJECT)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsxs)(d.I7, {
              scrollElement: n,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(h.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: p.canBack,
                  children: (0, i.jsx)(l.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(o.t, {
                  className: y().root,
                  containerClassName: y().content,
                  ref: g,
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
    88747: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsNotFoundPage: function () {
          return l;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(33558),
        o = a(20794);
      let l = (0, n.Pi)(() => {
        let { kids: e } = (0, o.oR4)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    98587: function (e, t, a) {
      "use strict";
      a.d(t, {
        KidsPage: function () {
          return b;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(71037),
        d = a(9883),
        c = a(33413),
        m = a(64275),
        h = a(42255),
        g = a(44443),
        y = a(98836),
        p = a(30476),
        v = a(20794),
        f = a(96235),
        S = a(20240),
        E = a.n(S);
      let b = (0, r.Pi)(() => {
        let { kids: e, user: t, experiments: a } = (0, v.oR4)(),
          { formatMessage: r } = (0, l.Z)(),
          { contentScrollRef: S, setContentScrollRef: b } = (0, v.$Y6)();
        if (
          (a.checkExperiment(v.peG.WebNextKidsLanding, "on") ||
            (0, s.notFound)(),
          e.landing.loadingState === v.Gui.IDLE)
        ) {
          let i = a.checkExperiment(v.peG.WebNextSwitchMainSkeletons, "on")
            ? c.j.KIDS
            : c.j.KIDS_WEB;
          (0, o.use)(
            e.landing.getSkeleton(
              { id: i, showWizard: t.settings.showWizard },
              { preloadBlocks: 3 },
            ),
          );
        }
        (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, v.NOh)(e.landing.loadingState === v.Gui.RESOLVE);
        let _ = (0, g._B)(e.landing);
        return (0, i.jsx)(v.Lh6, {
          pageId: v.Rhz.KIDS,
          children: (0, i.jsxs)(p.I7, {
            scrollElement: S,
            outerTitle: r({ id: "kids.for-kids" }),
            children: [
              (0, i.jsx)(f.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: E().header,
                  children: (0, i.jsx)(h.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(u.Z, { id: "kids.for-kids" }),
                  }),
                }),
              }),
              (0, i.jsxs)(m.t, {
                className: E().root,
                containerClassName: E().content,
                ref: b,
                ...(0, d.BA)(d.Br.kids.KIDS_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, n.W)(E().landing, {
                      [E().landing_onlyWizard]: _,
                    }),
                    children: (0, i.jsx)(g.Od, {
                      landing: e.landing,
                      blockHeadingVariant: "h2",
                      errorComponent: (0, i.jsx)(y.D, {
                        className: E().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(f.$_, { className: E().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    73894: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return L;
        },
        S: function () {
          return l;
        },
      });
      var i = a(97898),
        n = a(48223),
        r = a(54146),
        s = a(20794);
      let o = i.V5.model("MyMusicDownloadedTracksPage", {
          items: i.V5.maybeNull(i.V5.array(r.le)),
          tracks: i.V5.maybeNull(i.V5.frozen()),
          loadingState: i.V5.enumeration(Object.values(s.Gui)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === s.Gui.IDLE;
            },
            get tracksDurationInMinutes() {
              var t, a;
              return (
                (null !==
                  (a =
                    null === (t = e.tracks) || void 0 === t
                      ? void 0
                      : t.reduce(
                          (e, t) => (t.durationMs ? e + t.durationMs : e),
                          0,
                        )) && void 0 !== a
                  ? a
                  : 0) /
                1e3 /
                60
              );
            },
            get entitesData() {
              if (!e.tracks) return [];
              return e.tracks.map((e) => ({ type: n.A.Music, meta: e }));
            },
          }))
          .actions((e) => ({
            getData: (0, i.ls)(function* (t) {
              let { modelActionsLogger: a } = (0, i.dU)(e);
              if (e.loadingState !== s.Gui.PENDING)
                try {
                  e.loadingState = s.Gui.PENDING;
                  let a = yield t.getTracks();
                  (e.tracks = a),
                    (e.items = (0, i.pj)(a.map((e) => (0, r.Vt)(e)))),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== s.Gui.IDLE &&
                      (e.loadingState = s.Gui.REJECT);
                }
            }),
            reset() {
              (e.items = null),
                (e.tracks = null),
                (e.loadingState = s.Gui.IDLE);
            },
          })),
        l = i.V5.model("MyMusicPage", { downloadedTracks: o });
      var u = a(95660),
        d = a(23974),
        c = a(44744),
        m = a(71859),
        h = a(36621),
        g = a(9883),
        y = a(20062),
        p = a(91809),
        v = a(98836),
        f = a(30476),
        S = a(96235),
        E = a(26748),
        b = a.n(E),
        _ = a(71037),
        P = a(42255),
        C = a(15856),
        N = a.n(C);
      let k = (0, c.Pi)(() => {
        var e;
        let {
            myMusic: { downloadedTracks: t },
          } = (0, s.oR4)(),
          a = (0, u.jsx)(P.Caption, {
            variant: "span",
            size: "s",
            weight: "medium",
            "aria-hidden": !0,
            children: "•",
          }),
          i = [];
        (null === (e = t.tracks) || void 0 === e ? void 0 : e.length) &&
          i.push(
            (0, u.jsx)(P.Caption, {
              variant: "span",
              size: "s",
              weight: "medium",
              lineClamp: 1,
              children: (0, u.jsx)(_.Z, {
                id: "entity-names.tracks-count",
                values: { value: t.tracks.length },
              }),
            }),
          );
        let n = Math.floor(t.tracksDurationInMinutes / 60),
          r = Math.floor(t.tracksDurationInMinutes % 60);
        return (
          (n || r) &&
            (i.push(a),
            i.push(
              (0, u.jsx)(P.Caption, {
                variant: "span",
                size: "s",
                weight: "medium",
                children: (0, u.jsx)(_.Z, {
                  id: "time.hours-minutes",
                  values: { hours: n, minutes: r },
                }),
              }),
            )),
          (0, u.jsx)("div", {
            className: N().root,
            children: i.map((e, t) => (0, m.cloneElement)(e, { key: t })),
          })
        );
      });
      var I = a(19730),
        T = a.n(I);
      let A = (0, c.Pi)(() => {
          let { isScrolling: e } = (0, m.useContext)(S.pI),
            t = (0, s.k67)(),
            {
              myMusic: { downloadedTracks: a },
              settings: i,
            } = (0, s.oR4)(),
            { from: n } = (0, s.MhG)({
              pageId: s.Rhz.OWN_TRACKS,
              blockId: s.aUg.TRACK_LIST,
            }),
            r = i.layout === s.t8m.Mobile,
            { isPlaying: o, togglePlay: l } = (0, s.qmq)({
              playContextParams: {
                contextData: {
                  type: y.A.Various,
                  meta: { id: s.Rhz.DOWNLOADS_TRACKS },
                  from: n,
                },
                entitiesData: a.entitesData,
                loadContextMeta: !1,
              },
            });
          return (0, u.jsx)("header", {
            className: T().root,
            "aria-hidden": e,
            children: (0, u.jsxs)("div", {
              className: T().container,
              children: [
                t.canBack &&
                  (0, u.jsx)(S.nP, {
                    withForwardControl: !1,
                    withBackwardControl: t.canBack,
                    buttonSize: "xxs",
                  }),
                (0, u.jsxs)("div", {
                  className: T().titleContainer,
                  children: [
                    (0, u.jsx)(P.Heading, {
                      variant: "h1",
                      weight: "bold",
                      size: "xs",
                      lineClamp: 1,
                      className: T().title,
                      children: (0, u.jsx)(_.Z, {
                        id: "offline.downloaded-tracks",
                      }),
                    }),
                    (0, u.jsx)(k, {}),
                  ],
                }),
                (0, u.jsx)(S.JM, {
                  withRipple: !0,
                  buttonVariant: "default",
                  radius: "xxxl",
                  size: "s",
                  color: "primary",
                  iconSize: "xxs",
                  isPlaying: o,
                  onClick: l,
                  className: T().playButton,
                  ariaHidden: e,
                  tabIndex: e ? -1 : 0,
                  children:
                    !r && (0, u.jsx)(_.Z, { id: "player-actions.listen" }),
                }),
              ],
            }),
          });
        }),
        D = (0, c.Pi)(() => {
          let { isScrolling: e } = (0, m.useContext)(S.pI),
            t = (0, s.k67)(),
            {
              myMusic: { downloadedTracks: a },
              settings: i,
            } = (0, s.oR4)(),
            { from: n } = (0, s.MhG)({
              pageId: s.Rhz.OWN_TRACKS,
              blockId: s.aUg.TRACK_LIST,
            }),
            r = i.layout === s.t8m.Mobile,
            { isPlaying: o, togglePlay: l } = (0, s.qmq)({
              playContextParams: {
                contextData: {
                  type: y.A.Various,
                  meta: { id: s.Rhz.DOWNLOADS_TRACKS },
                  from: n,
                },
                entitiesData: a.entitesData,
                loadContextMeta: !1,
              },
            });
          return (0, u.jsx)(S.h4, {
            variant: "composite",
            "aria-hidden": !e,
            stickyChild: (0, u.jsxs)("div", {
              className: T().container,
              children: [
                t.canBack &&
                  (0, u.jsx)(S.nP, {
                    withForwardControl: !1,
                    withBackwardControl: t.canBack,
                    buttonSize: "xxs",
                  }),
                (0, u.jsx)(P.Heading, {
                  variant: "h1",
                  weight: "bold",
                  size: "xs",
                  lineClamp: 1,
                  className: T().stickyTitle,
                  children: (0, u.jsx)(_.Z, {
                    id: "offline.downloaded-tracks",
                  }),
                }),
                (0, u.jsx)(S.JM, {
                  withRipple: !0,
                  buttonVariant: "default",
                  radius: "xxxl",
                  size: "s",
                  color: "primary",
                  iconSize: "xxs",
                  isPlaying: o,
                  onClick: l,
                  className: (0, d.W)(T().playButton, {
                    [T().stickyPlayButton]: !r,
                  }),
                  ariaHidden: !e,
                  tabIndex: e ? 0 : -1,
                  children:
                    !r && (0, u.jsx)(_.Z, { id: "player-actions.listen" }),
                }),
              ],
            }),
            stickyClassName: (0, d.W)(T().stickyHeader, T().important),
            staticClassName: (0, d.W)(T().staticHeader, T().important),
          });
        }),
        x = [p.aT.IDLE, p.aT.DOWNLOADED],
        L = (0, c.Pi)(() => {
          var e;
          let { contentScrollRef: t, setContentScrollRef: a } = (0, s.$Y6)(),
            { formatMessage: i } = (0, h.Z)(),
            {
              myMusic: { downloadedTracks: n },
            } = (0, s.oR4)(),
            { from: o } = (0, s.MhG)({
              pageId: s.Rhz.OWN_TRACKS,
              blockId: s.aUg.TRACK_LIST,
            }),
            l = (0, s.QwX)(),
            c = (0, m.useCallback)(() => {
              l && n.getData(l);
            }, [n, l]),
            E = (0, m.useCallback)(
              (e) => {
                let { state: t } = e;
                x.includes(t.loadingState) && c();
              },
              [c],
            );
          (0, m.useEffect)(() => {
            n.isNeededToLoad && c();
          }, [n.isNeededToLoad, c]),
            (0, m.useEffect)(
              () => (
                null == l || l.events.on(p._s.STATE_CHANGED, c),
                null == l || l.events.on(p._s.TRACK_CHANGED, E),
                () => {
                  null == l || l.events.off(p._s.STATE_CHANGED, c),
                    null == l || l.events.off(p._s.TRACK_CHANGED, E),
                    n.reset();
                }
              ),
              [n, c, E, l],
            ),
            (0, s.NOh)(n.loadingState === s.Gui.RESOLVE);
          let _ = (0, m.useMemo)(
            () => ({
              Header: () => (0, u.jsx)(A, {}),
              Footer: () => (0, u.jsx)(S.$_, { className: b().footer }),
            }),
            [],
          );
          if (n.loadingState === s.Gui.REJECT) return (0, u.jsx)(v.D, {});
          let P =
            (null === (e = n.items) || void 0 === e ? void 0 : e.length) || 10;
          return (0, u.jsx)(s.Lh6, {
            pageId: s.Rhz.DOWNLOADS_TRACKS,
            children: (0, u.jsx)(f.I7, {
              scrollElement: t,
              children: (0, u.jsxs)("div", {
                className: b().pageContainer,
                children: [
                  (0, u.jsx)(D, {}),
                  (0, u.jsx)(S.Wv, {
                    context: {
                      listAriaLabel: i({ id: "offline.downloaded-track-list" }),
                    },
                    className: (0, d.W)(b().root, b().important),
                    listClassName: b().content,
                    customComponents: _,
                    totalCount: P,
                    itemContentCallback: (e) => {
                      var t;
                      let a =
                        null === (t = n.items) || void 0 === t ? void 0 : t[e];
                      return a
                        ? (0, u.jsx)(r.O2, {
                            track: a,
                            playContextParams: {
                              contextData: {
                                type: y.A.Various,
                                meta: { id: s.Rhz.DOWNLOADS_TRACKS },
                                from: o,
                              },
                              entitiesData: n.entitesData,
                              queueParams: { index: e },
                              loadContextMeta: !1,
                            },
                          })
                        : (0, u.jsx)(S.DX, {
                            isActive: !0,
                            className: b().trackShimmer,
                            variant: s.Lxt.PLAYLIST,
                          });
                    },
                    debounceDurationInMs: 300,
                    initialItemCount: P,
                    handleRef: a,
                    shouldTriggerRangeChangedOnTotalCountChange: !0,
                    testId: g.Br.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                  }),
                ],
              }),
            }),
          });
        });
    },
    21325: function (e, t, a) {
      "use strict";
      a.d(t, {
        T4: function () {
          return x.NonMusicAlbumsPage;
        },
        z4: function () {
          return i.z;
        },
        ov: function () {
          return L.NonMusicCategoryPage;
        },
        C2: function () {
          return R.NonMusicCategoryPlaylistsPage;
        },
        NG: function () {
          return D;
        },
      });
      var i = a(13234),
        n = a(97898),
        r = a(23874),
        s = a(82621),
        o = a(39583),
        l = a(20794),
        u = a(15526);
      let d = n.V5.model("NonMusicCategoryPlaylistsDataItem", {
          uid: n.V5.number,
          kind: n.V5.number,
          data: n.V5.maybeNull(s.d2),
        }),
        c = n.V5.model("NonMusicCategoryPlaylistsPage", {
          errorStatusCode: n.V5.maybe(n.V5.number),
          loadingState: n.V5.enumeration(Object.values(l.Gui)),
          title: n.V5.maybeNull(n.V5.string),
          pager: n.V5.maybeNull(u.Vn),
          playlists: n.V5.maybeNull(n.V5.array(d)),
          alreadyRequestedPages: n.V5.map(n.V5.number),
          requests: n.V5.maybeNull(n.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === r.CN.NOT_FOUND ||
                e.errorStatusCode === r.CN.BAD_REQUEST;
              return e.loadingState === l.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => {
            let t = {
              getPlaylists: (0, n.ls)(function* (t) {
                var a, i, s;
                let { page: u = 0, pageSize: d = 20 } = t,
                  { playlistsResource: c, modelActionsLogger: m } = (0, n.dU)(
                    e,
                  );
                if (
                  !(
                    !(null === (a = e.playlists) || void 0 === a
                      ? void 0
                      : a.length) || e.alreadyRequestedPages.has("".concat(u))
                  )
                ) {
                  e.alreadyRequestedPages.set("".concat(u), u);
                  try {
                    let t = u * d,
                      a = e.playlists.slice(t, t + d),
                      r = yield c.getPlaylists({
                        playlistIds: a.map((e) =>
                          "".concat(e.uid, ":").concat(e.kind),
                        ),
                        resumeStream: !1,
                      });
                    e.requests =
                      (null !== (s = e.requests) && void 0 !== s ? s : 0) + 1;
                    let l = {
                        page: u,
                        perPage: d,
                        total:
                          null === (i = e.playlists) || void 0 === i
                            ? void 0
                            : i.length,
                      },
                      m = r.playlists.map(o.PV),
                      h = u * d,
                      g = 0;
                    for (let t = h; t < h + d; t++)
                      m[g] &&
                        e.playlists[t] &&
                        (e.playlists[t].data = (0, n.pj)(m[g])),
                        g++;
                    e.pager = l;
                  } catch (t) {
                    m.error(t),
                      t instanceof r.du &&
                        (t.statusCode === r.CN.NOT_FOUND ||
                          t.statusCode === r.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = r.CN.NOT_FOUND),
                      e.loadingState !== l.Gui.IDLE &&
                        (e.loadingState = l.Gui.REJECT);
                  }
                }
              }),
              getData: (0, n.ls)(function* (a) {
                let { categoryId: i, page: s = 0, pageSize: o = 20 } = a,
                  { nonMusicResource: u, modelActionsLogger: d } = (0, n.dU)(e);
                if (e.loadingState !== l.Gui.PENDING)
                  try {
                    e.loadingState = l.Gui.PENDING;
                    let a = yield u.getPlaylists({ categoryId: i });
                    (e.title = a.title),
                      a.entities &&
                        a.entities.length > 0 &&
                        (e.playlists = (0, n.pj)(
                          a.entities.map((e) => ({ uid: e.uid, kind: e.kind })),
                        )),
                      e.loadingState !== l.Gui.IDLE &&
                        (e.loadingState = l.Gui.RESOLVE),
                      yield t.getPlaylists({ page: s, pageSize: o });
                  } catch (t) {
                    d.error(t),
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
                  e.alreadyRequestedPages.clear(),
                  (e.title = null),
                  (e.playlists = (0, n.pj)([])),
                  (e.requests = null),
                  (e.pager = null);
              },
            };
            return t;
          });
      var m = a(44443),
        h = a(13555);
      let g = n.V5.model("NonMusicAlbumsPageItem", {
          id: n.V5.number,
          data: n.V5.maybeNull(h.ug),
        }),
        y = n.V5.model("NonMusicAlbumsPage", {
          errorStatusCode: n.V5.maybe(n.V5.number),
          loadingState: n.V5.enumeration(Object.values(l.Gui)),
          title: n.V5.maybeNull(n.V5.string),
          albums: n.V5.maybeNull(n.V5.array(g)),
          requestsCount: n.V5.maybe(n.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === r.CN.NOT_FOUND ||
                e.errorStatusCode === r.CN.BAD_REQUEST;
              return e.loadingState === l.Gui.REJECT && t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getEditorialAlbums: (0, n.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, n.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  var o;
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getEditorialAlbums({ id: a });
                  (e.title = t.title),
                    (null === (o = t.entities) || void 0 === o
                      ? void 0
                      : o.length) &&
                      (e.albums = (0, n.pj)(
                        t.entities.map((e) => ({ id: e })),
                      )),
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
            getCategoryAlbums: (0, n.ls)(function* (t) {
              let { id: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, n.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  var o;
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getCategoryAlbums({ id: a });
                  (e.title = t.title),
                    (null === (o = t.albums) || void 0 === o
                      ? void 0
                      : o.length) &&
                      (e.albums = (0, n.pj)(t.albums.map((e) => ({ id: e })))),
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
            getAlbumsByRange: (0, n.ls)(function* (t, a) {
              var i, r, s;
              let { albumResource: o, modelActionsLogger: l } = (0, n.dU)(e);
              if (
                !(null === (i = e.albums) || void 0 === i ? void 0 : i.length)
              )
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.albums.length));
              let u = [];
              for (let i = t; i <= a; i++)
                (null === (r = e.albums[i]) || void 0 === r ? void 0 : r.id) &&
                  !(null === (s = e.albums[i]) || void 0 === s
                    ? void 0
                    : s.data) &&
                  u.push(e.albums[i].id);
              if (!u.length) return null;
              try {
                let t = yield o.getAlbums({ albumIds: u });
                null == t ||
                  t.forEach((t) => {
                    var a;
                    null === (a = e.albums) ||
                      void 0 === a ||
                      a.forEach((a, i) => {
                        var n;
                        a.id === t.id &&
                          (null === (n = e.albums) || void 0 === n
                            ? void 0
                            : n[i]) &&
                          (e.albums[i].data = (0, h.ym)(t));
                      });
                  }),
                  e.requestsCount
                    ? (e.requestsCount = e.requestsCount + 1)
                    : (e.requestsCount = 1);
              } catch (e) {
                l.error(e);
              }
              return null;
            }),
            reset() {
              (e.loadingState = l.Gui.IDLE),
                (e.title = null),
                (e.albums = null),
                (e.requestsCount = 0);
            },
          }));
      var p = a(96159),
        v = a(79153),
        f = a(6609);
      let S = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, h.ym)(e.data.album),
            chart: e.data.chartPosition && (0, f.W5)(e.data.chartPosition),
            likesCount: e.data.album.likesCount,
          }));
          return (0, n.pj)({
            id: e.id,
            type: p.c.ALBUM_CHART,
            landingBlockType: v.g.CHART_ALBUMS,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        E = (e) => {
          let t = e.entities.map((e) => ({
            ...(0, h.ym)(e.data),
            likesCount: e.data.likesCount,
          }));
          return (0, n.pj)({
            id: e.id,
            type: p.c.CATEGORY,
            landingBlockType: v.g.NON_MUSIC_EDITORIAL_COMPILATION,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        };
      var b = a(4110);
      let _ = (e) => {
          let t = e.entities.map((e) => {
            switch (e.type) {
              case p.f.PLAYLIST:
                return {
                  type: b.Q.PLAYLIST,
                  data: (0, s.VB)({ ...e.data, artists: [] }),
                };
              case p.f.ALBUM:
                return { type: b.Q.ALBUM, data: (0, h.ym)(e.data) };
            }
          });
          return (0, n.pj)({
            id: e.id,
            type: p.c.EDITORIAL_PLAYLISTS,
            landingBlockType: v.g.RECENTLY_PLAYED,
            title: e.title,
            description: e.description,
            viewAllActionLink: e.viewAllUrl,
            items: t,
          });
        },
        P = n.V5.model("NonMusicBaseBlock").props({
          type: n.V5.enumeration(Object.values(p.c.CATEGORY)),
          landingBlockType: n.V5.enumeration(Object.values(v.g)),
          id: n.V5.maybe(n.V5.string),
          title: n.V5.maybe(n.V5.string),
          description: n.V5.maybe(n.V5.string),
          viewAllActionLink: n.V5.maybe(n.V5.string),
        }),
        C = P.named("NonMusicCategoryBlock").props({
          type: n.V5.literal(p.c.CATEGORY),
          landingBlockType: n.V5.literal(v.g.NON_MUSIC_EDITORIAL_COMPILATION),
          items: n.V5.array(h.ug),
        }),
        N = P.named("NonMusicChartAlbumBlock").props({
          type: n.V5.literal(p.c.ALBUM_CHART),
          landingBlockType: n.V5.literal(v.g.CHART_ALBUMS),
          items: n.V5.array(h.ug),
        }),
        k = n.V5.union(m.SJ, m.jn),
        I = P.named("NonMusicEditorialPlaylistsBlock").props({
          type: n.V5.literal(p.c.EDITORIAL_PLAYLISTS),
          landingBlockType: n.V5.literal(v.g.RECENTLY_PLAYED),
          items: n.V5.array(k),
        }),
        T = n.V5.union(N, I, C),
        A = n.V5.model("NonMusicCategoryPage", {
          errorStatusCode: n.V5.maybeNull(n.V5.number),
          title: n.V5.maybeNull(n.V5.string),
          loadingState: n.V5.enumeration(Object.values(l.Gui)),
          blocks: n.V5.array(T),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === l.Gui.IDLE ||
                e.loadingState === l.Gui.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === l.Gui.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === l.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === l.Gui.RESOLVE && 0 === e.blocks.length,
                a =
                  e.errorStatusCode === r.CN.NOT_FOUND ||
                  e.errorStatusCode === r.CN.BAD_REQUEST;
              return (e.loadingState === l.Gui.REJECT && a) || t;
            },
            get isSomethingWrong() {
              return e.loadingState === l.Gui.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, n.ls)(function* (t) {
              let { categoryId: a } = t,
                { nonMusicResource: i, modelActionsLogger: s } = (0, n.dU)(e);
              if (e.loadingState !== l.Gui.PENDING)
                try {
                  e.loadingState = l.Gui.PENDING;
                  let t = yield i.getCategory({ categoryId: a });
                  e.title = t.title;
                  let r = [];
                  t.blocks &&
                    (t.blocks.forEach((e) => {
                      switch (e.type) {
                        case p.c.ALBUM_CHART:
                          r.push(S(e));
                          return;
                        case p.c.EDITORIAL_PLAYLISTS:
                          r.push(_(e));
                          return;
                        case p.c.CATEGORY:
                          r.push(E(e));
                          return;
                      }
                    }),
                    (e.blocks = (0, n.pj)(r))),
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
              (e.errorStatusCode = null),
                (e.title = null),
                (e.loadingState = l.Gui.IDLE),
                (e.blocks = (0, n.pj)([]));
            },
          })),
        D = n.V5.model("NonMusicPage", {
          landing: m.d5,
          albums: y,
          categorySubpage: A,
          categoryPlaylistsSubpage: c,
        });
      var x = a(300);
      a(31600);
      var L = a(81285),
        R = a(11711);
      a(93054), a(24854);
    },
    13234: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        z: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).CATEGORY = "category"),
        (n.EDITORIAL = "editorial");
    },
    300: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicAlbumsPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(9883),
        d = a(42255),
        c = a(13555),
        m = a(30476),
        h = a(20794),
        g = a(96235),
        y = a(13234),
        p = a(18029),
        v = a.n(p);
      let f = (0, r.Pi)((e) => {
        var t, a;
        let { id: r, variant: p } = e,
          {
            nonMusic: { albums: f },
          } = (0, h.oR4)(),
          { formatMessage: S } = (0, l.Z)(),
          { contentScrollRef: E, setContentScrollRef: b } = (0, h.$Y6)(),
          _ = (0, h.k67)();
        r &&
          f.loadingState === h.Gui.IDLE &&
          (p === y.z.EDITORIAL
            ? (0, o.use)(f.getEditorialAlbums({ id: r }))
            : (0, o.use)(f.getCategoryAlbums({ id: r }))),
          (f.isNotFound || !r) && (0, s.notFound)(),
          (0, h.NOh)(f.loadingState === h.Gui.RESOLVE),
          (0, o.useEffect)(
            () => () => {
              f.reset();
            },
            [f],
          );
        let P = (0, o.useCallback)(
            (e) => {
              f.getAlbumsByRange(e.startIndex, e.endIndex);
            },
            [f],
          ),
          C = (0, o.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(g.$_, { className: v().footer }),
            }),
            [],
          ),
          N =
            f.loadingState === h.Gui.PENDING
              ? 20
              : null !==
                    (a =
                      null === (t = f.albums) || void 0 === t
                        ? void 0
                        : t.length) && void 0 !== a
                ? a
                : 0;
        return (0, i.jsx)(h.Lh6, {
          pageId: h.Rhz.NON_MUSIC_ALBUMS,
          children: (0, i.jsx)(m.I7, {
            scrollElement: E,
            outerTitle: f.title,
            children: (0, i.jsxs)("div", {
              className: v().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_ALBUMS_PAGE),
              children: [
                (0, i.jsx)(g.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: _.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: f.title,
                  }),
                }),
                (0, i.jsx)(g.Wv, {
                  className: (0, n.W)(v().scrollContainer, v().important),
                  customComponents: C,
                  itemContentCallback: (e) => {
                    var t, a;
                    let n =
                        null === (a = f.albums) || void 0 === a
                          ? void 0
                          : null === (t = a[e]) || void 0 === t
                            ? void 0
                            : t.data,
                      r = S(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: S({ id: "entity-names.album" }) },
                      );
                    return n
                      ? (0, i.jsx)(
                          c.rf,
                          { album: n, contentLinesCount: 3 },
                          n.id,
                        )
                      : (0, i.jsx)(g.hi, { "aria-label": r }, e);
                  },
                  totalCount: N,
                  onGetDataByRange: P,
                  totalRequests: f.requestsCount,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: b,
                  context: {
                    listAriaLabel: S(
                      { id: "mixes.albums-list" },
                      { genreName: f.title || "" },
                    ),
                  },
                }),
              ],
            }),
          }),
        });
      });
    },
    31600: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryNotFoundPage: function () {
          return s;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(33558);
      let s = (0, n.Pi)(() => (0, i.jsx)(r.T, {}));
    },
    81285: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPage: function () {
          return S;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(96159),
        u = a(64275),
        d = a(42255),
        c = a(44443),
        m = a(98836),
        h = a(30476),
        g = a(20794),
        y = a(96235),
        p = a(61215),
        v = a.n(p);
      let f = {
          [l.c.ALBUM_CHART]: c.m8,
          [l.c.EDITORIAL_PLAYLISTS]: c.Rn,
          [l.c.CATEGORY]: c.j$,
        },
        S = (0, r.Pi)((e) => {
          let { categoryId: t } = e,
            { categorySubpage: a } = (0, g.oR4)().nonMusic,
            { contentScrollRef: r, setContentScrollRef: l } = (0, g.$Y6)(),
            c = (0, g.RVp)(),
            p = (0, g.k67)();
          if (
            ((!c || a.isNotFound) && (0, s.notFound)(),
            t &&
              a.loadingState === g.Gui.IDLE &&
              (0, o.use)(a.getData({ categoryId: t })),
            (0, o.useEffect)(() => () => a.reset(), [a]),
            (0, g.NOh)(a.loadingState === g.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(m.D, {});
          let S = (0, o.useMemo)(
            () =>
              a.blocks.map((e, t) => {
                let r = f[e.type];
                return (0, i.jsx)(
                  g.Ja5,
                  {
                    blockId: e.id,
                    blockType: e.type,
                    blockIdForFrom: ""
                      .concat(g.BEo.DISCOVERY_BLOCK, "-")
                      .concat(e.id),
                    blockPosX: 1,
                    blockPosY: t + 1,
                    objectsCount: e.items.length,
                    children: (0, i.jsx)(
                      r,
                      {
                        headerClassName: (0, n.W)(
                          v().carouselBlockHeader,
                          v().carouselBlock,
                        ),
                        containerClassName: v().carouselBlock,
                        type: e.landingBlockType,
                        loadingState: a.loadingState,
                        id: e.id,
                        isNotFound: a.isNotFound,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {
                          title: e.title,
                          description: e.description,
                          viewAllActionLink: e.viewAllActionLink,
                        },
                        data: { items: e.items },
                        isNeededToLoad: !1,
                        isLoading: a.isLoading,
                        isLoaded: a.isLoaded,
                        isRejected: a.isRejected,
                        isShimmerVisible: a.isLoading,
                        isShimmerActive: !0,
                        isVisible: !0,
                        objectsCount: e.items.length,
                      },
                      e.id,
                    ),
                  },
                  e.id,
                );
              }),
            [
              a.loadingState,
              a.isNotFound,
              a.blocks,
              a.isLoading,
              a.isLoaded,
              a.isRejected,
            ],
          );
          return (0, i.jsx)(g.Lh6, {
            pageId: g.Rhz.NON_MUSIC_CATEGORY,
            children: (0, i.jsxs)(h.I7, {
              scrollElement: r,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(y.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: p.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: a.title,
                  }),
                }),
                (0, i.jsxs)(u.t, {
                  className: v().root,
                  containerClassName: v().content,
                  ref: l,
                  children: [
                    (0, i.jsx)("div", {
                      className: v().carouselBlocks,
                      children: S,
                    }),
                    (0, i.jsx)(y.$_, { className: v().footer }),
                  ],
                }),
              ],
            }),
          });
        });
    },
    11711: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicCategoryPlaylistsPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(9883),
        d = a(42255),
        c = a(98836),
        m = a(30476),
        h = a(82621),
        g = a(20794),
        y = a(96235),
        p = a(46460),
        v = a.n(p);
      let f = (0, r.Pi)((e) => {
        var t, a, r;
        let { categoryId: p } = e,
          {
            nonMusic: { categoryPlaylistsSubpage: f },
          } = (0, g.oR4)(),
          S = (0, g.k67)(),
          { contentScrollRef: E, setContentScrollRef: b } = (0, g.$Y6)(),
          { formatMessage: _ } = (0, l.Z)(),
          P = (0, o.useCallback)(
            (e) => {
              f.getPlaylists({ page: e, pageSize: 20 });
            },
            [f],
          );
        f.loadingState === g.Gui.IDLE &&
          (0, o.use)(f.getData({ categoryId: p, page: 0, pageSize: 20 })),
          f.isNotFound && (0, s.notFound)(),
          (0, o.useEffect)(
            () => () => {
              f.reset();
            },
            [f],
          );
        let C = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(y.$_, { className: v().footer }) }),
          [],
        );
        if (((0, g.NOh)(f.loadingState === g.Gui.RESOLVE), f.isSomethingWrong))
          return (0, i.jsx)(c.D, {});
        let N = f.isLoading
          ? 20
          : null !==
                (a =
                  null == f
                    ? void 0
                    : null === (t = f.playlists) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
            ? a
            : 0;
        return (0, i.jsx)(g.Lh6, {
          pageId: g.Rhz.NON_MUSIC_CATEGORY_PLAYLISTS,
          children: (0, i.jsx)(m.I7, {
            scrollElement: E,
            outerTitle: f.title,
            children: (0, i.jsxs)("div", {
              className: v().root,
              ...(0, u.BA)(u.Br.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),
              children: [
                (0, i.jsx)(y.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: S.canBack,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: f.title,
                  }),
                }),
                (0, i.jsx)(y.Wv, {
                  context: {
                    listAriaLabel: _(
                      { id: "mixes.playlists-list" },
                      { genreName: f.title || "" },
                    ),
                  },
                  className: (0, n.W)(v().scrollContainer, v().important),
                  customComponents: C,
                  itemContentCallback: (e) => {
                    var t, a;
                    let n =
                        null == f
                          ? void 0
                          : null === (a = f.playlists) || void 0 === a
                            ? void 0
                            : null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.data,
                      r = _(
                        { id: "loading-messages.entity-is-loading" },
                        { entityName: _({ id: "entity-names.playlist" }) },
                      );
                    return n
                      ? (0, i.jsx)(
                          h.ZL,
                          { playlist: n, contentLinesCount: 3 },
                          n.key,
                        )
                      : (0, i.jsx)(y.hi, { isActive: !0, "aria-label": r });
                  },
                  initialItemCount: N,
                  totalCount: N,
                  onGetDataByPage: P,
                  pageSize: 20,
                  totalRequests:
                    null !== (r = f.requests) && void 0 !== r ? r : 0,
                  listClassName: v().content,
                  itemClassName: v().item,
                  handleRef: b,
                }),
              ],
            }),
          }),
        });
      });
    },
    93054: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicNotFoundPage: function () {
          return l;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(33558),
        o = a(20794);
      let l = (0, n.Pi)(() => {
        let { nonMusic: e } = (0, o.oR4)();
        return (
          (0, r.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(s.T, {})
        );
      });
    },
    24854: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicPage: function () {
          return b;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(71037),
        d = a(9883),
        c = a(33413),
        m = a(64275),
        h = a(42255),
        g = a(44443),
        y = a(98836),
        p = a(30476),
        v = a(20794),
        f = a(96235),
        S = a(922),
        E = a.n(S);
      let b = (0, r.Pi)(() => {
        let { nonMusic: e, user: t, experiments: a } = (0, v.oR4)(),
          { formatMessage: r } = (0, l.Z)(),
          { contentScrollRef: S, setContentScrollRef: b } = (0, v.$Y6)();
        (0, v.RVp)() || (0, s.notFound)();
        let _ = a.checkExperiment(
            v.peG.WebNextLandingSkeletonPodcastsAndBooks,
            "on",
          ),
          P = a.checkExperiment(v.peG.WebNextSwitchMainSkeletons, "on");
        if (e.landing.loadingState === v.Gui.IDLE) {
          let a;
          (a = _ ? (P ? c.j.NON_MUSIC : c.j.NON_MUSIC_WEB) : c.j.WEB_NON_MUSIC),
            (0, o.use)(
              e.landing.getSkeleton(
                { id: a, showWizard: t.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            );
        }
        (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]),
          (0, v.NOh)(e.landing.loadingState === v.Gui.RESOLVE);
        let C = (0, g._B)(e.landing),
          N = (0, o.useMemo)(
            () =>
              _
                ? (0, i.jsx)(u.Z, { id: "entity-names.podcasts-and-books" })
                : (0, i.jsx)(u.Z, { id: "entity-names.podcasts" }),
            [_],
          ),
          k = (0, o.useMemo)(
            () =>
              _
                ? r({ id: "entity-names.podcasts-and-books" })
                : r({ id: "entity-names.podcasts" }),
            [r, _],
          );
        return (0, i.jsx)(v.Lh6, {
          pageId: v.Rhz.NON_MUSIC,
          children: (0, i.jsxs)(p.I7, {
            scrollElement: S,
            outerTitle: k,
            children: [
              (0, i.jsx)(f.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: E().header,
                  children: (0, i.jsx)(h.Heading, {
                    variant: "h1",
                    weight: "bold",
                    size: "xl",
                    children: N,
                  }),
                }),
              }),
              (0, i.jsxs)(m.t, {
                className: E().root,
                containerClassName: E().content,
                ref: b,
                ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, n.W)(E().landing, {
                      [E().landing_onlyWizard]: C,
                    }),
                    children: (0, i.jsx)(g.Od, {
                      landing: e.landing,
                      blockHeadingVariant: "h2",
                      errorComponent: (0, i.jsx)(y.D, {
                        className: E().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(f.$_, { className: E().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    54705: function (e, t, a) {
      "use strict";
      a.d(t, {
        i$: function () {
          return _.PlaylistPage;
        },
        nb: function () {
          return b;
        },
      });
      var i = a(20794),
        n = a(10576),
        r = a(97898),
        s = a(23874),
        o = a(18796),
        l = a(73005),
        u = a(82621),
        d = a(54146),
        c = a(39583);
      let m = (e, t) => {
          let [a, n] = e.split(":");
          return (0, r.pj)({
            id: a || "",
            albumId: n || "",
            key: "".concat(a, "-").concat(t),
            data: null,
            loadingState: i.Gui.IDLE,
          });
        },
        h = (e) => {
          var t, a, i;
          let n = null === (t = e.tracks) || void 0 === t ? void 0 : t.map(l.M),
            s = (null === (a = e.tracks) || void 0 === a ? void 0 : a.length)
              ? null === (i = e.tracks) || void 0 === i
                ? void 0
                : i.map((e, t) => m(e, t))
              : [];
          return {
            id: e.id,
            name: e.name,
            tracks: (0, r.pj)(s),
            unloadedTracks: (0, r.pj)(n),
          };
        },
        g = (e) => {
          let t = e.filters.map(h);
          if (t.length < 3) return [];
          let a = t.find((e) => e.id === l.W.ALL);
          if (!a) return [];
          let i = t.filter((e) => e.tracks.length >= 8);
          return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
        },
        y = (e, t) =>
          t.map((t) => {
            let a = e.find((e) => String(e.id) === t);
            return (null == a ? void 0 : a.albumId)
              ? "".concat(t, ":").concat(a.albumId)
              : t;
          }),
        p = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return (null == a ? void 0 : a.albumId)
              ? "".concat(a.id, ":").concat(a.albumId)
              : String(null == a ? void 0 : a.id);
          }),
        v = (e, t) => {
          let { startIndex: a, endIndex: n } = t,
            r = [];
          for (let t = a; t <= n; t++) {
            var s, o;
            ((null === (s = e[t]) || void 0 === s ? void 0 : s.loadingState) ===
              i.Gui.IDLE ||
              (null === (o = e[t]) || void 0 === o
                ? void 0
                : o.loadingState) === i.Gui.REJECT) &&
              r.push(t);
          }
          return r;
        };
      var f = a(24980);
      let S = (e) => e.map((e) => (0, f.RN)(e.id, e.albumId || void 0)),
        E = r.V5.model("PlaylistSearchItems", {
          playlistTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          suggestedTrackIds: r.V5.maybeNull(r.V5.array(r.V5.string)),
          additionTrackInProggress: r.V5.maybeNull(r.V5.string),
          tracks: r.V5.maybeNull(r.V5.array(d.le)),
        })
          .views((e) => ({
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
          .actions((e) => ({
            setAdditionTrackAnimation(t) {
              e.additionTrackInProggress = t;
            },
            replaceAdditionTrackInProggress() {
              if (e.additionTrackInProggress) {
                var t, a;
                null === (t = e.playlistTrackIds) ||
                  void 0 === t ||
                  t.unshift(e.additionTrackInProggress),
                  (e.suggestedTrackIds = (0, r.pj)(
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
          })),
        b = r.V5.model("PlaylistPage", {
          uuid: r.V5.maybeNull(r.V5.string),
          meta: r.V5.maybeNull(u.Nn),
          items: r.V5.array(l.Wj),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(i.Gui)),
          similarPlaylists: r.V5.array(u.d2),
          searchLoadingState: r.V5.enumeration(Object.values(i.Gui)),
          searchItems: E,
          searchText: r.V5.string,
          filters: l.Nj,
          activeFilter: r.V5.maybe(r.V5.string),
          activeFilterName: r.V5.maybeNull(r.V5.string),
          shouldSendEventOnTabOpened: r.V5.boolean,
          initialItems: r.V5.array(l.Wj),
        })
          .views((e) => ({
            get isNotFound() {
              return (
                e.loadingState === i.Gui.REJECT &&
                e.errorStatusCode === s.CN.NOT_FOUND
              );
            },
            get isLoading() {
              return (
                e.loadingState === i.Gui.PENDING ||
                e.loadingState === i.Gui.IDLE
              );
            },
            get isSearchLoading() {
              return (
                e.searchLoadingState === i.Gui.PENDING ||
                e.searchLoadingState === i.Gui.IDLE
              );
            },
            get isSearchIdle() {
              return e.searchLoadingState === i.Gui.IDLE;
            },
            get isDisabled() {
              var t;
              return (
                e.loadingState === i.Gui.RESOLVE &&
                (0 === e.items.length ||
                  !(null === (t = e.meta) || void 0 === t
                    ? void 0
                    : t.isAvailable))
              );
            },
            get isRejected() {
              return e.loadingState === i.Gui.REJECT;
            },
            get hasSimilarPlaylists() {
              return (
                e.loadingState === i.Gui.IDLE ||
                e.loadingState === i.Gui.PENDING ||
                e.similarPlaylists.length > 0
              );
            },
            get isEmptyPlaylist() {
              return 0 === e.items.length && e.loadingState === i.Gui.RESOLVE;
            },
            get contextMeta() {
              var a, n, l, u, d, m, h, g, y, p;
              return {
                isAvailable:
                  null === (a = e.meta) || void 0 === a
                    ? void 0
                    : a.isAvailable,
                id: e.meta.id,
                uid: null === (n = e.meta) || void 0 === n ? void 0 : n.uid,
                uuid: e.meta.uuid,
                kind: null === (l = e.meta) || void 0 === l ? void 0 : l.kind,
                title: null === (u = e.meta) || void 0 === u ? void 0 : u.title,
                coverUri:
                  null === (d = e.meta) || void 0 === d ? void 0 : d.coverUri,
                likesCount:
                  null === (m = e.meta) || void 0 === m ? void 0 : m.likesCount,
                averageColor:
                  null === (h = e.meta) || void 0 === h
                    ? void 0
                    : h.averageColor,
                owner: null === (g = e.meta) || void 0 === g ? void 0 : g.owner,
                description:
                  null === (y = e.meta) || void 0 === y
                    ? void 0
                    : y.description,
                modified:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.modified,
              };
            },
            get isDragAndDropEnabled() {
              var v;
              if (!(0, r.fh)(e)) return !1;
              let { ugcUploadCenter: t } = (0, r.yj)(e);
              return !!(
                (null === (v = e.meta) || void 0 === v
                  ? void 0
                  : v.canUserChange) &&
                (e.items.length > 1 ||
                  t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
              );
            },
            get itemsKeys() {
              return e.items.map((e) => e.key);
            },
            get isFavouritePlaylist() {
              var f;
              return (
                (null === (f = e.meta) || void 0 === f ? void 0 : f.kind) ===
                c.eX.LIKE
              );
            },
            get isFiltersLoading() {
              return (
                e.filters.loadingState === i.Gui.IDLE ||
                e.filters.loadingState === i.Gui.PENDING
              );
            },
            get activeFilterIndex() {
              var S;
              let t =
                null === (S = e.filters.items) || void 0 === S
                  ? void 0
                  : S.findIndex((t) => t.id === e.activeFilter);
              return t && t > -1 ? t : 0;
            },
            get analyticsParamsActiveFilterIndex() {
              return this.activeFilterIndex + 1;
            },
            get enableVariousAutoFlow() {
              return !!e.activeFilter;
            },
            get trackIds() {
              return e.initialItems.map((e) =>
                String((0, o.i)(e.id, e.albumId)),
              );
            },
          }))
          .actions((e) => {
            let t = {
              getTracksByRange: (0, r.ls)(function* (t) {
                var a, n;
                let { startIndex: s, endIndex: o } = t,
                  { tracksResource: l, modelActionsLogger: u } = (0, r.dU)(e);
                if (
                  !(null === (a = e.meta) || void 0 === a ? void 0 : a.uid) ||
                  !(null === (n = e.meta) || void 0 === n ? void 0 : n.kind)
                )
                  return null;
                (s = Math.max(0, s)), (o = Math.min(o, e.items.length));
                let c = v(e.items, { startIndex: s, endIndex: o });
                try {
                  let t = p(e.items, c);
                  if (!t.length) return null;
                  c.forEach((t) => {
                    let a = e.items[t];
                    a && (a.loadingState = i.Gui.PENDING);
                  });
                  let a = yield l.getTracksMeta({
                    trackIds: t,
                    withProgress: !0,
                  });
                  c.forEach((t, n) => {
                    let r = null == a ? void 0 : a[n];
                    if (e.items[t] && r) {
                      var s, o;
                      e.items[t] = {
                        id: r.id,
                        albumId:
                          (null === (o = r.albums) || void 0 === o
                            ? void 0
                            : null === (s = o[0]) || void 0 === s
                              ? void 0
                              : s.id) || null,
                        key: "".concat(r.id, "-").concat(t),
                        data: (0, d.Vt)(r),
                        loadingState: i.Gui.RESOLVE,
                      };
                    }
                  });
                } catch (t) {
                  u.error(t),
                    c.forEach((t) => {
                      let a = e.items[t];
                      a && (a.loadingState = i.Gui.REJECT);
                    });
                }
                return null;
              }),
              getSearchTracksMeta: (0, r.ls)(function* () {
                let { tracksResource: t, modelActionsLogger: a } = (0, r.dU)(e),
                  n = [...(e.searchItems.playlistTrackIds || [])].concat(
                    e.searchItems.suggestedTrackIds || [],
                  );
                try {
                  let a = yield t.getTracksMeta({
                    trackIds: n,
                    removeDuplicates: !0,
                    withProgress: !0,
                  });
                  (e.searchItems.tracks = (0, r.pj)(
                    null == a ? void 0 : a.map((e) => (0, d.Vt)(e)),
                  )),
                    e.searchLoadingState !== i.Gui.IDLE &&
                      (e.searchLoadingState = i.Gui.RESOLVE);
                } catch (e) {
                  a.error(e);
                }
                return null;
              }),
              updateData: (0, r.ls)(function* (a) {
                var o;
                if ((null == a ? void 0 : a.error) === "not-found")
                  return (
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                    (e.loadingState = i.Gui.REJECT),
                    null
                  );
                (e.similarPlaylists = (0, r.pj)(
                  null === (o = a.similarPlaylists) || void 0 === o
                    ? void 0
                    : o.map(u.VB),
                )),
                  (e.meta = (0, u.Q9)(a)),
                  (e.items = (0, r.pj)(
                    a.tracks.map((e, t) => ({
                      id: String(e.id),
                      albumId: e.albumId || null,
                      key: "".concat(e.id, "-").concat(t),
                      loadingState: i.Gui.IDLE,
                    })),
                  )),
                  (e.initialItems = (0, n.ZN)(e.items));
                let { sonataState: l } = (0, r.yj)(e);
                return (
                  l.setUnloadedEntitiesData(S(e.items)),
                  yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                );
              }),
              getPlaylistByUserIdAndKind: (0, r.ls)(function* (a) {
                let {
                    userId: n,
                    playlistKind: o,
                    resumeStream: l = !1,
                    trackMetaType: u,
                    preloadedPlaylist: d,
                  } = a,
                  { usersResource: c, modelActionsLogger: m } = (0, r.dU)(e);
                if (e.loadingState !== i.Gui.PENDING)
                  try {
                    e.loadingState = i.Gui.PENDING;
                    let a = d;
                    if (
                      (a ||
                        (a = yield c.getPlaylistWithTracksIds({
                          userId: n,
                          playlistKind: o,
                          resumeStream: l,
                          trackMetaType: u,
                        })),
                      "string" != typeof a.playlistUuid)
                    ) {
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                        (e.loadingState = i.Gui.REJECT);
                      return;
                    }
                    yield t.updateData(a), (e.loadingState = i.Gui.RESOLVE);
                  } catch (t) {
                    m.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      (e.loadingState = i.Gui.REJECT);
                  }
              }),
              getSearchTracks: (0, r.ls)(function* (a) {
                let { uid: n, kind: o } = a,
                  { searchPlaylistResource: l, modelActionsLogger: u } = (0,
                  r.dU)(e);
                if (
                  e.searchLoadingState !== i.Gui.PENDING &&
                  e.searchText.length
                )
                  try {
                    e.searchLoadingState = i.Gui.PENDING;
                    let {
                        playlistTrackIds: a = [],
                        suggestedTrackIds: s = [],
                      } = yield l.getTrackIds({
                        uid: n,
                        kind: o,
                        part: e.searchText,
                      }),
                      u = y(e.items, a);
                    (e.searchItems.playlistTrackIds = (0, r.pj)(u)),
                      (e.searchItems.suggestedTrackIds = (0, r.pj)(s)),
                      t.getSearchTracksMeta();
                  } catch (t) {
                    u.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.searchLoadingState !== i.Gui.IDLE &&
                        (e.searchLoadingState = i.Gui.REJECT);
                  }
              }),
              getPlaylistByUuid: (0, r.ls)(function* (a) {
                let {
                    playlistUuid: n,
                    richTracks: o = !1,
                    resumeStream: l = !1,
                    preloadedPlaylist: u,
                  } = a,
                  { playlistResource: d, modelActionsLogger: c } = (0, r.dU)(e);
                if (((e.uuid = n), e.loadingState !== i.Gui.PENDING))
                  try {
                    e.loadingState = i.Gui.PENDING;
                    let a = u;
                    a ||
                      (a = yield d.getPlaylist({
                        playlistUuid: n,
                        resumeStream: l,
                        richTracks: o,
                      })),
                      yield t.updateData(a),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.RESOLVE);
                  } catch (t) {
                    c.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== i.Gui.IDLE &&
                        (e.loadingState = i.Gui.REJECT);
                  }
              }),
              getPlaylistFilters: (0, r.ls)(function* () {
                let { filtersResource: a, modelActionsLogger: o } = (0, r.dU)(
                    e,
                  ),
                  { sonataState: u } = (0, r.yj)(e);
                if (e.filters.loadingState === i.Gui.PENDING) return;
                let d = e.items.map((e) => e.id);
                try {
                  var c;
                  e.filters.loadingState = i.Gui.PENDING;
                  let s = yield a.getTracksFilters({ trackIds: d });
                  (e.filters.items = (0, r.pj)(g(s))),
                    t.setActiveFilter(u.playlistFilter),
                    t.getFilterName(u.playlistFilter || l.W.ALL);
                  let o =
                    null === (c = e.filters.items) || void 0 === c
                      ? void 0
                      : c.find((t) => t.id === e.activeFilter);
                  o &&
                    ((e.items = (0, n.ZN)(o.tracks)),
                    u.setUnloadedEntitiesData(S(e.items))),
                    (e.filters.loadingState = i.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    (e.filters.loadingState = i.Gui.REJECT);
                }
              }),
              getFilterName: (0, r.ls)(function* (t) {
                let { filtersResource: a, modelActionsLogger: i } = (0, r.dU)(
                  e,
                );
                try {
                  let i = yield a.getFilterName({ filterId: t });
                  e.activeFilterName = i.name;
                } catch (t) {
                  i.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND);
                }
              }),
              updatePlaylistTrackByUuid: (0, r.ls)(function* (a) {
                let {
                    playlistUuid: n,
                    richTracks: o = !1,
                    resumeStream: l = !1,
                  } = a,
                  { playlistResource: u, modelActionsLogger: d } = (0, r.dU)(e);
                e.uuid = n;
                try {
                  let a = yield u.getPlaylist({
                      playlistUuid: n,
                      resumeStream: l,
                      richTracks: o,
                    }),
                    s = [];
                  if (
                    ((e.items = (0, r.pj)(
                      a.tracks.map((t, a) => {
                        var n, r;
                        let o = String(t.id),
                          l = t.albumId || null;
                        return o ===
                          (null === (n = e.items[a]) || void 0 === n
                            ? void 0
                            : n.id) &&
                          l ===
                            (null === (r = e.items[a]) || void 0 === r
                              ? void 0
                              : r.albumId)
                          ? e.items[a]
                          : (s.push(a),
                            {
                              id: String(t.id),
                              albumId: t.albumId || null,
                              key: "".concat(t.id, "-").concat(a),
                              loadingState: i.Gui.IDLE,
                            });
                      }),
                    )),
                    e.meta &&
                      ((e.meta.modified = a.modified),
                      (e.meta.revision = a.revision),
                      s.length))
                  ) {
                    let e = Math.min(...s),
                      a = Math.max(...s);
                    t.getTracksByRange({ startIndex: e, endIndex: a });
                  }
                  if (
                    (e.loadingState !== i.Gui.IDLE &&
                      (e.loadingState = i.Gui.RESOLVE),
                    (0, r.fh)(e))
                  ) {
                    let { sonataState: t } = (0, r.yj)(e);
                    t.setUnloadedEntitiesData(S(e.items));
                  }
                } catch (t) {
                  d.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== i.Gui.IDLE &&
                      (e.loadingState = i.Gui.REJECT);
                }
              }),
              moveTrack(t, a) {
                let i = (0, n.ZN)(e.items[t]);
                if (
                  !(t < 0) &&
                  !(a < 0) &&
                  !(t >= e.items.length) &&
                  !(a >= e.items.length) &&
                  i &&
                  (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, r.fh)(e))
                ) {
                  let { sonataState: t } = (0, r.yj)(e);
                  t.setUnloadedEntitiesData(S(e.items));
                }
              },
              setSearchIdle() {
                e.searchLoadingState = i.Gui.IDLE;
              },
              setActiveFilter(t) {
                t !== l.W.ALL
                  ? (e.activeFilter = t)
                  : (e.activeFilter = void 0);
              },
              removeTracksFromItems(t, a) {
                if ((e.items.splice(t, a), (0, r.fh)(e))) {
                  let { sonataState: t } = (0, r.yj)(e);
                  t.setUnloadedEntitiesData(S(e.items));
                }
              },
              setSearchText(t) {
                e.searchText = t;
              },
              handleFilterClick(a) {
                let { sonataState: i } = (0, r.yj)(e);
                e.activeFilter || (e.initialItems = (0, n.ZN)(e.items)),
                  t.setActiveFilter(a.id),
                  t.getFilterName(a.id),
                  e.activeFilter
                    ? (e.items = (0, n.ZN)(a.tracks))
                    : (e.items = (0, n.ZN)(e.initialItems)),
                  i.setUnloadedEntitiesData(S(e.items)),
                  t.setShouldSendEventOnTabOpened(!0);
              },
              setShouldSendEventOnTabOpened(t) {
                e.shouldSendEventOnTabOpened = t;
              },
              resetSearch() {
                (e.searchItems.playlistTrackIds = null),
                  (e.searchItems.suggestedTrackIds = null),
                  (e.searchItems.additionTrackInProggress = null),
                  (e.searchItems.tracks = null),
                  (e.searchLoadingState = i.Gui.IDLE);
              },
              reset() {
                let { sonataState: a } = (0, r.yj)(e);
                a.resetUnloadedEntitiesData(),
                  (e.uuid = null),
                  (e.meta = null),
                  (e.loadingState = i.Gui.IDLE),
                  (e.items = (0, r.pj)([])),
                  (e.initialItems = (0, r.pj)([])),
                  (e.similarPlaylists = (0, r.pj)([])),
                  (e.errorStatusCode = null),
                  (e.filters.items = (0, r.pj)([])),
                  (e.filters.loadingState = i.Gui.IDLE),
                  (e.shouldSendEventOnTabOpened = !0),
                  (e.activeFilter = void 0),
                  (e.activeFilterName = null),
                  t.resetSearch();
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
      a(12570);
      var _ = a(79299);
    },
    28408: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return m.PostPage;
        },
        vU: function () {
          return c;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(43295),
        s = a(13555),
        o = a(82621),
        l = a(11232),
        u = a(39583),
        d = a(20794);
      let c = i.V5.model("PostPage", {
        errorStatusCode: i.V5.maybe(i.V5.number),
        loadingState: i.V5.enumeration(Object.values(d.Gui)),
        title: i.V5.maybeNull(i.V5.string),
        promotionType: i.V5.maybeNull(i.V5.enumeration(Object.values(r.q))),
        artists: i.V5.maybe(i.V5.array(l.Go)),
        albums: i.V5.maybe(i.V5.array(s.ug)),
        playlists: i.V5.maybe(i.V5.array(o.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === d.Gui.IDLE || e.loadingState === d.Gui.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === n.CN.NOT_FOUND ||
              e.errorStatusCode === n.CN.BAD_REQUEST;
            return e.loadingState === d.Gui.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === d.Gui.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, i.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: r, modelActionsLogger: o } = (0, i.dU)(e);
            if (e.loadingState !== d.Gui.PENDING)
              try {
                e.loadingState = d.Gui.PENDING;
                let t = yield r.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, i.pj)(t.artists.map(l.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, i.pj)(t.albums.map(s.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, i.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, u.PV)(t);
                      }),
                    )),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.RESOLVE);
              } catch (t) {
                o.error(t),
                  t instanceof n.du &&
                    (t.statusCode === n.CN.NOT_FOUND ||
                      t.statusCode === n.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = n.CN.NOT_FOUND),
                  e.loadingState !== d.Gui.IDLE &&
                    (e.loadingState = d.Gui.REJECT);
              }
          }),
          reset() {
            (e.loadingState = d.Gui.IDLE),
              (e.title = null),
              (e.artists = (0, i.pj)([])),
              (e.albums = (0, i.pj)([]));
          },
        }));
      a(93034);
      var m = a(72258);
    },
    93034: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return s;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(33558);
      let s = (0, n.Pi)(() => (0, i.jsx)(r.T, {}));
    },
    72258: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return R;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(43295),
        u = a(64275),
        d = a(18344),
        c = a(42255),
        m = a(98836),
        h = a(30476),
        g = a(20794),
        y = a(96235),
        p = a(94107),
        v = a.n(p);
      let f = () =>
        (0, i.jsxs)("div", {
          className: v().root,
          children: [
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().top }),
            (0, i.jsx)(d.Shimmer, { radius: "l", className: v().bottom }),
          ],
        });
      var S = a(23141),
        E = a.n(S),
        b = a(13555),
        _ = a(40534),
        P = a.n(_);
      let C = (0, r.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: P().root,
          children: (0, i.jsx)("div", {
            className: P().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                b.rf,
                { className: P().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var N = a(24136),
        k = a(94612),
        I = a.n(k);
      let T = (0, r.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: I().root,
          children: (0, i.jsx)("div", {
            className: I().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                N.IT,
                { className: I().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var A = a(82621),
        D = a(7871),
        x = a.n(D);
      let L = (0, r.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: x().root,
            children: (0, i.jsx)("div", {
              className: x().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  A.ZL,
                  { className: x().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        R = (0, r.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, g.oR4)(),
            r = (0, g.k67)(),
            { contentScrollRef: p, setContentScrollRef: v } = (0, g.$Y6)();
          if (
            (t &&
              a.loadingState === g.Gui.IDLE &&
              (0, o.use)(a.getData({ promoId: t })),
            (0, o.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, g.NOh)(a.loadingState === g.Gui.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(m.D, {});
          let S = (0, o.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(f, {});
            switch (a.promotionType) {
              case l.q.ARTISTS:
                return (0, i.jsx)(T, { artists: a.artists });
              case l.q.ALBUMS:
                return (0, i.jsx)(C, { albums: a.albums });
              case l.q.PLAYLISTS:
                return (0, i.jsx)(L, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(g.Lh6, {
            pageId: g.Rhz.POST,
            children: (0, i.jsxs)(h.I7, {
              scrollElement: p,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(y.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: r.canBack,
                  children: a.title
                    ? (0, i.jsx)(c.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, i.jsx)(d.Shimmer, {
                        className: E().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(u.t, {
                  containerClassName: (0, n.W)(
                    E().scrollContainer,
                    E().important,
                  ),
                  className: E().scrollableContainer,
                  ref: v,
                  children: (0, i.jsx)("div", {
                    className: E().container,
                    children: S,
                  }),
                }),
              ],
            }),
          });
        });
    },
    59717: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryPage: function () {
          return f;
        },
      });
      var i = a(95660),
        n = a(38060),
        r = a(44744),
        s = a(71859),
        o = a(36621),
        l = a(71037),
        u = a(9883),
        d = a(93062),
        c = a(15706),
        m = a(64275),
        h = a(42255),
        g = a(45173),
        y = a(20794),
        p = a(24351),
        v = a.n(p);
      let f = (0, r.Pi)(() => {
        var e;
        let t = (0, y.uK4)().get(y.U5t),
          { search: a, user: r, settings: p } = (0, y.oR4)(),
          { setContentScrollRef: f } = (0, y.$Y6)(),
          { formatMessage: S } = (0, o.Z)(),
          E = (0, y.k67)(),
          b = (0, s.useRef)(!1),
          _ = (0, s.useRef)(null),
          P = (0, g.vy)(() => {
            b.current = !0;
          }),
          C = p.layout === y.t8m.Mobile,
          N = a.history.items.length;
        a.isHistoryReady &&
          (null === (e = r.account) || void 0 === e ? void 0 : e.uid) &&
          (0, s.use)(a.getHistory({ userId: r.account.uid, config: t })),
          (0, s.useEffect)(() => {
            _.current && E.canBack && _.current.focus();
          }, [E.canBack]),
          (0, s.useEffect)(
            () => () => {
              (null == b ? void 0 : b.current)
                ? (a.resetHistoryItems(), (b.current = !1))
                : a.resetHistoryStateRequest();
            },
            [a],
          );
        let k = (0, s.useMemo)(
            () =>
              (0, n.Z)(() => {
                null == E || E.back();
              }, 200),
            [E],
          ),
          I = (0, s.useMemo)(
            () =>
              N
                ? (0, i.jsx)("div", {
                    className: v().items,
                    children: a.history.items.map(g.Fu).filter((e) => !!e),
                  })
                : (0, i.jsx)(h.Caption, {
                    className: v().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(l.Z, { id: "search.history-empty" }),
                  }),
            [a.history.items, N],
          );
        return (0, i.jsx)("div", {
          className: v().root,
          ...(0, u.BA)(u.Br.search.SEARCH_HISTORY_PAGE),
          children: (0, i.jsxs)(m.t, {
            className: v().scrollContent,
            containerClassName: v().scrollContainer,
            ref: f,
            children: [
              (0, i.jsxs)("div", {
                className: v().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: v().title,
                    children: [
                      E.canBack &&
                        (0, i.jsx)(d.z, {
                          ref: _,
                          "aria-label": S({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !E.canBack,
                          size: "s",
                          icon: (0, i.jsx)(c.Icon, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: k,
                        }),
                      (0, i.jsx)(h.Heading, {
                        variant: "h2",
                        size: C ? "m" : "xl",
                        children: (0, i.jsx)(l.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.z, {
                    "aria-label": S({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !N,
                    size: C ? "s" : "default",
                    onClick: P,
                    children: (0, i.jsx)(h.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(l.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !a.isHistoryLoading && I,
            ],
          }),
        });
      });
    },
    22082: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPage: function () {
          return C;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(38060),
        s = a(44744),
        o = a(97667),
        l = a(71859),
        u = a(36621),
        d = a(9883),
        c = a(69259),
        m = a(64275),
        h = a(1282),
        g = a(43703),
        y = a(93596),
        p = a(45173),
        v = a(20794),
        f = a(96235);
      let S = [
          c.a.TOP,
          c.a.TRACK,
          c.a.ALBUM,
          c.a.ARTIST,
          c.a.PLAYLIST,
          c.a.PODCAST,
          c.a.BOOK,
          c.a.CLIP,
        ],
        E = () => {
          let e = (0, v.RVp)(),
            { experiments: t } = (0, v.oR4)();
          return S.filter((a) => {
            if (
              (a !== c.a.PODCAST || e) &&
              (a !== c.a.BOOK ||
                (e && t.checkExperiment(v.peG.WebNextBookSearch, "on"))) &&
              (a !== c.a.CLIP || t.checkExperiment(v.peG.WebNextClips, "on"))
            )
              return a;
          });
        };
      var b = a(61677),
        _ = a.n(b);
      let P = "text",
        C = (0, s.Pi)(() => {
          let e = (0, g.useTabsState)(0),
            [t, a] = (0, l.useState)(c.a.TOP),
            [s, b] = (0, l.useState)(!1),
            { formatMessage: C } = (0, u.Z)(),
            { search: N, experiments: k, location: I } = (0, v.oR4)(),
            T = (0, v.uK4)(),
            { setContentScrollRef: A } = (0, v.$Y6)(),
            D = T.get(v.U5t),
            x = E();
          k.checkExperiment(v.peG.WebNextDisableSearch, "on") &&
            (0, o.redirect)("/");
          let L = (0, l.useMemo)(() => {
              var e;
              return decodeURIComponent(
                null !== (e = new URLSearchParams(I.searchParams).get(P)) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            }, [I.searchParams]),
            [R, G] = (0, l.useState)(L),
            w = R.length > 0;
          (0, l.useEffect)(
            () => () => {
              N.reset();
            },
            [N],
          );
          let O = (0, l.useCallback)(
            (e, t) => {
              N.resetResults(),
                0 !== e.length &&
                  N.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    config: D,
                    experiments: k,
                  });
            },
            [N, D, k],
          );
          N.isNeededToLoad &&
            L.length > 0 &&
            (0, l.use)(
              N.getSearchResults({
                text: decodeURIComponent(L),
                filter: t,
                config: D,
                experiments: k,
              }),
            );
          let V = (0, l.useCallback)(
              (e) => {
                let a = encodeURIComponent(e.trim());
                G(a), O(a, t), N.resetSearchCorrectedText(), b(!1);
                let i = new URL(window.location.href);
                i.searchParams.set(P, a),
                  window.history.replaceState(null, "", String(i));
              },
              [O, t, N],
            ),
            M = (0, l.useCallback)(() => {
              b(!0);
            }, [b]),
            j = (0, l.useMemo)(
              () =>
                (0, r.Z)((t) => {
                  var i;
                  if (!e.onTabChange || t === e.value) return;
                  e.onTabChange(t);
                  let n = null !== (i = S[t]) && void 0 !== i ? i : c.a.TOP;
                  a(n), O(R, n);
                }, 300),
              [O, R, e],
            ),
            U = (0, l.useMemo)(
              () => (e) => {
                let {
                  id: t,
                  type: a,
                  blockPosition: i,
                  position: n,
                  feedbackType: r,
                } = e;
                N.sendFeedback({
                  blockType: a,
                  entityId: "".concat(a, ":").concat(t),
                  timestamp: new Date().toISOString(),
                  searchRequestId: N.searchRequestId,
                  query: R,
                  clickType: r,
                  blockPosition: i,
                  position: n,
                  page: 0,
                });
              },
              [N, R],
            ),
            F = (0, l.useMemo)(
              () =>
                N.searchCorrectedText
                  ? (0, i.jsx)(p.gK, {
                      searchCorrectedText: N.searchCorrectedText,
                      onCorrectText: M,
                    })
                  : null,
              [M, N.searchCorrectedText],
            ),
            B = (0, l.useMemo)(() => {
              if (!N.isLoading && 0 === N.results.length)
                return (0, i.jsx)(p.hF, { searchCorrectedText: F });
              switch (t) {
                case c.a.TOP:
                  return (0, i.jsx)(p.Id, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.TRACK:
                  return (0, i.jsx)(p.XM, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.ALBUM:
                  return (0, i.jsx)(p.xz, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    filter: c.a.ALBUM,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.PLAYLIST:
                  return (0, i.jsx)(p.xz, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    filter: c.a.PLAYLIST,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.ARTIST:
                  return (0, i.jsx)(p.xz, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    filter: c.a.ARTIST,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.PODCAST:
                  return (0, i.jsx)(p.R_, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.BOOK:
                  return (0, i.jsx)(p.xz, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    filter: c.a.BOOK,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                case c.a.CLIP:
                  return (0, i.jsx)(p.xz, {
                    className: _().searchResults,
                    isLoading: N.isLoading,
                    results: N.results,
                    filter: c.a.CLIP,
                    sendSearchFeedback: U,
                    searchCorrectedText: F,
                    ref: A,
                  });
                default:
                  return F;
              }
            }, [N.isLoading, N.results, t, U, F, A]),
            q = (0, l.useMemo)(
              () =>
                R.length > 0
                  ? B
                  : (0, i.jsxs)(m.t, {
                      className: _().scrollableContent,
                      containerClassName: _().main,
                      ref: A,
                      children: [
                        (0, i.jsx)(l.Suspense, {
                          children: (0, i.jsx)(v.Ja5, {
                            blockId: v.BEo.SEARCH_HISTORY,
                            blockType: v.BEo.SEARCH_HISTORY,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: v.BEo.SEARCH_HISTORY,
                            objectsCount: N.history.items.length,
                            children: (0, i.jsx)(p.y9, {}),
                          }),
                        }),
                        (0, i.jsx)(l.Suspense, {
                          children: (0, i.jsx)(y.JG, {}),
                        }),
                        (0, i.jsx)(f.$_, { className: _().footer }),
                      ],
                    }),
              [R.length, B, N.history.items.length, A],
            ),
            H = (0, l.useMemo)(
              () => ({
                top: C({ id: "search-filters.top" }),
                track: C({ id: "search-filters.track" }),
                album: C({ id: "search-filters.album" }),
                artist: C({ id: "search-filters.artist" }),
                playlist: C({ id: "search-filters.playlist" }),
                podcast: C({ id: "search-filters.podcast" }),
                book: C({ id: "search-filters.book" }),
                clip: C({ id: "search-filters.clip" }),
              }),
              [C],
            );
          return (0, i.jsx)(v.Lh6, {
            pageId: v.Rhz.SEARCH,
            children: (0, i.jsxs)("div", {
              className: (0, n.W)(_().root, { [_().root_showFilters]: w }),
              ...(0, d.BA)(d.Br.search.SEARCH_PAGE),
              children: [
                (0, i.jsxs)("div", {
                  className: _().header,
                  ...(0, d.BA)(d.Br.search.SEARCH_PAGE_HEADER_CONTAINER),
                  children: [
                    (0, i.jsx)(h.M, {
                      className: _().input,
                      autoFocus: !0,
                      initialValue: R,
                      placeholder: C({ id: "search.input-placeholder" }),
                      onChange: V,
                      resetButtonAriaLabel: C({
                        id: "interface-actions.reset-search-input",
                      }),
                      correctedValue: s ? N.searchCorrectedText : null,
                      innerInputProps: (0, d.BA)(
                        d.Br.search.SEARCH_PAGE_SEARCH_INPUT,
                      ),
                      resetButtonProps: (0, d.BA)(
                        d.Br.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON,
                      ),
                      searchIconProps: (0, d.BA)(
                        d.Br.search.SEARCH_PAGE_SEARCH_INPUT_ICON,
                      ),
                    }),
                    w &&
                      (0, i.jsx)(f.no, {
                        className: _().tabCarousel,
                        ...e,
                        onTabChange: j,
                        children: x.map((t, a) =>
                          (0, i.jsx)(
                            f.OK,
                            {
                              className: (0, n.W)(_().filter, {
                                [_().filter_selected]: a === e.value,
                              }),
                              title: H[t],
                              value: a,
                            },
                            a,
                          ),
                        ),
                      }),
                  ],
                }),
                (0, i.jsx)("div", { className: _().content, children: q }),
              ],
            }),
          });
        });
    },
    91132: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return u.TagPage;
        },
        tS: function () {
          return l;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(39583),
        s = a(20794),
        o = a(15526);
      let l = i.V5.model("TagPage", {
        title: i.V5.maybe(i.V5.string),
        errorStatusCode: i.V5.maybeNull(i.V5.number),
        tagLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsLoadingState: i.V5.enumeration(Object.values(s.Gui)),
        playlistsData: i.V5.array(
          i.V5.model({ uid: i.V5.number, kind: i.V5.number }),
        ),
        playlists: i.V5.array(i.V5.maybeNull(r.Cd)),
        pager: i.V5.maybeNull(o.Vn),
        alreadyRequestedPages: i.V5.map(i.V5.number),
        pendingPages: i.V5.map(i.V5.number),
        requests: i.V5.maybeNull(i.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
              e.playlistsLoadingState === s.Gui.RESOLVE &&
              0 === e.playlists.length;
            return (
              ((e.tagLoadingState === s.Gui.REJECT ||
                e.playlistsLoadingState === s.Gui.REJECT) &&
                (e.errorStatusCode === n.CN.NOT_FOUND ||
                  e.errorStatusCode === n.CN.BAD_REQUEST)) ||
              t
            );
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, i.ls)(function* (t) {
              let { page: a = 0, pageSize: o = 20 } = t,
                { playlistsResource: l, modelActionsLogger: u } = (0, i.dU)(e);
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
                  var d;
                  (e.playlistsLoadingState = s.Gui.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * o,
                    n = e.playlistsData.slice(t, t + o),
                    u = yield l.getPlaylists({
                      playlistIds: n.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                  let c = {
                    page: a,
                    perPage: o,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, i.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let m = u.playlists.map(r.PV);
                  (0, s.AG_)({
                    items: e.playlists,
                    mappedRawItems: m,
                    page: a,
                    pageSize: o,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== s.Gui.IDLE &&
                      (e.playlistsLoadingState = s.Gui.RESOLVE);
                } catch (t) {
                  u.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
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
              let { id: r, page: o = 0, pageSize: l = 20 } = a,
                { tagResource: u, modelActionsLogger: d } = (0, i.dU)(e);
              if (e.tagLoadingState !== s.Gui.PENDING)
                try {
                  var c;
                  e.tagLoadingState = s.Gui.PENDING;
                  let a = yield u.getPlaylistIds({ id: r });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, i.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.RESOLVE),
                    yield t.getPlaylists({ page: o, pageSize: l });
                } catch (t) {
                  d.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.tagLoadingState !== s.Gui.IDLE &&
                      (e.tagLoadingState = s.Gui.REJECT);
                }
            }),
          };
          return t;
        });
      a(79405);
      var u = a(49031);
    },
    79405: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return s;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(33558);
      let s = (0, n.Pi)(() => (0, i.jsx)(r.T, {}));
    },
    49031: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return v;
        },
      });
      var i = a(95660),
        n = a(23974),
        r = a(44744),
        s = a(97667),
        o = a(71859),
        l = a(36621),
        u = a(42255),
        d = a(98836),
        c = a(30476),
        m = a(82621),
        h = a(20794),
        g = a(96235),
        y = a(54477),
        p = a.n(y);
      let v = (0, r.Pi)((e) => {
        var t, a, r;
        let { tagId: y } = e,
          { tag: v, settings: f } = (0, h.oR4)(),
          { formatMessage: S } = (0, l.Z)(),
          { contentScrollRef: E, setContentScrollRef: b } = (0, h.$Y6)(),
          _ = (0, h.k67)(),
          P = f.layout === h.t8m.Mobile;
        y || (0, s.notFound)();
        let C = (0, o.useCallback)(
          (e) => {
            v.getPlaylists({ page: e, pageSize: 20 });
          },
          [v],
        );
        v.tagLoadingState === h.Gui.IDLE &&
          (0, o.use)(v.getTag({ id: y, page: 0, pageSize: 20 })),
          v.isNotFound && (0, s.notFound)(),
          (0, o.useEffect)(
            () => () => {
              v.reset();
            },
            [v],
          );
        let N = (0, o.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(g.$_, { className: p().footer }) }),
          [],
        );
        return ((0, h.NOh)(
          v.tagLoadingState === h.Gui.RESOLVE &&
            v.playlistsLoadingState === h.Gui.RESOLVE,
        ),
        (v.tagLoadingState !== h.Gui.REJECT &&
          v.playlistsLoadingState !== h.Gui.REJECT) ||
          v.isNotFound)
          ? (0, i.jsx)(h.Lh6, {
              pageId: h.Rhz.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: E,
                outerTitle: v.title,
                children: (0, i.jsxs)("div", {
                  className: p().root,
                  children: [
                    (0, i.jsx)(g.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: _.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: v.title,
                      }),
                    }),
                    (0, i.jsx)(g.Wv, {
                      className: (0, n.W)(p().scrollContainer, p().important),
                      customComponents: N,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == v
                              ? void 0
                              : null === (t = v.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          n = S(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: S({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              m.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(g.hi, { "aria-label": n });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == v
                              ? void 0
                              : null === (t = v.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: C,
                      pageSize: 20,
                      totalRequests:
                        null !== (r = v.requests) && void 0 !== r ? r : 0,
                      listClassName: p().content,
                      itemClassName: p().item,
                      handleRef: b,
                      context: {
                        listAriaLabel: S(
                          { id: "mixes.albums-list" },
                          { genreName: v.title || "" },
                        ),
                      },
                      isMobileLayout: P,
                      useWindowScroll: P,
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(d.D, {});
      });
    },
    93596: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return d.Mixes;
        },
        RB: function () {
          return c.MixesGrid;
        },
        ZP: function () {
          return u;
        },
      });
      var i = a(97898),
        n = a(23874),
        r = a(79153),
        s = a(90535),
        o = a(20794);
      let l = (e) => ({
          items: (0, i.pj)(e.items.map((e) => (0, s.Fh)(e.data))),
        }),
        u = i.V5.model("Mixes", {
          loadingState: i.V5.enumeration(Object.values(o.Gui)),
          items: i.V5.array(s.zn),
          errorStatusCode: i.V5.maybeNull(i.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, i.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: s } = (0, i.dU)(e);
              if (e.loadingState !== o.Gui.PENDING)
                try {
                  e.loadingState = o.Gui.PENDING;
                  let i = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    r.g.MIXES,
                  );
                  (e.items = l(i).items), (e.loadingState = o.Gui.RESOLVE);
                } catch (t) {
                  s.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== o.Gui.IDLE &&
                      (e.loadingState = o.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gui.IDLE ||
                e.loadingState === o.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === o.Gui.RESOLVE && 0 === e.items.length;
              return e.errorStatusCode === n.CN.NOT_FOUND || t;
            },
          }));
      var d = a(67022),
        c = a(78228);
    },
    67022: function (e, t, a) {
      "use strict";
      a.d(t, {
        Mixes: function () {
          return y;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(20794),
        o = a(36621),
        l = a(63778),
        u = a(90535),
        d = a(96235),
        c = a(38080),
        m = a.n(c);
      let h = (0, n.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: n } = e,
          { formatMessage: s } = (0, o.Z)(),
          c = (0, r.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: a, withInfo: !1 })
                : n.map((e) =>
                    (0, i.jsx)(
                      u.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, n],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.ti, {
              className: m().carouselHeader,
              title: s({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, i.jsx)(l.l, {
              className: m().carouselBlock,
              itemClassName: m().mixItem,
              children: c,
            }),
          ],
        });
      });
      var g = a(78228);
      let y = (0, n.Pi)(() => {
        let { settings: e, search: t } = (0, s.oR4)(),
          a = e.layout === s.t8m.Mobile;
        return (t.mixes.loadingState === s.Gui.IDLE &&
          (0, r.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, i.jsx)(h, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, i.jsx)(g.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    78228: function (e, t, a) {
      "use strict";
      a.d(t, {
        MixesGrid: function () {
          return h;
        },
      });
      var i = a(95660),
        n = a(44744),
        r = a(71859),
        s = a(71037),
        o = a(9883),
        l = a(42255),
        u = a(90535),
        d = a(96235),
        c = a(29986),
        m = a.n(c);
      let h = (0, n.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: n,
            mixes: c,
            shimmerCount: h = 5,
          } = e,
          g = (0, r.useMemo)(
            () =>
              t
                ? (0, i.jsx)(d.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: h,
                  })
                : c.map((e) =>
                    (0, i.jsx)(
                      u.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, c, h],
          );
        return (0, i.jsxs)("div", {
          ...(0, o.BA)(o.QM.mixes.MIXES_GRID_CONTAINER),
          children: [
            n &&
              (0, i.jsx)(l.Heading, {
                className: m().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                ...(0, o.BA)(o.QM.mixes.MIXES_GRID_HEADER),
                children: (0, i.jsx)(s.Z, { id: "entity-names.mixes" }),
              }),
            (0, i.jsx)("div", { className: m().mixesGrid, children: g }),
          ],
        });
      });
    },
    74486: function (e) {
      e.exports = {
        toastClassName: "NotificationsInitializer_toastClassName__ZVvrd",
        notificationContainer:
          "NotificationsInitializer_notificationContainer__oe1ot",
      };
    },
    60396: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    89916: function (e) {
      e.exports = {
        root: "UgcUploadCenterNotification_root__K_U0z",
        title: "UgcUploadCenterNotification_title__s3yTL",
        link: "UgcUploadCenterNotification_link__NPz6r",
      };
    },
    5040: function (e) {
      e.exports = {
        root: "ChartPodcastsPage_root__J5lnx",
        container: "ChartPodcastsPage_container__Ie6Vb",
        scrollContent: "ChartPodcastsPage_scrollContent__c1mSw",
        scrollContainer: "ChartPodcastsPage_scrollContainer__WQTf7",
        important: "ChartPodcastsPage_important__fW45m",
        footer: "ChartPodcastsPage_footer__7ytrT",
        item: "ChartPodcastsPage_item__vGRt8",
        content: "ChartPodcastsPage_content__NcV4M",
      };
    },
    47303: function (e) {
      e.exports = {
        root: "ChartTracksPage_root__QMbqY",
        container: "ChartTracksPage_container__FoEfT",
        scrollContent: "ChartTracksPage_scrollContent__H6d5m",
        scrollContainer: "ChartTracksPage_scrollContainer__Pxe8S",
        important: "ChartTracksPage_important__Lddyf",
        content: "ChartTracksPage_content__yyIAN",
        footer: "ChartTracksPage_footer__6sNBk",
        shimmerItem: "ChartTracksPage_shimmerItem__YwM0h",
      };
    },
    1249: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContent: "GenreAlbumsPage_scrollContent__sBMMq",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    56307: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContent: "GenreArtistsPage_scrollContent__fDonT",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    9840: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    13968: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContent: "GenrePlaylistsPage_scrollContent__rahSG",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    12997: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    20240: function (e) {
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
    15856: function (e) {
      e.exports = { root: "MyMusicDownloadedTracksInfo_root__yIYHx" };
    },
    26748: function (e) {
      e.exports = {
        root: "MyMusicDownloadedTracksPage_root__hZZwz",
        important: "MyMusicDownloadedTracksPage_important__QP_t0",
        pageContainer: "MyMusicDownloadedTracksPage_pageContainer__qu3hF",
        footer: "MyMusicDownloadedTracksPage_footer__KI5OP",
        content: "MyMusicDownloadedTracksPage_content__Iz1WY",
        trackShimmer: "MyMusicDownloadedTracksPage_trackShimmer__MZgW3",
      };
    },
    19730: function (e) {
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
    18029: function (e) {
      e.exports = {
        root: "NonMusicAlbumsPage_root__jlDXa",
        container: "NonMusicAlbumsPage_container__MHzvN",
        scrollContent: "NonMusicAlbumsPage_scrollContent__rksIP",
        scrollContainer: "NonMusicAlbumsPage_scrollContainer__XNRsu",
        important: "NonMusicAlbumsPage_important__Rk8LT",
        footer: "NonMusicAlbumsPage_footer__LJCIL",
        item: "NonMusicAlbumsPage_item__YArCS",
        content: "NonMusicAlbumsPage_content__phVa7",
      };
    },
    61215: function (e) {
      e.exports = {
        root: "NonMusicCategoryPage_root__GYeXL",
        content: "NonMusicCategoryPage_content__LJFnm",
        carouselBlocks: "NonMusicCategoryPage_carouselBlocks___BPJ_",
        carouselBlock: "NonMusicCategoryPage_carouselBlock__t41do",
        carouselBlockHeader: "NonMusicCategoryPage_carouselBlockHeader__1uIfL",
        footer: "NonMusicCategoryPage_footer__56hvJ",
      };
    },
    46460: function (e) {
      e.exports = {
        root: "NonMusicCategoryPlaylistsPage_root__NvUH8",
        scrollContent: "NonMusicCategoryPlaylistsPage_scrollContent__mxDHz",
        scrollContainer: "NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",
        important: "NonMusicCategoryPlaylistsPage_important__YBsHf",
        footer: "NonMusicCategoryPlaylistsPage_footer__TtkEO",
        item: "NonMusicCategoryPlaylistsPage_item__4YasT",
        content: "NonMusicCategoryPlaylistsPage_content__GZb1j",
      };
    },
    922: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    23141: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        scrollContainer: "PostPage_scrollContainer__zrIrH",
        important: "PostPage_important__qUlED",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    40534: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    94612: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    7871: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    94107: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    24351: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    61677: function (e) {
      e.exports = {
        header: "SearchPage_header__BOkdn",
        root: "SearchPage_root__i7sE0",
        root_showFilters: "SearchPage_root_showFilters__reB44",
        input: "SearchPage_input__TSbxK",
        content: "SearchPage_content__ycqK5",
        scrollableContent: "SearchPage_scrollableContent__gzoBu",
        main: "SearchPage_main__FV4Cr",
        tabCarousel: "SearchPage_tabCarousel__9cWOl",
        filter: "SearchPage_filter__5xzTL",
        filter_selected: "SearchPage_filter_selected__FOfyJ",
        compilations: "SearchPage_compilations__52N9u",
        footer: "SearchPage_footer__20bvg",
      };
    },
    54477: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    73367: function (e) {
      e.exports = {
        root: "BrowserUpdateNotification_root__IN495",
        important: "BrowserUpdateNotification_important__6k4Gb",
      };
    },
    38080: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    29986: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
    96159: function (e, t, a) {
      "use strict";
      var i, n, r, s;
      a.d(t, {
        c: function () {
          return n;
        },
        f: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).ALBUM = "album"),
        (r.PLAYLIST = "playlist"),
        (r.ALBUM_CHART_ITEM = "album-chart-item"),
        ((s = n || (n = {})).ALBUM_CHART = "album-chart"),
        (s.EDITORIAL_PLAYLISTS = "editorial-playlists"),
        (s.CATEGORY = "category");
    },
    16129: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        V: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).MP3 = "mp3"),
        (n.FLAC = "flac"),
        (n.AAC = "aac"),
        (n.HEAAC = "he-aac");
    },
    43295: function (e, t, a) {
      "use strict";
      var i, n;
      a.d(t, {
        q: function () {
          return i;
        },
      }),
        ((n = i || (i = {})).ALBUMS = "albums"),
        (n.ARTISTS = "artists"),
        (n.PLAYLISTS = "playlists");
    },
    29506: function (e, t, a) {
      "use strict";
      a.d(t, {
        Q: function () {
          return n;
        },
      });
      var i = a(16129);
      let n = [i.V.FLAC, i.V.AAC, i.V.HEAAC, i.V.MP3];
    },
  },
]);
