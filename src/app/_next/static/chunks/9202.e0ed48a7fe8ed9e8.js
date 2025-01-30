(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9202],
  {
    29599: function (e, i, t) {
      "use strict";
      t.d(i, {
        C: function () {
          return l;
        },
      });
      var n = t(21535);
      let o = (e, i) => {
          let t = n.env.ASSET_PREFIX || "";
          return ""
            .concat(
              t,
              "/media/vibe_animation_fallback/vibe_animation_fallback_",
            )
            .concat(e, ".")
            .concat(i);
        },
        l = (e) => ({ posterSrc: o(e, "jpeg"), videoSrc: o(e, "mp4") });
    },
    39202: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          VibeAnimation: function () {
            return P;
          },
        });
      var n = t(65301),
        o = t(9695),
        l = t(96233),
        a = t(91207),
        s = t(55975),
        r = t(19489),
        c = t(91878),
        d = t(51304),
        u = t(86348),
        v = t(78671),
        m = t(58997),
        b = t(29599),
        f = t(33387),
        k = t(38593),
        _ = t(44729),
        y = t(82036),
        L = t(81437),
        p = t(29778),
        M = t(98863),
        E = t.n(M);
      let A = (0, l.Pi)((e) => {
          let { closeToast: i } = e,
            { fullscreenPlayer: t } = (0, m.oR4)(),
            o = (0, a.useCallback)(() => {
              t.modal.isOpened && t.modal.close();
            }, [t]),
            l = (0, a.useMemo)(
              () =>
                (0, n.jsxs)("div", {
                  className: E().message,
                  children: [
                    (0, n.jsx)(L.Caption, {
                      className: E().title,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: (0, n.jsx)(_.Z, {
                        id: "lite-version.notification-title",
                      }),
                    }),
                    (0, n.jsx)(p.rU, {
                      className: E().link,
                      href: "/settings",
                      onClick: o,
                      children: (0, n.jsx)(L.Caption, {
                        className: E().linkText,
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: (0, n.jsx)(_.Z, {
                          id: "lite-version.go-to-settings",
                        }),
                      }),
                    }),
                  ],
                }),
              [o],
            );
          return (0, n.jsx)(p.Yj, {
            cover: (0, n.jsx)(y.Icon, {
              className: E().icon,
              size: "xs",
              variant: "liteVersion",
            }),
            message: l,
            closeToast: i,
          });
        }),
        g = "vibeAnimationDegradationLevel",
        x = null,
        T = (e) => {
          let { renderer: i, fallback: t, isEnabled: o } = e,
            l = (0, a.useRef)(0),
            s = (0, k.s)(),
            { notify: r } = (0, m.d$W)(),
            { settings: c } = (0, m.oR4)(),
            [d, u] = (0, a.useState)(!1),
            b = (0, a.useMemo)(() => (x || (x = new v.T6()), x), []),
            _ = (0, f.W)((e) => {
              if (e >= 20) {
                l.current = 0;
                return;
              }
              if ((l.current++, !(l.current < 3))) {
                if (
                  ((l.current = 0),
                  !(null == i ? void 0 : i.isLiteAnimationEnabled))
                ) {
                  null == i || i.enableLiteAnimationWithTransition(),
                    s.count("liteAnimation", g);
                  return;
                }
                i.isFallbackEnabled ||
                  (i.enableFallbackWithTransition(),
                  s.count("fallback", g),
                  c.setLiteVersionMode(m.mNU.ENABLED, !0),
                  r((0, n.jsx)(A, {}), {
                    containerId: m.W$x.INFO,
                    autoClose: !1,
                  }));
              }
            }),
            y = (0, f.W)(() => {
              u("visible" === document.visibilityState);
            });
          (0, a.useEffect)(
            () => (
              y(),
              document.addEventListener("visibilitychange", y),
              () => {
                document.removeEventListener("visibilitychange", y);
              }
            ),
            [y],
          ),
            (0, a.useEffect)(() => {
              null == i || i.setFallback(t);
            }, [t, i]),
            (0, a.useEffect)(
              () => (
                !c.isLiteVersionModeAvailableForToggle &&
                o &&
                (null == i ? void 0 : i.isAnimationEnabled) &&
                d
                  ? b.startMeasuring(_)
                  : (b.stopMeasuring(), (l.current = 0)),
                () => {
                  b.stopMeasuring();
                }
              ),
              [
                b,
                _,
                o,
                d,
                null == i ? void 0 : i.isAnimationEnabled,
                c.isLiteVersionModeAvailableForToggle,
                c.liteVersionMode,
              ],
            );
        },
        N = (e) => {
          var i, t;
          let [n, o] = (0, a.useState)({}),
            { sonataState: l } = (0, m.oR4)();
          (0, a.useEffect)(() => {
            if (l.contextType === r.A.Vibe) {
              var i, t, a, s;
              n.id ===
                (null === (i = l.entityMeta) || void 0 === i ? void 0 : i.id) &&
                !n.isLiked &&
                (null === (s = l.entityMeta) || void 0 === s
                  ? void 0
                  : s.isLiked) &&
                e(),
                o({
                  id:
                    null === (t = l.entityMeta) || void 0 === t ? void 0 : t.id,
                  isLiked:
                    null === (a = l.entityMeta) || void 0 === a
                      ? void 0
                      : a.isLiked,
                });
            }
          }, [
            l.contextType,
            null === (i = l.entityMeta) || void 0 === i ? void 0 : i.id,
            null === (t = l.entityMeta) || void 0 === t ? void 0 : t.isLiked,
            n.id,
            n.isLiked,
            e,
          ]);
        };
      var V = t(28020),
        C = t.n(V);
      let I = "vibe-animation",
        h = async () =>
          new Promise((e) => {
            setTimeout(() => {
              e();
            }, 2e3);
          }),
        P = (0, l.Pi)((e) => {
          var i, t, l, f, k, _, y;
          let { className: L } = e,
            p = (0, a.useRef)(null),
            [M, E] = (0, c.z)(),
            { isIntersecting: A } =
              null !== (y = (0, d.S1)([p])[I]) && void 0 !== y ? y : {},
            {
              sonataState: g,
              user: x,
              settings: V,
              experiments: P,
            } = (0, m.oR4)(),
            { theme: j } = (0, m.FgM)(),
            S = (0, m.wLl)(),
            F = (0, m.jpI)(),
            R = P.checkExperiment(m.peG.WebNextLiteVersion, "on"),
            W = g.status === u.Xz.PLAYING && (g.contextType === r.A.Vibe || window.VIBE_ANIMATION_PLAY_ON_ANY_ENTITY()),
            B = (0, a.useCallback)(
              async (e) => (e.classList.add(C().root_visible), h()),
              [],
            ),
            U = (0, a.useCallback)(
              async (e) => (e.classList.remove(C().root_visible), h()),
              [],
            ),
            w = (0, a.useMemo)(() => (0, b.C)(j), [j]);
          return (
            T({ renderer: M, fallback: w, isEnabled: R }),
            (0, a.useEffect)(() => {
              var e, i;
              if (!p.current) return;
              let t = new v.dr({
                container: p.current,
                fallback: w,
                analyser: null == F ? void 0 : F.analyser,
                collectionHue: x.collectionHue,
                onError: S.error.bind(S),
                useFallback: V.isLiteVersionModeEnabled && R,
                showVibeAnimationWithTransition: B,
                hideVibeAnimationWithTransition: U,
              });
              E(t);
              let n =
                  null === (i = g.entityMeta) || void 0 === i
                    ? void 0
                    : null === (e = i.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                o = x.collectionHue;
              return (
                t.applySettings({ hue: n, collectionHue: o }),
                () => {
                  t.destroy();
                }
              );
            }, []),
            (0, a.useEffect)(() => {
              var e, i, t, n, o, l;
              let a =
                  null === (i = g.entityMeta) || void 0 === i
                    ? void 0
                    : null === (e = i.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                s =
                  null === (n = g.entityMeta) || void 0 === n
                    ? void 0
                    : null === (t = n.trackParameters) || void 0 === t
                      ? void 0
                      : t.energy,
                r =
                  null === (l = g.entityMeta) || void 0 === l
                    ? void 0
                    : null === (o = l.trackParameters) || void 0 === o
                      ? void 0
                      : o.userCollectionHue;
              r && x.setUserCollectionHue(r),
                W
                  ? null == M ||
                    M.playAnimation({ hue: a, collectionHue: r, energy: s })
                  : null == M || M.idleAnimation();
            }, [
              x,
              W,
              null === (t = g.entityMeta) || void 0 === t
                ? void 0
                : null === (i = t.trackParameters) || void 0 === i
                  ? void 0
                  : i.hue,
              null === (f = g.entityMeta) || void 0 === f
                ? void 0
                : null === (l = f.trackParameters) || void 0 === l
                  ? void 0
                  : l.energy,
              null === (_ = g.entityMeta) || void 0 === _
                ? void 0
                : null === (k = _.trackParameters) || void 0 === k
                  ? void 0
                  : k.userCollectionHue,
              M,
            ]),
            (0, a.useEffect)(() => {
              let e = j === m.Q2A.Dark ? 0.0705 : 0.9607;
              null == M || M.applySettings({ backgroundColor: e });
            }, [M, j]),
            (0, a.useEffect)(() => {
              M &&
                (A
                  ? M.enableRender(v.nT.BLOCK_VISIBILITY)
                  : M.disableRender(v.nT.BLOCK_VISIBILITY));
            }, [A, M]),
            N(
              (0, a.useCallback)(() => {
                null == M || M.likeAnimation();
              }, [M]),
            ),
            (0, n.jsx)("div", {
              className: (0, o.W)(C().root, L),
              "data-intersection-property-id": I,
              ref: p,
              ...(0, s.BA)(s.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        });
    },
    98863: function (e) {
      e.exports = {
        message: "NotificationLiteVersion_message__IT6FA",
        icon: "NotificationLiteVersion_icon__T4E8d",
        title: "NotificationLiteVersion_title__UPCcu",
        linkText: "NotificationLiteVersion_linkText__L6r3P",
        link: "NotificationLiteVersion_link__cQUUY",
      };
    },
    28020: function (e) {
      e.exports = {
        root: "VibeAnimation_root__UKMJy",
        root_visible: "VibeAnimation_root_visible__S7kXl",
      };
    },
  },
]);
