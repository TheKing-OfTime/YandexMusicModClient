(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5941],
  {
    71777: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithAuth: function () {
          return p;
        },
      });
      var o = n(75441),
        a = n(62569),
        s = n(98730),
        i = n(32358),
        l = n(15937),
        r = n(17392),
        c = n(97141),
        u = n(5734),
        d = n.n(u);
      let _ = (0, a.Pi)(() =>
        (0, o.jsxs)("div", {
          className: d().root,
          children: [
            (0, o.jsx)(r.Heading, {
              className: (0, i.W)(d().title, d().important),
              variant: "h3",
              size: "xs",
              children: (0, o.jsx)(l.Z, { id: "authorization.enter-title" }),
            }),
            (0, o.jsx)(r.Caption, {
              className: (0, i.W)(d().text, d().important),
              variant: "span",
              type: "text",
              size: "l",
              weight: "normal",
              children: (0, o.jsx)(l.Z, { id: "authorization.enter-text" }),
            }),
            (0, o.jsx)(c.fD, { size: "l", className: d().button }),
          ],
        }),
      );
      var v = n(13534);
      let p = (0, a.Pi)((e) => {
        let { children: t, withRedirectToMainPage: n } = e,
          { user: a } = (0, v.oR4)();
        return a.isAuthorized
          ? t
          : (n && (0, s.redirect)("/"), (0, o.jsx)(_, {}));
      });
    },
    38743: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBetaUser: function () {
          return w;
        },
      });
      var o = n(75441),
        a = n(62569),
        s = n(32358),
        i = n(65067),
        l = n(15937),
        r = n(35846),
        c = n(68208),
        u = n(37667),
        d = n(67126),
        _ = n(17392),
        v = n(13028),
        p = n(78129),
        h = n(13534),
        x = n(97141),
        m = n(81543),
        C = n.n(m);
      let f = (0, a.Pi)((e) => {
          let {
              withoutExperiment: t = !1,
              showLoginButton: a = !1,
              showUserProfile: m = !1,
              withOffer: f = !1,
            } = e,
            w = (0, h.uK4)(),
            {
              settings: { isMobile: g },
            } = (0, h.oR4)(),
            A = (0, h.Eu6)(),
            k = w.get(h.U5t),
            E = (0, h.yyu)(k.oldWebHost),
            N = (0, i.useMemo)(
              () => (g ? n(32401).Z.src : n(82085).Z.src),
              [g],
            ),
            b = (0, i.useCallback)(() => {
              let e = "https://".concat(E, "/pay");
              window.open(e, "_blank", "noreferrer noopener");
            }, [E]);
          (0, h.NOh)(!0);
          let j = (0, i.useMemo)(
              () =>
                f
                  ? (0, o.jsx)(_.Heading, {
                      variant: "h1",
                      size: "xl",
                      weight: "bold",
                      className: C().text,
                      children: (0, o.jsx)(l.Z, {
                        id: "welcome-page.offer-header",
                      }),
                    })
                  : t
                    ? (0, o.jsx)(_.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: C().text,
                        children: (0, o.jsx)(l.Z, {
                          id: "welcome-page.beta-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      })
                    : (0, o.jsx)(_.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: C().text,
                        children: (0, o.jsx)(l.Z, {
                          id: "welcome-page.not-auth-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      }),
              [f, t],
            ),
            B = (0, i.useMemo)(
              () =>
                t
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(_.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          className: C().text,
                          children: (0, o.jsx)(l.Z, {
                            id: "welcome-page.beta-text-short",
                          }),
                        }),
                        (0, o.jsx)(d.y, {
                          children: (0, o.jsx)(_.Heading, {
                            variant: "h2",
                            children: (0, o.jsx)(l.Z, {
                              id: "welcome-page.beta-text-short",
                            }),
                          }),
                        }),
                      ],
                    })
                  : f
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(_.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().offerText,
                            children: (0, o.jsx)(l.Z, {
                              id: "welcome-page.offer-text",
                            }),
                          }),
                          (0, o.jsx)(d.y, {
                            children: (0, o.jsx)(_.Heading, {
                              variant: "h2",
                              children: (0, o.jsx)(l.Z, {
                                id: "welcome-page.offer-text",
                              }),
                            }),
                          }),
                        ],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(_.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().text,
                            children: (0, o.jsx)(l.Z, {
                              id: "welcome-page.not-auth-text",
                              values: { br: (0, o.jsx)("br", {}) },
                            }),
                          }),
                          (0, o.jsx)(d.y, {
                            children: (0, o.jsx)(_.Heading, {
                              variant: "h2",
                              children: (0, o.jsx)(l.Z, {
                                id: "welcome-page.not-auth-text",
                                values: { br: (0, o.jsx)("br", {}) },
                              }),
                            }),
                          }),
                        ],
                      }),
              [f, t],
            ),
            R = (0, i.useMemo)(
              () =>
                a
                  ? (0, o.jsx)(x.fD, { size: "m", className: C().loginButton })
                  : f
                    ? (0, o.jsx)(c.Button, {
                        onClick: b,
                        className: (0, s.W)(
                          C().offerButton,
                          C().offerButton_important,
                        ),
                        role: "link",
                        color: "plus",
                        size: "l",
                        radius: "m",
                        withRipple: !1,
                        children: (0, o.jsx)(l.Z, {
                          id: "payment.offer-button",
                        }),
                      })
                    : void 0,
              [b, a, f],
            );
          return (
            (0, h.ZP4)(!0),
            (0, o.jsxs)("div", {
              className: (0, s.W)(C().root),
              ...(0, r.BA)(r.Br.welcome.WELCOME_PAGE),
              children: [
                (0, o.jsx)(v.TF, { withSecondaryColor: !0 }),
                (0, o.jsx)("div", {
                  className: C().logoContainer,
                  children: (0, o.jsx)(u.Logo, {
                    alignIcon: "center",
                    lang: A,
                    className: C().logo,
                  }),
                }),
                j,
                B,
                R,
                (0, o.jsx)("img", { className: C().image, src: N }),
                m &&
                  (0, o.jsx)(p.Iw, {
                    className: C().user,
                    withMeta: !g,
                    variant: g ? "mobile" : "desktop",
                    usernameClassName: (0, s.W)(C().username, C().important),
                  }),
              ],
            })
          );
        }),
        w = (0, a.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: a, settings: s } = (0, h.oR4)(),
            { hasFreeUserAccess: i } = (0, h.NMB)();
          return n.isAuthorized || s.isDesktopApplication
            ? n.isAuthorized
              ? a.checkExperiment(h.peG.WebNext, "on")
                ? n.hasPlus || i
                  ? t
                  : (0, o.jsx)(f, { withOffer: !0, showUserProfile: !0 })
                : (0, o.jsx)(f, { withoutExperiment: !0, showUserProfile: !0 })
              : (0, o.jsx)(f, { showLoginButton: !0 })
            : t;
        });
    },
    76655: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBlockChildUser: function () {
          return s;
        },
      });
      var o = n(62569),
        a = n(13534);
      let s = (0, o.Pi)(() => {
        let e = (0, a.uK4)(),
          { user: t } = (0, a.oR4)(),
          n = e.get(a.xit);
        t.isChild && n.redirectToChildPageUrl();
      });
    },
    34346: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBlockFullscreen: function () {
          return p;
        },
      });
      var o = n(75441),
        a = n(62569),
        s = n(98730),
        i = n(65067),
        l = n(68208),
        r = n(17392),
        c = n(13028),
        u = n(13534),
        d = n(45141),
        _ = n.n(d);
      let v = (0, a.Pi)((e) => {
          var t;
          let { isAuthorizedUser: n = !1 } = e,
            a = (0, s.useRouter)(),
            {
              experiments: d,
              settings: { isMobile: v },
            } = (0, u.oR4)(),
            p = (0, u.uK4)().get(u.xit),
            h = d.getExperiment(u.peG.WebNextBlockFullscreen),
            x =
              null == h
                ? void 0
                : null === (t = h.value) || void 0 === t
                  ? void 0
                  : t.metadata,
            m = (0, i.useCallback)(() => {
              p.authorizationUrl && a.push(p.authorizationUrl);
            }, [p.authorizationUrl, a]),
            C = (0, i.useCallback)(() => {
              var e, t;
              (null == x
                ? void 0
                : null === (e = x.redirectButton) || void 0 === e
                  ? void 0
                  : e.link) &&
                window.open(
                  null == x
                    ? void 0
                    : null === (t = x.redirectButton) || void 0 === t
                      ? void 0
                      : t.link,
                  "_blank",
                  "noreferrer noopener",
                );
            }, [x]),
            f = (0, i.useMemo)(() => {
              var e, t;
              return n
                ? (0, o.jsx)(l.Button, {
                    onClick: C,
                    className: _().button,
                    role: "link",
                    color: "primary",
                    size: "l",
                    radius: "xxxl",
                    children:
                      null == x
                        ? void 0
                        : null === (t = x.redirectButton) || void 0 === t
                          ? void 0
                          : t.text,
                  })
                : (0, o.jsx)(l.Button, {
                    onClick: m,
                    className: _().button,
                    role: "link",
                    color: "primary",
                    size: "l",
                    radius: "xxxl",
                    children:
                      null == x
                        ? void 0
                        : null === (e = x.authButton) || void 0 === e
                          ? void 0
                          : e.text,
                  });
            }, [n, m, C, x]);
          return (0, o.jsxs)("div", {
            className: _().root,
            children: [
              (0, o.jsx)(c.TF, { withSecondaryColor: !0 }),
              (0, o.jsxs)("div", {
                className: _().container,
                children: [
                  (0, o.jsxs)("div", {
                    className: _().content,
                    children: [
                      (0, o.jsx)(r.Heading, {
                        variant: "h1",
                        size: v ? "xl" : "xxl",
                        weight: "bold",
                        className: _().title,
                        children: null == x ? void 0 : x.mainText,
                      }),
                      f,
                    ],
                  }),
                  (0, o.jsx)("div", { className: _().image }),
                ],
              }),
            ],
          });
        }),
        p = (0, a.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: a } = (0, u.oR4)();
          return a.checkExperiment(u.peG.WebNextBlockFullscreen, "on")
            ? n.isAuthorized
              ? (0, o.jsx)(v, { isAuthorizedUser: !0 })
              : (0, o.jsx)(v, {})
            : t;
        });
    },
    54541: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithDownloadMobileAppModal: function () {
          return i;
        },
      });
      var o = n(62569),
        a = n(65067),
        s = n(13534);
      let i = (0, o.Pi)((e) => {
        let { children: t } = e,
          { downloadMobileApp: n } = (0, s.oR4)();
        return (
          (0, a.useEffect)(() => {
            n.shouldShow() && n.openModal();
          }, [n]),
          t
        );
      });
    },
    81623: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithMobilePaywall: function () {
          return c;
        },
      });
      var o = n(75441),
        a = n(62569),
        s = n(91851),
        i = n(13534),
        l = n(81929),
        r = n.n(l);
      let c = (0, a.Pi)((e) => {
        var t;
        let { children: n } = e,
          { user: a, settings: l } = (0, i.oR4)(),
          { isFreemium: c } = (0, i.NMB)();
        return (null === (t = l.browserInfo) || void 0 === t
          ? void 0
          : t.isTouch) &&
          (!a.isAuthorized || c)
          ? (0, o.jsx)("div", {
              className: r().paywallContainer,
              children: (0, o.jsx)(s.f1, { useOverlayScroll: !1 }),
            })
          : n;
      });
    },
    13028: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return E.ReleaseNotesModal;
        },
        ZP: function () {
          return k;
        },
        TF: function () {
          return N.TitleBar;
        },
        l7: function () {
          return o;
        },
        Yl: function () {
          return s;
        },
        F5: function () {
          return i;
        },
        vs: function () {
          return l.useApplicationDeeplinks;
        },
        Er: function () {
          return r.useApplicationUpdate;
        },
        Zw: function () {
          return c.useLaunch;
        },
        A4: function () {
          return u.usePlayerAction;
        },
        g3: function () {
          return d.useProbabilityBucket;
        },
        bO: function () {
          return _.useRefreshApplicationData;
        },
        ao: function () {
          return v.useRefreshRepositoryMeta;
        },
        lA: function () {
          return p.useRefreshTracksAvailability;
        },
        Tk: function () {
          return h.useReleaseNotes;
        },
        kr: function () {
          return x.useSendPlayerState;
        },
        sendDownloadTrack: function () {
          return sendDownloadTrack;
        },
        sendYnisonState: function () {
          return sendYnisonState;
        },
      });
      let o = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
          });
      };
      var a = n(13534);
      let s = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(a.BOn.APPLICATION_READY, e);
        },
        sendDownloadTrack = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
          void 0 === t ||
          t.send(a.BOn.DOWNLOAD_TRACK, {
            downloadURL: e.downloadURL,
            codec: e.codec,
            bitrate: e.bitrate,
            trackId: e.trackId,
            track: e.track,
            transport: e.transport,
            key: e.key,
          });
        },
          sendYnisonState = (e) => {
            var t;
            null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(a.BOn.YNISON_STATE, {
              rawData: e.rawData,
            });
          },
        i = (e) => {
          let t = e === a.Q2A.Light ? "#FFFFFF" : "#000000";
          window.desktopEvents.send(a.BOn.APPLICATION_THEME, t);
        };
      n(51773);
      var l = n(9436),
        r = n(94520),
        c = n(47334),
        u = n(10334),
        d = n(75034),
        _ = n(50613),
        v = n(59024),
        p = n(14064),
        h = n(65898),
        x = n(25663),
        m = n(22874),
        C = n(40892),
        f = n(15680),
        w = n.n(f);
      let g = (e) => {
          let t = {},
            n = (0, a.bop)();
          return (
            n &&
              Object.keys(e)
                .filter((e) => {
                  let t = (0, a.K7K)(e);
                  return w()(t, n) >= 0;
                })
                .forEach((n) => {
                  let o = e[n];
                  o && (t[n] = o);
                }),
            t
          );
        },
        A = m.V5.model("TranslationsModel", { data: m.V5.frozen() }),
        k = m.V5.model("ReleaseNotes", {
          modal: C.KL,
          translations: m.V5.maybeNull(A),
        })
          .views((e) => ({
            get isReady() {
              var t;
              return !!(
                (null === (t = e.translations) || void 0 === t
                  ? void 0
                  : t.data) &&
                "object" == typeof e.translations.data &&
                Object.keys(e.translations.data).length > 0
              );
            },
          }))
          .actions((e) => ({
            setReleaseNotes: (t) => {
              if (!t) return;
              let n = g(t);
              e.translations = A.create({ data: n });
            },
          }));
      var E = n(10156),
        N = n(64604);
    },
    51773: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return a;
        },
        eZ: function () {
          return i;
        },
        tX: function () {
          return s;
        },
      });
      var o = n(13534);
      let a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_MINIMIZE);
        },
        s = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_MAXIMIZE);
        },
        i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_CLOSE);
        };
    },
    9436: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationDeeplinks: function () {
          return l;
        },
      });
      var o = n(98730),
        a = n(65067),
        s = n(13534);
      let i = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/play-vibe/,
            (e) => {
              let t = new URLSearchParams(e.split("?")[1]);
              t.set(s.wxR.DEEPLINK, s.Kj$.PLAY_VIBE);
              let n = new URLSearchParams(window.location.search),
                o = (0, s.CXc)(n, t);
              return "landing" === t.get(s.wxR.SCREEN)
                ? "/?".concat(o.toString())
                : "".concat(window.location.pathname, "?").concat(o.toString());
            },
          ],
        ],
        l = () => {
          let e = (0, o.useRouter)(),
            t = (0, a.useCallback)(
              (t, n) => {
                for (let [t, o] of i)
                  if (t.test(n)) {
                    e.push(o(n));
                    return;
                  }
                let o = (0, s.SZ_)(n);
                o ? e.push(o) : e.push("/");
              },
              [e],
            );
          (0, a.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(s.BOn.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(s.BOn.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    94520: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationUpdate: function () {
          return p;
        },
      });
      var o = n(75441),
        a = n(65067),
        s = n(9317),
        i = n(13534),
        l = n(32358),
        r = n(68208),
        c = n(17392),
        u = n(97141),
        d = n(27723),
        _ = n.n(d);
      let v = (e) => {
          let { version: t, formatMessage: n, closeToast: s } = e,
            d = (0, a.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(i.BOn.INSTALL_UPDATE),
                null == s || s();
            }, [s]),
            v = (0, a.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: _().message,
                  children: [
                    (0, o.jsx)(c.Caption, {
                      className: _().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, o.jsx)(r.Button, {
                      className: _().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, o.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: n({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [n, d, t],
            );
          return (0, o.jsx)(u.Yj, {
            className: (0, l.W)(_().root, _().important),
            message: v,
          });
        },
          modUpdateToast = (e) => {
            let { version: t, formatMessage: n, closeToast: s } = e,
                [getProgress, setProgress] = (0, a.useState)(-1),
                d = (0, a.useCallback)(() => {
                  var e;
                  null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.INSTALL_MOD_UPDATE),
                  null == s || s();
                }, [s]),
                callInstallModUpdate = (0, a.useCallback)(() => {
                  var e;
                  null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.DOWNLOAD_MOD_UPDATE);
                }, []),
                formattedMessages = (progressValue) => {
                  let message = n({ id: "offline.download" });
                  if (progressValue < 0) {
                    message = n({ id: "offline.download" });
                  } else if (progressValue >= 0 && progressValue <= 100) {
                    message = "Скачивание…";
                  } else if (progressValue > 100) {
                    message = "Установить";
                  }
                  return message;
                },
                v = (0, a.useMemo)(
                    () =>
                        (0, o.jsxs)("div", {
                          className: _().message,
                          children: [
                            (0, o.jsx)(c.Caption, {
                              className: _().text,
                              variant: "div",
                              type: "controls",
                              size: "m",
                              children: n(
                                  { id: "desktop.on-mod-update-available" },
                                  { version: t },
                              ),
                            }),
                            (0, o.jsx)(r.Button, {
                              className: _().button,
                              onClick: getProgress <= 100 ? callInstallModUpdate : d,
                              variant: "default",
                              color: "secondary",
                              size: "xs",
                              radius: "xxxl",
                              disabled: getProgress <= 100 && getProgress >= 0,
                              children: (0, o.jsx)(c.Caption, {
                                variant: "div",
                                type: "controls",
                                size: "m",
                                children: formattedMessages(getProgress),
                              }),
                            }),
                          ],
                        }),
                    [n, d, t, getProgress],
                ),
                progressBarUpdate = (0, a.useCallback)(
                    (event, elementType, progress, dedupeTimestamp = 0) => {
                      if (elementType !== "modUpdateToast") return;

                      if (
                          window.dedupeNonces &&
                          window.dedupeNonces[elementType] === dedupeTimestamp
                      )
                        return;
                      if (!window.dedupeNonces) window.dedupeNonces = {};
                      if (dedupeTimestamp)
                        window.dedupeNonces[elementType] = dedupeTimestamp;
                      setProgress(progress);
                    },
                    [setProgress],
                );
            return (
                (0, a.useEffect)(() => {
                  var e;
                  return (
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.on(i.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate),
                          () => {
                            var e;
                            null === (e = window.desktopEvents) ||
                            void 0 === e ||
                            e.off(i.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate);
                          }
                  );
                }, [progressBarUpdate]),
                (0, o.jsx)(u.Yj, {
              className: (0, l.W)(_().root, _().important),
              message: v,
                  children: [
                    (0, o.jsx)("div", {
                      className: "qaIScXjx1qyXuaIHXQIo",
                      style: {
                        overflow: "hidden",
                        "margin-left": "-16px",
                        "margin-top": "-6px",
                        position: "absolute",
                        width: (500 * getProgress) / 100 + "px",
                        height: "50px",
                        "background-color": "rgb(255 255 255)",
                        opacity: getProgress <= 100 ? 0.1 : 0,
                        "z-index": 1,
                        transition: "opacity 0.3s linear 0.5s",
                      },
                    }),
                  ]
            }));
          },


          toastWithProgress = (e) => {
            let { toastID, message, buttonLabel, onButtonClick, disabled= false } = e,
                [getProgress, setProgress] = (0, a.useState)(-1),
                v = (0, a.useMemo)(
                    () =>
                        (0, o.jsxs)("div", {
                          className: _().message,
                          children: [
                            (0, o.jsx)(c.Caption, {
                              className: _().text,
                              variant: "div",
                              type: "controls",
                              size: "m",
                              children: message
                            }),
                            (0, o.jsx)(r.Button, {
                              className: _().button,
                              onClick: onButtonClick,
                              variant: "default",
                              color: "secondary",
                              size: "xs",
                              radius: "xxxl",
                              disabled: disabled,
                              children: (0, o.jsx)(c.Caption, {
                                variant: "div",
                                type: "controls",
                                size: "m",
                                children: buttonLabel,
                              }),
                            }),
                          ],
                        }),
                    [n, d, t, getProgress],
                ),
                progressBarUpdate = (0, a.useCallback)(
                    (event, elementType, progress, dedupeTimestamp = 0) => {
                      if (elementType !== toastID) return;

                      if (
                          window.dedupeNonces &&
                          window.dedupeNonces[elementType] === dedupeTimestamp
                      )
                        return;
                      if (!window.dedupeNonces) window.dedupeNonces = {};
                      if (dedupeTimestamp)
                        window.dedupeNonces[elementType] = dedupeTimestamp;
                      setProgress(progress);
                    },
                    [setProgress],
                );
            return (
                (0, a.useEffect)(() => {
                  var e;
                  return (
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.on(i.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate),
                          () => {
                            var e;
                            null === (e = window.desktopEvents) ||
                            void 0 === e ||
                            e.off(i.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate);
                          }
                  );
                }, [progressBarUpdate]),
                    (0, o.jsx)(u.Yj, {
                      className: (0, l.W)(_().root, _().important),
                      message: v,
                      children: [
                        (0, o.jsx)("div", {
                          className: "qaIScXjx1qyXuaIHXQIo",
                          style: {
                            overflow: "hidden",
                            "margin-left": "-16px",
                            "margin-top": "-6px",
                            position: "absolute",
                            width: (500 * getProgress) / 100 + "px",
                            height: "50px",
                            "background-color": "rgb(255 255 255)",
                            opacity: getProgress <= 100 ? 0.1 : 0,
                            "z-index": 1,
                            transition: "opacity 0.3s linear 0.5s",
                          },
                        }),
                      ]
                    }));
          },


        p = () => {
          let { formatMessage: e } = (0, s.Z)(),
            { notify: t } = (0, i.d$W)(),
            { notify: modUpdateNotify, dismiss: modUpdateDismiss} = (0, i.d$W)(),
            { notify: gpuStallNotify, dismiss: gpuStallDismiss} = (0, i.d$W)(),
            n = (0, a.useRef)(""),
            l = (0, a.useCallback)(
              (a, s) => {
                n.current !== s &&
                  ((n.current = s),
                  t((0, o.jsx)(v, { formatMessage: e, version: s }), {
                    containerId: i.W$x.IMPORTANT,
                  }));
              },
              [e, n, t],
            ),
          modUpdateCallback = (0, a.useCallback)(
              (a, s, newVersion, dedupeTimestamp = 0) => {
                if (
                    window.modUpdateAvailableEventDedupeNonce === dedupeTimestamp
                )
                  return;
                if (dedupeTimestamp)
                  window.modUpdateAvailableEventDedupeNonce = dedupeTimestamp;
                modUpdateNotify((0, o.jsx)(modUpdateToast, { formatMessage: e, version: `${s} -> ${newVersion}`, closeToast: modUpdateDismiss }), {
                      containerId: i.W$x.IMPORTANT,
                });
              },
              [e, modUpdateNotify, modUpdateDismiss],
          ),

              onGPUStallFixClick = (0, a.useCallback)(() => {
                window.desktopEvents?.send(i.BOn.APPLICATION_RESTART);
              }, []),

          onGPUStall = (0, a.useCallback)(
              (event, reason, dedupeTimestamp = 0) => {
                if (
                    window.onGPUStallEventDedupeNonce === dedupeTimestamp
                )
                  return;
                if (dedupeTimestamp)
                  window.onGPUStallEventDedupeNonce = dedupeTimestamp;
                gpuStallNotify((0, o.jsx)(toastWithProgress, { toastID:'GPU_STALL', message:`Аппаратное ускорение отключилось: ${reason}`, buttonLabel: 'Исправить', onButtonClick:onGPUStallFixClick }), {
                  containerId: i.W$x.IMPORTANT,
                });
              },
              [gpuStallNotify, gpuStallDismiss],
          );

          (0, a.useEffect)(() => {
            var e;
            return (
                null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback),
                    () => {
                      var e;
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.off(i.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback);
                    }
            );
          }, [modUpdateCallback]);
          (0, a.useEffect)(() => {
            var e;
            return (
                null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.GPU_STALL, onGPUStall),
                    () => {
                      var e;
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.off(i.BOn.GPU_STALL, onGPUStall);
                    }
            );
          }, [onGPUStall]);
          (0, a.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.UPDATE_AVAILABLE, l),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.UPDATE_AVAILABLE, l);
              }
            );
          }, [l]);
        };
    },
    47334: function (e, t, n) {
      "use strict";
      n.d(t, {
        useLaunch: function () {
          return i;
        },
      });
      var o = n(65067),
        a = n(19684),
        s = n(13534);
      let i = () => {
        let e = (0, a.s)(),
          t = (0, o.useCallback)(() => {
            let t = (0, s.bop)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BOn.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BOn.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    10334: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePlayerAction: function () {
          return l;
        },
      });
      var o,
        a,
        s = n(65067),
        i = n(13534),
        feedbackApi = n(32399);
      const sendPlayerStateDefault = (ve) => {
        let desktopEvents;
        const previousTrack =
          (ve.state.queueState.index.value ?? 0) - 1 >= 0
            ? ve.state.queueState?.entityList.value?.[
                ve.state.queueState.index.value - 1
              ]?.entity?.entityData?.meta
            : undefined;
        const nextTrack =
          (ve.state.queueState.index.value ?? 0) + 1 >= 0
            ? ve.state.queueState?.entityList.value?.[
                ve.state.queueState.index.value + 1
              ]?.entity?.entityData?.meta
            : undefined;

        null === (desktopEvents = window.desktopEvents) ||
          void 0 === desktopEvents ||
          desktopEvents.send(i.BOn.PLAYER_STATE, {
            status: ve.state.playerState.status.value,
            isPlaying: ve.state.playerState.status.value === "playing",
            canMoveForward:
              ve.state.currentContext.value?.availableActions.moveForward.value,
            canMoveBackward:
              ve.state.currentContext.value?.availableActions.moveBackward
                .value,
            track:
              ve.state.queueState.currentEntity.value?.entity.entityData.meta,
            progress: ve.state.playerState.progress.value,
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
            previousTrack,
            nextTrack,
          });
      };
      ((o = a || (a = {})).PLAY = "PLAY"),
        (o.PAUSE = "PAUSE"),
        (o.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (o.MOVE_FORWARD = "MOVE_FORWARD");
      let l = (e) => {
        let { sonataState: sonataState } = (0, i.oR4)(),
          onLikeClick = (0, feedbackApi.SB)(sonataState.entityMeta),
          onDislikeClick = (0, feedbackApi.KX)(sonataState.entityMeta);
        let t = (0, s.useCallback)(
          (t, n, nonce = 1) => {
            if (window.playerActionEventDedupeNonce === nonce) return;
            if (nonce) window.playerActionEventDedupeNonce = nonce;
            switch (n) {
              case "PLAY":
              case "PAUSE":
              case "TOGGLE_PLAY":
                null == e || e.togglePause();
                break;
              case "MOVE_BACKWARD":
                null == e || e.moveBackward();
                break;
              case "MOVE_FORWARD":
                null == e || e.moveForward();
                break;
              case "REPEAT_NONE":
                null == e || e.setRepeatMode("none");
                break;
              case "REPEAT_CONTEXT":
                null == e || e.setRepeatMode("context");
                break;
              case "REPEAT_ONE":
                null == e || e.setRepeatMode("one");
                break;
              case "TOGGLE_REPEAT":
                let nextMode = "none";
                switch (e?.state?.queueState?.repeat?.value) {
                  case "none":
                    nextMode =
                        e?.state?.currentContext?.value?.contextData?.type ===
                        "vibe"
                            ? "one"
                            : "context";
                    break;
                  case "context":
                    nextMode = "one";
                    break;
                  case "one":
                  default:
                    nextMode = "none";
                    break;
                }
                null == e || e.setRepeatMode(nextMode);
                break;
              case "TOGGLE_SHUFFLE":
                null == e || e.toggleShuffle();
                break;
              case "TOGGLE_LIKE":
              case "LIKE":
              case "LIKE_NONE":
                null == e || onLikeClick?.(sonataState.entityMeta, n);
                sendPlayerStateDefault?.(e);
                break;
              case "DISLIKE":
              case "DISLIKE_NONE":
              case "TOGGLE_DISLIKE":
                null == e || onDislikeClick?.(sonataState.entityMeta, n);
                sendPlayerStateDefault?.(e);
                break;
            }
          },
          [e],
        );
        (0, s.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BOn.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BOn.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    75034: function (e, t, n) {
      "use strict";
      n.d(t, {
        useProbabilityBucket: function () {
          return i;
        },
      });
      var o = n(65067),
        a = n(19684),
        s = n(13534);
      let i = () => {
        let e = (0, a.s)(),
          t = (0, o.useCallback)(
            (t, n) => {
              n && e.count(n, "probabilityBucket");
            },
            [e],
          );
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BOn.PROBABILITY_BUCKET, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BOn.PROBABILITY_BUCKET, t);
            }
          );
        }, [t]);
      };
    },
    50613: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshApplicationData: function () {
          return i;
        },
      });
      var o = n(65067),
        a = n(36746),
        s = n(13534);
      let i = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: i,
            user: l,
          } = (0, s.oR4)(),
          r = (0, o.useCallback)(() => {
            n.getData(),
              e.getData(),
              i.landing.isLoaded &&
                i.landing.getSkeleton(
                  { id: a.j.WEB_MAIN, showWizard: l.settings.showWizard },
                  { preloadBlocksCount: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  { id: a.j.WEB_COLLECTION, showWizard: l.settings.showWizard },
                  { preloadBlocksCount: 2 },
                );
          }, [t.landing, n, e, i.landing, l.settings.showWizard]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BOn.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BOn.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    59024: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshRepositoryMeta: function () {
          return s;
        },
      });
      var o = n(65067),
        a = n(13534);
      let s = () => {
        let e = (0, a.pL3)(),
          t = (0, o.useCallback)(() => {
            e.tracksController &&
              e.tracksController.refreshTracksMeta().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(a.BOn.REPOSITORY_META_UPDATED);
              });
          }, [e.tracksController]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.REFRESH_REPOSITORY_META, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.REFRESH_REPOSITORY_META, t);
            }
          );
        }, [t]);
      };
    },
    14064: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshTracksAvailability: function () {
          return s;
        },
      });
      var o = n(65067),
        a = n(13534);
      let s = () => {
        let e = (0, a.pL3)(),
          t = (0, o.useCallback)(() => {
            e.tracksController &&
              e.tracksController.refreshTracksAvailability().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(a.BOn.TRACKS_AVAILABILITY_UPDATED);
              });
          }, [e.tracksController]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.REFRESH_TRACKS_AVAILABILITY, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.REFRESH_TRACKS_AVAILABILITY, t);
            }
          );
        }, [t]);
      };
    },
    65898: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReleaseNotes: function () {
          return s;
        },
      });
      var o = n(65067),
        a = n(13534);
      let s = () => {
        let [e, t] = (0, o.useState)(!1),
          {
            releaseNotes: { setReleaseNotes: n, isReady: s, modal: i },
          } = (0, a.oR4)(),
          l = (0, o.useCallback)(
            (e, o, a) => {
              n(a), o && t(!0);
            },
            [n],
          );
        (0, o.useEffect)(() => {
          e && s && (i.open(), t(!1));
        }, [s, i, e]),
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BOn.LOAD_RELEASE_NOTES, l),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BOn.LOAD_RELEASE_NOTES, l);
              }
            );
          }, [l]);
      };
    },
    25663: function (e, t, n) {
      "use strict";
      n.d(t, {
        useSendPlayerState: function () {
          return l;
        },
      });
      var o = n(65067),
        a = n(93093),
        s = n(98375),
        i = n(13534);
      let l = (e) => {
        let { sonata: t } = e,
          n = (0, a.W)((e) => {
            var t;
            let { isPlaying: n, canMoveBackward: o, canMoveForward: a } = e;
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.send(i.BOn.PLAYER_STATE, {
                isPlaying: n,
                canMoveBackward: o,
                canMoveForward: a,
                status: e.status,
                track: e.track,
                progress: e.progress,
                availableActions: e.availableActions,
                actionsStore: e.actionsStore,
                previousTrack: e.previousTrack,
                nextTrack: e.nextTrack,
              });
          }),
            sendPlayerStateDefault = (ve) => {

              const previousTrack = ((ve.state.queueState.index.value ?? 0) - 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value-1]?.entity?.entityData?.meta : undefined;
              const nextTrack = ((ve.state.queueState.index.value ?? 0) + 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value+1]?.entity?.entityData?.meta : undefined;

              n({
                status: ve.state.playerState.status.value,
                isPlaying: ve.state.playerState.status.value === s.FY.PLAYING,
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
                previousTrack: previousTrack,
                nextTrack: nextTrack,
              });
            },
            sendPlayerStatePlaying = (ve) => {

              const previousTrack = ((ve.state.queueState.index.value ?? 0) - 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value-1]?.entity?.entityData?.meta : undefined;
              const nextTrack = ((ve.state.queueState.index.value ?? 0) + 1) >= 0 ? ve.state.queueState?.entityList.value?.[ve.state.queueState.index.value+1]?.entity?.entityData?.meta : undefined;

              n({
                status: s.FY.PLAYING,
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
                previousTrack: previousTrack,
                nextTrack: nextTrack,
              });
            };
        (0, o.useEffect)(() => {
          let e, o;
          let a =
              null == t
                ? void 0
                : t.state.playerState.status.onChange((e) => {
                    e && sendPlayerStateDefault(t);
                  }),
              onEntityChange =
                  t?.state.queueState.currentEntity.onChange((e) => {
                    e && sendPlayerStatePlaying(t);
                  }),
              seekTracker =
                  t?.state.playerState.event.onChange((e) => {
                    if (
                        t.state.playerState.event.value === s.xg.SET_PROGRESS
                    ) {
                      sendPlayerStateDefault(t);
                    }
                  }),
              queueStateEntityListTracker =
                  t?.state.queueState.entityList.onChange((e) => {
                    sendPlayerStateDefault(t);
                  }),
              onRepeatAvailableChange =
                  t?.state.currentContext.value?.availableActions.repeat?.onChange((e) => {
                    sendPlayerStateDefault(t);
                  }),
              onShuffleAvailableChange =
                  t?.state.currentContext.value?.availableActions.shuffle?.onChange((e) => {
                    sendPlayerStateDefault(t);
                  }),
              onRepeatChange =
                  t?.state.queueState.repeat?.onChange((e) => {
                    sendPlayerStateDefault(t);
                  }),
              onShuffleChange =
                  t?.state.queueState.shuffle?.onChange((e) => {
                    sendPlayerStateDefault(t);
                  }),
            i =
              null == t
                ? void 0
                : t.state.currentContext.onChange(() => {
                    var a, s;
                    null == e || e(),
                      null == o || o(),
                      (e =
                        null == t
                          ? void 0
                          : null === (a = t.state.currentContext.value) ||
                              void 0 === a
                            ? void 0
                            : a.availableActions.moveBackward.onChange((e) => {
                                  sendPlayerStateDefault(t);
                              })),
                      (o =
                        null == t
                          ? void 0
                          : null === (s = t.state.currentContext.value) ||
                              void 0 === s
                            ? void 0
                            : s.availableActions.moveForward.onChange((e) => {
                                  sendPlayerStateDefault(t);
                              }));
                  });
          return () => {
            null == a || a(),
              null == i || i(),
            null == onEntityChange || onEntityChange(),
            null == seekTracker || seekTracker(),
            null == queueStateEntityListTracker || queueStateEntityListTracker(),
            null == onRepeatAvailableChange || onRepeatAvailableChange(),
            null == onShuffleAvailableChange || onShuffleAvailableChange(),
            null == onRepeatChange || onRepeatChange(),
            null == onShuffleChange || onShuffleChange(),
              null == o || o(),
              null == o || o();
          };
        }, [
          n,
          null == t ? void 0 : t.state.currentContext,
          null == t ? void 0 : t.state.playerState.status,
        ]);
      };
    },
    10156: function (e, t, n) {
      "use strict";
      n.d(t, {
        ReleaseNotesModal: function () {
          return m;
        },
      });
      var o = n(75441),
        a = n(32358),
        s = n(62569),
        i = n(65067),
        l = n(9317),
        r = n(38959),
        c = n(15937),
        u = n(59506),
        d = n(17294),
        _ = n(17392),
        v = n(13534),
        p = n(47277),
        h = n.n(p);
      let x = {
          ul: (e) =>
            (0, o.jsx)("ul", { className: h().description, children: e }),
          li: (e) => (0, o.jsx)("li", { className: h().item, children: e }),
          code: (e) => (0, o.jsx)("code", { className: h().code, children: e }),
          date: (e) => (0, o.jsx)("span", { className: h().date, children: e }),
          p: (e) => (0, o.jsx)("p", { className: h().paragraph, children: e }),
          br: (0, o.jsx)("br", {}),
        },
        m = (0, s.Pi)(() => {
          var e, t;
          let { releaseNotes: n } = (0, v.oR4)(),
            { formatMessage: s } = (0, l.Z)(),
            { language: p, defaultLanguage: m } = (0, v.ZSk)(),
            C = (0, v.J4i)(),
            f = (0, i.useMemo)(() => {
              var e, t;
              return (0, v.LaW)(
                null !==
                  (t =
                    null === (e = n.translations) || void 0 === e
                      ? void 0
                      : e.data) && void 0 !== t
                  ? t
                  : {},
              );
            }, [
              null === (e = n.translations) || void 0 === e ? void 0 : e.data,
            ]);
          return (0, o.jsx)(u.u, {
            title: s({ id: "desktop.release-notes-modal-title" }),
            open: n.modal.isOpened,
            onOpenChange: n.modal.onOpenChange,
            onClose: n.modal.close,
            size: "fitContent",
            placement: "center",
            overlayColor: "full",
            labelClose: s({ id: "interface-actions.close" }),
            className: h().root,
            headerClassName: h().modalHeader,
            contentClassName: h().modalContent,
            children: (0, o.jsx)(r.Z, {
              onError: C,
              defaultLocale: m,
              locale: p,
              messages:
                null === (t = n.translations) || void 0 === t ? void 0 : t.data,
              children: (0, o.jsx)(d.t, {
                className: (0, a.W)(h().scrollableContent, h().important),
                containerClassName: (0, a.W)(h().notes, h().important),
                children: f.map((e) =>
                  (0, o.jsxs)(
                    "div",
                    {
                      className: h().note,
                      children: [
                        (0, o.jsx)(_.Heading, {
                          variant: "h4",
                          className: (0, a.W)(h().version, h().important),
                          children: (0, v.K7K)(e),
                        }),
                        (0, o.jsx)(c.Z, { id: e, values: x }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
          });
        });
    },
    64604: function (e, t, n) {
      "use strict";
      n.d(t, {
        TitleBar: function () {
          return v;
        },
      });
      var o = n(75441),
        a = n(32358),
        s = n(62569),
        i = n(65067),
        l = n(9317),
        r = n(13534),
        c = n(51773),
        u = n(64753),
        d = n.n(u);
      let _ = (e) => {
          let {
            children: t,
            className: n,
            onClick: s,
            ariaLabel: i,
            withSecondaryColor: l,
          } = e;
          return (0, o.jsx)("button", {
            type: "button",
            className: (0, a.W)(
              d().button,
              { [d().button_withSecondaryColor]: l },
              n,
            ),
            onClick: s,
            "aria-label": i,
            children: t,
          });
        },
        v = (0, s.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            { settings: n } = (0, r.oR4)(),
            s = n.isWindowsApplication || n.isLinuxApplication,
            { formatMessage: u } = (0, l.Z)(),
            v = (0, i.useCallback)(() => {
              (0, c.N$)();
            }, []),
            p = (0, i.useCallback)(() => {
              (0, c.tX)();
            }, []),
            h = (0, i.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, o.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              s &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(_, {
                    onClick: v,
                    ariaLabel: u({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(_, {
                    onClick: p,
                    ariaLabel: u({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(_, {
                    className: d().closeButton,
                    onClick: h,
                    ariaLabel: u({ id: "windows-menu.close" }),
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, a.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
          });
        });
    },
    15898: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotFound: function () {
          return p;
        },
      });
      var o = n(75441),
        a = n(32358),
        s = n(62569),
        i = n(15937),
        l = n(68208),
        r = n(69756),
        c = n(17392),
        u = n(13534),
        d = n(97141),
        _ = n(35129),
        v = n.n(_);
      let p = (0, s.Pi)((e) => {
        let { className: t } = e,
          { contentRef: n } = (0, u.$Y6)(),
          s = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, o.jsxs)("div", {
            className: (0, a.W)(v().root, { [v().root_desktop]: !n }, t),
            children: [
              (0, o.jsx)(d.nP, {
                withBackwardFallback: "/",
                className: v().navigation,
                withForwardControl: !1,
              }),
              (0, o.jsxs)("div", {
                className: v().content,
                children: [
                  (0, o.jsx)(r.Icon, {
                    className: v().icon,
                    variant: "musicLogo",
                  }),
                  (0, o.jsx)(c.Heading, {
                    className: (0, a.W)(v().title, v().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, o.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, o.jsx)(c.Caption, {
                    className: (0, a.W)(v().text, v().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, o.jsx)(i.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, o.jsx)(l.Button, {
                    onClick: s,
                    className: v().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, o.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, o.jsx)(i.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    81929: function (e) {
      e.exports = {
        paywallContainer: "WithMobilePaywall_paywallContainer__Mk1l_",
        shimmer: "WithMobilePaywall_shimmer__fg4QA",
      };
    },
    27723: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    47277: function (e) {
      e.exports = {
        root: "ReleaseNotesModal_root__RSw1p",
        modalHeader: "ReleaseNotesModal_modalHeader__gp9SA",
        modalContent: "ReleaseNotesModal_modalContent__g8OTu",
        scrollableContent: "ReleaseNotesModal_scrollableContent__zGdbH",
        important: "ReleaseNotesModal_important__u8yP4",
        notes: "ReleaseNotesModal_notes__bVAoa",
        date: "ReleaseNotesModal_date__s3_ux",
        description: "ReleaseNotesModal_description__B_yLI",
        paragraph: "ReleaseNotesModal_paragraph___laDJ",
        note: "ReleaseNotesModal_note__S9E6z",
        version: "ReleaseNotesModal_version__4Mcd5",
        item: "ReleaseNotesModal_item___CYml",
        code: "ReleaseNotesModal_code__Yv3QD",
      };
    },
    64753: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    45141: function (e) {
      e.exports = {
        root: "BlockPage_root__crGK_",
        container: "BlockPage_container__my_l0",
        content: "BlockPage_content__4nK4D",
        title: "BlockPage_title__sAejV",
        button: "BlockPage_button__KoFZX",
        image: "BlockPage_image__C02Db",
      };
    },
    81543: function (e) {
      e.exports = {
        root: "WelcomePage_root__JK3Pb",
        image: "WelcomePage_image__7_fpW",
        loginButton: "WelcomePage_loginButton__AJHcG",
        secondBackground: "WelcomePage_secondBackground__55zFI",
        offerButton: "WelcomePage_offerButton__MRs_g",
        offerButton_important: "WelcomePage_offerButton_important__0wf60",
        text: "WelcomePage_text__A4aXp",
        offerText: "WelcomePage_offerText__ZvXKN",
        logoContainer: "WelcomePage_logoContainer__72W3y",
        logo: "WelcomePage_logo__oMU8g",
        user: "WelcomePage_user__WNc4W",
        username: "WelcomePage_username__yXGsn",
        important: "WelcomePage_important__MJxEk",
      };
    },
    5734: function (e) {
      e.exports = {
        root: "Login_root__VtFg_",
        title: "Login_title__dqQz1",
        important: "Login_important__Z8S9I",
        text: "Login_text__1uju5",
        button: "Login_button__ZYvZY",
      };
    },
    35129: function (e) {
      e.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
    82085: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/desktop.1e0910e6.webp",
        height: 1800,
        width: 2880,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAkA4JYwCdEf/gegCuVYA/vwD3r9S5U9JHqXE6Z/y/x+DQID4BQ1GukGyA4khK6cqL1J3lTe0AAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    32401: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/mobile.3fa5bdc0.webp",
        height: 1270,
        width: 750,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoFAAgAAkA4JQBOiP/wNvu9lgAA/v1xMJqxugMp/PP2rm+shlwzDVo+PKs3U60goeXdVhlYEvqdmg9mn8oAAA==",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
  },
]);
