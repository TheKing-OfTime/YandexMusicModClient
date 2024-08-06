(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6167],
  {
    90046: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let o = n(17830);
      n(9753), n(98639);
      let l = o._(n(81492));
      function i(e, t) {
        var n;
        let o = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: o } = e;
            return null;
          },
        };
        "function" == typeof e && (o.loader = e);
        let i = { ...o, ...t };
        return (0, l.default)({
          ...i,
          modules: null == (n = i.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    31930: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let o = n(30829);
      function l(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new o.BailoutToCSRError(t);
        return n;
      }
    },
    81492: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let o = n(9753),
        l = n(98639),
        i = n(31930),
        a = n(58089);
      function s(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let r = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...r, ...e },
            n = (0, l.lazy)(() => t.loader().then(s)),
            u = t.loading;
          function c(e) {
            let s = u
                ? (0, o.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              r = t.ssr
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, o.jsx)(a.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, o.jsx)(n, { ...e }),
                    ],
                  })
                : (0, o.jsx)(i.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, o.jsx)(n, { ...e }),
                  });
            return (0, o.jsx)(l.Suspense, { fallback: s, children: r });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    58089: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let o = n(9753),
        l = n(45850);
      function i(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, l.getExpectedRequestStore)("next/dynamic css"),
          i = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            i.push(...t);
          }
        }
        return 0 === i.length
          ? null
          : (0, o.jsx)(o.Fragment, {
              children: i.map((e) =>
                (0, o.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e,
                ),
              ),
            });
      }
    },
    44755: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithAuth: function () {
          return m;
        },
      });
      var o = n(9753),
        l = n(9544),
        i = n(60836),
        a = n(74717),
        s = n(98639),
        r = n(31014),
        u = n(39513),
        c = n(2570),
        d = n(87628),
        _ = n(21844),
        p = n.n(_);
      let f = (0, l.Pi)(() => {
          let e = (0, a.useRouter)(),
            t = (0, d.uK)().get(d.xi),
            n = (0, s.useCallback)(() => {
              t.authorizationUrl && e.push(t.authorizationUrl);
            }, [t.authorizationUrl, e]);
          return (0, o.jsxs)("div", {
            className: p().root,
            children: [
              (0, o.jsx)(c.Heading, {
                className: (0, i.W)(p().title, p().important),
                variant: "h3",
                size: "xs",
                children: (0, o.jsx)(r.Z, { id: "authorization.enter-title" }),
              }),
              (0, o.jsx)(c.Caption, {
                className: (0, i.W)(p().text, p().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: (0, o.jsx)(r.Z, { id: "authorization.enter-text" }),
              }),
              (0, o.jsx)(u.z, {
                onClick: n,
                className: p().button,
                role: "link",
                color: "primary",
                size: "l",
                radius: "xxxl",
                children: (0, o.jsx)(c.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  children: (0, o.jsx)(r.Z, {
                    id: "authorization.enter-button",
                  }),
                }),
              }),
            ],
          });
        }),
        m = (0, l.Pi)((e) => {
          let { children: t } = e,
            { user: n } = (0, d.oR)();
          return n.isAuthorized ? t : (0, o.jsx)(f, {});
        });
    },
    49041: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBetaUser: function () {
          return g;
        },
      });
      var o = n(9753),
        l = n(9544),
        i = n(60836),
        a = n(74717),
        s = n(98639),
        r = n(31014),
        u = n(23881),
        c = n(39513),
        d = n(29901),
        _ = n(16636),
        p = n(2570),
        f = n(78918),
        m = n(2959),
        h = n(87628),
        x = n(45018),
        v = n.n(x);
      let C = (0, l.Pi)((e) => {
          let {
              withoutExperiment: t = !1,
              showLoginButton: l = !1,
              showUserProfile: x = !1,
              withOffer: C = !1,
            } = e,
            g = (0, a.useRouter)(),
            w = (0, h.uK)(),
            { settings: b } = (0, h.oR)(),
            { language: j } = (0, h.ZS)(),
            A = w.get(h.xi),
            N = w.get(h.U5),
            k = (0, h.yy)(N.oldWebHost),
            E = (0, s.useMemo)(
              () =>
                b.layout === h.t8.Mobile ? n(75266).Z.src : n(88103).Z.src,
              [b.layout],
            ),
            P = (0, s.useCallback)(() => {
              A.authorizationUrl && g.push(A.authorizationUrl);
            }, [A.authorizationUrl, g]),
            B = (0, s.useCallback)(() => {
              let e = "https://".concat(k, "/pay");
              window.open(e, "_blank", "noreferrer noopener");
            }, [k]);
          (0, h.NO)(!0);
          let y = (0, s.useMemo)(
              () =>
                C
                  ? (0, o.jsx)(p.Heading, {
                      variant: "h1",
                      size: "xl",
                      weight: "bold",
                      className: (0, i.W)(v().title, v().text),
                      children: (0, o.jsx)(r.Z, {
                        id: "welcome-page.offer-header",
                      }),
                    })
                  : t
                    ? (0, o.jsx)(p.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, i.W)(v().title, v().text),
                        children: (0, o.jsx)(r.Z, {
                          id: "welcome-page.beta-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      })
                    : (0, o.jsx)(p.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, i.W)(v().title, v().text),
                        children: (0, o.jsx)(r.Z, {
                          id: "welcome-page.not-auth-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      }),
              [C, t],
            ),
            W = (0, s.useMemo)(
              () =>
                t
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(p.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          className: v().text,
                          children: (0, o.jsx)(r.Z, {
                            id: "welcome-page.beta-text-short",
                          }),
                        }),
                        (0, o.jsx)(_.y, {
                          children: (0, o.jsx)(p.Heading, {
                            variant: "h2",
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.beta-text-short",
                            }),
                          }),
                        }),
                      ],
                    })
                  : C
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(p.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: v().offerText,
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.offer-text",
                            }),
                          }),
                          (0, o.jsx)(_.y, {
                            children: (0, o.jsx)(p.Heading, {
                              variant: "h2",
                              children: (0, o.jsx)(r.Z, {
                                id: "welcome-page.offer-text",
                              }),
                            }),
                          }),
                        ],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(p.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: v().text,
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.not-auth-text",
                              values: { br: (0, o.jsx)("br", {}) },
                            }),
                          }),
                          (0, o.jsx)(_.y, {
                            children: (0, o.jsx)(p.Heading, {
                              variant: "h2",
                              children: (0, o.jsx)(r.Z, {
                                id: "welcome-page.not-auth-text",
                                values: { br: (0, o.jsx)("br", {}) },
                              }),
                            }),
                          }),
                        ],
                      }),
              [C, t],
            ),
            O = (0, s.useMemo)(
              () =>
                l
                  ? (0, o.jsx)(c.z, {
                      onClick: P,
                      className: v().loginButton,
                      role: "link",
                      color: "primary",
                      size: "m",
                      radius: "xxxl",
                      children: (0, o.jsx)(r.Z, {
                        id: "authorization.enter-button",
                      }),
                    })
                  : C
                    ? (0, o.jsx)(c.z, {
                        onClick: B,
                        className: (0, i.W)(
                          v().offerButton,
                          v().offerButton_important,
                        ),
                        role: "link",
                        color: "plus",
                        size: "l",
                        radius: "m",
                        withRipple: !1,
                        children: (0, o.jsx)(r.Z, {
                          id: "payment.offer-button",
                        }),
                      })
                    : void 0,
              [P, B, l, C],
            );
          return (
            (0, h.ZP)(!0),
            (0, o.jsxs)("div", {
              className: (0, i.W)(v().root),
              ...(0, u.BA)(u.Br.welcome.WELCOME_PAGE),
              children: [
                (0, o.jsx)(f.TF, { withSecondaryColor: !0 }),
                (0, o.jsx)("div", {
                  className: v().logoContainer,
                  children: (0, o.jsx)(d.TR, {
                    alignIcon: "center",
                    lang: "ru" !== j ? d.o0.EN : d.o0.RU,
                    className: v().logo,
                  }),
                }),
                y,
                W,
                O,
                (0, o.jsx)("img", { className: v().image, src: E }),
                x &&
                  (0, o.jsx)(m.Iw, {
                    className: v().user,
                    withMeta: b.layout !== h.t8.Mobile,
                    variant: b.layout === h.t8.Mobile ? "mobile" : "desktop",
                    usernameClassName: (0, i.W)(v().username, v().important),
                  }),
              ],
            })
          );
        }),
        g = (0, l.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: l } = (0, h.oR)(),
            { isPassToProduct: i, isFreemium: a } = (0, h.NM)();
          return n.isAuthorized
            ? l.checkExperiment(h.pe.WebNext, "on") && !n.isChild
              ? n.hasPlus || i || a
                ? t
                : (0, o.jsx)(C, { withOffer: !0, showUserProfile: !0 })
              : (0, o.jsx)(C, { withoutExperiment: !0, showUserProfile: !0 })
            : (0, o.jsx)(C, { showLoginButton: !0 });
        });
    },
    62688: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBlockFullscreen: function () {
          return f;
        },
      });
      var o = n(9753),
        l = n(9544),
        i = n(74717),
        a = n(98639),
        s = n(39513),
        r = n(2570),
        u = n(78918),
        c = n(87628),
        d = n(9915),
        _ = n.n(d);
      let p = (0, l.Pi)((e) => {
          var t;
          let { isAuthorizedUser: n = !1 } = e,
            l = (0, i.useRouter)(),
            { experiments: d, settings: p } = (0, c.oR)(),
            f = (0, c.uK)().get(c.xi),
            m = p.layout === c.t8.Mobile,
            h = d.getExperiment(c.pe.WebNextBlockFullscreen),
            x =
              null == h
                ? void 0
                : null === (t = h.value) || void 0 === t
                  ? void 0
                  : t.metadata,
            v = (0, a.useCallback)(() => {
              f.authorizationUrl && l.push(f.authorizationUrl);
            }, [f.authorizationUrl, l]),
            C = (0, a.useCallback)(() => {
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
            g = (0, a.useMemo)(() => {
              var e, t;
              return n
                ? (0, o.jsx)(s.z, {
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
                : (0, o.jsx)(s.z, {
                    onClick: v,
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
            }, [n, v, C, x]);
          return (0, o.jsxs)("div", {
            className: _().root,
            children: [
              (0, o.jsx)(u.TF, { withSecondaryColor: !0 }),
              (0, o.jsxs)("div", {
                className: _().container,
                children: [
                  (0, o.jsxs)("div", {
                    className: _().content,
                    children: [
                      (0, o.jsx)(r.Heading, {
                        variant: "h1",
                        size: m ? "xl" : "xxl",
                        weight: "bold",
                        className: _().title,
                        children: null == x ? void 0 : x.mainText,
                      }),
                      g,
                    ],
                  }),
                  (0, o.jsx)("div", { className: _().image }),
                ],
              }),
            ],
          });
        }),
        f = (0, l.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: l } = (0, c.oR)();
          return l.checkExperiment(c.pe.WebNextBlockFullscreen, "on")
            ? n.isAuthorized
              ? (0, o.jsx)(p, { isAuthorizedUser: !0 })
              : (0, o.jsx)(p, {})
            : t;
        });
    },
    22899: function (e, t, n) {
      "use strict";
      n.d(t, {
        m6: function () {
          return o.WithAuth;
        },
      });
      var o = n(44755);
      n(49041), n(62688), n(9753);
      var l = n(90046);
      n.n(l)().default(
        async () =>
          Promise.all([n.e(1507), n.e(6977), n.e(9576)]).then(n.bind(n, 49576)),
        { ssr: !1 },
      );
    },
    78918: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return a.ReleaseNotesModal;
        },
        TF: function () {
          return i.TitleBar;
        },
        l7: function () {
          return d;
        },
        Yl: function () {
          return l;
        },
        F5: function () {
          return h;
        },
        Pt: function () {
          return _;
        },
        KZ: function () {
          return u;
        },
        vs: function () {
          return f.useApplicationDeeplinks;
        },
        Er: function () {
          return s.useApplicationUpdate;
        },
        Zw: function () {
          return m.useLaunch;
        },
        A4: function () {
          return p.usePlayerAction;
        },
        bO: function () {
          return c.useRefreshApplicationData;
        },
        Tk: function () {
          return r.useReleaseNotes;
        },
      });
      var o = n(87628);
      let l = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(o.BO.APPLICATION_READY);
      };
      n(44928);
      var i = n(91021),
        a = n(22485),
        s = n(46813),
        r = n(15291);
      let u = () => {
        var e;
        null === (e = window.desktopEvents) ||
          void 0 === e ||
          e.send(o.BO.RELEASE_NOTES_READY);
      };
      var c = n(64422);
      let d = () => {
          document.addEventListener("auxclick", (e) => e.preventDefault()),
            document.addEventListener("click", (e) => {
              (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
            });
        },
        _ = (e) => {
          var t;
          let { isPlaying: n, canMoveBackward: l, canMoveForward: i } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(o.BO.PLAYER_STATE, {
              isPlaying: n,
              canMoveBackward: l,
              canMoveForward: i,
              status: e.status,
              track: e.track,
              progress: e.progress,
              availableActions: e.availableActions,
              actionsStore: e.actionsStore,
            });
        };
      var p = n(43215),
        f = n(27327),
        m = n(17256);
      let h = (e) => {
        let t = e === o.Q2.Light ? "#FFFFFF" : "#000000";
        window.desktopEvents.send(o.BO.APPLICATION_THEME, t);
      };
    },
    44928: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return l;
        },
        eZ: function () {
          return a;
        },
        tX: function () {
          return i;
        },
      });
      var o = n(87628);
      let l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_MINIMIZE);
        },
        i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_MAXIMIZE);
        },
        a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BO.WINDOW_CLOSE);
        };
    },
    27327: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationDeeplinks: function () {
          return s;
        },
      });
      var o = n(74717),
        l = n(98639),
        i = n(87628);
      let a = [
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
              let n = (0, i.z)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, i.SZ)("/album/".concat(n))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        s = () => {
          let e = (0, o.useRouter)(),
            t = (0, l.useCallback)(
              (t, n) => {
                for (let [t, o] of a)
                  if (t.test(n)) {
                    e.push(o(n));
                    return;
                  }
                let o = (0, i.SZ)(n);
                o ? e.push(o) : e.push("/");
              },
              [e],
            );
          (0, l.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BO.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BO.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    46813: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationUpdate: function () {
          return f;
        },
      });
      var o = n(9753),
        l = n(98639),
        i = n(80542),
        a = n(87628),
        s = n(60836),
        r = n(39513),
        u = n(2570),
        c = n(67868),
        d = n(8544),
        _ = n.n(d);
      let p = (e) => {
          let { version: t, formatMessage: n, closeToast: i } = e,
            d = (0, l.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(a.BO.INSTALL_UPDATE),
                null == i || i();
            }, [i]),
            p = (0, l.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: _().message,
                  children: [
                    (0, o.jsx)(u.Caption, {
                      className: _().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, o.jsx)(r.z, {
                      className: _().button,
                      onClick: d,
                      variant: "default",
                      color: "secondary",
                      size: "xs",
                      radius: "xxxl",
                      children: (0, o.jsx)(u.Caption, {
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
          return (0, o.jsx)(c.Yj, {
            className: (0, s.W)(_().root, _().important),
            message: p,
          });
        },
        f = () => {
          let { formatMessage: e } = (0, i.Z)(),
            { notify: t } = (0, a.d$)(),
            n = (0, l.useRef)(""),
            s = (0, l.useCallback)(
              (l, i) => {
                n.current !== i &&
                  ((n.current = i),
                  t((0, o.jsx)(p, { formatMessage: e, version: i }), {
                    containerId: a.W$.APPLICATION_UPDATE,
                  }));
              },
              [e, n, t],
            );
          (0, l.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BO.UPDATE_AVAILABLE, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BO.UPDATE_AVAILABLE, s);
              }
            );
          }, [s]);
        };
    },
    17256: function (e, t, n) {
      "use strict";
      n.d(t, {
        useLaunch: function () {
          return i;
        },
      });
      var o = n(98639),
        l = n(87628);
      let i = () => {
        let e = (0, l.sv)(),
          t = (0, o.useCallback)(() => {
            let t = (0, l.bo)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BO.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BO.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    43215: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePlayerAction: function () {
          return s;
        },
      });
      var o,
        l,
        i = n(98639),
        a = n(87628),
        eventPS = n(78918);
      ((o = l || (l = {})).PLAY = "PLAY"),
        (o.PAUSE = "PAUSE"),
        (o.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (o.MOVE_FORWARD = "MOVE_FORWARD");
      let s = (e) => {
        let t = (0, i.useCallback)(
          (t, n) => {
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
              case "TOGGLE_REPEAT":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.toggleRepeat();
                break;
              case "REPEAT_NONE":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "none",
                  );
                break;
              case "REPEAT_CONTEXT":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "context",
                  );
                break;
              case "REPEAT_ONE":
                null == e ||
                  e.mainPlayback.queueController.playerQueue.setRepeatMode(
                    "one",
                  );
                break;
              case "TOGGLE_SHUFFLE":
                null == e || e.toggleShuffle();
                break;
              case "TOGGLE_LIKE": {
                null == e ||
                  e.mainPlayback.contextController.entityFactory.likeStore.toggleTrackLike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.state.queueState.currentEntity.value?.entity.entityData
                      .meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
              case "TOGGLE_DISLIKE": {
                null == e ||
                  e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.toggleTrackDislike(
                    {
                      entityId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      albumId:
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.albums[0].id,
                      userId: window.localStorage._ym_uid.replaceAll('"', ""),
                    },
                  );
                (0, eventPS.Pt)({
                  status: e.state.playerState.status.value,
                  isPlaying: e.state.playerState.status.value === "playing",
                  track:
                    e.mainPlayback.playbackState.queueState.currentEntity.value
                      ?.entity.entityData.meta,
                  progress: 0,
                  availableActions: {
                    moveBackward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveBackward.value,
                    moveForward:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.moveForward.value,
                    repeat:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.shuffle.value,
                    speed:
                      e.mainPlayback.playbackState.currentContext.value
                        ?.availableActions.speed.value,
                  },
                  actionsStore: {
                    repeat:
                      e.mainPlayback.playbackState.queueState.repeat.value,
                    shuffle:
                      e.mainPlayback.playbackState.queueState.shuffle.value,
                    isLiked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackLiked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                    isDisliked:
                      e.mainPlayback.playbackState.queueState.currentEntity.value?.entity.likeStore.isTrackDisliked(
                        e.mainPlayback.playbackState.queueState.currentEntity
                          .value?.entity.entityData.meta.id,
                      ),
                  },
                });
                break;
              }
            }
          },
          [e],
        );
        (0, i.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BO.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BO.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    64422: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshApplicationData: function () {
          return a;
        },
      });
      var o = n(98639),
        l = n(51179),
        i = n(87628);
      let a = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: a,
            user: s,
          } = (0, i.oR)(),
          r = (0, o.useCallback)(() => {
            n.getData(),
              e.getData(),
              a.landing.isLoaded &&
                a.landing.getSkeleton(
                  { id: l.jB.WEB_MAIN, showWizard: s.settings.showWizard },
                  { preloadBlocks: 2 },
                ),
              t.landing.isLoaded &&
                t.landing.getSkeleton(
                  {
                    id: l.jB.WEB_COLLECTION,
                    showWizard: s.settings.showWizard,
                  },
                  { preloadBlocks: 3 },
                );
          }, [t.landing, n, e, a.landing, s.settings.showWizard]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(i.BO.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(i.BO.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    15291: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReleaseNotes: function () {
          return i;
        },
      });
      var o = n(98639),
        l = n(87628);
      let i = () => {
        let {
          modals: { releaseNotesModal: e },
        } = (0, l.oR)();
        (0, o.useEffect)(() => {
          var t;
          return (
            null === (t = window.desktopEvents) ||
              void 0 === t ||
              t.on(l.BO.SHOW_RELEASE_NOTES, e.open),
            () => {
              var t;
              null === (t = window.desktopEvents) ||
                void 0 === t ||
                t.off(l.BO.SHOW_RELEASE_NOTES, e.open);
            }
          );
        }, [e.open]);
      };
    },
    22485: function (e, t, n) {
      "use strict";
      n.d(t, {
        ReleaseNotesModal: function () {
          return h;
        },
      });
      var o = n(9753),
        l = n(60836),
        i = n(9544),
        a = n(98639),
        s = n(80542),
        r = n(31014),
        u = n(89352),
        c = n(41055),
        d = n(2570),
        _ = n(87628),
        p = n(6582),
        f = n.n(p);
      let m = {
          ul: (e) =>
            (0, o.jsx)("ul", { className: f().description, children: e }),
          li: (e) => (0, o.jsx)("li", { className: f().item, children: e }),
          code: (e) => (0, o.jsx)("code", { className: f().code, children: e }),
          date: (e) => (0, o.jsx)("span", { className: f().date, children: e }),
          p: (e) => (0, o.jsx)("p", { className: f().paragraph, children: e }),
          br: (0, o.jsx)("br", {}),
        },
        h = (0, i.Pi)((e) => {
          let { dictionary: t } = e,
            {
              modals: { releaseNotesModal: n },
            } = (0, _.oR)(),
            { formatMessage: i } = (0, s.Z)(),
            p = (0, a.useMemo)(() => (0, _.L)(t), [t]);
          return (0, o.jsx)(u.u, {
            title: i({ id: "desktop.release-notes-modal-title" }),
            open: n.isOpened,
            onOpenChange: n.onOpenChange,
            onClose: n.close,
            size: "fitContent",
            placement: "center",
            labelClose: i({ id: "interface-actions.close" }),
            className: f().root,
            headerClassName: f().modalHeader,
            contentClassName: f().modalContent,
            children: (0, o.jsx)(c.t, {
              className: (0, l.W)(f().scrollableContent, f().important),
              containerClassName: (0, l.W)(f().notes, f().important),
              children: p.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: f().note,
                    children: [
                      (0, o.jsx)(d.Heading, {
                        variant: "h4",
                        className: (0, l.W)(f().version, f().important),
                        children: (0, _.K7)(e),
                      }),
                      (0, o.jsx)(r.Z, { id: e, values: m }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          });
        });
    },
    91021: function (e, t, n) {
      "use strict";
      n.d(t, {
        TitleBar: function () {
          return p;
        },
      });
      var o = n(9753),
        l = n(60836),
        i = n(9544),
        a = n(98639),
        s = n(80542),
        r = n(87628),
        u = n(44928),
        c = n(84814),
        d = n.n(c);
      let _ = (e) => {
          let {
            children: t,
            className: n,
            onClick: i,
            ariaLabel: a,
            withSecondaryColor: s,
          } = e;
          return (0, o.jsx)("button", {
            type: "button",
            className: (0, l.W)(
              d().button,
              { [d().button_withSecondaryColor]: s },
              n,
            ),
            onClick: i,
            "aria-label": a,
            children: t,
          });
        },
        p = (0, i.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            n = (0, r.Xf)() === r.t4.WINDOWS,
            { formatMessage: i } = (0, s.Z)(),
            c = (0, a.useCallback)(() => {
              (0, u.N$)();
            }, []),
            p = (0, a.useCallback)(() => {
              (0, u.tX)();
            }, []),
            f = (0, a.useCallback)(() => {
              (0, u.eZ)();
            }, []);
          return (0, o.jsx)("div", {
            className: d().root,
            onDoubleClick: p,
            children:
              n &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(_, {
                    onClick: c,
                    ariaLabel: i({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, l.W)(d().icon, {
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
                    ariaLabel: i({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, l.W)(d().icon, {
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
                    onClick: f,
                    ariaLabel: i({ id: "windows-menu.close" }),
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, l.W)(d().icon, {
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
    45931: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return o.SlidesPage;
        },
      });
      var o = n(78165);
      n(9753), n(23948);
    },
    23948: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return o.NotFound;
        },
      });
      var o = n(8964);
    },
    8544: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    6582: function (e) {
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
    84814: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    9915: function (e) {
      e.exports = {
        root: "BlockPage_root__crGK_",
        container: "BlockPage_container__my_l0",
        content: "BlockPage_content__4nK4D",
        title: "BlockPage_title__sAejV",
        button: "BlockPage_button__KoFZX",
        image: "BlockPage_image__C02Db",
      };
    },
    45018: function (e) {
      e.exports = {
        root: "WelcomePage_root__JK3Pb",
        image: "WelcomePage_image__7_fpW",
        loginButton: "WelcomePage_loginButton__AJHcG",
        secondBackground: "WelcomePage_secondBackground__55zFI",
        offerButton: "WelcomePage_offerButton__MRs_g",
        offerButton_important: "WelcomePage_offerButton_important__0wf60",
        title: "WelcomePage_title__wII2C",
        text: "WelcomePage_text__A4aXp",
        offerText: "WelcomePage_offerText__ZvXKN",
        logoContainer: "WelcomePage_logoContainer__72W3y",
        logo: "WelcomePage_logo__oMU8g",
        user: "WelcomePage_user__WNc4W",
        username: "WelcomePage_username__yXGsn",
        important: "WelcomePage_important__MJxEk",
      };
    },
    21844: function (e) {
      e.exports = {
        root: "Login_root__VtFg_",
        title: "Login_title__dqQz1",
        important: "Login_important__Z8S9I",
        text: "Login_text__1uju5",
        button: "Login_button__ZYvZY",
      };
    },
    88103: function (e, t) {
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
    75266: function (e, t) {
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
