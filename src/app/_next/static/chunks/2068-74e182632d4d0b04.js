(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2068],
  {
    56101: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithAuth: function () {
          return v;
        },
      });
      var n = o(65301),
        i = o(96233),
        a = o(99678),
        s = o(9695),
        l = o(91207),
        r = o(44729),
        c = o(78372),
        u = o(81437),
        d = o(58997),
        _ = o(9913),
        h = o.n(_);
      let p = (0, i.Pi)(() => {
          let e = (0, a.useRouter)(),
            t = (0, d.uK4)().get(d.xit),
            o = (0, l.useCallback)(() => {
              t.authorizationUrl && e.push(t.authorizationUrl);
            }, [t.authorizationUrl, e]);
          return (0, n.jsxs)("div", {
            className: h().root,
            children: [
              (0, n.jsx)(u.Heading, {
                className: (0, s.W)(h().title, h().important),
                variant: "h3",
                size: "xs",
                children: (0, n.jsx)(r.Z, { id: "authorization.enter-title" }),
              }),
              (0, n.jsx)(u.Caption, {
                className: (0, s.W)(h().text, h().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: (0, n.jsx)(r.Z, { id: "authorization.enter-text" }),
              }),
              (0, n.jsx)(c.z, {
                onClick: o,
                className: h().button,
                role: "link",
                color: "primary",
                size: "l",
                radius: "xxxl",
                children: (0, n.jsx)(u.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, n.jsx)(r.Z, {
                    id: "authorization.enter-button",
                  }),
                }),
              }),
            ],
          });
        }),
        v = (0, i.Pi)((e) => {
          let { children: t, withRedirectToMainPage: o } = e,
            { user: i } = (0, d.oR4)();
          return i.isAuthorized
            ? t
            : (o && (0, a.redirect)("/"), (0, n.jsx)(p, {}));
        });
    },
    11589: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithBetaUser: function () {
          return w;
        },
      });
      var n = o(65301),
        i = o(96233),
        a = o(9695),
        s = o(99678),
        l = o(91207),
        r = o(44729),
        c = o(55975),
        u = o(78372),
        d = o(73057),
        _ = o(22455),
        h = o(81437),
        p = o(35308),
        v = o(43507),
        x = o(58997),
        m = o(17385),
        C = o.n(m);
      let f = (0, i.Pi)((e) => {
          let {
              withoutExperiment: t = !1,
              showLoginButton: i = !1,
              showUserProfile: m = !1,
              withOffer: f = !1,
            } = e,
            w = (0, s.useRouter)(),
            g = (0, x.uK4)(),
            {
              settings: { isMobile: A },
            } = (0, x.oR4)(),
            { language: k } = (0, x.ZSk)(),
            N = g.get(x.xit),
            b = g.get(x.U5t),
            E = (0, x.yyu)(b.oldWebHost),
            j = (0, l.useMemo)(() => (A ? o(8070).Z.src : o(98636).Z.src), [A]),
            B = (0, l.useCallback)(() => {
              N.authorizationUrl && w.push(N.authorizationUrl);
            }, [N.authorizationUrl, w]),
            R = (0, l.useCallback)(() => {
              let e = "https://".concat(E, "/pay");
              window.open(e, "_blank", "noreferrer noopener");
            }, [E]);
          (0, x.NOh)(!0);
          let P = (0, l.useMemo)(
              () =>
                f
                  ? (0, n.jsx)(h.Heading, {
                      variant: "h1",
                      size: "xl",
                      weight: "bold",
                      className: C().text,
                      children: (0, n.jsx)(r.Z, {
                        id: "welcome-page.offer-header",
                      }),
                    })
                  : t
                    ? (0, n.jsx)(h.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: C().text,
                        children: (0, n.jsx)(r.Z, {
                          id: "welcome-page.beta-header",
                          values: { br: (0, n.jsx)("br", {}) },
                        }),
                      })
                    : (0, n.jsx)(h.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: C().text,
                        children: (0, n.jsx)(r.Z, {
                          id: "welcome-page.not-auth-header",
                          values: { br: (0, n.jsx)("br", {}) },
                        }),
                      }),
              [f, t],
            ),
            O = (0, l.useMemo)(
              () =>
                t
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(h.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          className: C().text,
                          children: (0, n.jsx)(r.Z, {
                            id: "welcome-page.beta-text-short",
                          }),
                        }),
                        (0, n.jsx)(_.y, {
                          children: (0, n.jsx)(h.Heading, {
                            variant: "h2",
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.beta-text-short",
                            }),
                          }),
                        }),
                      ],
                    })
                  : f
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(h.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().offerText,
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.offer-text",
                            }),
                          }),
                          (0, n.jsx)(_.y, {
                            children: (0, n.jsx)(h.Heading, {
                              variant: "h2",
                              children: (0, n.jsx)(r.Z, {
                                id: "welcome-page.offer-text",
                              }),
                            }),
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(h.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: C().text,
                            children: (0, n.jsx)(r.Z, {
                              id: "welcome-page.not-auth-text",
                              values: { br: (0, n.jsx)("br", {}) },
                            }),
                          }),
                          (0, n.jsx)(_.y, {
                            children: (0, n.jsx)(h.Heading, {
                              variant: "h2",
                              children: (0, n.jsx)(r.Z, {
                                id: "welcome-page.not-auth-text",
                                values: { br: (0, n.jsx)("br", {}) },
                              }),
                            }),
                          }),
                        ],
                      }),
              [f, t],
            ),
            W = (0, l.useMemo)(
              () =>
                i
                  ? (0, n.jsx)(u.z, {
                      onClick: B,
                      className: C().loginButton,
                      role: "link",
                      color: "primary",
                      size: "m",
                      radius: "xxxl",
                      children: (0, n.jsx)(r.Z, {
                        id: "authorization.enter-button",
                      }),
                    })
                  : f
                    ? (0, n.jsx)(u.z, {
                        onClick: R,
                        className: (0, a.W)(
                          C().offerButton,
                          C().offerButton_important,
                        ),
                        role: "link",
                        color: "plus",
                        size: "l",
                        radius: "m",
                        withRipple: !1,
                        children: (0, n.jsx)(r.Z, {
                          id: "payment.offer-button",
                        }),
                      })
                    : void 0,
              [B, R, i, f],
            );
          return (
            (0, x.ZP4)(!0),
            (0, n.jsxs)("div", {
              className: (0, a.W)(C().root),
              ...(0, c.BA)(c.Br.welcome.WELCOME_PAGE),
              children: [
                (0, n.jsx)(p.TF, { withSecondaryColor: !0 }),
                (0, n.jsx)("div", {
                  className: C().logoContainer,
                  children: (0, n.jsx)(d.TR, {
                    alignIcon: "center",
                    lang: "ru" !== k ? d.o0.EN : d.o0.RU,
                    className: C().logo,
                  }),
                }),
                P,
                O,
                W,
                (0, n.jsx)("img", { className: C().image, src: j }),
                m &&
                  (0, n.jsx)(v.Iw, {
                    className: C().user,
                    withMeta: !A,
                    variant: A ? "mobile" : "desktop",
                    usernameClassName: (0, a.W)(C().username, C().important),
                  }),
              ],
            })
          );
        }),
        w = (0, i.Pi)((e) => {
          let { children: t } = e,
            { user: o, experiments: i } = (0, x.oR4)(),
            { hasFreeUserAccess: a } = (0, x.NMB)(),
            s = i.checkExperiment(x.peG.WebNextAllowUnauthorized, "on");
          return !o.isAuthorized && s
            ? t
            : o.isAuthorized
              ? i.checkExperiment(x.peG.WebNext, "on") && !o.isChild
                ? o.hasPlus || a
                  ? t
                  : (0, n.jsx)(f, { withOffer: !0, showUserProfile: !0 })
                : (0, n.jsx)(f, { withoutExperiment: !0, showUserProfile: !0 })
              : (0, n.jsx)(f, { showLoginButton: !0 });
        });
    },
    50470: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithBlockChildUser: function () {
          return a;
        },
      });
      var n = o(96233),
        i = o(58997);
      let a = (0, n.Pi)(() => {
        let e = (0, i.uK4)(),
          { user: t } = (0, i.oR4)(),
          o = e.get(i.xit);
        t.isChild && o.redirectToChildPageUrl();
      });
    },
    93414: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithBlockFullscreen: function () {
          return p;
        },
      });
      var n = o(65301),
        i = o(96233),
        a = o(99678),
        s = o(91207),
        l = o(78372),
        r = o(81437),
        c = o(35308),
        u = o(58997),
        d = o(44878),
        _ = o.n(d);
      let h = (0, i.Pi)((e) => {
          var t;
          let { isAuthorizedUser: o = !1 } = e,
            i = (0, a.useRouter)(),
            {
              experiments: d,
              settings: { isMobile: h },
            } = (0, u.oR4)(),
            p = (0, u.uK4)().get(u.xit),
            v = d.getExperiment(u.peG.WebNextBlockFullscreen),
            x =
              null == v
                ? void 0
                : null === (t = v.value) || void 0 === t
                  ? void 0
                  : t.metadata,
            m = (0, s.useCallback)(() => {
              p.authorizationUrl && i.push(p.authorizationUrl);
            }, [p.authorizationUrl, i]),
            C = (0, s.useCallback)(() => {
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
            f = (0, s.useMemo)(() => {
              var e, t;
              return o
                ? (0, n.jsx)(l.z, {
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
                : (0, n.jsx)(l.z, {
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
            }, [o, m, C, x]);
          return (0, n.jsxs)("div", {
            className: _().root,
            children: [
              (0, n.jsx)(c.TF, { withSecondaryColor: !0 }),
              (0, n.jsxs)("div", {
                className: _().container,
                children: [
                  (0, n.jsxs)("div", {
                    className: _().content,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        variant: "h1",
                        size: h ? "xl" : "xxl",
                        weight: "bold",
                        className: _().title,
                        children: null == x ? void 0 : x.mainText,
                      }),
                      f,
                    ],
                  }),
                  (0, n.jsx)("div", { className: _().image }),
                ],
              }),
            ],
          });
        }),
        p = (0, i.Pi)((e) => {
          let { children: t } = e,
            { user: o, experiments: i } = (0, u.oR4)();
          return i.checkExperiment(u.peG.WebNextBlockFullscreen, "on")
            ? o.isAuthorized
              ? (0, n.jsx)(h, { isAuthorizedUser: !0 })
              : (0, n.jsx)(h, {})
            : t;
        });
    },
    58710: function (e, t, o) {
      "use strict";
      o.d(t, {
        WithMobilePaywall: function () {
          return _;
        },
      });
      var n = o(65301),
        i = o(96233),
        a = o(91207),
        s = o(2319),
        l = o(82607),
        r = o(86919),
        c = o(58997),
        u = o(52273),
        d = o.n(u);
      let _ = (0, i.Pi)((e) => {
        var t;
        let { children: o } = e,
          { user: i, settings: u } = (0, c.oR4)(),
          { isFreemium: _ } = (0, c.NMB)(),
          { state: h, toggleTrue: p } = (0, s.O)(!1),
          v =
            (null === (t = u.browserInfo) || void 0 === t
              ? void 0
              : t.isTouch) &&
            (!i.isAuthorized || _),
          x = v && !i.isAuthorized;
        return ((0, a.useEffect)(() => {
          x && i.getUnauthorizedAccountGeoRegionIso().finally(p);
        }, [x, i, p]),
        v)
          ? x && !h
            ? (0, n.jsx)(l.Shimmer, { className: d().shimmer, isActive: !0 })
            : (0, n.jsx)("div", {
                className: d().paywallContainer,
                children: (0, n.jsx)(r.f1, { useOverlayScroll: !1 }),
              })
          : o;
      });
    },
    35308: function (e, t, o) {
      "use strict";
      o.d(t, {
        Pj: function () {
          return N.ReleaseNotesModal;
        },
        ZP: function () {
          return k;
        },
        TF: function () {
          return b.TitleBar;
        },
        l7: function () {
          return n;
        },
        Yl: function () {
          return a;
        },
        F5: function () {
          return s;
        },
        Pt: function () {
          return l;
        },
        vs: function () {
          return r.useApplicationDeeplinks;
        },
        Er: function () {
          return c.useApplicationUpdate;
        },
        Zw: function () {
          return u.useLaunch;
        },
        A4: function () {
          return d.usePlayerAction;
        },
        g3: function () {
          return _.useProbabilityBucket;
        },
        bO: function () {
          return h.useRefreshApplicationData;
        },
        ao: function () {
          return p.useRefreshRepositoryMeta;
        },
        lA: function () {
          return v.useRefreshTracksAvailability;
        },
        Tk: function () {
          return x.useReleaseNotes;
        },
          sendDownloadTrack: function () {
              return sendDownloadTrack;
          },
          sendYnisonState: function () {
              return sendYnisonState;
          },
      });
      let n = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
          });
      };
      var i = o(58997);
      let a = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BOn.APPLICATION_READY, e);
        },
          sendDownloadTrack = (e) => {
              var t;
              null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.send(i.BOn.DOWNLOAD_TRACK, {
                  downloadURL: e.downloadURL,
                  codec: e.codec,
                  trackId: e.trackId,
                  track: e.track,
              });
          },
        s = (e) => {
          let t = e === i.Q2A.Light ? "#FFFFFF" : "#000000";
          window.desktopEvents.send(i.BOn.APPLICATION_THEME, t);
        },
        l = (e) => {
          var t;
          let { isPlaying: o, canMoveBackward: n, canMoveForward: a } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BOn.PLAYER_STATE, {
              isPlaying: o,
              canMoveBackward: n,
              canMoveForward: a,
                status: e.status,
                track: e.track,
                progress: e.progress,
                availableActions: e.availableActions,
                actionsStore: e.actionsStore,
            });
        },
        sendYnisonState = (e) => {
            var t;
            null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BOn.YNISON_STATE, {
                rawData: e.rawData
            });
        };
      o(83301);
      var r = o(76627),
        c = o(61533),
        u = o(11413),
        d = o(5608),
        _ = o(19702),
        h = o(92804),
        p = o(97909),
        v = o(41258),
        x = o(25389),
        m = o(2685),
        C = o(91694),
        f = o(40426),
        w = o.n(f);
      let g = (e) => {
          let t = {},
            o = (0, i.bop)();
          return (
            o &&
              Object.keys(e)
                .filter((e) => {
                  let t = (0, i.K7K)(e);
                  return w()(t, o) >= 0;
                })
                .forEach((o) => {
                  let n = e[o];
                  n && (t[o] = n);
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
              let o = g(t);
              e.translations = A.create({ data: o });
            },
          }));
      var N = o(50444),
        b = o(65783);
    },
    83301: function (e, t, o) {
      "use strict";
      o.d(t, {
        N$: function () {
          return i;
        },
        eZ: function () {
          return s;
        },
        tX: function () {
          return a;
        },
      });
      var n = o(58997);
      let i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_MINIMIZE);
        },
        a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_MAXIMIZE);
        },
        s = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(n.BOn.WINDOW_CLOSE);
        };
    },
    76627: function (e, t, o) {
      "use strict";
      o.d(t, {
        useApplicationDeeplinks: function () {
          return l;
        },
      });
      var n = o(99678),
        i = o(91207),
        a = o(58997);
      let s = [
          [/^\/home$/, () => "/"],
          [/^\/users\/(.*)\/playlists$/, () => "/collection"],
          [/^\/users\/(.*)\/artists$/, () => "/collection"],
          [/^\/users\/(.*)\/albums$/, () => "/collection"],
          [/^\/users\/(.*)\/tracks$/, () => "/collection"],
          [/^\/users\/(.*)\/podcasts$/, () => "/collection"],
          [/^\/users\/(.*)\/kids$/, () => "/collection"],
          [/^\/users\/(.*)\/history$/, () => "/music-history"],
          [
            /^\/album\/(.*)\/track\/(.*)$/,
            (e) => {
              var t;
              let o = (0, a.zak)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, a.SZ_)("/album/".concat(o))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        l = () => {
          let e = (0, n.useRouter)(),
            t = (0, i.useCallback)(
              (t, o) => {
                for (let [t, n] of s)
                  if (t.test(o)) {
                    e.push(n(o));
                    return;
                  }
                let n = (0, a.SZ_)(o);
                n ? e.push(n) : e.push("/");
              },
              [e],
            );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BOn.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BOn.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    61533: function (e, t, o) {
      "use strict";
      o.d(t, {
        useApplicationUpdate: function () {
          return p;
        },
      });
      var n = o(65301),
        i = o(91207),
        a = o(37184),
        s = o(58997),
        l = o(9695),
        r = o(78372),
        c = o(81437),
        u = o(29778),
        d = o(28089),
        _ = o.n(d);
      let h = (e) => {
          let { version: t, formatMessage: o, closeToast: a } = e,
            d = (0, i.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(s.BOn.INSTALL_UPDATE),
                null == a || a();
            }, [a]),
            h = (0, i.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: _().message,
                  children: [
                    (0, n.jsx)(c.Caption, {
                      className: _().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: o(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, n.jsx)(r.z, {
                      className: _().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: o({ id: "desktop.update" }),
                      }),
                    }),
                  ],
                }),
              [o, d, t],
            );
          return (0, n.jsx)(u.Yj, {
            className: (0, l.W)(_().root, _().important),
            message: h,
          });
        },
          modUpdateToast = (e) => {
              let { version: t, formatMessage: o, closeToast: a } = e,
                  [getProgress, setProgress] = (0, i.useState)(-1),
                  d = (0, i.useCallback)(() => {
                      var e;
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.send(s.BOn.APPLICATION_RESTART),
                      null == a || a();
                  }, [a]),
                  callInstallModUpdate = (0, i.useCallback)(() => {
                      var e;
                      null === (e = window.desktopEvents) ||
                      void 0 === e ||
                      e.send(s.BOn.INSTALL_MOD_UPDATE)
                  }, [a]),

                  formattedMessages = (progressValue) => {
                        let message = o({ id: "offline.download" })
                        if (progressValue < 0) {
                            message = o({ id: "offline.download" });
                        } else if (progressValue >= 0 && progressValue <= 100) {
                            message = 'Скачивание…';
                        } else if (progressValue > 100) {
                            message = 'Установить';
                        }
                        return message;
                  },

                  h = (0, i.useMemo)(
                      () =>
                          (0, n.jsxs)("div", {
                              className: _().message,
                              children: [
                                  (0, n.jsx)(c.Caption, {
                                      className: _().text,
                                      variant: "div",
                                      type: "controls",
                                      size: "m",
                                      children: o(
                                          { id: "desktop.on-mod-update-available" },
                                          { version: t },
                                      ),
                                  }),
                                  (0, n.jsx)(r.z, {
                                      className: _().button,
                                      onClick: getProgress <= 100 ? callInstallModUpdate : d,
                                      variant: "default",
                                      color: "secondary",
                                      size: "xs",
                                      radius: "xxxl",
                                      disabled: getProgress <= 100 && getProgress >= 0,
                                      children: (0, n.jsx)(c.Caption, {
                                          variant: "div",
                                          type: "controls",
                                          size: "m",
                                          children: formattedMessages(getProgress),
                                      }),
                                  }),
                              ],
                          }),
                      [o, d, t, getProgress],
                  ),
                    progressBarUpdate = (0, i.useCallback)(
                        (event, elementType, progress, dedupeTimestamp = 0) => {
                            if (window.dedupeNonces && window.dedupeNonces[elementType] === dedupeTimestamp)
                                return;
                            if (!window.dedupeNonces) window.dedupeNonces = {};
                            if (dedupeTimestamp)
                                window.dedupeNonces[elementType] = dedupeTimestamp;
                            setProgress(progress);
                        },
                        [setProgress],
                    );
              return (
                  (0, i.useEffect)(() => {
                      var e;
                      return (
                          null === (e = window.desktopEvents) ||
                          void 0 === e ||
                          e.on(s.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate),
                              () => {
                                  var e;
                                  null === (e = window.desktopEvents) ||
                                  void 0 === e ||
                                  e.off(s.BOn.PROGRESS_BAR_CHANGE, progressBarUpdate);
                              }
                      );
                  }, [progressBarUpdate]),
                  (0, n.jsx)(u.Yj, {
                  className: (0, l.W)(_().root, _().important),
                  message: h,
                  children: [(0, n.jsx)('div', {
                      className: "qaIScXjx1qyXuaIHXQIo ZcpulvHgF_wsgzB7Hye9",
                      style: {
                          overflow: 'hidden',
                          'margin-left': '-16px',
                          'margin-top': '-6px',
                          position: 'absolute',
                          width: (500 * getProgress / 100) + 'px',
                          height: '50px',
                          'background-color': 'rgb(255 255 255)',
                          opacity: getProgress <= 100 ? 0.1 : 0,
                          'z-index': 1,
                          transition: 'opacity 0.3s linear 0.5s',
                      }
                  })]
              })
              );
          },
        p = () => {
          let { formatMessage: e } = (0, a.Z)(),
            { notify: t } = (0, s.d$W)(),
            o = (0, i.useRef)(""),
            l = (0, i.useCallback)(
              (i, a) => {
                o.current !== a &&
                  ((o.current = a),
                  t((0, n.jsx)(h, { formatMessage: e, version: a }), {
                    containerId: s.W$x.IMPORTANT,
                  }));
              },
              [e, o, t],
            ),
              modUpdateCallback = (0, i.useCallback)(
                  (i, a, newVersion, dedupeTimestamp = 0) => {
                      if (
                          window.modUpdateAvailableEventDedupeNonce === dedupeTimestamp
                      )
                          return;
                      if (dedupeTimestamp)
                          window.modUpdateAvailableEventDedupeNonce = dedupeTimestamp;
                          t((0, n.jsx)(modUpdateToast, { formatMessage: e, version: `${a} -> ${newVersion}` }), {
                              containerId: s.W$x.IMPORTANT,
                          });
                  },
                  [e, o, t],
              );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(s.BOn.UPDATE_AVAILABLE, l),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(s.BOn.UPDATE_AVAILABLE, l);
              }
            );
          }, [l]);
            (0, i.useEffect)(() => {
                var e;
                return (
                    null === (e = window.desktopEvents) ||
                    void 0 === e ||
                    e.on(s.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback),
                        () => {
                            var e;
                            null === (e = window.desktopEvents) ||
                            void 0 === e ||
                            e.off(s.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback);
                        }
                );
            }, [modUpdateCallback]);
        };
    },
    11413: function (e, t, o) {
      "use strict";
      o.d(t, {
        useLaunch: function () {
          return s;
        },
      });
      var n = o(91207),
        i = o(38593),
        a = o(58997);
      let s = () => {
        let e = (0, i.s)(),
          t = (0, n.useCallback)(() => {
            let t = (0, a.bop)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    5608: function (e, t, o) {
      "use strict";
      o.d(t, {
        usePlayerAction: function () {
          return l;
        },
      });
      var n,
        i,
        a = o(91207),
        s = o(58997),
          electronBridge = o(35308),
          feedbackApi = o(26382);
        const sendPlayerStateDefault = (ve) => {
            (0, electronBridge.Pt)({
                status: ve.state.playerState.status.value,
                isPlaying: ve.state.playerState.status.value === "playing",
                canMoveForward:
                ve.state.currentContext.value?.availableActions.moveForward.value,
                canMoveBackward:
                ve.state.currentContext.value?.availableActions.moveBackward.value,
                track:
                ve.state.queueState.currentEntity.value?.entity.entityData.meta,
                progress: ve.state.playerState.progress.value?.position,
                availableActions: {
                    moveBackward:
                    ve.state.currentContext.value?.availableActions.moveBackward
                        .value,
                    moveForward:
                    ve.state.currentContext.value?.availableActions.moveForward.value,
                    repeat:
                    ve.state.currentContext.value?.availableActions.repeat.value,
                    shuffle:
                    ve.state.currentContext.value?.availableActions.shuffle.value,
                    speed: ve.state.currentContext.value?.availableActions.speed.value,
                },
                actionsStore: {
                    repeat: ve.state.queueState.repeat.value,
                    shuffle: ve.state.queueState.shuffle.value,
                    isLiked:
                        ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                            ve.state.queueState.currentEntity.value?.entity.entityData.meta
                                .id,
                        ),
                    isDisliked:
                        ve.state.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                            ve.state.queueState.currentEntity.value?.entity.entityData.meta
                                .id,
                        ),
                },
            });
        };
      ((n = i || (i = {})).PLAY = "PLAY"),
        (n.PAUSE = "PAUSE"),
        (n.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (n.MOVE_FORWARD = "MOVE_FORWARD");
      let l = (e) => {
          let { sonataState: sonataState } = (0, s.oR4)(),
              onLikeClick = (0, feedbackApi.SB)(sonataState.entityMeta),
              onDislikeClick = (0, feedbackApi.KX)(sonataState.entityMeta);
        let t = (0, a.useCallback)(
          (t, o, nonce = 1) => {
              if (window.playerActionEventDedupeNonce === nonce) return;
              if (nonce) window.playerActionEventDedupeNonce = nonce;
            switch (o) {
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
                case "REPEAT_NONE":
                    null == e || e.setRepeatMode("none");
                    break;
                case "REPEAT_CONTEXT":
                    null == e || e.setRepeatMode("context");
                    break;
                case "REPEAT_ONE":
                    null == e || e.setRepeatMode("one");
                    break;
                case "TOGGLE_SHUFFLE":
                    null == e || e.toggleShuffle();
                    break;
                case "TOGGLE_LIKE":
                case "LIKE":
                case "LIKE_NONE":
                    null == e || onLikeClick(sonataState.entityMeta, o);
                    sendPlayerStateDefault(e);
                    break;
                case "DISLIKE":
                case "DISLIKE_NONE":
                case "TOGGLE_DISLIKE":
                    null == e || onDislikeClick(sonataState.entityMeta, o);
                    sendPlayerStateDefault(e);
                    break;
            }
          },
          [e],
        );
        (0, a.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(s.BOn.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(s.BOn.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    19702: function (e, t, o) {
      "use strict";
      o.d(t, {
        useProbabilityBucket: function () {
          return s;
        },
      });
      var n = o(91207),
        i = o(38593),
        a = o(58997);
      let s = () => {
        let e = (0, i.s)(),
          t = (0, n.useCallback)(
            (t, o) => {
              o && e.count(o, "probabilityBucket");
            },
            [e],
          );
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.PROBABILITY_BUCKET, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.PROBABILITY_BUCKET, t);
            }
          );
        }, [t]);
      };
    },
    92804: function (e, t, o) {
      "use strict";
      o.d(t, {
        useRefreshApplicationData: function () {
          return s;
        },
      });
      var n = o(91207),
        i = o(62043),
        a = o(58997);
      let s = () => {
        let {
            library: e,
            collection: t,
            experiments: o,
            main: s,
            user: l,
          } = (0, a.oR4)(),
          r = (0, n.useCallback)(() => {
            o.getData(),
              e.getData(),
              s.landing.isLoaded &&
                s.landing.getSkeleton(
                  { id: i.j.WEB_MAIN, showWizard: l.settings.showWizard },
                  { preloadBlocksCount: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  { id: i.j.WEB_COLLECTION, showWizard: l.settings.showWizard },
                  { preloadBlocksCount: 2 },
                );
          }, [t.landing, o, e, s.landing, l.settings.showWizard]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    97909: function (e, t, o) {
      "use strict";
      o.d(t, {
        useRefreshRepositoryMeta: function () {
          return a;
        },
      });
      var n = o(91207),
        i = o(58997);
      let a = () => {
        let e = (0, i.pL3)(),
          t = (0, n.useCallback)(() => {
            e.tracksController &&
              e.tracksController.refreshTracksMeta().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.REPOSITORY_META_UPDATED);
              });
          }, [e.tracksController]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BOn.REFRESH_REPOSITORY_META, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BOn.REFRESH_REPOSITORY_META, t);
            }
          );
        }, [t]);
      };
    },
    41258: function (e, t, o) {
      "use strict";
      o.d(t, {
        useRefreshTracksAvailability: function () {
          return a;
        },
      });
      var n = o(91207),
        i = o(58997);
      let a = () => {
        let e = (0, i.pL3)(),
          t = (0, n.useCallback)(() => {
            e.tracksController &&
              e.tracksController.refreshTracksAvailability().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.TRACKS_AVAILABILITY_UPDATED);
              });
          }, [e.tracksController]);
        (0, n.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BOn.REFRESH_TRACKS_AVAILABILITY, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BOn.REFRESH_TRACKS_AVAILABILITY, t);
            }
          );
        }, [t]);
      };
    },
    25389: function (e, t, o) {
      "use strict";
      o.d(t, {
        useReleaseNotes: function () {
          return a;
        },
      });
      var n = o(91207),
        i = o(58997);
      let a = () => {
        let [e, t] = (0, n.useState)(!1),
          {
            releaseNotes: { setReleaseNotes: o, isReady: a, modal: s },
          } = (0, i.oR4)(),
          l = (0, n.useCallback)(
            (e, n, i) => {
              o(i), n && t(!0);
            },
            [o],
          );
        (0, n.useEffect)(() => {
          e && a && (s.open(), t(!1));
        }, [a, s, e]),
          (0, n.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.LOAD_RELEASE_NOTES, l),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.LOAD_RELEASE_NOTES, l);
              }
            );
          }, [l]);
      };
    },
    50444: function (e, t, o) {
      "use strict";
      o.d(t, {
        ReleaseNotesModal: function () {
          return m;
        },
      });
      var n = o(65301),
        i = o(9695),
        a = o(96233),
        s = o(91207),
        l = o(37184),
        r = o(59512),
        c = o(44729),
        u = o(14386),
        d = o(46642),
        _ = o(81437),
        h = o(58997),
        p = o(19069),
        v = o.n(p);
      let x = {
          ul: (e) =>
            (0, n.jsx)("ul", { className: v().description, children: e }),
          li: (e) => (0, n.jsx)("li", { className: v().item, children: e }),
          code: (e) => (0, n.jsx)("code", { className: v().code, children: e }),
          date: (e) => (0, n.jsx)("span", { className: v().date, children: e }),
          p: (e) => (0, n.jsx)("p", { className: v().paragraph, children: e }),
          br: (0, n.jsx)("br", {}),
        },
        m = (0, a.Pi)(() => {
          var e, t;
          let { releaseNotes: o } = (0, h.oR4)(),
            { formatMessage: a } = (0, l.Z)(),
            { language: p, defaultLanguage: m } = (0, h.ZSk)(),
            C = (0, h.J4i)(),
            f = (0, s.useMemo)(() => {
              var e, t;
              return (0, h.LaW)(
                null !==
                  (t =
                    null === (e = o.translations) || void 0 === e
                      ? void 0
                      : e.data) && void 0 !== t
                  ? t
                  : {},
              );
            }, [
              null === (e = o.translations) || void 0 === e ? void 0 : e.data,
            ]);
          return (0, n.jsx)(u.u, {
            title: a({ id: "desktop.release-notes-modal-title" }),
            open: o.modal.isOpened,
            onOpenChange: o.modal.onOpenChange,
            onClose: o.modal.close,
            size: "fitContent",
            placement: "center",
            overlayColor: "full",
            labelClose: a({ id: "interface-actions.close" }),
            className: v().root,
            headerClassName: v().modalHeader,
            contentClassName: v().modalContent,
            children: (0, n.jsx)(r.Z, {
              onError: C,
              defaultLocale: m,
              locale: p,
              messages:
                null === (t = o.translations) || void 0 === t ? void 0 : t.data,
              children: (0, n.jsx)(d.t, {
                className: (0, i.W)(v().scrollableContent, v().important),
                containerClassName: (0, i.W)(v().notes, v().important),
                children: f.map((e) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className: v().note,
                      children: [
                        (0, n.jsx)(_.Heading, {
                          variant: "h4",
                          className: (0, i.W)(v().version, v().important),
                          children: (0, h.K7K)(e),
                        }),
                        (0, n.jsx)(c.Z, { id: e, values: x }),
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
    65783: function (e, t, o) {
      "use strict";
      o.d(t, {
        TitleBar: function () {
          return h;
        },
      });
      var n = o(65301),
        i = o(9695),
        a = o(96233),
        s = o(91207),
        l = o(37184),
        r = o(58997),
        c = o(83301),
        u = o(16860),
        d = o.n(u);
      let _ = (e) => {
          let {
            children: t,
            className: o,
            onClick: a,
            ariaLabel: s,
            withSecondaryColor: l,
          } = e;
          return (0, n.jsx)("button", {
            type: "button",
            className: (0, i.W)(
              d().button,
              { [d().button_withSecondaryColor]: l },
              o,
            ),
            onClick: a,
            "aria-label": s,
            children: t,
          });
        },
        h = (0, a.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            { settings: o } = (0, r.oR4)(),
            a = o.isWindowsApplication || o.isLinuxApplication,
            { formatMessage: u } = (0, l.Z)(),
            h = (0, s.useCallback)(() => {
              (0, c.N$)();
            }, []),
            p = (0, s.useCallback)(() => {
              (0, c.tX)();
            }, []),
            v = (0, s.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, n.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              a &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(_, {
                    onClick: h,
                    ariaLabel: u({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(_, {
                    onClick: p,
                    ariaLabel: u({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, n.jsx)(_, {
                    className: d().closeButton,
                    onClick: v,
                    ariaLabel: u({ id: "windows-menu.close" }),
                    children: (0, n.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(d().icon, {
                        [d().icon_withSecondaryColor]: t,
                      }),
                      children: (0, n.jsx)("path", {
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
    32544: function (e, t, o) {
      "use strict";
      o.d(t, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = o(40334);
    },
    40334: function (e, t, o) {
      "use strict";
      o.d(t, {
        NotFound: function () {
          return p;
        },
      });
      var n = o(65301),
        i = o(9695),
        a = o(96233),
        s = o(44729),
        l = o(78372),
        r = o(82036),
        c = o(81437),
        u = o(58997),
        d = o(29778),
        _ = o(36625),
        h = o.n(_);
      let p = (0, a.Pi)((e) => {
        let { className: t } = e,
          { contentRef: o } = (0, u.$Y6)(),
          a = (0, u.s0h)("/");
        return (
          (0, u.ZP4)(!0),
          (0, n.jsxs)("div", {
            className: (0, i.W)(h().root, { [h().root_desktop]: !o }, t),
            children: [
              (0, n.jsx)(d.nP, {
                withBackwardFallback: "/",
                className: h().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: h().content,
                children: [
                  (0, n.jsx)(r.Icon, {
                    className: h().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, n.jsx)(c.Heading, {
                    className: (0, i.W)(h().title, h().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(c.Caption, {
                    className: (0, i.W)(h().text, h().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(s.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(l.z, {
                    onClick: a,
                    className: h().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(s.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    52273: function (e) {
      e.exports = {
        paywallContainer: "WithMobilePaywall_paywallContainer__Mk1l_",
        shimmer: "WithMobilePaywall_shimmer__fg4QA",
      };
    },
    28089: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    19069: function (e) {
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
    16860: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    44878: function (e) {
      e.exports = {
        root: "BlockPage_root__crGK_",
        container: "BlockPage_container__my_l0",
        content: "BlockPage_content__4nK4D",
        title: "BlockPage_title__sAejV",
        button: "BlockPage_button__KoFZX",
        image: "BlockPage_image__C02Db",
      };
    },
    17385: function (e) {
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
    9913: function (e) {
      e.exports = {
        root: "Login_root__VtFg_",
        title: "Login_title__dqQz1",
        important: "Login_important__Z8S9I",
        text: "Login_text__1uju5",
        button: "Login_button__ZYvZY",
      };
    },
    36625: function (e) {
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
    98636: function (e, t) {
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
    8070: function (e, t) {
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
