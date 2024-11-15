(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9778],
  {
    45677: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithAuth: function () {
          return p;
        },
      });
      var o = n(95660),
        i = n(44744),
        l = n(97667),
        a = n(23974),
        s = n(71859),
        r = n(71037),
        c = n(93062),
        d = n(42255),
        u = n(20794),
        m = n(64241),
        _ = n.n(m);
      let h = (0, i.Pi)(() => {
          let e = (0, l.useRouter)(),
            t = (0, u.uK4)().get(u.xit),
            n = (0, s.useCallback)(() => {
              t.authorizationUrl && e.push(t.authorizationUrl);
            }, [t.authorizationUrl, e]);
          return (0, o.jsxs)("div", {
            className: _().root,
            children: [
              (0, o.jsx)(d.Heading, {
                className: (0, a.W)(_().title, _().important),
                variant: "h3",
                size: "xs",
                children: (0, o.jsx)(r.Z, { id: "authorization.enter-title" }),
              }),
              (0, o.jsx)(d.Caption, {
                className: (0, a.W)(_().text, _().important),
                variant: "span",
                type: "text",
                size: "l",
                weight: "normal",
                children: (0, o.jsx)(r.Z, { id: "authorization.enter-text" }),
              }),
              (0, o.jsx)(c.z, {
                onClick: n,
                className: _().button,
                role: "link",
                color: "primary",
                size: "l",
                radius: "xxxl",
                children: (0, o.jsx)(d.Caption, {
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
        p = (0, i.Pi)((e) => {
          let { children: t, withRedirectToMainPage: n } = e,
            { user: i } = (0, u.oR4)();
          return i.isAuthorized
            ? t
            : (n && (0, l.redirect)("/"), (0, o.jsx)(h, {}));
        });
    },
    31918: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBetaUser: function () {
          return C;
        },
      });
      var o = n(95660),
        i = n(44744),
        l = n(23974),
        a = n(97667),
        s = n(71859),
        r = n(71037),
        c = n(9883),
        d = n(93062),
        u = n(88333),
        m = n(22899),
        _ = n(42255),
        h = n(65591),
        p = n(88700),
        v = n(20794),
        x = n(98906),
        f = n.n(x);
      let b = (0, i.Pi)((e) => {
          let {
              withoutExperiment: t = !1,
              showLoginButton: i = !1,
              showUserProfile: x = !1,
              withOffer: b = !1,
            } = e,
            C = (0, a.useRouter)(),
            w = (0, v.uK4)(),
            { settings: g } = (0, v.oR4)(),
            { language: k } = (0, v.ZSk)(),
            A = w.get(v.xit),
            N = w.get(v.U5t),
            j = (0, v.yyu)(N.oldWebHost),
            E = (0, s.useMemo)(
              () =>
                g.layout === v.t8m.Mobile ? n(37204).Z.src : n(31038).Z.src,
              [g.layout],
            ),
            y = (0, s.useCallback)(() => {
              A.authorizationUrl && C.push(A.authorizationUrl);
            }, [A.authorizationUrl, C]),
            B = (0, s.useCallback)(() => {
              let e = "https://".concat(j, "/pay");
              window.open(e, "_blank", "noreferrer noopener");
            }, [j]);
          (0, v.NOh)(!0);
          let P = (0, s.useMemo)(
              () =>
                b
                  ? (0, o.jsx)(_.Heading, {
                      variant: "h1",
                      size: "xl",
                      weight: "bold",
                      className: (0, l.W)(f().title, f().text),
                      children: (0, o.jsx)(r.Z, {
                        id: "welcome-page.offer-header",
                      }),
                    })
                  : t
                    ? (0, o.jsx)(_.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, l.W)(f().title, f().text),
                        children: (0, o.jsx)(r.Z, {
                          id: "welcome-page.beta-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      })
                    : (0, o.jsx)(_.Heading, {
                        variant: "h1",
                        size: "xxl",
                        weight: "bold",
                        className: (0, l.W)(f().title, f().text),
                        children: (0, o.jsx)(r.Z, {
                          id: "welcome-page.not-auth-header",
                          values: { br: (0, o.jsx)("br", {}) },
                        }),
                      }),
              [b, t],
            ),
            R = (0, s.useMemo)(
              () =>
                t
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(_.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          className: f().text,
                          children: (0, o.jsx)(r.Z, {
                            id: "welcome-page.beta-text-short",
                          }),
                        }),
                        (0, o.jsx)(m.y, {
                          children: (0, o.jsx)(_.Heading, {
                            variant: "h2",
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.beta-text-short",
                            }),
                          }),
                        }),
                      ],
                    })
                  : b
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(_.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: f().offerText,
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.offer-text",
                            }),
                          }),
                          (0, o.jsx)(m.y, {
                            children: (0, o.jsx)(_.Heading, {
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
                          (0, o.jsx)(_.Caption, {
                            variant: "span",
                            type: "text",
                            size: "l",
                            className: f().text,
                            children: (0, o.jsx)(r.Z, {
                              id: "welcome-page.not-auth-text",
                              values: { br: (0, o.jsx)("br", {}) },
                            }),
                          }),
                          (0, o.jsx)(m.y, {
                            children: (0, o.jsx)(_.Heading, {
                              variant: "h2",
                              children: (0, o.jsx)(r.Z, {
                                id: "welcome-page.not-auth-text",
                                values: { br: (0, o.jsx)("br", {}) },
                              }),
                            }),
                          }),
                        ],
                      }),
              [b, t],
            ),
            M = (0, s.useMemo)(
              () =>
                i
                  ? (0, o.jsx)(d.z, {
                      onClick: y,
                      className: f().loginButton,
                      role: "link",
                      color: "primary",
                      size: "m",
                      radius: "xxxl",
                      children: (0, o.jsx)(r.Z, {
                        id: "authorization.enter-button",
                      }),
                    })
                  : b
                    ? (0, o.jsx)(d.z, {
                        onClick: B,
                        className: (0, l.W)(
                          f().offerButton,
                          f().offerButton_important,
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
              [y, B, i, b],
            );
          return (
            (0, v.ZP4)(!0),
            (0, o.jsxs)("div", {
              className: (0, l.W)(f().root),
              ...(0, c.BA)(c.Br.welcome.WELCOME_PAGE),
              children: [
                (0, o.jsx)(h.TF, { withSecondaryColor: !0 }),
                (0, o.jsx)("div", {
                  className: f().logoContainer,
                  children: (0, o.jsx)(u.TR, {
                    alignIcon: "center",
                    lang: "ru" !== k ? u.o0.EN : u.o0.RU,
                    className: f().logo,
                  }),
                }),
                P,
                R,
                M,
                (0, o.jsx)("img", { className: f().image, src: E }),
                x &&
                  (0, o.jsx)(p.Iw, {
                    className: f().user,
                    withMeta: g.layout !== v.t8m.Mobile,
                    variant: g.layout === v.t8m.Mobile ? "mobile" : "desktop",
                    usernameClassName: (0, l.W)(f().username, f().important),
                  }),
              ],
            })
          );
        }),
        C = (0, i.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: i } = (0, v.oR4)(),
            { hasFreeUserAccess: l } = (0, v.NMB)(),
            a = i.checkExperiment(v.peG.WebNextAllowUnauthorized, "on");
          return !n.isAuthorized && a
            ? t
            : n.isAuthorized
              ? i.checkExperiment(v.peG.WebNext, "on") && !n.isChild
                ? n.hasPlus || l
                  ? t
                  : (0, o.jsx)(b, { withOffer: !0, showUserProfile: !0 })
                : (0, o.jsx)(b, { withoutExperiment: !0, showUserProfile: !0 })
              : (0, o.jsx)(b, { showLoginButton: !0 });
        });
    },
    45977: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBlockChildUser: function () {
          return l;
        },
      });
      var o = n(44744),
        i = n(20794);
      let l = (0, o.Pi)(() => {
        let e = (0, i.uK4)(),
          { user: t } = (0, i.oR4)(),
          n = e.get(i.xit);
        t.isChild && n.redirectToChildPageUrl();
      });
    },
    53037: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithBlockFullscreen: function () {
          return h;
        },
      });
      var o = n(95660),
        i = n(44744),
        l = n(97667),
        a = n(71859),
        s = n(93062),
        r = n(42255),
        c = n(65591),
        d = n(20794),
        u = n(89479),
        m = n.n(u);
      let _ = (0, i.Pi)((e) => {
          var t;
          let { isAuthorizedUser: n = !1 } = e,
            i = (0, l.useRouter)(),
            { experiments: u, settings: _ } = (0, d.oR4)(),
            h = (0, d.uK4)().get(d.xit),
            p = _.layout === d.t8m.Mobile,
            v = u.getExperiment(d.peG.WebNextBlockFullscreen),
            x =
              null == v
                ? void 0
                : null === (t = v.value) || void 0 === t
                  ? void 0
                  : t.metadata,
            f = (0, a.useCallback)(() => {
              h.authorizationUrl && i.push(h.authorizationUrl);
            }, [h.authorizationUrl, i]),
            b = (0, a.useCallback)(() => {
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
            C = (0, a.useMemo)(() => {
              var e, t;
              return n
                ? (0, o.jsx)(s.z, {
                    onClick: b,
                    className: m().button,
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
                    onClick: f,
                    className: m().button,
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
            }, [n, f, b, x]);
          return (0, o.jsxs)("div", {
            className: m().root,
            children: [
              (0, o.jsx)(c.TF, { withSecondaryColor: !0 }),
              (0, o.jsxs)("div", {
                className: m().container,
                children: [
                  (0, o.jsxs)("div", {
                    className: m().content,
                    children: [
                      (0, o.jsx)(r.Heading, {
                        variant: "h1",
                        size: p ? "xl" : "xxl",
                        weight: "bold",
                        className: m().title,
                        children: null == x ? void 0 : x.mainText,
                      }),
                      C,
                    ],
                  }),
                  (0, o.jsx)("div", { className: m().image }),
                ],
              }),
            ],
          });
        }),
        h = (0, i.Pi)((e) => {
          let { children: t } = e,
            { user: n, experiments: i } = (0, d.oR4)();
          return i.checkExperiment(d.peG.WebNextBlockFullscreen, "on")
            ? n.isAuthorized
              ? (0, o.jsx)(_, { isAuthorizedUser: !0 })
              : (0, o.jsx)(_, {})
            : t;
        });
    },
    80903: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithMobilePaywall: function () {
          return N;
        },
      });
      var o = n(95660),
        i = n(44744),
        l = n(23974),
        a = n(71859),
        s = n(71037),
        r = n(93062),
        c = n(15706),
        d = n(28227),
        u = n(18344),
        m = n(42255),
        _ = n(97547),
        h = n(20794),
        p = n(96235);
      let v = { D: "day", M: "month", Y: "year" },
        x = (e, t) => {
          var n, o;
          let i = e.slice(-1),
            l = null === (n = e.match(/\d+/g)) || void 0 === n ? void 0 : n[0];
          if (void 0 === l) return null;
          let a = new Date(),
            s = null !== (o = v[i]) && void 0 !== o ? o : v.M,
            r = Number(l);
          return (
            s === v.D && a.setDate(a.getDate() + r),
            s === v.M && a.setMonth(a.getMonth() + r),
            s === v.Y && a.setFullYear(a.getFullYear() + r),
            new Intl.DateTimeFormat(t, {
              day: "numeric",
              month: "long",
            }).format(a)
          );
        };
      var f = n(69128),
        b = n.n(f);
      let C = () => {
        let { language: e } = (0, h.ZSk)(),
          {
            mainText: t,
            isShimmerActive: n,
            isShimmerVisible: i,
            trialPlanPeriod: l,
          } = (0, _.xU)({ storeName: "music" }),
          r = (0, a.useMemo)(() => (l ? x(l, e) : null), [l, e]);
        return i
          ? (0, o.jsx)(u.Shimmer, {
              className: b().timelineShimmer,
              isActive: n,
              radius: "xl",
            })
          : t && r
            ? (0, o.jsxs)("div", {
                className: b().timeline,
                children: [
                  (0, o.jsxs)("div", {
                    className: b().timelines,
                    children: [
                      (0, o.jsxs)("div", {
                        className: b().firstTimeline,
                        children: [
                          (0, o.jsx)("span", {
                            className: b().text,
                            children: t,
                          }),
                          (0, o.jsx)("div", {
                            className: b().timelinePeriod,
                            children: (0, o.jsx)("div", {
                              className: b().mark,
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: b().secondTimeline,
                        children: [
                          (0, o.jsx)("span", {
                            className: b().text,
                            children: (0, o.jsx)(s.Z, {
                              id: "mobile-paywall.first-payment",
                              values: { date: r },
                            }),
                          }),
                          (0, o.jsx)("div", {
                            className: b().timelinePeriod,
                            children: (0, o.jsx)("div", {
                              className: b().mark,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("span", {
                    className: b().text,
                    children: (0, o.jsx)(s.Z, {
                      id: "mobile-paywall.payment-reminder",
                      values: { nbsp: "\xa0" },
                    }),
                  }),
                ],
              })
            : void 0;
      };
      var w = n(46521),
        g = n.n(w);
      let k = "mobile-paywall-buy-subscription-button",
        A = (0, i.Pi)(() => {
          let { user: e, location: t } = (0, h.oR4)(),
            [n, i] = (0, h.zU3)(),
            v = (0, h.Eu6)(),
            {
              mainText: x,
              additionText: f,
              isShimmerActive: b,
              isShimmerVisible: w,
              openPaymentWidgetModal: A,
              saveOfferAndAuthorize: N,
            } = (0, _.xU)({
              storeName: "music",
              offerElement: { element: n, intersectionPropertyId: k },
            }),
            j = (0, a.useCallback)(() => {
              if (!e.isAuthorized) {
                N();
                return;
              }
              A();
            }, [e, N, A]),
            E = e.isChild && !e.hasPlus,
            y = (0, a.useMemo)(
              () =>
                w
                  ? (0, o.jsx)(u.Shimmer, {
                      className: g().buySubscriptionButtonShimmer,
                      isActive: b,
                      radius: "m",
                    })
                  : (0, o.jsx)(r.z, {
                      className: g().buySubscriptionButton,
                      isBlock: !0,
                      color: "plus",
                      variant: "default",
                      size: "l",
                      radius: "m",
                      onClick: j,
                      ref: i,
                      "data-intersection-property-id": k,
                      children: x,
                    }),
              [x, w, b, j, i],
            ),
            B = (0, a.useMemo)(
              () =>
                w
                  ? (0, o.jsx)(p.AH, {
                      textClassName: g().additionTextShimmer,
                      isActive: b,
                    })
                  : f
                    ? (0, o.jsx)("span", {
                        className: (0, l.W)(g().additionText),
                        children: f,
                      })
                    : null,
              [f, w, b],
            );
          return (0, o.jsxs)("div", {
            className: g().root,
            children: [
              (0, o.jsx)("div", {
                className: g().header,
                children: (0, o.jsx)(c.Icon, {
                  variant: "musicLogoCenter".concat(v),
                  className: (0, l.W)(
                    g().logo,
                    g()["logo_".concat(v.toLocaleLowerCase())],
                  ),
                }),
              }),
              (0, o.jsxs)("div", {
                className: g().content,
                children: [
                  (0, o.jsx)(m.Heading, {
                    className: (0, l.W)(g().title),
                    variant: "h1",
                    children: (0, o.jsx)(s.Z, {
                      id: "mobile-paywall.title",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                  (0, o.jsx)("span", {
                    className: (0, l.W)(g().subtitle),
                    children: (0, o.jsx)(s.Z, {
                      id: "mobile-paywall.benefit-my-vibe",
                      values: { br: "\n", nbsp: "\xa0" },
                    }),
                  }),
                  E &&
                    (0, o.jsx)("div", {
                      className: g().childInfo,
                      children: (0, o.jsx)(s.Z, {
                        id: "mobile-paywall.child-info",
                        values: { br: "\n", nbsp: "\xa0" },
                      }),
                    }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: g().subscriptionBlock,
                children: [
                  (0, o.jsx)(C, {}),
                  y,
                  B,
                  (0, o.jsx)("a", {
                    href: "https://plus.yandex.".concat(
                      t.tld,
                      "/gift?serviceName=music&promoName=music_common",
                    ),
                    className: g().promocodeLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0, o.jsx)(s.Z, {
                      id: "mobile-paywall.activate-promocode",
                    }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: g().background,
                children: (0, o.jsx)(d.Image, {
                  className: g().backgroundImage,
                  src: "https://avatars.mds.yandex.net/get-music-misc/49997/img.6718f2017687497bc12d7e8c/orig",
                  srcSet: "".concat(
                    "https://avatars.mds.yandex.net/get-music-misc/49997/img.6718f1f97687497bc12d7e8a/orig",
                    " 2x",
                  ),
                }),
              }),
            ],
          });
        }),
        N = (0, i.Pi)((e) => {
          var t;
          let { children: n } = e,
            { user: i, settings: l } = (0, h.oR4)(),
            { isFreemium: a } = (0, h.NMB)();
          return (null === (t = l.userAgent) || void 0 === t
            ? void 0
            : t.isTouch) &&
            (!i.isAuthorized || a)
            ? (0, o.jsx)(A, {})
            : n;
        });
    },
    73322: function (e, t, n) {
      "use strict";
      n.d(t, {
        WithOffline: function () {
          return a;
        },
      });
      var o = n(44744),
        i = n(97667),
        l = n(20794);
      let a = (0, o.Pi)((e) => {
        let { children: t } = e,
          { slam: n } = (0, l.oR4)();
        return (
          n.isOfflineModeEnabled &&
            (0, i.redirect)("/mymusic/downloads/tracks"),
          t
        );
      });
    },
    65591: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pj: function () {
          return A.ReleaseNotesModal;
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
          return l;
        },
        F5: function () {
          return a;
        },
        Pt: function () {
          return s;
        },
        vs: function () {
          return r.useApplicationDeeplinks;
        },
        Er: function () {
          return c.useApplicationUpdate;
        },
        Zw: function () {
          return d.useLaunch;
        },
        A4: function () {
          return u.usePlayerAction;
        },
        g3: function () {
          return m.useProbabilityBucket;
        },
        bO: function () {
          return _.useRefreshApplicationData;
        },
        ao: function () {
          return h.useRefreshRepositoryMeta;
        },
        lA: function () {
          return p.useRefreshTracksAvailability;
        },
        Tk: function () {
          return v.useReleaseNotes;
        },
      });
      let o = () => {
        document.addEventListener("auxclick", (e) => e.preventDefault()),
          document.addEventListener("click", (e) => {
            (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
          });
      };
      var i = n(20794);
      let l = (e) => {
          var t;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BOn.APPLICATION_READY, e);
        },
        a = (e) => {
          let t = e === i.Q2A.Light ? "#FFFFFF" : "#000000";
          window.desktopEvents.send(i.BOn.APPLICATION_THEME, t);
        },
        s = (e) => {
          var t;
          let { isPlaying: n, canMoveBackward: o, canMoveForward: l } = e;
          null === (t = window.desktopEvents) ||
            void 0 === t ||
            t.send(i.BOn.PLAYER_STATE, {
              isPlaying: n,
              canMoveBackward: o,
              canMoveForward: l,
            });
        };
      n(81422);
      var r = n(99749),
        c = n(11561),
        d = n(80388),
        u = n(31804),
        m = n(28971),
        _ = n(69950),
        h = n(88224),
        p = n(20520),
        v = n(41676),
        x = n(97898),
        f = n(15526),
        b = n(1158),
        C = n.n(b);
      let w = (e) => {
          let t = {},
            n = (0, i.bop)();
          return (
            n &&
              Object.keys(e)
                .filter((e) => {
                  let t = (0, i.K7K)(e);
                  return C()(t, n) >= 0;
                })
                .forEach((n) => {
                  let o = e[n];
                  o && (t[n] = o);
                }),
            t
          );
        },
        g = x.V5.model("TranslationsModel", { data: x.V5.frozen() }),
        k = x.V5.model("ReleaseNotes", {
          modal: f.KL,
          translations: x.V5.maybeNull(g),
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
              let n = w(t);
              e.translations = g.create({ data: n });
            },
          }));
      var A = n(31890),
        N = n(13521);
    },
    81422: function (e, t, n) {
      "use strict";
      n.d(t, {
        N$: function () {
          return i;
        },
        eZ: function () {
          return a;
        },
        tX: function () {
          return l;
        },
      });
      var o = n(20794);
      let i = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_MINIMIZE);
        },
        l = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_MAXIMIZE);
        },
        a = () => {
          var e;
          null === (e = window.desktopEvents) ||
            void 0 === e ||
            e.send(o.BOn.WINDOW_CLOSE);
        };
    },
    99749: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationDeeplinks: function () {
          return s;
        },
      });
      var o = n(97667),
        i = n(71859),
        l = n(20794);
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
              let n = (0, l.zak)(e, "/album/:albumId/track/:trackId").albumId;
              return null !== (t = (0, l.SZ_)("/album/".concat(n))) &&
                void 0 !== t
                ? t
                : "/";
            },
          ],
        ],
        s = () => {
          let e = (0, o.useRouter)(),
            t = (0, i.useCallback)(
              (t, n) => {
                for (let [t, o] of a)
                  if (t.test(n)) {
                    e.push(o(n));
                    return;
                  }
                let o = (0, l.SZ_)(n);
                o ? e.push(o) : e.push("/");
              },
              [e],
            );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(l.BOn.OPEN_DEEPLINK, t),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(l.BOn.OPEN_DEEPLINK, t);
              }
            );
          }, [t]);
        };
    },
    11561: function (e, t, n) {
      "use strict";
      n.d(t, {
        useApplicationUpdate: function () {
          return h;
        },
      });
      var o = n(95660),
        i = n(71859),
        l = n(36621),
        a = n(20794),
        s = n(23974),
        r = n(93062),
        c = n(42255),
        d = n(96235),
        u = n(95754),
        m = n.n(u);
      let _ = (e) => {
          let { version: t, formatMessage: n, closeToast: l } = e,
            u = (0, i.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(a.BOn.INSTALL_UPDATE),
                null == l || l();
            }, [l]),
            _ = (0, i.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: m().message,
                  children: [
                    (0, o.jsx)(c.Caption, {
                      className: m().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, o.jsx)(r.z, {
                      className: m().button,
                      onClick: u,
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
              [n, u, t],
            );
          return (0, o.jsx)(d.Yj, {
            className: (0, s.W)(m().root, m().important),
            message: _,
          });
        },
        modUpdateToast = (e) => {
          let { version: t, formatMessage: n, closeToast: l } = e,
            u = (0, i.useCallback)(() => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.send(a.BOn.APPLICATION_RESTART),
                null == l || l();
            }, [l]),
            _ = (0, i.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: m().message,
                  children: [
                    (0, o.jsx)(c.Caption, {
                      className: m().text,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: n(
                        { id: "desktop.on-mod-update-available" },
                        { version: t },
                      ),
                    }),
                    (0, o.jsx)(r.z, {
                      className: m().button,
                      onClick: u,
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
              [n, u, t],
            );
          return (0, o.jsx)(d.Yj, {
            className: (0, s.W)(m().root, m().important),
            message: _,
          });
        },
        h = () => {
          let { formatMessage: e } = (0, l.Z)(),
            { notify: t } = (0, a.d$W)(),
            n = (0, i.useRef)(""),
            s = (0, i.useCallback)(
              (i, l) => {
                n.current !== l &&
                  ((n.current = l),
                  t((0, o.jsx)(_, { formatMessage: e, version: l }), {
                    containerId: a.W$x.IMPORTANT,
                  }));
              },
              [e, n, t],
            ),
          modUpdateCallback = (0, i.useCallback)(
            (i, l, newVersion) => {
              t(
                (0, o.jsx)(modUpdateToast, {
                  formatMessage: e,
                  version: `${l} -> ${newVersion}`,
                }),
                {
                  containerId: a.W$x.IMPORTANT,
                },
              );
            },
            [e, n, t],
          );
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BOn.UPDATE_AVAILABLE, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BOn.UPDATE_AVAILABLE, s);
              }
            );
          }, [s]);
          (0, i.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(a.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(a.BOn.MOD_UPDATE_AVAILABLE, modUpdateCallback);
              }
            );
          }, [modUpdateCallback]);
        };
    },
    80388: function (e, t, n) {
      "use strict";
      n.d(t, {
        useLaunch: function () {
          return a;
        },
      });
      var o = n(71859),
        i = n(65735),
        l = n(20794);
      let a = () => {
        let e = (0, i.s)(),
          t = (0, o.useCallback)(() => {
            let t = (0, l.bop)();
            t && e.count(t, "installsCount");
          }, [e]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BOn.FIRST_LAUNCH, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BOn.FIRST_LAUNCH, t);
            }
          );
        }, [t]);
      };
    },
    31804: function (e, t, n) {
      "use strict";
      n.d(t, {
        usePlayerAction: function () {
          return s;
        },
      });
      var o,
        i,
        l = n(71859),
        a = n(20794);
      ((o = i || (i = {})).PLAY = "PLAY"),
        (o.PAUSE = "PAUSE"),
        (o.MOVE_BACKWARD = "MOVE_BACKWARD"),
        (o.MOVE_FORWARD = "MOVE_FORWARD");
      let s = (e) => {
        let t = (0, l.useCallback)(
          (t, n) => {
            switch (n) {
              case "PLAY":
              case "PAUSE":
                null == e || e.togglePause();
                break;
              case "MOVE_BACKWARD":
                null == e || e.moveBackward();
                break;
              case "MOVE_FORWARD":
                null == e || e.moveForward();
            }
          },
          [e],
        );
        (0, l.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(a.BOn.PLAYER_ACTION, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(a.BOn.PLAYER_ACTION, t);
            }
          );
        }, [t]);
      };
    },
    28971: function (e, t, n) {
      "use strict";
      n.d(t, {
        useProbabilityBucket: function () {
          return a;
        },
      });
      var o = n(71859),
        i = n(65735),
        l = n(20794);
      let a = () => {
        let e = (0, i.s)(),
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
              e.on(l.BOn.PROBABILITY_BUCKET, t),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BOn.PROBABILITY_BUCKET, t);
            }
          );
        }, [t]);
      };
    },
    69950: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshApplicationData: function () {
          return a;
        },
      });
      var o = n(71859),
        i = n(33413),
        l = n(20794);
      let a = () => {
        let {
            library: e,
            collection: t,
            experiments: n,
            main: a,
            user: s,
          } = (0, l.oR4)(),
          r = (0, o.useCallback)(() => {
            if ((n.getData(), e.getData(), a.landing.isLoaded)) {
              let e = n.checkExperiment(l.peG.WebNextSwitchMainSkeletons, "on")
                ? i.j.MAIN
                : i.j.WEB_MAIN;
              a.landing.getSkeleton(
                { id: e, showWizard: s.settings.showWizard },
                { preloadBlocks: 2 },
              );
            }
            t.landing.isLoaded &&
              t.landing.getSkeleton(
                { id: i.j.WEB_COLLECTION, showWizard: s.settings.showWizard },
                { preloadBlocks: 3 },
              );
          }, [t.landing, n, e, a.landing, s.settings.showWizard]);
        (0, o.useEffect)(() => {
          var e;
          return (
            null === (e = window.desktopEvents) ||
              void 0 === e ||
              e.on(l.BOn.REFRESH_APPLICATION_DATA, r),
            () => {
              var e;
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.off(l.BOn.REFRESH_APPLICATION_DATA, r);
            }
          );
        }, [r]);
      };
    },
    88224: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshRepositoryMeta: function () {
          return l;
        },
      });
      var o = n(71859),
        i = n(20794);
      let l = () => {
        let e = (0, i.pL3)(),
          t = (0, o.useCallback)(() => {
            e.tracks &&
              e.tracks.refreshTracksMeta().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.REPOSITORY_META_UPDATED);
              });
          }, [e.tracks]);
        (0, o.useEffect)(() => {
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
    20520: function (e, t, n) {
      "use strict";
      n.d(t, {
        useRefreshTracksAvailability: function () {
          return l;
        },
      });
      var o = n(71859),
        i = n(20794);
      let l = () => {
        let e = (0, i.pL3)(),
          t = (0, o.useCallback)(() => {
            e.tracks &&
              e.tracks.refreshTracksAvailability().then(() => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.send(i.BOn.TRACKS_AVAILABILITY_UPDATED);
              });
          }, [e.tracks]);
        (0, o.useEffect)(() => {
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
    41676: function (e, t, n) {
      "use strict";
      n.d(t, {
        useReleaseNotes: function () {
          return l;
        },
      });
      var o = n(71859),
        i = n(20794);
      let l = () => {
        let [e, t] = (0, o.useState)(!1),
          {
            releaseNotes: { setReleaseNotes: n, isReady: l, modal: a },
          } = (0, i.oR4)(),
          s = (0, o.useCallback)(
            (e, o, i) => {
              n(i), o && t(!0);
            },
            [n],
          );
        (0, o.useEffect)(() => {
          e && l && (a.open(), t(!1));
        }, [l, a, e]),
          (0, o.useEffect)(() => {
            var e;
            return (
              null === (e = window.desktopEvents) ||
                void 0 === e ||
                e.on(i.BOn.LOAD_RELEASE_NOTES, s),
              () => {
                var e;
                null === (e = window.desktopEvents) ||
                  void 0 === e ||
                  e.off(i.BOn.LOAD_RELEASE_NOTES, s);
              }
            );
          }, [s]);
      };
    },
    31890: function (e, t, n) {
      "use strict";
      n.d(t, {
        ReleaseNotesModal: function () {
          return x;
        },
      });
      var o = n(95660),
        i = n(23974),
        l = n(44744),
        a = n(71859),
        s = n(36621),
        r = n(30214),
        c = n(71037),
        d = n(52074),
        u = n(64275),
        m = n(42255),
        _ = n(20794),
        h = n(18327),
        p = n.n(h);
      let v = {
          ul: (e) =>
            (0, o.jsx)("ul", { className: p().description, children: e }),
          li: (e) => (0, o.jsx)("li", { className: p().item, children: e }),
          code: (e) => (0, o.jsx)("code", { className: p().code, children: e }),
          date: (e) => (0, o.jsx)("span", { className: p().date, children: e }),
          p: (e) => (0, o.jsx)("p", { className: p().paragraph, children: e }),
          br: (0, o.jsx)("br", {}),
        },
        x = (0, l.Pi)(() => {
          var e, t;
          let { releaseNotes: n } = (0, _.oR4)(),
            { formatMessage: l } = (0, s.Z)(),
            { language: h, defaultLanguage: x } = (0, _.ZSk)(),
            f = (0, _.J4i)(),
            b = (0, a.useMemo)(() => {
              var e, t;
              return (0, _.LaW)(
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
          return (0, o.jsx)(d.u, {
            title: l({ id: "desktop.release-notes-modal-title" }),
            open: n.modal.isOpened,
            onOpenChange: n.modal.onOpenChange,
            onClose: n.modal.close,
            size: "fitContent",
            placement: "center",
            overlayColor: "full",
            labelClose: l({ id: "interface-actions.close" }),
            className: p().root,
            headerClassName: p().modalHeader,
            contentClassName: p().modalContent,
            children: (0, o.jsx)(r.Z, {
              onError: f,
              defaultLocale: x,
              locale: h,
              messages:
                null === (t = n.translations) || void 0 === t ? void 0 : t.data,
              children: (0, o.jsx)(u.t, {
                className: (0, i.W)(p().scrollableContent, p().important),
                containerClassName: (0, i.W)(p().notes, p().important),
                children: b.map((e) =>
                  (0, o.jsxs)(
                    "div",
                    {
                      className: p().note,
                      children: [
                        (0, o.jsx)(m.Heading, {
                          variant: "h4",
                          className: (0, i.W)(p().version, p().important),
                          children: (0, _.K7K)(e),
                        }),
                        (0, o.jsx)(c.Z, { id: e, values: v }),
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
    13521: function (e, t, n) {
      "use strict";
      n.d(t, {
        TitleBar: function () {
          return _;
        },
      });
      var o = n(95660),
        i = n(23974),
        l = n(44744),
        a = n(71859),
        s = n(36621),
        r = n(20794),
        c = n(81422),
        d = n(27543),
        u = n.n(d);
      let m = (e) => {
          let {
            children: t,
            className: n,
            onClick: l,
            ariaLabel: a,
            withSecondaryColor: s,
          } = e;
          return (0, o.jsx)("button", {
            type: "button",
            className: (0, i.W)(
              u().button,
              { [u().button_withSecondaryColor]: s },
              n,
            ),
            onClick: l,
            "aria-label": a,
            children: t,
          });
        },
        _ = (0, l.Pi)((e) => {
          let { withSecondaryColor: t } = e,
            n = (0, r.XfM)() === r.t4T.WINDOWS,
            { formatMessage: l } = (0, s.Z)(),
            d = (0, a.useCallback)(() => {
              (0, c.N$)();
            }, []),
            _ = (0, a.useCallback)(() => {
              (0, c.tX)();
            }, []),
            h = (0, a.useCallback)(() => {
              (0, c.eZ)();
            }, []);
          return (0, o.jsx)("div", {
            className: u().root,
            onDoubleClick: _,
            children:
              n &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(m, {
                    onClick: d,
                    ariaLabel: l({ id: "windows-menu.roll-up" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "1",
                      viewBox: "0 0 10 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M0.498047 1C0.429688 1 0.364583 0.986979 0.302734 0.960938C0.244141 0.934896 0.192057 0.899089 0.146484 0.853516C0.100911 0.807943 0.0651042 0.755859 0.0390625 0.697266C0.0130208 0.635417 0 0.570312 0 0.501953C0 0.433594 0.0130208 0.370117 0.0390625 0.311523C0.0651042 0.249674 0.100911 0.195964 0.146484 0.150391C0.192057 0.101562 0.244141 0.0641276 0.302734 0.0380859C0.364583 0.0120443 0.429688 -0.000976562 0.498047 -0.000976562H9.50195C9.57031 -0.000976562 9.63379 0.0120443 9.69238 0.0380859C9.75423 0.0641276 9.80794 0.101562 9.85352 0.150391C9.89909 0.195964 9.9349 0.249674 9.96094 0.311523C9.98698 0.370117 10 0.433594 10 0.501953C10 0.570312 9.98698 0.635417 9.96094 0.697266C9.9349 0.755859 9.89909 0.807943 9.85352 0.853516C9.80794 0.899089 9.75423 0.934896 9.69238 0.960938C9.63379 0.986979 9.57031 1 9.50195 1H0.498047Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(m, {
                    onClick: _,
                    ariaLabel: l({ id: "windows-menu.unwrap" }),
                    withSecondaryColor: t,
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
                      }),
                      children: (0, o.jsx)("path", {
                        d: "M1.47461 10C1.2793 10 1.09212 9.96094 0.913086 9.88281C0.734049 9.80143 0.576172 9.69401 0.439453 9.56055C0.30599 9.42383 0.198568 9.26595 0.117188 9.08691C0.0390625 8.90788 0 8.7207 0 8.52539V1.47461C0 1.2793 0.0390625 1.09212 0.117188 0.913086C0.198568 0.734049 0.30599 0.577799 0.439453 0.444336C0.576172 0.307617 0.734049 0.200195 0.913086 0.12207C1.09212 0.0406901 1.2793 0 1.47461 0H8.52539C8.7207 0 8.90788 0.0406901 9.08691 0.12207C9.26595 0.200195 9.4222 0.307617 9.55566 0.444336C9.69238 0.577799 9.7998 0.734049 9.87793 0.913086C9.95931 1.09212 10 1.2793 10 1.47461V8.52539C10 8.7207 9.95931 8.90788 9.87793 9.08691C9.7998 9.26595 9.69238 9.42383 9.55566 9.56055C9.4222 9.69401 9.26595 9.80143 9.08691 9.88281C8.90788 9.96094 8.7207 10 8.52539 10H1.47461ZM8.50098 8.99902C8.56934 8.99902 8.63281 8.986 8.69141 8.95996C8.75326 8.93392 8.80697 8.89811 8.85254 8.85254C8.89811 8.80697 8.93392 8.75488 8.95996 8.69629C8.986 8.63444 8.99902 8.56934 8.99902 8.50098V1.49902C8.99902 1.43066 8.986 1.36719 8.95996 1.30859C8.93392 1.24674 8.89811 1.19303 8.85254 1.14746C8.80697 1.10189 8.75326 1.06608 8.69141 1.04004C8.63281 1.014 8.56934 1.00098 8.50098 1.00098H1.49902C1.43066 1.00098 1.36556 1.014 1.30371 1.04004C1.24512 1.06608 1.19303 1.10189 1.14746 1.14746C1.10189 1.19303 1.06608 1.24674 1.04004 1.30859C1.014 1.36719 1.00098 1.43066 1.00098 1.49902V8.50098C1.00098 8.56934 1.014 8.63444 1.04004 8.69629C1.06608 8.75488 1.10189 8.80697 1.14746 8.85254C1.19303 8.89811 1.24512 8.93392 1.30371 8.95996C1.36556 8.986 1.43066 8.99902 1.49902 8.99902H8.50098Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  (0, o.jsx)(m, {
                    className: u().closeButton,
                    onClick: h,
                    ariaLabel: l({ id: "windows-menu.close" }),
                    children: (0, o.jsx)("svg", {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 10 10",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: (0, i.W)(u().icon, {
                        [u().icon_withSecondaryColor]: t,
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
    95754: function (e) {
      e.exports = {
        root: "NotificationUpdate_root__hpSQi",
        important: "NotificationUpdate_important___0WHj",
        text: "NotificationUpdate_text__YylYD",
        button: "NotificationUpdate_button__F3O16",
        message: "NotificationUpdate_message__rLYpW",
      };
    },
    18327: function (e) {
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
    27543: function (e) {
      e.exports = {
        root: "TitleBar_root__QjdOZ",
        button: "TitleBar_button__9MptL",
        button_withSecondaryColor: "TitleBar_button_withSecondaryColor__oIkuo",
        icon: "TitleBar_icon__8Wji9",
        icon_withSecondaryColor: "TitleBar_icon_withSecondaryColor__vuw6G",
        closeButton: "TitleBar_closeButton__Epxh7",
      };
    },
    89479: function (e) {
      e.exports = {
        root: "BlockPage_root__crGK_",
        container: "BlockPage_container__my_l0",
        content: "BlockPage_content__4nK4D",
        title: "BlockPage_title__sAejV",
        button: "BlockPage_button__KoFZX",
        image: "BlockPage_image__C02Db",
      };
    },
    98906: function (e) {
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
    64241: function (e) {
      e.exports = {
        root: "Login_root__VtFg_",
        title: "Login_title__dqQz1",
        important: "Login_important__Z8S9I",
        text: "Login_text__1uju5",
        button: "Login_button__ZYvZY",
      };
    },
    46521: function (e) {
      e.exports = {
        root: "MobilePaywall_root__nANYc",
        background: "MobilePaywall_background__vtayy",
        backgroundImage: "MobilePaywall_backgroundImage__3Keyc",
        footer: "MobilePaywall_footer__ANi_h",
        header: "MobilePaywall_header__Sq9Ep",
        content: "MobilePaywall_content__FG21a",
        title: "MobilePaywall_title__Z4_h7",
        subtitle: "MobilePaywall_subtitle__H_Lt7",
        childInfo: "MobilePaywall_childInfo__YPCo2",
        subscriptionBlock: "MobilePaywall_subscriptionBlock__yP5pI",
        logo: "MobilePaywall_logo___GyBF",
        logo_ru: "MobilePaywall_logo_ru__Mld4F",
        logo_en: "MobilePaywall_logo_en__UgDsr",
        buySubscriptionButton: "MobilePaywall_buySubscriptionButton__VcHzk",
        buySubscriptionButtonShimmer:
          "MobilePaywall_buySubscriptionButtonShimmer___QmNl",
        additionText: "MobilePaywall_additionText__oBoCy",
        additionTextShimmer: "MobilePaywall_additionTextShimmer__qBDHZ",
        promocodeLink: "MobilePaywall_promocodeLink__VX7R7",
      };
    },
    69128: function (e) {
      e.exports = {
        timeline: "SubscriptionTimeline_timeline__a2Nan",
        timelineShimmer: "SubscriptionTimeline_timelineShimmer__Waj3_",
        timelines: "SubscriptionTimeline_timelines__gA_Yq",
        firstTimeline: "SubscriptionTimeline_firstTimeline__6YaTO",
        secondTimeline: "SubscriptionTimeline_secondTimeline__Hq1Wj",
        timelinePeriod: "SubscriptionTimeline_timelinePeriod__hsJ_W",
        mark: "SubscriptionTimeline_mark___j8ZQ",
        text: "SubscriptionTimeline_text__E7Ngx",
      };
    },
    31038: function (e, t) {
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
    37204: function (e, t) {
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
