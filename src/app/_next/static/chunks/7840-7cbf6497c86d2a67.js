(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7840],
  {
    70171: function (e, t, a) {
      "use strict";
      a.d(t, {
        e: function () {
          return c;
        },
      });
      var i,
        o = a(98639),
        n = {
          2067: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useScroll = void 0);
            let i = a(810);
            t.useScroll = (e) => {
              (0, i.useEffect)(
                () => (
                  window.addEventListener("scroll", e, {
                    capture: !0,
                    passive: !0,
                  }),
                  () => {
                    window.removeEventListener("scroll", e);
                  }
                ),
                [e],
              );
            };
          },
          810: (e) => {
            e.exports = i || (i = a.t(o, 2));
          },
        },
        r = {};
      function s(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var a = (r[e] = { exports: {} });
        return n[e](a, a.exports, s), a.exports;
      }
      var l = {};
      (() => {
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.useElementOffsetY = void 0);
        let e = s(810),
          t = s(2067);
        l.useElementOffsetY = () => {
          let a = (0, e.useRef)(null),
            [i, o] = (0, e.useState)(),
            n = (0, e.useCallback)(() => {
              var e;
              let t =
                null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect();
              t && o(t.y);
            }, []);
          return (
            (0, e.useLayoutEffect)(n),
            (0, t.useScroll)(n),
            { ref: a, offsetY: i }
          );
        };
      })(),
        l.__esModule;
      var c = l.useElementOffsetY;
    },
    21351: function (e, t, a) {
      "use strict";
      a.d(t, {
        zp: function () {
          return o;
        },
      });
      var i = {};
      (() => {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.createAvatarUrl = i.AVAILABLE_SIZES = i.DEFAULT_SIZE = void 0),
          (i.DEFAULT_SIZE = 100),
          (i.AVAILABLE_SIZES = [30, 50, 80, 100, 200, 300, 400, 600, 800]);
        let e = (e) => "https://".concat(e.replace(/^(https*:\/\/)/, ""));
        i.createAvatarUrl = (t, a, i) => {
          let o;
          return (
            (o =
              "orig" === a
                ? "orig"
                : i
                  ? "m".concat(a, "x").concat(a)
                  : "".concat(a, "x").concat(a)),
            e(t.replace("%%", o))
          );
        };
      })(),
        i.AVAILABLE_SIZES,
        i.DEFAULT_SIZE,
        i.__esModule;
      var o = i.createAvatarUrl;
    },
    91173: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return l;
        },
      });
      var i = a(9753),
        o = a(98639),
        n = a(87181),
        r = a(63394),
        s = a(80128);
      let l = () => {
        let { notify: e } = (0, r.d$)(),
          { sonataState: t, fullscreenPlayer: a } = (0, r.oR)(),
          l = (0, r.R$)();
        return (0, o.useCallback)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let o = n.zq.NONE;
          switch (t.repeatMode) {
            case n.zq.NONE:
              o = n.zq.CONTEXT;
              break;
            case n.zq.CONTEXT:
              o = n.zq.ONE;
          }
          null == l || l.setRepeatMode(o),
            e((0, i.jsx)(s.NotificationRepeat, { repeatMode: o }), {
              containerId: a.modal.isOpened ? r.W$.FULLSCREEN_INFO : r.W$.INFO,
            });
        }, [
          a.modal.isOpened,
          e,
          l,
          t.canChangeRepeatMode,
          t.entityMeta,
          t.repeatMode,
        ]);
      };
    },
    16129: function (e, t, a) {
      "use strict";
      a.d(t, {
        m: function () {
          return s;
        },
      });
      var i = a(9753),
        o = a(98639),
        n = a(63394),
        r = a(18143);
      let s = () => {
        let { notify: e } = (0, n.d$)(),
          { sonataState: t, fullscreenPlayer: a } = (0, n.oR)(),
          s = (0, n.R$)();
        return (0, o.useCallback)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == s || s.toggleShuffle(),
            e(
              (0, i.jsx)(r.NotificationShuffle, {
                shuffle: !!(null == s
                  ? void 0
                  : s.state.queueState.shuffle.value),
              }),
              {
                containerId: a.modal.isOpened
                  ? n.W$.FULLSCREEN_INFO
                  : n.W$.INFO,
              },
            ));
        }, [a.modal.isOpened, e, s, t.canShuffle, t.entityMeta]);
      };
    },
    80128: function (e, t, a) {
      "use strict";
      a.d(t, {
        NotificationRepeat: function () {
          return p;
        },
      });
      var i = a(9753),
        o = a(60836),
        n = a(98639),
        r = a(31014),
        s = a(87181),
        l = a(28852),
        c = a(2570),
        d = a(67868),
        u = a(15450),
        _ = a.n(u);
      let p = (e) => {
        let { repeatMode: t, closeToast: a } = e,
          u = t === s.zq.ONE ? "repeat_one" : "repeat",
          p = (0, n.useMemo)(() => {
            let e;
            switch (t) {
              case s.zq.CONTEXT:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case s.zq.ONE:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case s.zq.NONE:
              default:
                e = (0, i.jsx)(r.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, i.jsx)(c.Caption, {
              className: _().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, i.jsx)(d.Yj, {
          cover: (0, i.jsx)(l.J, {
            className: (0, o.W)(_().icon, {
              [_().icon_unset]: t === s.zq.NONE,
            }),
            size: "xs",
            variant: u,
          }),
          message: p,
          closeToast: a,
        });
      };
    },
    18143: function (e, t, a) {
      "use strict";
      a.d(t, {
        NotificationShuffle: function () {
          return _;
        },
      });
      var i = a(9753),
        o = a(60836),
        n = a(98639),
        r = a(31014),
        s = a(28852),
        l = a(2570),
        c = a(67868),
        d = a(54394),
        u = a.n(d);
      let _ = (e) => {
        let { shuffle: t, closeToast: a } = e,
          d = (0, n.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, i.jsx)(r.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, i.jsx)(r.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, i.jsx)(l.Caption, {
                className: u().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, i.jsx)(c.Yj, {
          cover: (0, i.jsx)(s.J, {
            className: (0, o.W)(u().icon, { [u().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: d,
          closeToast: a,
        });
      };
    },
    99331: function (e, t, a) {
      "use strict";
      a.d(t, {
        RepeatButton: function () {
          return x;
        },
      });
      var i = a(9753),
        o = a(60836),
        n = a(80542),
        r = a(23881),
        s = a(87181),
        l = a(39513),
        c = a(28852),
        d = a(91173),
        u = a(24749),
        _ = a.n(u);
      let p = (e, t, a) =>
          t(
            e === s.zq.NONE || a
              ? { id: "player-actions.repeat" }
              : e === s.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        m = (e, t) =>
          e === s.zq.NONE || t
            ? r.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === s.zq.ONE
              ? r.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : r.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        x = (e) => {
          let {
              isDisabled: t,
              repeatMode: a,
              className: u,
              iconClassName: x,
              size: v = "xxxs",
              iconSize: f = "xs",
              color: h,
              variant: y = "default",
            } = e,
            g = (0, d.t)(),
            { formatMessage: b } = (0, n.Z)(),
            C = t || a !== s.zq.ONE ? "repeat" : "repeat_one",
            N = p(a, b, t);
          return (0, i.jsx)(l.z, {
            className: u,
            radius: "round",
            size: v,
            variant: y,
            color: h,
            disabled: t,
            withRipple: !1,
            "aria-label": N,
            "aria-pressed": !t && a !== s.zq.NONE,
            onClick: g,
            icon: (0, i.jsx)(c.J, {
              size: f,
              variant: C,
              className: (0, o.W)(
                _().repeatIcon,
                _()["repeatIcon_".concat(a)],
                { [_().repeatIcon_disabled]: t },
                x,
              ),
            }),
            ...(0, r.BA)(m(a, t)),
          });
        };
    },
    94975: function (e, t, a) {
      "use strict";
      a.d(t, {
        ShuffleButton: function () {
          return _;
        },
      });
      var i = a(9753),
        o = a(60836),
        n = a(80542),
        r = a(23881),
        s = a(39513),
        l = a(28852),
        c = a(16129),
        d = a(24584),
        u = a.n(d);
      let _ = (e) => {
        let {
            isDisabled: t,
            shuffle: a,
            className: d,
            size: _ = "xxxs",
            variant: p = "default",
            iconSize: m = "xs",
            color: x,
          } = e,
          v = (0, c.m)(),
          { formatMessage: f } = (0, n.Z)();
        return (0, i.jsx)(s.z, {
          className: d,
          radius: "round",
          size: _,
          variant: p,
          color: x,
          withRipple: !1,
          disabled: t,
          "aria-label": f({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && a,
          icon: (0, i.jsx)(l.J, {
            variant: "shuffle",
            size: m,
            className: (0, o.W)(u().shuffleIcon, {
              [u().shuffleIcon_disabled]: t,
              [u().shuffleIcon_on]: !t && a,
              [u().shuffleIcon_off]: !t && !a,
            }),
          }),
          onClick: v,
          ...(0, r.BA)(r.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    78457: function (e, t, a) {
      "use strict";
      a.d(t, {
        SonataControls: function () {
          return E;
        },
      });
      var i = a(9753),
        o = a(9544),
        n = a(98639),
        r = a(30742),
        s = a(63394),
        l = a(91173),
        c = a(16129),
        d = a(60836),
        u = a(80542),
        _ = a(23881),
        p = a(39513),
        m = a(28852),
        x = a(67868),
        v = a(99331),
        f = a(94975),
        h = a(13689),
        y = a.n(h);
      let g = (0, o.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: a,
            repeatMode: o,
            canMoveForward: n,
            canMoveBackward: r,
            canShuffle: s,
            shuffle: l,
            onClickNext: c,
            onClickPrev: h,
            onClickPlayPause: g,
            canChangeRepeatMode: b,
            className: C,
          } = e,
          { formatMessage: N } = (0, u.Z)();
        return (0, i.jsxs)("div", {
          className: (0, d.W)(y().root, C),
          children: [
            (0, i.jsx)("div", {
              className: y().buttonContainer,
              children:
                (t || s) &&
                (0, i.jsx)(f.ShuffleButton, {
                  className: y().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  iconSize: "xs",
                  isDisabled: t,
                  shuffle: l,
                }),
            }),
            (0, i.jsxs)("div", {
              className: y().sonataButtons,
              children: [
                (0, i.jsx)(p.z, {
                  className: y().sonataButton,
                  variant: "text",
                  size: "m",
                  radius: "round",
                  disabled: !r,
                  withRipple: !1,
                  "aria-label": N({ id: "player-actions.previous-track" }),
                  icon: (0, i.jsx)(m.J, { variant: "previous" }),
                  onClick: h,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, i.jsx)(x.JM, {
                  className: y().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: a,
                  iconClassName: y().playButtonIcon,
                  onClick: g,
                }),
                (0, i.jsx)(p.z, {
                  className: y().sonataButton,
                  radius: "round",
                  size: "m",
                  variant: "text",
                  disabled: !n,
                  withRipple: !1,
                  "aria-label": N({ id: "player-actions.next-track" }),
                  icon: (0, i.jsx)(m.J, { variant: "next" }),
                  onClick: c,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: y().buttonContainer,
              children:
                (t || b) &&
                (0, i.jsx)(v.RepeatButton, {
                  className: y().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  isDisabled: t,
                  iconSize: "xs",
                  repeatMode: o,
                }),
            }),
          ],
        });
      });
      var b = a(73069);
      let C = (e) => {
        let {
          disabled: t,
          isPlaying: a,
          onClickPlayPause: o,
          className: n,
        } = e;
        return (0, i.jsx)(b.PlayButton, {
          className: n,
          size: "s",
          disabled: t,
          isPlaying: a,
          onClick: o,
        });
      };
      var N = a(98014),
        j = a.n(N);
      let P = (0, o.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: a,
            repeatMode: o,
            canMoveForward: n,
            canMoveBackward: r,
            canShuffle: s,
            onClickNext: l,
            onClickPrev: c,
            onClickPlayPause: h,
            canChangeRepeatMode: y,
            shuffle: g,
            className: b,
          } = e,
          { formatMessage: C } = (0, u.Z)();
        return (0, i.jsxs)("div", {
          className: (0, d.W)(j().root, b),
          children: [
            (0, i.jsx)("div", {
              className: j().buttonContainer,
              children:
                (t || s) &&
                (0, i.jsx)(f.ShuffleButton, {
                  className: j().sonataButton,
                  size: "s",
                  iconSize: "xxs",
                  color: "secondary",
                  isDisabled: t,
                  shuffle: g,
                }),
            }),
            (0, i.jsxs)("div", {
              className: j().sonataButtons,
              children: [
                (0, i.jsx)(p.z, {
                  className: j().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !r,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.previous-track" }),
                  icon: (0, i.jsx)(m.J, { variant: "previous" }),
                  onClick: c,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, i.jsx)(x.JM, {
                  className: j().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: a,
                  iconClassName: j().playPauseButtonIcon,
                  onClick: h,
                }),
                (0, i.jsx)(p.z, {
                  className: j().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !n,
                  withRipple: !1,
                  "aria-label": C({ id: "player-actions.next-track" }),
                  icon: (0, i.jsx)(m.J, { variant: "next" }),
                  onClick: l,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: j().buttonContainer,
              children:
                (t || y) &&
                (0, i.jsx)(v.RepeatButton, {
                  className: j().sonataButton,
                  size: "s",
                  color: "secondary",
                  isDisabled: t,
                  iconSize: "xxs",
                  repeatMode: o,
                }),
            }),
          ],
        });
      });
      var k = a(84338),
        A = a(8957),
        S = a(75731),
        R = a.n(S);
      let T = (0, o.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: a,
              canMoveBackward: o,
              onClickNext: r,
              onClickPrev: l,
              onClickPlayPause: c,
              className: _,
            } = e,
            { formatMessage: v } = (0, u.Z)(),
            { user: f, sonataState: h } = (0, s.oR)(),
            y = (0, s.XU)(),
            g = h.entityMeta,
            b = h.contextType === k.Ak.Generative,
            C = f.isAuthorized && !b,
            N = (0, A.SB)(h.entityMeta),
            j = (0, A.KX)(h.entityMeta);
          return (
            (0, n.useEffect)(() => {
              if (!h.isGenerativeContext)
                return (
                  null == y || y.addShortcutsListener(s.yx.LIKE, N),
                  null == y || y.addShortcutsListener(s.yx.DISLIKE, j),
                  () => {
                    null == y || y.removeShortcutsListener(s.yx.LIKE),
                      null == y || y.removeShortcutsListener(s.yx.DISLIKE);
                  }
                );
            }, [j, N, y, h.isGenerativeContext]),
            (0, i.jsxs)("div", {
              className: (0, d.W)(R().root, _),
              children: [
                (0, i.jsx)("div", {
                  className: R().buttonContainer,
                  children:
                    g &&
                    C &&
                    (0, i.jsx)(x.Q1, { isDisliked: g.isDisliked, onClick: j }),
                }),
                (0, i.jsxs)("div", {
                  className: R().sonataButtons,
                  children: [
                    (0, i.jsx)(p.z, {
                      className: R().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !o,
                      withRipple: !1,
                      "aria-label": v({ id: "player-actions.previous-track" }),
                      icon: (0, i.jsx)(m.J, { variant: "previous" }),
                      onClick: l,
                    }),
                    (0, i.jsx)(x.JM, {
                      className: R().sonataButton,
                      iconSize: "xxl",
                      variant: "filled",
                      color: "secondary",
                      isPlaying: t,
                      iconClassName: R().playPauseButtonIcon,
                      onClick: c,
                    }),
                    (0, i.jsx)(p.z, {
                      className: R().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !a,
                      withRipple: !1,
                      "aria-label": v({ id: "player-actions.next-track" }),
                      icon: (0, i.jsx)(m.J, { variant: "next" }),
                      onClick: r,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: R().buttonContainer,
                  children:
                    g &&
                    C &&
                    (0, i.jsx)(x.dJ, { isLiked: g.isLiked, onClick: N }),
                }),
              ],
            })
          );
        }),
        E = (0, o.Pi)((e) => {
          var t, a;
          let { isMobile: o, entityMeta: d, isFullscreen: u, className: _ } = e,
            { sonataState: p, vibe: m } = (0, s.oR)(),
            x = (0, s.XU)(),
            v = (0, s.R$)(),
            { togglePlay: f } = (0, s.Qh)({
              seeds:
                null !==
                  (a =
                    null === (t = m.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== a
                  ? a
                  : [],
              pageIdForFrom: s.Rh.HOME,
              blockIdForFrom: s.BE.RUP_MAIN_RADIO,
            }),
            h = (0, n.useMemo)(
              () =>
                [
                  r.Xz.PLAYING,
                  r.Xz.LOADING_MEDIA_SOURCE,
                  r.Xz.LOADING_MEDIA_DATA,
                ].includes(p.status),
              [p.status],
            ),
            y = (0, n.useCallback)(() => {
              d ? null == v || v.togglePause() : f();
            }, [d, v, f]),
            b = (0, n.useCallback)(() => {
              null == v || v.moveForward();
            }, [v]),
            N = (0, n.useCallback)(() => {
              null == v || v.moveBackward();
            }, [v]),
            j = (0, c.m)(),
            k = (0, l.t)();
          (0, n.useEffect)(() => {
            if (!u)
              return (
                null == x || x.addShortcutsListener(s.yx.TOGGLE_PLAY, y),
                null == x || x.addShortcutsListener(s.yx.TOGGLE_REPEAT, k),
                null == x || x.addShortcutsListener(s.yx.TOGGLE_SHUFFLE, j),
                () => {
                  null == x || x.removeShortcutsListener(s.yx.TOGGLE_PLAY),
                    null == x || x.removeShortcutsListener(s.yx.TOGGLE_SHUFFLE),
                    null == x || x.removeShortcutsListener(s.yx.TOGGLE_REPEAT);
                }
              );
          }, [u, y, k, j, x]);
          let A = (0, n.useMemo)(() => (u ? (o ? T : P) : o ? C : g), [o, u]);
          return (0, i.jsx)(A, {
            className: _,
            disabled: null === p.entityMeta,
            isPlaying: h,
            canMoveBackward: p.canMoveBackward,
            canMoveForward: p.canMoveForward,
            canShuffle: p.canShuffle,
            shuffle: p.shuffle,
            onClickPlayPause: y,
            onClickNext: b,
            onClickPrev: N,
            canChangeRepeatMode: p.canChangeRepeatMode,
            repeatMode: p.repeatMode,
          });
        });
    },
    23948: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return i.NotFound;
        },
      });
      var i = a(8964);
    },
    8964: function (e, t, a) {
      "use strict";
      a.d(t, {
        NotFound: function () {
          return m;
        },
      });
      var i = a(9753),
        o = a(60836),
        n = a(9544),
        r = a(31014),
        s = a(39513),
        l = a(28852),
        c = a(2570),
        d = a(55784),
        u = a(63394),
        _ = a(23067),
        p = a.n(_);
      let m = (0, n.Pi)((e) => {
        let { className: t } = e,
          { contentRef: a } = (0, u.$Y)(),
          n = (0, u.s0)("/");
        return (
          (0, u.ZP)(!0),
          (0, i.jsxs)("div", {
            className: (0, o.W)(p().root, { [p().root_desktop]: !a }, t),
            children: [
              (0, i.jsx)(d.n, {
                withBackwardFallback: "/",
                className: p().navigation,
                withForwardControl: !1,
              }),
              (0, i.jsxs)("div", {
                className: p().content,
                children: [
                  (0, i.jsx)(l.J, {
                    className: p().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, i.jsx)(c.Heading, {
                    className: (0, o.W)(p().title, p().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, i.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, i.jsx)(c.Caption, {
                    className: (0, o.W)(p().text, p().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, i.jsx)(r.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, i.jsx)(s.z, {
                    onClick: n,
                    className: p().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, i.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, i.jsx)(r.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    95772: function (e, t, a) {
      "use strict";
      a.d(t, {
        hx: function () {
          return q;
        },
        f3: function () {
          return ed;
        },
        HZ: function () {
          return em;
        },
        Vm: function () {
          return eH;
        },
        KC: function () {
          return eD;
        },
      });
      var i,
        o = a(9753),
        n = a(9544),
        r = a(98639),
        s = a.t(r, 2),
        l = a(31014),
        c = a(84338),
        d = a(38360),
        u = a(63394),
        _ = a(67868),
        p = a(80542),
        m = a(23881),
        x = a(39513),
        v = a(28852),
        f = a(93490),
        h = a(60184),
        y = a.n(h);
      let g = (0, n.Pi)((e) => {
        let { album: t, likeButtonAriaLabel: a } = e,
          { settings: i, experiments: n, trailer: s } = (0, u.oR)(),
          [c, h] = (0, r.useState)(!1),
          g = i.layout === u.t8.Mobile,
          b = (0, d.SB)(t),
          C = (0, d.BV)(t),
          { formatMessage: N } = (0, p.Z)(),
          j = g ? "l" : "s",
          P = g ? "m" : "xxs",
          k = (0, r.useCallback)(() => {
            s.openAlbumTrailer(t.id);
          }, [t.id, s]),
          A = (0, r.useMemo)(
            () =>
              !(
                n.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
                true &&
                t.hasTrailer
              ) || g
                ? null
                : (0, o.jsx)(_.eP, {
                    size: "s",
                    radius: "xxxl",
                    iconSize: "xxs",
                    className: y().trailerControl,
                    onClick: k,
                    children: (0, o.jsx)(l.Z, { id: "entity-names.trailer" }),
                  }),
            [t.hasTrailer, n, k, g],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            A,
            (0, o.jsx)(_.dJ, {
              className: y().likeControl,
              isLiked: t.isLiked,
              onClick: b,
              variant: "default",
              size: j,
              iconSize: P,
              withRipple: !g,
              disabled: !t.isAvailable,
              "aria-label": a,
            }),
            !g &&
              (0, o.jsx)(_.RT, {
                onClick: C,
                isPinned: t.isPinned,
                isDisabled: !t.isAvailable,
                className: y().pinControl,
              }),
            (0, o.jsx)(f.oK, {
              album: t,
              open: c,
              onOpenChange: h,
              reference: (0, o.jsx)(x.z, {
                className: y().menuControl,
                size: j,
                radius: "round",
                withRipple: !g,
                "aria-label": N({ id: "interface-actions.context-menu" }),
                icon: (0, o.jsx)(v.J, { size: P, variant: "more" }),
                ...(0, m.BA)(m.QM.pageHeader.ALBUM_HEADER_CONTEXT_MENU),
              }),
            }),
          ],
        });
      });
      var b = a(60836),
        C = a(12404),
        N = a(2570),
        j = a(33589);
      let P = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.filter((e) => !e.composer),
          a = t.filter((e) => !e.various),
          i = e.filter((e) => e.composer && !e.various),
          o = [];
        return a.length > 0 ? (o = a) : t.length > 0 && (o = t), o.concat(i);
      };
      var k = a(72408),
        A = a.n(k);
      let S = (0, n.Pi)((e) => {
        var t, a, i;
        let { album: n } = e,
          { settings: s } = (0, u.oR)(),
          l = s.layout === u.t8.Mobile,
          c = (0, r.useMemo)(() => P(n.artists), [n.artists]),
          d =
            (null == c ? void 0 : c.length) === 1 &&
            !(null === (t = c[0]) || void 0 === t ? void 0 : t.decomposed) &&
            !(null === (a = c[0]) || void 0 === a ? void 0 : a.various);
        return (0, o.jsxs)("div", {
          className: A().meta,
          children: [
            d &&
              (0, o.jsx)(C.Paper, {
                radius: "round",
                className: A().artistCover,
                children: (0, o.jsx)(_.BE, {
                  src:
                    null === (i = c[0]) || void 0 === i ? void 0 : i.coverUri,
                  size: 30,
                  withAvatarReplace: !0,
                }),
              }),
            (0, o.jsx)(j.jO, {
              artists: c,
              lineClamp: l ? 1 : void 0,
              className: A().artists,
              spoilerClassName: A().artistsSpoiler,
              visibleArtistsCount: l ? void 0 : 2,
              linkClassName: A().artistLink,
              captionClassName: A().artistLabel,
              variant: l ? "breakAll" : "breakWord",
            }),
            n.year &&
              (0, o.jsx)(N.Caption, {
                variant: "div",
                type: "text",
                size: "m",
                weight: "medium",
                className: (0, b.W)(A().year, { [A().year_dot]: c.length > 0 }),
                ...(0, m.BA)(m.QM.pageHeader.ALBUM_RELEASE_DATE),
                children: n.year,
              }),
          ],
        });
      });
      var R = a(77225),
        T = a.n(R),
        E = a(5293),
        M = a(69516),
        B = a.n(M);
      let w = (0, n.Pi)((e) => {
        let {
            className: t,
            text: a = "",
            maxTextLength: i,
            minTextLength: n,
            variant: s = "input",
            shouldFinishOnKeyPress: l = !1,
            placeholder: c,
            onChangeFinish: d,
          } = e,
          [u, _] = (0, r.useState)(a),
          p = (0, r.useRef)(!1),
          m = (0, r.useRef)(null),
          x = (0, r.useCallback)((e) => {
            _(e.target.value);
          }, []),
          v = (0, r.useCallback)(
            (e) => {
              if (l && ["Enter", "Escape"].includes(e.key)) {
                var t;
                "Escape" === e.key && (p.current = !0),
                  null === (t = e.currentTarget) || void 0 === t || t.blur();
              }
            },
            [l],
          ),
          f = (0, r.useCallback)(() => {
            let e = u.trim();
            p.current || (n && e.length < n)
              ? ((p.current = !1), null == d || d(a))
              : null == d || d(e);
          }, [u, p, n, d, a]);
        (0, r.useEffect)(() => {
          m.current &&
            ((m.current.selectionStart = m.current.value.length),
            (m.current.selectionEnd = m.current.value.length));
        }, []),
          (0, r.useLayoutEffect)(() => {
            let e = m.current;
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              e.style.height = "".concat(t, "px");
            }
          }, [m, u]);
        let h = (0, r.useMemo)(
          () =>
            "textarea" === s
              ? (e) => (0, o.jsx)("textarea", { ref: m, rows: 6, ...e })
              : (e) => (0, o.jsx)("input", { ...e }),
          [s],
        );
        return (0, o.jsx)(h, {
          className: (0, b.W)(B().root, t, {
            [B().root_textarea]: "textarea" === s,
          }),
          type: "text",
          value: u,
          maxLength: i,
          onBlur: f,
          onChange: x,
          onKeyDown: v,
          placeholder: c,
          autoFocus: !0,
        });
      });
      var z = a(35611),
        L = a.n(z);
      let H = (0, n.Pi)((e) => {
          let {
              title: t = "",
              "aria-labelledby": a,
              canChange: i = !1,
              onChange: n,
              maxTitleLength: s,
              version: l = "",
              onVersionClick: c,
              className: d,
            } = e,
            { settings: _ } = (0, u.oR)(),
            { formatMessage: f } = (0, p.Z)(),
            [h, y] = (0, r.useState)(!1),
            g = (0, r.useRef)(null),
            C = _.layout === u.t8.Mobile,
            j = t.length + l.length > 25,
            P = (0, r.useMemo)(
              () => (C ? L().font_mobile : j ? L().font_long : L().font_short),
              [C, j],
            ),
            k = !C && i && h,
            A = (0, r.useCallback)(() => {
              var e;
              y(!0), null === (e = g.current) || void 0 === e || e.focus();
            }, []),
            S = (0, r.useCallback)(
              (e) => {
                y(!1), null == n || n(e);
              },
              [n],
            );
          return (0, o.jsxs)(o.Fragment, {
            children: [
              !k &&
                (0, o.jsxs)("div", {
                  className: (0, b.W)(L().root, d),
                  children: [
                    (0, o.jsx)(E.b4, {
                      title: t,
                      className: L().stickyTitle,
                      children: (0, o.jsxs)(N.Heading, {
                        variant: "h2",
                        id: a,
                        className: (0, b.W)(L().heading, {
                          [L().heading_withVersion]: l,
                        }),
                        ...(0, m.BA)(m.QM.pageHeader.ENTITY_TITLE),
                        children: [
                          (0, o.jsx)(N.Caption, {
                            className: (0, b.W)(L().font, P, L().title),
                            variant: "span",
                            children: t,
                          }),
                          l &&
                            (0, o.jsx)(N.Caption, {
                              onClick: c,
                              className: (0, b.W)(L().font, P, L().version, {
                                [L().version_withOtherVersions]: c,
                              }),
                              variant: "span",
                              ...(0, m.BA)(m.QM.pageHeader.ENTITY_VERSION),
                              children: " ".concat(l),
                            }),
                        ],
                      }),
                    }),
                    i &&
                      (0, o.jsx)("div", {
                        className: (0, b.W)(L().editButton, {
                          [L().editButton_centered]: !j && !C,
                        }),
                        children: (0, o.jsx)(x.z, {
                          onClick: A,
                          "aria-label": f({
                            id: "playlist-actions.change-title",
                          }),
                          icon: (0, o.jsx)(v.J, {
                            size: "xxs",
                            variant: "pencil",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, m.BA)(m.QM.pageHeader.EDIT_TITLE_BUTTON),
                        }),
                      }),
                  ],
                }),
              k &&
                (0, o.jsx)("div", {
                  className: L().textFieldContainer,
                  children: (0, o.jsx)(w, {
                    text: t,
                    className: (0, b.W)(L().font, P, L().textField, L().title, {
                      [L().textField_long]: j && !C,
                    }),
                    onChangeFinish: S,
                    maxTextLength: s,
                    minTextLength: 1,
                    placeholder: f({ id: "playlist-actions.enter-title" }),
                    shouldFinishOnKeyPress: !0,
                  }),
                }),
            ],
          });
        }),
        O = (0, n.Pi)((e) => {
          let {
              "aria-labelledby": t,
              entityName: a,
              title: i,
              meta: n,
              controls: s,
              className: l,
              forwardRef: c,
              canChangeTitle: d = !1,
              maxTitleLength: u,
              onTitleChange: _,
              cover: p,
              version: x,
              onVersionClick: v,
              disclaimerLabel: f,
              entityNameIcon: h,
            } = e,
            y = (0, r.isValidElement)(f),
            g = (0, r.useMemo)(
              () =>
                y
                  ? (0, o.jsx)("div", {
                      className: T().entityContainer,
                      children: f,
                    })
                  : (0, o.jsxs)(N.Caption, {
                      variant: "div",
                      type: "text",
                      size: "m",
                      weight: "medium",
                      className: T().entityName,
                      children: [a, h],
                    }),
              [f, a, h, y],
            );
          return (0, o.jsxs)("div", {
            className: (0, b.W)(T().root, l),
            ref: c,
            ...(0, m.BA)(m.QM.pageHeader.ENTITY_HEADER),
            children: [
              (0, o.jsx)("div", { className: T().coverCell, children: p }),
              (0, o.jsxs)("div", {
                className: T().content,
                children: [
                  (0, o.jsxs)("div", {
                    className: T().info,
                    children: [
                      g,
                      (0, o.jsx)(H, {
                        className: (0, b.W)(T().title, {
                          [T().title_withDisclaimerLabel]: y,
                        }),
                        title: i,
                        "aria-labelledby": t,
                        canChange: d,
                        maxTitleLength: u,
                        onChange: _,
                        version: x,
                        onVersionClick: v,
                      }),
                      !!n &&
                        (0, o.jsx)("div", {
                          className: (0, b.W)(T().meta, {
                            [T().meta_withDisclaimerLabel]: y,
                          }),
                          children: n,
                        }),
                    ],
                  }),
                  (0, o.jsx)("div", { className: T().controls, children: s }),
                ],
              }),
            ],
          });
        }),
        I = (0, r.forwardRef)((e, t) => (0, o.jsx)(O, { forwardRef: t, ...e }));
      var F = a(55608),
        D = a.n(F);
      let U = (e) => {
        let {
          coverVariant: t,
          coverUri: a,
          isAvailable: i,
          className: n,
          withBookmateBadge: r,
        } = e;
        return (0, o.jsxs)(C.Paper, {
          radius: "round" === t ? "round" : "m",
          className: n,
          children: [
            (0, o.jsx)(_.BE, {
              fit: "cover",
              src: a,
              size: 300,
              className: D().coverImage,
              withAvatarReplace: !0,
              isAvailable: i,
            }),
            r &&
              (0, o.jsx)(v.J, {
                variant: "bookmateBadge",
                className: D().bookmateBadge,
              }),
          ],
        });
      };
      var W = a(79495),
        Z = a.n(W);
      let J = (0, n.Pi)((e) => {
          let {
              album: t,
              actionButton: a,
              className: i,
              "aria-labelledby": n,
              forwardRef: s,
              onVersionClick: p,
            } = e,
            m = (0, u.x5)({ pageId: u.Rh.ALBUM, blockId: u.aU.ALBUM }),
            {
              settings: x,
              sonataState: { unloadedEntitiesData: v },
            } = (0, u.oR)(),
            f = x.layout === u.t8.Mobile,
            h = (0, d.H0)(t.type),
            { isPlaying: y, togglePlay: b } = (0, u.qm)({
              playContextParams: {
                contextData: { type: c.Ak.Album, meta: { id: t.id }, from: m },
                loadContextMeta: !0,
                entitiesData: v,
              },
            }),
            C = (0, r.useMemo)(
              () =>
                f
                  ? (0, o.jsx)(_.JM, {
                      className: Z().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: y,
                      onClick: b,
                      variant: "filled",
                      disabled: !t.isAvailable,
                    })
                  : (0, o.jsx)(_.JM, {
                      className: Z().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: y,
                      onClick: b,
                      disabled: !t.isAvailable,
                      children: (0, o.jsx)(l.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [t.isAvailable, f, y, b],
            ),
            N = (0, r.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: Z().controlsContainer,
                  children: [
                    (0, o.jsxs)("div", {
                      className: Z().controls,
                      children: [C, (0, o.jsx)(g, { album: t })],
                    }),
                    a &&
                      (0, o.jsx)("div", {
                        className: Z().controls,
                        children: a,
                      }),
                  ],
                }),
              [C, t, a],
            );
          return (0, o.jsx)(I, {
            ref: s,
            className: i,
            controls: N,
            meta: (0, o.jsx)(S, { album: t }),
            entityName: h,
            title: t.title,
            cover: (0, o.jsx)(U, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
            }),
            "aria-labelledby": n,
            version: t.version,
            onVersionClick: p,
          });
        }),
        q = (0, r.forwardRef)((e, t) => (0, o.jsx)(J, { forwardRef: t, ...e }));
      var V = a(21585),
        Y = {
          5881: (e, t, a) => {
            function i() {
              for (var e, t, a = 0, i = ""; a < arguments.length; )
                (e = arguments[a++]) &&
                  (t = (function e(t) {
                    var a,
                      i,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (a = 0; a < t.length; a++)
                          t[a] && (i = e(t[a])) && (o && (o += " "), (o += i));
                      else for (a in t) t[a] && (o && (o += " "), (o += a));
                    }
                    return o;
                  })(e)) &&
                  (i && (i += " "), (i += t));
              return i;
            }
            a.r(t), a.d(t, { clsx: () => i, default: () => o });
            let o = i;
          },
          2994: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = { root: "LizdJ2L0HW7JWOvPrfly" };
          },
          390: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root_controls_xxs: "tRaaBpDMg9Qu8v6gKjtn",
              root_entity_xxs: "M9zvtlcpLUVn6DKdcHhj",
              root_text_xxs: "ln0PYYwDmFnfYxCDJsFU",
              root_controls_xs: "n5AeWEsJC3_AYXcbK4Lt",
              root_entity_xs: "__hrMKGmNbw54T54IUyh",
              root_text_xs: "SehSa7OyRpC2nzYTVb2Q",
              root_controls_s: "_oBLf5gprWsKjCw4Ce58",
              root_entity_s: "mxSPe5xpZnie9gpIqacd",
              root_text_s: "Ai2iRN9elHpk_u5splD6",
              root_controls_m: "tk7ahHRDYXJMMB879KUA",
              root_entity_m: "Z_WIr2W8JU4MPQek3hgR",
              root_text_m: "g3qWNP6xl__7qxNmtrvd",
              root_controls_l: "grvxapJE3vGArOKDWf6n",
              root_entity_l: "Esj5A1UeSi4xV4tZ839D",
              root_text_l: "V3WU123oO65AxsprotU9",
              root_weight_normal: "ZYV27jeWd30QDXu4GhaH",
              root_weight_medium: "_3_Mxw7Si7j2g4kWjlpR",
              root_weight_bold: "Vi7Rd0SZWqD17F0872TB",
            };
          },
          8544: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root_size_xs: "qJJ288377iHlWN_RXeEE",
              root_size_s: "_sd8Q9d_Ttn0Ufe4ISWS",
              root_size_m: "Ctk8dbecq31Qh7isOJPQ",
              root_size_l: "M_Djh6ppIkCO3A2k_BTA",
              root_size_xl: "dtxlzGQMPAbM2MEndXWX",
              root_size_xxl: "IUb9XLplTAoZqne9rNUL",
              root_size_xxxl: "ZYZamUwql_rfFR4RpI2B",
              root_size_xxxxl: "ZBZyxow5njdq8z5dnRPY",
              root_weight_bold: "nSU6fV9y80WrZEfafvww",
              root_weight_black: "KBeGPPK4DinQzAP41Y_N",
            };
          },
          2524: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            let i = {
              root: "_MWOVuZRvUQdXKTMcOPx",
              root_clamp: "LezmJlldtbHWqU7l1950",
              root_clamp_oneline: "oyQL2RSmoNbNQf3Vc6YI",
              root_clamp_multiline: "jMyoZB5J9iZbzJmWOrF0",
            };
          },
          6161: (e, t, a) => {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var i = a(810),
              o = Symbol.for("react.element"),
              n = Symbol.for("react.fragment"),
              r = Object.prototype.hasOwnProperty,
              s =
                i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              l = { key: !0, ref: !0, __self: !0, __source: !0 };
            function c(e, t, a) {
              var i,
                n = {},
                c = null,
                d = null;
              for (i in (void 0 !== a && (c = "" + a),
              void 0 !== t.key && (c = "" + t.key),
              void 0 !== t.ref && (d = t.ref),
              t))
                r.call(t, i) && !l.hasOwnProperty(i) && (n[i] = t[i]);
              if (e && e.defaultProps)
                for (i in (t = e.defaultProps))
                  void 0 === n[i] && (n[i] = t[i]);
              return {
                $$typeof: o,
                type: e,
                key: c,
                ref: d,
                props: n,
                _owner: s.current,
              };
            }
            (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
          },
          9541: (e, t, a) => {
            e.exports = a(6161);
          },
          2: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Label = void 0);
            let o = a(9541),
              n = a(5881),
              r = a(2582),
              s = i(a(2994));
            t.Label = (e) => {
              let { children: t, className: a, size: i = "s" } = e;
              return (0, o.jsx)(r.Caption, {
                variant: "div",
                type: "text",
                size: i,
                lineClamp: 1,
                className: (0, n.clsx)(s.default.root, a),
                children: t,
              });
            };
          },
          7743: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Caption = t.CaptionComponent = void 0);
            let o = a(9541),
              n = a(5881),
              r = a(810),
              s = a(4721),
              l = i(a(390));
            function c(e) {
              let {
                forwardRef: t,
                variant: a,
                type: i = "text",
                size: r = "s",
                className: c,
                children: d,
                weight: u = "medium",
                ..._
              } = e;
              return (0, o.jsx)(s.Typography, {
                variant: a,
                ref: t,
                className: (0, n.clsx)(
                  l.default.root,
                  l.default["root_".concat(i, "_").concat(r)],
                  l.default["root_weight_".concat(u)],
                  c,
                ),
                ..._,
                children: d,
              });
            }
            (t.CaptionComponent = c),
              (t.Caption = (0, r.forwardRef)((e, t) =>
                (0, o.jsx)(c, { forwardRef: t, ...e }),
              ));
          },
          404: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.HeadingComponent = void 0);
            let o = a(9541),
              n = a(5881),
              r = a(810),
              s = a(4721),
              l = i(a(8544));
            (t.HeadingComponent = (e) => {
              let {
                forwardRef: t,
                variant: a,
                weight: i = "bold",
                size: r = "s",
                className: c,
                children: d,
                ...u
              } = e;
              return (0, o.jsx)(s.Typography, {
                variant: a,
                ref: t,
                className: (0, n.clsx)(
                  l.default.root,
                  l.default["root_size_".concat(r)],
                  l.default["root_weight_".concat(i)],
                  c,
                ),
                ...u,
                children: d,
              });
            }),
              (t.Heading = (0, r.forwardRef)((e, a) =>
                (0, o.jsx)(t.HeadingComponent, { forwardRef: a, ...e }),
              ));
          },
          4721: function (e, t, a) {
            var i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Typography = t.TypographyComponent = void 0);
            let o = a(9541),
              n = a(5881),
              r = a(810),
              s = i(a(2524));
            function l(e) {
              let {
                  forwardRef: t,
                  style: a,
                  className: i,
                  children: r,
                  variant: l,
                  lineClamp: c,
                  ...d
                } = e,
                u = c && "string" == typeof r ? r : void 0;
              return (0, o.jsx)(l, {
                style: { ...a, WebkitLineClamp: c },
                ref: t,
                title: u,
                className: (0, n.clsx)(
                  s.default.root,
                  {
                    [s.default.root_clamp]: c && c > 0,
                    [s.default.root_clamp_oneline]: c && 1 === c,
                    [s.default.root_clamp_multiline]: c && c > 1,
                  },
                  i,
                ),
                ...d,
                children: r,
              });
            }
            (t.TypographyComponent = l),
              (t.Typography = (0, r.forwardRef)((e, t) =>
                (0, o.jsx)(l, { forwardRef: t, ...e }),
              ));
          },
          2582: (e, t, a) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Heading = t.Caption = void 0);
            var i = a(7743);
            Object.defineProperty(t, "Caption", {
              enumerable: !0,
              get: function () {
                return i.Caption;
              },
            });
            var o = a(404);
            Object.defineProperty(t, "Heading", {
              enumerable: !0,
              get: function () {
                return o.Heading;
              },
            });
          },
          810: (e) => {
            e.exports = s;
          },
        },
        G = {};
      function Q(e) {
        var t = G[e];
        if (void 0 !== t) return t.exports;
        var a = (G[e] = { exports: {} });
        return Y[e].call(a.exports, a, a.exports, Q), a.exports;
      }
      (Q.d = (e, t) => {
        for (var a in t)
          Q.o(t, a) &&
            !Q.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
        (Q.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (Q.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var X = {};
      Object.defineProperty(X, "__esModule", { value: !0 }),
        (X.Label = void 0),
        (i = Q(2)),
        Object.defineProperty(X, "Label", {
          enumerable: !0,
          get: function () {
            return i.Label;
          },
        });
      var K = X.Label;
      X.__esModule;
      var $ = a(87908);
      let ee = (e) => {
          let {
            isMobile: t,
            rewindButton: a,
            pinButton: i,
            trailerButton: o,
          } = e;
          return t
            ? a
              ? "'menu play like' 'rewind rewind rewind'"
              : "'menu play like'"
            : "'play "
                .concat(o ? "trailer" : "", " ")
                .concat(a ? "rewind" : "", " like ")
                .concat(i ? "pin" : "", " menu'");
        },
        et = /^https:\/\/tips\.yandex\.ru\//,
        ea = (e) => {
          var t;
          return (
            e.type === V.r1.DONATION &&
            et.test(null !== (t = e.url) && void 0 !== t ? t : "")
          );
        };
      var ei = a(17295),
        eo = a(5773),
        en = a(24016),
        er = a.n(en);
      let es = {
          width: 20,
          height: 8,
          tipRadius: 2,
          fill: "var(--ym-background-color-primary-enabled-tooltip)",
        },
        el = (0, n.Pi)((e) => {
          let { action: t } = e,
            { settings: a } = (0, u.oR)(),
            i = (0, u.s0)(null == t ? void 0 : t.url),
            n = a.layout === u.t8.Mobile,
            { contentRef: s } = (0, u.$Y)(),
            c = (0, u.uK)().get(u.ce),
            { state: d, toggleTrue: _, toggleFalse: p } = (0, ei.O)(!1),
            m = (0, r.useCallback)(
              (e) => {
                e || p();
              },
              [p],
            );
          return (
            (0, r.useEffect)(() => {
              if (!c.get(u.BU.ArtistDonationButtonOnbordingShowed)) {
                _();
                let e = new Date(),
                  t = e.setMonth(e.getMonth() + 3);
                c.set(u.BU.ArtistDonationButtonOnbordingShowed, !0, {
                  expires: new Date(t),
                });
              }
            }, [c, _]),
            (0, o.jsxs)(eo.u, {
              placement: n ? "top" : "right",
              arrowProps: es,
              offsetOptions: 14,
              isHoverEnabled: !1,
              open: d,
              onOpenChange: m,
              enableAriaDescribedby: !0,
              children: [
                (0, o.jsxs)(x.z, {
                  onClick: i,
                  role: "link",
                  color: "secondary",
                  className: er().label,
                  withRipple: !1,
                  children: [
                    (0, o.jsx)(v.J, { variant: "donation", size: "xxxs" }),
                    (0, o.jsx)(N.Caption, {
                      type: "text",
                      size: "m",
                      weight: "medium",
                      variant: "span",
                      children: t.title,
                    }),
                  ],
                }),
                (0, o.jsxs)(eo._v, {
                  className: er().donationButtonTooltip,
                  rootNode: s,
                  children: [
                    (0, o.jsx)(x.z, {
                      icon: (0, o.jsx)(v.J, { variant: "close", size: "xxs" }),
                      onClick: p,
                      variant: "text",
                      className: er().closeTooltip,
                      withRipple: !1,
                    }),
                    (0, o.jsx)(l.Z, {
                      id: "onboarding.artist-donation-button-1",
                      values: { br: (0, o.jsx)("br", {}) },
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ec = (0, n.Pi)((e) => {
          var t, a, i;
          let { artistMeta: n, className: s, forwardRef: d } = e,
            f = (0, u.s0)(
              "/slides/artist/".concat(null == n ? void 0 : n.artist.id, "/"),
            ),
            h = (0, u.x5)({ pageId: u.Rh.ARTIST, blockId: u.aU.ARTIST }),
            y = (0, j.SB)(null == n ? void 0 : n.artist),
            g = (0, j.BV)(null == n ? void 0 : n.artist),
            { formatMessage: C } = (0, p.Z)(),
            [P, k] = (0, r.useState)(!1),
            { settings: A, experiments: S, trailer: R } = (0, u.oR)(),
            T = A.layout === u.t8.Mobile,
            E =
              S.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
              true &&
              (null == n ? void 0 : n.artist.hasTrailer) &&
              !T,
            M = (0, r.useMemo)(
              () =>
                (null == n ? void 0 : n.artist.composer)
                  ? C({ id: "entity-names.composer" })
                  : C({ id: "entity-names.singer" }),
              [C, null == n ? void 0 : n.artist.composer],
            ),
            B = (0, r.useMemo)(() => {
              if (null == n ? void 0 : n.lastMonthListeners)
                return (0, o.jsx)(l.Z, {
                  id: "entity-names.listeners-per-month",
                  values: { counter: n.lastMonthListeners },
                });
            }, [null == n ? void 0 : n.lastMonthListeners]),
            w = (0, r.useMemo)(() => {
              var e;
              return null == n
                ? void 0
                : null === (e = n.artist.extraActions) || void 0 === e
                  ? void 0
                  : e.find((e) => e.type === V.r1.REWIND);
            }, [null == n ? void 0 : n.artist.extraActions]),
            { isPlaying: z, togglePlay: L } = (0, u.qm)({
              playContextParams: {
                contextData: {
                  type: c.Ak.Artist,
                  meta: { id: Number(null == n ? void 0 : n.artist.id) },
                  from: h,
                },
                loadContextMeta: !0,
              },
            }),
            H = (0, r.useMemo)(() => {
              var e, t;
              return T
                ? (0, o.jsx)(_.JM, {
                    className: er().playControl,
                    color: "primary",
                    buttonVariant: "default",
                    iconSize: "xxl",
                    isPlaying: z,
                    variant: "filled",
                    onClick: L,
                    disabled:
                      !(null == n
                        ? void 0
                        : null === (t = n.artist) || void 0 === t
                          ? void 0
                          : t.isAvailableForPlaying) || !n.artist.isAvailable,
                  })
                : (0, o.jsx)(_.JM, {
                    className: er().playControl,
                    withRipple: !0,
                    buttonVariant: "default",
                    radius: "xxxl",
                    size: "s",
                    color: "primary",
                    iconSize: "xxs",
                    isPlaying: z,
                    disabled:
                      !(null == n
                        ? void 0
                        : null === (e = n.artist) || void 0 === e
                          ? void 0
                          : e.isAvailableForPlaying) || !n.artist.isAvailable,
                    onClick: L,
                    variant: "default",
                    children: (0, o.jsx)(l.Z, { id: "player-actions.listen" }),
                  });
            }, [
              null == n ? void 0 : n.artist.isAvailable,
              null == n
                ? void 0
                : null === (t = n.artist) || void 0 === t
                  ? void 0
                  : t.isAvailableForPlaying,
              T,
              z,
              L,
            ]),
            O = (0, r.useCallback)(() => {
              (null == n ? void 0 : n.artist.id) &&
                R.openArtistTrailer(null == n ? void 0 : n.artist.id);
            }, [null == n ? void 0 : n.artist.id, R]),
            F = (0, r.useMemo)(
              () =>
                E
                  ? (0, o.jsx)(_.eP, {
                      size: "s",
                      radius: "xxxl",
                      iconSize: "xxs",
                      className: er().trailerControl,
                      onClick: O,
                      children: (0, o.jsx)(l.Z, { id: "entity-names.trailer" }),
                    })
                  : null,
              [O, E],
            ),
            D = (0, r.useMemo)(() => {
              var e;
              return null == n
                ? void 0
                : null === (e = n.artist.extraActions) || void 0 === e
                  ? void 0
                  : e.find(ea);
            }, [null == n ? void 0 : n.artist.extraActions]),
            W = (0, r.useMemo)(() => {
              if (null == n ? void 0 : n.artist.isForeignAgent)
                return (0, o.jsx)(K, {
                  className: er().disclaimerLabel,
                  size: "m",
                  children: (0, o.jsx)(l.Z, {
                    id: "extra-explicit.foreign-agent",
                  }),
                });
            }, [null == n ? void 0 : n.artist.isForeignAgent]),
            Z = (0, r.useMemo)(() => {
              let e = T ? "l" : "s",
                t = T ? "m" : "xxs",
                a = {
                  gridTemplateAreas: "".concat(
                    ee({
                      isMobile: T,
                      rewindButton: !!w,
                      pinButton: !T,
                      trailerButton: !!E,
                    }),
                  ),
                };
              return (0, o.jsxs)("div", {
                style: a,
                className: er().controls,
                children: [
                  H,
                  F,
                  !!w &&
                    (0, o.jsx)(x.z, {
                      className: er().rewindControl,
                      withRipple: !T,
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      onClick: f,
                      variant: "default",
                      role: "link",
                      children: null == w ? void 0 : w.title,
                    }),
                  (0, o.jsx)(_.dJ, {
                    className: er().likeControl,
                    isLiked: null == n ? void 0 : n.artist.isLiked,
                    onClick: y,
                    withRipple: !T,
                    iconSize: t,
                    size: e,
                    variant: "default",
                    iconClassName: er().likeIcon,
                    disabled: !(null == n ? void 0 : n.artist.isAvailable),
                  }),
                  !T &&
                    (0, o.jsx)(_.RT, {
                      onClick: g,
                      isPinned: null == n ? void 0 : n.artist.isPinned,
                      className: er().pinControl,
                      isDisabled: !(null == n ? void 0 : n.artist.isAvailable),
                    }),
                  (0, o.jsx)($.xG, {
                    artist: null == n ? void 0 : n.artist,
                    lastMonthListeners: B,
                    open: P,
                    onOpenChange: k,
                    reference: (0, o.jsx)(x.z, {
                      className: er().menuControl,
                      size: e,
                      radius: "round",
                      "aria-label": C({ id: "interface-actions.context-menu" }),
                      icon: (0, o.jsx)(v.J, { size: t, variant: "more" }),
                      withRipple: !T,
                      ...(0, m.BA)(m.QM.pageHeader.ARTIST_HEADER_CONTEXT_MENU),
                    }),
                  }),
                ],
              });
            }, [
              T,
              w,
              E,
              H,
              F,
              f,
              null == n ? void 0 : n.artist,
              y,
              g,
              B,
              P,
              C,
            ]),
            J = (0, r.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: er().meta,
                  children: [
                    (null == n ? void 0 : n.lastMonthListeners) &&
                      (0, o.jsxs)("div", {
                        className: er().label,
                        ...(0, m.BA)(m.QM.pageHeader.ARTIST_LISTENERS_COUNT),
                        children: [
                          (0, o.jsx)(v.J, { variant: "users", size: "xxxs" }),
                          (0, o.jsx)(N.Caption, {
                            type: "text",
                            size: "m",
                            weight: "medium",
                            variant: "span",
                            children: B,
                          }),
                        ],
                      }),
                    D && (0, o.jsx)(el, { action: D }),
                  ],
                }),
              [null == n ? void 0 : n.lastMonthListeners, D, B],
            );
          return (0, o.jsx)(I, {
            ref: d,
            className: (0, b.W)(er().root, s),
            entityName: M,
            title:
              (null == n
                ? void 0
                : null === (a = n.artist) || void 0 === a
                  ? void 0
                  : a.name) || "",
            meta: J,
            cover: (0, o.jsx)(U, {
              coverVariant: "round",
              coverUri:
                null == n
                  ? void 0
                  : null === (i = n.artist) || void 0 === i
                    ? void 0
                    : i.coverUri,
              isAvailable: null == n ? void 0 : n.artist.isAvailable,
            }),
            controls: Z,
            disclaimerLabel: W,
          });
        }),
        ed = (0, r.forwardRef)((e, t) =>
          (0, o.jsx)(ec, { forwardRef: t, ...e }),
        );
      var eu = a(30259),
        e_ = a.n(eu);
      let ep = (0, n.Pi)((e) => {
          let {
              album: t,
              className: a,
              "aria-labelledby": i,
              forwardRef: n,
              onVersionClick: s,
            } = e,
            p = (0, u.x5)({ pageId: u.Rh.ALBUM, blockId: u.aU.ALBUM }),
            {
              settings: m,
              sonataState: { unloadedEntitiesData: x },
            } = (0, u.oR)(),
            f = m.layout === u.t8.Mobile,
            h = (0, d.TL)(t),
            y = (0, u.Sf)(t.isLiked, t.type),
            b = (0, d.H0)(t.type),
            { isPlaying: C, togglePlay: N } = (0, u.qm)({
              playContextParams: {
                contextData: { type: c.Ak.Album, meta: { id: t.id }, from: p },
                loadContextMeta: !0,
                entitiesData: x,
              },
            }),
            j = (0, r.useMemo)(
              () =>
                f
                  ? (0, o.jsx)(_.JM, {
                      className: e_().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: C,
                      onClick: N,
                      variant: "filled",
                      disabled: !t.isAvailable,
                    })
                  : (0, o.jsx)(_.JM, {
                      className: e_().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: C,
                      onClick: N,
                      disabled: !t.isAvailable,
                      children: (0, o.jsx)(l.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [t.isAvailable, f, C, N],
            ),
            P = (0, r.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: e_().controls,
                  children: [
                    j,
                    (0, o.jsx)(g, { album: t, likeButtonAriaLabel: y }),
                  ],
                }),
              [j, t, y],
            ),
            k = (0, r.useMemo)(() => {
              if (h)
                return (0, o.jsx)(v.J, {
                  variant: "bookmateLogo",
                  className: e_().bookmateLogo,
                });
            }, [h]);
          return (0, o.jsx)(I, {
            ref: n,
            className: a,
            controls: P,
            meta: (0, o.jsx)(S, { album: t }),
            entityName: b,
            entityNameIcon: k,
            title: t.title,
            cover: (0, o.jsx)(U, {
              coverVariant: "square",
              coverUri: t.coverUri,
              isAvailable: t.isAvailable,
              withBookmateBadge: h,
            }),
            "aria-labelledby": i,
            version: t.version,
            onVersionClick: s,
          });
        }),
        em = (0, r.forwardRef)((e, t) =>
          (0, o.jsx)(ep, { forwardRef: t, ...e }),
        );
      var ex = a(12090),
        ev = a(36525),
        ef = a.n(ev),
        eh = a(21351);
      let ey = ["image/png", "image/jpeg", "image/jpg"],
        eg = (e) => ey.includes(e),
        eb = (e) => e > 0 && e <= 2e7,
        eC = (e) => {
          if (!e) return;
          let t = 2 * e.naturalHeight || e.height,
            a = 2 * e.naturalWidth || e.width;
          return t < 5e3 && a < 5e3;
        };
      var eN = a(74708),
        ej = a.n(eN);
      let eP = (0, n.Pi)((e) => {
          let { className: t, playlist: a } = e,
            { settings: i } = (0, u.oR)(),
            n = a.coverUri,
            s = i.layout === u.t8.Mobile,
            l = a.canUserChange && !s,
            { notify: c } = (0, u.d$)(),
            { formatMessage: d } = (0, p.Z)(),
            m = (0, r.useRef)(null),
            [v, f] = (0, r.useState)(n || ""),
            [h, y] = (0, r.useState)(l),
            [g, N] = (0, r.useState)(new FormData()),
            j = (0, eh.zp)(n || "", 600, !1),
            P = (0, eh.zp)(n || "", 300, !1),
            [k, A] = (0, r.useState)(j);
          (0, r.useEffect)(() => {
            h !== l && y(l);
          }, [l, h]);
          let S = (0, r.useCallback)(
              () =>
                c(
                  (0, o.jsx)(_.Q, {
                    error: d({ id: "playlist-errors.failed-to-change-poster" }),
                  }),
                  { containerId: u.W$.ERROR },
                ),
              [c, d],
            ),
            R = (0, r.useCallback)(() => {
              var e;
              null == m ||
                null === (e = m.current) ||
                void 0 === e ||
                e.click();
            }, [m]),
            T = (0, r.useCallback)(
              (e) => {
                "Enter" === e.key && R();
              },
              [R],
            ),
            E = (0, r.useCallback)(
              (e) => {
                let t = e.target,
                  a = (t.files || [])[0] || null;
                if (((t.value = ""), !a || !eg(a.type) || !eb(a.size))) {
                  S();
                  return;
                }
                v && A(v), y(!1), f(URL.createObjectURL(a));
                let i = new FormData();
                i.append("image", a), N(i);
              },
              [S, v],
            ),
            M = (0, r.useCallback)(
              async (e) => {
                let t = e.target,
                  i = () => {
                    f(k), S(), y(!0);
                  };
                if (
                  (!n || (t.currentSrc !== j && t.currentSrc !== P)) &&
                  l &&
                  k !== t.currentSrc
                ) {
                  if (!eC(t)) {
                    i();
                    return;
                  }
                  (await a.changePlaylistCover(g)) === u.SL.ERROR ? i() : y(!0);
                }
              },
              [S, k, a, g, n, l, j, P],
            ),
            B = (0, r.useMemo)(
              () =>
                v
                  ? d({ id: "playlist-actions.change-poster" })
                  : d({ id: "playlist-actions.add-poster" }),
              [v, d],
            );
          return (0, o.jsxs)(C.Paper, {
            radius: "m",
            className: (0, b.W)(ej().root, t),
            children: [
              (0, o.jsx)(_.BE, {
                fit: "cover",
                src: v,
                size: 300,
                className: ej().coverImage,
                withAvatarReplace: !0,
                onLoad: M,
              }),
              h &&
                (0, o.jsx)("div", {
                  className: (0, b.W)(ej().buttonContainer, {
                    [ej().buttonContainer_withCursorPointer]: v,
                  }),
                  children: (0, o.jsxs)("div", {
                    className: (0, b.W)(ej().fileUploadContainer, {
                      [ej().fileUploadContainer_hovered]: v,
                    }),
                    children: [
                      (0, o.jsx)(x.z, {
                        className: ej().button,
                        radius: "xxxl",
                        size: "xxs",
                        color: "secondary",
                        withRipple: !1,
                        onClick: R,
                        onKeyUp: T,
                        "aria-label": d({ id: "playlist-actions.add-poster" }),
                        children: B,
                      }),
                      (0, o.jsx)("form", {
                        className: ej().formFile,
                        encType: "multipart/form-data",
                        children: (0, o.jsx)("input", {
                          ref: m,
                          type: "file",
                          name: "file",
                          accept: "image/jpeg, image/png, image/jpg",
                          onChange: E,
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          });
        }),
        ek = /\[([^([\])]+)\]\(([^(()\s)]+)\)/g,
        eA = /\[[^([\])]+\]\([^(()\s)]+\)/,
        eS = (e, t) => {
          if (!e) return [];
          let a = [...e.matchAll(ek)];
          return e.split(eA).reduce((e, i, n) => {
            e.push(i);
            let { 1: r, 2: s } = a[n] || [];
            return (
              r &&
                s &&
                e.push(
                  (0, o.jsx)(_.rU, { href: s, className: t, children: r }),
                ),
              e
            );
          }, []);
        };
      var eR = a(60656),
        eT = a.n(eR);
      let eE = (0, n.Pi)((e) => {
          let { playlist: t, className: a } = e,
            { formatMessage: i } = (0, p.Z)(),
            n = (0, r.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      { id: "interface-actions.playlist-made-for-yesterday" },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.playlist-made-for-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.playlist-made-for-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            s = (0, r.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.he-updated-playlist-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      { id: "interface-actions.he-updated-playlist-yesterday" },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.he-updated-playlist-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.he-updated-playlist-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            l = (0, r.useCallback)(
              (e, t) => {
                switch (e) {
                  case u.Uv.TODAY:
                    return i(
                      { id: "interface-actions.she-updated-playlist-today" },
                      t,
                    );
                  case u.Uv.YESTERDAY:
                    return i(
                      {
                        id: "interface-actions.she-updated-playlist-yesterday",
                      },
                      t,
                    );
                  case u.Uv.DATE_WITH_YEAR:
                    return i(
                      {
                        id: "interface-actions.she-updated-playlist-date-with-year",
                      },
                      t,
                    );
                  default:
                    return i(
                      { id: "interface-actions.she-updated-playlist-date" },
                      t,
                    );
                }
              },
              [i],
            ),
            c = (0, r.useMemo)(() => {
              var e, a, i, o, r, c, d;
              let _ = new Date(t.modified),
                p = (0, u.u9)(_);
              if (t.madeFor)
                return n(p, {
                  playlistReceiver:
                    (null == t
                      ? void 0
                      : null === (o = t.madeFor) || void 0 === o
                        ? void 0
                        : null === (i = o.caseForms) || void 0 === i
                          ? void 0
                          : i.genitive) ||
                    (null == t
                      ? void 0
                      : null === (c = t.madeFor) || void 0 === c
                        ? void 0
                        : null === (r = c.userInfo) || void 0 === r
                          ? void 0
                          : r.login) ||
                    "",
                  updateDate: _,
                });
              if (t.isFavouritePlaylist)
                return (
                  (null === (d = t.owner) || void 0 === d ? void 0 : d.name) ||
                  ""
                );
              let m = {
                updateDate: new Date(t.modified),
                ownerName:
                  (null === (e = t.owner) || void 0 === e ? void 0 : e.name) ||
                  "",
              };
              return (null === (a = t.owner) || void 0 === a
                ? void 0
                : a.sex) === V.oF.FEMALE
                ? l(p, m)
                : s(p, m);
            }, [t, s, n, l]);
          return (0, o.jsx)(N.Caption, {
            variant: "span",
            className: a,
            type: "text",
            size: "m",
            weight: "medium",
            lineClamp: 1,
            children: c,
          });
        }),
        eM = (0, n.Pi)((e) => {
          let { playlist: t } = e,
            { formatMessage: a } = (0, p.Z)(),
            { settings: i } = (0, u.oR)(),
            { notify: n } = (0, u.d$)(),
            s = i.layout === u.t8.Mobile,
            c = t.canUserChange && !s,
            d = !!t.description,
            { state: m, toggleTrue: v, toggleFalse: f } = (0, ei.O)(!1),
            [h, y] = (0, r.useState)(t.description || ""),
            g = (0, r.useCallback)(async () => {
              f(),
                (await t.changeDescription(h)) === u.SL.ERROR &&
                  n(
                    (0, o.jsx)(_.Q, {
                      error: a({
                        id: "playlist-errors.failed-to-change-description",
                      }),
                    }),
                    { containerId: u.W$.ERROR },
                  );
            }, [a, h, n, t, f]),
            C = (0, r.useCallback)((e) => {
              y(e);
            }, []);
          return (0, o.jsxs)("div", {
            className: eT().root,
            children: [
              d &&
                !m &&
                (0, o.jsxs)(N.Caption, {
                  variant: "span",
                  className: eT().description,
                  type: "text",
                  size: "m",
                  weight: "medium",
                  children: [
                    eS(t.description, eT().descriptionLink),
                    c &&
                      (0, o.jsx)(x.z, {
                        variant: "text",
                        withRipple: !1,
                        onClick: v,
                        className: (0, b.W)(
                          eT().descriptionActionLink,
                          eT().addDescription,
                        ),
                        "aria-label": a({
                          id: "playlist-actions.change-description",
                        }),
                        color: "primary",
                        children: (0, o.jsx)(N.Caption, {
                          variant: "span",
                          size: "m",
                          type: "text",
                          className: eT().button,
                          children: (0, o.jsx)(l.Z, {
                            id: "playlist-actions.change-description-abbr",
                          }),
                        }),
                      }),
                  ],
                }),
              !d &&
                c &&
                !m &&
                (0, o.jsx)(x.z, {
                  variant: "text",
                  withRipple: !1,
                  onClick: v,
                  className: eT().descriptionActionLink,
                  "aria-label": a({ id: "playlist-actions.add-description" }),
                  color: "primary",
                  children: (0, o.jsxs)(N.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    className: eT().button,
                    children: [
                      (0, o.jsx)(l.Z, {
                        id: "playlist-actions.add-description",
                      }),
                      "...",
                    ],
                  }),
                }),
              c &&
                m &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(w, {
                      text: t.description,
                      className: eT().textField,
                      placeholder: "".concat(
                        a({ id: "playlist-actions.add-description" }),
                        "...",
                      ),
                      maxTextLength: ex.Zn,
                      onChangeFinish: C,
                      variant: "textarea",
                    }),
                    (0, o.jsxs)("div", {
                      className: eT().actionButtons,
                      children: [
                        (0, o.jsx)(x.z, {
                          className: eT().saveButton,
                          color: "secondary",
                          radius: "xxxl",
                          size: "s",
                          "aria-label": a({ id: "interface-actions.save" }),
                          onClick: g,
                          withHover: !0,
                          children: (0, o.jsx)(l.Z, {
                            id: "interface-actions.save",
                          }),
                        }),
                        (0, o.jsx)(x.z, {
                          variant: "text",
                          withRipple: !1,
                          onClick: f,
                          className: eT().cancelButton,
                          "aria-label": a({ id: "interface-actions.cancel" }),
                          color: "primary",
                          children: (0, o.jsx)(N.Caption, {
                            variant: "span",
                            size: "m",
                            type: "text",
                            className: eT().button,
                            children: (0, o.jsx)(l.Z, {
                              id: "interface-actions.cancel",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, o.jsx)(eE, { className: eT().updatedText, playlist: t }),
            ],
          });
        });
      var eB = a(74717),
        ew = a(385);
      let ez = (0, n.Pi)((e) => {
          var t, a;
          let { playlist: i, reference: n, onOpenChange: s, open: c } = e,
            { settings: d, experiments: m, trailer: x } = (0, u.oR)(),
            f = (0, ex.SB)(i),
            h = (0, ex.BV)(i),
            y = "".concat(u.aU.PLAYLIST, "-").concat(i.uid, "_").concat(i.kind),
            g = d.layout === u.t8.Mobile,
            b = i.canUserChange,
            C =
              m.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
              true &&
              i.hasTrailer,
            { notify: N } = (0, u.d$)(),
            { formatMessage: j } = (0, p.Z)(),
            P = (0, eB.useRouter)(),
            { href: k } = (0, u.qK)(
              "/users/"
                .concat(
                  null === (t = i.owner) || void 0 === t ? void 0 : t.login,
                  "/playlists/",
                )
                .concat(i.kind),
            ),
            { isPlaying: A, togglePlay: S } = (0, u.Qh)({
              seeds: null !== (a = i.seeds) && void 0 !== a ? a : [],
              pageIdForFrom: u.Rh.RADIO,
              blockIdForFrom: y,
            }),
            R = (0, r.useCallback)(() => {
              A || S();
            }, [A, S]),
            T = (0, r.useCallback)(() => {
              x.openPlaylistTrailer(i.uid, i.kind);
            }, [i.kind, i.uid, x]),
            E = (0, r.useCallback)(async () => {
              if ((await i.deletePlaylist()) === u.SL.ERROR) {
                N(
                  (0, o.jsx)(_.Q, {
                    error: j({
                      id: "playlist-errors.failed-to-remove-playlist",
                    }),
                  }),
                  { containerId: u.W$.ERROR },
                );
                return;
              }
              P.push("/collection");
            }, [j, N, i, P]);
          (0, u.ZP)(c);
          let M = (i.isPublic || i.isFavouritePlaylist) && i.isAvailable;
          return (0, o.jsxs)(ew.v2, {
            reference: n,
            isMobile: g,
            title: i.title,
            description: i.description,
            offsetOptions: 10,
            open: c,
            onOpenChange: s,
            children: [
              !g && (0, o.jsx)(_.Zd, { onClick: h, isPinned: i.isPinned }),
              !i.isFavouritePlaylist &&
                (0, o.jsx)(_.xZ, { onClick: f, isLiked: i.isLiked }),
              C && (0, o.jsx)(_.NB, { onClick: T }),
              (0, o.jsx)(_.GQ, {
                disabled: !i.isAvailable,
                onClick: R,
                variant: "playlist",
              }),
              (0, o.jsx)(_.zq, {
                disabled: !M,
                shareLink: k,
                entityVariant: "playlist",
                entityTitle: i.title,
              }),
              b &&
                (0, o.jsx)(ew.sN, {
                  icon: (0, o.jsx)(v.J, { variant: "bucket" }),
                  onClick: E,
                  children: (0, o.jsx)(l.Z, {
                    id: "playlist-actions.remove-playlist",
                  }),
                }),
            ],
          });
        }),
        eL = (0, n.Pi)((e) => {
          let { playlist: t, isDisabled: a, className: i, forwardRef: n } = e,
            s = (0, u.x5)({ pageId: u.Rh.PLAYLIST, blockId: u.aU.PLAYLIST }),
            {
              settings: d,
              sonataState: { unloadedEntitiesDataFromModels: f },
              experiments: h,
              trailer: y,
            } = (0, u.oR)(),
            { formatMessage: g, formatNumber: b } = (0, p.Z)(),
            [C, j] = (0, r.useState)(!1),
            P = (0, ex.SB)(t),
            k = (0, ex.BV)(t),
            A = d.layout === u.t8.Mobile,
            S = A ? "l" : "s",
            R = A ? "m" : "xxs",
            { notify: T } = (0, u.d$)(),
            E = t.canUserChange && !A,
            M = (0, r.useCallback)(
              async (e) => {
                (await t.changeTitle(e)) === u.SL.ERROR &&
                  T(
                    (0, o.jsx)(_.Q, {
                      error: g({
                        id: "playlist-errors.failed-to-change-title",
                      }),
                    }),
                    { containerId: u.W$.ERROR },
                  );
              },
              [g, T, t],
            ),
            { isPlaying: B, togglePlay: w } = (0, u.qm)({
              playContextParams: {
                contextData: {
                  type: c.Ak.Playlist,
                  meta: { id: t.id, uuid: t.uuid },
                  from: s,
                },
                loadContextMeta: !0,
                entitiesData: f,
              },
            }),
            z = (0, r.useMemo)(() => {
              if (t.actualLikesCount && t.actualLikesCount > 0)
                return (0, o.jsx)(N.Caption, {
                  variant: "span",
                  type: "controls",
                  size: "s",
                  weight: "medium",
                  children: t.actualLikesCount && b(t.actualLikesCount),
                });
            }, [t.actualLikesCount, b]),
            L = (0, r.useMemo)(
              () =>
                A
                  ? (0, o.jsx)(_.JM, {
                      className: ef().playControl,
                      color: "primary",
                      buttonVariant: "default",
                      iconSize: "xxl",
                      isPlaying: B,
                      variant: "filled",
                      onClick: w,
                      disabled: a,
                    })
                  : (0, o.jsx)(_.JM, {
                      className: ef().playControl,
                      withRipple: !0,
                      buttonVariant: "default",
                      radius: "xxxl",
                      size: "s",
                      color: "primary",
                      iconSize: "xxs",
                      isPlaying: B,
                      onClick: w,
                      disabled: a,
                      children: (0, o.jsx)(l.Z, {
                        id: "player-actions.listen",
                      }),
                    }),
              [a, A, B, w],
            ),
            H = (0, r.useCallback)(() => {
              y.openPlaylistTrailer(t.uid, t.kind);
            }, [t.kind, t.uid, y]),
            O = (0, r.useMemo)(
              () =>
                !(
                  h.checkExperiment(u.pe.WebNextEntityTrailer, "on") &&
                  true &&
                  t.hasTrailer
                ) || A
                  ? null
                  : (0, o.jsx)(_.eP, {
                      size: "s",
                      radius: "xxxl",
                      iconSize: "xxs",
                      className: ef().trailerControl,
                      onClick: H,
                      children: (0, o.jsx)(l.Z, { id: "entity-names.trailer" }),
                    }),
              [h, H, A, t.hasTrailer],
            ),
            F = (0, r.useMemo)(
              () =>
                t.isFavouritePlaylist
                  ? void 0
                  : A
                    ? (0, o.jsx)(_.dJ, {
                        className: ef().likeControl,
                        isLiked: t.isLiked,
                        onClick: P,
                        variant: "default",
                        size: S,
                        iconSize: R,
                        iconClassName: ef().likeIcon,
                      })
                    : (0, o.jsx)(_.dJ, {
                        className: ef().likeControl,
                        isLiked: t.isLiked,
                        onClick: P,
                        withRipple: !0,
                        iconSize: R,
                        size: S,
                        variant: "default",
                        iconClassName: ef().likeIcon,
                        children: z,
                      }),
              [S, P, R, A, z, t.isFavouritePlaylist, t.isLiked],
            ),
            D = (0, r.useMemo)(
              () =>
                (0, o.jsxs)("div", {
                  className: ef().controls,
                  children: [
                    L,
                    O,
                    F,
                    !A &&
                      (0, o.jsx)(_.RT, {
                        onClick: k,
                        isPinned: t.isPinned,
                        className: ef().pinControl,
                      }),
                    (0, o.jsx)(ez, {
                      playlist: t,
                      open: C,
                      onOpenChange: j,
                      reference: (0, o.jsx)(x.z, {
                        className: ef().menuControl,
                        size: S,
                        radius: "round",
                        "aria-label": g({
                          id: "interface-actions.context-menu",
                        }),
                        icon: (0, o.jsx)(v.J, { size: R, variant: "more" }),
                        withRipple: !A,
                        ...(0, m.BA)(
                          m.QM.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU,
                        ),
                      }),
                    }),
                  ],
                }),
              [L, O, F, k, t, C, S, g, R, A],
            );
          return (0, o.jsx)(I, {
            ref: n,
            className: i,
            controls: D,
            meta: (0, o.jsx)(eM, { playlist: t }),
            entityName: g({ id: "entity-names.playlist" }),
            title: t.title,
            canChangeTitle: E,
            maxTitleLength: ex.cp,
            onTitleChange: M,
            cover: (0, o.jsx)(eP, { playlist: t }),
          });
        }),
        eH = (0, r.forwardRef)((e, t) =>
          (0, o.jsx)(eL, { forwardRef: t, ...e }),
        );
      var eO = a(90679),
        eI = a(19099),
        eF = a.n(eI);
      let eD = (0, n.Pi)((e) => {
        let { className: t, coverRadius: a = "m", isActive: i } = e,
          { settings: n } = (0, u.oR)(),
          s = (0, r.useMemo)(
            () =>
              n.layout === u.t8.Mobile
                ? (0, o.jsxs)("div", {
                    className: eF().controls,
                    children: [
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: eF().controls,
                    children: [
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().desktopPlayButton,
                        isActive: i,
                      }),
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                      (0, o.jsx)(eO.Shimmer, {
                        className: eF().button,
                        radius: "round",
                        isActive: i,
                      }),
                    ],
                  }),
            [i, n.layout],
          );
        return (0, o.jsxs)("div", {
          className: (0, b.W)(eF().root, t),
          children: [
            (0, o.jsx)(eO.Shimmer, {
              className: eF().cover,
              radius: a,
              isActive: i,
            }),
            (0, o.jsxs)("div", {
              className: eF().content,
              children: [
                (0, o.jsxs)("div", {
                  className: eF().info,
                  children: [
                    (0, o.jsx)(eO.Shimmer, {
                      className: eF().entityName,
                      radius: "s",
                      isActive: i,
                    }),
                    (0, o.jsx)(eO.Shimmer, {
                      className: eF().title,
                      radius: "xl",
                      isActive: i,
                    }),
                    (0, o.jsx)(eO.Shimmer, {
                      className: eF().meta,
                      radius: "s",
                      isActive: i,
                    }),
                  ],
                }),
                s,
              ],
            }),
          ],
        });
      });
    },
    15450: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    54394: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    24749: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    24584: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    13689: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    98014: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    75731: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
    23067: function (e) {
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
    60184: function (e) {
      e.exports = {
        menuControl: "PageHeaderAlbumControls_menuControl__wlqyr",
        likeControl: "PageHeaderAlbumControls_likeControl__eohAO",
        pinControl: "PageHeaderAlbumControls_pinControl__kq6_T",
        trailerControl: "PageHeaderAlbumControls_trailerControl___HcW0",
      };
    },
    72408: function (e) {
      e.exports = {
        meta: "PageHeaderAlbumMeta_meta__zsMI8",
        artistCover: "PageHeaderAlbumMeta_artistCover__L3jJ0",
        artistLabel: "PageHeaderAlbumMeta_artistLabel__2WZSM",
        year: "PageHeaderAlbumMeta_year__2X3NO",
        artists: "PageHeaderAlbumMeta_artists__Nfdob",
        artistsSpoiler: "PageHeaderAlbumMeta_artistsSpoiler__VOkfE",
        artistLink: "PageHeaderAlbumMeta_artistLink__eTSrZ",
        year_dot: "PageHeaderAlbumMeta_year_dot__TrSFr",
      };
    },
    77225: function (e) {
      e.exports = {
        root: "PageHeaderBase_root__xMIBu",
        coverCell: "PageHeaderBase_coverCell__nBx4c",
        content: "PageHeaderBase_content___DNyv",
        info: "PageHeaderBase_info__GRcah",
        entityContainer: "PageHeaderBase_entityContainer__BDwxT",
        title_withDisclaimerLabel:
          "PageHeaderBase_title_withDisclaimerLabel__Apuhc",
        entityName: "PageHeaderBase_entityName__9Sj_Q",
        meta: "PageHeaderBase_meta__bMvfR",
        meta_withDisclaimerLabel:
          "PageHeaderBase_meta_withDisclaimerLabel__nxckS",
        controls: "PageHeaderBase_controls__HzGgE",
      };
    },
    69516: function (e) {
      e.exports = {
        root: "PageHeaderTextField_root__Aq9UL",
        root_textarea: "PageHeaderTextField_root_textarea__OgDzd",
      };
    },
    35611: function (e) {
      e.exports = {
        root: "PageHeaderTitle_root__ESu2q",
        editButton: "PageHeaderTitle_editButton__KF4eh",
        editButton_centered: "PageHeaderTitle_editButton_centered__W9EwU",
        textField: "PageHeaderTitle_textField__LXJ3X",
        textField_long: "PageHeaderTitle_textField_long__ReeJz",
        title: "PageHeaderTitle_title__caKyB",
        version: "PageHeaderTitle_version__g5BeO",
        version_withOtherVersions:
          "PageHeaderTitle_version_withOtherVersions__Amfwk",
        heading: "PageHeaderTitle_heading__UADXi",
        heading_withVersion: "PageHeaderTitle_heading_withVersion__jw12r",
        textFieldContainer: "PageHeaderTitle_textFieldContainer__FSD_B",
        font_long: "PageHeaderTitle_font_long__q9Leq",
        font_short: "PageHeaderTitle_font_short__76VRG",
        font_mobile: "PageHeaderTitle_font_mobile__M1__v",
        stickyTitle: "PageHeaderTitle_stickyTitle__CL1m4",
      };
    },
    55608: function (e) {
      e.exports = {
        coverImage: "PageHeaderCover_coverImage__i0wBv",
        bookmateBadge: "PageHeaderCover_bookmateBadge__VBelf",
      };
    },
    19099: function (e) {
      e.exports = {
        root: "PageHeaderShimmer_root__kqSwa",
        cover: "PageHeaderShimmer_cover__ay2cr",
        content: "PageHeaderShimmer_content__SdBKK",
        info: "PageHeaderShimmer_info__cZkS2",
        entityName: "PageHeaderShimmer_entityName__tlWnA",
        title: "PageHeaderShimmer_title__xKG4e",
        meta: "PageHeaderShimmer_meta__YWx0m",
        controls: "PageHeaderShimmer_controls__gPErM",
        desktopPlayButton: "PageHeaderShimmer_desktopPlayButton__R7EmH",
        button: "PageHeaderShimmer_button__13qrG",
      };
    },
    79495: function (e) {
      e.exports = {
        playControl: "PageHeaderAlbum_playControl__fFyS9",
        controlsContainer: "PageHeaderAlbum_controlsContainer__0djMk",
        controls: "PageHeaderAlbum_controls__e3QCT",
      };
    },
    24016: function (e) {
      e.exports = {
        playControl: "PageHeaderArtist_playControl__N_3l_",
        trailerControl: "PageHeaderArtist_trailerControl__BWQXJ",
        likeControl: "PageHeaderArtist_likeControl__oEdXe",
        menuControl: "PageHeaderArtist_menuControl__8qi0J",
        pinControl: "PageHeaderArtist_pinControl__dQToz",
        controls: "PageHeaderArtist_controls__U_6g7",
        disclaimerLabel: "PageHeaderArtist_disclaimerLabel__IhLi8",
        main: "PageHeaderArtist_main__VNnip",
        rewindControl: "PageHeaderArtist_rewindControl__BWibU",
        meta: "PageHeaderArtist_meta__ZAlx_",
        label: "PageHeaderArtist_label__rXyrB",
        donationButtonTooltip: "PageHeaderArtist_donationButtonTooltip__G7XtX",
        closeTooltip: "PageHeaderArtist_closeTooltip__z2w_O",
      };
    },
    30259: function (e) {
      e.exports = {
        playControl: "PageHeaderNonMusic_playControl__g_ILX",
        controls: "PageHeaderNonMusic_controls__IlqCY",
        bookmateLogo: "PageHeaderNonMusic_bookmateLogo__ic4zt",
      };
    },
    36525: function (e) {
      e.exports = {
        trailerControl: "PageHeaderPlaylist_trailerControl__grrD9",
        pinControl: "PageHeaderPlaylist_pinControl__hJOde",
        menuControl: "PageHeaderPlaylist_menuControl__RGH0G",
        likeControl: "PageHeaderPlaylist_likeControl__bCypn",
        playControl: "PageHeaderPlaylist_playControl__yRQfm",
        controls: "PageHeaderPlaylist_controls__uSwwK",
      };
    },
    74708: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistCover_root__Vdn75",
        coverImage: "PageHeaderPlaylistCover_coverImage__OC58K",
        button: "PageHeaderPlaylistCover_button__vCYgD",
        fileUploadContainer:
          "PageHeaderPlaylistCover_fileUploadContainer___JnqP",
        fileUploadContainer_hovered:
          "PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X",
        buttonContainer: "PageHeaderPlaylistCover_buttonContainer__OkEaT",
        buttonContainer_withCursorPointer:
          "PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha",
        formFile: "PageHeaderPlaylistCover_formFile__1xnry",
      };
    },
    60656: function (e) {
      e.exports = {
        root: "PageHeaderPlaylistMeta_root__9SHZ0",
        description: "PageHeaderPlaylistMeta_description__edoVx",
        descriptionButton: "PageHeaderPlaylistMeta_descriptionButton__Jkbg9",
        descriptionLink: "PageHeaderPlaylistMeta_descriptionLink__OcY5m",
        updatedText: "PageHeaderPlaylistMeta_updatedText__FSo_0",
        descriptionActionLink:
          "PageHeaderPlaylistMeta_descriptionActionLink__aGgtK",
        addDescription: "PageHeaderPlaylistMeta_addDescription__bFw2Y",
        textField: "PageHeaderPlaylistMeta_textField__J5QMd",
        actionButtons: "PageHeaderPlaylistMeta_actionButtons__EYX8Z",
        saveButton: "PageHeaderPlaylistMeta_saveButton__rZbPS",
        cancelButton: "PageHeaderPlaylistMeta_cancelButton__Qc5lG",
      };
    },
  },
]);
