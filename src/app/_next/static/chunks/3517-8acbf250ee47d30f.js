(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3517],
  {
    2222: function (e, t, o) {
      "use strict";
      o.d(t, {
        DefaultLayout: function () {
          return ee;
        },
      });
      var n = o(75441),
        a = o(32358),
        r = o(62569),
        i = o(98730),
        s = o(53809),
        l = o(74688),
        d = o(52861),
        c = o(54439),
        _ = o(89150),
        u = o(68877),
        p = o(91851),
        m = o(90508),
        x = o(35846),
        v = o(68208),
        h = o(17392),
        j = o(13534),
        b = o(32116),
        f = o.n(b);
      let k = (0, r.Pi)((e) => {
        let { className: t } = e,
          {
            redAlert: { text: o, buttonText: r, href: i },
          } = (0, j.oR4)(),
          s = (0, j.s0h)(i),
          { theme: l } = (0, j.FgM)();
        return (0, n.jsx)("div", {
          className: (0, a.W)(f().wrapper, t),
          ...(0, x.BA)(x.QM.redAlert.RED_ALERT),
          children: (0, n.jsxs)("div", {
            className: (0, a.W)(f().root, {
              [f().root_light]: l === j.Q2A.Light,
            }),
            children: [
              (0, n.jsx)(h.Caption, {
                className: f().text,
                type: "controls",
                variant: "p",
                size: "m",
                weight: "medium",
                ...(0, x.BA)(x.QM.redAlert.RED_ALERT_TEXT),
                children: o,
              }),
              (0, n.jsx)(v.Button, {
                className: f().button,
                color: "secondary",
                size: "m",
                radius: "xxxl",
                onClick: s,
                ...(0, x.BA)(x.QM.redAlert.RED_ALERT_BUTTON),
                children: (0, n.jsx)(h.Caption, {
                  type: "controls",
                  variant: "span",
                  size: "m",
                  weight: "medium",
                  children: r,
                }),
              }),
            ],
          }),
        });
      });
      var C = o(30948),
        y = o(75721),
        A = o(57697),
        T = o(21619),
        g = o(55051),
        N = o(23765),
        L = o(39392),
        R = o(4459),
        M = o(50687),
        B = o(1150),
        w = o(14924),
        P = o(90378),
        D = o(99951),
        E = o(97141),
        W = o(86800),
        I = o.n(W),
        O = o(81717),
        S = o(60323),
        z = o.n(S),
        F = o(71361),
        Y = o(65067),
        Z = o(58720),
        V = o(9317),
        G = o(93093);
      let $ = { p1: "czmwt", p2: "hsnu", puid1: "", puid2: "" };
      var Q = o(96079),
        K = o.n(Q);
      let U = (0, r.Pi)((e) => {
          let { className: t, forwardRef: o, onAdvertChange: r, ...i } = e,
            {
              advertBanners: {
                banners: { topAdvertBanner: s },
              },
            } = (0, j.oR4)(),
            { formatMessage: l } = (0, V.Z)(),
            d = (0, G.W)((e) => {
              void 0 !== e && s.setType(e), r();
            });
          return (0, n.jsx)("section", {
            ref: o,
            className: (0, a.W)(K().root, t, {
              [K().root_hidden]: !s.isVisible,
            }),
            "aria-label": l({ id: "advert.banner" }),
            ...i,
            children: (0, n.jsx)(E.tu, {
              className: K().advert,
              ownerId: j.kK$,
              containerId: "adfox_173831489272852769",
              params: $,
              onLoad: s.setType,
              onRender: d,
              onError: s.toggleHasErrorTrue,
              onNoAds: s.toggleNoAdsTrue,
            }),
          });
        }),
        H = (0, Y.forwardRef)((e, t) => (0, n.jsx)(U, { forwardRef: t, ...e }));
      var X = o(97384),
        q = o.n(X);
      let J = (0, r.Pi)((e) => {
          var t;
          let { children: o } = e,
            [r, i] = (0, Y.useState)(!1),
            [s, l] = (0, Y.useState)(!0),
            [d, c] = (0, Y.useState)(!1),
            { contentRef: _, contentScrollRef: u } = (0, j.$Y6)(),
            p = (0, Y.useRef)(null),
            { isFreemium: m } = (0, j.NMB)(),
            { user: x, settings: v } = (0, j.oR4)(),
            h =
              (!x.isAuthorized || m) &&
              !(null === (t = v.browserInfo) || void 0 === t
                ? void 0
                : t.isTouch),
            b = (0, Y.useCallback)(() => {
              l(!1), i(!0);
            }, [l, i]),
            f = (0, Y.useCallback)(() => {
              l(!0), i(!1);
            }, [l, i]),
            k = (0, Y.useCallback)(() => {
              c(!1);
            }, [c]),
            C = (0, Y.useMemo)(
              () =>
                h
                  ? (0, n.jsx)(H, {
                      className: (0, a.W)(q().banner, {
                        [q().banner_canShow]: r,
                      }),
                      onFocus: b,
                      onBlur: f,
                      onAdvertChange: k,
                      ref: p,
                    })
                  : null,
              [h, r, b, f, k],
            ),
            y = (0, Y.useCallback)(() => {
              var e;
              if (!C) return;
              if (!_ || !u) {
                i(!0);
                return;
              }
              let t = u.scrollTop > 0,
                o =
                  _.clientHeight +
                    ((null === (e = p.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) || 0) <
                  u.scrollHeight;
              if ((o ? l(!0) : !o && t && l(!1), !s || (!t && d))) return;
              let n = !t;
              i(n), n && c(!0);
            }, [_, u, C, s, d, i, l, c]);
          (0, Y.useEffect)(() => {
            y();
          }, [y, u]);
          let A = (0, Y.useMemo)(() => (0, F.Z)(y, 200), [y]);
          return (
            (0, Z.v)({ onScroll: A, elementRef: u }),
            (0, n.jsxs)("div", {
              className: q().root,
              children: [
                C,
                (0, n.jsx)("div", { className: q().content, children: o }),
              ],
            })
          );
        }),
        ee = (0, r.Pi)((e) => {
          var t, o, r;
          let { className: x, children: v } = e,
            h = (0, i.usePathname)(),
            {
              settings: {
                browserInfo: b,
                isMobile: f,
                isWindowsApplication: W,
                isMacOSApplication: S,
                isLinuxApplication: F,
              },
              experiments: Y,
              communication: Z,
              user: V,
              redAlert: G,
              downloadMobileApp: $,
            } = (0, j.oR4)(),
            { isFreemium: Q } = (0, j.NMB)();
          (0, j.HY3)();
          let K = (!V.isAuthorized || Q) && (null == b ? void 0 : b.isTouch),
            U = (0, w.yO)(w.$t.MAIN),
            H = Y.checkExperiment(j.peG.WebNextArtistInfo, "on"),
            X =
              !V.hasPlus && Y.checkExperiment(j.peG.WebNextFamilyInvite, "on"),
            q =
              !G.isVisible &&
              !f &&
              (null === (t = Z.list) || void 0 === t
                ? void 0
                : t.barBelow.isVisible) &&
              (null === (o = Z.list) || void 0 === o
                ? void 0
                : o.barBelow.hasAnimationAlreadyBeenStarted),
            ee =
              Y.checkExperiment(j.peG.WebNextDeeplinksToMobile, "on") &&
              V.hasPlus &&
              !!(null == b ? void 0 : b.isMobile) &&
              !1,
            { setDefaultLayoutRef: et } = (0, j.$Y6)();
          return (0, n.jsx)(J, {
            children: (0, n.jsx)(E.J4, {
              isEnabled: ee,
              children: (0, n.jsxs)("div", {
                ref: et,
                className: (0, a.W)(
                  I().root,
                  z().root,
                  {
                    [z().root_applicationPreserveTitleBar]: W || F,
                    [z().root_withBarBelow]: G.isVisible || q,
                    ["modFeatures_alwaysWideBar"]: window.ALWAYS_WIDE_BAR?.(),
                  },
                  x,
                ),
                children: [
                  !f &&
                    !K &&
                    (0, n.jsx)(u.wp, {
                      className: (0, a.W)(z().navbar, {
                        [z().navbar_application_windows]: W,
                        [z().navbar_application_macos]: S,
                        [z().navbar_application_linux]: F,
                      }),
                    }),
                  (0, n.jsx)(l.VY, {
                    className: (0, a.W)(I().content, {
                      [I().content_withPlayerBar]: f,
                    }),
                    children: (0, n.jsxs)(
                      E.SV,
                      { fallback: C.D, children: [v, (0, n.jsx)(O.M, {})] },
                      h,
                    ),
                  }),
                  !f &&
                    !K &&
                    (0, n.jsx)(j.Lh6, {
                      pageId: j.Rhz.PLAYER,
                      children: (0, n.jsx)(m.ev, { className: I().playerBar }),
                    }),
                  f &&
                    !K &&
                    (0, n.jsxs)("div", {
                      className: I().compositePlayerBar,
                      children: [
                        ee && (0, n.jsx)(E.wd, {}),
                        (0, n.jsx)(j.Lh6, {
                          pageId: j.Rhz.PLAYER,
                          children: (0, n.jsx)(m.ev, {
                            className: I().playerBar,
                          }),
                        }),
                        (0, n.jsx)(u.wp, {
                          className: (0, a.W)(z().navbar, {
                            [z().navbar_application_windows]: W,
                            [z().navbar_application_macos]: S,
                            [z().navbar_application_linux]: F,
                          }),
                        }),
                      ],
                    }),
                  G.isVisible && (0, n.jsx)(k, { className: z().barBelow }),
                  !G.isVisible &&
                    !f &&
                    Z.list &&
                    (0, n.jsx)(N.On, {
                      className: z().barBelow,
                      barBelow: Z.list.barBelow,
                    }),
                  (null === (r = Z.list) || void 0 === r ? void 0 : r.modal) &&
                    (0, n.jsx)(L.IP, { modal: Z.list.modal }),
                  (0, n.jsx)(j.Lh6, {
                    pageId: j.Rhz.PLAYER,
                    children: (0, n.jsx)(m.Rt, {}),
                  }),
                  U &&
                    (0, n.jsx)(j.Lh6, {
                      pageId: j.Rhz.VIDEO_PLAYER,
                      children: (0, n.jsx)(A.zF, {}),
                    }),
                  (0, n.jsx)(P.F8, {}),
                  (0, n.jsx)(j.Lh6, {
                    pageId: j.Rhz.TRAILER,
                    children: (0, n.jsx)(y._, {}),
                  }),
                  (0, n.jsx)(T.D, {}),
                  U && (0, n.jsx)(l.ZI, {}),
                  (0, n.jsx)(l.Qg, {}),
                  H && (0, n.jsx)(g.WI, {}),
                  !V.hasPlus &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(p.x5, {}),
                        (0, n.jsx)(d.m, {}),
                        (0, n.jsx)(m.BF, {}),
                      ],
                    }),
                  X && (0, n.jsx)(_.bL, {}),
                  (0, n.jsx)(M.V, {}),
                  (0, n.jsx)(l.Lq, {}),
                  (0, n.jsx)(s.tU, {}),
                  (0, n.jsx)(D.Qw, {}),
                  (0, n.jsx)(B.eZ, {}),
                  $.shouldShow() && (0, n.jsx)(c.Y, {}),
                  (0, n.jsx)(R.W, {}),
                ],
              }),
            }),
          });
        });
    },
    81717: function (e, t, o) {
      "use strict";
      o.d(t, {
        M: function () {
          return d;
        },
      });
      var n = o(75441),
        a = o(38861),
        r = o(13534),
        i = o(87164),
        s = o.n(i);
      let l = [{ id: r.W$x.INFO }, { id: r.W$x.ERROR, limit: 1 }],
        d = () =>
          l.map((e) => {
            let { id: t, limit: o } = e;
            return (0, n.jsx)(
              a.Notification,
              {
                className: s().root,
                enableMultiContainer: !0,
                containerId: t,
                position: "bottom-center",
                limit: o,
              },
              t,
            );
          });
    },
    88104: function (e, t, o) {
      "use strict";
      o.d(t, {
        PromoLandingLayout: function () {
          return A;
        },
      });
      var n = o(75441),
        a = o(32358),
        r = o(62569),
        i = o(98730),
        s = o(65067),
        l = o(64451),
        d = o(74688),
        c = o(52861),
        _ = o(90508),
        u = o(30948),
        p = o(87660),
        m = o(90378),
        x = o(99951),
        v = o(13534),
        h = o(97141),
        j = o(86800),
        b = o.n(j),
        f = o(81717),
        k = o(78895),
        C = o.n(k);
      let y = {
          enter: C().animatedPlayer_enter,
          enterActive: C().animatedPlayer_enter_active,
          exit: C().animatedPlayer_exit,
          exitActive: C().animatedPlayer_exit_active,
        },
        A = (0, r.Pi)((e) => {
          let { className: t, children: o } = e,
            r = (0, i.usePathname)(),
            j = (0, s.useRef)(null),
            {
              settings: { isMobile: k },
              modals: { promoLandingBuySubscriptionModal: A },
              promolanding: { state: T },
            } = (0, v.oR4)(),
            { isFreemium: g } = (0, v.NMB)();
          return (0, n.jsxs)("div", {
            style: {
              "--promo-landing-layout-transition-duration": "".concat(
                220,
                "ms",
              ),
            },
            className: (0, a.W)((0, v.eSQ)(v.Q2A.Dark), b().root, C().root, t),
            children: [
              (0, n.jsx)(d.l, {
                className: (0, a.W)(b().content, {
                  [b().content_withPlayerBar]: k,
                }),
                children: (0, n.jsxs)(
                  h.SV,
                  { fallback: u.D, children: [o, (0, n.jsx)(f.M, {})] },
                  r,
                ),
              }),
              (0, n.jsx)(l.Z, {
                nodeRef: j,
                in: !!T.entityMeta,
                timeout: 220,
                classNames: y,
                unmountOnExit: !0,
                children: (0, n.jsx)(v.Lh6, {
                  pageId: v.Rhz.PLAYER,
                  children: (0, n.jsx)("div", {
                    ref: j,
                    className: (0, a.W)(C().playerBar, {
                      [b().compositePlayerBar]: k,
                      [b().playerBar]: !k,
                    }),
                    children: (0, n.jsx)(_.yI, {
                      className: (0, a.W)({ [b().playerBar]: k }),
                    }),
                  }),
                }),
              }),
              g &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(p.z$, { modal: A }),
                    (0, n.jsx)(c.m, { withAlreadyInPlusButton: !0 }),
                    (0, n.jsx)(x.Qw, {}),
                  ],
                }),
              (0, n.jsx)(m.F8, {}),
            ],
          });
        });
    },
    74688: function (e, t, o) {
      "use strict";
      o.d(t, {
        ZI: function () {
          return b;
        },
        VY: function () {
          return w;
        },
        l: function () {
          return E;
        },
        Qg: function () {
          return Y;
        },
        Lq: function () {
          return $;
        },
      });
      var n = o(75441),
        a = o(62569),
        r = o(13534),
        i = o(32358),
        s = o(65067),
        l = o(9317),
        d = o(59506),
        c = o(97141),
        _ = o(17392),
        u = o(47476),
        p = o.n(u);
      let m = (0, a.Pi)((e) => {
          let { children: t, link: o } = e,
            {
              currentTrackInfo: { modal: a },
            } = (0, r.oR4)();
          return o
            ? (0, n.jsx)(c.rU, {
                className: p().link,
                href: o,
                onClick: a.close,
                children: (0, n.jsx)(_.Caption, {
                  variant: "div",
                  size: "l",
                  children: t,
                }),
              })
            : (0, n.jsx)(_.Caption, { variant: "div", size: "l", children: t });
        }),
        x = (e) => {
          let { title: t, description: o, children: a, link: r } = e;
          return o || a
            ? (0, n.jsxs)("div", {
                className: p().infoBlock,
                children: [
                  t &&
                    (0, n.jsx)(_.Heading, {
                      variant: "h4",
                      className: p().infoTitle,
                      children: t,
                    }),
                  (0, n.jsx)(m, { link: r, children: o || a }),
                ],
              })
            : null;
        };
      var v = o(24063),
        h = o.n(v);
      let j = (0, a.Pi)(() => {
          let { formatMessage: e } = (0, l.Z)(),
            { notify: t } = (0, r.d$W)(),
            { contentRef: o } = (0, r.$Y6)(),
            {
              currentClipInfo: a,
              settings: { isMobile: _, isWindowsApplication: u },
              fullscreenVideoPlayer: p,
            } = (0, r.oR4)(),
            { modal: m, clip: v } = a;
          !v && a.isClipIdle && a.getClip(),
            !a.credits && a.isCreditsIdle && a.getCreditsInfo();
          let j = null == v ? void 0 : v.title,
            b = null == v ? void 0 : v.explicitDisclaimer,
            f = (0, s.useMemo)(
              () =>
                a.isClipLoading || a.isClipRejected
                  ? (0, n.jsx)(c.Yh, { className: h().titleShimmer, count: 1 })
                  : v
                    ? (0, n.jsxs)("span", {
                        children: [
                          j,
                          b &&
                            (0, n.jsx)(c.$i, {
                              getDescriptionTexts: v.getDescriptionTexts,
                              className: (0, i.W)(
                                h().explicitMark,
                                h().important,
                              ),
                              size: "xxs",
                              variant: b,
                            }),
                        ],
                      })
                    : void 0,
              [v, j, b, a.isClipLoading, a.isClipRejected],
            );
          (0, s.useEffect)(
            () => () => {
              m.close(), a.reset();
            },
            [a, m],
          );
          let k = (0, s.useCallback)(() => {
              m.close(), a.reset();
            }, [a, m]),
            C = (0, s.useCallback)(
              (e) => {
                var t;
                e || a.reset(),
                  null === (t = m.onOpenChange) || void 0 === t || t.call(m, e);
              },
              [a, m],
            );
          a.isRejected &&
            (k(),
            t(
              (0, n.jsx)(c.Q, {
                error: e({ id: "error-messages.error-during-action" }),
              }),
              { containerId: r.W$x.ERROR },
            ));
          let y = (0, s.useMemo)(() => {
            var e;
            return a.isCreditsLoading || a.isCreditsRejected
              ? (0, n.jsx)(c.Yh, {})
              : (null === (e = a.credits) || void 0 === e ? void 0 : e.length)
                ? a.credits.map((e) =>
                    (0, n.jsx)(
                      x,
                      { title: e.title, description: e.value },
                      e.title,
                    ),
                  )
                : null;
          }, [a.credits, a.isCreditsLoading, a.isCreditsRejected]);
          return (0, n.jsx)(d.u, {
            placement: _ ? "default" : "right",
            open: m.isOpened,
            onClose: k,
            contentClassName: h().modalContent,
            title: f,
            headerClassName: h().header,
            className: (0, i.W)(h().root, {
              [h().root_withFullscreen]: p.modal.isOpened,
              [h().root_withWindows]: u,
            }),
            onOpenChange: C,
            labelClose: e({ id: "interface-actions.close" }),
            portalNode: _ || p.modal.isOpened ? null : o,
            children: (0, n.jsx)("div", {
              className: h().content,
              children: y,
            }),
          });
        }),
        b = (0, a.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, r.oR4)();
          return e ? null : (0, n.jsx)(j, {});
        });
      o(1194), o(64451);
      var f = o(15937),
        k = o(68208);
      let C = { p1: "bwvvu", p2: "foom", puid1: "", puid2: "" };
      var y = o(87814),
        A = o.n(y);
      let T = (0, a.Pi)((e) => {
          let { className: t, forwardRef: o } = e,
            {
              advertBanners: {
                banners: { sideAdvertBanner: a },
              },
              experiments: s,
              paywall: { modal: d },
            } = (0, r.oR4)(),
            { formatMessage: u } = (0, l.Z)(),
            p =
              a.type !== r.Y_4.EMPTY &&
              s.checkExperiment(r.peG.WebNextCloseAdsSideBanner, "on");
          return (0, n.jsxs)("section", {
            className: (0, i.W)(A().root, t, {
              [A().root_hidden]: !a.isVisible,
            }),
            "aria-label": u({ id: "advert.banner" }),
            ref: o,
            children: [
              (0, n.jsx)("div", {
                className: A().contentWrapper,
                children: (0, n.jsx)(c.tu, {
                  className: A().content,
                  ownerId: r.kK$,
                  containerId: "adfox_173831489302952769",
                  params: C,
                  onLoad: a.setType,
                  onError: a.toggleHasErrorTrue,
                  onNoAds: a.toggleNoAdsTrue,
                }),
              }),
              p &&
                (0, n.jsx)(k.Button, {
                  className: A().disableAdsButton,
                  onClick: d.open,
                  size: "default",
                  radius: "xxxl",
                  children: (0, n.jsx)(_.Caption, {
                    className: A().adsCloseText,
                    variant: "span",
                    size: "m",
                    children: (0, n.jsx)(f.Z, { id: "ads.disable-ads" }),
                  }),
                }),
            ],
          });
        }),
        g = (0, s.forwardRef)((e, t) => (0, n.jsx)(T, { forwardRef: t, ...e }));
      var N = o(98730);
      let L = ["album", "users", "artist", "chart"],
        R = () => {
          let e = (0, N.usePathname)();
          return (0, s.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && L.includes(t);
          }, [e]);
        };
      var M = o(77707),
        B = o.n(M);
      B().secondaryEnter, B().secondaryEnterActive;
      let w = (0, a.Pi)((e) => {
        let { className: t, children: o } = e;
        (0, r.uK4)();
        let {
            setContentRef: a,
            setContentRootRef: l,
            setSideBannerRef: d,
          } = (0, r.$Y6)(),
          { isFreemium: c } = (0, r.NMB)(),
          {
            user: _,
            settings: { isMobile: u },
          } = (0, r.oR4)(),
          p = !_.isAuthorized || c;
        return (
          R(),
          (0, s.useRef)(null),
          (0, n.jsxs)("div", {
            className: (0, i.W)(B().rootOld, t),
            ref: l,
            children: [
              (0, n.jsx)("main", {
                className: B().main,
                ref: a,
                children: (0, n.jsx)(s.Suspense, { children: o }),
              }),
              p && (0, n.jsx)(g, { className: B().sideBanner, ref: d }),
            ],
          })
        );
      });
      var P = o(19086),
        D = o.n(P);
      let E = (e) => {
        let { className: t, children: o } = e,
          { setContentRef: a, setContentRootRef: l } = (0, r.$Y6)();
        return (0, n.jsx)("div", {
          className: (0, i.W)(D().root, t),
          ref: l,
          children: (0, n.jsx)("main", {
            className: D().main,
            ref: a,
            children: (0, n.jsx)(s.Suspense, { children: o }),
          }),
        });
      };
      var W = o(35846),
        I = o(94123);
      let O = (0, a.Pi)(() => {
        var e, t;
        let { formatMessage: o } = (0, l.Z)(),
          { currentTrackInfo: a } = (0, r.oR4)(),
          { fullTrack: i } = a;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(x, {
              children: null == i ? void 0 : i.shortDescription,
            }),
            (0, n.jsx)(x, {
              title: o({ id: "entity-names.audiobook" }),
              description:
                null == i
                  ? void 0
                  : null === (e = i.mainAlbum) || void 0 === e
                    ? void 0
                    : e.title,
              link:
                null == i
                  ? void 0
                  : null === (t = i.mainAlbum) || void 0 === t
                    ? void 0
                    : t.url,
            }),
          ],
        });
      });
      var S = o(63660);
      let z = (0, a.Pi)(() => {
          var e, t;
          let { formatMessage: o } = (0, l.Z)(),
            { currentTrackInfo: a } = (0, r.oR4)(),
            i = a.fullTrack,
            d = (0, s.useMemo)(
              () =>
                a.fullDescription
                  ? (0, n.jsx)("span", {
                      className: p().text,
                      dangerouslySetInnerHTML: {
                        __html: (0, S.sanitizeDOM)(a.fullDescription),
                      },
                    })
                  : null == i
                    ? void 0
                    : i.shortDescription,
              [null == i ? void 0 : i.shortDescription, a.fullDescription],
            );
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(x, { children: d }),
              (0, n.jsx)(x, {
                title: o({ id: "entity-names.podcast" }),
                description:
                  null == i
                    ? void 0
                    : null === (e = i.mainAlbum) || void 0 === e
                      ? void 0
                      : e.title,
                link:
                  null == i
                    ? void 0
                    : null === (t = i.mainAlbum) || void 0 === t
                      ? void 0
                      : t.url,
              }),
            ],
          });
        }),
        F = (0, a.Pi)(() => {
          var e, t, o, a, _;
          let { formatMessage: u } = (0, l.Z)(),
            { notify: m } = (0, r.d$W)(),
            { contentRef: v } = (0, r.$Y6)(),
            {
              currentTrackInfo: h,
              settings: {
                isMobile: j,
                isWindowsApplication: b,
                isLinuxApplication: f,
              },
              fullscreenPlayer: k,
              experiments: C,
            } = (0, r.oR4)(),
            { modal: y } = h,
            A = h.isUGC,
            T = C.checkExperiment(r.peG.WebEditorsFeatures, "on");
          A && h.isTrackIdle && h.getTrackMeta(),
            h.fullTrack || !h.isTrackIdle || A || h.getFullTrack(),
            !h.credits && h.isCreditsIdle && h.getCreditsInfo(),
            ((null === (e = h.fullTrack) || void 0 === e
              ? void 0
              : e.isTrackPodcast) ||
              (null === (o = h.fullTrack) || void 0 === o
                ? void 0
                : null === (t = o.mainAlbum) || void 0 === t
                  ? void 0
                  : t.isPodcast)) &&
              h.getFullDescription(),
            (0, s.useEffect)(
              () => () => {
                y.close(), h.reset();
              },
              [h, y],
            );
          let g = (0, s.useCallback)(() => {
              y.close(), h.reset();
            }, [h, y]),
            N = (0, s.useCallback)(
              (e) => {
                var t;
                e || h.reset(),
                  null === (t = y.onOpenChange) || void 0 === t || t.call(y, e);
              },
              [h, y],
            );
          h.isRejected &&
            (g(),
            m(
              (0, n.jsx)(c.Q, {
                error: u({ id: "error-messages.error-during-action" }),
              }),
              { containerId: r.W$x.ERROR },
            ));
          let L = h.fullTrack,
            R = null == L ? void 0 : L.explicitDisclaimer,
            M = (0, s.useMemo)(() => {
              var e;
              if (L)
                return (0, n.jsxs)("span", {
                  children: [
                    L.title,
                    L.version &&
                      (0, n.jsx)("span", {
                        className: p().version,
                        children: L.version,
                      }),
                    R &&
                      (0, n.jsx)(c.$i, {
                        className: (0, i.W)(p().explicitMark, p().important, {
                          [p().explicit]: !L.isTrackNonMusic,
                        }),
                        getDescriptionTexts:
                          null === (e = h.fullTrack) || void 0 === e
                            ? void 0
                            : e.getDescriptionTexts,
                        size: "xxs",
                        variant: R,
                      }),
                  ],
                });
            }, [
              L,
              R,
              null === (a = h.fullTrack) || void 0 === a
                ? void 0
                : a.getDescriptionTexts,
            ]),
            B = (0, s.useMemo)(() => {
              var e;
              return (null == L ? void 0 : L.type) === I.V.AUDIOBOOK
                ? (0, n.jsx)(O, {})
                : (null == L ? void 0 : L.isTrackPodcast) ||
                    (null == L
                      ? void 0
                      : null === (e = L.mainAlbum) || void 0 === e
                        ? void 0
                        : e.isPodcast)
                  ? (0, n.jsx)(z, {})
                  : void 0;
            }, [L]),
            w = (0, s.useMemo)(() => {
              var e;
              return (
                null === (e = h.credits) || void 0 === e ? void 0 : e.length
              )
                ? h.credits.map((e) => {
                    let { title: t, value: o } = e;
                    return (0, n.jsx)(x, { title: t, description: o }, t);
                  })
                : null;
            }, [h.credits]),
            P = (0, s.useMemo)(() => {
              var e;
              if (
                (null === (e = h.fullTrack) || void 0 === e
                  ? void 0
                  : e.major) &&
                T
              ) {
                let e = h.fullTrack.major.name;
                return (0, n.jsx)(x, { title: "Major", description: e }, e);
              }
              return null;
            }, [
              null === (_ = h.fullTrack) || void 0 === _ ? void 0 : _.major,
              T,
            ]);
          return (0, n.jsx)(d.u, {
            placement: j ? "default" : "right",
            open: y.isOpened,
            onClose: g,
            contentClassName: p().modalContent,
            title: M,
            headerClassName: p().header,
            className: (0, i.W)(p().root, {
              [p().root_withFullscreen]: k.modal.isOpened,
              [p().root_withCustomControls]: b || f,
            }),
            overlayClassName: p().overlay,
            onOpenChange: N,
            labelClose: u({ id: "interface-actions.close" }),
            portalNode: j || k.modal.isOpened ? null : v,
            containerProps: (0, W.BA)(W.Br.track.TRACK_ABOUT_MODAL),
            closeButtonProps: (0, W.BA)(
              W.Br.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
            ),
            children: (0, n.jsxs)("div", {
              className: p().content,
              children: [
                (h.isTrackLoading || h.isTrackRejected) &&
                  (0, n.jsx)(c.AH, { textClassName: p().textShimmer }),
                B,
                (h.isCreditsLoading || h.isCreditsRejected) &&
                  (0, n.jsx)(c.AH, { textClassName: p().textShimmer }),
                w,
                P,
              ],
            }),
          });
        }),
        Y = (0, a.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, r.oR4)();
          return e ? null : (0, n.jsx)(F, {});
        });
      var Z = o(1150),
        V = o(7337),
        G = o.n(V);
      let $ = (0, a.Pi)(() => {
        var e;
        let { formatMessage: t } = (0, l.Z)(),
          { notify: o } = (0, r.d$W)(),
          { contentRef: a } = (0, r.$Y6)(),
          {
            trackLyrics: _,
            settings: { isMobile: u },
            fullscreenPlayer: p,
          } = (0, r.oR4)(),
          { modal: m, track: x } = _,
          v = null == x ? void 0 : x.explicitDisclaimer;
        (0, s.useEffect)(() => {
          x && x.isLyricsAvailable && _.modal.isOpened && _.getLyrics(x.id);
        }, [x, _, _.modal.isOpened]),
          (0, s.useEffect)(() => {
            m.isOpened &&
              x &&
              _.isResolved &&
              _.sendViews({ trackId: x.id, albumId: x.albumId });
          }, [x, _, _.isResolved, m.isOpened]);
        let h = (0, s.useCallback)(
          (e) => {
            var t;
            null === (t = m.onOpenChange) || void 0 === t || t.call(m, e);
          },
          [m],
        );
        _.isRejected &&
          _.modal.isOpened &&
          o(
            (0, n.jsx)(c.Q, {
              error: t({ id: "error-messages.error-during-action" }),
            }),
            { containerId: r.W$x.ERROR },
          );
        let j = (0, s.useMemo)(() => {
          if (x)
            return (0, n.jsxs)("span", {
              ...(0, W.BA)(W.QM.content.TRACK_LYRICS_TITLE),
              children: [
                x.title,
                x.version &&
                  (0, n.jsx)("span", {
                    className: G().version,
                    children: x.version,
                  }),
                v &&
                  (0, n.jsx)(c.$i, {
                    className: (0, i.W)(G().explicitMark, G().important),
                    getDescriptionTexts: x.getDescriptionTexts,
                    size: "xxs",
                    variant: v,
                  }),
              ],
            });
        }, [
          x,
          null == x ? void 0 : x.title,
          null == x ? void 0 : x.version,
          v,
        ]);
        return (0, n.jsx)(d.u, {
          size: "fitContent",
          placement: u ? "default" : "right",
          open: m.isOpened,
          onOpenChange: h,
          onClose: m.close,
          className: G().root,
          contentClassName: G().modalContent,
          portalNode: u || p.modal.isOpened ? null : a,
          title: j,
          headerClassName: G().header,
          overlayClassName: G().overlay,
          labelClose: t({ id: "interface-actions.close" }),
          restoreFocus: !0,
          containerProps: (0, W.BA)(W.QM.content.TRACK_LYRICS_MODAL),
          closeButtonProps: (0, W.BA)(W.QM.content.TRACK_LYRICS_CLOSE_BUTTON),
          lockScroll: u,
          children: (0, n.jsx)("div", {
            className: G().content,
            ...(0, W.BA)(W.QM.content.TRACK_LYRICS_TEXT),
            children: (0, n.jsx)(Z.Zz, {
              lyrics: _.lyrics,
              authors: _.writersNames,
              source:
                null === (e = _.major) || void 0 === e ? void 0 : e.prettyName,
              isShimmerVisible: _.isShimmerVisible,
              isShimmerActive: _.isLoading,
            }),
          }),
        });
      });
    },
    52861: function (e, t, o) {
      "use strict";
      o.d(t, {
        m: function () {
          return C;
        },
      });
      var n = o(75441),
        a = o(32358),
        r = o(62569),
        i = o(15937),
        s = o(93093),
        l = o(26669),
        d = o(14218),
        c = o(39054),
        _ = o(67126),
        u = o(17392),
        p = o(87660),
        m = o(13534),
        x = o(97141),
        v = o(98730),
        h = o(68208),
        j = o(73870),
        b = o.n(j);
      let f = (0, r.Pi)(() => {
          let {
              modals: { crackdownModal: e },
            } = (0, m.oR4)(),
            t = (0, v.useRouter)(),
            o = (0, m.uK4)().get(m.xit),
            r = (0, s.W)(() => {
              e.close(), o.authorizationUrl && t.push(o.authorizationUrl);
            });
          return (0, n.jsx)(h.Button, {
            className: (0, a.W)(b().button, b().important),
            variant: "default",
            color: "secondary",
            isBlock: !0,
            radius: "xxxl",
            size: "xs",
            onClick: r,
            children: (0, n.jsx)(u.Caption, {
              className: b().buttonMainText,
              variant: "span",
              children: (0, n.jsx)(i.Z, {
                id: "buy-subscription.already-in-plus",
                values: { nbsp: "\xa0" },
              }),
            }),
          });
        }),
        k = "crackdown-buy-subscription-button",
        C = (0, r.Pi)((e) => {
          let { withAlreadyInPlusButton: t } = e,
            {
              user: o,
              modals: { crackdownModal: r },
            } = (0, m.oR4)(),
            [v, h] = (0, l.z)(),
            {
              mainText: j,
              mainTextA11y: C,
              additionText: y,
              isShimmerVisible: A,
              isShimmerActive: T,
              openPaymentWidgetModal: g,
              saveOfferAndAuthorize: N,
            } = (0, p.xU)({
              storeName: "music",
              offerElement: { element: v, intersectionPropertyId: k },
            }),
            L = (0, s.W)(() => {
              if ((r.close(), !o.isAuthorized)) {
                N();
                return;
              }
              g();
            }),
            R = (0, d.V)(() =>
              A
                ? (0, n.jsx)(x.ZD, {
                    className: (0, a.W)(b().button, b().important),
                    isActive: T,
                  })
                : (0, n.jsxs)(x.I7, {
                    className: (0, a.W)(b().button, b().important),
                    color: "plus",
                    size: "xs",
                    ref: h,
                    "data-intersection-property-id": k,
                    onClick: L,
                    "aria-label": C,
                    children: [
                      (0, n.jsx)(u.Caption, {
                        variant: "div",
                        className: b().buttonMainText,
                        children: j,
                      }),
                      y &&
                        (0, n.jsx)(u.Caption, {
                          variant: "div",
                          size: "m",
                          weight: "normal",
                          children: y,
                        }),
                    ],
                  }),
            );
          return (0, n.jsxs)(x.bf, {
            open: r.isOpened,
            onClose: r.close,
            children: [
              (0, n.jsx)("div", {
                className: x.GR.growContainer,
                children: (0, n.jsx)(c.Image, {
                  src: "https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig",
                  srcSet:
                    "https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x",
                }),
              }),
              (0, n.jsxs)("div", {
                className: x.GR.text,
                "aria-hidden": !0,
                children: [
                  (0, n.jsx)(u.Heading, {
                    variant: "h1",
                    size: "xl",
                    className: x.GR.title,
                    children: (0, n.jsx)(i.Z, {
                      id: "crackdown.title",
                      values: { br: (0, n.jsx)("br", {}), nbsp: "\xa0" },
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    variant: "span",
                    size: "m",
                    className: x.GR.description,
                    children: (0, n.jsx)(i.Z, {
                      id: "crackdown.description",
                      values: { br: (0, n.jsx)("br", {}), nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(_.y, {
                children: [
                  (0, n.jsx)(u.Heading, {
                    variant: "h1",
                    children: (0, n.jsx)(i.Z, {
                      id: "crackdown.title",
                      values: { br: " ", nbsp: "\xa0" },
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    variant: "div",
                    children: (0, n.jsx)(i.Z, {
                      id: "crackdown.description",
                      values: { br: " ", nbsp: "\xa0" },
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: x.GR.buttons,
                children: [R, t && (0, n.jsx)(f, {})],
              }),
            ],
          });
        });
    },
    86800: function (e) {
      e.exports = {
        root: "CommonLayout_root__WC_W1",
        content: "CommonLayout_content__zy_Ja",
        content_withPlayerBar: "CommonLayout_content_withPlayerBar__wTpoS",
        playerBar: "CommonLayout_playerBar__zXRxq",
        compositePlayerBar: "CommonLayout_compositePlayerBar__hjZRp",
      };
    },
    60323: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
        barBelow: "DefaultLayout_barBelow__y6PFU",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_linux:
          "DefaultLayout_navbar_application_linux__ejlGn",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
      };
    },
    97384: function (e) {
      e.exports = {
        root: "WithTopBanner_root__P__x3",
        banner: "WithTopBanner_banner__x1Ia2",
        banner_canShow: "WithTopBanner_banner_canShow__5KA30",
        content: "WithTopBanner_content__6Vh7a",
      };
    },
    87164: function (e) {
      e.exports = { root: "LayoutNotificationContainers_root__5HClw" };
    },
    78895: function (e) {
      e.exports = {
        root: "PromoLandingLayout_root__nFZZ7",
        playerBar: "PromoLandingLayout_playerBar__7tyD3",
        animatedPlayer_enter: "PromoLandingLayout_animatedPlayer_enter__0MM1u",
        animatedPlayer_enter_active:
          "PromoLandingLayout_animatedPlayer_enter_active__mEGFp",
        "enter-fade": "PromoLandingLayout_enter-fade__fGSAV",
        "enter-move": "PromoLandingLayout_enter-move__800PQ",
        animatedPlayer_exit: "PromoLandingLayout_animatedPlayer_exit__D9q3r",
        animatedPlayer_exit_active:
          "PromoLandingLayout_animatedPlayer_exit_active__VnBYL",
        "exit-fade": "PromoLandingLayout_exit-fade__4rLUP",
        "exit-move": "PromoLandingLayout_exit-move__cg_8c",
      };
    },
    87814: function (e) {
      e.exports = {
        root: "SideAdvertBanner_root__hT1jJ",
        root_hidden: "SideAdvertBanner_root_hidden__Yg__R",
        contentWrapper: "SideAdvertBanner_contentWrapper__5255E",
        content: "SideAdvertBanner_content__nDGWG",
        disableAdsButton: "SideAdvertBanner_disableAdsButton__is8g1",
      };
    },
    96079: function (e) {
      e.exports = {
        root: "TopAdvertBanner_root__aAZ0o",
        root_hidden: "TopAdvertBanner_root_hidden__l3FTx",
        advert: "TopAdvertBanner_advert__LjAj_",
      };
    },
    24063: function (e) {
      e.exports = {
        root: "ClipAboutModalDesktop_root__F8UU5",
        root_withFullscreen: "ClipAboutModalDesktop_root_withFullscreen__nTO1X",
        root_withWindows: "ClipAboutModalDesktop_root_withWindows__kl4sc",
        header: "ClipAboutModalDesktop_header__at6X6",
        modalContent: "ClipAboutModalDesktop_modalContent__Rp_ON",
        explicitMark: "ClipAboutModalDesktop_explicitMark__SLwRj",
        important: "ClipAboutModalDesktop_important__LkqWo",
        content: "ClipAboutModalDesktop_content__0dUY1",
        titleShimmer: "ClipAboutModalDesktop_titleShimmer__zTtu_",
      };
    },
    77707: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        main: "Content_main__8_wIa",
        root: "Content_root__IsH8s",
        sideBanner: "Content_sideBanner__Na07D",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    19086: function (e) {
      e.exports = {
        root: "PromoLandingContent_root__QrRKX",
        main: "PromoLandingContent_main__ELiBu",
      };
    },
    47476: function (e) {
      e.exports = {
        root: "TrackAboutModalDesktop_root__NHeeO",
        root_withFullscreen:
          "TrackAboutModalDesktop_root_withFullscreen__jOu4X",
        root_withCustomControls:
          "TrackAboutModalDesktop_root_withCustomControls__b2JDR",
        header: "TrackAboutModalDesktop_header__7Zl2n",
        modalContent: "TrackAboutModalDesktop_modalContent__yf4i5",
        infoBlock: "TrackAboutModalDesktop_infoBlock__egLLX",
        infoTitle: "TrackAboutModalDesktop_infoTitle__YHdNz",
        link: "TrackAboutModalDesktop_link__7832F",
        explicitMark: "TrackAboutModalDesktop_explicitMark__tgVyh",
        important: "TrackAboutModalDesktop_important__tCPvh",
        version: "TrackAboutModalDesktop_version__m0z2v",
        explicit: "TrackAboutModalDesktop_explicit__FGMHf",
        content: "TrackAboutModalDesktop_content__eEGZu",
        artistLink: "TrackAboutModalDesktop_artistLink__ao_zU",
        artists: "TrackAboutModalDesktop_artists__2SlTA",
        overlay: "TrackAboutModalDesktop_overlay__7cEGE",
        textShimmer: "TrackAboutModalDesktop_textShimmer__r5_AA",
        text: "TrackAboutModalDesktop_text__zcpo0",
      };
    },
    7337: function (e) {
      e.exports = {
        root: "TrackLyricsModal_root__KsVRf",
        header: "TrackLyricsModal_header__nWar3",
        modalContent: "TrackLyricsModal_modalContent__uYdL2",
        content: "TrackLyricsModal_content__Cstzi",
        explicitMark: "TrackLyricsModal_explicitMark__eL04d",
        important: "TrackLyricsModal_important__0Ie9h",
        version: "TrackLyricsModal_version__l9sxZ",
        overlay: "TrackLyricsModal_overlay__0Ehwu",
      };
    },
    73870: function (e) {
      e.exports = {
        button: "CrackdownModal_button__IWTpu",
        important: "CrackdownModal_important__eKBtD",
        buttonMainText: "CrackdownModal_buttonMainText__pAlET",
      };
    },
    32116: function (e) {
      e.exports = {
        wrapper: "RedAlert_wrapper__rGvGN",
        root: "RedAlert_root__1VZOr",
        root_light: "RedAlert_root_light__j7Kr3",
        text: "RedAlert_text__UB_Bq",
        button: "RedAlert_button__Ho43z",
      };
    },
  },
]);
