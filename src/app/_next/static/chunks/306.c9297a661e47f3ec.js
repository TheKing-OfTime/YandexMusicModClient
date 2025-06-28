(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [306, 4823],
  {
    50306: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VibeAnimation: function () {
            return Z;
          },
        });
      var i,
        o,
        r = n(75441),
        l = n(62569),
        a = n(65067),
        s = n(80658),
        u = n(8532),
        c = n(48179),
        d = { out: "out-in", in: "in-out" },
        v = function (e, t, n) {
          return function () {
            var i;
            e.props[t] && (i = e.props)[t].apply(i, arguments), n();
          };
        },
        f =
          (((i = {})[d.out] = function (e) {
            var t = e.current,
              n = e.changeState;
            return a.cloneElement(t, {
              in: !1,
              onExited: v(t, "onExited", function () {
                n(u.d0, null);
              }),
            });
          }),
          (i[d.in] = function (e) {
            var t = e.current,
              n = e.changeState,
              i = e.children;
            return [
              t,
              a.cloneElement(i, {
                in: !0,
                onEntered: v(i, "onEntered", function () {
                  n(u.d0);
                }),
              }),
            ];
          }),
          i),
        m =
          (((o = {})[d.out] = function (e) {
            var t = e.children,
              n = e.changeState;
            return a.cloneElement(t, {
              in: !0,
              onEntered: v(t, "onEntered", function () {
                n(u.cn, a.cloneElement(t, { in: !0 }));
              }),
            });
          }),
          (o[d.in] = function (e) {
            var t = e.current,
              n = e.children,
              i = e.changeState;
            return [
              a.cloneElement(t, {
                in: !1,
                onExited: v(t, "onExited", function () {
                  i(u.cn, a.cloneElement(n, { in: !0 }));
                }),
              }),
              a.cloneElement(n, { in: !0 }),
            ];
          }),
          o),
        _ = (function (e) {
          function t() {
            for (var t, n = arguments.length, i = Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                status: u.cn,
                current: null,
              }),
              (t.appeared = !1),
              (t.changeState = function (e, n) {
                void 0 === n && (n = t.state.current),
                  t.setState({ status: e, current: n });
              }),
              t
            );
          }
          (0, s.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.appeared = !0;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n, i;
              return null == e.children
                ? { current: null }
                : t.status === u.d0 && e.mode === d.in
                  ? { status: u.d0 }
                  : t.current &&
                      !(
                        (n = t.current) === (i = e.children) ||
                        (a.isValidElement(n) &&
                          a.isValidElement(i) &&
                          null != n.key &&
                          n.key === i.key)
                      )
                    ? { status: u.Ix }
                    : { current: a.cloneElement(e.children, { in: !0 }) };
            }),
            (n.render = function () {
              var e,
                t = this.props,
                n = t.children,
                i = t.mode,
                o = this.state,
                r = o.status,
                l = o.current,
                s = {
                  children: n,
                  current: l,
                  changeState: this.changeState,
                  status: r,
                };
              switch (r) {
                case u.d0:
                  e = m[i](s);
                  break;
                case u.Ix:
                  e = f[i](s);
                  break;
                case u.cn:
                  e = l;
              }
              return a.createElement(
                c.Z.Provider,
                { value: { isMounting: !this.appeared } },
                e,
              );
            }),
            t
          );
        })(a.Component);
      (_.propTypes = {}), (_.defaultProps = { mode: d.out });
      var p = n(64451),
        b = n(93093),
        E = n(14218),
        h = n(13534),
        x = n(90992),
        g = n(19684),
        y = n(15937),
        k = n(69756),
        A = n(17392),
        M = n(97141),
        V = n(19588),
        L = n.n(V);
      let P = (0, l.Pi)((e) => {
          let { closeToast: t } = e,
            { fullscreenPlayer: n } = (0, h.oR4)(),
            i = (0, a.useCallback)(() => {
              n.modal.isOpened && n.modal.close();
            }, [n]),
            o = (0, a.useMemo)(
              () =>
                (0, r.jsxs)("div", {
                  className: L().message,
                  children: [
                    (0, r.jsx)(A.Caption, {
                      className: L().title,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: (0, r.jsx)(y.Z, {
                        id: "lite-version.notification-title",
                      }),
                    }),
                    (0, r.jsx)(M.rU, {
                      className: L().link,
                      href: "/settings",
                      onClick: i,
                      children: (0, r.jsx)(A.Caption, {
                        className: L().linkText,
                        variant: "div",
                        type: "controls",
                        size: "m",
                        children: (0, r.jsx)(y.Z, {
                          id: "lite-version.go-to-settings",
                        }),
                      }),
                    }),
                  ],
                }),
              [i],
            );
          return (0, r.jsx)(M.Yj, {
            cover: (0, r.jsx)(k.Icon, {
              className: L().icon,
              size: "xs",
              variant: "liteVersion",
            }),
            message: o,
            closeToast: t,
          });
        }),
        j = "vibeAnimationDegradationLevel",
        N = null,
        R = (e) => {
          let { isEnabled: t } = e,
            n = (0, a.useRef)(0),
            i = (0, g.s)(),
            { notify: o } = (0, h.d$W)(),
            { settings: l } = (0, h.oR4)(),
            [s, u] = (0, a.useState)(!1),
            [c, d] = (0, a.useState)(x.pi.DEFAULT),
            v = (0, a.useMemo)(() => (N || (N = new x.T6()), N), []),
            f = (0, b.W)((e) => {
              var t, a;
              if (
                (null === (a = window.Ya) ||
                  void 0 === a ||
                  null === (t = a.Rum) ||
                  void 0 === t ||
                  t.sendTimeMark("my-vibe-animation-fps", e.toFixed(1)),
                e >= 20)
              ) {
                n.current = 0;
                return;
              }
              if ((n.current++, !(n.current < 3))) {
                if (((n.current = 0), c !== x.pi.LITE)) {
                  d(x.pi.LITE), i.count("liteAnimation", j);
                  return;
                }
                s ||
                  (u(!0),
                  i.count("fallback", j),
                  l.setLiteVersionMode(h.mNU.ENABLED, !0),
                  o((0, r.jsx)(P, {}), {
                    containerId: h.W$x.INFO,
                    autoClose: !1,
                  }));
              }
            });
          return (
            (0, a.useEffect)(
              () => (
                l.isLiteVersionModeAvailableForToggle || !t || s
                  ? (v.stopMeasuring(), (n.current = 0))
                  : v.startMeasuring(f),
                () => {
                  v.stopMeasuring();
                }
              ),
              [v, f, t, s, l.isLiteVersionModeAvailableForToggle],
            ),
            { isFallback: s, vibeAnimationState: c }
          );
        },
        S = () => {
          let e = (0, g.s)(),
            t = (0, a.useRef)(!0);
          (0, a.useEffect)(() => {
            if (!t.current) return;
            let n = document.createElement("canvas");
            try {
              let i = n.getContext("webgl2") || n.getContext("webgl");
              if (!i) return;
              let o = i.getExtension("WEBGL_debug_renderer_info");
              if (!o) return;
              let r = i.getParameter(o.UNMASKED_RENDERER_WEBGL);
              r && (e.count(r, "gpuRenderer"), (t.current = !1));
            } catch (e) {}
            n.remove();
          }, [e]);
        };
      var T = n(65528),
        w = n.n(T),
        C = n(84823),
        I = n(32358),
        F = n(35846),
        W = n(26669);
      let D = () => {};
      var O = n(84638);
      let U = (e) => {
        var t, n;
        let [i, o] = (0, a.useState)({}),
          { sonataState: r } = (0, h.oR4)();
        (0, a.useEffect)(() => {
          if (r.contextType === O.A.Vibe) {
            var t, n, l, a;
            i.id ===
              (null === (t = r.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !i.isLiked &&
              (null === (a = r.entityMeta) || void 0 === a
                ? void 0
                : a.isLiked) &&
              e(),
              o({
                id: null === (n = r.entityMeta) || void 0 === n ? void 0 : n.id,
                isLiked:
                  null === (l = r.entityMeta) || void 0 === l
                    ? void 0
                    : l.isLiked,
              });
          }
        }, [
          r.contextType,
          null === (t = r.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (n = r.entityMeta) || void 0 === n ? void 0 : n.isLiked,
          i.id,
          i.isLiked,
          e,
        ]);
      };
      n(68208), n(7323);
      var B = n(29578);
      let H = (0, l.Pi)((e) => {
          var t, n, i, o, l, s, u, c;
          let {
              vibeAnimationState: d,
              isIntersecting: v,
              forwardRef: f,
              className: m,
            } = e,
            [_, p] = (0, W.z)(),
            [E, g] = (0, W.z)(),
            [y, k] = (0, W.z)(),
            [A, M] = (0, a.useState)(!1),
            { user: V, sonataState: L, settings: P } = (0, h.oR4)(),
            j = (0, h.wLl)(),
            { theme: N } = (0, h.FgM)(),
            R = (0, h.jpI)(),
            S = (0, b.W)((e) => {
              e.data.type === x.u4.ERROR && (M(!0), j.error(e.data.payload));
            }),
            T = (0, b.W)(() => {
              M(!0);
            }),
            O = L.isPlaying && L.isVibeContext;
          U(
            (0, b.W)(() => {
              null == _ || _.likeAnimation();
            }),
          );
          let B = (0, b.W)(() => {
            if (!(null == R ? void 0 : R.analyser)) return;
            let [e, t, n] = R.analyser.getAverageFrequencies([
              { low: 0, high: 250 },
              { low: 500, high: 2e3 },
              { low: 2e3, high: 4e3 },
            ]);
            null == _ ||
              _.updateAudioFrequencies({
                low: null != e ? e : 0,
                middle: null != t ? t : 0,
                high: null != n ? n : 0,
              });
          });
          (0, a.useEffect)(() => {
            var e, t;
            if (!E || _) return;
            if (!E.transferControlToOffscreen) {
              T();
              return;
            }
            let n = E.transferControlToOffscreen(),
              i = new x._e({
                offscreenCanvas: n,
                state: d,
                collectionHue: V.collectionHue,
                shaderOptions: D(),
                onMessage: S,
                onError: T,
              });
            p(i), k(new x.vB(x.eS, B));
            let o =
                null === (t = L.entityMeta) || void 0 === t
                  ? void 0
                  : null === (e = t.trackParameters) || void 0 === e
                    ? void 0
                    : e.hue,
              r = V.collectionHue;
            i.applySettings({ hue: o, collectionHue: r });
          }, [
            y,
            E,
            T,
            S,
            k,
            p,
            null === (n = L.entityMeta) || void 0 === n
              ? void 0
              : null === (t = n.trackParameters) || void 0 === t
                ? void 0
                : t.hue,
            B,
            V.collectionHue,
            d,
            _,
          ]);
          let H = (0, b.W)(() => {
            null == _ || _.destroy(), p(null), null == y || y.stop(), k(null);
          });
          return ((0, a.useEffect)(
            () => () => {
              H();
            },
            [H],
          ),
          (0, a.useEffect)(() => {
            v && O ? null == y || y.start() : null == y || y.stop();
          }, [y, v, O, _]),
          (0, a.useEffect)(() => {
            if (_) {
              let e = N === h.Q2A.Dark ? 0.0705 : 0.9607;
              null == _ || _.applySettings({ backgroundColor: e });
            }
          }, [N, _]),
          (0, a.useEffect)(() => {
            var e, t, n, i, o, r;
            let l =
                null === (t = L.entityMeta) || void 0 === t
                  ? void 0
                  : null === (e = t.trackParameters) || void 0 === e
                    ? void 0
                    : e.hue,
              a =
                null === (i = L.entityMeta) || void 0 === i
                  ? void 0
                  : null === (n = i.trackParameters) || void 0 === n
                    ? void 0
                    : n.energy,
              s =
                null === (r = L.entityMeta) || void 0 === r
                  ? void 0
                  : null === (o = r.trackParameters) || void 0 === o
                    ? void 0
                    : o.userCollectionHue;
            s && V.setUserCollectionHue(s),
              O
                ? null == _ ||
                  _.playAnimation({ hue: l, energy: a, collectionHue: s })
                : null == _ || _.idleAnimation();
          }, [
            O,
            null === (o = L.entityMeta) || void 0 === o
              ? void 0
              : null === (i = o.trackParameters) || void 0 === i
                ? void 0
                : i.energy,
            null === (s = L.entityMeta) || void 0 === s
              ? void 0
              : null === (l = s.trackParameters) || void 0 === l
                ? void 0
                : l.hue,
            null === (c = L.entityMeta) || void 0 === c
              ? void 0
              : null === (u = c.trackParameters) || void 0 === u
                ? void 0
                : u.userCollectionHue,
            V,
            _,
          ]),
          (0, a.useEffect)(() => {
            v ? null == _ || _.enable() : null == _ || _.disable();
          }, [v, _]),
          (0, a.useEffect)(() => {
            null == _ || _.updateLayout(P.isMobile);
          }, [P.isMobile, _]),
          (0, a.useEffect)(() => {
            d === x.pi.LITE && (null == _ || _.enableLiteAnimation());
          }, [d, _]),
          A)
            ? (0, r.jsx)(C.VibeFallbackAnimation, { ref: f, className: m })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    ref: f,
                    className: (0, I.W)(w().root, m),
                    ...(0, F.BA)(F.bG.vibeAnimation.VIBE_ANIMATION),
                    children: (0, r.jsx)("canvas", { ref: g }),
                  }),
                  !1,
                ],
              });
        }),
        z = (0, a.forwardRef)((e, t) => (0, r.jsx)(H, { forwardRef: t, ...e })),
        G = {
          enter: w().enter,
          enterActive: w().enter_active,
          enterDone: w().enter_done,
          exit: w().exit,
          exitActive: w().exit_active,
          exitDone: w().exit_done,
        },
        Z = (0, l.Pi)((e) => {
          let { isIntersecting: t = !0, className: n } = e,
            i = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            [l, s] = (0, a.useState)(!1),
            { experiments: u, settings: c } = (0, h.oR4)();
          S();
          let d = (0, b.W)(() => {
            s("visible" === document.visibilityState);
          });
          (0, a.useEffect)(
            () => (
              d(),
              document.addEventListener("visibilitychange", d),
              () => {
                document.removeEventListener("visibilitychange", d);
              }
            ),
            [d],
          );
          let v = u.checkExperiment(h.peG.WebNextLiteVersion, "on"),
            f = c.isLiteVersionModeEnabled,
            { isFallback: m, vibeAnimationState: x } = R({
              isEnabled: v && l && t,
            }),
            g = m || (v && f) || "undefined" == typeof Worker,
            y = (0, E.V)(() =>
              g
                ? (0, r.jsx)(C.VibeFallbackAnimation, { ref: o, className: n })
                : (0, r.jsx)(z, {
                    ref: i,
                    vibeAnimationState: x,
                    isIntersecting: l && t,
                    className: n,
                  }),
            );
          return (0, r.jsx)(_, {
            mode: "out-in",
            children: (0, r.jsx)(
              p.Z,
              {
                nodeRef: g ? o : i,
                timeout: 1e3,
                appear: !0,
                classNames: G,
                children: y,
              },
              g ? "fallback" : "shader",
            ),
          });
        });
    },
    84823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VibeFallbackAnimation: function () {
            return _;
          },
          VibeFallbackAnimationComponent: function () {
            return m;
          },
        });
      var i = n(75441),
        o = n(32358),
        r = n(62569),
        l = n(65067),
        a = n(35846),
        s = n(13534),
        u = n(21535);
      let c = (e, t) => {
          let n = u.env.ASSET_PREFIX || "";
          return ""
            .concat(
              n,
              "/media/vibe_animation_fallback/vibe_animation_fallback_",
            )
            .concat(e, ".")
            .concat(t);
        },
        d = (e) => {
          if (e) return { posterSrc: c(e, "jpeg"), videoSrc: c(e, "mp4") };
        };
      var v = n(65528),
        f = n.n(v);
      let m = (0, r.Pi)((e) => {
          var t, n;
          let { forwardRef: r, className: u } = e,
            c = (0, l.useRef)(null),
            { theme: v } = (0, s.FgM)(),
            { sonataState: m } = (0, s.oR4)(),
            _ = m.isPlaying && m.isVibeContext;
          (0, l.useEffect)(() => {
            var e, t, n;
            let i =
              null !==
                (n =
                  null === (t = m.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.energy) && void 0 !== n
                ? n
                : 1;
            c.current &&
              (c.current.playbackRate = _ ? Math.max(1.5 * i, 1) : 0.8);
          }, [
            _,
            null === (n = m.entityMeta) || void 0 === n
              ? void 0
              : null === (t = n.trackParameters) || void 0 === t
                ? void 0
                : t.energy,
          ]);
          let p = (0, l.useMemo)(() => d(v), [v]);
          return (0, i.jsxs)("div", {
            ref: r,
            className: (0, o.W)(f().root, f().root_visible, u),
            ...(0, a.BA)(a.bG.vibeAnimation.VIBE_ANIMATION),
            children: [
              (0, i.jsx)("video", {
                ref: c,
                preload: "metadata",
                loop: !0,
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                disablePictureInPicture: !0,
                width: 1e3,
                height: 1e3,
                src: null == p ? void 0 : p.videoSrc,
                poster: null == p ? void 0 : p.posterSrc,
              }),
              (0, i.jsx)("div", {}),
            ],
          });
        }),
        _ = (0, l.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
    },
    19588: function (e) {
      e.exports = {
        message: "NotificationLiteVersion_message__IT6FA",
        icon: "NotificationLiteVersion_icon__T4E8d",
        title: "NotificationLiteVersion_title__UPCcu",
        linkText: "NotificationLiteVersion_linkText__L6r3P",
        link: "NotificationLiteVersion_link__cQUUY",
      };
    },
    65528: function (e) {
      e.exports = {
        root: "VibeAnimation_root__UKMJy",
        root_visible: "VibeAnimation_root_visible__S7kXl",
        enter: "VibeAnimation_enter__c6tvj",
        enter_active: "VibeAnimation_enter_active__j0jOl",
        enter_done: "VibeAnimation_enter_done__Oi2Kz",
        exit: "VibeAnimation_exit__ioGXk",
        exit_active: "VibeAnimation_exit_active__D94vP",
        exit_done: "VibeAnimation_exit_done__LDXSJ",
      };
    },
    29578: function (e) {
      e.exports = {
        root: "VibeDebugPanel_root__97HZQ",
        forceTop: "VibeDebugPanel_forceTop__VY0oQ",
      };
    },
  },
]);
